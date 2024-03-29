import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratoComponent } from './extrato/extrato.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';

const routes: Routes = [
  { path: "extrato", component: ExtratoComponent },
  { path: "nova-transferencia", component: NovaTransferenciaComponent },
  { path: "", redirectTo: "extrato", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
