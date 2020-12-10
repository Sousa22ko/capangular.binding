import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../Models/Cliente';
import { Endereco } from '../Models/Endereco';
import { Pedido } from '../Models/Pedido';
import { Produto } from '../Models/Produto';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: Cliente = new Cliente({nome:"testestestestests", cpf:"11111111111111", email:"dasdadsadas@qweqweqweqwe"});

  imposto=0.08;
  transporte=0.15
  endereco?: Endereco;
  produtos: Array<Produto> = new Array<Produto>();
  pedido?: Pedido;
  hidden:boolean = false;
  error:string="";

  next(){
    this.error= ""
    if(this.cliente.nome.length > 5 && this.cliente.email.length > 5 && this.cliente.email.includes("@") && this.cliente.cpf.length == 14)
      this.hidden = true;
    else
      this.error = "campos preenchidos incorretamente";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
