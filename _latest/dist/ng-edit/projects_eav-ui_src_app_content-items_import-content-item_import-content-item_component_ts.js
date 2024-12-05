"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_content-items_import-content-item_import-content-item_component_ts"],{

/***/ 66754:
/*!****************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-items/import-content-item/import-content-item.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportContentItemComponent: () => (/* binding */ ImportContentItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/file-upload-dialog */ 34616);
/* harmony import */ var _services_content_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/content-items.service */ 336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);





class ImportContentItemComponent {
  constructor(dialogData) {
    this.uploadType = _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_1__.UploadTypes.ContentItem;
    this.contentItemsService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_content_items_service__WEBPACK_IMPORTED_MODULE_2__.ContentItemsService);
    dialogData.title ??= `Import Single Item`;
    dialogData.description ??= `Select an item file (json) from your computer to import.`;
    dialogData.allowedFileTypes ??= 'json';
    dialogData.upload$ ??= files => this.contentItemsService.importItem(files[0]);
  }
  static {
    this.ɵfac = function ImportContentItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ImportContentItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ImportContentItemComponent,
      selectors: [["app-import-content-item"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [[3, "uploadType"]],
      template: function ImportContentItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-file-upload-dialog", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("uploadType", ctx.uploadType);
        }
      },
      dependencies: [_shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_1__.FileUploadDialogComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 336:
/*!*********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-items/services/content-items.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentItemsService: () => (/* binding */ ContentItemsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 95429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_fields_content_types_fields_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/fields/content-types-fields.service */ 75959);
/* harmony import */ var _shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/helpers/file-to-base64.helper */ 70693);
/* harmony import */ var _shared_services_entity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/entity.service */ 9234);
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);







class ContentItemsService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_3__.HttpServiceBase {
  getAll(contentTypeStaticName) {
    return this.getHttpApiUrl(_shared_services_entity_service__WEBPACK_IMPORTED_MODULE_2__.webApiEntityList, {
      params: {
        appId: this.appId,
        contentType: contentTypeStaticName
      }
    });
  }
  getAllSig(contentTypeStaticName, initial) {
    return this.getSignal(_shared_services_entity_service__WEBPACK_IMPORTED_MODULE_2__.webApiEntityList, {
      params: {
        appId: this.appId,
        contentType: contentTypeStaticName
      }
    }, initial);
  }
  getColumns(contentTypeStaticName) {
    return this.getHttpApiUrl(_shared_fields_content_types_fields_service__WEBPACK_IMPORTED_MODULE_0__.webApiFieldsAll, {
      params: {
        appId: this.appId,
        staticName: contentTypeStaticName
      }
    });
  }
  importItem(file) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)((0,_shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_1__.toBase64)(file)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(fileBase64 => {
      return this.http.post(this.apiUrl(_shared_services_entity_service__WEBPACK_IMPORTED_MODULE_2__.webApiEntityRoot + 'upload'), {
        AppId: this.appId,
        ContentBase64: fileBase64
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(success => {
      const result = {
        Success: success,
        Messages: []
      };
      return result;
    }));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵContentItemsService_BaseFactory;
      return function ContentItemsService_Factory(__ngFactoryType__) {
        return (ɵContentItemsService_BaseFactory || (ɵContentItemsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](ContentItemsService)))(__ngFactoryType__ || ContentItemsService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: ContentItemsService,
      factory: ContentItemsService.ɵfac
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_content-items_import-content-item_import-content-item_component_ts.js.map