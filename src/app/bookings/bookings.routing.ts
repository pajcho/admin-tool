import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { BookingsComponent } from './bookings.component';
import { BookingDetailsComponent } from './details';
import { BookingDetailsCompanyComponent } from './details/company';
import { BookingDetailsTravelerComponent } from './details/traveler';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: BookingsComponent, data: { title: 'Bookings' } },
      { path: ':id', component: BookingDetailsComponent, data: { title: 'Booking details' } },
      { path: ':id/users/:userId', component: BookingDetailsTravelerComponent, data: { title: 'Traveler details' } },
      { path: ':id/company/:companyId', component: BookingDetailsCompanyComponent, data: { title: 'Company details' } },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
