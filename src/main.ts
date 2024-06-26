import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AccountComponent } from './app/account/account.component';
import { LoginComponent } from './app/login/login.component'
import { RegisterComponent } from './app/register/register.component'
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'account', component: AccountComponent }
    ]),
    importProvidersFrom(ReactiveFormsModule, RouterModule, BrowserModule), provideAnimationsAsync()
  ],
});

