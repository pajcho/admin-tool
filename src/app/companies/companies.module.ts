import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { routing } from './companies.routing';
import { CompanyEffects } from '../effects/company.effects';
import { CompaniesComponent } from './companies.component';
import { CompanyUserEffects } from '../effects/company-user.effects';
import { BookingEffects } from '../effects/booking.effects';
import { WrapperMainModule } from '../global/wrapper/main/wrapper-main.module';
import { BreadcrumbsModule } from '../global/breadcrumbs/breadcrumbs.module';
import { WrapperSearchModule } from '../global/wrapper/search/wrapper-search.module';
import { WrapperListingModule } from '../global/wrapper/listing/wrapper-listing.module';
import { DibPipesModule } from '../utils/pipes/pipes.module';
import { CompanyDetailsModule } from './company-details';
import { CompanyUsersModule } from './company-users';

@NgModule({
  imports: [
    CommonModule,
    routing,
    EffectsModule.forFeature([CompanyEffects, CompanyUserEffects, BookingEffects]),
    WrapperMainModule,
    BreadcrumbsModule,
    WrapperSearchModule,
    WrapperListingModule,
    MatTableModule,
    MatSortModule,
    DibPipesModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatButtonModule,
    MatPaginatorModule,
    CompanyDetailsModule,
    CompanyUsersModule,
  ],
  declarations: [CompaniesComponent],
  providers: [],
})
export class CompaniesModule {}
