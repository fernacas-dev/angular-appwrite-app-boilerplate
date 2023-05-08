import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WPInstancesService } from 'src/app/admin/services/wpinstances.service';
import { AddFormComponent } from 'src/app/shared/components/add-form/add-form.component';

@Component({
  selector: 'app-wpinstances-form-add',
  templateUrl: './wpinstances-form-add.component.html',
  styleUrls: ['./wpinstances-form-add.component.css']
})
export class WpinstancesFormAddComponent extends AddFormComponent {

  @Input() formTitle: string = '';

  constructor(formBuilder: FormBuilder, wpInstancesService: WPInstancesService){
    super(formBuilder, wpInstancesService);
  }

  override buildForm(){
    this.form = this.formBuilder?.group({
      userOwnerId: ['', [Validators.required]],
      name: ['', [Validators.required]],
      categoryId: ['', [Validators.required]],
    });
  }

  override mapForm(item: any){
    return {
      userOwnerId: item.userOwnerId,
      name: item.name,
    };
  }
}
