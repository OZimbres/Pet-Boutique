import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroTopProdutoComponent } from './filtro-top-produto.component';

describe('FiltroTopProdutoComponent', () => {
  let component: FiltroTopProdutoComponent;
  let fixture: ComponentFixture<FiltroTopProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltroTopProdutoComponent]
    });
    fixture = TestBed.createComponent(FiltroTopProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
