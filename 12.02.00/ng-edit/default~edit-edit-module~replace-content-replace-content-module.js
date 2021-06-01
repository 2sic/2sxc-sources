(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~edit-edit-module~replace-content-replace-content-module"],{

/***/ "/1cH":
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js ***!
  \******************************************************************************/
/*! exports provided: AUTOCOMPLETE_OPTION_HEIGHT, AUTOCOMPLETE_PANEL_HEIGHT, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_AUTOCOMPLETE_VALUE_ACCESSOR, MatAutocomplete, MatAutocompleteModule, MatAutocompleteOrigin, MatAutocompleteSelectedEvent, MatAutocompleteTrigger, _MatAutocompleteBase, _MatAutocompleteOriginBase, _MatAutocompleteTriggerBase, getMatAutocompleteMissingPanelError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_OPTION_HEIGHT", function() { return AUTOCOMPLETE_OPTION_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_PANEL_HEIGHT", function() { return AUTOCOMPLETE_PANEL_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS", function() { return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY", function() { return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY", function() { return MAT_AUTOCOMPLETE_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY", function() { return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER", function() { return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_VALUE_ACCESSOR", function() { return MAT_AUTOCOMPLETE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocomplete", function() { return MatAutocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteModule", function() { return MatAutocompleteModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteOrigin", function() { return MatAutocompleteOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteSelectedEvent", function() { return MatAutocompleteSelectedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteTrigger", function() { return MatAutocompleteTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatAutocompleteBase", function() { return _MatAutocompleteBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatAutocompleteOriginBase", function() { return _MatAutocompleteOriginBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatAutocompleteTriggerBase", function() { return _MatAutocompleteTriggerBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatAutocompleteMissingPanelError", function() { return getMatAutocompleteMissingPanelError; });
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "KQm4");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Autocomplete IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */








var _c0 = ["panel"];

function MatAutocomplete_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var formFieldId_r1 = ctx.id;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", ctx_r0.id)("ngClass", ctx_r0._classList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-label", ctx_r0.ariaLabel || null)("aria-labelledby", ctx_r0._getPanelAriaLabelledby(formFieldId_r1));
  }
}

var _c1 = ["*"];
var _uniqueAutocompleteIdCounter = 0;
/** Event object that is emitted when an autocomplete option is selected. */

var MatAutocompleteSelectedEvent = function MatAutocompleteSelectedEvent(
/** Reference to the autocomplete panel that emitted the event. */
source,
/** Option that was selected. */
option) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatAutocompleteSelectedEvent);

  this.source = source;
  this.option = option;
}; // Boilerplate for applying mixins to MatAutocomplete.

/** @docs-private */


var MatAutocompleteBase = function MatAutocompleteBase() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatAutocompleteBase);
};

var _MatAutocompleteMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinDisableRipple"])(MatAutocompleteBase);
/** Injection token to be used to override the default options for `mat-autocomplete`. */


var MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["InjectionToken"]('mat-autocomplete-default-options', {
  providedIn: 'root',
  factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */

function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
  return {
    autoActiveFirstOption: false
  };
}
/** Base class with all of the `MatAutocomplete` functionality. */


var _MatAutocompleteBase = /*#__PURE__*/function (_MatAutocompleteMixin) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(_MatAutocompleteBase, _MatAutocompleteMixin);

  var _super = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(_MatAutocompleteBase);

  function _MatAutocompleteBase(_changeDetectorRef, _elementRef, defaults, platform) {
    var _this;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _MatAutocompleteBase);

    _this = _super.call(this);
    _this._changeDetectorRef = _changeDetectorRef;
    _this._elementRef = _elementRef;
    _this._activeOptionChanges = rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"].EMPTY;
    /** Whether the autocomplete panel should be visible, depending on option length. */

    _this.showPanel = false;
    _this._isOpen = false;
    /** Function that maps an option's control value to its display value in the trigger. */

    _this.displayWith = null;
    /** Event that is emitted whenever an option from the list is selected. */

    _this.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /** Event that is emitted when the autocomplete panel is opened. */

    _this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /** Event that is emitted when the autocomplete panel is closed. */

    _this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /** Emits whenever an option is activated using the keyboard. */

    _this.optionActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    _this._classList = {};
    /** Unique ID to be used by autocomplete trigger's "aria-owns" property. */

    _this.id = "mat-autocomplete-".concat(_uniqueAutocompleteIdCounter++); // TODO(crisbeto): the problem that the `inertGroups` option resolves is only present on
    // Safari using VoiceOver. We should occasionally check back to see whether the bug
    // wasn't resolved in VoiceOver, and if it has, we can remove this and the `inertGroups`
    // option altogether.

    _this.inertGroups = (platform === null || platform === void 0 ? void 0 : platform.SAFARI) || false;
    _this._autoActiveFirstOption = !!defaults.autoActiveFirstOption;
    return _this;
  }
  /** Whether the autocomplete panel is open. */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_MatAutocompleteBase, [{
    key: "isOpen",
    get: function get() {
      return this._isOpen && this.showPanel;
    }
    /**
     * Whether the first option should be highlighted when the autocomplete panel is opened.
     * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
     */

  }, {
    key: "autoActiveFirstOption",
    get: function get() {
      return this._autoActiveFirstOption;
    },
    set: function set(value) {
      this._autoActiveFirstOption = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value);
    }
    /**
     * Takes classes set on the host mat-autocomplete element and applies them to the panel
     * inside the overlay container to allow for easy styling.
     */

  }, {
    key: "classList",
    set: function set(value) {
      if (value && value.length) {
        this._classList = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceStringArray"])(value).reduce(function (classList, className) {
          classList[className] = true;
          return classList;
        }, {});
      } else {
        this._classList = {};
      }

      this._setVisibilityClasses(this._classList);

      this._elementRef.nativeElement.className = '';
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this2 = this;

      this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["ActiveDescendantKeyManager"](this.options).withWrap();
      this._activeOptionChanges = this._keyManager.change.subscribe(function (index) {
        _this2.optionActivated.emit({
          source: _this2,
          option: _this2.options.toArray()[index] || null
        });
      }); // Set the initial visibility state.

      this._setVisibility();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._activeOptionChanges.unsubscribe();
    }
    /**
     * Sets the panel scrollTop. This allows us to manually scroll to display options
     * above or below the fold, as they are not actually being focused when active.
     */

  }, {
    key: "_setScrollTop",
    value: function _setScrollTop(scrollTop) {
      if (this.panel) {
        this.panel.nativeElement.scrollTop = scrollTop;
      }
    }
    /** Returns the panel's scrollTop. */

  }, {
    key: "_getScrollTop",
    value: function _getScrollTop() {
      return this.panel ? this.panel.nativeElement.scrollTop : 0;
    }
    /** Panel should hide itself when the option list is empty. */

  }, {
    key: "_setVisibility",
    value: function _setVisibility() {
      this.showPanel = !!this.options.length;

      this._setVisibilityClasses(this._classList);

      this._changeDetectorRef.markForCheck();
    }
    /** Emits the `select` event. */

  }, {
    key: "_emitSelectEvent",
    value: function _emitSelectEvent(option) {
      var event = new MatAutocompleteSelectedEvent(this, option);
      this.optionSelected.emit(event);
    }
    /** Gets the aria-labelledby for the autocomplete panel. */

  }, {
    key: "_getPanelAriaLabelledby",
    value: function _getPanelAriaLabelledby(labelId) {
      if (this.ariaLabel) {
        return null;
      }

      var labelExpression = labelId ? labelId + ' ' : '';
      return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
    }
    /** Sets the autocomplete visibility classes on a classlist based on the panel is visible. */

  }, {
    key: "_setVisibilityClasses",
    value: function _setVisibilityClasses(classList) {
      classList[this._visibleClass] = this.showPanel;
      classList[this._hiddenClass] = !this.showPanel;
    }
  }]);

  return _MatAutocompleteBase;
}(_MatAutocompleteMixinBase);

_MatAutocompleteBase.ɵfac = function _MatAutocompleteBase_Factory(t) {
  return new (t || _MatAutocompleteBase)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]));
};

_MatAutocompleteBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: _MatAutocompleteBase,
  viewQuery: function _MatAutocompleteBase_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["TemplateRef"], 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 1);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
    }
  },
  inputs: {
    displayWith: "displayWith",
    autoActiveFirstOption: "autoActiveFirstOption",
    classList: ["class", "classList"],
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    panelWidth: "panelWidth"
  },
  outputs: {
    optionSelected: "optionSelected",
    opened: "opened",
    closed: "closed",
    optionActivated: "optionActivated"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]]
});

_MatAutocompleteBase.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
      args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
    }]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
  }];
};

_MatAutocompleteBase.propDecorators = {
  template: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
    args: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["TemplateRef"], {
      static: true
    }]
  }],
  panel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
    args: ['panel']
  }],
  ariaLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
    args: ['aria-label']
  }],
  ariaLabelledby: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
    args: ['aria-labelledby']
  }],
  displayWith: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  autoActiveFirstOption: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  panelWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  optionSelected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
  }],
  opened: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
  }],
  closed: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
  }],
  optionActivated: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
  }],
  classList: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
    args: ['class']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](_MatAutocompleteBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
        args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
      }]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
    }];
  }, {
    displayWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    optionSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    opened: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    closed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    optionActivated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    autoActiveFirstOption: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    classList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
      args: ['class']
    }],
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["TemplateRef"], {
        static: true
      }]
    }],
    panel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
      args: ['panel']
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
      args: ['aria-labelledby']
    }],
    panelWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }]
  });
})();

var MatAutocomplete = /*#__PURE__*/function (_MatAutocompleteBase2) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MatAutocomplete, _MatAutocompleteBase2);

  var _super2 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(MatAutocomplete);

  function MatAutocomplete() {
    var _this3;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatAutocomplete);

    _this3 = _super2.apply(this, arguments);
    _this3._visibleClass = 'mat-autocomplete-visible';
    _this3._hiddenClass = 'mat-autocomplete-hidden';
    return _this3;
  }

  return MatAutocomplete;
}(_MatAutocompleteBase);

MatAutocomplete.ɵfac = function MatAutocomplete_Factory(t) {
  return ɵMatAutocomplete_BaseFactory(t || MatAutocomplete);
};

