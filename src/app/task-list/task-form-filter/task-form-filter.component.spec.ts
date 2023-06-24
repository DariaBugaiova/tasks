import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFormFilterComponent } from './task-form-filter.component';

describe('TaskFormFilterComponent', () => {
  let component: TaskFormFilterComponent;
  let fixture: ComponentFixture<TaskFormFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskFormFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskFormFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
