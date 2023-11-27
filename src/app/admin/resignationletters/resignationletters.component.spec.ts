import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResignationlettersComponent } from './resignationletters.component';

describe('ResignationlettersComponent', () => {
  let component: ResignationlettersComponent;
  let fixture: ComponentFixture<ResignationlettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResignationlettersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResignationlettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
