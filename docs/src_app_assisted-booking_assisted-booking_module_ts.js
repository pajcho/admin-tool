"use strict";
(self["webpackChunkadmin_tool"] = self["webpackChunkadmin_tool"] || []).push([["src_app_assisted-booking_assisted-booking_module_ts"],{

/***/ 75469:
/*!****************************************************************!*\
  !*** ./src/app/assisted-booking/assisted-booking.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssistedBookingComponent": () => (/* binding */ AssistedBookingComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 62566);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs/operators */ 10538);
/* harmony import */ var _reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/companies.reducer */ 47856);
/* harmony import */ var _reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/company-users.reducer */ 15569);
/* harmony import */ var _actions_companies_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/companies.actions */ 29814);
/* harmony import */ var _actions_company_users_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/company-users.actions */ 30668);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ 83607);
/* harmony import */ var _reducers_pnr_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/pnr.reducer */ 62152);
/* harmony import */ var _actions_pnr_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/pnr.actions */ 99911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/breadcrumbs/breadcrumbs.component */ 25758);
/* harmony import */ var _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global/breadcrumbs/breadcrumb/breadcrumb.component */ 62718);
/* harmony import */ var _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../global/wrapper/main/wrapper-main.component */ 4122);
/* harmony import */ var _global_wrapper_details_wrapper_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../global/wrapper/details/wrapper-details.component */ 24019);
/* harmony import */ var _global_wrapper_details_tab_wrapper_details_tab_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../global/wrapper/details/tab/wrapper-details-tab.component */ 36246);
/* harmony import */ var _validate_pnr_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./validate-pnr.component */ 46545);
/* harmony import */ var _product_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-details.component */ 19543);
/* harmony import */ var _product_updates_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product-updates.component */ 43928);






















function AssistedBookingComponent_ng_container_12_dib_wrapper_details_tab_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "dib-wrapper-details-tab", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AssistedBookingComponent_ng_container_12_dib_wrapper_details_tab_9_Template_dib_wrapper_details_tab_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r6.goToUpdates());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " Updates ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](3, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pnr_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().ngIf;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵattribute"]("active", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](1, 2, ctx_r5.activeStep$) === "updates");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](pnr_r4.updates.length);
  }
}
function AssistedBookingComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "dib-wrapper-details-tab", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AssistedBookingComponent_ng_container_12_Template_dib_wrapper_details_tab_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r9.goToValidate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " Validate PNR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "dib-wrapper-details-tab", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "dib-wrapper-details-tab", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AssistedBookingComponent_ng_container_12_Template_dib_wrapper_details_tab_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r11.goToDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, " Product Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, AssistedBookingComponent_ng_container_12_dib_wrapper_details_tab_9_Template, 5, 4, "dib-wrapper-details-tab", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const pnr_r4 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵattribute"]("active", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 7, ctx_r0.activeStep$) === "validate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("disabled", !pnr_r4.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("disabled", !pnr_r4.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵattribute"]("active", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](7, 9, ctx_r0.activeStep$) === "details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", pnr_r4.valid && pnr_r4.hasUpdates);
  }
}
function AssistedBookingComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-validate-pnr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "async");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("company", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](1, 2, ctx_r1.company$))("booker", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 4, ctx_r1.companyUser$));
  }
}
function AssistedBookingComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-product-details", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "async");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("company", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](1, 3, ctx_r2.company$))("booker", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 5, ctx_r2.companyUser$))("pnr", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 7, ctx_r2.validatedPNR$));
  }
}
function AssistedBookingComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-product-updates", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("updates", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](1, 1, ctx_r3.validatedPNR$).updates);
  }
}
class AssistedBookingComponent extends _base_component__WEBPACK_IMPORTED_MODULE_4__.BaseComponent {
  constructor(formBuilder, route, store) {
    super();
    this.formBuilder = formBuilder;
    this.route = route;
    this.store = store;
    this.activeStep$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.BehaviorSubject('validate');
    this.companyUser$ = this.store.select(_reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_1__.getSelectedCompanyUser).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(user => !!user?.id));
    // Show initial loader until both company and company user details are completely loaded
    this.firstTimeLoading$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([this.store.select(_reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_0__.companiesLoading), this.store.select(_reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_1__.companyUsersLoading)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.takeWhile)(([companyLoading, companyUserLoading]) => {
      return companyLoading || companyUserLoading;
    }, true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(([companyLoading, companyUserLoading]) => companyLoading || companyUserLoading));
    this.validatedPNR$ = this.store.select(_reducers_pnr_reducer__WEBPACK_IMPORTED_MODULE_5__.selectPNRData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.distinctUntilChanged)((prev, current) => JSON.stringify(prev) === JSON.stringify(current)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.tap)(pnr => {
      // If PNR is validated for the first time, and we are still on the validation
      // page we want to automatically redirect user to the details page
      if (pnr.valid && this.activeStep$.getValue() === 'validate') this.goToDetails();
    }));
  }
  ngOnInit() {
    // Load company data if not already in store
    this.subscriptions.add(this.companyUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(user => !!user?.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.mergeMap)(user => (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.forkJoin)([(0,rxjs__WEBPACK_IMPORTED_MODULE_25__.of)(user), this.store.select((0,_reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_0__.selectCompanyById)(user.companyId)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.take)(1))]))).subscribe(([{
      companyId
    }, company]) => {
      if (!company?.id || company?.id !== companyId) {
        // Load company details if we don't have one in store already
        this.store.dispatch(_actions_companies_actions__WEBPACK_IMPORTED_MODULE_2__.CompanyActions.loadCompany({
          id: companyId
        }));
      }
      this.company$ = this.store.select((0,_reducers_companies_reducer__WEBPACK_IMPORTED_MODULE_0__.selectCompanyById)(companyId)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(company => !!company?.id));
    }));
    // Load company user data if not already in store
    this.subscriptions.add(this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.withLatestFrom)(this.store.select(_reducers_company_users_reducer__WEBPACK_IMPORTED_MODULE_1__.getSelectedCompanyUser))).subscribe(([{
      id
    }, traveller]) => {
      if (!traveller.id || traveller.id !== id) {
        this.store.dispatch(_actions_company_users_actions__WEBPACK_IMPORTED_MODULE_3__.CompanyUserActions.loadAndSelectCompanyUser({
          id
        }));
      }
    }));
  }
  goToValidate() {
    this.activeStep$.next('validate');
  }
  goToDetails() {
    this.activeStep$.next('details');
  }
  goToUpdates() {
    this.activeStep$.next('updates');
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.store.dispatch(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_6__.PnrActions.resetValidatedPnr());
  }
}
AssistedBookingComponent.ɵfac = function AssistedBookingComponent_Factory(t) {
  return new (t || AssistedBookingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_28__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_29__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_30__.Store));
};
AssistedBookingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: AssistedBookingComponent,
  selectors: [["app-assisted-booking"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]],
  decls: 20,
  vars: 18,
  consts: [["label", "Dashboard", "route", "/"], ["label", "Companies", "route", "/companies"], ["label", "Company Users", "route", "/companies/users"], [3, "label", "route", "loading"], ["label", "Agent Assisted Booking", "route", "/assisted-booking"], [3, "loading"], ["slot", "tabs", 4, "ngIf"], ["slot", "content"], [3, "ngSwitch"], ["ngSwitchCase", "validate"], ["ngSwitchCase", "details"], ["ngSwitchCase", "updates"], ["slot", "tabs"], [3, "click"], ["type", "header"], [3, "click", 4, "ngIf"], ["slot", "badge"], [3, "company", "booker"], [3, "company", "booker", "pnr"], [3, "updates"]],
  template: function AssistedBookingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "dib-wrapper-main")(1, "dib-breadcrumbs");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "dib-breadcrumb", 0)(3, "dib-breadcrumb", 1)(4, "dib-breadcrumb", 2)(5, "dib-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "dib-breadcrumb", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "dib-wrapper-details", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, AssistedBookingComponent_ng_container_12_Template, 10, 11, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](14, 7)(15, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](16, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](17, AssistedBookingComponent_ng_template_17_Template, 3, 6, "ng-template", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](18, AssistedBookingComponent_ng_template_18_Template, 4, 9, "ng-template", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](19, AssistedBookingComponent_ng_template_19_Template, 2, 3, "ng-template", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("label", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](6, 6, ctx.companyUser$)) == null ? null : tmp_0_0.fullName)("route", "/companies/users/" + ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](7, 8, ctx.companyUser$)) == null ? null : tmp_1_0.id))("loading", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](8, 10, ctx.firstTimeLoading$));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("loading", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](11, 12, ctx.firstTimeLoading$));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](13, 14, ctx.validatedPNR$));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitch", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](16, 16, ctx.activeStep$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_31__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_31__.NgSwitchCase, _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbsComponent, _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__.BreadcrumbComponent, _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_9__.WrapperMainComponent, _global_wrapper_details_wrapper_details_component__WEBPACK_IMPORTED_MODULE_10__.WrapperDetailsComponent, _global_wrapper_details_tab_wrapper_details_tab_component__WEBPACK_IMPORTED_MODULE_11__.WrapperDetailsTabComponent, _validate_pnr_component__WEBPACK_IMPORTED_MODULE_12__.ValidatePNRComponent, _product_details_component__WEBPACK_IMPORTED_MODULE_13__.ProductDetailsComponent, _product_updates_component__WEBPACK_IMPORTED_MODULE_14__.ProductUpdatesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_31__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 57354:
/*!*************************************************************!*\
  !*** ./src/app/assisted-booking/assisted-booking.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssistedBookingModule": () => (/* binding */ AssistedBookingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _assisted_booking_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assisted-booking.component */ 75469);
/* harmony import */ var _assisted_booking_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assisted-booking.routing */ 78739);
/* harmony import */ var _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/wrapper/main/wrapper-main.module */ 49722);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global/breadcrumbs/breadcrumbs.module */ 2367);
/* harmony import */ var _global_wrapper_details_wrapper_details_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/wrapper/details/wrapper-details.module */ 69569);
/* harmony import */ var _effects_pnr_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../effects/pnr.effects */ 13545);
/* harmony import */ var _global_dot_loader_dot_loader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global/dot-loader/dot-loader.module */ 67995);
/* harmony import */ var _validate_pnr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validate-pnr.component */ 46545);
/* harmony import */ var _product_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-details.component */ 19543);
/* harmony import */ var _effects_cost_center_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../effects/cost-center.effects */ 69190);
/* harmony import */ var _flight_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./flight-details.component */ 83115);
/* harmony import */ var _effects_payment_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../effects/payment.effects */ 61038);
/* harmony import */ var _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/pipes/pipes.module */ 59916);
/* harmony import */ var _global_plural_plural_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../global/plural/plural.module */ 14992);
/* harmony import */ var _bookings_details_cart_cart_tabs_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../bookings/details/cart/cart-tabs.module */ 48203);
/* harmony import */ var _flight_destination_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./flight-destination.component */ 686);
/* harmony import */ var _product_updates_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product-updates.component */ 43928);
/* harmony import */ var _product_details_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./product-details-form.component */ 94034);
/* harmony import */ var _effects_checkout_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../effects/checkout.effects */ 84990);
/* harmony import */ var _effects_vendor_payment_provider_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../effects/vendor-payment-provider.effects */ 14173);
/* harmony import */ var _effects_vendor_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../effects/vendor.effects */ 49272);
/* harmony import */ var _effects_product_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../effects/product.effects */ 76435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/router */ 60124);
































