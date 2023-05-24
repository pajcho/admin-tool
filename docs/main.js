"use strict";
(self["webpackChunkadmin_tool"] = self["webpackChunkadmin_tool"] || []).push([["main"],{

/***/ 56021:
/*!********************************!*\
  !*** ./mock/mocked-request.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MockedRequest": () => (/* binding */ MockedRequest)
/* harmony export */ });
class MockedRequest {
    constructor(params) {
        this.originalUrl = params.originalUrl;
        this.request = params.request;
        this.params = params.params;
    }
    setRequestBody(body) {
        this.requestBody = body;
        return this;
    }
    getResponse() {
        if (!this.response) {
            this.response = this.request.getResponse(this.params, this.requestBody);
        }
        return this.response;
    }
    log(params) {
        if (!this.response)
            this.getResponse();
        const colors = {
            GET: 'forestgreen',
            POST: 'darkslateblue',
            PUT: 'darkorange',
            DELETE: 'brown',
            PATCH: 'darkorange',
        };
        console.groupCollapsed(`[Mock] %c${this.request.method}%c ${this.request.url}`, `font-weight: normal; font-size: 9px; color: white;
      background: ${colors[this.request.method]}; padding: 2px 5px;
      border-radius: 3px; text-align: center`, ``);
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


/***/ }),

/***/ 29289:
/*!*********************************!*\
  !*** ./mock/mocked-requests.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MockedRequests": () => (/* binding */ MockedRequests),
/* harmony export */   "mockedRequests": () => (/* binding */ mockedRequests)
/* harmony export */ });
/* harmony import */ var _mocked_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mocked-request */ 56021);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules */ 78086);


class MockedRequests {
    constructor(requests) {
        this.requests = requests;
    }
    getAll() {
        return this.requests.sort((a, b) => {
            // Longest paths go first, so we don't have false matches
            // i.e. if we have '/path' before `/another/path` both of those will match
            // the '/path' regex, so we have to sort descending to match desired one
            return b.url.length - a.url.length;
        });
    }
    getMockedRequest(method, originalUrl) {
        const params = {};
        const request = this.getAll().find((item) => {
            if (item.method !== method)
                return false;
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
        return request ? new _mocked_request__WEBPACK_IMPORTED_MODULE_0__.MockedRequest({ request, params, originalUrl }) : null;
    }
}
// Combine all mocked requests from all modules into one single array
const mockedRequests = new MockedRequests(_modules__WEBPACK_IMPORTED_MODULE_1__.mockedModules.reduce((requests, module) => {
    requests.push(...module());
    return requests;
}, []));


/***/ }),

/***/ 65520:
/*!*********************************************!*\
  !*** ./mock/modules/data/mock-cart-data.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mockCartData": () => (/* binding */ mockCartData)
/* harmony export */ });
/* harmony import */ var _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/app/models/booking.model */ 31282);
/* harmony import */ var _src_app_models_cart_items_hotel_booking_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/app/models/cart-items/hotel-booking.model */ 61945);
/* harmony import */ var _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/app/models/cart-items/shared.model */ 34145);
/* harmony import */ var _src_app_models_cart_items_rental_car_booking_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/app/models/cart-items/rental-car-booking.model */ 94908);
/* harmony import */ var _src_app_models_constants_booking_status_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/app/models/constants/booking-status.constants */ 27330);
/* harmony import */ var _src_app_models_cart_items_train_journey_intinerary_segment_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/app/models/cart-items/train-journey-intinerary-segment.model */ 36454);
/* harmony import */ var _src_app_models_cart_items_train_journey_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/app/models/cart-items/train-journey.model */ 60128);







const mockCartData = {
    id: 'aae66da1-fc5b-45a1-a30b-6df9541e8d1a',
    customerId: 'd649b842-9bff-4a6e-9e52-20f69a082e85',
    travelReference: 'aae66da',
    actionStates: ['DONE'],
    status: 'COMPLETED',
    tripId: 'DT0151222021',
    tripName: 'Name your trip',
    additionalTripName: null,
    requestApprovalDueDate: null,
    cartApprovers: [],
    startDate: '2021-06-17',
    endDate: '2021-07-14',
    price: {
        totalPriceToPay: 810.78,
        totalPrice: 810.78,
        localTaxes: 0,
        discount: 0,
        currency: 'EUR',
    },
    payments: [
        {
            paymentDate: '2021-05-30',
            orderId: '2b381b87-7503-4bcc-9345-72f8269d58fc',
        },
    ],
    paymentMethod: 'BILLING_PROFILE',
    receiptAvailable: false,
    bids: [],
    ibs: [],
    packages: [],
    gps: [
        {
            id: '7d89bfe3-c3dd-4b55-b2d8-39934a601269',
            requestedCheckIn: '2021-06-18T00:00:00',
            requestedCheckOut: '2021-06-20T00:00:00',
            requestedRooms: [
                {
                    requestedRoomId: '2209659b-3a6c-486d-8ab2-d77a98772cf1',
                    adults: 1,
                    children: 0,
                    infants: 0,
                    bedType: null,
                    roomName: 'Economy Room (No Windows Hobo Sleeper)',
                    occupants: [
                        {
                            id: '2f86ecd7-236f-4959-921a-5611011c0fff',
                            userId: 'd649b842-9bff-4a6e-9e52-20f69a082e85',
                            firstName: 'John',
                            lastName: 'Doe',
                            email: 'example.user@example.com',
                            phoneNumber: '+38160111222',
                            companyName: null,
                            emailConfirmation: false,
                            costCenterId: '',
                            primaryOccupant: true,
                            travelerReferenceFields: {},
                        },
                    ],
                },
            ],
            specialRequests: null,
            locationPreferences: {
                cityName: 'Malmö',
                hotelAddress: 'Baltzarsgatan 20',
            },
            hotelBooker: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'example.user@example.com',
                phoneNumber: '+38160111222',
                companyName: null,
            },
            stars: 4,
            gym: true,
            pool: false,
            breakfast: false,
            requestedCurrency: 'EUR',
            requestedPrice: 148.9,
            localTaxes: {
                currency: null,
                amount: 0,
            },
            bookingAction: _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_0__.BookingAction.NONE,
            bookingStatus: 'COMPLETED',
            type: _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_0__.BookingType.CM_BOOKING,
            cancellationPolicies: [],
            hotelDescription: {
                position: {
                    latitude: 55.60456,
                    longitude: 13.0038,
                },
                hotelName: 'Hotel Garden',
                address: 'Baltzarsgatan 20',
                phoneNumber: '',
                email: '',
                hotelImage: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/172263018.jpg' +
                    '?k=b9499f8c0c4f1c6f146821c4d293645708b42ee077388700f3b9718cbfd44f1f&o=',
                reservationCodes: [
                    {
                        reservationCode: '2543101292',
                        reservationType: _src_app_models_cart_items_hotel_booking_model__WEBPACK_IMPORTED_MODULE_1__.ReservationType.ID,
                    },
                    {
                        reservationCode: '9692',
                        reservationType: _src_app_models_cart_items_hotel_booking_model__WEBPACK_IMPORTED_MODULE_1__.ReservationType.PIN,
                    },
                ],
                moreContentAvailable: false,
                providerName: 'BOOKING_COM',
            },
            paymentStatus: _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_0__.BookingPaymentStatus.COMPLETED,
            corporateRate: false,
            refundable: false,
            prePaid: true,
        },
    ],
    gos: [],
    tickets: [],
    flightBookings: [
        {
            id: '4dc9cf10-5e70-4dcb-8707-faf30d81df03',
            totalPrice: 114.67,
            currency: 'EUR',
            co2EmissionInGrams: 10200000,
            departingFlightDeparture: '2021-06-17T11:10:00',
            departingFlightDuration: 42900,
            arrivingFlightDuration: 42900,
            numberOfStops: 1,
            flights: [
                {
                    duration: 42900,
                    co2EmissionInGrams: 10200000,
                    segments: [
                        {
                            id: '31347663-e5be-4d97-ace3-69ea6da944fe',
                            duration: 9900,
                            marketingCarrier: 'DY',
                            marketingAirline: {
                                code: 'DY',
                                name: 'Norwegian',
                                iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/DY.gif',
                            },
                            operatingCarrier: 'DY',
                            operatingAirline: {
                                code: 'DY',
                                name: 'Norwegian',
                                iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/DY.gif',
                            },
                            flightNumber: '1977',
                            aircraftModel: '73H',
                            arrival: {
                                time: '2021-06-17T13:55:00',
                                airportCode: 'OSL',
                                airportName: 'Oslo',
                                airportCountryCode: 'NO',
                                terminal: null,
                                flightTaxiOption: false,
                            },
                            departure: {
                                time: '2021-06-17T11:10:00',
                                airportCode: 'BEG',
                                airportName: 'Belgrade',
                                airportCountryCode: 'RS',
                                terminal: '2',
                                flightTaxiOption: false,
                            },
                            airportChange: false,
                            layover: 14700,
                            shortLayover: null,
                            longLayover: false,
                            differentDay: true,
                            cabinClass: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.CabinClass.ECONOMY,
                            baggageAllowance: {
                                quantity: null,
                                weight: {
                                    value: null,
                                    unit: null,
                                },
                            },
                        },
                        {
                            id: 'e018812e-0e85-4c57-b4c4-f2af7abd8610',
                            duration: 3600,
                            marketingCarrier: 'DY',
                            marketingAirline: {
                                code: 'DY',
                                name: 'Norwegian',
                                iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/DY.gif',
                            },
                            operatingCarrier: 'DY',
                            operatingAirline: {
                                code: 'DY',
                                name: 'Norwegian',
                                iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/DY.gif',
                            },
                            flightNumber: '822',
                            aircraftModel: '73H',
                            arrival: {
                                time: '2021-06-17T19:00:00',
                                airportCode: 'ARN',
                                airportName: 'Stockholm Arlanda',
                                airportCountryCode: 'SE',
                                terminal: '5',
                                flightTaxiOption: false,
                            },
                            departure: {
                                time: '2021-06-17T18:00:00',
                                airportCode: 'OSL',
                                airportName: 'Oslo',
                                airportCountryCode: 'NO',
                                terminal: null,
                                flightTaxiOption: false,
                            },
                            airportChange: false,
                            layover: null,
                            shortLayover: null,
                            longLayover: false,
                            differentDay: true,
                            cabinClass: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.CabinClass.ECONOMY,
                            baggageAllowance: {
                                quantity: null,
                                weight: {
                                    value: null,
                                    unit: null,
                                },
                            },
                        },
                    ],
                },
            ],
            travelers: [
                {
                    id: 'be341164-b5b9-48bf-bf46-f86200b2908b',
                    userId: 'd649b842-9bff-4a6e-9e52-20f69a082e85',
                    title: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.UserTitle.MR,
                    firstName: 'John',
                    lastName: 'Doe',
                    middleName: null,
                    birthday: '1999-02-18',
                    loyaltyCardProvider: null,
                    loyaltyCardNumber: null,
                    email: 'example.user@example.com',
                    emailConfirmation: false,
                    travelerType: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.TravelerType.ADULT,
                    flightTickets: [
                        {
                            ticketNo: '328-1103400401',
                            segment: [
                                {
                                    id: '31347663-e5be-4d97-ace3-69ea6da944fe',
                                    duration: 9900,
                                    marketingCarrier: 'DY',
                                    marketingAirline: {
                                        code: 'DY',
                                        name: 'Norwegian',
                                        iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/DY.gif',
                                    },
                                    operatingCarrier: 'DY',
                                    operatingAirline: {
                                        code: 'DY',
                                        name: 'Norwegian',
                                        iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/DY.gif',
                                    },
                                    flightNumber: '1977',
                                    aircraftModel: '73H',
                                    arrival: {
                                        time: '2021-06-17T13:55:00',
                                        airportCode: 'OSL',
                                        airportName: 'Oslo',
                                        airportCountryCode: 'NO',
                                        terminal: null,
                                        flightTaxiOption: false,
                                    },
                                    departure: {
                                        time: '2021-06-17T11:10:00',
                                        airportCode: 'BEG',
                                        airportName: 'Belgrade',
                                        airportCountryCode: 'RS',
                                        terminal: '2',
                                        flightTaxiOption: false,
                                    },
                                    airportChange: false,
                                    layover: 14700,
                                    shortLayover: null,
                                    longLayover: false,
                                    differentDay: true,
                                    cabinClass: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.CabinClass.ECONOMY,
                                    baggageAllowance: {
                                        quantity: null,
                                        weight: {
                                            value: null,
                                            unit: null,
                                        },
                                    },
                                },
                                {
                                    id: 'e018812e-0e85-4c57-b4c4-f2af7abd8610',
                                    duration: 3600,
                                    marketingCarrier: 'DY',
                                    marketingAirline: {
                                        code: 'DY',
                                        name: 'Norwegian',
                                        iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/DY.gif',
                                    },
                                    operatingCarrier: 'DY',
                                    operatingAirline: {
                                        code: 'DY',
                                        name: 'Norwegian',
                                        iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/DY.gif',
                                    },
                                    flightNumber: '822',
                                    aircraftModel: '73H',
                                    arrival: {
                                        time: '2021-06-17T19:00:00',
                                        airportCode: 'ARN',
                                        airportName: 'Stockholm Arlanda',
                                        airportCountryCode: 'SE',
                                        terminal: '5',
                                        flightTaxiOption: false,
                                    },
                                    departure: {
                                        time: '2021-06-17T18:00:00',
                                        airportCode: 'OSL',
                                        airportName: 'Oslo',
                                        airportCountryCode: 'NO',
                                        terminal: null,
                                        flightTaxiOption: false,
                                    },
                                    airportChange: false,
                                    layover: null,
                                    shortLayover: null,
                                    longLayover: false,
                                    differentDay: true,
                                    cabinClass: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.CabinClass.ECONOMY,
                                    baggageAllowance: {
                                        quantity: null,
                                        weight: {
                                            value: null,
                                            unit: null,
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                    costCenterId: null,
                    addons: null,
                    exchanged: false,
                    travelerReferenceFields: {},
                },
            ],
            bookingReference: {
                reference: 'OF9ABX',
                source: 'Amadeus',
            },
            status: 'COMPLETED',
            action: _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_0__.BookingAction.NONE,
            paymentStatus: _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_0__.BookingPaymentStatus.COMPLETED,
            hasExchange: false,
            exchanged: false,
        },
        {
            id: '6e49f7d7-e9c6-4488-81dc-e922f1031f16',
            totalPrice: 133.7,
            currency: 'EUR',
            co2EmissionInGrams: 8200000,
            departingFlightDeparture: '2021-06-20T10:30:00',
            departingFlightDuration: 182100,
            arrivingFlightDuration: 182100,
            numberOfStops: 1,
            flights: [
                {
                    duration: 182100,
                    co2EmissionInGrams: 8200000,
                    segments: [
                        {
                            id: '166f60c0-fb74-4c19-a58f-43902fc74aa4',
                            duration: 6300,
                            marketingCarrier: 'LO',
                            marketingAirline: {
                                code: 'LO',
                                name: 'LOT - Polish Airlines',
                                iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/LO.gif',
                            },
                            operatingCarrier: 'LO',
                            operatingAirline: {
                                code: 'LO',
                                name: 'LOT - Polish Airlines',
                                iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/LO.gif',
                            },
                            flightNumber: '454',
                            aircraftModel: 'E75',
                            arrival: {
                                time: '2021-06-20T12:15:00',
                                airportCode: 'WAW',
                                airportName: 'Warsaw',
                                airportCountryCode: 'PL',
                                terminal: null,
                                flightTaxiOption: false,
                            },
                            departure: {
                                time: '2021-06-20T10:30:00',
                                airportCode: 'ARN',
                                airportName: 'Stockholm Arlanda',
                                airportCountryCode: 'SE',
                                terminal: '5',
                                flightTaxiOption: false,
                            },
                            airportChange: false,
                            layover: 84900,
                            shortLayover: null,
                            longLayover: false,
                            differentDay: true,
                            cabinClass: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.CabinClass.ECONOMY,
                            baggageAllowance: {
                                quantity: null,
                                weight: {
                                    value: null,
                                    unit: null,
                                },
                            },
                        },
                        {
                            id: 'e4580d30-3e1c-4bf3-be4d-047146bd9ffa',
                            duration: 6000,
                            marketingCarrier: 'LO',
                            marketingAirline: {
                                code: 'LO',
                                name: 'LOT - Polish Airlines',
                                iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/LO.gif',
                            },
                            operatingCarrier: 'LO',
                            operatingAirline: {
                                code: 'LO',
                                name: 'LOT - Polish Airlines',
                                iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/LO.gif',
                            },
                            flightNumber: '571',
                            aircraftModel: 'E75',
                            arrival: {
                                time: '2021-06-21T13:30:00',
                                airportCode: 'BEG',
                                airportName: 'Belgrade',
                                airportCountryCode: 'RS',
                                terminal: '2',
                                flightTaxiOption: false,
                            },
                            departure: {
                                time: '2021-06-21T11:50:00',
                                airportCode: 'WAW',
                                airportName: 'Warsaw',
                                airportCountryCode: 'PL',
                                terminal: null,
                                flightTaxiOption: false,
                            },
                            airportChange: false,
                            layover: null,
                            shortLayover: null,
                            longLayover: false,
                            differentDay: true,
                            cabinClass: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.CabinClass.ECONOMY,
                            baggageAllowance: {
                                quantity: null,
                                weight: {
                                    value: null,
                                    unit: null,
                                },
                            },
                        },
                    ],
                },
            ],
            travelers: [
                {
                    id: 'ea953607-ccef-40e5-9d54-81ce0e0e74b9',
                    userId: 'd649b842-9bff-4a6e-9e52-20f69a082e85',
                    title: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.UserTitle.MR,
                    firstName: 'John',
                    lastName: 'Doe',
                    middleName: null,
                    birthday: '1999-02-18',
                    loyaltyCardProvider: null,
                    loyaltyCardNumber: null,
                    email: 'example.user@example.com',
                    emailConfirmation: false,
                    travelerType: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.TravelerType.ADULT,
                    flightTickets: [
                        {
                            ticketNo: '080-1966415096',
                            segment: [
                                {
                                    id: '166f60c0-fb74-4c19-a58f-43902fc74aa4',
                                    duration: 6300,
                                    marketingCarrier: 'LO',
                                    marketingAirline: {
                                        code: 'LO',
                                        name: 'LOT - Polish Airlines',
                                        iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/LO.gif',
                                    },
                                    operatingCarrier: 'LO',
                                    operatingAirline: {
                                        code: 'LO',
                                        name: 'LOT - Polish Airlines',
                                        iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/LO.gif',
                                    },
                                    flightNumber: '454',
                                    aircraftModel: 'E75',
                                    arrival: {
                                        time: '2021-06-20T12:15:00',
                                        airportCode: 'WAW',
                                        airportName: 'Warsaw',
                                        airportCountryCode: 'PL',
                                        terminal: null,
                                        flightTaxiOption: false,
                                    },
                                    departure: {
                                        time: '2021-06-20T10:30:00',
                                        airportCode: 'ARN',
                                        airportName: 'Stockholm Arlanda',
                                        airportCountryCode: 'SE',
                                        terminal: '5',
                                        flightTaxiOption: false,
                                    },
                                    airportChange: false,
                                    layover: 84900,
                                    shortLayover: null,
                                    longLayover: false,
                                    differentDay: true,
                                    cabinClass: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.CabinClass.ECONOMY,
                                    baggageAllowance: {
                                        quantity: null,
                                        weight: {
                                            value: null,
                                            unit: null,
                                        },
                                    },
                                },
                                {
                                    id: 'e4580d30-3e1c-4bf3-be4d-047146bd9ffa',
                                    duration: 6000,
                                    marketingCarrier: 'LO',
                                    marketingAirline: {
                                        code: 'LO',
                                        name: 'LOT - Polish Airlines',
                                        iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/LO.gif',
                                    },
                                    operatingCarrier: 'LO',
                                    operatingAirline: {
                                        code: 'LO',
                                        name: 'LOT - Polish Airlines',
                                        iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/LO.gif',
                                    },
                                    flightNumber: '571',
                                    aircraftModel: 'E75',
                                    arrival: {
                                        time: '2021-06-21T13:30:00',
                                        airportCode: 'BEG',
                                        airportName: 'Belgrade',
                                        airportCountryCode: 'RS',
                                        terminal: '2',
                                        flightTaxiOption: false,
                                    },
                                    departure: {
                                        time: '2021-06-21T11:50:00',
                                        airportCode: 'WAW',
                                        airportName: 'Warsaw',
                                        airportCountryCode: 'PL',
                                        terminal: null,
                                        flightTaxiOption: false,
                                    },
                                    airportChange: false,
                                    layover: null,
                                    shortLayover: null,
                                    longLayover: false,
                                    differentDay: true,
                                    cabinClass: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.CabinClass.ECONOMY,
                                    baggageAllowance: {
                                        quantity: null,
                                        weight: {
                                            value: null,
                                            unit: null,
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                    costCenterId: null,
                    addons: null,
                    exchanged: false,
                    travelerReferenceFields: {},
                },
            ],
            bookingReference: {
                reference: 'OF9KYQ',
                source: 'Amadeus',
            },
            status: 'COMPLETED',
            action: _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_0__.BookingAction.NONE,
            paymentStatus: _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_0__.BookingPaymentStatus.COMPLETED,
            hasExchange: false,
            exchanged: false,
        },
    ],
    taxiBookings: [
        {
            id: '22222-8f25-4379-b90e-6f4d273ca50f',
            status: 'COMPLETED',
            bookingReference: 'FLIGHT-JSG34',
            type: _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_0__.BookingType.TAXI,
            offerId: 'cee5df1e-8f25-4379-b90e-6f4d273ca50f',
            bookingId: '4dc9cf10-5e70-4dcb-8707-faf30d81df03',
            segmentId: 'e018812e-0e85-4c57-b4c4-f2af7abd8610',
            start: {
                datetime: '2021-09-20T06:30:00',
                locationCode: null,
                address: '181 32 Lidingö',
                city: 'Herrljunga',
                zip: '52432',
                country: 'SE',
                lat: 58.0770692,
                lon: 13.0058573,
            },
            end: {
                datetime: '2021-09-20T06:30:00',
                locationCode: 'ARN',
                address: 'Arlanda flygplats',
                city: 'STOCKHOLM-ARLANDA',
                zip: '19060',
                country: 'SE',
                lat: 59.6478722222222,
                lon: 17.9259027777778,
            },
            taxiType: 'FLIGHT',
            transferType: 'PRIVATE',
            serviceProvider: {
                name: 'Taxibokning',
                code: 'TXB',
            },
            vehicle: {
                category: 'ST',
                description: 'Regular taxi, with Taxi Falköping',
                seatCount: 3,
                baggageCount: 3,
            },
            travelers: [
                { id: '13213', firstName: 'John', lastName: 'Doe', travelerReferenceFields: {} },
                { id: '13213', firstName: 'Pera', lastName: 'Peric', travelerReferenceFields: {} },
            ],
            cancellationPolicies: [
                {
                    // Non-refundable within 60 minutes of pick-up time
                    costAmount: 64.32,
                    refundAmount: 0,
                    refundAmountPerNight: null,
                    currency: 'EUR',
                    fromDate: '2021-09-20T05:30:00',
                    toDate: '2021-09-20T06:30:00',
                    used: false,
                    fullRefundable: false,
                    cancellationFeeDetails: {
                        amount: null,
                        currency: 'EUR',
                        percent: 100,
                        numberOfNights: null,
                    },
                },
                {
                    // Partially refundable up to 60 minutes of pick-up time
                    costAmount: 18.53,
                    refundAmount: 45.89,
                    refundAmountPerNight: null,
                    currency: 'EUR',
                    fromDate: '2021-09-20T04:30:00',
                    toDate: '2021-09-20T05:30:00',
                    used: false,
                    fullRefundable: false,
                    cancellationFeeDetails: {
                        amount: null,
                        currency: 'EUR',
                        percent: 20,
                        numberOfNights: null,
                    },
                },
                {
                    // Free cancellation up to 120 minutes prior to ride
                    costAmount: 0,
                    refundAmount: 64.32,
                    refundAmountPerNight: null,
                    currency: 'EUR',
                    fromDate: '2020-09-20T06:30:00',
                    toDate: '2021-09-20T04:30:00',
                    used: false,
                    fullRefundable: true,
                    cancellationFeeDetails: {
                        amount: null,
                        currency: 'EUR',
                        percent: 0,
                        numberOfNights: null,
                    },
                },
                {
                    // Non-refundable within 60 minutes of pick-up time
                    costAmount: 64.32,
                    refundAmount: 0,
                    refundAmountPerNight: null,
                    currency: 'EUR',
                    fromDate: '2021-09-20T05:30:00',
                    toDate: '2021-09-20T06:30:00',
                    used: false,
                    fullRefundable: false,
                    cancellationFeeDetails: {
                        amount: 64.32,
                        currency: 'EUR',
                        percent: 0,
                        numberOfNights: null,
                    },
                },
                {
                    // Partially refundable up to 60 minutes of pick-up time
                    costAmount: 18.53,
                    refundAmount: 45.89,
                    refundAmountPerNight: null,
                    currency: 'EUR',
                    fromDate: '2021-09-20T04:30:00',
                    toDate: '2021-09-20T05:30:00',
                    used: false,
                    fullRefundable: false,
                    cancellationFeeDetails: {
                        amount: 18.53,
                        currency: 'EUR',
                        percent: null,
                        numberOfNights: null,
                    },
                },
                {
                    // Free cancellation up to 120 minutes prior to ride
                    costAmount: 0,
                    refundAmount: 64.32,
                    refundAmountPerNight: null,
                    currency: 'EUR',
                    fromDate: '2020-09-20T06:30:00',
                    toDate: '2021-09-20T04:30:00',
                    used: false,
                    fullRefundable: true,
                    cancellationFeeDetails: {
                        amount: 0,
                        currency: 'EUR',
                        percent: null,
                        numberOfNights: null,
                    },
                },
            ],
            price: {
                amount: 1725,
                currency: 'SEK',
            },
            items: [],
        },
        {
            id: '33333-8f25-4379-b90e-6f4d273ca50f',
            status: 'COMPLETED',
            bookingReference: 'FLIGHT-PG54SD',
            type: _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_0__.BookingType.TAXI,
            offerId: '00bc0788-71b5-4774-a124-666d27350f5e',
            bookingId: '6e49f7d7-e9c6-4488-81dc-e922f1031f16',
            segmentId: '166f60c0-fb74-4c19-a58f-43902fc74aa4',
            start: {
                datetime: '2021-09-20T11:35:00',
                locationCode: 'MMX',
                address: null,
                city: 'SVEDALA',
                zip: '23391',
                country: 'SE',
                lat: 55.5404,
                lon: 13.3642,
            },
            end: {
                datetime: '2021-09-20T11:35:00',
                locationCode: null,
                address: 'Tornfalksgatan Malmö',
                city: 'Malmö',
                zip: 'undefined',
                country: 'SE',
                lat: 55.5676661,
                lon: 13.0121061,
            },
            taxiType: 'FLIGHT',
            transferType: 'PRIVATE',
            serviceProvider: {
                name: 'Taxibokning',
                code: 'TXB',
            },
            vehicle: {
                category: 'ST',
                description: 'Regular taxi, with Vellinge Taxi',
                seatCount: 3,
                baggageCount: 3,
            },
            travelers: [{ id: '13213', firstName: 'John', lastName: 'Doe', travelerReferenceFields: {} }],
            cancellationPolicies: [
                {
                    // Non-refundable within 60 minutes of pick-up time
                    costAmount: 64.32,
                    refundAmount: 0,
                    refundAmountPerNight: null,
                    currency: 'EUR',
                    fromDate: '2021-09-20T10:35:00',
                    toDate: '2021-09-20T11:35:00',
                    used: false,
                    fullRefundable: false,
                    cancellationFeeDetails: {
                        amount: null,
                        currency: 'EUR',
                        percent: 100,
                        numberOfNights: null,
                    },
                },
                {
                    // Partially refundable up to 60 minutes of pick-up time
                    costAmount: 18.53,
                    refundAmount: 45.89,
                    refundAmountPerNight: null,
                    currency: 'EUR',
                    fromDate: '2021-09-20T09:35:00',
                    toDate: '2021-09-20T10:35:00',
                    used: false,
                    fullRefundable: false,
                    cancellationFeeDetails: {
                        amount: null,
                        currency: 'EUR',
                        percent: 20,
                        numberOfNights: null,
                    },
                },
                {
                    // Free cancellation up to 120 minutes prior to ride
                    costAmount: 0,
                    refundAmount: 64.32,
                    refundAmountPerNight: null,
                    currency: 'EUR',
                    fromDate: '2020-09-20T11:35:00',
                    toDate: '2021-09-20T09:35:00',
                    used: false,
                    fullRefundable: true,
                    cancellationFeeDetails: {
                        amount: null,
                        currency: 'EUR',
                        percent: 0,
                        numberOfNights: null,
                    },
                },
                {
                    // Non-refundable within 60 minutes of pick-up time
                    costAmount: 64.32,
                    refundAmount: 0,
                    refundAmountPerNight: null,
                    currency: 'EUR',
                    fromDate: '2021-09-20T10:35:00',
                    toDate: '2021-09-20T11:35:00',
                    used: false,
                    fullRefundable: false,
                    cancellationFeeDetails: {
                        amount: 64.32,
                        currency: 'EUR',
                        percent: 0,
                        numberOfNights: null,
                    },
                },
                {
                    // Partially refundable up to 60 minutes of pick-up time
                    costAmount: 18.53,
                    refundAmount: 45.89,
                    refundAmountPerNight: null,
                    currency: 'EUR',
                    fromDate: '2021-09-20T09:35:00',
                    toDate: '2021-09-20T10:35:00',
                    used: false,
                    fullRefundable: false,
                    cancellationFeeDetails: {
                        amount: 18.53,
                        currency: 'EUR',
                        percent: null,
                        numberOfNights: null,
                    },
                },
                {
                    // Free cancellation up to 120 minutes prior to ride
                    costAmount: 0,
                    refundAmount: 64.32,
                    refundAmountPerNight: null,
                    currency: 'EUR',
                    fromDate: '2020-09-20T11:35:00',
                    toDate: '2021-09-20T09:35:00',
                    used: false,
                    fullRefundable: true,
                    cancellationFeeDetails: {
                        amount: 0,
                        currency: 'EUR',
                        percent: null,
                        numberOfNights: null,
                    },
                },
            ],
            price: {
                amount: 598,
                currency: 'SEK',
            },
            items: [],
        },
        {
            id: '4444-8f25-4379-b90e-6f4d273ca50f',
            status: 'COMPLETED',
            bookingReference: 'TRAIN-JSG34',
            type: _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_0__.BookingType.TAXI,
            offerId: 'asd958ajf-8f25-4379-b90e-6f4d273ca50f',
            bookingId: '98cae036-10c7-4420-95f0-2c0aad571b2a',
            segmentId: '1',
            start: {
                datetime: '2021-09-20T06:30:00',
                locationCode: null,
                address: '181 32 Malmo',
                city: 'Malmo',
                zip: '52432',
                country: 'SE',
                lat: 58.0770692,
                lon: 13.0058573,
            },
            end: {
                datetime: '2021-09-20T06:30:00',
                locationCode: 'MMX',
                address: 'Malmo C',
                city: 'Malmo',
                zip: '19060',
                country: 'SE',
                lat: 59.6478722222222,
                lon: 17.9259027777778,
            },
            taxiType: 'TRAIN',
            transferType: 'PRIVATE',
            serviceProvider: {
                name: 'Taxibokning',
                code: 'TXB',
            },
            vehicle: {
                category: 'ST',
                description: 'Regular taxi, with Taxi Falköping',
                seatCount: 3,
                baggageCount: 3,
            },
            travelers: [
                { id: '13213', firstName: 'John', lastName: 'Doe', travelerReferenceFields: {} },
                { id: '13213', firstName: 'Pera', lastName: 'Peric', travelerReferenceFields: {} },
            ],
            cancellationPolicies: [
                {
                    // Non-refundable within 60 minutes of pick-up time
                    costAmount: 64.32,
                    refundAmount: 0,
                    refundAmountPerNight: null,
                    currency: 'EUR',
                    fromDate: '2021-09-20T05:30:00',
                    toDate: '2021-09-20T06:30:00',
                    used: false,
                    fullRefundable: false,
                    cancellationFeeDetails: {
                        amount: null,
                        currency: 'EUR',
                        percent: 100,
                        numberOfNights: null,
                    },
                },
                {
                    // Partially refundable up to 60 minutes of pick-up time
                    costAmount: 18.53,
                    refundAmount: 45.89,
                    refundAmountPerNight: null,
                    currency: 'EUR',
                    fromDate: '2021-09-20T04:30:00',
                    toDate: '2021-09-20T05:30:00',
                    used: false,
                    fullRefundable: false,
                    cancellationFeeDetails: {
                        amount: null,
                        currency: 'EUR',
                        percent: 20,
                        numberOfNights: null,
                    },
                },
                {
                    // Free cancellation up to 120 minutes prior to ride
                    costAmount: 0,
                    refundAmount: 64.32,
                    refundAmountPerNight: null,
                    currency: 'EUR',
                    fromDate: '2020-09-20T06:30:00',
                    toDate: '2021-09-20T04:30:00',
                    used: false,
                    fullRefundable: true,
                    cancellationFeeDetails: {
                        amount: null,
                        currency: 'EUR',
                        percent: 0,
                        numberOfNights: null,
                    },
                },
                {
                    // Non-refundable within 60 minutes of pick-up time
                    costAmount: 64.32,
                    refundAmount: 0,
                    refundAmountPerNight: null,
                    currency: 'EUR',
                    fromDate: '2021-09-20T05:30:00',
                    toDate: '2021-09-20T06:30:00',
                    used: false,
                    fullRefundable: false,
                    cancellationFeeDetails: {
                        amount: 64.32,
                        currency: 'EUR',
                        percent: 0,
                        numberOfNights: null,
                    },
                },
                {
                    // Partially refundable up to 60 minutes of pick-up time
                    costAmount: 18.53,
                    refundAmount: 45.89,
                    refundAmountPerNight: null,
                    currency: 'EUR',
                    fromDate: '2021-09-20T04:30:00',
                    toDate: '2021-09-20T05:30:00',
                    used: false,
                    fullRefundable: false,
                    cancellationFeeDetails: {
                        amount: 18.53,
                        currency: 'EUR',
                        percent: null,
                        numberOfNights: null,
                    },
                },
                {
                    // Free cancellation up to 120 minutes prior to ride
                    costAmount: 0,
                    refundAmount: 64.32,
                    refundAmountPerNight: null,
                    currency: 'EUR',
                    fromDate: '2020-09-20T06:30:00',
                    toDate: '2021-09-20T04:30:00',
                    used: false,
                    fullRefundable: true,
                    cancellationFeeDetails: {
                        amount: 0,
                        currency: 'EUR',
                        percent: null,
                        numberOfNights: null,
                    },
                },
            ],
            price: {
                amount: 459,
                currency: 'SEK',
            },
            items: [],
        },
    ],
    genericProducts: [],
    trainBookings: [
        {
            id: '98cae036-10c7-4420-95f0-2c0aad571b2a',
            preOrderId: '60b360f54b8882280e6f055e',
            status: _src_app_models_constants_booking_status_constants__WEBPACK_IMPORTED_MODULE_4__.BookingStatusV2.COMPLETION,
            bookingReference: 'QVF0533H',
            booker: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'example.user@example.com',
                phoneNumber: '+38160111222',
            },
            rebookable: true,
            refundable: false,
            dynamicCancellationPolicy: true,
            cancelable: true,
            travellers: [
                {
                    id: '52013bdd-3db2-4117-9273-4938e575db01',
                    travellerNumber: 1,
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'example.user@example.com',
                    phoneNumber: '+38160111222',
                    optionSelections: [],
                    seatingSelections: [
                        {
                            journeyId: 965464581,
                            itineraryId: 1,
                            segmentId: '1',
                            description: 'Carriage: 11, Seat: 116, Window, Open coach',
                            carriage: '11',
                            seat: '116',
                            placementOrientation: 'Window',
                            placementCharacteristics: 'Open coach',
                        },
                    ],
                    addons: [],
                    userId: 'd649b842-9bff-4a6e-9e52-20f69a082e85',
                    travelerReferenceFields: {},
                },
            ],
            journeys: [
                {
                    journeyAdviceId: 965464581,
                    direction: _src_app_models_cart_items_train_journey_model__WEBPACK_IMPORTED_MODULE_6__.JourneyDirection.IN,
                    itineraries: [
                        {
                            itineraryId: 1,
                            priceGroupType: _src_app_models_cart_items_train_journey_intinerary_segment_model__WEBPACK_IMPORTED_MODULE_5__.ItineraryPriceGroup.SEAT,
                            segments: [
                                {
                                    segmentId: '1',
                                    uniqueSegmentId: 'ec9636cd-a8fc-4cef-9d0a-ae9af9ef0640',
                                    transportInformation: {
                                        known: [
                                            {
                                                code: '69',
                                                description: 'Restaurant',
                                                category: 'FOOD',
                                            },
                                        ],
                                        unknown: [
                                            {
                                                code: '4',
                                                description: 'Standard class only',
                                            },
                                        ],
                                    },
                                    departureDateTime: '2021-07-14T16:11:00',
                                    departureLocationName: 'Malmö C',
                                    departureLocationNameLong: 'Malmö Centralstation',
                                    departureTaxiOption: true,
                                    departureStationCode: 'MLMC',
                                    arrivalDateTime: '2021-07-14T21:12:00',
                                    arrivalLocationName: 'Sthlm Central',
                                    arrivalLocationNameLong: 'Stockholm Centralstation',
                                    arrivalTaxiOption: true,
                                    arrivalStationCode: 'STH',
                                    bookingClass: 'SECOND',
                                    travelMethod: 'Train',
                                    productCode: 'Other',
                                    transportId: '3942',
                                    segmentProducer: 'Snälltåget',
                                    serviceBrandName: ' ',
                                    duration: 301,
                                },
                            ],
                        },
                    ],
                },
            ],
            subTotalPrice: {
                currency: 'EUR',
                amount: 103.72,
            },
            bookingMode: _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_0__.BookingMode.ONLINE,
            co2EmissionInGrams: null,
            integrationFee: null,
        },
        {
            id: '96edd4e3-acee-4f01-925c-14a4cbd7ae01',
            preOrderId: '60b360fb0db0415701cc27fc',
            status: _src_app_models_constants_booking_status_constants__WEBPACK_IMPORTED_MODULE_4__.BookingStatusV2.COMPLETION,
            bookingReference: 'QVF0532A',
            booker: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'example.user@example.com',
                phoneNumber: '+38160111222',
            },
            rebookable: true,
            refundable: false,
            dynamicCancellationPolicy: true,
            cancelable: true,
            travellers: [
                {
                    id: 'cc7b9c35-4b12-4d8a-b8af-c7c21f401d7a',
                    travellerNumber: 1,
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'example.user@example.com',
                    phoneNumber: '+38160111222',
                    optionSelections: [],
                    seatingSelections: [
                        {
                            journeyId: 1902639939,
                            itineraryId: 1,
                            segmentId: '1',
                            description: 'Carriage: 11, Seat: 48, Window, Open coach',
                            carriage: '11',
                            seat: '48',
                            placementOrientation: 'Window',
                            placementCharacteristics: 'Open coach',
                        },
                    ],
                    addons: [],
                    userId: 'd649b842-9bff-4a6e-9e52-20f69a082e85',
                    travelerReferenceFields: {},
                },
            ],
            journeys: [
                {
                    journeyAdviceId: 1902639939,
                    direction: _src_app_models_cart_items_train_journey_model__WEBPACK_IMPORTED_MODULE_6__.JourneyDirection.OUT,
                    itineraries: [
                        {
                            itineraryId: 1,
                            priceGroupType: _src_app_models_cart_items_train_journey_intinerary_segment_model__WEBPACK_IMPORTED_MODULE_5__.ItineraryPriceGroup.SEAT,
                            segments: [
                                {
                                    segmentId: '1',
                                    uniqueSegmentId: 'ec9636cd-a8fc-4cef-9d0a-ae9af9ef0640',
                                    transportInformation: {
                                        known: [
                                            {
                                                code: '69',
                                                description: 'Restaurant',
                                                category: 'FOOD',
                                            },
                                        ],
                                        unknown: [
                                            {
                                                code: '4',
                                                description: 'Standard class only',
                                            },
                                        ],
                                    },
                                    departureDateTime: '2021-07-10T16:22:00',
                                    departureLocationName: 'Sthlm Central',
                                    departureLocationNameLong: 'Stockholm Centralstation',
                                    departureTaxiOption: true,
                                    departureStationCode: 'STH',
                                    arrivalDateTime: '2021-07-10T21:21:00',
                                    arrivalLocationName: 'Malmö C',
                                    arrivalLocationNameLong: 'Malmö Centralstation',
                                    arrivalTaxiOption: true,
                                    arrivalStationCode: 'MLMC',
                                    bookingClass: 'SECOND',
                                    travelMethod: 'Train',
                                    productCode: 'Other',
                                    transportId: '3943',
                                    segmentProducer: 'Snälltåget',
                                    serviceBrandName: ' ',
                                    duration: 299,
                                },
                            ],
                        },
                    ],
                },
            ],
            subTotalPrice: {
                currency: 'EUR',
                amount: 103.72,
            },
            bookingMode: _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_0__.BookingMode.ONLINE,
            co2EmissionInGrams: null,
            integrationFee: null,
        },
    ],
    rentalCarBookings: [
        {
            id: '680d6817-4c4e-4fd7-abda-7a6b07beef09',
            status: _src_app_models_constants_booking_status_constants__WEBPACK_IMPORTED_MODULE_4__.BookingStatusV2.COMPLETION,
            vehicle: {
                model: 'Toyota Yaris',
                category: _src_app_models_cart_items_rental_car_booking_model__WEBPACK_IMPORTED_MODULE_3__.CarClass.ECONOMY,
                type: null,
                transmission: _src_app_models_cart_items_rental_car_booking_model__WEBPACK_IMPORTED_MODULE_3__.CarTransmissionType.MANUAL,
                driveType: null,
                fuelAndDistance: null,
                airConditioner: true,
                typeCode: 'ECMR',
                information: {
                    passengerCapacity: 5,
                    doorNumber: 5,
                    bootSize: 3,
                },
            },
            carAgency: {
                code: 'ZE',
                name: _src_app_models_cart_items_rental_car_booking_model__WEBPACK_IMPORTED_MODULE_3__.CarCompany.HERTZ,
                termsAndConditions: null,
                cancellation: {
                    policy: null,
                    ratePolicy: null,
                    fee: null,
                    policyKey: 'untilPickUpTime',
                    ratePolicyKey: 'cancellationDetails',
                },
            },
            pickup: {
                dateAndTime: '2021-06-18T10:00:00',
                latitude: 59.65,
                longitude: 17.91667,
                significance: null,
                unit: null,
                value: null,
                address: {
                    street: 'Benstocksvagen 1',
                    city: 'Stockholm',
                    code: '1A',
                    name: 'STOT52',
                    countryCode: null,
                },
            },
            dropOff: {
                dateAndTime: '2021-06-21T10:00:00',
                latitude: 59.65,
                longitude: 17.91667,
                significance: null,
                unit: null,
                value: null,
                address: {
                    street: 'Benstocksvagen 1',
                    city: 'Stockholm',
                    code: '1A',
                    name: 'STOT52',
                    countryCode: null,
                },
            },
            offerPriceInfo: [
                {
                    ratePrice: {
                        identifier: null,
                        pnrIdentifier: 'OF9PY2',
                        agencyIdentifier: 'J778B732370',
                        amount: 198.39,
                        currency: 'EUR',
                        type: null,
                        amountQualifier: null,
                        code: null,
                        planIndicator: null,
                    },
                    mileagePolicy: {
                        type: 'Km',
                        qualifier: 'UNL',
                        quantity: null,
                        period: 'per rental',
                    },
                    associatedCharges: [
                        {
                            chargeType: 'EQUIPMENT',
                            unitPrice: 35.58,
                            quantity: 1,
                            amount: 35.58,
                            chargeCode: 'CST',
                            freeText: 'CHILD SEAT FOR TODDLER',
                            amountQualifier: _src_app_models_cart_items_rental_car_booking_model__WEBPACK_IMPORTED_MODULE_3__.AmountQualifier.OPTIONAL,
                        },
                        {
                            chargeType: 'EQUIPMENT',
                            unitPrice: 17.79,
                            quantity: 1,
                            amount: 17.79,
                            chargeCode: 'CBS',
                            freeText: 'CHILD BOOSTER SEAT',
                            amountQualifier: _src_app_models_cart_items_rental_car_booking_model__WEBPACK_IMPORTED_MODULE_3__.AmountQualifier.OPTIONAL,
                        },
                    ],
                },
            ],
            driver: {
                userId: 'd649b842-9bff-4a6e-9e52-20f69a082e85',
                firstName: 'John',
                lastName: 'Doe',
                email: 'example.user@example.com',
                title: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.UserTitle.MR,
                phoneNumber: null,
                dateOfBirth: '1999-02-18',
                travelerReferenceFields: {},
            },
            onlyBookerConfirmation: false,
        },
    ],
    labels: [],
    outOfPolicyChecker: {
        customerNeedsApproval: false,
        hotelPolicyCheckers: [],
        flightPolicyCheckers: [],
        trainPolicyCheckers: [],
        outOfPolicy: false,
    },
    createdById: 'd649b842-9bff-4a6e-9e52-20f69a082e85',
    createdByType: 'CUSTOMER',
    createdAt: '2021-05-30T09:51:56',
    yourReference: null,
    currentOrder: {
        id: '2b381b87-7503-4bcc-9345-72f8269d58fc',
        customerId: 'd649b842-9bff-4a6e-9e52-20f69a082e85',
        travelReference: '2b381b8',
        status: 'COMPLETED',
        tripId: 'DT0151222021-001',
        requestApprovalDueDate: null,
        price: {
            totalPriceToPay: 810.78,
            totalPrice: 810.78,
            localTaxes: 0,
            discount: 0,
            currency: 'EUR',
        },
        paymentMethod: 'BILLING_PROFILE',
        gps: [
            {
                id: '7d89bfe3-c3dd-4b55-b2d8-39934a601269',
                requestedCheckIn: '2021-06-18T00:00:00',
                requestedCheckOut: '2021-06-20T00:00:00',
                requestedRooms: [
                    {
                        requestedRoomId: '2209659b-3a6c-486d-8ab2-d77a98772cf1',
                        adults: 1,
                        children: 0,
                        infants: 0,
                        bedType: null,
                        roomName: 'Economy Room (No Windows Hobo Sleeper)',
                        occupants: [
                            {
                                id: '2f86ecd7-236f-4959-921a-5611011c0fff',
                                userId: 'd649b842-9bff-4a6e-9e52-20f69a082e85',
                                firstName: 'John',
                                lastName: 'Doe',
                                email: 'example.user@example.com',
                                phoneNumber: '+38160111222',
                                companyName: null,
                                emailConfirmation: false,
                                costCenterId: '',
                                primaryOccupant: true,
                                travelerReferenceFields: {},
                            },
                        ],
                    },
                ],
                specialRequests: null,
                locationPreferences: {
                    cityName: 'Malmö',
                    hotelAddress: 'Baltzarsgatan 20',
                },
                hotelBooker: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'example.user@example.com',
                    phoneNumber: '+38160111222',
                    companyName: null,
                },
                stars: 4,
                gym: true,
                pool: false,
                breakfast: false,
                requestedCurrency: 'EUR',
                requestedPrice: 148.9,
                localTaxes: {
                    currency: null,
                    amount: 0,
                },
                bookingAction: _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_0__.BookingAction.NONE,
                bookingStatus: 'COMPLETED',
                type: _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_0__.BookingType.CM_BOOKING,
                cancellationPolicies: [],
                hotelDescription: {
                    position: {
                        latitude: 55.60456,
                        longitude: 13.0038,
                    },
                    hotelName: 'Hotel Garden',
                    address: 'Baltzarsgatan 20',
                    phoneNumber: '',
                    email: '',
                    hotelImage: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/172263018.jpg' +
                        '?k=b9499f8c0c4f1c6f146821c4d293645708b42ee077388700f3b9718cbfd44f1f&o=',
                    reservationCodes: [
                        {
                            reservationCode: '2543101292',
                            reservationType: _src_app_models_cart_items_hotel_booking_model__WEBPACK_IMPORTED_MODULE_1__.ReservationType.ID,
                        },
                        {
                            reservationCode: '9692',
                            reservationType: _src_app_models_cart_items_hotel_booking_model__WEBPACK_IMPORTED_MODULE_1__.ReservationType.PIN,
                        },
                    ],
                    moreContentAvailable: false,
                    providerName: 'BOOKING_COM',
                },
                paymentStatus: _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_0__.BookingPaymentStatus.COMPLETED,
                corporateRate: false,
                refundable: false,
                prePaid: true,
            },
        ],
        flightBookings: [
            {
                id: '4dc9cf10-5e70-4dcb-8707-faf30d81df03',
                totalPrice: 114.67,
                currency: 'EUR',
                co2EmissionInGrams: 10200000,
                departingFlightDeparture: '2021-06-17T11:10:00',
                departingFlightDuration: 42900,
                arrivingFlightDuration: 42900,
                numberOfStops: 1,
                flights: [
                    {
                        duration: 42900,
                        co2EmissionInGrams: 10200000,
                        segments: [
                            {
                                id: '31347663-e5be-4d97-ace3-69ea6da944fe',
                                duration: 9900,
                                marketingCarrier: 'DY',
                                marketingAirline: {
                                    code: 'DY',
                                    name: 'Norwegian',
                                    iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/DY.gif',
                                },
                                operatingCarrier: 'DY',
                                operatingAirline: {
                                    code: 'DY',
                                    name: 'Norwegian',
                                    iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/DY.gif',
                                },
                                flightNumber: '1977',
                                aircraftModel: '73H',
                                arrival: {
                                    time: '2021-06-17T13:55:00',
                                    airportCode: 'OSL',
                                    airportName: 'Oslo',
                                    airportCountryCode: 'NO',
                                    terminal: null,
                                    flightTaxiOption: false,
                                },
                                departure: {
                                    time: '2021-06-17T11:10:00',
                                    airportCode: 'BEG',
                                    airportName: 'Belgrade',
                                    airportCountryCode: 'RS',
                                    terminal: '2',
                                    flightTaxiOption: false,
                                },
                                airportChange: false,
                                layover: 14700,
                                shortLayover: null,
                                longLayover: false,
                                differentDay: true,
                                cabinClass: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.CabinClass.ECONOMY,
                                baggageAllowance: {
                                    quantity: null,
                                    weight: {
                                        value: null,
                                        unit: null,
                                    },
                                },
                            },
                            {
                                id: 'e018812e-0e85-4c57-b4c4-f2af7abd8610',
                                duration: 3600,
                                marketingCarrier: 'DY',
                                marketingAirline: {
                                    code: 'DY',
                                    name: 'Norwegian',
                                    iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/DY.gif',
                                },
                                operatingCarrier: 'DY',
                                operatingAirline: {
                                    code: 'DY',
                                    name: 'Norwegian',
                                    iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/DY.gif',
                                },
                                flightNumber: '822',
                                aircraftModel: '73H',
                                arrival: {
                                    time: '2021-06-17T19:00:00',
                                    airportCode: 'ARN',
                                    airportName: 'Stockholm Arlanda',
                                    airportCountryCode: 'SE',
                                    terminal: '5',
                                    flightTaxiOption: false,
                                },
                                departure: {
                                    time: '2021-06-17T18:00:00',
                                    airportCode: 'OSL',
                                    airportName: 'Oslo',
                                    airportCountryCode: 'NO',
                                    terminal: null,
                                    flightTaxiOption: false,
                                },
                                airportChange: false,
                                layover: null,
                                shortLayover: null,
                                longLayover: false,
                                differentDay: true,
                                cabinClass: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.CabinClass.ECONOMY,
                                baggageAllowance: {
                                    quantity: null,
                                    weight: {
                                        value: null,
                                        unit: null,
                                    },
                                },
                            },
                        ],
                    },
                ],
                travelers: [
                    {
                        id: 'be341164-b5b9-48bf-bf46-f86200b2908b',
                        userId: 'd649b842-9bff-4a6e-9e52-20f69a082e85',
                        title: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.UserTitle.MR,
                        firstName: 'John',
                        lastName: 'Doe',
                        middleName: null,
                        birthday: '1999-02-18',
                        loyaltyCardProvider: null,
                        loyaltyCardNumber: null,
                        email: 'example.user@example.com',
                        emailConfirmation: false,
                        travelerType: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.TravelerType.ADULT,
                        flightTickets: [
                            {
                                ticketNo: '328-1103400401',
                                segment: [
                                    {
                                        id: '31347663-e5be-4d97-ace3-69ea6da944fe',
                                        duration: 9900,
                                        marketingCarrier: 'DY',
                                        marketingAirline: {
                                            code: 'DY',
                                            name: 'Norwegian',
                                            iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/DY.gif',
                                        },
                                        operatingCarrier: 'DY',
                                        operatingAirline: {
                                            code: 'DY',
                                            name: 'Norwegian',
                                            iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/DY.gif',
                                        },
                                        flightNumber: '1977',
                                        aircraftModel: '73H',
                                        arrival: {
                                            time: '2021-06-17T13:55:00',
                                            airportCode: 'OSL',
                                            airportName: 'Oslo',
                                            airportCountryCode: 'NO',
                                            terminal: null,
                                            flightTaxiOption: false,
                                        },
                                        departure: {
                                            time: '2021-06-17T11:10:00',
                                            airportCode: 'BEG',
                                            airportName: 'Belgrade',
                                            airportCountryCode: 'RS',
                                            terminal: '2',
                                            flightTaxiOption: false,
                                        },
                                        airportChange: false,
                                        layover: 14700,
                                        shortLayover: null,
                                        longLayover: false,
                                        differentDay: true,
                                        cabinClass: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.CabinClass.ECONOMY,
                                        baggageAllowance: {
                                            quantity: null,
                                            weight: {
                                                value: null,
                                                unit: null,
                                            },
                                        },
                                    },
                                    {
                                        id: 'e018812e-0e85-4c57-b4c4-f2af7abd8610',
                                        duration: 3600,
                                        marketingCarrier: 'DY',
                                        marketingAirline: {
                                            code: 'DY',
                                            name: 'Norwegian',
                                            iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/DY.gif',
                                        },
                                        operatingCarrier: 'DY',
                                        operatingAirline: {
                                            code: 'DY',
                                            name: 'Norwegian',
                                            iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/DY.gif',
                                        },
                                        flightNumber: '822',
                                        aircraftModel: '73H',
                                        arrival: {
                                            time: '2021-06-17T19:00:00',
                                            airportCode: 'ARN',
                                            airportName: 'Stockholm Arlanda',
                                            airportCountryCode: 'SE',
                                            terminal: '5',
                                            flightTaxiOption: false,
                                        },
                                        departure: {
                                            time: '2021-06-17T18:00:00',
                                            airportCode: 'OSL',
                                            airportName: 'Oslo',
                                            airportCountryCode: 'NO',
                                            terminal: null,
                                            flightTaxiOption: false,
                                        },
                                        airportChange: false,
                                        layover: null,
                                        shortLayover: null,
                                        longLayover: false,
                                        differentDay: true,
                                        cabinClass: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.CabinClass.ECONOMY,
                                        baggageAllowance: {
                                            quantity: null,
                                            weight: {
                                                value: null,
                                                unit: null,
                                            },
                                        },
                                    },
                                ],
                            },
                        ],
                        costCenterId: null,
                        addons: null,
                        exchanged: false,
                        travelerReferenceFields: {},
                    },
                ],
                bookingReference: {
                    reference: 'OF9ABX',
                    source: 'Amadeus',
                },
                status: 'COMPLETED',
                action: _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_0__.BookingAction.NONE,
                paymentStatus: _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_0__.BookingPaymentStatus.COMPLETED,
                hasExchange: false,
                exchanged: false,
            },
            {
                id: '6e49f7d7-e9c6-4488-81dc-e922f1031f16',
                totalPrice: 133.7,
                currency: 'EUR',
                co2EmissionInGrams: 10200000,
                departingFlightDeparture: '2021-06-20T10:30:00',
                departingFlightDuration: 182100,
                arrivingFlightDuration: 182100,
                numberOfStops: 1,
                flights: [
                    {
                        duration: 182100,
                        co2EmissionInGrams: 10200000,
                        segments: [
                            {
                                id: '166f60c0-fb74-4c19-a58f-43902fc74aa4',
                                duration: 6300,
                                marketingCarrier: 'LO',
                                marketingAirline: {
                                    code: 'LO',
                                    name: 'LOT - Polish Airlines',
                                    iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/LO.gif',
                                },
                                operatingCarrier: 'LO',
                                operatingAirline: {
                                    code: 'LO',
                                    name: 'LOT - Polish Airlines',
                                    iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/LO.gif',
                                },
                                flightNumber: '454',
                                aircraftModel: 'E75',
                                arrival: {
                                    time: '2021-06-20T12:15:00',
                                    airportCode: 'WAW',
                                    airportName: 'Warsaw',
                                    airportCountryCode: 'PL',
                                    terminal: null,
                                    flightTaxiOption: false,
                                },
                                departure: {
                                    time: '2021-06-20T10:30:00',
                                    airportCode: 'ARN',
                                    airportName: 'Stockholm Arlanda',
                                    airportCountryCode: 'SE',
                                    terminal: '5',
                                    flightTaxiOption: false,
                                },
                                airportChange: false,
                                layover: 84900,
                                shortLayover: null,
                                longLayover: false,
                                differentDay: true,
                                cabinClass: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.CabinClass.ECONOMY,
                                baggageAllowance: {
                                    quantity: null,
                                    weight: {
                                        value: null,
                                        unit: null,
                                    },
                                },
                            },
                            {
                                id: 'e4580d30-3e1c-4bf3-be4d-047146bd9ffa',
                                duration: 6000,
                                marketingCarrier: 'LO',
                                marketingAirline: {
                                    code: 'LO',
                                    name: 'LOT - Polish Airlines',
                                    iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/LO.gif',
                                },
                                operatingCarrier: 'LO',
                                operatingAirline: {
                                    code: 'LO',
                                    name: 'LOT - Polish Airlines',
                                    iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/LO.gif',
                                },
                                flightNumber: '571',
                                aircraftModel: 'E75',
                                arrival: {
                                    time: '2021-06-21T13:30:00',
                                    airportCode: 'BEG',
                                    airportName: 'Belgrade',
                                    airportCountryCode: 'RS',
                                    terminal: '2',
                                    flightTaxiOption: false,
                                },
                                departure: {
                                    time: '2021-06-21T11:50:00',
                                    airportCode: 'WAW',
                                    airportName: 'Warsaw',
                                    airportCountryCode: 'PL',
                                    terminal: null,
                                    flightTaxiOption: false,
                                },
                                airportChange: false,
                                layover: null,
                                shortLayover: null,
                                longLayover: false,
                                differentDay: true,
                                cabinClass: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.CabinClass.ECONOMY,
                                baggageAllowance: {
                                    quantity: null,
                                    weight: {
                                        value: null,
                                        unit: null,
                                    },
                                },
                            },
                        ],
                    },
                ],
                travelers: [
                    {
                        id: 'ea953607-ccef-40e5-9d54-81ce0e0e74b9',
                        userId: 'd649b842-9bff-4a6e-9e52-20f69a082e85',
                        title: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.UserTitle.MR,
                        firstName: 'John',
                        lastName: 'Doe',
                        middleName: null,
                        birthday: '1999-02-18',
                        loyaltyCardProvider: null,
                        loyaltyCardNumber: null,
                        email: 'example.user@example.com',
                        emailConfirmation: false,
                        travelerType: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.TravelerType.ADULT,
                        flightTickets: [
                            {
                                ticketNo: '080-1966415096',
                                segment: [
                                    {
                                        id: '166f60c0-fb74-4c19-a58f-43902fc74aa4',
                                        duration: 6300,
                                        marketingCarrier: 'LO',
                                        marketingAirline: {
                                            code: 'LO',
                                            name: 'LOT - Polish Airlines',
                                            iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/LO.gif',
                                        },
                                        operatingCarrier: 'LO',
                                        operatingAirline: {
                                            code: 'LO',
                                            name: 'LOT - Polish Airlines',
                                            iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/LO.gif',
                                        },
                                        flightNumber: '454',
                                        aircraftModel: 'E75',
                                        arrival: {
                                            time: '2021-06-20T12:15:00',
                                            airportCode: 'WAW',
                                            airportName: 'Warsaw',
                                            airportCountryCode: 'PL',
                                            terminal: null,
                                            flightTaxiOption: false,
                                        },
                                        departure: {
                                            time: '2021-06-20T10:30:00',
                                            airportCode: 'ARN',
                                            airportName: 'Stockholm Arlanda',
                                            airportCountryCode: 'SE',
                                            terminal: '5',
                                            flightTaxiOption: false,
                                        },
                                        airportChange: false,
                                        layover: 84900,
                                        shortLayover: null,
                                        longLayover: false,
                                        differentDay: true,
                                        cabinClass: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.CabinClass.ECONOMY,
                                        baggageAllowance: {
                                            quantity: null,
                                            weight: {
                                                value: null,
                                                unit: null,
                                            },
                                        },
                                    },
                                    {
                                        id: 'e4580d30-3e1c-4bf3-be4d-047146bd9ffa',
                                        duration: 6000,
                                        marketingCarrier: 'LO',
                                        marketingAirline: {
                                            code: 'LO',
                                            name: 'LOT - Polish Airlines',
                                            iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/LO.gif',
                                        },
                                        operatingCarrier: 'LO',
                                        operatingAirline: {
                                            code: 'LO',
                                            name: 'LOT - Polish Airlines',
                                            iconUrl: 'https://dib-cdn-152731.c.cdn77.org/production/flights/carrierlogos/LO.gif',
                                        },
                                        flightNumber: '571',
                                        aircraftModel: 'E75',
                                        arrival: {
                                            time: '2021-06-21T13:30:00',
                                            airportCode: 'BEG',
                                            airportName: 'Belgrade',
                                            airportCountryCode: 'RS',
                                            terminal: '2',
                                            flightTaxiOption: false,
                                        },
                                        departure: {
                                            time: '2021-06-21T11:50:00',
                                            airportCode: 'WAW',
                                            airportName: 'Warsaw',
                                            airportCountryCode: 'PL',
                                            terminal: null,
                                            flightTaxiOption: false,
                                        },
                                        airportChange: false,
                                        layover: null,
                                        shortLayover: null,
                                        longLayover: false,
                                        differentDay: true,
                                        cabinClass: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.CabinClass.ECONOMY,
                                        baggageAllowance: {
                                            quantity: null,
                                            weight: {
                                                value: null,
                                                unit: null,
                                            },
                                        },
                                    },
                                ],
                            },
                        ],
                        costCenterId: null,
                        addons: null,
                        exchanged: false,
                        travelerReferenceFields: {},
                    },
                ],
                bookingReference: {
                    reference: 'OF9KYQ',
                    source: 'Amadeus',
                },
                status: 'COMPLETED',
                action: _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_0__.BookingAction.NONE,
                paymentStatus: _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_0__.BookingPaymentStatus.COMPLETED,
                hasExchange: false,
                exchanged: false,
            },
        ],
        taxiBookings: [
            {
                id: '11111111-8f25-4379-b90e-6f4d273ca50f',
                status: 'COMPLETED',
                bookingReference: 'ASDA234',
                type: _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_0__.BookingType.TAXI,
                offerId: 'cee5df1e-8f25-4379-b90e-6f4d273ca50f',
                bookingId: '4dc9cf10-5e70-4dcb-8707-faf30d81df03',
                segmentId: 'e018812e-0e85-4c57-b4c4-f2af7abd8610',
                start: {
                    datetime: '2021-09-20T06:30:00',
                    locationCode: null,
                    address: '181 32 Lidingö',
                    city: 'Herrljunga',
                    zip: '52432',
                    country: 'SE',
                    lat: 58.0770692,
                    lon: 13.0058573,
                },
                end: {
                    datetime: '2021-09-20T06:30:00',
                    locationCode: 'ARN',
                    address: 'Arlanda flygplats',
                    city: 'STOCKHOLM-ARLANDA',
                    zip: '19060',
                    country: 'SE',
                    lat: 59.6478722222222,
                    lon: 17.9259027777778,
                },
                taxiType: 'FLIGHT',
                transferType: 'PRIVATE',
                serviceProvider: {
                    name: 'Taxibokning',
                    code: 'TXB',
                },
                vehicle: {
                    category: 'ST',
                    description: 'Regular taxi, with Taxi Falköping',
                    seatCount: 3,
                    baggageCount: 3,
                },
                travelers: [{ id: '13213', firstName: 'John', lastName: 'Doe', travelerReferenceFields: {} }],
                cancellationPolicies: [
                    {
                        // Non-refundable within 60 minutes of pick-up time
                        costAmount: 64.32,
                        refundAmount: 0,
                        refundAmountPerNight: null,
                        currency: 'EUR',
                        fromDate: '2021-09-20T05:30:00',
                        toDate: '2021-09-20T06:30:00',
                        used: false,
                        fullRefundable: false,
                        cancellationFeeDetails: {
                            amount: null,
                            currency: 'EUR',
                            percent: 100,
                            numberOfNights: null,
                        },
                    },
                    {
                        // Partially refundable up to 60 minutes of pick-up time
                        costAmount: 18.53,
                        refundAmount: 45.89,
                        refundAmountPerNight: null,
                        currency: 'EUR',
                        fromDate: '2021-09-20T04:30:00',
                        toDate: '2021-09-20T05:30:00',
                        used: false,
                        fullRefundable: false,
                        cancellationFeeDetails: {
                            amount: null,
                            currency: 'EUR',
                            percent: 20,
                            numberOfNights: null,
                        },
                    },
                    {
                        // Free cancellation up to 120 minutes prior to ride
                        costAmount: 0,
                        refundAmount: 64.32,
                        refundAmountPerNight: null,
                        currency: 'EUR',
                        fromDate: '2020-09-20T06:30:00',
                        toDate: '2021-09-20T04:30:00',
                        used: false,
                        fullRefundable: true,
                        cancellationFeeDetails: {
                            amount: null,
                            currency: 'EUR',
                            percent: 0,
                            numberOfNights: null,
                        },
                    },
                    {
                        // Non-refundable within 60 minutes of pick-up time
                        costAmount: 64.32,
                        refundAmount: 0,
                        refundAmountPerNight: null,
                        currency: 'EUR',
                        fromDate: '2021-09-20T05:30:00',
                        toDate: '2021-09-20T06:30:00',
                        used: false,
                        fullRefundable: false,
                        cancellationFeeDetails: {
                            amount: 64.32,
                            currency: 'EUR',
                            percent: 0,
                            numberOfNights: null,
                        },
                    },
                    {
                        // Partially refundable up to 60 minutes of pick-up time
                        costAmount: 18.53,
                        refundAmount: 45.89,
                        refundAmountPerNight: null,
                        currency: 'EUR',
                        fromDate: '2021-09-20T04:30:00',
                        toDate: '2021-09-20T05:30:00',
                        used: false,
                        fullRefundable: false,
                        cancellationFeeDetails: {
                            amount: 18.53,
                            currency: 'EUR',
                            percent: null,
                            numberOfNights: null,
                        },
                    },
                    {
                        // Free cancellation up to 120 minutes prior to ride
                        costAmount: 0,
                        refundAmount: 64.32,
                        refundAmountPerNight: null,
                        currency: 'EUR',
                        fromDate: '2020-09-20T06:30:00',
                        toDate: '2021-09-20T04:30:00',
                        used: false,
                        fullRefundable: true,
                        cancellationFeeDetails: {
                            amount: 0,
                            currency: 'EUR',
                            percent: null,
                            numberOfNights: null,
                        },
                    },
                ],
                price: {
                    amount: 1725,
                    currency: 'SEK',
                },
                items: [],
            },
            {
                id: '22222222-8f25-4379-b90e-6f4d273ca50f',
                status: 'COMPLETED',
                bookingReference: 'KHAG87',
                type: _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_0__.BookingType.TAXI,
                offerId: '00bc0788-71b5-4774-a124-666d27350f5e',
                bookingId: '6e49f7d7-e9c6-4488-81dc-e922f1031f16',
                segmentId: '166f60c0-fb74-4c19-a58f-43902fc74aa4',
                start: {
                    datetime: '2021-09-20T11:35:00',
                    locationCode: 'MMX',
                    address: null,
                    city: 'SVEDALA',
                    zip: '23391',
                    country: 'SE',
                    lat: 55.5404,
                    lon: 13.3642,
                },
                end: {
                    datetime: '2021-09-20T11:35:00',
                    locationCode: null,
                    address: 'Tornfalksgatan Malmö',
                    city: 'Malmö',
                    zip: 'undefined',
                    country: 'SE',
                    lat: 55.5676661,
                    lon: 13.0121061,
                },
                taxiType: 'FLIGHT',
                transferType: 'PRIVATE',
                serviceProvider: {
                    name: 'Taxibokning',
                    code: 'TXB',
                },
                vehicle: {
                    category: 'ST',
                    description: 'Regular taxi, with Vellinge Taxi',
                    seatCount: 3,
                    baggageCount: 3,
                },
                travelers: [{ id: '13213', firstName: 'John', lastName: 'Doe', travelerReferenceFields: {} }],
                cancellationPolicies: [
                    {
                        // Non-refundable within 60 minutes of pick-up time
                        costAmount: 64.32,
                        refundAmount: 0,
                        refundAmountPerNight: null,
                        currency: 'EUR',
                        fromDate: '2021-09-20T10:35:00',
                        toDate: '2021-09-20T11:35:00',
                        used: false,
                        fullRefundable: false,
                        cancellationFeeDetails: {
                            amount: null,
                            currency: 'EUR',
                            percent: 100,
                            numberOfNights: null,
                        },
                    },
                    {
                        // Partially refundable up to 60 minutes of pick-up time
                        costAmount: 18.53,
                        refundAmount: 45.89,
                        refundAmountPerNight: null,
                        currency: 'EUR',
                        fromDate: '2021-09-20T09:35:00',
                        toDate: '2021-09-20T10:35:00',
                        used: false,
                        fullRefundable: false,
                        cancellationFeeDetails: {
                            amount: null,
                            currency: 'EUR',
                            percent: 20,
                            numberOfNights: null,
                        },
                    },
                    {
                        // Free cancellation up to 120 minutes prior to ride
                        costAmount: 0,
                        refundAmount: 64.32,
                        refundAmountPerNight: null,
                        currency: 'EUR',
                        fromDate: '2020-09-20T11:35:00',
                        toDate: '2021-09-20T09:35:00',
                        used: false,
                        fullRefundable: true,
                        cancellationFeeDetails: {
                            amount: null,
                            currency: 'EUR',
                            percent: 0,
                            numberOfNights: null,
                        },
                    },
                    {
                        // Non-refundable within 60 minutes of pick-up time
                        costAmount: 64.32,
                        refundAmount: 0,
                        refundAmountPerNight: null,
                        currency: 'EUR',
                        fromDate: '2021-09-20T10:35:00',
                        toDate: '2021-09-20T11:35:00',
                        used: false,
                        fullRefundable: false,
                        cancellationFeeDetails: {
                            amount: 64.32,
                            currency: 'EUR',
                            percent: 0,
                            numberOfNights: null,
                        },
                    },
                    {
                        // Partially refundable up to 60 minutes of pick-up time
                        costAmount: 18.53,
                        refundAmount: 45.89,
                        refundAmountPerNight: null,
                        currency: 'EUR',
                        fromDate: '2021-09-20T09:35:00',
                        toDate: '2021-09-20T10:35:00',
                        used: false,
                        fullRefundable: false,
                        cancellationFeeDetails: {
                            amount: 18.53,
                            currency: 'EUR',
                            percent: null,
                            numberOfNights: null,
                        },
                    },
                    {
                        // Free cancellation up to 120 minutes prior to ride
                        costAmount: 0,
                        refundAmount: 64.32,
                        refundAmountPerNight: null,
                        currency: 'EUR',
                        fromDate: '2020-09-20T11:35:00',
                        toDate: '2021-09-20T09:35:00',
                        used: false,
                        fullRefundable: true,
                        cancellationFeeDetails: {
                            amount: 0,
                            currency: 'EUR',
                            percent: null,
                            numberOfNights: null,
                        },
                    },
                ],
                price: {
                    amount: 598,
                    currency: 'SEK',
                },
                items: [],
            },
        ],
        genericProducts: [],
        trainBookings: [
            {
                id: '98cae036-10c7-4420-95f0-2c0aad571b2a',
                preOrderId: '60b360f54b8882280e6f055e',
                status: _src_app_models_constants_booking_status_constants__WEBPACK_IMPORTED_MODULE_4__.BookingStatusV2.COMPLETION,
                bookingReference: 'QVF0533H',
                booker: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'example.user@example.com',
                    phoneNumber: '+38160111222',
                },
                rebookable: true,
                refundable: false,
                dynamicCancellationPolicy: true,
                cancelable: true,
                travellers: [
                    {
                        id: '52013bdd-3db2-4117-9273-4938e575db01',
                        travellerNumber: 1,
                        firstName: 'John',
                        lastName: 'Doe',
                        email: 'example.user@example.com',
                        phoneNumber: '+38160111222',
                        optionSelections: [],
                        seatingSelections: [
                            {
                                journeyId: 965464581,
                                itineraryId: 1,
                                segmentId: '1',
                                description: 'Carriage: 11, Seat: 116, Window, Open coach',
                                carriage: '11',
                                seat: '116',
                                placementOrientation: 'Window',
                                placementCharacteristics: 'Open coach',
                            },
                        ],
                        addons: [],
                        userId: 'd649b842-9bff-4a6e-9e52-20f69a082e85',
                        travelerReferenceFields: {},
                    },
                ],
                journeys: [
                    {
                        journeyAdviceId: 965464581,
                        direction: _src_app_models_cart_items_train_journey_model__WEBPACK_IMPORTED_MODULE_6__.JourneyDirection.IN,
                        itineraries: [
                            {
                                itineraryId: 1,
                                priceGroupType: _src_app_models_cart_items_train_journey_intinerary_segment_model__WEBPACK_IMPORTED_MODULE_5__.ItineraryPriceGroup.SEAT,
                                segments: [
                                    {
                                        segmentId: '1',
                                        uniqueSegmentId: 'ec9636cd-a8fc-4cef-9d0a-ae9af9ef0640',
                                        transportInformation: {
                                            known: [
                                                {
                                                    code: '69',
                                                    description: 'Restaurant',
                                                    category: 'FOOD',
                                                },
                                            ],
                                            unknown: [
                                                {
                                                    code: '4',
                                                    description: 'Standard class only',
                                                },
                                            ],
                                        },
                                        departureDateTime: '2021-07-14T16:11:00',
                                        departureLocationName: 'Malmö C',
                                        departureLocationNameLong: 'Malmö Centralstation',
                                        departureTaxiOption: true,
                                        departureStationCode: 'MLMC',
                                        arrivalDateTime: '2021-07-14T21:12:00',
                                        arrivalLocationName: 'Sthlm Central',
                                        arrivalLocationNameLong: 'Stockholm Centralstation',
                                        arrivalTaxiOption: true,
                                        arrivalStationCode: 'STH',
                                        bookingClass: 'SECOND',
                                        travelMethod: 'Train',
                                        productCode: 'Other',
                                        transportId: '3942',
                                        segmentProducer: 'Snälltåget',
                                        serviceBrandName: ' ',
                                        duration: 301,
                                    },
                                ],
                            },
                        ],
                    },
                ],
                subTotalPrice: {
                    currency: 'EUR',
                    amount: 103.72,
                },
                bookingMode: _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_0__.BookingMode.ONLINE,
                co2EmissionInGrams: null,
                integrationFee: null,
            },
            {
                id: '96edd4e3-acee-4f01-925c-14a4cbd7ae01',
                preOrderId: '60b360fb0db0415701cc27fc',
                status: _src_app_models_constants_booking_status_constants__WEBPACK_IMPORTED_MODULE_4__.BookingStatusV2.COMPLETION,
                bookingReference: 'QVF0532A',
                booker: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'example.user@example.com',
                    phoneNumber: '+38160111222',
                },
                rebookable: true,
                refundable: false,
                dynamicCancellationPolicy: true,
                cancelable: true,
                travellers: [
                    {
                        id: 'cc7b9c35-4b12-4d8a-b8af-c7c21f401d7a',
                        travellerNumber: 1,
                        firstName: 'John',
                        lastName: 'Doe',
                        email: 'example.user@example.com',
                        phoneNumber: '+38160111222',
                        optionSelections: [],
                        seatingSelections: [
                            {
                                journeyId: 1902639939,
                                itineraryId: 1,
                                segmentId: '1',
                                description: 'Carriage: 11, Seat: 48, Window, Open coach',
                                carriage: '11',
                                seat: '48',
                                placementOrientation: 'Window',
                                placementCharacteristics: 'Open coach',
                            },
                        ],
                        addons: [],
                        userId: 'd649b842-9bff-4a6e-9e52-20f69a082e85',
                        travelerReferenceFields: {},
                    },
                ],
                journeys: [
                    {
                        journeyAdviceId: 1902639939,
                        direction: _src_app_models_cart_items_train_journey_model__WEBPACK_IMPORTED_MODULE_6__.JourneyDirection.OUT,
                        itineraries: [
                            {
                                itineraryId: 1,
                                priceGroupType: _src_app_models_cart_items_train_journey_intinerary_segment_model__WEBPACK_IMPORTED_MODULE_5__.ItineraryPriceGroup.SEAT,
                                segments: [
                                    {
                                        segmentId: '1',
                                        uniqueSegmentId: 'ec9636cd-a8fc-4cef-9d0a-ae9af9ef0640',
                                        transportInformation: {
                                            known: [
                                                {
                                                    code: '69',
                                                    description: 'Restaurant',
                                                    category: 'FOOD',
                                                },
                                            ],
                                            unknown: [
                                                {
                                                    code: '4',
                                                    description: 'Standard class only',
                                                },
                                            ],
                                        },
                                        departureDateTime: '2021-07-10T16:22:00',
                                        departureLocationName: 'Sthlm Central',
                                        departureLocationNameLong: 'Stockholm Centralstation',
                                        departureTaxiOption: true,
                                        departureStationCode: 'STH',
                                        arrivalDateTime: '2021-07-10T21:21:00',
                                        arrivalLocationName: 'Malmö C',
                                        arrivalLocationNameLong: 'Malmö Centralstation',
                                        arrivalTaxiOption: true,
                                        arrivalStationCode: 'MLMC',
                                        bookingClass: 'SECOND',
                                        travelMethod: 'Train',
                                        productCode: 'Other',
                                        transportId: '3943',
                                        segmentProducer: 'Snälltåget',
                                        serviceBrandName: ' ',
                                        duration: 299,
                                    },
                                ],
                            },
                        ],
                    },
                ],
                subTotalPrice: {
                    currency: 'EUR',
                    amount: 103.72,
                },
                bookingMode: _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_0__.BookingMode.ONLINE,
                co2EmissionInGrams: null,
                integrationFee: null,
            },
        ],
        outOfPolicyChecker: {
            customerNeedsApproval: false,
            hotelPolicyCheckers: [],
            flightPolicyCheckers: [],
            trainPolicyCheckers: [],
            outOfPolicy: false,
        },
        createdById: 'd649b842-9bff-4a6e-9e52-20f69a082e85',
        createdByType: 'CUSTOMER',
        createdAt: '2021-05-30T00:00:00',
        yourReference: null,
        orderReferenceFields: {
            bookerEmail: '',
            bookerEmployeeNumber: '',
            bookerName: '',
            projectId: '',
            projects: '',
            purposeOfTrip: '',
            purposeOfTripId: '',
            yourReference: '',
        },
    },
};


/***/ }),

/***/ 78086:
/*!*******************************!*\
  !*** ./mock/modules/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mockedModules": () => (/* binding */ mockedModules)
/* harmony export */ });
/* harmony import */ var _mock_vendors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock-vendors */ 74694);
/* harmony import */ var _mock_vendors_payment_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-vendors-payment-providers */ 89085);
/* harmony import */ var _mock_billing_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-billing-requests */ 6962);
/* harmony import */ var _mock_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock-products */ 40101);
/* harmony import */ var _mock_vat_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock-vat-categories */ 18286);
/* harmony import */ var _mock_countries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mock-countries */ 56146);
/* harmony import */ var _mock_features__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock-features */ 14267);
/* harmony import */ var _mock_users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mock-users */ 15620);
/* harmony import */ var _mock_companies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mock-companies */ 59469);
/* harmony import */ var _mock_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mock-auth */ 28447);
/* harmony import */ var _mock_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mock-config */ 42177);
/* harmony import */ var _mock_company_users__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mock-company-users */ 45782);
/* harmony import */ var _mock_system_messages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mock-system-messages */ 67977);
/* harmony import */ var _mock_bookings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mock-bookings */ 52414);
/* harmony import */ var _mock_carts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mock-carts */ 68002);
/* harmony import */ var _mock_pnr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mock-pnr */ 41225);
/* harmony import */ var _mock_cost_centers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mock-cost-centers */ 85339);
/* harmony import */ var _mock_payments__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mock-payments */ 93921);
/* harmony import */ var _mock_employees__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mock-employees */ 17869);
/* harmony import */ var _mock_checkout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mock-checkout */ 21752);




















const mockedModules = [
    _mock_vendors__WEBPACK_IMPORTED_MODULE_0__.getMockVendorRequests,
    _mock_vendors_payment_providers__WEBPACK_IMPORTED_MODULE_1__.getMockVendorsPaymentProviderRequests,
    _mock_billing_requests__WEBPACK_IMPORTED_MODULE_2__.getMockBillingRequestRequests,
    _mock_products__WEBPACK_IMPORTED_MODULE_3__.getMockProductRequests,
    _mock_vat_categories__WEBPACK_IMPORTED_MODULE_4__.getMockVatCategoryRequests,
    _mock_countries__WEBPACK_IMPORTED_MODULE_5__.getMockCountryRequests,
    _mock_features__WEBPACK_IMPORTED_MODULE_6__.getMockFeatureRequests,
    _mock_users__WEBPACK_IMPORTED_MODULE_7__.getMockUserRequests,
    _mock_companies__WEBPACK_IMPORTED_MODULE_8__.getMockCompanyRequests,
    _mock_company_users__WEBPACK_IMPORTED_MODULE_11__.getMockCompanyUserRequests,
    _mock_system_messages__WEBPACK_IMPORTED_MODULE_12__.getMockSystemMessageRequests,
    _mock_bookings__WEBPACK_IMPORTED_MODULE_13__.getMockBookingRequests,
    _mock_carts__WEBPACK_IMPORTED_MODULE_14__.getMockCartRequests,
    _mock_auth__WEBPACK_IMPORTED_MODULE_9__.getMockAuthRequests,
    _mock_config__WEBPACK_IMPORTED_MODULE_10__.getMockConfigRequests,
    _mock_pnr__WEBPACK_IMPORTED_MODULE_15__.getMockPNRRequests,
    _mock_cost_centers__WEBPACK_IMPORTED_MODULE_16__.getMockCostCentersRequests,
    _mock_payments__WEBPACK_IMPORTED_MODULE_17__.getMockPaymentsRequests,
    _mock_employees__WEBPACK_IMPORTED_MODULE_18__.getMockEmployeesRequests,
    _mock_checkout__WEBPACK_IMPORTED_MODULE_19__.getMockCheckoutRequests,
];


/***/ }),

/***/ 28447:
/*!***********************************!*\
  !*** ./mock/modules/mock-auth.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMockAuthRequests": () => (/* binding */ getMockAuthRequests)
/* harmony export */ });
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chance */ 32951);
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chance__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/environments/environment */ 92340);
/* harmony import */ var _src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/app/models/user.model */ 84872);



const chance = chance__WEBPACK_IMPORTED_MODULE_0__.Chance();
const fakeToken = [
    'eyJhbGciOiJIUzUxMiJ9.eyJST0xFX0FHRU5UIjp0cnVlLCJ0bWNjX2lkIjoiVE1DX0',
    'NPTlNPTEUiLCJleHAiOjE2MTY1OTg2NDEsInVzZXJJZCI6ImIxZjZhYjhhLTQ1NGQtND',
    'JjYS04MjA5LWNmYjNkZGRkN2M3OCIsImlhdCI6MTYxNDE3OTQ0MSwidXNlcm5hbWUiOiJh',
    'ZG1pbkBkaWJob3RlbC5zZSJ9.0LN4i5aAnBfFubiPlgxIP1CUMwOHgBAseAxNui7YTEWQ',
    'IAJunvXrZXsBMldE5sHZ9542I972UN6_nMseHt3iUA',
].join('');
function getMockUser() {
    return {
        id: chance.guid(),
        firstName: chance.first(),
        lastName: chance.last(),
        phone: chance.phone(),
        password: null,
        type: _src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__.UserType.SUPER_ADMIN,
        username: chance.email({ domain: 'example.com' }).toLowerCase(),
        disabled: chance.bool({ likelihood: 20 }),
    };
}
const mockAuth = [
    {
        method: 'POST',
        url: '/api/tmcc/authenticate',
        getResponse: (params, body) => {
            return {
                ...getMockUser(),
                token: fakeToken,
                username: body.username,
            };
        },
    },
    {
        method: 'POST',
        url: '/api/tmcc/users/forgot-password',
        getResponse: (params, body) => {
            return body;
        },
    },
    {
        method: 'GET',
        url: '/api/tmcc/users/activate-new-password/{token}',
        getResponse: () => {
            return { valid: true };
        },
    },
    {
        method: 'POST',
        url: '/api/tmcc/users/activate-new-password',
        getResponse: (params, body) => {
            return body;
        },
    },
    {
        method: 'GET',
        url: '/api/tmcc/users/set-new-password/{token}',
        getResponse: () => {
            return { valid: true };
        },
    },
    {
        method: 'POST',
        url: '/api/tmcc/users/set-new-password',
        getResponse: (params, body) => {
            return body;
        },
    },
];
function getMockAuthRequests() {
    return _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.mock.auth ? mockAuth : [];
}


/***/ }),

/***/ 6962:
/*!***********************************************!*\
  !*** ./mock/modules/mock-billing-requests.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMockBillingRequestRequests": () => (/* binding */ getMockBillingRequestRequests)
/* harmony export */ });
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chance */ 32951);
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chance__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/environments/environment */ 92340);
/* harmony import */ var _src_app_models_billing_request_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/app/models/billing-request.model */ 83970);
/* harmony import */ var _src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/app/global/interfaces/response.interface */ 91744);




const chance = chance__WEBPACK_IMPORTED_MODULE_0__.Chance();
function getMockBillingRequests(count = 10) {
    return [...Array.from({ length: count }).keys()].map(() => getMockBillingRequest());
}
function getMockBillingRequest() {
    return {
        id: chance.guid(),
        active: true,
        billingProfileRequestStatus: _src_app_models_billing_request_model__WEBPACK_IMPORTED_MODULE_2__.BillingRequestStatus.PENDING,
        corporationName: chance.company(),
        hasCorporateRate: false,
        stripeCustomerId: chance.guid(),
    };
}
const mockBillingRequests = [
    {
        method: 'GET',
        url: '/api/tmcc/corporations/billing-profiles/requests?page={page}&size={size}',
        params: { page: '([0-9]+)', size: '([0-9]+)' },
        getResponse: ({ page, size }) => {
            return (0,_src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_3__.createFullApiResponse)(getMockBillingRequests(+size), +page, +size, 300);
        },
    },
    {
        method: 'PUT',
        url: '/api/tmcc/corporations/billing-profiles/requests/{id}',
        getResponse: ({ id }, body) => ({ ...body, id }),
    },
];
function getMockBillingRequestRequests() {
    return _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.mock.billingRequests ? mockBillingRequests : [];
}


/***/ }),

/***/ 52414:
/*!***************************************!*\
  !*** ./mock/modules/mock-bookings.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMockBookingRequests": () => (/* binding */ getMockBookingRequests)
/* harmony export */ });
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chance */ 32951);
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chance__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/environments/environment */ 92340);
/* harmony import */ var _src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/app/models/booking.model */ 31282);
/* harmony import */ var _src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/app/global/interfaces/response.interface */ 91744);
/* harmony import */ var _src_app_utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/app/utils/pipes/date.pipe */ 23341);





function getMockBookingListItems(count = 10) {
    return [...Array.from({ length: count }).keys()].map(() => getMockBookingListItem());
}
function getMockBookingListItem(id = new chance__WEBPACK_IMPORTED_MODULE_0__().guid()) {
    // Set the seed value, so we can have consistent values based on the id
    const chance = new chance__WEBPACK_IMPORTED_MODULE_0__(id);
    const currentYear = new Date().getFullYear();
    return {
        cartId: id,
        tripId: chance.string({ length: 8, casing: 'upper', numeric: true, alpha: true }),
        status: chance.pickone(['COMPLETED']),
        companyName: chance.company(),
        travelers: [chance.name(), chance.name(), chance.name()],
        bookerName: chance.name(),
        startDate: (0,_src_app_utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_4__.formatDibDate)(chance.date({ year: currentYear - chance.natural({ min: 1, max: 4 }) }), 'server'),
        endDate: (0,_src_app_utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_4__.formatDibDate)(chance.date({ year: currentYear }), 'server'),
        price: null,
    };
}
function getMockBookingItem(id = new chance__WEBPACK_IMPORTED_MODULE_0__().guid()) {
    // Set the seed value, so we can have consistent values based on the id
    const chance = new chance__WEBPACK_IMPORTED_MODULE_0__(id);
    const currentYear = new Date().getFullYear();
    return {
        cartId: id,
        tripId: chance.string({ length: 8, casing: 'upper', numeric: true, alpha: true }),
        tripName: chance.company(),
        status: chance.pickone(['COMPLETED']),
        company: {
            id: chance.guid(),
            name: chance.company(),
        },
        travelers: [
            {
                id: chance.guid(),
                name: chance.name(),
                username: chance.email({ domain: 'example.com' }).toLowerCase(),
            },
            {
                id: chance.guid(),
                name: chance.name(),
                username: chance.email({ domain: 'example.com' }).toLowerCase(),
            },
            {
                id: chance.guid(),
                name: chance.name(),
                username: chance.email({ domain: 'example.com' }).toLowerCase(),
            },
        ],
        booker: {
            id: chance.guid(),
            name: chance.name(),
            username: chance.email({ domain: 'example.com' }).toLowerCase(),
        },
        productTypes: Object.values(_src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_2__.BookingReferenceTypes),
        numberOfItems: 4,
        startDate: (0,_src_app_utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_4__.formatDibDate)(chance.date({ year: currentYear - chance.natural({ min: 1, max: 4 }) }), 'server'),
        endDate: (0,_src_app_utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_4__.formatDibDate)(chance.date({ year: currentYear }), 'server'),
        agentNote: 'Some agent note!!',
    };
}
const mockBookings = [
    {
        method: 'GET',
        url: '/api/tmcc/bookings?page={page}&size={size}',
        params: { page: '([0-9]+)', size: '([0-9]+)' },
        getResponse: ({ page, size }) => {
            return (0,_src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_3__.createFullApiResponse)(getMockBookingListItems(+size), +page, +size, 120);
        },
    },
    {
        method: 'POST',
        url: '/api/tmcc/bookings',
        getResponse: (params, body) => ({ ...body, id: new chance__WEBPACK_IMPORTED_MODULE_0__().guid() }),
    },
    {
        method: 'GET',
        url: '/api/tmcc/bookings/{id}',
        getResponse: ({ id }) => ({ ...getMockBookingItem(id) }),
    },
    {
        method: 'PATCH',
        url: '/api/tmcc/bookings/update-agent-note/{id}',
        getResponse: ({ id }, body) => ({ ...body, id }),
    },
    {
        method: 'GET',
        url: '/api/tmcc/bookings/reference-types',
        getResponse: () => Object.values(_src_app_models_booking_model__WEBPACK_IMPORTED_MODULE_2__.BookingReferenceTypes),
    },
];
function getMockBookingRequests() {
    return _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.mock.bookings ? mockBookings : [];
}


/***/ }),

/***/ 68002:
/*!************************************!*\
  !*** ./mock/modules/mock-carts.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMockCartRequests": () => (/* binding */ getMockCartRequests)
/* harmony export */ });
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chance */ 32951);
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chance__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/environments/environment */ 92340);
/* harmony import */ var _data_mock_cart_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/mock-cart-data */ 65520);



function getMockCart(id = new chance__WEBPACK_IMPORTED_MODULE_0__().guid()) {
    // Set the seed value, so we can have consistent values based on the id
    const chance = new chance__WEBPACK_IMPORTED_MODULE_0__(id);
    return { ..._data_mock_cart_data__WEBPACK_IMPORTED_MODULE_2__.mockCartData, id };
}
const mockCarts = [
    {
        method: 'GET',
        url: '/api/tmcc/carts/{id}',
        getResponse: ({ id }) => ({ ...getMockCart(id) }),
    },
];
function getMockCartRequests() {
    return _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.mock.carts ? mockCarts : [];
}


/***/ }),

/***/ 21752:
/*!***************************************!*\
  !*** ./mock/modules/mock-checkout.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMockCheckoutRequests": () => (/* binding */ getMockCheckoutRequests)
/* harmony export */ });
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/environments/environment */ 92340);
/* harmony import */ var _src_app_models_payment_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/app/models/payment.model */ 16874);


const mockCheckout = [
    {
        method: 'GET',
        url: `${_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.ams}/api/reference-fields/{companyId}/checkout-options`,
        getResponse: () => {
            return {
                paymentOptions: [
                    { name: _src_app_models_payment_model__WEBPACK_IMPORTED_MODULE_1__.PaymentType.LODGE_CARD, selected: true },
                    { name: _src_app_models_payment_model__WEBPACK_IMPORTED_MODULE_1__.PaymentType.BILLING_PROFILE, selected: true },
                    { name: _src_app_models_payment_model__WEBPACK_IMPORTED_MODULE_1__.PaymentType.CREDIT_CARD, selected: true },
                ],
                project: {
                    mandatory: true,
                    label: 'Custom Project Label',
                    items: [
                        {
                            description: 'Project #1 description',
                            id: '9bcbfb33-5d4f-4cd6-8903-95bd2a50d202',
                            name: 'Project #1',
                            type: 'projects',
                        },
                        {
                            description: 'Project #2 description',
                            id: '51e62ac0-fb5a-41ff-8a1b-5c98c468754a',
                            name: 'Project #2',
                            type: 'projects',
                        },
                    ],
                },
                purposeOfTrip: {
                    mandatory: true,
                    label: null,
                    items: [
                        {
                            description: 'Purpose of trip description',
                            id: '9bcbfb33-5d4f-4cd6-8903-95bd2a50d202',
                            name: 'Purpose of trip',
                            type: 'purposeOfTrip',
                        },
                        {
                            description: 'Purpose of trip #2 description',
                            id: '51e62ac0-fb5a-41ff-8a1b-5c98c468754a',
                            name: 'Purpose of trip #2',
                            type: 'purposeOfTrip',
                        },
                    ],
                },
                yourReference: {
                    mandatory: true,
                    label: null,
                },
            };
        },
    },
    {
        method: 'GET',
        url: `${_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.ams}/api/information-fields/get-booking-channels`,
        getResponse: () => {
            return ['Online', 'Offline - working hours', 'Offline - non working hours'];
        },
    },
];
function getMockCheckoutRequests() {
    return _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mock.checkout ? mockCheckout : [];
}


/***/ }),

/***/ 59469:
/*!****************************************!*\
  !*** ./mock/modules/mock-companies.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMockCompanyRequests": () => (/* binding */ getMockCompanyRequests)
/* harmony export */ });
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chance */ 32951);
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chance__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/environments/environment */ 92340);
/* harmony import */ var _src_app_models_company_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/app/models/company.model */ 44245);
/* harmony import */ var _src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/app/global/interfaces/response.interface */ 91744);
/* harmony import */ var _src_app_utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/app/utils/pipes/date.pipe */ 23341);





function getMockCompanies(count = 10) {
    return [...Array.from({ length: count }).keys()].map(() => getMockCompany());
}
function getMockCompany(id = new chance__WEBPACK_IMPORTED_MODULE_0__().guid()) {
    // Set the seed value, so we can have consistent values based on the id
    const chance = new chance__WEBPACK_IMPORTED_MODULE_0__(id);
    return {
        id,
        corporationName: chance.company(),
        registrationNumber: chance.string({ length: 8, casing: 'upper', alpha: true, numeric: true }),
        // Use last year as creation date for all companies
        activatedAt: (0,_src_app_utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_4__.formatDibDate)(chance.date({ year: new Date().getFullYear() - 1 }), 'server'),
        agentNote: null,
        status: chance.pickone([_src_app_models_company_model__WEBPACK_IMPORTED_MODULE_2__.CompanyStatus.NONE, _src_app_models_company_model__WEBPACK_IMPORTED_MODULE_2__.CompanyStatus.AT_RISK, _src_app_models_company_model__WEBPACK_IMPORTED_MODULE_2__.CompanyStatus.VIP]),
        subscriptionStatus: chance.pickone([
            _src_app_models_company_model__WEBPACK_IMPORTED_MODULE_2__.SubscriptionStatus.ACTIVE,
            _src_app_models_company_model__WEBPACK_IMPORTED_MODULE_2__.SubscriptionStatus.ACTIVE,
            _src_app_models_company_model__WEBPACK_IMPORTED_MODULE_2__.SubscriptionStatus.DISABLED,
        ]),
    };
}
const mockCompanies = [
    {
        method: 'GET',
        url: '/api/tmcc/companies?page={page}&size={size}',
        params: { page: '([0-9]+)', size: '([0-9]+)' },
        getResponse: ({ page, size }) => {
            return (0,_src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_3__.createFullApiResponse)(getMockCompanies(+size), +page, +size, 120);
        },
    },
    {
        method: 'POST',
        url: '/api/tmcc/companies',
        getResponse: (params, body) => ({
            ...body,
            id: new chance__WEBPACK_IMPORTED_MODULE_0__().guid(),
            activatedAt: (0,_src_app_utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_4__.formatDibDate)(new Date().toISOString(), 'server'),
        }),
    },
    {
        method: 'GET',
        url: '/api/tmcc/companies/{id}',
        getResponse: ({ id }) => ({ ...getMockCompany(id) }),
    },
    {
        method: 'PUT',
        url: '/api/tmcc/companies/{id}',
        getResponse: ({ id }, body) => ({ id, ...body }),
    },
    {
        method: 'DELETE',
        url: '/api/tmcc/companies/{any}',
        getResponse: () => _src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_3__.createSuccessResponse,
    },
    {
        method: 'PATCH',
        url: '/api/tmcc/companies/{id}/{action}',
        getResponse: ({ id }) => ({ ...getMockCompany(id) }),
    },
];
function getMockCompanyRequests() {
    return _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.mock.companies ? mockCompanies : [];
}


/***/ }),

/***/ 45782:
/*!********************************************!*\
  !*** ./mock/modules/mock-company-users.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMockCompanyUserRequests": () => (/* binding */ getMockCompanyUserRequests)
/* harmony export */ });
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chance */ 32951);
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chance__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/environments/environment */ 92340);
/* harmony import */ var _src_app_models_company_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/app/models/company-user.model */ 99971);
/* harmony import */ var _src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/app/global/interfaces/response.interface */ 91744);
/* harmony import */ var _src_app_utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/app/utils/pipes/date.pipe */ 23341);





function getMockCompanyUsers(count = 10) {
    return [...Array.from({ length: count }).keys()].map(() => getMockCompanyUser());
}
function getMockCompanyUser(id = new chance__WEBPACK_IMPORTED_MODULE_0__().guid()) {
    // Set the seed value, so we can have consistent values based on the id
    const chance = new chance__WEBPACK_IMPORTED_MODULE_0__(id);
    const currentYear = new Date().getFullYear();
    return {
        id,
        role: chance.pickone([_src_app_models_company_user_model__WEBPACK_IMPORTED_MODULE_2__.CompanyUserRole.ADMIN, _src_app_models_company_user_model__WEBPACK_IMPORTED_MODULE_2__.CompanyUserRole.TRAVELLER, _src_app_models_company_user_model__WEBPACK_IMPORTED_MODULE_2__.CompanyUserRole.TRAVELLER]),
        active: chance.bool({ likelihood: 80 }),
        status: chance.pickone([
            _src_app_models_company_user_model__WEBPACK_IMPORTED_MODULE_2__.CompanyUserStatus.ACCEPTED,
            _src_app_models_company_user_model__WEBPACK_IMPORTED_MODULE_2__.CompanyUserStatus.INVITED,
            _src_app_models_company_user_model__WEBPACK_IMPORTED_MODULE_2__.CompanyUserStatus.PENDING,
            _src_app_models_company_user_model__WEBPACK_IMPORTED_MODULE_2__.CompanyUserStatus.EXPIRED,
        ]),
        birthDate: null,
        // Use last year as creation date for all users
        createdDate: (0,_src_app_utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_4__.formatDibDate)(chance.date({ year: currentYear - chance.natural({ min: 1, max: 4 }) }), 'server'),
        username: chance.email({ domain: 'example.com' }).toLowerCase(),
        firstname: chance.first(),
        lastname: chance.last(),
        phone: chance.phone(),
        address: chance.address(),
        city: chance.city(),
        zipcode: chance.postal(),
        country: chance.country(),
        language: 'EN',
        currency: 'EUR',
        agentNote: null,
        companyId: chance.guid(),
        companyName: chance.company(),
        travelDocuments: [
            {
                id: chance.guid(),
                customerId: id,
                idNumber: chance.string({ length: chance.natural({ min: 6, max: 14 }), numeric: true }),
                issuingDate: (0,_src_app_utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_4__.formatDibDate)(chance.date({ year: currentYear - chance.natural({ min: 1, max: 10 }) }), 'server'),
                expiryDate: (0,_src_app_utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_4__.formatDibDate)(chance.date({ year: currentYear + chance.natural({ min: 1, max: 10 }) }), 'server'),
                firstName: chance.first(),
                lastName: chance.last(),
                type: chance.pickone([_src_app_models_company_user_model__WEBPACK_IMPORTED_MODULE_2__.TravelDocumentType.ID_CARD, _src_app_models_company_user_model__WEBPACK_IMPORTED_MODULE_2__.TravelDocumentType.PASSPORT]),
                dateOfBirth: (0,_src_app_utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_4__.formatDibDate)(chance.birthday({ type: 'adult' }), 'server'),
                countryOfIssuance: chance.country(),
                gender: chance.pickone([_src_app_models_company_user_model__WEBPACK_IMPORTED_MODULE_2__.Gender.FEMALE, _src_app_models_company_user_model__WEBPACK_IMPORTED_MODULE_2__.Gender.MALE]),
                nationality: chance.country(),
                defaultDocument: true,
                completed: true,
            },
        ],
    };
}
const mockCompanyUsers = [
    {
        method: 'GET',
        url: '/api/tmcc/company-users?page={page}&size={size}',
        params: { page: '([0-9]+)', size: '([0-9]+)' },
        getResponse: ({ page, size }) => {
            return (0,_src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_3__.createFullApiResponse)(getMockCompanyUsers(+size), +page, +size, 120);
        },
    },
    {
        method: 'POST',
        url: '/api/tmcc/company-users',
        getResponse: (params, body) => ({ ...body, id: new chance__WEBPACK_IMPORTED_MODULE_0__().guid() }),
    },
    {
        method: 'GET',
        url: '/api/tmcc/company-users/{id}',
        getResponse: ({ id }) => ({ ...getMockCompanyUser(id) }),
    },
    {
        method: 'PUT',
        url: '/api/tmcc/company-users/{id}',
        getResponse: ({ id }, body) => ({ ...body, id }),
    },
];
function getMockCompanyUserRequests() {
    return _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.mock.companyUsers ? mockCompanyUsers : [];
}


/***/ }),

/***/ 42177:
/*!*************************************!*\
  !*** ./mock/modules/mock-config.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMockConfigRequests": () => (/* binding */ getMockConfigRequests)
/* harmony export */ });
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/environments/environment */ 92340);

const mockConfig = [
    {
        method: 'GET',
        url: `${_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.dtms}/api/tenant/config`,
        getResponse: () => {
            return {
                data: {
                    key: 'dib',
                    name: 'DIB Travel',
                    config: {},
                    primary: true,
                    topLevelDomainCW: "example.com",
                    topLevelDomainTMCC: "admin-tool.example.com"
                },
                status: { code: 200, description: null, messageCode: null, message: null },
            };
        },
    },
    {
        method: 'GET',
        url: `${_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.dtms}/api/tenants`,
        getResponse: () => {
            return [];
        },
    },
];
function getMockConfigRequests() {
    return _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mock.config ? mockConfig : [];
}


/***/ }),

/***/ 85339:
/*!*******************************************!*\
  !*** ./mock/modules/mock-cost-centers.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMockCostCentersRequests": () => (/* binding */ getMockCostCentersRequests)
/* harmony export */ });
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/environments/environment */ 92340);

const mockCostCenters = [
    {
        method: 'GET',
        url: '/api/tmcc/cost-centers/customers-cost-centers?customerIds={customerIds}',
        delay: 0,
        getResponse: ({ customerIds }, body) => {
            return customerIds.split(',').map((customerId, index) => ({
                customerId,
                companyCostCenterDTOList: [
                    {
                        id: '1b609047-3563-47df-9d4b-ed6c07a1b23d',
                        name: `CostOne-${index + 1}`,
                        description: '',
                        createdAt: '2022-07-25T11:11:28',
                        userIds: null,
                        groupIds: null,
                        deletedAt: null,
                        archived: false,
                    },
                    {
                        id: '2b609047-3563-47df-9d4b-ed6c07a1b23d',
                        name: `CostTwo-${index + 1}`,
                        description: '',
                        createdAt: '2022-07-25T11:11:28',
                        userIds: null,
                        groupIds: null,
                        deletedAt: null,
                        archived: false,
                    },
                    {
                        id: '3b609047-3563-47df-9d4b-ed6c07a1b23d',
                        name: `CostThree-${index + 1}`,
                        description: '',
                        createdAt: '2022-07-25T11:11:28',
                        userIds: null,
                        groupIds: null,
                        deletedAt: null,
                        archived: false,
                    },
                ],
            }));
        },
    },
];
function getMockCostCentersRequests() {
    return _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mock.costCenters ? mockCostCenters : [];
}


/***/ }),

/***/ 56146:
/*!****************************************!*\
  !*** ./mock/modules/mock-countries.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMockCountryRequests": () => (/* binding */ getMockCountryRequests)
/* harmony export */ });
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/environments/environment */ 92340);

const mockCountries = [
    {
        method: 'GET',
        url: '/api/details/locations/countries',
        getResponse: () => [
            {
                id: '110',
                name: 'Italy',
                code: 'IT',
                defaultCurrency: 'EUR',
            },
            {
                id: '167',
                name: 'Norway',
                code: 'NO',
                defaultCurrency: 'NOK',
            },
            {
                id: '190',
                name: 'Serbia',
                code: 'RS',
                defaultCurrency: 'RSD',
            },
            {
                id: '197',
                name: 'Sweden',
                code: 'SE',
                defaultCurrency: 'SEK',
            },
        ],
    },
];
function getMockCountryRequests() {
    return _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mock.countries ? mockCountries : [];
}


/***/ }),

/***/ 17869:
/*!****************************************!*\
  !*** ./mock/modules/mock-employees.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMockEmployeesRequests": () => (/* binding */ getMockEmployeesRequests)
/* harmony export */ });
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chance */ 32951);
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chance__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/environments/environment */ 92340);
/* harmony import */ var _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/app/models/cart-items/shared.model */ 34145);



function getMockEmployees(travellers) {
    return [...Array.from({ length: travellers.length }).keys()].map((index) => 
    // All even positioned travellers will be marked as guests
    getMockEmployee(travellers[index], (index + 1) % 2 === 0));
}
function getMockEmployee(traveller, isGuest = false) {
    // Set the seed value, so we can have consistent values based on the id
    const id = new chance__WEBPACK_IMPORTED_MODULE_0__().guid();
    const chance = new chance__WEBPACK_IMPORTED_MODULE_0__(id);
    return {
        id: isGuest ? null : id,
        email: isGuest ? null : chance.email({ domain: 'example.com' }).toLowerCase(),
        userType: 'CUSTOMER',
        firstName: traveller.firstName || chance.first(),
        lastName: traveller.lastName || chance.last(),
        cellphone: chance.phone(),
        address1: chance.address(),
        address2: null,
        zipCode: chance.postal(),
        city: chance.city(),
        country: chance.country(),
        stripeCustomerId: null,
        customerType: null,
        companyName: chance.company(),
        userTitle: traveller.title || chance.pickone([_src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.UserTitle.MR, _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.UserTitle.MS, _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.UserTitle.MRS]),
        allowAgentOverride: chance.bool({ likelihood: 80 }),
        externalId: traveller.externalId,
    };
}
const mockEmployees = [
    {
        method: 'POST',
        url: '/api/tmcc/corporations/{companyId}/resolve-employees',
        delay: 0,
        getResponse: ({ companyId }, travellers) => {
            return [...getMockEmployees(travellers), getMockEmployee(travellers[0]), getMockEmployee(travellers[0])];
        },
    },
];
function getMockEmployeesRequests() {
    return _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.mock.employees ? mockEmployees : [];
}


/***/ }),

/***/ 14267:
/*!***************************************!*\
  !*** ./mock/modules/mock-features.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMockFeatureRequests": () => (/* binding */ getMockFeatureRequests)
/* harmony export */ });
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/environments/environment */ 92340);
/* harmony import */ var _src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/app/global/interfaces/response.interface */ 91744);


const mockFeatures = [
    {
        method: 'GET',
        url: '/api/tmcc/features',
        getResponse: () => [
            {
                id: 'ff-accounting-integration',
                description: 'Enables sending transactions and customers to accounting mediator service.',
                enabled: true,
            },
            {
                id: 'ff-customer-registration-campaign',
                description: 'Enables the customer registration campaign',
                enabled: true,
            },
            {
                id: 'ff-flight-addon',
                description: 'Enable flight addon feature',
                enabled: true,
            },
            {
                id: 'ff-train',
                description: 'Enable train feature',
                enabled: true,
            },
        ],
    },
    {
        method: 'PATCH',
        url: '/api/tmcc/features/{id}',
        getResponse: () => _src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_1__.createSuccessResponse,
    },
];
function getMockFeatureRequests() {
    return _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mock.features ? mockFeatures : [];
}


/***/ }),

/***/ 93921:
/*!***************************************!*\
  !*** ./mock/modules/mock-payments.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMockPaymentsRequests": () => (/* binding */ getMockPaymentsRequests)
/* harmony export */ });
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/environments/environment */ 92340);
/* harmony import */ var _src_app_models_billing_profile_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/app/models/billing-profile.model */ 4200);
/* harmony import */ var _src_app_models_lodge_card_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/app/models/lodge-card.model */ 84499);



const mockPayments = [
    {
        method: 'GET',
        url: '/api/tmcc/customers/{customerId}/payment-options',
        getResponse: ({ customerId }) => {
            return {
                billings: [
                    {
                        id: '717aa17d-ba5d-4263-86fd-7be626f5d674',
                        taxId: 'asdasd',
                        legalName: '12313',
                        streetName: 'asdad',
                        zipcode: 'asdad',
                        city: 'asdad',
                        countryId: '2',
                        countryName: 'United Arab Emirates',
                        contactFirstName: 'adsad',
                        contactLastName: 'adsad',
                        contactEmail: 'asdads@asd.com',
                        currency: 'SEK',
                        billingPeriod: 'monthly',
                        employeeIds: [customerId],
                        groupIds: [],
                        backOfficeCustomerId: '',
                        invoiceSplitType: _src_app_models_billing_profile_model__WEBPACK_IMPORTED_MODULE_1__.InvoiceSplit.NONE,
                        vatNumber: '',
                        invoiceRecipientEmail: '',
                    },
                    {
                        id: '3913b5e1-8520-42e6-8982-b94e1ad29c29',
                        taxId: 'asdfasdf',
                        legalName: 'bnmbnb',
                        streetName: 'asdads',
                        zipcode: 'asdad',
                        city: 'asda',
                        countryId: '1',
                        countryName: 'Andorra',
                        contactFirstName: 'asdads',
                        contactLastName: 'asdasd',
                        contactEmail: 'asdasd@asd.com',
                        currency: 'USD',
                        billingPeriod: 'monthly',
                        employeeIds: [customerId],
                        groupIds: [],
                        backOfficeCustomerId: '',
                        invoiceSplitType: _src_app_models_billing_profile_model__WEBPACK_IMPORTED_MODULE_1__.InvoiceSplit.NONE,
                        vatNumber: '',
                        invoiceRecipientEmail: '',
                    },
                    {
                        id: '77fede1f-f02e-49db-bd2f-fef718c5dfa8',
                        taxId: 'asdasd',
                        legalName: 'asdasd',
                        streetName: 'asdads',
                        zipcode: 'asdads',
                        city: 'asdasd',
                        countryId: '2',
                        countryName: 'United Arab Emirates',
                        contactFirstName: 'asdads',
                        contactLastName: 'asdads',
                        contactEmail: 'asd@asd.com',
                        currency: 'USD',
                        billingPeriod: 'monthly',
                        employeeIds: [customerId],
                        groupIds: [],
                        backOfficeCustomerId: '',
                        invoiceSplitType: _src_app_models_billing_profile_model__WEBPACK_IMPORTED_MODULE_1__.InvoiceSplit.NONE,
                        vatNumber: '123',
                        invoiceRecipientEmail: 'asd@asd.com',
                    },
                    {
                        id: '7d01bad7-549e-4379-a77f-126302368202',
                        taxId: 'adasd',
                        legalName: 'aadasd',
                        streetName: 'adad',
                        zipcode: 'adsads',
                        city: 'adsasd',
                        countryId: '2',
                        countryName: 'United Arab Emirates',
                        contactFirstName: 'adads',
                        contactLastName: 'asdads',
                        contactEmail: 'asdasd@asd.com',
                        currency: 'RSD',
                        billingPeriod: 'monthly',
                        employeeIds: [customerId],
                        groupIds: [],
                        backOfficeCustomerId: '',
                        invoiceSplitType: _src_app_models_billing_profile_model__WEBPACK_IMPORTED_MODULE_1__.InvoiceSplit.NONE,
                        vatNumber: '',
                        invoiceRecipientEmail: '',
                    },
                    {
                        id: 'af031828-8acf-43ea-8ddb-032cc25c853d',
                        taxId: '123123',
                        legalName: 'ACME Corporation',
                        streetName: 'Street Name',
                        zipcode: '12312',
                        city: 'Belgrade',
                        countryId: '190',
                        countryName: 'Serbia',
                        contactFirstName: 'John',
                        contactLastName: 'Doe',
                        contactEmail: 'test.user@example.com',
                        currency: 'SEK',
                        billingPeriod: 'monthly',
                        employeeIds: [customerId],
                        groupIds: ['187f9646-0903-4c43-9160-4a12e238ca2b'],
                        backOfficeCustomerId: '123-john.doe',
                        invoiceSplitType: _src_app_models_billing_profile_model__WEBPACK_IMPORTED_MODULE_1__.InvoiceSplit.NONE,
                        vatNumber: '123456',
                        invoiceRecipientEmail: 'test.user@example.com',
                    },
                ],
                lodgeCards: [
                    {
                        id: 'ed6fa319-5837-43c9-8201-b9d1a208de8d',
                        name: 'Test Lodge Card',
                        creditCardNumber: '**********2312',
                        expiryDate: '01-03-2026',
                        expiryDateTrailingValue: null,
                        provider: _src_app_models_lodge_card_model__WEBPACK_IMPORTED_MODULE_2__.LodgeCardProviderCode.CCDC,
                        currency: 'EUR',
                        clientCorporationId: '4f2679fe-3180-4ec1-b937-9f2d082c7930',
                        country: {
                            id: '190',
                            name: 'Serbia',
                            code: 'RS',
                            phoneCode: '+381',
                            defaultCurrency: 'RSD',
                        },
                        contactFirstName: 'John',
                        contactLastName: 'Doe',
                        contactEmail: 'john.doe@example.com',
                        backOfficeCustomerId: '',
                        invoiceRecipientEmail: 'john.doe@example.com',
                        vatNumber: '12345',
                        companyLegalName: 'BidHotel',
                        companyRegistrationNumber: '123',
                        addressLine: 'Moja Adresa 23',
                        postalCode: '11000',
                        city: 'Belgrade',
                        memberCount: 0,
                        employeeIds: null,
                        groupIds: null,
                        isOnboarded: true,
                    },
                ],
            };
        },
    },
];
function getMockPaymentsRequests() {
    return _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mock.payments ? mockPayments : [];
}


/***/ }),

/***/ 41225:
/*!**********************************!*\
  !*** ./mock/modules/mock-pnr.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMockPNRRequests": () => (/* binding */ getMockPNRRequests)
/* harmony export */ });
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/environments/environment */ 92340);
/* harmony import */ var _src_app_models_pnr_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/app/models/pnr.model */ 59339);
/* harmony import */ var _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/app/models/cart-items/shared.model */ 34145);
/* harmony import */ var _data_mock_cart_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/mock-cart-data */ 65520);




const mockPNR = [
    {
        method: 'POST',
        url: `${_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.dfs}/v1/tmcc/agent-assisted/validate-booking`,
        getResponse: (params, body) => {
            const previewPNR = body.bookingReference.reference.endsWith('_preview');
            const updatePNR = body.bookingReference.reference.endsWith('_update');
            const existingPNR = updatePNR || previewPNR;
            const bookingReference = body.bookingReference.reference.replace('_update', '').replace('_preview', '');
            return {
                state: existingPNR ? _src_app_models_pnr_model__WEBPACK_IMPORTED_MODULE_1__.FlightPNRValidationState.EXISTING : _src_app_models_pnr_model__WEBPACK_IMPORTED_MODULE_1__.FlightPNRValidationState.NEW,
                bookingReference: {
                    reference: bookingReference,
                    source: body.bookingReference.source,
                },
                finalDestination: existingPNR ? 'ARN' : null,
                flights: [
                    {
                        ..._data_mock_cart_data__WEBPACK_IMPORTED_MODULE_3__.mockCartData.flightBookings[0].flights[0],
                        segments: [
                            ..._data_mock_cart_data__WEBPACK_IMPORTED_MODULE_3__.mockCartData.flightBookings[0].flights[0].segments,
                            ..._data_mock_cart_data__WEBPACK_IMPORTED_MODULE_3__.mockCartData.flightBookings[1].flights[0].segments,
                        ],
                    },
                    // {
                    //   segments: [
                    //     {
                    //       id: '1',
                    //       cabinClass: CabinClass.ECONOMY,
                    //       departure: {
                    //         airportName: 'Arlanda',
                    //         airportCode: 'ARN',
                    //         airportCountryCode: 'SE',
                    //         terminal: '2',
                    //         time: '2021-06-18T20:55:00',
                    //         flightTaxiOption: false, // Was missing
                    //         // Geolocation is not needed
                    //       },
                    //       arrival: {
                    //         airportName: 'Belgrade',
                    //         airportCode: 'BEG',
                    //         airportCountryCode: 'RS',
                    //         terminal: null,
                    //         time: '2021-06-18T23:00:00',
                    //         flightTaxiOption: false, // Was missing
                    //         // Geolocation is not needed
                    //       },
                    //       duration: 7500,
                    //       marketingAirline: {
                    //         code: 'KL',
                    //         name: 'KLM',
                    //         iconUrl: 'http://some.url',
                    //       },
                    //       marketingCarrier: 'KL',
                    //       operatingAirline: {
                    //         code: 'KL',
                    //         name: 'KLM',
                    //         iconUrl: 'http://some.url',
                    //       },
                    //       operatingCarrier: 'KL',
                    //       flightNumber: 'KL 7444',
                    //       baggageAllowance: {
                    //         quantity: 1,
                    //         weight: {
                    //           unit: 'K',
                    //           value: '23',
                    //         },
                    //       },
                    //       layover: 7500,
                    //       longLayover: false,
                    //       aircraftModel: 'Airbus A320', // Was missing
                    //       airportChange: false, // Was missing
                    //       shortLayover: false, // Was missing
                    //       differentDay: false, // Was missing
                    //     },
                    //   ],
                    //   duration: 7500,
                    //   co2EmissionInGrams: 200,
                    // },
                ],
                travellers: [
                    {
                        externalId: '1',
                        firstName: 'John',
                        lastName: 'Doe',
                        title: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.UserTitle.MR,
                        email: existingPNR ? 'john.doe@example.com' : null,
                    },
                    {
                        externalId: '2',
                        firstName: 'Peter',
                        lastName: 'Forest',
                        title: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.UserTitle.MR,
                        email: existingPNR ? 'peter@example.com' : null,
                    },
                    {
                        externalId: '3',
                        firstName: 'John',
                        lastName: 'Doe',
                        title: _src_app_models_cart_items_shared_model__WEBPACK_IMPORTED_MODULE_2__.UserTitle.MR,
                        email: existingPNR ? 'john.doe@example.com' : null,
                    },
                ],
                currency: 'SEK',
                totalPrice: 668,
                totalPriceWithMarkup: 668,
                formOfPayment: {
                    type: _src_app_models_pnr_model__WEBPACK_IMPORTED_MODULE_1__.FormOfPaymentType.CREDIT_CARD,
                    creditCard: {
                        vendor: _src_app_models_pnr_model__WEBPACK_IMPORTED_MODULE_1__.CreditCardVendor.DINERS,
                        number: 'XXXXXXXXXXXX7710',
                        expiry: '1228',
                    },
                },
                updates: updatePNR
                    ? [
                        'Price updated',
                        'Traveller John Doe removed',
                        'New traveller John Doe added',
                        'Baggage added for traveller John Doe',
                        'Seat changed for traveller John Doe',
                        'Departing flight date and time changed',
                    ]
                    : [],
                cartId: previewPNR ? 'ec9515a6-cd80-4bc8-ab7f-1bd260b58bf8' : undefined,
            };
        },
    },
    {
        method: 'POST',
        delay: 3000,
        url: `/api/tmcc/agent-assisted/confirmation`,
        getResponse: () => {
            return {
                cartId: 'ec9515a6-cd80-4bc8-ab7f-1bd260b58bf8',
            };
        },
    },
];
function getMockPNRRequests() {
    return _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mock.pnr ? mockPNR : [];
}


/***/ }),

/***/ 40101:
/*!***************************************!*\
  !*** ./mock/modules/mock-products.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMockProductRequests": () => (/* binding */ getMockProductRequests)
/* harmony export */ });
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/environments/environment */ 92340);
/* harmony import */ var _src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/app/global/interfaces/response.interface */ 91744);


// eslint-disable-next-line unicorn/prefer-module
const chance = (__webpack_require__(/*! chance */ 32951).Chance)();
function getMockProducts(count = 10) {
    return [...Array.from({ length: count }).keys()].map(() => getMockProduct());
}
function getMockProduct() {
    return {
        id: chance.guid(),
        name: chance.company(),
        base: chance.bool({ likelihood: 10 }),
        active: chance.bool({ likelihood: 80 }),
    };
}
const mockProducts = [
    {
        method: 'GET',
        url: '/api/tmcc/products?page={page}&size={size}',
        params: { page: '([0-9]+)', size: '([0-9]+)' },
        getResponse: ({ page, size }) => {
            return (0,_src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_1__.createFullApiResponse)(getMockProducts(+size), +page, +size, 15);
        },
    },
    {
        method: 'PUT',
        url: '/api/tmcc/products/{id}',
        getResponse: ({ id }, body) => ({ ...body, id }),
    },
    {
        method: 'POST',
        url: '/api/tmcc/products',
        getResponse: (params, body) => ({ ...body, id: chance.guid() }),
    },
];
function getMockProductRequests() {
    return _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mock.products ? mockProducts : [];
}


/***/ }),

/***/ 67977:
/*!**********************************************!*\
  !*** ./mock/modules/mock-system-messages.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMockSystemMessageRequests": () => (/* binding */ getMockSystemMessageRequests)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 60880);
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chance */ 32951);
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chance__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/environments/environment */ 92340);
/* harmony import */ var _src_app_models_system_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/app/models/system-message.model */ 95609);
/* harmony import */ var _src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/app/global/interfaces/response.interface */ 91744);
/* harmony import */ var _src_app_utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/app/utils/pipes/date.pipe */ 23341);






function getMockSystemMessages(count = 10) {
    return [...Array.from({ length: count }).keys()].map(() => getMockSystemMessage());
}
function getMockSystemMessage(id = new chance__WEBPACK_IMPORTED_MODULE_0__().hash({ length: 8, casing: 'upper' })) {
    // Set the seed value, so we can have consistent values based on the id
    const chance = new chance__WEBPACK_IMPORTED_MODULE_0__(id);
    // Give preference to CLOSED messages and generate 3 times more of them
    const status = chance.weighted([_src_app_models_system_message_model__WEBPACK_IMPORTED_MODULE_2__.SystemMessageStatus.OPENED, _src_app_models_system_message_model__WEBPACK_IMPORTED_MODULE_2__.SystemMessageStatus.CLOSED], [1, 3]);
    const activatedAt = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), {
        months: chance.prime({ min: 3, max: 33 }),
        hours: chance.prime({ max: 23 }),
        minutes: chance.prime({ max: 59 }),
    });
    const closedAt = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), {
        months: chance.prime({ max: 2 }),
        hours: chance.prime({ max: 23 }),
        minutes: chance.prime({ max: 59 }),
    });
    return {
        id,
        description: chance.paragraph(),
        activatedAt: (0,_src_app_utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_4__.formatDibDate)(activatedAt.toString(), 'server'),
        closedBy: status === _src_app_models_system_message_model__WEBPACK_IMPORTED_MODULE_2__.SystemMessageStatus.CLOSED ? chance.name() : null,
        closedAt: status === _src_app_models_system_message_model__WEBPACK_IMPORTED_MODULE_2__.SystemMessageStatus.CLOSED ? (0,_src_app_utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_4__.formatDibDate)(closedAt.toString(), 'server') : null,
        status,
    };
}
const mockSystemMessages = [
    {
        method: 'GET',
        url: '/api/tmcc/system-messages?page={page}&size={size}',
        params: { page: '([0-9]+)', size: '([0-9]+)' },
        getResponse: ({ page, size }) => {
            return (0,_src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_3__.createFullApiResponse)(getMockSystemMessages(+size), +page, +size, 80);
        },
    },
    {
        method: 'GET',
        url: '/api/tmcc/system-messages/{id}',
        getResponse: ({ id }) => ({ ...getMockSystemMessage(id) }),
    },
    {
        method: 'PATCH',
        url: '/api/tmcc/system-messages/{id}',
        getResponse: ({ id }, body) => ({
            ...body,
            id,
            // If we have just closed the message add the missing fields
            closedAt: body.status === _src_app_models_system_message_model__WEBPACK_IMPORTED_MODULE_2__.SystemMessageStatus.CLOSED ? body.closedAt || new Date() : null,
            closedBy: body.status === _src_app_models_system_message_model__WEBPACK_IMPORTED_MODULE_2__.SystemMessageStatus.CLOSED ? body.closedBy || new chance__WEBPACK_IMPORTED_MODULE_0__().name() : null,
        }),
    },
    {
        method: 'POST',
        url: '/api/tmcc/system-messages',
        getResponse: (params, body) => ({ ...body, id: new chance__WEBPACK_IMPORTED_MODULE_0__().hash({ length: 8, casing: 'upper' }) }),
    },
    {
        method: 'DELETE',
        url: '/api/tmcc/system-messages/{any}',
        getResponse: () => _src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_3__.createSuccessResponse,
    },
];
function getMockSystemMessageRequests() {
    return _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.mock.systemMessages ? mockSystemMessages : [];
}


/***/ }),

/***/ 15620:
/*!************************************!*\
  !*** ./mock/modules/mock-users.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMockUserRequests": () => (/* binding */ getMockUserRequests)
/* harmony export */ });
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chance */ 32951);
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chance__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/environments/environment */ 92340);
/* harmony import */ var _src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/app/models/user.model */ 84872);
/* harmony import */ var _src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/app/global/interfaces/response.interface */ 91744);




const chance = chance__WEBPACK_IMPORTED_MODULE_0__.Chance();
function getMockUsers(count = 10) {
    return [...Array.from({ length: count }).keys()].map(() => getMockUser());
}
function getMockUser() {
    return {
        id: chance.guid(),
        firstName: chance.first(),
        lastName: chance.last(),
        phone: chance.phone(),
        password: null,
        type: chance.pickone([
            // Increase a change of being an AGENT
            _src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__.UserType.AGENT,
            _src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__.UserType.AGENT,
            _src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__.UserType.AGENT,
            _src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__.UserType.AGENT,
            // With less change of being an ADMIN
            _src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__.UserType.ADMIN,
            _src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__.UserType.ADMIN,
            // And in some rare occasions show SUPER_ADMINs
            _src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__.UserType.SUPER_ADMIN,
        ]),
        username: chance.email({ domain: 'example.com' }).toLowerCase(),
        disabled: chance.bool({ likelihood: 20 }),
    };
}
const mockUsers = [
    {
        method: 'GET',
        url: '/api/tmcc/users?page={page}&size={size}',
        params: { page: '([0-9]+)', size: '([0-9]+)' },
        getResponse: ({ page, size }) => {
            return (0,_src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_3__.createFullApiResponse)(getMockUsers(+size), +page, +size, 80);
        },
    },
    {
        method: 'PUT',
        url: '/api/tmcc/users/{id}',
        getResponse: (params, body) => ({ ...body, id: params.id }),
    },
    {
        method: 'POST',
        url: '/api/tmcc/users',
        getResponse: (params, body) => ({ ...body, id: chance.guid() }),
    },
    {
        method: 'PUT',
        url: '/api/tmcc/users/{id}/change-password',
        getResponse: (params) => ({ ...getMockUser(), id: params.id }),
    },
    {
        method: 'GET',
        url: '/api/tmcc/users-override?username={username}',
        getResponse: () => ({ token: chance.guid() }),
    },
];
function getMockUserRequests() {
    return _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.mock.users ? mockUsers : [];
}


/***/ }),

/***/ 18286:
/*!*********************************************!*\
  !*** ./mock/modules/mock-vat-categories.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMockVatCategoryRequests": () => (/* binding */ getMockVatCategoryRequests)
/* harmony export */ });
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chance */ 32951);
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chance__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/environments/environment */ 92340);
/* harmony import */ var _src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/app/global/interfaces/response.interface */ 91744);



const chance = chance__WEBPACK_IMPORTED_MODULE_0__.Chance();
function getMockVatCategories(count = 10) {
    return [...Array.from({ length: count }).keys()].map(() => getMockVatCategory());
}
function getMockVatCategory() {
    // 75% Sweden and 25% Serbia
    const randomCountry = chance.pickone([
        { code: 'SE', name: 'Sweden' },
        { code: 'SE', name: 'Sweden' },
        { code: 'SE', name: 'Sweden' },
        { code: 'RS', name: 'Serbia' },
    ]);
    return {
        id: chance.guid(),
        name: chance.company(),
        productId: chance.guid(),
        productName: chance.company(),
        countryId: randomCountry.code,
        active: chance.bool({ likelihood: 80 }),
        externalId: chance.string({ length: 8, casing: 'upper', alpha: true, numeric: true }),
        vatPercentage: chance.pickone([5, 10, 15, 20, 25]),
    };
}
const mockVatCategories = [
    {
        method: 'GET',
        url: '/api/tmcc/products/vat-categories?page={page}&size={size}',
        params: { page: '([0-9]+)', size: '([0-9]+)' },
        getResponse: ({ page, size }) => {
            return (0,_src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_2__.createFullApiResponse)(getMockVatCategories(+size), +page, +size, 80);
        },
    },
    {
        method: 'PUT',
        url: '/api/tmcc/products/vat-categories/{id}',
        getResponse: ({ id }, body) => ({ ...body, id }),
    },
    {
        method: 'POST',
        url: '/api/tmcc/products/vat-categories',
        getResponse: (params, body) => ({ ...body, id: chance.guid() }),
    },
];
function getMockVatCategoryRequests() {
    return _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.mock.vatCategories ? mockVatCategories : [];
}


/***/ }),

/***/ 89085:
/*!********************************************************!*\
  !*** ./mock/modules/mock-vendors-payment-providers.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMockVendorsPaymentProviderRequests": () => (/* binding */ getMockVendorsPaymentProviderRequests)
/* harmony export */ });
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chance */ 32951);
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chance__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/environments/environment */ 92340);
/* harmony import */ var _src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/app/global/interfaces/response.interface */ 91744);



const chance = chance__WEBPACK_IMPORTED_MODULE_0__.Chance();
function getMockVendorsPaymentProviders(count = 10) {
    return [...Array.from({ length: count }).keys()].map(() => getMockVendorsPaymentProvider());
}
function getMockVendorsPaymentProvider() {
    return {
        id: chance.guid(),
        name: chance.company(),
        externalId: chance.string({ length: 8, numeric: true }),
        vendorIds: [chance.guid(), chance.guid()],
        active: chance.bool({ likelihood: 80 }),
    };
}
const mockVendorsPaymentProviders = [
    {
        method: 'GET',
        url: '/api/tmcc/products/vendors/payment-providers?page={page}&size={size}',
        params: { page: '([0-9]+)', size: '([0-9]+)' },
        getResponse: ({ page, size }) => {
            return (0,_src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_2__.createFullApiResponse)(getMockVendorsPaymentProviders(+size), +page, +size, 15);
        },
    },
    {
        method: 'GET',
        url: '/api/tmcc/products/vendors/payment-providers?page={page}&size={size}&sort={sort}&active={active}&vendorId={vendorId}',
        params: { page: '([0-9]+)', size: '([0-9]+)' },
        getResponse: ({ page, size }) => {
            // Agent assisted vendor payment providers filtered by product and vendor ids
            const providers = getMockVendorsPaymentProviders(+size).map((provider) => {
                provider.vendorPaymentPresentation = chance.pickone(['CASH', 'VCC', 'LODGE_CARD']);
                provider.name = `${provider.name} (${provider.vendorPaymentPresentation})`;
                return provider;
            });
            return (0,_src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_2__.createFullApiResponse)(providers, +page, +size, 15);
        },
    },
    {
        method: 'PUT',
        url: '/api/tmcc/products/vendors/payment-providers/{id}',
        getResponse: ({ id }, body) => ({ ...body, id }),
    },
    {
        method: 'POST',
        url: '/api/tmcc/products/vendors/payment-providers',
        getResponse: (params, body) => ({ ...body, id: chance.guid() }),
    },
];
function getMockVendorsPaymentProviderRequests() {
    return _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.mock.vendorsPaymentProvider ? mockVendorsPaymentProviders : [];
}


/***/ }),

/***/ 74694:
/*!**************************************!*\
  !*** ./mock/modules/mock-vendors.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMockVendorRequests": () => (/* binding */ getMockVendorRequests)
/* harmony export */ });
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chance */ 32951);
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chance__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/environments/environment */ 92340);
/* harmony import */ var _src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/app/global/interfaces/response.interface */ 91744);



const chance = chance__WEBPACK_IMPORTED_MODULE_0__.Chance();
function getMockVendors(count = 10) {
    return [...Array.from({ length: count }).keys()].map(() => getMockVendor());
}
function getMockVendor() {
    return {
        id: chance.guid(),
        externalId: chance.string({ length: 8, numeric: true }),
        name: chance.company(),
        productIds: [chance.guid(), chance.guid()],
        active: chance.bool({ likelihood: 80 }),
    };
}
const mockVendors = [
    {
        method: 'GET',
        url: '/api/tmcc/products/vendors?page={page}&size={size}',
        params: { page: '([0-9]+)', size: '([0-9]+)' },
        getResponse: ({ page, size }) => {
            return (0,_src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_2__.createFullApiResponse)(getMockVendors(+size), +page, +size, 80);
        },
    },
    {
        method: 'GET',
        url: '/api/tmcc/products/vendors?page={page}&size={size}&productId={productId}',
        params: { page: '([0-9]+)', size: '([0-9]+)' },
        getResponse: ({ page, size }) => {
            // Agent assisted vendors filtered by product id
            const vendors = getMockVendors(+size).map((vendor) => {
                vendor.vendorName = chance.pickone(['Amadeus', 'LufthansaGroup', 'TravelPort']);
                return vendor;
            });
            return (0,_src_app_global_interfaces_response_interface__WEBPACK_IMPORTED_MODULE_2__.createFullApiResponse)(vendors, +page, +size, 80);
        },
    },
    {
        method: 'POST',
        url: '/api/tmcc/products/vendors',
        getResponse: (params, body) => ({ ...body, id: chance.guid() }),
    },
    {
        method: 'PUT',
        url: '/api/tmcc/products/vendors/{id}',
        getResponse: ({ id }, body) => ({ ...body, id }),
    },
    {
        method: 'DELETE',
        url: '/api/tmcc/products/vendors/{any}',
        getResponse: () => { },
    },
];
function getMockVendorRequests() {
    return _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.mock.vendors ? mockVendors : [];
}


/***/ }),

/***/ 60274:
/*!*****************************************!*\
  !*** ./src/app/actions/auth.actions.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthActions": () => (/* binding */ AuthActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

const AuthActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
    source: 'Auth',
    events: {
        // Login Actions
        Login: (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Login Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Login Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Login Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        // Logout Actions
        Logout: (message) => ({ message }),
        'Logout Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Logout Success': (message) => ({ message }),
        'Logout Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        // Forgot Password Actions
        'Forgot Password': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Forgot Password Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Forgot Password Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Forgot Password Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        // Change Password Actions
        'Change Password': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Change Password Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Change Password Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Change Password Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        // Set Password Actions
        'Set Password': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Set Password Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Set Password Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Set Password Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        // Logged-In User Actions
        'Set Logged In User': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    },
});


/***/ }),

/***/ 64646:
/*!*****************************************************!*\
  !*** ./src/app/actions/billing-requests.actions.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingRequestActions": () => (/* binding */ BillingRequestActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

const BillingRequestActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
    source: 'Billing Request',
    events: {
        'Change Status': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Change Status Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Change Status Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Change Status Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Requests': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Requests Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Requests Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Requests Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    },
});


/***/ }),

/***/ 4797:
/*!*********************************************!*\
  !*** ./src/app/actions/bookings.actions.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingActions": () => (/* binding */ BookingActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

const BookingActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
    source: 'Booking',
    events: {
        'Save Booking Details': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Save Booking Details Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Save Booking Details Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Save Booking Details Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Bookings': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Bookings Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Bookings Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Bookings Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Booking': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Booking Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Booking Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Booking Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Reference Types': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Reference Types Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Reference Types Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Reference Types Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load And Select Booking': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load And Select Booking Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load And Select Booking Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load And Select Booking Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    },
});


/***/ }),

/***/ 39568:
/*!******************************************!*\
  !*** ./src/app/actions/carts.actions.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartActions": () => (/* binding */ CartActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

const CartActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
    source: 'Cart',
    events: {
        'Load Cart Details': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Cart Details Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Cart Details Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Cart Details Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    },
});


/***/ }),

/***/ 37020:
/*!*********************************************!*\
  !*** ./src/app/actions/checkout.actions.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutActions": () => (/* binding */ CheckoutActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

const CheckoutActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
    source: 'Checkout',
    events: {
        'Load Options': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Options Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Options Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Options Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Booking Channels': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Booking Channels Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Booking Channels Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Booking Channels Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    },
});


/***/ }),

/***/ 29814:
/*!**********************************************!*\
  !*** ./src/app/actions/companies.actions.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyActions": () => (/* binding */ CompanyActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

const CompanyActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
    source: 'Company',
    events: {
        'Save Company Details': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Save Company Details Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Save Company Details Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Save Company Details Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Delete Company': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Delete Company Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Delete Company Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Delete Company Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Companies': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Companies Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Companies Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Companies Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Company': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Company Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Company Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Company Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Toggle Company Subscription Status': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Toggle Company Subscription Status Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Toggle Company Subscription Status Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Toggle Company Subscription Status Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    },
});


/***/ }),

/***/ 30668:
/*!**************************************************!*\
  !*** ./src/app/actions/company-users.actions.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyUserActions": () => (/* binding */ CompanyUserActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

const CompanyUserActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
    source: 'Company User',
    events: {
        'Save Company User Details': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Save Company User Details Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Save Company User Details Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Save Company User Details Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Company Users': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Company Users Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Company Users Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Company Users Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Company User': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Company User Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Company User Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Company User Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load And Select Company User': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load And Select Company User Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load And Select Company User Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load And Select Company User Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    },
});


/***/ }),

/***/ 65516:
/*!********************************************************!*\
  !*** ./src/app/actions/confirmation-dialog.actions.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationDialogActions": () => (/* binding */ ConfirmationDialogActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

const ConfirmationDialogActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
    source: 'Confirmation Dialog',
    events: {
        Show: (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    },
});


/***/ }),

/***/ 97765:
/*!************************************************!*\
  !*** ./src/app/actions/cost-center.actions.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CostCenterActions": () => (/* binding */ CostCenterActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

const CostCenterActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
    source: 'Cost Center',
    events: {
        'Load Traveller Cost Centers': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Traveller Cost Centers Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Traveller Cost Centers Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Traveller Cost Centers Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    },
});


/***/ }),

/***/ 45658:
/*!**********************************************!*\
  !*** ./src/app/actions/countries.actions.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryActions": () => (/* binding */ CountryActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

const CountryActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
    source: 'Country',
    events: {
        'Load Countries': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Countries Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Countries Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Countries Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    },
});


/***/ }),

/***/ 71176:
/*!*********************************************!*\
  !*** ./src/app/actions/features.actions.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureActions": () => (/* binding */ FeatureActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

const FeatureActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
    source: 'Feature',
    events: {
        'Toggle Feature Status': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Toggle Feature Status Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Toggle Feature Status Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Toggle Feature Status Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Features': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Features Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Features Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Features Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    },
});


/***/ }),

/***/ 7058:
/*!*******************************************!*\
  !*** ./src/app/actions/global.actions.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalActions": () => (/* binding */ GlobalActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

const GlobalActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
    source: 'Global',
    events: {
        'Show Success Message': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Show Error Message': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    },
});


/***/ }),

/***/ 82250:
/*!*******************************************!*\
  !*** ./src/app/actions/layout.actions.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutActions": () => (/* binding */ LayoutActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

const LayoutActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
    source: 'Layout',
    events: {
        'Toggle Sidenav': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    },
});


/***/ }),

/***/ 51729:
/*!********************************************!*\
  !*** ./src/app/actions/payment.actions.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentActions": () => (/* binding */ PaymentActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

const PaymentActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
    source: 'Payment',
    events: {
        'Load Payment Options': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Payment Options Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Payment Options Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Payment Options Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    },
});


/***/ }),

/***/ 99911:
/*!****************************************!*\
  !*** ./src/app/actions/pnr.actions.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PnrActions": () => (/* binding */ PnrActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

const PnrActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
    source: 'Pnr',
    events: {
        'Validate Flight PNR': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Validate Flight PNR Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Validate Flight PNR Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Validate Flight PNR Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Set Flight Final Destination': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Confirm Flight PNR': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Confirm Flight PNR Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Confirm Flight PNR Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Confirm Flight PNR Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Reset Validated PNR': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Save Additional Validation Data': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    },
});


/***/ }),

/***/ 56049:
/*!*********************************************!*\
  !*** ./src/app/actions/products.actions.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductActions": () => (/* binding */ ProductActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

const ProductActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
    source: 'Product',
    events: {
        'Save Product Details': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Save Product Details Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Save Product Details Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Save Product Details Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Toggle Product Status': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Toggle Product Status Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Toggle Product Status Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Toggle Product Status Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Products': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Products Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Products Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Products Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    },
});


/***/ }),

/***/ 26873:
/*!****************************************************!*\
  !*** ./src/app/actions/system-messages.actions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemMessageActions": () => (/* binding */ SystemMessageActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

const SystemMessageActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
    source: 'System Message',
    events: {
        'Save System Message': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Save System Message Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Save System Message Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Save System Message Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Delete System Message': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Delete System Message Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Delete System Message Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Delete System Message Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load System Messages': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load System Messages Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load System Messages Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load System Messages Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load System Message': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load System Message Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load System Message Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load System Message Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    },
});


/***/ }),

/***/ 23138:
/*!*******************************************!*\
  !*** ./src/app/actions/tenant.actions.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TenantActions": () => (/* binding */ TenantActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

const TenantActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
    source: 'Tenant',
    events: {
        'Load Primary Tenants': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Primary Tenants Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Primary Tenants Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Primary Tenants Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    },
});


/***/ }),

/***/ 67421:
/*!******************************************!*\
  !*** ./src/app/actions/users.actions.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserActions": () => (/* binding */ UserActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

const UserActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
    source: 'User',
    events: {
        'Save User Details': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Save User Details Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Save User Details Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Save User Details Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Change User Password': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Change User Password Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Change User Password Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Change User Password Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Users': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Users Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Users Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Users Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load User': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load User Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load User Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load User Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Get Override Token': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Get Override Token Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Get Override Token Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Get Override Token Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    },
});


/***/ }),

/***/ 54871:
/*!***************************************************!*\
  !*** ./src/app/actions/vat-categories.actions.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VatCategoryActions": () => (/* binding */ VatCategoryActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

const VatCategoryActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
    source: 'Vat Category',
    events: {
        'Save Vat Category Details': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Save Vat Category Details Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Save Vat Category Details Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Save Vat Category Details Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Toggle Vat Category Status': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Toggle Vat Category Status Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Toggle Vat Category Status Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Toggle Vat Category Status Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Vat Categories': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Vat Categories Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Vat Categories Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Vat Categories Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    },
});


/***/ }),

/***/ 43850:
/*!**************************************************************!*\
  !*** ./src/app/actions/vendors-payment-providers.actions.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorsPaymentProviderActions": () => (/* binding */ VendorsPaymentProviderActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

const VendorsPaymentProviderActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
    source: 'Vendors Payment Provider',
    events: {
        'Save Vendors Payment Provider Details': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Save Vendors Payment Provider Details Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Save Vendors Payment Provider Details Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Save Vendors Payment Provider Details Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Toggle Vendors Payment Provider Status': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Toggle Vendors Payment Provider Status Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Toggle Vendors Payment Provider Status Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Toggle Vendors Payment Provider Status Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Vendors Payment Providers': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Vendors Payment Providers Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Vendors Payment Providers Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Vendors Payment Providers Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    },
});


/***/ }),

/***/ 98233:
/*!********************************************!*\
  !*** ./src/app/actions/vendors.actions.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorActions": () => (/* binding */ VendorActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

const VendorActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
    source: 'Vendor',
    events: {
        'Save Vendor Details': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Save Vendor Details Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Save Vendor Details Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Save Vendor Details Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Delete Vendor': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Delete Vendor Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Delete Vendor Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Delete Vendor Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Toggle Vendor Status': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Toggle Vendor Status Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Toggle Vendor Status Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Toggle Vendor Status Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Vendors': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Vendors Start': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
        'Load Vendors Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
        'Load Vendors Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    },
});


/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.guard */ 3870);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 77528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 71674)).then((m) => m.AuthModule),
    },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent, canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard], data: { title: 'Dashboard' } },
    {
        path: 'system-messages',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_base-listing_component_ts-node_modules_angular_material_fesm2020_progress-bar_mjs"), __webpack_require__.e("default-src_app_global_wrapper_details_wrapper-details_module_ts"), __webpack_require__.e("src_app_system-messages_system-messages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./system-messages/system-messages.module */ 9965)).then((m) => m.SystemMessagesModule),
    },
    {
        path: 'companies',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_base-listing_component_ts-node_modules_angular_material_fesm2020_progress-bar_mjs"), __webpack_require__.e("default-src_app_global_wrapper_details_wrapper-details_module_ts"), __webpack_require__.e("src_app_companies_companies_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./companies/companies.module */ 92138)).then((m) => m.CompaniesModule),
    },
    {
        path: 'billing-requests',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_base-listing_component_ts-node_modules_angular_material_fesm2020_progress-bar_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_progress-spinner_mjs"), __webpack_require__.e("src_app_billing-requests_billing-requests_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./billing-requests/billing-requests.module */ 96605)).then((m) => m.BillingRequestsModule),
    },
    {
        path: 'products',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_base-listing_component_ts-node_modules_angular_material_fesm2020_progress-bar_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_slide-toggle_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_products_products_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./products/products.module */ 88980)).then((m) => m.ProductsModule),
    },
    {
        path: 'features',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_base-listing_component_ts-node_modules_angular_material_fesm2020_progress-bar_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_features_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/features.module */ 65790)).then((m) => m.FeaturesModule),
    },
    {
        path: 'users',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_base-listing_component_ts-node_modules_angular_material_fesm2020_progress-bar_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_slide-toggle_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_progress-spinner_mjs"), __webpack_require__.e("src_app_users_users_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./users/users.module */ 1951)).then((m) => m.UsersModule),
    },
    // Fallbacks
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled',
        }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _actions_countries_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/countries.actions */ 45658);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _services_app_initializer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/app-initializer.service */ 92235);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);






class AppComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(store, appInitializer) {
        super();
        this.store = store;
        this.appInitializer = appInitializer;
        appInitializer.init();
    }
    ngOnInit() {
        this.store.dispatch(_actions_countries_actions__WEBPACK_IMPORTED_MODULE_0__.CountryActions.loadCountries());
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_app_initializer_service__WEBPACK_IMPORTED_MODULE_2__.AppInitializerService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [[1, "app-container", "bg-dib-gray-100"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], styles: ["[_ngcontent-%COMP%]:root {\n  --dib-breadcrumbs-height: 56px;\n  --dib-header-height: 80px;\n}\n@media (max-width: 959.99px) {\n  [_ngcontent-%COMP%]:root {\n    --dib-breadcrumbs-height: 40px;\n    --dib-header-height: 50px;\n  }\n}\n.app-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL192YXJpYWJsZXMuc2NzcyIsImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7QUNDRjtBRENFO0VBSkY7SUFLSSw4QkFBQTtJQUNBLHlCQUFBO0VDRUY7QUFDRjtBQU5FO0VBQUEsa0JBQUE7RUFBQSxRQUFBO0VBQUEsVUFBQTtFQUFBLFdBQUE7RUFBQSxTQUFBO0VBQUEsYUFBQTtFQUFBO0FBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAtLWRpYi1icmVhZGNydW1icy1oZWlnaHQ6IDU2cHg7XG4gIC0tZGliLWhlYWRlci1oZWlnaHQ6IDgwcHg7XG5cbiAgQHNjcmVlbiBzbSB7XG4gICAgLS1kaWItYnJlYWRjcnVtYnMtaGVpZ2h0OiA0MHB4O1xuICAgIC0tZGliLWhlYWRlci1oZWlnaHQ6IDUwcHg7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3NyYy92YXJpYWJsZXMnO1xuXG4uYXBwLWNvbnRhaW5lciB7XG4gIEBhcHBseSBhYnNvbHV0ZSB0b3AtMCByaWdodC0wIGJvdHRvbS0wIGxlZnQtMCBmbGV4IGZsZXgtY29sO1xufVxuIl19 */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ngrx/store-devtools */ 55242);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ngrx/router-store */ 61611);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _interceptors_add_header_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interceptors/add-header.interceptor */ 23420);
/* harmony import */ var _interceptors_mocked_requests_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interceptors/mocked-requests.interceptor */ 6426);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ 61697);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _dialog_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog/confirmation/confirmation.component */ 55567);
/* harmony import */ var _effects_confirmation_dialog_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./effects/confirmation-dialog.effects */ 98677);
/* harmony import */ var _effects_country_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./effects/country.effects */ 53226);
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.module */ 34814);
/* harmony import */ var _effects_global_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./effects/global.effects */ 1661);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/breadcrumbs/breadcrumbs.module */ 2367);
/* harmony import */ var _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./global/wrapper/listing/wrapper-listing.module */ 23745);
/* harmony import */ var _global_layout_layout_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./global/layout/layout.module */ 32735);
/* harmony import */ var _effects_auth_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./effects/auth.effects */ 21004);
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./actions/auth.actions */ 60274);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/auth.service */ 50384);
/* harmony import */ var _config_config_setup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./config/config.setup */ 93457);
/* harmony import */ var _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/pipes/pipes.module */ 59916);
/* harmony import */ var _services_api_cache_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/api-cache.service */ 66397);
/* harmony import */ var _interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./interceptors/cache.interceptor */ 41461);
/* harmony import */ var _interceptors_unauthenticated_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./interceptors/unauthenticated.interceptor */ 37270);
/* harmony import */ var _utils_helpers_get_jwt_claims__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./utils/helpers/get-jwt-claims */ 17773);
/* harmony import */ var _global_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./global/dialog/dialog.module */ 13547);
/* harmony import */ var _interceptors_split_sort_param_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./interceptors/split-sort-param.interceptor */ 47939);















































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ providers: [
        _config_config_setup__WEBPACK_IMPORTED_MODULE_16__.DTMS_CONFIG_PROVIDER,
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_24__.APP_INITIALIZER,
            useFactory: (store, authService) => {
                return () => {
                    const user = authService.getUser();
                    if (user.token) {
                        const tokenExpired = Date.now() < (0,_utils_helpers_get_jwt_claims__WEBPACK_IMPORTED_MODULE_21__.getJwtClaims)(user.token).exp;
                        // If token is expired we will trigger Logout action to clear the user session and redirect to login
                        store.dispatch(tokenExpired ? _actions_auth_actions__WEBPACK_IMPORTED_MODULE_14__.AuthActions.logout('Session expired') : _actions_auth_actions__WEBPACK_IMPORTED_MODULE_14__.AuthActions.setLoggedInUser({ data: user }));
                    }
                };
            },
            deps: [_ngrx_store__WEBPACK_IMPORTED_MODULE_25__.Store, _auth_auth_service__WEBPACK_IMPORTED_MODULE_15__.AuthService],
            multi: true,
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HTTP_INTERCEPTORS,
            useClass: _interceptors_add_header_interceptor__WEBPACK_IMPORTED_MODULE_1__.AddHeaderInterceptor,
            multi: true,
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HTTP_INTERCEPTORS,
            useClass: _interceptors_split_sort_param_interceptor__WEBPACK_IMPORTED_MODULE_23__.SplitSortParamInterceptor,
            multi: true,
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HTTP_INTERCEPTORS,
            useClass: _interceptors_unauthenticated_interceptor__WEBPACK_IMPORTED_MODULE_20__.UnauthenticatedInterceptor,
            multi: true,
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HTTP_INTERCEPTORS,
            useClass: _interceptors_mocked_requests_interceptor__WEBPACK_IMPORTED_MODULE_2__.MockedRequestsInterceptor,
            multi: true,
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HTTP_INTERCEPTORS,
            useClass: _interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_19__.CacheInterceptor,
            multi: true,
        },
        // Material defaults
        {
            provide: _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__.MAT_TOOLTIP_DEFAULT_OPTIONS,
            useValue: { showDelay: 200 },
        },
        {
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: { appearance: 'outline' },
        },
        {
            provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MAT_PAGINATOR_DEFAULT_OPTIONS,
            useValue: {
                formFieldAppearance: 'legacy',
                showFirstLastButtons: true,
                pageSizeOptions: [10, 50, 100],
            },
        },
        {
            provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__.MAT_DIALOG_DEFAULT_OPTIONS,
            useValue: {
                autoFocus: false,
                restoreFocus: true,
                hasBackdrop: true,
                disableClose: true,
                maxWidth: 700,
                minWidth: 500,
                position: {
                    top: '100px',
                },
            },
        },
        // API caching implementation
        { provide: _services_api_cache_service__WEBPACK_IMPORTED_MODULE_18__.ApiCache, useClass: _services_api_cache_service__WEBPACK_IMPORTED_MODULE_18__.ApiCacheWithMap },
    ], imports: [_global_layout_layout_module__WEBPACK_IMPORTED_MODULE_12__.LayoutModule,
        _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_11__.WrapperListingModule,
        _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__.BreadcrumbsModule,
        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__.DashboardModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__.MatDialogModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_34__.MatButtonModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__.MatSnackBarModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_36__.MatSelectModule,
        _ngrx_router_store__WEBPACK_IMPORTED_MODULE_37__.StoreRouterConnectingModule.forRoot(),
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_38__.EffectsModule.forRoot([_effects_auth_effects__WEBPACK_IMPORTED_MODULE_13__.AuthEffects, _effects_global_effects__WEBPACK_IMPORTED_MODULE_9__.GlobalEffects, _effects_confirmation_dialog_effects__WEBPACK_IMPORTED_MODULE_6__.ConfirmationDialogEffects, _effects_country_effects__WEBPACK_IMPORTED_MODULE_7__.CountryEffects]),
        _ngrx_store__WEBPACK_IMPORTED_MODULE_25__.StoreModule.forRoot(_reducers__WEBPACK_IMPORTED_MODULE_3__.reducers, {
            metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_3__.metaReducers,
            runtimeChecks: {
                strictStateImmutability: false,
                strictActionImmutability: false,
            },
        }),
        !_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_39__.StoreDevtoolsModule.instrument() : [],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_40__.MatInputModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_41__.RouterModule,
        _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_17__.DibPipesModule,
        _global_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_22__.DialogModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _dialog_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmationComponent], imports: [_global_layout_layout_module__WEBPACK_IMPORTED_MODULE_12__.LayoutModule,
        _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_11__.WrapperListingModule,
        _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__.BreadcrumbsModule,
        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__.DashboardModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__.MatDialogModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_34__.MatButtonModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__.MatSnackBarModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_36__.MatSelectModule, _ngrx_router_store__WEBPACK_IMPORTED_MODULE_37__.StoreRouterConnectingModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_38__.EffectsRootModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_25__.StoreRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_39__.StoreDevtoolsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_40__.MatInputModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_41__.RouterModule,
        _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_17__.DibPipesModule,
        _global_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_22__.DialogModule] }); })();


/***/ }),

/***/ 3870:
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/auth.reducer */ 30239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);






class AuthGuard {
    constructor(store, router) {
        this.store = store;
        this.router = router;
    }
    canActivate(next, state) {
        const url = state.url;
        return this.store.select(_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_0__.isLoggedIn).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((loggedIn) => {
            if (loggedIn)
                return true;
            // Redirect to the login page and preserve the redirect URL
            this.router.navigate(['/auth/login'], { queryParams: { redirectTo: url } });
            return false;
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 50384:
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_api_cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/api-cache.service */ 66397);





class AuthService {
    constructor(http, requestCache) {
        this.http = http;
        this.requestCache = requestCache;
        this.baseUrl = '/api/tmcc';
    }
    login(data) {
        return this.http
            .post(`${this.baseUrl}/authenticate`, { username: data.username, password: data.password })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)((user) => {
            if (user && user.token)
                this.setUser(user, user.token);
        }));
    }
    forgotPassword(email) {
        return this.http.post(`${this.baseUrl}/users/forgot-password`, { email }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => ({ email })));
    }
    activateNewPassword(token, password) {
        return this.http.post(`${this.baseUrl}/users/activate-new-password`, { token, password });
    }
    validatePasswordToken(token) {
        return this.http
            .get(`${this.baseUrl}/users/activate-new-password/${token}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => response.valid));
    }
    setNewPassword(token, password) {
        return this.http.post(`${this.baseUrl}/users/set-new-password`, { token, password });
    }
    validateSetPasswordToken(token) {
        return this.http
            .get(`${this.baseUrl}/users/set-new-password/${token}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => response.valid));
    }
    getUser() {
        return JSON.parse(localStorage.getItem('currentUser')) || {};
    }
    setUser(user, token) {
        localStorage.setItem('currentUser', JSON.stringify({ ...user, token }));
    }
    logout() {
        localStorage.removeItem('currentUser');
        this.requestCache.clearAll();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(true);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_api_cache_service__WEBPACK_IMPORTED_MODULE_0__.ApiCache)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 83607:
/*!***********************************!*\
  !*** ./src/app/base.component.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _models_booking_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/booking.model */ 31282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class BaseComponent {
    constructor() {
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
    }
    ngOnDestroy() {
        if (this.subscriptions) {
            this.subscriptions.unsubscribe();
        }
    }
    /**
     * Custom match validator
     * @param matchTo Name of the control to match to
     * TODO: Find a better place to move this. Maybe create validation utility?
     */
    matches(matchTo) {
        return (control) => {
            return !!control.parent && !!control.parent.value && control.value === control.parent.controls[matchTo].value
                ? null
                : { isMatching: false };
        };
    }
    /**
     * ReferenceType should only be kept if a BookingReference or FlightTicketNumber are set
     * @param params Key value pair of params and their values that will be used
     * TODO: Find a better place to move this. Maybe create validation helper utility?
     */
    validateReferenceType(params) {
        if (!params.referenceType) {
            // If there is no reference type we need to clear booking reference and flight ticket number fields
            delete params.bookingReference;
            delete params.flightTicketNumber;
            return params;
        }
        switch (params.referenceType) {
            // If we are searching for Flights we can enter either booking reference or a flight ticket number
            case _models_booking_model__WEBPACK_IMPORTED_MODULE_0__.BookingReferenceTypes.Flight:
                if (!params.bookingReference && !params.flightTicketNumber)
                    delete params.referenceType;
                break;
            // Otherwise booking reference is required
            default:
                if (!params.bookingReference)
                    delete params.referenceType;
                break;
        }
        return params;
    }
}
BaseComponent.ɵfac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(); };
BaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BaseComponent, selectors: [["ng-component"]], decls: 0, vars: 0, template: function BaseComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 93457:
/*!****************************************!*\
  !*** ./src/app/config/config.setup.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DTMS_CONFIG_PROVIDER": () => (/* binding */ DTMS_CONFIG_PROVIDER),
/* harmony export */   "fetchConfigAndFillInTheStore": () => (/* binding */ fetchConfigAndFillInTheStore),
/* harmony export */   "makeSureWeHaveAKeyInTheStore": () => (/* binding */ makeSureWeHaveAKeyInTheStore)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 62566);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _tmc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tmc */ 77434);
/* harmony import */ var _services_tenant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/tenant.service */ 62255);





function fetchConfigAndFillInTheStore(service, store) {
    return () => new Promise((resolve) => {
        service
            .getConfig()
            // Only keep the subscription open until we get first valid config object
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeWhile)((config) => !!config.tmc))
            .subscribe((config) => {
            store.dispatch(_tmc__WEBPACK_IMPORTED_MODULE_0__.TmcActions.setTmc({ tmc: config.tmc }));
            resolve(config);
        });
    });
}
function makeSureWeHaveAKeyInTheStore(store) {
    return () => new Promise((resolve) => {
        store
            .select(_tmc__WEBPACK_IMPORTED_MODULE_0__.tmc)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((tenant) => !!tenant?.id), 
        // Only keep the subscription open until we get first valid tenant object
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeWhile)((tenant) => !!tenant?.id))
            .subscribe((tenant) => resolve(tenant));
    });
}
const DTMS_CONFIG_PROVIDER = [
    _services_tenant_service__WEBPACK_IMPORTED_MODULE_1__.TenantService,
    {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__.APP_INITIALIZER,
        useFactory: fetchConfigAndFillInTheStore,
        deps: [_services_tenant_service__WEBPACK_IMPORTED_MODULE_1__.TenantService, _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store],
        multi: true,
    },
    {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__.APP_INITIALIZER,
        useFactory: makeSureWeHaveAKeyInTheStore,
        deps: [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store],
        multi: true,
    },
];


/***/ }),

/***/ 77434:
/*!*************************************!*\
  !*** ./src/app/config/tmc/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TmcActions": () => (/* reexport safe */ _tmc_actions__WEBPACK_IMPORTED_MODULE_0__.TmcActions),
/* harmony export */   "TmcAdapter": () => (/* reexport safe */ _tmc_model__WEBPACK_IMPORTED_MODULE_1__.TmcAdapter),
/* harmony export */   "TmcModel": () => (/* reexport safe */ _tmc_model__WEBPACK_IMPORTED_MODULE_1__.TmcModel),
/* harmony export */   "getState": () => (/* reexport safe */ _tmc_reducer__WEBPACK_IMPORTED_MODULE_2__.getState),
/* harmony export */   "isTmcLoading": () => (/* reexport safe */ _tmc_reducer__WEBPACK_IMPORTED_MODULE_2__.isTmcLoading),
/* harmony export */   "reducer": () => (/* reexport safe */ _tmc_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer),
/* harmony export */   "tmc": () => (/* reexport safe */ _tmc_reducer__WEBPACK_IMPORTED_MODULE_2__.tmc)
/* harmony export */ });
/* harmony import */ var _tmc_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tmc.actions */ 98305);
/* harmony import */ var _tmc_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tmc.model */ 32606);
/* harmony import */ var _tmc_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tmc.reducer */ 37926);





/***/ }),

/***/ 98305:
/*!*******************************************!*\
  !*** ./src/app/config/tmc/tmc.actions.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TmcActions": () => (/* binding */ TmcActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

const TmcActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
    source: 'Tmc',
    events: {
        'Set Tmc': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    },
});


/***/ }),

/***/ 32606:
/*!*****************************************!*\
  !*** ./src/app/config/tmc/tmc.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TmcAdapter": () => (/* binding */ TmcAdapter),
/* harmony export */   "TmcModel": () => (/* binding */ TmcModel)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class TmcModel {
    constructor(id, name, logo, logoInverted, headline, platformLink, adminLink) {
        this.id = id;
        this.name = name;
        this.logo = logo;
        this.logoInverted = logoInverted;
        this.headline = headline;
        this.platformLink = platformLink;
        this.adminLink = adminLink;
    }
}
class TmcAdapter {
    adapt(item) {
        return new TmcModel(item?.id, item?.name, item?.logo, item?.logoInverted, item?.headline, item?.platformLink, item?.adminLink);
    }
}
TmcAdapter.ɵfac = function TmcAdapter_Factory(t) { return new (t || TmcAdapter)(); };
TmcAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TmcAdapter, factory: TmcAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 37926:
/*!*******************************************!*\
  !*** ./src/app/config/tmc/tmc.reducer.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getState": () => (/* binding */ getState),
/* harmony export */   "isTmcLoading": () => (/* binding */ isTmcLoading),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "tmc": () => (/* binding */ tmc)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _tmc_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tmc.model */ 32606);
/* harmony import */ var _tmc_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tmc.actions */ 98305);



const initialState = {
    tmc: null,
    loading: false,
    error: null,
};
const tmcReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_tmc_actions__WEBPACK_IMPORTED_MODULE_1__.TmcActions.setTmc, (state, { tmc }) => ({
    ...state,
    tmc,
    loading: false,
})));
function reducer(state, action) {
    return tmcReducer(state, action);
}
const getState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)('tmc');
const tmc = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => new _tmc_model__WEBPACK_IMPORTED_MODULE_0__.TmcAdapter().adapt(state.tmc));
const isTmcLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => state.loading);


/***/ }),

/***/ 77528:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! rxjs */ 99635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _reducers_users_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/users.reducer */ 14178);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.component */ 83607);
/* harmony import */ var _reducers_vendors_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/vendors.reducer */ 65649);
/* harmony import */ var _actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/billing-requests.actions */ 64646);
/* harmony import */ var _reducers_billing_requests_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/billing-requests.reducer */ 17682);
/* harmony import */ var _reducers_features_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/features.reducer */ 33371);
/* harmony import */ var _reducers_vat_categories_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/vat-categories.reducer */ 63301);
/* harmony import */ var _reducers_products_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/products.reducer */ 41878);
/* harmony import */ var _reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/companies.reducer */ 47856);
/* harmony import */ var _actions_vendors_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/vendors.actions */ 98233);
/* harmony import */ var _actions_features_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/features.actions */ 71176);
/* harmony import */ var _actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/vat-categories.actions */ 54871);
/* harmony import */ var _actions_companies_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../actions/companies.actions */ 29814);
/* harmony import */ var _actions_products_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../actions/products.actions */ 56049);
/* harmony import */ var _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../reducers/auth.reducer */ 30239);
/* harmony import */ var _actions_users_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../actions/users.actions */ 67421);
/* harmony import */ var _models_billing_request_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../models/billing-request.model */ 83970);
/* harmony import */ var _reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../reducers/company-users.reducer */ 15569);
/* harmony import */ var _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../actions/company-users.actions */ 30668);
/* harmony import */ var _actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../actions/system-messages.actions */ 26873);
/* harmony import */ var _models_system_message_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../models/system-message.model */ 95609);
/* harmony import */ var _reducers_system_messages_reducer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../reducers/system-messages.reducer */ 58683);
/* harmony import */ var _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../actions/bookings.actions */ 4797);
/* harmony import */ var _reducers_bookings_reducer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../reducers/bookings.reducer */ 6819);
/* harmony import */ var _reducers_vendors_payment_providers_reducer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../reducers/vendors-payment-providers.reducer */ 62031);
/* harmony import */ var _actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../actions/vendors-payment-providers.actions */ 43850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../global/breadcrumbs/breadcrumbs.component */ 25758);
/* harmony import */ var _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../global/breadcrumbs/breadcrumb/breadcrumb.component */ 62718);
/* harmony import */ var _global_wrapper_widget_wrapper_widget_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../global/wrapper/widget/wrapper-widget.component */ 8421);
/* harmony import */ var _global_wrapper_stat_wrapper_stat_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../global/wrapper/stat/wrapper-stat.component */ 89336);
/* harmony import */ var _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../global/wrapper/main/wrapper-main.component */ 4122);
/* harmony import */ var _global_wrapper_search_quick_search_wrapper_quick_search_wrapper_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../global/wrapper/search/quick-search-wrapper/quick-search-wrapper.component */ 14243);






































function DashboardComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](1, "dib-wrapper-stat", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const stat_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("loading", _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpipeBind1"](2, 4, stat_r2.observable$).loading)("count", _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpipeBind1"](3, 6, stat_r2.observable$).count)("link", stat_r2.link)("title", stat_r2.title);
  }
}
function DashboardComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](1, "dib-wrapper-stat", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const stat_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("loading", _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpipeBind1"](2, 4, stat_r3.observable$).loading)("count", _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpipeBind1"](3, 6, stat_r3.observable$).count)("link", stat_r3.link)("title", stat_r3.title);
  }
}
class DashboardComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
  constructor(store, router) {
    super();
    this.store = store;
    this.router = router;
    this.users$ = this.store.select(_reducers_users_reducer__WEBPACK_IMPORTED_MODULE_0__.selectUsersStats);
    this.vendors$ = this.store.select(_reducers_vendors_reducer__WEBPACK_IMPORTED_MODULE_2__.selectVendorsStats);
    this.vendorsPaymentProviders$ = this.store.select(_reducers_vendors_payment_providers_reducer__WEBPACK_IMPORTED_MODULE_24__.selectVendorsPaymentProvidersStats);
    this.features$ = this.store.select(_reducers_features_reducer__WEBPACK_IMPORTED_MODULE_5__.selectFeaturesStats);
    this.categories$ = this.store.select(_reducers_vat_categories_reducer__WEBPACK_IMPORTED_MODULE_6__.selectVatCategoriesStats);
    this.products$ = this.store.select(_reducers_products_reducer__WEBPACK_IMPORTED_MODULE_7__.selectProductsStats);
    this.billingRequests$ = this.store.select(_reducers_billing_requests_reducer__WEBPACK_IMPORTED_MODULE_4__.selectBillingRequestsStats);
    this.systemMessages$ = this.store.select(_reducers_system_messages_reducer__WEBPACK_IMPORTED_MODULE_21__.selectSystemMessagesStats);
    this.companies$ = this.store.select(_reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_8__.selectCompaniesStats);
    this.companyUsers$ = this.store.select(_reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_17__.selectCompanyUsersStats);
    this.bookings$ = this.store.select(_reducers_bookings_reducer__WEBPACK_IMPORTED_MODULE_23__.selectBookingsStats);
    // Open item stats
    this.setupOpenItemStats();
    // Overview stats
    this.setupOverviewStats();
    this.setupUserStats();
  }
  setupOpenItemStats() {
    this.openItemsStats = [{
      observable$: this.billingRequests$,
      title: 'Billing Requests',
      link: '/billing-requests'
    }, {
      observable$: this.systemMessages$,
      title: 'Open Messages',
      link: '/system-messages'
    }];
    this.store.dispatch(_actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_3__.BillingRequestActions.loadRequests({
      params: {
        page: 1,
        size: 1,
        billingProfileRequestStatus: _models_billing_request_model__WEBPACK_IMPORTED_MODULE_16__.BillingRequestStatus.PENDING
      }
    }));
    this.store.dispatch(_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_19__.SystemMessageActions.loadSystemMessages({
      params: {
        page: 1,
        size: 1,
        status: _models_system_message_model__WEBPACK_IMPORTED_MODULE_20__.SystemMessageStatus.OPENED
      }
    }));
  }
  setupOverviewStats() {
    this.overviewStats = [{
      observable$: this.companies$,
      title: 'Companies',
      link: '/companies'
    }, {
      observable$: this.companyUsers$,
      title: 'Company Users',
      link: '/companies/users'
    }, {
      observable$: this.bookings$,
      title: 'Bookings',
      link: '/companies/bookings'
    }];
    this.store.dispatch(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_12__.CompanyActions.loadCompanies({
      params: {
        page: 1,
        size: 1
      }
    }));
    this.store.dispatch(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_18__.CompanyUserActions.loadCompanyUsers({
      params: {
        page: 1,
        size: 1
      }
    }));
    this.store.dispatch(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_22__.BookingActions.loadBookings({
      params: {
        page: 1,
        size: 1
      }
    }));
  }
  setupUserStats() {
    this.store.select(_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_14__.loggedInUser).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.take)(1)).subscribe(user => {
      // Only DIB super admins can view features and generic product related modules
      if (user.isSuperAdmin()) {
        this.overviewStats = [{
          observable$: this.features$,
          title: 'Features',
          link: '/features'
        }, {
          observable$: this.products$,
          title: 'Products',
          link: '/products'
        }, {
          observable$: this.categories$,
          title: 'Product Vat Categories',
          link: '/products/vat-categories'
        }, {
          observable$: this.vendors$,
          title: 'Product Vendors',
          link: '/products/vendors'
        }, {
          observable$: this.vendorsPaymentProviders$,
          title: 'Vendors Payment Providers',
          link: '/products/vendors/payment-providers'
        }, ...this.overviewStats];
        this.store.dispatch(_actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_25__.VendorsPaymentProviderActions.loadVendorsPaymentProviders({
          params: {
            page: 1,
            size: 1
          }
        }));
        this.store.dispatch(_actions_vendors_actions__WEBPACK_IMPORTED_MODULE_9__.VendorActions.loadVendors({
          params: {
            page: 1,
            size: 1
          }
        }));
        this.store.dispatch(_actions_features_actions__WEBPACK_IMPORTED_MODULE_10__.FeatureActions.loadFeatures());
        this.store.dispatch(_actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_11__.VatCategoryActions.loadVatCategories({
          params: {
            page: 1,
            size: 1
          }
        }));
        this.store.dispatch(_actions_products_actions__WEBPACK_IMPORTED_MODULE_13__.ProductActions.loadProducts({
          params: {
            page: 1,
            size: 1
          }
        }));
      }
      // Only admin users can view users module
      if (user.hasAdminAccess()) {
        this.overviewStats.unshift({
          observable$: this.users$,
          title: 'Users',
          link: '/users'
        });
        this.store.dispatch(_actions_users_actions__WEBPACK_IMPORTED_MODULE_15__.UserActions.loadUsers({
          params: {
            page: 1,
            size: 1
          }
        }));
      }
    });
  }
  onSearchCompanies(params) {
    this.router.navigate(['/companies'], {
      queryParams: params
    }).then(rxjs__WEBPACK_IMPORTED_MODULE_34__.noop);
  }
  onSearchUsers(params) {
    this.router.navigate(['/companies/users'], {
      queryParams: params
    }).then(rxjs__WEBPACK_IMPORTED_MODULE_34__.noop);
  }
  onSearchBookings(params) {
    this.router.navigate(['/companies/bookings'], {
      queryParams: this.validateReferenceType(params)
    }).then(rxjs__WEBPACK_IMPORTED_MODULE_34__.noop);
  }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_35__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_36__.Router));
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵInheritDefinitionFeature"]],
  decls: 23,
  vars: 2,
  consts: [["label", "Dashboard", "route", "/"], [1, "base-dashboard-grid", "m-6", "grid", "grid-flow-col", "gap-6", "sm:grid-flow-row", "sm:grid-cols-none"], [1, "grid", "gap-6", "sm:grid-flow-col", "xs:grid-flow-row"], [1, "min-w-max"], ["slot", "title"], ["slot", "content"], [1, "grid", "grid-cols-2", "gap-6"], [4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-2", "gap-6", "sm:grid-cols-3", "xs:grid-cols-2"], [1, "row-end-1"], ["activeTab", "users", 3, "searchCompanies", "searchUsers", "searchBookings"], [3, "loading", "count", "link", "title"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "dib-wrapper-main")(1, "dib-breadcrumbs");
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](2, "dib-breadcrumb", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "dib-wrapper-widget", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementContainerStart"](6, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtext"](7, "Open work items");
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementContainerStart"](8, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](10, DashboardComponent_ng_container_10_Template, 4, 8, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](11, "dib-wrapper-widget", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementContainerStart"](12, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtext"](13, "Overview");
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementContainerStart"](14, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](15, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](16, DashboardComponent_ng_container_16_Template, 4, 8, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](17, "div", 9)(18, "dib-wrapper-widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementContainerStart"](19, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtext"](20, "Quick search");
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementContainerStart"](21, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](22, "dib-quick-search-wrapper", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵlistener"]("searchCompanies", function DashboardComponent_Template_dib_quick_search_wrapper_searchCompanies_22_listener($event) {
        return ctx.onSearchCompanies($event);
      })("searchUsers", function DashboardComponent_Template_dib_quick_search_wrapper_searchUsers_22_listener($event) {
        return ctx.onSearchUsers($event);
      })("searchBookings", function DashboardComponent_Template_dib_quick_search_wrapper_searchBookings_22_listener($event) {
        return ctx.onSearchBookings($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngForOf", ctx.openItemsStats);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngForOf", ctx.overviewStats);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_37__.NgForOf, _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_26__.BreadcrumbsComponent, _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_27__.BreadcrumbComponent, _global_wrapper_widget_wrapper_widget_component__WEBPACK_IMPORTED_MODULE_28__.WrapperWidgetComponent, _global_wrapper_stat_wrapper_stat_component__WEBPACK_IMPORTED_MODULE_29__.WrapperStatComponent, _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_30__.WrapperMainComponent, _global_wrapper_search_quick_search_wrapper_quick_search_wrapper_component__WEBPACK_IMPORTED_MODULE_31__.QuickSearchWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_37__.AsyncPipe],
  styles: [".base-dashboard-grid[_ngcontent-%COMP%] {\n  grid-template-columns: max-content 1fr;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFBO0FBQ0YiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2UtZGFzaGJvYXJkLWdyaWQge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IDFmcjtcbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 34814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _effects_billing_request_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../effects/billing-request.effects */ 16215);
/* harmony import */ var _effects_vendor_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../effects/vendor.effects */ 49272);
/* harmony import */ var _effects_user_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../effects/user.effects */ 49002);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ 77528);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-routing.module */ 90158);
/* harmony import */ var _effects_feature_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../effects/feature.effects */ 21837);
/* harmony import */ var _effects_vat_category_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../effects/vat-category.effects */ 53138);
/* harmony import */ var _effects_product_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../effects/product.effects */ 76435);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global/breadcrumbs/breadcrumbs.module */ 2367);
/* harmony import */ var _global_wrapper_widget_wrapper_widget_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../global/wrapper/widget/wrapper-widget.module */ 36163);
/* harmony import */ var _global_wrapper_stat_wrapper_stat_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../global/wrapper/stat/wrapper-stat.module */ 49192);
/* harmony import */ var _effects_company_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../effects/company.effects */ 56703);
/* harmony import */ var _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../global/wrapper/main/wrapper-main.module */ 49722);
/* harmony import */ var _effects_company_user_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../effects/company-user.effects */ 68974);
/* harmony import */ var _global_wrapper_search_wrapper_search_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../global/wrapper/search/wrapper-search.module */ 38765);
/* harmony import */ var _effects_system_message_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../effects/system-message.effects */ 66858);
/* harmony import */ var _effects_booking_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../effects/booking.effects */ 40735);
/* harmony import */ var _effects_vendor_payment_provider_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../effects/vendor-payment-provider.effects */ 14173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 22560);























class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__.EffectsModule.forFeature([
            _effects_billing_request_effects__WEBPACK_IMPORTED_MODULE_0__.BillingRequestEffects,
            _effects_vendor_effects__WEBPACK_IMPORTED_MODULE_1__.VendorEffects,
            _effects_vendor_payment_provider_effects__WEBPACK_IMPORTED_MODULE_17__.VendorsPaymentProviderEffects,
            _effects_user_effects__WEBPACK_IMPORTED_MODULE_2__.UserEffects,
            _effects_feature_effects__WEBPACK_IMPORTED_MODULE_5__.FeatureEffects,
            _effects_vat_category_effects__WEBPACK_IMPORTED_MODULE_6__.VatCategoryEffects,
            _effects_product_effects__WEBPACK_IMPORTED_MODULE_7__.ProductEffects,
            _effects_company_effects__WEBPACK_IMPORTED_MODULE_11__.CompanyEffects,
            _effects_company_user_effects__WEBPACK_IMPORTED_MODULE_13__.CompanyUserEffects,
            _effects_system_message_effects__WEBPACK_IMPORTED_MODULE_15__.SystemMessageEffects,
            _effects_booking_effects__WEBPACK_IMPORTED_MODULE_16__.BookingEffects,
        ]),
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule,
        _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__.BreadcrumbsModule,
        _global_wrapper_widget_wrapper_widget_module__WEBPACK_IMPORTED_MODULE_9__.WrapperWidgetModule,
        _global_wrapper_stat_wrapper_stat_module__WEBPACK_IMPORTED_MODULE_10__.WrapperStatModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule,
        _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_12__.WrapperMainModule,
        _global_wrapper_search_wrapper_search_module__WEBPACK_IMPORTED_MODULE_14__.WrapperSearchModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__.EffectsFeatureModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule,
        _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__.BreadcrumbsModule,
        _global_wrapper_widget_wrapper_widget_module__WEBPACK_IMPORTED_MODULE_9__.WrapperWidgetModule,
        _global_wrapper_stat_wrapper_stat_module__WEBPACK_IMPORTED_MODULE_10__.WrapperStatModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule,
        _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_12__.WrapperMainModule,
        _global_wrapper_search_wrapper_search_module__WEBPACK_IMPORTED_MODULE_14__.WrapperSearchModule] }); })();


/***/ }),

/***/ 55567:
/*!***************************************************************!*\
  !*** ./src/app/dialog/confirmation/confirmation.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationComponent": () => (/* binding */ ConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _global_dialog_dialog_title_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global/dialog/dialog-title.component */ 37511);
/* harmony import */ var _utils_pipes_upperfirst_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/pipes/upperfirst.pipe */ 63548);






class ConfirmationComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() { }
}
ConfirmationComponent.ɵfac = function ConfirmationComponent_Factory(t) { return new (t || ConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA)); };
ConfirmationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ConfirmationComponent, selectors: [["app-confirmation"]], decls: 9, vars: 9, consts: [[3, "closable"], [1, "mt-4", "mb-6", 3, "innerHTML"], [1, "mb-1", "justify-end"], ["mat-button", "", 3, "mat-dialog-close"], ["mat-stroked-button", "", 3, "color", "mat-dialog-close"]], template: function ConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "dib-dialog-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-dialog-actions", 2)(4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "dibUpperFirst");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("closable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.data.template, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx.data.cancel == null ? null : ctx.data.cancel.label) || "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("color", ctx.data.confirm.color || "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 7, ctx.data.confirm.label || "Delete"), " ");
    } }, dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _global_dialog_dialog_title_component__WEBPACK_IMPORTED_MODULE_0__.DialogTitleComponent, _utils_pipes_upperfirst_pipe__WEBPACK_IMPORTED_MODULE_1__.DibUpperFirstPipe], encapsulation: 2 });


/***/ }),

/***/ 21004:
/*!*****************************************!*\
  !*** ./src/app/effects/auth.effects.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthEffects": () => (/* binding */ AuthEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 10538);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 99635);
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/auth.actions */ 60274);
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/global.actions */ 7058);
/* harmony import */ var _actions_users_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/users.actions */ 67421);
/* harmony import */ var _reducers_router_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/router.reducer */ 42401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ 50384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);













class AuthEffects {
    constructor(actions$, store, snackBar, authService, router) {
        this.actions$ = actions$;
        this.store = store;
        this.snackBar = snackBar;
        this.authService = authService;
        this.router = router;
        this.login$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.login), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.store.dispatch(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.loginStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)((data) => this.authService.login(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((user) => {
            return _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.loginSuccess({ data: user });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.loginError({ error: 'Login failed. Please try again.' }));
        })))));
        this.logout$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.logout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.store.dispatch(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.logoutStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(({ message }) => this.authService.logout().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => {
            return _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.logoutSuccess(message);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.logoutError({ error: 'Logout failed. Please try again.' }));
        })))));
        this.forgotPassword$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.forgotPassword), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.store.dispatch(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.forgotPasswordStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(({ email }) => this.authService.forgotPassword(email).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => {
            return _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.forgotPasswordSuccess();
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.forgotPasswordError({ error: 'Request failed. Please try again.' }));
        })))));
        this.changePassword$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.changePassword), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.store.dispatch(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.changePasswordStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(({ id, password }) => this.authService.activateNewPassword(id, password).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => {
            return _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.changePasswordSuccess();
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.changePasswordError({ error: 'Request failed. Please try again.' }));
        })))));
        this.setPassword$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.setPassword), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.store.dispatch(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.setPasswordStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(({ id, password }) => this.authService.setNewPassword(id, password).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => {
            return _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.setPasswordSuccess();
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.setPasswordError({ error: 'Request failed. Please try again.' }));
        })))));
        this.syncLocalStorage$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__.UserActions.saveUserDetailsSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(({ data }) => {
            const loggedInUser = this.authService.getUser();
            // If we have updated currently logged in user
            if (loggedInUser.id === data.id) {
                // We will persist the changes in the local storage
                this.authService.setUser(data, loggedInUser.token);
            }
        })), { dispatch: false });
        this.loginSuccess$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.loginSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.withLatestFrom)(this.store.select((0,_reducers_router_reducer__WEBPACK_IMPORTED_MODULE_3__.selectQueryParam)('redirectTo'))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(([, redirectTo]) => {
            // Show success message and redirect to application
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_1__.GlobalActions.showSuccessMessage({ message: 'Logged in successfully' }));
            this.router.navigateByUrl(redirectTo || '/').then(rxjs__WEBPACK_IMPORTED_MODULE_12__.noop);
        })), { dispatch: false });
        this.logoutSuccess$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.logoutSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(({ message }) => {
            // Show success message and redirect to the login page
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_1__.GlobalActions.showSuccessMessage({ message: message || 'Logged out successfully' }));
            return this.router.navigate(['/auth/login']);
        })), { dispatch: false });
        this.showToast$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.loginError, _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.logoutError, _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.forgotPasswordError, _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.changePasswordError, _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.setPasswordError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(({ error }) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_1__.GlobalActions.showErrorMessage({ message: error }));
        })), { dispatch: false });
    }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) { return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router)); };
AuthEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({ token: AuthEffects, factory: AuthEffects.ɵfac });


/***/ }),

/***/ 16215:
/*!****************************************************!*\
  !*** ./src/app/effects/billing-request.effects.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingRequestEffects": () => (/* binding */ BillingRequestEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/billing-requests.actions */ 64646);
/* harmony import */ var _models_billing_request_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/billing-request.model */ 83970);
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/global.actions */ 7058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _services_billing_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/billing-request.service */ 8067);










class BillingRequestEffects {
    constructor(actions$, store, billingRequestService) {
        this.actions$ = actions$;
        this.store = store;
        this.billingRequestService = billingRequestService;
        this.loadBillingRequests$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_0__.BillingRequestActions.loadRequests), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.store.dispatch(_actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_0__.BillingRequestActions.loadRequestsStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(({ params }) => this.billingRequestService.list(params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((response) => {
            return _actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_0__.BillingRequestActions.loadRequestsSuccess({ data: response.data, pagination: response.pagination });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(_actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_0__.BillingRequestActions.loadRequestsError({
                error: 'Billing requests could not be loaded. Please try again.',
            }));
        })))));
        this.changeBillingRequestStatus$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_0__.BillingRequestActions.changeStatus), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.store.dispatch(_actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_0__.BillingRequestActions.changeStatusStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(({ data }) => this.billingRequestService.update(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => {
            const statusMap = {
                [_models_billing_request_model__WEBPACK_IMPORTED_MODULE_1__.BillingRequestStatus.ENABLED]: 'approved',
                [_models_billing_request_model__WEBPACK_IMPORTED_MODULE_1__.BillingRequestStatus.BLOCKED]: 'blocked',
                [_models_billing_request_model__WEBPACK_IMPORTED_MODULE_1__.BillingRequestStatus.DENIED]: 'denied',
            };
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_2__.GlobalActions.showSuccessMessage({
                message: `Billing request ${statusMap[data.billingProfileRequestStatus]}`,
            }));
            return _actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_0__.BillingRequestActions.changeStatusSuccess({ data });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(_actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_0__.BillingRequestActions.changeStatusError({ error: 'Billing request update failed. Please try again.' }));
        })))));
        this.showToast$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_0__.BillingRequestActions.loadRequestsError, _actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_0__.BillingRequestActions.changeStatusError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((action) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_2__.GlobalActions.showErrorMessage({ message: action.error }));
        })), { dispatch: false });
    }
}
BillingRequestEffects.ɵfac = function BillingRequestEffects_Factory(t) { return new (t || BillingRequestEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_services_billing_request_service__WEBPACK_IMPORTED_MODULE_3__.BillingRequestService)); };
BillingRequestEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: BillingRequestEffects, factory: BillingRequestEffects.ɵfac });


/***/ }),

/***/ 40735:
/*!********************************************!*\
  !*** ./src/app/effects/booking.effects.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingEffects": () => (/* binding */ BookingEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/bookings.actions */ 4797);
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/global.actions */ 7058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _services_booking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/booking.service */ 62169);









class BookingEffects {
    constructor(actions$, store, bookingService) {
        this.actions$ = actions$;
        this.store = store;
        this.bookingService = bookingService;
        this.loadBookings$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadBookings), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadBookingsStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((action) => this.bookingService.list(action.params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            return _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadBookingsSuccess({ data: response.data, pagination: response.pagination });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadBookingsError({ error: 'Bookings could not be loaded. Please try again.' }));
        })))));
        this.loadBooking$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadBooking), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadBookingStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((action) => this.bookingService.getDetails(action.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            return _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadBookingSuccess({ data: response });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadBookingError({ error: 'Booking details could not be loaded. Please try again.' }));
        })))));
        this.loadAndSelectBooking$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadAndSelectBooking), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadAndSelectBookingStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((action) => this.bookingService.getDetails(action.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            return _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadAndSelectBookingSuccess({ data: response });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadAndSelectBookingError({
                error: 'Booking details could not be loaded. Please try again.',
            }));
        })))));
        this.saveBookingDetails$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.saveBookingDetails), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.saveBookingDetailsStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((action) => this.bookingService.update(action.data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_1__.GlobalActions.showSuccessMessage({ message: `Booking details saved.` }));
            return _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.saveBookingDetailsSuccess({ data: response });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.saveBookingDetailsError({ error: 'Booking details could not be saved. Please try again.' }));
        })))));
        this.getReferenceTypes$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadReferenceTypes), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadReferenceTypesStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.bookingService.getReferenceTypes().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            return _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadReferenceTypesSuccess({ data: response });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadReferenceTypesError({
                error: 'Reference types could not be loaded. Please try again.',
            }));
        })))));
        this.showToast$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadBookingsError, _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadBookingError, _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadAndSelectBookingError, _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.saveBookingDetailsError, _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadReferenceTypesError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((action) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_1__.GlobalActions.showErrorMessage({ message: action.error }));
        })), { dispatch: false });
    }
}
BookingEffects.ɵfac = function BookingEffects_Factory(t) { return new (t || BookingEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_booking_service__WEBPACK_IMPORTED_MODULE_2__.BookingService)); };
BookingEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: BookingEffects, factory: BookingEffects.ɵfac });


/***/ }),

/***/ 68974:
/*!*************************************************!*\
  !*** ./src/app/effects/company-user.effects.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyUserEffects": () => (/* binding */ CompanyUserEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/company-users.actions */ 30668);
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/global.actions */ 7058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _services_company_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/company-user.service */ 66224);









class CompanyUserEffects {
    constructor(actions$, store, companyUserService) {
        this.actions$ = actions$;
        this.store = store;
        this.companyUserService = companyUserService;
        this.loadCompanyUsers$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyUserActions.loadCompanyUsers), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyUserActions.loadCompanyUsersStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((action) => this.companyUserService.list(action.params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            return _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyUserActions.loadCompanyUsersSuccess({ data: response.data, pagination: response.pagination });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyUserActions.loadCompanyUsersError({
                error: 'Company users could not be loaded. Please try again.',
            }));
        })))));
        this.loadCompanyUser$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyUserActions.loadCompanyUser), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyUserActions.loadCompanyUserStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((action) => this.companyUserService.getDetails(action.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            return _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyUserActions.loadCompanyUserSuccess({ data: response });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyUserActions.loadCompanyUserError({
                error: 'Company user details could not be loaded. Please try again.',
            }));
        })))));
        this.loadAndSelectCompanyUser$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyUserActions.loadAndSelectCompanyUser), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyUserActions.loadAndSelectCompanyUserStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((action) => this.companyUserService.getDetails(action.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            return _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyUserActions.loadAndSelectCompanyUserSuccess({ data: response });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyUserActions.loadAndSelectCompanyUserError({
                error: 'Company user details could not be loaded. Please try again.',
            }));
        })))));
        this.saveCompanyUserDetails$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyUserActions.saveCompanyUserDetails), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyUserActions.saveCompanyUserDetailsStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((action) => this.companyUserService.saveDetails(action.data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_1__.GlobalActions.showSuccessMessage({ message: `Company user details saved.` }));
            return _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyUserActions.saveCompanyUserDetailsSuccess({ data: response });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyUserActions.saveCompanyUserDetailsError({
                error: 'Company user details could not be saved. Please try again.',
            }));
        })))));
        this.showToast$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyUserActions.loadCompanyUsersError, _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyUserActions.loadCompanyUserError, _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyUserActions.loadAndSelectCompanyUserError, _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyUserActions.saveCompanyUserDetailsError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((action) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_1__.GlobalActions.showErrorMessage({ message: action.error }));
        })), { dispatch: false });
    }
}
CompanyUserEffects.ɵfac = function CompanyUserEffects_Factory(t) { return new (t || CompanyUserEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_company_user_service__WEBPACK_IMPORTED_MODULE_2__.CompanyUserService)); };
CompanyUserEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: CompanyUserEffects, factory: CompanyUserEffects.ɵfac });


/***/ }),

/***/ 56703:
/*!********************************************!*\
  !*** ./src/app/effects/company.effects.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyEffects": () => (/* binding */ CompanyEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/companies.actions */ 29814);
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/global.actions */ 7058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/company.service */ 6196);









class CompanyEffects {
    constructor(actions$, store, companyService) {
        this.actions$ = actions$;
        this.store = store;
        this.companyService = companyService;
        this.loadCompanies$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.loadCompanies), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.loadCompaniesStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((action) => this.companyService.list(action.params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            return _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.loadCompaniesSuccess({ data: response.data, pagination: response.pagination });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.loadCompaniesError({ error: 'Companies could not be loaded. Please try again.' }));
        })))));
        this.loadCompany$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.loadCompany), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.loadCompanyStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((action) => this.companyService.getDetails(action.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            return _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.loadCompanySuccess({ data: response });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.loadCompanyError({ error: 'Company details could not be loaded. Please try again.' }));
        })))));
        this.saveCompanyDetails$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.saveCompanyDetails), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.saveCompanyDetailsStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((action) => this.companyService.saveDetails(action.data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_1__.GlobalActions.showSuccessMessage({ message: `Company details saved.` }));
            return _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.saveCompanyDetailsSuccess({ data: response });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.saveCompanyDetailsError({ error: 'Company details could not be saved. Please try again.' }));
        })))));
        this.deleteCompany$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.deleteCompany), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.deleteCompanyStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((action) => this.companyService.delete(action.data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_1__.GlobalActions.showSuccessMessage({ message: `Company successfully deleted.` }));
            return _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.deleteCompanySuccess({ data: action.data });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.deleteCompanyError({ error: 'Company could not be deleted. Please try again.' }));
        })))));
        this.toggleCompanySubscriptionStatus$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.toggleCompanySubscriptionStatus), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.toggleCompanySubscriptionStatusStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ data }) => this.companyService.toggleSubscriptionStatus(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((company) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_1__.GlobalActions.showSuccessMessage({ message: `Company status successfully changed.` }));
            return _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.toggleCompanySubscriptionStatusSuccess({ data: company });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.toggleCompanySubscriptionStatusError({
                error: 'Company status could not be changed. Please try again.',
            }));
        })))));
        this.showToast$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.loadCompaniesError, _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.loadCompanyError, _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.saveCompanyDetailsError, _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.toggleCompanySubscriptionStatusError, _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.deleteCompanyError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((action) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_1__.GlobalActions.showErrorMessage({ message: action.error }));
        })), { dispatch: false });
    }
}
CompanyEffects.ɵfac = function CompanyEffects_Factory(t) { return new (t || CompanyEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService)); };
CompanyEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: CompanyEffects, factory: CompanyEffects.ɵfac });


/***/ }),

/***/ 98677:
/*!********************************************************!*\
  !*** ./src/app/effects/confirmation-dialog.effects.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationDialogEffects": () => (/* binding */ ConfirmationDialogEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _actions_confirmation_dialog_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/confirmation-dialog.actions */ 65516);
/* harmony import */ var _dialog_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialog/confirmation/confirmation.component */ 55567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);








class ConfirmationDialogEffects {
    constructor(actions$, store, dialog) {
        this.actions$ = actions$;
        this.store = store;
        this.dialog = dialog;
        this.showDialog$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_confirmation_dialog_actions__WEBPACK_IMPORTED_MODULE_0__.ConfirmationDialogActions.show), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((action) => {
            const dialogRef = this.dialog.open(_dialog_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationComponent, {
                maxWidth: 500,
                minWidth: 300,
                data: action.data,
            });
            dialogRef.afterClosed().subscribe((confirmed) => {
                if (confirmed === true && action.ok)
                    action.ok();
                if (confirmed === false && action.cancel)
                    action.cancel();
            });
        })), { dispatch: false });
    }
}
ConfirmationDialogEffects.ɵfac = function ConfirmationDialogEffects_Factory(t) { return new (t || ConfirmationDialogEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
ConfirmationDialogEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ConfirmationDialogEffects, factory: ConfirmationDialogEffects.ɵfac });


/***/ }),

/***/ 53226:
/*!********************************************!*\
  !*** ./src/app/effects/country.effects.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryEffects": () => (/* binding */ CountryEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/global.actions */ 7058);
/* harmony import */ var _actions_countries_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/countries.actions */ 45658);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/country.service */ 13787);









class CountryEffects {
    constructor(actions$, store, countryService) {
        this.actions$ = actions$;
        this.store = store;
        this.countryService = countryService;
        this.loadCountries$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_countries_actions__WEBPACK_IMPORTED_MODULE_1__.CountryActions.loadCountries), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_countries_actions__WEBPACK_IMPORTED_MODULE_1__.CountryActions.loadCountriesStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.countryService.list().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((countries) => {
            return _actions_countries_actions__WEBPACK_IMPORTED_MODULE_1__.CountryActions.loadCountriesSuccess({ data: countries });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_countries_actions__WEBPACK_IMPORTED_MODULE_1__.CountryActions.loadCountriesError({ error: 'Countries could not be loaded. Please try again.' }));
        })))));
        this.showToast$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_countries_actions__WEBPACK_IMPORTED_MODULE_1__.CountryActions.loadCountriesError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(({ error }) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showErrorMessage({ message: error }));
        })), { dispatch: false });
    }
}
CountryEffects.ɵfac = function CountryEffects_Factory(t) { return new (t || CountryEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_country_service__WEBPACK_IMPORTED_MODULE_2__.CountryService)); };
CountryEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: CountryEffects, factory: CountryEffects.ɵfac });


/***/ }),

/***/ 21837:
/*!********************************************!*\
  !*** ./src/app/effects/feature.effects.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureEffects": () => (/* binding */ FeatureEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/global.actions */ 7058);
/* harmony import */ var _actions_features_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/features.actions */ 71176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _services_feature_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/feature.service */ 8059);









class FeatureEffects {
    constructor(actions$, store, featureService) {
        this.actions$ = actions$;
        this.store = store;
        this.featureService = featureService;
        this.loadFeatures$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_features_actions__WEBPACK_IMPORTED_MODULE_1__.FeatureActions.loadFeatures), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_features_actions__WEBPACK_IMPORTED_MODULE_1__.FeatureActions.loadFeaturesStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.featureService.list().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((features) => {
            return _actions_features_actions__WEBPACK_IMPORTED_MODULE_1__.FeatureActions.loadFeaturesSuccess({ data: features });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_features_actions__WEBPACK_IMPORTED_MODULE_1__.FeatureActions.loadFeaturesError({ error: 'Features could not be loaded. Please try again.' }));
        })))));
        this.toggleFeatureStatus$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_features_actions__WEBPACK_IMPORTED_MODULE_1__.FeatureActions.toggleFeatureStatus), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_features_actions__WEBPACK_IMPORTED_MODULE_1__.FeatureActions.toggleFeatureStatusStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ data }) => this.featureService.toggleStatus(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((feature) => {
            const status = feature.enabled ? 'enabled' : 'disabled';
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showSuccessMessage({ message: `Feature successfully ${status}.` }));
            return _actions_features_actions__WEBPACK_IMPORTED_MODULE_1__.FeatureActions.toggleFeatureStatusSuccess({ data: feature });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_features_actions__WEBPACK_IMPORTED_MODULE_1__.FeatureActions.toggleFeatureStatusError({
                error: 'Feature status could not be changed. Please try again.',
            }));
        })))));
        this.showToast$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_features_actions__WEBPACK_IMPORTED_MODULE_1__.FeatureActions.loadFeaturesError, _actions_features_actions__WEBPACK_IMPORTED_MODULE_1__.FeatureActions.toggleFeatureStatusError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(({ error }) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showErrorMessage({ message: error }));
        })), { dispatch: false });
    }
}
FeatureEffects.ɵfac = function FeatureEffects_Factory(t) { return new (t || FeatureEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_feature_service__WEBPACK_IMPORTED_MODULE_2__.FeatureService)); };
FeatureEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: FeatureEffects, factory: FeatureEffects.ɵfac });


/***/ }),

/***/ 1661:
/*!*******************************************!*\
  !*** ./src/app/effects/global.effects.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalEffects": () => (/* binding */ GlobalEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/global.actions */ 7058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);






class GlobalEffects {
    constructor(actions$, snackBar) {
        this.actions$ = actions$;
        this.snackBar = snackBar;
        this.showSuccessToast$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showSuccessMessage), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((action) => {
            // If no action button label is sent we default to null, which means there will be no button
            const buttonLabel = action.action === undefined ? null : action.action;
            // Default is 4000ms
            const duration = action.duration === undefined ? 4000 : action.duration;
            return this.snackBar.open(action.message, buttonLabel, {
                duration,
                panelClass: ['snackbar-success'],
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
            });
        })), { dispatch: false });
        this.showErrorToast$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showErrorMessage), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((action) => {
            // If no action button label is sent we default to OK, but user can still send null to remove action button
            const buttonLabel = action.action === undefined ? 'OK' : action.action;
            // Default is 10000ms
            const duration = action.duration === undefined ? 10000 : action.duration;
            return this.snackBar.open(action.message, buttonLabel, {
                duration,
                panelClass: ['snackbar-error'],
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
            });
        })), { dispatch: false });
    }
}
GlobalEffects.ɵfac = function GlobalEffects_Factory(t) { return new (t || GlobalEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar)); };
GlobalEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: GlobalEffects, factory: GlobalEffects.ɵfac });


/***/ }),

/***/ 76435:
/*!********************************************!*\
  !*** ./src/app/effects/product.effects.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductEffects": () => (/* binding */ ProductEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/global.actions */ 7058);
/* harmony import */ var _actions_products_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/products.actions */ 56049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ 66082);









class ProductEffects {
    constructor(actions$, store, productService) {
        this.actions$ = actions$;
        this.store = store;
        this.productService = productService;
        this.loadProducts$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.loadProducts), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.loadProductsStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ params }) => this.productService.list(params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            return _actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.loadProductsSuccess({ data: response.data, pagination: response.pagination });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.loadProductsError({ error: 'Products could not be loaded. Please try again.' }));
        })))));
        this.saveProductDetails$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.saveProductDetails), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.saveProductDetailsStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ data }) => this.productService.saveDetails(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((product) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showSuccessMessage({ message: `Product details saved.` }));
            return _actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.saveProductDetailsSuccess({ data: product });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.saveProductDetailsError({ error: 'Product details could not be saved. Please try again.' }));
        })))));
        this.toggleProductStatus$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.toggleProductStatus), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.toggleProductStatusStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ data }) => this.productService.toggleStatus(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((product) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showSuccessMessage({ message: `Product status successfully changed.` }));
            return _actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.toggleProductStatusSuccess({ data: product });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.toggleProductStatusError({
                error: 'Product status could not be changed. Please try again.',
            }));
        })))));
        this.showToast$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.loadProductsError, _actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.saveProductDetailsError, _actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.toggleProductStatusError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((action) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showErrorMessage({ message: action.error }));
        })), { dispatch: false });
    }
}
ProductEffects.ɵfac = function ProductEffects_Factory(t) { return new (t || ProductEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService)); };
ProductEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: ProductEffects, factory: ProductEffects.ɵfac });


/***/ }),

/***/ 66858:
/*!***************************************************!*\
  !*** ./src/app/effects/system-message.effects.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemMessageEffects": () => (/* binding */ SystemMessageEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/global.actions */ 7058);
/* harmony import */ var _actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/system-messages.actions */ 26873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _services_system_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/system-message.service */ 57533);









class SystemMessageEffects {
    constructor(actions$, store, systemMessageService) {
        this.actions$ = actions$;
        this.store = store;
        this.systemMessageService = systemMessageService;
        this.loadSystemMessages$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_1__.SystemMessageActions.loadSystemMessages), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_1__.SystemMessageActions.loadSystemMessagesStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ params }) => this.systemMessageService.list(params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            return _actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_1__.SystemMessageActions.loadSystemMessagesSuccess({
                data: response.data,
                pagination: response.pagination,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_1__.SystemMessageActions.loadSystemMessagesError({
                error: 'System messages could not be loaded. Please try again.',
            }));
        })))));
        this.loadSystemMessage$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_1__.SystemMessageActions.loadSystemMessage), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_1__.SystemMessageActions.loadSystemMessageStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ id }) => this.systemMessageService.getDetails(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((message) => {
            return _actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_1__.SystemMessageActions.loadSystemMessageSuccess({ data: message });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_1__.SystemMessageActions.loadSystemMessageError({
                error: 'System message details could not be loaded. Please try again.',
            }));
        })))));
        this.saveSystemMessage$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_1__.SystemMessageActions.saveSystemMessage), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_1__.SystemMessageActions.saveSystemMessageStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ data }) => this.systemMessageService.saveDetails(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((message) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showSuccessMessage({ message: `System message details saved.` }));
            return _actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_1__.SystemMessageActions.saveSystemMessageSuccess({ data: message });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_1__.SystemMessageActions.saveSystemMessageError({
                error: 'System message details could not be saved. Please try again.',
            }));
        })))));
        this.deleteSystemMessage$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_1__.SystemMessageActions.deleteSystemMessage), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_1__.SystemMessageActions.deleteSystemMessageStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ data }) => this.systemMessageService.delete(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showSuccessMessage({ message: `System message successfully deleted.` }));
            return _actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_1__.SystemMessageActions.deleteSystemMessageSuccess({ data });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_1__.SystemMessageActions.deleteSystemMessageError({
                error: 'System message could not be deleted. Please try again.',
            }));
        })))));
        this.showToast$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_1__.SystemMessageActions.loadSystemMessagesError, _actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_1__.SystemMessageActions.loadSystemMessageError, _actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_1__.SystemMessageActions.saveSystemMessageError, _actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_1__.SystemMessageActions.deleteSystemMessageError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(({ error }) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showErrorMessage({ message: error }));
        })), { dispatch: false });
    }
}
SystemMessageEffects.ɵfac = function SystemMessageEffects_Factory(t) { return new (t || SystemMessageEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_system_message_service__WEBPACK_IMPORTED_MODULE_2__.SystemMessageService)); };
SystemMessageEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: SystemMessageEffects, factory: SystemMessageEffects.ɵfac });


/***/ }),

/***/ 31799:
/*!*******************************************!*\
  !*** ./src/app/effects/tenant.effects.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TenantEffects": () => (/* binding */ TenantEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _actions_tenant_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/tenant.actions */ 23138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _services_tenant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/tenant.service */ 62255);








class TenantEffects {
    constructor(actions$, store, tenantService) {
        this.actions$ = actions$;
        this.store = store;
        this.tenantService = tenantService;
        this.loadPrimaryTenants$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_tenant_actions__WEBPACK_IMPORTED_MODULE_0__.TenantActions.loadPrimaryTenants), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this.store.dispatch(_actions_tenant_actions__WEBPACK_IMPORTED_MODULE_0__.TenantActions.loadPrimaryTenantsStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => this.tenantService.getPrimaryTenants().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((tenants) => {
            return _actions_tenant_actions__WEBPACK_IMPORTED_MODULE_0__.TenantActions.loadPrimaryTenantsSuccess({ data: tenants });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_actions_tenant_actions__WEBPACK_IMPORTED_MODULE_0__.TenantActions.loadPrimaryTenantsError({
                error: 'Tenants list could not be loaded. Refresh the page to try again.',
            }));
        })))));
    }
}
TenantEffects.ɵfac = function TenantEffects_Factory(t) { return new (t || TenantEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_tenant_service__WEBPACK_IMPORTED_MODULE_1__.TenantService)); };
TenantEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: TenantEffects, factory: TenantEffects.ɵfac });


/***/ }),

/***/ 49002:
/*!*****************************************!*\
  !*** ./src/app/effects/user.effects.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEffects": () => (/* binding */ UserEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 10538);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/global.actions */ 7058);
/* harmony import */ var _actions_confirmation_dialog_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/confirmation-dialog.actions */ 65516);
/* harmony import */ var _config_tmc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/tmc */ 77434);
/* harmony import */ var _actions_users_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/users.actions */ 67421);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ 73071);











class UserEffects {
    constructor(actions$, store, userService) {
        this.actions$ = actions$;
        this.store = store;
        this.userService = userService;
        this.loadUsers$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.loadUsers), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.store.dispatch(_actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.loadUsersStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(({ params }) => this.userService.list(params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((response) => {
            return _actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.loadUsersSuccess({ data: response.data, pagination: response.pagination });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(_actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.loadUsersError({ error: 'Users could not be loaded. Please try again.' }));
        })))));
        this.loadUser$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.loadUser), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.store.dispatch(_actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.loadUserStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(({ id }) => this.userService.getById(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((user) => {
            return _actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.loadUserSuccess({ data: user });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(_actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.loadUserError({ error: 'User could not be loaded. Please try again.' }));
        })))));
        this.saveUserDetails$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.saveUserDetails), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.store.dispatch(_actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.saveUserDetailsStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(({ data }) => this.userService.saveDetails(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((user) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showSuccessMessage({ message: `User details saved.` }));
            return _actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.saveUserDetailsSuccess({ data: user });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(_actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.saveUserDetailsError({ error: 'User details could not be saved. Please try again.' }));
        })))));
        this.changeUserPassword$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.changeUserPassword), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.store.dispatch(_actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.changeUserPasswordStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(({ data }) => this.userService.changeUserPassword(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((user) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showSuccessMessage({ message: `Password successfully changed.` }));
            return _actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.changeUserPasswordSuccess({ data: user });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(_actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.changeUserPasswordError({ error: 'Could not change User password. Please try again.' }));
        })))));
        this.getOverrideToken$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.getOverrideToken), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.store.dispatch(_actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.getOverrideTokenStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(({ username, redirectPath }) => this.userService.getOverrideToken(username).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(({ token }) => {
            return _actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.getOverrideTokenSuccess({ token, username, redirectPath });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(_actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.getOverrideTokenError({ error: 'Could not get override token. Please try again.' }));
        })))));
        this.showToast$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.loadUsersError, _actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.saveUserDetailsError, _actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.changeUserPasswordError, _actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.getOverrideTokenError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)((action) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showErrorMessage({ message: action.error }));
        })), { dispatch: false });
        this.agentOverride$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.getOverrideTokenSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.withLatestFrom)(this.store.select(_config_tmc__WEBPACK_IMPORTED_MODULE_2__.tmc)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(([{ token, username, redirectPath }, tmc]) => {
            this.store.dispatch(_actions_confirmation_dialog_actions__WEBPACK_IMPORTED_MODULE_1__.ConfirmationDialogActions.show({
                data: {
                    template: `
                Are you sure you want to navigate to Travel Portal?
                <br><br>
                New browser tab will open and you will be automatically logged in as
                <strong>${username}</strong>.
                Your current session with will stay intact.
              `,
                    confirm: {
                        label: `Go to Travel Portal`,
                        color: 'primary',
                    },
                },
                ok: () => {
                    const params = [`accessToken=${token}`];
                    // Add redirect param before access token so that generated URL is easier to read
                    if (redirectPath)
                        params.unshift(`redirectTo=${redirectPath}`);
                    // Open new session in new browser tab, so we can preserve current session
                    window.open(`https://${tmc.platformLink}/jwt-login-redirection?${params.join('&')}`, '_blank');
                },
            }));
        })), { dispatch: false });
    }
}
UserEffects.ɵfac = function UserEffects_Factory(t) { return new (t || UserEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService)); };
UserEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({ token: UserEffects, factory: UserEffects.ɵfac });


/***/ }),

/***/ 53138:
/*!*************************************************!*\
  !*** ./src/app/effects/vat-category.effects.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VatCategoryEffects": () => (/* binding */ VatCategoryEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/global.actions */ 7058);
/* harmony import */ var _actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/vat-categories.actions */ 54871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _services_vat_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/vat-category.service */ 58476);









class VatCategoryEffects {
    constructor(actions$, store, vatCategoryService) {
        this.actions$ = actions$;
        this.store = store;
        this.vatCategoryService = vatCategoryService;
        this.loadVatCategories$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.loadVatCategories), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.loadVatCategoriesStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ params }) => this.vatCategoryService.list(params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            return _actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.loadVatCategoriesSuccess({
                data: response.data,
                pagination: response.pagination,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.loadVatCategoriesError({
                error: 'Vat categories could not be loaded. Please try again.',
            }));
        })))));
        this.toggleVatCategoryStatus$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.toggleVatCategoryStatus), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.toggleVatCategoryStatusStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ data }) => this.vatCategoryService.toggleStatus(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((vatCategory) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showSuccessMessage({ message: `Vat category status successfully changed.` }));
            return _actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.toggleVatCategoryStatusSuccess({ data: vatCategory });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.toggleVatCategoryStatusError({
                error: 'Vat category status could not be changed. Please try again.',
            }));
        })))));
        this.saveVatCategoryDetails$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.saveVatCategoryDetails), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.saveVatCategoryDetailsStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ data }) => this.vatCategoryService.saveDetails(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((vatCategory) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showSuccessMessage({ message: `Vat category details saved.` }));
            return _actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.saveVatCategoryDetailsSuccess({ data: vatCategory });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.saveVatCategoryDetailsError({
                error: 'Vat category details could not be saved. Please try again.',
            }));
        })))));
        this.showToast$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.loadVatCategoriesError, _actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.toggleVatCategoryStatusError, _actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.saveVatCategoryDetailsError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((action) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showErrorMessage({ message: action.error }));
        })), { dispatch: false });
    }
}
VatCategoryEffects.ɵfac = function VatCategoryEffects_Factory(t) { return new (t || VatCategoryEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_vat_category_service__WEBPACK_IMPORTED_MODULE_2__.VatCategoryService)); };
VatCategoryEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: VatCategoryEffects, factory: VatCategoryEffects.ɵfac });


/***/ }),

/***/ 14173:
/*!************************************************************!*\
  !*** ./src/app/effects/vendor-payment-provider.effects.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorsPaymentProviderEffects": () => (/* binding */ VendorsPaymentProviderEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/global.actions */ 7058);
/* harmony import */ var _actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/vendors-payment-providers.actions */ 43850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _services_vendors_payment_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/vendors-payment-provider.service */ 74313);









class VendorsPaymentProviderEffects {
    constructor(actions$, store, vendorPaymentProviderService) {
        this.actions$ = actions$;
        this.store = store;
        this.vendorPaymentProviderService = vendorPaymentProviderService;
        this.loadVendorsPaymentProviders$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.loadVendorsPaymentProviders), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.loadVendorsPaymentProvidersStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ params }) => this.vendorPaymentProviderService.list(params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            return _actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.loadVendorsPaymentProvidersSuccess({
                data: response.data,
                pagination: response.pagination,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.loadVendorsPaymentProvidersError({
                error: 'Vendors payment providers could not be loaded. Please try again.',
            }));
        })))));
        this.saveVendorsPaymentProviderDetails$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.saveVendorsPaymentProviderDetails), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.saveVendorsPaymentProviderDetailsStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ data }) => this.vendorPaymentProviderService.saveDetails(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((item) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showSuccessMessage({ message: `Vendors payment provider details saved.` }));
            return _actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.saveVendorsPaymentProviderDetailsSuccess({ data: item });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.saveVendorsPaymentProviderDetailsError({
                error: 'Vendors payment provider details could not be saved. Please try again.',
            }));
        })))));
        this.toggleVendorsPaymentProviderStatus$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.toggleVendorsPaymentProviderStatus), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.toggleVendorsPaymentProviderStatusStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ data }) => this.vendorPaymentProviderService.toggleStatus(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((product) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showSuccessMessage({ message: `Vendors payment provider status successfully changed.` }));
            return _actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.toggleVendorsPaymentProviderStatusSuccess({ data: product });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.toggleVendorsPaymentProviderStatusError({
                error: 'Vendors payment provider status could not be changed. Please try again.',
            }));
        })))));
        this.showToast$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.loadVendorsPaymentProvidersError, _actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.saveVendorsPaymentProviderDetailsError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((action) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showErrorMessage({ message: action.error }));
        })), { dispatch: false });
    }
}
VendorsPaymentProviderEffects.ɵfac = function VendorsPaymentProviderEffects_Factory(t) { return new (t || VendorsPaymentProviderEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_vendors_payment_provider_service__WEBPACK_IMPORTED_MODULE_2__.VendorsPaymentProviderService)); };
VendorsPaymentProviderEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: VendorsPaymentProviderEffects, factory: VendorsPaymentProviderEffects.ɵfac });


/***/ }),

/***/ 49272:
/*!*******************************************!*\
  !*** ./src/app/effects/vendor.effects.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorEffects": () => (/* binding */ VendorEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/global.actions */ 7058);
/* harmony import */ var _actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/vendors.actions */ 98233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _services_vendor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/vendor.service */ 28422);









class VendorEffects {
    constructor(actions$, store, vendorService) {
        this.actions$ = actions$;
        this.store = store;
        this.vendorService = vendorService;
        this.loadVendors$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.loadVendors), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.loadVendorsStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ params }) => this.vendorService.list(params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            return _actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.loadVendorsSuccess({ data: response.data, pagination: response.pagination });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.loadVendorsError({ error: 'Vendors could not be loaded. Please try again.' }));
        })))));
        this.saveVendorDetails$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.saveVendorDetails), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.saveVendorDetailsStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ data }) => this.vendorService.saveDetails(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((vendor) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showSuccessMessage({ message: `Vendor details saved.` }));
            return _actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.saveVendorDetailsSuccess({ data: vendor });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.saveVendorDetailsError({ error: 'Vendor details could not be saved. Please try again.' }));
        })))));
        this.deleteVendor$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.deleteVendor), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.deleteVendorStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ data }) => this.vendorService.delete(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showSuccessMessage({ message: `Vendor successfully deleted.` }));
            return _actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.deleteVendorSuccess({ data });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.deleteVendorError({ error: 'Vendor could not be deleted. Please try again.' }));
        })))));
        this.toggleVendorStatus$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.toggleVendorStatus), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.toggleVendorStatusStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ data }) => this.vendorService.toggleStatus(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((product) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showSuccessMessage({ message: `Vendor status successfully changed.` }));
            return _actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.toggleVendorStatusSuccess({ data: product });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.toggleVendorStatusError({ error: 'Vendor status could not be changed. Please try again.' }));
        })))));
        this.showToast$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.loadVendorsError, _actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.saveVendorDetailsError, _actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.deleteVendorError, _actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.toggleVendorStatusError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(({ error }) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showErrorMessage({ message: error }));
        })), { dispatch: false });
    }
}
VendorEffects.ɵfac = function VendorEffects_Factory(t) { return new (t || VendorEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_vendor_service__WEBPACK_IMPORTED_MODULE_2__.VendorService)); };
VendorEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: VendorEffects, factory: VendorEffects.ɵfac });


/***/ }),

/***/ 62718:
/*!***********************************************************************!*\
  !*** ./src/app/global/breadcrumbs/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _dot_loader_dot_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dot-loader/dot-loader.component */ 43339);




function BreadcrumbComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "dib-dot-loader", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BreadcrumbComponent_ng_template_2_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("title", ctx_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.label, " ");
} }
function BreadcrumbComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r5.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("title", ctx_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.label, " ");
} }
function BreadcrumbComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BreadcrumbComponent_ng_template_2_span_0_Template, 2, 2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BreadcrumbComponent_ng_template_2_ng_template_1_Template, 2, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.route)("ngIfElse", _r4);
} }
class BreadcrumbComponent {
    constructor() {
        this.route = null;
        this.title = null;
        this.loading = false;
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); };
BreadcrumbComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["dib-breadcrumb"]], inputs: { label: "label", route: "route", title: "title", loading: "loading" }, decls: 4, vars: 2, consts: [[1, "px-1"], ["class", "m-0 flex p-0 text-current xs:text-xs", 4, "ngIf", "ngIfElse"], ["showBreadcrumb", ""], [1, "m-0", "flex", "p-0", "text-current", "xs:text-xs"], ["size", "small", "color", "current"], ["breadcrumbWithLink", ""], [1, "m-0", "flex", "p-0", "text-current", "no-underline", "hover:text-emerald-600", "xs:text-xs", 3, "routerLink"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BreadcrumbComponent_span_1_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BreadcrumbComponent_ng_template_2_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _dot_loader_dot_loader_component__WEBPACK_IMPORTED_MODULE_0__.DotLoaderComponent], styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  line-height: 24px;\n  font-weight: 300;\n  font-size: 14px;\n  margin: 0;\n}\n[_nghost-%COMP%]:not(:last-child)    > div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]::after {\n  padding-left: 8px;\n  font-size: 20px;\n  font-family: \"Material Icons\", sans-serif;\n  content: \"\\e315\";\n}\n@media (max-width: 599.99px) {\n  [_nghost-%COMP%]:not(:last-child)    > div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]::after {\n    font-size: 0.75rem;\n    line-height: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFETjtBQU9NO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtBQUpSO0FBTVE7RUFBQTtJQUFBLGtCQUFBO0lBQUE7RUFBQTtBQUFBIiwiZmlsZSI6ImJyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gID4gZGl2IHtcbiAgICA+ICoge1xuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgPiBkaXYge1xuICAgICAgPiAqOjphZnRlciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb250ZW50OiAnXFxlMzE1JztcblxuICAgICAgICBAYXBwbHkgeHM6dGV4dC14cztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 25758:
/*!*************************************************************!*\
  !*** ./src/app/global/breadcrumbs/breadcrumbs.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbsComponent": () => (/* binding */ BreadcrumbsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

const _c0 = ["*"];
class BreadcrumbsComponent {
}
BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(); };
BreadcrumbsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbsComponent, selectors: [["dib-breadcrumbs"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "sticky", "top-0", "z-20", "flex", "flex-wrap", "items-center", "justify-start", "border-b", "bg-white", "px-5"]], template: function BreadcrumbsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-height: var(--dib-breadcrumbs-height);\n  max-height: var(--dib-breadcrumbs-height);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyZWFkY3J1bWJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UseUNBQUE7RUFDQSx5Q0FBQTtBQUFKIiwiZmlsZSI6ImJyZWFkY3J1bWJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICA+IGRpdiB7XG4gICAgbWluLWhlaWdodDogdmFyKC0tZGliLWJyZWFkY3J1bWJzLWhlaWdodCk7XG4gICAgbWF4LWhlaWdodDogdmFyKC0tZGliLWJyZWFkY3J1bWJzLWhlaWdodCk7XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 2367:
/*!**********************************************************!*\
  !*** ./src/app/global/breadcrumbs/breadcrumbs.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbsModule": () => (/* binding */ BreadcrumbsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumbs.component */ 25758);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ 62718);
/* harmony import */ var _dot_loader_dot_loader_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dot-loader/dot-loader.module */ 67995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






class BreadcrumbsModule {
}
BreadcrumbsModule.ɵfac = function BreadcrumbsModule_Factory(t) { return new (t || BreadcrumbsModule)(); };
BreadcrumbsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: BreadcrumbsModule });
BreadcrumbsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _dot_loader_dot_loader_module__WEBPACK_IMPORTED_MODULE_2__.DotLoaderModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BreadcrumbsModule, { declarations: [_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsComponent, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _dot_loader_dot_loader_module__WEBPACK_IMPORTED_MODULE_2__.DotLoaderModule], exports: [_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsComponent, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent] }); })();


/***/ }),

/***/ 37511:
/*!*********************************************************!*\
  !*** ./src/app/global/dialog/dialog-title.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogTitleComponent": () => (/* binding */ DialogTitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);




function DialogTitleComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
} }
const _c0 = ["*"];
class DialogTitleComponent {
    constructor() {
        this.closable = true;
    }
}
DialogTitleComponent.ɵfac = function DialogTitleComponent_Factory(t) { return new (t || DialogTitleComponent)(); };
DialogTitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogTitleComponent, selectors: [["dib-dialog-title"]], inputs: { closable: "closable" }, ngContentSelectors: _c0, decls: 3, vars: 1, consts: [["mat-dialog-title", "", 1, "flex", "items-center", "justify-between"], ["class", "material-icons cursor-pointer text-gray-500 hover:text-dib-green-600", "matTooltip", "Close dialog", "matTooltipPosition", "left", 3, "mat-dialog-close", 4, "ngIf"], ["matTooltip", "Close dialog", "matTooltipPosition", "left", 1, "material-icons", "cursor-pointer", "text-gray-500", "hover:text-dib-green-600", 3, "mat-dialog-close"]], template: function DialogTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DialogTitleComponent_i_2_Template, 2, 1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.closable);
    } }, dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 13547:
/*!************************************************!*\
  !*** ./src/app/global/dialog/dialog.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogModule": () => (/* binding */ DialogModule)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _dialog_title_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog-title.component */ 37511);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);





class DialogModule {
}
DialogModule.ɵfac = function DialogModule_Factory(t) { return new (t || DialogModule)(); };
DialogModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DialogModule });
DialogModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__.MatTooltipModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DialogModule, { declarations: [_dialog_title_component__WEBPACK_IMPORTED_MODULE_0__.DialogTitleComponent], imports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__.MatTooltipModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], exports: [_dialog_title_component__WEBPACK_IMPORTED_MODULE_0__.DialogTitleComponent] }); })();


/***/ }),

/***/ 43339:
/*!***********************************************************!*\
  !*** ./src/app/global/dot-loader/dot-loader.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DotLoaderComponent": () => (/* binding */ DotLoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class DotLoaderComponent {
    constructor() {
        this.size = 'default';
        this.color = 'green';
    }
}
DotLoaderComponent.ɵfac = function DotLoaderComponent_Factory(t) { return new (t || DotLoaderComponent)(); };
DotLoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DotLoaderComponent, selectors: [["dib-dot-loader"]], inputs: { size: "size", color: "color" }, decls: 4, vars: 0, consts: [[1, "spinner"], [1, "bounce1"], [1, "bounce2"], [1, "bounce3"]], template: function DotLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n[size~=small][_nghost-%COMP%]   .spinner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 0.5rem;\n  width: 0.5rem;\n}\n[color~=gray][_nghost-%COMP%]   .spinner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n}\n[color~=current][_nghost-%COMP%]   .spinner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: currentColor;\n}\n[_nghost-%COMP%]   .spinner[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.125rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.125rem * calc(1 - var(--tw-space-x-reverse)));\n}\n[_nghost-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   .spinner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  display: inline-block;\n  height: 0.75rem;\n  width: 0.75rem;\n  border-radius: 9999px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(5 150 105 / var(--tw-bg-opacity));\n}\n@media (max-width: 599.99px) {\n  [_nghost-%COMP%]   .spinner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    height: 0.5rem;\n    width: 0.5rem;\n  }\n}\n[_nghost-%COMP%]   .spinner[_ngcontent-%COMP%]   .bounce1[_ngcontent-%COMP%] {\n  animation-delay: -0.32s;\n}\n[_nghost-%COMP%]   .spinner[_ngcontent-%COMP%]   .bounce2[_ngcontent-%COMP%] {\n  animation-delay: -0.16s;\n}\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvdC1sb2FkZXIuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLG9CQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBO0FBSUk7RUFBQSxjQUFBO0VBQUE7QUFBQTtBQU1BO0VBQUEsa0JBQUE7RUFBQTtBQUFBO0FBTUE7RUFBQTtBQUFBO0FBS0Y7RUFBQSx1QkFBQTtFQUFBLHdEQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUdGO0VBQ0Usd0RBQUE7RUFFQSxxQkFBQTtFQUFBLGVBQUE7RUFBQSxjQUFBO0VBQUEscUJBQUE7RUFBQSxrQkFBQTtFQUFBLHVEQUFBO0FBVko7QUFZSTtFQUNFO0lBQUEsY0FBQTtJQUFBO0VBQUE7QUFSTjtBQVlFO0VBQ0UsdUJBQUE7QUFWSjtBQWFFO0VBQ0UsdUJBQUE7QUFYSjtBQWVBO0VBQ0U7SUFHRSxtQkFBQTtFQWRGO0VBaUJBO0lBQ0UsbUJBQUE7RUFmRjtFQW9CQTtJQUdFLG1CQUFBO0VBbEJGO0VBcUJBO0lBQ0UsbUJBQUE7RUFuQkY7QUFQRiIsImZpbGUiOiJkb3QtbG9hZGVyLnN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIEBhcHBseSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXI7XG5cbiAgJltzaXplfj0nc21hbGwnXSB7XG4gICAgLnNwaW5uZXIgPiBkaXYge1xuICAgICAgQGFwcGx5IGgtMiB3LTI7XG4gICAgfVxuICB9XG5cbiAgJltjb2xvcn49J2dyYXknXSB7XG4gICAgLnNwaW5uZXIgPiBkaXYge1xuICAgICAgQGFwcGx5IGJnLWdyYXktNjAwO1xuICAgIH1cbiAgfVxuXG4gICZbY29sb3J+PSdjdXJyZW50J10ge1xuICAgIC5zcGlubmVyID4gZGl2IHtcbiAgICAgIEBhcHBseSBiZy1jdXJyZW50O1xuICAgIH1cbiAgfVxuXG4gIC5zcGlubmVyIHtcbiAgICBAYXBwbHkgc3BhY2UteC0wLjUgdGV4dC1jZW50ZXI7XG4gIH1cblxuICAuc3Bpbm5lciA+IGRpdiB7XG4gICAgYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG5cbiAgICBAYXBwbHkgaW5saW5lLWJsb2NrIGgtMyB3LTMgcm91bmRlZC1mdWxsIGJnLWVtZXJhbGQtNjAwO1xuXG4gICAgQHNjcmVlbiB4cyB7XG4gICAgICBAYXBwbHkgaC0yIHctMjtcbiAgICB9XG4gIH1cblxuICAuc3Bpbm5lciAuYm91bmNlMSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG4gIH1cblxuICAuc3Bpbm5lciAuYm91bmNlMiB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XG4gIDAlLFxuICA4MCUsXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cblxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XG4gIDAlLFxuICA4MCUsXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cblxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 67995:
/*!********************************************************!*\
  !*** ./src/app/global/dot-loader/dot-loader.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DotLoaderModule": () => (/* binding */ DotLoaderModule)
/* harmony export */ });
/* harmony import */ var _dot_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dot-loader.component */ 43339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class DotLoaderModule {
}
DotLoaderModule.ɵfac = function DotLoaderModule_Factory(t) { return new (t || DotLoaderModule)(); };
DotLoaderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DotLoaderModule });
DotLoaderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DotLoaderModule, { declarations: [_dot_loader_component__WEBPACK_IMPORTED_MODULE_0__.DotLoaderComponent], exports: [_dot_loader_component__WEBPACK_IMPORTED_MODULE_0__.DotLoaderComponent] }); })();


/***/ }),

/***/ 91744:
/*!*********************************************************!*\
  !*** ./src/app/global/interfaces/response.interface.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFullApiResponse": () => (/* binding */ createFullApiResponse),
/* harmony export */   "createSuccessResponse": () => (/* binding */ createSuccessResponse)
/* harmony export */ });
const createSuccessResponse = { errors: [], valid: true };
function createFullApiResponse(content, page = 1, pageSize = 10, total = 10) {
    return {
        content,
        currentPage: page,
        pageSize,
        totalItems: total,
        totalPages: Math.ceil(total || 10 / content.length),
    };
}


/***/ }),

/***/ 59130:
/*!********************************************************!*\
  !*** ./src/app/global/layout/base-layout.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseLayoutComponent": () => (/* binding */ BaseLayoutComponent)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base.component */ 83607);
/* harmony import */ var _reducers_layout_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reducers/layout.reducer */ 92984);
/* harmony import */ var _actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/layout.actions */ 82250);
/* harmony import */ var _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducers/auth.reducer */ 30239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 23488);






class BaseLayoutComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(store) {
        super();
        this.store = store;
        this.sidenavIsVisible$ = this.store.select(_reducers_layout_reducer__WEBPACK_IMPORTED_MODULE_1__.sidenavIsVisible);
        this.isLoggedIn$ = this.store.select(_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__.isLoggedIn);
        this.loggedInUser$ = this.store.select(_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__.loggedInUser);
    }
    open() {
        this.store.dispatch(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__.LayoutActions.toggleSidenav({ visible: true }));
    }
    close() {
        this.store.dispatch(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__.LayoutActions.toggleSidenav({ visible: false }));
    }
}
BaseLayoutComponent.ɵfac = function BaseLayoutComponent_Factory(t) { return new (t || BaseLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)); };
BaseLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BaseLayoutComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function BaseLayoutComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 26793:
/*!**********************************************************!*\
  !*** ./src/app/global/layout/header/header.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 80155);
/* harmony import */ var _base_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-layout.component */ 59130);
/* harmony import */ var _users_user_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../users/user-form.component */ 33056);
/* harmony import */ var _actions_users_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/users.actions */ 67421);
/* harmony import */ var _users_user_password_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../users/user-password-form.component */ 68282);
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/auth.actions */ 60274);
/* harmony import */ var _actions_confirmation_dialog_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions/confirmation-dialog.actions */ 65516);
/* harmony import */ var _config_tmc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/tmc */ 77434);
/* harmony import */ var _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../reducers/auth.reducer */ 30239);
/* harmony import */ var _actions_tenant_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../actions/tenant.actions */ 23138);
/* harmony import */ var _reducers_tenants_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../reducers/tenants.reducer */ 40778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ 88589);



















function HeaderComponent_mat_toolbar_0_button_6_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HeaderComponent_mat_toolbar_0_button_6_button_7_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const tenant_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r8.changeTenant(tenant_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tenant_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](tenant_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", tenant_r7.logoInverted, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"])("alt", tenant_r7.name);
  }
}
function HeaderComponent_mat_toolbar_0_button_6_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 32)(1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "error_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const error_r10 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](error_r10);
  }
}
function HeaderComponent_mat_toolbar_0_button_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "mat-menu", 9, 25)(6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, HeaderComponent_mat_toolbar_0_button_6_button_7_Template, 5, 3, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, HeaderComponent_mat_toolbar_0_button_6_div_9_Template, 5, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matMenuTriggerFor", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r2.tmc.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 4, ctx_r2.tenants$).data);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 6, ctx_r2.tenants$).error);
  }
}
function HeaderComponent_mat_toolbar_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-toolbar", 1)(1, "div", 2)(2, "a", 3)(3, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, HeaderComponent_mat_toolbar_0_button_6_Template, 11, 8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "button", 7)(9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "mat-menu", 9, 10)(14, "div", 11)(15, "div", 12)(16, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 14)(19, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 17)(24, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HeaderComponent_mat_toolbar_0_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r11.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HeaderComponent_mat_toolbar_0_Template_button_click_26_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12);
      const user_r1 = restoredCtx.ngIf;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r13.changeUserPassword(user_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "Change password");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HeaderComponent_mat_toolbar_0_Template_button_click_29_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12);
      const user_r1 = restoredCtx.ngIf;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r14.edit(user_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Edit profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HeaderComponent_mat_toolbar_0_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r15.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const user_r1 = ctx.ngIf;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](13);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 8, ctx_r0.loggedInUser$).isSuperAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matMenuTriggerFor", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", user_r1.fullName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", user_r1.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](user_r1.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", user_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](user_r1.username);
  }
}
class HeaderComponent extends _base_layout_component__WEBPACK_IMPORTED_MODULE_0__.BaseLayoutComponent {
  constructor(dialog, store) {
    super(store);
    this.dialog = dialog;
    this.store = store;
    this.loggedInUser$ = this.store.select(_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_7__.loggedInUser);
    this.tenants$ = this.store.select(_reducers_tenants_reducer__WEBPACK_IMPORTED_MODULE_9__.selectTenants);
    this.store.select(_config_tmc__WEBPACK_IMPORTED_MODULE_6__.tmc).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.first)()).subscribe(tmc => {
      this.tmc = tmc;
    });
    this.store.dispatch(_actions_tenant_actions__WEBPACK_IMPORTED_MODULE_8__.TenantActions.loadPrimaryTenants());
  }
  logout() {
    this.store.dispatch(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__.AuthActions.logout());
  }
  edit(user) {
    const dialogRef = this.dialog.open(_users_user_form_component__WEBPACK_IMPORTED_MODULE_1__.UserFormComponent, {
      data: {
        user
      }
    });
    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed && confirmed !== false) {
        this.store.dispatch(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__.UserActions.saveUserDetails({
          data: confirmed
        }));
      }
    });
  }
  changeUserPassword(user) {
    const dialogRef = this.dialog.open(_users_user_password_form_component__WEBPACK_IMPORTED_MODULE_3__.UserPasswordFormComponent, {
      data: {
        user
      }
    });
    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed && confirmed !== false) {
        this.store.dispatch(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__.UserActions.changeUserPassword({
          data: confirmed
        }));
      }
    });
  }
  changeTenant(tenant) {
    this.store.dispatch(_actions_confirmation_dialog_actions__WEBPACK_IMPORTED_MODULE_5__.ConfirmationDialogActions.show({
      data: {
        template: `
            Are you sure you want to navigate to <strong>${tenant.name}</strong> tenant?
            <br><br>
            New browser tab will open with asking you to login to a different TMC Console.
            Your current session with <strong>${this.tmc.name}</strong> will stay intact.
          `,
        confirm: {
          label: `Go to ${tenant.name}`,
          color: 'primary'
        }
      },
      ok: () => {
        // Open new session in new browser tab, so we can preserve current session
        window.open(`https://${tenant.adminLink}/`, '_blank');
      }
    }));
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["dib-header"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 3,
  consts: [["class", "flex-nowrap border-b bg-white p-0 shadow-sm", 4, "ngIf"], [1, "flex-nowrap", "border-b", "bg-white", "p-0", "shadow-sm"], [1, "ml-6"], ["title", "Go to Dashboard", 1, "block", 3, "routerLink"], [1, "material-icons", "self-start", "text-dib-green-600", "text-4xl"], [1, "mr-6", "flex", "flex-auto", "items-center", "justify-end"], ["mat-button", "", "color", "accent", "data-id", "tenant-menu-button", "class", "flex items-center rounded border border-gray-500 p-2 text-gray-500 no-underline xs:text-xs", 3, "matMenuTriggerFor", 4, "ngIf"], ["mat-button", "", "color", "accent", "data-id", "user-menu-button", 1, "flex", "items-center", "rounded", "border", "border-gray-500", "p-2", "text-gray-500", "no-underline", "xs:text-xs", 3, "matMenuTriggerFor"], [1, "material-icons", "mr-2", "text-gray-400", "xs:mr-0.5", "xs:-mt-0.5", "xs:text-xs"], ["xPosition", "before"], ["userMenu", "matMenu"], ["data-id", "user-menu", 1, "user-menu-dropdown", "m-4", "flex", "flex-col", "border-b", "pb-4"], [1, "flex", "items-center", "text-gray-500"], [1, "material-icons", "mr-2", "text-gray-400"], [1, "flex", "flex-col", "overflow-hidden"], [1, "overflow-hidden", "text-ellipsis", "whitespace-nowrap", 3, "title"], [1, "overflow-hidden", "text-ellipsis", 3, "title"], [1, "mt-4"], ["data-id", "user-menu-logout", "mat-stroked-button", "", "color", "accent", 1, "text-xs-button", 3, "click"], ["data-id", "user-menu-change-password", "mat-menu-item", "", 3, "click"], ["data-id", "user-menu-edit-profile", "mat-menu-item", "", 3, "click"], ["data-id", "sidebar-menu", 1, "text-decoration-none", "-mr-4", "inline-flex", "py-1", "px-3", "text-emerald-600", 3, "click"], [1, "material-icons"], ["mat-button", "", "color", "accent", "data-id", "tenant-menu-button", 1, "flex", "items-center", "rounded", "border", "border-gray-500", "p-2", "text-gray-500", "no-underline", "xs:text-xs", 3, "matMenuTriggerFor"], [1, "material-icons", "ml-2", "text-xl", "text-gray-400", "xs:ml-0.5", "xs:-mt-0.5", "xs:text-xs"], ["tmcMenu", "matMenu"], ["data-id", "tenant-menu", 1, "user-menu-dropdown"], ["class", "flex items-center justify-between", "mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["class", "m-4 flex", 4, "ngIf"], ["mat-menu-item", "", 1, "flex", "items-center", "justify-between", 3, "click"], [1, "flex", "h-full", "flex-1", "justify-end", "py-4", "pl-4"], [1, "h-auto", "max-h-full", "w-auto", "max-w-full", 3, "src", "alt"], [1, "m-4", "flex"], [1, "material-icons", "mr-4", "text-red-600"], [1, "flex-1"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, HeaderComponent_mat_toolbar_0_Template, 35, 10, "mat-toolbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, ctx.loggedInUser$));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe],
  styles: ["[_nghost-%COMP%]   .mat-toolbar[_ngcontent-%COMP%], [_nghost-%COMP%]   .user-menu-trigger[_ngcontent-%COMP%] {\n  height: var(--dib-header-height);\n}\n[_nghost-%COMP%]   .user-menu-trigger[_ngcontent-%COMP%]   span.material-icons[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n@media (max-width: 959.99px) {\n  [_nghost-%COMP%]   .user-menu-trigger[_ngcontent-%COMP%]   span.material-icons[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.user-menu-dropdown[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n.user-menu-dropdown[_ngcontent-%COMP%]   span.material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTs7RUFFRSxnQ0FBQTtBQUFKO0FBSUk7RUFDRSxlQUFBO0FBRk47QUFJTTtFQUhGO0lBSUksZUFBQTtFQUROO0FBQ0Y7QUFNQTtFQUNFLGdCQUFBO0FBSEY7QUFLRTtFQUNFLGVBQUE7QUFISiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5tYXQtdG9vbGJhcixcbiAgLnVzZXItbWVudS10cmlnZ2VyIHtcbiAgICBoZWlnaHQ6IHZhcigtLWRpYi1oZWFkZXItaGVpZ2h0KTtcbiAgfVxuXG4gIC51c2VyLW1lbnUtdHJpZ2dlciB7XG4gICAgc3Bhbi5tYXRlcmlhbC1pY29ucyB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG5cbiAgICAgIEBzY3JlZW4gc20ge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi51c2VyLW1lbnUtZHJvcGRvd24ge1xuICBtaW4td2lkdGg6IDIwMHB4O1xuXG4gIHNwYW4ubWF0ZXJpYWwtaWNvbnMge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgfVxufVxuIl19 */"],
  changeDetection: 0
});

/***/ }),

/***/ 32735:
/*!************************************************!*\
  !*** ./src/app/global/layout/layout.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidenav/sidenav.component */ 83422);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 26793);
/* harmony import */ var _effects_tenant_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../effects/tenant.effects */ 31799);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);














class LayoutModule {
}
LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
LayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule,
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__.EffectsModule.forFeature([_effects_tenant_effects__WEBPACK_IMPORTED_MODULE_2__.TenantEffects])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_0__.SidenavComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__.EffectsFeatureModule], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_0__.SidenavComponent] }); })();


/***/ }),

/***/ 83422:
/*!************************************************************!*\
  !*** ./src/app/global/layout/sidenav/sidenav.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavComponent": () => (/* binding */ SidenavComponent)
/* harmony export */ });
/* harmony import */ var _base_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-layout.component */ 59130);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ 6517);






function SidenavComponent_mat_sidenav_1_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " TMC Configurations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SidenavComponent_mat_sidenav_1_a_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_mat_sidenav_1_a_26_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Users ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/users");
  }
}
function SidenavComponent_mat_sidenav_1_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Travel Portal Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    exact: true
  };
};
function SidenavComponent_mat_sidenav_1_a_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_mat_sidenav_1_a_30_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Products ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/products")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
  }
}
function SidenavComponent_mat_sidenav_1_a_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_mat_sidenav_1_a_32_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Product Vat Categories ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/products/vat-categories");
  }
}
function SidenavComponent_mat_sidenav_1_a_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_mat_sidenav_1_a_34_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Product Vendors ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/products/vendors")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
  }
}
function SidenavComponent_mat_sidenav_1_a_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_mat_sidenav_1_a_36_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Vendors Payment Providers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/products/vendors/payment-providers");
  }
}
function SidenavComponent_mat_sidenav_1_a_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_mat_sidenav_1_a_38_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Features ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/features");
  }
}
function SidenavComponent_mat_sidenav_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-nav-list", 3)(3, "div", 4)(4, "div", 5)(5, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_mat_sidenav_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_mat_sidenav_1_Template_a_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "TMC Operations");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_mat_sidenav_1_Template_a_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r24.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Billing Requests ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_mat_sidenav_1_Template_a_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Companies ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_mat_sidenav_1_Template_a_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r26.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Company Users ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_mat_sidenav_1_Template_a_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r27.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Bookings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_mat_sidenav_1_Template_a_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r28.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " System Messages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SidenavComponent_mat_sidenav_1_span_24_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, SidenavComponent_mat_sidenav_1_a_26_Template, 2, 1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, SidenavComponent_mat_sidenav_1_span_28_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, SidenavComponent_mat_sidenav_1_a_30_Template, 2, 3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, SidenavComponent_mat_sidenav_1_a_32_Template, 2, 1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, SidenavComponent_mat_sidenav_1_a_34_Template, 2, 3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, SidenavComponent_mat_sidenav_1_a_36_Template, 2, 1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, SidenavComponent_mat_sidenav_1_a_38_Template, 2, 1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fixedInViewport", true)("autoFocus", false)("opened", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 18, ctx_r0.sidenavIsVisible$));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/billing-requests");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/companies")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](36, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/companies/users");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/companies/bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/system-messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 20, ctx_r0.loggedInUser$).hasAdminAccess());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 22, ctx_r0.loggedInUser$).hasAdminAccess());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 24, ctx_r0.loggedInUser$).isSuperAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 26, ctx_r0.loggedInUser$).isSuperAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 28, ctx_r0.loggedInUser$).isSuperAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 30, ctx_r0.loggedInUser$).isSuperAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 32, ctx_r0.loggedInUser$).isSuperAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 34, ctx_r0.loggedInUser$).isSuperAdmin());
  }
}
const _c1 = ["*"];
class SidenavComponent extends _base_layout_component__WEBPACK_IMPORTED_MODULE_0__.BaseLayoutComponent {}
SidenavComponent.ɵfac = /*@__PURE__*/function () {
  let ɵSidenavComponent_BaseFactory;
  return function SidenavComponent_Factory(t) {
    return (ɵSidenavComponent_BaseFactory || (ɵSidenavComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](SidenavComponent)))(t || SidenavComponent);
  };
}();
SidenavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SidenavComponent,
  selectors: [["dib-sidenav"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 5,
  vars: 3,
  consts: [[3, "backdropClick"], ["mode", "over", "position", "end", 3, "fixedInViewport", "autoFocus", "opened", 4, "ngIf"], ["mode", "over", "position", "end", 3, "fixedInViewport", "autoFocus", "opened"], [1, "pt-0"], [1, "sidenav-logo-wrapper", "mb-4", "flex", "flex-col", "justify-center"], [1, "mx-6", "flex", "items-center", "justify-between"], [1, "material-icons", "self-start", "text-dib-green-600", "text-4xl"], [1, "text-decoration-none", "-mr-4", "inline-flex", "py-1", "px-3", "text-emerald-600", 3, "click"], [1, "material-icons"], ["mat-list-item", "", "routerLinkActive", "active bg-emerald-600 text-white", 1, "px-2", "xs:h-8", "xs:text-sm", 3, "routerLink", "click"], [1, "mx-2", "mt-6", "mb-2", "block", "border-b", "px-4", "pb-2", "text-xs", "uppercase", "text-dib-green-600", "xs:mt-4", "xs:text-2xs"], ["mat-list-item", "", "routerLinkActive", "active bg-emerald-600 text-white", 1, "px-2", "xs:h-8", "xs:text-sm", 3, "routerLink", "routerLinkActiveOptions", "click"], ["class", "mx-2 mt-6 mb-2 block border-b px-4 pb-2 text-xs uppercase text-dib-green-600 xs:mt-4 xs:text-2xs", 4, "ngIf"], ["mat-list-item", "", "routerLinkActive", "active bg-emerald-600 text-white", "class", "px-2 xs:h-8 xs:text-sm", 3, "routerLink", "click", 4, "ngIf"], ["mat-list-item", "", "routerLinkActive", "active bg-emerald-600 text-white", "class", "px-2 xs:h-8 xs:text-sm", 3, "routerLink", "routerLinkActiveOptions", "click", 4, "ngIf"]],
  template: function SidenavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("backdropClick", function SidenavComponent_Template_mat_sidenav_container_backdropClick_0_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidenavComponent_mat_sidenav_1_Template, 40, 37, "mat-sidenav", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-sidenav-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.isLoggedIn$));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavContent, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListItem, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
  styles: ["[_ngcontent-%COMP%]:root {\n  --dib-breadcrumbs-height: 56px;\n  --dib-header-height: 80px;\n}\n@media (max-width: 959.99px) {\n  [_ngcontent-%COMP%]:root {\n    --dib-breadcrumbs-height: 40px;\n    --dib-header-height: 50px;\n  }\n}\n[_nghost-%COMP%] {\n  display: flex;\n  flex: 1 1 0%;\n}\n[_nghost-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1 1 0%;\n  position: unset;\n}\n[_nghost-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%] {\n  min-width: 232px;\n}\n[_nghost-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]   .sidenav-logo-wrapper[_ngcontent-%COMP%] {\n  height: var(--dib-header-height);\n}\n[_nghost-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 300;\n  color: inherit;\n}\n[_nghost-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 243 243 / var(--tw-bg-opacity));\n  min-height: calc(100vh - var(--dib-header-height));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL192YXJpYWJsZXMuc2NzcyIsInNpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtFQUNBLHlCQUFBO0FDQ0Y7QURDRTtFQUpGO0lBS0ksOEJBQUE7SUFDQSx5QkFBQTtFQ0VGO0FBQ0Y7QUFORTtFQUFBLGFBQUE7RUFBQTtBQUFBO0FBRUE7RUFDRTswRkFBQTtFQUVBLFlBQUE7RUFBQSxlQUFBO0FBVUo7QUFSSTtFQUNFLGdCQUFBO0FBVU47QUFQUTtFQUNFLGdDQUFBO0FBU1Y7QUFOUTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBUVY7QUFGTTtFQUFBLGtCQUFBO0VBQUEseURBQUE7RUFFQTtBQUZBIiwiZmlsZSI6InNpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIC0tZGliLWJyZWFkY3J1bWJzLWhlaWdodDogNTZweDtcbiAgLS1kaWItaGVhZGVyLWhlaWdodDogODBweDtcblxuICBAc2NyZWVuIHNtIHtcbiAgICAtLWRpYi1icmVhZGNydW1icy1oZWlnaHQ6IDQwcHg7XG4gICAgLS1kaWItaGVhZGVyLWhlaWdodDogNTBweDtcbiAgfVxufVxuIiwiQGltcG9ydCAnc3JjL3ZhcmlhYmxlcyc7XG5cbjpob3N0IHtcbiAgQGFwcGx5IGZsZXggZmxleC0xO1xuXG4gIG1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xuICAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXG4gICAgQGFwcGx5IGZsZXgtMSBwb3NpdGlvbi11bnNldDtcblxuICAgIG1hdC1zaWRlbmF2IHtcbiAgICAgIG1pbi13aWR0aDogMjMycHg7XG5cbiAgICAgIG1hdC1uYXYtbGlzdCB7XG4gICAgICAgIC5zaWRlbmF2LWxvZ28td3JhcHBlciB7XG4gICAgICAgICAgaGVpZ2h0OiB2YXIoLS1kaWItaGVhZGVyLWhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICAgICAgQGFwcGx5IGJnLWRpYi1ncmF5LTEwMDtcblxuICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWRpYi1oZWFkZXItaGVpZ2h0KSk7XG4gICAgfVxuICB9XG59XG4iXX0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 57905:
/*!*********************************************************************************!*\
  !*** ./src/app/global/wrapper/listing/total/wrapper-listing-total.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrapperListingTotalComponent": () => (/* binding */ WrapperListingTotalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);


function WrapperListingTotalComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.total, " items");
} }
function WrapperListingTotalComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WrapperListingTotalComponent {
}
WrapperListingTotalComponent.ɵfac = function WrapperListingTotalComponent_Factory(t) { return new (t || WrapperListingTotalComponent)(); };
WrapperListingTotalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WrapperListingTotalComponent, selectors: [["dib-wrapper-listing-total"]], inputs: { total: "total" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["emptyTotal", ""]], template: function WrapperListingTotalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WrapperListingTotalComponent_span_0_Template, 2, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WrapperListingTotalComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.total)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 40542:
/*!*********************************************************************!*\
  !*** ./src/app/global/wrapper/listing/wrapper-listing.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrapperListingComponent": () => (/* binding */ WrapperListingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);


const _c0 = [[["", "slot", "hidden-columns-message"]], [["", "slot", "title"]], [["", "slot", "filters"]], [["", "slot", "total"]], [["", "slot", "actions"]], [["", "slot", "table"]], [["", "slot", "pagination"]]];
const _c1 = function (a0) { return { "m-6 rounded-lg shadow-sm": a0 }; };
const _c2 = ["[slot='hidden-columns-message']", "[slot='title']", "[slot='filters']", "[slot='total']", "[slot='actions']", "[slot='table']", "[slot='pagination']"];
/** Example Usage
<dib-wrapper-listing>
  <ng-container slot="title"></ng-container>
  <ng-container slot="filters"></ng-container>
  <ng-container slot="total"></ng-container>
  <ng-container slot="actions"></ng-container>
  <ng-container slot="table"></ng-container>
  <ng-container slot="pagination"></ng-container>
</dib-wrapper-listing>
*/
class WrapperListingComponent {
    constructor() {
        // Padded option is used on listing page and has some additional spacing around the content
        // Un-padded version is to be used when embedded inside other paged, ie. details page
        this.padded = true;
    }
}
WrapperListingComponent.ɵfac = function WrapperListingComponent_Factory(t) { return new (t || WrapperListingComponent)(); };
WrapperListingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WrapperListingComponent, selectors: [["dib-wrapper-listing"]], inputs: { padded: "padded" }, ngContentSelectors: _c2, decls: 17, vars: 3, consts: [[1, "relative", "flex", "flex-col", 3, "ngClass"], [1, "absolute", "right-2", "-top-4", "text-2xs", "font-normal", "italic", "leading-none", "text-gray-500", "empty:hidden"], [1, "grid", "grid-cols-1", "items-start", "justify-between", "gap-8", "rounded-t-lg", "bg-white", "p-4"], [1, "text-xl", "font-medium", "empty:hidden"], [1, "flex", "items-start", "justify-between"], [1, "mr-4", "grid", "auto-cols-auto", "grid-flow-col", "items-center", "gap-4"], [1, "filters-wrapper", "flex", "flex-wrap", "gap-4", "empty:hidden"], [1, "flex", "h-11", "items-center", "self-start", "text-xs", "uppercase", "text-gray-500", "empty:hidden"], [1, "actions-wrapper", "empty:hidden"], [1, "overflow-hidden", "rounded-b-lg", "empty:hidden"]], template: function WrapperListingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](11, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](13, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](14, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](16, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx.padded));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["[_nghost-%COMP%] {\n    display: block;\n    overflow: hidden;\n    overflow-x: auto\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyYXBwZXItbGlzdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtJQUFBLGNBQUE7SUFBQSxnQkFBQTtJQUFBO0FBQUEiLCJmaWxlIjoid3JhcHBlci1saXN0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBAYXBwbHkgYmxvY2sgb3ZlcmZsb3ctaGlkZGVuIG92ZXJmbG93LXgtYXV0bztcbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 23745:
/*!******************************************************************!*\
  !*** ./src/app/global/wrapper/listing/wrapper-listing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrapperListingModule": () => (/* binding */ WrapperListingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _wrapper_listing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapper-listing.component */ 40542);
/* harmony import */ var _total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./total/wrapper-listing-total.component */ 57905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





class WrapperListingModule {
}
WrapperListingModule.ɵfac = function WrapperListingModule_Factory(t) { return new (t || WrapperListingModule)(); };
WrapperListingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WrapperListingModule });
WrapperListingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WrapperListingModule, { declarations: [_wrapper_listing_component__WEBPACK_IMPORTED_MODULE_0__.WrapperListingComponent, _total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_1__.WrapperListingTotalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_wrapper_listing_component__WEBPACK_IMPORTED_MODULE_0__.WrapperListingComponent, _total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_1__.WrapperListingTotalComponent] }); })();


/***/ }),

/***/ 4122:
/*!***************************************************************!*\
  !*** ./src/app/global/wrapper/main/wrapper-main.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrapperMainComponent": () => (/* binding */ WrapperMainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layout/header/header.component */ 26793);
/* harmony import */ var _layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout/sidenav/sidenav.component */ 83422);



const _c0 = ["*"];
/** Example Usage
<dib-wrapper-main>
</dib-wrapper-main>
*/
class WrapperMainComponent {
}
WrapperMainComponent.ɵfac = function WrapperMainComponent_Factory(t) { return new (t || WrapperMainComponent)(); };
WrapperMainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WrapperMainComponent, selectors: [["dib-wrapper-main"]], ngContentSelectors: _c0, decls: 3, vars: 0, template: function WrapperMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "dib-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "dib-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, dependencies: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__.SidenavComponent], styles: ["[_nghost-%COMP%] { display: block; position: relative; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyYXBwZXItbWFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUiLCJmaWxlIjoid3JhcHBlci1tYWluLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfSJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 49722:
/*!************************************************************!*\
  !*** ./src/app/global/wrapper/main/wrapper-main.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrapperMainModule": () => (/* binding */ WrapperMainModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _wrapper_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapper-main.component */ 4122);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout/layout.module */ 32735);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





class WrapperMainModule {
}
WrapperMainModule.ɵfac = function WrapperMainModule_Factory(t) { return new (t || WrapperMainModule)(); };
WrapperMainModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WrapperMainModule });
WrapperMainModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__.LayoutModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WrapperMainModule, { declarations: [_wrapper_main_component__WEBPACK_IMPORTED_MODULE_0__.WrapperMainComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__.LayoutModule], exports: [_wrapper_main_component__WEBPACK_IMPORTED_MODULE_0__.WrapperMainComponent] }); })();


/***/ }),

/***/ 19770:
/*!****************************************************************!*\
  !*** ./src/app/global/wrapper/search/base-search.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseSearchComponent": () => (/* binding */ BaseSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ 63247);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ 96928);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base.component */ 83607);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 23488);








class BaseSearchComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(formBuilder, route, store) {
        super();
        this.formBuilder = formBuilder;
        this.route = route;
        this.store = store;
        this.textColor = 'dark';
        this.onSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.onReset = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    search() {
        this.onSearch.emit(this.form.value);
    }
    reset($event) {
        // We need this in order to be able to collapse the panel since we also
        // have a click event on parent element that would do the opposite
        $event.stopPropagation();
        // If form is not touched there is no need to refresh the data at all
        // Performance is the key, and this will save us a few API calls :)
        if (this.form.dirty) {
            this.form.reset();
            this.search();
        }
        this.onReset.emit();
    }
    populateFormValuesFromRoute(columns, defaults) {
        columns.forEach((column) => {
            let value = this.route.snapshot.queryParamMap.get(column);
            // Remove extra whitespaces and convert to string
            value = (value || '').trim();
            if (value) {
                this.form.controls[column].patchValue(value);
                this.form.markAsDirty();
            }
            else if (defaults?.[column]) {
                this.form.controls[column].patchValue(defaults[column]);
                this.form.markAsDirty();
            }
        });
    }
    syncFormWithRouteParams({ params, resetForm = true, afterHook = () => { }, }) {
        // Update form values every time URL changes to keep them in sync
        this.subscriptions.add(this.route.queryParams
            .pipe(
        // Subscribe only if one of the selected params is changed. We don't care about the others
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)((prev, current) => {
            // TODO: Possibly replace with JSON.stringify(prev, params) === JSON.stringify(current, params)
            return (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])((0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])(prev, params), (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])(current, params));
        }))
            .subscribe(() => {
            // This will be triggered on the initial page load and whenever one of the params we are watching is changed
            if (resetForm)
                this.form.reset();
            this.populateFormValuesFromRoute(params);
            // Execute after hook as there can be some component specific logic that needs to be executed
            afterHook();
        }));
    }
}
BaseSearchComponent.ɵfac = function BaseSearchComponent_Factory(t) { return new (t || BaseSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store)); };
BaseSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BaseSearchComponent, selectors: [["ng-component"]], inputs: { textColor: "textColor" }, outputs: { onSearch: "onSearch", onReset: "onReset" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function BaseSearchComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 86957:
/*!**********************************************************************************************!*\
  !*** ./src/app/global/wrapper/search/green-search-wrapper/green-search-wrapper.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GreenSearchWrapperComponent": () => (/* binding */ GreenSearchWrapperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 24851);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _search_companies_search_companies_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search-companies/search-companies.component */ 34464);
/* harmony import */ var _search_users_search_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search-users/search-users.component */ 50031);
/* harmony import */ var _search_bookings_search_bookings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search-bookings/search-bookings.component */ 86798);
/* harmony import */ var _utils_pipes_camel_case_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/pipes/camel-case-to-spaces.pipe */ 39122);









function GreenSearchWrapperComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "dibCamelCaseToSpaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const filter_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, filter_r4.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](filter_r4.value);
} }
function GreenSearchWrapperComponent_dib_search_companies_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "dib-search-companies", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onSearch", function GreenSearchWrapperComponent_dib_search_companies_16_Template_dib_search_companies_onSearch_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.filterCompanies($event)); })("onReset", function GreenSearchWrapperComponent_dib_search_companies_16_Template_dib_search_companies_onReset_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.toggleSearch()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GreenSearchWrapperComponent_dib_search_users_17_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "dib-search-users", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onSearch", function GreenSearchWrapperComponent_dib_search_users_17_Template_dib_search_users_onSearch_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.filterUsers($event)); })("onReset", function GreenSearchWrapperComponent_dib_search_users_17_Template_dib_search_users_onReset_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.toggleSearch()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GreenSearchWrapperComponent_dib_search_bookings_18_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "dib-search-bookings", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onSearch", function GreenSearchWrapperComponent_dib_search_bookings_18_Template_dib_search_bookings_onSearch_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.filterBookings($event)); })("onReset", function GreenSearchWrapperComponent_dib_search_bookings_18_Template_dib_search_bookings_onReset_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.toggleSearch()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "cursor-pointer transition-colors duration-500 hover:bg-emerald-700": a0 }; };
const _c1 = function (a0) { return [a0]; };
class GreenSearchWrapperComponent {
    constructor() {
        this.isOpen = false;
        this.searchCompanies = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.searchUsers = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.searchBookings = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.filters = {};
        this.activeTab = 'companies';
    }
    /**
     * Convert object into array of values to be used in ngFor
     *
     * { searchColumn: 'query' } => [{ name: 'searchColumn', value: 'query' }]
     */
    get selectedFilters() {
        // TODO: find a better way to move this to the module component
        //  level so that every module can have different ignore list
        const ignoreFilters = new Set(['referenceType']);
        return (Object.keys(this.filters)
            // Do not display ignored filters in the list of selected filters
            .filter((filter) => !ignoreFilters.has(filter))
            .map((name) => ({ name, value: this.filters[name] })));
    }
    toggleSearch() {
        this.isOpen = !this.isOpen;
    }
    filterCompanies(params) {
        this.searchCompanies.emit(params);
    }
    filterUsers(params) {
        this.searchUsers.emit(params);
    }
    filterBookings(params) {
        this.searchBookings.emit(params);
    }
}
GreenSearchWrapperComponent.ɵfac = function GreenSearchWrapperComponent_Factory(t) { return new (t || GreenSearchWrapperComponent)(); };
GreenSearchWrapperComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GreenSearchWrapperComponent, selectors: [["dib-green-search-wrapper"]], inputs: { filters: "filters", activeTab: "activeTab" }, outputs: { searchCompanies: "searchCompanies", searchUsers: "searchUsers", searchBookings: "searchBookings" }, decls: 21, vars: 20, consts: [[1, "mb-4", "bg-emerald-600", "text-sm", "xs:text-xs"], [1, "relative", "flex"], [1, "flex", "flex-1", "flex-col", "py-3", "px-6", 3, "ngClass", "click"], [1, "flex-1", "text-white"], [1, "flex", "items-baseline", "space-x-2", "divide-x", "divide-white", "divide-opacity-25", "pr-6"], [1, "text-xs", "font-light", "uppercase"], ["class", "flex items-baseline space-x-2 pl-2", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "overflow-hidden"], [1, "flex", "whitespace-nowrap", "text-white"], [1, "block", "cursor-pointer", "p-2", "pt-0", "uppercase", 3, "ngClass", "click"], ["textColor", "light", 3, "onSearch", "onReset", 4, "ngIf"], ["matTooltipPosition", "left", 1, "material-icons", "absolute", "top-2", "right-4", "cursor-pointer", "text-white", 3, "matTooltip", "click"], [1, "flex", "items-baseline", "space-x-2", "pl-2"], [1, "text-xs", "font-light", "uppercase", "opacity-75"], ["textColor", "light", 3, "onSearch", "onReset"]], template: function GreenSearchWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GreenSearchWrapperComponent_Template_div_click_2_listener() { return !ctx.isOpen && ctx.toggleSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Quick Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, GreenSearchWrapperComponent_div_7_Template, 6, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GreenSearchWrapperComponent_Template_span_click_10_listener() { return ctx.activeTab = "companies"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Companies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GreenSearchWrapperComponent_Template_span_click_12_listener() { return ctx.activeTab = "users"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Company Users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GreenSearchWrapperComponent_Template_span_click_14_listener() { return ctx.activeTab = "bookings"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Bookings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, GreenSearchWrapperComponent_dib_search_companies_16_Template, 1, 0, "dib-search-companies", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, GreenSearchWrapperComponent_dib_search_users_17_Template, 1, 0, "dib-search-users", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, GreenSearchWrapperComponent_dib_search_bookings_18_Template, 1, 0, "dib-search-bookings", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GreenSearchWrapperComponent_Template_span_click_19_listener() { return ctx.toggleSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c0, !ctx.isOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@showHide", ctx.isOpen ? "hide" : "show");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.selectedFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@openClose", ctx.isOpen ? "open" : "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c1, ctx.activeTab === "companies" ? "border-b border-white" : "opacity-50"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](16, _c1, ctx.activeTab === "users" ? "cursor-pointer border-b border-white" : "opacity-50"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](18, _c1, ctx.activeTab === "bookings" ? "cursor-pointer border-b border-white" : "opacity-50"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeTab === "companies");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeTab === "users");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeTab === "bookings");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matTooltip", ctx.isOpen ? "Hide filters" : "Show filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.isOpen ? "arrow_drop_up" : "arrow_drop_down", " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _search_companies_search_companies_component__WEBPACK_IMPORTED_MODULE_0__.SearchCompaniesComponent, _search_users_search_users_component__WEBPACK_IMPORTED_MODULE_1__.SearchUsersComponent, _search_bookings_search_bookings_component__WEBPACK_IMPORTED_MODULE_2__.SearchBookingsComponent, _utils_pipes_camel_case_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_3__.DibCamelCaseToSpacesPipe], encapsulation: 2, data: { animation: [
            // Animate elements height
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('openClose', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({})),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('close', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 0, height: 0 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('open => close', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('200ms ease-in')]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('close => open', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('400ms cubic-bezier(.62,-0.11,.25,1.66)')]),
            ]),
            // Hide element by setting it to display none
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('showHide', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('show', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({})),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('hide', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 0, display: 'none' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('show => hide', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(0)]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('hide => show', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('200ms ease-out')]),
            ]),
        ] }, changeDetection: 0 });


/***/ }),

/***/ 14243:
/*!**********************************************************************************************!*\
  !*** ./src/app/global/wrapper/search/quick-search-wrapper/quick-search-wrapper.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuickSearchWrapperComponent": () => (/* binding */ QuickSearchWrapperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ 5482);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ 53863);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _search_companies_search_companies_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search-companies/search-companies.component */ 34464);
/* harmony import */ var _search_users_search_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search-users/search-users.component */ 50031);
/* harmony import */ var _search_bookings_search_bookings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search-bookings/search-bookings.component */ 86798);







function QuickSearchWrapperComponent_dib_search_companies_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "dib-search-companies", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onSearch", function QuickSearchWrapperComponent_dib_search_companies_9_Template_dib_search_companies_onSearch_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.filterCompanies($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function QuickSearchWrapperComponent_dib_search_users_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "dib-search-users", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onSearch", function QuickSearchWrapperComponent_dib_search_users_10_Template_dib_search_users_onSearch_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.filterUsers($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function QuickSearchWrapperComponent_dib_search_bookings_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "dib-search-bookings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onSearch", function QuickSearchWrapperComponent_dib_search_bookings_11_Template_dib_search_bookings_onSearch_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.filterBookings($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
class QuickSearchWrapperComponent {
    constructor() {
        this.searchCompanies = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.searchUsers = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.searchBookings = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.activeTab = 'companies';
    }
    filterCompanies(params) {
        const data = this.removeEmpty(params);
        if (Object.keys(data).length) {
            this.searchCompanies.emit(data);
        }
    }
    filterUsers(params) {
        const data = this.removeEmpty(params);
        if (Object.keys(data).length) {
            this.searchUsers.emit(data);
        }
    }
    filterBookings(params) {
        const data = this.removeEmpty(params);
        if (Object.keys(data).length) {
            this.searchBookings.emit(data);
        }
    }
    removeEmpty(params) {
        // Remove extra space and make sure we always have string values
        const data = (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])(params, (value) => (value || '').trim());
        // Remove falsy values (null, undefined, etc.)
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"])(data, (value) => !!value);
    }
}
QuickSearchWrapperComponent.ɵfac = function QuickSearchWrapperComponent_Factory(t) { return new (t || QuickSearchWrapperComponent)(); };
QuickSearchWrapperComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: QuickSearchWrapperComponent, selectors: [["dib-quick-search-wrapper"]], inputs: { activeTab: "activeTab" }, outputs: { searchCompanies: "searchCompanies", searchUsers: "searchUsers", searchBookings: "searchBookings" }, decls: 12, vars: 12, consts: [[1, "mt-4", "flex", "flex-col", "text-sm", "xs:text-xs"], [1, "z-0", "-mb-0.5", "flex", "whitespace-nowrap", "px-3"], [1, "cursor-pointer", "p-2", "pt-0", "uppercase", 3, "ngClass", "click"], [1, "rounded-lg", "bg-dib-gray-100", "px-4"], [3, "onSearch", 4, "ngIf"], [3, "onSearch"]], template: function QuickSearchWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QuickSearchWrapperComponent_Template_span_click_2_listener() { return ctx.activeTab = "companies"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Companies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QuickSearchWrapperComponent_Template_span_click_4_listener() { return ctx.activeTab = "users"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Company Users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QuickSearchWrapperComponent_Template_span_click_6_listener() { return ctx.activeTab = "bookings"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Bookings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, QuickSearchWrapperComponent_dib_search_companies_9_Template, 1, 0, "dib-search-companies", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, QuickSearchWrapperComponent_dib_search_users_10_Template, 1, 0, "dib-search-users", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, QuickSearchWrapperComponent_dib_search_bookings_11_Template, 1, 0, "dib-search-bookings", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, ctx.activeTab === "companies" ? "border-b-2 border-dib-green-600" : "opacity-50"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, ctx.activeTab === "users" ? "cursor-pointer border-b-2 border-dib-green-600" : "opacity-50"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, ctx.activeTab === "bookings" ? "cursor-pointer border-b-2 border-dib-green-600" : "opacity-50"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeTab === "companies");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeTab === "users");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeTab === "bookings");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _search_companies_search_companies_component__WEBPACK_IMPORTED_MODULE_0__.SearchCompaniesComponent, _search_users_search_users_component__WEBPACK_IMPORTED_MODULE_1__.SearchUsersComponent, _search_bookings_search_bookings_component__WEBPACK_IMPORTED_MODULE_2__.SearchBookingsComponent], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 86798:
/*!************************************************************************************!*\
  !*** ./src/app/global/wrapper/search/search-bookings/search-bookings.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchBookingsComponent": () => (/* binding */ SearchBookingsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _utils_animations_element_cross_fade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/animations/element-cross-fade */ 72679);
/* harmony import */ var _base_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-search.component */ 19770);
/* harmony import */ var _models_booking_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/booking.model */ 31282);
/* harmony import */ var _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../actions/bookings.actions */ 4797);
/* harmony import */ var _reducers_bookings_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../reducers/bookings.reducer */ 6819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/pipes/dashes-to-spaces.pipe */ 61467);















function SearchBookingsComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "dibDashesToSpaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", status_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, status_r5));
} }
function SearchBookingsComponent_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", type_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](type_r6);
} }
function SearchBookingsComponent_mat_form_field_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 3)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Booking Reference");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SearchBookingsComponent_mat_form_field_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 3)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Flight Ticket Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SearchBookingsComponent_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SearchBookingsComponent_button_36_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.reset($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("text-white", ctx_r4.textColor === "light");
} }
class SearchBookingsComponent extends _base_search_component__WEBPACK_IMPORTED_MODULE_1__.BaseSearchComponent {
    constructor() {
        super(...arguments);
        this.statuses = Object.keys(_models_booking_model__WEBPACK_IMPORTED_MODULE_2__.bookingStatusMap);
        this.referenceTypes = [];
        this.referenceTypesLoading = false;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            tripId: [],
            companyName: [],
            status: [],
            traveler: [],
            referenceType: [{ value: undefined, disabled: this.referenceTypesLoading || !!this.referenceTypes.length }],
            bookingReference: [],
            flightTicketNumber: [],
        });
        this.store.dispatch(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_3__.BookingActions.loadReferenceTypes());
        this.subscriptions.add(this.store.select(_reducers_bookings_reducer__WEBPACK_IMPORTED_MODULE_4__.referenceTypesLoading).subscribe((loading) => {
            this.referenceTypesLoading = loading;
        }));
        this.subscriptions.add(this.store
            .select(_reducers_bookings_reducer__WEBPACK_IMPORTED_MODULE_4__.selectReferenceTypes)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)((types) => types.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((types) => {
            // Sort the values by putting main categories first
            // TODO: This needs to be revisited once we determine whats the correct order we want to display
            return types.reduce((acc, element) => {
                if ([...Object.values(_models_booking_model__WEBPACK_IMPORTED_MODULE_2__.BookingReferenceTypes)].includes(element)) {
                    return [element, ...acc];
                }
                return [...acc, element];
            }, []);
        }))
            .subscribe((types) => {
            this.referenceTypes = types;
            // Sync form here since values are loaded from the API and we have to wait until all loaded
            // Filters input will change whenever URL changes, and we have to watch for changes here
            // This is a subscriber and will keep updating form whenever route params changes
            super.syncFormWithRouteParams({
                params: [
                    'tripId',
                    'companyName',
                    'status',
                    'traveler',
                    'referenceType',
                    'bookingReference',
                    'flightTicketNumber',
                ],
                resetForm: false,
                afterHook: () => {
                    // Preselect Flights by default if nothing is selected
                    if (!this.form.get('referenceType').value) {
                        this.form.controls['referenceType'].patchValue(_models_booking_model__WEBPACK_IMPORTED_MODULE_2__.BookingReferenceTypes.Flight);
                    }
                },
            });
        }));
    }
    get showSearchByFlightTicketNumber() {
        return (this.form.get('referenceType').value || '') === _models_booking_model__WEBPACK_IMPORTED_MODULE_2__.BookingReferenceTypes.Flight;
    }
    onTypeChange(type) {
        if (!type) {
            // Clear values if no product type is selected
            this.form.controls['bookingReference'].reset();
            this.form.controls['flightTicketNumber'].reset();
        }
        else if (type !== _models_booking_model__WEBPACK_IMPORTED_MODULE_2__.BookingReferenceTypes.Flight) {
            // Clear flight ticket number since its only applicable for Flight referenceType
            this.form.controls['flightTicketNumber'].reset();
        }
    }
}
SearchBookingsComponent.ɵfac = /*@__PURE__*/ function () { let ɵSearchBookingsComponent_BaseFactory; return function SearchBookingsComponent_Factory(t) { return (ɵSearchBookingsComponent_BaseFactory || (ɵSearchBookingsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](SearchBookingsComponent)))(t || SearchBookingsComponent); }; }();
SearchBookingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SearchBookingsComponent, selectors: [["dib-search-bookings"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 39, vars: 12, consts: [[1, "mt-5", "flex", "flex-col", "items-start", "space-y-2", 3, "formGroup"], [1, "flex", "w-full", "items-end", "justify-between", "xs:flex-wrap"], [1, "flex", "flex-wrap", "xs:w-full"], ["appearance", "fill", 1, "small", "white-fill", "mr-6", "xs:mr-0", "xs:w-full"], ["matInput", "", "name", "tripId", "formControlName", "tripId", "autocomplete", "off"], ["matInput", "", "name", "companyName", "formControlName", "companyName", "autocomplete", "off"], ["formControlName", "status"], [3, "value", 4, "ngFor", "ngForOf"], [1, "ml-2", "text-xs", "font-light", "uppercase"], ["matInput", "", "name", "traveler", "formControlName", "traveler", "autocomplete", "off"], ["formControlName", "referenceType", 3, "selectionChange"], ["appearance", "fill", "class", "small white-fill mr-6 xs:mr-0 xs:w-full", 4, "ngIf"], [1, "mb-4", "flex", "justify-end", "space-x-2", "xs:w-full"], ["type", "reset", "mat-button", "", "class", "py-1 px-4", 3, "text-white", "click", 4, "ngIf"], ["type", "submit", "mat-flat-button", "", "color", "primary", 1, "py-1", "px-4", "text-white", 3, "disabled", "click"], [3, "value"], ["matInput", "", "name", "bookingReference", "formControlName", "bookingReference", "autocomplete", "off"], ["matInput", "", "name", "flightTicketNumber", "formControlName", "flightTicketNumber", "autocomplete", "off", "placeholder", "117-2485720958"], ["type", "reset", "mat-button", "", 1, "py-1", "px-4", 3, "click"]], template: function SearchBookingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "mat-form-field", 3)(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Trip ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-form-field", 3)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-form-field", 3)(12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Cart Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-select", 6)(15, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Show All");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, SearchBookingsComponent_mat_option_17_Template, 3, 4, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Secondary Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 1)(21, "div", 2)(22, "mat-form-field", 3)(23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Traveler Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "mat-form-field", 3)(27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Product Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function SearchBookingsComponent_Template_mat_select_selectionChange_29_listener($event) { return ctx.onTypeChange($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Show All");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, SearchBookingsComponent_mat_option_32_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, SearchBookingsComponent_mat_form_field_33_Template, 4, 0, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, SearchBookingsComponent_mat_form_field_34_Template, 4, 0, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, SearchBookingsComponent_button_36_Template, 2, 2, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SearchBookingsComponent_Template_button_click_37_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@elementCrossFade", undefined)("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.statuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("text-white", ctx.textColor === "light");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.referenceTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.form.get("referenceType").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showSearchByFlightTicketNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.form.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("bg-dib-green-500", ctx.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_5__.DibDashesToSpacesPipe], encapsulation: 2, data: { animation: [_utils_animations_element_cross_fade__WEBPACK_IMPORTED_MODULE_0__.elementCrossFade] }, changeDetection: 0 });


/***/ }),

/***/ 34464:
/*!**************************************************************************************!*\
  !*** ./src/app/global/wrapper/search/search-companies/search-companies.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchCompaniesComponent": () => (/* binding */ SearchCompaniesComponent)
/* harmony export */ });
/* harmony import */ var _models_company_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../models/company.model */ 44245);
/* harmony import */ var _utils_animations_element_cross_fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/animations/element-cross-fade */ 72679);
/* harmony import */ var _base_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-search.component */ 19770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/pipes/dashes-to-spaces.pipe */ 61467);












function SearchCompaniesComponent_mat_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "dibDashesToSpaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", status_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, status_r3));
} }
function SearchCompaniesComponent_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "dibDashesToSpaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", status_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, status_r4));
} }
function SearchCompaniesComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SearchCompaniesComponent_button_28_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.reset($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("text-white", ctx_r2.textColor === "light");
} }
class SearchCompaniesComponent extends _base_search_component__WEBPACK_IMPORTED_MODULE_2__.BaseSearchComponent {
    constructor() {
        super(...arguments);
        this.companyStatuses = [_models_company_model__WEBPACK_IMPORTED_MODULE_0__.CompanyStatus.NONE, _models_company_model__WEBPACK_IMPORTED_MODULE_0__.CompanyStatus.AT_RISK, _models_company_model__WEBPACK_IMPORTED_MODULE_0__.CompanyStatus.VIP];
        this.subscriptionStatuses = [
            _models_company_model__WEBPACK_IMPORTED_MODULE_0__.SubscriptionStatus.ACTIVE,
            _models_company_model__WEBPACK_IMPORTED_MODULE_0__.SubscriptionStatus.DISABLED,
            _models_company_model__WEBPACK_IMPORTED_MODULE_0__.SubscriptionStatus.PENDING,
            _models_company_model__WEBPACK_IMPORTED_MODULE_0__.SubscriptionStatus.DUNNING,
            _models_company_model__WEBPACK_IMPORTED_MODULE_0__.SubscriptionStatus.SUSPEND,
            _models_company_model__WEBPACK_IMPORTED_MODULE_0__.SubscriptionStatus.COMPLETED,
            _models_company_model__WEBPACK_IMPORTED_MODULE_0__.SubscriptionStatus.CANCELLED,
        ];
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            corporationName: [],
            registrationNumber: [],
            status: [],
            subscriptionStatus: [],
        });
        // Filters input will change whenever URL changes, and we have to watch for changes here
        super.syncFormWithRouteParams({
            params: ['corporationName', 'registrationNumber', 'status', 'subscriptionStatus'],
        });
    }
}
SearchCompaniesComponent.ɵfac = /*@__PURE__*/ function () { let ɵSearchCompaniesComponent_BaseFactory; return function SearchCompaniesComponent_Factory(t) { return (ɵSearchCompaniesComponent_BaseFactory || (ɵSearchCompaniesComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](SearchCompaniesComponent)))(t || SearchCompaniesComponent); }; }();
SearchCompaniesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SearchCompaniesComponent, selectors: [["dib-search-companies"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 31, vars: 7, consts: [[1, "mt-5", "flex", "flex-col", "items-start", "space-y-2", 3, "formGroup"], ["appearance", "fill", 1, "small", "white-fill", "mr-6", "xs:mr-0", "xs:w-full"], ["matInput", "", "name", "corporationName", "formControlName", "corporationName", "autocomplete", "off"], [1, "ml-2", "text-xs", "font-light", "uppercase"], [1, "flex", "w-full", "items-end", "justify-between", "xs:flex-wrap"], [1, "flex", "flex-wrap", "xs:w-full"], ["matInput", "", "name", "registrationNumber", "formControlName", "registrationNumber", "autocomplete", "off"], ["formControlName", "status"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "subscriptionStatus"], [1, "mb-4", "flex", "justify-end", "space-x-2", "xs:w-full"], ["type", "reset", "mat-button", "", "class", "py-1 px-4", 3, "text-white", "click", 4, "ngIf"], ["type", "submit", "mat-flat-button", "", "color", "primary", 1, "bg-dib-green-500", "py-1", "px-4", "text-white", 3, "click"], [3, "value"], ["type", "reset", "mat-button", "", 1, "py-1", "px-4", 3, "click"]], template: function SearchCompaniesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0)(1, "mat-form-field", 1)(2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Corporation name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Secondary Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "mat-form-field", 1)(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Registration Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-form-field", 1)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Company Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-select", 7)(17, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "All statuses");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, SearchCompaniesComponent_mat_option_19_Template, 3, 4, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-form-field", 1)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Subscription Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-select", 9)(24, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "All statuses");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, SearchCompaniesComponent_mat_option_26_Template, 3, 4, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, SearchCompaniesComponent_button_28_Template, 2, 2, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SearchCompaniesComponent_Template_button_click_29_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@elementCrossFade", undefined)("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("text-white", ctx.textColor === "light");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.companyStatuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.subscriptionStatuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.form.dirty);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_3__.DibDashesToSpacesPipe], encapsulation: 2, data: { animation: [_utils_animations_element_cross_fade__WEBPACK_IMPORTED_MODULE_1__.elementCrossFade] }, changeDetection: 0 });


/***/ }),

/***/ 50031:
/*!******************************************************************************!*\
  !*** ./src/app/global/wrapper/search/search-users/search-users.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchUsersComponent": () => (/* binding */ SearchUsersComponent)
/* harmony export */ });
/* harmony import */ var _utils_animations_element_cross_fade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/animations/element-cross-fade */ 72679);
/* harmony import */ var _models_company_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/company-user.model */ 99971);
/* harmony import */ var _base_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-search.component */ 19770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/pipes/dashes-to-spaces.pipe */ 61467);












function SearchUsersComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "dibDashesToSpaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", role_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, role_r2));
} }
function SearchUsersComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SearchUsersComponent_button_35_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.reset($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("text-white", ctx_r1.textColor === "light");
} }
class SearchUsersComponent extends _base_search_component__WEBPACK_IMPORTED_MODULE_2__.BaseSearchComponent {
    constructor() {
        super(...arguments);
        this.userRoles = [_models_company_user_model__WEBPACK_IMPORTED_MODULE_1__.CompanyUserRole.ADMIN, _models_company_user_model__WEBPACK_IMPORTED_MODULE_1__.CompanyUserRole.TRAVELLER];
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            firstname: [],
            lastname: [],
            username: [],
            phone: [],
            role: [],
            companyName: [],
        });
        // Filters input will change whenever URL changes, and we have to watch for changes here
        super.syncFormWithRouteParams({ params: ['firstname', 'lastname', 'username', 'phone', 'role', 'companyName'] });
    }
}
SearchUsersComponent.ɵfac = /*@__PURE__*/ function () { let ɵSearchUsersComponent_BaseFactory; return function SearchUsersComponent_Factory(t) { return (ɵSearchUsersComponent_BaseFactory || (ɵSearchUsersComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](SearchUsersComponent)))(t || SearchUsersComponent); }; }();
SearchUsersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SearchUsersComponent, selectors: [["dib-search-users"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 38, vars: 6, consts: [[1, "mt-5", "flex", "flex-col", "items-start", "space-y-2", 3, "formGroup"], [1, "flex", "w-full", "items-end", "justify-between", "xs:flex-wrap"], [1, "flex", "flex-wrap", "xs:w-full"], ["appearance", "fill", 1, "small", "white-fill", "mr-6", "xs:mr-0", "xs:w-full"], ["matInput", "", "name", "firstname", "formControlName", "firstname", "autocomplete", "off"], ["matInput", "", "name", "lastname", "formControlName", "lastname", "autocomplete", "off"], ["formControlName", "role"], [3, "value", 4, "ngFor", "ngForOf"], [1, "ml-2", "text-xs", "font-light", "uppercase"], ["matInput", "", "name", "username", "formControlName", "username", "autocomplete", "off"], ["matInput", "", "name", "phone", "formControlName", "phone", "autocomplete", "off"], ["matInput", "", "name", "companyName", "formControlName", "companyName", "autocomplete", "off"], [1, "mb-4", "flex", "justify-end", "space-x-2", "xs:w-full"], ["type", "reset", "mat-button", "", "class", "py-1 px-4", 3, "text-white", "click", 4, "ngIf"], ["type", "submit", "mat-flat-button", "", "color", "primary", 1, "bg-dib-green-500", "py-1", "px-4", "text-white", 3, "click"], [3, "value"], ["type", "reset", "mat-button", "", 1, "py-1", "px-4", 3, "click"]], template: function SearchUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "mat-form-field", 3)(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-form-field", 3)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-form-field", 3)(12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-select", 6)(15, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Show All");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, SearchUsersComponent_mat_option_17_Template, 3, 4, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Secondary Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 1)(21, "div", 2)(22, "mat-form-field", 3)(23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-form-field", 3)(27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-form-field", 3)(31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, SearchUsersComponent_button_35_Template, 2, 2, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SearchUsersComponent_Template_button_click_36_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@elementCrossFade", undefined)("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.userRoles);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("text-white", ctx.textColor === "light");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.form.dirty);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_3__.DibDashesToSpacesPipe], encapsulation: 2, data: { animation: [_utils_animations_element_cross_fade__WEBPACK_IMPORTED_MODULE_0__.elementCrossFade] }, changeDetection: 0 });


/***/ }),

/***/ 38765:
/*!****************************************************************!*\
  !*** ./src/app/global/wrapper/search/wrapper-search.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrapperSearchModule": () => (/* binding */ WrapperSearchModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pipes/pipes.module */ 59916);
/* harmony import */ var _search_companies_search_companies_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-companies/search-companies.component */ 34464);
/* harmony import */ var _search_users_search_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-users/search-users.component */ 50031);
/* harmony import */ var _quick_search_wrapper_quick_search_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quick-search-wrapper/quick-search-wrapper.component */ 14243);
/* harmony import */ var _green_search_wrapper_green_search_wrapper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./green-search-wrapper/green-search-wrapper.component */ 86957);
/* harmony import */ var _search_bookings_search_bookings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-bookings/search-bookings.component */ 86798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);















class WrapperSearchModule {
}
WrapperSearchModule.ɵfac = function WrapperSearchModule_Factory(t) { return new (t || WrapperSearchModule)(); };
WrapperSearchModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: WrapperSearchModule });
WrapperSearchModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.DibPipesModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](WrapperSearchModule, { declarations: [_green_search_wrapper_green_search_wrapper_component__WEBPACK_IMPORTED_MODULE_4__.GreenSearchWrapperComponent,
        _quick_search_wrapper_quick_search_wrapper_component__WEBPACK_IMPORTED_MODULE_3__.QuickSearchWrapperComponent,
        _search_companies_search_companies_component__WEBPACK_IMPORTED_MODULE_1__.SearchCompaniesComponent,
        _search_users_search_users_component__WEBPACK_IMPORTED_MODULE_2__.SearchUsersComponent,
        _search_bookings_search_bookings_component__WEBPACK_IMPORTED_MODULE_5__.SearchBookingsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.DibPipesModule], exports: [_green_search_wrapper_green_search_wrapper_component__WEBPACK_IMPORTED_MODULE_4__.GreenSearchWrapperComponent,
        _quick_search_wrapper_quick_search_wrapper_component__WEBPACK_IMPORTED_MODULE_3__.QuickSearchWrapperComponent,
        _search_companies_search_companies_component__WEBPACK_IMPORTED_MODULE_1__.SearchCompaniesComponent,
        _search_users_search_users_component__WEBPACK_IMPORTED_MODULE_2__.SearchUsersComponent,
        _search_bookings_search_bookings_component__WEBPACK_IMPORTED_MODULE_5__.SearchBookingsComponent] }); })();


/***/ }),

/***/ 89336:
/*!***************************************************************!*\
  !*** ./src/app/global/wrapper/stat/wrapper-stat.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrapperStatComponent": () => (/* binding */ WrapperStatComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _dot_loader_dot_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dot-loader/dot-loader.component */ 43339);




function WrapperStatComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.count || "-", " ");
} }
function WrapperStatComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "dib-dot-loader", 5);
} }
class WrapperStatComponent {
}
WrapperStatComponent.ɵfac = function WrapperStatComponent_Factory(t) { return new (t || WrapperStatComponent)(); };
WrapperStatComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WrapperStatComponent, selectors: [["dib-wrapper-stat"]], inputs: { loading: "loading", count: "count", link: "link", title: "title" }, decls: 7, vars: 4, consts: [[1, "group", "max-w-[120px]", "cursor-pointer", 3, "routerLink"], [1, "text-3xl", "text-gray-500", "sm:text-2xl", "xs:text-xl"], [4, "ngIf", "ngIfElse"], ["showLoader", ""], [1, "text-sm", "font-medium", "text-emerald-600", "group-hover:underline", "sm:text-xs"], ["size", "small", "color", "current"]], template: function WrapperStatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, WrapperStatComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WrapperStatComponent_ng_template_3_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.link);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _dot_loader_dot_loader_component__WEBPACK_IMPORTED_MODULE_0__.DotLoaderComponent], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 49192:
/*!************************************************************!*\
  !*** ./src/app/global/wrapper/stat/wrapper-stat.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrapperStatModule": () => (/* binding */ WrapperStatModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _wrapper_stat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapper-stat.component */ 89336);
/* harmony import */ var _dot_loader_dot_loader_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dot-loader/dot-loader.module */ 67995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





class WrapperStatModule {
}
WrapperStatModule.ɵfac = function WrapperStatModule_Factory(t) { return new (t || WrapperStatModule)(); };
WrapperStatModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WrapperStatModule });
WrapperStatModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _dot_loader_dot_loader_module__WEBPACK_IMPORTED_MODULE_1__.DotLoaderModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WrapperStatModule, { declarations: [_wrapper_stat_component__WEBPACK_IMPORTED_MODULE_0__.WrapperStatComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _dot_loader_dot_loader_module__WEBPACK_IMPORTED_MODULE_1__.DotLoaderModule], exports: [_wrapper_stat_component__WEBPACK_IMPORTED_MODULE_0__.WrapperStatComponent] }); })();


/***/ }),

/***/ 8421:
/*!*******************************************************************!*\
  !*** ./src/app/global/wrapper/widget/wrapper-widget.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrapperWidgetComponent": () => (/* binding */ WrapperWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

const _c0 = [[["", "slot", "title"]], [["", "slot", "content"]]];
const _c1 = ["[slot='title']", "[slot='content']"];
/** Example Usage
<dib-wrapper-widget>
  <ng-container slot="title"></ng-container>
  <ng-container slot="content"></ng-container>
</dib-wrapper-widget>
*/
class WrapperWidgetComponent {
}
WrapperWidgetComponent.ɵfac = function WrapperWidgetComponent_Factory(t) { return new (t || WrapperWidgetComponent)(); };
WrapperWidgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WrapperWidgetComponent, selectors: [["dib-wrapper-widget"]], ngContentSelectors: _c1, decls: 5, vars: 0, consts: [[1, "overflow-hidden", "rounded-lg", "shadow-sm"], [1, "grid", "gap-4", "bg-white", "p-6", "sm:p-4"], [1, "text-xl", "font-medium", "sm:text-lg", "xs:text-sm"]], template: function WrapperWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 36163:
/*!****************************************************************!*\
  !*** ./src/app/global/wrapper/widget/wrapper-widget.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrapperWidgetModule": () => (/* binding */ WrapperWidgetModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _wrapper_widget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapper-widget.component */ 8421);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




class WrapperWidgetModule {
}
WrapperWidgetModule.ɵfac = function WrapperWidgetModule_Factory(t) { return new (t || WrapperWidgetModule)(); };
WrapperWidgetModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WrapperWidgetModule });
WrapperWidgetModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WrapperWidgetModule, { declarations: [_wrapper_widget_component__WEBPACK_IMPORTED_MODULE_0__.WrapperWidgetComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_wrapper_widget_component__WEBPACK_IMPORTED_MODULE_0__.WrapperWidgetComponent] }); })();


/***/ }),

/***/ 23420:
/*!********************************************************!*\
  !*** ./src/app/interceptors/add-header.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddHeaderInterceptor": () => (/* binding */ AddHeaderInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 80155);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 10538);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _config_tmc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/tmc */ 77434);
/* harmony import */ var _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/auth.reducer */ 30239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 23488);







class AddHeaderInterceptor {
    constructor(store) {
        this.store = store;
    }
    intercept(req, next) {
        return this.store.select(_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_2__.authToken).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.withLatestFrom)(this.store.select(_config_tmc__WEBPACK_IMPORTED_MODULE_1__.tmc)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(([token, tenant]) => {
            // Clone the request to add the new headers and URL
            // Pass the cloned request instead of the original request to the next handle
            return next.handle(req.clone({
                url: AddHeaderInterceptor.setUrl(req),
                headers: AddHeaderInterceptor.setHeaders(req, token, tenant),
            }));
        }));
    }
    static setHeaders(req, token, tenant) {
        let headers = req.headers.set('Application', 'tmcc');
        // We will skip authorisation with DIB tokens for all direct api calls unless they have /api/ in the endpoint
        // All relative API urls (they don't start with http) are internal calls and definitely require authorisation
        // All DFS urls require token since they do not have unified api prefixes (some do, some don't)
        const requiresAuthorization = !req.url.startsWith('http') || req.url.includes('/api/') || req.url.includes(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.dfs);
        if (token && requiresAuthorization) {
            headers = headers.set('Authorization', `Bearer ${token}`);
        }
        if (tenant?.id) {
            // Set tenant related key in every API request
            headers = headers.set('tenant-key', tenant.id);
        }
        return headers;
    }
    static setUrl(req) {
        if (req.url.startsWith('/')) {
            return _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.backend + req.url;
        }
        return req.url;
    }
}
AddHeaderInterceptor.ɵfac = function AddHeaderInterceptor_Factory(t) { return new (t || AddHeaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store)); };
AddHeaderInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AddHeaderInterceptor, factory: AddHeaderInterceptor.ɵfac });


/***/ }),

/***/ 41461:
/*!***************************************************!*\
  !*** ./src/app/interceptors/cache.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheInterceptor": () => (/* binding */ CacheInterceptor),
/* harmony export */   "cache": () => (/* binding */ cache),
/* harmony export */   "cacheGroup": () => (/* binding */ cacheGroup),
/* harmony export */   "clearGroups": () => (/* binding */ clearGroups)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 44874);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_api_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api-cache.service */ 66397);






const CACHE_OPTIONS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpContextToken(() => null);
function cache(options = {}) {
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpContext().set(CACHE_OPTIONS, options);
}
/**
 * Helper method to only set a cache group without setting up other params
 */
function cacheGroup(group) {
    return cache({ group });
}
/**
 * Helper method when we only need to clear groups related to this cache
 */
function clearGroups(groups) {
    return cache({ clearGroups: groups });
}
class CacheInterceptor {
    constructor(requestCache) {
        this.requestCache = requestCache;
    }
    intercept(req, next) {
        const options = req.context.get(CACHE_OPTIONS);
        // Continue if caching is not enabled
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.cache.enabled || !options)
            return next.handle(req);
        // Check if we have some caches that are related to this APi call and clear them
        options.clearGroups?.forEach((group) => {
            this.requestCache.clearByGroupName(group);
        });
        // Only GET requests are cacheable - continue if request is not cacheable
        if (req.method !== 'GET')
            return next.handle(req);
        const cachedResponseBody = this.requestCache.get(req);
        const cachedResponse = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({ status: 200 /* HttpStatusCode.Ok */, body: cachedResponseBody });
        // Refresh the caches
        const response$ = next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((event) => {
            // There may be other events besides the response.
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse) {
                // TODO: Check if need to handle BE errors where we will receive status 200 response with some error message
                //  Issue is that this error will be cached with no way to refresh until cache expires or page is reloaded
                this.requestCache.put(req, event, req.context.get(CACHE_OPTIONS)?.group); // Update the cache.
            }
        }));
        if (options.refresh) {
            // TODO: Think about returning only new data (ie. remove startWith(cachedResponse) pipe)
            return cachedResponseBody ? response$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(cachedResponse)) : response$;
        }
        // Return cached response if it is found or load new data if not
        return cachedResponseBody ? (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(cachedResponse) : response$;
    }
}
CacheInterceptor.ɵfac = function CacheInterceptor_Factory(t) { return new (t || CacheInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_api_cache_service__WEBPACK_IMPORTED_MODULE_1__.ApiCache)); };
CacheInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: CacheInterceptor, factory: CacheInterceptor.ɵfac });


/***/ }),

/***/ 6426:
/*!*************************************************************!*\
  !*** ./src/app/interceptors/mocked-requests.interceptor.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MockedRequestsInterceptor": () => (/* binding */ MockedRequestsInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 21339);
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chance */ 32951);
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chance__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _mock_mocked_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mock/mocked-requests */ 29289);






const chance = chance__WEBPACK_IMPORTED_MODULE_0__.Chance();
class MockedRequestsInterceptor {
    intercept(httpRequest, next) {
        const mock = _mock_mocked_requests__WEBPACK_IMPORTED_MODULE_2__.mockedRequests.getMockedRequest(httpRequest.method, decodeURIComponent(httpRequest.urlWithParams));
        if (mock) {
            mock.setRequestBody(httpRequest.body);
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.mock.debugMode) {
                mock.log({ httpRequest });
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse({ status: 200, body: mock.getResponse() })).pipe(
            // Add a small but random delay and use Nullish coalescing operator (??) because delay of 0ms is valid
            (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(mock.request?.delay ?? chance.natural({ min: 70, max: 800 })));
        }
        return next.handle(httpRequest);
    }
}


/***/ }),

/***/ 47939:
/*!**************************************************************!*\
  !*** ./src/app/interceptors/split-sort-param.interceptor.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplitSortParamInterceptor": () => (/* binding */ SplitSortParamInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


class SplitSortParamInterceptor {
    intercept(req, next) {
        return next.handle(req.clone({ params: SplitSortParamInterceptor.splitSortParam(req.params) }));
    }
    static splitSortParam(params) {
        if (params.has('sort') && params.get('sort').includes('|')) {
            // Cache the sort value
            const sort = params.get('sort');
            // Remove it from params list
            params = params.delete('sort');
            // And repopulate with each individual sort value separately
            sort.split('|').forEach((sortBy) => {
                params = params.append('sort', sortBy);
            });
        }
        return params;
    }
}
SplitSortParamInterceptor.ɵfac = function SplitSortParamInterceptor_Factory(t) { return new (t || SplitSortParamInterceptor)(); };
SplitSortParamInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SplitSortParamInterceptor, factory: SplitSortParamInterceptor.ɵfac });


/***/ }),

/***/ 37270:
/*!*************************************************************!*\
  !*** ./src/app/interceptors/unauthenticated.interceptor.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnauthenticatedInterceptor": () => (/* binding */ UnauthenticatedInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/auth.actions */ 60274);
/* harmony import */ var _reducers_router_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/router.reducer */ 42401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 23488);







class UnauthenticatedInterceptor {
    constructor(store) {
        this.store = store;
        this.cancelAllPendingRequests = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    intercept(req, next) {
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.cancelAllPendingRequests), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((err) => {
            // We are only interested in 401 code here, so throw regular error if anything else happens
            if (err.status !== 401 /* HttpStatusCode.Unauthorized */)
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(err);
            return this.store.select(_reducers_router_reducer__WEBPACK_IMPORTED_MODULE_1__.selectUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.cancelAllPendingRequests), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((url) => {
                if (!url.startsWith('/auth/login')) {
                    // Auto logout if 401 response returned from API
                    this.store.dispatch(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.logout('Session expired'));
                    // Cancel any pending requests since we are redirecting user to the login page
                    this.cancelAllPendingRequests.next();
                }
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(err);
            }));
        }));
    }
}
UnauthenticatedInterceptor.ɵfac = function UnauthenticatedInterceptor_Factory(t) { return new (t || UnauthenticatedInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store)); };
UnauthenticatedInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: UnauthenticatedInterceptor, factory: UnauthenticatedInterceptor.ɵfac });


/***/ }),

/***/ 4200:
/*!*************************************************!*\
  !*** ./src/app/models/billing-profile.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingProfileAdapter": () => (/* binding */ BillingProfileAdapter),
/* harmony export */   "BillingProfileModel": () => (/* binding */ BillingProfileModel),
/* harmony export */   "InvoiceSplit": () => (/* binding */ InvoiceSplit),
/* harmony export */   "InvoiceSplitProcessStatus": () => (/* binding */ InvoiceSplitProcessStatus)
/* harmony export */ });
/* harmony import */ var _payment_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.model */ 16874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


var InvoiceSplit;
(function (InvoiceSplit) {
    InvoiceSplit["NONE"] = "NONE";
    InvoiceSplit["COST_CENTER"] = "COST_CENTER";
    InvoiceSplit["YOUR_REFERENCE"] = "YOUR_REFERENCE";
})(InvoiceSplit || (InvoiceSplit = {}));
var InvoiceSplitProcessStatus;
(function (InvoiceSplitProcessStatus) {
    InvoiceSplitProcessStatus["PENDING"] = "PENDING";
    InvoiceSplitProcessStatus["COMPLETED"] = "COMPLETED";
    InvoiceSplitProcessStatus["IGNORED"] = "IGNORED";
})(InvoiceSplitProcessStatus || (InvoiceSplitProcessStatus = {}));
class BillingProfileModel {
    constructor(id, city, contactEmail, contactFirstName, contactLastName, countryId, countryName, currency, legalName, streetName, taxId, zipcode, invoiceSplitType, pendingInvoiceSplitType, vatNumber, invoiceRecipientEmail, billingAddress, billingPeriod, backOfficeCustomerId, memberCount, groupIds, employeeIds) {
        this.id = id;
        this.city = city;
        this.contactEmail = contactEmail;
        this.contactFirstName = contactFirstName;
        this.contactLastName = contactLastName;
        this.countryId = countryId;
        this.countryName = countryName;
        this.currency = currency;
        this.legalName = legalName;
        this.streetName = streetName;
        this.taxId = taxId;
        this.zipcode = zipcode;
        this.invoiceSplitType = invoiceSplitType;
        this.pendingInvoiceSplitType = pendingInvoiceSplitType;
        this.vatNumber = vatNumber;
        this.invoiceRecipientEmail = invoiceRecipientEmail;
        this.billingAddress = billingAddress;
        this.billingPeriod = billingPeriod;
        this.backOfficeCustomerId = backOfficeCustomerId;
        this.memberCount = memberCount;
        this.groupIds = groupIds;
        this.employeeIds = employeeIds;
        this.paymentType = _payment_model__WEBPACK_IMPORTED_MODULE_0__.PaymentType.BILLING_PROFILE;
    }
}
class BillingProfileAdapter {
    adapt(item) {
        return new BillingProfileModel(item.id, item.city, item.contactEmail, item.contactFirstName, item.contactLastName, item.countryId, item.countryName, item.currency, item.legalName, item.streetName, item.taxId, item.zipcode, item.invoiceSplitType, item?.pendingInvoiceSplitType, item?.vatNumber, item?.invoiceRecipientEmail, item?.billingAddress, item?.billingPeriod, item.backOfficeCustomerId, item?.memberCount, item.groupIds, item.employeeIds);
    }
}
BillingProfileAdapter.ɵfac = function BillingProfileAdapter_Factory(t) { return new (t || BillingProfileAdapter)(); };
BillingProfileAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BillingProfileAdapter, factory: BillingProfileAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 83970:
/*!*************************************************!*\
  !*** ./src/app/models/billing-request.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingRequestAdapter": () => (/* binding */ BillingRequestAdapter),
/* harmony export */   "BillingRequestModel": () => (/* binding */ BillingRequestModel),
/* harmony export */   "BillingRequestStatus": () => (/* binding */ BillingRequestStatus)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

var BillingRequestStatus;
(function (BillingRequestStatus) {
    BillingRequestStatus["PENDING"] = "PENDING";
    BillingRequestStatus["ENABLED"] = "ENABLED";
    BillingRequestStatus["DENIED"] = "DENIED";
    BillingRequestStatus["BLOCKED"] = "BLOCKED";
})(BillingRequestStatus || (BillingRequestStatus = {}));
class BillingRequestModel {
    constructor(id, active, billingProfileRequestStatus, corporationName, hasCorporateRate, stripeCustomerId) {
        this.id = id;
        this.active = active;
        this.billingProfileRequestStatus = billingProfileRequestStatus;
        this.corporationName = corporationName;
        this.hasCorporateRate = hasCorporateRate;
        this.stripeCustomerId = stripeCustomerId;
    }
    get isPending() {
        return this.billingProfileRequestStatus === BillingRequestStatus.PENDING;
    }
    get isDenied() {
        return this.billingProfileRequestStatus === BillingRequestStatus.DENIED;
    }
    get isApproved() {
        return this.billingProfileRequestStatus === BillingRequestStatus.ENABLED;
    }
    get isBlocked() {
        return this.billingProfileRequestStatus === BillingRequestStatus.BLOCKED;
    }
}
class BillingRequestAdapter {
    adapt(item) {
        return new BillingRequestModel(item.id, item.active, item.billingProfileRequestStatus, item.corporationName, item.hasCorporateRate, item.stripeCustomerId);
    }
}
BillingRequestAdapter.ɵfac = function BillingRequestAdapter_Factory(t) { return new (t || BillingRequestAdapter)(); };
BillingRequestAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BillingRequestAdapter, factory: BillingRequestAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 53377:
/*!***************************************************!*\
  !*** ./src/app/models/booking-list-item.model.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingListItemAdapter": () => (/* binding */ BookingListItemAdapter),
/* harmony export */   "BookingListItemModel": () => (/* binding */ BookingListItemModel)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class BookingListItemModel {
    constructor(cartId, tripId, status, companyName, travelers, bookerName, startDate, endDate, price) {
        this.cartId = cartId;
        this.tripId = tripId;
        this.status = status;
        this.companyName = companyName;
        this.travelers = travelers;
        this.bookerName = bookerName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.price = price;
    }
}
class BookingListItemAdapter {
    adapt(item) {
        return new BookingListItemModel(item?.cartId, item?.tripId, item?.status, item?.companyName, item?.travelers.filter((traveler) => !!traveler), // Remove empty traveler values
        item?.bookerName, item?.startDate, item?.endDate, item?.price);
    }
}
BookingListItemAdapter.ɵfac = function BookingListItemAdapter_Factory(t) { return new (t || BookingListItemAdapter)(); };
BookingListItemAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BookingListItemAdapter, factory: BookingListItemAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 31282:
/*!*****************************************!*\
  !*** ./src/app/models/booking.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingAction": () => (/* binding */ BookingAction),
/* harmony export */   "BookingAdapter": () => (/* binding */ BookingAdapter),
/* harmony export */   "BookingMode": () => (/* binding */ BookingMode),
/* harmony export */   "BookingModel": () => (/* binding */ BookingModel),
/* harmony export */   "BookingPaymentStatus": () => (/* binding */ BookingPaymentStatus),
/* harmony export */   "BookingReferenceTypes": () => (/* binding */ BookingReferenceTypes),
/* harmony export */   "BookingType": () => (/* binding */ BookingType),
/* harmony export */   "BookingUserType": () => (/* binding */ BookingUserType),
/* harmony export */   "bookingStatusMap": () => (/* binding */ bookingStatusMap)
/* harmony export */ });
/* harmony import */ var _constants_product_type_icons_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/product-type-icons.constants */ 77975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


var BookingMode;
(function (BookingMode) {
    BookingMode["ONLINE"] = "ONLINE";
    BookingMode["OFFLINE"] = "OFFLINE";
})(BookingMode || (BookingMode = {}));
var BookingReferenceTypes;
(function (BookingReferenceTypes) {
    BookingReferenceTypes["Hotel"] = "Hotel";
    BookingReferenceTypes["Flight"] = "Flight";
    BookingReferenceTypes["Train"] = "Train";
    BookingReferenceTypes["RentalCar"] = "Rental Car";
    BookingReferenceTypes["Taxi"] = "Taxi";
    BookingReferenceTypes["Bus"] = "Bus";
})(BookingReferenceTypes || (BookingReferenceTypes = {}));
// TODO: Review these statuses and cross compare with BookingStatusV2 list, since there are a lot of differences
const bookingStatusMap = {
    DRAFT: 'Total price of trip',
    COMPLETED: 'Paid & confirmed',
    REJECTED: 'Rejected by the approver',
    FAILED: 'Failed',
    PENDING: 'Pending',
    EDITED: 'Edited',
    PAYMENT_INITIATED: 'Payment initiated',
    ORDER_PROCESSING: 'Order Processing',
    PENDING_APPROVAL: 'Pending Approval',
    INTERNAL_ERROR: 'Booking issue - contact customer support',
};
var BookingUserType;
(function (BookingUserType) {
    BookingUserType["ADMINISTRATOR"] = "ADMINISTRATOR";
    BookingUserType["PROVIDER"] = "PROVIDER";
    BookingUserType["CUSTOMER"] = "CUSTOMER";
    BookingUserType["AGENT"] = "AGENT";
})(BookingUserType || (BookingUserType = {}));
var BookingAction;
(function (BookingAction) {
    BookingAction["CANCELLABLE"] = "CANCELLABLE";
    BookingAction["NONE"] = "NONE";
    BookingAction["DELETABLE"] = "DELETABLE";
    BookingAction["REFUNDABLE"] = "REFUNDABLE";
})(BookingAction || (BookingAction = {}));
var BookingType;
(function (BookingType) {
    BookingType["CM_BOOKING"] = "CM_BOOKING";
    BookingType["FLIGHT"] = "FLIGHT";
    BookingType["TRAIN"] = "TRAIN";
    BookingType["GENERICPRODUCT"] = "GENERICPRODUCT";
    BookingType["TAXI"] = "TAXI";
    BookingType["CAR"] = "CAR";
})(BookingType || (BookingType = {}));
var BookingPaymentStatus;
(function (BookingPaymentStatus) {
    BookingPaymentStatus["UNPAID"] = "UNPAID";
    BookingPaymentStatus["RESERVED"] = "RESERVED";
    BookingPaymentStatus["COMPLETED"] = "COMPLETED";
    BookingPaymentStatus["REFUNDED"] = "REFUNDED";
    BookingPaymentStatus["NONE"] = "NONE";
})(BookingPaymentStatus || (BookingPaymentStatus = {}));
class BookingModel {
    constructor(cartId, tripId, tripName, status, company, booker, travelers, productTypes, numberOfItems, startDate, endDate, agentNote) {
        this.cartId = cartId;
        this.tripId = tripId;
        this.tripName = tripName;
        this.status = status;
        this.company = company;
        this.booker = booker;
        this.travelers = travelers;
        this.productTypes = productTypes;
        this.numberOfItems = numberOfItems;
        this.startDate = startDate;
        this.endDate = endDate;
        this.agentNote = agentNote;
    }
    /**
     * Due to some CI issue sometimes BE will return a traveller where all the values are null
     * including the name. We want to filter those travelers out.
     */
    allTravelers() {
        return this.travelers.filter((item) => item.name);
    }
    /**
     * Return only list of valid traveler profiles identified by ID
     * Also keep the list unique by comparing the ID
     */
    travelerProfiles() {
        return this.allTravelers()
            .filter((item) => item.id)
            .reduce((travelers, traveler) => {
            // Filter out duplicate travelers by comparing traveler ID
            if (!travelers.some((item) => item.id === traveler.id)) {
                travelers.push(traveler);
            }
            return travelers;
        }, []);
    }
    productIcon(product) {
        return _constants_product_type_icons_constants__WEBPACK_IMPORTED_MODULE_0__.productTypeIconsMap[product?.toLowerCase()] || _constants_product_type_icons_constants__WEBPACK_IMPORTED_MODULE_0__.productTypeIconsMap["default"];
    }
}
class BookingAdapter {
    adapt(item) {
        return new BookingModel(item?.cartId, item?.tripId, item?.tripName, item?.status, item?.company, item?.booker, item?.travelers || [], item?.productTypes || [], item?.numberOfItems, item?.startDate, item?.endDate, item?.agentNote);
    }
}
BookingAdapter.ɵfac = function BookingAdapter_Factory(t) { return new (t || BookingAdapter)(); };
BookingAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BookingAdapter, factory: BookingAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 96133:
/*!***********************************************************!*\
  !*** ./src/app/models/cart-items/flight-booking.model.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlightBookingAdapter": () => (/* binding */ FlightBookingAdapter),
/* harmony export */   "FlightBookingModel": () => (/* binding */ FlightBookingModel)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 66579);
/* harmony import */ var _flight_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flight.model */ 5135);
/* harmony import */ var _flight_traveler_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flight-traveler.model */ 47414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class FlightBookingModel {
    constructor(id, totalPrice, currency, co2EmissionInGrams, departingFlightDeparture, departingFlightDuration, arrivingFlightDuration, numberOfStops, flights, travelers, bookingReference, status, action, paymentStatus, hasExchange, exchanged, packageId) {
        this.id = id;
        this.totalPrice = totalPrice;
        this.currency = currency;
        this.co2EmissionInGrams = co2EmissionInGrams;
        this.departingFlightDeparture = departingFlightDeparture;
        this.departingFlightDuration = departingFlightDuration;
        this.arrivingFlightDuration = arrivingFlightDuration;
        this.numberOfStops = numberOfStops;
        this.flights = flights;
        this.travelers = travelers;
        this.bookingReference = bookingReference;
        this.status = status;
        this.action = action;
        this.paymentStatus = paymentStatus;
        this.hasExchange = hasExchange;
        this.exchanged = exchanged;
        this.packageId = packageId;
    }
    get firstFlight() {
        return this.flights[0];
    }
    get lastFlight() {
        return this.flights[this.flights.length - 1];
    }
    // Get all segments in one place. Useful when we need to quickly filter through all flight segments
    get segments() {
        return this.flights.flatMap(({ segments }) => segments);
    }
}
class FlightBookingAdapter {
    adapt(item) {
        return new FlightBookingModel(item?.id, item?.totalPrice, item?.currency, item?.co2EmissionInGrams, item?.departingFlightDeparture, item?.departingFlightDuration, item?.arrivingFlightDuration, item?.numberOfStops, (item?.flights || [])
            .map((item) => new _flight_model__WEBPACK_IMPORTED_MODULE_0__.FlightAdapter().adapt(item))
            .sort((a, b) => {
            // BE can return flights in random order, so we need to make sure they are always sorted by date
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(a.firstSegment.departure.time), new Date(b.firstSegment.departure.time));
        }), (item?.travelers || []).map((item) => new _flight_traveler_model__WEBPACK_IMPORTED_MODULE_1__.FlightTravelerAdapter().adapt(item)), item?.bookingReference, item?.status, item?.action, item?.paymentStatus, item?.hasExchange, item?.exchanged, item?.packageId);
    }
}
FlightBookingAdapter.ɵfac = function FlightBookingAdapter_Factory(t) { return new (t || FlightBookingAdapter)(); };
FlightBookingAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: FlightBookingAdapter, factory: FlightBookingAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 47414:
/*!************************************************************!*\
  !*** ./src/app/models/cart-items/flight-traveler.model.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlightTravelerAdapter": () => (/* binding */ FlightTravelerAdapter),
/* harmony export */   "FlightTravelerModel": () => (/* binding */ FlightTravelerModel)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class FlightTravelerModel {
    constructor(id, userId, title, firstName, lastName, middleName, birthday, loyaltyCardProvider, loyaltyCardNumber, email, emailConfirmation, travelerType, flightTickets, costCenterId, addons, exchanged, travelerReferenceFields) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.birthday = birthday;
        this.loyaltyCardProvider = loyaltyCardProvider;
        this.loyaltyCardNumber = loyaltyCardNumber;
        this.email = email;
        this.emailConfirmation = emailConfirmation;
        this.travelerType = travelerType;
        this.flightTickets = flightTickets;
        this.costCenterId = costCenterId;
        this.addons = addons;
        this.exchanged = exchanged;
        this.travelerReferenceFields = travelerReferenceFields;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class FlightTravelerAdapter {
    adapt(item) {
        return new FlightTravelerModel(item?.id, item?.userId, item?.title, item?.firstName, item?.lastName, item?.middleName, item?.birthday, item?.loyaltyCardProvider, item?.loyaltyCardNumber, item?.email, item?.emailConfirmation, item?.travelerType, item?.flightTickets, item?.costCenterId, item?.addons, item?.exchanged, item?.travelerReferenceFields);
    }
}
FlightTravelerAdapter.ɵfac = function FlightTravelerAdapter_Factory(t) { return new (t || FlightTravelerAdapter)(); };
FlightTravelerAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FlightTravelerAdapter, factory: FlightTravelerAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5135:
/*!***************************************************!*\
  !*** ./src/app/models/cart-items/flight.model.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlightAdapter": () => (/* binding */ FlightAdapter),
/* harmony export */   "FlightModel": () => (/* binding */ FlightModel)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class FlightModel {
    constructor(duration, co2EmissionInGrams, segments) {
        this.duration = duration;
        this.co2EmissionInGrams = co2EmissionInGrams;
        this.segments = segments;
    }
    get firstSegment() {
        return this.segments[0];
    }
    get lastSegment() {
        return this.segments[this.segments.length - 1];
    }
    get cabinClassLabel() {
        // Get unique cabin classes from all segments
        const classes = [...new Set(this.segments.map((segment) => segment.cabinClass))];
        if (classes.length === 1)
            return classes[0];
        return `${classes[0]} + ${classes.length - 1}`;
    }
    get marketingAirlineLabel() {
        // Get unique airline names from all segments
        const airlines = [...new Set(this.segments.map((segment) => segment.marketingAirline.name))];
        if (airlines.length === 1)
            return airlines[0];
        return `${airlines[0]} + ${airlines.length - 1}`;
    }
    get midSegments() {
        return this.segments.slice(1, -1);
    }
}
class FlightAdapter {
    adapt(item) {
        return new FlightModel(item?.duration, item?.co2EmissionInGrams, item?.segments);
    }
}
FlightAdapter.ɵfac = function FlightAdapter_Factory(t) { return new (t || FlightAdapter)(); };
FlightAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FlightAdapter, factory: FlightAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 13269:
/*!********************************************************************!*\
  !*** ./src/app/models/cart-items/generic-product-booking.model.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericProductAdapter": () => (/* binding */ GenericProductAdapter),
/* harmony export */   "GenericProductModel": () => (/* binding */ GenericProductModel),
/* harmony export */   "genericProductTypeMap": () => (/* binding */ genericProductTypeMap)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 8210);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


const genericProductTypeMap = {
    GP_FIT_FLIGHTS: 'FIT Flights',
    GP_FIT_HOTELROOM: 'FIT Hotelroom',
    GP_FIT_TRAIN: 'FIT Train',
    GP_FIT_OTHER: 'FIT Other',
    GP_GROUP_FLIGHTS: 'GROUP (9+) Flights',
    GP_GROUP_HOTELROOM: 'GROUP (9+) Hotelroom',
    GP_GROUP_TRAIN: 'GROUP (9+) Train',
    GP_GROUP_OTHER: 'GROUP (9+) Other',
    GP_SAAS: 'Saas',
};
class GenericProductModel {
    constructor(name, description, category, categoryId, productId, productName, requestId, paymentCategory, productType, bookingReferenceId, vendorId, transactionSalesModel, paymentDate, requestedCheckIn, requestedCheckOut, netCost, purchaseCost, currency, purchaseCurrency, countryCode, countryName, posCountryCode, type, createdByDTO, status, action, paymentStatus, customer, customerId, travelId) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.categoryId = categoryId;
        this.productId = productId;
        this.productName = productName;
        this.requestId = requestId;
        this.paymentCategory = paymentCategory;
        this.productType = productType;
        this.bookingReferenceId = bookingReferenceId;
        this.vendorId = vendorId;
        this.transactionSalesModel = transactionSalesModel;
        this.paymentDate = paymentDate;
        this.requestedCheckIn = requestedCheckIn;
        this.requestedCheckOut = requestedCheckOut;
        this.netCost = netCost;
        this.purchaseCost = purchaseCost;
        this.currency = currency;
        this.purchaseCurrency = purchaseCurrency;
        this.countryCode = countryCode;
        this.countryName = countryName;
        this.posCountryCode = posCountryCode;
        this.type = type;
        this.createdByDTO = createdByDTO;
        this.status = status;
        this.action = action;
        this.paymentStatus = paymentStatus;
        this.customer = customer;
        this.customerId = customerId;
        this.travelId = travelId;
    }
    get productTypeLabel() {
        return genericProductTypeMap[this.productType];
    }
    get totalStay() {
        // We are counting days here, not nights, so we have to increase the result by +1
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(this.requestedCheckOut), new Date(this.requestedCheckIn)) + 1;
    }
    get bookingReference() {
        return this.bookingReferenceId;
    }
}
class GenericProductAdapter {
    adapt(item) {
        return new GenericProductModel(item?.name, item?.description, item?.category, item?.categoryId, item?.productId, item?.productName, item?.requestId, item?.paymentCategory, item?.productType, item?.bookingReferenceId, item?.vendorId, item?.transactionSalesModel, item?.paymentDate, item?.requestedCheckIn, item?.requestedCheckOut, item?.netCost, item?.purchaseCost, item?.currency, item?.purchaseCurrency, item?.countryCode, item?.countryName, item?.posCountryCode, item?.type, item?.createdByDTO, item?.status, item?.action || [], item?.paymentStatus, item?.customer, item?.customerId, item?.travelId);
    }
}
GenericProductAdapter.ɵfac = function GenericProductAdapter_Factory(t) { return new (t || GenericProductAdapter)(); };
GenericProductAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GenericProductAdapter, factory: GenericProductAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 61945:
/*!**********************************************************!*\
  !*** ./src/app/models/cart-items/hotel-booking.model.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HotelBookingAdapter": () => (/* binding */ HotelBookingAdapter),
/* harmony export */   "HotelBookingModel": () => (/* binding */ HotelBookingModel),
/* harmony export */   "ReservationType": () => (/* binding */ ReservationType)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 8210);
/* harmony import */ var _hotel_room_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hotel-room.model */ 76802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



var ReservationType;
(function (ReservationType) {
    ReservationType["ID"] = "ID";
    ReservationType["PIN"] = "PIN";
})(ReservationType || (ReservationType = {}));
class HotelBookingModel {
    constructor(id, requestedCheckIn, requestedCheckOut, requestedRooms, specialRequests, locationPreferences, hotelBooker, stars, gym, pool, breakfast, requestedCurrency, requestedPrice, localTaxes, bookingAction, bookingStatus, type, cancellationPolicies, hotelDescription, paymentStatus, prePaid, refundable, corporateRate, packageId) {
        this.id = id;
        this.requestedCheckIn = requestedCheckIn;
        this.requestedCheckOut = requestedCheckOut;
        this.requestedRooms = requestedRooms;
        this.specialRequests = specialRequests;
        this.locationPreferences = locationPreferences;
        this.hotelBooker = hotelBooker;
        this.stars = stars;
        this.gym = gym;
        this.pool = pool;
        this.breakfast = breakfast;
        this.requestedCurrency = requestedCurrency;
        this.requestedPrice = requestedPrice;
        this.localTaxes = localTaxes;
        this.bookingAction = bookingAction;
        this.bookingStatus = bookingStatus;
        this.type = type;
        this.cancellationPolicies = cancellationPolicies;
        this.hotelDescription = hotelDescription;
        this.paymentStatus = paymentStatus;
        this.prePaid = prePaid;
        this.refundable = refundable;
        this.corporateRate = corporateRate;
        this.packageId = packageId;
    }
    get totalNights() {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(this.requestedCheckOut), new Date(this.requestedCheckIn));
    }
    get totalGuests() {
        return this.requestedRooms.reduce((count, room) => {
            return count + room.occupants.length;
        }, 0);
    }
    get reservationCodes() {
        return this.hotelDescription.reservationCodes;
    }
    get reservationId() {
        return this.reservationCodes?.find((code) => code.reservationType === ReservationType.ID)?.reservationCode;
    }
    get reservationPin() {
        return this.reservationCodes?.find((code) => code.reservationType === ReservationType.PIN)?.reservationCode;
    }
}
class HotelBookingAdapter {
    adapt(item) {
        return new HotelBookingModel(item?.id, item?.requestedCheckIn, item?.requestedCheckOut, (item?.requestedRooms || []).map((item) => new _hotel_room_model__WEBPACK_IMPORTED_MODULE_0__.HotelRoomAdapter().adapt(item)), item?.specialRequests, item?.locationPreferences, item?.hotelBooker, item?.stars, item?.gym, item?.pool, item?.breakfast, item?.requestedCurrency, item?.requestedPrice, item?.localTaxes, item?.bookingAction, item?.bookingStatus, item?.type, item?.cancellationPolicies, item?.hotelDescription, item?.paymentStatus, item?.prePaid, item?.refundable, item?.corporateRate, item?.packageId);
    }
}
HotelBookingAdapter.ɵfac = function HotelBookingAdapter_Factory(t) { return new (t || HotelBookingAdapter)(); };
HotelBookingAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HotelBookingAdapter, factory: HotelBookingAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 76802:
/*!*******************************************************!*\
  !*** ./src/app/models/cart-items/hotel-room.model.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HotelRoomAdapter": () => (/* binding */ HotelRoomAdapter),
/* harmony export */   "HotelRoomModel": () => (/* binding */ HotelRoomModel),
/* harmony export */   "RoomType": () => (/* binding */ RoomType)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

var RoomType;
(function (RoomType) {
    RoomType["ONE_OCCUPANT_ROOM"] = "ONE_OCCUPANT_ROOM";
    RoomType["TWO_OCCUPANTS_ROOM"] = "TWO_OCCUPANTS_ROOM";
})(RoomType || (RoomType = {}));
class HotelRoomModel {
    constructor(requestedRoomId, adults, children, infants, bedType, occupants, roomName) {
        this.requestedRoomId = requestedRoomId;
        this.adults = adults;
        this.children = children;
        this.infants = infants;
        this.bedType = bedType;
        this.occupants = occupants;
        this.roomName = roomName;
    }
    get roomType() {
        switch (this.adults) {
            case 1:
                return RoomType.ONE_OCCUPANT_ROOM;
            case 2:
                return RoomType.TWO_OCCUPANTS_ROOM;
            default:
                return undefined;
        }
    }
    get isSingleRoom() {
        return this.roomType === RoomType.ONE_OCCUPANT_ROOM;
    }
    /**
     * Some old providers like HOTELBED could not be migrated. We have to keep
     * this fallback in case we are looking at some old hotel bookings
     */
    get name() {
        if (this.roomName)
            return this.roomName;
        return this.isSingleRoom ? 'Single room' : 'Double room';
    }
}
class HotelRoomAdapter {
    adapt(item) {
        return new HotelRoomModel(item?.requestedRoomId, item?.adults, item?.children, item?.infants, item?.bedType, item?.occupants, item?.roomName);
    }
}
HotelRoomAdapter.ɵfac = function HotelRoomAdapter_Factory(t) { return new (t || HotelRoomAdapter)(); };
HotelRoomAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HotelRoomAdapter, factory: HotelRoomAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 94908:
/*!***************************************************************!*\
  !*** ./src/app/models/cart-items/rental-car-booking.model.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmountQualifier": () => (/* binding */ AmountQualifier),
/* harmony export */   "CarClass": () => (/* binding */ CarClass),
/* harmony export */   "CarCompany": () => (/* binding */ CarCompany),
/* harmony export */   "CarTransmissionType": () => (/* binding */ CarTransmissionType),
/* harmony export */   "RentalCarBookingAdapter": () => (/* binding */ RentalCarBookingAdapter),
/* harmony export */   "RentalCarBookingModel": () => (/* binding */ RentalCarBookingModel),
/* harmony export */   "carAgencyCancellationPolicyMap": () => (/* binding */ carAgencyCancellationPolicyMap)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

var CarTransmissionType;
(function (CarTransmissionType) {
    CarTransmissionType["MANUAL"] = "MANUAL GEARBOX";
    CarTransmissionType["AUTOMATIC"] = "AUTOMATIC GEARBOX";
})(CarTransmissionType || (CarTransmissionType = {}));
var CarClass;
(function (CarClass) {
    CarClass["MINI"] = "MINI";
    CarClass["ECONOMY"] = "ECONOMY";
    CarClass["COMPACT"] = "COMPACT";
    CarClass["INTERMEDIATE"] = "INTERMEDIATE";
    CarClass["STANDARD"] = "STANDARD";
    CarClass["FULL_SIZE"] = "FULL_SIZE";
    CarClass["LUXURY"] = "LUXURY";
    CarClass["OVERSIZE"] = "OVERSIZE";
})(CarClass || (CarClass = {}));
var CarCompany;
(function (CarCompany) {
    CarCompany["HERTZ"] = "HERTZ";
    CarCompany["SIXT"] = "SIXT";
    CarCompany["AVIS"] = "AVIS";
    CarCompany["EUROPCAR"] = "EUROPCAR";
})(CarCompany || (CarCompany = {}));
var AmountQualifier;
(function (AmountQualifier) {
    AmountQualifier["INCLUDED"] = "included";
    AmountQualifier["OPTIONAL"] = "optional";
})(AmountQualifier || (AmountQualifier = {}));
// TODO: This will be moved to Locize once implemented
const carAgencyCancellationPolicyMap = {
    cancellationDetails: 'Cancellation fees might apply on Corporate Rates, please contact Rental car provider',
    dayBeforePickUpTime: 'Free Cancellation with full refund up until 24 hrs before the day of pickup',
    untilPickUpTime: 'Free cancellation up until pick up time',
};
class RentalCarBookingModel {
    constructor(id, status, vehicle, carAgency, pickup, dropOff, offerPriceInfo, driver, onlyBookerConfirmation) {
        this.id = id;
        this.status = status;
        this.vehicle = vehicle;
        this.carAgency = carAgency;
        this.pickup = pickup;
        this.dropOff = dropOff;
        this.offerPriceInfo = offerPriceInfo;
        this.driver = driver;
        this.onlyBookerConfirmation = onlyBookerConfirmation;
    }
    get extras() {
        return this.offerPriceInfo[0].associatedCharges || [];
    }
    get includedExtras() {
        return this.extras.filter((item) => item.amountQualifier === AmountQualifier.INCLUDED);
    }
    get optionalExtras() {
        return this.extras.filter((item) => item.amountQualifier === AmountQualifier.OPTIONAL);
    }
    get basePrice() {
        return this.offerPriceInfo[0].ratePrice.amount || 0;
    }
    get currency() {
        return this.offerPriceInfo[0].ratePrice.currency;
    }
    get totalPrice() {
        return this.basePrice + this.optionalExtras.reduce((total, charge) => total + charge.amount, 0);
    }
    get bookingReference() {
        return this.offerPriceInfo?.[0].ratePrice?.pnrIdentifier;
    }
    get agencyLogo() {
        return `assets/car-companies-logos/${this.carAgency.name.toLowerCase()}.png`;
    }
    get hasManualTransmission() {
        return this.vehicle.transmission === CarTransmissionType.MANUAL;
    }
    get cancellationPolicy() {
        return carAgencyCancellationPolicyMap?.[this.carAgency.cancellation?.policyKey];
    }
    get cancellationRate() {
        return carAgencyCancellationPolicyMap?.[this.carAgency.cancellation?.ratePolicyKey];
    }
}
class RentalCarBookingAdapter {
    adapt(item) {
        return new RentalCarBookingModel(item?.id, item?.status, item?.vehicle, item?.carAgency, item?.pickup, item?.dropOff, item?.offerPriceInfo, item?.driver, item?.onlyBookerConfirmation);
    }
}
RentalCarBookingAdapter.ɵfac = function RentalCarBookingAdapter_Factory(t) { return new (t || RentalCarBookingAdapter)(); };
RentalCarBookingAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RentalCarBookingAdapter, factory: RentalCarBookingAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 34145:
/*!***************************************************!*\
  !*** ./src/app/models/cart-items/shared.model.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CabinClass": () => (/* binding */ CabinClass),
/* harmony export */   "TravelerType": () => (/* binding */ TravelerType),
/* harmony export */   "UserTitle": () => (/* binding */ UserTitle)
/* harmony export */ });
var UserTitle;
(function (UserTitle) {
    UserTitle["MR"] = "MR";
    UserTitle["MRS"] = "MRS";
    UserTitle["MS"] = "MS";
})(UserTitle || (UserTitle = {}));
var TravelerType;
(function (TravelerType) {
    TravelerType["ADULT"] = "ADULT";
    TravelerType["CHILD"] = "CHILD";
    TravelerType["INFANT"] = "INFANT";
})(TravelerType || (TravelerType = {}));
var CabinClass;
(function (CabinClass) {
    CabinClass["ECONOMY"] = "ECONOMY";
    CabinClass["PREMIUM"] = "PREMIUM_ECONOMY";
    CabinClass["BUSINESS"] = "BUSINESS";
    CabinClass["FIRST"] = "FIRST";
})(CabinClass || (CabinClass = {}));


/***/ }),

/***/ 39679:
/*!*********************************************************!*\
  !*** ./src/app/models/cart-items/taxi-booking.model.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaxiBookingAdapter": () => (/* binding */ TaxiBookingAdapter),
/* harmony export */   "TaxiBookingModel": () => (/* binding */ TaxiBookingModel)
/* harmony export */ });
/* harmony import */ var _flight_booking_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flight-booking.model */ 96133);
/* harmony import */ var _train_booking_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./train-booking.model */ 17642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class TaxiBookingModel {
    constructor(id, status, bookingReference, type, start, end, taxiType, transferType, serviceProvider, offerId, vehicle, travelers, cancellationPolicies, price, items, bookingId, segmentId, stationName, fromStation) {
        this.id = id;
        this.status = status;
        this.bookingReference = bookingReference;
        this.type = type;
        this.start = start;
        this.end = end;
        this.taxiType = taxiType;
        this.transferType = transferType;
        this.serviceProvider = serviceProvider;
        this.offerId = offerId;
        this.vehicle = vehicle;
        this.travelers = travelers;
        this.cancellationPolicies = cancellationPolicies;
        this.price = price;
        this.items = items;
        this.bookingId = bookingId;
        this.segmentId = segmentId;
        this.stationName = stationName;
        this.fromStation = fromStation;
    }
    get pickupLocation() {
        return this.fromStation
            ? `${this.stationName}, ${this.start.locationCode}`
            : `${this.start.address}, ${this.start.city}`;
    }
    get dropOffLocation() {
        return this.fromStation ? `${this.end.address}, ${this.end.city}` : `${this.stationName}, ${this.end.locationCode}`;
    }
}
class TaxiBookingAdapter {
    adapt(item, bookings) {
        const fromStation = !!item.start.locationCode;
        const stationName = this.getStationName(item, bookings, fromStation);
        return new TaxiBookingModel(item?.id, item?.status, item?.bookingReference, item?.type, item?.start, item?.end, item?.taxiType, item?.transferType, item?.serviceProvider, item?.offerId, item?.vehicle, item?.travelers, item?.cancellationPolicies, item?.price, item?.items, item?.bookingId, item?.segmentId, stationName, fromStation);
    }
    getStationName(item, bookings, fromStation) {
        const booking = bookings.find(({ id }) => id === item.bookingId);
        // Flight taxi
        if (booking instanceof _flight_booking_model__WEBPACK_IMPORTED_MODULE_0__.FlightBookingModel) {
            const segment = booking.segments.find((segment) => segment.id === item.segmentId);
            if (segment) {
                return fromStation ? segment.arrival.airportName : segment.departure.airportName;
            }
        }
        // Train taxi
        if (booking instanceof _train_booking_model__WEBPACK_IMPORTED_MODULE_1__.TrainBookingModel) {
            const segment = booking.segments.find((segment) => segment.uniqueSegmentId === item.segmentId);
            if (segment) {
                return fromStation ? segment.arrivalLocationName : segment.departureLocationName;
            }
        }
        return undefined;
    }
}
TaxiBookingAdapter.ɵfac = function TaxiBookingAdapter_Factory(t) { return new (t || TaxiBookingAdapter)(); };
TaxiBookingAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TaxiBookingAdapter, factory: TaxiBookingAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 17642:
/*!**********************************************************!*\
  !*** ./src/app/models/cart-items/train-booking.model.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainBookingAdapter": () => (/* binding */ TrainBookingAdapter),
/* harmony export */   "TrainBookingModel": () => (/* binding */ TrainBookingModel)
/* harmony export */ });
/* harmony import */ var _train_journey_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./train-journey.model */ 60128);
/* harmony import */ var _train_traveler_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./train-traveler.model */ 21691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class TrainBookingModel {
    constructor(id, preOrderId, status, bookingReference, booker, rebookable, refundable, dynamicCancellationPolicy, cancelable, travellers, journeys, subTotalPrice, bookingMode, co2EmissionInGrams, integrationFee) {
        this.id = id;
        this.preOrderId = preOrderId;
        this.status = status;
        this.bookingReference = bookingReference;
        this.booker = booker;
        this.rebookable = rebookable;
        this.refundable = refundable;
        this.dynamicCancellationPolicy = dynamicCancellationPolicy;
        this.cancelable = cancelable;
        this.travellers = travellers;
        this.journeys = journeys;
        this.subTotalPrice = subTotalPrice;
        this.bookingMode = bookingMode;
        this.co2EmissionInGrams = co2EmissionInGrams;
        this.integrationFee = integrationFee;
    }
    get firstJourney() {
        return this.journeys[0];
    }
    // Get all segments in one place. Useful when we need to quickly filter through all train segments
    get segments() {
        return this.journeys.flatMap(({ itineraries }) => itineraries.flatMap(({ segments }) => segments));
    }
}
class TrainBookingAdapter {
    adapt(item) {
        return new TrainBookingModel(item?.id, item?.preOrderId, item?.status, item?.bookingReference, item?.booker, item?.rebookable, item?.refundable, item?.dynamicCancellationPolicy, item?.cancelable, (item?.travellers || []).map((item) => new _train_traveler_model__WEBPACK_IMPORTED_MODULE_1__.TrainTravelerAdapter().adapt(item)), (item?.journeys || []).map((item) => new _train_journey_model__WEBPACK_IMPORTED_MODULE_0__.TrainJourneyAdapter().adapt(item)), item?.subTotalPrice, item?.bookingMode, item?.co2EmissionInGrams, item?.integrationFee);
    }
}
TrainBookingAdapter.ɵfac = function TrainBookingAdapter_Factory(t) { return new (t || TrainBookingAdapter)(); };
TrainBookingAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TrainBookingAdapter, factory: TrainBookingAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 36454:
/*!*****************************************************************************!*\
  !*** ./src/app/models/cart-items/train-journey-intinerary-segment.model.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItineraryPriceGroup": () => (/* binding */ ItineraryPriceGroup),
/* harmony export */   "TrainJourneyItinerarySegmentAdapter": () => (/* binding */ TrainJourneyItinerarySegmentAdapter),
/* harmony export */   "TrainJourneyItinerarySegmentModel": () => (/* binding */ TrainJourneyItinerarySegmentModel)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 86527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


var ItineraryPriceGroup;
(function (ItineraryPriceGroup) {
    ItineraryPriceGroup["FIRST_CLASS"] = "1 class";
    ItineraryPriceGroup["SECOND_CLASS"] = "2 class";
    ItineraryPriceGroup["SEAT"] = "Seat";
})(ItineraryPriceGroup || (ItineraryPriceGroup = {}));
class TrainJourneyItinerarySegmentModel {
    constructor(segmentId, uniqueSegmentId, transportInformation, departureDateTime, departureLocationName, departureLocationNameLong, departureTaxiOption, departureStationCode, arrivalDateTime, arrivalLocationName, arrivalLocationNameLong, arrivalTaxiOption, arrivalStationCode, travelMethod, productCode, transportId, segmentProducer, serviceBrandName, duration, bookingClass, layover) {
        this.segmentId = segmentId;
        this.uniqueSegmentId = uniqueSegmentId;
        this.transportInformation = transportInformation;
        this.departureDateTime = departureDateTime;
        this.departureLocationName = departureLocationName;
        this.departureLocationNameLong = departureLocationNameLong;
        this.departureTaxiOption = departureTaxiOption;
        this.departureStationCode = departureStationCode;
        this.arrivalDateTime = arrivalDateTime;
        this.arrivalLocationName = arrivalLocationName;
        this.arrivalLocationNameLong = arrivalLocationNameLong;
        this.arrivalTaxiOption = arrivalTaxiOption;
        this.arrivalStationCode = arrivalStationCode;
        this.travelMethod = travelMethod;
        this.productCode = productCode;
        this.transportId = transportId;
        this.segmentProducer = segmentProducer;
        this.serviceBrandName = serviceBrandName;
        this.duration = duration;
        this.bookingClass = bookingClass;
        this.layover = layover;
    }
}
class TrainJourneyItinerarySegmentAdapter {
    adapt(item, nextItem) {
        return new TrainJourneyItinerarySegmentModel(item?.segmentId, item?.uniqueSegmentId, item?.transportInformation, item?.departureDateTime, item?.departureLocationName, item?.departureLocationNameLong, item?.departureTaxiOption, item?.departureStationCode, item?.arrivalDateTime, item?.arrivalLocationName, item?.arrivalLocationNameLong, item?.arrivalTaxiOption, item?.arrivalStationCode, item?.travelMethod, item?.productCode, item?.transportId, item?.segmentProducer, item?.serviceBrandName, item?.duration, item?.bookingClass, this.getLayover(item, nextItem));
    }
    getLayover(item, nextItem) {
        if (!nextItem)
            return null;
        // Get time difference between this segment and the next segment
        const start = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(item.arrivalDateTime).getTime();
        const end = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(nextItem.departureDateTime).getTime();
        const duration = end - start;
        if (!duration)
            return null;
        return {
            // milliseconds to minutes
            duration: duration ? Math.floor(duration / (60 * 1000)) : 0,
            location: item.arrivalLocationName,
        };
    }
}
TrainJourneyItinerarySegmentAdapter.ɵfac = function TrainJourneyItinerarySegmentAdapter_Factory(t) { return new (t || TrainJourneyItinerarySegmentAdapter)(); };
TrainJourneyItinerarySegmentAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TrainJourneyItinerarySegmentAdapter, factory: TrainJourneyItinerarySegmentAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 98781:
/*!*********************************************************************!*\
  !*** ./src/app/models/cart-items/train-journey-intinerary.model.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainJourneyItineraryAdapter": () => (/* binding */ TrainJourneyItineraryAdapter),
/* harmony export */   "TrainJourneyItineraryModel": () => (/* binding */ TrainJourneyItineraryModel)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 86527);
/* harmony import */ var _train_journey_intinerary_segment_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./train-journey-intinerary-segment.model */ 36454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class TrainJourneyItineraryModel {
    constructor(itineraryId, priceGroupType, segments, layover) {
        this.itineraryId = itineraryId;
        this.priceGroupType = priceGroupType;
        this.segments = segments;
        this.layover = layover;
    }
    get firstSegment() {
        return this.segments[0];
    }
    get lastSegment() {
        return this.segments[this.segments.length - 1];
    }
    get itineraryClassLabel() {
        switch (this.priceGroupType) {
            case _train_journey_intinerary_segment_model__WEBPACK_IMPORTED_MODULE_0__.ItineraryPriceGroup.FIRST_CLASS:
                return '1st class';
            case _train_journey_intinerary_segment_model__WEBPACK_IMPORTED_MODULE_0__.ItineraryPriceGroup.SECOND_CLASS:
                return '2nd class';
            default:
                return this.priceGroupType;
        }
    }
}
class TrainJourneyItineraryAdapter {
    adapt(item, nextItem) {
        return new TrainJourneyItineraryModel(item?.itineraryId, item?.priceGroupType, (item?.segments || []).map((segment, index) => {
            return new _train_journey_intinerary_segment_model__WEBPACK_IMPORTED_MODULE_0__.TrainJourneyItinerarySegmentAdapter().adapt(segment, item.segments?.[index + 1]);
        }), this.getLayover(item, nextItem));
    }
    getLayover(item, nextItem) {
        if (!nextItem)
            return null;
        // Get time difference between last segment from the current itinerary
        // and the first segment from the next itinerary
        const start = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(item.segments[item.segments.length - 1].arrivalDateTime).getTime();
        const end = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(nextItem.segments[0].departureDateTime).getTime();
        const duration = end - start;
        if (!duration)
            return null;
        return {
            // milliseconds to minutes
            duration: duration ? Math.floor(duration / (60 * 1000)) : 0,
            location: item.segments[item.segments.length - 1].arrivalLocationName,
        };
    }
}
TrainJourneyItineraryAdapter.ɵfac = function TrainJourneyItineraryAdapter_Factory(t) { return new (t || TrainJourneyItineraryAdapter)(); };
TrainJourneyItineraryAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TrainJourneyItineraryAdapter, factory: TrainJourneyItineraryAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 60128:
/*!**********************************************************!*\
  !*** ./src/app/models/cart-items/train-journey.model.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JourneyDirection": () => (/* binding */ JourneyDirection),
/* harmony export */   "TrainJourneyAdapter": () => (/* binding */ TrainJourneyAdapter),
/* harmony export */   "TrainJourneyModel": () => (/* binding */ TrainJourneyModel)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 86527);
/* harmony import */ var _train_journey_intinerary_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./train-journey-intinerary.model */ 98781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



var JourneyDirection;
(function (JourneyDirection) {
    JourneyDirection["IN"] = "IN";
    JourneyDirection["OUT"] = "OUT";
})(JourneyDirection || (JourneyDirection = {}));
class TrainJourneyModel {
    constructor(journeyAdviceId, direction, itineraries) {
        this.journeyAdviceId = journeyAdviceId;
        this.direction = direction;
        this.itineraries = itineraries;
    }
    get firstItinerary() {
        return this.itineraries[0];
    }
    get lastItinerary() {
        return this.itineraries[this.itineraries.length - 1];
    }
    get firstSegment() {
        return this.firstItinerary.firstSegment;
    }
    get lastSegment() {
        return this.lastItinerary.lastSegment;
    }
    get totalDuration() {
        if (!this.itineraries.length)
            return 0;
        const start = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(this.firstSegment.departureDateTime).getTime();
        const end = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(this.lastSegment.arrivalDateTime).getTime();
        const duration = end - start;
        // milliseconds to minutes
        return duration ? Math.floor(duration / (60 * 1000)) : 0;
    }
    get operatedByLabel() {
        // Get all unique operators from all different itinerary segments
        const operators = new Set(this.itineraries
            .reduce((operators, itinerary) => {
            return [...operators, ...itinerary.segments.map((segment) => segment.segmentProducer)];
        }, [])
            .filter(Boolean));
        return operators.size > 1
            ? `${operators.values().next().value} +${operators.size - 1}`
            : operators.values().next().value;
    }
    get itineraryClassLabel() {
        // Get all unique itinerary class labels
        const labels = new Set(this.itineraries
            .reduce((labels, itinerary) => {
            return [...labels, itinerary.itineraryClassLabel];
        }, [])
            .filter(Boolean));
        return labels.size > 1 ? `${labels.values().next().value} +${labels.size - 1}` : labels.values().next().value;
    }
}
class TrainJourneyAdapter {
    adapt(item) {
        return new TrainJourneyModel(item?.journeyAdviceId, item?.direction, (item?.itineraries || []).map((itinerary, index) => {
            return new _train_journey_intinerary_model__WEBPACK_IMPORTED_MODULE_0__.TrainJourneyItineraryAdapter().adapt(itinerary, item.itineraries?.[index + 1]);
        }));
    }
}
TrainJourneyAdapter.ɵfac = function TrainJourneyAdapter_Factory(t) { return new (t || TrainJourneyAdapter)(); };
TrainJourneyAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TrainJourneyAdapter, factory: TrainJourneyAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 21691:
/*!***********************************************************!*\
  !*** ./src/app/models/cart-items/train-traveler.model.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddonRequestType": () => (/* binding */ AddonRequestType),
/* harmony export */   "AddonStatus": () => (/* binding */ AddonStatus),
/* harmony export */   "AddonType": () => (/* binding */ AddonType),
/* harmony export */   "TrainTravelerAdapter": () => (/* binding */ TrainTravelerAdapter),
/* harmony export */   "TrainTravelerModel": () => (/* binding */ TrainTravelerModel)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

// TODO: populate enum with other types of addon types received from the BE
var AddonRequestType;
(function (AddonRequestType) {
    AddonRequestType["TRAIN_ADDON"] = "TRAIN_ADDON";
})(AddonRequestType || (AddonRequestType = {}));
var AddonType;
(function (AddonType) {
    AddonType["SEAT"] = "SEAT";
    AddonType["SEATING"] = "SEATING";
    AddonType["OPTION"] = "OPTION";
})(AddonType || (AddonType = {}));
// TODO: populate enum with other addon statuses received from the BE
var AddonStatus;
(function (AddonStatus) {
    AddonStatus["BOOKED"] = "BOOKED";
})(AddonStatus || (AddonStatus = {}));
class TrainTravelerModel {
    constructor(id, travellerNumber, firstName, lastName, email, phoneNumber, optionSelections, seatingSelections, addons, userId, costCenterId, travelerReferenceFields) {
        this.id = id;
        this.travellerNumber = travellerNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.optionSelections = optionSelections;
        this.seatingSelections = seatingSelections;
        this.addons = addons;
        this.userId = userId;
        this.costCenterId = costCenterId;
        this.travelerReferenceFields = travelerReferenceFields;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    get seatingSelectionDescription() {
        return this.seatingSelections?.[0]?.description || '';
    }
    get allOptionSelections() {
        return this.optionSelections
            .reduce((options, selection) => {
            options.push(selection.type);
            return options;
        }, [])
            .join(', ');
    }
    segmentSeatingSelection(journeyId, itineraryId, segmentId) {
        return (this.seatingSelections.find((item) => {
            return item.journeyId === journeyId && item.itineraryId === itineraryId && item.segmentId === segmentId;
        })?.description || '');
    }
    segmentOptionSelection(journeyId, itineraryId, segmentId) {
        return this.optionSelections
            .filter((item) => {
            return item.journeyId === journeyId && item.itineraryId === itineraryId && item.segmentId === segmentId;
        })
            .reduce((options, selection) => {
            options.push(selection.type);
            return options;
        }, [])
            .join(', ');
    }
}
class TrainTravelerAdapter {
    adapt(item) {
        return new TrainTravelerModel(item?.id, item?.travellerNumber, item?.firstName, item?.lastName, item?.email, item?.phoneNumber, item?.optionSelections, item?.seatingSelections, item?.addons, item?.userId, item?.costCenterId, item?.travelerReferenceFields);
    }
}
TrainTravelerAdapter.ɵfac = function TrainTravelerAdapter_Factory(t) { return new (t || TrainTravelerAdapter)(); };
TrainTravelerAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TrainTravelerAdapter, factory: TrainTravelerAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 71269:
/*!**************************************!*\
  !*** ./src/app/models/cart.model.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartAdapter": () => (/* binding */ CartAdapter),
/* harmony export */   "CartModel": () => (/* binding */ CartModel)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 66579);
/* harmony import */ var _cart_items_taxi_booking_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-items/taxi-booking.model */ 39679);
/* harmony import */ var _cart_items_hotel_booking_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-items/hotel-booking.model */ 61945);
/* harmony import */ var _booking_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking.model */ 31282);
/* harmony import */ var _cart_items_train_booking_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-items/train-booking.model */ 17642);
/* harmony import */ var _cart_items_generic_product_booking_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-items/generic-product-booking.model */ 13269);
/* harmony import */ var _constants_payment_status_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/payment-status.constants */ 62651);
/* harmony import */ var _cart_items_flight_booking_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart-items/flight-booking.model */ 96133);
/* harmony import */ var _cart_items_rental_car_booking_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart-items/rental-car-booking.model */ 94908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);










class CartModel {
    constructor(id, customerId, travelReference, actionStates, status, tripId, tripName, additionalTripName, requestApprovalDueDate, cartApprovers, startDate, endDate, price, payments, paymentMethod, receiptAvailable, bids, ibs, packages, gps, gos, tickets, flightBookings, taxiBookings, genericProducts, trainBookings, rentalCarBookings, labels, outOfPolicyChecker, createdById, createdByType, createdAt, yourReference, currentOrder) {
        this.id = id;
        this.customerId = customerId;
        this.travelReference = travelReference;
        this.actionStates = actionStates;
        this.status = status;
        this.tripId = tripId;
        this.tripName = tripName;
        this.additionalTripName = additionalTripName;
        this.requestApprovalDueDate = requestApprovalDueDate;
        this.cartApprovers = cartApprovers;
        this.startDate = startDate;
        this.endDate = endDate;
        this.price = price;
        this.payments = payments;
        this.paymentMethod = paymentMethod;
        this.receiptAvailable = receiptAvailable;
        this.bids = bids;
        this.ibs = ibs;
        this.packages = packages;
        this.gps = gps;
        this.gos = gos;
        this.tickets = tickets;
        this.flightBookings = flightBookings;
        this.taxiBookings = taxiBookings;
        this.genericProducts = genericProducts;
        this.trainBookings = trainBookings;
        this.rentalCarBookings = rentalCarBookings;
        this.labels = labels;
        this.outOfPolicyChecker = outOfPolicyChecker;
        this.createdById = createdById;
        this.createdByType = createdByType;
        this.createdAt = createdAt;
        this.yourReference = yourReference;
        this.currentOrder = currentOrder;
    }
    get tripStatus() {
        return _booking_model__WEBPACK_IMPORTED_MODULE_2__.bookingStatusMap[this.status];
    }
    get cartPaymentStatus() {
        if (this.isCompletedByAgent)
            return _constants_payment_status_constants__WEBPACK_IMPORTED_MODULE_5__.PaymentStatus.COMPLETED_BY_AGENT;
        // TODO: Implement isDifferentPaymentTypeBookings handle here
        //  Reference: src/app/trip/components/cart-payment-section/cart-payment-section.component.ts
        //  Method: getCartPaymentStatus()
        return _constants_payment_status_constants__WEBPACK_IMPORTED_MODULE_5__.PaymentStatus[this.status];
    }
    get isCreatedByAgent() {
        return this.createdByType === _booking_model__WEBPACK_IMPORTED_MODULE_2__.BookingUserType.AGENT;
    }
    get isCompletedByAgent() {
        return this.isCreatedByAgent && this.status === _constants_payment_status_constants__WEBPACK_IMPORTED_MODULE_5__.PaymentStatus.COMPLETED;
    }
    get invoiceSentToAdmin() {
        return this.status === _constants_payment_status_constants__WEBPACK_IMPORTED_MODULE_5__.PaymentStatus.COMPLETED && this.paymentMethod === 'PERSONAL_CREDIT_CARD';
    }
}
class CartAdapter {
    adapt(item) {
        const flightBookingModels = this.adaptFlights(item);
        const trainBookingModels = this.adaptTrains(item);
        return new CartModel(item?.id, item?.customerId, item?.travelReference, item?.actionStates || [], item?.status, item?.tripId, item?.tripName, item?.additionalTripName, item?.requestApprovalDueDate, item?.cartApprovers || [], item?.startDate, item?.endDate, item?.price, item?.payments, item?.paymentMethod, item?.receiptAvailable, item?.bids, item?.ibs, item?.packages, this.adaptHotels(item), item?.gos, item?.tickets, flightBookingModels, this.adaptTaxis(item, [...flightBookingModels, ...trainBookingModels]), this.adaptGenericProducts(item), trainBookingModels, this.adaptRentalCars(item), item?.labels, item?.outOfPolicyChecker, item?.createdById, item?.createdByType, item?.createdAt, item?.yourReference, item?.currentOrder);
    }
    adaptHotels(item) {
        const hotels = item?.gps || [];
        item.packages?.forEach((packageBooking) => {
            if (packageBooking.hotel) {
                hotels.push({
                    ...packageBooking.hotel,
                    requestedPrice: packageBooking.requestedPrice,
                    packageId: packageBooking.id,
                });
            }
        });
        return hotels.map((item) => new _cart_items_hotel_booking_model__WEBPACK_IMPORTED_MODULE_1__.HotelBookingAdapter().adapt(item));
    }
    adaptRentalCars(item) {
        return (item?.rentalCarBookings || [])
            .map((item) => new _cart_items_rental_car_booking_model__WEBPACK_IMPORTED_MODULE_7__.RentalCarBookingAdapter().adapt(item))
            .sort((a, b) => {
            // BE can return rental cars in random order, so we need to make sure they are always sorted by date
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(a.pickup.dateAndTime), new Date(b.pickup.dateAndTime));
        });
    }
    adaptTrains(item) {
        return (item?.trainBookings || [])
            .map((item) => new _cart_items_train_booking_model__WEBPACK_IMPORTED_MODULE_3__.TrainBookingAdapter().adapt(item))
            .sort((a, b) => {
            // BE will return train journeys in random order, so we need to make sure they are always sorted by date
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(a.firstJourney.firstSegment.departureDateTime), new Date(b.firstJourney.firstSegment.departureDateTime));
        });
    }
    adaptGenericProducts(item) {
        return (item?.genericProducts || []).map((item) => new _cart_items_generic_product_booking_model__WEBPACK_IMPORTED_MODULE_4__.GenericProductAdapter().adapt(item));
    }
    adaptTaxis(item, bookingModels) {
        return (item?.taxiBookings || [])
            .map((item) => new _cart_items_taxi_booking_model__WEBPACK_IMPORTED_MODULE_0__.TaxiBookingAdapter().adapt(item, bookingModels))
            .sort((a, b) => {
            // BE will return taxi journeys in random order, so we need to make sure they are always sorted by date
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(a.start.datetime), new Date(b.start.datetime));
        });
    }
    adaptFlights(item) {
        const flights = item?.flightBookings || [];
        item.packages?.forEach((packageBooking) => {
            packageBooking.flights.forEach((flightBooking) => {
                flights.push({
                    ...flightBooking,
                    totalPrice: packageBooking.requestedPrice,
                    packageId: packageBooking.id,
                });
            });
        });
        return flights
            .map((item) => new _cart_items_flight_booking_model__WEBPACK_IMPORTED_MODULE_6__.FlightBookingAdapter().adapt(item))
            .sort((a, b) => {
            // BE will return flights in random order, so we need to make sure they are always sorted by date
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(a.firstFlight.firstSegment.departure.time), new Date(b.firstFlight.firstSegment.departure.time));
        });
    }
}
CartAdapter.ɵfac = function CartAdapter_Factory(t) { return new (t || CartAdapter)(); };
CartAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: CartAdapter, factory: CartAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 57913:
/*!**************************************************!*\
  !*** ./src/app/models/checkout-options.model.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingChannelModel": () => (/* binding */ BookingChannelModel),
/* harmony export */   "BookingChannelsAdapter": () => (/* binding */ BookingChannelsAdapter),
/* harmony export */   "CheckoutOptionsAdapter": () => (/* binding */ CheckoutOptionsAdapter),
/* harmony export */   "CheckoutOptionsModel": () => (/* binding */ CheckoutOptionsModel)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class CheckoutOptionsModel {
    // TODO: Add proper types
    constructor(paymentOptions, project, purposeOfTrip, yourReference) {
        this.paymentOptions = paymentOptions;
        this.project = project;
        this.purposeOfTrip = purposeOfTrip;
        this.yourReference = yourReference;
    }
}
class CheckoutOptionsAdapter {
    adapt(item) {
        return new CheckoutOptionsModel(item.paymentOptions, item?.project, item?.purposeOfTrip, item?.yourReference);
    }
}
CheckoutOptionsAdapter.ɵfac = function CheckoutOptionsAdapter_Factory(t) { return new (t || CheckoutOptionsAdapter)(); };
CheckoutOptionsAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CheckoutOptionsAdapter, factory: CheckoutOptionsAdapter.ɵfac, providedIn: 'root' });
class BookingChannelModel {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}
class BookingChannelsAdapter {
    adapt(item) {
        return new BookingChannelModel(item, item);
    }
}
BookingChannelsAdapter.ɵfac = function BookingChannelsAdapter_Factory(t) { return new (t || BookingChannelsAdapter)(); };
BookingChannelsAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BookingChannelsAdapter, factory: BookingChannelsAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 99971:
/*!**********************************************!*\
  !*** ./src/app/models/company-user.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyUserAdapter": () => (/* binding */ CompanyUserAdapter),
/* harmony export */   "CompanyUserModel": () => (/* binding */ CompanyUserModel),
/* harmony export */   "CompanyUserRole": () => (/* binding */ CompanyUserRole),
/* harmony export */   "CompanyUserStatus": () => (/* binding */ CompanyUserStatus),
/* harmony export */   "Gender": () => (/* binding */ Gender),
/* harmony export */   "TravelDocumentType": () => (/* binding */ TravelDocumentType)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

var CompanyUserStatus;
(function (CompanyUserStatus) {
    CompanyUserStatus["PENDING"] = "PENDING";
    CompanyUserStatus["INVITED"] = "INVITED";
    CompanyUserStatus["ACCEPTED"] = "ACCEPTED";
    CompanyUserStatus["EXPIRED"] = "EXPIRED";
})(CompanyUserStatus || (CompanyUserStatus = {}));
var CompanyUserRole;
(function (CompanyUserRole) {
    CompanyUserRole["ADMIN"] = "ADMIN";
    CompanyUserRole["TRAVELLER"] = "TRAVELLER";
})(CompanyUserRole || (CompanyUserRole = {}));
var TravelDocumentType;
(function (TravelDocumentType) {
    TravelDocumentType["PASSPORT"] = "PASSPORT";
    TravelDocumentType["ID_CARD"] = "ID_CARD";
})(TravelDocumentType || (TravelDocumentType = {}));
var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
})(Gender || (Gender = {}));
class CompanyUserModel {
    constructor(id, role, active, status, birthDate, createdDate, username, firstname, lastname, phone, address, city, zipcode, country, language, currency, agentNote, companyId, companyName, travelDocuments) {
        this.id = id;
        this.role = role;
        this.active = active;
        this.status = status;
        this.birthDate = birthDate;
        this.createdDate = createdDate;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.address = address;
        this.city = city;
        this.zipcode = zipcode;
        this.country = country;
        this.language = language;
        this.currency = currency;
        this.agentNote = agentNote;
        this.companyId = companyId;
        this.companyName = companyName;
        this.travelDocuments = travelDocuments;
    }
    get fullName() {
        return `${this.firstname} ${this.lastname}`;
    }
    // Try to get date of birth from the object or one of the documents
    get dateOfBirth() {
        return this.birthDate || this.idCard?.dateOfBirth || this.passport?.dateOfBirth;
    }
    get idCard() {
        return this.travelDocuments.find((item) => item.type === TravelDocumentType.ID_CARD);
    }
    get passport() {
        return this.travelDocuments.find((item) => item.type === TravelDocumentType.PASSPORT);
    }
}
class CompanyUserAdapter {
    adapt(item) {
        return new CompanyUserModel(item?.id, item?.role, item?.active, item?.status, item?.birthDate, item?.createdDate, item?.username, item?.firstname, item?.lastname, item?.phone, item?.address, item?.city, item?.zipcode, item?.country, item?.language, item?.currency, item?.agentNote, item?.companyId, item?.companyName, item?.travelDocuments || []);
    }
}
CompanyUserAdapter.ɵfac = function CompanyUserAdapter_Factory(t) { return new (t || CompanyUserAdapter)(); };
CompanyUserAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompanyUserAdapter, factory: CompanyUserAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 44245:
/*!*****************************************!*\
  !*** ./src/app/models/company.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyAdapter": () => (/* binding */ CompanyAdapter),
/* harmony export */   "CompanyModel": () => (/* binding */ CompanyModel),
/* harmony export */   "CompanyStatus": () => (/* binding */ CompanyStatus),
/* harmony export */   "SubscriptionStatus": () => (/* binding */ SubscriptionStatus)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

var CompanyStatus;
(function (CompanyStatus) {
    CompanyStatus["NONE"] = "NONE";
    CompanyStatus["AT_RISK"] = "AT_RISK";
    CompanyStatus["VIP"] = "VIP";
})(CompanyStatus || (CompanyStatus = {}));
var SubscriptionStatus;
(function (SubscriptionStatus) {
    SubscriptionStatus["PENDING"] = "PENDING";
    SubscriptionStatus["ACTIVE"] = "ACTIVE";
    SubscriptionStatus["DUNNING"] = "DUNNING";
    SubscriptionStatus["CANCELLED"] = "CANCELLED";
    SubscriptionStatus["SUSPEND"] = "SUSPEND";
    SubscriptionStatus["DISABLED"] = "DISABLED";
    SubscriptionStatus["COMPLETED"] = "COMPLETED";
})(SubscriptionStatus || (SubscriptionStatus = {}));
class CompanyModel {
    constructor(id, corporationName, registrationNumber, activatedAt, agentNote, status, subscriptionStatus) {
        this.id = id;
        this.corporationName = corporationName;
        this.registrationNumber = registrationNumber;
        this.activatedAt = activatedAt;
        this.agentNote = agentNote;
        this.status = status;
        this.subscriptionStatus = subscriptionStatus;
    }
    get isDisabled() {
        return this.subscriptionStatus === SubscriptionStatus.DISABLED;
    }
}
class CompanyAdapter {
    adapt(item) {
        return new CompanyModel(item?.id, item?.corporationName, item?.registrationNumber, item?.activatedAt, item?.agentNote, 
        // TODO: Since this is new column, check with BE if they can return NONE by default for old companies
        item?.status || CompanyStatus.NONE, item?.subscriptionStatus);
    }
}
CompanyAdapter.ɵfac = function CompanyAdapter_Factory(t) { return new (t || CompanyAdapter)(); };
CompanyAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompanyAdapter, factory: CompanyAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 27330:
/*!**************************************************************!*\
  !*** ./src/app/models/constants/booking-status.constants.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingStatusV2": () => (/* binding */ BookingStatusV2)
/* harmony export */ });
var BookingStatusV2;
(function (BookingStatusV2) {
    BookingStatusV2["DRAFT"] = "DRAFT";
    BookingStatusV2["PENDING"] = "PENDING";
    BookingStatusV2["COMPLETED"] = "COMPLETED";
    BookingStatusV2["CANCELLED"] = "CANCELLED";
    BookingStatusV2["EXPIRED"] = "EXPIRED";
    BookingStatusV2["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    BookingStatusV2["CUSTOMER_ACCEPTED"] = "CUSTOMER_ACCEPTED";
    BookingStatusV2["ADMIN_REJECTED"] = "ADMIN_REJECTED";
    BookingStatusV2["UNAVAILABLE"] = "UNAVAILABLE";
    BookingStatusV2["CUSTOMER_REFUNDED"] = "CUSTOMER_REFUNDED";
    // refunded automatically -> when you have approval process and trip is rejected by approver,
    BookingStatusV2["REFUNDED_AUTOMATICALLY"] = "REFUNDED_AUTOMATICALLY";
    BookingStatusV2["COMPLETED_BY_AGENT"] = "COMPLETED_BY_AGENT";
    // train booking statuses -- they are different from other booking statuses
    BookingStatusV2["REQUEST"] = "REQUEST";
    BookingStatusV2["COMPLETION"] = "COMPLETION";
    BookingStatusV2["CANCELLATION"] = "CANCELLATION";
    BookingStatusV2["EXPIRATION"] = "EXPIRATION";
    BookingStatusV2["REBOOK"] = "REBOOK";
    // Validation error received from be and mapped in booking status
    BookingStatusV2["NOT_AVAILABLE_ANYMORE"] = "NOT_AVAILABLE_ANYMORE";
    BookingStatusV2["NON_EQUAL_CURRENCY_AS_CART"] = "NON_EQUAL_CURRENCY_AS_CART";
    BookingStatusV2["PRICE_UPDATED"] = "PRICE_UPDATED";
    // Validation error received from be during payment, not mapped in booking status
    BookingStatusV2["COST_CENTER_IS_MANDATORY"] = "COST_CENTER_IS_MANDATORY";
    BookingStatusV2["COST_CENTER_IS_NOT_VALID"] = "COST_CENTER_IS_NOT_VALID";
})(BookingStatusV2 || (BookingStatusV2 = {}));


/***/ }),

/***/ 62651:
/*!**************************************************************!*\
  !*** ./src/app/models/constants/payment-status.constants.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentStatus": () => (/* binding */ PaymentStatus)
/* harmony export */ });
// TODO check with be which statuses are related to old booking and remove them
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["OUT_OF_POLICY"] = "OUT_OF_POLICY";
    PaymentStatus["APPROVAL_NEEDED"] = "APPROVAL_NEEDED";
    PaymentStatus["PAYABLE"] = "PAYABLE";
    PaymentStatus["COMPLETED_BY_AGENT"] = "COMPLETED_BY_AGENT";
    PaymentStatus["APPROVAL_ACCEPTED"] = "APPROVAL_ACCEPTED";
    PaymentStatus["APPROVAL_APPROVED"] = "APPROVAL_APPROVED";
    PaymentStatus["APPROVAL_PENDING"] = "APPROVAL_PENDING";
    PaymentStatus["APPROVAL_REJECTED"] = "APPROVAL_REJECTED";
    PaymentStatus["DRAFT"] = "DRAFT";
    PaymentStatus["LOCKED"] = "LOCKED";
    PaymentStatus["COMPLETED"] = "COMPLETED";
    PaymentStatus["PROCESSING_PURCHASE"] = "PROCESSING_PURCHASE";
    PaymentStatus["REFUNDED"] = "REFUNDED";
    PaymentStatus["PENDING_CONFIRMATION"] = "PENDING_CONFIRMATION";
    PaymentStatus["COMPLETED_EMPTY"] = "COMPLETED_EMPTY";
    PaymentStatus["PENDING"] = "PENDING";
    PaymentStatus["DONE"] = "DONE";
    PaymentStatus["EMPTY"] = "EMPTY";
    PaymentStatus["DELETABLE"] = "DELETABLE";
    PaymentStatus["SEND_GO_REQUEST"] = "SEND_GO_REQUEST";
    PaymentStatus["UNDEFINED"] = "UNDEFINED";
    PaymentStatus["DIFFERENT_PAYMENT"] = "DIFFERENT_PAYMENT";
    PaymentStatus["REJECTED"] = "REJECTED";
    PaymentStatus["PENDING_APPROVAL"] = "PENDING_APPROVAL";
    PaymentStatus["ORDER_PROCESSING"] = "ORDER_PROCESSING";
    PaymentStatus["PAY_NOW"] = "PAY_NOW";
})(PaymentStatus || (PaymentStatus = {}));


/***/ }),

/***/ 77975:
/*!******************************************************************!*\
  !*** ./src/app/models/constants/product-type-icons.constants.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "productTypeIconsMap": () => (/* binding */ productTypeIconsMap)
/* harmony export */ });
const productTypeIconsMap = {
    hotel: 'hotel',
    flight: 'flight',
    bus: 'directions_bus',
    train: 'train',
    taxi: 'local_taxi',
    'rental car': 'directions_car',
    // Default icon to be used if no match is found
    default: 'person_outline',
};


/***/ }),

/***/ 52942:
/*!*********************************************!*\
  !*** ./src/app/models/cost-center.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravellerCostCentersAdapter": () => (/* binding */ TravellerCostCentersAdapter),
/* harmony export */   "TravellerCostCentersModel": () => (/* binding */ TravellerCostCentersModel)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class TravellerCostCentersModel {
    constructor(customerId, costCenters) {
        this.customerId = customerId;
        this.costCenters = costCenters;
    }
}
class TravellerCostCentersAdapter {
    adapt(item) {
        return new TravellerCostCentersModel(item.customerId, item.companyCostCenterDTOList);
    }
}
TravellerCostCentersAdapter.ɵfac = function TravellerCostCentersAdapter_Factory(t) { return new (t || TravellerCostCentersAdapter)(); };
TravellerCostCentersAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TravellerCostCentersAdapter, factory: TravellerCostCentersAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 54896:
/*!*****************************************!*\
  !*** ./src/app/models/feature.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureAdapter": () => (/* binding */ FeatureAdapter),
/* harmony export */   "FeatureModel": () => (/* binding */ FeatureModel)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class FeatureModel {
    constructor(id, description, enabled) {
        this.id = id;
        this.description = description;
        this.enabled = enabled;
    }
}
class FeatureAdapter {
    adapt(item) {
        return new FeatureModel(item.id, item.description, item.enabled);
    }
}
FeatureAdapter.ɵfac = function FeatureAdapter_Factory(t) { return new (t || FeatureAdapter)(); };
FeatureAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FeatureAdapter, factory: FeatureAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 84499:
/*!********************************************!*\
  !*** ./src/app/models/lodge-card.model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LodgeCardAdapter": () => (/* binding */ LodgeCardAdapter),
/* harmony export */   "LodgeCardModel": () => (/* binding */ LodgeCardModel),
/* harmony export */   "LodgeCardProviderCode": () => (/* binding */ LodgeCardProviderCode)
/* harmony export */ });
/* harmony import */ var _payment_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.model */ 16874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


var LodgeCardProviderCode;
(function (LodgeCardProviderCode) {
    LodgeCardProviderCode["CCDC"] = "CCDC";
    LodgeCardProviderCode["CCTP"] = "CCTP";
    LodgeCardProviderCode["CCCA"] = "CCCA";
    LodgeCardProviderCode["CCAX"] = "CCAX";
})(LodgeCardProviderCode || (LodgeCardProviderCode = {}));
class LodgeCardModel {
    constructor(id, name, creditCardNumber, expiryDate, provider, currency, country, contactFirstName, contactLastName, contactEmail, vatNumber, invoiceRecipientEmail, clientCorporationId, addressLine, city, companyLegalName, companyRegistrationNumber, postalCode, expiryDateTrailingValue, backOfficeCustomerId, isOnboarded, memberCount, groupIds, employeeIds) {
        this.id = id;
        this.name = name;
        this.creditCardNumber = creditCardNumber;
        this.expiryDate = expiryDate;
        this.provider = provider;
        this.currency = currency;
        this.country = country;
        this.contactFirstName = contactFirstName;
        this.contactLastName = contactLastName;
        this.contactEmail = contactEmail;
        this.vatNumber = vatNumber;
        this.invoiceRecipientEmail = invoiceRecipientEmail;
        this.clientCorporationId = clientCorporationId;
        this.addressLine = addressLine;
        this.city = city;
        this.companyLegalName = companyLegalName;
        this.companyRegistrationNumber = companyRegistrationNumber;
        this.postalCode = postalCode;
        this.expiryDateTrailingValue = expiryDateTrailingValue;
        this.backOfficeCustomerId = backOfficeCustomerId;
        this.isOnboarded = isOnboarded;
        this.memberCount = memberCount;
        this.groupIds = groupIds;
        this.employeeIds = employeeIds;
        this.paymentType = _payment_model__WEBPACK_IMPORTED_MODULE_0__.PaymentType.LODGE_CARD;
    }
}
class LodgeCardAdapter {
    adapt(item) {
        return new LodgeCardModel(item.id, item.name, item.creditCardNumber, item.expiryDate, item.provider, item.currency, item.country, item.contactFirstName, item.contactLastName, item.contactEmail, item.vatNumber, item.invoiceRecipientEmail, item.clientCorporationId, item.addressLine, item.city, item.companyLegalName, item.companyRegistrationNumber, item.postalCode, item.expiryDateTrailingValue, item.backOfficeCustomerId, item.isOnboarded, item.memberCount, item.groupIds, item.employeeIds);
    }
}
LodgeCardAdapter.ɵfac = function LodgeCardAdapter_Factory(t) { return new (t || LodgeCardAdapter)(); };
LodgeCardAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LodgeCardAdapter, factory: LodgeCardAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 62198:
/*!********************************************!*\
  !*** ./src/app/models/pagination.model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginatedDataAdapter": () => (/* binding */ PaginatedDataAdapter)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class PaginatedDataAdapter {
    adapt(data) {
        return {
            data: data.content,
            pagination: {
                size: data.pageSize,
                number: data.currentPage - 1,
                numberOfElements: data.content.length,
                totalElements: data.totalItems,
                totalPages: data.totalPages,
            },
        };
    }
}
PaginatedDataAdapter.ɵfac = function PaginatedDataAdapter_Factory(t) { return new (t || PaginatedDataAdapter)(); };
PaginatedDataAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaginatedDataAdapter, factory: PaginatedDataAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 16874:
/*!*****************************************!*\
  !*** ./src/app/models/payment.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentType": () => (/* binding */ PaymentType),
/* harmony export */   "SalesModel": () => (/* binding */ SalesModel)
/* harmony export */ });
var PaymentType;
(function (PaymentType) {
    PaymentType["CREDIT_CARD"] = "CREDIT_CARD";
    PaymentType["BILLING_PROFILE"] = "BILLING_PROFILE";
    PaymentType["LODGE_CARD"] = "LODGE_CARD";
})(PaymentType || (PaymentType = {}));
var SalesModel;
(function (SalesModel) {
    SalesModel["PASS_THROUGH"] = "PASS_THROUGH";
    SalesModel["ADD_MARKUP"] = "ADD_MARKUP";
})(SalesModel || (SalesModel = {}));


/***/ }),

/***/ 59339:
/*!*************************************!*\
  !*** ./src/app/models/pnr.model.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreditCardVendor": () => (/* binding */ CreditCardVendor),
/* harmony export */   "FlightPNRValidationAdapter": () => (/* binding */ FlightPNRValidationAdapter),
/* harmony export */   "FlightPNRValidationModel": () => (/* binding */ FlightPNRValidationModel),
/* harmony export */   "FlightPNRValidationState": () => (/* binding */ FlightPNRValidationState),
/* harmony export */   "FormOfPaymentType": () => (/* binding */ FormOfPaymentType)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 66579);
/* harmony import */ var _cart_items_flight_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-items/flight.model */ 5135);
/* harmony import */ var _vendors_payment_provider_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendors-payment-provider.model */ 37042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




var FlightPNRValidationState;
(function (FlightPNRValidationState) {
    FlightPNRValidationState["NEW"] = "NEW";
    FlightPNRValidationState["EXISTING"] = "EXISTING";
    FlightPNRValidationState["CANCELED"] = "CANCELED";
})(FlightPNRValidationState || (FlightPNRValidationState = {}));
var FormOfPaymentType;
(function (FormOfPaymentType) {
    FormOfPaymentType["CASH"] = "Cash";
    FormOfPaymentType["CREDIT_CARD"] = "CreditCard";
})(FormOfPaymentType || (FormOfPaymentType = {}));
var CreditCardVendor;
(function (CreditCardVendor) {
    CreditCardVendor["DINERS"] = "Diners";
    CreditCardVendor["MASTERCARD"] = "Mastercard";
})(CreditCardVendor || (CreditCardVendor = {}));
class FlightPNRValidationModel {
    constructor(totalPrice, totalPriceWithMarkup, currency, flights, travellers, bookingReference, state, updates, formOfPayment, finalDestination, cartId) {
        this.totalPrice = totalPrice;
        this.totalPriceWithMarkup = totalPriceWithMarkup;
        this.currency = currency;
        this.flights = flights;
        this.travellers = travellers;
        this.bookingReference = bookingReference;
        this.state = state;
        this.updates = updates;
        this.formOfPayment = formOfPayment;
        this.finalDestination = finalDestination;
        this.cartId = cartId;
    }
    get firstFlight() {
        return this.flights[0];
    }
    get lastFlight() {
        return this.flights[this.flights.length - 1];
    }
    get valid() {
        return !!this.bookingReference?.reference;
    }
    get isReturnFlight() {
        return this.firstFlight.firstSegment.departure.airportCode === this.lastFlight.lastSegment.arrival.airportCode;
    }
    get flightDetailsTitle() {
        if (this.isReturnFlight) {
            return `Round trip to ${this.flightDestination?.airportName} (${this.flightDestination?.airportCode})`;
        }
        const from = this.firstFlight.firstSegment.departure;
        const to = this.lastFlight.lastSegment.arrival;
        return `${from.airportName} (${from.airportCode}) - ${to.airportName} (${to.airportCode})`;
    }
    get flightDestination() {
        if (!this.flights.length)
            return null;
        // First we check number of segments - 2 flight segments means we have a return flight already
        if (this.flights.length === 2)
            return this.firstFlight.lastSegment.arrival;
        // Next we rule-out one way flights
        if (!this.isReturnFlight)
            return this.firstFlight.lastSegment.arrival;
        // If segments are symmetrical we can possibly auto-determine flight destination
        // We determine that by getting all the arrival|departure airport code combinations and checking if every one of
        // them is doubled. We only keep unique values and the count should be equal to number of segments
        const isSymmetrical = this.firstFlight.segments.reduce((codes, segment) => {
            // To check this we create all possible combinations by mixing departure and arrival
            // and squash them by removing duplicates. For example:
            // If we have a flight from ARN -> MMX and return flight from MMX -> ARN
            // It will give us these 4 options: ARN|MMX, MMX|ARN and return flight MMX|ARN, ARN|MMX
            // When squashed we will get only 2 combos ARN|MMX, MMX|ARN meaning that the flight is symmetric
            codes.add([segment.departure.airportCode, segment.arrival.airportCode].join('|'));
            codes.add([segment.arrival.airportCode, segment.departure.airportCode].join('|'));
            return codes;
        }, new Set()).size === this.firstFlight.segments.length;
        if (this.firstFlight.segments.length % 2 === 0 && isSymmetrical) {
            // In this case final destination is located exactly on the middle segment's arrival
            return this.firstFlight.segments[this.firstFlight.segments.length / 2 - 1].arrival;
        }
        // If we can't determine the flight destination, lets check if we have final destination airport code set
        if (this.finalDestination) {
            // And if we do, we can search through middle segments to find the destination airport code
            return this.firstFlight.midSegments.find((segment) => {
                return segment.arrival.airportCode === this.finalDestination;
            })?.arrival;
        }
        // Otherwise we can not determine the flight destination and agent will have to do that manually
        return null;
    }
    get isNew() {
        return this.state === FlightPNRValidationState.NEW;
    }
    get isPreview() {
        return this.state === FlightPNRValidationState.EXISTING && !this.hasUpdates;
    }
    get hasUpdates() {
        return !!this.updates?.length;
    }
    get vendorType() {
        if (!this.formOfPayment)
            return [_vendors_payment_provider_model__WEBPACK_IMPORTED_MODULE_1__.VendorPaymentPresentation.CASH, _vendors_payment_provider_model__WEBPACK_IMPORTED_MODULE_1__.VendorPaymentPresentation.VCC, _vendors_payment_provider_model__WEBPACK_IMPORTED_MODULE_1__.VendorPaymentPresentation.LODGE_CARD];
        // If form of payment is cash, vendor type must be cash as well
        if (this.formOfPayment?.type === FormOfPaymentType.CASH)
            return [_vendors_payment_provider_model__WEBPACK_IMPORTED_MODULE_1__.VendorPaymentPresentation.CASH];
        // Credit Card
        return [_vendors_payment_provider_model__WEBPACK_IMPORTED_MODULE_1__.VendorPaymentPresentation.VCC, _vendors_payment_provider_model__WEBPACK_IMPORTED_MODULE_1__.VendorPaymentPresentation.LODGE_CARD];
    }
}
class FlightPNRValidationAdapter {
    adapt(item) {
        return new FlightPNRValidationModel(item?.totalPrice, item?.totalPriceWithMarkup, item?.currency, (item?.flights || [])
            .map((item) => new _cart_items_flight_model__WEBPACK_IMPORTED_MODULE_0__.FlightAdapter().adapt(item))
            .sort((a, b) => {
            // BE can return flights in random order, so we need to make sure they are always sorted by date
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(a.firstSegment.departure.time), new Date(b.firstSegment.departure.time));
        }), item?.travellers || [], item?.bookingReference, item?.state, item?.updates, item?.formOfPayment, item?.finalDestination, item?.cartId);
    }
}
FlightPNRValidationAdapter.ɵfac = function FlightPNRValidationAdapter_Factory(t) { return new (t || FlightPNRValidationAdapter)(); };
FlightPNRValidationAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: FlightPNRValidationAdapter, factory: FlightPNRValidationAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 81454:
/*!*****************************************!*\
  !*** ./src/app/models/product.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductAdapter": () => (/* binding */ ProductAdapter),
/* harmony export */   "ProductModel": () => (/* binding */ ProductModel)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class ProductModel {
    constructor(id, name, base, active) {
        this.id = id;
        this.name = name;
        this.base = base;
        this.active = active;
    }
}
class ProductAdapter {
    adapt(item) {
        return new ProductModel(item?.id, item?.name, !!item?.base, !!item?.active);
    }
}
ProductAdapter.ɵfac = function ProductAdapter_Factory(t) { return new (t || ProductAdapter)(); };
ProductAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductAdapter, factory: ProductAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 95609:
/*!************************************************!*\
  !*** ./src/app/models/system-message.model.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemMessageAdapter": () => (/* binding */ SystemMessageAdapter),
/* harmony export */   "SystemMessageModel": () => (/* binding */ SystemMessageModel),
/* harmony export */   "SystemMessageStatus": () => (/* binding */ SystemMessageStatus)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 41263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


var SystemMessageStatus;
(function (SystemMessageStatus) {
    SystemMessageStatus["OPENED"] = "OPENED";
    SystemMessageStatus["CLOSED"] = "CLOSED";
})(SystemMessageStatus || (SystemMessageStatus = {}));
class SystemMessageModel {
    constructor(id, description, activatedAt, closedAt, closedBy, status) {
        this.id = id;
        this.description = description;
        this.activatedAt = activatedAt;
        this.closedAt = closedAt;
        this.closedBy = closedBy;
        this.status = status;
    }
    get durationOpened() {
        const endDate = this.isClosed() ? new Date(this.closedAt) : new Date();
        // TODO: Maybe handle small durations differently and display custom format
        //  For example if its less than one day we can have it as (12 hours 43 minutes)
        //  If its longer we keep as it is and display just the largest unit, ie. 14 months will be displayed as (1 year)
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(this.activatedAt), endDate);
    }
    isOpen() {
        return this.status === SystemMessageStatus.OPENED;
    }
    isClosed() {
        return this.status === SystemMessageStatus.CLOSED;
    }
}
class SystemMessageAdapter {
    adapt(item) {
        return new SystemMessageModel(item?.id, item?.description, item?.activatedAt, item?.closedAt, item?.closedBy, item?.status || SystemMessageStatus.OPENED);
    }
}
SystemMessageAdapter.ɵfac = function SystemMessageAdapter_Factory(t) { return new (t || SystemMessageAdapter)(); };
SystemMessageAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SystemMessageAdapter, factory: SystemMessageAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 84872:
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserAdapter": () => (/* binding */ UserAdapter),
/* harmony export */   "UserModel": () => (/* binding */ UserModel),
/* harmony export */   "UserType": () => (/* binding */ UserType)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

var UserType;
(function (UserType) {
    // NOTE: Sorted from lowest to highest level
    UserType["AGENT"] = "AGENT";
    UserType["ADMIN"] = "ADMIN";
    UserType["SUPER_ADMIN"] = "SUPER_ADMIN";
})(UserType || (UserType = {}));
class UserModel {
    constructor(id, token, username, type, firstName, lastName, phone, password, disabled) {
        this.id = id;
        this.token = token;
        this.username = username;
        this.type = type;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.password = password;
        this.disabled = disabled;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    isAgent() {
        return this.type === UserType.AGENT;
    }
    isAdmin() {
        return this.type === UserType.ADMIN;
    }
    isSuperAdmin() {
        return this.type === UserType.SUPER_ADMIN;
    }
    hasAdminAccess() {
        return this.isAdmin() || this.isSuperAdmin();
    }
    // User can only update equal or lover levels of users
    hasPermissionToUpdate(type) {
        const levels = Object.keys(UserType);
        return levels.indexOf(this.type) >= levels.indexOf(type);
    }
}
class UserAdapter {
    adapt(item) {
        return new UserModel(item?.id, item?.token, item?.username, item?.type, item?.firstName, item?.lastName, item?.phone, item?.password, item?.disabled);
    }
}
UserAdapter.ɵfac = function UserAdapter_Factory(t) { return new (t || UserAdapter)(); };
UserAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserAdapter, factory: UserAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 62342:
/*!**********************************************!*\
  !*** ./src/app/models/vat-category.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VatCategoryAdapter": () => (/* binding */ VatCategoryAdapter),
/* harmony export */   "VatCategoryModel": () => (/* binding */ VatCategoryModel)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class VatCategoryModel {
    constructor(id, name, productId, productName, countryId, active, externalId, vatPercentage) {
        this.id = id;
        this.name = name;
        this.productId = productId;
        this.productName = productName;
        this.countryId = countryId;
        this.active = active;
        this.externalId = externalId;
        this.vatPercentage = vatPercentage;
    }
}
class VatCategoryAdapter {
    adapt(item) {
        return new VatCategoryModel(item?.id, item?.name, item?.productId, item?.productName, item?.countryId, item?.active, item?.externalId, item?.vatPercentage);
    }
}
VatCategoryAdapter.ɵfac = function VatCategoryAdapter_Factory(t) { return new (t || VatCategoryAdapter)(); };
VatCategoryAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VatCategoryAdapter, factory: VatCategoryAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 20055:
/*!****************************************!*\
  !*** ./src/app/models/vendor.model.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorAdapter": () => (/* binding */ VendorAdapter),
/* harmony export */   "VendorModel": () => (/* binding */ VendorModel),
/* harmony export */   "VendorName": () => (/* binding */ VendorName)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

var VendorName;
(function (VendorName) {
    // [Flight product] related vendor names
    VendorName["AMADEUS"] = "Amadeus";
    VendorName["LUFTHANSA"] = "LufthansaGroup";
})(VendorName || (VendorName = {}));
class VendorModel {
    constructor(id, externalId, name, productIds, active, vendorName) {
        this.id = id;
        this.externalId = externalId;
        this.name = name;
        this.productIds = productIds;
        this.active = active;
        this.vendorName = vendorName;
    }
}
class VendorAdapter {
    adapt(item) {
        // Temporary hack since BE is returning string instead of boolean statuses
        if (['false', 'true'].includes(item?.active)) {
            item.active = item.active === 'true';
        }
        return new VendorModel(item?.id, item?.externalId, item?.name, item?.productIds, !!item?.active, item?.vendorName);
    }
}
VendorAdapter.ɵfac = function VendorAdapter_Factory(t) { return new (t || VendorAdapter)(); };
VendorAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VendorAdapter, factory: VendorAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 37042:
/*!**********************************************************!*\
  !*** ./src/app/models/vendors-payment-provider.model.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorPaymentPresentation": () => (/* binding */ VendorPaymentPresentation),
/* harmony export */   "VendorsPaymentProviderAdapter": () => (/* binding */ VendorsPaymentProviderAdapter),
/* harmony export */   "VendorsPaymentProviderModel": () => (/* binding */ VendorsPaymentProviderModel)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

var VendorPaymentPresentation;
(function (VendorPaymentPresentation) {
    // [Flight product + Amadeus vendor] related vendor types
    VendorPaymentPresentation["CASH"] = "CASH";
    VendorPaymentPresentation["VCC"] = "VCC";
    VendorPaymentPresentation["LODGE_CARD"] = "LODGE_CARD";
})(VendorPaymentPresentation || (VendorPaymentPresentation = {}));
class VendorsPaymentProviderModel {
    constructor(id, name, externalId, vendorIds, active, vendorPaymentPresentation) {
        this.id = id;
        this.name = name;
        this.externalId = externalId;
        this.vendorIds = vendorIds;
        this.active = active;
        this.vendorPaymentPresentation = vendorPaymentPresentation;
    }
}
class VendorsPaymentProviderAdapter {
    adapt(item) {
        return new VendorsPaymentProviderModel(item?.id, item?.name, item?.externalId, item?.vendorIds, !!item?.active, item?.vendorPaymentPresentation);
    }
}
VendorsPaymentProviderAdapter.ɵfac = function VendorsPaymentProviderAdapter_Factory(t) { return new (t || VendorsPaymentProviderAdapter)(); };
VendorsPaymentProviderAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VendorsPaymentProviderAdapter, factory: VendorsPaymentProviderAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 30239:
/*!******************************************!*\
  !*** ./src/app/reducers/auth.reducer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authToken": () => (/* binding */ authToken),
/* harmony export */   "getState": () => (/* binding */ getState),
/* harmony export */   "hasError": () => (/* binding */ hasError),
/* harmony export */   "isLoading": () => (/* binding */ isLoading),
/* harmony export */   "isLoggedIn": () => (/* binding */ isLoggedIn),
/* harmony export */   "loggedInUser": () => (/* binding */ loggedInUser),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ 84872);
/* harmony import */ var _actions_users_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/users.actions */ 67421);
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/auth.actions */ 60274);




const initialState = {
    user: null,
    loading: false,
    error: null,
};
const authReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__.AuthActions.login, _actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__.AuthActions.logoutSuccess, (state) => ({
    ...state,
    user: null,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__.AuthActions.loginStart, _actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__.AuthActions.logoutStart, (state) => ({
    ...state,
    loading: true,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__.AuthActions.loginSuccess, _actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__.AuthActions.setLoggedInUser, (state, { data }) => ({
    ...state,
    user: data,
    loading: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__.AuthActions.loginError, _actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__.AuthActions.logoutError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_users_actions__WEBPACK_IMPORTED_MODULE_1__.UserActions.saveUserDetailsSuccess, (state, { data }) => {
    // If logged in user is updated we want to update auth store as well
    if (state.user.id === data.id) {
        // But we also need to preserve the token in the state
        return { ...state, user: { ...data, token: state.user.token } };
    }
    return state;
}));
function reducer(state, action) {
    return authReducer(state, action);
}
const getState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createFeatureSelector)('auth');
const loggedInUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(getState, (state) => new _models_user_model__WEBPACK_IMPORTED_MODULE_0__.UserAdapter().adapt(state.user));
const authToken = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(loggedInUser, (user) => user.token);
const isLoggedIn = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(authToken, (token) => !!token);
const isLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(getState, (state) => state.loading);
const hasError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(getState, (state) => !!state.error);


/***/ }),

/***/ 17682:
/*!******************************************************!*\
  !*** ./src/app/reducers/billing-requests.reducer.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "billingRequestsLoading": () => (/* binding */ billingRequestsLoading),
/* harmony export */   "getState": () => (/* binding */ getState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectBillingRequests": () => (/* binding */ selectBillingRequests),
/* harmony export */   "selectBillingRequestsData": () => (/* binding */ selectBillingRequestsData),
/* harmony export */   "selectBillingRequestsPagination": () => (/* binding */ selectBillingRequestsPagination),
/* harmony export */   "selectBillingRequestsStats": () => (/* binding */ selectBillingRequestsStats)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/billing-requests.actions */ 64646);
/* harmony import */ var _models_billing_request_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/billing-request.model */ 83970);



const initialState = {
    data: [],
    loading: false,
    error: null,
};
const billingRequestsReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_0__.BillingRequestActions.loadRequests, (state, { keepDataWhileLoading }) => ({
    ...state,
    data: keepDataWhileLoading ? state.data : [],
    pagination: keepDataWhileLoading ? state.pagination : undefined,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_0__.BillingRequestActions.loadRequestsStart, (state) => ({
    ...state,
    loading: true,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_0__.BillingRequestActions.loadRequestsSuccess, (state, { data, pagination }) => ({
    ...state,
    data,
    pagination,
    loading: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_0__.BillingRequestActions.loadRequestsError, _actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_0__.BillingRequestActions.changeStatusError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_0__.BillingRequestActions.changeStatus, (state) => ({
    ...state,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_0__.BillingRequestActions.changeStatusStart, (state) => ({
    ...state,
    loading: true,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_0__.BillingRequestActions.changeStatusSuccess, (state) => ({
    ...state,
    loading: false,
})));
function reducer(state, action) {
    return billingRequestsReducer(state, action);
}
const getState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)('billingRequests');
const selectBillingRequests = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => {
    return {
        ...state,
        data: state.data.map((item) => new _models_billing_request_model__WEBPACK_IMPORTED_MODULE_1__.BillingRequestAdapter().adapt(item)),
    };
});
const selectBillingRequestsData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectBillingRequests, (state) => state.data);
const selectBillingRequestsPagination = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => state.pagination || {});
const billingRequestsLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => state.loading);
const selectBillingRequestsStats = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => {
    return {
        loading: state.loading,
        count: state.pagination?.totalElements,
    };
});


/***/ }),

/***/ 6819:
/*!**********************************************!*\
  !*** ./src/app/reducers/bookings.reducer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bookingsLoading": () => (/* binding */ bookingsLoading),
/* harmony export */   "getSelectedBooking": () => (/* binding */ getSelectedBooking),
/* harmony export */   "getState": () => (/* binding */ getState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "referenceTypesLoading": () => (/* binding */ referenceTypesLoading),
/* harmony export */   "selectBookings": () => (/* binding */ selectBookings),
/* harmony export */   "selectBookingsData": () => (/* binding */ selectBookingsData),
/* harmony export */   "selectBookingsStats": () => (/* binding */ selectBookingsStats),
/* harmony export */   "selectReferenceTypes": () => (/* binding */ selectReferenceTypes),
/* harmony export */   "selectedBookingLoading": () => (/* binding */ selectedBookingLoading)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/bookings.actions */ 4797);
/* harmony import */ var _models_booking_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/booking.model */ 31282);
/* harmony import */ var _models_booking_list_item_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/booking-list-item.model */ 53377);




const initialState = {
    data: [],
    loading: false,
    error: null,
    // Single booking
    selectedBooking: null,
    selectedBookingLoading: false,
    // Reference types
    referenceTypes: [],
    referenceTypesLoading: false,
};
const bookingsReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createReducer)(initialState, 
// =========== Bookings List Reducers ===========
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadBookings, (state, { keepDataWhileLoading }) => ({
    ...state,
    data: keepDataWhileLoading ? state.data : [],
    pagination: keepDataWhileLoading ? state.pagination : undefined,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadBookingsSuccess, (state, { data, pagination }) => ({
    ...state,
    data,
    pagination,
    loading: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadBookingsStart, (state) => ({
    ...state,
    loading: true,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadBookingsError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
})), 
// =========== Selected Booking Reducers ===========
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadBookingSuccess, (state, { data }) => ({
    ...state,
    // If the booking we are loading is a currently selected booking we have to update it as well
    selectedBooking: state.selectedBooking.cartId === data.cartId ? data : state.selectedBooking,
    selectedBookingLoading: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadAndSelectBookingSuccess, (state, { data }) => ({
    ...state,
    selectedBooking: data,
    selectedBookingLoading: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.saveBookingDetailsSuccess, (state, { data }) => ({
    ...state,
    // If the booking we are updating is a currently selected booking we have to update it as well
    selectedBooking: state.selectedBooking.cartId === data.cartId ? data : state.selectedBooking,
    selectedBookingLoading: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadAndSelectBooking, (state) => ({
    ...state,
    selectedBooking: null,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadBooking, _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.saveBookingDetails, (state) => ({
    ...state,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadBookingStart, _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadAndSelectBookingStart, _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.saveBookingDetailsStart, (state) => ({
    ...state,
    selectedBookingLoading: true,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadBookingError, _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadAndSelectBookingError, _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.saveBookingDetailsError, (state, { error }) => ({
    ...state,
    selectedBookingLoading: false,
    error,
})), 
// =========== Reference Types Reducers ===========
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadReferenceTypes, (state) => ({
    ...state,
    referenceTypes: [],
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadReferenceTypesStart, (state) => ({
    ...state,
    referenceTypesLoading: true,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadReferenceTypesSuccess, (state, { data }) => ({
    ...state,
    referenceTypes: data,
    referenceTypesLoading: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_0__.BookingActions.loadReferenceTypesError, (state, { error }) => ({
    ...state,
    referenceTypesLoading: false,
    error,
})));
function reducer(state, action) {
    return bookingsReducer(state, action);
}
// Booking List
const getState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createFeatureSelector)('bookings');
const selectBookings = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(getState, (state) => {
    return {
        ...state,
        selectedBooking: new _models_booking_model__WEBPACK_IMPORTED_MODULE_1__.BookingAdapter().adapt(state.selectedBooking),
        data: state.data.map((item) => new _models_booking_list_item_model__WEBPACK_IMPORTED_MODULE_2__.BookingListItemAdapter().adapt(item)),
    };
});
const selectBookingsData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(selectBookings, (state) => state.data);
const bookingsLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(getState, (state) => state.loading);
const selectBookingsStats = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(getState, (state) => ({
    loading: state.loading,
    count: state.pagination?.totalElements,
}));
// Single Booking
const getSelectedBooking = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(selectBookings, (state) => state.selectedBooking);
const selectedBookingLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(selectBookings, (state) => state.selectedBookingLoading);
// Reference Types
const selectReferenceTypes = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(getState, (state) => state.referenceTypes);
const referenceTypesLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(getState, (state) => state.referenceTypesLoading);


/***/ }),

/***/ 5065:
/*!*******************************************!*\
  !*** ./src/app/reducers/carts.reducer.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cartsLoading": () => (/* binding */ cartsLoading),
/* harmony export */   "getState": () => (/* binding */ getState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectCartById": () => (/* binding */ selectCartById),
/* harmony export */   "selectCarts": () => (/* binding */ selectCarts),
/* harmony export */   "selectCartsData": () => (/* binding */ selectCartsData)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _actions_carts_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/carts.actions */ 39568);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ 96487);
/* harmony import */ var _models_cart_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/cart.model */ 71269);




const initialState = {
    data: [],
    loading: false,
    error: null,
};
const cartsReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_carts_actions__WEBPACK_IMPORTED_MODULE_0__.CartActions.loadCartDetails, (state) => ({ ...state, error: null })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_carts_actions__WEBPACK_IMPORTED_MODULE_0__.CartActions.loadCartDetailsSuccess, (state, { data }) => ({
    ...state,
    data: (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.addOrUpdate)(state, data),
    loading: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_carts_actions__WEBPACK_IMPORTED_MODULE_0__.CartActions.loadCartDetailsStart, (state) => ({ ...state, loading: true })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_carts_actions__WEBPACK_IMPORTED_MODULE_0__.CartActions.loadCartDetailsError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
})));
function reducer(state, action) {
    return cartsReducer(state, action);
}
const getState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createFeatureSelector)('carts');
const selectCarts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(getState, (state) => {
    return {
        ...state,
        data: state.data.map((item) => new _models_cart_model__WEBPACK_IMPORTED_MODULE_2__.CartAdapter().adapt(item)),
    };
});
const selectCartsData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(selectCarts, (state) => state.data);
const cartsLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(getState, (state) => state.loading);
const selectCartById = (id) => {
    return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(selectCarts, (state) => {
        return state.data.find((item) => item.id === id) || new _models_cart_model__WEBPACK_IMPORTED_MODULE_2__.CartAdapter().adapt({});
    });
};


/***/ }),

/***/ 71539:
/*!**********************************************!*\
  !*** ./src/app/reducers/checkout.reducer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getState": () => (/* binding */ getState),
/* harmony export */   "hasBookingChannelsInStore": () => (/* binding */ hasBookingChannelsInStore),
/* harmony export */   "hasCheckoutOptionsInStore": () => (/* binding */ hasCheckoutOptionsInStore),
/* harmony export */   "hasMandatoryReferenceFields": () => (/* binding */ hasMandatoryReferenceFields),
/* harmony export */   "isLoadingBookingChannels": () => (/* binding */ isLoadingBookingChannels),
/* harmony export */   "isLoadingCheckoutOptions": () => (/* binding */ isLoadingCheckoutOptions),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectBookingChannels": () => (/* binding */ selectBookingChannels),
/* harmony export */   "selectCheckoutOptions": () => (/* binding */ selectCheckoutOptions),
/* harmony export */   "selectCheckoutPaymentOptions": () => (/* binding */ selectCheckoutPaymentOptions),
/* harmony export */   "selectProject": () => (/* binding */ selectProject),
/* harmony export */   "selectPurposeOfTrip": () => (/* binding */ selectPurposeOfTrip),
/* harmony export */   "selectYourReference": () => (/* binding */ selectYourReference)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _models_checkout_options_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/checkout-options.model */ 57913);
/* harmony import */ var _actions_checkout_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/checkout.actions */ 37020);



const initialState = {
    checkoutOptions: {
        paymentOptions: [],
        project: null,
        purposeOfTrip: null,
        yourReference: null,
        isLoading: false,
        error: null,
    },
    bookingChannels: {
        items: [],
        isLoading: false,
        error: null,
    },
};
const checkoutReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, 
// Load checkout options
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.CheckoutActions.loadOptions, (state) => ({
    ...state,
    checkoutOptions: {
        ...state.checkoutOptions,
        error: null,
    },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.CheckoutActions.loadOptionsStart, (state) => ({
    ...state,
    checkoutOptions: {
        ...initialState.checkoutOptions,
        error: state.checkoutOptions.error,
    },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.CheckoutActions.loadOptionsSuccess, (state, { data }) => {
    return {
        ...state,
        checkoutOptions: {
            ...state.checkoutOptions,
            paymentOptions: data.paymentOptions,
            project: data.project || initialState.checkoutOptions.project,
            purposeOfTrip: data.purposeOfTrip || initialState.checkoutOptions.purposeOfTrip,
            yourReference: data.yourReference || initialState.checkoutOptions.yourReference,
            isLoading: false,
        },
    };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.CheckoutActions.loadOptionsError, (state, { error }) => ({
    ...state,
    checkoutOptions: {
        ...state.checkoutOptions,
        isLoading: false,
        error,
    },
})), 
// Load booking channels
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.CheckoutActions.loadBookingChannels, (state) => ({
    ...state,
    bookingChannels: {
        ...state.bookingChannels,
        error: null,
    },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.CheckoutActions.loadBookingChannelsStart, (state) => ({
    ...state,
    bookingChannels: {
        ...initialState.bookingChannels,
        isLoading: true,
        error: state.bookingChannels.error,
    },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.CheckoutActions.loadBookingChannelsSuccess, (state, { data }) => {
    return {
        ...state,
        bookingChannels: {
            items: data,
            isLoading: false,
            error: null,
        },
    };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.CheckoutActions.loadBookingChannelsError, (state, { error }) => ({
    ...state,
    bookingChannels: {
        ...state.bookingChannels,
        isLoading: false,
        error,
    },
})));
function reducer(state, action) {
    return checkoutReducer(state, action);
}
const getState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)('checkout');
const selectCheckoutOptions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => state.checkoutOptions);
const selectCheckoutPaymentOptions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectCheckoutOptions, (state) => state.paymentOptions);
const selectProject = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectCheckoutOptions, (state) => state.project);
const selectPurposeOfTrip = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectCheckoutOptions, (state) => state.purposeOfTrip);
const selectYourReference = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectCheckoutOptions, (state) => state.yourReference);
const isLoadingCheckoutOptions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectCheckoutOptions, (state) => state.isLoading);
const hasMandatoryReferenceFields = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectCheckoutOptions, (state) => !!state.project?.mandatory || !!state.purposeOfTrip?.mandatory || !!state.yourReference?.mandatory);
// We have to have at least one payment option and if it exists then the checkout options are loaded
const hasCheckoutOptionsInStore = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectCheckoutPaymentOptions, (options) => !!options.length);
const selectBookingChannels = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => state.bookingChannels.items.map((item) => new _models_checkout_options_model__WEBPACK_IMPORTED_MODULE_0__.BookingChannelsAdapter().adapt(item)));
const isLoadingBookingChannels = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => state.bookingChannels.isLoading);
// We have to have at least one payment option and if it exists then the checkout options are loaded
const hasBookingChannelsInStore = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => !!state.bookingChannels.items.length);


/***/ }),

/***/ 47856:
/*!***********************************************!*\
  !*** ./src/app/reducers/companies.reducer.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "companiesLoading": () => (/* binding */ companiesLoading),
/* harmony export */   "getState": () => (/* binding */ getState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectCompanies": () => (/* binding */ selectCompanies),
/* harmony export */   "selectCompaniesData": () => (/* binding */ selectCompaniesData),
/* harmony export */   "selectCompaniesStats": () => (/* binding */ selectCompaniesStats),
/* harmony export */   "selectCompanyById": () => (/* binding */ selectCompanyById)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/companies.actions */ 29814);
/* harmony import */ var _models_company_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/company.model */ 44245);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ 96487);




const initialState = {
    data: [],
    loading: false,
    error: null,
};
const companiesReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createReducer)(initialState, 
// Load companies
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.loadCompanies, (state, { keepDataWhileLoading }) => ({
    ...state,
    data: keepDataWhileLoading ? state.data : [],
    pagination: keepDataWhileLoading ? state.pagination : undefined,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.loadCompaniesSuccess, (state, { data, pagination }) => ({
    ...state,
    data,
    pagination,
    loading: false,
})), 
// Load Company
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.loadCompanySuccess, (state, { data }) => ({
    ...state,
    data: (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.addOrUpdate)(state, data),
    loading: false,
})), 
// Save
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.saveCompanyDetailsSuccess, _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.toggleCompanySubscriptionStatusSuccess, (state, { data }) => ({
    ...state,
    data: (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.addOrUpdate)(state, data),
    loading: false,
})), 
// Delete
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.deleteCompanySuccess, (state, { data }) => ({
    ...state,
    data: state.data.filter((item) => item.id !== data.id),
    loading: false,
})), 
// Base actions handling
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.loadCompany, _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.saveCompanyDetails, _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.toggleCompanySubscriptionStatus, _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.deleteCompany, (state) => ({
    ...state,
    error: null,
})), 
// Start actions handling
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.loadCompaniesStart, _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.loadCompanyStart, _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.saveCompanyDetailsStart, _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.toggleCompanySubscriptionStatusStart, _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.deleteCompanyStart, (state) => ({
    ...state,
    loading: true,
})), 
// Error actions handling
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.loadCompaniesError, _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.loadCompanyError, _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.saveCompanyDetailsError, _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.toggleCompanySubscriptionStatusError, _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.deleteCompanyError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
})));
function reducer(state, action) {
    return companiesReducer(state, action);
}
const getState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createFeatureSelector)('companies');
const selectCompanies = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(getState, (state) => {
    return {
        ...state,
        data: state.data.map((item) => new _models_company_model__WEBPACK_IMPORTED_MODULE_1__.CompanyAdapter().adapt(item)),
    };
});
const selectCompaniesData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(selectCompanies, (state) => state.data);
const companiesLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(getState, (state) => state.loading);
const selectCompanyById = (id) => {
    return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(selectCompanies, (state) => {
        return state.data.find((item) => item.id === id);
    });
};
const selectCompaniesStats = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(getState, (state) => ({
    loading: state.loading,
    count: state.pagination?.totalElements,
}));


/***/ }),

/***/ 15569:
/*!***************************************************!*\
  !*** ./src/app/reducers/company-users.reducer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "companyUsersLoading": () => (/* binding */ companyUsersLoading),
/* harmony export */   "getSelectedCompanyUser": () => (/* binding */ getSelectedCompanyUser),
/* harmony export */   "getState": () => (/* binding */ getState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectCompanyUserById": () => (/* binding */ selectCompanyUserById),
/* harmony export */   "selectCompanyUsers": () => (/* binding */ selectCompanyUsers),
/* harmony export */   "selectCompanyUsersData": () => (/* binding */ selectCompanyUsersData),
/* harmony export */   "selectCompanyUsersStats": () => (/* binding */ selectCompanyUsersStats)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _models_company_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/company-user.model */ 99971);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ 96487);
/* harmony import */ var _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/company-users.actions */ 30668);




const initialState = {
    data: [],
    selectedUser: null,
    loading: false,
    error: null,
};
const companyUsersReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createReducer)(initialState, 
// Load company users
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__.CompanyUserActions.loadCompanyUsers, (state, { keepDataWhileLoading }) => ({
    ...state,
    data: keepDataWhileLoading ? state.data : [],
    pagination: keepDataWhileLoading ? state.pagination : undefined,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__.CompanyUserActions.loadCompanyUsersSuccess, (state, { data, pagination }) => ({
    ...state,
    data,
    pagination,
    loading: false,
})), 
// Load Company User
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__.CompanyUserActions.loadCompanyUserSuccess, (state, { data }) => ({
    ...state,
    data: (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.addOrUpdate)(state, data),
    loading: false,
})), 
// Load And Select Company User
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__.CompanyUserActions.loadAndSelectCompanyUserSuccess, (state, { data }) => ({
    ...state,
    selectedUser: data,
    loading: false,
})), 
// Save details
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__.CompanyUserActions.saveCompanyUserDetailsSuccess, (state, { data }) => ({
    ...state,
    // If the user we are updating is a currently selected user we have to update it as well
    selectedUser: (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.addOrUpdate)({ data: [state.selectedUser] }, data)[0],
    loading: false,
})), 
// Base actions handling
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__.CompanyUserActions.loadAndSelectCompanyUser, (state) => ({
    ...state,
    selectedUser: null,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__.CompanyUserActions.loadCompanyUser, _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__.CompanyUserActions.saveCompanyUserDetails, (state) => ({
    ...state,
    error: null,
})), 
// Start actions handling
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__.CompanyUserActions.loadCompanyUsersStart, _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__.CompanyUserActions.loadCompanyUserStart, _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__.CompanyUserActions.loadAndSelectCompanyUserStart, _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__.CompanyUserActions.saveCompanyUserDetailsStart, (state) => ({
    ...state,
    loading: true,
})), 
// Error actions handling
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__.CompanyUserActions.loadCompanyUsersError, _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__.CompanyUserActions.loadCompanyUserError, _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__.CompanyUserActions.loadAndSelectCompanyUserError, _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__.CompanyUserActions.saveCompanyUserDetailsError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
})));
function reducer(state, action) {
    return companyUsersReducer(state, action);
}
const getState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createFeatureSelector)('companyUsers');
const selectCompanyUsers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(getState, (state) => {
    return {
        ...state,
        selectedUser: new _models_company_user_model__WEBPACK_IMPORTED_MODULE_0__.CompanyUserAdapter().adapt(state.selectedUser),
        data: state.data.map((item) => new _models_company_user_model__WEBPACK_IMPORTED_MODULE_0__.CompanyUserAdapter().adapt(item)),
    };
});
const selectCompanyUsersData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(selectCompanyUsers, (state) => state.data);
const companyUsersLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(getState, (state) => state.loading);
const selectCompanyUserById = (id) => {
    return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(selectCompanyUsers, (state) => {
        return state.data.find((item) => item.id === id);
    });
};
const selectCompanyUsersStats = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(getState, (state) => ({
    loading: state.loading,
    count: state.pagination?.totalElements,
}));
const getSelectedCompanyUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(selectCompanyUsers, (state) => state.selectedUser);


/***/ }),

/***/ 23057:
/*!*************************************************!*\
  !*** ./src/app/reducers/cost-center.reducer.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getState": () => (/* binding */ getState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectTravellerCostCenters": () => (/* binding */ selectTravellerCostCenters),
/* harmony export */   "selectTravellerCostCentersData": () => (/* binding */ selectTravellerCostCentersData),
/* harmony export */   "travellerCostCentersLoading": () => (/* binding */ travellerCostCentersLoading)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _models_cost_center_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/cost-center.model */ 52942);
/* harmony import */ var _actions_cost_center_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/cost-center.actions */ 97765);



const initialState = {
    data: [],
    loading: false,
    error: null,
};
const travellerCostCentersReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, 
// Load features
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_cost_center_actions__WEBPACK_IMPORTED_MODULE_1__.CostCenterActions.loadTravellerCostCenters, (state) => ({
    ...state,
    data: [],
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_cost_center_actions__WEBPACK_IMPORTED_MODULE_1__.CostCenterActions.loadTravellerCostCentersStart, (state) => ({
    ...state,
    loading: true,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_cost_center_actions__WEBPACK_IMPORTED_MODULE_1__.CostCenterActions.loadTravellerCostCentersSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_cost_center_actions__WEBPACK_IMPORTED_MODULE_1__.CostCenterActions.loadTravellerCostCentersError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
})));
function reducer(state, action) {
    return travellerCostCentersReducer(state, action);
}
const getState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)('costCenter');
const selectTravellerCostCenters = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => {
    return {
        ...state,
        data: state.data.map((item) => new _models_cost_center_model__WEBPACK_IMPORTED_MODULE_0__.TravellerCostCentersAdapter().adapt(item)),
    };
});
const selectTravellerCostCentersData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectTravellerCostCenters, (state) => state.data);
const travellerCostCentersLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => state.loading);


/***/ }),

/***/ 31000:
/*!***********************************************!*\
  !*** ./src/app/reducers/countries.reducer.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countriesLoading": () => (/* binding */ countriesLoading),
/* harmony export */   "getState": () => (/* binding */ getState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectCountries": () => (/* binding */ selectCountries),
/* harmony export */   "selectCountriesData": () => (/* binding */ selectCountriesData)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _actions_countries_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/countries.actions */ 45658);


const initialState = {
    data: [],
    loading: false,
    error: null,
};
const countriesReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, 
// Load countries
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_countries_actions__WEBPACK_IMPORTED_MODULE_0__.CountryActions.loadCountries, (state) => ({
    ...state,
    data: [],
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_countries_actions__WEBPACK_IMPORTED_MODULE_0__.CountryActions.loadCountriesStart, (state) => ({
    ...state,
    loading: true,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_countries_actions__WEBPACK_IMPORTED_MODULE_0__.CountryActions.loadCountriesSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_countries_actions__WEBPACK_IMPORTED_MODULE_0__.CountryActions.loadCountriesError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
})));
function reducer(state, action) {
    return countriesReducer(state, action);
}
const getState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)('countries');
const selectCountries = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getState, (state) => state);
const selectCountriesData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getState, (state) => state.data);
const countriesLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getState, (state) => state.loading);


/***/ }),

/***/ 33371:
/*!**********************************************!*\
  !*** ./src/app/reducers/features.reducer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "featuresLoading": () => (/* binding */ featuresLoading),
/* harmony export */   "getState": () => (/* binding */ getState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectFeatures": () => (/* binding */ selectFeatures),
/* harmony export */   "selectFeaturesData": () => (/* binding */ selectFeaturesData),
/* harmony export */   "selectFeaturesStats": () => (/* binding */ selectFeaturesStats)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _models_feature_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/feature.model */ 54896);
/* harmony import */ var _actions_features_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/features.actions */ 71176);



const initialState = {
    data: [],
    loading: false,
    error: null,
};
const featuresReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, 
// Load features
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_features_actions__WEBPACK_IMPORTED_MODULE_1__.FeatureActions.loadFeatures, (state) => ({
    ...state,
    data: [],
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_features_actions__WEBPACK_IMPORTED_MODULE_1__.FeatureActions.loadFeaturesSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_features_actions__WEBPACK_IMPORTED_MODULE_1__.FeatureActions.loadFeaturesError, _actions_features_actions__WEBPACK_IMPORTED_MODULE_1__.FeatureActions.toggleFeatureStatusError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
})), 
// Toggle state
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_features_actions__WEBPACK_IMPORTED_MODULE_1__.FeatureActions.toggleFeatureStatus, (state) => ({
    ...state,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_features_actions__WEBPACK_IMPORTED_MODULE_1__.FeatureActions.loadFeaturesStart, _actions_features_actions__WEBPACK_IMPORTED_MODULE_1__.FeatureActions.toggleFeatureStatusStart, (state) => ({
    ...state,
    loading: true,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_features_actions__WEBPACK_IMPORTED_MODULE_1__.FeatureActions.toggleFeatureStatusSuccess, (state, { data }) => ({
    ...state,
    data: [
        ...state.data.map((item) => {
            if (item.id === data.id) {
                item.enabled = data.enabled;
            }
            return item;
        }),
    ],
    loading: false,
})));
function reducer(state, action) {
    return featuresReducer(state, action);
}
const getState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)('features');
const selectFeatures = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => {
    return {
        ...state,
        data: state.data.map((item) => new _models_feature_model__WEBPACK_IMPORTED_MODULE_0__.FeatureAdapter().adapt(item)),
    };
});
const selectFeaturesData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectFeatures, (state) => state.data);
const featuresLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => state.loading);
const selectFeaturesStats = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => ({
    loading: state.loading,
    count: state.data.length,
}));


/***/ }),

/***/ 96487:
/*!*************************************!*\
  !*** ./src/app/reducers/helpers.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addOrUpdate": () => (/* binding */ addOrUpdate)
/* harmony export */ });
function addOrUpdate(state, newItem) {
    // If we don't have an ID we won't do any changes in the state
    if (!newItem.id)
        return state.data;
    if (state.data.some((item) => item.id === newItem.id)) {
        // Update existing item
        return [
            ...state.data.map((item) => {
                if (item.id === newItem.id) {
                    item = { ...item, ...newItem };
                }
                return item;
            }),
        ];
    }
    // Add new item
    return [...state.data, newItem];
}


/***/ }),

/***/ 61697:
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metaReducers": () => (/* binding */ metaReducers),
/* harmony export */   "reducers": () => (/* binding */ reducers)
/* harmony export */ });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngrx/router-store */ 61611);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _billing_requests_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./billing-requests.reducer */ 17682);
/* harmony import */ var _products_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.reducer */ 41878);
/* harmony import */ var _vat_categories_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vat-categories.reducer */ 63301);
/* harmony import */ var _countries_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./countries.reducer */ 31000);
/* harmony import */ var _vendors_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendors.reducer */ 65649);
/* harmony import */ var _vendors_payment_providers_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vendors-payment-providers.reducer */ 62031);
/* harmony import */ var _features_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features.reducer */ 33371);
/* harmony import */ var _users_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users.reducer */ 14178);
/* harmony import */ var _companies_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./companies.reducer */ 47856);
/* harmony import */ var _company_users_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./company-users.reducer */ 15569);
/* harmony import */ var _system_messages_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./system-messages.reducer */ 58683);
/* harmony import */ var _bookings_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bookings.reducer */ 6819);
/* harmony import */ var _carts_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./carts.reducer */ 5065);
/* harmony import */ var _layout_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout.reducer */ 92984);
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth.reducer */ 30239);
/* harmony import */ var _config_tmc_tmc_reducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../config/tmc/tmc.reducer */ 37926);
/* harmony import */ var _tenants_reducer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tenants.reducer */ 40778);
/* harmony import */ var _pnr_reducer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pnr.reducer */ 62152);
/* harmony import */ var _cost_center_reducer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cost-center.reducer */ 23057);
/* harmony import */ var _payment_reducer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./payment.reducer */ 50823);
/* harmony import */ var _checkout_reducer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./checkout.reducer */ 71539);























const reducers = {
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_22__.routerReducer,
    billingRequests: _billing_requests_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer,
    products: _products_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer,
    vatCategories: _vat_categories_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer,
    vendors: _vendors_reducer__WEBPACK_IMPORTED_MODULE_5__.reducer,
    vendorsPaymentProviders: _vendors_payment_providers_reducer__WEBPACK_IMPORTED_MODULE_6__.reducer,
    countries: _countries_reducer__WEBPACK_IMPORTED_MODULE_4__.reducer,
    features: _features_reducer__WEBPACK_IMPORTED_MODULE_7__.reducer,
    users: _users_reducer__WEBPACK_IMPORTED_MODULE_8__.reducer,
    companies: _companies_reducer__WEBPACK_IMPORTED_MODULE_9__.reducer,
    companyUsers: _company_users_reducer__WEBPACK_IMPORTED_MODULE_10__.reducer,
    systemMessages: _system_messages_reducer__WEBPACK_IMPORTED_MODULE_11__.reducer,
    bookings: _bookings_reducer__WEBPACK_IMPORTED_MODULE_12__.reducer,
    carts: _carts_reducer__WEBPACK_IMPORTED_MODULE_13__.reducer,
    layout: _layout_reducer__WEBPACK_IMPORTED_MODULE_14__.reducer,
    auth: _auth_reducer__WEBPACK_IMPORTED_MODULE_15__.reducer,
    tmc: _config_tmc_tmc_reducer__WEBPACK_IMPORTED_MODULE_16__.reducer,
    tenants: _tenants_reducer__WEBPACK_IMPORTED_MODULE_17__.reducer,
    pnr: _pnr_reducer__WEBPACK_IMPORTED_MODULE_18__.reducer,
    costCenter: _cost_center_reducer__WEBPACK_IMPORTED_MODULE_19__.reducer,
    payment: _payment_reducer__WEBPACK_IMPORTED_MODULE_20__.reducer,
    checkout: _checkout_reducer__WEBPACK_IMPORTED_MODULE_21__.reducer,
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? [] : [];


/***/ }),

/***/ 92984:
/*!********************************************!*\
  !*** ./src/app/reducers/layout.reducer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getState": () => (/* binding */ getState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "sidenavIsVisible": () => (/* binding */ sidenavIsVisible)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _actions_layout_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/layout.actions */ 82250);


const initialState = {
    sidenav: {
        visible: false,
    },
};
const layoutReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, 
// Sidenav visibility
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_0__.LayoutActions.toggleSidenav, (state, { visible }) => ({ sidenav: { visible } })));
function reducer(state, action) {
    return layoutReducer(state, action);
}
const getState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)('layout');
const sidenavIsVisible = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getState, (state) => !!state.sidenav.visible);


/***/ }),

/***/ 50823:
/*!*********************************************!*\
  !*** ./src/app/reducers/payment.reducer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getState": () => (/* binding */ getState),
/* harmony export */   "hasPaymentOptionsInStore": () => (/* binding */ hasPaymentOptionsInStore),
/* harmony export */   "isLoadingPaymentOptions": () => (/* binding */ isLoadingPaymentOptions),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectBillingProfiles": () => (/* binding */ selectBillingProfiles),
/* harmony export */   "selectLodgeCards": () => (/* binding */ selectLodgeCards),
/* harmony export */   "selectPaymentOptions": () => (/* binding */ selectPaymentOptions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _actions_payment_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/payment.actions */ 51729);
/* harmony import */ var _models_billing_profile_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/billing-profile.model */ 4200);



const initialState = {
    lodgeCards: [],
    billingProfiles: [],
    isLoadingPaymentOptions: false,
    error: null,
};
const paymentReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, 
// Load features
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_payment_actions__WEBPACK_IMPORTED_MODULE_0__.PaymentActions.loadPaymentOptions, (state) => ({
    ...state,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_payment_actions__WEBPACK_IMPORTED_MODULE_0__.PaymentActions.loadPaymentOptionsStart, (state) => ({
    ...state,
    lodgeCards: [],
    billingProfiles: [],
    isLoadingPaymentOptions: true,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_payment_actions__WEBPACK_IMPORTED_MODULE_0__.PaymentActions.loadPaymentOptionsSuccess, (state, { data }) => ({
    ...state,
    lodgeCards: data.lodgeCards,
    billingProfiles: data.billingProfiles,
    isLoadingPaymentOptions: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_payment_actions__WEBPACK_IMPORTED_MODULE_0__.PaymentActions.loadPaymentOptionsError, (state, { error }) => ({
    ...state,
    isLoadingPaymentOptions: false,
    error,
})));
function reducer(state, action) {
    return paymentReducer(state, action);
}
const getState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)('payment');
const selectPaymentOptions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => {
    return {
        ...state,
        billingProfiles: state.billingProfiles.map((item) => new _models_billing_profile_model__WEBPACK_IMPORTED_MODULE_1__.BillingProfileAdapter().adapt(item)),
    };
});
const selectLodgeCards = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectPaymentOptions, (state) => state.lodgeCards);
const selectBillingProfiles = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectPaymentOptions, (state) => state.billingProfiles);
const isLoadingPaymentOptions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => state.isLoadingPaymentOptions);
const hasPaymentOptionsInStore = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => state.billingProfiles.length > 0 && state.lodgeCards.length > 0);


/***/ }),

/***/ 62152:
/*!*****************************************!*\
  !*** ./src/app/reducers/pnr.reducer.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getState": () => (/* binding */ getState),
/* harmony export */   "isConfirmingPNR": () => (/* binding */ isConfirmingPNR),
/* harmony export */   "isValidatingPNR": () => (/* binding */ isValidatingPNR),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectAdditionalPNRData": () => (/* binding */ selectAdditionalPNRData),
/* harmony export */   "selectPNR": () => (/* binding */ selectPNR),
/* harmony export */   "selectPNRCartId": () => (/* binding */ selectPNRCartId),
/* harmony export */   "selectPNRData": () => (/* binding */ selectPNRData)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _models_pnr_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/pnr.model */ 59339);
/* harmony import */ var _actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/pnr.actions */ 99911);



const initialState = {
    data: null,
    additionalData: null,
    validating: false,
    confirming: false,
    cartId: null,
    error: null,
};
const pnrReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.validateFlightPnr, (state) => ({ ...state, data: null, error: null })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.validateFlightPnrStart, (state) => ({ ...state, validating: true })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.validateFlightPnrSuccess, (state, { data }) => ({ ...state, data, validating: false })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.validateFlightPnrError, (state, { error }) => ({ ...state, validating: false, error })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.setFlightFinalDestination, (state, { destination }) => ({
    ...state,
    data: { ...state.data, finalDestination: destination },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.confirmFlightPnr, (state) => ({ ...state, cartId: null, error: null })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.confirmFlightPnrStart, (state) => ({ ...state, confirming: true })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.confirmFlightPnrSuccess, (state, { data }) => ({
    ...state,
    cartId: data.cartId,
    confirming: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.confirmFlightPnrError, (state, { error }) => ({ ...state, confirming: false, error })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.resetValidatedPnr, (state) => ({ ...state, data: null, additionalData: null, cartId: null })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.saveAdditionalValidationData, (state, { data }) => ({ ...state, additionalData: data })));
function reducer(state, action) {
    return pnrReducer(state, action);
}
const getState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)('pnr');
const selectPNR = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => {
    return {
        ...state,
        data: new _models_pnr_model__WEBPACK_IMPORTED_MODULE_0__.FlightPNRValidationAdapter().adapt(state.data),
    };
});
const selectPNRData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectPNR, ({ data }) => data);
const selectAdditionalPNRData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectPNR, ({ additionalData }) => additionalData);
const isValidatingPNR = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => !!state.validating);
const selectPNRCartId = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, ({ cartId }) => cartId);
const isConfirmingPNR = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => !!state.confirming);


/***/ }),

/***/ 41878:
/*!**********************************************!*\
  !*** ./src/app/reducers/products.reducer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getState": () => (/* binding */ getState),
/* harmony export */   "productsLoading": () => (/* binding */ productsLoading),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectProducts": () => (/* binding */ selectProducts),
/* harmony export */   "selectProductsData": () => (/* binding */ selectProductsData),
/* harmony export */   "selectProductsPagination": () => (/* binding */ selectProductsPagination),
/* harmony export */   "selectProductsStats": () => (/* binding */ selectProductsStats)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/product.model */ 81454);
/* harmony import */ var _actions_products_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/products.actions */ 56049);



const initialState = {
    data: [],
    loading: false,
    error: null,
};
const productsReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.loadProducts, (state, { keepDataWhileLoading }) => ({
    ...state,
    data: keepDataWhileLoading ? state.data : [],
    pagination: keepDataWhileLoading ? state.pagination : undefined,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.loadProductsStart, _actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.toggleProductStatusStart, _actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.saveProductDetailsStart, (state) => ({
    ...state,
    loading: true,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.loadProductsSuccess, (state, { data, pagination }) => ({
    ...state,
    data,
    pagination,
    loading: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.loadProductsError, _actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.toggleProductStatusError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
})), 
// Save details
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.toggleProductStatus, _actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.saveProductDetails, (state) => ({
    ...state,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.saveProductDetailsSuccess, _actions_products_actions__WEBPACK_IMPORTED_MODULE_1__.ProductActions.toggleProductStatusSuccess, (state) => ({
    ...state,
    loading: false,
})));
function reducer(state, action) {
    return productsReducer(state, action);
}
const getState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)('products');
const selectProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => {
    return {
        ...state,
        data: state.data.map((item) => new _models_product_model__WEBPACK_IMPORTED_MODULE_0__.ProductAdapter().adapt(item)),
    };
});
const selectProductsData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectProducts, (state) => state.data);
const selectProductsPagination = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => state.pagination || {});
const productsLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => state.loading);
const selectProductsStats = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => ({
    loading: state.loading,
    count: state.pagination?.totalElements,
}));


/***/ }),

/***/ 42401:
/*!********************************************!*\
  !*** ./src/app/reducers/router.reducer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectCurrentRoute": () => (/* binding */ selectCurrentRoute),
/* harmony export */   "selectFragment": () => (/* binding */ selectFragment),
/* harmony export */   "selectQueryParam": () => (/* binding */ selectQueryParam),
/* harmony export */   "selectQueryParams": () => (/* binding */ selectQueryParams),
/* harmony export */   "selectRouteData": () => (/* binding */ selectRouteData),
/* harmony export */   "selectRouteParam": () => (/* binding */ selectRouteParam),
/* harmony export */   "selectRouteParams": () => (/* binding */ selectRouteParams),
/* harmony export */   "selectRouter": () => (/* binding */ selectRouter),
/* harmony export */   "selectUrl": () => (/* binding */ selectUrl)
/* harmony export */ });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/router-store */ 61611);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);


const selectRouter = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('router');
const { selectCurrentRoute, // select the current route
selectFragment, // select the current route fragment
selectQueryParams, // select the current route query params
selectQueryParam, // factory function to select a query param
selectRouteParams, // select the current route params
selectRouteParam, // factory function to select a route param
selectRouteData, // select the current route data
selectUrl, // select the current url
 } = (0,_ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__.getSelectors)(selectRouter);


/***/ }),

/***/ 58683:
/*!*****************************************************!*\
  !*** ./src/app/reducers/system-messages.reducer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getState": () => (/* binding */ getState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectSystemMessageById": () => (/* binding */ selectSystemMessageById),
/* harmony export */   "selectSystemMessages": () => (/* binding */ selectSystemMessages),
/* harmony export */   "selectSystemMessagesData": () => (/* binding */ selectSystemMessagesData),
/* harmony export */   "selectSystemMessagesStats": () => (/* binding */ selectSystemMessagesStats),
/* harmony export */   "systemMessagesLoading": () => (/* binding */ systemMessagesLoading)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _models_system_message_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/system-message.model */ 95609);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ 96487);
/* harmony import */ var _actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/system-messages.actions */ 26873);




const initialState = {
    data: [],
    loading: false,
    error: null,
};
const systemMessagesReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createReducer)(initialState, 
// Load systemMessages
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_2__.SystemMessageActions.loadSystemMessages, (state, { keepDataWhileLoading }) => ({
    ...state,
    data: keepDataWhileLoading ? state.data : [],
    pagination: keepDataWhileLoading ? state.pagination : undefined,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_2__.SystemMessageActions.loadSystemMessagesSuccess, (state, { data, pagination }) => ({
    ...state,
    data,
    pagination,
    loading: false,
})), 
// Load SystemMessage
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_2__.SystemMessageActions.loadSystemMessageSuccess, (state, { data }) => ({
    ...state,
    data: (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.addOrUpdate)(state, data),
    loading: false,
})), 
// Save and Delete
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_2__.SystemMessageActions.saveSystemMessageSuccess, _actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_2__.SystemMessageActions.deleteSystemMessageSuccess, (state) => ({
    ...state,
    loading: false,
})), 
// Base actions handling
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_2__.SystemMessageActions.loadSystemMessage, _actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_2__.SystemMessageActions.saveSystemMessage, _actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_2__.SystemMessageActions.deleteSystemMessage, (state) => ({
    ...state,
    error: null,
})), 
// Start actions handling
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_2__.SystemMessageActions.loadSystemMessagesStart, _actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_2__.SystemMessageActions.loadSystemMessageStart, _actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_2__.SystemMessageActions.saveSystemMessageStart, _actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_2__.SystemMessageActions.deleteSystemMessageStart, (state) => ({
    ...state,
    loading: true,
})), 
// Error actions handling
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_2__.SystemMessageActions.loadSystemMessagesError, _actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_2__.SystemMessageActions.loadSystemMessageError, _actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_2__.SystemMessageActions.saveSystemMessageError, _actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_2__.SystemMessageActions.deleteSystemMessageError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
})));
function reducer(state, action) {
    return systemMessagesReducer(state, action);
}
const getState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createFeatureSelector)('systemMessages');
const selectSystemMessages = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(getState, (state) => {
    return {
        ...state,
        data: state.data.map((item) => new _models_system_message_model__WEBPACK_IMPORTED_MODULE_0__.SystemMessageAdapter().adapt(item)),
    };
});
const selectSystemMessagesData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(selectSystemMessages, ({ data }) => data);
const systemMessagesLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(getState, (state) => state.loading);
const selectSystemMessageById = (id) => {
    return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(getState, (state) => {
        return new _models_system_message_model__WEBPACK_IMPORTED_MODULE_0__.SystemMessageAdapter().adapt(state.data.find((item) => item.id === id));
    });
};
const selectSystemMessagesStats = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(getState, (state) => ({
    loading: state.loading,
    count: state.pagination?.totalElements,
}));


/***/ }),

/***/ 40778:
/*!*********************************************!*\
  !*** ./src/app/reducers/tenants.reducer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getState": () => (/* binding */ getState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectTenants": () => (/* binding */ selectTenants),
/* harmony export */   "selectTenantsData": () => (/* binding */ selectTenantsData),
/* harmony export */   "tenantsLoading": () => (/* binding */ tenantsLoading)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _config_tmc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/tmc */ 77434);
/* harmony import */ var _actions_tenant_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/tenant.actions */ 23138);



const initialState = {
    data: [],
    loading: false,
    error: null,
};
const tenantsReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_tenant_actions__WEBPACK_IMPORTED_MODULE_1__.TenantActions.loadPrimaryTenants, (state) => ({
    ...state,
    data: [],
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_tenant_actions__WEBPACK_IMPORTED_MODULE_1__.TenantActions.loadPrimaryTenantsStart, (state) => ({
    ...state,
    loading: true,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_tenant_actions__WEBPACK_IMPORTED_MODULE_1__.TenantActions.loadPrimaryTenantsSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_tenant_actions__WEBPACK_IMPORTED_MODULE_1__.TenantActions.loadPrimaryTenantsError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
})));
function reducer(state, action) {
    return tenantsReducer(state, action);
}
const getState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)('tenants');
const selectTenants = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => {
    return {
        ...state,
        data: state.data.map((tenant) => new _config_tmc__WEBPACK_IMPORTED_MODULE_0__.TmcAdapter().adapt(tenant)),
    };
});
const selectTenantsData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectTenants, (state) => state.data);
const tenantsLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => state.loading);


/***/ }),

/***/ 14178:
/*!*******************************************!*\
  !*** ./src/app/reducers/users.reducer.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getState": () => (/* binding */ getState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectUsers": () => (/* binding */ selectUsers),
/* harmony export */   "selectUsersData": () => (/* binding */ selectUsersData),
/* harmony export */   "selectUsersPagination": () => (/* binding */ selectUsersPagination),
/* harmony export */   "selectUsersStats": () => (/* binding */ selectUsersStats),
/* harmony export */   "usersLoading": () => (/* binding */ usersLoading)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ 84872);
/* harmony import */ var _actions_users_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/users.actions */ 67421);



const initialState = {
    data: [],
    loading: false,
    error: null,
};
const usersReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_users_actions__WEBPACK_IMPORTED_MODULE_1__.UserActions.loadUsers, (state, { keepDataWhileLoading }) => ({
    ...state,
    data: keepDataWhileLoading ? state.data : [],
    pagination: keepDataWhileLoading ? state.pagination : undefined,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_users_actions__WEBPACK_IMPORTED_MODULE_1__.UserActions.loadUsersSuccess, (state, { data, pagination }) => ({
    ...state,
    data,
    pagination,
    loading: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_users_actions__WEBPACK_IMPORTED_MODULE_1__.UserActions.loadUsersError, _actions_users_actions__WEBPACK_IMPORTED_MODULE_1__.UserActions.saveUserDetailsError, _actions_users_actions__WEBPACK_IMPORTED_MODULE_1__.UserActions.changeUserPasswordError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_users_actions__WEBPACK_IMPORTED_MODULE_1__.UserActions.saveUserDetails, _actions_users_actions__WEBPACK_IMPORTED_MODULE_1__.UserActions.changeUserPassword, (state) => ({
    ...state,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_users_actions__WEBPACK_IMPORTED_MODULE_1__.UserActions.loadUsersStart, _actions_users_actions__WEBPACK_IMPORTED_MODULE_1__.UserActions.saveUserDetailsStart, _actions_users_actions__WEBPACK_IMPORTED_MODULE_1__.UserActions.changeUserPasswordStart, (state) => ({
    ...state,
    loading: true,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_users_actions__WEBPACK_IMPORTED_MODULE_1__.UserActions.saveUserDetailsSuccess, _actions_users_actions__WEBPACK_IMPORTED_MODULE_1__.UserActions.changeUserPasswordSuccess, (state) => ({
    ...state,
    loading: false,
})));
function reducer(state, action) {
    return usersReducer(state, action);
}
const getState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)('users');
const selectUsers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => {
    return {
        ...state,
        data: state.data.map((item) => new _models_user_model__WEBPACK_IMPORTED_MODULE_0__.UserAdapter().adapt(item)),
    };
});
const selectUsersData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectUsers, (state) => state.data);
const selectUsersPagination = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => state.pagination || {});
const usersLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => state.loading);
const selectUsersStats = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => ({
    loading: state.loading,
    count: state.pagination?.totalElements,
}));


/***/ }),

/***/ 63301:
/*!****************************************************!*\
  !*** ./src/app/reducers/vat-categories.reducer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getState": () => (/* binding */ getState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectVatCategories": () => (/* binding */ selectVatCategories),
/* harmony export */   "selectVatCategoriesData": () => (/* binding */ selectVatCategoriesData),
/* harmony export */   "selectVatCategoriesPagination": () => (/* binding */ selectVatCategoriesPagination),
/* harmony export */   "selectVatCategoriesStats": () => (/* binding */ selectVatCategoriesStats),
/* harmony export */   "vatCategoriesLoading": () => (/* binding */ vatCategoriesLoading)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _models_vat_category_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/vat-category.model */ 62342);
/* harmony import */ var _actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/vat-categories.actions */ 54871);



const initialState = {
    data: [],
    loading: false,
    error: null,
};
const vatCategoriesReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, 
// Load vat categories
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.loadVatCategories, (state, { keepDataWhileLoading }) => ({
    ...state,
    data: keepDataWhileLoading ? state.data : [],
    pagination: keepDataWhileLoading ? state.pagination : undefined,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.loadVatCategoriesStart, _actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.toggleVatCategoryStatusStart, _actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.saveVatCategoryDetailsStart, (state) => ({
    ...state,
    loading: true,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.loadVatCategoriesSuccess, (state, { data, pagination }) => ({
    ...state,
    data,
    pagination,
    loading: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.loadVatCategoriesError, _actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.toggleVatCategoryStatusError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
})), 
// Toggle state
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.toggleVatCategoryStatus, _actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.saveVatCategoryDetails, (state) => ({
    ...state,
    error: null,
})), 
// Save and Toggle
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.saveVatCategoryDetailsSuccess, _actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_1__.VatCategoryActions.toggleVatCategoryStatusSuccess, (state) => ({
    ...state,
    loading: false,
})));
function reducer(state, action) {
    return vatCategoriesReducer(state, action);
}
const getState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)('vatCategories');
const selectVatCategories = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => {
    return {
        ...state,
        data: state.data.map((item) => new _models_vat_category_model__WEBPACK_IMPORTED_MODULE_0__.VatCategoryAdapter().adapt(item)),
    };
});
const selectVatCategoriesData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectVatCategories, (state) => state.data);
const selectVatCategoriesPagination = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => state.pagination || {});
const vatCategoriesLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => state.loading);
const selectVatCategoriesStats = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => ({
    loading: state.loading,
    count: state.pagination?.totalElements,
}));


/***/ }),

/***/ 62031:
/*!***************************************************************!*\
  !*** ./src/app/reducers/vendors-payment-providers.reducer.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getState": () => (/* binding */ getState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectVendorsPaymentProviders": () => (/* binding */ selectVendorsPaymentProviders),
/* harmony export */   "selectVendorsPaymentProvidersData": () => (/* binding */ selectVendorsPaymentProvidersData),
/* harmony export */   "selectVendorsPaymentProvidersPagination": () => (/* binding */ selectVendorsPaymentProvidersPagination),
/* harmony export */   "selectVendorsPaymentProvidersStats": () => (/* binding */ selectVendorsPaymentProvidersStats),
/* harmony export */   "vendorsPaymentProviderLoading": () => (/* binding */ vendorsPaymentProviderLoading)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _models_vendors_payment_provider_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/vendors-payment-provider.model */ 37042);
/* harmony import */ var _actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/vendors-payment-providers.actions */ 43850);



const initialState = {
    data: [],
    loading: false,
    error: null,
};
const vendorsPaymentProvidersReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.loadVendorsPaymentProviders, (state, { keepDataWhileLoading }) => ({
    ...state,
    data: keepDataWhileLoading ? state.data : [],
    pagination: keepDataWhileLoading ? state.pagination : undefined,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.loadVendorsPaymentProvidersStart, _actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.toggleVendorsPaymentProviderStatusStart, _actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.saveVendorsPaymentProviderDetailsStart, (state) => ({
    ...state,
    loading: true,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.loadVendorsPaymentProvidersSuccess, (state, { data, pagination }) => ({
    ...state,
    data,
    pagination,
    loading: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.loadVendorsPaymentProvidersError, _actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.toggleVendorsPaymentProviderStatusError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
})), 
// Save details
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.saveVendorsPaymentProviderDetails, _actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.toggleVendorsPaymentProviderStatus, (state) => ({
    ...state,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.saveVendorsPaymentProviderDetailsSuccess, _actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_1__.VendorsPaymentProviderActions.toggleVendorsPaymentProviderStatusSuccess, (state) => ({
    ...state,
    loading: false,
})));
function reducer(state, action) {
    return vendorsPaymentProvidersReducer(state, action);
}
const getState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)('vendorsPaymentProviders');
const selectVendorsPaymentProviders = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => {
    return {
        ...state,
        data: state.data.map((item) => new _models_vendors_payment_provider_model__WEBPACK_IMPORTED_MODULE_0__.VendorsPaymentProviderAdapter().adapt(item)),
    };
});
const selectVendorsPaymentProvidersData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectVendorsPaymentProviders, (state) => state.data);
const selectVendorsPaymentProvidersPagination = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => state.pagination || {});
const vendorsPaymentProviderLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => state.loading);
const selectVendorsPaymentProvidersStats = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => ({
    loading: state.loading,
    count: state.pagination?.totalElements,
}));


/***/ }),

/***/ 65649:
/*!*********************************************!*\
  !*** ./src/app/reducers/vendors.reducer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getState": () => (/* binding */ getState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectVendors": () => (/* binding */ selectVendors),
/* harmony export */   "selectVendorsData": () => (/* binding */ selectVendorsData),
/* harmony export */   "selectVendorsStats": () => (/* binding */ selectVendorsStats),
/* harmony export */   "vendorsLoading": () => (/* binding */ vendorsLoading)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _models_vendor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/vendor.model */ 20055);
/* harmony import */ var _actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/vendors.actions */ 98233);



const initialState = {
    data: [],
    loading: false,
    error: null,
};
const vendorsReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, 
// Load vendors
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.loadVendors, (state, { keepDataWhileLoading }) => ({
    ...state,
    data: keepDataWhileLoading ? state.data : [],
    pagination: keepDataWhileLoading ? state.pagination : undefined,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.loadVendorsSuccess, (state, { data, pagination }) => ({
    ...state,
    data,
    pagination,
    loading: false,
})), 
// Save and Delete
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.saveVendorDetailsSuccess, _actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.toggleVendorStatusSuccess, _actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.deleteVendorSuccess, (state) => ({
    ...state,
    loading: false,
})), 
// Base actions handling
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.saveVendorDetails, _actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.toggleVendorStatus, _actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.deleteVendor, (state) => ({
    ...state,
    error: null,
})), 
// Start actions handling
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.loadVendorsStart, _actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.toggleVendorStatusStart, _actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.saveVendorDetailsStart, _actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.deleteVendorStart, (state) => ({
    ...state,
    loading: true,
})), 
// Error actions handling
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.loadVendorsError, _actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.toggleVendorStatusError, _actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.saveVendorDetailsError, _actions_vendors_actions__WEBPACK_IMPORTED_MODULE_1__.VendorActions.deleteVendorError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
})));
function reducer(state, action) {
    return vendorsReducer(state, action);
}
const getState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)('vendors');
const selectVendors = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => {
    return {
        ...state,
        data: state.data.map((item) => new _models_vendor_model__WEBPACK_IMPORTED_MODULE_0__.VendorAdapter().adapt(item)),
    };
});
const selectVendorsData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectVendors, (state) => state.data);
const vendorsLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => state.loading);
const selectVendorsStats = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getState, (state) => ({
    loading: state.loading,
    count: state.pagination?.totalElements,
}));


/***/ }),

/***/ 66397:
/*!***********************************************!*\
  !*** ./src/app/services/api-cache.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiCache": () => (/* binding */ ApiCache),
/* harmony export */   "ApiCacheWithMap": () => (/* binding */ ApiCacheWithMap)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class ApiCache {
}
const maxAge = 60 * 60 * 1000; // maximum cache age (60 minutes) - cleared on logout
class ApiCacheWithMap {
    constructor() {
        this.cache = new Map();
    }
    get(req) {
        const url = req.urlWithParams;
        const cached = this.cache.get(url);
        if (!cached)
            return undefined;
        const isExpired = cached.lastRead < Date.now() - maxAge;
        const expired = isExpired ? 'expired ' : '';
        this.log('HIT', `Found ${expired}cached response for "${url}".`);
        return isExpired ? undefined : cached.response;
    }
    put(req, response, group) {
        const url = req.urlWithParams;
        this.log('MISS', `Caching response from "${url}".`);
        const newEntry = { url, response: response.body, lastRead: Date.now(), group: group || 'default' };
        this.cache.set(url, newEntry);
        // remove expired cache entries
        const expired = Date.now() - maxAge;
        this.cache.forEach((cache, key, map) => {
            if (cache.lastRead < expired)
                map.delete(key);
        });
    }
    clearByGroupName(group) {
        this.cache.forEach((cache, key, map) => {
            if (cache.group === group)
                map.delete(key);
        });
    }
    clearAll() {
        this.cache = new Map();
    }
    log(action, text) {
        // Only log if debug mode is enabled
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.cache.debugMode)
            return;
        const colors = {
            HIT: 'forestgreen',
            MISS: 'darkorange',
        };
        console.log(`%cCache%c %c${action}%c ${text}`, `font-weight: normal; font-size: 9px; color: black;
      background: white; border: solid 1px black; padding: 2px 5px;
      border-radius: 3px; text-align: center`, ``, `font-weight: normal; font-size: 9px; color: white;
      background: ${colors[action]}; padding: 2px 5px;
      border-radius: 3px; text-align: center`, ``);
    }
}
ApiCacheWithMap.ɵfac = function ApiCacheWithMap_Factory(t) { return new (t || ApiCacheWithMap)(); };
ApiCacheWithMap.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiCacheWithMap, factory: ApiCacheWithMap.ɵfac });


/***/ }),

/***/ 92235:
/*!*****************************************************!*\
  !*** ./src/app/services/app-initializer.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppInitializerService": () => (/* binding */ AppInitializerService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);





class AppInitializerService {
    constructor(title, router) {
        this.title = title;
        this.router = router;
    }
    init() {
        this.setupPageTitle();
    }
    setupPageTitle() {
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.ResolveEnd)).subscribe((event) => {
            const { data } = AppInitializerService.getDeepestChildSnapshot(event.state.root);
            if (data?.title)
                this.title.setTitle(data.title);
        });
    }
    static getDeepestChildSnapshot(snapshot) {
        let deepestChild = snapshot.firstChild;
        while (deepestChild?.firstChild !== null) {
            deepestChild = deepestChild.firstChild;
        }
        return deepestChild || snapshot;
    }
}
AppInitializerService.ɵfac = function AppInitializerService_Factory(t) { return new (t || AppInitializerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AppInitializerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AppInitializerService, factory: AppInitializerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8067:
/*!*****************************************************!*\
  !*** ./src/app/services/billing-request.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingRequestService": () => (/* binding */ BillingRequestService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interceptors/cache.interceptor */ 41461);
/* harmony import */ var _models_pagination_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/pagination.model */ 62198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);





const CacheGroups = {
    list: 'billing-request.list',
};
class BillingRequestService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/api/tmcc/corporations/billing-profiles/requests';
    }
    list(params) {
        return this.http
            .get(this.baseUrl, { params, context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.cacheGroup)(CacheGroups.list) })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((data) => new _models_pagination_model__WEBPACK_IMPORTED_MODULE_1__.PaginatedDataAdapter().adapt(data)));
    }
    update(data) {
        const { id, ...withoutId } = data;
        return this.http.put(`${this.baseUrl}/${id}`, withoutId, {
            context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.clearGroups)([CacheGroups.list]),
        });
    }
}
BillingRequestService.ɵfac = function BillingRequestService_Factory(t) { return new (t || BillingRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
BillingRequestService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BillingRequestService, factory: BillingRequestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 62169:
/*!*********************************************!*\
  !*** ./src/app/services/booking.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingService": () => (/* binding */ BookingService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interceptors/cache.interceptor */ 41461);
/* harmony import */ var _models_pagination_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/pagination.model */ 62198);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);






const CacheGroups = {
    list: 'booking.list',
    details: (id) => `booking.details.${id}`,
};
class BookingService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/api/tmcc/bookings';
        this.baseUrlElastic = '/api/v3/tmcc/bookings';
        this.useElastic = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.useElasticSearch.bookings;
    }
    list(params) {
        const baseUrl = this.useElastic ? this.baseUrlElastic : this.baseUrl;
        return this.http
            .get(baseUrl, { params, context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.cacheGroup)(CacheGroups.list) })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((data) => new _models_pagination_model__WEBPACK_IMPORTED_MODULE_1__.PaginatedDataAdapter().adapt(data)));
    }
    getDetails(id) {
        const baseUrl = this.useElastic ? this.baseUrlElastic : this.baseUrl;
        return this.http.get(`${baseUrl}/${id}`, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.cacheGroup)(CacheGroups.details(id)) });
    }
    getReferenceTypes() {
        return this.http.get(`${this.baseUrl}/reference-types`);
    }
    update(booking) {
        return this.http.patch(`${this.baseUrl}/update-agent-note/${booking.cartId}`, { agentNote: booking.agentNote }, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.clearGroups)([CacheGroups.list, CacheGroups.details(booking.cartId)]) });
    }
}
BookingService.ɵfac = function BookingService_Factory(t) { return new (t || BookingService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
BookingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: BookingService, factory: BookingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 66224:
/*!**************************************************!*\
  !*** ./src/app/services/company-user.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyUserService": () => (/* binding */ CompanyUserService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interceptors/cache.interceptor */ 41461);
/* harmony import */ var _models_pagination_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/pagination.model */ 62198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);





const CacheGroups = {
    list: 'company-user.list',
    details: (id) => `company-user.details.${id}`,
};
class CompanyUserService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/api/tmcc/company-users';
    }
    list(params) {
        return this.http
            .get(this.baseUrl, { params, context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.cacheGroup)(CacheGroups.list) })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((data) => new _models_pagination_model__WEBPACK_IMPORTED_MODULE_1__.PaginatedDataAdapter().adapt(data)));
    }
    getDetails(id) {
        return this.http.get(`${this.baseUrl}/${id}`, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.cacheGroup)(CacheGroups.details(id)) });
    }
    saveDetails(user) {
        const groupsToClear = [CacheGroups.list];
        // Edit existing company user
        if (user.id) {
            groupsToClear.push(CacheGroups.details(user.id));
            return this.http.put(`${this.baseUrl}/${user.id}`, user, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.clearGroups)(groupsToClear) });
        }
        // Create new company user
        return this.http.post(this.baseUrl, user, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.clearGroups)(groupsToClear) });
    }
}
CompanyUserService.ɵfac = function CompanyUserService_Factory(t) { return new (t || CompanyUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
CompanyUserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CompanyUserService, factory: CompanyUserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6196:
/*!*********************************************!*\
  !*** ./src/app/services/company.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyService": () => (/* binding */ CompanyService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _models_company_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/company.model */ 44245);
/* harmony import */ var _interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interceptors/cache.interceptor */ 41461);
/* harmony import */ var _models_pagination_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/pagination.model */ 62198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);






const CacheGroups = {
    list: 'company.list',
    details: (id) => `company.details.${id}`,
};
class CompanyService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/api/tmcc/companies';
    }
    list(params) {
        return this.http
            .get(this.baseUrl, { params, context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_1__.cacheGroup)(CacheGroups.list) })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((data) => new _models_pagination_model__WEBPACK_IMPORTED_MODULE_2__.PaginatedDataAdapter().adapt(data)));
    }
    getDetails(id) {
        return this.http.get(`${this.baseUrl}/${id}`, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_1__.cacheGroup)(CacheGroups.details(id)) });
    }
    saveDetails(company) {
        const groupsToClear = [CacheGroups.list];
        // Edit existing company
        if (company.id) {
            groupsToClear.push(CacheGroups.details(company.id));
            return this.http.put(`${this.baseUrl}/${company.id}`, company, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_1__.clearGroups)(groupsToClear) });
        }
        // Create new company
        return this.http.post(this.baseUrl, company, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_1__.clearGroups)(groupsToClear) });
    }
    delete(company) {
        return this.http.delete(`${this.baseUrl}/${company.id}`, {
            context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_1__.clearGroups)([CacheGroups.list, CacheGroups.details(company.id)]),
        });
    }
    toggleSubscriptionStatus(company) {
        const action = company.subscriptionStatus === _models_company_model__WEBPACK_IMPORTED_MODULE_0__.SubscriptionStatus.DISABLED ? 'enable' : 'disable';
        return this.http.patch(`${this.baseUrl}/${company.id}/${action}`, {}, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_1__.clearGroups)([CacheGroups.list]) });
    }
}
CompanyService.ɵfac = function CompanyService_Factory(t) { return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
CompanyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CompanyService, factory: CompanyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 13787:
/*!*********************************************!*\
  !*** ./src/app/services/country.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryService": () => (/* binding */ CountryService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class CountryService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/api/details/locations/countries';
    }
    list() {
        return this.http.get(this.baseUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((data) => {
            return data.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
        }));
    }
}
CountryService.ɵfac = function CountryService_Factory(t) { return new (t || CountryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CountryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CountryService, factory: CountryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8059:
/*!*********************************************!*\
  !*** ./src/app/services/feature.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureService": () => (/* binding */ FeatureService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interceptors/cache.interceptor */ 41461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);




const CacheGroups = {
    list: 'feature.list',
};
class FeatureService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/api/tmcc/features';
    }
    list() {
        return this.http.get(this.baseUrl, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.cacheGroup)(CacheGroups.list) });
    }
    toggleStatus(feature) {
        return this.http
            .patch(`${this.baseUrl}/${feature.id}`, { enable: !feature.enabled }, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.clearGroups)([CacheGroups.list]) })
            .pipe(
        // Since we are not getting feature object as a response
        // we have to do the validation and return it instead
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            if (response.valid) {
                return { ...feature, enabled: !feature.enabled };
            }
            throw new Error('Error updating a feature.');
        }));
    }
}
FeatureService.ɵfac = function FeatureService_Factory(t) { return new (t || FeatureService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
FeatureService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FeatureService, factory: FeatureService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 66082:
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interceptors/cache.interceptor */ 41461);
/* harmony import */ var _models_pagination_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/pagination.model */ 62198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);





const CacheGroups = {
    list: 'product.list',
    details: (id) => `product.details.${id}`,
};
class ProductService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/api/tmcc/products';
    }
    list(params) {
        return this.http
            .get(this.baseUrl, { params, context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.cacheGroup)(CacheGroups.list) })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((data) => new _models_pagination_model__WEBPACK_IMPORTED_MODULE_1__.PaginatedDataAdapter().adapt(data)));
    }
    toggleStatus(product) {
        return this.saveDetails({ ...product, active: !product.active });
    }
    saveDetails(product) {
        const groupsToClear = [CacheGroups.list];
        // Edit existing product
        if (product.id) {
            const { id, ...withoutId } = product;
            groupsToClear.push(CacheGroups.details(id));
            return this.http.put(`${this.baseUrl}/${id}`, withoutId, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.clearGroups)(groupsToClear) });
        }
        // Create new product
        return this.http.post(this.baseUrl, product, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.clearGroups)(groupsToClear) });
    }
    getById(id) {
        return this.http.get(`${this.baseUrl}/${id}`, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.cacheGroup)(CacheGroups.details(id)) });
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
ProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 57533:
/*!****************************************************!*\
  !*** ./src/app/services/system-message.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemMessageService": () => (/* binding */ SystemMessageService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interceptors/cache.interceptor */ 41461);
/* harmony import */ var _models_pagination_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/pagination.model */ 62198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);





const CacheGroups = {
    list: 'system-message.list',
    details: (id) => `system-message.details.${id}`,
};
class SystemMessageService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/api/tmcc/system-messages';
    }
    list(params) {
        return this.http
            .get(this.baseUrl, { params, context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.cacheGroup)(CacheGroups.list) })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((data) => new _models_pagination_model__WEBPACK_IMPORTED_MODULE_1__.PaginatedDataAdapter().adapt(data)));
    }
    getDetails(id) {
        return this.http.get(`${this.baseUrl}/${id}`, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.cacheGroup)(CacheGroups.details(id)) });
    }
    saveDetails(systemMessage) {
        const groupsToClear = [CacheGroups.list];
        // Edit existing system message
        if (systemMessage.id) {
            groupsToClear.push(CacheGroups.details(systemMessage.id));
            return this.http.patch(`${this.baseUrl}/${systemMessage.id}`, systemMessage, {
                context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.clearGroups)(groupsToClear),
            });
        }
        // Create new systemMessage
        return this.http.post(this.baseUrl, systemMessage, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.clearGroups)(groupsToClear) });
    }
    delete(systemMessage) {
        return this.http.delete(`${this.baseUrl}/${systemMessage.id}`, {
            context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.clearGroups)([CacheGroups.list, CacheGroups.details(systemMessage.id)]),
        });
    }
}
SystemMessageService.ɵfac = function SystemMessageService_Factory(t) { return new (t || SystemMessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
SystemMessageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SystemMessageService, factory: SystemMessageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 62255:
/*!********************************************!*\
  !*** ./src/app/services/tenant.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TenantService": () => (/* binding */ TenantService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interceptors/cache.interceptor */ 41461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);





class TenantService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.dtms}/api`;
        this.baseUrlSecure = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.dtms}/api`;
    }
    getConfig() {
        return this.http
            .get(`${this.baseUrl}/tenant/config`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({ data }) => ({ tmc: this.mapTmcResponseObject(data) })));
    }
    getPrimaryTenants() {
        return this.http.get(`${this.baseUrlSecure}/tenants`, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_1__.cache)() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({ data }) => {
            return data.map((tenant) => this.mapTmcResponseObject(tenant));
        }));
    }
    mapTmcResponseObject(tenant) {
        return {
            id: tenant.key,
            name: tenant.name,
            logo: tenant.config?.tmc?.logo,
            logoInverted: tenant.config?.tmc?.logoInverted,
            headline: tenant.config?.tmc?.headline,
            platformLink: tenant.topLevelDomainCW,
            adminLink: tenant.topLevelDomainTMCC,
        };
    }
}
TenantService.ɵfac = function TenantService_Factory(t) { return new (t || TenantService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
TenantService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TenantService, factory: TenantService.ɵfac });


/***/ }),

/***/ 73071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interceptors/cache.interceptor */ 41461);
/* harmony import */ var _models_pagination_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/pagination.model */ 62198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);





const CacheGroups = {
    list: 'user.list',
    details: (id) => `user.details.${id}`,
    token: (username) => `user.token.${username}`,
};
class UserService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/api/tmcc/users';
    }
    list(params) {
        return this.http
            .get(this.baseUrl, { params, context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.cacheGroup)(CacheGroups.list) })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((data) => new _models_pagination_model__WEBPACK_IMPORTED_MODULE_1__.PaginatedDataAdapter().adapt(data)));
    }
    getById(id) {
        return this.http.get(`${this.baseUrl}/${id}`, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.cacheGroup)(CacheGroups.details(id)) });
    }
    saveDetails(user) {
        const groupsToClear = [CacheGroups.list];
        // Edit existing user
        if (user.id) {
            groupsToClear.push(CacheGroups.details(user.id), CacheGroups.token(user.username));
            const { id, ...withoutId } = user;
            return this.http.put(`${this.baseUrl}/${id}`, withoutId, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.clearGroups)(groupsToClear) });
        }
        // Create new user
        return this.http.post(this.baseUrl, user, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.clearGroups)(groupsToClear) });
    }
    changeUserPassword(user) {
        return this.http.put(`${this.baseUrl}/${user.id}/change-password`, { newPassword: user.password }, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.clearGroups)([CacheGroups.details(user.id), CacheGroups.token(user.username)]) });
    }
    getOverrideToken(username) {
        return this.http.get(`${this.baseUrl}-override`, {
            params: { username },
            context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.cacheGroup)(CacheGroups.token(username)),
        });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 58476:
/*!**************************************************!*\
  !*** ./src/app/services/vat-category.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VatCategoryService": () => (/* binding */ VatCategoryService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interceptors/cache.interceptor */ 41461);
/* harmony import */ var _models_pagination_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/pagination.model */ 62198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);





const CacheGroups = {
    list: 'vat-category.list',
};
class VatCategoryService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/api/tmcc/products/vat-categories';
    }
    list(params) {
        return this.http
            .get(this.baseUrl, { params, context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.cacheGroup)(CacheGroups.list) })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((data) => new _models_pagination_model__WEBPACK_IMPORTED_MODULE_1__.PaginatedDataAdapter().adapt(data)));
    }
    toggleStatus(vatCategory) {
        return this.saveDetails({ ...vatCategory, active: !vatCategory.active });
    }
    saveDetails(vatCategory) {
        const groupsToClear = [CacheGroups.list];
        // Edit existing vat category
        if (vatCategory.id) {
            const { id, ...withoutId } = vatCategory;
            return this.http.put(`${this.baseUrl}/${id}`, withoutId, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.clearGroups)(groupsToClear) });
        }
        // Create new vat category
        return this.http.post(this.baseUrl, vatCategory, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.clearGroups)(groupsToClear) });
    }
}
VatCategoryService.ɵfac = function VatCategoryService_Factory(t) { return new (t || VatCategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
VatCategoryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: VatCategoryService, factory: VatCategoryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 28422:
/*!********************************************!*\
  !*** ./src/app/services/vendor.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorService": () => (/* binding */ VendorService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interceptors/cache.interceptor */ 41461);
/* harmony import */ var _models_pagination_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/pagination.model */ 62198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);





const CacheGroups = {
    list: 'vendor.list',
};
class VendorService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/api/tmcc/products/vendors';
    }
    list(params) {
        return this.http
            .get(this.baseUrl, { params, context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.cacheGroup)(CacheGroups.list) })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((data) => new _models_pagination_model__WEBPACK_IMPORTED_MODULE_1__.PaginatedDataAdapter().adapt(data)));
    }
    toggleStatus(vendor) {
        return this.saveDetails({ ...vendor, active: !vendor.active });
    }
    saveDetails(vendor) {
        const groupsToClear = [CacheGroups.list];
        // Edit existing vendor
        if (vendor.id) {
            const { id, ...withoutId } = vendor;
            return this.http.put(`${this.baseUrl}/${id}`, withoutId, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.clearGroups)(groupsToClear) });
        }
        // Create new vendor
        return this.http.post(this.baseUrl, vendor, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.clearGroups)(groupsToClear) });
    }
    delete(vendor) {
        return this.http.delete(`${this.baseUrl}/${vendor.id}`, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.clearGroups)([CacheGroups.list]) });
    }
}
VendorService.ɵfac = function VendorService_Factory(t) { return new (t || VendorService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
VendorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: VendorService, factory: VendorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 74313:
/*!**************************************************************!*\
  !*** ./src/app/services/vendors-payment-provider.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorsPaymentProviderService": () => (/* binding */ VendorsPaymentProviderService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interceptors/cache.interceptor */ 41461);
/* harmony import */ var _models_pagination_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/pagination.model */ 62198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);





const CacheGroups = {
    list: 'vendorsPaymentProvider.list',
    details: (id) => `vendorsPaymentProvider.details.${id}`,
};
class VendorsPaymentProviderService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/api/tmcc/products/vendors/payment-providers';
    }
    list(params) {
        return this.http
            .get(this.baseUrl, { params, context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.cacheGroup)(CacheGroups.list) })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((data) => new _models_pagination_model__WEBPACK_IMPORTED_MODULE_1__.PaginatedDataAdapter().adapt(data)));
    }
    toggleStatus(item) {
        return this.saveDetails({ ...item, active: !item.active });
    }
    saveDetails(item) {
        const groupsToClear = [CacheGroups.list];
        // Edit existing vendor payment provider
        if (item.id) {
            const { id, ...withoutId } = item;
            groupsToClear.push(CacheGroups.details(id));
            return this.http.put(`${this.baseUrl}/${id}`, withoutId, {
                context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.clearGroups)(groupsToClear),
            });
        }
        // Create new vendor payment provider
        return this.http.post(this.baseUrl, item, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.clearGroups)(groupsToClear) });
    }
    getById(id) {
        return this.http.get(`${this.baseUrl}/${id}`, {
            context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.cacheGroup)(CacheGroups.details(id)),
        });
    }
}
VendorsPaymentProviderService.ɵfac = function VendorsPaymentProviderService_Factory(t) { return new (t || VendorsPaymentProviderService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
VendorsPaymentProviderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: VendorsPaymentProviderService, factory: VendorsPaymentProviderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 33056:
/*!**********************************************!*\
  !*** ./src/app/users/user-form.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserFormComponent": () => (/* binding */ UserFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base.component */ 83607);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model */ 84872);
/* harmony import */ var _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/auth.reducer */ 30239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _global_dialog_dialog_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global/dialog/dialog-title.component */ 37511);

















function UserFormComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("(", ctx_r0.user.fullName, ")");
} }
function UserFormComponent_mat_form_field_11_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r2.loggedInUser.hasPermissionToUpdate(type_r3))("value", type_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", type_r3, " ");
} }
function UserFormComponent_mat_form_field_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function UserFormComponent_mat_form_field_11_Template_mat_select_selectionChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.onUserTypeChange($event.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, UserFormComponent_mat_form_field_11_mat_option_4_Template, 2, 3, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.userTypes);
} }
class UserFormComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(store, formBuilder, dialogRef, data) {
        super();
        this.store = store;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.loggedInUser = null;
        this.userTypes = [_models_user_model__WEBPACK_IMPORTED_MODULE_1__.UserType.AGENT, _models_user_model__WEBPACK_IMPORTED_MODULE_1__.UserType.ADMIN, _models_user_model__WEBPACK_IMPORTED_MODULE_1__.UserType.SUPER_ADMIN];
        this.store
            .select(_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_2__.loggedInUser)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))
            .subscribe((user) => {
            this.loggedInUser = user;
        });
        // Convert input to UserModel, so we have access to additional methods
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__.UserAdapter().adapt(this.data.user);
    }
    ngOnInit() {
        const formFields = {
            firstName: [this.user.firstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            lastName: [this.user.lastName, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            type: [{ value: this.user.type, disabled: this.isCurrentUser }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            username: [{ value: this.user.username, disabled: this.isCurrentUser }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            phone: [this.user.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]],
        };
        // Current user will not be able to see or change his own user type
        if (this.isCurrentUser)
            delete formFields.type;
        this.form = this.formBuilder.group(formFields);
    }
    get isUpdate() {
        return !!this.user.id;
    }
    get isCurrentUser() {
        return this.user.id === this.loggedInUser.id;
    }
    close() {
        this.user.firstName = this.form.get('firstName').value;
        this.user.lastName = this.form.get('lastName').value;
        this.user.phone = this.form.get('phone').value;
        this.user.username = this.form.get('username').value;
        return this.user;
    }
    onUserTypeChange(item) {
        this.user.type = item;
    }
}
UserFormComponent.ɵfac = function UserFormComponent_Factory(t) { return new (t || UserFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA)); };
UserFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UserFormComponent, selectors: [["app-user-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 29, vars: 10, consts: [[1, "flex", "items-center", "space-x-2"], ["class", "text-sm font-normal text-gray-500", 4, "ngIf"], [1, "mt-4", "mb-6"], [1, "grid", "grid-cols-1", 3, "formGroup"], ["matInput", "", "formControlName", "username", "autocomplete", "off"], [4, "ngIf"], ["matInput", "", "formControlName", "firstName", "autocomplete", "off"], ["matInput", "", "formControlName", "lastName", "autocomplete", "off"], ["matInput", "", "formControlName", "phone", "autocomplete", "off"], [1, "mb-1", "justify-end"], ["mat-button", "", 3, "mat-dialog-close"], ["mat-button", "", "color", "primary", 3, "ngClass", "mat-dialog-close", "disabled"], [1, "text-sm", "font-normal", "text-gray-500"], ["formControlName", "type", 3, "selectionChange"], [3, "disabled", "value", 4, "ngFor", "ngForOf"], [3, "disabled", "value"]], template: function UserFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "dib-dialog-title")(1, "div", 0)(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, UserFormComponent_span_4_Template, 2, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-dialog-content", 2)(6, "form", 3)(7, "mat-form-field")(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, UserFormComponent_mat_form_field_11_Template, 5, 1, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-form-field")(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-form-field")(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-form-field")(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-dialog-actions", 9)(25, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx.isUpdate ? "Edit" : "Add", " ", ctx.isCurrentUser ? "Profile" : "User", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isUpdate && !ctx.isCurrentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isCurrentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.form.invalid ? "mat-flat-button" : "mat-stroked-button")("mat-dialog-close", ctx.close())("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.isUpdate ? "Save" : "Add", " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogActions, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _global_dialog_dialog_title_component__WEBPACK_IMPORTED_MODULE_3__.DialogTitleComponent], encapsulation: 2 });


/***/ }),

/***/ 68282:
/*!*******************************************************!*\
  !*** ./src/app/users/user-password-form.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPasswordFormComponent": () => (/* binding */ UserPasswordFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base.component */ 83607);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model */ 84872);
/* harmony import */ var _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/auth.reducer */ 30239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _global_dialog_dialog_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global/dialog/dialog-title.component */ 37511);















function UserPasswordFormComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("(", ctx_r0.user.fullName, ")");
} }
class UserPasswordFormComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(store, formBuilder, dialogRef, data) {
        super();
        this.store = store;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.loggedInUser = null;
        this.form = this.formBuilder.group({
            password: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)]],
            confirmPassword: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, super.matches('password')]],
        });
        this.subscriptions.add(this.form.controls.password.valueChanges.subscribe(() => {
            this.form.controls.confirmPassword.updateValueAndValidity();
        }));
        this.store
            .select(_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_2__.loggedInUser)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1))
            .subscribe((user) => {
            this.loggedInUser = user;
        });
        // Convert input to UserModel, so we have access to additional methods
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__.UserAdapter().adapt(this.data.user);
    }
    get isCurrentUser() {
        return this.user.id === this.loggedInUser.id;
    }
    close() {
        this.user.password = this.form.get('password').value;
        return this.user;
    }
}
UserPasswordFormComponent.ɵfac = function UserPasswordFormComponent_Factory(t) { return new (t || UserPasswordFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA)); };
UserPasswordFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UserPasswordFormComponent, selectors: [["app-user-password-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 22, vars: 6, consts: [[1, "flex", "items-center", "space-x-2"], ["class", "text-sm font-normal text-gray-500", 4, "ngIf"], [1, "mt-4", "mb-6"], [1, "grid", "grid-cols-1", 3, "formGroup"], [1, "mb-1"], ["matInput", "", "type", "password", "name", "password", "formControlName", "password", "autocomplete", "off"], ["matInput", "", "type", "password", "name", "confirmPassword", "formControlName", "confirmPassword", "autocomplete", "off"], [1, "mb-1", "justify-end"], ["mat-button", "", 3, "mat-dialog-close"], ["mat-button", "", "color", "primary", 3, "ngClass", "mat-dialog-close", "disabled"], [1, "text-sm", "font-normal", "text-gray-500"]], template: function UserPasswordFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "dib-dialog-title")(1, "div", 0)(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, UserPasswordFormComponent_span_4_Template, 2, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-dialog-content", 2)(6, "form", 3)(7, "mat-form-field", 4)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Password must be minimum 6 characters long");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-form-field")(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Confirm New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-dialog-actions", 7)(18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isCurrentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.form.invalid ? "mat-flat-button" : "mat-stroked-button")("mat-dialog-close", ctx.close())("disabled", ctx.form.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogActions, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _global_dialog_dialog_title_component__WEBPACK_IMPORTED_MODULE_3__.DialogTitleComponent], encapsulation: 2 });


/***/ }),

/***/ 72679:
/*!********************************************************!*\
  !*** ./src/app/utils/animations/element-cross-fade.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elementCrossFade": () => (/* binding */ elementCrossFade)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 24851);

const elementCrossFade = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('elementCrossFade', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('300ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })])),
    ]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('300ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 })])),
    ]),
]);


/***/ }),

/***/ 17773:
/*!*************************************************!*\
  !*** ./src/app/utils/helpers/get-jwt-claims.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getJwtClaims": () => (/* binding */ getJwtClaims)
/* harmony export */ });
function getJwtClaims(token) {
    const jwtData = token.split('.')[1];
    const decodedJwtJsonData = window.atob(jwtData);
    return JSON.parse(decodedJwtJsonData);
}


/***/ }),

/***/ 39122:
/*!**********************************************************!*\
  !*** ./src/app/utils/pipes/camel-case-to-spaces.pipe.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DibCamelCaseToSpacesPipe": () => (/* binding */ DibCamelCaseToSpacesPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class DibCamelCaseToSpacesPipe {
    transform(value) {
        if (!value)
            return '';
        // Convert camel case text to sentence case text and capitalize first letter
        // "companyName" will become "Company Name"
        return value
            .replace(/([A-Z])/g, (match) => ` ${match}`)
            .replace(/^./, (match) => match.toUpperCase())
            .trim();
    }
}
DibCamelCaseToSpacesPipe.ɵfac = function DibCamelCaseToSpacesPipe_Factory(t) { return new (t || DibCamelCaseToSpacesPipe)(); };
DibCamelCaseToSpacesPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dibCamelCaseToSpaces", type: DibCamelCaseToSpacesPipe, pure: true });


/***/ }),

/***/ 99763:
/*!*********************************************************!*\
  !*** ./src/app/utils/pipes/cancellation-policy.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DibCancellationPolicyPipe": () => (/* binding */ DibCancellationPolicyPipe)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 11799);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 55255);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 89864);
/* harmony import */ var _price_format_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./price-format.pipe */ 21598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);



class DibCancellationPolicyPipe {
    transform(policy, bookingStarts) {
        return this.translateCancellationPolicy(policy, bookingStarts);
    }
    /**
     * TODO: [localize] Add translations
     * TODO: [localize] Add formatDuration() wrapper, so we can have duration translations as well
     *
     * Examples of what might this function return
     *  - Non-refundable within 60 minutes of pick-up time
     *  - 80% refundable up to 60 minutes prior to ride
     *  - Free cancellation up to 120 minutes prior to ride
     *  - Non-refundable within 60 minutes of pick-up time
     *  - 30 SEK refundable up to 60 minutes prior to ride
     *  - Free cancellation up to 120 minutes prior to ride
     */
    translateCancellationPolicy(policy, bookingStarts) {
        let duration = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])({
            start: new Date(policy.toDate),
            end: new Date(bookingStarts),
        }));
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(policy.toDate), new Date(bookingStarts))) {
            duration = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])({
                start: new Date(policy.fromDate),
                end: new Date(bookingStarts),
            }));
            return `${this.getRefundAmount(policy)} within ${duration} of pick-up time`;
        }
        return `${this.getRefundAmount(policy)} up to ${duration} prior to ride`;
    }
    /**
     * TODO: [localize] Add translations
     *
     * Examples of what might this function return
     *  - Non-refundable
     *  - 80% refundable
     *  - 30 SEK refundable
     *  - Free cancellation
     */
    getRefundAmount(policy) {
        // Full refund
        if (policy.fullRefundable)
            return 'Free cancellation';
        // Non refundable
        if (policy.refundAmount === 0)
            return 'Non-refundable';
        // Percentage refund
        if (Number.isFinite(policy.cancellationFeeDetails?.percent)) {
            return `${100 - policy.cancellationFeeDetails.percent}% refundable`;
        }
        // Fixed value refund
        const price = new _price_format_pipe__WEBPACK_IMPORTED_MODULE_0__.DibPriceFormatPipe().transform(policy.refundAmount);
        return `${price} ${policy.currency} refundable`;
    }
}
DibCancellationPolicyPipe.ɵfac = function DibCancellationPolicyPipe_Factory(t) { return new (t || DibCancellationPolicyPipe)(); };
DibCancellationPolicyPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefinePipe"]({ name: "dibCancellationPolicy", type: DibCancellationPolicyPipe, pure: true });


/***/ }),

/***/ 61467:
/*!******************************************************!*\
  !*** ./src/app/utils/pipes/dashes-to-spaces.pipe.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DibDashesToSpacesPipe": () => (/* binding */ DibDashesToSpacesPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class DibDashesToSpacesPipe {
    transform(value) {
        if (!value)
            return '';
        // Replace any combination of dashes and underscore characters with spaces
        // "AT_RISK" will become "AT RISK"
        // "AT___RISK" will become "AT RISK"
        // "AT---__--RISK" will become "AT RISK"
        return value.replace(/[_-]+/g, ' ').trim();
    }
}
DibDashesToSpacesPipe.ɵfac = function DibDashesToSpacesPipe_Factory(t) { return new (t || DibDashesToSpacesPipe)(); };
DibDashesToSpacesPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dibDashesToSpaces", type: DibDashesToSpacesPipe, pure: true });


/***/ }),

/***/ 23341:
/*!******************************************!*\
  !*** ./src/app/utils/pipes/date.pipe.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DibDatePipe": () => (/* binding */ DibDatePipe),
/* harmony export */   "formatDibDate": () => (/* binding */ formatDibDate)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 4269);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 53250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


class DibDatePipe {
    transform(date, type) {
        return formatDibDate(date, type);
    }
}
DibDatePipe.ɵfac = function DibDatePipe_Factory(t) { return new (t || DibDatePipe)(); };
DibDatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dibDate", type: DibDatePipe, pure: true });
// Export function so it can be used directly as well
function formatDibDate(date, type) {
    if (!date)
        return '';
    switch (type) {
        case 'productDetailsShort':
            // Jan 29, 2021
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(date), 'LLL dd, yyyy');
        case 'productDetails':
            // Jan 29, 2021 (Fri)
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(date), 'LLL dd, yyyy (EEE)');
        case 'productDetailsWithTime':
            // Jan 29, 2021 (Fri) at 06:15
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(date), "LLL dd, yyyy (EEE) 'at' HH:mm");
        case 'yearsOld':
            // 21 years old
            return `${(0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(), new Date(date))} years old`;
        case 'distanceToNow':
            // 6 days ago
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(date), { addSuffix: true });
        case 'server':
            // 2021-03-08T19:40:42.593+01:00
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(date), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
        case 'time':
            // 06:15
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(date), 'HH:mm');
        case 'uiWithTime':
            // 2020-12-18 06:15
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(date), 'yyyy-MM-dd HH:mm');
        case 'ui':
        default:
            // 2020-12-18
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(date), 'yyyy-MM-dd');
    }
}


/***/ }),

/***/ 77469:
/*!**********************************************!*\
  !*** ./src/app/utils/pipes/duration.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DibDurationPipe": () => (/* binding */ DibDurationPipe),
/* harmony export */   "formatDibDuration": () => (/* binding */ formatDibDuration)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class DibDurationPipe {
    transform(duration, type) {
        return formatDibDuration(duration, type);
    }
}
DibDurationPipe.ɵfac = function DibDurationPipe_Factory(t) { return new (t || DibDurationPipe)(); };
DibDurationPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dibDuration", type: DibDurationPipe, pure: true });
// Export function so it can be used directly as well
function formatDibDuration(duration, type) {
    if (!duration)
        return '';
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


/***/ }),

/***/ 59916:
/*!*********************************************!*\
  !*** ./src/app/utils/pipes/pipes.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DibPipesModule": () => (/* binding */ DibPipesModule)
/* harmony export */ });
/* harmony import */ var _date_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.pipe */ 23341);
/* harmony import */ var _dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashes-to-spaces.pipe */ 61467);
/* harmony import */ var _camel_case_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camel-case-to-spaces.pipe */ 39122);
/* harmony import */ var _upperfirst_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upperfirst.pipe */ 63548);
/* harmony import */ var _duration_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duration.pipe */ 77469);
/* harmony import */ var _cancellation_policy_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cancellation-policy.pipe */ 99763);
/* harmony import */ var _price_format_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./price-format.pipe */ 21598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);








class DibPipesModule {
}
DibPipesModule.ɵfac = function DibPipesModule_Factory(t) { return new (t || DibPipesModule)(); };
DibPipesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: DibPipesModule });
DibPipesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](DibPipesModule, { declarations: [_date_pipe__WEBPACK_IMPORTED_MODULE_0__.DibDatePipe,
        _duration_pipe__WEBPACK_IMPORTED_MODULE_4__.DibDurationPipe,
        _dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_1__.DibDashesToSpacesPipe,
        _camel_case_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_2__.DibCamelCaseToSpacesPipe,
        _upperfirst_pipe__WEBPACK_IMPORTED_MODULE_3__.DibUpperFirstPipe,
        _cancellation_policy_pipe__WEBPACK_IMPORTED_MODULE_5__.DibCancellationPolicyPipe,
        _price_format_pipe__WEBPACK_IMPORTED_MODULE_6__.DibPriceFormatPipe], exports: [_date_pipe__WEBPACK_IMPORTED_MODULE_0__.DibDatePipe,
        _duration_pipe__WEBPACK_IMPORTED_MODULE_4__.DibDurationPipe,
        _dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_1__.DibDashesToSpacesPipe,
        _camel_case_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_2__.DibCamelCaseToSpacesPipe,
        _upperfirst_pipe__WEBPACK_IMPORTED_MODULE_3__.DibUpperFirstPipe,
        _cancellation_policy_pipe__WEBPACK_IMPORTED_MODULE_5__.DibCancellationPolicyPipe,
        _price_format_pipe__WEBPACK_IMPORTED_MODULE_6__.DibPriceFormatPipe] }); })();


/***/ }),

/***/ 21598:
/*!**************************************************!*\
  !*** ./src/app/utils/pipes/price-format.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DibPriceFormatPipe": () => (/* binding */ DibPriceFormatPipe)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class DibPriceFormatPipe {
    transform(value) {
        // Handle null values differently than zeros
        if (value === null)
            return '';
        const numValue = Number(value);
        const numberFormat = Number.isInteger(numValue) ? '1.0-0' : '1.2-2';
        // TODO: [localize] Do we want to use different locales depending on the current language?
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatNumber)(numValue, 'sv', numberFormat);
    }
}
DibPriceFormatPipe.ɵfac = function DibPriceFormatPipe_Factory(t) { return new (t || DibPriceFormatPipe)(); };
DibPriceFormatPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "dibPrice", type: DibPriceFormatPipe, pure: true });


/***/ }),

/***/ 63548:
/*!************************************************!*\
  !*** ./src/app/utils/pipes/upperfirst.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DibUpperFirstPipe": () => (/* binding */ DibUpperFirstPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class DibUpperFirstPipe {
    transform(value) {
        if (!value)
            return '';
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}
DibUpperFirstPipe.ɵfac = function DibUpperFirstPipe_Factory(t) { return new (t || DibUpperFirstPipe)(); };
DibUpperFirstPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dibUpperFirst", type: DibUpperFirstPipe, pure: true });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
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


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/en */ 49137);
/* harmony import */ var _angular_common_locales_it__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/it */ 4129);
/* harmony import */ var _angular_common_locales_sr_Latn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/sr-Latn */ 81673);
/* harmony import */ var _angular_common_locales_sv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/sv */ 75664);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);









(0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.registerLocaleData)(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_3__["default"], 'en');
(0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.registerLocaleData)(_angular_common_locales_sr_Latn__WEBPACK_IMPORTED_MODULE_4__["default"], 'sr');
(0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.registerLocaleData)(_angular_common_locales_it__WEBPACK_IMPORTED_MODULE_5__["default"], 'it');
(0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.registerLocaleData)(_angular_common_locales_sv__WEBPACK_IMPORTED_MODULE_6__["default"], 'sv');
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((error) => console.error(error));
// Log current application version in the console for easier debugging
// eslint-disable-next-line unicorn/prefer-module
const app = __webpack_require__(/*! ../package.json */ 4147);
console.groupCollapsed(`Application loaded %cv${app.version}`, `font-weight: normal;
  font-size: 9px;
  color: white;
  background: forestgreen;
  padding: 2px 5px;
  border-radius: 3px;
  text-align: center`);
console.log(`Application version: ${app.version}`);
console.groupEnd();


/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"admin-tool","version":"15.17.0","private":true,"repository":{"type":"git","url":"https://github.com/pajcho/admin-tool.git"},"scripts":{"ng":"ng","start":"ng serve","start:hmr":"ng serve --hmr","start:local":"ng serve --open --configuration local","build":"ng build","build:prod":"NODE_ENV=production ng build --configuration production","build:ci":"NODE_ENV=ci ng build --configuration ci","build:staging":"NODE_ENV=staging ng build --configuration staging","eslint":"eslint src --ext js,ts --fix","lint":"yarn stylelint && yarn eslint && yarn prettier","lint:deploy":"yarn stylelint --quiet && yarn eslint --quiet && yarn prettier:check","prettier:check":"prettier --check .","prettier":"prettier --write .","stylelint":"stylelint \\"src/**/*.scss\\" --fix","analyze":"webpack-bundle-analyzer dist/admin-tool/stats.json","stats":"yarn build --stats-json && yarn analyze","stats:prod":"yarn build:prod --stats-json && yarn analyze","cy:open":"cypress open","cy:run":"cypress run","cy:clean":"rimraf ./cypress/screenshots/ ./cypress/snapshots/ ./cypress/videos/","postinstall":"husky install"},"dependencies":{"@angular/animations":"14.2.8","@angular/cdk":"14.2.6","@angular/common":"14.2.8","@angular/compiler":"14.2.8","@angular/core":"14.2.8","@angular/forms":"14.2.8","@angular/material":"14.2.6","@angular/platform-browser":"14.2.8","@angular/platform-browser-dynamic":"14.2.8","@angular/router":"14.2.8","@ngrx/effects":"^14.3.2","@ngrx/router-store":"^14.3.2","@ngrx/schematics":"^14.3.2","@ngrx/store":"^14.3.2","@ngrx/store-devtools":"^14.3.2","autoprefixer":"^10.4.13","chance":"^1.1.9","date-fns":"^2.29.3","lodash-es":"^4.17.21","popper.js":"^1.16.1","postcss":"^8.4.18","primeicons":"^6.0.1","primeng":"^14.1.2","rxjs":"^7.5.7","tailwindcss":"^3.2.1","tslib":"2.4.1","zone.js":"~0.11.8"},"devDependencies":{"@angular-devkit/build-angular":"14.2.7","@angular/cli":"14.2.7","@angular/compiler-cli":"14.2.8","@types/node":"^18.11.9","@typescript-eslint/eslint-plugin":"5.42.0","@typescript-eslint/parser":"5.42.0","cypress":"9.7.0","cypress-localstorage-commands":"2.0.0","eslint":"8.26.0","eslint-config-airbnb-base":"15.0.0","eslint-config-prettier":"8.5.0","eslint-import-resolver-typescript":"3.5.2","eslint-plugin-cypress":"^2.12.1","eslint-plugin-import":"2.26.0","eslint-plugin-unicorn":"44.0.2","eslint-plugin-unused-imports":"2.0.0","husky":"8.0.1","lint-staged":"^13.0.3","prettier":"2.7.1","prettier-eslint":"15.0.1","prettier-plugin-tailwindcss":"^0.1.13","prettier-stylelint":"0.4.2","stylelint":"14.14.0","stylelint-config-prettier":"9.0.3","stylelint-config-sass-guidelines":"9.0.1","stylelint-config-standard":"29.0.0","stylelint-config-standard-scss":"^6.0.0","stylelint-selector-no-empty":"1.0.9","ts-node":"10.9.1","typescript":"4.8.4","webpack-bundle-analyzer":"^4.7.0"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map