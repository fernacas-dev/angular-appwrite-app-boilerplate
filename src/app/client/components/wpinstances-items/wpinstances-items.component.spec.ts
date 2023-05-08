import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpinstancesItemsComponent } from './wpinstances-items.component';

describe('WpinstancesItemsComponent', () => {
  let component: WpinstancesItemsComponent;
  let fixture: ComponentFixture<WpinstancesItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WpinstancesItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpinstancesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
