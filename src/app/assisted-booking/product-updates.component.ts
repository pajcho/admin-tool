import { Component, Input } from '@angular/core';
import { BaseComponent } from '../base.component';
import { FlightPNRValidationModel } from '../models/pnr.model';

@Component({
  selector: 'app-product-updates',
  templateUrl: './product-updates.component.html',
})
export class ProductUpdatesComponent extends BaseComponent {
  @Input() updates: FlightPNRValidationModel['updates'];
}
