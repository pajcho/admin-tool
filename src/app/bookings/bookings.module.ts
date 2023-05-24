import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { routing } from './bookings.routing';
import { BookingsComponent } from './bookings.component';
import { BookingEffects } from '../effects/booking.effects';
import { BreadcrumbsModule } from '../global/breadcrumbs/breadcrumbs.module';
import { WrapperMainModule } from '../global/wrapper/main/wrapper-main.module';
import { WrapperSearchModule } from '../global/wrapper/search/wrapper-search.module';
import { WrapperListingModule } from '../global/wrapper/listing/wrapper-listing.module';
import { BookingDetailsComponent } from './details';
import { WrapperDetailsModule } from '../global/wrapper/details/wrapper-details.module';
import { DotLoaderModule } from '../global/dot-loader/dot-loader.module';
import { BookingDetailsCompanyComponent } from './details/company';
import { CompanyDetailsModule } from '../companies/company-details';
import { BookingDetailsTravelerComponent } from './details/traveler';
import { CartEffects } from '../effects/cart.effects';
import { CartPriceComponent } from './details/cart/price/cart-price.component';
import { CompanyUsersModule } from '../companies/company-users';
import { CartTabsModule } from './details/cart/cart-tabs.module';
import { DibPipesModule } from '../utils/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatButtonModule,
    EffectsModule.forFeature([BookingEffects, CartEffects]),
    BreadcrumbsModule,
    WrapperMainModule,
    WrapperSearchModule,
    WrapperListingModule,
    MatTooltipModule,
    DibPipesModule,
    WrapperDetailsModule,
    ReactiveFormsModule,
    DotLoaderModule,
    MatInputModule,
    CompanyDetailsModule,
    CompanyUsersModule,
    CartTabsModule,
  ],
  declarations: [
    BookingsComponent,
    BookingDetailsComponent,
    BookingDetailsCompanyComponent,
    BookingDetailsTravelerComponent,
    CartPriceComponent,
  ],
  providers: [],
})
export class BookingsModule {}
