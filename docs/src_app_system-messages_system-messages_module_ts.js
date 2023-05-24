"use strict";
(self["webpackChunkadmin_tool"] = self["webpackChunkadmin_tool"] || []).push([["src_app_system-messages_system-messages_module_ts"],{

/***/ 22351:
/*!********************************************************************!*\
  !*** ./src/app/system-messages/system-message-dialog.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemMessageDialogComponent": () => (/* binding */ SystemMessageDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _global_dialog_dialog_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/dialog/dialog-title.component */ 37511);





class SystemMessageDialogComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(dialogRef, data) {
        super();
        this.dialogRef = dialogRef;
        this.data = data;
        this.message = this.data.item;
    }
}
SystemMessageDialogComponent.ɵfac = function SystemMessageDialogComponent_Factory(t) { return new (t || SystemMessageDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA)); };
SystemMessageDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SystemMessageDialogComponent, selectors: [["app-system-message-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 2, consts: [[1, "mt-4", "mb-6"], [1, "flex", "flex-col", "rounded", "bg-dib-gray-100", "p-6"], [1, "mb-4", "border-b", "pb-4", "font-mono", "text-2xs", "text-gray-500"], [1, "whitespace-pre-wrap", 3, "innerText"]], template: function SystemMessageDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "dib-dialog-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "System message");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-dialog-content", 0)(3, "div", 1)(4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("ID: ", ctx.message.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.message.description);
    } }, dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _global_dialog_dialog_title_component__WEBPACK_IMPORTED_MODULE_1__.DialogTitleComponent], encapsulation: 2 });


/***/ }),

/***/ 26507:
/*!******************************************************************!*\
  !*** ./src/app/system-messages/system-message-form.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemMessageFormComponent": () => (/* binding */ SystemMessageFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base.component */ 83607);
/* harmony import */ var _models_system_message_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/system-message.model */ 95609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _global_dialog_dialog_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/dialog/dialog-title.component */ 37511);












class SystemMessageFormComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(formBuilder, dialogRef, data) {
        super();
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        // Convert input to SystemMessageModel, so we have access to additional methods
        this.message = new _models_system_message_model__WEBPACK_IMPORTED_MODULE_1__.SystemMessageAdapter().adapt(this.data.message);
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            description: [this.message.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    get isUpdate() {
        return !!this.message.id;
    }
    close() {
        this.message.description = this.form.get('description').value;
        return this.message;
    }
}
SystemMessageFormComponent.ɵfac = function SystemMessageFormComponent_Factory(t) { return new (t || SystemMessageFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA)); };
SystemMessageFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SystemMessageFormComponent, selectors: [["app-system-message-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 7, consts: [[1, "mt-4", "mb-6"], [1, "grid", "grid-cols-1", 3, "formGroup"], ["matInput", "", "formControlName", "description", "type", "text", "name", "description", "cols", "60", "rows", "10"], [1, "mb-1", "justify-end"], ["mat-button", "", 3, "mat-dialog-close"], ["mat-button", "", "color", "primary", 3, "ngClass", "mat-dialog-close", "disabled"]], template: function SystemMessageFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "dib-dialog-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-dialog-content", 0)(3, "form", 1)(4, "mat-form-field")(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-dialog-actions", 3)(9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.isUpdate ? "Edit" : "Add", " System Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.form.invalid ? "mat-flat-button" : "mat-stroked-button")("mat-dialog-close", ctx.close())("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.isUpdate ? "Save" : "Add", " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _global_dialog_dialog_title_component__WEBPACK_IMPORTED_MODULE_2__.DialogTitleComponent], encapsulation: 2 });


/***/ }),

/***/ 41551:
/*!**************************************************************!*\
  !*** ./src/app/system-messages/system-messages.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemMessagesComponent": () => (/* binding */ SystemMessagesComponent)
