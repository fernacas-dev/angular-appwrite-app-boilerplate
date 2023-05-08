import {Injectable } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';

@Injectable({
 providedIn: 'root',
})
export class PlansService extends CrudService {

  constructor(){
    super();
    this.setConnection('wphostingdb', 'plans');
  }
}
