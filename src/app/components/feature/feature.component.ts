import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Feature } from '../../models/feature.model';

@Component({
  selector: 'feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  @Input() feature;

  @Output() update = new EventEmitter<Feature>();

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
          requirement: requirement.id,
          editing: false
        });
      });
    }
  }

  toggleEditing() {
    this.editing = !this.editing;
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
}