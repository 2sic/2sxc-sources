(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-administration-app-administration-module~edit-edit-module"],{

/***/ "+Tre":
/*!*****************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js ***!
  \*****************************************************************************************************************/
/*! exports provided: MAT_CHECKBOX_CLICK_ACTION, MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, MAT_CHECKBOX_DEFAULT_OPTIONS, MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY, MAT_CHECKBOX_REQUIRED_VALIDATOR, MatCheckbox, MatCheckboxChange, MatCheckboxModule, MatCheckboxRequiredValidator, _MatCheckboxRequiredValidatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_CLICK_ACTION", function() { return MAT_CHECKBOX_CLICK_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR", function() { return MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_DEFAULT_OPTIONS", function() { return MAT_CHECKBOX_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY", function() { return MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_REQUIRED_VALIDATOR", function() { return MAT_CHECKBOX_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCheckbox", function() { return MatCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxChange", function() { return MatCheckboxChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxModule", function() { return MatCheckboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxRequiredValidator", function() { return MatCheckboxRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatCheckboxRequiredValidatorModule", function() { return _MatCheckboxRequiredValidatorModule; });
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/createClass */ "MMYH");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/inherits */ "8K1b");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/createSuper */ "AqVP");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "9fIP");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "sg/T");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ "5XID");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "5lCh");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/observers */ "TKFd");











/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token to be used to override the default options for `mat-checkbox`. */





var _c0 = ["input"];

var _c1 = function _c1() {
  return {
    enterDuration: 150
  };
};

var _c2 = ["*"];
var MAT_CHECKBOX_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('mat-checkbox-default-options', {
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
 * Injection token that can be used to specify the checkbox click behavior.
 * @deprecated Injection token will be removed, use `MAT_CHECKBOX_DEFAULT_OPTIONS` instead.
 * @breaking-change 10.0.0
 */


var MAT_CHECKBOX_CLICK_ACTION = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('mat-checkbox-click-action');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Increasing integer for generating unique ids for checkbox components.

var nextUniqueId = 0;
/**
 * Provider Expression that allows mat-checkbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */

var MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function () {
    return MatCheckbox;
  }),
  multi: true
};
/** Change event object emitted by MatCheckbox. */

var MatCheckboxChange = function MatCheckboxChange() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatCheckboxChange);
}; // Boilerplate for applying mixins to MatCheckbox.

/** @docs-private */


var MatCheckboxBase = function MatCheckboxBase(_elementRef) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatCheckboxBase);

  this._elementRef = _elementRef;
};

var _MatCheckboxMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinDisabled"])(MatCheckboxBase))));
/**
 * A material design checkbox component. Supports all of the functionality of an HTML5 checkbox,
 * and exposes a similar API. A MatCheckbox can be either checked, unchecked, indeterminate, or
 * disabled. Note that all additional accessibility attributes are taken care of by the component,
 * so there is no need to provide them yourself. However, if you want to omit a label and still
 * have the checkbox be accessible, you may supply an [aria-label] input.
 * See: https://material.io/design/components/selection-controls.html
 */


