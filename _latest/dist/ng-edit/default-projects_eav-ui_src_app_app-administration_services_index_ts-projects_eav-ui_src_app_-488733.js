"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["default-projects_eav-ui_src_app_app-administration_services_index_ts-projects_eav-ui_src_app_-488733"],{

/***/ 22743:
/*!******************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/services/app-dialog-config.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppDialogConfigService: () => (/* binding */ AppDialogConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 86301);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var _edit_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../edit/shared/store/ngrx-data */ 27521);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _shared_services_features_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/features.service */ 44858);
/* harmony import */ var _shared_services_service_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/service-base */ 4979);
/* harmony import */ var _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/logging/eav-logger */ 6812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 46443);












const logThis = false;
const webApiSettings = 'admin/dialog/settings';
class AppDialogConfigService extends _shared_services_service_base__WEBPACK_IMPORTED_MODULE_3__.ServiceBase {
  constructor(http, context,
  // private dnnContext: DnnContext,
  globalConfigService, featuresService) {
    super(new _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_4__.EavLogger('AppDialogConfigService', logThis));
    this.http = http;
    this.context = context;
    this.globalConfigService = globalConfigService;
    this.dialogSettings$ = {};
    this.log.a(`using context #${this.context.log.svcId}`);
    featuresService.loadFromService(this);
  }
  ngOnDestroy() {
    super.destroy();
    // TODO: probably should add an onDestroy and ensure all subscriptions in dialogSettings$ are killed
  }
  getCurrent$() {
    const appId = this.context.appId;
    this.log.a(`getCurrent\$ - appId:${appId}`);
    return this.getShared$(appId);
  }
  // new 2dg
  getSitePrimaryApp$() {
    return this.getCurrent$().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(dc => dc?.Context.Site.PrimaryApp));
  }
  getGlobalPrimaryApp$() {
    return this.getCurrent$().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(dc => dc?.Context.System.PrimaryApp));
  }
  getShared$(appId) {
    this.log.a('getShared$ appId: ' + appId);
    // if (!this.dialogSettings$[appIdToUse])
    this.dialogSettings$[appId] ??= this.getDialogSettings(appId, 'getShared$').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.shareReplay)({
      refCount: false
    }));
    return this.dialogSettings$[appId];
  }
  getDialogSettings(appId, reqBy) {
    this.log.a('getDialogSettings', {
      appId,
      reqBy
    });
    return this.http.get(webApiSettings, {
      params: {
        appId: appId ?? this.context.appId.toString()
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(dlgSettings => {
      dlgSettings.Context.Language.List = dlgSettings.Context.Language.List.filter(language => language.IsEnabled);
      return dlgSettings;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(dlgSettings => {
      this.globalConfigService.allowDebug(dlgSettings.Context.Enable.DebugMode);
    }));
  }
  static #_ = this.ɵfac = function AppDialogConfigService_Factory(t) {
    return new (t || AppDialogConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_1__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_edit_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_0__.GlobalConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_services_features_service__WEBPACK_IMPORTED_MODULE_2__.FeaturesService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: AppDialogConfigService,
    factory: AppDialogConfigService.ɵfac
  });
}

/***/ }),

/***/ 17693:
/*!**************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/services/content-types.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentTypesService: () => (/* binding */ ContentTypesService),
/* harmony export */   webApiTypeRoot: () => (/* binding */ webApiTypeRoot)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);








