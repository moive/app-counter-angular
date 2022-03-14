import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './Counter/counter.component';
import { ButtonCounterComponent } from './Counter/button-counter/button-counter.component';

@NgModule({
  declarations: [AppComponent, CounterComponent, ButtonCounterComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
