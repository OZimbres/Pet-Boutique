import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  lancamentos = [
    { src: './assets/youtube.png', alt: 'Produto' },
    { src: './assets/youtube.png', alt: 'Produto' },
    { src: './assets/youtube.png', alt: 'Produto' },
    { src: './assets/youtube.png', alt: 'Produto' },
    { src: './assets/youtube.png', alt: 'Produto' },
    { src: './assets/youtube.png', alt: 'Produto' },
    { src: './assets/youtube.png', alt: 'Produto' },
    { src: './assets/youtube.png', alt: 'Produto' },
    { src: './assets/youtube.png', alt: 'Produto' },
  ];
  promocoes = [
    { src: './assets/youtube.png', alt: 'Produto' },
    { src: './assets/youtube.png', alt: 'Produto' },
    { src: './assets/youtube.png', alt: 'Produto' },
    { src: './assets/youtube.png', alt: 'Produto' },
    { src: './assets/youtube.png', alt: 'Produto' },
    { src: './assets/youtube.png', alt: 'Produto' },
    { src: './assets/youtube.png', alt: 'Produto' },
    { src: './assets/youtube.png', alt: 'Produto' },
    { src: './assets/youtube.png', alt: 'Produto' },
  ];
  maisVendidos = [
    { src: './assets/youtube.png', alt: 'Produto' },
    { src: './assets/youtube.png', alt: 'Produto' },
    { src: './assets/youtube.png', alt: 'Produto' },
    { src: './assets/youtube.png', alt: 'Produto' },
    { src: './assets/youtube.png', alt: 'Produto' },
    { src: './assets/youtube.png', alt: 'Produto' },
    { src: './assets/youtube.png', alt: 'Produto' },
    { src: './assets/youtube.png', alt: 'Produto' },
    { src: './assets/youtube.png', alt: 'Produto' },
  ];
}
