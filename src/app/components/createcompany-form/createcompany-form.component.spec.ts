import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecompanyFormComponent } from './createcompany-form.component';

describe('CreatecompanyFormComponent', () => {
  let component: CreatecompanyFormComponent;
  let fixture: ComponentFixture<CreatecompanyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatecompanyFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatecompanyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
