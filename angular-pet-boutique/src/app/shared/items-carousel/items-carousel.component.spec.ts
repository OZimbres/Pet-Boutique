import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsCarouselComponent } from './items-carousel.component';

describe('ItemsCarouselComponent', () => {
  let component: ItemsCarouselComponent;
  let fixture: ComponentFixture<ItemsCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsCarouselComponent]
    });
    fixture = TestBed.createComponent(ItemsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
