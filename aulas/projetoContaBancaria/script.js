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

    toString(){
        return `Numero: ${this.numero} - Saldo: ${this.saldo} - Cliente: ${this.cliente.nome}`
    }

}


class ContaCorrente extends ContaBancaria {
    constructor(cliente, numero, saldo, limiteCheque) {
        super(cliente, numero, saldo);
        this.limiteCheque = limiteCheque;
    }

    sacar(valorSaque) {

        const limiteEspecial = this.saldo + this.limiteCheque;

        if (valorSaque <= limiteEspecial) {
            return super.sacar(valorSaque);
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

function cadastrarCliente() {
    // pegar dados de tela;
    const nome = document.getElementById("nomeCliente").value;
    const cpf = document.getElementById("cpfCliente").value;
    //instanciar novo cliente;
    let cliente = new Cliente(nome, cpf);

    //add o cliente a lista de clientes;
    clientes.push(cliente);

    atualizarSeletorClientes();
    exibirClientes();
}

function exibirClientes() {
    const clientesList = document.getElementById("clienteList");
    // Limpar a lista antes de exibir os clientes
    clientesList.innerHTML = "";

    for (let i = 0; i < clientes.length; i++) {
        const clienteItem = document.createElement("li");
        clienteItem.textContent = `Nome: ${clientes[i].nome} - CPF: ${clientes[i].cpf}`;
        clientesList.appendChild(clienteItem);
    }
}

function atualizarSeletorClientes() {
    const seletorClientes = document.getElementById("cliente");

    seletorClientes.innerHTML = "";

    clientes.forEach(cliente => {
        const option = document.createElement("option");
        option.value = cliente.cpf;
        option.textContent = cliente.nome;
        seletorClientes.appendChild(option);
    })
}

function cadastrarConta() {

    //pegar os dados da tela 
    const numero = parseInt(document.getElementById("numero").value);
    const saldo = parseFloat(document.getElementById("saldo").value);
    const tipoConta = document.getElementById("tipoConta").value;
    //identificar o cliente selecionado na lista de clientes
    const clienteSelecionado = document.getElementById("cliente").value;
    const cliente = clientes.find(c => c.cpf === clienteSelecionado);
    //instanciar uma nova conta,a partir do tipo de conta selecionada


    let conta;
    switch (tipoConta) {
        case "ContaCorrente":
            conta = new ContaCorrente(cliente, numero, saldo, 100);
            break;
        case "ContaPoupanca":
            conta = new ContaPoupanca(cliente, numero, saldo, 0.01);
            break;
        default:
            alert("Tipo selecionado invalido");
            break;
    }
    contas.push(conta)
}

function exibirContas() {
    const contasList = document.getElementById("contaList");
    // Limpar a lista antes de exibir as contas
    contasList.innerHTML = "";

    for (let i = 0; i < contas.length; i++) {
        const contaItem = document.createElement("li");
        const contaCard = criarContaCard(contas[i]);
        contasList.appendChild(contaCard);
        contasList.appendChild(contaItem);
    }
}

function criarContaCard(conta) {
    const contaCard = document.createElement("div");
    contaCard.className = "conta-card";

    const detalhesConta = document.createElement("div");
    detalhesConta.textContent = conta.toString();
    contaCard.appendChild(detalhesConta);

    return contaCard;
}