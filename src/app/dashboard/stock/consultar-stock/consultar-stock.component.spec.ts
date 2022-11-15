import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarStockComponent } from './consultar-stock.component';

describe('ConsultarStockComponent', () => {
  let component: ConsultarStockComponent;
  let fixture: ComponentFixture<ConsultarStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
