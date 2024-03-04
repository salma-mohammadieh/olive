import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { CompaniesPageComponent } from '../pages/companies-page/companies-page.component';
import { CreatecompanyPageComponent } from '../pages/createcompany-page/createcompany-page.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { IsAuthGuard } from '../services/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: LoginPageComponent, pathMatch: 'full' },

  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [IsAuthGuard],
    children: [
      {
        path: 'companies',
        component: CompaniesPageComponent,
      },
      {
        path: 'companies/createcompany',
        component: CreatecompanyPageComponent,
      },
      {
        path: 'companies/editcompany/:id',
        component: CreatecompanyPageComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
