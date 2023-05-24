"use strict";
(self["webpackChunkadmin_tool"] = self["webpackChunkadmin_tool"] || []).push([["src_app_bookings_bookings_module_ts"],{

/***/ 17281:
/*!************************************************!*\
  !*** ./src/app/bookings/bookings.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsComponent": () => (/* binding */ BookingsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 99635);
/* harmony import */ var _base_listing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-listing.component */ 74760);
/* harmony import */ var _reducers_bookings_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/bookings.reducer */ 6819);
/* harmony import */ var _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/bookings.actions */ 4797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global/breadcrumbs/breadcrumbs.component */ 25758);
/* harmony import */ var _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/breadcrumbs/breadcrumb/breadcrumb.component */ 62718);
/* harmony import */ var _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/wrapper/main/wrapper-main.component */ 4122);
/* harmony import */ var _global_wrapper_search_green_search_wrapper_green_search_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global/wrapper/search/green-search-wrapper/green-search-wrapper.component */ 86957);
/* harmony import */ var _global_wrapper_listing_wrapper_listing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/wrapper/listing/wrapper-listing.component */ 40542);
/* harmony import */ var _global_wrapper_listing_total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global/wrapper/listing/total/wrapper-listing-total.component */ 57905);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/pipes/date.pipe */ 23341);
/* harmony import */ var _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/pipes/dashes-to-spaces.pipe */ 61467);






















function BookingsComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Trip ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function BookingsComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r22.tripId);
  }
}
function BookingsComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function BookingsComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r23.companyName);
  }
}
function BookingsComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Cart Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function BookingsComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "dibDashesToSpaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 3, row_r24.status)));
  }
}
function BookingsComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Travelers");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function BookingsComponent_td_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " info_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matTooltip", row_r25.travelers.join(", "));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r25.travelers.length, " ");
  }
}
function BookingsComponent_td_28_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0, "-");
  }
}
function BookingsComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, BookingsComponent_td_28_div_1_Template, 4, 2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, BookingsComponent_td_28_ng_template_2_Template, 1, 0, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r25 = ctx.$implicit;
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", row_r25.travelers.length)("ngIfElse", _r27);
  }
}
function BookingsComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Booker Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function BookingsComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r30.bookerName);
  }
}
function BookingsComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function BookingsComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 43)(1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 2, row_r31.startDate, "distanceToNow"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 5, row_r31.startDate), " ");
  }
}
function BookingsComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function BookingsComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 43)(1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 2, row_r32.endDate, "distanceToNow"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 5, row_r32.endDate), " ");
  }
}
function BookingsComponent_th_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-progress-bar", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function BookingsComponent_th_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, BookingsComponent_th_39_div_1_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("colSpan", ctx_r14.columns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 2, ctx_r14.bookings$).loading);
  }
}
function BookingsComponent_th_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "th", 54);
  }
}
const _c0 = function (a1) {
  return ["/companies/bookings", a1];
};
function BookingsComponent_td_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 55)(1, "a", 56)(2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](1, _c0, row_r34.cartId));
  }
}
function BookingsComponent_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 58);
  }
}
function BookingsComponent_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 58);
  }
}
function BookingsComponent_tr_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 59);
  }
}
function BookingsComponent_tr_46_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Loading data. This can take a few seconds, please be patient. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
}
function BookingsComponent_tr_46_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0, " No records found. Please refine your search and try again. ");
  }
}
function BookingsComponent_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 60)(1, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, BookingsComponent_tr_46_ng_container_2_Template, 2, 0, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, BookingsComponent_tr_46_ng_template_4_Template, 1, 0, "ng-template", null, 63, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](5);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("colSpan", ctx_r20.columns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 3, ctx_r20.bookings$).loading)("ngIfElse", _r37);
  }
}
function BookingsComponent_mat_paginator_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-paginator", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("page", function BookingsComponent_mat_paginator_48_Template_mat_paginator_page_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r39.onPageChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("length", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, ctx_r21.bookings$).pagination.totalElements)("pageIndex", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, ctx_r21.bookings$).pagination.number)("pageSize", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 7, ctx_r21.bookings$).pagination.size);
  }
}
const _c1 = function () {
  return ["loader"];
};
class BookingsComponent extends _base_listing_component__WEBPACK_IMPORTED_MODULE_0__.BaseListingComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.bookings$ = this.store.select(_reducers_bookings_reducer__WEBPACK_IMPORTED_MODULE_1__.selectBookings);
    this.tableDataSource$ = this.store.select(_reducers_bookings_reducer__WEBPACK_IMPORTED_MODULE_1__.selectBookingsData);
  }
  ngOnInit() {
    this.sortActive = 'tripId';
    this.sortDirection = 'asc';
    this.columns = ['tripId', 'companyName', 'status', 'travelers', 'bookerName', 'startDate', 'endDate', 'actions'];
    this.loadAction = _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_2__.BookingActions.loadBookings;
    this.reloadOnActions = [_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_2__.BookingActions.saveBookingDetailsSuccess];
    super.syncFiltersWithRouteParams({
      params: ['tripId', 'companyName', 'status', 'traveler', 'referenceType', 'bookingReference', 'flightTicketNumber'],
      afterHook: () => {
        // This will be triggered on the initial page load and whenever one of the params we are watching is changed
        super.ngOnInit();
        this.loadData({
          page: 1
        });
      }
    });
  }
  onSearchCompanies(params) {
    this.router.navigate(['/companies'], {
      queryParams: params
    }).then(rxjs__WEBPACK_IMPORTED_MODULE_12__.noop);
  }
  onSearchUsers(params) {
    this.router.navigate(['/companies/users'], {
      queryParams: params
    }).then(rxjs__WEBPACK_IMPORTED_MODULE_12__.noop);
  }
}
BookingsComponent.ɵfac = function BookingsComponent_Factory(t) {
  return new (t || BookingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injector));
};
BookingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: BookingsComponent,
  selectors: [["app-bookings"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
  decls: 50,
  vars: 14,
  consts: [["label", "Dashboard", "route", "/"], ["label", "Companies", "route", "/companies"], ["label", "Bookings", "route", "/companies/bookings"], ["activeTab", "bookings", 3, "filters", "searchUsers", "searchCompanies", "searchBookings"], ["slot", "title"], ["slot", "hidden-columns-message"], [1, "hidden", "sm:block"], ["slot", "total"], [3, "total"], ["slot", "table"], ["mat-table", "", "matSort", "", "matSortDisableClear", "", 1, "whitespace-nowrap", 3, "matSortActive", "matSortDirection", "dataSource", "matSortChange"], ["matColumnDef", "tripId"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "companyName"], ["class", "sm:hidden", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "whitespace-normal break-words pr-2 sm:hidden", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "status"], ["class", "sm:hidden", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "travelers"], ["class", "xs:hidden", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "xs:hidden", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "bookerName"], ["class", "whitespace-normal break-words pr-2", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "startDate"], ["class", "xs:hidden", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "endDate"], ["matColumnDef", "loader"], ["mat-header-cell", "", 3, "colSpan", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "whitespace-normal", 4, "matNoDataRow"], ["slot", "pagination"], [3, "length", "pageIndex", "pageSize", "page", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "sm:hidden"], ["mat-cell", "", 1, "whitespace-normal", "break-words", "pr-2", "sm:hidden"], ["mat-cell", "", 1, "sm:hidden"], ["mat-header-cell", "", 1, "xs:hidden"], ["mat-cell", "", 1, "xs:hidden"], ["class", "flex items-center", "matTooltipPosition", "above", 3, "matTooltip", 4, "ngIf", "ngIfElse"], ["noTravelers", ""], ["matTooltipPosition", "above", 1, "flex", "items-center", 3, "matTooltip"], [1, "material-icons", "ml-1", "text-lg"], ["mat-cell", "", 1, "whitespace-normal", "break-words", "pr-2"], ["mat-header-cell", "", "mat-sort-header", "", 1, "xs:hidden"], [3, "matTooltip"], ["mat-header-cell", "", 3, "colSpan"], [4, "ngIf"], ["mode", "indeterminate", 1, "absolute"], ["mat-header-cell", ""], ["mat-cell", "", 1, "text-right"], ["mat-icon-button", "", "color", "accent", "matTooltip", "View booking details", "matTooltipPosition", "left", 1, "hover:text-dib-green-600", 3, "routerLink"], [1, "material-icons"], ["mat-header-row", ""], ["mat-row", ""], [1, "whitespace-normal"], [1, "border-b", "p-6", "text-center", 3, "colSpan"], [4, "ngIf", "ngIfElse"], ["noData", ""], [3, "length", "pageIndex", "pageSize", "page"]],
  template: function BookingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "dib-wrapper-main")(1, "dib-breadcrumbs");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "dib-breadcrumb", 0)(3, "dib-breadcrumb", 1)(4, "dib-breadcrumb", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "dib-green-search-wrapper", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("searchUsers", function BookingsComponent_Template_dib_green_search_wrapper_searchUsers_5_listener($event) {
        return ctx.onSearchUsers($event);
      })("searchCompanies", function BookingsComponent_Template_dib_green_search_wrapper_searchCompanies_5_listener($event) {
        return ctx.onSearchCompanies($event);
      })("searchBookings", function BookingsComponent_Template_dib_green_search_wrapper_searchBookings_5_listener($event) {
        return ctx.filterMultiple($event, true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "dib-wrapper-listing");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](7, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Bookings");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](9, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "* Some columns are hidden due to small screen size");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](12, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "dib-wrapper-listing-total", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](15, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "table", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("matSortChange", function BookingsComponent_Template_table_matSortChange_16_listener($event) {
        return ctx.onSortChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](17, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, BookingsComponent_th_18_Template, 2, 0, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, BookingsComponent_td_19_Template, 2, 1, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](20, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, BookingsComponent_th_21_Template, 2, 0, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, BookingsComponent_td_22_Template, 2, 1, "td", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](23, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, BookingsComponent_th_24_Template, 2, 0, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](25, BookingsComponent_td_25_Template, 4, 5, "td", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](26, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, BookingsComponent_th_27_Template, 2, 0, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](28, BookingsComponent_td_28_Template, 4, 2, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](29, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, BookingsComponent_th_30_Template, 2, 0, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](31, BookingsComponent_td_31_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](32, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, BookingsComponent_th_33_Template, 2, 0, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](34, BookingsComponent_td_34_Template, 5, 7, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](35, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](36, BookingsComponent_th_36_Template, 2, 0, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](37, BookingsComponent_td_37_Template, 5, 7, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](38, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](39, BookingsComponent_th_39_Template, 3, 4, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](40, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](41, BookingsComponent_th_41_Template, 1, 0, "th", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](42, BookingsComponent_td_42_Template, 4, 3, "td", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](43, BookingsComponent_tr_43_Template, 1, 0, "tr", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, BookingsComponent_tr_44_Template, 1, 0, "tr", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](45, BookingsComponent_tr_45_Template, 1, 0, "tr", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](46, BookingsComponent_tr_46_Template, 6, 5, "tr", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](47, 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](48, BookingsComponent_mat_paginator_48_Template, 4, 9, "mat-paginator", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](49, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("filters", ctx.filters);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("total", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](14, 9, ctx.bookings$).pagination == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](14, 9, ctx.bookings$).pagination.totalElements);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matSortActive", ctx.sortActive)("matSortDirection", ctx.sortDirection)("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](13, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](49, 11, ctx.bookings$).pagination);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatNoDataRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortHeader, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__.MatProgressBar, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatAnchor, _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsComponent, _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent, _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_5__.WrapperMainComponent, _global_wrapper_search_green_search_wrapper_green_search_wrapper_component__WEBPACK_IMPORTED_MODULE_6__.GreenSearchWrapperComponent, _global_wrapper_listing_wrapper_listing_component__WEBPACK_IMPORTED_MODULE_7__.WrapperListingComponent, _global_wrapper_listing_total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_8__.WrapperListingTotalComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.TitleCasePipe, _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_9__.DibDatePipe, _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_10__.DibDashesToSpacesPipe],
  encapsulation: 2
});