MatAutocomplete.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: MatAutocomplete,
  selectors: [["mat-autocomplete"]],
  contentQueries: function MatAutocomplete_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_OPTGROUP"], 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], 1);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.options = _t);
    }
  },
  hostAttrs: [1, "mat-autocomplete"],
  inputs: {
    disableRipple: "disableRipple"
  },
  exportAs: ["matAutocomplete"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_OPTION_PARENT_COMPONENT"],
    useExisting: MatAutocomplete
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  consts: [["role", "listbox", 1, "mat-autocomplete-panel", 3, "id", "ngClass"], ["panel", ""]],
  template: function MatAutocomplete_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, MatAutocomplete_ng_template_0_Template, 3, 4, "ng-template");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"]],
  styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}mat-autocomplete{display:none}\n"],
  encapsulation: 2,
  changeDetection: 0
});
MatAutocomplete.propDecorators = {
  optionGroups: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"],
    args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_OPTGROUP"], {
      descendants: true
    }]
  }],
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"],
    args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], {
      descendants: true
    }]
  }]
};
var ɵMatAutocomplete_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetInheritedFactory"](MatAutocomplete);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](MatAutocomplete, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"],
    args: [{
      selector: 'mat-autocomplete',
      template: "<ng-template let-formFieldId=\"id\">\n  <div class=\"mat-autocomplete-panel\"\n       role=\"listbox\"\n       [id]=\"id\"\n       [attr.aria-label]=\"ariaLabel || null\"\n       [attr.aria-labelledby]=\"_getPanelAriaLabelledby(formFieldId)\"\n       [ngClass]=\"_classList\"\n       #panel>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectionStrategy"].OnPush,
      exportAs: 'matAutocomplete',
      inputs: ['disableRipple'],
      host: {
        'class': 'mat-autocomplete'
      },
      providers: [{
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_OPTION_PARENT_COMPONENT"],
        useExisting: MatAutocomplete
      }],
      styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}mat-autocomplete{display:none}\n"]
    }]
  }], null, {
    optionGroups: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_OPTGROUP"], {
        descendants: true
      }]
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], {
        descendants: true
      }]
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

/** Base class containing all of the functionality for `MatAutocompleteOrigin`. */


var _MatAutocompleteOriginBase = function _MatAutocompleteOriginBase(
/** Reference to the element on which the directive is applied. */
elementRef) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _MatAutocompleteOriginBase);

  this.elementRef = elementRef;
};

_MatAutocompleteOriginBase.ɵfac = function _MatAutocompleteOriginBase_Factory(t) {
  return new (t || _MatAutocompleteOriginBase)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]));
};

_MatAutocompleteOriginBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: _MatAutocompleteOriginBase
});

_MatAutocompleteOriginBase.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](_MatAutocompleteOriginBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]
    }];
  }, null);
})();
/**
 * Directive applied to an element to make it usable
 * as a connection point for an autocomplete panel.
 */


var MatAutocompleteOrigin = /*#__PURE__*/function (_MatAutocompleteOrigi) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MatAutocompleteOrigin, _MatAutocompleteOrigi);

  var _super3 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(MatAutocompleteOrigin);

  function MatAutocompleteOrigin() {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatAutocompleteOrigin);

    return _super3.apply(this, arguments);
  }

  return MatAutocompleteOrigin;
}(_MatAutocompleteOriginBase);

MatAutocompleteOrigin.ɵfac = function MatAutocompleteOrigin_Factory(t) {
  return ɵMatAutocompleteOrigin_BaseFactory(t || MatAutocompleteOrigin);
};

MatAutocompleteOrigin.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: MatAutocompleteOrigin,
  selectors: [["", "matAutocompleteOrigin", ""]],
  exportAs: ["matAutocompleteOrigin"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]]
});
var ɵMatAutocompleteOrigin_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetInheritedFactory"](MatAutocompleteOrigin);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](MatAutocompleteOrigin, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"],
    args: [{
      selector: '[matAutocompleteOrigin]',
      exportAs: 'matAutocompleteOrigin'
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
 * The following style constants are necessary to save here in order
 * to properly calculate the scrollTop of the panel. Because we are not
 * actually focusing the active item, scroll must be handled manually.
 */

/**
 * The height of each autocomplete option.
 * @deprecated No longer being used. To be removed.
 * @breaking-change 12.0.0
 */


var AUTOCOMPLETE_OPTION_HEIGHT = 48;
/**
 * The total height of the autocomplete panel.
 * @deprecated No longer being used. To be removed.
 * @breaking-change 12.0.0
 */

var AUTOCOMPLETE_PANEL_HEIGHT = 256;
/** Injection token that determines the scroll handling while the autocomplete panel is open. */

var MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["InjectionToken"]('mat-autocomplete-scroll-strategy');
/** @docs-private */

function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
  return function () {
    return overlay.scrollStrategies.reposition();
  };
}
/** @docs-private */


var MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]],
  useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY
};
/**
 * Provider that allows the autocomplete to register as a ControlValueAccessor.
 * @docs-private
 */

var MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NG_VALUE_ACCESSOR"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["forwardRef"])(function () {
    return MatAutocompleteTrigger;
  }),
  multi: true
};
/**
 * Creates an error to be thrown when attempting to use an autocomplete trigger without a panel.
 * @docs-private
 */

function getMatAutocompleteMissingPanelError() {
  return Error('Attempting to open an undefined instance of `mat-autocomplete`. ' + 'Make sure that the id passed to the `matAutocomplete` is correct and that ' + 'you\'re attempting to open it after the ngAfterContentInit hook.');
}
/** Base class with all of the `MatAutocompleteTrigger` functionality. */


