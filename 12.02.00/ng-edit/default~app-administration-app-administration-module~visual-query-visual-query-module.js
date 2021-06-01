(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-administration-app-administration-module~visual-query-visual-query-module"],{

/***/ "2VD3":
/*!********************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/base-template-vars.ts ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "6HSB":
/*!**********************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/app-administration/services/views.service.ts ***!
  \**********************************************************************************/
/*! exports provided: ViewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsService", function() { return ViewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");





var webApiViewRoot = 'admin/view/';
var webApiViews = webApiViewRoot + 'all';
var webApiViewDelete = webApiViewRoot + 'delete';
var webApiViewImport = webApiViewRoot + 'import';
var webApiViewPolymorph = webApiViewRoot + 'polymorphism';
var webApiViewUsage = webApiViewRoot + 'usage';
var ViewsService = /** @class */ (function () {
    function ViewsService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    ViewsService.prototype.getAll = function () {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiViews), {
            params: { appId: this.context.appId.toString() }
        });
    };
    ViewsService.prototype.delete = function (id) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiViewDelete), {
            params: { appId: this.context.appId.toString(), Id: id.toString() },
        });
    };
    ViewsService.prototype.import = function (file) {
        var formData = new FormData();
        formData.append('File', file);
        return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiViewImport), formData, {
            params: { appId: this.context.appId.toString(), zoneId: this.context.zoneId.toString() }
        });
    };
    ViewsService.prototype.export = function (id) {
        var url = this.dnnContext.$2sxc.http.apiUrl(webApiViewRoot + 'json')
            + '?appId=' + this.context.appId
            + '&viewId=' + id;
        window.open(url, '_blank', '');
    };
    ViewsService.prototype.getPolymorphism = function () {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiViewPolymorph), {
            params: { appId: this.context.appId.toString() }
        });
    };
    ViewsService.prototype.getUsage = function (guid) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiViewUsage), {
            params: { appId: this.context.appId.toString(), guid: guid }
        });
    };
    ViewsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    ViewsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], ViewsService);
    return ViewsService;
}());



/***/ }),

/***/ "7fiP":
/*!*****************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/routing-helpers.ts ***!
  \*****************************************************************/
/*! exports provided: fireOnStartAndWhenSubDialogCloses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fireOnStartAndWhenSubDialogCloses", function() { return fireOnStartAndWhenSubDialogCloses; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



// This observable fires when a sub-dialog was openend and closed again
function fireOnStartAndWhenSubDialogCloses(router, route) {
    return router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(!!route.snapshot.firstChild), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return !!route.snapshot.firstChild; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), prevHadChild = _b[0], newHasChild = _b[1];
        return prevHadChild && !newHasChild;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])([]) // this ensures it fires once in the beginning
    );
}


/***/ }),

/***/ "8mCj":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/dev-rest/selector-with-help/selector-with-help.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"selector\">\r\n  <mat-form-field color=\"accent\" class=\"selector__dropdown\">\r\n    <mat-label>{{ label }}</mat-label>\r\n    <mat-select [value]=\"value\" (selectionChange)=\"selectionChange($event.value)\">\r\n      <mat-option *ngFor=\"let item of items\" [value]=\"item.key\">{{ item.name }}</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <button mat-icon-button (click)=\"showHelp()\" matTooltip=\"Show help\">\r\n    <mat-icon>help_outline</mat-icon>\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "AaeK":
/*!**********************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/examples/code-sample.ts ***!
  \**********************************************************************/
/*! exports provided: CodeSample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSample", function() { return CodeSample; });
var CodeSample = /** @class */ (function () {
    function CodeSample(title, description, code, runInConsole, hints) {
        if (hints === void 0) { hints = []; }
        this.title = title;
        this.description = description;
        this.code = code;
        this.runInConsole = runInConsole;
        this.hints = hints;
        // the code often has a leading new-line - so we'll trim this
        this.code = this.code.trim();
    }
    return CodeSample;
}());



/***/ }),

/***/ "AfGV":
/*!*************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/data/data-template-vars.ts ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "BToE":
/*!*******************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/import-app/services/import-app.service.ts ***!
  \*******************************************************************************/
/*! exports provided: webApiAppRoot, ImportAppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiAppRoot", function() { return webApiAppRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportAppService", function() { return ImportAppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");





var webApiAppRoot = 'admin/app/';
var ImportAppService = /** @class */ (function () {
    function ImportAppService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    ImportAppService.prototype.importApp = function (file, changedName) {
        var formData = new FormData();
        formData.append('File', file);
        formData.append('Name', changedName ? changedName : '');
        return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiAppRoot + 'Import'), formData, {
            params: { zoneId: this.context.zoneId.toString() }
        });
    };
    ImportAppService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    ImportAppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], ImportAppService);
    return ImportAppService;
}());



/***/ }),

/***/ "Egor":
/*!*****************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/scenarios/index.ts ***!
  \*****************************************************************/
/*! exports provided: AllScenarios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _all_scenarios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-scenarios */ "UwBx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AllScenarios", function() { return _all_scenarios__WEBPACK_IMPORTED_MODULE_0__["AllScenarios"]; });

/* harmony import */ var _scenario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenario */ "enPw");
/* empty/unused harmony star reexport */



/***/ }),

/***/ "G+Tf":
/*!****************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/examples/index.ts ***!
  \****************************************************************/
/*! exports provided: infoBoxIconMap, Hint, ApiCall, CodeSample, generateApiCalls, hint$2sxc, warningSimpleSampleOnly, warningExternal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hint$2sxc", function() { return hint$2sxc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningSimpleSampleOnly", function() { return warningSimpleSampleOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningExternal", function() { return warningExternal; });
/* harmony import */ var _info_box_hint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../info-box/hint */ "maSM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "infoBoxIconMap", function() { return _info_box_hint__WEBPACK_IMPORTED_MODULE_0__["infoBoxIconMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hint", function() { return _info_box_hint__WEBPACK_IMPORTED_MODULE_0__["Hint"]; });

/* harmony import */ var _api_call__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-call */ "j2U7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiCall", function() { return _api_call__WEBPACK_IMPORTED_MODULE_1__["ApiCall"]; });

