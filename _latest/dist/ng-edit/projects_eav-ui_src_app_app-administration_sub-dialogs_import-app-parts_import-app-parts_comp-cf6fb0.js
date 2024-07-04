"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_sub-dialogs_import-app-parts_import-app-parts_comp-cf6fb0"],{

/***/ 61465:
/*!***************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/import-app-parts/import-app-parts.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportAppPartsComponent: () => (/* binding */ ImportAppPartsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/file-upload-dialog */ 34616);
/* harmony import */ var _services_import_app_parts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/import-app-parts.service */ 58624);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core */ 34447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);





class ImportAppPartsComponent {
  constructor(dialogData) {
    this.uploadType = _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_0__.UploadTypes.AppPart;
    this.importAppPartsService = (0,_core__WEBPACK_IMPORTED_MODULE_2__.transient)(_services_import_app_parts_service__WEBPACK_IMPORTED_MODULE_1__.ImportAppPartsService);
    dialogData.title ??= `Import Content and Templates into this App`;
    dialogData.description ??= `
    Import content and templates from a content export (zip) or partial export (xml) to this app.
    The entire content of the selected file will be imported.
    If you want to import an entire app, go to the <em>Apps Management</em>.
    For further help visit <a href="https://2sxc.org/en/help?tag=import" target="_blank">2sxc Help</a>.
    `;
    dialogData.allowedFileTypes ??= 'xml';
    dialogData.upload$ ??= files => this.importAppPartsService.importAppParts(files[0]);
  }
  static #_ = this.ɵfac = function ImportAppPartsComponent_Factory(t) {
    return new (t || ImportAppPartsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ImportAppPartsComponent,
    selectors: [["app-import-app-parts"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [[3, "uploadType"]],
    template: function ImportAppPartsComponent_Template(rf, ctx) {
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
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_sub-dialogs_import-app-parts_import-app-parts_comp-cf6fb0.js.map