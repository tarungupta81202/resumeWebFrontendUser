import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyJobsComponent } from './nearby-jobs.component';

describe('NearbyJobsComponent', () => {
  let component: NearbyJobsComponent;
  let fixture: ComponentFixture<NearbyJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearbyJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbyJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