// We should list all the "full" paths here, so it's easier to find when searching for API calls
const webApiTypeRoot = 'admin/type/';
const webApiTypeGet = 'admin/type/get';
const webApiTypes = 'admin/type/list';
const webApiTypeScopes = 'admin/type/scopes';
const webApiTypeSave = 'admin/type/save';
const webApiTypeDelete = 'admin/type/delete';
const webApiTypeImport = 'admin/type/import';
const webApiTypeAddGhost = 'admin/type/addghost';
class ContentTypesService {
  constructor(http, context, dnnContext) {
    this.http = http;
    this.context = context;
    this.dnnContext = dnnContext;
  }
  apiUrl(name) {
    return this.dnnContext.$2sxc.http.apiUrl(name);
  }
  retrieveContentType(staticName) {
    return this.http.get(this.apiUrl(webApiTypeGet), {
      params: {
        appId: this.context.appId.toString(),
        contentTypeId: staticName
      }
    });
  }
  retrieveContentTypes(scope) {
    return this.http.get(this.apiUrl(webApiTypes), {
      params: {
        appId: this.context.appId.toString(),
        scope
      }
    });
  }
  // TODO: remove this method after upgrade to V2
  getScopes() {
    return this.http.get(this.apiUrl(webApiTypeScopes), {
      params: {
        appId: this.context.appId.toString()
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(scopesData => {
      // wip during upgrade:
      const scopes = scopesData.old;
      const scopeOptions = Object.keys(scopes).map(key => ({
        name: scopes[key],
        value: key
      }));
      return scopeOptions;
    }));
  }
  getScopesV2() {
    return this.http.get(this.apiUrl(webApiTypeScopes), {
      params: {
        appId: this.context.appId.toString()
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(scopesData => scopesData.scopes));
  }
  save(contentType) {
    return this.http.post(this.apiUrl(webApiTypeSave), contentType, {
      params: {
        appid: this.context.appId.toString()
      }
    });
  }
  delete(contentType) {
    return this.http.delete(this.apiUrl(webApiTypeDelete), {
      params: {
        appid: this.context.appId.toString(),
        staticName: contentType.StaticName
      }
    });
  }
  import(files) {
    const formData = new FormData();
    for (const file of files) {
      formData.append('File', file);
    }
    return this.http.post(this.apiUrl(webApiTypeImport), formData, {
      params: {
        appId: this.context.appId.toString(),
        zoneId: this.context.zoneId.toString()
      }
    });
  }
  createGhost(sourceStaticName) {
    return this.http.post(this.apiUrl(webApiTypeAddGhost), null, {
      params: {
        appid: this.context.appId.toString(),
        sourceStaticName
      }
    });
  }
  static #_ = this.ɵfac = function ContentTypesService_Factory(t) {
    return new (t || ContentTypesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_0__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ContentTypesService,
    factory: ContentTypesService.ɵfac
  });
}

/***/ }),

/***/ 71475:
/*!*****************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/services/export-app-parts.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExportAppPartsService: () => (/* binding */ ExportAppPartsService)
/* harmony export */ });
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _import_app_parts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import-app-parts.service */ 58624);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);








class ExportAppPartsService {
  constructor(http, context, dnnContext) {
    this.http = http;
    this.context = context;
    this.dnnContext = dnnContext;
  }
  getContentInfo(scope) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_import_app_parts_service__WEBPACK_IMPORTED_MODULE_1__.webApiAppPartsRoot + 'Get'), {
      params: {
        appid: this.context.appId.toString(),
        zoneId: this.context.zoneId.toString(),
        scope
      }
    });
  }
  exportParts(contentTypeIds, entityIds, templateIds) {
    const url = this.dnnContext.$2sxc.http.apiUrl(_import_app_parts_service__WEBPACK_IMPORTED_MODULE_1__.webApiAppPartsRoot + 'Export') + '?appId=' + this.context.appId.toString() + '&zoneId=' + this.context.zoneId.toString() + '&contentTypeIdsString=' + contentTypeIds.join(';') + '&entityIdsString=' + entityIds.join(';') + '&templateIdsString=' + templateIds.join(';');
    window.open(url, '_blank', '');
  }
  static #_ = this.ɵfac = function ExportAppPartsService_Factory(t) {
    return new (t || ExportAppPartsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_0__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ExportAppPartsService,
    factory: ExportAppPartsService.ɵfac
  });
}

/***/ }),

/***/ 320:
/*!***********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/services/export-app.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExportAppService: () => (/* binding */ ExportAppService)
/* harmony export */ });
/* harmony import */ var _import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../import-app/services/import-app.service */ 71772);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);








class ExportAppService {
  constructor(http, context, dnnContext) {
    this.http = http;
    this.context = context;
    this.dnnContext = dnnContext;
  }
  getAppInfo() {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_0__.webApiAppRoot + 'Statistics'), {
      params: {
        appid: this.context.appId.toString(),
        zoneId: this.context.zoneId.toString()
      }
    });
  }
  exportApp(includeContentGroups, resetAppGuid) {
    const url = this.dnnContext.$2sxc.http.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_0__.webApiAppRoot + 'Export') + '?appId=' + this.context.appId + '&zoneId=' + this.context.zoneId + '&includeContentGroups=' + includeContentGroups + '&resetAppGuid=' + resetAppGuid;
    window.open(url, '_blank', '');
  }
  exportForVersionControl({
    includeContentGroups,
    resetAppGuid,
    withFiles
  }) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_0__.webApiAppRoot + 'SaveData'), {
      params: {
        appid: this.context.appId.toString(),
        zoneId: this.context.zoneId.toString(),
        includeContentGroups: includeContentGroups.toString(),
        resetAppGuid: resetAppGuid.toString(),
        withPortalFiles: withFiles.toString()
      }
    });
  }
  static #_ = this.ɵfac = function ExportAppService_Factory(t) {
    return new (t || ExportAppService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_1__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ExportAppService,
    factory: ExportAppService.ɵfac
  });
}

