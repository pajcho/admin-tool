import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { BillingRequestsComponent } from './billing-requests.component';
import { routing } from './billing-requests.routing';
import { BillingRequestEffects } from '../effects/billing-request.effects';
import { BreadcrumbsModule } from '../global/breadcrumbs/breadcrumbs.module';
import { WrapperListingModule } from '../global/wrapper/listing/wrapper-listing.module';
import { WrapperMainModule } from '../global/wrapper/main/wrapper-main.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSnackBarModule,
    EffectsModule.forFeature([BillingRequestEffects]),
    BreadcrumbsModule,
    FormsModule,
    MatInputModule,
    MatTooltipModule,
    WrapperListingModule,
    WrapperMainModule,
    MatSelectModule,
  ],
  declarations: [BillingRequestsComponent],
  providers: [],
})
export class BillingRequestsModule {}
