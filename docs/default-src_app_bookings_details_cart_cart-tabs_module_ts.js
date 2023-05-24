"use strict";
(self["webpackChunkadmin_tool"] = self["webpackChunkadmin_tool"] || []).push([["default-src_app_bookings_details_cart_cart-tabs_module_ts"],{

/***/ 10060:
/*!**************************************************************!*\
  !*** ./src/app/bookings/details/cart/cart-tabs.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartTabsComponent": () => (/* binding */ CartTabsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base.component */ 83607);
/* harmony import */ var _reducers_carts_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../reducers/carts.reducer */ 5065);
/* harmony import */ var _utils_animations_element_cross_fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/animations/element-cross-fade */ 72679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _tabs_hotel_cart_tabs_hotel_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/hotel/cart-tabs-hotel-details.component */ 30140);
/* harmony import */ var _tabs_flight_cart_tabs_flight_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/flight/cart-tabs-flight-details.component */ 63968);
/* harmony import */ var _tabs_taxi_cart_tabs_taxi_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs/taxi/cart-tabs-taxi-details.component */ 77339);
/* harmony import */ var _tabs_rental_car_cart_tabs_rental_car_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs/rental-car/cart-tabs-rental-car-details.component */ 73368);
/* harmony import */ var _tabs_train_cart_tabs_train_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs/train/cart-tabs-train-details.component */ 91615);
/* harmony import */ var _tabs_generic_product_cart_tabs_generic_product_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabs/generic-product/cart-tabs-generic-product-details.component */ 50691);













const _c0 = function (a0) {
  return [a0];
};
function CartTabsComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CartTabsComponent_span_2_Template_span_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const tab_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.activeTab = tab_r2);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](2, _c0, ctx_r0.activeTab === tab_r2 ? "cursor-pointer border-b-2 border-dib-green-600" : "opacity-50"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", tab_r2, " ");
  }
}
function CartTabsComponent_ng_container_3_ng_template_1_app_cart_tabs_hotel_details_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-cart-tabs-hotel-details", 13);
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const last_r13 = ctx.last;
    const first_r14 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("pt-4", first_r14)("border-transparent", last_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@elementCrossFade", undefined)("data", item_r12);
  }
}
function CartTabsComponent_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, CartTabsComponent_ng_container_3_ng_template_1_app_cart_tabs_hotel_details_0_Template, 1, 6, "app-cart-tabs-hotel-details", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, ctx_r5.cart$).gps);
  }
}
function CartTabsComponent_ng_container_3_ng_template_2_app_cart_tabs_flight_details_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-cart-tabs-flight-details", 13);
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const last_r17 = ctx.last;
    const first_r18 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("pt-4", first_r18)("border-transparent", last_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@elementCrossFade", undefined)("data", item_r16);
  }
}
function CartTabsComponent_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, CartTabsComponent_ng_container_3_ng_template_2_app_cart_tabs_flight_details_0_Template, 1, 6, "app-cart-tabs-flight-details", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, ctx_r6.cart$).flightBookings);
  }
}
function CartTabsComponent_ng_container_3_ng_template_3_app_cart_tabs_taxi_details_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-cart-tabs-taxi-details", 13);
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const last_r21 = ctx.last;
    const first_r22 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("pt-4", first_r22)("border-transparent", last_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@elementCrossFade", undefined)("data", item_r20);
  }
}
function CartTabsComponent_ng_container_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, CartTabsComponent_ng_container_3_ng_template_3_app_cart_tabs_taxi_details_0_Template, 1, 6, "app-cart-tabs-taxi-details", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, ctx_r7.cart$).taxiBookings);
  }
}
function CartTabsComponent_ng_container_3_ng_template_4_app_cart_tabs_train_details_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-cart-tabs-train-details", 13);
  }
  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const last_r25 = ctx.last;
    const first_r26 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("pt-4", first_r26)("border-transparent", last_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@elementCrossFade", undefined)("data", item_r24);
  }
}
function CartTabsComponent_ng_container_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, CartTabsComponent_ng_container_3_ng_template_4_app_cart_tabs_train_details_0_Template, 1, 6, "app-cart-tabs-train-details", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, ctx_r8.cart$).trainBookings);
  }
}
function CartTabsComponent_ng_container_3_ng_template_5_app_cart_tabs_rental_car_details_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-cart-tabs-rental-car-details", 13);
  }
  if (rf & 2) {
    const item_r28 = ctx.$implicit;
    const last_r29 = ctx.last;
    const first_r30 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("pt-4", first_r30)("border-transparent", last_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@elementCrossFade", undefined)("data", item_r28);
  }
}
function CartTabsComponent_ng_container_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, CartTabsComponent_ng_container_3_ng_template_5_app_cart_tabs_rental_car_details_0_Template, 1, 6, "app-cart-tabs-rental-car-details", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, ctx_r9.cart$).rentalCarBookings);
  }
}
function CartTabsComponent_ng_container_3_ng_template_6_app_cart_tabs_generic_product_details_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-cart-tabs-generic-product-details", 13);
  }
  if (rf & 2) {
    const item_r32 = ctx.$implicit;
    const last_r33 = ctx.last;
    const first_r34 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("pt-4", first_r34)("border-transparent", last_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@elementCrossFade", undefined)("data", item_r32);
  }
}
function CartTabsComponent_ng_container_3_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, CartTabsComponent_ng_container_3_ng_template_6_app_cart_tabs_generic_product_details_0_Template, 1, 6, "app-cart-tabs-generic-product-details", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, ctx_r10.cart$).genericProducts);
  }
}
function CartTabsComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CartTabsComponent_ng_container_3_ng_template_1_Template, 2, 3, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CartTabsComponent_ng_container_3_ng_template_2_Template, 2, 3, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, CartTabsComponent_ng_container_3_ng_template_3_Template, 2, 3, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, CartTabsComponent_ng_container_3_ng_template_4_Template, 2, 3, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, CartTabsComponent_ng_container_3_ng_template_5_Template, 2, 3, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, CartTabsComponent_ng_container_3_ng_template_6_Template, 2, 3, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitch", ctx_r1.activeTab);
  }
}
class CartTabsComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(store) {
    super();
    this.store = store;
    this.availableTabs = [];
  }
  ngOnInit() {
    // Cart data must be in store already, loaded from the parent component
    // We will not try to load the cart data from here
    this.cart$ = this.store.select((0,_reducers_carts_reducer__WEBPACK_IMPORTED_MODULE_1__.selectCartById)(this.cartId));
    this.subscriptions.add(this.cart$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(cart => !!cart.id)).subscribe(cart => {
      this.cart = cart;
      this.initTabs();
    }));
  }
  initTabs() {
    this.availableTabs = this.getAvailableTabs();
    this.activeTab = this.availableTabs.length ? this.availableTabs[0] : null;
  }
  getAvailableTabs() {
    const availableTabs = [];
    if (this.cart.gps.length) availableTabs.push('hotels');
    if (this.cart.flightBookings.length) availableTabs.push('flights');
    if (this.cart.taxiBookings.length) availableTabs.push('taxi');
    if (this.cart.trainBookings.length) availableTabs.push('rails & bus');
    if (this.cart.genericProducts.length) availableTabs.push('generic products');
    if (this.cart.rentalCarBookings.length) availableTabs.push('cars');
    return availableTabs;
  }
}
CartTabsComponent.ɵfac = function CartTabsComponent_Factory(t) {
  return new (t || CartTabsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store));
};
CartTabsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: CartTabsComponent,
  selectors: [["app-cart-tabs"]],
  inputs: {
    cartId: "cartId"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 2,
  consts: [[1, "mt-4", "flex", "flex-col", "text-sm", "xs:text-xs"], [1, "mb-4", "flex", "whitespace-nowrap", "border-b"], ["class", "-mb-0.5 cursor-pointer p-2 pt-0 uppercase", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngSwitch", 4, "ngIf"], [1, "-mb-0.5", "cursor-pointer", "p-2", "pt-0", "uppercase", 3, "ngClass", "click"], [3, "ngSwitch"], ["ngSwitchCase", "hotels"], ["ngSwitchCase", "flights"], ["ngSwitchCase", "taxi"], ["ngSwitchCase", "rails & bus"], ["ngSwitchCase", "cars"], ["ngSwitchCase", "generic products"], ["class", "border-b py-8", 3, "data", "pt-4", "border-transparent", 4, "ngFor", "ngForOf"], [1, "border-b", "py-8", 3, "data"]],
  template: function CartTabsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CartTabsComponent_span_2_Template, 2, 4, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, CartTabsComponent_ng_container_3_Template, 7, 1, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.availableTabs);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.availableTabs.length);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitchCase, _tabs_hotel_cart_tabs_hotel_details_component__WEBPACK_IMPORTED_MODULE_3__.CartTabsHotelDetailsComponent, _tabs_flight_cart_tabs_flight_details_component__WEBPACK_IMPORTED_MODULE_4__.CartTabsFlightDetailsComponent, _tabs_taxi_cart_tabs_taxi_details_component__WEBPACK_IMPORTED_MODULE_5__.CartTabsTaxiDetailsComponent, _tabs_rental_car_cart_tabs_rental_car_details_component__WEBPACK_IMPORTED_MODULE_6__.CartTabsRentalCarDetailsComponent, _tabs_train_cart_tabs_train_details_component__WEBPACK_IMPORTED_MODULE_7__.CartTabsTrainDetailsComponent, _tabs_generic_product_cart_tabs_generic_product_details_component__WEBPACK_IMPORTED_MODULE_8__.CartTabsGenericProductDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
  encapsulation: 2,
  data: {
    animation: [_utils_animations_element_cross_fade__WEBPACK_IMPORTED_MODULE_2__.elementCrossFade]
  }
});

/***/ }),

/***/ 48203:
/*!***********************************************************!*\
  !*** ./src/app/bookings/details/cart/cart-tabs.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartTabsModule": () => (/* binding */ CartTabsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs */ 22143);
/* harmony import */ var _cart_tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-tabs.component */ 10060);
/* harmony import */ var _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/pipes/pipes.module */ 59916);
/* harmony import */ var _tabs_shared_cart_item_stat_cart_item_stat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/shared/cart-item-stat/cart-item-stat.component */ 51868);
/* harmony import */ var _tabs_shared_travelers_full_details_travelers_full_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/shared/travelers-full-details/travelers-full-details.component */ 85057);
/* harmony import */ var _global_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../global/dialog/dialog.module */ 13547);
/* harmony import */ var _global_plural_plural_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/plural/plural.module */ 14992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);











