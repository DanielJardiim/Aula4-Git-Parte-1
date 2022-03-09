function Livro(){
    var nome;
    var autor;
    var tema = [];

    this.setNome = setNome;
    this.setTema = setTema;
    this.setAutor = setAutor;
    this.showInfo = showInfo;

    function setNome(novoNome){
        nome = novoNome;
    }

    function setTema(novoTema){
        tema.push(novoTema);  //Insire no array um novo tema criado
    }

    function setAutor(novoAutor){
        autor = novoAutor;
    }

    function showInfo(){
        console.log('Nome',nome);
        console.log('Autor',autor);
        console.log('Temas',tema);
    }
}

var livro = new Livro();
livro.setNome('Harry Potter e a pedra filosofal');
livro.setAutor('J. K. Rowling');
livro.setTema('Fantasia');
livro.setTema('Ficção');

livro.showInfo();