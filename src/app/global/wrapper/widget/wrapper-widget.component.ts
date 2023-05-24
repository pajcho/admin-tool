import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Example Usage
<dib-wrapper-widget>
  <ng-container slot="title"></ng-container>
  <ng-container slot="content"></ng-container>
</dib-wrapper-widget>
*/
@Component({
  selector: 'dib-wrapper-widget',
  templateUrl: './wrapper-widget.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapperWidgetComponent {}