class CartTabsModule {
}
CartTabsModule.ɵfac = function CartTabsModule_Factory(t) { return new (t || CartTabsModule)(); };
CartTabsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CartTabsModule });
CartTabsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule, _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.DibPipesModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule, _global_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_5__.DialogModule, _global_plural_plural_module__WEBPACK_IMPORTED_MODULE_6__.PluralModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CartTabsModule, { declarations: [_cart_tabs_component__WEBPACK_IMPORTED_MODULE_1__.CartTabsComponent,
        _tabs__WEBPACK_IMPORTED_MODULE_0__.CartTabsHotelDetailsComponent,
        _tabs__WEBPACK_IMPORTED_MODULE_0__.CartTabsFlightDetailsComponent,
        _tabs__WEBPACK_IMPORTED_MODULE_0__.CartTabsTaxiDetailsComponent,
        _tabs__WEBPACK_IMPORTED_MODULE_0__.CartTabsRentalCarDetailsComponent,
        _tabs__WEBPACK_IMPORTED_MODULE_0__.CartTabsTrainDetailsComponent,
        _tabs__WEBPACK_IMPORTED_MODULE_0__.CartTabsGenericProductDetailsComponent,
        _tabs__WEBPACK_IMPORTED_MODULE_0__.HotelFullDetailsComponent,
        _tabs__WEBPACK_IMPORTED_MODULE_0__.TrainFullDetailsComponent,
        _tabs__WEBPACK_IMPORTED_MODULE_0__.FlightFullDetailsComponent,
        _tabs__WEBPACK_IMPORTED_MODULE_0__.TaxiFullDetailsComponent,
        _tabs__WEBPACK_IMPORTED_MODULE_0__.RentalCarFullDetailsComponent,
        _tabs_shared_travelers_full_details_travelers_full_details_component__WEBPACK_IMPORTED_MODULE_4__.TravelersFullDetailsComponent,
        _tabs_shared_cart_item_stat_cart_item_stat_component__WEBPACK_IMPORTED_MODULE_3__.CartItemStatComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule, _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.DibPipesModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule, _global_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_5__.DialogModule, _global_plural_plural_module__WEBPACK_IMPORTED_MODULE_6__.PluralModule], exports: [_cart_tabs_component__WEBPACK_IMPORTED_MODULE_1__.CartTabsComponent, _tabs_shared_cart_item_stat_cart_item_stat_component__WEBPACK_IMPORTED_MODULE_3__.CartItemStatComponent] }); })();


/***/ }),

/***/ 63968:
/*!*****************************************************************************************!*\
  !*** ./src/app/bookings/details/cart/tabs/flight/cart-tabs-flight-details.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartTabsFlightDetailsComponent": () => (/* binding */ CartTabsFlightDetailsComponent)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../base.component */ 83607);
/* harmony import */ var _flight_full_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flight-full-details.component */ 75735);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utils/pipes/date.pipe */ 23341);
/* harmony import */ var _utils_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utils/pipes/duration.pipe */ 77469);
/* harmony import */ var _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utils/pipes/dashes-to-spaces.pipe */ 61467);








function CartTabsFlightDetailsComponent_div_0_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "dibDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const flight_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, flight_r1.duration, "secondsToHrMin"), ")");
} }
function CartTabsFlightDetailsComponent_div_0_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "This is part of a flight + hotel package.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CartTabsFlightDetailsComponent_div_0_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17)(1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const traveler_r7 = ctx.$implicit;
    const last_r8 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mr-3", !last_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](traveler_r7.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](traveler_r7.email);
} }
function CartTabsFlightDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Flight Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4)(5, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "flight");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "dibDashesToSpaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, CartTabsFlightDetailsComponent_div_0_ng_container_22_Template, 3, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 10)(24, "div", 11)(25, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Booking reference");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartTabsFlightDetailsComponent_div_0_Template_a_click_29_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const flight_r1 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.showDetails(flight_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "View details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, CartTabsFlightDetailsComponent_div_0_span_31_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 14)(33, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Passenger Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, CartTabsFlightDetailsComponent_div_0_div_36_Template, 5, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const flight_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mb-4", !last_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate4"](" ", flight_r1.firstSegment.departure.airportName, " (", flight_r1.firstSegment.departure.airportCode, ") - ", flight_r1.lastSegment.arrival.airportName, " (", flight_r1.lastSegment.arrival.airportCode, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", flight_r1.marketingAirlineLabel, " \u25E6 ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 15, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 17, flight_r1.cabinClassLabel)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](17, 19, flight_r1.firstSegment.departure.time, "productDetails"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](20, 22, flight_r1.firstSegment.departure.time, "time"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](21, 25, flight_r1.lastSegment.arrival.time, "time"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", flight_r1.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r0.data.bookingReference == null ? null : ctx_r0.data.bookingReference.reference) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.data.packageId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.data.travelers);
} }
class CartTabsFlightDetailsComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(dialog) {
        super();
        this.dialog = dialog;
    }
    showDetails(flight) {
        this.dialog.open(_flight_full_details_component__WEBPACK_IMPORTED_MODULE_1__.FlightFullDetailsComponent, {
            maxWidth: 1200,
            minWidth: 500,
            data: { flight, flightBooking: this.data },
        });
    }
}
CartTabsFlightDetailsComponent.ɵfac = function CartTabsFlightDetailsComponent_Factory(t) { return new (t || CartTabsFlightDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
CartTabsFlightDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CartTabsFlightDetailsComponent, selectors: [["app-cart-tabs-flight-details"]], inputs: { data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "flex space-x-4 sm:flex-col sm:space-x-0 sm:space-y-4", 3, "mb-4", 4, "ngFor", "ngForOf"], [1, "flex", "space-x-4", "sm:flex-col", "sm:space-x-0", "sm:space-y-4"], [1, "flex", "max-w-xs", "flex-1", "flex-col", "space-y-2", "sm:max-w-full"], [1, "text-xs", "text-gray-500"], [1, "flex", "space-x-2"], [1, "material-icons", "text-xl", "text-dib-green-600"], [1, "flex", "flex-1", "flex-col", "sm:flex-row"], [1, "flex", "flex-1", "flex-col"], [1, "mb-2", "text-xl", "font-bold"], [4, "ngIf"], [1, "flex", "flex-col"], [1, "mt-4", "flex", "flex-col", "sm:mt-0"], [1, "mt-6", "cursor-pointer", "font-bold", "text-dib-green-600", "sm:mt-2", 3, "click"], ["class", "text-xs text-gray-500", 4, "ngIf"], [1, "flex", "flex-1", "flex-col", "space-y-2"], [1, "flex", "flex-1", "flex-wrap", "items-baseline"], ["class", "mb-3 flex flex-col rounded border p-5", 3, "mr-3", 4, "ngFor", "ngForOf"], [1, "mb-3", "flex", "flex-col", "rounded", "border", "p-5"], [1, "mb-2", "whitespace-nowrap", "text-xl", "font-bold"], [1, "whitespace-nowrap"]], template: function CartTabsFlightDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CartTabsFlightDetailsComponent_div_0_Template, 37, 28, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.data.flights);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe, _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_2__.DibDatePipe, _utils_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_3__.DibDurationPipe, _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_4__.DibDashesToSpacesPipe], styles: ["[_nghost-%COMP%] { display: block; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtdGFicy1mbGlnaHQtZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxjQUFjLEVBQUUiLCJmaWxlIjoiY2FydC10YWJzLWZsaWdodC1kZXRhaWxzLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgZGlzcGxheTogYmxvY2s7IH0iXX0= */"] });


/***/ }),

/***/ 75735:
/*!************************************************************************************!*\
  !*** ./src/app/bookings/details/cart/tabs/flight/flight-full-details.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlightFullDetailsComponent": () => (/* binding */ FlightFullDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _global_dialog_dialog_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../global/dialog/dialog-title.component */ 37511);
/* harmony import */ var _global_plural_plural_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../global/plural/plural.component */ 41996);
/* harmony import */ var _shared_travelers_full_details_travelers_full_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/travelers-full-details/travelers-full-details.component */ 85057);
/* harmony import */ var _shared_cart_item_stat_cart_item_stat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/cart-item-stat/cart-item-stat.component */ 51868);
/* harmony import */ var _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utils/pipes/date.pipe */ 23341);
/* harmony import */ var _utils_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utils/pipes/duration.pipe */ 77469);
/* harmony import */ var _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utils/pipes/dashes-to-spaces.pipe */ 61467);












function FlightFullDetailsComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "dibDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, ctx_r0.flight.duration, "secondsToHM"), ")");
} }
function FlightFullDetailsComponent_div_16_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "dibDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 32)(4, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "language");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const segment_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 4, segment_r3.layover, "secondsToHM"), " - ", segment_r3.shortLayover ? "Short" : "Long", " layover in ", segment_r3.arrival.airportName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Timezone: ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 7, segment_r3.arrival.time, "z"), " ");
} }
function FlightFullDetailsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 17)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "dibDashesToSpaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 19)(9, "div", 20)(10, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 24)(19, "div", 25)(20, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](24, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 28)(26, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](28, "dibDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 25)(30, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](34, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, FlightFullDetailsComponent_div_16_div_35_Template, 8, 10, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const segment_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", segment_r3.marketingAirline.name, " \u25E6 ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 13, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 15, segment_r3.cabinClass)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", segment_r3.marketingCarrier + segment_r3.flightNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](12, 17, segment_r3.departure.time, "time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](17, 20, segment_r3.arrival.time, "time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", segment_r3.departure.airportName, " (", segment_r3.departure.airportCode, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](24, 23, segment_r3.departure.time, "productDetails"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Duration: ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](28, 26, segment_r3.duration, "secondsToHM"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", segment_r3.arrival.airportName, " (", segment_r3.arrival.airportCode, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](34, 29, segment_r3.arrival.time, "productDetails"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", segment_r3.layover);
} }
function FlightFullDetailsComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Package price");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
class FlightFullDetailsComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(dialogRef, data) {
        super();
        this.dialogRef = dialogRef;
        this.data = data;
        this.flight = data.flight;
        this.flightBooking = data.flightBooking;
    }
}
FlightFullDetailsComponent.ɵfac = function FlightFullDetailsComponent_Factory(t) { return new (t || FlightFullDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA)); };
FlightFullDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: FlightFullDetailsComponent, selectors: [["app-flight-full-details"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 32, vars: 24, consts: [[1, "flex", "items-center"], [1, "material-icons", "mr-2", "text-dib-green-600"], [1, "mt-6", "mb-6", "flex", "sm:flex-col"], [1, "w-full", "border-r", "pr-3", "sm:border-b", "sm:border-r-0", "sm:pr-0", "sm:pb-3"], [1, "grid", "grid-flow-row", "auto-rows-min", "gap-1"], [1, "flex", "text-xl", "font-bold"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "col-span-2", "mt-4", "mr-2", 3, "travelers"], [1, "flex", "flex-col", "pl-3", "sm:justify-between", "sm:pt-3", "sm:pl-0"], [1, "grid", "min-w-max", "gap-3", "bg-dib-gray-100", "p-6", "sm:w-full"], ["class", "-mb-3 text-xs text-gray-500", 4, "ngIf"], [1, "flex", "items-baseline", "whitespace-nowrap", "text-gray-500"], [1, "mr-1", "text-3xl"], ["single", "passenger", "multiple", "passengers", 3, "from"], [1, "mt-4", "grid", "min-w-max", "gap-4"], ["label", "Booking Reference"], [1, "mt-4", "mb-2", "flex", "flex-row", "items-center", "justify-between", "border-b", "pb-1"], [1, "rounded-xl", "bg-gray-500", "px-1.5", "text-2xs", "leading-normal", "text-white"], [1, "segment-timeline-wrapper", "grid", "grid-flow-col", "gap-4"], [1, "flex", "flex-col", "justify-evenly"], [1, "text-lg", "font-bold"], [1, "timeline", "flex"], [1, "line"], [1, "flex", "flex-col", "justify-between", "py-1"], [1, "flex", "flex-row", "items-center", "justify-between"], [1, "flex-1"], [1, "ml-3", "text-xs"], [1, "flex", "flex-row", "items-center"], [1, "flex-1", "text-xs", "text-gray-500"], ["class", "my-4 flex flex-wrap justify-between rounded bg-gradient-to-r from-blue-50 via-emerald-50 to-emerald-100 p-3", 4, "ngIf"], [1, "my-4", "flex", "flex-wrap", "justify-between", "rounded", "bg-gradient-to-r", "from-blue-50", "via-emerald-50", "to-emerald-100", "p-3"], [1, "ml-4", "flex", "items-center"], [1, "material-icons", "mr-1", "text-xs"], [1, "-mb-3", "text-xs", "text-gray-500"]], template: function FlightFullDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "dib-dialog-title")(1, "span", 0)(2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "flight");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "mat-dialog-content")(6, "div", 2)(7, "div", 3)(8, "div", 4)(9, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "dibDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "dibDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, FlightFullDetailsComponent_ng_container_15_Template, 3, 4, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, FlightFullDetailsComponent_div_16_Template, 36, 32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "app-travelers-full-details", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 9)(19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, FlightFullDetailsComponent_span_20_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 12)(22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](24, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "dib-plural", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 15)(30, "app-cart-item-stat", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Flight to ", ctx.flight.lastSegment.arrival.airportName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate4"](" ", ctx.flight.firstSegment.departure.airportName, " (", ctx.flight.firstSegment.departure.airportCode, ") - ", ctx.flight.lastSegment.arrival.airportName, " (", ctx.flight.lastSegment.arrival.airportCode, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](13, 15, ctx.flight.firstSegment.departure.time, "time"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](14, 18, ctx.flight.lastSegment.arrival.time, "time"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.flight.duration);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.flight.segments);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("travelers", ctx.flightBooking.travelers);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.flightBooking.packageId);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](24, 21, ctx.flightBooking.totalPrice, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.flightBooking.currency);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("from", ctx.flightBooking.travelers.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((ctx.flightBooking == null ? null : ctx.flightBooking.bookingReference == null ? null : ctx.flightBooking.bookingReference.reference) || "-");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent, _global_dialog_dialog_title_component__WEBPACK_IMPORTED_MODULE_1__.DialogTitleComponent, _global_plural_plural_component__WEBPACK_IMPORTED_MODULE_2__.PluralComponent, _shared_travelers_full_details_travelers_full_details_component__WEBPACK_IMPORTED_MODULE_3__.TravelersFullDetailsComponent, _shared_cart_item_stat_cart_item_stat_component__WEBPACK_IMPORTED_MODULE_4__.CartItemStatComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe, _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_5__.DibDatePipe, _utils_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_6__.DibDurationPipe, _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_7__.DibDashesToSpacesPipe], styles: [".segment-timeline-wrapper[_ngcontent-%COMP%] {\n  grid-auto-columns: max-content 1fr;\n}\n.segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%] {\n  height: 22px;\n  padding: 2px 0;\n}\n.segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 100%;\n  margin: auto;\n  position: relative;\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity));\n}\n.segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]::before, .segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  position: absolute;\n  right: -1px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity));\n}\n.segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]::after {\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtdGFicy1zaGFyZWQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFBQSx5REFBQTtBQUFOO0FBRU07RUFFRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQUEseURBQUE7QUFGUjtBQUtNO0VBQ0UsU0FBQTtBQUhSIiwiZmlsZSI6ImNhcnQtdGFicy1zaGFyZWQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWdtZW50LXRpbWVsaW5lLXdyYXBwZXIge1xuICBncmlkLWF1dG8tY29sdW1uczogbWF4LWNvbnRlbnQgMWZyO1xuXG4gIC50aW1lbGluZSB7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDJweCAwO1xuXG4gICAgLmxpbmUge1xuICAgICAgd2lkdGg6IDFweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgQGFwcGx5IGJnLWdyYXktNTAwO1xuXG4gICAgICAmOjpiZWZvcmUsXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogM3B4O1xuICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAtMXB4O1xuXG4gICAgICAgIEBhcHBseSBiZy1ncmF5LTUwMDtcbiAgICAgIH1cblxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 50691:
/*!***********************************************************************************************************!*\
  !*** ./src/app/bookings/details/cart/tabs/generic-product/cart-tabs-generic-product-details.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartTabsGenericProductDetailsComponent": () => (/* binding */ CartTabsGenericProductDetailsComponent)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../base.component */ 83607);
