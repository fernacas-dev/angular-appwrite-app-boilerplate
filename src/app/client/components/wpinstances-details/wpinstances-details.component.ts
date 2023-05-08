import { Component, Input, OnInit } from '@angular/core';
import { InstanceDataService } from '../../services/instance-data.service';

@Component({
  selector: 'app-wpinstances-details',
  templateUrl: './wpinstances-details.component.html',
  styleUrls: ['./wpinstances-details.component.css']
})
export class WpinstancesDetailsComponent {
  @Input() item: any;
}
