import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { noop, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { selectUsersStats } from '../reducers/users.reducer';
import { AppState } from '../reducers';
import { BaseComponent } from '../base.component';
import { selectVendorsStats } from '../reducers/vendors.reducer';
import { BillingRequestActions } from '../actions/billing-requests.actions';
import { selectBillingRequestsStats } from '../reducers/billing-requests.reducer';
import { selectFeaturesStats } from '../reducers/features.reducer';
import { selectVatCategoriesStats } from '../reducers/vat-categories.reducer';
import { selectProductsStats } from '../reducers/products.reducer';
import { selectCompaniesStats } from '../reducers/companies.reducer';
import { DashboardStat } from '../reducers/common.interfaces';
import { VendorActions } from '../actions/vendors.actions';
import { FeatureActions } from '../actions/features.actions';
import { VatCategoryActions } from '../actions/vat-categories.actions';
import { CompanyActions } from '../actions/companies.actions';
import { ProductActions } from '../actions/products.actions';
import { loggedInUser } from '../reducers/auth.reducer';
import { UserActions } from '../actions/users.actions';
import { BillingRequestStatus } from '../models/billing-request.model';
import { selectCompanyUsersStats } from '../reducers/company-users.reducer';
import { CompanyUserActions } from '../actions/company-users.actions';
import { SystemMessageActions } from '../actions/system-messages.actions';
import { SystemMessageStatus } from '../models/system-message.model';
import { selectSystemMessagesStats } from '../reducers/system-messages.reducer';
import { BookingActions } from '../actions/bookings.actions';
import { selectBookingsStats } from '../reducers/bookings.reducer';
import { selectVendorsPaymentProvidersStats } from '../reducers/vendors-payment-providers.reducer';
import { VendorsPaymentProviderActions } from '../actions/vendors-payment-providers.actions';

interface ObservableItemStat {
  observable$: Observable<DashboardStat>;
  title: string;
  link: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent extends BaseComponent {
  users$ = this.store.select(selectUsersStats);
  vendors$ = this.store.select(selectVendorsStats);
  vendorsPaymentProviders$ = this.store.select(selectVendorsPaymentProvidersStats);
  features$ = this.store.select(selectFeaturesStats);
  categories$ = this.store.select(selectVatCategoriesStats);
  products$ = this.store.select(selectProductsStats);
  billingRequests$ = this.store.select(selectBillingRequestsStats);
  systemMessages$ = this.store.select(selectSystemMessagesStats);
  companies$ = this.store.select(selectCompaniesStats);
  companyUsers$ = this.store.select(selectCompanyUsersStats);
  bookings$ = this.store.select(selectBookingsStats);

  public overviewStats: ObservableItemStat[];
  public openItemsStats: ObservableItemStat[];

  constructor(private store: Store<AppState>, private router: Router) {
    super();

    // Open item stats
    this.setupOpenItemStats();

    // Overview stats
    this.setupOverviewStats();
    this.setupUserStats();
  }

  private setupOpenItemStats() {
    this.openItemsStats = [
      { observable$: this.billingRequests$, title: 'Billing Requests', link: '/billing-requests' },
      { observable$: this.systemMessages$, title: 'Open Messages', link: '/system-messages' },
    ];
    this.store.dispatch(
      BillingRequestActions.loadRequests({
        params: { page: 1, size: 1, billingProfileRequestStatus: BillingRequestStatus.PENDING },
      })
    );
    this.store.dispatch(
      SystemMessageActions.loadSystemMessages({ params: { page: 1, size: 1, status: SystemMessageStatus.OPENED } })
    );
  }

  private setupOverviewStats() {
    this.overviewStats = [
      { observable$: this.companies$, title: 'Companies', link: '/companies' },
      { observable$: this.companyUsers$, title: 'Company Users', link: '/companies/users' },
      { observable$: this.bookings$, title: 'Bookings', link: '/companies/bookings' },
    ];
    this.store.dispatch(CompanyActions.loadCompanies({ params: { page: 1, size: 1 } }));
    this.store.dispatch(CompanyUserActions.loadCompanyUsers({ params: { page: 1, size: 1 } }));
    this.store.dispatch(BookingActions.loadBookings({ params: { page: 1, size: 1 } }));
  }

  private setupUserStats() {
    this.store
      .select(loggedInUser)
      .pipe(take(1))
      .subscribe((user) => {
        // Only DIB super admins can view features and generic product related modules
        if (user.isSuperAdmin()) {
          this.overviewStats = [
            { observable$: this.features$, title: 'Features', link: '/features' },
            { observable$: this.products$, title: 'Products', link: '/products' },
            { observable$: this.categories$, title: 'Product Vat Categories', link: '/products/vat-categories' },
            { observable$: this.vendors$, title: 'Product Vendors', link: '/products/vendors' },
            {
              observable$: this.vendorsPaymentProviders$,
              title: 'Vendors Payment Providers',
              link: '/products/vendors/payment-providers',
            },
            ...this.overviewStats,
          ];

          this.store.dispatch(
            VendorsPaymentProviderActions.loadVendorsPaymentProviders({ params: { page: 1, size: 1 } })
          );
          this.store.dispatch(VendorActions.loadVendors({ params: { page: 1, size: 1 } }));
          this.store.dispatch(FeatureActions.loadFeatures());
          this.store.dispatch(VatCategoryActions.loadVatCategories({ params: { page: 1, size: 1 } }));
          this.store.dispatch(ProductActions.loadProducts({ params: { page: 1, size: 1 } }));
        }

        // Only admin users can view users module
        if (user.hasAdminAccess()) {
          this.overviewStats.unshift({ observable$: this.users$, title: 'Users', link: '/users' });
          this.store.dispatch(UserActions.loadUsers({ params: { page: 1, size: 1 } }));
        }
      });
  }

  onSearchCompanies(params: Record<string, string>): void {
    this.router.navigate(['/companies'], { queryParams: params }).then(noop);
  }

  onSearchUsers(params: Record<string, string>): void {
    this.router.navigate(['/companies/users'], { queryParams: params }).then(noop);
  }

  onSearchBookings(params: Record<string, string>): void {
    this.router.navigate(['/companies/bookings'], { queryParams: this.validateReferenceType(params) }).then(noop);
  }
}
