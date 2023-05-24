import { Routes, RouterModule } from '@angular/router';
import { BillingRequestsComponent } from './billing-requests.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BillingRequestsComponent,
    canActivate: [AuthGuard],
    data: { title: 'Billing requests' },
  },
];

export const routing = RouterModule.forChild(routes);
