import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { FeaturesComponent } from './features/features.component';
import { AppListComponent } from './app-list/app-list.component';
import { FeatureComponent } from './feature/feature.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [AppListComponent, FeaturesComponent, FeatureComponent],
  exports: [AppListComponent, FeaturesComponent, FeatureComponent]
})
export class ComponentsModule {}
