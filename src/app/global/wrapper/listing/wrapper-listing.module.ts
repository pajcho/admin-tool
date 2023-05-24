import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WrapperListingComponent } from './wrapper-listing.component';
import { WrapperListingTotalComponent } from './total/wrapper-listing-total.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WrapperListingComponent, WrapperListingTotalComponent],
  providers: [],
  exports: [WrapperListingComponent, WrapperListingTotalComponent],
})
export class WrapperListingModule {}
