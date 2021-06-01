(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-administration-app-administration-module~content-type-fields-content-type-fields-module~~a0153aaf"],{

/***/ "TU8p":
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js ***!
  \***********************************************************************/
/*! exports provided: MatBadge, MatBadgeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBadge", function() { return MatBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBadgeModule", function() { return MatBadgeModule; });
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");









/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



var nextId = 0; // Boilerplate for applying mixins to MatBadge.

/** @docs-private */

var MatBadgeBase = function MatBadgeBase() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatBadgeBase);
};

var _MatBadgeMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatBadgeBase);
/** Directive to display a text badge. */


var MatBadge = /*#__PURE__*/function (_MatBadgeMixinBase2) {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(MatBadge, _MatBadgeMixinBase2);

  var _super = Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(MatBadge);

  function MatBadge(_ngZone, _elementRef, _ariaDescriber, _renderer, _animationMode) {
    var _this;

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatBadge);

    _this = _super.call(this);
    _this._ngZone = _ngZone;
    _this._elementRef = _elementRef;
    _this._ariaDescriber = _ariaDescriber;
    _this._renderer = _renderer;
    _this._animationMode = _animationMode;
    /** Whether the badge has any content. */

    _this._hasContent = false;
    _this._color = 'primary';
    _this._overlap = true;
    /**
     * Position the badge should reside.
     * Accepts any combination of 'above'|'below' and 'before'|'after'
     */

    _this.position = 'above after';
    /** Size of the badge. Can be 'small', 'medium', or 'large'. */

    _this.size = 'medium';
    /** Unique id for the badge */

    _this._id = nextId++;

    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      var nativeElement = _elementRef.nativeElement;

      if (nativeElement.nodeType !== nativeElement.ELEMENT_NODE) {
        throw Error('matBadge must be attached to an element node.');
      }
    }

    return _this;
  }
  /** The color of the badge. Can be `primary`, `accent`, or `warn`. */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MatBadge, [{
    key: "color",
    get: function get() {
      return this._color;
    },
    set: function set(value) {
      this._setColor(value);

      this._color = value;
    }
    /** Whether the badge should overlap its contents or not */

  }, {
    key: "overlap",
    get: function get() {
      return this._overlap;
    },
    set: function set(val) {
      this._overlap = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(val);
    }
    /** Message used to describe the decorated element via aria-describedby */

  }, {
    key: "description",
    get: function get() {
      return this._description;
    },
    set: function set(newDescription) {
      if (newDescription !== this._description) {
        var badgeElement = this._badgeElement;

        this._updateHostAriaDescription(newDescription, this._description);

        this._description = newDescription;

        if (badgeElement) {
          newDescription ? badgeElement.setAttribute('aria-label', newDescription) : badgeElement.removeAttribute('aria-label');
        }
      }
    }
    /** Whether the badge is hidden. */

  }, {
    key: "hidden",
    get: function get() {
      return this._hidden;
    },
    set: function set(val) {
      this._hidden = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(val);
    }
    /** Whether the badge is above the host or not */

  }, {
    key: "isAbove",
    value: function isAbove() {
      return this.position.indexOf('below') === -1;
    }
    /** Whether the badge is after the host or not */

  }, {
    key: "isAfter",
    value: function isAfter() {
      return this.position.indexOf('before') === -1;
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var contentChange = changes['content'];

      if (contentChange) {
        var value = contentChange.currentValue;
        this._hasContent = value != null && "".concat(value).trim().length > 0;

        this._updateTextContent();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var badgeElement = this._badgeElement;

      if (badgeElement) {
        if (this.description) {
          this._ariaDescriber.removeDescription(badgeElement, this.description);
        } // When creating a badge through the Renderer, Angular will keep it in an index.
        // We have to destroy it ourselves, otherwise it'll be retained in memory.


        if (this._renderer.destroyNode) {
          this._renderer.destroyNode(badgeElement);
        }
      }
    }
    /**
     * Gets the element into which the badge's content is being rendered.
     * Undefined if the element hasn't been created (e.g. if the badge doesn't have content).
     */

  }, {
    key: "getBadgeElement",
    value: function getBadgeElement() {
      return this._badgeElement;
    }
    /** Injects a span element into the DOM with the content. */

  }, {
    key: "_updateTextContent",
    value: function _updateTextContent() {
      if (!this._badgeElement) {
        this._badgeElement = this._createBadgeElement();
      } else {
        this._badgeElement.textContent = this._stringifyContent();
      }

      return this._badgeElement;
    }
    /** Creates the badge element */

  }, {
    key: "_createBadgeElement",
    value: function _createBadgeElement() {
      var badgeElement = this._renderer.createElement('span');

      var activeClass = 'mat-badge-active';
      var contentClass = 'mat-badge-content'; // Clear any existing badges which may have persisted from a server-side render.

      this._clearExistingBadges(contentClass);

      badgeElement.setAttribute('id', "mat-badge-content-".concat(this._id));
      badgeElement.classList.add(contentClass);
      badgeElement.textContent = this._stringifyContent();

      if (this._animationMode === 'NoopAnimations') {
        badgeElement.classList.add('_mat-animation-noopable');
      }

      if (this.description) {
        badgeElement.setAttribute('aria-label', this.description);
      }

      this._elementRef.nativeElement.appendChild(badgeElement); // animate in after insertion


      if (typeof requestAnimationFrame === 'function' && this._animationMode !== 'NoopAnimations') {
        this._ngZone.runOutsideAngular(function () {
          requestAnimationFrame(function () {
            badgeElement.classList.add(activeClass);
          });
        });
      } else {
        badgeElement.classList.add(activeClass);
      }

      return badgeElement;
    }
    /** Sets the aria-label property on the element */

  }, {
    key: "_updateHostAriaDescription",
    value: function _updateHostAriaDescription(newDescription, oldDescription) {
      // ensure content available before setting label
      var content = this._updateTextContent();

      if (oldDescription) {
        this._ariaDescriber.removeDescription(content, oldDescription);
      }

      if (newDescription) {
        this._ariaDescriber.describe(content, newDescription);
      }
    }
    /** Adds css theme class given the color to the component host */

  }, {
    key: "_setColor",
    value: function _setColor(colorPalette) {
      if (colorPalette !== this._color) {
        var classList = this._elementRef.nativeElement.classList;

        if (this._color) {
          classList.remove("mat-badge-".concat(this._color));
        }

        if (colorPalette) {
          classList.add("mat-badge-".concat(colorPalette));
        }
      }
    }
    /** Clears any existing badges that might be left over from server-side rendering. */

  }, {
    key: "_clearExistingBadges",
    value: function _clearExistingBadges(cssClass) {
      var element = this._elementRef.nativeElement;
      var childCount = element.children.length; // Use a reverse while, because we'll be removing elements from the list as we're iterating.

      while (childCount--) {
        var currentChild = element.children[childCount];

        if (currentChild.classList.contains(cssClass)) {
          element.removeChild(currentChild);
        }
      }
    }
    /** Gets the string representation of the badge content. */

  }, {
    key: "_stringifyContent",
    value: function _stringifyContent() {
      // Convert null and undefined to an empty string which is consistent
      // with how Angular handles them in inside template interpolations.
      var content = this.content;
      return content == null ? '' : "".concat(content);
    }
  }]);

  return MatBadge;
}(_MatBadgeMixinBase);

