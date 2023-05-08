import {Injectable } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';

@Injectable({
 providedIn: 'root',
})
export class NodesService extends CrudService {

  constructor(){
    super();
    this.setConnection('wphostingdb', 'nodes');
  }
}
