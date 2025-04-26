import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupabaseServiceComponent } from './supabase-service.component';

describe('SupabaseServiceComponent', () => {
  let component: SupabaseServiceComponent;
  let fixture: ComponentFixture<SupabaseServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupabaseServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupabaseServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
