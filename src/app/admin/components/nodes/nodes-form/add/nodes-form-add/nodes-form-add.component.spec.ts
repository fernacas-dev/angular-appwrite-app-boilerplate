import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesFormAddComponent } from './nodes-form-add.component';

describe('NodesFormAddComponent', () => {
  let component: NodesFormAddComponent;
  let fixture: ComponentFixture<NodesFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodesFormAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodesFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
