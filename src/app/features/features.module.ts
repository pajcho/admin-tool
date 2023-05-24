import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { routing } from './features.routing';
import { FeaturesComponent } from './features.component';
import { FeatureEffects } from '../effects/feature.effects';
import { BreadcrumbsModule } from '../global/breadcrumbs/breadcrumbs.module';
import { WrapperListingModule } from '../global/wrapper/listing/wrapper-listing.module';
import { WrapperMainModule } from '../global/wrapper/main/wrapper-main.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSnackBarModule,
    EffectsModule.forFeature([FeatureEffects]),
    MatDialogModule,
    FormsModule,
    MatInputModule,
    BreadcrumbsModule,
    WrapperListingModule,
    MatTooltipModule,
    WrapperMainModule,
  ],
  declarations: [FeaturesComponent, FeaturesComponent],
  providers: [],
})
export class FeaturesModule {}
