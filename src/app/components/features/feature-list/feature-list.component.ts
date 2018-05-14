import { Component, Input } from '@angular/core';

@Component({
  selector: 'feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.css']
})
export class FeatureListComponent {
  @Input() features;

  constructor() {}
}
