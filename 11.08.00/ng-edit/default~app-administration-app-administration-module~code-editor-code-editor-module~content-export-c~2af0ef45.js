(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45"],{

/***/ "R7+U":
/*!***************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js ***!
  \***************************************************************************************************************/
/*! exports provided: MAT_SELECT_CONFIG, MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_SELECT_TRIGGER, MatSelect, MatSelectChange, MatSelectModule, MatSelectTrigger, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, matSelectAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_CONFIG", function() { return MAT_SELECT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY", function() { return MAT_SELECT_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER", function() { return MAT_SELECT_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY", function() { return MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_TRIGGER", function() { return MAT_SELECT_TRIGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelect", function() { return MatSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectChange", function() { return MatSelectChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectModule", function() { return MatSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectTrigger", function() { return MatSelectTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_ITEM_HEIGHT_EM", function() { return SELECT_ITEM_HEIGHT_EM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_MULTIPLE_PANEL_PADDING_X", function() { return SELECT_MULTIPLE_PANEL_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_INDENT_PADDING_X", function() { return SELECT_PANEL_INDENT_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_MAX_HEIGHT", function() { return SELECT_PANEL_MAX_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_PADDING_X", function() { return SELECT_PANEL_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_VIEWPORT_PADDING", function() { return SELECT_PANEL_VIEWPORT_PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matSelectAnimations", function() { return matSelectAnimations; });
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "fGyu");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/createClass */ "MMYH");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "pWxA");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/inherits */ "8K1b");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/createSuper */ "AqVP");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "9fIP");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "HYj3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/scrolling */ "qvOF");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/a11y */ "sg/T");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ "E5oP");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/coercion */ "5XID");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/collections */ "cqs0");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/keycodes */ "fAiE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/animations */ "f7+R");





















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * The following are all the animations for the mat-select component, with each
 * const containing the metadata for one animation.
 *
 * The values below match the implementation of the AngularJS Material mat-select animation.
 * @docs-private
 */










var _c0 = ["trigger"];
var _c1 = ["panel"];

function MatSelect_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.placeholder || "\xA0");
  }
}

function MatSelect_span_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r5.triggerValue || "\xA0");
  }
}

function MatSelect_span_5_ng_content_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojection"](0, 0, ["*ngSwitchCase", "true"]);
  }
}

function MatSelect_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MatSelect_span_5_span_1_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MatSelect_span_5_ng_content_2_Template, 1, 0, "ng-content", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitch", !!ctx_r3.customTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", true);
  }
}

function MatSelect_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("@transformPanel.done", function MatSelect_ng_template_8_Template_div_animation_transformPanel_done_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r8._panelDoneAnimatingStream.next($event.toState);
    })("keydown", function MatSelect_ng_template_8_Template_div_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r10._handleKeydown($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojection"](3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("@transformPanelWrap", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("mat-select-panel ", ctx_r4._getPanelTheme(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("transform-origin", ctx_r4._transformOrigin)("font-size", ctx_r4._triggerFontSize, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r4.panelClass)("@transformPanel", ctx_r4.multiple ? "showing-multiple" : "showing");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("id", ctx_r4.id + "-panel")("aria-multiselectable", ctx_r4.multiple)("aria-label", ctx_r4.ariaLabel || null)("aria-labelledby", ctx_r4._getPanelAriaLabelledby());
  }
}

var _c2 = [[["mat-select-trigger"]], "*"];
var _c3 = ["mat-select-trigger", "*"];
var matSelectAnimations = {
  /**
   * This animation ensures the select's overlay panel animation (transformPanel) is called when
   * closing the select.
   * This is needed due to https://github.com/angular/angular/issues/23302
   */
  transformPanelWrap: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["trigger"])('transformPanelWrap', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["query"])('@transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["animateChild"])()], {
    optional: true
  }))]),

  /**
   * This animation transforms the select's overlay panel on and off the page.
   *
   * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
   * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
   * side to ensure the option text correctly overlaps the trigger text.
   *
   * When the panel is removed from the DOM, it simply fades out linearly.
   */
  transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["trigger"])('transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["style"])({
    transform: 'scaleY(0.8)',
    minWidth: '100%',
    opacity: 0
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["style"])({
    opacity: 1,
    minWidth: 'calc(100% + 32px)',
    transform: 'scaleY(1)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["state"])('showing-multiple', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["style"])({
    opacity: 1,
    minWidth: 'calc(100% + 64px)',
    transform: 'scaleY(1)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["style"])({
    opacity: 0
  })))])
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Returns an exception to be thrown when attempting to change a select's `multiple` option
 * after initialization.
 * @docs-private
 */

function getMatSelectDynamicMultipleError() {
  return Error('Cannot change `multiple` mode of select after initialization.');
}
/**
 * Returns an exception to be thrown when attempting to assign a non-array value to a select
 * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
 * resetting the value.
 * @docs-private
 */


function getMatSelectNonArrayValueError() {
  return Error('Value must be an array in multiple-selection mode.');
}
/**
 * Returns an exception to be thrown when assigning a non-function value to the comparator
 * used to determine if a value corresponds to an option. Note that whether the function
 * actually takes two values and returns a boolean is not checked.
 */


function getMatSelectNonFunctionValueError() {
  return Error('`compareWith` must be a function.');
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var nextUniqueId = 0;
/**
 * The following style constants are necessary to save here in order
 * to properly calculate the alignment of the selected option over
 * the trigger element.
 */

/** The max height of the select's overlay panel */

var SELECT_PANEL_MAX_HEIGHT = 256;
/** The panel's padding on the x-axis */

var SELECT_PANEL_PADDING_X = 16;
/** The panel's x axis padding if it is indented (e.g. there is an option group). */

var SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
/** The height of the select items in `em` units. */

var SELECT_ITEM_HEIGHT_EM = 3; // TODO(josephperrott): Revert to a constant after 2018 spec updates are fully merged.

/**
 * Distance between the panel edge and the option text in
 * multi-selection mode.
 *
 * Calculated as:
 * (SELECT_PANEL_PADDING_X * 1.5) + 16 = 40
 * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
 * The checkbox width is 16px.
 */

var SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.5 + 16;
/**
 * The select panel will only "fit" inside the viewport if it is positioned at
 * this value or more away from the viewport boundary.
 */

var SELECT_PANEL_VIEWPORT_PADDING = 8;
/** Injection token that determines the scroll handling while a select is open. */

var MAT_SELECT_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["InjectionToken"]('mat-select-scroll-strategy');
/** @docs-private */

function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  return function () {
    return overlay.scrollStrategies.reposition();
  };
}
/** Injection token that can be used to provide the default options the select module. */


var MAT_SELECT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["InjectionToken"]('MAT_SELECT_CONFIG');
/** @docs-private */

var MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
  provide: MAT_SELECT_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]],
  useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY
};
/** Change event object that is emitted when the select value has changed. */

