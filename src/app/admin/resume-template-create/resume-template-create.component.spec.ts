import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplateCreateComponent } from './resume-template-create.component';

describe('ResumeTemplateCreateComponent', () => {
  let component: ResumeTemplateCreateComponent;
  let fixture: ComponentFixture<ResumeTemplateCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeTemplateCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeTemplateCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
