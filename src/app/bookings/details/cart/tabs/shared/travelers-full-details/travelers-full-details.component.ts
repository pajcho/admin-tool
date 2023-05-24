import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Traveler } from '../../../../../../models/cart-items/shared.model';

@Component({
  selector: 'app-travelers-full-details',
  templateUrl: './travelers-full-details.component.html',
  styles: [':host { @apply grid grid-flow-row auto-rows-min gap-2; }'],
  styleUrls: ['./travelers-full-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TravelersFullDetailsComponent implements OnInit {
  @Input() title = 'Traveler Details';
  @Input() travelers: Traveler[];
  @Input() contentTpl: TemplateRef<HTMLElement>;

  constructor() {}

  ngOnInit(): void {}
}
