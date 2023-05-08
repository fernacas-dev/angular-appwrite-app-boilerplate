import { InstanceDBConfigService } from './../../../../../services/instancedbconfig.service';
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EditFormComponent } from 'src/app/shared/components/edit-form/edit-form.component';

@Component({
  selector: 'app-instancedbconfig-form-edit',
  templateUrl: './instancedbconfig-form-edit.component.html',
  styleUrls: ['./instancedbconfig-form-edit.component.css']
})
export class InstancedbconfigFormEditComponent extends EditFormComponent{

  @Input() formTitle: string = '';

  constructor(formBuilder: FormBuilder, instanceDBConfigService: InstanceDBConfigService){
    super(formBuilder, instanceDBConfigService);
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
