import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from 'model/transferencia.model';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

@Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;
  error: boolean = false

  constructor(private service: TransferService, private router: Router) { 
    this.valor = 0;
    this.destino = 0;
  }


  ngOnInit(): void {}

  transferir(): void {
    this.error = false;
    if (this.valor < 1 || this.destino < 1) {
      this.error = true;
    } else {
      const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
      //this.aoTransferir.emit(valorEmitir);
      this.service.adicionar(valorEmitir).subscribe(resultado => {
        console.log("resultado: )"+resultado);
        this.limparCampos;
        this.router.navigateByUrl('extrato');
      },
      error => console.error(error));
    }
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

}
