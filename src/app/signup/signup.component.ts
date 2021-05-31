import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidation } from '../cutsomvalidation.component';
import { inputControl } from '../inputControl.component'

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUp {

  exform: FormGroup;
  inputControl: inputControl;
  isDisplay: boolean = false
  message: string;
  ngOnInit() {
    this.exform = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(4), customValidation]),
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password1: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      password2: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    }, this.passMatching);
  }
  passMatching(formgroup: FormGroup) {
    return formgroup.get('password1').value == formgroup.get('password2').value ? null : { notmatched: true }
  }

  buttonClick() {
    this.isDisplay = true;
    console.log(this.exform.value)
    console.log(this.isDisplay);
    this.message = `Giriş Başarılı! Hoşgeldin ${this.exform.get('name').value} `;
    this.exform.reset();
  }




}
