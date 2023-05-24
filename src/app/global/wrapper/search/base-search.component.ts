import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { distinctUntilChanged } from 'rxjs/operators';
import { isEqual, pick } from 'lodash-es';
import { AppState } from '../../../reducers';
import { BaseComponent } from '../../../base.component';

@Component({
  template: '',
})
export abstract class BaseSearchComponent extends BaseComponent {
  form: UntypedFormGroup;

  @Input() textColor: 'dark' | 'light' = 'dark';
  @Output() onSearch = new EventEmitter<Record<string, string>>();
  @Output() onReset = new EventEmitter();

  constructor(
    protected formBuilder: UntypedFormBuilder,
    protected route: ActivatedRoute,
    public store: Store<AppState>
  ) {
    super();
  }

  search(): void {
    this.onSearch.emit(this.form.value);
  }

  reset($event: MouseEvent): void {
    // We need this in order to be able to collapse the panel since we also
    // have a click event on parent element that would do the opposite
    $event.stopPropagation();

    // If form is not touched there is no need to refresh the data at all
    // Performance is the key, and this will save us a few API calls :)
    if (this.form.dirty) {
      this.form.reset();
      this.search();
    }

    this.onReset.emit();
  }

  populateFormValuesFromRoute(columns: string[], defaults?: Record<string, string>): void {
    columns.forEach((column) => {
      let value = this.route.snapshot.queryParamMap.get(column);

      // Remove extra whitespaces and convert to string
      value = (value || '').trim();

      if (value) {
        this.form.controls[column].patchValue(value);
        this.form.markAsDirty();
      } else if (defaults?.[column]) {
        this.form.controls[column].patchValue(defaults[column]);
        this.form.markAsDirty();
      }
    });
  }

  syncFormWithRouteParams({
    params,
    resetForm = true,
    afterHook = () => {},
  }: {
    params: string[];
    resetForm?: boolean;
    afterHook?: () => void;
  }): void {
    // Update form values every time URL changes to keep them in sync
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
          // This will be triggered on the initial page load and whenever one of the params we are watching is changed
          if (resetForm) this.form.reset();
          this.populateFormValuesFromRoute(params);

          // Execute after hook as there can be some component specific logic that needs to be executed
          afterHook();
        })
    );
  }
}
