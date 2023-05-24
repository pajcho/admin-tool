import { MockRequest } from './mock-request.model';
import { MockedRequest } from './mocked-request';
import { mockedModules } from './modules';

export class MockedRequests {
  requests: MockRequest[];

  constructor(requests: MockedRequests['requests']) {
    this.requests = requests;
  }

  getAll(): MockedRequests['requests'] {
    return this.requests.sort((a, b) => {
      // Longest paths go first, so we don't have false matches
      // i.e. if we have '/path' before `/another/path` both of those will match
      // the '/path' regex, so we have to sort descending to match desired one
      return b.url.length - a.url.length;
    });
  }

  getMockedRequest(method: string, originalUrl: string): MockedRequest {
    const params = {};

    const request = this.getAll().find((item) => {
      if (item.method !== method) return false;

      // Make the regex safe by escaping some special characters that might be a part of the URL
      let regex = item.url.replace(/&/g, '\\&').replace(/\?/g, '\\?').replace(/=/g, '\\=');

      // Match the results and remove surrounding braces (ie. convert {param} to param)
      const matches = (item.url.match(/{([^}]+)}/g) || []).map((key) => key.slice(1, -1));

      // Put back all the regexes in the original path by replacing custom params (ie. convert {param} to (.*))
      matches.forEach((key) => {
        regex = regex.replace(`{${key}}`, item.params?.[key] || '(.*)');
      });

      // Get the regex results
      const results = new RegExp(regex).exec(`${originalUrl}`);

      // Preserve all params caught with the regex, so they can be used if needed
      // Result number 1 is always going to be a full string, so we want to skip that one
      if (results?.length > 1) {
        results.slice(1).forEach((value, index) => {
          params[matches[index]] = value;
        });
      }

      return !!results;
    });

    return request ? new MockedRequest({ request, params, originalUrl }) : null;
  }
}

// Combine all mocked requests from all modules into one single array
export const mockedRequests = new MockedRequests(
  mockedModules.reduce((requests: MockRequest[], module) => {
    requests.push(...module());

    return requests;
  }, [])
);
