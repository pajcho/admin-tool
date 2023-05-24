import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: { title: 'Dashboard' } },

  {
    path: 'system-messages',
    loadChildren: () => import('./system-messages/system-messages.module').then((m) => m.SystemMessagesModule),
  },
  {
    path: 'companies',
    loadChildren: () => import('./companies/companies.module').then((m) => m.CompaniesModule),
  },
  {
    path: 'billing-requests',
    loadChildren: () => import('./billing-requests/billing-requests.module').then((m) => m.BillingRequestsModule),
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'features',
    loadChildren: () => import('./features/features.module').then((m) => m.FeaturesModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
  },

  // Fallbacks
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
