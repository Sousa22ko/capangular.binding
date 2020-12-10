import { Component } from '@angular/core';
import { Cliente } from './Models/cliente.modulo';
import { Endereco } from './Models/endereco.modulo';
import { Pedido } from './Models/pedido.modulo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-first';

  hidden:boolean = false;
  
  cliente: Cliente = new Cliente({nome:"testestestestests", cpf:"11111111111111", email:"dasdadsadas@qweqweqweqwe"});
  pedido:Pedido = new Pedido({entrega:false, itens: [], cliente: this.cliente})
  endereco: Endereco = new Endereco({cep: ""});

  step:number = 0;

  constructor() {
  }
  
  next(page: any){
    this.step = page;
    console.log(this.pedido.entrega);
  }

  salvar(pedido: Pedido){
    this.pedido = pedido;    
  }
}