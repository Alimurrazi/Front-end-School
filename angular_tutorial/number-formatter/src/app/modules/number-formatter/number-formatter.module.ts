import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberFormatterComponent } from './number-formatter.component';

@NgModule({
  declarations: [NumberFormatterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NumberFormatterComponent
  ]
})
export class NumberFormatterModule { }
