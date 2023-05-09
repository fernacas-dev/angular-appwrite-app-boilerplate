import { EventsService } from 'src/app/shared/services/events.service';
import { InstanceData } from '../../models/instanceData.model';
import { InstanceDataService } from './../../services/instance-data.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wpinstances-list',
  templateUrl: './wpinstances-list.component.html',
  styleUrls: ['./wpinstances-list.component.css']
})
export class WpinstancesListComponent implements OnInit {

  wpInstances: InstanceData[] | null = [];
  listenEventsSubscription: any;
  @Output() isCreatingWPInstanceForm: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private instanceDataService: InstanceDataService,
    private eventsService: EventsService
  ) {
    this.instanceDataService.get();
  }

  ngOnInit(): void {
    this.instanceDataService.list$.subscribe((data) => {
    this.wpInstances = [];
     for(let i = 0; i < data?.length; i++) {
      if(data[i] !== null){
        try{
          data[i].Ports = JSON.parse(data[i]?.Ports);
        }catch(err){
          data[i].Ports = data[i]?.Ports;
        }
        this.wpInstances.push(data[i]);
      }
     }
    })

    this.listenEventsSubscription = this.eventsService.listenEvents();

    this.eventsService.messages$.subscribe((data: any[]) => {
      this.refresh();
    })

  }

  ngOnDestroy(): void {
    this.listenEventsSubscription = null;
  }

  refresh(){
    this.wpInstances = [];
    this.instanceDataService.get();
  }

  showCreateForm(){
    this.isCreatingWPInstanceForm.emit(true);
  }
}
