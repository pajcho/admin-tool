import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseComponent } from '../../../../../base.component';
import { RentalCarFullDetailsComponent } from './rental-car-full-details.component';
import { RentalCarBookingModel } from '../../../../../models/cart-items/rental-car-booking.model';

@Component({
  selector: 'app-cart-tabs-rental-car-details',
  templateUrl: './cart-tabs-rental-car-details.component.html',
  styles: [':host { display: block; }'],
})
export class CartTabsRentalCarDetailsComponent extends BaseComponent {
  @Input() data: RentalCarBookingModel;

  constructor(public dialog: MatDialog) {
    super();
  }

  showDetails(): void {
    this.dialog.open(RentalCarFullDetailsComponent, {
      maxWidth: 1200,
      minWidth: 500,
      data: { car: this.data },
    });
  }
}
