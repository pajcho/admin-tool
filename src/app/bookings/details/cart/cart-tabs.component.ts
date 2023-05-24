import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppState } from '../../../reducers';
import { BaseComponent } from '../../../base.component';
import { selectCartById } from '../../../reducers/carts.reducer';
import { CartModel } from '../../../models/cart.model';
import { elementCrossFade } from '../../../utils/animations/element-cross-fade';

@Component({
  selector: 'app-cart-tabs',
  templateUrl: './cart-tabs.component.html',
  animations: [elementCrossFade],
})
export class CartTabsComponent extends BaseComponent implements OnInit {
  cart: CartModel;
  activeTab: string;
  availableTabs: string[] = [];
  cart$: Observable<CartModel>;

  @Input() cartId: string;

  constructor(private store: Store<AppState>) {
    super();
  }

  ngOnInit(): void {
    // Cart data must be in store already, loaded from the parent component
    // We will not try to load the cart data from here
    this.cart$ = this.store.select(selectCartById(this.cartId));

    this.subscriptions.add(
      this.cart$.pipe(filter((cart) => !!cart.id)).subscribe((cart) => {
        this.cart = cart;
        this.initTabs();
      })
    );
  }

  initTabs(): void {
    this.availableTabs = this.getAvailableTabs();
    this.activeTab = this.availableTabs.length ? this.availableTabs[0] : null;
  }

  getAvailableTabs(): string[] {
    const availableTabs = [];

    if (this.cart.gps.length) availableTabs.push('hotels');
    if (this.cart.flightBookings.length) availableTabs.push('flights');
    if (this.cart.taxiBookings.length) availableTabs.push('taxi');
    if (this.cart.trainBookings.length) availableTabs.push('rails & bus');
    if (this.cart.genericProducts.length) availableTabs.push('generic products');
    if (this.cart.rentalCarBookings.length) availableTabs.push('cars');

    return availableTabs;
  }
}
