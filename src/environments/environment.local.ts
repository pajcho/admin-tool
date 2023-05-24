export const environment = {
  production: false,
  api: {
    backend: 'https://backend.example.com',
    dtms: 'https://dtms.example.com',
    dfs: 'https://dfs.example.com',
    ams: 'https://ams.example.com',
    cache: {
      // This will enable console logging of any cached requests for easier debugging
      debugMode: false,
      // Enable or disable API response caching
      enabled: true,
    },
  },
  useElasticSearch: {
    bookings: false,
  },
  featureToggles: {
    agentAssistedBooking: true,
  },
  mock: {
    // This will enable console logging of any mocked request for easier debugging
    debugMode: true,
    // And these are individual feature mocks
    billingRequests: false,
    products: false,
    vatCategories: false,
    vendors: false,
    vendorsPaymentProvider: false,
    auth: false,
    users: false,
    features: false,
    countries: false,
    companies: false,
    companyUsers: false,
    systemMessages: false,
    bookings: false,
    carts: false,
    config: false,
    pnr: false,
    costCenters: false,
    payments: false,
    employees: false,
    checkout: false,
  },
};
