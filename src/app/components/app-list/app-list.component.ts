import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { Router } from '@angular/router';

import { App } from '../../models/app.model';
import { appData } from './apps';
import { AppListService } from '../../shared/services/app-list.service';
import { Store } from '../../../store';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit, OnDestroy {
  @Output() appSelected: EventEmitter<App> = new EventEmitter<App>();
  @Output() appCreated: EventEmitter<App>;

  apps$: Observable<App[]>;
  subscription: Subscription;

  apps: App[];
  selectedApp: App;
  creatingApp = false;
  editing = false;
  newAppName = '';
  numberOfApps: number;

  constructor(
    private store: Store,
    private appsService: AppListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.apps$ = this.store
      .select<App[]>('apps')
      .pipe(tap(apps => (this.numberOfApps = apps ? apps.length : 0)));
    this.subscription = this.appsService.apps$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  navigateToApp(app: App) {
    if (!this.editing) {
      this.selectedApp = app;
      this.store.set('app', app);
      this.router.navigate(['../apps', app.key]);
    }
  }

  isAppActive(app) {
    return this.selectedApp && app.name === this.selectedApp.name;
  }

  toggleCreateApp() {
    this.creatingApp = !this.creatingApp;
  }

  toggleEditing() {
    this.editing = !this.editing;
  }

  async createApp() {
    await this.appsService.addApp({
      id: this.numberOfApps + 1,
      name: this.newAppName
    });

    this.newAppName = '';
    this.toggleCreateApp();
  }

  async deleteApp(app: App) {
    await this.appsService.deleteApp(app.key);
  }
}
