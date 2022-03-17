import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss']
})
export class ButtonAddComponent {
  @Input()
  counter: number = 0;

  add() {
    console.log(this.counter)
    this.counter += 3;
  }

}