/* harmony import */ var _models_constants_product_type_icons_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../models/constants/product-type-icons.constants */ 77975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _global_plural_plural_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../global/plural/plural.component */ 41996);
/* harmony import */ var _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utils/pipes/date.pipe */ 23341);





class CartTabsGenericProductDetailsComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    productIcon(product) {
        return _models_constants_product_type_icons_constants__WEBPACK_IMPORTED_MODULE_1__.productTypeIconsMap[product?.toLowerCase()] || _models_constants_product_type_icons_constants__WEBPACK_IMPORTED_MODULE_1__.productTypeIconsMap["default"];
    }
}
CartTabsGenericProductDetailsComponent.ɵfac = /*@__PURE__*/ function () { let ɵCartTabsGenericProductDetailsComponent_BaseFactory; return function CartTabsGenericProductDetailsComponent_Factory(t) { return (ɵCartTabsGenericProductDetailsComponent_BaseFactory || (ɵCartTabsGenericProductDetailsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](CartTabsGenericProductDetailsComponent)))(t || CartTabsGenericProductDetailsComponent); }; }();
CartTabsGenericProductDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CartTabsGenericProductDetailsComponent, selectors: [["app-cart-tabs-generic-product-details"]], inputs: { data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 34, vars: 16, consts: [[1, "flex", "space-x-4", "sm:flex-col", "sm:space-x-0", "sm:space-y-4"], [1, "flex", "max-w-xs", "flex-1", "flex-col", "space-y-2", "sm:max-w-full"], [1, "text-xs", "text-gray-500"], [1, "flex", "space-x-2"], [1, "material-icons", "text-xl", "text-dib-green-600"], [1, "flex", "flex-1", "flex-col", "sm:flex-row"], [1, "flex", "flex-1", "flex-col"], [1, "mb-2", "text-xl", "font-bold"], ["single", "day", "multiple", "days", 3, "from"], [1, "flex", "flex-col"], [1, "mt-4", "flex", "flex-col", "sm:mt-0"], [1, "flex", "flex-1", "flex-col", "space-y-2"], [1, "flex", "flex-1", "flex-wrap", "items-baseline"], [1, "mr-3", "mb-3", "flex", "flex-col", "rounded", "border", "p-5"], [1, "mb-2", "whitespace-nowrap", "text-xl", "font-bold"], [1, "whitespace-nowrap"]], template: function CartTabsGenericProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Generic Product Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3)(5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "dibDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "dibDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "dib-plural", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 9)(20, "div", 10)(21, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Booking reference");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 11)(26, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Guest Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 12)(29, "div", 13)(30, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.productIcon(ctx.data.productName));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.data.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](15, 10, ctx.data.requestedCheckIn, "productDetails"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](16, 13, ctx.data.requestedCheckOut, "productDetails"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("from", ctx.data.totalStay);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.data.bookingReference || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.data.customer.firstName, " ", ctx.data.customer.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.data.customer.email);
    } }, dependencies: [_global_plural_plural_component__WEBPACK_IMPORTED_MODULE_2__.PluralComponent, _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_3__.DibDatePipe], styles: ["[_nghost-%COMP%] { display: block; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtdGFicy1nZW5lcmljLXByb2R1Y3QtZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxjQUFjLEVBQUUiLCJmaWxlIjoiY2FydC10YWJzLWdlbmVyaWMtcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgZGlzcGxheTogYmxvY2s7IH0iXX0= */"] });


/***/ }),

/***/ 30140:
/*!***************************************************************************************!*\
  !*** ./src/app/bookings/details/cart/tabs/hotel/cart-tabs-hotel-details.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartTabsHotelDetailsComponent": () => (/* binding */ CartTabsHotelDetailsComponent)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../base.component */ 83607);
/* harmony import */ var _hotel_full_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hotel-full-details.component */ 22912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _global_plural_plural_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../global/plural/plural.component */ 41996);
/* harmony import */ var _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utils/pipes/date.pipe */ 23341);







function CartTabsHotelDetailsComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "This is part of a flight + hotel package.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CartTabsHotelDetailsComponent_ng_container_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18)(1, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const traveler_r6 = ctx.$implicit;
    const lastGuest_r7 = ctx.last;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const lastRoom_r4 = ctx_r8.last;
    const index_r3 = ctx_r8.index;
    const room_r2 = ctx_r8.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mr-3", !(lastRoom_r4 && lastGuest_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", traveler_r6.firstName, " ", traveler_r6.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Room #", index_r3 + 1, " - ", room_r2.name, "");
} }
function CartTabsHotelDetailsComponent_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CartTabsHotelDetailsComponent_ng_container_33_div_1_Template, 5, 6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const room_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", room_r2.occupants);
} }
class CartTabsHotelDetailsComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(dialog) {
        super();
        this.dialog = dialog;
    }
    showDetails() {
        this.dialog.open(_hotel_full_details_component__WEBPACK_IMPORTED_MODULE_1__.HotelFullDetailsComponent, {
            maxWidth: 1200,
            minWidth: 500,
            data: { hotel: this.data },
        });
    }
}
CartTabsHotelDetailsComponent.ɵfac = function CartTabsHotelDetailsComponent_Factory(t) { return new (t || CartTabsHotelDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
CartTabsHotelDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CartTabsHotelDetailsComponent, selectors: [["app-cart-tabs-hotel-details"]], inputs: { data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 34, vars: 15, consts: [[1, "flex", "space-x-4", "sm:flex-col", "sm:space-x-0", "sm:space-y-4"], [1, "flex", "max-w-xs", "flex-1", "flex-col", "space-y-2", "sm:max-w-full"], [1, "text-xs", "text-gray-500"], [1, "flex", "space-x-2"], [1, "material-icons", "text-xl", "text-dib-green-600"], [1, "flex", "flex-1", "flex-col", "sm:flex-row"], [1, "flex", "flex-1", "flex-col"], [1, "mb-2", "text-xl", "font-bold"], ["single", "night, ", "multiple", "nights, ", 3, "from"], ["single", "room", "multiple", "rooms", 3, "from"], [1, "flex", "flex-col"], [1, "mt-4", "flex", "flex-col", "sm:mt-0"], [1, "mt-6", "max-w-max", "cursor-pointer", "font-bold", "text-dib-green-600", "sm:mt-2", 3, "click"], ["class", "text-xs text-gray-500", 4, "ngIf"], [1, "flex", "flex-1", "flex-col", "space-y-2"], [1, "flex", "flex-1", "flex-wrap", "items-baseline"], [4, "ngFor", "ngForOf"], ["class", "mb-3 flex flex-col rounded border p-5", 3, "mr-3", 4, "ngFor", "ngForOf"], [1, "mb-3", "flex", "flex-col", "rounded", "border", "p-5"], [1, "mb-2", "whitespace-nowrap", "text-xl", "font-bold"], [1, "whitespace-nowrap"]], template: function CartTabsHotelDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Hotel Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3)(5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "hotel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "dibDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "dibDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "dib-plural", 8)(19, "dib-plural", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 10)(21, "div", 11)(22, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Booking reference");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CartTabsHotelDetailsComponent_Template_a_click_26_listener() { return ctx.showDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " View details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, CartTabsHotelDetailsComponent_span_28_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 14)(30, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Guest Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, CartTabsHotelDetailsComponent_ng_container_33_Template, 2, 1, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.data.hotelDescription.hotelName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.data.locationPreferences.cityName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](15, 9, ctx.data.requestedCheckIn, "productDetails"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](16, 12, ctx.data.requestedCheckOut, "productDetails"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("from", ctx.data.totalNights);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("from", ctx.data.requestedRooms.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.data.reservationId || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.packageId);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.data.requestedRooms);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _global_plural_plural_component__WEBPACK_IMPORTED_MODULE_2__.PluralComponent, _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_3__.DibDatePipe], styles: ["[_nghost-%COMP%] { display: block; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtdGFicy1ob3RlbC1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFRLGNBQWMsRUFBRSIsImZpbGUiOiJjYXJ0LXRhYnMtaG90ZWwtZGV0YWlscy5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9Il19 */"] });


/***/ }),

/***/ 22912:
/*!**********************************************************************************!*\
  !*** ./src/app/bookings/details/cart/tabs/hotel/hotel-full-details.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HotelFullDetailsComponent": () => (/* binding */ HotelFullDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _global_dialog_dialog_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../global/dialog/dialog-title.component */ 37511);
/* harmony import */ var _global_plural_plural_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../global/plural/plural.component */ 41996);
/* harmony import */ var _shared_travelers_full_details_travelers_full_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/travelers-full-details/travelers-full-details.component */ 85057);
/* harmony import */ var _shared_cart_item_stat_cart_item_stat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/cart-item-stat/cart-item-stat.component */ 51868);
/* harmony import */ var _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utils/pipes/date.pipe */ 23341);










