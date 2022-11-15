import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaEmpleadoComponent } from './alta-empleado.component';

describe('AltaEmpleadoComponent', () => {
  let component: AltaEmpleadoComponent;
  let fixture: ComponentFixture<AltaEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
