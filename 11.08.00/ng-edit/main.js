(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\2sxc\eav-item-dialog-angular\projects\ng-dialogs\src\main.ts */"zUnb");


/***/ }),

/***/ "0ELX":
/*!*******************************************************!*\
  !*** ./src/app/shared/constants/session.constants.ts ***!
  \*******************************************************/
/*! exports provided: prefix, keyZoneId, keyRequestToken, keyTabId, keyContentBlockId, keyModuleId, keyAppId, keyDebug, keyDialog, keyContentType, keyItems, keyPartOfPage, keyPortalRoot, keyPublishing, keyFilters, keyPipelineId, keyApi, keyUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyZoneId", function() { return keyZoneId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyRequestToken", function() { return keyRequestToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyTabId", function() { return keyTabId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyContentBlockId", function() { return keyContentBlockId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyModuleId", function() { return keyModuleId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyAppId", function() { return keyAppId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyDebug", function() { return keyDebug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyDialog", function() { return keyDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyContentType", function() { return keyContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyItems", function() { return keyItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyPartOfPage", function() { return keyPartOfPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyPortalRoot", function() { return keyPortalRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyPublishing", function() { return keyPublishing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyFilters", function() { return keyFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyPipelineId", function() { return keyPipelineId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyApi", function() { return keyApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyUrl", function() { return keyUrl; });
var prefix = 'eav-';
var keyZoneId = prefix + 'zoneId';
var keyRequestToken = prefix + 'rvt';
var keyTabId = prefix + 'tid';
var keyContentBlockId = prefix + 'cbid';
var keyModuleId = prefix + 'mid';
var keyAppId = prefix + 'appId';
var keyDebug = prefix + 'debug';
var keyDialog = prefix + 'dialog';
var keyContentType = prefix + 'contentType';
var keyItems = prefix + 'items';
var keyPartOfPage = prefix + 'partOfPage';
var keyPortalRoot = prefix + 'portalroot';
var keyPublishing = prefix + 'publishing';
var keyFilters = prefix + 'filters';
var keyPipelineId = prefix + 'pipelineId';
var keyApi = prefix + 'api';
/** Url which opened the dialog. Used for debugging */
var keyUrl = prefix + 'url';


/***/ }),

/***/ "1Yt0":
/*!****************************************!*\
  !*** ./src/app/params-init.factory.ts ***!
  \****************************************/
/*! exports provided: paramsInitFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paramsInitFactory", function() { return paramsInitFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _edit_shared_helpers_url_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../edit/shared/helpers/url-helper */ "4UCL");
/* harmony import */ var _shared_constants_dialog_types_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/constants/dialog-types.constants */ "GJZh");
/* harmony import */ var _shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/constants/session.constants */ "0ELX");
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/helpers/url-prep.helper */ "uuTa");




// tslint:disable-next-line:max-line-length


function paramsInitFactory(injector) {
    return function () {
        var e_1, _a, e_2, _b;
        console.log('Setting parameters config and clearing route');
        var eavKeys = Object.keys(sessionStorage).filter(function (key) { return key.startsWith(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_4__["prefix"]); });
        var isParamsRoute = !window.location.hash.startsWith('#/');
        if (isParamsRoute) {
            console.log('Initial route:', window.location.href);
            try {
                // clear our part of the session
                for (var eavKeys_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(eavKeys), eavKeys_1_1 = eavKeys_1.next(); !eavKeys_1_1.done; eavKeys_1_1 = eavKeys_1.next()) {
                    var key = eavKeys_1_1.value;
                    sessionStorage.removeItem(key);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (eavKeys_1_1 && !eavKeys_1_1.done && (_a = eavKeys_1.return)) _a.call(eavKeys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            sessionStorage.setItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_4__["keyUrl"], window.location.href); // save url which opened the dialog
            sessionStorage.setItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_4__["keyDialog"], _shared_constants_dialog_types_constants__WEBPACK_IMPORTED_MODULE_3__["DialogTypeConstants"].Edit); // set edit dialog as the default
            // save params
            var urlHash = window.location.hash.substring(1); // substring removes first # char
            var queryParametersFromUrl = _edit_shared_helpers_url_helper__WEBPACK_IMPORTED_MODULE_2__["UrlHelper"].readQueryStringParameters(urlHash);
            var paramKeys = Object.keys(queryParametersFromUrl);
            try {
                for (var paramKeys_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(paramKeys), paramKeys_1_1 = paramKeys_1.next(); !paramKeys_1_1.done; paramKeys_1_1 = paramKeys_1.next()) {
                    var key = paramKeys_1_1.value;
                    var value = queryParametersFromUrl[key];
                    if (value == null) {
                        continue;
                    }
                    sessionStorage.setItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_4__["prefix"] + key, value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (paramKeys_1_1 && !paramKeys_1_1.done && (_b = paramKeys_1.return)) _b.call(paramKeys_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // redirect
            var router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]);
            var zoneId = sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_4__["keyZoneId"]);
            var appId = sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_4__["keyAppId"]);
            var dialog = sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_4__["keyDialog"]);
            var contentType = sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_4__["keyContentType"]);
            var items = sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_4__["keyItems"]);
            switch (dialog) {
                case _shared_constants_dialog_types_constants__WEBPACK_IMPORTED_MODULE_3__["DialogTypeConstants"].Zone:
                    router.navigate([zoneId + "/apps"]);
                    break;
                case _shared_constants_dialog_types_constants__WEBPACK_IMPORTED_MODULE_3__["DialogTypeConstants"].AppImport:
                    router.navigate([zoneId + "/import"]);
                    break;
                case _shared_constants_dialog_types_constants__WEBPACK_IMPORTED_MODULE_3__["DialogTypeConstants"].App:
                    router.navigate([zoneId + "/" + appId + "/app"]);
                    break;
                case _shared_constants_dialog_types_constants__WEBPACK_IMPORTED_MODULE_3__["DialogTypeConstants"].ContentType:
                    router.navigate([zoneId + "/" + appId + "/fields/" + contentType]);
                    break;
                case _shared_constants_dialog_types_constants__WEBPACK_IMPORTED_MODULE_3__["DialogTypeConstants"].ContentItems:
                    router.navigate([zoneId + "/" + appId + "/items/" + contentType]);
                    break;
                case _shared_constants_dialog_types_constants__WEBPACK_IMPORTED_MODULE_3__["DialogTypeConstants"].Edit:
                    var editItems = JSON.parse(items);
                    var form = { items: editItems };
                    var formUrl = Object(_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_5__["convertFormToUrl"])(form);
                    router.navigate([zoneId + "/" + appId + "/edit/" + formUrl]);
                    break;
                case _shared_constants_dialog_types_constants__WEBPACK_IMPORTED_MODULE_3__["DialogTypeConstants"].ItemHistory:
                    var historyItems = JSON.parse(items);
                    router.navigate([zoneId + "/" + appId + "/versions/" + historyItems[0].EntityId]);
                    break;
                case _shared_constants_dialog_types_constants__WEBPACK_IMPORTED_MODULE_3__["DialogTypeConstants"].Develop:
                    router.navigate([zoneId + "/" + appId + "/code"]);
                    break;
                case _shared_constants_dialog_types_constants__WEBPACK_IMPORTED_MODULE_3__["DialogTypeConstants"].PipelineDesigner:
                    var pipelineId = sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_4__["keyPipelineId"]);
                    router.navigate([zoneId + "/" + appId + "/query/" + pipelineId]);
                    break;
                case _shared_constants_dialog_types_constants__WEBPACK_IMPORTED_MODULE_3__["DialogTypeConstants"].Replace:
                    var replaceItems = JSON.parse(items);
                    var rGuid = replaceItems[0].Group.Guid;
                    var rPart = replaceItems[0].Group.Part;
                    var rIndex = replaceItems[0].Group.Index;
                    var add = replaceItems[0].Group.Add;
                    var queryParams = add ? { add: true } : {};
                    router.navigate([zoneId + "/" + appId + "/" + rGuid + "/" + rPart + "/" + rIndex + "/replace"], { queryParams: queryParams });
                    break;
                case _shared_constants_dialog_types_constants__WEBPACK_IMPORTED_MODULE_3__["DialogTypeConstants"].InstanceList:
                    var groupItems = JSON.parse(items);
                    var gGuid = groupItems[0].Group.Guid;
                    var gPart = groupItems[0].Group.Part;
                    var gIndex = groupItems[0].Group.Index;
                    router.navigate([zoneId + "/" + appId + "/" + gGuid + "/" + gPart + "/" + gIndex + "/reorder"]);
                    break;
                default:
                    alert("Cannot open unknown dialog \"" + dialog + "\"");
                    try {
                        window.parent.$2sxc.totalPopup.close();
                    }
                    catch (error) { }
            }
        }
        else if (eavKeys.length === 0) {
            // if not params route and no params are saved, e.g. browser was reopened, throw error
            alert('Missing required url parameters. Please reopen dialog.');
            throw new Error('Missing required url parameters. Please reopen dialog.');
        }
        else {
            console.log('Initial route:', sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_4__["keyUrl"]));
        }
        loadEnvironment();
    };
}
function loadEnvironment() {
    $2sxc.env.load({
        page: parseInt(sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_4__["keyTabId"]), 10),
        rvt: sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_4__["keyRequestToken"]),
        root: sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_4__["keyPortalRoot"]),
        api: sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_4__["keyApi"]),
    });
}


