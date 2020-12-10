import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Endereco } from '../Models/endereco.modulo';
import { Item } from '../Models/item.modulo';
import { Pedido } from '../Models/pedido.modulo';
import { Cliente } from '../Models/cliente.modulo'
import { NgForm } from '@angular/forms';

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

  @Input()
  endereco!: Endereco;

  @Output()
  next:EventEmitter<any> = new EventEmitter<any>();

  @Output()
  salvar:EventEmitter<any> = new EventEmitter<any>();

  @Input()
  pedido?: Pedido;

  error:string= "";


  ngOnInit(): void { 
  }

  entregar(){
    this.entrega=true;
  }

  cancelar(){
    this.entrega=false;
  }

  onSubmit(form: NgForm){

    this.cliente.endereco = this.endereco;
    this.pedido = new Pedido({entrega: this.entrega, itens:new Array<Item>(), cliente: this.cliente});
    this.salvar.emit(this.pedido);
    console.log(`pedido ${this.pedido.entrega}`);
    
    this.next.emit(2);
  }
}