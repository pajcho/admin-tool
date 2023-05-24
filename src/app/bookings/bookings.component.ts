import { Component, Injector } from '@angular/core';
import { noop } from 'rxjs';
import { BaseListingComponent } from '../base-listing.component';
import { selectBookings, selectBookingsData } from '../reducers/bookings.reducer';
import { BookingActions } from '../actions/bookings.actions';
import { BookingListItem } from '../models/booking-list-item.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
})
export class BookingsComponent extends BaseListingComponent<BookingListItem> {
  bookings$ = this.store.select(selectBookings);
  tableDataSource$ = this.store.select(selectBookingsData);

  constructor(public injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.sortActive = 'tripId';
    this.sortDirection = 'asc';
    this.columns = ['tripId', 'companyName', 'status', 'travelers', 'bookerName', 'startDate', 'endDate', 'actions'];
    this.loadAction = BookingActions.loadBookings;
    this.reloadOnActions = [BookingActions.saveBookingDetailsSuccess];

    super.syncFiltersWithRouteParams({
      params: [
        'tripId',
        'companyName',
        'status',
        'traveler',
        'referenceType',
        'bookingReference',
        'flightTicketNumber',
      ],
      afterHook: () => {
        // This will be triggered on the initial page load and whenever one of the params we are watching is changed
        super.ngOnInit();
        this.loadData({ page: 1 });
      },
    });
  }

  onSearchCompanies(params: Record<string, string>): void {
    this.router.navigate(['/companies'], { queryParams: params }).then(noop);
  }

  onSearchUsers(params: Record<string, string>): void {
    this.router.navigate(['/companies/users'], { queryParams: params }).then(noop);
  }
}
