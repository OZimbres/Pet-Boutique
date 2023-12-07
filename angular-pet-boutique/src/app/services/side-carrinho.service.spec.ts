import { TestBed } from '@angular/core/testing';

import { SideCarrinhoService } from './side-carrinho.service';

describe('SideCarrinhoService', () => {
  let service: SideCarrinhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideCarrinhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
