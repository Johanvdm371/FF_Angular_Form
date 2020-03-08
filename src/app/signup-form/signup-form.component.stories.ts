import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { SignupFormComponent } from './signup-form.component';


export default {
  component: SignupFormComponent,
  title: 'Signup Form',
  decorators: [
    moduleMetadata({
      imports: [CommonModule]
    })
  ]
}

export const Unfilled = () => ({
  component: SignupFormComponent
})
