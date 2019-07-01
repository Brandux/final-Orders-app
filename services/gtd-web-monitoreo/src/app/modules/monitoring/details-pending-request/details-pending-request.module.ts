import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsPendingRequestRoutingModule, rutedDetailsPendingRequestComponent } from './details-pending-request-routing.module';
import {
  LambButtonBackModule, LambButtonIconModule, LambInputIconModule,
  LambConfirmDialogModule, LambFieldsetModule, LambShowErrorModule,
  LambTabsModule,
} from 'lamb-web-lib';
import { FilterMonitoringComponent } from '../pending-request/components/filter-monitoring/filter-monitoring.component';
import { NbCardModule, NbTooltipModule, NbProgressBarModule, NbRadioModule, NbButtonModule } from '@nebular/theme';
import { NgbDatepickerModule, NgbModalModule, NgbTooltipModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DetailsComponent } from './components/details/details.component';
import { DetailsTableComponent } from './components/details-table/details-table.component';
import { ModalDerivadoComponent } from './components/modal-derivado/modal-derivado.component';




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
  // FilterMonitoringComponent,
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
  // nbButton,
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
    DetailsPendingRequestRoutingModule,
    ...LAMB_MODULES,
    ...NG_MODULES,
    ...NGB_MODULES,
  ],
  declarations: [
    ...rutedDetailsPendingRequestComponent,
    ...COMPONENTS,
    ...PIPES,
    DetailsComponent,
    DetailsTableComponent,
    ModalDerivadoComponent,
  ],
  providers: [
    ...SERVICES,
  ],
  entryComponents: [
    ModalDerivadoComponent,
  ],
})
export class DetailsPendingRequestModule { }
