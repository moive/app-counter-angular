import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMinusComponent } from './button-minus.component';

describe('ButtonMinusComponent Unit', () => {
  let component: ButtonMinusComponent;
  let fixture: ComponentFixture<ButtonMinusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonMinusComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonMinusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Must emit the value 1", () => {
    let newCounter: number = 0;
    component.onMinus.subscribe((counter) => {
      newCounter = counter;
    });

    component.minus();
    expect(newCounter).toBe(1);
  });
});
