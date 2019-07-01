import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsPendingRequestComponent } from './details-pending-request.component';
import { DetailsPendingRequestComponentHome } from './container/details-pending-request.component-home';

const routes: Routes = [
  {
    path: '',
    component: DetailsPendingRequestComponent,
    children: [
      {
        path: '',
        component: DetailsPendingRequestComponentHome,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsPendingRequestRoutingModule { }

export const rutedDetailsPendingRequestComponent = [
  DetailsPendingRequestComponent,
  DetailsPendingRequestComponentHome,
];
