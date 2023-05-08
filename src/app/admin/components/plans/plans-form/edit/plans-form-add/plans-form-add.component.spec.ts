import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansFormAddComponent } from './plans-form-add.component';

describe('PlansFormAddComponent', () => {
  let component: PlansFormAddComponent;
  let fixture: ComponentFixture<PlansFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansFormAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
