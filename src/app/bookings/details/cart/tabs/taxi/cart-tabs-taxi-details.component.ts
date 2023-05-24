import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseComponent } from '../../../../../base.component';
import { TaxiBookingModel } from '../../../../../models/cart-items/taxi-booking.model';
import { TaxiFullDetailsComponent } from './taxi-full-details.component';

@Component({
  selector: 'app-cart-tabs-taxi-details',
  templateUrl: './cart-tabs-taxi-details.component.html',
  styles: [':host { display: block; }'],
})
export class CartTabsTaxiDetailsComponent extends BaseComponent {
  @Input() data: TaxiBookingModel;

  constructor(public dialog: MatDialog) {
    super();
  }

  showDetails(): void {
    this.dialog.open(TaxiFullDetailsComponent, {
      maxWidth: 1200,
      minWidth: 500,
      data: { taxi: this.data },
    });
  }
}
