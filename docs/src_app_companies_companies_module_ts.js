"use strict";
(self["webpackChunkadmin_tool"] = self["webpackChunkadmin_tool"] || []).push([["src_app_companies_companies_module_ts"],{

/***/ 78891:
/*!**************************************************!*\
  !*** ./src/app/companies/companies.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompaniesComponent": () => (/* binding */ CompaniesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 99635);
/* harmony import */ var _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/companies.actions */ 29814);
/* harmony import */ var _reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/companies.reducer */ 47856);
/* harmony import */ var _actions_confirmation_dialog_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/confirmation-dialog.actions */ 65516);
/* harmony import */ var _base_listing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-listing.component */ 74760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/wrapper/main/wrapper-main.component */ 4122);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/breadcrumbs/breadcrumbs.component */ 25758);
/* harmony import */ var _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global/breadcrumbs/breadcrumb/breadcrumb.component */ 62718);
/* harmony import */ var _global_wrapper_search_green_search_wrapper_green_search_wrapper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/wrapper/search/green-search-wrapper/green-search-wrapper.component */ 86957);
/* harmony import */ var _global_wrapper_listing_wrapper_listing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global/wrapper/listing/wrapper-listing.component */ 40542);
/* harmony import */ var _global_wrapper_listing_total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../global/wrapper/listing/total/wrapper-listing-total.component */ 57905);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/pipes/date.pipe */ 23341);
/* harmony import */ var _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/pipes/dashes-to-spaces.pipe */ 61467);























function CompaniesComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 31)(1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Corporation name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function CompaniesComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](row_r18.corporationName);
  }
}
function CompaniesComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Registration Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function CompaniesComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](row_r19.registrationNumber);
  }
}
function CompaniesComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function CompaniesComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "dibDashesToSpaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, row_r20.status));
  }
}
function CompaniesComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Starting Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function CompaniesComponent_td_27_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, row_r21.activatedAt, "distanceToNow"), ")");
  }
}
function CompaniesComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, CompaniesComponent_td_27_span_3_Template, 3, 4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 2, row_r21.activatedAt, "ui"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r21.activatedAt);
  }
}
function CompaniesComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 31)(1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Subscription Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Subscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function CompaniesComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 33)(1, "span", 40)(2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "dibDashesToSpaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("text-red-600", row_r24.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 3, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 5, row_r24.subscriptionStatus)), " ");
  }
}
function CompaniesComponent_th_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "mat-progress-bar", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function CompaniesComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CompaniesComponent_th_32_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("colSpan", ctx_r10.columns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, ctx_r10.companies$).loading);
  }
}
function CompaniesComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "th", 45);
  }
}
const _c0 = function (a1) {
  return ["/companies", a1];
};
function CompaniesComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 46)(1, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CompaniesComponent_td_35_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r28);
      const row_r26 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r27.toggleSubscriptionStatus(row_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "a", 49)(5, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CompaniesComponent_td_35_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r28);
      const row_r26 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r29.delete(row_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("hover:text-dib-green-600", row_r26.isDisabled)("hover:text-red-600", !row_r26.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matTooltip", row_r26.isDisabled ? "Enable company" : "Disable company");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r26.isDisabled ? "check_circle_outline" : "hide_source", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](7, _c0, row_r26.id));
  }
}
function CompaniesComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 51);
  }
}
function CompaniesComponent_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 51);
  }
}
function CompaniesComponent_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 52);
  }
}
function CompaniesComponent_tr_39_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Loading data. This can take a few seconds, please be patient. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
}
function CompaniesComponent_tr_39_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0, " No records found. Please refine your search and try again. ");
  }
}
function CompaniesComponent_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 53)(1, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, CompaniesComponent_tr_39_ng_container_2_Template, 2, 0, "ng-container", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, CompaniesComponent_tr_39_ng_template_4_Template, 1, 0, "ng-template", null, 56, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](5);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("colSpan", ctx_r16.columns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 3, ctx_r16.companies$).loading)("ngIfElse", _r32);
  }
}
function CompaniesComponent_mat_paginator_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-paginator", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("page", function CompaniesComponent_mat_paginator_41_Template_mat_paginator_page_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r34.onPageChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("length", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 3, ctx_r17.companies$).pagination.totalElements)("pageIndex", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 5, ctx_r17.companies$).pagination.number)("pageSize", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 7, ctx_r17.companies$).pagination.size);
  }
}
const _c1 = function () {
  return ["loader"];
};
class CompaniesComponent extends _base_listing_component__WEBPACK_IMPORTED_MODULE_3__.BaseListingComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.companies$ = this.store.select(_reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_1__.selectCompanies);
    this.tableDataSource$ = this.store.select(_reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_1__.selectCompaniesData);
  }
  ngOnInit() {
    this.sortActive = 'id';
    this.sortDirection = 'asc';
    this.columns = ['corporationName', 'registrationNumber', 'status', 'activatedAt', 'subscriptionStatus', 'actions'];
    this.loadAction = _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.loadCompanies;
    this.reloadOnActions = [_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.saveCompanyDetailsSuccess, _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.toggleCompanySubscriptionStatusSuccess, _actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.deleteCompanySuccess];
    super.syncFiltersWithRouteParams({
      params: ['corporationName', 'registrationNumber', 'status', 'subscriptionStatus'],
      afterHook: () => {
        // This will be triggered on the initial page load and whenever one of the params we are watching is changed
        super.ngOnInit();
        this.loadData({
          page: 1
        });
      }
    });
  }
  toggleSubscriptionStatus(company) {
    this.store.dispatch(_actions_confirmation_dialog_actions__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogActions.show({
      data: {
        template: `
            Are you sure you want to ${company.isDisabled ? 'enable' : 'disable'}
            <strong>${company.corporationName}</strong>?
          `,
        confirm: {
          label: company.isDisabled ? 'Enable' : 'Disable',
          color: company.isDisabled ? 'primary' : 'warn'
        }
      },
      ok: () => {
        this.store.dispatch(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.toggleCompanySubscriptionStatus({
          data: company
        }));
      }
    }));
  }
  delete(item) {
    this.store.dispatch(_actions_confirmation_dialog_actions__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogActions.show({
      data: {
        template: `
            Are you sure you want to delete <strong>${item.corporationName}</strong> company?
            <br>
            This action can not be undone.
          `,
        confirm: {
          label: 'Delete',
          color: 'warn'
        }
      },
      ok: () => {
        this.store.dispatch(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_0__.CompanyActions.deleteCompany({
          data: item
        }));
      }
    }));
  }
  onSearchUsers(params) {
    this.router.navigate(['/companies/users'], {
      queryParams: params
    }).then(rxjs__WEBPACK_IMPORTED_MODULE_13__.noop);
  }
  onSearchBookings(params) {
    this.router.navigate(['/companies/bookings'], {
      queryParams: this.validateReferenceType(params)
    }).then(rxjs__WEBPACK_IMPORTED_MODULE_13__.noop);
  }
}
CompaniesComponent.ɵfac = function CompaniesComponent_Factory(t) {
  return new (t || CompaniesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injector));
};
CompaniesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: CompaniesComponent,
  selectors: [["app-companies"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
  decls: 43,
  vars: 14,
  consts: [["label", "Dashboard", "route", "/"], ["label", "Companies", "route", "/companies"], ["activeTab", "companies", 3, "filters", "searchCompanies", "searchUsers", "searchBookings"], ["slot", "title"], ["slot", "hidden-columns-message"], [1, "hidden", "sm:block"], ["slot", "total"], [3, "total"], ["slot", "table"], ["mat-table", "", "matSort", "", "matSortDisableClear", "", 1, "whitespace-nowrap", 3, "matSortActive", "matSortDirection", "dataSource", "matSortChange"], ["matColumnDef", "corporationName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "registrationNumber"], ["class", "sm:hidden", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "sm:hidden", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "status"], ["class", "xs:hidden", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "xs:hidden", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "activatedAt"], ["matColumnDef", "subscriptionStatus"], ["matColumnDef", "loader"], ["mat-header-cell", "", 3, "colSpan", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "whitespace-normal", 4, "matNoDataRow"], ["slot", "pagination"], [3, "length", "pageIndex", "pageSize", "page", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], [1, "sm:hidden"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "sm:hidden"], ["mat-cell", "", 1, "sm:hidden"], ["mat-header-cell", "", "mat-sort-header", "", 1, "xs:hidden"], ["mat-cell", "", 1, "xs:hidden"], ["class", "text-xs text-gray-500 sm:hidden", 4, "ngIf"], [1, "text-xs", "text-gray-500", "sm:hidden"], [1, "flex", "items-center", "text-xs"], [1, "material-icons", "mr-1", "text-xs", "text-gray-200"], ["mat-header-cell", "", 3, "colSpan"], [4, "ngIf"], ["mode", "indeterminate", 1, "absolute"], ["mat-header-cell", ""], ["mat-cell", "", 1, "text-right"], ["mat-icon-button", "", "color", "accent", "matTooltipPosition", "left", 1, "hidden", 3, "matTooltip", "click"], [1, "material-icons"], ["mat-icon-button", "", "color", "accent", "matTooltip", "View company details", "matTooltipPosition", "left", 1, "hover:text-dib-green-600", 3, "routerLink"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Delete company", "matTooltipPosition", "left", 1, "hidden", "hover:text-red-600", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "whitespace-normal"], [1, "border-b", "p-6", "text-center", 3, "colSpan"], [4, "ngIf", "ngIfElse"], ["noData", ""], [3, "length", "pageIndex", "pageSize", "page"]],
  template: function CompaniesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "dib-wrapper-main")(1, "dib-breadcrumbs");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "dib-breadcrumb", 0)(3, "dib-breadcrumb", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "dib-green-search-wrapper", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("searchCompanies", function CompaniesComponent_Template_dib_green_search_wrapper_searchCompanies_4_listener($event) {
        return ctx.filterMultiple($event, true);
      })("searchUsers", function CompaniesComponent_Template_dib_green_search_wrapper_searchUsers_4_listener($event) {
        return ctx.onSearchUsers($event);
      })("searchBookings", function CompaniesComponent_Template_dib_green_search_wrapper_searchBookings_4_listener($event) {
        return ctx.onSearchBookings($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "dib-wrapper-listing");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](6, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "Companies");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](8, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "* Some columns are hidden due to small screen size");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](11, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "dib-wrapper-listing-total", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](14, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "table", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("matSortChange", function CompaniesComponent_Template_table_matSortChange_15_listener($event) {
        return ctx.onSortChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](16, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, CompaniesComponent_th_17_Template, 5, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, CompaniesComponent_td_18_Template, 2, 1, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](19, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](20, CompaniesComponent_th_20_Template, 2, 0, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, CompaniesComponent_td_21_Template, 2, 1, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](22, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, CompaniesComponent_th_23_Template, 2, 0, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, CompaniesComponent_td_24_Template, 3, 3, "td", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](25, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, CompaniesComponent_th_26_Template, 2, 0, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](27, CompaniesComponent_td_27_Template, 4, 5, "td", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](28, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](29, CompaniesComponent_th_29_Template, 5, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](30, CompaniesComponent_td_30_Template, 7, 7, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](31, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](32, CompaniesComponent_th_32_Template, 3, 4, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](33, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](34, CompaniesComponent_th_34_Template, 1, 0, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](35, CompaniesComponent_td_35_Template, 10, 9, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](36, CompaniesComponent_tr_36_Template, 1, 0, "tr", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, CompaniesComponent_tr_37_Template, 1, 0, "tr", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](38, CompaniesComponent_tr_38_Template, 1, 0, "tr", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](39, CompaniesComponent_tr_39_Template, 6, 5, "tr", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](40, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](41, CompaniesComponent_mat_paginator_41_Template, 4, 9, "mat-paginator", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](42, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("filters", ctx.filters);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("total", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](13, 9, ctx.companies$).pagination == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](13, 9, ctx.companies$).pagination.totalElements);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matSortActive", ctx.sortActive)("matSortDirection", ctx.sortDirection)("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](13, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](42, 11, ctx.companies$).pagination);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLinkWithHref, _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_4__.WrapperMainComponent, _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsComponent, _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbComponent, _global_wrapper_search_green_search_wrapper_green_search_wrapper_component__WEBPACK_IMPORTED_MODULE_7__.GreenSearchWrapperComponent, _global_wrapper_listing_wrapper_listing_component__WEBPACK_IMPORTED_MODULE_8__.WrapperListingComponent, _global_wrapper_listing_total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_9__.WrapperListingTotalComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatNoDataRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortHeader, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__.MatProgressBar, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatAnchor, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginator, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.TitleCasePipe, _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_10__.DibDatePipe, _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_11__.DibDashesToSpacesPipe],
  encapsulation: 2
});

/***/ }),

/***/ 92138:
/*!***********************************************!*\
  !*** ./src/app/companies/companies.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompaniesModule": () => (/* binding */ CompaniesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _companies_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./companies.routing */ 47099);
/* harmony import */ var _effects_company_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../effects/company.effects */ 56703);
/* harmony import */ var _companies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./companies.component */ 78891);
/* harmony import */ var _effects_company_user_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../effects/company-user.effects */ 68974);
/* harmony import */ var _effects_booking_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../effects/booking.effects */ 40735);
/* harmony import */ var _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/wrapper/main/wrapper-main.module */ 49722);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global/breadcrumbs/breadcrumbs.module */ 2367);
/* harmony import */ var _global_wrapper_search_wrapper_search_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/wrapper/search/wrapper-search.module */ 38765);
/* harmony import */ var _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global/wrapper/listing/wrapper-listing.module */ 23745);
/* harmony import */ var _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/pipes/pipes.module */ 59916);
/* harmony import */ var _company_details__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./company-details */ 63844);
/* harmony import */ var _company_users__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./company-users */ 1979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 60124);























class CompaniesModule {
}
CompaniesModule.ɵfac = function CompaniesModule_Factory(t) { return new (t || CompaniesModule)(); };
CompaniesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: CompaniesModule });
CompaniesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _companies_routing__WEBPACK_IMPORTED_MODULE_0__.routing,
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.EffectsModule.forFeature([_effects_company_effects__WEBPACK_IMPORTED_MODULE_1__.CompanyEffects, _effects_company_user_effects__WEBPACK_IMPORTED_MODULE_3__.CompanyUserEffects, _effects_booking_effects__WEBPACK_IMPORTED_MODULE_4__.BookingEffects]),
        _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_5__.WrapperMainModule,
        _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbsModule,
        _global_wrapper_search_wrapper_search_module__WEBPACK_IMPORTED_MODULE_7__.WrapperSearchModule,
        _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_8__.WrapperListingModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortModule,
        _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__.DibPipesModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__.MatProgressBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginatorModule,
        _company_details__WEBPACK_IMPORTED_MODULE_10__.CompanyDetailsModule,
        _company_users__WEBPACK_IMPORTED_MODULE_11__.CompanyUsersModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](CompaniesModule, { declarations: [_companies_component__WEBPACK_IMPORTED_MODULE_2__.CompaniesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.EffectsFeatureModule, _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_5__.WrapperMainModule,
        _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbsModule,
        _global_wrapper_search_wrapper_search_module__WEBPACK_IMPORTED_MODULE_7__.WrapperSearchModule,
        _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_8__.WrapperListingModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortModule,
        _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__.DibPipesModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__.MatProgressBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginatorModule,
        _company_details__WEBPACK_IMPORTED_MODULE_10__.CompanyDetailsModule,
        _company_users__WEBPACK_IMPORTED_MODULE_11__.CompanyUsersModule] }); })();


/***/ }),

/***/ 47099:
/*!************************************************!*\
  !*** ./src/app/companies/companies.routing.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routing": () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.guard */ 3870);
/* harmony import */ var _companies_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./companies.component */ 78891);
/* harmony import */ var _company_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-details */ 63844);
/* harmony import */ var _company_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-users */ 1979);





