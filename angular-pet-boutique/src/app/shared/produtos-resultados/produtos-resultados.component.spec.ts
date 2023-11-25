import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosResultadosComponent } from './produtos-resultados.component';

describe('ProdutosResultadosComponent', () => {
  let component: ProdutosResultadosComponent;
  let fixture: ComponentFixture<ProdutosResultadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosResultadosComponent]
    });
    fixture = TestBed.createComponent(ProdutosResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
