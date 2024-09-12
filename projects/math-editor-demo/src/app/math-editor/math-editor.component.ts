import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

declare var MathJax: any;

@Component({
  selector: 'app-math-editor',
  templateUrl: './math-editor.component.html',
  styleUrls: ['./math-editor.component.css']
})
export class MathEditorComponent implements OnInit {

  mathForm: FormGroup;  // FormGroup to handle the reactive form
  renderedContent: string = '';  // Holds the parsed MathJax content

  constructor() {
    // Initialize the reactive form
    this.mathForm = new FormGroup({
      editorContent: new FormControl('')
    });
  }

  ngOnInit(): void {

    this.mathForm.get('editorContent')?.valueChanges.subscribe(value => {
      this.updateMath(value);
    });
  }

  insertSymbol(symbol: string): void {
    const currentContent = this.editorContent?.value || '';
    this.mathForm.get('editorContent')?.setValue(currentContent + symbol);
  }

  // Update MathJax-rendered content
  updateMath(content: string): void {
    // Wrap the input in inline MathJax delimiters for proper rendering
    const wrappedContent = content.replace(/\n\n/g, '<br>');
    this.renderedContent = wrappedContent;

    // Delay the MathJax typesetting to ensure it catches the content update
    // setTimeout(() => {
    //   if (MathJax) {
    //     MathJax.typesetPromise([document.getElementById('output')]).catch((err: any) => console.error(err));
    //   }
    // }, 0);
  }

  get f(): FormGroup {
    return this.mathForm as FormGroup;
  }

  get editorContent() {
    return this.f?.get('editorContent');
  }

}
