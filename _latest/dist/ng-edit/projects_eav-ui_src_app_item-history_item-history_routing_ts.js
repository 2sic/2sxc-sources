"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_item-history_item-history_routing_ts"],{

/***/ 72619:
/*!****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/item-history/item-history-dialog.config.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemHistoryDialog: () => (/* binding */ itemHistoryDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const itemHistoryDialog = {
  name: 'ITEM_HISTORY_DIALOG',
  initContext: true,
  panelSize: 'medium',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        ItemHistoryComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_select_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_expansion_mjs"), __webpack_require__.e("projects_eav-ui_src_app_item-history_item-history_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./item-history.component */ 60323));
      return ItemHistoryComponent;
    })();
  }
};

/***/ }),

/***/ 65022:
/*!**********************************************************************!*\
  !*** ./projects/eav-ui/src/app/item-history/item-history.routing.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   historyRoutes: () => (/* binding */ historyRoutes)
/* harmony export */ });
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ 85544);
/* harmony import */ var _item_history_dialog_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-history-dialog.config */ 72619);


const historyRoutes = [{
  path: '',
  component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__.DialogEntryComponent,
  data: {
    dialog: _item_history_dialog_config__WEBPACK_IMPORTED_MODULE_1__.itemHistoryDialog,
    title: 'Item History'
  }
}];

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_item-history_item-history_routing_ts.js.map