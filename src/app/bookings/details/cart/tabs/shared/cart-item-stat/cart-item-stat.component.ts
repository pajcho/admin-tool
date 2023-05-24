import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../../../../../base.component';

@Component({
  selector: 'app-cart-item-stat',
  templateUrl: './cart-item-stat.component.html',
})
export class CartItemStatComponent extends BaseComponent {
  @Input() label: string;
}