/***/ }),

/***/ 7938:
/*!*********************************************!*\
  !*** ./src/app/bookings/bookings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsModule": () => (/* binding */ BookingsModule)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _bookings_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookings.routing */ 44271);
/* harmony import */ var _bookings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookings.component */ 17281);
/* harmony import */ var _effects_booking_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../effects/booking.effects */ 40735);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global/breadcrumbs/breadcrumbs.module */ 2367);
/* harmony import */ var _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/wrapper/main/wrapper-main.module */ 49722);
/* harmony import */ var _global_wrapper_search_wrapper_search_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/wrapper/search/wrapper-search.module */ 38765);
/* harmony import */ var _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global/wrapper/listing/wrapper-listing.module */ 23745);
/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./details */ 83181);
/* harmony import */ var _global_wrapper_details_wrapper_details_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global/wrapper/details/wrapper-details.module */ 69569);
/* harmony import */ var _global_dot_loader_dot_loader_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../global/dot-loader/dot-loader.module */ 67995);
/* harmony import */ var _details_company__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./details/company */ 39782);
/* harmony import */ var _companies_company_details__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../companies/company-details */ 63844);
/* harmony import */ var _details_traveler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./details/traveler */ 9971);
/* harmony import */ var _effects_cart_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../effects/cart.effects */ 28129);
/* harmony import */ var _details_cart_price_cart_price_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./details/cart/price/cart-price.component */ 67386);
/* harmony import */ var _companies_company_users__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../companies/company-users */ 1979);
/* harmony import */ var _details_cart_cart_tabs_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./details/cart/cart-tabs.module */ 48203);
/* harmony import */ var _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/pipes/pipes.module */ 59916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ 60124);































