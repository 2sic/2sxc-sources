"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_content-items_import-content-item_import-content-item_component_ts-pr-3ed00c"],{

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

/***/ 66754:
/*!****************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-items/import-content-item/import-content-item.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportContentItemComponent: () => (/* binding */ ImportContentItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/file-upload-dialog */ 34616);
/* harmony import */ var _services_content_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/content-items.service */ 336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





class ImportContentItemComponent {
  constructor(dialogData, contentItemsService) {
    this.uploadType = _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_0__.UploadTypes.ContentItem;
    dialogData.title ??= `Import Single Item`;
    dialogData.description ??= `Select an item file (json) from your computer to import.`;
    dialogData.allowedFileTypes ??= 'json';
    dialogData.upload$ ??= files => contentItemsService.importItem(files[0]);
  }
  static #_ = this.ɵfac = function ImportContentItemComponent_Factory(t) {
    return new (t || ImportContentItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_content_items_service__WEBPACK_IMPORTED_MODULE_1__.ContentItemsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ImportContentItemComponent,
    selectors: [["app-import-content-item"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [[3, "uploadType"]],
    template: function ImportContentItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-file-upload-dialog", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("uploadType", ctx.uploadType);
      }
    },
    dependencies: [_shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_0__.FileUploadDialogComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 83051:
/*!**********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/services/content-types-fields.service.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentTypesFieldsService: () => (/* binding */ ContentTypesFieldsService),
/* harmony export */   webApiFieldsAll: () => (/* binding */ webApiFieldsAll),
/* harmony export */   webApiFieldsGetShared: () => (/* binding */ webApiFieldsGetShared),
/* harmony export */   webApiFieldsRoot: () => (/* binding */ webApiFieldsRoot)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-administration/services/content-types.service */ 17693);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);









const webApiFieldsRoot = 'admin/field/';
const webApiFieldsAll = 'admin/field/all';
const webApiFieldsGetShared = 'admin/field/GetSharedFields';
class ContentTypesFieldsService {
  constructor(http, context, dnnContext) {
    this.http = http;
    this.context = context;
    this.dnnContext = dnnContext;
  }
  apiUrl(name) {
    return this.dnnContext.$2sxc.http.apiUrl(name);
  }
  typeListRetrieve() {
    return this.http.get(this.apiUrl(webApiFieldsRoot + 'DataTypes'), {
      params: {
        appid: this.context.appId.toString()
      }
    });
  }
  getInputTypesList() {
    return this.http.get(this.apiUrl(webApiFieldsRoot + 'InputTypes'), {
      params: {
        appid: this.context.appId.toString()
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(inputConfigs => {
      const inputTypeOptions = inputConfigs.map(config => {
        const option = {
          dataType: config.Type.substring(0, config.Type.indexOf('-')),
          inputType: config.Type,
          label: config.Label,
          description: config.Description,
          isDefault: config.IsDefault,
          isObsolete: config.IsObsolete,
          isRecommended: config.IsRecommended,
          obsoleteMessage: config.ObsoleteMessage,
          icon: config.IsDefault ? 'star' : config.IsRecommended ? 'star_outline' : null
        };
        return option;
      });
      return inputTypeOptions;
    }));
  }
  getReservedNames() {
    return this.http.get(this.apiUrl(webApiFieldsRoot + 'ReservedNames'));
  }
  /** Get all fields for some content type */
  getFields(contentTypeStaticName) {
    return this.http.get(this.apiUrl(webApiFieldsAll), {
      params: {
        appid: this.context.appId.toString(),
        staticName: contentTypeStaticName
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(fields => {
      if (fields) {
        for (const fld of fields) {
          if (!fld.Metadata) {
            continue;
          }
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
    return this.http.get(this.apiUrl(webApiFieldsGetShared), {
      params: {
        appid: this.context.appId.toString()
      }
    });
  }
  /**
   * Get sharable fields which are possible for this attribute.
   *
   * Reason is that eg. a bool-attribute can only receive metadata from a bool attribute, etc.
   *
   * @param attributeId the existing attributeId which will receive the new metadata
   */
  getShareableFieldsFor(attributeId) {
    // TODO: @SDV - do the same as in getShareableFields()
    // but add parameter attributeId to the webapi call
    // I'll create the backend afterwards
    return this.http.get(this.apiUrl(webApiFieldsGetShared), {
      params: {
        appid: this.context.appId.toString(),
        attributeId: attributeId.toString()
      }
    });
  }
  addInheritedField(targetContentTypeId, sourceContentTypeStaticName, sourceFieldGuid, newName) {
    return this.http.post(this.apiUrl(webApiFieldsRoot + 'AddInheritedField'), null, {
      params: {
        AppId: this.context.appId.toString(),
        ContentTypeId: targetContentTypeId.toString(),
        SourceType: sourceContentTypeStaticName,
        SourceField: sourceFieldGuid,
        name: newName
      }
    });
  }
  share(attributeId, share = true) {
    return this.http.post(this.apiUrl(webApiFieldsRoot + 'Share'), null, {
      params: {
        appid: this.context.appId.toString(),
        attributeId: attributeId.toString(),
        share
      }
    });
  }
  inherit(attributeId, sourceFieldGuid) {
    return this.http.post(this.apiUrl(webApiFieldsRoot + 'Inherit'), null, {
      params: {
        appid: this.context.appId.toString(),
        attributeId: attributeId.toString(),
        inheritMetadataOf: sourceFieldGuid
      }
    });
  }
  reOrder(idArray, contentType) {
    return this.http.post(this.apiUrl(webApiFieldsRoot + 'Sort'), null, {
      params: {
        appid: this.context.appId.toString(),
        contentTypeId: contentType.Id.toString(),
        order: JSON.stringify(idArray)
      }
    });
  }
  setTitle(item, contentType) {
    return this.http.post(this.apiUrl(_app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_0__.webApiTypeRoot + 'SetTitle'), null, {
      params: {
        appid: this.context.appId.toString(),
        contentTypeId: contentType.Id.toString(),
        attributeId: item.Id.toString()
      }
    });
  }
  rename(fieldId, contentTypeId, newName) {
    return this.http.post(this.apiUrl(webApiFieldsRoot + 'Rename'), null, {
      params: {
        appid: this.context.appId.toString(),
        contentTypeId: contentTypeId.toString(),
        attributeId: fieldId.toString(),
        newName
      }
    });
  }
  delete(item, contentType) {
    if (item.IsTitle) {
      throw new Error('Can\'t delete Title');
    }
    return this.http.delete(this.apiUrl(webApiFieldsRoot + 'Delete'), {
      params: {
        appid: this.context.appId.toString(),
        contentTypeId: contentType.Id.toString(),
        attributeId: item.Id.toString()
      }
    });
  }
  add(newField, contentTypeId) {
    return this.http.post(this.apiUrl(webApiFieldsRoot + 'Add'), null, {
      params: {
        AppId: this.context.appId.toString(),
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
  updateInputType(id, staticName, inputType) {
    return this.http.post(this.apiUrl(webApiFieldsRoot + 'InputType'), null, {
      params: {
        appId: this.context.appId.toString(),
        attributeId: id.toString(),
        field: staticName,
        inputType
      }
    });
  }
  static #_ = this.ɵfac = function ContentTypesFieldsService_Factory(t) {
    return new (t || ContentTypesFieldsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_1__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_5__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ContentTypesFieldsService,
    factory: ContentTypesFieldsService.ɵfac
  });
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
//# sourceMappingURL=projects_eav-ui_src_app_content-items_import-content-item_import-content-item_component_ts-pr-3ed00c.js.map