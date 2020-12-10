import { Cliente } from './Cliente';
import { Item, IItem } from './Item'


export class Pedido {
    itens: Array<Item> = new Array<Item>();
    cliente?: Cliente;
    entrega: boolean;
    imposto = 0.08; // 8%
    taxa_entrega = 0.15; // 15%
    valorTotal: number = 0.0;

    constructor(pedido: IPedido){
        this.itens = pedido.itens;
        this.cliente = pedido.cliente;
        this.entrega = pedido.entrega;
    }

    addItem(item: IItem): void {
        let i = new Item(item);
        this.itens.push(i);
    }

    removeItem(id: number): Array<Item> {
        return this.itens.filter(item => {return item.produto.id != id})

        // for (let index = 0; index < this.itens.length; index++) {
        //     if (id == this.itens[index].produto.id) {
        //         return this.itens.splice(index, 1);
        //     }
        // }
        // return [];
    }

    getTotal(): number {
        let total = 0;
        let valorImposto = 0;
        let valorEntrega = 0;

        total = this.somaProdutos();

        valorImposto = total * this.imposto;

        if (this.entrega) {
            valorEntrega = total * this.taxa_entrega;
        }

        this.valorTotal = Number.parseFloat((total + valorImposto + valorEntrega).toFixed(2))
        return this.valorTotal;
    }


    somaProdutos(): number {
        let somaProdutos = 0;

        this.itens.forEach(item => {
            somaProdutos += (item.quantidade * item.produto.preco);
        });
        return somaProdutos;
    }
}

export interface IPedido{
    itens: Array<Item>;
    cliente?: Cliente;
    entrega: boolean;
}