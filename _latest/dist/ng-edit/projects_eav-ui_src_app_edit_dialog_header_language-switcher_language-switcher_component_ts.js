"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_edit_dialog_header_language-switcher_language-switcher_component_ts"],{

/***/ 9408:
/*!*********************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/dialog/header/language-settings-dialog/language-settings-dialog.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageSettingsDialogComponent: () => (/* binding */ LanguageSettingsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var projects_eav_ui_src_app_shared_services_user_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/eav-ui/src/app/shared/services/user-language.service */ 7167);
/* harmony import */ var _core_transient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../core/transient */ 12938);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _localization_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../localization/language.service */ 9977);
/* harmony import */ var _language_switcher_language_switcher_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language-switcher/language-switcher.helpers */ 11427);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);

















const _forTrack0 = ($index, $item) => $item.Code;
function LanguageSettingsDialogComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const o_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", o_r1.Code.toLocaleLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](o_r1.label);
  }
}
function LanguageSettingsDialogComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r2.Code.toLocaleLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](option_r2.label);
  }
}
class LanguageSettingsDialogComponent {
  /** Language SVC - to get list of all possible languages */
  #languageSvc;
  constructor() {
    /** Language SVC - to get list of all possible languages */
    this.#languageSvc = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_localization_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService);
    /** User language service - to get/set the current language */
    this.userLanguageSvc = (0,_core_transient__WEBPACK_IMPORTED_MODULE_1__.transient)(projects_eav_ui_src_app_shared_services_user_language_service__WEBPACK_IMPORTED_MODULE_0__.UserLanguageService);
    /** Dialog reference, for close */
    this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef);
    this.options = (0,_language_switcher_language_switcher_helpers__WEBPACK_IMPORTED_MODULE_4__.getLanguageOptions)(this.#languageSvc.getAll());
  }
  static {
    this.ɵfac = function LanguageSettingsDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LanguageSettingsDialogComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: LanguageSettingsDialogComponent,
      selectors: [["app-separate-languages-header"]],
      decls: 30,
      vars: 6,
      consts: [[1, "eav-dialog"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [1, "eav-dialog-content"], ["tippy", "Preferred language for texts and labels in the form", "appearance", "fill", "color", "accent"], [3, "selectionChange", "value", "disabled"], ["value", ""], [3, "value"], ["tippy", "Preferred language for buttons and controls", "appearance", "fill", "color", "accent"]],
      template: function LanguageSettingsDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Language Settings (BETA)");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LanguageSettingsDialogComponent_Template_button_click_4_listener() {
            return ctx.dialog.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4)(8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " By default, buttons and labels will use the current language. Here you can choose a different behavior. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Your Language Preferences");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-form-field", 5)(13, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-select", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function LanguageSettingsDialogComponent_Template_mat_select_selectionChange_15_listener($event) {
            return ctx.userLanguageSvc.save("form", $event.value);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Use current language (default)");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](18, LanguageSettingsDialogComponent_For_19_Template, 2, 2, "mat-option", 8, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "br")(21, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-form-field", 9)(23, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-select", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function LanguageSettingsDialogComponent_Template_mat_select_selectionChange_25_listener($event) {
            return ctx.userLanguageSvc.save("ui", $event.value);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Use current language (default)");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](28, LanguageSettingsDialogComponent_For_29_Template, 2, 2, "mat-option", 8, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_5_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Form Labels and Help Texts ", ctx.userLanguageSvc.isForced("form") ? "(disabled)" : "", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.userLanguageSvc.isForced("form") ? ctx.userLanguageSvc.value("form") : ctx.userLanguageSvc.stored("form"))("disabled", ctx.userLanguageSvc.isForced("form"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.options);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Buttons and Controls ", ctx.userLanguageSvc.isForced("ui") ? "(disabled)" : "", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", (tmp_5_0 = ctx.userLanguageSvc.isForced("ui") ? ctx.userLanguageSvc.value("ui") : ctx.userLanguageSvc.stored("ui")) !== null && tmp_5_0 !== undefined ? tmp_5_0 : "")("disabled", ctx.userLanguageSvc.isForced("ui"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.options);
        }
      },
      dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_2__.TippyDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption],
      styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2VkaXQvZGlhbG9nL2hlYWRlci9sYW5ndWFnZS1zZXR0aW5ncy1kaWFsb2cvbGFuZ3VhZ2Utc2V0dGluZ3MtZGlhbG9nLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 23873:
