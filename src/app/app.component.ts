import { Component } from '@angular/core';
import { Pedido } from './Models/Pedido';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-first';

  pedido?:Pedido 

  constructor() { } 

  salvar(pedido: Pedido){
    this.pedido = pedido;    
  }
}