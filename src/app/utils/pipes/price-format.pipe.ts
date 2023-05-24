import { Pipe, PipeTransform } from '@angular/core';

import { formatNumber } from '@angular/common';

@Pipe({
  name: 'dibPrice',
})
export class DibPriceFormatPipe implements PipeTransform {
  transform(value: string | number): string {
    // Handle null values differently than zeros
    if (value === null) return '';

    const numValue = Number(value);
    const numberFormat = Number.isInteger(numValue) ? '1.0-0' : '1.2-2';

    // TODO: [localize] Do we want to use different locales depending on the current language?
    return formatNumber(numValue, 'sv', numberFormat);
  }
}
