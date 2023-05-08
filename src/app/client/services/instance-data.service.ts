import { Injectable, inject } from '@angular/core';
import { AppwriteApi } from 'src/app/shared/services/appwrite';
import { CrudService } from 'src/app/shared/services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class InstanceDataService extends CrudService {
  private localAppwriteAPI = inject(AppwriteApi);

  constructor(){
    super();
    this.setConnection('wphostingdb', 'instanceData');
  }

  createInstance(data: string) {
    this.localAppwriteAPI.functions.createExecution('6451928217427bc83c0f', data, true);
  }

  removeInstance(data: string) {
    this.localAppwriteAPI.functions.createExecution('6455d26dd91116ecd2e2', data, true);
  }

}
