import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export interface TravelerCostCenterResponse {
  customerId: string;
  // TODO: Check if we need CompanyCostCenterRequest[] here
  companyCostCenterDTOList: CostCenter[];
}

export interface CostCenter {
  id: string;
  name: string;
  description: string;
  userIds: string[];
  groupIds: string[];
  createdAt: string; // TODO: BE to rename this prop from created to createdAt
  deletedAt: string; // TODO: BE to rename this prop from deleteAt to deletedAt
  archived: boolean;
}

export interface CostCentersSettings {
  areCostCentersMandatory: boolean;
  areCostCentersVisibleToAll: boolean;
  costCenterExists: boolean;
}

export class TravellerCostCentersModel {
  constructor(public customerId: string, public costCenters: CostCenter[]) {}
}

@Injectable({
  providedIn: 'root',
})
export class TravellerCostCentersAdapter implements Adapter<TravellerCostCentersModel> {
  adapt(item: TravelerCostCenterResponse): TravellerCostCentersModel {
    return new TravellerCostCentersModel(item.customerId, item.companyCostCenterDTOList);
  }
}
