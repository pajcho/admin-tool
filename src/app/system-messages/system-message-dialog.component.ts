import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseComponent } from '../base.component';
import { SystemMessageModel } from '../models/system-message.model';

@Component({
  selector: 'app-system-message-dialog',
  templateUrl: './system-message-dialog.component.html',
})
export class SystemMessageDialogComponent extends BaseComponent {
  public message: SystemMessageModel;

  constructor(
    public dialogRef: MatDialogRef<SystemMessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { item: SystemMessageModel }
  ) {
    super();

    this.message = this.data.item;
  }
}
