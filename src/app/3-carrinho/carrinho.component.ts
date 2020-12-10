import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from '../Models/cliente.modulo';
import { Endereco } from '../Models/endereco.modulo';
import { Item } from '../Models/item.modulo';
import { Pedido } from '../Models/pedido.modulo';
import { Produto } from '../Models/Produto.modulo';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit{

  constructor() { }

  itensTotal: Array<Item> = new Array<Item>();
  listItens: Array<Item> = new Array<Item>();
  entrega: boolean = false;
  
  @Input()
  pedido!:Pedido; 

  @Output()
  next:EventEmitter<any> = new EventEmitter<any>();

  @Output()
  salvar= new EventEmitter<any>();

  produtos:Array<Produto> = new Array<Produto>(); 

  // displayedColumns: string[] = ["descricao","categoria","preco","quantidade"]

  loadProdutos(){
    let produtos = [
      // {
      //   id: 1,
      //   categoria: "Hardware",
      //   descricao: "Teclado Gamer",
      //   preco: 300.00
      // }, 
      // {
      //   id: 2,
      //   categoria: "Hardware",
      //   descricao: "Mouse Sem Fio",
      //   preco: 100.00
      // }, 
      // {
      //   id: 3,
      //   categoria: "Software",
      //   descricao: "Super Defender",
      //   preco: 200.00
      // }, 
      {
        id: 4,
        categoria: "Hardware",
        descricao: "Lenovo max",
        preco: 2200.00
      }, 
      {
        id: 5,
        categoria: "Hardware",
        descricao: "Predator H900",
        preco: 5900.00
      }, 
      {
        id: 6,
        categoria: "Acessorio",
        descricao: "Edifier B300",
        preco: 245.50
      }, 
      // {
      //   id: 7,
      //   categoria: "Acessorio",
      //   descricao: "Fone max 2",
      //   preco: 75.30
      // }, 
      // {
      //   id: 8,
      //   categoria: "Software",
      //   descricao: "Boost de desempenho",
      //   preco: 30.00
      // }, 
      // {
      //   id: 9,
      //   categoria: "Roupa",
      //   descricao: "Camisa Hacktoberfest",
      //   preco: 35.00
      // }, 
      // {
      //   id: 10,
      //   categoria: "Roupa",
      //   descricao: "Bone geek",
      //   preco: 30.00
      // }, 
      // {
      //   id: 11,
      //   categoria: "Revistas",
      //   descricao: "Revista mundo logistica",
      //   preco: 10.00
      // }, 
      // {
      //   id: 12,
      //   categoria: "Revistas",
      //   descricao: "Tecnologia educacional",
      //   preco: 11.95
      // }, 
      {
        id: 13,
        categoria: "Hardware",
        descricao: "Nvidia RTX 3090",
        preco: 5000.00
      }, 
      {
        id: 14,
        categoria: "SSD",
        descricao: "SSD kingstone 500GB",
        preco: 350.00
      }, 
      {
        id: 15,
        categoria: "Hardware",
        descricao: "Monitor AOC 29 Polegadas",
        preco: 900.00
      }
    ];

    for (let produto of produtos){
      this.produtos.push(produto);
    } 
  }

  somaProdutos(itens: Array<Item>): number {
      let somaProdutos = 0;

        itens.forEach(item => {
          somaProdutos += item.produto.preco * item.quantidade;
      });
      return somaProdutos;
  }

  ngOnInit(){
    this.loadProdutos();
    this.produtos.forEach(element => {
      this.itensTotal.push(new Item({produto: element, quantidade: 0}))
    });
  }

  onSubmit(form:NgForm) { 
    this.listItens = this.itensTotal.filter((Item) => { return Item.quantidade > 0; });

    this.pedido.itens= this.listItens    
    this.pedido.getTotal();
    this.salvar.emit(this.pedido)
    this.next.emit(3);
  }
}
