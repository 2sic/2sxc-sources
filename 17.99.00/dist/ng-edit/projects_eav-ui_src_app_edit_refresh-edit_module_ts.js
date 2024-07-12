"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_edit_refresh-edit_module_ts"],{

/***/ 25668:
/*!*************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/refresh-edit.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RefreshEditComponent: () => (/* binding */ RefreshEditComponent),
/* harmony export */   RefreshEditModule: () => (/* binding */ RefreshEditModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/helpers */ 56606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);





class RefreshEditComponent {
  constructor(router, route) {
    const params = route.snapshot.params;
    const oldEditUrl = `edit/refresh/${params.items}`;
    const newEditUrl = `edit/${params.items}`;
    const currentUrl = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.UrlHelpers.calculatePathFromRoot(route);
    const lastIndex = currentUrl.lastIndexOf(oldEditUrl);
    if (lastIndex <= 0) {
      return;
    }
    const newUrl = currentUrl.substring(0, lastIndex) + currentUrl.substring(lastIndex).replace(oldEditUrl, newEditUrl);
    router.navigate([newUrl]);
  }
  static #_ = this.ɵfac = function RefreshEditComponent_Factory(t) {
    return new (t || RefreshEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: RefreshEditComponent,
    selectors: [["ng-component"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 0,
    vars: 0,
    template: function RefreshEditComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
const editRefreshRoutes = [{
  path: '',
  component: RefreshEditComponent,
  data: {
    title: 'Refreshing Edit Dialog'
  }
}];
class RefreshEditModule {
  static #_ = this.ɵfac = function RefreshEditModule_Factory(t) {
    return new (t || RefreshEditModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: RefreshEditModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(editRefreshRoutes)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RefreshEditModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, RefreshEditComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_edit_refresh-edit_module_ts.js.map