import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosFiltrosComponent } from './produtos-filtros.component';

describe('ProdutosFiltrosComponent', () => {
  let component: ProdutosFiltrosComponent;
  let fixture: ComponentFixture<ProdutosFiltrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosFiltrosComponent]
    });
    fixture = TestBed.createComponent(ProdutosFiltrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
