import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { routing } from './system-messages.routing';
import { SystemMessagesComponent } from './system-messages.component';
import { BreadcrumbsModule } from '../global/breadcrumbs/breadcrumbs.module';
import { WrapperListingModule } from '../global/wrapper/listing/wrapper-listing.module';
import { WrapperDetailsModule } from '../global/wrapper/details/wrapper-details.module';
import { WrapperMainModule } from '../global/wrapper/main/wrapper-main.module';
import { DibPipesModule } from '../utils/pipes/pipes.module';
import { SystemMessageEffects } from '../effects/system-message.effects';
import { SystemMessageDialogComponent } from './system-message-dialog.component';
import { SystemMessageFormComponent } from './system-message-form.component';
import { DialogModule } from '../global/dialog/dialog.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatButtonModule,
    EffectsModule.forFeature([SystemMessageEffects]),
    MatDialogModule,
    FormsModule,
    MatInputModule,
    BreadcrumbsModule,
    WrapperListingModule,
    WrapperDetailsModule,
    WrapperMainModule,
    DibPipesModule,
    MatSelectModule,
    MatTooltipModule,
    ReactiveFormsModule,
    DialogModule,
  ],
  declarations: [SystemMessagesComponent, SystemMessageDialogComponent, SystemMessageFormComponent],
  providers: [],
})
export class SystemMessagesModule {}
