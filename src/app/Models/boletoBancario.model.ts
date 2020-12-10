import { FormaDePagamento } from './formaPagamento.modulo';

export class BoletoBancario extends FormaDePagamento {

    codigo_barras: string;
    vencimento: Date;

    constructor(boleto: IBoletoBancario) {
        super({
            emissor: boleto.emissor,
            moeda: boleto.moeda
        });

        this.codigo_barras = boleto.codigo_barras;
        this.vencimento = boleto.vencimento;
    }
}

export interface IBoletoBancario {
    emissor: string;
    moeda: string
    codigo_barras: string;
    vencimento: Date;
}