import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { DibPipesModule } from '../../../utils/pipes/pipes.module';
import { SearchCompaniesComponent } from './search-companies/search-companies.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { QuickSearchWrapperComponent } from './quick-search-wrapper/quick-search-wrapper.component';
import { GreenSearchWrapperComponent } from './green-search-wrapper/green-search-wrapper.component';
import { SearchBookingsComponent } from './search-bookings/search-bookings.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    DibPipesModule,
  ],
  declarations: [
    GreenSearchWrapperComponent,
    QuickSearchWrapperComponent,
    SearchCompaniesComponent,
    SearchUsersComponent,
    SearchBookingsComponent,
  ],
  providers: [],
  exports: [
    GreenSearchWrapperComponent,
    QuickSearchWrapperComponent,
    SearchCompaniesComponent,
    SearchUsersComponent,
    SearchBookingsComponent,
  ],
})
export class WrapperSearchModule {}
