import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupervisionRoutingModule } from './supervision-routing.module';
import { SupervisionHomeComponent } from './container/supervision-home.component';

@NgModule({
  declarations: [SupervisionHomeComponent],
  imports: [
    CommonModule,
    SupervisionRoutingModule
  ]
})
export class SupervisionModule { }
