import { Component, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserActions } from '../actions/users.actions';
import { User, UserModel, UserType } from '../models/user.model';
import { selectUsers, selectUsersData } from '../reducers/users.reducer';
import { UserFormComponent } from './user-form.component';
import { ConfirmationDialogActions } from '../actions/confirmation-dialog.actions';
import { UserPasswordFormComponent } from './user-password-form.component';
import { loggedInUser } from '../reducers/auth.reducer';
import { BaseListingComponent } from '../base-listing.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent extends BaseListingComponent<User> {
  userTypes: UserType[] = [UserType.AGENT, UserType.ADMIN, UserType.SUPER_ADMIN];

  users$ = this.store.select(selectUsers);
  loggedInUser$ = this.store.select(loggedInUser);
  tableDataSource$ = this.store.select(selectUsersData);

  constructor(public injector: Injector, public dialog: MatDialog) {
    super(injector);
  }

  ngOnInit(): void {
    this.sortActive = 'firstName';
    this.sortDirection = 'asc';
    this.columns = ['firstName', 'lastName', 'username', 'type', 'disabled', 'actions'];
    this.loadAction = UserActions.loadUsers;
    this.reloadOnActions = [UserActions.saveUserDetailsSuccess, UserActions.changeUserPasswordSuccess];

    super.ngOnInit();
    this.loadData();
  }

  toggleStatus(item: User): void {
    this.store.dispatch(
      ConfirmationDialogActions.show({
        data: {
          template: `
            Are you sure you want to ${item.disabled ? 'enable' : 'disable'}
            <strong>${item.firstName} ${item.lastName}</strong>?
          `,
          confirm: {
            label: item.disabled ? 'Enable' : 'Disable',
            color: item.disabled ? 'primary' : 'warn',
          },
        },
        ok: () => {
          this.store.dispatch(UserActions.saveUserDetails({ data: { ...item, disabled: !item.disabled } }));
        },
      })
    );
  }

  save(user: UserModel | null): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      data: { user },
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed && confirmed !== false) {
        this.store.dispatch(UserActions.saveUserDetails({ data: confirmed }));
      }
    });
  }

  changeUserPassword(user: UserModel): void {
    const dialogRef = this.dialog.open(UserPasswordFormComponent, {
      data: { user },
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed && confirmed !== false) {
        this.store.dispatch(UserActions.changeUserPassword({ data: confirmed }));
      }
    });
  }
}
