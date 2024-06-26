import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  private router = inject(Router);
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      // Save form data to local storage
      localStorage.setItem('user', JSON.stringify(formData));
      this.router.navigate(['user'])
      console.log('Form Submitted', formData);
    }
    else {
      alert('Please fill out the form.');
    }
  }
}