/* harmony export */ });
/* harmony import */ var _actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/system-messages.actions */ 26873);
/* harmony import */ var _models_system_message_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/system-message.model */ 95609);
/* harmony import */ var _reducers_system_messages_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/system-messages.reducer */ 58683);
/* harmony import */ var _actions_confirmation_dialog_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/confirmation-dialog.actions */ 65516);
/* harmony import */ var _base_listing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-listing.component */ 74760);
/* harmony import */ var _system_message_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./system-message-dialog.component */ 22351);
/* harmony import */ var _system_message_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./system-message-form.component */ 26507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/breadcrumbs/breadcrumbs.component */ 25758);
/* harmony import */ var _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global/breadcrumbs/breadcrumb/breadcrumb.component */ 62718);
/* harmony import */ var _global_wrapper_listing_wrapper_listing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../global/wrapper/listing/wrapper-listing.component */ 40542);
/* harmony import */ var _global_wrapper_listing_total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../global/wrapper/listing/total/wrapper-listing-total.component */ 57905);
/* harmony import */ var _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../global/wrapper/main/wrapper-main.component */ 4122);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/pipes/date.pipe */ 23341);
/* harmony import */ var _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/pipes/dashes-to-spaces.pipe */ 61467);




























function SystemMessagesComponent_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "dibDashesToSpaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const status_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", status_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, status_r23), " ");
  }
}
function SystemMessagesComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Message ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function SystemMessagesComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matTooltip", row_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", row_r24.id, " ");
  }
}
function SystemMessagesComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function SystemMessagesComponent_td_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](row_r25.description);
  }
}
function SystemMessagesComponent_th_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Time Received");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function SystemMessagesComponent_td_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 43)(1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 2, row_r26.activatedAt, "distanceToNow"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](4, 5, row_r26.activatedAt, "uiWithTime"), " ");
  }
}
function SystemMessagesComponent_th_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Duration Opened");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function SystemMessagesComponent_td_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", row_r27.durationOpened, " ");
  }
}
function SystemMessagesComponent_th_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function SystemMessagesComponent_td_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 46)(1, "span", 47)(2, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "dibDashesToSpaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("text-dib-green-600", row_r28.isOpen());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 3, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](6, 5, row_r28.status)), " ");
  }
}
function SystemMessagesComponent_th_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Closed By");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function SystemMessagesComponent_td_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](row_r29.closedBy);
  }
}
function SystemMessagesComponent_th_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Time Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function SystemMessagesComponent_td_48_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "dibDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](1, 2, row_r30.closedAt, "distanceToNow"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](3, 5, row_r30.closedAt, "uiWithTime"), " ");
  }
}
function SystemMessagesComponent_td_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, SystemMessagesComponent_td_48_span_1_Template, 4, 8, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r30.isClosed());
  }
}
function SystemMessagesComponent_th_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "mat-progress-bar", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function SystemMessagesComponent_th_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, SystemMessagesComponent_th_50_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("colSpan", ctx_r15.columns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, ctx_r15.systemMessages$).loading);
  }
}
function SystemMessagesComponent_th_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "th", 53);
  }
}
function SystemMessagesComponent_td_53_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SystemMessagesComponent_td_53_a_4_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r39);
      const row_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r37.closeSystemMessage(row_r34));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "hide_source");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function SystemMessagesComponent_td_53_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SystemMessagesComponent_td_53_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r42);
      const row_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r40.delete(row_r34));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function SystemMessagesComponent_td_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 54)(1, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SystemMessagesComponent_td_53_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r44);
      const row_r34 = restoredCtx.$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r43.showMessageDetails(row_r34));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, SystemMessagesComponent_td_53_a_4_Template, 3, 0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, SystemMessagesComponent_td_53_button_5_Template, 3, 0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r34.isOpen());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r34.isClosed());
  }
}
function SystemMessagesComponent_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tr", 61);
  }
}
function SystemMessagesComponent_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tr", 61);
  }
}
function SystemMessagesComponent_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tr", 62);
  }
}
function SystemMessagesComponent_tr_57_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Loading data. This can take a few seconds, please be patient. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
}
function SystemMessagesComponent_tr_57_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](0, " No records found. Please refine your search and try again. ");
  }
}
function SystemMessagesComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr", 63)(1, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, SystemMessagesComponent_tr_57_ng_container_2_Template, 2, 0, "ng-container", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, SystemMessagesComponent_tr_57_ng_template_4_Template, 1, 0, "ng-template", null, 66, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](5);
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("colSpan", ctx_r21.columns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 3, ctx_r21.systemMessages$).loading)("ngIfElse", _r47);
  }
}
function SystemMessagesComponent_mat_paginator_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-paginator", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("page", function SystemMessagesComponent_mat_paginator_59_Template_mat_paginator_page_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r49.onPageChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("length", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 3, ctx_r22.systemMessages$).pagination.totalElements)("pageIndex", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 5, ctx_r22.systemMessages$).pagination.number)("pageSize", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 7, ctx_r22.systemMessages$).pagination.size);
  }
}
const _c0 = function () {
  return ["loader"];
};
class SystemMessagesComponent extends _base_listing_component__WEBPACK_IMPORTED_MODULE_4__.BaseListingComponent {
  constructor(injector, dialog) {
    super(injector);
    this.injector = injector;
    this.dialog = dialog;
    this.systemMessages$ = this.store.select(_reducers_system_messages_reducer__WEBPACK_IMPORTED_MODULE_2__.selectSystemMessages);
    this.tableDataSource$ = this.store.select(_reducers_system_messages_reducer__WEBPACK_IMPORTED_MODULE_2__.selectSystemMessagesData);
    this.statuses = [_models_system_message_model__WEBPACK_IMPORTED_MODULE_1__.SystemMessageStatus.OPENED, _models_system_message_model__WEBPACK_IMPORTED_MODULE_1__.SystemMessageStatus.CLOSED];
  }
  ngOnInit() {
    this.sortActive = 'activatedAt';
    this.sortDirection = 'desc';
    this.columns = ['id', 'description', 'activatedAt', 'duration', 'status', 'closedBy', 'closedAt', 'actions'];
    this.loadAction = _actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_0__.SystemMessageActions.loadSystemMessages;
    this.reloadOnActions = [_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_0__.SystemMessageActions.saveSystemMessageSuccess, _actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_0__.SystemMessageActions.deleteSystemMessageSuccess];
    super.ngOnInit();
    // Display OPENED messages by default
    this.filter('status', _models_system_message_model__WEBPACK_IMPORTED_MODULE_1__.SystemMessageStatus.OPENED);
  }
  delete(item) {
    this.store.dispatch(_actions_confirmation_dialog_actions__WEBPACK_IMPORTED_MODULE_3__.ConfirmationDialogActions.show({
      data: {
        template: `
            <div>Are you sure you want to delete system message?</div>
            <div class='font-mono text-2xs p-3 mt-4 bg-dib-gray-100 flex flex-col rounded'>
              <span>Message ID:</span>
              <span class="text-gray-500">${item.id}</span>
            </div>
            <div class='mt-3'>This action can not be undone.</div>
          `,
        confirm: {
          label: 'Delete',
          color: 'warn'
        }
      },
      ok: () => {
        this.store.dispatch(_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_0__.SystemMessageActions.deleteSystemMessage({
          data: item
        }));
      }
    }));
  }
  closeSystemMessage(item) {
    this.store.dispatch(_actions_confirmation_dialog_actions__WEBPACK_IMPORTED_MODULE_3__.ConfirmationDialogActions.show({
      data: {
        template: `
            <div>Are you sure you want to close system message?</div>
            <div class='font-mono text-2xs p-3 mt-4 bg-dib-gray-100 flex flex-col rounded'>
              <span>Message ID:</span>
              <span class="text-gray-500">${item.id}</span>
            </div>
            <div class='mt-3'>This action can not be undone.</div>
          `,
        confirm: {
          label: 'Mark as closed',
          color: 'warn'
        }
      },
      ok: () => {
        this.store.dispatch(_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_0__.SystemMessageActions.saveSystemMessage({
          data: {
            ...item,
            status: _models_system_message_model__WEBPACK_IMPORTED_MODULE_1__.SystemMessageStatus.CLOSED
          }
        }));
      }
    }));
  }
  showMessageDetails(item) {
    this.dialog.open(_system_message_dialog_component__WEBPACK_IMPORTED_MODULE_5__.SystemMessageDialogComponent, {
      maxWidth: 800,
      minWidth: 500,
      data: {
        item
      }
    });
  }
  save(message) {
    const dialogRef = this.dialog.open(_system_message_form_component__WEBPACK_IMPORTED_MODULE_6__.SystemMessageFormComponent, {
      data: {
        message
      }
    });
    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed && confirmed !== false) {
        this.store.dispatch(_actions_system_messages_actions__WEBPACK_IMPORTED_MODULE_0__.SystemMessageActions.saveSystemMessage({
          data: confirmed
        }));
      }
    });
  }
}
SystemMessagesComponent.ɵfac = function SystemMessagesComponent_Factory(t) {
  return new (t || SystemMessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog));
};
SystemMessagesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: SystemMessagesComponent,
  selectors: [["app-system-messages"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]],
  decls: 61,
  vars: 16,
  consts: [["label", "Dashboard", "route", "/"], ["label", "System Messages", "route", "/system-messages"], ["slot", "hidden-columns-message"], [1, "hidden", "sm:block"], ["slot", "filters"], [3, "value", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "autocomplete", "off", 3, "value", "keyup"], ["slot", "total"], [3, "total"], ["slot", "actions"], ["mat-stroked-button", "", 3, "click"], ["slot", "table"], ["mat-table", "", "matSort", "", "matSortDisableClear", "", 1, "whitespace-nowrap", 3, "matSortActive", "matSortDirection", "dataSource", "matSortChange"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "max-w-2xs truncate text-ellipsis pr-6", "matTooltipPosition", "above", 3, "matTooltip", 4, "matCellDef"], ["matColumnDef", "description"], ["mat-cell", "", "class", "max-w-2xs truncate text-ellipsis pr-6", 4, "matCellDef"], ["matColumnDef", "activatedAt"], ["class", "sm:hidden", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "sm:hidden", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "duration"], ["class", "sm:hidden", "mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "status"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "closedBy"], ["matColumnDef", "closedAt"], ["matColumnDef", "loader"], ["mat-header-cell", "", 3, "colSpan", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "whitespace-normal", 4, "matNoDataRow"], ["slot", "pagination"], [3, "length", "pageIndex", "pageSize", "page", 4, "ngIf"], [3, "value"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", "matTooltipPosition", "above", 1, "max-w-2xs", "truncate", "text-ellipsis", "pr-6", 3, "matTooltip"], ["mat-cell", "", 1, "max-w-2xs", "truncate", "text-ellipsis", "pr-6"], ["mat-header-cell", "", "mat-sort-header", "", 1, "sm:hidden"], ["mat-cell", "", 1, "sm:hidden"], [3, "matTooltip"], ["mat-header-cell", "", 1, "sm:hidden"], ["mat-cell", ""], [1, "flex", "items-center", "text-xs"], [1, "material-icons", "mr-1", "text-xs", "text-gray-200"], [3, "matTooltip", 4, "ngIf"], ["mat-header-cell", "", 3, "colSpan"], [4, "ngIf"], ["mode", "indeterminate", 1, "absolute"], ["mat-header-cell", ""], ["mat-cell", "", 1, "text-right"], ["mat-icon-button", "", "color", "accent", "matTooltip", "View system message", "matTooltipPosition", "left", 1, "hover:text-dib-green-600", 3, "click"], [1, "material-icons"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Mark as closed", "matTooltipPosition", "left", "class", "hover:text-red-600", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Delete system message", "matTooltipPosition", "left", "class", "hover:text-red-600", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Mark as closed", "matTooltipPosition", "left", 1, "hover:text-red-600", 3, "click"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Delete system message", "matTooltipPosition", "left", 1, "hover:text-red-600", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "whitespace-normal"], [1, "border-b", "p-6", "text-center", 3, "colSpan"], [4, "ngIf", "ngIfElse"], ["noData", ""], [3, "length", "pageIndex", "pageSize", "page"]],
  template: function SystemMessagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "dib-wrapper-main")(1, "dib-breadcrumbs");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "dib-breadcrumb", 0)(3, "dib-breadcrumb", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "dib-wrapper-listing");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](5, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "* Some columns are hidden due to small screen size");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](8, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "mat-form-field")(10, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "Filter by status");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "mat-select", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selectionChange", function SystemMessagesComponent_Template_mat_select_selectionChange_12_listener($event) {
        return ctx.debouncedFilter("status", $event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "Show All");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, SystemMessagesComponent_mat_option_15_Template, 3, 4, "mat-option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "mat-form-field")(17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function SystemMessagesComponent_Template_input_keyup_19_listener($event) {
        return ctx.debouncedFilter("filter", $event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](20, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "dib-wrapper-listing-total", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](22, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](23, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SystemMessagesComponent_Template_button_click_24_listener() {
        return ctx.save(null);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25, "New System Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](26, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "table", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("matSortChange", function SystemMessagesComponent_Template_table_matSortChange_27_listener($event) {
        return ctx.onSortChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](28, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](29, SystemMessagesComponent_th_29_Template, 2, 0, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](30, SystemMessagesComponent_td_30_Template, 2, 2, "td", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](31, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](32, SystemMessagesComponent_th_32_Template, 2, 0, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](33, SystemMessagesComponent_td_33_Template, 2, 1, "td", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](34, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](35, SystemMessagesComponent_th_35_Template, 2, 0, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](36, SystemMessagesComponent_td_36_Template, 5, 8, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](37, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](38, SystemMessagesComponent_th_38_Template, 2, 0, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](39, SystemMessagesComponent_td_39_Template, 2, 1, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](40, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](41, SystemMessagesComponent_th_41_Template, 2, 0, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](42, SystemMessagesComponent_td_42_Template, 7, 7, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](43, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](44, SystemMessagesComponent_th_44_Template, 2, 0, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](45, SystemMessagesComponent_td_45_Template, 2, 1, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](46, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](47, SystemMessagesComponent_th_47_Template, 2, 0, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](48, SystemMessagesComponent_td_48_Template, 2, 1, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](49, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](50, SystemMessagesComponent_th_50_Template, 3, 4, "th", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](51, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](52, SystemMessagesComponent_th_52_Template, 1, 0, "th", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](53, SystemMessagesComponent_td_53_Template, 6, 2, "td", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](54, SystemMessagesComponent_tr_54_Template, 1, 0, "tr", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](55, SystemMessagesComponent_tr_55_Template, 1, 0, "tr", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](56, SystemMessagesComponent_tr_56_Template, 1, 0, "tr", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](57, SystemMessagesComponent_tr_57_Template, 6, 5, "tr", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](58, 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](59, SystemMessagesComponent_mat_paginator_59_Template, 4, 9, "mat-paginator", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](60, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx.filters.status || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.statuses);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx.filters.filter || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("total", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](22, 11, ctx.systemMessages$).pagination == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](22, 11, ctx.systemMessages$).pagination.totalElements);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matSortActive", ctx.sortActive)("matSortDirection", ctx.sortDirection)("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](15, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](60, 13, ctx.systemMessages$).pagination);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatNoDataRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortHeader, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginator, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__.MatProgressBar, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatAnchor, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInput, _global_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbsComponent, _global_breadcrumbs_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__.BreadcrumbComponent, _global_wrapper_listing_wrapper_listing_component__WEBPACK_IMPORTED_MODULE_9__.WrapperListingComponent, _global_wrapper_listing_total_wrapper_listing_total_component__WEBPACK_IMPORTED_MODULE_10__.WrapperListingTotalComponent, _global_wrapper_main_wrapper_main_component__WEBPACK_IMPORTED_MODULE_11__.WrapperMainComponent, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.TitleCasePipe, _utils_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_12__.DibDatePipe, _utils_pipes_dashes_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_13__.DibDashesToSpacesPipe],
  encapsulation: 2
});

