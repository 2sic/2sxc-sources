"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_sub-dialogs_edit-content-type_edit-content-type_co-2abec4"],{

/***/ 75063:
/*!***************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/constants/content-type.patterns.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentTypeNameError: () => (/* binding */ contentTypeNameError),
/* harmony export */   contentTypeNamePattern: () => (/* binding */ contentTypeNamePattern)
/* harmony export */ });
/**
 * This is for the angular UI.
 * Note that since ca. 2023 the last "-" literal character must be escaped using "\-"
 * because of changes in how browsers handle regular expressions, aka the /v flag.
 */
const contentTypeNameRegEx = /(^[A-Za-z][A-Za-z0-9]*$)|(^@[A-Za-z][A-Za-z0-9\-]*$)/;
const typeNameRegExCleaned = contentTypeNameRegEx.toString();
const removeSlashAtStartAndEnd = typeNameRegExCleaned.substring(1, typeNameRegExCleaned.toString().length - 1);
/**
 * The pattern determines what content-type names are allowed.
 * Basically it's A-Z and numbers after the first digit.
 * But there are two exceptions:
 *  - types describing an input-type begin with an `@` and can also contain `-` chars
 *  - types beginning with an `|` are very old type names for data-sources, they can contain anything!
 */
const contentTypeNamePattern = removeSlashAtStartAndEnd;
const contentTypeNameError = 'Standard letters and numbers are allowed. Must start with a letter.';
// 2020-04-29 2dm - temporarily used this pattern while renaming unique named types containing '|' chars
// export const contentTypeNamePattern = /(^[A-Za-z][A-Za-z0-9]+$)|(^@[A-Za-z][A-Za-z0-9-]*$)|(^\|.*$)/;

/***/ }),

/***/ 61855:
/*!*****************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/edit-content-type/edit-content-type.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditContentTypeComponent: () => (/* binding */ EditContentTypeComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/dropdown-insert-value.constant */ 5858);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _constants_content_type_patterns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/content-type.patterns */ 75063);
/* harmony import */ var _services_content_types_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/content-types.service */ 17693);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ 19322);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/field-hint/field-hint.component */ 43758);
/* harmony import */ var _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/directives/click-stop-propagation.directive */ 39333);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core */ 34447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);

































