import { Component, Input } from '@angular/core';
import { BaseListingComponent } from '../../../base-listing.component';
import { elementCrossFade } from '../../../utils/animations/element-cross-fade';
import { BookingActions } from '../../../actions/bookings.actions';
import { selectBookings, selectBookingsData } from '../../../reducers/bookings.reducer';
import { BookingListItem } from '../../../models/booking-list-item.model';
import { BookingStatus, bookingStatusMap } from '../../../models/booking.model';

@Component({
  selector: 'app-company-user-bookings',
  templateUrl: './company-user-bookings.component.html',
  animations: [elementCrossFade],
})
export class CompanyUserBookingsComponent extends BaseListingComponent<BookingListItem> {
  @Input() userId: string;
  @Input() isActiveCart: boolean;

  bookings$ = this.store.select(selectBookings);
  tableDataSource$ = this.store.select(selectBookingsData);

  statuses: BookingStatus[] = Object.keys(bookingStatusMap) as BookingStatus[];

  ngOnInit(): void {
    super.ngOnInit();

    this.sortActive = 'tripId';
    this.sortDirection = 'asc';
    this.columns = ['tripId', 'status', 'travelers', 'bookerName', 'startDate', 'endDate', 'actions'];
    this.loadAction = BookingActions.loadBookings;

    // Display only user bookings
    this.filterMultiple({
      userId: this.userId,
      isActiveCart: this.isActiveCart ? 'true' : 'false',
    });
  }
}
