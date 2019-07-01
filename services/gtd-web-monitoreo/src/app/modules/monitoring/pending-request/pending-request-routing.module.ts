import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PendingRequestComponent } from './pending-request.component';
import { PendingRequestHomeComponent } from './container/pending-request-home.component';

const routes: Routes = [
  {
    path: '',
    component: PendingRequestComponent,
    children: [
      {
        path: '',
        component: PendingRequestHomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingRequestRoutingModule { }

export const rutedPendingRequestComponent = [
  PendingRequestComponent,
  PendingRequestHomeComponent,
];
