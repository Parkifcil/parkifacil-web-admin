import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordUserEditComponent } from './password-user-edit.component';

describe('PasswordUserEditComponent', () => {
  let component: PasswordUserEditComponent;
  let fixture: ComponentFixture<PasswordUserEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordUserEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