/* harmony import */ var _code_sample__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code-sample */ "AaeK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeSample", function() { return _code_sample__WEBPACK_IMPORTED_MODULE_2__["CodeSample"]; });

/* harmony import */ var _generate_samples__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-samples */ "Z00V");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateApiCalls", function() { return _generate_samples__WEBPACK_IMPORTED_MODULE_3__["generateApiCalls"]; });






var hint$2sxc = new _info_box_hint__WEBPACK_IMPORTED_MODULE_0__["Hint"]('tip', "The <code>$2sxc</code> is a helper JS from 2sxc. It's always included for super-users (hosts).\nBut if you need normal visitors to use the API, you must request it in your Razor using @Edit.Enable(...).\n<a href=\"https://r.2sxc.org/js-2sxc-root\" target=\"_blank\">see docs</a>");
var warningSimpleSampleOnly = new _info_box_hint__WEBPACK_IMPORTED_MODULE_0__["Hint"]('warning', "WARNING: We only prepared the basic example running in the same app. You can of course also run this elsewhere,\nbut you'll have to compare it with the GET examples to be sure you have the right headers etc. ", '');
var warningExternal = new _info_box_hint__WEBPACK_IMPORTED_MODULE_0__["Hint"]('alert', 'IMPORTANT: This will only work if you set anonymous permissions on the content-type.');


/***/ }),

/***/ "LBgr":
/*!*******************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/index.ts ***!
  \*******************************************************/
/*! exports provided: DevRestBase, GoToDevRest, AllScenarios, infoBoxIconMap, Hint, ApiCall, CodeSample, generateApiCalls, hint$2sxc, warningSimpleSampleOnly, warningExternal, HelpPopupComponent, SelectorWithHelpComponent, fireOnStartAndWhenSubDialogCloses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dev_rest_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dev-rest-base.component */ "m//V");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DevRestBase", function() { return _dev_rest_base_component__WEBPACK_IMPORTED_MODULE_0__["DevRestBase"]; });

/* harmony import */ var _base_template_vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-template-vars */ "2VD3");
/* empty/unused harmony star reexport *//* harmony import */ var _go_to_dev_rest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./go-to-dev-rest */ "NbiY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoToDevRest", function() { return _go_to_dev_rest__WEBPACK_IMPORTED_MODULE_2__["GoToDevRest"]; });

/* harmony import */ var _scenarios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenarios */ "Egor");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AllScenarios", function() { return _scenarios__WEBPACK_IMPORTED_MODULE_3__["AllScenarios"]; });

/* harmony import */ var _examples__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples */ "G+Tf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "infoBoxIconMap", function() { return _examples__WEBPACK_IMPORTED_MODULE_4__["infoBoxIconMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hint", function() { return _examples__WEBPACK_IMPORTED_MODULE_4__["Hint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiCall", function() { return _examples__WEBPACK_IMPORTED_MODULE_4__["ApiCall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeSample", function() { return _examples__WEBPACK_IMPORTED_MODULE_4__["CodeSample"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateApiCalls", function() { return _examples__WEBPACK_IMPORTED_MODULE_4__["generateApiCalls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hint$2sxc", function() { return _examples__WEBPACK_IMPORTED_MODULE_4__["hint$2sxc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warningSimpleSampleOnly", function() { return _examples__WEBPACK_IMPORTED_MODULE_4__["warningSimpleSampleOnly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warningExternal", function() { return _examples__WEBPACK_IMPORTED_MODULE_4__["warningExternal"]; });

/* harmony import */ var _data_data_template_vars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/data-template-vars */ "AfGV");
/* empty/unused harmony star reexport *//* harmony import */ var _query_query_template_vars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./query/query-template-vars */ "RSRt");
/* empty/unused harmony star reexport *//* harmony import */ var _help_popup_help_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./help-popup/help-popup.component */ "sYr7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HelpPopupComponent", function() { return _help_popup_help_popup_component__WEBPACK_IMPORTED_MODULE_7__["HelpPopupComponent"]; });

/* harmony import */ var _selector_with_help_selector_with_help_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selector-with-help/selector-with-help.component */ "pqGq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectorWithHelpComponent", function() { return _selector_with_help_selector_with_help_component__WEBPACK_IMPORTED_MODULE_8__["SelectorWithHelpComponent"]; });

/* harmony import */ var _routing_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routing-helpers */ "7fiP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fireOnStartAndWhenSubDialogCloses", function() { return _routing_helpers__WEBPACK_IMPORTED_MODULE_9__["fireOnStartAndWhenSubDialogCloses"]; });













/***/ }),

/***/ "LNjK":
/*!*****************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/shared/helpers/file-to-base64.helper.ts ***!
  \*****************************************************************************/
/*! exports provided: toBase64, toString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBase64", function() { return toBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
function toBase64(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            resolve(reader.result.split(',')[1]);
        };
        reader.onerror = function (error) {
            reject(error);
        };
    });
}
function toString(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function () {
            resolve(reader.result);
        };
        reader.onerror = function (error) {
            reject(error);
        };
    });
}


/***/ }),

/***/ "NG6K":
/*!*************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/app-administration/services/web-apis.service.ts ***!
  \*************************************************************************************/
/*! exports provided: WebApisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebApisService", function() { return WebApisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _edit_shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../edit/shared/services */ "5t3I");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");







var WebApisService = /** @class */ (function () {
    function WebApisService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    WebApisService.prototype.getAll = function () {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services__WEBPACK_IMPORTED_MODULE_5__["webApiAppFilesAll"]), {
            params: { appId: this.context.appId.toString(), global: 'false', path: '', mask: '*Controller.cs', withSubfolders: 'true' },
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (paths) {
            var webApis = paths.map(function (path) {
                var splitIndex = path.lastIndexOf('/');
                var fileExtIndex = path.lastIndexOf('.');
                var folder = path.substring(0, splitIndex);
                var name = path.substring(splitIndex + 1, fileExtIndex);
                var webApi = { path: path, folder: folder, name: name };
                return webApi;
            });
            return webApis;
        }));
    };
    WebApisService.prototype.create = function (name) {
        return this.http.post(this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services__WEBPACK_IMPORTED_MODULE_5__["webApiAppFileCreate"]), {}, {
            params: { appId: this.context.appId.toString(), purpose: 'api', global: 'false', path: "api/" + name },
        });
    };
    WebApisService.prototype.details = function (apiPath) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services__WEBPACK_IMPORTED_MODULE_5__["webApiExplorer"]), {
            params: { path: apiPath },
        });
    };
    WebApisService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_6__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    WebApisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_6__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], WebApisService);
    return WebApisService;
}());



