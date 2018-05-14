import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnChanges {
  @Input() feature;

  requirementsMap;
  featureNumber: number;
  featureName: string;

  constructor() {}

  ngOnChanges(changes) {
    if (changes.feature) {
      this.requirementsMap = [];
      // this.feature.requirements.forEach(requirement => {
      //   this.requirementsMap.push({
      //     requirement: requirement.id,
      //     editing: false
      //   });
      // });
    }
  }

  deleteRequirement(requirementId) {
    this.feature.requirements = this.feature.requirements.filter(
      r => r.id !== requirementId
    );
  }

  createRequirement() {
    const requirementId =
      this.feature.requirements[this.feature.requirements.length - 1].id + 1;
    this.feature.requirements.push({
      number: requirementId,
      name: '',
      done: false
    });
    this.requirementsMap.push({
      requirement: requirementId,
      editing: true
    });
  }
}