var _MatAutocompleteTriggerBase = /*#__PURE__*/function () {
  function _MatAutocompleteTriggerBase(_element, _overlay, _viewContainerRef, _zone, _changeDetectorRef, scrollStrategy, _dir, _formField, _document, _viewportRuler, _defaults) {
    var _this4 = this;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _MatAutocompleteTriggerBase);

    this._element = _element;
    this._overlay = _overlay;
    this._viewContainerRef = _viewContainerRef;
    this._zone = _zone;
    this._changeDetectorRef = _changeDetectorRef;
    this._dir = _dir;
    this._formField = _formField;
    this._document = _document;
    this._viewportRuler = _viewportRuler;
    this._defaults = _defaults;
    this._componentDestroyed = false;
    this._autocompleteDisabled = false;
    /** Whether or not the label state is being overridden. */

    this._manuallyFloatingLabel = false;
    /** Subscription to viewport size changes. */

    this._viewportSubscription = rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"].EMPTY;
    /**
     * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
     * closed autocomplete from being reopened if the user switches to another browser tab and then
     * comes back.
     */

    this._canOpenOnNextFocus = true;
    /** Stream of keyboard events that can close the panel. */

    this._closeKeyEventStream = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    /**
     * Event handler for when the window is blurred. Needs to be an
     * arrow function in order to preserve the context.
     */

    this._windowBlurHandler = function () {
      // If the user blurred the window while the autocomplete is focused, it means that it'll be
      // refocused when they come back. In this case we want to skip the first focus event, if the
      // pane was closed, in order to avoid reopening it unintentionally.
      _this4._canOpenOnNextFocus = _this4._document.activeElement !== _this4._element.nativeElement || _this4.panelOpen;
    };
    /** `View -> model callback called when value changes` */


    this._onChange = function () {};
    /** `View -> model callback called when autocomplete has been touched` */


    this._onTouched = function () {};
    /**
     * Position of the autocomplete panel relative to the trigger element. A position of `auto`
     * will render the panel underneath the trigger if there is enough space for it to fit in
     * the viewport, otherwise the panel will be shown above it. If the position is set to
     * `above` or `below`, the panel will always be shown above or below the trigger. no matter
     * whether it fits completely in the viewport.
     */


    this.position = 'auto';
    /**
     * `autocomplete` attribute to be set on the input element.
     * @docs-private
     */

    this.autocompleteAttribute = 'off';
    this._overlayAttached = false;
    /** Stream of autocomplete option selections. */

    this.optionSelections = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["defer"])(function () {
      if (_this4.autocomplete && _this4.autocomplete.options) {
        return rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"].apply(void 0, Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this4.autocomplete.options.map(function (option) {
          return option.onSelectionChange;
        })));
      } // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
      // Return a stream that we'll replace with the real one once everything is in place.


      return _this4._zone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(function () {
        return _this4.optionSelections;
      }));
    });
    this._scrollStrategy = scrollStrategy;
  }
  /**
   * Whether the autocomplete is disabled. When disabled, the element will
   * act as a regular input and the user won't be able to open the panel.
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_MatAutocompleteTriggerBase, [{
    key: "autocompleteDisabled",
    get: function get() {
      return this._autocompleteDisabled;
    },
    set: function set(value) {
      this._autocompleteDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value);
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this5 = this;

      var window = this._getWindow();

      if (typeof window !== 'undefined') {
        this._zone.runOutsideAngular(function () {
          return window.addEventListener('blur', _this5._windowBlurHandler);
        });
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes['position'] && this._positionStrategy) {
        this._setStrategyPositions(this._positionStrategy);

        if (this.panelOpen) {
          this._overlayRef.updatePosition();
        }
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var window = this._getWindow();

      if (typeof window !== 'undefined') {
        window.removeEventListener('blur', this._windowBlurHandler);
      }

      this._viewportSubscription.unsubscribe();

      this._componentDestroyed = true;

      this._destroyPanel();

      this._closeKeyEventStream.complete();
    }
    /** Whether or not the autocomplete panel is open. */

  }, {
    key: "panelOpen",
    get: function get() {
      return this._overlayAttached && this.autocomplete.showPanel;
    }
    /** Opens the autocomplete suggestion panel. */

  }, {
    key: "openPanel",
    value: function openPanel() {
      this._attachOverlay();

      this._floatLabel();
    }
    /** Closes the autocomplete suggestion panel. */

  }, {
    key: "closePanel",
    value: function closePanel() {
      this._resetLabel();

      if (!this._overlayAttached) {
        return;
      }

      if (this.panelOpen) {
        // Only emit if the panel was visible.
        this.autocomplete.closed.emit();
      }

      this.autocomplete._isOpen = this._overlayAttached = false;

      if (this._overlayRef && this._overlayRef.hasAttached()) {
        this._overlayRef.detach();

        this._closingActionsSubscription.unsubscribe();
      } // Note that in some cases this can end up being called after the component is destroyed.
      // Add a check to ensure that we don't try to run change detection on a destroyed view.


      if (!this._componentDestroyed) {
        // We need to trigger change detection manually, because
        // `fromEvent` doesn't seem to do it at the proper time.
        // This ensures that the label is reset when the
        // user clicks outside.
        this._changeDetectorRef.detectChanges();
      }
    }
    /**
     * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
     * within the viewport.
     */

  }, {
    key: "updatePosition",
    value: function updatePosition() {
      if (this._overlayAttached) {
        this._overlayRef.updatePosition();
      }
    }
    /**
     * A stream of actions that should close the autocomplete panel, including
     * when an option is selected, on blur, and when TAB is pressed.
     */

  }, {
    key: "panelClosingActions",
    get: function get() {
      var _this6 = this;

      return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["filter"])(function () {
        return _this6._overlayAttached;
      })), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["filter"])(function () {
        return _this6._overlayAttached;
      })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])()).pipe( // Normalize the output so we return a consistent type.
      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(function (event) {
        return event instanceof _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionSelectionChange"] ? event : null;
      }));
    }
    /** The currently active option, coerced to MatOption type. */

  }, {
    key: "activeOption",
    get: function get() {
      if (this.autocomplete && this.autocomplete._keyManager) {
        return this.autocomplete._keyManager.activeItem;
      }

      return null;
    }
    /** Stream of clicks outside of the autocomplete panel. */

  }, {
    key: "_getOutsideClickStream",
    value: function _getOutsideClickStream() {
      var _this7 = this;

      return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["fromEvent"])(this._document, 'click'), Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["fromEvent"])(this._document, 'auxclick'), Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["fromEvent"])(this._document, 'touchend')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["filter"])(function (event) {
        // If we're in the Shadow DOM, the event target will be the shadow root, so we have to
        // fall back to check the first element in the path of the click event.
        var clickTarget = _this7._isInsideShadowRoot && event.composedPath ? event.composedPath()[0] : event.target;
        var formField = _this7._formField ? _this7._formField._elementRef.nativeElement : null;
        var customOrigin = _this7.connectedTo ? _this7.connectedTo.elementRef.nativeElement : null;
        return _this7._overlayAttached && clickTarget !== _this7._element.nativeElement && (!formField || !formField.contains(clickTarget)) && (!customOrigin || !customOrigin.contains(clickTarget)) && !!_this7._overlayRef && !_this7._overlayRef.overlayElement.contains(clickTarget);
      }));
    } // Implemented as part of ControlValueAccessor.

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      var _this8 = this;

      Promise.resolve(null).then(function () {
        return _this8._setTriggerValue(value);
      });
    } // Implemented as part of ControlValueAccessor.

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this._onChange = fn;
    } // Implemented as part of ControlValueAccessor.

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this._onTouched = fn;
    } // Implemented as part of ControlValueAccessor.

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._element.nativeElement.disabled = isDisabled;
    }
  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(event) {
      var keyCode = event.keyCode; // Prevent the default action on all escape key presses. This is here primarily to bring IE
      // in line with other browsers. By default, pressing escape on IE will cause it to revert
      // the input value to the one that it had on focus, however it won't dispatch any events
      // which means that the model value will be out of sync with the view.

      if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__["hasModifierKey"])(event)) {
        event.preventDefault();
      }

      if (this.activeOption && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__["ENTER"] && this.panelOpen) {
        this.activeOption._selectViaInteraction();

        this._resetActiveItem();

        event.preventDefault();
      } else if (this.autocomplete) {
        var prevActiveItem = this.autocomplete._keyManager.activeItem;
        var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__["DOWN_ARROW"];

        if (this.panelOpen || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__["TAB"]) {
          this.autocomplete._keyManager.onKeydown(event);
        } else if (isArrowKey && this._canOpen()) {
          this.openPanel();
        }

        if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
          this._scrollToOption(this.autocomplete._keyManager.activeItemIndex || 0);
        }
      }
    }
  }, {
    key: "_handleInput",
    value: function _handleInput(event) {
      var target = event.target;
      var value = target.value; // Based on `NumberValueAccessor` from forms.

      if (target.type === 'number') {
        value = value == '' ? null : parseFloat(value);
      } // If the input has a placeholder, IE will fire the `input` event on page load,
      // focus and blur, in addition to when the user actually changed the value. To
      // filter out all of the extra events, we save the value on focus and between
      // `input` events, and we check whether it changed.
      // See: https://connect.microsoft.com/IE/feedback/details/885747/


      if (this._previousValue !== value) {
        this._previousValue = value;

        this._onChange(value);

        if (this._canOpen() && this._document.activeElement === event.target) {
          this.openPanel();
        }
      }
    }
  }, {
    key: "_handleFocus",
    value: function _handleFocus() {
      if (!this._canOpenOnNextFocus) {
        this._canOpenOnNextFocus = true;
      } else if (this._canOpen()) {
        this._previousValue = this._element.nativeElement.value;

        this._attachOverlay();

        this._floatLabel(true);
      }
    }
    /**
     * In "auto" mode, the label will animate down as soon as focus is lost.
     * This causes the value to jump when selecting an option with the mouse.
     * This method manually floats the label until the panel can be closed.
     * @param shouldAnimate Whether the label should be animated when it is floated.
     */

  }, {
    key: "_floatLabel",
    value: function _floatLabel() {
      var shouldAnimate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this._formField && this._formField.floatLabel === 'auto') {
        if (shouldAnimate) {
          this._formField._animateAndLockLabel();
        } else {
          this._formField.floatLabel = 'always';
        }

        this._manuallyFloatingLabel = true;
      }
    }
    /** If the label has been manually elevated, return it to its normal state. */

  }, {
    key: "_resetLabel",
    value: function _resetLabel() {
      if (this._manuallyFloatingLabel) {
        this._formField.floatLabel = 'auto';
        this._manuallyFloatingLabel = false;
      }
    }
    /**
     * This method listens to a stream of panel closing actions and resets the
     * stream every time the option list changes.
     */

  }, {
    key: "_subscribeToClosingActions",
    value: function _subscribeToClosingActions() {
      var _this9 = this;

      var firstStable = this._zone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1));

      var optionChanges = this.autocomplete.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["tap"])(function () {
        return _this9._positionStrategy.reapplyLastPosition();
      }), // Defer emitting to the stream until the next tick, because changing
      // bindings in here will cause "changed after checked" errors.
      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["delay"])(0)); // When the zone is stable initially, and when the option list changes...

      return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(firstStable, optionChanges).pipe( // create a new stream of panelClosingActions, replacing any previous streams
      // that were created, and flatten it so our stream only emits closing events...
      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(function () {
        var wasOpen = _this9.panelOpen;

        _this9._resetActiveItem();

        _this9.autocomplete._setVisibility();

        if (_this9.panelOpen) {
          _this9._overlayRef.updatePosition(); // If the `panelOpen` state changed, we need to make sure to emit the `opened`
          // event, because we may not have emitted it when the panel was attached. This
          // can happen if the users opens the panel and there are no options, but the
          // options come in slightly later or as a result of the value changing.


          if (wasOpen !== _this9.panelOpen) {
            _this9.autocomplete.opened.emit();
          }
        }

        return _this9.panelClosingActions;
      }), // when the first closing event occurs...
      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1)) // set the value, close the panel, and complete.
      .subscribe(function (event) {
        return _this9._setValueAndClose(event);
      });
    }
    /** Destroys the autocomplete suggestion panel. */

  }, {
    key: "_destroyPanel",
    value: function _destroyPanel() {
      if (this._overlayRef) {
        this.closePanel();

        this._overlayRef.dispose();

        this._overlayRef = null;
      }
    }
  }, {
    key: "_setTriggerValue",
    value: function _setTriggerValue(value) {
      var toDisplay = this.autocomplete && this.autocomplete.displayWith ? this.autocomplete.displayWith(value) : value; // Simply falling back to an empty string if the display value is falsy does not work properly.
      // The display value can also be the number zero and shouldn't fall back to an empty string.

      var inputValue = toDisplay != null ? toDisplay : ''; // If it's used within a `MatFormField`, we should set it through the property so it can go
      // through change detection.

      if (this._formField) {
        this._formField._control.value = inputValue;
      } else {
        this._element.nativeElement.value = inputValue;
      }

      this._previousValue = inputValue;
    }
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     */

  }, {
    key: "_setValueAndClose",
    value: function _setValueAndClose(event) {
      if (event && event.source) {
        this._clearPreviousSelectedOption(event.source);

        this._setTriggerValue(event.source.value);

        this._onChange(event.source.value);

        this._element.nativeElement.focus();

        this.autocomplete._emitSelectEvent(event.source);
      }

      this.closePanel();
    }
    /**
     * Clear any previous selected option and emit a selection change event for this option
     */

  }, {
    key: "_clearPreviousSelectedOption",
    value: function _clearPreviousSelectedOption(skip) {
      this.autocomplete.options.forEach(function (option) {
        if (option !== skip && option.selected) {
          option.deselect();
        }
      });
    }
  }, {
    key: "_attachOverlay",
    value: function _attachOverlay() {
      var _this10 = this;

      var _a;

      if (!this.autocomplete && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatAutocompleteMissingPanelError();
      } // We want to resolve this once, as late as possible so that we can be
      // sure that the element has been moved into its final place in the DOM.


      if (this._isInsideShadowRoot == null) {
        this._isInsideShadowRoot = !!Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["_getShadowRoot"])(this._element.nativeElement);
      }

      var overlayRef = this._overlayRef;

      if (!overlayRef) {
        this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_16__["TemplatePortal"](this.autocomplete.template, this._viewContainerRef, {
          id: (_a = this._formField) === null || _a === void 0 ? void 0 : _a.getLabelId()
        });
        overlayRef = this._overlay.create(this._getOverlayConfig());
        this._overlayRef = overlayRef; // Use the `keydownEvents` in order to take advantage of
        // the overlay event targeting provided by the CDK overlay.

        overlayRef.keydownEvents().subscribe(function (event) {
          // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
          // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
          if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__["hasModifierKey"])(event) || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__["UP_ARROW"] && Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__["hasModifierKey"])(event, 'altKey')) {
            _this10._resetActiveItem();

            _this10._closeKeyEventStream.next(); // We need to stop propagation, otherwise the event will eventually
            // reach the input itself and cause the overlay to be reopened.


            event.stopPropagation();
            event.preventDefault();
          }
        });
        this._viewportSubscription = this._viewportRuler.change().subscribe(function () {
          if (_this10.panelOpen && overlayRef) {
            overlayRef.updateSize({
              width: _this10._getPanelWidth()
            });
          }
        });
      } else {
        // Update the trigger, panel width and direction, in case anything has changed.
        this._positionStrategy.setOrigin(this._getConnectedElement());

        overlayRef.updateSize({
          width: this._getPanelWidth()
        });
      }

      if (overlayRef && !overlayRef.hasAttached()) {
        overlayRef.attach(this._portal);
        this._closingActionsSubscription = this._subscribeToClosingActions();
      }

      var wasOpen = this.panelOpen;

      this.autocomplete._setVisibility();

      this.autocomplete._isOpen = this._overlayAttached = true; // We need to do an extra `panelOpen` check in here, because the
      // autocomplete won't be shown if there are no options.

      if (this.panelOpen && wasOpen !== this.panelOpen) {
        this.autocomplete.opened.emit();
      }
    }
  }, {
    key: "_getOverlayConfig",
    value: function _getOverlayConfig() {
      var _a;

      return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayConfig"]({
        positionStrategy: this._getOverlayPosition(),
        scrollStrategy: this._scrollStrategy(),
        width: this._getPanelWidth(),
        direction: this._dir,
        panelClass: (_a = this._defaults) === null || _a === void 0 ? void 0 : _a.overlayPanelClass
      });
    }
  }, {
    key: "_getOverlayPosition",
    value: function _getOverlayPosition() {
      var strategy = this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(false).withPush(false);

      this._setStrategyPositions(strategy);

      this._positionStrategy = strategy;
      return strategy;
    }
    /** Sets the positions on a position strategy based on the directive's input state. */

  }, {
    key: "_setStrategyPositions",
    value: function _setStrategyPositions(positionStrategy) {
      // Note that we provide horizontal fallback positions, even though by default the dropdown
      // width matches the input, because consumers can override the width. See #18854.
      var belowPositions = [{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }, {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      }]; // The overlay edge connected to the trigger should have squared corners, while
      // the opposite end has rounded corners. We apply a CSS class to swap the
      // border-radius based on the overlay position.

      var panelClass = this._aboveClass;
      var abovePositions = [{
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom',
        panelClass: panelClass
      }, {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom',
        panelClass: panelClass
      }];
      var positions;

      if (this.position === 'above') {
        positions = abovePositions;
      } else if (this.position === 'below') {
        positions = belowPositions;
      } else {
        positions = [].concat(belowPositions, abovePositions);
      }

      positionStrategy.withPositions(positions);
    }
  }, {
    key: "_getConnectedElement",
    value: function _getConnectedElement() {
      if (this.connectedTo) {
        return this.connectedTo.elementRef;
      }

      return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
    }
  }, {
    key: "_getPanelWidth",
    value: function _getPanelWidth() {
      return this.autocomplete.panelWidth || this._getHostWidth();
    }
    /** Returns the width of the input element, so the panel width can match it. */

  }, {
    key: "_getHostWidth",
    value: function _getHostWidth() {
      return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
    }
    /**
     * Resets the active item to -1 so arrow events will activate the
     * correct options, or to 0 if the consumer opted into it.
     */

  }, {
    key: "_resetActiveItem",
    value: function _resetActiveItem() {
      var autocomplete = this.autocomplete;

      if (autocomplete.autoActiveFirstOption) {
        // Note that we go through `setFirstItemActive`, rather than `setActiveItem(0)`, because
        // the former will find the next enabled option, if the first one is disabled.
        autocomplete._keyManager.setFirstItemActive();
      } else {
        autocomplete._keyManager.setActiveItem(-1);
      }
    }
    /** Determines whether the panel can be opened. */

  }, {
    key: "_canOpen",
    value: function _canOpen() {
      var element = this._element.nativeElement;
      return !element.readOnly && !element.disabled && !this._autocompleteDisabled;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */

  }, {
    key: "_getWindow",
    value: function _getWindow() {
      var _a;

      return ((_a = this._document) === null || _a === void 0 ? void 0 : _a.defaultView) || window;
    }
    /** Scrolls to a particular option in the list. */

  }, {
    key: "_scrollToOption",
    value: function _scrollToOption(index) {
      // Given that we are not actually focusing active options, we must manually adjust scroll
      // to reveal options below the fold. First, we find the offset of the option from the top
      // of the panel. If that offset is below the fold, the new scrollTop will be the offset -
      // the panel height + the option height, so the active option will be just visible at the
      // bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
      // will become the offset. If that offset is visible within the panel already, the scrollTop is
      // not adjusted.
      var autocomplete = this.autocomplete;

      var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["_countGroupLabelsBeforeOption"])(index, autocomplete.options, autocomplete.optionGroups);

      if (index === 0 && labelCount === 1) {
        // If we've got one group label before the option and we're at the top option,
        // scroll the list to the top. This is better UX than scrolling the list to the
        // top of the option, because it allows the user to read the top group's label.
        autocomplete._setScrollTop(0);
      } else if (autocomplete.panel) {
        var option = autocomplete.options.toArray()[index];

        if (option) {
          var element = option._getHostElement();

          var newScrollPosition = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["_getOptionScrollPosition"])(element.offsetTop, element.offsetHeight, autocomplete._getScrollTop(), autocomplete.panel.nativeElement.offsetHeight);

          autocomplete._setScrollTop(newScrollPosition);
        }
      }
    }
  }]);

  return _MatAutocompleteTriggerBase;
}();

