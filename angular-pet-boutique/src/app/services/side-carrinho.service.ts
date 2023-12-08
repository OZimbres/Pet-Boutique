import { Injectable } from '@angular/core';
import { produtoService } from './produto.service';
import { Produto } from '../model/produto.model';

@Injectable({
  providedIn: 'root',
})
export class SideCarrinhoService {
  constructor(private _produtoService: produtoService) {}

  itens: any[] = [];

  public produto: Produto | undefined;

  adicionarAoCarrinho(id: number) {
    console.log(id);
    this._produtoService.getProduto(id).subscribe((retornaProduto) => {
      this.produto = new Produto(
        retornaProduto.id,
        retornaProduto.nome,
        retornaProduto.foto,
        retornaProduto.descricao,
        retornaProduto.preco,
        retornaProduto.quantidade
      );
    });
    console.log(this.produto);
    this.itens.push(this.produto);
    console.log(this.itens);
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
