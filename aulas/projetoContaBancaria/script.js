class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}

class ContaBancaria {
    constructor(cliente, numero, saldo) {
        this.cliente = cliente;
        this.numero = numero;
        this.saldo = saldo;

    }
    sacar(valorSaque) {
        if (this.saldo >= valorSaque && valorSaque > 0) {
            this.saldo -= valorSaque
            return true
        }

    }

    depositar(valorDepositar) {
        if (valorDepositar > 0) {
            this.saldo += valorDepositar
            return true
        }
        return false



    }

    transferir(valorTransfer, contaDestino) {

        if (this.sacar(valorTransfer)) {
            contaDestino.depositar(valorTransfer)
            return true;
        }
        return false

    }

}


class ContaCorrente extends ContaBancaria {
    constructor(cliente, numero, saldo, limiteCheque) {
        super(cliente, numero, saldo);
        this.limiteCheque = limiteCheque;
    }

    sacar(valorSaque) {

        const limiteEspecial = this.saldo + this.limiteCheque;

        if(valorSaque <= limiteEspecial){
        return  super.sacar(valorSaque);
    }
     return false
    }   
}

class ContaPoupanca extends ContaBancaria {
    constructor(cliente, numero, saldo, taxaRendimento) {
        super(cliente, numero, saldo);
        this.taxaRendimento = taxaRendimento;
    }

    aplicarRendimento() {

    }
}


let contas = [];
let clientes = [];

function cadastrarCliente(){
    // pegar dados de tela;
    const nome = document.getElementById("nomeCliente").value;
    const cpf = document.getElementById("cpfCliente").value;
    //instanciar novo cliente;
    const cliente  =  new Cliente(nome, cpf);
    //add o cliente a lista de clientes;
    clientes.push(cliente);
} 


