"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_metadata_index_ts-projects_eav-ui_src_app_permissions_go-to-permissions_ts"],{

/***/ 41463:
/*!************************************************************!*\
  !*** ./projects/eav-ui/src/app/metadata/go-to-metadata.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoToMetadata: () => (/* binding */ GoToMetadata)
/* harmony export */ });
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants/eav.constants */ 50052);

class GoToMetadata {
  static getRoutes() {
    const defaultRoute = {
      path: 'metadata/:targetType/:keyType/:key',
      loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_metadata_metadata_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./metadata.routing */ 56536)).then(m => m.metadataRoutes),
      data: {
        title: 'Metadata'
      }
    };
    const routes = [defaultRoute, {
      ...defaultRoute,
      path: `${defaultRoute.path}/title/:title`
    }, {
      ...defaultRoute,
      path: `${defaultRoute.path}/contentType/:contentTypeStaticName`
    }, {
      ...defaultRoute,
      path: `${defaultRoute.path}/title/:title/contentType/:contentTypeStaticName`
    }];
    return routes;
  }
  static getUrl(targetType, keyType, key, dialogTitle, contentTypeStaticName) {
    let url = `metadata/${targetType}/${keyType}/${key}`;
    if (dialogTitle) {
      url += `/title/${encodeURIComponent(dialogTitle)}`;
    }
    if (contentTypeStaticName) {
      url += `/contentType/${contentTypeStaticName}`;
    }
    return url;
  }
  static getUrlApp(appId, dialogTitle) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.app.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.app.keyType, appId.toString(), dialogTitle);
  }
  static getUrlAttribute(attributeId, dialogTitle, contentTypeStaticName) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.attribute.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.attribute.keyType, attributeId.toString(), dialogTitle, contentTypeStaticName);
  }
  static getUrlContentType(staticName, dialogTitle) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.contentType.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.contentType.keyType, staticName, dialogTitle);
  }
  static getUrlEntity(guid, dialogTitle, contentTypeStaticName) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.entity.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.entity.keyType, guid, dialogTitle, contentTypeStaticName);
  }
}

/***/ }),

/***/ 65217:
/*!***************************************************!*\
  !*** ./projects/eav-ui/src/app/metadata/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoToMetadata: () => (/* reexport safe */ _go_to_metadata__WEBPACK_IMPORTED_MODULE_1__.GoToMetadata)
/* harmony export */ });
/* harmony import */ var _models_metadata_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/metadata.model */ 11884);
/* harmony import */ var _go_to_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./go-to-metadata */ 41463);



/***/ }),

/***/ 11884:
/*!*******************************************************************!*\
  !*** ./projects/eav-ui/src/app/metadata/models/metadata.model.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

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
  static {
    this.route = {
      path: 'permissions/:targetType/:keyType/:key',
      loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_permissions_permissions_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./permissions.routing */ 43516)).then(m => m.permissionRoutes),
      // loadChildren: () => import('./permissions.module').then(m => m.PermissionsModule),
      data: {
        title: 'Permissions'
      }
    };
  }
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
//# sourceMappingURL=projects_eav-ui_src_app_metadata_index_ts-projects_eav-ui_src_app_permissions_go-to-permissions_ts.js.map