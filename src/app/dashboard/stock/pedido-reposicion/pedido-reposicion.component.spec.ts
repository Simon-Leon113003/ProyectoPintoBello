import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoReposicionComponent } from './pedido-reposicion.component';

describe('PedidoReposicionComponent', () => {
  let component: PedidoReposicionComponent;
  let fixture: ComponentFixture<PedidoReposicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoReposicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoReposicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
