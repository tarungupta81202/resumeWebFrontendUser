import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplateListComponent } from './resume-template-list.component';

describe('ResumeTemplateListComponent', () => {
  let component: ResumeTemplateListComponent;
  let fixture: ComponentFixture<ResumeTemplateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeTemplateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeTemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
