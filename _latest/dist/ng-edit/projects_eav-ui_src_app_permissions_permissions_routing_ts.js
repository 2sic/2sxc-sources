"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_permissions_permissions_routing_ts"],{

/***/ 42365:
/*!**************************************************************************!*\
  !*** ./projects/eav-ui/src/app/permissions/permissions-dialog.config.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   permissionsDialog: () => (/* binding */ permissionsDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const permissionsDialog = {
  name: 'SET_PERMISSIONS_DIALOG',
  initContext: true,
  panelSize: 'large',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        PermissionsComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_radio_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_ag-grid_column-definitions_ts-projects_eav-ui_src_app_-3cb379"), __webpack_require__.e("default-projects_eav-ui_src_app_permissions_permissions_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./permissions.component */ 7549));
      return PermissionsComponent;
    })();
  }
};

/***/ }),

/***/ 43516:
/*!********************************************************************!*\
  !*** ./projects/eav-ui/src/app/permissions/permissions.routing.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   permissionRoutes: () => (/* binding */ permissionRoutes)
/* harmony export */ });
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ 85544);
/* harmony import */ var _permissions_dialog_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permissions-dialog.config */ 42365);
/* harmony import */ var _edit_edit_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit/edit.routing */ 90390);



const permissionRoutes = [{
  path: '',
  component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__.DialogEntryComponent,
  data: {
    dialog: _permissions_dialog_config__WEBPACK_IMPORTED_MODULE_1__.permissionsDialog
  },
  children: _edit_edit_routing__WEBPACK_IMPORTED_MODULE_2__.EditRoutes
}];

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_permissions_permissions_routing_ts.js.map