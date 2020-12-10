import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from '../Models/cliente.modulo';
import { Endereco } from '../Models/endereco.modulo';
import { Pedido } from '../Models/pedido.modulo';
import { Produto } from '../Models/Produto.modulo';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  @Input()
  cliente!: Cliente;
  
  @Output()
  next:EventEmitter<any> = new EventEmitter<any>();

  imposto=0.08;
  transporte=0.15
  endereco?: Endereco;
  produtos: Array<Produto> = new Array<Produto>();
  pedido?: Pedido;
  hidden:boolean = false;
  error:string="";

  onSubmit(form: NgForm){
    this.error= ""
    if(this.cliente.nome.length > 5 && this.cliente.email.length > 5 && this.cliente.email.includes("@") && this.cliente.cpf.length == 14)
      this.next.emit(1);
    else
      this.error = "campos preenchidos incorretamente";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