class AssistedBookingModule {
}
AssistedBookingModule.ɵfac = function AssistedBookingModule_Factory(t) { return new (t || AssistedBookingModule)(); };
AssistedBookingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: AssistedBookingModule });
AssistedBookingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule,
        _assisted_booking_routing__WEBPACK_IMPORTED_MODULE_1__.routing,
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_24__.EffectsModule.forFeature([
            _effects_pnr_effects__WEBPACK_IMPORTED_MODULE_5__.PNREffects,
            _effects_cost_center_effects__WEBPACK_IMPORTED_MODULE_9__.CostCenterEffects,
            _effects_payment_effects__WEBPACK_IMPORTED_MODULE_11__.PaymentEffects,
            _effects_checkout_effects__WEBPACK_IMPORTED_MODULE_18__.CheckoutEffects,
            _effects_vendor_payment_provider_effects__WEBPACK_IMPORTED_MODULE_19__.VendorsPaymentProviderEffects,
            _effects_product_effects__WEBPACK_IMPORTED_MODULE_21__.ProductEffects,
            _effects_vendor_effects__WEBPACK_IMPORTED_MODULE_20__.VendorEffects,
        ]),
        _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_28__.ReactiveFormsModule,
        _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
        _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_2__.WrapperMainModule,
        _global_wrapper_details_wrapper_details_module__WEBPACK_IMPORTED_MODULE_4__.WrapperDetailsModule,
        _global_dot_loader_dot_loader_module__WEBPACK_IMPORTED_MODULE_6__.DotLoaderModule,
        _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__.DibPipesModule,
        _global_plural_plural_module__WEBPACK_IMPORTED_MODULE_13__.PluralModule,
        _bookings_details_cart_cart_tabs_module__WEBPACK_IMPORTED_MODULE_14__.CartTabsModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__.MatRadioModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AssistedBookingModule, { declarations: [_assisted_booking_component__WEBPACK_IMPORTED_MODULE_0__.AssistedBookingComponent,
        _validate_pnr_component__WEBPACK_IMPORTED_MODULE_7__.ValidatePNRComponent,
        _product_details_component__WEBPACK_IMPORTED_MODULE_8__.ProductDetailsComponent,
        _product_details_form_component__WEBPACK_IMPORTED_MODULE_17__.ProductDetailsFormComponent,
        _product_updates_component__WEBPACK_IMPORTED_MODULE_16__.ProductUpdatesComponent,
        _flight_details_component__WEBPACK_IMPORTED_MODULE_10__.FlightDetailsComponent,
        _flight_destination_component__WEBPACK_IMPORTED_MODULE_15__.FlightDestinationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_30__.RouterModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_24__.EffectsFeatureModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_28__.ReactiveFormsModule,
        _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
        _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_2__.WrapperMainModule,
        _global_wrapper_details_wrapper_details_module__WEBPACK_IMPORTED_MODULE_4__.WrapperDetailsModule,
        _global_dot_loader_dot_loader_module__WEBPACK_IMPORTED_MODULE_6__.DotLoaderModule,
        _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__.DibPipesModule,
        _global_plural_plural_module__WEBPACK_IMPORTED_MODULE_13__.PluralModule,
        _bookings_details_cart_cart_tabs_module__WEBPACK_IMPORTED_MODULE_14__.CartTabsModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__.MatRadioModule] }); })();


/***/ }),

/***/ 78739:
/*!**************************************************************!*\
  !*** ./src/app/assisted-booking/assisted-booking.routing.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routing": () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _assisted_booking_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assisted-booking.component */ 75469);
/* harmony import */ var _auth_super_admin_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/super-admin.guard */ 93560);



const routes = [
    {
        path: '',
        component: _assisted_booking_component__WEBPACK_IMPORTED_MODULE_0__.AssistedBookingComponent,
        canActivate: [_auth_super_admin_guard__WEBPACK_IMPORTED_MODULE_1__.SuperAdminGuard],
        data: { title: 'Agent Assisted Booking' },
    },
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes);


/***/ }),

/***/ 686:
/*!******************************************************************!*\
  !*** ./src/app/assisted-booking/flight-destination.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlightDestinationComponent": () => (/* binding */ FlightDestinationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base.component */ 83607);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/pipes/date.pipe */ 23341);





const _c0 = function (a0, a1, a2) { return { "cursor-pointer hover:shadow-md": a0, "bg-gray-100 bg-opacity-40 text-gray-400": a1, "outline outline-1 outline-emerald-600": a2 }; };
function FlightDestinationComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FlightDestinationComponent_ng_container_6_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const first_r2 = restoredCtx.first; const last_r3 = restoredCtx.last; const segment_r1 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](!first_r2 && !last_r3 && ctx_r4.select(segment_r1.arrival)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 8)(8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const segment_r1 = ctx.$implicit;
    const first_r2 = ctx.first;
    const last_r3 = ctx.last;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](9, _c0, !first_r2 && !last_r3, first_r2 || last_r3, ctx_r0.isSelected(segment_r1.arrival)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hidden", !ctx_r0.isSelected(segment_r1.arrival));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 6, first_r2 ? segment_r1.departure.time : segment_r1.arrival.time, "productDetailsWithTime"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](first_r2 ? segment_r1.departure.airportName : segment_r1.arrival.airportName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](first_r2 ? segment_r1.departure.airportCode : segment_r1.arrival.airportCode);
} }
class FlightDestinationComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor() {
        super(...arguments);
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    isSelected(destination) {
        return this.destination?.time === destination.time;
    }
    select(destination) {
        this.onSelect.emit(destination);
    }
}
FlightDestinationComponent.ɵfac = /*@__PURE__*/ function () { let ɵFlightDestinationComponent_BaseFactory; return function FlightDestinationComponent_Factory(t) { return (ɵFlightDestinationComponent_BaseFactory || (ɵFlightDestinationComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](FlightDestinationComponent)))(t || FlightDestinationComponent); }; }();
FlightDestinationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FlightDestinationComponent, selectors: [["app-flight-destination"]], inputs: { pnr: "pnr", destination: "destination" }, outputs: { onSelect: "onSelect" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 3, consts: [[1, "mt-8", "flex", "flex-col", "gap-12"], [1, "flex", "flex-row", "items-center", "gap-3", "bg-gray-100", "p-3"], [1, "material-icons", "self-start"], [1, "flex", "flex-row", "gap-6", "sm:flex-col"], [4, "ngFor", "ngForOf"], [1, "relative", "flex", "max-w-xs", "flex-col", "gap-2", "rounded", "p-4", "shadow", 3, "ngClass", "click"], [1, "absolute", "top-0", "-translate-y-1/2", "rounded", "bg-emerald-600", "px-2", "text-2xs", "capitalize", "text-white"], [1, "text-center", "text-2xs", "text-gray-300"], [1, "flex", "flex-col", "items-center", "gap-2"], [1, "text-center"], [1, "text-center", "text-xl", "font-bold"]], template: function FlightDestinationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "p", 1)(2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "help_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " It seems this is a return flight. However, outbound destination can not be determined automatically. Please select one of the available options bellow. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, FlightDestinationComponent_ng_container_6_Template, 12, 13, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("flex-col", ctx.pnr.firstFlight.segments.length > 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.pnr.firstFlight.segments);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_1__.DibDatePipe], encapsulation: 2 });


/***/ }),

/***/ 83115:
/*!**************************************************************!*\
  !*** ./src/app/assisted-booking/flight-details.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlightDetailsComponent": () => (/* binding */ FlightDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ 24851);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _global_plural_plural_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/plural/plural.component */ 41996);
/* harmony import */ var _bookings_details_cart_tabs_shared_cart_item_stat_cart_item_stat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bookings/details/cart/tabs/shared/cart-item-stat/cart-item-stat.component */ 51868);
/* harmony import */ var _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/pipes/date.pipe */ 23341);
/* harmony import */ var _utils_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/pipes/duration.pipe */ 77469);
/* harmony import */ var _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/pipes/dashes-to-spaces.pipe */ 61467);










function FlightDetailsComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "dibDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, ctx_r0.pnr.firstFlight.duration, "secondsToHM"), ") ");
} }
function FlightDetailsComponent_div_14_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "dibDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 31)(4, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "language");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const segment_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 4, segment_r2.layover, "secondsToHM"), " - ", segment_r2.shortLayover ? "Short" : "Long", " layover in ", segment_r2.arrival.airportName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Timezone: ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](7, 7, segment_r2.arrival.time, "z"), " ");
} }
function FlightDetailsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 16)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "dibDashesToSpaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 18)(9, "div", 19)(10, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 23)(19, "div", 24)(20, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 27)(26, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "dibDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 24)(30, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](34, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, FlightDetailsComponent_div_14_div_35_Template, 8, 10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const segment_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@openClose", ctx_r1.isOpen ? "open" : "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("hidden", !ctx_r1.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", segment_r2.marketingAirline.name, " \u25E6 ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 16, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 18, segment_r2.cabinClass)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", segment_r2.marketingCarrier + segment_r2.flightNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](12, 20, segment_r2.departure.time, "time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](17, 23, segment_r2.arrival.time, "time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", segment_r2.departure.airportName, " (", segment_r2.departure.airportCode, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](24, 26, segment_r2.departure.time, "productDetails"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Duration: ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](28, 29, segment_r2.duration, "secondsToHM"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", segment_r2.arrival.airportName, " (", segment_r2.arrival.airportCode, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](34, 32, segment_r2.arrival.time, "productDetails"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", segment_r2.layover);
} }
const _c0 = function (a0) { return { "gap-3 bg-dib-gray-100 p-6": a0 }; };
class FlightDetailsComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor() {
        super(...arguments);
        this.isOpen = false;
    }
    toggleDetails() {
        this.isOpen = !this.isOpen;
    }
}
FlightDetailsComponent.ɵfac = /*@__PURE__*/ function () { let ɵFlightDetailsComponent_BaseFactory; return function FlightDetailsComponent_Factory(t) { return (ɵFlightDetailsComponent_BaseFactory || (ɵFlightDetailsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](FlightDetailsComponent)))(t || FlightDetailsComponent); }; }();
FlightDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: FlightDetailsComponent, selectors: [["app-flight-details"]], inputs: { pnr: "pnr" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 29, vars: 28, consts: [["mat-stroked-button", "", "color", "primary", 1, "absolute", "top-[20px]", "flex", "h-[20px]", "w-[20px]", "min-w-min", "-translate-x-1/2", "cursor-pointer", "items-center", "justify-center", "rounded-full", "bg-white", "p-0", 3, "click"], [1, "material-icons", "text-sm"], [1, "flex", "flex-row", "gap-2", "rounded", "rounded", "bg-gray-50", "p-4", "sm:flex-col"], [1, "w-full", "border-r", "pr-3", "sm:border-b", "sm:border-r-0", "sm:pr-0", "sm:pb-3"], [1, "grid", "grid-flow-row", "auto-rows-min", "gap-1"], [1, "flex", "flex-row", "items-center", "justify-between", "gap-2"], [1, "flex", "cursor-pointer", "text-xl", "font-bold", 3, "click"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "pl-3", "sm:justify-between", "sm:pt-3", "sm:pl-0"], [1, "grid", "min-w-max", "transition-all", "transition", "duration-100", "sm:w-full", 3, "ngClass"], [1, "flex", "items-baseline", "whitespace-nowrap", "text-gray-500"], [1, "mr-1", "text-3xl"], ["single", "passenger", "multiple", "passengers", 3, "from"], [1, "mt-4", "grid", "min-w-max", "gap-4"], ["label", "Booking Reference"], [1, "mt-4", "mb-2", "flex", "flex-row", "items-center", "justify-between", "border-b", "pb-1"], [1, "rounded-xl", "bg-gray-500", "px-1.5", "text-2xs", "leading-normal", "text-white"], [1, "segment-timeline-wrapper", "grid", "grid-flow-col", "gap-4"], [1, "flex", "flex-col", "justify-evenly"], [1, "text-lg", "font-bold"], [1, "timeline", "flex"], [1, "line"], [1, "flex", "flex-col", "justify-between", "py-1"], [1, "flex", "flex-row", "items-center", "justify-between"], [1, "flex-1"], [1, "ml-3", "text-xs"], [1, "flex", "flex-row", "items-center"], [1, "flex-1", "text-xs", "text-gray-500"], ["class", "my-4 flex flex-wrap justify-between rounded bg-gradient-to-r from-blue-50 via-emerald-50 to-emerald-100 p-3", 4, "ngIf"], [1, "my-4", "flex", "flex-wrap", "justify-between", "rounded", "bg-gradient-to-r", "from-blue-50", "via-emerald-50", "to-emerald-100", "p-3"], [1, "ml-4", "flex", "items-center"], [1, "material-icons", "mr-1", "text-xs"]], template: function FlightDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FlightDetailsComponent_Template_a_click_0_listener() { return ctx.toggleDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FlightDetailsComponent_Template_h3_click_7_listener() { return ctx.toggleDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "dibDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "dibDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, FlightDetailsComponent_ng_container_13_Template, 3, 4, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, FlightDetailsComponent_div_14_Template, 36, 35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "dib-plural", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div")(26, "div", 14)(27, "app-cart-item-stat", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.pnr.flightDetailsTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](11, 17, ctx.pnr.firstFlight.firstSegment.departure.time, "productDetailsWithTime"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](12, 20, ctx.pnr.firstFlight.lastSegment.arrival.time, "productDetailsWithTime"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.pnr.isReturnFlight && ctx.pnr.firstFlight.duration);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.pnr.firstFlight.segments);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](26, _c0, ctx.isOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](20, 23, ctx.pnr.totalPrice, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.pnr.currency);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@openClose", ctx.isOpen ? "open" : "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("hidden", !ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("from", ctx.pnr.travellers.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@openClose", ctx.isOpen ? "open" : "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("hidden", !ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx.pnr.bookingReference == null ? null : ctx.pnr.bookingReference.reference) || "-");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatAnchor, _global_plural_plural_component__WEBPACK_IMPORTED_MODULE_1__.PluralComponent, _bookings_details_cart_tabs_shared_cart_item_stat_cart_item_stat_component__WEBPACK_IMPORTED_MODULE_2__.CartItemStatComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_3__.DibDatePipe, _utils_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_4__.DibDurationPipe, _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_5__.DibDashesToSpacesPipe], styles: [".segment-timeline-wrapper[_ngcontent-%COMP%] {\n  grid-auto-columns: max-content 1fr;\n}\n.segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%] {\n  height: 22px;\n  padding: 2px 0;\n}\n.segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 100%;\n  margin: auto;\n  position: relative;\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity));\n}\n.segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]::before, .segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  position: absolute;\n  right: -1px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity));\n}\n.segment-timeline-wrapper[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]::after {\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtdGFicy1zaGFyZWQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFBQSx5REFBQTtBQUFOO0FBRU07RUFFRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQUEseURBQUE7QUFGUjtBQUtNO0VBQ0UsU0FBQTtBQUhSIiwiZmlsZSI6ImNhcnQtdGFicy1zaGFyZWQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWdtZW50LXRpbWVsaW5lLXdyYXBwZXIge1xuICBncmlkLWF1dG8tY29sdW1uczogbWF4LWNvbnRlbnQgMWZyO1xuXG4gIC50aW1lbGluZSB7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDJweCAwO1xuXG4gICAgLmxpbmUge1xuICAgICAgd2lkdGg6IDFweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgQGFwcGx5IGJnLWdyYXktNTAwO1xuXG4gICAgICAmOjpiZWZvcmUsXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogM3B4O1xuICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAtMXB4O1xuXG4gICAgICAgIEBhcHBseSBiZy1ncmF5LTUwMDtcbiAgICAgIH1cblxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */", "[_nghost-%COMP%] { display: block; position: relative; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsaWdodC1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFRLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSIsImZpbGUiOiJmbGlnaHQtZGV0YWlscy5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyBwb3NpdGlvbjogcmVsYXRpdmU7IH0iXX0= */"], data: { animation: [
            // Animate elements height
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('openClose', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({})),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('close', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({ opacity: 0, height: 0 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('open => close', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('200ms ease-in')]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('close => open', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('400ms cubic-bezier(.62,-0.11,.25,1.66)')]),
            ]),
            // Hide element by setting it to display none
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('showHide', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('show', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({})),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('hide', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({ opacity: 0, display: 'none' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('show => hide', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)(0)]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('hide => show', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('200ms ease-out')]),
            ]),
        ] } });


/***/ }),

/***/ 94034:
/*!********************************************************************!*\
  !*** ./src/app/assisted-booking/product-details-form.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsFormComponent": () => (/* binding */ ProductDetailsFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 99635);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base.component */ 83607);
/* harmony import */ var _actions_cost_center_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/cost-center.actions */ 97765);
/* harmony import */ var _reducers_cost_center_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/cost-center.reducer */ 23057);
/* harmony import */ var _actions_payment_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/payment.actions */ 51729);
/* harmony import */ var _reducers_payment_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/payment.reducer */ 50823);
/* harmony import */ var _models_payment_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/payment.model */ 16874);
/* harmony import */ var _models_employee_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/employee.model */ 76625);
/* harmony import */ var _actions_pnr_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/pnr.actions */ 99911);
/* harmony import */ var _reducers_pnr_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/pnr.reducer */ 62152);
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/global.actions */ 7058);
/* harmony import */ var _actions_checkout_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/checkout.actions */ 37020);
/* harmony import */ var _reducers_checkout_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reducers/checkout.reducer */ 71539);
/* harmony import */ var _models_vendors_payment_provider_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/vendors-payment-provider.model */ 37042);
/* harmony import */ var _actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../actions/vendors-payment-providers.actions */ 43850);
/* harmony import */ var _reducers_vendors_payment_providers_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../reducers/vendors-payment-providers.reducer */ 62031);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/employee.service */ 54416);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _global_dot_loader_dot_loader_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../global/dot-loader/dot-loader.component */ 43339);
/* harmony import */ var _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/pipes/dashes-to-spaces.pipe */ 61467);
