const routes = [
    // Company Listing
    { path: '', component: _companies_component__WEBPACK_IMPORTED_MODULE_1__.CompaniesComponent, canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard], data: { title: 'Companies' } },
    // Company Users
    {
        path: 'users',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        children: [
            // Company User Details
            { path: '', component: _company_users__WEBPACK_IMPORTED_MODULE_3__.CompanyUsersListComponent, data: { title: 'Company Users' } },
            { path: ':id', component: _company_users__WEBPACK_IMPORTED_MODULE_3__.CompanyUserDetailsComponent, data: { title: 'Company user details' } },
            {
                path: ':id/company/:companyId',
                component: _company_users__WEBPACK_IMPORTED_MODULE_3__.CompanyUserCompanyDetailsComponent,
                data: { title: 'Company details' },
            },
            {
                path: ':id/assisted-booking',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_bookings_details_cart_cart-tabs_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_assisted-booking_assisted-booking_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../assisted-booking/assisted-booking.module */ 57354)).then((m) => m.AssistedBookingModule),
            },
        ],
    },
    // Bookings
    {
        path: 'bookings',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_bookings_details_cart_cart-tabs_module_ts"), __webpack_require__.e("src_app_bookings_bookings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../bookings/bookings.module */ 7938)).then((m) => m.BookingsModule),
    },
    // Company Details
    { path: ':id', component: _company_details__WEBPACK_IMPORTED_MODULE_2__.CompanyDetailsComponent, canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard], data: { title: 'Company details' } },
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes);


/***/ }),

/***/ 87357:
/*!******************************************************************************************!*\
  !*** ./src/app/companies/company-details/bookings/company-details-bookings.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyDetailsBookingsComponent": () => (/* binding */ CompanyDetailsBookingsComponent)
/* harmony export */ });
/* harmony import */ var _base_listing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base-listing.component */ 74760);
/* harmony import */ var _utils_animations_element_cross_fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/animations/element-cross-fade */ 72679);
/* harmony import */ var _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/bookings.actions */ 4797);
/* harmony import */ var _reducers_bookings_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../reducers/bookings.reducer */ 6819);
/* harmony import */ var _models_booking_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/booking.model */ 31282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _global_wrapper_listing_wrapper_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../global/wrapper/listing/wrapper-listing.component */ 40542);
/* harmony import */ var _global_wrapper_listing_total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/wrapper/listing/total/wrapper-listing-total.component */ 57905);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/pipes/date.pipe */ 23341);
/* harmony import */ var _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/pipes/dashes-to-spaces.pipe */ 61467);






















function CompanyDetailsBookingsComponent_mat_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "dibDashesToSpaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const status_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", status_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, status_r21));
  }
}
function CompanyDetailsBookingsComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Trip ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CompanyDetailsBookingsComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](row_r22.tripId);
  }
}
function CompanyDetailsBookingsComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Cart Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CompanyDetailsBookingsComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "dibDashesToSpaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 3, row_r23.status)));
  }
}
function CompanyDetailsBookingsComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Travelers");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CompanyDetailsBookingsComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 30)(1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " info_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matTooltip", row_r24.travelers.join(", "));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r24.travelers.length, " ");
  }
}
function CompanyDetailsBookingsComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Booker Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CompanyDetailsBookingsComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](row_r25.bookerName);
  }
}
function CompanyDetailsBookingsComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CompanyDetailsBookingsComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 30)(1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 2, row_r26.startDate, "distanceToNow"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 5, row_r26.startDate), " ");
  }
}
function CompanyDetailsBookingsComponent_th_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CompanyDetailsBookingsComponent_td_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 30)(1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 2, row_r27.endDate, "distanceToNow"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 5, row_r27.endDate), " ");
  }
}
function CompanyDetailsBookingsComponent_th_42_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-progress-bar", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CompanyDetailsBookingsComponent_th_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CompanyDetailsBookingsComponent_th_42_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("colSpan", ctx_r13.columns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, ctx_r13.bookings$).loading);
  }
}
function CompanyDetailsBookingsComponent_th_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "th", 31);
  }
}
const _c0 = function (a1) {
  return ["/companies/bookings", a1];
};
function CompanyDetailsBookingsComponent_td_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 38)(1, "a", 39)(2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](1, _c0, row_r29.cartId));
  }
}
function CompanyDetailsBookingsComponent_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 41);
  }
}
function CompanyDetailsBookingsComponent_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 41);
  }
}
function CompanyDetailsBookingsComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 42);
  }
}
function CompanyDetailsBookingsComponent_tr_49_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Loading data. This can take a few seconds, please be patient. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
}
function CompanyDetailsBookingsComponent_tr_49_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, " No records found. Please refine your search and try again. ");
  }
}
function CompanyDetailsBookingsComponent_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 43)(1, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CompanyDetailsBookingsComponent_tr_49_ng_container_2_Template, 2, 0, "ng-container", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, CompanyDetailsBookingsComponent_tr_49_ng_template_4_Template, 1, 0, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](5);
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("colSpan", ctx_r19.columns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 3, ctx_r19.bookings$).loading)("ngIfElse", _r32);
  }
}
function CompanyDetailsBookingsComponent_mat_paginator_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-paginator", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("page", function CompanyDetailsBookingsComponent_mat_paginator_51_Template_mat_paginator_page_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r34.onPageChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("length", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 3, ctx_r20.bookings$).pagination.totalElements)("pageIndex", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 5, ctx_r20.bookings$).pagination.number)("pageSize", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 7, ctx_r20.bookings$).pagination.size);
  }
}
const _c1 = function () {
  return ["loader"];
};
class CompanyDetailsBookingsComponent extends _base_listing_component__WEBPACK_IMPORTED_MODULE_0__.BaseListingComponent {
  constructor() {
    super(...arguments);
    this.bookings$ = this.store.select(_reducers_bookings_reducer__WEBPACK_IMPORTED_MODULE_3__.selectBookings);
    this.tableDataSource$ = this.store.select(_reducers_bookings_reducer__WEBPACK_IMPORTED_MODULE_3__.selectBookingsData);
    this.statuses = Object.keys(_models_booking_model__WEBPACK_IMPORTED_MODULE_4__.bookingStatusMap);
  }
  ngOnInit() {
    super.ngOnInit();
    this.sortActive = 'tripId';
    this.sortDirection = 'asc';
    this.columns = ['tripId', 'status', 'travelers', 'bookerName', 'startDate', 'endDate', 'actions'];
    this.loadAction = _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_2__.BookingActions.loadBookings;
    // Display only company users
    this.filter('companyId', this.companyId);
  }
}
CompanyDetailsBookingsComponent.ɵfac = /*@__PURE__*/function () {
  let ɵCompanyDetailsBookingsComponent_BaseFactory;
  return function CompanyDetailsBookingsComponent_Factory(t) {
    return (ɵCompanyDetailsBookingsComponent_BaseFactory || (ɵCompanyDetailsBookingsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](CompanyDetailsBookingsComponent)))(t || CompanyDetailsBookingsComponent);
  };
}();
CompanyDetailsBookingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: CompanyDetailsBookingsComponent,
  selectors: [["app-company-details-bookings"]],
  inputs: {
    companyId: "companyId"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
  decls: 53,
  vars: 18,
  consts: [[1, "-mx-4"], [3, "padded"], ["slot", "filters"], ["matInput", "", "autocomplete", "off", 3, "value", "keyup"], [3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["slot", "total"], [3, "total"], ["slot", "table"], ["mat-table", "", "matSort", "", "matSortDisableClear", "", 1, "whitespace-nowrap", 3, "matSortActive", "matSortDirection", "dataSource", "matSortChange"], ["matColumnDef", "tripId"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "travelers"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "bookerName"], ["matColumnDef", "startDate"], ["matColumnDef", "endDate"], ["matColumnDef", "loader"], ["mat-header-cell", "", 3, "colSpan", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-cell", "", "class", "text-right", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "whitespace-normal", 4, "matNoDataRow"], ["slot", "pagination"], [3, "length", "pageIndex", "pageSize", "page", 4, "ngIf"], [3, "value"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["matTooltipPosition", "above", 1, "flex", "items-center", 3, "matTooltip"], [1, "material-icons", "ml-1", "text-lg"], [3, "matTooltip"], ["mat-header-cell", "", 3, "colSpan"], [4, "ngIf"], ["mode", "indeterminate", 1, "absolute"], ["mat-cell", "", 1, "text-right"], ["mat-icon-button", "", "color", "accent", "matTooltip", "View booking details", "matTooltipPosition", "left", 1, "hover:text-dib-green-600", 3, "routerLink"], [1, "material-icons"], ["mat-header-row", ""], ["mat-row", ""], [1, "whitespace-normal"], [1, "border-b", "p-6", "text-center", 3, "colSpan"], [4, "ngIf", "ngIfElse"], ["noData", ""], [3, "length", "pageIndex", "pageSize", "page"]],
  template: function CompanyDetailsBookingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "dib-wrapper-listing", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](2, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-form-field")(4, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Trip ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup", function CompanyDetailsBookingsComponent_Template_input_keyup_6_listener($event) {
        return ctx.debouncedFilter("tripId", $event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "mat-form-field")(8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Traveler Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup", function CompanyDetailsBookingsComponent_Template_input_keyup_10_listener($event) {
        return ctx.debouncedFilter("traveler", $event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "mat-form-field")(12, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Cart Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "mat-select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectionChange", function CompanyDetailsBookingsComponent_Template_mat_select_selectionChange_14_listener($event) {
        return ctx.debouncedFilter("status", $event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Show All");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, CompanyDetailsBookingsComponent_mat_option_17_Template, 3, 4, "mat-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](18, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "dib-wrapper-listing-total", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](20, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](21, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "table", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("matSortChange", function CompanyDetailsBookingsComponent_Template_table_matSortChange_22_listener($event) {
        return ctx.onSortChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](23, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, CompanyDetailsBookingsComponent_th_24_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, CompanyDetailsBookingsComponent_td_25_Template, 2, 1, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](26, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, CompanyDetailsBookingsComponent_th_27_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, CompanyDetailsBookingsComponent_td_28_Template, 4, 5, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](29, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, CompanyDetailsBookingsComponent_th_30_Template, 2, 0, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, CompanyDetailsBookingsComponent_td_31_Template, 5, 2, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](32, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, CompanyDetailsBookingsComponent_th_33_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, CompanyDetailsBookingsComponent_td_34_Template, 2, 1, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](35, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](36, CompanyDetailsBookingsComponent_th_36_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, CompanyDetailsBookingsComponent_td_37_Template, 5, 7, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](38, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, CompanyDetailsBookingsComponent_th_39_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](40, CompanyDetailsBookingsComponent_td_40_Template, 5, 7, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](41, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](42, CompanyDetailsBookingsComponent_th_42_Template, 3, 4, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](43, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, CompanyDetailsBookingsComponent_th_44_Template, 1, 0, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](45, CompanyDetailsBookingsComponent_td_45_Template, 4, 3, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](46, CompanyDetailsBookingsComponent_tr_46_Template, 1, 0, "tr", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](47, CompanyDetailsBookingsComponent_tr_47_Template, 1, 0, "tr", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, CompanyDetailsBookingsComponent_tr_48_Template, 1, 0, "tr", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](49, CompanyDetailsBookingsComponent_tr_49_Template, 6, 5, "tr", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](50, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](51, CompanyDetailsBookingsComponent_mat_paginator_51_Template, 4, 9, "mat-paginator", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](52, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@elementCrossFade", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("padded", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.filters.tripId || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.filters.traveler || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.statuses);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("total", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](20, 13, ctx.bookings$).pagination == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](20, 13, ctx.bookings$).pagination.totalElements);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matSortActive", ctx.sortActive)("matSortDirection", ctx.sortDirection)("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](17, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](52, 15, ctx.bookings$).pagination);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _global_wrapper_listing_wrapper_listing_component__WEBPACK_IMPORTED_MODULE_5__.WrapperListingComponent, _global_wrapper_listing_total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_6__.WrapperListingTotalComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatNoDataRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortHeader, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBar, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterLinkWithHref, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginator, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.TitleCasePipe, _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_7__.DibDatePipe, _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_8__.DibDashesToSpacesPipe],
  encapsulation: 2,
  data: {
    animation: [_utils_animations_element_cross_fade__WEBPACK_IMPORTED_MODULE_1__.elementCrossFade]
  }
});

/***/ }),

/***/ 61389:
/*!*****************************************************************************!*\
  !*** ./src/app/companies/company-details/company-details-form.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyDetailsFormComponent": () => (/* binding */ CompanyDetailsFormComponent)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base.component */ 83607);
/* harmony import */ var _reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reducers/companies.reducer */ 47856);
/* harmony import */ var _actions_companies_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/companies.actions */ 29814);
/* harmony import */ var _models_company_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/company.model */ 44245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _global_dot_loader_dot_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global/dot-loader/dot-loader.component */ 43339);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/pipes/date.pipe */ 23341);
/* harmony import */ var _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/pipes/dashes-to-spaces.pipe */ 61467);

















function CompanyDetailsFormComponent_form_0_div_7_dib_dot_loader_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "dib-dot-loader", 19);
  }
}
function CompanyDetailsFormComponent_form_0_div_7_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Save changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CompanyDetailsFormComponent_form_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14)(1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CompanyDetailsFormComponent_form_0_div_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.initForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CompanyDetailsFormComponent_form_0_div_7_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CompanyDetailsFormComponent_form_0_div_7_dib_dot_loader_5_Template, 1, 0, "dib-dot-loader", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, CompanyDetailsFormComponent_form_0_div_7_span_7_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 4, ctx_r1.loading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 6, ctx_r1.loading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 8, ctx_r1.loading$));
  }
}
function CompanyDetailsFormComponent_form_0_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, ctx_r2.company.activatedAt, "distanceToNow"), ") ");
  }
}
function CompanyDetailsFormComponent_form_0_mat_radio_button_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-radio-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "dibDashesToSpaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const status_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", status_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 4, status_r9)), " ");
  }
}
function CompanyDetailsFormComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 1)(1, "div", 2)(2, "div")(3, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, CompanyDetailsFormComponent_form_0_div_7_Template, 9, 10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Starting Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div")(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, CompanyDetailsFormComponent_form_0_span_16_Template, 3, 4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 7)(18, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Company Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-radio-group", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, CompanyDetailsFormComponent_form_0_mat_radio_button_22_Template, 4, 6, "mat-radio-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 11)(24, "mat-form-field", 12)(25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Agent booking note");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "textarea", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.company.corporationName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.company.registrationNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.form.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 11, ctx_r0.company.activatedAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.company.activatedAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 13, ctx_r0.loading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.companyStatuses);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](28, 15, ctx_r0.loading$));
  }
}
class CompanyDetailsFormComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(route, store, formBuilder) {
    super();
    this.route = route;
    this.store = store;
    this.formBuilder = formBuilder;
    this.loading$ = this.store.select(_reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_1__.companiesLoading);
    this.companyStatuses = [_models_company_model__WEBPACK_IMPORTED_MODULE_3__.CompanyStatus.NONE, _models_company_model__WEBPACK_IMPORTED_MODULE_3__.CompanyStatus.AT_RISK, _models_company_model__WEBPACK_IMPORTED_MODULE_3__.CompanyStatus.VIP];
  }
  // Watch the changes on the company input, so we can reset the form every time there is an update
  // This way form will stay clean and input fields will be hidden after details have been saved
  ngOnChanges(changes) {
    if (!changes?.company?.currentValue?.id) return;
    if (JSON.stringify(changes?.company?.previousValue) !== JSON.stringify(changes?.company?.currentValue)) {
      this.initForm();
    }
  }
  initForm() {
    this.form = this.formBuilder.group({
      status: [this.company.status],
      note: [this.company.agentNote]
    });
  }
  save() {
    const data = JSON.parse(JSON.stringify(this.company));
    data.status = this.form.get('status').value;
    data.agentNote = this.form.get('note').value;
    this.store.dispatch(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_2__.CompanyActions.saveCompanyDetails({
      data
    }));
  }
}
CompanyDetailsFormComponent.ɵfac = function CompanyDetailsFormComponent_Factory(t) {
  return new (t || CompanyDetailsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder));
};
CompanyDetailsFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CompanyDetailsFormComponent,
  selectors: [["app-company-details-form"]],
  inputs: {
    company: "company"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
  decls: 1,
  vars: 1,
  consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "flex", "w-full", "justify-between"], [1, "text-xl"], [1, "text-xs", "text-gray-500"], ["class", "ml-5 inline cursor-pointer space-x-2", 4, "ngIf"], [1, "mt-12", "grid", "auto-cols-max", "grid-flow-col", "gap-y-3", "gap-x-6", "sm:grid-flow-row"], [1, "grid", "grid-cols-1", "gap-1"], ["class", "text-xs text-gray-500", 4, "ngIf"], ["color", "primary", "formControlName", "status", 1, "flex", "space-x-6"], [3, "value", 4, "ngFor", "ngForOf"], [1, "mt-6"], [1, "w-1/2", "sm:w-full"], ["matInput", "", "formControlName", "note", "type", "text", "name", "note", "cols", "60", "rows", "10"], [1, "ml-5", "inline", "cursor-pointer", "space-x-2"], ["type", "reset", "mat-button", "", 3, "click"], ["type", "submit", "mat-stroked-button", "", "color", "primary", 3, "click"], ["size", "small", "color", "current", 4, "ngIf"], [4, "ngIf"], ["size", "small", "color", "current"], [3, "value"]],
  template: function CompanyDetailsFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CompanyDetailsFormComponent_form_0_Template, 29, 17, "form", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _global_dot_loader_dot_loader_component__WEBPACK_IMPORTED_MODULE_4__.DotLoaderComponent, _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__.MatRadioButton, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.TitleCasePipe, _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_5__.DibDatePipe, _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_6__.DibDashesToSpacesPipe],
  encapsulation: 2
});

