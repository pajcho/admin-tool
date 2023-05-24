import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { first } from 'rxjs/operators';
import { BaseLayoutComponent } from '../base-layout.component';
import { UserModel } from '../../../models/user.model';
import { UserFormComponent } from '../../../users/user-form.component';
import { UserActions } from '../../../actions/users.actions';
import { UserPasswordFormComponent } from '../../../users/user-password-form.component';
import { AppState } from '../../../reducers';
import { AuthActions } from '../../../actions/auth.actions';
import { ConfirmationDialogActions } from '../../../actions/confirmation-dialog.actions';
import { tmc, TmcModel } from '../../../config/tmc';
import { loggedInUser } from '../../../reducers/auth.reducer';
import { TenantActions } from '../../../actions/tenant.actions';
import { selectTenants } from '../../../reducers/tenants.reducer';

@Component({
  selector: 'dib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent extends BaseLayoutComponent {
  tmc: TmcModel;
  loggedInUser$ = this.store.select(loggedInUser);
  tenants$ = this.store.select(selectTenants);

  constructor(public dialog: MatDialog, protected store: Store<AppState>) {
    super(store);

    this.store
      .select(tmc)
      .pipe(first())
      .subscribe((tmc) => {
        this.tmc = tmc;
      });

    this.store.dispatch(TenantActions.loadPrimaryTenants());
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }

  edit(user: UserModel): void {
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

  changeTenant(tenant: TmcModel): void {
    this.store.dispatch(
      ConfirmationDialogActions.show({
        data: {
          template: `
            Are you sure you want to navigate to <strong>${tenant.name}</strong> tenant?
            <br><br>
            New browser tab will open with asking you to login to a different TMC Console.
            Your current session with <strong>${this.tmc.name}</strong> will stay intact.
          `,
          confirm: {
            label: `Go to ${tenant.name}`,
            color: 'primary',
          },
        },
        ok: () => {
          // Open new session in new browser tab, so we can preserve current session
          window.open(`https://${tenant.adminLink}/`, '_blank');
        },
      })
    );
  }
}
