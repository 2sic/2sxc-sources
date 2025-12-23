(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-administration-app-administration-module~content-type-fields-content-type-fields-module"],{

/***/ "/Foi":
/*!******************************************************************************!*\
  !*** ./src/app/content-type-fields/services/content-types-fields.service.ts ***!
  \******************************************************************************/
/*! exports provided: webApiFieldsRoot, webApiFieldsAll, ContentTypesFieldsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiFieldsRoot", function() { return webApiFieldsRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiFieldsAll", function() { return webApiFieldsAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypesFieldsService", function() { return ContentTypesFieldsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app-administration/services/content-types.service */ "S36y");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/context */ "Iv+g");







var webApiFieldsRoot = 'admin/field/';
var webApiFieldsAll = webApiFieldsRoot + 'all';
var ContentTypesFieldsService = /** @class */ (function () {
    function ContentTypesFieldsService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    ContentTypesFieldsService.prototype.apiUrl = function (name) {
        return this.dnnContext.$2sxc.http.apiUrl(name);
    };
    ContentTypesFieldsService.prototype.typeListRetrieve = function () {
        return this.http.get(this.apiUrl(webApiFieldsRoot + 'DataTypes'), {
            params: { appid: this.context.appId.toString() }
        });
    };
    ContentTypesFieldsService.prototype.getInputTypesList = function () {
        return this.http
            .get(this.apiUrl(webApiFieldsRoot + 'InputTypes'), { params: { appid: this.context.appId.toString() } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (inputConfigs) {
            var inputTypeOptions = inputConfigs.map(function (config) {
                var option = {
                    dataType: config.Type.substring(0, config.Type.indexOf('-')),
                    inputType: config.Type,
                    label: config.Label,
                    description: config.Description,
                };
                return option;
            });
            return inputTypeOptions;
        }));
    };
    ContentTypesFieldsService.prototype.getFields = function (contentType) {
        return this.http
            .get(this.apiUrl(webApiFieldsAll), {
            params: { appid: this.context.appId.toString(), staticName: contentType.StaticName },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (fields) {
            var e_1, _a;
            if (fields) {
                try {
                    for (var fields_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
                        var fld = fields_1_1.value;
                        if (!fld.Metadata) {
                            continue;
                        }
                        var md = fld.Metadata;
                        var allMd = md.All;
                        var typeMd = md[fld.Type];
                        var inputMd = md[fld.InputType];
                        md.merged = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, allMd), typeMd), inputMd);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return)) _a.call(fields_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            return fields;
        }));
    };
    ContentTypesFieldsService.prototype.reOrder = function (idArray, contentType) {
        return this.http.post(this.apiUrl(webApiFieldsRoot + 'Sort'), null, {
            params: {
                appid: this.context.appId.toString(),
                contentTypeId: contentType.Id.toString(),
                order: JSON.stringify(idArray),
            },
        });
    };
    ContentTypesFieldsService.prototype.setTitle = function (item, contentType) {
        return this.http.post(this.apiUrl(_app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_5__["webApiTypeRoot"] + 'SetTitle'), null, {
            params: {
                appid: this.context.appId.toString(),
                contentTypeId: contentType.Id.toString(),
                attributeId: item.Id.toString(),
            },
        });
    };
    ContentTypesFieldsService.prototype.rename = function (item, contentType, newName) {
        return this.http.post(this.apiUrl(webApiFieldsRoot + 'Rename'), null, {
            params: {
                appid: this.context.appId.toString(),
                contentTypeId: contentType.Id.toString(),
                attributeId: item.Id.toString(),
                newName: newName,
            },
        });
    };
    ContentTypesFieldsService.prototype.delete = function (item, contentType) {
        if (item.IsTitle) {
            throw new Error('Can\'t delete Title');
        }
        return this.http.delete(this.apiUrl(webApiFieldsRoot + 'Delete'), {
            params: {
                appid: this.context.appId.toString(),
                contentTypeId: contentType.Id.toString(),
                attributeId: item.Id.toString(),
            },
        });
    };
    ContentTypesFieldsService.prototype.add = function (newField, contentTypeId) {
        return this.http.post(this.apiUrl(webApiFieldsRoot + 'Add'), null, {
            params: {
                AppId: this.context.appId.toString(),
                ContentTypeId: contentTypeId.toString(),
                Id: newField.Id.toString(),
                Type: newField.Type,
                InputType: newField.InputType,
                StaticName: newField.StaticName,
                IsTitle: newField.IsTitle.toString(),
                Index: newField.SortOrder.toString(),
            }
        });
    };
    ContentTypesFieldsService.prototype.updateInputType = function (id, staticName, inputType) {
        return this.http.post(this.apiUrl(webApiFieldsRoot + 'InputType'), null, {
            params: { appId: this.context.appId.toString(), attributeId: id.toString(), field: staticName, inputType: inputType }
        });
    };
    ContentTypesFieldsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_6__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    ContentTypesFieldsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_6__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], ContentTypesFieldsService);
    return ContentTypesFieldsService;
}());



