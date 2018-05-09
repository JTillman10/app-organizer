import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { App } from './app.model';
import { appData } from './apps';

@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {
  @Output() appSelected: EventEmitter<App> = new EventEmitter<App>();
  @Output() appCreated: EventEmitter<App>;

  apps: App[];
  selectedApp: App;
  creatingApp = false;
  newAppName = '';

  constructor() {}

  ngOnInit() {
    this.apps = appData;
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

  createApp() {
    this.apps.push({
      id: this.apps.length + 1,
      name: this.newAppName
    });
    this.newAppName = '';
    this.toggleCreateApp();
  }
}
