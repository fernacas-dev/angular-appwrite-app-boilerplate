import { Component} from '@angular/core';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  isShowAddWPForm: boolean = false;

  showAddWPForm($event: boolean){
    this.isShowAddWPForm = true;
  }

  hideAddWPForm($event: boolean){
    this.isShowAddWPForm = false;
  }

}
