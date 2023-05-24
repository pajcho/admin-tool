import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/** Example Usage
<dib-wrapper-listing>
  <ng-container slot="title"></ng-container>
  <ng-container slot="filters"></ng-container>
  <ng-container slot="total"></ng-container>
  <ng-container slot="actions"></ng-container>
  <ng-container slot="table"></ng-container>
  <ng-container slot="pagination"></ng-container>
</dib-wrapper-listing>
*/
@Component({
  selector: 'dib-wrapper-listing',
  templateUrl: './wrapper-listing.component.html',
  styleUrls: ['./wrapper-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapperListingComponent {
  // Padded option is used on listing page and has some additional spacing around the content
  // Un-padded version is to be used when embedded inside other paged, ie. details page
  @Input() padded = true;
}