/***/ }),

/***/ "3pfT":
/*!*********************************************************!*\
  !*** ../edit/shared/store/ngrx-data/entity-metadata.ts ***!
  \*********************************************************/
/*! exports provided: entityMetadata, pluralNames, entityConfig, itemSelectId, languageSelectId, languageInstanceSelectId, contentTypeSelectId, contentTypeItemSelectId, InputTypeSelectId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entityMetadata", function() { return entityMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluralNames", function() { return pluralNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entityConfig", function() { return entityConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemSelectId", function() { return itemSelectId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languageSelectId", function() { return languageSelectId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languageInstanceSelectId", function() { return languageInstanceSelectId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentTypeSelectId", function() { return contentTypeSelectId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentTypeItemSelectId", function() { return contentTypeItemSelectId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTypeSelectId", function() { return InputTypeSelectId; });
var entityMetadata = {
    Item: {
        selectId: itemSelectId,
    },
    Feature: {},
    Language: {
        selectId: languageSelectId,
    },
    LanguageInstance: {
        selectId: languageInstanceSelectId,
    },
    ContentType: {
        selectId: contentTypeSelectId,
    },
    ContentTypeItem: {
        selectId: contentTypeItemSelectId,
    },
    InputType: {
        selectId: InputTypeSelectId,
    },
};
var pluralNames = {
    Feature: 'Features',
};
var entityConfig = {
    entityMetadata: entityMetadata,
    pluralNames: pluralNames,
};
function itemSelectId(entity) {
    return entity === null ? undefined : entity.entity.guid;
}
function languageSelectId(entity) {
    return entity === null ? undefined : entity.key;
}
function languageInstanceSelectId(entity) {
    return entity === null ? undefined : entity.formId;
}
function contentTypeSelectId(entity) {
    return entity === null ? undefined : entity.contentType.id;
}
function contentTypeItemSelectId(entity) {
    return entity === null ? undefined : entity.guid;
}
function InputTypeSelectId(entity) {
    return entity === null ? undefined : entity.Type;
}


/***/ }),

/***/ "4UCL":
/*!********************************************!*\
  !*** ../edit/shared/helpers/url-helper.ts ***!
  \********************************************/
/*! exports provided: UrlHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlHelper", function() { return UrlHelper; });
var UrlHelper = /** @class */ (function () {
    function UrlHelper() {
    }
    UrlHelper.readQueryStringParameters = function (url) {
        var queryParams = {};
        url.split('&').forEach(function (f) {
            if (f.split('=').length === 2) {
                queryParams[f.split('=')[0]] = decodeURIComponent(f.split('=')[1].replace(/\+/g, ' '));
            }
        });
        return queryParams;
    };
    /** https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters/1099670#1099670 */
    UrlHelper.getUrlParams = function (qs) {
        qs = qs.split('+').join(' ');
        var params = {};
        var tokens;
        var re = /[?&]?([^=]+)=([^&]*)/g;
        // tslint:disable-next-line:no-conditional-assignment
        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }
        return params;
    };
    UrlHelper.replaceUrlParam = function (url, paramName, paramValue) {
        if (paramValue === null) {
            paramValue = '';
        }
        var pattern = new RegExp('\\b(' + paramName + '=).*?(&|#|$)');
        if (url.search(pattern) >= 0) {
            return url.replace(pattern, '$1' + paramValue + '$2');
        }
        url = url.replace(/[?#]$/, '');
        return url + (url.indexOf('?') > 0 ? '&' : '?') + paramName + '=' + paramValue;
    };
    UrlHelper.getUrlPrefix = function (area, eavConfig) {
        var result = '';
        if (area === 'system') {
            result = eavConfig.systemRoot;
        } // used to link to JS-stuff and similar
        if (area === 'zone') {
            result = eavConfig.portalRoot;
        } // used to link to the site-root (like an image)
        if (area === 'app') {
            result = eavConfig.appRoot;
        } // used to find the app-root of something inside an app
        if (result.endsWith('/')) {
            result = result.substring(0, result.length - 1);
        }
        return result;
    };
    return UrlHelper;
}());



/***/ }),

/***/ "50eG":
/*!**************************************************************!*\
  !*** ./src/app/shared/helpers/angular-console-log.helper.ts ***!
  \**************************************************************/
/*! exports provided: angularConsoleLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angularConsoleLog", function() { return angularConsoleLog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");


function angularConsoleLog(message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optionalParams[_i - 1] = arguments[_i];
    }
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        return;
    }
    console.groupCollapsed.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([message], optionalParams));
    // tslint:disable-next-line:no-console
    console.trace();
    console.groupEnd();
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "GJZh":
/*!************************************************************!*\
  !*** ./src/app/shared/constants/dialog-types.constants.ts ***!
  \************************************************************/
