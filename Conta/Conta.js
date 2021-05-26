// Classe abstrata(não deve ser instancia)
export class Conta{
    constructor(saldoInicial, agencia, cliente){
        if(this.constructor == Conta){
           throw new Error("Você naõ deveria instanciar a classe 'Conta' diretamente!")
        }
        this._saldo = saldoInicial;
        this._agencia = agencia;
        this._cliente = cliente;

    }
    
    
    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    // Método abstrato
    sacar(valor){
        throw new Error("Esse método é abstrato!")
        
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        if(valor <=  0) return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}