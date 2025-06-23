"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_edit_routing_edit-reload_component_ts-projects_eav-ui_src_app_shared_-7519af"],{

/***/ 2770:
/*!***********************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/routing/edit-reload.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditReloadComponent: () => (/* binding */ EditReloadComponent)
/* harmony export */ });
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/logging */ 34435);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/helpers */ 56606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);





/**
 * The purpose of this component is to refresh the edit dialog completely.
 * It works as follows:
 * 1. A close event of the child which requests a full refresh (probably just the history?)
 *    will cause the router to replace the Path to a url going to this control. This flushes the previous edit.
 * 2. This component will then navigate to the original edit dialog, restoring the original parameters.
 *
 * TODO: not sure if this is the best way to do this...
 */
class EditReloadComponent {
  constructor(router, route) {
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_0__.classLog)({
      EditReloadComponent
    });
    const l = this.log.fn('constructor', null, '🔄️');
    const p = route.snapshot.params;
    const url = _shared_helpers__WEBPACK_IMPORTED_MODULE_1__.UrlHelpers.newUrlIfCurrentContainsOldUrl(route, `edit/refresh/${p.items}`, `edit/${p.items}`);
    if (!url) return l.rNull('No URL to navigate to');
    router.navigate([url]);
    l.r('✅ refresh complete');
  }
  static {
    this.ɵfac = function EditReloadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditReloadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: EditReloadComponent,
      selectors: [["app-edit-reload"]],
      decls: 0,
      vars: 0,
      template: function EditReloadComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 4979:
/*!*****************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/services/service-base.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceBase: () => (/* binding */ ServiceBase)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


/**
 * Base class for services - just to standardize use of subscriptions.
 * Has @Injectable() just to allow it ot use the standard OnDestroy interface.
 */
class ServiceBase {
  constructor() {
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subscription();
  }
  ngOnDestroy() {
    this.destroy();
  }
  // TODO: TRY TO GET RID OF THIS. AFAIK it's just used in the mask, which should switch over to signals.
  destroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function ServiceBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ServiceBase)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ServiceBase,
      factory: ServiceBase.ɵfac
    });
  }
}

/***/ }),

/***/ 54839:
/*!******************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/services/query.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryService: () => (/* binding */ QueryService)
/* harmony export */ });
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logging */ 34435);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);






const logSpecs = {
  all: false,
  getAvailableEntities: false,
  getEntities: false
};
class QueryService {
  constructor(http, context) {
    this.http = http;
    this.context = context;
    this.log = (0,_logging__WEBPACK_IMPORTED_MODULE_0__.classLog)({
      QueryService
    }, logSpecs);
  }
  getFromQuery(queryUrl, params, fields, entitiesFilter) {
    this.log.fnIf('getAvailableEntities', {
      queryUrl,
      params,
      fields,
      entitiesFilter
    });
    // Check if any params we should auto-add are already set (like in a query which has these params set in the configuration)
    const hasParams = !!params;
    const paramsLower = params?.toLocaleLowerCase() ?? '';
    const hasAppId = paramsLower.includes('appid=') ?? false;
    const allParams = '' + (hasAppId ? '' : `&appId=${this.context.appId}`) + (hasParams ? `&${params}` : '') + '&$select=' + (fields ?? '' /* special catch to avoid the word "null" */);
    // trim initial & because it will always start with an & and it should't
    const urlParams = allParams.substring(1);
    return this.http.post(`app/auto/query/${queryUrl}?${urlParams}`, {
      Guids: entitiesFilter
    });
  }
  getEntities({
    contentTypes,
    itemIds,
    fields,
    log
  }) {
    this.log.fnIf(`getEntities`, {
      log,
      contentTypes,
      itemIds,
      fields
    });
    const allParams = '&typeNames=' + (contentTypes?.join(',') ?? '') + `&appId=${this.context.appId}` + '&itemIds=' + (itemIds?.join(',') ?? '') + '&$select=' + (fields ?? '' /* special catch to avoid the word "null" */);
    // trim initial & because it will always start with an & and it should't
    const urlParams = allParams.substring(1);
    return this.http.post(`app/auto/query/System.EntityPicker/Default?${urlParams}`, {});
  }
  static {
    this.ɵfac = function QueryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || QueryService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_context__WEBPACK_IMPORTED_MODULE_1__.Context));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: QueryService,
      factory: QueryService.ɵfac
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_edit_routing_edit-reload_component_ts-projects_eav-ui_src_app_shared_-7519af.js.map