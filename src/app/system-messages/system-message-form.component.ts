import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '../base.component';
import { SystemMessage, SystemMessageAdapter, SystemMessageModel } from '../models/system-message.model';

@Component({
  selector: 'app-system-message-form',
  templateUrl: './system-message-form.component.html',
})
export class SystemMessageFormComponent extends BaseComponent implements OnInit {
  public form: UntypedFormGroup;
  public message: SystemMessageModel;

  constructor(
    private formBuilder: UntypedFormBuilder,
    public dialogRef: MatDialogRef<SystemMessageFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: SystemMessage }
  ) {
    super();

    // Convert input to SystemMessageModel, so we have access to additional methods
    this.message = new SystemMessageAdapter().adapt(this.data.message);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      description: [this.message.description, [Validators.required]],
    });
  }

  get isUpdate(): boolean {
    return !!this.message.id;
  }

  public close(): SystemMessage {
    this.message.description = this.form.get('description').value;

    return this.message;
  }
}
