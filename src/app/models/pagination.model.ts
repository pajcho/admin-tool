import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export interface PaginationData {
  size: number;
  number: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
}

export interface PaginatedData<T> {
  data: T[];
  pagination: PaginationData;
}

export interface PaginatedResponse<T> {
  content: T[];
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

@Injectable({
  providedIn: 'root',
})
export class PaginatedDataAdapter<T> implements Adapter<PaginatedData<T>> {
  adapt(data: PaginatedResponse<T>): PaginatedData<T> {
    return {
      data: data.content,
      pagination: {
        size: data.pageSize,
        number: data.currentPage - 1, // We use 0 index for pagination
        numberOfElements: data.content.length,
        totalElements: data.totalItems,
        totalPages: data.totalPages,
      } as PaginationData,
    };
  }
}
