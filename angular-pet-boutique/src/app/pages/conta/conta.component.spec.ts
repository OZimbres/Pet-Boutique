import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaComponent } from './conta.component';

describe('ContaComponent', () => {
  let component: ContaComponent;
  let fixture: ComponentFixture<ContaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContaComponent]
    });
    fixture = TestBed.createComponent(ContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