/***/ }),

/***/ 2691:
/*!*****************************************************************************!*\
  !*** ./src/app/companies/company-details/company-details-tabs.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyDetailsTabsComponent": () => (/* binding */ CompanyDetailsTabsComponent)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _users_company_details_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users/company-details-users.component */ 93359);
/* harmony import */ var _bookings_company_details_bookings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookings/company-details-bookings.component */ 87357);





function CompanyDetailsTabsComponent_ng_container_6_app_company_details_users_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-company-details-users", 5);
} if (rf & 2) {
    const id_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("companyId", id_r1);
} }
function CompanyDetailsTabsComponent_ng_container_6_app_company_details_bookings_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-company-details-bookings", 5);
} if (rf & 2) {
    const id_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("companyId", id_r1);
} }
function CompanyDetailsTabsComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CompanyDetailsTabsComponent_ng_container_6_app_company_details_users_1_Template, 1, 1, "app-company-details-users", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CompanyDetailsTabsComponent_ng_container_6_app_company_details_bookings_2_Template, 1, 1, "app-company-details-bookings", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "users");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "bookings");
} }
const _c0 = function (a0) { return [a0]; };
class CompanyDetailsTabsComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor() {
        super(...arguments);
        this.activeTab = 'bookings';
    }
}
CompanyDetailsTabsComponent.ɵfac = /*@__PURE__*/ function () { let ɵCompanyDetailsTabsComponent_BaseFactory; return function CompanyDetailsTabsComponent_Factory(t) { return (ɵCompanyDetailsTabsComponent_BaseFactory || (ɵCompanyDetailsTabsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](CompanyDetailsTabsComponent)))(t || CompanyDetailsTabsComponent); }; }();
CompanyDetailsTabsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CompanyDetailsTabsComponent, selectors: [["app-company-details-tabs"]], inputs: { company: "company" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [[1, "mt-4", "flex", "flex-col", "text-sm", "xs:text-xs"], [1, "mb-4", "flex", "whitespace-nowrap"], [1, "cursor-pointer", "p-2", "pt-0", "uppercase", 3, "ngClass", "click"], [4, "ngIf"], [3, "companyId", 4, "ngIf"], [3, "companyId"]], template: function CompanyDetailsTabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CompanyDetailsTabsComponent_Template_span_click_2_listener() { return ctx.activeTab = "bookings"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Bookings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CompanyDetailsTabsComponent_Template_span_click_4_listener() { return ctx.activeTab = "users"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CompanyDetailsTabsComponent_ng_container_6_Template, 3, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx.activeTab === "bookings" ? "cursor-pointer border-b-2 border-dib-green-600" : "opacity-50"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx.activeTab === "users" ? "cursor-pointer border-b-2 border-dib-green-600" : "opacity-50"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.company == null ? null : ctx.company.id);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _users_company_details_users_component__WEBPACK_IMPORTED_MODULE_1__.CompanyDetailsUsersComponent, _bookings_company_details_bookings_component__WEBPACK_IMPORTED_MODULE_2__.CompanyDetailsBookingsComponent], encapsulation: 2 });


/***/ }),

/***/ 96158:
/*!************************************************************************!*\
  !*** ./src/app/companies/company-details/company-details.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyDetailsComponent": () => (/* binding */ CompanyDetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 62566);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base.component */ 83607);
/* harmony import */ var _reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reducers/companies.reducer */ 47856);
/* harmony import */ var _actions_companies_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/companies.actions */ 29814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/wrapper/main/wrapper-main.component */ 4122);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global/breadcrumbs/breadcrumbs.component */ 25758);
/* harmony import */ var _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global/breadcrumbs/breadcrumb/breadcrumb.component */ 62718);
/* harmony import */ var _global_wrapper_details_wrapper_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../global/wrapper/details/wrapper-details.component */ 24019);
/* harmony import */ var _global_wrapper_details_tab_wrapper_details_tab_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../global/wrapper/details/tab/wrapper-details-tab.component */ 36246);
/* harmony import */ var _company_details_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./company-details-form.component */ 61389);
/* harmony import */ var _company_details_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./company-details-tabs.component */ 2691);















function CompanyDetailsComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-company-details-form", 9)(2, "app-company-details-tabs", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const company_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("company", company_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("company", company_r1);
  }
}
class CompanyDetailsComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(route, store) {
    super();
    this.route = route;
    this.store = store;
    this.company$ = this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(params => params.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mergeMap)(id => this.store.select((0,_reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_1__.selectCompanyById)(id))));
    // Only subscribe to initial page loading and use it for the page wrapper loader
    // Subsequent loading states will be handled differently using the main loading$ prop
    this.firstTimeLoading$ = this.store.select(_reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_1__.companiesLoading).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeWhile)(loading => loading, true));
  }
  ngOnInit() {
    // Load company details
    this.subscriptions.add(this.route.params.subscribe(({
      id
    }) => {
      this.store.dispatch(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_2__.CompanyActions.loadCompany({
        id
      }));
    }));
  }
}
CompanyDetailsComponent.ɵfac = function CompanyDetailsComponent_Factory(t) {
  return new (t || CompanyDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_15__.Store));
};
CompanyDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: CompanyDetailsComponent,
  selectors: [["app-company-details"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
  decls: 19,
  vars: 21,
  consts: [["label", "Dashboard", "route", "/"], ["label", "Companies", "route", "/companies"], [3, "label", "loading"], [3, "loading", "item"], ["slot", "tabs"], ["type", "header"], ["active", "true", 3, "title"], ["slot", "content", 4, "ngIf"], ["slot", "content"], [3, "company"]],
  template: function CompanyDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "dib-wrapper-main")(1, "dib-breadcrumbs");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "dib-breadcrumb", 0)(3, "dib-breadcrumb", 1)(4, "dib-breadcrumb", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "dib-wrapper-details", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](10, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "dib-wrapper-details-tab", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "dib-wrapper-details-tab", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, CompanyDetailsComponent_ng_container_17_Template, 3, 2, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_4_0;
      let tmp_5_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("label", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 7, ctx.company$)) == null ? null : tmp_0_0.corporationName)("loading", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 9, ctx.firstTimeLoading$));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("loading", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 11, ctx.firstTimeLoading$))("item", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 13, ctx.company$));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](14, 15, ctx.company$)) == null ? null : tmp_4_0.corporationName);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](16, 17, ctx.company$)) == null ? null : tmp_5_0.corporationName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 19, ctx.company$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_3__.WrapperMainComponent, _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsComponent, _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbComponent, _global_wrapper_details_wrapper_details_component__WEBPACK_IMPORTED_MODULE_6__.WrapperDetailsComponent, _global_wrapper_details_tab_wrapper_details_tab_component__WEBPACK_IMPORTED_MODULE_7__.WrapperDetailsTabComponent, _company_details_form_component__WEBPACK_IMPORTED_MODULE_8__.CompanyDetailsFormComponent, _company_details_tabs_component__WEBPACK_IMPORTED_MODULE_9__.CompanyDetailsTabsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 65057:
/*!*********************************************************************!*\
  !*** ./src/app/companies/company-details/company-details.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyDetailsModule": () => (/* binding */ CompanyDetailsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global/wrapper/listing/wrapper-listing.module */ 23745);
/* harmony import */ var _company_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-details.component */ 96158);
/* harmony import */ var _bookings_company_details_bookings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookings/company-details-bookings.component */ 87357);
/* harmony import */ var _users_company_details_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/company-details-users.component */ 93359);
/* harmony import */ var _company_details_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-details-form.component */ 61389);
/* harmony import */ var _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global/wrapper/main/wrapper-main.module */ 49722);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../global/breadcrumbs/breadcrumbs.module */ 2367);
/* harmony import */ var _global_wrapper_details_wrapper_details_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../global/wrapper/details/wrapper-details.module */ 69569);
/* harmony import */ var _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/pipes/pipes.module */ 59916);
/* harmony import */ var _global_dot_loader_dot_loader_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../global/dot-loader/dot-loader.module */ 67995);
/* harmony import */ var _company_details_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./company-details-tabs.component */ 2691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
























class CompanyDetailsModule {
}
CompanyDetailsModule.ɵfac = function CompanyDetailsModule_Factory(t) { return new (t || CompanyDetailsModule)(); };
CompanyDetailsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: CompanyDetailsModule });
CompanyDetailsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_0__.WrapperListingModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__.MatProgressBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginatorModule,
        _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_5__.WrapperMainModule,
        _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbsModule,
        _global_wrapper_details_wrapper_details_module__WEBPACK_IMPORTED_MODULE_7__.WrapperDetailsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
        _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__.DibPipesModule,
        _global_dot_loader_dot_loader_module__WEBPACK_IMPORTED_MODULE_9__.DotLoaderModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](CompanyDetailsModule, { declarations: [_company_details_component__WEBPACK_IMPORTED_MODULE_1__.CompanyDetailsComponent,
        _company_details_form_component__WEBPACK_IMPORTED_MODULE_4__.CompanyDetailsFormComponent,
        _company_details_tabs_component__WEBPACK_IMPORTED_MODULE_10__.CompanyDetailsTabsComponent,
        _users_company_details_users_component__WEBPACK_IMPORTED_MODULE_3__.CompanyDetailsUsersComponent,
        _bookings_company_details_bookings_component__WEBPACK_IMPORTED_MODULE_2__.CompanyDetailsBookingsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_0__.WrapperListingModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__.MatProgressBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginatorModule,
        _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_5__.WrapperMainModule,
        _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbsModule,
        _global_wrapper_details_wrapper_details_module__WEBPACK_IMPORTED_MODULE_7__.WrapperDetailsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
        _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__.DibPipesModule,
        _global_dot_loader_dot_loader_module__WEBPACK_IMPORTED_MODULE_9__.DotLoaderModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule], exports: [_company_details_form_component__WEBPACK_IMPORTED_MODULE_4__.CompanyDetailsFormComponent,
        _company_details_tabs_component__WEBPACK_IMPORTED_MODULE_10__.CompanyDetailsTabsComponent,
        _users_company_details_users_component__WEBPACK_IMPORTED_MODULE_3__.CompanyDetailsUsersComponent,
        _bookings_company_details_bookings_component__WEBPACK_IMPORTED_MODULE_2__.CompanyDetailsBookingsComponent] }); })();


/***/ }),

/***/ 63844:
/*!****************************************************!*\
  !*** ./src/app/companies/company-details/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyDetailsBookingsComponent": () => (/* reexport safe */ _bookings_company_details_bookings_component__WEBPACK_IMPORTED_MODULE_4__.CompanyDetailsBookingsComponent),
/* harmony export */   "CompanyDetailsComponent": () => (/* reexport safe */ _company_details_component__WEBPACK_IMPORTED_MODULE_1__.CompanyDetailsComponent),
/* harmony export */   "CompanyDetailsFormComponent": () => (/* reexport safe */ _company_details_form_component__WEBPACK_IMPORTED_MODULE_2__.CompanyDetailsFormComponent),
/* harmony export */   "CompanyDetailsModule": () => (/* reexport safe */ _company_details_module__WEBPACK_IMPORTED_MODULE_0__.CompanyDetailsModule),
/* harmony export */   "CompanyDetailsUsersComponent": () => (/* reexport safe */ _users_company_details_users_component__WEBPACK_IMPORTED_MODULE_3__.CompanyDetailsUsersComponent)
/* harmony export */ });
/* harmony import */ var _company_details_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-details.module */ 65057);
/* harmony import */ var _company_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-details.component */ 96158);
/* harmony import */ var _company_details_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-details-form.component */ 61389);
/* harmony import */ var _users_company_details_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/company-details-users.component */ 93359);
/* harmony import */ var _bookings_company_details_bookings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bookings/company-details-bookings.component */ 87357);







/***/ }),

/***/ 93359:
/*!************************************************************************************!*\
  !*** ./src/app/companies/company-details/users/company-details-users.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyDetailsUsersComponent": () => (/* binding */ CompanyDetailsUsersComponent)
/* harmony export */ });
/* harmony import */ var _base_listing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base-listing.component */ 74760);
/* harmony import */ var _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../actions/company-users.actions */ 30668);
/* harmony import */ var _reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../reducers/company-users.reducer */ 15569);
/* harmony import */ var _utils_animations_element_cross_fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/animations/element-cross-fade */ 72679);
/* harmony import */ var _actions_users_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/users.actions */ 67421);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _global_wrapper_listing_wrapper_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../global/wrapper/listing/wrapper-listing.component */ 40542);
/* harmony import */ var _global_wrapper_listing_total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/wrapper/listing/total/wrapper-listing-total.component */ 57905);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 36060);


















function CompanyDetailsUsersComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "First name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CompanyDetailsUsersComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r18.firstname);
  }
}
function CompanyDetailsUsersComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CompanyDetailsUsersComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r19.lastname);
  }
}
function CompanyDetailsUsersComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CompanyDetailsUsersComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, row_r20.role));
  }
}
function CompanyDetailsUsersComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CompanyDetailsUsersComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r21.username);
  }
}
function CompanyDetailsUsersComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CompanyDetailsUsersComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r22.phone);
  }
}
function CompanyDetailsUsersComponent_th_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-progress-bar", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CompanyDetailsUsersComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CompanyDetailsUsersComponent_th_32_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("colSpan", ctx_r10.columns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, ctx_r10.companyUsers$).loading);
  }
}
function CompanyDetailsUsersComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 30);
  }
}
function CompanyDetailsUsersComponent_td_35_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CompanyDetailsUsersComponent_td_35_a_4_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28);
      const row_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r26.travelPortal(row_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
const _c0 = function (a1) {
  return ["/companies/users", a1];
};
function CompanyDetailsUsersComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 31)(1, "a", 32)(2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CompanyDetailsUsersComponent_td_35_a_4_Template, 3, 0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c0, row_r24.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r24.active);
  }
}
function CompanyDetailsUsersComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 36);
  }
}
function CompanyDetailsUsersComponent_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 36);
  }
}
function CompanyDetailsUsersComponent_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 37);
  }
}
function CompanyDetailsUsersComponent_tr_39_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Loading data. This can take a few seconds, please be patient. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
function CompanyDetailsUsersComponent_tr_39_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, " No records found. Please refine your search and try again. ");
  }
}
function CompanyDetailsUsersComponent_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 38)(1, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CompanyDetailsUsersComponent_tr_39_ng_container_2_Template, 2, 0, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CompanyDetailsUsersComponent_tr_39_ng_template_4_Template, 1, 0, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("colSpan", ctx_r16.columns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 3, ctx_r16.companyUsers$).loading)("ngIfElse", _r31);
  }
}
function CompanyDetailsUsersComponent_mat_paginator_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-paginator", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("page", function CompanyDetailsUsersComponent_mat_paginator_41_Template_mat_paginator_page_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r33.onPageChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("length", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 3, ctx_r17.companyUsers$).pagination.totalElements)("pageIndex", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 5, ctx_r17.companyUsers$).pagination.number)("pageSize", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 7, ctx_r17.companyUsers$).pagination.size);
  }
}
const _c1 = function () {
  return ["loader"];
};
class CompanyDetailsUsersComponent extends _base_listing_component__WEBPACK_IMPORTED_MODULE_0__.BaseListingComponent {
  constructor() {
    super(...arguments);
    this.companyUsers$ = this.store.select(_reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_2__.selectCompanyUsers);
    this.tableDataSource$ = this.store.select(_reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_2__.selectCompanyUsersData);
  }
  ngOnInit() {
    this.sortActive = 'id';
    this.sortDirection = 'asc';
    this.columns = ['firstname', 'lastname', 'role', 'username', 'phone', 'actions'];
    this.loadAction = _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_1__.CompanyUserActions.loadCompanyUsers;
    super.ngOnInit();
    // Display only company users
    this.filter('companyId', this.companyId);
  }
  travelPortal(user) {
    this.store.dispatch(_actions_users_actions__WEBPACK_IMPORTED_MODULE_4__.UserActions.getOverrideToken({
      username: user.username
    }));
  }
}
CompanyDetailsUsersComponent.ɵfac = /*@__PURE__*/function () {
  let ɵCompanyDetailsUsersComponent_BaseFactory;
  return function CompanyDetailsUsersComponent_Factory(t) {
    return (ɵCompanyDetailsUsersComponent_BaseFactory || (ɵCompanyDetailsUsersComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](CompanyDetailsUsersComponent)))(t || CompanyDetailsUsersComponent);
  };
}();
CompanyDetailsUsersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CompanyDetailsUsersComponent,
  selectors: [["app-company-details-users"]],
  inputs: {
    companyId: "companyId"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  decls: 43,
  vars: 17,
  consts: [[1, "-mx-4"], [3, "padded"], ["slot", "filters"], ["matInput", "", "autocomplete", "off", 3, "value", "keyup"], ["slot", "total"], [3, "total"], ["slot", "table"], ["mat-table", "", "matSort", "", "matSortDisableClear", "", 1, "whitespace-nowrap", 3, "matSortActive", "matSortDirection", "dataSource", "matSortChange"], ["matColumnDef", "firstname"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "lastname"], ["matColumnDef", "role"], ["matColumnDef", "username"], ["matColumnDef", "phone"], ["matColumnDef", "loader"], ["mat-header-cell", "", 3, "colSpan", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "whitespace-normal", 4, "matNoDataRow"], ["slot", "pagination"], [3, "length", "pageIndex", "pageSize", "page", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", 3, "colSpan"], [4, "ngIf"], ["mode", "indeterminate", 1, "absolute"], ["mat-header-cell", ""], ["mat-cell", "", 1, "text-right"], ["mat-icon-button", "", "color", "accent", "matTooltip", "View company user details", "matTooltipPosition", "left", 1, "hover:text-dib-green-600", 3, "routerLink"], [1, "material-icons"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Go to Travel Portal", "matTooltipPosition", "left", "class", "hover:text-dib-green-600", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Go to Travel Portal", "matTooltipPosition", "left", 1, "hover:text-dib-green-600", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "whitespace-normal"], [1, "border-b", "p-6", "text-center", 3, "colSpan"], [4, "ngIf", "ngIfElse"], ["noData", ""], [3, "length", "pageIndex", "pageSize", "page"]],
  template: function CompanyDetailsUsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "dib-wrapper-listing", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](2, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-form-field")(4, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "First Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function CompanyDetailsUsersComponent_Template_input_keyup_6_listener($event) {
        return ctx.debouncedFilter("firstname", $event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-form-field")(8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Last Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function CompanyDetailsUsersComponent_Template_input_keyup_10_listener($event) {
        return ctx.debouncedFilter("lastname", $event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](11, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "dib-wrapper-listing-total", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](14, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "table", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("matSortChange", function CompanyDetailsUsersComponent_Template_table_matSortChange_15_listener($event) {
        return ctx.onSortChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](16, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, CompanyDetailsUsersComponent_th_17_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, CompanyDetailsUsersComponent_td_18_Template, 2, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](19, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, CompanyDetailsUsersComponent_th_20_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, CompanyDetailsUsersComponent_td_21_Template, 2, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](22, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, CompanyDetailsUsersComponent_th_23_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, CompanyDetailsUsersComponent_td_24_Template, 3, 3, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](25, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, CompanyDetailsUsersComponent_th_26_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, CompanyDetailsUsersComponent_td_27_Template, 2, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](28, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, CompanyDetailsUsersComponent_th_29_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, CompanyDetailsUsersComponent_td_30_Template, 2, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](31, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, CompanyDetailsUsersComponent_th_32_Template, 3, 4, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](33, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, CompanyDetailsUsersComponent_th_34_Template, 1, 0, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, CompanyDetailsUsersComponent_td_35_Template, 5, 4, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, CompanyDetailsUsersComponent_tr_36_Template, 1, 0, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, CompanyDetailsUsersComponent_tr_37_Template, 1, 0, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, CompanyDetailsUsersComponent_tr_38_Template, 1, 0, "tr", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, CompanyDetailsUsersComponent_tr_39_Template, 6, 5, "tr", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](40, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, CompanyDetailsUsersComponent_mat_paginator_41_Template, 4, 9, "mat-paginator", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](42, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@elementCrossFade", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("padded", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.filters.firstname || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.filters.lastname || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("total", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 12, ctx.companyUsers$).pagination == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 12, ctx.companyUsers$).pagination.totalElements);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matSortActive", ctx.sortActive)("matSortDirection", ctx.sortDirection)("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](16, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](42, 14, ctx.companyUsers$).pagination);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _global_wrapper_listing_wrapper_listing_component__WEBPACK_IMPORTED_MODULE_5__.WrapperListingComponent, _global_wrapper_listing_total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_6__.WrapperListingTotalComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatNoDataRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__.MatProgressBar, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLinkWithHref, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe],
  encapsulation: 2,
  data: {
    animation: [_utils_animations_element_cross_fade__WEBPACK_IMPORTED_MODULE_3__.elementCrossFade]
  }
});

/***/ }),

/***/ 5497:
/*!*************************************************************************************!*\
  !*** ./src/app/companies/company-users/bookings/company-user-bookings.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyUserBookingsComponent": () => (/* binding */ CompanyUserBookingsComponent)
/* harmony export */ });
/* harmony import */ var _base_listing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base-listing.component */ 74760);
/* harmony import */ var _utils_animations_element_cross_fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/animations/element-cross-fade */ 72679);
/* harmony import */ var _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/bookings.actions */ 4797);
/* harmony import */ var _reducers_bookings_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../reducers/bookings.reducer */ 6819);
/* harmony import */ var _models_booking_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/booking.model */ 31282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _global_wrapper_listing_wrapper_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../global/wrapper/listing/wrapper-listing.component */ 40542);
/* harmony import */ var _global_wrapper_listing_total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/wrapper/listing/total/wrapper-listing-total.component */ 57905);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/pipes/date.pipe */ 23341);
/* harmony import */ var _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/pipes/dashes-to-spaces.pipe */ 61467);






















function CompanyUserBookingsComponent_mat_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "dibDashesToSpaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const status_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", status_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, status_r21));
  }
}
function CompanyUserBookingsComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Trip ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CompanyUserBookingsComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](row_r22.tripId);
  }
}
function CompanyUserBookingsComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Cart Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CompanyUserBookingsComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "dibDashesToSpaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 3, row_r23.status)));
  }
}
function CompanyUserBookingsComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Travelers");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CompanyUserBookingsComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 30)(1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " info_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matTooltip", row_r24.travelers.join(", "));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r24.travelers.length, " ");
  }
}
function CompanyUserBookingsComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Booker Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CompanyUserBookingsComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](row_r25.bookerName);
  }
}
function CompanyUserBookingsComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CompanyUserBookingsComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 30)(1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 2, row_r26.startDate, "distanceToNow"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 5, row_r26.startDate), " ");
  }
}
function CompanyUserBookingsComponent_th_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CompanyUserBookingsComponent_td_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 30)(1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 2, row_r27.endDate, "distanceToNow"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 5, row_r27.endDate), " ");
  }
}
function CompanyUserBookingsComponent_th_42_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-progress-bar", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CompanyUserBookingsComponent_th_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CompanyUserBookingsComponent_th_42_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("colSpan", ctx_r13.columns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, ctx_r13.bookings$).loading);
  }
}
function CompanyUserBookingsComponent_th_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "th", 31);
  }
}
const _c0 = function (a1) {
  return ["/companies/bookings", a1];
};
function CompanyUserBookingsComponent_td_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 38)(1, "a", 39)(2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](1, _c0, row_r29.cartId));
  }
}
function CompanyUserBookingsComponent_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 41);
  }
}
function CompanyUserBookingsComponent_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 41);
  }
}
function CompanyUserBookingsComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 42);
  }
}
function CompanyUserBookingsComponent_tr_49_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Loading data. This can take a few seconds, please be patient. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
}
function CompanyUserBookingsComponent_tr_49_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, " No records found. Please refine your search and try again. ");
  }
}
function CompanyUserBookingsComponent_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 43)(1, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CompanyUserBookingsComponent_tr_49_ng_container_2_Template, 2, 0, "ng-container", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, CompanyUserBookingsComponent_tr_49_ng_template_4_Template, 1, 0, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](5);
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("colSpan", ctx_r19.columns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 3, ctx_r19.bookings$).loading)("ngIfElse", _r32);
  }
}
function CompanyUserBookingsComponent_mat_paginator_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-paginator", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("page", function CompanyUserBookingsComponent_mat_paginator_51_Template_mat_paginator_page_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r34.onPageChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("length", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 3, ctx_r20.bookings$).pagination.totalElements)("pageIndex", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 5, ctx_r20.bookings$).pagination.number)("pageSize", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 7, ctx_r20.bookings$).pagination.size);
  }
}
const _c1 = function () {
  return ["loader"];
};
class CompanyUserBookingsComponent extends _base_listing_component__WEBPACK_IMPORTED_MODULE_0__.BaseListingComponent {
  constructor() {
    super(...arguments);
    this.bookings$ = this.store.select(_reducers_bookings_reducer__WEBPACK_IMPORTED_MODULE_3__.selectBookings);
    this.tableDataSource$ = this.store.select(_reducers_bookings_reducer__WEBPACK_IMPORTED_MODULE_3__.selectBookingsData);
    this.statuses = Object.keys(_models_booking_model__WEBPACK_IMPORTED_MODULE_4__.bookingStatusMap);
  }
  ngOnInit() {
    super.ngOnInit();
    this.sortActive = 'tripId';
    this.sortDirection = 'asc';
    this.columns = ['tripId', 'status', 'travelers', 'bookerName', 'startDate', 'endDate', 'actions'];
    this.loadAction = _actions_bookings_actions__WEBPACK_IMPORTED_MODULE_2__.BookingActions.loadBookings;
    // Display only user bookings
    this.filterMultiple({
      userId: this.userId,
      isActiveCart: this.isActiveCart ? 'true' : 'false'
    });
  }
}
CompanyUserBookingsComponent.ɵfac = /*@__PURE__*/function () {
  let ɵCompanyUserBookingsComponent_BaseFactory;
  return function CompanyUserBookingsComponent_Factory(t) {
    return (ɵCompanyUserBookingsComponent_BaseFactory || (ɵCompanyUserBookingsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](CompanyUserBookingsComponent)))(t || CompanyUserBookingsComponent);
  };
}();
CompanyUserBookingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: CompanyUserBookingsComponent,
  selectors: [["app-company-user-bookings"]],
  inputs: {
    userId: "userId",
    isActiveCart: "isActiveCart"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
  decls: 53,
  vars: 18,
  consts: [[1, "-mx-4"], [3, "padded"], ["slot", "filters"], ["matInput", "", "autocomplete", "off", 3, "value", "keyup"], [3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["slot", "total"], [3, "total"], ["slot", "table"], ["mat-table", "", "matSort", "", "matSortDisableClear", "", 1, "whitespace-nowrap", 3, "matSortActive", "matSortDirection", "dataSource", "matSortChange"], ["matColumnDef", "tripId"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "travelers"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "bookerName"], ["matColumnDef", "startDate"], ["matColumnDef", "endDate"], ["matColumnDef", "loader"], ["mat-header-cell", "", 3, "colSpan", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-cell", "", "class", "text-right", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "whitespace-normal", 4, "matNoDataRow"], ["slot", "pagination"], [3, "length", "pageIndex", "pageSize", "page", 4, "ngIf"], [3, "value"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["matTooltipPosition", "above", 1, "flex", "items-center", 3, "matTooltip"], [1, "material-icons", "ml-1", "text-lg"], [3, "matTooltip"], ["mat-header-cell", "", 3, "colSpan"], [4, "ngIf"], ["mode", "indeterminate", 1, "absolute"], ["mat-cell", "", 1, "text-right"], ["mat-icon-button", "", "color", "accent", "matTooltip", "View booking details", "matTooltipPosition", "left", 1, "hover:text-dib-green-600", 3, "routerLink"], [1, "material-icons"], ["mat-header-row", ""], ["mat-row", ""], [1, "whitespace-normal"], [1, "border-b", "p-6", "text-center", 3, "colSpan"], [4, "ngIf", "ngIfElse"], ["noData", ""], [3, "length", "pageIndex", "pageSize", "page"]],
  template: function CompanyUserBookingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "dib-wrapper-listing", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](2, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-form-field")(4, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Trip ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup", function CompanyUserBookingsComponent_Template_input_keyup_6_listener($event) {
        return ctx.debouncedFilter("tripId", $event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "mat-form-field")(8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Traveler Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup", function CompanyUserBookingsComponent_Template_input_keyup_10_listener($event) {
        return ctx.debouncedFilter("traveler", $event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "mat-form-field")(12, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Cart Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "mat-select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectionChange", function CompanyUserBookingsComponent_Template_mat_select_selectionChange_14_listener($event) {
        return ctx.debouncedFilter("status", $event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Show All");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, CompanyUserBookingsComponent_mat_option_17_Template, 3, 4, "mat-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](18, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "dib-wrapper-listing-total", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](20, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](21, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "table", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("matSortChange", function CompanyUserBookingsComponent_Template_table_matSortChange_22_listener($event) {
        return ctx.onSortChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](23, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, CompanyUserBookingsComponent_th_24_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, CompanyUserBookingsComponent_td_25_Template, 2, 1, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](26, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, CompanyUserBookingsComponent_th_27_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, CompanyUserBookingsComponent_td_28_Template, 4, 5, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](29, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, CompanyUserBookingsComponent_th_30_Template, 2, 0, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, CompanyUserBookingsComponent_td_31_Template, 5, 2, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](32, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, CompanyUserBookingsComponent_th_33_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, CompanyUserBookingsComponent_td_34_Template, 2, 1, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](35, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](36, CompanyUserBookingsComponent_th_36_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, CompanyUserBookingsComponent_td_37_Template, 5, 7, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](38, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, CompanyUserBookingsComponent_th_39_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](40, CompanyUserBookingsComponent_td_40_Template, 5, 7, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](41, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](42, CompanyUserBookingsComponent_th_42_Template, 3, 4, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](43, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, CompanyUserBookingsComponent_th_44_Template, 1, 0, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](45, CompanyUserBookingsComponent_td_45_Template, 4, 3, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](46, CompanyUserBookingsComponent_tr_46_Template, 1, 0, "tr", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](47, CompanyUserBookingsComponent_tr_47_Template, 1, 0, "tr", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, CompanyUserBookingsComponent_tr_48_Template, 1, 0, "tr", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](49, CompanyUserBookingsComponent_tr_49_Template, 6, 5, "tr", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](50, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](51, CompanyUserBookingsComponent_mat_paginator_51_Template, 4, 9, "mat-paginator", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](52, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@elementCrossFade", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("padded", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.filters.tripId || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.filters.traveler || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.statuses);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("total", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](20, 13, ctx.bookings$).pagination == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](20, 13, ctx.bookings$).pagination.totalElements);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matSortActive", ctx.sortActive)("matSortDirection", ctx.sortDirection)("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](17, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](52, 15, ctx.bookings$).pagination);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _global_wrapper_listing_wrapper_listing_component__WEBPACK_IMPORTED_MODULE_5__.WrapperListingComponent, _global_wrapper_listing_total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_6__.WrapperListingTotalComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatNoDataRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__.MatProgressBar, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatAnchor, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLinkWithHref, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.TitleCasePipe, _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_7__.DibDatePipe, _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_8__.DibDashesToSpacesPipe],
  encapsulation: 2,
  data: {
    animation: [_utils_animations_element_cross_fade__WEBPACK_IMPORTED_MODULE_1__.elementCrossFade]
  }
});

/***/ }),

/***/ 95727:
/*!****************************************************************************************************************!*\
  !*** ./src/app/companies/company-users/company-user-company-details/company-user-company-details.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyUserCompanyDetailsComponent": () => (/* binding */ CompanyUserCompanyDetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 62566);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 10538);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base.component */ 83607);
/* harmony import */ var _reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../reducers/company-users.reducer */ 15569);
/* harmony import */ var _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/company-users.actions */ 30668);
/* harmony import */ var _reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../reducers/companies.reducer */ 47856);
/* harmony import */ var _actions_companies_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/companies.actions */ 29814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../global/wrapper/main/wrapper-main.component */ 4122);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/breadcrumbs/breadcrumbs.component */ 25758);
/* harmony import */ var _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../global/breadcrumbs/breadcrumb/breadcrumb.component */ 62718);
/* harmony import */ var _global_wrapper_details_wrapper_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../global/wrapper/details/wrapper-details.component */ 24019);
/* harmony import */ var _global_wrapper_details_tab_wrapper_details_tab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../global/wrapper/details/tab/wrapper-details-tab.component */ 36246);
/* harmony import */ var _company_details_company_details_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../company-details/company-details-form.component */ 61389);
/* harmony import */ var _company_details_company_details_tabs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../company-details/company-details-tabs.component */ 2691);


