function HotelFullDetailsComponent_ng_container_23_app_cart_item_stat_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-cart-item-stat");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Breakfast included");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function HotelFullDetailsComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 23)(2, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 25)(5, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "dib-plural", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, HotelFullDetailsComponent_ng_container_23_app_cart_item_stat_8_Template, 2, 0, "app-cart-item-stat", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "app-travelers-full-details", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const room_r3 = ctx.$implicit;
    const index_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Room #", index_r4 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](room_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("from", room_r3.occupants.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.hotel.breakfast);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("travelers", room_r3.occupants);
} }
function HotelFullDetailsComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Package price");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function HotelFullDetailsComponent_app_cart_item_stat_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-cart-item-stat", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.hotel.reservationPin);
} }
class HotelFullDetailsComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(dialogRef, data) {
        super();
        this.dialogRef = dialogRef;
        this.data = data;
        this.hotel = data.hotel;
    }
}
HotelFullDetailsComponent.ɵfac = function HotelFullDetailsComponent_Factory(t) { return new (t || HotelFullDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA)); };
HotelFullDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: HotelFullDetailsComponent, selectors: [["app-hotel-full-details"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 41, vars: 25, consts: [[1, "flex", "items-center"], [1, "material-icons", "mr-2", "text-dib-green-600"], [1, "mt-6", "mb-6", "flex", "sm:flex-col"], [1, "w-full", "border-r", "pr-3", "sm:border-b", "sm:border-r-0", "sm:pr-0", "sm:pb-3"], [1, "mb-4", "grid", "grid-cols-2", "gap-4", "sm:grid-cols-1"], [1, "grid", "grid-flow-row", "auto-rows-min", "gap-1"], [1, "flex", "text-xl", "font-bold"], [1, "grid", "grid-flow-row", "auto-rows-min", "gap-4", "sm:grid-cols-2"], ["label", "Check-in"], ["label", "Check-out"], ["label", "Special request"], [4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "pl-3", "sm:justify-between", "sm:pt-3", "sm:pl-0"], [1, "grid", "min-w-max", "gap-3", "bg-dib-gray-100", "p-6", "sm:w-full"], ["class", "-mb-3 text-xs text-gray-500", 4, "ngIf"], [1, "flex", "items-baseline", "whitespace-nowrap", "text-gray-500"], [1, "mr-1", "text-3xl"], ["single", "night, ", "multiple", "nights, ", 3, "from"], ["single", "room, ", "multiple", "rooms, ", 3, "from"], ["single", "guest", "multiple", "guests", 3, "from"], [1, "mt-4", "grid", "min-w-max", "gap-4", "sm:grid-cols-2"], ["title", "Reservation Id", "label", "Booking Reference"], ["label", "Reservation Pincode", 4, "ngIf"], [1, "mt-4", "grid", "grid-cols-2", "gap-y-1", "gap-x-4", "border-t", "pt-4"], [1, "col-span-2", "text-xs", "text-gray-500"], [1, "grid", "grid-flow-row", "auto-rows-min", "gap-2"], [1, "text-xl", "font-bold"], ["single", "person", "multiple", "persons", 3, "from"], [4, "ngIf"], [1, "col-span-2", "mt-4", "mr-2", 3, "travelers"], [1, "-mb-3", "text-xs", "text-gray-500"], ["label", "Reservation Pincode"]], template: function HotelFullDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "dib-dialog-title")(1, "span", 0)(2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "hotel");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-dialog-content")(6, "div", 2)(7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 7)(15, "app-cart-item-stat", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "dibDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "app-cart-item-stat", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "dibDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "app-cart-item-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, HotelFullDetailsComponent_ng_container_23_Template, 10, 5, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 12)(25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, HotelFullDetailsComponent_span_26_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 15)(28, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](30, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "dib-plural", 17)(35, "dib-plural", 18)(36, "dib-plural", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 20)(38, "app-cart-item-stat", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, HotelFullDetailsComponent_app_cart_item_stat_40_Template, 2, 1, "app-cart-item-stat", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Hotel in ", ctx.hotel.locationPreferences.cityName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.hotel.hotelDescription.hotelName);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx.hotel.locationPreferences.hotelAddress, ", ", ctx.hotel.locationPreferences.cityName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](17, 16, ctx.hotel.requestedCheckIn, "productDetails"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](20, 19, ctx.hotel.requestedCheckOut, "productDetails"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.hotel.specialRequests || "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.hotel.requestedRooms);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.hotel.packageId);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](30, 22, ctx.hotel.requestedPrice, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.hotel.requestedCurrency);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("from", ctx.hotel.totalNights);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("from", ctx.hotel.requestedRooms.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("from", ctx.hotel.totalGuests);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.hotel.reservationId || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.hotel.reservationPin);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _global_dialog_dialog_title_component__WEBPACK_IMPORTED_MODULE_1__.DialogTitleComponent, _global_plural_plural_component__WEBPACK_IMPORTED_MODULE_2__.PluralComponent, _shared_travelers_full_details_travelers_full_details_component__WEBPACK_IMPORTED_MODULE_3__.TravelersFullDetailsComponent, _shared_cart_item_stat_cart_item_stat_component__WEBPACK_IMPORTED_MODULE_4__.CartItemStatComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe, _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_5__.DibDatePipe], encapsulation: 2 });


/***/ }),

/***/ 22143:
/*!*****************************************************!*\
  !*** ./src/app/bookings/details/cart/tabs/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartTabsFlightDetailsComponent": () => (/* reexport safe */ _flight_cart_tabs_flight_details_component__WEBPACK_IMPORTED_MODULE_0__.CartTabsFlightDetailsComponent),
/* harmony export */   "CartTabsGenericProductDetailsComponent": () => (/* reexport safe */ _generic_product_cart_tabs_generic_product_details_component__WEBPACK_IMPORTED_MODULE_2__.CartTabsGenericProductDetailsComponent),
/* harmony export */   "CartTabsHotelDetailsComponent": () => (/* reexport safe */ _hotel_cart_tabs_hotel_details_component__WEBPACK_IMPORTED_MODULE_3__.CartTabsHotelDetailsComponent),
/* harmony export */   "CartTabsRentalCarDetailsComponent": () => (/* reexport safe */ _rental_car_cart_tabs_rental_car_details_component__WEBPACK_IMPORTED_MODULE_9__.CartTabsRentalCarDetailsComponent),
/* harmony export */   "CartTabsTaxiDetailsComponent": () => (/* reexport safe */ _taxi_cart_tabs_taxi_details_component__WEBPACK_IMPORTED_MODULE_5__.CartTabsTaxiDetailsComponent),
/* harmony export */   "CartTabsTrainDetailsComponent": () => (/* reexport safe */ _train_cart_tabs_train_details_component__WEBPACK_IMPORTED_MODULE_7__.CartTabsTrainDetailsComponent),
/* harmony export */   "FlightFullDetailsComponent": () => (/* reexport safe */ _flight_flight_full_details_component__WEBPACK_IMPORTED_MODULE_1__.FlightFullDetailsComponent),
/* harmony export */   "HotelFullDetailsComponent": () => (/* reexport safe */ _hotel_hotel_full_details_component__WEBPACK_IMPORTED_MODULE_4__.HotelFullDetailsComponent),
/* harmony export */   "RentalCarFullDetailsComponent": () => (/* reexport safe */ _rental_car_rental_car_full_details_component__WEBPACK_IMPORTED_MODULE_10__.RentalCarFullDetailsComponent),
/* harmony export */   "TaxiFullDetailsComponent": () => (/* reexport safe */ _taxi_taxi_full_details_component__WEBPACK_IMPORTED_MODULE_6__.TaxiFullDetailsComponent),
/* harmony export */   "TrainFullDetailsComponent": () => (/* reexport safe */ _train_train_full_details_component__WEBPACK_IMPORTED_MODULE_8__.TrainFullDetailsComponent)
/* harmony export */ });
/* harmony import */ var _flight_cart_tabs_flight_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flight/cart-tabs-flight-details.component */ 63968);
/* harmony import */ var _flight_flight_full_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flight/flight-full-details.component */ 75735);
/* harmony import */ var _generic_product_cart_tabs_generic_product_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generic-product/cart-tabs-generic-product-details.component */ 50691);
/* harmony import */ var _hotel_cart_tabs_hotel_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hotel/cart-tabs-hotel-details.component */ 30140);
/* harmony import */ var _hotel_hotel_full_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hotel/hotel-full-details.component */ 22912);
/* harmony import */ var _taxi_cart_tabs_taxi_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taxi/cart-tabs-taxi-details.component */ 77339);
/* harmony import */ var _taxi_taxi_full_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taxi/taxi-full-details.component */ 45615);
/* harmony import */ var _train_cart_tabs_train_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./train/cart-tabs-train-details.component */ 91615);
/* harmony import */ var _train_train_full_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./train/train-full-details.component */ 18922);
/* harmony import */ var _rental_car_cart_tabs_rental_car_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rental-car/cart-tabs-rental-car-details.component */ 73368);
/* harmony import */ var _rental_car_rental_car_full_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rental-car/rental-car-full-details.component */ 82233);
// Flights


// Generic Product

// Hotel


// Taxi


// Trains


// Rental Car




/***/ }),

/***/ 73368:
/*!*************************************************************************************************!*\
  !*** ./src/app/bookings/details/cart/tabs/rental-car/cart-tabs-rental-car-details.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartTabsRentalCarDetailsComponent": () => (/* binding */ CartTabsRentalCarDetailsComponent)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../base.component */ 83607);
/* harmony import */ var _rental_car_full_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rental-car-full-details.component */ 82233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utils/pipes/date.pipe */ 23341);





class CartTabsRentalCarDetailsComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(dialog) {
        super();
        this.dialog = dialog;
    }
    showDetails() {
        this.dialog.open(_rental_car_full_details_component__WEBPACK_IMPORTED_MODULE_1__.RentalCarFullDetailsComponent, {
            maxWidth: 1200,
            minWidth: 500,
            data: { car: this.data },
        });
    }
}
CartTabsRentalCarDetailsComponent.ɵfac = function CartTabsRentalCarDetailsComponent_Factory(t) { return new (t || CartTabsRentalCarDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog)); };
CartTabsRentalCarDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CartTabsRentalCarDetailsComponent, selectors: [["app-cart-tabs-rental-car-details"]], inputs: { data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 33, vars: 11, consts: [[1, "mb-4", "flex", "space-x-4", "sm:flex-col", "sm:space-x-0", "sm:space-y-4"], [1, "flex", "max-w-xs", "flex-1", "flex-col", "space-y-2", "sm:max-w-full"], [1, "text-xs", "text-gray-500"], [1, "flex", "space-x-2"], [1, "material-icons", "text-xl", "text-dib-green-600"], [1, "flex", "flex-1", "flex-col", "sm:flex-row"], [1, "flex", "flex-1", "flex-col"], [1, "mb-2", "text-xl", "font-bold"], [1, "flex", "flex-col"], [1, "mt-4", "flex", "flex-col", "sm:mt-0"], [1, "mt-6", "cursor-pointer", "font-bold", "text-dib-green-600", "sm:mt-2", 3, "click"], [1, "flex", "flex-1", "flex-col", "space-y-2"], [1, "flex", "flex-1", "flex-wrap", "items-baseline"], [1, "mb-3", "flex", "flex-col", "rounded", "border", "p-5"], [1, "mb-2", "whitespace-nowrap", "text-xl", "font-bold"], [1, "whitespace-nowrap"]], template: function CartTabsRentalCarDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Car Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "directions_car");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "dibDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 8)(17, "div", 9)(18, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Booking reference");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartTabsRentalCarDetailsComponent_Template_a_click_22_listener() { return ctx.showDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "View details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 11)(25, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Driver Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 12)(28, "div", 13)(29, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Rental car in ", ctx.data.pickup.address.city, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx.data.vehicle.model, " or similar (", ctx.data.vehicle.typeCode, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](15, 8, ctx.data.pickup.dateAndTime, "productDetailsWithTime"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.bookingReference || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx.data.driver.firstName, " ", ctx.data.driver.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.driver.email);
    } }, dependencies: [_utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_2__.DibDatePipe], styles: ["[_nghost-%COMP%] { display: block; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtdGFicy1yZW50YWwtY2FyLWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsY0FBYyxFQUFFIiwiZmlsZSI6ImNhcnQtdGFicy1yZW50YWwtY2FyLWRldGFpbHMuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfSJdfQ== */"] });


/***/ }),

/***/ 82233:
/*!********************************************************************************************!*\
  !*** ./src/app/bookings/details/cart/tabs/rental-car/rental-car-full-details.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RentalCarFullDetailsComponent": () => (/* binding */ RentalCarFullDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _global_dialog_dialog_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../global/dialog/dialog-title.component */ 37511);
/* harmony import */ var _shared_travelers_full_details_travelers_full_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/travelers-full-details/travelers-full-details.component */ 85057);
/* harmony import */ var _shared_cart_item_stat_cart_item_stat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/cart-item-stat/cart-item-stat.component */ 51868);
/* harmony import */ var _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utils/pipes/date.pipe */ 23341);
/* harmony import */ var _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utils/pipes/dashes-to-spaces.pipe */ 61467);
/* harmony import */ var _utils_pipes_upperfirst_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utils/pipes/upperfirst.pipe */ 63548);











function RentalCarFullDetailsComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.car.vehicle.information.doorNumber, " ");
} }
function RentalCarFullDetailsComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.car.vehicle.information.passengerCapacity, " ");
} }
function RentalCarFullDetailsComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.car.vehicle.information.bootSize, " ");
} }
function RentalCarFullDetailsComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Air conditioning ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RentalCarFullDetailsComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Total price");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RentalCarFullDetailsComponent_ul_56_ng_container_1_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 41)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "dibUpperFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const extra_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 5, extra_r11.freeText)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](7, 7, extra_r11.amount, "1.2-2"), " ", ctx_r10.car.currency, "");
} }
function RentalCarFullDetailsComponent_ul_56_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "li", 41)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Car");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, RentalCarFullDetailsComponent_ul_56_ng_container_1_li_7_Template, 8, 10, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](6, 3, ctx_r8.car.basePrice, "1.2-2"), " ", ctx_r8.car.currency, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r8.car.optionalExtras);
} }
function RentalCarFullDetailsComponent_ul_56_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 41)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "dibUpperFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Included");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const extra_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 3, extra_r12.freeText)));
} }
function RentalCarFullDetailsComponent_ul_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RentalCarFullDetailsComponent_ul_56_ng_container_1_Template, 8, 6, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, RentalCarFullDetailsComponent_ul_56_li_2_Template, 7, 5, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.car.optionalExtras.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r5.car.includedExtras);
} }
function RentalCarFullDetailsComponent_li_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r6.car.cancellationPolicy);
} }
function RentalCarFullDetailsComponent_li_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r7.car.cancellationRate);
} }
const _c0 = function (a0) { return [a0]; };
class RentalCarFullDetailsComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(dialogRef, data) {
        super();
        this.dialogRef = dialogRef;
        this.data = data;
        this.car = data.car;
    }
}
RentalCarFullDetailsComponent.ɵfac = function RentalCarFullDetailsComponent_Factory(t) { return new (t || RentalCarFullDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA)); };
RentalCarFullDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: RentalCarFullDetailsComponent, selectors: [["app-rental-car-full-details"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 63, vars: 46, consts: [[1, "flex", "items-center"], [1, "material-icons", "mr-2", "text-dib-green-600"], [1, "mt-6", "mb-6", "flex", "sm:flex-col"], [1, "w-full", "flex-1", "border-r", "pr-3", "sm:border-b", "sm:border-r-0", "sm:pr-0", "sm:pb-3"], [1, "grid", "grid-flow-row", "auto-rows-min", "gap-1"], [1, "flex", "flex-wrap", "items-center", "text-xl", "font-bold"], [1, "mr-1"], [1, "text-sm", "font-normal"], [1, "mt-4", "grid", "grid-cols-2", "gap-4"], ["label", "Car class"], ["label", "Agency"], [3, "src", "alt"], [1, "mt-4", "grid", "gap-4"], ["label", "Extras"], ["class", "mr-3 flex items-center text-xs", 4, "ngIf"], [1, "mr-3", "flex", "items-center", "text-xs"], [1, "mr-1", "text-sm"], ["class", "flex items-center text-xs", 4, "ngIf"], ["label", "Pick-up"], [1, "flex", "flex-col"], ["label", "Drop-off"], ["title", "Driver Details", 1, "col-span-2", "mt-4", "mr-2", 3, "travelers"], [1, "flex", "min-w-min", "max-w-min", "flex-col", "pl-3", "sm:max-w-full", "sm:justify-between", "sm:pt-3", "sm:pl-0"], [1, "flex", "flex-col", "bg-dib-gray-100", "p-6", "sm:w-full"], [1, "mb-1", "flex", "items-baseline", "justify-between", "whitespace-nowrap", "text-gray-500"], ["class", "mr-3 text-xs", 4, "ngIf"], [1, "mr-1", "text-3xl"], ["class", "mb-3 list-none text-xs text-gray-500", 4, "ngIf"], [1, "mt-3", "list-disc", "text-xs"], ["class", "whitespace-nowrap", 4, "ngIf"], [4, "ngIf"], [1, "mt-4", "grid", "min-w-max", "gap-4"], ["label", "Booking Reference"], [1, "icon-car-door", "mr-1", "text-sm"], [1, "icon-car-seat", "mr-1", "text-sm"], [1, "icon-suitcase", "mr-1", "text-sm"], [1, "flex", "items-center", "text-xs"], [1, "icon-snowflake", "mr-1", "text-sm", "text-blue-800"], [1, "mr-3", "text-xs"], [1, "mb-3", "list-none", "text-xs", "text-gray-500"], ["class", "flex justify-between", 4, "ngFor", "ngForOf"], [1, "flex", "justify-between"], [1, "ml-2"], [1, "whitespace-nowrap"]], template: function RentalCarFullDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "dib-dialog-title")(1, "span", 0)(2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "directions_car");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-dialog-content")(6, "div", 2)(7, "div", 3)(8, "div", 4)(9, "h3", 5)(10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 8)(15, "app-cart-item-stat", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "dibDashesToSpaces");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "app-cart-item-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 12)(22, "app-cart-item-stat", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, RentalCarFullDetailsComponent_span_23_Template, 3, 1, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, RentalCarFullDetailsComponent_span_24_Template, 3, 1, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, RentalCarFullDetailsComponent_span_25_Template, 3, 1, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, RentalCarFullDetailsComponent_span_29_Template, 3, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 12)(31, "app-cart-item-stat", 18)(32, "div", 19)(33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](37, "dibDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "app-cart-item-stat", 20)(39, "div", 19)(40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](44, "dibDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "app-travelers-full-details", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 22)(47, "div", 23)(48, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, RentalCarFullDetailsComponent_span_49_Template, 2, 0, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div")(51, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](53, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](56, RentalCarFullDetailsComponent_ul_56_Template, 3, 2, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "ul", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, RentalCarFullDetailsComponent_li_58_Template, 2, 1, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, RentalCarFullDetailsComponent_li_59_Template, 2, 1, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 31)(61, "app-cart-item-stat", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Rental car in ", ctx.car.pickup.address.city, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.car.vehicle.model);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("or similar (", ctx.car.vehicle.typeCode, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 31, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 33, ctx.car.vehicle.category)));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", ctx.car.agencyLogo, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("alt", ctx.car.carAgency.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.car.vehicle.information.doorNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.car.vehicle.information.passengerCapacity);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.car.vehicle.information.bootSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("icon-manual-transmission", ctx.car.hasManualTransmission)("icon-automatic-transmission", !ctx.car.hasManualTransmission);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.car.hasManualTransmission ? "Manual" : "Automatic", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.car.vehicle.airConditioner);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx.car.pickup.address.street, ", ", ctx.car.pickup.address.city, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](37, 35, ctx.car.pickup.dateAndTime, "productDetailsWithTime"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx.car.dropOff.address.street, ", ", ctx.car.dropOff.address.city, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](44, 38, ctx.car.dropOff.dateAndTime, "productDetailsWithTime"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("travelers", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](44, _c0, ctx.car.driver));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("border-b", ctx.car.extras.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.car.optionalExtras.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](53, 41, ctx.car.totalPrice, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.car.currency);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.car.extras.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.car.cancellationPolicy);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.car.cancellationRate);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.car.bookingReference || "-");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogContent, _global_dialog_dialog_title_component__WEBPACK_IMPORTED_MODULE_1__.DialogTitleComponent, _shared_travelers_full_details_travelers_full_details_component__WEBPACK_IMPORTED_MODULE_2__.TravelersFullDetailsComponent, _shared_cart_item_stat_cart_item_stat_component__WEBPACK_IMPORTED_MODULE_3__.CartItemStatComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.LowerCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe, _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_4__.DibDatePipe, _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_5__.DibDashesToSpacesPipe, _utils_pipes_upperfirst_pipe__WEBPACK_IMPORTED_MODULE_6__.DibUpperFirstPipe], styles: [".segment-timeline-wrapper[_ngcontent-%COMP%] {\n  grid-auto-columns: max-content 1fr;\n}\n.segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%] {\n  height: 22px;\n  padding: 2px 0;\n}\n.segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 100%;\n  margin: auto;\n  position: relative;\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity));\n}\n.segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]::before, .segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  position: absolute;\n  right: -1px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity));\n}\n.segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]::after {\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtdGFicy1zaGFyZWQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFBQSx5REFBQTtBQUFOO0FBRU07RUFFRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQUEseURBQUE7QUFGUjtBQUtNO0VBQ0UsU0FBQTtBQUhSIiwiZmlsZSI6ImNhcnQtdGFicy1zaGFyZWQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWdtZW50LXRpbWVsaW5lLXdyYXBwZXIge1xuICBncmlkLWF1dG8tY29sdW1uczogbWF4LWNvbnRlbnQgMWZyO1xuXG4gIC50aW1lbGluZSB7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDJweCAwO1xuXG4gICAgLmxpbmUge1xuICAgICAgd2lkdGg6IDFweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgQGFwcGx5IGJnLWdyYXktNTAwO1xuXG4gICAgICAmOjpiZWZvcmUsXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogM3B4O1xuICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAtMXB4O1xuXG4gICAgICAgIEBhcHBseSBiZy1ncmF5LTUwMDtcbiAgICAgIH1cblxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 51868:
/*!**********************************************************************************************!*\
  !*** ./src/app/bookings/details/cart/tabs/shared/cart-item-stat/cart-item-stat.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartItemStatComponent": () => (/* binding */ CartItemStatComponent)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);



