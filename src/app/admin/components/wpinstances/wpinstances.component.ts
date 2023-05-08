import { Component } from '@angular/core';
import { CrudComponent } from 'src/app/shared/components/crud/crud.component';
import { WPInstancesService } from '../../services/wpinstances.service';

@Component({
  selector: 'app-wpinstances',
  templateUrl: './wpinstances.component.html',
  styleUrls: ['./wpinstances.component.css']
})
export class WpinstancesComponent extends CrudComponent {
  override headTable: any[] = [
    'Id',
    'Category Id',
    'Name',
    'UserOwnerId',
    'Actions'
  ];

  constructor(){
    super(WPInstancesService);
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
      containerId: item.containerId,
      userId: item.userId,
      cpuLimit: item.cpuLimit,
      memoryLimit: item.memoryLimit,
      diskLimit: item.diskLimit,
      creationDate: item.creationDate,
      lastRebootDate: item.lastRebootDate,
      businessStatus: item.businessStatus,
      expirationDate: item.expirationDate,
      deletionDate: item.deletionDate,
      nodeId: item.nodeId,
      planId: item.planId,
    }
  }
}
