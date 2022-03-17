import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-minus',
  templateUrl: './button-minus.component.html',
  styleUrls: ['./button-minus.component.scss']
})
export class ButtonMinusComponent {
  @Input()
  counter: number = 0;

  minus() {
    console.log(this.counter)
    this.counter - 2 > 0 && (this.counter -= 2);
  }

}
