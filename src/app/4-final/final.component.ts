import { Component, Input, OnInit } from '@angular/core';
import { Pedido } from '../Models/Pedido';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  @Input()
  pedido!:Pedido

  constructor() { }

  ngOnInit(): void {
  }

}
