import { environment } from '../../src/environments/environment';
import { MockRequest } from '../mock-request.model';
import { Country } from '../../src/app/models/country.model';

const mockCountries: MockRequest[] = [
  {
    method: 'GET',
    url: '/api/details/locations/countries',
    getResponse: (): Country[] => [
      {
        id: '110',
        name: 'Italy',
        code: 'IT',
        defaultCurrency: 'EUR',
      },
      {
        id: '167',
        name: 'Norway',
        code: 'NO',
        defaultCurrency: 'NOK',
      },
      {
        id: '190',
        name: 'Serbia',
        code: 'RS',
        defaultCurrency: 'RSD',
      },
      {
        id: '197',
        name: 'Sweden',
        code: 'SE',
        defaultCurrency: 'SEK',
      },
    ],
  },
];

export function getMockCountryRequests(): MockRequest[] {
  return environment.mock.countries ? mockCountries : [];
}
