import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { DialogTitleComponent } from './dialog-title.component';

@NgModule({
  declarations: [DialogTitleComponent],
  imports: [MatDialogModule, MatTooltipModule, CommonModule],
  exports: [DialogTitleComponent],
})
export class DialogModule {}
