"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["default-projects_eav-ui_src_app_shared_fields_content-types-fields_service_ts-projects_eav-ui-cff1aa"],{

/***/ 1726:
/*!********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/fields/data-type-catalog.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataTypeCatalog: () => (/* binding */ DataTypeCatalog)
/* harmony export */ });
const DataTypeCatalog = {
  Boolean: 'Boolean',
  Custom: 'Custom',
  DateTime: 'DateTime',
  Empty: 'Empty',
  Entity: 'Entity',
  Hyperlink: 'Hyperlink',
  Number: 'Number',
  String: 'String'
} /* the as const ensures that the keys/values can be strictly checked */;

/***/ }),

/***/ 9234:
/*!*******************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/services/entity.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityService: () => (/* binding */ EntityService),
/* harmony export */   webApiEntityList: () => (/* binding */ webApiEntityList),
/* harmony export */   webApiEntityRoot: () => (/* binding */ webApiEntityRoot)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 86301);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logging */ 34435);
/* harmony import */ var _http_service_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-service-base */ 96474);
/* harmony import */ var _query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query.service */ 54839);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);






const logSpecs = {
  all: false,
  getEntities: false,
  getAvailableEntities: false,
  delete: false
};
const webApiEntityRoot = 'admin/entity/';
const webApiEntityList = 'admin/entity/list';
class EntityService extends _http_service_base__WEBPACK_IMPORTED_MODULE_2__.HttpServiceBase {
  constructor() {
    super(...arguments);
    this.log = (0,_logging__WEBPACK_IMPORTED_MODULE_1__.classLog)({
      EntityService
    }, logSpecs);
    this.queryService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_query_service__WEBPACK_IMPORTED_MODULE_3__.QueryService);
  }
  /**
   * Get entities based on the content type name.
   * As of 2024-04-29 only used in REST API.
   * @param params
   * @returns
   */
  getEntities$(params) {
    this.log.fnIf('getEntities');
    return params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)(p => p != null), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(p => this.getAvailableEntities(p.contentTypeName).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.shareReplay)(1))));
  }
  getAvailableEntities(contentTypeName, entitiesFilter) {
    var log = this.log.fnIf('getAvailableEntities');
    return this.queryService.getEntities({
      contentTypes: [contentTypeName],
      itemIds: entitiesFilter,
      fields: 'Id,Guid,Title',
      log: 'getAvailableEntities'
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(data => data.Default));
  }
  delete(appId, contentType, entityId, force, parentId, parentField) {
    this.log.fnIf('delete', {
      appId,
      contentType,
      entityId,
      force,
      parentId,
      parent
    });
    return this.http.delete(this.apiUrl(webApiEntityRoot + 'delete'), {
      params: {
        contentType,
        id: entityId.toString(),
        appId,
        force: force.toString(),
        ...(parentId && {
          parentId: parentId.toString()
        }),
        ...(parentId && parentField && {
          parentField
        })
      }
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵEntityService_BaseFactory;
      return function EntityService_Factory(__ngFactoryType__) {
        return (ɵEntityService_BaseFactory || (ɵEntityService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetInheritedFactory"](EntityService)))(__ngFactoryType__ || EntityService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: EntityService,
      factory: EntityService.ɵfac
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

/***/ 54839:
/*!******************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/services/query.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryService: () => (/* binding */ QueryService)
/* harmony export */ });
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logging */ 34435);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);






const logSpecs = {
  all: false,
  getAvailableEntities: false,
  getEntities: false
};
class QueryService {
  constructor(http, context) {
    this.http = http;
    this.context = context;
    this.log = (0,_logging__WEBPACK_IMPORTED_MODULE_0__.classLog)({
      QueryService
    }, logSpecs);
  }
  getFromQuery(queryUrl, params, fields, entitiesFilter) {
    this.log.fnIf('getAvailableEntities', {
      queryUrl,
      params,
      fields,
      entitiesFilter
    });
    // Check if any params we should auto-add are already set (like in a query which has these params set in the configuration)
    const hasParams = !!params;
    const paramsLower = params?.toLocaleLowerCase() ?? '';
    const hasAppId = paramsLower.includes('appid=') ?? false;
    const allParams = '' + (hasAppId ? '' : `&appId=${this.context.appId}`) + (hasParams ? `&${params}` : '') + '&$select=' + (fields ?? '' /* special catch to avoid the word "null" */);
    // trim initial & because it will always start with an & and it should't
    const urlParams = allParams.substring(1);
    return this.http.post(`app/auto/query/${queryUrl}?${urlParams}`, {
      Guids: entitiesFilter
    });
  }
  getEntities({
    contentTypes,
    itemIds,
    fields,
    log
  }) {
    this.log.fnIf(`getEntities`, {
      log,
      contentTypes,
      itemIds,
      fields
    });
    const allParams = '&typeNames=' + (contentTypes?.join(',') ?? '') + `&appId=${this.context.appId}` + '&itemIds=' + (itemIds?.join(',') ?? '') + '&$select=' + (fields ?? '' /* special catch to avoid the word "null" */);
    // trim initial & because it will always start with an & and it should't
    const urlParams = allParams.substring(1);
    return this.http.post(`app/auto/query/System.EntityPicker/Default?${urlParams}`, {});
  }
  static {
    this.ɵfac = function QueryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || QueryService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_context__WEBPACK_IMPORTED_MODULE_1__.Context));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: QueryService,
      factory: QueryService.ɵfac
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _app_administration_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-administration/services */ 75445);
/* harmony import */ var _content_type_fields_edit_content_type_fields_edit_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../content-type-fields/edit-content-type-fields/edit-content-type-fields.helpers */ 84066);
/* harmony import */ var _services_http_service_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);





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
class ContentTypesFieldsService extends _services_http_service_base__WEBPACK_IMPORTED_MODULE_2__.HttpServiceBase {
  paramsAppId(more = {}) {
    return {
      params: {
        appid: this.appId,
        ...more
      }
    };
  }
  /** Get list of data types available in the system, such as 'string', 'number' etc. */
  dataTypes() {
    return this.getSignal(webApiDataTypes, this.paramsAppId(), [], raw => (0,_content_type_fields_edit_content_type_fields_edit_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__.calculateDataTypes)(raw));
  }
  getInputTypes() {
    return this.getSignal(webApiInputTypes, this.paramsAppId(), [], inputConfigs => inputConfigs.map(config => ({
      dataType: config.Type.substring(0, config.Type.indexOf('-')),
      inputType: config.Type,
      label: config.Label,
      description: config.Description,
      isDefault: config.IsDefault,
      isObsolete: config.IsObsolete,
      isRecommended: config.IsRecommended,
      obsoleteMessage: config.ObsoleteMessage,
      icon: config.IsDefault ? 'stars' : config.IsRecommended ? 'star' : null,
      sort: (config.IsObsolete ? 'z' : config.IsDefault ? 'a' : config.IsRecommended ? 'b' : 'c') + config.Label
    })).sort((a, b) => a.sort.localeCompare(b.sort)));
  }
  getReservedNames() {
    return this.getHttpApiUrl(webApiReservedNames);
  }
  reservedNames() {
    return this.getSignal(webApiReservedNames, null, {});
  }
  /** Get all fields for some content type */
  getFields(contentTypeStaticName) {
    return this.getHttpApiUrl(webApiFieldsAll, this.paramsAppId({
      staticName: contentTypeStaticName
    })).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(fields => {
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
  getFieldsSig(contentTypeStaticName) {
    return this.getSignal(webApiFieldsAll, this.paramsAppId({
      staticName: contentTypeStaticName
    }), [], fields => {
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
    });
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
        return (ɵContentTypesFieldsService_BaseFactory || (ɵContentTypesFieldsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](ContentTypesFieldsService)))(__ngFactoryType__ || ContentTypesFieldsService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: ContentTypesFieldsService,
      factory: ContentTypesFieldsService.ɵfac
    });
  }
}

/***/ }),

