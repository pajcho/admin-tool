import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '../../base.component';
import { Product, ProductAdapter, ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent extends BaseComponent {
  public form: UntypedFormGroup;
  public product: ProductModel;

  constructor(
    private formBuilder: UntypedFormBuilder,
    public dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Product }
  ) {
    super();

    // Convert input to ProductModel, so we have access to additional methods
    this.product = new ProductAdapter().adapt(this.data.product);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.product.name, [Validators.required]],
      base: [this.product.base],
    });
  }

  get isUpdate(): boolean {
    return !!this.product.id;
  }

  public close(): Product {
    this.product.name = this.form.get('name').value;
    this.product.base = this.form.get('base').value;

    return this.product;
  }
}
