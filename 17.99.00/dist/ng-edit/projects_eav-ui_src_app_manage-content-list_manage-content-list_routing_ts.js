"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_manage-content-list_manage-content-list_routing_ts"],{

/***/ 54245:
/*!******************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/manage-content-list/manage-content-list-dialog.config.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   manageContentListDialog: () => (/* binding */ manageContentListDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const manageContentListDialog = {
  name: 'MANAGE_CONTENT_LIST_DIALOG',
  initContext: true,
  panelSize: 'medium',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        ManageContentListComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-projects_eav-ui_src_app_shared_pipes_safe-html_pipe_ts-node_modules_angular_material_-bba45a"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_app-administration_services_index_ts-projects_eav-ui_src_app_-488733"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_directives_mousedown-stop-propagation_directive_ts-nod-e2f6cd"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_manage-content-list_manage-content-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./manage-content-list.component */ 52645));
      return ManageContentListComponent;
    })();
  }
};

/***/ }),

/***/ 25284:
/*!************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/manage-content-list/manage-content-list.routing.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   manageContentRoutes: () => (/* binding */ manageContentRoutes)
/* harmony export */ });
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ 85544);
/* harmony import */ var _manage_content_list_dialog_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-content-list-dialog.config */ 54245);
/* harmony import */ var _edit_edit_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit/edit.routing */ 90390);



const manageContentRoutes = [{
  path: '',
  component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__.DialogEntryComponent,
  data: {
    dialog: _manage_content_list_dialog_config__WEBPACK_IMPORTED_MODULE_1__.manageContentListDialog
  },
  children: [..._edit_edit_routing__WEBPACK_IMPORTED_MODULE_2__.EditRoutesSubItems, {
    path: ':guid/:part/:index/replace',
    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_replace-content_replace-content_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../replace-content/replace-content.routing */ 97440)).then(m => m.replaceContentRoutes)
  }]
}];

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_manage-content-list_manage-content-list_routing_ts.js.map