function ProductDetailsFormComponent_ng_container_3_ng_container_2_ng_container_6_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const employee_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", employee_r24.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", employee_r24.email, " ");
  }
}
function ProductDetailsFormComponent_ng_container_3_ng_container_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "mat-form-field", 6)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, "Select Employee Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "mat-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("selectionChange", function ProductDetailsFormComponent_ng_container_3_ng_container_2_ng_container_6_Template_mat_select_selectionChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27);
      const index_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().index;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r25.onEmployeeSelect($event.value, index_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, ProductDetailsFormComponent_ng_container_3_ng_container_2_ng_container_6_mat_option_5_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const travellerForm_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r19.getEmployeesByName(travellerForm_r17.get("name").value));
  }
}
function ProductDetailsFormComponent_ng_container_3_ng_container_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-form-field", 6)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const travellerForm_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r21.employeeId(travellerForm_r17) ? "Employee Email" : "Guest Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("readonly", !!ctx_r21.employeeId(travellerForm_r17));
  }
}
function ProductDetailsFormComponent_ng_container_3_ng_container_2_mat_form_field_9_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const center_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", center_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](center_r32.name);
  }
}
function ProductDetailsFormComponent_ng_container_3_ng_container_2_mat_form_field_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-form-field", 6)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "Select Cost Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "mat-select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, ProductDetailsFormComponent_ng_container_3_ng_container_2_mat_form_field_9_mat_option_4_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const costCenters_r30 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", costCenters_r30.costCenters);
  }
}
function ProductDetailsFormComponent_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 19)(2, "mat-form-field", 20)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](5, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, ProductDetailsFormComponent_ng_container_3_ng_container_2_ng_container_6_Template, 6, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, ProductDetailsFormComponent_ng_container_3_ng_container_2_ng_template_7_Template, 4, 2, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, ProductDetailsFormComponent_ng_container_3_ng_container_2_mat_form_field_9_Template, 5, 1, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const travellerForm_r17 = ctx.$implicit;
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](8);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("formGroup", travellerForm_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r16.employeeId(travellerForm_r17) ? "Employee Name" : "Guest Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r16.hasNamesake(travellerForm_r17.get("name").value))("ngIfElse", _r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](10, 5, ctx_r16.getTravellerCostCenters$(ctx_r16.employeeId(travellerForm_r17) || ctx_r16.booker.id)));
  }
}
function ProductDetailsFormComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0)(1, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, ProductDetailsFormComponent_ng_container_3_ng_container_2_Template, 11, 7, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r0.formTravellers.controls);
  }
}
function ProductDetailsFormComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "dib-dot-loader", 28);
  }
}
function ProductDetailsFormComponent_ng_container_11_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const provider_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", provider_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", provider_r36.name, " ");
  }
}
function ProductDetailsFormComponent_ng_container_11_mat_form_field_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-form-field", 6)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "Card Reference ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function ProductDetailsFormComponent_ng_container_11_mat_form_field_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "dib-dot-loader", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
}
function ProductDetailsFormComponent_ng_container_11_mat_form_field_8_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](0, "Select Lodge Card");
  }
}
function ProductDetailsFormComponent_ng_container_11_mat_form_field_8_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const card_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", card_r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](card_r41.name);
  }
}
function ProductDetailsFormComponent_ng_container_11_mat_form_field_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-form-field", 6)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, ProductDetailsFormComponent_ng_container_11_mat_form_field_8_ng_container_2_Template, 2, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, ProductDetailsFormComponent_ng_container_11_mat_form_field_8_ng_template_4_Template, 1, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "mat-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, ProductDetailsFormComponent_ng_container_11_mat_form_field_8_mat_option_7_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](5);
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 3, ctx_r35.isLoadingPaymentOptions$))("ngIfElse", _r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](8, 5, ctx_r35.getLodgeCards$));
  }
}
function ProductDetailsFormComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "mat-form-field", 6)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, "Vendor's Payment Provider");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("selectionChange", function ProductDetailsFormComponent_ng_container_11_Template_mat_select_selectionChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r42.onVendorsPaymentProviderChange($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, ProductDetailsFormComponent_ng_container_11_mat_option_5_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, ProductDetailsFormComponent_ng_container_11_mat_form_field_7_Template, 4, 0, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, ProductDetailsFormComponent_ng_container_11_mat_form_field_8_Template, 9, 7, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 3, ctx_r3.vendorsPaymentProviders$));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !!ctx_r3.form.get("referenceId"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !!ctx_r3.form.get("vendorsLodgeCard"));
  }
}
function ProductDetailsFormComponent_mat_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "dibDashesToSpaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const salesModel_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", salesModel_r44);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 4, salesModel_r44)), " ");
  }
}
function ProductDetailsFormComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 33)(1, "mat-form-field", 6)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "mat-form-field", 6)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](8, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("Purchase Price (", ctx_r5.pnr.currency, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("Sell Price inc. VAT (", ctx_r5.pnr.currency, ")");
  }
}
function ProductDetailsFormComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 33)(1, "mat-form-field", 6)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "mat-form-field", 6)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](8, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("Exchange Penalty Price (", ctx_r6.pnr.currency, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("Residual Value (", ctx_r6.pnr.currency, ")");
  }
}
function ProductDetailsFormComponent_ng_container_25_mat_select_5_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "dibDashesToSpaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const paymentType_r50 = ctx.$implicit;
    const paymentOptions_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", paymentType_r50)("disabled", !paymentOptions_r48[paymentType_r50]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 5, paymentType_r50)), " ");
  }
}
function ProductDetailsFormComponent_ng_container_25_mat_select_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("selectionChange", function ProductDetailsFormComponent_ng_container_25_mat_select_5_Template_mat_select_selectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r52.onPaymentMethodChange($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ProductDetailsFormComponent_ng_container_25_mat_select_5_mat_option_1_Template, 4, 7, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r45.paymentTypes);
  }
}
function ProductDetailsFormComponent_ng_container_25_mat_form_field_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "dib-dot-loader", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
}
function ProductDetailsFormComponent_ng_container_25_mat_form_field_7_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](0, "Select Billing Profile");
  }
}
function ProductDetailsFormComponent_ng_container_25_mat_form_field_7_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const profile_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", profile_r58);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](profile_r58.legalName);
  }
}
function ProductDetailsFormComponent_ng_container_25_mat_form_field_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-form-field", 6)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, ProductDetailsFormComponent_ng_container_25_mat_form_field_7_ng_container_2_Template, 2, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, ProductDetailsFormComponent_ng_container_25_mat_form_field_7_ng_template_4_Template, 1, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "mat-select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, ProductDetailsFormComponent_ng_container_25_mat_form_field_7_mat_option_7_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](5);
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 3, ctx_r46.isLoadingPaymentOptions$))("ngIfElse", _r55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](8, 5, ctx_r46.getBillingProfiles$));
  }
}
function ProductDetailsFormComponent_ng_container_25_mat_form_field_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "dib-dot-loader", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
}
function ProductDetailsFormComponent_ng_container_25_mat_form_field_8_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](0, "Select Lodge Card");
  }
}
function ProductDetailsFormComponent_ng_container_25_mat_form_field_8_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const card_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", card_r63);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](card_r63.name);
  }
}
function ProductDetailsFormComponent_ng_container_25_mat_form_field_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-form-field", 6)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, ProductDetailsFormComponent_ng_container_25_mat_form_field_8_ng_container_2_Template, 2, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, ProductDetailsFormComponent_ng_container_25_mat_form_field_8_ng_template_4_Template, 1, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "mat-select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, ProductDetailsFormComponent_ng_container_25_mat_form_field_8_mat_option_7_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](5);
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 3, ctx_r47.isLoadingPaymentOptions$))("ngIfElse", _r60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](8, 5, ctx_r47.getLodgeCards$));
  }
}
function ProductDetailsFormComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 4)(2, "mat-form-field", 6)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "Select Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, ProductDetailsFormComponent_ng_container_25_mat_select_5_Template, 2, 1, "mat-select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, ProductDetailsFormComponent_ng_container_25_mat_form_field_7_Template, 9, 7, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, ProductDetailsFormComponent_ng_container_25_mat_form_field_8_Template, 9, 7, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 3, ctx_r7.checkoutPaymentOptions$));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r7.form.get("paymentMethod").value === ctx_r7.PaymentType.BILLING_PROFILE);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r7.form.get("paymentMethod").value === ctx_r7.PaymentType.LODGE_CARD);
  }
}
function ProductDetailsFormComponent_ng_container_27_ng_container_3_mat_form_field_2_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", project_r70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](project_r70.name);
  }
}
function ProductDetailsFormComponent_ng_container_27_ng_container_3_mat_form_field_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-form-field", 6)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "mat-select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, ProductDetailsFormComponent_ng_container_27_ng_container_3_mat_form_field_2_mat_option_4_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const options_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"]((options_r65.project == null ? null : options_r65.project.label) || "Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", options_r65.project == null ? null : options_r65.project.items);
  }
}
function ProductDetailsFormComponent_ng_container_27_ng_container_3_mat_form_field_3_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const purpose_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", purpose_r73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](purpose_r73.name);
  }
}
function ProductDetailsFormComponent_ng_container_27_ng_container_3_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-form-field", 6)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "mat-select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, ProductDetailsFormComponent_ng_container_27_ng_container_3_mat_form_field_3_mat_option_4_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const options_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"]((options_r65.purposeOfTrip == null ? null : options_r65.purposeOfTrip.label) || "Purpose of trip");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", options_r65.purposeOfTrip == null ? null : options_r65.purposeOfTrip.items);
  }
}
function ProductDetailsFormComponent_ng_container_27_ng_container_3_mat_form_field_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-form-field", 20)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const options_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"]((options_r65.yourReference == null ? null : options_r65.yourReference.label) || "Your reference");
  }
}
function ProductDetailsFormComponent_ng_container_27_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, ProductDetailsFormComponent_ng_container_27_ng_container_3_mat_form_field_2_Template, 5, 2, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, ProductDetailsFormComponent_ng_container_27_ng_container_3_mat_form_field_3_Template, 5, 2, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, ProductDetailsFormComponent_ng_container_27_ng_container_3_mat_form_field_4_Template, 4, 1, "mat-form-field", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const options_r65 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", (options_r65.project == null ? null : options_r65.project.mandatory) && (options_r65.project == null ? null : options_r65.project.items == null ? null : options_r65.project.items.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", (options_r65.purposeOfTrip == null ? null : options_r65.purposeOfTrip.mandatory) && (options_r65.purposeOfTrip == null ? null : options_r65.purposeOfTrip.items == null ? null : options_r65.purposeOfTrip.items.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", options_r65.yourReference == null ? null : options_r65.yourReference.mandatory);
  }
}
function ProductDetailsFormComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "small", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "Reference Fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, ProductDetailsFormComponent_ng_container_27_ng_container_3_Template, 5, 3, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 1, ctx_r8.checkoutOptions$));
  }
}
function ProductDetailsFormComponent_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "dib-dot-loader", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
}
function ProductDetailsFormComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](0, "Agent Fee");
  }
}
function ProductDetailsFormComponent_mat_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const channel_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", channel_r76);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](channel_r76.name);
  }
}
function ProductDetailsFormComponent_span_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function ProductDetailsFormComponent_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "dib-dot-loader", 28);
  }
}
class ProductDetailsFormComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(router, store, formBuilder, employeeService) {
    super();
    this.router = router;
    this.store = store;
    this.formBuilder = formBuilder;
    this.employeeService = employeeService;
    this.SalesModel = _models_payment_model__WEBPACK_IMPORTED_MODULE_5__.SalesModel;
    this.salesModels = [_models_payment_model__WEBPACK_IMPORTED_MODULE_5__.SalesModel.PASS_THROUGH, _models_payment_model__WEBPACK_IMPORTED_MODULE_5__.SalesModel.ADD_MARKUP];
    this.PaymentType = _models_payment_model__WEBPACK_IMPORTED_MODULE_5__.PaymentType;
    this.paymentTypes = [_models_payment_model__WEBPACK_IMPORTED_MODULE_5__.PaymentType.BILLING_PROFILE, _models_payment_model__WEBPACK_IMPORTED_MODULE_5__.PaymentType.LODGE_CARD];
    this.employees$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject([]);
    this.uniqueEmployees$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject([]);
    this.isConfirmingPNR$ = this.store.select(_reducers_pnr_reducer__WEBPACK_IMPORTED_MODULE_8__.isConfirmingPNR);
    this.travellerCostCentersLoading$ = this.store.select(_reducers_cost_center_reducer__WEBPACK_IMPORTED_MODULE_2__.travellerCostCentersLoading);
    this.getTravellerCostCenters$ = id => this.store.select(_reducers_cost_center_reducer__WEBPACK_IMPORTED_MODULE_2__.selectTravellerCostCentersData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(data => data.find(costCenters => costCenters.customerId === id)));
    this.getLodgeCards$ = this.store.select(_reducers_payment_reducer__WEBPACK_IMPORTED_MODULE_4__.selectLodgeCards);
    this.getBillingProfiles$ = this.store.select(_reducers_payment_reducer__WEBPACK_IMPORTED_MODULE_4__.selectBillingProfiles);
    this.isLoadingPaymentOptions$ = this.store.select(_reducers_payment_reducer__WEBPACK_IMPORTED_MODULE_4__.isLoadingPaymentOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)(loading => {
      if (!loading) {
        this.form.get('billingProfile')?.enable();
        this.form.get('lodgeCard')?.enable();
        this.form.get('vendorsLodgeCard')?.enable();
      }
    }));
    this.vendorsPaymentProviders$ = this.store.select(_reducers_vendors_payment_providers_reducer__WEBPACK_IMPORTED_MODULE_14__.selectVendorsPaymentProvidersData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(providers => {
      return providers.filter(provider => this.pnr.vendorType.includes(provider.vendorPaymentPresentation));
    }));
    this.isLoadingVendorsPaymentProviders$ = this.store.select(_reducers_vendors_payment_providers_reducer__WEBPACK_IMPORTED_MODULE_14__.vendorsPaymentProviderLoading);
    this.bookingChannels$ = this.store.select(_reducers_checkout_reducer__WEBPACK_IMPORTED_MODULE_11__.selectBookingChannels);
    this.isLoadingBookingChannels$ = this.store.select(_reducers_checkout_reducer__WEBPACK_IMPORTED_MODULE_11__.isLoadingBookingChannels);
    this.checkoutOptions$ = this.store.select(_reducers_checkout_reducer__WEBPACK_IMPORTED_MODULE_11__.selectCheckoutOptions);
    this.isLoadingCheckoutOptions$ = this.store.select(_reducers_checkout_reducer__WEBPACK_IMPORTED_MODULE_11__.isLoadingCheckoutOptions);
    this.checkoutPaymentOptions$ = this.store.select(_reducers_checkout_reducer__WEBPACK_IMPORTED_MODULE_11__.selectCheckoutPaymentOptions).pipe(
    // Convert array to key => value pairs for easy access from template
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(options => {
      return Object.fromEntries(options.map(option => [option.name, option.selected]));
    }));
    this.hasMandatoryReferenceFields$ = this.store.select(_reducers_checkout_reducer__WEBPACK_IMPORTED_MODULE_11__.hasMandatoryReferenceFields);
    this.form = this.formBuilder.group({
      travellers: new _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormArray([]),
      salesModel: null,
      purchasePrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormControl({
        value: null,
        disabled: true
      }),
      sellPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormControl({
        value: null,
        disabled: true
      }),
      paymentMethod: null,
      vendorsPaymentProvider: null,
      agentFee: null,
      note: null,
      project: null,
      purposeOfTrip: null,
      yourReference: null
    });
    this.subscriptions.add(this.employees$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.filter)(employees => !!employees.length)).subscribe(employees => {
      // Get the list of unique employees based on the externalId property. In case we have multiple
      // employees with the same name we will get all of them in the list grouped by externalId
      this.uniqueEmployees$.next(employees.filter((employee, index, array) => {
        return array.findIndex(item => item.externalId === employee.externalId) === index;
      }));
      this.store.dispatch(_actions_cost_center_actions__WEBPACK_IMPORTED_MODULE_1__.CostCenterActions.loadTravellerCostCenters({
        // Get unique list of employee IDs to load cost centers for. We will use bookers ID for guest travellers
        ids: [...new Set(employees.map(employee => employee.id || this.booker.id))]
      }));
    }));
    this.subscriptions.add(this.uniqueEmployees$.subscribe(uniqueEmployees => {
      uniqueEmployees.forEach(traveller => {
        this.formTravellers.push(this.formBuilder.group({
          id: traveller.id,
          externalId: traveller.externalId,
          name: traveller.fullName,
          email: this.hasNamesake(traveller.fullName) ? null : traveller.email,
          costCenter: null
        }));
      });
    }));
    this.subscriptions.add(this.store.select(_reducers_pnr_reducer__WEBPACK_IMPORTED_MODULE_8__.selectPNRCartId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.filter)(id => !!id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)(id => {
      this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_9__.GlobalActions.showSuccessMessage({
        message: 'PNR booking successfully created!'
      }));
      this.store.dispatch(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_7__.PnrActions.resetValidatedPnr());
      this.router.navigate([`/companies/bookings/${id}`]).then(rxjs__WEBPACK_IMPORTED_MODULE_24__.noop);
    })).subscribe());
    this.subscriptions.add(this.store.select(_reducers_pnr_reducer__WEBPACK_IMPORTED_MODULE_8__.selectAdditionalPNRData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.filter)(data => !!data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)(data => {
      this.store.dispatch(_actions_vendors_payment_providers_actions__WEBPACK_IMPORTED_MODULE_13__.VendorsPaymentProviderActions.loadVendorsPaymentProviders({
        params: {
          page: 1,
          size: 10,
          sort: 'name,asc',
          active: 'true',
          vendorId: data.vendorId
        }
      }));
    })).subscribe());
  }
  ngOnInit() {
    this.store.dispatch(_actions_checkout_actions__WEBPACK_IMPORTED_MODULE_10__.CheckoutActions.loadBookingChannels());
    this.store.dispatch(_actions_checkout_actions__WEBPACK_IMPORTED_MODULE_10__.CheckoutActions.loadOptions({
      companyId: this.company.id
    }));
  }
  ngOnChanges(changes) {
    const pnr = changes?.pnr;
    const previousValue = JSON.stringify(pnr?.previousValue, ['totalPrice', 'travellers']);
    const currentValue = JSON.stringify(pnr?.currentValue, ['totalPrice', 'travellers']);
    if (pnr?.currentValue?.state && previousValue !== currentValue) {
      this.form.get('purchasePrice').setValue(this.pnr.totalPrice);
      this.form.get('sellPrice').setValue(this.pnr.totalPrice);
      // TODO: Add this to state so we can avoid having to reload travellers every time tab is changed
      this.employeeService.resolveFromTravellers(this.company.id, this.pnr.travellers).subscribe(employees => {
        this.employees$.next(employees.map(employee => new _models_employee_model__WEBPACK_IMPORTED_MODULE_6__.EmployeeAdapter().adapt(employee)));
      });
    }
  }
  confirm() {
    // Trigger validators on the travellers form
    this.formTravellers.markAllAsTouched();
    if (this.form.valid) {
      const formData = this.form.getRawValue();
      const params = {
        tripName: this.pnr.flightDetailsTitle,
        bookingReference: this.pnr.bookingReference,
        bookerId: this.booker.id,
        finalDestination: this.pnr.finalDestination || this.pnr.flightDestination.airportCode,
        travellers: formData.travellers.map(traveller => {
          return {
            id: traveller.id,
            externalId: traveller.externalId,
            costCenterId: traveller.costCenter.id,
            phone: '',
            email: traveller.email
          };
        }),
        paymentInfo: {
          customerPaymentType: _models_payment_model__WEBPACK_IMPORTED_MODULE_5__.PaymentType[formData.paymentMethod],
          customerPaymentId: formData.billingProfile?.id || formData.lodgeCard?.id,
          sellPrice: formData.sellPrice,
          vendorPaymentPresentation: formData.vendorsPaymentProvider.vendorPaymentPresentation,
          vendorPaymentProviderId: formData.vendorsPaymentProvider.id,
          vendorPaymentId: formData.referenceId || formData.vendorsLodgeCard?.id,
          // We only send exchange penalty price and residual value for existing PNRs
          exchangePenalty: this.pnr.isNew ? undefined : formData.exchangePenalty,
          residualValue: this.pnr.isNew ? undefined : formData.residualValue
        },
        referenceFields: {
          projectId: formData.project?.id,
          projectName: formData.project?.name,
          purposeOfTripId: formData.purposeOfTrip?.id,
          purposeOfTripName: formData.purposeOfTrip?.name,
          yourReference: formData.yourReference || undefined
        },
        agentFee: formData.agentFee.name,
        agentNote: formData.note
      };
      this.store.dispatch(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_7__.PnrActions.confirmFlightPnr({
        data: params
      }));
    }
  }
  get formTravellers() {
    return this.form.controls['travellers'];
  }
  onPaymentMethodChange(value) {
    this.store.dispatch(_actions_payment_actions__WEBPACK_IMPORTED_MODULE_3__.PaymentActions.loadPaymentOptions({
      id: this.booker.id
    }));
    switch (value) {
      case _models_payment_model__WEBPACK_IMPORTED_MODULE_5__.PaymentType.BILLING_PROFILE:
        this.form.addControl('billingProfile', new _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormControl({
          value: null,
          disabled: true
        }));
        this.form.removeControl('lodgeCard');
        break;
      case _models_payment_model__WEBPACK_IMPORTED_MODULE_5__.PaymentType.LODGE_CARD:
        this.form.addControl('lodgeCard', new _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormControl({
          value: null,
          disabled: true
        }));
        this.form.removeControl('billingProfile');
        break;
    }
  }
  onSalesModelChange(value) {
    switch (value) {
      case _models_payment_model__WEBPACK_IMPORTED_MODULE_5__.SalesModel.PASS_THROUGH:
        this.form.get('sellPrice').disable();
        this.form.removeControl('exchangePenalty');
        this.form.removeControl('residualValue');
        break;
      case _models_payment_model__WEBPACK_IMPORTED_MODULE_5__.SalesModel.ADD_MARKUP:
        this.form.get('sellPrice').enable();
        this.form.addControl('exchangePenalty', new _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormControl(null));
        this.form.addControl('residualValue', new _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormControl(null));
        break;
    }
  }
  onVendorsPaymentProviderChange(provider) {
    switch (provider?.vendorPaymentPresentation) {
      case _models_vendors_payment_provider_model__WEBPACK_IMPORTED_MODULE_12__.VendorPaymentPresentation.VCC:
        this.form.addControl('referenceId', new _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormControl(''));
        this.form.removeControl('vendorsLodgeCard');
        break;
      case _models_vendors_payment_provider_model__WEBPACK_IMPORTED_MODULE_12__.VendorPaymentPresentation.LODGE_CARD:
        this.store.dispatch(_actions_payment_actions__WEBPACK_IMPORTED_MODULE_3__.PaymentActions.loadPaymentOptions({
          id: this.booker.id
        }));
        this.form.addControl('vendorsLodgeCard', new _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormControl({
          value: null,
          disabled: true
        }));
        this.form.removeControl('referenceId');
        break;
      default:
        this.form.removeControl('referenceId');
        this.form.removeControl('vendorsLodgeCard');
        break;
    }
  }
  onEmployeeSelect(value, index) {
    const employee = this.employees$.getValue().find(employee => employee.email === value);
    this.formTravellers.at(index).patchValue({
      id: employee.id,
      name: employee.fullName,
      email: employee.email
    });
  }
  getEmployeesByName(name) {
    return this.employees$.getValue().filter(employee => employee.fullName === name);
  }
  hasNamesake(name) {
    return this.getEmployeesByName(name).length > 1;
  }
  employeeId(travellerForm) {
    return travellerForm.get('id').value;
  }
}
ProductDetailsFormComponent.ɵfac = function ProductDetailsFormComponent_Factory(t) {
  return new (t || ProductDetailsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_26__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_employee_service__WEBPACK_IMPORTED_MODULE_15__.EmployeeService));
};
ProductDetailsFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
  type: ProductDetailsFormComponent,
  selectors: [["app-product-details-form"]],
  inputs: {
    company: "company",
    booker: "booker",
    pnr: "pnr"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵNgOnChangesFeature"]],
  decls: 53,
  vars: 37,
  consts: [[1, "flex", "flex-col", "gap-2", 3, "formGroup"], [1, "mt-5", "mb-3", "w-full", "border-b", "pb-2", "text-xs", "font-bold", "text-gray-500"], [4, "ngIf", "ngIfElse"], ["showLoader", ""], [1, "flex", "flex-row", "gap-2", "sm:flex-col"], [1, "flex", "flex-col", "gap-2"], [1, "small", "white-fill", "w-[250px]"], ["formControlName", "salesModel", "required", "", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "flex flex-row flex-wrap gap-2 sm:flex-col", 4, "ngIf"], [4, "ngIf"], ["showBookingChannelsLabel", ""], ["formControlName", "agentFee", "required", ""], [1, "small", "white-fill", "w-[500px]"], ["matInput", "", "formControlName", "note", "type", "text", "name", "note", "cols", "60", "rows", "10"], ["type", "submit", "mat-stroked-button", "", "color", "primary", 1, "mt-4", "w-min", 3, "disabled", "click"], ["loader", ""], ["formArrayName", "travellers"], [4, "ngFor", "ngForOf"], [1, "flex", "flex-row", "gap-2", "sm:flex-col", 3, "formGroup"], ["disabled", "", 1, "small", "white-fill", "w-[250px]"], ["matInput", "", "readonly", "", "name", "name", "formControlName", "name", "autocomplete", "off"], ["regularInput", ""], ["class", "small white-fill w-[250px]", 4, "ngIf"], ["formControlName", "email", "required", "", 3, "selectionChange"], [3, "value"], ["matInput", "", "name", "email", "formControlName", "email", "autocomplete", "off", "required", "", 3, "readonly"], ["formControlName", "costCenter", "required", ""], ["size", "small", "color", "current"], ["formControlName", "vendorsPaymentProvider", "required", "", 3, "selectionChange"], ["matInput", "", "name", "referenceId", "formControlName", "referenceId", "autocomplete", "off", "required", ""], ["showLabel", ""], ["formControlName", "vendorsLodgeCard", "required", ""], [1, "flex", "flex-row", "flex-wrap", "gap-2", "sm:flex-col"], ["matInput", "", "name", "purchasePrice", "formControlName", "purchasePrice", "autocomplete", "off", "required", ""], ["matInput", "", "name", "sellPrice", "formControlName", "sellPrice", "autocomplete", "off", "required", ""], ["matInput", "", "name", "exchangePenalty", "formControlName", "exchangePenalty", "autocomplete", "off"], ["matInput", "", "name", "residualValue", "formControlName", "residualValue", "autocomplete", "off"], ["formControlName", "paymentMethod", "required", "", 3, "selectionChange", 4, "ngIf"], ["formControlName", "paymentMethod", "required", "", 3, "selectionChange"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [3, "value", "disabled"], ["formControlName", "billingProfile", "required", ""], ["formControlName", "lodgeCard", "required", ""], ["class", "small white-fill w-[250px]", "disabled", "", 4, "ngIf"], ["formControlName", "project", "required", ""], ["formControlName", "purposeOfTrip", "required", ""], ["matInput", "", "name", "yourReference", "formControlName", "yourReference", "autocomplete", "off", "required", ""]],
  template: function ProductDetailsFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "form", 0)(1, "small", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "Passenger Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, ProductDetailsFormComponent_ng_container_3_Template, 3, 1, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, ProductDetailsFormComponent_ng_template_6_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "small", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9, "Vendor payment");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](11, ProductDetailsFormComponent_ng_container_11_Template, 9, 5, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "small", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14, "Sales Model and Markup");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "div", 5)(16, "mat-form-field", 6)(17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18, "Select Sales Model");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "mat-select", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("selectionChange", function ProductDetailsFormComponent_Template_mat_select_selectionChange_19_listener($event) {
        return ctx.onSalesModelChange($event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](20, ProductDetailsFormComponent_mat_option_20_Template, 4, 6, "mat-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](21, ProductDetailsFormComponent_div_21_Template, 9, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](22, ProductDetailsFormComponent_div_22_Template, 9, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "small", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](24, "Customer payment method");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](25, ProductDetailsFormComponent_ng_container_25_Template, 9, 5, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](26, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](27, ProductDetailsFormComponent_ng_container_27_Template, 5, 3, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](28, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "small", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](30, "Agent fee and Notes");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](31, "div", 4)(32, "mat-form-field", 6)(33, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](34, ProductDetailsFormComponent_ng_container_34_Template, 2, 0, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](35, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](36, ProductDetailsFormComponent_ng_template_36_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](38, "mat-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](39, ProductDetailsFormComponent_mat_option_39_Template, 2, 2, "mat-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](40, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](41, "div", 4)(42, "mat-form-field", 13)(43, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](44, "Agent note");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](45, "textarea", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](46, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ProductDetailsFormComponent_Template_button_click_46_listener() {
        return ctx.confirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](47, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](48, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](49, ProductDetailsFormComponent_span_49_Template, 2, 0, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](50, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](51, ProductDetailsFormComponent_ng_template_51_Template, 1, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](7);
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](37);
      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 17, ctx.employees$).length && !_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 19, ctx.travellerCostCentersLoading$))("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](12, 21, ctx.isLoadingVendorsPaymentProviders$))("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.salesModels);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.form.get("salesModel").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.pnr.isNew && ctx.form.get("salesModel").value === ctx.SalesModel.ADD_MARKUP);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](26, 23, ctx.isLoadingCheckoutOptions$))("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](28, 25, ctx.hasMandatoryReferenceFields$));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](35, 27, ctx.isLoadingBookingChannels$))("ngIfElse", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](40, 29, ctx.bookingChannels$));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](47, 31, ctx.travellerCostCentersLoading$) || _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](48, 33, ctx.isConfirmingPNR$));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](50, 35, ctx.isConfirmingPNR$))("ngIfElse", _r14);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_29__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_31__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_32__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormArrayName, _global_dot_loader_dot_loader_component__WEBPACK_IMPORTED_MODULE_16__.DotLoaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_27__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_27__.TitleCasePipe, _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_17__.DibDashesToSpacesPipe],
  encapsulation: 2
});