MatBadge.ɵfac = function MatBadge_Factory(t) {
  return new (t || MatBadge)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["AriaDescriber"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], 8));
};

MatBadge.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: MatBadge,
  selectors: [["", "matBadge", ""]],
  hostAttrs: [1, "mat-badge"],
  hostVars: 20,
  hostBindings: function MatBadge_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-badge-overlap", ctx.overlap)("mat-badge-above", ctx.isAbove())("mat-badge-below", !ctx.isAbove())("mat-badge-before", !ctx.isAfter())("mat-badge-after", ctx.isAfter())("mat-badge-small", ctx.size === "small")("mat-badge-medium", ctx.size === "medium")("mat-badge-large", ctx.size === "large")("mat-badge-hidden", ctx.hidden || !ctx._hasContent)("mat-badge-disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: ["matBadgeDisabled", "disabled"],
    position: ["matBadgePosition", "position"],
    size: ["matBadgeSize", "size"],
    color: ["matBadgeColor", "color"],
    overlap: ["matBadgeOverlap", "overlap"],
    description: ["matBadgeDescription", "description"],
    hidden: ["matBadgeHidden", "hidden"],
    content: ["matBadge", "content"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
});

MatBadge.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["AriaDescriber"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

MatBadge.propDecorators = {
  color: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['matBadgeColor']
  }],
  overlap: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['matBadgeOverlap']
  }],
  position: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['matBadgePosition']
  }],
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['matBadge']
  }],
  description: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['matBadgeDescription']
  }],
  size: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['matBadgeSize']
  }],
  hidden: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['matBadgeHidden']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatBadge, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
    args: [{
      selector: '[matBadge]',
      inputs: ['disabled: matBadgeDisabled'],
      host: {
        'class': 'mat-badge',
        '[class.mat-badge-overlap]': 'overlap',
        '[class.mat-badge-above]': 'isAbove()',
        '[class.mat-badge-below]': '!isAbove()',
        '[class.mat-badge-before]': '!isAfter()',
        '[class.mat-badge-after]': 'isAfter()',
        '[class.mat-badge-small]': 'size === "small"',
        '[class.mat-badge-medium]': 'size === "medium"',
        '[class.mat-badge-large]': 'size === "large"',
        '[class.mat-badge-hidden]': 'hidden || !_hasContent',
        '[class.mat-badge-disabled]': 'disabled'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["AriaDescriber"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
      }]
    }];
  }, {
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['matBadgePosition']
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['matBadgeSize']
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['matBadgeColor']
    }],
    overlap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['matBadgeOverlap']
    }],
    description: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['matBadgeDescription']
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['matBadgeHidden']
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['matBadge']
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


var MatBadgeModule = function MatBadgeModule() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatBadgeModule);
};

MatBadgeModule.ɵfac = function MatBadgeModule_Factory(t) {
  return new (t || MatBadgeModule)();
};

MatBadgeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: MatBadgeModule
});
MatBadgeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MatBadgeModule, {
    declarations: function declarations() {
      return [MatBadge];
    },
    imports: function imports() {
      return [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]];
    },
    exports: function exports() {
      return [MatBadge, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatBadgeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
    args: [{
      imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]],
      exports: [MatBadge, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]],
      declarations: [MatBadge]
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


 //# sourceMappingURL=badge.js.map

/***/ })

}]);
//# sourceMappingURL=default~app-administration-app-administration-module~content-type-fields-content-type-fields-module~~a0153aaf.js.map