import { Component } from '@angular/core';
import { App } from './app-list/app.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor() {}

  currentApp: App;

  onAppSelected(newApp: App) {
    this.currentApp = newApp;
  }
}
