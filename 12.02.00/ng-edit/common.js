(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "L6al":
/*!***********************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/services/apps-list.service.ts ***!
  \***********************************************************************************/
/*! exports provided: AppsListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsListService", function() { return AppsListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../import-app/services/import-app.service */ "BToE");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");






var AppsListService = /** @class */ (function () {
    function AppsListService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    AppsListService.prototype.apiUrl = function (name) {
        return this.dnnContext.$2sxc.http.apiUrl(name);
    };
    AppsListService.prototype.getAll = function () {
        return this.http.get(this.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_4__["webApiAppRoot"] + 'list'), {
            params: { zoneId: this.context.zoneId.toString() }
        });
    };
    AppsListService.prototype.create = function (name) {
        return this.http.post(this.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_4__["webApiAppRoot"] + 'app'), {}, {
            params: { zoneId: this.context.zoneId.toString(), name: name }
        });
    };
    AppsListService.prototype.delete = function (appId) {
        return this.http.delete(this.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_4__["webApiAppRoot"] + 'app'), {
            params: { zoneId: this.context.zoneId.toString(), appId: appId.toString() },
        });
    };
    AppsListService.prototype.flushCache = function (appId) {
        return this.http.get(this.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_4__["webApiAppRoot"] + 'flushcache'), {
            params: { zoneId: this.context.zoneId.toString(), appId: appId.toString() },
        });
    };
    AppsListService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    AppsListService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], AppsListService);
    return AppsListService;
}());



/***/ }),

/***/ "OYZM":
/*!************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/shared/translation/translate-loader-with-error-handling.ts ***!
  \************************************************************************************************/
/*! exports provided: TranslateLoaderWithErrorHandling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateLoaderWithErrorHandling", function() { return TranslateLoaderWithErrorHandling; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


/**
 * This loader should catch a 404 if the file doesn't exist and not result in errors.
 * https://stackoverflow.com/questions/47391613/how-to-set-a-fallback-assets-i18n-en-json-when-url-is-not-available-ngx-trans
 */
var TranslateLoaderWithErrorHandling = /** @class */ (function () {
    function TranslateLoaderWithErrorHandling(http, prefix, suffix) {
        this.http = http;
        this.prefix = prefix;
        this.suffix = suffix;
    }
    TranslateLoaderWithErrorHandling.prototype.getTranslation = function (lang) {
        var _this = this;
        return this.http.get("" + this.prefix + lang + this.suffix).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            console.warn("Translation: Failed to get language '" + lang + "' from " + _this.prefix, error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({});
        }));
    };
    return TranslateLoaderWithErrorHandling;
}());



/***/ }),

/***/ "Sbq5":
/*!***********************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/shared/services/dialog.service.ts ***!
  \***********************************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constants_dialog_types_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/dialog-types.constants */ "tgQT");
/* harmony import */ var _constants_session_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/session.constants */ "bazF");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "1O52");



// tslint:disable-next-line:max-line-length


