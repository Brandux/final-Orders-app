import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'gtd-modal-derivado',
  templateUrl: './modal-derivado.component.html',
  styleUrls: ['./modal-derivado.component.scss']
})
export class ModalDerivadoComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
  }

  public onCancelar() {
    this.activeModal.close();
  }

}
