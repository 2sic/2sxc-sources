(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-administration-app-administration-module~apps-management-apps-management-module~content-~33e631e1"],{

/***/ "JbvS":
/*!********************************************************************************************!*\
  !*** ./node_modules/@ecodev/fab-speed-dial/__ivy_ngcc__/fesm2015/ecodev-fab-speed-dial.js ***!
  \********************************************************************************************/
/*! exports provided: EcoFabSpeedDialActionsComponent, EcoFabSpeedDialComponent, EcoFabSpeedDialModule, EcoFabSpeedDialTriggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcoFabSpeedDialActionsComponent", function() { return EcoFabSpeedDialActionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcoFabSpeedDialComponent", function() { return EcoFabSpeedDialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcoFabSpeedDialModule", function() { return EcoFabSpeedDialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcoFabSpeedDialTriggerComponent", function() { return EcoFabSpeedDialTriggerComponent; });
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");










function EcoFabSpeedDialActionsComponent_ng_content_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 0, ["*ngIf", "miniFabVisible"]);
  }
}

var _c0 = [[["", "mat-mini-fab", ""]]];
var _c1 = ["[mat-mini-fab]"];
var _c2 = [[["eco-fab-speed-dial-trigger"]], [["eco-fab-speed-dial-actions"]]];
var _c3 = ["eco-fab-speed-dial-trigger", "eco-fab-speed-dial-actions"];
var _c4 = [[["", "mat-fab", ""]]];
var _c5 = ["[mat-fab]"];
var Z_INDEX_ITEM = 23;

var EcoFabSpeedDialActionsComponent = /*#__PURE__*/function () {
  function EcoFabSpeedDialActionsComponent(injector, renderer) {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EcoFabSpeedDialActionsComponent);

    this.renderer = renderer;
    /**
     * Whether the min-fab button exist in DOM
     */

    this.miniFabVisible = false;
    this._parent = injector.get(EcoFabSpeedDialComponent);
  }

  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EcoFabSpeedDialActionsComponent, [{
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this = this;

      this._buttons.changes.subscribe(function () {
        _this.initButtonStates();

        _this._parent.setActionsVisibility();
      });

      this.initButtonStates();
    }
  }, {
    key: "initButtonStates",
    value: function initButtonStates() {
      var _this2 = this;

      this._buttons.forEach(function (button, i) {
        _this2.renderer.addClass(button._getHostElement(), 'eco-fab-action-item');

        _this2.changeElementStyle(button._getHostElement(), 'z-index', '' + (Z_INDEX_ITEM - i));
      });
    }
  }, {
    key: "show",
    value: function show() {
      var _this3 = this;

      if (!this._buttons) {
        return;
      }

      this.resetAnimationState();
      this.miniFabVisible = true;
      this.showMiniFabAnimation = setTimeout(function () {
        _this3._buttons.forEach(function (button, i) {
          var transitionDelay = 0;
          var transform;

          if (_this3._parent.animationMode === 'scale') {
            // Incremental transition delay of 65ms for each action button
            transitionDelay = 3 + 65 * i;
            transform = 'scale(1)';
          } else {
            transform = _this3.getTranslateFunction('0');
          }

          var hostElement = button._getHostElement();

          _this3.changeElementStyle(hostElement, 'transition-delay', transitionDelay + 'ms');

          _this3.changeElementStyle(hostElement, 'opacity', '1');

          _this3.changeElementStyle(hostElement, 'transform', transform);
        });
      }, 50); // Be sure that *ngIf can show elements before trying to animate them
    }
  }, {
    key: "resetAnimationState",
    value: function resetAnimationState() {
      clearTimeout(this.showMiniFabAnimation);

      if (this.hideMiniFab) {
        this.hideMiniFab.unsubscribe();
        this.hideMiniFab = null;
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this4 = this;

      if (!this._buttons) {
        return;
      }

      this.resetAnimationState();

      var obs = this._buttons.map(function (button, i) {
        var opacity = '1';
        var transitionDelay = 0;
        var transform;

        if (_this4._parent.animationMode === 'scale') {
          transitionDelay = 3 - 65 * i;
          transform = 'scale(0)';
          opacity = '0';
        } else {
          transform = _this4.getTranslateFunction(55 * (i + 1) - i * 5 + 'px');
        }

        var hostElement = button._getHostElement();

        _this4.changeElementStyle(hostElement, 'transition-delay', transitionDelay + 'ms');

        _this4.changeElementStyle(hostElement, 'opacity', opacity);

        _this4.changeElementStyle(hostElement, 'transform', transform);

        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(hostElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1));
      }); // Wait for all animation to finish, then destroy their elements


      this.hideMiniFab = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(obs).subscribe(function () {
        return _this4.miniFabVisible = false;
      });
    }
  }, {
    key: "getTranslateFunction",
    value: function getTranslateFunction(value) {
      var dir = this._parent.direction;
      var translateFn = dir === 'up' || dir === 'down' ? 'translateY' : 'translateX';
      var sign = dir === 'down' || dir === 'right' ? '-' : '';
      return translateFn + '(' + sign + value + ')';
    }
  }, {
    key: "changeElementStyle",
    value: function changeElementStyle(elem, style, value) {
      // FIXME - Find a way to create a "wrapper" around the action button(s) provided by the user, so we don't change it's style tag
      this.renderer.setStyle(elem, style, value);
    }
  }]);

  return EcoFabSpeedDialActionsComponent;
}();

