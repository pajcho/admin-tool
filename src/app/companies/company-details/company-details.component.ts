import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, takeWhile } from 'rxjs/operators';
import { AppState } from '../../reducers';
import { BaseComponent } from '../../base.component';
import { companiesLoading, selectCompanyById } from '../../reducers/companies.reducer';
import { CompanyActions } from '../../actions/companies.actions';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
})
export class CompanyDetailsComponent extends BaseComponent implements OnInit {
  company$ = this.route.params.pipe(
    map((params) => params.id),
    mergeMap((id) => this.store.select(selectCompanyById(id)))
  );

  // Only subscribe to initial page loading and use it for the page wrapper loader
  // Subsequent loading states will be handled differently using the main loading$ prop
  firstTimeLoading$ = this.store.select(companiesLoading).pipe(takeWhile((loading) => loading, true));

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    super();
  }

  ngOnInit(): void {
    // Load company details
    this.subscriptions.add(
      this.route.params.subscribe(({ id }) => {
        this.store.dispatch(CompanyActions.loadCompany({ id }));
      })
    );
  }
}
