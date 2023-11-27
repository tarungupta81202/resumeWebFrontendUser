import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverlettersComponent } from './coverletters.component';

describe('CoverlettersComponent', () => {
  let component: CoverlettersComponent;
  let fixture: ComponentFixture<CoverlettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverlettersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverlettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
