import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { WrapperListingModule } from '../../global/wrapper/listing/wrapper-listing.module';
import { CompanyDetailsComponent } from './company-details.component';
import { CompanyDetailsBookingsComponent } from './bookings/company-details-bookings.component';
import { CompanyDetailsUsersComponent } from './users/company-details-users.component';
import { CompanyDetailsFormComponent } from './company-details-form.component';
import { WrapperMainModule } from '../../global/wrapper/main/wrapper-main.module';
import { BreadcrumbsModule } from '../../global/breadcrumbs/breadcrumbs.module';
import { WrapperDetailsModule } from '../../global/wrapper/details/wrapper-details.module';
import { DibPipesModule } from '../../utils/pipes/pipes.module';
import { DotLoaderModule } from '../../global/dot-loader/dot-loader.module';
import { CompanyDetailsTabsComponent } from './company-details-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    WrapperListingModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatProgressBarModule,
    MatButtonModule,
    RouterModule,
    MatTooltipModule,
    MatPaginatorModule,
    WrapperMainModule,
    BreadcrumbsModule,
    WrapperDetailsModule,
    MatSelectModule,
    DibPipesModule,
    DotLoaderModule,
    MatRadioModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CompanyDetailsComponent,
    CompanyDetailsFormComponent,
    CompanyDetailsTabsComponent,
    CompanyDetailsUsersComponent,
    CompanyDetailsBookingsComponent,
  ],
  providers: [],
  exports: [
    CompanyDetailsFormComponent,
    CompanyDetailsTabsComponent,
    CompanyDetailsUsersComponent,
    CompanyDetailsBookingsComponent,
  ],
})
export class CompanyDetailsModule {}
