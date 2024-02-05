class Conta {
    constructor(numero, saldo = 0){
        this.numero = numero;
        this.saldo = saldo;
    }

    Sacar(valor){

        if(this.saldo >= valor && valor > 0){
            this.saldo - valor;
            return true; //Saque realizado com sucesso
        } else {
            return false; // saldo Insuficiente ou Valor Inválido
        }
    }

    depositar(valor){
        if(valor > 0){
            valor + this.saldo;
            return true; //Deposito realizado com sucesso 
        } else{
            return false; //Valor Incorreto 
        }
    }
    toString(){
        return `Numero: ${this.numero} - Saldo: ${this.saldo}`
    }
}



class ContaCorrente extends Conta{
    constructor(numero,saldo,limiteChequeEspecial = 200){
        super(numero, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial
    }

    sacar(valor){

        let limiteSaque = this.saldo + this.limiteChequeEspecial;       
          if(valor > 0 && limiteSaque >= valor){
               this.saldo -= valor;
                  return true // Saque realizado com sucesso
              } else{
                    return false // Saldo insuficiente ou valor inválido
              }
    }
}


class ContaPoupanca extends Conta{
    constructor(numero,saldo,taxaRendimento = 0.02){
        super(numero,saldo);
        this.taxaRendimento = taxaRendimento;

    }

    aplicarRendimento(valor){
        this.saldo += this.saldo * this.taxaRendimento

    }
}

let contaCorr = new ContaCorrente(1122,100);
let contaPoup= new ContaPoupanca(1129,100);

console.log(contaCorr.toString());
console.log(contaPoup.toString());

console.log("Apliquei rendimento a conta poupança");

  contaPoup.aplicarRendimento()

  console.log(contaCorr.toString());
  console.log(contaPoup.toString());

  