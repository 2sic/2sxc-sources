"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_dev-rest_dev-rest_routing_ts"],{

/***/ 79823:
/*!********************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/dev-rest-dialog.config.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   devRestDialog: () => (/* binding */ devRestDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const devRestDialog = {
  name: 'DEV_REST_DIALOG',
  initContext: true,
  panelSize: 'large',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        DevRestEntryComponent
      } = yield __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_dev-rest_entry_entry_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./entry/entry.component */ 62294));
      return DevRestEntryComponent;
    })();
  }
};

/***/ }),

/***/ 63602:
/*!**************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/dev-rest.routing.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   devRestRoutes: () => (/* binding */ devRestRoutes)
/* harmony export */ });
/* harmony import */ var _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../permissions/go-to-permissions */ 72437);
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ 85544);
/* harmony import */ var _dev_rest_dialog_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dev-rest-dialog.config */ 79823);
/* harmony import */ var _go_to_dev_rest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./go-to-dev-rest */ 10261);




const devRestRoutes = [{
  path: '',
  component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_1__.DialogEntryComponent,
  data: {
    dialog: _dev_rest_dialog_config__WEBPACK_IMPORTED_MODULE_2__.devRestDialog,
    title: 'REST API'
  },
  children: [/* This route is used in Visual Query to open REST as Dialog */
  {
    path: `query/:${_go_to_dev_rest__WEBPACK_IMPORTED_MODULE_3__.GoToDevRest.paramQuery}`,
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_eav-ui_src_app_shared_components_base_component_ts-projects_eav-ui_src_app_s-dc0343"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_expansion_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_tabs_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_dev-rest_dev-rest-urls-and-code_dev-rest-urls-and-code_compon-f0cd0a"), __webpack_require__.e("default-projects_eav-ui_src_app_app-administration_services_index_ts-projects_eav-ui_src_app_-ecbb79"), __webpack_require__.e("default-projects_eav-ui_src_app_dev-rest_query_query_component_ts"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_services_content-types_service_ts-projects_eav-ui_-2c5e24")]).then(__webpack_require__.bind(__webpack_require__, /*! ./query/query.component */ 99774)).then(m => m.DevRestQueryComponent),
    children: [_permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_0__.GoToPermissions.route]
  }]
}];

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_dev-rest_dev-rest_routing_ts.js.map