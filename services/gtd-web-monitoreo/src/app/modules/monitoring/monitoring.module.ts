import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitoringRoutingModule } from './monitoring-routing.module';
import {
  LambModalModule,
  LambInputIconModule,
  LambShowErrorModule,
  LambButtonBackModule,
  LambButtonIconModule,
  LambConfirmDialogModule,
  LambFieldsetModule,
  LambTabsModule,
} from 'lamb-web-lib';
import { NbButtonModule, NbProgressBarModule, NbRadioModule, NbCardModule } from '@nebular/theme';
import { MonitoringComponent } from './monitoring.component';
import { PendingRequestComponent } from './pending-request/pending-request.component';
import { DetailsPendingRequestComponent } from './details-pending-request/details-pending-request.component';
import { MonitoringService } from 'app/_service/monitoring.service';


const COMPONENTS: any[] = [];

const SERVICES: any[] = [
  MonitoringService,
];

const LAMB_MODULES: any[] = [
  LambButtonBackModule,
  LambButtonIconModule,
  LambInputIconModule,
  LambConfirmDialogModule,
  LambFieldsetModule,
  LambShowErrorModule,
  LambTabsModule,
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
    MonitoringComponent,
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    MonitoringRoutingModule,
    ...LAMB_MODULES,
    ...NGB_MODULES,
    ...NB_MODULES,
  ],
  providers: [
    ...SERVICES,
  ],
  entryComponents: [
  ],
})
export class MonitoringModule { }
