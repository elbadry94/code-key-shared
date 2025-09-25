import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineUpcomingConferenceComponent } from './medicine-upcoming-conference.component';

describe('MedicineUpcomingConferenceComponent', () => {
  let component: MedicineUpcomingConferenceComponent;
  let fixture: ComponentFixture<MedicineUpcomingConferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicineUpcomingConferenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineUpcomingConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
