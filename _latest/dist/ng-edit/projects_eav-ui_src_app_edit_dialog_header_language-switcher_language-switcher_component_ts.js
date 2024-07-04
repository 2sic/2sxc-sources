"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_edit_dialog_header_language-switcher_language-switcher_component_ts"],{

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
    if (this.stopClick) {
      return;
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services */ 22453);
/* harmony import */ var _shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/store/ngrx-data */ 27521);
/* harmony import */ var _center_selected_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./center-selected.helper */ 23873);
/* harmony import */ var _language_switcher_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language-switcher.helpers */ 11427);
/* harmony import */ var _mouse_scroll_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mouse-scroll.helper */ 31289);
/* harmony import */ var _show_shadows_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-shadows.helper */ 79187);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var projects_eav_ui_src_app_shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/eav-ui/src/app/shared/logging/eav-logger */ 6812);
/* harmony import */ var projects_eav_ui_src_app_shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/eav-ui/src/app/shared/directives/tippy.directive */ 34601);
















const _c0 = ["scrollable"];
const _c1 = ["leftShadow"];
const _c2 = ["rightShadow"];
function LanguageSwitcherComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mousedown", function LanguageSwitcherComponent_For_9_Template_button_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.lngButtonMouseDown($event));
    })("click", function LanguageSwitcherComponent_For_9_Template_button_click_0_listener($event) {
      const langButton_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.lngButtonClick($event, langButton_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const langButton_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.disabled && ctx_r1.current() !== langButton_r3.NameId)("color", ctx_r1.current() === langButton_r3.NameId ? "accent" : "white")("tippy", langButton_r3.Culture)("tippyDisabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", langButton_r3.buttonText, " ");
  }
}
const logThis = false;
const nameOfThis = 'LanguageSwitcherComponent';
class LanguageSwitcherComponent {
  constructor(languageService, languageInstanceService, ngZone, formConfig) {
    this.languageService = languageService;
    this.languageInstanceService = languageInstanceService;
    this.ngZone = ngZone;
    this.formConfig = formConfig;
    this.log = new projects_eav_ui_src_app_shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_6__.EavLogger(nameOfThis, logThis);
    this.current = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.computed)(() => this.formConfig.language().current);
    this.buttons = (0,_language_switcher_helpers__WEBPACK_IMPORTED_MODULE_3__.getLanguageButtons)(this.languageService.getLanguages());
  }
  ngAfterViewInit() {
    this.showShadowsHelper = new _show_shadows_helper__WEBPACK_IMPORTED_MODULE_5__.ShowShadowsHelper(this.ngZone, this.headerRef.nativeElement, this.leftShadowRef.nativeElement, this.rightShadowRef.nativeElement);
    this.mouseScrollHelper = new _mouse_scroll_helper__WEBPACK_IMPORTED_MODULE_4__.MouseScrollHelper(this.ngZone, this.headerRef.nativeElement, this.areButtonsDisabled.bind(this));
    this.centerSelectedHelper = new _center_selected_helper__WEBPACK_IMPORTED_MODULE_2__.CenterSelectedHelper(this.ngZone, this.headerRef.nativeElement);
  }
  ngOnDestroy() {
    this.centerSelectedHelper.destroy();
    this.mouseScrollHelper.destroy();
    this.showShadowsHelper.destroy();
  }
  lngButtonMouseDown(event) {
    this.centerSelectedHelper.lngButtonDown(event);
  }
  lngButtonClick(event, language) {
    if (this.disabled) return;
    this.centerSelectedHelper.lngButtonClick(event);
    if (!this.centerSelectedHelper.stopClickIfMouseMoved()) {
      this.languageInstanceService.setCurrent(this.formConfig.config.formId, language.NameId);
    }
  }
  areButtonsDisabled() {
    return this.disabled;
  }
  static #_ = this.ɵfac = function LanguageSwitcherComponent_Factory(t) {
    return new (t || LanguageSwitcherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_1__.LanguageInstanceService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_0__.FormConfigService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: LanguageSwitcherComponent,
    selectors: [["app-language-switcher"]],
    viewQuery: function LanguageSwitcherComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.headerRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.leftShadowRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.rightShadowRef = _t.first);
      }
    },
    inputs: {
      disabled: "disabled"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 4,
    consts: [["leftShadow", ""], ["rightShadow", ""], ["scrollable", ""], [1, "scrollable__overlay"], [1, "scrollable__overlay--left-shadow"], [1, "scrollable__overlay--right-shadow"], [1, "scrollable", "lang-switch", 3, "tippy", "tippyDisabled"], ["mat-flat-button", "", 1, "lang-switch__button", 3, "disabled", "color", "tippy", "tippyDisabled"], ["mat-flat-button", "", 1, "lang-switch__button", 3, "mousedown", "click", "disabled", "color", "tippy", "tippyDisabled"]],
    template: function LanguageSwitcherComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 4, 0)(3, "div", 5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 6, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](8, LanguageSwitcherComponent_For_9_Template, 2, 5, "button", 7, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tippy", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 2, "Message.CantSwitchLanguage"))("tippyDisabled", !ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx.buttons);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, projects_eav_ui_src_app_shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_7__.TippyDirective],
    styles: [".scrollable__overlay[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n.scrollable__overlay--left-shadow[_ngcontent-%COMP%], .scrollable__overlay--right-shadow[_ngcontent-%COMP%] {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  display: block;\n  z-index: 1;\n  pointer-events: none;\n  height: 100%;\n  width: 80px;\n  background-image: linear-gradient(90deg, white 8px, rgba(255, 255, 255, 0));\n}\n@media (max-width: 600px) {\n  .scrollable__overlay--left-shadow[_ngcontent-%COMP%], .scrollable__overlay--right-shadow[_ngcontent-%COMP%] {\n    width: 24px;\n  }\n}\n.scrollable__overlay--right-shadow[_ngcontent-%COMP%] {\n  right: 0;\n  background-image: linear-gradient(270deg, white 8px, rgba(255, 255, 255, 0));\n}\n\n.scrollable[_ngcontent-%COMP%] {\n  overflow: hidden;\n  scroll-behavior: smooth;\n  height: 100%;\n  touch-action: none;\n}\n\n.lang-switch[_ngcontent-%COMP%] {\n  display: flex;\n}\n.lang-switch__button[_ngcontent-%COMP%] {\n  height: 100%;\n  flex-shrink: 0;\n  border-radius: 0;\n  margin-left: 0 !important;\n  color: rgba(0, 0, 0, 0.4);\n  border-bottom: none;\n  font-size: 12px;\n  line-height: 54px;\n  padding: 0 6px;\n  background-color: white !important;\n}\n.lang-switch__button.mat-accent[_ngcontent-%COMP%] {\n  color: #002753;\n  border-bottom: 2px solid #002753;\n  background-color: inherit;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2VkaXQvZGlhbG9nL2hlYWRlci9sYW5ndWFnZS1zd2l0Y2hlci9sYW5ndWFnZS1zd2l0Y2hlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQURGO0FBR0U7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBTUEsMkVBQUE7QUFQSjtBQUdJO0VBWEY7SUFZSSxXQUFBO0VBQUo7QUFDRjtBQUtFO0VBQ0UsUUFBQTtFQUNBLDRFQUFBO0FBSEo7O0FBT0E7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0FBSkY7QUFNRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUFKSjtBQU1JO0VBQ0UsY0FBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7QUFKTjs7QUFTQTtFQUNFLGtCQUFBO0FBTkYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuLnNjcm9sbGFibGVfX292ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICYtLWxlZnQtc2hhZG93LFxyXG4gICYtLXJpZ2h0LXNoYWRvdyB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogODBweDtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB3aGl0ZSA4cHgsIHJnYmEod2hpdGUsIDApKTtcclxuICB9XHJcblxyXG4gICYtLXJpZ2h0LXNoYWRvdyB7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHdoaXRlIDhweCwgcmdiYSh3aGl0ZSwgMCkpO1xyXG4gIH1cclxufVxyXG5cclxuLnNjcm9sbGFibGUge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmxhbmctc3dpdGNoIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAmX19idXR0b24ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAwMDAwNjY7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDU0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgJi5tYXQtYWNjZW50IHtcclxuICAgICAgY29sb3I6ICMwMDI3NTM7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAyNzUzO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 11427:
/*!***************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/dialog/header/language-switcher/language-switcher.helpers.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLanguageButtons: () => (/* binding */ getLanguageButtons)
/* harmony export */ });
/** Calculates properties of language buttons, e.g. name to be displayed */
function getLanguageButtons(languages) {
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
      buttonText: shortCodesCount[shortCode] > 1 ? `${shortCode} (${language.NameId})` : shortCode
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
    if (disabled || event.button !== 0) {
      return;
    }
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