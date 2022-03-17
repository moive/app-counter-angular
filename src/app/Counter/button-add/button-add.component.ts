import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss']
})
export class ButtonAddComponent {
  @Input()
  counter: number = 0;

  @Output()
  onAdd: EventEmitter<number> = new EventEmitter();

  add() {
    this.counter += 3;
    this.onAdd.emit(this.counter)
  }

}
