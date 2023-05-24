"use strict";
(self["webpackChunkadmin_tool"] = self["webpackChunkadmin_tool"] || []).push([["src_app_products_products_module_ts"],{

/***/ 88980:
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModule": () => (/* binding */ ProductsModule)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/dropdown */ 38992);
/* harmony import */ var _products_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.routing */ 78350);
/* harmony import */ var _vat_categories_vat_categories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vat-categories/vat-categories.component */ 54058);
/* harmony import */ var _effects_product_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../effects/product.effects */ 76435);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ 99118);
/* harmony import */ var _effects_vat_category_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../effects/vat-category.effects */ 53138);
/* harmony import */ var _vat_categories_vat_category_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vat-categories/vat-category-form.component */ 84437);
/* harmony import */ var _products_product_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/product-form.component */ 42300);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/breadcrumbs/breadcrumbs.module */ 2367);
/* harmony import */ var _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global/wrapper/listing/wrapper-listing.module */ 23745);
/* harmony import */ var _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../global/wrapper/main/wrapper-main.module */ 49722);
/* harmony import */ var _global_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../global/dialog/dialog.module */ 13547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 60124);





























class ProductsModule {
}
ProductsModule.ɵfac = function ProductsModule_Factory(t) { return new (t || ProductsModule)(); };
ProductsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _products_routing__WEBPACK_IMPORTED_MODULE_0__.routing,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__.MatProgressBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule,
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__.EffectsModule.forFeature([_effects_product_effects__WEBPACK_IMPORTED_MODULE_2__.ProductEffects, _effects_vat_category_effects__WEBPACK_IMPORTED_MODULE_4__.VatCategoryEffects]),
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule,
        _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbsModule,
        _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_8__.WrapperListingModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__.MatTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule,
        _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_9__.WrapperMainModule,
        _global_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_10__.DialogModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__.MatCheckboxModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_26__.DropdownModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_products_products_component__WEBPACK_IMPORTED_MODULE_3__.ProductsComponent, _products_product_form_component__WEBPACK_IMPORTED_MODULE_6__.ProductFormComponent, _vat_categories_vat_categories_component__WEBPACK_IMPORTED_MODULE_1__.VatCategoriesComponent, _vat_categories_vat_category_form_component__WEBPACK_IMPORTED_MODULE_5__.VatCategoryFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__.MatProgressBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__.EffectsFeatureModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule,
        _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbsModule,
        _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_8__.WrapperListingModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__.MatTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule,
        _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_9__.WrapperMainModule,
        _global_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_10__.DialogModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__.MatCheckboxModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_26__.DropdownModule] }); })();


/***/ }),

/***/ 78350:
/*!**********************************************!*\
  !*** ./src/app/products/products.routing.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routing": () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _vat_categories_vat_categories_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vat-categories/vat-categories.component */ 54058);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.guard */ 3870);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/products.component */ 99118);
/* harmony import */ var _auth_super_admin_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/super-admin.guard */ 93560);





const routes = [
    {
        path: '',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        // Have to use children option to prevent all guards from executing. This way they will execute one by one
        children: [
            {
                path: '',
                component: _products_products_component__WEBPACK_IMPORTED_MODULE_2__.ProductsComponent,
                canActivate: [_auth_super_admin_guard__WEBPACK_IMPORTED_MODULE_3__.SuperAdminGuard],
                data: { title: 'Products' },
            },
        ],
    },
    {
        path: 'vat-categories',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        // Have to use children option to prevent all guards from executing. This way they will execute one by one
        children: [
            {
                path: '',
                component: _vat_categories_vat_categories_component__WEBPACK_IMPORTED_MODULE_0__.VatCategoriesComponent,
                canActivate: [_auth_super_admin_guard__WEBPACK_IMPORTED_MODULE_3__.SuperAdminGuard],
                data: { title: 'Vat Categories' },
            },
        ],
    },
    {
        path: 'vendors',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_products_vendors_vendors_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./vendors/vendors.module */ 93574)).then((m) => m.VendorsModule),
    },
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes);


/***/ }),

/***/ 42300:
/*!*************************************************************!*\
  !*** ./src/app/products/products/product-form.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductFormComponent": () => (/* binding */ ProductFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base.component */ 83607);
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/product.model */ 81454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _global_dialog_dialog_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/dialog/dialog-title.component */ 37511);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);













function ProductFormComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 8)(1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " New product will not be visible on PortalApp unless it is linked with active vat category. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class ProductFormComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(formBuilder, dialogRef, data) {
        super();
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        // Convert input to ProductModel, so we have access to additional methods
        this.product = new _models_product_model__WEBPACK_IMPORTED_MODULE_1__.ProductAdapter().adapt(this.data.product);
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            name: [this.product.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            base: [this.product.base],
        });
    }
    get isUpdate() {
        return !!this.product.id;
    }
    close() {
        this.product.name = this.form.get('name').value;
        this.product.base = this.form.get('base').value;
        return this.product;
    }
}
ProductFormComponent.ɵfac = function ProductFormComponent_Factory(t) { return new (t || ProductFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA)); };
ProductFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProductFormComponent, selectors: [["app-product-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 8, consts: [[1, "mt-4", "mb-6"], [1, "grid", "grid-cols-1", 3, "formGroup"], ["matInput", "", "formControlName", "name", "autocomplete", "off"], ["color", "primary", "formControlName", "base", 1, "mb-2", "self-center"], ["class", "mt-5 flex items-center rounded border-gray-200 bg-dib-gray-100 p-4", 4, "ngIf"], [1, "mb-1", "justify-end"], ["mat-button", "", 3, "mat-dialog-close"], ["mat-button", "", "color", "primary", 3, "ngClass", "mat-dialog-close", "disabled"], [1, "mt-5", "flex", "items-center", "rounded", "border-gray-200", "bg-dib-gray-100", "p-4"], [1, "material-icons", "mr-2", "text-lg"]], template: function ProductFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "dib-dialog-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-dialog-content", 0)(3, "form", 1)(4, "mat-form-field")(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Is Online Product? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ProductFormComponent_span_10_Template, 4, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-dialog-actions", 5)(12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.isUpdate ? "Update" : "Add", " Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isUpdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.form.invalid ? "mat-flat-button" : "mat-stroked-button")("mat-dialog-close", ctx.close())("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.isUpdate ? "Save" : "Add", " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _global_dialog_dialog_title_component__WEBPACK_IMPORTED_MODULE_2__.DialogTitleComponent, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckbox], encapsulation: 2 });


/***/ }),

/***/ 99118:
/*!*********************************************************!*\
  !*** ./src/app/products/products/products.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var _actions_products_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/products.actions */ 56049);
/* harmony import */ var _reducers_products_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reducers/products.reducer */ 41878);
/* harmony import */ var _product_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-form.component */ 42300);
/* harmony import */ var _base_listing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base-listing.component */ 74760);
/* harmony import */ var _actions_confirmation_dialog_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/confirmation-dialog.actions */ 65516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global/breadcrumbs/breadcrumbs.component */ 25758);
/* harmony import */ var _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../global/breadcrumbs/breadcrumb/breadcrumb.component */ 62718);
/* harmony import */ var _global_wrapper_listing_wrapper_listing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../global/wrapper/listing/wrapper-listing.component */ 40542);
/* harmony import */ var _global_wrapper_listing_total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../global/wrapper/listing/total/wrapper-listing-total.component */ 57905);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../global/wrapper/main/wrapper-main.component */ 4122);
























function ProductsComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](row_r14.name);
  }
}
function ProductsComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Online Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return [a0];
};
function ProductsComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 34)(1, "span", 35)(2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c0, row_r15.base ? "text-dib-green-600" : "text-gray-200"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r15.base ? "Yes" : "No", " ");
  }
}
function ProductsComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 34)(1, "span", 35)(2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c0, row_r16.active ? "text-dib-green-600" : "text-gray-200"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r16.active ? "Active" : "Inactive", " ");
  }
}
function ProductsComponent_th_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-progress-bar", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_th_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProductsComponent_th_39_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("colSpan", ctx_r6.columns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, ctx_r6.products$).loading);
  }
}
function ProductsComponent_th_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "th", 40);
  }
}
function ProductsComponent_td_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 41)(1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProductsComponent_td_42_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20);
      const row_r18 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r19.save(row_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProductsComponent_td_42_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20);
      const row_r18 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r21.toggleStatus(row_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matTooltip", row_r18.active ? "Deactivate product in listing" : "Activate product in listing");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r18.active ? "hide_source" : "check_circle_outline", " ");
  }
}
function ProductsComponent_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 45);
  }
}
function ProductsComponent_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 45);
  }
}
function ProductsComponent_tr_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 46);
  }
}
function ProductsComponent_tr_46_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Loading data. This can take a few seconds, please be patient. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
}
function ProductsComponent_tr_46_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0, " No records found. Please refine your search and try again. ");
  }
}
function ProductsComponent_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 47)(1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ProductsComponent_tr_46_ng_container_2_Template, 2, 0, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ProductsComponent_tr_46_ng_template_4_Template, 1, 0, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("colSpan", ctx_r12.columns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 3, ctx_r12.products$).loading)("ngIfElse", _r24);
  }
}
function ProductsComponent_mat_paginator_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-paginator", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("page", function ProductsComponent_mat_paginator_48_Template_mat_paginator_page_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r26.onPageChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("length", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 3, ctx_r13.products$).pagination.totalElements)("pageIndex", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 5, ctx_r13.products$).pagination.number)("pageSize", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 7, ctx_r13.products$).pagination.size);
  }
}
const _c1 = function () {
  return ["loader"];
};
class ProductsComponent extends _base_listing_component__WEBPACK_IMPORTED_MODULE_3__.BaseListingComponent {
  constructor(injector, dialog) {
    super(injector);
    this.injector = injector;
    this.dialog = dialog;
    this.products$ = this.store.select(_reducers_products_reducer__WEBPACK_IMPORTED_MODULE_1__.selectProducts);
    this.tableDataSource$ = this.store.select(_reducers_products_reducer__WEBPACK_IMPORTED_MODULE_1__.selectProductsData);
  }
  ngOnInit() {
    this.sortActive = 'name';
    this.sortDirection = 'asc';
    this.columns = ['name', 'base', 'active', 'actions'];
    this.loadAction = _actions_products_actions__WEBPACK_IMPORTED_MODULE_0__.ProductActions.loadProducts;
    this.reloadOnActions = [_actions_products_actions__WEBPACK_IMPORTED_MODULE_0__.ProductActions.saveProductDetailsSuccess, _actions_products_actions__WEBPACK_IMPORTED_MODULE_0__.ProductActions.toggleProductStatusSuccess];
    super.ngOnInit();
    // Display only ACTIVE items by default
    this.filter('active', 'true');
  }
  toggleStatus(product) {
    this.store.dispatch(_actions_confirmation_dialog_actions__WEBPACK_IMPORTED_MODULE_4__.ConfirmationDialogActions.show({
      data: {
        template: `
            Are you sure you want to ${product.active ? 'deactivate' : 'activate'}
            <strong>${product.name}</strong>?
          `,
        confirm: {
          label: product.active ? 'Deactivate' : 'Activate',
          color: product.active ? 'warn' : 'primary'
        }
      },
      ok: () => {
        this.store.dispatch(_actions_products_actions__WEBPACK_IMPORTED_MODULE_0__.ProductActions.toggleProductStatus({
          data: product
        }));
      }
    }));
  }
  save(product) {
    const dialogRef = this.dialog.open(_product_form_component__WEBPACK_IMPORTED_MODULE_2__.ProductFormComponent, {
      data: {
        product
      }
    });
    dialogRef.afterClosed().subscribe(product => {
      if (product && product !== false) {
        this.store.dispatch(_actions_products_actions__WEBPACK_IMPORTED_MODULE_0__.ProductActions.saveProductDetails({
          data: product
        }));
      }
    });
  }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
  return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog));
};
ProductsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: ProductsComponent,
  selectors: [["app-products"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
  decls: 50,
  vars: 14,
  consts: [["label", "Dashboard", "route", "/"], ["label", "Generic Product"], ["label", "Products", "route", "/products"], ["slot", "filters"], [3, "value", "selectionChange"], ["value", "true"], ["value", "false"], ["matInput", "", "autocomplete", "off", 3, "keyup"], ["slot", "total"], [3, "total"], ["slot", "actions"], ["mat-stroked-button", "", 3, "click"], ["slot", "table"], ["mat-table", "", "matSort", "", "matSortDisableClear", "", 1, "whitespace-nowrap", 3, "matSortActive", "matSortDirection", "dataSource", "matSortChange"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "base"], ["mat-header-cell", "", "mat-sort-header", "", "class", "pl-4", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "pl-4", 4, "matCellDef"], ["matColumnDef", "active"], ["matColumnDef", "loader"], ["mat-header-cell", "", 3, "colSpan", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "whitespace-normal", 4, "matNoDataRow"], ["slot", "pagination"], [3, "length", "pageIndex", "pageSize", "page", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "pl-4"], ["mat-cell", "", 1, "pl-4"], [1, "flex", "items-center", "text-xs"], [1, "material-icons", "mr-1", "text-xs", 3, "ngClass"], ["mat-header-cell", "", 3, "colSpan"], [4, "ngIf"], ["mode", "indeterminate", 1, "absolute"], ["mat-header-cell", ""], ["mat-cell", "", 1, "text-right"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Edit product", "matTooltipPosition", "left", 3, "click"], [1, "material-icons"], ["mat-icon-button", "", "color", "accent", "matTooltipPosition", "left", 3, "matTooltip", "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "whitespace-normal"], [1, "border-b", "p-6", "text-center", 3, "colSpan"], [4, "ngIf", "ngIfElse"], ["noData", ""], [3, "length", "pageIndex", "pageSize", "page"]],
  template: function ProductsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "dib-wrapper-main")(1, "dib-breadcrumbs");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "dib-breadcrumb", 0)(3, "dib-breadcrumb", 1)(4, "dib-breadcrumb", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "dib-wrapper-listing");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](6, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "mat-form-field")(8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Filter by status");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "mat-select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectionChange", function ProductsComponent_Template_mat_select_selectionChange_10_listener($event) {
        return ctx.debouncedFilter("active", $event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Show All");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "mat-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "mat-option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Inactive");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "mat-form-field")(18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup", function ProductsComponent_Template_input_keyup_20_listener($event) {
        return ctx.debouncedFilter("name", $event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](21, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "dib-wrapper-listing-total", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](23, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](24, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_25_listener() {
        return ctx.save(null);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Add Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](27, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "table", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("matSortChange", function ProductsComponent_Template_table_matSortChange_28_listener($event) {
        return ctx.onSortChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](29, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, ProductsComponent_th_30_Template, 2, 0, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, ProductsComponent_td_31_Template, 2, 1, "td", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](32, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, ProductsComponent_th_33_Template, 2, 0, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, ProductsComponent_td_34_Template, 5, 4, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](35, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, ProductsComponent_th_36_Template, 2, 0, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](37, ProductsComponent_td_37_Template, 5, 4, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](38, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](39, ProductsComponent_th_39_Template, 3, 4, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](40, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](41, ProductsComponent_th_41_Template, 1, 0, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](42, ProductsComponent_td_42_Template, 7, 2, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](43, ProductsComponent_tr_43_Template, 1, 0, "tr", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](44, ProductsComponent_tr_44_Template, 1, 0, "tr", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](45, ProductsComponent_tr_45_Template, 1, 0, "tr", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](46, ProductsComponent_tr_46_Template, 6, 5, "tr", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](47, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, ProductsComponent_mat_paginator_48_Template, 4, 9, "mat-paginator", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](49, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.filters.active || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("total", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](23, 9, ctx.products$).pagination == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](23, 9, ctx.products$).pagination.totalElements);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matSortActive", ctx.sortActive)("matSortDirection", ctx.sortDirection)("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](13, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](49, 11, ctx.products$).pagination);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatNoDataRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortHeader, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__.MatProgressBar, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsComponent, _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbComponent, _global_wrapper_listing_wrapper_listing_component__WEBPACK_IMPORTED_MODULE_7__.WrapperListingComponent, _global_wrapper_listing_total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_8__.WrapperListingTotalComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltip, _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_9__.WrapperMainComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 54058:
/*!*********************************************************************!*\
  !*** ./src/app/products/vat-categories/vat-categories.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VatCategoriesComponent": () => (/* binding */ VatCategoriesComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/vat-categories.actions */ 54871);
/* harmony import */ var _reducers_vat_categories_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reducers/vat-categories.reducer */ 63301);
/* harmony import */ var _actions_confirmation_dialog_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/confirmation-dialog.actions */ 65516);
/* harmony import */ var _vat_category_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vat-category-form.component */ 84437);
/* harmony import */ var _reducers_countries_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers/countries.reducer */ 31000);
/* harmony import */ var _reducers_products_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/products.reducer */ 41878);
/* harmony import */ var _actions_products_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/products.actions */ 56049);
/* harmony import */ var _base_listing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../base-listing.component */ 74760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../global/breadcrumbs/breadcrumbs.component */ 25758);
/* harmony import */ var _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../global/breadcrumbs/breadcrumb/breadcrumb.component */ 62718);
/* harmony import */ var _global_wrapper_listing_wrapper_listing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../global/wrapper/listing/wrapper-listing.component */ 40542);
/* harmony import */ var _global_wrapper_listing_total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../global/wrapper/listing/total/wrapper-listing-total.component */ 57905);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../global/wrapper/main/wrapper-main.component */ 4122);




























function VatCategoriesComponent_mat_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const country_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("value", country_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](country_r19.name);
  }
}
function VatCategoriesComponent_mat_option_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("value", product_r20.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](product_r20.name);
  }
}
function VatCategoriesComponent_mat_option_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("value", product_r21.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](product_r21.name);
  }
}
function VatCategoriesComponent_th_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 43)(1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Vat Category Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function VatCategoriesComponent_td_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](row_r22.name);
  }
}
function VatCategoriesComponent_th_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 43)(1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Group Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function VatCategoriesComponent_td_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](row_r23.productName);
  }
}
function VatCategoriesComponent_th_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Vat (%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function VatCategoriesComponent_td_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 48)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](row_r24.vatPercentage);
  }
}
function VatCategoriesComponent_th_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return [a0];
};
function VatCategoriesComponent_td_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 51)(1, "span", 52)(2, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](2, _c0, row_r25.active ? "text-dib-green-600" : "text-gray-200"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", row_r25.active ? "Active" : "Inactive", " ");
  }
}
function VatCategoriesComponent_th_70_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "mat-progress-bar", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function VatCategoriesComponent_th_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, VatCategoriesComponent_th_70_div_1_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, ctx_r11.vatCategories$).loading);
  }
}
function VatCategoriesComponent_th_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 57);
  }
}
function VatCategoriesComponent_td_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 58)(1, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function VatCategoriesComponent_td_73_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r29);
      const row_r27 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r28.save(row_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function VatCategoriesComponent_td_73_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r29);
      const row_r27 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r30.toggleStatus(row_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matTooltip", row_r27.active ? "Deactivate vat category in listing" : "Activate vat category in listing");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", row_r27.active ? "hide_source" : "check_circle_outline", " ");
  }
}
function VatCategoriesComponent_tr_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 62);
  }
}
function VatCategoriesComponent_tr_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 62);
  }
}
function VatCategoriesComponent_tr_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 63);
  }
}
function VatCategoriesComponent_tr_77_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Loading data. This can take a few seconds, please be patient. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
}
function VatCategoriesComponent_tr_77_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0, " No records found. Please refine your search and try again. ");
  }
}
function VatCategoriesComponent_tr_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr", 64)(1, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, VatCategoriesComponent_tr_77_ng_container_2_Template, 2, 0, "ng-container", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, VatCategoriesComponent_tr_77_ng_template_4_Template, 1, 0, "ng-template", null, 67, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](5);
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("colSpan", ctx_r17.columns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 3, ctx_r17.vatCategories$).loading)("ngIfElse", _r33);
  }
}
function VatCategoriesComponent_mat_paginator_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-paginator", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("page", function VatCategoriesComponent_mat_paginator_79_Template_mat_paginator_page_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r35.onPageChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("length", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 3, ctx_r18.vatCategories$).pagination.totalElements)("pageIndex", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 5, ctx_r18.vatCategories$).pagination.number)("pageSize", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 7, ctx_r18.vatCategories$).pagination.size);
  }
}
const _c1 = function () {
  return ["loader"];
};
class VatCategoriesComponent extends _base_listing_component__WEBPACK_IMPORTED_MODULE_7__.BaseListingComponent {
  constructor(injector, dialog) {
    super(injector);
    this.injector = injector;
    this.dialog = dialog;
    this.countries$ = this.store.select(_reducers_countries_reducer__WEBPACK_IMPORTED_MODULE_4__.selectCountriesData);
    this.vatCategories$ = this.store.select(_reducers_vat_categories_reducer__WEBPACK_IMPORTED_MODULE_1__.selectVatCategories);
    this.tableDataSource$ = this.store.select(_reducers_vat_categories_reducer__WEBPACK_IMPORTED_MODULE_1__.selectVatCategoriesData);
    this.productsData$ = this.store.select(_reducers_products_reducer__WEBPACK_IMPORTED_MODULE_5__.selectProductsData);
    this.activeProductsData$ = this.productsData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(products => products.filter(product => product.active)));
    this.inactiveProductsData$ = this.productsData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(products => products.filter(product => !product.active)));
  }
  ngOnInit() {
    this.sortActive = 'name';
    this.sortDirection = 'asc';
    this.columns = ['name', 'product.name', 'vatPercentage', 'active', 'actions'];
    this.loadAction = _actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_0__.VatCategoryActions.loadVatCategories;
    this.reloadOnActions = [_actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_0__.VatCategoryActions.saveVatCategoryDetailsSuccess, _actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_0__.VatCategoryActions.toggleVatCategoryStatusSuccess];
    super.ngOnInit();
    // Display only ACTIVE items by default
    this.filter('active', 'true');
    // TODO: Probably better to create new endpoint GET products/all and return all results sorted by name and status
    this.store.dispatch(_actions_products_actions__WEBPACK_IMPORTED_MODULE_6__.ProductActions.loadProducts({
      params: {
        page: 1,
        size: 1000,
        sort: 'active,desc|name,asc'
      }
    }));
  }
  toggleStatus(vatCategory) {
    this.store.dispatch(_actions_confirmation_dialog_actions__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogActions.show({
      data: {
        template: `
            Are you sure you want to ${vatCategory.active ? 'deactivate' : 'activate'}
            <strong>${vatCategory.name}</strong>?
          `,
        confirm: {
          label: vatCategory.active ? 'Deactivate' : 'Activate',
          color: vatCategory.active ? 'warn' : 'primary'
        }
      },
      ok: () => {
        this.store.dispatch(_actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_0__.VatCategoryActions.toggleVatCategoryStatus({
          data: vatCategory
        }));
      }
    }));
  }
  save(vatCategory) {
    const dialogRef = this.dialog.open(_vat_category_form_component__WEBPACK_IMPORTED_MODULE_3__.VatCategoryFormComponent, {
      data: {
        vatCategory
      }
    });
    dialogRef.afterClosed().subscribe(vatCategory => {
      if (vatCategory && vatCategory !== false) {
        this.store.dispatch(_actions_vat_categories_actions__WEBPACK_IMPORTED_MODULE_0__.VatCategoryActions.saveVatCategoryDetails({
          data: vatCategory
        }));
      }
    });
  }
}
VatCategoriesComponent.ɵfac = function VatCategoriesComponent_Factory(t) {
  return new (t || VatCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog));
};
VatCategoriesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: VatCategoriesComponent,
  selectors: [["app-vat-categories"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]],
  decls: 81,
  vars: 23,
  consts: [["label", "Dashboard", "route", "/"], ["label", "Generic Product"], ["label", "Products", "route", "/products"], ["label", "Vat Categories", "route", "/products/vat-categories"], ["slot", "hidden-columns-message"], [1, "hidden", "xs:block"], ["slot", "filters"], [3, "value", "selectionChange"], ["value", "true"], ["value", "false"], [3, "selectionChange"], ["value", "197"], ["value", "190"], [3, "value", 4, "ngFor", "ngForOf"], ["label", "Inactive Products"], ["matInput", "", "autocomplete", "off", 3, "keyup"], ["slot", "total"], [3, "total"], ["slot", "actions"], ["mat-stroked-button", "", 3, "click"], ["slot", "table"], ["mat-table", "", "matSort", "", "matSortDisableClear", "", 1, "whitespace-nowrap", 3, "matSortActive", "matSortDirection", "dataSource", "matSortChange"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "whitespace-normal break-words pr-2", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "product.name"], ["matColumnDef", "vatPercentage"], ["class", "text-right xs:hidden", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "text-right xs:hidden", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "active"], ["mat-header-cell", "", "class", "pl-4", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "pl-4", 4, "matCellDef"], ["matColumnDef", "loader"], ["colspan", "5", "mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "whitespace-normal", 4, "matNoDataRow"], ["slot", "pagination"], [3, "length", "pageIndex", "pageSize", "page", 4, "ngIf"], [3, "value"], ["mat-header-cell", "", "mat-sort-header", ""], [1, "sm:hidden"], [1, "hidden", "sm:block"], ["mat-cell", "", 1, "whitespace-normal", "break-words", "pr-2"], ["mat-header-cell", "", "mat-sort-header", "", 1, "text-right", "xs:hidden"], ["mat-cell", "", 1, "text-right", "xs:hidden"], [1, "text-xs", "text-gray-500"], ["mat-header-cell", "", "mat-sort-header", "", 1, "pl-4"], ["mat-cell", "", 1, "pl-4"], [1, "flex", "items-center", "text-xs"], [1, "material-icons", "mr-1", "text-xs", 3, "ngClass"], ["colspan", "5", "mat-header-cell", ""], [4, "ngIf"], ["mode", "indeterminate", 1, "absolute"], ["mat-header-cell", ""], ["mat-cell", "", 1, "text-right"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Edit vat category", "matTooltipPosition", "left", 3, "click"], [1, "material-icons"], ["mat-icon-button", "", "color", "accent", "matTooltipPosition", "left", 3, "matTooltip", "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "whitespace-normal"], [1, "border-b", "p-6", "text-center", 3, "colSpan"], [4, "ngIf", "ngIfElse"], ["noData", ""], [3, "length", "pageIndex", "pageSize", "page"]],
  template: function VatCategoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "dib-wrapper-main")(1, "dib-breadcrumbs");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "dib-breadcrumb", 0)(3, "dib-breadcrumb", 1)(4, "dib-breadcrumb", 2)(5, "dib-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "dib-wrapper-listing");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](7, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "* Some columns are hidden due to small screen size");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](10, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "mat-form-field")(12, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "Filter by status");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "mat-select", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("selectionChange", function VatCategoriesComponent_Template_mat_select_selectionChange_14_listener($event) {
        return ctx.debouncedFilter("active", $event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "Show All");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "mat-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, "Inactive");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "mat-form-field")(22, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, "Point of Sale");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "mat-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("selectionChange", function VatCategoriesComponent_Template_mat_select_selectionChange_24_listener($event) {
        return ctx.debouncedFilter("countryId", $event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26, "Show All");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "Sweden");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30, "Serbia");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](31, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](32, VatCategoriesComponent_mat_option_32_Template, 2, 2, "mat-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](33, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "mat-form-field")(35, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](36, "Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "mat-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("selectionChange", function VatCategoriesComponent_Template_mat_select_selectionChange_37_listener($event) {
        return ctx.debouncedFilter("productId", $event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](39, "Show All");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](40, VatCategoriesComponent_mat_option_40_Template, 2, 2, "mat-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](41, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "mat-optgroup", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](43, VatCategoriesComponent_mat_option_43_Template, 2, 2, "mat-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](44, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "mat-form-field")(46, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47, "Vat Category Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keyup", function VatCategoriesComponent_Template_input_keyup_48_listener($event) {
        return ctx.debouncedFilter("name", $event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](49, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](50, "dib-wrapper-listing-total", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](51, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](52, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](53, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function VatCategoriesComponent_Template_button_click_53_listener() {
        return ctx.save(null);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](54, "Add Vat Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](55, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](56, "table", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("matSortChange", function VatCategoriesComponent_Template_table_matSortChange_56_listener($event) {
        return ctx.onSortChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](57, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](58, VatCategoriesComponent_th_58_Template, 5, 0, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](59, VatCategoriesComponent_td_59_Template, 2, 1, "td", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](60, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](61, VatCategoriesComponent_th_61_Template, 5, 0, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](62, VatCategoriesComponent_td_62_Template, 2, 1, "td", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](63, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](64, VatCategoriesComponent_th_64_Template, 2, 0, "th", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](65, VatCategoriesComponent_td_65_Template, 5, 1, "td", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](66, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](67, VatCategoriesComponent_th_67_Template, 2, 0, "th", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](68, VatCategoriesComponent_td_68_Template, 5, 4, "td", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](69, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](70, VatCategoriesComponent_th_70_Template, 3, 3, "th", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](71, 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](72, VatCategoriesComponent_th_72_Template, 1, 0, "th", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](73, VatCategoriesComponent_td_73_Template, 7, 2, "td", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](74, VatCategoriesComponent_tr_74_Template, 1, 0, "tr", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](75, VatCategoriesComponent_tr_75_Template, 1, 0, "tr", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](76, VatCategoriesComponent_tr_76_Template, 1, 0, "tr", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](77, VatCategoriesComponent_tr_77_Template, 6, 5, "tr", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](78, 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](79, VatCategoriesComponent_mat_paginator_79_Template, 4, 9, "mat-paginator", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](80, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", ctx.filters.active || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](33, 12, ctx.countries$));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](41, 14, ctx.activeProductsData$));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](44, 16, ctx.inactiveProductsData$));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("total", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](51, 18, ctx.vatCategories$).pagination == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](51, 18, ctx.vatCategories$).pagination.totalElements);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matSortActive", ctx.sortActive)("matSortDirection", ctx.sortDirection)("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](22, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](80, 20, ctx.vatCategories$).pagination);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatNoDataRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortHeader, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginator, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__.MatProgressBar, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatOptgroup, _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInput, _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_8__.BreadcrumbsComponent, _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__.BreadcrumbComponent, _global_wrapper_listing_wrapper_listing_component__WEBPACK_IMPORTED_MODULE_10__.WrapperListingComponent, _global_wrapper_listing_total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_11__.WrapperListingTotalComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltip, _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_12__.WrapperMainComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 84437:
/*!************************************************************************!*\
  !*** ./src/app/products/vat-categories/vat-category-form.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VatCategoryFormComponent": () => (/* binding */ VatCategoryFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _reducers_countries_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../reducers/countries.reducer */ 31000);
/* harmony import */ var _reducers_products_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reducers/products.reducer */ 41878);
/* harmony import */ var _actions_products_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/products.actions */ 56049);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base.component */ 83607);
/* harmony import */ var _models_vat_category_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/vat-category.model */ 62342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _global_dialog_dialog_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global/dialog/dialog-title.component */ 37511);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dropdown */ 38992);


















