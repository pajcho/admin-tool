import { Injectable } from '@angular/core';
import { formatDistanceStrict } from 'date-fns';
import { Adapter } from './adapter';

export enum SystemMessageStatus {
  OPENED = 'OPENED',
  CLOSED = 'CLOSED',
}

export interface SystemMessage {
  id: string;
  description: string;
  activatedAt: string;
  // Will only have value if a message is closed
  closedAt?: string;
  // Will only have value if a message is closed
  closedBy?: string;
  status: SystemMessageStatus;
}

export class SystemMessageModel implements SystemMessage {
  constructor(
    public id: string,
    public description: string,
    public activatedAt: string,
    public closedAt: string,
    public closedBy: string,
    public status: SystemMessageStatus
  ) {}

  get durationOpened(): string {
    const endDate = this.isClosed() ? new Date(this.closedAt) : new Date();

    // TODO: Maybe handle small durations differently and display custom format
    //  For example if its less than one day we can have it as (12 hours 43 minutes)
    //  If its longer we keep as it is and display just the largest unit, ie. 14 months will be displayed as (1 year)
    return formatDistanceStrict(new Date(this.activatedAt), endDate);
  }

  isOpen(): boolean {
    return this.status === SystemMessageStatus.OPENED;
  }

  isClosed(): boolean {
    return this.status === SystemMessageStatus.CLOSED;
  }
}

@Injectable({
  providedIn: 'root',
})
export class SystemMessageAdapter implements Adapter<SystemMessage> {
  adapt(item: SystemMessage): SystemMessageModel {
    return new SystemMessageModel(
      item?.id,
      item?.description,
      item?.activatedAt,
      item?.closedAt,
      item?.closedBy,
      item?.status || SystemMessageStatus.OPENED
    );
  }
}
