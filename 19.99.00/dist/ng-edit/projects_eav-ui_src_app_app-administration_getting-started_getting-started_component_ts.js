"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_getting-started_getting-started_component_ts"],{

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
  static {
    this.ɵfac = function SafeResourceUrlPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SafeResourceUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safeResourceUrl",
      type: SafeResourceUrlPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 86442:
/*!*************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/getting-started/getting-started.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GettingStartedComponent: () => (/* binding */ GettingStartedComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _shared_pipes_safe_resource_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/pipes/safe-resource-url */ 23523);
/* harmony import */ var _services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dialog-config-app.service */ 64699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);






function GettingStartedComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "iframe", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "safeResourceUrl");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeResourceUrl"]);
  }
}
class GettingStartedComponent {
  constructor() {
    this.dialogConfigSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_2__.DialogConfigAppService);
    this.gettingStartedUrl$ = this.dialogConfigSvc.getCurrent$().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(dialogSettings => dialogSettings.Context.App.GettingStartedUrl));
  }
  static {
    this.ɵfac = function GettingStartedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || GettingStartedComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: GettingStartedComponent,
      selectors: [["app-getting-started"]],
      decls: 2,
      vars: 3,
      consts: [[1, "iframe", 3, "src"]],
      template: function GettingStartedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, GettingStartedComponent_Conditional_0_Template, 2, 3, "iframe", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.gettingStartedUrl$)) ? 0 : -1, tmp_0_0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _shared_pipes_safe_resource_url__WEBPACK_IMPORTED_MODULE_1__.SafeResourceUrlPipe],
      styles: [".iframe[_ngcontent-%COMP%] {\n  border: none;\n  width: 100%;\n  height: calc(100vh - 130px);\n}\n@media (max-width: 600px) {\n  .iframe[_ngcontent-%COMP%] {\n    height: calc(100vh - 161px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldHRpbmctc3RhcnRlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUFDRjtBQUNFO0VBTEY7SUFNSSwyQkFBQTtFQUVGO0FBQ0YiLCJmaWxlIjoiZ2V0dGluZy1zdGFydGVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlmcmFtZSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEzMHB4KTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjFweCk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQUNGO0FBQ0U7RUFMRjtJQU1JLDJCQUFBO0VBRUY7QUFDRjtBQUNBLHdqQkFBd2pCIiwic291cmNlc0NvbnRlbnQiOlsiLmlmcmFtZSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEzMHB4KTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjFweCk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_getting-started_getting-started_component_ts.js.map