/*!************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/dialog/header/language-switcher/center-selected.helper.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CenterSelectedHelper: () => (/* binding */ CenterSelectedHelper)
/* harmony export */ });
class CenterSelectedHelper {
  constructor(ngZone, header) {
    this.ngZone = ngZone;
    this.header = header;
    this.moveThreshold = 2; // pixels for which header can be scrolled while clicking to still register as click
    this.stopClick = false;
    this.eventListeners = [];
    this.ngZone.runOutsideAngular(() => {
      const checkIfMouseMoved = event => {
        this.checkIfMouseMoved(event);
      };
      document.addEventListener('mouseup', checkIfMouseMoved, {
        passive: true
      });
      this.eventListeners.push({
        element: document,
        type: 'mouseup',
        listener: checkIfMouseMoved
      });
    });
  }
  lngButtonDown(event) {
    this.ngZone.runOutsideAngular(() => {
      this.saveInitialPosition(event);
    });
  }
  lngButtonClick(event) {
    this.ngZone.runOutsideAngular(() => {
      this.doMove(event);
    });
  }
  stopClickIfMouseMoved() {
    return this.stopClick;
  }
  destroy() {
    this.ngZone.runOutsideAngular(() => {
      this.eventListeners.forEach(({
        element,
        type,
        listener
      }) => {
        element.removeEventListener(type, listener);
      });
      this.eventListeners = null;
    });
  }
  saveInitialPosition(event) {
    this.stopClick = false;
    this.positionX = event.pageX;
    this.positionY = event.pageY;
  }
  checkIfMouseMoved(event) {
    if (!this.positionX || !this.positionY) {
      this.stopClick = false;
      return;
    }
    const newPositionX = event.pageX;
    const newPositionY = event.pageY;
    const newTotal = newPositionX + newPositionY;
    const oldTotal = this.positionX + this.positionY;
    this.stopClick = Math.abs(oldTotal - newTotal) > this.moveThreshold;
    this.positionX = null;
    this.positionY = null;
  }
  doMove(event) {
    if (this.stopClick) return;
    const button = event.target;
    const buttonOffset = button.getBoundingClientRect().left;
    const buttonWidth = button.getBoundingClientRect().width;
    const headerOffset = this.header.getBoundingClientRect().left;
    const headerWidth = this.header.getBoundingClientRect().width;
    const currentPosition = buttonOffset + buttonWidth / 2;
    const moveTo = headerOffset + headerWidth / 2;
    this.header.scrollLeft += currentPosition - moveTo;
  }
}

/***/ }),

/***/ 58161:
/*!*****************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/dialog/header/language-switcher/language-switcher.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageSwitcherComponent: () => (/* binding */ LanguageSwitcherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var projects_eav_ui_src_app_shared_services_user_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/eav-ui/src/app/shared/services/user-language.service */ 7167);
/* harmony import */ var _core_transient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../core/transient */ 12938);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/logging */ 34435);
/* harmony import */ var _form_form_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../form/form-config.service */ 8265);
/* harmony import */ var _form_form_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../form/form-language.service */ 32093);
/* harmony import */ var _localization_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../localization/language.service */ 9977);
/* harmony import */ var _language_settings_dialog_language_settings_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../language-settings-dialog/language-settings-dialog */ 9408);
/* harmony import */ var _center_selected_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./center-selected.helper */ 23873);
/* harmony import */ var _language_switcher_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./language-switcher.helpers */ 11427);
/* harmony import */ var _mouse_scroll_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mouse-scroll.helper */ 31289);
/* harmony import */ var _show_shadows_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./show-shadows.helper */ 79187);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 12587);


























