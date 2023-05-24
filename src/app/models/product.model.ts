import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export interface Product {
  id: string;
  name: string;
  base: boolean;
  active: boolean;
}

export class ProductModel implements Product {
  constructor(public id: string, public name: string, public base: boolean, public active: boolean) {}
}

@Injectable({
  providedIn: 'root',
})
export class ProductAdapter implements Adapter<Product> {
  adapt(item: Product): ProductModel {
    return new ProductModel(item?.id, item?.name, !!item?.base, !!item?.active);
  }
}
