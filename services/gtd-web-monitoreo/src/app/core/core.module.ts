import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './main-page/header/header.component';
import { IdentityEnterpriseComponent } from './main-page/header/identity-enterprise/identity-enterprise.component';
import { IdentityIasdLogoComponent } from './main-page/identity-iasd-logo/identity-iasd-logo.component';
import { SidebarContentComponent } from './main-page/sidebar/sidebar-content/sidebar-content.component';
import { SidebarFooterComponent } from './main-page/sidebar/sidebar-footer/sidebar-footer.component';
import { SidebarHeaderComponent } from './main-page/sidebar/sidebar-header/sidebar-header.component';
import { TOASTR_CONFIG } from 'environments/generals';
import { ToastrModule } from 'ngx-toastr';
import {
  NbCardModule, NbSidebarModule, NbMenuModule, NbUserModule,
  NbActionsModule, NbContextMenuModule, NbThemeModule,
  NbLayoutModule,
} from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { LambMenuModule, LambTitleModule } from 'lamb-web-lib';


const BASE_MODULES = [
  CommonModule,
  RouterModule,
  // SharedModule,
];

const NB_MODULES: any[] = [
  NbThemeModule.forRoot({ name: 'lamb-denim' }),
  NbLayoutModule,
  NbCardModule,
  NbSidebarModule.forRoot(),
  NbMenuModule.forRoot(),
  NbUserModule,
  NbActionsModule,
  NbContextMenuModule,
];

const CORE_COMPONENTS: any[] = [
  HeaderComponent,
  IdentityEnterpriseComponent,
  MainPageComponent,
  IdentityIasdLogoComponent,
  SidebarContentComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
];

const LAMB_MODULES: any[] = [
  LambMenuModule,
  LambTitleModule.forRoot({ appName: 'GTD Monitoreo ' }),
];


const PROVIDERS: any[] = [
];

@NgModule({
  declarations: [
    ...CORE_COMPONENTS,
  ],
  imports: [
    ...BASE_MODULES,
    ...NB_MODULES,
    ...LAMB_MODULES,
    ToastrModule.forRoot(TOASTR_CONFIG),
  ],
  providers: [
    ...PROVIDERS,
  ],
  exports: [],
})
export class CoreModule { }