const _c0 = ["scrollable"];
const _c1 = ["leftShadow"];
const _c2 = ["rightShadow"];
function LanguageSwitcherComponent_For_8_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LanguageSwitcherComponent_For_8_Conditional_0_Conditional_2_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.languageSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function LanguageSwitcherComponent_For_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, LanguageSwitcherComponent_For_8_Conditional_0_Conditional_2_Template, 2, 0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const langButton_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("tippy", langButton_r3.Culture)("tippyDisabled", ctx_r1.disabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", langButton_r3.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx_r1.userLanguageSvc.userConfigurable() ? 2 : -1);
  }
}
function LanguageSwitcherComponent_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("mousedown", function LanguageSwitcherComponent_For_8_Conditional_1_Template_button_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.lngButtonMouseDown($event));
    })("click", function LanguageSwitcherComponent_For_8_Conditional_1_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);
      const langButton_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.lngButtonClick($event, langButton_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const langButton_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("tippy", langButton_r3.Culture)("tippyDisabled", ctx_r1.disabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", langButton_r3.label, " ");
  }
}
function LanguageSwitcherComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, LanguageSwitcherComponent_For_8_Conditional_0_Template, 3, 4, "button", 7)(1, LanguageSwitcherComponent_For_8_Conditional_1_Template, 2, 3, "button", 8);
  }
  if (rf & 2) {
    const langButton_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx_r1.current() === langButton_r3.NameId ? 0 : 1);
  }
}
class LanguageSwitcherComponent {
  constructor(languageService, languageInstanceService, ngZone, formConfig, snackBar, translate, matDialog, viewContainerRef) {
    this.languageService = languageService;
    this.languageInstanceService = languageInstanceService;
    this.ngZone = ngZone;
    this.formConfig = formConfig;
    this.snackBar = snackBar;
    this.translate = translate;
    this.matDialog = matDialog;
    this.viewContainerRef = viewContainerRef;
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_3__.classLog)({
      LanguageSwitcherComponent
    });
    this.disabled = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.input)();
    this.current = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.computed)(() => this.formConfig.language().current);
    this.buttons = (0,_language_switcher_helpers__WEBPACK_IMPORTED_MODULE_9__.getLanguageOptions)(this.languageService.getAll());
    this.userLanguageSvc = (0,_core_transient__WEBPACK_IMPORTED_MODULE_1__.transient)(projects_eav_ui_src_app_shared_services_user_language_service__WEBPACK_IMPORTED_MODULE_0__.UserLanguageService);
  }
  ngAfterViewInit() {
    this.showShadowsHelper = new _show_shadows_helper__WEBPACK_IMPORTED_MODULE_11__.ShowShadowsHelper(this.ngZone, this.headerRef.nativeElement, this.leftShadowRef.nativeElement, this.rightShadowRef.nativeElement);
    this.mouseScrollHelper = new _mouse_scroll_helper__WEBPACK_IMPORTED_MODULE_10__.MouseScrollHelper(this.ngZone, this.headerRef.nativeElement, () => this.disabled());
    this.centerSelectedHelper = new _center_selected_helper__WEBPACK_IMPORTED_MODULE_8__.CenterSelectedHelper(this.ngZone, this.headerRef.nativeElement);
  }
  ngOnDestroy() {
    this.centerSelectedHelper?.destroy();
    this.mouseScrollHelper?.destroy();
    this.showShadowsHelper?.destroy();
  }
  lngButtonMouseDown(event) {
    this.centerSelectedHelper.lngButtonDown(event);
  }
  lngButtonClick(event, language) {
    const l = this.log.fn('lngButtonClick');
    if (this.disabled()) {
      this.snackBar.open(this.translate.instant('Message.CantSwitchLanguage'), null, {
        duration: 3000,
        verticalPosition: 'top'
      });
      return l.end('disabled');
    }
    this.centerSelectedHelper.lngButtonClick(event);
    if (!this.centerSelectedHelper.stopClickIfMouseMoved()) {
      this.languageInstanceService.setCurrent(this.formConfig.config.formId, language.NameId);
      // Also set the UI language
      const lngCode = this.userLanguageSvc.uiCode(language.NameId);
      this.translate.use(lngCode);
    }
  }
  languageSettings() {
    this.matDialog.open(_language_settings_dialog_language_settings_dialog__WEBPACK_IMPORTED_MODULE_7__.LanguageSettingsDialogComponent, {
      autoFocus: false,
      viewContainerRef: this.viewContainerRef,
      width: '750px',
      position: {
        top: '50px'
      }
    });
  }
  static {
    this.ɵfac = function LanguageSwitcherComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LanguageSwitcherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_localization_language_service__WEBPACK_IMPORTED_MODULE_6__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_form_form_language_service__WEBPACK_IMPORTED_MODULE_5__.FormLanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_form_form_config_service__WEBPACK_IMPORTED_MODULE_4__.FormConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewContainerRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: LanguageSwitcherComponent,
      selectors: [["app-language-switcher"]],
      viewQuery: function LanguageSwitcherComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c2, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.headerRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.leftShadowRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.rightShadowRef = _t.first);
        }
      },
      inputs: {
        disabled: [1, "disabled"]
      },
      decls: 9,
      vars: 1,
      consts: [["leftShadow", ""], ["rightShadow", ""], ["scrollable", ""], [1, "scrollable__overlay"], [1, "scrollable__overlay--left-shadow"], [1, "scrollable__overlay--right-shadow"], ["tippyTranslate", "Message.CantSwitchLanguage", 1, "scrollable", "lang-switch", 3, "tippyDisabled"], ["mat-flat-button", "", "color", "accent", 1, "lang-switch__button", "hover-area", 3, "tippy", "tippyDisabled"], ["mat-flat-button", "", "color", "white", 1, "lang-switch__button", 3, "tippy", "tippyDisabled"], ["iconPositionEnd", "", "tippy", "Language Settings", 1, "hover-only"], ["iconPositionEnd", "", "tippy", "Language Settings", 1, "hover-only", 3, "click"], ["mat-flat-button", "", "color", "white", 1, "lang-switch__button", 3, "mousedown", "click", "tippy", "tippyDisabled"]],
      template: function LanguageSwitcherComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "div", 4, 0)(3, "div", 5, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 6, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterCreate"](7, LanguageSwitcherComponent_For_8_Template, 2, 1, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("tippyDisabled", !ctx.disabled());
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeater"](ctx.buttons);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_2__.TippyDirective],
      styles: [".scrollable__overlay[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n.scrollable__overlay--left-shadow[_ngcontent-%COMP%], .scrollable__overlay--right-shadow[_ngcontent-%COMP%] {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  display: block;\n  z-index: 1;\n  pointer-events: none;\n  height: 100%;\n  width: 80px;\n  background-image: linear-gradient(90deg, white 8px, rgba(255, 255, 255, 0));\n}\n@media (max-width: 600px) {\n  .scrollable__overlay--left-shadow[_ngcontent-%COMP%], .scrollable__overlay--right-shadow[_ngcontent-%COMP%] {\n    width: 24px;\n  }\n}\n.scrollable__overlay--right-shadow[_ngcontent-%COMP%] {\n  right: 0;\n  background-image: linear-gradient(270deg, white 8px, rgba(255, 255, 255, 0));\n}\n\n.scrollable[_ngcontent-%COMP%] {\n  overflow: hidden;\n  scroll-behavior: smooth;\n  height: 100%;\n  touch-action: none;\n}\n\n.lang-switch[_ngcontent-%COMP%] {\n  display: flex;\n}\n.lang-switch__button[_ngcontent-%COMP%] {\n  height: 100%;\n  flex-shrink: 0;\n  border-radius: 0;\n  margin-left: 0 !important;\n  color: rgba(0, 0, 0, 0.4);\n  border-bottom: none;\n  font-size: 12px;\n  line-height: 54px;\n  padding: 0 6px;\n  background-color: white !important;\n}\n.lang-switch__button.mat-accent[_ngcontent-%COMP%] {\n  color: #002753;\n  border-bottom: 2px solid #002753;\n  background-color: inherit;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.hover-area[_ngcontent-%COMP%]   .hover-only[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.hover-area[_ngcontent-%COMP%]:hover   .hover-only[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2VkaXQvZGlhbG9nL2hlYWRlci9sYW5ndWFnZS1zd2l0Y2hlci9sYW5ndWFnZS1zd2l0Y2hlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQURGO0FBR0U7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBTUEsMkVBQUE7QUFQSjtBQUdJO0VBWEY7SUFZSSxXQUFBO0VBQUo7QUFDRjtBQUtFO0VBQ0UsUUFBQTtFQUNBLDRFQUFBO0FBSEo7O0FBT0E7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0FBSkY7QUFNRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUFKSjtBQU1JO0VBQ0UsY0FBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7QUFKTjs7QUFTQTtFQUNFLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxhQUFBO0FBTkY7O0FBWUE7RUFDRSxjQUFBO0FBVEYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuLnNjcm9sbGFibGVfX292ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICYtLWxlZnQtc2hhZG93LFxyXG4gICYtLXJpZ2h0LXNoYWRvdyB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogODBweDtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB3aGl0ZSA4cHgsIHJnYmEod2hpdGUsIDApKTtcclxuICB9XHJcblxyXG4gICYtLXJpZ2h0LXNoYWRvdyB7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHdoaXRlIDhweCwgcmdiYSh3aGl0ZSwgMCkpO1xyXG4gIH1cclxufVxyXG5cclxuLnNjcm9sbGFibGUge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmxhbmctc3dpdGNoIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAmX19idXR0b24ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAwMDAwNjY7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDU0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgJi5tYXQtYWNjZW50IHtcclxuICAgICAgY29sb3I6ICMwMDI3NTM7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAyNzUzO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uaG92ZXItYXJlYSAuaG92ZXItb25seSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICAvLyB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLy8gb3BhY2l0eTogMDtcclxuICAvLyB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuNXMgbGluZWFyO1xyXG59XHJcblxyXG4uaG92ZXItYXJlYTpob3ZlciAuaG92ZXItb25seSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLy8gdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAvLyBvcGFjaXR5OiAxO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 11427:
/*!***************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/dialog/header/language-switcher/language-switcher.helpers.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLanguageOptions: () => (/* binding */ getLanguageOptions)
/* harmony export */ });
/** Calculates properties of language buttons, e.g. name to be displayed */
function getLanguageOptions(languages) {
  const languageButtons = [];
  const shortCodesCount = {};
  // count the number of repetitions of the same language without region key
  // e.g. English (United States) and English (Australia) are both English
  languages.forEach(language => {
    const shortName = removeRegionName(language.Culture);
    if (shortCodesCount[shortName]) shortCodesCount[shortName]++;else shortCodesCount[shortName] = 1;
  });
  // if language repeats, append language key to name which will be displayed
  languages.forEach(language => {
    const shortCode = removeRegionName(language.Culture);
    languageButtons.push({
      ...language,
      label: shortCodesCount[shortCode] > 1 ? `${shortCode} (${language.NameId})` : shortCode
    });
  });
  return languageButtons;
}
/** Returns name without region, e.g. ENGLISH from English (United Stated) */
function removeRegionName(languageName) {
  return languageName.substring(0, languageName.includes('(') ? languageName.indexOf('(') - 1 : 100).toLocaleUpperCase();
}

