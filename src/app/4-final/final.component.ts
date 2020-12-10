import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pedido } from '../Models/pedido.modulo';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  @Input()
  pedido!:Pedido
  
  @Output()
  next:EventEmitter<any> = new EventEmitter<any>();

  ent:string = "";

  constructor() { }

  ngOnInit(): void {
    this.ent = this.pedido.entrega == true? `entrega na rua ${this.pedido.cliente?.endereco?.rua}`: `O pedido não sera entregue`;
  }

  onSubmit(){
    this.next.emit(0);
  }
}
