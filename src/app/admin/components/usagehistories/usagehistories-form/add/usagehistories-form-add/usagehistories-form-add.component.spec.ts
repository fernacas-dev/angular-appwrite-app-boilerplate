import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsagehistoriesFormAddComponent } from './usagehistories-form-add.component';

describe('UsagehistoriesFormAddComponent', () => {
  let component: UsagehistoriesFormAddComponent;
  let fixture: ComponentFixture<UsagehistoriesFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsagehistoriesFormAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsagehistoriesFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
