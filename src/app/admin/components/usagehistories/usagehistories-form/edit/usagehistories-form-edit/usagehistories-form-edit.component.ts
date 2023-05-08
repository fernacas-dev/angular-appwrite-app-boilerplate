import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsageHistoriesService } from 'src/app/admin/services/usagehistories.service';
import { EditFormComponent } from 'src/app/shared/components/edit-form/edit-form.component';

@Component({
  selector: 'app-usagehistories-form-edit',
  templateUrl: './usagehistories-form-edit.component.html',
  styleUrls: ['./usagehistories-form-edit.component.css']
})
export class UsagehistoriesFormEditComponent extends EditFormComponent{

  @Input() formTitle: string = '';

  constructor(formBuilder: FormBuilder, usageHistoriesService: UsageHistoriesService){
    super(formBuilder, usageHistoriesService);
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