/***/ }),

/***/ 19543:
/*!***************************************************************!*\
  !*** ./src/app/assisted-booking/product-details.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsComponent": () => (/* binding */ ProductDetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base.component */ 83607);
/* harmony import */ var _actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/pnr.actions */ 99911);
/* harmony import */ var _reducers_pnr_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/pnr.reducer */ 62152);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _product_details_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-details-form.component */ 94034);
/* harmony import */ var _flight_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flight-details.component */ 83115);
/* harmony import */ var _flight_destination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flight-destination.component */ 686);













function ProductDetailsComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " PNR found but has no changes on it so this is where you can preview and go to existing cart to see full details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function ProductDetailsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0, " Second step is to fill in all the fields required for a product including passenger details, payment provider, markup, fees, etc. ");
  }
}
function ProductDetailsComponent_div_8_app_product_details_form_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-product-details-form", 11);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pnr", ctx_r6.pnr)("company", ctx_r6.company)("booker", ctx_r6.booker);
  }
}
function ProductDetailsComponent_div_8_ng_template_4_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21)(1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const traveler_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](traveler_r10.email);
  }
}
function ProductDetailsComponent_div_8_ng_template_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ProductDetailsComponent_div_8_ng_template_4_div_3_div_4_Template, 5, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const traveler_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", traveler_r10.firstName, " ", traveler_r10.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", traveler_r10.email);
  }
}
const _c0 = function (a1) {
  return ["/companies/bookings", a1];
};
function ProductDetailsComponent_div_8_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Passenger Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ProductDetailsComponent_div_8_ng_template_4_div_3_Template, 5, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " View booking details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "arrow_right_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r8.pnr.travellers);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, ctx_r8.pnr.cartId));
  }
}
function ProductDetailsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-flight-details", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ProductDetailsComponent_div_8_app_product_details_form_3_Template, 1, 3, "app-product-details-form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ProductDetailsComponent_div_8_ng_template_4_Template, 8, 4, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("loading", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 5, ctx_r3.isConfirmingPNR$));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pnr", ctx_r3.pnr);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.pnr.isPreview)("ngIfElse", _r7);
  }
}
function ProductDetailsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-flight-destination", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onSelect", function ProductDetailsComponent_ng_template_9_Template_app_flight_destination_onSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.selectFlightDestination($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductDetailsComponent_ng_template_9_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.confirmFlightDestination());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Confirm outbound destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pnr", ctx_r5.pnr)("destination", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 3, ctx_r5.flightDestination$));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 5, ctx_r5.flightDestination$));
  }
}
class ProductDetailsComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(router, store, formBuilder) {
    super();
    this.router = router;
    this.store = store;
    this.formBuilder = formBuilder;
    this.flightDestination$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
    this.isConfirmingPNR$ = this.store.select(_reducers_pnr_reducer__WEBPACK_IMPORTED_MODULE_2__.isConfirmingPNR);
  }
  get hasFlightDestination() {
    return !!this.pnr.flightDestination;
  }
  selectFlightDestination(destination) {
    this.flightDestination$.next(destination);
  }
  confirmFlightDestination() {
    this.store.dispatch(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.setFlightFinalDestination({
      destination: this.flightDestination$.value.airportCode
    }));
  }
  get pageTitle() {
    if (this.pnr.isNew) return 'Create new';
    if (this.pnr.isPreview) return 'Preview existing';
    return 'Update existing';
  }
}
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) {
  return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder));
};
ProductDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ProductDetailsComponent,
  selectors: [["app-product-details"]],
  inputs: {
    company: "company",
    booker: "booker",
    pnr: "pnr"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  decls: 11,
  vars: 5,
  consts: [[1, "flex", "w-full", "justify-between"], [1, "text-xl"], [1, "text-xs", "text-gray-500"], [4, "ngIf", "ngIfElse"], ["defaultDescription", ""], ["class", "mt-8 flex flex-col gap-2", 3, "loading", 4, "ngIf", "ngIfElse"], ["askForFlightDestination", ""], [1, "mt-8", "flex", "flex-col", "gap-2"], [3, "pnr"], [3, "pnr", "company", "booker", 4, "ngIf", "ngIfElse"], ["previewDetails", ""], [3, "pnr", "company", "booker"], [1, "mt-5", "mb-3", "w-full", "border-b", "pb-2", "text-xs", "font-bold", "text-gray-500"], [1, "flex", "flex-col"], ["class", "mb-3 flex flex-col", 4, "ngFor", "ngForOf"], [1, "group", "mt-6", "flex", "cursor-pointer", "items-center", "gap-2", "font-bold", "text-dib-green-600", "sm:mt-2", 3, "routerLink"], [1, "material-icons", "group-hover:-translate-x-1"], [1, "mb-3", "flex", "flex-col"], [1, "flex", "flex-col", "flex-wrap"], [1, "mr-3", "font-bold"], ["class", "mr-3 flex text-xs", 4, "ngIf"], [1, "mr-3", "flex", "text-xs"], [1, "material-icons", "mr-1", "text-xs", "text-dib-green-600"], [3, "pnr", "destination", "onSelect"], ["type", "submit", "mat-stroked-button", "", "color", "primary", 1, "mt-10", "w-min", 3, "disabled", "click"]],
  template: function ProductDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ProductDetailsComponent_ng_container_5_Template, 2, 0, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ProductDetailsComponent_ng_template_6_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ProductDetailsComponent_div_8_Template, 6, 7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ProductDetailsComponent_ng_template_9_Template, 6, 7, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.pageTitle, " flight booking");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.pnr.isPreview)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.hasFlightDestination)("ngIfElse", _r4);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _product_details_form_component__WEBPACK_IMPORTED_MODULE_3__.ProductDetailsFormComponent, _flight_details_component__WEBPACK_IMPORTED_MODULE_4__.FlightDetailsComponent, _flight_destination_component__WEBPACK_IMPORTED_MODULE_5__.FlightDestinationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 43928:
