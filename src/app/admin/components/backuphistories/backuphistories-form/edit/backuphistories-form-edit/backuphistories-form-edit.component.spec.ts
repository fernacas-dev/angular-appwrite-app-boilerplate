import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackuphistoriesFormEditComponent } from './backuphistories-form-edit.component';

describe('BackuphistoriesFormEditComponent', () => {
  let component: BackuphistoriesFormEditComponent;
  let fixture: ComponentFixture<BackuphistoriesFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackuphistoriesFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackuphistoriesFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
