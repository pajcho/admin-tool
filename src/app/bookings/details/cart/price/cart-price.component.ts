import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { AppState } from '../../../../reducers';
import { BaseComponent } from '../../../../base.component';
import { selectCartById } from '../../../../reducers/carts.reducer';
import { CartModel } from '../../../../models/cart.model';
import { BookingUserType } from '../../../../models/booking.model';
import { UserAdapter, UserModel } from '../../../../models/user.model';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-cart-price',
  templateUrl: './cart-price.component.html',
})
export class CartPriceComponent extends BaseComponent implements OnInit {
  agent$: Observable<UserModel>;
  cart$: Observable<CartModel>;

  @Input() cartId: string;

  constructor(private store: Store<AppState>, private userService: UserService) {
    super();
  }

  ngOnInit(): void {
    // Cart data must be in store already, loaded from the parent component
    // We will not try to load the cart data from here and instead we will just request it
    this.cart$ = this.store.select(selectCartById(this.cartId));

    // If the cart was booked by the agent we will need to load agent's data in order to display on the UI
    this.subscriptions.add(
      this.cart$
        .pipe(
          take(1),
          filter((cart) => cart.createdByType === BookingUserType.AGENT)
        )
        .subscribe((cart) => {
          // Since this is the only place where this data is needed there is no need to save it in store
          // and we will use the response from the API directly. If there is a need to do anything
          // more complex we can always default back to using actions and persist in store
          this.agent$ = this.userService.getById(cart.createdById).pipe(map((item) => new UserAdapter().adapt(item)));
        })
    );
  }
}
