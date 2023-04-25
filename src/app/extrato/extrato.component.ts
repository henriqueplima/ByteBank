import { Component, Inject, Input, OnInit } from '@angular/core';
import { Transferencia } from 'model/transferencia.model';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: any[];
 
  constructor(private service: TransferService) {
    this.transferencias = [];
  }

  ngOnInit() {
    //this.transferencias = this.service.transferencias2;
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      this.transferencias = transferencias;
    })
  }

}
