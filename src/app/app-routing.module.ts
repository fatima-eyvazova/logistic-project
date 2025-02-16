import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'singlepage', pathMatch: 'full' },
  {
    path: 'singlepage',
    loadChildren: () =>
      import('./pages/singlepage/singlepage.module').then(
        (m) => m.SinglepageModule
      ),
  },
  { path: 'register', component: RegisterComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },

  { path: '**', redirectTo: 'singlepage' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
