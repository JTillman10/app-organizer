import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { App } from './app.model';
import { appData } from './apps';
import { AppListService } from '../../shared/services/app-list.service';
import { Store } from '../../../store';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit, OnDestroy {
  @Output() appSelected: EventEmitter<App> = new EventEmitter<App>();
  @Output() appCreated: EventEmitter<App>;

  apps$: Observable<App[]>;
  subscription: Subscription;

  apps: App[];
  selectedApp: App;
  creatingApp = false;
  newAppName = '';
  numberOfApps: number;

  constructor(private store: Store, private appsService: AppListService) {}

  ngOnInit() {
    this.apps$ = this.store
      .select<App[]>('apps')
      .pipe(tap(apps => (this.numberOfApps = apps ? apps.length : 0)));
    this.subscription = this.appsService.apps$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  selectApp(app) {
    this.selectedApp = app;
    this.appSelected.emit(app);
  }

  isAppActive(app) {
    return this.selectedApp && app.name === this.selectedApp.name;
  }

  toggleCreateApp() {
    this.creatingApp = !this.creatingApp;
  }

  async createApp() {
    await this.appsService.addApp({
      id: this.numberOfApps + 1,
      name: this.newAppName
    });
    // this.apps.push({
    //   id: this.apps.length + 1,
    //   name: this.newAppName
    // });
    this.newAppName = '';
    this.toggleCreateApp();
  }
}
