import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './core';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login : gtd - 8 Ciclo',
    },
  },
  {
    path: 'menu',
    component: MenuComponent,
    data: {
      title: 'Menu',
    },
  },


  {
    path: 'home',
    component: MainPageComponent,
    loadChildren: 'app/modules/modules.module#ModulesModule',
  },
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
