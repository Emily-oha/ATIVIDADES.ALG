class Usuario {
  constructor(nome, nascimento){
    this.nome = nome;
    this.nascimento = nascimento;
    this.seguidores = [];
  }
  seguirUsuario(outro){
    if(!this.seguidores.includes(outro)) this.seguidores.push(outro);
  }
}

class Livro {
  constructor(titulo, autor){
    this.titulo = titulo;
    this.autor = autor;
  }
}

class RedeSocial {
  constructor(){
    this.usuarios = [];
    this.livros = [];
  }
  addUsuario(u){ this.usuarios.push(u); }
  addLivro(l){ this.livros.push(l); }
}
