import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstancedbconfigFormAddComponent } from './instancedbconfig-form-add.component';

describe('InstancedbconfigFormAddComponent', () => {
  let component: InstancedbconfigFormAddComponent;
  let fixture: ComponentFixture<InstancedbconfigFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstancedbconfigFormAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstancedbconfigFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
