import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BaseComponent } from '../../../base.component';
import {
  VendorsPaymentProvider,
  VendorsPaymentProviderAdapter,
  VendorsPaymentProviderModel,
} from '../../../models/vendors-payment-provider.model';
import { selectVendorsData } from '../../../reducers/vendors.reducer';
import { AppState } from '../../../reducers';
import { VendorActions } from '../../../actions/vendors.actions';

@Component({
  selector: 'app-vendors-payment-provider-form',
  templateUrl: './vendors-payment-provider-form.component.html',
})
export class VendorsPaymentProviderFormComponent extends BaseComponent {
  public form: UntypedFormGroup;
  public item: VendorsPaymentProviderModel;

  vendorsData$ = this.store.select(selectVendorsData);

  constructor(
    private formBuilder: UntypedFormBuilder,
    private store: Store<AppState>,
    public dialogRef: MatDialogRef<VendorsPaymentProviderFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { item: VendorsPaymentProvider }
  ) {
    super();

    // Convert input to VendorsPaymentProviderModel, so we have access to additional methods
    this.item = new VendorsPaymentProviderAdapter().adapt(this.data.item);

    // TODO: Probably better to create new endpoint GET vendors/all and return all results sorted by name and status
    this.store.dispatch(VendorActions.loadVendors({ params: { page: 1, size: 1000, sort: 'active,desc|name,asc' } }));
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      externalId: [this.item.externalId, [Validators.required]],
      name: [this.item.name, [Validators.required]],
      vendorIds: [this.item.vendorIds, [Validators.required]],
    });
  }

  get isUpdate(): boolean {
    return !!this.item.id;
  }

  public close(): VendorsPaymentProvider {
    this.item.vendorIds = this.form.get('vendorIds').value;
    this.item.externalId = this.form.get('externalId').value;
    this.item.name = this.form.get('name').value;

    return this.item;
  }
}
