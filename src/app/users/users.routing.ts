import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { AuthGuard } from '../auth/auth.guard';
import { AdminGuard } from '../auth/admin.guard';

const routes: Routes = [
  { path: '', component: UsersComponent, canActivate: [AuthGuard, AdminGuard], data: { title: 'Console Users' } },
];

export const routing = RouterModule.forChild(routes);
