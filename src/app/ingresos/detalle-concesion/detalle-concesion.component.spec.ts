import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleConcesionComponent } from './detalle-concesion.component';

describe('DetalleConcesionComponent', () => {
  let component: DetalleConcesionComponent;
  let fixture: ComponentFixture<DetalleConcesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleConcesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleConcesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
