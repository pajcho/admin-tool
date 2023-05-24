import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { filter, map, tap } from 'rxjs/operators';
import { BehaviorSubject, noop } from 'rxjs';
import { Router } from '@angular/router';
import { AppState } from '../reducers';
import { BaseComponent } from '../base.component';
import { CompanyUserModel } from '../models/company-user.model';
import { FlightPNRConfirmationForm, FlightPNRConfirmationRequest, FlightPNRValidationModel } from '../models/pnr.model';
import { CostCenterActions } from '../actions/cost-center.actions';
import { selectTravellerCostCentersData, travellerCostCentersLoading } from '../reducers/cost-center.reducer';
import { PaymentActions } from '../actions/payment.actions';
import { isLoadingPaymentOptions, selectBillingProfiles, selectLodgeCards } from '../reducers/payment.reducer';
import { PaymentType, SalesModel } from '../models/payment.model';
import { CompanyModel } from '../models/company.model';
import { EmployeeService } from '../services/employee.service';
import { EmployeeAdapter, EmployeeModel } from '../models/employee.model';
import { PnrActions } from '../actions/pnr.actions';
import { isConfirmingPNR, selectAdditionalPNRData, selectPNRCartId } from '../reducers/pnr.reducer';
import { GlobalActions } from '../actions/global.actions';
import { CheckoutActions } from '../actions/checkout.actions';
import {
  hasMandatoryReferenceFields,
  isLoadingBookingChannels,
  isLoadingCheckoutOptions,
  selectBookingChannels,
  selectCheckoutOptions,
  selectCheckoutPaymentOptions,
} from '../reducers/checkout.reducer';
import { VendorsPaymentProvider, VendorPaymentPresentation } from '../models/vendors-payment-provider.model';
import { VendorsPaymentProviderActions } from '../actions/vendors-payment-providers.actions';
import {
  selectVendorsPaymentProvidersData,
  vendorsPaymentProviderLoading,
} from '../reducers/vendors-payment-providers.reducer';

@Component({
  selector: 'app-product-details-form',
  templateUrl: './product-details-form.component.html',
})
export class ProductDetailsFormComponent extends BaseComponent implements OnChanges, OnInit {
  SalesModel = SalesModel;
  salesModels: SalesModel[] = [SalesModel.PASS_THROUGH, SalesModel.ADD_MARKUP];

  PaymentType = PaymentType;
  paymentTypes: PaymentType[] = [PaymentType.BILLING_PROFILE, PaymentType.LODGE_CARD];

  @Input() company: CompanyModel;
  @Input() booker: CompanyUserModel;
  @Input() pnr: FlightPNRValidationModel;

  employees$: BehaviorSubject<EmployeeModel[]> = new BehaviorSubject([]);
  uniqueEmployees$: BehaviorSubject<EmployeeModel[]> = new BehaviorSubject([]);

  isConfirmingPNR$ = this.store.select(isConfirmingPNR);
  travellerCostCentersLoading$ = this.store.select(travellerCostCentersLoading);
  getTravellerCostCenters$ = (id: string) =>
    this.store
      .select(selectTravellerCostCentersData)
      .pipe(map((data) => data.find((costCenters) => costCenters.customerId === id)));

  getLodgeCards$ = this.store.select(selectLodgeCards);
  getBillingProfiles$ = this.store.select(selectBillingProfiles);
  isLoadingPaymentOptions$ = this.store.select(isLoadingPaymentOptions).pipe(
    tap((loading) => {
      if (!loading) {
        this.form.get('billingProfile')?.enable();
        this.form.get('lodgeCard')?.enable();
        this.form.get('vendorsLodgeCard')?.enable();
      }
    })
  );

  vendorsPaymentProviders$ = this.store.select(selectVendorsPaymentProvidersData).pipe(
    map((providers) => {
      return providers.filter((provider) => this.pnr.vendorType.includes(provider.vendorPaymentPresentation));
    })
  );

  isLoadingVendorsPaymentProviders$ = this.store.select(vendorsPaymentProviderLoading);

  bookingChannels$ = this.store.select(selectBookingChannels);
  isLoadingBookingChannels$ = this.store.select(isLoadingBookingChannels);

