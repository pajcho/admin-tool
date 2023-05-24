import { PaginatedResponse } from '../../models/pagination.model';

export interface ApiResponse {
  errors: [];
  valid: boolean;
}

export const createSuccessResponse = { errors: [], valid: true } as ApiResponse;
export function createFullApiResponse<T>(content: T[], page = 1, pageSize = 10, total = 10): PaginatedResponse<T> {
  return {
    content,
    currentPage: page,
    pageSize,
    totalItems: total,
    totalPages: Math.ceil(total || 10 / content.length),
  };
}
