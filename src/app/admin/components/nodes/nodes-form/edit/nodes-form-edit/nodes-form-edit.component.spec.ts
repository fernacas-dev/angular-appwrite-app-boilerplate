import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesFormEditComponent } from './nodes-form-edit.component';

describe('NodesFormEditComponent', () => {
  let component: NodesFormEditComponent;
  let fixture: ComponentFixture<NodesFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodesFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodesFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
