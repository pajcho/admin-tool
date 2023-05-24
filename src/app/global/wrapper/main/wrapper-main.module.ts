import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WrapperMainComponent } from './wrapper-main.component';
import { LayoutModule } from '../../layout/layout.module';

@NgModule({
  imports: [CommonModule, RouterModule, LayoutModule],
  declarations: [WrapperMainComponent],
  providers: [],
  exports: [WrapperMainComponent],
})
export class WrapperMainModule {}
