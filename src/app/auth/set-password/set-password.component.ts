import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActionsSubject, Store } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { take } from 'rxjs/operators';
import { AppState } from '../../reducers';
import { AuthActions } from '../../actions/auth.actions';
import { hasError } from '../../reducers/auth.reducer';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
})
export class SetPasswordComponent extends BaseComponent {
  form: UntypedFormGroup;
  isSubmitted = false;
  serverErrors = false;
  requestIsSent = false;

  constructor(
    formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private actionSubject: ActionsSubject
  ) {
    super();

    this.form = formBuilder.group({
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      confirmPassword: ['', super.matches('password')],
    });

    // Reset server errors every time user interacts with the form
    this.form.valueChanges.subscribe(() => {
      this.serverErrors = false;
      this.isSubmitted = false;
    });

    this.store.select(hasError).subscribe((hasError) => {
      this.serverErrors = hasError;
    });

    this.actionSubject.pipe(ofType(AuthActions.setPasswordSuccess), take(1)).subscribe(() => {
      this.requestIsSent = true;
    });
  }

  get showErrorPanel(): boolean {
    if (this.serverErrors) return true;

    return (
      this.isSubmitted &&
      (this.form.touched || this.form.dirty) &&
      (!!this.form.controls.password.errors || !!this.form.controls.confirmPassword.errors)
    );
  }

  change(): void {
    this.isSubmitted = true;

    if (this.form.valid) {
      this.store.dispatch(
        AuthActions.setPassword({
          id: this.route.snapshot.queryParams.token,
          password: this.form.get('password').value,
        })
      );
    }
  }
}
