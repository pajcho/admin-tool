import { Pipe, PipeTransform } from '@angular/core';
import { differenceInYears, format, formatDistanceToNow } from 'date-fns';

type DibDateType =
  | 'ui'
  | 'uiWithTime'
  | 'time'
  | 'server'
  | 'distanceToNow'
  | 'yearsOld'
  | 'productDetails'
  | 'productDetailsShort'
  | 'productDetailsWithTime';

@Pipe({ name: 'dibDate' })
export class DibDatePipe implements PipeTransform {
  transform(date: string, type?: DibDateType): string {
    return formatDibDate(date, type);
  }
}

// Export function so it can be used directly as well
export function formatDibDate(date: string, type?: DibDateType): string {
  if (!date) return '';

  switch (type) {
    case 'productDetailsShort':
      // Jan 29, 2021
      return format(new Date(date), 'LLL dd, yyyy');
    case 'productDetails':
      // Jan 29, 2021 (Fri)
      return format(new Date(date), 'LLL dd, yyyy (EEE)');
    case 'productDetailsWithTime':
      // Jan 29, 2021 (Fri) at 06:15
      return format(new Date(date), "LLL dd, yyyy (EEE) 'at' HH:mm");
    case 'yearsOld':
      // 21 years old
      return `${differenceInYears(new Date(), new Date(date))} years old`;
    case 'distanceToNow':
      // 6 days ago
      return formatDistanceToNow(new Date(date), { addSuffix: true });
    case 'server':
      // 2021-03-08T19:40:42.593+01:00
      return format(new Date(date), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
    case 'time':
      // 06:15
      return format(new Date(date), 'HH:mm');
    case 'uiWithTime':
      // 2020-12-18 06:15
      return format(new Date(date), 'yyyy-MM-dd HH:mm');
    case 'ui':
    default:
      // 2020-12-18
      return format(new Date(date), 'yyyy-MM-dd');
  }
}
