import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './pages/logout/logout.component';
import { TableComponent } from './components/table/table.component';
import { ModalComponent } from './components/modal/modal.component';
import { DynamicComponentDirective } from './directives/dynamic-component.directive';
import { CrudComponent } from './components/crud/crud.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    TableComponent,
    ModalComponent,
    DynamicComponentDirective,
    CrudComponent,
    AddFormComponent,
    EditFormComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    LoaderComponent,
    LoginComponent,
    RegisterComponent,
    TableComponent,
    ModalComponent,
    AddFormComponent,
    EditFormComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [
  ]
})
export class SharedModule { }
