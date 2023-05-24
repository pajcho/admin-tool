import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { routing } from './users.routing';
import { UsersComponent } from './users.component';
import { UserEffects } from '../effects/user.effects';
import { UserFormComponent } from './user-form.component';
import { UserPasswordFormComponent } from './user-password-form.component';
import { BreadcrumbsModule } from '../global/breadcrumbs/breadcrumbs.module';
import { WrapperListingModule } from '../global/wrapper/listing/wrapper-listing.module';
import { WrapperMainModule } from '../global/wrapper/main/wrapper-main.module';
import { DialogModule } from '../global/dialog/dialog.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSnackBarModule,
    EffectsModule.forFeature([UserEffects, UserEffects]),
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    WrapperListingModule,
    MatTooltipModule,
    WrapperMainModule,
    DialogModule,
  ],
  declarations: [UsersComponent, UsersComponent, UserFormComponent, UserPasswordFormComponent],
  providers: [],
})
export class UsersModule {}
