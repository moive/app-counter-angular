import { CounterComponent } from "./counter.component"

describe("CounterComponent", () => {
    it("The valor initial is 10", () => {
        const count = new CounterComponent();

        expect(count.counter).toBe(10)
    })
})