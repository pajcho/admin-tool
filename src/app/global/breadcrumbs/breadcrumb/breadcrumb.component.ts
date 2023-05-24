import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'dib-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent {
  @Input() label: string;
  @Input() route: string = null;
  @Input() title: string = null;
  @Input() loading = false;
}
