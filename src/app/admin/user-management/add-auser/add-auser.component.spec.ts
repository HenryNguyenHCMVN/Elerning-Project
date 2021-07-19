import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAUserComponent } from './add-auser.component';

describe('AddAUserComponent', () => {
  let component: AddAUserComponent;
  let fixture: ComponentFixture<AddAUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
