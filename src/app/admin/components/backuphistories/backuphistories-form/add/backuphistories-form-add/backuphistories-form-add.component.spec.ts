import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackuphistoriesFormAddComponent } from './backuphistories-form-add.component';

describe('BackuphistoriesFormAddComponent', () => {
  let component: BackuphistoriesFormAddComponent;
  let fixture: ComponentFixture<BackuphistoriesFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackuphistoriesFormAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackuphistoriesFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
