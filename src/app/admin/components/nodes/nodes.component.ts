import { Component } from '@angular/core';
import { CrudComponent } from 'src/app/shared/components/crud/crud.component';
import { NodesService } from '../../services/nodes.service';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent extends CrudComponent{
  override headTable: any[] = [
    'Id',
    'Address',
    'Name',
    'Status',
    'WPInstances',
    'Actions'
  ];

  constructor(){
    super(NodesService);
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
      address: item.address,
      status: item.status,
      wpinstances: item.wpInstances,
    }
  }
}
