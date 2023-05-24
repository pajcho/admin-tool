export const environment = {
  production: true,
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
    bookings: true,
  },
  featureToggles: {
    agentAssistedBooking: false,
  },
  mock: {
    // This will enable console logging of any mocked request for easier debugging
    debugMode: true,
    // And these are individual feature mocks
    billingRequests: true,
    products: true,
    vatCategories: true,
    vendors: true,
    vendorsPaymentProvider: true,
    auth: true,
    users: true,
    features: true,
    countries: true,
    companies: true,
    companyUsers: true,
    systemMessages: true,
    bookings: true,
    carts: true,
    config: true,
    pnr: true,
    costCenters: true,
    payments: true,
    employees: true,
    checkout: true,
  },
};