function VatCategoryFormComponent_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const country_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", country_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](country_r1.name);
  }
}
// Default country is Sweden
const DEFAULT_COUNTRY_ID = '197';
class VatCategoryFormComponent extends _base_component__WEBPACK_IMPORTED_MODULE_3__.BaseComponent {
  constructor(formBuilder, store, dialogRef, data) {
    super();
    this.formBuilder = formBuilder;
    this.store = store;
    this.dialogRef = dialogRef;
    this.data = data;
    this.form = this.formBuilder.group({
      name: '',
      externalId: '',
      vatPercentage: null,
      country: null,
      product: null
    });
    this.countries$ = this.store.select(_reducers_countries_reducer__WEBPACK_IMPORTED_MODULE_0__.selectCountriesData);
    this.productsData$ = this.store.select(_reducers_products_reducer__WEBPACK_IMPORTED_MODULE_1__.selectProductsData);
    // Convert input to VatCategoryModel, so we have access to additional methods
    this.vatCategory = new _models_vat_category_model__WEBPACK_IMPORTED_MODULE_4__.VatCategoryAdapter().adapt(this.data.vatCategory);
    // TODO: Probably better to create new endpoint GET products/all and return all results sorted by name and status
    this.store.dispatch(_actions_products_actions__WEBPACK_IMPORTED_MODULE_2__.ProductActions.loadProducts({
      params: {
        page: 1,
        size: 1000,
        sort: 'active,desc|name,asc'
      }
    }));
  }
  ngOnInit() {
    this.form.patchValue({
      name: this.vatCategory.name,
      externalId: this.vatCategory.externalId,
      vatPercentage: this.vatCategory.vatPercentage
    });
    this.subscriptions.add(this.countries$.subscribe(data => {
      this.countries = data;
      // Prefill with existing country or fallback to a default country
      this.form.get('country').patchValue(this.countries.find(country => country.id === (this.vatCategory.countryId || DEFAULT_COUNTRY_ID)));
    }));
    this.subscriptions.add(this.productsData$.subscribe(data => {
      this.products = data;
      // Prefill with existing product
      this.form.get('product').patchValue(this.products.find(product => product.id === this.vatCategory.productId));
    }));
  }
  get isUpdate() {
    return !!this.vatCategory.id;
  }
  close() {
    const formData = this.form.getRawValue();
    this.dialogRef.close({
      ...this.vatCategory,
      name: formData.name,
      externalId: formData.externalId,
      vatPercentage: formData.vatPercentage,
      productId: formData.product.id,
      productName: formData.product.name,
      countryId: formData.country.id
    });
  }
}
VatCategoryFormComponent.ɵfac = function VatCategoryFormComponent_Factory(t) {
  return new (t || VatCategoryFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA));
};
VatCategoryFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: VatCategoryFormComponent,
  selectors: [["app-vat-category-form"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  decls: 32,
  vars: 15,
  consts: [[1, "mt-4", "mb-6"], [1, "grid", "grid-cols-1", 3, "formGroup"], ["required", "", "matInput", "", "formControlName", "name", "autocomplete", "off"], ["required", "", "formControlName", "country"], [3, "value", 4, "ngFor", "ngForOf"], [1, "p-float-label", "mb-6"], ["formControlName", "product", "optionLabel", "name", "appendTo", "body", "styleClass", "flex", "required", "", 3, "filter", "resetFilterOnHide", "autoDisplayFirst", "options"], ["required", "", "matInput", "", "formControlName", "externalId", "autocomplete", "off"], ["required", "", "matInput", "", "formControlName", "vatPercentage", "autocomplete", "off"], [1, "mb-1", "justify-end"], ["mat-button", "", 3, "mat-dialog-close"], ["mat-button", "", "color", "primary", 3, "ngClass", "disabled", "click"], [3, "value"]],
  template: function VatCategoryFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "dib-dialog-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-dialog-content", 0)(3, "form", 1)(4, "mat-form-field")(5, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Vat Category Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-form-field")(9, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Point of Sale");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-select", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, VatCategoryFormComponent_mat_option_12_Template, 2, 2, "mat-option", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "p-dropdown", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-form-field")(20, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "External ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "mat-form-field")(24, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Vat (%)");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "mat-dialog-actions", 9)(28, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VatCategoryFormComponent_Template_button_click_30_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.isUpdate ? "Edit" : "Add", " Vat Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 11, ctx.countries$));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("filter", true)("resetFilterOnHide", true)("autoDisplayFirst", false)("options", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 13, ctx.productsData$));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.form.invalid ? "mat-flat-button" : "mat-stroked-button")("disabled", ctx.form.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.isUpdate ? "Save" : "Add", " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _global_dialog_dialog_title_component__WEBPACK_IMPORTED_MODULE_5__.DialogTitleComponent, primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__.Dropdown, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 44792:
/*!**************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/checkbox.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR": () => (/* binding */ MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR),
/* harmony export */   "MAT_CHECKBOX_DEFAULT_OPTIONS": () => (/* binding */ MAT_CHECKBOX_DEFAULT_OPTIONS),
/* harmony export */   "MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY": () => (/* binding */ MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "MAT_CHECKBOX_REQUIRED_VALIDATOR": () => (/* binding */ MAT_CHECKBOX_REQUIRED_VALIDATOR),
/* harmony export */   "MatCheckbox": () => (/* binding */ MatCheckbox),
/* harmony export */   "MatCheckboxChange": () => (/* binding */ MatCheckboxChange),
/* harmony export */   "MatCheckboxModule": () => (/* binding */ MatCheckboxModule),
/* harmony export */   "MatCheckboxRequiredValidator": () => (/* binding */ MatCheckboxRequiredValidator),
/* harmony export */   "_MatCheckboxBase": () => (/* binding */ _MatCheckboxBase),
/* harmony export */   "_MatCheckboxRequiredValidatorModule": () => (/* binding */ _MatCheckboxRequiredValidatorModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 24218);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 48971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/observers */ 43773);











/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token to be used to override the default options for `mat-checkbox`. */
const _c0 = ["input"];
const _c1 = ["label"];
const _c2 = function (a0) {
  return {
    enterDuration: a0
  };
};
const _c3 = ["*"];
const MAT_CHECKBOX_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-checkbox-default-options', {
  providedIn: 'root',
  factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */
function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: 'accent',
    clickAction: 'check-indeterminate'
  };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Increasing integer for generating unique ids for checkbox components.
let nextUniqueId = 0;
// Default checkbox configuration.
const defaults = MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY();
/**
 * Provider Expression that allows mat-checkbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
const MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCheckbox),
  multi: true
};
/** Change event object emitted by MatCheckbox. */
class MatCheckboxChange {}
// Boilerplate for applying mixins to MatCheckbox.
/** @docs-private */
const _MatCheckboxMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinTabIndex)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinColor)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisableRipple)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisabled)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
}))));
class _MatCheckboxBase extends _MatCheckboxMixinBase {
  constructor(idPrefix, elementRef, _changeDetectorRef, _ngZone, tabIndex, _animationMode, _options) {
    super(elementRef);
    this._changeDetectorRef = _changeDetectorRef;
    this._ngZone = _ngZone;
    this._animationMode = _animationMode;
    this._options = _options;
    /**
     * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
     * take precedence so this may be omitted.
     */
    this.ariaLabel = '';
    /**
     * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
     */
    this.ariaLabelledby = null;
    /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
    this.labelPosition = 'after';
    /** Name value will be applied to the input element if present */
    this.name = null;
    /** Event emitted when the checkbox's `checked` value changes. */
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the checkbox's `indeterminate` value changes. */
    this.indeterminateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
     * @docs-private
     */
    this._onTouched = () => {};
    this._currentAnimationClass = '';
    this._currentCheckState = 0 /* TransitionCheckState.Init */;
    this._controlValueAccessorChangeFn = () => {};
    this._checked = false;
    this._disabled = false;
    this._indeterminate = false;
    this._options = this._options || defaults;
    this.color = this.defaultColor = this._options.color || defaults.color;
    this.tabIndex = parseInt(tabIndex) || 0;
    this.id = this._uniqueId = `${idPrefix}${++nextUniqueId}`;
  }
  /** Returns the unique id for the visual hidden input. */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  /** Whether the checkbox is required. */
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  ngAfterViewInit() {
    this._syncIndeterminate(this._indeterminate);
  }
  /** Whether the checkbox is checked. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    const checked = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    if (checked != this.checked) {
      this._checked = checked;
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Whether the checkbox is disabled. This fully overrides the implementation provided by
   * mixinDisabled, but the mixin is still required because mixinTabIndex requires it.
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    if (newValue !== this.disabled) {
      this._disabled = newValue;
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
   * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
   * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
   * set to false.
   */
  get indeterminate() {
    return this._indeterminate;
  }
  set indeterminate(value) {
    const changed = value != this._indeterminate;
    this._indeterminate = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    if (changed) {
      if (this._indeterminate) {
        this._transitionCheckState(3 /* TransitionCheckState.Indeterminate */);
      } else {
        this._transitionCheckState(this.checked ? 1 /* TransitionCheckState.Checked */ : 2 /* TransitionCheckState.Unchecked */);
      }

      this.indeterminateChange.emit(this._indeterminate);
    }
    this._syncIndeterminate(this._indeterminate);
  }
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  /** Method being called whenever the label text changes. */
  _onLabelTextChange() {
    // Since the event of the `cdkObserveContent` directive runs outside of the zone, the checkbox
    // component will be only marked for check, but no actual change detection runs automatically.
    // Instead of going back into the zone in order to trigger a change detection which causes
    // *all* components to be checked (if explicitly marked or not using OnPush), we only trigger
    // an explicit change detection for the checkbox view and its children.
    this._changeDetectorRef.detectChanges();
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this.checked = !!value;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  _getAriaChecked() {
    if (this.checked) {
      return 'true';
    }
    return this.indeterminate ? 'mixed' : 'false';
  }
  _transitionCheckState(newState) {
    let oldState = this._currentCheckState;
    let element = this._getAnimationTargetElement();
    if (oldState === newState || !element) {
      return;
    }
    if (this._currentAnimationClass) {
      element.classList.remove(this._currentAnimationClass);
    }
    this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
    this._currentCheckState = newState;
    if (this._currentAnimationClass.length > 0) {
      element.classList.add(this._currentAnimationClass);
      // Remove the animation class to avoid animation when the checkbox is moved between containers
      const animationClass = this._currentAnimationClass;
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          element.classList.remove(animationClass);
        }, 1000);
      });
    }
  }
  _emitChangeEvent() {
    this._controlValueAccessorChangeFn(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
    // Assigning the value again here is redundant, but we have to do it in case it was
    // changed inside the `change` listener which will cause the input to be out of sync.
    if (this._inputElement) {
      this._inputElement.nativeElement.checked = this.checked;
    }
  }
  /** Toggles the `checked` state of the checkbox. */
  toggle() {
    this.checked = !this.checked;
    this._controlValueAccessorChangeFn(this.checked);
  }
  _handleInputClick() {
    const clickAction = this._options?.clickAction;
    // If resetIndeterminate is false, and the current state is indeterminate, do nothing on click
    if (!this.disabled && clickAction !== 'noop') {
      // When user manually click on the checkbox, `indeterminate` is set to false.
      if (this.indeterminate && clickAction !== 'check') {
        Promise.resolve().then(() => {
          this._indeterminate = false;
          this.indeterminateChange.emit(this._indeterminate);
        });
      }
      this._checked = !this._checked;
      this._transitionCheckState(this._checked ? 1 /* TransitionCheckState.Checked */ : 2 /* TransitionCheckState.Unchecked */);
      // Emit our custom change event if the native input emitted one.
      // It is important to only emit it, if the native input triggered one, because
      // we don't want to trigger a change event, when the `checked` variable changes for example.
      this._emitChangeEvent();
    } else if (!this.disabled && clickAction === 'noop') {
      // Reset native input when clicked with noop. The native checkbox becomes checked after
      // click, reset it to be align with `checked` value of `mat-checkbox`.
      this._inputElement.nativeElement.checked = this.checked;
      this._inputElement.nativeElement.indeterminate = this.indeterminate;
    }
  }
  _onInteractionEvent(event) {
    // We always have to stop propagation on the change event.
    // Otherwise the change event, from the input element, will bubble up and
    // emit its event object to the `change` output.
    event.stopPropagation();
  }
  _onBlur() {
    // When a focused element becomes disabled, the browser *immediately* fires a blur event.
    // Angular does not expect events to be raised during change detection, so any state change
    // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
    // See https://github.com/angular/angular/issues/17793. To work around this, we defer
    // telling the form control it has been touched until the next tick.
    Promise.resolve().then(() => {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
    });
  }
  _getAnimationClassForCheckStateTransition(oldState, newState) {
    // Don't transition if animations are disabled.
    if (this._animationMode === 'NoopAnimations') {
      return '';
    }
    switch (oldState) {
      case 0 /* TransitionCheckState.Init */:
        // Handle edge case where user interacts with checkbox that does not have [(ngModel)] or
        // [checked] bound to it.
        if (newState === 1 /* TransitionCheckState.Checked */) {
          return this._animationClasses.uncheckedToChecked;
        } else if (newState == 3 /* TransitionCheckState.Indeterminate */) {
          return this._checked ? this._animationClasses.checkedToIndeterminate : this._animationClasses.uncheckedToIndeterminate;
        }
        break;
      case 2 /* TransitionCheckState.Unchecked */:
        return newState === 1 /* TransitionCheckState.Checked */ ? this._animationClasses.uncheckedToChecked : this._animationClasses.uncheckedToIndeterminate;
      case 1 /* TransitionCheckState.Checked */:
        return newState === 2 /* TransitionCheckState.Unchecked */ ? this._animationClasses.checkedToUnchecked : this._animationClasses.checkedToIndeterminate;
      case 3 /* TransitionCheckState.Indeterminate */:
        return newState === 1 /* TransitionCheckState.Checked */ ? this._animationClasses.indeterminateToChecked : this._animationClasses.indeterminateToUnchecked;
    }
    return '';
  }
  /**
   * Syncs the indeterminate value with the checkbox DOM node.
   *
   * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
   * property is supported on an element boils down to `if (propName in element)`. Domino's
   * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
   * server-side rendering.
   */
  _syncIndeterminate(value) {
    const nativeCheckbox = this._inputElement;
    if (nativeCheckbox) {
      nativeCheckbox.nativeElement.indeterminate = value;
    }
  }
}
_MatCheckboxBase.ɵfac = function _MatCheckboxBase_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
};
_MatCheckboxBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatCheckboxBase,
  viewQuery: function _MatCheckboxBase_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._labelElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
    }
  },
  inputs: {
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    ariaDescribedby: ["aria-describedby", "ariaDescribedby"],
    id: "id",
    required: "required",
    labelPosition: "labelPosition",
    name: "name",
    value: "value",
    checked: "checked",
    disabled: "disabled",
    indeterminate: "indeterminate"
  },
  outputs: {
    change: "change",
    indeterminateChange: "indeterminateChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatCheckboxBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: undefined
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined
    }, {
      type: undefined
    }, {
      type: undefined
    }];
  }, {
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
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    indeterminateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _inputElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['input']
    }],
    _labelElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['label']
    }],
    ripple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple]
    }],
    checked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    indeterminate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * A material design checkbox component. Supports all of the functionality of an HTML5 checkbox,
 * and exposes a similar API. A MatCheckbox can be either checked, unchecked, indeterminate, or
 * disabled. Note that all additional accessibility attributes are taken care of by the component,
 * so there is no need to provide them yourself. However, if you want to omit a label and still
 * have the checkbox be accessible, you may supply an [aria-label] input.
 * See: https://material.io/design/components/selection-controls.html
 */
