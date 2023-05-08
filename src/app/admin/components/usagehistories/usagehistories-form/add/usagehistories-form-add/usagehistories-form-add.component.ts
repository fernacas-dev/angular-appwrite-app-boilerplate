import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BusinessService } from 'src/app/admin/services/business.service';
import { UsageHistoriesService } from 'src/app/admin/services/usagehistories.service';
import { AddFormComponent } from 'src/app/shared/components/add-form/add-form.component';

@Component({
  selector: 'app-usagehistories-form-add',
  templateUrl: './usagehistories-form-add.component.html',
  styleUrls: ['./usagehistories-form-add.component.css']
})
export class UsagehistoriesFormAddComponent extends AddFormComponent {

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
    };
  }

}
