import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { pickBy, mapValues } from 'lodash-es';

@Component({
  selector: 'dib-quick-search-wrapper',
  templateUrl: './quick-search-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickSearchWrapperComponent {
  @Output() searchCompanies = new EventEmitter<Record<string, string>>();
  @Output() searchUsers = new EventEmitter<Record<string, string>>();
  @Output() searchBookings = new EventEmitter<Record<string, string>>();

  @Input() activeTab: 'companies' | 'users' | 'bookings' = 'companies';

  filterCompanies(params: Record<string, string>): void {
    const data = this.removeEmpty(params);

    if (Object.keys(data).length) {
      this.searchCompanies.emit(data);
    }
  }

  filterUsers(params: Record<string, string>): void {
    const data = this.removeEmpty(params);

    if (Object.keys(data).length) {
      this.searchUsers.emit(data);
    }
  }

  filterBookings(params: Record<string, string>): void {
    const data = this.removeEmpty(params);

    if (Object.keys(data).length) {
      this.searchBookings.emit(data);
    }
  }

  private removeEmpty(params: Record<string, string>): Record<string, string> {
    // Remove extra space and make sure we always have string values
    const data = mapValues(params, (value) => (value || '').trim());

    // Remove falsy values (null, undefined, etc.)
    return pickBy(data, (value) => !!value);
  }
}
