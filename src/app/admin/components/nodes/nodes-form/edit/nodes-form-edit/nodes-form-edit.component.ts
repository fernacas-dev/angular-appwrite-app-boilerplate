import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NodesService } from 'src/app/admin/services/nodes.service';
import { EditFormComponent } from 'src/app/shared/components/edit-form/edit-form.component';

@Component({
  selector: 'app-nodes-form-edit',
  templateUrl: './nodes-form-edit.component.html',
  styleUrls: ['./nodes-form-edit.component.css']
})
export class NodesFormEditComponent extends EditFormComponent{

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
      $id: this.data?.$id
    };
  }
}
