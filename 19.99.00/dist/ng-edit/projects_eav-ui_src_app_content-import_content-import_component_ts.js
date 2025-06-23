"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_content-import_content-import_component_ts"],{

/***/ 3140:
/*!*********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/directives/base.directive.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseDirective: () => (/* binding */ BaseDirective)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


// tslint:disable-next-line:directive-class-suffix
class BaseDirective {
  constructor() {
    /** Holds all subscriptions to be unsubscribed on destroy */
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subscription();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function BaseDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BaseDirective)();
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: BaseDirective
    });
  }
}

/***/ }),

/***/ 9234:
/*!*******************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/services/entity.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityService: () => (/* binding */ EntityService),
/* harmony export */   webApiEntityList: () => (/* binding */ webApiEntityList),
/* harmony export */   webApiEntityRoot: () => (/* binding */ webApiEntityRoot)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 86301);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logging */ 34435);
/* harmony import */ var _http_service_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-service-base */ 96474);
/* harmony import */ var _query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query.service */ 54839);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);






const logSpecs = {
  all: false,
  getEntities: false,
  getAvailableEntities: false,
  delete: false
};
const webApiEntityRoot = 'admin/entity/';
const webApiEntityList = 'admin/entity/list';
class EntityService extends _http_service_base__WEBPACK_IMPORTED_MODULE_2__.HttpServiceBase {
  constructor() {
    super(...arguments);
    this.log = (0,_logging__WEBPACK_IMPORTED_MODULE_1__.classLog)({
      EntityService
    }, logSpecs);
    this.queryService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_query_service__WEBPACK_IMPORTED_MODULE_3__.QueryService);
  }
  /**
   * Get entities based on the content type name.
   * As of 2024-04-29 only used in REST API.
   * @param params
   * @returns
   */
  getEntities$(params) {
    this.log.fnIf('getEntities');
    return params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)(p => p != null), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(p => this.getAvailableEntities(p.contentTypeName).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.shareReplay)(1))));
  }
  getAvailableEntities(contentTypeName, entitiesFilter) {
    var log = this.log.fnIf('getAvailableEntities');
    return this.queryService.getEntities({
      contentTypes: [contentTypeName],
      itemIds: entitiesFilter,
      fields: 'Id,Guid,Title',
      log: 'getAvailableEntities'
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(data => data.Default));
  }
  delete(appId, contentType, entityId, force, parentId, parentField) {
    this.log.fnIf('delete', {
      appId,
      contentType,
      entityId,
      force,
      parentId,
      parent
    });
    return this.http.delete(this.apiUrl(webApiEntityRoot + 'delete'), {
      params: {
        contentType,
        id: entityId.toString(),
        appId,
        force: force.toString(),
        ...(parentId && {
          parentId: parentId.toString()
        }),
        ...(parentId && parentField && {
          parentField
        })
      }
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵEntityService_BaseFactory;
      return function EntityService_Factory(__ngFactoryType__) {
        return (ɵEntityService_BaseFactory || (ɵEntityService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetInheritedFactory"](EntityService)))(__ngFactoryType__ || EntityService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: EntityService,
      factory: EntityService.ɵfac
    });
  }
}

/***/ }),

/***/ 17693:
/*!**************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/services/content-types.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentTypesService: () => (/* binding */ ContentTypesService),
/* harmony export */   webApiTypeRoot: () => (/* binding */ webApiTypeRoot)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);




