import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoriesService } from 'src/app/admin/services/categories.service';
import { AddFormComponent } from 'src/app/shared/components/add-form/add-form.component';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-categories-form-add',
  templateUrl: './categories-form-add.component.html',
  styleUrls: ['./categories-form-add.component.css']
})
export class CategoriesFormAddComponent extends AddFormComponent {

  @Input() formTitle: string = '';

  constructor(formBuilder: FormBuilder, categoriesService: CategoriesService, modalService: ModalService){
    super(formBuilder, categoriesService);
  }



}
