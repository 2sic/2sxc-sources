(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "2aC0":
/*!***************************************************************!*\
  !*** ./src/app/apps-management/services/apps-list.service.ts ***!
  \***************************************************************/
/*! exports provided: AppsListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsListService", function() { return AppsListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../import-app/services/import-app.service */ "ZEis");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/context */ "Iv+g");






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

/***/ "55Ui":
/*!*****************************************************************!*\
  !*** ./src/app/content-items/services/content-items.service.ts ***!
  \*****************************************************************/
/*! exports provided: ContentItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentItemsService", function() { return ContentItemsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var projects_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/edit */ "geKs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _edit_shared_services_entity_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../edit/shared/services/entity.service */ "b67o");
/* harmony import */ var _content_type_fields_services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../content-type-fields/services/content-types-fields.service */ "/Foi");
/* harmony import */ var _shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/helpers/file-to-base64.helper */ "YW/4");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/services/context */ "Iv+g");











var ContentItemsService = /** @class */ (function () {
    function ContentItemsService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    ContentItemsService.prototype.getAll = function (contentTypeStaticName) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(projects_edit__WEBPACK_IMPORTED_MODULE_4__["webApiEntityList"]), {
            params: { appId: this.context.appId.toString(), contentType: contentTypeStaticName }
        });
    };
    ContentItemsService.prototype.getColumns = function (contentTypeStaticName) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_content_type_fields_services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_8__["webApiFieldsAll"]), {
            params: { appId: this.context.appId.toString(), staticName: contentTypeStaticName }
        });
    };
    ContentItemsService.prototype.importItem = function (file) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(Object(_shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_9__["toBase64"])(file)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (fileBase64) {
            return _this.http.post(_this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services_entity_service__WEBPACK_IMPORTED_MODULE_7__["webApiEntityRoot"] + 'upload'), {
                AppId: _this.context.appId.toString(),
                ContentBase64: fileBase64,
            });
        }));
    };
    ContentItemsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_10__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    ContentItemsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_10__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], ContentItemsService);
    return ContentItemsService;
}());



/***/ }),

/***/ "Bwh1":
/*!*******************************************************************!*\
  !*** ./src/app/content-export/services/content-export.service.ts ***!
  \*******************************************************************/
/*! exports provided: ContentExportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentExportService", function() { return ContentExportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _edit_shared_services_entity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../edit/shared/services/entity.service */ "b67o");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app-administration/services/content-types.service */ "S36y");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/context */ "Iv+g");






var ContentExportService = /** @class */ (function () {
    function ContentExportService(context, dnnContext) {
        this.context = context;
        this.dnnContext = dnnContext;
    }
    ContentExportService.prototype.exportContent = function (values, selectedIds) {
        var selectedIdsString = selectedIds ? '&selectedids=' + selectedIds.join() : '';
        var url = this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services_entity_service__WEBPACK_IMPORTED_MODULE_3__["webApiEntityRoot"] + 'Download')
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
        var url = this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services_entity_service__WEBPACK_IMPORTED_MODULE_3__["webApiEntityRoot"] + 'Json')
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

/***/ "DGvA":
/*!**********************************************************************!*\
  !*** ./src/app/content-type-fields/constants/data-type.constants.ts ***!
  \**********************************************************************/
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

/***/ "GTfO":
/*!************************************************************!*\
  !*** ./src/app/content-items/services/entities.service.ts ***!
  \************************************************************/
/*! exports provided: EntitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitiesService", function() { return EntitiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var projects_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/edit */ "geKs");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/context */ "Iv+g");






var EntitiesService = /** @class */ (function () {
    function EntitiesService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    EntitiesService.prototype.delete = function (type, id, tryForce) {
        return this.http.delete(this.dnnContext.$2sxc.http.apiUrl(projects_edit__WEBPACK_IMPORTED_MODULE_4__["webApiEntityRoot"] + 'delete'), {
            params: { contentType: type, id: id.toString(), appId: this.context.appId.toString(), force: tryForce.toString() },
        });
    };
    EntitiesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    EntitiesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], EntitiesService);
    return EntitiesService;
}());



/***/ }),

/***/ "H0VJ":
/*!***************************************************!*\
  !*** ./src/app/shared/services/dialog.service.ts ***!
  \***************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _constants_dialog_types_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/dialog-types.constants */ "GJZh");
/* harmony import */ var _constants_session_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/session.constants */ "0ELX");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "Iv+g");



// tslint:disable-next-line:max-line-length


