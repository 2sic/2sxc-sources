"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["main"],{

/***/ 88692:
/*!********************************!*\
  !*** ./projects/core/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convert: () => (/* reexport safe */ _object_utilities__WEBPACK_IMPORTED_MODULE_1__.convert),
/* harmony export */   getWith: () => (/* reexport safe */ _object_utilities__WEBPACK_IMPORTED_MODULE_1__.getWith),
/* harmony export */   transient: () => (/* reexport safe */ _transient__WEBPACK_IMPORTED_MODULE_0__.transient)
/* harmony export */ });
/* harmony import */ var _transient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transient */ 12938);
/* harmony import */ var _object_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object-utilities */ 13620);
/* harmony import */ var _type_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-utilities */ 74379);




/***/ }),

/***/ 13620:
/*!*******************************************!*\
  !*** ./projects/core/object-utilities.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convert: () => (/* binding */ convert),
/* harmony export */   getWith: () => (/* binding */ getWith)
/* harmony export */ });
/**
 * Conversion function to change something to something else, a bit like 'map' but for a single item.
 *
 * Typically used in short return statements.
 *
 * Internally it's the same as the `getWith` function, but has a different name to indicate the usage.
 */
function convert(obj, fn) {
  return fn(obj);
}
/**
 * Function to do something with an object and return the result.
 *
 * Typically used in short return statements.
 *
 * Internally it's the same as the `convert` function, but has a different name to indicate the usage.
 */
function getWith(obj, fn) {
  return fn(obj);
}

/***/ }),

/***/ 12938:
/*!************************************!*\
  !*** ./projects/core/transient.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transient: () => (/* binding */ transient)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

/**
 * Transient dependency injection provider.
 * This will create a new instance of the provided token,
 * without making it available in sub-components
 * as would happen with providers in a component.
 *
 * @param token the class which is injectable
 * @param injector the injector to use, if not provided, the current injector will be used.
 *     Not not necessary when using transient in the class properties construction or in the constructor,
 *     as the injector will be available in the constructor.
 *     But necessary when using transient inside anything else.
 * @returns
 */
function transient(token, injector) {
  // make sure we have an injector
  // this will throw an error, if transient is used outside of construction and without providing an injector
  injector ??= (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
  // create a new injector which is only meant to be used for this transient instance
  const subInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.create({
    providers: [token],
    parent: injector
  });
  // return the instance
  return subInjector.get(token, undefined, {
    self: true
  });
}

/***/ }),

/***/ 74379:
/*!*****************************************!*\
  !*** ./projects/core/type-utilities.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 64699:
/*!******************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/services/dialog-config-app.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogConfigAppService: () => (/* binding */ DialogConfigAppService)
/* harmony export */ });
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _dialog_config_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-config-global.service */ 61479);
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/logging */ 34435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);






/**
 * Context aware dialog configuration service.
 *
 * It uses the shared service so the settings are cached when re-requested by anything else.
 */
class DialogConfigAppService {
  constructor(contextSvcShared, context) {
    this.contextSvcShared = contextSvcShared;
    this.context = context;
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_2__.classLog)({
      DialogConfigAppService
    });
  }
  getCurrent$() {
    const appId = this.context.appId;
    this.log.a(`getCurrent\$ - appId:${appId}`);
    return this.contextSvcShared.getShared$(appId);
  }
  static {
    this.ɵfac = function DialogConfigAppService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DialogConfigAppService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_dialog_config_global_service__WEBPACK_IMPORTED_MODULE_1__.DialogConfigGlobalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_0__.Context));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: DialogConfigAppService,
      factory: DialogConfigAppService.ɵfac
    });
  }
}

/***/ }),

/***/ 61479:
/*!*********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/services/dialog-config-global.service.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogConfigGlobalService: () => (/* binding */ DialogConfigGlobalService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 86301);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/logging */ 34435);
/* harmony import */ var _shared_services_global_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/global-config.service */ 39431);
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);






const webApiSettings = 'admin/dialog/settings';
/**
 * Service for getting dialog settings for the current app.
 *
 * Note that it should normally be shared, to save resources / network calls.
 */
class DialogConfigGlobalService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_2__.HttpServiceBase {
  constructor(globalConfigService) {
    super();
    this.globalConfigService = globalConfigService;
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_0__.classLog)({
      DialogConfigGlobalService
    });
    this.dialogSettings$ = {};
    this.log.a(`using context #${this.context.log.svcId}`);
  }
  getShared$(appId) {
    this.log.a('getShared$ appId: ' + appId);
    this.dialogSettings$[appId] ??= this.getDialogSettings(appId, 'getShared$').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.shareReplay)({
      refCount: false
    }));
    return this.dialogSettings$[appId];
  }
  getDialogSettings(appId, reqBy) {
    this.log.a('getDialogSettings', {
      appId,
      reqBy
    });
    return this.getHttp(webApiSettings, {
      params: {
        appId: appId ?? this.appId
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(dlgSettings => {
      dlgSettings.Context.Language.List = dlgSettings.Context.Language.List.filter(language => language.IsEnabled);
      return dlgSettings;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(dlgSettings => {
      this.globalConfigService.allowDebug(dlgSettings.Context.Enable.DebugMode);
    }));
  }
  static {
    this.ɵfac = function DialogConfigGlobalService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DialogConfigGlobalService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_shared_services_global_config_service__WEBPACK_IMPORTED_MODULE_1__.GlobalConfigService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: DialogConfigGlobalService,
      factory: DialogConfigGlobalService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 41397:
/*!**************************************************!*\
  !*** ./projects/eav-ui/src/app/app.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 81955);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core */ 88692);
/* harmony import */ var _shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/constants/session.constants */ 38172);
/* harmony import */ var _shared_icons_app_icons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/icons/app-icons.service */ 72661);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);













class AppComponent extends _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__.SxcAppComponent {
  #subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
  #titleSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.Title);
  #appIconsSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_icons_app_icons_service__WEBPACK_IMPORTED_MODULE_2__.AppIconsService);
  constructor(el, dnnContext, context, router, activatedRoute) {
    super(el, dnnContext.preConfigure({
      moduleId: parseInt(sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyModuleId) || '-1234', 10),
      contentBlockId: parseInt(sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyContentBlockId) || '-1234', 10)
    }));
    this.context = context;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.context.initRoot();
    this.#appIconsSvc.load();
  }
  ngOnInit() {
    // Mostly copied from https://blog.bitsrc.io/dynamic-page-titles-in-angular-98ce20b5c334
    // Routes need a data: { title: '...' } for this to work
    const appTitle = this.#titleSvc.getTitle(); // initial title when loading the page
    this.#subscriptions.add(this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(() => {
      let child = this.activatedRoute.firstChild;
      while (child?.firstChild) child = child.firstChild;
      return child?.snapshot.data['title'] ?? appTitle;
    })).subscribe(title => this.#titleSvc.setTitle(title)));
  }
  ngOnDestroy() {
    this.#subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_3__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 34306:
/*!***********************************************!*\
  !*** ./projects/eav-ui/src/app/app.config.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 81955);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 43835);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 21906);
/* harmony import */ var _features_features_scoped_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/features-scoped.service */ 74824);
/* harmony import */ var _params_init_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./params-init.factory */ 54392);
/* harmony import */ var _shared_interceptors_handle_errors_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/interceptors/handle-errors.interceptor */ 85837);
/* harmony import */ var _shared_interceptors_set_headers_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/interceptors/set-headers.interceptor */ 41248);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/context */ 68873);
/* harmony import */ var _shared_translation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/translation */ 86021);
/* harmony import */ var _shared_translation_translate_loader_factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/translation/translate-loader-factory */ 97632);

















const appConfig = {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_8__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.routes), (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.importProvidersFrom)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule.forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule.forChild((0,_shared_translation__WEBPACK_IMPORTED_MODULE_6__.buildTranslateConfiguration)(_shared_translation_translate_loader_factory__WEBPACK_IMPORTED_MODULE_7__.translateLoaderFactory))), _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_14__.SxcHttpInterceptorProvider, _shared_services_context__WEBPACK_IMPORTED_MODULE_5__.Context,
  // The feature service must be provided in root at first, so it's always there
  // But certain dialogs will want to use their own.
  _features_features_scoped_service__WEBPACK_IMPORTED_MODULE_1__.FeaturesScopedService, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__.APP_INITIALIZER,
    useFactory: _params_init_factory__WEBPACK_IMPORTED_MODULE_2__.paramsInitFactory,
    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injector],
    multi: true
  }, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_15__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_15__.HashLocationStrategy
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
    useClass: _shared_interceptors_set_headers_interceptor__WEBPACK_IMPORTED_MODULE_4__.SetHeadersInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
    useClass: _shared_interceptors_handle_errors_interceptor__WEBPACK_IMPORTED_MODULE_3__.HandleErrorsInterceptor,
    multi: true
  }, {
    provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: {
      subscriptSizing: 'dynamic'
    }
  }]
};

/***/ }),

/***/ 21906:
/*!***********************************************!*\
  !*** ./projects/eav-ui/src/app/app.routes.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _edit_edit_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit/edit.routing */ 90390);

// WIP EXPERIMENTAL 2DM v18.03
// const zoneOnly = ':zoneId';
// const zoneFull = `:zoneId/v2/:moduleId/:blockId`;
const zoneApp = `:zoneId/:appId`;
const full = `:zoneId/v2/:moduleId/:blockId/:appId`;
const routes = [
// {
//   path: `${zoneOnly}/apps`,
//   loadChildren: () => import('./apps-management/apps-management.routing').then(m => m.appsManagementRoutes),
//   data: { title: 'Apps' },
// },
// {
//   path: `${zoneFull}/apps`,
//   loadChildren: () => import('./apps-management/apps-management.routing').then(m => m.appsManagementRoutes),
//   data: { title: 'Apps' },
// },
{
  path: `${full}/apps`,
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_dialog_mjs"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_apps-management_apps-management_routing_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./apps-management/apps-management.routing */ 49772)).then(m => m.appsManagementRoutes),
  data: {
    title: 'Apps'
  }
},
// {
//   path: `${zoneOnly}/import`,
//   loadChildren: () => import('./import-app/import-app.routing').then(m => m.importRoutes),
//   data: { title: 'Import App' },
// },
// {
//   path: `${zoneFull}/import`,
//   loadChildren: () => import('./import-app/import-app.routing').then(m => m.importRoutes),
//   data: { title: 'Import App' },
// },
{
  path: `${full}/import`,
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_dialog_mjs"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./import-app/import-app.routing */ 59532)).then(m => m.importRoutes),
  data: {
    title: 'Import App'
  }
},
// OLD - probably still in use...
{
  path: `${zoneApp}/app`,
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_base_component_ts-projects_eav-ui_src_app_s-dc0343"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_radio_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_select_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_ag-grid_column-definitions_ts-projects_eav-ui_src_app_-3cb379"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_app-administration_services_index_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_features_shared_base-feature_component_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_fields_content-types-fields_service_ts-projects_eav-ui-cff1aa"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_services_service-base_ts-node_modules_angular_material-ffa7b3"), __webpack_require__.e("default-projects_eav-ui_src_app_permissions_permissions_component_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_features_feature-icon_feature-icon_component_ts-projects_eav--06ee1b"), __webpack_require__.e("default-projects_eav-ui_src_app_dev-rest_index_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_app-administration_app-administration_routing_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./app-administration/app-administration.routing */ 60366)).then(m => m.appAdministrationRoutes),
  data: {
    title: 'App'
  }
},
// New
{
  path: `${full}/app`,
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_base_component_ts-projects_eav-ui_src_app_s-dc0343"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_radio_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_select_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_ag-grid_column-definitions_ts-projects_eav-ui_src_app_-3cb379"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_app-administration_services_index_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_features_shared_base-feature_component_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_fields_content-types-fields_service_ts-projects_eav-ui-cff1aa"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_services_service-base_ts-node_modules_angular_material-ffa7b3"), __webpack_require__.e("default-projects_eav-ui_src_app_permissions_permissions_component_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_features_feature-icon_feature-icon_component_ts-projects_eav--06ee1b"), __webpack_require__.e("default-projects_eav-ui_src_app_dev-rest_index_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_app-administration_app-administration_routing_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./app-administration/app-administration.routing */ 60366)).then(m => m.appAdministrationRoutes),
  data: {
    title: 'App'
  }
}, {
  path: `${full}/code`,
  loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_code-editor_code-editor_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./code-editor/code-editor.routing */ 25316)).then(m => m.codeEditorRoutes),
  data: {
    title: 'Code Editor'
  }
},
// { // Old
//   path: `${zoneApp}/code`,
//   loadChildren: () => import('./code-editor/code-editor.routing').then(m => m.codeEditorRoutes),
//   data: { title: 'Code Editor' },
// },
{
  path: `${full}/query/:pipelineId`,
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_radio_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_select_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_ag-grid_column-definitions_ts-projects_eav-ui_src_app_-3cb379"), __webpack_require__.e("default-projects_eav-ui_src_app_permissions_permissions_component_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_dev-rest_index_ts"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_shared_services_entity_service_ts-projects_eav-ui_src_app_shared_serv-61805e")]).then(__webpack_require__.bind(__webpack_require__, /*! ./visual-query/visual-query.routing */ 95932)).then(m => m.visualQueryRoutes),
  data: {
    title: 'Visual Query'
  }
},
// { // Old
//   path: `${zoneApp}/query/:pipelineId`,
//   loadChildren: () => import('./visual-query/visual-query.routing').then(m => m.visualQueryRoutes),
//   data: { title: 'Visual Query' },
// },
{
  path: `${full}/:guid/:part/:index/replace`,
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_dialog_mjs"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./replace-content/replace-content.routing */ 97440)).then(m => m.replaceContentRoutes),
  data: {
    title: 'Apps'
  }
},
// { // Old
//   path: `${zoneApp}/:guid/:part/:index/replace`,
//   loadChildren: () => import('./replace-content/replace-content.routing').then(m => m.replaceContentRoutes),
//   data: { title: 'Apps' },
// },
{
  path: `${full}/:guid/:part/:index/reorder`,
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_dialog_mjs"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_manage-content-list_manage-content-list_routing_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./manage-content-list/manage-content-list.routing */ 25284)).then(m => m.manageContentRoutes),
  data: {
    title: 'Reorder Items'
  }
},
// { // Old
//   path: `${zoneApp}/:guid/:part/:index/reorder`,
//   loadChildren: () => import('./manage-content-list/manage-content-list.routing').then(m => m.manageContentRoutes),
//   data: { title: 'Reorder Items' },
// },
{
  path: `${full}/items/:contentTypeStaticName`,
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_dialog_mjs"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_metadata_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./content-items/content-items.routing */ 30200)).then(m => m.contentItemsRoutes),
  data: {
    title: 'Items'
  }
},
// { // Old
//   path: `${zoneApp}/items/:contentTypeStaticName`,
//   loadChildren: () => import('./content-items/content-items.routing').then(m => m.contentItemsRoutes),
//   data: { title: 'Items' },
// },
{
  path: `${full}/fields/:contentTypeStaticName`,
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_dialog_mjs"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_metadata_index_ts-projects_eav-ui_src_app_permissions_go-to-permissions_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./content-type-fields/content-type-fields.routing */ 6708)).then(m => m.contentTypeFieldsRoutes),
  data: {
    title: 'Fields'
  }
},
// { // Old
//   path: `${zoneApp}/fields/:contentTypeStaticName`,
//   loadChildren: () => import('./content-type-fields/content-type-fields.routing').then(m => m.contentTypeFieldsRoutes),
//   data: { title: 'Fields' },
// },
{
  path: `${full}/versions/:itemId`,
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_dialog_mjs"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./item-history/item-history.routing */ 65022)).then(m => m.historyRoutes)
},
// { // Old
//   path: `${zoneApp}/versions/:itemId`,
//   loadChildren: () => import('./item-history/item-history.routing').then(m => m.historyRoutes),
// },
..._edit_edit_routing__WEBPACK_IMPORTED_MODULE_0__.EditRoutesRoot];

/***/ }),

/***/ 59587:
/*!************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/edit-dialog.config.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editDialog: () => (/* binding */ editDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

/**
 * Contains size definition and component reference for the edit dialog.
 */
const editDialog = {
  name: 'ITEMS_EDIT_DIALOG',
  initContext: true,
  panelSize: 'custom',
  panelClass: ['c-multi-item-dialog'],
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        EditEntryComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_base_component_ts-projects_eav-ui_src_app_s-dc0343"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_radio_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_select_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_features_shared_base-feature_component_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_services_service-base_ts-node_modules_angular_material-ffa7b3"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_slide-toggle_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_features_feature-icon_feature-icon_component_ts-projects_eav--06ee1b"), __webpack_require__.e("default-projects_eav-ui_src_app_edit_form_form-config_service_ts-projects_eav-ui_src_app_edit-b26668"), __webpack_require__.e("default-projects_eav-ui_src_app_create-file-dialog_create-file-dialog_component_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_directives_mousedown-stop-propagation_directive_ts-pro-96cd25"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_edit_dialog_main_keyboard-shortcuts_ts-projects_eav-ui_src_ap-c09d87"), __webpack_require__.e("default-projects_eav-ui_src_app_features_feature-icon-text_feature-icon-text_component_ts-pro-6e06e2"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_edit_dialog_entry_edit-entry_component_ts-projects_eav-ui_src_app_sha-ddd80a")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dialog/entry/edit-entry.component */ 68032));
      return EditEntryComponent;
    })();
  }
};

