class Livro {
  constructor(titulo, autor){
    this.titulo = titulo;
    this.autor = autor;
    this.emprestado = false;
  }
}

class Usuario {
  constructor(nome){
    this.nome = nome;
  }
}

class Biblioteca {
  constructor(){
    this.livros = [];
    this.emprestimos = [];
  }
  adicionarLivro(l){ this.livros.push(l); }
  emprestarLivro(livro, usuario){
    if(!livro.emprestado){
      livro.emprestado = true;
      this.emprestimos.push({ livro, usuario });
    }
  }
  devolverLivro(livro){
    livro.emprestado = false;
    this.emprestimos =
 this.emprestimos.filter(e=>e.livro!==livro);
  }
}

