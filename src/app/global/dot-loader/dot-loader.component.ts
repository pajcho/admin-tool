import { Component, Input } from '@angular/core';

@Component({
  selector: 'dib-dot-loader',
  styleUrls: ['./dot-loader.style.scss'],
  templateUrl: 'dot-loader.template.html',
})
export class DotLoaderComponent {
  @Input() size: 'small' | 'default' = 'default';
  @Input() color: 'gray' | 'green' | 'current' = 'green';
}
