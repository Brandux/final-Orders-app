import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'gtd-filter-monitoring',
  templateUrl: './filter-monitoring.component.html',
  styleUrls: ['./filter-monitoring.component.scss']
})
export class FilterMonitoringComponent implements OnInit {
  filtersFormAssistReport: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.filtersFormAssistReport = this.formBuilder.group({
      id_depto: ['', [Validators.required]],
      fecha_init: [ '', [Validators.required]],
      fecha_fin :  ['', Validators.required],
    });
  }

  onGetData () {
    const valid = this.filtersFormAssistReport.valid;
    if (valid) {
      const value = this.filtersFormAssistReport.value;
      console.log(value);
    }
  }
}
