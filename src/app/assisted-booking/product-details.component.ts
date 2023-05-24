import { Component, Input } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AppState } from '../reducers';
import { BaseComponent } from '../base.component';
import { CompanyUserModel } from '../models/company-user.model';
import { FlightPNRValidationModel } from '../models/pnr.model';
import { CompanyModel } from '../models/company.model';
import { FlightDestination } from '../models/cart-items/flight.model';
import { PnrActions } from '../actions/pnr.actions';
import { isConfirmingPNR } from '../reducers/pnr.reducer';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent extends BaseComponent {
  flightDestination$: BehaviorSubject<FlightDestination> = new BehaviorSubject(null);

  @Input() company: CompanyModel;
  @Input() booker: CompanyUserModel;
  @Input() pnr: FlightPNRValidationModel;

  isConfirmingPNR$ = this.store.select(isConfirmingPNR);

  constructor(private router: Router, private store: Store<AppState>, protected formBuilder: UntypedFormBuilder) {
    super();
  }

  get hasFlightDestination(): boolean {
    return !!this.pnr.flightDestination;
  }

  selectFlightDestination(destination: FlightDestination): void {
    this.flightDestination$.next(destination);
  }

  confirmFlightDestination(): void {
    this.store.dispatch(
      PnrActions.setFlightFinalDestination({ destination: this.flightDestination$.value.airportCode })
    );
  }

  get pageTitle(): string {
    if (this.pnr.isNew) return 'Create new';
    if (this.pnr.isPreview) return 'Preview existing';

    return 'Update existing';
  }
}
