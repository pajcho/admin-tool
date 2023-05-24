import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dibCamelCaseToSpaces' })
export class DibCamelCaseToSpacesPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    // Convert camel case text to sentence case text and capitalize first letter
    // "companyName" will become "Company Name"
    return value
      .replace(/([A-Z])/g, (match) => ` ${match}`)
      .replace(/^./, (match) => match.toUpperCase())
      .trim();
  }
}
