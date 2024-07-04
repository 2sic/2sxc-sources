"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_import-app_import-app_component_ts"],{

/***/ 60781:
/*!********************************************************************!*\
  !*** ./projects/eav-ui/src/app/import-app/import-app.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportAppComponent: () => (/* binding */ ImportAppComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/file-upload-dialog */ 34616);
/* harmony import */ var _services_import_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/import-app.service */ 71772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





class ImportAppComponent {
  constructor(dialogData, importAppService) {
    this.uploadType = _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_0__.UploadTypes.App;
    dialogData.title ??= `Import App`;
    dialogData.description ??= `
    Select an app package (zip) from your computer to import an app. New apps can be downloaded on
    <a href="https://2sxc.org/apps" target="_blank">https://2sxc.org/apps</a>.
    For further help visit <a href="https://2sxc.org/en/help?tag=import-app" target="_blank">2sxc Help</a>.
    `;
    dialogData.allowedFileTypes ??= 'zip';
    dialogData.upload$ ??= files => importAppService.importApp(files[0], undefined, true);
  }
  static #_ = this.ɵfac = function ImportAppComponent_Factory(t) {
    return new (t || ImportAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_import_app_service__WEBPACK_IMPORTED_MODULE_1__.ImportAppService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ImportAppComponent,
    selectors: [["app-import-app"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_services_import_app_service__WEBPACK_IMPORTED_MODULE_1__.ImportAppService]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [[3, "uploadType"]],
    template: function ImportAppComponent_Template(rf, ctx) {
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

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_import-app_import-app_component_ts.js.map