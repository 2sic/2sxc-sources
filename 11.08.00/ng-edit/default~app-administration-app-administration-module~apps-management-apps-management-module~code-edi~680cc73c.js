(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"],{

/***/ "0+Is":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/field-hint/field-hint.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hint-box {\n  margin-top: 4px;\n}\n.hint-box .mat-hint,\n.hint-box .mat-error {\n  font-size: 12px;\n  display: block;\n}\n.hint-box__short .mat-hint,\n.hint-box__short .mat-error {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9maWVsZC1oaW50L2ZpZWxkLWhpbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7QUFDRTs7RUFFRSxlQUFBO0VBQ0EsY0FBQTtBQUNKO0FBSUk7O0VBRUUsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBRk4iLCJmaWxlIjoicHJvamVjdHMvbmctZGlhbG9ncy9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZpZWxkLWhpbnQvZmllbGQtaGludC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaW50LWJveCB7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG5cclxuICAubWF0LWhpbnQsXHJcbiAgLm1hdC1lcnJvciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICZfX3Nob3J0IHtcclxuXHJcbiAgICAubWF0LWhpbnQsXHJcbiAgICAubWF0LWVycm9yIHtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "29Wa":
/*!*******************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js ***!
  \*******************************************************************************************************************/
/*! exports provided: MAT_ERROR, MAT_FORM_FIELD, MAT_FORM_FIELD_DEFAULT_OPTIONS, MAT_PREFIX, MAT_SUFFIX, MatError, MatFormField, MatFormFieldControl, MatFormFieldModule, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix, _MAT_HINT, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, getMatFormFieldPlaceholderConflictError, matFormFieldAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ERROR", function() { return MAT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD", function() { return MAT_FORM_FIELD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function() { return MAT_FORM_FIELD_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PREFIX", function() { return MAT_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SUFFIX", function() { return MAT_SUFFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatError", function() { return MatError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormField", function() { return MatFormField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function() { return MatFormFieldControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function() { return MatFormFieldModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHint", function() { return MatHint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLabel", function() { return MatLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function() { return MatPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPrefix", function() { return MatPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSuffix", function() { return MatSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MAT_HINT", function() { return _MAT_HINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function() { return getMatFormFieldDuplicatedHintError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function() { return getMatFormFieldMissingControlError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function() { return getMatFormFieldPlaceholderConflictError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function() { return matFormFieldAnimations; });
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "fGyu");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/createClass */ "MMYH");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/inherits */ "8K1b");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/createSuper */ "AqVP");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "9fIP");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/observers */ "TKFd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ "E5oP");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/coercion */ "5XID");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ "f7+R");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/platform */ "cZZj");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "5lCh");
















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






var _c0 = ["underline"];
var _c1 = ["connectionContainer"];
var _c2 = ["inputContainer"];
var _c3 = ["label"];

function MatFormField_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}

function MatFormField_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function MatFormField_label_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r10._control.placeholder);
  }
}

function MatFormField_label_9_ng_content_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](0, 3, ["*ngSwitchCase", "true"]);
  }
}

function MatFormField_label_9_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function MatFormField_label_9_Template(rf, ctx) {
  if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("cdkObserveContent", function MatFormField_label_9_Template_label_cdkObserveContent_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r13.updateOutlineGap();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, MatFormField_label_9_ng_container_2_Template, 4, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, MatFormField_label_9_ng_content_3_Template, 1, 0, "ng-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, MatFormField_label_9_span_4_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mat-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat())("mat-form-field-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat())("mat-accent", ctx_r4.color == "accent")("mat-warn", ctx_r4.color == "warn");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("cdkObserveContentDisabled", ctx_r4.appearance != "outline")("id", ctx_r4._labelId)("ngSwitch", ctx_r4._hasLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("for", ctx_r4._control.id)("aria-owns", ctx_r4._control.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r4.hideRequiredMarker && ctx_r4._control.required && !ctx_r4._control.disabled);
  }
}

function MatFormField_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function MatFormField_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mat-accent", ctx_r6.color == "accent")("mat-warn", ctx_r6.color == "warn");
  }
}

function MatFormField_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](1, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@transitionMessages", ctx_r7._subscriptAnimationState);
  }
}

function MatFormField_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", ctx_r16._hintLabelId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r16.hintLabel);
  }
}

function MatFormField_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MatFormField_div_14_div_1_Template, 2, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](2, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](4, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@transitionMessages", ctx_r8._subscriptAnimationState);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.hintLabel);
  }
}

var _c4 = ["*", [["", "matPrefix", ""]], [["mat-placeholder"]], [["mat-label"]], [["", "matSuffix", ""]], [["mat-error"]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]];
var _c5 = ["*", "[matPrefix]", "mat-placeholder", "mat-label", "[matSuffix]", "mat-error", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
var nextUniqueId = 0;
/**
 * Injection token that can be used to reference instances of `MatError`. It serves as
 * alternative token to the actual `MatError` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */

var MAT_ERROR = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('MatError');
/** Single error message to be shown underneath the form field. */

var MatError = function MatError() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatError);

  this.id = "mat-error-".concat(nextUniqueId++);
};

MatError.ɵfac = function MatError_Factory(t) {
  return new (t || MatError)();
};

MatError.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatError,
  selectors: [["mat-error"]],
  hostAttrs: ["role", "alert", 1, "mat-error"],
  hostVars: 1,
  hostBindings: function MatError_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("id", ctx.id);
    }
  },
  inputs: {
    id: "id"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: MAT_ERROR,
    useExisting: MatError
  }])]
});
MatError.propDecorators = {
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatError, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'mat-error',
      host: {
        'class': 'mat-error',
        'role': 'alert',
        '[attr.id]': 'id'
      },
      providers: [{
        provide: MAT_ERROR,
        useExisting: MatError
      }]
    }]
  }], function () {
    return [];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
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

/**
 * Animations used by the MatFormField.
 * @docs-private
 */


var matFormFieldAnimations = {
  /** Animation that transitions the form field's error and hint messages. */
  transitionMessages: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["trigger"])('transitionMessages', [// TODO(mmalerba): Use angular animations for label animation as well.
  Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
    opacity: 1,
    transform: 'translateY(0%)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])('void => enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
    opacity: 0,
    transform: 'translateY(-100%)'
  }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])('300ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** An interface which allows a control to work inside of a `MatFormField`. */

var MatFormFieldControl = function MatFormFieldControl() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatFormFieldControl);
};

MatFormFieldControl.ɵfac = function MatFormFieldControl_Factory(t) {
  return new (t || MatFormFieldControl)();
};

MatFormFieldControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatFormFieldControl
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatFormFieldControl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** @docs-private */


function getMatFormFieldPlaceholderConflictError() {
  return Error('Placeholder attribute and child element were both specified.');
}
/** @docs-private */


function getMatFormFieldDuplicatedHintError(align) {
  return Error("A hint was already declared for 'align=\"".concat(align, "\"'."));
}
/** @docs-private */


function getMatFormFieldMissingControlError() {
  return Error('mat-form-field must contain a MatFormFieldControl.');
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var nextUniqueId$1 = 0;
/**
 * Injection token that can be used to reference instances of `MatHint`. It serves as
 * alternative token to the actual `MatHint` class which could cause unnecessary
 * retention of the class and its directive metadata.
 *
 * *Note*: This is not part of the public API as the MDC-based form-field will not
 * need a lightweight token for `MatHint` and we want to reduce breaking changes.
 */

var _MAT_HINT = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('MatHint');
/** Hint text to be shown underneath the form field control. */


var MatHint = function MatHint() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatHint);

  /** Whether to align the hint label at the start or end of the line. */
  this.align = 'start';
  /** Unique ID for the hint. Used for the aria-describedby on the form field control. */

  this.id = "mat-hint-".concat(nextUniqueId$1++);
};

MatHint.ɵfac = function MatHint_Factory(t) {
  return new (t || MatHint)();
};

MatHint.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatHint,
  selectors: [["mat-hint"]],
  hostAttrs: [1, "mat-hint"],
  hostVars: 4,
  hostBindings: function MatHint_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("id", ctx.id)("align", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mat-right", ctx.align == "end");
    }
  },
  inputs: {
    align: "align",
    id: "id"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _MAT_HINT,
    useExisting: MatHint
  }])]
});
MatHint.propDecorators = {
  align: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatHint, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'mat-hint',
      host: {
        'class': 'mat-hint',
        '[class.mat-right]': 'align == "end"',
        '[attr.id]': 'id',
        // Remove align attribute to prevent it from interfering with layout.
        '[attr.align]': 'null'
      },
      providers: [{
        provide: _MAT_HINT,
        useExisting: MatHint
      }]
    }]
  }], function () {
    return [];
  }, {
    align: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
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

/** The floating label for a `mat-form-field`. */


var MatLabel = function MatLabel() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatLabel);
};

MatLabel.ɵfac = function MatLabel_Factory(t) {
  return new (t || MatLabel)();
};

MatLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatLabel,
  selectors: [["mat-label"]]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatLabel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'mat-label'
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
 * The placeholder text for an `MatFormField`.
 * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
 *     placeholder.
 * @breaking-change 8.0.0
 */


var MatPlaceholder = function MatPlaceholder() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatPlaceholder);
};

MatPlaceholder.ɵfac = function MatPlaceholder_Factory(t) {
  return new (t || MatPlaceholder)();
};

MatPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatPlaceholder,
  selectors: [["mat-placeholder"]]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatPlaceholder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'mat-placeholder'
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
 * Injection token that can be used to reference instances of `MatPrefix`. It serves as
 * alternative token to the actual `MatPrefix` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


var MAT_PREFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('MatPrefix');
/** Prefix to be placed in front of the form field. */

var MatPrefix = function MatPrefix() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatPrefix);
};

MatPrefix.ɵfac = function MatPrefix_Factory(t) {
  return new (t || MatPrefix)();
};

MatPrefix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatPrefix,
  selectors: [["", "matPrefix", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: MAT_PREFIX,
    useExisting: MatPrefix
  }])]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatPrefix, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[matPrefix]',
      providers: [{
        provide: MAT_PREFIX,
        useExisting: MatPrefix
      }]
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
 * Injection token that can be used to reference instances of `MatSuffix`. It serves as
 * alternative token to the actual `MatSuffix` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


var MAT_SUFFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('MatSuffix');
/** Suffix to be placed at the end of the form field. */

var MatSuffix = function MatSuffix() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatSuffix);
};

MatSuffix.ɵfac = function MatSuffix_Factory(t) {
  return new (t || MatSuffix)();
};

MatSuffix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatSuffix,
  selectors: [["", "matSuffix", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: MAT_SUFFIX,
    useExisting: MatSuffix
  }])]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatSuffix, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[matSuffix]',
      providers: [{
        provide: MAT_SUFFIX,
        useExisting: MatSuffix
      }]
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


var nextUniqueId$2 = 0;
var floatingLabelScale = 0.75;
var outlineGapPadding = 5;
/**
 * Boilerplate for applying mixins to MatFormField.
 * @docs-private
 */

var MatFormFieldBase = function MatFormFieldBase(_elementRef) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatFormFieldBase);

  this._elementRef = _elementRef;
};
/**
 * Base class to which we're applying the form field mixins.
 * @docs-private
 */


var _MatFormFieldMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinColor"])(MatFormFieldBase, 'primary');
/**
 * Injection token that can be used to configure the
 * default options for all form field within an app.
 */


var MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('MAT_FORM_FIELD_DEFAULT_OPTIONS');
/**
 * Injection token that can be used to inject an instances of `MatFormField`. It serves
 * as alternative token to the actual `MatFormField` class which would cause unnecessary
 * retention of the `MatFormField` class and its component metadata.
 */

var MAT_FORM_FIELD = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('MatFormField');
/** Container for form controls that applies Material Design styling and behavior. */

var MatFormField = /*#__PURE__*/function (_MatFormFieldMixinBas) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MatFormField, _MatFormFieldMixinBas);

  var _super = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(MatFormField);

  function MatFormField(_elementRef, _changeDetectorRef, labelOptions, _dir, _defaults, _platform, _ngZone, _animationMode) {
    var _this;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatFormField);

    _this = _super.call(this, _elementRef);
    _this._elementRef = _elementRef;
    _this._changeDetectorRef = _changeDetectorRef;
    _this._dir = _dir;
    _this._defaults = _defaults;
    _this._platform = _platform;
    _this._ngZone = _ngZone;
    /**
     * Whether the outline gap needs to be calculated
     * immediately on the next change detection run.
     */

    _this._outlineGapCalculationNeededImmediately = false;
    /** Whether the outline gap needs to be calculated next time the zone has stabilized. */

    _this._outlineGapCalculationNeededOnStable = false;
    _this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
    /** Override for the logic that disables the label animation in certain cases. */

    _this._showAlwaysAnimate = false;
    /** State of the mat-hint and mat-error animations. */

    _this._subscriptAnimationState = '';
    _this._hintLabel = ''; // Unique id for the hint label.

    _this._hintLabelId = "mat-hint-".concat(nextUniqueId$2++); // Unique id for the label element.

    _this._labelId = "mat-form-field-label-".concat(nextUniqueId$2++);
    _this._labelOptions = labelOptions ? labelOptions : {};
    _this.floatLabel = _this._getDefaultFloatLabelState();
    _this._animationsEnabled = _animationMode !== 'NoopAnimations'; // Set the default through here so we invoke the setter on the first run.

    _this.appearance = _defaults && _defaults.appearance ? _defaults.appearance : 'legacy';
    _this._hideRequiredMarker = _defaults && _defaults.hideRequiredMarker != null ? _defaults.hideRequiredMarker : false;
    return _this;
  }
  /** The form-field appearance style. */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatFormField, [{
    key: "_shouldAlwaysFloat",

    /** Whether the floating label should always float or not. */
    value: function _shouldAlwaysFloat() {
      return this.floatLabel === 'always' && !this._showAlwaysAnimate;
    }
    /** Whether the label can float or not. */

  }, {
    key: "_canLabelFloat",
    value: function _canLabelFloat() {
      return this.floatLabel !== 'never';
    }
    /** Text for the form field hint. */

  }, {
    key: "getLabelId",

    /**
     * Gets the id of the label element. If no label is present, returns `null`.
     */
    value: function getLabelId() {
      return this._hasFloatingLabel() ? this._labelId : null;
    }
    /**
     * Gets an ElementRef for the element that a overlay attached to the form-field should be
     * positioned relative to.
     */

  }, {
    key: "getConnectedOverlayOrigin",
    value: function getConnectedOverlayOrigin() {
      return this._connectionContainerRef || this._elementRef;
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this2 = this;

      this._validateControlChild();

      var control = this._control;

      if (control.controlType) {
        this._elementRef.nativeElement.classList.add("mat-form-field-type-".concat(control.controlType));
      } // Subscribe to changes in the child control state in order to update the form field UI.


      control.stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null)).subscribe(function () {
        _this2._validatePlaceholders();

        _this2._syncDescribedByIds();

        _this2._changeDetectorRef.markForCheck();
      }); // Run change detection if the value changes.

      if (control.ngControl && control.ngControl.valueChanges) {
        control.ngControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this._destroyed)).subscribe(function () {
          return _this2._changeDetectorRef.markForCheck();
        });
      } // Note that we have to run outside of the `NgZone` explicitly,
      // in order to avoid throwing users into an infinite loop
      // if `zone-patch-rxjs` is included.


      this._ngZone.runOutsideAngular(function () {
        _this2._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(_this2._destroyed)).subscribe(function () {
          if (_this2._outlineGapCalculationNeededOnStable) {
            _this2.updateOutlineGap();
          }
        });
      }); // Run change detection and update the outline if the suffix or prefix changes.


      Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["merge"])(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(function () {
        _this2._outlineGapCalculationNeededOnStable = true;

        _this2._changeDetectorRef.markForCheck();
      }); // Re-validate when the number of hints changes.

      this._hintChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null)).subscribe(function () {
        _this2._processHints();

        _this2._changeDetectorRef.markForCheck();
      }); // Update the aria-described by when the number of errors changes.


      this._errorChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null)).subscribe(function () {
        _this2._syncDescribedByIds();

        _this2._changeDetectorRef.markForCheck();
      });

      if (this._dir) {
        this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this._destroyed)).subscribe(function () {
          if (typeof requestAnimationFrame === 'function') {
            _this2._ngZone.runOutsideAngular(function () {
              requestAnimationFrame(function () {
                return _this2.updateOutlineGap();
              });
            });
          } else {
            _this2.updateOutlineGap();
          }
        });
      }
    }
  }, {
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      this._validateControlChild();

      if (this._outlineGapCalculationNeededImmediately) {
        this.updateOutlineGap();
      }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      // Avoid animations on load.
      this._subscriptAnimationState = 'enter';

      this._changeDetectorRef.detectChanges();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroyed.next();

      this._destroyed.complete();
    }
    /** Determines whether a class from the NgControl should be forwarded to the host element. */

  }, {
    key: "_shouldForward",
    value: function _shouldForward(prop) {
      var ngControl = this._control ? this._control.ngControl : null;
      return ngControl && ngControl[prop];
    }
  }, {
    key: "_hasPlaceholder",
    value: function _hasPlaceholder() {
      return !!(this._control && this._control.placeholder || this._placeholderChild);
    }
  }, {
    key: "_hasLabel",
    value: function _hasLabel() {
      return !!(this._labelChildNonStatic || this._labelChildStatic);
    }
  }, {
    key: "_shouldLabelFloat",
    value: function _shouldLabelFloat() {
      return this._canLabelFloat() && (this._control && this._control.shouldLabelFloat || this._shouldAlwaysFloat());
    }
  }, {
    key: "_hideControlPlaceholder",
    value: function _hideControlPlaceholder() {
      // In the legacy appearance the placeholder is promoted to a label if no label is given.
      return this.appearance === 'legacy' && !this._hasLabel() || this._hasLabel() && !this._shouldLabelFloat();
    }
  }, {
    key: "_hasFloatingLabel",
    value: function _hasFloatingLabel() {
      // In the legacy appearance the placeholder is promoted to a label if no label is given.
      return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
    }
    /** Determines whether to display hints or errors. */

  }, {
    key: "_getDisplayedMessages",
    value: function _getDisplayedMessages() {
      return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? 'error' : 'hint';
    }
    /** Animates the placeholder up and locks it in position. */

  }, {
    key: "_animateAndLockLabel",
    value: function _animateAndLockLabel() {
      var _this3 = this;

      if (this._hasFloatingLabel() && this._canLabelFloat()) {
        // If animations are disabled, we shouldn't go in here,
        // because the `transitionend` will never fire.
        if (this._animationsEnabled && this._label) {
          this._showAlwaysAnimate = true;
          Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["fromEvent"])(this._label.nativeElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(function () {
            _this3._showAlwaysAnimate = false;
          });
        }

        this.floatLabel = 'always';

        this._changeDetectorRef.markForCheck();
      }
    }
    /**
     * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
     * or child element with the `mat-placeholder` directive).
     */

  }, {
    key: "_validatePlaceholders",
    value: function _validatePlaceholders() {
      if (this._control.placeholder && this._placeholderChild && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatFormFieldPlaceholderConflictError();
      }
    }
    /** Does any extra processing that is required when handling the hints. */

  }, {
    key: "_processHints",
    value: function _processHints() {
      this._validateHints();

      this._syncDescribedByIds();
    }
    /**
     * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
     * attribute being considered as `align="start"`.
     */

  }, {
    key: "_validateHints",
    value: function _validateHints() {
      var _this4 = this;

      if (this._hintChildren && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        var startHint;
        var endHint;

        this._hintChildren.forEach(function (hint) {
          if (hint.align === 'start') {
            if (startHint || _this4.hintLabel) {
              throw getMatFormFieldDuplicatedHintError('start');
            }

            startHint = hint;
          } else if (hint.align === 'end') {
            if (endHint) {
              throw getMatFormFieldDuplicatedHintError('end');
            }

            endHint = hint;
          }
        });
      }
    }
    /** Gets the default float label state. */

  }, {
    key: "_getDefaultFloatLabelState",
    value: function _getDefaultFloatLabelState() {
      return this._defaults && this._defaults.floatLabel || this._labelOptions.float || 'auto';
    }
    /**
     * Sets the list of element IDs that describe the child control. This allows the control to update
     * its `aria-describedby` attribute accordingly.
     */

  }, {
    key: "_syncDescribedByIds",
    value: function _syncDescribedByIds() {
      if (this._control) {
        var ids = []; // TODO(wagnermaciel): Remove the type check when we find the root cause of this bug.

        if (this._control.userAriaDescribedBy && typeof this._control.userAriaDescribedBy === 'string') {
          ids.push.apply(ids, Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this._control.userAriaDescribedBy.split(' ')));
        }

        if (this._getDisplayedMessages() === 'hint') {
          var startHint = this._hintChildren ? this._hintChildren.find(function (hint) {
            return hint.align === 'start';
          }) : null;
          var endHint = this._hintChildren ? this._hintChildren.find(function (hint) {
            return hint.align === 'end';
          }) : null;

          if (startHint) {
            ids.push(startHint.id);
          } else if (this._hintLabel) {
            ids.push(this._hintLabelId);
          }

          if (endHint) {
            ids.push(endHint.id);
          }
        } else if (this._errorChildren) {
          ids.push.apply(ids, Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this._errorChildren.map(function (error) {
            return error.id;
          })));
        }

        this._control.setDescribedByIds(ids);
      }
    }
    /** Throws an error if the form field's control is missing. */

  }, {
    key: "_validateControlChild",
    value: function _validateControlChild() {
      if (!this._control && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatFormFieldMissingControlError();
      }
    }
    /**
     * Updates the width and position of the gap in the outline. Only relevant for the outline
     * appearance.
     */

  }, {
    key: "updateOutlineGap",
    value: function updateOutlineGap() {
      var labelEl = this._label ? this._label.nativeElement : null;

      if (this.appearance !== 'outline' || !labelEl || !labelEl.children.length || !labelEl.textContent.trim()) {
        return;
      }

      if (!this._platform.isBrowser) {
        // getBoundingClientRect isn't available on the server.
        return;
      } // If the element is not present in the DOM, the outline gap will need to be calculated
      // the next time it is checked and in the DOM.


      if (!this._isAttachedToDOM()) {
        this._outlineGapCalculationNeededImmediately = true;
        return;
      }

      var startWidth = 0;
      var gapWidth = 0;
      var container = this._connectionContainerRef.nativeElement;
      var startEls = container.querySelectorAll('.mat-form-field-outline-start');
      var gapEls = container.querySelectorAll('.mat-form-field-outline-gap');

      if (this._label && this._label.nativeElement.children.length) {
        var containerRect = container.getBoundingClientRect(); // If the container's width and height are zero, it means that the element is
        // invisible and we can't calculate the outline gap. Mark the element as needing
        // to be checked the next time the zone stabilizes. We can't do this immediately
        // on the next change detection, because even if the element becomes visible,
        // the `ClientRect` won't be reclaculated immediately. We reset the
        // `_outlineGapCalculationNeededImmediately` flag some we don't run the checks twice.

        if (containerRect.width === 0 && containerRect.height === 0) {
          this._outlineGapCalculationNeededOnStable = true;
          this._outlineGapCalculationNeededImmediately = false;
          return;
        }

        var containerStart = this._getStartEnd(containerRect);

        var labelChildren = labelEl.children;

        var labelStart = this._getStartEnd(labelChildren[0].getBoundingClientRect());

        var labelWidth = 0;

        for (var i = 0; i < labelChildren.length; i++) {
          labelWidth += labelChildren[i].offsetWidth;
        }

        startWidth = Math.abs(labelStart - containerStart) - outlineGapPadding;
        gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
      }

      for (var _i = 0; _i < startEls.length; _i++) {
        startEls[_i].style.width = "".concat(startWidth, "px");
      }

      for (var _i2 = 0; _i2 < gapEls.length; _i2++) {
        gapEls[_i2].style.width = "".concat(gapWidth, "px");
      }

      this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = false;
    }
    /** Gets the start end of the rect considering the current directionality. */

  }, {
    key: "_getStartEnd",
    value: function _getStartEnd(rect) {
      return this._dir && this._dir.value === 'rtl' ? rect.right : rect.left;
    }
    /** Checks whether the form field is attached to the DOM. */

  }, {
    key: "_isAttachedToDOM",
    value: function _isAttachedToDOM() {
      var element = this._elementRef.nativeElement;

      if (element.getRootNode) {
        var rootNode = element.getRootNode(); // If the element is inside the DOM the root node will be either the document
        // or the closest shadow root, otherwise it'll be the element itself.

        return rootNode && rootNode !== element;
      } // Otherwise fall back to checking if it's in the document. This doesn't account for
      // shadow DOM, however browser that support shadow DOM should support `getRootNode` as well.


      return document.documentElement.contains(element);
    }
  }, {
    key: "appearance",
    get: function get() {
      return this._appearance;
    },
    set: function set(value) {
      var oldValue = this._appearance;
      this._appearance = value || this._defaults && this._defaults.appearance || 'legacy';

      if (this._appearance === 'outline' && oldValue !== value) {
        this._outlineGapCalculationNeededOnStable = true;
      }
    }
    /** Whether the required marker should be hidden. */

  }, {
    key: "hideRequiredMarker",
    get: function get() {
      return this._hideRequiredMarker;
    },
    set: function set(value) {
      this._hideRequiredMarker = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceBooleanProperty"])(value);
    }
  }, {
    key: "hintLabel",
    get: function get() {
      return this._hintLabel;
    },
    set: function set(value) {
      this._hintLabel = value;

      this._processHints();
    }
    /**
     * Whether the label should always float, never float or float as the user types.
     *
     * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
     * way to make the floating label emulate the behavior of a standard input placeholder. However
     * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
     * appearances the `never` option has been disabled in favor of just using the placeholder.
     */

  }, {
    key: "floatLabel",
    get: function get() {
      return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
    },
    set: function set(value) {
      if (value !== this._floatLabel) {
        this._floatLabel = value || this._getDefaultFloatLabelState();

        this._changeDetectorRef.markForCheck();
      }
    }
  }, {
    key: "_control",
    get: function get() {
      // TODO(crisbeto): we need this workaround in order to support both Ivy and ViewEngine.
      //  We should clean this up once Ivy is the default renderer.
      return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic;
    },
    set: function set(value) {
      this._explicitFormFieldControl = value;
    }
  }]);

  return MatFormField;
}(_MatFormFieldMixinBase);

MatFormField.ɵfac = function MatFormField_Factory(t) {
  return new (t || MatFormField)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_LABEL_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](MAT_FORM_FIELD_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ANIMATION_MODULE_TYPE"], 8));
};

MatFormField.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MatFormField,
  selectors: [["mat-form-field"]],
  contentQueries: function MatFormField_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstaticContentQuery"](dirIndex, MatFormFieldControl, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, MatLabel, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstaticContentQuery"](dirIndex, MatLabel, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, MatPlaceholder, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, MAT_ERROR, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, _MAT_HINT, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, MAT_PREFIX, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, MAT_SUFFIX, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._controlNonStatic = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._controlStatic = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._labelChildNonStatic = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._labelChildStatic = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._placeholderChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._errorChildren = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._hintChildren = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._prefixChildren = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._suffixChildren = _t);
    }
  },
  viewQuery: function MatFormField_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstaticViewQuery"](_c1, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c2, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c3, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.underlineRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._connectionContainerRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._inputContainerRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._label = _t.first);
    }
  },
  hostAttrs: [1, "mat-form-field"],
  hostVars: 44,
  hostBindings: function MatFormField_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mat-form-field-appearance-standard", ctx.appearance == "standard")("mat-form-field-appearance-fill", ctx.appearance == "fill")("mat-form-field-appearance-outline", ctx.appearance == "outline")("mat-form-field-appearance-legacy", ctx.appearance == "legacy")("mat-form-field-invalid", ctx._control.errorState)("mat-form-field-can-float", ctx._canLabelFloat())("mat-form-field-should-float", ctx._shouldLabelFloat())("mat-form-field-has-label", ctx._hasFloatingLabel())("mat-form-field-hide-placeholder", ctx._hideControlPlaceholder())("mat-form-field-disabled", ctx._control.disabled)("mat-form-field-autofilled", ctx._control.autofilled)("mat-focused", ctx._control.focused)("mat-accent", ctx.color == "accent")("mat-warn", ctx.color == "warn")("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"))("_mat-animation-noopable", !ctx._animationsEnabled);
    }
  },
  inputs: {
    color: "color",
    floatLabel: "floatLabel",
    appearance: "appearance",
    hideRequiredMarker: "hideRequiredMarker",
    hintLabel: "hintLabel"
  },
  exportAs: ["matFormField"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: MAT_FORM_FIELD,
    useExisting: MatFormField
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c5,
  decls: 15,
  vars: 8,
  consts: [[1, "mat-form-field-wrapper"], [1, "mat-form-field-flex", 3, "click"], ["connectionContainer", ""], [4, "ngIf"], ["class", "mat-form-field-prefix", 4, "ngIf"], [1, "mat-form-field-infix"], ["inputContainer", ""], [1, "mat-form-field-label-wrapper"], ["class", "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "mat-empty", "mat-form-field-empty", "mat-accent", "mat-warn", "ngSwitch", "cdkObserveContent", 4, "ngIf"], ["class", "mat-form-field-suffix", 4, "ngIf"], ["class", "mat-form-field-underline", 4, "ngIf"], [1, "mat-form-field-subscript-wrapper", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "mat-form-field-hint-wrapper", 4, "ngSwitchCase"], [1, "mat-form-field-outline"], [1, "mat-form-field-outline-start"], [1, "mat-form-field-outline-gap"], [1, "mat-form-field-outline-end"], [1, "mat-form-field-outline", "mat-form-field-outline-thick"], [1, "mat-form-field-prefix"], [1, "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "ngSwitch", "cdkObserveContent"], ["label", ""], ["class", "mat-placeholder-required mat-form-field-required-marker", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "mat-placeholder-required", "mat-form-field-required-marker"], [1, "mat-form-field-suffix"], [1, "mat-form-field-underline"], ["underline", ""], [1, "mat-form-field-ripple"], [1, "mat-form-field-hint-wrapper"], ["class", "mat-hint", 3, "id", 4, "ngIf"], [1, "mat-form-field-hint-spacer"], [1, "mat-hint", 3, "id"]],
  template: function MatFormField_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"](_c4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MatFormField_Template_div_click_1_listener($event) {
        return ctx._control.onContainerClick && ctx._control.onContainerClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, MatFormField_ng_container_3_Template, 9, 0, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, MatFormField_div_4_Template, 2, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, MatFormField_label_9_Template, 5, 16, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, MatFormField_div_10_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, MatFormField_div_11_Template, 3, 4, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, MatFormField_div_13_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, MatFormField_div_14_Template, 5, 2, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.appearance == "outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx._prefixChildren.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx._hasFloatingLabel());
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx._suffixChildren.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.appearance != "outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", ctx._getDisplayedMessages());
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "error");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "hint");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["CdkObserveContent"]],
  styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"],
  encapsulation: 2,
  data: {
    animation: [matFormFieldAnimations.transitionMessages]
  },
  changeDetection: 0
});

MatFormField.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_LABEL_GLOBAL_OPTIONS"]]
    }]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
    }]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

MatFormField.propDecorators = {
  appearance: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  hideRequiredMarker: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  hintLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  floatLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  underlineRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
    args: ['underline']
  }],
  _connectionContainerRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
    args: ['connectionContainer', {
      static: true
    }]
  }],
  _inputContainerRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
    args: ['inputContainer']
  }],
  _label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
    args: ['label']
  }],
  _controlNonStatic: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
    args: [MatFormFieldControl]
  }],
  _controlStatic: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
    args: [MatFormFieldControl, {
      static: true
    }]
  }],
  _labelChildNonStatic: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
    args: [MatLabel]
  }],
  _labelChildStatic: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
    args: [MatLabel, {
      static: true
    }]
  }],
  _placeholderChild: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
    args: [MatPlaceholder]
  }],
  _errorChildren: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
    args: [MAT_ERROR, {
      descendants: true
    }]
  }],
  _hintChildren: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
    args: [_MAT_HINT, {
      descendants: true
    }]
  }],
  _prefixChildren: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
    args: [MAT_PREFIX, {
      descendants: true
    }]
  }],
  _suffixChildren: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
    args: [MAT_SUFFIX, {
      descendants: true
    }]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatFormField, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'mat-form-field',
      exportAs: 'matFormField',
      template: "<div class=\"mat-form-field-wrapper\">\n  <div class=\"mat-form-field-flex\" #connectionContainer\n       (click)=\"_control.onContainerClick && _control.onContainerClick($event)\">\n\n    <!-- Outline used for outline appearance. -->\n    <ng-container *ngIf=\"appearance == 'outline'\">\n      <div class=\"mat-form-field-outline\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n      <div class=\"mat-form-field-outline mat-form-field-outline-thick\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n    </ng-container>\n\n    <div class=\"mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\">\n      <ng-content select=\"[matPrefix]\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-infix\" #inputContainer>\n      <ng-content></ng-content>\n\n      <span class=\"mat-form-field-label-wrapper\">\n        <!-- We add aria-owns as a workaround for an issue in JAWS & NVDA where the label isn't\n             read if it comes before the control in the DOM. -->\n        <label class=\"mat-form-field-label\"\n               (cdkObserveContent)=\"updateOutlineGap()\"\n               [cdkObserveContentDisabled]=\"appearance != 'outline'\"\n               [id]=\"_labelId\"\n               [attr.for]=\"_control.id\"\n               [attr.aria-owns]=\"_control.id\"\n               [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat()\"\n               [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat()\"\n               [class.mat-accent]=\"color == 'accent'\"\n               [class.mat-warn]=\"color == 'warn'\"\n               #label\n               *ngIf=\"_hasFloatingLabel()\"\n               [ngSwitch]=\"_hasLabel()\">\n\n          <!-- @breaking-change 8.0.0 remove in favor of mat-label element an placeholder attr. -->\n          <ng-container *ngSwitchCase=\"false\">\n            <ng-content select=\"mat-placeholder\"></ng-content>\n            <span>{{_control.placeholder}}</span>\n          </ng-container>\n\n          <ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content>\n\n          <!-- @breaking-change 8.0.0 remove `mat-placeholder-required` class -->\n          <span\n            class=\"mat-placeholder-required mat-form-field-required-marker\"\n            aria-hidden=\"true\"\n            *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span>\n        </label>\n      </span>\n    </div>\n\n    <div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\">\n      <ng-content select=\"[matSuffix]\"></ng-content>\n    </div>\n  </div>\n\n  <!-- Underline used for legacy, standard, and box appearances. -->\n  <div class=\"mat-form-field-underline\" #underline\n       *ngIf=\"appearance != 'outline'\">\n    <span class=\"mat-form-field-ripple\"\n          [class.mat-accent]=\"color == 'accent'\"\n          [class.mat-warn]=\"color == 'warn'\"></span>\n  </div>\n\n  <div class=\"mat-form-field-subscript-wrapper\"\n       [ngSwitch]=\"_getDisplayedMessages()\">\n    <div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\">\n      <ng-content select=\"mat-error\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\"\n      [@transitionMessages]=\"_subscriptAnimationState\">\n      <!-- TODO(mmalerba): use an actual <mat-hint> once all selectors are switched to mat-* -->\n      <div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div>\n      <ng-content select=\"mat-hint:not([align='end'])\"></ng-content>\n      <div class=\"mat-form-field-hint-spacer\"></div>\n      <ng-content select=\"mat-hint[align='end']\"></ng-content>\n    </div>\n  </div>\n</div>\n",
      animations: [matFormFieldAnimations.transitionMessages],
      host: {
        'class': 'mat-form-field',
        '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
        '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
        '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
        '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
        '[class.mat-form-field-invalid]': '_control.errorState',
        '[class.mat-form-field-can-float]': '_canLabelFloat()',
        '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
        '[class.mat-form-field-has-label]': '_hasFloatingLabel()',
        '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
        '[class.mat-form-field-disabled]': '_control.disabled',
        '[class.mat-form-field-autofilled]': '_control.autofilled',
        '[class.mat-focused]': '_control.focused',
        '[class.mat-accent]': 'color == "accent"',
        '[class.mat-warn]': 'color == "warn"',
        '[class.ng-untouched]': '_shouldForward("untouched")',
        '[class.ng-touched]': '_shouldForward("touched")',
        '[class.ng-pristine]': '_shouldForward("pristine")',
        '[class.ng-dirty]': '_shouldForward("dirty")',
        '[class.ng-valid]': '_shouldForward("valid")',
        '[class.ng-invalid]': '_shouldForward("invalid")',
        '[class.ng-pending]': '_shouldForward("pending")',
        '[class._mat-animation-noopable]': '!_animationsEnabled'
      },
      inputs: ['color'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
      providers: [{
        provide: MAT_FORM_FIELD,
        useExisting: MatFormField
      }],
      styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_LABEL_GLOBAL_OPTIONS"]]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
      }]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ANIMATION_MODULE_TYPE"]]
      }]
    }];
  }, {
    floatLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    hideRequiredMarker: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    hintLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    underlineRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
      args: ['underline']
    }],
    _connectionContainerRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
      args: ['connectionContainer', {
        static: true
      }]
    }],
    _inputContainerRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
      args: ['inputContainer']
    }],
    _label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
      args: ['label']
    }],
    _controlNonStatic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
      args: [MatFormFieldControl]
    }],
    _controlStatic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
      args: [MatFormFieldControl, {
        static: true
      }]
    }],
    _labelChildNonStatic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
      args: [MatLabel]
    }],
    _labelChildStatic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
      args: [MatLabel, {
        static: true
      }]
    }],
    _placeholderChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
      args: [MatPlaceholder]
    }],
    _errorChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
      args: [MAT_ERROR, {
        descendants: true
      }]
    }],
    _hintChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
      args: [_MAT_HINT, {
        descendants: true
      }]
    }],
    _prefixChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
      args: [MAT_PREFIX, {
        descendants: true
      }]
    }],
    _suffixChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
      args: [MAT_SUFFIX, {
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


var MatFormFieldModule = function MatFormFieldModule() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatFormFieldModule);
};

MatFormFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: MatFormFieldModule
});
MatFormFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  factory: function MatFormFieldModule_Factory(t) {
    return new (t || MatFormFieldModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["ObserversModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MatFormFieldModule, {
    declarations: function declarations() {
      return [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["ObserversModule"]];
    },
    exports: function exports() {
      return [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatFormFieldModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      declarations: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["ObserversModule"]],
      exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]
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

/***/ "2D4r":
/*!*****************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/field-hint/field-hint.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"hint-box\" (click)=\"toggleIsShort()\" [ngClass]=\"{ 'hint-box__short': isShort }\" [ngSwitch]=\"isError\">\r\n  <mat-hint *ngSwitchCase=\"false\">\r\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n  </mat-hint>\r\n\r\n  <mat-error *ngSwitchCase=\"true\">\r\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n  </mat-error>\r\n</div>\r\n\r\n<ng-template #content>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n");

/***/ }),

/***/ "2FQU":
/*!***************************************************************!*\
  !*** ../edit/shared/services/global-configuration.service.ts ***!
  \***************************************************************/
/*! exports provided: GlobalConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalConfigService", function() { return GlobalConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "3oUN");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "merk");
/* harmony import */ var _store_actions_global_configuration_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/global-configuration.actions */ "xWkI");







var GlobalConfigService = /** @class */ (function () {
    function GlobalConfigService(store, snackBar) {
        this.store = store;
        this.snackBar = snackBar;
    }
    GlobalConfigService.prototype.loadDebugEnabled = function (debugEnabled) {
        this.store.dispatch(_store_actions_global_configuration_actions__WEBPACK_IMPORTED_MODULE_6__["loadDebugEnabled"]({ debugEnabled: debugEnabled }));
    };
    GlobalConfigService.prototype.toggleDebugEnabled = function () {
        this.store.dispatch(_store_actions_global_configuration_actions__WEBPACK_IMPORTED_MODULE_6__["toggleDebugEnabled"]());
        var debugEnabled;
        this.store.select(_store__WEBPACK_IMPORTED_MODULE_5__["selectDebugEnabled"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (enabled) {
            debugEnabled = enabled;
        });
        if (debugEnabled) {
            this.snackBar.open('debug mode enabled', null, {
                duration: 3000,
            });
        }
        else {
            this.snackBar.open('debug mode disabled', null, {
                duration: 3000,
            });
        }
    };
    GlobalConfigService.prototype.getDebugEnabled = function () {
        return this.store.select(_store__WEBPACK_IMPORTED_MODULE_5__["selectDebugEnabled"]);
    };
    GlobalConfigService.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
    ]; };
    GlobalConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], GlobalConfigService);
    return GlobalConfigService;
}());



/***/ }),

/***/ "2KHg":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/id-field/id-field.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".id-box {\n  padding: 0 8px;\n  text-align: end;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.id-box .id {\n  max-width: 100%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.id-box:hover {\n  text-decoration: none;\n}\n.id-box:hover .id {\n  display: none;\n}\n.id-box:not(:hover) .icon {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pZC1maWVsZC9pZC1maWVsZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFRTtFQUNFLHFCQUFBO0FBQUo7QUFFSTtFQUNFLGFBQUE7QUFBTjtBQUtJO0VBQ0UsYUFBQTtBQUhOIiwiZmlsZSI6InByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pZC1maWVsZC9pZC1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pZC1ib3gge1xyXG4gIHBhZGRpbmc6IDAgOHB4O1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gIC5pZCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAuaWQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpub3QoOmhvdmVyKSB7XHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "3AMH":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/safe-resource-url.ts ***!
  \***************************************************/
/*! exports provided: SafeResourceUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeResourceUrlPipe", function() { return SafeResourceUrlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");



var SafeResourceUrlPipe = /** @class */ (function () {
    function SafeResourceUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeResourceUrlPipe.prototype.transform = function (resourceUrl) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(resourceUrl);
    };
    SafeResourceUrlPipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    SafeResourceUrlPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeResourceUrl' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafeResourceUrlPipe);
    return SafeResourceUrlPipe;
}());



/***/ }),

/***/ "8/3+":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/drag-and-drop.directive.ts ***!
  \**************************************************************/
/*! exports provided: DragAndDropDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDropDirective", function() { return DragAndDropDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "+kfY");




var DragAndDropDirective = /** @class */ (function () {
    function DragAndDropDirective(elementRef, zone, snackBar) {
        this.zone = zone;
        this.snackBar = snackBar;
        this.markStyle = 'outline';
        /** Comma separated file types, e.g. 'txt,doc,docx' */
        this.allowedFileTypes = '';
        this.filesDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dropAreaClass = 'eav-droparea';
        this.dragClass = 'eav-dragover';
        this.timeouts = [];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.element = elementRef.nativeElement;
    }
    DragAndDropDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.markStyleClass = "eav-droparea-" + this.markStyle;
        this.element.classList.add(this.dropAreaClass, this.markStyleClass);
        this.zone.runOutsideAngular(function () {
            _this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_this.element, 'dragover').subscribe(function (event) {
                event.preventDefault();
                event.stopPropagation();
                _this.clearTimeouts();
                _this.element.classList.add(_this.dragClass);
            }));
            _this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_this.element, 'dragleave').subscribe(function (event) {
                event.preventDefault();
                event.stopPropagation();
                _this.timeouts.push(window.setTimeout(function () { _this.element.classList.remove(_this.dragClass); }, 50));
            }));
        });
    };
    DragAndDropDirective.prototype.ngOnDestroy = function () {
        this.clearTimeouts();
        this.element.classList.remove(this.dropAreaClass, this.markStyleClass, this.dragClass);
        this.subscription.unsubscribe();
    };
    DragAndDropDirective.prototype.onDrop = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.clearTimeouts();
        this.element.classList.remove(this.dragClass);
        var fileList = event.dataTransfer.files;
        var files = this.convertToArray(fileList);
        files = this.filterTypes(files, this.allowedFileTypes);
        if (files.length > 0) {
            this.filesDropped.emit(files);
        }
    };
    DragAndDropDirective.prototype.clearTimeouts = function () {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.timeouts), _c = _b.next(); !_c.done; _c = _b.next()) {
                var timeout = _c.value;
                clearTimeout(timeout);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.timeouts = [];
    };
    DragAndDropDirective.prototype.convertToArray = function (fileList) {
        var fileArray = [];
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < fileList.length; i++) {
            fileArray.push(fileList[i]);
        }
        return fileArray;
    };
    DragAndDropDirective.prototype.filterTypes = function (files, allowedFileTypes) {
        if (allowedFileTypes === '') {
            return files;
        }
        var allowedTypes = allowedFileTypes.split(',').map(function (type) { return type.toLocaleLowerCase(); });
        var filtered = files.filter(function (file) {
            var extIndex = file.name.lastIndexOf('.');
            if (extIndex <= 0) {
                return false;
            }
            var ext = file.name.substring(extIndex + 1).toLocaleLowerCase();
            var allowed = allowedTypes.includes(ext);
            return allowed;
        });
        if (files.length !== filtered.length) {
            var allowedTypesString = this.allowedFileTypes.replace(/\,/g, ', ');
            var message = filtered.length
                ? 'Some files were filtered out. This drop location only accepts file types: ' + allowedTypesString
                : 'This drop location only accepts file types: ' + allowedTypesString;
            this.snackBar.open(message, null, { duration: 5000 });
        }
        return filtered;
    };
    DragAndDropDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
    ]; };
    DragAndDropDirective.propDecorators = {
        markStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        allowedFileTypes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        filesDropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['drop', ['$event'],] }]
    };
    DragAndDropDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[appDragAndDrop]' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], DragAndDropDirective);
    return DragAndDropDirective;
}());



/***/ }),

/***/ "A92p":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/boolean-filter/boolean-filter.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-radio-group {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n  padding: 12px;\n  width: 160px;\n  height: 104px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9ib29sZWFuLWZpbHRlci9ib29sZWFuLWZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYm9vbGVhbi1maWx0ZXIvYm9vbGVhbi1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXJhZGlvLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMTJweDtcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgaGVpZ2h0OiAxMDRweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "CeOT":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/boolean-filter/boolean-filter.component.ts ***!
  \******************************************************************************/
/*! exports provided: BooleanFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanFilterComponent", function() { return BooleanFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_boolean_filter_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./boolean-filter.component.html */ "HDVo");
/* harmony import */ var _boolean_filter_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boolean-filter.component.scss */ "A92p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");




var BooleanFilterComponent = /** @class */ (function () {
    function BooleanFilterComponent() {
        this.filter = '';
    }
    BooleanFilterComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    BooleanFilterComponent.prototype.isFilterActive = function () {
        return this.filter !== '';
    };
    BooleanFilterComponent.prototype.doesFilterPass = function (params) {
        var value = this.params.valueGetter(params.node);
        if (value == null) {
            return false;
        }
        return value.toString() === this.filter;
    };
    BooleanFilterComponent.prototype.getModel = function () {
        if (!this.isFilterActive()) {
            return;
        }
        return {
            filterType: 'boolean',
            filter: this.filter,
        };
    };
    BooleanFilterComponent.prototype.setModel = function (model) {
        this.filter = model ? model.filter : '';
    };
    BooleanFilterComponent.prototype.afterGuiAttached = function (params) {
    };
    BooleanFilterComponent.prototype.filterChanged = function () {
        this.params.filterChangedCallback();
    };
    BooleanFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-boolean-filter',
            template: _raw_loader_boolean_filter_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_boolean_filter_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], BooleanFilterComponent);
    return BooleanFilterComponent;
}());



/***/ }),

/***/ "F1o0":
/*!**************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js ***!
  \**************************************************************************************************************/
/*! exports provided: MAT_RADIO_DEFAULT_OPTIONS, MAT_RADIO_DEFAULT_OPTIONS_FACTORY, MAT_RADIO_GROUP, MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, MatRadioButton, MatRadioChange, MatRadioGroup, MatRadioModule, _MatRadioButtonBase, _MatRadioGroupBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RADIO_DEFAULT_OPTIONS", function() { return MAT_RADIO_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RADIO_DEFAULT_OPTIONS_FACTORY", function() { return MAT_RADIO_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RADIO_GROUP", function() { return MAT_RADIO_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR", function() { return MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRadioButton", function() { return MatRadioButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRadioChange", function() { return MatRadioChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRadioGroup", function() { return MatRadioGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRadioModule", function() { return MatRadioModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatRadioButtonBase", function() { return _MatRadioButtonBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatRadioGroupBase", function() { return _MatRadioGroupBase; });
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/inherits */ "8K1b");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/createSuper */ "AqVP");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/createClass */ "MMYH");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "9fIP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "sg/T");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/coercion */ "5XID");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ "cqs0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "5lCh");











/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





var _c0 = ["input"];

var _c1 = function _c1() {
  return {
    enterDuration: 150
  };
};

var _c2 = ["*"];
var MAT_RADIO_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('mat-radio-default-options', {
  providedIn: 'root',
  factory: MAT_RADIO_DEFAULT_OPTIONS_FACTORY
});

function MAT_RADIO_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: 'accent'
  };
} // Increasing integer for generating unique ids for radio components.


var nextUniqueId = 0;
/**
 * Provider Expression that allows mat-radio-group to register as a ControlValueAccessor. This
 * allows it to support [(ngModel)] and ngControl.
 * @docs-private
 */

var MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return MatRadioGroup;
  }),
  multi: true
};
/** Change event object emitted by MatRadio and MatRadioGroup. */

var MatRadioChange = function MatRadioChange(
/** The MatRadioButton that emits the change event. */
source,
/** The value of the MatRadioButton. */
value) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatRadioChange);

  this.source = source;
  this.value = value;
};
/**
 * Injection token that can be used to inject instances of `MatRadioGroup`. It serves as
 * alternative token to the actual `MatRadioGroup` class which could cause unnecessary
 * retention of the class and its component metadata.
 */


var MAT_RADIO_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MatRadioGroup');
/**
 * Base class with all of the `MatRadioGroup` functionality.
 * @docs-private
 */

var _MatRadioGroupBase = /*#__PURE__*/function () {
  function _MatRadioGroupBase(_changeDetector) {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _MatRadioGroupBase);

    this._changeDetector = _changeDetector;
    /** Selected value for the radio group. */

    this._value = null;
    /** The HTML name attribute applied to radio buttons in this group. */

    this._name = "mat-radio-group-".concat(nextUniqueId++);
    /** The currently selected radio button. Should match value. */

    this._selected = null;
    /** Whether the `value` has been set to its initial value. */

    this._isInitialized = false;
    /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */

    this._labelPosition = 'after';
    /** Whether the radio group is disabled. */

    this._disabled = false;
    /** Whether the radio group is required. */

    this._required = false;
    /** The method to be called in order to update ngModel */

    this._controlValueAccessorChangeFn = function () {};
    /**
     * onTouch function registered via registerOnTouch (ControlValueAccessor).
     * @docs-private
     */


    this.onTouched = function () {};
    /**
     * Event emitted when the group value changes.
     * Change events are only emitted when the value changes due to user interaction with
     * a radio button (the same behavior as `<input type-"radio">`).
     */


    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
  }
  /** Name of the radio button group. All radio buttons inside this group will use this name. */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_MatRadioGroupBase, [{
    key: "_checkSelectedRadioButton",
    value: function _checkSelectedRadioButton() {
      if (this._selected && !this._selected.checked) {
        this._selected.checked = true;
      }
    }
    /**
     * The currently selected radio button. If set to a new radio button, the radio group value
     * will be updated to match the new selected button.
     */

  }, {
    key: "ngAfterContentInit",

    /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     */
    value: function ngAfterContentInit() {
      // Mark this component as initialized in AfterContentInit because the initial value can
      // possibly be set by NgModel on MatRadioGroup, and it is possible that the OnInit of the
      // NgModel occurs *after* the OnInit of the MatRadioGroup.
      this._isInitialized = true;
    }
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     */

  }, {
    key: "_touch",
    value: function _touch() {
      if (this.onTouched) {
        this.onTouched();
      }
    }
  }, {
    key: "_updateRadioButtonNames",
    value: function _updateRadioButtonNames() {
      var _this = this;

      if (this._radios) {
        this._radios.forEach(function (radio) {
          radio.name = _this.name;

          radio._markForCheck();
        });
      }
    }
    /** Updates the `selected` radio button from the internal _value state. */

  }, {
    key: "_updateSelectedRadioFromValue",
    value: function _updateSelectedRadioFromValue() {
      var _this2 = this;

      // If the value already matches the selected radio, do nothing.
      var isAlreadySelected = this._selected !== null && this._selected.value === this._value;

      if (this._radios && !isAlreadySelected) {
        this._selected = null;

        this._radios.forEach(function (radio) {
          radio.checked = _this2.value === radio.value;

          if (radio.checked) {
            _this2._selected = radio;
          }
        });
      }
    }
    /** Dispatch change event with current selection and group value. */

  }, {
    key: "_emitChangeEvent",
    value: function _emitChangeEvent() {
      if (this._isInitialized) {
        this.change.emit(new MatRadioChange(this._selected, this._value));
      }
    }
  }, {
    key: "_markRadiosForCheck",
    value: function _markRadiosForCheck() {
      if (this._radios) {
        this._radios.forEach(function (radio) {
          return radio._markForCheck();
        });
      }
    }
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this.value = value;

      this._changeDetector.markForCheck();
    }
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this._controlValueAccessorChangeFn = fn;
    }
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param isDisabled Whether the control should be disabled.
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this.disabled = isDisabled;

      this._changeDetector.markForCheck();
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(value) {
      this._name = value;

      this._updateRadioButtonNames();
    }
    /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */

  }, {
    key: "labelPosition",
    get: function get() {
      return this._labelPosition;
    },
    set: function set(v) {
      this._labelPosition = v === 'before' ? 'before' : 'after';

      this._markRadiosForCheck();
    }
    /**
     * Value for the radio-group. Should equal the value of the selected radio button if there is
     * a corresponding radio button with a matching value. If there is not such a corresponding
     * radio button, this value persists to be applied in case a new radio button is added with a
     * matching value.
     */

  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(newValue) {
      if (this._value !== newValue) {
        // Set this before proceeding to ensure no circular loop occurs with selection.
        this._value = newValue;

        this._updateSelectedRadioFromValue();

        this._checkSelectedRadioButton();
      }
    }
  }, {
    key: "selected",
    get: function get() {
      return this._selected;
    },
    set: function set(selected) {
      this._selected = selected;
      this.value = selected ? selected.value : null;

      this._checkSelectedRadioButton();
    }
    /** Whether the radio group is disabled */

  }, {
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(value) {
      this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);

      this._markRadiosForCheck();
    }
    /** Whether the radio group is required */

  }, {
    key: "required",
    get: function get() {
      return this._required;
    },
    set: function set(value) {
      this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);

      this._markRadiosForCheck();
    }
  }]);

  return _MatRadioGroupBase;
}();

_MatRadioGroupBase.ɵfac = function _MatRadioGroupBase_Factory(t) {
  return new (t || _MatRadioGroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
};

_MatRadioGroupBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: _MatRadioGroupBase,
  inputs: {
    name: "name",
    labelPosition: "labelPosition",
    value: "value",
    selected: "selected",
    disabled: "disabled",
    required: "required",
    color: "color"
  },
  outputs: {
    change: "change"
  }
});

_MatRadioGroupBase.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
  }];
};

_MatRadioGroupBase.propDecorators = {
  change: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  color: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  labelPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  selected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  required: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatRadioGroupBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
    }];
  }, {
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }]
  });
})();
/**
 * A group of radio buttons. May contain one or more `<mat-radio-button>` elements.
 */


var MatRadioGroup = /*#__PURE__*/function (_MatRadioGroupBase2) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(MatRadioGroup, _MatRadioGroupBase2);

  var _super = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__["default"])(MatRadioGroup);

  function MatRadioGroup() {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatRadioGroup);

    return _super.apply(this, arguments);
  }

  return MatRadioGroup;
}(_MatRadioGroupBase);

MatRadioGroup.ɵfac = function MatRadioGroup_Factory(t) {
  return ɵMatRadioGroup_BaseFactory(t || MatRadioGroup);
};

MatRadioGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: MatRadioGroup,
  selectors: [["mat-radio-group"]],
  contentQueries: function MatRadioGroup_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatRadioButton, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._radios = _t);
    }
  },
  hostAttrs: ["role", "radiogroup", 1, "mat-radio-group"],
  exportAs: ["matRadioGroup"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
    provide: MAT_RADIO_GROUP,
    useExisting: MatRadioGroup
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
});
MatRadioGroup.propDecorators = {
  _radios: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
    args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
      return MatRadioButton;
    }), {
      descendants: true
    }]
  }]
};
var ɵMatRadioGroup_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](MatRadioGroup);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatRadioGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
    args: [{
      selector: 'mat-radio-group',
      exportAs: 'matRadioGroup',
      providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
        provide: MAT_RADIO_GROUP,
        useExisting: MatRadioGroup
      }],
      host: {
        'role': 'radiogroup',
        'class': 'mat-radio-group'
      }
    }]
  }], null, {
    _radios: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
      args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
        return MatRadioButton;
      }), {
        descendants: true
      }]
    }]
  });
})(); // Boilerplate for applying mixins to MatRadioButton.

/** @docs-private */


var MatRadioButtonBase = function MatRadioButtonBase(_elementRef) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatRadioButtonBase);

  this._elementRef = _elementRef;
}; // As per Material design specifications the selection control radio should use the accent color
// palette by default. https://material.io/guidelines/components/selection-controls.html


var _MatRadioButtonMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinTabIndex"])(MatRadioButtonBase));
/**
 * Base class with all of the `MatRadioButton` functionality.
 * @docs-private
 */


var _MatRadioButtonBase = /*#__PURE__*/function (_MatRadioButtonMixinB) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(_MatRadioButtonBase, _MatRadioButtonMixinB);

  var _super2 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__["default"])(_MatRadioButtonBase);

  function _MatRadioButtonBase(radioGroup, elementRef, _changeDetector, _focusMonitor, _radioDispatcher, _animationMode, _providerOverride, tabIndex) {
    var _this3;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _MatRadioButtonBase);

    _this3 = _super2.call(this, elementRef);
    _this3._changeDetector = _changeDetector;
    _this3._focusMonitor = _focusMonitor;
    _this3._radioDispatcher = _radioDispatcher;
    _this3._animationMode = _animationMode;
    _this3._providerOverride = _providerOverride;
    _this3._uniqueId = "mat-radio-".concat(++nextUniqueId);
    /** The unique ID for the radio button. */

    _this3.id = _this3._uniqueId;
    /**
     * Event emitted when the checked state of this radio button changes.
     * Change events are only emitted when the value changes due to user interaction with
     * the radio button (the same behavior as `<input type-"radio">`).
     */

    _this3.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    /** Whether this radio is checked. */

    _this3._checked = false;
    /** Value assigned to this radio. */

    _this3._value = null;
    /** Unregister function for _radioDispatcher */

    _this3._removeUniqueSelectionListener = function () {}; // Assertions. Ideally these should be stripped out by the compiler.
    // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.


    _this3.radioGroup = radioGroup;

    if (tabIndex) {
      _this3.tabIndex = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(tabIndex, 0);
    }

    _this3._removeUniqueSelectionListener = _radioDispatcher.listen(function (id, name) {
      if (id !== _this3.id && name === _this3.name) {
        _this3.checked = false;
      }
    });
    return _this3;
  }
  /** Whether this radio button is checked. */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_MatRadioButtonBase, [{
    key: "focus",

    /** Focuses the radio button. */
    value: function focus(options) {
      this._focusMonitor.focusVia(this._inputElement, 'keyboard', options);
    }
    /**
     * Marks the radio button as needing checking for change detection.
     * This method is exposed because the parent radio group will directly
     * update bound properties of the radio button.
     */

  }, {
    key: "_markForCheck",
    value: function _markForCheck() {
      // When group value changes, the button will not be notified. Use `markForCheck` to explicit
      // update radio button's status
      this._changeDetector.markForCheck();
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      if (this.radioGroup) {
        // If the radio is inside a radio group, determine if it should be checked
        this.checked = this.radioGroup.value === this._value; // Copy name from parent radio group

        this.name = this.radioGroup.name;
      }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this4 = this;

      this._focusMonitor.monitor(this._elementRef, true).subscribe(function (focusOrigin) {
        if (!focusOrigin && _this4.radioGroup) {
          _this4.radioGroup._touch();
        }
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._focusMonitor.stopMonitoring(this._elementRef);

      this._removeUniqueSelectionListener();
    }
    /** Dispatch change event with current value. */

  }, {
    key: "_emitChangeEvent",
    value: function _emitChangeEvent() {
      this.change.emit(new MatRadioChange(this, this._value));
    }
  }, {
    key: "_isRippleDisabled",
    value: function _isRippleDisabled() {
      return this.disableRipple || this.disabled;
    }
  }, {
    key: "_onInputClick",
    value: function _onInputClick(event) {
      // We have to stop propagation for click events on the visual hidden input element.
      // By default, when a user clicks on a label element, a generated click event will be
      // dispatched on the associated input element. Since we are using a label element as our
      // root container, the click event on the `radio-button` will be executed twice.
      // The real click event will bubble up, and the generated click event also tries to bubble up.
      // This will lead to multiple click events.
      // Preventing bubbling for the second event will solve that issue.
      event.stopPropagation();
    }
    /**
     * Triggered when the radio button received a click or the input recognized any change.
     * Clicking on a label element, will trigger a change event on the associated input.
     */

  }, {
    key: "_onInputChange",
    value: function _onInputChange(event) {
      // We always have to stop propagation on the change event.
      // Otherwise the change event, from the input element, will bubble up and
      // emit its event object to the `change` output.
      event.stopPropagation();
      var groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
      this.checked = true;

      this._emitChangeEvent();

      if (this.radioGroup) {
        this.radioGroup._controlValueAccessorChangeFn(this.value);

        if (groupValueChanged) {
          this.radioGroup._emitChangeEvent();
        }
      }
    }
    /** Sets the disabled state and marks for check if a change occurred. */

  }, {
    key: "_setDisabled",
    value: function _setDisabled(value) {
      if (this._disabled !== value) {
        this._disabled = value;

        this._changeDetector.markForCheck();
      }
    }
  }, {
    key: "checked",
    get: function get() {
      return this._checked;
    },
    set: function set(value) {
      var newCheckedState = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);

      if (this._checked !== newCheckedState) {
        this._checked = newCheckedState;

        if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
          this.radioGroup.selected = this;
        } else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
          // When unchecking the selected radio button, update the selected radio
          // property on the group.
          this.radioGroup.selected = null;
        }

        if (newCheckedState) {
          // Notify all radio buttons with the same name to un-check.
          this._radioDispatcher.notify(this.id, this.name);
        }

        this._changeDetector.markForCheck();
      }
    }
    /** The value of this radio button. */

  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      if (this._value !== value) {
        this._value = value;

        if (this.radioGroup !== null) {
          if (!this.checked) {
            // Update checked when the value changed to match the radio group's value
            this.checked = this.radioGroup.value === value;
          }

          if (this.checked) {
            this.radioGroup.selected = this;
          }
        }
      }
    }
    /** Whether the label should appear after or before the radio button. Defaults to 'after' */

  }, {
    key: "labelPosition",
    get: function get() {
      return this._labelPosition || this.radioGroup && this.radioGroup.labelPosition || 'after';
    },
    set: function set(value) {
      this._labelPosition = value;
    }
    /** Whether the radio button is disabled. */

  }, {
    key: "disabled",
    get: function get() {
      return this._disabled || this.radioGroup !== null && this.radioGroup.disabled;
    },
    set: function set(value) {
      this._setDisabled(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value));
    }
    /** Whether the radio button is required. */

  }, {
    key: "required",
    get: function get() {
      return this._required || this.radioGroup && this.radioGroup.required;
    },
    set: function set(value) {
      this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
    }
    /** Theme color of the radio button. */

  }, {
    key: "color",
    get: function get() {
      return this._color || this.radioGroup && this.radioGroup.color || this._providerOverride && this._providerOverride.color || 'accent';
    },
    set: function set(newValue) {
      this._color = newValue;
    }
    /** ID of the native input element inside `<mat-radio-button>` */

  }, {
    key: "inputId",
    get: function get() {
      return "".concat(this.id || this._uniqueId, "-input");
    }
  }]);

  return _MatRadioButtonBase;
}(_MatRadioButtonMixinBase);

_MatRadioButtonBase.ɵfac = function _MatRadioButtonBase_Factory(t) {
  return new (t || _MatRadioButtonBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_MatRadioGroupBase), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["UniqueSelectionDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](String), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](String));
};

_MatRadioButtonBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: _MatRadioButtonBase,
  viewQuery: function _MatRadioButtonBase_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
    }
  },
  inputs: {
    id: "id",
    checked: "checked",
    value: "value",
    labelPosition: "labelPosition",
    disabled: "disabled",
    required: "required",
    color: "color",
    name: "name",
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    ariaDescribedby: ["aria-describedby", "ariaDescribedby"]
  },
  outputs: {
    change: "change"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
});

_MatRadioButtonBase.ctorParameters = function () {
  return [{
    type: _MatRadioGroupBase
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]
  }, {
    type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["UniqueSelectionDispatcher"]
  }, {
    type: String
  }, {
    type: undefined
  }, {
    type: String
  }];
};

_MatRadioButtonBase.propDecorators = {
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  ariaLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['aria-label']
  }],
  ariaLabelledby: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['aria-labelledby']
  }],
  ariaDescribedby: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['aria-describedby']
  }],
  checked: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  labelPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  required: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  color: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  change: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  _inputElement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
    args: ['input']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatRadioButtonBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
  }], function () {
    return [{
      type: _MatRadioGroupBase
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]
    }, {
      type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["UniqueSelectionDispatcher"]
    }, {
      type: String
    }, {
      type: undefined
    }, {
      type: String
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    checked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['aria-labelledby']
    }],
    ariaDescribedby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['aria-describedby']
    }],
    _inputElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
      args: ['input']
    }]
  });
})();
/**
 * A Material design radio-button. Typically placed inside of `<mat-radio-group>` elements.
 */


var MatRadioButton = /*#__PURE__*/function (_MatRadioButtonBase2) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(MatRadioButton, _MatRadioButtonBase2);

  var _super3 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__["default"])(MatRadioButton);

  function MatRadioButton(radioGroup, elementRef, changeDetector, focusMonitor, radioDispatcher, animationMode, providerOverride, tabIndex) {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatRadioButton);

    return _super3.call(this, radioGroup, elementRef, changeDetector, focusMonitor, radioDispatcher, animationMode, providerOverride, tabIndex);
  }

  return MatRadioButton;
}(_MatRadioButtonBase);

MatRadioButton.ɵfac = function MatRadioButton_Factory(t) {
  return new (t || MatRadioButton)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_RADIO_GROUP, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["UniqueSelectionDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_RADIO_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinjectAttribute"]('tabindex'));
};

MatRadioButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: MatRadioButton,
  selectors: [["mat-radio-button"]],
  hostAttrs: [1, "mat-radio-button"],
  hostVars: 17,
  hostBindings: function MatRadioButton_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("focus", function MatRadioButton_focus_HostBindingHandler() {
        return ctx._inputElement.nativeElement.focus();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("tabindex", -1)("id", ctx.id)("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-radio-checked", ctx.checked)("mat-radio-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
    }
  },
  inputs: {
    disableRipple: "disableRipple",
    tabIndex: "tabIndex"
  },
  exportAs: ["matRadioButton"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c2,
  decls: 13,
  vars: 19,
  consts: [[1, "mat-radio-label"], ["label", ""], [1, "mat-radio-container"], [1, "mat-radio-outer-circle"], [1, "mat-radio-inner-circle"], ["type", "radio", 1, "mat-radio-input", "cdk-visually-hidden", 3, "id", "checked", "disabled", "tabIndex", "required", "change", "click"], ["input", ""], ["mat-ripple", "", 1, "mat-radio-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-radio-persistent-ripple"], [1, "mat-radio-label-content"], [2, "display", "none"]],
  template: function MatRadioButton_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function MatRadioButton_Template_input_change_5_listener($event) {
        return ctx._onInputChange($event);
      })("click", function MatRadioButton_Template_input_click_5_listener($event) {
        return ctx._onInputClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\xA0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("for", ctx.inputId);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled)("tabIndex", ctx.tabIndex)("required", ctx.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("name", ctx.name)("value", ctx.value)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](18, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-radio-label-before", ctx.labelPosition == "before");
    }
  },
  directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"]],
  styles: [".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(0.001)}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5)}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{bottom:0;left:50%}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"],
  encapsulation: 2,
  changeDetection: 0
});

MatRadioButton.ctorParameters = function () {
  return [{
    type: MatRadioGroup,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [MAT_RADIO_GROUP]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]
  }, {
    type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["UniqueSelectionDispatcher"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [MAT_RADIO_DEFAULT_OPTIONS]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
      args: ['tabindex']
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatRadioButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
    args: [{
      selector: 'mat-radio-button',
      template: "<!-- TODO(jelbourn): render the radio on either side of the content -->\n<!-- TODO(mtlin): Evaluate trade-offs of using native radio vs. cost of additional bindings. -->\n<label [attr.for]=\"inputId\" class=\"mat-radio-label\" #label>\n  <!-- The actual 'radio' part of the control. -->\n  <div class=\"mat-radio-container\">\n    <div class=\"mat-radio-outer-circle\"></div>\n    <div class=\"mat-radio-inner-circle\"></div>\n    <input #input class=\"mat-radio-input cdk-visually-hidden\" type=\"radio\"\n        [id]=\"inputId\"\n        [checked]=\"checked\"\n        [disabled]=\"disabled\"\n        [tabIndex]=\"tabIndex\"\n        [attr.name]=\"name\"\n        [attr.value]=\"value\"\n        [required]=\"required\"\n        [attr.aria-label]=\"ariaLabel\"\n        [attr.aria-labelledby]=\"ariaLabelledby\"\n        [attr.aria-describedby]=\"ariaDescribedby\"\n        (change)=\"_onInputChange($event)\"\n        (click)=\"_onInputClick($event)\">\n\n    <!-- The ripple comes after the input so that we can target it with a CSS\n         sibling selector when the input is focused. -->\n    <div mat-ripple class=\"mat-radio-ripple mat-focus-indicator\"\n         [matRippleTrigger]=\"label\"\n         [matRippleDisabled]=\"_isRippleDisabled()\"\n         [matRippleCentered]=\"true\"\n         [matRippleRadius]=\"20\"\n         [matRippleAnimation]=\"{enterDuration: 150}\">\n\n      <div class=\"mat-ripple-element mat-radio-persistent-ripple\"></div>\n    </div>\n  </div>\n\n  <!-- The label content for radio control. -->\n  <div class=\"mat-radio-label-content\" [class.mat-radio-label-before]=\"labelPosition == 'before'\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </div>\n</label>\n",
      inputs: ['disableRipple', 'tabIndex'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
      exportAs: 'matRadioButton',
      host: {
        'class': 'mat-radio-button',
        '[class.mat-radio-checked]': 'checked',
        '[class.mat-radio-disabled]': 'disabled',
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
        '[class.mat-primary]': 'color === "primary"',
        '[class.mat-accent]': 'color === "accent"',
        '[class.mat-warn]': 'color === "warn"',
        // Needs to be -1 so the `focus` event still fires.
        '[attr.tabindex]': '-1',
        '[attr.id]': 'id',
        '[attr.aria-label]': 'null',
        '[attr.aria-labelledby]': 'null',
        '[attr.aria-describedby]': 'null',
        // Note: under normal conditions focus shouldn't land on this element, however it may be
        // programmatically set, for example inside of a focus trap, in this case we want to forward
        // the focus to the native element.
        '(focus)': '_inputElement.nativeElement.focus()'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
      styles: [".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(0.001)}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5)}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{bottom:0;left:50%}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"]
    }]
  }], function () {
    return [{
      type: MatRadioGroup,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [MAT_RADIO_GROUP]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]
    }, {
      type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["UniqueSelectionDispatcher"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [MAT_RADIO_DEFAULT_OPTIONS]
      }]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
        args: ['tabindex']
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatRadioModule = function MatRadioModule() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatRadioModule);
};

MatRadioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: MatRadioModule
});
MatRadioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  factory: function MatRadioModule_Factory(t) {
    return new (t || MatRadioModule)();
  },
  imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MatRadioModule, {
    declarations: function declarations() {
      return [MatRadioGroup, MatRadioButton];
    },
    imports: function imports() {
      return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]];
    },
    exports: function exports() {
      return [MatRadioGroup, MatRadioButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatRadioModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]],
      exports: [MatRadioGroup, MatRadioButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]],
      declarations: [MatRadioGroup, MatRadioButton]
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

/***/ "GuwJ":
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/toggle-debug.directive.ts ***!
  \*************************************************************/
/*! exports provided: ToggleDebugDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleDebugDirective", function() { return ToggleDebugDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _edit_shared_services_global_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../edit/shared/services/global-configuration.service */ "2FQU");



var ToggleDebugDirective = /** @class */ (function () {
    function ToggleDebugDirective(globalConfigService) {
        this.globalConfigService = globalConfigService;
    }
    ToggleDebugDirective.prototype.onClick = function (event) {
        var CTRL_SHIFT_ALT_CLICK = (navigator.platform.match('Mac') ? event.metaKey : event.ctrlKey) && event.shiftKey && event.altKey;
        if (CTRL_SHIFT_ALT_CLICK) {
            this.globalConfigService.toggleDebugEnabled();
        }
    };
    ToggleDebugDirective.ctorParameters = function () { return [
        { type: _edit_shared_services_global_configuration_service__WEBPACK_IMPORTED_MODULE_2__["GlobalConfigService"] }
    ]; };
    ToggleDebugDirective.propDecorators = {
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click', ['$event'],] }]
    };
    ToggleDebugDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[appToggleDebug]' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_edit_shared_services_global_configuration_service__WEBPACK_IMPORTED_MODULE_2__["GlobalConfigService"]])
    ], ToggleDebugDirective);
    return ToggleDebugDirective;
}());



/***/ }),

/***/ "HDVo":
/*!*************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/boolean-filter/boolean-filter.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-radio-group [(ngModel)]=\"filter\" (ngModelChange)=\"filterChanged()\">\r\n  <mat-radio-button value=\"\">All</mat-radio-button>\r\n  <mat-radio-button value=\"true\">True</mat-radio-button>\r\n  <mat-radio-button value=\"false\">False</mat-radio-button>\r\n</mat-radio-group>\r\n");

/***/ }),

/***/ "J1Oz":
/*!*********************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dialog-entry/dialog-entry.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "JzAw":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/id-field/id-field.component.ts ***!
  \******************************************************************/
/*! exports provided: IdFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdFieldComponent", function() { return IdFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_id_field_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./id-field.component.html */ "rpQ9");
/* harmony import */ var _id_field_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./id-field.component.scss */ "2KHg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/copy-to-clipboard.helper */ "c2Rc");






var IdFieldComponent = /** @class */ (function () {
    function IdFieldComponent(snackBar) {
        this.snackBar = snackBar;
    }
    IdFieldComponent.prototype.agInit = function (params) {
        this.id = params.value;
        this.tooltip = params.tooltipGetter(params.data);
    };
    IdFieldComponent.prototype.refresh = function (params) {
        return true;
    };
    IdFieldComponent.prototype.copy = function () {
        Object(_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_5__["copyToClipboard"])(this.tooltip);
        this.snackBar.open('Copied to clipboard', null, { duration: 2000 });
    };
    IdFieldComponent.ctorParameters = function () { return [
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
    ]; };
    IdFieldComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-id-field',
            template: _raw_loader_id_field_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_id_field_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], IdFieldComponent);
    return IdFieldComponent;
}());



/***/ }),

/***/ "KSFr":
/*!************************************************!*\
  !*** ./src/app/shared/pipes/safe-html.pipe.ts ***!
  \************************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");



var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SafeHtmlPipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    SafeHtmlPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeHtml' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "O6Xb":
/*!****************************************************!*\
  !*** ./src/app/shared/shared-components.module.ts ***!
  \****************************************************/
/*! exports provided: SharedComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function() { return SharedComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "F1o0");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "Y2X+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/boolean-filter/boolean-filter.component */ "CeOT");
/* harmony import */ var _components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dialog-entry/dialog-entry.component */ "nXrb");
/* harmony import */ var _components_empty_route_empty_route_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/empty-route/empty-route.component */ "mQU2");
/* harmony import */ var _components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/field-hint/field-hint.component */ "Uk43");
/* harmony import */ var _components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/id-field/id-field.component */ "JzAw");
/* harmony import */ var _directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/click-stop-propagation.directive */ "Zfm5");
/* harmony import */ var _directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/drag-and-drop.directive */ "8/3+");
/* harmony import */ var _directives_mousedown_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/mousedown-stop-propagation.directive */ "kVtj");
/* harmony import */ var _directives_toggle_debug_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/toggle-debug.directive */ "GuwJ");
/* harmony import */ var _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/safe-html.pipe */ "KSFr");
/* harmony import */ var _pipes_safe_resource_url__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/safe-resource-url */ "3AMH");





















/** Stuff that is shared and only has to be initialized once */
var SharedComponentsModule = /** @class */ (function () {
    function SharedComponentsModule() {
    }
    SharedComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_empty_route_empty_route_component__WEBPACK_IMPORTED_MODULE_12__["EmptyRouteComponent"],
                _components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_11__["DialogEntryComponent"],
                _components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_13__["FieldHintComponent"],
                _directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_15__["ClickStopPropagationDirective"],
                _directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_16__["DragAndDropDirective"],
                _directives_mousedown_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_17__["MousedownStopPropagationDirective"],
                _components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_10__["BooleanFilterComponent"],
                _components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_14__["IdFieldComponent"],
                _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_19__["SafeHtmlPipe"],
                _pipes_safe_resource_url__WEBPACK_IMPORTED_MODULE_20__["SafeResourceUrlPipe"],
                _directives_toggle_debug_directive__WEBPACK_IMPORTED_MODULE_18__["ToggleDebugDirective"],
            ],
            entryComponents: [
                _components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_10__["BooleanFilterComponent"],
                _components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_14__["IdFieldComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            ],
            providers: [],
            exports: [
                _components_empty_route_empty_route_component__WEBPACK_IMPORTED_MODULE_12__["EmptyRouteComponent"],
                _components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_11__["DialogEntryComponent"],
                _components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_13__["FieldHintComponent"],
                _directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_15__["ClickStopPropagationDirective"],
                _directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_16__["DragAndDropDirective"],
                _directives_mousedown_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_17__["MousedownStopPropagationDirective"],
                _components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_10__["BooleanFilterComponent"],
                _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_19__["SafeHtmlPipe"],
                _pipes_safe_resource_url__WEBPACK_IMPORTED_MODULE_20__["SafeResourceUrlPipe"],
                _directives_toggle_debug_directive__WEBPACK_IMPORTED_MODULE_18__["ToggleDebugDirective"],
            ]
        })
    ], SharedComponentsModule);
    return SharedComponentsModule;
}());



/***/ }),

/***/ "OZ4H":
/*!***************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js ***!
  \***************************************************************************************************************/
/*! exports provided: MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MAT_DIALOG_SCROLL_STRATEGY_FACTORY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, MatDialog, MatDialogActions, MatDialogClose, MatDialogConfig, MatDialogContainer, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle, _MatDialogBase, _MatDialogContainerBase, _closeDialogVia, matDialogAnimations, throwMatDialogContentAlreadyAttachedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DATA", function() { return MAT_DIALOG_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DEFAULT_OPTIONS", function() { return MAT_DIALOG_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY", function() { return MAT_DIALOG_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_FACTORY", function() { return MAT_DIALOG_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER", function() { return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY", function() { return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialog", function() { return MatDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogActions", function() { return MatDialogActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogClose", function() { return MatDialogClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogConfig", function() { return MatDialogConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainer", function() { return MatDialogContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogContent", function() { return MatDialogContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogModule", function() { return MatDialogModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogRef", function() { return MatDialogRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogTitle", function() { return MatDialogTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatDialogBase", function() { return _MatDialogBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatDialogContainerBase", function() { return _MatDialogContainerBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_closeDialogVia", function() { return _closeDialogVia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matDialogAnimations", function() { return matDialogAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwMatDialogContentAlreadyAttachedError", function() { return throwMatDialogContentAlreadyAttachedError; });
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/createClass */ "MMYH");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/inherits */ "8K1b");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/createSuper */ "AqVP");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "9fIP");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ "HYj3");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "Sv/w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ "E5oP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/a11y */ "sg/T");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ "f7+R");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/keycodes */ "fAiE");















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Configuration for opening a modal dialog with the MatDialog service.
 */







function MatDialogContainer_ng_template_0_Template(rf, ctx) {}

var MatDialogConfig = function MatDialogConfig() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatDialogConfig);

  /** The ARIA role of the dialog element. */
  this.role = 'dialog';
  /** Custom class for the overlay pane. */

  this.panelClass = '';
  /** Whether the dialog has a backdrop. */

  this.hasBackdrop = true;
  /** Custom class for the backdrop. */

  this.backdropClass = '';
  /** Whether the user can use escape or clicking on the backdrop to close the modal. */

  this.disableClose = false;
  /** Width of the dialog. */

  this.width = '';
  /** Height of the dialog. */

  this.height = '';
  /** Max-width of the dialog. If a number is provided, assumes pixel units. Defaults to 80vw. */

  this.maxWidth = '80vw';
  /** Data being injected into the child component. */

  this.data = null;
  /** ID of the element that describes the dialog. */

  this.ariaDescribedBy = null;
  /** ID of the element that labels the dialog. */

  this.ariaLabelledBy = null;
  /** Aria label to assign to the dialog element. */

  this.ariaLabel = null;
  /** Whether the dialog should focus the first focusable element on open. */

  this.autoFocus = true;
  /**
   * Whether the dialog should restore focus to the
   * previously-focused element, after it's closed.
   */

  this.restoreFocus = true;
  /**
   * Whether the dialog should close when the user goes backwards/forwards in history.
   * Note that this usually doesn't include clicking on links (unless the user is using
   * the `HashLocationStrategy`).
   */

  this.closeOnNavigation = true; // TODO(jelbourn): add configuration for lifecycle hooks, ARIA labelling.
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Animations used by MatDialog.
 * @docs-private
 */


var matDialogAnimations = {
  /** Animation that is applied on the dialog container by defalt. */
  dialogContainer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["trigger"])('dialogContainer', [// Note: The `enter` animation transitions to `transform: none`, because for some reason
  // specifying the transform explicitly, causes IE both to blur the dialog content and
  // decimate the animation performance. Leaving it as `none` solves both issues.
  Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["state"])('void, exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
    opacity: 0,
    transform: 'scale(0.7)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
    transform: 'none'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])('* => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
    transform: 'none',
    opacity: 1
  }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])('* => void, * => exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
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
 * Throws an exception for the case when a ComponentPortal is
 * attached to a DomPortalOutlet without an origin.
 * @docs-private
 */

function throwMatDialogContentAlreadyAttachedError() {
  throw Error('Attempting to attach dialog content after content is already attached');
}
/**
 * Base class for the `MatDialogContainer`. The base class does not implement
 * animations as these are left to implementers of the dialog container.
 */


var _MatDialogContainerBase = /*#__PURE__*/function (_BasePortalOutlet) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(_MatDialogContainerBase, _BasePortalOutlet);

  var _super = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(_MatDialogContainerBase);

  function _MatDialogContainerBase(_elementRef, _focusTrapFactory, _changeDetectorRef, _document,
  /** The dialog configuration. */
  _config, _focusMonitor) {
    var _this;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _MatDialogContainerBase);

    _this = _super.call(this);
    _this._elementRef = _elementRef;
    _this._focusTrapFactory = _focusTrapFactory;
    _this._changeDetectorRef = _changeDetectorRef;
    _this._config = _config;
    _this._focusMonitor = _focusMonitor;
    /** Emits when an animation state changes. */

    _this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    /** Element that was focused before the dialog was opened. Save this to restore upon close. */

    _this._elementFocusedBeforeDialogWasOpened = null;
    /**
     * Type of interaction that led to the dialog being closed. This is used to determine
     * whether the focus style will be applied when returning focus to its original location
     * after the dialog is closed.
     */

    _this._closeInteractionType = null;
    /**
     * Attaches a DOM portal to the dialog container.
     * @param portal Portal to be attached.
     * @deprecated To be turned into a method.
     * @breaking-change 10.0.0
     */

    _this.attachDomPortal = function (portal) {
      if (_this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throwMatDialogContentAlreadyAttachedError();
      }

      return _this._portalOutlet.attachDomPortal(portal);
    };

    _this._ariaLabelledBy = _config.ariaLabelledBy || null;
    _this._document = _document;
    return _this;
  }
  /** Initializes the dialog container with the attached content. */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(_MatDialogContainerBase, [{
    key: "_initializeWithAttachedContent",
    value: function _initializeWithAttachedContent() {
      this._setupFocusTrap(); // Save the previously focused element. This element will be re-focused
      // when the dialog closes.


      this._capturePreviouslyFocusedElement(); // Move focus onto the dialog immediately in order to prevent the user
      // from accidentally opening multiple dialogs at the same time.


      this._focusDialogContainer();
    }
    /**
     * Attach a ComponentPortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */

  }, {
    key: "attachComponentPortal",
    value: function attachComponentPortal(portal) {
      if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throwMatDialogContentAlreadyAttachedError();
      }

      return this._portalOutlet.attachComponentPortal(portal);
    }
    /**
     * Attach a TemplatePortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */

  }, {
    key: "attachTemplatePortal",
    value: function attachTemplatePortal(portal) {
      if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throwMatDialogContentAlreadyAttachedError();
      }

      return this._portalOutlet.attachTemplatePortal(portal);
    }
    /** Moves focus back into the dialog if it was moved out. */

  }, {
    key: "_recaptureFocus",
    value: function _recaptureFocus() {
      if (!this._containsFocus()) {
        var focusContainer = !this._config.autoFocus || !this._focusTrap.focusInitialElement();

        if (focusContainer) {
          this._elementRef.nativeElement.focus();
        }
      }
    }
    /** Moves the focus inside the focus trap. */

  }, {
    key: "_trapFocus",
    value: function _trapFocus() {
      // If we were to attempt to focus immediately, then the content of the dialog would not yet be
      // ready in instances where change detection has to run first. To deal with this, we simply
      // wait for the microtask queue to be empty.
      if (this._config.autoFocus) {
        this._focusTrap.focusInitialElementWhenReady();
      } else if (!this._containsFocus()) {
        // Otherwise ensure that focus is on the dialog container. It's possible that a different
        // component tried to move focus while the open animation was running. See:
        // https://github.com/angular/components/issues/16215. Note that we only want to do this
        // if the focus isn't inside the dialog already, because it's possible that the consumer
        // turned off `autoFocus` in order to move focus themselves.
        this._elementRef.nativeElement.focus();
      }
    }
    /** Restores focus to the element that was focused before the dialog opened. */

  }, {
    key: "_restoreFocus",
    value: function _restoreFocus() {
      var previousElement = this._elementFocusedBeforeDialogWasOpened; // We need the extra check, because IE can set the `activeElement` to null in some cases.

      if (this._config.restoreFocus && previousElement && typeof previousElement.focus === 'function') {
        var activeElement = this._document.activeElement;
        var element = this._elementRef.nativeElement; // Make sure that focus is still inside the dialog or is on the body (usually because a
        // non-focusable element like the backdrop was clicked) before moving it. It's possible that
        // the consumer moved it themselves before the animation was done, in which case we shouldn't
        // do anything.

        if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
          if (this._focusMonitor) {
            this._focusMonitor.focusVia(previousElement, this._closeInteractionType);

            this._closeInteractionType = null;
          } else {
            previousElement.focus();
          }
        }
      }

      if (this._focusTrap) {
        this._focusTrap.destroy();
      }
    }
    /** Sets up the focus trap. */

  }, {
    key: "_setupFocusTrap",
    value: function _setupFocusTrap() {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
    }
    /** Captures the element that was focused before the dialog was opened. */

  }, {
    key: "_capturePreviouslyFocusedElement",
    value: function _capturePreviouslyFocusedElement() {
      if (this._document) {
        this._elementFocusedBeforeDialogWasOpened = this._document.activeElement;
      }
    }
    /** Focuses the dialog container. */

  }, {
    key: "_focusDialogContainer",
    value: function _focusDialogContainer() {
      // Note that there is no focus method when rendering on the server.
      if (this._elementRef.nativeElement.focus) {
        this._elementRef.nativeElement.focus();
      }
    }
    /** Returns whether focus is inside the dialog. */

  }, {
    key: "_containsFocus",
    value: function _containsFocus() {
      var element = this._elementRef.nativeElement;
      var activeElement = this._document.activeElement;
      return element === activeElement || element.contains(activeElement);
    }
  }]);

  return _MatDialogContainerBase;
}(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["BasePortalOutlet"]);

_MatDialogContainerBase.ɵfac = function _MatDialogContainerBase_Factory(t) {
  return new (t || _MatDialogContainerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](MatDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["FocusMonitor"]));
};

_MatDialogContainerBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: _MatDialogContainerBase,
  viewQuery: function _MatDialogContainerBase_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstaticViewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["CdkPortalOutlet"], true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});

_MatDialogContainerBase.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["FocusTrapFactory"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]
    }]
  }, {
    type: MatDialogConfig
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["FocusMonitor"]
  }];
};

_MatDialogContainerBase.propDecorators = {
  _portalOutlet: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
    args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["CdkPortalOutlet"], {
      static: true
    }]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](_MatDialogContainerBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["FocusTrapFactory"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]
      }]
    }, {
      type: MatDialogConfig
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["FocusMonitor"]
    }];
  }, {
    _portalOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
      args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["CdkPortalOutlet"], {
        static: true
      }]
    }]
  });
})();
/**
 * Internal component that wraps user-provided dialog content.
 * Animation is based on https://material.io/guidelines/motion/choreography.html.
 * @docs-private
 */


var MatDialogContainer = /*#__PURE__*/function (_MatDialogContainerBa) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(MatDialogContainer, _MatDialogContainerBa);

  var _super2 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(MatDialogContainer);

  function MatDialogContainer() {
    var _this2;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatDialogContainer);

    _this2 = _super2.apply(this, arguments);
    /** State of the dialog animation. */

    _this2._state = 'enter';
    return _this2;
  }
  /** Callback, invoked whenever an animation on the host completes. */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MatDialogContainer, [{
    key: "_onAnimationDone",
    value: function _onAnimationDone(_ref) {
      var toState = _ref.toState,
          totalTime = _ref.totalTime;

      if (toState === 'enter') {
        this._trapFocus();

        this._animationStateChanged.next({
          state: 'opened',
          totalTime: totalTime
        });
      } else if (toState === 'exit') {
        this._restoreFocus();

        this._animationStateChanged.next({
          state: 'closed',
          totalTime: totalTime
        });
      }
    }
    /** Callback, invoked when an animation on the host starts. */

  }, {
    key: "_onAnimationStart",
    value: function _onAnimationStart(_ref2) {
      var toState = _ref2.toState,
          totalTime = _ref2.totalTime;

      if (toState === 'enter') {
        this._animationStateChanged.next({
          state: 'opening',
          totalTime: totalTime
        });
      } else if (toState === 'exit' || toState === 'void') {
        this._animationStateChanged.next({
          state: 'closing',
          totalTime: totalTime
        });
      }
    }
    /** Starts the dialog exit animation. */

  }, {
    key: "_startExitAnimation",
    value: function _startExitAnimation() {
      this._state = 'exit'; // Mark the container for check so it can react if the
      // view container is using OnPush change detection.

      this._changeDetectorRef.markForCheck();
    }
  }]);

  return MatDialogContainer;
}(_MatDialogContainerBase);

MatDialogContainer.ɵfac = function MatDialogContainer_Factory(t) {
  return ɵMatDialogContainer_BaseFactory(t || MatDialogContainer);
};

MatDialogContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: MatDialogContainer,
  selectors: [["mat-dialog-container"]],
  hostAttrs: ["tabindex", "-1", "aria-modal", "true", 1, "mat-dialog-container"],
  hostVars: 6,
  hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsyntheticHostListener"]("@dialogContainer.start", function MatDialogContainer_animation_dialogContainer_start_HostBindingHandler($event) {
        return ctx._onAnimationStart($event);
      })("@dialogContainer.done", function MatDialogContainer_animation_dialogContainer_done_HostBindingHandler($event) {
        return ctx._onAnimationDone($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵhostProperty"]("id", ctx._id);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledBy)("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsyntheticHostProperty"]("@dialogContainer", ctx._state);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 0,
  consts: [["cdkPortalOutlet", ""]],
  template: function MatDialogContainer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, MatDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
    }
  },
  directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["CdkPortalOutlet"]],
  styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
  encapsulation: 2,
  data: {
    animation: [matDialogAnimations.dialogContainer]
  }
});
var ɵMatDialogContainer_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](MatDialogContainer);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatDialogContainer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
    args: [{
      selector: 'mat-dialog-container',
      template: "<ng-template cdkPortalOutlet></ng-template>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewEncapsulation"].None,
      // Using OnPush for dialogs caused some G3 sync issues. Disabled until we can track them down.
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectionStrategy"].Default,
      animations: [matDialogAnimations.dialogContainer],
      host: {
        'class': 'mat-dialog-container',
        'tabindex': '-1',
        'aria-modal': 'true',
        '[id]': '_id',
        '[attr.role]': '_config.role',
        '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledBy',
        '[attr.aria-label]': '_config.ariaLabel',
        '[attr.aria-describedby]': '_config.ariaDescribedBy || null',
        '[@dialogContainer]': '_state',
        '(@dialogContainer.start)': '_onAnimationStart($event)',
        '(@dialogContainer.done)': '_onAnimationDone($event)'
      },
      styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
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
// TODO(jelbourn): resizing
// Counter for unique dialog ids.


var uniqueId = 0;
/**
 * Reference to a dialog opened via the MatDialog service.
 */

var MatDialogRef = /*#__PURE__*/function () {
  function MatDialogRef(_overlayRef, _containerInstance) {
    var _this3 = this;

    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "mat-dialog-".concat(uniqueId++);

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatDialogRef);

    this._overlayRef = _overlayRef;
    this._containerInstance = _containerInstance;
    this.id = id;
    /** Whether the user is allowed to close the dialog. */

    this.disableClose = this._containerInstance._config.disableClose;
    /** Subject for notifying the user that the dialog has finished opening. */

    this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    /** Subject for notifying the user that the dialog has finished closing. */

    this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    /** Subject for notifying the user that the dialog has started closing. */

    this._beforeClosed = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    /** Current state of the dialog. */

    this._state = 0
    /* OPEN */
    ; // Pass the id along to the container.

    _containerInstance._id = id; // Emit when opening animation completes

    _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (event) {
      return event.state === 'opened';
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe(function () {
      _this3._afterOpened.next();

      _this3._afterOpened.complete();
    }); // Dispose overlay when closing animation is complete


    _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (event) {
      return event.state === 'closed';
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe(function () {
      clearTimeout(_this3._closeFallbackTimeout);

      _this3._finishDialogClose();
    });

    _overlayRef.detachments().subscribe(function () {
      _this3._beforeClosed.next(_this3._result);

      _this3._beforeClosed.complete();

      _this3._afterClosed.next(_this3._result);

      _this3._afterClosed.complete();

      _this3.componentInstance = null;

      _this3._overlayRef.dispose();
    });

    _overlayRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (event) {
      return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["ESCAPE"] && !_this3.disableClose && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["hasModifierKey"])(event);
    })).subscribe(function (event) {
      event.preventDefault();

      _closeDialogVia(_this3, 'keyboard');
    });

    _overlayRef.backdropClick().subscribe(function () {
      if (_this3.disableClose) {
        _this3._containerInstance._recaptureFocus();
      } else {
        _closeDialogVia(_this3, 'mouse');
      }
    });
  }
  /**
   * Close the dialog.
   * @param dialogResult Optional result to return to the dialog opener.
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MatDialogRef, [{
    key: "close",
    value: function close(dialogResult) {
      var _this4 = this;

      this._result = dialogResult; // Transition the backdrop in parallel to the dialog.

      this._containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (event) {
        return event.state === 'closing';
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe(function (event) {
        _this4._beforeClosed.next(dialogResult);

        _this4._beforeClosed.complete();

        _this4._overlayRef.detachBackdrop(); // The logic that disposes of the overlay depends on the exit animation completing, however
        // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
        // timeout which will clean everything up if the animation hasn't fired within the specified
        // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
        // vast majority of cases the timeout will have been cleared before it has the chance to fire.


        _this4._closeFallbackTimeout = setTimeout(function () {
          return _this4._finishDialogClose();
        }, event.totalTime + 100);
      });

      this._state = 1
      /* CLOSING */
      ;

      this._containerInstance._startExitAnimation();
    }
    /**
     * Gets an observable that is notified when the dialog is finished opening.
     */

  }, {
    key: "afterOpened",
    value: function afterOpened() {
      return this._afterOpened;
    }
    /**
     * Gets an observable that is notified when the dialog is finished closing.
     */

  }, {
    key: "afterClosed",
    value: function afterClosed() {
      return this._afterClosed;
    }
    /**
     * Gets an observable that is notified when the dialog has started closing.
     */

  }, {
    key: "beforeClosed",
    value: function beforeClosed() {
      return this._beforeClosed;
    }
    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     */

  }, {
    key: "backdropClick",
    value: function backdropClick() {
      return this._overlayRef.backdropClick();
    }
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     */

  }, {
    key: "keydownEvents",
    value: function keydownEvents() {
      return this._overlayRef.keydownEvents();
    }
    /**
     * Updates the dialog's position.
     * @param position New dialog position.
     */

  }, {
    key: "updatePosition",
    value: function updatePosition(position) {
      var strategy = this._getPositionStrategy();

      if (position && (position.left || position.right)) {
        position.left ? strategy.left(position.left) : strategy.right(position.right);
      } else {
        strategy.centerHorizontally();
      }

      if (position && (position.top || position.bottom)) {
        position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
      } else {
        strategy.centerVertically();
      }

      this._overlayRef.updatePosition();

      return this;
    }
    /**
     * Updates the dialog's width and height.
     * @param width New width of the dialog.
     * @param height New height of the dialog.
     */

  }, {
    key: "updateSize",
    value: function updateSize() {
      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      this._getPositionStrategy().width(width).height(height);

      this._overlayRef.updatePosition();

      return this;
    }
    /** Add a CSS class or an array of classes to the overlay pane. */

  }, {
    key: "addPanelClass",
    value: function addPanelClass(classes) {
      this._overlayRef.addPanelClass(classes);

      return this;
    }
    /** Remove a CSS class or an array of classes from the overlay pane. */

  }, {
    key: "removePanelClass",
    value: function removePanelClass(classes) {
      this._overlayRef.removePanelClass(classes);

      return this;
    }
    /** Gets the current state of the dialog's lifecycle. */

  }, {
    key: "getState",
    value: function getState() {
      return this._state;
    }
    /**
     * Finishes the dialog close by updating the state of the dialog
     * and disposing the overlay.
     */

  }, {
    key: "_finishDialogClose",
    value: function _finishDialogClose() {
      this._state = 2
      /* CLOSED */
      ;

      this._overlayRef.dispose();
    }
    /** Fetches the position strategy object from the overlay ref. */

  }, {
    key: "_getPositionStrategy",
    value: function _getPositionStrategy() {
      return this._overlayRef.getConfig().positionStrategy;
    }
  }]);

  return MatDialogRef;
}();
/**
 * Closes the dialog with the specified interaction type. This is currently not part of
 * `MatDialogRef` as that would conflict with custom dialog ref mocks provided in tests.
 * More details. See: https://github.com/angular/components/pull/9257#issuecomment-651342226.
 */
// TODO: TODO: Move this back into `MatDialogRef` when we provide an official mock dialog ref.


function _closeDialogVia(ref, interactionType, result) {
  // Some mock dialog ref instances in tests do not have the `_containerInstance` property.
  // For those, we keep the behavior as is and do not deal with the interaction type.
  if (ref._containerInstance !== undefined) {
    ref._containerInstance._closeInteractionType = interactionType;
  }

  return ref.close(result);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token that can be used to access the data that was passed in to a dialog. */


var MAT_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('MatDialogData');
/** Injection token that can be used to specify default dialog options. */

var MAT_DIALOG_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('mat-dialog-default-options');
/** Injection token that determines the scroll handling while the dialog is open. */

var MAT_DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('mat-dialog-scroll-strategy');
/** @docs-private */

function MAT_DIALOG_SCROLL_STRATEGY_FACTORY(overlay) {
  return function () {
    return overlay.scrollStrategies.block();
  };
}
/** @docs-private */


function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  return function () {
    return overlay.scrollStrategies.block();
  };
}
/** @docs-private */


var MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
  provide: MAT_DIALOG_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"]],
  useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY
};
/**
 * Base class for dialog services. The base dialog service allows
 * for arbitrary dialog refs and dialog container components.
 */

var _MatDialogBase = /*#__PURE__*/function () {
  function _MatDialogBase(_overlay, _injector, _defaultOptions, _parentDialog, _overlayContainer, scrollStrategy, _dialogRefConstructor, _dialogContainerType, _dialogDataToken) {
    var _this5 = this;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _MatDialogBase);

    this._overlay = _overlay;
    this._injector = _injector;
    this._defaultOptions = _defaultOptions;
    this._parentDialog = _parentDialog;
    this._overlayContainer = _overlayContainer;
    this._dialogRefConstructor = _dialogRefConstructor;
    this._dialogContainerType = _dialogContainerType;
    this._dialogDataToken = _dialogDataToken;
    this._openDialogsAtThisLevel = [];
    this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    this._afterOpenedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    this._ariaHiddenElements = new Map(); // TODO (jelbourn): tighten the typing right-hand side of this expression.

    /**
     * Stream that emits when all open dialog have finished closing.
     * Will emit on subscribe if there are no open dialogs to begin with.
     */

    this.afterAllClosed = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["defer"])(function () {
      return _this5.openDialogs.length ? _this5._getAfterAllClosed() : _this5._getAfterAllClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(undefined));
    });
    this._scrollStrategy = scrollStrategy;
  }
  /** Keeps track of the currently-open dialogs. */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(_MatDialogBase, [{
    key: "_getAfterAllClosed",
    value: function _getAfterAllClosed() {
      var parent = this._parentDialog;
      return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
    }
    /**
     * Opens a modal dialog containing the given component.
     * @param componentOrTemplateRef Type of the component to load into the dialog,
     *     or a TemplateRef to instantiate as the dialog content.
     * @param config Extra configuration options.
     * @returns Reference to the newly-opened dialog.
     */

  }, {
    key: "open",
    value: function open(componentOrTemplateRef, config) {
      var _this6 = this;

      config = _applyConfigDefaults(config, this._defaultOptions || new MatDialogConfig());

      if (config.id && this.getDialogById(config.id) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error("Dialog with id \"".concat(config.id, "\" exists already. The dialog id must be unique."));
      }

      var overlayRef = this._createOverlay(config);

      var dialogContainer = this._attachDialogContainer(overlayRef, config);

      var dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config); // If this is the first dialog that we're opening, hide all the non-overlay content.


      if (!this.openDialogs.length) {
        this._hideNonDialogContentFromAssistiveTechnology();
      }

      this.openDialogs.push(dialogRef);
      dialogRef.afterClosed().subscribe(function () {
        return _this6._removeOpenDialog(dialogRef);
      });
      this.afterOpened.next(dialogRef); // Notify the dialog container that the content has been attached.

      dialogContainer._initializeWithAttachedContent();

      return dialogRef;
    }
    /**
     * Closes all of the currently-open dialogs.
     */

  }, {
    key: "closeAll",
    value: function closeAll() {
      this._closeDialogs(this.openDialogs);
    }
    /**
     * Finds an open dialog by its id.
     * @param id ID to use when looking up the dialog.
     */

  }, {
    key: "getDialogById",
    value: function getDialogById(id) {
      return this.openDialogs.find(function (dialog) {
        return dialog.id === id;
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Only close the dialogs at this level on destroy
      // since the parent service may still be active.
      this._closeDialogs(this._openDialogsAtThisLevel);

      this._afterAllClosedAtThisLevel.complete();

      this._afterOpenedAtThisLevel.complete();
    }
    /**
     * Creates the overlay into which the dialog will be loaded.
     * @param config The dialog configuration.
     * @returns A promise resolving to the OverlayRef for the created overlay.
     */

  }, {
    key: "_createOverlay",
    value: function _createOverlay(config) {
      var overlayConfig = this._getOverlayConfig(config);

      return this._overlay.create(overlayConfig);
    }
    /**
     * Creates an overlay config from a dialog config.
     * @param dialogConfig The dialog configuration.
     * @returns The overlay configuration.
     */

  }, {
    key: "_getOverlayConfig",
    value: function _getOverlayConfig(dialogConfig) {
      var state = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayConfig"]({
        positionStrategy: this._overlay.position().global(),
        scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),
        panelClass: dialogConfig.panelClass,
        hasBackdrop: dialogConfig.hasBackdrop,
        direction: dialogConfig.direction,
        minWidth: dialogConfig.minWidth,
        minHeight: dialogConfig.minHeight,
        maxWidth: dialogConfig.maxWidth,
        maxHeight: dialogConfig.maxHeight,
        disposeOnNavigation: dialogConfig.closeOnNavigation
      });

      if (dialogConfig.backdropClass) {
        state.backdropClass = dialogConfig.backdropClass;
      }

      return state;
    }
    /**
     * Attaches a dialog container to a dialog's already-created overlay.
     * @param overlay Reference to the dialog's underlying overlay.
     * @param config The dialog configuration.
     * @returns A promise resolving to a ComponentRef for the attached container.
     */

  }, {
    key: "_attachDialogContainer",
    value: function _attachDialogContainer(overlay, config) {
      var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
      var injector = _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"].create({
        parent: userInjector || this._injector,
        providers: [{
          provide: MatDialogConfig,
          useValue: config
        }]
      });
      var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["ComponentPortal"](this._dialogContainerType, config.viewContainerRef, injector, config.componentFactoryResolver);
      var containerRef = overlay.attach(containerPortal);
      return containerRef.instance;
    }
    /**
     * Attaches the user-provided component to the already-created dialog container.
     * @param componentOrTemplateRef The type of component being loaded into the dialog,
     *     or a TemplateRef to instantiate as the content.
     * @param dialogContainer Reference to the wrapping dialog container.
     * @param overlayRef Reference to the overlay in which the dialog resides.
     * @param config The dialog configuration.
     * @returns A promise resolving to the MatDialogRef that should be returned to the user.
     */

  }, {
    key: "_attachDialogContent",
    value: function _attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
      // Create a reference to the dialog we're creating in order to give the user a handle
      // to modify and close it.
      var dialogRef = new this._dialogRefConstructor(overlayRef, dialogContainer, config.id);

      if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]) {
        dialogContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["TemplatePortal"](componentOrTemplateRef, null, {
          $implicit: config.data,
          dialogRef: dialogRef
        }));
      } else {
        var injector = this._createInjector(config, dialogRef, dialogContainer);

        var contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["ComponentPortal"](componentOrTemplateRef, config.viewContainerRef, injector));
        dialogRef.componentInstance = contentRef.instance;
      }

      dialogRef.updateSize(config.width, config.height).updatePosition(config.position);
      return dialogRef;
    }
    /**
     * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
     * of a dialog to close itself and, optionally, to return a value.
     * @param config Config object that is used to construct the dialog.
     * @param dialogRef Reference to the dialog.
     * @param dialogContainer Dialog container element that wraps all of the contents.
     * @returns The custom injector that can be used inside the dialog.
     */

  }, {
    key: "_createInjector",
    value: function _createInjector(config, dialogRef, dialogContainer) {
      var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector; // The dialog container should be provided as the dialog container and the dialog's
      // content are created out of the same `ViewContainerRef` and as such, are siblings
      // for injector purposes. To allow the hierarchy that is expected, the dialog
      // container is explicitly provided in the injector.

      var providers = [{
        provide: this._dialogContainerType,
        useValue: dialogContainer
      }, {
        provide: this._dialogDataToken,
        useValue: config.data
      }, {
        provide: this._dialogRefConstructor,
        useValue: dialogRef
      }];

      if (config.direction && (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], null))) {
        providers.push({
          provide: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          useValue: {
            value: config.direction,
            change: Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])()
          }
        });
      }

      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"].create({
        parent: userInjector || this._injector,
        providers: providers
      });
    }
    /**
     * Removes a dialog from the array of open dialogs.
     * @param dialogRef Dialog to be removed.
     */

  }, {
    key: "_removeOpenDialog",
    value: function _removeOpenDialog(dialogRef) {
      var index = this.openDialogs.indexOf(dialogRef);

      if (index > -1) {
        this.openDialogs.splice(index, 1); // If all the dialogs were closed, remove/restore the `aria-hidden`
        // to a the siblings and emit to the `afterAllClosed` stream.

        if (!this.openDialogs.length) {
          this._ariaHiddenElements.forEach(function (previousValue, element) {
            if (previousValue) {
              element.setAttribute('aria-hidden', previousValue);
            } else {
              element.removeAttribute('aria-hidden');
            }
          });

          this._ariaHiddenElements.clear();

          this._getAfterAllClosed().next();
        }
      }
    }
    /**
     * Hides all of the content that isn't an overlay from assistive technology.
     */

  }, {
    key: "_hideNonDialogContentFromAssistiveTechnology",
    value: function _hideNonDialogContentFromAssistiveTechnology() {
      var overlayContainer = this._overlayContainer.getContainerElement(); // Ensure that the overlay container is attached to the DOM.


      if (overlayContainer.parentElement) {
        var siblings = overlayContainer.parentElement.children;

        for (var i = siblings.length - 1; i > -1; i--) {
          var sibling = siblings[i];

          if (sibling !== overlayContainer && sibling.nodeName !== 'SCRIPT' && sibling.nodeName !== 'STYLE' && !sibling.hasAttribute('aria-live')) {
            this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));

            sibling.setAttribute('aria-hidden', 'true');
          }
        }
      }
    }
    /** Closes all of the dialogs in an array. */

  }, {
    key: "_closeDialogs",
    value: function _closeDialogs(dialogs) {
      var i = dialogs.length;

      while (i--) {
        // The `_openDialogs` property isn't updated after close until the rxjs subscription
        // runs on the next microtask, in addition to modifying the array as we're going
        // through it. We loop through all of them and call close without assuming that
        // they'll be removed from the list instantaneously.
        dialogs[i].close();
      }
    }
  }, {
    key: "openDialogs",
    get: function get() {
      return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
    }
    /** Stream that emits when a dialog has been opened. */

  }, {
    key: "afterOpened",
    get: function get() {
      return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
    }
  }]);

  return _MatDialogBase;
}();

_MatDialogBase.ɵfac = function _MatDialogBase_Factory(t) {
  return new (t || _MatDialogBase)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["Type"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["Type"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]));
};

_MatDialogBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: _MatDialogBase
});

_MatDialogBase.ctorParameters = function () {
  return [{
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"]
  }, {
    type: undefined
  }, {
    type: undefined
  }, {
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"]
  }, {
    type: undefined
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Type"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Type"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](_MatDialogBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"]
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"]
    }, {
      type: undefined
    }, {
      type: undefined
    }, {
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"]
    }, {
      type: undefined
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Type"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Type"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]
    }];
  }, null);
})();
/**
 * Service to open Material Design modal dialogs.
 */


var MatDialog = /*#__PURE__*/function (_MatDialogBase2) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(MatDialog, _MatDialogBase2);

  var _super3 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(MatDialog);

  function MatDialog(overlay, injector,
  /**
   * @deprecated `_location` parameter to be removed.
   * @breaking-change 10.0.0
   */
  location, defaultOptions, scrollStrategy, parentDialog, overlayContainer) {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatDialog);

    return _super3.call(this, overlay, injector, defaultOptions, parentDialog, overlayContainer, scrollStrategy, MatDialogRef, MatDialogContainer, MAT_DIALOG_DATA);
  }

  return MatDialog;
}(_MatDialogBase);

MatDialog.ɵfac = function MatDialog_Factory(t) {
  return new (t || MatDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](MAT_DIALOG_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](MAT_DIALOG_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](MatDialog, 12), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"]));
};

MatDialog.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: MatDialog,
  factory: MatDialog.ɵfac
});

MatDialog.ctorParameters = function () {
  return [{
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"]
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }]
  }, {
    type: MatDialogConfig,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [MAT_DIALOG_DEFAULT_OPTIONS]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [MAT_DIALOG_SCROLL_STRATEGY]
    }]
  }, {
    type: MatDialog,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["SkipSelf"]
    }]
  }, {
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatDialog, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }]
    }, {
      type: MatDialogConfig,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [MAT_DIALOG_DEFAULT_OPTIONS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [MAT_DIALOG_SCROLL_STRATEGY]
      }]
    }, {
      type: MatDialog,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["SkipSelf"]
      }]
    }, {
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"]
    }];
  }, null);
})();
/**
 * Applies default options to the dialog config.
 * @param config Config to be modified.
 * @param defaultOptions Default options provided.
 * @returns The new configuration object.
 */


function _applyConfigDefaults(config, defaultOptions) {
  return Object.assign(Object.assign({}, defaultOptions), config);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Counter used to generate unique IDs for dialog elements. */


var dialogElementUid = 0;
/**
 * Button that will close the current dialog.
 */

var MatDialogClose = /*#__PURE__*/function () {
  function MatDialogClose( // The dialog title directive is always used in combination with a `MatDialogRef`.
  // tslint:disable-next-line: lightweight-tokens
  dialogRef, _elementRef, _dialog) {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatDialogClose);

    this.dialogRef = dialogRef;
    this._elementRef = _elementRef;
    this._dialog = _dialog;
    /** Default to "button" to prevents accidental form submits. */

    this.type = 'button';
  }

  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MatDialogClose, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (!this.dialogRef) {
        // When this directive is included in a dialog via TemplateRef (rather than being
        // in a Component), the DialogRef isn't available via injection because embedded
        // views cannot be given a custom injector. Instead, we look up the DialogRef by
        // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
        // be resolved at constructor time.
        this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var proxiedChange = changes['_matDialogClose'] || changes['_matDialogCloseResult'];

      if (proxiedChange) {
        this.dialogResult = proxiedChange.currentValue;
      }
    }
  }, {
    key: "_onButtonClick",
    value: function _onButtonClick(event) {
      // Determinate the focus origin using the click event, because using the FocusMonitor will
      // result in incorrect origins. Most of the time, close buttons will be auto focused in the
      // dialog, and therefore clicking the button won't result in a focus change. This means that
      // the FocusMonitor won't detect any origin change, and will always output `program`.
      _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? 'keyboard' : 'mouse', this.dialogResult);
    }
  }]);

  return MatDialogClose;
}();

MatDialogClose.ɵfac = function MatDialogClose_Factory(t) {
  return new (t || MatDialogClose)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](MatDialog));
};

MatDialogClose.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: MatDialogClose,
  selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
  hostVars: 2,
  hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MatDialogClose_click_HostBindingHandler($event) {
        return ctx._onButtonClick($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("type", ctx.type);
    }
  },
  inputs: {
    type: "type",
    dialogResult: ["mat-dialog-close", "dialogResult"],
    ariaLabel: ["aria-label", "ariaLabel"],
    _matDialogClose: ["matDialogClose", "_matDialogClose"]
  },
  exportAs: ["matDialogClose"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]]
});

MatDialogClose.ctorParameters = function () {
  return [{
    type: MatDialogRef,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
  }, {
    type: MatDialog
  }];
};

MatDialogClose.propDecorators = {
  ariaLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['aria-label']
  }],
  type: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  dialogResult: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['mat-dialog-close']
  }],
  _matDialogClose: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['matDialogClose']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatDialogClose, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: '[mat-dialog-close], [matDialogClose]',
      exportAs: 'matDialogClose',
      host: {
        '(click)': '_onButtonClick($event)',
        '[attr.aria-label]': 'ariaLabel || null',
        '[attr.type]': 'type'
      }
    }]
  }], function () {
    return [{
      type: MatDialogRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
    }, {
      type: MatDialog
    }];
  }, {
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    dialogResult: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['mat-dialog-close']
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['aria-label']
    }],
    _matDialogClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['matDialogClose']
    }]
  });
})();
/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */


var MatDialogTitle = /*#__PURE__*/function () {
  function MatDialogTitle( // The dialog title directive is always used in combination with a `MatDialogRef`.
  // tslint:disable-next-line: lightweight-tokens
  _dialogRef, _elementRef, _dialog) {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatDialogTitle);

    this._dialogRef = _dialogRef;
    this._elementRef = _elementRef;
    this._dialog = _dialog;
    this.id = "mat-dialog-title-".concat(dialogElementUid++);
  }

  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MatDialogTitle, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this7 = this;

      if (!this._dialogRef) {
        this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
      }

      if (this._dialogRef) {
        Promise.resolve().then(function () {
          var container = _this7._dialogRef._containerInstance;

          if (container && !container._ariaLabelledBy) {
            container._ariaLabelledBy = _this7.id;
          }
        });
      }
    }
  }]);

  return MatDialogTitle;
}();

MatDialogTitle.ɵfac = function MatDialogTitle_Factory(t) {
  return new (t || MatDialogTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](MatDialog));
};

MatDialogTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: MatDialogTitle,
  selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
  hostAttrs: [1, "mat-dialog-title"],
  hostVars: 1,
  hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵhostProperty"]("id", ctx.id);
    }
  },
  inputs: {
    id: "id"
  },
  exportAs: ["matDialogTitle"]
});

MatDialogTitle.ctorParameters = function () {
  return [{
    type: MatDialogRef,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
  }, {
    type: MatDialog
  }];
};

MatDialogTitle.propDecorators = {
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatDialogTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: '[mat-dialog-title], [matDialogTitle]',
      exportAs: 'matDialogTitle',
      host: {
        'class': 'mat-dialog-title',
        '[id]': 'id'
      }
    }]
  }], function () {
    return [{
      type: MatDialogRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
    }, {
      type: MatDialog
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }]
  });
})();
/**
 * Scrollable content container of a dialog.
 */


var MatDialogContent = function MatDialogContent() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatDialogContent);
};

MatDialogContent.ɵfac = function MatDialogContent_Factory(t) {
  return new (t || MatDialogContent)();
};

MatDialogContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: MatDialogContent,
  selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
  hostAttrs: [1, "mat-dialog-content"]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatDialogContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]",
      host: {
        'class': 'mat-dialog-content'
      }
    }]
  }], null, null);
})();
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */


var MatDialogActions = function MatDialogActions() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatDialogActions);
};

MatDialogActions.ɵfac = function MatDialogActions_Factory(t) {
  return new (t || MatDialogActions)();
};

MatDialogActions.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: MatDialogActions,
  selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
  hostAttrs: [1, "mat-dialog-actions"]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatDialogActions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]",
      host: {
        'class': 'mat-dialog-actions'
      }
    }]
  }], null, null);
})();
/**
 * Finds the closest MatDialogRef to an element by looking at the DOM.
 * @param element Element relative to which to look for a dialog.
 * @param openDialogs References to the currently-open dialogs.
 */


function getClosestDialog(element, openDialogs) {
  var parent = element.nativeElement.parentElement;

  while (parent && !parent.classList.contains('mat-dialog-container')) {
    parent = parent.parentElement;
  }

  return parent ? openDialogs.find(function (dialog) {
    return dialog.id === parent.id;
  }) : null;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatDialogModule = function MatDialogModule() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatDialogModule);
};

MatDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: MatDialogModule
});
MatDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  factory: function MatDialogModule_Factory(t) {
    return new (t || MatDialogModule)();
  },
  providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER],
  imports: [[_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MatDialogModule, {
    declarations: function declarations() {
      return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent];
    },
    imports: function imports() {
      return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]];
    },
    exports: function exports() {
      return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatDialogModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
    args: [{
      imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
      exports: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
      declarations: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent],
      providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER],
      entryComponents: [MatDialogContainer]
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

/***/ "Uk43":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/field-hint/field-hint.component.ts ***!
  \**********************************************************************/
/*! exports provided: FieldHintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldHintComponent", function() { return FieldHintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_field_hint_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./field-hint.component.html */ "2D4r");
/* harmony import */ var _field_hint_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field-hint.component.scss */ "0+Is");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");




var FieldHintComponent = /** @class */ (function () {
    function FieldHintComponent() {
        this.isError = false;
        this.isShort = true;
    }
    FieldHintComponent.prototype.toggleIsShort = function () {
        this.isShort = !this.isShort;
    };
    FieldHintComponent.ctorParameters = function () { return []; };
    FieldHintComponent.propDecorators = {
        isError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    FieldHintComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-field-hint',
            template: _raw_loader_field_hint_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_field_hint_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FieldHintComponent);
    return FieldHintComponent;
}());



/***/ }),

/***/ "Y2X+":
/*!****************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js ***!
  \****************************************************************************************************************/
/*! exports provided: MAT_TOOLTIP_DEFAULT_OPTIONS, MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MatTooltip, MatTooltipModule, SCROLL_THROTTLE_MS, TOOLTIP_PANEL_CLASS, TooltipComponent, getMatTooltipInvalidPositionError, matTooltipAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS", function() { return MAT_TOOLTIP_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY", function() { return MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY", function() { return MAT_TOOLTIP_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY", function() { return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER", function() { return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTooltip", function() { return MatTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTooltipModule", function() { return MatTooltipModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_THROTTLE_MS", function() { return SCROLL_THROTTLE_MS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLTIP_PANEL_CLASS", function() { return TOOLTIP_PANEL_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatTooltipInvalidPositionError", function() { return getMatTooltipInvalidPositionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matTooltipAnimations", function() { return matTooltipAnimations; });
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "zygG");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "9fIP");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/createClass */ "MMYH");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "HYj3");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "sg/T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "qvOF");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ "E5oP");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/coercion */ "5XID");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/keycodes */ "fAiE");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ "HOZh");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/platform */ "cZZj");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/portal */ "Sv/w");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/animations */ "f7+R");


















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Animations used by MatTooltip.
 * @docs-private
 */









var matTooltipAnimations = {
  /** Animation that transitions a tooltip in and out. */
  tooltipState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["trigger"])('state', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('initial, void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    opacity: 0,
    transform: 'scale(0)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    transform: 'scale(1)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('200ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    opacity: 0,
    transform: 'scale(0)',
    offset: 0
  }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    opacity: 0.5,
    transform: 'scale(0.99)',
    offset: 0.5
  }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    opacity: 1,
    transform: 'scale(1)',
    offset: 1
  })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('* => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('100ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    opacity: 0
  })))])
};
/** Time in ms to throttle repositioning after scroll events. */

var SCROLL_THROTTLE_MS = 20;
/** CSS class that will be attached to the overlay panel. */

var TOOLTIP_PANEL_CLASS = 'mat-tooltip-panel';
/** Options used to bind passive event listeners. */

var passiveListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["normalizePassiveListenerOptions"])({
  passive: true
});
/**
 * Time between the user putting the pointer on a tooltip
 * trigger and the long press event being fired.
 */

var LONGPRESS_DELAY = 500;
/**
 * Creates an error to be thrown if the user supplied an invalid tooltip position.
 * @docs-private
 */

function getMatTooltipInvalidPositionError(position) {
  return Error("Tooltip position \"".concat(position, "\" is invalid."));
}
/** Injection token that determines the scroll handling while a tooltip is visible. */


var MAT_TOOLTIP_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('mat-tooltip-scroll-strategy');
/** @docs-private */

function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
  return function () {
    return overlay.scrollStrategies.reposition({
      scrollThrottle: SCROLL_THROTTLE_MS
    });
  };
}
/** @docs-private */


var MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_TOOLTIP_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]],
  useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
};
/** Injection token to be used to override the default options for `matTooltip`. */

var MAT_TOOLTIP_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('mat-tooltip-default-options', {
  providedIn: 'root',
  factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */

function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
  return {
    showDelay: 0,
    hideDelay: 0,
    touchendHideDelay: 1500
  };
}
/**
 * Directive that attaches a material design tooltip to the host element. Animates the showing and
 * hiding of a tooltip provided position (defaults to below the element).
 *
 * https://material.io/design/components/tooltips.html
 */


var MatTooltip = /*#__PURE__*/function () {
  function MatTooltip(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, _platform, _ariaDescriber, _focusMonitor, scrollStrategy, _dir, _defaultOptions) {
    var _this = this;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MatTooltip);

    this._overlay = _overlay;
    this._elementRef = _elementRef;
    this._scrollDispatcher = _scrollDispatcher;
    this._viewContainerRef = _viewContainerRef;
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._ariaDescriber = _ariaDescriber;
    this._focusMonitor = _focusMonitor;
    this._dir = _dir;
    this._defaultOptions = _defaultOptions;
    this._position = 'below';
    this._disabled = false;
    this._viewInitialized = false;
    this._pointerExitEventsInitialized = false;
    /** The default delay in ms before showing the tooltip after show is called */

    this.showDelay = this._defaultOptions.showDelay;
    /** The default delay in ms before hiding the tooltip after hide is called */

    this.hideDelay = this._defaultOptions.hideDelay;
    /**
     * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
     * uses a long press gesture to show and hide, however it can conflict with the native browser
     * gestures. To work around the conflict, Angular Material disables native gestures on the
     * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
     * elements). The different values for this option configure the touch event handling as follows:
     * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
     *   browser gestures on particular elements. In particular, it allows text selection on inputs
     *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
     * - `on` - Enables touch gestures for all elements and disables native
     *   browser gestures with no exceptions.
     * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
     *   showing on touch devices.
     */

    this.touchGestures = 'auto';
    this._message = '';
    /** Manually-bound passive event listeners. */

    this._passiveListeners = [];
    /** Emits when the component is destroyed. */

    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
    /**
     * Handles the keydown events on the host element.
     * Needs to be an arrow function so that we can use it in addEventListener.
     */

    this._handleKeydown = function (event) {
      if (_this._isTooltipVisible() && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["hasModifierKey"])(event)) {
        event.preventDefault();
        event.stopPropagation();

        _this._ngZone.run(function () {
          return _this.hide(0);
        });
      }
    };

    this._scrollStrategy = scrollStrategy;

    if (_defaultOptions) {
      if (_defaultOptions.position) {
        this.position = _defaultOptions.position;
      }

      if (_defaultOptions.touchGestures) {
        this.touchGestures = _defaultOptions.touchGestures;
      }
    }

    _ngZone.runOutsideAngular(function () {
      _elementRef.nativeElement.addEventListener('keydown', _this._handleKeydown);
    });
  }
  /** Allows the user to define the position of the tooltip relative to the parent element */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MatTooltip, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      // This needs to happen after view init so the initial values for all inputs have been set.
      this._viewInitialized = true;

      this._setupPointerEnterEventsIfNeeded();

      this._focusMonitor.monitor(this._elementRef).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this._destroyed)).subscribe(function (origin) {
        // Note that the focus monitor runs outside the Angular zone.
        if (!origin) {
          _this2._ngZone.run(function () {
            return _this2.hide(0);
          });
        } else if (origin === 'keyboard') {
          _this2._ngZone.run(function () {
            return _this2.show();
          });
        }
      });
    }
    /**
     * Dispose the tooltip when destroyed.
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var nativeElement = this._elementRef.nativeElement;
      clearTimeout(this._touchstartTimeout);

      if (this._overlayRef) {
        this._overlayRef.dispose();

        this._tooltipInstance = null;
      } // Clean up the event listeners set in the constructor


      nativeElement.removeEventListener('keydown', this._handleKeydown);

      this._passiveListeners.forEach(function (_ref) {
        var _ref2 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
            event = _ref2[0],
            listener = _ref2[1];

        nativeElement.removeEventListener(event, listener, passiveListenerOptions);
      });

      this._passiveListeners.length = 0;

      this._destroyed.next();

      this._destroyed.complete();

      this._ariaDescriber.removeDescription(nativeElement, this.message);

      this._focusMonitor.stopMonitoring(nativeElement);
    }
    /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */

  }, {
    key: "show",
    value: function show() {
      var _this3 = this;

      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.showDelay;

      if (this.disabled || !this.message || this._isTooltipVisible() && !this._tooltipInstance._showTimeoutId && !this._tooltipInstance._hideTimeoutId) {
        return;
      }

      var overlayRef = this._createOverlay();

      this._detach();

      this._portal = this._portal || new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_14__["ComponentPortal"](TooltipComponent, this._viewContainerRef);
      this._tooltipInstance = overlayRef.attach(this._portal).instance;

      this._tooltipInstance.afterHidden().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this._destroyed)).subscribe(function () {
        return _this3._detach();
      });

      this._setTooltipClass(this._tooltipClass);

      this._updateTooltipMessage();

      this._tooltipInstance.show(delay);
    }
    /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */

  }, {
    key: "hide",
    value: function hide() {
      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.hideDelay;

      if (this._tooltipInstance) {
        this._tooltipInstance.hide(delay);
      }
    }
    /** Shows/hides the tooltip */

  }, {
    key: "toggle",
    value: function toggle() {
      this._isTooltipVisible() ? this.hide() : this.show();
    }
    /** Returns true if the tooltip is currently visible to the user */

  }, {
    key: "_isTooltipVisible",
    value: function _isTooltipVisible() {
      return !!this._tooltipInstance && this._tooltipInstance.isVisible();
    }
    /** Create the overlay config and position strategy */

  }, {
    key: "_createOverlay",
    value: function _createOverlay() {
      var _this4 = this;

      if (this._overlayRef) {
        return this._overlayRef;
      }

      var scrollableAncestors = this._scrollDispatcher.getAncestorScrollContainers(this._elementRef); // Create connected position strategy that listens for scroll events to reposition.


      var strategy = this._overlay.position().flexibleConnectedTo(this._elementRef).withTransformOriginOn('.mat-tooltip').withFlexibleDimensions(false).withViewportMargin(8).withScrollableContainers(scrollableAncestors);

      strategy.positionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this._destroyed)).subscribe(function (change) {
        if (_this4._tooltipInstance) {
          if (change.scrollableViewProperties.isOverlayClipped && _this4._tooltipInstance.isVisible()) {
            // After position changes occur and the overlay is clipped by
            // a parent scrollable then close the tooltip.
            _this4._ngZone.run(function () {
              return _this4.hide(0);
            });
          }
        }
      });
      this._overlayRef = this._overlay.create({
        direction: this._dir,
        positionStrategy: strategy,
        panelClass: TOOLTIP_PANEL_CLASS,
        scrollStrategy: this._scrollStrategy()
      });

      this._updatePosition();

      this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this._destroyed)).subscribe(function () {
        return _this4._detach();
      });

      return this._overlayRef;
    }
    /** Detaches the currently-attached tooltip. */

  }, {
    key: "_detach",
    value: function _detach() {
      if (this._overlayRef && this._overlayRef.hasAttached()) {
        this._overlayRef.detach();
      }

      this._tooltipInstance = null;
    }
    /** Updates the position of the current tooltip. */

  }, {
    key: "_updatePosition",
    value: function _updatePosition() {
      var position = this._overlayRef.getConfig().positionStrategy;

      var origin = this._getOrigin();

      var overlay = this._getOverlayPosition();

      position.withPositions([Object.assign(Object.assign({}, origin.main), overlay.main), Object.assign(Object.assign({}, origin.fallback), overlay.fallback)]);
    }
    /**
     * Returns the origin position and a fallback position based on the user's position preference.
     * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
     */

  }, {
    key: "_getOrigin",
    value: function _getOrigin() {
      var isLtr = !this._dir || this._dir.value == 'ltr';
      var position = this.position;
      var originPosition;

      if (position == 'above' || position == 'below') {
        originPosition = {
          originX: 'center',
          originY: position == 'above' ? 'top' : 'bottom'
        };
      } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
        originPosition = {
          originX: 'start',
          originY: 'center'
        };
      } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
        originPosition = {
          originX: 'end',
          originY: 'center'
        };
      } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
        throw getMatTooltipInvalidPositionError(position);
      }

      var _this$_invertPosition = this._invertPosition(originPosition.originX, originPosition.originY),
          x = _this$_invertPosition.x,
          y = _this$_invertPosition.y;

      return {
        main: originPosition,
        fallback: {
          originX: x,
          originY: y
        }
      };
    }
    /** Returns the overlay position and a fallback position based on the user's preference */

  }, {
    key: "_getOverlayPosition",
    value: function _getOverlayPosition() {
      var isLtr = !this._dir || this._dir.value == 'ltr';
      var position = this.position;
      var overlayPosition;

      if (position == 'above') {
        overlayPosition = {
          overlayX: 'center',
          overlayY: 'bottom'
        };
      } else if (position == 'below') {
        overlayPosition = {
          overlayX: 'center',
          overlayY: 'top'
        };
      } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
        overlayPosition = {
          overlayX: 'end',
          overlayY: 'center'
        };
      } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
        overlayPosition = {
          overlayX: 'start',
          overlayY: 'center'
        };
      } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
        throw getMatTooltipInvalidPositionError(position);
      }

      var _this$_invertPosition2 = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY),
          x = _this$_invertPosition2.x,
          y = _this$_invertPosition2.y;

      return {
        main: overlayPosition,
        fallback: {
          overlayX: x,
          overlayY: y
        }
      };
    }
    /** Updates the tooltip message and repositions the overlay according to the new message length */

  }, {
    key: "_updateTooltipMessage",
    value: function _updateTooltipMessage() {
      var _this5 = this;

      // Must wait for the message to be painted to the tooltip so that the overlay can properly
      // calculate the correct positioning based on the size of the text.
      if (this._tooltipInstance) {
        this._tooltipInstance.message = this.message;

        this._tooltipInstance._markForCheck();

        this._ngZone.onMicrotaskEmpty.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this._destroyed)).subscribe(function () {
          if (_this5._tooltipInstance) {
            _this5._overlayRef.updatePosition();
          }
        });
      }
    }
    /** Updates the tooltip class */

  }, {
    key: "_setTooltipClass",
    value: function _setTooltipClass(tooltipClass) {
      if (this._tooltipInstance) {
        this._tooltipInstance.tooltipClass = tooltipClass;

        this._tooltipInstance._markForCheck();
      }
    }
    /** Inverts an overlay position. */

  }, {
    key: "_invertPosition",
    value: function _invertPosition(x, y) {
      if (this.position === 'above' || this.position === 'below') {
        if (y === 'top') {
          y = 'bottom';
        } else if (y === 'bottom') {
          y = 'top';
        }
      } else {
        if (x === 'end') {
          x = 'start';
        } else if (x === 'start') {
          x = 'end';
        }
      }

      return {
        x: x,
        y: y
      };
    }
    /** Binds the pointer events to the tooltip trigger. */

  }, {
    key: "_setupPointerEnterEventsIfNeeded",
    value: function _setupPointerEnterEventsIfNeeded() {
      var _this6 = this;

      // Optimization: Defer hooking up events if there's no message or the tooltip is disabled.
      if (this._disabled || !this.message || !this._viewInitialized || this._passiveListeners.length) {
        return;
      } // The mouse events shouldn't be bound on mobile devices, because they can prevent the
      // first tap from firing its click event or can cause the tooltip to open for clicks.


      if (this._platformSupportsMouseEvents()) {
        this._passiveListeners.push(['mouseenter', function () {
          _this6._setupPointerExitEventsIfNeeded();

          _this6.show();
        }]);
      } else if (this.touchGestures !== 'off') {
        this._disableNativeGesturesIfNecessary();

        this._passiveListeners.push(['touchstart', function () {
          // Note that it's important that we don't `preventDefault` here,
          // because it can prevent click events from firing on the element.
          _this6._setupPointerExitEventsIfNeeded();

          clearTimeout(_this6._touchstartTimeout);
          _this6._touchstartTimeout = setTimeout(function () {
            return _this6.show();
          }, LONGPRESS_DELAY);
        }]);
      }

      this._addListeners(this._passiveListeners);
    }
  }, {
    key: "_setupPointerExitEventsIfNeeded",
    value: function _setupPointerExitEventsIfNeeded() {
      var _this7 = this,
          _this$_passiveListene;

      if (this._pointerExitEventsInitialized) {
        return;
      }

      this._pointerExitEventsInitialized = true;
      var exitListeners = [];

      if (this._platformSupportsMouseEvents()) {
        exitListeners.push(['mouseleave', function () {
          return _this7.hide();
        }]);
      } else if (this.touchGestures !== 'off') {
        this._disableNativeGesturesIfNecessary();

        var touchendListener = function touchendListener() {
          clearTimeout(_this7._touchstartTimeout);

          _this7.hide(_this7._defaultOptions.touchendHideDelay);
        };

        exitListeners.push(['touchend', touchendListener], ['touchcancel', touchendListener]);
      }

      this._addListeners(exitListeners);

      (_this$_passiveListene = this._passiveListeners).push.apply(_this$_passiveListene, exitListeners);
    }
  }, {
    key: "_addListeners",
    value: function _addListeners(listeners) {
      var _this8 = this;

      listeners.forEach(function (_ref3) {
        var _ref4 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, 2),
            event = _ref4[0],
            listener = _ref4[1];

        _this8._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
      });
    }
  }, {
    key: "_platformSupportsMouseEvents",
    value: function _platformSupportsMouseEvents() {
      return !this._platform.IOS && !this._platform.ANDROID;
    }
    /** Disables the native browser gestures, based on how the tooltip has been configured. */

  }, {
    key: "_disableNativeGesturesIfNecessary",
    value: function _disableNativeGesturesIfNecessary() {
      var gestures = this.touchGestures;

      if (gestures !== 'off') {
        var element = this._elementRef.nativeElement;
        var _style = element.style; // If gestures are set to `auto`, we don't disable text selection on inputs and
        // textareas, because it prevents the user from typing into them on iOS Safari.

        if (gestures === 'on' || element.nodeName !== 'INPUT' && element.nodeName !== 'TEXTAREA') {
          _style.userSelect = _style.msUserSelect = _style.webkitUserSelect = _style.MozUserSelect = 'none';
        } // If we have `auto` gestures and the element uses native HTML dragging,
        // we don't set `-webkit-user-drag` because it prevents the native behavior.


        if (gestures === 'on' || !element.draggable) {
          _style.webkitUserDrag = 'none';
        }

        _style.touchAction = 'none';
        _style.webkitTapHighlightColor = 'transparent';
      }
    }
  }, {
    key: "position",
    get: function get() {
      return this._position;
    },
    set: function set(value) {
      if (value !== this._position) {
        this._position = value;

        if (this._overlayRef) {
          this._updatePosition();

          if (this._tooltipInstance) {
            this._tooltipInstance.show(0);
          }

          this._overlayRef.updatePosition();
        }
      }
    }
    /** Disables the display of the tooltip. */

  }, {
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(value) {
      this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceBooleanProperty"])(value); // If tooltip is disabled, hide immediately.

      if (this._disabled) {
        this.hide(0);
      } else {
        this._setupPointerEnterEventsIfNeeded();
      }
    }
    /** The message to be displayed in the tooltip */

  }, {
    key: "message",
    get: function get() {
      return this._message;
    },
    set: function set(value) {
      var _this9 = this;

      this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this._message); // If the message is not a string (e.g. number), convert it to a string and trim it.


      this._message = value != null ? "".concat(value).trim() : '';

      if (!this._message && this._isTooltipVisible()) {
        this.hide(0);
      } else {
        this._setupPointerEnterEventsIfNeeded();

        this._updateTooltipMessage();

        this._ngZone.runOutsideAngular(function () {
          // The `AriaDescriber` has some functionality that avoids adding a description if it's the
          // same as the `aria-label` of an element, however we can't know whether the tooltip trigger
          // has a data-bound `aria-label` or when it'll be set for the first time. We can avoid the
          // issue by deferring the description by a tick so Angular has time to set the `aria-label`.
          Promise.resolve().then(function () {
            _this9._ariaDescriber.describe(_this9._elementRef.nativeElement, _this9.message);
          });
        });
      }
    }
    /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */

  }, {
    key: "tooltipClass",
    get: function get() {
      return this._tooltipClass;
    },
    set: function set(value) {
      this._tooltipClass = value;

      if (this._tooltipInstance) {
        this._setTooltipClass(this._tooltipClass);
      }
    }
  }]);

  return MatTooltip;
}();

MatTooltip.ɵfac = function MatTooltip_Factory(t) {
  return new (t || MatTooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["AriaDescriber"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](MAT_TOOLTIP_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](MAT_TOOLTIP_DEFAULT_OPTIONS, 8));
};

MatTooltip.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: MatTooltip,
  selectors: [["", "matTooltip", ""]],
  hostAttrs: [1, "mat-tooltip-trigger"],
  inputs: {
    showDelay: ["matTooltipShowDelay", "showDelay"],
    hideDelay: ["matTooltipHideDelay", "hideDelay"],
    touchGestures: ["matTooltipTouchGestures", "touchGestures"],
    position: ["matTooltipPosition", "position"],
    disabled: ["matTooltipDisabled", "disabled"],
    message: ["matTooltip", "message"],
    tooltipClass: ["matTooltipClass", "tooltipClass"]
  },
  exportAs: ["matTooltip"]
});

MatTooltip.ctorParameters = function () {
  return [{
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollDispatcher"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["AriaDescriber"]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [MAT_TOOLTIP_SCROLL_STRATEGY]
    }]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [MAT_TOOLTIP_DEFAULT_OPTIONS]
    }]
  }];
};

MatTooltip.propDecorators = {
  position: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['matTooltipPosition']
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['matTooltipDisabled']
  }],
  showDelay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['matTooltipShowDelay']
  }],
  hideDelay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['matTooltipHideDelay']
  }],
  touchGestures: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['matTooltipTouchGestures']
  }],
  message: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['matTooltip']
  }],
  tooltipClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['matTooltipClass']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatTooltip, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: '[matTooltip]',
      exportAs: 'matTooltip',
      host: {
        'class': 'mat-tooltip-trigger'
      }
    }]
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollDispatcher"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["AriaDescriber"]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [MAT_TOOLTIP_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [MAT_TOOLTIP_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    showDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['matTooltipShowDelay']
    }],
    hideDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['matTooltipHideDelay']
    }],
    touchGestures: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['matTooltipTouchGestures']
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['matTooltipPosition']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['matTooltipDisabled']
    }],
    message: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['matTooltip']
    }],
    tooltipClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['matTooltipClass']
    }]
  });
})();
/**
 * Internal component that wraps the tooltip's content.
 * @docs-private
 */


var TooltipComponent = /*#__PURE__*/function () {
  function TooltipComponent(_changeDetectorRef, _breakpointObserver) {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TooltipComponent);

    this._changeDetectorRef = _changeDetectorRef;
    this._breakpointObserver = _breakpointObserver;
    /** Property watched by the animation framework to show or hide the tooltip */

    this._visibility = 'initial';
    /** Whether interactions on the page should close the tooltip */

    this._closeOnInteraction = false;
    /** Subject for notifying that the tooltip has been hidden from the view */

    this._onHide = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
    /** Stream that emits whether the user has a handset-sized display.  */

    this._isHandset = this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["Breakpoints"].Handset);
  }
  /**
   * Shows the tooltip with an animation originating from the provided origin
   * @param delay Amount of milliseconds to the delay showing the tooltip.
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TooltipComponent, [{
    key: "show",
    value: function show(delay) {
      var _this10 = this;

      // Cancel the delayed hide if it is scheduled
      if (this._hideTimeoutId) {
        clearTimeout(this._hideTimeoutId);
        this._hideTimeoutId = null;
      } // Body interactions should cancel the tooltip if there is a delay in showing.


      this._closeOnInteraction = true;
      this._showTimeoutId = setTimeout(function () {
        _this10._visibility = 'visible';
        _this10._showTimeoutId = null; // Mark for check so if any parent component has set the
        // ChangeDetectionStrategy to OnPush it will be checked anyways

        _this10._markForCheck();
      }, delay);
    }
    /**
     * Begins the animation to hide the tooltip after the provided delay in ms.
     * @param delay Amount of milliseconds to delay showing the tooltip.
     */

  }, {
    key: "hide",
    value: function hide(delay) {
      var _this11 = this;

      // Cancel the delayed show if it is scheduled
      if (this._showTimeoutId) {
        clearTimeout(this._showTimeoutId);
        this._showTimeoutId = null;
      }

      this._hideTimeoutId = setTimeout(function () {
        _this11._visibility = 'hidden';
        _this11._hideTimeoutId = null; // Mark for check so if any parent component has set the
        // ChangeDetectionStrategy to OnPush it will be checked anyways

        _this11._markForCheck();
      }, delay);
    }
    /** Returns an observable that notifies when the tooltip has been hidden from view. */

  }, {
    key: "afterHidden",
    value: function afterHidden() {
      return this._onHide;
    }
    /** Whether the tooltip is being displayed. */

  }, {
    key: "isVisible",
    value: function isVisible() {
      return this._visibility === 'visible';
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._onHide.complete();
    }
  }, {
    key: "_animationStart",
    value: function _animationStart() {
      this._closeOnInteraction = false;
    }
  }, {
    key: "_animationDone",
    value: function _animationDone(event) {
      var toState = event.toState;

      if (toState === 'hidden' && !this.isVisible()) {
        this._onHide.next();
      }

      if (toState === 'visible' || toState === 'hidden') {
        this._closeOnInteraction = true;
      }
    }
    /**
     * Interactions on the HTML body should close the tooltip immediately as defined in the
     * material design spec.
     * https://material.io/design/components/tooltips.html#behavior
     */

  }, {
    key: "_handleBodyInteraction",
    value: function _handleBodyInteraction() {
      if (this._closeOnInteraction) {
        this.hide(0);
      }
    }
    /**
     * Marks that the tooltip needs to be checked in the next change detection run.
     * Mainly used for rendering the initial text before positioning a tooltip, which
     * can be problematic in components with OnPush change detection.
     */

  }, {
    key: "_markForCheck",
    value: function _markForCheck() {
      this._changeDetectorRef.markForCheck();
    }
  }]);

  return TooltipComponent;
}();

TooltipComponent.ɵfac = function TooltipComponent_Factory(t) {
  return new (t || TooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["BreakpointObserver"]));
};

TooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: TooltipComponent,
  selectors: [["mat-tooltip-component"]],
  hostAttrs: ["aria-hidden", "true"],
  hostVars: 2,
  hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TooltipComponent_click_HostBindingHandler() {
        return ctx._handleBodyInteraction();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveBody"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("zoom", ctx._visibility === "visible" ? 1 : null);
    }
  },
  decls: 3,
  vars: 7,
  consts: [[1, "mat-tooltip", 3, "ngClass"]],
  template: function TooltipComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("@state.start", function TooltipComponent_Template_div_animation_state_start_0_listener() {
        return ctx._animationStart();
      })("@state.done", function TooltipComponent_Template_div_animation_state_done_0_listener($event) {
        return ctx._animationDone($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var tmp_0_0 = null;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("mat-tooltip-handset", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 5, ctx._isHandset)) == null ? null : tmp_0_0.matches);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.tooltipClass)("@state", ctx._visibility);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.message);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
  styles: [".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"],
  encapsulation: 2,
  data: {
    animation: [matTooltipAnimations.tooltipState]
  },
  changeDetection: 0
});

TooltipComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]
  }, {
    type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["BreakpointObserver"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](TooltipComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
    args: [{
      selector: 'mat-tooltip-component',
      template: "<div class=\"mat-tooltip\"\n     [ngClass]=\"tooltipClass\"\n     [class.mat-tooltip-handset]=\"(_isHandset | async)?.matches\"\n     [@state]=\"_visibility\"\n     (@state.start)=\"_animationStart()\"\n     (@state.done)=\"_animationDone($event)\">{{message}}</div>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectionStrategy"].OnPush,
      animations: [matTooltipAnimations.tooltipState],
      host: {
        // Forces the element to have a layout in IE and Edge. This fixes issues where the element
        // won't be rendered if the animations are disabled or there is no web animations polyfill.
        '[style.zoom]': '_visibility === "visible" ? 1 : null',
        '(body:click)': 'this._handleBodyInteraction()',
        'aria-hidden': 'true'
      },
      styles: [".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]
    }, {
      type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["BreakpointObserver"]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatTooltipModule = function MatTooltipModule() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MatTooltipModule);
};

MatTooltipModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: MatTooltipModule
});
MatTooltipModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  factory: function MatTooltipModule_Factory(t) {
    return new (t || MatTooltipModule)();
  },
  providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
  imports: [[_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkScrollableModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MatTooltipModule, {
    declarations: function declarations() {
      return [MatTooltip, TooltipComponent];
    },
    imports: function imports() {
      return [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]];
    },
    exports: function exports() {
      return [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkScrollableModule"]];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatTooltipModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
    args: [{
      imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
      exports: [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkScrollableModule"]],
      declarations: [MatTooltip, TooltipComponent],
      entryComponents: [TooltipComponent],
      providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
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

/***/ "Zfm5":
/*!***********************************************************************!*\
  !*** ./src/app/shared/directives/click-stop-propagation.directive.ts ***!
  \***********************************************************************/
/*! exports provided: ClickStopPropagationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickStopPropagationDirective", function() { return ClickStopPropagationDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");


var ClickStopPropagationDirective = /** @class */ (function () {
    function ClickStopPropagationDirective() {
    }
    ClickStopPropagationDirective.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    ClickStopPropagationDirective.propDecorators = {
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click', ['$event'],] }]
    };
    ClickStopPropagationDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[appClickStopPropagation]' })
    ], ClickStopPropagationDirective);
    return ClickStopPropagationDirective;
}());



/***/ }),

/***/ "b+B0":
/*!*******************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/empty-route/empty-route.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "c2Rc":
/*!************************************************************!*\
  !*** ./src/app/shared/helpers/copy-to-clipboard.helper.ts ***!
  \************************************************************/
/*! exports provided: copyToClipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyToClipboard", function() { return copyToClipboard; });
/** https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f */
function copyToClipboard(str) {
    var el = document.createElement('textarea'); // Create a <textarea> element
    el.value = str; // Set its value to the string that you want copied
    el.setAttribute('readonly', ''); // Make it readonly to be tamper-proof
    el.style.position = 'absolute';
    el.style.left = '-9999px'; // Move outside the screen to make it invisible
    document.body.appendChild(el); // Append the <textarea> element to the HTML document
    var selected = document.getSelection().rangeCount > 0 // Check if there is any content selected previously
        ? document.getSelection().getRangeAt(0) // Store selection if found
        : false; // Mark as false to know no selection existed before
    el.select(); // Select the <textarea> content
    document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el); // Remove the <textarea> element
    if (selected) { // If a selection existed before copying
        document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
        document.getSelection().addRange(selected); // Restore the original selection
    }
}


/***/ }),

/***/ "kVtj":
/*!***************************************************************************!*\
  !*** ./src/app/shared/directives/mousedown-stop-propagation.directive.ts ***!
  \***************************************************************************/
/*! exports provided: MousedownStopPropagationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MousedownStopPropagationDirective", function() { return MousedownStopPropagationDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");


var MousedownStopPropagationDirective = /** @class */ (function () {
    function MousedownStopPropagationDirective() {
    }
    MousedownStopPropagationDirective.prototype.onMousedown = function (event) {
        event.stopPropagation();
    };
    MousedownStopPropagationDirective.propDecorators = {
        onMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['mousedown', ['$event'],] }]
    };
    MousedownStopPropagationDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[appMousedownStopPropagation]' })
    ], MousedownStopPropagationDirective);
    return MousedownStopPropagationDirective;
}());



/***/ }),

/***/ "mQU2":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/empty-route/empty-route.component.ts ***!
  \************************************************************************/
/*! exports provided: EmptyRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyRouteComponent", function() { return EmptyRouteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_empty_route_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./empty-route.component.html */ "b+B0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "EM62");



var EmptyRouteComponent = /** @class */ (function () {
    function EmptyRouteComponent() {
    }
    EmptyRouteComponent.ctorParameters = function () { return []; };
    EmptyRouteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-empty-route',
            template: _raw_loader_empty_route_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], EmptyRouteComponent);
    return EmptyRouteComponent;
}());



/***/ }),

/***/ "nIj0":
/*!***********************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js ***!
  \***********************************************************************************************************/
/*! exports provided: AbstractControl, AbstractControlDirective, AbstractFormGroupDirective, COMPOSITION_BUFFER_MODE, CheckboxControlValueAccessor, CheckboxRequiredValidator, ControlContainer, DefaultValueAccessor, EmailValidator, FormArray, FormArrayName, FormBuilder, FormControl, FormControlDirective, FormControlName, FormGroup, FormGroupDirective, FormGroupName, FormsModule, MaxLengthValidator, MinLengthValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgModel, NgModelGroup, NgSelectOption, NumberValueAccessor, PatternValidator, RadioControlValueAccessor, RangeValueAccessor, ReactiveFormsModule, RequiredValidator, SelectControlValueAccessor, SelectMultipleControlValueAccessor, VERSION, Validators, ɵInternalFormsSharedModule, ɵNgNoValidate, ɵNgSelectMultipleOption, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_ba, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_d, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_t, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_y, ɵangular_packages_forms_forms_z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControl", function() { return AbstractControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function() { return AbstractControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function() { return AbstractFormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function() { return COMPOSITION_BUFFER_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function() { return CheckboxControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function() { return CheckboxRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return ControlContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function() { return DefaultValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArray", function() { return FormArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArrayName", function() { return FormArrayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilder", function() { return FormBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControl", function() { return FormControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlDirective", function() { return FormControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlName", function() { return FormControlName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return FormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function() { return FormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupName", function() { return FormGroupName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function() { return MaxLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function() { return MinLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function() { return NG_ASYNC_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function() { return NG_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function() { return NG_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControl", function() { return NgControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatus", function() { return NgControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function() { return NgControlStatusGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForm", function() { return NgForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModel", function() { return NgModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModelGroup", function() { return NgModelGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectOption", function() { return NgSelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberValueAccessor", function() { return NumberValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternValidator", function() { return PatternValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function() { return RadioControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeValueAccessor", function() { return RangeValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function() { return ReactiveFormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredValidator", function() { return RequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function() { return SelectControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function() { return SelectMultipleControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵInternalFormsSharedModule", function() { return ɵInternalFormsSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNgNoValidate", function() { return ɵNgNoValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNgSelectMultipleOption", function() { return ɵNgSelectMultipleOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_a", function() { return SHARED_FORM_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_b", function() { return TEMPLATE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_ba", function() { return CHECKBOX_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bb", function() { return EMAIL_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc", function() { return MIN_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bd", function() { return MAX_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_be", function() { return PATTERN_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_c", function() { return REACTIVE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_d", function() { return ɵInternalFormsSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_e", function() { return CHECKBOX_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_f", function() { return DEFAULT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_g", function() { return AbstractControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_h", function() { return ngControlStatusHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_i", function() { return formDirectiveProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j", function() { return formControlBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_k", function() { return modelGroupProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_l", function() { return NUMBER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_m", function() { return RADIO_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_n", function() { return RadioControlRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_o", function() { return RANGE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_p", function() { return NG_MODEL_WITH_FORM_CONTROL_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_q", function() { return formControlBinding$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_r", function() { return controlNameBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_s", function() { return formDirectiveProvider$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_t", function() { return formGroupNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_u", function() { return formArrayNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_v", function() { return SELECT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_w", function() { return SELECT_MULTIPLE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_x", function() { return ɵNgSelectMultipleOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_y", function() { return ɵNgNoValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_z", function() { return REQUIRED_VALIDATOR; });
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "pWxA");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "2h71");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "fGyu");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/inherits */ "8K1b");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/createSuper */ "AqVP");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "9fIP");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/createClass */ "MMYH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");








/**
 * @license Angular v10.1.3
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */




/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Used to provide a `ControlValueAccessor` for form controls.
 *
 * See `DefaultValueAccessor` for how to implement one.
 *
 * @publicApi
 */


var NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('NgValueAccessor');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return CheckboxControlValueAccessor;
  }),
  multi: true
};
/**
 * @description
 * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
 * element.
 *
 * @usageNotes
 *
 * ### Using a checkbox with a reactive form.
 *
 * The following example shows how to use a checkbox with a reactive form.
 *
 * ```ts
 * const rememberLoginControl = new FormControl();
 * ```
 *
 * ```
 * <input type="checkbox" [formControl]="rememberLoginControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */

var CheckboxControlValueAccessor = /*#__PURE__*/function () {
  function CheckboxControlValueAccessor(_renderer, _elementRef) {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, CheckboxControlValueAccessor);

    this._renderer = _renderer;
    this._elementRef = _elementRef;
    /**
     * The registered callback function called when a change event occurs on the input element.
     * @nodoc
     */

    this.onChange = function (_) {};
    /**
     * The registered callback function called when a blur event occurs on the input element.
     * @nodoc
     */


    this.onTouched = function () {};
  }
  /**
   * Sets the "checked" property on the input element.
   * @nodoc
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(CheckboxControlValueAccessor, [{
    key: "writeValue",
    value: function writeValue(value) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * Registers a function called when the control is touched.
     * @nodoc
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Sets the "disabled" property on the input element.
     * @nodoc
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
  }]);

  return CheckboxControlValueAccessor;
}();

CheckboxControlValueAccessor.ɵfac = function CheckboxControlValueAccessor_Factory(t) {
  return new (t || CheckboxControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]));
};

CheckboxControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: CheckboxControlValueAccessor,
  selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
  hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.checked);
      })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([CHECKBOX_VALUE_ACCESSOR])]
});

CheckboxControlValueAccessor.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CheckboxControlValueAccessor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
      host: {
        '(change)': 'onChange($event.target.checked)',
        '(blur)': 'onTouched()'
      },
      providers: [CHECKBOX_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return DefaultValueAccessor;
  }),
  multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */

function _isAndroid() {
  var userAgent = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["ɵgetDOM"])() ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["ɵgetDOM"])().getUserAgent() : '';
  return /android (\d+)/.test(userAgent.toLowerCase());
}
/**
 * @description
 * Provide this token to control if form directives buffer IME input until
 * the "compositionend" event occurs.
 * @publicApi
 */


var COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('CompositionEventMode');
/**
 * @description
 * The default `ControlValueAccessor` for writing a value and listening to changes on input
 * elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @usageNotes
 *
 * ### Using the default value accessor
 *
 * The following example shows how to use an input element that activates the default value accessor
 * (in this case, a text field).
 *
 * ```ts
 * const firstNameControl = new FormControl();
 * ```
 *
 * ```
 * <input type="text" [formControl]="firstNameControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */

var DefaultValueAccessor = /*#__PURE__*/function () {
  function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, DefaultValueAccessor);

    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this._compositionMode = _compositionMode;
    /**
     * The registered callback function called when an input event occurs on the input element.
     * @nodoc
     */

    this.onChange = function (_) {};
    /**
     * The registered callback function called when a blur event occurs on the input element.
     * @nodoc
     */


    this.onTouched = function () {};
    /** Whether the user is creating a composition string (IME events). */


    this._composing = false;

    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(DefaultValueAccessor, [{
    key: "writeValue",
    value: function writeValue(value) {
      var normalizedValue = value == null ? '' : value;

      this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * Registers a function called when the control is touched.
     * @nodoc
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Sets the "disabled" property on the input element.
     * @nodoc
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    /** @internal */

  }, {
    key: "_handleInput",
    value: function _handleInput(value) {
      if (!this._compositionMode || this._compositionMode && !this._composing) {
        this.onChange(value);
      }
    }
    /** @internal */

  }, {
    key: "_compositionStart",
    value: function _compositionStart() {
      this._composing = true;
    }
    /** @internal */

  }, {
    key: "_compositionEnd",
    value: function _compositionEnd(value) {
      this._composing = false;
      this._compositionMode && this.onChange(value);
    }
  }]);

  return DefaultValueAccessor;
}();

DefaultValueAccessor.ɵfac = function DefaultValueAccessor_Factory(t) {
  return new (t || DefaultValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](COMPOSITION_BUFFER_MODE, 8));
};

DefaultValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: DefaultValueAccessor,
  selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
  hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
        return ctx._handleInput($event.target.value);
      })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
        return ctx._compositionStart();
      })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
        return ctx._compositionEnd($event.target.value);
      });
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([DEFAULT_VALUE_ACCESSOR])]
});

DefaultValueAccessor.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: Boolean,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](DefaultValueAccessor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
      // TODO: vsavkin replace the above selector with the one below it once
      // https://github.com/angular/angular/issues/3011 is implemented
      // selector: '[ngModel],[formControl],[formControlName]',
      host: {
        '(input)': '$any(this)._handleInput($event.target.value)',
        '(blur)': 'onTouched()',
        '(compositionstart)': '$any(this)._compositionStart()',
        '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
      },
      providers: [DEFAULT_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: Boolean,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [COMPOSITION_BUFFER_MODE]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @description
 * Base class for control directives.
 *
 * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
 *
 * @publicApi
 */


var AbstractControlDirective = /*#__PURE__*/function () {
  function AbstractControlDirective() {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, AbstractControlDirective);
  }

  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(AbstractControlDirective, [{
    key: "reset",

    /**
     * @description
     * Resets the control with the provided value if the control is present.
     */
    value: function reset() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      if (this.control) this.control.reset(value);
    }
    /**
     * @description
     * Reports whether the control with the given path has the error specified.
     *
     * @param errorCode The code of the error to check
     * @param path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * If no path is given, this method checks for the error on the current control.
     *
     * @returns whether the given error is present in the control at the given path.
     *
     * If the control is not present, false is returned.
     */

  }, {
    key: "hasError",
    value: function hasError(errorCode, path) {
      return this.control ? this.control.hasError(errorCode, path) : false;
    }
    /**
     * @description
     * Reports error data for the control with the given path.
     *
     * @param errorCode The code of the error to check
     * @param path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * @returns error data for that particular error. If the control or error is not present,
     * null is returned.
     */

  }, {
    key: "getError",
    value: function getError(errorCode, path) {
      return this.control ? this.control.getError(errorCode, path) : null;
    }
  }, {
    key: "value",

    /**
     * @description
     * Reports the value of the control if it is present, otherwise null.
     */
    get: function get() {
      return this.control ? this.control.value : null;
    }
    /**
     * @description
     * Reports whether the control is valid. A control is considered valid if no
     * validation errors exist with the current value.
     * If the control is not present, null is returned.
     */

  }, {
    key: "valid",
    get: function get() {
      return this.control ? this.control.valid : null;
    }
    /**
     * @description
     * Reports whether the control is invalid, meaning that an error exists in the input value.
     * If the control is not present, null is returned.
     */

  }, {
    key: "invalid",
    get: function get() {
      return this.control ? this.control.invalid : null;
    }
    /**
     * @description
     * Reports whether a control is pending, meaning that that async validation is occurring and
     * errors are not yet available for the input value. If the control is not present, null is
     * returned.
     */

  }, {
    key: "pending",
    get: function get() {
      return this.control ? this.control.pending : null;
    }
    /**
     * @description
     * Reports whether the control is disabled, meaning that the control is disabled
     * in the UI and is exempt from validation checks and excluded from aggregate
     * values of ancestor controls. If the control is not present, null is returned.
     */

  }, {
    key: "disabled",
    get: function get() {
      return this.control ? this.control.disabled : null;
    }
    /**
     * @description
     * Reports whether the control is enabled, meaning that the control is included in ancestor
     * calculations of validity or value. If the control is not present, null is returned.
     */

  }, {
    key: "enabled",
    get: function get() {
      return this.control ? this.control.enabled : null;
    }
    /**
     * @description
     * Reports the control's validation errors. If the control is not present, null is returned.
     */

  }, {
    key: "errors",
    get: function get() {
      return this.control ? this.control.errors : null;
    }
    /**
     * @description
     * Reports whether the control is pristine, meaning that the user has not yet changed
     * the value in the UI. If the control is not present, null is returned.
     */

  }, {
    key: "pristine",
    get: function get() {
      return this.control ? this.control.pristine : null;
    }
    /**
     * @description
     * Reports whether the control is dirty, meaning that the user has changed
     * the value in the UI. If the control is not present, null is returned.
     */

  }, {
    key: "dirty",
    get: function get() {
      return this.control ? this.control.dirty : null;
    }
    /**
     * @description
     * Reports whether the control is touched, meaning that the user has triggered
     * a `blur` event on it. If the control is not present, null is returned.
     */

  }, {
    key: "touched",
    get: function get() {
      return this.control ? this.control.touched : null;
    }
    /**
     * @description
     * Reports the validation status of the control. Possible values include:
     * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
     * If the control is not present, null is returned.
     */

  }, {
    key: "status",
    get: function get() {
      return this.control ? this.control.status : null;
    }
    /**
     * @description
     * Reports whether the control is untouched, meaning that the user has not yet triggered
     * a `blur` event on it. If the control is not present, null is returned.
     */

  }, {
    key: "untouched",
    get: function get() {
      return this.control ? this.control.untouched : null;
    }
    /**
     * @description
     * Returns a multicasting observable that emits a validation status whenever it is
     * calculated for the control. If the control is not present, null is returned.
     */

  }, {
    key: "statusChanges",
    get: function get() {
      return this.control ? this.control.statusChanges : null;
    }
    /**
     * @description
     * Returns a multicasting observable of value changes for the control that emits every time the
     * value of the control changes in the UI or programmatically.
     * If the control is not present, null is returned.
     */

  }, {
    key: "valueChanges",
    get: function get() {
      return this.control ? this.control.valueChanges : null;
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */

  }, {
    key: "path",
    get: function get() {
      return null;
    }
  }]);

  return AbstractControlDirective;
}();

AbstractControlDirective.ɵfac = function AbstractControlDirective_Factory(t) {
  return new (t || AbstractControlDirective)();
};

AbstractControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: AbstractControlDirective
});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @description
 * A base class for directives that contain multiple registered instances of `NgControl`.
 * Only used by the forms module.
 *
 * @publicApi
 */

var ControlContainer = /*#__PURE__*/function (_AbstractControlDirec) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ControlContainer, _AbstractControlDirec);

  var _super = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(ControlContainer);

  function ControlContainer() {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ControlContainer);

    return _super.apply(this, arguments);
  }

  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(ControlContainer, [{
    key: "formDirective",

    /**
     * @description
     * The top-level form directive for the control.
     */
    get: function get() {
      return null;
    }
    /**
     * @description
     * The path to this group.
     */

  }, {
    key: "path",
    get: function get() {
      return null;
    }
  }]);

  return ControlContainer;
}(AbstractControlDirective);

ControlContainer.ɵfac = function ControlContainer_Factory(t) {
  return ɵControlContainer_BaseFactory(t || ControlContainer);
};

ControlContainer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: ControlContainer,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});
var ɵControlContainer_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](ControlContainer);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

function unimplemented() {
  if (typeof ngDevMode === 'undefined' || ngDevMode) {
    throw new Error('unimplemented');
  }
}
/**
 * @description
 * A base class that all `FormControl`-based directives extend. It binds a `FormControl`
 * object to a DOM element.
 *
 * @publicApi
 */


var NgControl = /*#__PURE__*/function (_AbstractControlDirec2) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NgControl, _AbstractControlDirec2);

  var _super2 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(NgControl);

  function NgControl() {
    var _this;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NgControl);

    _this = _super2.apply(this, arguments);
    /**
     * @description
     * The parent form for the control.
     *
     * @internal
     */

    _this._parent = null;
    /**
     * @description
     * The name for the control
     */

    _this.name = null;
    /**
     * @description
     * The value accessor for the control
     */

    _this.valueAccessor = null;
    /**
     * @description
     * The uncomposed array of synchronous validators for the control
     *
     * @internal
     */

    _this._rawValidators = [];
    /**
     * @description
     * The uncomposed array of async validators for the control
     *
     * @internal
     */

    _this._rawAsyncValidators = [];
    return _this;
  }
  /**
   * @description
   * The registered synchronous validator function for the control
   *
   * @throws An exception that this method is not implemented
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NgControl, [{
    key: "validator",
    get: function get() {
      return unimplemented();
    }
    /**
     * @description
     * The registered async validator function for the control
     *
     * @throws An exception that this method is not implemented
     */

  }, {
    key: "asyncValidator",
    get: function get() {
      return unimplemented();
    }
  }]);

  return NgControl;
}(AbstractControlDirective);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var AbstractControlStatus = /*#__PURE__*/function () {
  function AbstractControlStatus(cd) {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, AbstractControlStatus);

    this._cd = cd;
  }

  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(AbstractControlStatus, [{
    key: "ngClassUntouched",
    get: function get() {
      return this._cd.control ? this._cd.control.untouched : false;
    }
  }, {
    key: "ngClassTouched",
    get: function get() {
      return this._cd.control ? this._cd.control.touched : false;
    }
  }, {
    key: "ngClassPristine",
    get: function get() {
      return this._cd.control ? this._cd.control.pristine : false;
    }
  }, {
    key: "ngClassDirty",
    get: function get() {
      return this._cd.control ? this._cd.control.dirty : false;
    }
  }, {
    key: "ngClassValid",
    get: function get() {
      return this._cd.control ? this._cd.control.valid : false;
    }
  }, {
    key: "ngClassInvalid",
    get: function get() {
      return this._cd.control ? this._cd.control.invalid : false;
    }
  }, {
    key: "ngClassPending",
    get: function get() {
      return this._cd.control ? this._cd.control.pending : false;
    }
  }]);

  return AbstractControlStatus;
}();

var ngControlStatusHost = {
  '[class.ng-untouched]': 'ngClassUntouched',
  '[class.ng-touched]': 'ngClassTouched',
  '[class.ng-pristine]': 'ngClassPristine',
  '[class.ng-dirty]': 'ngClassDirty',
  '[class.ng-valid]': 'ngClassValid',
  '[class.ng-invalid]': 'ngClassInvalid',
  '[class.ng-pending]': 'ngClassPending'
};
/**
 * @description
 * Directive automatically applied to Angular form controls that sets CSS classes
 * based on control status.
 *
 * @usageNotes
 *
 * ### CSS classes applied
 *
 * The following classes are applied as the properties become true:
 *
 * * ng-valid
 * * ng-invalid
 * * ng-pending
 * * ng-pristine
 * * ng-dirty
 * * ng-untouched
 * * ng-touched
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */

var NgControlStatus = /*#__PURE__*/function (_AbstractControlStatu) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NgControlStatus, _AbstractControlStatu);

  var _super3 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(NgControlStatus);

  function NgControlStatus(cd) {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NgControlStatus);

    return _super3.call(this, cd);
  }

  return NgControlStatus;
}(AbstractControlStatus);

NgControlStatus.ɵfac = function NgControlStatus_Factory(t) {
  return new (t || NgControlStatus)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NgControl, 2));
};

NgControlStatus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: NgControlStatus,
  selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
  hostVars: 14,
  hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("ng-untouched", ctx.ngClassUntouched)("ng-touched", ctx.ngClassTouched)("ng-pristine", ctx.ngClassPristine)("ng-dirty", ctx.ngClassDirty)("ng-valid", ctx.ngClassValid)("ng-invalid", ctx.ngClassInvalid)("ng-pending", ctx.ngClassPending);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});

NgControlStatus.ctorParameters = function () {
  return [{
    type: NgControl,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](NgControlStatus, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[formControlName],[ngModel],[formControl]',
      host: ngControlStatusHost
    }]
  }], function () {
    return [{
      type: NgControl,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }]
    }];
  }, null);
})();
/**
 * @description
 * Directive automatically applied to Angular form groups that sets CSS classes
 * based on control status (valid/invalid/dirty/etc).
 *
 * @see `NgControlStatus`
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */


var NgControlStatusGroup = /*#__PURE__*/function (_AbstractControlStatu2) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NgControlStatusGroup, _AbstractControlStatu2);

  var _super4 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(NgControlStatusGroup);

  function NgControlStatusGroup(cd) {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NgControlStatusGroup);

    return _super4.call(this, cd);
  }

  return NgControlStatusGroup;
}(AbstractControlStatus);

NgControlStatusGroup.ɵfac = function NgControlStatusGroup_Factory(t) {
  return new (t || NgControlStatusGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ControlContainer, 2));
};

NgControlStatusGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: NgControlStatusGroup,
  selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
  hostVars: 14,
  hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("ng-untouched", ctx.ngClassUntouched)("ng-touched", ctx.ngClassTouched)("ng-pristine", ctx.ngClassPristine)("ng-dirty", ctx.ngClassDirty)("ng-valid", ctx.ngClassValid)("ng-invalid", ctx.ngClassInvalid)("ng-pending", ctx.ngClassPending);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});

NgControlStatusGroup.ctorParameters = function () {
  return [{
    type: ControlContainer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](NgControlStatusGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
      host: ngControlStatusHost
    }]
  }], function () {
    return [{
      type: ControlContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function isEmptyInputValue(value) {
  // we don't check for string here so it also works with arrays
  return value == null || value.length === 0;
}

function hasValidLength(value) {
  // non-strict comparison is intentional, to check for both `null` and `undefined` values
  return value != null && typeof value.length === 'number';
}
/**
 * @description
 * An `InjectionToken` for registering additional synchronous validators used with
 * `AbstractControl`s.
 *
 * @see `NG_ASYNC_VALIDATORS`
 *
 * @usageNotes
 *
 * ### Providing a custom validator
 *
 * The following example registers a custom validator directive. Adding the validator to the
 * existing collection of validators requires the `multi: true` option.
 *
 * ```typescript
 * @Directive({
 *   selector: '[customValidator]',
 *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
 * })
 * class CustomValidatorDirective implements Validator {
 *   validate(control: AbstractControl): ValidationErrors | null {
 *     return { 'custom': true };
 *   }
 * }
 * ```
 *
 * @publicApi
 */


var NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('NgValidators');
/**
 * @description
 * An `InjectionToken` for registering additional asynchronous validators used with
 * `AbstractControl`s.
 *
 * @see `NG_VALIDATORS`
 *
 * @publicApi
 */

var NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('NgAsyncValidators');
/**
 * A regular expression that matches valid e-mail addresses.
 *
 * At a high level, this regexp matches e-mail addresses of the format `local-part@tld`, where:
 * - `local-part` consists of one or more of the allowed characters (alphanumeric and some
 *   punctuation symbols).
 * - `local-part` cannot begin or end with a period (`.`).
 * - `local-part` cannot be longer than 64 characters.
 * - `tld` consists of one or more `labels` separated by periods (`.`). For example `localhost` or
 *   `foo.com`.
 * - A `label` consists of one or more of the allowed characters (alphanumeric, dashes (`-`) and
 *   periods (`.`)).
 * - A `label` cannot begin or end with a dash (`-`) or a period (`.`).
 * - A `label` cannot be longer than 63 characters.
 * - The whole address cannot be longer than 254 characters.
 *
 * ## Implementation background
 *
 * This regexp was ported over from AngularJS (see there for git history):
 * https://github.com/angular/angular.js/blob/c133ef836/src/ng/directive/input.js#L27
 * It is based on the
 * [WHATWG version](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
 * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
 * lengths of different parts of the address). The main differences from the WHATWG version are:
 *   - Disallow `local-part` to begin or end with a period (`.`).
 *   - Disallow `local-part` length to exceed 64 characters.
 *   - Disallow total address length to exceed 254 characters.
 *
 * See [this commit](https://github.com/angular/angular.js/commit/f3f5cf72e) for more details.
 */

var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
/**
 * @description
 * Provides a set of built-in validators that can be used by form controls.
 *
 * A validator is a function that processes a `FormControl` or collection of
 * controls and returns an error map or null. A null map means that validation has passed.
 *
 * @see [Form Validation](/guide/form-validation)
 *
 * @publicApi
 */

var Validators = /*#__PURE__*/function () {
  function Validators() {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Validators);
  }

  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Validators, null, [{
    key: "min",

    /**
     * @description
     * Validator that requires the control's value to be greater than or equal to the provided number.
     * The validator exists only as a function and not as a directive.
     *
     * @usageNotes
     *
     * ### Validate against a minimum of 3
     *
     * ```typescript
     * const control = new FormControl(2, Validators.min(3));
     *
     * console.log(control.errors); // {min: {min: 3, actual: 2}}
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `min` property if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */
    value: function min(_min) {
      return function (control) {
        if (isEmptyInputValue(control.value) || isEmptyInputValue(_min)) {
          return null; // don't validate empty values to allow optional controls
        }

        var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
        // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min

        return !isNaN(value) && value < _min ? {
          'min': {
            'min': _min,
            'actual': control.value
          }
        } : null;
      };
    }
    /**
     * @description
     * Validator that requires the control's value to be less than or equal to the provided number.
     * The validator exists only as a function and not as a directive.
     *
     * @usageNotes
     *
     * ### Validate against a maximum of 15
     *
     * ```typescript
     * const control = new FormControl(16, Validators.max(15));
     *
     * console.log(control.errors); // {max: {max: 15, actual: 16}}
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `max` property if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "max",
    value: function max(_max) {
      return function (control) {
        if (isEmptyInputValue(control.value) || isEmptyInputValue(_max)) {
          return null; // don't validate empty values to allow optional controls
        }

        var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
        // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max

        return !isNaN(value) && value > _max ? {
          'max': {
            'max': _max,
            'actual': control.value
          }
        } : null;
      };
    }
    /**
     * @description
     * Validator that requires the control have a non-empty value.
     *
     * @usageNotes
     *
     * ### Validate that the field is non-empty
     *
     * ```typescript
     * const control = new FormControl('', Validators.required);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @returns An error map with the `required` property
     * if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "required",
    value: function required(control) {
      return isEmptyInputValue(control.value) ? {
        'required': true
      } : null;
    }
    /**
     * @description
     * Validator that requires the control's value be true. This validator is commonly
     * used for required checkboxes.
     *
     * @usageNotes
     *
     * ### Validate that the field value is true
     *
     * ```typescript
     * const control = new FormControl('', Validators.requiredTrue);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @returns An error map that contains the `required` property
     * set to `true` if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "requiredTrue",
    value: function requiredTrue(control) {
      return control.value === true ? null : {
        'required': true
      };
    }
    /**
     * @description
     * Validator that requires the control's value pass an email validation test.
     *
     * Tests the value using a [regular
     * expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
     * pattern suitable for common usecases. The pattern is based on the definition of a valid email
     * address in the [WHATWG HTML
     * specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
     * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
     * lengths of different parts of the address).
     *
     * The differences from the WHATWG version include:
     * - Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
     * - Disallow `local-part` to be longer than 64 characters.
     * - Disallow the whole address to be longer than 254 characters.
     *
     * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
     * validate the value against a different pattern.
     *
     * @usageNotes
     *
     * ### Validate that the field matches a valid email pattern
     *
     * ```typescript
     * const control = new FormControl('bad@', Validators.email);
     *
     * console.log(control.errors); // {email: true}
     * ```
     *
     * @returns An error map with the `email` property
     * if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "email",
    value: function email(control) {
      if (isEmptyInputValue(control.value)) {
        return null; // don't validate empty values to allow optional controls
      }

      return EMAIL_REGEXP.test(control.value) ? null : {
        'email': true
      };
    }
    /**
     * @description
     * Validator that requires the length of the control's value to be greater than or equal
     * to the provided minimum length. This validator is also provided by default if you use the
     * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
     * only for types that have a numeric `length` property, such as strings or arrays. The
     * `minLength` validator logic is also not invoked for values when their `length` property is 0
     * (for example in case of an empty string or an empty array), to support optional controls. You
     * can use the standard `required` validator if empty values should not be considered valid.
     *
     * @usageNotes
     *
     * ### Validate that the field has a minimum of 3 characters
     *
     * ```typescript
     * const control = new FormControl('ng', Validators.minLength(3));
     *
     * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
     * ```
     *
     * ```html
     * <input minlength="5">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `minlength` if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "minLength",
    value: function minLength(_minLength) {
      return function (control) {
        if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
          // don't validate empty values to allow optional controls
          // don't validate values without `length` property
          return null;
        }

        return control.value.length < _minLength ? {
          'minlength': {
            'requiredLength': _minLength,
            'actualLength': control.value.length
          }
        } : null;
      };
    }
    /**
     * @description
     * Validator that requires the length of the control's value to be less than or equal
     * to the provided maximum length. This validator is also provided by default if you use the
     * the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
     * only for types that have a numeric `length` property, such as strings or arrays.
     *
     * @usageNotes
     *
     * ### Validate that the field has maximum of 5 characters
     *
     * ```typescript
     * const control = new FormControl('Angular', Validators.maxLength(5));
     *
     * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
     * ```
     *
     * ```html
     * <input maxlength="5">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `maxlength` property if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "maxLength",
    value: function maxLength(_maxLength) {
      return function (control) {
        return hasValidLength(control.value) && control.value.length > _maxLength ? {
          'maxlength': {
            'requiredLength': _maxLength,
            'actualLength': control.value.length
          }
        } : null;
      };
    }
    /**
     * @description
     * Validator that requires the control's value to match a regex pattern. This validator is also
     * provided by default if you use the HTML5 `pattern` attribute.
     *
     * @usageNotes
     *
     * ### Validate that the field only contains letters or spaces
     *
     * ```typescript
     * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
     *
     * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
     * ```
     *
     * ```html
     * <input pattern="[a-zA-Z ]*">
     * ```
     *
     * @param pattern A regular expression to be used as is to test the values, or a string.
     * If a string is passed, the `^` character is prepended and the `$` character is
     * appended to the provided string (if not already present), and the resulting regular
     * expression is used to test the values.
     *
     * @returns A validator function that returns an error map with the
     * `pattern` property if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "pattern",
    value: function pattern(_pattern) {
      if (!_pattern) return Validators.nullValidator;
      var regex;
      var regexStr;

      if (typeof _pattern === 'string') {
        regexStr = '';
        if (_pattern.charAt(0) !== '^') regexStr += '^';
        regexStr += _pattern;
        if (_pattern.charAt(_pattern.length - 1) !== '$') regexStr += '$';
        regex = new RegExp(regexStr);
      } else {
        regexStr = _pattern.toString();
        regex = _pattern;
      }

      return function (control) {
        if (isEmptyInputValue(control.value)) {
          return null; // don't validate empty values to allow optional controls
        }

        var value = control.value;
        return regex.test(value) ? null : {
          'pattern': {
            'requiredPattern': regexStr,
            'actualValue': value
          }
        };
      };
    }
    /**
     * @description
     * Validator that performs no operation.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "nullValidator",
    value: function nullValidator(control) {
      return null;
    }
  }, {
    key: "compose",
    value: function compose(validators) {
      if (!validators) return null;
      var presentValidators = validators.filter(isPresent);
      if (presentValidators.length == 0) return null;
      return function (control) {
        return mergeErrors(executeValidators(control, presentValidators));
      };
    }
    /**
     * @description
     * Compose multiple async validators into a single function that returns the union
     * of the individual error objects for the provided control.
     *
     * @returns A validator function that returns an error map with the
     * merged error objects of the async validators if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "composeAsync",
    value: function composeAsync(validators) {
      if (!validators) return null;
      var presentValidators = validators.filter(isPresent);
      if (presentValidators.length == 0) return null;
      return function (control) {
        var observables = executeValidators(control, presentValidators).map(toObservable);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(mergeErrors));
      };
    }
  }]);

  return Validators;
}();

function isPresent(o) {
  return o != null;
}

function toObservable(r) {
  var obs = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵisPromise"])(r) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(r) : r;

  if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵisObservable"])(obs) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
    throw new Error("Expected validator to return Promise or Observable.");
  }

  return obs;
}

function mergeErrors(arrayOfErrors) {
  var res = {}; // Not using Array.reduce here due to a Chrome 80 bug
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

  arrayOfErrors.forEach(function (errors) {
    res = errors != null ? Object.assign(Object.assign({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}

function executeValidators(control, validators) {
  return validators.map(function (validator) {
    return validator(control);
  });
}

function isValidatorFn(validator) {
  return !validator.validate;
}
/**
 * Given the list of validators that may contain both functions as well as classes, return the list
 * of validator functions (convert validator classes into validator functions). This is needed to
 * have consistent structure in validators list before composing them.
 *
 * @param validators The set of validators that may contain validators both in plain function form
 *     as well as represented as a validator class.
 */


function normalizeValidators(validators) {
  return validators.map(function (validator) {
    return isValidatorFn(validator) ? validator : function (c) {
      return validator.validate(c);
    };
  });
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return NumberValueAccessor;
  }),
  multi: true
};
/**
 * @description
 * The `ControlValueAccessor` for writing a number value and listening to number input changes.
 * The value accessor is used by the `FormControlDirective`, `FormControlName`, and `NgModel`
 * directives.
 *
 * @usageNotes
 *
 * ### Using a number input with a reactive form.
 *
 * The following example shows how to use a number input with a reactive form.
 *
 * ```ts
 * const totalCountControl = new FormControl();
 * ```
 *
 * ```
 * <input type="number" [formControl]="totalCountControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */

var NumberValueAccessor = /*#__PURE__*/function () {
  function NumberValueAccessor(_renderer, _elementRef) {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NumberValueAccessor);

    this._renderer = _renderer;
    this._elementRef = _elementRef;
    /**
     * The registered callback function called when a change or input event occurs on the input
     * element.
     * @nodoc
     */

    this.onChange = function (_) {};
    /**
     * The registered callback function called when a blur event occurs on the input element.
     * @nodoc
     */


    this.onTouched = function () {};
  }
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NumberValueAccessor, [{
    key: "writeValue",
    value: function writeValue(value) {
      // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
      var normalizedValue = value == null ? '' : value;

      this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = function (value) {
        fn(value == '' ? null : parseFloat(value));
      };
    }
    /**
     * Registers a function called when the control is touched.
     * @nodoc
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Sets the "disabled" property on the input element.
     * @nodoc
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
  }]);

  return NumberValueAccessor;
}();

NumberValueAccessor.ɵfac = function NumberValueAccessor_Factory(t) {
  return new (t || NumberValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]));
};

NumberValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: NumberValueAccessor,
  selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
  hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function NumberValueAccessor_input_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([NUMBER_VALUE_ACCESSOR])]
});

NumberValueAccessor.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](NumberValueAccessor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
      host: {
        '(input)': 'onChange($event.target.value)',
        '(blur)': 'onTouched()'
      },
      providers: [NUMBER_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return RadioControlValueAccessor;
  }),
  multi: true
};

function throwNameError() {
  throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
}
/**
 * @description
 * Class used by Angular to track radio buttons. For internal use only.
 */


var RadioControlRegistry = /*#__PURE__*/function () {
  function RadioControlRegistry() {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, RadioControlRegistry);

    this._accessors = [];
  }
  /**
   * @description
   * Adds a control to the internal registry. For internal use only.
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(RadioControlRegistry, [{
    key: "add",
    value: function add(control, accessor) {
      this._accessors.push([control, accessor]);
    }
    /**
     * @description
     * Removes a control from the internal registry. For internal use only.
     */

  }, {
    key: "remove",
    value: function remove(accessor) {
      for (var i = this._accessors.length - 1; i >= 0; --i) {
        if (this._accessors[i][1] === accessor) {
          this._accessors.splice(i, 1);

          return;
        }
      }
    }
    /**
     * @description
     * Selects a radio button. For internal use only.
     */

  }, {
    key: "select",
    value: function select(accessor) {
      var _this2 = this;

      this._accessors.forEach(function (c) {
        if (_this2._isSameGroup(c, accessor) && c[1] !== accessor) {
          c[1].fireUncheck(accessor.value);
        }
      });
    }
  }, {
    key: "_isSameGroup",
    value: function _isSameGroup(controlPair, accessor) {
      if (!controlPair[0].control) return false;
      return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
    }
  }]);

  return RadioControlRegistry;
}();

RadioControlRegistry.ɵfac = function RadioControlRegistry_Factory(t) {
  return new (t || RadioControlRegistry)();
};

RadioControlRegistry.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: RadioControlRegistry,
  factory: RadioControlRegistry.ɵfac
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](RadioControlRegistry, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"]
  }], function () {
    return [];
  }, null);
})();
/**
 * @description
 * The `ControlValueAccessor` for writing radio control values and listening to radio control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @usageNotes
 *
 * ### Using radio buttons with reactive form directives
 *
 * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
 * a reactive form, radio buttons in the same group should have the same `formControlName`.
 * Providing a `name` attribute is optional.
 *
 * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */


var RadioControlValueAccessor = /*#__PURE__*/function () {
  function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, RadioControlValueAccessor);

    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this._registry = _registry;
    this._injector = _injector;
    /**
     * The registered callback function called when a change event occurs on the input element.
     * @nodoc
     */

    this.onChange = function () {};
    /**
     * The registered callback function called when a blur event occurs on the input element.
     * @nodoc
     */


    this.onTouched = function () {};
  }
  /** @nodoc */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(RadioControlValueAccessor, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this._control = this._injector.get(NgControl);

      this._checkName();

      this._registry.add(this._control, this);
    }
    /** @nodoc */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._registry.remove(this);
    }
    /**
     * Sets the "checked" property value on the radio input element.
     * @nodoc
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this._state = value === this.value;

      this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      var _this3 = this;

      this._fn = fn;

      this.onChange = function () {
        fn(_this3.value);

        _this3._registry.select(_this3);
      };
    }
    /**
     * Sets the "value" on the radio input element and unchecks it.
     *
     * @param value
     */

  }, {
    key: "fireUncheck",
    value: function fireUncheck(value) {
      this.writeValue(value);
    }
    /**
     * Registers a function called when the control is touched.
     * @nodoc
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Sets the "disabled" property on the input element.
     * @nodoc
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
  }, {
    key: "_checkName",
    value: function _checkName() {
      if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throwNameError();
      }

      if (!this.name && this.formControlName) this.name = this.formControlName;
    }
  }]);

  return RadioControlValueAccessor;
}();

RadioControlValueAccessor.ɵfac = function RadioControlValueAccessor_Factory(t) {
  return new (t || RadioControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](RadioControlRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Injector"]));
};

RadioControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: RadioControlValueAccessor,
  selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
  hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RadioControlValueAccessor_change_HostBindingHandler() {
        return ctx.onChange();
      })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    name: "name",
    formControlName: "formControlName",
    value: "value"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([RADIO_VALUE_ACCESSOR])]
});

RadioControlValueAccessor.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: RadioControlRegistry
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injector"]
  }];
};

RadioControlValueAccessor.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  formControlName: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](RadioControlValueAccessor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
      host: {
        '(change)': 'onChange()',
        '(blur)': 'onTouched()'
      },
      providers: [RADIO_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: RadioControlRegistry
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injector"]
    }];
  }, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    formControlName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
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


var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return RangeValueAccessor;
  }),
  multi: true
};
/**
 * @description
 * The `ControlValueAccessor` for writing a range value and listening to range input changes.
 * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
 * directives.
 *
 * @usageNotes
 *
 * ### Using a range input with a reactive form
 *
 * The following example shows how to use a range input with a reactive form.
 *
 * ```ts
 * const ageControl = new FormControl();
 * ```
 *
 * ```
 * <input type="range" [formControl]="ageControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */

var RangeValueAccessor = /*#__PURE__*/function () {
  function RangeValueAccessor(_renderer, _elementRef) {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, RangeValueAccessor);

    this._renderer = _renderer;
    this._elementRef = _elementRef;
    /**
     * The registered callback function called when a change or input event occurs on the input
     * element.
     * @nodoc
     */

    this.onChange = function (_) {};
    /**
     * The registered callback function called when a blur event occurs on the input element.
     * @nodoc
     */


    this.onTouched = function () {};
  }
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(RangeValueAccessor, [{
    key: "writeValue",
    value: function writeValue(value) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = function (value) {
        fn(value == '' ? null : parseFloat(value));
      };
    }
    /**
     * Registers a function called when the control is touched.
     * @nodoc
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Sets the "disabled" property on the range input element.
     * @nodoc
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
  }]);

  return RangeValueAccessor;
}();

RangeValueAccessor.ɵfac = function RangeValueAccessor_Factory(t) {
  return new (t || RangeValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]));
};

RangeValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: RangeValueAccessor,
  selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
  hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RangeValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([RANGE_VALUE_ACCESSOR])]
});

RangeValueAccessor.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](RangeValueAccessor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
      host: {
        '(change)': 'onChange($event.target.value)',
        '(input)': 'onChange($event.target.value)',
        '(blur)': 'onTouched()'
      },
      providers: [RANGE_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var FormErrorExamples = {
  formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
  formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
  formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
  ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
  ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var ReactiveErrors = /*#__PURE__*/function () {
  function ReactiveErrors() {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ReactiveErrors);
  }

  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(ReactiveErrors, null, [{
    key: "controlParentException",
    value: function controlParentException() {
      throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(FormErrorExamples.formControlName));
    }
  }, {
    key: "ngModelGroupException",
    value: function ngModelGroupException() {
      throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ".concat(FormErrorExamples.formGroupName, "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        ").concat(FormErrorExamples.ngModelGroup));
    }
  }, {
    key: "missingFormException",
    value: function missingFormException() {
      throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ".concat(FormErrorExamples.formControlName));
    }
  }, {
    key: "groupParentException",
    value: function groupParentException() {
      throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(FormErrorExamples.formGroupName));
    }
  }, {
    key: "arrayParentException",
    value: function arrayParentException() {
      throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        ".concat(FormErrorExamples.formArrayName));
    }
  }, {
    key: "disabledAttrWarning",
    value: function disabledAttrWarning() {
      console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n\n      Example:\n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
    }
  }, {
    key: "ngModelWarning",
    value: function ngModelWarning(directiveName) {
      console.warn("\n    It looks like you're using ngModel on the same form field as ".concat(directiveName, ".\n    Support for using the ngModel input property and ngModelChange event with\n    reactive form directives has been deprecated in Angular v6 and will be removed\n    in a future version of Angular.\n\n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/").concat(directiveName === 'formControl' ? 'FormControlDirective' : 'FormControlName', "#use-with-ngmodel\n    "));
    }
  }]);

  return ReactiveErrors;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return SelectControlValueAccessor;
  }),
  multi: true
};

function _buildValueString(id, value) {
  if (id == null) return "".concat(value);
  if (value && typeof value === 'object') value = 'Object';
  return "".concat(id, ": ").concat(value).slice(0, 50);
}

function _extractId(valueString) {
  return valueString.split(':')[0];
}
/**
 * @description
 * The `ControlValueAccessor` for writing select control values and listening to select control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @usageNotes
 *
 * ### Using select controls in a reactive form
 *
 * The following examples show how to use a select control in a reactive form.
 *
 * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
 *
 * ### Using select controls in a template-driven form
 *
 * To use a select in a template-driven form, simply add an `ngModel` and a `name`
 * attribute to the main `<select>` tag.
 *
 * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
 *
 * ### Customizing option selection
 *
 * Angular uses object identity to select option. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects option by the return value of the function.
 *
 * ```ts
 * const selectedCountriesControl = new FormControl();
 * ```
 *
 * ```
 * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * **Note:** We listen to the 'change' event because 'input' events aren't fired
 * for selects in Firefox and IE:
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
 * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */


var SelectControlValueAccessor = /*#__PURE__*/function () {
  function SelectControlValueAccessor(_renderer, _elementRef) {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, SelectControlValueAccessor);

    this._renderer = _renderer;
    this._elementRef = _elementRef;
    /** @internal */

    this._optionMap = new Map();
    /** @internal */

    this._idCounter = 0;
    /**
     * The registered callback function called when a change event occurs on the input element.
     * @nodoc
     */

    this.onChange = function (_) {};
    /**
     * The registered callback function called when a blur event occurs on the input element.
     * @nodoc
     */


    this.onTouched = function () {};

    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(SelectControlValueAccessor, [{
    key: "writeValue",

    /**
     * Sets the "value" property on the input element. The "selectedIndex"
     * property is also set if an ID is provided on the option element.
     * @nodoc
     */
    value: function writeValue(value) {
      this.value = value;

      var id = this._getOptionId(value);

      if (id == null) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
      }

      var valueString = _buildValueString(id, value);

      this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      var _this4 = this;

      this.onChange = function (valueString) {
        _this4.value = _this4._getOptionValue(valueString);
        fn(_this4.value);
      };
    }
    /**
     * Registers a function called when the control is touched.
     * @nodoc
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Sets the "disabled" property on the select input element.
     * @nodoc
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    /** @internal */

  }, {
    key: "_registerOption",
    value: function _registerOption() {
      return (this._idCounter++).toString();
    }
    /** @internal */

  }, {
    key: "_getOptionId",
    value: function _getOptionId(value) {
      for (var _i = 0, _Array$from = Array.from(this._optionMap.keys()); _i < _Array$from.length; _i++) {
        var id = _Array$from[_i];
        if (this._compareWith(this._optionMap.get(id), value)) return id;
      }

      return null;
    }
    /** @internal */

  }, {
    key: "_getOptionValue",
    value: function _getOptionValue(valueString) {
      var id = _extractId(valueString);

      return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
    }
  }, {
    key: "compareWith",
    set: function set(fn) {
      if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
      }

      this._compareWith = fn;
    }
  }]);

  return SelectControlValueAccessor;
}();

SelectControlValueAccessor.ɵfac = function SelectControlValueAccessor_Factory(t) {
  return new (t || SelectControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]));
};

SelectControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: SelectControlValueAccessor,
  selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
  hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    compareWith: "compareWith"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([SELECT_VALUE_ACCESSOR])]
});

SelectControlValueAccessor.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }];
};

SelectControlValueAccessor.propDecorators = {
  compareWith: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](SelectControlValueAccessor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
      host: {
        '(change)': 'onChange($event.target.value)',
        '(blur)': 'onTouched()'
      },
      providers: [SELECT_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }];
  }, {
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * @description
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * @see `SelectControlValueAccessor`
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */


var NgSelectOption = /*#__PURE__*/function () {
  function NgSelectOption(_element, _renderer, _select) {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NgSelectOption);

    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) this.id = this._select._registerOption();
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NgSelectOption, [{
    key: "_setElementValue",

    /** @internal */
    value: function _setElementValue(value) {
      this._renderer.setProperty(this._element.nativeElement, 'value', value);
    }
    /** @nodoc */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this._select) {
        this._select._optionMap.delete(this.id);

        this._select.writeValue(this._select.value);
      }
    }
  }, {
    key: "ngValue",
    set: function set(value) {
      if (this._select == null) return;

      this._select._optionMap.set(this.id, value);

      this._setElementValue(_buildValueString(this.id, value));

      this._select.writeValue(this._select.value);
    }
    /**
     * @description
     * Tracks simple string values bound to the option element.
     * For objects, use the `ngValue` input binding.
     */

  }, {
    key: "value",
    set: function set(value) {
      this._setElementValue(value);

      if (this._select) this._select.writeValue(this._select.value);
    }
  }]);

  return NgSelectOption;
}();

NgSelectOption.ɵfac = function NgSelectOption_Factory(t) {
  return new (t || NgSelectOption)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](SelectControlValueAccessor, 9));
};

NgSelectOption.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: NgSelectOption,
  selectors: [["option"]],
  inputs: {
    ngValue: "ngValue",
    value: "value"
  }
});

NgSelectOption.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
    }]
  }];
};

NgSelectOption.propDecorators = {
  ngValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['ngValue']
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['value']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](NgSelectOption, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'option'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: SelectControlValueAccessor,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
      }]
    }];
  }, {
    ngValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['ngValue']
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['value']
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


var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return SelectMultipleControlValueAccessor;
  }),
  multi: true
};

function _buildValueString$1(id, value) {
  if (id == null) return "".concat(value);
  if (typeof value === 'string') value = "'".concat(value, "'");
  if (value && typeof value === 'object') value = 'Object';
  return "".concat(id, ": ").concat(value).slice(0, 50);
}

function _extractId$1(valueString) {
  return valueString.split(':')[0];
}
/** Mock interface for HTMLCollection */


var HTMLCollection = function HTMLCollection() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, HTMLCollection);
};
/**
 * @description
 * The `ControlValueAccessor` for writing multi-select control values and listening to multi-select
 * control changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @see `SelectControlValueAccessor`
 *
 * @usageNotes
 *
 * ### Using a multi-select control
 *
 * The follow example shows you how to use a multi-select control with a reactive form.
 *
 * ```ts
 * const countryControl = new FormControl();
 * ```
 *
 * ```
 * <select multiple name="countries" [formControl]="countryControl">
 *   <option *ngFor="let country of countries" [ngValue]="country">
 *     {{ country.name }}
 *   </option>
 * </select>
 * ```
 *
 * ### Customizing option selection
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * See the `SelectControlValueAccessor` for usage.
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */


var SelectMultipleControlValueAccessor = /*#__PURE__*/function () {
  function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, SelectMultipleControlValueAccessor);

    this._renderer = _renderer;
    this._elementRef = _elementRef;
    /** @internal */

    this._optionMap = new Map();
    /** @internal */

    this._idCounter = 0;
    /**
     * The registered callback function called when a change event occurs on the input element.
     * @nodoc
     */

    this.onChange = function (_) {};
    /**
     * The registered callback function called when a blur event occurs on the input element.
     * @nodoc
     */


    this.onTouched = function () {};

    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(SelectMultipleControlValueAccessor, [{
    key: "writeValue",

    /**
     * Sets the "value" property on one or of more of the select's options.
     * @nodoc
     */
    value: function writeValue(value) {
      var _this5 = this;

      this.value = value;
      var optionSelectedStateSetter;

      if (Array.isArray(value)) {
        // convert values to ids
        var ids = value.map(function (v) {
          return _this5._getOptionId(v);
        });

        optionSelectedStateSetter = function optionSelectedStateSetter(opt, o) {
          opt._setSelected(ids.indexOf(o.toString()) > -1);
        };
      } else {
        optionSelectedStateSetter = function optionSelectedStateSetter(opt, o) {
          opt._setSelected(false);
        };
      }

      this._optionMap.forEach(optionSelectedStateSetter);
    }
    /**
     * Registers a function called when the control value changes
     * and writes an array of the selected options.
     * @nodoc
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      var _this6 = this;

      this.onChange = function (_) {
        var selected = [];

        if (_.selectedOptions !== undefined) {
          var options = _.selectedOptions;

          for (var i = 0; i < options.length; i++) {
            var opt = options.item(i);

            var val = _this6._getOptionValue(opt.value);

            selected.push(val);
          }
        } // Degrade on IE
        else {
            var _options = _.options;

            for (var _i2 = 0; _i2 < _options.length; _i2++) {
              var _opt = _options.item(_i2);

              if (_opt.selected) {
                var _val = _this6._getOptionValue(_opt.value);

                selected.push(_val);
              }
            }
          }

        _this6.value = selected;
        fn(selected);
      };
    }
    /**
     * Registers a function called when the control is touched.
     * @nodoc
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Sets the "disabled" property on the select input element.
     * @nodoc
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    /** @internal */

  }, {
    key: "_registerOption",
    value: function _registerOption(value) {
      var id = (this._idCounter++).toString();

      this._optionMap.set(id, value);

      return id;
    }
    /** @internal */

  }, {
    key: "_getOptionId",
    value: function _getOptionId(value) {
      for (var _i3 = 0, _Array$from2 = Array.from(this._optionMap.keys()); _i3 < _Array$from2.length; _i3++) {
        var id = _Array$from2[_i3];
        if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
      }

      return null;
    }
    /** @internal */

  }, {
    key: "_getOptionValue",
    value: function _getOptionValue(valueString) {
      var id = _extractId$1(valueString);

      return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
    }
  }, {
    key: "compareWith",
    set: function set(fn) {
      if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
      }

      this._compareWith = fn;
    }
  }]);

  return SelectMultipleControlValueAccessor;
}();

SelectMultipleControlValueAccessor.ɵfac = function SelectMultipleControlValueAccessor_Factory(t) {
  return new (t || SelectMultipleControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]));
};

SelectMultipleControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: SelectMultipleControlValueAccessor,
  selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
  hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target);
      })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    compareWith: "compareWith"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([SELECT_MULTIPLE_VALUE_ACCESSOR])]
});

SelectMultipleControlValueAccessor.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }];
};

SelectMultipleControlValueAccessor.propDecorators = {
  compareWith: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](SelectMultipleControlValueAccessor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
      host: {
        '(change)': 'onChange($event.target)',
        '(blur)': 'onTouched()'
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }];
  }, {
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * @description
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * @see `SelectMultipleControlValueAccessor`
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */


var ɵNgSelectMultipleOption = /*#__PURE__*/function () {
  function ɵNgSelectMultipleOption(_element, _renderer, _select) {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ɵNgSelectMultipleOption);

    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;

    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(ɵNgSelectMultipleOption, [{
    key: "_setElementValue",

    /** @internal */
    value: function _setElementValue(value) {
      this._renderer.setProperty(this._element.nativeElement, 'value', value);
    }
    /** @internal */

  }, {
    key: "_setSelected",
    value: function _setSelected(selected) {
      this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
    }
    /** @nodoc */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this._select) {
        this._select._optionMap.delete(this.id);

        this._select.writeValue(this._select.value);
      }
    }
  }, {
    key: "ngValue",
    set: function set(value) {
      if (this._select == null) return;
      this._value = value;

      this._setElementValue(_buildValueString$1(this.id, value));

      this._select.writeValue(this._select.value);
    }
    /**
     * @description
     * Tracks simple string values bound to the option element.
     * For objects, use the `ngValue` input binding.
     */

  }, {
    key: "value",
    set: function set(value) {
      if (this._select) {
        this._value = value;

        this._setElementValue(_buildValueString$1(this.id, value));

        this._select.writeValue(this._select.value);
      } else {
        this._setElementValue(value);
      }
    }
  }]);

  return ɵNgSelectMultipleOption;
}();

ɵNgSelectMultipleOption.ɵfac = function ɵNgSelectMultipleOption_Factory(t) {
  return new (t || ɵNgSelectMultipleOption)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](SelectMultipleControlValueAccessor, 9));
};

ɵNgSelectMultipleOption.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: ɵNgSelectMultipleOption,
  selectors: [["option"]],
  inputs: {
    ngValue: "ngValue",
    value: "value"
  }
});

ɵNgSelectMultipleOption.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
    }]
  }];
};

ɵNgSelectMultipleOption.propDecorators = {
  ngValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['ngValue']
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['value']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](ɵNgSelectMultipleOption, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'option'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: SelectMultipleControlValueAccessor,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
      }]
    }];
  }, {
    ngValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['ngValue']
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['value']
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


function controlPath(name, parent) {
  return [].concat(Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(parent.path), [name]);
}

function setUpControl(control, dir) {
  if (typeof ngDevMode === 'undefined' || ngDevMode) {
    if (!control) _throwError(dir, 'Cannot find control with');
    if (!dir.valueAccessor) _throwError(dir, 'No value accessor for form control with');
  }

  control.validator = Validators.compose([control.validator, dir.validator]);
  control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
  dir.valueAccessor.writeValue(control.value);
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);

  if (dir.valueAccessor.setDisabledState) {
    control.registerOnDisabledChange(function (isDisabled) {
      dir.valueAccessor.setDisabledState(isDisabled);
    });
  } // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4


  dir._rawValidators.forEach(function (validator) {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(function () {
      return control.updateValueAndValidity();
    });
  });

  dir._rawAsyncValidators.forEach(function (validator) {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(function () {
      return control.updateValueAndValidity();
    });
  });
}

function cleanUpControl(control, dir) {
  var noop = function noop() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      _noControlError(dir);
    }
  };

  dir.valueAccessor.registerOnChange(noop);
  dir.valueAccessor.registerOnTouched(noop);

  dir._rawValidators.forEach(function (validator) {
    if (validator.registerOnValidatorChange) {
      validator.registerOnValidatorChange(null);
    }
  });

  dir._rawAsyncValidators.forEach(function (validator) {
    if (validator.registerOnValidatorChange) {
      validator.registerOnValidatorChange(null);
    }
  });

  if (control) control._clearChangeFns();
}

function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange(function (newValue) {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === 'change') updateControl(control, dir);
  });
}

function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(function () {
    control._pendingTouched = true;
    if (control.updateOn === 'blur' && control._pendingChange) updateControl(control, dir);
    if (control.updateOn !== 'submit') control.markAsTouched();
  });
}

function updateControl(control, dir) {
  if (control._pendingDirty) control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}

function setUpModelChangePipeline(control, dir) {
  control.registerOnChange(function (newValue, emitModelEvent) {
    // control -> view
    dir.valueAccessor.writeValue(newValue); // control -> ngModel

    if (emitModelEvent) dir.viewToModelUpdate(newValue);
  });
}

function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'Cannot find control with');
  control.validator = Validators.compose([control.validator, dir.validator]);
  control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
}

function _noControlError(dir) {
  return _throwError(dir, 'There is no FormControl instance attached to form control element with');
}

function _throwError(dir, message) {
  var messageEnd;

  if (dir.path.length > 1) {
    messageEnd = "path: '".concat(dir.path.join(' -> '), "'");
  } else if (dir.path[0]) {
    messageEnd = "name: '".concat(dir.path, "'");
  } else {
    messageEnd = 'unspecified name attribute';
  }

  throw new Error("".concat(message, " ").concat(messageEnd));
}

function composeValidators(validators) {
  return validators != null ? Validators.compose(normalizeValidators(validators)) : null;
}

function composeAsyncValidators(validators) {
  return validators != null ? Validators.composeAsync(normalizeValidators(validators)) : null;
}

function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty('model')) return false;
  var change = changes['model'];
  if (change.isFirstChange()) return true;
  return !Object.is(viewModel, change.currentValue);
}

var BUILTIN_ACCESSORS = [CheckboxControlValueAccessor, RangeValueAccessor, NumberValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor];

function isBuiltInAccessor(valueAccessor) {
  return BUILTIN_ACCESSORS.some(function (a) {
    return valueAccessor.constructor === a;
  });
}

function syncPendingControls(form, directives) {
  form._syncPendingControls();

  directives.forEach(function (dir) {
    var control = dir.control;

    if (control.updateOn === 'submit' && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
} // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented


function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors) return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'Value accessor was not provided as an array for form control with');
  var defaultAccessor = undefined;
  var builtinAccessor = undefined;
  var customAccessor = undefined;
  valueAccessors.forEach(function (v) {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'More than one built-in value accessor matches form control with');
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'More than one custom value accessor matches form control with');
      customAccessor = v;
    }
  });
  if (customAccessor) return customAccessor;
  if (builtinAccessor) return builtinAccessor;
  if (defaultAccessor) return defaultAccessor;

  if (typeof ngDevMode === 'undefined' || ngDevMode) {
    _throwError(dir, 'No valid value accessor for form control with');
  }

  return null;
}

function removeDir(list, el) {
  var index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
} // TODO(kara): remove after deprecation period


function _ngModelWarning(name, type, instance, warningConfig) {
  if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["isDevMode"])() || warningConfig === 'never') return;

  if ((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce || warningConfig === 'always' && !instance._ngModelWarningSent) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      ReactiveErrors.ngModelWarning(name);
    }

    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Reports that a FormControl is valid, meaning that no errors exist in the input value.
 *
 * @see `status`
 */


var VALID = 'VALID';
/**
 * Reports that a FormControl is invalid, meaning that an error exists in the input value.
 *
 * @see `status`
 */

var INVALID = 'INVALID';
/**
 * Reports that a FormControl is pending, meaning that that async validation is occurring and
 * errors are not yet available for the input value.
 *
 * @see `markAsPending`
 * @see `status`
 */

var PENDING = 'PENDING';
/**
 * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
 * calculations of validity or value.
 *
 * @see `markAsDisabled`
 * @see `status`
 */

var DISABLED = 'DISABLED';

function _find(control, path, delimiter) {
  if (path == null) return null;

  if (!Array.isArray(path)) {
    path = path.split(delimiter);
  }

  if (Array.isArray(path) && path.length === 0) return null; // Not using Array.reduce here due to a Chrome 80 bug
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

  var controlToFind = control;
  path.forEach(function (name) {
    if (controlToFind instanceof FormGroup) {
      controlToFind = controlToFind.controls.hasOwnProperty(name) ? controlToFind.controls[name] : null;
    } else if (controlToFind instanceof FormArray) {
      controlToFind = controlToFind.at(name) || null;
    } else {
      controlToFind = null;
    }
  });
  return controlToFind;
}
/**
 * Gets validators from either an options object or given validators.
 */


function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
/**
 * Creates validator function by combining provided validators.
 */


function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
/**
 * Gets async validators from either an options object or given validators.
 */


function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
/**
 * Creates async validator function by combining provided async validators.
 */


function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}

function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === 'object';
}
/**
 * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 * @see [Forms Guide](/guide/forms)
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 * @see [Dynamic Forms Guide](/guide/dynamic-form)
 *
 * @publicApi
 */


var AbstractControl = /*#__PURE__*/function () {
  /**
   * Initialize the AbstractControl instance.
   *
   * @param validators The function or array of functions that is used to determine the validity of
   *     this control synchronously.
   * @param asyncValidators The function or array of functions that is used to determine validity of
   *     this control asynchronously.
   */
  function AbstractControl(validators, asyncValidators) {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, AbstractControl);

    /**
     * Indicates that a control has its own pending asynchronous validation in progress.
     *
     * @internal
     */
    this._hasOwnPendingAsyncValidator = false;
    /** @internal */

    this._onCollectionChange = function () {};
    /**
     * A control is `pristine` if the user has not yet changed
     * the value in the UI.
     *
     * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
     * Programmatic changes to a control's value do not mark it dirty.
     */


    this.pristine = true;
    /**
     * True if the control is marked as `touched`.
     *
     * A control is marked `touched` once the user has triggered
     * a `blur` event on it.
     */

    this.touched = false;
    /** @internal */

    this._onDisabledChange = [];
    this._rawValidators = validators;
    this._rawAsyncValidators = asyncValidators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
  /**
   * The function that is used to determine the validity of this control synchronously.
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(AbstractControl, [{
    key: "setValidators",

    /**
     * Sets the synchronous validators that are active on this control.  Calling
     * this overwrites any existing sync validators.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     */
    value: function setValidators(newValidator) {
      this._rawValidators = newValidator;
      this._composedValidatorFn = coerceToValidator(newValidator);
    }
    /**
     * Sets the async validators that are active on this control. Calling this
     * overwrites any existing async validators.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     */

  }, {
    key: "setAsyncValidators",
    value: function setAsyncValidators(newValidator) {
      this._rawAsyncValidators = newValidator;
      this._composedAsyncValidatorFn = coerceToAsyncValidator(newValidator);
    }
    /**
     * Empties out the sync validator list.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     */

  }, {
    key: "clearValidators",
    value: function clearValidators() {
      this.validator = null;
    }
    /**
     * Empties out the async validator list.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     */

  }, {
    key: "clearAsyncValidators",
    value: function clearAsyncValidators() {
      this.asyncValidator = null;
    }
    /**
     * Marks the control as `touched`. A control is touched by focus and
     * blur events that do not change the value.
     *
     * @see `markAsUntouched()`
     * @see `markAsDirty()`
     * @see `markAsPristine()`
     *
     * @param opts Configuration options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */

  }, {
    key: "markAsTouched",
    value: function markAsTouched() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.touched = true;

      if (this._parent && !opts.onlySelf) {
        this._parent.markAsTouched(opts);
      }
    }
    /**
     * Marks the control and all its descendant controls as `touched`.
     * @see `markAsTouched()`
     */

  }, {
    key: "markAllAsTouched",
    value: function markAllAsTouched() {
      this.markAsTouched({
        onlySelf: true
      });

      this._forEachChild(function (control) {
        return control.markAllAsTouched();
      });
    }
    /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, also marks all children as `untouched`
     * and recalculates the `touched` status of all parent controls.
     *
     * @see `markAsTouched()`
     * @see `markAsDirty()`
     * @see `markAsPristine()`
     *
     * @param opts Configuration options that determine how the control propagates changes
     * and emits events after the marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */

  }, {
    key: "markAsUntouched",
    value: function markAsUntouched() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.touched = false;
      this._pendingTouched = false;

      this._forEachChild(function (control) {
        control.markAsUntouched({
          onlySelf: true
        });
      });

      if (this._parent && !opts.onlySelf) {
        this._parent._updateTouched(opts);
      }
    }
    /**
     * Marks the control as `dirty`. A control becomes dirty when
     * the control's value is changed through the UI; compare `markAsTouched`.
     *
     * @see `markAsTouched()`
     * @see `markAsUntouched()`
     * @see `markAsPristine()`
     *
     * @param opts Configuration options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */

  }, {
    key: "markAsDirty",
    value: function markAsDirty() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.pristine = false;

      if (this._parent && !opts.onlySelf) {
        this._parent.markAsDirty(opts);
      }
    }
    /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, marks all children as `pristine`,
     * and recalculates the `pristine` status of all parent
     * controls.
     *
     * @see `markAsTouched()`
     * @see `markAsUntouched()`
     * @see `markAsDirty()`
     *
     * @param opts Configuration options that determine how the control emits events after
     * marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */

  }, {
    key: "markAsPristine",
    value: function markAsPristine() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.pristine = true;
      this._pendingDirty = false;

      this._forEachChild(function (control) {
        control.markAsPristine({
          onlySelf: true
        });
      });

      if (this._parent && !opts.onlySelf) {
        this._parent._updatePristine(opts);
      }
    }
    /**
     * Marks the control as `pending`.
     *
     * A control is pending while the control performs async validation.
     *
     * @see {@link AbstractControl.status}
     *
     * @param opts Configuration options that determine how the control propagates changes and
     * emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
     * observable emits an event with the latest status the control is marked pending.
     * When false, no events are emitted.
     *
     */

  }, {
    key: "markAsPending",
    value: function markAsPending() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.status = PENDING;

      if (opts.emitEvent !== false) {
        this.statusChanges.emit(this.status);
      }

      if (this._parent && !opts.onlySelf) {
        this._parent.markAsPending(opts);
      }
    }
    /**
     * Disables the control. This means the control is exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children are also disabled.
     *
     * @see {@link AbstractControl.status}
     *
     * @param opts Configuration options that determine how the control propagates
     * changes and emits events after the control is disabled.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is disabled.
     * When false, no events are emitted.
     */

  }, {
    key: "disable",
    value: function disable() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // If parent has been marked artificially dirty we don't want to re-calculate the
      // parent's dirtiness based on the children.
      var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

      this.status = DISABLED;
      this.errors = null;

      this._forEachChild(function (control) {
        control.disable(Object.assign(Object.assign({}, opts), {
          onlySelf: true
        }));
      });

      this._updateValue();

      if (opts.emitEvent !== false) {
        this.valueChanges.emit(this.value);
        this.statusChanges.emit(this.status);
      }

      this._updateAncestors(Object.assign(Object.assign({}, opts), {
        skipPristineCheck: skipPristineCheck
      }));

      this._onDisabledChange.forEach(function (changeFn) {
        return changeFn(true);
      });
    }
    /**
     * Enables the control. This means the control is included in validation checks and
     * the aggregate value of its parent. Its status recalculates based on its value and
     * its validators.
     *
     * By default, if the control has children, all children are enabled.
     *
     * @see {@link AbstractControl.status}
     *
     * @param opts Configure options that control how the control propagates changes and
     * emits events when marked as untouched
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is enabled.
     * When false, no events are emitted.
     */

  }, {
    key: "enable",
    value: function enable() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // If parent has been marked artificially dirty we don't want to re-calculate the
      // parent's dirtiness based on the children.
      var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

      this.status = VALID;

      this._forEachChild(function (control) {
        control.enable(Object.assign(Object.assign({}, opts), {
          onlySelf: true
        }));
      });

      this.updateValueAndValidity({
        onlySelf: true,
        emitEvent: opts.emitEvent
      });

      this._updateAncestors(Object.assign(Object.assign({}, opts), {
        skipPristineCheck: skipPristineCheck
      }));

      this._onDisabledChange.forEach(function (changeFn) {
        return changeFn(false);
      });
    }
  }, {
    key: "_updateAncestors",
    value: function _updateAncestors(opts) {
      if (this._parent && !opts.onlySelf) {
        this._parent.updateValueAndValidity(opts);

        if (!opts.skipPristineCheck) {
          this._parent._updatePristine();
        }

        this._parent._updateTouched();
      }
    }
    /**
     * @param parent Sets the parent of the control
     */

  }, {
    key: "setParent",
    value: function setParent(parent) {
      this._parent = parent;
    }
    /**
     * Recalculates the value and validation status of the control.
     *
     * By default, it also updates the value and validity of its ancestors.
     *
     * @param opts Configuration options determine how the control propagates changes and emits events
     * after updates and validity checks are applied.
     * * `onlySelf`: When true, only update this control. When false or not supplied,
     * update all direct ancestors. Default is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is updated.
     * When false, no events are emitted.
     */

  }, {
    key: "updateValueAndValidity",
    value: function updateValueAndValidity() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this._setInitialStatus();

      this._updateValue();

      if (this.enabled) {
        this._cancelExistingSubscription();

        this.errors = this._runValidator();
        this.status = this._calculateStatus();

        if (this.status === VALID || this.status === PENDING) {
          this._runAsyncValidator(opts.emitEvent);
        }
      }

      if (opts.emitEvent !== false) {
        this.valueChanges.emit(this.value);
        this.statusChanges.emit(this.status);
      }

      if (this._parent && !opts.onlySelf) {
        this._parent.updateValueAndValidity(opts);
      }
    }
    /** @internal */

  }, {
    key: "_updateTreeValidity",
    value: function _updateTreeValidity() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        emitEvent: true
      };

      this._forEachChild(function (ctrl) {
        return ctrl._updateTreeValidity(opts);
      });

      this.updateValueAndValidity({
        onlySelf: true,
        emitEvent: opts.emitEvent
      });
    }
  }, {
    key: "_setInitialStatus",
    value: function _setInitialStatus() {
      this.status = this._allControlsDisabled() ? DISABLED : VALID;
    }
  }, {
    key: "_runValidator",
    value: function _runValidator() {
      return this.validator ? this.validator(this) : null;
    }
  }, {
    key: "_runAsyncValidator",
    value: function _runAsyncValidator(emitEvent) {
      var _this7 = this;

      if (this.asyncValidator) {
        this.status = PENDING;
        this._hasOwnPendingAsyncValidator = true;
        var obs = toObservable(this.asyncValidator(this));
        this._asyncValidationSubscription = obs.subscribe(function (errors) {
          _this7._hasOwnPendingAsyncValidator = false; // This will trigger the recalculation of the validation status, which depends on
          // the state of the asynchronous validation (whether it is in progress or not). So, it is
          // necessary that we have updated the `_hasOwnPendingAsyncValidator` boolean flag first.

          _this7.setErrors(errors, {
            emitEvent: emitEvent
          });
        });
      }
    }
  }, {
    key: "_cancelExistingSubscription",
    value: function _cancelExistingSubscription() {
      if (this._asyncValidationSubscription) {
        this._asyncValidationSubscription.unsubscribe();

        this._hasOwnPendingAsyncValidator = false;
      }
    }
    /**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * @usageNotes
     *
     * ### Manually set the errors for a control
     *
     * ```
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     */

  }, {
    key: "setErrors",
    value: function setErrors(errors) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.errors = errors;

      this._updateControlsErrors(opts.emitEvent !== false);
    }
    /**
     * Retrieves a child control given the control's name or path.
     *
     * @param path A dot-delimited string or array of string/number values that define the path to the
     * control.
     *
     * @usageNotes
     * ### Retrieve a nested control
     *
     * For example, to get a `name` control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     */

  }, {
    key: "get",
    value: function get(path) {
      return _find(this, path, '.');
    }
    /**
     * @description
     * Reports error data for the control with the given path.
     *
     * @param errorCode The code of the error to check
     * @param path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * @returns error data for that particular error. If the control or error is not present,
     * null is returned.
     */

  }, {
    key: "getError",
    value: function getError(errorCode, path) {
      var control = path ? this.get(path) : this;
      return control && control.errors ? control.errors[errorCode] : null;
    }
    /**
     * @description
     * Reports whether the control with the given path has the error specified.
     *
     * @param errorCode The code of the error to check
     * @param path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * If no path is given, this method checks for the error on the current control.
     *
     * @returns whether the given error is present in the control at the given path.
     *
     * If the control is not present, false is returned.
     */

  }, {
    key: "hasError",
    value: function hasError(errorCode, path) {
      return !!this.getError(errorCode, path);
    }
    /**
     * Retrieves the top-level ancestor of this control.
     */

  }, {
    key: "_updateControlsErrors",

    /** @internal */
    value: function _updateControlsErrors(emitEvent) {
      this.status = this._calculateStatus();

      if (emitEvent) {
        this.statusChanges.emit(this.status);
      }

      if (this._parent) {
        this._parent._updateControlsErrors(emitEvent);
      }
    }
    /** @internal */

  }, {
    key: "_initObservables",
    value: function _initObservables() {
      this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
      this.statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    }
  }, {
    key: "_calculateStatus",
    value: function _calculateStatus() {
      if (this._allControlsDisabled()) return DISABLED;
      if (this.errors) return INVALID;
      if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
      if (this._anyControlsHaveStatus(INVALID)) return INVALID;
      return VALID;
    }
    /** @internal */

  }, {
    key: "_anyControlsHaveStatus",
    value: function _anyControlsHaveStatus(status) {
      return this._anyControls(function (control) {
        return control.status === status;
      });
    }
    /** @internal */

  }, {
    key: "_anyControlsDirty",
    value: function _anyControlsDirty() {
      return this._anyControls(function (control) {
        return control.dirty;
      });
    }
    /** @internal */

  }, {
    key: "_anyControlsTouched",
    value: function _anyControlsTouched() {
      return this._anyControls(function (control) {
        return control.touched;
      });
    }
    /** @internal */

  }, {
    key: "_updatePristine",
    value: function _updatePristine() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.pristine = !this._anyControlsDirty();

      if (this._parent && !opts.onlySelf) {
        this._parent._updatePristine(opts);
      }
    }
    /** @internal */

  }, {
    key: "_updateTouched",
    value: function _updateTouched() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.touched = this._anyControlsTouched();

      if (this._parent && !opts.onlySelf) {
        this._parent._updateTouched(opts);
      }
    }
    /** @internal */

  }, {
    key: "_isBoxedValue",
    value: function _isBoxedValue(formState) {
      return typeof formState === 'object' && formState !== null && Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
    }
    /** @internal */

  }, {
    key: "_registerOnCollectionChange",
    value: function _registerOnCollectionChange(fn) {
      this._onCollectionChange = fn;
    }
    /** @internal */

  }, {
    key: "_setUpdateStrategy",
    value: function _setUpdateStrategy(opts) {
      if (isOptionsObj(opts) && opts.updateOn != null) {
        this._updateOn = opts.updateOn;
      }
    }
    /**
     * Check to see if parent has been marked artificially dirty.
     *
     * @internal
     */

  }, {
    key: "_parentMarkedDirty",
    value: function _parentMarkedDirty(onlySelf) {
      var parentDirty = this._parent && this._parent.dirty;
      return !onlySelf && parentDirty && !this._parent._anyControlsDirty();
    }
  }, {
    key: "validator",
    get: function get() {
      return this._composedValidatorFn;
    },
    set: function set(validatorFn) {
      this._rawValidators = this._composedValidatorFn = validatorFn;
    }
    /**
     * The function that is used to determine the validity of this control asynchronously.
     */

  }, {
    key: "asyncValidator",
    get: function get() {
      return this._composedAsyncValidatorFn;
    },
    set: function set(asyncValidatorFn) {
      this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
    }
    /**
     * The parent control.
     */

  }, {
    key: "parent",
    get: function get() {
      return this._parent;
    }
    /**
     * A control is `valid` when its `status` is `VALID`.
     *
     * @see {@link AbstractControl.status}
     *
     * @returns True if the control has passed all of its validation tests,
     * false otherwise.
     */

  }, {
    key: "valid",
    get: function get() {
      return this.status === VALID;
    }
    /**
     * A control is `invalid` when its `status` is `INVALID`.
     *
     * @see {@link AbstractControl.status}
     *
     * @returns True if this control has failed one or more of its validation checks,
     * false otherwise.
     */

  }, {
    key: "invalid",
    get: function get() {
      return this.status === INVALID;
    }
    /**
     * A control is `pending` when its `status` is `PENDING`.
     *
     * @see {@link AbstractControl.status}
     *
     * @returns True if this control is in the process of conducting a validation check,
     * false otherwise.
     */

  }, {
    key: "pending",
    get: function get() {
      return this.status == PENDING;
    }
    /**
     * A control is `disabled` when its `status` is `DISABLED`.
     *
     * Disabled controls are exempt from validation checks and
     * are not included in the aggregate value of their ancestor
     * controls.
     *
     * @see {@link AbstractControl.status}
     *
     * @returns True if the control is disabled, false otherwise.
     */

  }, {
    key: "disabled",
    get: function get() {
      return this.status === DISABLED;
    }
    /**
     * A control is `enabled` as long as its `status` is not `DISABLED`.
     *
     * @returns True if the control has any status other than 'DISABLED',
     * false if the status is 'DISABLED'.
     *
     * @see {@link AbstractControl.status}
     *
     */

  }, {
    key: "enabled",
    get: function get() {
      return this.status !== DISABLED;
    }
    /**
     * A control is `dirty` if the user has changed the value
     * in the UI.
     *
     * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
     * Programmatic changes to a control's value do not mark it dirty.
     */

  }, {
    key: "dirty",
    get: function get() {
      return !this.pristine;
    }
    /**
     * True if the control has not been marked as touched
     *
     * A control is `untouched` if the user has not yet triggered
     * a `blur` event on it.
     */

  }, {
    key: "untouched",
    get: function get() {
      return !this.touched;
    }
    /**
     * Reports the update strategy of the `AbstractControl` (meaning
     * the event on which the control updates itself).
     * Possible values: `'change'` | `'blur'` | `'submit'`
     * Default value: `'change'`
     */

  }, {
    key: "updateOn",
    get: function get() {
      return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
    }
  }, {
    key: "root",
    get: function get() {
      var x = this;

      while (x._parent) {
        x = x._parent;
      }

      return x;
    }
  }]);

  return AbstractControl;
}();
/**
 * Tracks the value and validation status of an individual form control.
 *
 * This is one of the three fundamental building blocks of Angular forms, along with
 * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
 * implements most of the base functionality for accessing the value, validation status,
 * user interactions and events. See [usage examples below](#usage-notes).
 *
 * @see `AbstractControl`
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see [Usage Notes](#usage-notes)
 *
 * @usageNotes
 *
 * ### Initializing Form Controls
 *
 * Instantiate a `FormControl`, with an initial value.
 *
 * ```ts
 * const control = new FormControl('some value');
 * console.log(control.value);     // 'some value'
 *```
 *
 * The following example initializes the control with a form state object. The `value`
 * and `disabled` keys are required in this case.
 *
 * ```ts
 * const control = new FormControl({ value: 'n/a', disabled: true });
 * console.log(control.value);     // 'n/a'
 * console.log(control.status);    // 'DISABLED'
 * ```
 *
 * The following example initializes the control with a sync validator.
 *
 * ```ts
 * const control = new FormControl('', Validators.required);
 * console.log(control.value);      // ''
 * console.log(control.status);     // 'INVALID'
 * ```
 *
 * The following example initializes the control using an options object.
 *
 * ```ts
 * const control = new FormControl('', {
 *    validators: Validators.required,
 *    asyncValidators: myAsyncValidator
 * });
 * ```
 *
 * ### Configure the control to update on a blur event
 *
 * Set the `updateOn` option to `'blur'` to update on the blur `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'blur' });
 * ```
 *
 * ### Configure the control to update on a submit event
 *
 * Set the `updateOn` option to `'submit'` to update on a submit `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'submit' });
 * ```
 *
 * ### Reset the control back to an initial value
 *
 * You reset to a specific form state by passing through a standalone
 * value or a form state object that contains both a value and a disabled state
 * (these are the only two properties that cannot be calculated).
 *
 * ```ts
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 *
 * control.reset('Drew');
 *
 * console.log(control.value); // 'Drew'
 * ```
 *
 * ### Reset the control back to an initial value and disabled
 *
 * ```
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 * console.log(control.status); // 'VALID'
 *
 * control.reset({ value: 'Drew', disabled: true });
 *
 * console.log(control.value); // 'Drew'
 * console.log(control.status); // 'DISABLED'
 * ```
 *
 * @publicApi
 */


var FormControl = /*#__PURE__*/function (_AbstractControl) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormControl, _AbstractControl);

  var _super5 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FormControl);

  /**
   * Creates a new `FormControl` instance.
   *
   * @param formState Initializes the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  function FormControl() {
    var _this8;

    var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var validatorOrOpts = arguments.length > 1 ? arguments[1] : undefined;
    var asyncValidator = arguments.length > 2 ? arguments[2] : undefined;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormControl);

    _this8 = _super5.call(this, pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    /** @internal */

    _this8._onChange = [];

    _this8._applyFormState(formState);

    _this8._setUpdateStrategy(validatorOrOpts);

    _this8.updateValueAndValidity({
      onlySelf: true,
      emitEvent: false
    });

    _this8._initObservables();

    return _this8;
  }
  /**
   * Sets a new value for the form control.
   *
   * @param value The new value for the control.
   * @param options Configuration options that determine how the control propagates changes
   * and emits events when the value changes.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
   * `onChange` event to
   * update the view.
   * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
   * `ngModelChange`
   * event to update the model.
   *
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormControl, [{
    key: "setValue",
    value: function setValue(value) {
      var _this9 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.value = this._pendingValue = value;

      if (this._onChange.length && options.emitModelToViewChange !== false) {
        this._onChange.forEach(function (changeFn) {
          return changeFn(_this9.value, options.emitViewToModelChange !== false);
        });
      }

      this.updateValueAndValidity(options);
    }
    /**
     * Patches the value of a control.
     *
     * This function is functionally the same as {@link FormControl#setValue setValue} at this level.
     * It exists for symmetry with {@link FormGroup#patchValue patchValue} on `FormGroups` and
     * `FormArrays`, where it does behave differently.
     *
     * @see `setValue` for options
     */

  }, {
    key: "patchValue",
    value: function patchValue(value) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.setValue(value, options);
    }
    /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     */

  }, {
    key: "reset",
    value: function reset() {
      var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._applyFormState(formState);

      this.markAsPristine(options);
      this.markAsUntouched(options);
      this.setValue(this.value, options);
      this._pendingChange = false;
    }
    /**
     * @internal
     */

  }, {
    key: "_updateValue",
    value: function _updateValue() {}
    /**
     * @internal
     */

  }, {
    key: "_anyControls",
    value: function _anyControls(condition) {
      return false;
    }
    /**
     * @internal
     */

  }, {
    key: "_allControlsDisabled",
    value: function _allControlsDisabled() {
      return this.disabled;
    }
    /**
     * Register a listener for change events.
     *
     * @param fn The method that is called when the value changes
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this._onChange.push(fn);
    }
    /**
     * @internal
     */

  }, {
    key: "_clearChangeFns",
    value: function _clearChangeFns() {
      this._onChange = [];
      this._onDisabledChange = [];

      this._onCollectionChange = function () {};
    }
    /**
     * Register a listener for disabled events.
     *
     * @param fn The method that is called when the disabled status changes.
     */

  }, {
    key: "registerOnDisabledChange",
    value: function registerOnDisabledChange(fn) {
      this._onDisabledChange.push(fn);
    }
    /**
     * @internal
     */

  }, {
    key: "_forEachChild",
    value: function _forEachChild(cb) {}
    /** @internal */

  }, {
    key: "_syncPendingControls",
    value: function _syncPendingControls() {
      if (this.updateOn === 'submit') {
        if (this._pendingDirty) this.markAsDirty();
        if (this._pendingTouched) this.markAsTouched();

        if (this._pendingChange) {
          this.setValue(this._pendingValue, {
            onlySelf: true,
            emitModelToViewChange: false
          });
          return true;
        }
      }

      return false;
    }
  }, {
    key: "_applyFormState",
    value: function _applyFormState(formState) {
      if (this._isBoxedValue(formState)) {
        this.value = this._pendingValue = formState.value;
        formState.disabled ? this.disable({
          onlySelf: true,
          emitEvent: false
        }) : this.enable({
          onlySelf: true,
          emitEvent: false
        });
      } else {
        this.value = this._pendingValue = formState;
      }
    }
  }]);

  return FormControl;
}(AbstractControl);
/**
 * Tracks the value and validity state of a group of `FormControl` instances.
 *
 * A `FormGroup` aggregates the values of each child `FormControl` into one object,
 * with each control name as the key.  It calculates its status by reducing the status values
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormArray`.
 *
 * When instantiating a `FormGroup`, pass in a collection of child controls as the first
 * argument. The key for each child registers the name for the control.
 *
 * @usageNotes
 *
 * ### Create a form group with 2 controls
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * ### Create a form group with a group-level validator
 *
 * You include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * Like `FormControl` instances, you choose to pass in
 * validators and async validators as part of an options object.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('')
 *   passwordConfirm: new FormControl('')
 * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
 * ```
 *
 * ### Set the updateOn property for all controls in a form group
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * group level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const c = new FormGroup({
 *   one: new FormControl()
 * }, { updateOn: 'blur' });
 * ```
 *
 * @publicApi
 */


var FormGroup = /*#__PURE__*/function (_AbstractControl2) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormGroup, _AbstractControl2);

  var _super6 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FormGroup);

  /**
   * Creates a new `FormGroup` instance.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  function FormGroup(controls, validatorOrOpts, asyncValidator) {
    var _this10;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormGroup);

    _this10 = _super6.call(this, pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    _this10.controls = controls;

    _this10._initObservables();

    _this10._setUpdateStrategy(validatorOrOpts);

    _this10._setUpControls();

    _this10.updateValueAndValidity({
      onlySelf: true,
      emitEvent: false
    });

    return _this10;
  }
  /**
   * Registers a control with the group's list of controls.
   *
   * This method does not update the value or validity of the control.
   * Use {@link FormGroup#addControl addControl} instead.
   *
   * @param name The control name to register in the collection
   * @param control Provides the control for the given name
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormGroup, [{
    key: "registerControl",
    value: function registerControl(name, control) {
      if (this.controls[name]) return this.controls[name];
      this.controls[name] = control;
      control.setParent(this);

      control._registerOnCollectionChange(this._onCollectionChange);

      return control;
    }
    /**
     * Add a control to this group.
     *
     * This method also updates the value and validity of the control.
     *
     * @param name The control name to add to the collection
     * @param control Provides the control for the given name
     */

  }, {
    key: "addControl",
    value: function addControl(name, control) {
      this.registerControl(name, control);
      this.updateValueAndValidity();

      this._onCollectionChange();
    }
    /**
     * Remove a control from this group.
     *
     * @param name The control name to remove from the collection
     */

  }, {
    key: "removeControl",
    value: function removeControl(name) {
      if (this.controls[name]) this.controls[name]._registerOnCollectionChange(function () {});
      delete this.controls[name];
      this.updateValueAndValidity();

      this._onCollectionChange();
    }
    /**
     * Replace an existing control.
     *
     * @param name The control name to replace in the collection
     * @param control Provides the control for the given name
     */

  }, {
    key: "setControl",
    value: function setControl(name, control) {
      if (this.controls[name]) this.controls[name]._registerOnCollectionChange(function () {});
      delete this.controls[name];
      if (control) this.registerControl(name, control);
      this.updateValueAndValidity();

      this._onCollectionChange();
    }
    /**
     * Check whether there is an enabled control with the given name in the group.
     *
     * Reports false for disabled controls. If you'd like to check for existence in the group
     * only, use {@link AbstractControl#get get} instead.
     *
     * @param controlName The control name to check for existence in the collection
     *
     * @returns false for disabled controls, true otherwise.
     */

  }, {
    key: "contains",
    value: function contains(controlName) {
      return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
    }
    /**
     * Sets the value of the `FormGroup`. It accepts an object that matches
     * the structure of the group, with control names as keys.
     *
     * @usageNotes
     * ### Set the complete value for the form group
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl(),
     *   last: new FormControl()
     * });
     *
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.setValue({first: 'Nancy', last: 'Drew'});
     * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     * ```
     *
     * @throws When strict checks fail, such as setting the value of a control
     * that doesn't exist or if you exclude a value of a control that does exist.
     *
     * @param value The new value for the control that matches the structure of the group.
     * @param options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     */

  }, {
    key: "setValue",
    value: function setValue(value) {
      var _this11 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._checkAllValuesPresent(value);

      Object.keys(value).forEach(function (name) {
        _this11._throwIfControlMissing(name);

        _this11.controls[name].setValue(value[name], {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      });
      this.updateValueAndValidity(options);
    }
    /**
     * Patches the value of the `FormGroup`. It accepts an object with control
     * names as keys, and does its best to match the values to the correct controls
     * in the group.
     *
     * It accepts both super-sets and sub-sets of the group without throwing an error.
     *
     * @usageNotes
     * ### Patch the value for a form group
     *
     * ```
     * const form = new FormGroup({
     *    first: new FormControl(),
     *    last: new FormControl()
     * });
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.patchValue({first: 'Nancy'});
     * console.log(form.value);   // {first: 'Nancy', last: null}
     * ```
     *
     * @param value The object that matches the structure of the group.
     * @param options Configuration options that determine how the control propagates changes and
     * emits events after the value is patched.
     * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
     * true.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */

  }, {
    key: "patchValue",
    value: function patchValue(value) {
      var _this12 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      Object.keys(value).forEach(function (name) {
        if (_this12.controls[name]) {
          _this12.controls[name].patchValue(value[name], {
            onlySelf: true,
            emitEvent: options.emitEvent
          });
        }
      });
      this.updateValueAndValidity(options);
    }
    /**
     * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
     * the value of all descendants to null.
     *
     * You reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * is a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * @param value Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options Configuration options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @usageNotes
     *
     * ### Reset the form group values
     *
     * ```ts
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * console.log(form.value);  // {first: 'first name', last: 'last name'}
     *
     * form.reset({ first: 'name', last: 'last name' });
     *
     * console.log(form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * ### Reset the form group values and disabled status
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     */

  }, {
    key: "reset",
    value: function reset() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._forEachChild(function (control, name) {
        control.reset(value[name], {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      });

      this._updatePristine(options);

      this._updateTouched(options);

      this.updateValueAndValidity(options);
    }
    /**
     * The aggregate value of the `FormGroup`, including any disabled controls.
     *
     * Retrieves all values regardless of disabled status.
     * The `value` property is the best way to get the value of the group, because
     * it excludes disabled controls in the `FormGroup`.
     */

  }, {
    key: "getRawValue",
    value: function getRawValue() {
      return this._reduceChildren({}, function (acc, control, name) {
        acc[name] = control instanceof FormControl ? control.value : control.getRawValue();
        return acc;
      });
    }
    /** @internal */

  }, {
    key: "_syncPendingControls",
    value: function _syncPendingControls() {
      var subtreeUpdated = this._reduceChildren(false, function (updated, child) {
        return child._syncPendingControls() ? true : updated;
      });

      if (subtreeUpdated) this.updateValueAndValidity({
        onlySelf: true
      });
      return subtreeUpdated;
    }
    /** @internal */

  }, {
    key: "_throwIfControlMissing",
    value: function _throwIfControlMissing(name) {
      if (!Object.keys(this.controls).length) {
        throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
      }

      if (!this.controls[name]) {
        throw new Error("Cannot find form control with name: ".concat(name, "."));
      }
    }
    /** @internal */

  }, {
    key: "_forEachChild",
    value: function _forEachChild(cb) {
      var _this13 = this;

      Object.keys(this.controls).forEach(function (k) {
        return cb(_this13.controls[k], k);
      });
    }
    /** @internal */

  }, {
    key: "_setUpControls",
    value: function _setUpControls() {
      var _this14 = this;

      this._forEachChild(function (control) {
        control.setParent(_this14);

        control._registerOnCollectionChange(_this14._onCollectionChange);
      });
    }
    /** @internal */

  }, {
    key: "_updateValue",
    value: function _updateValue() {
      this.value = this._reduceValue();
    }
    /** @internal */

  }, {
    key: "_anyControls",
    value: function _anyControls(condition) {
      for (var _i4 = 0, _Object$keys = Object.keys(this.controls); _i4 < _Object$keys.length; _i4++) {
        var controlName = _Object$keys[_i4];
        var control = this.controls[controlName];

        if (this.contains(controlName) && condition(control)) {
          return true;
        }
      }

      return false;
    }
    /** @internal */

  }, {
    key: "_reduceValue",
    value: function _reduceValue() {
      var _this15 = this;

      return this._reduceChildren({}, function (acc, control, name) {
        if (control.enabled || _this15.disabled) {
          acc[name] = control.value;
        }

        return acc;
      });
    }
    /** @internal */

  }, {
    key: "_reduceChildren",
    value: function _reduceChildren(initValue, fn) {
      var res = initValue;

      this._forEachChild(function (control, name) {
        res = fn(res, control, name);
      });

      return res;
    }
    /** @internal */

  }, {
    key: "_allControlsDisabled",
    value: function _allControlsDisabled() {
      for (var _i5 = 0, _Object$keys2 = Object.keys(this.controls); _i5 < _Object$keys2.length; _i5++) {
        var controlName = _Object$keys2[_i5];

        if (this.controls[controlName].enabled) {
          return false;
        }
      }

      return Object.keys(this.controls).length > 0 || this.disabled;
    }
    /** @internal */

  }, {
    key: "_checkAllValuesPresent",
    value: function _checkAllValuesPresent(value) {
      this._forEachChild(function (control, name) {
        if (value[name] === undefined) {
          throw new Error("Must supply a value for form control with name: '".concat(name, "'."));
        }
      });
    }
  }]);

  return FormGroup;
}(AbstractControl);
/**
 * Tracks the value and validity state of an array of `FormControl`,
 * `FormGroup` or `FormArray` instances.
 *
 * A `FormArray` aggregates the values of each child `FormControl` into an array.
 * It calculates its status by reducing the status values of its children. For example, if one of
 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
 *
 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormGroup`.
 *
 * @usageNotes
 *
 * ### Create an array of form controls
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy', Validators.minLength(2)),
 *   new FormControl('Drew'),
 * ]);
 *
 * console.log(arr.value);   // ['Nancy', 'Drew']
 * console.log(arr.status);  // 'VALID'
 * ```
 *
 * ### Create a form array with array-level validators
 *
 * You include array-level validators and async validators. These come in handy
 * when you want to perform validation that considers the value of more than one child
 * control.
 *
 * The two types of validators are passed in separately as the second and third arg
 * respectively, or together as part of an options object.
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy'),
 *   new FormControl('Drew')
 * ], {validators: myValidator, asyncValidators: myAsyncValidator});
 * ```
 *
 * ### Set the updateOn property for all controls in a form array
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * array level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const arr = new FormArray([
 *    new FormControl()
 * ], {updateOn: 'blur'});
 * ```
 *
 * ### Adding or removing controls from a form array
 *
 * To change the controls in the array, use the `push`, `insert`, `removeAt` or `clear` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that result in strange and unexpected behavior such
 * as broken change detection.
 *
 * @publicApi
 */


var FormArray = /*#__PURE__*/function (_AbstractControl3) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormArray, _AbstractControl3);

  var _super7 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FormArray);

  /**
   * Creates a new `FormArray` instance.
   *
   * @param controls An array of child controls. Each child control is given an index
   * where it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  function FormArray(controls, validatorOrOpts, asyncValidator) {
    var _this16;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormArray);

    _this16 = _super7.call(this, pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    _this16.controls = controls;

    _this16._initObservables();

    _this16._setUpdateStrategy(validatorOrOpts);

    _this16._setUpControls();

    _this16.updateValueAndValidity({
      onlySelf: true,
      emitEvent: false
    });

    return _this16;
  }
  /**
   * Get the `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to retrieve the control
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormArray, [{
    key: "at",
    value: function at(index) {
      return this.controls[index];
    }
    /**
     * Insert a new `AbstractControl` at the end of the array.
     *
     * @param control Form control to be inserted
     */

  }, {
    key: "push",
    value: function push(control) {
      this.controls.push(control);

      this._registerControl(control);

      this.updateValueAndValidity();

      this._onCollectionChange();
    }
    /**
     * Insert a new `AbstractControl` at the given `index` in the array.
     *
     * @param index Index in the array to insert the control
     * @param control Form control to be inserted
     */

  }, {
    key: "insert",
    value: function insert(index, control) {
      this.controls.splice(index, 0, control);

      this._registerControl(control);

      this.updateValueAndValidity();
    }
    /**
     * Remove the control at the given `index` in the array.
     *
     * @param index Index in the array to remove the control
     */

  }, {
    key: "removeAt",
    value: function removeAt(index) {
      if (this.controls[index]) this.controls[index]._registerOnCollectionChange(function () {});
      this.controls.splice(index, 1);
      this.updateValueAndValidity();
    }
    /**
     * Replace an existing control.
     *
     * @param index Index in the array to replace the control
     * @param control The `AbstractControl` control to replace the existing control
     */

  }, {
    key: "setControl",
    value: function setControl(index, control) {
      if (this.controls[index]) this.controls[index]._registerOnCollectionChange(function () {});
      this.controls.splice(index, 1);

      if (control) {
        this.controls.splice(index, 0, control);

        this._registerControl(control);
      }

      this.updateValueAndValidity();

      this._onCollectionChange();
    }
    /**
     * Length of the control array.
     */

  }, {
    key: "setValue",

    /**
     * Sets the value of the `FormArray`. It accepts an array that matches
     * the structure of the control.
     *
     * This method performs strict checks, and throws an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     * @usageNotes
     * ### Set the values for the controls in the form array
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl(),
     *   new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.setValue(['Nancy', 'Drew']);
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * ```
     *
     * @param value Array of values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */
    value: function setValue(value) {
      var _this17 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._checkAllValuesPresent(value);

      value.forEach(function (newValue, index) {
        _this17._throwIfControlMissing(index);

        _this17.at(index).setValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      });
      this.updateValueAndValidity(options);
    }
    /**
     * Patches the value of the `FormArray`. It accepts an array that matches the
     * structure of the control, and does its best to match the values to the correct
     * controls in the group.
     *
     * It accepts both super-sets and sub-sets of the array without throwing an error.
     *
     * @usageNotes
     * ### Patch the values for controls in a form array
     *
     * ```
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.patchValue(['Nancy']);
     * console.log(arr.value);   // ['Nancy', null]
     * ```
     *
     * @param value Array of latest values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */

  }, {
    key: "patchValue",
    value: function patchValue(value) {
      var _this18 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      value.forEach(function (newValue, index) {
        if (_this18.at(index)) {
          _this18.at(index).patchValue(newValue, {
            onlySelf: true,
            emitEvent: options.emitEvent
          });
        }
      });
      this.updateValueAndValidity(options);
    }
    /**
     * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
     * value of all descendants to null or null maps.
     *
     * You reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state is a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * @usageNotes
     * ### Reset the values in a form array
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * arr.reset(['name', 'last name']);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * ```
     *
     * ### Reset the values in a form array and the disabled status for the first control
     *
     * ```
     * this.arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * console.log(this.arr.get(0).status);  // 'DISABLED'
     * ```
     *
     * @param value Array of values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */

  }, {
    key: "reset",
    value: function reset() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._forEachChild(function (control, index) {
        control.reset(value[index], {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      });

      this._updatePristine(options);

      this._updateTouched(options);

      this.updateValueAndValidity(options);
    }
    /**
     * The aggregate value of the array, including any disabled controls.
     *
     * Reports all values regardless of disabled status.
     * For enabled controls only, the `value` property is the best way to get the value of the array.
     */

  }, {
    key: "getRawValue",
    value: function getRawValue() {
      return this.controls.map(function (control) {
        return control instanceof FormControl ? control.value : control.getRawValue();
      });
    }
    /**
     * Remove all controls in the `FormArray`.
     *
     * @usageNotes
     * ### Remove all elements from a FormArray
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * console.log(arr.length);  // 2
     *
     * arr.clear();
     * console.log(arr.length);  // 0
     * ```
     *
     * It's a simpler and more efficient alternative to removing all elements one by one:
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     *
     * while (arr.length) {
     *    arr.removeAt(0);
     * }
     * ```
     */

  }, {
    key: "clear",
    value: function clear() {
      if (this.controls.length < 1) return;

      this._forEachChild(function (control) {
        return control._registerOnCollectionChange(function () {});
      });

      this.controls.splice(0);
      this.updateValueAndValidity();
    }
    /** @internal */

  }, {
    key: "_syncPendingControls",
    value: function _syncPendingControls() {
      var subtreeUpdated = this.controls.reduce(function (updated, child) {
        return child._syncPendingControls() ? true : updated;
      }, false);
      if (subtreeUpdated) this.updateValueAndValidity({
        onlySelf: true
      });
      return subtreeUpdated;
    }
    /** @internal */

  }, {
    key: "_throwIfControlMissing",
    value: function _throwIfControlMissing(index) {
      if (!this.controls.length) {
        throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
      }

      if (!this.at(index)) {
        throw new Error("Cannot find form control at index ".concat(index));
      }
    }
    /** @internal */

  }, {
    key: "_forEachChild",
    value: function _forEachChild(cb) {
      this.controls.forEach(function (control, index) {
        cb(control, index);
      });
    }
    /** @internal */

  }, {
    key: "_updateValue",
    value: function _updateValue() {
      var _this19 = this;

      this.value = this.controls.filter(function (control) {
        return control.enabled || _this19.disabled;
      }).map(function (control) {
        return control.value;
      });
    }
    /** @internal */

  }, {
    key: "_anyControls",
    value: function _anyControls(condition) {
      return this.controls.some(function (control) {
        return control.enabled && condition(control);
      });
    }
    /** @internal */

  }, {
    key: "_setUpControls",
    value: function _setUpControls() {
      var _this20 = this;

      this._forEachChild(function (control) {
        return _this20._registerControl(control);
      });
    }
    /** @internal */

  }, {
    key: "_checkAllValuesPresent",
    value: function _checkAllValuesPresent(value) {
      this._forEachChild(function (control, i) {
        if (value[i] === undefined) {
          throw new Error("Must supply a value for form control at index: ".concat(i, "."));
        }
      });
    }
    /** @internal */

  }, {
    key: "_allControlsDisabled",
    value: function _allControlsDisabled() {
      var _iterator = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(this.controls),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var control = _step.value;
          if (control.enabled) return false;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return this.controls.length > 0 || this.disabled;
    }
  }, {
    key: "_registerControl",
    value: function _registerControl(control) {
      control.setParent(this);

      control._registerOnCollectionChange(this._onCollectionChange);
    }
  }, {
    key: "length",
    get: function get() {
      return this.controls.length;
    }
  }]);

  return FormArray;
}(AbstractControl);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return NgForm;
  })
};

var ɵ0 = function ɵ0() {
  return Promise.resolve(null);
};

var resolvedPromise = ɵ0();
/**
 * @description
 * Creates a top-level `FormGroup` instance and binds it to a form
 * to track aggregate form value and validation status.
 *
 * As soon as you import the `FormsModule`, this directive becomes active by default on
 * all `<form>` tags.  You don't need to add a special selector.
 *
 * You optionally export the directive into a local template variable using `ngForm` as the key
 * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
 * `FormGroup` instance are duplicated on the directive itself, so a reference to it
 * gives you access to the aggregate value and validity status of the form, as well as
 * user interaction properties like `dirty` and `touched`.
 *
 * To register child controls with the form, use `NgModel` with a `name`
 * attribute. You may use `NgModelGroup` to create sub-groups within the form.
 *
 * If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event emits the original form
 * submission event.
 *
 * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
 * To import the `FormsModule` but skip its usage in some forms,
 * for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
 * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
 * unnecessary because the `<form>` tags are inert. In that case, you would
 * refrain from using the `formGroup` directive.
 *
 * @usageNotes
 *
 * ### Listening for form submission
 *
 * The following example shows how to capture the form values from the "ngSubmit" event.
 *
 * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * ### Setting the update options
 *
 * The following example shows you how to change the "updateOn" option from its default using
 * ngFormOptions.
 *
 * ```html
 * <form [ngFormOptions]="{updateOn: 'blur'}">
 *    <input name="one" ngModel>  <!-- this ngModel will update on blur -->
 * </form>
 * ```
 *
 * ### Native DOM validation UI
 *
 * In order to prevent the native DOM form validation UI from interfering with Angular's form
 * validation, Angular automatically adds the `novalidate` attribute on any `<form>` whenever
 * `FormModule` or `ReactiveFormModule` are imported into the application.
 * If you want to explicitly enable native DOM validation UI with Angular forms, you can add the
 * `ngNativeValidate` attribute to the `<form>` element:
 *
 * ```html
 * <form ngNativeValidate>
 *   ...
 * </form>
 * ```
 *
 * @ngModule FormsModule
 * @publicApi
 */

var NgForm = /*#__PURE__*/function (_ControlContainer) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NgForm, _ControlContainer);

  var _super8 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(NgForm);

  function NgForm(validators, asyncValidators) {
    var _this21;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NgForm);

    _this21 = _super8.call(this);
    /**
     * @description
     * Returns whether the form submission has been triggered.
     */

    _this21.submitted = false;
    _this21._directives = [];
    /**
     * @description
     * Event emitter for the "ngSubmit" event
     */

    _this21.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    _this21.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
    return _this21;
  }
  /** @nodoc */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NgForm, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      this._setUpdateStrategy();
    }
    /**
     * @description
     * The directive instance.
     */

  }, {
    key: "addControl",

    /**
     * @description
     * Method that sets up the control directive in this group, re-calculates its value
     * and validity, and adds the instance to the internal list of directives.
     *
     * @param dir The `NgModel` directive instance.
     */
    value: function addControl(dir) {
      var _this22 = this;

      resolvedPromise.then(function () {
        var container = _this22._findContainer(dir.path);

        dir.control = container.registerControl(dir.name, dir.control);
        setUpControl(dir.control, dir);
        dir.control.updateValueAndValidity({
          emitEvent: false
        });

        _this22._directives.push(dir);
      });
    }
    /**
     * @description
     * Retrieves the `FormControl` instance from the provided `NgModel` directive.
     *
     * @param dir The `NgModel` directive instance.
     */

  }, {
    key: "getControl",
    value: function getControl(dir) {
      return this.form.get(dir.path);
    }
    /**
     * @description
     * Removes the `NgModel` instance from the internal list of directives
     *
     * @param dir The `NgModel` directive instance.
     */

  }, {
    key: "removeControl",
    value: function removeControl(dir) {
      var _this23 = this;

      resolvedPromise.then(function () {
        var container = _this23._findContainer(dir.path);

        if (container) {
          container.removeControl(dir.name);
        }

        removeDir(_this23._directives, dir);
      });
    }
    /**
     * @description
     * Adds a new `NgModelGroup` directive instance to the form.
     *
     * @param dir The `NgModelGroup` directive instance.
     */

  }, {
    key: "addFormGroup",
    value: function addFormGroup(dir) {
      var _this24 = this;

      resolvedPromise.then(function () {
        var container = _this24._findContainer(dir.path);

        var group = new FormGroup({});
        setUpFormContainer(group, dir);
        container.registerControl(dir.name, group);
        group.updateValueAndValidity({
          emitEvent: false
        });
      });
    }
    /**
     * @description
     * Removes the `NgModelGroup` directive instance from the form.
     *
     * @param dir The `NgModelGroup` directive instance.
     */

  }, {
    key: "removeFormGroup",
    value: function removeFormGroup(dir) {
      var _this25 = this;

      resolvedPromise.then(function () {
        var container = _this25._findContainer(dir.path);

        if (container) {
          container.removeControl(dir.name);
        }
      });
    }
    /**
     * @description
     * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
     *
     * @param dir The `NgModelGroup` directive instance.
     */

  }, {
    key: "getFormGroup",
    value: function getFormGroup(dir) {
      return this.form.get(dir.path);
    }
    /**
     * Sets the new value for the provided `NgControl` directive.
     *
     * @param dir The `NgControl` directive instance.
     * @param value The new value for the directive's control.
     */

  }, {
    key: "updateModel",
    value: function updateModel(dir, value) {
      var _this26 = this;

      resolvedPromise.then(function () {
        var ctrl = _this26.form.get(dir.path);

        ctrl.setValue(value);
      });
    }
    /**
     * @description
     * Sets the value for this `FormGroup`.
     *
     * @param value The new value
     */

  }, {
    key: "setValue",
    value: function setValue(value) {
      this.control.setValue(value);
    }
    /**
     * @description
     * Method called when the "submit" event is triggered on the form.
     * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
     *
     * @param $event The "submit" event object
     */

  }, {
    key: "onSubmit",
    value: function onSubmit($event) {
      this.submitted = true;
      syncPendingControls(this.form, this._directives);
      this.ngSubmit.emit($event);
      return false;
    }
    /**
     * @description
     * Method called when the "reset" event is triggered on the form.
     */

  }, {
    key: "onReset",
    value: function onReset() {
      this.resetForm();
    }
    /**
     * @description
     * Resets the form to an initial value and resets its submitted status.
     *
     * @param value The new value for the form.
     */

  }, {
    key: "resetForm",
    value: function resetForm() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      this.form.reset(value);
      this.submitted = false;
    }
  }, {
    key: "_setUpdateStrategy",
    value: function _setUpdateStrategy() {
      if (this.options && this.options.updateOn != null) {
        this.form._updateOn = this.options.updateOn;
      }
    }
    /** @internal */

  }, {
    key: "_findContainer",
    value: function _findContainer(path) {
      path.pop();
      return path.length ? this.form.get(path) : this.form;
    }
  }, {
    key: "formDirective",
    get: function get() {
      return this;
    }
    /**
     * @description
     * The internal `FormGroup` instance.
     */

  }, {
    key: "control",
    get: function get() {
      return this.form;
    }
    /**
     * @description
     * Returns an array representing the path to this group. Because this directive
     * always lives at the top level of a form, it is always an empty array.
     */

  }, {
    key: "path",
    get: function get() {
      return [];
    }
    /**
     * @description
     * Returns a map of the controls in this group.
     */

  }, {
    key: "controls",
    get: function get() {
      return this.form.controls;
    }
  }]);

  return NgForm;
}(ControlContainer);

NgForm.ɵfac = function NgForm_Factory(t) {
  return new (t || NgForm)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
};

NgForm.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: NgForm,
  selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
  hostBindings: function NgForm_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function NgForm_submit_HostBindingHandler($event) {
        return ctx.onSubmit($event);
      })("reset", function NgForm_reset_HostBindingHandler() {
        return ctx.onReset();
      });
    }
  },
  inputs: {
    options: ["ngFormOptions", "options"]
  },
  outputs: {
    ngSubmit: "ngSubmit"
  },
  exportAs: ["ngForm"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([formDirectiveProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});

NgForm.ctorParameters = function () {
  return [{
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_ASYNC_VALIDATORS]
    }]
  }];
};

NgForm.propDecorators = {
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['ngFormOptions']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](NgForm, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]',
      providers: [formDirectiveProvider],
      host: {
        '(submit)': 'onSubmit($event)',
        '(reset)': 'onReset()'
      },
      outputs: ['ngSubmit'],
      exportAs: 'ngForm'
    }]
  }], function () {
    return [{
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_ASYNC_VALIDATORS]
      }]
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['ngFormOptions']
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

/**
 * @description
 * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
 *
 * @publicApi
 */


var AbstractFormGroupDirective = /*#__PURE__*/function (_ControlContainer2) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(AbstractFormGroupDirective, _ControlContainer2);

  var _super9 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(AbstractFormGroupDirective);

  function AbstractFormGroupDirective() {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, AbstractFormGroupDirective);

    return _super9.apply(this, arguments);
  }

  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(AbstractFormGroupDirective, [{
    key: "ngOnInit",

    /** @nodoc */
    value: function ngOnInit() {
      this._checkParentType(); // Register the group with its parent group.


      this.formDirective.addFormGroup(this);
    }
    /** @nodoc */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.formDirective) {
        // Remove the group from its parent group.
        this.formDirective.removeFormGroup(this);
      }
    }
    /**
     * @description
     * The `FormGroup` bound to this directive.
     */

  }, {
    key: "_checkParentType",

    /** @internal */
    value: function _checkParentType() {}
  }, {
    key: "control",
    get: function get() {
      return this.formDirective.getFormGroup(this);
    }
    /**
     * @description
     * The path to this group from the top-level directive.
     */

  }, {
    key: "path",
    get: function get() {
      return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
    }
    /**
     * @description
     * The top-level directive for this group if present, otherwise null.
     */

  }, {
    key: "formDirective",
    get: function get() {
      return this._parent ? this._parent.formDirective : null;
    }
    /**
     * @description
     * The synchronous validators registered with this group.
     */

  }, {
    key: "validator",
    get: function get() {
      return composeValidators(this._validators);
    }
    /**
     * @description
     * The async validators registered with this group.
     */

  }, {
    key: "asyncValidator",
    get: function get() {
      return composeAsyncValidators(this._asyncValidators);
    }
  }]);

  return AbstractFormGroupDirective;
}(ControlContainer);

AbstractFormGroupDirective.ɵfac = function AbstractFormGroupDirective_Factory(t) {
  return ɵAbstractFormGroupDirective_BaseFactory(t || AbstractFormGroupDirective);
};

AbstractFormGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: AbstractFormGroupDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});
var ɵAbstractFormGroupDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](AbstractFormGroupDirective);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AbstractFormGroupDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var TemplateDrivenErrors = /*#__PURE__*/function () {
  function TemplateDrivenErrors() {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, TemplateDrivenErrors);
  }

  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(TemplateDrivenErrors, null, [{
    key: "modelParentException",
    value: function modelParentException() {
      throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      ".concat(FormErrorExamples.formControlName, "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      ").concat(FormErrorExamples.ngModelWithFormGroup));
    }
  }, {
    key: "formGroupNameException",
    value: function formGroupNameException() {
      throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ".concat(FormErrorExamples.formGroupName, "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      ").concat(FormErrorExamples.ngModelGroup));
    }
  }, {
    key: "missingNameException",
    value: function missingNameException() {
      throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
    }
  }, {
    key: "modelGroupParentException",
    value: function modelGroupParentException() {
      throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ".concat(FormErrorExamples.formGroupName, "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ").concat(FormErrorExamples.ngModelGroup));
    }
  }]);

  return TemplateDrivenErrors;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return NgModelGroup;
  })
};
/**
 * @description
 * Creates and binds a `FormGroup` instance to a DOM element.
 *
 * This directive can only be used as a child of `NgForm` (within `<form>` tags).
 *
 * Use this directive to validate a sub-group of your form separately from the
 * rest of your form, or if some values in your domain model make more sense
 * to consume together in a nested object.
 *
 * Provide a name for the sub-group and it will become the key
 * for the sub-group in the form's full value. If you need direct access, export the directive into
 * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
 *
 * @usageNotes
 *
 * ### Consuming controls in a grouping
 *
 * The following example shows you how to combine controls together in a sub-group
 * of the form.
 *
 * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
 *
 * @ngModule FormsModule
 * @publicApi
 */

var NgModelGroup = /*#__PURE__*/function (_AbstractFormGroupDir) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NgModelGroup, _AbstractFormGroupDir);

  var _super10 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(NgModelGroup);

  function NgModelGroup(parent, validators, asyncValidators) {
    var _this27;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NgModelGroup);

    _this27 = _super10.call(this);
    _this27._parent = parent;
    _this27._validators = validators;
    _this27._asyncValidators = asyncValidators;
    return _this27;
  }
  /** @internal */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NgModelGroup, [{
    key: "_checkParentType",
    value: function _checkParentType() {
      if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        TemplateDrivenErrors.modelGroupParentException();
      }
    }
  }]);

  return NgModelGroup;
}(AbstractFormGroupDirective);

NgModelGroup.ɵfac = function NgModelGroup_Factory(t) {
  return new (t || NgModelGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ControlContainer, 5), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
};

NgModelGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: NgModelGroup,
  selectors: [["", "ngModelGroup", ""]],
  inputs: {
    name: ["ngModelGroup", "name"]
  },
  exportAs: ["ngModelGroup"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([modelGroupProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});

NgModelGroup.ctorParameters = function () {
  return [{
    type: ControlContainer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_ASYNC_VALIDATORS]
    }]
  }];
};

NgModelGroup.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['ngModelGroup']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](NgModelGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[ngModelGroup]',
      providers: [modelGroupProvider],
      exportAs: 'ngModelGroup'
    }]
  }], function () {
    return [{
      type: ControlContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_ASYNC_VALIDATORS]
      }]
    }];
  }, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['ngModelGroup']
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


var formControlBinding = {
  provide: NgControl,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return NgModel;
  })
};

var ɵ0$1 = function ɵ0$1() {
  return Promise.resolve(null);
};
/**
 * `ngModel` forces an additional change detection run when its inputs change:
 * E.g.:
 * ```
 * <div>{{myModel.valid}}</div>
 * <input [(ngModel)]="myValue" #myModel="ngModel">
 * ```
 * I.e. `ngModel` can export itself on the element and then be used in the template.
 * Normally, this would result in expressions before the `input` that use the exported directive
 * to have and old value as they have been
 * dirty checked before. As this is a very common case for `ngModel`, we added this second change
 * detection run.
 *
 * Notes:
 * - this is just one extra run no matter how many `ngModel` have been changed.
 * - this is a general problem when using `exportAs` for directives!
 */


var resolvedPromise$1 = ɵ0$1();
/**
 * @description
 * Creates a `FormControl` instance from a domain model and binds it
 * to a form control element.
 *
 * The `FormControl` instance tracks the value, user interaction, and
 * validation status of the control and keeps the view synced with the model. If used
 * within a parent form, the directive also registers itself with the form as a child
 * control.
 *
 * This directive is used by itself or as part of a larger form. Use the
 * `ngModel` selector to activate it.
 *
 * It accepts a domain model as an optional `Input`. If you have a one-way binding
 * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
 * class sets the value in the view. If you have a two-way binding with `[()]` syntax
 * (also known as 'banana-box syntax'), the value in the UI always syncs back to
 * the domain model in your class.
 *
 * To inspect the properties of the associated `FormControl` (like validity state),
 * export the directive into a local template variable using `ngModel` as the key (ex:
 * `#myVar="ngModel"`). You then access the control using the directive's `control` property, but
 * most properties used (like `valid` and `dirty`) fall through to the control anyway for direct
 * access. See a full list of properties directly available in `AbstractControlDirective`.
 *
 * @see `RadioControlValueAccessor`
 * @see `SelectControlValueAccessor`
 *
 * @usageNotes
 *
 * ### Using ngModel on a standalone control
 *
 * The following examples show a simple standalone control using `ngModel`:
 *
 * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
 *
 * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
 * so that the control can be registered with the parent form under that name.
 *
 * In the context of a parent form, it's often unnecessary to include one-way or two-way binding,
 * as the parent form syncs the value for you. You access its properties by exporting it into a
 * local template variable using `ngForm` such as (`#f="ngForm"`). Use the variable where
 * needed on form submission.
 *
 * If you do need to populate initial values into your form, using a one-way binding for
 * `ngModel` tends to be sufficient as long as you use the exported form's value rather
 * than the domain model's value on submit.
 *
 * ### Using ngModel within a form
 *
 * The following example shows controls using `ngModel` within a form:
 *
 * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * ### Using a standalone ngModel within a group
 *
 * The following example shows you how to use a standalone ngModel control
 * within a form. This controls the display of the form, but doesn't contain form data.
 *
 * ```html
 * <form>
 *   <input name="login" ngModel placeholder="Login">
 *   <input type="checkbox" ngModel [ngModelOptions]="{standalone: true}"> Show more options?
 * </form>
 * <!-- form value: {login: ''} -->
 * ```
 *
 * ### Setting the ngModel name attribute through options
 *
 * The following example shows you an alternate way to set the name attribute. The name attribute is
 * used within a custom form component, and the name `@Input` property serves a different purpose.
 *
 * ```html
 * <form>
 *   <my-person-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
 *   </my-person-control>
 * </form>
 * <!-- form value: {user: ''} -->
 * ```
 *
 * @ngModule FormsModule
 * @publicApi
 */

var NgModel = /*#__PURE__*/function (_NgControl) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NgModel, _NgControl);

  var _super11 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(NgModel);

  function NgModel(parent, validators, asyncValidators, valueAccessors) {
    var _this28;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NgModel);

    _this28 = _super11.call(this);
    _this28.control = new FormControl();
    /** @internal */

    _this28._registered = false;
    /**
     * @description
     * Event emitter for producing the `ngModelChange` event after
     * the view model updates.
     */

    _this28.update = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    _this28._parent = parent;
    _this28._rawValidators = validators || [];
    _this28._rawAsyncValidators = asyncValidators || [];
    _this28.valueAccessor = selectValueAccessor(Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this28), valueAccessors);
    return _this28;
  }
  /** @nodoc */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NgModel, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this._checkForErrors();

      if (!this._registered) this._setUpControl();

      if ('isDisabled' in changes) {
        this._updateDisabled(changes);
      }

      if (isPropertyUpdated(changes, this.viewModel)) {
        this._updateValue(this.model);

        this.viewModel = this.model;
      }
    }
    /** @nodoc */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.formDirective && this.formDirective.removeControl(this);
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */

  }, {
    key: "viewToModelUpdate",

    /**
     * @description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param newValue The new value emitted by `ngModelChange`.
     */
    value: function viewToModelUpdate(newValue) {
      this.viewModel = newValue;
      this.update.emit(newValue);
    }
  }, {
    key: "_setUpControl",
    value: function _setUpControl() {
      this._setUpdateStrategy();

      this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
      this._registered = true;
    }
  }, {
    key: "_setUpdateStrategy",
    value: function _setUpdateStrategy() {
      if (this.options && this.options.updateOn != null) {
        this.control._updateOn = this.options.updateOn;
      }
    }
  }, {
    key: "_isStandalone",
    value: function _isStandalone() {
      return !this._parent || !!(this.options && this.options.standalone);
    }
  }, {
    key: "_setUpStandalone",
    value: function _setUpStandalone() {
      setUpControl(this.control, this);
      this.control.updateValueAndValidity({
        emitEvent: false
      });
    }
  }, {
    key: "_checkForErrors",
    value: function _checkForErrors() {
      if (!this._isStandalone()) {
        this._checkParentType();
      }

      this._checkName();
    }
  }, {
    key: "_checkParentType",
    value: function _checkParentType() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
          TemplateDrivenErrors.formGroupNameException();
        } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
          TemplateDrivenErrors.modelParentException();
        }
      }
    }
  }, {
    key: "_checkName",
    value: function _checkName() {
      if (this.options && this.options.name) this.name = this.options.name;

      if (!this._isStandalone() && !this.name && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        TemplateDrivenErrors.missingNameException();
      }
    }
  }, {
    key: "_updateValue",
    value: function _updateValue(value) {
      var _this29 = this;

      resolvedPromise$1.then(function () {
        _this29.control.setValue(value, {
          emitViewToModelChange: false
        });
      });
    }
  }, {
    key: "_updateDisabled",
    value: function _updateDisabled(changes) {
      var _this30 = this;

      var disabledValue = changes['isDisabled'].currentValue;
      var isDisabled = disabledValue === '' || disabledValue && disabledValue !== 'false';
      resolvedPromise$1.then(function () {
        if (isDisabled && !_this30.control.disabled) {
          _this30.control.disable();
        } else if (!isDisabled && _this30.control.disabled) {
          _this30.control.enable();
        }
      });
    }
  }, {
    key: "path",
    get: function get() {
      return this._parent ? controlPath(this.name, this._parent) : [this.name];
    }
    /**
     * @description
     * The top-level directive for this control if present, otherwise null.
     */

  }, {
    key: "formDirective",
    get: function get() {
      return this._parent ? this._parent.formDirective : null;
    }
    /**
     * @description
     * Synchronous validator function composed of all the synchronous validators
     * registered with this directive.
     */

  }, {
    key: "validator",
    get: function get() {
      return composeValidators(this._rawValidators);
    }
    /**
     * @description
     * Async validator function composed of all the async validators registered with this
     * directive.
     */

  }, {
    key: "asyncValidator",
    get: function get() {
      return composeAsyncValidators(this._rawAsyncValidators);
    }
  }]);

  return NgModel;
}(NgControl);

NgModel.ɵfac = function NgModel_Factory(t) {
  return new (t || NgModel)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ControlContainer, 9), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALUE_ACCESSOR, 10));
};

NgModel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: NgModel,
  selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
  inputs: {
    name: "name",
    isDisabled: ["disabled", "isDisabled"],
    model: ["ngModel", "model"],
    options: ["ngModelOptions", "options"]
  },
  outputs: {
    update: "ngModelChange"
  },
  exportAs: ["ngModel"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([formControlBinding]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});

NgModel.ctorParameters = function () {
  return [{
    type: ControlContainer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALUE_ACCESSOR]
    }]
  }];
};

NgModel.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  isDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['disabled']
  }],
  model: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['ngModel']
  }],
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['ngModelOptions']
  }],
  update: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
    args: ['ngModelChange']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](NgModel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[ngModel]:not([formControlName]):not([formControl])',
      providers: [formControlBinding],
      exportAs: 'ngModel'
    }]
  }], function () {
    return [{
      type: ControlContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_ASYNC_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALUE_ACCESSOR]
      }]
    }];
  }, {
    update: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
      args: ['ngModelChange']
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    isDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['disabled']
    }],
    model: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['ngModel']
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['ngModelOptions']
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

/**
 * @description
 *
 * Adds `novalidate` attribute to all forms by default.
 *
 * `novalidate` is used to disable browser's native form validation.
 *
 * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
 *
 * ```
 * <form ngNativeValidate></form>
 * ```
 *
 * @publicApi
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 */


var ɵNgNoValidate = function ɵNgNoValidate() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ɵNgNoValidate);
};

ɵNgNoValidate.ɵfac = function ɵNgNoValidate_Factory(t) {
  return new (t || ɵNgNoValidate)();
};

ɵNgNoValidate.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: ɵNgNoValidate,
  selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
  hostAttrs: ["novalidate", ""]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](ɵNgNoValidate, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
      host: {
        'novalidate': ''
      }
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
 * Token to provide to turn off the ngModel warning on formControl and formControlName.
 */


var NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('NgModelWithFormControlWarning');
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return FormControlDirective;
  })
};
/**
 * @description
 * Synchronizes a standalone `FormControl` instance to a form control element.
 *
 * Note that support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives was deprecated in Angular v6 and is scheduled for removal in
 * a future version of Angular.
 * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `FormControl`
 * @see `AbstractControl`
 *
 * @usageNotes
 *
 * The following example shows how to register a standalone control and set its value.
 *
 * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */

var FormControlDirective = /*#__PURE__*/function (_NgControl2) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormControlDirective, _NgControl2);

  var _super12 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FormControlDirective);

  function FormControlDirective(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    var _this31;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormControlDirective);

    _this31 = _super12.call(this);
    _this31._ngModelWarningConfig = _ngModelWarningConfig;
    /** @deprecated as of v6 */

    _this31.update = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    /**
     * @description
     * Instance property used to track whether an ngModel warning has been sent out for this
     * particular `FormControlDirective` instance. Used to support warning config of "always".
     *
     * @internal
     */

    _this31._ngModelWarningSent = false;
    _this31._rawValidators = validators || [];
    _this31._rawAsyncValidators = asyncValidators || [];
    _this31.valueAccessor = selectValueAccessor(Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this31), valueAccessors);
    return _this31;
  }
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormControlDirective, [{
    key: "ngOnChanges",

    /** @nodoc */
    value: function ngOnChanges(changes) {
      if (this._isControlChanged(changes)) {
        setUpControl(this.form, this);

        if (this.control.disabled && this.valueAccessor.setDisabledState) {
          this.valueAccessor.setDisabledState(true);
        }

        this.form.updateValueAndValidity({
          emitEvent: false
        });
      }

      if (isPropertyUpdated(changes, this.viewModel)) {
        _ngModelWarning('formControl', FormControlDirective, this, this._ngModelWarningConfig);

        this.form.setValue(this.model);
        this.viewModel = this.model;
      }
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */

  }, {
    key: "viewToModelUpdate",

    /**
     * @description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param newValue The new value for the view model.
     */
    value: function viewToModelUpdate(newValue) {
      this.viewModel = newValue;
      this.update.emit(newValue);
    }
  }, {
    key: "_isControlChanged",
    value: function _isControlChanged(changes) {
      return changes.hasOwnProperty('form');
    }
  }, {
    key: "isDisabled",
    set: function set(isDisabled) {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        ReactiveErrors.disabledAttrWarning();
      }
    }
  }, {
    key: "path",
    get: function get() {
      return [];
    }
    /**
     * @description
     * Synchronous validator function composed of all the synchronous validators
     * registered with this directive.
     */

  }, {
    key: "validator",
    get: function get() {
      return composeValidators(this._rawValidators);
    }
    /**
     * @description
     * Async validator function composed of all the async validators registered with this
     * directive.
     */

  }, {
    key: "asyncValidator",
    get: function get() {
      return composeAsyncValidators(this._rawAsyncValidators);
    }
    /**
     * @description
     * The `FormControl` bound to this directive.
     */

  }, {
    key: "control",
    get: function get() {
      return this.form;
    }
  }]);

  return FormControlDirective;
}(NgControl);

FormControlDirective.ɵfac = function FormControlDirective_Factory(t) {
  return new (t || FormControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
};

FormControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: FormControlDirective,
  selectors: [["", "formControl", ""]],
  inputs: {
    isDisabled: ["disabled", "isDisabled"],
    form: ["formControl", "form"],
    model: ["ngModel", "model"]
  },
  outputs: {
    update: "ngModelChange"
  },
  exportAs: ["ngForm"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([formControlBinding$1]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});
/**
 * @description
 * Static property used to track whether any ngModel warnings have been sent across
 * all instances of FormControlDirective. Used to support warning config of "once".
 *
 * @internal
 */

FormControlDirective._ngModelWarningSentOnce = false;

FormControlDirective.ctorParameters = function () {
  return [{
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }];
};

FormControlDirective.propDecorators = {
  form: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['formControl']
  }],
  isDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['disabled']
  }],
  model: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['ngModel']
  }],
  update: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
    args: ['ngModelChange']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormControlDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[formControl]',
      providers: [formControlBinding$1],
      exportAs: 'ngForm'
    }]
  }], function () {
    return [{
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_ASYNC_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALUE_ACCESSOR]
      }]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
      }]
    }];
  }, {
    update: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
      args: ['ngModelChange']
    }],
    isDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['disabled']
    }],
    form: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['formControl']
    }],
    model: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['ngModel']
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


var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return FormGroupDirective;
  })
};
/**
 * @description
 *
 * Binds an existing `FormGroup` to a DOM element.
 *
 * This directive accepts an existing `FormGroup` instance. It will then use this
 * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
 * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
 * and `FormArrayName` directives.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `AbstractControl`
 *
 * ### Register Form Group
 *
 * The following example registers a `FormGroup` with first name and last name controls,
 * and listens for the *ngSubmit* event when the button is clicked.
 *
 * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */

var FormGroupDirective = /*#__PURE__*/function (_ControlContainer3) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormGroupDirective, _ControlContainer3);

  var _super13 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FormGroupDirective);

  function FormGroupDirective(_validators, _asyncValidators) {
    var _this32;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormGroupDirective);

    _this32 = _super13.call(this);
    _this32._validators = _validators;
    _this32._asyncValidators = _asyncValidators;
    /**
     * @description
     * Reports whether the form submission has been triggered.
     */

    _this32.submitted = false;
    /**
     * @description
     * Tracks the list of added `FormControlName` instances
     */

    _this32.directives = [];
    /**
     * @description
     * Tracks the `FormGroup` bound to this directive.
     */

    _this32.form = null;
    /**
     * @description
     * Emits an event when the form submission has been triggered.
     */

    _this32.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    return _this32;
  }
  /** @nodoc */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormGroupDirective, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this._checkFormPresent();

      if (changes.hasOwnProperty('form')) {
        this._updateValidators();

        this._updateDomValue();

        this._updateRegistrations();
      }
    }
    /**
     * @description
     * Returns this directive's instance.
     */

  }, {
    key: "addControl",

    /**
     * @description
     * Method that sets up the control directive in this group, re-calculates its value
     * and validity, and adds the instance to the internal list of directives.
     *
     * @param dir The `FormControlName` directive instance.
     */
    value: function addControl(dir) {
      var ctrl = this.form.get(dir.path);
      setUpControl(ctrl, dir);
      ctrl.updateValueAndValidity({
        emitEvent: false
      });
      this.directives.push(dir);
      return ctrl;
    }
    /**
     * @description
     * Retrieves the `FormControl` instance from the provided `FormControlName` directive
     *
     * @param dir The `FormControlName` directive instance.
     */

  }, {
    key: "getControl",
    value: function getControl(dir) {
      return this.form.get(dir.path);
    }
    /**
     * @description
     * Removes the `FormControlName` instance from the internal list of directives
     *
     * @param dir The `FormControlName` directive instance.
     */

  }, {
    key: "removeControl",
    value: function removeControl(dir) {
      removeDir(this.directives, dir);
    }
    /**
     * Adds a new `FormGroupName` directive instance to the form.
     *
     * @param dir The `FormGroupName` directive instance.
     */

  }, {
    key: "addFormGroup",
    value: function addFormGroup(dir) {
      var ctrl = this.form.get(dir.path);
      setUpFormContainer(ctrl, dir);
      ctrl.updateValueAndValidity({
        emitEvent: false
      });
    }
    /**
     * No-op method to remove the form group.
     *
     * @param dir The `FormGroupName` directive instance.
     */

  }, {
    key: "removeFormGroup",
    value: function removeFormGroup(dir) {}
    /**
     * @description
     * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
     *
     * @param dir The `FormGroupName` directive instance.
     */

  }, {
    key: "getFormGroup",
    value: function getFormGroup(dir) {
      return this.form.get(dir.path);
    }
    /**
     * Adds a new `FormArrayName` directive instance to the form.
     *
     * @param dir The `FormArrayName` directive instance.
     */

  }, {
    key: "addFormArray",
    value: function addFormArray(dir) {
      var ctrl = this.form.get(dir.path);
      setUpFormContainer(ctrl, dir);
      ctrl.updateValueAndValidity({
        emitEvent: false
      });
    }
    /**
     * No-op method to remove the form array.
     *
     * @param dir The `FormArrayName` directive instance.
     */

  }, {
    key: "removeFormArray",
    value: function removeFormArray(dir) {}
    /**
     * @description
     * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
     *
     * @param dir The `FormArrayName` directive instance.
     */

  }, {
    key: "getFormArray",
    value: function getFormArray(dir) {
      return this.form.get(dir.path);
    }
    /**
     * Sets the new value for the provided `FormControlName` directive.
     *
     * @param dir The `FormControlName` directive instance.
     * @param value The new value for the directive's control.
     */

  }, {
    key: "updateModel",
    value: function updateModel(dir, value) {
      var ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    }
    /**
     * @description
     * Method called with the "submit" event is triggered on the form.
     * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
     *
     * @param $event The "submit" event object
     */

  }, {
    key: "onSubmit",
    value: function onSubmit($event) {
      this.submitted = true;
      syncPendingControls(this.form, this.directives);
      this.ngSubmit.emit($event);
      return false;
    }
    /**
     * @description
     * Method called when the "reset" event is triggered on the form.
     */

  }, {
    key: "onReset",
    value: function onReset() {
      this.resetForm();
    }
    /**
     * @description
     * Resets the form to an initial value and resets its submitted status.
     *
     * @param value The new value for the form.
     */

  }, {
    key: "resetForm",
    value: function resetForm() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      this.form.reset(value);
      this.submitted = false;
    }
    /** @internal */

  }, {
    key: "_updateDomValue",
    value: function _updateDomValue() {
      var _this33 = this;

      this.directives.forEach(function (dir) {
        var newCtrl = _this33.form.get(dir.path);

        if (dir.control !== newCtrl) {
          cleanUpControl(dir.control, dir);
          if (newCtrl) setUpControl(newCtrl, dir);
          dir.control = newCtrl;
        }
      });

      this.form._updateTreeValidity({
        emitEvent: false
      });
    }
  }, {
    key: "_updateRegistrations",
    value: function _updateRegistrations() {
      var _this34 = this;

      this.form._registerOnCollectionChange(function () {
        return _this34._updateDomValue();
      });

      if (this._oldForm) this._oldForm._registerOnCollectionChange(function () {});
      this._oldForm = this.form;
    }
  }, {
    key: "_updateValidators",
    value: function _updateValidators() {
      var sync = composeValidators(this._validators);
      this.form.validator = Validators.compose([this.form.validator, sync]);
      var async = composeAsyncValidators(this._asyncValidators);
      this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
    }
  }, {
    key: "_checkFormPresent",
    value: function _checkFormPresent() {
      if (!this.form && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        ReactiveErrors.missingFormException();
      }
    }
  }, {
    key: "formDirective",
    get: function get() {
      return this;
    }
    /**
     * @description
     * Returns the `FormGroup` bound to this directive.
     */

  }, {
    key: "control",
    get: function get() {
      return this.form;
    }
    /**
     * @description
     * Returns an array representing the path to this group. Because this directive
     * always lives at the top level of a form, it always an empty array.
     */

  }, {
    key: "path",
    get: function get() {
      return [];
    }
  }]);

  return FormGroupDirective;
}(ControlContainer);

FormGroupDirective.ɵfac = function FormGroupDirective_Factory(t) {
  return new (t || FormGroupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
};

FormGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: FormGroupDirective,
  selectors: [["", "formGroup", ""]],
  hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
        return ctx.onSubmit($event);
      })("reset", function FormGroupDirective_reset_HostBindingHandler() {
        return ctx.onReset();
      });
    }
  },
  inputs: {
    form: ["formGroup", "form"]
  },
  outputs: {
    ngSubmit: "ngSubmit"
  },
  exportAs: ["ngForm"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([formDirectiveProvider$1]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});

FormGroupDirective.ctorParameters = function () {
  return [{
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_ASYNC_VALIDATORS]
    }]
  }];
};

FormGroupDirective.propDecorators = {
  form: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['formGroup']
  }],
  ngSubmit: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormGroupDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[formGroup]',
      providers: [formDirectiveProvider$1],
      host: {
        '(submit)': 'onSubmit($event)',
        '(reset)': 'onReset()'
      },
      exportAs: 'ngForm'
    }]
  }], function () {
    return [{
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_ASYNC_VALIDATORS]
      }]
    }];
  }, {
    form: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['formGroup']
    }],
    ngSubmit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
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


var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return FormGroupName;
  })
};
/**
 * @description
 *
 * Syncs a nested `FormGroup` to a DOM element.
 *
 * This directive can only be used with a parent `FormGroupDirective`.
 *
 * It accepts the string name of the nested `FormGroup` to link, and
 * looks for a `FormGroup` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * Use nested form groups to validate a sub-group of a
 * form separately from the rest or to group the values of certain
 * controls into their own nested object.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 *
 * @usageNotes
 *
 * ### Access the group by name
 *
 * The following example uses the {@link AbstractControl#get get} method to access the
 * associated `FormGroup`
 *
 * ```ts
 *   this.form.get('name');
 * ```
 *
 * ### Access individual controls in the group
 *
 * The following example uses the {@link AbstractControl#get get} method to access
 * individual controls within the group using dot syntax.
 *
 * ```ts
 *   this.form.get('name.first');
 * ```
 *
 * ### Register a nested `FormGroup`.
 *
 * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
 * and provides methods to retrieve the nested `FormGroup` and individual controls.
 *
 * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */

var FormGroupName = /*#__PURE__*/function (_AbstractFormGroupDir2) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormGroupName, _AbstractFormGroupDir2);

  var _super14 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FormGroupName);

  function FormGroupName(parent, validators, asyncValidators) {
    var _this35;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormGroupName);

    _this35 = _super14.call(this);
    _this35._parent = parent;
    _this35._validators = validators;
    _this35._asyncValidators = asyncValidators;
    return _this35;
  }
  /** @internal */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormGroupName, [{
    key: "_checkParentType",
    value: function _checkParentType() {
      if (_hasInvalidParent(this._parent) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        ReactiveErrors.groupParentException();
      }
    }
  }]);

  return FormGroupName;
}(AbstractFormGroupDirective);

FormGroupName.ɵfac = function FormGroupName_Factory(t) {
  return new (t || FormGroupName)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
};

FormGroupName.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: FormGroupName,
  selectors: [["", "formGroupName", ""]],
  inputs: {
    name: ["formGroupName", "name"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([formGroupNameProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});

FormGroupName.ctorParameters = function () {
  return [{
    type: ControlContainer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_ASYNC_VALIDATORS]
    }]
  }];
};

FormGroupName.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['formGroupName']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormGroupName, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[formGroupName]',
      providers: [formGroupNameProvider]
    }]
  }], function () {
    return [{
      type: ControlContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_ASYNC_VALIDATORS]
      }]
    }];
  }, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['formGroupName']
    }]
  });
})();

var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return FormArrayName;
  })
};
/**
 * @description
 *
 * Syncs a nested `FormArray` to a DOM element.
 *
 * This directive is designed to be used with a parent `FormGroupDirective` (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested `FormArray` you want to link, and
 * will look for a `FormArray` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `AbstractControl`
 *
 * @usageNotes
 *
 * ### Example
 *
 * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */

var FormArrayName = /*#__PURE__*/function (_ControlContainer4) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormArrayName, _ControlContainer4);

  var _super15 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FormArrayName);

  function FormArrayName(parent, validators, asyncValidators) {
    var _this36;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormArrayName);

    _this36 = _super15.call(this);
    _this36._parent = parent;
    _this36._validators = validators;
    _this36._asyncValidators = asyncValidators;
    return _this36;
  }
  /**
   * A lifecycle method called when the directive's inputs are initialized. For internal use only.
   * @throws If the directive does not have a valid parent.
   * @nodoc
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormArrayName, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this._checkParentType();

      this.formDirective.addFormArray(this);
    }
    /**
     * A lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @nodoc
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.formDirective) {
        this.formDirective.removeFormArray(this);
      }
    }
    /**
     * @description
     * The `FormArray` bound to this directive.
     */

  }, {
    key: "_checkParentType",
    value: function _checkParentType() {
      if (_hasInvalidParent(this._parent) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        ReactiveErrors.arrayParentException();
      }
    }
  }, {
    key: "control",
    get: function get() {
      return this.formDirective.getFormArray(this);
    }
    /**
     * @description
     * The top-level directive for this group if present, otherwise null.
     */

  }, {
    key: "formDirective",
    get: function get() {
      return this._parent ? this._parent.formDirective : null;
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */

  }, {
    key: "path",
    get: function get() {
      return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
    }
    /**
     * @description
     * Synchronous validator function composed of all the synchronous validators registered with this
     * directive.
     */

  }, {
    key: "validator",
    get: function get() {
      return composeValidators(this._validators);
    }
    /**
     * @description
     * Async validator function composed of all the async validators registered with this directive.
     */

  }, {
    key: "asyncValidator",
    get: function get() {
      return composeAsyncValidators(this._asyncValidators);
    }
  }]);

  return FormArrayName;
}(ControlContainer);

FormArrayName.ɵfac = function FormArrayName_Factory(t) {
  return new (t || FormArrayName)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
};

FormArrayName.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: FormArrayName,
  selectors: [["", "formArrayName", ""]],
  inputs: {
    name: ["formArrayName", "name"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([formArrayNameProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});

FormArrayName.ctorParameters = function () {
  return [{
    type: ControlContainer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_ASYNC_VALIDATORS]
    }]
  }];
};

FormArrayName.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['formArrayName']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormArrayName, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[formArrayName]',
      providers: [formArrayNameProvider]
    }]
  }], function () {
    return [{
      type: ControlContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_ASYNC_VALIDATORS]
      }]
    }];
  }, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['formArrayName']
    }]
  });
})();

function _hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var controlNameBinding = {
  provide: NgControl,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return FormControlName;
  })
};
/**
 * @description
 * Syncs a `FormControl` in an existing `FormGroup` to a form control
 * element by name.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `FormControl`
 * @see `AbstractControl`
 *
 * @usageNotes
 *
 * ### Register `FormControl` within a group
 *
 * The following example shows how to register multiple form controls within a form group
 * and set their value.
 *
 * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * To see `formControlName` examples with different form control types, see:
 *
 * * Radio buttons: `RadioControlValueAccessor`
 * * Selects: `SelectControlValueAccessor`
 *
 * ### Use with ngModel is deprecated
 *
 * Support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives has been deprecated in Angular v6 and is scheduled for removal in
 * a future version of Angular.
 *
 * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */

var FormControlName = /*#__PURE__*/function (_NgControl3) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormControlName, _NgControl3);

  var _super16 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FormControlName);

  function FormControlName(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    var _this37;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormControlName);

    _this37 = _super16.call(this);
    _this37._ngModelWarningConfig = _ngModelWarningConfig;
    _this37._added = false;
    /** @deprecated as of v6 */

    _this37.update = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    /**
     * @description
     * Instance property used to track whether an ngModel warning has been sent out for this
     * particular FormControlName instance. Used to support warning config of "always".
     *
     * @internal
     */

    _this37._ngModelWarningSent = false;
    _this37._parent = parent;
    _this37._rawValidators = validators || [];
    _this37._rawAsyncValidators = asyncValidators || [];
    _this37.valueAccessor = selectValueAccessor(Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this37), valueAccessors);
    return _this37;
  }
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormControlName, [{
    key: "ngOnChanges",

    /** @nodoc */
    value: function ngOnChanges(changes) {
      if (!this._added) this._setUpControl();

      if (isPropertyUpdated(changes, this.viewModel)) {
        _ngModelWarning('formControlName', FormControlName, this, this._ngModelWarningConfig);

        this.viewModel = this.model;
        this.formDirective.updateModel(this, this.model);
      }
    }
    /** @nodoc */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.formDirective) {
        this.formDirective.removeControl(this);
      }
    }
    /**
     * @description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param newValue The new value for the view model.
     */

  }, {
    key: "viewToModelUpdate",
    value: function viewToModelUpdate(newValue) {
      this.viewModel = newValue;
      this.update.emit(newValue);
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */

  }, {
    key: "_checkParentType",
    value: function _checkParentType() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
          ReactiveErrors.ngModelGroupException();
        } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
          ReactiveErrors.controlParentException();
        }
      }
    }
  }, {
    key: "_setUpControl",
    value: function _setUpControl() {
      this._checkParentType();

      this.control = this.formDirective.addControl(this);

      if (this.control.disabled && this.valueAccessor.setDisabledState) {
        this.valueAccessor.setDisabledState(true);
      }

      this._added = true;
    }
  }, {
    key: "isDisabled",
    set: function set(isDisabled) {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        ReactiveErrors.disabledAttrWarning();
      }
    }
  }, {
    key: "path",
    get: function get() {
      return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
    }
    /**
     * @description
     * The top-level directive for this group if present, otherwise null.
     */

  }, {
    key: "formDirective",
    get: function get() {
      return this._parent ? this._parent.formDirective : null;
    }
    /**
     * @description
     * Synchronous validator function composed of all the synchronous validators
     * registered with this directive.
     */

  }, {
    key: "validator",
    get: function get() {
      return composeValidators(this._rawValidators);
    }
    /**
     * @description
     * Async validator function composed of all the async validators registered with this
     * directive.
     */

  }, {
    key: "asyncValidator",
    get: function get() {
      return composeAsyncValidators(this._rawAsyncValidators);
    }
  }]);

  return FormControlName;
}(NgControl);

FormControlName.ɵfac = function FormControlName_Factory(t) {
  return new (t || FormControlName)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
};

FormControlName.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: FormControlName,
  selectors: [["", "formControlName", ""]],
  inputs: {
    isDisabled: ["disabled", "isDisabled"],
    name: ["formControlName", "name"],
    model: ["ngModel", "model"]
  },
  outputs: {
    update: "ngModelChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([controlNameBinding]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});
/**
 * @description
 * Static property used to track whether any ngModel warnings have been sent across
 * all instances of FormControlName. Used to support warning config of "once".
 *
 * @internal
 */

FormControlName._ngModelWarningSentOnce = false;

FormControlName.ctorParameters = function () {
  return [{
    type: ControlContainer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }];
};

FormControlName.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['formControlName']
  }],
  isDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['disabled']
  }],
  model: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['ngModel']
  }],
  update: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
    args: ['ngModelChange']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormControlName, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[formControlName]',
      providers: [controlNameBinding]
    }]
  }], function () {
    return [{
      type: ControlContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_ASYNC_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALUE_ACCESSOR]
      }]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
      }]
    }];
  }, {
    update: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
      args: ['ngModelChange']
    }],
    isDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['disabled']
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['formControlName']
    }],
    model: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['ngModel']
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

/**
 * @description
 * Provider which adds `RequiredValidator` to the `NG_VALIDATORS` multi-provider list.
 */


var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return RequiredValidator;
  }),
  multi: true
};
/**
 * @description
 * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
 */

var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return CheckboxRequiredValidator;
  }),
  multi: true
};
/**
 * @description
 * A directive that adds the `required` validator to any controls marked with the
 * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a required validator using template-driven forms
 *
 * ```
 * <input name="fullName" ngModel required>
 * ```
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 * @publicApi
 */

var RequiredValidator = /*#__PURE__*/function () {
  function RequiredValidator() {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, RequiredValidator);

    this._required = false;
  }
  /**
   * @description
   * Tracks changes to the required attribute bound to this directive.
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(RequiredValidator, [{
    key: "validate",

    /**
     * Method that validates whether the control is empty.
     * Returns the validation result if enabled, otherwise null.
     * @nodoc
     */
    value: function validate(control) {
      return this.required ? Validators.required(control) : null;
    }
    /**
     * Registers a callback function to call when the validator inputs change.
     * @nodoc
     */

  }, {
    key: "registerOnValidatorChange",
    value: function registerOnValidatorChange(fn) {
      this._onChange = fn;
    }
  }, {
    key: "required",
    get: function get() {
      return this._required;
    },
    set: function set(value) {
      this._required = value != null && value !== false && "".concat(value) !== 'false';
      if (this._onChange) this._onChange();
    }
  }]);

  return RequiredValidator;
}();

RequiredValidator.ɵfac = function RequiredValidator_Factory(t) {
  return new (t || RequiredValidator)();
};

RequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: RequiredValidator,
  selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
  hostVars: 1,
  hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("required", ctx.required ? "" : null);
    }
  },
  inputs: {
    required: "required"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([REQUIRED_VALIDATOR])]
});
RequiredValidator.propDecorators = {
  required: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](RequiredValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
      providers: [REQUIRED_VALIDATOR],
      host: {
        '[attr.required]': 'required ? "" : null'
      }
    }]
  }], function () {
    return [];
  }, {
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * A Directive that adds the `required` validator to checkbox controls marked with the
 * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a required checkbox validator using template-driven forms
 *
 * The following example shows how to add a checkbox required validator to an input attached to an
 * ngModel binding.
 *
 * ```
 * <input type="checkbox" name="active" ngModel required>
 * ```
 *
 * @publicApi
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */


var CheckboxRequiredValidator = /*#__PURE__*/function (_RequiredValidator) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CheckboxRequiredValidator, _RequiredValidator);

  var _super17 = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(CheckboxRequiredValidator);

  function CheckboxRequiredValidator() {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, CheckboxRequiredValidator);

    return _super17.apply(this, arguments);
  }

  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(CheckboxRequiredValidator, [{
    key: "validate",

    /**
     * Method that validates whether or not the checkbox has been checked.
     * Returns the validation result if enabled, otherwise null.
     * @nodoc
     */
    value: function validate(control) {
      return this.required ? Validators.requiredTrue(control) : null;
    }
  }]);

  return CheckboxRequiredValidator;
}(RequiredValidator);

CheckboxRequiredValidator.ɵfac = function CheckboxRequiredValidator_Factory(t) {
  return ɵCheckboxRequiredValidator_BaseFactory(t || CheckboxRequiredValidator);
};

CheckboxRequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: CheckboxRequiredValidator,
  selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("required", ctx.required ? "" : null);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});
var ɵCheckboxRequiredValidator_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](CheckboxRequiredValidator);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CheckboxRequiredValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        '[attr.required]': 'required ? "" : null'
      }
    }]
  }], null, null);
})();
/**
 * @description
 * Provider which adds `EmailValidator` to the `NG_VALIDATORS` multi-provider list.
 */


var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return EmailValidator;
  }),
  multi: true
};
/**
 * A directive that adds the `email` validator to controls marked with the
 * `email` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding an email validator
 *
 * The following example shows how to add an email validator to an input attached to an ngModel
 * binding.
 *
 * ```
 * <input type="email" name="email" ngModel email>
 * <input type="email" name="email" ngModel email="true">
 * <input type="email" name="email" ngModel [email]="true">
 * ```
 *
 * @publicApi
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */

var EmailValidator = /*#__PURE__*/function () {
  function EmailValidator() {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, EmailValidator);

    this._enabled = false;
  }
  /**
   * @description
   * Tracks changes to the email attribute bound to this directive.
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(EmailValidator, [{
    key: "validate",

    /**
     * Method that validates whether an email address is valid.
     * Returns the validation result if enabled, otherwise null.
     * @nodoc
     */
    value: function validate(control) {
      return this._enabled ? Validators.email(control) : null;
    }
    /**
     * Registers a callback function to call when the validator inputs change.
     * @nodoc
     */

  }, {
    key: "registerOnValidatorChange",
    value: function registerOnValidatorChange(fn) {
      this._onChange = fn;
    }
  }, {
    key: "email",
    set: function set(value) {
      this._enabled = value === '' || value === true || value === 'true';
      if (this._onChange) this._onChange();
    }
  }]);

  return EmailValidator;
}();

EmailValidator.ɵfac = function EmailValidator_Factory(t) {
  return new (t || EmailValidator)();
};

EmailValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: EmailValidator,
  selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
  inputs: {
    email: "email"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([EMAIL_VALIDATOR])]
});
EmailValidator.propDecorators = {
  email: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](EmailValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[email][formControlName],[email][formControl],[email][ngModel]',
      providers: [EMAIL_VALIDATOR]
    }]
  }], function () {
    return [];
  }, {
    email: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * @description
 * Provider which adds `MinLengthValidator` to the `NG_VALIDATORS` multi-provider list.
 */


var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return MinLengthValidator;
  }),
  multi: true
};
/**
 * A directive that adds minimum length validation to controls marked with the
 * `minlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a minimum length validator
 *
 * The following example shows how to add a minimum length validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel minlength="4">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */

var MinLengthValidator = /*#__PURE__*/function () {
  function MinLengthValidator() {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MinLengthValidator);

    this._validator = Validators.nullValidator;
  }
  /** @nodoc */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(MinLengthValidator, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if ('minlength' in changes) {
        this._createValidator();

        if (this._onChange) this._onChange();
      }
    }
    /**
     * Method that validates whether the value meets a minimum length requirement.
     * Returns the validation result if enabled, otherwise null.
     * @nodoc
     */

  }, {
    key: "validate",
    value: function validate(control) {
      return this.minlength == null ? null : this._validator(control);
    }
    /**
     * Registers a callback function to call when the validator inputs change.
     * @nodoc
     */

  }, {
    key: "registerOnValidatorChange",
    value: function registerOnValidatorChange(fn) {
      this._onChange = fn;
    }
  }, {
    key: "_createValidator",
    value: function _createValidator() {
      this._validator = Validators.minLength(typeof this.minlength === 'number' ? this.minlength : parseInt(this.minlength, 10));
    }
  }]);

  return MinLengthValidator;
}();

MinLengthValidator.ɵfac = function MinLengthValidator_Factory(t) {
  return new (t || MinLengthValidator)();
};

MinLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MinLengthValidator,
  selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("minlength", ctx.minlength ? ctx.minlength : null);
    }
  },
  inputs: {
    minlength: "minlength"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([MIN_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});
MinLengthValidator.propDecorators = {
  minlength: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MinLengthValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        '[attr.minlength]': 'minlength ? minlength : null'
      }
    }]
  }], function () {
    return [];
  }, {
    minlength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * @description
 * Provider which adds `MaxLengthValidator` to the `NG_VALIDATORS` multi-provider list.
 */


var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return MaxLengthValidator;
  }),
  multi: true
};
/**
 * A directive that adds max length validation to controls marked with the
 * `maxlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a maximum length validator
 *
 * The following example shows how to add a maximum length validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel maxlength="25">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */

var MaxLengthValidator = /*#__PURE__*/function () {
  function MaxLengthValidator() {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MaxLengthValidator);

    this._validator = Validators.nullValidator;
  }
  /** @nodoc */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(MaxLengthValidator, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if ('maxlength' in changes) {
        this._createValidator();

        if (this._onChange) this._onChange();
      }
    }
    /**
     * Method that validates whether the value exceeds the maximum length requirement.
     * @nodoc
     */

  }, {
    key: "validate",
    value: function validate(control) {
      return this.maxlength != null ? this._validator(control) : null;
    }
    /**
     * Registers a callback function to call when the validator inputs change.
     * @nodoc
     */

  }, {
    key: "registerOnValidatorChange",
    value: function registerOnValidatorChange(fn) {
      this._onChange = fn;
    }
  }, {
    key: "_createValidator",
    value: function _createValidator() {
      this._validator = Validators.maxLength(typeof this.maxlength === 'number' ? this.maxlength : parseInt(this.maxlength, 10));
    }
  }]);

  return MaxLengthValidator;
}();

MaxLengthValidator.ɵfac = function MaxLengthValidator_Factory(t) {
  return new (t || MaxLengthValidator)();
};

MaxLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MaxLengthValidator,
  selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("maxlength", ctx.maxlength ? ctx.maxlength : null);
    }
  },
  inputs: {
    maxlength: "maxlength"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([MAX_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});
MaxLengthValidator.propDecorators = {
  maxlength: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MaxLengthValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        '[attr.maxlength]': 'maxlength ? maxlength : null'
      }
    }]
  }], function () {
    return [];
  }, {
    maxlength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * @description
 * Provider which adds `PatternValidator` to the `NG_VALIDATORS` multi-provider list.
 */


var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return PatternValidator;
  }),
  multi: true
};
/**
 * @description
 * A directive that adds regex pattern validation to controls marked with the
 * `pattern` attribute. The regex must match the entire control value.
 * The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a pattern validator
 *
 * The following example shows how to add a pattern validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel pattern="[a-zA-Z ]*">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */

var PatternValidator = /*#__PURE__*/function () {
  function PatternValidator() {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, PatternValidator);

    this._validator = Validators.nullValidator;
  }
  /** @nodoc */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(PatternValidator, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if ('pattern' in changes) {
        this._createValidator();

        if (this._onChange) this._onChange();
      }
    }
    /**
     * Method that validates whether the value matches the the pattern requirement.
     * @nodoc
     */

  }, {
    key: "validate",
    value: function validate(control) {
      return this._validator(control);
    }
    /**
     * Registers a callback function to call when the validator inputs change.
     * @nodoc
     */

  }, {
    key: "registerOnValidatorChange",
    value: function registerOnValidatorChange(fn) {
      this._onChange = fn;
    }
  }, {
    key: "_createValidator",
    value: function _createValidator() {
      this._validator = Validators.pattern(this.pattern);
    }
  }]);

  return PatternValidator;
}();

PatternValidator.ɵfac = function PatternValidator_Factory(t) {
  return new (t || PatternValidator)();
};

PatternValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: PatternValidator,
  selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function PatternValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("pattern", ctx.pattern ? ctx.pattern : null);
    }
  },
  inputs: {
    pattern: "pattern"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([PATTERN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});
PatternValidator.propDecorators = {
  pattern: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](PatternValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
      providers: [PATTERN_VALIDATOR],
      host: {
        '[attr.pattern]': 'pattern ? pattern : null'
      }
    }]
  }], function () {
    return [];
  }, {
    pattern: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
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


var SHARED_FORM_DIRECTIVES = [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
/**
 * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
 */

var ɵInternalFormsSharedModule = function ɵInternalFormsSharedModule() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ɵInternalFormsSharedModule);
};

ɵInternalFormsSharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: ɵInternalFormsSharedModule
});
ɵInternalFormsSharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  factory: function ɵInternalFormsSharedModule_Factory(t) {
    return new (t || ɵInternalFormsSharedModule)();
  }
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ɵInternalFormsSharedModule, {
    declarations: [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator],
    exports: [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](ɵInternalFormsSharedModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
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


function isAbstractControlOptions(options) {
  return options.asyncValidators !== undefined || options.validators !== undefined || options.updateOn !== undefined;
}
/**
 * @description
 * Creates an `AbstractControl` from a user-specified configuration.
 *
 * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
 * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
 * forms.
 *
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 *
 * @publicApi
 */


var FormBuilder = /*#__PURE__*/function () {
  function FormBuilder() {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormBuilder);
  }

  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormBuilder, [{
    key: "group",

    /**
     * @description
     * Construct a new `FormGroup` instance.
     *
     * @param controlsConfig A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param options Configuration options object for the `FormGroup`. The object can
     * have two shapes:
     *
     * 1) `AbstractControlOptions` object (preferred), which consists of:
     * * `validators`: A synchronous validator function, or an array of validator functions
     * * `asyncValidators`: A single async validator or array of async validator functions
     * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
     * submit')
     *
     * 2) Legacy configuration object, which consists of:
     * * `validator`: A synchronous validator function, or an array of validator functions
     * * `asyncValidator`: A single async validator or array of async validator functions
     *
     */
    value: function group(controlsConfig) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var controls = this._reduceControls(controlsConfig);

      var validators = null;
      var asyncValidators = null;
      var updateOn = undefined;

      if (options != null) {
        if (isAbstractControlOptions(options)) {
          // `options` are `AbstractControlOptions`
          validators = options.validators != null ? options.validators : null;
          asyncValidators = options.asyncValidators != null ? options.asyncValidators : null;
          updateOn = options.updateOn != null ? options.updateOn : undefined;
        } else {
          // `options` are legacy form group options
          validators = options['validator'] != null ? options['validator'] : null;
          asyncValidators = options['asyncValidator'] != null ? options['asyncValidator'] : null;
        }
      }

      return new FormGroup(controls, {
        asyncValidators: asyncValidators,
        updateOn: updateOn,
        validators: validators
      });
    }
    /**
     * @description
     * Construct a new `FormControl` with the given state, validators and options.
     *
     * @param formState Initializes the control with an initial state value, or
     * with an object that contains both a value and a disabled status.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator
     * functions.
     *
     * @usageNotes
     *
     * ### Initialize a control as disabled
     *
     * The following example returns a control with an initial value in a disabled state.
     *
     * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
     * </code-example>
     */

  }, {
    key: "control",
    value: function control(formState, validatorOrOpts, asyncValidator) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    /**
     * Constructs a new `FormArray` from the given array of configurations,
     * validators and options.
     *
     * @param controlsConfig An array of child controls or control configs. Each
     * child control is given an index when it is registered.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator
     * functions.
     */

  }, {
    key: "array",
    value: function array(controlsConfig, validatorOrOpts, asyncValidator) {
      var _this38 = this;

      var controls = controlsConfig.map(function (c) {
        return _this38._createControl(c);
      });
      return new FormArray(controls, validatorOrOpts, asyncValidator);
    }
    /** @internal */

  }, {
    key: "_reduceControls",
    value: function _reduceControls(controlsConfig) {
      var _this39 = this;

      var controls = {};
      Object.keys(controlsConfig).forEach(function (controlName) {
        controls[controlName] = _this39._createControl(controlsConfig[controlName]);
      });
      return controls;
    }
    /** @internal */

  }, {
    key: "_createControl",
    value: function _createControl(controlConfig) {
      if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup || controlConfig instanceof FormArray) {
        return controlConfig;
      } else if (Array.isArray(controlConfig)) {
        var value = controlConfig[0];
        var validator = controlConfig.length > 1 ? controlConfig[1] : null;
        var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
        return this.control(value, validator, asyncValidator);
      } else {
        return this.control(controlConfig);
      }
    }
  }]);

  return FormBuilder;
}();

FormBuilder.ɵfac = function FormBuilder_Factory(t) {
  return new (t || FormBuilder)();
};

FormBuilder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: FormBuilder,
  factory: FormBuilder.ɵfac
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"]
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
 * @publicApi
 */


var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["Version"]('10.1.3');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Exports the required providers and directives for template-driven forms,
 * making them available for import by NgModules that import this module.
 *
 * @see [Forms Overview](/guide/forms-overview)
 * @see [Template-driven Forms Guide](/guide/forms)
 *
 * @publicApi
 */

var FormsModule = function FormsModule() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormsModule);
};

FormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: FormsModule
});
FormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  factory: function FormsModule_Factory(t) {
    return new (t || FormsModule)();
  },
  providers: [RadioControlRegistry],
  imports: [ɵInternalFormsSharedModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](FormsModule, {
    declarations: [NgModel, NgModelGroup, NgForm],
    exports: [ɵInternalFormsSharedModule, NgModel, NgModelGroup, NgForm]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      providers: [RadioControlRegistry],
      exports: [ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
/**
 * Exports the required infrastructure and directives for reactive forms,
 * making them available for import by NgModules that import this module.
 *
 * @see [Forms Overview](guide/forms-overview)
 * @see [Reactive Forms Guide](guide/reactive-forms)
 *
 * @publicApi
 */


var ReactiveFormsModule = /*#__PURE__*/function () {
  function ReactiveFormsModule() {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ReactiveFormsModule);
  }

  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(ReactiveFormsModule, null, [{
    key: "withConfig",

    /**
     * @description
     * Provides options for configuring the reactive forms module.
     *
     * @param opts An object of configuration options
     * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
     * binding is used with reactive form directives.
     */
    value: function withConfig(opts) {
      return {
        ngModule: ReactiveFormsModule,
        providers: [{
          provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
          useValue: opts.warnOnNgModelWithFormControl
        }]
      };
    }
  }]);

  return ReactiveFormsModule;
}();

ReactiveFormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: ReactiveFormsModule
});
ReactiveFormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  factory: function ReactiveFormsModule_Factory(t) {
    return new (t || ReactiveFormsModule)();
  },
  providers: [FormBuilder, RadioControlRegistry],
  imports: [ɵInternalFormsSharedModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ReactiveFormsModule, {
    declarations: [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName],
    exports: [ɵInternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](ReactiveFormsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      providers: [FormBuilder, RadioControlRegistry],
      exports: [ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
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
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

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

/***/ "nXrb":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/dialog-entry/dialog-entry.component.ts ***!
  \**************************************************************************/
/*! exports provided: DialogEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogEntryComponent", function() { return DialogEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_dialog_entry_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dialog-entry.component.html */ "J1Oz");
/* harmony import */ var _dialog_entry_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog-entry.component.scss */ "yt8o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _helpers_angular_console_log_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/angular-console-log.helper */ "50eG");
/* harmony import */ var _services_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/context */ "Iv+g");









var DialogEntryComponent = /** @class */ (function () {
    function DialogEntryComponent(dialog, viewContainerRef, router, route, context, changeDetectorRef) {
        var _a;
        this.dialog = dialog;
        this.viewContainerRef = viewContainerRef;
        this.router = router;
        this.route = route;
        this.context = context;
        this.changeDetectorRef = changeDetectorRef;
        var navigation = this.router.getCurrentNavigation();
        this.dialogData = ((_a = navigation === null || navigation === void 0 ? void 0 : navigation.extras) === null || _a === void 0 ? void 0 : _a.state) || {};
    }
    DialogEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var dialogConfig = this.route.snapshot.data.dialog;
        if (dialogConfig == null) {
            throw new Error("Could not find config for dialog. Did you forget to add DialogConfig to route data?");
        }
        Object(_helpers_angular_console_log_helper__WEBPACK_IMPORTED_MODULE_7__["angularConsoleLog"])('Open dialog:', dialogConfig.name, 'Context id:', this.context.id, 'Context:', this.context);
        dialogConfig.getComponent().then(function (component) {
            if (dialogConfig.initContext) {
                _this.context.init(_this.route);
            }
            _this.dialogRef = _this.dialog.open(component, {
                data: _this.dialogData,
                backdropClass: 'dialog-backdrop',
                panelClass: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([
                    'dialog-panel',
                    "dialog-panel-" + dialogConfig.panelSize,
                    dialogConfig.showScrollbar ? 'show-scrollbar' : 'no-scrollbar'
                ], (dialogConfig.panelClass ? dialogConfig.panelClass : [])),
                viewContainerRef: _this.viewContainerRef,
                autoFocus: false,
                closeOnNavigation: false,
                // spm NOTE: used to force align-items: flex-start; on cdk-global-overlay-wrapper.
                // Real top margin is overwritten in css e.g. dialog-panel-large
                position: { top: '0' }
            });
            _this.dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (data) {
                Object(_helpers_angular_console_log_helper__WEBPACK_IMPORTED_MODULE_7__["angularConsoleLog"])('Dialog was closed:', dialogConfig.name, 'Data:', data);
                var navRes = data;
                if ((navRes === null || navRes === void 0 ? void 0 : navRes.navigateUrl) != null) {
                    _this.router.navigate([navRes.navigateUrl]);
                    return;
                }
                if (_this.route.pathFromRoot.length <= 3) {
                    try {
                        window.parent.$2sxc.totalPopup.close();
                    }
                    catch (error) { }
                    return;
                }
                if (_this.route.snapshot.url.length > 0) {
                    _this.router.navigate(['./'], { relativeTo: _this.route.parent, state: data });
                }
                else {
                    _this.router.navigate(['./'], { relativeTo: _this.route.parent.parent, state: data });
                }
            });
            _this.changeDetectorRef.markForCheck();
        });
    };
    DialogEntryComponent.prototype.ngOnDestroy = function () {
        this.dialogRef.close();
    };
    DialogEntryComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _services_context__WEBPACK_IMPORTED_MODULE_8__["Context"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
    ]; };
    DialogEntryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-dialog-entry',
            template: _raw_loader_dialog_entry_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_dialog_entry_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_context__WEBPACK_IMPORTED_MODULE_8__["Context"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
    ], DialogEntryComponent);
    return DialogEntryComponent;
}());



/***/ }),

/***/ "rpQ9":
/*!*************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/id-field/id-field.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div matRipple class=\"id-box highlight\" [matTooltip]=\"tooltip\" (click)=\"copy()\">\r\n  <span class=\"id\">{{ id }}</span>\r\n  <mat-icon class=\"icon\">file_copy</mat-icon>\r\n</div>\r\n");

/***/ }),

/***/ "yt8o":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/dialog-entry/dialog-entry.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nLWVudHJ5L2RpYWxvZy1lbnRyeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c.js.map