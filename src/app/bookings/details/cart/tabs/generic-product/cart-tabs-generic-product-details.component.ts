import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../../../../base.component';
import { GenericProductModel } from '../../../../../models/cart-items/generic-product-booking.model';
import { productTypeIconsMap } from '../../../../../models/constants/product-type-icons.constants';

@Component({
  selector: 'app-cart-tabs-generic-product-details',
  templateUrl: './cart-tabs-generic-product-details.component.html',
  styles: [':host { display: block; }'],
})
export class CartTabsGenericProductDetailsComponent extends BaseComponent {
  @Input() data: GenericProductModel;

  productIcon(product: string): string {
    return productTypeIconsMap[product?.toLowerCase()] || productTypeIconsMap.default;
  }
}
