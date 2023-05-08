import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsagehistoriesComponent } from './usagehistories.component';

describe('UsagehistoriesComponent', () => {
  let component: UsagehistoriesComponent;
  let fixture: ComponentFixture<UsagehistoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsagehistoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsagehistoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
