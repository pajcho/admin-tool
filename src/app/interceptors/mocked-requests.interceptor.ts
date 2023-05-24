import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import * as Chance from 'chance';
import { environment } from '../../environments/environment';
import { mockedRequests } from '../../../mock/mocked-requests';

const chance = Chance.Chance();

export class MockedRequestsInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const mock = mockedRequests.getMockedRequest(httpRequest.method, decodeURIComponent(httpRequest.urlWithParams));

    if (mock) {
      mock.setRequestBody(httpRequest.body);

      if (environment.mock.debugMode) {
        mock.log({ httpRequest });
      }

      return of(new HttpResponse({ status: 200, body: mock.getResponse() })).pipe(
        // Add a small but random delay and use Nullish coalescing operator (??) because delay of 0ms is valid
        delay(mock.request?.delay ?? chance.natural({ min: 70, max: 800 }))
      );
    }

    return next.handle(httpRequest);
  }
}
