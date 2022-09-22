import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordContactsEditComponent } from './password-contacts-edit.component';

describe('PasswordContactsEditComponent', () => {
  let component: PasswordContactsEditComponent;
  let fixture: ComponentFixture<PasswordContactsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordContactsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordContactsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