function CartItemStatComponent_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.label);
} }
const _c0 = ["*"];
class CartItemStatComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
}
CartItemStatComponent.ɵfac = /*@__PURE__*/ function () { let ɵCartItemStatComponent_BaseFactory; return function CartItemStatComponent_Factory(t) { return (ɵCartItemStatComponent_BaseFactory || (ɵCartItemStatComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CartItemStatComponent)))(t || CartItemStatComponent); }; }();
CartItemStatComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CartItemStatComponent, selectors: [["app-cart-item-stat"]], inputs: { label: "label" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 4, vars: 1, consts: [[1, "grid", "grid-flow-row", "auto-rows-min", "gap-1"], ["class", "text-xs text-gray-500", 4, "ngIf"], [1, "flex", "flex-wrap", "empty:hidden"], [1, "text-xs", "text-gray-500"]], template: function CartItemStatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CartItemStatComponent_small_1_Template, 2, 1, "small", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.label);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 85057:
/*!**************************************************************************************************************!*\
  !*** ./src/app/bookings/details/cart/tabs/shared/travelers-full-details/travelers-full-details.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravelersFullDetailsComponent": () => (/* binding */ TravelersFullDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);



function TravelersFullDetailsComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const traveler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](traveler_r1.email);
} }
function TravelersFullDetailsComponent_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const traveler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](traveler_r1.phoneNumber);
} }
function TravelersFullDetailsComponent_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const traveler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost Center: ", traveler_r1.travelerReferenceFields.costCenterName, "");
} }
function TravelersFullDetailsComponent_div_2_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function TravelersFullDetailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5)(5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TravelersFullDetailsComponent_div_2_div_6_Template, 5, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TravelersFullDetailsComponent_div_2_div_7_Template, 5, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TravelersFullDetailsComponent_div_2_div_8_Template, 5, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TravelersFullDetailsComponent_div_2_ng_container_9_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const traveler_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", traveler_r1.firstName, " ", traveler_r1.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", traveler_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", traveler_r1.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", traveler_r1.travelerReferenceFields.costCenterName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.contentTpl)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, traveler_r1));
} }
class TravelersFullDetailsComponent {
    constructor() {
        this.title = 'Traveler Details';
    }
    ngOnInit() { }
}
TravelersFullDetailsComponent.ɵfac = function TravelersFullDetailsComponent_Factory(t) { return new (t || TravelersFullDetailsComponent)(); };
TravelersFullDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TravelersFullDetailsComponent, selectors: [["app-travelers-full-details"]], inputs: { title: "title", travelers: "travelers", contentTpl: "contentTpl" }, decls: 3, vars: 2, consts: [[1, "text-xs", "text-gray-500"], ["class", "mb-1 flex flex-col", 4, "ngFor", "ngForOf"], [1, "mb-1", "flex", "flex-col"], [1, "flex", "flex-row", "items-baseline", "xs:flex-col", "xs:items-stretch"], [1, "mr-3", "font-bold"], [1, "flex", "flex-col"], [1, "flex", "flex-row", "flex-wrap", "gap-2", "text-xs"], ["class", "flex gap-1", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "flex", "gap-1"], [1, "material-icons", "text-xs", "text-dib-green-600"]], template: function TravelersFullDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TravelersFullDetailsComponent_div_2_Template, 10, 9, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.travelers);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet], styles: ["[_nghost-%COMP%] {\n    display: grid;\n    grid-auto-flow: row;\n    grid-auto-rows: min-content;\n    gap: 0.5rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYXZlbGVycy1mdWxsLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7SUFBQSxhQUFBO0lBQUEsbUJBQUE7SUFBQSwyQkFBQTtJQUFBO0FBQUEiLCJmaWxlIjoidHJhdmVsZXJzLWZ1bGwtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgQGFwcGx5IGdyaWQgZ3JpZC1mbG93LXJvdyBhdXRvLXJvd3MtbWluIGdhcC0yO1xufVxuIl19 */", "[_nghost-%COMP%] {\n    display: grid;\n    grid-auto-flow: row;\n    grid-auto-rows: min-content;\n    gap: 0.5rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYXZlbGVycy1mdWxsLWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRO0lBQUEsYUFBNkM7SUFBN0MsbUJBQTZDO0lBQTdDLDJCQUE2QztJQUE3QztBQUE2QyIsImZpbGUiOiJ0cmF2ZWxlcnMtZnVsbC1kZXRhaWxzLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgQGFwcGx5IGdyaWQgZ3JpZC1mbG93LXJvdyBhdXRvLXJvd3MtbWluIGdhcC0yOyB9Il19 */"], changeDetection: 0 });


/***/ }),

/***/ 77339:
/*!*************************************************************************************!*\
  !*** ./src/app/bookings/details/cart/tabs/taxi/cart-tabs-taxi-details.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartTabsTaxiDetailsComponent": () => (/* binding */ CartTabsTaxiDetailsComponent)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../base.component */ 83607);
/* harmony import */ var _taxi_full_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taxi-full-details.component */ 45615);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utils/pipes/date.pipe */ 23341);






function CartTabsTaxiDetailsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const traveler_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mr-3", !last_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", traveler_r1.firstName, " ", traveler_r1.lastName, "");
} }
class CartTabsTaxiDetailsComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(dialog) {
        super();
        this.dialog = dialog;
    }
    showDetails() {
        this.dialog.open(_taxi_full_details_component__WEBPACK_IMPORTED_MODULE_1__.TaxiFullDetailsComponent, {
            maxWidth: 1200,
            minWidth: 500,
            data: { taxi: this.data },
        });
    }
}
CartTabsTaxiDetailsComponent.ɵfac = function CartTabsTaxiDetailsComponent_Factory(t) { return new (t || CartTabsTaxiDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog)); };
CartTabsTaxiDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CartTabsTaxiDetailsComponent, selectors: [["app-cart-tabs-taxi-details"]], inputs: { data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 29, vars: 9, consts: [[1, "mb-4", "flex", "space-x-4", "sm:flex-col", "sm:space-x-0", "sm:space-y-4"], [1, "flex", "max-w-xs", "flex-1", "flex-col", "space-y-2", "sm:max-w-full"], [1, "text-xs", "text-gray-500"], [1, "flex", "space-x-2"], [1, "material-icons", "text-xl", "text-dib-green-600"], [1, "flex", "flex-1", "flex-col", "sm:flex-row"], [1, "flex", "flex-1", "flex-col"], [1, "mb-2", "text-xl", "font-bold"], [1, "flex", "flex-col"], [1, "mt-4", "flex", "flex-col", "sm:mt-0"], [1, "mt-6", "cursor-pointer", "font-bold", "text-dib-green-600", "sm:mt-2", 3, "click"], [1, "flex", "flex-1", "flex-col", "space-y-2"], [1, "flex", "flex-1", "flex-wrap", "items-baseline"], ["class", "mb-3 flex flex-col rounded border p-5", 3, "mr-3", 4, "ngFor", "ngForOf"], [1, "mb-3", "flex", "flex-col", "rounded", "border", "p-5"], [1, "whitespace-nowrap", "text-xl", "font-bold"]], template: function CartTabsTaxiDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Taxi Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "local_taxi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "dibDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 8)(17, "div", 9)(18, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Booking reference");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartTabsTaxiDetailsComponent_Template_a_click_22_listener() { return ctx.showDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "View details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 11)(25, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Passenger Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, CartTabsTaxiDetailsComponent_div_28_Template, 3, 4, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx.data.fromStation ? "From" : "To", " ", ctx.data.stationName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.pickupLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](15, 6, ctx.data.start.datetime, "productDetailsWithTime"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.bookingReference || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.data.travelers);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_2__.DibDatePipe], styles: ["[_nghost-%COMP%] { display: block; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtdGFicy10YXhpLWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsY0FBYyxFQUFFIiwiZmlsZSI6ImNhcnQtdGFicy10YXhpLWRldGFpbHMuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfSJdfQ== */"] });


/***/ }),

/***/ 45615:
/*!********************************************************************************!*\
  !*** ./src/app/bookings/details/cart/tabs/taxi/taxi-full-details.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaxiFullDetailsComponent": () => (/* binding */ TaxiFullDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../base.component */ 83607);
/* harmony import */ var _models_cart_items_taxi_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../models/cart-items/taxi.model */ 17178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _global_dialog_dialog_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../global/dialog/dialog-title.component */ 37511);
/* harmony import */ var _shared_travelers_full_details_travelers_full_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/travelers-full-details/travelers-full-details.component */ 85057);
/* harmony import */ var _shared_cart_item_stat_cart_item_stat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/cart-item-stat/cart-item-stat.component */ 51868);
/* harmony import */ var _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utils/pipes/date.pipe */ 23341);
/* harmony import */ var _utils_pipes_cancellation_policy_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utils/pipes/cancellation-policy.pipe */ 99763);











function TaxiFullDetailsComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.taxi.vehicle.seatCount, " ");
} }
function TaxiFullDetailsComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.taxi.vehicle.baggageCount, " ");
} }
function TaxiFullDetailsComponent_ul_46_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "dibCancellationPolicy");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const policy_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, policy_r4, ctx_r3.taxi.start.datetime));
} }
function TaxiFullDetailsComponent_ul_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TaxiFullDetailsComponent_ul_46_li_1_Template, 3, 4, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.taxi.cancellationPolicies);
} }
class TaxiFullDetailsComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(dialogRef, data) {
        super();
        this.dialogRef = dialogRef;
        this.data = data;
        this.taxiTransferTypeMap = _models_cart_items_taxi_model__WEBPACK_IMPORTED_MODULE_1__.taxiTransferTypeMap;
        this.taxiOfferVehicleCategoryMap = _models_cart_items_taxi_model__WEBPACK_IMPORTED_MODULE_1__.taxiOfferVehicleCategoryMap;
        this.taxi = data.taxi;
    }
}
TaxiFullDetailsComponent.ɵfac = function TaxiFullDetailsComponent_Factory(t) { return new (t || TaxiFullDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA)); };
TaxiFullDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: TaxiFullDetailsComponent, selectors: [["app-taxi-full-details"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 50, vars: 25, consts: [[1, "flex", "items-center"], [1, "material-icons", "mr-2", "text-dib-green-600"], [1, "mt-6", "mb-6", "flex", "sm:flex-col"], [1, "w-full", "border-r", "pr-3", "sm:border-b", "sm:border-r-0", "sm:pr-0", "sm:pb-3"], [1, "grid", "grid-flow-row", "auto-rows-min", "gap-1"], [1, "flex", "flex-wrap", "items-center", "text-xl", "font-bold"], [1, "text-sm", "font-normal"], [1, "mt-4", "grid", "grid-cols-2", "gap-4"], ["label", "Transfer type"], ["label", "Category"], [1, "mt-4", "grid", "gap-4"], ["label", "Information"], ["class", "mr-3 flex items-center text-xs", 4, "ngIf"], ["label", "Pick-up"], [1, "flex", "flex-col"], ["label", "Drop-off"], [1, "col-span-2", "mt-4", "mr-2", 3, "travelers"], [1, "flex", "min-w-min", "max-w-min", "flex-col", "pl-3", "sm:max-w-full", "sm:justify-between", "sm:pt-3", "sm:pl-0"], [1, "flex", "flex-col", "bg-dib-gray-100", "p-6", "sm:w-full"], [1, "mb-1", "flex", "items-baseline", "justify-between", "whitespace-nowrap", "text-gray-500"], [1, "mr-1", "text-3xl"], ["class", "mt-3 list-disc text-xs", 4, "ngIf"], [1, "mt-4", "grid", "min-w-max", "gap-4"], ["label", "Booking Reference"], [1, "mr-3", "flex", "items-center", "text-xs"], [1, "icon-car-seat", "mr-1", "text-sm"], [1, "icon-suitcase", "mr-1", "text-sm"], [1, "mt-3", "list-disc", "text-xs"], [4, "ngFor", "ngForOf"]], template: function TaxiFullDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "dib-dialog-title")(1, "span", 0)(2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "local_taxi");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-dialog-content")(6, "div", 2)(7, "div", 3)(8, "div", 4)(9, "h3", 5)(10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 7)(13, "app-cart-item-stat", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "app-cart-item-stat", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 10)(18, "app-cart-item-stat", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, TaxiFullDetailsComponent_span_19_Template, 3, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, TaxiFullDetailsComponent_span_20_Template, 3, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 10)(22, "app-cart-item-stat", 13)(23, "div", 14)(24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "dibDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "app-cart-item-stat", 15)(30, "div", 14)(31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](35, "dibDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "app-travelers-full-details", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 17)(38, "div", 18)(39, "div", 19)(40, "div")(41, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](43, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, TaxiFullDetailsComponent_ul_46_Template, 2, 1, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 22)(48, "app-cart-item-stat", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" Taxi ", ctx.taxi.fromStation ? "from" : "to", " ", ctx.taxi.stationName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.taxi.vehicle.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.taxiTransferTypeMap[ctx.taxi.transferType]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.taxiOfferVehicleCategoryMap[ctx.taxi.vehicle.category]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.taxi.vehicle.seatCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.taxi.vehicle.baggageCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.taxi.pickupLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](28, 16, ctx.taxi.start.datetime, "productDetailsWithTime"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.taxi.dropOffLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](35, 19, ctx.taxi.end.datetime, "productDetailsWithTime"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("travelers", ctx.taxi.travelers);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](43, 22, ctx.taxi.price.amount, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.taxi.price.currency);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.taxi.cancellationPolicies.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.taxi.bookingReference || "-");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogContent, _global_dialog_dialog_title_component__WEBPACK_IMPORTED_MODULE_2__.DialogTitleComponent, _shared_travelers_full_details_travelers_full_details_component__WEBPACK_IMPORTED_MODULE_3__.TravelersFullDetailsComponent, _shared_cart_item_stat_cart_item_stat_component__WEBPACK_IMPORTED_MODULE_4__.CartItemStatComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe, _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_5__.DibDatePipe, _utils_pipes_cancellation_policy_pipe__WEBPACK_IMPORTED_MODULE_6__.DibCancellationPolicyPipe], styles: [".segment-timeline-wrapper[_ngcontent-%COMP%] {\n  grid-auto-columns: max-content 1fr;\n}\n.segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%] {\n  height: 22px;\n  padding: 2px 0;\n}\n.segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 100%;\n  margin: auto;\n  position: relative;\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity));\n}\n.segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]::before, .segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  position: absolute;\n  right: -1px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity));\n}\n.segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]::after {\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtdGFicy1zaGFyZWQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFBQSx5REFBQTtBQUFOO0FBRU07RUFFRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQUEseURBQUE7QUFGUjtBQUtNO0VBQ0UsU0FBQTtBQUhSIiwiZmlsZSI6ImNhcnQtdGFicy1zaGFyZWQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWdtZW50LXRpbWVsaW5lLXdyYXBwZXIge1xuICBncmlkLWF1dG8tY29sdW1uczogbWF4LWNvbnRlbnQgMWZyO1xuXG4gIC50aW1lbGluZSB7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDJweCAwO1xuXG4gICAgLmxpbmUge1xuICAgICAgd2lkdGg6IDFweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgQGFwcGx5IGJnLWdyYXktNTAwO1xuXG4gICAgICAmOjpiZWZvcmUsXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogM3B4O1xuICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAtMXB4O1xuXG4gICAgICAgIEBhcHBseSBiZy1ncmF5LTUwMDtcbiAgICAgIH1cblxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 91615:
/*!***************************************************************************************!*\
  !*** ./src/app/bookings/details/cart/tabs/train/cart-tabs-train-details.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartTabsTrainDetailsComponent": () => (/* binding */ CartTabsTrainDetailsComponent)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../base.component */ 83607);
/* harmony import */ var _train_full_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./train-full-details.component */ 18922);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utils/pipes/date.pipe */ 23341);
/* harmony import */ var _utils_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utils/pipes/duration.pipe */ 77469);







function CartTabsTrainDetailsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "dibDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const journey_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", journey_r2.firstSegment.departureLocationName, " to ", journey_r2.lastSegment.arrivalLocationName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" Operated by: ", journey_r2.operatedByLabel, " \u25E6 ", journey_r2.itineraryClassLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 8, journey_r2.firstSegment.departureDateTime, "productDetails"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](10, 11, journey_r2.firstSegment.departureDateTime, "time"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 14, journey_r2.lastSegment.arrivalDateTime, "time"), " (", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](12, 17, journey_r2.totalDuration, "minutesToHrMin"), ") ");
} }
function CartTabsTrainDetailsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 18)(6, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Extras");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const traveler_r3 = ctx.$implicit;
    const last_r4 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mr-3", !last_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](traveler_r3.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](traveler_r3.seatingSelectionDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](traveler_r3.allOptionSelections);
} }
class CartTabsTrainDetailsComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(dialog) {
        super();
        this.dialog = dialog;
    }
    showDetails() {
        this.dialog.open(_train_full_details_component__WEBPACK_IMPORTED_MODULE_1__.TrainFullDetailsComponent, {
            maxWidth: 1200,
            minWidth: 500,
            data: { train: this.data },
        });
    }
}
CartTabsTrainDetailsComponent.ɵfac = function CartTabsTrainDetailsComponent_Factory(t) { return new (t || CartTabsTrainDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
CartTabsTrainDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CartTabsTrainDetailsComponent, selectors: [["app-cart-tabs-train-details"]], inputs: { data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 22, vars: 3, consts: [[1, "flex", "space-x-4", "sm:flex-col", "sm:space-x-0", "sm:space-y-4"], [1, "flex", "max-w-xs", "flex-1", "flex-col", "space-y-2", "sm:max-w-full"], [1, "text-xs", "text-gray-500"], [1, "flex", "space-x-2"], [1, "material-icons", "text-xl", "text-dib-green-600"], [1, "flex", "flex-1", "flex-col", "sm:flex-row"], ["class", "flex flex-1 flex-col", 4, "ngIf"], [1, "flex", "flex-col"], [1, "mt-4", "flex", "flex-col", "sm:mt-0"], [1, "mt-6", "cursor-pointer", "font-bold", "text-dib-green-600", "sm:mt-2", 3, "click"], [1, "flex", "flex-1", "flex-col", "space-y-2"], [1, "flex", "flex-1", "flex-wrap", "items-baseline"], ["class", "mb-3 flex flex-col rounded border p-5", 3, "mr-3", 4, "ngFor", "ngForOf"], [1, "flex", "flex-1", "flex-col"], [1, "mb-2", "text-xl", "font-bold"], [1, "mb-3", "flex", "flex-col", "rounded", "border", "p-5"], [1, "mb-2", "whitespace-nowrap", "text-xl", "font-bold"], [1, "whitespace-nowrap"], [1, "mt-4", "flex", "flex-col"], [1, "flex", "flex-wrap"]], template: function CartTabsTrainDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Train Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3)(5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "directions_train");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CartTabsTrainDetailsComponent_div_8_Template, 13, 20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Booking reference");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CartTabsTrainDetailsComponent_Template_a_click_15_listener() { return ctx.showDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "View details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 10)(18, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Passenger Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, CartTabsTrainDetailsComponent_div_21_Template, 10, 5, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.firstJourney);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.data.bookingReference || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.data.travellers);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_2__.DibDatePipe, _utils_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_3__.DibDurationPipe], styles: ["[_nghost-%COMP%] { display: block; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtdGFicy10cmFpbi1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFRLGNBQWMsRUFBRSIsImZpbGUiOiJjYXJ0LXRhYnMtdHJhaW4tZGV0YWlscy5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9Il19 */"] });


/***/ }),

/***/ 18922:
/*!**********************************************************************************!*\
  !*** ./src/app/bookings/details/cart/tabs/train/train-full-details.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainFullDetailsComponent": () => (/* binding */ TrainFullDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _global_dialog_dialog_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../global/dialog/dialog-title.component */ 37511);
/* harmony import */ var _global_plural_plural_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../global/plural/plural.component */ 41996);
/* harmony import */ var _shared_travelers_full_details_travelers_full_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/travelers-full-details/travelers-full-details.component */ 85057);
/* harmony import */ var _shared_cart_item_stat_cart_item_stat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/cart-item-stat/cart-item-stat.component */ 51868);
/* harmony import */ var _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utils/pipes/date.pipe */ 23341);
/* harmony import */ var _utils_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utils/pipes/duration.pipe */ 77469);











