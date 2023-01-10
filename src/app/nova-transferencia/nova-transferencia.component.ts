import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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

  constructor() { 
    this.valor = 0;
    this.destino = 0;
  }


  ngOnInit(): void {}

  transferir(): void {
    console.log('Solicitada nova transferencia');
    this.error = false;
    if (this.valor < 1 || this.destino < 1) {
      this.error = true;
    } else {
      const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
    this.limparCampos();
    }
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

}