class BookingsModule {
}
BookingsModule.ɵfac = function BookingsModule_Factory(t) { return new (t || BookingsModule)(); };
BookingsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: BookingsModule });
BookingsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
        _bookings_routing__WEBPACK_IMPORTED_MODULE_0__.routing,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__.MatProgressBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButtonModule,
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_25__.EffectsModule.forFeature([_effects_booking_effects__WEBPACK_IMPORTED_MODULE_2__.BookingEffects, _effects_cart_effects__WEBPACK_IMPORTED_MODULE_13__.CartEffects]),
        _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
        _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_4__.WrapperMainModule,
        _global_wrapper_search_wrapper_search_module__WEBPACK_IMPORTED_MODULE_5__.WrapperSearchModule,
        _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_6__.WrapperListingModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltipModule,
        _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_17__.DibPipesModule,
        _global_wrapper_details_wrapper_details_module__WEBPACK_IMPORTED_MODULE_8__.WrapperDetailsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule,
        _global_dot_loader_dot_loader_module__WEBPACK_IMPORTED_MODULE_9__.DotLoaderModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_28__.MatInputModule,
        _companies_company_details__WEBPACK_IMPORTED_MODULE_11__.CompanyDetailsModule,
        _companies_company_users__WEBPACK_IMPORTED_MODULE_15__.CompanyUsersModule,
        _details_cart_cart_tabs_module__WEBPACK_IMPORTED_MODULE_16__.CartTabsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](BookingsModule, { declarations: [_bookings_component__WEBPACK_IMPORTED_MODULE_1__.BookingsComponent,
        _details__WEBPACK_IMPORTED_MODULE_7__.BookingDetailsComponent,
        _details_company__WEBPACK_IMPORTED_MODULE_10__.BookingDetailsCompanyComponent,
        _details_traveler__WEBPACK_IMPORTED_MODULE_12__.BookingDetailsTravelerComponent,
        _details_cart_price_cart_price_component__WEBPACK_IMPORTED_MODULE_14__.CartPriceComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_29__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__.MatProgressBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButtonModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_25__.EffectsFeatureModule, _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
        _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_4__.WrapperMainModule,
        _global_wrapper_search_wrapper_search_module__WEBPACK_IMPORTED_MODULE_5__.WrapperSearchModule,
        _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_6__.WrapperListingModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltipModule,
        _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_17__.DibPipesModule,
        _global_wrapper_details_wrapper_details_module__WEBPACK_IMPORTED_MODULE_8__.WrapperDetailsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule,
        _global_dot_loader_dot_loader_module__WEBPACK_IMPORTED_MODULE_9__.DotLoaderModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_28__.MatInputModule,
        _companies_company_details__WEBPACK_IMPORTED_MODULE_11__.CompanyDetailsModule,
        _companies_company_users__WEBPACK_IMPORTED_MODULE_15__.CompanyUsersModule,
        _details_cart_cart_tabs_module__WEBPACK_IMPORTED_MODULE_16__.CartTabsModule] }); })();


/***/ }),

/***/ 44271:
/*!**********************************************!*\
  !*** ./src/app/bookings/bookings.routing.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routing": () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.guard */ 3870);
/* harmony import */ var _bookings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookings.component */ 17281);
/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details */ 83181);
/* harmony import */ var _details_company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/company */ 39782);
/* harmony import */ var _details_traveler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/traveler */ 9971);






const routes = [
    {
        path: '',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        children: [
            { path: '', component: _bookings_component__WEBPACK_IMPORTED_MODULE_1__.BookingsComponent, data: { title: 'Bookings' } },
            { path: ':id', component: _details__WEBPACK_IMPORTED_MODULE_2__.BookingDetailsComponent, data: { title: 'Booking details' } },
            { path: ':id/users/:userId', component: _details_traveler__WEBPACK_IMPORTED_MODULE_4__.BookingDetailsTravelerComponent, data: { title: 'Traveler details' } },
            { path: ':id/company/:companyId', component: _details_company__WEBPACK_IMPORTED_MODULE_3__.BookingDetailsCompanyComponent, data: { title: 'Company details' } },
        ],
    },
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes);


/***/ }),

/***/ 80389:
/*!***************************************************************!*\
  !*** ./src/app/bookings/details/booking-details.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingDetailsComponent": () => (/* binding */ BookingDetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 62566);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base.component */ 83607);
/* harmony import */ var _actions_users_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/users.actions */ 67421);
/* harmony import */ var _reducers_bookings_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducers/bookings.reducer */ 6819);
/* harmony import */ var _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/bookings.actions */ 4797);
/* harmony import */ var _reducers_carts_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers/carts.reducer */ 5065);
/* harmony import */ var _actions_carts_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/carts.actions */ 39568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../global/breadcrumbs/breadcrumbs.component */ 25758);
/* harmony import */ var _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../global/breadcrumbs/breadcrumb/breadcrumb.component */ 62718);
/* harmony import */ var _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../global/wrapper/main/wrapper-main.component */ 4122);
/* harmony import */ var _global_wrapper_details_wrapper_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../global/wrapper/details/wrapper-details.component */ 24019);
/* harmony import */ var _global_wrapper_details_tab_wrapper_details_tab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../global/wrapper/details/tab/wrapper-details-tab.component */ 36246);
/* harmony import */ var _global_dot_loader_dot_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../global/dot-loader/dot-loader.component */ 43339);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _cart_cart_tabs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cart/cart-tabs.component */ 10060);
/* harmony import */ var _cart_price_cart_price_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cart/price/cart-price.component */ 67386);
/* harmony import */ var _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/pipes/date.pipe */ 23341);
/* harmony import */ var _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/pipes/dashes-to-spaces.pipe */ 61467);




