EcoFabSpeedDialActionsComponent.ɵfac = function EcoFabSpeedDialActionsComponent_Factory(t) {
  return new (t || EcoFabSpeedDialActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]));
};

EcoFabSpeedDialActionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: EcoFabSpeedDialActionsComponent,
  selectors: [["eco-fab-speed-dial-actions"]],
  contentQueries: function EcoFabSpeedDialActionsComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], 0);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._buttons = _t);
    }
  },
  ngContentSelectors: _c1,
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"]],
  template: function EcoFabSpeedDialActionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EcoFabSpeedDialActionsComponent_ng_content_0_Template, 1, 0, "ng-content", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.miniFabVisible);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
  encapsulation: 2
});

EcoFabSpeedDialActionsComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
  }];
};

EcoFabSpeedDialActionsComponent.propDecorators = {
  _buttons: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
    args: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EcoFabSpeedDialActionsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
    args: [{
      selector: 'eco-fab-speed-dial-actions',
      template: " <ng-content select=\"[mat-mini-fab]\" *ngIf=\"miniFabVisible\"></ng-content>"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
    }];
  }, {
    _buttons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
      args: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]]
    }]
  });
})();
/** @dynamic @see https://github.com/angular/angular/issues/20351#issuecomment-344009887 */


var EcoFabSpeedDialComponent = /*#__PURE__*/function () {
  function EcoFabSpeedDialComponent(elementRef, renderer, document) {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EcoFabSpeedDialComponent);

    this.elementRef = elementRef;
    this.renderer = renderer;
    this.document = document;
    this.isInitialized = false;
    this._direction = 'up';
    this._open = false;
    this._animationMode = 'fling';
    this._fixed = false;
    this._documentClickUnlistener = null;
    this.openChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
  }
  /**
   * Whether this speed dial is fixed on screen (user cannot change it by clicking)
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EcoFabSpeedDialComponent, [{
    key: "fixed",
    get: function get() {
      return this._fixed;
    },
    set: function set(fixed) {
      this._fixed = fixed;

      this._processOutsideClickState();
    }
    /**
     * Whether this speed dial is opened
     */

  }, {
    key: "open",
    get: function get() {
      return this._open;
    },
    set: function set(open) {
      var previousOpen = this._open;
      this._open = open;

      if (previousOpen !== this._open) {
        this.openChange.emit(this._open);

        if (this.isInitialized) {
          this.setActionsVisibility();
        }
      }
    }
    /**
     * The direction of the speed dial. Can be 'up', 'down', 'left' or 'right'
     */

  }, {
    key: "direction",
    get: function get() {
      return this._direction;
    },
    set: function set(direction) {
      var previousDirection = this._direction;
      this._direction = direction;

      if (previousDirection !== this.direction) {
        this._setElementClass(previousDirection, false);

        this._setElementClass(this.direction, true);

        if (this.isInitialized) {
          this.setActionsVisibility();
        }
      }
    }
    /**
     * The animation mode to open the speed dial. Can be 'fling' or 'scale'
     */

  }, {
    key: "animationMode",
    get: function get() {
      return this._animationMode;
    },
    set: function set(animationMode) {
      var _this5 = this;

      var previousAnimationMode = this._animationMode;
      this._animationMode = animationMode;

      if (previousAnimationMode !== this._animationMode) {
        this._setElementClass(previousAnimationMode, false);

        this._setElementClass(this.animationMode, true);

        if (this.isInitialized) {
          // To start another detect lifecycle and force the "close" on the action buttons
          Promise.resolve(null).then(function () {
            return _this5.open = false;
          });
        }
      }
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      this.isInitialized = true;
      this.setActionsVisibility();

      this._setElementClass(this.direction, true);

      this._setElementClass(this.animationMode, true);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._unsetDocumentClickListener();
    }
    /**
     * Toggle the open state of this speed dial
     */

  }, {
    key: "toggle",
    value: function toggle() {
      this.open = !this.open;
    }
  }, {
    key: "_onClick",
    value: function _onClick() {
      if (!this.fixed && this.open) {
        this.open = false;
      }
    }
  }, {
    key: "setActionsVisibility",
    value: function setActionsVisibility() {
      if (!this._childActions) {
        return;
      }

      if (this.open) {
        this._childActions.show();
      } else {
        this._childActions.hide();
      }

      this._processOutsideClickState();
    }
  }, {
    key: "_setElementClass",
    value: function _setElementClass(elemClass, isAdd) {
      var finalClass = "eco-".concat(elemClass);

      if (isAdd) {
        this.renderer.addClass(this.elementRef.nativeElement, finalClass);
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, finalClass);
      }
    }
  }, {
    key: "_processOutsideClickState",
    value: function _processOutsideClickState() {
      if (!this.fixed && this.open) {
        this._setDocumentClickListener();
      } else {
        this._unsetDocumentClickListener();
      }
    }
  }, {
    key: "_setDocumentClickListener",
    value: function _setDocumentClickListener() {
      var _this6 = this;

      if (!this._documentClickUnlistener) {
        this._documentClickUnlistener = this.renderer.listen(this.document, 'click', function () {
          _this6.open = false;
        });
      }
    }
  }, {
    key: "_unsetDocumentClickListener",
    value: function _unsetDocumentClickListener() {
      if (this._documentClickUnlistener) {
        this._documentClickUnlistener();

        this._documentClickUnlistener = null;
      }
    }
  }]);

  return EcoFabSpeedDialComponent;
}();

