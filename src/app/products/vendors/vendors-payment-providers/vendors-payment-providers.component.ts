import { Component, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { VendorsPaymentProviderActions } from '../../../actions/vendors-payment-providers.actions';
import { VendorsPaymentProvider, VendorsPaymentProviderModel } from '../../../models/vendors-payment-provider.model';
import {
  selectVendorsPaymentProviders,
  selectVendorsPaymentProvidersData,
} from '../../../reducers/vendors-payment-providers.reducer';
import { VendorsPaymentProviderFormComponent } from './vendors-payment-provider-form.component';
import { BaseListingComponent } from '../../../base-listing.component';
import { ConfirmationDialogActions } from '../../../actions/confirmation-dialog.actions';
import { selectVendorsData } from '../../../reducers/vendors.reducer';
import { VendorActions } from '../../../actions/vendors.actions';

@Component({
  selector: 'app-vendors-payment-providers',
  templateUrl: './vendors-payment-providers.component.html',
})
export class VendorsPaymentProvidersComponent extends BaseListingComponent<VendorsPaymentProvider> {
  items$ = this.store.select(selectVendorsPaymentProviders);
  tableDataSource$ = this.store.select(selectVendorsPaymentProvidersData);
  vendorsData$ = this.store.select(selectVendorsData);
  activeVendorsData$ = this.vendorsData$.pipe(map((vendors) => vendors.filter((vendor) => vendor.active)));
  inactiveVendorsData$ = this.vendorsData$.pipe(map((vendors) => vendors.filter((vendor) => !vendor.active)));

  constructor(public injector: Injector, public dialog: MatDialog) {
    super(injector);
  }

  ngOnInit(): void {
    this.sortActive = 'name';
    this.sortDirection = 'asc';
    this.columns = ['name', 'externalId', 'active', 'actions'];
    this.loadAction = VendorsPaymentProviderActions.loadVendorsPaymentProviders;
    this.reloadOnActions = [
      VendorsPaymentProviderActions.saveVendorsPaymentProviderDetailsSuccess,
      VendorsPaymentProviderActions.toggleVendorsPaymentProviderStatusSuccess,
    ];

    super.ngOnInit();

    // Display only ACTIVE items by default
    this.filter('active', 'true');

    // TODO: Probably better to create new endpoint GET vendors/all and return all results sorted by name and status
    this.store.dispatch(VendorActions.loadVendors({ params: { page: 1, size: 1000, sort: 'active,desc|name,asc' } }));
  }

  toggleStatus(item: VendorsPaymentProvider): void {
    this.store.dispatch(
      ConfirmationDialogActions.show({
        data: {
          template: `
            Are you sure you want to ${item.active ? 'deactivate' : 'activate'}
            <strong>${item.name}</strong>?
          `,
          confirm: {
            label: item.active ? 'Deactivate' : 'Activate',
            color: item.active ? 'warn' : 'primary',
          },
        },
        ok: () => {
          this.store.dispatch(VendorsPaymentProviderActions.toggleVendorsPaymentProviderStatus({ data: item }));
        },
      })
    );
  }

  save(item: VendorsPaymentProviderModel | null): void {
    const dialogRef = this.dialog.open(VendorsPaymentProviderFormComponent, {
      data: { item },
    });

    dialogRef.afterClosed().subscribe((item) => {
      if (item && item !== false) {
        this.store.dispatch(VendorsPaymentProviderActions.saveVendorsPaymentProviderDetails({ data: item }));
      }
    });
  }
}
