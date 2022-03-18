import { TestBed } from "@angular/core/testing";
import { CounterComponent } from "./counter.component"

describe("CounterComponent", () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CounterComponent]
        }).compileComponents;
    });

    it("The Counter component must be created", () => {
        const fixture = TestBed.createComponent(CounterComponent);
        expect(fixture.componentInstance).toBeTruthy();
    });

    it("The valor initial is 10", () => {
        const count = new CounterComponent();

        expect(count.counter).toBe(10)
    });
})