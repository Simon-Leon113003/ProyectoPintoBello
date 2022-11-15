import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaEmpleadoComponent } from './categoria-empleado.component';

describe('CategoriaEmpleadoComponent', () => {
  let component: CategoriaEmpleadoComponent;
  let fixture: ComponentFixture<CategoriaEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
