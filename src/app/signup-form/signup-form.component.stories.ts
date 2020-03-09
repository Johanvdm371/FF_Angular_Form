import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupFormComponent } from './signup-form.component';


export default {
  component: SignupFormComponent,
  title: 'Signup Form',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, ReactiveFormsModule]
    })
  ]
}

export const Unfilled = () => ({
  component: SignupFormComponent
})

export const Completed = () => ({
  template: `
  <form [formGroup]="signupForm" (ngSubmit)="onSubmit()" class="form-signin container">

  <h2 class="form-text">Please enter your details below:</h2>

  <label>
    First Name:
    <input type="text" formControlName="firstName" class="form-row form-control" value="John" required>
  </label>

  <label>
    Last Name:
    <input type="text" formControlName="lastName" class="form-control" value="Doe" required>
  </label>

  <label>
    Email:
    <input type="text" formControlName="email" class="form-control" value="john@johndoe.com" required>
  </label>

  <button type="button" [disabled]="!signupForm.valid" class="btn btn-lg btn-primary btn-block">Save</button>

  <div class="well">
    <h2>Hello John Doe. We have sent an email to john@johndoe.com</h2>
  </div>

</form>
  `
})