/***/ }),

/***/ "NbiY":
/*!****************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/go-to-dev-rest.ts ***!
  \****************************************************************/
/*! exports provided: GoToDevRest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoToDevRest", function() { return GoToDevRest; });
var base = 'restapi';
var GoToDevRest = {
    routeData: 'data',
    paramTypeName: 'contentTypeStaticName',
    paramQuery: 'queryGuid',
    paramApiPath: 'webApiPath',
    goToData: function (contentType) {
        return base + "/data/" + contentType.StaticName;
    },
    goToQuery: function (queryGuid) {
        return base + "/query/" + queryGuid;
    },
    goToWebApi: function (api) {
        return base + "/custom/" + encodeURIComponent(api.path);
    },
    /**
     * The route definition for use in all routing components which can route to this dialog
     */
    route: {
        path: base,
        loadChildren: function () { return Promise.all(/*! import() | dev-rest-module */[__webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~5cd8229e"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~8dad88b1"), __webpack_require__.e("default~app-administration-app-administration-module~dev-rest-module~item-history-item-history-modul~33ae364d"), __webpack_require__.e("default~app-administration-app-administration-module~content-type-fields-content-type-fields-module~~a0153aaf"), __webpack_require__.e("default~dev-rest-module~edit-edit-module"), __webpack_require__.e("dev-rest-module")]).then(__webpack_require__.bind(null, /*! ./dev-rest.module */ "TOGz")).then(function (m) { return m.DevRestModule; }); }
    },
};


/***/ }),

/***/ "OGde":
/*!*********************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/app-administration/services/import-app-parts.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: webApiAppPartsRoot, ImportAppPartsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiAppPartsRoot", function() { return webApiAppPartsRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportAppPartsService", function() { return ImportAppPartsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../import-app/services/import-app.service */ "BToE");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");






var webApiAppPartsRoot = 'admin/appParts/';
var ImportAppPartsService = /** @class */ (function () {
    function ImportAppPartsService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    ImportAppPartsService.prototype.importAppParts = function (file) {
        var formData = new FormData();
        formData.append('File', file);
        return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiAppPartsRoot + 'Import'), formData, {
            params: { appId: this.context.appId.toString(), zoneId: this.context.zoneId.toString() }
        });
    };
    /** Reset the App back to the state it was in the last xml export */
    ImportAppPartsService.prototype.resetApp = function () {
        return this.http.post(this.dnnContext.$2sxc.http.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_4__["webApiAppRoot"] + 'Reset'), {}, {
            params: { appId: this.context.appId.toString(), zoneId: this.context.zoneId.toString() }
        });
    };
    ImportAppPartsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    ImportAppPartsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], ImportAppPartsService);
    return ImportAppPartsService;
}());



/***/ }),

/***/ "QCbL":
/*!*********************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/app-administration/services/export-app-parts.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: ExportAppPartsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportAppPartsService", function() { return ExportAppPartsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");
/* harmony import */ var _import_app_parts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./import-app-parts.service */ "OGde");






var ExportAppPartsService = /** @class */ (function () {
    function ExportAppPartsService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    ExportAppPartsService.prototype.getContentInfo = function (scope) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_import_app_parts_service__WEBPACK_IMPORTED_MODULE_5__["webApiAppPartsRoot"] + 'Get'), {
            params: { appid: this.context.appId.toString(), zoneId: this.context.zoneId.toString(), scope: scope },
        });
    };
    ExportAppPartsService.prototype.exportParts = function (contentTypeIds, entityIds, templateIds) {
        var url = this.dnnContext.$2sxc.http.apiUrl(_import_app_parts_service__WEBPACK_IMPORTED_MODULE_5__["webApiAppPartsRoot"] + 'Export')
            + '?appId=' + this.context.appId.toString()
            + '&zoneId=' + this.context.zoneId.toString()
            + '&contentTypeIdsString=' + contentTypeIds.join(';')
            + '&entityIdsString=' + entityIds.join(';')
            + '&templateIdsString=' + templateIds.join(';');
        window.open(url, '_blank', '');
    };
    ExportAppPartsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    ExportAppPartsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], ExportAppPartsService);
    return ExportAppPartsService;
}());



/***/ }),

/***/ "RSRt":
/*!***************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/query/query-template-vars.ts ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "Tgur":
/*!**********************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/permissions/go-to-permissions.ts ***!
  \**********************************************************************/
/*! exports provided: GoToPermissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoToPermissions", function() { return GoToPermissions; });
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants/eav.constants */ "qb9A");

/**
 * Navigation system to access permissions dialogs as sub-dialogs for many use cases
 */
var GoToPermissions = {
    go: function (targetType, keyType, key) {
        return "permissions/" + targetType + "/" + keyType + "/" + key;
    },
    /** Go to edit permissions for entity */
    goEntity: function (key) {
        return this.go(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__["eavConstants"].metadata.entity.type, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__["eavConstants"].keyTypes.guid, key);
    },
    /** Go to edit permissions for content-type. For historic reasons, it's the same as Entity */
    goContentType: function (key) {
        return this.goEntity(key);
    },
    goAttribute: function (id) {
        return this.go(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__["eavConstants"].metadata.attribute.type, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__["eavConstants"].keyTypes.number, id);
    },
    goApp: function (appId) {
        return this.go(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__["eavConstants"].metadata.app.type, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__["eavConstants"].keyTypes.number, appId);
    },
    /**
     * The route definition for use in all routing components which can route to this dialog
     */
    route: {
        path: 'permissions/:type/:keyType/:key',
        loadChildren: function () { return __webpack_require__.e(/*! import() | permissions-module */ "default~app-administration-app-administration-module~permissions-module~permissions-permissions-modu~afd5f2f2").then(__webpack_require__.bind(null, /*! ./permissions.module */ "vhtq")).then(function (m) { return m.PermissionsModule; }); },
        data: { title: 'Permission' },
    },
};


