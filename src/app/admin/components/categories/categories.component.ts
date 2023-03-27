import { Component } from '@angular/core';
import { CrudComponent } from 'src/app/shared/components/crud/crud.component';
import { ModalService } from 'src/app/shared/services/modal.service';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent extends CrudComponent {

  override headTable: any[] = [
    'Id',
    'Name',
    'Actions'
  ];

  constructor(){
    super(CategoriesService);
  }

}
