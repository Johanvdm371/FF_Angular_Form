import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  //Just one form, so no need for FormBuilder.
  signupForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email]))
  });

  //String variable to hold the output message. This allows regulating when it displays easily so it doesn't update live as the user types.
  outputString:string = '';


  //Function that is called when validated form is submitted.
  onSubmit() {
    //This is a placeholder function for saving the form values:
    this.signupForm.patchValue(this.signupForm.value);
    //This is where an EventEmitter would typically submit the form value to a service and/or the server.

    //Outputting the text to the panel:
    this.outputString = `Hello ${this.signupForm.controls.firstName.value} ${this.signupForm.controls.lastName.value}. We have sent an email to  ${this.signupForm.controls.email.value}`;
  }

}
