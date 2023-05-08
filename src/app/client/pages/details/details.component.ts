import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstanceDataService } from '../../services/instance-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() containerId: string | null= "";
  item: any;

  constructor(
    private route: ActivatedRoute,
    private instanceDataService: InstanceDataService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.containerId = params.get('id');
      if(this.containerId !== null){
        this.instanceDataService.getById(this.containerId!);
      }
    });

    this.instanceDataService.item$.subscribe(item => {
      this.item = item;
      console.log(item);
    });

  }



}
