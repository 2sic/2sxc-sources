"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_shared_components_base-with-child-dialog_component_ts"],{

/***/ 61735:
/*!***************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/components/base-with-child-dialog.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseWithChildDialogComponent: () => (/* binding */ BaseWithChildDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5057);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.component */ 43176);
/* harmony import */ var _logging_eav_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logging/eav-logger */ 6812);




const logThis = false;
// 2024-06-12 2dm experimental - remove comments if all is good mid of June
// - previously had
// @Directive()   // Needs the @Directive() so the compiler allows OnDestroy to be implemented
// ...then tried this
// @Component({
//   selector: 'app-base-component-with-child',
//   template: ''
// })
// ...but then added abstract, so I think it doesn't actually need all that
// tslint:disable-next-line:directive-class-suffix
class BaseWithChildDialogComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(router, route, log) {
    super();
    this.router = router;
    this.route = route;
    this.log = log;
    this.log ??= new _logging_eav_logger__WEBPACK_IMPORTED_MODULE_1__.EavLogger('BaseComponent', logThis);
  }
  // 2024-06-12 2dm - don't think this is needed since it's already on the base class
  // ngOnDestroy() {
  //   super.ngOnDestroy();
  // }
  // TODO @2dg not longer in use after refactoring SideNav with Routing
  // protected refreshOnChildClosedDeep() {
  //   return this.router.events.pipe(
  //     filter(event => event instanceof NavigationEnd),
  //     startWith(!!this.route.snapshot.firstChild.firstChild),
  //     map(() => !!this.route.snapshot.firstChild.firstChild),
  //     pairwise(),
  //     filter(([hadChild, hasChild]) => hadChild && !hasChild),
  //   )
  // }
  childDialogClosed$() {
    return this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.startWith)(!!this.route.snapshot.firstChild), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(() => !!this.route.snapshot.firstChild), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.pairwise)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(([hadChildBefore, hasChildNow]) => hadChildBefore && !hasChildNow));
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_shared_components_base-with-child-dialog_component_ts.js.map