import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActionsSubject, Store } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { take } from 'rxjs/operators';
import { AppState } from '../../reducers';
import { hasError } from '../../reducers/auth.reducer';
import { BaseComponent } from '../../base.component';
import { AuthActions } from '../../actions/auth.actions';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent extends BaseComponent {
  form: UntypedFormGroup;
  isSubmitted = false;
  serverErrors = false;
  requestIsSent = false;
  usersAreMocked = environment.mock.users;
  mockedForgotPasswordLink = '/auth/change-password?token=123123-123123-123123-123123';

  constructor(formBuilder: UntypedFormBuilder, private store: Store<AppState>, private actionSubject: ActionsSubject) {
    super();

    this.form = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.email])],
    });

    // Reset server errors every time user interacts with the form
    this.form.valueChanges.subscribe(() => {
      this.serverErrors = false;
      this.isSubmitted = false;
    });

    this.store.select(hasError).subscribe((hasError) => {
      this.serverErrors = hasError;
    });

    this.actionSubject.pipe(ofType(AuthActions.forgotPasswordSuccess), take(1)).subscribe(() => {
      this.requestIsSent = true;
    });
  }

  get showErrorPanel(): boolean {
    if (this.serverErrors) return true;

    return this.isSubmitted && (this.form.touched || this.form.dirty) && !!this.form.controls.email.errors;
  }

  request(): void {
    this.isSubmitted = true;

    if (this.form.valid) {
      this.store.dispatch(AuthActions.forgotPassword({ email: this.form.get('email').value }));
    }
  }
}
