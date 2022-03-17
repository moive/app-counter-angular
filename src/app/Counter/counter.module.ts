import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonAddComponent } from "./button-add/button-add.component";
import { ButtonMinusComponent } from "./button-minus/button-minus.component";
import { CounterComponent } from "./counter.component";

@NgModule({
    declarations: [CounterComponent, ButtonAddComponent, ButtonMinusComponent],
    imports: [CommonModule],
    exports: [CounterComponent]
})
export class CounterModule {

}