import { NgModule, ModuleWithProviders } from '@angular/core';
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

import { CreateButtonComponent } from './components/create-button/create-button.component';
import { HeaderComponent } from './components/header/header.component';

import { AppListService } from './services/app-list.service';
import { FeatureService } from './services/feature.service';

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
  declarations: [CreateButtonComponent, HeaderComponent],
  exports: [
    FormsModule,
    materialModules,
    CreateButtonComponent,
    HeaderComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AppListService, FeatureService]
    };
  }
}
