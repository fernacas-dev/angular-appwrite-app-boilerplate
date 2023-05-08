import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackupHistoriesService } from 'src/app/admin/services/backuphistories.service';
import { AddFormComponent } from 'src/app/shared/components/add-form/add-form.component';

@Component({
  selector: 'app-backuphistories-form-add',
  templateUrl: './backuphistories-form-add.component.html',
  styleUrls: ['./backuphistories-form-add.component.css']
})
export class BackuphistoriesFormAddComponent extends AddFormComponent {

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
    };
  }
}
