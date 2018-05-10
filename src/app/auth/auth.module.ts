import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SharedAuthModule } from './shared/shared.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  }
];
export const firebaseConfig = {
  apiKey: 'AIzaSyD-EJRlmg97gjfkjX1sOEceeZfluz9WTuE',
  authDomain: 'app-organizer.firebaseapp.com',
  databaseURL: 'https://app-organizer.firebaseio.com',
  projectId: 'app-organizer',
  storageBucket: 'app-organizer.appspot.com',
  messagingSenderId: '212521019115'
};

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    CommonModule,
    SharedAuthModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule {}