/***/ }),

/***/ 58624:
/*!*****************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/services/import-app-parts.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportAppPartsService: () => (/* binding */ ImportAppPartsService),
/* harmony export */   webApiAppPartsRoot: () => (/* binding */ webApiAppPartsRoot)
/* harmony export */ });
/* harmony import */ var _import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../import-app/services/import-app.service */ 71772);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);








const webApiAppPartsRoot = 'admin/appParts/';
class ImportAppPartsService {
  constructor(http, context, dnnContext) {
    this.http = http;
    this.context = context;
    this.dnnContext = dnnContext;
  }
  importAppParts(file) {
    const formData = new FormData();
    formData.append('File', file);
    return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiAppPartsRoot + 'Import'), formData, {
      params: {
        appId: this.context.appId.toString(),
        zoneId: this.context.zoneId.toString()
      }
    });
  }
  /** Reset the App back to the state it was in the last xml export */
  resetApp(withFiles) {
    return this.http.post(this.dnnContext.$2sxc.http.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_0__.webApiAppRoot + 'Reset'), {}, {
      params: {
        appId: this.context.appId.toString(),
        zoneId: this.context.zoneId.toString(),
        withPortalFiles: withFiles.toString()
      }
    });
  }
  static #_ = this.ɵfac = function ImportAppPartsService_Factory(t) {
    return new (t || ImportAppPartsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_1__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ImportAppPartsService,
    factory: ImportAppPartsService.ɵfac
  });
}

/***/ }),

/***/ 75445:
/*!**********************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/services/index.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppDialogConfigService: () => (/* reexport safe */ _app_dialog_config_service__WEBPACK_IMPORTED_MODULE_0__.AppDialogConfigService),
/* harmony export */   ContentTypesService: () => (/* reexport safe */ _content_types_service__WEBPACK_IMPORTED_MODULE_1__.ContentTypesService),
/* harmony export */   ExportAppPartsService: () => (/* reexport safe */ _export_app_parts_service__WEBPACK_IMPORTED_MODULE_2__.ExportAppPartsService),
/* harmony export */   ExportAppService: () => (/* reexport safe */ _export_app_service__WEBPACK_IMPORTED_MODULE_3__.ExportAppService),
/* harmony export */   ImportAppPartsService: () => (/* reexport safe */ _import_app_parts_service__WEBPACK_IMPORTED_MODULE_4__.ImportAppPartsService),
/* harmony export */   PipelinesService: () => (/* reexport safe */ _pipelines_service__WEBPACK_IMPORTED_MODULE_5__.PipelinesService),
/* harmony export */   ViewsService: () => (/* reexport safe */ _views_service__WEBPACK_IMPORTED_MODULE_6__.ViewsService),
/* harmony export */   webApiAppPartsRoot: () => (/* reexport safe */ _import_app_parts_service__WEBPACK_IMPORTED_MODULE_4__.webApiAppPartsRoot),
/* harmony export */   webApiQueryDataSources: () => (/* reexport safe */ _pipelines_service__WEBPACK_IMPORTED_MODULE_5__.webApiQueryDataSources),
/* harmony export */   webApiQueryDebugStream: () => (/* reexport safe */ _pipelines_service__WEBPACK_IMPORTED_MODULE_5__.webApiQueryDebugStream),
/* harmony export */   webApiQueryGet: () => (/* reexport safe */ _pipelines_service__WEBPACK_IMPORTED_MODULE_5__.webApiQueryGet),
/* harmony export */   webApiQueryRun: () => (/* reexport safe */ _pipelines_service__WEBPACK_IMPORTED_MODULE_5__.webApiQueryRun),
/* harmony export */   webApiQuerySave: () => (/* reexport safe */ _pipelines_service__WEBPACK_IMPORTED_MODULE_5__.webApiQuerySave),
/* harmony export */   webApiTypeRoot: () => (/* reexport safe */ _content_types_service__WEBPACK_IMPORTED_MODULE_1__.webApiTypeRoot)
/* harmony export */ });
/* harmony import */ var _app_dialog_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-dialog-config.service */ 22743);
/* harmony import */ var _content_types_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-types.service */ 17693);
/* harmony import */ var _export_app_parts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./export-app-parts.service */ 71475);
/* harmony import */ var _export_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./export-app.service */ 320);
/* harmony import */ var _import_app_parts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./import-app-parts.service */ 58624);
/* harmony import */ var _pipelines_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipelines.service */ 74079);
/* harmony import */ var _views_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views.service */ 2570);








