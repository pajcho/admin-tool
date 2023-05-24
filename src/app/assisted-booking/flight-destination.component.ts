import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from '../base.component';
import { FlightPNRValidationModel } from '../models/pnr.model';
import { FlightDestination } from '../models/cart-items/flight.model';

@Component({
  selector: 'app-flight-destination',
  templateUrl: './flight-destination.component.html',
})
export class FlightDestinationComponent extends BaseComponent {
  @Input() pnr: FlightPNRValidationModel;
  @Input() destination: FlightDestination;
  @Output() onSelect = new EventEmitter<FlightDestination>();

  isSelected(destination: FlightDestination): boolean {
    return this.destination?.time === destination.time;
  }

  select(destination: FlightDestination): void {
    this.onSelect.emit(destination);
  }
}