/***/ }),

/***/ "UwBx":
/*!*************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/scenarios/all-scenarios.ts ***!
  \*************************************************************************/
/*! exports provided: AllScenarios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllScenarios", function() { return AllScenarios; });
var AllScenarios = [
    {
        key: 'internal',
        in2sxc: true,
        useVirtual: true,
        inSameSite: true,
        inSameContext: true,
        name: 'JS in this App on a page (easiest)',
        description: "Internal access means that your JS code is running in a 2sxc-module on a DNN-page.\n    This is the default access.\n    In this scenario, various headers are included in the request,\n    incl. the module it's coming from, which allows various automatic things to happen.\n    This results in simpler REST requests.",
        notes: "This mode makes it easy to re-distribute your app, as you can perform API calls relative to the module that's hosting it.\n    This means, that even if you export/import the app to another system, the API-calls stay the same.",
    },
    {
        key: 'internal2',
        in2sxc: true,
        useVirtual: true,
        inSameSite: true,
        inSameContext: false,
        name: 'JS in a DIFFERENT 2sxc App on the SAME site',
        description: "When using JS from another app, you cannot auto-detect of the app, so the path is slightly different.",
        notes: '',
    },
    // {
    //   key: 'external1',
    //   in2sxc: false,
    //   useVirtual: false,
    //   inSameSite: false,
    //   inSameContext: false,
    //   name: 'JS from a DIFFERENT site',
    //   description: `When coding from another site, the path needs to be complete (not virtual), since auto-detection of site etc. can't work.
    //   In addition, most DNN-headers cause trouble because they tell the server a context which isn't actually true. `,
    //   notes: '',
    // },
    {
        key: 'external',
        in2sxc: false,
        useVirtual: false,
        inSameSite: false,
        inSameContext: false,
        needsAnonymous: true,
        name: 'External (other website, mobile device, etc.)',
        description: "External access means that the JS code could be on another page / module in DNN (which is not the same app),\n    or it could be coming from a mobile App, or another website altogether.\n    In this case, automatic app-detection can't work, as various headers are missing, and you must access the endpoint more explicitly.",
        notes: "This mode requires you to define the exact, full URL, so if you create copies of this app on another system,\n    the URL must be updated to access that system specifically.\n    Note that our samples are in JS, you'll have to figure it out yourself for other programming languages.",
    },
];


/***/ }),

/***/ "Z00V":
/*!***************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/examples/generate-samples.ts ***!
  \***************************************************************************/
