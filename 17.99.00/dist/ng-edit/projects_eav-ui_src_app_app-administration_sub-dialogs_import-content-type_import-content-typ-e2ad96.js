"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_sub-dialogs_import-content-type_import-content-typ-e2ad96"],{

/***/ 46907:
/*!*********************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/import-content-type/import-content-type.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportContentTypeComponent: () => (/* binding */ ImportContentTypeComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/file-upload-dialog */ 34616);
/* harmony import */ var _services_content_types_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/content-types.service */ 17693);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core */ 34447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);





class ImportContentTypeComponent {
  constructor(dialogData) {
    this.contentTypesService = (0,_core__WEBPACK_IMPORTED_MODULE_2__.transient)(_services_content_types_service__WEBPACK_IMPORTED_MODULE_1__.ContentTypesService);
    this.uploadType = _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_0__.UploadTypes.ContentType;
    dialogData.title ??= `Import Content Type`;
    dialogData.description ??= `Select Content Type definition file (json) from your computer to import.`;
    dialogData.allowedFileTypes ??= 'json';
    dialogData.multiple ??= true;
    dialogData.upload$ ??= files => this.contentTypesService.import(files);
  }
  static #_ = this.ɵfac = function ImportContentTypeComponent_Factory(t) {
    return new (t || ImportContentTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ImportContentTypeComponent,
    selectors: [["app-import-content-type"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [[3, "uploadType"]],
    template: function ImportContentTypeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-file-upload-dialog", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("uploadType", ctx.uploadType);
      }
    },
    dependencies: [_shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_0__.FileUploadDialogComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_sub-dialogs_import-content-type_import-content-typ-e2ad96.js.map