/***/ }),

/***/ 90390:
/*!******************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/edit.routing.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditRoutes: () => (/* binding */ EditRoutes),
/* harmony export */   EditRoutesNoHistory: () => (/* binding */ EditRoutesNoHistory),
/* harmony export */   EditRoutesRoot: () => (/* binding */ EditRoutesRoot),
/* harmony export */   EditRoutesUnderAppsList: () => (/* binding */ EditRoutesUnderAppsList)
/* harmony export */ });
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/logging */ 34435);
/* harmony import */ var _edit_dialog_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-dialog.config */ 59587);
/* harmony import */ var _routing_edit_route_matchers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routing/edit-route-matchers */ 43821);



const log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_0__.classLog)('Routes');
/**
 * Routes which open an empty component which then reloads the entity to ensure a full refresh.
 * This is used on the history dialog, to ensure the restored data is fully reloaded.
 */
const reloadRoutes = [{
  path: '',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_dialog_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_edit_form_form-config_service_ts-projects_eav-ui_src_app_edit-b26668"), __webpack_require__.e("projects_eav-ui_src_app_edit_routing_edit-reload_component_ts-projects_eav-ui_src_app_shared_-7519af")]).then(__webpack_require__.bind(__webpack_require__, /*! ./routing/edit-reload.component */ 2770)).then(m => m.EditReloadComponent),
  data: {
    title: 'Reloading Edit Dialog'
  }
}];
/**
 * The main routes for the Edit Dialog.
 * It must always be attached to a /edit/:items route.
 * It will
 * 1. load the EntryComponent
 * 2. watch routes for sub-items.
 * 3. enable the history mechanism.
 */
const editRoutesDialogAndChildren = [{
  path: '',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_dialog_mjs"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ../shared/components/dialog-entry/dialog-entry.component */ 85544)).then(m => m.DialogEntryComponent),
  data: {
    dialog: _edit_dialog_config__WEBPACK_IMPORTED_MODULE_1__.editDialog
  },
  loadChildren: () => [...EditRoutes, {
    path: 'versions/:itemId',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_dialog_mjs"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ../item-history/item-history.routing */ 65022)).then(m => m.historyRoutes)
  }]
}];
/**
 * Routes for the Edit Dialog.
 * It will handle /edit/:items routes and also /edit/refresh/ routes.
 */
const EditRoutes = [{
  matcher: _routing_edit_route_matchers__WEBPACK_IMPORTED_MODULE_2__.matchEditSub,
  loadChildren: () => {
    // Recursively use these routes again.
    log.a('loadChildren - matcher: sub-edit');
    return editRoutesDialogAndChildren;
  }
}, {
  matcher: _routing_edit_route_matchers__WEBPACK_IMPORTED_MODULE_2__.matchEditSubRefresh,
  children: reloadRoutes
}];
/**
 * In some cases the history could cause trouble, eg. in VisualQuery, where there are many hidden fields which
 * build the query, and if someone goes back in time thinking they are just changing the labels, the query would break.
 *
 * So this is a route without the history-restore/refresh mechanism.
 */
const EditRoutesNoHistory = [{
  matcher: _routing_edit_route_matchers__WEBPACK_IMPORTED_MODULE_2__.matchEditSub,
  loadChildren: () => editRoutesDialogAndChildren,
  data: {
    history: false
  } // disable history in the edit dialog
}];
/**
 * Root routes only meant for the entry points of the application, "App" and "Apps"
 */
const EditRoutesRoot = [
// { // Old
//   matcher: matchEditRoot,
//   loadChildren: () => editRoutesDialogAndChildren,
// },
{
  matcher: _routing_edit_route_matchers__WEBPACK_IMPORTED_MODULE_2__.matchEditRootV2,
  loadChildren: () => editRoutesDialogAndChildren
},
// { // Old
//   matcher: matchEditRootRefresh,
//   children: reloadRoutes,
// },
{
  matcher: _routing_edit_route_matchers__WEBPACK_IMPORTED_MODULE_2__.matchEditRootRefreshV2,
  children: reloadRoutes
}];
/**
 * Root routes only meant for the entry points of the application, "App" and "Apps"
 */
const EditRoutesUnderAppsList = [{
  matcher: _routing_edit_route_matchers__WEBPACK_IMPORTED_MODULE_2__.matchEditRoot,
  loadChildren: () => editRoutesDialogAndChildren
},
// { // New
//   matcher: matchEditRootV2,
//   loadChildren: () => editRoutesDialogAndChildren,
// },
{
  matcher: _routing_edit_route_matchers__WEBPACK_IMPORTED_MODULE_2__.matchEditRootRefresh,
  children: reloadRoutes
}
// { // New
//   matcher: matchEditRootRefreshV2,
//   children: reloadRoutes,
// },
];

/***/ }),

/***/ 43821:
/*!*********************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/routing/edit-route-matchers.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   matchEditRoot: () => (/* binding */ matchEditRoot),
/* harmony export */   matchEditRootRefresh: () => (/* binding */ matchEditRootRefresh),
/* harmony export */   matchEditRootRefreshV2: () => (/* binding */ matchEditRootRefreshV2),
/* harmony export */   matchEditRootV2: () => (/* binding */ matchEditRootV2),
/* harmony export */   matchEditSub: () => (/* binding */ matchEditSub),
/* harmony export */   matchEditSubRefresh: () => (/* binding */ matchEditSubRefresh)
/* harmony export */ });
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/logging */ 34435);

const logSpecs = {
  all: true,
  hasGuidAndId: false,
  editRouteMatcherRoot: false,
  editRouteMatcherRootRefresh: false,
  editRouteMatcherSubEdit: false,
  editRouteMatcherSubEditRefresh: false
};
const logger = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_0__.classLog)('EditRouteMatchers', logSpecs);
/**
 * Matches:
 * - ':zoneId/:appId/edit/:items'
 * - ':zoneId/:appId/edit/:items/details/:detailsEntityGuid/:detailsFieldId'
 * - ':zoneId/:appId/edit/:items/update/:updateEntityGuid/:updateFieldId'
 */
function matchEditRoot(url) {
  return editRouteMatcherRoot(url, 2, 4, 1);
  // const l = logger.fnIf('editRouteMatcherRoot', { url });
  // const specs = checkRelevantAndIds(url, 2, 4);
  // if (specs == null) return l.rNull();
  // const match: UrlMatchResult = {
  //   consumed: url.slice(0, specs.hasPurpose ? 7 : 4),
  //   posParams: {
  //     zoneId: url[0],
  //     appId: url[1],
  //     items: url[3],
  //     ...specs.identities,
  //   } satisfies EditUrlParams<UrlSegment>,
  // };
  // return l.r(match, '✅');
}
/**
 * Matches:
 * - ':zoneId/v2/:mid/:cbid/:appId/edit/:items'
 * - ':zoneId/v2/:mid/:cbid/:appId/edit/:items/details/:detailsEntityGuid/:detailsFieldId'
 * - ':zoneId/v2/:mid/:cbid/:appId/edit/:items/update/:updateEntityGuid/:updateFieldId'
 */
function matchEditRootV2(url) {
  return editRouteMatcherRoot(url, 5, 7, 4);
  // const l = logger.fnIf('editRouteMatcherRoot', { url });
  // const specs = checkRelevantAndIds(url, 5, 7);
  // if (specs == null) return l.rNull();
  // // debugger;
  // const match: UrlMatchResult = {
  //   consumed: url.slice(0, specs.hasPurpose ? 10 : 7),
  //   posParams: {
  //     zoneId: url[0],
  //     appId: url[4],
  //     items: url[6],
  //     ...specs.identities,
  //   } satisfies EditUrlParams<UrlSegment>,
  // };
  // return l.r(match, '✅');
}
function editRouteMatcherRoot(url, posEdit, posPurpose, posAppId) {
  const l = logger.fnIf('editRouteMatcherRoot', {
    url
  });
  const specs = checkRelevantAndIds(url, posEdit, posPurpose);
  if (specs == null) return l.rNull();
  const match = {
    consumed: url.slice(0, posPurpose + (specs.hasPurpose ? 3 : 0)),
    posParams: {
      zoneId: url[0],
      appId: url[posAppId],
      items: url[posAppId + 2],
      ...specs.identities
    }
  };
  return l.r(match, '✅');
}
/**
 * Matches:
 * - 'edit/:items'
 * - 'edit/:items/details/:detailsEntityGuid/:detailsFieldId'
 * - 'edit/:items/update/:updateEntityGuid/:updateFieldId'
 */
function matchEditSub(url) {
  const l = logger.fnIf('editRouteMatcherSubEdit', {
    url
  });
  const specs = checkRelevantAndIds(url, 0, 2);
  if (specs == null) return l.rNull();
  const match = {
    consumed: url.slice(0, specs.hasPurpose ? 5 : 2),
    posParams: {
      items: url[1],
      ...specs.identities
    }
  };
  return l.r(match, '✅');
}
/**
 * Determine if we're in an edit route, and if we have details/update data.
 * If we have it, the returned spread is a bit different for each use case as the parameter names differ.
 */
function checkRelevantAndIds(url, posEdit, posPurpose) {
  const l = logger.fnIf('hasGuidAndId', {
    url,
    posPurpose
  });
  if (url.length < posPurpose) return l.rNull();
  if (url[posEdit].path !== 'edit') return l.rNull();
  const purpose = url[posPurpose]?.path;
  if (purpose == null) return l.r({
    hasPurpose: false,
    identities: {}
  });
  const guid = url[posPurpose + 1];
  const id = url[posPurpose + 2];
  const hasGuidAndId = guid != null && id != null;
  const hasDetails = purpose === 'details' && hasGuidAndId;
  const hasUpdate = purpose === 'update' && hasGuidAndId;
  const identities = {
    ...(hasDetails && {
      detailsEntityGuid: guid,
      detailsFieldId: id
    }),
    ...(hasUpdate && {
      updateEntityGuid: guid,
      updateFieldId: id
    })
  };
  return l.r({
    hasPurpose: hasDetails || hasUpdate,
    identities
  });
}
/**
 * Matches 'edit/refresh/:items'
 */
function matchEditSubRefresh(url) {
  const l = logger.fnIf('editRouteMatcherSubEditRefresh', {
    url
  });
  if (url.length < 3) return l.rNull();
  if (url[0].path !== 'edit' || url[1].path !== 'refresh') return l.rNull();
  const match = {
    consumed: url.slice(0, 3),
    posParams: {
      items: url[2]
    }
  };
  return l.r(match, '✅');
}
/**
 * Matches ':zoneId/:appId/edit/refresh/:items'
 */
function matchEditRootRefresh(url) {
  return editRouteMatcherRootRefresh(url, 5, 2, 1);
  // const l = logger.fnIf('editRouteMatcherRootRefresh', { url });
  // if (url.length < 5) return l.rNull();
  // if (url[2].path !== 'edit' || url[3].path !== 'refresh') return l.rNull();
  // const match: UrlMatchResult = {
  //   consumed: url.slice(0, 5),
  //   posParams: {
  //     zoneId: url[0],
  //     appId: url[1],
  //     items: url[4],
  //   } satisfies EditUrlParams<UrlSegment>,
  // };
  // return l.r(match, '✅');
}
/**
 * Matches ':zoneId/v2/:mid/:cbid/:appId/edit/refresh/:items'
 */
function matchEditRootRefreshV2(url) {
  return editRouteMatcherRootRefresh(url, 8, 5, 4);
  // const l = logger.fnIf('editRouteMatcherRootRefresh', { url });
  // if (url.length < 8) return l.rNull();
  // if (url[5].path !== 'edit' || url[6].path !== 'refresh') return l.rNull();
  // const match: UrlMatchResult = {
  //   consumed: url.slice(0, 8),
  //   posParams: {
  //     zoneId: url[0],
  //     appId: url[4],
  //     items: url[7],
  //   } satisfies EditUrlParams<UrlSegment>,
  // };
  // return l.r(match, '✅');
}
function editRouteMatcherRootRefresh(url, segments, posEdit, posAppId) {
  const l = logger.fnIf('editRouteMatcherRootRefresh', {
    url
  });
  if (url.length < segments) return l.rNull();
  if (url[posEdit].path !== 'edit' || url[posEdit + 1].path !== 'refresh') return l.rNull();
  const match = {
    consumed: url.slice(0, segments),
    posParams: {
      zoneId: url[0],
      appId: url[posAppId],
      items: url[posAppId + 3]
    }
  };
  return l.r(match, '✅');
}

/***/ }),

