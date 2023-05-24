import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CountryActions } from './actions/countries.actions';
import { AppState } from './reducers';
import { BaseComponent } from './base.component';
import { AppInitializerService } from './services/app-initializer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseComponent implements OnInit {
  constructor(private store: Store<AppState>, private appInitializer: AppInitializerService) {
    super();

    appInitializer.init();
  }

  ngOnInit(): void {
    this.store.dispatch(CountryActions.loadCountries());
  }
}
