import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpinstancesFormEditComponent } from './wpinstances-form-edit.component';

describe('WpinstancesFormEditComponent', () => {
  let component: WpinstancesFormEditComponent;
  let fixture: ComponentFixture<WpinstancesFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WpinstancesFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpinstancesFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
