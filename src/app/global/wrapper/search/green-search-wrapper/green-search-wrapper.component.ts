import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'dib-green-search-wrapper',
  templateUrl: './green-search-wrapper.component.html',
  animations: [
    // Animate elements height
    trigger('openClose', [
      state('open', style({})),
      state('close', style({ opacity: 0, height: 0 })),
      transition('open => close', [animate('200ms ease-in')]),
      transition('close => open', [animate('400ms cubic-bezier(.62,-0.11,.25,1.66)')]),
    ]),
    // Hide element by setting it to display none
    trigger('showHide', [
      state('show', style({})),
      state('hide', style({ opacity: 0, display: 'none' })),
      transition('show => hide', [animate(0)]),
      transition('hide => show', [animate('200ms ease-out')]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GreenSearchWrapperComponent {
  isOpen = false;

  @Output() searchCompanies = new EventEmitter<Record<string, string>>();
  @Output() searchUsers = new EventEmitter<Record<string, string>>();
  @Output() searchBookings = new EventEmitter<Record<string, string>>();

  @Input() filters: Record<string, string> = {};
  @Input() activeTab: 'companies' | 'users' | 'bookings' = 'companies';

  /**
   * Convert object into array of values to be used in ngFor
   *
   * { searchColumn: 'query' } => [{ name: 'searchColumn', value: 'query' }]
   */
  get selectedFilters(): { name: string; value: string }[] {
    // TODO: find a better way to move this to the module component
    //  level so that every module can have different ignore list
    const ignoreFilters = new Set(['referenceType']);

    return (
      Object.keys(this.filters)
        // Do not display ignored filters in the list of selected filters
        .filter((filter) => !ignoreFilters.has(filter))
        .map((name) => ({ name, value: this.filters[name] }))
    );
  }

  toggleSearch(): void {
    this.isOpen = !this.isOpen;
  }

  filterCompanies(params: Record<string, string>): void {
    this.searchCompanies.emit(params);
  }

  filterUsers(params: Record<string, string>): void {
    this.searchUsers.emit(params);
  }

  filterBookings(params: Record<string, string>): void {
    this.searchBookings.emit(params);
  }
}
