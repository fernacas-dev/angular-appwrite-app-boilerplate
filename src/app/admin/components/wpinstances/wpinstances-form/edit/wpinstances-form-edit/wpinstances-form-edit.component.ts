import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WPInstancesService } from 'src/app/admin/services/wpinstances.service';
import { EditFormComponent } from 'src/app/shared/components/edit-form/edit-form.component';

@Component({
  selector: 'app-wpinstances-form-edit',
  templateUrl: './wpinstances-form-edit.component.html',
  styleUrls: ['./wpinstances-form-edit.component.css']
})
export class WpinstancesFormEditComponent extends EditFormComponent{

  @Input() formTitle: string = '';

  constructor(formBuilder: FormBuilder, wpInstanceService: WPInstancesService){
    super(formBuilder, wpInstanceService);
  }

  override buildForm(){
    this.form = this.formBuilder?.group({
      userOwnerId: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });
  }

  override mapForm(item: any){
    console.log(`mapForm hijo`)
    return {
      userOwnerId: item.userOwnerId,
      name: item.name,
      $id: this.data?.$id
    };
  }
}
