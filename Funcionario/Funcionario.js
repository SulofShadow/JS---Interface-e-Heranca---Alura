export class Funcionario{
    constructor(nome, salario, cpf){
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;
        
        this._bonificacao = 1;
        this._senha;
    }

    autenticar(senha){
        // Ele verifica se a senha que você passou é igual a senha que o funcionário tem e retorna um valor booleano
        return senha == this._senha;
    }

    cadastrarSenha(senha){
        this._senha = senha; 
    }
}