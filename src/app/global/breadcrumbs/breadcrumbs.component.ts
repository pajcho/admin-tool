import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dib-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {}
