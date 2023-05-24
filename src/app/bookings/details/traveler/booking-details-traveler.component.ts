import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { map, take, takeWhile, withLatestFrom } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { AppState } from '../../../reducers';
import { BaseComponent } from '../../../base.component';
import { companyUsersLoading, getSelectedCompanyUser } from '../../../reducers/company-users.reducer';
import { CompanyUserActions } from '../../../actions/company-users.actions';

import { BookingActions } from '../../../actions/bookings.actions';
import { getSelectedBooking, selectedBookingLoading } from '../../../reducers/bookings.reducer';

@Component({
  selector: 'app-booking-details-traveler',
  templateUrl: './booking-details-traveler.component.html',
})
export class BookingDetailsTravelerComponent extends BaseComponent implements OnInit {
  booking$ = this.store.select(getSelectedBooking);
  companyUser$ = this.store.select(getSelectedCompanyUser);

  // Show initial loader until both company and company user details are completely loaded
  firstTimeLoading$ = combineLatest([
    this.store.select(companyUsersLoading),
    this.store.select(selectedBookingLoading),
  ]).pipe(
    takeWhile(([companyUserLoading, bookingLoading]) => {
      return companyUserLoading || bookingLoading;
    }, true),
    map(([companyUserLoading, bookingLoading]) => companyUserLoading || bookingLoading)
  );

  activeTab: 'active' | 'past' = 'active';

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    super();
  }

  ngOnInit(): void {
    // Load company user data if not already in store
    this.subscriptions.add(
      this.route.params
        .pipe(withLatestFrom(this.store.select(getSelectedCompanyUser)))
        .subscribe(([{ userId }, traveler]) => {
          if (!traveler.id || traveler.id !== userId) {
            this.store.dispatch(CompanyUserActions.loadAndSelectCompanyUser({ id: userId }));
          }
        })
    );

    // Load booking data if not already in store
    this.subscriptions.add(
      this.booking$.pipe(take(1)).subscribe((booking) => {
        const id = this.route.snapshot.params['id'];
        if (!booking.cartId || booking.cartId !== id) {
          this.store.dispatch(BookingActions.loadAndSelectBooking({ id }));
        }
      })
    );
  }
}
