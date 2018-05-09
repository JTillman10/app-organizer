import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { AuthFormComponent } from './auth-form/auth-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  declarations: [AuthFormComponent],
  exports: [AuthFormComponent]
})
export class SharedAuthModule {}
