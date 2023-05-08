import { Component, OnInit } from '@angular/core';
import { CrudComponent } from 'src/app/shared/components/crud/crud.component';
import { UsageHistoriesService } from '../../services/usagehistories.service';
import { NodesService } from '../../services/nodes.service';

@Component({
  selector: 'app-usagehistories',
  templateUrl: './usagehistories.component.html',
  styleUrls: ['./usagehistories.component.css']
})
export class UsagehistoriesComponent extends CrudComponent{

  override headTable: any[] = [
    'Id',
    'Category Id',
    'Name',
    'UserOwnerId',
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
      instanceId: item.instanceId,
      lastUpdate: item.lastUpdate,
      cpuUsage: item.cpuUsage,
      memoryUsage: item.memoryUsage,
      dataUsage: item.dataUsage,
      networkUsage: item.networkUsage,
      lastStatus: item.lastStatus,
    }
  }

}