/*! exports provided: DialogTypeConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogTypeConstants", function() { return DialogTypeConstants; });
var DialogTypeConstants = /** @class */ (function () {
    function DialogTypeConstants() {
    }
    DialogTypeConstants.Zone = 'zone';
    DialogTypeConstants.AppImport = 'app-import';
    DialogTypeConstants.App = 'app';
    DialogTypeConstants.ContentType = 'contenttype';
    DialogTypeConstants.ContentItems = 'contentitems';
    DialogTypeConstants.Edit = 'edit';
    DialogTypeConstants.ItemHistory = 'item-history';
    DialogTypeConstants.Develop = 'develop';
    DialogTypeConstants.PipelineDesigner = 'pipeline-designer';
    DialogTypeConstants.Replace = 'replace';
    DialogTypeConstants.InstanceList = 'instance-list';
    return DialogTypeConstants;
}());



/***/ }),

/***/ "Iv+g":
/*!********************************************!*\
  !*** ./src/app/shared/services/context.ts ***!
  \********************************************/
/*! exports provided: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _constants_session_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/session.constants */ "0ELX");
/* harmony import */ var _helpers_angular_console_log_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/angular-console-log.helper */ "50eG");




/** The context provides information */
var Context = /** @class */ (function () {
    function Context(parentContext) {
        /** Determines if the context is ready to use, and everything is initialized */
        this.ready = false;
        this.parent = parentContext;
        // spm NOTE: I've given id to every context to make it easier to follow how things work
        var globalWindow = window;
        if (!globalWindow.contextId) {
            globalWindow.contextId = 0;
        }
        this.id = globalWindow.contextId++;
        Object(_helpers_angular_console_log_helper__WEBPACK_IMPORTED_MODULE_3__["angularConsoleLog"])('Context.constructor', this);
    }
    Object.defineProperty(Context.prototype, "zoneId", {
        /** The current Zone ID */
        get: function () {
            return this._zoneId || (this._zoneId = this.routeNum(_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__["keyZoneId"]) || this.parent.zoneId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "appId", {
        /** The current App ID */
        get: function () {
            return (this._appId != null) ? this._appId : (this._appId = this.routeNum(_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__["keyAppId"]) || this.parent.appId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "requestToken", {
        /**
         * The request verification token for http requests.
         * It's only loaded from the root, never from sub-contexts
         */
        get: function () { return this._rvt || (this._rvt = this.parent.requestToken); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "tabId", {
        /** Tab Id is global */
        get: function () {
            return this._tabId || (this._tabId = this.routeNum(_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__["keyTabId"]) || this.parent.tabId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "contentBlockId", {
        /** Content Block Id is global */
        get: function () {
            return this._contentBlockId || (this._contentBlockId = this.routeNum(_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__["keyContentBlockId"]) || this.parent.contentBlockId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "moduleId", {
        /** Module Id is global */
        get: function () {
            return this._moduleId || (this._moduleId = this.routeNum(_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__["keyModuleId"]) || this.parent.moduleId);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * This is the initializer at entry-componets of modules.
     * It ensures that within that module, the context has the values given by the route
     */
    Context.prototype.init = function (route) {
        this.routeSnapshot = route && route.snapshot;
        this.clearCachedValues();
        this.ready = route != null;
        Object(_helpers_angular_console_log_helper__WEBPACK_IMPORTED_MODULE_3__["angularConsoleLog"])('Context.init', this, route);
    };
    Context.prototype.initRoot = function () {
        // required, global things
        this._rvt = sessionStorage.getItem(_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__["keyRequestToken"]);
        this._zoneId = this.sessionNumber(_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__["keyZoneId"]);
        this._tabId = this.sessionNumber(_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__["keyTabId"]);
        this._contentBlockId = this.sessionNumber(_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__["keyContentBlockId"]);
        this._moduleId = this.sessionNumber(_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__["keyModuleId"]);
        if (!this._rvt || !this._zoneId || !this._tabId || !this._contentBlockId || !this._moduleId) {
            throw new Error('Context is missing some of the required parameters');
        }
        // optional global things
        this._appId = this.sessionNumber(_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__["keyAppId"]);
        this.ready = true;
        Object(_helpers_angular_console_log_helper__WEBPACK_IMPORTED_MODULE_3__["angularConsoleLog"])('Context.initRoot', this);
    };
    Context.prototype.sessionNumber = function (name) {
        var result = sessionStorage.getItem(name);
        if (result !== null) {
            var num = parseInt(result, 10);
            return isNaN(num) ? null : num;
        }
        return null;
    };
    /**
     * Get a number from the route, or optionally its parents.
     * Returns value in route or null
     */
    Context.prototype.routeNum = function (name) {
        // catch case where state is null, like when the recursive parent is in use
        if (this.routeSnapshot == null) {
            return null;
        }
        var paramName = name.substring(_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__["prefix"].length);
        var result = this.routeSnapshot.paramMap.get(paramName);
        if (result !== null) {
            var num = parseInt(result, 10);
            return isNaN(num) ? null : num;
        }
    };
    /**
     * Clears cached values. Required when one module instance is opened multiple times,
     * e.g. Apps Management -> App Admin for appId 2 -> back -> App Admin for appId 17.
     * Module is reused, and so is context and it contains values for previous appId.
     */
    Context.prototype.clearCachedValues = function () {
        this._zoneId = null;
        this._appId = null;
        this._rvt = null;
        this._tabId = null;
        this._contentBlockId = null;
        this._moduleId = null;
    };
    Context.ctorParameters = function () { return [
        { type: Context, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
    ]; };
    Context = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Context])
    ], Context);
    return Context;
}());



/***/ }),

/***/ "OuQZ":
/*!************************************************************************!*\
  !*** ../edit/shared/store/selectors/global-configuration.selectors.ts ***!
  \************************************************************************/
/*! exports provided: selectGlobalConfiguration, selectDebugEnabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectGlobalConfiguration", function() { return selectGlobalConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDebugEnabled", function() { return selectDebugEnabled; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "3oUN");

var selectGlobalConfiguration = function (state) { return state.globalConfiguration; };
var selectDebugEnabled = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectGlobalConfiguration, function (state) { return state.debugEnabled; });


/***/ }),

/***/ "QgSw":
/*!***********************************************!*\
  !*** ../edit/shared/store/selectors/index.ts ***!
  \***********************************************/
/*! exports provided: selectGlobalConfiguration, selectDebugEnabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_configuration_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-configuration.selectors */ "OuQZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectGlobalConfiguration", function() { return _global_configuration_selectors__WEBPACK_IMPORTED_MODULE_0__["selectGlobalConfiguration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectDebugEnabled", function() { return _global_configuration_selectors__WEBPACK_IMPORTED_MODULE_0__["selectDebugEnabled"]; });




/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "xYZN");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/constants/session.constants */ "0ELX");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/services/context */ "Iv+g");












var AppComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AppComponent, _super);
    function AppComponent(el, dnnContext, context, titleService, router, activatedRoute, matIconRegistry) {
        var _this = _super.call(this, el, dnnContext.preConfigure({
            moduleId: parseInt(sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_10__["keyModuleId"]), 10),
            contentBlockId: parseInt(sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_10__["keyContentBlockId"]), 10),
        })) || this;
        _this.context = context;
        _this.titleService = titleService;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.matIconRegistry = matIconRegistry;
        _this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
        _this.context.initRoot();
        _this.matIconRegistry.setDefaultFontSetClass('material-icons-outlined');
        return _this;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Mostly copied from https://blog.bitsrc.io/dynamic-page-titles-in-angular-98ce20b5c334
        // Routes need a data: { title: '...' } for this to work
        var appTitle = this.titleService.getTitle(); // initial title when loading the page
        this.subscription.add(this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function () {
            var child = _this.activatedRoute.firstChild;
            while (child.firstChild) {
                child = child.firstChild;
            }
            if (child.snapshot.data['title']) {
                return child.snapshot.data['title'];
            }
            return appTitle;
        })).subscribe(function (title) {
            _this.titleService.setTitle(title);
        }));
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_3__["Context"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_11__["Context"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"],
            _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_3__["Context"],
            _shared_services_context__WEBPACK_IMPORTED_MODULE_11__["Context"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"]])
    ], AppComponent);
    return AppComponent;
}(_2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_3__["DnnAppComponent"]));



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "5lCh");
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/data */ "t8nT");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "xeA8");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "3oUN");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store-devtools */ "LcDt");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "s2Ay");
/* harmony import */ var _edit_shared_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../edit/shared/store */ "merk");
/* harmony import */ var _edit_shared_store_ngrx_data_entity_metadata__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../edit/shared/store/ngrx-data/entity-metadata */ "3pfT");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _params_init_factory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./params-init.factory */ "1Yt0");
/* harmony import */ var _shared_interceptors_handle_errors_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/interceptors/handle-errors.interceptor */ "ts5a");
/* harmony import */ var _shared_interceptors_set_headers_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/interceptors/set-headers.interceptor */ "tEtq");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/services/context */ "Iv+g");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
            ],
            entryComponents: [],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot(_edit_shared_store__WEBPACK_IMPORTED_MODULE_13__["reducers"], { metaReducers: _edit_shared_store__WEBPACK_IMPORTED_MODULE_13__["metaReducers"], runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true } }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__["StoreDevtoolsModule"].instrument({ maxAge: 25 }),
                _ngrx_data__WEBPACK_IMPORTED_MODULE_8__["EntityDataModule"].forRoot(_edit_shared_store_ngrx_data_entity_metadata__WEBPACK_IMPORTED_MODULE_14__["entityConfig"]),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot(),
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
            ],
            providers: [
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["APP_INITIALIZER"], useFactory: _params_init_factory__WEBPACK_IMPORTED_MODULE_17__["paramsInitFactory"], deps: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]], multi: true },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"] },
                _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["DnnInterceptor"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_set_headers_interceptor__WEBPACK_IMPORTED_MODULE_19__["SetHeadersInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_handle_errors_interceptor__WEBPACK_IMPORTED_MODULE_18__["HandleErrorsInterceptor"], multi: true },
                _shared_services_context__WEBPACK_IMPORTED_MODULE_20__["Context"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "a6le":
/*!**********************************************!*\
  !*** ../edit/shared/store/reducers/index.ts ***!
  \**********************************************/
/*! exports provided: logger, metaReducers, reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _ng_dialogs_src_app_shared_helpers_angular_console_log_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ng-dialogs/src/app/shared/helpers/angular-console-log.helper */ "50eG");
/* harmony import */ var _ng_dialogs_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ng-dialogs/src/environments/environment */ "AytR");
/* harmony import */ var _global_configuration_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-configuration.reducer */ "ovzn");