var MatSelectChange = function MatSelectChange(
/** Reference to the select that emitted the change event. */
source,
/** Current value of the select that emitted the event. */
value) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatSelectChange);

  this.source = source;
  this.value = value;
}; // Boilerplate for applying mixins to MatSelect.

/** @docs-private */


var MatSelectBase = function MatSelectBase(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatSelectBase);

  this._elementRef = _elementRef;
  this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
  this._parentForm = _parentForm;
  this._parentFormGroup = _parentFormGroup;
  this.ngControl = ngControl;
};

var _MatSelectMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinErrorState"])(MatSelectBase))));
/**
 * Injection token that can be used to reference instances of `MatSelectTrigger`. It serves as
 * alternative token to the actual `MatSelectTrigger` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


var MAT_SELECT_TRIGGER = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["InjectionToken"]('MatSelectTrigger');
/**
 * Allows the user to customize the trigger that is displayed when the select has a value.
 */

var MatSelectTrigger = function MatSelectTrigger() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatSelectTrigger);
};

MatSelectTrigger.ɵfac = function MatSelectTrigger_Factory(t) {
  return new (t || MatSelectTrigger)();
};

MatSelectTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: MatSelectTrigger,
  selectors: [["mat-select-trigger"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
    provide: MAT_SELECT_TRIGGER,
    useExisting: MatSelectTrigger
  }])]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](MatSelectTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"],
    args: [{
      selector: 'mat-select-trigger',
      providers: [{
        provide: MAT_SELECT_TRIGGER,
        useExisting: MatSelectTrigger
      }]
    }]
  }], null, null);
})();

