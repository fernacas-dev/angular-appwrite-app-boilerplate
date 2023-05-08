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
import { NodesComponent } from './components/nodes/nodes.component';
import { NodesFormAddComponent } from './components/nodes/nodes-form/add/nodes-form-add/nodes-form-add.component';
import { PlansComponent } from './components/plans/plans.component';
import { PlansFormAddComponent } from './components/plans/plans-form/edit/plans-form-add/plans-form-add.component';
import { PlansFormEditComponent } from './components/plans/plans-form/edit/plans-form-edit/plans-form-edit.component';
import { BackuphistoriesComponent } from './components/backuphistories/backuphistories.component';
import { BackuphistoriesFormEditComponent } from './components/backuphistories/backuphistories-form/edit/backuphistories-form-edit/backuphistories-form-edit.component';
import { BackuphistoriesFormAddComponent } from './components/backuphistories/backuphistories-form/add/backuphistories-form-add/backuphistories-form-add.component';
import { InstancedbconfigComponent } from './components/instancedbconfig/instancedbconfig.component';
import { InstancedbconfigFormAddComponent } from './components/instancedbconfig/instancedbconfig-form/add/instancedbconfig-form-add/instancedbconfig-form-add.component';
import { InstancedbconfigFormEditComponent } from './components/instancedbconfig/instancedbconfig-form/edit/instancedbconfig-form-edit/instancedbconfig-form-edit.component';
import { UsagehistoriesComponent } from './components/usagehistories/usagehistories.component';
import { UsagehistoriesFormEditComponent } from './components/usagehistories/usagehistories-form/edit/usagehistories-form-edit/usagehistories-form-edit.component';
import { WpinstancesComponent } from './components/wpinstances/wpinstances.component';
import { UsagehistoriesFormAddComponent } from './components/usagehistories/usagehistories-form/add/usagehistories-form-add/usagehistories-form-add.component';
import { WpinstancesFormAddComponent } from './components/wpinstances/wpinstances-form/add/wpinstances-form-add/wpinstances-form-add.component';
import { WpinstancesFormEditComponent } from './components/wpinstances/wpinstances-form/edit/wpinstances-form-edit/wpinstances-form-edit.component';
import { NodesFormEditComponent } from './components/nodes/nodes-form/edit/nodes-form-edit/nodes-form-edit.component';

@NgModule({
  declarations: [
    BusinessComponent,
    BusinessFormAddComponent,
    BusinessFormEditComponent,
    AdminLayoutComponent,
    CategoriesComponent,
    CategoriesFormAddComponent,
    CategoriesFormEditComponent,
    NodesComponent,
    NodesFormAddComponent,
    NodesFormEditComponent,
    PlansComponent,
    PlansFormAddComponent,
    PlansFormEditComponent,
    BackuphistoriesComponent,
    BackuphistoriesFormEditComponent,
    BackuphistoriesFormAddComponent,
    InstancedbconfigComponent,
    InstancedbconfigFormAddComponent,
    InstancedbconfigFormEditComponent,
    UsagehistoriesComponent,
    UsagehistoriesFormEditComponent,
    UsagehistoriesFormAddComponent,
    WpinstancesComponent,
    WpinstancesFormAddComponent,
    WpinstancesFormEditComponent,
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
