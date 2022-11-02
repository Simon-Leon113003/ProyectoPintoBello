import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPedidoComponent } from './list-pedido.component';

describe('ListPedidoComponent', () => {
  let component: ListPedidoComponent;
  let fixture: ComponentFixture<ListPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
