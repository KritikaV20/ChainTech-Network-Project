import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account', component: AccountComponent }
];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterComponent, AccountComponent, LoginComponent, ReactiveFormsModule, RouterModule, FormsModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'account-management-app';
}