/***/ 73412:
/*!********************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/helpers/url.helpers.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UrlHelpers: () => (/* binding */ UrlHelpers)
/* harmony export */ });
class UrlHelpers {
  static stripNonUrlCharacters(controlValue, allowPath, trimEnd) {
    if (!controlValue) {
      return '';
    }
    const rexSeparators = allowPath ? /[^a-z0-9-_/]+/gi : /[^a-z0-9-_]+/gi;
    const latinized = this.latinizeText(controlValue.toLowerCase());
    const cleanInputValue = latinized.replace(`'s `, 's ') // neutralize it's, daniel's etc. but only if followed by a space, to ensure we don't kill quotes
    .replace('\\', '/') // neutralize slash representation
    .replace(rexSeparators, '-') // replace everything we don't want with a -
    .replace(/-+/gi, '-') // reduce multiple '-'
    .replace(/\/+/gi, '/') // reduce multiple slashes
    .replace(/-*\/-*/gi, '/') // reduce '-/' or '/-' combinations to a simple '/'
    .replace(trimEnd ? /^-|-+$/gi : /^-/gi, ''); // trim front and maybe end '-'
    return cleanInputValue;
  }
  static latinizeText(input) {
    const latinMap = {
      Á: 'A',
      Ă: 'A',
      Ắ: 'A',
      Ặ: 'A',
      Ằ: 'A',
      Ẳ: 'A',
      Ẵ: 'A',
      Ǎ: 'A',
      Â: 'A',
      Ấ: 'A',
      Ậ: 'A',
      Ầ: 'A',
      Ẩ: 'A',
      Ẫ: 'A',
      Ä: 'Ae',
      Ǟ: 'A',
      Ȧ: 'A',
      Ǡ: 'A',
      Ạ: 'A',
      Ȁ: 'A',
      À: 'A',
      Ả: 'A',
      Ȃ: 'A',
      Ā: 'A',
      Ą: 'A',
      Å: 'A',
      Ǻ: 'A',
      Ḁ: 'A',
      Ⱥ: 'A',
      Ã: 'A',
      Ꜳ: 'AA',
      Æ: 'AE',
      Ǽ: 'AE',
      Ǣ: 'AE',
      Ꜵ: 'AO',
      Ꜷ: 'AU',
      Ꜹ: 'AV',
      Ꜻ: 'AV',
      Ꜽ: 'AY',
      Ḃ: 'B',
      Ḅ: 'B',
      Ɓ: 'B',
      Ḇ: 'B',
      Ƀ: 'B',
      Ƃ: 'B',
      Ć: 'C',
      Č: 'C',
      Ç: 'C',
      Ḉ: 'C',
      Ĉ: 'C',
      Ċ: 'C',
      Ƈ: 'C',
      Ȼ: 'C',
      Ď: 'D',
      Ḑ: 'D',
      Ḓ: 'D',
      Ḋ: 'D',
      Ḍ: 'D',
      Ɗ: 'D',
      Ḏ: 'D',
      ǲ: 'D',
      ǅ: 'D',
      Đ: 'D',
      Ƌ: 'D',
      Ǳ: 'DZ',
      Ǆ: 'DZ',
      É: 'E',
      Ĕ: 'E',
      Ě: 'E',
      Ȩ: 'E',
      Ḝ: 'E',
      Ê: 'E',
      Ế: 'E',
      Ệ: 'E',
      Ề: 'E',
      Ể: 'E',
      Ễ: 'E',
      Ḙ: 'E',
      Ë: 'E',
      Ė: 'E',
      Ẹ: 'E',
      Ȅ: 'E',
      È: 'E',
      Ẻ: 'E',
      Ȇ: 'E',
      Ē: 'E',
      Ḗ: 'E',
      Ḕ: 'E',
      Ę: 'E',
      Ɇ: 'E',
      Ẽ: 'E',
      Ḛ: 'E',
      Ꝫ: 'ET',
      Ḟ: 'F',
      Ƒ: 'F',
      Ǵ: 'G',
      Ğ: 'G',
      Ǧ: 'G',
      Ģ: 'G',
      Ĝ: 'G',
      Ġ: 'G',
      Ɠ: 'G',
      Ḡ: 'G',
      Ǥ: 'G',
      Ḫ: 'H',
      Ȟ: 'H',
      Ḩ: 'H',
      Ĥ: 'H',
      Ⱨ: 'H',
      Ḧ: 'H',
      Ḣ: 'H',
      Ḥ: 'H',
      Ħ: 'H',
      Í: 'I',
      Ĭ: 'I',
      Ǐ: 'I',
      Î: 'I',
      Ï: 'I',
      Ḯ: 'I',
      İ: 'I',
      Ị: 'I',
      Ȉ: 'I',
      Ì: 'I',
      Ỉ: 'I',
      Ȋ: 'I',
      Ī: 'I',
      Į: 'I',
      Ɨ: 'I',
      Ĩ: 'I',
      Ḭ: 'I',
      Ꝺ: 'D',
      Ꝼ: 'F',
      Ᵹ: 'G',
      Ꞃ: 'R',
      Ꞅ: 'S',
      Ꞇ: 'T',
      Ꝭ: 'IS',
      Ĵ: 'J',
      Ɉ: 'J',
      Ḱ: 'K',
      Ǩ: 'K',
      Ķ: 'K',
      Ⱪ: 'K',
      Ꝃ: 'K',
      Ḳ: 'K',
      Ƙ: 'K',
      Ḵ: 'K',
      Ꝁ: 'K',
      Ꝅ: 'K',
      Ĺ: 'L',
      Ƚ: 'L',
      Ľ: 'L',
      Ļ: 'L',
      Ḽ: 'L',
      Ḷ: 'L',
      Ḹ: 'L',
      Ⱡ: 'L',
      Ꝉ: 'L',
      Ḻ: 'L',
      Ŀ: 'L',
      Ɫ: 'L',
      ǈ: 'L',
      Ł: 'L',
      Ǉ: 'LJ',
      Ḿ: 'M',
      Ṁ: 'M',
      Ṃ: 'M',
      Ɱ: 'M',
      Ń: 'N',
      Ň: 'N',
      Ņ: 'N',
      Ṋ: 'N',
      Ṅ: 'N',
      Ṇ: 'N',
      Ǹ: 'N',
      Ɲ: 'N',
      Ṉ: 'N',
      Ƞ: 'N',
      ǋ: 'N',
      Ñ: 'N',
      Ǌ: 'NJ',
      Ó: 'O',
      Ŏ: 'O',
      Ǒ: 'O',
      Ô: 'O',
      Ố: 'O',
      Ộ: 'O',
      Ồ: 'O',
      Ổ: 'O',
      Ỗ: 'O',
      Öe: 'O',
      Ȫ: 'O',
      Ȯ: 'O',
      Ȱ: 'O',
      Ọ: 'O',
      Ő: 'O',
      Ȍ: 'O',
      Ò: 'O',
      Ỏ: 'O',
      Ơ: 'O',
      Ớ: 'O',
      Ợ: 'O',
      Ờ: 'O',
      Ở: 'O',
      Ỡ: 'O',
      Ȏ: 'O',
      Ꝋ: 'O',
      Ꝍ: 'O',
      Ō: 'O',
      Ṓ: 'O',
      Ṑ: 'O',
      Ɵ: 'O',
      Ǫ: 'O',
      Ǭ: 'O',
      Ø: 'O',
      Ǿ: 'O',
      Õ: 'O',
      Ṍ: 'O',
      Ṏ: 'O',
      Ȭ: 'O',
      Ƣ: 'OI',
      Ꝏ: 'OO',
      Ɛ: 'E',
      Ɔ: 'O',
      Ȣ: 'OU',
      Ṕ: 'P',
      Ṗ: 'P',
      Ꝓ: 'P',
      Ƥ: 'P',
      Ꝕ: 'P',
      Ᵽ: 'P',
      Ꝑ: 'P',
      Ꝙ: 'Q',
      Ꝗ: 'Q',
      Ŕ: 'R',
      Ř: 'R',
      Ŗ: 'R',
      Ṙ: 'R',
      Ṛ: 'R',
      Ṝ: 'R',
      Ȑ: 'R',
      Ȓ: 'R',
      Ṟ: 'R',
      Ɍ: 'R',
      Ɽ: 'R',
      Ꜿ: 'C',
      Ǝ: 'E',
      Ś: 'S',
      Ṥ: 'S',
      Š: 'S',
      Ṧ: 'S',
      Ş: 'S',
      Ŝ: 'S',
      Ș: 'S',
      Ṡ: 'S',
      Ṣ: 'S',
      Ṩ: 'S',
      Ť: 'T',
      Ţ: 'T',
      Ṱ: 'T',
      Ț: 'T',
      Ⱦ: 'T',
      Ṫ: 'T',
      Ṭ: 'T',
      Ƭ: 'T',
      Ṯ: 'T',
      Ʈ: 'T',
      Ŧ: 'T',
      Ɐ: 'A',
      Ꞁ: 'L',
      Ɯ: 'M',
      Ʌ: 'V',
      Ꜩ: 'TZ',
      Ú: 'U',
      Ŭ: 'U',
      Ǔ: 'U',
      Û: 'U',
      Ṷ: 'U',
      Ü: 'Ue',
      Ǘ: 'U',
      Ǚ: 'U',
      Ǜ: 'U',
      Ǖ: 'U',
      Ṳ: 'U',
      Ụ: 'U',
      Ű: 'U',
      Ȕ: 'U',
      Ù: 'U',
      Ủ: 'U',
      Ư: 'U',
      Ứ: 'U',
      Ự: 'U',
      Ừ: 'U',
      Ử: 'U',
      Ữ: 'U',
      Ȗ: 'U',
      Ū: 'U',
      Ṻ: 'U',
      Ų: 'U',
      Ů: 'U',
      Ũ: 'U',
      Ṹ: 'U',
      Ṵ: 'U',
      Ꝟ: 'V',
      Ṿ: 'V',
      Ʋ: 'V',
      Ṽ: 'V',
      Ꝡ: 'VY',
      Ẃ: 'W',
      Ŵ: 'W',
      Ẅ: 'W',
      Ẇ: 'W',
      Ẉ: 'W',
      Ẁ: 'W',
      Ⱳ: 'W',
      Ẍ: 'X',
      Ẋ: 'X',
      Ý: 'Y',
      Ŷ: 'Y',
      Ÿ: 'Y',
      Ẏ: 'Y',
      Ỵ: 'Y',
      Ỳ: 'Y',
      Ƴ: 'Y',
      Ỷ: 'Y',
      Ỿ: 'Y',
      Ȳ: 'Y',
      Ɏ: 'Y',
      Ỹ: 'Y',
      Ź: 'Z',
      Ž: 'Z',
      Ẑ: 'Z',
      Ⱬ: 'Z',
      Ż: 'Z',
      Ẓ: 'Z',
      Ȥ: 'Z',
      Ẕ: 'Z',
      Ƶ: 'Z',
      Ĳ: 'IJ',
      Œ: 'OE',
      ᴀ: 'A',
      ᴁ: 'AE',
      ʙ: 'B',
      ᴃ: 'B',
      ᴄ: 'C',
      ᴅ: 'D',
      ᴇ: 'E',
      ꜰ: 'F',
      ɢ: 'G',
      ʛ: 'G',
      ʜ: 'H',
      ɪ: 'I',
      ʁ: 'R',
      ᴊ: 'J',
      ᴋ: 'K',
      ʟ: 'L',
      ᴌ: 'L',
      ᴍ: 'M',
      ɴ: 'N',
      ᴏ: 'O',
      ɶ: 'OE',
      ᴐ: 'O',
      ᴕ: 'OU',
      ᴘ: 'P',
      ʀ: 'R',
      ᴎ: 'N',
      ᴙ: 'R',
      ꜱ: 'S',
      ᴛ: 'T',
      ⱻ: 'E',
      ᴚ: 'R',
      ᴜ: 'U',
      ᴠ: 'V',
      ᴡ: 'W',
      ʏ: 'Y',
      ᴢ: 'Z',
      á: 'a',
      ă: 'a',
      ắ: 'a',
      ặ: 'a',
      ằ: 'a',
      ẳ: 'a',
      ẵ: 'a',
      ǎ: 'a',
      â: 'a',
      ấ: 'a',
      ậ: 'a',
      ầ: 'a',
      ẩ: 'a',
      ẫ: 'a',
      ä: 'ae',
      ǟ: 'a',
      ȧ: 'a',
      ǡ: 'a',
      ạ: 'a',
      ȁ: 'a',
      à: 'a',
      ả: 'a',
      ȃ: 'a',
      ā: 'a',
      ą: 'a',
      ᶏ: 'a',
      ẚ: 'a',
      å: 'a',
      ǻ: 'a',
      ḁ: 'a',
      ⱥ: 'a',
      ã: 'a',
      ꜳ: 'aa',
      æ: 'ae',
      ǽ: 'ae',
      ǣ: 'ae',
      ꜵ: 'ao',
      ꜷ: 'au',
      ꜹ: 'av',
      ꜻ: 'av',
      ꜽ: 'ay',
      ḃ: 'b',
      ḅ: 'b',
      ɓ: 'b',
      ḇ: 'b',
      ᵬ: 'b',
      ᶀ: 'b',
      ƀ: 'b',
      ƃ: 'b',
      ɵ: 'o',
      ć: 'c',
      č: 'c',
      ç: 'c',
      ḉ: 'c',
      ĉ: 'c',
      ɕ: 'c',
      ċ: 'c',
      ƈ: 'c',
      ȼ: 'c',
      ď: 'd',
      ḑ: 'd',
      ḓ: 'd',
      ȡ: 'd',
      ḋ: 'd',
      ḍ: 'd',
      ɗ: 'd',
      ᶑ: 'd',
      ḏ: 'd',
      ᵭ: 'd',
      ᶁ: 'd',
      đ: 'd',
      ɖ: 'd',
      ƌ: 'd',
      ı: 'i',
      ȷ: 'j',
      ɟ: 'j',
      ʄ: 'j',
      ǳ: 'dz',
      ǆ: 'dz',
      é: 'e',
      ĕ: 'e',
      ě: 'e',
      ȩ: 'e',
      ḝ: 'e',
      ê: 'e',
      ế: 'e',
      ệ: 'e',
      ề: 'e',
      ể: 'e',
      ễ: 'e',
      ḙ: 'e',
      ë: 'e',
      ė: 'e',
      ẹ: 'e',
      ȅ: 'e',
      è: 'e',
      ẻ: 'e',
      ȇ: 'e',
      ē: 'e',
      ḗ: 'e',
      ḕ: 'e',
      ⱸ: 'e',
      ę: 'e',
      ᶒ: 'e',
      ɇ: 'e',
      ẽ: 'e',
      ḛ: 'e',
      ꝫ: 'et',
      ḟ: 'f',
      ƒ: 'f',
      ᵮ: 'f',
      ᶂ: 'f',
      ǵ: 'g',
      ğ: 'g',
      ǧ: 'g',
      ģ: 'g',
      ĝ: 'g',
      ġ: 'g',
      ɠ: 'g',
      ḡ: 'g',
      ᶃ: 'g',
      ǥ: 'g',
      ḫ: 'h',
      ȟ: 'h',
      ḩ: 'h',
      ĥ: 'h',
      ⱨ: 'h',
      ḧ: 'h',
      ḣ: 'h',
      ḥ: 'h',
      ɦ: 'h',
      ẖ: 'h',
      ħ: 'h',
      ƕ: 'hv',
      í: 'i',
      ĭ: 'i',
      ǐ: 'i',
      î: 'i',
      ï: 'i',
      ḯ: 'i',
      ị: 'i',
      ȉ: 'i',
      ì: 'i',
      ỉ: 'i',
      ȋ: 'i',
      ī: 'i',
      į: 'i',
      ᶖ: 'i',
      ɨ: 'i',
      ĩ: 'i',
      ḭ: 'i',
      ꝺ: 'd',
      ꝼ: 'f',
      ᵹ: 'g',
      ꞃ: 'r',
      ꞅ: 's',
      ꞇ: 't',
      ꝭ: 'is',
      ǰ: 'j',
      ĵ: 'j',
      ʝ: 'j',
      ɉ: 'j',
      ḱ: 'k',
      ǩ: 'k',
      ķ: 'k',
      ⱪ: 'k',
      ꝃ: 'k',
      ḳ: 'k',
      ƙ: 'k',
      ḵ: 'k',
      ᶄ: 'k',
      ꝁ: 'k',
      ꝅ: 'k',
      ĺ: 'l',
      ƚ: 'l',
      ɬ: 'l',
      ľ: 'l',
      ļ: 'l',
      ḽ: 'l',
      ȴ: 'l',
      ḷ: 'l',
      ḹ: 'l',
      ⱡ: 'l',
      ꝉ: 'l',
      ḻ: 'l',
      ŀ: 'l',
      ɫ: 'l',
      ᶅ: 'l',
      ɭ: 'l',
      ł: 'l',
      ǉ: 'lj',
      ſ: 's',
      ẜ: 's',
      ẛ: 's',
      ẝ: 's',
      ḿ: 'm',
      ṁ: 'm',
      ṃ: 'm',
      ɱ: 'm',
      ᵯ: 'm',
      ᶆ: 'm',
      ń: 'n',
      ň: 'n',
      ņ: 'n',
      ṋ: 'n',
      ȵ: 'n',
      ṅ: 'n',
      ṇ: 'n',
      ǹ: 'n',
      ɲ: 'n',
      ṉ: 'n',
      ƞ: 'n',
      ᵰ: 'n',
      ᶇ: 'n',
      ɳ: 'n',
      ñ: 'n',
      ǌ: 'nj',
      ó: 'o',
      ŏ: 'o',
      ǒ: 'o',
      ô: 'o',
      ố: 'o',
      ộ: 'o',
      ồ: 'o',
      ổ: 'o',
      ỗ: 'o',
      ö: 'oe',
      ȫ: 'o',
      ȯ: 'o',
      ȱ: 'o',
      ọ: 'o',
      ő: 'o',
      ȍ: 'o',
      ò: 'o',
      ỏ: 'o',
      ơ: 'o',
      ớ: 'o',
      ợ: 'o',
      ờ: 'o',
      ở: 'o',
      ỡ: 'o',
      ȏ: 'o',
      ꝋ: 'o',
      ꝍ: 'o',
      ⱺ: 'o',
      ō: 'o',
      ṓ: 'o',
      ṑ: 'o',
      ǫ: 'o',
      ǭ: 'o',
      ø: 'o',
      ǿ: 'o',
      õ: 'o',
      ṍ: 'o',
      ṏ: 'o',
      ȭ: 'o',
      ƣ: 'oi',
      ꝏ: 'oo',
      ɛ: 'e',
      ᶓ: 'e',
      ɔ: 'o',
      ᶗ: 'o',
      ȣ: 'ou',
      ṕ: 'p',
      ṗ: 'p',
      ꝓ: 'p',
      ƥ: 'p',
      ᵱ: 'p',
      ᶈ: 'p',
      ꝕ: 'p',
      ᵽ: 'p',
      ꝑ: 'p',
      ꝙ: 'q',
      ʠ: 'q',
      ɋ: 'q',
      ꝗ: 'q',
      ŕ: 'r',
      ř: 'r',
      ŗ: 'r',
      ṙ: 'r',
      ṛ: 'r',
      ṝ: 'r',
      ȑ: 'r',
      ɾ: 'r',
      ᵳ: 'r',
      ȓ: 'r',
      ṟ: 'r',
      ɼ: 'r',
      ᵲ: 'r',
      ᶉ: 'r',
      ɍ: 'r',
      ɽ: 'r',
      ↄ: 'c',
      ꜿ: 'c',
      ɘ: 'e',
      ɿ: 'r',
      ß: 'ss',
      ś: 's',
      ṥ: 's',
      š: 's',
      ṧ: 's',
      ş: 's',
      ŝ: 's',
      ș: 's',
      ṡ: 's',
      ṣ: 's',
      ṩ: 's',
      ʂ: 's',
      ᵴ: 's',
      ᶊ: 's',
      ȿ: 's',
      ɡ: 'g',
      ᴑ: 'o',
      ᴓ: 'o',
      ᴝ: 'u',
      ť: 't',
      ţ: 't',
      ṱ: 't',
      ț: 't',
      ȶ: 't',
      ẗ: 't',
      ⱦ: 't',
      ṫ: 't',
      ṭ: 't',
      ƭ: 't',
      ṯ: 't',
      ᵵ: 't',
      ƫ: 't',
      ʈ: 't',
      ŧ: 't',
      ᵺ: 'th',
      ɐ: 'a',
      ᴂ: 'ae',
      ǝ: 'e',
      ᵷ: 'g',
      ɥ: 'h',
      ʮ: 'h',
      ʯ: 'h',
      ᴉ: 'i',
      ʞ: 'k',
      ꞁ: 'l',
      ɯ: 'm',
      ɰ: 'm',
      ᴔ: 'oe',
      ɹ: 'r',
      ɻ: 'r',
      ɺ: 'r',
      ⱹ: 'r',
      ʇ: 't',
      ʌ: 'v',
      ʍ: 'w',
      ʎ: 'y',
      ꜩ: 'tz',
      ú: 'u',
      ŭ: 'u',
      ǔ: 'u',
      û: 'u',
      ṷ: 'u',
      ü: 'ue',
      ǘ: 'u',
      ǚ: 'u',
      ǜ: 'u',
      ǖ: 'u',
      ṳ: 'u',
      ụ: 'u',
      ű: 'u',
      ȕ: 'u',
      ù: 'u',
      ủ: 'u',
      ư: 'u',
      ứ: 'u',
      ự: 'u',
      ừ: 'u',
      ử: 'u',
      ữ: 'u',
      ȗ: 'u',
      ū: 'u',
      ṻ: 'u',
      ų: 'u',
      ᶙ: 'u',
      ů: 'u',
      ũ: 'u',
      ṹ: 'u',
      ṵ: 'u',
      ᵫ: 'ue',
      ꝸ: 'um',
      ⱴ: 'v',
      ꝟ: 'v',
      ṿ: 'v',
      ʋ: 'v',
      ᶌ: 'v',
      ⱱ: 'v',
      ṽ: 'v',
      ꝡ: 'vy',
      ẃ: 'w',
      ŵ: 'w',
      ẅ: 'w',
      ẇ: 'w',
      ẉ: 'w',
      ẁ: 'w',
      ⱳ: 'w',
      ẘ: 'w',
      ẍ: 'x',
      ẋ: 'x',
      ᶍ: 'x',
      ý: 'y',
      ŷ: 'y',
      ÿ: 'y',
      ẏ: 'y',
      ỵ: 'y',
      ỳ: 'y',
      ƴ: 'y',
      ỷ: 'y',
      ỿ: 'y',
      ȳ: 'y',
      ẙ: 'y',
      ɏ: 'y',
      ỹ: 'y',
      ź: 'z',
      ž: 'z',
      ẑ: 'z',
      ʑ: 'z',
      ⱬ: 'z',
      ż: 'z',
      ẓ: 'z',
      ȥ: 'z',
      ẕ: 'z',
      ᵶ: 'z',
      ᶎ: 'z',
      ʐ: 'z',
      ƶ: 'z',
      ɀ: 'z',
      ﬀ: 'ff',
      ﬃ: 'ffi',
      ﬄ: 'ffl',
      ﬁ: 'fi',
      ﬂ: 'fl',
      ĳ: 'ij',
      œ: 'oe',
      ﬆ: 'st',
      ₐ: 'a',
      ₑ: 'e',
      ᵢ: 'i',
      ⱼ: 'j',
      ₒ: 'o',
      ᵣ: 'r',
      ᵤ: 'u',
      ᵥ: 'v',
      ₓ: 'x'
    };
    return input.replace(/[^A-Za-z0-9\[\] ]/g, a => latinMap[a] || a);
  }
  static urlParamsToDic(url) {
    const queryParams = {};
    url.split('&').forEach(f => {
      const p = f.split('=');
      if (p.length === 2) queryParams[p[0]] = decodeURIComponent(p[1].replace(/\+/g, ' '));
    });
    return queryParams;
  }
  /** https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters/1099670#1099670 */
  static getUrlParams(qs) {
    qs = qs.split('+').join(' ');
    const params = {};
    let tokens;
    const re = /[?&]?([^=]+)=([^&]*)/g;
    // tslint:disable-next-line:no-conditional-assignment
    while (tokens = re.exec(qs)) {
      params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
  }
  static replaceUrlParam(url, paramName, paramValue) {
    if (paramValue === null) {
      paramValue = '';
    }
    const pattern = new RegExp('\\b(' + paramName + '=).*?(&|#|$)');
    if (url.search(pattern) >= 0) {
      return url.replace(pattern, '$1' + paramValue + '$2');
    }
    url = url.replace(/[?#]$/, '');
    return url + (url.indexOf('?') > 0 ? '&' : '?') + paramName + '=' + paramValue;
  }
  static getUrlPrefix(area, eavConfig) {
    let result = '';
    if (area === 'system') {
      result = eavConfig.systemRoot;
    } // used to link to JS-stuff and similar
    if (area === 'zone') {
      result = eavConfig.portalRoot;
    } // used to link to the site-root (like an image)
    if (area === 'app') {
      result = eavConfig.appRoot;
    } // used to find the app-root of something inside an app
    if (area === 'appShared') {
      result = eavConfig.appSharedRoot;
    } // used to find the app-root of something inside an app
    if (result.endsWith('/')) {
      result = result.substring(0, result.length - 1);
    }
    return result;
  }
  static newUrlIfCurrentContainsOldUrl(route, oldEditUrl, newEditUrl) {
    const currentUrl = UrlHelpers.calculatePathFromRoot(route);
    const lastIndex = currentUrl.lastIndexOf(oldEditUrl);
    if (lastIndex <= 0) return null;
    const newUrl = currentUrl.substring(0, lastIndex) + currentUrl.substring(lastIndex).replace(oldEditUrl, newEditUrl);
    return newUrl;
  }
  static calculatePathFromRoot(route) {
    let lastChild = route;
    while (lastChild.firstChild) {
      lastChild = lastChild.firstChild;
    }
    let pathFromRoot = '';
    for (const path of lastChild.snapshot.pathFromRoot) {
      if (path.url.length <= 0) continue;
      for (const urlSegment of path.url) {
        if (!urlSegment.path) continue;
        pathFromRoot += '/' + urlSegment.path;
      }
    }
    return pathFromRoot;
  }
}

/***/ }),

/***/ 74824:
/*!*********************************************************************!*\
  !*** ./projects/eav-ui/src/app/features/features-scoped.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeaturesScopedService: () => (/* binding */ FeaturesScopedService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core */ 88692);
