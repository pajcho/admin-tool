import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'dib-wrapper-listing-total',
  templateUrl: './wrapper-listing-total.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapperListingTotalComponent {
  @Input() total: number;
}
