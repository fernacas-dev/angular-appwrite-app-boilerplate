import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InstanceDBConfigService } from 'src/app/admin/services/instancedbconfig.service';
import { AddFormComponent } from 'src/app/shared/components/add-form/add-form.component';

@Component({
  selector: 'app-instancedbconfig-form-add',
  templateUrl: './instancedbconfig-form-add.component.html',
  styleUrls: ['./instancedbconfig-form-add.component.css']
})
export class InstancedbconfigFormAddComponent extends AddFormComponent {

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
    };
  }
}
