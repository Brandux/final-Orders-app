import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LambModalModule, LambInputIconModule, LambShowErrorModule } from 'lamb-web-lib';
import {
  NbButtonModule, NbProgressBarModule, NbRadioModule,
  NbCardModule,
} from '@nebular/theme';


const COMPONENTS: any[] = [];

const SERVICES: any[] = [];

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
];

@NgModule({
  declarations: [
    DashboardComponent,
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    ...LAMB_MODULES,
    ...NGB_MODULES,
    ...NB_MODULES,
    DashboardRoutingModule,
  ],
  providers: [
    ...SERVICES,
  ],
  entryComponents: [
  ],
})
export class DashboardModule { }
