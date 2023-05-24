import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WrapperStatComponent } from './wrapper-stat.component';
import { DotLoaderModule } from '../../dot-loader/dot-loader.module';

@NgModule({
  imports: [CommonModule, RouterModule, DotLoaderModule],
  declarations: [WrapperStatComponent],
  providers: [],
  exports: [WrapperStatComponent],
})
export class WrapperStatModule {}
