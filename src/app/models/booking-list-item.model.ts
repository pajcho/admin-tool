import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { BookingStatus } from './booking.model';

export interface BookingListItem {
  cartId: string;
  tripId: string;
  status: BookingStatus;
  companyName: string;
  travelers: string[];
  bookerName: string;
  startDate: string;
  endDate: string;
  price?: string;
}

export class BookingListItemModel implements BookingListItem {
  constructor(
    public cartId: string,
    public tripId: string,
    public status: BookingStatus,
    public companyName: string,
    public travelers: string[],
    public bookerName: string,
    public startDate: string,
    public endDate: string,
    public price: string
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class BookingListItemAdapter implements Adapter<BookingListItem> {
  adapt(item: Record<any, any>): BookingListItemModel {
    return new BookingListItemModel(
      item?.cartId,
      item?.tripId,
      item?.status,
      item?.companyName,
      item?.travelers.filter((traveler) => !!traveler), // Remove empty traveler values
      item?.bookerName,
      item?.startDate,
      item?.endDate,
      item?.price
    );
  }
}
