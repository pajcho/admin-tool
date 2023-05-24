import { Component, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SystemMessageActions } from '../actions/system-messages.actions';
import { SystemMessage, SystemMessageModel, SystemMessageStatus } from '../models/system-message.model';
import { selectSystemMessages, selectSystemMessagesData } from '../reducers/system-messages.reducer';
import { ConfirmationDialogActions } from '../actions/confirmation-dialog.actions';
import { BaseListingComponent } from '../base-listing.component';
import { SystemMessageDialogComponent } from './system-message-dialog.component';
import { SystemMessageFormComponent } from './system-message-form.component';

@Component({
  selector: 'app-system-messages',
  templateUrl: './system-messages.component.html',
})
export class SystemMessagesComponent extends BaseListingComponent<SystemMessage> {
  systemMessages$ = this.store.select(selectSystemMessages);
  tableDataSource$ = this.store.select(selectSystemMessagesData);

  statuses: SystemMessageStatus[] = [SystemMessageStatus.OPENED, SystemMessageStatus.CLOSED];

  constructor(public injector: Injector, public dialog: MatDialog) {
    super(injector);
  }

  ngOnInit(): void {
    this.sortActive = 'activatedAt';
    this.sortDirection = 'desc';
    this.columns = ['id', 'description', 'activatedAt', 'duration', 'status', 'closedBy', 'closedAt', 'actions'];
    this.loadAction = SystemMessageActions.loadSystemMessages;
    this.reloadOnActions = [
      SystemMessageActions.saveSystemMessageSuccess,
      SystemMessageActions.deleteSystemMessageSuccess,
    ];

    super.ngOnInit();

    // Display OPENED messages by default
    this.filter('status', SystemMessageStatus.OPENED);
  }

  delete(item: SystemMessageModel | null): void {
    this.store.dispatch(
      ConfirmationDialogActions.show({
        data: {
          template: `
            <div>Are you sure you want to delete system message?</div>
            <div class='font-mono text-2xs p-3 mt-4 bg-dib-gray-100 flex flex-col rounded'>
              <span>Message ID:</span>
              <span class="text-gray-500">${item.id}</span>
            </div>
            <div class='mt-3'>This action can not be undone.</div>
          `,
          confirm: {
            label: 'Delete',
            color: 'warn',
          },
        },
        ok: () => {
          this.store.dispatch(SystemMessageActions.deleteSystemMessage({ data: item }));
        },
      })
    );
  }

  closeSystemMessage(item: SystemMessageModel | null): void {
    this.store.dispatch(
      ConfirmationDialogActions.show({
        data: {
          template: `
            <div>Are you sure you want to close system message?</div>
            <div class='font-mono text-2xs p-3 mt-4 bg-dib-gray-100 flex flex-col rounded'>
              <span>Message ID:</span>
              <span class="text-gray-500">${item.id}</span>
            </div>
            <div class='mt-3'>This action can not be undone.</div>
          `,
          confirm: {
            label: 'Mark as closed',
            color: 'warn',
          },
        },
        ok: () => {
          this.store.dispatch(
            SystemMessageActions.saveSystemMessage({ data: { ...item, status: SystemMessageStatus.CLOSED } })
          );
        },
      })
    );
  }

  showMessageDetails(item: SystemMessageModel | null): void {
    this.dialog.open(SystemMessageDialogComponent, {
      maxWidth: 800,
      minWidth: 500,
      data: { item },
    });
  }

  save(message: SystemMessageModel | null): void {
    const dialogRef = this.dialog.open(SystemMessageFormComponent, {
      data: { message },
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed && confirmed !== false) {
        this.store.dispatch(SystemMessageActions.saveSystemMessage({ data: confirmed }));
      }
    });
  }
}
