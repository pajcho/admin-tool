import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { DotLoaderModule } from '../dot-loader/dot-loader.module';

@NgModule({
  imports: [CommonModule, RouterModule, DotLoaderModule],
  declarations: [BreadcrumbsComponent, BreadcrumbComponent],
  providers: [],
  exports: [BreadcrumbsComponent, BreadcrumbComponent],
})
export class BreadcrumbsModule {}
