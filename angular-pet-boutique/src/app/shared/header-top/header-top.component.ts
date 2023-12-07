import { Component } from '@angular/core';
import { SideCarrinhoService } from 'src/app/services/side-carrinho.service';
import { HomeComponent } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss'],
})
export class HeaderTopComponent {

  transform: string = 'translateX(calc(-84vw - 35vw))';

  mostrarElemento(): void {
    this.transform = 'translateX(calc(-84vw))';
  }

  esconderElemento(): void {
    this.transform = 'translateX(calc(-84vw - 35vw))';
  }
  
  itens: any[];

  constructor(private sideCarrinhoService: SideCarrinhoService) {
    this.itens = this.sideCarrinhoService.obterCarrinho();
  }
  removerDoCarrinho(item: any) {
    this.sideCarrinhoService.removerDoCarrinho(item);
  }
}
