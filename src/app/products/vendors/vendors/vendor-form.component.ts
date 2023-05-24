import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BaseComponent } from '../../../base.component';
import { Vendor, VendorAdapter, VendorModel } from '../../../models/vendor.model';
import { selectProductsData } from '../../../reducers/products.reducer';
import { AppState } from '../../../reducers';
import { ProductActions } from '../../../actions/products.actions';

@Component({
  selector: 'app-vendor-form',
  templateUrl: './vendor-form.component.html',
})
export class VendorFormComponent extends BaseComponent implements OnInit {
  public form: UntypedFormGroup;
  public vendor: VendorModel;

  productsData$ = this.store.select(selectProductsData);

  constructor(
    private formBuilder: UntypedFormBuilder,
    private store: Store<AppState>,
    public dialogRef: MatDialogRef<VendorFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { vendor: Vendor }
  ) {
    super();

    // Convert input to VendorModel, so we have access to additional methods
    this.vendor = new VendorAdapter().adapt(this.data.vendor);

    // TODO: Probably better to create new endpoint GET products/all and return all results sorted by name and status
    this.store.dispatch(ProductActions.loadProducts({ params: { page: 1, size: 1000, sort: 'active,desc|name,asc' } }));
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      externalId: [this.vendor.externalId, [Validators.required]],
      name: [this.vendor.name, [Validators.required]],
      productIds: [this.vendor.productIds, [Validators.required]],
    });
  }

  get isUpdate(): boolean {
    return !!this.vendor.id;
  }

  public close(): Vendor {
    this.vendor.productIds = this.form.get('productIds').value;
    this.vendor.externalId = this.form.get('externalId').value;
    this.vendor.name = this.form.get('name').value;

    return this.vendor;
  }
}
