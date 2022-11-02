import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductoComponent } from './list-producto.component';

describe('ListProductoComponent', () => {
  let component: ListProductoComponent;
  let fixture: ComponentFixture<ListProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