/* harmony import */ var _app_administration_services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-administration/services/dialog-config-app.service */ 64699);
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/logging */ 34435);
/* harmony import */ var _shared_signals_computed_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/signals/computed-cache */ 98503);
/* harmony import */ var _shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/signals/signal.utilities */ 67993);







const logSpecs = {
  all: false,
  constructor: false,
  load: false,
  getAll: false,
  requireFeature: true,
  unlicensedFeatures: true
};
/**
 * Singleton Service to provide information about enabled/disabled features.
 *
 * It currently has a strange architecture, since it's singleton,
 * but needs context data.
 * So the GlobalDialogConfigService seems to call the loadFromService.
 * TODO: 2dm: I don't like this, should rethink the architecture, feels a bit flaky.
 * 2024-08-28 2dm modified this, but still not perfect.
 * ATM it would still load the dialog-settings by itself, even if the form service would provide it. on .load(...)
 */
class FeaturesScopedService {
  #dialogConfigSvc;
  constructor() {
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_2__.classLog)({
      FeaturesScopedService
    }, logSpecs);
    this.#dialogConfigSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_app_administration_services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_1__.DialogConfigAppService);
    // Provide context information and ensure that previously added data is always available
    this.#dialogContext = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)(null);
    /** Required features specified by the entire form */
    this.#reqFeaturesForm = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_4__.signalObj)('reqFeaturesForm', {});
    /** Required features specified by specific fields */
    this.#reqFeaturesFields = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_4__.signalObj)('reqFeaturesFields', {});
    /** All required features merged */
    this.#reqFeatures = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_4__.computedObj)('requiredFeatures', () => {
      const req = this.#reqFeaturesForm();
      const fields = this.#reqFeaturesFields();
      return {
        ...req,
        ...fields
      };
    });
    this.unlicensedFeatures = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_4__.computedObj)('unlicensedFeatures', () => {
      const req = this.#reqFeatures();
      const allowed = this.getAll()().filter(f => f.allowUse);
      const missing = Object.keys(req).filter(nameId => !allowed.some(f => f.nameId === nameId));
      this.log.aIf('unlicensedFeatures', {
        req,
        allowed,
        missing
      });
      return missing;
    });
    this.hasUnlicensedFeatures = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_4__.computedObj)('hasUnlicensedFeatures', () => this.unlicensedFeatures().length > 0);
    /**
     * Property providing enabled, which behaves like a Record<string, Signal<boolean>>.
     */
    this.isEnabled = new _shared_signals_computed_cache__WEBPACK_IMPORTED_MODULE_3__.ComputedCacheHelper('isEnabledCache').buildProxy(nameId => () => {
      return this.#dialogContext()?.Features.find(f => f.nameId === nameId)?.isEnabled ?? false;
    });
    /**
     * Property providing allowUse, which behaves like a Record<string, Signal<boolean>>.
     * This is primarily meant for the field-wrapper, which
     * - should show warnings etc. if not allowed
     * - but in edge cases it is allowed, eg. when editing data on a system content-type
     */
    this.allowUse = new _shared_signals_computed_cache__WEBPACK_IMPORTED_MODULE_3__.ComputedCacheHelper('isEnabledCache').buildProxy(nameId => () => {
      return this.#dialogContext()?.Features.find(f => f.nameId === nameId)?.allowUse ?? false;
    });
    this.log.fnIf('constructor');
    this.#dialogConfigSvc.getCurrent$().subscribe(ds => this.load(ds.Context));
  }
  load(dialogContext, formData) {
    this.log.fnIf('load', {
      formData,
      dialogContext
    });
    this.#dialogContext.set(dialogContext);
    this.#reqFeaturesForm.set(formData?.RequiredFeatures ?? {});
  }
  // Provide context information and ensure that previously added data is always available
  #dialogContext;
  /** Required features specified by the entire form */
  #reqFeaturesForm;
  /** Required features specified by specific fields */
  #reqFeaturesFields;
  /** All required features merged */
  #reqFeatures;
  requireFeature(feature, reason) {
    const l = this.log.fnIf('requireFeature', {
      feature,
      reason
    });
    const current = this.#reqFeaturesFields();
    if (!Object.keys(current).includes(feature)) this.#reqFeaturesFields.update(current => ({
      ...current,
      [feature]: [reason]
    }));else if (!current[feature].includes(reason)) this.#reqFeaturesFields.update(current => ({
      ...current,
      [feature]: [...current[feature], reason]
    }));
    l.end('final', this.#reqFeaturesFields());
  }
  getAll() {
    this.log.fnIf('getAll');
    return (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_4__.computedObj)('all-features', () => this.#dialogContext()?.Features ?? []);
  }
  getCurrent(featureNameId) {
    return this.#dialogContext()?.Features.find(f => f.nameId === featureNameId);
  }
  static {
    this.ɵfac = function FeaturesScopedService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FeaturesScopedService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: FeaturesScopedService,
      factory: FeaturesScopedService.ɵfac
    });
  }
}

/***/ }),

/***/ 54392:
/*!********************************************************!*\
  !*** ./projects/eav-ui/src/app/params-init.factory.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   paramsInitFactory: () => (/* binding */ paramsInitFactory)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _edit_shared_helpers_url_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit/shared/helpers/url.helpers */ 73412);
/* harmony import */ var _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/constants/dialog-type.constants */ 37567);
/* harmony import */ var _shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/constants/session.constants */ 38172);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/logging */ 34435);






/**
 * Simple factory which is used by Angular Routing to figure out the APP_INITIALIZER
 * @param injector injector which is provided by Angular, required to get the Router
 * @returns
 */
function paramsInitFactory(injector) {
  const log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_4__.classLog)({
    paramsInitFactory
  }, null);
  return () => {
    const l = log.fn('paramsInitFactory');
    // console.log('Setting parameters config and clearing route');
    const sS = sessionStorage;
    const eavKeys = Object.keys(sS).filter(key => key.startsWith(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.prefix));
    const urlHash = window.location.hash;
    const isParamsRoute = !urlHash.startsWith('#/');
    if (isParamsRoute) {
      l.a('is Params Route - will process', {
        urlHash,
        eavKeys
      });
      logInitialRoute();
      // Flush our part of the session, just to be sure it's a clean slate
      for (const key of eavKeys) sS.removeItem(key);
      // save url which opened the dialog and set edit dialog as the default
      sS.setItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.keyUrl, window.location.href);
      sS.setItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.keyDialog, _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.Edit);
      // Transfer URL params to session storage, without the leading '#' char
      const paramsDic = _edit_shared_helpers_url_helpers__WEBPACK_IMPORTED_MODULE_0__.UrlHelpers.urlParamsToDic(urlHash.substring(1));
      transferParamsToSessionStorage(paramsDic);
      // Redirect to the expected dialog
      const router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router);
      const dialog = sS.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.keyDialog);
      const contentType = sS.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.keyContentType);
      const items = sS.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.keyItems);
      const getFull = () => `${sS.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.keyZoneId)}/v2/${sS.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.keyModuleId)}/${sS.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.keyContentBlockId)}/${sS.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.keyAppId)}`;
      l.a('dialog: ' + dialog);
      switch (dialog) {
        case _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.Zone:
          const extrasZone = JSON.parse(sS.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.keyExtras));
          router.navigate([`${getFull()}/apps${extrasZone?.tab ? `/${extrasZone.tab}` : ''}`]);
          return;
        case _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.Apps:
          router.navigate([`${getFull()}/apps/list`]);
          return;
        case _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.AppImport:
          router.navigate([`${getFull()}/import`]);
          return;
        case _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.App:
          const extrasApp = JSON.parse(sS.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.keyExtras));
          router.navigate([`${getFull()}/app${extrasApp?.tab ? `/${extrasApp.tab}` : ''}${extrasApp?.scope ? `/${extrasApp.scope}` : ''}`]);
          return;
        case _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.ContentType:
          router.navigate([`${getFull()}/fields/${contentType}`]);
          return;
        case _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.ContentItems:
          router.navigate([`${getFull()}/items/${contentType}`]);
          return;
        case _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.Edit:
          const editItems = JSON.parse(items);
          const form = {
            items: editItems
          };
          const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_3__.convertFormToUrl)(form);
          router.navigate([`${getFull()}/edit/${formUrl}`]);
          return;
        case _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.ItemHistory:
          const historyItems = JSON.parse(items);
          router.navigate([`${getFull()}/versions/${historyItems[0].EntityId}`]);
          return;
        case _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.Develop:
          router.navigate([`${getFull()}/code`]);
          return;
        case _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.PipelineDesigner:
          const pipelineId = sS.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.keyPipelineId);
          router.navigate([`${getFull()}/query/${pipelineId}`]);
          return;
        case _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.Replace:
          const repItem = JSON.parse(items)[0];
          const rGuid = repItem.Parent;
          const rPart = repItem.Field;
          const rIndex = repItem.Index;
          const add = repItem.Add;
          const queryParams = add ? {
            add: true
          } : {};
          router.navigate([`${getFull()}/${rGuid}/${rPart}/${rIndex}/replace`], {
            queryParams
          });
          return;
        case _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.InstanceList:
          const grpItem = JSON.parse(items)[0];
          const gGuid = grpItem.Parent;
          const gPart = grpItem.Field;
          const gIndex = grpItem.Index;
          router.navigate([`${getFull()}/${gGuid}/${gPart}/${gIndex}/reorder`]);
          return;
        default:
          alert(`Cannot open unknown dialog "${dialog}"`);
          try {
            window.parent.$2sxc.totalPopup.close();
          } catch (error) {}
          return;
      }
    }
    // Not normal entry-Param-Route
    if (eavKeys.length === 0) {
      // if not params route and no params are saved, e.g. browser was reopened,
      // check if we have additional context info in the url behind a ##
      const urlWithCtx = urlHash.split('##');
      const finalRoute = urlWithCtx[0].substring(1);
      // url is like '/73/v2/42/-42/770/app/data/...'
      // or is like  '/73/v2/0/42/-42/770/apps/data/...'
      const routeParts = finalRoute.split('/');
      const zoneId = routeParts[1];
      const mid = routeParts[3];
      const cbid = routeParts[4];
      const appId = routeParts[5];
      if (!isNaN(+mid) && !isNaN(+cbid) && !isNaN(+appId)) {
        l.a('No Params Route and no params saved, but found context info in url, will process', {
          urlHash
        });
        logInitialRoute();
        const ctxAll = `zoneId=${zoneId}&appId=${appId}&mid=${mid}&cbid=${cbid}`;
        l.a('found ##', {
          urlHash,
          ctxAll,
          finalRoute
        });
        transferParamsToSessionStorage(_edit_shared_helpers_url_helpers__WEBPACK_IMPORTED_MODULE_0__.UrlHelpers.urlParamsToDic(ctxAll));
        const router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router);
        router.navigate([finalRoute]);
        return l.end();
      }
      // if not params route and no params are saved, e.g. browser was reopened, throw error
      l.a('No Params Route and no params saved...');
      alert('Missing required url parameters. Please reopen dialog.');
      throw new Error('Missing required url parameters. Please reopen dialog.');
    } else {
      l.a('No Params Route, but params saved..., assume refresh of previously working UI');
      // Log initial route so a developer can re-open the dialog with the link in the console
      logInitialRoute(sS.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.keyUrl));
    }
  };
}
/** Helper to transfer various url-parameters to the session */
function transferParamsToSessionStorage(queryParametersFromUrl) {
  for (const [paramKey, paramValue] of Object.entries(queryParametersFromUrl)) {
    if (paramValue == null) continue;
    sessionStorage.setItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.prefix + paramKey, paramValue);
  }
}
/** Log initial route so a developer can re-open the dialog with the link in the console */
function logInitialRoute(url) {
  console.log('Initial route:', url ?? window.location.href);
}

