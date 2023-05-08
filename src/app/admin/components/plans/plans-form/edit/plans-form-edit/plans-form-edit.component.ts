import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PlansService } from 'src/app/admin/services/plans.service';
import { EditFormComponent } from 'src/app/shared/components/edit-form/edit-form.component';

@Component({
  selector: 'app-plans-form-edit',
  templateUrl: './plans-form-edit.component.html',
  styleUrls: ['./plans-form-edit.component.css']
})
export class PlansFormEditComponent extends EditFormComponent{

  @Input() formTitle: string = '';

  constructor(formBuilder: FormBuilder, plansService: PlansService){
    super(formBuilder, plansService);
  }

  override buildForm(){
    this.form = this.formBuilder?.group({
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      months: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });
  }

  override mapForm(item: any){
    console.log(`mapForm hijo`)
    return {
      description: item.description,
      price: item.price,
      months: item.months,
      name: item.name,
      $id: this.data?.$id
    };
  }
}
