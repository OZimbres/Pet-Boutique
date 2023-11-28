import { Component, Input } from '@angular/core';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss'],
})
export class BannerCarouselComponent {
  //@Input() - Sinaliza pro angular que é uma propriedade de entrada, esses valores vão ser recebidos e injetados nesse componente
  @Input() src1: string = '';
  @Input() alt1: string = '';

  @Input() src2: string = '';
  @Input() alt2: string = '';

  @Input() src3: string = '';
  @Input() alt3: string = '';
}