/***/ }),

/***/ 37567:
/*!***************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/constants/dialog-type.constants.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogTypeConstants: () => (/* binding */ DialogTypeConstants)
/* harmony export */ });
const DialogTypeConstants = {
  Zone: 'zone',
  Apps: 'apps',
  AppImport: 'app-import',
  App: 'app',
  ContentType: 'contenttype',
  ContentItems: 'contentitems',
  Edit: 'edit',
  ItemHistory: 'item-history',
  Develop: 'develop',
  PipelineDesigner: 'pipeline-designer',
  Replace: 'replace',
  InstanceList: 'instance-list'
} /* the as const ensures that the keys/values can be strictly checked */;

/***/ }),

/***/ 50052:
/*!*******************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/constants/eav.constants.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditApiKeyPaths: () => (/* binding */ EditApiKeyPaths),
/* harmony export */   MetadataKeyTypes: () => (/* binding */ MetadataKeyTypes),
/* harmony export */   SystemSettingsScopes: () => (/* binding */ SystemSettingsScopes),
/* harmony export */   eavConstants: () => (/* binding */ eavConstants)
/* harmony export */ });
const MetadataKeyTypes = {
  Guid: 'guid',
  String: 'string',
  Number: 'number'
} /* the as const ensures that the keys/values can be strictly checked */;
const SystemSettingsScopes = {
  App: 'app',
  Site: 'site'
} /* the as const ensures that the keys/values can be strictly checked */;
const EditApiKeyPaths = {
  GoogleTranslate: 'Settings.GoogleTranslate.ApiKey',
  GoogleMaps: 'Settings.GoogleMaps.ApiKey'
};
const eavConstants = {
  metadata: {
    /** Metadata of Attribute */
    // tslint:disable-next-line:max-line-length
    attribute: {
      targetType: 2,
      target: 'EAV Field Properties',
      label: 'Content-Type Field/Attribute (2)',
      keyType: MetadataKeyTypes.Number
    },
    /** Metadata of App */
    app: {
      targetType: 3,
      target: 'App',
      label: 'App (3)',
      keyType: MetadataKeyTypes.Number
    },
    /** Metadata of Entity */
    entity: {
      targetType: 4,
      target: 'Entity',
      label: 'Entity (4)',
      keyType: MetadataKeyTypes.Guid
    },
    /** Metadata of ContentType */
    contentType: {
      targetType: 5,
      target: 'ContentType',
      label: 'Content-Type (5)',
      keyType: MetadataKeyTypes.String
    },
    /** Metadata of Zone */
    zone: {
      targetType: 6,
      target: 'Zone',
      label: 'Zone (6) - not used as of now',
      keyType: MetadataKeyTypes.Number
    },
    /** Metadata of Language (a Dimension) */
    language: {
      targetType: 8,
      target: 'Dimension',
      label: 'Language (8)',
      keyType: MetadataKeyTypes.String
    },
    /** Metadata of CmsObject */
    cmsObject: {
      targetType: 10,
      target: 'CmsObject',
      label: 'Cms Object (10)',
      keyType: MetadataKeyTypes.String,
      hint: 'Usually this is "file:400" or "folder:4030"'
    }
  },
  appMetadata: {
    LightSpeed: {
      ContentTypeName: 'LightSpeedOutputDecorator'
    }
  },
  /** Lookup type for the metadata, e.g. key=80adb152-efad-4aa4-855e-74c5ef230e1f is keyType=guid */
  keyTypes: {
    guid: MetadataKeyTypes.Guid,
    string: MetadataKeyTypes.String,
    number: MetadataKeyTypes.Number
  },
  /** Scopes */
  scopes: {
    /** This is the main schema and the data you usually see is from here */
    default: {
      name: 'Default',
      value: 'Default'
    },
    configuration: {
      name: 'Configuration (Views etc.)',
      value: 'System.Configuration'
    }
  },
  /** Content types where templates, permissions, etc. are stored */
  contentTypes: {
    /** Content type containing app's specifications */
    appConfiguration: '2SexyContent-App',
    /** Content type containing app's views */
    template: '2SexyContent-Template',
    /** Content type containing permissions */
    permissions: 'PermissionConfiguration',
    /** Content type containing queries */
    query: 'DataPipeline',
    /** Content type containing content type metadata */
    contentType: 'ContentType',
    /** Content type containing app's custom settings */
    settings: 'App-Settings',
    /** Content type containing app's custom resources */
    resources: 'App-Resources',
    /** Content type containing app's system settings */
    systemSettings: 'SettingsSystem',
    /** Content type containing app's system resources */
    systemResources: 'ResourcesSystem',
    /** Content type containing Primary and Global App custom settings */
    customSettings: 'SettingsCustom',
    /** Content type containing Primary and Global App custom resources */
    customResources: 'ResourcesCustom',
    /** Content type containing formulas */
    formulas: 'UiFormula',
    /** Content type containing notes */
    notes: 'NoteDecorator',
    /** Content type containing settings for image scaling */
    imageDecorator: 'ImageDecorator'
  },
  pipelineDesigner: {
    dataSourceDifficulties: {
      default: 100,
      advanced: 200
    },
    outDataSource: {
      Description: 'The template/script which will show this data',
      EntityGuid: 'Out',
      In: ['Default', 'Header'],
      Name: '2sxc Target (View or API)',
      PartAssemblyAndType: 'SexyContentTemplate',
      PrimaryType: 'Target',
      VisualDesignerData: {
        Top: 20,
        Left: 200,
        Width: 700
      }
    },
    defaultPipeline: {
      dataSources: [{
        EntityGuid: 'unsaved1',
        PartAssemblyAndType: 'ToSic.Sxc.DataSources.CmsBlock, ToSic.Sxc',
        VisualDesignerData: {
          Top: 170,
          Left: 440
        }
      }],
      streamWiring: [{
        From: 'unsaved1',
        Out: 'Header',
        To: 'Out',
        In: 'Header'
      }, {
        From: 'unsaved1',
        Out: 'Default',
        To: 'Out',
        In: 'Default'
      }]
    },
    testParameters: '[Demo:Demo]=true'
  }
};

/***/ }),

/***/ 38172:
/*!***********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/constants/session.constants.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dialogSettings: () => (/* binding */ dialogSettings),
/* harmony export */   keyAppId: () => (/* binding */ keyAppId),
/* harmony export */   keyContentBlockId: () => (/* binding */ keyContentBlockId),
/* harmony export */   keyContentType: () => (/* binding */ keyContentType),
/* harmony export */   keyDebug: () => (/* binding */ keyDebug),
/* harmony export */   keyDialog: () => (/* binding */ keyDialog),
/* harmony export */   keyEditFields: () => (/* binding */ keyEditFields),
/* harmony export */   keyExtras: () => (/* binding */ keyExtras),
/* harmony export */   keyFilters: () => (/* binding */ keyFilters),
/* harmony export */   keyIsShared: () => (/* binding */ keyIsShared),
/* harmony export */   keyItems: () => (/* binding */ keyItems),
/* harmony export */   keyModuleId: () => (/* binding */ keyModuleId),
/* harmony export */   keyPartOfPage: () => (/* binding */ keyPartOfPage),
/* harmony export */   keyPipelineId: () => (/* binding */ keyPipelineId),
/* harmony export */   keyPublishing: () => (/* binding */ keyPublishing),
/* harmony export */   keyUrl: () => (/* binding */ keyUrl),
/* harmony export */   keyZoneId: () => (/* binding */ keyZoneId),
/* harmony export */   partOfPageDefault: () => (/* binding */ partOfPageDefault),
/* harmony export */   prefix: () => (/* binding */ prefix)
/* harmony export */ });
const prefix = 'eav-';
const keyZoneId = `${prefix}zoneId`;
const keyContentBlockId = `${prefix}cbid`;
const keyModuleId = `${prefix}mid`;
const keyAppId = `${prefix}appId`;
const keyDebug = `${prefix}debug`;
const keyDialog = `${prefix}dialog`;
const keyContentType = `${prefix}contentType`;
const keyItems = `${prefix}items`;
const keyPartOfPage = `${prefix}partOfPage`;
const keyPublishing = `${prefix}publishing`;
const keyFilters = `${prefix}filters`;
const keyPipelineId = `${prefix}pipelineId`;
/** WIP v16.01 */
const keyEditFields = `${prefix}uifields`;
/** Url which opened the dialog. Used for debugging */
const keyUrl = `${prefix}url`;
/** This is used by file editor to determine if it's editing shared files or of that portal only */
const keyIsShared = `${prefix}isshared`;
/** Contains extra options for dialogs */
const keyExtras = `${prefix}extras`;
/** Fallback value in case it is missing in url */
const partOfPageDefault = 'false';
/** Language settings - multiple values (JSON), WIP 18.03 */
const dialogSettings = `${prefix}dialogSettings`;

/***/ }),

/***/ 43216:
/*!*******************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/helpers/url-prep.helper.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertFormToUrl: () => (/* binding */ convertFormToUrl),
/* harmony export */   convertUrlToForm: () => (/* binding */ convertUrlToForm)
/* harmony export */ });
/* harmony import */ var _constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/eav.constants */ 50052);
/* harmony import */ var _models_edit_form_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/edit-form.model */ 70334);
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logging */ 34435);



const log = (0,_logging__WEBPACK_IMPORTED_MODULE_2__.classLog)("UrlPrepHelper");
const PREFILL_PREFIX = 'prefill:';
const GROUP_PREFIX = 'group:';
const FIELDS_PREFIX = 'uifields:';
const PARAM_PREFIX = 'parameters:';
const ITEM_SEPARATOR = ',';
const VAL_SEPARATOR = '&';
const LIST_SEPARATOR = ':';
function toOrderedParams(values) {
  return values.join(LIST_SEPARATOR);
}
function convertFormToUrl(form) {
  const l = log.fn('convertFormToUrl', {
    form
  });
  let formUrl = '';
  for (const item of form.items) {
    // If we already have one, the next must be separated
    if (formUrl) formUrl += ITEM_SEPARATOR;
    const asGroup = item;
    const asItem = item;
    const asInboundParams = item;
    // Fields/Parameters can come from two places
    // When a link is inbound from the page, it will use UiFields/Parameters
    // If it's from the Admin-UI itself, it should use the newer / deeper ClientData
    const fields = asInboundParams.UiFields ?? item.ClientData?.fields;
    const parameters = asInboundParams.Parameters ?? item.ClientData?.parameters;
    // Group- or Inner-Item
    if (asGroup.Parent) {
      l.a("asGroup having parent", {
        asGroup
      });
      formUrl += GROUP_PREFIX + toOrderedParams([asGroup.Parent, asGroup.Field, asGroup.Index, asGroup.Add, asGroup.EntityId]);
      formUrl += prefill2UrlParams(asGroup.Prefill);
      formUrl += fields2UrlParams(fields);
      formUrl += obj2UrlParams(parameters, PARAM_PREFIX);
    } else if (asItem.EntityId) {
      l.a("asItem having entity id", {
        asItem
      });
      // Edit Item
      formUrl += asItem.EntityId;
      // New: fields
      formUrl += fields2UrlParams(fields);
      formUrl += obj2UrlParams(parameters, PARAM_PREFIX);
      // 2023-05-11 in edit-id mode, prefill isn't supported, but we want the fields
      // I actually think that prefill should be supported, because it can also transport more parameters
      // formUrl += prefill2UrlParams(groupItem.Prefill, fields);
      // 2024-05-30 2dm reactivating prefill on edit, for scenarios where new fields were added
      // and for ephemeral control fields
      // 2024-06-01 2dm re-disabled, since this also affects links coming in from the page
      // so this could be an unexpected breaking change...
      // formUrl += prefill2UrlParams(asItem.Prefill);
    } else if (item.ContentTypeName) {
      l.a("asItem having content type name", {
        item
      });
      // Add Item
      const addItem = item;
      formUrl += 'new:' + addItem.ContentTypeName;
      formUrl += getParamForMetadata(addItem);
      formUrl += prefill2UrlParams(addItem.Prefill);
      formUrl += fields2UrlParams(fields);
      formUrl += obj2UrlParams(parameters, PARAM_PREFIX);
      if (addItem.DuplicateEntity) formUrl += `${VAL_SEPARATOR}copy:` + addItem.DuplicateEntity;
    }
  }
  return l.r(formUrl);
}
function getParamForMetadata(addItem) {
  const l = log.fn("getParamForMetadata", {
    addItem
  });
  // helper function
  const buildForSuffix = itemFor => toOrderedParams(['',
  // empty string to ensure it will start with a ":"
  itemFor.Target, itemFor.TargetType, itemFor.Singleton ? itemFor.Singleton.toString() : '']);
  if (addItem.For?.String) return l.r(`${VAL_SEPARATOR}for:s~` + paramEncode(addItem.For.String) + buildForSuffix(addItem.For), "for string");
  if (addItem.For?.Number) return l.r(`${VAL_SEPARATOR}for:n~` + addItem.For.Number + buildForSuffix(addItem.For), "for number");
  if (addItem.For?.Guid) return l.r(`${VAL_SEPARATOR}for:g~` + addItem.For.Guid + buildForSuffix(addItem.For), "for guid");
  if (addItem.Metadata) return l.r(getParamForOldMetadata(addItem), "metadata");
  return l.r('', "other");
}
function getParamForOldMetadata(addItem) {
  const l = log.fn("getParamForOldMetadata", {
    addItem
  });
  let keyType;
  switch (addItem.Metadata.keyType.toLocaleLowerCase()) {
    case _constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.keyTypes.string:
      keyType = 's';
      break;
    case _constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.keyTypes.number:
      keyType = 'n';
      break;
    case _constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.keyTypes.guid:
      keyType = 'g';
      break;
  }
  const target = Object.values(_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata).find(m => m.targetType === addItem.Metadata.targetType)?.target;
  const result = `${VAL_SEPARATOR}for:` + keyType + '~' + toOrderedParams([paramEncode(addItem.Metadata.key), target, addItem.Metadata.targetType]);
  return l.r(result, result);
}
function prefill2UrlParams(prefill) {
  return obj2UrlParams(prefill, PREFILL_PREFIX);
}
function obj2UrlParams(obj, prefix) {
  let result = '';
  if (!obj) return result;
  for (const [key, value] of Object.entries(obj)) {
    if (value == null) continue;
    result += `${VAL_SEPARATOR}${prefix}${key}~${paramEncode(value.toString())}`;
  }
  return result;
}
function prefillFromUrlParams(url, addTo) {
  const result = addTo ?? {};
  if (url == null) return result;
  const prefillParams = url.split(LIST_SEPARATOR);
  const key = prefillParams[1].split('~')[0];
  const value = paramDecode(prefillParams[1].split('~')[1]);
  result[key] = value;
  return result;
}
// function objFromUrlParams(url: string, addTo: Record<string, string>, prefix: string): Record<string, string> {
//   const result = addTo ?? {} as Record<string, string>;
//   if (url == null) return result;
//   const prefillParams = url.split(LIST_SEPARATOR);
//   const key = prefillParams[1].split('~')[0];
//   const value = paramDecode(prefillParams[1].split('~')[1]);
//   result[key] = value;
//   return result;
// }
function fields2UrlParams(fields) {
  return fields ? `${VAL_SEPARATOR}${FIELDS_PREFIX}${paramEncode(fields)}` : '';
}
function isNumber(maybeNumber) {
  // The regex must be re-created for each test
  return /^[0-9]*$/g.test(maybeNumber);
}
function convertUrlToForm(formUrl) {
  const l = log.fn("convertUrlToForm", {
    formUrl
  });
  const form = {
    items: []
  };
  const items = formUrl.split(ITEM_SEPARATOR);
  for (const item of items) {
    l.a("item", {
      item
    });
    if (item.startsWith(GROUP_PREFIX)) {
      // Inner Item / Group Item
      const innerItem = {};
      const options = item.split(VAL_SEPARATOR);
      for (const option of options) {
        if (option.startsWith(GROUP_PREFIX)) {
          const parms = option.split(LIST_SEPARATOR);
          innerItem.Parent = parms[1];
          innerItem.Field = parms[2];
          innerItem.Index = parseInt(parms[3], 10);
          innerItem.Add = parms[4] === 'true';
          if (parms.length > 4 && parms[5] && isNumber(parms[5])) innerItem.EntityId = parseInt(parms[5], 10);
        } else addParamToItemIdentifier(innerItem, option);
      }
      form.items.push(innerItem);
    } else if (isNumber((item ?? '').split(VAL_SEPARATOR)[0])) {
      // Edit Item
      const parts = item.split(VAL_SEPARATOR);
      const editItem = _models_edit_form_model__WEBPACK_IMPORTED_MODULE_1__.EditPrep.editId(parseInt(parts[0], 10));
      for (const part of parts) addParamToItemIdentifier(editItem, part);
      form.items.push(editItem);
    } else if (item.startsWith('new:')) {
      // Add Item
      const addItem = {};
      const options = item.split(VAL_SEPARATOR);
      for (const option of options) {
        if (option.startsWith('new:')) {
          // Add Item ContentType
          const newParams = option.split(LIST_SEPARATOR);
          addItem.ContentTypeName = newParams[1];
        } else if (option.startsWith('for:')) {
          // Add Item For
          const forParams = option.split(LIST_SEPARATOR);
          const forKeyType = forParams[1].split('~')[0];
          const forKey = forParams[1].split('~')[1];
          const forTarget = forParams[2];
          const forTargetType = parseInt(forParams[3], 10);
          const forSingleton = forParams[4] != null ? forParams[4] === 'true' : undefined;
          addItem.For = {
            Target: forTarget,
            TargetType: forTargetType,
            ...(forKeyType === 'g' && {
              Guid: forKey
            }),
            ...(forKeyType === 'n' && {
              Number: parseInt(forKey, 10)
            }),
            ...(forKeyType === 's' && {
              String: paramDecode(forKey)
            }),
            ...(forSingleton != null && {
              Singleton: forSingleton
            })
          };
        } else if (option.startsWith('copy:')) {
          // Add Item Copy
          const copyParams = option.split(LIST_SEPARATOR);
          addItem.DuplicateEntity = parseInt(copyParams[1], 10);
        } else addParamToItemIdentifier(addItem, option);
      }
      form.items.push(addItem);
    }
  }
  return l.r(form);
}
/** add prefill and filter to url parameters */
function addParamToItemIdentifier(item, part) {
  const l = log.fn("addParamToItemIdentifier", {
    item,
    part
  });
  if (part.startsWith(FIELDS_PREFIX)) {
    const fields = paramDecode(part.split(':')[1]);
    // temp hacky workaround - put it prefill so it's still there after round-trip
    // should later be on the re-added after the round-trip on the Fields property
    item.Prefill = prefillFromUrlParams(part, {
      fields
    });
    item.ClientData = {
      ...item.ClientData,
      fields
    };
    return l.end();
  }
  // Add Item Prefill
  if (part.startsWith(PREFILL_PREFIX)) {
    item.Prefill = prefillFromUrlParams(part, item.Prefill);
    return l.end();
  }
  // Add Item Form
  if (part.startsWith(PARAM_PREFIX)) {
    const formParams = prefillFromUrlParams(part, item.ClientData?.parameters);
    item.ClientData = {
      ...item.ClientData,
      parameters: formParams
    };
    return l.end();
  }
  l.end('no match');
}
/** Encodes characters in URL parameter to not mess up routing. Don't forget to decode it! :) */
function paramEncode(text) {
  return (text ?? '').replace(/\//g, '%2F').replace(/\:/g, '%3A').replace(/\&/g, '%26').replace(/\~/g, '%7E').replace(/\,/g, '%2C');
}
/** Decodes characters in URL parameter */
function paramDecode(text) {
  return (text ?? '').replace(/%2F/g, '/').replace(/%3A/g, ':').replace(/%26/g, '&').replace(/%7E/g, '~').replace(/%2C/g, ',');
}

/***/ }),

