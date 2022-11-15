import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorFacturaComponent } from './buscador-factura.component';

describe('BuscadorFacturaComponent', () => {
  let component: BuscadorFacturaComponent;
  let fixture: ComponentFixture<BuscadorFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorFacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
