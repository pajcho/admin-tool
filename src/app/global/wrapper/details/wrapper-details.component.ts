import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'dib-wrapper-details',
  templateUrl: './wrapper-details.component.html',
  styleUrls: ['./wrapper-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapperDetailsComponent {
  @Input() loading = false;
  @Input() item: any;

  /**
   * If item is not supplied we will just display the content wrapper
   * This is useful for simple pages with mostly static content
   *
   * Used like this:
   * <dib-wrapper-details>
   *   <ng-container slot="content">This is some content!!</ng-container>
   * </dib-wrapper-details>
   */
  get withItem() {
    return this.item !== undefined;
  }
}
