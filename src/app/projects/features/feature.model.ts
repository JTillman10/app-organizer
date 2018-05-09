export interface FeatureList {
  id: number;
  features: Feature[];
}

export interface Feature {
  name: string;
  number: number;
  requirements: Requirement[];
}

export interface Requirement {
  id: number;
  name: string;
  done: boolean;
}
