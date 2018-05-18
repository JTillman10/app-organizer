import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Store } from '../../../store';

import { Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import 'rxjs-compat/add/operator/do';

import { App } from '../../models/app.model';

import { AuthService } from '../../auth/shared/services/auth/auth.service';

@Injectable()
export class AppListService {
  apps$: Observable<App[]> = this.db
    .list<App>(`apps/${this.uid}`)
    .snapshotChanges()
    .map(actions => {
      return actions.map(action => ({
        key: action.key,
        ...action.payload.val()
      }));
    })
    .do(next => this.store.set('apps', next));

  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {}

  get uid() {
    return this.authService.user.uid;
  }

  getApps() {
    return this.db.list(`apps/${this.uid}`);
  }

  addApp(app: App) {
    return this.db.list(`apps/${this.uid}`).push(app);
  }

  deleteApp(key: string) {
    return this.db.list(`apps/${this.uid}`).remove(key);
  }
}