_MatAutocompleteTriggerBase.ɵfac = function _MatAutocompleteTriggerBase_Factory(t) {
  return new (t || _MatAutocompleteTriggerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD"], 9), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, 8));
};

_MatAutocompleteTriggerBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: _MatAutocompleteTriggerBase,
  inputs: {
    position: ["matAutocompletePosition", "position"],
    autocompleteAttribute: ["autocomplete", "autocompleteAttribute"],
    autocompleteDisabled: ["matAutocompleteDisabled", "autocompleteDisabled"],
    autocomplete: ["matAutocomplete", "autocomplete"],
    connectedTo: ["matAutocompleteConnectedTo", "connectedTo"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]]
});

_MatAutocompleteTriggerBase.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]
  }, {
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewContainerRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
      args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
    }]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
    }]
  }, {
    type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
      args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD"]]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Host"]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]
    }]
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ViewportRuler"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
      args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
    }]
  }];
};

_MatAutocompleteTriggerBase.propDecorators = {
  autocomplete: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
    args: ['matAutocomplete']
  }],
  position: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
    args: ['matAutocompletePosition']
  }],
  connectedTo: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
    args: ['matAutocompleteConnectedTo']
  }],
  autocompleteAttribute: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
    args: ['autocomplete']
  }],
  autocompleteDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
    args: ['matAutocompleteDisabled']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](_MatAutocompleteTriggerBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]
    }, {
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewContainerRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
        args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }]
    }, {
      type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
        args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD"]]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Host"]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]
      }]
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ViewportRuler"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
        args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
      args: ['matAutocompletePosition']
    }],
    autocompleteAttribute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
      args: ['autocomplete']
    }],
    autocompleteDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
      args: ['matAutocompleteDisabled']
    }],
    autocomplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
      args: ['matAutocomplete']
    }],
    connectedTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
      args: ['matAutocompleteConnectedTo']
    }]
  });
})();