// We should list all the "full" paths here, so it's easier to find when searching for API calls
const webApiTypeRoot = 'admin/type/';
const webApiTypeGet = 'admin/type/get';
const webApiTypes = 'admin/type/list';
const webApiTypeScopes = 'admin/type/scopes';
const webApiTypeSave = 'admin/type/save';
const webApiTypeDelete = 'admin/type/delete';
const webApiTypeImport = 'admin/type/import';
const webApiTypeAddGhost = 'admin/type/addghost';
class ContentTypesService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__.HttpServiceBase {
  retrieveContentType(nameId) {
    return this.getHttpApiUrl(webApiTypeGet, {
      params: {
        appId: this.appId,
        contentTypeId: nameId
      }
    });
  }
  getTypeSig(nameId, initial) {
    return this.getSignal(webApiTypeGet, {
      params: {
        appId: this.appId,
        contentTypeId: nameId
      }
    }, initial);
  }
  retrieveContentTypes(scope) {
    return this.getHttpApiUrl(webApiTypes, {
      params: {
        appId: this.appId,
        scope
      }
    });
  }
  getTypesSig(scope, initial) {
    return this.getSignal(webApiTypes, {
      params: {
        appId: this.appId,
        scope
      }
    }, initial);
  }
  // TODO: remove this method after upgrade to V2
  getScopes() {
    return this.getHttpApiUrl(webApiTypeScopes, {
      params: {
        appId: this.appId
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(scopesData => {
      // wip during upgrade:
      const scopes = scopesData.old;
      const scopeOptions = Object.keys(scopes).map(key => ({
        name: scopes[key],
        value: key
      }));
      return scopeOptions;
    }));
  }
  // todo: switch to using the GetSignal with `map` parameter similar to the initial version above
  getScopesSig(initial) {
    const scopesSignal = this.getSignal(webApiTypeScopes, {
      params: {
        appId: this.appId
      }
    }, initial);
    const scopeOptionsSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {
      const scopesData = scopesSignal();
      // Add null/undefined check here
      if (!scopesData || !scopesData.old) {
        return []; // Return an empty array or handle this case as appropriate
      }
      const scopes = scopesData.old;
      return Object.keys(scopes).map(key => ({
        name: scopes[key],
        value: key
      }));
    });
    return scopeOptionsSignal;
  }
  getScopesV2() {
    return this.getHttpApiUrl(webApiTypeScopes, {
      params: {
        appId: this.appId
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(scopesData => scopesData.scopes));
  }
  save(contentType) {
    return this.http.post(this.apiUrl(webApiTypeSave), contentType, {
      params: {
        appid: this.appId
      }
    });
  }
  delete(contentType) {
    return this.http.delete(this.apiUrl(webApiTypeDelete), {
      params: {
        appid: this.appId,
        staticName: contentType.NameId
      } // TODO: @2pp - replace staticName with NameId
    });
  }
  import(files) {
    const formData = new FormData();
    for (const file of files) {
      formData.append('File', file);
    }
    return this.http.post(this.apiUrl(webApiTypeImport), formData, {
      params: {
        appId: this.appId,
        zoneId: this.zoneId
      }
    });
  }
  createGhost(sourceNameId) {
    return this.http.post(this.apiUrl(webApiTypeAddGhost), null, {
      params: {
        appid: this.appId,
        sourceNameId
      }
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵContentTypesService_BaseFactory;
      return function ContentTypesService_Factory(__ngFactoryType__) {
        return (ɵContentTypesService_BaseFactory || (ɵContentTypesService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ContentTypesService)))(__ngFactoryType__ || ContentTypesService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ContentTypesService,
      factory: ContentTypesService.ɵfac
    });
  }
}

/***/ }),

/***/ 18537:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/fromEvent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromEvent: () => (/* binding */ fromEvent)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observable/innerFrom */ 82645);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Observable */ 43942);
/* harmony import */ var _operators_mergeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/mergeMap */ 13255);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ 88830);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 81530);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 38067);