/** Console log all actions */
function logger(reducer) {
    return function (state, action) {
        Object(_ng_dialogs_src_app_shared_helpers_angular_console_log_helper__WEBPACK_IMPORTED_MODULE_0__["angularConsoleLog"])('[STORE] state', state);
        Object(_ng_dialogs_src_app_shared_helpers_angular_console_log_helper__WEBPACK_IMPORTED_MODULE_0__["angularConsoleLog"])('[STORE] action', action);
        return reducer(state, action);
    };
}
/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
var metaReducers = !_ng_dialogs_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production
    ? [logger]
    : [];
var reducers = {
    globalConfiguration: _global_configuration_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
};


/***/ }),

/***/ "it7M":
/*!*******************************!*\
  !*** ../edit/edit.matcher.ts ***!
  \*******************************/
/*! exports provided: editRoot, refreshEditRoot, edit, refreshEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editRoot", function() { return editRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshEditRoot", function() { return refreshEditRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit", function() { return edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshEdit", function() { return refreshEdit; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

/**
 * ':zoneId/:appId/edit/:items'
 * ':zoneId/:appId/edit/:items/details/:detailsEntityGuid/:detailsFieldId'
 * ':zoneId/:appId/edit/:items/update/:updateEntityGuid/:updateFieldId'
 */
function editRoot(url) {
    if (url.length < 4) {
        return null;
    }
    if (url[2].path !== 'edit') {
        return null;
    }
    var hasDetails = url[4] != null && url[4].path === 'details' && url[5] != null && url[6] != null;
    var hasUpdate = url[4] != null && url[4].path === 'update' && url[5] != null && url[6] != null;
    var posParams = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ zoneId: url[0], appId: url[1], items: url[3] }, (hasDetails && { detailsEntityGuid: url[5], detailsFieldId: url[6] })), (hasUpdate && { updateEntityGuid: url[5], updateFieldId: url[6] }));
    var match = {
        consumed: url.slice(0, (hasDetails || hasUpdate) ? 7 : 4),
        posParams: posParams
    };
    return match;
}
/** ':zoneId/:appId/edit/refresh/:items' */
function refreshEditRoot(url) {
    if (url.length < 5) {
        return null;
    }
    if (url[2].path !== 'edit' || url[3].path !== 'refresh') {
        return null;
    }
    var posParams = {
        zoneId: url[0],
        appId: url[1],
        items: url[4],
    };
    var match = {
        consumed: url.slice(0, 5),
        posParams: posParams
    };
    return match;
}
/**
 * 'edit/:items'
 * 'edit/:items/details/:detailsEntityGuid/:detailsFieldId'
 * 'edit/:items/update/:updateEntityGuid/:updateFieldId'
 */
