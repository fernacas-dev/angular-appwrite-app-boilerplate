import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { IndexComponent } from './pages/index/index.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
