import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberFormatterModule } from './modules/number-formatter/number-formatter.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NumberFormatterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }