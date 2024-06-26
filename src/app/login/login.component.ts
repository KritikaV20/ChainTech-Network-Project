import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  registrationForm: any;
  accountForm: any;
  userData: any;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    const savedData = localStorage.getItem('user');
    if (savedData) {
      this.userData = JSON.parse(savedData);
    }
    if (this.loginForm.value.email == this.userData.email
      && this.loginForm.value.password == this.userData.password) {
      // this.router.navigate(['/account']);
      // Successful login
      this.router.navigate(['/account']);
    }
    else {
      // Login failed
      alert('Invalid or Incomplete information.');
    }
  }
}

