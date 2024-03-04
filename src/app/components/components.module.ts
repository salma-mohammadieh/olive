import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatListModule } from '@angular/material/list';
import { DataTableComponent } from './data-table/data-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { AppRoutingModule } from '../routing/app-routing.module';
import { SearchComponent } from './search/search.component';
import { CreatecompanyFormComponent } from './createcompany-form/createcompany-form.component';
import { MatSelectModule } from '@angular/material/select';
import { AccountDropdownComponent } from './account-dropdown/account-dropdown.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    LoginFormComponent,
    HeaderComponent,
    SideNavComponent,
    DataTableComponent,
    SearchComponent,
    CreatecompanyFormComponent,
    AccountDropdownComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatChipsModule,
    AppRoutingModule,
    MatSelectModule,
    MatMenuModule,
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    LoginFormComponent,
    SideNavComponent,
    DataTableComponent,
    SearchComponent,
    CreatecompanyFormComponent,
    AccountDropdownComponent,
  ],
})
export class ComponentsModule {}
