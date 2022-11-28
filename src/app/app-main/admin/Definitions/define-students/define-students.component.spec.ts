import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineStudentsComponent } from './define-students.component';

describe('DefineStudentsComponent', () => {
  let component: DefineStudentsComponent;
  let fixture: ComponentFixture<DefineStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefineStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
