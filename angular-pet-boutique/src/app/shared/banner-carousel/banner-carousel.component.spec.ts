import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCarouselComponent } from './banner-carousel.component';

describe('BannerCarouselComponent', () => {
  let component: BannerCarouselComponent;
  let fixture: ComponentFixture<BannerCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerCarouselComponent]
    });
    fixture = TestBed.createComponent(BannerCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