/*! exports provided: generateApiCalls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateApiCalls", function() { return generateApiCalls; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "LBgr");

// tslint:disable: curly
function generateApiCalls($2sxc, scenario, context, root, id) {
    var virtual = root[0] !== '/' && !root.startsWith('http');
    root = root + '/';
    var withId = root + id;
    var contextParams = virtual ? "?PageId=" + context.tabId + "&ModuleId=" + context.moduleId : '';
    var directUrl = $2sxc.http.apiUrl(root) + contextParams;
    var directWId = $2sxc.http.apiUrl(withId) + contextParams;
    return [
        new ___WEBPACK_IMPORTED_MODULE_0__["ApiCall"](virtual, 'GET', root, 'read all', 'Read list of all items', true, snippetsGet(scenario, root, context), directUrl),
        new ___WEBPACK_IMPORTED_MODULE_0__["ApiCall"](virtual, 'GET', withId, 'read one', 'Read a single item #' + id, true, snippetsGet(scenario, withId, context), directWId),
        new ___WEBPACK_IMPORTED_MODULE_0__["ApiCall"](virtual, 'POST', root, 'create', 'Create an item', false, snippetsCreate(scenario, root, context.moduleId)),
        new ___WEBPACK_IMPORTED_MODULE_0__["ApiCall"](virtual, 'POST', withId, 'update', 'Update the item #' + id, false, snippetsUpdate(scenario, withId, context.moduleId)),
        new ___WEBPACK_IMPORTED_MODULE_0__["ApiCall"](virtual, 'DELETE', withId, 'delete', 'Delete item #' + id, false, snippetsDelete(scenario, withId, context.moduleId)),
    ];
}
function snippetsGet(scenario, path, context) {
    var moduleId = context.moduleId;
    var virtual = path[0] !== '/';
    var list = [];
    var pathWithContext = path + "?PageId=" + context.tabId + "&ModuleId=" + context.moduleId;
    if (scenario.inSameContext)
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Example with global $2sxc and event-context', 'This example finds the context information from the HTML where an action started.', "\n<button onclick=\"$2sxc(this).webApi.get('" + path + "').then(data => console.log(data))\">\n  get it\n</button>", false, [___WEBPACK_IMPORTED_MODULE_0__["hint$2sxc"]]));
    if (scenario.in2sxc)
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]("Example with global $2sxc and a Module-Id " + moduleId, "This is how you get the context when your code doesn't start with a DOM context, so you need the moduleId.", "\n// get the sxc-controller for this module\nvar sxc = $2sxc(" + moduleId + ");\n// now get the data in the promise\nsxc.webApi.get('" + path + "')\n  .then(data => {\n    console.log(data)\n  });", false, [___WEBPACK_IMPORTED_MODULE_0__["hint$2sxc"]]), new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]("Same example as one-liner", 'This is the same as above, but as a one-liner so you can run it directly in the F12 console right now.', "$2sxc(" + moduleId + ").webApi.get('" + path + "').then(data => console.log('just got:', data));", true));
    if (scenario.in2sxc && scenario.inSameContext)
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Example where you get the Module-Id from Razor', "This example doesn't use a fixed moduleId but let's the Razor add the current moduleId when the page is rendered.", "\n// this will be replaced on the server with the ID\nvar moduleId = @Dnn.Module.ModuleID;\nvar sxc = $2sxc(moduleId);\nvar promise = sxc.webApi.get('" + path + "');", false, [___WEBPACK_IMPORTED_MODULE_0__["hint$2sxc"]]));
    // jquery examples, they differ based on the scenario
    var endPointGetter = virtual ? "$2sxc.http.apiUrl('" + path + "')" : "'" + path + "'";
    var endPointGetWithParams = virtual ? "$2sxc.http.apiUrl('" + pathWithContext + "')" : "'" + pathWithContext + "'";
    if (scenario.inSameSite) {
        // jQuery using setModuleHeaders
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Using jQuery inside DNN', "This example uses jQuery instead of the $2sxc to do the AJAX call.\n      It shows you how to resolve the virtual path for use in other ways.", "\nvar endpoint = " + endPointGetter + ";\n$.ajax({\n  url:endpoint,\n  beforeSend: $.dnnSF(" + moduleId + ").setModuleHeaders\n}).then(data => {\n  console.log('Got this data:', data);\n})", false, []));
        // jQuery Single-Liner
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Using jQuery as single-liner', "The same example as above, just as single-liner so you can test it directly in the F12 console.\n      This will only work if you're on a DNN page with this module.", "$.ajax({url: " + endPointGetter + ", beforeSend: $.dnnSF(" + moduleId + ").setModuleHeaders }).then(data => console.log(data))", false, []));
        // jQuery without setModuleHeaders
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Using jQuery and add Context in URL', "This example uses jQuery instead of the $2sxc to do the AJAX call.\n      But instead of using the DNN Services Framework it adds relevant headers to the url.", "\n$.ajax(" + endPointGetWithParams + ").then(data => {\n  console.log('Got this data:', data);\n})", false, []));
        // jQuery Single-Liner without SetModuleHeaders
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Using jQuery with url-context as single-liner', "The same example as above, just as single-liner so you can test it directly in the F12 console.\n      This will work on a DNN page which has jQuery activated. ", "$.ajax(" + endPointGetWithParams + ").then(data => console.log(data))", false, []));
    }
    else {
        // jQuery External
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Using jQuery in another Site or External', "This example uses jQuery and doesn't use $2sxc or the DNN ServicesFramework,\n      because they would be either missing, or give wrong context-headers.", "\n$.ajax('" + path + "').then(data => {\n  console.log('Got this data:', data);\n})", false, [___WEBPACK_IMPORTED_MODULE_0__["warningExternal"]]));
        // jQuery External with Context
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Using jQuery with Context in URL', "This example uses jQuery and includes a module-context. This is unusual for external access, but may be needed sometime.", "\n$.ajax('" + pathWithContext + "').then(data => {\n  console.log('Got this data:', data);\n})", false, [___WEBPACK_IMPORTED_MODULE_0__["warningExternal"]]));
    }
    // return generated snippets
    return list;
}
/** Snippets for basic Post-Create */
function snippetsCreate(scenario, path, moduleId) {
    var showWarning = !scenario.inSameContext;
    return [
        new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Basic Example', "This example uses the ModuleId to get the context information.\nTo see other ways to get the context and headers, check out the GET examples.\nNote that this snippet doesn't use real names of properties to add.", "// get the sxc-controller for this module\nvar sxc = $2sxc(" + moduleId + ");\n\n// The object we'll send to get created. It's just a simple object with properties\nvar newThing = {\n  property1: 17,\n  property2: 'Some Text',\n  // related items like tags can be assigned with IDs\n  // which you would usually get from somewhere first\n  propertyPointingToOtherIds: [74,50203],\n};\n\n// now create it and get the id back\nsxc.webApi.post('" + path + "', newThing)\n  .then(data => {\n    console.log('Got this ID information: ', data)\n  });", false, showWarning ? [___WEBPACK_IMPORTED_MODULE_0__["warningSimpleSampleOnly"]] : []),
    ];
}
/** Snippets for basic Post-Update */
function snippetsUpdate(scenario, path, moduleId) {
    var showWarning = !scenario.inSameContext;
    return [
        new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Basic Example', "This example uses the ModuleId to get the context information.\nTo see other ways to get the context and headers, check out the GET examples.\nNote that this snippet doesn't use real names of properties to add.", "// get the sxc-controller for this module\nvar sxc = $2sxc(" + moduleId + ");\n\n// The object we'll send to update the data. It's just a simple object with properties\nvar updateProperty1And2 = {\n  property1: 2742,\n  property2: 'Changed Text',\n};\n\n// now update the item\nsxc.webApi.post('" + path + "', updateProperty1And2)\n  .then(data => {\n    console.log('Update completed', data)\n  });", false, showWarning ? [___WEBPACK_IMPORTED_MODULE_0__["warningSimpleSampleOnly"]] : []),
    ];
}
/** Snippets for basic Post-Update */
function snippetsDelete(scenario, path, moduleId) {
    var showWarning = !scenario.inSameContext;
    return [
        new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Basic Example', "This example uses the ModuleId to get the context information.\nTo see other ways to get the context and headers, check out the GET examples.\nNote that this snippet doesn't use real names of properties to add.", "// get the sxc-controller for this module\nvar sxc = $2sxc(" + moduleId + ");\n\n// delete the item\nsxc.webApi.delete('" + path + "')\n  .then(data => {\n    console.log('Delete completed', data)\n  });", false, showWarning ? [___WEBPACK_IMPORTED_MODULE_0__["warningSimpleSampleOnly"]] : []),
    ];
}


/***/ }),

/***/ "boCP":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/dev-rest/help-popup/help-popup.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title>\r\n  <div class=\"dialog-title-box\">\r\n    <div>{{ dialogData.name }}</div>\r\n    <button mat-icon-button matTooltip=\"Close dialog\" (click)=\"closeDialog()\">\r\n      <mat-icon>close</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"dialog-component-content fancy-scrollbar-light\">\r\n  <p class=\"dialog-description\">\r\n    {{ dialogData.body }}\r\n  </p>\r\n\r\n  <p class=\"dialog-description\" *ngIf=\"dialogData.notes\">\r\n    <em>{{ dialogData.notes }}</em>\r\n  </p>\r\n</div>\r\n");