var MatSelect = /*#__PURE__*/function (_MatSelectMixinBase2) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MatSelect, _MatSelectMixinBase2);

  var _super = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(MatSelect);

  function MatSelect(_viewportRuler, _changeDetectorRef, _ngZone, _defaultErrorStateMatcher, elementRef, _dir, _parentForm, _parentFormGroup, _parentFormField, ngControl, tabIndex, scrollStrategyFactory, _liveAnnouncer, defaults) {
    var _this;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatSelect);

    _this = _super.call(this, elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
    _this._viewportRuler = _viewportRuler;
    _this._changeDetectorRef = _changeDetectorRef;
    _this._ngZone = _ngZone;
    _this._dir = _dir;
    _this._parentFormField = _parentFormField;
    _this.ngControl = ngControl;
    _this._liveAnnouncer = _liveAnnouncer;
    /** Whether or not the overlay panel is open. */

    _this._panelOpen = false;
    /** Whether filling out the select is required in the form. */

    _this._required = false;
    /** The scroll position of the overlay panel, calculated to center the selected option. */

    _this._scrollTop = 0;
    /** Whether the component is in multiple selection mode. */

    _this._multiple = false;
    /** Comparison function to specify which option is displayed. Defaults to object equality. */

    _this._compareWith = function (o1, o2) {
      return o1 === o2;
    };
    /** Unique id for this input. */


    _this._uid = "mat-select-".concat(nextUniqueId++);
    /** Current `ariar-labelledby` value for the select trigger. */

    _this._triggerAriaLabelledBy = null;
    /** Emits whenever the component is destroyed. */

    _this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
    /** The cached font-size of the trigger element. */

    _this._triggerFontSize = 0;
    /** `View -> model callback called when value changes` */

    _this._onChange = function () {};
    /** `View -> model callback called when select has been touched` */


    _this._onTouched = function () {};

    _this._valueId = "mat-select-value-".concat(nextUniqueId++);
    /** The value of the select panel's transform-origin property. */

    _this._transformOrigin = 'top';
    /** Emits when the panel element is finished transforming in. */

    _this._panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
    /**
     * The y-offset of the overlay panel in relation to the trigger's top start corner.
     * This must be adjusted to align the selected option text over the trigger text.
     * when the panel opens. Will change based on the y-position of the selected option.
     */

    _this._offsetY = 0;
    /**
     * This position config ensures that the top "start" corner of the overlay
     * is aligned with with the top "start" of the origin by default (overlapping
     * the trigger completely). If the panel cannot fit below the trigger, it
     * will fall back to a position above the trigger.
     */

    _this._positions = [{
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'top'
    }, {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'bottom'
    }];
    /** Whether the component is disabling centering of the active option over the trigger. */

    _this._disableOptionCentering = false;
    _this._focused = false;
    /** A name for this control that can be used by `mat-form-field`. */

    _this.controlType = 'mat-select';
    /** Aria label of the select. If not specified, the placeholder will be used as label. */

    _this.ariaLabel = '';
    /** Combined stream of all of the child options' change events. */

    _this.optionSelectionChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["defer"])(function () {
      var options = _this.options;

      if (options) {
        return options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["startWith"])(options), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(function () {
          return rxjs__WEBPACK_IMPORTED_MODULE_18__["merge"].apply(void 0, Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(options.map(function (option) {
            return option.onSelectionChange;
          })));
        }));
      }

      return _this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(function () {
        return _this.optionSelectionChanges;
      }));
    });
    /** Event emitted when the select panel has been toggled. */

    _this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /** Event emitted when the select has been opened. */

    _this._openedStream = _this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["filter"])(function (o) {
      return o;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(function () {}));
    /** Event emitted when the select has been closed. */

    _this._closedStream = _this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["filter"])(function (o) {
      return !o;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(function () {}));
    /** Event emitted when the selected value has been changed by the user. */

    _this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * Event that emits whenever the raw value of the select changes. This is here primarily
     * to facilitate the two-way binding for the `value` input.
     * @docs-private
     */

    _this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();

    if (_this.ngControl) {
      // Note: we provide the value accessor through here, instead of
      // the `providers` to avoid running into a circular import.
      _this.ngControl.valueAccessor = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this);
    }

    _this._scrollStrategyFactory = scrollStrategyFactory;
    _this._scrollStrategy = _this._scrollStrategyFactory();
    _this.tabIndex = parseInt(tabIndex) || 0; // Force setter to be called in case id was not specified.

    _this.id = _this.id;

    if (defaults) {
      if (defaults.disableOptionCentering != null) {
        _this.disableOptionCentering = defaults.disableOptionCentering;
      }

      if (defaults.typeaheadDebounceInterval != null) {
        _this.typeaheadDebounceInterval = defaults.typeaheadDebounceInterval;
      }
    }

    return _this;
  }
  /** Whether the select is focused. */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatSelect, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_15__["SelectionModel"](this.multiple);
      this.stateChanges.next(); // We need `distinctUntilChanged` here, because some browsers will
      // fire the animation end event twice for the same animation. See:
      // https://github.com/angular/angular/issues/24084

      this._panelDoneAnimatingStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this._destroy)).subscribe(function () {
        if (_this2.panelOpen) {
          _this2._scrollTop = 0;

          _this2.openedChange.emit(true);
        } else {
          _this2.openedChange.emit(false);

          _this2.overlayDir.offsetX = 0;

          _this2._changeDetectorRef.markForCheck();
        }
      });

      this._viewportRuler.change().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this._destroy)).subscribe(function () {
        if (_this2._panelOpen) {
          _this2._triggerRect = _this2.trigger.nativeElement.getBoundingClientRect();

          _this2._changeDetectorRef.markForCheck();
        }
      });
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this3 = this;

      this._initKeyManager();

      this._selectionModel.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this._destroy)).subscribe(function (event) {
        event.added.forEach(function (option) {
          return option.select();
        });
        event.removed.forEach(function (option) {
          return option.deselect();
        });
      });

      this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this._destroy)).subscribe(function () {
        _this3._resetOptions();

        _this3._initializeSelection();
      });
    }
  }, {
    key: "ngDoCheck",
    value: function ngDoCheck() {
      var newAriaLabelledby = this._getTriggerAriaLabelledby(); // We have to manage setting the `aria-labelledby` ourselves, because part of its value
      // is computed as a result of a content query which can cause this binding to trigger a
      // "changed after checked" error.


      if (newAriaLabelledby !== this._triggerAriaLabelledBy) {
        var element = this._elementRef.nativeElement;
        this._triggerAriaLabelledBy = newAriaLabelledby;

        if (newAriaLabelledby) {
          element.setAttribute('aria-labelledby', newAriaLabelledby);
        } else {
          element.removeAttribute('aria-labelledby');
        }
      }

      if (this.ngControl) {
        this.updateErrorState();
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
      // the parent form field know to run change detection when the disabled state changes.
      if (changes['disabled']) {
        this.stateChanges.next();
      }

      if (changes['typeaheadDebounceInterval'] && this._keyManager) {
        this._keyManager.withTypeAhead(this._typeaheadDebounceInterval);
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroy.next();

      this._destroy.complete();

      this.stateChanges.complete();
    }
    /** Toggles the overlay panel open or closed. */

  }, {
    key: "toggle",
    value: function toggle() {
      this.panelOpen ? this.close() : this.open();
    }
    /** Opens the overlay panel. */

  }, {
    key: "open",
    value: function open() {
      var _this4 = this;

      if (this.disabled || !this.options || !this.options.length || this._panelOpen) {
        return;
      }

      this._triggerRect = this.trigger.nativeElement.getBoundingClientRect(); // Note: The computed font-size will be a string pixel value (e.g. "16px").
      // `parseInt` ignores the trailing 'px' and converts this to a number.

      this._triggerFontSize = parseInt(getComputedStyle(this.trigger.nativeElement).fontSize || '0');
      this._panelOpen = true;

      this._keyManager.withHorizontalOrientation(null);

      this._calculateOverlayPosition();

      this._highlightCorrectOption();

      this._changeDetectorRef.markForCheck(); // Set the font size on the panel element once it exists.


      this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1)).subscribe(function () {
        if (_this4._triggerFontSize && _this4.overlayDir.overlayRef && _this4.overlayDir.overlayRef.overlayElement) {
          _this4.overlayDir.overlayRef.overlayElement.style.fontSize = "".concat(_this4._triggerFontSize, "px");
        }
      });
    }
    /** Closes the overlay panel and focuses the host element. */

  }, {
    key: "close",
    value: function close() {
      if (this._panelOpen) {
        this._panelOpen = false;

        this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');

        this._changeDetectorRef.markForCheck();

        this._onTouched();
      }
    }
    /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param value New value to be written to the model.
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this.value = value;
    }
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the value changes.
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this._onChange = fn;
    }
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the component has been touched.
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this._onTouched = fn;
    }
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param isDisabled Sets whether the component is disabled.
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this.disabled = isDisabled;

      this._changeDetectorRef.markForCheck();

      this.stateChanges.next();
    }
    /** Whether or not the overlay panel is open. */

  }, {
    key: "_isRtl",

    /** Whether the element is in RTL mode. */
    value: function _isRtl() {
      return this._dir ? this._dir.value === 'rtl' : false;
    }
    /** Handles all keydown events on the select. */

  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(event) {
      if (!this.disabled) {
        this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
      }
    }
    /** Handles keyboard events while the select is closed. */

  }, {
    key: "_handleClosedKeydown",
    value: function _handleClosedKeydown(event) {
      var keyCode = event.keyCode;
      var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["LEFT_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["RIGHT_ARROW"];
      var isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["SPACE"];
      var manager = this._keyManager; // Open the select on ALT + arrow key to match the native <select>

      if (!manager.isTyping() && isOpenKey && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["hasModifierKey"])(event) || (this.multiple || event.altKey) && isArrowKey) {
        event.preventDefault(); // prevents the page from scrolling down when pressing space

        this.open();
      } else if (!this.multiple) {
        var previouslySelectedOption = this.selected;
        manager.onKeydown(event);
        var selectedOption = this.selected; // Since the value has changed, we need to announce it ourselves.

        if (selectedOption && previouslySelectedOption !== selectedOption) {
          // We set a duration on the live announcement, because we want the live element to be
          // cleared after a while so that users can't navigate to it using the arrow keys.
          this._liveAnnouncer.announce(selectedOption.viewValue, 10000);
        }
      }
    }
    /** Handles keyboard events when the selected is open. */

  }, {
    key: "_handleOpenKeydown",
    value: function _handleOpenKeydown(event) {
      var manager = this._keyManager;
      var keyCode = event.keyCode;
      var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["UP_ARROW"];
      var isTyping = manager.isTyping();

      if (isArrowKey && event.altKey) {
        // Close the select on ALT + arrow key to match the native <select>
        event.preventDefault();
        this.close(); // Don't do anything in this case if the user is typing,
        // because the typing sequence can include the space key.
      } else if (!isTyping && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["SPACE"]) && manager.activeItem && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["hasModifierKey"])(event)) {
        event.preventDefault();

        manager.activeItem._selectViaInteraction();
      } else if (!isTyping && this._multiple && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["A"] && event.ctrlKey) {
        event.preventDefault();
        var hasDeselectedOptions = this.options.some(function (opt) {
          return !opt.disabled && !opt.selected;
        });
        this.options.forEach(function (option) {
          if (!option.disabled) {
            hasDeselectedOptions ? option.select() : option.deselect();
          }
        });
      } else {
        var previouslyFocusedIndex = manager.activeItemIndex;
        manager.onKeydown(event);

        if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem && manager.activeItemIndex !== previouslyFocusedIndex) {
          manager.activeItem._selectViaInteraction();
        }
      }
    }
  }, {
    key: "_onFocus",
    value: function _onFocus() {
      if (!this.disabled) {
        this._focused = true;
        this.stateChanges.next();
      }
    }
    /**
     * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
     * "blur" to the panel when it opens, causing a false positive.
     */

  }, {
    key: "_onBlur",
    value: function _onBlur() {
      this._focused = false;

      if (!this.disabled && !this.panelOpen) {
        this._onTouched();

        this._changeDetectorRef.markForCheck();

        this.stateChanges.next();
      }
    }
    /**
     * Callback that is invoked when the overlay panel has been attached.
     */

  }, {
    key: "_onAttached",
    value: function _onAttached() {
      var _this5 = this;

      this.overlayDir.positionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1)).subscribe(function () {
        _this5._changeDetectorRef.detectChanges();

        _this5._calculateOverlayOffsetX();

        _this5.panel.nativeElement.scrollTop = _this5._scrollTop;
      });
    }
    /** Returns the theme to be used on the panel. */

  }, {
    key: "_getPanelTheme",
    value: function _getPanelTheme() {
      return this._parentFormField ? "mat-".concat(this._parentFormField.color) : '';
    }
    /** Whether the select has a value. */

  }, {
    key: "_initializeSelection",
    value: function _initializeSelection() {
      var _this6 = this;

      // Defer setting the value in order to avoid the "Expression
      // has changed after it was checked" errors from Angular.
      Promise.resolve().then(function () {
        _this6._setSelectionByValue(_this6.ngControl ? _this6.ngControl.value : _this6._value);

        _this6.stateChanges.next();
      });
    }
    /**
     * Sets the selected option based on a value. If no option can be
     * found with the designated value, the select trigger is cleared.
     */

  }, {
    key: "_setSelectionByValue",
    value: function _setSelectionByValue(value) {
      var _this7 = this;

      if (this.multiple && value) {
        if (!Array.isArray(value) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getMatSelectNonArrayValueError();
        }

        this._selectionModel.clear();

        value.forEach(function (currentValue) {
          return _this7._selectValue(currentValue);
        });

        this._sortValues();
      } else {
        this._selectionModel.clear();

        var correspondingOption = this._selectValue(value); // Shift focus to the active item. Note that we shouldn't do this in multiple
        // mode, because we don't know what option the user interacted with last.


        if (correspondingOption) {
          this._keyManager.updateActiveItem(correspondingOption);
        } else if (!this.panelOpen) {
          // Otherwise reset the highlighted option. Note that we only want to do this while
          // closed, because doing it while open can shift the user's focus unnecessarily.
          this._keyManager.updateActiveItem(-1);
        }
      }

      this._changeDetectorRef.markForCheck();
    }
    /**
     * Finds and selects and option based on its value.
     * @returns Option that has the corresponding value.
     */

  }, {
    key: "_selectValue",
    value: function _selectValue(value) {
      var _this8 = this;

      var correspondingOption = this.options.find(function (option) {
        try {
          // Treat null as a special reset value.
          return option.value != null && _this8._compareWith(option.value, value);
        } catch (error) {
          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            // Notify developers of errors in their comparator.
            console.warn(error);
          }

          return false;
        }
      });

      if (correspondingOption) {
        this._selectionModel.select(correspondingOption);
      }

      return correspondingOption;
    }
    /** Sets up a key manager to listen to keyboard events on the overlay panel. */

  }, {
    key: "_initKeyManager",
    value: function _initKeyManager() {
      var _this9 = this;

      this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["ActiveDescendantKeyManager"](this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr').withHomeAndEnd().withAllowedModifierKeys(['shiftKey']);

      this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this._destroy)).subscribe(function () {
        if (_this9.panelOpen) {
          // Select the active item when tabbing away. This is consistent with how the native
          // select behaves. Note that we only want to do this in single selection mode.
          if (!_this9.multiple && _this9._keyManager.activeItem) {
            _this9._keyManager.activeItem._selectViaInteraction();
          } // Restore focus to the trigger before closing. Ensures that the focus
          // position won't be lost if the user got focus into the overlay.


          _this9.focus();

          _this9.close();
        }
      });

      this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this._destroy)).subscribe(function () {
        if (_this9._panelOpen && _this9.panel) {
          _this9._scrollActiveOptionIntoView();
        } else if (!_this9._panelOpen && !_this9.multiple && _this9._keyManager.activeItem) {
          _this9._keyManager.activeItem._selectViaInteraction();
        }
      });
    }
    /** Drops current option subscriptions and IDs and resets from scratch. */

  }, {
    key: "_resetOptions",
    value: function _resetOptions() {
      var _this10 = this;

      var changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["merge"])(this.options.changes, this._destroy);
      this.optionSelectionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(changedOrDestroyed)).subscribe(function (event) {
        _this10._onSelect(event.source, event.isUserInput);

        if (event.isUserInput && !_this10.multiple && _this10._panelOpen) {
          _this10.close();

          _this10.focus();
        }
      }); // Listen to changes in the internal state of the options and react accordingly.
      // Handles cases like the labels of the selected options changing.

      rxjs__WEBPACK_IMPORTED_MODULE_18__["merge"].apply(void 0, Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.options.map(function (option) {
        return option._stateChanges;
      }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(changedOrDestroyed)).subscribe(function () {
        _this10._changeDetectorRef.markForCheck();

        _this10.stateChanges.next();
      });
    }
    /** Invoked when an option is clicked. */

  }, {
    key: "_onSelect",
    value: function _onSelect(option, isUserInput) {
      var wasSelected = this._selectionModel.isSelected(option);

      if (option.value == null && !this._multiple) {
        option.deselect();

        this._selectionModel.clear();

        if (this.value != null) {
          this._propagateChanges(option.value);
        }
      } else {
        if (wasSelected !== option.selected) {
          option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
        }

        if (isUserInput) {
          this._keyManager.setActiveItem(option);
        }

        if (this.multiple) {
          this._sortValues();

          if (isUserInput) {
            // In case the user selected the option with their mouse, we
            // want to restore focus back to the trigger, in order to
            // prevent the select keyboard controls from clashing with
            // the ones from `mat-option`.
            this.focus();
          }
        }
      }

      if (wasSelected !== this._selectionModel.isSelected(option)) {
        this._propagateChanges();
      }

      this.stateChanges.next();
    }
    /** Sorts the selected values in the selected based on their order in the panel. */

  }, {
    key: "_sortValues",
    value: function _sortValues() {
      var _this11 = this;

      if (this.multiple) {
        var options = this.options.toArray();

        this._selectionModel.sort(function (a, b) {
          return _this11.sortComparator ? _this11.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
        });

        this.stateChanges.next();
      }
    }
    /** Emits change event to set the model value. */

  }, {
    key: "_propagateChanges",
    value: function _propagateChanges(fallbackValue) {
      var valueToEmit = null;

      if (this.multiple) {
        valueToEmit = this.selected.map(function (option) {
          return option.value;
        });
      } else {
        valueToEmit = this.selected ? this.selected.value : fallbackValue;
      }

      this._value = valueToEmit;
      this.valueChange.emit(valueToEmit);

      this._onChange(valueToEmit);

      this.selectionChange.emit(new MatSelectChange(this, valueToEmit));

      this._changeDetectorRef.markForCheck();
    }
    /**
     * Highlights the selected item. If no option is selected, it will highlight
     * the first item instead.
     */

  }, {
    key: "_highlightCorrectOption",
    value: function _highlightCorrectOption() {
      if (this._keyManager) {
        if (this.empty) {
          this._keyManager.setFirstItemActive();
        } else {
          this._keyManager.setActiveItem(this._selectionModel.selected[0]);
        }
      }
    }
    /** Scrolls the active option into view. */

  }, {
    key: "_scrollActiveOptionIntoView",
    value: function _scrollActiveOptionIntoView() {
      var activeOptionIndex = this._keyManager.activeItemIndex || 0;

      var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["_countGroupLabelsBeforeOption"])(activeOptionIndex, this.options, this.optionGroups);

      var itemHeight = this._getItemHeight();

      this.panel.nativeElement.scrollTop = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["_getOptionScrollPosition"])((activeOptionIndex + labelCount) * itemHeight, itemHeight, this.panel.nativeElement.scrollTop, SELECT_PANEL_MAX_HEIGHT);
    }
    /** Focuses the select element. */

  }, {
    key: "focus",
    value: function focus(options) {
      this._elementRef.nativeElement.focus(options);
    }
    /** Gets the index of the provided option in the option list. */

  }, {
    key: "_getOptionIndex",
    value: function _getOptionIndex(option) {
      return this.options.reduce(function (result, current, index) {
        if (result !== undefined) {
          return result;
        }

        return option === current ? index : undefined;
      }, undefined);
    }
    /** Calculates the scroll position and x- and y-offsets of the overlay panel. */

  }, {
    key: "_calculateOverlayPosition",
    value: function _calculateOverlayPosition() {
      var itemHeight = this._getItemHeight();

      var items = this._getItemCount();

      var panelHeight = Math.min(items * itemHeight, SELECT_PANEL_MAX_HEIGHT);
      var scrollContainerHeight = items * itemHeight; // The farthest the panel can be scrolled before it hits the bottom

      var maxScroll = scrollContainerHeight - panelHeight; // If no value is selected we open the popup to the first item.

      var selectedOptionOffset = this.empty ? 0 : this._getOptionIndex(this._selectionModel.selected[0]);
      selectedOptionOffset += Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["_countGroupLabelsBeforeOption"])(selectedOptionOffset, this.options, this.optionGroups); // We must maintain a scroll buffer so the selected option will be scrolled to the
      // center of the overlay panel rather than the top.

      var scrollBuffer = panelHeight / 2;
      this._scrollTop = this._calculateOverlayScroll(selectedOptionOffset, scrollBuffer, maxScroll);
      this._offsetY = this._calculateOverlayOffsetY(selectedOptionOffset, scrollBuffer, maxScroll);

      this._checkOverlayWithinViewport(maxScroll);
    }
    /**
     * Calculates the scroll position of the select's overlay panel.
     *
     * Attempts to center the selected option in the panel. If the option is
     * too high or too low in the panel to be scrolled to the center, it clamps the
     * scroll position to the min or max scroll positions respectively.
     */

  }, {
    key: "_calculateOverlayScroll",
    value: function _calculateOverlayScroll(selectedIndex, scrollBuffer, maxScroll) {
      var itemHeight = this._getItemHeight();

      var optionOffsetFromScrollTop = itemHeight * selectedIndex;
      var halfOptionHeight = itemHeight / 2; // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
      // scroll container, then subtracts the scroll buffer to scroll the option down to
      // the center of the overlay panel. Half the option height must be re-added to the
      // scrollTop so the option is centered based on its middle, not its top edge.

      var optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
      return Math.min(Math.max(0, optimalScrollPosition), maxScroll);
    }
    /** Gets the aria-labelledby for the select panel. */

  }, {
    key: "_getPanelAriaLabelledby",
    value: function _getPanelAriaLabelledby() {
      if (this.ariaLabel) {
        return null;
      }

      var labelId = this._getLabelId();

      return this.ariaLabelledby ? labelId + ' ' + this.ariaLabelledby : labelId;
    }
    /** Determines the `aria-activedescendant` to be set on the host. */

  }, {
    key: "_getAriaActiveDescendant",
    value: function _getAriaActiveDescendant() {
      if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
        return this._keyManager.activeItem.id;
      }

      return null;
    }
    /** Gets the ID of the element that is labelling the select. */

  }, {
    key: "_getLabelId",
    value: function _getLabelId() {
      var _a;

      return ((_a = this._parentFormField) === null || _a === void 0 ? void 0 : _a.getLabelId()) || '';
    }
    /**
     * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
     * This must be adjusted to align the selected option text over the trigger text when
     * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
     * can't be calculated until the panel has been attached, because we need to know the
     * content width in order to constrain the panel within the viewport.
     */

  }, {
    key: "_calculateOverlayOffsetX",
    value: function _calculateOverlayOffsetX() {
      var overlayRect = this.overlayDir.overlayRef.overlayElement.getBoundingClientRect();

      var viewportSize = this._viewportRuler.getViewportSize();

      var isRtl = this._isRtl();

      var paddingWidth = this.multiple ? SELECT_MULTIPLE_PANEL_PADDING_X + SELECT_PANEL_PADDING_X : SELECT_PANEL_PADDING_X * 2;
      var offsetX; // Adjust the offset, depending on the option padding.

      if (this.multiple) {
        offsetX = SELECT_MULTIPLE_PANEL_PADDING_X;
      } else {
        var selected = this._selectionModel.selected[0] || this.options.first;
        offsetX = selected && selected.group ? SELECT_PANEL_INDENT_PADDING_X : SELECT_PANEL_PADDING_X;
      } // Invert the offset in LTR.


      if (!isRtl) {
        offsetX *= -1;
      } // Determine how much the select overflows on each side.


      var leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
      var rightOverflow = overlayRect.right + offsetX - viewportSize.width + (isRtl ? 0 : paddingWidth); // If the element overflows on either side, reduce the offset to allow it to fit.

      if (leftOverflow > 0) {
        offsetX += leftOverflow + SELECT_PANEL_VIEWPORT_PADDING;
      } else if (rightOverflow > 0) {
        offsetX -= rightOverflow + SELECT_PANEL_VIEWPORT_PADDING;
      } // Set the offset directly in order to avoid having to go through change detection and
      // potentially triggering "changed after it was checked" errors. Round the value to avoid
      // blurry content in some browsers.


      this.overlayDir.offsetX = Math.round(offsetX);
      this.overlayDir.overlayRef.updatePosition();
    }
    /**
     * Calculates the y-offset of the select's overlay panel in relation to the
     * top start corner of the trigger. It has to be adjusted in order for the
     * selected option to be aligned over the trigger when the panel opens.
     */

  }, {
    key: "_calculateOverlayOffsetY",
    value: function _calculateOverlayOffsetY(selectedIndex, scrollBuffer, maxScroll) {
      var itemHeight = this._getItemHeight();

      var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
      var maxOptionsDisplayed = Math.floor(SELECT_PANEL_MAX_HEIGHT / itemHeight);
      var optionOffsetFromPanelTop; // Disable offset if requested by user by returning 0 as value to offset

      if (this._disableOptionCentering) {
        return 0;
      }

      if (this._scrollTop === 0) {
        optionOffsetFromPanelTop = selectedIndex * itemHeight;
      } else if (this._scrollTop === maxScroll) {
        var firstDisplayedIndex = this._getItemCount() - maxOptionsDisplayed;
        var selectedDisplayIndex = selectedIndex - firstDisplayedIndex; // The first item is partially out of the viewport. Therefore we need to calculate what
        // portion of it is shown in the viewport and account for it in our offset.

        var partialItemHeight = itemHeight - (this._getItemCount() * itemHeight - SELECT_PANEL_MAX_HEIGHT) % itemHeight; // Because the panel height is longer than the height of the options alone,
        // there is always extra padding at the top or bottom of the panel. When
        // scrolled to the very bottom, this padding is at the top of the panel and
        // must be added to the offset.

        optionOffsetFromPanelTop = selectedDisplayIndex * itemHeight + partialItemHeight;
      } else {
        // If the option was scrolled to the middle of the panel using a scroll buffer,
        // its offset will be the scroll buffer minus the half height that was added to
        // center it.
        optionOffsetFromPanelTop = scrollBuffer - itemHeight / 2;
      } // The final offset is the option's offset from the top, adjusted for the height difference,
      // multiplied by -1 to ensure that the overlay moves in the correct direction up the page.
      // The value is rounded to prevent some browsers from blurring the content.


      return Math.round(optionOffsetFromPanelTop * -1 - optionHeightAdjustment);
    }
    /**
     * Checks that the attempted overlay position will fit within the viewport.
     * If it will not fit, tries to adjust the scroll position and the associated
     * y-offset so the panel can open fully on-screen. If it still won't fit,
     * sets the offset back to 0 to allow the fallback position to take over.
     */

  }, {
    key: "_checkOverlayWithinViewport",
    value: function _checkOverlayWithinViewport(maxScroll) {
      var itemHeight = this._getItemHeight();

      var viewportSize = this._viewportRuler.getViewportSize();

      var topSpaceAvailable = this._triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
      var bottomSpaceAvailable = viewportSize.height - this._triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
      var panelHeightTop = Math.abs(this._offsetY);
      var totalPanelHeight = Math.min(this._getItemCount() * itemHeight, SELECT_PANEL_MAX_HEIGHT);
      var panelHeightBottom = totalPanelHeight - panelHeightTop - this._triggerRect.height;

      if (panelHeightBottom > bottomSpaceAvailable) {
        this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
      } else if (panelHeightTop > topSpaceAvailable) {
        this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
      } else {
        this._transformOrigin = this._getOriginBasedOnOption();
      }
    }
    /** Adjusts the overlay panel up to fit in the viewport. */

  }, {
    key: "_adjustPanelUp",
    value: function _adjustPanelUp(panelHeightBottom, bottomSpaceAvailable) {
      // Browsers ignore fractional scroll offsets, so we need to round.
      var distanceBelowViewport = Math.round(panelHeightBottom - bottomSpaceAvailable); // Scrolls the panel up by the distance it was extending past the boundary, then
      // adjusts the offset by that amount to move the panel up into the viewport.

      this._scrollTop -= distanceBelowViewport;
      this._offsetY -= distanceBelowViewport;
      this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very top, it won't be able to fit the panel
      // by scrolling, so set the offset to 0 to allow the fallback position to take
      // effect.

      if (this._scrollTop <= 0) {
        this._scrollTop = 0;
        this._offsetY = 0;
        this._transformOrigin = "50% bottom 0px";
      }
    }
    /** Adjusts the overlay panel down to fit in the viewport. */

  }, {
    key: "_adjustPanelDown",
    value: function _adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll) {
      // Browsers ignore fractional scroll offsets, so we need to round.
      var distanceAboveViewport = Math.round(panelHeightTop - topSpaceAvailable); // Scrolls the panel down by the distance it was extending past the boundary, then
      // adjusts the offset by that amount to move the panel down into the viewport.

      this._scrollTop += distanceAboveViewport;
      this._offsetY += distanceAboveViewport;
      this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very bottom, it won't be able to fit the
      // panel by scrolling, so set the offset to 0 to allow the fallback position
      // to take effect.

      if (this._scrollTop >= maxScroll) {
        this._scrollTop = maxScroll;
        this._offsetY = 0;
        this._transformOrigin = "50% top 0px";
        return;
      }
    }
    /** Sets the transform origin point based on the selected option. */

  }, {
    key: "_getOriginBasedOnOption",
    value: function _getOriginBasedOnOption() {
      var itemHeight = this._getItemHeight();

      var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
      var originY = Math.abs(this._offsetY) - optionHeightAdjustment + itemHeight / 2;
      return "50% ".concat(originY, "px 0px");
    }
    /** Calculates the amount of items in the select. This includes options and group labels. */

  }, {
    key: "_getItemCount",
    value: function _getItemCount() {
      return this.options.length + this.optionGroups.length;
    }
    /** Calculates the height of the select's options. */

  }, {
    key: "_getItemHeight",
    value: function _getItemHeight() {
      return this._triggerFontSize * SELECT_ITEM_HEIGHT_EM;
    }
    /** Gets the aria-labelledby of the select component trigger. */

  }, {
    key: "_getTriggerAriaLabelledby",
    value: function _getTriggerAriaLabelledby() {
      if (this.ariaLabel) {
        return null;
      }

      var value = this._getLabelId() + ' ' + this._valueId;

      if (this.ariaLabelledby) {
        value += ' ' + this.ariaLabelledby;
      }

      return value;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "setDescribedByIds",
    value: function setDescribedByIds(ids) {
      this._ariaDescribedby = ids.join(' ');
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "onContainerClick",
    value: function onContainerClick() {
      this.focus();
      this.open();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "focused",
    get: function get() {
      return this._focused || this._panelOpen;
    }
    /** Placeholder to be shown if no value has been selected. */

  }, {
    key: "placeholder",
    get: function get() {
      return this._placeholder;
    },
    set: function set(value) {
      this._placeholder = value;
      this.stateChanges.next();
    }
    /** Whether the component is required. */

  }, {
    key: "required",
    get: function get() {
      return this._required;
    },
    set: function set(value) {
      this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__["coerceBooleanProperty"])(value);
      this.stateChanges.next();
    }
    /** Whether the user should be allowed to select multiple options. */

  }, {
    key: "multiple",
    get: function get() {
      return this._multiple;
    },
    set: function set(value) {
      if (this._selectionModel && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatSelectDynamicMultipleError();
      }

      this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__["coerceBooleanProperty"])(value);
    }
    /** Whether to center the active option over the trigger. */

  }, {
    key: "disableOptionCentering",
    get: function get() {
      return this._disableOptionCentering;
    },
    set: function set(value) {
      this._disableOptionCentering = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__["coerceBooleanProperty"])(value);
    }
    /**
     * Function to compare the option values with the selected values. The first argument
     * is a value from an option. The second is a value from the selection. A boolean
     * should be returned.
     */

  }, {
    key: "compareWith",
    get: function get() {
      return this._compareWith;
    },
    set: function set(fn) {
      if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatSelectNonFunctionValueError();
      }

      this._compareWith = fn;

      if (this._selectionModel) {
        // A different comparator means the selection could change.
        this._initializeSelection();
      }
    }
    /** Value of the select control. */

  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(newValue) {
      if (newValue !== this._value) {
        if (this.options) {
          this._setSelectionByValue(newValue);
        }

        this._value = newValue;
      }
    }
    /** Time to wait in milliseconds after the last keystroke before moving focus to an item. */

  }, {
    key: "typeaheadDebounceInterval",
    get: function get() {
      return this._typeaheadDebounceInterval;
    },
    set: function set(value) {
      this._typeaheadDebounceInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__["coerceNumberProperty"])(value);
    }
    /** Unique id of the element. */

  }, {
    key: "id",
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value || this._uid;
      this.stateChanges.next();
    }
  }, {
    key: "panelOpen",
    get: function get() {
      return this._panelOpen;
    }
    /** The currently selected option. */

  }, {
    key: "selected",
    get: function get() {
      return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
    }
    /** The value displayed in the trigger. */

  }, {
    key: "triggerValue",
    get: function get() {
      if (this.empty) {
        return '';
      }

      if (this._multiple) {
        var selectedOptions = this._selectionModel.selected.map(function (option) {
          return option.viewValue;
        });

        if (this._isRtl()) {
          selectedOptions.reverse();
        } // TODO(crisbeto): delimiter should be configurable for proper localization.


        return selectedOptions.join(', ');
      }

      return this._selectionModel.selected[0].viewValue;
    }
  }, {
    key: "empty",
    get: function get() {
      return !this._selectionModel || this._selectionModel.isEmpty();
    }
  }, {
    key: "shouldLabelFloat",
    get: function get() {
      return this._panelOpen || !this.empty;
    }
  }]);

  return MatSelect;
}(_MatSelectMixinBase);

