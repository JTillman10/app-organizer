import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ProjectsModule } from './projects/projects.module';
import { SharedModule } from './shared/shared.module';

import { Store } from '../store';
import { HeaderComponent } from './header/header.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'projects' }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProjectsModule,
    RouterModule.forRoot(ROUTES),
    SharedModule,
    AuthModule
  ],
  declarations: [AppComponent, HeaderComponent],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {}
