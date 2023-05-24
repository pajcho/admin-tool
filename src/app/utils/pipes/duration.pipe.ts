import { Pipe, PipeTransform } from '@angular/core';

type DibDateType = 'minutesToHrMin' | 'minutesToHM' | 'secondsToHrMin' | 'secondsToHM';

@Pipe({ name: 'dibDuration' })
export class DibDurationPipe implements PipeTransform {
  transform(duration: number, type?: DibDateType): string {
    return formatDibDuration(duration, type);
  }
}

// Export function so it can be used directly as well
export function formatDibDuration(duration: number, type?: DibDateType): string {
  if (!duration) return '';

  switch (type) {
    case 'secondsToHM': {
      // 17700 => 4h 55m
      const minutes = Math.round(duration / 60); // convert seconds to minutes
      return minutes > 59 ? `${Math.trunc(minutes / 60)}h ${minutes % 60}m` : `${minutes}m`;
    }
    case 'secondsToHrMin': {
      // 17700 => 4 hr 55 min
      const minutes = Math.round(duration / 60); // convert seconds to minutes
      return minutes > 59 ? `${Math.trunc(minutes / 60)} hr ${minutes % 60} min` : `${minutes} min`;
    }
    case 'minutesToHM':
      // 133 => 2h 13m
      return duration > 59 ? `${Math.trunc(duration / 60)}h ${duration % 60}m` : `${duration}m`;
    case 'minutesToHrMin':
    default:
      // 133 => 2 hr 13 min
      return duration > 59 ? `${Math.trunc(duration / 60)} hr ${duration % 60} min` : `${duration} min`;
  }
}
