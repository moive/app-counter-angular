import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter: number = 0;
  add() {
    this.counter += 3;
  }
  minus() {
    this.counter - 2 > 0 && (this.counter -= 2);
  }
}
