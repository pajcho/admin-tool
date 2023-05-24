import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { AuthActions } from '../../actions/auth.actions';
import { hasError } from '../../reducers/auth.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  form: UntypedFormGroup;
  isSubmitted = false;
  serverErrors = false;

  constructor(formBuilder: UntypedFormBuilder, public router: Router, private store: Store<AppState>) {
    this.form = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });

    // Reset server errors every time user interacts with the form
    this.form.valueChanges.subscribe(() => {
      this.serverErrors = false;
      this.isSubmitted = false;
    });

    this.store.select(hasError).subscribe((hasError) => {
      this.serverErrors = hasError;
    });
  }

  get showErrorPanel(): boolean {
    if (this.serverErrors) return true;

    return (
      this.isSubmitted &&
      (this.form.touched || this.form.dirty) &&
      (!!this.form.controls.username.errors || !!this.form.controls.password.errors)
    );
  }

  login(): void {
    this.isSubmitted = true;

    if (this.form.valid) {
      this.store.dispatch(AuthActions.login(this.form.getRawValue()));
    }
  }
}
