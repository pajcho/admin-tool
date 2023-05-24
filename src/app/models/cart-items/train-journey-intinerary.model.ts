import { Injectable } from '@angular/core';
import { parseISO } from 'date-fns';
import { Adapter } from '../adapter';
import {
  ItineraryPriceGroup,
  TrainJourneyItinerarySegment,
  TrainJourneyItinerarySegmentAdapter,
  TrainJourneyItinerarySegmentModel,
} from './train-journey-intinerary-segment.model';
import { Layover } from './shared.model';

export interface TrainJourneyItinerary {
  itineraryId: number;
  priceGroupType: ItineraryPriceGroup;
  segments: TrainJourneyItinerarySegment[];
}

export class TrainJourneyItineraryModel implements TrainJourneyItinerary {
  constructor(
    public itineraryId: number,
    public priceGroupType: ItineraryPriceGroup,
    public segments: TrainJourneyItinerarySegmentModel[],
    public layover?: Layover
  ) {}

  get firstSegment(): TrainJourneyItinerarySegmentModel {
    return this.segments[0];
  }

  get lastSegment(): TrainJourneyItinerarySegmentModel {
    return this.segments[this.segments.length - 1];
  }

  get itineraryClassLabel(): string {
    switch (this.priceGroupType) {
      case ItineraryPriceGroup.FIRST_CLASS:
        return '1st class';
      case ItineraryPriceGroup.SECOND_CLASS:
        return '2nd class';
      default:
        return this.priceGroupType;
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class TrainJourneyItineraryAdapter implements Adapter<TrainJourneyItinerary> {
  adapt(item: TrainJourneyItinerary, nextItem?: TrainJourneyItinerary): TrainJourneyItineraryModel {
    return new TrainJourneyItineraryModel(
      item?.itineraryId,
      item?.priceGroupType,
      (item?.segments || []).map((segment, index) => {
        return new TrainJourneyItinerarySegmentAdapter().adapt(segment, item.segments?.[index + 1]);
      }),
      this.getLayover(item, nextItem)
    );
  }

  private getLayover(item: TrainJourneyItinerary, nextItem: TrainJourneyItinerary): Layover {
    if (!nextItem) return null;

    // Get time difference between last segment from the current itinerary
    // and the first segment from the next itinerary
    const start = parseISO(item.segments[item.segments.length - 1].arrivalDateTime).getTime();
    const end = parseISO(nextItem.segments[0].departureDateTime).getTime();
    const duration = end - start;

    if (!duration) return null;

    return {
      // milliseconds to minutes
      duration: duration ? Math.floor(duration / (60 * 1000)) : 0,
      location: item.segments[item.segments.length - 1].arrivalLocationName,
    };
  }
}
