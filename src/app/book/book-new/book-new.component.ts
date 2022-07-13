import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent  {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.nonNullable.group({
      author:   ['', [Validators.required]],
      title:    ['', [Validators.required]],
      subtitle: ['', [Validators.required]],
      isbn:     ['', [Validators.required, Validators.minLength(10)]],
      abstract: ['', [Validators.required]]
    })
  }

  submit() {
    if (this.form.invalid) {
      console.log('Form invalid!');
    }
    console.table(this.form.value);
  }
  
}
