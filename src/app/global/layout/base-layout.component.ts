import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseComponent } from '../../base.component';
import { sidenavIsVisible } from '../../reducers/layout.reducer';
import { AppState } from '../../reducers';
import { LayoutActions } from '../../actions/layout.actions';
import { isLoggedIn, loggedInUser } from '../../reducers/auth.reducer';

@Component({
  template: '',
})
export abstract class BaseLayoutComponent extends BaseComponent {
  sidenavIsVisible$ = this.store.select(sidenavIsVisible);
  isLoggedIn$ = this.store.select(isLoggedIn);
  loggedInUser$ = this.store.select(loggedInUser);

  constructor(protected store: Store<AppState>) {
    super();
  }

  open(): void {
    this.store.dispatch(LayoutActions.toggleSidenav({ visible: true }));
  }

  close(): void {
    this.store.dispatch(LayoutActions.toggleSidenav({ visible: false }));
  }
}
