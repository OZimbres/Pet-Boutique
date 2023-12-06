import { Component, Input } from '@angular/core';

const carouselConteudo = document.querySelector("conteudo");

@Component({
  selector: 'app-items-carousel',
  templateUrl: './items-carousel.component.html',
  styleUrls: ['./items-carousel.component.scss']
})
export class ItemsCarouselComponent {
  @Input() text: string = '';
}
