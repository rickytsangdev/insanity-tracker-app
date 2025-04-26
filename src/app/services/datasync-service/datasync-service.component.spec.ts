import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasyncServiceComponent } from './datasync-service.component';

describe('DatasyncServiceComponent', () => {
  let component: DatasyncServiceComponent;
  let fixture: ComponentFixture<DatasyncServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatasyncServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatasyncServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
