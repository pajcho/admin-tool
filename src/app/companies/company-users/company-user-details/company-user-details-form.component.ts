import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';
import { BehaviorSubject } from 'rxjs';
import { AppState } from '../../../reducers';
import { BaseComponent } from '../../../base.component';
import { companyUsersLoading } from '../../../reducers/company-users.reducer';
import { CompanyUserActions } from '../../../actions/company-users.actions';
import { CompanyUser, CompanyUserModel } from '../../../models/company-user.model';
import { UserActions } from '../../../actions/users.actions';
import { environment } from '../../../../environments/environment';
import { loggedInUser } from '../../../reducers/auth.reducer';

@Component({
  selector: 'app-company-user-details-form',
  templateUrl: './company-user-details-form.component.html',
})
export class CompanyUserDetailsFormComponent extends BaseComponent implements OnChanges {
  @Input() companyUser: CompanyUserModel;

  form: UntypedFormGroup;
  loading$ = this.store.select(companyUsersLoading);
  loggedInUser$ = this.store.select(loggedInUser);
  overrideTokenLoading$ = new BehaviorSubject<boolean>(false);
  showAssistedBooking = environment.featureToggles.agentAssistedBooking;

  constructor(private store: Store<AppState>, private formBuilder: UntypedFormBuilder, private actions: Actions) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.actions.pipe(ofType(UserActions.getOverrideTokenStart)).subscribe(() => {
        this.overrideTokenLoading$.next(true);
      })
    );

    this.subscriptions.add(
      this.actions
        .pipe(ofType(UserActions.getOverrideTokenSuccess, UserActions.getOverrideTokenError))
        .subscribe(() => {
          this.overrideTokenLoading$.next(false);
        })
    );
  }

  // Watch the changes on the company input, so we can reset the form every time there is an update
  // This way form will stay clean and input fields will be hidden after details have been saved
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes?.companyUser?.currentValue?.id) return;

    if (JSON.stringify(changes?.companyUser?.previousValue) !== JSON.stringify(changes?.companyUser?.currentValue)) {
      this.initForm();
    }
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      note: [this.companyUser.agentNote],
    });
  }

  save(): void {
    const data: CompanyUser = JSON.parse(JSON.stringify(this.companyUser));

    data.agentNote = this.form.get('note').value;

    this.store.dispatch(CompanyUserActions.saveCompanyUserDetails({ data }));
  }

  travelPortal(): void {
    this.store.dispatch(UserActions.getOverrideToken({ username: this.companyUser.username }));
  }
}
