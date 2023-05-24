import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { AuthGuard } from '../auth/auth.guard';
import { SuperAdminGuard } from '../auth/super-admin.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    // Have to use children option to prevent all guards from executing. This way they will execute one by one
    children: [
      {
        path: '',
        component: FeaturesComponent,
        canActivate: [SuperAdminGuard],
        data: { title: 'Features' },
      },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
