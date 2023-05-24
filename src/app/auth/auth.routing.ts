import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { LoggedInAuthGuard } from './loggedin-auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PasswordTokenGuard } from './password-token.guard';
import { SetPasswordComponent } from './set-password/set-password.component';
import { SetPasswordTokenGuard } from './set-password-token.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent, data: { title: 'Login' } },
      { path: 'forgot-password', component: ForgotPasswordComponent, data: { title: 'Forgot password' } },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
        canActivate: [PasswordTokenGuard],
        data: { title: 'Change password' },
      },
      {
        path: 'set-password',
        component: SetPasswordComponent,
        canActivate: [SetPasswordTokenGuard],
        data: { title: 'Set password' },
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
    canActivate: [LoggedInAuthGuard],
  },
];

export const routing = RouterModule.forChild(routes);
