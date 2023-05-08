import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PlansService } from 'src/app/admin/services/plans.service';
import { AddFormComponent } from 'src/app/shared/components/add-form/add-form.component';

@Component({
  selector: 'app-plans-form-add',
  templateUrl: './plans-form-add.component.html',
  styleUrls: ['./plans-form-add.component.css']
})
export class PlansFormAddComponent extends AddFormComponent {

  @Input() formTitle: string = '';

  constructor(formBuilder: FormBuilder, plansService: PlansService){
    super(formBuilder, plansService);
  }
/*
  override buildForm(){
    this.form = this.formBuilder?.group({
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      months: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });
  }

  override mapForm(item: any){
    return {
      description: item.descriptWSWion,
      price: item.price,
      months: item.months,
      name: item.name,
    };
  }*/
}
