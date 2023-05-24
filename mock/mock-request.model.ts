export interface MockRequest {
  method: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
  // Mock slow API delays ny supplying a delay in milliseconds (i.e. 2000)
  // If no delay is set, small but random delay will be used every time we mock the API
  delay?: number;
  // URL to match against. It can have a set of params in it in a curly braces format (ie. /route/{id})
  url: string;
  // Custom regex list for every param if needed. By default, all params will match any character - regex used (.*)
  // Example usage `{ id: '([0-9]+)' }`
  params?: {
    [key: string]: string;
  };
  // Any param defined in the URL will be available inside params object (with its matched value)
  // Body will have anything that is sent to the server when using POST requests
  getResponse: (params: MockParams, body: any) => any;
}

export interface MockParams {
  [key: string]: string;
}
