import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { SystemMessagesComponent } from './system-messages.component';

const routes: Routes = [
  { path: '', component: SystemMessagesComponent, canActivate: [AuthGuard], data: { title: 'System Messages' } },
];

export const routing = RouterModule.forChild(routes);