function edit(url) {
    if (url.length < 2) {
        return null;
    }
    if (url[0].path !== 'edit') {
        return null;
    }
    var hasDetails = url[2] != null && url[2].path === 'details' && url[3] != null && url[4] != null;
    var hasUpdate = url[2] != null && url[2].path === 'update' && url[3] != null && url[4] != null;
    var posParams = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ items: url[1] }, (hasDetails && { detailsEntityGuid: url[3], detailsFieldId: url[4] })), (hasUpdate && { updateEntityGuid: url[3], updateFieldId: url[4] }));
    var match = {
        consumed: url.slice(0, (hasDetails || hasUpdate) ? 5 : 2),
        posParams: posParams
    };
    return match;
}
/** 'edit/refresh/:items' */
function refreshEdit(url) {
    if (url.length < 3) {
        return null;
    }
    if (url[0].path !== 'edit' || url[1].path !== 'refresh') {
        return null;
    }
    var posParams = {
        items: url[2],
    };
    var match = {
        consumed: url.slice(0, 3),
        posParams: posParams
    };
    return match;
}


/***/ }),

/***/ "merk":
/*!*************************************!*\
  !*** ../edit/shared/store/index.ts ***!
  \*************************************/
/*! exports provided: logger, metaReducers, reducers, selectGlobalConfiguration, selectDebugEnabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "a6le");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["logger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["metaReducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["reducers"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "QgSw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectGlobalConfiguration", function() { return _selectors__WEBPACK_IMPORTED_MODULE_1__["selectGlobalConfiguration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectDebugEnabled", function() { return _selectors__WEBPACK_IMPORTED_MODULE_1__["selectDebugEnabled"]; });





/***/ }),

/***/ "o9tz":
/*!***************************************************!*\
  !*** ./src/app/shared/constants/eav.constants.ts ***!
  \***************************************************/
/*! exports provided: eavConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eavConstants", function() { return eavConstants; });
var eavConstants = {
    metadata: {
        /** metadataOfAttribute */
        attribute: { type: 2, target: 'EAV Field Properties' },
        /** metadataOfApp */
        app: { type: 3, target: 'App' },
        /** metadataOfEntity */
        entity: { type: 4, target: 'Entity' },
        /** metadataOfContentType */
        contentType: { type: 5, target: 'ContentType' },
        /** metadataOfZone */
        zone: { type: 6, target: 'Zone' },
        /** metadataOfCmsObject */
        cmsObject: { type: 10, target: 'CmsObject' },
    },
    /** Loopup type for the metadata, e.g. key=80adb152-efad-4aa4-855e-74c5ef230e1f is keyType=guid */
    keyTypes: {
        guid: 'guid',
        string: 'string',
        number: 'number',
    },
    /** Scopes */
    scopes: {
        /** This is the main schema and the data you usually see is from here */
        default: { name: 'Default', value: '2SexyContent' },
        /** This contains content-types for configuration, settings and resources of the app */
        app: { name: 'System: App', value: '2SexyContent-App' },
    },
    /** Content types where templates, permissions, etc. are stored */
    contentTypes: {
        /** Content type containing app templates (views) */
        template: '2SexyContent-Template',
        /** Content type containing permissions */
        permissions: 'PermissionConfiguration',
        /** Content type containing queries */
        query: 'DataPipeline',
        /** Content type containing content type metadata (app administration > data > metadata) */
        contentType: 'ContentType',
        /** Content type containing app settings */
        settings: 'App-Settings',
        /** Content type containing app resources */
        resources: 'App-Resources',
    },
    pipelineDesigner: {
        outDataSource: {
            className: 'SexyContentTemplate',
            in: ['ListContent', 'Default'],
            name: '2sxc Target (View or API)',
            description: 'The template/script which will show this data',
            visualDesignerData: { Top: 20, Left: 200, Width: 700 }
        },
        defaultPipeline: {
            dataSources: [
                {
                    entityGuid: 'unsaved1',
                    partAssemblyAndType: 'ToSic.Eav.DataSources.Caches.ICache, ToSic.Eav.DataSources',
                    visualDesignerData: { Top: 440, Left: 440 }
                }, {
                    entityGuid: 'unsaved2',
                    partAssemblyAndType: 'ToSic.Eav.DataSources.PublishingFilter, ToSic.Eav.DataSources',
                    visualDesignerData: { Top: 300, Left: 440 }
                }, {
                    entityGuid: 'unsaved3',
                    partAssemblyAndType: 'ToSic.SexyContent.DataSources.ModuleDataSource, ToSic.SexyContent',
                    visualDesignerData: { Top: 170, Left: 440 }
                }
            ],
            streamWiring: [
                { From: 'unsaved1', Out: 'Default', To: 'unsaved2', In: 'Default' },
                { From: 'unsaved1', Out: 'Drafts', To: 'unsaved2', In: 'Drafts' },
                { From: 'unsaved1', Out: 'Published', To: 'unsaved2', In: 'Published' },
                { From: 'unsaved2', Out: 'Default', To: 'unsaved3', In: 'Default' },
                { From: 'unsaved3', Out: 'ListContent', To: 'Out', In: 'ListContent' },
                { From: 'unsaved3', Out: 'Default', To: 'Out', In: 'Default' }
            ]
        },
        testParameters: '[Demo:Demo]=true',
    },
};


/***/ }),

/***/ "ovzn":
/*!*********************************************************************!*\
  !*** ../edit/shared/store/reducers/global-configuration.reducer.ts ***!
  \*********************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "3oUN");
/* harmony import */ var _ng_dialogs_src_app_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ng-dialogs/src/app/shared/constants/session.constants */ "0ELX");
/* harmony import */ var _actions_global_configuration_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/global-configuration.actions */ "xWkI");




var initialState = {
    debugEnabled: sessionStorage.getItem(_ng_dialogs_src_app_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__["keyDebug"]) === 'true',
};
var globalConfigurationReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_global_configuration_actions__WEBPACK_IMPORTED_MODULE_3__["loadDebugEnabled"], function (state, _a) {
    var debugEnabled = _a.debugEnabled;
    return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { debugEnabled: debugEnabled }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_global_configuration_actions__WEBPACK_IMPORTED_MODULE_3__["toggleDebugEnabled"], function (state) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { debugEnabled: !state.debugEnabled })); }));
function reducer(state, action) {
    return globalConfigurationReducer(state, action);
}


/***/ }),

/***/ "tEtq":
/*!****************************************************************!*\
  !*** ./src/app/shared/interceptors/set-headers.interceptor.ts ***!
  \****************************************************************/
/*! exports provided: SetHeadersInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetHeadersInterceptor", function() { return SetHeadersInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");


var SetHeadersInterceptor = /** @class */ (function () {
    function SetHeadersInterceptor() {
    }
    SetHeadersInterceptor.prototype.intercept = function (req, next) {
        var modified;
        if (req.body instanceof FormData) {
            // sending files. Do not set content type so browser can add delimiter boundary automatically
            return next.handle(req);
        }
        else {
            modified = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json;charset=UTF-8',
                }
            });
            return next.handle(modified);
        }
    };
    SetHeadersInterceptor.ctorParameters = function () { return []; };
    SetHeadersInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SetHeadersInterceptor);
    return SetHeadersInterceptor;
}());



/***/ }),

/***/ "ts5a":
/*!******************************************************************!*\
  !*** ./src/app/shared/interceptors/handle-errors.interceptor.ts ***!
  \******************************************************************/
