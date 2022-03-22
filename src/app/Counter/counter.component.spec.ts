import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ButtonAddComponent } from "./button-add/button-add.component";
import { CounterComponent } from "./counter.component"

describe("CounterComponent Unit testing", () => {
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

describe("CounterComponent Test Integration", () => {
    let component: CounterComponent;
    let fixture: ComponentFixture<CounterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CounterComponent, ButtonAddComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CounterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("event click button add", () => {
        const compiled: HTMLElement = fixture.nativeElement;
        const counterValue = compiled.querySelector("h1")!;
        const btnAdd: HTMLElement = fixture.debugElement.nativeElement.querySelector("#add");
        // console.log(compiled)

        btnAdd.click();
        fixture.detectChanges();

        expect(counterValue.textContent).toEqual("Hello, 13");
    });
});