/***/ 72661:
/*!*******************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/icons/app-icons.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppIconsService: () => (/* binding */ AppIconsService)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 37532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 80436);






class AppIconsService {
  constructor(matIconRegistry, domSanitizer) {
    this.matIconRegistry = matIconRegistry;
    this.domSanitizer = domSanitizer;
  }
  load() {
    // v18.01 - changing to Material Symbols
    // this.matIconRegistry.setDefaultFontSetClass('material-icons-outlined');
    this.matIconRegistry.setDefaultFontSetClass('material-symbols-outlined');
    Object.entries(___WEBPACK_IMPORTED_MODULE_0__.iconsFontAwesome).forEach(([name, svg]) => {
      this.matIconRegistry.addSvgIconLiteral(name, this.domSanitizer.bypassSecurityTrustHtml(svg));
    });
  }
  static {
    this.ɵfac = function AppIconsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppIconsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AppIconsService,
      factory: AppIconsService.ɵfac
    });
  }
}

/***/ }),

/***/ 37532:
/*!*******************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/icons/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iconsFontAwesome: () => (/* binding */ iconsFontAwesome)
/* harmony export */ });
/* harmony import */ var _raw_loader_assets_icons_code_curly_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!../../assets/icons/code-curly.svg */ 11194);
// Font-Awesome

const iconsFontAwesome = {
  'code-curly': _raw_loader_assets_icons_code_curly_svg__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ 85837:
/*!**********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/interceptors/handle-errors.interceptor.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HandleErrorsInterceptor: () => (/* binding */ HandleErrorsInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);



class HandleErrorsInterceptor {
  constructor() {
    /** URLs excluded from detailed error alert  */
    this.excludedUrls = ['dist/ng-edit/i18n'];
  }
  intercept(req, next) {
    return next.handle(req).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.catchError)(error => {
      if (!this.checkIfExcluded(error.url)) {
        this.showDetailedHttpError(error);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(error);
    }));
  }
  checkIfExcluded(url) {
    for (const excludedUrl of this.excludedUrls) {
      if (url.includes(excludedUrl)) {
        return true;
      }
    }
    return false;
  }
  showDetailedHttpError(error) {
    let infoText = 'Had an error talking to the server (status ' + error.status + ').';
    const srvResp = error.error;
    if (srvResp) {
      const msg = srvResp.Message;
      if (msg) {
        infoText += '\nMessage: ' + msg;
      }
      const msgDet = srvResp.MessageDetail || srvResp.ExceptionMessage;
      if (msgDet) {
        infoText += '\nDetail: ' + msgDet;
      }
      if (msgDet && msgDet.indexOf('No action was found') === 0) {
        if (msgDet.indexOf('that matches the name') > 0) {
          infoText += '\n\nTip from 2sxc: you probably got the action-name wrong in your JS.';
        } else if (msgDet.indexOf('that matches the request.') > 0) {
          infoText += '\n\nTip from 2sxc: Seems like the parameters are the wrong amount or type.';
        }
      }
      if (msg && msg.indexOf('Controller') === 0 && msg.indexOf('not found') > 0) {
        infoText += '\n\nTip from 2sxc: you probably spelled the controller name wrong or forgot to remove the word \'controller\' from the call in JS. To call a controller called \'DemoController\' only use \'Demo\'.';
      }
      infoText += '\n\nif you are an advanced user you can learn more about what went wrong - discover how on 2sxc.org/help?tag=debug';
    }
    alert(infoText);
  }
  static {
    this.ɵfac = function HandleErrorsInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HandleErrorsInterceptor)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: HandleErrorsInterceptor,
      factory: HandleErrorsInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 41248:
/*!********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/interceptors/set-headers.interceptor.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SetHeadersInterceptor: () => (/* binding */ SetHeadersInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);


class SetHeadersInterceptor {
  constructor() {}
  intercept(req, next) {
    let modified;
    if (req.body instanceof FormData) {
      // sending files. Do not set content type so browser can add delimiter boundary automatically
      return next.handle(req);
    } else {
      modified = req.clone({
        setHeaders: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      });
      return next.handle(modified);
    }
  }
  static {
    this.ɵfac = function SetHeadersInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SetHeadersInterceptor)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SetHeadersInterceptor,
      factory: SetHeadersInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 87710:
/*!***************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/logging/class/class-logger-noop.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassLoggerNoop: () => (/* binding */ ClassLoggerNoop)
/* harmony export */ });
/* harmony import */ var _rx_debug_dbg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rx-debug-dbg */ 41901);
/* harmony import */ var _fn_fn_logger_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fn/fn-logger-noop */ 64884);


class ClassLoggerNoop {
  constructor(specs) {
    this.svcId = 'noop';
    this.name = 'noop';
    this.enableChildren = false;
    this.specs = specs ?? {};
  }
  get enabled() {
    return false;
  }
  extendName(addOn) {
    return this;
  }
  inherit(parent) {}
  forceEnable(enabled) {}
  a(message, data) {}
  aIfInList(list, subKey, data, message) {}
  aIf(key, data, message) {}
  rxTap(name, options) {
    return new _rx_debug_dbg__WEBPACK_IMPORTED_MODULE_0__.RxTapDebug(this, 'noop');
  }
  fn(name, data, message) {
    return new _fn_fn_logger_noop__WEBPACK_IMPORTED_MODULE_1__.FnLoggerNoOp();
  }
  fnCond(condition, name, data, message) {
    return new _fn_fn_logger_noop__WEBPACK_IMPORTED_MODULE_1__.FnLoggerNoOp();
  }
  fnIf(key, data, message) {
    return new _fn_fn_logger_noop__WEBPACK_IMPORTED_MODULE_1__.FnLoggerNoOp();
  }
  fnIfInList(key, list, subKey, data, message) {
    return new _fn_fn_logger_noop__WEBPACK_IMPORTED_MODULE_1__.FnLoggerNoOp();
  }
}

/***/ }),

/***/ 85966:
/*!***************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/logging/class/class-logger-real.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassLoggerReal: () => (/* binding */ ClassLoggerReal)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 66619);
/* harmony import */ var _fn_fn_logger_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fn/fn-logger-noop */ 64884);
/* harmony import */ var _fn_fn_logger_real__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fn/fn-logger-real */ 73796);
/* harmony import */ var _output_console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../output-console */ 61062);
/* harmony import */ var _rx_debug_dbg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rx-debug-dbg */ 41901);





/**
 * TODO:
 * - STOP using this directly, but instead use the classLog function
 * - Then rename to ClassLogger
 * - ...and move to sub-folder
 */
class ClassLoggerReal {
  /** Enabled state, combination of own enabled value + production-build info */
  get enabled() {
    return this.#enabled;
  }
  #enabled;
  #setEnabled(value) {
    this.#enabled = value && !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production;
  }
  constructor(logSpecs) {
    /** Special random ID to identify a specific service and detect reuse or separate instances  */
    this.svcId = Math.random().toString(36).substring(2, 5);
    this.#rename(logSpecs.name);
    // Bypass the default setEnabled, as we want to be able to override in production
    this.#enabled = logSpecs.enabled;
    this.enableChildren = logSpecs.enableChildren ?? false;
    this.specs = logSpecs.specs;
  }
  #rename(name) {
    this.name = name;
    this.nameWithSvcId = `${name}-${this.svcId}`;
  }
  extendName(addOn) {
    this.#rename(`${this.name}${addOn}`);
    return this;
  }
  inherit(parent) {
    // if already enabled, don't do anything; inherit can only activate it
    if (this.enabled) return;
    this.#setEnabled(parent.enabled);
    // if this results in log enabled, inform the console.
    // otherwise it's really hard to find out why a log is on
    if (parent.enabled) this.a(`Enabled: Inheriting log settings from parent ${parent.nameWithSvcId}`);
  }
  forceEnable(enabled) {
    if (enabled == null || this.enabled) return;
    if (enabled) this.a('Enabled: Forced to enable log');
    this.#setEnabled(enabled);
  }
  /** Internal helper to really log - if enabled */
  #a(message, data, autoPad = true) {
    if (!this.enabled) return;
    message ??= '';
    if (message && autoPad) message = ` ${message}`;
    data = typeof data === 'function' ? data() : data;
    (0,_output_console__WEBPACK_IMPORTED_MODULE_3__.consoleLogObject)({
      message: `${this.nameWithSvcId}${message}`,
      data
    });
  }
  /**
   * Special 'a' = add log helper to better diagnose what is happening
   */
  a(message, data) {
    this.#a(message, data);
  }
  aIf(key, data, message) {
    if (this.enabled && this.#ifInSpecs(key)) this.#a(message, data);
  }
  aIfInList(list, subKey, data, message) {
    if (this.enabled && this.#ifInSpecsList(list, subKey)) this.#a(message, data);
  }
  /** Create a special logger for rx logging */
  rxTap(name, {
    enabled = true,
    jsonify = true
  } = {
    enabled: true,
    jsonify: true
  }) {
    return new _rx_debug_dbg__WEBPACK_IMPORTED_MODULE_4__.RxTapDebug(this, name, enabled, jsonify);
  }
  /**
   *
   * TODO: @2pp - refactor all uses to just use the fnIf method? - but WAIT till delegate by 2dm
   *
   * @param name
   * @param data
   * @param message
   * @returns
   */
  fn(name, data, message) {
    return new _fn_fn_logger_real__WEBPACK_IMPORTED_MODULE_2__.FnLoggerReal(this, name, message, data);
  }
  /**
   * Create a logger function that will only log if the condition is true
   */
  fnCond(condition, name, data, message) {
    // create real logger if condition is true, or if this logger is disabled anyhow
    return condition || !this.enabled ? this.fn(name, data, message) : new _fn_fn_logger_noop__WEBPACK_IMPORTED_MODULE_1__.FnLoggerNoOp();
  }
  /**
   * Create a logger function that will only log if the condition is true.
   * The condition must come from the specs object.
   */
  fnIf(key, data, message) {
    // create real logger if condition is true, or if this logger is disabled anyhow
    return this.enabled && this.#ifInSpecs(key) ? this.fn(key, data, message) : new _fn_fn_logger_noop__WEBPACK_IMPORTED_MODULE_1__.FnLoggerNoOp();
  }
  fnIfInList(key, list, subKey, data, message) {
    return this.enabled && this.#ifInSpecs(key) && this.#ifInSpecsList(list, subKey) ? this.fn(`${key}[${subKey}]`, data, message) : new _fn_fn_logger_noop__WEBPACK_IMPORTED_MODULE_1__.FnLoggerNoOp();
  }
  /** Helper to check if a key is in the specs and is true, or 'all' is true */
  #ifInSpecs(key) {
    return this.specs && !!(this.specs[key] || this.specs['all']);
  }
  #ifInSpecsList(list, subKey) {
    const keys = this.specs?.[list];
    return keys && (keys.includes(subKey) || keys.includes('*'));
  }
}

/***/ }),

/***/ 64884:
/*!*********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/logging/fn/fn-logger-noop.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FnLoggerNoOp: () => (/* binding */ FnLoggerNoOp)
/* harmony export */ });
/**
 * No-Operation logger.
 */
class FnLoggerNoOp {
  constructor() {
    this.enabled = false;
  }
  values(data, intro) {}
  a(message, data) {}
  r(result, message, showData) {
    return result;
  }
  rSilent(result, message) {
    return result;
  }
  rNull(message) {
    return null;
  }
  rTrue(message) {
    throw true;
  }
  rFalse(message) {
    throw false;
  }
  end(message, data) {}
}

/***/ }),

/***/ 73796:
/*!*********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/logging/fn/fn-logger-real.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FnLoggerReal: () => (/* binding */ FnLoggerReal)
/* harmony export */ });
/* harmony import */ var _output_console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../output-console */ 61062);

class FnLoggerReal {
  constructor(parent, fnName, message, data) {
    this.parent = parent;
    this.fnName = fnName;
    this.#a(message, data);
  }
  get enabled() {
    return this.parent.enabled;
  }
  /** Internal helper to really log - if enabled */
  #a(message, data, autoPad = true) {
    if (!this.parent.enabled) return;
    message ??= '';
    if (message && autoPad) message = ` ${message}`;
    data = typeof data === 'function' ? data() : data;
    (0,_output_console__WEBPACK_IMPORTED_MODULE_0__.consoleLogObject)({
      message: `${this.parent.nameWithSvcId}.${this.fnName}()${message}`,
      data
    });
  }
  a(message, data) {
    this.#a('/' + message, data, false);
  }
  values(data, intro) {
    if (!data) return;
    if (!this.parent.enabled) return;
    intro = intro ? ` ${intro} ` : '';
    this.#a('/values' + intro, data, false);
  }
  /** Return result and log it */
  r(result, message) {
    this.#a('/return' + (message ? ' ' + message : ''), {
      result: result
    }, false);
    return result;
  }
  /** Return without logging the result data */
  rSilent(result, message) {
    this.#a('/return' + (message ? ' ' + message : ''), null, false);
    return result;
  }
  /** Return NULL */
  rNull(message) {
    this.#a('/return NULL' + (message ? ' ' + message : ''), null, false);
    return null;
  }
  rTrue(message) {
    this.#a('/return TRUE' + (message ? ' ' + message : ''), null, false);
    return true;
  }
  rFalse(message) {
    this.#a('/return FALSE' + (message ? ' ' + message : ''), null, false);
    return false;
  }
  /** End without return but show message and optional data */
  end(message, data) {
    this.#a('/end' + (message ? ' ' + message : ''), data, false);
  }
}

/***/ }),

/***/ 34435:
/*!*********************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/logging/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   classLog: () => (/* reexport safe */ _logging__WEBPACK_IMPORTED_MODULE_0__.classLog),
/* harmony export */   classLogEnabled: () => (/* reexport safe */ _logging__WEBPACK_IMPORTED_MODULE_0__.classLogEnabled),
/* harmony export */   commonSpecs: () => (/* binding */ commonSpecs)
/* harmony export */ });
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logging */ 98006);
/*
 * Internal API Surface of logging.
 *
 * Please make sure you only use this index file for imports in typescripts outside of this folder.
 * This is just for consistency.
 */

const commonSpecs = {
  all: false,
  constructor: false
};

/***/ }),