/***/ }),

/***/ 74079:
/*!**********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/services/pipelines.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PipelinesService: () => (/* binding */ PipelinesService),
/* harmony export */   webApiQueryDataSources: () => (/* binding */ webApiQueryDataSources),
/* harmony export */   webApiQueryDebugStream: () => (/* binding */ webApiQueryDebugStream),
/* harmony export */   webApiQueryGet: () => (/* binding */ webApiQueryGet),
/* harmony export */   webApiQueryRun: () => (/* binding */ webApiQueryRun),
/* harmony export */   webApiQuerySave: () => (/* binding */ webApiQuerySave)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 95429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _edit_shared_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../edit/shared/services */ 22453);
/* harmony import */ var _shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/helpers/file-to-base64.helper */ 70693);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);










const webApiQueryImport = 'admin/query/import';
const webApiQueryClone = 'admin/query/Clone';
const webApiQueryDelete = 'admin/query/Delete';
const webApiQueryRun = 'admin/query/Run';
const webApiQueryDebugStream = 'admin/query/DebugStream';
const webApiQuerySave = 'admin/query/Save';
const webApiQueryGet = 'admin/query/Get';
const webApiQueryDataSources = 'admin/query/DataSources';
class PipelinesService {
  constructor(http, context, dnnContext) {
    this.http = http;
    this.context = context;
    this.dnnContext = dnnContext;
  }
  getAll(contentType) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services__WEBPACK_IMPORTED_MODULE_0__.webApiEntityList), {
      params: {
        appId: this.context.appId.toString(),
        contentType
      }
    });
  }
  importQuery(file) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)((0,_shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_1__.toBase64)(file)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(fileBase64 => {
      return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiQueryImport), {
        AppId: this.context.appId.toString(),
        ContentBase64: fileBase64
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(success => {
      const result = {
        Success: success,
        Messages: []
      };
      return result;
    }));
  }
  clonePipeline(id) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiQueryClone), {
      params: {
        Id: id.toString(),
        appId: this.context.appId.toString()
      }
    });
  }
  delete(id) {
    return this.http.delete(this.dnnContext.$2sxc.http.apiUrl(webApiQueryDelete), {
      params: {
        appId: this.context.appId.toString(),
        Id: id.toString()
      }
    });
  }
  static #_ = this.ɵfac = function PipelinesService_Factory(t) {
    return new (t || PipelinesService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_2__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_8__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: PipelinesService,
    factory: PipelinesService.ɵfac
  });
}

/***/ }),

/***/ 2570:
/*!******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/services/views.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewsService: () => (/* binding */ ViewsService)
/* harmony export */ });
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);







const webApiViewRoot = 'admin/view/';
const webApiViews = webApiViewRoot + 'all';
const webApiViewDelete = webApiViewRoot + 'delete';
const webApiViewImport = webApiViewRoot + 'import';
const webApiViewPolymorph = webApiViewRoot + 'polymorphism';
const webApiViewUsage = webApiViewRoot + 'usage';
class ViewsService {
  constructor(http, context, dnnContext) {
    this.http = http;
    this.context = context;
    this.dnnContext = dnnContext;
  }
  getAll() {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiViews), {
      params: {
        appId: this.context.appId.toString()
      }
    });
  }
  delete(id) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiViewDelete), {
      params: {
        appId: this.context.appId.toString(),
        Id: id.toString()
      }
    });
  }
  import(file) {
    const formData = new FormData();
    formData.append('File', file);
    return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiViewImport), formData, {
      params: {
        appId: this.context.appId.toString(),
        zoneId: this.context.zoneId.toString()
      }
    });
  }
  export(id) {
    const url = this.dnnContext.$2sxc.http.apiUrl(webApiViewRoot + 'json') + '?appId=' + this.context.appId + '&viewId=' + id;
    window.open(url, '_blank', '');
  }
  getPolymorphism() {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiViewPolymorph), {
      params: {
        appId: this.context.appId.toString()
      }
    });
  }
  getUsage(guid) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiViewUsage), {
      params: {
        appId: this.context.appId.toString(),
        guid
      }
    });
  }
  static #_ = this.ɵfac = function ViewsService_Factory(t) {
    return new (t || ViewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_0__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_3__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ViewsService,
    factory: ViewsService.ɵfac
  });
}

