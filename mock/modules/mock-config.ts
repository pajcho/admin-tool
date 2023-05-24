import {environment} from '../../src/environments/environment';
import {MockRequest} from '../mock-request.model';

const mockConfig: MockRequest[] = [
  {
    method: 'GET',
    url: `${environment.api.dtms}/api/tenant/config`,
    getResponse: () => {
      return {
        data: {
          key: 'dib',
          name: 'DIB Travel',
          config: {},
          primary: true,
          topLevelDomainCW: "example.com",
          topLevelDomainTMCC: "admin-tool.example.com"
        },
        status: {code: 200, description: null, messageCode: null, message: null},
      };
    },
  },
  {
    method: 'GET',
    url: `${environment.api.dtms}/api/tenants`,
    getResponse: () => {
      return [];
    },
  },
];

export function getMockConfigRequests(): MockRequest[] {
  return environment.mock.config ? mockConfig : [];
}
