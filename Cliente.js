export class Cliente{
    // Usamos apenas o 'get' para não podermos atrivbui-lá fora da classe
    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }

    autenticar(){
        return true;
    }
}