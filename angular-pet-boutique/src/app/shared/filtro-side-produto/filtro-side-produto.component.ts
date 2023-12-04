import { Component } from '@angular/core';

@Component({
  selector: 'app-filtro-side-produto',
  templateUrl: './filtro-side-produto.component.html',
  styleUrls: ['./filtro-side-produto.component.css'],
})
export class FiltroSideProdutoComponent {
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000)+'';
    }

    return `${value}`;
  }
}
