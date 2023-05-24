import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseComponent } from '../../../../../base.component';
import { RentalCarBookingModel } from '../../../../../models/cart-items/rental-car-booking.model';

@Component({
  selector: 'app-rental-car-full-details',
  templateUrl: './rental-car-full-details.component.html',
  styleUrls: ['../../cart-tabs-shared.scss'],
})
export class RentalCarFullDetailsComponent extends BaseComponent {
  public car: RentalCarBookingModel;

  constructor(
    public dialogRef: MatDialogRef<RentalCarFullDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { car: RentalCarBookingModel }
  ) {
    super();

    this.car = data.car;
  }
}
