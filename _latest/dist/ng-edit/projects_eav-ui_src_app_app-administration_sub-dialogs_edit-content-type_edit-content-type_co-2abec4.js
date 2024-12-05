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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ 19322);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core */ 88692);
/* harmony import */ var _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/field-hint/field-hint.component */ 43758);
/* harmony import */ var _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/constants/dropdown-insert-value.constant */ 5858);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/directives/click-stop-propagation.directive */ 39333);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/logging */ 34435);
/* harmony import */ var _shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/signals/signal.utilities */ 67993);
/* harmony import */ var _constants_content_type_patterns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/content-type.patterns */ 75063);
/* harmony import */ var _services_content_types_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/content-types.service */ 17693);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);

































function EditContentTypeComponent_Conditional_4_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-field-hint", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "This field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isError", true);
  }
}
function EditContentTypeComponent_Conditional_4_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-field-hint", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isError", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.contentTypeNameError);
  }
}
function EditContentTypeComponent_Conditional_4_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, EditContentTypeComponent_Conditional_4_Conditional_10_Conditional_0_Template, 2, 1, "app-field-hint", 19)(1, EditContentTypeComponent_Conditional_4_Conditional_10_Conditional_1_Template, 2, 2, "app-field-hint", 19);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const name_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](name_r3.errors.required ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](name_r3.errors.pattern ? 1 : -1);
  }
}
function EditContentTypeComponent_Conditional_4_For_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scopeOption_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", scopeOption_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", scopeOption_r4.name, " ");
  }
}
function EditContentTypeComponent_Conditional_4_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 7)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Shared Content Type (Ghost)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Note: this can't be edited in the UI, for now if you really know what you're doing, do it in the DB");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Uses Type Definition of: ", ctx_r1.contentType().SharedDefId, "");
  }
}
function EditContentTypeComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "form", 5, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function EditContentTypeComponent_Conditional_4_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 6)(3, "div")(4, "div", 7)(5, "mat-form-field", 8)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "input", 9, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function EditContentTypeComponent_Conditional_4_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.changeContentTypeName($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, EditContentTypeComponent_Conditional_4_Conditional_10_Template, 2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "mat-accordion")(12, "mat-expansion-panel")(13, "mat-expansion-panel-header")(14, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Advanced");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 7)(18, "div", 10)(19, "mat-form-field", 8)(20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Scope");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function EditContentTypeComponent_Conditional_4_Template_mat_select_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.changeScope($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterCreate"](23, EditContentTypeComponent_Conditional_4_For_24_Template, 2, 2, "mat-option", 12, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Other...");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditContentTypeComponent_Conditional_4_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.unlockScope());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "app-field-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, " The scope should almost never be changed - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "see help");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 7)(35, "mat-form-field", 8)(36, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "Static Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](38, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](39, EditContentTypeComponent_Conditional_4_Conditional_39_Template, 7, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "mat-dialog-actions", 16)(41, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditContentTypeComponent_Conditional_4_Template_button_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ngForm_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](1);
    const name_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](9);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pattern", ctx_r1.contentTypeNamePattern)("ngModel", ctx_r1.contentType().Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](name_r3.touched && name_r3.errors ? 10 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@.disabled", ctx_r1.disableAnimation());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r1.contentType().Scope)("disabled", ctx_r1.lockScope());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeater"](ctx_r1.scopeOptions());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx_r1.dropdownInsertValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("tippy", ctx_r1.lockScope() ? "Unlock" : "Lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.lockScope() ? "lock" : "lock_open", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r1.contentType().NameId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx_r1.contentType().SharedDefId ? 39 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ngForm_r5.form.valid || ctx_r1.loading());
  }
}
class EditContentTypeComponent {
  #contentTypeSvc;
  /** Parameters in case of rename; scope should always be set as we want to always create in that scope*/
  #scope;
  #typeNameId;
  constructor(dialog, route, snackBar) {
    this.dialog = dialog;
    this.route = route;
    this.snackBar = snackBar;
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_6__.classLog)({
      EditContentTypeComponent
    });
    this.hostClass = 'dialog-component';
    this.#contentTypeSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_content_types_service__WEBPACK_IMPORTED_MODULE_9__.ContentTypesService);
    /** Parameters in case of rename; scope should always be set as we want to always create in that scope*/
    this.#scope = this.route.snapshot.parent.paramMap.get('scope');
    this.#typeNameId = this.route.snapshot.paramMap.get('contentTypeStaticName');
    /** RegEx property to use in HTML */
    this.contentTypeNamePattern = _constants_content_type_patterns__WEBPACK_IMPORTED_MODULE_8__.contentTypeNamePattern;
    this.contentTypeNameError = _constants_content_type_patterns__WEBPACK_IMPORTED_MODULE_8__.contentTypeNameError;
    this.dropdownInsertValue = _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_2__.dropdownInsertValue;
    this.modeIsEdit = !!this.#typeNameId;
    this.lockScope = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_7__.signalObj)('lockScope', true);
    this.disableAnimation = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_7__.signalObj)('disableAnimation', true);
    this.loading = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_7__.signalObj)('loading', false);
    this.contentType = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_7__.signalObj)('contentType', {
      StaticName: '',
      // TODO: @2pp - use NameId: '', instead of StaticName
      Name: '',
      Description: '',
      Scope: this.#scope,
      ChangeNameId: false,
      NewNameId: ''
    });
    // TODO: @2dg this is a suggestion how to handle http requests in a more signal-like way
    // @2dg note that doing this in the constructor would often be better, but I wanted to prove this way work.
    // Scope Options Http will fire once when data arrives
    this.#scopeOptionsHttp = this.#contentTypeSvc.getScopesSig(undefined);
    this.#scopeOptionsManual = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_7__.signalObj)('scopeOptionsManual', []);
    this.scopeOptions = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_7__.computedObj)('scopeOptions', () => {
      const fromHttp = this.#scopeOptionsHttp();
      const manual = this.#scopeOptionsManual();
      return fromHttp ? manual.concat(this.#convertScopeOptions(fromHttp)) : manual;
    });
    this.log.a('constructor');
    this.#loadContentTypeOnEdit();
  }
  #loadContentTypeOnEdit() {
    // If we're in new mode, just keep empty values
    if (!this.modeIsEdit) return;
    // Preload infos about the current content type if we're in edit mode (not new)
    this.#contentTypeSvc.retrieveContentType(this.#typeNameId).subscribe(fromHttp => {
      this.contentType.set({
        ...fromHttp,
        ChangeNameId: false,
        NewNameId: fromHttp.NameId
      });
    });
  }
  // TODO: @2dg this is a suggestion how to handle http requests in a more signal-like way
  // @2dg note that doing this in the constructor would often be better, but I wanted to prove this way work.
  // Scope Options Http will fire once when data arrives
  #scopeOptionsHttp;
  #scopeOptionsManual;
  #convertScopeOptions(scopeOptions) {
    const newScopes = [];
    scopeOptions.forEach(scopeOption => {
      if (!newScopes.some(scope => scope.value === scopeOption.value)) newScopes.push(scopeOption);
    });
    if (!newScopes.some(scope => scope.value === this.#scope)) newScopes.push({
      name: this.#scope,
      value: this.#scope
    });
    return newScopes;
  }
  // workaround for angular component issue #13870
  ngAfterViewInit() {
    // timeout required to avoid ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => this.disableAnimation.set(false));
  }
  closeDialog() {
    this.dialog.close();
  }
  changeContentTypeName(newName) {
    this.contentType.set({
      ...this.contentType(),
      Name: newName
    });
  }
  changeScope(newScope) {
    if (newScope === _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_2__.dropdownInsertValue) {
      newScope = prompt('This is an advanced feature to show content-types of another scope. Don\'t use this if you don\'t know what you\'re doing, as content-types of other scopes are usually hidden for a good reason.') || _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.scopes.default.value;
      if (!this.scopeOptions().some(o => o.value === newScope)) {
        this.#scopeOptionsManual.set([{
          name: newScope,
          value: newScope
        }, ...this.scopeOptions()]);
      }
    }
    this.contentType.set({
      ...this.contentType(),
      Scope: newScope
    });
  }
  unlockScope() {
    this.lockScope.set(!this.lockScope());
    if (this.lockScope()) this.contentType.set({
      ...this.contentType(),
      Scope: this.#scope
    });
  }
  save() {
    this.loading.set(true);
    this.snackBar.open('Saving...');
    this.#contentTypeSvc.save(this.contentType()).subscribe(result => {
      this.loading.set(false);
      this.snackBar.open('Saved', null, {
        duration: 2000
      });
      this.closeDialog();
    });
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }
  static {
    this.ɵfac = function EditContentTypeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditContentTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: EditContentTypeComponent,
      selectors: [["app-edit-content-type"]],
      hostVars: 1,
      hostBindings: function EditContentTypeComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 2,
      consts: [["ngForm", "ngForm"], ["name", "ngModel"], [1, "eav-dialog"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], [3, "ngSubmit"], [1, "eav-dialog-content"], [1, "eav-edit-input"], ["color", "accent", 1, "eav-mat-form-field"], ["matInput", "", "type", "text", "required", "", "name", "Name", 3, "ngModelChange", "pattern", "ngModel"], [1, "eav-form-and-button"], ["name", "Scope", 3, "ngModelChange", "ngModel", "disabled"], [3, "value"], ["mat-icon-button", "", "type", "button", "matTextSuffix", "", 1, "eav-scope-button", 3, "click", "tippy"], ["href", "https://2sxc.org/help?tag=scope", "target", "_blank", "appClickStopPropagation", ""], ["matInput", "", "type", "text", "name", "StaticName", "disabled", "", 3, "ngModel"], ["align", "end"], ["mat-raised-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "type", "submit", "color", "accent", 3, "disabled"], [3, "isError"]],
      template: function EditContentTypeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, EditContentTypeComponent_Conditional_4_Template, 45, 12, "form");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.modeIsEdit ? "Edit Content Type" : "New Content Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx.contentType() ? 4 : -1);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionPanelDescription, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOptionModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogActions, _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_1__.FieldHintComponent, _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_4__.ClickStopPropagationDirective, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_5__.TippyDirective],
      styles: [".eav-edit-input[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n}\n\n.eav-form-and-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n}\n.eav-form-and-button[_ngcontent-%COMP%]   .eav-scope-button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9zdWItZGlhbG9ncy9lZGl0LWNvbnRlbnQtdHlwZS9lZGl0LWNvbnRlbnQtdHlwZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQUNGO0FBQUU7RUFDRSxnQkFBQTtBQUVKIiwic291cmNlc0NvbnRlbnQiOlsiLmVhdi1lZGl0LWlucHV0IHtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4uZWF2LWZvcm0tYW5kLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC5lYXYtc2NvcGUtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_sub-dialogs_edit-content-type_edit-content-type_co-2abec4.js.map