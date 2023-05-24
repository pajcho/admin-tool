import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth/auth.guard';
import { VendorsComponent } from './vendors/vendors.component';
import { SuperAdminGuard } from '../../auth/super-admin.guard';
import { VendorsPaymentProvidersComponent } from './vendors-payment-providers/vendors-payment-providers.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    // Have to use children option to prevent all guards from executing. This way they will execute one by one
    children: [
      {
        path: '',
        component: VendorsComponent,
        canActivate: [SuperAdminGuard],
        data: { title: 'Vendors' },
      },
    ],
  },
  {
    path: 'payment-providers',
    canActivate: [AuthGuard],
    // Have to use children option to prevent all guards from executing. This way they will execute one by one
    children: [
      {
        path: '',
        component: VendorsPaymentProvidersComponent,
        canActivate: [SuperAdminGuard],
        data: { title: 'Vendor Payment Providers' },
      },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
