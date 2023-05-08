import { Component } from '@angular/core';
import { CrudComponent } from 'src/app/shared/components/crud/crud.component';
import { BackupHistoriesService } from '../../services/backuphistories.service';

@Component({
  selector: 'app-backuphistories',
  templateUrl: './backuphistories.component.html',
  styleUrls: ['./backuphistories.component.css']
})
export class BackuphistoriesComponent extends CrudComponent {
  override headTable: any[] = [
    'Id',
    'InstanceId',
    'LastBackupDate',
    'Actions'
  ];

  constructor(){
    super(BackupHistoriesService);
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
      lastBackupDate: item.lastBackupDate,
    }
  }
}
