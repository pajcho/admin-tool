import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { BaseComponent } from '../base.component';
import { User, UserAdapter, UserModel } from '../models/user.model';
import { loggedInUser } from '../reducers/auth.reducer';
import { AppState } from '../reducers';

@Component({
  selector: 'app-user-password-form',
  templateUrl: './user-password-form.component.html',
})
export class UserPasswordFormComponent extends BaseComponent {
  public user: UserModel;
  public form: UntypedFormGroup;
  public loggedInUser: UserModel = null;

  constructor(
    private store: Store<AppState>,
    private formBuilder: UntypedFormBuilder,
    public dialogRef: MatDialogRef<UserPasswordFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: UserModel }
  ) {
    super();

    this.form = this.formBuilder.group({
      password: [undefined, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [undefined, [Validators.required, super.matches('password')]],
    });

    this.subscriptions.add(
      this.form.controls.password.valueChanges.subscribe(() => {
        this.form.controls.confirmPassword.updateValueAndValidity();
      })
    );

    this.store
      .select(loggedInUser)
      .pipe(take(1))
      .subscribe((user) => {
        this.loggedInUser = user;
      });

    // Convert input to UserModel, so we have access to additional methods
    this.user = new UserAdapter().adapt(this.data.user);
  }

  get isCurrentUser(): boolean {
    return this.user.id === this.loggedInUser.id;
  }

  public close(): User {
    this.user.password = this.form.get('password').value;

    return this.user;
  }
}
