"use strict";
(self["webpackChunkadmin_tool"] = self["webpackChunkadmin_tool"] || []).push([["src_app_billing-requests_billing-requests_module_ts"],{

/***/ 88574:
/*!****************************************************************!*\
  !*** ./src/app/billing-requests/billing-requests.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingRequestsComponent": () => (/* binding */ BillingRequestsComponent)
/* harmony export */ });
/* harmony import */ var _actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/billing-requests.actions */ 64646);
/* harmony import */ var _models_billing_request_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/billing-request.model */ 83970);
/* harmony import */ var _reducers_billing_requests_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/billing-requests.reducer */ 17682);
/* harmony import */ var _actions_confirmation_dialog_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/confirmation-dialog.actions */ 65516);
/* harmony import */ var _base_listing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-listing.component */ 74760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/breadcrumbs/breadcrumbs.component */ 25758);
/* harmony import */ var _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global/breadcrumbs/breadcrumb/breadcrumb.component */ 62718);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _global_wrapper_listing_wrapper_listing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/wrapper/listing/wrapper-listing.component */ 40542);
/* harmony import */ var _global_wrapper_listing_total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global/wrapper/listing/total/wrapper-listing-total.component */ 57905);
/* harmony import */ var _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../global/wrapper/main/wrapper-main.component */ 4122);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 59121);






