/*!***************************************************************!*\
  !*** ./src/app/assisted-booking/product-updates.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductUpdatesComponent": () => (/* binding */ ProductUpdatesComponent)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);



function ProductUpdatesComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const update_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](update_r1);
} }
class ProductUpdatesComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
}
ProductUpdatesComponent.ɵfac = /*@__PURE__*/ function () { let ɵProductUpdatesComponent_BaseFactory; return function ProductUpdatesComponent_Factory(t) { return (ɵProductUpdatesComponent_BaseFactory || (ɵProductUpdatesComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ProductUpdatesComponent)))(t || ProductUpdatesComponent); }; }();
ProductUpdatesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductUpdatesComponent, selectors: [["app-product-updates"]], inputs: { updates: "updates" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 1, consts: [[1, "flex", "w-full", "justify-between"], [1, "text-xl"], [1, "text-xs", "text-gray-500"], [1, "mt-8", "min-h-[250px]"], [1, "ml-4", "list-disc", "space-y-2"], ["class", "text-gray-500", 4, "ngFor", "ngForOf"], [1, "text-gray-500"]], template: function ProductUpdatesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "History of flight booking changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Here you can see a ist of changes made to this PNR that are currently missing in our system ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProductUpdatesComponent_li_8_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.updates);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], encapsulation: 2 });


/***/ }),

/***/ 46545:
/*!************************************************************!*\
  !*** ./src/app/assisted-booking/validate-pnr.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidatePNRComponent": () => (/* binding */ ValidatePNRComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base.component */ 83607);
