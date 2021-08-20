import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldetailcourseComponent } from './modaldetailcourse.component';

describe('ModaldetailcourseComponent', () => {
  let component: ModaldetailcourseComponent;
  let fixture: ComponentFixture<ModaldetailcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldetailcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaldetailcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
