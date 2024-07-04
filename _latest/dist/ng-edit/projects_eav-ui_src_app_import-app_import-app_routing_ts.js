"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_import-app_import-app_routing_ts"],{

/***/ 25709:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/import-app/import-app-dialog.config.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   importAppDialog: () => (/* binding */ importAppDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const importAppDialog = {
  name: 'IMPORT_APP_DIALOG',
  initContext: true,
  panelSize: 'medium',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        ImportAppComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-projects_eav-ui_src_app_shared_pipes_safe-html_pipe_ts-node_modules_angular_material_-bba45a"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("projects_eav-ui_src_app_import-app_import-app_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./import-app.component */ 60781));
      return ImportAppComponent;
    })();
  }
};

/***/ }),

/***/ 59532:
/*!******************************************************************!*\
  !*** ./projects/eav-ui/src/app/import-app/import-app.routing.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   importRoutes: () => (/* binding */ importRoutes)
/* harmony export */ });
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ 85544);
/* harmony import */ var _import_app_dialog_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import-app-dialog.config */ 25709);


const importRoutes = [{
  path: '',
  component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__.DialogEntryComponent,
  data: {
    dialog: _import_app_dialog_config__WEBPACK_IMPORTED_MODULE_1__.importAppDialog
  }
}];

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_import-app_import-app_routing_ts.js.map