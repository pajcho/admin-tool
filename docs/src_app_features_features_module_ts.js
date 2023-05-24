"use strict";
(self["webpackChunkadmin_tool"] = self["webpackChunkadmin_tool"] || []).push([["src_app_features_features_module_ts"],{

/***/ 27842:
/*!************************************************!*\
  !*** ./src/app/features/features.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturesComponent": () => (/* binding */ FeaturesComponent)
/* harmony export */ });
/* harmony import */ var _actions_features_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/features.actions */ 71176);
/* harmony import */ var _reducers_features_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/features.reducer */ 33371);
/* harmony import */ var _actions_confirmation_dialog_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/confirmation-dialog.actions */ 65516);
/* harmony import */ var _base_listing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-listing.component */ 74760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/breadcrumbs/breadcrumbs.component */ 25758);
/* harmony import */ var _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/breadcrumbs/breadcrumb/breadcrumb.component */ 62718);
/* harmony import */ var _global_wrapper_listing_wrapper_listing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global/wrapper/listing/wrapper-listing.component */ 40542);
/* harmony import */ var _global_wrapper_listing_total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/wrapper/listing/total/wrapper-listing-total.component */ 57905);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global/wrapper/main/wrapper-main.component */ 4122);



















function FeaturesComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Feature ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function FeaturesComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](row_r13.id);
  }
}
function FeaturesComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Descrption");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function FeaturesComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](row_r14.description);
  }
}
function FeaturesComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function FeaturesComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 29)(1, "span", 30)(2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("text-red-600", !row_r15.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r15.enabled ? "Enabled" : "Disabled", " ");
  }
}
function FeaturesComponent_th_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-progress-bar", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function FeaturesComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, FeaturesComponent_th_26_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("colSpan", ctx_r6.columns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, ctx_r6.features$).loading);
  }
}
function FeaturesComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "th", 35);
  }
}
function FeaturesComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 36)(1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function FeaturesComponent_td_29_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const row_r17 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r18.toggleStatus(row_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matTooltip", row_r17.enabled ? "Disable feature" : "Enable feature");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r17.enabled ? "hide_source" : "check_circle_outline", " ");
  }
}
function FeaturesComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 39);
  }
}
function FeaturesComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 39);
  }
}
function FeaturesComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 40);
  }
}
function FeaturesComponent_tr_33_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Loading data. This can take a few seconds, please be patient. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
}
function FeaturesComponent_tr_33_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, " No records found. Please refine your search and try again. ");
  }
}
function FeaturesComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 41)(1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, FeaturesComponent_tr_33_ng_container_2_Template, 2, 0, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, FeaturesComponent_tr_33_ng_template_4_Template, 1, 0, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](5);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("colSpan", ctx_r12.columns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 3, ctx_r12.features$).loading)("ngIfElse", _r22);
  }
}
const _c0 = function () {
  return ["loader"];
};
class FeaturesComponent extends _base_listing_component__WEBPACK_IMPORTED_MODULE_3__.BaseListingComponent {
  constructor() {
    super(...arguments);
    this.features$ = this.store.select(_reducers_features_reducer__WEBPACK_IMPORTED_MODULE_1__.selectFeatures);
    this.tableDataSource$ = this.store.select(_reducers_features_reducer__WEBPACK_IMPORTED_MODULE_1__.selectFeaturesData);
  }
  ngOnInit() {
    this.sortActive = 'id';
    this.sortDirection = 'asc';
    this.columns = ['id', 'description', 'enabled', 'actions'];
    super.ngOnInit();
    this.store.dispatch(_actions_features_actions__WEBPACK_IMPORTED_MODULE_0__.FeatureActions.loadFeatures());
  }
  // Link native CDK sorting and pagination mechanisms since we do not get
  // paginated data from the BE and will handle everything on front end
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  // Override base filter method and use native CDK filtering
  filter(value) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  toggleStatus(item) {
    this.store.dispatch(_actions_confirmation_dialog_actions__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogActions.show({
      data: {
        template: `
            Are you sure you want to ${item.enabled ? 'disable' : 'enable'}
            <strong>${item.id}</strong>?
          `,
        confirm: {
          label: item.enabled ? 'Disable' : 'Enable',
          color: item.enabled ? 'warn' : 'primary'
        }
      },
      ok: () => {
        this.store.dispatch(_actions_features_actions__WEBPACK_IMPORTED_MODULE_0__.FeatureActions.toggleFeatureStatus({
          data: item
        }));
      }
    }));
  }
}
FeaturesComponent.ɵfac = /*@__PURE__*/function () {
  let ɵFeaturesComponent_BaseFactory;
  return function FeaturesComponent_Factory(t) {
    return (ɵFeaturesComponent_BaseFactory || (ɵFeaturesComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](FeaturesComponent)))(t || FeaturesComponent);
  };
}();
FeaturesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: FeaturesComponent,
  selectors: [["app-features"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
  decls: 37,
  vars: 14,
  consts: [["label", "Dashboard", "route", "/"], ["label", "Features", "route", "/features"], ["slot", "filters"], ["matInput", "", "autocomplete", "off", 3, "keyup"], ["slot", "total"], [3, "total"], ["slot", "actions"], ["slot", "table"], ["mat-table", "", "matSort", "", "matSortDisableClear", "", 1, "whitespace-nowrap", 3, "matSortActive", "matSortDirection", "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "whitespace-normal break-all pr-2", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["class", "whitespace-normal break-words pr-2", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "enabled"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "loader"], ["mat-header-cell", "", 3, "colSpan", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "whitespace-normal", 4, "matNoDataRow"], ["slot", "pagination"], [3, "length", "pageSize"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "whitespace-normal", "break-all", "pr-2"], ["mat-cell", "", 1, "whitespace-normal", "break-words", "pr-2"], ["mat-cell", ""], [1, "flex", "items-center", "text-xs"], [1, "material-icons", "mr-1", "text-xs", "text-gray-200"], ["mat-header-cell", "", 3, "colSpan"], [4, "ngIf"], ["mode", "indeterminate", 1, "absolute"], ["mat-header-cell", ""], ["mat-cell", "", 1, "text-right"], ["mat-icon-button", "", "color", "accent", "matTooltipPosition", "left", 3, "matTooltip", "click"], [1, "material-icons"], ["mat-header-row", ""], ["mat-row", ""], [1, "whitespace-normal"], [1, "border-b", "p-6", "text-center", 3, "colSpan"], [4, "ngIf", "ngIfElse"], ["noData", ""]],
  template: function FeaturesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "dib-wrapper-main")(1, "dib-breadcrumbs");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "dib-breadcrumb", 0)(3, "dib-breadcrumb", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "dib-wrapper-listing");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](5, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-form-field")(7, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Filter results");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup", function FeaturesComponent_Template_input_keyup_9_listener($event) {
        return ctx.filter($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](10, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "dib-wrapper-listing-total", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](13, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](14, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "table", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](16, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, FeaturesComponent_th_17_Template, 2, 0, "th", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, FeaturesComponent_td_18_Template, 2, 1, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](19, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, FeaturesComponent_th_20_Template, 2, 0, "th", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, FeaturesComponent_td_21_Template, 2, 1, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](22, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, FeaturesComponent_th_23_Template, 2, 0, "th", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, FeaturesComponent_td_24_Template, 5, 3, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](25, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, FeaturesComponent_th_26_Template, 3, 4, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](27, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, FeaturesComponent_th_28_Template, 1, 0, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, FeaturesComponent_td_29_Template, 4, 2, "td", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, FeaturesComponent_tr_30_Template, 1, 0, "tr", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, FeaturesComponent_tr_31_Template, 1, 0, "tr", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](32, FeaturesComponent_tr_32_Template, 1, 0, "tr", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, FeaturesComponent_tr_33_Template, 6, 5, "tr", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](34, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](35, "mat-paginator", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](36, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("total", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](12, 9, ctx.features$).data.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matSortActive", ctx.sortActive)("matSortDirection", ctx.sortDirection)("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](13, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("length", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](36, 11, ctx.features$).data.length)("pageSize", 10);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatNoDataRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBar, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsComponent, _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbComponent, _global_wrapper_listing_wrapper_listing_component__WEBPACK_IMPORTED_MODULE_6__.WrapperListingComponent, _global_wrapper_listing_total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_7__.WrapperListingTotalComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip, _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_8__.WrapperMainComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 65790:
/*!*********************************************!*\
  !*** ./src/app/features/features.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturesModule": () => (/* binding */ FeaturesModule)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _features_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features.routing */ 19927);