MatSelect.ɵfac = function MatSelect_Factory(t) {
  return new (t || MatSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MAT_FORM_FIELD"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](MAT_SELECT_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["LiveAnnouncer"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](MAT_SELECT_CONFIG, 8));
};

MatSelect.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: MatSelect,
  selectors: [["mat-select"]],
  contentQueries: function MatSelect_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, MAT_SELECT_TRIGGER, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_OPTGROUP"], true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.customTrigger = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.options = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
    }
  },
  viewQuery: function MatSelect_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["CdkConnectedOverlay"], true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.overlayDir = _t.first);
    }
  },
  hostAttrs: ["role", "combobox", "aria-autocomplete", "none", "aria-haspopup", "true", 1, "mat-select"],
  hostVars: 20,
  hostBindings: function MatSelect_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keydown", function MatSelect_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      })("focus", function MatSelect_focus_HostBindingHandler() {
        return ctx._onFocus();
      })("blur", function MatSelect_blur_HostBindingHandler() {
        return ctx._onBlur();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("id", ctx.id)("tabindex", ctx.tabIndex)("aria-controls", ctx.panelOpen ? ctx.id + "-panel" : null)("aria-expanded", ctx.panelOpen)("aria-label", ctx.ariaLabel || null)("aria-required", ctx.required.toString())("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-describedby", ctx._ariaDescribedby || null)("aria-activedescendant", ctx._getAriaActiveDescendant());
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mat-select-disabled", ctx.disabled)("mat-select-invalid", ctx.errorState)("mat-select-required", ctx.required)("mat-select-empty", ctx.empty)("mat-select-multiple", ctx.multiple);
    }
  },
  inputs: {
    disabled: "disabled",
    disableRipple: "disableRipple",
    tabIndex: "tabIndex",
    ariaLabel: ["aria-label", "ariaLabel"],
    id: "id",
    disableOptionCentering: "disableOptionCentering",
    typeaheadDebounceInterval: "typeaheadDebounceInterval",
    placeholder: "placeholder",
    required: "required",
    multiple: "multiple",
    compareWith: "compareWith",
    value: "value",
    panelClass: "panelClass",
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    errorStateMatcher: "errorStateMatcher",
    sortComparator: "sortComparator"
  },
  outputs: {
    openedChange: "openedChange",
    _openedStream: "opened",
    _closedStream: "closed",
    selectionChange: "selectionChange",
    valueChange: "valueChange"
  },
  exportAs: ["matSelect"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
    provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldControl"],
    useExisting: MatSelect
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_OPTION_PARENT_COMPONENT"],
    useExisting: MatSelect
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c3,
  decls: 9,
  vars: 10,
  consts: [["cdk-overlay-origin", "", 1, "mat-select-trigger", 3, "click"], ["origin", "cdkOverlayOrigin", "trigger", ""], [1, "mat-select-value", 3, "ngSwitch"], ["class", "mat-select-placeholder", 4, "ngSwitchCase"], ["class", "mat-select-value-text", 3, "ngSwitch", 4, "ngSwitchCase"], [1, "mat-select-arrow-wrapper"], [1, "mat-select-arrow"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayOffsetY", "backdropClick", "attach", "detach"], [1, "mat-select-placeholder"], [1, "mat-select-value-text", 3, "ngSwitch"], [4, "ngSwitchDefault"], [4, "ngSwitchCase"], [1, "mat-select-panel-wrap"], ["role", "listbox", "tabindex", "-1", 3, "ngClass", "keydown"], ["panel", ""]],
  template: function MatSelect_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojectionDef"](_c2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MatSelect_Template_div_click_0_listener() {
        return ctx.toggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, MatSelect_span_4_Template, 2, 1, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, MatSelect_span_5_Template, 3, 2, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, MatSelect_ng_template_8_Template, 4, 14, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("backdropClick", function MatSelect_Template_ng_template_backdropClick_8_listener() {
        return ctx.close();
      })("attach", function MatSelect_Template_ng_template_attach_8_listener() {
        return ctx._onAttached();
      })("detach", function MatSelect_Template_ng_template_detach_8_listener() {
        return ctx.close();
      });
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitch", ctx.empty);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("id", ctx._valueId);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cdkConnectedOverlayScrollStrategy", ctx._scrollStrategy)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.panelOpen)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayMinWidth", ctx._triggerRect == null ? null : ctx._triggerRect.width)("cdkConnectedOverlayOffsetY", ctx._offsetY);
    }
  },
  directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["CdkOverlayOrigin"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["CdkConnectedOverlay"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]],
  styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}\n"],
  encapsulation: 2,
  data: {
    animation: [matSelectAnimations.transformPanelWrap, matSelectAnimations.transformPanel]
  },
  changeDetection: 0
});