const nodeEventEmitterMethods = ['addListener', 'removeListener'];
const eventTargetMethods = ['addEventListener', 'removeEventListener'];
const jqueryMethods = ['on', 'off'];
function fromEvent(target, eventName, options, resultSelector) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(options)) {
    resultSelector = options;
    options = undefined;
  }
  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__.mapOneOrManyArgs)(resultSelector));
  }
  const [add, remove] = isEventTarget(target) ? eventTargetMethods.map(methodName => handler => target[methodName](eventName, handler, options)) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [];
  if (!add) {
    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(target)) {
      return (0,_operators_mergeMap__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(subTarget => fromEvent(subTarget, eventName, options))((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__.innerFrom)(target));
    }
  }
  if (!add) {
    throw new TypeError('Invalid event target');
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_5__.Observable(subscriber => {
    const handler = (...args) => subscriber.next(1 < args.length ? args : args[0]);
    add(handler);
    return () => remove(handler);
  });
}
function toCommonHandlerRegistry(target, eventName) {
  return methodName => handler => target[methodName](eventName, handler);
}
function isNodeStyleEventEmitter(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.addListener) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.on) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.off);
}
function isEventTarget(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.addEventListener) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.removeEventListener);
}

/***/ }),

/***/ 26081:
/*!****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-import/content-import.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentImportComponent: () => (/* binding */ ContentImportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ 53804);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core */ 88692);
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ 17693);
/* harmony import */ var _app_administration_services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-administration/services/dialog-config-app.service */ 64699);
/* harmony import */ var _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/directives/drag-and-drop.directive */ 34575);
/* harmony import */ var _services_content_import_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/content-import.service */ 41944);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);


