/* harmony import */ var _features_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features.component */ 27842);
/* harmony import */ var _effects_feature_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../effects/feature.effects */ 21837);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global/breadcrumbs/breadcrumbs.module */ 2367);
/* harmony import */ var _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/wrapper/listing/wrapper-listing.module */ 23745);
/* harmony import */ var _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/wrapper/main/wrapper-main.module */ 49722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 60124);





















class FeaturesModule {
}
FeaturesModule.ɵfac = function FeaturesModule_Factory(t) { return new (t || FeaturesModule)(); };
FeaturesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: FeaturesModule });
FeaturesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _features_routing__WEBPACK_IMPORTED_MODULE_0__.routing,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBarModule,
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.EffectsModule.forFeature([_effects_feature_effects__WEBPACK_IMPORTED_MODULE_2__.FeatureEffects]),
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
        _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_4__.WrapperListingModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule,
        _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_5__.WrapperMainModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](FeaturesModule, { declarations: [_features_component__WEBPACK_IMPORTED_MODULE_1__.FeaturesComponent, _features_component__WEBPACK_IMPORTED_MODULE_1__.FeaturesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBarModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.EffectsFeatureModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
        _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_4__.WrapperListingModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule,
        _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_5__.WrapperMainModule] }); })();


/***/ }),

/***/ 19927:
/*!**********************************************!*\
  !*** ./src/app/features/features.routing.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routing": () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _features_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features.component */ 27842);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.guard */ 3870);
/* harmony import */ var _auth_super_admin_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/super-admin.guard */ 93560);




const routes = [
    {
        path: '',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        // Have to use children option to prevent all guards from executing. This way they will execute one by one
        children: [
            {
                path: '',
                component: _features_component__WEBPACK_IMPORTED_MODULE_0__.FeaturesComponent,
                canActivate: [_auth_super_admin_guard__WEBPACK_IMPORTED_MODULE_2__.SuperAdminGuard],
                data: { title: 'Features' },
            },
        ],
    },
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes);


/***/ })

}]);
//# sourceMappingURL=src_app_features_features_module_ts.js.map