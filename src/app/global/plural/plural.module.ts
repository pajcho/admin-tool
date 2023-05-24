import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluralComponent } from './plural.component';

@NgModule({
  declarations: [PluralComponent],
  imports: [CommonModule],
  exports: [PluralComponent],
})
export class PluralModule {}
