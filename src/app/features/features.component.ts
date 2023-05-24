import { AfterViewInit, Component } from '@angular/core';
import { FeatureActions } from '../actions/features.actions';
import { Feature } from '../models/feature.model';
import { selectFeatures, selectFeaturesData } from '../reducers/features.reducer';
import { ConfirmationDialogActions } from '../actions/confirmation-dialog.actions';
import { BaseListingComponent } from '../base-listing.component';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
})
export class FeaturesComponent extends BaseListingComponent<Feature> implements AfterViewInit {
  features$ = this.store.select(selectFeatures);
  tableDataSource$ = this.store.select(selectFeaturesData);

  ngOnInit(): void {
    this.sortActive = 'id';
    this.sortDirection = 'asc';
    this.columns = ['id', 'description', 'enabled', 'actions'];

    super.ngOnInit();
    this.store.dispatch(FeatureActions.loadFeatures());
  }

  // Link native CDK sorting and pagination mechanisms since we do not get
  // paginated data from the BE and will handle everything on front end
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // Override base filter method and use native CDK filtering
  filter(value: string): void {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  toggleStatus(item: Feature | null): void {
    this.store.dispatch(
      ConfirmationDialogActions.show({
        data: {
          template: `
            Are you sure you want to ${item.enabled ? 'disable' : 'enable'}
            <strong>${item.id}</strong>?
          `,
          confirm: {
            label: item.enabled ? 'Disable' : 'Enable',
            color: item.enabled ? 'warn' : 'primary',
          },
        },
        ok: () => {
          this.store.dispatch(FeatureActions.toggleFeatureStatus({ data: item }));
        },
      })
    );
  }
}
