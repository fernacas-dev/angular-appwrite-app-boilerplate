import { Component, OnInit } from '@angular/core';
import { CrudComponent } from 'src/app/shared/components/crud/crud.component';
import { InstanceDBConfigService } from '../../services/instancedbconfig.service';

@Component({
  selector: 'app-instancedbconfig',
  templateUrl: './instancedbconfig.component.html',
  styleUrls: ['./instancedbconfig.component.css']
})
export class InstancedbconfigComponent extends CrudComponent {
  override headTable: any[] = [
    'Id',
    'InstanceId',
    'User',
    'Host',
    'Port',
    'DBSizeLimit',
    'Actions'
  ];

  constructor(){
    super(InstanceDBConfigService);
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
      user: item.user,
      host: item.host,
      port: item.port,
      dbsizeLimit: item.dbsizeLimit,
    }
  }
}
