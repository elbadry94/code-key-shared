import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultiesProgramsComponent } from './faculties-programs.component';

describe('FacultiesProgramsComponent', () => {
  let component: FacultiesProgramsComponent;
  let fixture: ComponentFixture<FacultiesProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultiesProgramsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultiesProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