  checkoutOptions$ = this.store.select(selectCheckoutOptions);
  isLoadingCheckoutOptions$ = this.store.select(isLoadingCheckoutOptions);
  checkoutPaymentOptions$ = this.store.select(selectCheckoutPaymentOptions).pipe(
    // Convert array to key => value pairs for easy access from template
    map((options) => {
      return Object.fromEntries(options.map((option) => [option.name, option.selected]));
    })
  );

  hasMandatoryReferenceFields$ = this.store.select(hasMandatoryReferenceFields);

  form = this.formBuilder.group<FlightPNRConfirmationForm>({
    travellers: new FormArray([]),
    salesModel: null,
    purchasePrice: new FormControl({ value: null, disabled: true }),
    sellPrice: new FormControl({ value: null, disabled: true }),
    paymentMethod: null,
    vendorsPaymentProvider: null,
    agentFee: null,
    note: null,
    project: null,
    purposeOfTrip: null,
    yourReference: null,
  });

  constructor(
    private router: Router,
    private store: Store<AppState>,
    protected formBuilder: FormBuilder,
    private employeeService: EmployeeService
  ) {
    super();

    this.subscriptions.add(
      this.employees$.pipe(filter((employees) => !!employees.length)).subscribe((employees) => {
        // Get the list of unique employees based on the externalId property. In case we have multiple
        // employees with the same name we will get all of them in the list grouped by externalId
        this.uniqueEmployees$.next(
          employees.filter((employee, index, array) => {
            return array.findIndex((item) => item.externalId === employee.externalId) === index;
          })
        );

        this.store.dispatch(
          CostCenterActions.loadTravellerCostCenters({
            // Get unique list of employee IDs to load cost centers for. We will use bookers ID for guest travellers
            ids: [...new Set(employees.map((employee) => employee.id || this.booker.id))],
          })
        );
      })
    );

    this.subscriptions.add(
      this.uniqueEmployees$.subscribe((uniqueEmployees) => {
        uniqueEmployees.forEach((traveller) => {
          this.formTravellers.push(
            this.formBuilder.group({
              id: traveller.id,
              externalId: traveller.externalId,
              name: traveller.fullName,
              email: this.hasNamesake(traveller.fullName) ? null : traveller.email,
              costCenter: null,
            })
          );
        });
      })
    );

    this.subscriptions.add(
      this.store
        .select(selectPNRCartId)
        .pipe(
          filter((id) => !!id),
          tap((id) => {
            this.store.dispatch(GlobalActions.showSuccessMessage({ message: 'PNR booking successfully created!' }));
            this.store.dispatch(PnrActions.resetValidatedPnr());
            this.router.navigate([`/companies/bookings/${id}`]).then(noop);
          })
        )
        .subscribe()
    );

    this.subscriptions.add(
      this.store
        .select(selectAdditionalPNRData)
        .pipe(
          filter((data) => !!data),
          tap((data) => {
            this.store.dispatch(
              VendorsPaymentProviderActions.loadVendorsPaymentProviders({
                params: {
                  page: 1,
                  size: 10,
                  sort: 'name,asc',
                  active: 'true',
                  vendorId: data.vendorId,
                },
              })
            );
          })
        )
        .subscribe()
    );
  }

  ngOnInit(): void {
    this.store.dispatch(CheckoutActions.loadBookingChannels());
    this.store.dispatch(CheckoutActions.loadOptions({ companyId: this.company.id }));
  }

  ngOnChanges(changes: SimpleChanges): void {
    const pnr = changes?.pnr;
    const previousValue = JSON.stringify(pnr?.previousValue, ['totalPrice', 'travellers']);
    const currentValue = JSON.stringify(pnr?.currentValue, ['totalPrice', 'travellers']);

    if (pnr?.currentValue?.state && previousValue !== currentValue) {
      this.form.get('purchasePrice').setValue(this.pnr.totalPrice);
      this.form.get('sellPrice').setValue(this.pnr.totalPrice);

      // TODO: Add this to state so we can avoid having to reload travellers every time tab is changed
      this.employeeService.resolveFromTravellers(this.company.id, this.pnr.travellers).subscribe((employees) => {
        this.employees$.next(employees.map((employee) => new EmployeeAdapter().adapt(employee)));
      });
    }
  }

