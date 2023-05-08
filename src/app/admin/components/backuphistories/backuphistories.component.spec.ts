import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackuphistoriesComponent } from './backuphistories.component';

describe('BackuphistoriesComponent', () => {
  let component: BackuphistoriesComponent;
  let fixture: ComponentFixture<BackuphistoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackuphistoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackuphistoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
