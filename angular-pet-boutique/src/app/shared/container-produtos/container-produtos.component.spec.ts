import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerProdutosComponent } from './container-produtos.component';

describe('ContainerProdutosComponent', () => {
  let component: ContainerProdutosComponent;
  let fixture: ComponentFixture<ContainerProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerProdutosComponent]
    });
    fixture = TestBed.createComponent(ContainerProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
