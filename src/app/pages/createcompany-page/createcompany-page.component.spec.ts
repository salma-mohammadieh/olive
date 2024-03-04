import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecompanyPageComponent } from './createcompany-page.component';

describe('CreatecompanyPageComponent', () => {
  let component: CreatecompanyPageComponent;
  let fixture: ComponentFixture<CreatecompanyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatecompanyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatecompanyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