EcoFabSpeedDialComponent.ɵfac = function EcoFabSpeedDialComponent_Factory(t) {
  return new (t || EcoFabSpeedDialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
};

EcoFabSpeedDialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: EcoFabSpeedDialComponent,
  selectors: [["eco-fab-speed-dial"]],
  contentQueries: function EcoFabSpeedDialComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, EcoFabSpeedDialActionsComponent, 1);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._childActions = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function EcoFabSpeedDialComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EcoFabSpeedDialComponent_click_HostBindingHandler() {
        return ctx._onClick();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("eco-opened", ctx.open);
    }
  },
  inputs: {
    fixed: "fixed",
    open: "open",
    direction: "direction",
    animationMode: "animationMode"
  },
  outputs: {
    openChange: "openChange"
  },
  ngContentSelectors: _c3,
  decls: 3,
  vars: 0,
  consts: [[1, "eco-fab-speed-dial-container"]],
  template: function EcoFabSpeedDialComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  styles: ["eco-fab-speed-dial{display:inline-block}eco-fab-speed-dial.eco-opened .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin180{transform:rotate(180deg)}eco-fab-speed-dial.eco-opened .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin360{transform:rotate(1turn)}eco-fab-speed-dial .eco-fab-speed-dial-container{align-items:center;display:flex;position:relative;z-index:20}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{pointer-events:auto;z-index:24}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin180,eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin360{transition:all .6s cubic-bezier(.4,0,.2,1)}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-actions{display:flex;height:0;position:absolute;width:0}eco-fab-speed-dial.eco-fling .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{display:block;opacity:1;transition:all .3s cubic-bezier(.55,0,.55,.2)}eco-fab-speed-dial.eco-scale .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{transform:scale(0);transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:.14286s}eco-fab-speed-dial.eco-down eco-fab-speed-dial-actions{bottom:2px;left:7px}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container{flex-direction:column}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:1}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:column;order:2}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-top:10px}eco-fab-speed-dial.eco-up eco-fab-speed-dial-actions{left:7px;top:2px}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container{flex-direction:column}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:2}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:column-reverse;order:1}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-bottom:10px}eco-fab-speed-dial.eco-left eco-fab-speed-dial-actions{left:2px;top:7px}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container{flex-direction:row}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:2}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:row-reverse;order:1}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-right:10px}eco-fab-speed-dial.eco-right eco-fab-speed-dial-actions{right:2px;top:7px}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container{flex-direction:row}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:1}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:row;order:2}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-left:10px}"],
  encapsulation: 2
});

EcoFabSpeedDialComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
  }, {
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
    }]
  }];
};

EcoFabSpeedDialComponent.propDecorators = {
  fixed: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  open: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
    args: ['class.eco-opened']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  direction: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  animationMode: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  openChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  _childActions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
    args: [EcoFabSpeedDialActionsComponent]
  }],
  _onClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['click']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EcoFabSpeedDialComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
    args: [{
      selector: 'eco-fab-speed-dial',
      template: "\n        <div class=\"eco-fab-speed-dial-container\">\n            <ng-content select=\"eco-fab-speed-dial-trigger\"></ng-content>\n            <ng-content select=\"eco-fab-speed-dial-actions\"></ng-content>\n        </div>\n    ",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
      styles: ["eco-fab-speed-dial{display:inline-block}eco-fab-speed-dial.eco-opened .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin180{transform:rotate(180deg)}eco-fab-speed-dial.eco-opened .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin360{transform:rotate(1turn)}eco-fab-speed-dial .eco-fab-speed-dial-container{align-items:center;display:flex;position:relative;z-index:20}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{pointer-events:auto;z-index:24}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin180,eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin360{transition:all .6s cubic-bezier(.4,0,.2,1)}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-actions{display:flex;height:0;position:absolute;width:0}eco-fab-speed-dial.eco-fling .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{display:block;opacity:1;transition:all .3s cubic-bezier(.55,0,.55,.2)}eco-fab-speed-dial.eco-scale .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{transform:scale(0);transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:.14286s}eco-fab-speed-dial.eco-down eco-fab-speed-dial-actions{bottom:2px;left:7px}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container{flex-direction:column}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:1}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:column;order:2}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-top:10px}eco-fab-speed-dial.eco-up eco-fab-speed-dial-actions{left:7px;top:2px}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container{flex-direction:column}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:2}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:column-reverse;order:1}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-bottom:10px}eco-fab-speed-dial.eco-left eco-fab-speed-dial-actions{left:2px;top:7px}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container{flex-direction:row}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:2}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:row-reverse;order:1}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-right:10px}eco-fab-speed-dial.eco-right eco-fab-speed-dial-actions{right:2px;top:7px}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container{flex-direction:row}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:1}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:row;order:2}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-left:10px}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
    }, {
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
      }]
    }];
  }, {
    openChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    fixed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    open: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
      args: ['class.eco-opened']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    direction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    animationMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    _onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['click']
    }],
    _childActions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
      args: [EcoFabSpeedDialActionsComponent]
    }]
  });
})();

