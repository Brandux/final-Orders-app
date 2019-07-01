import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule, NbLayoutModule, NbButtonModule, NbProgressBarModule,
  NbRadioModule, NbCardModule, NbSidebarModule, NbUserModule, NbActionsModule,
  NbMenuModule, NbContextMenuModule,
} from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { LambWebLibModule, LambModalModule, LambInputIconModule, LambShowErrorModule } from 'lamb-web-lib';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderMenuComponent } from './menu/header-menu/header-menu.component';
import { IdentityIasdLogoMenuComponent } from './menu/identity-iasd-logo-menu/identity-iasd-logo-menu.component';
import { IdentityEnterpriseMenuComponent } from './menu/header-menu/identity-enterprise-menu/identity-enterprise-menu.component';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';



const LAMB_MODULES: any[] = [
  LambModalModule,
  LambInputIconModule,
  LambShowErrorModule,
];

const NGB_MODULES: any[] = [];

const NB_MODULES: any[] = [
  NbButtonModule,
  NbProgressBarModule,
  NbRadioModule,
  NbCardModule,

  NbSidebarModule.forRoot(),
  NbMenuModule.forRoot(),
  NbUserModule,
  NbActionsModule,
  NbContextMenuModule,
];

const COMPONENTS: any[] = [
  AppComponent,
  LoginComponent,
  MenuComponent,
];

const SERVICES: any[] = [];


@NgModule({
  declarations: [
    ...COMPONENTS,
    HeaderMenuComponent,
    IdentityIasdLogoMenuComponent,
    IdentityEnterpriseMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'lamb-denim' }),
    NbLayoutModule,
    AppRoutingModule,
    LambWebLibModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    // HttpClient,
    ReactiveFormsModule,
    ...LAMB_MODULES,
    ...NGB_MODULES,
    ...NB_MODULES,
  ],
  providers: [
    ...SERVICES,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
