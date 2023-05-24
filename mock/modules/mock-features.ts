import { environment } from '../../src/environments/environment';
import { MockRequest } from '../mock-request.model';
import { createSuccessResponse } from '../../src/app/global/interfaces/response.interface';
import { Feature } from '../../src/app/models/feature.model';

const mockFeatures: MockRequest[] = [
  {
    method: 'GET',
    url: '/api/tmcc/features',
    getResponse: (): Feature[] => [
      {
        id: 'ff-accounting-integration',
        description: 'Enables sending transactions and customers to accounting mediator service.',
        enabled: true,
      },
      {
        id: 'ff-customer-registration-campaign',
        description: 'Enables the customer registration campaign',
        enabled: true,
      },
      {
        id: 'ff-flight-addon',
        description: 'Enable flight addon feature',
        enabled: true,
      },
      {
        id: 'ff-train',
        description: 'Enable train feature',
        enabled: true,
      },
    ],
  },
  {
    method: 'PATCH',
    url: '/api/tmcc/features/{id}',
    getResponse: () => createSuccessResponse,
  },
];

export function getMockFeatureRequests(): MockRequest[] {
  return environment.mock.features ? mockFeatures : [];
}
