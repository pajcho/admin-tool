import { Injectable } from '@angular/core';
import { Adapter } from '../adapter';
import { Traveler } from './shared.model';

export enum RoomType {
  ONE_OCCUPANT_ROOM = 'ONE_OCCUPANT_ROOM',
  TWO_OCCUPANTS_ROOM = 'TWO_OCCUPANTS_ROOM',
}

interface RoomOccupant extends Traveler {
  userId: string;
  phoneNumber: string;
  companyName: string;
  emailConfirmation: boolean;
  costCenterId: string;
  primaryOccupant: boolean;
}

export interface HotelRoom {
  requestedRoomId: string;
  adults: number;
  children: number;
  infants: number;
  bedType: string;
  occupants: RoomOccupant[];
  roomName: string;
}

export class HotelRoomModel implements HotelRoom {
  constructor(
    public requestedRoomId: string,
    public adults: number,
    public children: number,
    public infants: number,
    public bedType: string,
    public occupants: RoomOccupant[],
    public roomName: string
  ) {}

  get roomType(): RoomType {
    switch (this.adults) {
      case 1:
        return RoomType.ONE_OCCUPANT_ROOM;
      case 2:
        return RoomType.TWO_OCCUPANTS_ROOM;
      default:
        return undefined;
    }
  }

  get isSingleRoom(): boolean {
    return this.roomType === RoomType.ONE_OCCUPANT_ROOM;
  }

  /**
   * Some old providers like HOTELBED could not be migrated. We have to keep
   * this fallback in case we are looking at some old hotel bookings
   */
  get name(): string {
    if (this.roomName) return this.roomName;

    return this.isSingleRoom ? 'Single room' : 'Double room';
  }
}

@Injectable({
  providedIn: 'root',
})
export class HotelRoomAdapter implements Adapter<HotelRoom> {
  adapt(item: HotelRoom): HotelRoomModel {
    return new HotelRoomModel(
      item?.requestedRoomId,
      item?.adults,
      item?.children,
      item?.infants,
      item?.bedType,
      item?.occupants,
      item?.roomName
    );
  }
}