function BookingDetailsComponent_ng_container_15_dib_wrapper_details_tab_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "dib-wrapper-details-tab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const traveler_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("title", traveler_r4.name)("route", "/companies/bookings/" + ctx_r3.booking.cartId + "/users/" + traveler_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", traveler_r4.name, " ");
  }
}
function BookingDetailsComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "dib-wrapper-details-tab", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "Traveler Profiles");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, BookingDetailsComponent_ng_container_15_dib_wrapper_details_tab_3_Template, 2, 3, "dib-wrapper-details-tab", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r0.booking == null ? null : ctx_r0.booking.travelerProfiles());
  }
}
function BookingDetailsComponent_form_21_dib_dot_loader_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "dib-dot-loader", 35);
  }
}
function BookingDetailsComponent_form_21_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "Travel Portal");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
}
function BookingDetailsComponent_form_21_div_31_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const traveler_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("opacity-50", !traveler_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"](" ", traveler_r14.name, " ", !traveler_r14.id ? "(guest)" : "", " ");
  }
}
function BookingDetailsComponent_form_21_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, BookingDetailsComponent_form_21_div_31_span_1_Template, 2, 4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r7.booking.allTravelers());
  }
}
function BookingDetailsComponent_form_21_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function BookingDetailsComponent_form_21_i_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r15 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r10.booking.productIcon(type_r15));
  }
}
function BookingDetailsComponent_form_21_div_64_dib_dot_loader_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "dib-dot-loader", 35);
  }
}
function BookingDetailsComponent_form_21_div_64_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function BookingDetailsComponent_form_21_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 40)(1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "Changes not yet saved.");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function BookingDetailsComponent_form_21_div_64_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r18.initForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function BookingDetailsComponent_form_21_div_64_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r20.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, BookingDetailsComponent_form_21_div_64_dib_dot_loader_7_Template, 1, 0, "dib-dot-loader", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, BookingDetailsComponent_form_21_div_64_span_9_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 4, ctx_r11.loading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 6, ctx_r11.loading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](10, 8, ctx_r11.loading$));
  }
}
function BookingDetailsComponent_form_21_app_cart_price_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "app-cart-price", 44);
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("cartId", ctx_r12.booking.cartId);
  }
}
function BookingDetailsComponent_form_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "form", 14)(1, "div", 15)(2, "div")(3, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 18)(8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function BookingDetailsComponent_form_21_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r21.travelPortal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, BookingDetailsComponent_form_21_dib_dot_loader_9_Template, 1, 0, "dib-dot-loader", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, BookingDetailsComponent_form_21_ng_container_11_Template, 5, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "div", 21)(14, "div", 22)(15, "div", 23)(16, "div", 24)(17, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18, "Cart Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](21, "dibDashesToSpaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "div", 25)(23, "div", 26)(24, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25, "Booker Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "div", 26)(29, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](30, "Traveler Names");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](31, BookingDetailsComponent_form_21_div_31_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](32, BookingDetailsComponent_form_21_ng_template_32_Template, 2, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](34, "div", 25)(35, "div", 26)(36, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](37, "Product Types");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](38, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](39, BookingDetailsComponent_form_21_i_39_Template, 2, 1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](40, "div", 26)(41, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](42, "Number Of Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](45, "div", 25)(46, "div", 26)(47, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](48, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](49, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](51, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](52, "div", 26)(53, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](54, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](55, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](57, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](58, "div", 31)(59, "mat-form-field", 31)(60, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](61, "Agent note");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](62, "textarea", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](63, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](64, BookingDetailsComponent_form_21_div_64_Template, 11, 10, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](65, BookingDetailsComponent_form_21_app_cart_price_65_Template, 1, 1, "app-cart-price", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](33);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r1.booking.tripId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.booking.tripName);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](10, 17, ctx_r1.overrideTokenLoading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](12, 19, ctx_r1.overrideTokenLoading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](21, 21, ctx_r1.booking.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.booking.booker.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.booking.allTravelers().length)("ngIfElse", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r1.booking.productTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.booking.numberOfItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](51, 23, ctx_r1.booking.startDate, "ui"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](57, 26, ctx_r1.booking.endDate, "ui"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](63, 29, ctx_r1.loading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.form.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.booking == null ? null : ctx_r1.booking.cartId);
  }
}
function BookingDetailsComponent_app_cart_tabs_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "app-cart-tabs", 45);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("cartId", ctx_r2.booking.cartId);
  }
}
class BookingDetailsComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(route, store, formBuilder, actions) {
    super();
    this.route = route;
    this.store = store;
    this.formBuilder = formBuilder;
    this.actions = actions;
    this.booking$ = this.store.select(_reducers_bookings_reducer__WEBPACK_IMPORTED_MODULE_2__.getSelectedBooking);
    this.loading$ = this.store.select(_reducers_bookings_reducer__WEBPACK_IMPORTED_MODULE_2__.selectedBookingLoading);
    // Only subscribe to initial page loading and use it for the page wrapper loader
    // Subsequent loading states will be handled differently using the main loading$ prop
    this.firstTimeLoading$ = this.loading$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeWhile)(loading => loading, true));
    this.overrideTokenLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__.BehaviorSubject(false);
  }
  ngOnInit() {
    // Load cart data if not already in store
    this.subscriptions.add(this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.mergeMap)(params => (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.forkJoin)([(0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)(params), this.store.select((0,_reducers_carts_reducer__WEBPACK_IMPORTED_MODULE_4__.selectCartById)(params.id)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.take)(1))]))).subscribe(([{
      id
    }, cart]) => {
      if (!cart?.id || cart?.id !== id) {
        // Load company details if we don't have one in store already
        this.store.dispatch(_actions_carts_actions__WEBPACK_IMPORTED_MODULE_5__.CartActions.loadCartDetails({
          id
        }));
      }
      this.cart$ = this.store.select((0,_reducers_carts_reducer__WEBPACK_IMPORTED_MODULE_4__.selectCartById)(id));
    }));
    // Load booking data if not already in store
    this.subscriptions.add(this.booking$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.take)(1)).subscribe(booking => {
      const id = this.route.snapshot.params['id'];
      if (!booking.cartId || booking.cartId !== id) {
        this.store.dispatch(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_3__.BookingActions.loadAndSelectBooking({
          id
        }));
      }
    }));
    this.subscriptions.add(this.booking$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.filter)(item => !!item?.cartId), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.distinctUntilChanged)((prev, current) => {
      return JSON.stringify(prev) === JSON.stringify(current);
    })).subscribe(item => {
      this.booking = item;
      this.initForm();
    }));
    this.subscriptions.add(this.actions.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_25__.ofType)(_actions_users_actions__WEBPACK_IMPORTED_MODULE_1__.UserActions.getOverrideTokenStart)).subscribe(() => {
      this.overrideTokenLoading$.next(true);
    }));
    this.subscriptions.add(this.actions.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_25__.ofType)(_actions_users_actions__WEBPACK_IMPORTED_MODULE_1__.UserActions.getOverrideTokenSuccess, _actions_users_actions__WEBPACK_IMPORTED_MODULE_1__.UserActions.getOverrideTokenError)).subscribe(() => {
      this.overrideTokenLoading$.next(false);
    }));
  }
  initForm() {
    this.form = this.formBuilder.group({
      note: [this.booking.agentNote]
    });
  }
  save() {
    const data = JSON.parse(JSON.stringify(this.booking));
    data.agentNote = this.form.get('note').value;
    this.store.dispatch(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_3__.BookingActions.saveBookingDetails({
      data
    }));
  }
  travelPortal() {
    this.store.dispatch(_actions_users_actions__WEBPACK_IMPORTED_MODULE_1__.UserActions.getOverrideToken({
      username: this.booking.booker.username,
      redirectPath: `trip/${this.booking.cartId}`
    }));
  }
}
BookingDetailsComponent.ɵfac = function BookingDetailsComponent_Factory(t) {
  return new (t || BookingDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_27__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_28__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_25__.Actions));
};
BookingDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
  type: BookingDetailsComponent,
  selectors: [["app-booking-details"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"]],
  decls: 23,
  vars: 18,
  consts: [["label", "Dashboard", "route", "/"], ["label", "Companies", "route", "/companies"], ["label", "Bookings", "route", "/companies/bookings"], [3, "label", "loading"], [3, "loading", "item"], ["slot", "tabs"], ["type", "header"], [3, "title", "route"], [4, "ngIf"], ["active", "true", 3, "title"], ["slot", "content"], [3, "formGroup", 4, "ngIf"], [3, "cartId", 4, "ngIf"], [3, "title", "route", 4, "ngFor", "ngForOf"], [3, "formGroup"], [1, "flex", "w-full", "justify-between"], [1, "text-xl"], [1, "text-xs", "text-gray-500"], [1, "mt-6", "mb-10", "max-w-max"], ["type", "submit", "mat-stroked-button", "", 1, "border-current", "text-current", 3, "click"], ["size", "small", "color", "current", 4, "ngIf"], [1, "mt-6", "flex", "sm:flex-col"], [1, "w-full", "border-r", "pr-3", "sm:border-b", "sm:border-r-0", "sm:pr-0", "sm:pb-3"], [1, "flex", "w-2/3", "flex-col", "space-y-6", "md:w-full"], [1, "flex", "w-full", "flex-col", "space-y-1"], [1, "flex", "w-full", "space-x-2"], [1, "flex", "flex-1", "flex-col", "space-y-1"], ["class", "flex flex-col", 4, "ngIf", "ngIfElse"], ["noTravelers", ""], [1, "flex", "space-x-2", "text-gray-600"], ["class", "material-icons", 4, "ngFor", "ngForOf"], [1, "w-full"], ["matInput", "", "formControlName", "note", "type", "text", "name", "note", "cols", "60", "rows", "10"], ["class", "flex cursor-pointer space-x-2", 4, "ngIf"], ["class", "flex flex-col pl-3 sm:pt-3 sm:pl-0", 3, "cartId", 4, "ngIf"], ["size", "small", "color", "current"], [1, "material-icons", "ml-2", "text-lg"], [1, "flex", "flex-col"], [3, "opacity-50", 4, "ngFor", "ngForOf"], [1, "material-icons"], [1, "flex", "cursor-pointer", "space-x-2"], [1, "flex", "flex-1", "items-center", "text-xs", "text-gray-500"], ["type", "reset", "mat-button", "", 1, "small-button", 3, "click"], ["type", "submit", "mat-stroked-button", "", "color", "primary", 1, "small-button", 3, "click"], [1, "flex", "flex-col", "pl-3", "sm:pt-3", "sm:pl-0", 3, "cartId"], [3, "cartId"]],
  template: function BookingDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "dib-wrapper-main")(1, "dib-breadcrumbs");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "dib-breadcrumb", 0)(3, "dib-breadcrumb", 1)(4, "dib-breadcrumb", 2)(5, "dib-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "dib-wrapper-details", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](10, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "dib-wrapper-details-tab", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12, "Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "dib-wrapper-details-tab", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](15, BookingDetailsComponent_ng_container_15_Template, 4, 1, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "dib-wrapper-details-tab", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17, "Booking");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "dib-wrapper-details-tab", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](20, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](21, BookingDetailsComponent_form_21_Template, 66, 31, "form", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](22, BookingDetailsComponent_app_cart_tabs_22_Template, 1, 1, "app-cart-tabs", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("label", ctx.booking == null ? null : ctx.booking.tripId)("loading", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](6, 12, ctx.firstTimeLoading$));
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("loading", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 14, ctx.firstTimeLoading$))("item", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](9, 16, ctx.booking$));
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("title", ctx.booking == null ? null : ctx.booking.company == null ? null : ctx.booking.company.name)("route", "/companies/bookings/" + (ctx.booking == null ? null : ctx.booking.cartId) + "/company/" + (ctx.booking == null ? null : ctx.booking.company == null ? null : ctx.booking.company.id));
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx.booking == null ? null : ctx.booking.company == null ? null : ctx.booking.company.name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.booking == null ? null : ctx.booking.travelerProfiles().length);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("title", ctx.booking == null ? null : ctx.booking.tripId);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx.booking == null ? null : ctx.booking.tripId, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.booking == null ? null : ctx.booking.cartId);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_29__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButton, _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbsComponent, _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbComponent, _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_8__.WrapperMainComponent, _global_wrapper_details_wrapper_details_component__WEBPACK_IMPORTED_MODULE_9__.WrapperDetailsComponent, _global_wrapper_details_tab_wrapper_details_tab_component__WEBPACK_IMPORTED_MODULE_10__.WrapperDetailsTabComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormControlName, _global_dot_loader_dot_loader_component__WEBPACK_IMPORTED_MODULE_11__.DotLoaderComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_32__.MatInput, _cart_cart_tabs_component__WEBPACK_IMPORTED_MODULE_12__.CartTabsComponent, _cart_price_cart_price_component__WEBPACK_IMPORTED_MODULE_13__.CartPriceComponent, _angular_common__WEBPACK_IMPORTED_MODULE_29__.AsyncPipe, _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_14__.DibDatePipe, _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_15__.DibDashesToSpacesPipe],
  encapsulation: 2
});

