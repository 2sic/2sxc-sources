"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_permissions_go-to-permissions_ts"],{

/***/ 72437:
/*!******************************************************************!*\
  !*** ./projects/eav-ui/src/app/permissions/go-to-permissions.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoToPermissions: () => (/* binding */ GoToPermissions)
/* harmony export */ });
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants/eav.constants */ 50052);

class GoToPermissions {
  static #_ = this.route = {
    path: 'permissions/:targetType/:keyType/:key',
    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_permissions_permissions_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./permissions.routing */ 43516)).then(m => m.permissionRoutes),
    // loadChildren: () => import('./permissions.module').then(m => m.PermissionsModule),
    data: {
      title: 'Permissions'
    }
  };
  static getUrl(targetType, keyType, key) {
    return `permissions/${targetType}/${keyType}/${key}`;
  }
  static getUrlApp(appId) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.app.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.app.keyType, appId.toString());
  }
  static getUrlAttribute(id) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.attribute.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.attribute.keyType, id.toString());
  }
  /** For historic reasons, it's the same as Entity */
  static getUrlContentType(guid) {
    return this.getUrlEntity(guid);
  }
  static getUrlEntity(guid) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.entity.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.entity.keyType, guid);
  }
  static getUrlLanguage(id) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.language.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.language.keyType, id);
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_permissions_go-to-permissions_ts.js.map