import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseComponent } from '../../../../../base.component';
import { FlightBookingModel } from '../../../../../models/cart-items/flight-booking.model';
import { FlightFullDetailsComponent } from './flight-full-details.component';
import { FlightModel } from '../../../../../models/cart-items/flight.model';

@Component({
  selector: 'app-cart-tabs-flight-details',
  templateUrl: './cart-tabs-flight-details.component.html',
  styles: [':host { display: block; }'],
})
export class CartTabsFlightDetailsComponent extends BaseComponent {
  @Input() data: FlightBookingModel;

  constructor(public dialog: MatDialog) {
    super();
  }

  showDetails(flight: FlightModel): void {
    this.dialog.open(FlightFullDetailsComponent, {
      maxWidth: 1200,
      minWidth: 500,
      data: { flight, flightBooking: this.data },
    });
  }
}
