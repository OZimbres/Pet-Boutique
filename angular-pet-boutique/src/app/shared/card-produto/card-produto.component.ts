import { Component, Input } from '@angular/core';
import { SideCarrinhoService } from 'src/app/services/side-carrinho.service';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss'],
})
export class CardProdutoComponent {
  @Input() id: number = 1;
  @Input() foto: string = '';
  @Input() nome: string = '';
  @Input() descricao: string = '';
  @Input() preco: number = 0;
  @Input() quantidade: number = 0;

  item = {
    id: this.id,
    foto: this.foto,
    nome: this.nome,
    descricao: this.descricao,
    preco: this.preco,
    quantidade: this.quantidade
  };

  constructor(private sideCarrinhoService: SideCarrinhoService) {}

  adicionarAoCarrinho() {
    console.log(this.item.id)
    this.sideCarrinhoService.adicionarAoCarrinho(this.item.id);
  }
}
