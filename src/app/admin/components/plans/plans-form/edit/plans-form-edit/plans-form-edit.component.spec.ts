import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansFormEditComponent } from './plans-form-edit.component';

describe('PlansFormEditComponent', () => {
  let component: PlansFormEditComponent;
  let fixture: ComponentFixture<PlansFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
