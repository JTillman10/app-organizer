import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ContainersModule } from './containers/containers.module';
import { SharedModule } from './shared/shared.module';

import { Store } from '../store';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'apps' }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContainersModule,
    RouterModule.forRoot(ROUTES),
    SharedModule.forRoot(),
    AuthModule
  ],
  declarations: [AppComponent],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {}