MatSelect.ctorParameters = function () {
  return [{
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ViewportRuler"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["ErrorStateMatcher"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgForm"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormGroupDirective"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
    }]
  }, {
    type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
      args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MAT_FORM_FIELD"]]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControl"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Attribute"],
      args: ['tabindex']
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
      args: [MAT_SELECT_SCROLL_STRATEGY]
    }]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["LiveAnnouncer"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
      args: [MAT_SELECT_CONFIG]
    }]
  }];
};

MatSelect.propDecorators = {
  trigger: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
    args: ['trigger']
  }],
  panel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
    args: ['panel']
  }],
  overlayDir: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
    args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["CdkConnectedOverlay"]]
  }],
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"],
    args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], {
      descendants: true
    }]
  }],
  optionGroups: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"],
    args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_OPTGROUP"], {
      descendants: true
    }]
  }],
  panelClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  customTrigger: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChild"],
    args: [MAT_SELECT_TRIGGER]
  }],
  placeholder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  required: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  multiple: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  disableOptionCentering: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  compareWith: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  ariaLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
    args: ['aria-label']
  }],
  ariaLabelledby: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
    args: ['aria-labelledby']
  }],
  errorStateMatcher: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  typeaheadDebounceInterval: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  sortComparator: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  openedChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
  }],
  _openedStream: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"],
    args: ['opened']
  }],
  _closedStream: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"],
    args: ['closed']
  }],
  selectionChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
  }],
  valueChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](MatSelect, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"],
    args: [{
      selector: 'mat-select',
      exportAs: 'matSelect',
      template: "<div cdk-overlay-origin\n     class=\"mat-select-trigger\"\n     (click)=\"toggle()\"\n     #origin=\"cdkOverlayOrigin\"\n     #trigger>\n  <div class=\"mat-select-value\" [ngSwitch]=\"empty\" [attr.id]=\"_valueId\">\n    <span class=\"mat-select-placeholder\" *ngSwitchCase=\"true\">{{placeholder || '\\u00A0'}}</span>\n    <span class=\"mat-select-value-text\" *ngSwitchCase=\"false\" [ngSwitch]=\"!!customTrigger\">\n      <span *ngSwitchDefault>{{triggerValue || '\\u00A0'}}</span>\n      <ng-content select=\"mat-select-trigger\" *ngSwitchCase=\"true\"></ng-content>\n    </span>\n  </div>\n\n  <div class=\"mat-select-arrow-wrapper\"><div class=\"mat-select-arrow\"></div></div>\n</div>\n\n<ng-template\n  cdk-connected-overlay\n  cdkConnectedOverlayLockPosition\n  cdkConnectedOverlayHasBackdrop\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\n  [cdkConnectedOverlayScrollStrategy]=\"_scrollStrategy\"\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"panelOpen\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayMinWidth]=\"_triggerRect?.width!\"\n  [cdkConnectedOverlayOffsetY]=\"_offsetY\"\n  (backdropClick)=\"close()\"\n  (attach)=\"_onAttached()\"\n  (detach)=\"close()\">\n  <div class=\"mat-select-panel-wrap\" [@transformPanelWrap]>\n    <div\n      #panel\n      role=\"listbox\"\n      tabindex=\"-1\"\n      class=\"mat-select-panel {{ _getPanelTheme() }}\"\n      [attr.id]=\"id + '-panel'\"\n      [attr.aria-multiselectable]=\"multiple\"\n      [attr.aria-label]=\"ariaLabel || null\"\n      [attr.aria-labelledby]=\"_getPanelAriaLabelledby()\"\n      [ngClass]=\"panelClass\"\n      [@transformPanel]=\"multiple ? 'showing-multiple' : 'showing'\"\n      (@transformPanel.done)=\"_panelDoneAnimatingStream.next($event.toState)\"\n      [style.transformOrigin]=\"_transformOrigin\"\n      [style.font-size.px]=\"_triggerFontSize\"\n      (keydown)=\"_handleKeydown($event)\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
      inputs: ['disabled', 'disableRipple', 'tabIndex'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectionStrategy"].OnPush,
      host: {
        'role': 'combobox',
        'aria-autocomplete': 'none',
        // TODO(crisbeto): the value for aria-haspopup should be `listbox`, but currently it's difficult
        // to sync into g3, because of an outdated automated a11y check which flags it as an invalid
        // value. At some point we should try to switch it back to being `listbox`. When doing the
        // MDC-based `mat-select`, we can get away with starting it off as `listbox`.
        'aria-haspopup': 'true',
        'class': 'mat-select',
        '[attr.id]': 'id',
        '[attr.tabindex]': 'tabIndex',
        '[attr.aria-controls]': 'panelOpen ? id + "-panel" : null',
        '[attr.aria-expanded]': 'panelOpen',
        '[attr.aria-label]': 'ariaLabel || null',
        '[attr.aria-required]': 'required.toString()',
        '[attr.aria-disabled]': 'disabled.toString()',
        '[attr.aria-invalid]': 'errorState',
        '[attr.aria-describedby]': '_ariaDescribedby || null',
        '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
        '[class.mat-select-disabled]': 'disabled',
        '[class.mat-select-invalid]': 'errorState',
        '[class.mat-select-required]': 'required',
        '[class.mat-select-empty]': 'empty',
        '[class.mat-select-multiple]': 'multiple',
        '(keydown)': '_handleKeydown($event)',
        '(focus)': '_onFocus()',
        '(blur)': '_onBlur()'
      },
      animations: [matSelectAnimations.transformPanelWrap, matSelectAnimations.transformPanel],
      providers: [{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldControl"],
        useExisting: MatSelect
      }, {
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_OPTION_PARENT_COMPONENT"],
        useExisting: MatSelect
      }],
      styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}\n"]
    }]
  }], function () {
    return [{
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ViewportRuler"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["ErrorStateMatcher"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgForm"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormGroupDirective"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }]
    }, {
      type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
        args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MAT_FORM_FIELD"]]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControl"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Attribute"],
        args: ['tabindex']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
        args: [MAT_SELECT_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["LiveAnnouncer"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
        args: [MAT_SELECT_CONFIG]
      }]
    }];
  }, {
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
      args: ['aria-label']
    }],
    openedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    _openedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"],
      args: ['opened']
    }],
    _closedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"],
      args: ['closed']
    }],
    selectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    valueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    disableOptionCentering: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    typeaheadDebounceInterval: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    trigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
      args: ['trigger']
    }],
    panel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
      args: ['panel']
    }],
    overlayDir: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
      args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["CdkConnectedOverlay"]]
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], {
        descendants: true
      }]
    }],
    optionGroups: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_OPTGROUP"], {
        descendants: true
      }]
    }],
    panelClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    customTrigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChild"],
      args: [MAT_SELECT_TRIGGER]
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
      args: ['aria-labelledby']
    }],
    errorStateMatcher: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    sortComparator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatSelectModule = function MatSelectModule() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatSelectModule);
};

MatSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: MatSelectModule
});
MatSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  factory: function MatSelectModule_Factory(t) {
    return new (t || MatSelectModule)();
  },
  providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["CdkScrollableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](MatSelectModule, {
    declarations: function declarations() {
      return [MatSelect, MatSelectTrigger];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]];
    },
    exports: function exports() {
      return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["CdkScrollableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](MatSelectModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]],
      exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["CdkScrollableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]],
      declarations: [MatSelect, MatSelectTrigger],
      providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
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
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45.js.map