/***/ }),

/***/ "enPw":
/*!********************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/scenarios/scenario.ts ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "eues":
/*!**************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/app-administration/services/pipelines.service.ts ***!
  \**************************************************************************************/
/*! exports provided: webApiQueryRun, webApiQueryDebugStream, webApiQuerySave, webApiQueryGet, webApiQueryDataSources, PipelinesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiQueryRun", function() { return webApiQueryRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiQueryDebugStream", function() { return webApiQueryDebugStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiQuerySave", function() { return webApiQuerySave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiQueryGet", function() { return webApiQueryGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiQueryDataSources", function() { return webApiQueryDataSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelinesService", function() { return PipelinesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _edit_shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../edit/shared/services */ "5t3I");
/* harmony import */ var _shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/helpers/file-to-base64.helper */ "LNjK");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");









var webApiQueryRoot = 'admin/query/';
var webApiQueryImport = webApiQueryRoot + 'import';
var webApiQueryClone = webApiQueryRoot + 'Clone';
var webApiQueryDelete = webApiQueryRoot + 'Delete';
var webApiQueryRun = webApiQueryRoot + 'Run';
var webApiQueryDebugStream = webApiQueryRoot + 'DebugStream';
var webApiQuerySave = webApiQueryRoot + 'Save';
var webApiQueryGet = webApiQueryRoot + 'Get';
var webApiQueryDataSources = webApiQueryRoot + 'DataSources';
var PipelinesService = /** @class */ (function () {
    function PipelinesService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    PipelinesService.prototype.getAll = function (contentType) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services__WEBPACK_IMPORTED_MODULE_6__["webApiEntityList"]), {
            params: { appId: this.context.appId.toString(), contentType: contentType }
        });
    };
    PipelinesService.prototype.importQuery = function (file) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(Object(_shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_7__["toBase64"])(file)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (fileBase64) {
            return _this.http.post(_this.dnnContext.$2sxc.http.apiUrl(webApiQueryImport), {
                AppId: _this.context.appId.toString(),
                ContentBase64: fileBase64,
            });
        }));
    };
    PipelinesService.prototype.clonePipeline = function (id) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiQueryClone), {
            params: { Id: id.toString(), appId: this.context.appId.toString() }
        });
    };
    PipelinesService.prototype.delete = function (id) {
        return this.http.delete(this.dnnContext.$2sxc.http.apiUrl(webApiQueryDelete), {
            params: { appId: this.context.appId.toString(), Id: id.toString() },
        });
    };
    PipelinesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_8__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    PipelinesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_8__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], PipelinesService);
    return PipelinesService;
}());



/***/ }),

/***/ "gWX0":
/*!**********************************************************!*\
  !*** ./projects/ng-dialogs/src/app/permissions/index.ts ***!
  \**********************************************************/
/*! exports provided: GoToPermissions, Permission, permissionsDialog, PermissionsRoutingModule, PermissionsComponent, PermissionsModule, MetadataService, PermissionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _go_to_permissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./go-to-permissions */ "Tgur");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoToPermissions", function() { return _go_to_permissions__WEBPACK_IMPORTED_MODULE_0__["GoToPermissions"]; });

/* harmony import */ var _models_permission_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/permission.model */ "l0o7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Permission", function() { return _models_permission_model__WEBPACK_IMPORTED_MODULE_1__["Permission"]; });

/* harmony import */ var _permissions_dialog_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permissions-dialog.config */ "IrWj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "permissionsDialog", function() { return _permissions_dialog_config__WEBPACK_IMPORTED_MODULE_2__["permissionsDialog"]; });

/* harmony import */ var _permissions_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./permissions-routing.module */ "Bkot");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionsRoutingModule", function() { return _permissions_routing_module__WEBPACK_IMPORTED_MODULE_3__["PermissionsRoutingModule"]; });

/* harmony import */ var _permissions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./permissions.component */ "tIKv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionsComponent", function() { return _permissions_component__WEBPACK_IMPORTED_MODULE_4__["PermissionsComponent"]; });

/* harmony import */ var _permissions_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./permissions.module */ "vhtq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionsModule", function() { return _permissions_module__WEBPACK_IMPORTED_MODULE_5__["PermissionsModule"]; });

/* harmony import */ var _services_metadata_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/metadata.service */ "LQlA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetadataService", function() { return _services_metadata_service__WEBPACK_IMPORTED_MODULE_6__["MetadataService"]; });

/* harmony import */ var _services_permissions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/permissions.service */ "CLg8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionsService", function() { return _services_permissions_service__WEBPACK_IMPORTED_MODULE_7__["PermissionsService"]; });











/***/ }),

/***/ "j2U7":
/*!*******************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/examples/api-call.ts ***!
  \*******************************************************************/
/*! exports provided: ApiCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiCall", function() { return ApiCall; });
var ApiCall = /** @class */ (function () {
    function ApiCall(virtual, verb, url, teaser, instructions, enableButton, code, browseUrl) {
        if (code === void 0) { code = []; }
        if (browseUrl === void 0) { browseUrl = null; }
        this.virtual = virtual;
        this.verb = verb;
        this.url = url;
        this.teaser = teaser;
        this.instructions = instructions;
        this.enableButton = enableButton;
        this.code = code;
        this.browseUrl = browseUrl;
    }
    return ApiCall;
}());



/***/ }),

/***/ "l0o7":
/*!****************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/permissions/models/permission.model.ts ***!
  \****************************************************************************/
/*! exports provided: Permission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permission", function() { return Permission; });
var Permission = /** @class */ (function () {
    function Permission() {
    }
    return Permission;
}());



/***/ }),

/***/ "m//V":
/*!*************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/dev-rest-base.component.ts ***!
  \*************************************************************************/
/*! exports provided: DevRestBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevRestBase", function() { return DevRestBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! . */ "LBgr");
/* harmony import */ var _app_administration_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app-administration/services */ "uw4a");
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../permissions */ "gWX0");
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/constants/eav.constants */ "qb9A");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services/context */ "1O52");