/***/ }),

/***/ 67386:
/*!*********************************************************************!*\
  !*** ./src/app/bookings/details/cart/price/cart-price.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPriceComponent": () => (/* binding */ CartPriceComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../base.component */ 83607);
/* harmony import */ var _reducers_carts_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../reducers/carts.reducer */ 5065);
/* harmony import */ var _models_booking_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/booking.model */ 31282);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/user.model */ 84872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/user.service */ 73071);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/pipes/date.pipe */ 23341);










function CartPriceComponent_ng_container_0_div_1_div_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cart_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, cart_r1.createdAt, "uiWithTime"), " ");
  }
}
function CartPriceComponent_ng_container_0_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CartPriceComponent_ng_container_0_div_1_div_2_span_3_Template, 3, 4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const agent_r6 = ctx.ngIf;
    const cart_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Generated by agent ", agent_r6.firstName + " " + agent_r6.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", cart_r1.isCompletedByAgent);
  }
}
function CartPriceComponent_ng_container_0_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Invoice is sent to company admin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartPriceComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CartPriceComponent_ng_container_0_div_1_div_2_Template, 4, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5)(7, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, CartPriceComponent_ng_container_0_div_1_span_13_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cart_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", cart_r1.isCreatedByAgent && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 5, ctx_r2.agent$));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](cart_r1.tripStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 7, cart_r1.price.totalPrice, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](cart_r1.price.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", cart_r1.invoiceSentToAdmin);
  }
}
function CartPriceComponent_ng_container_0_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fields_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](fields_r11.projects);
  }
}
function CartPriceComponent_ng_container_0_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Purpose of Trip");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fields_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](fields_r11.purposeOfTrip);
  }
}
function CartPriceComponent_ng_container_0_ng_container_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Your Reference");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fields_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](fields_r11.yourReference);
  }
}
function CartPriceComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CartPriceComponent_ng_container_0_ng_container_2_div_1_Template, 5, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CartPriceComponent_ng_container_0_ng_container_2_div_2_Template, 5, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CartPriceComponent_ng_container_0_ng_container_2_div_3_Template, 5, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const fields_r11 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", fields_r11.projects);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", fields_r11.purposeOfTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", fields_r11.yourReference);
  }
}
function CartPriceComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CartPriceComponent_ng_container_0_div_1_Template, 14, 10, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CartPriceComponent_ng_container_0_ng_container_2_Template, 4, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const cart_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", cart_r1 == null ? null : cart_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", cart_r1.currentOrder == null ? null : cart_r1.currentOrder.orderReferenceFields);
  }
}
class CartPriceComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(store, userService) {
    super();
    this.store = store;
    this.userService = userService;
  }
  ngOnInit() {
    // Cart data must be in store already, loaded from the parent component
    // We will not try to load the cart data from here and instead we will just request it
    this.cart$ = this.store.select((0,_reducers_carts_reducer__WEBPACK_IMPORTED_MODULE_1__.selectCartById)(this.cartId));
    // If the cart was booked by the agent we will need to load agent's data in order to display on the UI
    this.subscriptions.add(this.cart$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(cart => cart.createdByType === _models_booking_model__WEBPACK_IMPORTED_MODULE_2__.BookingUserType.AGENT)).subscribe(cart => {
      // Since this is the only place where this data is needed there is no need to save it in store
      // and we will use the response from the API directly. If there is a need to do anything
      // more complex we can always default back to using actions and persist in store
      this.agent$ = this.userService.getById(cart.createdById).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(item => new _models_user_model__WEBPACK_IMPORTED_MODULE_3__.UserAdapter().adapt(item)));
    }));
  }
}
CartPriceComponent.ɵfac = function CartPriceComponent_Factory(t) {
  return new (t || CartPriceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService));
};
CartPriceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: CartPriceComponent,
  selectors: [["app-cart-price"]],
  inputs: {
    cartId: "cartId"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], ["class", "mb-2 grid gap-3 bg-dib-gray-100 p-6", 4, "ngIf"], [1, "mb-2", "grid", "gap-3", "bg-dib-gray-100", "p-6"], [1, "flex", "flex-col", "flex-wrap"], ["class", "mb-2 flex flex-col border-b pb-2", 4, "ngIf"], [1, "flex", "items-baseline", "whitespace-nowrap", "text-gray-500"], [1, "mr-1", "text-3xl"], [1, "grid"], [1, "mb-2", "flex", "flex-col", "border-b", "pb-2"], [1, "whitespace-nowrap"], ["class", "text-xs text-gray-600", 4, "ngIf"], [1, "text-xs", "text-gray-600"], ["class", "mb-4", 4, "ngIf"], [1, "mb-4"], [1, "text-xs", "text-gray-500"]],
  template: function CartPriceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CartPriceComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx.cart$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DecimalPipe, _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_5__.DibDatePipe],
  encapsulation: 2
});

