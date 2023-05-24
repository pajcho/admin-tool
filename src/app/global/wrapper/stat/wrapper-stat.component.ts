import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'dib-wrapper-stat',
  templateUrl: './wrapper-stat.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapperStatComponent {
  @Input() loading: boolean;
  @Input() count: number;
  @Input() link: string;
  @Input() title: string;
}