function CompanyUserCompanyDetailsComponent_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-company-details-form", 12)(2, "app-company-details-tabs", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const company_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("company", company_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("company", company_r1);
  }
}
class CompanyUserCompanyDetailsComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(route, store) {
    super();
    this.route = route;
    this.store = store;
    this.companyUser$ = this.store.select(_reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_1__.getSelectedCompanyUser);
    // Show initial loader until both company and company user details are completely loaded
    this.firstTimeLoading$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.store.select(_reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_3__.companiesLoading), this.store.select(_reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_1__.companyUsersLoading)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeWhile)(([companyLoading, companyUserLoading]) => {
      return companyLoading || companyUserLoading;
    }, true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([companyLoading, companyUserLoading]) => companyLoading || companyUserLoading));
  }
  ngOnInit() {
    // Load company data if not already in store
    this.subscriptions.add(this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.mergeMap)(params => (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.forkJoin)([(0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)(params), this.store.select((0,_reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_3__.selectCompanyById)(params.companyId)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1))]))).subscribe(([{
      companyId
    }, company]) => {
      if (!company?.id || company?.id !== companyId) {
        // Load company details if we don't have one in store already
        this.store.dispatch(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_4__.CompanyActions.loadCompany({
          id: companyId
        }));
      }
      this.company$ = this.store.select((0,_reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_3__.selectCompanyById)(companyId));
    }));
    // Load company user data if not already in store
    this.subscriptions.add(this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.withLatestFrom)(this.store.select(_reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_1__.getSelectedCompanyUser))).subscribe(([{
      id
    }, traveler]) => {
      if (!traveler.id || traveler.id !== id) {
        this.store.dispatch(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__.CompanyUserActions.loadAndSelectCompanyUser({
          id
        }));
      }
    }));
  }
}
CompanyUserCompanyDetailsComponent.ɵfac = function CompanyUserCompanyDetailsComponent_Factory(t) {
  return new (t || CompanyUserCompanyDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_22__.Store));
};
CompanyUserCompanyDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: CompanyUserCompanyDetailsComponent,
  selectors: [["app-company-user-company-details"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
  decls: 31,
  vars: 39,
  consts: [["label", "Dashboard", "route", "/"], ["label", "Companies", "route", "/companies"], ["label", "Company Users", "route", "/companies/users"], [3, "label", "route", "loading"], [3, "label", "loading"], [3, "loading", "item"], ["slot", "tabs"], ["type", "header"], ["active", "true", 3, "title"], [3, "title", "route"], ["slot", "content", 4, "ngIf"], ["slot", "content"], [3, "company"]],
  template: function CompanyUserCompanyDetailsComponent_Template(rf, ctx) {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "dib-wrapper-details-tab", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "Company User");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "dib-wrapper-details-tab", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](25, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](26, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](28, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](29, CompanyUserCompanyDetailsComponent_ng_container_29_Template, 3, 2, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](30, "async");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 13, ctx.companyUser$)) == null ? null : tmp_0_0.fullName)("route", "/companies/users/" + ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 15, ctx.companyUser$)) == null ? null : tmp_1_0.id))("loading", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 17, ctx.firstTimeLoading$));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](10, 19, ctx.company$)) == null ? null : tmp_3_0.corporationName)("loading", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](11, 21, ctx.firstTimeLoading$));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("loading", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](13, 23, ctx.firstTimeLoading$))("item", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](14, 25, ctx.company$));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](19, 27, ctx.company$)) == null ? null : tmp_7_0.corporationName);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]((tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](21, 29, ctx.company$)) == null ? null : tmp_8_0.corporationName);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", (tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](25, 31, ctx.companyUser$)) == null ? null : tmp_9_0.fullName)("route", "/companies/users/" + ((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](26, 33, ctx.companyUser$)) == null ? null : tmp_10_0.id));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", (tmp_11_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](28, 35, ctx.companyUser$)) == null ? null : tmp_11_0.fullName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](30, 37, ctx.company$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_5__.WrapperMainComponent, _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbsComponent, _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbComponent, _global_wrapper_details_wrapper_details_component__WEBPACK_IMPORTED_MODULE_8__.WrapperDetailsComponent, _global_wrapper_details_tab_wrapper_details_tab_component__WEBPACK_IMPORTED_MODULE_9__.WrapperDetailsTabComponent, _company_details_company_details_form_component__WEBPACK_IMPORTED_MODULE_10__.CompanyDetailsFormComponent, _company_details_company_details_tabs_component__WEBPACK_IMPORTED_MODULE_11__.CompanyDetailsTabsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 16921:
/*!*******************************************************************************!*\
  !*** ./src/app/companies/company-users/company-user-company-details/index.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyUserCompanyDetailsComponent": () => (/* reexport safe */ _company_user_company_details_component__WEBPACK_IMPORTED_MODULE_0__.CompanyUserCompanyDetailsComponent)
/* harmony export */ });
/* harmony import */ var _company_user_company_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-user-company-details.component */ 95727);



/***/ }),

/***/ 54728:
/*!*****************************************************************************************************!*\
  !*** ./src/app/companies/company-users/company-user-details/company-user-details-form.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyUserDetailsFormComponent": () => (/* binding */ CompanyUserDetailsFormComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base.component */ 83607);
/* harmony import */ var _reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../reducers/company-users.reducer */ 15569);
/* harmony import */ var _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/company-users.actions */ 30668);
/* harmony import */ var _actions_users_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/users.actions */ 67421);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../reducers/auth.reducer */ 30239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _global_dot_loader_dot_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/dot-loader/dot-loader.component */ 43339);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/pipes/date.pipe */ 23341);




















function CompanyUserDetailsFormComponent_form_0_div_7_dib_dot_loader_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "dib-dot-loader", 27);
  }
}
function CompanyUserDetailsFormComponent_form_0_div_7_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Travel Portal");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}
function CompanyUserDetailsFormComponent_form_0_div_7_a_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 29)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "New Assisted Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", "/companies/users/" + ctx_r6.companyUser.id + "/assisted-booking");
  }
}
function CompanyUserDetailsFormComponent_form_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22)(1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CompanyUserDetailsFormComponent_form_0_div_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r7.travelPortal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CompanyUserDetailsFormComponent_form_0_div_7_dib_dot_loader_2_Template, 1, 0, "dib-dot-loader", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, CompanyUserDetailsFormComponent_form_0_div_7_ng_container_4_Template, 5, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, CompanyUserDetailsFormComponent_form_0_div_7_a_6_Template, 3, 1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 3, ctx_r1.overrideTokenLoading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 5, ctx_r1.overrideTokenLoading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.showAssistedBooking && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 7, ctx_r1.loggedInUser$).isSuperAdmin());
  }
}
function CompanyUserDetailsFormComponent_form_0_div_15_dib_dot_loader_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "dib-dot-loader", 27);
  }
}
function CompanyUserDetailsFormComponent_form_0_div_15_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function CompanyUserDetailsFormComponent_form_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30)(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Changes not yet saved.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CompanyUserDetailsFormComponent_form_0_div_15_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.initForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CompanyUserDetailsFormComponent_form_0_div_15_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r13.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, CompanyUserDetailsFormComponent_form_0_div_15_dib_dot_loader_7_Template, 1, 0, "dib-dot-loader", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, CompanyUserDetailsFormComponent_form_0_div_15_span_9_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 4, ctx_r2.loading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 6, ctx_r2.loading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 8, ctx_r2.loading$));
  }
}
function CompanyUserDetailsFormComponent_form_0_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, ctx_r3.companyUser.dateOfBirth, "yearsOld"), ") ");
  }
}
function CompanyUserDetailsFormComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 1)(1, "div", 2)(2, "div")(3, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, CompanyUserDetailsFormComponent_form_0_div_7_Template, 8, 9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "mat-form-field", 8)(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Agent note");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "textarea", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, CompanyUserDetailsFormComponent_form_0_div_15_Template, 11, 10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 11)(17, "div", 12)(18, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Date of birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div")(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](23, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, CompanyUserDetailsFormComponent_form_0_span_24_Template, 3, 4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 14)(26, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 16)(29, "div", 12)(30, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 17)(33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 12)(36, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 17)(39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 18)(42, "div", 12)(43, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 17)(46, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 12)(49, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "Town / city");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 17)(52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div", 12)(55, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "Post / zip code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 17)(58, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "div", 12)(61, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "div", 17)(64, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "div", 19)(67, "div", 20)(68, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69, "Localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "div", 21)(71, "div", 12)(72, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73, "Language");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "div", 17)(75, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "div", 12)(78, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 17)(81, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "div", 20)(84, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](85, "Travel documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "div", 21)(87, "div", 12)(88, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](89, "ID card");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "div", 17)(91, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "div", 12)(94, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](95, "Passport");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "div", 17)(97, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.companyUser.fullName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.companyUser.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.companyUser.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 19, ctx_r0.loading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.form.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](23, 21, ctx_r0.companyUser.dateOfBirth, "productDetailsShort") || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.companyUser.dateOfBirth);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.companyUser.username || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.companyUser.phone || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.companyUser.address || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.companyUser.city || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.companyUser.zipcode || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.companyUser.country || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.companyUser.language || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.companyUser.currency || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((ctx_r0.companyUser.idCard == null ? null : ctx_r0.companyUser.idCard.idNumber) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((ctx_r0.companyUser.passport == null ? null : ctx_r0.companyUser.passport.idNumber) || "-");
  }
}
class CompanyUserDetailsFormComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(store, formBuilder, actions) {
    super();
    this.store = store;
    this.formBuilder = formBuilder;
    this.actions = actions;
    this.loading$ = this.store.select(_reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_1__.companyUsersLoading);
    this.loggedInUser$ = this.store.select(_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_5__.loggedInUser);
    this.overrideTokenLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(false);
    this.showAssistedBooking = _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.featureToggles.agentAssistedBooking;
  }
  ngOnInit() {
    this.subscriptions.add(this.actions.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.ofType)(_actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.getOverrideTokenStart)).subscribe(() => {
      this.overrideTokenLoading$.next(true);
    }));
    this.subscriptions.add(this.actions.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.ofType)(_actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.getOverrideTokenSuccess, _actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.getOverrideTokenError)).subscribe(() => {
      this.overrideTokenLoading$.next(false);
    }));
  }
  // Watch the changes on the company input, so we can reset the form every time there is an update
  // This way form will stay clean and input fields will be hidden after details have been saved
  ngOnChanges(changes) {
    if (!changes?.companyUser?.currentValue?.id) return;
    if (JSON.stringify(changes?.companyUser?.previousValue) !== JSON.stringify(changes?.companyUser?.currentValue)) {
      this.initForm();
    }
  }
  initForm() {
    this.form = this.formBuilder.group({
      note: [this.companyUser.agentNote]
    });
  }
  save() {
    const data = JSON.parse(JSON.stringify(this.companyUser));
    data.agentNote = this.form.get('note').value;
    this.store.dispatch(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__.CompanyUserActions.saveCompanyUserDetails({
      data
    }));
  }
  travelPortal() {
    this.store.dispatch(_actions_users_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.getOverrideToken({
      username: this.companyUser.username
    }));
  }
}
CompanyUserDetailsFormComponent.ɵfac = function CompanyUserDetailsFormComponent_Factory(t) {
  return new (t || CompanyUserDetailsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.Actions));
};
CompanyUserDetailsFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: CompanyUserDetailsFormComponent,
  selectors: [["app-company-user-details-form"]],
  inputs: {
    companyUser: "companyUser"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]],
  decls: 1,
  vars: 1,
  consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "flex", "w-full", "justify-between"], [1, "text-xl"], [1, "text-xs", "text-gray-500"], ["class", "mt-6 mb-10 max-w-max", 4, "ngIf"], [1, "mt-6", "space-x-20", "border-b", "pb-3"], [1, "w-1/2", "sm:w-full"], [1, "w-full"], ["matInput", "", "formControlName", "note", "type", "text", "name", "note", "cols", "60", "rows", "10"], ["class", "flex cursor-pointer space-x-2", 4, "ngIf"], [1, "mt-6", "flex", "space-x-20", "border-b", "pb-6"], [1, "grid", "grid-cols-1", "gap-1"], ["class", "text-xs text-gray-500", 4, "ngIf"], [1, "mt-6", "grid"], [1, "mb-3", "text-xs", "uppercase", "text-gray-500"], [1, "mb-6", "grid", "grid-cols-4", "gap-3", "md:grid-cols-2", "xs:grid-cols-1"], [1, "break-words"], [1, "grid", "grid-cols-4", "gap-3", "border-b", "pb-6", "md:grid-cols-2", "xs:grid-cols-1"], [1, "my-6", "grid", "grid-cols-2", "gap-3", "border-b", "pb-6", "md:grid-cols-1"], [1, "grid"], [1, "grid", "grid-cols-2", "gap-3", "xs:grid-cols-1"], [1, "mt-6", "mb-10", "max-w-max"], ["type", "submit", "mat-stroked-button", "", 1, "border-current", "text-current", 3, "click"], ["size", "small", "color", "current", 4, "ngIf"], [4, "ngIf"], ["class", "ml-4", "mat-button", "", "color", "primary", 3, "routerLink", 4, "ngIf"], ["size", "small", "color", "current"], [1, "material-icons", "ml-2", "text-lg"], ["mat-button", "", "color", "primary", 1, "ml-4", 3, "routerLink"], [1, "flex", "cursor-pointer", "space-x-2"], [1, "flex", "flex-1", "items-center", "text-xs", "text-gray-500"], ["type", "reset", "mat-button", "", 1, "small-button", 3, "click"], ["type", "submit", "mat-stroked-button", "", "color", "primary", 1, "small-button", 3, "click"]],
  template: function CompanyUserDetailsFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, CompanyUserDetailsFormComponent_form_0_Template, 99, 24, "form", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _global_dot_loader_dot_loader_component__WEBPACK_IMPORTED_MODULE_6__.DotLoaderComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_7__.DibDatePipe],
  encapsulation: 2
});

/***/ }),

/***/ 94309:
/*!*****************************************************************************************************!*\
  !*** ./src/app/companies/company-users/company-user-details/company-user-details-tabs.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyUserDetailsTabsComponent": () => (/* binding */ CompanyUserDetailsTabsComponent)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _bookings_company_user_bookings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bookings/company-user-bookings.component */ 5497);