function ContentImportComponent_Conditional_10_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", null, 0)(2, "div", 7)(3, "div")(4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContentImportComponent_Conditional_10_Case_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const fileInput_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](fileInput_r2.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "input", 9, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ContentImportComponent_Conditional_10_Case_0_Template_input_change_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.fileChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div")(10, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "References to pages / files");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-radio-group", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ContentImportComponent_Conditional_10_Case_0_Template_mat_radio_group_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.formValues.resourcesReferences, $event) || (ctx_r2.formValues.resourcesReferences = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-radio-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Import links as written in the file (for example /Portals/...) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-radio-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Try to resolve paths to references ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div")(18, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Clear all other entities");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-radio-group", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ContentImportComponent_Conditional_10_Case_0_Template_mat_radio_group_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.formValues.clearEntities, $event) || (ctx_r2.formValues.clearEntities = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-radio-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Keep all entities not found in import ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-radio-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " Remove all entities not found in import ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Remember to backup your DNN first!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-dialog-actions", 18)(28, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContentImportComponent_Conditional_10_Case_0_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContentImportComponent_Conditional_10_Case_0_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.evaluateContent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " Preview Import ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.formValues.file ? ctx_r2.formValues.file.name : "Select or drop file");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.formValues.resourcesReferences);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.formValues.clearEntities);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r2.formValues.file || !ctx_r2.formValues.file.name);
  }
}
function ContentImportComponent_Conditional_10_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Please wait while processing...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ContentImportComponent_Conditional_10_Case_2_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7)(1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "File contains:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ul", 22)(6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "If you press Import, it will:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ul", 22)(15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Note: The import validates much data and may take several minutes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Try to import file '", ctx_r2.formValues.file.name, "'");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r2.evaluationResult().Detail.DocumentElementsCount, " content-items (records/entities)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r2.evaluationResult().Detail.LanguagesInDocumentCount, " languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r2.evaluationResult().Detail.AttributeNamesInDocument.length, " columns: ", ctx_r2.evaluationResult().Detail.AttributeNamesInDocument.join(", "), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Create ", ctx_r2.evaluationResult().Detail.AmountOfEntitiesCreated, " content-items");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Update ", ctx_r2.evaluationResult().Detail.AmountOfEntitiesUpdated, " content-items");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Delete ", ctx_r2.evaluationResult().Detail.AmountOfEntitiesDeleted, " content-items");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("Ignore ", ctx_r2.evaluationResult().Detail.AttributeNamesNotImported.length, " columns: ", ctx_r2.evaluationResult().Detail.AttributeNamesNotImported.join(", "), "");
  }
}
function ContentImportComponent_Conditional_10_Case_2_Conditional_0_Conditional_1_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const error_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Details: ", error_r5.ErrorDetail, "");
  }
}
function ContentImportComponent_Conditional_10_Case_2_Conditional_0_Conditional_1_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const error_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Line-no: ", error_r5.LineNumber, "");
  }
}
function ContentImportComponent_Conditional_10_Case_2_Conditional_0_Conditional_1_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const error_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Line-details: ", error_r5.LineDetail, "");
  }
}
function ContentImportComponent_Conditional_10_Case_2_Conditional_0_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ContentImportComponent_Conditional_10_Case_2_Conditional_0_Conditional_1_For_5_Conditional_3_Template, 3, 1, "div")(4, ContentImportComponent_Conditional_10_Case_2_Conditional_0_Conditional_1_For_5_Conditional_4_Template, 3, 1, "div")(5, ContentImportComponent_Conditional_10_Case_2_Conditional_0_Conditional_1_For_5_Conditional_5_Template, 3, 1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const error_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.errors[error_r5.ErrorCode]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](error_r5.ErrorDetail ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](error_r5.LineNumber ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](error_r5.LineDetail ? 5 : -1);
  }
}
function ContentImportComponent_Conditional_10_Case_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7)(1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](4, ContentImportComponent_Conditional_10_Case_2_Conditional_0_Conditional_1_For_5_Template, 6, 4, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Try to import file '", ctx_r2.formValues.file.name, "'");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r2.evaluationResult().Errors);
  }
}
function ContentImportComponent_Conditional_10_Case_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ContentImportComponent_Conditional_10_Case_2_Conditional_0_Conditional_0_Template, 25, 10, "div", 7)(1, ContentImportComponent_Conditional_10_Case_2_Conditional_0_Conditional_1_Template, 6, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-dialog-actions", 18)(3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContentImportComponent_Conditional_10_Case_2_Conditional_0_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContentImportComponent_Conditional_10_Case_2_Conditional_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.importContent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Import ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r2.evaluationResult().Success ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx_r2.evaluationResult().Success ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r2.evaluationResult().Success);
  }
}
function ContentImportComponent_Conditional_10_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ContentImportComponent_Conditional_10_Case_2_Conditional_0_Template, 7, 3);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r2.evaluationResult() ? 0 : -1);
  }
}
function ContentImportComponent_Conditional_10_Case_3_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Import done.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ContentImportComponent_Conditional_10_Case_3_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Import failed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ContentImportComponent_Conditional_10_Case_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ContentImportComponent_Conditional_10_Case_3_Conditional_0_Conditional_1_Template, 2, 0, "p")(2, ContentImportComponent_Conditional_10_Case_3_Conditional_0_Conditional_2_Template, 2, 0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r2.importResult().Success ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx_r2.importResult().Success ? 2 : -1);
  }
}
function ContentImportComponent_Conditional_10_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ContentImportComponent_Conditional_10_Case_3_Conditional_0_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-dialog-actions", 18)(2, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContentImportComponent_Conditional_10_Case_3_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r2.importResult() ? 0 : -1);
  }
}
function ContentImportComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ContentImportComponent_Conditional_10_Case_0_Template, 32, 4, "form")(1, ContentImportComponent_Conditional_10_Case_1_Template, 3, 0, "div", 7)(2, ContentImportComponent_Conditional_10_Case_2_Template, 1, 1)(3, ContentImportComponent_Conditional_10_Case_3_Template, 4, 1);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"]((tmp_1_0 = ctx_r2.viewStateSelected()) === 1 ? 0 : tmp_1_0 === 0 ? 1 : tmp_1_0 === 2 ? 2 : tmp_1_0 === 3 ? 3 : -1);
  }
}
class ContentImportComponent {
  constructor(dialogData, dialog, route) {
    this.dialogData = dialogData;
    this.dialog = dialog;
    this.route = route;
    this.hostClass = 'dialog-component';
    this.contentImportService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_content_import_service__WEBPACK_IMPORTED_MODULE_4__.ContentImportService);
    this.contentTypesService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_1__.ContentTypesService);
    this.dialogConfigSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_app_administration_services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_2__.DialogConfigAppService);
    this.viewStates = {
      waiting: 0,
      default: 1,
      evaluated: 2,
      imported: 3
    };
    this.contentType = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)(null);
    this.viewStateSelected = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)(this.viewStates.default);
    this.evaluationResult = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)(null);
    this.importResult = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)(null);
    this.errors = {
      0: 'Unknown error occured.',
      1: 'Selected content-type does not exist.',
      2: 'Document is not a valid XML file.',
      3: 'Selected content-type does not match the content-type in the XML file.',
      4: 'The language is not supported.',
      5: 'The document does not specify all languages for all entities.',
      6: 'Language reference cannot be parsed, the language is not supported.',
      7: 'Language reference cannot be parsed, the read-write protection is not supported.',
      8: 'Value cannot be read, because of it has an invalid format.'
    };
    this.contentTypeStaticName = this.route.snapshot.paramMap.get('contentTypeStaticName');
  }
  ngOnInit() {
    const contentTypeTemp = this.contentTypesService.retrieveContentType(this.contentTypeStaticName);
    const dialogSettings$ = this.dialogConfigSvc.getCurrent$();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)([contentTypeTemp, dialogSettings$]).subscribe(([contentType, dialogSettings]) => {
      this.contentType.set(contentType);
      this.formValues = {
        defaultLanguage: dialogSettings.Context.Language.Primary,
        contentType: this.contentTypeStaticName,
        file: this.dialogData.files != null ? this.dialogData.files[0] : null,
        resourcesReferences: 'Keep',
        clearEntities: 'None'
      };
    });
  }
  closeDialog() {
    this.dialog.close();
  }
  evaluateContent() {
    this.viewStateSelected.set(this.viewStates.waiting);
    this.contentImportService.evaluateContent(this.formValues).subscribe(result => {
      this.evaluationResult.set(result);
      this.viewStateSelected.set(this.viewStates.evaluated);
    });
  }
  importContent() {
    this.viewStateSelected.set(this.viewStates.waiting);
    this.contentImportService.importContent(this.formValues).subscribe(result => {
      this.importResult.set(result);
      this.viewStateSelected.set(this.viewStates.imported);
    });
  }
  back() {
    this.viewStateSelected.set(this.viewStates.default);
    this.evaluationResult.set(null);
  }
  fileChange(event) {
    this.formValues.file = event.target.files[0];
  }
  filesDropped(files) {
    const importFile = files[0];
    this.formValues.file = importFile;
  }
  static {
    this.ɵfac = function ContentImportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ContentImportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ContentImportComponent,
      selectors: [["app-content-import"]],
      hostVars: 1,
      hostBindings: function ContentImportComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
      decls: 11,
      vars: 3,
      consts: [["ngForm", "ngForm"], ["fileInput", ""], ["appDragAndDrop", "", 1, "eav-dialog", 3, "filesDropped", "allowedFileTypes"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], [1, "eav-dialog-description"], ["href", "https://2sxc.org/help", "target", "_blank"], [1, "eav-dialog-content"], ["mat-raised-button", "", "tippy", "Open file browser", 3, "click"], ["type", "file", 1, "hide", 3, "change"], [1, "eav-radio-group-label"], ["name", "ResourcesReferences", 1, "eav-radio-group", 3, "ngModelChange", "ngModel"], ["value", "Keep"], ["value", "Resolve"], ["name", "ClearEntities", 1, "eav-radio-group", 3, "ngModelChange", "ngModel"], ["value", "None"], ["value", "All"], [1, "eav-hint"], ["align", "end"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click", "disabled"], [1, "eav-evaluation__title"], [1, "eav-evaluation__content"], ["mat-raised-button", "", "color", "accent", 3, "click"]],
      template: function ContentImportComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("filesDropped", function ContentImportComponent_Template_div_filesDropped_0_listener($event) {
            return ctx.filesDropped($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 3)(2, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 5)(5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " This will import content-items into 2sxc. It requires that you already defined the content-type before you try importing, and that you created the import-file using the template provided by the Export. Please visit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "https://2sxc.org/help");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " for more instructions. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ContentImportComponent_Conditional_10_Template, 4, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("allowedFileTypes", "xml");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", (tmp_1_0 = ctx.contentType()) == null ? null : tmp_1_0.Name, " Import Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.formValues != null ? 10 : -1);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogActions, _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_3__.DragAndDropDirective],
      styles: [".eav-radio-group-label[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 24px 0 0;\n}\n\n.eav-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 8px 0;\n}\n\n.eav-hint[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-top: 24px;\n  margin-bottom: 16px;\n}\n\n.eav-evaluation__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 24px 0 0;\n  font-weight: bold;\n}\n.eav-evaluation__content[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.eav-evaluation__content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 2px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQtaW1wb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtBQURKO0FBR0k7RUFDRSxjQUFBO0FBRE4iLCJmaWxlIjoiY29udGVudC1pbXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWF2LXJhZGlvLWdyb3VwLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luOiAyNHB4IDAgMDtcclxufVxyXG5cclxuLmVhdi1yYWRpby1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbi5lYXYtaGludCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLmVhdi1ldmFsdWF0aW9uIHtcclxuICAmX190aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDI0cHggMCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAmX19jb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NvbnRlbnQtaW1wb3J0L2NvbnRlbnQtaW1wb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtBQURKO0FBR0k7RUFDRSxjQUFBO0FBRE47QUFDQSw0cENBQTRwQyIsInNvdXJjZXNDb250ZW50IjpbIi5lYXYtcmFkaW8tZ3JvdXAtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW46IDI0cHggMCAwO1xyXG59XHJcblxyXG4uZWF2LXJhZGlvLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxuLmVhdi1oaW50IHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uZWF2LWV2YWx1YXRpb24ge1xyXG4gICZfX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMjRweCAwIDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgcGFkZGluZzogMnB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 34575:
/*!******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/directives/drag-and-drop.directive.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragAndDropDirective: () => (/* binding */ DragAndDropDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 18537);
/* harmony import */ var _base_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.directive */ 3140);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);






class DragAndDropDirective extends _base_directive__WEBPACK_IMPORTED_MODULE_0__.BaseDirective {
  constructor(elementRef, zone, snackBar) {
    super();
    this.zone = zone;
    this.snackBar = snackBar;
    this.markStyle = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)('outline');
    /** Comma separated file types, e.g. 'txt,doc,docx' */
    this.allowedFileTypes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)('');
    this.filesDropped = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.output)();
    this.dropAreaClass = 'eav-droparea';
    this.markStyleClass = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('');
    this.dragClass = 'eav-dragover';
    this.timeouts = [];
    this.element = elementRef.nativeElement;
  }
  ngOnInit() {
    this.markStyleClass.set(`eav-droparea-${this.markStyle()}`);
    this.element.classList.add(this.dropAreaClass, this.markStyleClass());
    this.zone.runOutsideAngular(() => {
      this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.element, 'dragover').subscribe(event => {
        event.preventDefault();
        event.stopPropagation();
        this.clearTimeouts();
        this.element.classList.add(this.dragClass);
      }));
      this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.element, 'dragleave').subscribe(event => {
        event.preventDefault();
        event.stopPropagation();
        this.timeouts.push(window.setTimeout(() => {
          this.element.classList.remove(this.dragClass);
        }, 50));
      }));
    });
  }
  ngOnDestroy() {
    this.clearTimeouts();
    this.element.classList.remove(this.dropAreaClass, this.markStyleClass(), this.dragClass);
    super.ngOnDestroy();
  }
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.clearTimeouts();
    this.element.classList.remove(this.dragClass);
    const fileList = event.dataTransfer.files;
    let files = Array.from(fileList);
    files = this.filterTypes(files, this.allowedFileTypes());
    if (files.length > 0) {
      this.filesDropped.emit(files);
    }
  }
  clearTimeouts() {
    for (const timeout of this.timeouts) {
      clearTimeout(timeout);
    }
    this.timeouts = [];
  }
  filterTypes(files, allowedFileTypes) {
    if (allowedFileTypes === '') {
      return files;
    }
    const allowedTypes = allowedFileTypes.split(',').map(type => type.toLocaleLowerCase());
    const filtered = files.filter(file => {
      const extIndex = file.name.lastIndexOf('.');
      if (extIndex <= 0) {
        return false;
      }
      const ext = file.name.substring(extIndex + 1).toLocaleLowerCase();
      const allowed = allowedTypes.includes(ext);
      return allowed;
    });
    if (files.length !== filtered.length) {
      const allowedTypesString = this.allowedFileTypes().replace(/\,/g, ', ');
      const message = filtered.length ? 'Some files were filtered out. This drop location only accepts file types: ' + allowedTypesString : 'This drop location only accepts file types: ' + allowedTypesString;
      this.snackBar.open(message, null, {
        duration: 5000
      });
    }
    return filtered;
  }
  static {
    this.ɵfac = function DragAndDropDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DragAndDropDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: DragAndDropDirective,
      selectors: [["", "appDragAndDrop", ""]],
      hostBindings: function DragAndDropDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("drop", function DragAndDropDirective_drop_HostBindingHandler($event) {
            return ctx.onDrop($event);
          });
        }
      },
      inputs: {
        markStyle: [1, "markStyle"],
        allowedFileTypes: [1, "allowedFileTypes"]
      },
      outputs: {
        filesDropped: "filesDropped"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
  }
}

