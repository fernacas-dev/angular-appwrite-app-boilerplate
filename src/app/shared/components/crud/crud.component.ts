import { Component, Inject, inject } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-crud',
  template: '',
  styleUrls: []
})
export class CrudComponent {

  protected service: any

  headTable: any[] = [];
  dataTable: any[] = [];
  isEditing: boolean = false;
  dataItem: any | undefined;
  isVisibleForm: boolean = false;

  constructor(@Inject('genericService') genericService: any) {
    this.service = inject(genericService);
    this.service.get();
  }

  ngOnInit(): void {
    this.getListSubscribe();
    this.createSubscribe();
    this.updateSubscribe();
    this.deleteSubscribe();
  }

  deleteItemId(itemId: string) {
    if(this.dataItem?.$id === itemId){
      this.dataItem = undefined;
      this.isEditing = false;
    }
    this.service.delete(itemId);
  }

  editItemId(itemId: string): void {
    this.isEditing = true;
    this.isVisibleForm = true;
    this.dataItem = this.dataTable.find(item => item.$id === itemId);
  }

  closeEditForm(event: Event) {
    this.isEditing = false;
  }

  mapFunction(item: any): any {
    return {
      $id: item.$id,
      name: item.name,
    }
  }

  protected getListSubscribe(){
    this.service.list$.subscribe((items: any[]) => {
      this.dataTable = [];
      if(items){
        this.dataTable = items.map((item) => this.mapFunction(item));
      }
    });
  }

  protected createSubscribe(){
    this.service.created$.pipe(filter(x => x !== null)).subscribe((item: any) => {
      this.dataTable.push(this.mapFunction(item))
    });
  }

  protected updateSubscribe(){
    this.service.updated$.pipe(filter(x => x !== null)).subscribe((item: any) => {
      const it = this.mapFunction(item)
      const idx = this.dataTable.findIndex(x => x.$id === it.$id);
      this.dataTable[idx] = it;
    });
  }

  protected deleteSubscribe(){
    this.service.deleted$.subscribe((itemId: any) => {
      const tmp = this.dataTable.filter(item => item.$id !== itemId);
      this.dataTable = tmp;
    })
  }

  addItem(){
    this.isEditing = false;
    this.isVisibleForm = true;
  }

  hideForm(){
    this.isVisibleForm = false;
  }
}