/***/ }),

/***/ 31289:
/*!*********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/dialog/header/language-switcher/mouse-scroll.helper.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MouseScrollHelper: () => (/* binding */ MouseScrollHelper)
/* harmony export */ });
class MouseScrollHelper {
  constructor(ngZone, header, areButtonsDisabled) {
    this.ngZone = ngZone;
    this.header = header;
    this.areButtonsDisabled = areButtonsDisabled;
    this.eventListeners = [];
    this.ngZone.runOutsideAngular(() => {
      const registerScroll = this.registerScroll.bind(this);
      this.header.addEventListener('pointerdown', registerScroll, {
        passive: true
      });
      this.headerDownListener = {
        element: this.header,
        type: 'pointerdown',
        listener: registerScroll
      };
    });
  }
  destroy() {
    this.ngZone.runOutsideAngular(() => {
      this.headerDownListener.element.removeEventListener(this.headerDownListener.type, this.headerDownListener.listener);
      this.headerDownListener = null;
      this.eventListeners.forEach(({
        element,
        type,
        listener
      }) => {
        element.removeEventListener(type, listener);
      });
      this.eventListeners = null;
    });
    this.ngZone = null;
    this.header = null;
    this.areButtonsDisabled = null;
  }
  registerScroll(event) {
    const disabled = this.areButtonsDisabled();
    if (disabled || event.button !== 0) return;
    window.getSelection().removeAllRanges();
    this.oldScrollBehavior = getComputedStyle(this.header).getPropertyValue('scroll-behavior');
    this.header.style.scrollBehavior = 'auto';
    this.positionX = event.pageX;
    const doScroll = e => {
      this.doScroll(e);
    };
    const removeScroll = () => {
      this.removeScroll();
    };
    document.addEventListener('pointermove', doScroll, {
      passive: true
    });
    document.addEventListener('pointerup', removeScroll, {
      passive: true
    });
    document.addEventListener('pointerleave', removeScroll, {
      passive: true
    });
    this.eventListeners.push({
      element: document,
      type: 'pointermove',
      listener: doScroll
    }, {
      element: document,
      type: 'pointerup',
      listener: removeScroll
    }, {
      element: document,
      type: 'pointerleave',
      listener: removeScroll
    });
  }
  removeScroll() {
    this.header.style.scrollBehavior = this.oldScrollBehavior;
    this.eventListeners.forEach(({
      element,
      type,
      listener
    }) => {
      element.removeEventListener(type, listener);
    });
    this.eventListeners.splice(0, this.eventListeners.length);
  }
  doScroll(event) {
    const newPositionX = event.pageX;
    if (newPositionX < this.positionX) {
      this.header.scrollLeft += this.positionX - newPositionX;
    } else if (newPositionX > this.positionX) {
      this.header.scrollLeft += -(newPositionX - this.positionX);
    }
    this.positionX = newPositionX;
  }
}

