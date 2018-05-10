import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { AuthFormComponent } from './components/auth-form/auth-form.component';

import { AuthService } from './services/auth/auth.service';

import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  declarations: [AuthFormComponent],
  providers: [AuthService, AuthGuard],
  exports: [AuthFormComponent]
})
export class SharedAuthModule {}
