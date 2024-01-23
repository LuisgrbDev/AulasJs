class MaterialBibliografico{
    constructor(titulo,autor){
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;
    }
    realizarEmprestimo(){
        if(this.disponivel){
            this.disponivel = false;
            return true; //emprestimo realizado com sucesso
        } else {
            return false; // material já emprestado
        }
    }

    realizarDevolucao(){
        if(!this.disponivel){//if(this.disponivel == false)
            this.disponivel = true;
            return true; // devolvido com sucesso
        } else {
            return false; //livro já foi devolvido
        }
    }
}

class Livro extends MaterialBibliografico{
    constructor(titulo, autor,genero){
        super(titulo, autor);
        this.genero = genero;
        
    }
}

class Revista extends MaterialBibliografico{
    constructor(titulo, autor, categoria){
        super(titulo,autor);
        this.categoria = categoria;
    }
    
}