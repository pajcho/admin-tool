import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { BaseComponent } from '../base.component';
import { User, UserAdapter, UserModel, UserType } from '../models/user.model';
import { loggedInUser } from '../reducers/auth.reducer';
import { AppState } from '../reducers';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent extends BaseComponent implements OnInit {
  public form: UntypedFormGroup;
  public user: UserModel;
  public loggedInUser: UserModel = null;
  public userTypes: UserType[] = [UserType.AGENT, UserType.ADMIN, UserType.SUPER_ADMIN];

  constructor(
    private store: Store<AppState>,
    private formBuilder: UntypedFormBuilder,
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: User }
  ) {
    super();

    this.store
      .select(loggedInUser)
      .pipe(take(1))
      .subscribe((user) => {
        this.loggedInUser = user;
      });

    // Convert input to UserModel, so we have access to additional methods
    this.user = new UserAdapter().adapt(this.data.user);
  }

  ngOnInit(): void {
    const formFields = {
      firstName: [this.user.firstName, [Validators.required]],
      lastName: [this.user.lastName, [Validators.required]],
      type: [{ value: this.user.type, disabled: this.isCurrentUser }, [Validators.required]],
      username: [{ value: this.user.username, disabled: this.isCurrentUser }, [Validators.required]],
      phone: [this.user.phone, [Validators.minLength(6)]],
    };

    // Current user will not be able to see or change his own user type
    if (this.isCurrentUser) delete formFields.type;

    this.form = this.formBuilder.group(formFields);
  }

  get isUpdate(): boolean {
    return !!this.user.id;
  }

  get isCurrentUser(): boolean {
    return this.user.id === this.loggedInUser.id;
  }

  close(): User {
    this.user.firstName = this.form.get('firstName').value;
    this.user.lastName = this.form.get('lastName').value;
    this.user.phone = this.form.get('phone').value;
    this.user.username = this.form.get('username').value;

    return this.user;
  }

  onUserTypeChange(item: UserType): void {
    this.user.type = item;
  }
}
