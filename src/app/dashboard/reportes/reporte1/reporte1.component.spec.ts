import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reporte1Component } from './reporte1.component';

describe('Reporte1Component', () => {
  let component: Reporte1Component;
  let fixture: ComponentFixture<Reporte1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reporte1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reporte1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
