import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { routing } from './auth.routing';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { AuthWrapperComponent } from './wrapper/wrapper.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SetPasswordComponent } from './set-password/set-password.component';

@NgModule({
  imports: [routing, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, CommonModule],
  declarations: [
    AuthComponent,
    AuthWrapperComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    SetPasswordComponent,
  ],
  providers: [],
})
export class AuthModule {}
