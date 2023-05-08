import {Injectable } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';

@Injectable({
 providedIn: 'root',
})
export class InstanceDBConfigService extends CrudService {

  constructor(){
    super();
    this.setConnection('wphostingdb', 'instancedbconfig');
  }
}
