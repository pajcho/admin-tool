import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, filter, mergeMap, take, takeWhile } from 'rxjs/operators';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';
import { BehaviorSubject, forkJoin, Observable, of } from 'rxjs';
import { AppState } from '../../reducers';
import { BaseComponent } from '../../base.component';
import { UserActions } from '../../actions/users.actions';
import { Booking, BookingModel } from '../../models/booking.model';
import { getSelectedBooking, selectedBookingLoading } from '../../reducers/bookings.reducer';
import { BookingActions } from '../../actions/bookings.actions';
import { selectCartById } from '../../reducers/carts.reducer';
import { CartActions } from '../../actions/carts.actions';
import { CartModel } from '../../models/cart.model';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
})
export class BookingDetailsComponent extends BaseComponent implements OnInit {
  form: UntypedFormGroup;
  booking: BookingModel;

  cart$: Observable<CartModel>;
  booking$ = this.store.select(getSelectedBooking);
  loading$ = this.store.select(selectedBookingLoading);

  // Only subscribe to initial page loading and use it for the page wrapper loader
  // Subsequent loading states will be handled differently using the main loading$ prop
  firstTimeLoading$ = this.loading$.pipe(takeWhile((loading) => loading, true));
  overrideTokenLoading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private formBuilder: UntypedFormBuilder,
    private actions: Actions
  ) {
    super();
  }

  ngOnInit(): void {
    // Load cart data if not already in store
    this.subscriptions.add(
      this.route.params
        .pipe(mergeMap((params) => forkJoin([of(params), this.store.select(selectCartById(params.id)).pipe(take(1))])))
        .subscribe(([{ id }, cart]) => {
          if (!cart?.id || cart?.id !== id) {
            // Load company details if we don't have one in store already
            this.store.dispatch(CartActions.loadCartDetails({ id }));
          }

          this.cart$ = this.store.select(selectCartById(id));
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

    this.subscriptions.add(
      this.booking$
        .pipe(
          filter((item) => !!item?.cartId),
          distinctUntilChanged((prev, current) => {
            return JSON.stringify(prev) === JSON.stringify(current);
          })
        )
        .subscribe((item) => {
          this.booking = item;
          this.initForm();
        })
    );

    this.subscriptions.add(
      this.actions.pipe(ofType(UserActions.getOverrideTokenStart)).subscribe(() => {
        this.overrideTokenLoading$.next(true);
      })
    );

    this.subscriptions.add(
      this.actions
        .pipe(ofType(UserActions.getOverrideTokenSuccess, UserActions.getOverrideTokenError))
        .subscribe(() => {
          this.overrideTokenLoading$.next(false);
        })
    );
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      note: [this.booking.agentNote],
    });
  }

  save(): void {
    const data: Booking = JSON.parse(JSON.stringify(this.booking));

    data.agentNote = this.form.get('note').value;

    this.store.dispatch(BookingActions.saveBookingDetails({ data }));
  }

  travelPortal(): void {
    this.store.dispatch(
      UserActions.getOverrideToken({
        username: this.booking.booker.username,
        redirectPath: `trip/${this.booking.cartId}`,
      })
    );
  }
}
