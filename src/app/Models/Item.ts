import { Produto } from './Produto';

export class Item {
    produto: Produto;
    quantidade: number;

    constructor(item: IItem) {
        this.produto = item.produto;
        this.quantidade = item.quantidade;
    }
}

export interface IItem {
    produto: Produto;
    quantidade: number;
}