import { Component, Input } from '@angular/core';

@Component({
  selector: 'dib-plural',
  templateUrl: 'plural.template.html',
})
export class PluralComponent {
  @Input() from: number;
  @Input() single: string;
  @Input() multiple: string;
}
