import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstancedbconfigComponent } from './instancedbconfig.component';

describe('InstancedbconfigComponent', () => {
  let component: InstancedbconfigComponent;
  let fixture: ComponentFixture<InstancedbconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstancedbconfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstancedbconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
