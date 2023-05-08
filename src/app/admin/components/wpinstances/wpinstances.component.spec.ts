import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpinstancesComponent } from './wpinstances.component';

describe('WpinstancesComponent', () => {
  let component: WpinstancesComponent;
  let fixture: ComponentFixture<WpinstancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WpinstancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpinstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