function CompanyUserDetailsTabsComponent_ng_container_6_app_company_user_bookings_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-company-user-bookings", 5);
} if (rf & 2) {
    const id_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("userId", id_r1)("isActiveCart", true);
} }
function CompanyUserDetailsTabsComponent_ng_container_6_app_company_user_bookings_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-company-user-bookings", 5);
} if (rf & 2) {
    const id_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("userId", id_r1)("isActiveCart", false);
} }
function CompanyUserDetailsTabsComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CompanyUserDetailsTabsComponent_ng_container_6_app_company_user_bookings_1_Template, 1, 2, "app-company-user-bookings", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CompanyUserDetailsTabsComponent_ng_container_6_app_company_user_bookings_2_Template, 1, 2, "app-company-user-bookings", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "past");
} }
const _c0 = function (a0) { return [a0]; };
class CompanyUserDetailsTabsComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor() {
        super(...arguments);
        this.activeTab = 'active';
    }
}
CompanyUserDetailsTabsComponent.ɵfac = /*@__PURE__*/ function () { let ɵCompanyUserDetailsTabsComponent_BaseFactory; return function CompanyUserDetailsTabsComponent_Factory(t) { return (ɵCompanyUserDetailsTabsComponent_BaseFactory || (ɵCompanyUserDetailsTabsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](CompanyUserDetailsTabsComponent)))(t || CompanyUserDetailsTabsComponent); }; }();
CompanyUserDetailsTabsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CompanyUserDetailsTabsComponent, selectors: [["app-company-user-details-tabs"]], inputs: { companyUser: "companyUser" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [[1, "mt-4", "flex", "flex-col", "text-sm", "xs:text-xs"], [1, "mb-4", "flex", "whitespace-nowrap"], [1, "cursor-pointer", "p-2", "pt-0", "uppercase", 3, "ngClass", "click"], [4, "ngIf"], [3, "userId", "isActiveCart", 4, "ngIf"], [3, "userId", "isActiveCart"]], template: function CompanyUserDetailsTabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompanyUserDetailsTabsComponent_Template_span_click_2_listener() { return ctx.activeTab = "active"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Active Trips ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompanyUserDetailsTabsComponent_Template_span_click_4_listener() { return ctx.activeTab = "past"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Past Trips ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CompanyUserDetailsTabsComponent_ng_container_6_Template, 3, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx.activeTab === "active" ? "cursor-pointer border-b-2 border-dib-green-600" : "opacity-50"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx.activeTab === "past" ? "cursor-pointer border-b-2 border-dib-green-600" : "opacity-50"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.companyUser == null ? null : ctx.companyUser.id);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _bookings_company_user_bookings_component__WEBPACK_IMPORTED_MODULE_1__.CompanyUserBookingsComponent], encapsulation: 2 });


/***/ }),

/***/ 42586:
/*!************************************************************************************************!*\
  !*** ./src/app/companies/company-users/company-user-details/company-user-details.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyUserDetailsComponent": () => (/* binding */ CompanyUserDetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 62566);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 10538);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base.component */ 83607);
/* harmony import */ var _reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../reducers/company-users.reducer */ 15569);
/* harmony import */ var _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/company-users.actions */ 30668);
/* harmony import */ var _reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../reducers/companies.reducer */ 47856);
/* harmony import */ var _actions_companies_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/companies.actions */ 29814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../global/wrapper/main/wrapper-main.component */ 4122);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/breadcrumbs/breadcrumbs.component */ 25758);
/* harmony import */ var _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../global/breadcrumbs/breadcrumb/breadcrumb.component */ 62718);
/* harmony import */ var _global_wrapper_details_wrapper_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../global/wrapper/details/wrapper-details.component */ 24019);
/* harmony import */ var _global_wrapper_details_tab_wrapper_details_tab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../global/wrapper/details/tab/wrapper-details-tab.component */ 36246);
/* harmony import */ var _company_user_details_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./company-user-details-form.component */ 54728);
/* harmony import */ var _company_user_details_tabs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./company-user-details-tabs.component */ 94309);


















function CompanyUserDetailsComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-company-user-details-form", 11)(2, "app-company-user-details-tabs", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const companyUser_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("companyUser", companyUser_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("companyUser", companyUser_r1);
  }
}
class CompanyUserDetailsComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(route, store) {
    super();
    this.route = route;
    this.store = store;
    this.companyUser$ = this.store.select(_reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_1__.getSelectedCompanyUser);
    // After company user is loaded get the related company object
    this.companyLoading$ = this.store.select(_reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_3__.companiesLoading);
    this.company$ = this.companyUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(item => !!item?.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.mergeMap)(user => {
      return this.store.select((0,_reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_3__.selectCompanyById)(user.companyId));
    }));
    this.loading$ = this.store.select(_reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_1__.companyUsersLoading);
    // Only subscribe to initial page loading and use it for the page wrapper loader
    // Subsequent loading states will be handled differently using the main loading$ prop
    this.firstTimeLoading$ = this.loading$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeWhile)(loading => loading, true));
    this.activeTab = 'active';
  }
  ngOnInit() {
    // Load company user data if not already in store
    this.subscriptions.add(this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.withLatestFrom)(this.store.select(_reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_1__.getSelectedCompanyUser))).subscribe(([{
      id
    }, traveler]) => {
      if (!traveler.id || traveler.id !== id) {
        this.store.dispatch(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_2__.CompanyUserActions.loadAndSelectCompanyUser({
          id
        }));
      }
    }));
    // Load related company details every time user changes
    this.subscriptions.add(this.companyUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(item => !!item?.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.distinctUntilChanged)((prev, current) => {
      return prev?.companyId === current?.companyId;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.mergeMap)(item => (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.forkJoin)([(0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(item), this.store.select((0,_reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_3__.selectCompanyById)(item.companyId)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.take)(1))]))).subscribe(([user, company]) => {
      if (!company?.id || company?.id !== user.companyId) {
        // Load company details if we don't have one in store already
        this.store.dispatch(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_4__.CompanyActions.loadCompany({
          id: user.companyId
        }));
      }
    }));
  }
}
CompanyUserDetailsComponent.ɵfac = function CompanyUserDetailsComponent_Factory(t) {
  return new (t || CompanyUserDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_22__.Store));
};
CompanyUserDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: CompanyUserDetailsComponent,
  selectors: [["app-company-user-details"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
  decls: 29,
  vars: 35,
  consts: [["label", "Dashboard", "route", "/"], ["label", "Companies", "route", "/companies"], ["label", "Company Users", "route", "/companies/users"], [3, "label", "loading"], [3, "loading", "item"], ["slot", "tabs"], ["type", "header"], [3, "title", "loading", "route"], ["active", "true", 3, "title"], ["slot", "content", 4, "ngIf"], ["slot", "content"], [3, "companyUser"]],
  template: function CompanyUserDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "dib-wrapper-main")(1, "dib-breadcrumbs");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "dib-breadcrumb", 0)(3, "dib-breadcrumb", 1)(4, "dib-breadcrumb", 2)(5, "dib-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "dib-wrapper-details", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](11, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "dib-wrapper-details-tab", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "dib-wrapper-details-tab", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](15, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](16, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](17, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](18, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](20, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "dib-wrapper-details-tab", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22, "Company User");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "dib-wrapper-details-tab", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](24, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](26, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](27, CompanyUserDetailsComponent_ng_container_27_Template, 3, 2, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](28, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_4_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_9_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 11, ctx.companyUser$)) == null ? null : tmp_0_0.fullName)("loading", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 13, ctx.firstTimeLoading$));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("loading", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](9, 15, ctx.firstTimeLoading$))("item", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](10, 17, ctx.companyUser$));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](15, 19, ctx.company$)) == null ? null : tmp_4_0.corporationName)("loading", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](16, 21, ctx.companyLoading$))("route", "/companies/users/" + ((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](17, 23, ctx.companyUser$)) == null ? null : tmp_6_0.id) + "/company/" + ((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](18, 25, ctx.company$)) == null ? null : tmp_6_0.id));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](20, 27, ctx.company$)) == null ? null : tmp_7_0.corporationName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](24, 29, ctx.companyUser$)) == null ? null : tmp_8_0.fullName);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", (tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](26, 31, ctx.companyUser$)) == null ? null : tmp_9_0.fullName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](28, 33, ctx.companyUser$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_5__.WrapperMainComponent, _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbsComponent, _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbComponent, _global_wrapper_details_wrapper_details_component__WEBPACK_IMPORTED_MODULE_8__.WrapperDetailsComponent, _global_wrapper_details_tab_wrapper_details_tab_component__WEBPACK_IMPORTED_MODULE_9__.WrapperDetailsTabComponent, _company_user_details_form_component__WEBPACK_IMPORTED_MODULE_10__.CompanyUserDetailsFormComponent, _company_user_details_tabs_component__WEBPACK_IMPORTED_MODULE_11__.CompanyUserDetailsTabsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 28515:
/*!***********************************************************************!*\
  !*** ./src/app/companies/company-users/company-user-details/index.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyUserDetailsComponent": () => (/* reexport safe */ _company_user_details_component__WEBPACK_IMPORTED_MODULE_0__.CompanyUserDetailsComponent),
/* harmony export */   "CompanyUserDetailsFormComponent": () => (/* reexport safe */ _company_user_details_form_component__WEBPACK_IMPORTED_MODULE_1__.CompanyUserDetailsFormComponent)
/* harmony export */ });
/* harmony import */ var _company_user_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-user-details.component */ 42586);
/* harmony import */ var _company_user_details_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-user-details-form.component */ 54728);




/***/ }),

/***/ 10415:
/*!********************************************************************************************!*\
  !*** ./src/app/companies/company-users/company-users-list/company-users-list.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyUsersListComponent": () => (/* binding */ CompanyUsersListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 99635);
/* harmony import */ var _base_listing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base-listing.component */ 74760);
/* harmony import */ var _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../actions/company-users.actions */ 30668);
/* harmony import */ var _reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../reducers/company-users.reducer */ 15569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/wrapper/main/wrapper-main.component */ 4122);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global/breadcrumbs/breadcrumbs.component */ 25758);
/* harmony import */ var _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../global/breadcrumbs/breadcrumb/breadcrumb.component */ 62718);
/* harmony import */ var _global_wrapper_search_green_search_wrapper_green_search_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/wrapper/search/green-search-wrapper/green-search-wrapper.component */ 86957);
/* harmony import */ var _global_wrapper_listing_wrapper_listing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../global/wrapper/listing/wrapper-listing.component */ 40542);
/* harmony import */ var _global_wrapper_listing_total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../global/wrapper/listing/total/wrapper-listing-total.component */ 57905);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 36060);




















function CompanyUsersListComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "First name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CompanyUsersListComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](row_r20.firstname);
  }
}
function CompanyUsersListComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CompanyUsersListComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](row_r21.lastname);
  }
}
function CompanyUsersListComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CompanyUsersListComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](row_r22.companyName);
  }
}
function CompanyUsersListComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CompanyUsersListComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, row_r23.role));
  }
}
function CompanyUsersListComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CompanyUsersListComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](row_r24.username);
  }
}
function CompanyUsersListComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CompanyUsersListComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](row_r25.phone);
  }
}
function CompanyUsersListComponent_th_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-progress-bar", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CompanyUsersListComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CompanyUsersListComponent_th_36_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("colSpan", ctx_r12.columns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, ctx_r12.companyUsers$).loading);
  }
}
function CompanyUsersListComponent_th_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "th", 44);
  }
}
const _c0 = function (a1) {
  return ["/companies/users", a1];
};
function CompanyUsersListComponent_td_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 45)(1, "a", 46)(2, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](1, _c0, row_r27.id));
  }
}
function CompanyUsersListComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 48);
  }
}
function CompanyUsersListComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 48);
  }
}
function CompanyUsersListComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 49);
  }
}
function CompanyUsersListComponent_tr_43_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Loading data. This can take a few seconds, please be patient. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
}
function CompanyUsersListComponent_tr_43_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, " No records found. Please refine your search and try again. ");
  }
}
function CompanyUsersListComponent_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 50)(1, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CompanyUsersListComponent_tr_43_ng_container_2_Template, 2, 0, "ng-container", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, CompanyUsersListComponent_tr_43_ng_template_4_Template, 1, 0, "ng-template", null, 53, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](5);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("colSpan", ctx_r18.columns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 3, ctx_r18.companyUsers$).loading)("ngIfElse", _r30);
  }
}
function CompanyUsersListComponent_mat_paginator_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-paginator", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("page", function CompanyUsersListComponent_mat_paginator_45_Template_mat_paginator_page_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r32.onPageChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("length", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 3, ctx_r19.companyUsers$).pagination.totalElements)("pageIndex", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 5, ctx_r19.companyUsers$).pagination.number)("pageSize", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 7, ctx_r19.companyUsers$).pagination.size);
  }
}
const _c1 = function () {
  return ["loader"];
};
class CompanyUsersListComponent extends _base_listing_component__WEBPACK_IMPORTED_MODULE_0__.BaseListingComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.companyUsers$ = this.store.select(_reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_2__.selectCompanyUsers);
    this.tableDataSource$ = this.store.select(_reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_2__.selectCompanyUsersData);
  }
  ngOnInit() {
    this.sortActive = 'id';
    this.sortDirection = 'asc';
    this.columns = ['firstname', 'lastname', 'companyName', 'role', 'username', 'phone', 'actions'];
    this.loadAction = _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_1__.CompanyUserActions.loadCompanyUsers;
    this.reloadOnActions = [_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_1__.CompanyUserActions.saveCompanyUserDetailsSuccess];
    super.syncFiltersWithRouteParams({
      params: ['firstname', 'lastname', 'companyName', 'role', 'username', 'phone'],
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
    }).then(rxjs__WEBPACK_IMPORTED_MODULE_10__.noop);
  }
  onSearchBookings(params) {
    this.router.navigate(['/companies/bookings'], {
      queryParams: this.validateReferenceType(params)
    }).then(rxjs__WEBPACK_IMPORTED_MODULE_10__.noop);
  }
}
CompanyUsersListComponent.ɵfac = function CompanyUsersListComponent_Factory(t) {
  return new (t || CompanyUsersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injector));
};
CompanyUsersListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: CompanyUsersListComponent,
  selectors: [["app-company-users-list"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
  decls: 47,
  vars: 14,
  consts: [["label", "Dashboard", "route", "/"], ["label", "Companies", "route", "/companies"], ["label", "Company Users", "route", "/companies/users"], ["activeTab", "users", 3, "filters", "searchUsers", "searchCompanies", "searchBookings"], ["slot", "title"], ["slot", "hidden-columns-message"], [1, "hidden", "sm:block"], ["slot", "total"], [3, "total"], ["slot", "table"], ["mat-table", "", "matSort", "", "matSortDisableClear", "", 1, "whitespace-nowrap", 3, "matSortActive", "matSortDirection", "dataSource", "matSortChange"], ["matColumnDef", "firstname"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "lastname"], ["class", "xs:hidden", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "xs:hidden", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "companyName"], ["matColumnDef", "role"], ["matColumnDef", "username"], ["class", "whitespace-normal break-all pr-2", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "phone"], ["class", "sm:hidden", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "sm:hidden", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "loader"], ["mat-header-cell", "", 3, "colSpan", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "whitespace-normal", 4, "matNoDataRow"], ["slot", "pagination"], [3, "length", "pageIndex", "pageSize", "page", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "xs:hidden"], ["mat-cell", "", 1, "xs:hidden"], ["mat-cell", "", 1, "whitespace-normal", "break-all", "pr-2"], ["mat-header-cell", "", "mat-sort-header", "", 1, "sm:hidden"], ["mat-cell", "", 1, "sm:hidden"], ["mat-header-cell", "", 3, "colSpan"], [4, "ngIf"], ["mode", "indeterminate", 1, "absolute"], ["mat-header-cell", ""], ["mat-cell", "", 1, "text-right"], ["mat-icon-button", "", "color", "accent", "matTooltip", "View company user details", "matTooltipPosition", "left", 1, "hover:text-dib-green-600", 3, "routerLink"], [1, "material-icons"], ["mat-header-row", ""], ["mat-row", ""], [1, "whitespace-normal"], [1, "border-b", "p-6", "text-center", 3, "colSpan"], [4, "ngIf", "ngIfElse"], ["noData", ""], [3, "length", "pageIndex", "pageSize", "page"]],
  template: function CompanyUsersListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "dib-wrapper-main")(1, "dib-breadcrumbs");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "dib-breadcrumb", 0)(3, "dib-breadcrumb", 1)(4, "dib-breadcrumb", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "dib-green-search-wrapper", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("searchUsers", function CompanyUsersListComponent_Template_dib_green_search_wrapper_searchUsers_5_listener($event) {
        return ctx.filterMultiple($event, true);
      })("searchCompanies", function CompanyUsersListComponent_Template_dib_green_search_wrapper_searchCompanies_5_listener($event) {
        return ctx.onSearchCompanies($event);
      })("searchBookings", function CompanyUsersListComponent_Template_dib_green_search_wrapper_searchBookings_5_listener($event) {
        return ctx.onSearchBookings($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "dib-wrapper-listing");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](7, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Company Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](9, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "* Some columns are hidden due to small screen size");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](12, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "dib-wrapper-listing-total", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](15, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "table", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("matSortChange", function CompanyUsersListComponent_Template_table_matSortChange_16_listener($event) {
        return ctx.onSortChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](17, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, CompanyUsersListComponent_th_18_Template, 2, 0, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, CompanyUsersListComponent_td_19_Template, 2, 1, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](20, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, CompanyUsersListComponent_th_21_Template, 2, 0, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, CompanyUsersListComponent_td_22_Template, 2, 1, "td", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](23, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, CompanyUsersListComponent_th_24_Template, 2, 0, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, CompanyUsersListComponent_td_25_Template, 2, 1, "td", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](26, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, CompanyUsersListComponent_th_27_Template, 2, 0, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, CompanyUsersListComponent_td_28_Template, 3, 3, "td", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](29, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, CompanyUsersListComponent_th_30_Template, 2, 0, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, CompanyUsersListComponent_td_31_Template, 2, 1, "td", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](32, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, CompanyUsersListComponent_th_33_Template, 2, 0, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, CompanyUsersListComponent_td_34_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](35, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](36, CompanyUsersListComponent_th_36_Template, 3, 4, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](37, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](38, CompanyUsersListComponent_th_38_Template, 1, 0, "th", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, CompanyUsersListComponent_td_39_Template, 4, 3, "td", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](40, CompanyUsersListComponent_tr_40_Template, 1, 0, "tr", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](41, CompanyUsersListComponent_tr_41_Template, 1, 0, "tr", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](42, CompanyUsersListComponent_tr_42_Template, 1, 0, "tr", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](43, CompanyUsersListComponent_tr_43_Template, 6, 5, "tr", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](44, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](45, CompanyUsersListComponent_mat_paginator_45_Template, 4, 9, "mat-paginator", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](46, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("filters", ctx.filters);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("total", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](14, 9, ctx.companyUsers$).pagination == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](14, 9, ctx.companyUsers$).pagination.totalElements);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matSortActive", ctx.sortActive)("matSortDirection", ctx.sortDirection)("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](13, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](46, 11, ctx.companyUsers$).pagination);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_3__.WrapperMainComponent, _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsComponent, _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbComponent, _global_wrapper_search_green_search_wrapper_green_search_wrapper_component__WEBPACK_IMPORTED_MODULE_6__.GreenSearchWrapperComponent, _global_wrapper_listing_wrapper_listing_component__WEBPACK_IMPORTED_MODULE_7__.WrapperListingComponent, _global_wrapper_listing_total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_8__.WrapperListingTotalComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatNoDataRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortHeader, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBar, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatAnchor, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterLinkWithHref, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginator, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.TitleCasePipe],
  encapsulation: 2
});

