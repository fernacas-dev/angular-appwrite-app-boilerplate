import { CategoriesComponent } from './components/categories/categories.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './components/business/business.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BackuphistoriesComponent } from './components/backuphistories/backuphistories.component';
import { InstancedbconfigComponent } from './components/instancedbconfig/instancedbconfig.component';
import { NodesComponent } from './components/nodes/nodes.component';
import { PlansComponent } from './components/plans/plans.component';
import { UsagehistoriesComponent } from './components/usagehistories/usagehistories.component';
import { WpinstancesComponent } from './components/wpinstances/wpinstances.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'business',
        component: BusinessComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'backuphistories',
        component: BackuphistoriesComponent,
      },
      {
        path: 'instancedbconfig',
        component: InstancedbconfigComponent,
      },
      {
        path: 'nodes',
        component: NodesComponent,
      },
      {
        path: 'plans',
        component: PlansComponent,
      },
      {
        path: 'usagehistories',
        component: UsagehistoriesComponent,
      },
      {
        path: 'wpinstances',
        component: WpinstancesComponent,
      },
      {
        path: '**',
        redirectTo: 'nodes'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