class MatCheckbox extends _MatCheckboxBase {
  constructor(elementRef, changeDetectorRef, _focusMonitor, ngZone, tabIndex, animationMode, options) {
    super('mat-checkbox-', elementRef, changeDetectorRef, ngZone, tabIndex, animationMode, options);
    this._focusMonitor = _focusMonitor;
    this._animationClasses = {
      uncheckedToChecked: 'mat-checkbox-anim-unchecked-checked',
      uncheckedToIndeterminate: 'mat-checkbox-anim-unchecked-indeterminate',
      checkedToUnchecked: 'mat-checkbox-anim-checked-unchecked',
      checkedToIndeterminate: 'mat-checkbox-anim-checked-indeterminate',
      indeterminateToChecked: 'mat-checkbox-anim-indeterminate-checked',
      indeterminateToUnchecked: 'mat-checkbox-anim-indeterminate-unchecked'
    };
  }
  _createChangeEvent(isChecked) {
    const event = new MatCheckboxChange();
    event.source = this;
    event.checked = isChecked;
    return event;
  }
  _getAnimationTargetElement() {
    return this._elementRef.nativeElement;
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    this._focusMonitor.monitor(this._elementRef, true).subscribe(focusOrigin => {
      if (!focusOrigin) {
        this._onBlur();
      }
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  /**
   * Event handler for checkbox input element.
   * Toggles checked state if element is not disabled.
   * Do not toggle on (change) event since IE doesn't fire change event when
   *   indeterminate checkbox is clicked.
   * @param event
   */
  _onInputClick(event) {
    // We have to stop propagation for click events on the visual hidden input element.
    // By default, when a user clicks on a label element, a generated click event will be
    // dispatched on the associated input element. Since we are using a label element as our
    // root container, the click event on the `checkbox` will be executed twice.
    // The real click event will bubble up, and the generated click event also tries to bubble up.
    // This will lead to multiple click events.
    // Preventing bubbling for the second event will solve that issue.
    event.stopPropagation();
    super._handleInputClick();
  }
  /** Focuses the checkbox. */
  focus(origin, options) {
    if (origin) {
      this._focusMonitor.focusVia(this._inputElement, origin, options);
    } else {
      this._inputElement.nativeElement.focus(options);
    }
  }
}
MatCheckbox.ɵfac = function MatCheckbox_Factory(t) {
  return new (t || MatCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_CHECKBOX_DEFAULT_OPTIONS, 8));
};
MatCheckbox.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatCheckbox,
  selectors: [["mat-checkbox"]],
  hostAttrs: [1, "mat-checkbox"],
  hostVars: 14,
  hostBindings: function MatCheckbox_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", null)("aria-label", null)("aria-labelledby", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-checkbox-indeterminate", ctx.indeterminate)("mat-checkbox-checked", ctx.checked)("mat-checkbox-disabled", ctx.disabled)("mat-checkbox-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    }
  },
  inputs: {
    disableRipple: "disableRipple",
    color: "color",
    tabIndex: "tabIndex"
  },
  exportAs: ["matCheckbox"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c3,
  decls: 17,
  vars: 21,
  consts: [[1, "mat-checkbox-layout"], ["label", ""], [1, "mat-checkbox-inner-container"], ["type", "checkbox", 1, "mat-checkbox-input", "cdk-visually-hidden", 3, "id", "required", "checked", "disabled", "tabIndex", "change", "click"], ["input", ""], ["matRipple", "", 1, "mat-checkbox-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleRadius", "matRippleCentered", "matRippleAnimation"], [1, "mat-ripple-element", "mat-checkbox-persistent-ripple"], [1, "mat-checkbox-frame"], [1, "mat-checkbox-background"], ["version", "1.1", "focusable", "false", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mat-checkbox-checkmark"], ["fill", "none", "stroke", "white", "d", "M4.1,12.7 9,17.6 20.3,6.3", 1, "mat-checkbox-checkmark-path"], [1, "mat-checkbox-mixedmark"], [1, "mat-checkbox-label", 3, "cdkObserveContent"], ["checkboxLabel", ""], [2, "display", "none"]],
  template: function MatCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0, 1)(2, "span", 2)(3, "input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MatCheckbox_Template_input_change_3_listener($event) {
        return ctx._onInteractionEvent($event);
      })("click", function MatCheckbox_Template_input_click_3_listener($event) {
        return ctx._onInputClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatCheckbox_Template_span_cdkObserveContent_12_listener() {
        return ctx._onLabelTextChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\xA0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.inputId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-checkbox-inner-container-no-side-margin", !_r2.textContent || !_r2.textContent.trim());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("checked", ctx.checked)("disabled", ctx.disabled)("tabIndex", ctx.tabIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("value", ctx.value)("name", ctx.name)("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-checked", ctx._getAriaChecked())("aria-describedby", ctx.ariaDescribedby);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx._isRippleDisabled())("matRippleRadius", 20)("matRippleCentered", true)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c2, ctx._animationMode === "NoopAnimations" ? 0 : 150));
    }
  },
  dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__.CdkObserveContent],
  styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{display:inline-block;transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative}.mat-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-checkbox-layout{-webkit-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:rgba(0,0,0,0);transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{display:block;width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:rgba(0,0,0,0)}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox-input:focus~.mat-focus-indicator::before{content:\"\"}"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCheckbox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-checkbox',
      exportAs: 'matCheckbox',
      host: {
        'class': 'mat-checkbox',
        '[id]': 'id',
        '[attr.tabindex]': 'null',
        '[attr.aria-label]': 'null',
        '[attr.aria-labelledby]': 'null',
        '[class.mat-checkbox-indeterminate]': 'indeterminate',
        '[class.mat-checkbox-checked]': 'checked',
        '[class.mat-checkbox-disabled]': 'disabled',
        '[class.mat-checkbox-label-before]': 'labelPosition == "before"',
        '[class._mat-animation-noopable]': `_animationMode === 'NoopAnimations'`
      },
      providers: [MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR],
      inputs: ['disableRipple', 'color', 'tabIndex'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<label [attr.for]=\"inputId\" class=\"mat-checkbox-layout\" #label>\n  <span class=\"mat-checkbox-inner-container\"\n       [class.mat-checkbox-inner-container-no-side-margin]=\"!checkboxLabel.textContent || !checkboxLabel.textContent.trim()\">\n    <input #input\n           class=\"mat-checkbox-input cdk-visually-hidden\" type=\"checkbox\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [checked]=\"checked\"\n           [attr.value]=\"value\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [tabIndex]=\"tabIndex\"\n           [attr.aria-label]=\"ariaLabel || null\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           [attr.aria-checked]=\"_getAriaChecked()\"\n           [attr.aria-describedby]=\"ariaDescribedby\"\n           (change)=\"_onInteractionEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n    <span matRipple class=\"mat-checkbox-ripple mat-focus-indicator\"\n         [matRippleTrigger]=\"label\"\n         [matRippleDisabled]=\"_isRippleDisabled()\"\n         [matRippleRadius]=\"20\"\n         [matRippleCentered]=\"true\"\n         [matRippleAnimation]=\"{enterDuration: _animationMode === 'NoopAnimations' ? 0 : 150}\">\n      <span class=\"mat-ripple-element mat-checkbox-persistent-ripple\"></span>\n    </span>\n    <span class=\"mat-checkbox-frame\"></span>\n    <span class=\"mat-checkbox-background\">\n      <svg version=\"1.1\"\n           focusable=\"false\"\n           class=\"mat-checkbox-checkmark\"\n           viewBox=\"0 0 24 24\"\n           aria-hidden=\"true\">\n        <path class=\"mat-checkbox-checkmark-path\"\n              fill=\"none\"\n              stroke=\"white\"\n              d=\"M4.1,12.7 9,17.6 20.3,6.3\"/>\n      </svg>\n      <!-- Element for rendering the indeterminate state checkbox. -->\n      <span class=\"mat-checkbox-mixedmark\"></span>\n    </span>\n  </span>\n  <span class=\"mat-checkbox-label\" #checkboxLabel (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
      styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{display:inline-block;transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative}.mat-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-checkbox-layout{-webkit-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:rgba(0,0,0,0);transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{display:block;width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:rgba(0,0,0,0)}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox-input:focus~.mat-focus-indicator::before{content:\"\"}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['tabindex']
      }]
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
        args: [MAT_CHECKBOX_DEFAULT_OPTIONS]
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
const MAT_CHECKBOX_REQUIRED_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCheckboxRequiredValidator),
  multi: true
};
/**
 * Validator for Material checkbox's required attribute in template-driven checkbox.
 * Current CheckboxRequiredValidator only work with `input type=checkbox` and does not
 * work with `mat-checkbox`.
 */
class MatCheckboxRequiredValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxRequiredValidator {}
MatCheckboxRequiredValidator.ɵfac = /* @__PURE__ */function () {
  let ɵMatCheckboxRequiredValidator_BaseFactory;
  return function MatCheckboxRequiredValidator_Factory(t) {
    return (ɵMatCheckboxRequiredValidator_BaseFactory || (ɵMatCheckboxRequiredValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCheckboxRequiredValidator)))(t || MatCheckboxRequiredValidator);
  };
}();
MatCheckboxRequiredValidator.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCheckboxRequiredValidator,
  selectors: [["mat-checkbox", "required", "", "formControlName", ""], ["mat-checkbox", "required", "", "formControl", ""], ["mat-checkbox", "required", "", "ngModel", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCheckboxRequiredValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-checkbox[required][formControlName],
             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]`,
      providers: [MAT_CHECKBOX_REQUIRED_VALIDATOR]
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
/** This module is used by both original and MDC-based checkbox implementations. */
class _MatCheckboxRequiredValidatorModule {}
_MatCheckboxRequiredValidatorModule.ɵfac = function _MatCheckboxRequiredValidatorModule_Factory(t) {
  return new (t || _MatCheckboxRequiredValidatorModule)();
};
_MatCheckboxRequiredValidatorModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _MatCheckboxRequiredValidatorModule
});
_MatCheckboxRequiredValidatorModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatCheckboxRequiredValidatorModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [MatCheckboxRequiredValidator],
      declarations: [MatCheckboxRequiredValidator]
    }]
  }], null, null);
})();
class MatCheckboxModule {}
MatCheckboxModule.ɵfac = function MatCheckboxModule_Factory(t) {
  return new (t || MatCheckboxModule)();
};
MatCheckboxModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatCheckboxModule
});
MatCheckboxModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__.ObserversModule, _MatCheckboxRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _MatCheckboxRequiredValidatorModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCheckboxModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__.ObserversModule, _MatCheckboxRequiredValidatorModule],
      exports: [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _MatCheckboxRequiredValidatorModule],
      declarations: [MatCheckbox]
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



/***/ }),

/***/ 14356:
/*!*******************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-api.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmEventType": () => (/* binding */ ConfirmEventType),
/* harmony export */   "ConfirmationService": () => (/* binding */ ConfirmationService),
/* harmony export */   "ContextMenuService": () => (/* binding */ ContextMenuService),
/* harmony export */   "FilterMatchMode": () => (/* binding */ FilterMatchMode),
/* harmony export */   "FilterOperator": () => (/* binding */ FilterOperator),
/* harmony export */   "FilterService": () => (/* binding */ FilterService),
/* harmony export */   "Footer": () => (/* binding */ Footer),
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "MessageService": () => (/* binding */ MessageService),
/* harmony export */   "OverlayService": () => (/* binding */ OverlayService),
/* harmony export */   "PrimeIcons": () => (/* binding */ PrimeIcons),
/* harmony export */   "PrimeNGConfig": () => (/* binding */ PrimeNGConfig),
/* harmony export */   "PrimeTemplate": () => (/* binding */ PrimeTemplate),
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule),
/* harmony export */   "TranslationKeys": () => (/* binding */ TranslationKeys),
/* harmony export */   "TreeDragDropService": () => (/* binding */ TreeDragDropService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 68549);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);





const _c0 = ["*"];
class FilterMatchMode {}
FilterMatchMode.STARTS_WITH = 'startsWith';
FilterMatchMode.CONTAINS = 'contains';
FilterMatchMode.NOT_CONTAINS = 'notContains';
FilterMatchMode.ENDS_WITH = 'endsWith';
FilterMatchMode.EQUALS = 'equals';
FilterMatchMode.NOT_EQUALS = 'notEquals';
FilterMatchMode.IN = 'in';
FilterMatchMode.LESS_THAN = 'lt';
FilterMatchMode.LESS_THAN_OR_EQUAL_TO = 'lte';
FilterMatchMode.GREATER_THAN = 'gt';
FilterMatchMode.GREATER_THAN_OR_EQUAL_TO = 'gte';
FilterMatchMode.BETWEEN = 'between';
FilterMatchMode.IS = 'is';
FilterMatchMode.IS_NOT = 'isNot';
FilterMatchMode.BEFORE = 'before';
FilterMatchMode.AFTER = 'after';
FilterMatchMode.DATE_IS = 'dateIs';
FilterMatchMode.DATE_IS_NOT = 'dateIsNot';
FilterMatchMode.DATE_BEFORE = 'dateBefore';
FilterMatchMode.DATE_AFTER = 'dateAfter';
class PrimeNGConfig {
  constructor() {
    this.ripple = false;
    this.filterMatchModeOptions = {
      text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
      numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
      date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
    };
    this.translation = {
      startsWith: 'Starts with',
      contains: 'Contains',
      notContains: 'Not contains',
      endsWith: 'Ends with',
      equals: 'Equals',
      notEquals: 'Not equals',
      noFilter: 'No Filter',
      lt: 'Less than',
      lte: 'Less than or equal to',
      gt: 'Greater than',
      gte: 'Greater than or equal to',
      is: 'Is',
      isNot: 'Is not',
      before: 'Before',
      after: 'After',
      dateIs: 'Date is',
      dateIsNot: 'Date is not',
      dateBefore: 'Date is before',
      dateAfter: 'Date is after',
      clear: 'Clear',
      apply: 'Apply',
      matchAll: 'Match All',
      matchAny: 'Match Any',
      addRule: 'Add Rule',
      removeRule: 'Remove Rule',
      accept: 'Yes',
      reject: 'No',
      choose: 'Choose',
      upload: 'Upload',
      cancel: 'Cancel',
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dateFormat: 'mm/dd/yy',
      firstDayOfWeek: 0,
      today: 'Today',
      weekHeader: 'Wk',
      weak: 'Weak',
      medium: 'Medium',
      strong: 'Strong',
      passwordPrompt: 'Enter a password',
      emptyMessage: 'No results found',
      emptyFilterMessage: 'No results found'
    };
    this.zIndex = {
      modal: 1100,
      overlay: 1000,
      menu: 1000,
      tooltip: 1100
    };
    this.translationSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.translationObserver = this.translationSource.asObservable();
  }
  getTranslation(key) {
    return this.translation[key];
  }
  setTranslation(value) {
    this.translation = {
      ...this.translation,
      ...value
    };
    this.translationSource.next(this.translation);
  }
}
PrimeNGConfig.ɵfac = function PrimeNGConfig_Factory(t) {
  return new (t || PrimeNGConfig)();
};
PrimeNGConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: PrimeNGConfig,
  factory: PrimeNGConfig.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PrimeNGConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class TranslationKeys {}
TranslationKeys.STARTS_WITH = 'startsWith';
TranslationKeys.CONTAINS = 'contains';
TranslationKeys.NOT_CONTAINS = 'notContains';
TranslationKeys.ENDS_WITH = 'endsWith';
TranslationKeys.EQUALS = 'equals';
TranslationKeys.NOT_EQUALS = 'notEquals';
TranslationKeys.NO_FILTER = 'noFilter';
TranslationKeys.LT = 'lt';
TranslationKeys.LTE = 'lte';
TranslationKeys.GT = 'gt';
TranslationKeys.GTE = 'gte';
TranslationKeys.IS = 'is';
TranslationKeys.IS_NOT = 'isNot';
TranslationKeys.BEFORE = 'before';
TranslationKeys.AFTER = 'after';
TranslationKeys.CLEAR = 'clear';
TranslationKeys.APPLY = 'apply';
TranslationKeys.MATCH_ALL = 'matchAll';
TranslationKeys.MATCH_ANY = 'matchAny';
TranslationKeys.ADD_RULE = 'addRule';
TranslationKeys.REMOVE_RULE = 'removeRule';
TranslationKeys.ACCEPT = 'accept';
TranslationKeys.REJECT = 'reject';
TranslationKeys.CHOOSE = 'choose';
TranslationKeys.UPLOAD = 'upload';
TranslationKeys.CANCEL = 'cancel';
TranslationKeys.DAY_NAMES = 'dayNames';
TranslationKeys.DAY_NAMES_SHORT = 'dayNamesShort';
TranslationKeys.DAY_NAMES_MIN = 'dayNamesMin';
TranslationKeys.MONTH_NAMES = 'monthNames';
TranslationKeys.MONTH_NAMES_SHORT = 'monthNamesShort';
TranslationKeys.FIRST_DAY_OF_WEEK = 'firstDayOfWeek';
TranslationKeys.TODAY = 'today';
TranslationKeys.WEEK_HEADER = 'weekHeader';
TranslationKeys.WEAK = 'weak';
TranslationKeys.MEDIUM = 'medium';
TranslationKeys.STRONG = 'strong';
TranslationKeys.PASSWORD_PROMPT = 'passwordPrompt';
TranslationKeys.EMPTY_MESSAGE = 'emptyMessage';
TranslationKeys.EMPTY_FILTER_MESSAGE = 'emptyFilterMessage';
var ConfirmEventType;
(function (ConfirmEventType) {
  ConfirmEventType[ConfirmEventType["ACCEPT"] = 0] = "ACCEPT";
  ConfirmEventType[ConfirmEventType["REJECT"] = 1] = "REJECT";
  ConfirmEventType[ConfirmEventType["CANCEL"] = 2] = "CANCEL";
})(ConfirmEventType || (ConfirmEventType = {}));
class ConfirmationService {
  constructor() {
    this.requireConfirmationSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.acceptConfirmationSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.requireConfirmation$ = this.requireConfirmationSource.asObservable();
    this.accept = this.acceptConfirmationSource.asObservable();
  }
  confirm(confirmation) {
    this.requireConfirmationSource.next(confirmation);
    return this;
  }
  close() {
    this.requireConfirmationSource.next(null);
    return this;
  }
  onAccept() {
    this.acceptConfirmationSource.next(null);
  }
}
ConfirmationService.ɵfac = function ConfirmationService_Factory(t) {
  return new (t || ConfirmationService)();
};
ConfirmationService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ConfirmationService,
  factory: ConfirmationService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfirmationService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();
class FilterService {
  constructor() {
    this.filters = {
      startsWith: (value, filter, filterLocale) => {
        if (filter === undefined || filter === null || filter.trim() === '') {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        let filterValue = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        let stringValue = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
        return stringValue.slice(0, filterValue.length) === filterValue;
      },
      contains: (value, filter, filterLocale) => {
        if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        let filterValue = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        let stringValue = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
        return stringValue.indexOf(filterValue) !== -1;
      },
      notContains: (value, filter, filterLocale) => {
        if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        let filterValue = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        let stringValue = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
        return stringValue.indexOf(filterValue) === -1;
      },
      endsWith: (value, filter, filterLocale) => {
        if (filter === undefined || filter === null || filter.trim() === '') {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        let filterValue = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        let stringValue = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
        return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
      },
      equals: (value, filter, filterLocale) => {
        if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        if (value.getTime && filter.getTime) return value.getTime() === filter.getTime();else return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      },
      notEquals: (value, filter, filterLocale) => {
        if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
          return false;
        }
        if (value === undefined || value === null) {
          return true;
        }
        if (value.getTime && filter.getTime) return value.getTime() !== filter.getTime();else return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      },
      in: (value, filter) => {
        if (filter === undefined || filter === null || filter.length === 0) {
          return true;
        }
        for (let i = 0; i < filter.length; i++) {
          if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(value, filter[i])) {
            return true;
          }
        }
        return false;
      },
      between: (value, filter) => {
        if (filter == null || filter[0] == null || filter[1] == null) {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        if (value.getTime) return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();else return filter[0] <= value && value <= filter[1];
      },
      lt: (value, filter, filterLocale) => {
        if (filter === undefined || filter === null) {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        if (value.getTime && filter.getTime) return value.getTime() < filter.getTime();else return value < filter;
      },
      lte: (value, filter, filterLocale) => {
        if (filter === undefined || filter === null) {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        if (value.getTime && filter.getTime) return value.getTime() <= filter.getTime();else return value <= filter;
      },
      gt: (value, filter, filterLocale) => {
        if (filter === undefined || filter === null) {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        if (value.getTime && filter.getTime) return value.getTime() > filter.getTime();else return value > filter;
      },
      gte: (value, filter, filterLocale) => {
        if (filter === undefined || filter === null) {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        if (value.getTime && filter.getTime) return value.getTime() >= filter.getTime();else return value >= filter;
      },
      is: (value, filter, filterLocale) => {
        return this.filters.equals(value, filter, filterLocale);
      },
      isNot: (value, filter, filterLocale) => {
        return this.filters.notEquals(value, filter, filterLocale);
      },
      before: (value, filter, filterLocale) => {
        return this.filters.lt(value, filter, filterLocale);
      },
      after: (value, filter, filterLocale) => {
        return this.filters.gt(value, filter, filterLocale);
      },
      dateIs: (value, filter) => {
        if (filter === undefined || filter === null) {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        return value.toDateString() === filter.toDateString();
      },
      dateIsNot: (value, filter) => {
        if (filter === undefined || filter === null) {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        return value.toDateString() !== filter.toDateString();
      },
      dateBefore: (value, filter) => {
        if (filter === undefined || filter === null) {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        return value.getTime() < filter.getTime();
      },
      dateAfter: (value, filter) => {
        if (filter === undefined || filter === null) {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        return value.getTime() > filter.getTime();
      }
    };
  }
  filter(value, fields, filterValue, filterMatchMode, filterLocale) {
    let filteredItems = [];
    if (value) {
      for (let item of value) {
        for (let field of fields) {
          let fieldValue = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(item, field);
          if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
            filteredItems.push(item);
            break;
          }
        }
      }
    }
    return filteredItems;
  }
  register(rule, fn) {
    this.filters[rule] = fn;
  }
}
FilterService.ɵfac = function FilterService_Factory(t) {
  return new (t || FilterService)();
};
FilterService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: FilterService,
  factory: FilterService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FilterService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class ContextMenuService {
  constructor() {
    this.activeItemKeyChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.activeItemKeyChange$ = this.activeItemKeyChange.asObservable();
  }
  changeKey(key) {
    this.activeItemKey = key;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
  reset() {
    this.activeItemKey = null;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
}
ContextMenuService.ɵfac = function ContextMenuService_Factory(t) {
  return new (t || ContextMenuService)();
};
ContextMenuService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ContextMenuService,
  factory: ContextMenuService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContextMenuService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();
class MessageService {
  constructor() {
    this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.clearSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.messageObserver = this.messageSource.asObservable();
    this.clearObserver = this.clearSource.asObservable();
  }
  add(message) {
    if (message) {
      this.messageSource.next(message);
    }
  }
  addAll(messages) {
    if (messages && messages.length) {
      this.messageSource.next(messages);
    }
  }
  clear(key) {
    this.clearSource.next(key || null);
  }
}
MessageService.ɵfac = function MessageService_Factory(t) {
  return new (t || MessageService)();
};
MessageService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MessageService,
  factory: MessageService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MessageService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();
class OverlayService {
  constructor() {
    this.clickSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.clickObservable = this.clickSource.asObservable();
  }
  add(event) {
    if (event) {
      this.clickSource.next(event);
    }
  }
}
OverlayService.ɵfac = function OverlayService_Factory(t) {
  return new (t || OverlayService)();
};
OverlayService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: OverlayService,
  factory: OverlayService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class PrimeIcons {}
PrimeIcons.ALIGN_CENTER = 'pi pi-align-center';
PrimeIcons.ALIGN_JUSTIFY = 'pi pi-align-justify';
PrimeIcons.ALIGN_LEFT = 'pi pi-align-left';
PrimeIcons.ALIGN_RIGHT = 'pi pi-align-right';
PrimeIcons.AMAZON = 'pi pi-amazon';
PrimeIcons.ANDROID = 'pi pi-android';
PrimeIcons.ANGLE_DOUBLE_DOWN = 'pi pi-angle-double-down';
PrimeIcons.ANGLE_DOUBLE_LEFT = 'pi pi-angle-double-left';
PrimeIcons.ANGLE_DOUBLE_RIGHT = 'pi pi-angle-double-right';
PrimeIcons.ANGLE_DOUBLE_UP = 'pi pi-angle-double-up';
PrimeIcons.ANGLE_DOWN = 'pi pi-angle-down';
PrimeIcons.ANGLE_LEFT = 'pi pi-angle-left';
PrimeIcons.ANGLE_RIGHT = 'pi pi-angle-right';
PrimeIcons.ANGLE_UP = 'pi pi-angle-up';
PrimeIcons.APPLE = 'pi pi-apple';
PrimeIcons.ARROW_CIRCLE_DOWN = 'pi pi-arrow-circle-down';
PrimeIcons.ARROW_CIRCLE_LEFT = 'pi pi-arrow-circle-left';
PrimeIcons.ARROW_CIRCLE_RIGHT = 'pi pi-arrow-circle-right';
PrimeIcons.ARROW_CIRCLE_UP = 'pi pi-arrow-circle-up';
PrimeIcons.ARROW_DOWN = 'pi pi-arrow-down';
PrimeIcons.ARROW_DOWN_LEFT = 'pi pi-arrow-down-left';
PrimeIcons.ARROW_DOWN_RIGHT = 'pi pi-arrow-down-right';
PrimeIcons.ARROW_LEFT = 'pi pi-arrow-left';
PrimeIcons.ARROW_RIGHT = 'pi pi-arrow-right';
PrimeIcons.ARROW_UP = 'pi pi-arrow-up';
PrimeIcons.ARROW_UP_LEFT = 'pi pi-arrow-up-left';
PrimeIcons.ARROW_UP_RIGHT = 'pi pi-arrow-up-right';
PrimeIcons.ARROW_H = 'pi pi-arrows-h';
PrimeIcons.ARROW_V = 'pi pi-arrows-v';
PrimeIcons.AT = 'pi pi-at';
PrimeIcons.BACKWARD = 'pi pi-backward';
PrimeIcons.BAN = 'pi pi-ban';
PrimeIcons.BARS = 'pi pi-bars';
PrimeIcons.BELL = 'pi pi-bell';
PrimeIcons.BOLT = 'pi pi-bolt';
PrimeIcons.BOOK = 'pi pi-book';
PrimeIcons.BOOKMARK = 'pi pi-bookmark';
PrimeIcons.BOOKMARK_FILL = 'pi pi-bookmark-fill';
PrimeIcons.BOX = 'pi pi-box';
PrimeIcons.BRIEFCASE = 'pi pi-briefcase';
PrimeIcons.BUILDING = 'pi pi-building';
PrimeIcons.CALENDAR = 'pi pi-calendar';
PrimeIcons.CALENDAR_MINUS = 'pi pi-calendar-minus';
PrimeIcons.CALENDAR_PLUS = 'pi pi-calendar-plus';
PrimeIcons.CALENDAR_TIMES = 'pi pi-calendar-times';
PrimeIcons.CAMERA = 'pi pi-camera';
PrimeIcons.CAR = 'pi pi-car';
PrimeIcons.CARET_DOWN = 'pi pi-caret-down';
PrimeIcons.CARET_LEFT = 'pi pi-caret-left';
PrimeIcons.CARET_RIGHT = 'pi pi-caret-right';
PrimeIcons.CARET_UP = 'pi pi-caret-up';
PrimeIcons.CHART_BAR = 'pi pi-chart-bar';
PrimeIcons.CHART_LINE = 'pi pi-chart-line';
PrimeIcons.CHART_PIE = 'pi pi-chart-pie';
PrimeIcons.CHECK = 'pi pi-check';
PrimeIcons.CHECK_CIRCLE = 'pi pi-check-circle';
PrimeIcons.CHECK_SQUARE = 'pi pi-check-square';
PrimeIcons.CHEVRON_CIRCLE_DOWN = 'pi pi-chevron-circle-down';
PrimeIcons.CHEVRON_CIRCLE_LEFT = 'pi pi-chevron-circle-left';
PrimeIcons.CHEVRON_CIRCLE_RIGHT = 'pi pi-chevron-circle-right';
PrimeIcons.CHEVRON_CIRCLE_UP = 'pi pi-chevron-circle-up';
PrimeIcons.CHEVRON_DOWN = 'pi pi-chevron-down';
PrimeIcons.CHEVRON_LEFT = 'pi pi-chevron-left';
PrimeIcons.CHEVRON_RIGHT = 'pi pi-chevron-right';
PrimeIcons.CHEVRON_UP = 'pi pi-chevron-up';
PrimeIcons.CIRCLE = 'pi pi-circle';
PrimeIcons.CIRCLE_FILL = 'pi pi-circle-fill';
PrimeIcons.CLOCK = 'pi pi-clock';
PrimeIcons.CLONE = 'pi pi-clone';
PrimeIcons.CLOUD = 'pi pi-cloud';
PrimeIcons.CLOUD_DOWNLOAD = 'pi pi-cloud-download';
PrimeIcons.CLOUD_UPLOAD = 'pi pi-cloud-upload';
PrimeIcons.CODE = 'pi pi-code';
PrimeIcons.COG = 'pi pi-cog';
PrimeIcons.COMMENT = 'pi pi-comment';
PrimeIcons.COMMENTS = 'pi pi-comments';
PrimeIcons.COMPASS = 'pi pi-compass';
PrimeIcons.COPY = 'pi pi-copy';
PrimeIcons.CREDIT_CARD = 'pi pi-credit-card';
PrimeIcons.DATABASE = 'pi pi-database';
PrimeIcons.DESKTOP = 'pi pi-desktop';
PrimeIcons.DIRECTIONS = 'pi pi-directions';
PrimeIcons.DIRECTIONS_ALT = 'pi pi-directions-alt';
PrimeIcons.DISCORD = 'pi pi-discord';
PrimeIcons.DOLLAR = 'pi pi-dollar';
PrimeIcons.DOWNLOAD = 'pi pi-download';
PrimeIcons.EJECT = 'pi pi-eject';
PrimeIcons.ELLIPSIS_H = 'pi pi-ellipsis-h';
PrimeIcons.ELLIPSIS_V = 'pi pi-ellipsis-v';
PrimeIcons.ENVELOPE = 'pi pi-envelope';
PrimeIcons.EURO = 'pi pi-euro';
PrimeIcons.EXCLAMATION_CIRCLE = 'pi pi-exclamation-circle';
PrimeIcons.EXCLAMATION_TRIANGLE = 'pi pi-exclamation-triangle';
PrimeIcons.EXTERNAL_LINK = 'pi pi-external-link';
PrimeIcons.EYE = 'pi pi-eye';
PrimeIcons.EYE_SLASH = 'pi pi-eye-slash';
PrimeIcons.FACEBOOK = 'pi pi-facebook';
PrimeIcons.FAST_BACKWARD = 'pi pi-fast-backward';
PrimeIcons.FAST_FORWARD = 'pi pi-fast-forward';
PrimeIcons.FILE = 'pi pi-file';
PrimeIcons.FILE_EXCEL = 'pi pi-file-excel';
PrimeIcons.FILE_PDF = 'pi pi-file-pdf';
PrimeIcons.FILTER = 'pi pi-filter';
PrimeIcons.FILTER_FILL = 'pi pi-filter-fill';
PrimeIcons.FILTER_SLASH = 'pi pi-filter-slash';
PrimeIcons.FLAG = 'pi pi-flag';
PrimeIcons.FLAG_FILL = 'pi pi-flag-fill';
PrimeIcons.FOLDER = 'pi pi-folder';
PrimeIcons.FOLDER_OPEN = 'pi pi-folder-open';
PrimeIcons.FORWARD = 'pi pi-forward';
PrimeIcons.GITHUB = 'pi pi-github';
PrimeIcons.GLOBE = 'pi pi-globe';
PrimeIcons.GOOGLE = 'pi pi-google';
PrimeIcons.HASHTAG = 'pi pi-hashtag';
PrimeIcons.HEART = 'pi pi-heart';
PrimeIcons.HEART_FILL = 'pi pi-heart-fill';
PrimeIcons.HISTORY = 'pi pi-history';
PrimeIcons.HOME = 'pi pi-home';
PrimeIcons.ID_CARD = 'pi pi-id-card';
PrimeIcons.IMAGE = 'pi pi-image';
PrimeIcons.IMAGES = 'pi pi-images';
PrimeIcons.INBOX = 'pi pi-inbox';
PrimeIcons.INFO = 'pi pi-info';
PrimeIcons.INFO_CIRCLE = 'pi pi-info-circle';
PrimeIcons.INSTAGRAM = 'pi pi-instagram';
PrimeIcons.KEY = 'pi pi-key';
PrimeIcons.LINK = 'pi pi-link';
PrimeIcons.LINKEDIN = 'pi pi-linkedin';
PrimeIcons.LIST = 'pi pi-list';
PrimeIcons.LOCK = 'pi pi-lock';
PrimeIcons.LOCK_OPEN = 'pi pi-lock-open';
PrimeIcons.MAP = 'pi pi-map';
PrimeIcons.MAP_MARKER = 'pi pi-map-marker';
PrimeIcons.MICROSOFT = 'pi pi-microsoft';
PrimeIcons.MINUS = 'pi pi-minus';
PrimeIcons.MINUS_CIRCLE = 'pi pi-minus-circle';
PrimeIcons.MOBILE = 'pi pi-mobile';
PrimeIcons.MONEY_BILL = 'pi pi-money-bill';
PrimeIcons.MOON = 'pi pi-moon';
PrimeIcons.PALETTE = 'pi pi-palette';
PrimeIcons.PAPERCLIP = 'pi pi-paperclip';
PrimeIcons.PAUSE = 'pi pi-pause';
PrimeIcons.PAYPAL = 'pi pi-paypal';
PrimeIcons.PENCIL = 'pi pi-pencil';
PrimeIcons.PERCENTAGE = 'pi pi-percentage';
PrimeIcons.PHONE = 'pi pi-phone';
PrimeIcons.PLAY = 'pi pi-play';
PrimeIcons.PLUS = 'pi pi-plus';
PrimeIcons.PLUS_CIRCLE = 'pi pi-plus-circle';
PrimeIcons.POUND = 'pi pi-pound';
PrimeIcons.POWER_OFF = 'pi pi-power-off';
PrimeIcons.PRIME = 'pi pi-prime';
PrimeIcons.PRINT = 'pi pi-print';
PrimeIcons.QRCODE = 'pi pi-qrcode';
PrimeIcons.QUESTION = 'pi pi-question';
PrimeIcons.QUESTION_CIRCLE = 'pi pi-question-circle';
PrimeIcons.REDDIT = 'pi pi-reddit';
PrimeIcons.REFRESH = 'pi pi-refresh';
PrimeIcons.REPLAY = 'pi pi-replay';
PrimeIcons.REPLY = 'pi pi-reply';
PrimeIcons.SAVE = 'pi pi-save';
PrimeIcons.SEARCH = 'pi pi-search';
PrimeIcons.SEARCH_MINUS = 'pi pi-search-minus';
PrimeIcons.SEARCH_PLUS = 'pi pi-search-plus';
PrimeIcons.SEND = 'pi pi-send';
PrimeIcons.SERVER = 'pi pi-server';
PrimeIcons.SHARE_ALT = 'pi pi-share-alt';
PrimeIcons.SHIELD = 'pi pi-shield';
PrimeIcons.SHOPPING_BAG = 'pi pi-shopping-bag';
PrimeIcons.SHOPPING_CART = 'pi pi-shopping-cart';
PrimeIcons.SIGN_IN = 'pi pi-sign-in';
PrimeIcons.SIGN_OUT = 'pi pi-sign-out';
PrimeIcons.SITEMAP = 'pi pi-sitemap';
PrimeIcons.SLACK = 'pi pi-slack';
PrimeIcons.SLIDERS_H = 'pi pi-sliders-h';
PrimeIcons.SLIDERS_V = 'pi pi-sliders-v';
PrimeIcons.SORT = 'pi pi-sort';
PrimeIcons.SORT_ALPHA_DOWN = 'pi pi-sort-alpha-down';
PrimeIcons.SORT_ALPHA_ALT_DOWN = 'pi pi-sort-alpha-alt-down';
PrimeIcons.SORT_ALPHA_UP = 'pi pi-sort-alpha-up';
PrimeIcons.SORT_ALPHA_ALT_UP = 'pi pi-sort-alpha-alt-up';
PrimeIcons.SORT_ALT = 'pi pi-sort-alt';
PrimeIcons.SORT_ALT_SLASH = 'pi pi-sort-slash';
PrimeIcons.SORT_AMOUNT_DOWN = 'pi pi-sort-amount-down';
PrimeIcons.SORT_AMOUNT_DOWN_ALT = 'pi pi-sort-amount-down-alt';
PrimeIcons.SORT_AMOUNT_UP = 'pi pi-sort-amount-up';
PrimeIcons.SORT_AMOUNT_UP_ALT = 'pi pi-sort-amount-up-alt';
PrimeIcons.SORT_DOWN = 'pi pi-sort-down';
PrimeIcons.SORT_NUMERIC_DOWN = 'pi pi-sort-numeric-down';
PrimeIcons.SORT_NUMERIC_ALT_DOWN = 'pi pi-sort-numeric-alt-down';
PrimeIcons.SORT_NUMERIC_UP = 'pi pi-sort-numeric-up';
PrimeIcons.SORT_NUMERIC_ALT_UP = 'pi pi-sort-numeric-alt-up';
PrimeIcons.SORT_UP = 'pi pi-sort-up';
PrimeIcons.SPINNER = 'pi pi-spinner';
PrimeIcons.STAR = 'pi pi-star';
PrimeIcons.STAR_FILL = 'pi pi-star-fill';
PrimeIcons.STEP_BACKWARD = 'pi pi-step-backward';
PrimeIcons.STEP_BACKWARD_ALT = 'pi pi-step-backward-alt';
PrimeIcons.STEP_FORWARD = 'pi pi-step-forward';
PrimeIcons.STEP_FORWARD_ALT = 'pi pi-step-forward-alt';
PrimeIcons.STOP = 'pi pi-stop';
PrimeIcons.STOP_CIRCLE = 'pi pi-stop-circle';
PrimeIcons.SUN = 'pi pi-sun';
PrimeIcons.SYNC = 'pi pi-sync';
PrimeIcons.TABLE = 'pi pi-table';
PrimeIcons.TABLET = 'pi pi-tablet';
PrimeIcons.TAG = 'pi pi-tag';
PrimeIcons.TAGS = 'pi pi-tags';
PrimeIcons.TELEGRAM = 'pi pi-telegram';
PrimeIcons.TH_LARGE = 'pi pi-th-large';
PrimeIcons.THUMBS_DOWN = 'pi pi-thumbs-down';
PrimeIcons.THUMBS_UP = 'pi pi-thumbs-up';
PrimeIcons.TICKET = 'pi pi-ticket';
PrimeIcons.TIMES = 'pi pi-times';
PrimeIcons.TIMES_CIRCLE = 'pi pi-times-circle';
PrimeIcons.TRASH = 'pi pi-trash';
PrimeIcons.TWITTER = 'pi pi-twitter';
PrimeIcons.UNDO = 'pi pi-undo';
PrimeIcons.UNLOCK = 'pi pi-unlock';
PrimeIcons.UPLOAD = 'pi pi-upload';
PrimeIcons.USER = 'pi pi-user';
PrimeIcons.USER_EDIT = 'pi pi-user-edit';
PrimeIcons.USER_MINUS = 'pi pi-user-minus';
PrimeIcons.USER_PLUS = 'pi pi-user-plus';
PrimeIcons.USERS = 'pi pi-users';
PrimeIcons.VIDEO = 'pi pi-video';
PrimeIcons.VIMEO = 'pi pi-vimeo';
PrimeIcons.VOLUME_DOWN = 'pi pi-volume-down';
PrimeIcons.VOLUME_OFF = 'pi pi-volume-off';
PrimeIcons.VOLUME_UP = 'pi pi-volume-up';
PrimeIcons.WALLET = 'pi pi-wallet';
PrimeIcons.WHATSAPP = 'pi pi-whatsapp';
PrimeIcons.WIFI = 'pi pi-wifi';
PrimeIcons.WINDOW_MAXIMIZE = 'pi pi-window-maximize';
PrimeIcons.WINDOW_MINIMIZE = 'pi pi-window-minimize';
PrimeIcons.YOUTUBE = 'pi pi-youtube';
class FilterOperator {}
FilterOperator.AND = 'and';
FilterOperator.OR = 'or';
class Header {}
Header.ɵfac = function Header_Factory(t) {
  return new (t || Header)();
};
Header.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: Header,
  selectors: [["p-header"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function Header_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Header, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-header',
      template: '<ng-content></ng-content>'
    }]
  }], null, null);
})();
class Footer {}
Footer.ɵfac = function Footer_Factory(t) {
  return new (t || Footer)();
};
Footer.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: Footer,
  selectors: [["p-footer"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function Footer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Footer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-footer',
      template: '<ng-content></ng-content>'
    }]
  }], null, null);
})();
class PrimeTemplate {
  constructor(template) {
    this.template = template;
  }
  getType() {
    return this.name;
  }
}
PrimeTemplate.ɵfac = function PrimeTemplate_Factory(t) {
  return new (t || PrimeTemplate)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef));
};
PrimeTemplate.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: PrimeTemplate,
  selectors: [["", "pTemplate", ""]],
  inputs: {
    type: "type",
    name: ["pTemplate", "name"]
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PrimeTemplate, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[pTemplate]',
      host: {}
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
    }];
  }, {
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['pTemplate']
    }]
  });
})();
class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      exports: [Header, Footer, PrimeTemplate],
      declarations: [Header, Footer, PrimeTemplate]
    }]
  }], null, null);
})();
class TreeDragDropService {
  constructor() {
    this.dragStartSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.dragStopSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.dragStart$ = this.dragStartSource.asObservable();
    this.dragStop$ = this.dragStopSource.asObservable();
  }
  startDrag(event) {
    this.dragStartSource.next(event);
  }
  stopDrag(event) {
    this.dragStopSource.next(event);
  }
}
TreeDragDropService.ɵfac = function TreeDragDropService_Factory(t) {
  return new (t || TreeDragDropService)();
};
TreeDragDropService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TreeDragDropService,
  factory: TreeDragDropService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TreeDragDropService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 70174:
/*!*************************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-autofocus.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoFocus": () => (/* binding */ AutoFocus),
/* harmony export */   "AutoFocusModule": () => (/* binding */ AutoFocusModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/dom */ 71420);




class AutoFocus {
  constructor(host) {
    this.host = host;
    this.focused = false;
  }
  ngAfterContentChecked() {
    if (!this.focused) {
      if (this.autofocus) {
        const focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getFocusableElements(this.host.nativeElement);
        if (focusableElements.length === 0) {
          this.host.nativeElement.focus();
        }
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
        this.focused = true;
      }
    }
  }
}
AutoFocus.ɵfac = function AutoFocus_Factory(t) {
  return new (t || AutoFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
};
AutoFocus.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: AutoFocus,
  selectors: [["", "pAutoFocus", ""]],
  hostAttrs: [1, "p-element"],
  inputs: {
    autofocus: ["pAutoFocus", "autofocus"]
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutoFocus, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[pAutoFocus]',
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }];
  }, {
    autofocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['pAutoFocus']
    }]
  });
})();
class AutoFocusModule {}
AutoFocusModule.ɵfac = function AutoFocusModule_Factory(t) {
  return new (t || AutoFocusModule)();
};
AutoFocusModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AutoFocusModule
});
AutoFocusModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutoFocusModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      exports: [AutoFocus],
      declarations: [AutoFocus]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 71420:
/*!*******************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-dom.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectedOverlayScrollHandler": () => (/* binding */ ConnectedOverlayScrollHandler),
/* harmony export */   "DomHandler": () => (/* binding */ DomHandler)
/* harmony export */ });
/**
 * @dynamic is for runtime initializing DomHandler.browser
 *
 * If delete below comment, we can see this error message:
 *  Metadata collected contains an error that will be reported at runtime:
 *  Only initialized variables and constants can be referenced
 *  because the value of this variable is needed by the template compiler.
 */
// @dynamic
class DomHandler {
  static addClass(element, className) {
    if (element.classList) element.classList.add(className);else element.className += ' ' + className;
  }
  static addMultipleClasses(element, className) {
    if (element.classList) {
      let styles = className.trim().split(' ');
      for (let i = 0; i < styles.length; i++) {
        element.classList.add(styles[i]);
      }
    } else {
      let styles = className.split(' ');
      for (let i = 0; i < styles.length; i++) {
        element.className += ' ' + styles[i];
      }
    }
  }
  static removeClass(element, className) {
    if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
  static hasClass(element, className) {
    if (element.classList) return element.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
  }
  static siblings(element) {
    return Array.prototype.filter.call(element.parentNode.children, function (child) {
      return child !== element;
    });
  }
  static find(element, selector) {
    return Array.from(element.querySelectorAll(selector));
  }
  static findSingle(element, selector) {
    if (element) {
      return element.querySelector(selector);
    }
    return null;
  }
  static index(element) {
    let children = element.parentNode.childNodes;
    let num = 0;
    for (var i = 0; i < children.length; i++) {
      if (children[i] == element) return num;
      if (children[i].nodeType == 1) num++;
    }
    return -1;
  }
  static indexWithinGroup(element, attributeName) {
    let children = element.parentNode ? element.parentNode.childNodes : [];
    let num = 0;
    for (var i = 0; i < children.length; i++) {
      if (children[i] == element) return num;
      if (children[i].attributes && children[i].attributes[attributeName] && children[i].nodeType == 1) num++;
    }
    return -1;
  }
  static relativePosition(element, target) {
    let elementDimensions = element.offsetParent ? {
      width: element.offsetWidth,
      height: element.offsetHeight
    } : this.getHiddenElementDimensions(element);
    const targetHeight = target.offsetHeight;
    const targetOffset = target.getBoundingClientRect();
    const viewport = this.getViewport();
    let top, left;
    if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
      top = -1 * elementDimensions.height;
      element.style.transformOrigin = 'bottom';
      if (targetOffset.top + top < 0) {
        top = -1 * targetOffset.top;
      }
    } else {
      top = targetHeight;
      element.style.transformOrigin = 'top';
    }
    if (elementDimensions.width > viewport.width) {
      // element wider then viewport and cannot fit on screen (align at left side of viewport)
      left = targetOffset.left * -1;
    } else if (targetOffset.left + elementDimensions.width > viewport.width) {
      // element wider then viewport but can be fit on screen (align at right side of viewport)
      left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
    } else {
      // element fits on screen (align with target)
      left = 0;
    }
    element.style.top = top + 'px';
    element.style.left = left + 'px';
  }
  static absolutePosition(element, target) {
    let elementDimensions = element.offsetParent ? {
      width: element.offsetWidth,
      height: element.offsetHeight
    } : this.getHiddenElementDimensions(element);
    let elementOuterHeight = elementDimensions.height;
    let elementOuterWidth = elementDimensions.width;
    let targetOuterHeight = target.offsetHeight;
    let targetOuterWidth = target.offsetWidth;
    let targetOffset = target.getBoundingClientRect();
    let windowScrollTop = this.getWindowScrollTop();
    let windowScrollLeft = this.getWindowScrollLeft();
    let viewport = this.getViewport();
    let top, left;
    if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
      top = targetOffset.top + windowScrollTop - elementOuterHeight;
      element.style.transformOrigin = 'bottom';
      if (top < 0) {
        top = windowScrollTop;
      }
    } else {
      top = targetOuterHeight + targetOffset.top + windowScrollTop;
      element.style.transformOrigin = 'top';
    }
    if (targetOffset.left + elementOuterWidth > viewport.width) left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);else left = targetOffset.left + windowScrollLeft;
    element.style.top = top + 'px';
    element.style.left = left + 'px';
  }
  static getParents(element, parents = []) {
    return element['parentNode'] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
  }
  static getScrollableParents(element) {
    let scrollableParents = [];
    if (element) {
      let parents = this.getParents(element);
      const overflowRegex = /(auto|scroll)/;
      const overflowCheck = node => {
        let styleDeclaration = window['getComputedStyle'](node, null);
        return overflowRegex.test(styleDeclaration.getPropertyValue('overflow')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowX')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowY'));
      };
      for (let parent of parents) {
        let scrollSelectors = parent.nodeType === 1 && parent.dataset['scrollselectors'];
        if (scrollSelectors) {
          let selectors = scrollSelectors.split(',');
          for (let selector of selectors) {
            let el = this.findSingle(parent, selector);
            if (el && overflowCheck(el)) {
              scrollableParents.push(el);
            }
          }
        }
        if (parent.nodeType !== 9 && overflowCheck(parent)) {
          scrollableParents.push(parent);
        }
      }
    }
    return scrollableParents;
  }
  static getHiddenElementOuterHeight(element) {
    element.style.visibility = 'hidden';
    element.style.display = 'block';
    let elementHeight = element.offsetHeight;
    element.style.display = 'none';
    element.style.visibility = 'visible';
    return elementHeight;
  }
  static getHiddenElementOuterWidth(element) {
    element.style.visibility = 'hidden';
    element.style.display = 'block';
    let elementWidth = element.offsetWidth;
    element.style.display = 'none';
    element.style.visibility = 'visible';
    return elementWidth;
  }
  static getHiddenElementDimensions(element) {
    let dimensions = {};
    element.style.visibility = 'hidden';
    element.style.display = 'block';
    dimensions.width = element.offsetWidth;
    dimensions.height = element.offsetHeight;
    element.style.display = 'none';
    element.style.visibility = 'visible';
    return dimensions;
  }
  static scrollInView(container, item) {
    let borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
    let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
    let paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
    let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
    let containerRect = container.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    let offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
    let scroll = container.scrollTop;
    let elementHeight = container.clientHeight;
    let itemHeight = this.getOuterHeight(item);
    if (offset < 0) {
      container.scrollTop = scroll + offset;
    } else if (offset + itemHeight > elementHeight) {
      container.scrollTop = scroll + offset - elementHeight + itemHeight;
    }
  }
  static fadeIn(element, duration) {
    element.style.opacity = 0;
    let last = +new Date();
    let opacity = 0;
    let tick = function () {
      opacity = +element.style.opacity.replace(",", ".") + (new Date().getTime() - last) / duration;
      element.style.opacity = opacity;
      last = +new Date();
      if (+opacity < 1) {
        window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
      }
    };
    tick();
  }
  static fadeOut(element, ms) {
    var opacity = 1,
      interval = 50,
      duration = ms,
      gap = interval / duration;
    let fading = setInterval(() => {
      opacity = opacity - gap;
      if (opacity <= 0) {
        opacity = 0;
        clearInterval(fading);
      }
      element.style.opacity = opacity;
    }, interval);
  }
  static getWindowScrollTop() {
    let doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  }
  static getWindowScrollLeft() {
    let doc = document.documentElement;
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  }
  static matches(element, selector) {
    var p = Element.prototype;
    var f = p['matches'] || p.webkitMatchesSelector || p['mozMatchesSelector'] || p['msMatchesSelector'] || function (s) {
      return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
    };
    return f.call(element, selector);
  }
  static getOuterWidth(el, margin) {
    let width = el.offsetWidth;
    if (margin) {
      let style = getComputedStyle(el);
      width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    }
    return width;
  }
  static getHorizontalPadding(el) {
    let style = getComputedStyle(el);
    return parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
  }
  static getHorizontalMargin(el) {
    let style = getComputedStyle(el);
    return parseFloat(style.marginLeft) + parseFloat(style.marginRight);
  }
  static innerWidth(el) {
    let width = el.offsetWidth;
    let style = getComputedStyle(el);
    width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    return width;
  }
  static width(el) {
    let width = el.offsetWidth;
    let style = getComputedStyle(el);
    width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    return width;
  }
  static getInnerHeight(el) {
    let height = el.offsetHeight;
    let style = getComputedStyle(el);
    height += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
    return height;
  }
  static getOuterHeight(el, margin) {
    let height = el.offsetHeight;
    if (margin) {
      let style = getComputedStyle(el);
      height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
    }
    return height;
  }
  static getHeight(el) {
    let height = el.offsetHeight;
    let style = getComputedStyle(el);
    height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    return height;
  }
  static getWidth(el) {
    let width = el.offsetWidth;
    let style = getComputedStyle(el);
    width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
    return width;
  }
  static getViewport() {
    let win = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      w = win.innerWidth || e.clientWidth || g.clientWidth,
      h = win.innerHeight || e.clientHeight || g.clientHeight;
    return {
      width: w,
      height: h
    };
  }
  static getOffset(el) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
    };
  }
  static replaceElementWith(element, replacementElement) {
    let parentNode = element.parentNode;
    if (!parentNode) throw `Can't replace element`;
    return parentNode.replaceChild(replacementElement, element);
  }
  static getUserAgent() {
    return navigator.userAgent;
  }
  static isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      // IE 10 or older => return version number
      return true;
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf('rv:');
      return true;
    }
    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return true;
    }
    // other browser
    return false;
  }
  static isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
  }
  static isAndroid() {
    return /(android)/i.test(navigator.userAgent);
  }
  static isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }
  static appendChild(element, target) {
    if (this.isElement(target)) target.appendChild(element);else if (target.el && target.el.nativeElement) target.el.nativeElement.appendChild(element);else throw 'Cannot append ' + target + ' to ' + element;
  }
  static removeChild(element, target) {
    if (this.isElement(target)) target.removeChild(element);else if (target.el && target.el.nativeElement) target.el.nativeElement.removeChild(element);else throw 'Cannot remove ' + element + ' from ' + target;
  }
  static removeElement(element) {
    if (!('remove' in Element.prototype)) element.parentNode.removeChild(element);else element.remove();
  }
  static isElement(obj) {
    return typeof HTMLElement === "object" ? obj instanceof HTMLElement : obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
  }
  static calculateScrollbarWidth(el) {
    if (el) {
      let style = getComputedStyle(el);
      return el.offsetWidth - el.clientWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth);
    } else {
      if (this.calculatedScrollbarWidth !== null) return this.calculatedScrollbarWidth;
      let scrollDiv = document.createElement("div");
      scrollDiv.className = "p-scrollbar-measure";
      document.body.appendChild(scrollDiv);
      let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      this.calculatedScrollbarWidth = scrollbarWidth;
      return scrollbarWidth;
    }
  }
  static calculateScrollbarHeight() {
    if (this.calculatedScrollbarHeight !== null) return this.calculatedScrollbarHeight;
    let scrollDiv = document.createElement("div");
    scrollDiv.className = "p-scrollbar-measure";
    document.body.appendChild(scrollDiv);
    let scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
    document.body.removeChild(scrollDiv);
    this.calculatedScrollbarWidth = scrollbarHeight;
    return scrollbarHeight;
  }
  static invokeElementMethod(element, methodName, args) {
    element[methodName].apply(element, args);
  }
  static clearSelection() {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
        window.getSelection().removeAllRanges();
      }
    } else if (document['selection'] && document['selection'].empty) {
      try {
        document['selection'].empty();
      } catch (error) {
        //ignore IE bug
      }
    }
  }
  static getBrowser() {
    if (!this.browser) {
      let matched = this.resolveUserAgent();
      this.browser = {};
      if (matched.browser) {
        this.browser[matched.browser] = true;
        this.browser['version'] = matched.version;
      }
      if (this.browser['chrome']) {
        this.browser['webkit'] = true;
      } else if (this.browser['webkit']) {
        this.browser['safari'] = true;
      }
    }
    return this.browser;
  }
  static resolveUserAgent() {
    let ua = navigator.userAgent.toLowerCase();
    let match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    return {
      browser: match[1] || "",
      version: match[2] || "0"
    };
  }
  static isInteger(value) {
    if (Number.isInteger) {
      return Number.isInteger(value);
    } else {
      return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    }
  }
  static isHidden(element) {
    return element.offsetParent === null;
  }
  static getFocusableElements(element) {
    let focusableElements = DomHandler.find(element, `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]):not(.p-disabled)`);
    let visibleFocusableElements = [];
    for (let focusableElement of focusableElements) {
      if (getComputedStyle(focusableElement).display != "none" && getComputedStyle(focusableElement).visibility != "hidden") visibleFocusableElements.push(focusableElement);
    }
    return visibleFocusableElements;
  }
  static generateZIndex() {
    this.zindex = this.zindex || 999;
    return ++this.zindex;
  }
}
DomHandler.zindex = 1000;
DomHandler.calculatedScrollbarWidth = null;
DomHandler.calculatedScrollbarHeight = null;
class ConnectedOverlayScrollHandler {
  constructor(element, listener = () => {}) {
    this.element = element;
    this.listener = listener;
  }
  bindScrollListener() {
    this.scrollableParents = DomHandler.getScrollableParents(this.element);
    for (let i = 0; i < this.scrollableParents.length; i++) {
      this.scrollableParents[i].addEventListener('scroll', this.listener);
    }
  }
  unbindScrollListener() {
    if (this.scrollableParents) {
      for (let i = 0; i < this.scrollableParents.length; i++) {
        this.scrollableParents[i].removeEventListener('scroll', this.listener);
      }
    }
  }
  destroy() {
    this.unbindScrollListener();
    this.element = null;
    this.listener = null;
    this.scrollableParents = null;
  }
}

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 38992:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-dropdown.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DROPDOWN_VALUE_ACCESSOR": () => (/* binding */ DROPDOWN_VALUE_ACCESSOR),
/* harmony export */   "Dropdown": () => (/* binding */ Dropdown),
/* harmony export */   "DropdownItem": () => (/* binding */ DropdownItem),
/* harmony export */   "DropdownModule": () => (/* binding */ DropdownModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ 24851);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dom */ 71420);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/utils */ 68549);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ 24329);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/scroller */ 73705);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/ripple */ 84538);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/autofocus */ 70174);


















