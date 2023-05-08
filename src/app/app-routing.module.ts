import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoggedGuardGuard } from './shared/guards/user-logged-guard.guard';
import { LoginComponent } from './shared/pages/login/login.component';
import { LogoutComponent } from './shared/pages/logout/logout.component';
import { RegisterComponent } from './shared/pages/register/register.component';
import { AdminRoleGuard } from './shared/guards/admin-role.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
    canActivate: [UserLoggedGuardGuard],
    data: { preload: true },
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    data: { preload: true },
    canActivate: [UserLoggedGuardGuard, AdminRoleGuard],
  },
  {
    path: '**',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