/* harmony import */ var _actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/pnr.actions */ 99911);
/* harmony import */ var _reducers_pnr_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/pnr.reducer */ 62152);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _reducers_products_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/products.reducer */ 41878);
/* harmony import */ var _actions_products_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/products.actions */ 56049);
/* harmony import */ var _reducers_vendors_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/vendors.reducer */ 65649);
/* harmony import */ var _actions_vendors_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/vendors.actions */ 98233);
/* harmony import */ var _models_vendor_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/vendor.model */ 20055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _global_dot_loader_dot_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../global/dot-loader/dot-loader.component */ 43339);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/radio */ 52922);























function ValidatePNRComponent_form_6_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "dib-dot-loader", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
}
function ValidatePNRComponent_form_6_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0, "Product Type");
  }
}
function ValidatePNRComponent_form_6_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", product_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](product_r12.name);
  }
}
function ValidatePNRComponent_form_6_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "dib-dot-loader", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
}
function ValidatePNRComponent_form_6_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0, "Vendor");
  }
}
function ValidatePNRComponent_form_6_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vendor_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", vendor_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](vendor_r13.vendorName);
  }
}
function ValidatePNRComponent_form_6_dib_dot_loader_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "dib-dot-loader", 20);
  }
}
function ValidatePNRComponent_form_6_ng_container_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Validate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "auto_fix_normal");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
}
function ValidatePNRComponent_form_6_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 23)(2, "mat-radio-group", 24)(3, "mat-radio-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function ValidatePNRComponent_form_6_ng_container_41_Template_mat_radio_button_change_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r14.onMockedActionsClick("preview"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Preview PNR?");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "mat-radio-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function ValidatePNRComponent_form_6_ng_container_41_Template_mat_radio_button_change_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r16.onMockedActionsClick("update"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Update PNR?");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
}
function ValidatePNRComponent_form_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 5)(3, "mat-form-field", 6)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "mat-form-field", 6)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Booker");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "mat-form-field", 6)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, ValidatePNRComponent_form_6_ng_container_13_Template, 2, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, ValidatePNRComponent_form_6_ng_template_15_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, ValidatePNRComponent_form_6_mat_option_18_Template, 2, 2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 5)(21, "mat-form-field", 6)(22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, ValidatePNRComponent_form_6_ng_container_23_Template, 2, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, ValidatePNRComponent_form_6_ng_template_25_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, ValidatePNRComponent_form_6_mat_option_28_Template, 2, 2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "mat-form-field", 6)(31, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "Enter PNR");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](33, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 16)(35, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ValidatePNRComponent_form_6_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r17.validate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](36, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](37, ValidatePNRComponent_form_6_dib_dot_loader_37_Template, 1, 0, "dib-dot-loader", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](38, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](39, ValidatePNRComponent_form_6_ng_container_39_Template, 5, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](40, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](41, ValidatePNRComponent_form_6_ng_container_41_Template, 7, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](16);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](26);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("loading", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 13, ctx_r0.isValidatingPNR$));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](14, 15, ctx_r0.isLoadingProducts$))("ngIfElse", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](19, 17, ctx_r0.products$));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](24, 19, ctx_r0.isLoadingVendors$))("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](29, 21, ctx_r0.vendors$));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](36, 23, ctx_r0.isValidatingPNR$));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](38, 25, ctx_r0.isValidatingPNR$));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](40, 27, ctx_r0.isValidatingPNR$));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.mockPnr);
  }
}
class ValidatePNRComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(formBuilder, store) {
    super();
    this.formBuilder = formBuilder;
    this.store = store;
    this.form = this.formBuilder.group({
      company: null,
      booker: null,
      product: null,
      vendor: null,
      pnr: null
    });
    this.isValidatingPNR$ = this.store.select(_reducers_pnr_reducer__WEBPACK_IMPORTED_MODULE_2__.isValidatingPNR);
    this.isLoadingProducts$ = this.store.select(_reducers_products_reducer__WEBPACK_IMPORTED_MODULE_4__.productsLoading);
    this.products$ = this.store.select(_reducers_products_reducer__WEBPACK_IMPORTED_MODULE_4__.selectProductsData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(products => products.filter(product => !!product.base)),
    // Display only flight product until other product types are supported
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(products => products.filter(product => product.name === 'Flight')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(products => !!products.length), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(products => {
      // After products are loaded, preselect first product from the list
      this.form.get('product').patchValue(products[0]);
    }));
    this.isLoadingVendors$ = this.store.select(_reducers_vendors_reducer__WEBPACK_IMPORTED_MODULE_6__.vendorsLoading);
    this.vendors$ = this.store.select(_reducers_vendors_reducer__WEBPACK_IMPORTED_MODULE_6__.selectVendorsData).pipe(
    // Display only vendors that have a custom provider vendor name
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(vendors => vendors.filter(vendor => !!vendor.vendorName)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(vendors => {
      // Preselect vendor with vendorName that equals LufthansaGroup
      this.form.get('vendor').patchValue(vendors.find(vendor => vendor.vendorName === _models_vendor_model__WEBPACK_IMPORTED_MODULE_8__.VendorName.LUFTHANSA));
    }));
    this.mockPnr = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.mock.pnr;
    this.mockedAction$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(null);
    this.store.dispatch(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.resetValidatedPnr());
    this.store.dispatch(_actions_products_actions__WEBPACK_IMPORTED_MODULE_5__.ProductActions.loadProducts({
      params: {
        page: 1,
        size: 10,
        sort: 'base,desc|name,asc',
        active: 'true'
      }
    }));
    this.subscriptions.add(this.form.get('product').valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.distinctUntilChanged)((prev, current) => JSON.stringify(prev) === JSON.stringify(current))).subscribe(product => {
      // Every time we change product we have to reload vendors as well
      this.store.dispatch(_actions_vendors_actions__WEBPACK_IMPORTED_MODULE_7__.VendorActions.loadVendors({
        params: {
          page: 1,
          size: 10,
          sort: 'active,desc|name,asc',
          productId: product.id
        }
      }));
    }));
  }
  // Watch the changes on the inputs, so we can reset the form every time there is an update
  ngOnChanges(changes) {
    const company = changes?.company;
    const booker = changes?.booker;
    if (company?.currentValue?.id && JSON.stringify(company?.previousValue) !== JSON.stringify(company?.currentValue)) {
      this.form.get('company').patchValue(this.company.corporationName);
    }
    if (booker?.currentValue?.id && JSON.stringify(booker?.previousValue) !== JSON.stringify(booker?.currentValue)) {
      this.form.get('booker').patchValue(this.booker.fullName);
    }
  }
  validate() {
    if (this.form.valid) {
      const data = this.form.getRawValue();
      // This is a hack that works with mocked data in order to mock existing PNR
      if (this.mockedAction$.getValue()) {
        data.pnr += `_${this.mockedAction$.getValue()}`;
      }
      this.store.dispatch(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.saveAdditionalValidationData({
        data: {
          vendorId: data.vendor.id,
          productId: data.product.id
        }
      }));
      this.store.dispatch(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.validateFlightPnr({
        data: {
          bookingReference: {
            reference: data.pnr,
            source: data.vendor.vendorName
          },
          bookerId: this.booker.id
        }
      }));
    }
  }
  onMockedActionsClick(action) {
    this.mockedAction$.next(action);
  }
}
ValidatePNRComponent.ɵfac = function ValidatePNRComponent_Factory(t) {
  return new (t || ValidatePNRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_17__.Store));
};
ValidatePNRComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: ValidatePNRComponent,
  selectors: [["app-validate-pnr"]],
  inputs: {
    company: "company",
    booker: "booker"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵNgOnChangesFeature"]],
  decls: 7,
  vars: 1,
  consts: [[1, "flex", "w-full", "justify-between"], [1, "text-xl"], [1, "text-xs", "text-gray-500"], ["class", "mt-8 flex flex-col gap-2", 3, "formGroup", "loading", 4, "ngIf"], [1, "mt-8", "flex", "flex-col", "gap-2", 3, "formGroup"], [1, "flex", "flex-row", "gap-2", "sm:flex-col"], [1, "small", "white-fill", "w-[250px]"], ["readonly", "", "matInput", "", "name", "company", "formControlName", "company", "autocomplete", "off", "required", ""], ["readonly", "", "matInput", "", "name", "booker", "formControlName", "booker", "autocomplete", "off", "required", ""], [4, "ngIf", "ngIfElse"], ["showProductLabel", ""], ["formControlName", "product", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["showVendorLabel", ""], ["formControlName", "vendor", "required", ""], ["matInput", "", "name", "pnr", "formControlName", "pnr", "autocomplete", "off", "required", ""], [1, "flex", "flex-row", "flex-wrap", "gap-5"], ["type", "submit", "mat-stroked-button", "", "color", "primary", 1, "mt-4", "w-min", 3, "disabled", "click"], ["size", "small", "color", "current", 4, "ngIf"], [4, "ngIf"], ["size", "small", "color", "current"], [3, "value"], [1, "material-icons", "ml-2", "text-lg"], [1, "mt-4", "pt-2"], [1, "flex", "flex-row", "gap-5"], ["value", "preview", "color", "primary", 3, "change"], ["value", "update", "color", "primary", 3, "change"]],
  template: function ValidatePNRComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Validate PNR");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " First step is to validate PNR number by filling in all the required fields ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, ValidatePNRComponent_form_6_Template, 42, 29, "form", 3);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.company && ctx.booker);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _global_dot_loader_dot_loader_component__WEBPACK_IMPORTED_MODULE_9__.DotLoaderComponent, _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__.MatRadioButton, _angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 84990:
/*!*********************************************!*\
  !*** ./src/app/effects/checkout.effects.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutEffects": () => (/* binding */ CheckoutEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 10538);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/global.actions */ 7058);
/* harmony import */ var _actions_checkout_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/checkout.actions */ 37020);
/* harmony import */ var _reducers_checkout_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/checkout.reducer */ 71539);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _services_checkout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/checkout.service */ 38106);










class CheckoutEffects {
    constructor(actions$, store, checkoutService) {
        this.actions$ = actions$;
        this.store = store;
        this.checkoutService = checkoutService;
        this.loadCheckoutOptions$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.CheckoutActions.loadOptions), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.withLatestFrom)(this.store.select(_reducers_checkout_reducer__WEBPACK_IMPORTED_MODULE_2__.hasCheckoutOptionsInStore)), 
        // No need to load checkout options every time if we already have it in store
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(([, hasOptions]) => !hasOptions), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.store.dispatch(_actions_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.CheckoutActions.loadOptionsStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(([{ companyId }]) => this.checkoutService.getCheckoutOptions(companyId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((data) => {
            return _actions_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.CheckoutActions.loadOptionsSuccess({ data });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(_actions_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.CheckoutActions.loadOptionsError({ error: 'Checkout options could not be loaded. Please try again.' }));
        })))));
        this.loadBookingChannels$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.CheckoutActions.loadBookingChannels), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.withLatestFrom)(this.store.select(_reducers_checkout_reducer__WEBPACK_IMPORTED_MODULE_2__.hasBookingChannelsInStore)), 
        // No need to load checkout options every time if we already have it in store
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(([, hasChannels]) => !hasChannels), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.store.dispatch(_actions_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.CheckoutActions.loadBookingChannelsStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => this.checkoutService.getBookingChannels().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((data) => {
            return _actions_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.CheckoutActions.loadBookingChannelsSuccess({ data });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(_actions_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.CheckoutActions.loadBookingChannelsError({
                error: 'Booking channels could not be loaded. Please try again.',
            }));
        })))));
        this.showToast$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.CheckoutActions.loadOptionsError, _actions_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.CheckoutActions.loadBookingChannelsError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(({ error }) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showErrorMessage({ message: error }));
        })), { dispatch: false });
    }
}
CheckoutEffects.ɵfac = function CheckoutEffects_Factory(t) { return new (t || CheckoutEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_services_checkout_service__WEBPACK_IMPORTED_MODULE_3__.CheckoutService)); };
CheckoutEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({ token: CheckoutEffects, factory: CheckoutEffects.ɵfac });


