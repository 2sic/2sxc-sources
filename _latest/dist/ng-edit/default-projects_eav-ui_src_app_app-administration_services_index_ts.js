"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["default-projects_eav-ui_src_app_app-administration_services_index_ts"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);




// We should list all the "full" paths here, so it's easier to find when searching for API calls
const webApiTypeRoot = 'admin/type/';
const webApiTypeGet = 'admin/type/get';
const webApiTypes = 'admin/type/list';
const webApiTypeScopes = 'admin/type/scopes';
const webApiTypeSave = 'admin/type/save';
const webApiTypeDelete = 'admin/type/delete';
const webApiTypeImport = 'admin/type/import';
const webApiTypeAddGhost = 'admin/type/addghost';
class ContentTypesService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__.HttpServiceBase {
  retrieveContentType(nameId) {
    return this.getHttpApiUrl(webApiTypeGet, {
      params: {
        appId: this.appId,
        contentTypeId: nameId
      }
    });
  }
  retrieveContentTypeSig(nameId, initial) {
    return this.getSignal(webApiTypeGet, {
      params: {
        appId: this.appId,
        contentTypeId: nameId
      }
    }, initial);
  }
  retrieveContentTypes(scope) {
    return this.getHttpApiUrl(webApiTypes, {
      params: {
        appId: this.appId,
        scope
      }
    });
  }
  retrieveContentTypesSig(scope, initial) {
    return this.getSignal(webApiTypes, {
      params: {
        appId: this.appId,
        scope
      }
    }, initial);
  }
  // TODO: remove this method after upgrade to V2
  getScopes() {
    return this.getHttpApiUrl(webApiTypeScopes, {
      params: {
        appId: this.appId
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
  getScopesSig(initial) {
    const scopesSignal = this.getSignal(webApiTypeScopes, {
      params: {
        appId: this.appId
      }
    }, initial);
    const scopeOptionsSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {
      const scopesData = scopesSignal();
      // Add null/undefined check here
      if (!scopesData || !scopesData.old) {
        return []; // Return an empty array or handle this case as appropriate
      }
      const scopes = scopesData.old;
      return Object.keys(scopes).map(key => ({
        name: scopes[key],
        value: key
      }));
    });
    return scopeOptionsSignal;
  }
  getScopesV2() {
    return this.getHttpApiUrl(webApiTypeScopes, {
      params: {
        appId: this.appId
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(scopesData => scopesData.scopes));
  }
  save(contentType) {
    return this.http.post(this.apiUrl(webApiTypeSave), contentType, {
      params: {
        appid: this.appId
      }
    });
  }
  delete(contentType) {
    return this.http.delete(this.apiUrl(webApiTypeDelete), {
      params: {
        appid: this.appId,
        staticName: contentType.NameId
      } // TODO: @2pp - replace staticName with NameId
    });
  }
  import(files) {
    const formData = new FormData();
    for (const file of files) {
      formData.append('File', file);
    }
    return this.http.post(this.apiUrl(webApiTypeImport), formData, {
      params: {
        appId: this.appId,
        zoneId: this.zoneId
      }
    });
  }
  createGhost(sourceNameId) {
    return this.http.post(this.apiUrl(webApiTypeAddGhost), null, {
      params: {
        appid: this.appId,
        sourceNameId
      }
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵContentTypesService_BaseFactory;
      return function ContentTypesService_Factory(__ngFactoryType__) {
        return (ɵContentTypesService_BaseFactory || (ɵContentTypesService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ContentTypesService)))(__ngFactoryType__ || ContentTypesService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ContentTypesService,
      factory: ContentTypesService.ɵfac
    });
  }
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
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _import_app_parts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import-app-parts.service */ 58624);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);



const webApiAppPartsGet = 'admin/appParts/get';
class ExportAppPartsService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__.HttpServiceBase {
  getContentInfo(scope, initial) {
    return this.getSignal(webApiAppPartsGet, {
      params: {
        appid: this.appId,
        zoneId: this.zoneId,
        scope
      }
    }, initial);
  }
  exportParts(contentTypeIds, entityIds, templateIds) {
    const url = this.apiUrl(_import_app_parts_service__WEBPACK_IMPORTED_MODULE_1__.webApiAppPartsRoot + 'Export') + '?appId=' + this.appId + '&zoneId=' + this.zoneId + '&contentTypeIdsString=' + contentTypeIds.join(';') + '&entityIdsString=' + entityIds.join(';') + '&templateIdsString=' + templateIds.join(';');
    window.open(url, '_blank', '');
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵExportAppPartsService_BaseFactory;
      return function ExportAppPartsService_Factory(__ngFactoryType__) {
        return (ɵExportAppPartsService_BaseFactory || (ɵExportAppPartsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ExportAppPartsService)))(__ngFactoryType__ || ExportAppPartsService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ExportAppPartsService,
      factory: ExportAppPartsService.ɵfac
    });
  }
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
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);



const webApiAppRootStatistics = 'admin/app/Statistics';
const webApiAppRootSaveData = 'admin/app/SaveData';
class ExportAppService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_1__.HttpServiceBase {
  getAppInfo(initial) {
    return this.getSignal(webApiAppRootStatistics, {
      params: {
        appid: this.appId,
        zoneId: this.zoneId
      }
    }, initial);
  }
  /** Generate the export app path. It can be extended with additional parameters */
  exportAppUrl() {
    return `${this.apiUrl(`${_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_0__.webApiAppRoot}Export`)}?appId=${this.appId}&zoneId=${this.zoneId}`;
  }
  exportForVersionControl({
    includeContentGroups,
    resetAppGuid,
    withFiles
  }) {
    // return this.get<boolean>(webApiAppRoot + 'SaveData', {
    return this.getHttpApiUrl(webApiAppRootSaveData, {
      params: {
        appid: this.appId,
        zoneId: this.zoneId,
        includeContentGroups: includeContentGroups.toString(),
        resetAppGuid: resetAppGuid.toString(),
        withPortalFiles: withFiles.toString()
      }
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵExportAppService_BaseFactory;
      return function ExportAppService_Factory(__ngFactoryType__) {
        return (ɵExportAppService_BaseFactory || (ɵExportAppService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ExportAppService)))(__ngFactoryType__ || ExportAppService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ExportAppService,
      factory: ExportAppService.ɵfac
    });
  }
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
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);



const webApiAppPartsRoot = 'admin/appParts/';
class ImportAppPartsService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_1__.HttpServiceBase {
  importAppParts(file) {
    const formData = new FormData();
    formData.append('File', file);
    return this.http.post(this.apiUrl(webApiAppPartsRoot + 'Import'), formData, {
      params: {
        appId: this.appId,
        zoneId: this.zoneId
      }
    });
  }
  /** Reset the App back to the state it was in the last xml export */
  resetApp(withFiles) {
    return this.http.post(this.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_0__.webApiAppRoot + 'Reset'), {}, {
      params: {
        appId: this.appId,
        zoneId: this.zoneId,
        withPortalFiles: withFiles.toString()
      }
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵImportAppPartsService_BaseFactory;
      return function ImportAppPartsService_Factory(__ngFactoryType__) {
        return (ɵImportAppPartsService_BaseFactory || (ɵImportAppPartsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ImportAppPartsService)))(__ngFactoryType__ || ImportAppPartsService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ImportAppPartsService,
      factory: ImportAppPartsService.ɵfac
    });
  }
}

/***/ }),

/***/ 75445:
/*!**********************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/services/index.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentTypesService: () => (/* reexport safe */ _content_types_service__WEBPACK_IMPORTED_MODULE_1__.ContentTypesService),
/* harmony export */   DialogConfigGlobalService: () => (/* reexport safe */ _dialog_config_global_service__WEBPACK_IMPORTED_MODULE_0__.DialogConfigGlobalService),
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
/* harmony import */ var _dialog_config_global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog-config-global.service */ 61479);
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
/* harmony import */ var _shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/helpers/file-to-base64.helper */ 70693);
/* harmony import */ var _shared_services_entity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/entity.service */ 9234);
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);





