import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseComponent } from '../../../../../base.component';
import { HotelBookingModel } from '../../../../../models/cart-items/hotel-booking.model';
import { HotelFullDetailsComponent } from './hotel-full-details.component';

@Component({
  selector: 'app-cart-tabs-hotel-details',
  templateUrl: './cart-tabs-hotel-details.component.html',
  styles: [':host { display: block; }'],
})
export class CartTabsHotelDetailsComponent extends BaseComponent {
  @Input() data: HotelBookingModel;

  constructor(public dialog: MatDialog) {
    super();
  }

  showDetails(): void {
    this.dialog.open(HotelFullDetailsComponent, {
      maxWidth: 1200,
      minWidth: 500,
      data: { hotel: this.data },
    });
  }
}
