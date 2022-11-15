import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaVentaComponent } from './alta-venta.component';

describe('AltaVentaComponent', () => {
  let component: AltaVentaComponent;
  let fixture: ComponentFixture<AltaVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
