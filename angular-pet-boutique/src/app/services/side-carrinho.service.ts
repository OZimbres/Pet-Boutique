import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SideCarrinhoService {
  constructor() {}

  itens: any[] = [];

  adicionarAoCarrinho(item: any) {
    this.itens.push(item);
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
