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
function cadastrarVeiculos(){
    //receber dados html
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const preco = parseInt(document.getElementById("preco").value);
    const cor = document.getElementById("cor").value;
    const autonomia = parseInt(document.getElementById("autonomia").value);
    const capacidadeTanque= parseFloat(document.getElementById("capacidadeTanque").value);
    const imagemUrl = document.getElementById("imagemUrl").value;
    
    //instanciar um novo objeto veiculo,passando os valores pedidos na class
    const veiculo = new Veiculo(marca,modelo,preco,cor,autonomia,capacidadeTanque,imagemUrl);
    
    //ad o veiculo a lista
    veiculos.push(veiculo)

    //reseta/limpa o formulario
    document.getElementById("veiculoForm").reset();

    
}

// veiculos.push(new Veiculo("Fiat","Uno",60000, 'branco', 16,90,'www.url.com.br'));
// veiculos.push(new Veiculo("Fiat","Toro",70000, 'branco', 16,90,'www.url.com.br'));
// veiculos.push(new Veiculo("chevrolet","cruze",60000, 'branco', 16,90,'www.url.com.br'));





