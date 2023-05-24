import { Routes, RouterModule } from '@angular/router';
import { VatCategoriesComponent } from './vat-categories/vat-categories.component';
import { AuthGuard } from '../auth/auth.guard';
import { ProductsComponent } from './products/products.component';
import { SuperAdminGuard } from '../auth/super-admin.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    // Have to use children option to prevent all guards from executing. This way they will execute one by one
    children: [
      {
        path: '',
        component: ProductsComponent,
        canActivate: [SuperAdminGuard],
        data: { title: 'Products' },
      },
    ],
  },
  {
    path: 'vat-categories',
    canActivate: [AuthGuard],
    // Have to use children option to prevent all guards from executing. This way they will execute one by one
    children: [
      {
        path: '',
        component: VatCategoriesComponent,
        canActivate: [SuperAdminGuard],
        data: { title: 'Vat Categories' },
      },
    ],
  },
  {
    path: 'vendors',
    loadChildren: () => import('./vendors/vendors.module').then((m) => m.VendorsModule),
  },
];

export const routing = RouterModule.forChild(routes);
