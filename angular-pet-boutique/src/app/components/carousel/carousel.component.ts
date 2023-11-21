import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: '../../assets/img/angular.jpg',
    };
    this.slides[1] = {
      src: '../../assets/img/react.jpg',
    }
    this.slides[2] = {
      src: '../../assets/img/vue.jpg',
    }
  }
}