/***/ }),

/***/ 40950:
/*!*******************************************************************************!*\
  !*** ./src/app/bookings/details/company/booking-details-company.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingDetailsCompanyComponent": () => (/* binding */ BookingDetailsCompanyComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 62566);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base.component */ 83607);
/* harmony import */ var _reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../reducers/companies.reducer */ 47856);
/* harmony import */ var _actions_companies_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/companies.actions */ 29814);
/* harmony import */ var _reducers_bookings_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../reducers/bookings.reducer */ 6819);
/* harmony import */ var _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/bookings.actions */ 4797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../global/breadcrumbs/breadcrumbs.component */ 25758);
/* harmony import */ var _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/breadcrumbs/breadcrumb/breadcrumb.component */ 62718);
/* harmony import */ var _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../global/wrapper/main/wrapper-main.component */ 4122);
/* harmony import */ var _global_wrapper_details_wrapper_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../global/wrapper/details/wrapper-details.component */ 24019);
/* harmony import */ var _global_wrapper_details_tab_wrapper_details_tab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../global/wrapper/details/tab/wrapper-details-tab.component */ 36246);
/* harmony import */ var _companies_company_details_company_details_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../companies/company-details/company-details-form.component */ 61389);
/* harmony import */ var _companies_company_details_company_details_tabs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../companies/company-details/company-details-tabs.component */ 2691);


















