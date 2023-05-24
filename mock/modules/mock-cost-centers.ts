import { environment } from '../../src/environments/environment';
import { MockRequest } from '../mock-request.model';
import { TravelerCostCenterResponse } from '../../src/app/models/cost-center.model';

const mockCostCenters: MockRequest[] = [
  {
    method: 'GET',
    url: '/api/tmcc/cost-centers/customers-cost-centers?customerIds={customerIds}',
    delay: 0,
    getResponse: ({ customerIds }, body): TravelerCostCenterResponse[] => {
      return customerIds.split(',').map((customerId, index) => ({
        customerId,
        companyCostCenterDTOList: [
          {
            id: '1b609047-3563-47df-9d4b-ed6c07a1b23d',
            name: `CostOne-${index + 1}`,
            description: '',
            createdAt: '2022-07-25T11:11:28',
            userIds: null,
            groupIds: null,
            deletedAt: null,
            archived: false,
          },
          {
            id: '2b609047-3563-47df-9d4b-ed6c07a1b23d',
            name: `CostTwo-${index + 1}`,
            description: '',
            createdAt: '2022-07-25T11:11:28',
            userIds: null,
            groupIds: null,
            deletedAt: null,
            archived: false,
          },
          {
            id: '3b609047-3563-47df-9d4b-ed6c07a1b23d',
            name: `CostThree-${index + 1}`,
            description: '',
            createdAt: '2022-07-25T11:11:28',
            userIds: null,
            groupIds: null,
            deletedAt: null,
            archived: false,
          },
        ],
      }));
    },
  },
];

export function getMockCostCentersRequests(): MockRequest[] {
  return environment.mock.costCenters ? mockCostCenters : [];
}
