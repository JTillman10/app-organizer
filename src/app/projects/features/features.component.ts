import { Component, Input, OnChanges } from '@angular/core';
import { featuresData } from './features';
import { Feature } from './feature.model';

@Component({
  selector: 'features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnChanges {
  @Input() currentAppId: number;

  features: Feature[];
  creatingFeature = false;
  newFeatureName = '';

  constructor() {}

  ngOnChanges(changes) {
    const idChange = changes.currentAppId;
    if (idChange && !idChange.firstChange) {
      const newFeatures = featuresData.find(
        i => i.id === idChange.currentValue
      );
      if (newFeatures) {
        this.features = newFeatures.features;
      } else {
        this.features = [];
      }
    }
  }

  createFeature() {
    this.features.push({
      name: this.newFeatureName,
      number: this.features.length + 1,
      requirements: []
    });
    this.newFeatureName = '';
    this.toggleCreateFeature();
  }

  toggleCreateFeature() {
    this.creatingFeature = !this.creatingFeature;
  }
}
