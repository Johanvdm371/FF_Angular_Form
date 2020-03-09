import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent {

  signupForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email]))
  });

  //String variable to hold the output message.
  outputString:string = '';


  //Function that is called when validated form is submitted.
  onSubmit() {
    //Placeholder function for saving the form values in place of emmiter:
    this.signupForm.patchValue(this.signupForm.value);

    //Outputting the text to the panel:
    this.outputString = `Hello ${this.signupForm.controls.firstName.value} ${this.signupForm.controls.lastName.value}. We have sent an email to ${this.signupForm.controls.email.value}`;
  }

}
