import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { MatTabsModule } from '@angular/material/tabs';
import { BillingRequestEffects } from '../effects/billing-request.effects';
import { VendorEffects } from '../effects/vendor.effects';
import { UserEffects } from '../effects/user.effects';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { FeatureEffects } from '../effects/feature.effects';
import { VatCategoryEffects } from '../effects/vat-category.effects';
import { ProductEffects } from '../effects/product.effects';
import { BreadcrumbsModule } from '../global/breadcrumbs/breadcrumbs.module';
import { WrapperWidgetModule } from '../global/wrapper/widget/wrapper-widget.module';
import { WrapperStatModule } from '../global/wrapper/stat/wrapper-stat.module';
import { CompanyEffects } from '../effects/company.effects';
import { WrapperMainModule } from '../global/wrapper/main/wrapper-main.module';
import { CompanyUserEffects } from '../effects/company-user.effects';
import { WrapperSearchModule } from '../global/wrapper/search/wrapper-search.module';
import { SystemMessageEffects } from '../effects/system-message.effects';
import { BookingEffects } from '../effects/booking.effects';
import { VendorsPaymentProviderEffects } from '../effects/vendor-payment-provider.effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      BillingRequestEffects,
      VendorEffects,
      VendorsPaymentProviderEffects,
      UserEffects,
      FeatureEffects,
      VatCategoryEffects,
      ProductEffects,
      CompanyEffects,
      CompanyUserEffects,
      SystemMessageEffects,
      BookingEffects,
    ]),
    AppRoutingModule,
    BreadcrumbsModule,
    WrapperWidgetModule,
    WrapperStatModule,
    MatTabsModule,
    WrapperMainModule,
    WrapperSearchModule,
  ],
  declarations: [DashboardComponent],
  providers: [],
})
export class DashboardModule {}
