class Musica {
  constructor(titulo, artista, duracao, arquivo){
    this.titulo = titulo;
    this.artista = artista;
    this.duracao = duracao;
    this.arquivo = arquivo;
  }
  reproduzir(){ console.log(`Tocando: ${this.titulo}`); }
  pausar(){ console.log(`Pausado: ${this.titulo}`); }
}

class Artista {
  constructor(nome, foto){
    this.nome = nome;
    this.foto = foto;
    this.musicas = [];
  }
  listaDeMusicas(){ return this.musicas; }
  adicionarMusica(m){ this.musicas.push(m); }
  removerMusica(m){ this.musicas = this.musicas.filter(x=>x!==m); }
}

class Playlist {
  constructor(nome){
    this.nome = nome;
    this.musicas = [];
    this.atual = 0;
  }
  adicionarMusica(m){ this.musicas.push(m); }
  removerMusica(m){ this.musicas = this.musicas.filter(x=>x!==m); }
  reproduzir(){ this.musicas[this.atual].reproduzir(); }
  avancarMusica(){
    if(this.atual < this.musicas.length - 1) this.atual++;
  }
  voltarMusica(){
    if(this.atual > 0) this.atual--;
  }
}