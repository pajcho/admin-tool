import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { elementCrossFade } from '../../../../utils/animations/element-cross-fade';
import { BaseSearchComponent } from '../base-search.component';
import { BookingReferenceTypes, BookingStatus, bookingStatusMap } from '../../../../models/booking.model';
import { BookingActions } from '../../../../actions/bookings.actions';
import { referenceTypesLoading, selectReferenceTypes } from '../../../../reducers/bookings.reducer';

@Component({
  selector: 'dib-search-bookings',
  templateUrl: './search-bookings.component.html',
  animations: [elementCrossFade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBookingsComponent extends BaseSearchComponent implements OnInit {
  statuses: BookingStatus[] = Object.keys(bookingStatusMap) as BookingStatus[];
  referenceTypes = [];
  referenceTypesLoading = false;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      tripId: [],
      companyName: [],
      status: [],
      traveler: [],
      referenceType: [{ value: undefined, disabled: this.referenceTypesLoading || !!this.referenceTypes.length }],
      bookingReference: [],
      flightTicketNumber: [],
    });

    this.store.dispatch(BookingActions.loadReferenceTypes());

    this.subscriptions.add(
      this.store.select(referenceTypesLoading).subscribe((loading) => {
        this.referenceTypesLoading = loading;
      })
    );

    this.subscriptions.add(
      this.store
        .select(selectReferenceTypes)
        .pipe(
          filter((types) => types.length > 0),
          map((types) => {
            // Sort the values by putting main categories first
            // TODO: This needs to be revisited once we determine whats the correct order we want to display
            return types.reduce((acc: string[], element: string) => {
              if ([...(Object.values(BookingReferenceTypes) as string[])].includes(element)) {
                return [element, ...acc];
              }
              return [...acc, element];
            }, []);
          })
        )
        .subscribe((types) => {
          this.referenceTypes = types;

          // Sync form here since values are loaded from the API and we have to wait until all loaded
          // Filters input will change whenever URL changes, and we have to watch for changes here
          // This is a subscriber and will keep updating form whenever route params changes
          super.syncFormWithRouteParams({
            params: [
              'tripId',
              'companyName',
              'status',
              'traveler',
              'referenceType',
              'bookingReference',
              'flightTicketNumber',
            ],
            resetForm: false,
            afterHook: () => {
              // Preselect Flights by default if nothing is selected
              if (!this.form.get('referenceType').value) {
                this.form.controls['referenceType'].patchValue(BookingReferenceTypes.Flight);
              }
            },
          });
        })
    );
  }

  get showSearchByFlightTicketNumber(): boolean {
    return (this.form.get('referenceType').value || '') === BookingReferenceTypes.Flight;
  }

  onTypeChange(type: string): void {
    if (!type) {
      // Clear values if no product type is selected
      this.form.controls['bookingReference'].reset();
      this.form.controls['flightTicketNumber'].reset();
    } else if (type !== BookingReferenceTypes.Flight) {
      // Clear flight ticket number since its only applicable for Flight referenceType
      this.form.controls['flightTicketNumber'].reset();
    }
  }
}