function DropdownItem_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label || "empty");
  }
}
function DropdownItem_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c0 = function (a0) {
  return {
    "height": a0
  };
};
const _c1 = function (a1, a2) {
  return {
    "p-dropdown-item": true,
    "p-highlight": a1,
    "p-disabled": a2
  };
};
const _c2 = function (a0) {
  return {
    $implicit: a0
  };
};
const _c3 = ["container"];
const _c4 = ["filter"];
const _c5 = ["in"];
const _c6 = ["editableInput"];
const _c7 = ["items"];
const _c8 = ["scroller"];
function Dropdown_span_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.label || "empty");
  }
}
function Dropdown_span_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c9 = function (a1) {
  return {
    "p-dropdown-label p-inputtext": true,
    "p-dropdown-label-empty": a1
  };
};
function Dropdown_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_span_5_ng_container_1_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dropdown_span_5_ng_container_2_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c9, ctx_r2.label == null || ctx_r2.label.length === 0))("pTooltip", ctx_r2.tooltip)("tooltipPosition", ctx_r2.tooltipPosition)("positionStyle", ctx_r2.tooltipPositionStyle)("tooltipStyleClass", ctx_r2.tooltipStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r2.labelId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.selectedItemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.selectedItemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, ctx_r2.selectedOption));
  }
}
const _c10 = function (a1) {
  return {
    "p-dropdown-label p-inputtext p-placeholder": true,
    "p-dropdown-label-empty": a1
  };
};
function Dropdown_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c10, ctx_r3.placeholder == null || ctx_r3.placeholder.length === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.placeholder || "empty");
  }
}
function Dropdown_input_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dropdown_input_7_Template_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.onEditableInputClick());
    })("input", function Dropdown_input_7_Template_input_input_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.onEditableInputChange($event));
    })("focus", function Dropdown_input_7_Template_input_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.onEditableInputFocus($event));
    })("blur", function Dropdown_input_7_Template_input_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.onInputBlur($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("maxlength", ctx_r4.maxlength)("placeholder", ctx_r4.placeholder)("aria-expanded", ctx_r4.overlayVisible);
  }
}
function Dropdown_i_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dropdown_i_8_Template_i_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.clear($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function Dropdown_div_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dropdown_div_11_div_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c11 = function (a0) {
  return {
    options: a0
  };
};
function Dropdown_div_11_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_div_11_div_2_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r24.filterTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c11, ctx_r24.filterOptions));
  }
}
function Dropdown_div_11_div_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "input", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function Dropdown_div_11_div_2_ng_template_2_Template_input_keydown_enter_1_listener($event) {
      return $event.preventDefault();
    })("keydown", function Dropdown_div_11_div_2_ng_template_2_Template_input_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r30.onKeydown($event, false));
    })("input", function Dropdown_div_11_div_2_ng_template_2_Template_input_input_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r32.onFilterInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r26.filterValue || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("placeholder", ctx_r26.filterPlaceholder)("aria-label", ctx_r26.ariaFilterLabel)("aria-activedescendant", ctx_r26.overlayVisible ? "p-highlighted-option" : ctx_r26.labelId);
  }
}
function Dropdown_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dropdown_div_11_div_2_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_div_11_div_2_ng_container_1_Template, 2, 4, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dropdown_div_11_div_2_ng_template_2_Template, 4, 4, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.filterTemplate)("ngIfElse", _r25);
  }
}
function Dropdown_div_11_p_scroller_4_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c12 = function (a0, a1) {
  return {
    $implicit: a0,
    options: a1
  };
};
function Dropdown_div_11_p_scroller_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dropdown_div_11_p_scroller_4_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 14);
  }
  if (rf & 2) {
    const items_r37 = ctx.$implicit;
    const scrollerOptions_r38 = ctx.options;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r21)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c12, items_r37, scrollerOptions_r38));
  }
}
function Dropdown_div_11_p_scroller_4_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dropdown_div_11_p_scroller_4_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dropdown_div_11_p_scroller_4_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 14);
  }
  if (rf & 2) {
    const scrollerOptions_r41 = ctx.options;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r40.loaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c11, scrollerOptions_r41));
  }
}
function Dropdown_div_11_p_scroller_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_div_11_p_scroller_4_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function Dropdown_div_11_p_scroller_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-scroller", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onLazyLoad", function Dropdown_div_11_p_scroller_4_Template_p_scroller_onLazyLoad_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r43.onLazyLoad.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dropdown_div_11_p_scroller_4_ng_template_2_Template, 1, 5, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Dropdown_div_11_p_scroller_4_ng_container_3_Template, 2, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r19.scrollHeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r19.optionsToDisplay)("itemSize", ctx_r19.virtualScrollItemSize || ctx_r19._itemSize)("autoSize", true)("lazy", ctx_r19.lazy)("options", ctx_r19.virtualScrollOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.loaderTemplate);
  }
}
function Dropdown_div_11_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c13 = function () {
  return {};
};
function Dropdown_div_11_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_div_11_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r21)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c12, ctx_r20.optionsToDisplay, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c13)));
  }
}
function Dropdown_div_11_ng_template_6_ng_container_2_ng_template_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const optgroup_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r57.getOptionGroupLabel(optgroup_r56) || "empty");
  }
}
function Dropdown_div_11_ng_template_6_ng_container_2_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dropdown_div_11_ng_template_6_ng_container_2_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c14 = function (a0, a1) {
  return {
    $implicit: a0,
    selectedOption: a1
  };
};
function Dropdown_div_11_ng_template_6_ng_container_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_div_11_ng_template_6_ng_container_2_ng_template_1_span_1_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dropdown_div_11_ng_template_6_ng_container_2_ng_template_1_ng_container_2_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Dropdown_div_11_ng_template_6_ng_container_2_ng_template_1_ng_container_3_Template, 1, 0, "ng-container", 14);
  }
  if (rf & 2) {
    const optgroup_r56 = ctx.$implicit;
    const scrollerOptions_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).options;
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, scrollerOptions_r47.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r55.groupTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r55.groupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, optgroup_r56));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r51)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c14, ctx_r55.getOptionGroupChildren(optgroup_r56), ctx_r55.selectedOption));
  }
}
function Dropdown_div_11_ng_template_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_div_11_ng_template_6_ng_container_2_ng_template_1_Template, 4, 13, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const items_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r46);
  }
}
function Dropdown_div_11_ng_template_6_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dropdown_div_11_ng_template_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_div_11_ng_template_6_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const items_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r51)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c14, items_r46, ctx_r50.selectedOption));
  }
}
function Dropdown_div_11_ng_template_6_ng_template_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dropdownItem", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function Dropdown_div_11_ng_template_6_ng_template_4_ng_template_0_Template_p_dropdownItem_onClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r70.onItemClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r68 = ctx.$implicit;
    const selectedOption_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().selectedOption;
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("option", option_r68)("selected", selectedOption_r66 == option_r68)("label", ctx_r67.getOptionLabel(option_r68))("disabled", ctx_r67.isOptionDisabled(option_r68))("template", ctx_r67.itemTemplate);
  }
}
function Dropdown_div_11_ng_template_6_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dropdown_div_11_ng_template_6_ng_template_4_ng_template_0_Template, 1, 5, "ng-template", 39);
  }
  if (rf & 2) {
    const options_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", options_r65);
  }
}
function Dropdown_div_11_ng_template_6_li_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r73.emptyFilterMessageLabel, " ");
  }
}
function Dropdown_div_11_ng_template_6_li_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 43);
  }
}
function Dropdown_div_11_ng_template_6_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_div_11_ng_template_6_li_6_ng_container_1_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dropdown_div_11_ng_template_6_li_6_ng_container_2_Template, 2, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scrollerOptions_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, scrollerOptions_r47.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r53.emptyFilterTemplate && !ctx_r53.emptyTemplate)("ngIfElse", ctx_r53.emptyFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r53.emptyFilterTemplate || ctx_r53.emptyTemplate);
  }
}
function Dropdown_div_11_ng_template_6_li_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r77.emptyMessageLabel, " ");
  }
}
function Dropdown_div_11_ng_template_6_li_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 44);
  }
}
function Dropdown_div_11_ng_template_6_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_div_11_ng_template_6_li_7_ng_container_1_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dropdown_div_11_ng_template_6_li_7_ng_container_2_Template, 2, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scrollerOptions_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, scrollerOptions_r47.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r54.emptyTemplate)("ngIfElse", ctx_r54.empty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r54.emptyTemplate);
  }
}
function Dropdown_div_11_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dropdown_div_11_ng_template_6_ng_container_2_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Dropdown_div_11_ng_template_6_ng_container_3_Template, 2, 5, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Dropdown_div_11_ng_template_6_ng_template_4_Template, 1, 1, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Dropdown_div_11_ng_template_6_li_6_Template, 3, 6, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Dropdown_div_11_ng_template_6_li_7_Template, 3, 6, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scrollerOptions_r47 = ctx.options;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](scrollerOptions_r47.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", scrollerOptions_r47.contentStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r22.listId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r22.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.filterValue && ctx_r22.isEmpty());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r22.filterValue && ctx_r22.isEmpty());
  }
}
function Dropdown_div_11_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c15 = function (a0, a1) {
  return {
    showTransitionParams: a0,
    hideTransitionParams: a1
  };
};
const _c16 = function (a1) {
  return {
    value: "visible",
    params: a1
  };
};
function Dropdown_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dropdown_div_11_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r81.onOverlayClick($event));
    })("@overlayAnimation.start", function Dropdown_div_11_Template_div_animation_overlayAnimation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r83.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function Dropdown_div_11_Template_div_animation_overlayAnimation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r84.onOverlayAnimationEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_div_11_ng_container_1_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dropdown_div_11_div_2_Template, 4, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Dropdown_div_11_p_scroller_4_Template, 4, 10, "p-scroller", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Dropdown_div_11_ng_container_5_Template, 2, 6, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Dropdown_div_11_ng_template_6_Template, 8, 8, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Dropdown_div_11_ng_container_8_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r6.panelStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-dropdown-panel p-component")("@overlayAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c15, ctx_r6.showTransitionOptions, ctx_r6.hideTransitionOptions)))("ngStyle", ctx_r6.panelStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.filter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r6.virtualScroll ? "auto" : ctx_r6.scrollHeight || "auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.virtualScroll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.virtualScroll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.footerTemplate);
  }
}
const _c17 = function (a1, a2, a3, a4) {
  return {
    "p-dropdown p-component": true,
    "p-disabled": a1,
    "p-dropdown-open": a2,
    "p-focus": a3,
    "p-dropdown-clearable": a4
  };
};
const DROPDOWN_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => Dropdown),
  multi: true
};
class DropdownItem {
  constructor() {
    this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onOptionClick(event) {
    this.onClick.emit({
      originalEvent: event,
      option: this.option
    });
  }
}
DropdownItem.ɵfac = function DropdownItem_Factory(t) {
  return new (t || DropdownItem)();
};
DropdownItem.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DropdownItem,
  selectors: [["p-dropdownItem"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    option: "option",
    selected: "selected",
    label: "label",
    disabled: "disabled",
    visible: "visible",
    itemSize: "itemSize",
    template: "template"
  },
  outputs: {
    onClick: "onClick"
  },
  decls: 3,
  vars: 15,
  consts: [["role", "option", "pRipple", "", 3, "ngStyle", "id", "ngClass", "click"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function DropdownItem_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownItem_Template_li_click_0_listener($event) {
        return ctx.onOptionClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropdownItem_span_1_Template, 2, 1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DropdownItem_ng_container_2_Template, 1, 0, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.itemSize + "px"))("id", ctx.selected ? "p-highlighted-option" : "")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c1, ctx.selected, ctx.disabled));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.label)("aria-selected", ctx.selected);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.template);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, ctx.option));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-dropdownItem',
      template: `
        <li (click)="onOptionClick($event)" role="option" pRipple
            [attr.aria-label]="label" [attr.aria-selected]="selected"
            [ngStyle]="{'height': itemSize + 'px'}" [id]="selected ? 'p-highlighted-option':''"
            [ngClass]="{'p-dropdown-item':true, 'p-highlight': selected, 'p-disabled': disabled}">
            <span *ngIf="!template">{{label||'empty'}}</span>
            <ng-container *ngTemplateOutlet="template; context: {$implicit: option}"></ng-container>
        </li>
    `,
      host: {
        'class': 'p-element'
      }
    }]
  }], null, {
    option: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class Dropdown {
  constructor(el, renderer, cd, zone, filterService, config, overlayService) {
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.zone = zone;
    this.filterService = filterService;
    this.config = config;
    this.overlayService = overlayService;
    this.scrollHeight = '200px';
    this.resetFilterOnHide = false;
    this.dropdownIcon = 'pi pi-chevron-down';
    this.optionGroupChildren = "items";
    this.autoDisplayFirst = true;
    this.emptyFilterMessage = '';
    this.emptyMessage = '';
    this.lazy = false;
    this.autoZIndex = true;
    this.baseZIndex = 0;
    this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
    this.hideTransitionOptions = '.1s linear';
    this.filterMatchMode = "contains";
    this.tooltip = '';
    this.tooltipPosition = 'right';
    this.tooltipPositionStyle = 'absolute';
    this.autofocusFilter = true;
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onModelChange = () => {};
    this.onModelTouched = () => {};
    this.id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_4__.UniqueComponentId)();
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(_disabled) {
    if (_disabled) {
      this.focused = false;
      if (this.overlayVisible) this.hide();
    }
    this._disabled = _disabled;
    if (!this.cd.destroyed) {
      this.cd.detectChanges();
    }
  }
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(val) {
    this._itemSize = val;
    console.warn("The itemSize property is deprecated, use virtualScrollItemSize property instead.");
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'item':
          this.itemTemplate = item.template;
          break;
        case 'selectedItem':
          this.selectedItemTemplate = item.template;
          break;
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'filter':
          this.filterTemplate = item.template;
          break;
        case 'footer':
          this.footerTemplate = item.template;
          break;
        case 'emptyfilter':
          this.emptyFilterTemplate = item.template;
          break;
        case 'empty':
          this.emptyTemplate = item.template;
          break;
        case 'group':
          this.groupTemplate = item.template;
          break;
        case 'loader':
          this.loaderTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  ngOnInit() {
    this.optionsToDisplay = this.options;
    this.updateSelectedOption(null);
    this.labelId = this.id + '_label';
    this.listId = this.id + '_list';
    if (this.filterBy) {
      this.filterOptions = {
        filter: value => this.onFilterInputChange(value),
        reset: () => this.resetFilter()
      };
    }
  }
  get options() {
    return this._options;
  }
  set options(val) {
    this._options = val;
    this.optionsToDisplay = this._options;
    this.updateSelectedOption(this.value);
    this.selectedOption = this.findOption(this.value, this.optionsToDisplay);
    if (!this.selectedOption && primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.isNotEmpty(this.value) && !this.editable) {
      this.value = null;
      this.onModelChange(this.value);
    }
    this.optionsChanged = true;
    if (this._filterValue && this._filterValue.length) {
      this.activateFilter();
    }
  }
  get filterValue() {
    return this._filterValue;
  }
  set filterValue(val) {
    this._filterValue = val;
    this.activateFilter();
  }
  ngAfterViewInit() {
    if (this.editable) {
      this.updateEditableLabel();
    }
  }
  get label() {
    return this.selectedOption ? this.getOptionLabel(this.selectedOption) : null;
  }
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_5__.TranslationKeys.EMPTY_MESSAGE);
  }
  get emptyFilterMessageLabel() {
    return this.emptyFilterMessage || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_5__.TranslationKeys.EMPTY_FILTER_MESSAGE);
  }
  get filled() {
    if (typeof this.value === 'string') return !!this.value;
    return this.value || this.value != null || this.value != undefined;
  }
  get isVisibleClearIcon() {
    return this.value != null && this.value !== '' && this.showClear && !this.disabled;
  }
  updateEditableLabel() {
    if (this.editableInputViewChild && this.editableInputViewChild.nativeElement) {
      this.editableInputViewChild.nativeElement.value = this.selectedOption ? this.getOptionLabel(this.selectedOption) : this.value || '';
    }
  }
  getOptionLabel(option) {
    return this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(option, this.optionLabel) : option && option.label !== undefined ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue ? primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(option, this.optionValue) : !this.optionLabel && option && option.value !== undefined ? option.value : option;
  }
  isOptionDisabled(option) {
    return this.optionDisabled ? primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(option, this.optionDisabled) : option && option.disabled !== undefined ? option.disabled : false;
  }
  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label !== undefined ? optionGroup.label : optionGroup;
  }
  getOptionGroupChildren(optionGroup) {
    return this.optionGroupChildren ? primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
  }
  onItemClick(event) {
    const option = event.option;
    if (!this.isOptionDisabled(option)) {
      this.selectItem(event.originalEvent, option);
      this.accessibleViewChild.nativeElement.focus({
        preventScroll: true
      });
    }
    setTimeout(() => {
      this.hide();
    }, 150);
  }
  selectItem(event, option) {
    if (this.selectedOption != option) {
      this.selectedOption = option;
      this.value = this.getOptionValue(option);
      this.onModelChange(this.value);
      this.updateEditableLabel();
      this.onChange.emit({
        originalEvent: event,
        value: this.value
      });
    }
  }
  ngAfterViewChecked() {
    if (this.optionsChanged && this.overlayVisible) {
      this.optionsChanged = false;
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          this.alignOverlay();
        }, 1);
      });
    }
    if (this.selectedOptionUpdated && this.itemsWrapper) {
      let selectedItem = primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.findSingle(this.overlay, 'li.p-highlight');
      if (selectedItem) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.scrollInView(this.itemsWrapper, primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.findSingle(this.overlay, 'li.p-highlight'));
      }
      this.selectedOptionUpdated = false;
    }
  }
  writeValue(value) {
    if (this.filter) {
      this.resetFilter();
    }
    this.value = value;
    this.updateSelectedOption(value);
    this.updateEditableLabel();
    this.cd.markForCheck();
  }
  resetFilter() {
    this._filterValue = null;
    if (this.filterViewChild && this.filterViewChild.nativeElement) {
      this.filterViewChild.nativeElement.value = '';
    }
    this.optionsToDisplay = this.options;
  }
  updateSelectedOption(val) {
    this.selectedOption = this.findOption(val, this.optionsToDisplay);
    if (this.autoDisplayFirst && !this.placeholder && !this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length && !this.editable) {
      if (this.group) {
        this.selectedOption = this.optionsToDisplay[0].items[0];
      } else {
        this.selectedOption = this.optionsToDisplay[0];
      }
      this.value = this.getOptionValue(this.selectedOption);
      this.onModelChange(this.value);
    }
    this.selectedOptionUpdated = true;
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  onMouseclick(event) {
    if (this.disabled || this.readonly || this.isInputClick(event)) {
      return;
    }
    this.onClick.emit(event);
    this.accessibleViewChild.nativeElement.focus({
      preventScroll: true
    });
    if (this.overlayVisible) this.hide();else this.show();
    this.cd.detectChanges();
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
  }
  isInputClick(event) {
    return primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.hasClass(event.target, 'p-dropdown-clear-icon') || event.target.isSameNode(this.accessibleViewChild.nativeElement) || this.editableInputViewChild && event.target.isSameNode(this.editableInputViewChild.nativeElement);
  }
  isOutsideClicked(event) {
    return !(this.el.nativeElement.isSameNode(event.target) || this.el.nativeElement.contains(event.target) || this.overlay && this.overlay.contains(event.target));
  }
  isEmpty() {
    return !this.optionsToDisplay || this.optionsToDisplay && this.optionsToDisplay.length === 0;
  }
  onEditableInputClick() {
    this.bindDocumentClickListener();
  }
  onEditableInputFocus(event) {
    this.focused = true;
    this.hide();
    this.onFocus.emit(event);
  }
  onEditableInputChange(event) {
    this.value = event.target.value;
    this.updateSelectedOption(this.value);
    this.onModelChange(this.value);
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
  }
  show() {
    this.overlayVisible = true;
    this.preventDocumentDefault = true;
    this.cd.markForCheck();
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case 'visible':
        this.overlay = event.element;
        this.itemsWrapper = primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.findSingle(this.overlay, this.virtualScroll ? '.p-scroller' : '.p-dropdown-items-wrapper');
        this.virtualScroll && this.scroller.setContentEl(this.itemsViewChild.nativeElement);
        this.appendOverlay();
        if (this.autoZIndex) {
          primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ZIndexUtils.set('overlay', this.overlay, this.baseZIndex + this.config.zIndex.overlay);
        }
        this.alignOverlay();
        this.bindDocumentClickListener();
        this.bindDocumentResizeListener();
        this.bindScrollListener();
        if (this.options && this.options.length) {
          if (this.virtualScroll) {
            const selectedIndex = this.selectedOption ? this.findOptionIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;
            if (selectedIndex !== -1) {
              this.scroller.scrollToIndex(selectedIndex);
            }
          } else {
            let selectedListItem = primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.findSingle(this.itemsWrapper, '.p-dropdown-item.p-highlight');
            if (selectedListItem) {
              selectedListItem.scrollIntoView({
                block: 'nearest',
                inline: 'center'
              });
            }
          }
        }
        if (this.filterViewChild && this.filterViewChild.nativeElement) {
          this.preventModelTouched = true;
          if (this.autofocusFilter) {
            this.filterViewChild.nativeElement.focus();
          }
        }
        this.onShow.emit(event);
        break;
      case 'void':
        this.onOverlayHide();
        this.onHide.emit(event);
        break;
    }
  }
  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case 'void':
        primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ZIndexUtils.clear(event.element);
        break;
    }
  }
  appendOverlay() {
    if (this.appendTo) {
      if (this.appendTo === 'body') document.body.appendChild(this.overlay);else primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.appendChild(this.overlay, this.appendTo);
      if (!this.overlay.style.minWidth) {
        this.overlay.style.minWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.getWidth(this.containerViewChild.nativeElement) + 'px';
      }
    }
  }
  restoreOverlayAppend() {
    if (this.overlay && this.appendTo) {
      this.el.nativeElement.appendChild(this.overlay);
    }
  }
  hide() {
    this.overlayVisible = false;
    if (this.filter && this.resetFilterOnHide) {
      this.resetFilter();
    }
    this.cd.markForCheck();
  }
  alignOverlay() {
    if (this.overlay) {
      if (this.appendTo) primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.absolutePosition(this.overlay, this.containerViewChild.nativeElement);else primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.relativePosition(this.overlay, this.containerViewChild.nativeElement);
    }
  }
  onInputFocus(event) {
    this.focused = true;
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onBlur.emit(event);
    if (!this.preventModelTouched) {
      this.onModelTouched();
    }
    this.preventModelTouched = false;
  }
  findPrevEnabledOption(index) {
    let prevEnabledOption;
    if (this.optionsToDisplay && this.optionsToDisplay.length) {
      for (let i = index - 1; 0 <= i; i--) {
        let option = this.optionsToDisplay[i];
        if (this.isOptionDisabled(option)) {
          continue;
        } else {
          prevEnabledOption = option;
          break;
        }
      }
      if (!prevEnabledOption) {
        for (let i = this.optionsToDisplay.length - 1; i >= index; i--) {
          let option = this.optionsToDisplay[i];
          if (this.isOptionDisabled(option)) {
            continue;
          } else {
            prevEnabledOption = option;
            break;
          }
        }
      }
    }
    return prevEnabledOption;
  }
  findNextEnabledOption(index) {
    let nextEnabledOption;
    if (this.optionsToDisplay && this.optionsToDisplay.length) {
      for (let i = index + 1; i < this.optionsToDisplay.length; i++) {
        let option = this.optionsToDisplay[i];
        if (this.isOptionDisabled(option)) {
          continue;
        } else {
          nextEnabledOption = option;
          break;
        }
      }
      if (!nextEnabledOption) {
        for (let i = 0; i < index; i++) {
          let option = this.optionsToDisplay[i];
          if (this.isOptionDisabled(option)) {
            continue;
          } else {
            nextEnabledOption = option;
            break;
          }
        }
      }
    }
    return nextEnabledOption;
  }
  onKeydown(event, search) {
    if (this.readonly || !this.optionsToDisplay || this.optionsToDisplay.length === null) {
      return;
    }
    switch (event.which) {
      //down
      case 40:
        if (!this.overlayVisible && event.altKey) {
          this.show();
        } else {
          if (this.group) {
            let selectedItemIndex = this.selectedOption ? this.findOptionGroupIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;
            if (selectedItemIndex !== -1) {
              let nextItemIndex = selectedItemIndex.itemIndex + 1;
              if (nextItemIndex < this.getOptionGroupChildren(this.optionsToDisplay[selectedItemIndex.groupIndex]).length) {
                this.selectItem(event, this.getOptionGroupChildren(this.optionsToDisplay[selectedItemIndex.groupIndex])[nextItemIndex]);
                this.selectedOptionUpdated = true;
              } else if (this.optionsToDisplay[selectedItemIndex.groupIndex + 1]) {
                this.selectItem(event, this.getOptionGroupChildren(this.optionsToDisplay[selectedItemIndex.groupIndex + 1])[0]);
                this.selectedOptionUpdated = true;
              }
            } else {
              if (this.optionsToDisplay && this.optionsToDisplay.length > 0) {
                this.selectItem(event, this.getOptionGroupChildren(this.optionsToDisplay[0])[0]);
              }
            }
          } else {
            let selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;
            let nextEnabledOption = this.findNextEnabledOption(selectedItemIndex);
            if (nextEnabledOption) {
              this.selectItem(event, nextEnabledOption);
              this.selectedOptionUpdated = true;
            }
          }
        }
        event.preventDefault();
        break;
      //up
      case 38:
        if (this.group) {
          let selectedItemIndex = this.selectedOption ? this.findOptionGroupIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;
          if (selectedItemIndex !== -1) {
            let prevItemIndex = selectedItemIndex.itemIndex - 1;
            if (prevItemIndex >= 0) {
              this.selectItem(event, this.getOptionGroupChildren(this.optionsToDisplay[selectedItemIndex.groupIndex])[prevItemIndex]);
              this.selectedOptionUpdated = true;
            } else if (prevItemIndex < 0) {
              let prevGroup = this.optionsToDisplay[selectedItemIndex.groupIndex - 1];
              if (prevGroup) {
                this.selectItem(event, this.getOptionGroupChildren(prevGroup)[this.getOptionGroupChildren(prevGroup).length - 1]);
                this.selectedOptionUpdated = true;
              }
            }
          }
        } else {
          let selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;
          let prevEnabledOption = this.findPrevEnabledOption(selectedItemIndex);
          if (prevEnabledOption) {
            this.selectItem(event, prevEnabledOption);
            this.selectedOptionUpdated = true;
          }
        }
        event.preventDefault();
        break;
      //space
      case 32:
        if (search) {
          if (!this.overlayVisible) {
            this.show();
          } else {
            this.hide();
          }
          event.preventDefault();
        }
        break;
      //enter
      case 13:
        if (this.overlayVisible && (!this.filter || this.optionsToDisplay && this.optionsToDisplay.length > 0)) {
          this.hide();
        } else if (!this.overlayVisible) {
          this.show();
        }
        event.preventDefault();
        break;
      //escape and tab
      case 27:
      case 9:
        this.hide();
        break;
      //search item based on keyboard input
      default:
        if (search && !event.metaKey) {
          this.search(event);
        }
        break;
    }
  }
  search(event) {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    const char = event.key;
    this.previousSearchChar = this.currentSearchChar;
    this.currentSearchChar = char;
    if (this.previousSearchChar === this.currentSearchChar) this.searchValue = this.currentSearchChar;else this.searchValue = this.searchValue ? this.searchValue + char : char;
    let newOption;
    if (this.group) {
      let searchIndex = this.selectedOption ? this.findOptionGroupIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : {
        groupIndex: 0,
        itemIndex: 0
      };
      newOption = this.searchOptionWithinGroup(searchIndex);
    } else {
      let searchIndex = this.selectedOption ? this.findOptionIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;
      newOption = this.searchOption(++searchIndex);
    }
    if (newOption && !this.isOptionDisabled(newOption)) {
      this.selectItem(event, newOption);
      this.selectedOptionUpdated = true;
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = null;
    }, 250);
  }
  searchOption(index) {
    let option;
    if (this.searchValue) {
      option = this.searchOptionInRange(index, this.optionsToDisplay.length);
      if (!option) {
        option = this.searchOptionInRange(0, index);
      }
    }
    return option;
  }
  searchOptionInRange(start, end) {
    for (let i = start; i < end; i++) {
      let opt = this.optionsToDisplay[i];
      if (this.getOptionLabel(opt).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !this.isOptionDisabled(opt)) {
        return opt;
      }
    }
    return null;
  }
  searchOptionWithinGroup(index) {
    let option;
    if (this.searchValue) {
      for (let i = index.groupIndex; i < this.optionsToDisplay.length; i++) {
        for (let j = index.groupIndex === i ? index.itemIndex + 1 : 0; j < this.getOptionGroupChildren(this.optionsToDisplay[i]).length; j++) {
          let opt = this.getOptionGroupChildren(this.optionsToDisplay[i])[j];
          if (this.getOptionLabel(opt).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !this.isOptionDisabled(opt)) {
            return opt;
          }
        }
      }
      if (!option) {
        for (let i = 0; i <= index.groupIndex; i++) {
          for (let j = 0; j < (index.groupIndex === i ? index.itemIndex : this.getOptionGroupChildren(this.optionsToDisplay[i]).length); j++) {
            let opt = this.getOptionGroupChildren(this.optionsToDisplay[i])[j];
            if (this.getOptionLabel(opt).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !this.isOptionDisabled(opt)) {
              return opt;
            }
          }
        }
      }
    }
    return null;
  }
  findOptionIndex(val, opts) {
    let index = -1;
    if (opts) {
      for (let i = 0; i < opts.length; i++) {
        if (val == null && this.getOptionValue(opts[i]) == null || primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.equals(val, this.getOptionValue(opts[i]), this.dataKey)) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  findOptionGroupIndex(val, opts) {
    let groupIndex, itemIndex;
    if (opts) {
      for (let i = 0; i < opts.length; i++) {
        groupIndex = i;
        itemIndex = this.findOptionIndex(val, this.getOptionGroupChildren(opts[i]));
        if (itemIndex !== -1) {
          break;
        }
      }
    }
    if (itemIndex !== -1) {
      return {
        groupIndex: groupIndex,
        itemIndex: itemIndex
      };
    } else {
      return -1;
    }
  }
  findOption(val, opts, inGroup) {
    if (this.group && !inGroup) {
      let opt;
      if (opts && opts.length) {
        for (let optgroup of opts) {
          opt = this.findOption(val, this.getOptionGroupChildren(optgroup), true);
          if (opt) {
            break;
          }
        }
      }
      return opt;
    } else {
      let index = this.findOptionIndex(val, opts);
      return index != -1 ? opts[index] : null;
    }
  }
  onFilterInputChange(event) {
    let inputValue = event.target.value;
    if (inputValue && inputValue.length) {
      this._filterValue = inputValue;
      this.activateFilter();
    } else {
      this._filterValue = null;
      this.optionsToDisplay = this.options;
    }
    this.virtualScroll && this.scroller.scrollToIndex(0);
    this.optionsChanged = true;
    this.onFilter.emit({
      originalEvent: event,
      filter: this._filterValue
    });
  }
  activateFilter() {
    let searchFields = (this.filterBy || this.optionLabel || 'label').split(',');
    if (this.options && this.options.length) {
      if (this.group) {
        let filteredGroups = [];
        for (let optgroup of this.options) {
          let filteredSubOptions = this.filterService.filter(this.getOptionGroupChildren(optgroup), searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
          if (filteredSubOptions && filteredSubOptions.length) {
            filteredGroups.push({
              ...optgroup,
              ...{
                [this.optionGroupChildren]: filteredSubOptions
              }
            });
          }
        }
        this.optionsToDisplay = filteredGroups;
      } else {
        this.optionsToDisplay = this.filterService.filter(this.options, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
      }
      this.optionsChanged = true;
    }
  }
  applyFocus() {
    if (this.editable) primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.findSingle(this.el.nativeElement, '.p-dropdown-label.p-inputtext').focus();else primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.findSingle(this.el.nativeElement, 'input[readonly]').focus();
  }
  focus() {
    this.applyFocus();
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
      this.documentClickListener = this.renderer.listen(documentTarget, 'click', event => {
        if (!this.preventDocumentDefault && this.isOutsideClicked(event)) {
          this.hide();
          this.unbindDocumentClickListener();
        }
        this.preventDocumentDefault = false;
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentResizeListener() {
    this.documentResizeListener = this.onWindowResize.bind(this);
    window.addEventListener('resize', this.documentResizeListener);
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      window.removeEventListener('resize', this.documentResizeListener);
      this.documentResizeListener = null;
    }
  }
  onWindowResize() {
    if (this.overlayVisible && !primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.isTouchDevice()) {
      this.hide();
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new primeng_dom__WEBPACK_IMPORTED_MODULE_6__.ConnectedOverlayScrollHandler(this.containerViewChild.nativeElement, event => {
        if (this.overlayVisible) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  clear(event) {
    this.value = null;
    this.onModelChange(this.value);
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
    this.updateSelectedOption(this.value);
    this.updateEditableLabel();
    this.onClear.emit(event);
  }
  onOverlayHide() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.overlay = null;
    this.itemsWrapper = null;
    this.onModelTouched();
  }
  ngOnDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.overlay) {
      primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ZIndexUtils.clear(this.overlay);
    }
    this.restoreOverlayAppend();
    this.onOverlayHide();
  }
}
Dropdown.ɵfac = function Dropdown_Factory(t) {
  return new (t || Dropdown)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.OverlayService));
};
Dropdown.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Dropdown,
  selectors: [["p-dropdown"]],
  contentQueries: function Dropdown_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function Dropdown_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filterViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.accessibleViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editableInputViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemsViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
    }
  },
  hostAttrs: [1, "p-element", "p-inputwrapper"],
  hostVars: 4,
  hostBindings: function Dropdown_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused || ctx.overlayVisible);
    }
  },
  inputs: {
    scrollHeight: "scrollHeight",
    filter: "filter",
    name: "name",
    style: "style",
    panelStyle: "panelStyle",
    styleClass: "styleClass",
    panelStyleClass: "panelStyleClass",
    readonly: "readonly",
    required: "required",
    editable: "editable",
    appendTo: "appendTo",
    tabindex: "tabindex",
    placeholder: "placeholder",
    filterPlaceholder: "filterPlaceholder",
    filterLocale: "filterLocale",
    inputId: "inputId",
    selectId: "selectId",
    dataKey: "dataKey",
    filterBy: "filterBy",
    autofocus: "autofocus",
    resetFilterOnHide: "resetFilterOnHide",
    dropdownIcon: "dropdownIcon",
    optionLabel: "optionLabel",
    optionValue: "optionValue",
    optionDisabled: "optionDisabled",
    optionGroupLabel: "optionGroupLabel",
    optionGroupChildren: "optionGroupChildren",
    autoDisplayFirst: "autoDisplayFirst",
    group: "group",
    showClear: "showClear",
    emptyFilterMessage: "emptyFilterMessage",
    emptyMessage: "emptyMessage",
    lazy: "lazy",
    virtualScroll: "virtualScroll",
    virtualScrollItemSize: "virtualScrollItemSize",
    virtualScrollOptions: "virtualScrollOptions",
    autoZIndex: "autoZIndex",
    baseZIndex: "baseZIndex",
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions",
    ariaFilterLabel: "ariaFilterLabel",
    ariaLabel: "ariaLabel",
    ariaLabelledBy: "ariaLabelledBy",
    filterMatchMode: "filterMatchMode",
    maxlength: "maxlength",
    tooltip: "tooltip",
    tooltipPosition: "tooltipPosition",
    tooltipPositionStyle: "tooltipPositionStyle",
    tooltipStyleClass: "tooltipStyleClass",
    autofocusFilter: "autofocusFilter",
    disabled: "disabled",
    itemSize: "itemSize",
    options: "options",
    filterValue: "filterValue"
  },
  outputs: {
    onChange: "onChange",
    onFilter: "onFilter",
    onFocus: "onFocus",
    onBlur: "onBlur",
    onClick: "onClick",
    onShow: "onShow",
    onHide: "onHide",
    onClear: "onClear",
    onLazyLoad: "onLazyLoad"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([DROPDOWN_VALUE_ACCESSOR])],
  decls: 12,
  vars: 25,
  consts: [[3, "ngClass", "ngStyle", "click"], ["container", ""], [1, "p-hidden-accessible"], ["type", "text", "readonly", "", "aria-haspopup", "listbox", "aria-haspopup", "listbox", "role", "combobox", 3, "disabled", "pAutoFocus", "focus", "blur", "keydown"], ["in", ""], [3, "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["type", "text", "class", "p-dropdown-label p-inputtext", "aria-haspopup", "listbox", 3, "disabled", "click", "input", "focus", "blur", 4, "ngIf"], ["class", "p-dropdown-clear-icon pi pi-times", 3, "click", 4, "ngIf"], ["role", "button", "aria-label", "dropdown trigger", "aria-haspopup", "listbox", 1, "p-dropdown-trigger"], [1, "p-dropdown-trigger-icon", 3, "ngClass"], [3, "ngClass", "ngStyle", "class", "click", 4, "ngIf"], [3, "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], ["type", "text", "aria-haspopup", "listbox", 1, "p-dropdown-label", "p-inputtext", 3, "disabled", "click", "input", "focus", "blur"], ["editableInput", ""], [1, "p-dropdown-clear-icon", "pi", "pi-times", 3, "click"], [4, "ngTemplateOutlet"], ["class", "p-dropdown-header", 3, "click", 4, "ngIf"], [1, "p-dropdown-items-wrapper"], [3, "items", "style", "itemSize", "autoSize", "lazy", "options", "onLazyLoad", 4, "ngIf"], ["buildInItems", ""], [1, "p-dropdown-header", 3, "click"], [4, "ngIf", "ngIfElse"], ["builtInFilterElement", ""], [1, "p-dropdown-filter-container"], ["type", "text", "autocomplete", "off", 1, "p-dropdown-filter", "p-inputtext", "p-component", 3, "value", "keydown.enter", "keydown", "input"], ["filter", ""], [1, "p-dropdown-filter-icon", "pi", "pi-search"], [3, "items", "itemSize", "autoSize", "lazy", "options", "onLazyLoad"], ["scroller", ""], ["pTemplate", "content"], ["pTemplate", "loader"], ["role", "listbox", 1, "p-dropdown-items", 3, "ngClass"], ["items", ""], ["itemslist", ""], ["class", "p-dropdown-empty-message", 3, "ngStyle", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], [1, "p-dropdown-item-group", 3, "ngStyle"], [3, "option", "selected", "label", "disabled", "template", "onClick"], [1, "p-dropdown-empty-message", 3, "ngStyle"], ["emptyFilter", ""], ["empty", ""]],
  template: function Dropdown_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dropdown_Template_div_click_0_listener($event) {
        return ctx.onMouseclick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function Dropdown_Template_input_focus_3_listener($event) {
        return ctx.onInputFocus($event);
      })("blur", function Dropdown_Template_input_blur_3_listener($event) {
        return ctx.onInputBlur($event);
      })("keydown", function Dropdown_Template_input_keydown_3_listener($event) {
        return ctx.onKeydown($event, true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Dropdown_span_5_Template, 3, 13, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Dropdown_span_6_Template, 2, 4, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Dropdown_input_7_Template, 2, 4, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Dropdown_i_8_Template, 1, 0, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, Dropdown_div_11_Template, 9, 17, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](20, _c17, ctx.disabled, ctx.overlayVisible, ctx.focused, ctx.showClear && !ctx.disabled))("ngStyle", ctx.style);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("pAutoFocus", ctx.autofocus);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("placeholder", ctx.placeholder)("aria-label", ctx.ariaLabel)("aria-expanded", false)("aria-labelledby", ctx.ariaLabelledBy)("tabindex", ctx.tabindex)("aria-activedescendant", ctx.overlayVisible ? ctx.labelId : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editable && ctx.label != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editable && ctx.label == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editable);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisibleClearIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.overlayVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.dropdownIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.overlayVisible);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.Tooltip, primeng_scroller__WEBPACK_IMPORTED_MODULE_8__.Scroller, primeng_autofocus__WEBPACK_IMPORTED_MODULE_9__.AutoFocus, DropdownItem],
  styles: [".p-dropdown{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-dropdown-clear-icon{position:absolute;top:50%;margin-top:-.5rem}.p-dropdown-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-dropdown-label{display:block;white-space:nowrap;overflow:hidden;flex:1 1 auto;width:1%;text-overflow:ellipsis;cursor:pointer}.p-dropdown-label-empty{overflow:hidden;visibility:hidden}input.p-dropdown-label{cursor:default}.p-dropdown .p-dropdown-panel{min-width:100%}.p-dropdown-panel{position:absolute;top:0;left:0}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-dropdown-items{margin:0;padding:0;list-style-type:none}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-fluid .p-dropdown{display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}\n"],
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('overlayAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
      opacity: 0,
      transform: 'scaleY(0.8)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
      opacity: 0
    }))])])]
  },
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dropdown, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-dropdown',
      template: `
         <div #container [ngClass]="{'p-dropdown p-component':true,
            'p-disabled':disabled, 'p-dropdown-open':overlayVisible, 'p-focus':focused, 'p-dropdown-clearable': showClear && !disabled}"
            (click)="onMouseclick($event)" [ngStyle]="style" [class]="styleClass">
            <div class="p-hidden-accessible">
                <input #in [attr.id]="inputId" type="text" readonly (focus)="onInputFocus($event)" aria-haspopup="listbox" [attr.placeholder]="placeholder"
                    aria-haspopup="listbox" [attr.aria-label]="ariaLabel" [attr.aria-expanded]="false" [attr.aria-labelledby]="ariaLabelledBy" (blur)="onInputBlur($event)" (keydown)="onKeydown($event, true)"
                    [disabled]="disabled" [attr.tabindex]="tabindex" [pAutoFocus]="autofocus" [attr.aria-activedescendant]="overlayVisible ? labelId : null" role="combobox">
            </div>
            <span [attr.id]="labelId" [ngClass]="{'p-dropdown-label p-inputtext':true,'p-dropdown-label-empty':(label == null || label.length === 0)}" *ngIf="!editable && (label != null)" [pTooltip]="tooltip" [tooltipPosition]="tooltipPosition" [positionStyle]="tooltipPositionStyle" [tooltipStyleClass]="tooltipStyleClass">
                <ng-container *ngIf="!selectedItemTemplate">{{label||'empty'}}</ng-container>
                <ng-container *ngTemplateOutlet="selectedItemTemplate; context: {$implicit: selectedOption}"></ng-container>
            </span>
            <span [ngClass]="{'p-dropdown-label p-inputtext p-placeholder':true,'p-dropdown-label-empty': (placeholder == null || placeholder.length === 0)}" *ngIf="!editable && (label == null)">{{placeholder||'empty'}}</span>
            <input #editableInput type="text" [attr.maxlength]="maxlength" class="p-dropdown-label p-inputtext" *ngIf="editable" [disabled]="disabled" [attr.placeholder]="placeholder"
                aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible" (click)="onEditableInputClick()" (input)="onEditableInputChange($event)" (focus)="onEditableInputFocus($event)" (blur)="onInputBlur($event)">
            <i class="p-dropdown-clear-icon pi pi-times" (click)="clear($event)" *ngIf="isVisibleClearIcon"></i>
            <div class="p-dropdown-trigger" role="button" aria-label="dropdown trigger" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible">
                <span class="p-dropdown-trigger-icon" [ngClass]="dropdownIcon"></span>
            </div>
            <div *ngIf="overlayVisible" [ngClass]="'p-dropdown-panel p-component'" (click)="onOverlayClick($event)" [@overlayAnimation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" (@overlayAnimation.start)="onOverlayAnimationStart($event)" (@overlayAnimation.done)="onOverlayAnimationEnd($event)" [ngStyle]="panelStyle" [class]="panelStyleClass">
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                <div class="p-dropdown-header" *ngIf="filter" (click)="$event.stopPropagation()">
                    <ng-container *ngIf="filterTemplate; else builtInFilterElement">
                        <ng-container *ngTemplateOutlet="filterTemplate; context: {options: filterOptions}"></ng-container>
                    </ng-container>
                    <ng-template #builtInFilterElement>
                        <div class="p-dropdown-filter-container">
                            <input #filter type="text" autocomplete="off" [value]="filterValue||''" class="p-dropdown-filter p-inputtext p-component" [attr.placeholder]="filterPlaceholder"
                            (keydown.enter)="$event.preventDefault()" (keydown)="onKeydown($event, false)" (input)="onFilterInputChange($event)" [attr.aria-label]="ariaFilterLabel" [attr.aria-activedescendant]="overlayVisible ? 'p-highlighted-option' : labelId">
                            <span class="p-dropdown-filter-icon pi pi-search"></span>
                        </div>
                    </ng-template>
                </div>
                <div class="p-dropdown-items-wrapper" [style.max-height]="virtualScroll ? 'auto' : (scrollHeight||'auto')">
                    <p-scroller *ngIf="virtualScroll" #scroller [items]="optionsToDisplay" [style]="{'height': scrollHeight}" [itemSize]="virtualScrollItemSize||_itemSize" [autoSize]="true"
                        [lazy]="lazy" (onLazyLoad)="onLazyLoad.emit($event)" [options]="virtualScrollOptions">
                        <ng-template pTemplate="content" let-items let-scrollerOptions="options">
                            <ng-container *ngTemplateOutlet="buildInItems; context: {$implicit: items, options: scrollerOptions}"></ng-container>
                        </ng-template>
                        <ng-container *ngIf="loaderTemplate">
                            <ng-template pTemplate="loader" let-scrollerOptions="options">
                                <ng-container *ngTemplateOutlet="loaderTemplate; context: {options: scrollerOptions}"></ng-container>
                            </ng-template>
                        </ng-container>
                    </p-scroller>
                    <ng-container *ngIf="!virtualScroll">
                        <ng-container *ngTemplateOutlet="buildInItems; context: {$implicit: optionsToDisplay, options: {}}"></ng-container>
                    </ng-container>

                    <ng-template #buildInItems let-items let-scrollerOptions="options">
                        <ul #items [attr.id]="listId" class="p-dropdown-items" [ngClass]="scrollerOptions.contentStyleClass" [style]="scrollerOptions.contentStyle" role="listbox">
                            <ng-container *ngIf="group">
                                <ng-template ngFor let-optgroup [ngForOf]="items">
                                    <li class="p-dropdown-item-group" [ngStyle]="{'height': scrollerOptions.itemSize + 'px'}">
                                        <span *ngIf="!groupTemplate">{{getOptionGroupLabel(optgroup)||'empty'}}</span>
                                        <ng-container *ngTemplateOutlet="groupTemplate; context: {$implicit: optgroup}"></ng-container>
                                    </li>
                                    <ng-container *ngTemplateOutlet="itemslist; context: {$implicit: getOptionGroupChildren(optgroup), selectedOption: selectedOption}"></ng-container>
                                </ng-template>
                            </ng-container>
                            <ng-container *ngIf="!group">
                                <ng-container *ngTemplateOutlet="itemslist; context: {$implicit: items, selectedOption: selectedOption}"></ng-container>
                            </ng-container>
                            <ng-template #itemslist let-options let-selectedOption="selectedOption">
                                <ng-template ngFor let-option let-i="index" [ngForOf]="options">
                                    <p-dropdownItem [option]="option" [selected]="selectedOption == option" [label]="getOptionLabel(option)" [disabled]="isOptionDisabled(option)"
                                                    (onClick)="onItemClick($event)"
                                                    [template]="itemTemplate"></p-dropdownItem>
                                </ng-template>
                            </ng-template>
                            <li *ngIf="filterValue && isEmpty()" class="p-dropdown-empty-message" [ngStyle]="{'height': scrollerOptions.itemSize + 'px'}">
                                <ng-container *ngIf="!emptyFilterTemplate && !emptyTemplate; else emptyFilter">
                                    {{emptyFilterMessageLabel}}
                                </ng-container>
                                <ng-container #emptyFilter *ngTemplateOutlet="emptyFilterTemplate || emptyTemplate"></ng-container>
                            </li>
                            <li *ngIf="!filterValue && isEmpty()" class="p-dropdown-empty-message" [ngStyle]="{'height': scrollerOptions.itemSize + 'px'}">
                                <ng-container *ngIf="!emptyTemplate; else empty">
                                    {{emptyMessageLabel}}
                                </ng-container>
                                <ng-container #empty *ngTemplateOutlet="emptyTemplate"></ng-container>
                            </li>
                        </ul>
                    </ng-template>
                </div>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
            </div>
        </div>
    `,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('overlayAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
        opacity: 0,
        transform: 'scaleY(0.8)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
        opacity: 0
      }))])])],
      host: {
        'class': 'p-element p-inputwrapper',
        '[class.p-inputwrapper-filled]': 'filled',
        '[class.p-inputwrapper-focus]': 'focused || overlayVisible'
      },
      providers: [DROPDOWN_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      styles: [".p-dropdown{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-dropdown-clear-icon{position:absolute;top:50%;margin-top:-.5rem}.p-dropdown-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-dropdown-label{display:block;white-space:nowrap;overflow:hidden;flex:1 1 auto;width:1%;text-overflow:ellipsis;cursor:pointer}.p-dropdown-label-empty{overflow:hidden;visibility:hidden}input.p-dropdown-label{cursor:default}.p-dropdown .p-dropdown-panel{min-width:100%}.p-dropdown-panel{position:absolute;top:0;left:0}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-dropdown-items{margin:0;padding:0;list-style-type:none}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-fluid .p-dropdown{display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_5__.FilterService
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeNGConfig
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_5__.OverlayService
    }];
  }, {
    scrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    editable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterLocale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dataKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autofocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resetFilterOnHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dropdownIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionGroupLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionGroupChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoDisplayFirst: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    group: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    emptyFilterMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    emptyMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    lazy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualScrollItemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualScrollOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    baseZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hideTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaFilterLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterMatchMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxlength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltipPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltipPositionStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltipStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autofocusFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onLazyLoad: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    containerViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['container']
    }],
    filterViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['filter']
    }],
    accessibleViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['in']
    }],
    editableInputViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['editableInput']
    }],
    itemsViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['items']
    }],
    scroller: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['scroller']
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class DropdownModule {}
DropdownModule.ɵfac = function DropdownModule_Factory(t) {
  return new (t || DropdownModule)();
};
DropdownModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: DropdownModule
});
DropdownModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.RippleModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_8__.ScrollerModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_9__.AutoFocusModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_8__.ScrollerModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.RippleModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_8__.ScrollerModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_9__.AutoFocusModule],
      exports: [Dropdown, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_8__.ScrollerModule],
      declarations: [Dropdown, DropdownItem]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 84538:
