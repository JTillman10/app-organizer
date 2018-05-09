import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { FeaturesComponent } from './features.component';
import { FeatureComponent } from './feature/feature.component';
import { FeatureListComponent } from './feature-list/feature-list.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [FeaturesComponent, FeatureListComponent, FeatureComponent],
  exports: [FeaturesComponent]
})
export class FeaturesModule {}
