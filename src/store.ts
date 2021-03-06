import { Observable, BehaviorSubject } from 'rxjs';
import { pluck, distinctUntilChanged } from 'rxjs/operators';

import { User } from './app/auth/shared/services/auth/auth.service';
import { App } from './app/models/app.model';
import { Feature } from './app/models/feature.model';

export interface State {
  user: User;
  apps: App[];
  app: App;
  features: Feature[];
  [key: string]: any;
}

const state: State = {
  user: undefined,
  apps: undefined,
  app: undefined,
  features: undefined
};

export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }

  set(name: string, value: any) {
    this.subject.next({ ...this.value, [name]: value });
  }
}
