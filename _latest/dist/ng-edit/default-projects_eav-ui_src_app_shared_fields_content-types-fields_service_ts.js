"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["default-projects_eav-ui_src_app_shared_fields_content-types-fields_service_ts"],{

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


const webApiViewRoot = 'admin/view/';
const webApiViews = webApiViewRoot + 'all';
const webApiViewDelete = webApiViewRoot + 'delete';
const webApiViewImport = webApiViewRoot + 'import';
const webApiViewPolymorph = webApiViewRoot + 'polymorphism';
const webApiViewUsage = webApiViewRoot + 'usage';
class ViewsService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__.HttpServiceBase {
  getAll() {
    return this.getHttpApiUrl(webApiViews, {
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
    const url = this.apiUrl(webApiViewRoot + 'json') + '?appId=' + this.appId + '&viewId=' + id;
    window.open(url, '_blank', '');
  }
  getPolymorphism() {
    return this.getHttpApiUrl(webApiViewPolymorph, {
      params: {
        appId: this.appId
      }
    });
  }
  getUsage(guid) {
    return this.getHttpApiUrl(webApiViewUsage, {
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

/***/ 75959:
/*!*******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/fields/content-types-fields.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentTypesFieldsService: () => (/* binding */ ContentTypesFieldsService),
/* harmony export */   webApiFieldsAll: () => (/* binding */ webApiFieldsAll)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _app_administration_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-administration/services */ 75445);
/* harmony import */ var _services_http_service_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);




const webApiFieldsAll = 'admin/field/all';
// All WebApi paths - to easily search/find when looking for where these are used
const webApiDataTypes = 'admin/field/DataTypes';
const webApiReservedNames = 'admin/field/ReservedNames';
const webApiAddInheritedField = 'admin/field/AddInheritedField';
const webApiInputTypes = 'admin/field/InputTypes';
const webApiInputType = 'admin/field/InputType';
const webApiShare = 'admin/field/Share';
const webApiInherit = 'admin/field/Inherit';
const webApiSort = 'admin/field/Sort';
const webApiSetTitle = _app_administration_services__WEBPACK_IMPORTED_MODULE_0__.webApiTypeRoot + 'SetTitle';
const webApiRename = 'admin/field/Rename';
const webApiDelete = 'admin/field/Delete';
const webApiAdd = 'admin/field/Add';
const webApiFieldsGetShared = 'admin/field/GetSharedFields';
const webApiGetAncestors = 'admin/field/GetAncestors';
const webApiGetDescendants = 'admin/field/GetDescendants';
class ContentTypesFieldsService extends _services_http_service_base__WEBPACK_IMPORTED_MODULE_1__.HttpServiceBase {
  paramsAppId(more = {}) {
    return {
      params: {
        appid: this.appId,
        ...more
      }
    };
  }
  typeListRetrieve() {
    return this.getHttpApiUrl(webApiDataTypes, this.paramsAppId());
  }
  getInputTypesList() {
    return this.getHttpApiUrl(webApiInputTypes, this.paramsAppId()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(inputConfigs => {
      const inputTypeOptions = inputConfigs.map(config => ({
        dataType: config.Type.substring(0, config.Type.indexOf('-')),
        inputType: config.Type,
        label: config.Label,
        description: config.Description,
        isDefault: config.IsDefault,
        isObsolete: config.IsObsolete,
        isRecommended: config.IsRecommended,
        obsoleteMessage: config.ObsoleteMessage,
        icon: config.IsDefault ? 'star' : config.IsRecommended ? 'star_outline' : null
      }));
      return inputTypeOptions;
    }));
  }
  getReservedNames() {
    return this.getHttpApiUrl(webApiReservedNames);
  }
  /** Get all fields for some content type */
  getFields(contentTypeStaticName) {
    return this.getHttpApiUrl(webApiFieldsAll, this.paramsAppId({
      staticName: contentTypeStaticName
    })).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(fields => {
      if (fields) {
        for (const fld of fields) {
          if (!fld.Metadata) continue;
          const md = fld.Metadata;
          const allMd = md.All;
          const typeMd = md[fld.Type];
          const inputMd = md[fld.InputType];
          md.merged = {
            ...allMd,
            ...typeMd,
            ...inputMd
          };
        }
      }
      return fields;
    }));
  }
  /** Get all possible sharable fields for a new sharing */
  getShareableFields() {
    return this.getHttpApiUrl(webApiFieldsGetShared, this.paramsAppId());
  }
  /**
   * Get sharable fields which are possible for this attribute.
   * Reason is that eg. a bool-attribute can only receive metadata from a bool attribute, etc.
   * @param attributeId the existing attributeId which will receive the new metadata
   */
  getShareableFieldsFor(attributeId) {
    return this.#getShareinfo(webApiFieldsGetShared, attributeId);
    // return this.getHttp<Field[]>(this.apiUrl(webApiFieldsGetShared), this.paramsAppId({ attributeId }));
  }
  getAncestors(attributeId) {
    return this.#getShareinfo(webApiGetAncestors, attributeId);
  }
  getDescendants(attributeId) {
    return this.#getShareinfo(webApiGetDescendants, attributeId);
  }
  #getShareinfo(endpoint, attributeId) {
    return this.getHttpApiUrl(endpoint, this.paramsAppId({
      attributeId
    }));
  }
  addInheritedField(targetContentTypeId, sourceType, sourceFieldGuid /* guid */, name) {
    return this.http.post(this.apiUrl(webApiAddInheritedField), null, this.paramsAppId({
      contentTypeId: targetContentTypeId.toString(),
      sourceType,
      sourceField: sourceFieldGuid,
      name
    }));
  }
  share(attributeId, share = true) {
    return this.http.post(this.apiUrl(webApiShare), null, {
      params: {
        appid: this.appId,
        attributeId: attributeId.toString(),
        share
      }
    });
  }
  inherit(attributeId, sourceFieldGuid) {
    return this.http.post(this.apiUrl(webApiInherit), null, {
      params: {
        appid: this.appId,
        attributeId: attributeId.toString(),
        inheritMetadataOf: sourceFieldGuid
      }
    });
  }
  reOrder(idArray, contentType) {
    return this.http.post(this.apiUrl(webApiSort), null, {
      params: {
        appid: this.appId,
        contentTypeId: contentType.Id.toString(),
        order: JSON.stringify(idArray)
      }
    });
  }
  setTitle(item, contentType) {
    return this.http.post(this.apiUrl(webApiSetTitle), null, {
      params: {
        appid: this.appId,
        contentTypeId: contentType.Id.toString(),
        attributeId: item.Id.toString()
      }
    });
  }
  rename(fieldId, contentTypeId, newName) {
    return this.http.post(this.apiUrl(webApiRename), null, {
      params: {
        appid: this.appId,
        contentTypeId: contentTypeId.toString(),
        attributeId: fieldId.toString(),
        newName
      }
    });
  }
  delete(item, contentType) {
    if (item.IsTitle) throw new Error('Can\'t delete Title');
    return this.http.delete(this.apiUrl(webApiDelete), {
      params: {
        appid: this.appId,
        contentTypeId: contentType.Id.toString(),
        attributeId: item.Id.toString()
      }
    });
  }
  add(newField, contentTypeId) {
    return this.http.post(this.apiUrl(webApiAdd), null, {
      params: {
        AppId: this.appId,
        ContentTypeId: contentTypeId.toString(),
        Id: newField.Id.toString(),
        Type: newField.Type,
        InputType: newField.InputType,
        StaticName: newField.StaticName,
        IsTitle: newField.IsTitle.toString(),
        Index: newField.SortOrder.toString()
      }
    });
  }
  updateInputType(attributeId, field, inputType) {
    return this.http.post(this.apiUrl(webApiInputType), null, {
      params: {
        appId: this.appId,
        attributeId,
        field,
        inputType
      }
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵContentTypesFieldsService_BaseFactory;
      return function ContentTypesFieldsService_Factory(__ngFactoryType__) {
        return (ɵContentTypesFieldsService_BaseFactory || (ɵContentTypesFieldsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](ContentTypesFieldsService)))(__ngFactoryType__ || ContentTypesFieldsService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: ContentTypesFieldsService,
      factory: ContentTypesFieldsService.ɵfac
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
//# sourceMappingURL=default-projects_eav-ui_src_app_shared_fields_content-types-fields_service_ts.js.map