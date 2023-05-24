import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, take, takeWhile } from 'rxjs/operators';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import { AppState } from '../../../reducers';
import { BaseComponent } from '../../../base.component';
import { companiesLoading, selectCompanyById } from '../../../reducers/companies.reducer';
import { CompanyActions } from '../../../actions/companies.actions';
import { getSelectedBooking, selectedBookingLoading } from '../../../reducers/bookings.reducer';
import { BookingActions } from '../../../actions/bookings.actions';
import { CompanyModel } from '../../../models/company.model';

@Component({
  selector: 'app-booking-details-company',
  templateUrl: './booking-details-company.component.html',
})
export class BookingDetailsCompanyComponent extends BaseComponent implements OnInit {
  company$: Observable<CompanyModel>;
  booking$ = this.store.select(getSelectedBooking);

  // Show initial loader until both company and booking details are completely loaded
  firstTimeLoading$ = combineLatest([
    this.store.select(companiesLoading),
    this.store.select(selectedBookingLoading),
  ]).pipe(
    takeWhile(([companyLoading, bookingLoading]) => {
      return companyLoading || bookingLoading;
    }, true),
    map(([companyLoading, bookingLoading]) => companyLoading || bookingLoading)
  );

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    super();
  }

  ngOnInit(): void {
    // Load company data if not already in store
    this.subscriptions.add(
      this.route.params
        .pipe(
          mergeMap((params) =>
            forkJoin([of(params), this.store.select(selectCompanyById(params.companyId)).pipe(take(1))])
          )
        )
        .subscribe(([{ companyId }, company]) => {
          if (!company?.id || company?.id !== companyId) {
            // Load company details if we don't have one in store already
            this.store.dispatch(CompanyActions.loadCompany({ id: companyId }));
          }

          this.company$ = this.store.select(selectCompanyById(companyId));
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
