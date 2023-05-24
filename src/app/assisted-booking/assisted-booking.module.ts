import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';
import { MatRadioModule } from '@angular/material/radio';
import { AssistedBookingComponent } from './assisted-booking.component';
import { routing } from './assisted-booking.routing';
import { WrapperMainModule } from '../global/wrapper/main/wrapper-main.module';
import { BreadcrumbsModule } from '../global/breadcrumbs/breadcrumbs.module';
import { WrapperDetailsModule } from '../global/wrapper/details/wrapper-details.module';
import { PNREffects } from '../effects/pnr.effects';
import { DotLoaderModule } from '../global/dot-loader/dot-loader.module';
import { ValidatePNRComponent } from './validate-pnr.component';
import { ProductDetailsComponent } from './product-details.component';
import { CostCenterEffects } from '../effects/cost-center.effects';
import { FlightDetailsComponent } from './flight-details.component';
import { PaymentEffects } from '../effects/payment.effects';
import { DibPipesModule } from '../utils/pipes/pipes.module';
import { PluralModule } from '../global/plural/plural.module';
import { CartTabsModule } from '../bookings/details/cart/cart-tabs.module';
import { FlightDestinationComponent } from './flight-destination.component';
import { ProductUpdatesComponent } from './product-updates.component';
import { ProductDetailsFormComponent } from './product-details-form.component';
import { CheckoutEffects } from '../effects/checkout.effects';
import { VendorsPaymentProviderEffects } from '../effects/vendor-payment-provider.effects';
import { VendorEffects } from '../effects/vendor.effects';
import { ProductEffects } from '../effects/product.effects';

@NgModule({
  imports: [
    CommonModule,
    routing,
    EffectsModule.forFeature([
      PNREffects,
      CostCenterEffects,
      PaymentEffects,
      CheckoutEffects,
      VendorsPaymentProviderEffects,
      ProductEffects,
      VendorEffects,
    ]),
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    WrapperMainModule,
    WrapperDetailsModule,
    DotLoaderModule,
    DibPipesModule,
    PluralModule,
    CartTabsModule,
    MatRadioModule,
  ],
  declarations: [
    AssistedBookingComponent,
    ValidatePNRComponent,
    ProductDetailsComponent,
    ProductDetailsFormComponent,
    ProductUpdatesComponent,
    FlightDetailsComponent,
    FlightDestinationComponent,
  ],
  providers: [],
})
export class AssistedBookingModule {}
