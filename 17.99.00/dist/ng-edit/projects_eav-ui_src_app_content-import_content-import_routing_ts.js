"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_content-import_content-import_routing_ts"],{

/***/ 70241:
/*!********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-import/content-import-dialog.config.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentImportDialog: () => (/* binding */ contentImportDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const contentImportDialog = {
  name: 'IMPORT_CONTENT_TYPE_DIALOG',
  initContext: false,
  panelSize: 'medium',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        ContentImportComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_radio_mjs"), __webpack_require__.e("projects_eav-ui_src_app_content-import_content-import_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./content-import.component */ 26081));
      return ContentImportComponent;
    })();
  }
};

/***/ }),

/***/ 66880:
/*!**************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-import/content-import.routing.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentImportRoutes: () => (/* binding */ contentImportRoutes)
/* harmony export */ });
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ 85544);
/* harmony import */ var _content_import_dialog_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-import-dialog.config */ 70241);


const contentImportRoutes = [{
  path: '',
  component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__.DialogEntryComponent,
  data: {
    dialog: _content_import_dialog_config__WEBPACK_IMPORTED_MODULE_1__.contentImportDialog
  }
}];

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_content-import_content-import_routing_ts.js.map