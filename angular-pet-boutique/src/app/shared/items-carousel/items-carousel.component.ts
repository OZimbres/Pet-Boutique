import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items-carousel',
  templateUrl: './items-carousel.component.html',
  styleUrls: ['./items-carousel.component.scss'],
})
export class ItemsCarouselComponent {
  @Input() text: string = '';
  translateX: string = '0%';
  currentIndex: number = 0;
  cardWidth: number = 16.6; // Ajuste conforme necessário, dependendo do tamanho do card

  nextSlide() {
    if (this.currentIndex < this.numberOfSlides() - 1) {
      this.currentIndex++;
      this.updateTranslateX();
    }
    else{}
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateTranslateX();
    }
    else{}
  }

  updateTranslateX() {
    this.translateX = `-${this.currentIndex * this.cardWidth}%`;
  }

  numberOfSlides() {
    return 4; // 4 por que é a quatidade para chegar no final
  }
}
