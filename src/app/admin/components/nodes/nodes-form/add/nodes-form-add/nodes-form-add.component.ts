import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NodesService } from 'src/app/admin/services/nodes.service';
import { AddFormComponent } from 'src/app/shared/components/add-form/add-form.component';

@Component({
  selector: 'app-nodes-form-add',
  templateUrl: './nodes-form-add.component.html',
  styleUrls: ['./nodes-form-add.component.css']
})
export class NodesFormAddComponent extends AddFormComponent {

  @Input() formTitle: string = '';

  constructor(formBuilder: FormBuilder, nodesService: NodesService){
    super(formBuilder, nodesService);
  }

  override buildForm(){
    this.form = this.formBuilder?.group({
      address: ['', [Validators.required]],
      status: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });
  }

  override mapForm(item: any){
    return {
      address: item.address,
      status: item.status,
      name: item.name,
    };
  }
}
