import { Injectable } from '@angular/core';
import { parseISO } from 'date-fns';
import { Adapter } from '../adapter';
import {
  TrainJourneyItinerary,
  TrainJourneyItineraryAdapter,
  TrainJourneyItineraryModel,
} from './train-journey-intinerary.model';
import { TrainJourneyItinerarySegmentModel } from './train-journey-intinerary-segment.model';

export enum JourneyDirection {
  IN = 'IN',
  OUT = 'OUT',
}

export interface TrainJourney {
  journeyAdviceId: number;
  direction: JourneyDirection;
  itineraries: TrainJourneyItinerary[];
}

export class TrainJourneyModel implements TrainJourney {
  constructor(
    public journeyAdviceId: number,
    public direction: JourneyDirection,
    public itineraries: TrainJourneyItineraryModel[]
  ) {}

  get firstItinerary(): TrainJourneyItineraryModel {
    return this.itineraries[0];
  }

  get lastItinerary(): TrainJourneyItineraryModel {
    return this.itineraries[this.itineraries.length - 1];
  }

  get firstSegment(): TrainJourneyItinerarySegmentModel {
    return this.firstItinerary.firstSegment;
  }

  get lastSegment(): TrainJourneyItinerarySegmentModel {
    return this.lastItinerary.lastSegment;
  }

  get totalDuration(): number {
    if (!this.itineraries.length) return 0;

    const start = parseISO(this.firstSegment.departureDateTime).getTime();
    const end = parseISO(this.lastSegment.arrivalDateTime).getTime();

    const duration = end - start;

    // milliseconds to minutes
    return duration ? Math.floor(duration / (60 * 1000)) : 0;
  }

  get operatedByLabel(): string {
    // Get all unique operators from all different itinerary segments
    const operators = new Set(
      this.itineraries
        .reduce((operators, itinerary) => {
          return [...operators, ...itinerary.segments.map((segment) => segment.segmentProducer)];
        }, [])
        .filter(Boolean)
    );

    return operators.size > 1
      ? `${operators.values().next().value} +${operators.size - 1}`
      : operators.values().next().value;
  }

  get itineraryClassLabel(): string {
    // Get all unique itinerary class labels
    const labels = new Set(
      this.itineraries
        .reduce((labels, itinerary) => {
          return [...labels, itinerary.itineraryClassLabel];
        }, [])
        .filter(Boolean)
    );

    return labels.size > 1 ? `${labels.values().next().value} +${labels.size - 1}` : labels.values().next().value;
  }
}

@Injectable({
  providedIn: 'root',
})
export class TrainJourneyAdapter implements Adapter<TrainJourney> {
  adapt(item: TrainJourney): TrainJourneyModel {
    return new TrainJourneyModel(
      item?.journeyAdviceId,
      item?.direction,
      (item?.itineraries || []).map((itinerary, index) => {
        return new TrainJourneyItineraryAdapter().adapt(itinerary, item.itineraries?.[index + 1]);
      })
    );
  }
}