/***/ 84066:
/*!******************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/edit-content-type-fields/edit-content-type-fields.helpers.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateDataTypes: () => (/* binding */ calculateDataTypes)
/* harmony export */ });
/* harmony import */ var _shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/fields/data-type-catalog */ 1726);
/* harmony import */ var _content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content-type-fields.helpers */ 14007);


const dataTypeLabels = {
  Boolean: {
    label: (0,_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__.calculateTypeLabel)(_shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__.DataTypeCatalog.Boolean),
    description: 'Yes/no or true/false values'
  },
  Custom: {
    label: (0,_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__.calculateTypeLabel)(_shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__.DataTypeCatalog.Custom),
    description: 'Use for things like gps-pickers (which writes into multiple fields) or for custom-data which serializes something exotic into the db like an array, a custom json or anything'
  },
  DateTime: {
    label: (0,_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__.calculateTypeLabel)(_shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__.DataTypeCatalog.DateTime),
    description: 'For date, time or combined values'
  },
  Empty: {
    label: (0,_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__.calculateTypeLabel)(_shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__.DataTypeCatalog.Empty),
    description: 'Use to structure your form'
  },
  Entity: {
    label: (0,_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__.calculateTypeLabel)(_shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__.DataTypeCatalog.Entity),
    description: 'One or more other content-items'
  },
  Hyperlink: {
    label: (0,_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__.calculateTypeLabel)(_shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__.DataTypeCatalog.Hyperlink),
    description: 'Hyperlink or reference to a picture / file'
  },
  Number: {
    label: (0,_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__.calculateTypeLabel)(_shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__.DataTypeCatalog.Number),
    description: 'Any kind of number'
  },
  String: {
    label: (0,_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__.calculateTypeLabel)(_shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_0__.DataTypeCatalog.String),
    description: 'Any kind of text'
  }
};
function calculateDataTypes(rawDataTypes) {
  const dataTypes = [];
  for (const rawDataType of rawDataTypes) {
    dataTypes.push({
      name: rawDataType,
      label: dataTypeLabels[rawDataType].label,
      icon: (0,_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__.calculateTypeIcon)(rawDataType),
      description: dataTypeLabels[rawDataType].description
    });
  }
  return dataTypes;
}

/***/ })

}]);
//# sourceMappingURL=default-projects_eav-ui_src_app_shared_fields_content-types-fields_service_ts-projects_eav-ui-cff1aa.js.map