/* 
Parte 1 
    - Crie uma classe Veiculo
    - Add as propriedades: Marca, modelo, preco, cor, autonomia, capacidadeTanque, imagemURL
    - Add um metodo calcularDistanciaMaxima, que retornara a autonomia * capacidadeTanque
*/


class Veiculo{
    constructor(marca, modelo,preco, cor, autonomia, capacidadeTanque,imagemURL){
        this.marca = marca
        this.modelo = modelo;
        this.preco = preco
        this.cor = cor;
        this.autonomia = autonomia;
        this.capacidadeTanque = capacidadeTanque;
        this.imagemURL = imagemURL;
    }
    calcularDistanciaMaxima(){
        return this.autonomia*this.capacidadeTanque
    }

    exibirDetalhe(){
        return `${this.marca} - ${this.modelo} - ${this.cor} - R$:${this.preco.toFixed(2)}`;
    }
}

let veiculos = [];

veiculos.push(new Veiculo("Fiat","Uno",60000, 'branco', 16,90,'www.url.com.br'));
veiculos.push(new Veiculo("Fiat","Toro",70000, 'branco', 16,90,'www.url.com.br'));
veiculos.push(new Veiculo("chevrolet","cruze",60000, 'branco', 16,90,'www.url.com.br'));

console.log(veiculos)



