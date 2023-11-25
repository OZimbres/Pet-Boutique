import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosCabecalhoComponent } from './produtos-cabecalho.component';

describe('ProdutosCabecalhoComponent', () => {
  let component: ProdutosCabecalhoComponent;
  let fixture: ComponentFixture<ProdutosCabecalhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosCabecalhoComponent]
    });
    fixture = TestBed.createComponent(ProdutosCabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
