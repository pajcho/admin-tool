import { Pipe, PipeTransform } from '@angular/core';
import { formatDuration, intervalToDuration, isEqual } from 'date-fns';
import { DibPriceFormatPipe } from './price-format.pipe';
import { CancellationPolicy } from '../../models/cart-items/shared.model';

@Pipe({
  name: 'dibCancellationPolicy',
  pure: true,
})
export class DibCancellationPolicyPipe implements PipeTransform {
  transform(policy: CancellationPolicy, bookingStarts: string | Date): string {
    return this.translateCancellationPolicy(policy, bookingStarts);
  }

  /**
   * TODO: [localize] Add translations
   * TODO: [localize] Add formatDuration() wrapper, so we can have duration translations as well
   *
   * Examples of what might this function return
   *  - Non-refundable within 60 minutes of pick-up time
   *  - 80% refundable up to 60 minutes prior to ride
   *  - Free cancellation up to 120 minutes prior to ride
   *  - Non-refundable within 60 minutes of pick-up time
   *  - 30 SEK refundable up to 60 minutes prior to ride
   *  - Free cancellation up to 120 minutes prior to ride
   */
  translateCancellationPolicy(policy: CancellationPolicy, bookingStarts: string | Date): string {
    let duration = formatDuration(
      intervalToDuration({
        start: new Date(policy.toDate),
        end: new Date(bookingStarts),
      })
    );

    if (isEqual(new Date(policy.toDate), new Date(bookingStarts))) {
      duration = formatDuration(
        intervalToDuration({
          start: new Date(policy.fromDate),
          end: new Date(bookingStarts),
        })
      );

      return `${this.getRefundAmount(policy)} within ${duration} of pick-up time`;
    }

    return `${this.getRefundAmount(policy)} up to ${duration} prior to ride`;
  }

  /**
   * TODO: [localize] Add translations
   *
   * Examples of what might this function return
   *  - Non-refundable
   *  - 80% refundable
   *  - 30 SEK refundable
   *  - Free cancellation
   */
  private getRefundAmount(policy: CancellationPolicy): string {
    // Full refund
    if (policy.fullRefundable) return 'Free cancellation';

    // Non refundable
    if (policy.refundAmount === 0) return 'Non-refundable';

    // Percentage refund
    if (Number.isFinite(policy.cancellationFeeDetails?.percent)) {
      return `${100 - policy.cancellationFeeDetails.percent}% refundable`;
    }

    // Fixed value refund
    const price = new DibPriceFormatPipe().transform(policy.refundAmount);
    return `${price} ${policy.currency} refundable`;
  }
}
