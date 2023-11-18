import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPipelineComponent } from './task-pipeline.component';

describe('TaskPipelineComponent', () => {
  let component: TaskPipelineComponent;
  let fixture: ComponentFixture<TaskPipelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskPipelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