var MatCheckbox = /*#__PURE__*/function (_MatCheckboxMixinBase2) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(MatCheckbox, _MatCheckboxMixinBase2);

  var _super = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(MatCheckbox);

  function MatCheckbox(elementRef, _changeDetectorRef, _focusMonitor, _ngZone, tabIndex,
  /**
   * @deprecated `_clickAction` parameter to be removed, use
   * `MAT_CHECKBOX_DEFAULT_OPTIONS`
   * @breaking-change 10.0.0
   */
  _clickAction, _animationMode, _options) {
    var _this;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatCheckbox);

    _this = _super.call(this, elementRef);
    _this._changeDetectorRef = _changeDetectorRef;
    _this._focusMonitor = _focusMonitor;
    _this._ngZone = _ngZone;
    _this._clickAction = _clickAction;
    _this._animationMode = _animationMode;
    _this._options = _options;
    /**
     * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
     * take precedence so this may be omitted.
     */

    _this.ariaLabel = '';
    /**
     * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
     */

    _this.ariaLabelledby = null;
    _this._uniqueId = "mat-checkbox-".concat(++nextUniqueId);
    /** A unique id for the checkbox input. If none is supplied, it will be auto-generated. */

    _this.id = _this._uniqueId;
    /** Whether the label should appear after or before the checkbox. Defaults to 'after' */

    _this.labelPosition = 'after';
    /** Name value will be applied to the input element if present */

    _this.name = null;
    /** Event emitted when the checkbox's `checked` value changes. */

    _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    /** Event emitted when the checkbox's `indeterminate` value changes. */

    _this.indeterminateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    /**
     * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
     * @docs-private
     */

    _this._onTouched = function () {};

    _this._currentAnimationClass = '';
    _this._currentCheckState = 0
    /* Init */
    ;

    _this._controlValueAccessorChangeFn = function () {};

    _this._checked = false;
    _this._disabled = false;
    _this._indeterminate = false;
    _this._options = _this._options || {};

    if (_this._options.color) {
      _this.color = _this.defaultColor = _this._options.color;
    }

    _this.tabIndex = parseInt(tabIndex) || 0; // TODO: Remove this after the `_clickAction` parameter is removed as an injection parameter.

    _this._clickAction = _this._clickAction || _this._options.clickAction;
    return _this;
  }
  /** Returns the unique id for the visual hidden input. */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MatCheckbox, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this._focusMonitor.monitor(this._elementRef, true).subscribe(function (focusOrigin) {
        if (!focusOrigin) {
          // When a focused element becomes disabled, the browser *immediately* fires a blur event.
          // Angular does not expect events to be raised during change detection, so any state change
          // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
          // See https://github.com/angular/angular/issues/17793. To work around this, we defer
          // telling the form control it has been touched until the next tick.
          Promise.resolve().then(function () {
            _this2._onTouched();

            _this2._changeDetectorRef.markForCheck();
          });
        }
      });

      this._syncIndeterminate(this._indeterminate);
    } // TODO: Delete next major revision.

  }, {
    key: "ngAfterViewChecked",
    value: function ngAfterViewChecked() {}
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /**
     * Whether the checkbox is checked.
     */

  }, {
    key: "_isRippleDisabled",
    value: function _isRippleDisabled() {
      return this.disableRipple || this.disabled;
    }
    /** Method being called whenever the label text changes. */

  }, {
    key: "_onLabelTextChange",
    value: function _onLabelTextChange() {
      // Since the event of the `cdkObserveContent` directive runs outside of the zone, the checkbox
      // component will be only marked for check, but no actual change detection runs automatically.
      // Instead of going back into the zone in order to trigger a change detection which causes
      // *all* components to be checked (if explicitly marked or not using OnPush), we only trigger
      // an explicit change detection for the checkbox view and its children.
      this._changeDetectorRef.detectChanges();
    } // Implemented as part of ControlValueAccessor.

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this.checked = !!value;
    } // Implemented as part of ControlValueAccessor.

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this._controlValueAccessorChangeFn = fn;
    } // Implemented as part of ControlValueAccessor.

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this._onTouched = fn;
    } // Implemented as part of ControlValueAccessor.

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this.disabled = isDisabled;
    }
  }, {
    key: "_getAriaChecked",
    value: function _getAriaChecked() {
      if (this.checked) {
        return 'true';
      }

      return this.indeterminate ? 'mixed' : 'false';
    }
  }, {
    key: "_transitionCheckState",
    value: function _transitionCheckState(newState) {
      var oldState = this._currentCheckState;
      var element = this._elementRef.nativeElement;

      if (oldState === newState) {
        return;
      }

      if (this._currentAnimationClass.length > 0) {
        element.classList.remove(this._currentAnimationClass);
      }

      this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
      this._currentCheckState = newState;

      if (this._currentAnimationClass.length > 0) {
        element.classList.add(this._currentAnimationClass); // Remove the animation class to avoid animation when the checkbox is moved between containers

        var animationClass = this._currentAnimationClass;

        this._ngZone.runOutsideAngular(function () {
          setTimeout(function () {
            element.classList.remove(animationClass);
          }, 1000);
        });
      }
    }
  }, {
    key: "_emitChangeEvent",
    value: function _emitChangeEvent() {
      var event = new MatCheckboxChange();
      event.source = this;
      event.checked = this.checked;

      this._controlValueAccessorChangeFn(this.checked);

      this.change.emit(event);
    }
    /** Toggles the `checked` state of the checkbox. */

  }, {
    key: "toggle",
    value: function toggle() {
      this.checked = !this.checked;
    }
    /**
     * Event handler for checkbox input element.
     * Toggles checked state if element is not disabled.
     * Do not toggle on (change) event since IE doesn't fire change event when
     *   indeterminate checkbox is clicked.
     * @param event
     */

  }, {
    key: "_onInputClick",
    value: function _onInputClick(event) {
      var _this3 = this;

      // We have to stop propagation for click events on the visual hidden input element.
      // By default, when a user clicks on a label element, a generated click event will be
      // dispatched on the associated input element. Since we are using a label element as our
      // root container, the click event on the `checkbox` will be executed twice.
      // The real click event will bubble up, and the generated click event also tries to bubble up.
      // This will lead to multiple click events.
      // Preventing bubbling for the second event will solve that issue.
      event.stopPropagation(); // If resetIndeterminate is false, and the current state is indeterminate, do nothing on click

      if (!this.disabled && this._clickAction !== 'noop') {
        // When user manually click on the checkbox, `indeterminate` is set to false.
        if (this.indeterminate && this._clickAction !== 'check') {
          Promise.resolve().then(function () {
            _this3._indeterminate = false;

            _this3.indeterminateChange.emit(_this3._indeterminate);
          });
        }

        this.toggle();

        this._transitionCheckState(this._checked ? 1
        /* Checked */
        : 2
        /* Unchecked */
        ); // Emit our custom change event if the native input emitted one.
        // It is important to only emit it, if the native input triggered one, because
        // we don't want to trigger a change event, when the `checked` variable changes for example.


        this._emitChangeEvent();
      } else if (!this.disabled && this._clickAction === 'noop') {
        // Reset native input when clicked with noop. The native checkbox becomes checked after
        // click, reset it to be align with `checked` value of `mat-checkbox`.
        this._inputElement.nativeElement.checked = this.checked;
        this._inputElement.nativeElement.indeterminate = this.indeterminate;
      }
    }
    /** Focuses the checkbox. */

  }, {
    key: "focus",
    value: function focus() {
      var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'keyboard';
      var options = arguments.length > 1 ? arguments[1] : undefined;

      this._focusMonitor.focusVia(this._inputElement, origin, options);
    }
  }, {
    key: "_onInteractionEvent",
    value: function _onInteractionEvent(event) {
      // We always have to stop propagation on the change event.
      // Otherwise the change event, from the input element, will bubble up and
      // emit its event object to the `change` output.
      event.stopPropagation();
    }
  }, {
    key: "_getAnimationClassForCheckStateTransition",
    value: function _getAnimationClassForCheckStateTransition(oldState, newState) {
      // Don't transition if animations are disabled.
      if (this._animationMode === 'NoopAnimations') {
        return '';
      }

      var animSuffix = '';

      switch (oldState) {
        case 0
        /* Init */
        :
          // Handle edge case where user interacts with checkbox that does not have [(ngModel)] or
          // [checked] bound to it.
          if (newState === 1
          /* Checked */
          ) {
              animSuffix = 'unchecked-checked';
            } else if (newState == 3
          /* Indeterminate */
          ) {
              animSuffix = 'unchecked-indeterminate';
            } else {
            return '';
          }

          break;

        case 2
        /* Unchecked */
        :
          animSuffix = newState === 1
          /* Checked */
          ? 'unchecked-checked' : 'unchecked-indeterminate';
          break;

        case 1
        /* Checked */
        :
          animSuffix = newState === 2
          /* Unchecked */
          ? 'checked-unchecked' : 'checked-indeterminate';
          break;

        case 3
        /* Indeterminate */
        :
          animSuffix = newState === 1
          /* Checked */
          ? 'indeterminate-checked' : 'indeterminate-unchecked';
          break;
      }

      return "mat-checkbox-anim-".concat(animSuffix);
    }
    /**
     * Syncs the indeterminate value with the checkbox DOM node.
     *
     * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
     * property is supported on an element boils down to `if (propName in element)`. Domino's
     * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
     * server-side rendering.
     */

  }, {
    key: "_syncIndeterminate",
    value: function _syncIndeterminate(value) {
      var nativeCheckbox = this._inputElement;

      if (nativeCheckbox) {
        nativeCheckbox.nativeElement.indeterminate = value;
      }
    }
  }, {
    key: "inputId",
    get: function get() {
      return "".concat(this.id || this._uniqueId, "-input");
    }
    /** Whether the checkbox is required. */

  }, {
    key: "required",
    get: function get() {
      return this._required;
    },
    set: function set(value) {
      this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
    }
  }, {
    key: "checked",
    get: function get() {
      return this._checked;
    },
    set: function set(value) {
      if (value != this.checked) {
        this._checked = value;

        this._changeDetectorRef.markForCheck();
      }
    }
    /**
     * Whether the checkbox is disabled. This fully overrides the implementation provided by
     * mixinDisabled, but the mixin is still required because mixinTabIndex requires it.
     */

  }, {
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(value) {
      var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);

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

  }, {
    key: "indeterminate",
    get: function get() {
      return this._indeterminate;
    },
    set: function set(value) {
      var changed = value != this._indeterminate;
      this._indeterminate = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);

      if (changed) {
        if (this._indeterminate) {
          this._transitionCheckState(3
          /* Indeterminate */
          );
        } else {
          this._transitionCheckState(this.checked ? 1
          /* Checked */
          : 2
          /* Unchecked */
          );
        }

        this.indeterminateChange.emit(this._indeterminate);
      }

      this._syncIndeterminate(this._indeterminate);
    }
  }]);

  return MatCheckbox;
}(_MatCheckboxMixinBase);

