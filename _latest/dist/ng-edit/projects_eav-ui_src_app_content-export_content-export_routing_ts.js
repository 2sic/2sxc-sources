"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_content-export_content-export_routing_ts"],{

/***/ 80743:
/*!********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-export/content-export-dialog.config.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentExportDialog: () => (/* binding */ contentExportDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const contentExportDialog = {
  name: 'EXPORT_CONTENT_TYPE_DIALOG',
  initContext: true,
  panelSize: 'medium',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        ContentExportComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_radio_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_select_mjs"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_content-export_content-export_component_ts-projects_eav-ui_src_app_sh-5eade4")]).then(__webpack_require__.bind(__webpack_require__, /*! ./content-export.component */ 75727));
      return ContentExportComponent;
    })();
  }
};

/***/ }),

/***/ 47562:
/*!**************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-export/content-export.routing.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentExportRoutes: () => (/* binding */ ContentExportRoutes)
/* harmony export */ });
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ 85544);
/* harmony import */ var _content_export_dialog_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-export-dialog.config */ 80743);


const ContentExportRoutes = [{
  path: '',
  component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__.DialogEntryComponent,
  data: {
    dialog: _content_export_dialog_config__WEBPACK_IMPORTED_MODULE_1__.contentExportDialog
  }
}];

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_content-export_content-export_routing_ts.js.map