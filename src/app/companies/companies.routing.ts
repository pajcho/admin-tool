import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { CompaniesComponent } from './companies.component';
import { CompanyDetailsComponent } from './company-details';
import {
  CompanyUsersListComponent,
  CompanyUserDetailsComponent,
  CompanyUserCompanyDetailsComponent,
} from './company-users';

const routes: Routes = [
  // Company Listing
  { path: '', component: CompaniesComponent, canActivate: [AuthGuard], data: { title: 'Companies' } },

  // Company Users
  {
    path: 'users',
    canActivate: [AuthGuard],
    children: [
      // Company User Details
      { path: '', component: CompanyUsersListComponent, data: { title: 'Company Users' } },
      { path: ':id', component: CompanyUserDetailsComponent, data: { title: 'Company user details' } },
      {
        path: ':id/company/:companyId',
        component: CompanyUserCompanyDetailsComponent,
        data: { title: 'Company details' },
      },
      {
        path: ':id/assisted-booking',
        loadChildren: () => import('../assisted-booking/assisted-booking.module').then((m) => m.AssistedBookingModule),
      },
    ],
  },

  // Bookings
  {
    path: 'bookings',
    loadChildren: () => import('../bookings/bookings.module').then((m) => m.BookingsModule),
  },

  // Company Details
  { path: ':id', component: CompanyDetailsComponent, canActivate: [AuthGuard], data: { title: 'Company details' } },
];

export const routing = RouterModule.forChild(routes);