var DialogService = /** @class */ (function () {
    function DialogService(context) {
        this.context = context;
    }
    DialogService.prototype.openCodeFile = function (path, isShared) {
        if (isShared === void 0) { isShared = false; }
        var dialog = _constants_dialog_types_constants__WEBPACK_IMPORTED_MODULE_2__["DialogTypeConstants"].Develop;
        var form = {
            items: [{ Path: path }]
        };
        var url = this.sharedUrlRoot() +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyDialog"], dialog) +
            this.buildHashParam('isshared', isShared.toString()) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyItems"], JSON.stringify(form.items)) +
            (sessionStorage.getItem(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyDebug"]) ? this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyDebug"]) : '') +
            '';
        window.open(url, '_blank');
    };
    DialogService.prototype.openQueryDesigner = function (queryId) {
        var dialog = _constants_dialog_types_constants__WEBPACK_IMPORTED_MODULE_2__["DialogTypeConstants"].PipelineDesigner;
        var form = {
            items: [{ EntityId: queryId }],
        };
        var url = this.sharedUrlRoot() +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyDialog"], dialog) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyPipelineId"], queryId.toString()) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyItems"], JSON.stringify(form.items)) +
            (sessionStorage.getItem(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyDebug"]) ? this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyDebug"]) : '') +
            '';
        window.open(url, '_blank');
    };
    /** A lot of the link is identical when opening the admin-dialogs in a new window */
    DialogService.prototype.sharedUrlRoot = function () {
        var oldHref = sessionStorage.getItem(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyUrl"]);
        var oldUrl = new URL(oldHref);
        var newHref = oldUrl.origin + oldUrl.pathname + oldUrl.search;
        return newHref +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyZoneId"], this.context.zoneId.toString()).replace('&', '#') +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyAppId"], this.context.appId.toString()) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyTabId"], this.context.tabId.toString()) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyModuleId"], this.context.moduleId.toString()) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyContentBlockId"], this.context.contentBlockId.toString()) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyPartOfPage"]) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyRequestToken"]) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyApi"]);
    };
    /** Encodes param if necessary */
    DialogService.prototype.buildHashParam = function (key, value) {
        var rawKey = key.replace(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["prefix"], '');
        var valueTemp = (value != null) ? value : sessionStorage.getItem(key);
        var rawValue = encodeURIComponent(valueTemp);
        var hashParam = "&" + rawKey + "=" + rawValue;
        return hashParam;
    };
    DialogService.ctorParameters = function () { return [
        { type: _context__WEBPACK_IMPORTED_MODULE_4__["Context"] }
    ]; };
    DialogService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_context__WEBPACK_IMPORTED_MODULE_4__["Context"]])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "UzGh":
/*!***********************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/shared/translation/translate-configuration.ts ***!
  \***********************************************************************************/
/*! exports provided: buildTranslateConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildTranslateConfiguration", function() { return buildTranslateConfiguration; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


function buildTranslateConfiguration(factory) {
    return {
        loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateLoader"],
            useFactory: factory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]],
        },
        defaultLanguage: 'en',
        isolate: true,
    };
}


/***/ }),

/***/ "VNq2":
/*!***************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-export/services/content-export.service.ts ***!
  \***************************************************************************************/
/*! exports provided: ContentExportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentExportService", function() { return ContentExportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _edit_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../edit/shared/services */ "5t3I");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app-administration/services/content-types.service */ "uwFg");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");






var ContentExportService = /** @class */ (function () {
    function ContentExportService(context, dnnContext) {
        this.context = context;
        this.dnnContext = dnnContext;
    }
    ContentExportService.prototype.exportContent = function (values, selectedIds) {
        var selectedIdsString = selectedIds ? '&selectedids=' + selectedIds.join() : '';
        var url = this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services__WEBPACK_IMPORTED_MODULE_3__["webApiEntityRoot"] + 'Download')
            + '?appId=' + this.context.appId
            + '&language=' + values.language
            + '&defaultLanguage=' + values.defaultLanguage
            + '&contentType=' + values.contentTypeStaticName
            + '&recordExport=' + values.recordExport
            + '&resourcesReferences=' + values.resourcesReferences
            + '&languageReferences=' + values.languageReferences
            + selectedIdsString;
        window.open(url, '_blank', '');
    };
    ContentExportService.prototype.exportJson = function (typeName) {
        var url = this.dnnContext.$2sxc.http.apiUrl(_app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_4__["webApiTypeRoot"] + 'Json')
            + '?appId=' + this.context.appId
            + '&name=' + typeName;
        window.open(url, '_blank', '');
    };
    ContentExportService.prototype.exportEntity = function (id, prefix, metadata) {
        var url = this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services__WEBPACK_IMPORTED_MODULE_3__["webApiEntityRoot"] + 'Json')
            + '?appId=' + this.context.appId
            + '&id=' + id
            + '&prefix=' + prefix
            + '&withMetadata=' + metadata;
        window.open(url, '_blank', '');
    };
    ContentExportService.ctorParameters = function () { return [
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    ContentExportService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], ContentExportService);
    return ContentExportService;
}());



/***/ }),

/***/ "WRrS":
/*!*************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-items/services/content-items.service.ts ***!
  \*************************************************************************************/
/*! exports provided: ContentItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentItemsService", function() { return ContentItemsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _edit_shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../edit/shared/services */ "5t3I");
/* harmony import */ var _content_type_fields_services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../content-type-fields/services/content-types-fields.service */ "spPA");
/* harmony import */ var _shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/helpers/file-to-base64.helper */ "LNjK");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");










