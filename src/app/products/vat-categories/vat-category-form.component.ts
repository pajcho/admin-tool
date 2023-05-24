import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { FormBuilder } from '@angular/forms';
import { selectCountriesData } from '../../reducers/countries.reducer';
import { Country } from '../../models/country.model';
import { AppState } from '../../reducers';
import { selectProductsData } from '../../reducers/products.reducer';
import { Product, ProductModel } from '../../models/product.model';
import { ProductActions } from '../../actions/products.actions';
import { BaseComponent } from '../../base.component';
import { VatCategory, VatCategoryAdapter, VatCategoryModel } from '../../models/vat-category.model';

// Default country is Sweden
const DEFAULT_COUNTRY_ID = '197';

@Component({
  selector: 'app-vat-category-form',
  templateUrl: './vat-category-form.component.html',
})
export class VatCategoryFormComponent extends BaseComponent {
  form = this.formBuilder.group({
    name: '',
    externalId: '',
    vatPercentage: null as number,
    country: null as Country,
    product: null as ProductModel,
  });

  vatCategory: VatCategoryModel;
  countries: Country[];
  countries$ = this.store.select(selectCountriesData);
  products: Product[];
  productsData$ = this.store.select(selectProductsData);

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    public dialogRef: MatDialogRef<VatCategoryFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { vatCategory: VatCategory }
  ) {
    super();

    // Convert input to VatCategoryModel, so we have access to additional methods
    this.vatCategory = new VatCategoryAdapter().adapt(this.data.vatCategory);

    // TODO: Probably better to create new endpoint GET products/all and return all results sorted by name and status
    this.store.dispatch(ProductActions.loadProducts({ params: { page: 1, size: 1000, sort: 'active,desc|name,asc' } }));
  }

  ngOnInit(): void {
    this.form.patchValue({
      name: this.vatCategory.name,
      externalId: this.vatCategory.externalId,
      vatPercentage: this.vatCategory.vatPercentage,
    });

    this.subscriptions.add(
      this.countries$.subscribe((data) => {
        this.countries = data;

        // Prefill with existing country or fallback to a default country
        this.form
          .get('country')
          .patchValue(
            this.countries.find((country) => country.id === (this.vatCategory.countryId || DEFAULT_COUNTRY_ID))
          );
      })
    );

    this.subscriptions.add(
      this.productsData$.subscribe((data) => {
        this.products = data;

        // Prefill with existing product
        this.form.get('product').patchValue(this.products.find((product) => product.id === this.vatCategory.productId));
      })
    );
  }

  get isUpdate(): boolean {
    return !!this.vatCategory.id;
  }

  close(): void {
    const formData = this.form.getRawValue();

    this.dialogRef.close({
      ...this.vatCategory,
      name: formData.name,
      externalId: formData.externalId,
      vatPercentage: formData.vatPercentage,
      productId: formData.product.id,
      productName: formData.product.name,
      countryId: formData.country.id,
    });
  }
}
