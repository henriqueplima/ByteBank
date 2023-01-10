import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Teste');
  }

  transferir(): void {
    console.log('Solicitada nova transferencia');
  }

}
