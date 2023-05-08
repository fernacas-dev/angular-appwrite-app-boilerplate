import { Component, Input, OnInit } from '@angular/core';
import { InstanceData } from '../../models/instanceData.model';
import { InstanceDataService } from '../../services/instance-data.service';

@Component({
  selector: 'app-wpinstances-items',
  templateUrl: './wpinstances-items.component.html',
  styleUrls: ['./wpinstances-items.component.css']
})
export class WpinstancesItemsComponent {

  @Input() wpInstance: InstanceData | null = null;

  constructor(private instanceDataService: InstanceDataService) {
  }

  deleteWpInstance(containerName: string){
    this.instanceDataService.removeInstance(JSON.stringify({containerName: containerName}))
  }

}
