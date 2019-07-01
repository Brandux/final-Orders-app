import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gtd-pending-request-home',
  template: `
    <div class="col-md-12 ">
      <gtd-filter-monitoring></gtd-filter-monitoring>
    </div>
    <div class="col-md-12">
      <gtd-table-monitoring></gtd-table-monitoring>
    </div>
  `,
  styles: []
})
export class PendingRequestHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
