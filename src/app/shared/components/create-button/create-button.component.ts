import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.scss']
})
export class CreateButtonComponent {
  @Output() clicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  create() {
    this.clicked.emit();
  }
}
