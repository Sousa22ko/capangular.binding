export class FormaDePagamento {

    emissor: string;
    moeda: string

    constructor(meioPagamento: IFormaDePagamento) {
        this.emissor = meioPagamento.emissor;
        this.moeda = meioPagamento.moeda;
    }

}

export interface IFormaDePagamento {
    emissor: string,
    moeda: string
}