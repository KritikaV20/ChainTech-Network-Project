import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit {
  accountForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: [''],
      password: ['', [Validators.required]],
    });
    this.loadUserData();
  }

  userData: any;

  loadUserData(): void {
    const savedData = localStorage.getItem('user');
    if (savedData) {
      this.userData = JSON.parse(savedData);
    }
    this.accountForm.patchValue(this.userData)
  }

  save() {
    const formData = this.accountForm.value;
    localStorage.setItem('user', JSON.stringify(formData));
    alert('Changes Saved')
  }
}

