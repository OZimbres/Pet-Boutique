import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTopComponent } from './header-top.component';

describe('HeaderTopComponent', () => {
  let component: HeaderTopComponent;
  let fixture: ComponentFixture<HeaderTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderTopComponent]
    });
    fixture = TestBed.createComponent(HeaderTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
