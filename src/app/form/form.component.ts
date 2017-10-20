import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  complexForm:FormGroup;

  constructor(fb:FormBuilder) {
    this.complexForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'gender': [null, Validators.required],
      'mobileNum': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])]
    })

    this.complexForm.valueChanges.subscribe((form:any) => {
        console.log('form changed to:', form);
      }
    );
  }

  submitForm(value:any) {
    console.log(value);
  }
}