function EditContentTypeComponent_Conditional_0_Conditional_4_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-field-hint", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "This field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isError", true);
  }
}
function EditContentTypeComponent_Conditional_0_Conditional_4_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-field-hint", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isError", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.contentTypeNameError);
  }
}
function EditContentTypeComponent_Conditional_0_Conditional_4_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, EditContentTypeComponent_Conditional_0_Conditional_4_Conditional_10_Conditional_0_Template, 2, 1, "app-field-hint", 19)(1, EditContentTypeComponent_Conditional_0_Conditional_4_Conditional_10_Conditional_1_Template, 2, 2, "app-field-hint", 19);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const name_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](0, name_r3.errors.required ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](1, name_r3.errors.pattern ? 1 : -1);
  }
}
function EditContentTypeComponent_Conditional_0_Conditional_4_For_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scopeOption_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", scopeOption_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", scopeOption_r4.name, " ");
  }
}
function EditContentTypeComponent_Conditional_0_Conditional_4_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 7)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Shared Content Type (Ghost)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Note: this can't be edited in the UI, for now if you really know what you're doing, do it in the DB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vm_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Uses Type Definition of: ", vm_r5.contentType.SharedDefId, "");
  }
}
function EditContentTypeComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 5, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function EditContentTypeComponent_Conditional_0_Conditional_4_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 6)(3, "div")(4, "div", 7)(5, "mat-form-field", 8)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "input", 9, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function EditContentTypeComponent_Conditional_0_Conditional_4_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.changeContentTypeName($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, EditContentTypeComponent_Conditional_0_Conditional_4_Conditional_10_Template, 2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-accordion")(12, "mat-expansion-panel")(13, "mat-expansion-panel-header")(14, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Advanced");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 7)(18, "div", 10)(19, "mat-form-field", 8)(20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Scope");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function EditContentTypeComponent_Conditional_0_Conditional_4_Template_mat_select_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.changeScope($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](23, EditContentTypeComponent_Conditional_0_Conditional_4_For_24_Template, 2, 2, "mat-option", 12, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Other...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EditContentTypeComponent_Conditional_0_Conditional_4_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.unlockScope());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "app-field-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, " The scope should almost never be changed - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "see help");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 7)(35, "mat-form-field", 8)(36, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Static Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, EditContentTypeComponent_Conditional_0_Conditional_4_Conditional_39_Template, 7, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "mat-dialog-actions", 16)(41, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EditContentTypeComponent_Conditional_0_Conditional_4_Template_button_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ngForm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](1);
    const name_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](9);
    const vm_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pattern", ctx_r1.contentTypeNamePattern)("ngModel", vm_r5.contentType.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](10, name_r3.touched && name_r3.errors ? 10 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("@.disabled", vm_r5.disableAnimation);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", vm_r5.contentType.Scope)("disabled", vm_r5.lockScope);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](vm_r5.scopeOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r1.dropdownInsertValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tippy", vm_r5.lockScope ? "Unlock" : "Lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", vm_r5.lockScope ? "lock" : "lock_open", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", vm_r5.contentType.StaticName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](39, vm_r5.contentType.SharedDefId ? 39 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ngForm_r6.form.valid || vm_r5.loading);
  }
}
function EditContentTypeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, EditContentTypeComponent_Conditional_0_Conditional_4_Template, 45, 12, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.contentTypeStaticName ? "Edit Content Type" : "New Content Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](4, ctx.contentType ? 4 : -1);
  }
}
class EditContentTypeComponent {
  constructor(dialogRef, route, snackBar) {
    this.dialogRef = dialogRef;
    this.route = route;
    this.snackBar = snackBar;
    this.hostClass = 'dialog-component';
    this.contentTypesService = (0,_core__WEBPACK_IMPORTED_MODULE_7__.transient)(_services_content_types_service__WEBPACK_IMPORTED_MODULE_3__.ContentTypesService);
    this.contentTypeStaticName = this.route.snapshot.paramMap.get('contentTypeStaticName');
    /** RegEx property to use in HTML */
    this.contentTypeNamePattern = _constants_content_type_patterns__WEBPACK_IMPORTED_MODULE_2__.contentTypeNamePattern;
    this.contentTypeNameError = _constants_content_type_patterns__WEBPACK_IMPORTED_MODULE_2__.contentTypeNameError;
    this.dropdownInsertValue = _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_0__.dropdownInsertValue;
    this.contentType$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(null);
    this.lockScope$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(true);
    this.scopeOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(null);
    this.disableAnimation$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(true);
    this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(false);
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([this.contentType$, this.lockScope$, this.scopeOptions$, this.disableAnimation$, this.loading$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(([contentType, lockScope, scopeOptions, disableAnimation, loading]) => ({
      contentType,
      lockScope,
      scopeOptions,
      disableAnimation,
      loading
    })));
    this.scope = this.route.snapshot.parent.paramMap.get('scope');
  }
  ngOnInit() {
    const contentType$ = this.contentTypeStaticName ? this.contentTypesService.retrieveContentType(this.contentTypeStaticName).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(contentType => {
      const contentTypeEdit = {
        ...contentType,
        ChangeStaticName: false,
        NewStaticName: contentType.StaticName
      };
      return contentTypeEdit;
    })) : (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)({
      StaticName: '',
      Name: '',
      Description: '',
      Scope: this.scope,
      ChangeStaticName: false,
      NewStaticName: ''
    });
    const scopes$ = this.contentTypesService.getScopes();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([contentType$, scopes$]).subscribe(([contentType, scopeOptions]) => {
      this.contentType$.next(contentType);
      const newScopes = [...(this.scopeOptions$.value ?? [])];
      scopeOptions.forEach(scopeOption => {
        if (!newScopes.some(scope => scope.value === scopeOption.value)) {
          newScopes.push(scopeOption);
        }
      });
      if (!newScopes.some(scope => scope.value === this.scope)) {
        const newScopeOption = {
          name: this.scope,
          value: this.scope
        };
        newScopes.push(newScopeOption);
      }
      this.scopeOptions$.next(newScopes);
    });
  }
  ngOnDestroy() {
    this.contentType$.complete();
    this.lockScope$.complete();
    this.scopeOptions$.complete();
    this.disableAnimation$.complete();
    this.loading$.complete();
  }
  // workaround for angular component issue #13870
  ngAfterViewInit() {
    // timeout required to avoid ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => this.disableAnimation$.next(false));
  }
  closeDialog() {
    this.dialogRef.close();
  }
  changeContentTypeName(newName) {
    this.contentType$.next({
      ...this.contentType$.value,
      Name: newName
    });
  }
  changeScope(newScope) {
    if (newScope === _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_0__.dropdownInsertValue) {
      newScope = prompt('This is an advanced feature to show content-types of another scope. Don\'t use this if you don\'t know what you\'re doing, as content-types of other scopes are usually hidden for a good reason.') || _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__.eavConstants.scopes.default.value;
      if (!this.scopeOptions$.value.some(option => option.value === newScope)) {
        const newScopeOption = {
          name: newScope,
          value: newScope
        };
        this.scopeOptions$.next([newScopeOption, ...this.scopeOptions$.value]);
      }
    }
    this.contentType$.next({
      ...this.contentType$.value,
      Scope: newScope
    });
  }
  unlockScope() {
    this.lockScope$.next(!this.lockScope$.value);
    if (this.lockScope$.value) {
      this.contentType$.next({
        ...this.contentType$.value,
        Scope: this.scope
      });
    }
  }
  save() {
    this.loading$.next(true);
    this.snackBar.open('Saving...');
    this.contentTypesService.save(this.contentType$.value).subscribe(result => {
      this.loading$.next(false);
      this.snackBar.open('Saved', null, {
        duration: 2000
      });
      this.closeDialog();
    });
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }
  static #_ = this.ɵfac = function EditContentTypeComponent_Factory(t) {
    return new (t || EditContentTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: EditContentTypeComponent,
    selectors: [["app-edit-content-type"]],
    hostVars: 1,
    hostBindings: function EditContentTypeComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵhostProperty"]("className", ctx.hostClass);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [["ngForm", "ngForm"], ["name", "ngModel"], [1, "eav-dialog"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], [3, "ngSubmit"], [1, "eav-dialog-content"], [1, "eav-edit-input"], ["color", "accent", 1, "eav-mat-form-field"], ["matInput", "", "type", "text", "required", "", "name", "Name", 3, "ngModelChange", "pattern", "ngModel"], [1, "eav-form-and-button"], ["name", "Scope", 3, "ngModelChange", "ngModel", "disabled"], [3, "value"], ["mat-icon-button", "", "type", "button", "matTextSuffix", "", 1, "eav-scope-button", 3, "click", "tippy"], ["href", "https://2sxc.org/help?tag=scope", "target", "_blank", "appClickStopPropagation", ""], ["matInput", "", "type", "text", "name", "StaticName", "disabled", "", 3, "ngModel"], ["align", "end"], ["mat-raised-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "type", "submit", "color", "accent", 3, "disabled"], [3, "isError"]],
    template: function EditContentTypeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, EditContentTypeComponent_Conditional_0_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionPanelDescription, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOptionModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_24__.AsyncPipe, _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_4__.FieldHintComponent, _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_5__.ClickStopPropagationDirective, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_6__.TippyDirective],
    styles: [".eav-edit-input[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n}\n\n.eav-form-and-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n}\n.eav-form-and-button[_ngcontent-%COMP%]   .eav-scope-button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9zdWItZGlhbG9ncy9lZGl0LWNvbnRlbnQtdHlwZS9lZGl0LWNvbnRlbnQtdHlwZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQUNGO0FBQUU7RUFDRSxnQkFBQTtBQUVKIiwic291cmNlc0NvbnRlbnQiOlsiLmVhdi1lZGl0LWlucHV0IHtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4uZWF2LWZvcm0tYW5kLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC5lYXYtc2NvcGUtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 43758:
/*!**************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/components/field-hint/field-hint.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldHintComponent: () => (/* binding */ FieldHintComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);




const _c0 = ["*"];
const _c1 = a0 => ({
  "hint-box__short": a0
});
function FieldHintComponent_Case_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FieldHintComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldHintComponent_Case_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const content_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", content_r2);
  }
}
function FieldHintComponent_Case_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FieldHintComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldHintComponent_Case_2_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const content_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", content_r2);
  }
}
function FieldHintComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}
class FieldHintComponent {
  constructor() {
    this.isError = false;
    this.isShort = true;
  }
  toggleIsShort() {
    this.isShort = !this.isShort;
  }
  static #_ = this.ɵfac = function FieldHintComponent_Factory(t) {
    return new (t || FieldHintComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FieldHintComponent,
    selectors: [["app-field-hint"]],
    inputs: {
      isError: "isError"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 5,
    vars: 4,
    consts: [["content", ""], [1, "hint-box", 3, "click", "ngClass"], [4, "ngTemplateOutlet"]],
    template: function FieldHintComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldHintComponent_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.toggleIsShort());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldHintComponent_Case_1_Template, 2, 1)(2, FieldHintComponent_Case_2_Template, 2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FieldHintComponent_ng_template_3_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx.isShort));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, (tmp_2_0 = ctx.isError) === false ? 1 : tmp_2_0 === true ? 2 : -1);
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatError, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet],
    styles: [".hint-box[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: block;\n}\n.hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZpZWxkLWhpbnQvZmllbGQtaGludC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjtBQUNFOztFQUVFLGVBQUE7RUFDQSxjQUFBO0FBQ0o7QUFJSTs7RUFFRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFGTiIsInNvdXJjZXNDb250ZW50IjpbIi5oaW50LWJveCB7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG5cclxuICAubWF0LW1kYy1mb3JtLWZpZWxkLWhpbnQsXHJcbiAgLm1hdC1tZGMtZm9ybS1maWVsZC1lcnJvciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICZfX3Nob3J0IHtcclxuXHJcbiAgICAubWF0LW1kYy1mb3JtLWZpZWxkLWhpbnQsXHJcbiAgICAubWF0LW1kYy1mb3JtLWZpZWxkLWVycm9yIHtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 39333:
/*!***************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/directives/click-stop-propagation.directive.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClickStopPropagationDirective: () => (/* binding */ ClickStopPropagationDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

const logThis = false;
class ClickStopPropagationDirective {
  constructor() {
    if (logThis) console.log('ClickStopPropagationDirective.constructor');
  }
  onClick(event) {
    if (logThis) console.log('ClickStopPropagationDirective.onClick', event);
    event.stopPropagation();
  }
  static #_ = this.ɵfac = function ClickStopPropagationDirective_Factory(t) {
    return new (t || ClickStopPropagationDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: ClickStopPropagationDirective,
    selectors: [["", "appClickStopPropagation", ""]],
    hostBindings: function ClickStopPropagationDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickStopPropagationDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    standalone: true
  });
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_sub-dialogs_edit-content-type_edit-content-type_co-2abec4.js.map