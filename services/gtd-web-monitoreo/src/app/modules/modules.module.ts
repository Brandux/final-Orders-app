import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { ReportComponent } from './report/report.component';
import { SupervisionComponent } from './supervision/supervision.component';

@NgModule({
  declarations: [ModulesComponent, ReportComponent, SupervisionComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
