import { Endereco } from './endereco.modulo';

export class Cliente {
    nome: string;
    cpf: string;
    email: string;
    endereco?: Endereco;

    constructor(cliente: ICliente){
        this.nome = cliente.nome;
        this.cpf = cliente.cpf
        this.email = cliente.email
        this.endereco = cliente.endereco;
    }
}

export interface ICliente{
    nome: string,
    cpf: string,
    email: string,
    endereco?: Endereco,
}
