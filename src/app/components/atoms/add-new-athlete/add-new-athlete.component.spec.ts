import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAthleteComponent } from './add-new-athlete.component';

describe('AddNewAthleteComponent', () => {
  let component: AddNewAthleteComponent;
  let fixture: ComponentFixture<AddNewAthleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewAthleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewAthleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
