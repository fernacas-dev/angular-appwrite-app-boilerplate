import { NgModule } from '@angular/core';
import { IndexComponent } from './pages/index/index.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WpinstancesListComponent } from './components/wpinstances-list/wpinstances-list.component';
import { WpinstancesDetailsComponent } from './components/wpinstances-details/wpinstances-details.component';
import { WpinstancesItemsComponent } from './components/wpinstances-items/wpinstances-items.component';
import { CreateWpInstanceFormComponent } from './components/create-wp-instance-form/create-wp-instance-form.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    IndexComponent,
    ClientLayoutComponent,
    WpinstancesListComponent,
    WpinstancesDetailsComponent,
    WpinstancesItemsComponent,
    CreateWpInstanceFormComponent,
    DetailsComponent,
  ],
  imports: [
    ClientRoutingModule,
    SharedModule,
  ],
  exports: [
    IndexComponent,
    ClientLayoutComponent,
  ]
})
export class ClientModule { }