function BillingRequestsComponent_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const status_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", status_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", status_r13, " ");
  }
}
function BillingRequestsComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Corporation Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function BillingRequestsComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](row_r14.corporationName);
  }
}
function BillingRequestsComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Billing Profile Request Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function BillingRequestsComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 27)(1, "span", 28)(2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("text-emerald-600", row_r15.isApproved)("text-red-600", row_r15.isDenied || row_r15.isBlocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 5, row_r15.billingProfileRequestStatus), " ");
  }
}
function BillingRequestsComponent_th_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-progress-bar", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function BillingRequestsComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, BillingRequestsComponent_th_30_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r5.billingRequests$).loading);
  }
}
function BillingRequestsComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "th", 33);
  }
}
function BillingRequestsComponent_td_33_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillingRequestsComponent_td_33_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);
      const row_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r21.approve(row_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "check_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function BillingRequestsComponent_td_33_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillingRequestsComponent_td_33_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);
      const row_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r24.deny(row_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "hide_source");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function BillingRequestsComponent_td_33_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillingRequestsComponent_td_33_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r29);
      const row_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r27.block(row_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "remove_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function BillingRequestsComponent_td_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, BillingRequestsComponent_td_33_button_1_Template, 3, 0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, BillingRequestsComponent_td_33_button_2_Template, 3, 0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, BillingRequestsComponent_td_33_button_3_Template, 3, 0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", row_r17.isPending || row_r17.isDenied || row_r17.isBlocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", row_r17.isPending);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", row_r17.isApproved);
  }
}
function BillingRequestsComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 42);
  }
}
function BillingRequestsComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 42);
  }
}
function BillingRequestsComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 43);
  }
}
function BillingRequestsComponent_tr_37_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Loading data. This can take a few seconds, please be patient. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
}
function BillingRequestsComponent_tr_37_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0, " No records found. Please refine your search and try again. ");
  }
}
function BillingRequestsComponent_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 44)(1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, BillingRequestsComponent_tr_37_ng_container_2_Template, 2, 0, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, BillingRequestsComponent_tr_37_ng_template_4_Template, 1, 0, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("colSpan", ctx_r11.columns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 3, ctx_r11.billingRequests$).loading)("ngIfElse", _r32);
  }
}
function BillingRequestsComponent_mat_paginator_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-paginator", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("page", function BillingRequestsComponent_mat_paginator_39_Template_mat_paginator_page_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r34.onPageChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("length", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 3, ctx_r12.billingRequests$).pagination.totalElements)("pageIndex", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 5, ctx_r12.billingRequests$).pagination.number)("pageSize", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 7, ctx_r12.billingRequests$).pagination.size);
  }
}
const _c0 = function () {
  return ["loader"];
};
class BillingRequestsComponent extends _base_listing_component__WEBPACK_IMPORTED_MODULE_4__.BaseListingComponent {
  constructor() {
    super(...arguments);
    this.statuses = [_models_billing_request_model__WEBPACK_IMPORTED_MODULE_1__.BillingRequestStatus.PENDING, _models_billing_request_model__WEBPACK_IMPORTED_MODULE_1__.BillingRequestStatus.ENABLED, _models_billing_request_model__WEBPACK_IMPORTED_MODULE_1__.BillingRequestStatus.DENIED, _models_billing_request_model__WEBPACK_IMPORTED_MODULE_1__.BillingRequestStatus.BLOCKED];
    this.billingRequests$ = this.store.select(_reducers_billing_requests_reducer__WEBPACK_IMPORTED_MODULE_2__.selectBillingRequests);
    this.tableDataSource$ = this.store.select(_reducers_billing_requests_reducer__WEBPACK_IMPORTED_MODULE_2__.selectBillingRequestsData);
  }
  ngOnInit() {
    this.sortActive = 'corporationName';
    this.sortDirection = 'asc';
    this.columns = ['corporationName', 'billingProfileRequestStatus', 'actions'];
    this.loadAction = _actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_0__.BillingRequestActions.loadRequests;
    this.reloadOnActions = [_actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_0__.BillingRequestActions.changeStatusSuccess];
    super.ngOnInit();
    // Display PENDING requests by default
    this.filter('billingProfileRequestStatus', _models_billing_request_model__WEBPACK_IMPORTED_MODULE_1__.BillingRequestStatus.PENDING);
  }
  approve(item) {
    this.changeStatus(item, _models_billing_request_model__WEBPACK_IMPORTED_MODULE_1__.BillingRequestStatus.ENABLED, 'approve', 'primary');
  }
  deny(item) {
    this.changeStatus(item, _models_billing_request_model__WEBPACK_IMPORTED_MODULE_1__.BillingRequestStatus.DENIED, 'deny', 'warn');
  }
  block(item) {
    this.changeStatus(item, _models_billing_request_model__WEBPACK_IMPORTED_MODULE_1__.BillingRequestStatus.BLOCKED, 'block', 'warn');
  }
  changeStatus(item, status, label, color) {
    this.store.dispatch(_actions_confirmation_dialog_actions__WEBPACK_IMPORTED_MODULE_3__.ConfirmationDialogActions.show({
      data: {
        template: `Are you sure you want to ${label} billing request for <strong>${item.corporationName}</strong>?`,
        confirm: {
          label,
          color
        }
      },
      ok: () => {
        // Clone the request and merge with new status
        this.store.dispatch(_actions_billing_requests_actions__WEBPACK_IMPORTED_MODULE_0__.BillingRequestActions.changeStatus({
          data: {
            ...item,
            billingProfileRequestStatus: status
          }
        }));
      }
    }));
  }
}
BillingRequestsComponent.ɵfac = /*@__PURE__*/function () {
  let ɵBillingRequestsComponent_BaseFactory;
  return function BillingRequestsComponent_Factory(t) {
    return (ɵBillingRequestsComponent_BaseFactory || (ɵBillingRequestsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetInheritedFactory"](BillingRequestsComponent)))(t || BillingRequestsComponent);
  };
}();
BillingRequestsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: BillingRequestsComponent,
  selectors: [["app-billing-requests"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
  decls: 41,
  vars: 16,
  consts: [["label", "Dashboard", "route", "/"], ["label", "Billing Requests", "route", "/billing-requests"], ["slot", "filters"], ["matInput", "", "autocomplete", "off", 3, "value", "keyup"], [3, "value", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["slot", "total"], [3, "total"], ["slot", "actions"], ["slot", "table"], ["mat-table", "", "matSort", "", "matSortDisableClear", "", 1, "whitespace-nowrap", 3, "matSortActive", "matSortDirection", "dataSource", "matSortChange"], ["matColumnDef", "corporationName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "billingProfileRequestStatus"], ["matColumnDef", "loader"], ["colspan", "3", "mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "whitespace-normal", 4, "matNoDataRow"], ["slot", "pagination"], [3, "length", "pageIndex", "pageSize", "page", 4, "ngIf"], [3, "value"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "flex", "items-center", "text-xs"], [1, "material-icons", "mr-1", "text-xs", "text-gray-200"], ["colspan", "3", "mat-header-cell", ""], [4, "ngIf"], ["mode", "indeterminate", 1, "absolute"], ["mat-header-cell", ""], ["mat-cell", "", 1, "text-right"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Approve billing request", "matTooltipPosition", "left", "class", "hover:text-dib-green-600", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Deny billing request", "matTooltipPosition", "left", "class", "hover:text-red-600", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Block billing request", "matTooltipPosition", "left", "class", "hover:text-red-600", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Approve billing request", "matTooltipPosition", "left", 1, "hover:text-dib-green-600", 3, "click"], [1, "material-icons"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Deny billing request", "matTooltipPosition", "left", 1, "hover:text-red-600", 3, "click"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Block billing request", "matTooltipPosition", "left", 1, "hover:text-red-600", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "whitespace-normal"], [1, "border-b", "p-6", "text-center", 3, "colSpan"], [4, "ngIf", "ngIfElse"], ["noData", ""], [3, "length", "pageIndex", "pageSize", "page"]],
  template: function BillingRequestsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "dib-wrapper-main")(1, "dib-breadcrumbs");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "dib-breadcrumb", 0)(3, "dib-breadcrumb", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "dib-wrapper-listing");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](5, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "mat-form-field")(7, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Corporation Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup", function BillingRequestsComponent_Template_input_keyup_9_listener($event) {
        return ctx.debouncedFilter("corporationName", $event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "mat-form-field")(11, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "mat-select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectionChange", function BillingRequestsComponent_Template_mat_select_selectionChange_13_listener($event) {
        return ctx.debouncedFilter("billingProfileRequestStatus", $event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Show All");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, BillingRequestsComponent_mat_option_16_Template, 2, 2, "mat-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](17, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "dib-wrapper-listing-total", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](20, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](21, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "table", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("matSortChange", function BillingRequestsComponent_Template_table_matSortChange_22_listener($event) {
        return ctx.onSortChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](23, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, BillingRequestsComponent_th_24_Template, 2, 0, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, BillingRequestsComponent_td_25_Template, 2, 1, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](26, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, BillingRequestsComponent_th_27_Template, 2, 0, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, BillingRequestsComponent_td_28_Template, 6, 7, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](29, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, BillingRequestsComponent_th_30_Template, 3, 3, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](31, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, BillingRequestsComponent_th_32_Template, 1, 0, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, BillingRequestsComponent_td_33_Template, 4, 3, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, BillingRequestsComponent_tr_34_Template, 1, 0, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, BillingRequestsComponent_tr_35_Template, 1, 0, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, BillingRequestsComponent_tr_36_Template, 1, 0, "tr", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](37, BillingRequestsComponent_tr_37_Template, 6, 5, "tr", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](38, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](39, BillingRequestsComponent_mat_paginator_39_Template, 4, 9, "mat-paginator", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](40, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.filters.corporationName || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.filters.billingProfileRequestStatus || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.statuses);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("total", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](19, 11, ctx.billingRequests$).pagination == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](19, 11, ctx.billingRequests$).pagination.totalElements);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matSortActive", ctx.sortActive)("matSortDirection", ctx.sortDirection)("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](15, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](40, 13, ctx.billingRequests$).pagination);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatNoDataRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortHeader, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBar, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsComponent, _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _global_wrapper_listing_wrapper_listing_component__WEBPACK_IMPORTED_MODULE_7__.WrapperListingComponent, _global_wrapper_listing_total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_8__.WrapperListingTotalComponent, _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_9__.WrapperMainComponent, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.TitleCasePipe],
  encapsulation: 2
});

