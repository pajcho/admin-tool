import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dibDashesToSpaces' })
export class DibDashesToSpacesPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    // Replace any combination of dashes and underscore characters with spaces
    // "AT_RISK" will become "AT RISK"
    // "AT___RISK" will become "AT RISK"
    // "AT---__--RISK" will become "AT RISK"
    return value.replace(/[_-]+/g, ' ').trim();
  }
}