  confirm() {
    // Trigger validators on the travellers form
    this.formTravellers.markAllAsTouched();

    if (this.form.valid) {
      const formData = this.form.getRawValue();

      const params: FlightPNRConfirmationRequest = {
        tripName: this.pnr.flightDetailsTitle,
        bookingReference: this.pnr.bookingReference,
        bookerId: this.booker.id,
        finalDestination: this.pnr.finalDestination || this.pnr.flightDestination.airportCode,
        travellers: formData.travellers.map((traveller) => {
          return {
            id: traveller.id,
            externalId: traveller.externalId,
            costCenterId: traveller.costCenter.id,
            phone: '',
            email: traveller.email,
          };
        }),
        paymentInfo: {
          customerPaymentType: PaymentType[formData.paymentMethod],
          customerPaymentId: formData.billingProfile?.id || formData.lodgeCard?.id,
          sellPrice: formData.sellPrice,
          vendorPaymentPresentation: formData.vendorsPaymentProvider.vendorPaymentPresentation,
          vendorPaymentProviderId: formData.vendorsPaymentProvider.id,
          vendorPaymentId: formData.referenceId || formData.vendorsLodgeCard?.id,
          // We only send exchange penalty price and residual value for existing PNRs
          exchangePenalty: this.pnr.isNew ? undefined : formData.exchangePenalty,
          residualValue: this.pnr.isNew ? undefined : formData.residualValue,
        },
        referenceFields: {
          projectId: formData.project?.id,
          projectName: formData.project?.name,
          purposeOfTripId: formData.purposeOfTrip?.id,
          purposeOfTripName: formData.purposeOfTrip?.name,
          yourReference: formData.yourReference || undefined,
        },
        agentFee: formData.agentFee.name,
        agentNote: formData.note,
      };

      this.store.dispatch(PnrActions.confirmFlightPnr({ data: params }));
    }
  }

  get formTravellers(): FormArray {
    return this.form.controls['travellers'];
  }

  onPaymentMethodChange(value): void {
    this.store.dispatch(PaymentActions.loadPaymentOptions({ id: this.booker.id }));

    switch (value) {
      case PaymentType.BILLING_PROFILE:
        this.form.addControl('billingProfile', new FormControl({ value: null, disabled: true }));
        this.form.removeControl('lodgeCard');
        break;
      case PaymentType.LODGE_CARD:
        this.form.addControl('lodgeCard', new FormControl({ value: null, disabled: true }));
        this.form.removeControl('billingProfile');
        break;
    }
  }

  onSalesModelChange(value): void {
    switch (value) {
      case SalesModel.PASS_THROUGH:
        this.form.get('sellPrice').disable();
        this.form.removeControl('exchangePenalty');
        this.form.removeControl('residualValue');
        break;
      case SalesModel.ADD_MARKUP:
        this.form.get('sellPrice').enable();
        this.form.addControl('exchangePenalty', new FormControl(null));
        this.form.addControl('residualValue', new FormControl(null));
        break;
    }
  }

  onVendorsPaymentProviderChange(provider: VendorsPaymentProvider): void {
    switch (provider?.vendorPaymentPresentation) {
      case VendorPaymentPresentation.VCC:
        this.form.addControl('referenceId', new FormControl(''));
        this.form.removeControl('vendorsLodgeCard');
        break;
      case VendorPaymentPresentation.LODGE_CARD:
        this.store.dispatch(PaymentActions.loadPaymentOptions({ id: this.booker.id }));

        this.form.addControl('vendorsLodgeCard', new FormControl({ value: null, disabled: true }));
        this.form.removeControl('referenceId');
        break;
      default:
        this.form.removeControl('referenceId');
        this.form.removeControl('vendorsLodgeCard');
        break;
    }
  }

  onEmployeeSelect(value: string, index: number): void {
    const employee = this.employees$.getValue().find((employee) => employee.email === value);

    this.formTravellers.at(index).patchValue({ id: employee.id, name: employee.fullName, email: employee.email });
  }

  getEmployeesByName(name: string): EmployeeModel[] {
    return this.employees$.getValue().filter((employee) => employee.fullName === name);
  }

  hasNamesake(name: string): boolean {
    return this.getEmployeesByName(name).length > 1;
  }

  employeeId(travellerForm: AbstractControl): string {
    return travellerForm.get('id').value;
  }
}