/***/ }),

/***/ 69190:
/*!************************************************!*\
  !*** ./src/app/effects/cost-center.effects.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CostCenterEffects": () => (/* binding */ CostCenterEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/global.actions */ 7058);
/* harmony import */ var _actions_cost_center_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/cost-center.actions */ 97765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _services_cost_center_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cost-center.service */ 90829);









class CostCenterEffects {
    constructor(actions$, store, costCenterService) {
        this.actions$ = actions$;
        this.store = store;
        this.costCenterService = costCenterService;
        this.loadTravellerCostCenters$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_cost_center_actions__WEBPACK_IMPORTED_MODULE_1__.CostCenterActions.loadTravellerCostCenters), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_cost_center_actions__WEBPACK_IMPORTED_MODULE_1__.CostCenterActions.loadTravellerCostCentersStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ ids }) => this.costCenterService.loadForTravellers(ids).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((data) => {
            return _actions_cost_center_actions__WEBPACK_IMPORTED_MODULE_1__.CostCenterActions.loadTravellerCostCentersSuccess({ data });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_cost_center_actions__WEBPACK_IMPORTED_MODULE_1__.CostCenterActions.loadTravellerCostCentersError({
                error: 'Traveller cost centers could not be loaded. Please try again.',
            }));
        })))));
        this.showToast$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_cost_center_actions__WEBPACK_IMPORTED_MODULE_1__.CostCenterActions.loadTravellerCostCentersError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(({ error }) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showErrorMessage({ message: error }));
        })), { dispatch: false });
    }
}
CostCenterEffects.ɵfac = function CostCenterEffects_Factory(t) { return new (t || CostCenterEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_cost_center_service__WEBPACK_IMPORTED_MODULE_2__.CostCenterService)); };
CostCenterEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: CostCenterEffects, factory: CostCenterEffects.ɵfac });


/***/ }),

/***/ 61038:
/*!********************************************!*\
  !*** ./src/app/effects/payment.effects.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentEffects": () => (/* binding */ PaymentEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 10538);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/global.actions */ 7058);
/* harmony import */ var _actions_payment_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/payment.actions */ 51729);
/* harmony import */ var _reducers_payment_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/payment.reducer */ 50823);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/payment.service */ 51863);










class PaymentEffects {
    constructor(actions$, store, paymentService) {
        this.actions$ = actions$;
        this.store = store;
        this.paymentService = paymentService;
        this.loadPaymentOptions$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_payment_actions__WEBPACK_IMPORTED_MODULE_1__.PaymentActions.loadPaymentOptions), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.withLatestFrom)(this.store.select(_reducers_payment_reducer__WEBPACK_IMPORTED_MODULE_2__.hasPaymentOptionsInStore)), 
        // No need to load payment options every time if we already have it in store
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(([, hasOptions]) => !hasOptions), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.store.dispatch(_actions_payment_actions__WEBPACK_IMPORTED_MODULE_1__.PaymentActions.loadPaymentOptionsStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(([{ id }]) => this.paymentService.getPaymentOptions(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((data) => {
            return _actions_payment_actions__WEBPACK_IMPORTED_MODULE_1__.PaymentActions.loadPaymentOptionsSuccess({ data });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(_actions_payment_actions__WEBPACK_IMPORTED_MODULE_1__.PaymentActions.loadPaymentOptionsError({
                error: 'Payment options could not be loaded. Please try again.',
            }));
        })))));
        this.showToast$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_payment_actions__WEBPACK_IMPORTED_MODULE_1__.PaymentActions.loadPaymentOptionsError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(({ error }) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showErrorMessage({ message: error }));
        })), { dispatch: false });
    }
}
PaymentEffects.ɵfac = function PaymentEffects_Factory(t) { return new (t || PaymentEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_services_payment_service__WEBPACK_IMPORTED_MODULE_3__.PaymentService)); };
PaymentEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({ token: PaymentEffects, factory: PaymentEffects.ɵfac });


/***/ }),

/***/ 13545:
/*!****************************************!*\
  !*** ./src/app/effects/pnr.effects.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PNREffects": () => (/* binding */ PNREffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _actions_global_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/global.actions */ 7058);
/* harmony import */ var _actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/pnr.actions */ 99911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _services_pnr_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pnr.service */ 47415);









class PNREffects {
    constructor(actions$, store, pnrService) {
        this.actions$ = actions$;
        this.store = store;
        this.pnrService = pnrService;
        this.validateFlightPNR$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.validateFlightPnr), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.validateFlightPnrStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ data }) => this.pnrService.validateFlightPNR(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            return _actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.validateFlightPnrSuccess({ data: response });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.validateFlightPnrError({ error: 'Flight PNR could not be validated. Please try again.' }));
        })))));
        this.confirmFlightPNR$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.confirmFlightPnr), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.store.dispatch(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.confirmFlightPnrStart())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ data }) => this.pnrService.confirmFlightPNR(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            return _actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.confirmFlightPnrSuccess({ data: response });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.confirmFlightPnrError({ error: 'Flight PNR could not be confirmed. Please try again.' }));
        })))));
        this.showToast$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.validateFlightPnrError, _actions_pnr_actions__WEBPACK_IMPORTED_MODULE_1__.PnrActions.confirmFlightPnrError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(({ error }) => {
            this.store.dispatch(_actions_global_actions__WEBPACK_IMPORTED_MODULE_0__.GlobalActions.showErrorMessage({ message: error }));
        })), { dispatch: false });
    }
}
PNREffects.ɵfac = function PNREffects_Factory(t) { return new (t || PNREffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_pnr_service__WEBPACK_IMPORTED_MODULE_2__.PNRService)); };
PNREffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: PNREffects, factory: PNREffects.ɵfac });


/***/ }),

/***/ 76625:
/*!******************************************!*\
  !*** ./src/app/models/employee.model.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeAdapter": () => (/* binding */ EmployeeAdapter),
/* harmony export */   "EmployeeModel": () => (/* binding */ EmployeeModel)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class EmployeeModel {
    constructor(id, email, userType, firstName, lastName, cellphone, address1, address2, zipCode, city, country, stripeCustomerId, customerType, companyName, userTitle, allowAgentOverride, 
    // We can receive this prop sometimes when matching employees with travellers
    externalId) {
        this.id = id;
        this.email = email;
        this.userType = userType;
        this.firstName = firstName;
        this.lastName = lastName;
        this.cellphone = cellphone;
        this.address1 = address1;
        this.address2 = address2;
        this.zipCode = zipCode;
        this.city = city;
        this.country = country;
        this.stripeCustomerId = stripeCustomerId;
        this.customerType = customerType;
        this.companyName = companyName;
        this.userTitle = userTitle;
        this.allowAgentOverride = allowAgentOverride;
        this.externalId = externalId;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class EmployeeAdapter {
    adapt(item) {
        return new EmployeeModel(item?.id, item?.email, item?.userType, item?.firstName, item?.lastName, item?.cellphone, item?.address1, item?.address2, item?.zipCode, item?.city, item?.country, item?.stripeCustomerId, item?.customerType, item?.companyName, item?.userTitle, item?.allowAgentOverride, item?.externalId);
    }
}
EmployeeAdapter.ɵfac = function EmployeeAdapter_Factory(t) { return new (t || EmployeeAdapter)(); };
EmployeeAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeeAdapter, factory: EmployeeAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 38106:
/*!**********************************************!*\
  !*** ./src/app/services/checkout.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutService": () => (/* binding */ CheckoutService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class CheckoutService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.ams}/api`;
    }
    getCheckoutOptions(companyId) {
        return this.http.get(`${this.baseUrl}/reference-fields/${companyId}/checkout-options`);
    }
    getBookingChannels() {
        return this.http.get(`${this.baseUrl}/information-fields/get-booking-channels`);
    }
}
CheckoutService.ɵfac = function CheckoutService_Factory(t) { return new (t || CheckoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CheckoutService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CheckoutService, factory: CheckoutService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 90829:
/*!*************************************************!*\
  !*** ./src/app/services/cost-center.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CostCenterService": () => (/* binding */ CostCenterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);


class CostCenterService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/api/tmcc/cost-centers';
    }
    loadForTravellers(ids) {
        return this.http.get(`${this.baseUrl}/customers-cost-centers`, {
            params: { customerIds: ids.join(',') },
        });
    }
}
CostCenterService.ɵfac = function CostCenterService_Factory(t) { return new (t || CostCenterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
CostCenterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CostCenterService, factory: CostCenterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 54416:
/*!**********************************************!*\
  !*** ./src/app/services/employee.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeService": () => (/* binding */ EmployeeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);


class EmployeeService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/api/tmcc/corporations';
    }
    resolveFromTravellers(companyId, travellers) {
        return this.http.post(`${this.baseUrl}/${companyId}/resolve-employees`, travellers);
    }
}
EmployeeService.ɵfac = function EmployeeService_Factory(t) { return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
EmployeeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeeService, factory: EmployeeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 51863:
/*!*********************************************!*\
  !*** ./src/app/services/payment.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentService": () => (/* binding */ PaymentService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class PaymentService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/api/tmcc/customers';
    }
    getPaymentOptions(customerId) {
        return this.http
            .get(`${this.baseUrl}/${customerId}/payment-options`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((data) => ({ billingProfiles: data.billings, lodgeCards: data.lodgeCards })));
    }
}
PaymentService.ɵfac = function PaymentService_Factory(t) { return new (t || PaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
PaymentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PaymentService, factory: PaymentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 47415:
/*!*****************************************!*\
  !*** ./src/app/services/pnr.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PNRService": () => (/* binding */ PNRService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class PNRService {
    constructor(http) {
        this.http = http;
        /**
         * TODO: Talk with BE to add some sort of prefix here to indicate it is a secure API (ie. /api)
         *  It was removed because it is using different tokens from Portal, but we have to get it back somehow
         *  because of this we have to mark all DFS related endpoints as secure in order for token to be sent.
         *  For more info see {@link AddHeaderInterceptor#setHeaders}
         */
        this.baseUrl = '/v1/tmcc/agent-assisted';
        this.baseUrlSecure = '/api/tmcc/agent-assisted';
    }
    validateFlightPNR(params) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.dfs}${this.baseUrl}/validate-booking`, params);
    }
    confirmFlightPNR(params) {
        return this.http.post(`${this.baseUrlSecure}/confirmation`, params);
    }
}
PNRService.ɵfac = function PNRService_Factory(t) { return new (t || PNRService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
PNRService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PNRService, factory: PNRService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_assisted-booking_assisted-booking_module_ts.js.map