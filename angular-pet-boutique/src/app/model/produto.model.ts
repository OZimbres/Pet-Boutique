export class Produto {
  //-----===| ATRIBUTOS |===-----//
  id: number = 0;
  foto: string = '';
  nome: string = '';
  descricao: string = '';
  preco: number = 0;
  quantidade: number = 0;

  //-----===| CONSTRUTOR |===-----//
  constructor(
    id: number,
    nome: string,
    foto: string,
    descricao: string,
    preco: number,
    quantidade: number
  ) {
    this.id = id;
    this.nome = nome;
    this.foto = foto;
    this.descricao = descricao;
    this.preco = preco;
    this.quantidade = quantidade;
  }
}
