import { Component, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { VendorActions } from '../../../actions/vendors.actions';
import { Vendor, VendorModel } from '../../../models/vendor.model';
import { selectVendors, selectVendorsData } from '../../../reducers/vendors.reducer';
import { VendorFormComponent } from './vendor-form.component';
import { ConfirmationDialogActions } from '../../../actions/confirmation-dialog.actions';
import { BaseListingComponent } from '../../../base-listing.component';
import { ProductActions } from '../../../actions/products.actions';
import { selectProductsData } from '../../../reducers/products.reducer';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
})
export class VendorsComponent extends BaseListingComponent<Vendor> {
  vendors$ = this.store.select(selectVendors);
  tableDataSource$ = this.store.select(selectVendorsData);
  productsData$ = this.store.select(selectProductsData);
  activeProductsData$ = this.productsData$.pipe(map((products) => products.filter((product) => product.active)));
  inactiveProductsData$ = this.productsData$.pipe(map((products) => products.filter((product) => !product.active)));

  constructor(public injector: Injector, private dialog: MatDialog) {
    super(injector);
  }

  ngOnInit(): void {
    this.sortActive = 'name';
    this.sortDirection = 'asc';
    this.columns = ['name', 'externalId', 'active', 'actions'];
    this.loadAction = VendorActions.loadVendors;
    this.reloadOnActions = [
      VendorActions.saveVendorDetailsSuccess,
      VendorActions.deleteVendorSuccess,
      VendorActions.toggleVendorStatusSuccess,
    ];

    super.ngOnInit();

    // Display only ACTIVE items by default
    this.filter('active', 'true');

    // TODO: Probably better to create new endpoint GET products/all and return all results sorted by name and status
    this.store.dispatch(ProductActions.loadProducts({ params: { page: 1, size: 1000, sort: 'active,desc|name,asc' } }));
  }

  toggleStatus(vendor: Vendor): void {
    this.store.dispatch(
      ConfirmationDialogActions.show({
        data: {
          template: `
            Are you sure you want to ${vendor.active ? 'deactivate' : 'activate'}
            <strong>${vendor.name}</strong>?
          `,
          confirm: {
            label: vendor.active ? 'Deactivate' : 'Activate',
            color: vendor.active ? 'warn' : 'primary',
          },
        },
        ok: () => {
          this.store.dispatch(VendorActions.toggleVendorStatus({ data: vendor }));
        },
      })
    );
  }

  save(vendor: VendorModel | null): void {
    const dialogRef = this.dialog.open(VendorFormComponent, {
      data: { vendor },
    });

    dialogRef.afterClosed().subscribe((vendor) => {
      if (vendor && vendor !== false) {
        this.store.dispatch(VendorActions.saveVendorDetails({ data: vendor }));
      }
    });
  }

  delete(vendor: VendorModel): void {
    this.store.dispatch(
      ConfirmationDialogActions.show({
        data: {
          template: `
            Are you sure you want to delete <strong>${vendor.name}</strong> vendor?
            <br>
            This action can not be undone.
          `,
          confirm: {
            label: 'Delete',
            color: 'warn',
          },
        },
        ok: () => {
          this.store.dispatch(VendorActions.deleteVendor({ data: vendor }));
        },
      })
    );
  }
}
