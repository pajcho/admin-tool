import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { BillingProfile, BillingProfileAdapter, BillingProfileModel } from './billing-profile.model';
import { LodgeCard, LodgeCardAdapter, LodgeCardModel } from './lodge-card.model';

// TODO: There are other props we get through the API but there are not used for now
export interface PaymentOptionsResponse {
  billings: BillingProfile[];
  lodgeCards: LodgeCard[];
}

export interface PaymentOptions {
  billingProfiles: BillingProfile[];
  lodgeCards: LodgeCard[];
}

export class PaymentOptionsModel implements PaymentOptions {
  constructor(public billingProfiles: BillingProfileModel[], public lodgeCards: LodgeCardModel[]) {}
}

@Injectable({
  providedIn: 'root',
})
export class PaymentOptionsAdapter implements Adapter<PaymentOptions> {
  adapt(item: PaymentOptions): PaymentOptionsModel {
    return new PaymentOptionsModel(
      (item?.billingProfiles || []).map((item) => new BillingProfileAdapter().adapt(item)),
      (item?.lodgeCards || []).map((item) => new LodgeCardAdapter().adapt(item))
    );
  }
}
