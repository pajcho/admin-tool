import { Routes, RouterModule } from '@angular/router';
import { AssistedBookingComponent } from './assisted-booking.component';
import { SuperAdminGuard } from '../auth/super-admin.guard';

const routes: Routes = [
  {
    path: '',
    component: AssistedBookingComponent,
    canActivate: [SuperAdminGuard],
    data: { title: 'Agent Assisted Booking' },
  },
];

export const routing = RouterModule.forChild(routes);
