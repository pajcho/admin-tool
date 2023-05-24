import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WrapperDetailsComponent } from './wrapper-details.component';
import { DotLoaderModule } from '../../dot-loader/dot-loader.module';
import { WrapperDetailsTabComponent } from './tab/wrapper-details-tab.component';

@NgModule({
  imports: [CommonModule, RouterModule, DotLoaderModule],
  declarations: [WrapperDetailsComponent, WrapperDetailsTabComponent],
  providers: [],
  exports: [WrapperDetailsComponent, WrapperDetailsTabComponent],
})
export class WrapperDetailsModule {}
