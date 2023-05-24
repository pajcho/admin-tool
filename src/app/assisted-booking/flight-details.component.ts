import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { BaseComponent } from '../base.component';
import { FlightPNRValidationModel } from '../models/pnr.model';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['../bookings/details/cart/cart-tabs-shared.scss'],
  styles: [':host { display: block; position: relative; }'],
  animations: [
    // Animate elements height
    trigger('openClose', [
      state('open', style({})),
      state('close', style({ opacity: 0, height: 0 })),
      transition('open => close', [animate('200ms ease-in')]),
      transition('close => open', [animate('400ms cubic-bezier(.62,-0.11,.25,1.66)')]),
    ]),
    // Hide element by setting it to display none
    trigger('showHide', [
      state('show', style({})),
      state('hide', style({ opacity: 0, display: 'none' })),
      transition('show => hide', [animate(0)]),
      transition('hide => show', [animate('200ms ease-out')]),
    ]),
  ],
})
export class FlightDetailsComponent extends BaseComponent {
  @Input() pnr: FlightPNRValidationModel;

  isOpen = false;

  toggleDetails(): void {
    this.isOpen = !this.isOpen;
  }
}
