"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_getting-started_getting-started_component_ts"],{

/***/ 86442:
/*!*************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/getting-started/getting-started.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GettingStartedComponent: () => (/* binding */ GettingStartedComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/app-dialog-config.service */ 22743);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _shared_pipes_safe_resource_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/pipes/safe-resource-url */ 23523);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);






function GettingStartedComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "iframe", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "safeResourceUrl");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeResourceUrl"]);
  }
}
class GettingStartedComponent {
  constructor(appDialogConfigService) {
    this.appDialogConfigService = appDialogConfigService;
    this.gettingStartedUrl$ = this.appDialogConfigService.getCurrent$().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(dialogSettings => dialogSettings.Context.App.GettingStartedUrl));
  }
  static #_ = this.ɵfac = function GettingStartedComponent_Factory(t) {
    return new (t || GettingStartedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_0__.AppDialogConfigService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: GettingStartedComponent,
    selectors: [["app-getting-started"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [[1, "iframe", 3, "src"]],
    template: function GettingStartedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, GettingStartedComponent_Conditional_0_Template, 2, 3, "iframe", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.gettingStartedUrl$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _shared_pipes_safe_resource_url__WEBPACK_IMPORTED_MODULE_1__.SafeResourceUrlPipe],
    styles: [".iframe[_ngcontent-%COMP%] {\n  border: none;\n  width: 100%;\n  height: calc(100vh - 130px);\n}\n@media (max-width: 600px) {\n  .iframe[_ngcontent-%COMP%] {\n    height: calc(100vh - 161px);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQUNGO0FBQ0U7RUFMRjtJQU1JLDJCQUFBO0VBRUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5pZnJhbWUge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMzBweCk7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYxcHgpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 23523:
/*!*******************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/pipes/safe-resource-url.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafeResourceUrlPipe: () => (/* binding */ SafeResourceUrlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 80436);



class SafeResourceUrlPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(resourceUrl) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(resourceUrl);
  }
  static #_ = this.ɵfac = function SafeResourceUrlPipe_Factory(t) {
    return new (t || SafeResourceUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "safeResourceUrl",
    type: SafeResourceUrlPipe,
    pure: true,
    standalone: true
  });
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_getting-started_getting-started_component_ts.js.map