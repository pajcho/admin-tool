import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WrapperWidgetComponent } from './wrapper-widget.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WrapperWidgetComponent],
  providers: [],
  exports: [WrapperWidgetComponent],
})
export class WrapperWidgetModule {}
