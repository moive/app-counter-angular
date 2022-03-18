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

    it("Should render text as 'Hello, 10'", () => {
        const fixture = TestBed.createComponent(CounterComponent);
        fixture.detectChanges();

        const compiled: HTMLElement = fixture.nativeElement;
        // console.log(compiled)
        expect(compiled.querySelector("h1")?.textContent).toEqual("Hello, 10");
    })

    it("The valor initial is 10", () => {
        const count = new CounterComponent();

        expect(count.counter).toBe(10)
    });
})