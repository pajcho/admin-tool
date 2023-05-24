import { Component, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductActions } from '../../actions/products.actions';
import { Product, ProductModel } from '../../models/product.model';
import { selectProducts, selectProductsData } from '../../reducers/products.reducer';
import { ProductFormComponent } from './product-form.component';
import { BaseListingComponent } from '../../base-listing.component';
import { ConfirmationDialogActions } from '../../actions/confirmation-dialog.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent extends BaseListingComponent<Product> {
  products$ = this.store.select(selectProducts);
  tableDataSource$ = this.store.select(selectProductsData);

  constructor(public injector: Injector, public dialog: MatDialog) {
    super(injector);
  }

  ngOnInit(): void {
    this.sortActive = 'name';
    this.sortDirection = 'asc';
    this.columns = ['name', 'base', 'active', 'actions'];
    this.loadAction = ProductActions.loadProducts;
    this.reloadOnActions = [ProductActions.saveProductDetailsSuccess, ProductActions.toggleProductStatusSuccess];

    super.ngOnInit();

    // Display only ACTIVE items by default
    this.filter('active', 'true');
  }

  toggleStatus(product: Product): void {
    this.store.dispatch(
      ConfirmationDialogActions.show({
        data: {
          template: `
            Are you sure you want to ${product.active ? 'deactivate' : 'activate'}
            <strong>${product.name}</strong>?
          `,
          confirm: {
            label: product.active ? 'Deactivate' : 'Activate',
            color: product.active ? 'warn' : 'primary',
          },
        },
        ok: () => {
          this.store.dispatch(ProductActions.toggleProductStatus({ data: product }));
        },
      })
    );
  }

  save(product: ProductModel | null): void {
    const dialogRef = this.dialog.open(ProductFormComponent, {
      data: { product },
    });

    dialogRef.afterClosed().subscribe((product) => {
      if (product && product !== false) {
        this.store.dispatch(ProductActions.saveProductDetails({ data: product }));
      }
    });
  }
}
