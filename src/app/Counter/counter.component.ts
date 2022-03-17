import { Component } from "@angular/core";

@Component({
    selector: "app-counter",
    templateUrl: "./counter.component.html"
})
export class CounterComponent {
    counter: number = 10;
    // add() {
    //     this.counter += 3;
    // }
    // minus() {
    //     this.counter - 2 > 0 && (this.counter -= 2);
    // }
}