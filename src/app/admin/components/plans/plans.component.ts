import { Component, OnInit } from '@angular/core';
import { CrudComponent } from 'src/app/shared/components/crud/crud.component';
import { PlansService } from '../../services/plans.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent extends CrudComponent {
  override headTable: any[] = [
    'Id',
    'Name',
    'Price',
    'Months',
    'Actions'
  ];

  constructor(){
    super(PlansService);
  }

  override ngOnInit(): void {
    this.getListSubscribe();
    this.createSubscribe();
    this.updateSubscribe();
    this.deleteSubscribe();
  }

  override mapFunction(item: any): any {
    return {
      $id: item.$id,
      name: item.name,
      description: item.description,
      price: item.price,
      months: item.months,
    }
  }
}
