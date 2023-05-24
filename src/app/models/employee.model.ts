import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

/**
 * TODO: Align these props with {@link CompanyUser} interface props
 *  Ideally, these two models should be identical and merged together
 */
export interface Employee {
  id: string;
  email: string;
  userType: string;
  firstName: string;
  lastName: string;
  cellphone: string;
  address1: string;
  address2: string;
  zipCode: string;
  city: string;
  country: string;
  stripeCustomerId: any;
  customerType: string;
  companyName: string;
  userTitle: string;
  allowAgentOverride: boolean;

  // We can receive this prop sometimes when matching employees with travellers
  externalId?: string;
}

export class EmployeeModel implements Employee {
  constructor(
    public id: string,
    public email: string,
    public userType: string,
    public firstName: string,
    public lastName: string,
    public cellphone: string,
    public address1: string,
    public address2: string,
    public zipCode: string,
    public city: string,
    public country: string,
    public stripeCustomerId: any,
    public customerType: string,
    public companyName: string,
    public userTitle: string,
    public allowAgentOverride: boolean,

    // We can receive this prop sometimes when matching employees with travellers
    public externalId?: string
  ) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

@Injectable({ providedIn: 'root' })
export class EmployeeAdapter implements Adapter<Employee> {
  adapt(item: Record<any, any>): EmployeeModel {
    return new EmployeeModel(
      item?.id,
      item?.email,
      item?.userType,
      item?.firstName,
      item?.lastName,
      item?.cellphone,
      item?.address1,
      item?.address2,
      item?.zipCode,
      item?.city,
      item?.country,
      item?.stripeCustomerId,
      item?.customerType,
      item?.companyName,
      item?.userTitle,
      item?.allowAgentOverride,
      item?.externalId
    );
  }
}
