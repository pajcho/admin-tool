import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseComponent } from '../../../../../base.component';
import { TrainBookingModel } from '../../../../../models/cart-items/train-booking.model';
import { TrainFullDetailsComponent } from './train-full-details.component';

@Component({
  selector: 'app-cart-tabs-train-details',
  templateUrl: './cart-tabs-train-details.component.html',
  styles: [':host { display: block; }'],
})
export class CartTabsTrainDetailsComponent extends BaseComponent {
  @Input() data: TrainBookingModel;

  constructor(public dialog: MatDialog) {
    super();
  }

  showDetails(): void {
    this.dialog.open(TrainFullDetailsComponent, {
      maxWidth: 1200,
      minWidth: 500,
      data: { train: this.data },
    });
  }
}
