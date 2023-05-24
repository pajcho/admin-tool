import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../reducers';
import { SystemMessageService } from '../services/system-message.service';
import { SystemMessage } from '../models/system-message.model';
import { GlobalActions } from '../actions/global.actions';
import { PaginationData } from '../models/pagination.model';
import { SystemMessageActions } from '../actions/system-messages.actions';

@Injectable()
export class SystemMessageEffects {
  loadSystemMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SystemMessageActions.loadSystemMessages),
      tap(() => this.store.dispatch(SystemMessageActions.loadSystemMessagesStart())),
      switchMap(({ params }) =>
        this.systemMessageService.list(params).pipe(
          map((response: { data: SystemMessage[]; pagination: PaginationData }) => {
            return SystemMessageActions.loadSystemMessagesSuccess({
              data: response.data,
              pagination: response.pagination,
            });
          }),
          catchError(() => {
            return of(
              SystemMessageActions.loadSystemMessagesError({
                error: 'System messages could not be loaded. Please try again.',
              })
            );
          })
        )
      )
    )
  );

  loadSystemMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SystemMessageActions.loadSystemMessage),
      tap(() => this.store.dispatch(SystemMessageActions.loadSystemMessageStart())),
      switchMap(({ id }) =>
        this.systemMessageService.getDetails(id).pipe(
          map((message: SystemMessage) => {
            return SystemMessageActions.loadSystemMessageSuccess({ data: message });
          }),
          catchError(() => {
            return of(
              SystemMessageActions.loadSystemMessageError({
                error: 'System message details could not be loaded. Please try again.',
              })
            );
          })
        )
      )
    )
  );

  saveSystemMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SystemMessageActions.saveSystemMessage),
      tap(() => this.store.dispatch(SystemMessageActions.saveSystemMessageStart())),
      switchMap(({ data }) =>
        this.systemMessageService.saveDetails(data).pipe(
          map((message) => {
            this.store.dispatch(GlobalActions.showSuccessMessage({ message: `System message details saved.` }));
            return SystemMessageActions.saveSystemMessageSuccess({ data: message });
          }),
          catchError(() => {
            return of(
              SystemMessageActions.saveSystemMessageError({
                error: 'System message details could not be saved. Please try again.',
              })
            );
          })
        )
      )
    )
  );

  deleteSystemMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SystemMessageActions.deleteSystemMessage),
      tap(() => this.store.dispatch(SystemMessageActions.deleteSystemMessageStart())),
      switchMap(({ data }) =>
        this.systemMessageService.delete(data).pipe(
          map(() => {
            this.store.dispatch(GlobalActions.showSuccessMessage({ message: `System message successfully deleted.` }));
            return SystemMessageActions.deleteSystemMessageSuccess({ data });
          }),
          catchError(() => {
            return of(
              SystemMessageActions.deleteSystemMessageError({
                error: 'System message could not be deleted. Please try again.',
              })
            );
          })
        )
      )
    )
  );

  showToast$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          SystemMessageActions.loadSystemMessagesError,
          SystemMessageActions.loadSystemMessageError,
          SystemMessageActions.saveSystemMessageError,
          SystemMessageActions.deleteSystemMessageError
        ),
        tap(({ error }) => {
          this.store.dispatch(GlobalActions.showErrorMessage({ message: error }));
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private systemMessageService: SystemMessageService
  ) {}
}
