"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_replace-content_replace-content_routing_ts"],{

/***/ 28129:
/*!**********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/replace-content/replace-content-dialog.config.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   replaceContentDialog: () => (/* binding */ replaceContentDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const replaceContentDialog = {
  name: 'REPLACE_CONTENT_DIALOG',
  initContext: true,
  panelSize: 'medium',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        ReplaceContentComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_replace-content_replace-content_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./replace-content.component */ 4513));
      return ReplaceContentComponent;
    })();
  }
};

/***/ }),

/***/ 97440:
/*!****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/replace-content/replace-content.routing.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   replaceContentRoutes: () => (/* binding */ replaceContentRoutes)
/* harmony export */ });
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ 85544);
/* harmony import */ var _replace_content_dialog_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./replace-content-dialog.config */ 28129);
/* harmony import */ var _edit_edit_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit/edit.routing */ 90390);



const replaceContentRoutes = [{
  path: '',
  component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__.DialogEntryComponent,
  data: {
    dialog: _replace_content_dialog_config__WEBPACK_IMPORTED_MODULE_1__.replaceContentDialog
  },
  children: [
  // Note 2024-07-01 2dm - not sure why it is configured without history, but to be safe I'll keep it for now
  ..._edit_edit_routing__WEBPACK_IMPORTED_MODULE_2__.EditRoutesSubItemsNoHistory]
}];

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_replace-content_replace-content_routing_ts.js.map