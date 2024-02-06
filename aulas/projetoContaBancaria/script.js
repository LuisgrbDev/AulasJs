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



// let clienteA = new Cliente("Fulano", "1234567890");
// clientes.push(clienteA);
// let clienteB = new Cliente("Beltrano", "0987654321");
// clientes.push(clienteB);

// let contaX = new ContaCorrente(clienteA, 123, 200, 150);
// contas.push(contaX);
// let contaY = new ContaPoupanca(clienteB, 111, 0, 0.01);
// contas.push(contaY);
// let contaZ = new ContaCorrente(clienteB, 235, 0, 180);
// contas.push(contaZ);

// console.log("antes de sacar: ", contaX.saldo) // antes de sacar

// contaX.sacar(200)

// console.log("depois de sacar: ", contaX.saldo)

// console.log(contas);
// console.log(clientes);

// console.log(contaY.cliente.nome);