import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogementsHomepageComponent } from './logements-homepage.component';

describe('LogementsHomepageComponent', () => {
  let component: LogementsHomepageComponent;
  let fixture: ComponentFixture<LogementsHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogementsHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogementsHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