/***/ 5099:
/*!***************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/logging/log-manager.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogManager: () => (/* binding */ LogManager)
/* harmony export */ });
/* harmony import */ var _user_state_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user/state-manager */ 58798);
/* harmony import */ var lodash_es_isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/isEqual */ 92434);


let logManager;
const storePrefix = 'logSpecs';
class LogManager {
  /**
   * Main external function to get the specs for activating a logger.
   *
   * Goal are
   * - to register the logger - so the UI can show that it exists.
   * - to get any alternate specs for the logger, in case the UI changes the settings.
   *
   * @param specs initial / default specs according to code
   * @returns
   */
  static getSpecs(specs) {
    const lm = LogManager.singleton();
    if (lm.debug) debugger;
    // Check if we already did all the merge etc.
    // and should just return the existing specs
    const existing = lm.cache[specs.name];
    if (existing) return existing;
    // Check if we have a configured version of the specs
    const configured = lm.state.cache[specs.name];
    const merged = {
      enabled: false,
      ...specs,
      ...configured
    };
    lm.cache[specs.name] = merged;
    return merged;
  }
  /** Get access to the singleton log manager */
  static singleton() {
    if (logManager) return logManager;
    // Since the code for the logger could be in multiple bundles, we must ensure we only have one instance
    const win = window;
    if (win.logManager) return logManager = win.logManager;
    win.logManager = logManager = new LogManager();
    return logManager;
  }
  /** Ensures that this class can only be constructed here */
  constructor() {
    this.cache = {};
    this.state = new _user_state_manager__WEBPACK_IMPORTED_MODULE_0__.StateManagerSession(storePrefix);
  }
  /** Updates the in-memory specs and saves them to the state */
  updateSpecs(updatedSpecs) {
    // Iterate through the updated specs to ensure all changes are reflected
    Object.keys(updatedSpecs).forEach(name => {
      const existing = this.cache[name];
      // Only update if the log specs are different
      if (!(0,lodash_es_isEqual__WEBPACK_IMPORTED_MODULE_1__["default"])(existing?.specs, updatedSpecs[name].specs)) {
        this.cache[name] = updatedSpecs[name];
        this.state.add(name, updatedSpecs[name]);
      }
    });
  }
  /** Get all specs */
  get allSpecs() {
    return this.cache;
  }
  get allConfigured() {
    return this.state.cache;
  }
  /** Merged version of all configured and cached specs */
  get mergeAllSpecs() {
    const mergedSpecs = {
      ...this.cache
    };
    Object.keys(this.state.cache).forEach(name => {
      mergedSpecs[name] = {
        ...mergedSpecs[name],
        ...this.state.cache[name]
      };
    });
    // Removes all user Configs, because they are saved with the logs
    Object.keys(mergedSpecs).forEach(key => {
      if (key.startsWith(storePrefix)) {
        delete mergedSpecs[key];
      }
    });
    return mergedSpecs;
  }
  get specsOfConfigured() {
    const stateCache = this.state.cache;
    return Object.keys(stateCache).map(k => this.cache[k] || stateCache[k]);
  }
  configure(specs) {
    delete this.cache[specs.name];
    this.state.add(specs.name, specs);
  }
  toggle(name, state) {
    const cached = this.cache[name];
    const configured = this.state.cache[name];
    const enabled = state ?? !configured?.enabled;
    const specs = configured?.specs || cached?.specs || {};
    const newConfig = {
      name,
      enabled,
      specs
    };
    this.configure(newConfig);
    return state;
  }
}

/***/ }),

/***/ 98006:
/*!***********************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/logging/logging.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   classLog: () => (/* binding */ classLog),
/* harmony export */   classLogEnabled: () => (/* binding */ classLogEnabled)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ 66619);
/* harmony import */ var _class_class_logger_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class/class-logger-noop */ 87710);
/* harmony import */ var _class_class_logger_real__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class/class-logger-real */ 85966);
/* harmony import */ var _log_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-manager */ 5099);




//
// This is a special section for logging.
// A core goal is that logging will never break the application, so it should be null-safe
// and work even if for example the .log property is null.
/**
 * Main entry function to create a logger for a class.
 *
 * Usage: `log = classLog({MyClass})` // this will allow it to auto-detect the class name
 *
 * TODO: If logging is disabled, it will create a dummy logger that does nothing.
 * - wait with this, until we've refactored everything to use the new classLog and the logFn / logFnIf functions
 * @param owner a mini-class with 1 property, being the name of the class; optionally also the name as string, but not recommended
 * @param specs optional object containing further specs. If provided, can be used in `log.fnIf()` calls
 * @param pleaseUseClassLogEnabled blocker: to enable logging, please use classLogEnabled(...) so it's easier to find and disable again before release
 * @returns
 */
function classLog(owner, specs, pleaseUseClassLogEnabled, enabled = false) {
  // Pick the first key as the name of the class
  const name = (() => {
    if (!owner) return 'unknown';
    if (typeof owner === 'string') return owner;
    return (owner ? Object.keys(owner)[0] : null) ?? 'unknown';
  })();
  // Build temporary logSpecs object
  const logSpecs = {
    // enabled should be false in production - unless overloaded below by the LogManager
    enabled: enabled && !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production,
    name,
    specs: specs ?? {}
  };
  // Get final / real logSpecs, and register these logs in the LogManager for run-time configuration
  const mainSpecs = _log_manager__WEBPACK_IMPORTED_MODULE_3__.LogManager.getSpecs(logSpecs);
  return mainSpecs.enabled ? new _class_class_logger_real__WEBPACK_IMPORTED_MODULE_2__.ClassLoggerReal(mainSpecs) : new _class_class_logger_noop__WEBPACK_IMPORTED_MODULE_1__.ClassLoggerNoop(specs);
}
function classLogEnabled(owner, specs) {
  return classLog(owner, specs, null, true);
}

/***/ }),

/***/ 61062:
/*!******************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/logging/output-console.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   consoleLogObject: () => (/* binding */ consoleLogObject)
/* harmony export */ });
/**
 * Log to Console lightweight (no stack).
 * Uses a short, cryptic name log-console-internal to avoid it being used by mistake.
*/
function consoleLogObject({
  message,
  callStack = false,
  data = null
}) {
  // Make prefix uppercase if not always
  const prefix = '🪵 ';
  message = prefix + message;
  // New lightweight log, without the entire trace / call stack
  if (callStack != true) {
    if (!data) return console.log(`${message}`);
    const keys = Object.keys(data);
    if (keys.length === 0) return console.log(`${message}`);
    if (keys.length === 1) {
      const key = keys[0];
      const show = data[key];
      if (typeof show === 'string') return console.log(`${message} [string:${show.length}] '${key}'='${show}'`);
      return console.log(`${message} [${typeof show}] '${key}'=`, show);
    }
    console.log(`${message} [${keys.length} data-items]`, data);
    return;
  }
  console.groupCollapsed(`${message}`, data);
  // tslint:disable-next-line:no-console
  console.trace();
  console.groupEnd();
}

/***/ }),

/***/ 41901:
/*!****************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/logging/rx-debug-dbg.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RxTapDebug: () => (/* binding */ RxTapDebug)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 98764);

/**
 * Special debug helper for RxJS observables
 */
class RxTapDebug {
  /**
   * Constructor which will know the context and name of the stream it's for
   * @param logger the main objects logger with name etc.
   * @param name name of the stream we're logging
   * @param jsonify will JSON.stringify the data if true - this is much faster as the browser doesn't block the debugger as much
   */
  constructor(logger, name, enabled = true, jsonify = true) {
    this.logger = logger;
    this.name = name;
    this.enabled = enabled;
    this.jsonify = jsonify;
  }
  /**
   * Generate a rxjs tap function that logs the data with the current context
   * Inspired by https://blog.angular-university.io/debug-rxjs/
   * @param key
   * @param subName
   * @param message
   * @returns
   */
  generateFn(key, subName, message) {
    // if not enabled, just return the original observable
    if (!this.enabled || !this.logger.enabled) return source => source;
    const label = `${this.name}/${key}${subName ? `-${subName}` : ''}`;
    let counter = 0;
    // return a function that takes an observable and returns an observable
    // and logs the data, and counts every access
    return source => source.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)(data => {
      const showData = data == null ? data // if null or undefined, just show it
      : this.jsonify ? JSON.parse(JSON.stringify(data)) : data;
      return this.logger.a(label + ` #${counter++}`, {
        showData
      });
    }));
  }
  /** Create a sub-rx-tap (not yet tested as of 2024-06-11) */
  rxTap(name, {
    enabled = true,
    jsonify = true
  } = {
    enabled: true,
    jsonify: true
  }) {
    return new RxTapDebug(this.logger, `${this.name}-${name}`, enabled, jsonify);
  }
  /**
   * Recommended to use at the beginning of a pipe to show when inbound signals came
   * @param subName optional sub-name, to distinguish between different uses
   */
  pipe(subName) {
    return this.generateFn('pipe', subName);
  }
  /**
   * Recommended after map to show what the map did
   * @param subName optional sub-name, to distinguish between different uses
   */
  map(subName) {
    return this.generateFn('map', subName);
  }
  /**
   * Recommended after filter to show what the filter did
   * @param subName optional sub-name, to distinguish between different uses
   */
  filter(subName) {
    return this.generateFn('filter', subName);
  }
  /**
   * Recommended after shareReplay
   * @param subName optional sub-name, to distinguish between different uses
   * @returns
   */
  shareReplay(subName) {
    return this.generateFn('shareReplay', subName);
  }
  /**
   * Recommended after distinctUntilChanged
   * @param subName optional sub-name, to distinguish between different uses
   * @returns
   */
  distinctUntilChanged(subName) {
    return this.generateFn('distinctUntilChanged', subName);
  }
  start() {
    return this.generateFn('start');
  }
  end() {
    return this.generateFn('end');
  }
  step(num) {
    return this.generateFn('step' + num);
  }
  part(subName) {
    return this.generateFn('part', subName);
  }
  read(subName) {
    return this.generateFn('read', subName);
  }
}

/***/ }),

/***/ 70334:
/*!******************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/models/edit-form.model.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditPrep: () => (/* binding */ EditPrep)
/* harmony export */ });
/* harmony import */ var _constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/eav.constants */ 50052);

// 2dm - new helper to reduce code when creating item identifiers
// TODO: @2dg - try to replace as many direct object creations with this as possible
class EditPrep {
  static editId(id) {
    return {
      EntityId: id
    };
  }
  static newFromType(contentType, prefill) {
    return {
      ContentTypeName: contentType,
      ...(prefill && {
        Prefill: prefill
      })
    };
  }
  static newMetadataFromInfo(contentTypeName, itemFor) {
    return {
      ContentTypeName: contentTypeName,
      For: {
        Target: itemFor.target ?? itemFor.targetType.toString(),
        TargetType: itemFor.targetType,
        ...(itemFor.keyType === _constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.keyTypes.guid && {
          Guid: itemFor.key
        }),
        ...(itemFor.keyType === _constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.keyTypes.number && {
          Number: parseInt(itemFor.key, 10)
        }),
        ...(itemFor.keyType === _constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.keyTypes.string && {
          String: itemFor.key
        })
      }
    };
  }
  // TODO: @2dg - TO FIND where this should be used, look for "For:" in the code
  static newMetadata(key, typeName, keyDef, singleton) {
    return {
      ContentTypeName: typeName,
      For: EditPrep.createFor(keyDef, key, singleton)
    };
  }
  static createFor(keyDef, key, singleton) {
    return {
      Target: keyDef.target,
      TargetType: keyDef.targetType,
      ...(typeof key == 'number' ? {
        Number: key
      } : keyDef.keyType == 'guid' ? {
        Guid: key
      } : {
        String: key
      }),
      ...(singleton && {
        Singleton: true
      })
    };
  }
  static constructMetadataInfo(targetType, keyType, key) {
    const specs = Object.values(_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata).find(m => m.targetType === targetType);
    return {
      target: specs?.target ?? targetType.toString(),
      targetType: targetType,
      key: key,
      keyType: keyType
    };
  }
  static relationship(parent, field, index = 0, add = null) {
    return {
      Parent: parent,
      Field: field,
      Index: index,
      Add: add
    };
  }
  static copy(contentType, id) {
    return {
      ContentTypeName: contentType,
      DuplicateEntity: id
    };
  }
}

/***/ }),

/***/ 68873:
/*!************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/services/context.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Context: () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var _constants_session_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/session.constants */ 38172);
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logging */ 34435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);



const logSpecs = {
  all: false,
  constructor: false,
  init: false,
  initRoot: false
};
/**
 * Context is used to display information about the current app in various depths.
 * In other words, if you open another app in a deeper dialog in the app on Apps Management
 * (the component is deeper), you get the information from this app and not the initial app.
 */
class Context {
  constructor(parentContext) {
    this.log = (0,_logging__WEBPACK_IMPORTED_MODULE_1__.classLog)({
      Context
    }, logSpecs);
    /** Determines if the context is ready to use, and everything is initialized */
    this.ready = false;
    this.log.a(`constructor; hasParent: ${parentContext != null}`, {
      parentContext,
      'parentId': parentContext?.id
    });
    this.parent = parentContext;
    // spm NOTE: I've given id to every context to make it easier to follow how things work
    if (!window.contextId) window.contextId = 0;
    this.id = window.contextId++;
    this.log.a('Context.constructor', {
      this: this
    });
  }
  /** The current Zone ID */
  get zoneId() {
    return this._zoneId || (this._zoneId = this.#routeNum(_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.keyZoneId) || this.parent?.zoneId);
  }
  /** The current App ID */
  get appId() {
    return this._appId != null ? this._appId : this._appId = this.#routeNum(_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.keyAppId) || this.parent?.appId;
  }
  /** Tab Id is global */
  get tabId() {
    return window.$2sxc.env.page();
  }
  /** Content Block Id is global */
  get contentBlockId() {
    return this._contentBlockId || (this._contentBlockId = this.#routeNum(_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.keyContentBlockId) || this.parent?.contentBlockId);
  }
  /** Module Id is global */
  get moduleId() {
    return this._moduleId || (this._moduleId = this.#routeNum(_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.keyModuleId) || this.parent?.moduleId);
  }
  /**
   * This is the initializer at entry-components of modules.
   * It ensures that within that module, the context has the values given by the route.
   *
   * Note: 2024-07-01 2dm: a long time ago the context was recreated for every single component, so init was also called for every component.
   * But after going standalone, thi doesn't happen any more, and the re-init seems to kill the context from previous,
   * which is why we skip this if already ready.
   * This is still a bit shaky, not sure if this should be the final implementation.
   */
  init(route) {
    const l = this.log.fnIf('init', {
      route
    }, `- previously ready: '${this.ready}'`);
    // New prevent-multiple-init checks 2dm 2024-07-01
    if (this.ready) return l.r(this, 'Already ready, skipping init');
    this.routeSnapshot = route?.snapshot;
    this.#clearCachedValues();
    this.ready = route != null;
    this.log.a('init done', {
      this: this,
      'appId': this.appId,
      'zoneId': this.zoneId,
      'contentBlockId': this.contentBlockId,
      'moduleId': this.moduleId
    });
  }
  initRoot() {
    const l = this.log.fnIf('initRoot');
    this._zoneId = this.#sessionNumber(_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.keyZoneId);
    this._contentBlockId = this.#sessionNumber(_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.keyContentBlockId);
    this._moduleId = this.#sessionNumber(_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.keyModuleId);
    this._appId = this.#sessionNumber(_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.keyAppId);
    if (!this._zoneId) throw new Error('Context is missing some of the required parameters');
    this.ready = true;
    l.r(this);
  }
  #sessionNumber(name) {
    const result = sessionStorage.getItem(name);
    if (result === null) return null;
    const num = parseInt(result, 10);
    return isNaN(num) ? null : num;
  }
  /**
   * Get a number from the route, or optionally its parents.
   * Returns value in route or null
   */
  #routeNum(name) {
    // catch case where state is null, like when the recursive parent is in use
    if (this.routeSnapshot == null) {
      return null;
    }
    const paramName = name.substring(_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.prefix.length);
    const result = this.routeSnapshot.paramMap.get(paramName);
    if (result !== null) {
      const num = parseInt(result, 10);
      return isNaN(num) ? null : num;
    }
  }
  /**
   * Clears cached values. Required when one module instance is opened multiple times,
   * e.g. Apps Management -> App Admin for appId 2 -> back -> App Admin for appId 17.
   * Module is reused, and so is context and it contains values for previous appId.
   */
  #clearCachedValues() {
    this._zoneId = null;
    this._appId = null;
    this._contentBlockId = null;
    this._moduleId = null;
  }
  static {
    this.ɵfac = function Context_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Context)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](Context, 12));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: Context,
      factory: Context.ɵfac
    });
  }
}

/***/ }),

/***/ 39431:
/*!**************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/services/global-config.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalConfigService: () => (/* binding */ GlobalConfigService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 49074);
/* harmony import */ var _constants_session_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/session.constants */ 38172);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);