MatCheckbox.ɵfac = function MatCheckbox_Factory(t) {
  return new (t || MatCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](MAT_CHECKBOX_CLICK_ACTION, 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](MAT_CHECKBOX_DEFAULT_OPTIONS, 8));
};

MatCheckbox.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: MatCheckbox,
  selectors: [["mat-checkbox"]],
  viewQuery: function MatCheckbox_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRipple"], true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
    }
  },
  hostAttrs: [1, "mat-checkbox"],
  hostVars: 12,
  hostBindings: function MatCheckbox_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("tabindex", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("mat-checkbox-indeterminate", ctx.indeterminate)("mat-checkbox-checked", ctx.checked)("mat-checkbox-disabled", ctx.disabled)("mat-checkbox-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    }
  },
  inputs: {
    disableRipple: "disableRipple",
    color: "color",
    tabIndex: "tabIndex",
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    id: "id",
    labelPosition: "labelPosition",
    name: "name",
    required: "required",
    checked: "checked",
    disabled: "disabled",
    indeterminate: "indeterminate",
    ariaDescribedby: ["aria-describedby", "ariaDescribedby"],
    value: "value"
  },
  outputs: {
    change: "change",
    indeterminateChange: "indeterminateChange"
  },
  exportAs: ["matCheckbox"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c2,
  decls: 17,
  vars: 20,
  consts: [[1, "mat-checkbox-layout"], ["label", ""], [1, "mat-checkbox-inner-container"], ["type", "checkbox", 1, "mat-checkbox-input", "cdk-visually-hidden", 3, "id", "required", "checked", "disabled", "tabIndex", "change", "click"], ["input", ""], ["matRipple", "", 1, "mat-checkbox-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleRadius", "matRippleCentered", "matRippleAnimation"], [1, "mat-ripple-element", "mat-checkbox-persistent-ripple"], [1, "mat-checkbox-frame"], [1, "mat-checkbox-background"], ["version", "1.1", "focusable", "false", "viewBox", "0 0 24 24", 0, "xml", "space", "preserve", 1, "mat-checkbox-checkmark"], ["fill", "none", "stroke", "white", "d", "M4.1,12.7 9,17.6 20.3,6.3", 1, "mat-checkbox-checkmark-path"], [1, "mat-checkbox-mixedmark"], [1, "mat-checkbox-label", 3, "cdkObserveContent"], ["checkboxLabel", ""], [2, "display", "none"]],
  template: function MatCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function MatCheckbox_Template_input_change_3_listener($event) {
        return ctx._onInteractionEvent($event);
      })("click", function MatCheckbox_Template_input_click_3_listener($event) {
        return ctx._onInputClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "svg", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "path", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("cdkObserveContent", function MatCheckbox_Template_span_cdkObserveContent_12_listener() {
        return ctx._onLabelTextChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "\xA0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1);

      var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](13);

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("for", ctx.inputId);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("mat-checkbox-inner-container-no-side-margin", !_r2.textContent || !_r2.textContent.trim());
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("checked", ctx.checked)("disabled", ctx.disabled)("tabIndex", ctx.tabIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("value", ctx.value)("name", ctx.name)("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-checked", ctx._getAriaChecked())("aria-describedby", ctx.ariaDescribedby);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx._isRippleDisabled())("matRippleRadius", 20)("matRippleCentered", true)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](19, _c1));
    }
  },
  directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["CdkObserveContent"]],
  styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n"],
  encapsulation: 2,
  changeDetection: 0
});

