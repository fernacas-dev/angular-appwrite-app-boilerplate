import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWpInstanceFormComponent } from './create-wp-instance-form.component';

describe('CreateWpInstanceFormComponent', () => {
  let component: CreateWpInstanceFormComponent;
  let fixture: ComponentFixture<CreateWpInstanceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWpInstanceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateWpInstanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
