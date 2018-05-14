export interface FeatureList {
  id: number;
  features: Feature[];
}

export interface Feature {
  name: string;
  number: number;
}

export interface Requirement {
  number: number;
  name: string;
  done: boolean;
}
