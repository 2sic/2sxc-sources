"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["default-projects_eav-ui_src_app_create-file-dialog_create-file-dialog_component_ts"],{

/***/ 12136:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/throttleTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throttleTime: () => (/* binding */ throttleTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 18473);
/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./throttle */ 24861);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/timer */ 14876);



function throttleTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler, config) {
  const duration$ = (0,_observable_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(duration, scheduler);
  return (0,_throttle__WEBPACK_IMPORTED_MODULE_2__.throttle)(() => duration$, config);
}

/***/ }),

/***/ 24861:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/throttle.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throttle: () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 50819);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 91687);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/innerFrom */ 82645);



function throttle(durationSelector, config) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    const {
      leading = true,
      trailing = false
    } = config !== null && config !== void 0 ? config : {};
    let hasValue = false;
    let sendValue = null;
    let throttled = null;
    let isComplete = false;
    const endThrottling = () => {
      throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
      throttled = null;
      if (trailing) {
        send();
        isComplete && subscriber.complete();
      }
    };
    const cleanupThrottling = () => {
      throttled = null;
      isComplete && subscriber.complete();
    };
    const startThrottle = value => throttled = (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(durationSelector(value)).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, endThrottling, cleanupThrottling));
    const send = () => {
      if (hasValue) {
        hasValue = false;
        const value = sendValue;
        sendValue = null;
        subscriber.next(value);
        !isComplete && startThrottle(value);
      }
    };
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      hasValue = true;
      sendValue = value;
      !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
    }, () => {
      isComplete = true;
      !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
    }));
  });
}

/***/ }),

/***/ 36416:
/*!************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/directives/mat-input-autofocus.directive.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatInputAutofocusDirective: () => (/* binding */ MatInputAutofocusDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ 95541);




class MatInputAutofocusDirective {
  constructor(matInput, elementRef) {
    this.matInput = matInput;
    this.elementRef = elementRef;
    this.autofocusSelectValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(false);
  }
  ngOnInit() {
    setTimeout(() => {
      this.matInput.focus();
      if (this.toBoolean(this.autofocusSelectValue())) {
        this.elementRef.nativeElement.setSelectionRange(0, this.matInput.value.length);
      }
    });
  }
  toBoolean(value) {
    if (typeof value === 'boolean') {
      return value;
    }
    if (typeof value === 'string') {
      const valueLowerCase = value.toLocaleLowerCase();
      if (valueLowerCase === 'true') {
        return true;
      }
      if (valueLowerCase === 'false') {
        return false;
      }
      return;
    }
    if (value == null) {
      return value;
    }
  }
  static {
    this.ɵfac = function MatInputAutofocusDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatInputAutofocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInput), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatInputAutofocusDirective,
      selectors: [["", "appMatInputAutofocus", ""]],
      inputs: {
        autofocusSelectValue: [1, "autofocusSelectValue"]
      }
    });
  }
}

/***/ }),

/***/ 47483:
/*!************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/create-file-dialog/create-file-dialog.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateFileDialogComponent: () => (/* binding */ CreateFileDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 12136);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 18473);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 14876);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core */ 88692);
/* harmony import */ var _code_editor_services_source_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../code-editor/services/source.service */ 79996);
/* harmony import */ var _edit_shared_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit/shared/helpers */ 56606);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/base.component */ 43176);
/* harmony import */ var _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/field-hint/field-hint.component */ 43758);
/* harmony import */ var _shared_directives_mat_input_autofocus_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/directives/mat-input-autofocus.directive */ 36416);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);


// tslint:disable-next-line:max-line-length























