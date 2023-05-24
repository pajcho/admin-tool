import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Example Usage
<dib-wrapper-main>
</dib-wrapper-main>
*/
@Component({
  selector: 'dib-wrapper-main',
  templateUrl: './wrapper-main.component.html',
  styles: [':host { display: block; position: relative; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapperMainComponent {}
