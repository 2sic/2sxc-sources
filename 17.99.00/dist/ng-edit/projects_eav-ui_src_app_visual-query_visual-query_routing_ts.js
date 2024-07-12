"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_visual-query_visual-query_routing_ts"],{

/***/ 95932:
/*!**********************************************************************!*\
  !*** ./projects/eav-ui/src/app/visual-query/visual-query.routing.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   visualQueryRoutes: () => (/* binding */ visualQueryRoutes)
/* harmony export */ });
/* harmony import */ var _dev_rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dev-rest */ 13488);
/* harmony import */ var _edit_edit_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit/edit.routing */ 90390);


const visualQueryRoutes = [{
  path: '',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_slide-toggle_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_tabs_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_directives_click-stop-propagation_directive_ts-node_mo-18fe20"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_visual-query_visual-query_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./visual-query.component */ 56669)).then(m => m.VisualQueryComponent),
  children: [_dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.route, ..._edit_edit_routing__WEBPACK_IMPORTED_MODULE_1__.EditRoutesSubItemsNoHistory]
}];

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_visual-query_visual-query_routing_ts.js.map