import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplateEditComponent } from './resume-template-edit.component';

describe('ResumeTemplateEditComponent', () => {
  let component: ResumeTemplateEditComponent;
  let fixture: ComponentFixture<ResumeTemplateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeTemplateEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeTemplateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
