import { Injectable } from '@angular/core';
import { produtoService } from './produto.service';
import { Produto } from '../model/produto.model';

@Injectable({
  providedIn: 'root',
})
export class SideCarrinhoService {
  constructor(private _produtoService: produtoService) {}

  itens: any[] = [];

  public produto: Produto[] = [];

  adicionarAoCarrinho(id: number) {
    this._produtoService.getProduto(id).subscribe((retornaProduto) => {
      this.produto = retornaProduto.map((produto) => {
        return new Produto(
          produto.id,
          produto.nome,
          produto.foto,
          produto.descricao,
          produto.preco,
          produto.quantidade
        );
      });
    });
    this.itens.push(this.produto);
  }

  obterCarrinho() {
    return this.itens;
  }

  removerDoCarrinho(item: any) {
    const index = this.itens.indexOf(item);
    if (index !== -1) {
      this.itens.splice(index, 1);
    }
  }
}
