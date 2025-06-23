"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_sub-dialogs_import-query_import-query_component_ts"],{

/***/ 29149:
/*!*******************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/import-query/import-query.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportQueryComponent: () => (/* binding */ ImportQueryComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core */ 88692);
/* harmony import */ var _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/file-upload-dialog */ 34616);
/* harmony import */ var _services_pipelines_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pipelines.service */ 74079);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);





class ImportQueryComponent {
  constructor(dialogData) {
    this.uploadType = _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_1__.UploadTypes.Query;
    this.pipelinesService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_pipelines_service__WEBPACK_IMPORTED_MODULE_2__.PipelinesService);
    dialogData.title ??= `Import Query`;
    dialogData.description ??= `Select a Query file (json) from your computer to import.`;
    dialogData.allowedFileTypes ??= 'json';
    dialogData.upload$ ??= files => this.pipelinesService.importQuery(files[0]);
  }
  static {
    this.ɵfac = function ImportQueryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ImportQueryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ImportQueryComponent,
      selectors: [["app-import-query"]],
      decls: 1,
      vars: 1,
      consts: [[3, "uploadType"]],
      template: function ImportQueryComponent_Template(rf, ctx) {
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

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_sub-dialogs_import-query_import-query_component_ts.js.map