import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeIt from '@angular/common/locales/it';
import localeSrLatn from '@angular/common/locales/sr-Latn';
import localeSv from '@angular/common/locales/sv';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

registerLocaleData(localeEn, 'en');
registerLocaleData(localeSrLatn, 'sr');
registerLocaleData(localeIt, 'it');
registerLocaleData(localeSv, 'sv');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((error) => console.error(error));

// Log current application version in the console for easier debugging
// eslint-disable-next-line unicorn/prefer-module
const app = require('../package.json');

console.groupCollapsed(
  `Application loaded %cv${app.version}`,
  `font-weight: normal;
  font-size: 9px;
  color: white;
  background: forestgreen;
  padding: 2px 5px;
  border-radius: 3px;
  text-align: center`
);
console.log(`Application version: ${app.version}`);
console.groupEnd();
