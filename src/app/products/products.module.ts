import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { routing } from './products.routing';
import { VatCategoriesComponent } from './vat-categories/vat-categories.component';
import { ProductEffects } from '../effects/product.effects';
import { ProductsComponent } from './products/products.component';
import { VatCategoryEffects } from '../effects/vat-category.effects';
import { VatCategoryFormComponent } from './vat-categories/vat-category-form.component';
import { ProductFormComponent } from './products/product-form.component';
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
    MatProgressBarModule,
    MatButtonModule,
    EffectsModule.forFeature([ProductEffects, VatCategoryEffects]),
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    BreadcrumbsModule,
    WrapperListingModule,
    MatTooltipModule,
    ReactiveFormsModule,
    WrapperMainModule,
    DialogModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    DropdownModule,
  ],
  declarations: [ProductsComponent, ProductFormComponent, VatCategoriesComponent, VatCategoryFormComponent],
  providers: [],
})
export class ProductsModule {}
