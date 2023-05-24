import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HotelBookingModel } from '../../../../../models/cart-items/hotel-booking.model';
import { BaseComponent } from '../../../../../base.component';

@Component({
  selector: 'app-hotel-full-details',
  templateUrl: './hotel-full-details.component.html',
})
export class HotelFullDetailsComponent extends BaseComponent {
  public hotel: HotelBookingModel;

  constructor(
    public dialogRef: MatDialogRef<HotelFullDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { hotel: HotelBookingModel }
  ) {
    super();

    this.hotel = data.hotel;
  }
}