var ContentItemsService = /** @class */ (function () {
    function ContentItemsService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    ContentItemsService.prototype.getAll = function (contentTypeStaticName) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services__WEBPACK_IMPORTED_MODULE_6__["webApiEntityList"]), {
            params: { appId: this.context.appId.toString(), contentType: contentTypeStaticName }
        });
    };
    ContentItemsService.prototype.getColumns = function (contentTypeStaticName) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_content_type_fields_services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_7__["webApiFieldsAll"]), {
            params: { appId: this.context.appId.toString(), staticName: contentTypeStaticName }
        });
    };
    ContentItemsService.prototype.importItem = function (file) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(Object(_shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_8__["toBase64"])(file)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (fileBase64) {
            return _this.http.post(_this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services__WEBPACK_IMPORTED_MODULE_6__["webApiEntityRoot"] + 'upload'), {
                AppId: _this.context.appId.toString(),
                ContentBase64: fileBase64,
            });
        }));
    };
    ContentItemsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_9__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    ContentItemsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_9__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], ContentItemsService);
    return ContentItemsService;
}());



/***/ }),

/***/ "bv8H":
/*!******************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-type-fields/constants/data-type.constants.ts ***!
  \******************************************************************************************/
/*! exports provided: DataTypeConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTypeConstants", function() { return DataTypeConstants; });
var DataTypeConstants = /** @class */ (function () {
    function DataTypeConstants() {
    }
    DataTypeConstants.String = 'String';
    DataTypeConstants.Entity = 'Entity';
    DataTypeConstants.Boolean = 'Boolean';
    DataTypeConstants.Number = 'Number';
    DataTypeConstants.Custom = 'Custom';
    DataTypeConstants.DateTime = 'DateTime';
    DataTypeConstants.Hyperlink = 'Hyperlink';
    DataTypeConstants.Empty = 'Empty';
    return DataTypeConstants;
}());



/***/ }),

/***/ "n63V":
/*!*******************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/manage-content-list/services/content-group.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: ContentGroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentGroupService", function() { return ContentGroupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");





var webApiContentGroup = 'cms/contentgroup/';
var ContentGroupService = /** @class */ (function () {
    function ContentGroupService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    ContentGroupService.prototype.getItems = function (item) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiContentGroup + 'replace'), {
            params: { appId: this.context.appId.toString(), guid: item.guid, part: item.part, index: item.index.toString() }
        });
    };
    ContentGroupService.prototype.saveItem = function (item) {
        return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiContentGroup + 'replace'), {}, {
            params: { guid: item.guid, part: item.part, index: item.index.toString(), entityId: item.id.toString(), add: "" + item.add }
        });
    };
    ContentGroupService.prototype.getList = function (contentGroup) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiContentGroup + 'itemlist'), {
            params: { appId: this.context.appId.toString(), guid: contentGroup.guid, part: contentGroup.part }
        });
    };
    ContentGroupService.prototype.saveList = function (contentGroup, resortedList) {
        return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiContentGroup + 'itemlist'), resortedList, {
            params: { appId: this.context.appId.toString(), guid: contentGroup.guid, part: contentGroup.part }
        });
    };
    ContentGroupService.prototype.getHeader = function (contentGroup) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiContentGroup + 'header'), {
            params: { appId: this.context.appId.toString(), guid: contentGroup.guid }
        });
    };
    ContentGroupService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    ContentGroupService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], ContentGroupService);
    return ContentGroupService;
}());



/***/ }),

/***/ "umSf":
/*!*****************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/shared/translation/index.ts ***!
  \*****************************************************************/
/*! exports provided: buildTranslateConfiguration, TranslateLoaderWithErrorHandling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translate_configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translate-configuration */ "UzGh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildTranslateConfiguration", function() { return _translate_configuration__WEBPACK_IMPORTED_MODULE_0__["buildTranslateConfiguration"]; });

/* harmony import */ var _translate_loader_with_error_handling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translate-loader-with-error-handling */ "OYZM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TranslateLoaderWithErrorHandling", function() { return _translate_loader_with_error_handling__WEBPACK_IMPORTED_MODULE_1__["TranslateLoaderWithErrorHandling"]; });





/***/ })

}]);
//# sourceMappingURL=common.js.map