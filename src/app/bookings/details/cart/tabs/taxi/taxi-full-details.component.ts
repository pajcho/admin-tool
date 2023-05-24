import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseComponent } from '../../../../../base.component';
import { TaxiBookingModel } from '../../../../../models/cart-items/taxi-booking.model';
import { taxiOfferVehicleCategoryMap, taxiTransferTypeMap } from '../../../../../models/cart-items/taxi.model';

@Component({
  selector: 'app-taxi-full-details',
  templateUrl: './taxi-full-details.component.html',
  styleUrls: ['../../cart-tabs-shared.scss'],
})
export class TaxiFullDetailsComponent extends BaseComponent {
  public taxi: TaxiBookingModel;

  taxiTransferTypeMap = taxiTransferTypeMap;
  taxiOfferVehicleCategoryMap = taxiOfferVehicleCategoryMap;

  constructor(
    public dialogRef: MatDialogRef<TaxiFullDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { taxi: TaxiBookingModel }
  ) {
    super();

    this.taxi = data.taxi;
  }
}
