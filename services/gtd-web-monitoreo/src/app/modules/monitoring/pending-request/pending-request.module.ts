import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingRequestRoutingModule, rutedPendingRequestComponent } from './pending-request-routing.module';
import { PendingRequestHomeComponent } from './container/pending-request-home.component';
import { FilterMonitoringComponent } from './components/filter-monitoring/filter-monitoring.component';
import {
  LambButtonBackModule, LambButtonIconModule, LambInputIconModule,
  LambConfirmDialogModule, LambFieldsetModule, LambShowErrorModule,
  LambTabsModule,
 } from 'lamb-web-lib';
 import { NgbDatepickerModule, NgbTooltipModule, NgbModalModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NbCardModule, NbProgressBarModule, NbTooltipModule, NbRadioModule, NbButtonModule, NbDatepickerModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableMonitoringComponent } from './components/table-monitoring/table-monitoring.component';



const LAMB_MODULES: any[] = [
  LambButtonBackModule,
  LambButtonIconModule,
  LambInputIconModule,
  LambConfirmDialogModule,
  LambFieldsetModule,
  LambShowErrorModule,
  LambTabsModule,
];

const COMPONENTS: any[] = [
  FilterMonitoringComponent,
];

const SERVICES: any[] = [
];

const PIPES: any = [
];

const NG_MODULES: any = [
  NbCardModule,
  NbTooltipModule,
  NbProgressBarModule,
  NbRadioModule,
  NbButtonModule,
  NbDatepickerModule,
  // NbRadioModule,
];

const NGB_MODULES: any = [
  NgbDatepickerModule,
  NgbTooltipModule,
  NgbModalModule,
  NgbTypeaheadModule,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PendingRequestRoutingModule,
    ...LAMB_MODULES,
    ...NG_MODULES,
    ...NGB_MODULES,
  ],
  declarations: [
    ...rutedPendingRequestComponent,
    ...COMPONENTS,
    ...PIPES,
    TableMonitoringComponent,
  ],
  providers: [
    ...SERVICES,
  ],
  entryComponents : []
})
export class PendingRequestModule { }