/***/ }),

/***/ 11624:
/*!*********************************************************************!*\
  !*** ./src/app/companies/company-users/company-users-list/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyUsersListComponent": () => (/* reexport safe */ _company_users_list_component__WEBPACK_IMPORTED_MODULE_0__.CompanyUsersListComponent)
/* harmony export */ });
/* harmony import */ var _company_users_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-users-list.component */ 10415);



/***/ }),

/***/ 69194:
/*!*****************************************************************!*\
  !*** ./src/app/companies/company-users/company-users.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyUsersModule": () => (/* binding */ CompanyUsersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _company_users_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-users-list */ 11624);
/* harmony import */ var _company_user_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-user-details */ 28515);
/* harmony import */ var _company_user_company_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-user-company-details */ 16921);
/* harmony import */ var _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/wrapper/main/wrapper-main.module */ 49722);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global/breadcrumbs/breadcrumbs.module */ 2367);
/* harmony import */ var _global_wrapper_search_wrapper_search_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global/wrapper/search/wrapper-search.module */ 38765);
/* harmony import */ var _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../global/wrapper/listing/wrapper-listing.module */ 23745);
/* harmony import */ var _global_wrapper_details_wrapper_details_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../global/wrapper/details/wrapper-details.module */ 69569);
/* harmony import */ var _global_dot_loader_dot_loader_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../global/dot-loader/dot-loader.module */ 67995);
/* harmony import */ var _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/pipes/pipes.module */ 59916);
/* harmony import */ var _company_details__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../company-details */ 63844);
/* harmony import */ var _bookings_company_user_bookings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bookings/company-user-bookings.component */ 5497);
/* harmony import */ var _company_user_details_company_user_details_tabs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./company-user-details/company-user-details-tabs.component */ 94309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);

























class CompanyUsersModule {
}
CompanyUsersModule.ɵfac = function CompanyUsersModule_Factory(t) { return new (t || CompanyUsersModule)(); };
CompanyUsersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: CompanyUsersModule });
CompanyUsersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_3__.WrapperMainModule,
        _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsModule,
        _global_wrapper_search_wrapper_search_module__WEBPACK_IMPORTED_MODULE_5__.WrapperSearchModule,
        _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_6__.WrapperListingModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__.MatProgressBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginatorModule,
        _global_wrapper_details_wrapper_details_module__WEBPACK_IMPORTED_MODULE_7__.WrapperDetailsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule,
        _global_dot_loader_dot_loader_module__WEBPACK_IMPORTED_MODULE_8__.DotLoaderModule,
        _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__.DibPipesModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule,
        _company_details__WEBPACK_IMPORTED_MODULE_10__.CompanyDetailsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](CompanyUsersModule, { declarations: [_company_users_list__WEBPACK_IMPORTED_MODULE_0__.CompanyUsersListComponent,
        _company_user_details__WEBPACK_IMPORTED_MODULE_1__.CompanyUserDetailsComponent,
        _company_user_company_details__WEBPACK_IMPORTED_MODULE_2__.CompanyUserCompanyDetailsComponent,
        _company_user_details__WEBPACK_IMPORTED_MODULE_1__.CompanyUserDetailsFormComponent,
        _company_user_details_company_user_details_tabs_component__WEBPACK_IMPORTED_MODULE_12__.CompanyUserDetailsTabsComponent,
        _bookings_company_user_bookings_component__WEBPACK_IMPORTED_MODULE_11__.CompanyUserBookingsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_3__.WrapperMainModule,
        _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsModule,
        _global_wrapper_search_wrapper_search_module__WEBPACK_IMPORTED_MODULE_5__.WrapperSearchModule,
        _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_6__.WrapperListingModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__.MatProgressBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginatorModule,
        _global_wrapper_details_wrapper_details_module__WEBPACK_IMPORTED_MODULE_7__.WrapperDetailsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule,
        _global_dot_loader_dot_loader_module__WEBPACK_IMPORTED_MODULE_8__.DotLoaderModule,
        _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__.DibPipesModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule,
        _company_details__WEBPACK_IMPORTED_MODULE_10__.CompanyDetailsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule], exports: [_company_user_details__WEBPACK_IMPORTED_MODULE_1__.CompanyUserDetailsFormComponent, _company_user_details_company_user_details_tabs_component__WEBPACK_IMPORTED_MODULE_12__.CompanyUserDetailsTabsComponent, _bookings_company_user_bookings_component__WEBPACK_IMPORTED_MODULE_11__.CompanyUserBookingsComponent] }); })();


/***/ }),

/***/ 1979:
/*!**************************************************!*\
  !*** ./src/app/companies/company-users/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyUserCompanyDetailsComponent": () => (/* reexport safe */ _company_user_company_details__WEBPACK_IMPORTED_MODULE_1__.CompanyUserCompanyDetailsComponent),
/* harmony export */   "CompanyUserDetailsComponent": () => (/* reexport safe */ _company_user_details__WEBPACK_IMPORTED_MODULE_2__.CompanyUserDetailsComponent),
/* harmony export */   "CompanyUsersListComponent": () => (/* reexport safe */ _company_users_list__WEBPACK_IMPORTED_MODULE_3__.CompanyUsersListComponent),
/* harmony export */   "CompanyUsersModule": () => (/* reexport safe */ _company_users_module__WEBPACK_IMPORTED_MODULE_0__.CompanyUsersModule)
/* harmony export */ });
/* harmony import */ var _company_users_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-users.module */ 69194);
/* harmony import */ var _company_user_company_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-user-company-details */ 16921);
/* harmony import */ var _company_user_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-user-details */ 28515);
/* harmony import */ var _company_users_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-users-list */ 11624);






/***/ }),

/***/ 52922:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/radio.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_RADIO_DEFAULT_OPTIONS": () => (/* binding */ MAT_RADIO_DEFAULT_OPTIONS),
/* harmony export */   "MAT_RADIO_DEFAULT_OPTIONS_FACTORY": () => (/* binding */ MAT_RADIO_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "MAT_RADIO_GROUP": () => (/* binding */ MAT_RADIO_GROUP),
/* harmony export */   "MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR": () => (/* binding */ MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR),
/* harmony export */   "MatRadioButton": () => (/* binding */ MatRadioButton),
/* harmony export */   "MatRadioChange": () => (/* binding */ MatRadioChange),
/* harmony export */   "MatRadioGroup": () => (/* binding */ MatRadioGroup),
/* harmony export */   "MatRadioModule": () => (/* binding */ MatRadioModule),
/* harmony export */   "_MatRadioButtonBase": () => (/* binding */ _MatRadioButtonBase),
/* harmony export */   "_MatRadioGroupBase": () => (/* binding */ _MatRadioGroupBase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ 22560);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 24218);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 48971);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);










/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const _c0 = ["input"];
const _c1 = function (a0) {
  return {
    enterDuration: a0
  };
};
const _c2 = ["*"];
const MAT_RADIO_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-radio-default-options', {
  providedIn: 'root',
  factory: MAT_RADIO_DEFAULT_OPTIONS_FACTORY
});
function MAT_RADIO_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: 'accent'
  };
}
// Increasing integer for generating unique ids for radio components.
let nextUniqueId = 0;
/**
 * Provider Expression that allows mat-radio-group to register as a ControlValueAccessor. This
 * allows it to support [(ngModel)] and ngControl.
 * @docs-private
 */
const MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatRadioGroup),
  multi: true
};
/** Change event object emitted by MatRadio and MatRadioGroup. */
class MatRadioChange {
  constructor( /** The MatRadioButton that emits the change event. */
  source, /** The value of the MatRadioButton. */
  value) {
    this.source = source;
    this.value = value;
  }
}
/**
 * Injection token that can be used to inject instances of `MatRadioGroup`. It serves as
 * alternative token to the actual `MatRadioGroup` class which could cause unnecessary
 * retention of the class and its component metadata.
 */
const MAT_RADIO_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatRadioGroup');
/**
 * Base class with all of the `MatRadioGroup` functionality.
 * @docs-private
 */
class _MatRadioGroupBase {
  constructor(_changeDetector) {
    this._changeDetector = _changeDetector;
    /** Selected value for the radio group. */
    this._value = null;
    /** The HTML name attribute applied to radio buttons in this group. */
    this._name = `mat-radio-group-${nextUniqueId++}`;
    /** The currently selected radio button. Should match value. */
    this._selected = null;
    /** Whether the `value` has been set to its initial value. */
    this._isInitialized = false;
    /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
    this._labelPosition = 'after';
    /** Whether the radio group is disabled. */
    this._disabled = false;
    /** Whether the radio group is required. */
    this._required = false;
    /** The method to be called in order to update ngModel */
    this._controlValueAccessorChangeFn = () => {};
    /**
     * onTouch function registered via registerOnTouch (ControlValueAccessor).
     * @docs-private
     */
    this.onTouched = () => {};
    /**
     * Event emitted when the group value changes.
     * Change events are only emitted when the value changes due to user interaction with
     * a radio button (the same behavior as `<input type-"radio">`).
     */
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /** Name of the radio button group. All radio buttons inside this group will use this name. */
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this._updateRadioButtonNames();
  }
  /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
  get labelPosition() {
    return this._labelPosition;
  }
  set labelPosition(v) {
    this._labelPosition = v === 'before' ? 'before' : 'after';
    this._markRadiosForCheck();
  }
  /**
   * Value for the radio-group. Should equal the value of the selected radio button if there is
   * a corresponding radio button with a matching value. If there is not such a corresponding
   * radio button, this value persists to be applied in case a new radio button is added with a
   * matching value.
   */
  get value() {
    return this._value;
  }
  set value(newValue) {
    if (this._value !== newValue) {
      // Set this before proceeding to ensure no circular loop occurs with selection.
      this._value = newValue;
      this._updateSelectedRadioFromValue();
      this._checkSelectedRadioButton();
    }
  }
  _checkSelectedRadioButton() {
    if (this._selected && !this._selected.checked) {
      this._selected.checked = true;
    }
  }
  /**
   * The currently selected radio button. If set to a new radio button, the radio group value
   * will be updated to match the new selected button.
   */
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.value = selected ? selected.value : null;
    this._checkSelectedRadioButton();
  }
  /** Whether the radio group is disabled */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
    this._markRadiosForCheck();
  }
  /** Whether the radio group is required */
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
    this._markRadiosForCheck();
  }
  /**
   * Initialize properties once content children are available.
   * This allows us to propagate relevant attributes to associated buttons.
   */
  ngAfterContentInit() {
    // Mark this component as initialized in AfterContentInit because the initial value can
    // possibly be set by NgModel on MatRadioGroup, and it is possible that the OnInit of the
    // NgModel occurs *after* the OnInit of the MatRadioGroup.
    this._isInitialized = true;
  }
  /**
   * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
   * radio buttons upon their blur.
   */
  _touch() {
    if (this.onTouched) {
      this.onTouched();
    }
  }
  _updateRadioButtonNames() {
    if (this._radios) {
      this._radios.forEach(radio => {
        radio.name = this.name;
        radio._markForCheck();
      });
    }
  }
  /** Updates the `selected` radio button from the internal _value state. */
  _updateSelectedRadioFromValue() {
    // If the value already matches the selected radio, do nothing.
    const isAlreadySelected = this._selected !== null && this._selected.value === this._value;
    if (this._radios && !isAlreadySelected) {
      this._selected = null;
      this._radios.forEach(radio => {
        radio.checked = this.value === radio.value;
        if (radio.checked) {
          this._selected = radio;
        }
      });
    }
  }
  /** Dispatch change event with current selection and group value. */
  _emitChangeEvent() {
    if (this._isInitialized) {
      this.change.emit(new MatRadioChange(this._selected, this._value));
    }
  }
  _markRadiosForCheck() {
    if (this._radios) {
      this._radios.forEach(radio => radio._markForCheck());
    }
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value
   */
  writeValue(value) {
    this.value = value;
    this._changeDetector.markForCheck();
  }
  /**
   * Registers a callback to be triggered when the model value changes.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  /**
   * Registers a callback to be triggered when the control is touched.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
   * @param isDisabled Whether the control should be disabled.
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetector.markForCheck();
  }
}
_MatRadioGroupBase.ɵfac = function _MatRadioGroupBase_Factory(t) {
  return new (t || _MatRadioGroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
_MatRadioGroupBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatRadioGroupBase,
  inputs: {
    color: "color",
    name: "name",
    labelPosition: "labelPosition",
    value: "value",
    selected: "selected",
    disabled: "disabled",
    required: "required"
  },
  outputs: {
    change: "change"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatRadioGroupBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * A group of radio buttons. May contain one or more `<mat-radio-button>` elements.
 */
class MatRadioGroup extends _MatRadioGroupBase {}
MatRadioGroup.ɵfac = /* @__PURE__ */function () {
  let ɵMatRadioGroup_BaseFactory;
  return function MatRadioGroup_Factory(t) {
    return (ɵMatRadioGroup_BaseFactory || (ɵMatRadioGroup_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRadioGroup)))(t || MatRadioGroup);
  };
}();
MatRadioGroup.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatRadioGroup,
  selectors: [["mat-radio-group"]],
  contentQueries: function MatRadioGroup_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatRadioButton, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._radios = _t);
    }
  },
  hostAttrs: ["role", "radiogroup", 1, "mat-radio-group"],
  exportAs: ["matRadioGroup"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
    provide: MAT_RADIO_GROUP,
    useExisting: MatRadioGroup
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRadioGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-radio-group',
      exportAs: 'matRadioGroup',
      providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
        provide: MAT_RADIO_GROUP,
        useExisting: MatRadioGroup
      }],
      host: {
        'role': 'radiogroup',
        'class': 'mat-radio-group'
      }
    }]
  }], null, {
    _radios: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatRadioButton), {
        descendants: true
      }]
    }]
  });
})();
// Boilerplate for applying mixins to MatRadioButton.
/** @docs-private */
class MatRadioButtonBase {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
}
const _MatRadioButtonMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisableRipple)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinTabIndex)(MatRadioButtonBase));
/**
 * Base class with all of the `MatRadioButton` functionality.
 * @docs-private
 */
