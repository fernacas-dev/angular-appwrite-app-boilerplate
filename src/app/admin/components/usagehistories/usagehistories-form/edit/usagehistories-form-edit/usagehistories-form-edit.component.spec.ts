import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsagehistoriesFormEditComponent } from './usagehistories-form-edit.component';

describe('UsagehistoriesFormEditComponent', () => {
  let component: UsagehistoriesFormEditComponent;
  let fixture: ComponentFixture<UsagehistoriesFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsagehistoriesFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsagehistoriesFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
