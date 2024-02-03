/* 
Parte 1 
    - Crie uma classe Veiculo
    - Add as propriedades: Marca, modelo, preco, cor, autonomia, capacidadeTanque, imagemURL
    - Add um metodo calcularDistanciaMaxima, que retornara a autonomia * capacidadeTanque
*/


class Veiculo{
    constructor(marca, modelo, anoDeFabricacao, preco, cor, autonomia, capacidadeTanque,imagemURL){
        this.marca = marca
        this.modelo = modelo;
        this.anoDeFabricacao = anoDeFabricacao;
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
        if(this.ipva()){
        return `${this.marca} - ${this.modelo} - ${this.anoDeFabricacao} - ${this.cor} - R$:${this.preco.toFixed(2)} ISENTO DE IPVA /n`;
        }
    }

    ipva(){
        let ano = new Date;
        ano = ano.getFullYear();
        return ano - this.anoDeFabricacao >= 20;  
    }
    
}


let veiculos = [];
function cadastrarVeiculos(){
    //receber dados html
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const anoDeFabricacao =parseInt( document.getElementById("anoDeFabricacao").value);
    const preco = parseInt(document.getElementById("preco").value);
    const cor = document.getElementById("cor").value;
    const autonomia = parseInt(document.getElementById("autonomia").value);
    const capacidadeTanque= parseFloat(document.getElementById("capacidadeTanque").value);
    const imagemUrl = document.getElementById("imagemUrl").value;
    
    //instanciar um novo objeto veiculo,passando os valores pedidos na class
    const veiculo = new Veiculo(marca,modelo,anoDeFabricacao,preco,cor,autonomia,capacidadeTanque,imagemUrl);
   
    //ad o veiculo a lista
    veiculos.push(veiculo);

    //exibe o resultado no html
    exibirVeiculos();
    //reseta/limpa o formulario
    document.getElementById("veiculoForm").reset();

    
}


function exibirVeiculos(){

    const veiculoList = document.getElementById("veiculosList");

    //limpar lista antes de exibir veiculos
    veiculoList.innerHTML = "";

    for( let i = 0; i < veiculos.length ; i++){
        const veiculosItem = document.createElement("li");
        const veiculoCard = criarVeiculoCard(veiculos[i]);
        veiculoList.appendChild(veiculoCard)
        
        veiculoList.appendChild(veiculosItem);
    }

}

function criarVeiculoCard(veiculo){
    const veiculoCard = document.createElement("div");
    veiculoCard.className ="veiculo-card";

    const imagemVeiculo = document.createElement("img");
    imagemVeiculo.src= veiculo.imagemURL;

    imagemVeiculo.className = "veiculo-imagem"
    imagemVeiculo.alt = `${veiculo.marca} ${veiculo.modelo}`;
    veiculoCard.appendChild(imagemVeiculo);
    
    const detalheVeiculo = document.createElement("div");
    detalheVeiculo.textContent = veiculo.exibirDetalhe() + `Distancia Máxima: ${veiculo.calcularDistanciaMaxima()}km`;
    veiculoCard.appendChild(detalheVeiculo)
    return veiculoCard
}

// veiculos.push(new Veiculo("Fiat","Uno",60000, 'branco', 16,90,'www.url.com.br'));
// veiculos.push(new Veiculo("Fiat","Toro",70000, 'branco', 16,90,'www.url.com.br'));
// veiculos.push(new Veiculo("chevrolet","cruze",60000, 'branco', 16,90,'www.url.com.br'));





