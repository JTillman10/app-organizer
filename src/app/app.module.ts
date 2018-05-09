import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ProjectsModule } from './projects/projects.module';
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' }
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
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
