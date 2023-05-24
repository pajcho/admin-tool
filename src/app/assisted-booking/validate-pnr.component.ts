import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { AppState } from '../reducers';
import { BaseComponent } from '../base.component';
import { PnrActions } from '../actions/pnr.actions';
import { isValidatingPNR } from '../reducers/pnr.reducer';
import { CompanyModel } from '../models/company.model';
import { CompanyUserModel } from '../models/company-user.model';
import { environment } from '../../environments/environment';
import { productsLoading, selectProductsData } from '../reducers/products.reducer';
import { ProductActions } from '../actions/products.actions';
import { selectVendorsData, vendorsLoading } from '../reducers/vendors.reducer';
import { ProductModel } from '../models/product.model';
import { VendorActions } from '../actions/vendors.actions';
import { VendorModel, VendorName } from '../models/vendor.model';

type MockedActions = 'update' | 'preview';
interface ValidatePNRForm {
  company: FormControl<string>;
  booker: FormControl<string>;
  product: FormControl<ProductModel>;
  vendor: FormControl<VendorModel>;
  pnr: FormControl<string>;
}

@Component({
  selector: 'app-validate-pnr',
  templateUrl: './validate-pnr.component.html',
})
export class ValidatePNRComponent extends BaseComponent implements OnChanges {
  form = this.formBuilder.group<ValidatePNRForm>({
    company: null,
    booker: null,
    product: null,
    vendor: null,
    pnr: null,
  });

  isValidatingPNR$ = this.store.select(isValidatingPNR);

  isLoadingProducts$ = this.store.select(productsLoading);
  products$ = this.store.select(selectProductsData).pipe(
    map((products) => products.filter((product) => !!product.base)),
    // Display only flight product until other product types are supported
    map((products) => products.filter((product) => product.name === 'Flight')),
    filter((products) => !!products.length),
    tap((products) => {
      // After products are loaded, preselect first product from the list
      this.form.get('product').patchValue(products[0]);
    })
  );

  isLoadingVendors$ = this.store.select(vendorsLoading);
  vendors$ = this.store.select(selectVendorsData).pipe(
    // Display only vendors that have a custom provider vendor name
    map((vendors) => vendors.filter((vendor) => !!vendor.vendorName)),
    tap((vendors) => {
      // Preselect vendor with vendorName that equals LufthansaGroup
      this.form.get('vendor').patchValue(vendors.find((vendor) => vendor.vendorName === VendorName.LUFTHANSA));
    })
  );

  @Input() company: CompanyModel;
  @Input() booker: CompanyUserModel;

  mockPnr = environment.mock.pnr;
  mockedAction$: BehaviorSubject<MockedActions> = new BehaviorSubject(null);

  constructor(protected formBuilder: FormBuilder, private store: Store<AppState>) {
    super();

    this.store.dispatch(PnrActions.resetValidatedPnr());
    this.store.dispatch(
      ProductActions.loadProducts({ params: { page: 1, size: 10, sort: 'base,desc|name,asc', active: 'true' } })
    );

    this.subscriptions.add(
      this.form
        .get('product')
        .valueChanges.pipe(distinctUntilChanged((prev, current) => JSON.stringify(prev) === JSON.stringify(current)))
        .subscribe((product) => {
          // Every time we change product we have to reload vendors as well
          this.store.dispatch(
            VendorActions.loadVendors({
              params: { page: 1, size: 10, sort: 'active,desc|name,asc', productId: product.id },
            })
          );
        })
    );
  }

  // Watch the changes on the inputs, so we can reset the form every time there is an update
  ngOnChanges(changes: SimpleChanges): void {
    const company = changes?.company;
    const booker = changes?.booker;

    if (company?.currentValue?.id && JSON.stringify(company?.previousValue) !== JSON.stringify(company?.currentValue)) {
      this.form.get('company').patchValue(this.company.corporationName);
    }

    if (booker?.currentValue?.id && JSON.stringify(booker?.previousValue) !== JSON.stringify(booker?.currentValue)) {
      this.form.get('booker').patchValue(this.booker.fullName);
    }
  }

  validate() {
    if (this.form.valid) {
      const data = this.form.getRawValue();

      // This is a hack that works with mocked data in order to mock existing PNR
      if (this.mockedAction$.getValue()) {
        data.pnr += `_${this.mockedAction$.getValue()}`;
      }

      this.store.dispatch(
        PnrActions.saveAdditionalValidationData({
          data: {
            vendorId: data.vendor.id,
            productId: data.product.id,
          },
        })
      );

      this.store.dispatch(
        PnrActions.validateFlightPnr({
          data: {
            bookingReference: {
              reference: data.pnr,
              source: data.vendor.vendorName,
            },
            bookerId: this.booker.id,
          },
        })
      );
    }
  }

  onMockedActionsClick(action: MockedActions) {
    this.mockedAction$.next(action);
  }
}
