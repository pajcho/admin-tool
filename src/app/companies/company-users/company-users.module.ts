import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CompanyUsersListComponent } from './company-users-list';
import { CompanyUserDetailsComponent, CompanyUserDetailsFormComponent } from './company-user-details';
import { CompanyUserCompanyDetailsComponent } from './company-user-company-details';
import { WrapperMainModule } from '../../global/wrapper/main/wrapper-main.module';
import { BreadcrumbsModule } from '../../global/breadcrumbs/breadcrumbs.module';
import { WrapperSearchModule } from '../../global/wrapper/search/wrapper-search.module';
import { WrapperListingModule } from '../../global/wrapper/listing/wrapper-listing.module';
import { WrapperDetailsModule } from '../../global/wrapper/details/wrapper-details.module';
import { DotLoaderModule } from '../../global/dot-loader/dot-loader.module';
import { DibPipesModule } from '../../utils/pipes/pipes.module';
import { CompanyDetailsModule } from '../company-details';
import { CompanyUserBookingsComponent } from './bookings/company-user-bookings.component';
import { CompanyUserDetailsTabsComponent } from './company-user-details/company-user-details-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    WrapperMainModule,
    BreadcrumbsModule,
    WrapperSearchModule,
    WrapperListingModule,
    MatTableModule,
    MatSortModule,
    MatProgressBarModule,
    MatButtonModule,
    MatTooltipModule,
    RouterModule,
    MatPaginatorModule,
    WrapperDetailsModule,
    ReactiveFormsModule,
    DotLoaderModule,
    DibPipesModule,
    MatInputModule,
    CompanyDetailsModule,
    MatSelectModule,
  ],
  declarations: [
    CompanyUsersListComponent,
    CompanyUserDetailsComponent,
    CompanyUserCompanyDetailsComponent,
    CompanyUserDetailsFormComponent,
    CompanyUserDetailsTabsComponent,
    CompanyUserBookingsComponent,
  ],
  providers: [],
  exports: [CompanyUserDetailsFormComponent, CompanyUserDetailsTabsComponent, CompanyUserBookingsComponent],
})
export class CompanyUsersModule {}