var DialogService = /** @class */ (function () {
    function DialogService(context) {
        this.context = context;
    }
    DialogService.prototype.openCodeFile = function (path) {
        var dialog = _constants_dialog_types_constants__WEBPACK_IMPORTED_MODULE_2__["DialogTypeConstants"].Develop;
        var form = {
            items: [{ Path: path }]
        };
        var oldHref = sessionStorage.getItem(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyUrl"]);
        var oldUrl = new URL(oldHref);
        var newHref = oldUrl.origin + oldUrl.pathname + oldUrl.search;
        var newHash = this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyZoneId"], this.context.zoneId.toString()).replace('&', '#') +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyAppId"], this.context.appId.toString()) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyTabId"], this.context.tabId.toString()) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyModuleId"], this.context.moduleId.toString()) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyContentBlockId"], this.context.contentBlockId.toString()) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyPortalRoot"]) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyPartOfPage"]) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyRequestToken"]) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyDialog"], dialog) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyItems"], JSON.stringify(form.items)) +
            (sessionStorage.getItem(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyDebug"]) ? this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyDebug"]) : '') +
            '';
        var url = newHref + newHash;
        window.open(url, '_blank');
    };
    DialogService.prototype.openQueryDesigner = function (queryId) {
        var dialog = _constants_dialog_types_constants__WEBPACK_IMPORTED_MODULE_2__["DialogTypeConstants"].PipelineDesigner;
        var form = {
            items: [{ EntityId: queryId }],
        };
        var oldHref = sessionStorage.getItem(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyUrl"]);
        var oldUrl = new URL(oldHref);
        var newHref = oldUrl.origin + oldUrl.pathname + oldUrl.search;
        var newHash = this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyZoneId"], this.context.zoneId.toString()).replace('&', '#') +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyAppId"], this.context.appId.toString()) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyTabId"], this.context.tabId.toString()) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyModuleId"], this.context.moduleId.toString()) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyContentBlockId"], this.context.contentBlockId.toString()) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyPortalRoot"]) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyPartOfPage"]) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyRequestToken"]) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyDialog"], dialog) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyPipelineId"], queryId.toString()) +
            this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyItems"], JSON.stringify(form.items)) +
            (sessionStorage.getItem(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyDebug"]) ? this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__["keyDebug"]) : '') +
            '';
        var url = newHref + newHash;
        window.open(url, '_blank');
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

/***/ "KoVM":
/*!**************************************************************************!*\
  !*** ./src/app/app-administration/services/app-dialog-config.service.ts ***!
  \**************************************************************************/
/*! exports provided: AppDialogConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDialogConfigService", function() { return AppDialogConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/context */ "Iv+g");





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

/***/ "PlBB":
/*!***********************************************************************!*\
  !*** ./src/app/manage-content-list/services/content-group.service.ts ***!
  \***********************************************************************/
/*! exports provided: ContentGroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentGroupService", function() { return ContentGroupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/context */ "Iv+g");





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

/***/ "YW/4":
/*!*********************************************************!*\
  !*** ./src/app/shared/helpers/file-to-base64.helper.ts ***!
  \*********************************************************/
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

/***/ "ZEis":
/*!***********************************************************!*\
  !*** ./src/app/import-app/services/import-app.service.ts ***!
  \***********************************************************/
/*! exports provided: webApiAppRoot, ImportAppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiAppRoot", function() { return webApiAppRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportAppService", function() { return ImportAppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/context */ "Iv+g");





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

/***/ "frVg":
/*!******************************************************************!*\
  !*** ./src/app/app-administration/services/pipelines.service.ts ***!
  \******************************************************************/
/*! exports provided: webApiQueryRun, webApiQuerySave, webApiQueryGet, webApiQueryDataSources, PipelinesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiQueryRun", function() { return webApiQueryRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiQuerySave", function() { return webApiQuerySave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiQueryGet", function() { return webApiQueryGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiQueryDataSources", function() { return webApiQueryDataSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelinesService", function() { return PipelinesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var projects_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/edit */ "geKs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/helpers/file-to-base64.helper */ "YW/4");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/context */ "Iv+g");









var webApiQueryRoot = 'admin/query/';
var webApiQueryImport = webApiQueryRoot + 'import';
var webApiQueryClone = webApiQueryRoot + 'Clone';
var webApiQueryDelete = webApiQueryRoot + 'Delete';
var webApiQueryRun = webApiQueryRoot + 'Run';
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
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(projects_edit__WEBPACK_IMPORTED_MODULE_4__["webApiEntityList"]), {
            params: { appId: this.context.appId.toString(), contentType: contentType }
        });
    };
    PipelinesService.prototype.importQuery = function (file) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(Object(_shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_7__["toBase64"])(file)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (fileBase64) {
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

/***/ "i8O3":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: TranslateHttpLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateHttpLoader", function() { return TranslateHttpLoader; });
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "9fIP");
/* harmony import */ var C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! C:/Projects/2sxc/eav-item-dialog-angular/node_modules/@babel/runtime/helpers/esm/createClass */ "MMYH");



var TranslateHttpLoader = /*#__PURE__*/function () {
  function TranslateHttpLoader(http) {
    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/assets/i18n/";
    var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ".json";

    Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TranslateHttpLoader);

    this.http = http;
    this.prefix = prefix;
    this.suffix = suffix;
  }
  /**
   * Gets the translations from the server
   */


  Object(C_Projects_2sxc_eav_item_dialog_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TranslateHttpLoader, [{
    key: "getTranslation",
    value: function getTranslation(lang) {
      return this.http.get("".concat(this.prefix).concat(lang).concat(this.suffix));
    }
  }]);

  return TranslateHttpLoader;
}();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "nsG0":
/*!***********************************************************************!*\
  !*** ./src/app/content-type-fields/constants/input-type.constants.ts ***!
  \***********************************************************************/
