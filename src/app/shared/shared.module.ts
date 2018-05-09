import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatInputModule,
  MatExpansionModule,
  MatListModule,
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatCheckboxModule
} from '@angular/material';

import { CreateButtonComponent } from './create-button/create-button.component';

const materialModules = [
  MatToolbarModule,
  MatSidenavModule,
  MatInputModule,
  MatExpansionModule,
  MatListModule,
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatCheckboxModule
];

@NgModule({
  imports: [CommonModule, FormsModule, materialModules],
  declarations: [CreateButtonComponent],
  exports: [FormsModule, materialModules, CreateButtonComponent]
})
export class SharedModule {}
