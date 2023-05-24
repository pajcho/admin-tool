import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export enum CompanyUserStatus {
  PENDING = 'PENDING', // User is created but invitation email is not sent
  INVITED = 'INVITED', // Invitation email is sent to the user
  ACCEPTED = 'ACCEPTED', // User has used the email link and has activated profile by setting up a password
  EXPIRED = 'EXPIRED', // Invitation email is sent but token is expired before it is used
}

export enum CompanyUserRole {
  ADMIN = 'ADMIN',
  TRAVELLER = 'TRAVELLER',
}

export enum TravelDocumentType {
  PASSPORT = 'PASSPORT',
  ID_CARD = 'ID_CARD',
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export interface TravelDocument {
  id: string;
  customerId: string;
  idNumber: string;
  issuingDate: string;
  expiryDate: string;
  firstName: string;
  lastName: string;
  type: TravelDocumentType;
  dateOfBirth: string;
  countryOfIssuance: string;
  gender: Gender;
  nationality: string;
  defaultDocument: boolean;
  completed: boolean;
}

export interface CompanyUser {
  id: string;
  role: CompanyUserRole;
  active: boolean;
  status: CompanyUserStatus;
  birthDate: string;
  createdDate: string;
  username: string;
  firstname: string;
  lastname: string;
  phone: string;
  address: string;
  city: string;
  zipcode: string;
  country: string;
  language: string;
  currency: string;
  agentNote: string;
  companyId: string;
  companyName: string;
  travelDocuments: TravelDocument[];
}

export class CompanyUserModel implements CompanyUser {
  constructor(
    public id: string,
    public role: CompanyUserRole,
    public active: boolean,
    public status: CompanyUserStatus,
    public birthDate: string,
    public createdDate: string,
    public username: string,
    public firstname: string,
    public lastname: string,
    public phone: string,
    public address: string,
    public city: string,
    public zipcode: string,
    public country: string,
    public language: string,
    public currency: string,
    public agentNote: string,
    public companyId: string,
    public companyName: string,
    public travelDocuments: TravelDocument[]
  ) {}

  get fullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }

  // Try to get date of birth from the object or one of the documents
  get dateOfBirth(): string {
    return this.birthDate || this.idCard?.dateOfBirth || this.passport?.dateOfBirth;
  }

  get idCard(): TravelDocument {
    return this.travelDocuments.find((item) => item.type === TravelDocumentType.ID_CARD);
  }

  get passport(): TravelDocument {
    return this.travelDocuments.find((item) => item.type === TravelDocumentType.PASSPORT);
  }
}

@Injectable({ providedIn: 'root' })
export class CompanyUserAdapter implements Adapter<CompanyUser> {
  adapt(item: Record<any, any>): CompanyUserModel {
    return new CompanyUserModel(
      item?.id,
      item?.role,
      item?.active,
      item?.status,
      item?.birthDate,
      item?.createdDate,
      item?.username,
      item?.firstname,
      item?.lastname,
      item?.phone,
      item?.address,
      item?.city,
      item?.zipcode,
      item?.country,
      item?.language,
      item?.currency,
      item?.agentNote,
      item?.companyId,
      item?.companyName,
      item?.travelDocuments || []
    );
  }
}