/*! exports provided: HandleErrorsInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleErrorsInterceptor", function() { return HandleErrorsInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");




var HandleErrorsInterceptor = /** @class */ (function () {
    function HandleErrorsInterceptor() {
        /** URLs excluded from detailed error alert  */
        this.excludedUrls = [
            'dist/ng-edit/i18n',
        ];
    }
    HandleErrorsInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (!_this.checkIfExcluded(error.url)) {
                _this.showDetailedHttpError(error);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    HandleErrorsInterceptor.prototype.checkIfExcluded = function (url) {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.excludedUrls), _c = _b.next(); !_c.done; _c = _b.next()) {
                var excludedUrl = _c.value;
                if (url.includes(excludedUrl)) {
                    return true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    };
    HandleErrorsInterceptor.prototype.showDetailedHttpError = function (error) {
        var infoText = 'Had an error talking to the server (status ' + error.status + ').';
        var srvResp = error.error;
        if (srvResp) {
            var msg = srvResp.Message;
            if (msg) {
                infoText += '\nMessage: ' + msg;
            }
            var msgDet = srvResp.MessageDetail || srvResp.ExceptionMessage;
            if (msgDet) {
                infoText += '\nDetail: ' + msgDet;
            }
            if (msgDet && msgDet.indexOf('No action was found') === 0) {
                if (msgDet.indexOf('that matches the name') > 0) {
                    infoText += '\n\nTip from 2sxc: you probably got the action-name wrong in your JS.';
                }
                else if (msgDet.indexOf('that matches the request.') > 0) {
                    infoText += '\n\nTip from 2sxc: Seems like the parameters are the wrong amount or type.';
                }
            }
            if (msg && msg.indexOf('Controller') === 0 && msg.indexOf('not found') > 0) {
                infoText += '\n\nTip from 2sxc: you probably spelled the controller name wrong or forgot to remove the word \'controller\' from the call in JS. To call a controller called \'DemoController\' only use \'Demo\'.';
            }
            infoText += '\n\nif you are an advanced user you can learn more about what went wrong - discover how on 2sxc.org/help?tag=debug';
        }
        alert(infoText);
    };
    HandleErrorsInterceptor.ctorParameters = function () { return []; };
    HandleErrorsInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], HandleErrorsInterceptor);
    return HandleErrorsInterceptor;
}());



/***/ }),

/***/ "uuTa":
/*!***************************************************!*\
  !*** ./src/app/shared/helpers/url-prep.helper.ts ***!
  \***************************************************/
/*! exports provided: convertFormToUrl, convertUrlToForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertFormToUrl", function() { return convertFormToUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertUrlToForm", function() { return convertUrlToForm; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/eav.constants */ "o9tz");


