import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MonitoringService } from 'app/_service/monitoring.service';

@Component({
  selector: 'gtd-table-monitoring',
  templateUrl: './table-monitoring.component.html',
  styleUrls: ['./table-monitoring.component.scss']
})
export class TableMonitoringComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private monitoringService: MonitoringService,
  ) { }

  ngOnInit() {
    this.monitoringService.inicial().subscribe(rep => {
      console.log(rep);
    });
  }

  onDetails() {
    this.router.navigate(['../../../details-pending-request/' + 43], { relativeTo: this.activatedRoute });
  }

}