class _MatRadioButtonBase extends _MatRadioButtonMixinBase {
  constructor(radioGroup, elementRef, _changeDetector, _focusMonitor, _radioDispatcher, animationMode, _providerOverride, tabIndex) {
    super(elementRef);
    this._changeDetector = _changeDetector;
    this._focusMonitor = _focusMonitor;
    this._radioDispatcher = _radioDispatcher;
    this._providerOverride = _providerOverride;
    this._uniqueId = `mat-radio-${++nextUniqueId}`;
    /** The unique ID for the radio button. */
    this.id = this._uniqueId;
    /**
     * Event emitted when the checked state of this radio button changes.
     * Change events are only emitted when the value changes due to user interaction with
     * the radio button (the same behavior as `<input type-"radio">`).
     */
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Whether this radio is checked. */
    this._checked = false;
    /** Value assigned to this radio. */
    this._value = null;
    /** Unregister function for _radioDispatcher */
    this._removeUniqueSelectionListener = () => {};
    // Assertions. Ideally these should be stripped out by the compiler.
    // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.
    this.radioGroup = radioGroup;
    this._noopAnimations = animationMode === 'NoopAnimations';
    if (tabIndex) {
      this.tabIndex = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(tabIndex, 0);
    }
    this._removeUniqueSelectionListener = _radioDispatcher.listen((id, name) => {
      if (id !== this.id && name === this.name) {
        this.checked = false;
      }
    });
  }
  /** Whether this radio button is checked. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    const newCheckedState = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
    if (this._checked !== newCheckedState) {
      this._checked = newCheckedState;
      if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
        this.radioGroup.selected = this;
      } else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
        // When unchecking the selected radio button, update the selected radio
        // property on the group.
        this.radioGroup.selected = null;
      }
      if (newCheckedState) {
        // Notify all radio buttons with the same name to un-check.
        this._radioDispatcher.notify(this.id, this.name);
      }
      this._changeDetector.markForCheck();
    }
  }
  /** The value of this radio button. */
  get value() {
    return this._value;
  }
  set value(value) {
    if (this._value !== value) {
      this._value = value;
      if (this.radioGroup !== null) {
        if (!this.checked) {
          // Update checked when the value changed to match the radio group's value
          this.checked = this.radioGroup.value === value;
        }
        if (this.checked) {
          this.radioGroup.selected = this;
        }
      }
    }
  }
  /** Whether the label should appear after or before the radio button. Defaults to 'after' */
  get labelPosition() {
    return this._labelPosition || this.radioGroup && this.radioGroup.labelPosition || 'after';
  }
  set labelPosition(value) {
    this._labelPosition = value;
  }
  /** Whether the radio button is disabled. */
  get disabled() {
    return this._disabled || this.radioGroup !== null && this.radioGroup.disabled;
  }
  set disabled(value) {
    this._setDisabled((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value));
  }
  /** Whether the radio button is required. */
  get required() {
    return this._required || this.radioGroup && this.radioGroup.required;
  }
  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
  }
  /** Theme color of the radio button. */
  get color() {
    // As per Material design specifications the selection control radio should use the accent color
    // palette by default. https://material.io/guidelines/components/selection-controls.html
    return this._color || this.radioGroup && this.radioGroup.color || this._providerOverride && this._providerOverride.color || 'accent';
  }
  set color(newValue) {
    this._color = newValue;
  }
  /** ID of the native input element inside `<mat-radio-button>` */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  /** Focuses the radio button. */
  focus(options, origin) {
    if (origin) {
      this._focusMonitor.focusVia(this._inputElement, origin, options);
    } else {
      this._inputElement.nativeElement.focus(options);
    }
  }
  /**
   * Marks the radio button as needing checking for change detection.
   * This method is exposed because the parent radio group will directly
   * update bound properties of the radio button.
   */
  _markForCheck() {
    // When group value changes, the button will not be notified. Use `markForCheck` to explicit
    // update radio button's status
    this._changeDetector.markForCheck();
  }
  ngOnInit() {
    if (this.radioGroup) {
      // If the radio is inside a radio group, determine if it should be checked
      this.checked = this.radioGroup.value === this._value;
      if (this.checked) {
        this.radioGroup.selected = this;
      }
      // Copy name from parent radio group
      this.name = this.radioGroup.name;
    }
  }
  ngDoCheck() {
    this._updateTabIndex();
  }
  ngAfterViewInit() {
    this._updateTabIndex();
    this._focusMonitor.monitor(this._elementRef, true).subscribe(focusOrigin => {
      if (!focusOrigin && this.radioGroup) {
        this.radioGroup._touch();
      }
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._removeUniqueSelectionListener();
  }
  /** Dispatch change event with current value. */
  _emitChangeEvent() {
    this.change.emit(new MatRadioChange(this, this._value));
  }
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  _onInputClick(event) {
    // We have to stop propagation for click events on the visual hidden input element.
    // By default, when a user clicks on a label element, a generated click event will be
    // dispatched on the associated input element. Since we are using a label element as our
    // root container, the click event on the `radio-button` will be executed twice.
    // The real click event will bubble up, and the generated click event also tries to bubble up.
    // This will lead to multiple click events.
    // Preventing bubbling for the second event will solve that issue.
    event.stopPropagation();
  }
  /** Triggered when the radio button receives an interaction from the user. */
  _onInputInteraction(event) {
    // We always have to stop propagation on the change event.
    // Otherwise the change event, from the input element, will bubble up and
    // emit its event object to the `change` output.
    event.stopPropagation();
    if (!this.checked && !this.disabled) {
      const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
      this.checked = true;
      this._emitChangeEvent();
      if (this.radioGroup) {
        this.radioGroup._controlValueAccessorChangeFn(this.value);
        if (groupValueChanged) {
          this.radioGroup._emitChangeEvent();
        }
      }
    }
  }
  /** Sets the disabled state and marks for check if a change occurred. */
  _setDisabled(value) {
    if (this._disabled !== value) {
      this._disabled = value;
      this._changeDetector.markForCheck();
    }
  }
  /** Gets the tabindex for the underlying input element. */
  _updateTabIndex() {
    const group = this.radioGroup;
    let value;
    // Implement a roving tabindex if the button is inside a group. For most cases this isn't
    // necessary, because the browser handles the tab order for inputs inside a group automatically,
    // but we need an explicitly higher tabindex for the selected button in order for things like
    // the focus trap to pick it up correctly.
    if (!group || !group.selected || this.disabled) {
      value = this.tabIndex;
    } else {
      value = group.selected === this ? this.tabIndex : -1;
    }
    if (value !== this._previousTabIndex) {
      // We have to set the tabindex directly on the DOM node, because it depends on
      // the selected state which is prone to "changed after checked errors".
      const input = this._inputElement?.nativeElement;
      if (input) {
        input.setAttribute('tabindex', value + '');
        this._previousTabIndex = value;
      }
    }
  }
}
_MatRadioButtonBase.ɵfac = function _MatRadioButtonBase_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
};
_MatRadioButtonBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatRadioButtonBase,
  viewQuery: function _MatRadioButtonBase_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
    }
  },
  inputs: {
    id: "id",
    name: "name",
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    ariaDescribedby: ["aria-describedby", "ariaDescribedby"],
    checked: "checked",
    value: "value",
    labelPosition: "labelPosition",
    disabled: "disabled",
    required: "required",
    color: "color"
  },
  outputs: {
    change: "change"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatRadioButtonBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _MatRadioGroupBase
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor
    }, {
      type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.UniqueSelectionDispatcher
    }, {
      type: undefined
    }, {
      type: undefined
    }, {
      type: undefined
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-labelledby']
    }],
    ariaDescribedby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-describedby']
    }],
    checked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _inputElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['input']
    }]
  });
})();
/**
 * A Material design radio-button. Typically placed inside of `<mat-radio-group>` elements.
 */
class MatRadioButton extends _MatRadioButtonBase {
  constructor(radioGroup, elementRef, changeDetector, focusMonitor, radioDispatcher, animationMode, providerOverride, tabIndex) {
    super(radioGroup, elementRef, changeDetector, focusMonitor, radioDispatcher, animationMode, providerOverride, tabIndex);
  }
}
MatRadioButton.ɵfac = function MatRadioButton_Factory(t) {
  return new (t || MatRadioButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RADIO_GROUP, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.UniqueSelectionDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RADIO_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'));
};
MatRadioButton.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatRadioButton,
  selectors: [["mat-radio-button"]],
  hostAttrs: [1, "mat-radio-button"],
  hostVars: 17,
  hostBindings: function MatRadioButton_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatRadioButton_focus_HostBindingHandler() {
        return ctx._inputElement.nativeElement.focus();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", null)("id", ctx.id)("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-radio-checked", ctx.checked)("mat-radio-disabled", ctx.disabled)("_mat-animation-noopable", ctx._noopAnimations)("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
    }
  },
  inputs: {
    disableRipple: "disableRipple",
    tabIndex: "tabIndex"
  },
  exportAs: ["matRadioButton"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c2,
  decls: 13,
  vars: 19,
  consts: [[1, "mat-radio-label"], ["label", ""], [1, "mat-radio-container"], [1, "mat-radio-outer-circle"], [1, "mat-radio-inner-circle"], ["type", "radio", 1, "mat-radio-input", 3, "id", "checked", "disabled", "required", "change", "click"], ["input", ""], ["mat-ripple", "", 1, "mat-radio-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-radio-persistent-ripple"], [1, "mat-radio-label-content"], [2, "display", "none"]],
  template: function MatRadioButton_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0, 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3)(4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MatRadioButton_Template_input_change_5_listener($event) {
        return ctx._onInputInteraction($event);
      })("click", function MatRadioButton_Template_input_click_5_listener($event) {
        return ctx._onInputClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9)(10, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\xA0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.inputId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled)("required", ctx.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", ctx.name)("value", ctx.value)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, ctx._noopAnimations ? 0 : 150));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-radio-label-before", ctx.labelPosition == "before");
    }
  },
  dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple],
  styles: [".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-radio-label{-webkit-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;opacity:0;transition:transform ease 280ms,background-color ease 280ms,opacity linear 1ms 280ms;width:20px;transform:scale(0.001);-webkit-print-color-adjust:exact;color-adjust:exact}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5);opacity:1;transition:transform ease 280ms,background-color ease 280ms}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-label-content{-webkit-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none;top:0;left:0}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{opacity:0;position:absolute;top:0;left:0;margin:0;width:100%;height:100%;cursor:inherit;z-index:-1}.mat-radio-input:focus~.mat-focus-indicator::before{content:\"\"}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRadioButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-radio-button',
      inputs: ['disableRipple', 'tabIndex'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      exportAs: 'matRadioButton',
      host: {
        'class': 'mat-radio-button',
        '[class.mat-radio-checked]': 'checked',
        '[class.mat-radio-disabled]': 'disabled',
        '[class._mat-animation-noopable]': '_noopAnimations',
        '[class.mat-primary]': 'color === "primary"',
        '[class.mat-accent]': 'color === "accent"',
        '[class.mat-warn]': 'color === "warn"',
        // Needs to be removed since it causes some a11y issues (see #21266).
        '[attr.tabindex]': 'null',
        '[attr.id]': 'id',
        '[attr.aria-label]': 'null',
        '[attr.aria-labelledby]': 'null',
        '[attr.aria-describedby]': 'null',
        // Note: under normal conditions focus shouldn't land on this element, however it may be
        // programmatically set, for example inside of a focus trap, in this case we want to forward
        // the focus to the native element.
        '(focus)': '_inputElement.nativeElement.focus()'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<!-- TODO(jelbourn): render the radio on either side of the content -->\n<!-- TODO(mtlin): Evaluate trade-offs of using native radio vs. cost of additional bindings. -->\n<label [attr.for]=\"inputId\" class=\"mat-radio-label\" #label>\n  <!-- The actual 'radio' part of the control. -->\n  <span class=\"mat-radio-container\">\n    <span class=\"mat-radio-outer-circle\"></span>\n    <span class=\"mat-radio-inner-circle\"></span>\n    <input #input class=\"mat-radio-input\" type=\"radio\"\n        [id]=\"inputId\"\n        [checked]=\"checked\"\n        [disabled]=\"disabled\"\n        [attr.name]=\"name\"\n        [attr.value]=\"value\"\n        [required]=\"required\"\n        [attr.aria-label]=\"ariaLabel\"\n        [attr.aria-labelledby]=\"ariaLabelledby\"\n        [attr.aria-describedby]=\"ariaDescribedby\"\n        (change)=\"_onInputInteraction($event)\"\n        (click)=\"_onInputClick($event)\">\n\n    <!-- The ripple comes after the input so that we can target it with a CSS\n         sibling selector when the input is focused. -->\n    <span mat-ripple class=\"mat-radio-ripple mat-focus-indicator\"\n         [matRippleTrigger]=\"label\"\n         [matRippleDisabled]=\"_isRippleDisabled()\"\n         [matRippleCentered]=\"true\"\n         [matRippleRadius]=\"20\"\n         [matRippleAnimation]=\"{enterDuration: _noopAnimations ? 0 : 150}\">\n\n      <span class=\"mat-ripple-element mat-radio-persistent-ripple\"></span>\n    </span>\n  </span>\n\n  <!-- The label content for radio control. -->\n  <span class=\"mat-radio-label-content\" [class.mat-radio-label-before]=\"labelPosition == 'before'\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
      styles: [".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-radio-label{-webkit-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;opacity:0;transition:transform ease 280ms,background-color ease 280ms,opacity linear 1ms 280ms;width:20px;transform:scale(0.001);-webkit-print-color-adjust:exact;color-adjust:exact}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5);opacity:1;transition:transform ease 280ms,background-color ease 280ms}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-label-content{-webkit-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none;top:0;left:0}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{opacity:0;position:absolute;top:0;left:0;margin:0;width:100%;height:100%;cursor:inherit;z-index:-1}.mat-radio-input:focus~.mat-focus-indicator::before{content:\"\"}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}"]
    }]
  }], function () {
    return [{
      type: MatRadioGroup,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_RADIO_GROUP]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor
    }, {
      type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.UniqueSelectionDispatcher
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_RADIO_DEFAULT_OPTIONS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['tabindex']
      }]
    }];
  }, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatRadioModule {}
MatRadioModule.ɵfac = function MatRadioModule_Factory(t) {
  return new (t || MatRadioModule)();
};
MatRadioModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatRadioModule
});
MatRadioModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRadioModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
      exports: [MatRadioGroup, MatRadioButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
      declarations: [MatRadioGroup, MatRadioButton]
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_companies_companies_module_ts.js.map