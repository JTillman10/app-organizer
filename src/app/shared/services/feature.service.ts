import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Store } from '../../../store';

import { Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import 'rxjs-compat/add/operator/do';

import { Feature } from '../../models/feature.model';

import { AuthService } from '../../auth/shared/services/auth/auth.service';
import { App } from '../../models/app.model';

@Injectable()
export class FeatureService {
  features$: Observable<Feature[]>;

  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {}

  get uid() {
    return this.authService.user.uid;
  }

  getFeatures(appId: string) {
    this.features$ = this.db
      .list<Feature>(`features/${this.uid}/${appId}`)
      .valueChanges()
      .do(next => this.store.set('features', next));
    return this.features$;
  }

  addFeature(feature: Feature, appId: string) {
    return this.db.list(`features/${this.uid}/${appId}`).push(feature);
  }
}
