import { Component, Input } from '@angular/core';
import { SideCarrinhoService } from 'src/app/services/side-carrinho.service';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss'],
})
export class CardProdutoComponent {
  @Input() id: string = '';
  @Input() src: string = '';
  @Input() nome: string = '';
  @Input() preco: string = '';

  item = [
    {
    id: this.id,
    src: 'src',
    nome: this.nome,
    preco: '314',
    }
  ];

  constructor(private sideCarrinhoService: SideCarrinhoService) {}

  adicionarAoCarrinho() {
    this.sideCarrinhoService.adicionarAoCarrinho(this.item);
  }
}
