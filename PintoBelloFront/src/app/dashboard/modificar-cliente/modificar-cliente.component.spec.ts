import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarClienteComponent } from './modificar-cliente.component';

describe('ModificarClienteComponent', () => {
  let component: ModificarClienteComponent;
  let fixture: ComponentFixture<ModificarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
