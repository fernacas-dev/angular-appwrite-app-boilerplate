import { ComponentWrapper } from './../../../admin/models/component-wrapper.model';
import { Component, Input, ViewChild, ViewContainerRef, AfterViewInit, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnChanges {

  @Input() componentChild: ComponentWrapper =
  {
    component: null,
    attributes: [],
  };

  _isActive: boolean = false;

  @Input('isActive') set isActive(value: boolean){
    this._isActive = value;
  };

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  @Output() closeEvent = new EventEmitter<boolean>();

  modalTitle: string = '';

  isClosing(): void {
    this.closeEvent.emit(true);
    this.container.clear();
  }

  async createComponentsBasedOnConfig() {
      this.container?.clear();

      if(this.container && this.componentChild.component !== null){
        const componentInstance = await this.componentChild.component;
        const componentRef = this.container.createComponent(componentInstance);
        this.componentChild.attributes.forEach(attribute => {
          componentRef.setInput(attribute.key, attribute.value);
          if(attribute.key === 'formTitle'){
            this.modalTitle = attribute.value;
          }
        });
      }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.createComponentsBasedOnConfig();
  }

}
