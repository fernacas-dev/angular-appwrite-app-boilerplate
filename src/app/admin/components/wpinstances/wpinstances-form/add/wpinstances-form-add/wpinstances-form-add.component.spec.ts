import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpinstancesFormAddComponent } from './wpinstances-form-add.component';

describe('WpinstancesFormAddComponent', () => {
  let component: WpinstancesFormAddComponent;
  let fixture: ComponentFixture<WpinstancesFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WpinstancesFormAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpinstancesFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
