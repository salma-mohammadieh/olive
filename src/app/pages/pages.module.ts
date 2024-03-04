import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomePageComponent } from './home-page/home-page.component';
import { CompaniesPageComponent } from './companies-page/companies-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../routing/app-routing.module';
import { CreatecompanyPageComponent } from './createcompany-page/createcompany-page.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    LoginPageComponent,
    HomePageComponent,
    CompaniesPageComponent,
    CreatecompanyPageComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatButtonModule,
    AppRoutingModule,
    MatDividerModule,
  ],
  exports: [HomePageComponent],
})
export class PagesModule {}