MatCheckbox.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Attribute"],
      args: ['tabindex']
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [MAT_CHECKBOX_CLICK_ACTION]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [MAT_CHECKBOX_DEFAULT_OPTIONS]
    }]
  }];
};

MatCheckbox.propDecorators = {
  ariaLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['aria-label']
  }],
  ariaLabelledby: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['aria-labelledby']
  }],
  ariaDescribedby: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['aria-describedby']
  }],
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  required: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  labelPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  change: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
  }],
  indeterminateChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  _inputElement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
    args: ['input']
  }],
  ripple: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
    args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRipple"]]
  }],
  checked: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  indeterminate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatCheckbox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
    args: [{
      selector: 'mat-checkbox',
      template: "<label [attr.for]=\"inputId\" class=\"mat-checkbox-layout\" #label>\n  <div class=\"mat-checkbox-inner-container\"\n       [class.mat-checkbox-inner-container-no-side-margin]=\"!checkboxLabel.textContent || !checkboxLabel.textContent.trim()\">\n    <input #input\n           class=\"mat-checkbox-input cdk-visually-hidden\" type=\"checkbox\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [checked]=\"checked\"\n           [attr.value]=\"value\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [tabIndex]=\"tabIndex\"\n           [attr.aria-label]=\"ariaLabel || null\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           [attr.aria-checked]=\"_getAriaChecked()\"\n           [attr.aria-describedby]=\"ariaDescribedby\"\n           (change)=\"_onInteractionEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n    <div matRipple class=\"mat-checkbox-ripple mat-focus-indicator\"\n         [matRippleTrigger]=\"label\"\n         [matRippleDisabled]=\"_isRippleDisabled()\"\n         [matRippleRadius]=\"20\"\n         [matRippleCentered]=\"true\"\n         [matRippleAnimation]=\"{enterDuration: 150}\">\n      <div class=\"mat-ripple-element mat-checkbox-persistent-ripple\"></div>\n    </div>\n    <div class=\"mat-checkbox-frame\"></div>\n    <div class=\"mat-checkbox-background\">\n      <svg version=\"1.1\"\n           focusable=\"false\"\n           class=\"mat-checkbox-checkmark\"\n           viewBox=\"0 0 24 24\"\n           xml:space=\"preserve\">\n        <path class=\"mat-checkbox-checkmark-path\"\n              fill=\"none\"\n              stroke=\"white\"\n              d=\"M4.1,12.7 9,17.6 20.3,6.3\"/>\n      </svg>\n      <!-- Element for rendering the indeterminate state checkbox. -->\n      <div class=\"mat-checkbox-mixedmark\"></div>\n    </div>\n  </div>\n  <span class=\"mat-checkbox-label\" #checkboxLabel (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
      exportAs: 'matCheckbox',
      host: {
        'class': 'mat-checkbox',
        '[id]': 'id',
        '[attr.tabindex]': 'null',
        '[class.mat-checkbox-indeterminate]': 'indeterminate',
        '[class.mat-checkbox-checked]': 'checked',
        '[class.mat-checkbox-disabled]': 'disabled',
        '[class.mat-checkbox-label-before]': 'labelPosition == "before"',
        '[class._mat-animation-noopable]': "_animationMode === 'NoopAnimations'"
      },
      providers: [MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR],
      inputs: ['disableRipple', 'color', 'tabIndex'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectionStrategy"].OnPush,
      styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Attribute"],
        args: ['tabindex']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [MAT_CHECKBOX_CLICK_ACTION]
      }]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [MAT_CHECKBOX_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['aria-labelledby']
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
    }],
    indeterminateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    checked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    indeterminate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    ariaDescribedby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['aria-describedby']
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    _inputElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
      args: ['input']
    }],
    ripple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRipple"]]
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


