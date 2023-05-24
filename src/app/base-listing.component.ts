import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { Action, ActionCreator, Store } from '@ngrx/store';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { noop, Observable } from 'rxjs';
import { mapValues, pickBy, isEqual, pick, debounce } from 'lodash-es';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { distinctUntilChanged } from 'rxjs/operators';
import { BaseComponent } from './base.component';
import { AppState } from './reducers';

@Component({
  template: '',
})
export abstract class BaseListingComponent<T> extends BaseComponent implements OnInit {
  page = 1;
  pageSize = 10;
  sortActive: string;
  sortDirection: 'asc' | 'desc' | '';
  filters: Record<string, string> = {};
  columns: string[];
  isLoading: boolean;
  dataSource: MatTableDataSource<T> = new MatTableDataSource<T>([]);
  // Action to be triggered in order to load the listing data
  loadAction: (any) => Action;
  // Array of actions to listen for and trigger data reload on the underlying listing page
  reloadOnActions: ActionCreator[];
  tableDataSource$: Observable<T[]>;

  // Debounce calls to the filter() method by delaying them for 500ms
  debouncedFilter: BaseListingComponent<T>['filter'] = debounce(this.filter, 500);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  store: Store<AppState>;
  route: ActivatedRoute;
  router: Router;
  actions: Actions;

  private shouldKeepDataWhileLoading = false;

  constructor(protected injector: Injector) {
    super();

    this.store = this.injector.get(Store);
    this.route = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
    this.actions = this.injector.get(Actions);
  }

  ngOnInit(): void {
    if (this.tableDataSource$) {
      this.subscriptions.add(
        this.tableDataSource$.subscribe((data) => {
          this.dataSource.data = data;
        })
      );
    }

    if (this.reloadOnActions?.length) {
      this.subscriptions.add(
        this.actions.pipe(ofType(...this.reloadOnActions)).subscribe(() => {
          this.keepDataWhileLoading().loadData();
        })
      );
    }
  }

  applyFiltersFromRoute(columns: string[]): void {
    columns.forEach((column) => {
      let value = this.route.snapshot.queryParamMap.get(column);

      // Remove extra whitespaces and convert to string
      value = (value || '').trim();

      if (value) {
        this.filters[column] = value;
      }
    });
  }

  keepDataWhileLoading(): BaseListingComponent<T> {
    this.shouldKeepDataWhileLoading = true;

    return this;
  }

  loadData(additionalParams: object = {}): void {
    this.store.dispatch(
      this.loadAction({
        params: {
          page: this.paginator?.pageIndex + 1 || this.page,
          size: this.paginator?.pageSize || this.pageSize,
          sort: `${this.sortActive},${this.sortDirection}`,
          ...this.validateReferenceType(this.filters),
          ...additionalParams,
        },
        keepDataWhileLoading: this.shouldKeepDataWhileLoading,
      })
    );

    this.shouldKeepDataWhileLoading = false;
  }

  filter(columnName: string, value: string): void {
    this.filters[columnName] = (value || '').trim();

    // Remove empty filters, no need to send them in the request
    if (this.filters[columnName] === '') delete this.filters[columnName];

    this.loadData({ page: 1 });
  }

  filterMultiple(params: Record<string, string>, updateURL = false): void {
    if (updateURL) {
      // If we update the URL we will not do any search since loading of data
      // should happen in the syncFiltersWithRouteParams() afterHook method
      this.router.navigate([], { relativeTo: this.route, queryParams: this.validateReferenceType(params) }).then(noop);
    } else {
      // Remove extra space and make sure we always have string values
      const filters = mapValues(params, (value) => (value || '').trim());

      // Remove falsy values (null, undefined, etc.)
      this.filters = pickBy(filters, (value) => !!value);

      this.loadData({ page: 1 });
    }
  }

  onPageChange(): void {
    this.loadData();
  }

  onSortChange($event: Sort): void {
    this.sortActive = $event.active;
    this.sortDirection = $event.direction;

    this.loadData();
  }

  syncFiltersWithRouteParams({ params, afterHook = () => {} }: { params: string[]; afterHook?: () => void }): void {
    this.subscriptions.add(
      this.route.queryParams
        .pipe(
          // Subscribe only if one of the selected params is changed. We don't care about the others
          distinctUntilChanged((prev, current) => {
            // TODO: Possibly replace with JSON.stringify(prev, params) === JSON.stringify(current, params)
            return isEqual(pick(prev, params), pick(current, params));
          })
        )
        .subscribe(() => {
          // Reset filters before applying new ones
          this.filters = {};

          this.applyFiltersFromRoute(params);

          // Execute after hook since there can be some component specific logic that needs to be executed after the
          // filters have been applied. Usually, component will just update the URL and loading of the data
          // will happen in the afterHook method.
          afterHook();
        })
    );
  }
}
