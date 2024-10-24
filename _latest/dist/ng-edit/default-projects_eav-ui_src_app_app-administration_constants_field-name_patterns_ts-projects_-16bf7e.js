"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["default-projects_eav-ui_src_app_app-administration_constants_field-name_patterns_ts-projects_-16bf7e"],{

/***/ 47703:
/*!*************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/constants/field-name.patterns.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fieldNameError: () => (/* binding */ fieldNameError),
/* harmony export */   fieldNamePattern: () => (/* binding */ fieldNamePattern)
/* harmony export */ });
const fieldNamePattern = /^[A-Za-z][A-Za-z0-9]+$/;
const fieldNameError = 'Standard letters and numbers are allowed. Must start with a letter.';

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
  retrieveContentType(staticName) {
    return this.getHttpApiUrl(webApiTypeGet, {
      params: {
        appId: this.appId,
        contentTypeId: staticName
      }
    });
  }
  retrieveContentTypeSig(staticName, initial) {
    return this.getSignal(webApiTypeGet, {
      params: {
        appId: this.appId,
        contentTypeId: staticName
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
        appId: this.appId,
        zoneId: this.zoneId
      }
    });
  }
  createGhost(sourceStaticName) {
    return this.http.post(this.apiUrl(webApiTypeAddGhost), null, {
      params: {
        appid: this.appId,
        sourceStaticName
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

/***/ 14007:
/*!************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/content-type-fields.helpers.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateTypeIcon: () => (/* binding */ calculateTypeIcon),
/* harmony export */   calculateTypeLabel: () => (/* binding */ calculateTypeLabel)
/* harmony export */ });
/* harmony import */ var _shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/fields/data-type-catalog */ 1726);

function calculateTypeIcon(typeName) {
  const typeIconMap = {
    [_shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__.DataTypeCatalog.Boolean]: 'toggle_on',
    [_shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__.DataTypeCatalog.Custom]: 'extension',
    [_shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__.DataTypeCatalog.DateTime]: 'today',
    [_shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__.DataTypeCatalog.Empty]: 'crop_free',
    [_shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__.DataTypeCatalog.Entity]: 'share',
    [_shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__.DataTypeCatalog.Hyperlink]: 'link',
    [_shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__.DataTypeCatalog.Number]: 'dialpad',
    [_shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__.DataTypeCatalog.String]: 'text_fields'
  };
  return typeIconMap[typeName] ?? 'device_unknown';
}
function calculateTypeLabel(typeName) {
  const typeLabelMap = {
    [_shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__.DataTypeCatalog.Boolean]: 'Boolean (yes/no)',
    [_shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__.DataTypeCatalog.Custom]: 'Custom - ui-tools or custom types',
    [_shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__.DataTypeCatalog.DateTime]: 'Date and/or time',
    [_shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__.DataTypeCatalog.Empty]: 'Empty - for form-titles etc.',
    [_shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__.DataTypeCatalog.Entity]: 'Entity (other content-items)',
    [_shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__.DataTypeCatalog.Hyperlink]: 'Link / file reference',
    [_shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__.DataTypeCatalog.Number]: 'Number',
    [_shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__.DataTypeCatalog.String]: 'Text / string'
  };
  return typeLabelMap[typeName] ?? 'device_unknown';
}

/***/ }),

/***/ 35160:
/*!**********************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/edit-content-type-fields/reserved-names.directive.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReservedNamesValidatorDirective: () => (/* binding */ ReservedNamesValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);


class ReservedNamesValidatorDirective {
  constructor() {
    this.reservedNames = {};
  }
  validate(control) {
    if (!control.value) {
      return null;
    }
    const controlValue = control.value.toLocaleLowerCase();
    const reservedName = Object.keys(this.reservedNames).find(name => name.toLocaleLowerCase() === controlValue);
    return reservedName ? {
      reservedNames: this.reservedNames[reservedName]
    } : null;
  }
  static mergeReserved(reservedNames, fields) {
    const existingFields = {};
    fields.forEach(field => {
      existingFields[field.StaticName] = 'this field already exists';
    });
    return {
      ...reservedNames,
      ...existingFields
    };
  }
  static {
    this.ɵfac = function ReservedNamesValidatorDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReservedNamesValidatorDirective)();
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ReservedNamesValidatorDirective,
      selectors: [["", "appReservedNames", ""]],
      inputs: {
        reservedNames: [0, "appReservedNames", "reservedNames"]
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
        useExisting: ReservedNamesValidatorDirective,
        multi: true
      }])]
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

/***/ 4202:
/*!*********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/fields/input-type-catalog.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputTypeCatalog: () => (/* binding */ InputTypeCatalog)
/* harmony export */ });
const InputTypeCatalog = {
  // Boolean
  BooleanDefault: 'boolean-default',
  BooleanTristate: 'boolean-tristate',
  // Custom
  CustomDefault: 'custom-default',
  CustomGps: 'custom-gps',
  CustomJsonEditor: 'custom-json-editor',
  // Date / Time
  DateTimeDefault: 'datetime-default',
  DefaultSuffix: '-default',
  // Empty
  EmptyDefault: 'empty-default',
  EmptyEnd: 'empty-end',
  EmptyMessage: 'empty-message',
  // Entity - all pickers
  EntityContentBlocks: 'entity-content-blocks',
  EntityDefault: 'entity-default',
  EntityQuery: 'entity-query',
  // External
  ExternalWebComponent: 'external-web-component',
  // Hyperlink / File
  HyperlinkDefault: 'hyperlink-default',
  HyperlinkLibrary: 'hyperlink-library',
  // Numbers
  NumberDefault: 'number-default',
  NumberDropdown: 'number-dropdown',
  // picker
  // String
  StringDefault: 'string-default',
  StringDropdown: 'string-dropdown',
  // picker
  StringDropdownQuery: 'string-dropdown-query',
  // picker
  StringFontIconPicker: 'string-font-icon-picker',
  StringJson: 'string-json',
  StringTemplatePicker: 'string-template-picker',
  // picker
  StringUrlPath: 'string-url-path',
  StringWysiwyg: 'string-wysiwyg',
  /** New Pickers v17.x */
  EntityPicker: 'entity-picker',
  StringPicker: 'string-picker',
  NumberPicker: 'number-picker',
  /** for all situations where we need a fallback; new v16.04 */
  Unknown: 'unknown'
} /* the as const ensures that the keys/values can be strictly checked */;

/***/ }),

/***/ 43143:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/toArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toArray: () => (/* binding */ toArray)
/* harmony export */ });
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reduce */ 49923);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 50819);


const arrReducer = (arr, value) => (arr.push(value), arr);
function toArray() {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    (0,_reduce__WEBPACK_IMPORTED_MODULE_1__.reduce)(arrReducer, [])(source).subscribe(subscriber);
  });
}

/***/ })

}]);
//# sourceMappingURL=default-projects_eav-ui_src_app_app-administration_constants_field-name_patterns_ts-projects_-16bf7e.js.map