/***/ }),

/***/ 9965:
/*!***********************************************************!*\
  !*** ./src/app/system-messages/system-messages.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemMessagesModule": () => (/* binding */ SystemMessagesModule)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _system_messages_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system-messages.routing */ 85429);
/* harmony import */ var _system_messages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system-messages.component */ 41551);
/* harmony import */ var _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/breadcrumbs/breadcrumbs.module */ 2367);
/* harmony import */ var _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global/wrapper/listing/wrapper-listing.module */ 23745);
/* harmony import */ var _global_wrapper_details_wrapper_details_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/wrapper/details/wrapper-details.module */ 69569);
/* harmony import */ var _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/wrapper/main/wrapper-main.module */ 49722);
/* harmony import */ var _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/pipes/pipes.module */ 59916);
/* harmony import */ var _effects_system_message_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../effects/system-message.effects */ 66858);
/* harmony import */ var _system_message_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./system-message-dialog.component */ 22351);
/* harmony import */ var _system_message_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./system-message-form.component */ 26507);
/* harmony import */ var _global_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../global/dialog/dialog.module */ 13547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 60124);


























class SystemMessagesModule {
}
SystemMessagesModule.ɵfac = function SystemMessagesModule_Factory(t) { return new (t || SystemMessagesModule)(); };
SystemMessagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: SystemMessagesModule });
SystemMessagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _system_messages_routing__WEBPACK_IMPORTED_MODULE_0__.routing,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__.MatProgressBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule,
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__.EffectsModule.forFeature([_effects_system_message_effects__WEBPACK_IMPORTED_MODULE_7__.SystemMessageEffects]),
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule,
        _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbsModule,
        _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_3__.WrapperListingModule,
        _global_wrapper_details_wrapper_details_module__WEBPACK_IMPORTED_MODULE_4__.WrapperDetailsModule,
        _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_5__.WrapperMainModule,
        _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__.DibPipesModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__.MatTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
        _global_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_10__.DialogModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](SystemMessagesModule, { declarations: [_system_messages_component__WEBPACK_IMPORTED_MODULE_1__.SystemMessagesComponent, _system_message_dialog_component__WEBPACK_IMPORTED_MODULE_8__.SystemMessageDialogComponent, _system_message_form_component__WEBPACK_IMPORTED_MODULE_9__.SystemMessageFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__.MatProgressBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__.EffectsFeatureModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule,
        _global_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbsModule,
        _global_wrapper_listing_wrapper_listing_module__WEBPACK_IMPORTED_MODULE_3__.WrapperListingModule,
        _global_wrapper_details_wrapper_details_module__WEBPACK_IMPORTED_MODULE_4__.WrapperDetailsModule,
        _global_wrapper_main_wrapper_main_module__WEBPACK_IMPORTED_MODULE_5__.WrapperMainModule,
        _utils_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__.DibPipesModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__.MatTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
        _global_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_10__.DialogModule] }); })();


/***/ }),

/***/ 85429:
/*!************************************************************!*\
  !*** ./src/app/system-messages/system-messages.routing.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routing": () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.guard */ 3870);
/* harmony import */ var _system_messages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system-messages.component */ 41551);



const routes = [
    { path: '', component: _system_messages_component__WEBPACK_IMPORTED_MODULE_1__.SystemMessagesComponent, canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard], data: { title: 'System Messages' } },
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes);


/***/ })

}]);
//# sourceMappingURL=src_app_system-messages_system-messages_module_ts.js.map