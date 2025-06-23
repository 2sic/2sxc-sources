"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_metadata_metadata_routing_ts"],{

/***/ 26777:
/*!********************************************************************!*\
  !*** ./projects/eav-ui/src/app/metadata/metadata-dialog.config.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   metadataDialog: () => (/* binding */ metadataDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const metadataDialog = {
  name: 'METADATA_DIALOG',
  initContext: true,
  panelSize: 'large',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        MetadataComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_base_component_ts-projects_eav-ui_src_app_s-83efe3"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_radio_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_select_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_ag-grid_column-definitions_ts-projects_eav-ui_src_app_-3cb379"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_app-administration_services_index_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_fields_content-types-fields_service_ts-projects_eav-ui-cff1aa"), __webpack_require__.e("default-projects_eav-ui_src_app_features_shared_base-feature_component_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_slide-toggle_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_permissions_permissions_component_ts"), __webpack_require__.e("default-node_modules_ecodev_fab-speed-dial_fesm2022_ecodev-fab-speed-dial_mjs"), __webpack_require__.e("projects_eav-ui_src_app_metadata_metadata_component_ts-projects_eav-ui_src_app_shared_service-802177")]).then(__webpack_require__.bind(__webpack_require__, /*! ./metadata.component */ 14937));
      return MetadataComponent;
    })();
  }
};

/***/ }),

/***/ 56536:
/*!**************************************************************!*\
  !*** ./projects/eav-ui/src/app/metadata/metadata.routing.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   metadataRoutes: () => (/* binding */ metadataRoutes)
/* harmony export */ });
/* harmony import */ var _edit_edit_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../edit/edit.routing */ 90390);
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ 85544);
/* harmony import */ var _metadata_dialog_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata-dialog.config */ 26777);



const metadataRoutes = [{
  path: '',
  component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_1__.DialogEntryComponent,
  data: {
    dialog: _metadata_dialog_config__WEBPACK_IMPORTED_MODULE_2__.metadataDialog
  },
  children: _edit_edit_routing__WEBPACK_IMPORTED_MODULE_0__.EditRoutes
}];

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_metadata_metadata_routing_ts.js.map