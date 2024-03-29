import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from 'model/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

   private listaTransferencia: any[];
   private url = "http://localhost:3000/transferencias";


  constructor(private httpClient: HttpClient) { 
    this.listaTransferencia = [];
  }

  get transferencias2() {
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia>{
    this.hidratar(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
    // this.listaTransferencia.push(transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }


}
