import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InstanceDataService } from '../../services/instance-data.service';

@Component({
  selector: 'app-create-wp-instance-form',
  templateUrl: './create-wp-instance-form.component.html',
  styleUrls: ['./create-wp-instance-form.component.css']
})
export class CreateWpInstanceFormComponent {

  @Input() isCreatingInstance: boolean = false;
  @Output() isClosingAddWPForm: EventEmitter<boolean> = new EventEmitter();

  form: FormGroup<any> | any;
  formBuilder?: FormBuilder;

  constructor(formBuilder: FormBuilder, private instanceDataService: InstanceDataService){
    this.formBuilder = formBuilder;
    this.buildForm();
  }

  createInstance(){
    this.isCreatingInstance = true;
  }

  buildForm(){
    this.form = this.formBuilder?.group({
      containerName: ['', [Validators.required]],
    });
  }

  save(event: Event) {
    if(this.form?.valid){
      console.log('Creating Instance');
      this.instanceDataService.createInstance(JSON.stringify(this.form.value));
      this.form?.reset();
      this.isCreatingInstance = false;
    } else {
      this.form?.markAllAsTouched();
    }
  }

  cancel(){
    this.isCreatingInstance = false;
    this.isClosingAddWPForm.emit(!this.isCreatingInstance)
  }
}
