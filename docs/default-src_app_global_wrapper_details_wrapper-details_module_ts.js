"use strict";
(self["webpackChunkadmin_tool"] = self["webpackChunkadmin_tool"] || []).push([["default-src_app_global_wrapper_details_wrapper-details_module_ts"],{

/***/ 36246:
/*!*****************************************************************************!*\
  !*** ./src/app/global/wrapper/details/tab/wrapper-details-tab.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrapperDetailsTabComponent": () => (/* binding */ WrapperDetailsTabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _dot_loader_dot_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../dot-loader/dot-loader.component */ 43339);




function WrapperDetailsTabComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "dib-dot-loader", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WrapperDetailsTabComponent_ng_template_2_span_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WrapperDetailsTabComponent_ng_template_2_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WrapperDetailsTabComponent_ng_template_2_span_0_ng_container_1_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("title", ctx_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function WrapperDetailsTabComponent_ng_template_2_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WrapperDetailsTabComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WrapperDetailsTabComponent_ng_template_2_ng_template_1_ng_container_1_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r7.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("title", ctx_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function WrapperDetailsTabComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WrapperDetailsTabComponent_ng_template_2_span_0_Template, 2, 2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WrapperDetailsTabComponent_ng_template_2_ng_template_1_Template, 2, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.route)("ngIfElse", _r6);
} }
function WrapperDetailsTabComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = ["*", [["", "slot", "badge"]]];
const _c1 = ["*", "[slot='badge']"];
/** Example Usage
<dib-wrapper-details-tab>
  Tab title
  <ng-container slot="badge">5</ng-container>
</dib-wrapper-details-tab>
 */
class WrapperDetailsTabComponent {
    constructor() {
        this.type = 'default';
        this.route = null;
        this.title = null;
        this.active = false;
        this.loading = false;
    }
}
WrapperDetailsTabComponent.ɵfac = function WrapperDetailsTabComponent_Factory(t) { return new (t || WrapperDetailsTabComponent)(); };
WrapperDetailsTabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WrapperDetailsTabComponent, selectors: [["dib-wrapper-details-tab"]], inputs: { type: "type", route: "route", title: "title", active: "active", loading: "loading" }, ngContentSelectors: _c1, decls: 6, vars: 2, consts: [[1, "flex", "w-full"], [4, "ngIf", "ngIfElse"], ["showTab", ""], ["content", ""], ["size", "small", "color", "current"], ["class", "flex-1 text-left", 4, "ngIf", "ngIfElse"], ["tabWithLink", ""], [1, "flex-1", "text-left"], [4, "ngTemplateOutlet"], [1, "flex-1", "text-left", "text-current", "no-underline", "hover:text-emerald-600", 3, "routerLink"], [1, "badge", "empty:hidden"]], template: function WrapperDetailsTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WrapperDetailsTabComponent_span_1_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, WrapperDetailsTabComponent_ng_template_2_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, WrapperDetailsTabComponent_ng_template_4_Template, 3, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _dot_loader_dot_loader_component__WEBPACK_IMPORTED_MODULE_0__.DotLoaderComponent], styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: block;\n}\n[type~=header][_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  text-transform: uppercase;\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\n[type~=header][_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n[_nghost-%COMP%]:not([type]) {\n  margin-bottom: 0.75rem;\n}\n[_nghost-%COMP%]:not([type])    > div[_ngcontent-%COMP%] {\n  z-index: 0;\n  cursor: pointer;\n  white-space: nowrap;\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n  border-top-left-radius: 0.375rem;\n  border-bottom-left-radius: 0.375rem;\n  border-left-width: 4px;\n  border-color: transparent;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  --tw-bg-opacity: 0.4;\n}\n[_nghost-%COMP%]:not([type])    > div[_ngcontent-%COMP%]:hover {\n  --tw-bg-opacity: 0.7;\n  color: currentColor;\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n[_nghost-%COMP%]:not([type])    > div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 1rem;\n}\n[_nghost-%COMP%]:not([type])[active=true]    > div[_ngcontent-%COMP%] {\n  border-left-width: 4px;\n  --tw-border-opacity: 1;\n  border-color: rgb(5 150 105 / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  color: currentColor;\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n[_nghost-%COMP%]:not([type])[active=true]::after {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  right: -0.625rem;\n  height: 100%;\n  width: 0.625rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n[_nghost-%COMP%]   .badge[_ngcontent-%COMP%] {\n  float: right;\n  margin-left: 0.25rem;\n  display: inline-flex;\n  height: 1.25rem;\n  width: 1.25rem;\n  align-items: center;\n  justify-content: center;\n  align-self: flex-end;\n  border-radius: 9999px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(5 150 105 / var(--tw-bg-opacity));\n  padding-right: 1px;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyYXBwZXItZGV0YWlscy10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxrQkFBQTtFQUFBO0FBQUE7QUFLSTtFQUFBLGtCQUFBO0VBQUEsaUJBQUE7RUFBQSx5QkFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTtBQUdFO0VBQUEsbUJBQUE7RUFBQSxzQkFBQTtFQUFBLHFCQUFBO0VBQUE7QUFBQTtBQU9KO0VBQUE7QUFBQTtBQUdFO0VBQUEsVUFBQTtFQUFBLGVBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0RBQUE7RUFDQSxnQ0FBQTtFQUFBLG1DQUFBO0VBQUEsc0JBQUE7RUFBQSx5QkFBQTtFQUFBLHlEQUFBO0VBQUE7QUFEQTtBQUVBO0VBQUEsb0JBQUE7RUFBQSxtQkFBQTtFQUFBLDBDQUFBO0VBQUEsdURBQUE7RUFBQTtBQUFBO0FBR0U7RUFBQSxnQkFBQTtFQUFBLHVCQUFBO0VBQUE7QUFBQTtBQU1BO0VBQUEsc0JBQUE7RUFBQSxzQkFBQTtFQUFBLHVEQUFBO0VBQUEsa0JBQUE7RUFBQSxtQkFBQTtFQUFBLDBDQUFBO0VBQUEsdURBQUE7RUFBQTtBQUFBO0FBSUY7RUFDRSxXQUFBO0VBRUEsa0JBQUE7RUFBQSxRQUFBO0VBQUEsZ0JBQUE7RUFBQSxZQUFBO0VBQUEsZUFBQTtFQUFBLGtCQUFBO0VBQUEseURBQUE7QUFYUjtBQWlCSTtFQUFBLFlBQUE7RUFBQSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsZUFBQTtFQUFBLGNBQUE7RUFBQSxtQkFBQTtFQUFBLHVCQUFBO0VBQUEsb0JBQUE7RUFBQSxxQkFBQTtFQUNBLGtCQUFBO0VBQUEsdURBQUE7RUFBQSxrQkFBQTtFQUFBLGtCQUFBO0VBQUEsaUJBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUE7QUFEQSIsImZpbGUiOiJ3cmFwcGVyLWRldGFpbHMtdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBAYXBwbHkgcmVsYXRpdmUgYmxvY2s7XG5cbiAgLy8gVGFiIGdyb3VwIGhlYWRlclxuICAmW3R5cGV+PSdoZWFkZXInXSB7XG4gICAgPiBkaXYge1xuICAgICAgQGFwcGx5IHRleHQteHMgdXBwZXJjYXNlIHRleHQtZ3JheS01MDA7XG5cbiAgICAgID4gKiB7XG4gICAgICAgIEBhcHBseSBweS0yIHB4LTU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU2luZ2xlIHRhYiBpdGVtXG4gICY6bm90KFt0eXBlXSkge1xuICAgIEBhcHBseSBtYi0zO1xuXG4gICAgPiBkaXYge1xuICAgICAgQGFwcGx5IHotMCBjdXJzb3ItcG9pbnRlciB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LWdyYXktNTAwO1xuICAgICAgQGFwcGx5IHJvdW5kZWQtbC1tZCBib3JkZXItbC00IGJvcmRlci10cmFuc3BhcmVudCBiZy13aGl0ZSBiZy1vcGFjaXR5LTQwO1xuICAgICAgQGFwcGx5IGhvdmVyOmJnLW9wYWNpdHktNzAgaG92ZXI6dGV4dC1jdXJyZW50IGhvdmVyOnNoYWRvdy1zbTtcblxuICAgICAgPiAqIHtcbiAgICAgICAgQGFwcGx5IG92ZXJmbG93LWhpZGRlbiB0ZXh0LWVsbGlwc2lzIHAtNDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmW2FjdGl2ZT0ndHJ1ZSddIHtcbiAgICAgID4gZGl2IHtcbiAgICAgICAgQGFwcGx5IGJvcmRlci1sLTQgYm9yZGVyLWVtZXJhbGQtNjAwIGJnLW9wYWNpdHktMTAwIHRleHQtY3VycmVudCBzaGFkb3ctc207XG4gICAgICB9XG5cbiAgICAgIC8vIEhhY2sgdG8gaGlkZSB0aGUgc2hhZG93IG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSB0YWJcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG5cbiAgICAgICAgQGFwcGx5IGFic29sdXRlIHRvcC0wIC1yaWdodC0yLjUgaC1mdWxsIHctMi41IGJnLXdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5iYWRnZSB7XG4gICAgQGFwcGx5IGZsb2F0LXJpZ2h0IG1sLTEgaW5saW5lLWZsZXggaC01IHctNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2VsZi1lbmQgcm91bmRlZC1mdWxsO1xuICAgIEBhcHBseSBiZy1lbWVyYWxkLTYwMCBwci1bMXB4XSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtd2hpdGU7XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 24019:
/*!*********************************************************************!*\
  !*** ./src/app/global/wrapper/details/wrapper-details.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrapperDetailsComponent": () => (/* binding */ WrapperDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _dot_loader_dot_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dot-loader/dot-loader.component */ 43339);



function WrapperDetailsComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](6, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function WrapperDetailsComponent_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " No data for selected item... ");
} }
function WrapperDetailsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WrapperDetailsComponent_ng_container_1_ng_container_1_Template, 7, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, WrapperDetailsComponent_ng_container_1_ng_template_2_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.withItem || ctx_r0.item)("ngIfElse", _r4);
} }
function WrapperDetailsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "dib-dot-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = [[["", "slot", "tabs"]], [["", "slot", "content"]], "*"];
const _c1 = ["[slot='tabs']", "[slot='content']", "*"];
class WrapperDetailsComponent {
    constructor() {
        this.loading = false;
    }
    /**
     * If item is not supplied we will just display the content wrapper
     * This is useful for simple pages with mostly static content
     *
     * Used like this:
     * <dib-wrapper-details>
     *   <ng-container slot="content">This is some content!!</ng-container>
     * </dib-wrapper-details>
     */
    get withItem() {
        return this.item !== undefined;
    }
}
WrapperDetailsComponent.ɵfac = function WrapperDetailsComponent_Factory(t) { return new (t || WrapperDetailsComponent)(); };
WrapperDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WrapperDetailsComponent, selectors: [["dib-wrapper-details"]], inputs: { loading: "loading", item: "item" }, ngContentSelectors: _c1, decls: 4, vars: 2, consts: [[1, "min-h-full", "p-6"], [4, "ngIf", "ngIfElse"], ["showLoader", ""], ["noData", ""], [1, "flex", "h-full"], [1, "mt-4", "mt-10", "flex", "w-60", "flex-col", "empty:hidden", "sm:w-40"], [1, "flex-1", "overflow-y-auto", "rounded-lg", "bg-white", "py-6", "px-8", "shadow-sm"], [1, "flex", "h-full", "w-full", "items-center", "justify-center"]], template: function WrapperDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WrapperDetailsComponent_ng_container_1_Template, 4, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, WrapperDetailsComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _dot_loader_dot_loader_component__WEBPACK_IMPORTED_MODULE_0__.DotLoaderComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: calc(100vh - var(--dib-header-height) - var(--dib-breadcrumbs-height));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyYXBwZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSw4RUFBQTtBQUNGIiwiZmlsZSI6IndyYXBwZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWRpYi1oZWFkZXItaGVpZ2h0KSAtIHZhcigtLWRpYi1icmVhZGNydW1icy1oZWlnaHQpKTtcbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 69569:
/*!******************************************************************!*\
  !*** ./src/app/global/wrapper/details/wrapper-details.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrapperDetailsModule": () => (/* binding */ WrapperDetailsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _wrapper_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapper-details.component */ 24019);
