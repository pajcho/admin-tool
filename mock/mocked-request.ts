import { MockParams, MockRequest } from './mock-request.model';

export class MockedRequest {
  originalUrl: string;
  request: MockRequest;
  requestBody: any;
  params: MockParams;
  response: any;

  constructor(params: {
    request: MockedRequest['request'];
    params: MockedRequest['params'];
    originalUrl: MockedRequest['originalUrl'];
  }) {
    this.originalUrl = params.originalUrl;
    this.request = params.request;
    this.params = params.params;
  }

  public setRequestBody(body: MockedRequest['requestBody']): MockedRequest {
    this.requestBody = body;

    return this;
  }

  public getResponse(): MockedRequest['response'] {
    if (!this.response) {
      this.response = this.request.getResponse(this.params, this.requestBody);
    }

    return this.response;
  }

  public log(params: { httpRequest?: any }): void {
    if (!this.response) this.getResponse();

    const colors = {
      GET: 'forestgreen',
      POST: 'darkslateblue',
      PUT: 'darkorange',
      DELETE: 'brown',
      PATCH: 'darkorange',
    };

    console.groupCollapsed(
      `[Mock] %c${this.request.method}%c ${this.request.url}`,
      `font-weight: normal; font-size: 9px; color: white;
      background: ${colors[this.request.method]}; padding: 2px 5px;
      border-radius: 3px; text-align: center`,
      ``
    );

    if (this.response) {
      console.group(`Mocked Response`);
      console.log(this.response);
      console.groupEnd();
    }

    if (Object.keys(this.params).length) {
      console.groupCollapsed(`Mocked Params`);
      console.log(this.params);
      console.groupEnd();
    }

    if (params.httpRequest) {
      console.groupCollapsed(`Full Request`);
      console.log(params.httpRequest);
      console.groupEnd();
    }

    console.groupCollapsed(`Original URL`);
    console.log(this.originalUrl);
    console.groupEnd();

    console.groupEnd();
  }
}