/***/ }),

/***/ 41944:
/*!***********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-import/services/content-import.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentImportService: () => (/* binding */ ContentImportService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 95429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/helpers/file-to-base64.helper */ 70693);
/* harmony import */ var _shared_services_entity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/entity.service */ 9234);
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);





class ContentImportService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_2__.HttpServiceBase {
  evaluateContent(formValues) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)((0,_shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_0__.toBase64)(formValues.file)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(fileBase64 => {
      const requestData = {
        AppId: this.appId,
        DefaultLanguage: formValues.defaultLanguage,
        ContentType: formValues.contentType,
        ContentBase64: fileBase64,
        ResourcesReferences: formValues.resourcesReferences,
        ClearEntities: formValues.clearEntities
      };
      return this.http.post(this.apiUrl(_shared_services_entity_service__WEBPACK_IMPORTED_MODULE_1__.webApiEntityRoot + 'XmlPreview'), requestData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(result => {
        if (!result.Success) {
          result.Errors = result.Detail;
          delete result.Detail;
        }
        return result;
      }));
    }));
  }
  importContent(formValues) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)((0,_shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_0__.toBase64)(formValues.file)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(fileBase64 => {
      const requestData = {
        AppId: this.appId,
        DefaultLanguage: formValues.defaultLanguage,
        ContentType: formValues.contentType,
        ContentBase64: fileBase64,
        ResourcesReferences: formValues.resourcesReferences,
        ClearEntities: formValues.clearEntities
      };
      return this.http.post(this.apiUrl(_shared_services_entity_service__WEBPACK_IMPORTED_MODULE_1__.webApiEntityRoot + 'XmlUpload'), requestData);
    }));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵContentImportService_BaseFactory;
      return function ContentImportService_Factory(__ngFactoryType__) {
        return (ɵContentImportService_BaseFactory || (ɵContentImportService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](ContentImportService)))(__ngFactoryType__ || ContentImportService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: ContentImportService,
      factory: ContentImportService.ɵfac
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

/***/ }),

/***/ 70693:
/*!*************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/helpers/file-to-base64.helper.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toBase64: () => (/* binding */ toBase64),
/* harmony export */   toString: () => (/* binding */ toString)
/* harmony export */ });
function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result.split(',')[1]);
    };
    reader.onerror = error => {
      reject(error);
    };
  });
}
function toString(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = error => {
      reject(error);
    };
  });
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_content-import_content-import_component_ts.js.map