import { BusinessFormEditComponent } from './components/business/business-form/edit/business-form-edit.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BusinessComponent } from './components/business/business.component';
import { BusinessFormAddComponent } from './components/business/business-form/add/business-form-add.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    BusinessComponent,
    BusinessFormAddComponent,
    BusinessFormEditComponent,
    AdminLayoutComponent,
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
