import { HttpParameterCodec } from '@angular/common/http';

/**
 * Was used to encode + character in the request params, but it is not needed anymore, and it is now
 * auto handled since the upgrade to Angular 14. You can use it in AddHeaderInterceptor like this.
 *
 * req.clone({
 *   params: new HttpParams({ encoder: new CustomHttpParamEncoder(), fromString: req.params.toString() }),
 * })
 */
export class CustomHttpParamEncoder implements HttpParameterCodec {
  encodeKey(key: string): string {
    return encodeURIComponent(key);
  }

  encodeValue(value: string): string {
    return encodeURIComponent(value);
  }

  decodeKey(key: string): string {
    return decodeURIComponent(key);
  }

  decodeValue(value: string): string {
    return decodeURIComponent(value);
  }
}
