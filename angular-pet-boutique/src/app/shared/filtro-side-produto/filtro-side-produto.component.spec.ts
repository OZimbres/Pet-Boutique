import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroSideProdutoComponent } from './filtro-side-produto.component';

describe('FiltroSideProdutoComponent', () => {
  let component: FiltroSideProdutoComponent;
  let fixture: ComponentFixture<FiltroSideProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltroSideProdutoComponent]
    });
    fixture = TestBed.createComponent(FiltroSideProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
