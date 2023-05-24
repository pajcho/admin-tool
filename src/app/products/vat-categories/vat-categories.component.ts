import { Component, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { VatCategoryActions } from '../../actions/vat-categories.actions';
import { VatCategory, VatCategoryModel } from '../../models/vat-category.model';
import { selectVatCategories, selectVatCategoriesData } from '../../reducers/vat-categories.reducer';
import { ConfirmationDialogActions } from '../../actions/confirmation-dialog.actions';
import { VatCategoryFormComponent } from './vat-category-form.component';
import { selectCountriesData } from '../../reducers/countries.reducer';
import { selectProductsData } from '../../reducers/products.reducer';
import { ProductActions } from '../../actions/products.actions';
import { BaseListingComponent } from '../../base-listing.component';

@Component({
  selector: 'app-vat-categories',
  templateUrl: './vat-categories.component.html',
})
export class VatCategoriesComponent extends BaseListingComponent<VatCategory> {
  countries$ = this.store.select(selectCountriesData);
  vatCategories$ = this.store.select(selectVatCategories);
  tableDataSource$ = this.store.select(selectVatCategoriesData);
  productsData$ = this.store.select(selectProductsData);
  activeProductsData$ = this.productsData$.pipe(map((products) => products.filter((product) => product.active)));
  inactiveProductsData$ = this.productsData$.pipe(map((products) => products.filter((product) => !product.active)));

  constructor(public injector: Injector, private dialog: MatDialog) {
    super(injector);
  }

  ngOnInit(): void {
    this.sortActive = 'name';
    this.sortDirection = 'asc';
    this.columns = ['name', 'product.name', 'vatPercentage', 'active', 'actions'];
    this.loadAction = VatCategoryActions.loadVatCategories;
    this.reloadOnActions = [
      VatCategoryActions.saveVatCategoryDetailsSuccess,
      VatCategoryActions.toggleVatCategoryStatusSuccess,
    ];

    super.ngOnInit();

    // Display only ACTIVE items by default
    this.filter('active', 'true');

    // TODO: Probably better to create new endpoint GET products/all and return all results sorted by name and status
    this.store.dispatch(ProductActions.loadProducts({ params: { page: 1, size: 1000, sort: 'active,desc|name,asc' } }));
  }

  toggleStatus(vatCategory: VatCategory): void {
    this.store.dispatch(
      ConfirmationDialogActions.show({
        data: {
          template: `
            Are you sure you want to ${vatCategory.active ? 'deactivate' : 'activate'}
            <strong>${vatCategory.name}</strong>?
          `,
          confirm: {
            label: vatCategory.active ? 'Deactivate' : 'Activate',
            color: vatCategory.active ? 'warn' : 'primary',
          },
        },
        ok: () => {
          this.store.dispatch(VatCategoryActions.toggleVatCategoryStatus({ data: vatCategory }));
        },
      })
    );
  }

  save(vatCategory: VatCategoryModel | null): void {
    const dialogRef = this.dialog.open(VatCategoryFormComponent, {
      data: { vatCategory },
    });

    dialogRef.afterClosed().subscribe((vatCategory) => {
      if (vatCategory && vatCategory !== false) {
        this.store.dispatch(VatCategoryActions.saveVatCategoryDetails({ data: vatCategory }));
      }
    });
  }
}