/***/ }),

/***/ 71772:
/*!***************************************************************************!*\
  !*** ./projects/eav-ui/src/app/import-app/services/import-app.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportAppService: () => (/* binding */ ImportAppService),
/* harmony export */   webApiAppRoot: () => (/* binding */ webApiAppRoot)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/file-upload-dialog */ 34616);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);









const webApiAppRoot = 'admin/app/';
class ImportAppService {
  constructor(http, context, dnnContext) {
    this.http = http;
    this.context = context;
    this.dnnContext = dnnContext;
  }
  importApp(file, changedName, retryOnDuplicate = false) {
    const formData = new FormData();
    formData.append('File', file);
    formData.append('Name', changedName ?? '');
    return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiAppRoot + 'Import'), formData, {
      params: {
        zoneId: this.context.zoneId.toString()
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(result => {
      if (retryOnDuplicate && result.Messages[0]?.MessageType === _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_0__.FileUploadMessageTypes.Warning) {
        const folderName = prompt(result.Messages[0].Text + ' Would you like to install it using another folder name?');
        if (folderName) {
          return this.importApp(file, folderName, true);
        }
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
    }));
  }
  static #_ = this.ɵfac = function ImportAppService_Factory(t) {
    return new (t || ImportAppService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_1__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_6__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ImportAppService,
    factory: ImportAppService.ɵfac
  });
}

/***/ }),

/***/ 61735:
/*!***************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/components/base-with-child-dialog.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseWithChildDialogComponent: () => (/* binding */ BaseWithChildDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5057);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.component */ 43176);
/* harmony import */ var _logging_eav_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logging/eav-logger */ 6812);




const logThis = false;
// 2024-06-12 2dm experimental - remove comments if all is good mid of June
// - previously had
// @Directive()   // Needs the @Directive() so the compiler allows OnDestroy to be implemented
// ...then tried this
// @Component({
//   selector: 'app-base-component-with-child',
//   template: ''
// })
// ...but then added abstract, so I think it doesn't actually need all that
// tslint:disable-next-line:directive-class-suffix
class BaseWithChildDialogComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(router, route, log) {
    super();
    this.router = router;
    this.route = route;
    this.log = log;
    this.log ??= new _logging_eav_logger__WEBPACK_IMPORTED_MODULE_1__.EavLogger('BaseComponent', logThis);
  }
  // 2024-06-12 2dm - don't think this is needed since it's already on the base class
  // ngOnDestroy() {
  //   super.ngOnDestroy();
  // }
  // TODO @2dg not longer in use after refactoring SideNav with Routing
  // protected refreshOnChildClosedDeep() {
  //   return this.router.events.pipe(
  //     filter(event => event instanceof NavigationEnd),
  //     startWith(!!this.route.snapshot.firstChild.firstChild),
  //     map(() => !!this.route.snapshot.firstChild.firstChild),
  //     pairwise(),
  //     filter(([hadChild, hasChild]) => hadChild && !hasChild),
  //   )
  // }
  childDialogClosed$() {
    return this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.startWith)(!!this.route.snapshot.firstChild), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(() => !!this.route.snapshot.firstChild), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.pairwise)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(([hadChildBefore, hasChildNow]) => hadChildBefore && !hasChildNow));
  }
}

/***/ }),

/***/ 70693:
/*!*************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/helpers/file-to-base64.helper.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toBase64: () => (/* binding */ toBase64),
/* harmony export */   toString: () => (/* binding */ toString)
/* harmony export */ });
function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result.split(',')[1]);
    };
    reader.onerror = error => {
      reject(error);
    };
  });
}
function toString(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = error => {
      reject(error);
    };
  });
}

/***/ })

}]);
//# sourceMappingURL=default-projects_eav-ui_src_app_app-administration_services_index_ts-projects_eav-ui_src_app_-488733.js.map