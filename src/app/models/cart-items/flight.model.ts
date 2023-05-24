import { Injectable } from '@angular/core';
import { Adapter } from '../adapter';
import { Airline, BaggageAllowance, CabinClass } from './shared.model';

export interface FlightDestination {
  time: string;
  airportCode: string;
  airportName: string;
  airportCountryCode: string;
  terminal: string;
  flightTaxiOption: boolean;
}

export interface FlightSegment {
  id: string;
  duration: number;
  marketingCarrier: string;
  marketingAirline: Airline;
  operatingCarrier: string;
  operatingAirline: Airline;
  flightNumber: string;
  flightTicketNumber?: string; // Will only be available for completed and confirmed bookings
  aircraftModel: string;
  arrival: FlightDestination;
  departure: FlightDestination;
  airportChange: boolean;
  layover: any; // TODO: Check for type (can we use FlightLayoverData or this can be a number as well?)
  shortLayover: boolean;
  longLayover: boolean;
  differentDay: boolean;
  cabinClass: CabinClass;
  baggageAllowance: BaggageAllowance;
}

export interface Flight {
  duration: number;
  co2EmissionInGrams: number;
  segments: FlightSegment[];
}

export class FlightModel implements Flight {
  constructor(public duration: number, public co2EmissionInGrams: number, public segments: FlightSegment[]) {}

  get firstSegment(): FlightSegment {
    return this.segments[0];
  }

  get lastSegment(): FlightSegment {
    return this.segments[this.segments.length - 1];
  }

  get cabinClassLabel(): string {
    // Get unique cabin classes from all segments
    const classes = [...new Set(this.segments.map((segment) => segment.cabinClass))];
    if (classes.length === 1) return classes[0];
    return `${classes[0]} + ${classes.length - 1}`;
  }

  get marketingAirlineLabel(): string {
    // Get unique airline names from all segments
    const airlines = [...new Set(this.segments.map((segment) => segment.marketingAirline.name))];
    if (airlines.length === 1) return airlines[0];
    return `${airlines[0]} + ${airlines.length - 1}`;
  }

  get midSegments(): FlightSegment[] {
    return this.segments.slice(1, -1);
  }
}

@Injectable({
  providedIn: 'root',
})
export class FlightAdapter implements Adapter<Flight> {
  adapt(item: Flight): FlightModel {
    return new FlightModel(item?.duration, item?.co2EmissionInGrams, item?.segments);
  }
}