var MAT_CHECKBOX_REQUIRED_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function () {
    return MatCheckboxRequiredValidator;
  }),
  multi: true
};
/**
 * Validator for Material checkbox's required attribute in template-driven checkbox.
 * Current CheckboxRequiredValidator only work with `input type=checkbox` and does not
 * work with `mat-checkbox`.
 */

var MatCheckboxRequiredValidator = /*#__PURE__*/function (_CheckboxRequiredVali) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(MatCheckboxRequiredValidator, _CheckboxRequiredVali);

  var _super2 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(MatCheckboxRequiredValidator);

  function MatCheckboxRequiredValidator() {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatCheckboxRequiredValidator);

    return _super2.apply(this, arguments);
  }

  return MatCheckboxRequiredValidator;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxRequiredValidator"]);

MatCheckboxRequiredValidator.ɵfac = function MatCheckboxRequiredValidator_Factory(t) {
  return ɵMatCheckboxRequiredValidator_BaseFactory(t || MatCheckboxRequiredValidator);
};

MatCheckboxRequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: MatCheckboxRequiredValidator,
  selectors: [["mat-checkbox", "required", "", "formControlName", ""], ["mat-checkbox", "required", "", "formControl", ""], ["mat-checkbox", "required", "", "ngModel", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([MAT_CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
var ɵMatCheckboxRequiredValidator_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](MatCheckboxRequiredValidator);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatCheckboxRequiredValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: "mat-checkbox[required][formControlName],\n             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]",
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


var _MatCheckboxRequiredValidatorModule = function _MatCheckboxRequiredValidatorModule() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _MatCheckboxRequiredValidatorModule);
};

_MatCheckboxRequiredValidatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _MatCheckboxRequiredValidatorModule
});
_MatCheckboxRequiredValidatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  factory: function _MatCheckboxRequiredValidatorModule_Factory(t) {
    return new (t || _MatCheckboxRequiredValidatorModule)();
  }
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_MatCheckboxRequiredValidatorModule, {
    declarations: [MatCheckboxRequiredValidator],
    exports: [MatCheckboxRequiredValidator]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](_MatCheckboxRequiredValidatorModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
    args: [{
      exports: [MatCheckboxRequiredValidator],
      declarations: [MatCheckboxRequiredValidator]
    }]
  }], null, null);
})();