function BookingDetailsCompanyComponent_ng_container_22_dib_wrapper_details_tab_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "dib-wrapper-details-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const traveler_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", traveler_r3.name)("route", "/companies/bookings/" + ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 3, ctx_r2.booking$)) == null ? null : tmp_1_0.cartId) + "/users/" + traveler_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", traveler_r3.name, " ");
  }
}
function BookingDetailsCompanyComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "dib-wrapper-details-tab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Traveler Profiles");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, BookingDetailsCompanyComponent_ng_container_22_dib_wrapper_details_tab_3_Template, 3, 5, "dib-wrapper-details-tab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 1, ctx_r0.booking$)) == null ? null : tmp_0_0.travelerProfiles());
  }
}
function BookingDetailsCompanyComponent_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-company-details-form", 14)(2, "app-company-details-tabs", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const company_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("company", company_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("company", company_r4);
  }
}
class BookingDetailsCompanyComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(route, store) {
    super();
    this.route = route;
    this.store = store;
    this.booking$ = this.store.select(_reducers_bookings_reducer__WEBPACK_IMPORTED_MODULE_3__.getSelectedBooking);
    // Show initial loader until both company and booking details are completely loaded
    this.firstTimeLoading$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.store.select(_reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_1__.companiesLoading), this.store.select(_reducers_bookings_reducer__WEBPACK_IMPORTED_MODULE_3__.selectedBookingLoading)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeWhile)(([companyLoading, bookingLoading]) => {
      return companyLoading || bookingLoading;
    }, true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([companyLoading, bookingLoading]) => companyLoading || bookingLoading));
  }
  ngOnInit() {
    // Load company data if not already in store
    this.subscriptions.add(this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.mergeMap)(params => (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.forkJoin)([(0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)(params), this.store.select((0,_reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_1__.selectCompanyById)(params.companyId)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1))]))).subscribe(([{
      companyId
    }, company]) => {
      if (!company?.id || company?.id !== companyId) {
        // Load company details if we don't have one in store already
        this.store.dispatch(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_2__.CompanyActions.loadCompany({
          id: companyId
        }));
      }
      this.company$ = this.store.select((0,_reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_1__.selectCompanyById)(companyId));
    }));
    // Load booking data if not already in store
    this.subscriptions.add(this.booking$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1)).subscribe(booking => {
      const id = this.route.snapshot.params['id'];
      if (!booking.cartId || booking.cartId !== id) {
        this.store.dispatch(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_4__.BookingActions.loadAndSelectBooking({
          id
        }));
      }
    }));
  }
}
BookingDetailsCompanyComponent.ɵfac = function BookingDetailsCompanyComponent_Factory(t) {
  return new (t || BookingDetailsCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_21__.Store));
};
BookingDetailsCompanyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: BookingDetailsCompanyComponent,
  selectors: [["app-booking-details-company"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
  decls: 33,
  vars: 42,
  consts: [["label", "Dashboard", "route", "/"], ["label", "Companies", "route", "/companies"], ["label", "Bookings", "route", "/companies/bookings"], [3, "label", "route", "loading"], [3, "label", "loading"], [3, "loading", "item"], ["slot", "tabs"], ["type", "header"], ["active", "true", 3, "title"], [4, "ngIf"], [3, "title", "route"], ["slot", "content", 4, "ngIf"], [3, "title", "route", 4, "ngFor", "ngForOf"], ["slot", "content"], [3, "company"]],
  template: function BookingDetailsCompanyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "dib-wrapper-main")(1, "dib-breadcrumbs");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "dib-breadcrumb", 0)(3, "dib-breadcrumb", 1)(4, "dib-breadcrumb", 2)(5, "dib-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "dib-breadcrumb", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "dib-wrapper-details", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](14, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](15, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "dib-wrapper-details-tab", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "dib-wrapper-details-tab", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](21, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, BookingDetailsCompanyComponent_ng_container_22_Template, 5, 3, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](23, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "dib-wrapper-details-tab", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "Booking");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "dib-wrapper-details-tab", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](27, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](28, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](30, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](31, BookingDetailsCompanyComponent_ng_container_31_Template, 3, 2, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](32, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      let tmp_3_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_10_0;
      let tmp_11_0;
      let tmp_12_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 14, ctx.booking$)) == null ? null : tmp_0_0.tripId)("route", "/companies/bookings/" + ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 16, ctx.booking$)) == null ? null : tmp_1_0.cartId))("loading", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 18, ctx.firstTimeLoading$));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](10, 20, ctx.company$)) == null ? null : tmp_3_0.corporationName)("loading", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](11, 22, ctx.firstTimeLoading$));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("loading", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](13, 24, ctx.firstTimeLoading$))("item", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](14, 26, ctx.company$));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](19, 28, ctx.company$)) == null ? null : tmp_7_0.corporationName);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]((tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](21, 30, ctx.company$)) == null ? null : tmp_8_0.corporationName);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](23, 32, ctx.booking$)) == null ? null : tmp_9_0.travelerProfiles().length);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", (tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](27, 34, ctx.booking$)) == null ? null : tmp_10_0.tripId)("route", "/companies/bookings/" + ((tmp_11_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](28, 36, ctx.booking$)) == null ? null : tmp_11_0.cartId));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", (tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](30, 38, ctx.booking$)) == null ? null : tmp_12_0.tripId, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](32, 40, ctx.company$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsComponent, _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbComponent, _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_7__.WrapperMainComponent, _global_wrapper_details_wrapper_details_component__WEBPACK_IMPORTED_MODULE_8__.WrapperDetailsComponent, _global_wrapper_details_tab_wrapper_details_tab_component__WEBPACK_IMPORTED_MODULE_9__.WrapperDetailsTabComponent, _companies_company_details_company_details_form_component__WEBPACK_IMPORTED_MODULE_10__.CompanyDetailsFormComponent, _companies_company_details_company_details_tabs_component__WEBPACK_IMPORTED_MODULE_11__.CompanyDetailsTabsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 39782:
/*!***************************************************!*\
  !*** ./src/app/bookings/details/company/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingDetailsCompanyComponent": () => (/* reexport safe */ _booking_details_company_component__WEBPACK_IMPORTED_MODULE_0__.BookingDetailsCompanyComponent)
/* harmony export */ });
/* harmony import */ var _booking_details_company_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-details-company.component */ 40950);



/***/ }),

/***/ 83181:
/*!*******************************************!*\
  !*** ./src/app/bookings/details/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingDetailsComponent": () => (/* reexport safe */ _booking_details_component__WEBPACK_IMPORTED_MODULE_0__.BookingDetailsComponent)
/* harmony export */ });
/* harmony import */ var _booking_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-details.component */ 80389);



/***/ }),

/***/ 84395:
/*!*********************************************************************************!*\
  !*** ./src/app/bookings/details/traveler/booking-details-traveler.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingDetailsTravelerComponent": () => (/* binding */ BookingDetailsTravelerComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 62566);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 10538);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base.component */ 83607);
/* harmony import */ var _reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../reducers/company-users.reducer */ 15569);
/* harmony import */ var _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/company-users.actions */ 30668);
/* harmony import */ var _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/bookings.actions */ 4797);
/* harmony import */ var _reducers_bookings_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../reducers/bookings.reducer */ 6819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../global/breadcrumbs/breadcrumbs.component */ 25758);
/* harmony import */ var _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/breadcrumbs/breadcrumb/breadcrumb.component */ 62718);
/* harmony import */ var _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../global/wrapper/main/wrapper-main.component */ 4122);
/* harmony import */ var _global_wrapper_details_wrapper_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../global/wrapper/details/wrapper-details.component */ 24019);
/* harmony import */ var _global_wrapper_details_tab_wrapper_details_tab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../global/wrapper/details/tab/wrapper-details-tab.component */ 36246);
/* harmony import */ var _companies_company_users_company_user_details_company_user_details_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../companies/company-users/company-user-details/company-user-details-form.component */ 54728);
/* harmony import */ var _companies_company_users_company_user_details_company_user_details_tabs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../companies/company-users/company-user-details/company-user-details-tabs.component */ 94309);


















