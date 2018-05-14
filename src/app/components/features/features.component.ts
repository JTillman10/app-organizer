import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { featuresData } from './features';
import { Feature } from '../../models/feature.model';

import { FeatureService } from '../../shared/services/feature.service';

import { Store } from '../../../store';
import { Observable, Subscription } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

@Component({
  selector: 'features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  features$: Observable<Feature[]>;
  subscription: Subscription;

  appId: string;
  features: Feature[];
  creatingFeature = false;
  newFeatureName = '';
  numberOfFeatures = 0;

  constructor(
    private store: Store,
    private featureService: FeatureService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.features$ = this.route.params.switchMap(param => {
      this.appId = param.id;
      return this.featureService.getFeatures(param.id);
    });
  }

  async createFeature() {
    await this.featureService.addFeature(
      {
        name: this.newFeatureName,
        number: this.numberOfFeatures + 1
      },
      this.appId
    );

    this.newFeatureName = '';
    this.toggleCreateFeature();
  }

  toggleCreateFeature() {
    this.creatingFeature = !this.creatingFeature;
  }
}
