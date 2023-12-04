import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProdutoComponent } from './card-produto.component';

describe('CardProdutoComponent', () => {
  let component: CardProdutoComponent;
  let fixture: ComponentFixture<CardProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardProdutoComponent]
    });
    fixture = TestBed.createComponent(CardProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