/*!**********************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-ripple.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ripple": () => (/* binding */ Ripple),
/* harmony export */   "RippleModule": () => (/* binding */ RippleModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/dom */ 71420);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 14356);





class Ripple {
  constructor(el, zone, config) {
    this.el = el;
    this.zone = zone;
    this.config = config;
  }
  ngAfterViewInit() {
    if (this.config && this.config.ripple) {
      this.zone.runOutsideAngular(() => {
        this.create();
        this.mouseDownListener = this.onMouseDown.bind(this);
        this.el.nativeElement.addEventListener('mousedown', this.mouseDownListener);
      });
    }
  }
  onMouseDown(event) {
    let ink = this.getInk();
    if (!ink || getComputedStyle(ink, null).display === 'none') {
      return;
    }
    primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.removeClass(ink, 'p-ink-active');
    if (!primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getHeight(ink) && !primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getWidth(ink)) {
      let d = Math.max(primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterWidth(this.el.nativeElement), primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterHeight(this.el.nativeElement));
      ink.style.height = d + 'px';
      ink.style.width = d + 'px';
    }
    let offset = primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOffset(this.el.nativeElement);
    let x = event.pageX - offset.left + document.body.scrollTop - primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getWidth(ink) / 2;
    let y = event.pageY - offset.top + document.body.scrollLeft - primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getHeight(ink) / 2;
    ink.style.top = y + 'px';
    ink.style.left = x + 'px';
    primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.addClass(ink, 'p-ink-active');
    this.timeout = setTimeout(() => {
      let ink = this.getInk();
      if (ink) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.removeClass(ink, 'p-ink-active');
      }
    }, 401);
  }
  getInk() {
    for (let i = 0; i < this.el.nativeElement.children.length; i++) {
      if (this.el.nativeElement.children[i].className.indexOf('p-ink') !== -1) {
        return this.el.nativeElement.children[i];
      }
    }
    return null;
  }
  resetInk() {
    let ink = this.getInk();
    if (ink) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.removeClass(ink, 'p-ink-active');
    }
  }
  onAnimationEnd(event) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.removeClass(event.currentTarget, 'p-ink-active');
  }
  create() {
    let ink = document.createElement('span');
    ink.className = 'p-ink';
    this.el.nativeElement.appendChild(ink);
    this.animationListener = this.onAnimationEnd.bind(this);
    ink.addEventListener('animationend', this.animationListener);
  }
  remove() {
    let ink = this.getInk();
    if (ink) {
      this.el.nativeElement.removeEventListener('mousedown', this.mouseDownListener);
      ink.removeEventListener('animationend', this.animationListener);
      primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.removeElement(ink);
    }
  }
  ngOnDestroy() {
    if (this.config && this.config.ripple) {
      this.remove();
    }
  }
}
Ripple.ɵfac = function Ripple_Factory(t) {
  return new (t || Ripple)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeNGConfig, 8));
};
Ripple.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: Ripple,
  selectors: [["", "pRipple", ""]],
  hostAttrs: [1, "p-ripple", "p-element"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Ripple, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[pRipple]',
      host: {
        'class': 'p-ripple p-element'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeNGConfig,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }];
  }, null);
})();
class RippleModule {}
RippleModule.ɵfac = function RippleModule_Factory(t) {
  return new (t || RippleModule)();
};
RippleModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: RippleModule
});
RippleModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RippleModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      exports: [Ripple],
      declarations: [Ripple]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 73705:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-scroller.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scroller": () => (/* binding */ Scroller),
