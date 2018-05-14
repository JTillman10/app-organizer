import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { FeaturesComponent } from './features/features.component';
import { AppListComponent } from './app-list/app-list.component';
import { FeatureListComponent } from './features/feature-list/feature-list.component';
import { FeatureComponent } from './features/feature/feature.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    AppListComponent,
    FeaturesComponent,
    FeatureListComponent,
    FeatureComponent
  ],
  exports: [
    AppListComponent,
    FeaturesComponent,
    FeatureListComponent,
    FeatureComponent
  ]
})
export class ComponentsModule {}