function BookingDetailsTravelerComponent_ng_container_24_dib_wrapper_details_tab_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "dib-wrapper-details-tab", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const traveler_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", traveler_r3.name)("route", "/companies/bookings/" + ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 6, ctx_r2.booking$)) == null ? null : tmp_1_0.cartId) + "/users/" + traveler_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("active", traveler_r3.id === ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 4, ctx_r2.companyUser$)) == null ? null : tmp_2_0.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", traveler_r3.name, " ");
  }
}
function BookingDetailsTravelerComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "dib-wrapper-details-tab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Traveler Profiles");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, BookingDetailsTravelerComponent_ng_container_24_dib_wrapper_details_tab_3_Template, 4, 8, "dib-wrapper-details-tab", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 1, ctx_r0.booking$)) == null ? null : tmp_0_0.travelerProfiles());
  }
}
function BookingDetailsTravelerComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-company-user-details-form", 13)(2, "app-company-user-details-tabs", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const companyUser_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("companyUser", companyUser_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("companyUser", companyUser_r4);
  }
}
class BookingDetailsTravelerComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(route, store) {
    super();
    this.route = route;
    this.store = store;
    this.booking$ = this.store.select(_reducers_bookings_reducer__WEBPACK_IMPORTED_MODULE_4__.getSelectedBooking);
    this.companyUser$ = this.store.select(_reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_1__.getSelectedCompanyUser);
    // Show initial loader until both company and company user details are completely loaded
    this.firstTimeLoading$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.store.select(_reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_1__.companyUsersLoading), this.store.select(_reducers_bookings_reducer__WEBPACK_IMPORTED_MODULE_4__.selectedBookingLoading)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeWhile)(([companyUserLoading, bookingLoading]) => {
      return companyUserLoading || bookingLoading;
    }, true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([companyUserLoading, bookingLoading]) => companyUserLoading || bookingLoading));
    this.activeTab = 'active';
  }
  ngOnInit() {
    // Load company user data if not already in store
    this.subscriptions.add(this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.withLatestFrom)(this.store.select(_reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_1__.getSelectedCompanyUser))).subscribe(([{
      userId
    }, traveler]) => {
      if (!traveler.id || traveler.id !== userId) {
        this.store.dispatch(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__.CompanyUserActions.loadAndSelectCompanyUser({
          id: userId
        }));
      }
    }));
    // Load booking data if not already in store
    this.subscriptions.add(this.booking$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1)).subscribe(booking => {
      const id = this.route.snapshot.params['id'];
      if (!booking.cartId || booking.cartId !== id) {
        this.store.dispatch(_actions_bookings_actions__WEBPACK_IMPORTED_MODULE_3__.BookingActions.loadAndSelectBooking({
          id
        }));
      }
    }));
  }
}
BookingDetailsTravelerComponent.ɵfac = function BookingDetailsTravelerComponent_Factory(t) {
  return new (t || BookingDetailsTravelerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.Store));
};
BookingDetailsTravelerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: BookingDetailsTravelerComponent,
  selectors: [["app-booking-details-traveler"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
  decls: 35,
  vars: 47,
  consts: [["label", "Dashboard", "route", "/"], ["label", "Companies", "route", "/companies"], ["label", "Bookings", "route", "/companies/bookings"], [3, "label", "route", "loading"], [3, "label", "loading"], [3, "loading", "item"], ["slot", "tabs"], ["type", "header"], [3, "title", "route"], [4, "ngIf"], ["slot", "content", 4, "ngIf"], [3, "title", "route", 4, "ngFor", "ngForOf"], ["slot", "content"], [3, "companyUser"]],
  template: function BookingDetailsTravelerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "dib-wrapper-main")(1, "dib-breadcrumbs");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "dib-breadcrumb", 0)(3, "dib-breadcrumb", 1)(4, "dib-breadcrumb", 2)(5, "dib-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "dib-breadcrumb", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "dib-wrapper-details", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](14, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](15, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "dib-wrapper-details-tab", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "dib-wrapper-details-tab", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](20, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](21, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](23, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, BookingDetailsTravelerComponent_ng_container_24_Template, 5, 3, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](25, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "dib-wrapper-details-tab", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "Booking");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "dib-wrapper-details-tab", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](29, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](30, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](32, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](33, BookingDetailsTravelerComponent_ng_container_33_Template, 3, 2, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](34, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      let tmp_3_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_10_0;
      let tmp_11_0;
      let tmp_12_0;
      let tmp_13_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 15, ctx.booking$)) == null ? null : tmp_0_0.tripId)("route", "/companies/bookings/" + ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 17, ctx.booking$)) == null ? null : tmp_1_0.cartId))("loading", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 19, ctx.firstTimeLoading$));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](10, 21, ctx.companyUser$)) == null ? null : tmp_3_0.fullName)("loading", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](11, 23, ctx.firstTimeLoading$));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("loading", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](13, 25, ctx.firstTimeLoading$))("item", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](14, 27, ctx.companyUser$));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](19, 29, ctx.booking$)) == null ? null : tmp_7_0.company == null ? null : tmp_7_0.company.name)("route", "/companies/bookings/" + ((tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](20, 31, ctx.booking$)) == null ? null : tmp_8_0.cartId) + "/company/" + ((tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](21, 33, ctx.booking$)) == null ? null : tmp_8_0.company == null ? null : tmp_8_0.company.id));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", (tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](23, 35, ctx.booking$)) == null ? null : tmp_9_0.company == null ? null : tmp_9_0.company.name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](25, 37, ctx.booking$)) == null ? null : tmp_10_0.travelerProfiles().length);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", (tmp_11_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](29, 39, ctx.booking$)) == null ? null : tmp_11_0.tripId)("route", "/companies/bookings/" + ((tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](30, 41, ctx.booking$)) == null ? null : tmp_12_0.cartId));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", (tmp_13_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](32, 43, ctx.booking$)) == null ? null : tmp_13_0.tripId, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](34, 45, ctx.companyUser$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsComponent, _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbComponent, _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_7__.WrapperMainComponent, _global_wrapper_details_wrapper_details_component__WEBPACK_IMPORTED_MODULE_8__.WrapperDetailsComponent, _global_wrapper_details_tab_wrapper_details_tab_component__WEBPACK_IMPORTED_MODULE_9__.WrapperDetailsTabComponent, _companies_company_users_company_user_details_company_user_details_form_component__WEBPACK_IMPORTED_MODULE_10__.CompanyUserDetailsFormComponent, _companies_company_users_company_user_details_company_user_details_tabs_component__WEBPACK_IMPORTED_MODULE_11__.CompanyUserDetailsTabsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 9971:
/*!****************************************************!*\
  !*** ./src/app/bookings/details/traveler/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingDetailsTravelerComponent": () => (/* reexport safe */ _booking_details_traveler_component__WEBPACK_IMPORTED_MODULE_0__.BookingDetailsTravelerComponent)
/* harmony export */ });
/* harmony import */ var _booking_details_traveler_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-details-traveler.component */ 84395);



/***/ }),

/***/ 28129:
/*!*****************************************!*\
  !*** ./src/app/effects/cart.effects.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartEffects": () => (/* binding */ CartEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _actions_carts_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/carts.actions */ 39568);
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/global.actions */ 7058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ 90910);









class CartEffects {
    constructor(actions$, store, cartService) {
        this.actions$ = actions$;
        this.store = store;
        this.cartService = cartService;
        this.loadCart$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_carts_actions__WEBPACK_IMPORTED_MODULE_0__.CartActions.loadCartDetails), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_carts_actions__WEBPACK_IMPORTED_MODULE_0__.CartActions.loadCartDetailsStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((action) => this.cartService.getDetails(action.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            return _actions_carts_actions__WEBPACK_IMPORTED_MODULE_0__.CartActions.loadCartDetailsSuccess({ data: response });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_carts_actions__WEBPACK_IMPORTED_MODULE_0__.CartActions.loadCartDetailsError({ error: 'Cart details could not be loaded. Please try again.' }));
        })))));
        this.showToast$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_carts_actions__WEBPACK_IMPORTED_MODULE_0__.CartActions.loadCartDetailsError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((action) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_1__.GlobalActions.showErrorMessage({ message: action.error }));
        })), { dispatch: false });
    }
}
CartEffects.ɵfac = function CartEffects_Factory(t) { return new (t || CartEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService)); };
CartEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: CartEffects, factory: CartEffects.ɵfac });


/***/ }),

/***/ 90910:
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var _interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interceptors/cache.interceptor */ 41461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



const CacheGroups = {
    details: (id) => `cart.details.${id}`,
};
class CartService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/api/tmcc/carts';
    }
    getDetails(id) {
        return this.http.get(`${this.baseUrl}/${id}`, { context: (0,_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.cacheGroup)(CacheGroups.details(id)) });
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CartService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_bookings_bookings_module_ts.js.map