import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AppState } from '../../reducers';
import { BaseComponent } from '../../base.component';
import { companiesLoading } from '../../reducers/companies.reducer';
import { CompanyActions } from '../../actions/companies.actions';
import { Company, CompanyModel, CompanyStatus } from '../../models/company.model';

@Component({
  selector: 'app-company-details-form',
  templateUrl: './company-details-form.component.html',
})
export class CompanyDetailsFormComponent extends BaseComponent implements OnChanges {
  @Input() company: CompanyModel;

  form: UntypedFormGroup;
  loading$ = this.store.select(companiesLoading);
  companyStatuses: CompanyStatus[] = [CompanyStatus.NONE, CompanyStatus.AT_RISK, CompanyStatus.VIP];

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private formBuilder: UntypedFormBuilder) {
    super();
  }

  // Watch the changes on the company input, so we can reset the form every time there is an update
  // This way form will stay clean and input fields will be hidden after details have been saved
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes?.company?.currentValue?.id) return;

    if (JSON.stringify(changes?.company?.previousValue) !== JSON.stringify(changes?.company?.currentValue)) {
      this.initForm();
    }
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      status: [this.company.status],
      note: [this.company.agentNote],
    });
  }

  save(): void {
    const data: Company = JSON.parse(JSON.stringify(this.company));

    data.status = this.form.get('status').value;
    data.agentNote = this.form.get('note').value;

    this.store.dispatch(CompanyActions.saveCompanyDetails({ data }));
  }
}
