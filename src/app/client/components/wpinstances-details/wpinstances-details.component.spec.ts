import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpinstancesDetailsComponent } from './wpinstances-details.component';

describe('WpinstancesDetailsComponent', () => {
  let component: WpinstancesDetailsComponent;
  let fixture: ComponentFixture<WpinstancesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WpinstancesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpinstancesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
