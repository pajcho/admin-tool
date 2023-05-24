import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  CartTabsHotelDetailsComponent,
  CartTabsFlightDetailsComponent,
  CartTabsTaxiDetailsComponent,
  CartTabsTrainDetailsComponent,
  CartTabsGenericProductDetailsComponent,
  HotelFullDetailsComponent,
  TrainFullDetailsComponent,
  FlightFullDetailsComponent,
  TaxiFullDetailsComponent,
  RentalCarFullDetailsComponent,
  CartTabsRentalCarDetailsComponent,
} from './tabs';
import { CartTabsComponent } from './cart-tabs.component';
import { DibPipesModule } from '../../../utils/pipes/pipes.module';
import { CartItemStatComponent } from './tabs/shared/cart-item-stat/cart-item-stat.component';
import { TravelersFullDetailsComponent } from './tabs/shared/travelers-full-details/travelers-full-details.component';
import { DialogModule } from '../../../global/dialog/dialog.module';
import { PluralModule } from '../../../global/plural/plural.module';

@NgModule({
  imports: [CommonModule, MatDialogModule, DibPipesModule, MatTooltipModule, DialogModule, PluralModule],
  declarations: [
    CartTabsComponent,
    CartTabsHotelDetailsComponent,
    CartTabsFlightDetailsComponent,
    CartTabsTaxiDetailsComponent,
    CartTabsRentalCarDetailsComponent,
    CartTabsTrainDetailsComponent,
    CartTabsGenericProductDetailsComponent,
    HotelFullDetailsComponent,
    TrainFullDetailsComponent,
    FlightFullDetailsComponent,
    TaxiFullDetailsComponent,
    RentalCarFullDetailsComponent,
    TravelersFullDetailsComponent,
    CartItemStatComponent,
  ],
  providers: [],
  exports: [CartTabsComponent, CartItemStatComponent],
})
export class CartTabsModule {}
