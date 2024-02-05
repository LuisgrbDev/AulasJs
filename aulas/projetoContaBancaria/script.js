class Cliente{
    constructor(nome, cpf){
        this.nome =nome;
        this.cpf = cpf;
    }
}

class ContaBancaria {
    constructor(cliente,numero,saldo){
        this.cliente = cliente;
        this.numero = numero;
        this.saldo = saldo;

    }
    sacar(valorSaque){
        return true
    }

    depositar(valorDepositar){
        return true
    }

    transferir(valorTransfer,cliente){
        return true
    }
    
}


class ContaCorrente extends ContaBancaria {
    constructor(cliente,numero,saldo,limiteCheque){
        super(cliente,numero,saldo);
        this.limiteCheque = limiteCheque;
    }

    sacar(valorSaque){
        super(valorSaque);
        return true;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(cliente,numero,saldo,taxaRendimento){
        super(cliente,numero,saldo);
        this.taxaRendimento = taxaRendimento;
    }
    
    aplicarRendimento(){

    }
}