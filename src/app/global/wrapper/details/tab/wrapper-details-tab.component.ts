import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/** Example Usage
<dib-wrapper-details-tab>
  Tab title
  <ng-container slot="badge">5</ng-container>
</dib-wrapper-details-tab>
 */
@Component({
  selector: 'dib-wrapper-details-tab',
  templateUrl: './wrapper-details-tab.component.html',
  styleUrls: ['./wrapper-details-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapperDetailsTabComponent {
  @Input() type: 'header' | 'default' = 'default';
  @Input() route: string = null;
  @Input() title: string = null;
  @Input() active = false;
  @Input() loading = false;
}