/* harmony export */   "ScrollerModule": () => (/* binding */ ScrollerModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dom */ 71420);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 14356);






const _c0 = ["element"];
const _c1 = ["content"];
function Scroller_ng_container_0_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c2 = function (a0, a1) {
  return {
    $implicit: a0,
    options: a1
  };
};
function Scroller_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_container_0_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.contentTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c2, ctx_r4.loadedItems, ctx_r4.getContentOptions()));
  }
}
function Scroller_ng_container_0_ng_template_4_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Scroller_ng_container_0_ng_template_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_container_0_ng_template_4_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const index_r13 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r11.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c2, item_r12, ctx_r11.getOptions(index_r13)));
  }
}
const _c3 = function (a0) {
  return {
    "p-scroller-loading": a0
  };
};
function Scroller_ng_container_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Scroller_ng_container_0_ng_template_4_ng_container_2_Template, 2, 5, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, ctx_r6.d_loading))("ngStyle", ctx_r6.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.loadedItems)("ngForTrackBy", ctx_r6._trackBy || ctx_r6.index);
  }
}
function Scroller_ng_container_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 11);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r7.spacerStyle);
  }
}
function Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c4 = function (a0) {
  return {
    numCols: a0
  };
};
const _c5 = function (a0) {
  return {
    options: a0
  };
};
function Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const index_r20 = ctx.index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r18.loaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c5, ctx_r18.getLoaderOptions(index_r20, ctx_r18.both && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, ctx_r18._numItemsInViewport.cols))));
  }
}
function Scroller_ng_container_0_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_Template, 2, 6, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.loaderArr);
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c6 = function () {
  return {
    styleClass: "p-scroller-loading-icon"
  };
};
function Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r22.loaderIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c6)));
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 16);
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_Template, 2, 5, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_container_0_div_7_ng_template_2_ng_template_1_Template, 1, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.loaderIconTemplate)("ngIfElse", _r23);
  }
}
const _c7 = function (a0) {
  return {
    "p-component-overlay": a0
  };
};
function Scroller_ng_container_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_container_0_div_7_ng_container_1_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Scroller_ng_container_0_div_7_ng_template_2_Template, 3, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c7, !ctx_r8.loaderTemplate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.loaderTemplate)("ngIfElse", _r16);
  }
}
const _c8 = function (a1, a2) {
  return {
    "p-scroller": true,
    "p-both-scroll": a1,
    "p-horizontal-scroll": a2
  };
};
function Scroller_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function Scroller_ng_container_0_Template_div_scroll_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r26.onContainerScroll($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Scroller_ng_container_0_ng_container_3_Template, 2, 5, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Scroller_ng_container_0_ng_template_4_Template, 3, 6, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Scroller_ng_container_0_div_6_Template, 1, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Scroller_ng_container_0_div_7_Template, 4, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0._styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0._style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c8, ctx_r0.both, ctx_r0.horizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r0._id)("tabindex", ctx_r0.tabindex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.contentTemplate)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0._showSpacer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loaderDisabled && ctx_r0._showLoader && ctx_r0.d_loading);
  }
}
function Scroller_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c9 = function (a0, a1) {
  return {
    rows: a0,
    columns: a1
  };
};
function Scroller_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r28.contentTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c2, ctx_r28.items, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c9, ctx_r28._items, ctx_r28.loadedColumns)));
  }
}
function Scroller_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_template_1_ng_container_1_Template, 2, 8, "ng-container", 17);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.contentTemplate);
  }
}
const _c10 = ["*"];
class Scroller {
  constructor(cd, zone) {
    this.cd = cd;
    this.zone = zone;
    this.onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onScrollIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._tabindex = 0;
    this._itemSize = 0;
    this._orientation = 'vertical';
    this._delay = 0;
    this._resizeDelay = 10;
    this._lazy = false;
    this._disabled = false;
    this._loaderDisabled = false;
    this._showSpacer = true;
    this._showLoader = false;
    this._autoSize = false;
    this.d_loading = false;
    this.first = 0;
    this.last = 0;
    this.numItemsInViewport = 0;
    this.lastScrollPos = 0;
    this.loaderArr = [];
    this.spacerStyle = {};
    this.contentStyle = {};
    this.initialized = false;
    if (!this._disabled) {
      this.zone.runOutsideAngular(() => {
        this.windowResizeListener = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.windowResizeListener);
        window.addEventListener('orientationchange', this.windowResizeListener);
      });
    }
  }
  get id() {
    return this._id;
  }
  set id(val) {
    this._id = val;
  }
  get style() {
    return this._style;
  }
  set style(val) {
    this._style = val;
  }
  get styleClass() {
    return this._styleClass;
  }
  set styleClass(val) {
    this._styleClass = val;
  }
  get tabindex() {
    return this._tabindex;
  }
  set tabindex(val) {
    this._tabindex = val;
  }
  get items() {
    return this._items;
  }
  set items(val) {
    this._items = val;
  }
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(val) {
    this._itemSize = val;
  }
  get scrollHeight() {
    return this._scrollHeight;
  }
  set scrollHeight(val) {
    this._scrollHeight = val;
  }
  get scrollWidth() {
    return this._scrollWidth;
  }
  set scrollWidth(val) {
    this._scrollWidth = val;
  }
  get orientation() {
    return this._orientation;
  }
  set orientation(val) {
    this._orientation = val;
  }
  get delay() {
    return this._delay;
  }
  set delay(val) {
    this._delay = val;
  }
  get resizeDelay() {
    return this._resizeDelay;
  }
  set resizeDelay(val) {
    this._resizeDelay = val;
  }
  get lazy() {
    return this._lazy;
  }
  set lazy(val) {
    this._lazy = val;
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(val) {
    this._disabled = val;
  }
  get loaderDisabled() {
    return this._loaderDisabled;
  }
  set loaderDisabled(val) {
    this._loaderDisabled = val;
  }
  get columns() {
    return this._columns;
  }
  set columns(val) {
    this._columns = val;
  }
  get showSpacer() {
    return this._showSpacer;
  }
  set showSpacer(val) {
    this._showSpacer = val;
  }
  get showLoader() {
    return this._showLoader;
  }
  set showLoader(val) {
    this._showLoader = val;
  }
  get numToleratedItems() {
    return this._numToleratedItems;
  }
  set numToleratedItems(val) {
    this._numToleratedItems = val;
  }
  get loading() {
    return this._loading;
  }
  set loading(val) {
    this._loading = val;
  }
  get autoSize() {
    return this._autoSize;
  }
  set autoSize(val) {
    this._autoSize = val;
  }
  get trackBy() {
    return this._trackBy;
  }
  set trackBy(val) {
    this._trackBy = val;
  }
  get options() {
    return this._options;
  }
  set options(val) {
    this._options = val;
    if (val && typeof val === 'object') {
      Object.entries(val).forEach(([k, v]) => this[`_${k}`] !== v && (this[`_${k}`] = v));
    }
  }
  get vertical() {
    return this._orientation === 'vertical';
  }
  get horizontal() {
    return this._orientation === 'horizontal';
  }
  get both() {
    return this._orientation === 'both';
  }
  get loadedItems() {
    if (this._items && !this.d_loading) {
      if (this.both) return this._items.slice(this.first.rows, this.last.rows).map(item => this._columns ? item : item.slice(this.first.cols, this.last.cols));else if (this.horizontal && this._columns) return this._items;else return this._items.slice(this.first, this.last);
    }
    return [];
  }
  get loadedRows() {
    return this.d_loading ? this._loaderDisabled ? this.loaderArr : [] : this.loadedItems;
  }
  get loadedColumns() {
    if (this._columns && (this.both || this.horizontal)) {
      return this.d_loading && this._loaderDisabled ? this.both ? this.loaderArr[0] : this.loaderArr : this._columns.slice(this.both ? this.first.cols : this.first, this.both ? this.last.cols : this.last);
    }
    return this._columns;
  }
  ngOnInit() {
    this.setInitialState();
  }
  ngOnChanges(simpleChanges) {
    let isLoadingChanged = false;
    if (simpleChanges.loading) {
      const {
        previousValue,
        currentValue
      } = simpleChanges.loading;
      if (this.lazy && previousValue !== currentValue && currentValue !== this.d_loading) {
        this.d_loading = currentValue;
        isLoadingChanged = true;
      }
    }
    if (this.initialized) {
      const isChanged = !isLoadingChanged && (simpleChanges.items || simpleChanges.itemSize || simpleChanges.scrollHeight || simpleChanges.scrollWidth);
      isChanged && this.init();
    }
    if (simpleChanges.orientation) {
      this.lastScrollPos = this.both ? {
        top: 0,
        left: 0
      } : 0;
    }
    if (simpleChanges.numToleratedItems) {
      const {
        previousValue,
        currentValue
      } = simpleChanges.numToleratedItems;
      if (previousValue !== currentValue && currentValue !== this.d_numToleratedItems) {
        this.d_numToleratedItems = currentValue;
      }
    }
    if (simpleChanges.options) {
      const {
        previousValue,
        currentValue
      } = simpleChanges.options;
      if (this.lazy && previousValue?.loading !== currentValue?.loading && currentValue?.loading !== this.d_loading) {
        this.d_loading = currentValue.loading;
      }
      if (previousValue?.numToleratedItems !== currentValue?.numToleratedItems && currentValue?.numToleratedItems !== this.d_numToleratedItems) {
        this.d_numToleratedItems = currentValue.numToleratedItems;
      }
    }
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'content':
          this.contentTemplate = item.template;
          break;
        case 'item':
          this.itemTemplate = item.template;
          break;
        case 'loader':
          this.loaderTemplate = item.template;
          break;
        case 'loadericon':
          this.loaderIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    this.setContentEl(this.contentEl);
    this.init();
    this.defaultWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getWidth(this.elementViewChild.nativeElement);
    this.defaultHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getHeight(this.elementViewChild.nativeElement);
    this.initialized = true;
  }
  ngAfterViewChecked() {
    this.calculateAutoSize();
  }
  ngOnDestroy() {
    if (this.windowResizeListener) {
      window.removeEventListener('resize', this.windowResizeListener);
      window.removeEventListener('orientationchange', this.windowResizeListener);
      this.windowResizeListener = null;
    }
  }
  init() {
    if (!this._disabled) {
      this.setSize();
      this.calculateOptions();
      this.setSpacerSize();
      this.cd.detectChanges();
    }
  }
  setContentEl(el) {
    this.contentEl = el || this.contentViewChild?.nativeElement || primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.findSingle(this.elementViewChild?.nativeElement, '.p-scroller-content');
  }
  setInitialState() {
    this.first = this.both ? {
      rows: 0,
      cols: 0
    } : 0;
    this.last = this.both ? {
      rows: 0,
      cols: 0
    } : 0;
    this.numItemsInViewport = this.both ? {
      rows: 0,
      cols: 0
    } : 0;
    this.lastScrollPos = this.both ? {
      top: 0,
      left: 0
    } : 0;
    this.d_loading = this._loading || false;
    this.d_numToleratedItems = this._numToleratedItems;
  }
  getElementRef() {
    return this.elementViewChild;
  }
  scrollTo(options) {
    this.lastScrollPos = this.both ? {
      top: 0,
      left: 0
    } : 0;
    this.elementViewChild?.nativeElement?.scrollTo(options);
  }
  scrollToIndex(index, behavior = 'auto') {
    const {
      numToleratedItems
    } = this.calculateNumItems();
    const contentPos = this.getContentPosition();
    const calculateFirst = (_index = 0, _numT) => _index <= _numT ? 0 : _index;
    const calculateCoord = (_first, _size, _cpos) => _first * _size + _cpos;
    const scrollTo = (left = 0, top = 0) => this.scrollTo({
      left,
      top,
      behavior
    });
    if (this.both) {
      const newFirst = {
        rows: calculateFirst(index[0], numToleratedItems[0]),
        cols: calculateFirst(index[1], numToleratedItems[1])
      };
      if (newFirst.rows !== this.first.rows || newFirst.cols !== this.first.cols) {
        scrollTo(calculateCoord(newFirst.cols, this._itemSize[1], contentPos.left), calculateCoord(newFirst.rows, this._itemSize[0], contentPos.top));
      }
    } else {
      const newFirst = calculateFirst(index, numToleratedItems);
      if (newFirst !== this.first) {
        this.horizontal ? scrollTo(calculateCoord(newFirst, this._itemSize, contentPos.left), 0) : scrollTo(0, calculateCoord(newFirst, this._itemSize, contentPos.top));
      }
    }
  }
  scrollInView(index, to, behavior = 'auto') {
    if (to) {
      const {
        first,
        viewport
      } = this.getRenderedRange();
      const scrollTo = (left = 0, top = 0) => this.scrollTo({
        left,
        top,
        behavior
      });
      const isToStart = to === 'to-start';
      const isToEnd = to === 'to-end';
      if (isToStart) {
        if (this.both) {
          if (viewport.first.rows - first.rows > index[0]) {
            scrollTo(viewport.first.cols * this._itemSize[1], (viewport.first.rows - 1) * this._itemSize[0]);
          } else if (viewport.first.cols - first.cols > index[1]) {
            scrollTo((viewport.first.cols - 1) * this._itemSize[1], viewport.first.rows * this._itemSize[0]);
          }
        } else {
          if (viewport.first - first > index) {
            const pos = (viewport.first - 1) * this._itemSize;
            this.horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
          }
        }
      } else if (isToEnd) {
        if (this.both) {
          if (viewport.last.rows - first.rows <= index[0] + 1) {
            scrollTo(viewport.first.cols * this._itemSize[1], (viewport.first.rows + 1) * this._itemSize[0]);
          } else if (viewport.last.cols - first.cols <= index[1] + 1) {
            scrollTo((viewport.first.cols + 1) * this._itemSize[1], viewport.first.rows * this._itemSize[0]);
          }
        } else {
          if (viewport.last - first <= index + 1) {
            const pos = (viewport.first + 1) * this._itemSize;
            this.horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
          }
        }
      }
    } else {
      this.scrollToIndex(index, behavior);
    }
  }
  getRenderedRange() {
    const calculateFirstInViewport = (_pos, _size) => Math.floor(_pos / (_size || _pos));
    let firstInViewport = this.first;
    let lastInViewport = 0;
    if (this.elementViewChild?.nativeElement) {
      const {
        scrollTop,
        scrollLeft
      } = this.elementViewChild.nativeElement;
      if (this.both) {
        firstInViewport = {
          rows: calculateFirstInViewport(scrollTop, this._itemSize[0]),
          cols: calculateFirstInViewport(scrollLeft, this._itemSize[1])
        };
        lastInViewport = {
          rows: firstInViewport.rows + this.numItemsInViewport.rows,
          cols: firstInViewport.cols + this.numItemsInViewport.cols
        };
      } else {
        const scrollPos = this.horizontal ? scrollLeft : scrollTop;
        firstInViewport = calculateFirstInViewport(scrollPos, this._itemSize);
        lastInViewport = firstInViewport + this.numItemsInViewport;
      }
    }
    return {
      first: this.first,
      last: this.last,
      viewport: {
        first: firstInViewport,
        last: lastInViewport
      }
    };
  }
  calculateNumItems() {
    const contentPos = this.getContentPosition();
    const contentWidth = this.elementViewChild?.nativeElement ? this.elementViewChild.nativeElement.offsetWidth - contentPos.left : 0;
    const contentHeight = this.elementViewChild?.nativeElement ? this.elementViewChild.nativeElement.offsetHeight - contentPos.top : 0;
    const calculateNumItemsInViewport = (_contentSize, _itemSize) => Math.ceil(_contentSize / (_itemSize || _contentSize));
    const calculateNumToleratedItems = _numItems => Math.ceil(_numItems / 2);
    const numItemsInViewport = this.both ? {
      rows: calculateNumItemsInViewport(contentHeight, this._itemSize[0]),
      cols: calculateNumItemsInViewport(contentWidth, this._itemSize[1])
    } : calculateNumItemsInViewport(this.horizontal ? contentWidth : contentHeight, this._itemSize);
    const numToleratedItems = this.d_numToleratedItems || (this.both ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport));
    return {
      numItemsInViewport,
      numToleratedItems
    };
  }
  calculateOptions() {
    const {
      numItemsInViewport,
      numToleratedItems
    } = this.calculateNumItems();
    const calculateLast = (_first, _num, _numT, _isCols = false) => this.getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
    const first = this.first;
    const last = this.both ? {
      rows: calculateLast(this.first.rows, numItemsInViewport.rows, numToleratedItems[0]),
      cols: calculateLast(this.first.cols, numItemsInViewport.cols, numToleratedItems[1], true)
    } : calculateLast(this.first, numItemsInViewport, numToleratedItems);
    this.last = last;
    this.numItemsInViewport = numItemsInViewport;
    this.d_numToleratedItems = numToleratedItems;
    if (this.showLoader) {
      this.loaderArr = this.both ? Array.from({
        length: numItemsInViewport.rows
      }).map(() => Array.from({
        length: numItemsInViewport.cols
      })) : Array.from({
        length: numItemsInViewport
      });
    }
    if (this._lazy) {
      this.handleEvents('onLazyLoad', {
        first,
        last
      });
    }
  }
  calculateAutoSize() {
    if (this._autoSize && !this.d_loading) {
      Promise.resolve().then(() => {
        if (this.contentEl) {
          this.contentEl.style.minHeight = this.contentEl.style.minWidth = 'auto';
          const {
            offsetWidth,
            offsetHeight
          } = this.contentEl;
          (this.both || this.horizontal) && (this.elementViewChild.nativeElement.style.width = (offsetWidth < this.defaultWidth ? offsetWidth : this.defaultWidth) + 'px');
          (this.both || this.vertical) && (this.elementViewChild.nativeElement.style.height = (offsetHeight < this.defaultHeight ? offsetHeight : this.defaultHeight) + 'px');
          this.contentEl.style.minHeight = this.contentEl.style.minWidth = '';
        }
      });
    }
  }
  getLast(last = 0, isCols = false) {
    return this._items ? Math.min(isCols ? (this._columns || this._items[0]).length : this._items.length, last) : 0;
  }
  getContentPosition() {
    if (this.contentEl) {
      const style = getComputedStyle(this.contentEl);
      const left = parseFloat(style.paddingLeft) + Math.max(parseFloat(style.left) || 0, 0);
      const right = parseFloat(style.paddingRight) + Math.max(parseFloat(style.right) || 0, 0);
      const top = parseFloat(style.paddingTop) + Math.max(parseFloat(style.top) || 0, 0);
      const bottom = parseFloat(style.paddingBottom) + Math.max(parseFloat(style.bottom) || 0, 0);
      return {
        left,
        right,
        top,
        bottom,
        x: left + right,
        y: top + bottom
      };
    }
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      x: 0,
      y: 0
    };
  }
  setSize() {
    if (this.elementViewChild?.nativeElement) {
      const parentElement = this.elementViewChild.nativeElement.parentElement.parentElement;
      const width = this._scrollWidth || `${this.elementViewChild.nativeElement.offsetWidth || parentElement.offsetWidth}px`;
      const height = this._scrollHeight || `${this.elementViewChild.nativeElement.offsetHeight || parentElement.offsetHeight}px`;
      const setProp = (_name, _value) => this.elementViewChild.nativeElement.style[_name] = _value;
      if (this.both || this.horizontal) {
        setProp('height', height);
        setProp('width', width);
      } else {
        setProp('height', height);
      }
    }
  }
  setSpacerSize() {
    if (this._items) {
      const contentPos = this.getContentPosition();
      const setProp = (_name, _value, _size, _cpos = 0) => this.spacerStyle = {
        ...this.spacerStyle,
        ...{
          [`${_name}`]: (_value || []).length * _size + _cpos + 'px'
        }
      };
      if (this.both) {
        setProp('height', this._items, this._itemSize[0], contentPos.y);
        setProp('width', this._columns || this._items[1], this._itemSize[1], contentPos.x);
      } else {
        this.horizontal ? setProp('width', this._columns || this._items, this._itemSize, contentPos.x) : setProp('height', this._items, this._itemSize, contentPos.y);
      }
    }
  }
  setContentPosition(pos) {
    if (this.contentEl) {
      const first = pos ? pos.first : this.first;
      const calculateTranslateVal = (_first, _size) => _first * _size;
      const setTransform = (_x = 0, _y = 0) => this.contentStyle = {
        ...this.contentStyle,
        ...{
          transform: `translate3d(${_x}px, ${_y}px, 0)`
        }
      };
      if (this.both) {
        setTransform(calculateTranslateVal(first.cols, this._itemSize[1]), calculateTranslateVal(first.rows, this._itemSize[0]));
      } else {
        const translateVal = calculateTranslateVal(first, this._itemSize);
        this.horizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
      }
    }
  }
  onScrollPositionChange(event) {
    const target = event.target;
    const contentPos = this.getContentPosition();
    const calculateScrollPos = (_pos, _cpos) => _pos ? _pos > _cpos ? _pos - _cpos : _pos : 0;
    const calculateCurrentIndex = (_pos, _size) => Math.floor(_pos / (_size || _pos));
    const calculateTriggerIndex = (_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
      return _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
    };
    const calculateFirst = (_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
      if (_currentIndex <= _numT) return 0;else return Math.max(0, _isScrollDownOrRight ? _currentIndex < _triggerIndex ? _first : _currentIndex - _numT : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
    };
    const calculateLast = (_currentIndex, _first, _last, _num, _numT, _isCols = false) => {
      let lastValue = _first + _num + 2 * _numT;
      if (_currentIndex >= _numT) {
        lastValue += _numT + 1;
      }
      return this.getLast(lastValue, _isCols);
    };
    const scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
    const scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);
    let newFirst = this.both ? {
      rows: 0,
      cols: 0
    } : 0;
    let newLast = this.last;
    let isRangeChanged = false;
    let newScrollPos = this.lastScrollPos;
    if (this.both) {
      const isScrollDown = this.lastScrollPos.top <= scrollTop;
      const isScrollRight = this.lastScrollPos.left <= scrollLeft;
      const currentIndex = {
        rows: calculateCurrentIndex(scrollTop, this._itemSize[0]),
        cols: calculateCurrentIndex(scrollLeft, this._itemSize[1])
      };
      const triggerIndex = {
        rows: calculateTriggerIndex(currentIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
        cols: calculateTriggerIndex(currentIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
      };
      newFirst = {
        rows: calculateFirst(currentIndex.rows, triggerIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
        cols: calculateFirst(currentIndex.cols, triggerIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
      };
      newLast = {
        rows: calculateLast(currentIndex.rows, newFirst.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]),
        cols: calculateLast(currentIndex.cols, newFirst.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], true)
      };
      isRangeChanged = newFirst.rows !== this.first.rows || newLast.rows !== this.last.rows || newFirst.cols !== this.first.cols || newLast.cols !== this.last.cols;
      newScrollPos = {
        top: scrollTop,
        left: scrollLeft
      };
    } else {
      const scrollPos = this.horizontal ? scrollLeft : scrollTop;
      const isScrollDownOrRight = this.lastScrollPos <= scrollPos;
      const currentIndex = calculateCurrentIndex(scrollPos, this._itemSize);
      const triggerIndex = calculateTriggerIndex(currentIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
      newFirst = calculateFirst(currentIndex, triggerIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
      newLast = calculateLast(currentIndex, newFirst, this.last, this.numItemsInViewport, this.d_numToleratedItems);
      isRangeChanged = newFirst !== this.first || newLast !== this.last;
      newScrollPos = scrollPos;
    }
    return {
      first: newFirst,
      last: newLast,
      isRangeChanged,
      scrollPos: newScrollPos
    };
  }
  onScrollChange(event) {
    const {
      first,
      last,
      isRangeChanged,
      scrollPos
    } = this.onScrollPositionChange(event);
    if (isRangeChanged) {
      const newState = {
        first,
        last
      };
      this.setContentPosition(newState);
      this.first = first;
      this.last = last;
      this.lastScrollPos = scrollPos;
      this.handleEvents('onScrollIndexChange', newState);
      if (this._lazy) {
        this.handleEvents('onLazyLoad', newState);
      }
    }
  }
  onContainerScroll(event) {
    this.handleEvents('onScroll', {
      originalEvent: event
    });
    if (this._delay) {
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }
      if (!this.d_loading && this.showLoader) {
        const {
          isRangeChanged: changed
        } = this.onScrollPositionChange(event);
        if (changed) {
          this.d_loading = true;
          this.cd.detectChanges();
        }
      }
      this.scrollTimeout = setTimeout(() => {
        this.onScrollChange(event);
        if (this.d_loading && this.showLoader && (!this._lazy || this._loading === undefined)) {
          this.d_loading = false;
          this.cd.detectChanges();
        }
      }, this._delay);
    } else {
      this.onScrollChange(event);
    }
  }
  onWindowResize() {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout(() => {
      if (this.elementViewChild) {
        const [width, height] = [primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getWidth(this.elementViewChild.nativeElement), primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getHeight(this.elementViewChild.nativeElement)];
        const [isDiffWidth, isDiffHeight] = [width !== this.defaultWidth, height !== this.defaultHeight];
        const reinit = this.both ? isDiffWidth || isDiffHeight : this.horizontal ? isDiffWidth : this.vertical ? isDiffHeight : false;
        reinit && this.zone.run(() => {
          this.d_numToleratedItems = this._numToleratedItems;
          this.defaultWidth = width;
          this.defaultHeight = height;
          this.init();
        });
      }
    }, this._resizeDelay);
  }
  handleEvents(name, params) {
    return this.options && this.options[name] ? this.options[name](params) : this[name].emit(params);
  }
  getContentOptions() {
    return {
      contentStyleClass: `p-scroller-content ${this.d_loading ? 'p-scroller-loading' : ''}`,
      items: this.loadedItems,
      getItemOptions: index => this.getOptions(index),
      loading: this.d_loading,
      getLoaderOptions: (index, options) => this.getLoaderOptions(index, options),
      itemSize: this._itemSize,
      rows: this.loadedRows,
      columns: this.loadedColumns,
      spacerStyle: this.spacerStyle,
      contentStyle: this.contentStyle,
      vertical: this.vertical,
      horizontal: this.horizontal,
      both: this.both
    };
  }
  getOptions(renderedIndex) {
    const count = (this._items || []).length;
    const index = this.both ? this.first.rows + renderedIndex : this.first + renderedIndex;
    return {
      index,
      count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0
    };
  }
  getLoaderOptions(index, extOptions) {
    const count = this.loaderArr.length;
    return {
      index,
      count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0,
      ...extOptions
    };
  }
}
Scroller.ɵfac = function Scroller_Factory(t) {
  return new (t || Scroller)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
Scroller.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Scroller,
  selectors: [["p-scroller"]],
  contentQueries: function Scroller_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function Scroller_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.elementViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-scroller-viewport", "p-element"],
  inputs: {
    id: "id",
    style: "style",
    styleClass: "styleClass",
    tabindex: "tabindex",
    items: "items",
    itemSize: "itemSize",
    scrollHeight: "scrollHeight",
    scrollWidth: "scrollWidth",
    orientation: "orientation",
    delay: "delay",
    resizeDelay: "resizeDelay",
    lazy: "lazy",
    disabled: "disabled",
    loaderDisabled: "loaderDisabled",
    columns: "columns",
    showSpacer: "showSpacer",
    showLoader: "showLoader",
    numToleratedItems: "numToleratedItems",
    loading: "loading",
    autoSize: "autoSize",
    trackBy: "trackBy",
    options: "options"
  },
  outputs: {
    onLazyLoad: "onLazyLoad",
    onScroll: "onScroll",
    onScrollIndexChange: "onScrollIndexChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c10,
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["disabledContainer", ""], [3, "ngStyle", "ngClass", "scroll"], ["element", ""], ["buildInContent", ""], ["class", "p-scroller-spacer", 3, "ngStyle", 4, "ngIf"], ["class", "p-scroller-loader", 3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-scroller-content", 3, "ngClass", "ngStyle"], ["content", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "p-scroller-spacer", 3, "ngStyle"], [1, "p-scroller-loader", 3, "ngClass"], ["buildInLoader", ""], [4, "ngFor", "ngForOf"], ["buildInLoaderIcon", ""], [1, "p-scroller-loading-icon", "pi", "pi-spinner", "pi-spin"], [4, "ngIf"]],
  template: function Scroller_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Scroller_ng_container_0_Template, 8, 13, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_template_1_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._disabled)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle],
  styles: ["p-scroller{flex:1;outline:0 none}.p-scroller{position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;outline:0 none}.p-scroller-content{position:absolute;top:0;left:0;min-height:100%;min-width:100%;will-change:transform}.p-scroller-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0;pointer-events:none}.p-scroller-loader{position:sticky;top:0;left:0;width:100%;height:100%}.p-scroller-loader.p-component-overlay{display:flex;align-items:center;justify-content:center}.p-scroller-loading-icon{font-size:2rem}\n"],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Scroller, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-scroller',
      template: `
        <ng-container *ngIf="!_disabled; else disabledContainer">
            <div #element [attr.id]="_id" [attr.tabindex]="tabindex" [ngStyle]="_style" [class]="_styleClass"
                [ngClass]="{'p-scroller': true, 'p-both-scroll': both, 'p-horizontal-scroll': horizontal}"
                (scroll)="onContainerScroll($event)">
                <ng-container *ngIf="contentTemplate; else buildInContent">
                    <ng-container *ngTemplateOutlet="contentTemplate; context: {$implicit: loadedItems, options: getContentOptions()}"></ng-container>
                </ng-container>
                <ng-template #buildInContent>
                    <div #content class="p-scroller-content" [ngClass]="{'p-scroller-loading': d_loading}" [ngStyle]="contentStyle">
                        <ng-container *ngFor="let item of loadedItems; let index = index; trackBy: _trackBy || index">
                            <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: item, options: getOptions(index)}"></ng-container>
                        </ng-container>
                    </div>
                </ng-template>
                <div *ngIf="_showSpacer" class="p-scroller-spacer" [ngStyle]="spacerStyle"></div>
                <div *ngIf="!loaderDisabled && _showLoader && d_loading" class="p-scroller-loader" [ngClass]="{'p-component-overlay': !loaderTemplate}">
                    <ng-container *ngIf="loaderTemplate; else buildInLoader">
                        <ng-container *ngFor="let item of loaderArr; let index = index">
                            <ng-container *ngTemplateOutlet="loaderTemplate; context: {options: getLoaderOptions(index, both && { numCols: _numItemsInViewport.cols })}"></ng-container>
                        </ng-container>
                    </ng-container>
                    <ng-template #buildInLoader>
                        <ng-container *ngIf="loaderIconTemplate; else buildInLoaderIcon">
                            <ng-container *ngTemplateOutlet="loaderIconTemplate; context: {options: { styleClass: 'p-scroller-loading-icon' }}"></ng-container>
                        </ng-container>
                        <ng-template #buildInLoaderIcon>
                            <i class="p-scroller-loading-icon pi pi-spinner pi-spin"></i>
                        </ng-template>
                    </ng-template>
                </div>
            </div>
        </ng-container>
        <ng-template #disabledContainer>
            <ng-content></ng-content>
            <ng-container *ngIf="contentTemplate">
                <ng-container *ngTemplateOutlet="contentTemplate; context: {$implicit: items, options: {rows: _items, columns: loadedColumns}}"></ng-container>
            </ng-container>
        </ng-template>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        'class': 'p-scroller-viewport p-element'
      },
      styles: ["p-scroller{flex:1;outline:0 none}.p-scroller{position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;outline:0 none}.p-scroller-content{position:absolute;top:0;left:0;min-height:100%;min-width:100%;will-change:transform}.p-scroller-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0;pointer-events:none}.p-scroller-loader{position:sticky;top:0;left:0;width:100%;height:100%}.p-scroller-loader.p-component-overlay{display:flex;align-items:center;justify-content:center}.p-scroller-loading-icon{font-size:2rem}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    delay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resizeDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    lazy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loaderDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showSpacer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showLoader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    numToleratedItems: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    trackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    elementViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['element']
    }],
    contentViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['content']
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate]
    }],
    onLazyLoad: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onScrollIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class ScrollerModule {}
ScrollerModule.ɵfac = function ScrollerModule_Factory(t) {
  return new (t || ScrollerModule)();
};
ScrollerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ScrollerModule
});
ScrollerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      exports: [Scroller],
      declarations: [Scroller]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 24329:
/*!***********************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-tooltip.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tooltip": () => (/* binding */ Tooltip),
/* harmony export */   "TooltipModule": () => (/* binding */ TooltipModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/dom */ 71420);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 68549);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 14356);






class Tooltip {
  constructor(el, zone, config) {
    this.el = el;
    this.zone = zone;
    this.config = config;
    this.escape = true;
    this.fitContent = true;
    this._tooltipOptions = {
      tooltipPosition: 'right',
      tooltipEvent: 'hover',
      appendTo: 'body',
      tooltipZIndex: 'auto',
      escape: true,
      positionTop: 0,
      positionLeft: 0
    };
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(val) {
    this._disabled = val;
    this.deactivate();
  }
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      if (this.getOption('tooltipEvent') === 'hover') {
        this.mouseEnterListener = this.onMouseEnter.bind(this);
        this.mouseLeaveListener = this.onMouseLeave.bind(this);
        this.clickListener = this.onClick.bind(this);
        this.el.nativeElement.addEventListener('mouseenter', this.mouseEnterListener);
        this.el.nativeElement.addEventListener('mouseleave', this.mouseLeaveListener);
        this.el.nativeElement.addEventListener('click', this.clickListener);
      } else if (this.getOption('tooltipEvent') === 'focus') {
        this.focusListener = this.onFocus.bind(this);
        this.blurListener = this.onBlur.bind(this);
        let target = this.getTarget(this.el.nativeElement);
        target.addEventListener('focus', this.focusListener);
        target.addEventListener('blur', this.blurListener);
      }
    });
  }
  ngOnChanges(simpleChange) {
    if (simpleChange.tooltipPosition) {
      this.setOption({
        tooltipPosition: simpleChange.tooltipPosition.currentValue
      });
    }
    if (simpleChange.tooltipEvent) {
      this.setOption({
        tooltipEvent: simpleChange.tooltipEvent.currentValue
      });
    }
    if (simpleChange.appendTo) {
      this.setOption({
        appendTo: simpleChange.appendTo.currentValue
      });
    }
    if (simpleChange.positionStyle) {
      this.setOption({
        positionStyle: simpleChange.positionStyle.currentValue
      });
    }
    if (simpleChange.tooltipStyleClass) {
      this.setOption({
        tooltipStyleClass: simpleChange.tooltipStyleClass.currentValue
      });
    }
    if (simpleChange.tooltipZIndex) {
      this.setOption({
        tooltipZIndex: simpleChange.tooltipZIndex.currentValue
      });
    }
    if (simpleChange.escape) {
      this.setOption({
        escape: simpleChange.escape.currentValue
      });
    }
    if (simpleChange.showDelay) {
      this.setOption({
        showDelay: simpleChange.showDelay.currentValue
      });
    }
    if (simpleChange.hideDelay) {
      this.setOption({
        hideDelay: simpleChange.hideDelay.currentValue
      });
    }
    if (simpleChange.life) {
      this.setOption({
        life: simpleChange.life.currentValue
      });
    }
    if (simpleChange.positionTop) {
      this.setOption({
        positionTop: simpleChange.positionTop.currentValue
      });
    }
    if (simpleChange.positionLeft) {
      this.setOption({
        positionLeft: simpleChange.positionLeft.currentValue
      });
    }
    if (simpleChange.disabled) {
      this.setOption({
        disabled: simpleChange.disabled.currentValue
      });
    }
    if (simpleChange.text) {
      this.setOption({
        tooltipLabel: simpleChange.text.currentValue
      });
      if (this.active) {
        if (simpleChange.text.currentValue) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
    if (simpleChange.tooltipOptions) {
      this._tooltipOptions = {
        ...this._tooltipOptions,
        ...simpleChange.tooltipOptions.currentValue
      };
      this.deactivate();
      if (this.active) {
        if (this.getOption('tooltipLabel')) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
  }
  onMouseEnter(e) {
    if (!this.container && !this.showTimeout) {
      this.activate();
    }
  }
  onMouseLeave(e) {
    this.deactivate();
  }
  onFocus(e) {
    this.activate();
  }
  onBlur(e) {
    this.deactivate();
  }
  onClick(e) {
    this.deactivate();
  }
  activate() {
    this.active = true;
    this.clearHideTimeout();
    if (this.getOption('showDelay')) this.showTimeout = setTimeout(() => {
      this.show();
    }, this.getOption('showDelay'));else this.show();
    if (this.getOption('life')) {
      let duration = this.getOption('showDelay') ? this.getOption('life') + this.getOption('showDelay') : this.getOption('life');
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, duration);
    }
  }
  deactivate() {
    this.active = false;
    this.clearShowTimeout();
    if (this.getOption('hideDelay')) {
      this.clearHideTimeout(); //life timeout
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, this.getOption('hideDelay'));
    } else {
      this.hide();
    }
  }
  create() {
    if (this.container) {
      this.clearHideTimeout();
      this.remove();
    }
    this.container = document.createElement('div');
    let tooltipArrow = document.createElement('div');
    tooltipArrow.className = 'p-tooltip-arrow';
    this.container.appendChild(tooltipArrow);
    this.tooltipText = document.createElement('div');
    this.tooltipText.className = 'p-tooltip-text';
    this.updateText();
    if (this.getOption('positionStyle')) {
      this.container.style.position = this.getOption('positionStyle');
    }
    this.container.appendChild(this.tooltipText);
    if (this.getOption('appendTo') === 'body') document.body.appendChild(this.container);else if (this.getOption('appendTo') === 'target') primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.appendChild(this.container, this.el.nativeElement);else primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.appendChild(this.container, this.getOption('appendTo'));
    this.container.style.display = 'inline-block';
    if (this.fitContent) {
      this.container.style.width = 'fit-content';
    }
  }
  show() {
    if (!this.getOption('tooltipLabel') || this.getOption('disabled')) {
      return;
    }
    this.create();
    this.align();
    primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.fadeIn(this.container, 250);
    if (this.getOption('tooltipZIndex') === 'auto') primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ZIndexUtils.set('tooltip', this.container, this.config.zIndex.tooltip);else this.container.style.zIndex = this.getOption('tooltipZIndex');
    this.bindDocumentResizeListener();
    this.bindScrollListener();
  }
  hide() {
    if (this.getOption('tooltipZIndex') === 'auto') {
      primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ZIndexUtils.clear(this.container);
    }
    this.remove();
  }
  updateText() {
    if (this.getOption('escape')) {
      this.tooltipText.innerHTML = '';
      this.tooltipText.appendChild(document.createTextNode(this.getOption('tooltipLabel')));
    } else {
      this.tooltipText.innerHTML = this.getOption('tooltipLabel');
    }
  }
  align() {
    let position = this.getOption('tooltipPosition');
    switch (position) {
      case 'top':
        this.alignTop();
        if (this.isOutOfBounds()) {
          this.alignBottom();
          if (this.isOutOfBounds()) {
            this.alignRight();
            if (this.isOutOfBounds()) {
              this.alignLeft();
            }
          }
        }
        break;
      case 'bottom':
        this.alignBottom();
        if (this.isOutOfBounds()) {
          this.alignTop();
          if (this.isOutOfBounds()) {
            this.alignRight();
            if (this.isOutOfBounds()) {
              this.alignLeft();
            }
          }
        }
        break;
      case 'left':
        this.alignLeft();
        if (this.isOutOfBounds()) {
          this.alignRight();
          if (this.isOutOfBounds()) {
            this.alignTop();
            if (this.isOutOfBounds()) {
              this.alignBottom();
            }
          }
        }
        break;
      case 'right':
        this.alignRight();
        if (this.isOutOfBounds()) {
          this.alignLeft();
          if (this.isOutOfBounds()) {
            this.alignTop();
            if (this.isOutOfBounds()) {
              this.alignBottom();
            }
          }
        }
        break;
    }
  }
  getHostOffset() {
    if (this.getOption('appendTo') === 'body' || this.getOption('appendTo') === 'target') {
      let offset = this.el.nativeElement.getBoundingClientRect();
      let targetLeft = offset.left + primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getWindowScrollLeft();
      let targetTop = offset.top + primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getWindowScrollTop();
      return {
        left: targetLeft,
        top: targetTop
      };
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  alignRight() {
    this.preAlign('right');
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterWidth(this.el.nativeElement);
    let top = hostOffset.top + (primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterHeight(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterHeight(this.container)) / 2;
    this.container.style.left = left + this.getOption('positionLeft') + 'px';
    this.container.style.top = top + this.getOption('positionTop') + 'px';
  }
  alignLeft() {
    this.preAlign('left');
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left - primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterWidth(this.container);
    let top = hostOffset.top + (primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterHeight(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterHeight(this.container)) / 2;
    this.container.style.left = left + this.getOption('positionLeft') + 'px';
    this.container.style.top = top + this.getOption('positionTop') + 'px';
  }
  alignTop() {
    this.preAlign('top');
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + (primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterWidth(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterWidth(this.container)) / 2;
    let top = hostOffset.top - primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterHeight(this.container);
    this.container.style.left = left + this.getOption('positionLeft') + 'px';
    this.container.style.top = top + this.getOption('positionTop') + 'px';
  }
  alignBottom() {
    this.preAlign('bottom');
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + (primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterWidth(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterWidth(this.container)) / 2;
    let top = hostOffset.top + primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterHeight(this.el.nativeElement);
    this.container.style.left = left + this.getOption('positionLeft') + 'px';
    this.container.style.top = top + this.getOption('positionTop') + 'px';
  }
  setOption(option) {
    this._tooltipOptions = {
      ...this._tooltipOptions,
      ...option
    };
  }
  getOption(option) {
    return this._tooltipOptions[option];
  }
  getTarget(el) {
    return primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.hasClass(el, 'p-inputwrapper') ? primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.findSingle(el, 'input') : el;
  }
  preAlign(position) {
    this.container.style.left = -999 + 'px';
    this.container.style.top = -999 + 'px';
    let defaultClassName = 'p-tooltip p-component p-tooltip-' + position;
    this.container.className = this.getOption('tooltipStyleClass') ? defaultClassName + ' ' + this.getOption('tooltipStyleClass') : defaultClassName;
  }
  isOutOfBounds() {
    let offset = this.container.getBoundingClientRect();
    let targetTop = offset.top;
    let targetLeft = offset.left;
    let width = primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterWidth(this.container);
    let height = primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterHeight(this.container);
    let viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getViewport();
    return targetLeft + width > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height;
  }
  onWindowResize(e) {
    this.hide();
  }
  bindDocumentResizeListener() {
    this.zone.runOutsideAngular(() => {
      this.resizeListener = this.onWindowResize.bind(this);
      window.addEventListener('resize', this.resizeListener);
    });
  }
  unbindDocumentResizeListener() {
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
      this.resizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new primeng_dom__WEBPACK_IMPORTED_MODULE_0__.ConnectedOverlayScrollHandler(this.el.nativeElement, () => {
        if (this.container) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  unbindEvents() {
    if (this.getOption('tooltipEvent') === 'hover') {
      this.el.nativeElement.removeEventListener('mouseenter', this.mouseEnterListener);
      this.el.nativeElement.removeEventListener('mouseleave', this.mouseLeaveListener);
      this.el.nativeElement.removeEventListener('click', this.clickListener);
    } else if (this.getOption('tooltipEvent') === 'focus') {
      let target = this.getTarget(this.el.nativeElement);
      target.removeEventListener('focus', this.focusListener);
      target.removeEventListener('blur', this.blurListener);
    }
    this.unbindDocumentResizeListener();
  }
  remove() {
    if (this.container && this.container.parentElement) {
      if (this.getOption('appendTo') === 'body') document.body.removeChild(this.container);else if (this.getOption('appendTo') === 'target') this.el.nativeElement.removeChild(this.container);else primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.removeChild(this.container, this.getOption('appendTo'));
    }
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.clearTimeouts();
    this.container = null;
    this.scrollHandler = null;
  }
  clearShowTimeout() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
  }
  clearHideTimeout() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
  clearTimeouts() {
    this.clearShowTimeout();
    this.clearHideTimeout();
  }
  ngOnDestroy() {
    this.unbindEvents();
    if (this.container) {
      primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ZIndexUtils.clear(this.container);
    }
    this.remove();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
  }
}
Tooltip.ɵfac = function Tooltip_Factory(t) {
  return new (t || Tooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeNGConfig));
};
Tooltip.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: Tooltip,
  selectors: [["", "pTooltip", ""]],
  hostAttrs: [1, "p-element"],
  inputs: {
    tooltipPosition: "tooltipPosition",
    tooltipEvent: "tooltipEvent",
    appendTo: "appendTo",
    positionStyle: "positionStyle",
    tooltipStyleClass: "tooltipStyleClass",
    tooltipZIndex: "tooltipZIndex",
    escape: "escape",
    showDelay: "showDelay",
    hideDelay: "hideDelay",
    life: "life",
    positionTop: "positionTop",
    positionLeft: "positionLeft",
    fitContent: "fitContent",
    text: ["pTooltip", "text"],
    disabled: ["tooltipDisabled", "disabled"],
    tooltipOptions: "tooltipOptions"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Tooltip, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[pTooltip]',
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeNGConfig
    }];
  }, {
    tooltipPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tooltipEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    positionStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tooltipStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tooltipZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    escape: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    showDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    hideDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    life: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    positionTop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    positionLeft: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    fitContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['pTooltip']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ["tooltipDisabled"]
    }],
    tooltipOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();
class TooltipModule {}
TooltipModule.ɵfac = function TooltipModule_Factory(t) {
  return new (t || TooltipModule)();
};
TooltipModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: TooltipModule
});
TooltipModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TooltipModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
      exports: [Tooltip],
      declarations: [Tooltip]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 68549:
/*!*********************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-utils.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectUtils": () => (/* binding */ ObjectUtils),
/* harmony export */   "UniqueComponentId": () => (/* binding */ UniqueComponentId),
/* harmony export */   "ZIndexUtils": () => (/* binding */ zindexutils)
/* harmony export */ });
class ObjectUtils {
  static equals(obj1, obj2, field) {
    if (field) return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);else return this.equalsByValue(obj1, obj2);
  }
  static equalsByValue(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (obj1 && obj2 && typeof obj1 == 'object' && typeof obj2 == 'object') {
      var arrA = Array.isArray(obj1),
        arrB = Array.isArray(obj2),
        i,
        length,
        key;
      if (arrA && arrB) {
        length = obj1.length;
        if (length != obj2.length) return false;
        for (i = length; i-- !== 0;) if (!this.equalsByValue(obj1[i], obj2[i])) return false;
        return true;
      }
      if (arrA != arrB) return false;
      var dateA = obj1 instanceof Date,
        dateB = obj2 instanceof Date;
      if (dateA != dateB) return false;
      if (dateA && dateB) return obj1.getTime() == obj2.getTime();
      var regexpA = obj1 instanceof RegExp,
        regexpB = obj2 instanceof RegExp;
      if (regexpA != regexpB) return false;
      if (regexpA && regexpB) return obj1.toString() == obj2.toString();
      var keys = Object.keys(obj1);
      length = keys.length;
      if (length !== Object.keys(obj2).length) return false;
      for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(obj2, keys[i])) return false;
      for (i = length; i-- !== 0;) {
        key = keys[i];
        if (!this.equalsByValue(obj1[key], obj2[key])) return false;
      }
      return true;
    }
    return obj1 !== obj1 && obj2 !== obj2;
  }
  static resolveFieldData(data, field) {
    if (data && field) {
      if (this.isFunction(field)) {
        return field(data);
      } else if (field.indexOf('.') == -1) {
        return data[field];
      } else {
        let fields = field.split('.');
        let value = data;
        for (let i = 0, len = fields.length; i < len; ++i) {
          if (value == null) {
            return null;
          }
          value = value[fields[i]];
        }
        return value;
      }
    } else {
      return null;
    }
  }
  static isFunction(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  }
  static reorderArray(value, from, to) {
    let target;
    if (value && from !== to) {
      if (to >= value.length) {
        to %= value.length;
        from %= value.length;
      }
      value.splice(to, 0, value.splice(from, 1)[0]);
    }
  }
  static insertIntoOrderedArray(item, index, arr, sourceArr) {
    if (arr.length > 0) {
      let injected = false;
      for (let i = 0; i < arr.length; i++) {
        let currentItemIndex = this.findIndexInList(arr[i], sourceArr);
        if (currentItemIndex > index) {
          arr.splice(i, 0, item);
          injected = true;
          break;
        }
      }
      if (!injected) {
        arr.push(item);
      }
    } else {
      arr.push(item);
    }
  }
  static findIndexInList(item, list) {
    let index = -1;
    if (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] == item) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  static contains(value, list) {
    if (value != null && list && list.length) {
      for (let val of list) {
        if (this.equals(value, val)) return true;
      }
    }
    return false;
  }
  static removeAccents(str) {
    if (str && str.search(/[\xC0-\xFF]/g) > -1) {
      str = str.replace(/[\xC0-\xC5]/g, "A").replace(/[\xC6]/g, "AE").replace(/[\xC7]/g, "C").replace(/[\xC8-\xCB]/g, "E").replace(/[\xCC-\xCF]/g, "I").replace(/[\xD0]/g, "D").replace(/[\xD1]/g, "N").replace(/[\xD2-\xD6\xD8]/g, "O").replace(/[\xD9-\xDC]/g, "U").replace(/[\xDD]/g, "Y").replace(/[\xDE]/g, "P").replace(/[\xE0-\xE5]/g, "a").replace(/[\xE6]/g, "ae").replace(/[\xE7]/g, "c").replace(/[\xE8-\xEB]/g, "e").replace(/[\xEC-\xEF]/g, "i").replace(/[\xF1]/g, "n").replace(/[\xF2-\xF6\xF8]/g, "o").replace(/[\xF9-\xFC]/g, "u").replace(/[\xFE]/g, "p").replace(/[\xFD\xFF]/g, "y");
    }
    return str;
  }
  static isEmpty(value) {
    return value === null || value === undefined || value === '' || Array.isArray(value) && value.length === 0 || !(value instanceof Date) && typeof value === 'object' && Object.keys(value).length === 0;
  }
  static isNotEmpty(value) {
    return !this.isEmpty(value);
  }
}
var lastId = 0;
function UniqueComponentId() {
  let prefix = 'pr_id_';
  lastId++;
  return `${prefix}${lastId}`;
}
function ZIndexUtils() {
  let zIndexes = [];
  const generateZIndex = (key, baseZIndex) => {
    let lastZIndex = zIndexes.length > 0 ? zIndexes[zIndexes.length - 1] : {
      key,
      value: baseZIndex
    };
    let newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 1;
    zIndexes.push({
      key,
      value: newZIndex
    });
    return newZIndex;
  };
  const revertZIndex = zIndex => {
    zIndexes = zIndexes.filter(obj => obj.value !== zIndex);
  };
  const getCurrentZIndex = () => {
    return zIndexes.length > 0 ? zIndexes[zIndexes.length - 1].value : 0;
  };
  const getZIndex = el => {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };
  return {
    get: getZIndex,
    set: (key, el, baseZIndex) => {
      if (el) {
        el.style.zIndex = String(generateZIndex(key, baseZIndex));
      }
    },
    clear: el => {
      if (el) {
        revertZIndex(getZIndex(el));
        el.style.zIndex = '';
      }
    },
    getCurrent: () => getCurrentZIndex()
  };
}
var zindexutils = ZIndexUtils();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_products_products_module_ts.js.map