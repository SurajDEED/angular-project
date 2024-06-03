import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      console.log(formData)
      try {
        await axios.post('http://localhost:3000/users', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('Form submitted successfully');
        this.router.navigate(['/']); // Navigate to the root route
        window.location.reload(); // Reload the page
      } catch (error) {
        console.error('There was an error submitting the form:', error);
      }
    }
  }
}