/***/ }),

/***/ 79187:
/*!*********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/dialog/header/language-switcher/show-shadows.helper.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShowShadowsHelper: () => (/* binding */ ShowShadowsHelper)
/* harmony export */ });
class ShowShadowsHelper {
  constructor(ngZone, header, leftShadow, rightShadow) {
    this.ngZone = ngZone;
    this.header = header;
    this.leftShadow = leftShadow;
    this.rightShadow = rightShadow;
    this.hidden = 'hidden'; // CSS class which hides shadows
    this.eventListeners = [];
    this.ngZone.runOutsideAngular(() => {
      this.calculateShadows();
      const calculateShadows = () => {
        this.calculateShadows();
      };
      this.header.addEventListener('scroll', calculateShadows, {
        passive: true
      });
      window.addEventListener('resize', calculateShadows, {
        passive: true
      });
      this.eventListeners.push({
        element: this.header,
        type: 'scroll',
        listener: calculateShadows
      }, {
        element: window,
        type: 'resize',
        listener: calculateShadows
      });
    });
  }
  destroy() {
    this.ngZone.runOutsideAngular(() => {
      this.eventListeners.forEach(({
        element,
        type,
        listener
      }) => {
        element.removeEventListener(type, listener);
      });
      this.eventListeners = null;
    });
    this.ngZone = null;
    this.header = null;
    this.leftShadow = null;
    this.rightShadow = null;
  }
  calculateShadows() {
    this.maxScrollLeft = this.header.scrollWidth - this.header.clientWidth;
    if (this.maxScrollLeft === 0) {
      this.hideBoth();
    } else if (this.header.scrollLeft === 0) {
      this.hideLeft();
    } else if (this.header.scrollLeft === this.maxScrollLeft) {
      this.hideRight();
    } else {
      this.showBoth();
    }
  }
  hideBoth() {
    this.leftShadow.classList.add(this.hidden);
    this.rightShadow.classList.add(this.hidden);
  }
  hideLeft() {
    this.leftShadow.classList.add(this.hidden);
    this.rightShadow.classList.remove(this.hidden);
  }
  hideRight() {
    this.leftShadow.classList.remove(this.hidden);
    this.rightShadow.classList.add(this.hidden);
  }
  showBoth() {
    this.leftShadow.classList.remove(this.hidden);
    this.rightShadow.classList.remove(this.hidden);
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_edit_dialog_header_language-switcher_language-switcher_component_ts.js.map