const _c0 = a0 => ({
  "disabled": a0
});
function CreateFileDialogComponent_Conditional_0_For_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const platform_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", platform_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", platform_r2, " ");
  }
}
function CreateFileDialogComponent_Conditional_0_For_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const purpose_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", purpose_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", purpose_r3, " ");
  }
}
function CreateFileDialogComponent_Conditional_0_For_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const template_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", template_r4.Key);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", template_r4.Name, " ");
  }
}
function CreateFileDialogComponent_Conditional_0_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-field-hint", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isError", true);
  }
}
function CreateFileDialogComponent_Conditional_0_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-spinner", 21)(1, "div", 22);
  }
}
function CreateFileDialogComponent_Conditional_0_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 23)(1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "pre", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c0, vm_r6.loadingPreview));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c0, vm_r6.loadingPreview));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](vm_r6.preview);
  }
}
function CreateFileDialogComponent_Conditional_0_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", vm_r6.previewError, " ");
  }
}
function CreateFileDialogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 4)(8, "form", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "mat-form-field", 9)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Platform");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](16, CreateFileDialogComponent_Conditional_0_For_17_Template, 2, 2, "mat-option", 11, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 8)(19, "mat-form-field", 9)(20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Purpose");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "mat-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](23, CreateFileDialogComponent_Conditional_0_For_24_Template, 2, 2, "mat-option", 11, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 13)(26, "mat-form-field", 9)(27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](30, CreateFileDialogComponent_Conditional_0_For_31_Template, 2, 2, "mat-option", 11, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 13)(33, "mat-form-field", 9)(34, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, CreateFileDialogComponent_Conditional_0_Conditional_37_Template, 2, 1, "app-field-hint", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, CreateFileDialogComponent_Conditional_0_Conditional_39_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateFileDialogComponent_Conditional_0_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateFileDialogComponent_Conditional_0_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.confirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, " Create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, CreateFileDialogComponent_Conditional_0_Conditional_44_Template, 5, 7)(45, CreateFileDialogComponent_Conditional_0_Conditional_45_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const vm_r6 = ctx;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4.controls.finalName.value || (ctx_r4.controls.folder.value ? ctx_r4.controls.folder.value.trim() + "/" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r4.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](vm_r6.platforms);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](vm_r6.purposes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](vm_r6.templates);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r4.controls.name.touched && (ctx_r4.controls.name.errors == null ? null : ctx_r4.controls.name.errors.required) ? 37 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](vm_r6.loadingPreview ? 39 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r4.form.valid || vm_r6.loadingPreview || !vm_r6.previewValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](vm_r6.preview ? 44 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](!vm_r6.loadingPreview && vm_r6.previewError ? 45 : -1);
  }
}
class CreateFileDialogComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__.BaseComponent {
  constructor(dialogData, dialog) {
    super();
    this.dialogData = dialogData;
    this.dialog = dialog;
    this.hostClass = 'dialog-component';
    // TODO: 2dg ViewModel Offen > Views, Create Template
    this.all = 'All';
    this.sourceService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_code_editor_services_source_service__WEBPACK_IMPORTED_MODULE_1__.SourceService);
  }
  ngOnInit() {
    this.templates$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject([]);
    this.loadingPreview$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(false);
    this.buildForm();
    this.fetchTemplates();
    this.buildViewModel();
  }
  ngOnDestroy() {
    this.templates$.complete();
    this.loadingPreview$.complete();
    super.ngOnDestroy();
  }
  closeDialog(result) {
    this.dialog.close(result);
  }
  confirm() {
    const formValues = this.form.getRawValue();
    const result = {
      name: formValues.finalName,
      templateKey: formValues.templateKey
    };
    this.closeDialog(result);
  }
  fetchTemplates() {
    this.sourceService.getPredefinedTemplates(this.dialogData.purpose, this.dialogData.type).subscribe(response => {
      if (this.controls.templateKey.value !== response.Default) {
        this.controls.templateKey.patchValue(response.Default);
      }
      this.templates$.next(response.Templates);
    });
  }
  buildForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormGroup({
      platform: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(this.all),
      purpose: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl({
        value: this.dialogData.purpose ?? this.all,
        disabled: this.dialogData.purpose != null
      }),
      templateKey: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(this.dialogData.name ?? null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
      finalName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl({
        value: null,
        disabled: true
      }),
      folder: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl({
        value: this.dialogData.folder ?? '',
        disabled: true
      })
    });
    this.controls = this.form.controls;
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.templates$, this.controls.templateKey.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(this.controls.templateKey.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)())]).subscribe(([templates, templateKey]) => {
      const template = templates.find(t => t.Key === templateKey);
      const suggestedName = this.dialogData.name ? this.controls.name.value || this.dialogData.name : template?.SuggestedFileName ?? null;
      if (this.controls.name.value !== suggestedName) {
        this.controls.name.patchValue(suggestedName);
      }
    }));
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.templates$, this.controls.templateKey.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(this.controls.templateKey.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)()), this.controls.name.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(this.controls.name.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)()), this.controls.folder.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(this.controls.folder.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)())]).subscribe(([templates, templateKey, name, folder]) => {
      const template = templates.find(t => t.Key === templateKey);
      let finalName = null;
      if (name) {
        folder = folder.trim();
        name = _edit_shared_helpers__WEBPACK_IMPORTED_MODULE_2__.SanitizeHelper.sanitizePath(name.trim());
        name = `${template?.Prefix ?? ''}${name}${template?.Suffix ?? ''}${template?.Extension ?? ''}`;
        finalName = `${folder ? `${folder}/` : ''}${name}`.replace(/\/{2,}/g, '/');
      }
      if (this.controls.finalName.value !== finalName) {
        this.controls.finalName.patchValue(finalName);
      }
    }));
  }
  buildViewModel() {
    const platforms$ = this.templates$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(templates => {
      const platformsMap = {
        [this.all]: this.all
      };
      templates.forEach(template => {
        template.Platforms?.forEach(platform => {
          platformsMap[platform] = platform;
        });
      });
      return Object.keys(platformsMap);
    }));
    const purposes$ = this.templates$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(templates => {
      const purposesMap = {
        [this.all]: this.all
      };
      templates.forEach(template => {
        purposesMap[template.Purpose] = template.Purpose;
      });
      return Object.keys(purposesMap);
    }));
    const templates$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.templates$, this.controls.platform.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(this.controls.platform.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)()), this.controls.purpose.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(this.controls.purpose.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)())]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(([templates, platform, purpose]) => {
      const filtered = templates.filter(template => {
        const platformMatch = platform === this.all || (template.Platforms?.includes(platform) ?? false);
        const purposeMatch = purpose === this.all || template.Purpose === purpose;
        return platformMatch && purposeMatch;
      });
      return filtered;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.tap)(templates => {
      if (!templates.some(t => t.Key === this.controls.templateKey.value)) {
        const newTemplateKey = templates[0]?.Key ?? null;
        if (this.controls.templateKey.value !== newTemplateKey) {
          this.controls.templateKey.patchValue(newTemplateKey);
        }
      }
    }));
    const preview$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.controls.finalName.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(this.controls.finalName.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)()), this.controls.templateKey.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(this.controls.templateKey.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)())]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.throttleTime)(100, rxjs__WEBPACK_IMPORTED_MODULE_15__.asyncScheduler, {
      leading: true,
      trailing: true
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.tap)(() => {
      this.loadingPreview$.next(true);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.switchMap)(([finalName, templateKey]) => {
      return !finalName || !templateKey ? (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(undefined) : (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.forkJoin)([this.sourceService.getPreview(finalName, this.dialogData.global, templateKey), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.timer)(500)]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(([preview]) => preview));
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.tap)(() => {
      this.loadingPreview$.next(false);
    }));
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([platforms$, purposes$, templates$, preview$, this.loadingPreview$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(([platforms, purposes, templates, preview, loadingPreview]) => {
      const viewModel = {
        platforms,
        purposes,
        templates,
        loadingPreview,
        preview: preview?.Preview,
        previewValid: preview?.IsValid ?? false,
        previewError: preview?.Error
      };
      return viewModel;
    }));
  }
  static {
    this.ɵfac = function CreateFileDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CreateFileDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: CreateFileDialogComponent,
      selectors: [["app-create-file-dialog"]],
      hostVars: 1,
      hostBindings: function CreateFileDialogComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 3,
      consts: [[1, "eav-dialog", "eav-no-scrollbar"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title", "eav-dialog-title-box"], [1, "eav-file-name"], [1, "eav-dialog-content"], [1, "dialog-form", 3, "formGroup"], [1, "dialog-form-content"], [1, "eav-field-container", "eav-multiple"], [1, "eav-multiple-field"], ["color", "accent", 1, "eav-mat-form-field"], ["formControlName", "platform"], [3, "value"], ["formControlName", "purpose"], [1, "eav-field-container"], ["formControlName", "templateKey"], ["matInput", "", "type", "text", "formControlName", "name", "required", "", "appMatInputAutofocus", "", "autofocusSelectValue", "true"], [3, "isError"], [1, "dialog-form-actions"], ["mat-raised-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click", "disabled"], [1, "eav-preview-error"], ["mode", "indeterminate", "diameter", "20", "color", "accent"], [1, "spacer"], [1, "eav-preview-label-box"], [1, "eav-preview-label", 3, "ngClass"], [1, "fancy-scrollbar-light", 3, "ngClass"]],
      template: function CreateFileDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateFileDialogComponent_Conditional_0_Template, 46, 7, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"]((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatOptionModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInput, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinner, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_27__.AsyncPipe, _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_4__.FieldHintComponent, _shared_directives_mat_input_autofocus_directive__WEBPACK_IMPORTED_MODULE_5__.MatInputAutofocusDirective],
      styles: [".eav-dialog-title-box[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.eav-dialog-title-box[_ngcontent-%COMP%]   .eav-file-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-left: 8px;\n  background-color: lightgrey;\n}\n\n.eav-field-container[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-top: 8px;\n}\n.eav-field-container.eav-multiple[_ngcontent-%COMP%] {\n  display: flex;\n}\n.eav-field-container.eav-multiple[_ngcontent-%COMP%]   .eav-multiple-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.eav-field-container.eav-multiple[_ngcontent-%COMP%]   .eav-multiple-field[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 8px;\n}\n\n.dialog-form-content[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\n.dialog-form-actions[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\npre[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-shrink: 1;\n  font-family: monospace;\n}\npre.disabled[_ngcontent-%COMP%] {\n  color: rgba(29, 39, 61, 0.24);\n}\n\n.eav-preview-label-box[_ngcontent-%COMP%] {\n  position: relative;\n}\n.eav-preview-label-box[_ngcontent-%COMP%]   .eav-preview-label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -20px;\n  left: 0px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.6);\n  pointer-events: none;\n}\n.eav-preview-label-box[_ngcontent-%COMP%]   .eav-preview-label.disabled[_ngcontent-%COMP%] {\n  color: rgba(29, 39, 61, 0.44);\n}\n\n.eav-preview-error[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 14px;\n  color: red;\n}\n\npre[_ngcontent-%COMP%] {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  overflow-x: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1maWxlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsIi4uXFxlZGl0XFxhc3NldHNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJBQUE7QUFERjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFNRTtFQUNFLGVBQUE7QUFISjtBQU1FO0VBQ0UsYUFBQTtBQUpKO0FBTUk7RUFDRSxPQUFBO0FBSk47QUFNTTtFQUNFLGdCQUFBO0FBSlI7O0FBVUE7RUFDRSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBUEY7QUFTRTtFQUNFLDZCQ1gwQjtBREk5Qjs7QUFXQTtFQUNFLGtCQUFBO0FBUkY7QUFVRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQVJKO0FBVUk7RUFDRSw2QkMxQndCO0FEa0I5Qjs7QUFhQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFWRjs7QUFhQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBVkYiLCJmaWxlIjoiY3JlYXRlLWZpbGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL2VkaXQvYXNzZXRzL3N0eWxlcy9fdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5lYXYtZGlhbG9nLXRpdGxlLWJveCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgLmVhdi1maWxlLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICB9XHJcbn1cclxuXHJcbi5lYXYtZmllbGQtY29udGFpbmVyIHtcclxuICAmOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIH1cclxuXHJcbiAgJi5lYXYtbXVsdGlwbGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAuZWF2LW11bHRpcGxlLWZpZWxkIHtcclxuICAgICAgZmxleDogMTtcclxuXHJcbiAgICAgICY6bm90KDpmaXJzdC1vZi10eXBlKSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmRpYWxvZy1mb3JtLWNvbnRlbnQge1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4uZGlhbG9nLWZvcm0tYWN0aW9ucyB7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbnByZSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGZsZXgtc2hyaW5rOiAxO1xyXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcblxyXG4gICYuZGlzYWJsZWQge1xyXG4gICAgY29sb3I6ICRlZGl0VUktbGFiZWwtZGlzYWJsZWQtY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG4uZWF2LXByZXZpZXctbGFiZWwtYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5lYXYtcHJldmlldy1sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0yMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBjb2xvcjogJGVkaXRVSS1maWVsZC1kaXNhYmxlZC1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5lYXYtcHJldmlldy1lcnJvciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxucHJlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiA5LjVweDtcclxuICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcclxuICBjb2xvcjogIzMzMztcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG4iLCIkcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcclxuJGFjY2VudC1jb2xvcjogIzAwMjc1MztcclxuJGJsdWUtYWNjZW50LWNvbG9yOiAjMDA4N2Y0O1xyXG4kZXJyb3ItY29sb3I6ICNiMDAwMzA7XHJcblxyXG4kZWRpdC11aS1kaWFsb2ctd2lkdGg6IDEwMHZ3O1xyXG4kZWRpdC11aS1kaWFsb2ctbWF4LXdpZHRoOiA4MDBweDtcclxuXHJcbi8vIE1haW4gaGVpZ2h0IC0gYWxsIG1vdmVkIHRvIG1haW4gc3R5bGVzLmNzcyBzbyBpdCdzIG5vdCBhZGRlZCBtdWx0aXBsZSB0aW1lc1xyXG4vLyBEZWJ1ZyAtIGFsbCBtb3ZlZCB0byBtYWluIHN0eWxlcy5jc3Mgc28gaXQncyBub3QgYWRkZWQgbXVsdGlwbGUgdGltZXNcclxuXHJcblxyXG5cclxuXHJcbiRlZGl0LXVpLWRpYWxvZy1ib3JkZXItcmFkaXVzOjhweDtcclxuJGVkaXQtdWktZGlhbG9nLWJvcmRlci1yYWRpdXMtbW9iaWxlOjBweDtcclxuJGVkaXQtdWktaW5wdXQtYm9yZGVyLXJhZGl1czo0cHg7XHJcblxyXG4kc2F2ZS1idXR0b24taGVpZ2h0OjQ4cHg7XHJcbiRzYXZlLWJ1dHRvbi1oZWlnaHQtbW9iaWxlOjQycHg7XHJcbiRzYXZlLWJ1dHRvbi13aWR0aC1jb21wYWN0OjQ4cHg7XHJcbiRzYXZlLWJ1dHRvbi13aWR0aC1jb21wYWN0LW1vYmlsZTo0MnB4O1xyXG4kc2F2ZS1idXR0b24td2lkdGgtZXh0ZW5kZWQ6MjAwcHg7XHJcbiRzYXZlLWJ1dHRvbi13aWR0aC1leHRlbmRlZC1tb2JpbGU6MTcwcHg7XHJcblxyXG4vLyBUaGUgbWF4LWhlaWdodCBzaG91bGQgYWxzbyBiZSBzZXQgaW4gdGhlIGV4cGFuZGFibGUgd3JhcHBlciBhbmltYXRpb25zXHJcbiRleHBhbmRhYmxlLXdyYXBwZXItbWF4LWhlaWdodDogY2FsYyh2YXIoLS1lZGl0LWNvbnRlbnQtbWF4LWhlaWdodC1kZWZhdWx0KSArIHZhcigtLWVkaXQtZGlhbG9nLWhlYWRlci1oZWlnaHQpKTtcclxuJGV4cGFuZGFibGUtd3JhcHBlci1tYXgtaGVpZ2h0LW1vYmlsZTogY2FsYyh2YXIoLS1lZGl0LXVpLWRpYWxvZy1tYXgtaGVpZ2h0LW1vYmlsZSkgKyB2YXIoLS1lZGl0LWRpYWxvZy1oZWFkZXItaGVpZ2h0KSk7XHJcblxyXG4kZWRpdC11aS1kaWFsb2ctYmFja2dyb3VuZC1jb2xvcjogI0VGRjBGMjtcclxuXHJcbiRlZGl0VUktZm9yZWdyb3VuZC1jb2xvcjogIzFEMjczRDtcclxuJGVkaXRVSS1kaXNhYmxlZC1iYWNrZ3JvdW5kOiByZ2JhKCRlZGl0VUktZm9yZWdyb3VuZC1jb2xvciwgMC4wNCk7XHJcbiRlZGl0VUktbGFiZWwtZGlzYWJsZWQtY29sb3I6IHJnYmEoJGVkaXRVSS1mb3JlZ3JvdW5kLWNvbG9yLCAwLjI0KTtcclxuJGVkaXRVSS1maWVsZC1kaXNhYmxlZC1jb2xvcjogcmdiYSgkZWRpdFVJLWZvcmVncm91bmQtY29sb3IsIDAuNDQpO1xyXG5cclxuJGVkaXQtdWktc2VsZWN0ZWQtb3B0aW9uOiByZ2JhKCMwMDAwMDAsIDAuMDQpO1xyXG5cclxuLy8gRmllbGQgYm9yZGVyc1xyXG4kZmllbGQtYm9yZGVyLWNvbG9yLS1pbml0aWFsOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWhvdmVyOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kZmllbGQtYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDpyZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWludmFsaWQ6ICRlcnJvci1jb2xvcjtcclxuXHJcbi8vIERyb3B6b25lXHJcbiRkcm9wem9uZS1iYWNrZ3JvdW5kOiByZ2JhKCRhY2NlbnQtY29sb3IsIDAuNDQpO1xyXG4kZHJvcHpvbmUtYWN0aXZlLWJhY2tncm91bmQ6IHJnYmEoJGFjY2VudC1jb2xvciwgMC44OCk7XHJcblxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NyZWF0ZS1maWxlLWRpYWxvZy9jcmVhdGUtZmlsZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9wcm9qZWN0cy9lYXYtdWkvc3JjL2FwcC9lZGl0L2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJBQUE7QUFERjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFNRTtFQUNFLGVBQUE7QUFISjtBQU1FO0VBQ0UsYUFBQTtBQUpKO0FBTUk7RUFDRSxPQUFBO0FBSk47QUFNTTtFQUNFLGdCQUFBO0FBSlI7O0FBVUE7RUFDRSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBUEY7QUFTRTtFQUNFLDZCQ1gwQjtBREk5Qjs7QUFXQTtFQUNFLGtCQUFBO0FBUkY7QUFVRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQVJKO0FBVUk7RUFDRSw2QkMxQndCO0FEa0I5Qjs7QUFhQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFWRjs7QUFhQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBVkY7QUFDQSxvNEtBQW80SyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9lZGl0L2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4uZWF2LWRpYWxvZy10aXRsZS1ib3gge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gIC5lYXYtZmlsZS1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgfVxyXG59XHJcblxyXG4uZWF2LWZpZWxkLWNvbnRhaW5lciB7XHJcbiAgJjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICB9XHJcblxyXG4gICYuZWF2LW11bHRpcGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLmVhdi1tdWx0aXBsZS1maWVsZCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAmOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5kaWFsb2ctZm9ybS1jb250ZW50IHtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLmRpYWxvZy1mb3JtLWFjdGlvbnMge1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG5wcmUge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBmbGV4LXNocmluazogMTtcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG5cclxuICAmLmRpc2FibGVkIHtcclxuICAgIGNvbG9yOiAkZWRpdFVJLWxhYmVsLWRpc2FibGVkLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuLmVhdi1wcmV2aWV3LWxhYmVsLWJveCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAuZWF2LXByZXZpZXctbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgY29sb3I6ICRlZGl0VUktZmllbGQtZGlzYWJsZWQtY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZWF2LXByZXZpZXctZXJyb3Ige1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbnByZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogOS41cHg7XHJcbiAgbWFyZ2luOiAwIDAgMTBweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuIiwiJHByaW1hcnktY29sb3I6ICNmZmZmZmY7XHJcbiRhY2NlbnQtY29sb3I6ICMwMDI3NTM7XHJcbiRibHVlLWFjY2VudC1jb2xvcjogIzAwODdmNDtcclxuJGVycm9yLWNvbG9yOiAjYjAwMDMwO1xyXG5cclxuJGVkaXQtdWktZGlhbG9nLXdpZHRoOiAxMDB2dztcclxuJGVkaXQtdWktZGlhbG9nLW1heC13aWR0aDogODAwcHg7XHJcblxyXG4vLyBNYWluIGhlaWdodCAtIGFsbCBtb3ZlZCB0byBtYWluIHN0eWxlcy5jc3Mgc28gaXQncyBub3QgYWRkZWQgbXVsdGlwbGUgdGltZXNcclxuLy8gRGVidWcgLSBhbGwgbW92ZWQgdG8gbWFpbiBzdHlsZXMuY3NzIHNvIGl0J3Mgbm90IGFkZGVkIG11bHRpcGxlIHRpbWVzXHJcblxyXG5cclxuXHJcblxyXG4kZWRpdC11aS1kaWFsb2ctYm9yZGVyLXJhZGl1czo4cHg7XHJcbiRlZGl0LXVpLWRpYWxvZy1ib3JkZXItcmFkaXVzLW1vYmlsZTowcHg7XHJcbiRlZGl0LXVpLWlucHV0LWJvcmRlci1yYWRpdXM6NHB4O1xyXG5cclxuJHNhdmUtYnV0dG9uLWhlaWdodDo0OHB4O1xyXG4kc2F2ZS1idXR0b24taGVpZ2h0LW1vYmlsZTo0MnB4O1xyXG4kc2F2ZS1idXR0b24td2lkdGgtY29tcGFjdDo0OHB4O1xyXG4kc2F2ZS1idXR0b24td2lkdGgtY29tcGFjdC1tb2JpbGU6NDJweDtcclxuJHNhdmUtYnV0dG9uLXdpZHRoLWV4dGVuZGVkOjIwMHB4O1xyXG4kc2F2ZS1idXR0b24td2lkdGgtZXh0ZW5kZWQtbW9iaWxlOjE3MHB4O1xyXG5cclxuLy8gVGhlIG1heC1oZWlnaHQgc2hvdWxkIGFsc28gYmUgc2V0IGluIHRoZSBleHBhbmRhYmxlIHdyYXBwZXIgYW5pbWF0aW9uc1xyXG4kZXhwYW5kYWJsZS13cmFwcGVyLW1heC1oZWlnaHQ6IGNhbGModmFyKC0tZWRpdC1jb250ZW50LW1heC1oZWlnaHQtZGVmYXVsdCkgKyB2YXIoLS1lZGl0LWRpYWxvZy1oZWFkZXItaGVpZ2h0KSk7XHJcbiRleHBhbmRhYmxlLXdyYXBwZXItbWF4LWhlaWdodC1tb2JpbGU6IGNhbGModmFyKC0tZWRpdC11aS1kaWFsb2ctbWF4LWhlaWdodC1tb2JpbGUpICsgdmFyKC0tZWRpdC1kaWFsb2ctaGVhZGVyLWhlaWdodCkpO1xyXG5cclxuJGVkaXQtdWktZGlhbG9nLWJhY2tncm91bmQtY29sb3I6ICNFRkYwRjI7XHJcblxyXG4kZWRpdFVJLWZvcmVncm91bmQtY29sb3I6ICMxRDI3M0Q7XHJcbiRlZGl0VUktZGlzYWJsZWQtYmFja2dyb3VuZDogcmdiYSgkZWRpdFVJLWZvcmVncm91bmQtY29sb3IsIDAuMDQpO1xyXG4kZWRpdFVJLWxhYmVsLWRpc2FibGVkLWNvbG9yOiByZ2JhKCRlZGl0VUktZm9yZWdyb3VuZC1jb2xvciwgMC4yNCk7XHJcbiRlZGl0VUktZmllbGQtZGlzYWJsZWQtY29sb3I6IHJnYmEoJGVkaXRVSS1mb3JlZ3JvdW5kLWNvbG9yLCAwLjQ0KTtcclxuXHJcbiRlZGl0LXVpLXNlbGVjdGVkLW9wdGlvbjogcmdiYSgjMDAwMDAwLCAwLjA0KTtcclxuXHJcbi8vIEZpZWxkIGJvcmRlcnNcclxuJGZpZWxkLWJvcmRlci1jb2xvci0taW5pdGlhbDogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4kZmllbGQtYm9yZGVyLWNvbG9yLS1ob3ZlcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4kZmllbGQtYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGZpZWxkLWJvcmRlci1jb2xvci0tZGlzYWJsZWQ6cmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4kZmllbGQtYm9yZGVyLWNvbG9yLS1pbnZhbGlkOiAkZXJyb3ItY29sb3I7XHJcblxyXG4vLyBEcm9wem9uZVxyXG4kZHJvcHpvbmUtYmFja2dyb3VuZDogcmdiYSgkYWNjZW50LWNvbG9yLCAwLjQ0KTtcclxuJGRyb3B6b25lLWFjdGl2ZS1iYWNrZ3JvdW5kOiByZ2JhKCRhY2NlbnQtY29sb3IsIDAuODgpO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 79996:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/services/source.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceService: () => (/* binding */ SourceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);




const appFilesAll = 'admin/AppFiles/AppFiles';
const appFilesAsset = 'admin/AppFiles/asset';
const appFilesCreate = 'admin/AppFiles/create';
const apiExplorerInspect = 'admin/ApiExplorer/inspect';
const apiExplorerAppApiFiles = 'admin/ApiExplorer/AppApiFiles';
const appFilesPredefinedTemplates = 'admin/AppFiles/GetTemplates';
const appFilesPreview = 'admin/AppFiles/preview';
class SourceService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__.HttpServiceBase {
  /** ViewKey is templateId or path */
  get(viewKey, global, urlItems) {
    return this.getHttpApiUrl(appFilesAsset, {
      params: {
        appId: this.appId,
        global,
        ...this.templateIdOrPath(viewKey, global, urlItems)
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(view => {
      if (view.Type.toLocaleLowerCase() === 'auto') {
        switch (view.Extension.toLocaleLowerCase()) {
          case '.cs':
          case '.cshtml':
            view.Type = 'Razor';
            break;
          case '.html':
          case '.css':
          case '.js':
            view.Type = 'Token';
            break;
        }
      }
      return view;
    }));
  }
  // TODO: For Code Editor,
  // getSig(viewKey: string, global: boolean, urlItems: ViewOrFileIdentifier[], initial: undefined): Signal<SourceView> {
  //   // Signal für die SourceView erstellen
  //   const temp = this.getSignal<SourceView>(appFilesAsset, {
  //     params: {
  //       appId: this.appId,
  //       global,
  //       ...this.templateIdOrPath(viewKey, global, urlItems),
  //     },
  //   }, initial);
  //   return computed(() => {
  //     const result = temp();
  //     if (result && result.Type.toLocaleLowerCase() === 'auto') {
  //       switch (result.Extension.toLocaleLowerCase()) {
  //         case '.cs':
  //         case '.cshtml':
  //           result.Type = 'Razor';
  //           break;
  //         case '.html':
  //         case '.css':
  //         case '.js':
  //           result.Type = 'Token';
  //           break;
  //       }
  //     }
  //     return result;
  //   });
  // }
  /** ViewKey is templateId or path */
  save(viewKey, global, view, urlItems) {
    return this.http.post(this.apiUrl(appFilesAsset), view, {
      params: {
        appId: this.appId,
        global,
        ...this.templateIdOrPath(viewKey, global, urlItems)
      }
    });
  }
  getAll(mask) {
    return this.getHttpApiUrl(appFilesAll, {
      params: {
        appId: this.appId,
        ...(mask && {
          mask
        })
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(({
      Files
    }) => {
      Files.forEach(file => {
        file.Shared ??= false;
      });
      return Files;
    }));
  }
  getWebApis() {
    return this.getHttpApiUrl(apiExplorerAppApiFiles, {
      params: {
        appId: this.appId
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(({
      files
    }) => {
      files.forEach(file => {
        file.isShared ??= false;
        file.isCompiled ??= false;
      });
      return files;
    })).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(files => {
      const webApis = files.map(file => {
        const splitIndex = file.path.lastIndexOf('/');
        const fileExtIndex = file.path.lastIndexOf('.');
        const folder = file.path.substring(0, splitIndex);
        const name = file.path.substring(splitIndex + 1, fileExtIndex);
        const webApi = {
          path: file.path,
          folder,
          name,
          isShared: file.isShared,
          endpointPath: file.endpointPath,
          isCompiled: file.isCompiled,
          edition: file.edition
        };
        return webApi;
      });
      return webApis;
    }));
  }
  getWebApisSig() {
    // Get the signal that retrieves the API files
    const apiFilesSignal = this.getSignal(apiExplorerAppApiFiles, {
      params: {
        appId: this.appId
      }
    });
    // Use a computed signal to transform the data
    const webApisSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {
      const files = apiFilesSignal()?.files;
      if (!files) return [];
      // Ensure the default values for `isShared` and `isCompiled`
      files.forEach(file => {
        file.isShared ??= false;
        file.isCompiled ??= false;
      });
      // Map the files to the desired WebApi format
      return files.map(file => {
        const splitIndex = file.path.lastIndexOf('/');
        const fileExtIndex = file.path.lastIndexOf('.');
        const folder = file.path.substring(0, splitIndex);
        const name = file.path.substring(splitIndex + 1, fileExtIndex);
        return {
          path: file.path,
          folder,
          name,
          isShared: file.isShared,
          endpointPath: file.endpointPath,
          isCompiled: file.isCompiled,
          edition: file.edition
        };
      });
    });
    return webApisSignal;
  }
  getWebApiDetails(apiPath) {
    return this.getHttpApiUrl(apiExplorerInspect, {
      params: {
        appId: this.appId,
        zoneId: this.zoneId,
        path: apiPath
      }
    });
  }
  getPredefinedTemplates(purpose, type) {
    return this.getHttpApiUrl(appFilesPredefinedTemplates, {
      params: {
        ...(purpose && {
          purpose
        }),
        ...(type && {
          type
        })
      }
    });
  }
  getPreview(path, global, templateKey) {
    return this.getHttpApiUrl(appFilesPreview, {
      params: {
        appId: this.appId,
        path,
        templateKey,
        global
      }
    });
  }
  create(path, global, templateKey) {
    return this.http.post(this.apiUrl(appFilesCreate), {}, {
      params: {
        appId: this.appId,
        global,
        purpose: 'auto',
        path,
        templateKey
      }
    });
  }
  templateIdOrPath(viewKey, global, urlItems) {
    if (/^[0-9]*$/g.test(viewKey)) {
      const path = urlItems.find(i => i.EntityId?.toString() === viewKey && i.IsShared === global)?.Path;
      return {
        templateId: viewKey,
        ...(path != null && {
          path
        })
      };
    } else {
      return {
        path: viewKey
      };
    }
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵSourceService_BaseFactory;
      return function SourceService_Factory(__ngFactoryType__) {
        return (ɵSourceService_BaseFactory || (ɵSourceService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](SourceService)))(__ngFactoryType__ || SourceService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: SourceService,
      factory: SourceService.ɵfac
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-projects_eav-ui_src_app_create-file-dialog_create-file-dialog_component_ts.js.map