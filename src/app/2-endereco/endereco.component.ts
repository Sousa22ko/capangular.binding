import { Component, Input, OnInit } from '@angular/core';
import { Endereco } from '../Models/Endereco';
import { Item } from '../Models/Item';
import { Pedido } from '../Models/Pedido';
import { Cliente, ICliente } from '../Models/Cliente'

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  hiddenEnd: boolean = false;
  entrega: boolean = false;

  @Input()
  cliente!:Cliente


  endereco: Endereco = new Endereco({cep: ""});

  pedido?: Pedido;
  error:string= "";


  ngOnInit(): void { 
  }

  entregar(){
    this.entrega= true;
  }

  cancelar(){
    this.entrega= false;
  }

  next(){
    this.cliente.endereco= this.endereco
    this.pedido = new Pedido({entrega: this.entrega, itens:new Array<Item>(), cliente: this.cliente})
    this.hiddenEnd = true;
  }
}