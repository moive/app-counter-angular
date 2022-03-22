import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-minus',
  templateUrl: './button-minus.component.html',
  styleUrls: ['./button-minus.component.scss']
})
export class ButtonMinusComponent {
  @Input()
  counter: number = 3;

  @Output()
  onMinus: EventEmitter<number> = new EventEmitter();

  minus() {
    this.counter - 2 > 0 && (this.counter -= 2);
    this.onMinus.emit(this.counter);
  }

}
