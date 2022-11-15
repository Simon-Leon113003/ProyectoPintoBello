import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarriosComponent } from './barrios.component';

describe('BarriosComponent', () => {
  let component: BarriosComponent;
  let fixture: ComponentFixture<BarriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarriosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
