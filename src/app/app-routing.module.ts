import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './1-cliente/cliente.component';
import { EnderecoComponent } from './2-endereco/endereco.component';
import { CarrinhoComponent } from './3-carrinho/carrinho.component';
import { FinalComponent } from './4-final/final.component';

const routes: Routes = [
  { path: "", redirectTo:"/cliente" , pathMatch: "full" },
  { path: "cliente", component: ClienteComponent },
  { path: "endereco", component: EnderecoComponent },
  { path: "carrinho", component: CarrinhoComponent },
  { path: "resumo", component: FinalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
