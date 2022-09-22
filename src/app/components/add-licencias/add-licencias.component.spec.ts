import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLicenciasComponent } from './add-licencias.component';

describe('AddLicenciasComponent', () => {
  let component: AddLicenciasComponent;
  let fixture: ComponentFixture<AddLicenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLicenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLicenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