var EcoFabSpeedDialTriggerComponent = /*#__PURE__*/function () {
  function EcoFabSpeedDialTriggerComponent(injector) {
    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EcoFabSpeedDialTriggerComponent);

    this.spin = false;
    this._parent = injector.get(EcoFabSpeedDialComponent);
  }
  /**
   * Whether this trigger should spin (360dg) while opening the speed dial
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EcoFabSpeedDialTriggerComponent, [{
    key: "sp",
    get: function get() {
      return this.spin;
    }
  }, {
    key: "_onClick",
    value: function _onClick(event) {
      if (!this._parent.fixed) {
        this._parent.toggle();

        event.stopPropagation();
      }
    }
  }]);

  return EcoFabSpeedDialTriggerComponent;
}();

EcoFabSpeedDialTriggerComponent.ɵfac = function EcoFabSpeedDialTriggerComponent_Factory(t) {
  return new (t || EcoFabSpeedDialTriggerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]));
};

EcoFabSpeedDialTriggerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: EcoFabSpeedDialTriggerComponent,
  selectors: [["eco-fab-speed-dial-trigger"]],
  hostVars: 2,
  hostBindings: function EcoFabSpeedDialTriggerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EcoFabSpeedDialTriggerComponent_click_HostBindingHandler($event) {
        return ctx._onClick($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("eco-spin", ctx.sp);
    }
  },
  inputs: {
    spin: "spin"
  },
  ngContentSelectors: _c5,
  decls: 1,
  vars: 0,
  template: function EcoFabSpeedDialTriggerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});

EcoFabSpeedDialTriggerComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
  }];
};

EcoFabSpeedDialTriggerComponent.propDecorators = {
  sp: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
    args: ['class.eco-spin']
  }],
  spin: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  _onClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['click', ['$event']]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EcoFabSpeedDialTriggerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
    args: [{
      selector: 'eco-fab-speed-dial-trigger',
      template: " <ng-content select=\"[mat-fab]\"></ng-content>"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
    }];
  }, {
    spin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    sp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
      args: ['class.eco-spin']
    }],
    _onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['click', ['$event']]
    }]
  });
})();

var EcoFabSpeedDialModule = function EcoFabSpeedDialModule() {
  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EcoFabSpeedDialModule);
};

EcoFabSpeedDialModule.ɵfac = function EcoFabSpeedDialModule_Factory(t) {
  return new (t || EcoFabSpeedDialModule)();
};

EcoFabSpeedDialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: EcoFabSpeedDialModule
});
EcoFabSpeedDialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EcoFabSpeedDialModule, {
    declarations: function declarations() {
      return [EcoFabSpeedDialActionsComponent, EcoFabSpeedDialComponent, EcoFabSpeedDialTriggerComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]];
    },
    exports: function exports() {
      return [EcoFabSpeedDialActionsComponent, EcoFabSpeedDialComponent, EcoFabSpeedDialTriggerComponent];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EcoFabSpeedDialModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
      declarations: [EcoFabSpeedDialActionsComponent, EcoFabSpeedDialComponent, EcoFabSpeedDialTriggerComponent],
      exports: [EcoFabSpeedDialActionsComponent, EcoFabSpeedDialComponent, EcoFabSpeedDialTriggerComponent]
    }]
  }], null, null);
})();
/*
 * Public API Surface of fab-speed-dial
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=ecodev-fab-speed-dial.js.map

/***/ })

}]);
//# sourceMappingURL=default~app-administration-app-administration-module~apps-management-apps-management-module~content-~33e631e1.js.map