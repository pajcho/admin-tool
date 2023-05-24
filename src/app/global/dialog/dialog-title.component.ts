import { Component, Input } from '@angular/core';

@Component({
  selector: 'dib-dialog-title',
  templateUrl: 'dialog-title.template.html',
})
export class DialogTitleComponent {
  @Input() closable = true;
}