class GlobalConfigService {
  constructor(snackBar) {
    this.snackBar = snackBar;
    this.debugState = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null);
    this.isDebug = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => !!this.debugState()?.allowDebugMode && !!this.debugState()?.debugEnabled);
    /** This observable is a left-over, try to remove once more is refactored */
    this.debugEnabled$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.toObservable)(this.isDebug);
    const initial = {
      id: 0,
      debugEnabled: sessionStorage.getItem(_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.keyDebug) === 'true',
      allowDebugMode: false
    };
    this.debugState.set(initial);
  }
  allowDebug(allow) {
    const oldConfig = this.debugState();
    if (oldConfig.allowDebugMode === allow) return;
    const newConfig = {
      ...oldConfig,
      allowDebugMode: allow
    };
    this.debugState.set(newConfig);
  }
  toggleDebugEnabled() {
    const oldConfig = this.debugState();
    if (!oldConfig.allowDebugMode) {
      this.snackBar.open('You do not have permissions to enter developer mode', null, {
        duration: 3000
      });
      return;
    }
    const newConfig = {
      ...oldConfig,
      debugEnabled: !oldConfig.debugEnabled
    };
    this.debugState.set(newConfig);
    this.snackBar.open(newConfig.debugEnabled ? 'developer mode on' : 'developer mode off', null, {
      duration: 3000
    });
  }
  static {
    this.ɵfac = function GlobalConfigService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || GlobalConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: GlobalConfigService,
      factory: GlobalConfigService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 96474:
/*!**********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/services/http-service-base.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpServiceBase: () => (/* binding */ HttpServiceBase)
/* harmony export */ });
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 81955);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/context */ 68873);





/**
 * Base class for all services that need to make HTTP calls.
 * Provides important typical information and services, especially
 * * apiUrl(name) - to get the full API URL
 * * appId - the current app id
 * * zoneId - the current zone id
 */
class HttpServiceBase {
  #dnnContext;
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    this.context = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_shared_services_context__WEBPACK_IMPORTED_MODULE_0__.Context);
    this.#dnnContext = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_3__.Context);
  }
  /**
   * Convert a short 2sxc-url into the correct full URL on the system.
   * @param name 2sxc-style short url
   * @returns
   */
  apiUrl(name) {
    return this.#dnnContext.$2sxc.http.apiUrl(name);
  }
  /**
   * The current app id
   */
  get appId() {
    return this.context.appId.toString();
  }
  /**
   * The current zone id
   */
  get zoneId() {
    return this.context.zoneId.toString();
  }
  getHttpApiUrl(endpoint, options) {
    const url = this.apiUrl(endpoint);
    return this.http.get(url, options);
  }
  getHttp(endpoint, options) {
    return this.http.get(endpoint, options);
  }
  getAndWrite(endpoint, options, target) {
    this.getHttp(endpoint, options).subscribe(d => {
      target.set(d);
    });
  }
  getSignal(endpoint, options, initial) {
    const target = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(initial);
    this.getHttpApiUrl(endpoint, options).subscribe(d => {
      target.set(d);
    });
    return target;
  }
  postSignal(endpoint, body, options, initial) {
    const target = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(initial);
    this.http.post(this.apiUrl(endpoint), body, options).subscribe(d => {
      target.set(d);
    });
    return target;
  }
  static {
    this.ɵfac = function HttpServiceBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HttpServiceBase)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HttpServiceBase,
      factory: HttpServiceBase.ɵfac
    });
  }
}

/***/ }),

/***/ 98503:
/*!******************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/signals/computed-cache.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComputedCacheHelper: () => (/* binding */ ComputedCacheHelper)
/* harmony export */ });
/* harmony import */ var _signal_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signal.utilities */ 67993);

/**
 * Special helper with Signals to cache computed signals.
 */
class ComputedCacheHelper {
  static proxy(name = 'cache-name?', factory, options = null) {
    const cch = new ComputedCacheHelper(name);
    const proxy = cch.buildProxy(factory, options);
    return proxy;
  }
  constructor(name = 'cache-name?') {
    this.name = name;
    this.cache = {};
  }
  get(key) {
    return this.cache[key];
  }
  buildProxy(factory, options = null) {
    if (this.#proxy) throw new Error(`Proxy already built; it can't be again, as the factory could be unexpectedly different.`);
    this.#proxy = new Proxy(this.cache, {
      get: (_, fieldName) => {
        if (typeof fieldName === 'string') return this.getOrCreate(fieldName, factory(fieldName), options);
        throw new Error(`Invalid name: '${fieldName?.toString()}'`);
      }
    });
    return this.#proxy;
  }
  #proxy;
  getOrCreate(key, factory, options = null) {
    return this.getOrCreateWithInfo(key, factory, options).signal;
  }
  getOrCreateWithInfo(key, factory, options = null) {
    if (this.cache[key]) return {
      signal: this.cache[key],
      isNew: false
    };
    const sig = (0,_signal_utilities__WEBPACK_IMPORTED_MODULE_0__.computedObj)(`${this.name}-${key}`, () => factory());
    return {
      signal: this.set(key, sig),
      isNew: true
    };
  }
  set(key, value) {
    this.cache[key] = value;
    return value;
  }
  delete(key) {
    delete this.cache[key];
  }
  clear() {
    Object.keys(this.cache).forEach(key => {
      delete this.cache[key];
    });
  }
}

/***/ }),

/***/ 67993:
/*!********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/signals/signal.utilities.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computedObj: () => (/* binding */ computedObj),
/* harmony export */   computedWithPrev: () => (/* binding */ computedWithPrev),
/* harmony export */   getVersion: () => (/* binding */ getVersion),
/* harmony export */   httpToSignal: () => (/* binding */ httpToSignal),
/* harmony export */   named: () => (/* binding */ named),
/* harmony export */   signalObj: () => (/* binding */ signalObj)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_core_primitives_signals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core/primitives/signals */ 85689);
/* harmony import */ var lodash_es_isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/isEqual */ 92434);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 64334);




/**
 * Named signal with object equality check
 * @param name name for debugging
 * @param initialValue initial value to start the signal
 * @returns
 */
function signalObj(name, initialValue) {
  const sig = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(initialValue, {
    equal: lodash_es_isEqual__WEBPACK_IMPORTED_MODULE_1__["default"]
  });
  return named(name, sig);
}
function computedObj(name, computation) {
  const comp = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(computation, {
    equal: lodash_es_isEqual__WEBPACK_IMPORTED_MODULE_1__["default"]
  }); // needs recast, because isEqual changes it to Signal<any>
  return named(name, comp);
}
// TODO: 2dg use this for most http signals
// Either in the place where it is called, or if the service is only used in one place, in the service itself to return a signal instead
/**
 * Convert a single http get into a simple signal.
 * It will initialize with the optional initialValue and then update with the httpGet result.
 * As such, it has a first value, and will only update once.
 * @param name name of the signal for debugging
 * @param httpRequest the http request
 * @param initialValue optional initial value
 * @returns
 */
function httpToSignal(name, httpRequest, initialValue = null) {
  const sig = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(initialValue, {
    equal: lodash_es_isEqual__WEBPACK_IMPORTED_MODULE_1__["default"]
  });
  // take(1) to only get the first value, and close the subscription right afterwards - which is what happens to all normal http requests
  httpRequest.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(value => sig.set(value));
  return named(name, sig.asReadonly());
}
function named(name, signal) {
  if (!signal) return signal;
  const sigAny = signal;
  sigAny.debugName = name;
  if (!sigAny[_angular_core_primitives_signals__WEBPACK_IMPORTED_MODULE_3__.SIGNAL]) return signal;
  sigAny[_angular_core_primitives_signals__WEBPACK_IMPORTED_MODULE_3__.SIGNAL].debugName = name;
  return signal;
}
// wip atm unused
/** Slightly unclean signal with previous value */
// https://github.com/angular/angular/issues/54339
function computedWithPrev(computation, initial) {
  let previous = initial;
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    const newValue = computation(previous);
    previous = newValue;
    return newValue;
  }, {
    equal: lodash_es_isEqual__WEBPACK_IMPORTED_MODULE_1__["default"]
  });
}
function getVersion(signal) {
  if (!signal) return null;
  return signal[_angular_core_primitives_signals__WEBPACK_IMPORTED_MODULE_3__.SIGNAL]?.version ?? null;
}

/***/ }),

/***/ 86021:
/*!*************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/translation/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateLoaderWithErrorHandling: () => (/* reexport safe */ _translate_loader_with_error_handling__WEBPACK_IMPORTED_MODULE_1__.TranslateLoaderWithErrorHandling),
/* harmony export */   buildTranslateConfiguration: () => (/* reexport safe */ _translate_configuration__WEBPACK_IMPORTED_MODULE_0__.buildTranslateConfiguration)
/* harmony export */ });
/* harmony import */ var _translate_configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translate-configuration */ 43356);
/* harmony import */ var _translate_loader_with_error_handling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translate-loader-with-error-handling */ 76657);



/***/ }),

/***/ 43356:
/*!*******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/translation/translate-configuration.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildTranslateConfiguration: () => (/* binding */ buildTranslateConfiguration)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ 90852);


function buildTranslateConfiguration(factory) {
  const config = {
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateLoader,
      useFactory: factory,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient]
    },
    defaultLanguage: 'en',
    isolate: true
  };
  return config;
}

/***/ }),

/***/ 97632:
/*!********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/translation/translate-loader-factory.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   translateLoaderFactory: () => (/* binding */ translateLoaderFactory)
/* harmony export */ });
/* harmony import */ var _translate_loader_with_error_handling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translate-loader-with-error-handling */ 76657);

// AoT requires an exported function for factories
// at least according to https://github.com/ngx-translate/http-loader
function translateLoaderFactory(http) {
  return new _translate_loader_with_error_handling__WEBPACK_IMPORTED_MODULE_0__.TranslateLoaderWithErrorHandling(http, './i18n/', `.js?${window.sxcVersion}`);
}

/***/ }),

/***/ 76657:
/*!********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/translation/translate-loader-with-error-handling.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateLoaderWithErrorHandling: () => (/* binding */ TranslateLoaderWithErrorHandling)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 59452);

/**
 * This loader should catch a 404 if the file doesn't exist and not result in errors.
 * https://stackoverflow.com/questions/47391613/how-to-set-a-fallback-assets-i18n-en-json-when-url-is-not-available-ngx-trans
 */
class TranslateLoaderWithErrorHandling {
  constructor(http, prefix, suffix) {
    this.http = http;
    this.prefix = prefix;
    this.suffix = suffix;
  }
  getTranslation(lang) {
    return this.http.get(`${this.prefix}${lang}${this.suffix}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.catchError)(error => {
      console.warn(`Translation: Failed to get language '${lang}' from ${this.prefix}`, error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)({});
    }));
  }
}

/***/ }),

/***/ 58798:
/*!**************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/user/state-manager.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateManager: () => (/* binding */ StateManager),
/* harmony export */   StateManagerLocal: () => (/* binding */ StateManagerLocal),
/* harmony export */   StateManagerSession: () => (/* binding */ StateManagerSession)
/* harmony export */ });
const logThis = false;
const separator = ":";
class StateManager {
  constructor(storage, prefix, configName) {
    this.storage = storage;
    this.prefix = prefix;
    this.configName = configName;
    this.#storeKey = this.prefix + (this.configName ? `${separator}${this.configName}` : '');
  }
  #storeKey;
  /** Get the current list of these settings */
  get cache() {
    return this.#cache ??= this.#load() ?? {};
  }
  #cache;
  get(name) {
    return this.cache[name];
  }
  add(name, specs) {
    this.cache[name] = specs;
    this.#save(this.cache);
  }
  remove(name) {
    delete this.cache[name];
    this.#save(this.cache);
  }
  reset() {
    this.#save(this.#cache = {});
  }
  getNamesInStoreWithPrefix() {
    const result = Array.from(this.storage).filter(([key]) => key === this.prefix || key.startsWith(this.prefix + separator)).map(([key]) => key);
    return result;
  }
  #save(data) {
    this.storage.setItem(this.#storeKey, JSON.stringify(data));
  }
  #load() {
    const data = this.storage.getItem(this.#storeKey);
    const result = data ? JSON.parse(data) : {};
    if (logThis && result) console.log(`Loaded log specs for ${Object.keys(result).length} items`, result);
    return result;
  }
}
/**
 * State management for the log manager.
 * It will store it in the current session.
 */
class StateManagerSession extends StateManager {
  constructor(prefix, configName) {
    super(window.sessionStorage, prefix, configName);
  }
}
class StateManagerLocal extends StateManager {
  constructor(prefix, configName) {
    super(window.localStorage, prefix, configName);
  }
}

/***/ }),

/***/ 66619:
/*!*********************************************************!*\
  !*** ./projects/eav-ui/src/environments/environment.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false
};

/***/ }),

/***/ 5302:
/*!*************************************!*\
  !*** ./projects/eav-ui/src/main.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environments/environment */ 66619);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 41397);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.config */ 34306);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 80436);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_2__.appConfig).catch(err => console.error(err));

/***/ }),

/***/ 11194:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/eav-ui/src/app/assets/icons/code-curly.svg ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M2.98187 13.2188C3.38292 13.2083 3.70844 13.1016 3.95844 12.8984C4.21365 12.6901 4.38292 12.4062 4.46625 12.0469C4.54958 11.6875 4.59385 11.0729 4.59906 10.2031C4.60427 9.33333 4.6199 8.76042 4.64594 8.48438C4.69281 8.04688 4.77875 7.69531 4.90375 7.42969C5.03396 7.16406 5.19281 6.95312 5.38031 6.79688C5.56781 6.63542 5.8074 6.51302 6.09906 6.42969C6.29698 6.3776 6.6199 6.35156 7.06781 6.35156H7.50531V7.57812H7.26312C6.72146 7.57812 6.36208 7.67708 6.185 7.875C6.00792 8.06771 5.91937 8.5026 5.91937 9.17969C5.91937 10.5443 5.89073 11.4062 5.83344 11.7656C5.73969 12.3229 5.57823 12.7526 5.34906 13.0547C5.1251 13.3568 4.77094 13.625 4.28656 13.8594C4.85948 14.099 5.27354 14.4661 5.52875 14.9609C5.78917 15.4505 5.91937 16.2552 5.91937 17.375C5.91937 18.3906 5.92979 18.9948 5.95062 19.1875C5.99229 19.5417 6.09646 19.7891 6.26312 19.9297C6.435 20.0703 6.76833 20.1406 7.26312 20.1406H7.50531V21.3672H7.06781C6.5574 21.3672 6.1876 21.3255 5.95844 21.2422C5.6251 21.1224 5.34906 20.9271 5.13031 20.6562C4.91156 20.3906 4.76833 20.0521 4.70062 19.6406C4.63812 19.2292 4.60427 18.5547 4.59906 17.6172C4.59385 16.6797 4.54958 16.0312 4.46625 15.6719C4.38292 15.3125 4.21365 15.0286 3.95844 14.8203C3.70844 14.612 3.38292 14.5026 2.98187 14.4922V13.2188ZM8.05344 18V16.3984H9.655V18H8.05344ZM11.2266 18V16.3984H12.8281V18H11.2266ZM14.3997 18V16.3984H16.0012V18H14.3997ZM21.0103 13.2188V14.4922C20.6093 14.5026 20.2811 14.612 20.0259 14.8203C19.7759 15.0286 19.6093 15.3125 19.5259 15.6719C19.4426 16.026 19.3983 16.638 19.3931 17.5078C19.3879 18.3776 19.3723 18.9505 19.3462 19.2266C19.2994 19.6693 19.2108 20.0208 19.0806 20.2812C18.9556 20.5469 18.7994 20.7578 18.6119 20.9141C18.4244 21.0755 18.1848 21.1979 17.8931 21.2812C17.6952 21.3385 17.3723 21.3672 16.9244 21.3672H16.4869V20.1406H16.7291C17.2707 20.1406 17.6301 20.0417 17.8072 19.8438C17.9843 19.651 18.0728 19.2135 18.0728 18.5312C18.0728 17.2292 18.0962 16.4036 18.1431 16.0547C18.2265 15.4766 18.3931 15.0156 18.6431 14.6719C18.8931 14.3229 19.2473 14.0521 19.7056 13.8594C19.1067 13.5729 18.6848 13.1953 18.44 12.7266C18.1952 12.2526 18.0728 11.4557 18.0728 10.3359C18.0728 9.32031 18.0598 8.71354 18.0337 8.51562C17.9973 8.16667 17.8931 7.92448 17.7212 7.78906C17.5546 7.64844 17.2239 7.57812 16.7291 7.57812H16.4869V6.35156H16.9244C17.4348 6.35156 17.8046 6.39323 18.0337 6.47656C18.3671 6.59115 18.6431 6.78385 18.8619 7.05469C19.0806 7.32552 19.2212 7.66667 19.2837 8.07812C19.3515 8.48958 19.3879 9.16406 19.3931 10.1016C19.3983 11.0391 19.4426 11.6875 19.5259 12.0469C19.6093 12.401 19.7759 12.6823 20.0259 12.8906C20.2811 13.099 20.6093 13.2083 21.0103 13.2188Z\"/>\r\n</svg>\r\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(5302)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map