import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { BookingReferenceTypes } from './models/booking.model';

@Component({
  template: '',
})
export abstract class BaseComponent implements OnDestroy {
  protected subscriptions: Subscription;

  constructor() {
    this.subscriptions = new Subscription();
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  /**
   * Custom match validator
   * @param matchTo Name of the control to match to
   * TODO: Find a better place to move this. Maybe create validation utility?
   */
  public matches(matchTo: string): (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return !!control.parent && !!control.parent.value && control.value === control.parent.controls[matchTo].value
        ? null
        : { isMatching: false };
    };
  }

  /**
   * ReferenceType should only be kept if a BookingReference or FlightTicketNumber are set
   * @param params Key value pair of params and their values that will be used
   * TODO: Find a better place to move this. Maybe create validation helper utility?
   */
  public validateReferenceType(params: Record<string, string>): Record<string, string> {
    if (!params.referenceType) {
      // If there is no reference type we need to clear booking reference and flight ticket number fields
      delete params.bookingReference;
      delete params.flightTicketNumber;

      return params;
    }

    switch (params.referenceType) {
      // If we are searching for Flights we can enter either booking reference or a flight ticket number
      case BookingReferenceTypes.Flight:
        if (!params.bookingReference && !params.flightTicketNumber) delete params.referenceType;
        break;
      // Otherwise booking reference is required
      default:
        if (!params.bookingReference) delete params.referenceType;
        break;
    }

    return params;
  }
}
