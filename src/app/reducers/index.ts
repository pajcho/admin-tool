import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { environment } from '../../environments/environment';
import * as BillingRequests from './billing-requests.reducer';
import * as Products from './products.reducer';
import * as VatCategories from './vat-categories.reducer';
import * as Countries from './countries.reducer';
import * as Vendors from './vendors.reducer';
import * as VendorsPaymentProviders from './vendors-payment-providers.reducer';
import * as Features from './features.reducer';
import * as Users from './users.reducer';
import * as Companies from './companies.reducer';
import * as CompanyUsers from './company-users.reducer';
import * as SystemMessages from './system-messages.reducer';
import * as Bookings from './bookings.reducer';
import * as Carts from './carts.reducer';
import * as Layout from './layout.reducer';
import * as Auth from './auth.reducer';
import * as Tmc from '../config/tmc/tmc.reducer';
import * as Tenant from './tenants.reducer';
import * as PNR from './pnr.reducer';
import * as CostCenter from './cost-center.reducer';
import * as Payment from './payment.reducer';
import * as Checkout from './checkout.reducer';

export interface AppState {
  router: RouterReducerState;
  billingRequests: BillingRequests.State;
  products: Products.State;
  vatCategories: VatCategories.State;
  vendors: Vendors.State;
  vendorsPaymentProviders: VendorsPaymentProviders.State;
  countries: Countries.State;
  features: Features.State;
  users: Users.State;
  companies: Companies.State;
  companyUsers: CompanyUsers.State;
  systemMessages: SystemMessages.State;
  bookings: Bookings.State;
  carts: Carts.State;
  layout: Layout.State;
  auth: Auth.State;
  tmc: Tmc.State;
  tenants: Tenant.State;
  pnr: PNR.State;
  costCenter: CostCenter.State;
  payment: Payment.State;
  checkout: Checkout.State;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  billingRequests: BillingRequests.reducer,
  products: Products.reducer,
  vatCategories: VatCategories.reducer,
  vendors: Vendors.reducer,
  vendorsPaymentProviders: VendorsPaymentProviders.reducer,
  countries: Countries.reducer,
  features: Features.reducer,
  users: Users.reducer,
  companies: Companies.reducer,
  companyUsers: CompanyUsers.reducer,
  systemMessages: SystemMessages.reducer,
  bookings: Bookings.reducer,
  carts: Carts.reducer,
  layout: Layout.reducer,
  auth: Auth.reducer,
  tmc: Tmc.reducer,
  tenants: Tenant.reducer,
  pnr: PNR.reducer,
  costCenter: CostCenter.reducer,
  payment: Payment.reducer,
  checkout: Checkout.reducer,
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
