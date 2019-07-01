import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDerivadoComponent } from '../modal-derivado/modal-derivado.component';

@Component({
  selector: 'gtd-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
  }

  onDerivar () {
    const modal = this.modalService.open(ModalDerivadoComponent, { size: 'sm', windowClass: 'lamb-modal-dist'  });
      // const modal = this.modalService.open(PreProvision3Component, { size: 'lg' });
      // modal.componentInstance.operation = operation;
      // modal.componentInstance.orderList = this.orderList;
      modal.result.then(resP => {
        if (resP.success) {
          // this.toFilters.emit(this.pram);
        }
      }).catch(resP => {
        // this.toFilters.emit(this.pram);
      });
    }
}