var MatCheckboxModule = function MatCheckboxModule() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatCheckboxModule);
};

MatCheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: MatCheckboxModule
});
MatCheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  factory: function MatCheckboxModule_Factory(t) {
    return new (t || MatCheckboxModule)();
  },
  imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"], _MatCheckboxRequiredValidatorModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], _MatCheckboxRequiredValidatorModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MatCheckboxModule, {
    declarations: function declarations() {
      return [MatCheckbox];
    },
    imports: function imports() {
      return [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"], _MatCheckboxRequiredValidatorModule];
    },
    exports: function exports() {
      return [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], _MatCheckboxRequiredValidatorModule];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatCheckboxModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"], _MatCheckboxRequiredValidatorModule],
      exports: [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], _MatCheckboxRequiredValidatorModule],
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
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "+UDY":
/*!**************************************************************!*\
  !*** ../edit/eav-material-controls/adam/sanitize.service.ts ***!
  \**************************************************************/
/*! exports provided: SanitizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeService", function() { return SanitizeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");


var SanitizeService = /** @class */ (function () {
    function SanitizeService() {
        this.cleanBadPath = function (sanitized) {
            // check for undefined
            if (!sanitized) {
                return sanitized;
            }
            var goodChar = '_';
            var illegalRe = /[\?<>\\:\*\|":]/g;
            var controlRe = /[\x00-\x1f\x80-\x9f]/g;
            var reservedRe = /^\.+$/;
            var windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
            var windowsTrailingRe = /[\. ]+$/;
            return sanitized
                .replace(illegalRe, goodChar)
                .replace(controlRe, goodChar)
                .replace(reservedRe, goodChar)
                .replace(windowsReservedRe, goodChar)
                .replace(windowsTrailingRe, goodChar);
        };
    }
    SanitizeService.prototype.removeFromStart = function (sanitized, charToRemove) {
        // check for undefined
        if (!sanitized) {
            return sanitized;
        }
        while (sanitized.substring(0, 1) === charToRemove) {
            sanitized = sanitized.substring(1);
        }
        return sanitized;
    };
    SanitizeService.prototype.removeFromEnd = function (sanitized, charToRemove) {
        // check for undefined
        if (!sanitized) {
            return sanitized;
        }
        while (sanitized.substring(sanitized.length - 1, sanitized.length) === charToRemove) {
            sanitized = sanitized.substring(0, sanitized.length - 1);
        }
        return sanitized;
    };
    // sanitize path
    SanitizeService.prototype.sanitizePath = function (sanitized) {
        // check for undefined
        if (!sanitized) {
            return sanitized;
        }
        // remove slashes form start of path
        sanitized = this.removeFromStart(sanitized, '\/');
        // remove slashed form end of path
        sanitized = this.removeFromEnd(sanitized, '\/');
        // remove backslashes form start of path
        sanitized = this.removeFromStart(sanitized, '\\');
        // remove backslashes form end of path
        sanitized = this.removeFromEnd(sanitized, '\\');
        // replace bad
        sanitized = this.cleanBadPath(sanitized);
        return sanitized;
    };
    // sanitize file or folder name
    SanitizeService.prototype.sanitizeName = function (sanitized) {
        // check for undefined
        if (!sanitized) {
            return sanitized;
        }
        // in addition to all path validation rules
        // slashes are not valid in file or folder name
        var replacement = '_';
        var illegalRe = /\//g;
        return this.sanitizePath(sanitized)
            .replace(illegalRe, replacement);
    };
    SanitizeService.ctorParameters = function () { return []; };
    SanitizeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SanitizeService);
    return SanitizeService;
}());



/***/ }),

/***/ "Q+Kz":
/*!**********************************************************!*\
  !*** ./src/app/shared/constants/file-names.constants.ts ***!
  \**********************************************************/
/*! exports provided: defaultControllerName, defaultTemplateName, defaultTokenName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultControllerName", function() { return defaultControllerName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateName", function() { return defaultTemplateName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTokenName", function() { return defaultTokenName; });
var defaultControllerName = 'MyController.cs';
var defaultTemplateName = '_MyFile.cshtml';
var defaultTokenName = 'MyFile.html';


/***/ })

}]);
//# sourceMappingURL=default~app-administration-app-administration-module~edit-edit-module.js.map