import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseLayoutComponent } from '../base-layout.component';

@Component({
  selector: 'dib-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent extends BaseLayoutComponent {}
