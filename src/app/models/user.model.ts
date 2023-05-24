import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export enum UserType {
  // NOTE: Sorted from lowest to highest level
  AGENT = 'AGENT',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
}

export interface User {
  id: string;
  token?: string;
  username: string;
  type: UserType;
  firstName: string;
  lastName: string;
  phone: string;
  password: string | null;
  disabled: boolean;
}

export class UserModel implements User {
  constructor(
    public id: string,
    public token: string | null,
    public username: string,
    public type: UserType,
    public firstName: string,
    public lastName: string,
    public phone: string,
    public password: string | null,
    public disabled: boolean
  ) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  isAgent(): boolean {
    return this.type === UserType.AGENT;
  }

  isAdmin(): boolean {
    return this.type === UserType.ADMIN;
  }

  isSuperAdmin(): boolean {
    return this.type === UserType.SUPER_ADMIN;
  }

  hasAdminAccess(): boolean {
    return this.isAdmin() || this.isSuperAdmin();
  }

  // User can only update equal or lover levels of users
  hasPermissionToUpdate(type: UserType): boolean {
    const levels = Object.keys(UserType);

    return levels.indexOf(this.type) >= levels.indexOf(type);
  }
}

@Injectable({
  providedIn: 'root',
})
export class UserAdapter implements Adapter<User> {
  adapt(item: User): UserModel {
    return new UserModel(
      item?.id,
      item?.token,
      item?.username,
      item?.type,
      item?.firstName,
      item?.lastName,
      item?.phone,
      item?.password,
      item?.disabled
    );
  }
}
