import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseComponent } from '../../../../../base.component';
import { FlightModel } from '../../../../../models/cart-items/flight.model';
import { FlightBookingModel } from '../../../../../models/cart-items/flight-booking.model';

@Component({
  selector: 'app-flight-full-details',
  templateUrl: './flight-full-details.component.html',
  styleUrls: ['../../cart-tabs-shared.scss'],
})
export class FlightFullDetailsComponent extends BaseComponent {
  public flight: FlightModel;
  public flightBooking: FlightBookingModel;

  constructor(
    public dialogRef: MatDialogRef<FlightFullDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { flight: FlightModel; flightBooking: FlightBookingModel }
  ) {
    super();

    this.flight = data.flight;
    this.flightBooking = data.flightBooking;
  }
}