var MatAutocompleteTrigger = /*#__PURE__*/function (_MatAutocompleteTrigg) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MatAutocompleteTrigger, _MatAutocompleteTrigg);

  var _super4 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(MatAutocompleteTrigger);

  function MatAutocompleteTrigger() {
    var _this11;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatAutocompleteTrigger);

    _this11 = _super4.apply(this, arguments);
    _this11._aboveClass = 'mat-autocomplete-panel-above';
    return _this11;
  }

  return MatAutocompleteTrigger;
}(_MatAutocompleteTriggerBase);

MatAutocompleteTrigger.ɵfac = function MatAutocompleteTrigger_Factory(t) {
  return ɵMatAutocompleteTrigger_BaseFactory(t || MatAutocompleteTrigger);
};

MatAutocompleteTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: MatAutocompleteTrigger,
  selectors: [["input", "matAutocomplete", ""], ["textarea", "matAutocomplete", ""]],
  hostAttrs: [1, "mat-autocomplete-trigger"],
  hostVars: 7,
  hostBindings: function MatAutocompleteTrigger_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("focusin", function MatAutocompleteTrigger_focusin_HostBindingHandler() {
        return ctx._handleFocus();
      })("blur", function MatAutocompleteTrigger_blur_HostBindingHandler() {
        return ctx._onTouched();
      })("input", function MatAutocompleteTrigger_input_HostBindingHandler($event) {
        return ctx._handleInput($event);
      })("keydown", function MatAutocompleteTrigger_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("autocomplete", ctx.autocompleteAttribute)("role", ctx.autocompleteDisabled ? null : "combobox")("aria-autocomplete", ctx.autocompleteDisabled ? null : "list")("aria-activedescendant", ctx.panelOpen && ctx.activeOption ? ctx.activeOption.id : null)("aria-expanded", ctx.autocompleteDisabled ? null : ctx.panelOpen.toString())("aria-owns", ctx.autocompleteDisabled || !ctx.panelOpen ? null : ctx.autocomplete == null ? null : ctx.autocomplete.id)("aria-haspopup", !ctx.autocompleteDisabled);
    }
  },
  exportAs: ["matAutocompleteTrigger"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([MAT_AUTOCOMPLETE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]]
});
var ɵMatAutocompleteTrigger_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetInheritedFactory"](MatAutocompleteTrigger);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](MatAutocompleteTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"],
    args: [{
      selector: "input[matAutocomplete], textarea[matAutocomplete]",
      host: {
        'class': 'mat-autocomplete-trigger',
        '[attr.autocomplete]': 'autocompleteAttribute',
        '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
        '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
        '[attr.aria-activedescendant]': '(panelOpen && activeOption) ? activeOption.id : null',
        '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
        '[attr.aria-owns]': '(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id',
        '[attr.aria-haspopup]': '!autocompleteDisabled',
        // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
        // a little earlier. This avoids issues where IE delays the focusing of the input.
        '(focusin)': '_handleFocus()',
        '(blur)': '_onTouched()',
        '(input)': '_handleInput($event)',
        '(keydown)': '_handleKeydown($event)'
      },
      exportAs: 'matAutocompleteTrigger',
      providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
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


var MatAutocompleteModule = function MatAutocompleteModule() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatAutocompleteModule);
};

MatAutocompleteModule.ɵfac = function MatAutocompleteModule_Factory(t) {
  return new (t || MatAutocompleteModule)();
};

MatAutocompleteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: MatAutocompleteModule
});
MatAutocompleteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER],
  imports: [[_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](MatAutocompleteModule, {
    declarations: function declarations() {
      return [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin];
    },
    imports: function imports() {
      return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"]];
    },
    exports: function exports() {
      return [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](MatAutocompleteModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"],
    args: [{
      imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"]],
      exports: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]],
      declarations: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
      providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
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


 //# sourceMappingURL=autocomplete.js.map

/***/ })

}]);
//# sourceMappingURL=default~edit-edit-module~replace-content-replace-content-module.js.map