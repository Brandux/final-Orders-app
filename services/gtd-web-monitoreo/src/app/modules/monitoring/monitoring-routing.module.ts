import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonitoringComponent } from './monitoring.component';

const routes: Routes = [
  {
    path: '',
    component: MonitoringComponent,
    children: [
      {
        path: 'pending-request',
        loadChildren: 'app/modules/monitoring/pending-request/pending-request.module#PendingRequestModule',
        data: {
          title: 'Solicitudes pendientes',
        },
      },
      {
        path: 'details-pending-request/:id',
        loadChildren: 'app/modules/monitoring/details-pending-request/details-pending-request.module#DetailsPendingRequestModule',
        data: {
          title: 'Detalle de las solicitudes pendientes',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitoringRoutingModule { }
