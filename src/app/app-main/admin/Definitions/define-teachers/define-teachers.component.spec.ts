import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineTeachersComponent } from './define-teachers.component';

describe('DefineTeachersComponent', () => {
  let component: DefineTeachersComponent;
  let fixture: ComponentFixture<DefineTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefineTeachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