function convertFormToUrl(form) {
    var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
    var _e, _f, _g;
    var formUrl = '';
    try {
        for (var _h = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(form.items), _j = _h.next(); !_j.done; _j = _h.next()) {
            var item = _j.value;
            if (formUrl) {
                formUrl += ',';
            }
            if (item.Parent) {
                // Inner Item
                var innerItem = item;
                formUrl += 'inner:' + innerItem.EntityId + ':' + innerItem.Field
                    + ':' + innerItem.Parent + ':' + innerItem.Add + ':' + innerItem.Index;
                if (innerItem.Prefill) {
                    var keys = Object.keys(innerItem.Prefill);
                    try {
                        for (var keys_1 = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(keys)), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                            var key = keys_1_1.value;
                            formUrl += '&prefill:' + key + '~' + paramEncode(innerItem.Prefill[key].toString());
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (keys_1_1 && !keys_1_1.done && (_b = keys_1.return)) _b.call(keys_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            else if (item.EntityId) {
                // Edit Item
                var editItem = item;
                formUrl += editItem.EntityId;
            }
            else if (item.ContentTypeName) {
                // Add Item
                var addItem = item;
                formUrl += 'new:' + addItem.ContentTypeName;
                if ((_e = addItem.For) === null || _e === void 0 ? void 0 : _e.String) {
                    formUrl += '&for:s~' + paramEncode(addItem.For.String) + ':' + addItem.For.Target;
                }
                else if ((_f = addItem.For) === null || _f === void 0 ? void 0 : _f.Number) {
                    formUrl += '&for:n~' + addItem.For.Number + ':' + addItem.For.Target;
                }
                else if ((_g = addItem.For) === null || _g === void 0 ? void 0 : _g.Guid) {
                    formUrl += '&for:g~' + addItem.For.Guid + ':' + addItem.For.Target;
                }
                else if (addItem.Metadata) {
                    var keyType = void 0;
                    switch (addItem.Metadata.keyType.toLocaleLowerCase()) {
                        case _constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__["eavConstants"].keyTypes.string:
                            keyType = 's';
                            break;
                        case _constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__["eavConstants"].keyTypes.number:
                            keyType = 'n';
                            break;
                        case _constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__["eavConstants"].keyTypes.guid:
                            keyType = 'g';
                            break;
                    }
                    var target = void 0;
                    var metadataKeys = Object.keys(_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__["eavConstants"].metadata);
                    try {
                        for (var metadataKeys_1 = (e_3 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(metadataKeys)), metadataKeys_1_1 = metadataKeys_1.next(); !metadataKeys_1_1.done; metadataKeys_1_1 = metadataKeys_1.next()) {
                            var metaKey = metadataKeys_1_1.value;
                            if (addItem.Metadata.targetType !== _constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__["eavConstants"].metadata[metaKey].type) {
                                continue;
                            }
                            target = _constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__["eavConstants"].metadata[metaKey].target;
                            break;
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (metadataKeys_1_1 && !metadataKeys_1_1.done && (_c = metadataKeys_1.return)) _c.call(metadataKeys_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    formUrl += '&for:' + keyType + '~' + paramEncode(addItem.Metadata.key) + ':' + target;
                }
                if (addItem.Prefill) {
                    var keys = Object.keys(addItem.Prefill);
                    try {
                        for (var keys_2 = (e_4 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(keys)), keys_2_1 = keys_2.next(); !keys_2_1.done; keys_2_1 = keys_2.next()) {
                            var key = keys_2_1.value;
                            formUrl += '&prefill:' + key + '~' + paramEncode(addItem.Prefill[key].toString());
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (keys_2_1 && !keys_2_1.done && (_d = keys_2.return)) _d.call(keys_2);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
                if (addItem.DuplicateEntity) {
                    formUrl += '&copy:' + addItem.DuplicateEntity;
                }
            }
            else if (item.Group) {
                // Group Item
                var groupItem = item;
                formUrl += 'group:' + groupItem.Group.Guid + ':' + groupItem.Group.Index + ':' + groupItem.Group.Part + ':' + groupItem.Group.Add;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_j && !_j.done && (_a = _h.return)) _a.call(_h);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return formUrl;
}
function convertUrlToForm(formUrl) {
    var e_5, _a, e_6, _b, e_7, _c;
    var form = { items: [] };
    var items = formUrl.split(',');
    try {
        for (var items_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
            var item = items_1_1.value;
            var isNumber = /^[0-9]*$/g;
            if (item.startsWith('inner:')) {
                // Inner Item
                var innerItem = {};
                var options = item.split('&');
                try {
                    for (var options_1 = (e_6 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(options)), options_1_1 = options_1.next(); !options_1_1.done; options_1_1 = options_1.next()) {
                        var option = options_1_1.value;
                        if (option.startsWith('inner:')) {
                            var innerItemParams = item.split(':');
                            innerItem.EntityId = parseInt(innerItemParams[1], 10);
                            innerItem.Field = innerItemParams[2];
                            innerItem.Parent = innerItemParams[3];
                            innerItem.Add = innerItemParams[4] === 'true';
                            innerItem.Index = parseInt(innerItemParams[5], 10);
                        }
                        else if (option.startsWith('prefill:')) {
                            if (innerItem.Prefill == null) {
                                innerItem.Prefill = {};
                            }
                            var prefillParams = option.split(':');
                            var key = prefillParams[1].split('~')[0];
                            var value = paramDecode(prefillParams[1].split('~')[1]);
                            innerItem.Prefill[key] = value;
                        }
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (options_1_1 && !options_1_1.done && (_b = options_1.return)) _b.call(options_1);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
                form.items.push(innerItem);
            }
            else if (isNumber.test(item)) {
                // Edit Item
                var editItem = { EntityId: parseInt(item, 10) };
                form.items.push(editItem);
            }
            else if (item.startsWith('new:')) {
                // Add Item
                var addItem = {};
                var options = item.split('&');
                try {
                    for (var options_2 = (e_7 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(options)), options_2_1 = options_2.next(); !options_2_1.done; options_2_1 = options_2.next()) {
                        var option = options_2_1.value;
                        if (option.startsWith('new:')) {
                            // Add Item ContentType
                            var newParams = option.split(':');
                            addItem.ContentTypeName = newParams[1];
                        }
                        else if (option.startsWith('for:')) {
                            // Add Item For
                            addItem.For = {};
                            var forParams = option.split(':');
                            var forType = forParams[1].split('~')[0];
                            var forValue = forParams[1].split('~')[1];
                            var forTarget = forParams[2];
                            switch (forType) {
                                case 's':
                                    addItem.For.String = paramDecode(forValue);
                                    break;
                                case 'n':
                                    addItem.For.Number = parseInt(forValue, 10);
                                    break;
                                case 'g':
                                    addItem.For.Guid = forValue;
                                    break;
                            }
                            addItem.For.Target = forTarget;
                        }
                        else if (option.startsWith('prefill:')) {
                            // Add Item Prefill
                            if (addItem.Prefill == null) {
                                addItem.Prefill = {};
                            }
                            var prefillParams = option.split(':');
                            var key = prefillParams[1].split('~')[0];
                            var value = paramDecode(prefillParams[1].split('~')[1]);
                            addItem.Prefill[key] = value;
                        }
                        else if (option.startsWith('copy:')) {
                            // Add Item Copy
                            var copyParams = option.split(':');
                            addItem.DuplicateEntity = parseInt(copyParams[1], 10);
                        }
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (options_2_1 && !options_2_1.done && (_c = options_2.return)) _c.call(options_2);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
                form.items.push(addItem);
            }
            else if (item.startsWith('group:')) {
                // Group Item
                var groupParams = item.split(':');
                var groupItem = {
                    Group: {
                        Guid: groupParams[1],
                        Index: parseInt(groupParams[2], 10),
                        Part: groupParams[3],
                        Add: groupParams[4] === 'true',
                    }
                };
                form.items.push(groupItem);
            }
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return form;
}
/** Encodes characters in URL parameter to not mess up routing. Don't forget to decode it! :) */
function paramEncode(text) {
    text = text.replace(/\//g, '%2F');
    text = text.replace(/\:/g, '%3A');
    text = text.replace(/\&/g, '%26');
    text = text.replace(/\~/g, '%7E');
    return text;
}
/** Decodes characters in URL parameter */
function paramDecode(text) {
    text = text.replace(/%2F/g, '/');
    text = text.replace(/%3A/g, ':');
    text = text.replace(/%26/g, '&');
    text = text.replace(/%7E/g, '~');
    return text;
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../edit/edit.matcher */ "it7M");




var appRoutes = [
    {
        path: ':zoneId/apps',
        loadChildren: function () { return Promise.all(/*! import() | apps-management-apps-management-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~c6332310"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~fd907a9b"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~688b9b68"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~4a56a0b6"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~dev-rest~bcfe902f"), __webpack_require__.e("default~apps-management-apps-management-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~33e631e1"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~edit-edit-module"), __webpack_require__.e("common"), __webpack_require__.e("apps-management-apps-management-module")]).then(__webpack_require__.bind(null, /*! ./apps-management/apps-management.module */ "dyKt")).then(function (m) { return m.AppsManagementModule; }); },
        data: { title: 'Apps' },
    },
    {
        path: ':zoneId/import',
        loadChildren: function () { return Promise.all(/*! import() | import-app-import-app-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~4a56a0b6"), __webpack_require__.e("common"), __webpack_require__.e("import-app-import-app-module")]).then(__webpack_require__.bind(null, /*! ./import-app/import-app.module */ "QK70")).then(function (m) { return m.ImportAppModule; }); },
        data: { title: 'Import App' },
    },
    {
        path: ':zoneId/:appId/app',
        loadChildren: function () { return Promise.all(/*! import() | app-administration-app-administration-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~c6332310"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~556c2cae"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~fd907a9b"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~688b9b68"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~4a56a0b6"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~dev-rest~bcfe902f"), __webpack_require__.e("default~app-administration-app-administration-module~item-history-item-history-module~ng-dialogs-src~05138939"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~33e631e1"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~edit-edit-module"), __webpack_require__.e("default~app-administration-app-administration-module~edit-edit-module"), __webpack_require__.e("default~app-administration-app-administration-module~content-type-fields-content-type-fields-module"), __webpack_require__.e("common"), __webpack_require__.e("app-administration-app-administration-module")]).then(__webpack_require__.bind(null, /*! ./app-administration/app-administration.module */ "i2HA")).then(function (m) { return m.AppAdministrationModule; }); },
        data: { title: 'App' },
    },
    {
        path: ':zoneId/:appId/code',
        loadChildren: function () { return Promise.all(/*! import() | code-editor-code-editor-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~556c2cae"), __webpack_require__.e("default~code-editor-code-editor-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~code-editor-code-editor-module~visual-query-visual-query-module"), __webpack_require__.e("common"), __webpack_require__.e("code-editor-code-editor-module")]).then(__webpack_require__.bind(null, /*! ./code-editor/code-editor.module */ "iluC")).then(function (m) { return m.CodeEditorModule; }); },
        data: { title: 'Code Editor' },
    },
    {
        path: ':zoneId/:appId/query/:pipelineId',
        loadChildren: function () { return Promise.all(/*! import() | visual-query-visual-query-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~556c2cae"), __webpack_require__.e("default~code-editor-code-editor-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~apps-management-apps-management-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~code-editor-code-editor-module~visual-query-visual-query-module"), __webpack_require__.e("common"), __webpack_require__.e("visual-query-visual-query-module")]).then(__webpack_require__.bind(null, /*! ./visual-query/visual-query.module */ "TpGC")).then(function (m) { return m.VisualQueryModule; }); },
        data: { title: 'Visual Query' },
    },
    {
        path: ':zoneId/:appId/:guid/:part/:index/replace',
        loadChildren: function () { return Promise.all(/*! import() | replace-content-replace-content-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45"), __webpack_require__.e("common"), __webpack_require__.e("replace-content-replace-content-module")]).then(__webpack_require__.bind(null, /*! ./replace-content/replace-content.module */ "N/cS")).then(function (m) { return m.ReplaceContentModule; }); },
        data: { title: 'Apps' },
    },
    {
        path: ':zoneId/:appId/:guid/:part/:index/reorder',
        loadChildren: function () { return Promise.all(/*! import() | manage-content-list-manage-content-list-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~edit-edit-module~manage-content-list-manage-content-list-module"), __webpack_require__.e("common"), __webpack_require__.e("manage-content-list-manage-content-list-module")]).then(__webpack_require__.bind(null, /*! ./manage-content-list/manage-content-list.module */ "NzEc")).then(function (m) { return m.ManageContentListModule; }); },
        data: { title: 'Reorder Items' },
    },
    {
        path: ':zoneId/:appId/items/:contentTypeStaticName',
        loadChildren: function () { return Promise.all(/*! import() | content-items-content-items-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~c6332310"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~556c2cae"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~fd907a9b"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~688b9b68"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~4a56a0b6"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~33e631e1"), __webpack_require__.e("common"), __webpack_require__.e("content-items-content-items-module")]).then(__webpack_require__.bind(null, /*! ./content-items/content-items.module */ "DUJ2")).then(function (m) { return m.ContentItemsModule; }); },
        data: { title: 'Items' },
    },
    {
        path: ':zoneId/:appId/fields/:contentTypeStaticName',
        loadChildren: function () { return Promise.all(/*! import() | content-type-fields-content-type-fields-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~c6332310"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~fd907a9b"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~688b9b68"), __webpack_require__.e("default~app-administration-app-administration-module~content-type-fields-content-type-fields-module"), __webpack_require__.e("common"), __webpack_require__.e("content-type-fields-content-type-fields-module")]).then(__webpack_require__.bind(null, /*! ./content-type-fields/content-type-fields.module */ "tjG3")).then(function (m) { return m.ContentTypeFieldsModule; }); },
        data: { title: 'Fields' },
    },
    {
        path: ':zoneId/:appId/versions/:itemId',
        loadChildren: function () { return Promise.all(/*! import() | item-history-item-history-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45"), __webpack_require__.e("default~app-administration-app-administration-module~item-history-item-history-module~ng-dialogs-src~05138939"), __webpack_require__.e("default~item-history-item-history-module~ng-dialogs-src-app-item-history-item-history-module"), __webpack_require__.e("item-history-item-history-module")]).then(__webpack_require__.bind(null, /*! ./item-history/item-history.module */ "2BEA")).then(function (m) { return m.ItemHistoryModule; }); },
    },
    {
        matcher: _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__["editRoot"],
        loadChildren: function () { return Promise.all(/*! import() | edit-edit-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~c6332310"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~556c2cae"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~688b9b68"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~4a56a0b6"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~dev-rest~bcfe902f"), __webpack_require__.e("default~code-editor-code-editor-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~apps-management-apps-management-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~edit-edit-module"), __webpack_require__.e("default~edit-edit-module~manage-content-list-manage-content-list-module"), __webpack_require__.e("default~dev-rest-dev-rest-module~edit-edit-module"), __webpack_require__.e("default~app-administration-app-administration-module~edit-edit-module"), __webpack_require__.e("common"), __webpack_require__.e("edit-edit-module")]).then(__webpack_require__.bind(null, /*! ../../../edit/edit.module */ "B+J5")).then(function (m) { return m.EditModule; }); },
        data: { title: 'Edit Item' },
    },
    {
        matcher: _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__["refreshEditRoot"],
        loadChildren: function () { return Promise.all(/*! import() | edit-refresh-edit-module */[__webpack_require__.e("common"), __webpack_require__.e("edit-refresh-edit-module")]).then(__webpack_require__.bind(null, /*! ../../../edit/refresh-edit.module */ "orgq")).then(function (m) { return m.RefreshEditModule; }); }
    },
    // routes below are not linked directly from the initializer and are used for testing
    // to make sure each module contains enough data to be self sustainable
    {
        path: ':zoneId/:appId/export/:contentTypeStaticName',
        loadChildren: function () { return Promise.all(/*! import() | content-export-content-export-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~c6332310"), __webpack_require__.e("common"), __webpack_require__.e("content-export-content-export-module")]).then(__webpack_require__.bind(null, /*! ./content-export/content-export.module */ "+hKU")).then(function (m) { return m.ContentExportModule; }); },
        data: { title: 'Export Items' },
    },
    {
        path: ':zoneId/:appId/export/:contentTypeStaticName/:selectedIds',
        loadChildren: function () { return Promise.all(/*! import() | content-export-content-export-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~c6332310"), __webpack_require__.e("common"), __webpack_require__.e("content-export-content-export-module")]).then(__webpack_require__.bind(null, /*! ./content-export/content-export.module */ "+hKU")).then(function (m) { return m.ContentExportModule; }); },
        data: { title: 'Export Items' },
    },
    {
        path: ':zoneId/:appId/import/:contentTypeStaticName',
        loadChildren: function () { return Promise.all(/*! import() | content-import-content-import-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~c6332310"), __webpack_require__.e("common"), __webpack_require__.e("content-import-content-import-module")]).then(__webpack_require__.bind(null, /*! ./content-import/content-import.module */ "W/vD")).then(function (m) { return m.ContentImportModule; }); },
        data: { title: 'Import Items' },
    },
    {
        path: ':zoneId/:appId/permissions/:type/:keyType/:key',
        loadChildren: function () { return Promise.all(/*! import() | permissions-permissions-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~556c2cae"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~fd907a9b"), __webpack_require__.e("common"), __webpack_require__.e("permissions-permissions-module")]).then(__webpack_require__.bind(null, /*! ./permissions/permissions.module */ "jl54")).then(function (m) { return m.PermissionsModule; }); },
        data: { title: 'Permissions' },
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "xWkI":
/*!********************************************************************!*\
  !*** ../edit/shared/store/actions/global-configuration.actions.ts ***!
  \********************************************************************/
/*! exports provided: loadDebugEnabled, toggleDebugEnabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDebugEnabled", function() { return loadDebugEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleDebugEnabled", function() { return toggleDebugEnabled; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "3oUN");

var loadDebugEnabled = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[GlobalConfiguration] LOAD_DEBUG_ENABLED', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var toggleDebugEnabled = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[GlobalConfiguration] TOGGLE_DEBUG_ENABLED');


/***/ }),

/***/ "xYZN":
/*!*****************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "kl+l");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map