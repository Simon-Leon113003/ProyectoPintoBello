import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorEmpleadoComponent } from './buscador-empleado.component';

describe('BuscadorEmpleadoComponent', () => {
  let component: BuscadorEmpleadoComponent;
  let fixture: ComponentFixture<BuscadorEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
