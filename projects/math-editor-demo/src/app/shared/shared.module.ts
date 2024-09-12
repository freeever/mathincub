import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathJaxDirective } from './mathjax.directive';



@NgModule({
  declarations: [
    MathJaxDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [MathJaxDirective]
})
export class SharedModule { }
