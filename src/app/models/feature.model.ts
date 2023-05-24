import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export interface Feature {
  id: string;
  description: string;
  enabled: boolean;
}

export class FeatureModel implements Feature {
  constructor(public id: string, public description: string, public enabled: boolean) {}
}

@Injectable({
  providedIn: 'root',
})
export class FeatureAdapter implements Adapter<Feature> {
  adapt(item: Feature): FeatureModel {
    return new FeatureModel(item.id, item.description, item.enabled);
  }
}