/***/ }),

/***/ "S36y":
/*!**********************************************************************!*\
  !*** ./src/app/app-administration/services/content-types.service.ts ***!
  \**********************************************************************/
/*! exports provided: webApiTypeRoot, ContentTypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiTypeRoot", function() { return webApiTypeRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypesService", function() { return ContentTypesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/context */ "Iv+g");






var webApiTypeRoot = 'admin/type/';
var ContentTypesService = /** @class */ (function () {
    function ContentTypesService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    ContentTypesService.prototype.apiUrl = function (name) {
        return this.dnnContext.$2sxc.http.apiUrl(name);
    };
    ContentTypesService.prototype.retrieveContentType = function (staticName) {
        return this.http.get(this.apiUrl(webApiTypeRoot + 'get'), {
            params: { appId: this.context.appId.toString(), contentTypeId: staticName }
        });
    };
    ContentTypesService.prototype.retrieveContentTypes = function (scope) {
        return this.http.get(this.apiUrl(webApiTypeRoot + 'list'), {
            params: { appId: this.context.appId.toString(), scope: scope }
        });
    };
    ContentTypesService.prototype.getScopes = function () {
        return this.http.get(this.apiUrl(webApiTypeRoot + 'scopes'), {
            params: { appId: this.context.appId.toString() }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (scopes) {
            var scopeOptions = Object.keys(scopes).map(function (key) { return ({ name: scopes[key], value: key }); });
            return scopeOptions;
        }));
    };
    ContentTypesService.prototype.save = function (contentType) {
        return this.http.post(this.apiUrl(webApiTypeRoot + 'save'), contentType, {
            params: { appid: this.context.appId.toString() },
        });
    };
    ContentTypesService.prototype.delete = function (contentType) {
        return this.http.delete(this.apiUrl(webApiTypeRoot + 'delete'), {
            params: { appid: this.context.appId.toString(), staticName: contentType.StaticName },
        });
    };
    ContentTypesService.prototype.import = function (files) {
        var e_1, _a;
        var formData = new FormData();
        try {
            for (var files_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                var file = files_1_1.value;
                formData.append('File', file);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this.http.post(this.apiUrl(webApiTypeRoot + 'import'), formData, {
            params: { appId: this.context.appId.toString(), zoneId: this.context.zoneId.toString() }
        });
    };
    ContentTypesService.prototype.createGhost = function (sourceStaticName) {
        return this.http.post(this.apiUrl(webApiTypeRoot + 'addghost'), null, {
            params: { appid: this.context.appId.toString(), sourceStaticName: sourceStaticName },
        });
    };
    ContentTypesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    ContentTypesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], ContentTypesService);
    return ContentTypesService;
}());



/***/ }),

/***/ "f3iV":
/*!**************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js ***!
  \**************************************************************************************************************/
/*! exports provided: MatBadge, MatBadgeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBadge", function() { return MatBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBadgeModule", function() { return MatBadgeModule; });
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/createClass */ "MMYH");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/inherits */ "8K1b");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/createSuper */ "AqVP");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "9fIP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "sg/T");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/coercion */ "5XID");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "5lCh");









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
    key: "isAbove",

    /** Whether the badge is above the host or not */
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
  }, {
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
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatBadge, [{
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

MatBadgeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: MatBadgeModule
});
MatBadgeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  factory: function MatBadgeModule_Factory(t) {
    return new (t || MatBadgeModule)();
  },
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
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatBadgeModule, [{
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




/***/ })

}]);
//# sourceMappingURL=default~app-administration-app-administration-module~content-type-fields-content-type-fields-module.js.map