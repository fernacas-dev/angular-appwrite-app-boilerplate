import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpinstancesListComponent } from './wpinstances-list.component';

describe('WpinstancesListComponent', () => {
  let component: WpinstancesListComponent;
  let fixture: ComponentFixture<WpinstancesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WpinstancesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpinstancesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