/*! exports provided: InputTypeConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTypeConstants", function() { return InputTypeConstants; });
var InputTypeConstants = /** @class */ (function () {
    function InputTypeConstants() {
    }
    // String
    InputTypeConstants.StringDefault = 'string-default';
    InputTypeConstants.StringUrlPath = 'string-url-path';
    InputTypeConstants.StringDropdown = 'string-dropdown';
    InputTypeConstants.StringDropdownQuery = 'string-dropdown-query';
    InputTypeConstants.StringFontIconPicker = 'string-font-icon-picker';
    InputTypeConstants.StringTemplatePicker = 'string-template-picker';
    InputTypeConstants.StringWysiwyg = 'string-wysiwyg';
    // Boolean
    InputTypeConstants.BooleanDefault = 'boolean-default';
    // DateTime
    InputTypeConstants.DatetimeDefault = 'datetime-default';
    // Empty
    InputTypeConstants.EmptyDefault = 'empty-default';
    // Number
    InputTypeConstants.NumberDefault = 'number-default';
    // Entity
    InputTypeConstants.EntityDefault = 'entity-default';
    InputTypeConstants.EntityQuery = 'entity-query';
    InputTypeConstants.EntityContentBlocks = 'entity-content-blocks';
    // Hyperlink
    InputTypeConstants.HyperlinkDefault = 'hyperlink-default';
    InputTypeConstants.HyperlinkLibrary = 'hyperlink-library';
    // Custom
    InputTypeConstants.ExternalWebComponent = 'external-web-component';
    InputTypeConstants.CustomGPS = 'custom-gps';
    InputTypeConstants.CustomDefault = 'custom-default';
    // Old
    InputTypeConstants.OldTypeDropdown = 'dropdown';
    InputTypeConstants.OldTypeWysiwyg = 'wysiwyg';
    InputTypeConstants.OldTypeDefault = 'default';
    InputTypeConstants.StringWysiwygTinymce = 'string-wysiwyg-tinymce';
    InputTypeConstants.StringWysiwygAdv = 'string-wysiwyg-adv';
    InputTypeConstants.StringWysiwygDnn = 'string-wysiwyg-dnn';
    // Default
    InputTypeConstants.DefaultSuffix = '-default';
    return InputTypeConstants;
}());



/***/ }),

/***/ "orgq":
/*!**************************************!*\
  !*** ../edit/refresh-edit.module.ts ***!
  \**************************************/
/*! exports provided: RefreshEditComponent, RefreshEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshEditComponent", function() { return RefreshEditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshEditModule", function() { return RefreshEditModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _shared_services_edit_routing_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/edit-routing.helpers */ "LCtb");






var RefreshEditComponent = /** @class */ (function () {
    function RefreshEditComponent(router, route) {
        var params = route.snapshot.params;
        var oldEditUrl = "edit/refresh/" + params.items;
        var newEditUrl = "edit/" + params.items;
        var currentUrl = Object(_shared_services_edit_routing_helpers__WEBPACK_IMPORTED_MODULE_3__["calculatePathFromRoot"])(route);
        var lastIndex = currentUrl.lastIndexOf(oldEditUrl);
        if (lastIndex <= 0) {
            return;
        }
        var newUrl = currentUrl.substring(0, lastIndex) + currentUrl.substring(lastIndex).replace(oldEditUrl, newEditUrl);
        router.navigate([newUrl]);
    }
    RefreshEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    RefreshEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: '',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RefreshEditComponent);
    return RefreshEditComponent;
}());

var editRefreshRoutes = [
    {
        path: '', component: RefreshEditComponent, data: { title: 'Refreshing Edit Dialog' }
    },
];
var RefreshEditModule = /** @class */ (function () {
    function RefreshEditModule() {
    }
    RefreshEditModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                RefreshEditComponent,
            ],
            entryComponents: [
                RefreshEditComponent,
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(editRefreshRoutes),
            ],
        })
    ], RefreshEditModule);
    return RefreshEditModule;
}());



/***/ }),

/***/ "ykZ8":
/*!**********************************************************!*\
  !*** ./src/app/permissions/services/metadata.service.ts ***!
  \**********************************************************/
/*! exports provided: MetadataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataService", function() { return MetadataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/context */ "Iv+g");





var webApiRoot = 'admin/metadata/get';
var MetadataService = /** @class */ (function () {
    function MetadataService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    /**
     * Fetches metadata for given key in metadata content type
     * @param typeId metadataOf something. For more info checkout out eavConstants file
     * @param keyType e.g. for keyType === guid, key === contentTypeStaticName
     * @param key key of content type for which we search for permissions. Key is connected with keyType
     * @param contentTypeName name of content type where permissions are stored
     */
    MetadataService.prototype.getMetadata = function (typeId, keyType, key, contentTypeName) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiRoot), {
            params: {
                appId: this.context.appId.toString(),
                targetType: typeId.toString(),
                keyType: keyType,
                key: key,
                contentType: contentTypeName,
            },
        });
    };
    MetadataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    MetadataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], MetadataService);
    return MetadataService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map