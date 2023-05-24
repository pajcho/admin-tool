import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MultiSelectModule } from 'primeng/multiselect';
import { MatSelectModule } from '@angular/material/select';
import { routing } from './vendors.routing';
import { VendorEffects } from '../../effects/vendor.effects';
import { VendorsComponent } from './vendors/vendors.component';
import { VendorFormComponent } from './vendors/vendor-form.component';
import { BreadcrumbsModule } from '../../global/breadcrumbs/breadcrumbs.module';
import { WrapperListingModule } from '../../global/wrapper/listing/wrapper-listing.module';
import { WrapperMainModule } from '../../global/wrapper/main/wrapper-main.module';
import { DialogModule } from '../../global/dialog/dialog.module';
import { VendorsPaymentProviderFormComponent } from './vendors-payment-providers/vendors-payment-provider-form.component';
import { VendorsPaymentProvidersComponent } from './vendors-payment-providers/vendors-payment-providers.component';
import { VendorsPaymentProviderEffects } from '../../effects/vendor-payment-provider.effects';

@NgModule({
  imports: [
    CommonModule,
    routing,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSnackBarModule,
    EffectsModule.forFeature([VendorEffects, VendorsPaymentProviderEffects]),
    MatDialogModule,
    FormsModule,
    MatInputModule,
    BreadcrumbsModule,
    MatTooltipModule,
    WrapperListingModule,
    ReactiveFormsModule,
    WrapperMainModule,
    DialogModule,
    MultiSelectModule,
    MatSelectModule,
  ],
  declarations: [
    VendorsComponent,
    VendorFormComponent,
    VendorsPaymentProvidersComponent,
    VendorsPaymentProviderFormComponent,
  ],
  providers: [],
})
export class VendorsModule {}