var DevRestBase = /** @class */ (function () {
    // Shared Constructor for things all the Dev-REST things will need
    function DevRestBase(appDialogConfigService, 
    /** Context for this dialog. Used for appId, zoneId, tabId, etc. */
    context, dialogRef, 
    /** dnn-sxc-angular context. Used to resolve urls */
    dnnContext, router, route, permissionsService) {
        this.context = context;
        this.dialogRef = dialogRef;
        this.dnnContext = dnnContext;
        this.router = router;
        this.route = route;
        this.permissionsService = permissionsService;
        /** Subscription Sink */
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        /** List of scenarios */
        this.scenarios = ___WEBPACK_IMPORTED_MODULE_7__["AllScenarios"];
        /** Currently selected scenario */
        this.scenario$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](___WEBPACK_IMPORTED_MODULE_7__["AllScenarios"][0]);
        // Build Dialog Settings Stream
        // Note: this is probably already loaded somewhere, so I'm not sure why we're getting it again
        this.dialogSettings$ = appDialogConfigService.getDialogSettings().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["share"])());
    }
    DevRestBase.prototype.buildPermissionStream = function (routeTargetName) {
        var _this = this;
        // Build Permissions Stream
        // This is triggered on start and everything a sub-dialog closes
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([
            Object(___WEBPACK_IMPORTED_MODULE_7__["fireOnStartAndWhenSubDialogCloses"])(this.router, this.route),
            this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (pm) { return pm.get(routeTargetName); })),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), _ = _b[0], permissionTarget = _b[1];
            // TODO: 2dm - something looks wrong here, we're getting Entity-metadata for content-type!
            return _this.permissionsService.getAll(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_10__["eavConstants"].metadata.entity.type, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_10__["eavConstants"].keyTypes.guid, permissionTarget);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["share"])());
    };
    DevRestBase.prototype.rootBasedOnScenario = function (root, scenario) {
        var domainPrefix = document.location.protocol + '//' + document.location.host;
        return scenario.useVirtual
            ? root
            : (scenario.inSameSite ? '' : domainPrefix) + this.dnnContext.$2sxc.http.apiUrl(root);
    };
    DevRestBase.prototype.buildBaseTemplateVars = function (name, identity, diag, permissions, root, scenario) {
        return {
            apiCalls: null,
            name: name,
            currentScenario: scenario,
            folder: encodeURI(diag.Context.App.Folder),
            moduleId: this.context.moduleId,
            root: root,
            scenario: scenario,
            permissions: permissions,
            permissionsHasAnonymous: (permissions === null || permissions === void 0 ? void 0 : permissions.filter(function (p) { return p.Condition.indexOf('.Anonymous') > 0; }).length) > 0,
            permissionTarget: identity,
        };
    };
    DevRestBase.prototype.changeScenario = function (scenario) {
        this.scenario$.next(scenario);
    };
    DevRestBase.prototype.ngOnDestroy = function () {
        this.scenario$.complete();
        this.subscription.unsubscribe();
    };
    DevRestBase.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    DevRestBase.ctorParameters = function () { return [
        { type: _app_administration_services__WEBPACK_IMPORTED_MODULE_8__["AppDialogConfigService"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_11__["Context"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _permissions__WEBPACK_IMPORTED_MODULE_9__["PermissionsService"] }
    ]; };
    DevRestBase = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dev-rest-base',
            template: ''
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_administration_services__WEBPACK_IMPORTED_MODULE_8__["AppDialogConfigService"],
            _shared_services_context__WEBPACK_IMPORTED_MODULE_11__["Context"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _permissions__WEBPACK_IMPORTED_MODULE_9__["PermissionsService"]])
    ], DevRestBase);
    return DevRestBase;
}());



/***/ }),

/***/ "m/g8":
/*!***************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/app-administration/services/export-app.service.ts ***!
  \***************************************************************************************/
/*! exports provided: ExportAppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportAppService", function() { return ExportAppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../import-app/services/import-app.service */ "BToE");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");






var ExportAppService = /** @class */ (function () {
    function ExportAppService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    ExportAppService.prototype.getAppInfo = function () {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_4__["webApiAppRoot"] + 'Statistics'), {
            params: { appid: this.context.appId.toString(), zoneId: this.context.zoneId.toString() },
        });
    };
    ExportAppService.prototype.exportApp = function (includeContentGroups, resetAppGuid) {
        var url = this.dnnContext.$2sxc.http.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_4__["webApiAppRoot"] + 'Export')
            + '?appId=' + this.context.appId
            + '&zoneId=' + this.context.zoneId
            + '&includeContentGroups=' + includeContentGroups
            + '&resetAppGuid=' + resetAppGuid;
        window.open(url, '_blank', '');
    };
    ExportAppService.prototype.exportForVersionControl = function (includeContentGroups, resetAppGuid) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_4__["webApiAppRoot"] + 'SaveData'), {
            params: {
                appid: this.context.appId.toString(),
                zoneId: this.context.zoneId.toString(),
                includeContentGroups: includeContentGroups.toString(),
                resetAppGuid: resetAppGuid.toString(),
            },
        });
    };
    ExportAppService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    ExportAppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], ExportAppService);
    return ExportAppService;
}());



/***/ }),

/***/ "maSM":
/*!***************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/info-box/hint.ts ***!
  \***************************************************************/
/*! exports provided: infoBoxIconMap, Hint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoBoxIconMap", function() { return infoBoxIconMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hint", function() { return Hint; });
var infoBoxIconMap = {
    alert: 'warning',
    info: 'menu_book',
    tip: 'star',
    warning: 'warning',
};
var Hint = /** @class */ (function () {
    function Hint(type, message, link) {
        if (link === void 0) { link = ''; }
        this.type = type;
        this.message = message;
        this.link = link;
        this.icon = infoBoxIconMap[type];
    }
    return Hint;
}());



/***/ }),

/***/ "pqGq":
/*!*************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/selector-with-help/selector-with-help.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: SelectorWithHelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorWithHelpComponent", function() { return SelectorWithHelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_selector_with_help_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./selector-with-help.component.html */ "8mCj");
/* harmony import */ var _header_selector_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header-selector.scss */ "qwhO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .. */ "LBgr");






