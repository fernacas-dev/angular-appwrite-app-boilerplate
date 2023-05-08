import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackupHistoriesService } from 'src/app/admin/services/backuphistories.service';
import { EditFormComponent } from 'src/app/shared/components/edit-form/edit-form.component';

@Component({
  selector: 'app-backuphistories-form-edit',
  templateUrl: './backuphistories-form-edit.component.html',
  styleUrls: ['./backuphistories-form-edit.component.css']
})
export class BackuphistoriesFormEditComponent extends EditFormComponent{

  @Input() formTitle: string = '';

  constructor(formBuilder: FormBuilder, backupHistoriesService: BackupHistoriesService){
    super(formBuilder, backupHistoriesService);
  }

  override buildForm(){
    this.form = this.formBuilder?.group({
      userOwnerId: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });
  }

  override mapForm(item: any){
    return {
      userOwnerId: item.userOwnerId,
      name: item.name,
      $id: this.data?.$id
    };
  }
}
