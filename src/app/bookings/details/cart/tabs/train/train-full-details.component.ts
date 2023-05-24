import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseComponent } from '../../../../../base.component';
import { TrainBookingModel } from '../../../../../models/cart-items/train-booking.model';
import { TrainTravelerModel } from '../../../../../models/cart-items/train-traveler.model';
import { TrainJourneyModel } from '../../../../../models/cart-items/train-journey.model';
import { TrainJourneyItineraryModel } from '../../../../../models/cart-items/train-journey-intinerary.model';
import { TrainJourneyItinerarySegmentModel } from '../../../../../models/cart-items/train-journey-intinerary-segment.model';

@Component({
  selector: 'app-train-full-details',
  templateUrl: './train-full-details.component.html',
  styleUrls: ['../../cart-tabs-shared.scss'],
})
export class TrainFullDetailsComponent extends BaseComponent {
  public train: TrainBookingModel;

  constructor(
    public dialogRef: MatDialogRef<TrainFullDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { train: TrainBookingModel }
  ) {
    super();

    this.train = data.train;
  }

  getSeatingAndExtras(
    traveler: TrainTravelerModel,
    journey: TrainJourneyModel,
    itinerary: TrainJourneyItineraryModel,
    segment: TrainJourneyItinerarySegmentModel
  ): { seating: string; extras: string } {
    const seating = traveler.segmentSeatingSelection(journey.journeyAdviceId, itinerary.itineraryId, segment.segmentId);
    const extras = traveler.segmentOptionSelection(journey.journeyAdviceId, itinerary.itineraryId, segment.segmentId);

    return seating || extras ? { seating, extras } : null;
  }
}
