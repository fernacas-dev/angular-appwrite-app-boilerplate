import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstancedbconfigFormEditComponent } from './instancedbconfig-form-edit.component';

describe('InstancedbconfigFormEditComponent', () => {
  let component: InstancedbconfigFormEditComponent;
  let fixture: ComponentFixture<InstancedbconfigFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstancedbconfigFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstancedbconfigFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
