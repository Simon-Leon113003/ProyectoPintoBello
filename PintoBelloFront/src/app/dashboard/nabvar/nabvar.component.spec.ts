import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabvarComponent } from './nabvar.component';

describe('NabvarComponent', () => {
  let component: NabvarComponent;
  let fixture: ComponentFixture<NabvarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NabvarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NabvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
