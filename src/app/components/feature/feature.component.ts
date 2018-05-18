import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Feature } from '../../models/feature.model';

@Component({
  selector: 'feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  @Input() feature: Feature;

  @Output() update = new EventEmitter<Feature>();
  @Output() delete = new EventEmitter<Feature>();

  requirementsMap;
  featureNumber: number;
  featureName: string;
  editing = false;

  constructor() {}

  ngOnInit() {
    this.requirementsMap = [];
    if (this.feature.requirements) {
      this.feature.requirements.forEach(requirement => {
        this.requirementsMap.push({
          requirement: requirement.number,
          editing: false
        });
      });
    }
  }

  toggleEditing() {
    this.editing = !this.editing;
  }

  get requirementsDone() {
    if (this.feature.requirements) {
      return this.feature.requirements.filter(r => r.done).length;
    }
    return 0;
  }

  get requirementsDoneColor() {
    if (this.feature.requirements) {
      const percentage =
        this.requirementsDone / this.feature.requirements.length;
      if (percentage > 0.66) {
        return 'green';
      }
      if (percentage <= 0.33) {
        return 'red';
      }
      return '';
    }
    return 'red';
  }

  get requirementsDonePercentage() {
    if (this.feature.requirements) {
      return (
        this.requirementsDone /
        this.feature.requirements.length *
        100
      ).toFixed(2);
    } else {
      return 0;
    }
  }

  orderRequirements() {
    this.feature.requirements.sort((a, b) => {
      if (a.number < b.number) {
        return -1;
      }
      if (a.number > b.number) {
        return 1;
      }
      return 0;
    });
  }

  deleteRequirement(requirementNumber) {
    this.feature.requirements = this.feature.requirements.filter(
      r => r.number !== requirementNumber
    );
  }

  createRequirement() {
    if (!this.feature.requirements) {
      this.feature.requirements = [];
    }

    const requirementId = this.feature.requirements.length + 1;
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

  updateRequirement() {
    this.update.emit(this.feature);
  }

  deleteFeature() {
    this.delete.emit(this.feature);
  }
}
