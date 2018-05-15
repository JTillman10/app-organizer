export interface Feature {
  name: string;
  number: number;
  requirements: Requirement[];
  key?: string;
}

export interface Requirement {
  number: number;
  name: string;
  done: boolean;
}