var SelectorWithHelpComponent = /** @class */ (function () {
    function SelectorWithHelpComponent(dialog) {
        this.dialog = dialog;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    SelectorWithHelpComponent.prototype.ngOnInit = function () {
    };
    SelectorWithHelpComponent.prototype.selectionChange = function (key) {
        var _this = this;
        this.value = key;
        var scenario = this.items.find(function (item) { return item.key === _this.value; });
        this.valueChange.emit(scenario);
    };
    SelectorWithHelpComponent.prototype.showHelp = function () {
        var _this = this;
        var scenario = this.items.find(function (item) { return item.key === _this.value; });
        var data = {
            name: scenario.name,
            body: scenario.description,
            notes: scenario.notes,
        };
        this.dialog.open(___WEBPACK_IMPORTED_MODULE_5__["HelpPopupComponent"], {
            autoFocus: false,
            data: data,
            width: '500px',
        });
    };
    SelectorWithHelpComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    SelectorWithHelpComponent.propDecorators = {
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    SelectorWithHelpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-selector-with-help',
            template: _raw_loader_selector_with_help_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_header_selector_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], SelectorWithHelpComponent);
    return SelectorWithHelpComponent;
}());



/***/ }),

/***/ "qwhO":
/*!*******************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/header-selector.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".selector {\n  width: 400px;\n  max-width: 100%;\n  display: flex;\n  align-items: center;\n}\n.selector__dropdown {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLXNlbGVjdG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0FBQ0oiLCJmaWxlIjoiaGVhZGVyLXNlbGVjdG9yLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0b3Ige1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmX19kcm9wZG93biB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "r3uf":
/*!**********************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/app-administration/services/app-dialog-config.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: AppDialogConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDialogConfigService", function() { return AppDialogConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");





var webApiDialogRoot = 'admin/dialog/';
var AppDialogConfigService = /** @class */ (function () {
    function AppDialogConfigService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    AppDialogConfigService.prototype.getDialogSettings = function () {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiDialogRoot + 'settings'), {
            params: { appid: this.context.appId.toString() },
        });
    };
    AppDialogConfigService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    AppDialogConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], AppDialogConfigService);
    return AppDialogConfigService;
}());



/***/ }),

/***/ "sYr7":
/*!*********************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/help-popup/help-popup.component.ts ***!
  \*********************************************************************************/
/*! exports provided: HelpPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPopupComponent", function() { return HelpPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_help_popup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./help-popup.component.html */ "boCP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




var HelpPopupComponent = /** @class */ (function () {
    function HelpPopupComponent(dialogRef, dialogData) {
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
    }
    HelpPopupComponent.prototype.ngOnInit = function () {
    };
    HelpPopupComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    HelpPopupComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
    ]; };
    HelpPopupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-help-popup',
            template: _raw_loader_help_popup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], HelpPopupComponent);
    return HelpPopupComponent;
}());



/***/ }),

/***/ "uw4a":
/*!**************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/app-administration/services/index.ts ***!
  \**************************************************************************/
/*! exports provided: AppDialogConfigService, webApiTypeRoot, ContentTypesService, ExportAppPartsService, ExportAppService, webApiAppPartsRoot, ImportAppPartsService, webApiQueryRun, webApiQueryDebugStream, webApiQuerySave, webApiQueryGet, webApiQueryDataSources, PipelinesService, ViewsService, WebApisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_dialog_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-dialog-config.service */ "r3uf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppDialogConfigService", function() { return _app_dialog_config_service__WEBPACK_IMPORTED_MODULE_0__["AppDialogConfigService"]; });

/* harmony import */ var _content_types_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-types.service */ "uwFg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiTypeRoot", function() { return _content_types_service__WEBPACK_IMPORTED_MODULE_1__["webApiTypeRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentTypesService", function() { return _content_types_service__WEBPACK_IMPORTED_MODULE_1__["ContentTypesService"]; });

/* harmony import */ var _export_app_parts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./export-app-parts.service */ "QCbL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExportAppPartsService", function() { return _export_app_parts_service__WEBPACK_IMPORTED_MODULE_2__["ExportAppPartsService"]; });

/* harmony import */ var _export_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./export-app.service */ "m/g8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExportAppService", function() { return _export_app_service__WEBPACK_IMPORTED_MODULE_3__["ExportAppService"]; });

/* harmony import */ var _import_app_parts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./import-app-parts.service */ "OGde");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiAppPartsRoot", function() { return _import_app_parts_service__WEBPACK_IMPORTED_MODULE_4__["webApiAppPartsRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImportAppPartsService", function() { return _import_app_parts_service__WEBPACK_IMPORTED_MODULE_4__["ImportAppPartsService"]; });

/* harmony import */ var _pipelines_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipelines.service */ "eues");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiQueryRun", function() { return _pipelines_service__WEBPACK_IMPORTED_MODULE_5__["webApiQueryRun"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiQueryDebugStream", function() { return _pipelines_service__WEBPACK_IMPORTED_MODULE_5__["webApiQueryDebugStream"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiQuerySave", function() { return _pipelines_service__WEBPACK_IMPORTED_MODULE_5__["webApiQuerySave"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiQueryGet", function() { return _pipelines_service__WEBPACK_IMPORTED_MODULE_5__["webApiQueryGet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiQueryDataSources", function() { return _pipelines_service__WEBPACK_IMPORTED_MODULE_5__["webApiQueryDataSources"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PipelinesService", function() { return _pipelines_service__WEBPACK_IMPORTED_MODULE_5__["PipelinesService"]; });

/* harmony import */ var _views_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views.service */ "6HSB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewsService", function() { return _views_service__WEBPACK_IMPORTED_MODULE_6__["ViewsService"]; });

/* harmony import */ var _web_apis_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./web-apis.service */ "NG6K");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebApisService", function() { return _web_apis_service__WEBPACK_IMPORTED_MODULE_7__["WebApisService"]; });











/***/ })

}]);
//# sourceMappingURL=default~app-administration-app-administration-module~visual-query-visual-query-module.js.map