const webApiQueryImport = 'admin/query/import';
const webApiQueryClone = 'admin/query/Clone';
const webApiQueryDelete = 'admin/query/Delete';
const webApiQueryRun = 'admin/query/Run';
const webApiQueryDebugStream = 'admin/query/DebugStream';
const webApiQuerySave = 'admin/query/Save';
const webApiQueryGet = 'admin/query/Get';
const webApiQueryDataSources = 'admin/query/DataSources';
class PipelinesService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_2__.HttpServiceBase {
  getAll(contentType) {
    return this.getHttpApiUrl(_shared_services_entity_service__WEBPACK_IMPORTED_MODULE_1__.webApiEntityList, {
      params: {
        appId: this.appId,
        contentType
      }
    });
  }
  getAllSig(contentType, initial) {
    return this.getSignal(_shared_services_entity_service__WEBPACK_IMPORTED_MODULE_1__.webApiEntityList, {
      params: {
        appId: this.appId,
        contentType
      }
    }, initial);
  }
  importQuery(file) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)((0,_shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_0__.toBase64)(file)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(fileBase64 => {
      return this.http.post(this.apiUrl(webApiQueryImport), {
        AppId: this.appId,
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
    return this.getHttpApiUrl(webApiQueryClone, {
      params: {
        Id: id.toString(),
        appId: this.appId
      }
    });
  }
  delete(id) {
    return this.http.delete(this.apiUrl(webApiQueryDelete), {
      params: {
        appId: this.appId,
        Id: id.toString()
      }
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵPipelinesService_BaseFactory;
      return function PipelinesService_Factory(__ngFactoryType__) {
        return (ɵPipelinesService_BaseFactory || (ɵPipelinesService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](PipelinesService)))(__ngFactoryType__ || PipelinesService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: PipelinesService,
      factory: PipelinesService.ɵfac
    });
  }
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
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


const webApiViews = 'admin/view/all';
const webApiViewDelete = 'admin/view/delete';
const webApiViewImport = 'admin/view/import';
const webApiViewPolymorph = 'admin/view/polymorphism';
const webApiViewUsage = 'admin/view/usage';
const webApiJson = 'admin/view/json';
class ViewsService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__.HttpServiceBase {
  getAll() {
    return this.getSignal(webApiViews, {
      params: {
        appId: this.appId
      }
    });
  }
  delete(id) {
    return this.getHttpApiUrl(webApiViewDelete, {
      params: {
        appId: this.appId,
        Id: id.toString()
      }
    });
  }
  import(file) {
    const formData = new FormData();
    formData.append('File', file);
    return this.http.post(this.apiUrl(webApiViewImport), formData, {
      params: {
        appId: this.appId,
        zoneId: this.zoneId
      }
    });
  }
  export(id) {
    const url = this.apiUrl(webApiJson) + '?appId=' + this.appId + '&viewId=' + id;
    window.open(url, '_blank', '');
  }
  getPolymorphism() {
    return this.getSignal(webApiViewPolymorph, {
      params: {
        appId: this.appId
      }
    });
  }
  getUsage(guid) {
    return this.getSignal(webApiViewUsage, {
      params: {
        appId: this.appId,
        guid
      }
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵViewsService_BaseFactory;
      return function ViewsService_Factory(__ngFactoryType__) {
        return (ɵViewsService_BaseFactory || (ɵViewsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ViewsService)))(__ngFactoryType__ || ViewsService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ViewsService,
      factory: ViewsService.ɵfac
    });
  }
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
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);




const webApiAppRoot = 'admin/app/';
class ImportAppService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_1__.HttpServiceBase {
  importApp(file, changedName, retryOnDuplicate = false) {
    const formData = new FormData();
    formData.append('File', file);
    formData.append('Name', changedName ?? '');
    return this.http.post(this.apiUrl(webApiAppRoot + 'Import'), formData, {
      params: {
        zoneId: this.zoneId
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
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵImportAppService_BaseFactory;
      return function ImportAppService_Factory(__ngFactoryType__) {
        return (ɵImportAppService_BaseFactory || (ɵImportAppService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](ImportAppService)))(__ngFactoryType__ || ImportAppService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: ImportAppService,
      factory: ImportAppService.ɵfac
    });
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
//# sourceMappingURL=default-projects_eav-ui_src_app_app-administration_services_index_ts.js.map