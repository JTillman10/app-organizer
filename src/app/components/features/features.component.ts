import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { featuresData } from './features';
import { Feature } from '../../models/feature.model';

import { FeatureService } from '../../shared/services/feature.service';

import { Store } from '../../../store';
import { Observable, Subscription } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { App } from '../../models/app.model';

@Component({
  selector: 'features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  app$: Observable<App> = this.store.select<App>('app');
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
    this.route.params
      .switchMap(param => {
        this.appId = param.id;
        return this.featureService.getFeatures(param.id);
      })
      .subscribe(data => {
        this.features = data;
      });
  }

  get featuresDone() {
    if (this.features) {
      return this.features.reduce((accumulator, feature) => {
        if (feature.requirements) {
          return accumulator + feature.requirements.filter(r => r.done).length;
        }
        return accumulator + 0;
      }, 0);
    }
    return 0;
  }

  get totalFeatures() {
    if (this.features) {
      return this.features.reduce((accumulator, feature) => {
        if (feature.requirements) {
          return accumulator + feature.requirements.length;
        }
        return accumulator + 0;
      }, 0);
    }
    return 0;
  }

  get featuresDoneColor() {
    const percentage = this.featuresDone / this.totalFeatures;
    if (percentage > 0.66) {
      return 'green';
    }
    if (percentage <= 0.33) {
      return 'red';
    }
    return '';
  }

  toggleCreateFeature() {
    this.creatingFeature = !this.creatingFeature;
  }

  orderFeatures() {
    this.features.sort((a, b) => {
      if (a.number < b.number) {
        return -1;
      }
      if (a.number > b.number) {
        return 1;
      }
      return 0;
    });
  }

  async createFeature() {
    await this.featureService.addFeature(
      {
        name: this.newFeatureName,
        number: this.numberOfFeatures + 1,
        requirements: []
      },
      this.appId
    );

    this.newFeatureName = '';
    this.toggleCreateFeature();
  }

  async updateFeature(newFeature) {
    await this.featureService.updateFeature(
      newFeature.key,
      this.appId,
      newFeature
    );
  }
}