/* harmony import */ var _dot_loader_dot_loader_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dot-loader/dot-loader.module */ 67995);
/* harmony import */ var _tab_wrapper_details_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab/wrapper-details-tab.component */ 36246);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






class WrapperDetailsModule {
}
WrapperDetailsModule.ɵfac = function WrapperDetailsModule_Factory(t) { return new (t || WrapperDetailsModule)(); };
WrapperDetailsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: WrapperDetailsModule });
WrapperDetailsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _dot_loader_dot_loader_module__WEBPACK_IMPORTED_MODULE_1__.DotLoaderModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](WrapperDetailsModule, { declarations: [_wrapper_details_component__WEBPACK_IMPORTED_MODULE_0__.WrapperDetailsComponent, _tab_wrapper_details_tab_component__WEBPACK_IMPORTED_MODULE_2__.WrapperDetailsTabComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _dot_loader_dot_loader_module__WEBPACK_IMPORTED_MODULE_1__.DotLoaderModule], exports: [_wrapper_details_component__WEBPACK_IMPORTED_MODULE_0__.WrapperDetailsComponent, _tab_wrapper_details_tab_component__WEBPACK_IMPORTED_MODULE_2__.WrapperDetailsTabComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=default-src_app_global_wrapper_details_wrapper-details_module_ts.js.map