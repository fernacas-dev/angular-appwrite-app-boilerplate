import { CategoriesComponent } from './components/categories/categories.component';
import { BusinessFormEditComponent } from './components/business/business-form/edit/business-form-edit.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BusinessComponent } from './components/business/business.component';
import { BusinessFormAddComponent } from './components/business/business-form/add/business-form-add.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CategoriesFormAddComponent } from './components/categories/categories-form/add/categories-form-add.component';
import { CategoriesFormEditComponent } from './components/categories/categories-form/edit/categories-form-edit.component';

@NgModule({
  declarations: [
    BusinessComponent,
    BusinessFormAddComponent,
    BusinessFormEditComponent,
    AdminLayoutComponent,
    CategoriesComponent,
    CategoriesFormAddComponent,
    CategoriesFormEditComponent,
  ],
  imports: [
    AdminRoutingModule,
    SharedModule,
  ],
  exports: [
    AdminLayoutComponent
  ]
})
export class AdminModule { }