/***/ }),

/***/ 96605:
/*!*************************************************************!*\
  !*** ./src/app/billing-requests/billing-requests.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingRequestsModule": () => (/* binding */ BillingRequestsModule)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _billing_requests_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./billing-requests.component */ 88574);
/* harmony import */ var _billing_requests_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./billing-requests.routing */ 41413);
/* harmony import */ var _effects_billing_request_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../effects/billing-request.effects */ 16215);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global/breadcrumbs/breadcrumbs.module */ 2367);
/* harmony import */ var _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/wrapper/listing/wrapper-listing.module */ 23745);
/* harmony import */ var _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/wrapper/main/wrapper-main.module */ 49722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 60124);






















class BillingRequestsModule {
}
BillingRequestsModule.ɵfac = function BillingRequestsModule_Factory(t) { return new (t || BillingRequestsModule)(); };
BillingRequestsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: BillingRequestsModule });
BillingRequestsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _billing_requests_routing__WEBPACK_IMPORTED_MODULE_1__.routing,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatProgressBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule,
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__.EffectsModule.forFeature([_effects_billing_request_effects__WEBPACK_IMPORTED_MODULE_2__.BillingRequestEffects]),
        _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule,
        _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_4__.WrapperListingModule,
        _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_5__.WrapperMainModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](BillingRequestsModule, { declarations: [_billing_requests_component__WEBPACK_IMPORTED_MODULE_0__.BillingRequestsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatProgressBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__.EffectsFeatureModule, _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule,
        _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_4__.WrapperListingModule,
        _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_5__.WrapperMainModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule] }); })();


/***/ }),

/***/ 41413:
/*!**************************************************************!*\
  !*** ./src/app/billing-requests/billing-requests.routing.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routing": () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _billing_requests_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./billing-requests.component */ 88574);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.guard */ 3870);



const routes = [
    {
        path: '',
        component: _billing_requests_component__WEBPACK_IMPORTED_MODULE_0__.BillingRequestsComponent,
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        data: { title: 'Billing requests' },
    },
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes);


/***/ })

}]);
//# sourceMappingURL=src_app_billing-requests_billing-requests_module_ts.js.map