function TrainFullDetailsComponent_div_16_ng_container_1_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "dibDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const segment_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 2, segment_r6.layover.duration, "minutesToHM"), " - Quick change in ", segment_r6.layover.location, " ");
} }
function TrainFullDetailsComponent_div_16_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 17)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 19)(7, "div", 20)(8, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 24)(17, "div", 25)(18, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 28)(24, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "dibDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 25)(28, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](32, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, TrainFullDetailsComponent_div_16_ng_container_1_div_33_Template, 3, 5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const segment_r6 = ctx.$implicit;
    const itinerary_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("Operated by: ", segment_r6.segmentProducer, " \u25E6 ", itinerary_r3.itineraryClassLabel, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](segment_r6.transportId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](10, 11, segment_r6.departureDateTime, "time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](15, 14, segment_r6.arrivalDateTime, "time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](segment_r6.departureLocationName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](22, 17, segment_r6.departureDateTime, "productDetails"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Duration: ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](26, 20, segment_r6.duration, "minutesToHM"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](segment_r6.arrivalLocationName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](32, 23, segment_r6.arrivalDateTime, "productDetails"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", segment_r6.layover);
} }
function TrainFullDetailsComponent_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "dibDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itinerary_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 2, itinerary_r3.layover.duration, "minutesToHM"), " - Quick change in ", itinerary_r3.layover.location, " ");
} }
function TrainFullDetailsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TrainFullDetailsComponent_div_16_ng_container_1_Template, 34, 26, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TrainFullDetailsComponent_div_16_div_2_Template, 3, 5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itinerary_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", itinerary_r3.segments);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", itinerary_r3.layover);
} }
function TrainFullDetailsComponent_ng_template_18_ng_container_0_ng_container_1_ng_container_1_ng_container_1_app_cart_item_stat_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-cart-item-stat", 35);
} if (rf & 2) {
    const seatingAndExtras_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", "Seating: " + seatingAndExtras_r19.seating);
} }
function TrainFullDetailsComponent_ng_template_18_ng_container_0_ng_container_1_ng_container_1_ng_container_1_app_cart_item_stat_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-cart-item-stat", 35);
} if (rf & 2) {
    const seatingAndExtras_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", "Extras: " + seatingAndExtras_r19.extras);
} }
function TrainFullDetailsComponent_ng_template_18_ng_container_0_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 32)(2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "directions_train");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TrainFullDetailsComponent_ng_template_18_ng_container_0_ng_container_1_ng_container_1_ng_container_1_app_cart_item_stat_5_Template, 1, 1, "app-cart-item-stat", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, TrainFullDetailsComponent_ng_template_18_ng_container_0_ng_container_1_ng_container_1_ng_container_1_app_cart_item_stat_6_Template, 1, 1, "app-cart-item-stat", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const seatingAndExtras_r19 = ctx.ngIf;
    const segment_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", segment_r17.departureLocationName + " - " + segment_r17.arrivalLocationName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", seatingAndExtras_r19.seating);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", seatingAndExtras_r19.extras);
} }
function TrainFullDetailsComponent_ng_template_18_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TrainFullDetailsComponent_ng_template_18_ng_container_0_ng_container_1_ng_container_1_ng_container_1_Template, 7, 3, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const segment_r17 = ctx.$implicit;
    const itinerary_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const journey_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const traveler_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r16.getSeatingAndExtras(traveler_r11, journey_r13, itinerary_r15, segment_r17));
} }
function TrainFullDetailsComponent_ng_template_18_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TrainFullDetailsComponent_ng_template_18_ng_container_0_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const itinerary_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", itinerary_r15.segments);
} }
function TrainFullDetailsComponent_ng_template_18_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TrainFullDetailsComponent_ng_template_18_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const journey_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", journey_r13.itineraries);
} }
function TrainFullDetailsComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, TrainFullDetailsComponent_ng_template_18_ng_container_0_Template, 2, 1, "ng-container", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.train.journeys);
} }
class TrainFullDetailsComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(dialogRef, data) {
        super();
        this.dialogRef = dialogRef;
        this.data = data;
        this.train = data.train;
    }
    getSeatingAndExtras(traveler, journey, itinerary, segment) {
        const seating = traveler.segmentSeatingSelection(journey.journeyAdviceId, itinerary.itineraryId, segment.segmentId);
        const extras = traveler.segmentOptionSelection(journey.journeyAdviceId, itinerary.itineraryId, segment.segmentId);
        return seating || extras ? { seating, extras } : null;
    }
}
TrainFullDetailsComponent.ɵfac = function TrainFullDetailsComponent_Factory(t) { return new (t || TrainFullDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA)); };
TrainFullDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: TrainFullDetailsComponent, selectors: [["app-train-full-details"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 33, vars: 25, consts: [[1, "flex", "items-center"], [1, "material-icons", "mr-2", "text-dib-green-600"], [1, "mt-6", "mb-6", "flex", "sm:flex-col"], [1, "w-full", "border-r", "pr-3", "sm:border-b", "sm:border-r-0", "sm:pr-0", "sm:pb-3"], [1, "grid", "grid-flow-row", "auto-rows-min", "gap-1"], [1, "flex", "text-xl", "font-bold"], [4, "ngFor", "ngForOf"], [1, "col-span-2", "mt-4", "mr-2", 3, "travelers", "contentTpl"], ["travelerContentTpl", ""], [1, "flex", "flex-col", "pl-3", "sm:justify-between", "sm:pt-3", "sm:pl-0"], [1, "grid", "min-w-max", "gap-3", "bg-dib-gray-100", "p-6", "sm:w-full"], [1, "flex", "items-baseline", "whitespace-nowrap", "text-gray-500"], [1, "mr-1", "text-3xl"], ["single", "passenger", "multiple", "passengers", 3, "from"], [1, "mt-4", "grid", "min-w-max", "gap-4"], ["label", "Booking Reference"], ["class", "my-4 rounded bg-gradient-to-r from-blue-50 via-emerald-50 to-emerald-100 p-3", 4, "ngIf"], [1, "mt-4", "mb-2", "flex", "flex-row", "items-center", "justify-between", "border-b", "pb-1"], [1, "rounded-xl", "bg-gray-500", "px-1.5", "text-2xs", "leading-normal", "text-white"], [1, "segment-timeline-wrapper", "grid", "grid-flow-col", "gap-4"], [1, "flex", "flex-col", "justify-evenly"], [1, "text-lg", "font-bold"], [1, "timeline", "flex"], [1, "line"], [1, "flex", "flex-col", "justify-between", "py-1"], [1, "flex", "flex-row", "items-center", "justify-between"], [1, "flex-1"], [1, "ml-3", "text-xs"], [1, "flex", "flex-row", "items-center"], [1, "flex-1", "text-xs", "text-gray-500"], [1, "my-4", "rounded", "bg-gradient-to-r", "from-blue-50", "via-emerald-50", "to-emerald-100", "p-3"], [4, "ngIf"], [1, "mt-2", "mb-1", "flex", "border-b", "pb-1", "text-xs"], [1, "material-icons", "mr-1", "text-xs"], ["class", "ml-2", 3, "label", 4, "ngIf"], [1, "ml-2", 3, "label"]], template: function TrainFullDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "dib-dialog-title")(1, "span", 0)(2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "directions_train");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-dialog-content")(6, "div", 2)(7, "div", 3)(8, "div", 4)(9, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "dibDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "dibDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "dibDuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, TrainFullDetailsComponent_div_16_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "app-travelers-full-details", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, TrainFullDetailsComponent_ng_template_18_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 9)(21, "div", 10)(22, "div", 11)(23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "dib-plural", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 14)(31, "app-cart-item-stat", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Train to ", ctx.train.firstJourney.lastSegment.arrivalLocationName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx.train.firstJourney.firstSegment.departureLocationName, " to ", ctx.train.firstJourney.lastSegment.arrivalLocationName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](13, 13, ctx.train.firstJourney.firstSegment.departureDateTime, "time"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](14, 16, ctx.train.firstJourney.lastSegment.arrivalDateTime, "time"), " (", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](15, 19, ctx.train.firstJourney.totalDuration, "minutesToHM"), ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.train.firstJourney.itineraries);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("travelers", ctx.train.travellers)("contentTpl", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](25, 22, ctx.train.subTotalPrice.amount, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.train.subTotalPrice.currency);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("from", ctx.train.travellers.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.train.bookingReference || "-");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogContent, _global_dialog_dialog_title_component__WEBPACK_IMPORTED_MODULE_1__.DialogTitleComponent, _global_plural_plural_component__WEBPACK_IMPORTED_MODULE_2__.PluralComponent, _shared_travelers_full_details_travelers_full_details_component__WEBPACK_IMPORTED_MODULE_3__.TravelersFullDetailsComponent, _shared_cart_item_stat_cart_item_stat_component__WEBPACK_IMPORTED_MODULE_4__.CartItemStatComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe, _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_5__.DibDatePipe, _utils_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_6__.DibDurationPipe], styles: [".segment-timeline-wrapper[_ngcontent-%COMP%] {\n  grid-auto-columns: max-content 1fr;\n}\n.segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%] {\n  height: 22px;\n  padding: 2px 0;\n}\n.segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 100%;\n  margin: auto;\n  position: relative;\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity));\n}\n.segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]::before, .segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  position: absolute;\n  right: -1px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity));\n}\n.segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]::after {\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtdGFicy1zaGFyZWQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFBQSx5REFBQTtBQUFOO0FBRU07RUFFRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQUEseURBQUE7QUFGUjtBQUtNO0VBQ0UsU0FBQTtBQUhSIiwiZmlsZSI6ImNhcnQtdGFicy1zaGFyZWQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWdtZW50LXRpbWVsaW5lLXdyYXBwZXIge1xuICBncmlkLWF1dG8tY29sdW1uczogbWF4LWNvbnRlbnQgMWZyO1xuXG4gIC50aW1lbGluZSB7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDJweCAwO1xuXG4gICAgLmxpbmUge1xuICAgICAgd2lkdGg6IDFweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgQGFwcGx5IGJnLWdyYXktNTAwO1xuXG4gICAgICAmOjpiZWZvcmUsXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogM3B4O1xuICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAtMXB4O1xuXG4gICAgICAgIEBhcHBseSBiZy1ncmF5LTUwMDtcbiAgICAgIH1cblxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 41996:
/*!***************************************************!*\
  !*** ./src/app/global/plural/plural.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluralComponent": () => (/* binding */ PluralComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);


function PluralComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("1 ", ctx_r0.single, "");
} }
function PluralComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.from + " " + ctx_r1.multiple);
} }
class PluralComponent {
}
PluralComponent.ɵfac = function PluralComponent_Factory(t) { return new (t || PluralComponent)(); };
PluralComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PluralComponent, selectors: [["dib-plural"]], inputs: { from: "from", single: "single", multiple: "multiple" }, decls: 3, vars: 1, consts: [[3, "ngPlural"], ["ngPluralCase", "=1"], ["ngPluralCase", "other"]], template: function PluralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PluralComponent_ng_template_1_Template, 1, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PluralComponent_ng_template_2_Template, 1, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngPlural", ctx.from);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgPlural, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgPluralCase], encapsulation: 2 });


/***/ }),

/***/ 14992:
/*!************************************************!*\
  !*** ./src/app/global/plural/plural.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluralModule": () => (/* binding */ PluralModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _plural_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plural.component */ 41996);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class PluralModule {
}
PluralModule.ɵfac = function PluralModule_Factory(t) { return new (t || PluralModule)(); };
PluralModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PluralModule });
PluralModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PluralModule, { declarations: [_plural_component__WEBPACK_IMPORTED_MODULE_0__.PluralComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_plural_component__WEBPACK_IMPORTED_MODULE_0__.PluralComponent] }); })();


/***/ }),

/***/ 17178:
/*!*************************************************!*\
  !*** ./src/app/models/cart-items/taxi.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaxiAdapter": () => (/* binding */ TaxiAdapter),
/* harmony export */   "TaxiModel": () => (/* binding */ TaxiModel),
/* harmony export */   "taxiOfferVehicleCategoryMap": () => (/* binding */ taxiOfferVehicleCategoryMap),
/* harmony export */   "taxiTransferTypeMap": () => (/* binding */ taxiTransferTypeMap),
/* harmony export */   "taxiTypeMap": () => (/* binding */ taxiTypeMap)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

const taxiTransferTypeMap = {
    PRIVATE: 'Private',
    SHARED: 'Shared',
};
const taxiTypeMap = {
    FLIGHT: 'Flight',
    TRAIN: 'Train',
};
const taxiOfferVehicleCategoryMap = {
    ST: 'Standard',
    BU: 'Business',
    FC: 'First Class',
};
// TODO: [taxi] this one should be removed in favor of TaxiBookingModel as I think its not even used
class TaxiModel {
    constructor(id, bookingId, cancellationPolicies, end, price, offerId, segmentId, serviceProvider, start, status, taxiType, transferType, travelers, vehicle, items) {
        this.id = id;
        this.bookingId = bookingId;
        this.cancellationPolicies = cancellationPolicies;
        this.end = end;
        this.price = price;
        this.offerId = offerId;
        this.segmentId = segmentId;
        this.serviceProvider = serviceProvider;
        this.start = start;
        this.status = status;
        this.taxiType = taxiType;
        this.transferType = transferType;
        this.travelers = travelers;
        this.vehicle = vehicle;
        this.items = items;
    }
}
// TODO: [taxi] this one should be removed in favor of TaxiBookingAdapter as I think its not even used
class TaxiAdapter {
    adapt(item) {
        return new TaxiModel(item?.id, item?.bookingId, item?.cancellationPolicies, item?.end, item?.price, item?.offerId, item?.segmentId, item?.serviceProvider, item?.start, item?.status, item?.taxiType, item?.transferType, item?.travelers, item?.vehicle, item?.items);
    }
}
TaxiAdapter.ɵfac = function TaxiAdapter_Factory(t) { return new (t || TaxiAdapter)(); };
TaxiAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaxiAdapter, factory: TaxiAdapter.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_bookings_details_cart_cart-tabs_module_ts.js.map