"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["main"],{

/***/ 41397:
/*!**************************************************!*\
  !*** ./projects/eav-ui/src/app/app.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_icons_app_icons_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/icons/app-icons.service */ 72661);
/* harmony import */ var _shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/constants/session.constants */ 38172);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 80436);














class AppComponent extends _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_3__.SxcAppComponent {
  constructor(el, dnnContext, context, titleService, router, activatedRoute, appIconsService) {
    super(el, dnnContext.preConfigure({
      moduleId: parseInt(sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyModuleId) || '-1234', 10),
      contentBlockId: parseInt(sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyContentBlockId) || '-1234', 10)
    }));
    this.context = context;
    this.titleService = titleService;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.appIconsService = appIconsService;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    this.context.initRoot();
    this.appIconsService.load();
  }
  ngOnInit() {
    // Mostly copied from https://blog.bitsrc.io/dynamic-page-titles-in-angular-98ce20b5c334
    // Routes need a data: { title: '...' } for this to work
    const appTitle = this.titleService.getTitle(); // initial title when loading the page
    this.subscription.add(this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(() => {
      let child = this.activatedRoute.firstChild;
      while (child?.firstChild) {
        child = child.firstChild;
      }
      if (child?.snapshot.data['title']) {
        return child.snapshot.data['title'];
      }
      return appTitle;
    })).subscribe(title => {
      this.titleService.setTitle(title);
    }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_3__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_2__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_icons_app_icons_service__WEBPACK_IMPORTED_MODULE_0__.AppIconsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 21906);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _params_init_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./params-init.factory */ 54392);
/* harmony import */ var _shared_icons_app_icons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/icons/app-icons.service */ 72661);
/* harmony import */ var _shared_interceptors_handle_errors_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/interceptors/handle-errors.interceptor */ 85837);
/* harmony import */ var _shared_interceptors_set_headers_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/interceptors/set-headers.interceptor */ 41248);
/* harmony import */ var _shared_services_getting_started_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/getting-started.service */ 12987);
/* harmony import */ var _shared_services_installer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/installer.service */ 14147);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/context */ 68873);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 43835);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _edit_shared_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit/shared/store */ 50526);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/effects */ 70347);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store-devtools */ 11925);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/data */ 25685);
/* harmony import */ var _edit_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/shared/store/ngrx-data */ 27521);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _shared_translation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/translation */ 86021);
/* harmony import */ var _shared_translation_translate_loader_factory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/translation/translate-loader-factory */ 97632);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 24950);

























const appConfig = {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_12__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.routes), (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.importProvidersFrom)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__.StoreModule.forRoot(_edit_shared_store__WEBPACK_IMPORTED_MODULE_8__.reducers, {
    metaReducers: _edit_shared_store__WEBPACK_IMPORTED_MODULE_8__.metaReducers,
    runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true
    }
  }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__.EffectsModule.forRoot([]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_19__.StoreDevtoolsModule.instrument({
    maxAge: 25
  }), _ngrx_data__WEBPACK_IMPORTED_MODULE_20__.EntityDataModule.forRoot(_edit_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_9__.entityConfig), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule.forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule.forChild((0,_shared_translation__WEBPACK_IMPORTED_MODULE_10__.buildTranslateConfiguration)(_shared_translation_translate_loader_factory__WEBPACK_IMPORTED_MODULE_11__.translateLoaderFactory))), _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_22__.SxcHttpInterceptorProvider, _shared_services_context__WEBPACK_IMPORTED_MODULE_7__.Context, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.Title, _shared_icons_app_icons_service__WEBPACK_IMPORTED_MODULE_2__.AppIconsService, _shared_services_getting_started_service__WEBPACK_IMPORTED_MODULE_5__.AppInstallSettingsService, _shared_services_installer_service__WEBPACK_IMPORTED_MODULE_6__.InstallerService, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_13__.APP_INITIALIZER,
    useFactory: _params_init_factory__WEBPACK_IMPORTED_MODULE_1__.paramsInitFactory,
    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_13__.Injector],
    multi: true
  }, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_23__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_23__.HashLocationStrategy
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HTTP_INTERCEPTORS,
    useClass: _shared_interceptors_set_headers_interceptor__WEBPACK_IMPORTED_MODULE_4__.SetHeadersInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HTTP_INTERCEPTORS,
    useClass: _shared_interceptors_handle_errors_interceptor__WEBPACK_IMPORTED_MODULE_3__.HandleErrorsInterceptor,
    multi: true
  }, {
    provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
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

const routes = [{
  path: ':zoneId/apps',
  loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_apps-management_apps-management_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./apps-management/apps-management.routing */ 49772)).then(m => m.appsManagementRoutes),
  data: {
    title: 'Apps'
  }
}, {
  path: ':zoneId/import',
  loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_import-app_import-app_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./import-app/import-app.routing */ 59532)).then(m => m.importRoutes),
  data: {
    title: 'Import App'
  }
}, {
  path: ':zoneId/:appId/app',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_eav-ui_src_app_shared_pipes_safe-html_pipe_ts-node_modules_angular_material_-bba45a"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_select_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_radio_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_constants_default-grid-options_constants_ts-projects_e-814394"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_ag-grid_column-definitions_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_app-administration_services_index_ts-projects_eav-ui_src_app_-488733"), __webpack_require__.e("default-projects_eav-ui_src_app_permissions_permissions_component_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_dev-rest_index_ts"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_app-administration_routing_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./app-administration/app-administration.routing */ 60366)).then(m => m.appAdministrationRoutes),
  data: {
    title: 'App'
  }
}, {
  path: ':zoneId/:appId/code',
  loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_code-editor_code-editor_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./code-editor/code-editor.routing */ 25316)).then(m => m.codeEditorRoutes),
  data: {
    title: 'Code Editor'
  }
}, {
  path: ':zoneId/:appId/query/:pipelineId',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_eav-ui_src_app_shared_pipes_safe-html_pipe_ts-node_modules_angular_material_-bba45a"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_select_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_radio_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_constants_default-grid-options_constants_ts-projects_e-814394"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_ag-grid_column-definitions_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_app-administration_services_index_ts-projects_eav-ui_src_app_-488733"), __webpack_require__.e("default-projects_eav-ui_src_app_permissions_permissions_component_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_dev-rest_index_ts"), __webpack_require__.e("projects_eav-ui_src_app_visual-query_visual-query_routing_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./visual-query/visual-query.routing */ 95932)).then(m => m.visualQueryRoutes),
  data: {
    title: 'Visual Query'
  }
}, {
  path: ':zoneId/:appId/:guid/:part/:index/replace',
  loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_replace-content_replace-content_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./replace-content/replace-content.routing */ 97440)).then(m => m.replaceContentRoutes),
  data: {
    title: 'Apps'
  }
}, {
  path: ':zoneId/:appId/:guid/:part/:index/reorder',
  loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_manage-content-list_manage-content-list_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./manage-content-list/manage-content-list.routing */ 25284)).then(m => m.manageContentRoutes),
  data: {
    title: 'Reorder Items'
  }
}, {
  path: ':zoneId/:appId/items/:contentTypeStaticName',
  loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./content-items/content-items.routing */ 30200)).then(m => m.contentItemsRoutes),
  data: {
    title: 'Items'
  }
}, {
  path: ':zoneId/:appId/fields/:contentTypeStaticName',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_permissions_go-to-permissions_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./content-type-fields/content-type-fields.routing */ 6708)).then(m => m.contentTypeFieldsRoutes),
  data: {
    title: 'Fields'
  }
}, {
  path: ':zoneId/:appId/versions/:itemId',
  loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_item-history_item-history_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item-history/item-history.routing */ 65022)).then(m => m.historyRoutes)
}, ..._edit_edit_routing__WEBPACK_IMPORTED_MODULE_0__.EditRoutesRoot];

/***/ }),

/***/ 42220:
/*!**************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/constants/data-type.constants.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataTypeConstants: () => (/* binding */ DataTypeConstants)
/* harmony export */ });
const DataTypeConstants = {
  Boolean: 'Boolean',
  Custom: 'Custom',
  DateTime: 'DateTime',
  Empty: 'Empty',
  Entity: 'Entity',
  Hyperlink: 'Hyperlink',
  Number: 'Number',
  String: 'String'
};

/***/ }),

/***/ 18170:
/*!***************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/constants/input-type.constants.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputTypeConstants: () => (/* binding */ InputTypeConstants)
/* harmony export */ });
const InputTypeConstants = {
  BooleanDefault: 'boolean-default',
  BooleanTristate: 'boolean-tristate',
  CustomDefault: 'custom-default',
  CustomGps: 'custom-gps',
  CustomJsonEditor: 'custom-json-editor',
  DateTimeDefault: 'datetime-default',
  DefaultSuffix: '-default',
  EmptyDefault: 'empty-default',
  EmptyEnd: 'empty-end',
  EmptyMessage: 'empty-message',
  EntityContentBlocks: 'entity-content-blocks',
  EntityDefault: 'entity-default',
  EntityQuery: 'entity-query',
  ExternalWebComponent: 'external-web-component',
  HyperlinkDefault: 'hyperlink-default',
  HyperlinkLibrary: 'hyperlink-library',
  NumberDefault: 'number-default',
  NumberDropdown: 'number-dropdown',
  StringDefault: 'string-default',
  StringDropdown: 'string-dropdown',
  StringDropdownQuery: 'string-dropdown-query',
  StringFontIconPicker: 'string-font-icon-picker',
  StringJson: 'string-json',
  StringTemplatePicker: 'string-template-picker',
  StringUrlPath: 'string-url-path',
  StringWysiwyg: 'string-wysiwyg',
  /** New Pickers v17.x */
  EntityPicker: 'entity-picker',
  StringPicker: 'string-picker',
  NumberPicker: 'number-picker',
  /** for all situations where we need a fallback; new v16.04 */
  Unknown: 'unknown'
};

/***/ }),

/***/ 37671:
/*!******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/dialog/main/edit-dialog-main.helpers.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateIsParentDialog: () => (/* binding */ calculateIsParentDialog),
/* harmony export */   sortLanguages: () => (/* binding */ sortLanguages)
/* harmony export */ });
function calculateIsParentDialog(route) {
  let editDialogCount = 0;
  for (const path of route.snapshot.pathFromRoot) {
    if (path.url.length <= 0) {
      continue;
    }
    for (const urlSegment of path.url) {
      if (urlSegment.path !== 'edit') {
        continue;
      }
      editDialogCount++;
    }
  }
  return editDialogCount === 1;
}
function sortLanguages(primaryLangKey, languages) {
  if (languages.length === 0) {
    return languages;
  }
  let primaryLang;
  const sameLangs = [];
  const otherLangs = [];
  for (const language of languages) {
    if (language.NameId === primaryLangKey) {
      primaryLang = language;
    } else if (language.NameId.startsWith(primaryLangKey.split('-')[0])) {
      sameLangs.push(language);
    } else {
      otherLangs.push(language);
    }
  }
  sameLangs.sort((a, b) => a.NameId.localeCompare(b.NameId));
  otherLangs.sort((a, b) => a.NameId.localeCompare(b.NameId));
  const allLangsSorted = !primaryLang ? [...sameLangs, ...otherLangs] : [primaryLang, ...sameLangs, ...otherLangs];
  return allLangsSorted;
}

/***/ }),

/***/ 18734:
/*!*****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/dialog/main/edit-dialog-main.models.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prefetchItemToPickerItem: () => (/* binding */ prefetchItemToPickerItem)
/* harmony export */ });
/** Temporary till the models are somehow in sync again */
function prefetchItemToPickerItem(item) {
  return {
    id: item.Id,
    label: item.Text,
    value: item.Value
  };
}

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

const editDialog = {
  name: 'ITEMS_EDIT_DIALOG',
  initContext: true,
  panelSize: 'custom',
  panelClass: ['c-multi-item-dialog'],
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        EditEntryComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_pipes_safe-html_pipe_ts-node_modules_angular_material_-bba45a"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_select_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_menu_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_features_feature-names_ts-projects_eav-ui_src_app_features_sh-a1b9be"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_slide-toggle_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_create-file-dialog_index_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_directives_mousedown-stop-propagation_directive_ts-nod-e2f6cd"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_monaco-editor_monaco-editor_component_ts-projects_eav-ui_src_-a55d76"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_edit_dialog_entry_edit-entry_component_ts-projects_eav-ui_src_app_sha-ddd80a")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dialog/entry/edit-entry.component */ 68032));
      return EditEntryComponent;
    })();
  }
};

/***/ }),

/***/ 62558:
/*!******************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/edit.matcher.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editRouteMatcherRoot: () => (/* binding */ editRouteMatcherRoot),
/* harmony export */   editRouteMatcherRootRefresh: () => (/* binding */ editRouteMatcherRootRefresh),
/* harmony export */   editRouteMatcherSubEdit: () => (/* binding */ editRouteMatcherSubEdit),
/* harmony export */   editRouteMatcherSubEditRefresh: () => (/* binding */ editRouteMatcherSubEditRefresh)
/* harmony export */ });
/* harmony import */ var _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/logging/eav-logger */ 6812);

const logThis = false;
const logger = new _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_0__.EavLogger('EditRouteMatchers', logThis);
/**
 * ':zoneId/:appId/edit/:items'
 * ':zoneId/:appId/edit/:items/details/:detailsEntityGuid/:detailsFieldId'
 * ':zoneId/:appId/edit/:items/update/:updateEntityGuid/:updateFieldId'
 */
function editRouteMatcherRoot(url) {
  const l = logger.fn('editRouteMatcherRoot', {
    url
  });
  if (url.length < 4) return l.rNull();
  if (url[2].path !== 'edit') return l.rNull();
  const hasDetails = url[4] != null && url[4].path === 'details' && url[5] != null && url[6] != null;
  const hasUpdate = url[4] != null && url[4].path === 'update' && url[5] != null && url[6] != null;
  const posParams = {
    zoneId: url[0],
    appId: url[1],
    items: url[3],
    ...(hasDetails && {
      detailsEntityGuid: url[5],
      detailsFieldId: url[6]
    }),
    ...(hasUpdate && {
      updateEntityGuid: url[5],
      updateFieldId: url[6]
    })
  };
  const match = {
    consumed: url.slice(0, hasDetails || hasUpdate ? 7 : 4),
    posParams: posParams
  };
  return l.r(match, '✅');
}
/** ':zoneId/:appId/edit/refresh/:items' */
function editRouteMatcherRootRefresh(url) {
  const l = logger.fn('editRouteMatcherRootRefresh', {
    url
  });
  if (url.length < 5) return l.rNull();
  if (url[2].path !== 'edit' || url[3].path !== 'refresh') {
    return null;
  }
  const posParams = {
    zoneId: url[0],
    appId: url[1],
    items: url[4]
  };
  const match = {
    consumed: url.slice(0, 5),
    posParams: posParams
  };
  return l.r(match, '✅');
}
/**
 * 'edit/:items'
 * 'edit/:items/details/:detailsEntityGuid/:detailsFieldId'
 * 'edit/:items/update/:updateEntityGuid/:updateFieldId'
 */
function editRouteMatcherSubEdit(url) {
  const l = logger.fn('editRouteMatcherSubEdit', {
    url
  });
  if (url.length < 2) return l.rNull();
  if (url[0].path !== 'edit') return l.rNull();
  const hasDetails = url[2] != null && url[2].path === 'details' && url[3] != null && url[4] != null;
  const hasUpdate = url[2] != null && url[2].path === 'update' && url[3] != null && url[4] != null;
  const posParams = {
    items: url[1],
    ...(hasDetails && {
      detailsEntityGuid: url[3],
      detailsFieldId: url[4]
    }),
    ...(hasUpdate && {
      updateEntityGuid: url[3],
      updateFieldId: url[4]
    })
  };
  const match = {
    consumed: url.slice(0, hasDetails || hasUpdate ? 5 : 2),
    posParams: posParams
  };
  return l.r(match, '✅');
}
/** 'edit/refresh/:items' */
function editRouteMatcherSubEditRefresh(url) {
  const l = logger.fn('editRouteMatcherSubEditRefresh', {
    url
  });
  if (url.length < 3) return l.rNull();
  if (url[0].path !== 'edit' || url[1].path !== 'refresh') return l.rNull();
  const posParams = {
    items: url[2]
  };
  const match = {
    consumed: url.slice(0, 3),
    posParams: posParams
  };
  return l.r(match, '✅');
}

/***/ }),

/***/ 90390:
/*!******************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/edit.routing.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditRoutes: () => (/* binding */ EditRoutes),
/* harmony export */   EditRoutesRoot: () => (/* binding */ EditRoutesRoot),
/* harmony export */   EditRoutesSubItems: () => (/* binding */ EditRoutesSubItems),
/* harmony export */   EditRoutesSubItemsNoHistory: () => (/* binding */ EditRoutesSubItemsNoHistory)
/* harmony export */ });
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ 85544);
/* harmony import */ var _edit_dialog_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-dialog.config */ 59587);
/* harmony import */ var _edit_matcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.matcher */ 62558);
/* harmony import */ var _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/logging/eav-logger */ 6812);




const logThis = false;
const logger = new _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_3__.EavLogger('EditRoutingModule', logThis);
const EditRoutesSubItems = [{
  matcher: _edit_matcher__WEBPACK_IMPORTED_MODULE_2__.editRouteMatcherSubEdit,
  loadChildren: () => {
    // Recursively use these routes again.
    logger.a('loadChildren - matcher: sub-edit');
    return EditRoutes;
  }
}, {
  matcher: _edit_matcher__WEBPACK_IMPORTED_MODULE_2__.editRouteMatcherSubEditRefresh,
  loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_edit_refresh-edit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./refresh-edit.module */ 25668)).then(m => m.RefreshEditModule)
}];
/**
 * In some cases the history could cause trouble, eg. in VisualQuery, where there are many hidden fields which
 * build the query, and if someone goes back in time thinking they are just changing the labels, the query would break.
 */
const EditRoutesSubItemsNoHistory = [{
  matcher: _edit_matcher__WEBPACK_IMPORTED_MODULE_2__.editRouteMatcherSubEdit,
  loadChildren: () => EditRoutes,
  data: {
    history: false
  }
}
// 2024-07-01 2dm: not sure why the refresh-part was never on this, but leave until I know better.
// {
//   matcher: editRouteMatcherSubEditRefresh,
//   loadChildren: () => import('./refresh-edit.module').then(m => m.RefreshEditModule)
// },
];
const EditRoutes = [{
  path: '',
  component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__.DialogEntryComponent,
  data: {
    dialog: _edit_dialog_config__WEBPACK_IMPORTED_MODULE_1__.editDialog
  },
  children: [...EditRoutesSubItems, {
    path: 'versions/:itemId',
    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_item-history_item-history_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../item-history/item-history.routing */ 65022)).then(m => m.historyRoutes)
  }]
}];
/**
 * Root routes only meant for the entry points of the application, "App" and "Apps"
 */
const EditRoutesRoot = [{
  matcher: _edit_matcher__WEBPACK_IMPORTED_MODULE_2__.editRouteMatcherRoot,
  loadChildren: () => EditRoutes
}, {
  matcher: _edit_matcher__WEBPACK_IMPORTED_MODULE_2__.editRouteMatcherRootRefresh,
  loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_edit_refresh-edit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../edit/refresh-edit.module */ 25668)).then(m => m.RefreshEditModule)
}];

/***/ }),

/***/ 5091:
/*!*********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/form/builder/fields-builder/field-state.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldState: () => (/* binding */ FieldState)
/* harmony export */ });
/**
 * This is provided / injected at the fields-builder for every single field.
 * So any control or service within that field, which requests this service, will get one containing exactly that fields.
 */
class FieldState {
  constructor( /** The fields technical name to access settings etc. */
  name, /** Field configuration, incl. a lot of unchanging values and access to adam, dropzone etc. */
  config, /** The form group containing the field - rarely relevant, as you should use the control in most cases */
  group, /** The control of the field in the form group */
  control, /** The settings as an observable - where possible, try to use the signal instead */
  settings$, /** The settings as a signal - use this for most cases */
  settings, /** The basic settings - use this for most cases as it will change less than the settings signal */
  basics, controlStatus) {
    this.name = name;
    this.config = config;
    this.group = group;
    this.control = control;
    this.settings$ = settings$;
    this.settings = settings;
    this.basics = basics;
    this.controlStatus = controlStatus;
  }
}

/***/ }),

/***/ 82895:
/*!*******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/form/fields/empty/empty-field-helpers.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyFieldHelpers: () => (/* binding */ EmptyFieldHelpers)
/* harmony export */ });
/* harmony import */ var projects_eav_ui_src_app_content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/eav-ui/src/app/content-type-fields/constants/input-type.constants */ 18170);

const empty = [projects_eav_ui_src_app_content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.EmptyDefault, projects_eav_ui_src_app_content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.EmptyEnd, projects_eav_ui_src_app_content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.EmptyMessage];
const ends = [projects_eav_ui_src_app_content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.EmptyDefault, projects_eav_ui_src_app_content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.EmptyEnd];
class EmptyFieldHelpers {
  static isEmptyField(inputType) {
    return this.isEmptyInputType(inputType.inputType);
    // const itName = inputType.inputType;
    // return itName === InputTypeConstants.EmptyDefault || itName === InputTypeConstants.EmptyEnd || itName === InputTypeConstants.EmptyMessage;
  }
  static isEmptyInputType(inputType) {
    return empty.includes(inputType);
  }
  static endsPreviousGroup(inputType) {
    return ends.includes(inputType);
  }
  // static isGroup(inputType: CalculatedInputType): boolean {
  //   return this.endsPreviousGroup(inputType.inputType);
  //   // const itName = inputType.inputType;
  //   // return itName === InputTypeConstants.EmptyDefault || itName === InputTypeConstants.EmptyEnd;
  // }
  static isGroupStart(inputType) {
    return inputType === projects_eav_ui_src_app_content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.EmptyDefault;
  }
  static isGroupEnd(inputType) {
    return inputType === projects_eav_ui_src_app_content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.EmptyEnd;
  }
  static isMessage(inputType) {
    return inputType === projects_eav_ui_src_app_content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.EmptyMessage;
  }
}

/***/ }),

/***/ 55382:
/*!********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/form/fields/picker/cache/picker-data-cache.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PickerDataCacheService: () => (/* binding */ PickerDataCacheService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var _shared_store_ngrx_data_base_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/store/ngrx-data/base-data.service */ 11220);
/* harmony import */ var _dialog_main_edit_dialog_main_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../dialog/main/edit-dialog-main.models */ 18734);
/* harmony import */ var projects_eav_ui_src_app_shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/eav-ui/src/app/shared/rxJs/rx.helpers */ 93826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/data */ 25685);







class PickerDataCacheService extends _shared_store_ngrx_data_base_data_service__WEBPACK_IMPORTED_MODULE_0__.BaseDataService {
  constructor(serviceElementsFactory) {
    super('EntityCache', serviceElementsFactory);
  }
  loadEntities(entities) {
    if (entities == null) return;
    var asPicker = entities.map(e => (0,_dialog_main_edit_dialog_main_models__WEBPACK_IMPORTED_MODULE_1__.prefetchItemToPickerItem)(e));
    this.upsertManyInCache(asPicker);
  }
  getEntities$(guids) {
    if (guids == null) return this.cache$.asObservable();
    return this.cache$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(entities => entities.filter(entity => guids.includes(entity.value))), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(projects_eav_ui_src_app_shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_2__.RxHelpers.arraysEqual));
  }
  static #_ = this.ɵfac = function PickerDataCacheService_Factory(t) {
    return new (t || PickerDataCacheService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_6__.EntityCollectionServiceElementsFactory));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: PickerDataCacheService,
    factory: PickerDataCacheService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 97315:
/*!***************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/form/fields/picker/picker.helpers.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertArrayToString: () => (/* binding */ convertArrayToString),
/* harmony export */   convertValueToArray: () => (/* binding */ convertValueToArray),
/* harmony export */   correctStringEmptyValue: () => (/* binding */ correctStringEmptyValue),
/* harmony export */   filterGuids: () => (/* binding */ filterGuids)
/* harmony export */ });
/* harmony import */ var projects_eav_ui_src_app_shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/eav-ui/src/app/shared/logging/eav-logger */ 6812);
/* harmony import */ var _shared_constants_guid_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/constants/guid.constants */ 49417);


const logThis = false;
function correctStringEmptyValue(fieldValue, separator, dropdownOptions // Options are used only for legacy use case is where the value is an empty string
) {
  const log = new projects_eav_ui_src_app_shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_0__.EavLogger('correctStringEmptyValue', logThis);
  const valueAsArray = typeof fieldValue === 'string' ? convertValueToArray(fieldValue, separator, dropdownOptions) : fieldValue;
  const result = valueAsArray.map(value => {
    const option = dropdownOptions?.find(o => o.value == value);
    return {
      // if it's a free text value or not found, disable edit and delete
      noEdit: true,
      noDelete: true,
      // either the real value or null if text-field or not found
      id: null,
      label: option?.label ?? value,
      tooltip: `${value}`,
      value: value
    };
  });
  log.a('equalizeSelectedItems', {
    fieldValue,
    separator,
    dropdownOptions,
    valueAsArray,
    result
  });
  return result;
}
/** Convert string value in string array if a value is type string */
function convertValueToArray(value, separator, dropdownOptions) {
  // Special case: String-picker old with "empty" being selected
  // In most dropdowns, empty would mean not-selected, but in string-dropdowns, it _can_ be a valid value
  // So we must check if there is an empty value in the dropdown options
  // And if this is true, return an array with an empty string being "selected"
  if (value == '' && dropdownOptions?.some(o => o.value == '')) return [''];
  if (value == '' || !value) return [];
  return Array.isArray(value) ? value : value.split(separator);
}
/** Convert string array value in string value if a value is type array */
function convertArrayToString(value, separator) {
  if (!value) {
    return '';
  }
  if (Array.isArray(value)) {
    return value.join(separator);
  }
  return value;
}
function filterGuids(entityName, fieldName, guids) {
  if (guids == null) {
    return;
  }
  const validGuids = [];
  const invalidGuids = [];
  for (const guid of guids) {
    if ((0,_shared_constants_guid_constants__WEBPACK_IMPORTED_MODULE_1__.guidRegex)().test(guid)) {
      validGuids.push(guid);
    } else {
      invalidGuids.push(guid);
    }
  }
  if (invalidGuids.length > 0) {
    console.error(`Found invalid guids in Entity: "${entityName}", Field: "${fieldName}"`, invalidGuids);
  }
  return validGuids;
}

/***/ }),

/***/ 6494:
/*!**********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/form/shared/field-logic/field-logic-base.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldLogicBase: () => (/* binding */ FieldLogicBase)
/* harmony export */ });
/* harmony import */ var projects_eav_ui_src_app_shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/eav-ui/src/app/shared/logging/eav-logger */ 6812);
/* harmony import */ var _field_logic_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field-logic-manager */ 96600);


/** LogThis will apply, if the inheriting class isn't specifying it in the constructor */
const logThis = false;
const nameOfThis = 'FieldLogic';
class FieldLogicBase {
  constructor(name, logThis) {
    /** If this field supports AutoTranslate (new v15.x) */
    this.canAutoTranslate = false;
    if (name) {
      this.name = name;
      this._log = new projects_eav_ui_src_app_shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_0__.EavLogger(`${nameOfThis}[${name}]`, logThis);
      this.log.a(`constructor for ${name}`);
    }
  }
  /** Adds Logic to FieldLogicManager */
  static add(logic) {
    const logicInstance = new logic();
    _field_logic_manager__WEBPACK_IMPORTED_MODULE_1__.FieldLogicManager.singleton().add(logicInstance);
  }
  /** Run this dummy method from component to make sure Logic files are not tree shaken */
  static importMe() {}
  get log() {
    return this._log ??= new projects_eav_ui_src_app_shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_0__.EavLogger(`${nameOfThis}[${this.name}]`, logThis);
  }
  /**
   * Entity fields for empty items are prefilled on the backend with []
   * so I can never know if entity field is brand new, or just emptied out by the user
   *
   * Note: 2dm 2023-08-31 moved from InputFieldHelpers; in future, each logic can override this
   */
  isValueEmpty(value, isCreateMode) {
    const l = this.log.fn('isValueEmpty', {
      value,
      isCreateMode
    });
    const emptyEntityField = Array.isArray(value) && value.length === 0 && isCreateMode;
    return l.r(value === undefined || emptyEntityField);
  }
  /**
   * Lookup advanced (external) configuration.
   * These are usually stored in the eavConfig.settings.
   * Needs defaults to merge for anything that is not defined in the external config.
   * @param possibleGuid - guid of the external config, if empty, return defaults
   * @param defaults - defaults to merge with external config
   */
  findAndMergeAdvanced(tools, possibleGuid, defaults) {
    if (!possibleGuid) return defaults;
    const wysiwygConfig = tools.eavConfig.settings.Entities.find(e => e.Guid === possibleGuid);
    if (!wysiwygConfig) return defaults;
    const advanced = tools.entityReader.flatten(wysiwygConfig);
    return {
      ...defaults,
      ...advanced
    };
  }
}

/***/ }),

/***/ 96600:
/*!*************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/form/shared/field-logic/field-logic-manager.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldLogicManager: () => (/* binding */ FieldLogicManager)
/* harmony export */ });
/* harmony import */ var projects_eav_ui_src_app_content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/eav-ui/src/app/content-type-fields/constants/input-type.constants */ 18170);
/* harmony import */ var _field_logic_unknown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field-logic-unknown */ 76473);


class FieldLogicManager {
  constructor() {
    this.logics = {};
    // add unknown as a fallback for all scenarios
    this.add(new _field_logic_unknown__WEBPACK_IMPORTED_MODULE_1__.UnknownLogic());
  }
  static singleton() {
    return window.eavFieldLogicManager ??= new FieldLogicManager();
  }
  /** Add settings logic */
  add(logic) {
    this.logics[logic.name] = logic;
  }
  /** Get settings logic for input type */
  get(inputTypeName) {
    return this.logics[inputTypeName] ?? null;
  }
  /** Get or use unknown - temporary solution v16.04 to prevent any scenario where there is none */
  getOrUnknown(inputTypeName) {
    return this.get(inputTypeName) ?? this.get(projects_eav_ui_src_app_content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.Unknown);
  }
}

/***/ }),

/***/ 76473:
/*!*************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/form/shared/field-logic/field-logic-unknown.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnknownLogic: () => (/* binding */ UnknownLogic)
/* harmony export */ });
/* harmony import */ var projects_eav_ui_src_app_content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/eav-ui/src/app/content-type-fields/constants/input-type.constants */ 18170);
/* harmony import */ var _field_logic_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field-logic-base */ 6494);


class UnknownLogic extends _field_logic_base__WEBPACK_IMPORTED_MODULE_1__.FieldLogicBase {
  constructor() {
    super(...arguments);
    this.name = projects_eav_ui_src_app_content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.Unknown;
    this.canAutoTranslate = false;
  }
  update(settings, _v, _t) {
    return settings;
  }
}
// Don't register here, the manager will register it as a fallback
// FieldLogicBase.add(UnknownLogic);

/***/ }),

/***/ 85063:
/*!***************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/form/shared/page-picker/page-picker.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagePickerComponent: () => (/* binding */ PagePickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services */ 22453);
/* harmony import */ var _page_picker_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-picker.helpers */ 47709);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/extended */ 52913);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _shared_helpers_array_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/helpers/array.helpers */ 4981);
/* harmony import */ var projects_eav_ui_src_app_shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/eav-ui/src/app/shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);






















const _c0 = a0 => ({
  page: a0
});
function PagePickerComponent_Conditional_0_Conditional_12_For_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function PagePickerComponent_Conditional_0_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, PagePickerComponent_Conditional_0_Conditional_12_For_2_ng_container_0_Template, 1, 0, "ng-container", 9);
  }
  if (rf & 2) {
    const page_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const pageAndChildren_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", pageAndChildren_r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, page_r3));
  }
}
function PagePickerComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](1, PagePickerComponent_Conditional_0_Conditional_12_For_2_Template, 1, 4, "ng-container", null, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](vm_r5.tree);
  }
}
function PagePickerComponent_Conditional_0_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "No results");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function PagePickerComponent_Conditional_0_Conditional_13_For_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tippy", page_r7.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", page_r7.path, "\u00A0>\u00A0");
  }
}
function PagePickerComponent_Conditional_0_Conditional_13_For_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "visibility_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PagePickerComponent_Conditional_0_Conditional_13_For_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PagePickerComponent_Conditional_0_Conditional_13_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PagePickerComponent_Conditional_0_Conditional_13_For_3_Template_div_click_3_listener() {
      const page_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.select(page_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, PagePickerComponent_Conditional_0_Conditional_13_For_3_Conditional_6_Template, 2, 2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, PagePickerComponent_Conditional_0_Conditional_13_For_3_Conditional_10_Template, 2, 0, "mat-icon", 18)(11, PagePickerComponent_Conditional_0_Conditional_13_For_3_Conditional_11_Template, 2, 0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const page_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", page_r7.id === ctx_r1.selected ? "selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](6, page_r7.path ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tippy", page_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](page_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](10, !page_r7.isVisible ? 10 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](11, !page_r7.isClickable ? 11 : -1);
  }
}
function PagePickerComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PagePickerComponent_Conditional_0_Conditional_13_Conditional_1_Template, 5, 0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](2, PagePickerComponent_Conditional_0_Conditional_13_For_3_Template, 12, 6, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](1, vm_r5.filteredSearch.length === 0 ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](vm_r5.filteredSearch);
  }
}
function PagePickerComponent_Conditional_0_ng_template_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 11);
  }
}
function PagePickerComponent_Conditional_0_ng_template_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PagePickerComponent_Conditional_0_ng_template_14_Conditional_3_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().page;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggle(page_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().page;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.toggled.includes(page_r10.id) ? "keyboard_arrow_down" : "keyboard_arrow_right", " ");
  }
}
function PagePickerComponent_Conditional_0_ng_template_14_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "visibility_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PagePickerComponent_Conditional_0_ng_template_14_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PagePickerComponent_Conditional_0_ng_template_14_Conditional_12_For_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function PagePickerComponent_Conditional_0_ng_template_14_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, PagePickerComponent_Conditional_0_ng_template_14_Conditional_12_For_2_ng_container_0_Template, 1, 0, "ng-container", 9);
  }
  if (rf & 2) {
    const child_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    const pageAndChildren_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", pageAndChildren_r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, child_r11));
  }
}
function PagePickerComponent_Conditional_0_ng_template_14_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](1, PagePickerComponent_Conditional_0_ng_template_14_Conditional_12_For_2_Template, 1, 4, "ng-container", null, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().page;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](page_r10.children);
  }
}
function PagePickerComponent_Conditional_0_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PagePickerComponent_Conditional_0_ng_template_14_Conditional_2_Template, 1, 0, "div", 11)(3, PagePickerComponent_Conditional_0_ng_template_14_Conditional_3_Template, 2, 1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PagePickerComponent_Conditional_0_ng_template_14_Template_div_click_4_listener() {
      const page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8).page;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.select(page_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, PagePickerComponent_Conditional_0_ng_template_14_Conditional_10_Template, 2, 0, "mat-icon", 18)(11, PagePickerComponent_Conditional_0_ng_template_14_Conditional_11_Template, 2, 0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, PagePickerComponent_Conditional_0_ng_template_14_Conditional_12_Template, 3, 0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r10 = ctx.page;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](2, page_r10.children.length === 0 ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](3, page_r10.children.length > 0 ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", page_r10.id === ctx_r1.selected ? "selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](page_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](10, !page_r10.isVisible ? 10 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](11, !page_r10.isClickable ? 11 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](12, page_r10.children.length > 0 && ctx_r1.toggled.includes(page_r10.id) ? 12 : -1);
  }
}
function PagePickerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "mat-form-field", 6)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PagePickerComponent_Conditional_0_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.setFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, PagePickerComponent_Conditional_0_Conditional_12_Template, 3, 0, "ul")(13, PagePickerComponent_Conditional_0_Conditional_13_Template, 4, 1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, PagePickerComponent_Conditional_0_ng_template_14_Template, 13, 7, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "mat-dialog-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r5 = ctx;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, "Fields.Hyperlink.PagePicker.Title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", vm_r5.filterText);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](12, !vm_r5.filterText ? 12 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](13, vm_r5.filterText ? 13 : -1);
  }
}
class PagePickerComponent {
  constructor(dialogData, dialogRef, queryService, translate) {
    this.dialogData = dialogData;
    this.dialogRef = dialogRef;
    this.queryService = queryService;
    this.translate = translate;
  }
  ngOnInit() {
    this.selected = this.parseSelectedPageId();
    this.toggled = [];
    this.filterText$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject('');
    this.searchItems$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.tree$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    const filteredSearch$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this.filterText$, this.searchItems$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(([filterText, searchItems]) => searchItems.filter(item => item.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()))));
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this.filterText$, filteredSearch$, this.tree$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(([filterText, filteredSearch, tree]) => {
      const viewModel = {
        filterText,
        filteredSearch,
        tree
      };
      return viewModel;
    }));
    this.fetchPages();
  }
  ngOnDestroy() {
    this.filterText$.complete();
    this.searchItems$.complete();
    this.tree$.complete();
  }
  setFilter(filterText) {
    this.filterText$.next(filterText);
  }
  select(page) {
    // filters out pages without parent (broken)
    if (page.id == null) {
      return;
    }
    if (!page.isClickable || !page.isVisible) {
      const ok = window.confirm(this.translate.instant('Fields.Hyperlink.PagePicker.HiddenOrSystemPageWarning'));
      if (!ok) {
        return;
      }
    }
    this.closeDialog(page.id);
  }
  toggle(pageId) {
    _shared_helpers_array_helpers__WEBPACK_IMPORTED_MODULE_2__.ArrayHelpers.toggleInArray(pageId, this.toggled);
  }
  closeDialog(pageId) {
    if (pageId == null) {
      this.dialogRef.close();
      return;
    }
    const page = this.searchItems$.value.find(i => i.id === pageId);
    const result = {
      id: page.id.toString(),
      name: page.name
    };
    this.dialogRef.close(result);
  }
  fetchPages() {
    const stream = 'Default';
    const params = 'includehidden=true';
    this.queryService.getAvailableEntities(`System.Pages/Default`, params, null).subscribe({
      next: data => {
        if (!data) {
          console.error(this.translate.instant('Fields.Picker.QueryErrorNoData'));
          return;
        }
        if (!data[stream]) {
          console.error(this.translate.instant('Fields.Picker.QueryStreamNotFound') + ' ' + stream);
          return;
        }
        const pages = data[stream];
        const searchItems = (0,_page_picker_helpers__WEBPACK_IMPORTED_MODULE_1__.buildPageSearch)(pages);
        this.searchItems$.next(searchItems);
        const tree = (0,_page_picker_helpers__WEBPACK_IMPORTED_MODULE_1__.buildPageTree)(pages);
        this.tree$.next(tree);
      },
      error: error => {
        console.error(error);
        console.error(`${this.translate.instant('Fields.Picker.QueryError')} - ${error.data}`);
      }
    });
  }
  parseSelectedPageId() {
    const prefix = 'page:';
    let fieldValue = this.dialogData.group.controls[this.dialogData.config.fieldName].value;
    if (typeof fieldValue !== 'string') {
      return;
    }
    fieldValue = fieldValue.trim().toLocaleLowerCase();
    if (!fieldValue.startsWith(prefix)) {
      return;
    }
    try {
      const id = parseInt(fieldValue.split(prefix)[1], 10);
      return id;
    } catch {
      return;
    }
  }
  static #_ = this.ɵfac = function PagePickerComponent_Factory(t) {
    return new (t || PagePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_0__.QueryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: PagePickerComponent,
    selectors: [["app-page-picker"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_shared_services__WEBPACK_IMPORTED_MODULE_0__.QueryService]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [["pageAndChildren", ""], [1, "eav-dialog"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], [1, "eav-dialog-content"], [1, "page-search-box"], ["color", "accent", 1, "eav-mat-form-field"], ["matInput", "", 3, "ngModelChange", "ngModel"], [1, "page-tree-box"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "page-row"], [1, "no-toggle"], [1, "page-label", 3, "click", "ngClass"], [1, "page-icon-and-text"], ["svgIcon", "file", 1, "page-icon"], [1, "page-path", 3, "tippy"], [1, "page-name", 3, "tippy"], [1, "page-icons"], [1, "page-visible-clickable-icon"], [1, "page-toggle"], [1, "page-toggle", 3, "click"]],
    template: function PagePickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, PagePickerComponent_Conditional_0_Template, 17, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__.ExtendedModule, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__.DefaultClassDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, projects_eav_ui_src_app_shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_3__.TippyDirective],
    styles: [".page-picker-title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.page-search-box[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  width: 40%;\n}\n\n.page-tree-box[_ngcontent-%COMP%] {\n  height: 82%;\n  max-width: 100%;\n  overflow: auto;\n}\n.page-tree-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding-left: 8px;\n  margin: 0;\n}\n.page-tree-box[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.page-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.page-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n}\n\n.no-toggle[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  flex-shrink: 0;\n}\n\n.page-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n  flex-shrink: 0;\n}\n\n.page-icon[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  flex-shrink: 0;\n}\n\n.page-visible-clickable-icon[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  flex-shrink: 0;\n}\n\n.page-label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 4px;\n  padding-left: 2px;\n  border-radius: 4px;\n  width: 100%;\n}\n.page-label[_ngcontent-%COMP%]   .page-icon-and-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.page-label[_ngcontent-%COMP%]   .page-icons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.page-label[_ngcontent-%COMP%]   .page-path[_ngcontent-%COMP%] {\n  color: #a2a7b1;\n  text-overflow: ellipsis;\n  max-width: 270px;\n  white-space: nowrap;\n  overflow: hidden;\n  padding-right: 0.5em;\n}\n.page-label[_ngcontent-%COMP%]   .page-name[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  max-width: 225px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.page-label[_ngcontent-%COMP%]:hover {\n  background-color: #06599a;\n  color: #fff;\n}\n.page-label[_ngcontent-%COMP%]:hover   .page-path[_ngcontent-%COMP%] {\n  color: #c7cad0;\n}\n.page-label.selected[_ngcontent-%COMP%] {\n  background-color: #002753;\n  color: #fff;\n}\n.page-label.selected[_ngcontent-%COMP%]   .page-path[_ngcontent-%COMP%] {\n  color: #c7cad0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2VkaXQvZm9ybS9zaGFyZWQvcGFnZS1waWNrZXIvcGFnZS1waWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxTQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUhGO0FBS0U7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQUhKO0FBTUU7RUFDRSxlQUFBO0FBSko7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQUxGO0FBT0U7RUFDRSxXQWpDUTtFQWtDUixZQWxDUTtFQW1DUixlQW5DUTtBQThCWjs7QUFTQTtFQUNFLFdBeENVO0VBeUNWLFlBekNVO0VBMENWLHFCQUFBO0VBQ0EsY0FBQTtBQU5GOztBQVNBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFORjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQU5GOztBQVNBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFORjtBQVFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFOSjtBQVVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFSSjtBQVdFO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFUSjtBQVlFO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFWSjtBQWFFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBWEo7QUFhSTtFQUNFLGNBQUE7QUFYTjtBQWVFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBYko7QUFlSTtFQUNFLGNBQUE7QUFiTiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3RoZW1lL21hdGVyaWFsLWNvbG9yc1wiO1xyXG5cclxuJGljb24tc2l6ZTogMjBweDtcclxuXHJcbi5wYWdlLXBpY2tlci10aXRsZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucGFnZS1zZWFyY2gtYm94IHtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi5wYWdlLXRyZWUtYm94IHtcclxuICBoZWlnaHQ6IDgyJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgPnVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5wYWdlLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgd2lkdGg6ICRpY29uLXNpemU7XHJcbiAgICBoZWlnaHQ6ICRpY29uLXNpemU7XHJcbiAgICBmb250LXNpemU6ICRpY29uLXNpemU7XHJcbiAgfVxyXG59XHJcblxyXG4ubm8tdG9nZ2xlIHtcclxuICB3aWR0aDogJGljb24tc2l6ZTtcclxuICBoZWlnaHQ6ICRpY29uLXNpemU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4ucGFnZS10b2dnbGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLnBhZ2UtaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5wYWdlLXZpc2libGUtY2xpY2thYmxlLWljb24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5wYWdlLWxhYmVsIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAucGFnZS1pY29uLWFuZC10ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICB9XHJcblxyXG4gIC5wYWdlLWljb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcblxyXG4gIC5wYWdlLXBhdGgge1xyXG4gICAgY29sb3I6IG1hcF9nZXQoJG1hdC1lYXYtaXRlbS1kaWFsb2ctYmFja2dyb3VuZCwgMjAwKTtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgbWF4LXdpZHRoOiAyNzBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZy1yaWdodDogMC41ZW07XHJcbiAgfVxyXG5cclxuICAucGFnZS1uYW1lIHtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgbWF4LXdpZHRoOiAyMjVweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXBfZ2V0KCRtYXQtZWF2LWl0ZW0tZGlhbG9nLXNlY29uZGFyeSwgMzAwKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgIC5wYWdlLXBhdGgge1xyXG4gICAgICBjb2xvcjogbWFwX2dldCgkbWF0LWVhdi1pdGVtLWRpYWxvZy1iYWNrZ3JvdW5kLCAxMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXBfZ2V0KCRtYXQtZWF2LWl0ZW0tZGlhbG9nLXNlY29uZGFyeSwgNTAwKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgIC5wYWdlLXBhdGgge1xyXG4gICAgICBjb2xvcjogbWFwX2dldCgkbWF0LWVhdi1pdGVtLWRpYWxvZy1iYWNrZ3JvdW5kLCAxMDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 47709:
/*!*************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/form/shared/page-picker/page-picker.helpers.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildPageSearch: () => (/* binding */ buildPageSearch),
/* harmony export */   buildPageTree: () => (/* binding */ buildPageTree)
/* harmony export */ });
function buildPageSearch(pages) {
  if (!pages) {
    return [];
  }
  const items = pages.map(page => {
    let path = page.Path.trim().replace(/\\/g, '/').replace(/\/\//g, '/');
    if (path.startsWith('/')) {
      path = path.substring(1);
    }
    path = path.split('/').slice(0, -1).join(' > ');
    const item = {
      id: page.Id,
      name: page.Name,
      path,
      isVisible: page.Visible,
      isClickable: page.Clickable
    };
    return item;
  });
  return items;
}
function buildPageTree(pages) {
  if (!pages) {
    return [];
  }
  const items = pages.map(page => {
    const item = {
      children: [],
      id: page.Id,
      name: page.Name,
      parentId: page.ParentId,
      isVisible: page.Visible,
      isClickable: page.Clickable
    };
    return item;
  });
  const tree = [];
  for (const item of items) {
    if (item.parentId === -1) {
      tree.push(item);
      continue;
    }
    const parent = items.find(i => i.id === item.parentId);
    if (!parent) {
      tree.push(item);
    } else {
      parent.children.push(item);
    }
  }
  return tree;
}

/***/ }),

/***/ 3076:
/*!******************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/form/wrappers/localization-wrapper/translate-menu/translate-menu.helpers.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateMenuHelpers: () => (/* binding */ TranslateMenuHelpers)
/* harmony export */ });
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/constants */ 64158);

class TranslateMenuHelpers {
  static getTranslationStateClass(linkType) {
    switch (linkType) {
      case _shared_constants__WEBPACK_IMPORTED_MODULE_0__.TranslationLinks.MissingDefaultLangValue:
        return 'localization-missing-default-lang-value';
      case _shared_constants__WEBPACK_IMPORTED_MODULE_0__.TranslationLinks.Translate:
      case _shared_constants__WEBPACK_IMPORTED_MODULE_0__.TranslationLinks.LinkCopyFrom:
        return 'localization-translate';
      case _shared_constants__WEBPACK_IMPORTED_MODULE_0__.TranslationLinks.DontTranslate:
        return '';
      case _shared_constants__WEBPACK_IMPORTED_MODULE_0__.TranslationLinks.LinkReadOnly:
        return 'localization-link-read-only';
      case _shared_constants__WEBPACK_IMPORTED_MODULE_0__.TranslationLinks.LinkReadWrite:
        return 'localization-link-read-write';
      default:
        return '';
    }
  }
  static calculateSharedInfoMessage(dimensions, currentLanguage) {
    dimensions = TranslateMenuHelpers.calculateShortDimensions(dimensions, currentLanguage);
    const result = TranslateMenuHelpers.calculateEditAndReadDimensions(dimensions);
    const editableDimensions = result.editableDimensions;
    const readOnlyDimensions = result.readOnlyDimensions;
    let infoMessage = '';
    const editableExist = editableDimensions.length > 0;
    const readOnlyExist = readOnlyDimensions.length > 0;
    if (editableExist && readOnlyExist) {
      infoMessage = `${editableDimensions.join(', ')}, (${readOnlyDimensions.join(', ')})`;
    } else if (editableExist) {
      infoMessage = editableDimensions.join(', ');
    } else if (readOnlyExist) {
      infoMessage = `(${readOnlyDimensions.join(', ')})`;
    }
    return infoMessage;
  }
  static calculateShortDimensions(dimensions, currentLanguage) {
    const dimensionsMap = {};
    const shortCurrentLanguage = currentLanguage.slice(0, currentLanguage.indexOf('-'));
    dimensionsMap[shortCurrentLanguage] = [];
    dimensionsMap[shortCurrentLanguage].push(shortCurrentLanguage);
    dimensions.forEach(dimension => {
      const shortDimension = dimension.slice(0, dimension.indexOf('-'));
      const shortNoReadOnly = shortDimension.replace('~', '');
      if (!dimensionsMap[shortNoReadOnly]) {
        dimensionsMap[shortNoReadOnly] = [];
        dimensionsMap[shortNoReadOnly].push(dimension);
      } else {
        dimensionsMap[shortNoReadOnly].push(dimension);
      }
    });
    dimensions = dimensions.map(dimension => {
      const shortDimension = dimension.slice(0, dimension.indexOf('-'));
      const shortNoReadOnly = shortDimension.replace('~', '');
      if (dimensionsMap[shortNoReadOnly].length > 1) {
        return dimension;
      } else {
        return shortDimension;
      }
    });
    return dimensions;
  }
  static calculateEditAndReadDimensions(dimensions) {
    const editableDimensions = [];
    const readOnlyDimensions = [];
    dimensions.forEach(dimension => {
      if (!dimension.includes('~')) {
        editableDimensions.push(dimension);
      } else {
        readOnlyDimensions.push(dimension.replace('~', ''));
      }
    });
    return {
      editableDimensions,
      readOnlyDimensions
    };
  }
}

/***/ }),

/***/ 64034:
/*!****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/formulas/form-item-formula.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormItemFormulaService: () => (/* binding */ FormItemFormulaService)
/* harmony export */ });
/* harmony import */ var _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/rxJs/rx.helpers */ 93826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


/**
 * Contains methods for updating value changes from formulas.
 */
class FormItemFormulaService {
  constructor() {
    this.itemService = null;
    this.valueFormulaCounter = 0;
    this.maxValueFormulaCycles = 5;
  }
  init(itemService) {
    this.itemService = itemService;
  }
  /**
   * Used to check if the value of a field should be updated with the value from a formula and if so, updates it.
   * @param entityGuid
   * @param contentType
   * @param formValues
   * @param fieldsProps
   * @param possibleValueUpdates
   * @param possibleFieldsUpdates
   * @param slotIsEmpty
   * @param entityReader
   * @returns true if values are updated, false otherwise
   */
  applyValueChangesFromFormulas(entityGuid, contentType, formValues, fieldsProps, possibleValueUpdates, possibleFieldsUpdates, slotIsEmpty, entityReader) {
    const valueUpdates = {};
    for (const attribute of contentType.Attributes) {
      const possibleFieldsUpdatesForAttribute = possibleFieldsUpdates.filter(f => f.name === attribute.Name);
      const valueBefore = formValues[attribute.Name];
      const valueFromFormula = possibleValueUpdates[attribute.Name];
      const fieldsFromFormula = possibleFieldsUpdatesForAttribute[possibleFieldsUpdatesForAttribute.length - 1]?.value;
      const newValue = fieldsFromFormula ? fieldsFromFormula : valueFromFormula;
      if (this.shouldUpdate(valueBefore, newValue, slotIsEmpty, fieldsProps[attribute.Name]?.settings._disabledBecauseOfTranslation)) {
        valueUpdates[attribute.Name] = newValue;
      }
    }
    if (Object.keys(valueUpdates).length > 0) {
      if (this.maxValueFormulaCycles > this.valueFormulaCounter) {
        this.valueFormulaCounter++;
        this.itemService.updateItemAttributesValues(entityGuid, valueUpdates, entityReader);
        // return true to make sure fieldProps are not updated yet
        return true;
      } else {
        // consoleLogEditForm('Max value formula cycles reached');
        return false;
      }
    }
    return false;
  }
  /**
   * Used to check if the value of a field should be updated with the value from a formula.
   * @param valueBefore
   * @param valueFromFormula
   * @param slotIsEmpty
   * @param disabledBecauseTranslations
   * @returns true if value should be updated, false otherwise
   */
  shouldUpdate(valueBefore, valueFromFormula, slotIsEmpty, disabledBecauseTranslations) {
    // important to compare with undefined because null is allowed value
    if (slotIsEmpty || disabledBecauseTranslations || valueBefore === undefined || valueFromFormula === undefined) return false;
    let valuesNotEqual = valueBefore !== valueFromFormula;
    // do a more in depth comparison in case of calculated entity fields
    if (valuesNotEqual && Array.isArray(valueBefore) && Array.isArray(valueFromFormula)) {
      valuesNotEqual = !_shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_0__.RxHelpers.arraysEqual(valueBefore, valueFromFormula);
    }
    return valuesNotEqual;
  }
  static #_ = this.ɵfac = function FormItemFormulaService_Factory(t) {
    return new (t || FormItemFormulaService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: FormItemFormulaService,
    factory: FormItemFormulaService.ɵfac
  });
}

/***/ }),

/***/ 98705:
/*!***************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/formulas/formula-designer.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormulaDesignerService: () => (/* binding */ FormulaDesignerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 95429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/helpers */ 56606);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models */ 6951);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services */ 22453);
/* harmony import */ var _shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/store/ngrx-data */ 27521);
/* harmony import */ var _helpers_formula_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/formula.helpers */ 13513);
/* harmony import */ var _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/rxJs/rx.helpers */ 93826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 90852);












/**
 * Contains methods for extended CRUD operations for formulas.
 */
class FormulaDesignerService {
  constructor(formConfig, itemService, contentTypeService, contentTypeItemService, loggingService, translate) {
    this.formConfig = formConfig;
    this.itemService = itemService;
    this.contentTypeService = contentTypeService;
    this.contentTypeItemService = contentTypeItemService;
    this.loggingService = loggingService;
    this.translate = translate;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
  }
  ngOnDestroy() {
    this.formulaCache$?.complete();
    this.formulaResults$?.complete();
    this.designerState$?.complete();
    this.subscription.unsubscribe();
  }
  init() {
    this.formulaResults$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject([]);
    const initialDesignerState = {
      editMode: false,
      entityGuid: undefined,
      fieldName: undefined,
      isOpen: false,
      target: undefined
    };
    this.designerState$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(initialDesignerState);
    const formulaCache = this.buildFormulaCache();
    this.formulaCache$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(formulaCache);
  }
  /**
   * Used for returning formula with specific target on specific field of specific entity.
   * @param entityGuid Specific entity guid
   * @param fieldName Specific field
   * @param target Specific target
   * @param allowDraft
   * @returns Formula
   */
  getFormula(entityGuid, fieldName, target, allowDraft) {
    return this.formulaCache$.value.find(f => f.entityGuid === entityGuid && f.fieldName === fieldName && f.target === target && (allowDraft ? true : !f.isDraft));
  }
  /**
   * Used for returning formula stream with specific target on specific field of specific entity.
   * @param entityGuid Specific entity guid
   * @param fieldName Specific field
   * @param target Specific target
   * @param allowDraft
   * @returns Formula stream
   */
  getFormula$(entityGuid, fieldName, target, allowDraft) {
    const isDraft = allowDraft ? [true, false] : [false];
    return this.formulaCache$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(formulas => formulas.find(f => f.entityGuid === entityGuid && f.fieldName === fieldName && f.target === target && isDraft.includes(f.isDraft))), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)(_shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_5__.RxHelpers.objectsEqual));
  }
  /**
   * Used for returning formulas filtered by optional entity, field or target.
   * @param entityGuid Optional entity guid
   * @param fieldName Optional field
   * @param target Optional target
   * @param allowDraft
   * @returns Filtered formula array
   */
  getFormulas(entityGuid, fieldName, target, allowDraft) {
    return this.formulaCache$.value.filter(f => (entityGuid ? f.entityGuid === entityGuid : true) && (fieldName ? f.fieldName === fieldName : true) && (target ? target?.find(target => f.target == target) : true) && (allowDraft ? true : !f.isDraft));
  }
  /**
   * Used for returning all formulas stream from formulaCache$.
   * @returns Formula cache array stream
   */
  getFormulas$() {
    return this.formulaCache$.asObservable();
  }
  /**
   * Used for updating formula from editor.
   * @param entityGuid
   * @param fieldName
   * @param target
   * @param formula
   * @param run
   */
  updateFormulaFromEditor(entityGuid, fieldName, target, formula, run) {
    let formulaFunction;
    if (run) {
      try {
        formulaFunction = _helpers_formula_helpers__WEBPACK_IMPORTED_MODULE_4__.FormulaHelpers.buildFormulaFunction(formula);
      } catch (error) {
        this.sendFormulaResultToUi(entityGuid, fieldName, target, undefined, true, false);
        const item = this.itemService.getItem(entityGuid);
        const contentTypeId = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.InputFieldHelpers.getContentTypeId(item);
        const contentType = this.contentTypeService.getContentType(contentTypeId);
        const language = this.formConfig.language(); // this.languageStore.getLanguage(this.formConfig.config.formId);
        const itemTitle = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.FieldsSettingsHelpers.getContentTypeTitle(contentType, language);
        const errorLabel = `Error building formula for Entity: "${itemTitle}", Field: "${fieldName}", Target: "${target}"`;
        this.loggingService.addLog(_shared_models__WEBPACK_IMPORTED_MODULE_1__.LogSeverities.Error, errorLabel, error);
        const designerState = this.getDesignerState();
        const isOpenInDesigner = designerState.isOpen && designerState.entityGuid === entityGuid && designerState.fieldName === fieldName && designerState.target === target;
        if (isOpenInDesigner) {
          console.error(errorLabel, error);
        }
      }
    }
    const oldFormulaCache = this.formulaCache$.value;
    const oldFormulaIndex = oldFormulaCache.findIndex(f => f.entityGuid === entityGuid && f.fieldName === fieldName && f.target === target);
    const oldFormulaItem = oldFormulaCache[oldFormulaIndex];
    // Get shared calculated properties, which we need in case the old-formula doesn't have them yet
    const shared = this.buildItemFormulaCacheSharedParts(null, entityGuid);
    const streams = oldFormulaItem?.promises$ && oldFormulaItem?.updateCallback$ ? {
      promises$: oldFormulaItem.promises$,
      callback$: oldFormulaItem.updateCallback$
    } : this.createPromisedParts();
    const newFormulaItem = {
      cache: oldFormulaItem?.cache ?? {},
      entityGuid,
      fieldName,
      fn: formulaFunction?.bind({}),
      isDraft: run ? formulaFunction == null : true,
      source: formula,
      sourceFromSettings: oldFormulaItem?.sourceFromSettings,
      sourceGuid: oldFormulaItem?.sourceGuid,
      sourceId: oldFormulaItem?.sourceId,
      target,
      version: _helpers_formula_helpers__WEBPACK_IMPORTED_MODULE_4__.FormulaHelpers.findFormulaVersion(formula),
      targetEntity: oldFormulaItem?.targetEntity ?? shared.targetEntity,
      user: oldFormulaItem?.user ?? shared.user,
      app: oldFormulaItem?.app ?? shared.app,
      sxc: oldFormulaItem?.sxc ?? shared.sxc,
      stopFormula: false,
      promises$: oldFormulaItem?.promises$ ?? streams.promises$,
      updateCallback$: oldFormulaItem?.updateCallback$ ?? streams.callback$
    };
    const newCache = oldFormulaIndex >= 0 ? [...oldFormulaCache.slice(0, oldFormulaIndex), newFormulaItem, ...oldFormulaCache.slice(oldFormulaIndex + 1)] : [newFormulaItem, ...oldFormulaCache];
    this.formulaCache$.next(newCache);
  }
  /**
   * Used for saving updated formula from editor.
   * @param entityGuid
   * @param fieldName
   * @param target
   * @param formula
   * @param sourceGuid
   * @param sourceId
   * @returns
   */
  updateSaved(entityGuid, fieldName, target, formula, sourceGuid, sourceId) {
    const oldFormulaCache = this.formulaCache$.value;
    const oldFormulaIndex = oldFormulaCache.findIndex(f => f.entityGuid === entityGuid && f.fieldName === fieldName && f.target === target);
    const oldFormulaItem = oldFormulaCache[oldFormulaIndex];
    if (oldFormulaItem == null) {
      return;
    }
    const newFormulaItem = {
      ...oldFormulaItem,
      sourceFromSettings: formula,
      sourceGuid,
      sourceId
    };
    const newCache = [...oldFormulaCache.slice(0, oldFormulaIndex), newFormulaItem, ...oldFormulaCache.slice(oldFormulaIndex + 1)];
    this.formulaCache$.next(newCache);
  }
  /**
   * Used for deleting formula.
   * @param entityGuid
   * @param fieldName
   * @param target
   */
  delete(entityGuid, fieldName, target) {
    const oldFormulaCache = this.formulaCache$.value;
    const oldFormulaIndex = oldFormulaCache.findIndex(f => f.entityGuid === entityGuid && f.fieldName === fieldName && f.target === target);
    const newCache = [...oldFormulaCache.slice(0, oldFormulaIndex), ...oldFormulaCache.slice(oldFormulaIndex + 1)];
    this.formulaCache$.next(newCache);
  }
  /**
   * Used for resetting formula.
   * @param entityGuid
   * @param fieldName
   * @param target
   */
  resetFormula(entityGuid, fieldName, target) {
    const oldResults = this.formulaResults$.value;
    const oldResultIndex = oldResults.findIndex(r => r.entityGuid === entityGuid && r.fieldName === fieldName && r.target === target);
    if (oldResultIndex >= 0) {
      const newResults = [...oldResults.slice(0, oldResultIndex), ...oldResults.slice(oldResultIndex + 1)];
      this.formulaResults$.next(newResults);
    }
    const oldFormulaCache = this.formulaCache$.value;
    const oldFormulaIndex = oldFormulaCache.findIndex(f => f.entityGuid === entityGuid && f.fieldName === fieldName && f.target === target);
    const oldFormulaItem = oldFormulaCache[oldFormulaIndex];
    if (oldFormulaItem?.sourceFromSettings != null) {
      this.updateFormulaFromEditor(entityGuid, fieldName, target, oldFormulaItem.sourceFromSettings, true);
    } else if (oldFormulaIndex >= 0) {
      const newCache = [...oldFormulaCache.slice(0, oldFormulaIndex), ...oldFormulaCache.slice(oldFormulaIndex + 1)];
      this.formulaCache$.next(newCache);
    }
  }
  /**
   * Used for showing formula result in editor.
   * @param entityGuid
   * @param fieldName
   * @param target
   * @param value
   * @param isError
   * @param isOnlyPromise
   */
  sendFormulaResultToUi(entityGuid, fieldName, target, value, isError, isOnlyPromise) {
    const newResult = {
      entityGuid,
      fieldName,
      target,
      value,
      isError,
      isOnlyPromise
    };
    const oldResults = this.formulaResults$.value;
    const oldResultIndex = oldResults.findIndex(r => r.entityGuid === entityGuid && r.fieldName === fieldName && r.target === target);
    const newResults = oldResultIndex >= 0 ? [...oldResults.slice(0, oldResultIndex), newResult, ...oldResults.slice(oldResultIndex + 1)] : [newResult, ...oldResults];
    this.formulaResults$.next(newResults);
  }
  /**
   * Used for getting formula result stream.
   * @param entityGuid
   * @param fieldName
   * @param target
   * @returns Formula result stream
   */
  getFormulaResult$(entityGuid, fieldName, target) {
    return this.formulaResults$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(results => results.find(r => r.entityGuid === entityGuid && r.fieldName === fieldName && r.target === target)), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)(_shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_5__.RxHelpers.objectsEqual));
  }
  /**
   * Used for opening or closing designer
   * @param isOpen
   */
  setDesignerOpen(isOpen) {
    const newState = {
      ...this.getDesignerState(),
      isOpen
    };
    this.setDesignerState(newState);
  }
  /**
   * Used for setting designer state.
   * @param activeDesigner
   */
  setDesignerState(activeDesigner) {
    this.designerState$.next(activeDesigner);
  }
  /**
   * Used for getting designer state.
   * @returns Designer state
   */
  getDesignerState() {
    return this.designerState$.value;
  }
  /**
   * Used for getting designer state stream.
   * @returns Designer state stream
   */
  getDesignerState$() {
    return this.designerState$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)(_shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_5__.RxHelpers.objectsEqual));
  }
  /**
   * Used for building shared parts of formula cache item.
   * @param item
   * @param entityGuid
   * @returns
   */
  buildItemFormulaCacheSharedParts(item, entityGuid) {
    item = item ?? this.itemService.getItem(entityGuid);
    const entity = item.Entity;
    const mdFor = entity.For;
    const targetEntity = {
      guid: entity.Guid,
      id: entity.Id,
      type: {
        guid: entity.Type.Id,
        name: entity.Type.Name
        // id: -999,
      },
      // New v15.04
      for: {
        targetType: mdFor?.TargetType ?? 0,
        guid: mdFor?.Guid,
        number: mdFor?.Number,
        string: mdFor?.String
      }
    };
    const formConfig = this.formConfig.config;
    const user = formConfig.dialogContext.User;
    return {
      targetEntity,
      user: {
        email: user?.Email,
        guid: user?.Guid,
        id: user?.Id,
        isAnonymous: user?.IsAnonymous,
        isSiteAdmin: user?.IsSiteAdmin,
        isContentAdmin: user?.IsContentAdmin,
        isSystemAdmin: user?.IsSystemAdmin,
        name: user?.Name,
        username: user?.Username
      },
      app: {
        appId: parseInt(formConfig.appId, 10),
        zoneId: parseInt(formConfig.zoneId, 10),
        isGlobal: formConfig.dialogContext.App.IsGlobalApp,
        isSite: formConfig.dialogContext.App.IsSiteApp,
        isContent: formConfig.dialogContext.App.IsContentApp,
        getSetting: key => undefined
      },
      sxc: window.$2sxc({
        zoneId: formConfig.zoneId,
        appId: formConfig.appId,
        pageId: formConfig.tabId,
        moduleId: formConfig.moduleId,
        _noContextInHttpHeaders: true,
        _autoAppIdsInUrl: true // auto-add appid and zoneid to url so formula developer can see what's happening
      })
    };
  }
  /**
   * Used for building formula cache.
   * @returns
   */
  buildFormulaCache() {
    const formulaCache = [];
    const language = this.formConfig.language(); // this.languageStore.getLanguage(this.formConfig.config.formId);
    const entityReader = new _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.EntityReader(language.current, language.primary);
    for (const entityGuid of this.formConfig.config.itemGuids) {
      const item = this.itemService.getItem(entityGuid);
      const sharedParts = this.buildItemFormulaCacheSharedParts(item, entityGuid);
      const contentTypeId = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.InputFieldHelpers.getContentTypeId(item);
      const contentType = this.contentTypeService.getContentType(contentTypeId);
      for (const attribute of contentType.Attributes) {
        const settings = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.FieldsSettingsHelpers.setDefaultFieldSettings(entityReader.flattenAll(attribute.Metadata));
        const formulaItems = this.contentTypeItemService.getContentTypeItems(settings.Formulas).filter(formulaItem => {
          const enabled = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.LocalizationHelpers.translate(language, formulaItem.Attributes.Enabled, null);
          return enabled;
        });
        for (const formulaItem of formulaItems) {
          const formula = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.LocalizationHelpers.translate(language, formulaItem.Attributes.Formula, null);
          if (formula == null) {
            continue;
          }
          const target = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.LocalizationHelpers.translate(language, formulaItem.Attributes.Target, null);
          let formulaFunction;
          try {
            formulaFunction = _helpers_formula_helpers__WEBPACK_IMPORTED_MODULE_4__.FormulaHelpers.buildFormulaFunction(formula);
          } catch (error) {
            this.sendFormulaResultToUi(entityGuid, attribute.Name, target, undefined, true, false);
            const itemTitle = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.FieldsSettingsHelpers.getContentTypeTitle(contentType, language);
            this.loggingService.addLog(_shared_models__WEBPACK_IMPORTED_MODULE_1__.LogSeverities.Error, `Error building formula for Entity: "${itemTitle}", Field: "${attribute.Name}", Target: "${target}"`, error);
            this.loggingService.showMessage(this.translate.instant('Errors.FormulaConfiguration'), 2000);
          }
          const streams = this.createPromisedParts();
          const formulaCacheItem = {
            cache: {},
            entityGuid,
            fieldName: attribute.Name,
            fn: formulaFunction?.bind({}),
            isDraft: formulaFunction == null,
            source: formula,
            sourceFromSettings: formula,
            sourceGuid: formulaItem.Guid,
            sourceId: formulaItem.Id,
            target,
            version: _helpers_formula_helpers__WEBPACK_IMPORTED_MODULE_4__.FormulaHelpers.findFormulaVersion(formula),
            targetEntity: sharedParts.targetEntity,
            user: sharedParts.user,
            app: sharedParts.app,
            sxc: sharedParts.sxc,
            stopFormula: false,
            promises$: streams.promises$,
            updateCallback$: streams.callback$
          };
          formulaCache.push(formulaCacheItem);
        }
      }
    }
    return formulaCache;
  }
  /**
   * Used for pacing promises$ and callback$ triggers. Callback$ triggers for the first time when the last promise is resolved.
   * @returns
   */
  createPromisedParts() {
    const promises$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
    const callback$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
    const lastPromise = promises$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.filter)(x => !!x), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.switchMap)(promise => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.from)(promise)));
    // This combineLatest triggers the callback for the first time when the last promise is resolved
    this.subscription.add((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([lastPromise, callback$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.filter)(x => !!x))]).subscribe(([result, callback]) => {
      callback(result);
    }));
    return {
      promises$,
      callback$
    };
  }
  static #_ = this.ɵfac = function FormulaDesignerService_Factory(t) {
    return new (t || FormulaDesignerService)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_shared_services__WEBPACK_IMPORTED_MODULE_2__.FormConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_3__.ItemService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_3__.ContentTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_3__.ContentTypeItemService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_shared_services__WEBPACK_IMPORTED_MODULE_2__.LoggingService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({
    token: FormulaDesignerService,
    factory: FormulaDesignerService.ɵfac
  });
}

/***/ }),

/***/ 63199:
/*!*****************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/formulas/formula-engine.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormulaEngine: () => (/* binding */ FormulaEngine)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _shared_services_features_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/features.service */ 44858);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models */ 6951);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services */ 22453);
/* harmony import */ var _shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/store/ngrx-data */ 27521);
/* harmony import */ var _formula_designer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formula-designer.service */ 98705);
/* harmony import */ var _helpers_formula_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/formula.helpers */ 13513);
/* harmony import */ var _models_formula_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/formula.models */ 66231);
/* harmony import */ var _helpers_formula_settings_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/formula-settings.helper */ 55894);
/* harmony import */ var _helpers_formula_value_corrections_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/formula-value-corrections.helper */ 5502);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 90852);









// tslint:disable-next-line: max-line-length








/**
 * Formula engine is responsible for running formulas and returning the result.
 */
class FormulaEngine {
  constructor(formConfig, itemService, languageService, formulaDesignerService, loggingService, translate, globalConfigService, editInitializerService) {
    this.formConfig = formConfig;
    this.itemService = itemService;
    this.languageService = languageService;
    this.formulaDesignerService = formulaDesignerService;
    this.loggingService = loggingService;
    this.translate = translate;
    this.globalConfigService = globalConfigService;
    this.editInitializerService = editInitializerService;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
    this.features = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_shared_services_features_service__WEBPACK_IMPORTED_MODULE_0__.FeaturesService).getAll();
    this.fieldsSettingsService = null;
    this.formulaPromiseHandler = null;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  init(fieldsSettingsService, formulaPromiseHandler, contentTypeSettings$) {
    this.fieldsSettingsService = fieldsSettingsService;
    this.formulaPromiseHandler = formulaPromiseHandler;
    this.contentTypeSettings$ = contentTypeSettings$;
  }
  // TODO: 2dm -> Here we call all list item formulas on some picker for each item
  /**
   * Used for running all list item formulas for a given attribute/field.
   * @param entityGuid
   * @param entityId
   * @param attribute
   * @param formValues
   * @param inputType
   * @param settingsInitial
   * @param settingsCurrent
   * @param itemIdWithPrefill
   * @param availableItems
   * @returns List of processed picker items
   */
  runAllListItemsFormulas(entityGuid, entityId, attribute, formValues, inputType, settingsInitial, settingsCurrent, itemIdWithPrefill, availableItems) {
    const formulas = this.formulaDesignerService.getFormulas(entityGuid, attribute.Name, Object.values(_models_formula_models__WEBPACK_IMPORTED_MODULE_6__.FormulaListItemTargets), false).filter(f => !f.stopFormula);
    if (formulas.length === 0) {
      return availableItems;
    }
    for (const formula of formulas) {
      for (const item of availableItems) {
        const formulaResult = this.runFormula(formula, entityId, formValues, inputType, settingsInitial, settingsCurrent, itemIdWithPrefill, item);
        switch (formula.target) {
          case _models_formula_models__WEBPACK_IMPORTED_MODULE_6__.FormulaTargets.ListItemLabel:
            item.label = formulaResult.value;
            break;
          case _models_formula_models__WEBPACK_IMPORTED_MODULE_6__.FormulaTargets.ListItemDisabled:
            item.notSelectable = formulaResult.value;
            break;
          case _models_formula_models__WEBPACK_IMPORTED_MODULE_6__.FormulaTargets.ListItemTooltip:
            item.tooltip = formulaResult.value;
            break;
          case _models_formula_models__WEBPACK_IMPORTED_MODULE_6__.FormulaTargets.ListItemInformation:
            item.infoBox = formulaResult.value;
            break;
          case _models_formula_models__WEBPACK_IMPORTED_MODULE_6__.FormulaTargets.ListItemHelpLink:
            item.helpLink = formulaResult.value;
            break;
        }
      }
    }
    return availableItems;
  }
  /**
   * Used for running all formulas for a given attribute/field.
   * @param entityGuid
   * @param entityId
   * @param attribute
   * @param formValues
   * @param inputType
   * @param logic
   * @param settingsInitial
   * @param settingsCurrent
   * @param itemIdWithPrefill
   * @param contentTypeMetadata
   * @param attributeValues
   * @param entityReader
   * @param slotIsEmpty
   * @param formReadOnly
   * @param valueBefore
   * @param logicTools
   * @returns Object with all changes that formulas should make
   */
  runAllFormulas(entityGuid, entityId, attribute, formValues, inputType, logic, settingsInitial, settingsCurrent, itemIdWithPrefill, contentTypeMetadata, attributeValues, entityReader, slotIsEmpty, formReadOnly, valueBefore, logicTools) {
    //TODO: @2dm -> Here for target I send all targets except listItem targets, used to be "null" before
    const formulas = this.formulaDesignerService.getFormulas(entityGuid, attribute.Name, Object.values(_models_formula_models__WEBPACK_IMPORTED_MODULE_6__.FormulaDefaultTargets).concat(Object.values(_models_formula_models__WEBPACK_IMPORTED_MODULE_6__.FormulaOptionalTargets)), false).filter(f => !f.stopFormula);
    let formulaValue;
    let formulaValidation;
    const formulaFields = [];
    const settingsNew = {};
    for (const formula of formulas) {
      const formulaResult = this.runFormula(formula, entityId, formValues, inputType, settingsInitial, settingsCurrent, itemIdWithPrefill);
      if (formulaResult?.promise instanceof Promise) {
        this.formulaPromiseHandler.handleFormulaPromise(entityGuid, formulaResult, formula, inputType);
        formula.stopFormula = formulaResult.stop ?? true;
      } else {
        formula.stopFormula = formulaResult.stop ?? formula.stopFormula;
      }
      if (formulaResult.fields) formulaFields.push(...formulaResult.fields);
      if (formulaResult.value === undefined) {
        continue;
      }
      if (formula.target === _models_formula_models__WEBPACK_IMPORTED_MODULE_6__.FormulaTargets.Value) {
        formulaValue = formulaResult.value;
        continue;
      }
      if (formula.target === _models_formula_models__WEBPACK_IMPORTED_MODULE_6__.FormulaTargets.Validation) {
        formulaValidation = formulaResult.value;
        continue;
      }
      _helpers_formula_settings_helper__WEBPACK_IMPORTED_MODULE_7__.FormulaSettingsHelper.keepSettingsIfTypeMatches(formula.target, settingsCurrent, formulaResult.value, settingsNew);
    }
    const updatedSettings = _helpers_formula_settings_helper__WEBPACK_IMPORTED_MODULE_7__.FormulaSettingsHelper.ensureNewSettingsMatchRequirements(settingsInitial, {
      ...settingsCurrent,
      ...settingsNew
    }, attribute, contentTypeMetadata, inputType, logic, attributeValues, entityReader, slotIsEmpty, formReadOnly, valueBefore, logicTools);
    const runFormulaResult = {
      settings: updatedSettings,
      validation: formulaValidation,
      value: formulaValue,
      fields: formulaFields
    };
    return runFormulaResult;
  }
  /**
   * Used for getting formula setting key.
   * @param fieldName
   * @param currentLanguage
   * @param defaultLanguage
   * @returns formula setting key
   */
  getFormulaSettingsKey(fieldName, currentLanguage, defaultLanguage) {
    return `fieldName:${fieldName}:currentLanguage:${currentLanguage}:defaultLanguage:${defaultLanguage}`;
  }
  /**
   * Used for running a single formula and returning the result.
   * @param formula
   * @param entityId
   * @param formValues
   * @param inputType
   * @param settingsInitial
   * @param settingsCurrent
   * @param itemIdWithPrefill
   * @returns Result of a single formula.
   */
  runFormula(formula, entityId, formValues, inputType, settingsInitial, settingsCurrent, itemIdWithPrefill, item) {
    const language = this.formConfig.language(); // this.languageStore.getLanguage(this.formConfig.config.formId);
    const languages = this.languageService.getLanguages();
    const debugEnabled = this.globalConfigService.getDebugEnabled();
    const initialFormValues = this.editInitializerService.getInitialValues(formula.entityGuid, language.current);
    const formulaProps = _helpers_formula_helpers__WEBPACK_IMPORTED_MODULE_5__.FormulaHelpers.buildFormulaProps(formula,
    // entityId,
    inputType?.Type, settingsInitial, settingsCurrent, formValues, initialFormValues, language, languages, itemIdWithPrefill, debugEnabled, this.itemService, this.formConfig, this.fieldsSettingsService, this.features());
    const isOpenInDesigner = this.isDesignerOpen(formula);
    const ctSettings = this.contentTypeSettings$.value;
    try {
      switch (formula.version) {
        case _models_formula_models__WEBPACK_IMPORTED_MODULE_6__.FormulaVersions.V1:
          if (isOpenInDesigner) {
            console.log(`Running formula${formula.version.toLocaleUpperCase()} for Entity: "${ctSettings._itemTitle}", Field: "${formula.fieldName}", Target: "${formula.target}" with following arguments:`, formulaProps);
          }
          const formulaV1Result = formula.fn(formulaProps.data, formulaProps.context, formulaProps.experimental, item); //TODO: @2dm -> Should I even pass item here? as this is for V1 formulas
          const isArray = formulaV1Result && Array.isArray(formulaV1Result) && formulaV1Result.every(r => typeof r === 'string');
          if (typeof formulaV1Result === 'string' || typeof formulaV1Result === 'number' || typeof formulaV1Result === 'boolean' || formulaV1Result instanceof Date || isArray || !formulaV1Result) {
            if (formula.target === _models_formula_models__WEBPACK_IMPORTED_MODULE_6__.FormulaTargets.Value) {
              const valueV1 = {
                value: _helpers_formula_value_corrections_helper__WEBPACK_IMPORTED_MODULE_8__.FormulaValueCorrections.valueCorrection(formulaV1Result, inputType),
                fields: [],
                stop: null,
                openInDesigner: isOpenInDesigner
              };
              this.formulaDesignerService.sendFormulaResultToUi(formula.entityGuid, formula.fieldName, formula.target, valueV1.value, false, false);
              if (isOpenInDesigner) {
                console.log('Formula result:', valueV1);
              }
              return valueV1;
            }
            return {
              value: formulaV1Result,
              fields: [],
              stop: null,
              openInDesigner: isOpenInDesigner
            };
          }
          console.error('V1 formulas accept only simple values in return statements. If you need to return an complex object, use V2 formulas.');
          return {
            value: undefined,
            fields: [],
            stop: null,
            openInDesigner: isOpenInDesigner
          };
        case _models_formula_models__WEBPACK_IMPORTED_MODULE_6__.FormulaVersions.V2:
          if (isOpenInDesigner) {
            console.log(`Running formula${formula.version.toLocaleUpperCase()} for Entity: "${ctSettings._itemTitle}", Field: "${formula.fieldName}", Target: "${formula.target}" with following arguments:`, formulaProps);
          }
          const formulaV2Result = formula.fn(formulaProps.data, formulaProps.context, formulaProps.experimental, item); //TODO: @2dm -> Added item as last argument so if ew use experimental anywhere nothing breaks
          const valueV2 = _helpers_formula_value_corrections_helper__WEBPACK_IMPORTED_MODULE_8__.FormulaValueCorrections.correctAllValues(formula.target, formulaV2Result, inputType);
          valueV2.openInDesigner = isOpenInDesigner;
          if (valueV2.value === undefined && valueV2.promise) this.formulaDesignerService.sendFormulaResultToUi(formula.entityGuid, formula.fieldName, formula.target, undefined, false, true);else this.formulaDesignerService.sendFormulaResultToUi(formula.entityGuid, formula.fieldName, formula.target, valueV2.value, false, false);
          if (isOpenInDesigner) {
            console.log('Formula result:', valueV2.value);
          }
          return valueV2;
        default:
          if (isOpenInDesigner) {
            console.log(`Running formula for Entity: "${ctSettings._itemTitle}", Field: "${formula.fieldName}", Target: "${formula.target}" with following arguments:`, undefined);
          }
          const formulaDefaultResult = formula.fn();
          const valueDefault = _helpers_formula_value_corrections_helper__WEBPACK_IMPORTED_MODULE_8__.FormulaValueCorrections.correctAllValues(formula.target, formulaDefaultResult, inputType);
          valueDefault.openInDesigner = isOpenInDesigner;
          this.formulaDesignerService.sendFormulaResultToUi(formula.entityGuid, formula.fieldName, formula.target, valueDefault.value, false, false);
          if (isOpenInDesigner) {
            console.log('Formula result:', valueDefault);
          }
          return valueDefault;
      }
    } catch (error) {
      const errorLabel = `Error in formula calculation for Entity: "${ctSettings._itemTitle}", Field: "${formula.fieldName}", Target: "${formula.target}"`;
      this.formulaDesignerService.sendFormulaResultToUi(formula.entityGuid, formula.fieldName, formula.target, undefined, true, false);
      this.loggingService.addLog(_shared_models__WEBPACK_IMPORTED_MODULE_1__.LogSeverities.Error, errorLabel, error);
      if (isOpenInDesigner) {
        console.error(errorLabel, error);
      } else {
        this.loggingService.showMessage(this.translate.instant('Errors.FormulaCalculation'), 2000);
      }
      return {
        value: undefined,
        fields: [],
        stop: null,
        openInDesigner: isOpenInDesigner
      };
    }
  }
  /**
   * Used for checking if formula is open in designer.
   * @param formula
   * @returns True if formula is open in designer, otherwise false
   */
  isDesignerOpen(formula) {
    const designerState = this.formulaDesignerService.getDesignerState();
    const isOpenInDesigner = designerState.isOpen && designerState.entityGuid === formula.entityGuid && designerState.fieldName === formula.fieldName && designerState.target === formula.target;
    return isOpenInDesigner;
  }
  static #_ = this.ɵfac = function FormulaEngine_Factory(t) {
    return new (t || FormulaEngine)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_shared_services__WEBPACK_IMPORTED_MODULE_2__.FormConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_3__.ItemService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_formula_designer_service__WEBPACK_IMPORTED_MODULE_4__.FormulaDesignerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_shared_services__WEBPACK_IMPORTED_MODULE_2__.LoggingService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_3__.GlobalConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_shared_services__WEBPACK_IMPORTED_MODULE_2__.EditInitializerService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
    token: FormulaEngine,
    factory: FormulaEngine.ɵfac
  });
}

/***/ }),

/***/ 23813:
/*!**************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/formulas/formula-promise-handler.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormulaPromiseHandler: () => (/* binding */ FormulaPromiseHandler)
/* harmony export */ });
/* harmony import */ var _shared_helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/helpers/console-log-angular.helper */ 74230);
/* harmony import */ var _models_formula_promise_result_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/formula-promise-result.model */ 44042);
/* harmony import */ var _helpers_formula_settings_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/formula-settings.helper */ 55894);
/* harmony import */ var _helpers_formula_value_corrections_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/formula-value-corrections.helper */ 5502);
/* harmony import */ var _models_formula_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/formula.models */ 66231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);






/**
 * FormulaPromiseHandler is responsible for handling the promise parts of formula results.
 */
class FormulaPromiseHandler {
  constructor() {
    this.fieldsSettingsService = null;
  }
  init(fieldsSettingsService) {
    this.fieldsSettingsService = fieldsSettingsService;
  }
  /**
   * Used for filling queue and triggering next run.
   * @param entityGuid
   * @param resultWithPromise
   * @param formulaCache
   * @param inputType
   */
  handleFormulaPromise(entityGuid, resultWithPromise, formulaCache, inputType) {
    (0,_shared_helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_0__.consoleLogEditForm)("formula promise", formulaCache.target, resultWithPromise);
    if (resultWithPromise.openInDesigner && resultWithPromise.stop === null) {
      console.log(`FYI: formula returned a promise. This automatically stops this formula from running again. If you want it to continue running, return stop: false`);
    }
    formulaCache.promises$.next(resultWithPromise.promise);
    this.DefineCallbackHandlerIfMissing(formulaCache, inputType, entityGuid);
  }
  /**
   * Used for defining the callback handler for the promise if it doesn't already exist and filling queue for the next run.
   * @param formulaCache
   * @param inputType
   * @param entityGuid
   */
  DefineCallbackHandlerIfMissing(formulaCache, inputType, entityGuid) {
    if (!formulaCache.updateCallback$.value) {
      const queue = this.fieldsSettingsService.updateValueQueue;
      formulaCache.updateCallback$.next(result => {
        const corrected = _helpers_formula_value_corrections_helper__WEBPACK_IMPORTED_MODULE_3__.FormulaValueCorrections.correctAllValues(formulaCache.target, result, inputType);
        const queueItem = queue[entityGuid] ?? new _models_formula_promise_result_model__WEBPACK_IMPORTED_MODULE_1__.FormulaPromiseResult({}, [], []);
        let valueUpdates = {};
        let settingUpdate = [];
        if (formulaCache.target === _models_formula_models__WEBPACK_IMPORTED_MODULE_4__.FormulaTargets.Value) {
          valueUpdates = queueItem.valueUpdates ?? {};
          valueUpdates[formulaCache.fieldName] = corrected.value;
        } else if (formulaCache.target.startsWith(_models_formula_models__WEBPACK_IMPORTED_MODULE_4__.SettingsFormulaPrefix)) {
          (0,_shared_helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_0__.consoleLogEditForm)("formula promise settings");
          const settingName = formulaCache.target.substring(_models_formula_models__WEBPACK_IMPORTED_MODULE_4__.SettingsFormulaPrefix.length);
          settingUpdate = queueItem.settingUpdates ?? [];
          const newSetting = {
            name: formulaCache.fieldName,
            settings: [{
              settingName,
              value: result
            }]
          };
          settingUpdate = settingUpdate.filter(s => s.name !== formulaCache.fieldName && !s.settings.find(ss => ss.settingName === settingName));
          settingUpdate.push(newSetting);
        }
        const fieldsUpdates = queueItem.fieldUpdates ?? [];
        if (corrected.fields) fieldsUpdates.push(...corrected.fields);
        queue[entityGuid] = new _models_formula_promise_result_model__WEBPACK_IMPORTED_MODULE_1__.FormulaPromiseResult(valueUpdates, fieldsUpdates, settingUpdate);
        formulaCache.stopFormula = corrected.stop ?? formulaCache.stopFormula;
        this.fieldsSettingsService.retriggerFormulas();
      });
    }
  }
  /**
   * Used for updating values and cleaning settings from queue.
   * @param entityGuid
   * @param queue
   * @param contentType
   * @param formValues
   * @param fieldsProps
   * @param slotIsEmpty
   * @param entityReader
   * @param latestFieldProps
   * @param attributes
   * @param contentTypeMetadata
   * @param constantFieldParts
   * @param itemAttributes
   * @param formReadOnly
   * @param logicTools
   * @param formItemFormulaService
   * @returns true if values were updated, false otherwise and new field props
   */
  updateValuesFromQueue(entityGuid, queue, contentType, formValues, fieldsProps, slotIsEmpty, entityReader, latestFieldProps, attributes, contentTypeMetadata, constantFieldParts, itemAttributes, formReadOnly, logicTools, formItemFormulaService) {
    if (queue[entityGuid] == null) return {
      valuesUpdated: false,
      newFieldProps: null
    };
    const toProcess = queue[entityGuid];
    queue[entityGuid] = {
      valueUpdates: {},
      fieldUpdates: [],
      settingUpdates: []
    };
    // extract updates and flush queue
    const values = toProcess.valueUpdates;
    const fields = toProcess.fieldUpdates;
    const allSettings = toProcess.settingUpdates;
    let valuesUpdated = false;
    if (Object.keys(values).length !== 0 || fields.length !== 0) {
      formItemFormulaService.applyValueChangesFromFormulas(entityGuid, contentType, formValues, fieldsProps, values, fields, slotIsEmpty, entityReader);
      valuesUpdated = true;
    }
    let newFieldProps = null;
    if (allSettings.length) {
      newFieldProps = {
        ...fieldsProps
      };
      allSettings.forEach(valueSet => {
        const settingsNew = {};
        const settingsCurrent = latestFieldProps[valueSet.name]?.settings;
        const constantFieldPart = constantFieldParts.find(f => f.constants.fieldName === valueSet.name);
        valueSet.settings.forEach(setting => {
          _helpers_formula_settings_helper__WEBPACK_IMPORTED_MODULE_2__.FormulaSettingsHelper.keepSettingsIfTypeMatches(_models_formula_models__WEBPACK_IMPORTED_MODULE_4__.SettingsFormulaPrefix + setting.settingName, settingsCurrent, setting.value, settingsNew);
        });
        const updatedSettings = _helpers_formula_settings_helper__WEBPACK_IMPORTED_MODULE_2__.FormulaSettingsHelper.ensureNewSettingsMatchRequirements(constantFieldPart.settingsInitial, {
          ...settingsCurrent,
          ...settingsNew
        }, attributes.find(a => a.Name === valueSet.name), contentTypeMetadata, constantFieldPart.inputType, constantFieldPart.logic, itemAttributes[valueSet.name], entityReader, slotIsEmpty, formReadOnly, formValues[valueSet.name], logicTools);
        newFieldProps[valueSet.name] = {
          ...newFieldProps[valueSet.name],
          settings: updatedSettings
        };
      });
    }
    return {
      valuesUpdated,
      newFieldProps
    };
  }
  static #_ = this.ɵfac = function FormulaPromiseHandler_Factory(t) {
    return new (t || FormulaPromiseHandler)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: FormulaPromiseHandler,
    factory: FormulaPromiseHandler.ɵfac
  });
}

/***/ }),

/***/ 10059:
/*!********************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/formulas/formula.constants.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultFormulaNow: () => (/* binding */ defaultFormulaNow),
/* harmony export */   formV1Prefix: () => (/* binding */ formV1Prefix),
/* harmony export */   formV2Prefix: () => (/* binding */ formV2Prefix),
/* harmony export */   listItemFormulaNow: () => (/* binding */ listItemFormulaNow),
/* harmony export */   requiredFormulaPrefix: () => (/* binding */ requiredFormulaPrefix)
/* harmony export */ });
const requiredFormulaPrefix = 'function ';
// 2022-07-05 2dm had to fix 'v1' because somehow a 'v1 ' was expected
const formV1Prefix = 'v1';
const defaultFormulaV1 = `${requiredFormulaPrefix}v1 (data, context) {
  return data.value;
}`;
const formV2Prefix = 'v2';
const defaultFormulaV2 = `// new formula syntax - see https://go.2sxc.org/formulas
v2((data, context) => {
  return data.value;
});`;
const defaultFormulaNow = defaultFormulaV2;
const listItemFormulaV2 = `v2((data, context, item) => {
  return data.value;
});`;
const listItemFormulaNow = listItemFormulaV2;

/***/ }),

/***/ 55894:
/*!**********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/formulas/helpers/formula-settings.helper.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormulaSettingsHelper: () => (/* binding */ FormulaSettingsHelper)
/* harmony export */ });
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/helpers */ 56606);
/* harmony import */ var _models_formula_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/formula.models */ 66231);


/**
 * Contains methods for updating settings from formulas.
 */
class FormulaSettingsHelper {
  /**
   * Used for calculating new settings.
   * @param settingsInitial Default settings
   * @param settingsCurrent Last settings
   * @param attribute
   * @param contentTypeMetadata
   * @param fieldInputType
   * @param fieldLogic
   * @param attributeValues
   * @param language
   * @param slotIsEmpty If slot is empty
   * @param formReadOnly Is form read only
   * @param valueBefore
   * @param logicTools
   * @returns Calculated settings
   */
  static ensureNewSettingsMatchRequirements(settingsInitial, settingsCurrent, attribute, contentTypeMetadata, fieldInputType, fieldLogic, attributeValues, language, slotIsEmpty, formReadOnly, valueBefore, logicTools) {
    settingsCurrent.Name = settingsCurrent.Name || attribute.Name;
    settingsCurrent._currentRequired = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.ValidationHelpers.isRequired(settingsCurrent);
    const disableTranslation = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.FieldsSettingsHelpers.findDisableTranslation(contentTypeMetadata, fieldInputType, attributeValues, language.primary, attribute.Metadata);
    settingsCurrent.DisableTranslation = slotIsEmpty || disableTranslation;
    settingsCurrent._disabledBecauseOfTranslation = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.FieldsSettingsHelpers.getDisabledBecauseTranslations(attributeValues, settingsCurrent.DisableTranslation, language);
    settingsCurrent.ForcedDisabled = slotIsEmpty || settingsCurrent._disabledBecauseOfTranslation || formReadOnly;
    settingsCurrent.DisableAutoTranslation = settingsInitial.DisableAutoTranslation || settingsCurrent.DisableTranslation;
    // update settings with respective FieldLogics
    const fixed = fieldLogic?.update(settingsCurrent, valueBefore, logicTools) ?? settingsCurrent;
    // consoleLogForm('fixed', JSON.parse(JSON.stringify(fixed)));
    return fixed;
  }
  /**
   * Possibly updates setting with formula result if target and type matches.
   * @param target Formula target
   * @param settings Last/Current settings
   * @param formulaResult Formula result needed for type checking
   * @param settingsNew Settings that are possibly updated
   * @returns True if setting is updated, false if it is not
   */
  static keepSettingsIfTypeMatches(target, settings, formulaResult, settingsNew) {
    if (target.startsWith(_models_formula_models__WEBPACK_IMPORTED_MODULE_1__.SettingsFormulaPrefix)) {
      const settingName = target.substring(_models_formula_models__WEBPACK_IMPORTED_MODULE_1__.SettingsFormulaPrefix.length);
      const prevSetting = settings[settingName];
      const keepNewSetting = prevSetting == null || formulaResult == null // can't check types, hope for the best
      || Array.isArray(prevSetting) && Array.isArray(formulaResult) // can't check types of items in array, hope for the best
      || typeof prevSetting === typeof formulaResult; // maybe typesafe
      if (keepNewSetting) {
        settingsNew[settingName] = formulaResult;
        return true;
      }
    }
    return false;
  }
}

/***/ }),

/***/ 5502:
/*!*******************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/formulas/helpers/formula-value-corrections.helper.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormulaValueCorrections: () => (/* binding */ FormulaValueCorrections)
/* harmony export */ });
/* harmony import */ var _content_type_fields_constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../content-type-fields/constants/data-type.constants */ 42220);
/* harmony import */ var _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../content-type-fields/constants/input-type.constants */ 18170);
/* harmony import */ var _models_formula_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/formula.models */ 66231);



/**
 * Contains methods for correcting formula results.
 */
class FormulaValueCorrections {
  /**
   * This method is used to support ducktyping in the formula result and from it to fill FormulaResultRaw object with corrected values.
   * @param target Formula target
   * @param result Formula result
   * @param inputType InputType is needed to check if the result is a date which needs to be corrected
   * @returns Strongly typed FormulaResultRaw object
   */
  static correctAllValues(target, result, inputType) {
    const stop = result?.stop ?? null;
    if (result === null || result === undefined) return {
      value: result,
      fields: [],
      stop
    };
    if (typeof result === 'object') {
      if (result instanceof Date && target === _models_formula_models__WEBPACK_IMPORTED_MODULE_2__.FormulaTargets.Value) return {
        value: this.valueCorrection(result, inputType),
        fields: [],
        stop
      };
      if (result instanceof Promise) return {
        value: undefined,
        promise: result,
        fields: [],
        stop
      };
      const corrected = result;
      corrected.stop = stop;
      if (result.value && target === _models_formula_models__WEBPACK_IMPORTED_MODULE_2__.FormulaTargets.Value) {
        corrected.value = this.valueCorrection(result.value, inputType);
      }
      if (result.fields) {
        corrected.fields = result.fields?.map(fields => {
          fields.value = this.valueCorrection(fields.value, inputType);
          return fields;
        });
        return corrected;
      }
      return corrected;
    }
    const value = {
      value: result
    };
    // atm we are only correcting Value formulas
    if (target === _models_formula_models__WEBPACK_IMPORTED_MODULE_2__.FormulaTargets.Value) {
      return {
        value: this.valueCorrection(value.value, inputType),
        fields: [],
        stop
      };
    }
    return value;
  }
  /**
   * Used to correct datetime field value from formula result.
   * @param value Field value from formula result
   * @param inputType InputType is needed to check if the result is a date which needs to be corrected
   * @returns Corrected field value
   */
  static valueCorrection(value, inputType) {
    if (value == null) {
      return value;
    } else if (inputType?.Type === _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_1__.InputTypeConstants.DateTimeDefault) {
      const date = new Date(value);
      // if value is not ISO string, nor milliseconds, correct timezone
      if (!(typeof value === 'string' && value.endsWith('Z')) && date.getTime() !== value) {
        date.setTime(date.getTime() - date.getTimezoneOffset() * 60000);
      }
      date.setMilliseconds(0);
      return date.toJSON();
    } else if (typeof value !== 'string' && (inputType?.Type?.startsWith(_content_type_fields_constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__.DataTypeConstants.String.toLocaleLowerCase()) || inputType?.Type?.startsWith(_content_type_fields_constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__.DataTypeConstants.Hyperlink.toLocaleLowerCase()))) {
      return value.toString();
    }
    return value;
  }
}

/***/ }),

/***/ 13513:
/*!**************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/formulas/helpers/formula.helpers.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormulaHelpers: () => (/* binding */ FormulaHelpers)
/* harmony export */ });
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/helpers */ 56606);
/* harmony import */ var _raw_loader_editor_intellisense_function_v2_rawts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!../editor-intellisense-function-v2.rawts */ 15445);
/* harmony import */ var _formula_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formula.constants */ 10059);
/* harmony import */ var _models_formula_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/formula.models */ 66231);

// Import the type definitions for intellisense


// tslint:disable-next-line: max-line-length

/**
 * Contains methods for building formulas.
 */
class FormulaHelpers {
  /**
   * Used to clean formula text.
   * @param formula Formula text to clean
   * @returns Cleaned formula text
   */
  static cleanFormula(formula) {
    if (!formula) {
      return formula;
    }
    // Clean and remove any leading single-line comments
    let cleanFormula = formula.trim();
    if (cleanFormula.startsWith('//')) {
      cleanFormula = cleanFormula.replace(/^\/\/.*\n/gm, '').trim();
    }
    /*
      Valid function string:
      function NAME (...ARGS) { BODY }
           Must build function string for these inputs:
      v1 (...ARGS) { BODY }
      function v1 (...ARGS) { BODY }
      v2((...ARGS) => { BODY });
           Everything else is ignored.
      TODO: do this properly with regex if it's not too slow
    */
    if (cleanFormula.startsWith(_formula_constants__WEBPACK_IMPORTED_MODULE_2__.formV1Prefix)) {
      cleanFormula = `${_formula_constants__WEBPACK_IMPORTED_MODULE_2__.requiredFormulaPrefix}${cleanFormula}`;
    } else if (cleanFormula.startsWith(`${_formula_constants__WEBPACK_IMPORTED_MODULE_2__.requiredFormulaPrefix}${_formula_constants__WEBPACK_IMPORTED_MODULE_2__.formV1Prefix}`)) {
      cleanFormula = cleanFormula;
    } else if (cleanFormula.startsWith('v2(')) {
      cleanFormula = cleanFormula.substring(3, cleanFormula.lastIndexOf('}') + 1);
      cleanFormula = cleanFormula.replace('=>', '');
      cleanFormula = `${_formula_constants__WEBPACK_IMPORTED_MODULE_2__.requiredFormulaPrefix}v2 ${cleanFormula}`;
    }
    return cleanFormula;
  }
  /**
   * Used to find formula version.
   * @param formula Formula text
   * @returns If formula is V1 or V2
   */
  static findFormulaVersion(formula) {
    const cleanFormula = this.cleanFormula(formula);
    const versionPart = cleanFormula.substring(_formula_constants__WEBPACK_IMPORTED_MODULE_2__.requiredFormulaPrefix.length, cleanFormula.indexOf('(')).trim();
    const validVersions = Object.values(_models_formula_models__WEBPACK_IMPORTED_MODULE_3__.FormulaVersions);
    return validVersions.includes(versionPart) ? versionPart : undefined;
  }
  /**
   * Used to build executable formula function from formula text.
   * @param formula Formula text
   * @returns Executable formula function
   */
  static buildFormulaFunction(formula) {
    const cleanFormula = this.cleanFormula(formula);
    const fn = new Function(`return ${cleanFormula}`)();
    return fn;
  }
  /**
   * Used to build formula props parameters.
   * @param formula
   * @param entityId
   * @param inputType
   * @param settingsInitial
   * @param settingsCurrent
   * @param formValues
   * @param initialFormValues
   * @param languages
   * @param itemHeader
   * @param debugEnabled
   * @param itemService
   * @param formConfig
   * @param fieldsSettingsService
   * @param features
   * @returns Formula properties
   */
  static buildFormulaProps(formula,
  // entityId: number,
  inputType, settingsInitial, settingsCurrent, formValues, initialFormValues, language, languages, itemHeader, debugEnabled, itemService, formConfig, fieldsSettingsService, features) {
    // console.log('2dm - buildFormulaProps()');
    switch (formula.version) {
      case _models_formula_models__WEBPACK_IMPORTED_MODULE_3__.FormulaVersions.V1:
      case _models_formula_models__WEBPACK_IMPORTED_MODULE_3__.FormulaVersions.V2:
        const data = {
          ...formValues,
          get default() {
            return undefined;
          },
          get initial() {
            return undefined;
          },
          get parameters() {
            return undefined;
          },
          get prefill() {
            return undefined;
          },
          get value() {
            return undefined;
          },
          get settings() {
            return undefined;
          }
        };
        Object.defineProperties(data, {
          default: {
            get() {
              if (formula.target === _models_formula_models__WEBPACK_IMPORTED_MODULE_3__.FormulaTargets.Value) return _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.InputFieldHelpers.parseDefaultValue(formula.fieldName, inputType, settingsInitial);
              if (formula.target.startsWith(_models_formula_models__WEBPACK_IMPORTED_MODULE_3__.SettingsFormulaPrefix)) {
                const settingName = formula.target.substring(_models_formula_models__WEBPACK_IMPORTED_MODULE_3__.SettingsFormulaPrefix.length);
                return settingsInitial[settingName];
              }
            }
          },
          initial: {
            get() {
              if (formula.target !== _models_formula_models__WEBPACK_IMPORTED_MODULE_3__.FormulaTargets.Value) {
                return;
              }
              return initialFormValues[formula.fieldName];
            }
          },
          parameters: {
            get() {
              // NOTE 2023-06-01 2dm - changed this to only take the new parameters
              // For a while it took the prefill, but that was a bad choice
              // I hope/assume that it's not used in the wild yet, so we can change it
              // But we could end up causing trouble for 1-2 developers
              return FormulaHelpers.buildFormulaPropsParameters(itemHeader.ClientData?.parameters /* itemHeader.Prefill */);
            }
          },
          prefill: {
            get() {
              if (formula.target !== _models_formula_models__WEBPACK_IMPORTED_MODULE_3__.FormulaTargets.Value) {
                return;
              }
              return _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.InputFieldHelpers.parseDefaultValue(formula.fieldName, inputType, settingsInitial, itemHeader, true);
            }
          },
          value: {
            get() {
              if (formula.target === _models_formula_models__WEBPACK_IMPORTED_MODULE_3__.FormulaTargets.Value) {
                return formValues[formula.fieldName];
              }
              if (formula.target === _models_formula_models__WEBPACK_IMPORTED_MODULE_3__.FormulaTargets.Validation) {
                const formulaValidation = {
                  severity: '',
                  message: ''
                };
                return formulaValidation;
              }
              if (formula.target.startsWith(_models_formula_models__WEBPACK_IMPORTED_MODULE_3__.SettingsFormulaPrefix)) {
                const settingName = formula.target.substring(_models_formula_models__WEBPACK_IMPORTED_MODULE_3__.SettingsFormulaPrefix.length);
                return settingsCurrent[settingName];
              }
            }
          }
        });
        const propsV1 = {
          data,
          context: {
            app: {
              ...formula.app,
              getSetting: settingPath => {
                if (formula.version === _models_formula_models__WEBPACK_IMPORTED_MODULE_3__.FormulaVersions.V1) {
                  console.warn('app.getSetting() is not available in v1 formulas, please use v2.');
                  return '⚠️ error - see console';
                }
                const result = formConfig.config.settings.Values[settingPath];
                if (result != null) return result;
                console.warn(`Error: Setting '${settingPath}' not found. Did you configure it in the ContentType to be included? ` + `See https://go.2sxc.org/formulas`);
                return '⚠️ error - see console';
              }
            },
            cache: formula.cache,
            culture: {
              code: language.current,
              name: languages.find(l => l.NameId === language.current)?.Culture
            },
            debug: debugEnabled,
            features: {
              isEnabled(name) {
                return features.find(f => f.nameId === name)?.isEnabled ?? false;
              }
            },
            form: {
              runFormulas() {
                if (formula.version === _models_formula_models__WEBPACK_IMPORTED_MODULE_3__.FormulaVersions.V1) {
                  console.warn('form.runFormulas() is being deprecated. Use V2 formulas and return the promise. Formulas will auto-run when it completes.');
                  fieldsSettingsService.retriggerFormulas();
                } else if (formula.version === _models_formula_models__WEBPACK_IMPORTED_MODULE_3__.FormulaVersions.V2) {
                  console.error('form.runFormulas() is not supported in V2 formulas. Just return the promise. Formulas will auto-run when it completes.');
                }
              }
            },
            // WIP v14.11 move sxc to cache like app - must watch a bit till ca. Dec 2022 to ensure caching is ok for this
            sxc: formula.sxc,
            target: {
              entity: formula.targetEntity,
              name: formula.target === _models_formula_models__WEBPACK_IMPORTED_MODULE_3__.FormulaTargets.Value || formula.target === _models_formula_models__WEBPACK_IMPORTED_MODULE_3__.FormulaTargets.Validation ? formula.fieldName : formula.target.substring(formula.target.lastIndexOf('.') + 1),
              type: formula.target === _models_formula_models__WEBPACK_IMPORTED_MODULE_3__.FormulaTargets.Value || formula.target === _models_formula_models__WEBPACK_IMPORTED_MODULE_3__.FormulaTargets.Validation ? formula.target : formula.target.substring(0, formula.target.lastIndexOf('.'))
            },
            user: formula.user
          },
          experimental: {
            getEntities() {
              const v1Entities = itemService.getItems(formConfig.config.itemGuids).map(item => {
                const v1Entity = {
                  guid: item.Entity.Guid,
                  id: item.Entity.Id,
                  type: {
                    id: item.Entity.Type.Id,
                    guid: item.Entity.Type.Id,
                    name: item.Entity.Type.Name
                  }
                };
                return v1Entity;
              });
              return v1Entities;
            },
            getSettings(fieldName) {
              return fieldsSettingsService.getFieldSettings(fieldName);
            },
            getValues(entityGuid) {
              const item = itemService.getItem(entityGuid);
              const values = {};
              for (const [fieldName, fieldValues] of Object.entries(item.Entity.Attributes)) {
                values[fieldName] = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.LocalizationHelpers.translate(language, fieldValues, null);
              }
              return values;
            }
          }
        };
        return propsV1;
      default:
        return;
    }
  }
  /**
   * Used to build the formula props parameters as a record of key-value pairs.
   * @param prefillAsParameters
   * @returns
   */
  static buildFormulaPropsParameters(prefillAsParameters) {
    return prefillAsParameters ? JSON.parse(JSON.stringify(prefillAsParameters)) : {};
  }
  /**
   * Used to build the designer snippets for use in formulas.
   * @param formula
   * @param fieldOptions
   * @param itemHeader
   * @returns Designer snippets for use in formulas
   */
  static buildDesignerSnippetsData(formula, fieldOptions, prefillAsParameters) {
    switch (formula.version) {
      case _models_formula_models__WEBPACK_IMPORTED_MODULE_3__.FormulaVersions.V1:
        const formulaPropsParameters = this.buildFormulaPropsParameters(prefillAsParameters);
        const snippets = ['value', 'default', 'prefill', 'initial', ...fieldOptions.map(f => f.fieldName), 'parameters.ChangeThis', ...Object.keys(formulaPropsParameters).map(key => `parameters.${key}`)].map(name => {
          const code = `data.${name}`;
          const fieldSnippet = {
            code,
            label: code
          };
          return fieldSnippet;
        });
        return snippets;
      default:
        return;
    }
  }
  /**
   * Used to build the designer snippets context for use in formulas.
   * @param formula
   * @returns Designer snippets context for use in formulas
   */
  static buildDesignerSnippetsContext(formula) {
    switch (formula.version) {
      case _models_formula_models__WEBPACK_IMPORTED_MODULE_3__.FormulaVersions.V1:
        const snippets = ['app.appId', 'app.zoneId', 'app.isGlobal', 'app.isSite', 'app.isContent', 'cache.ChangeThis', 'culture.code', 'culture.name', 'debug', 'features.isEnabled(\'nameId\')', 'form.runFormulas()', 'sxc.ChangeThis', 'target.entity.id', 'target.entity.guid', 'target.name', 'target.type', 'user.id', 'user.isAnonymous', 'user.isSiteAdmin', 'user.isSystemAdmin'].map(name => {
          const code = `context.${name}`;
          const fieldSnippet = {
            code,
            label: code
          };
          return fieldSnippet;
        });
        return snippets;
      default:
        return;
    }
  }
  /**
   * Used to build the formula typings for use in intellisense.
   * @param formula
   * @param fieldOptions
   * @param itemHeader
   * @returns Formula typings for use in intellisense
   */
  static buildFormulaTypings(formula, fieldOptions, prefillAsParameters) {
    switch (formula.version) {
      case _models_formula_models__WEBPACK_IMPORTED_MODULE_3__.FormulaVersions.V2:
        {
          const formulaPropsParameters = this.buildFormulaPropsParameters(prefillAsParameters);
          const allFields = fieldOptions.map(f => `${f.fieldName}: any;`).join('\n');
          const allParameters = Object.keys(formulaPropsParameters).map(key => `${key}: any;`).join('\n');
          const final = _raw_loader_editor_intellisense_function_v2_rawts__WEBPACK_IMPORTED_MODULE_1__["default"].replace('/* [inject:AllFields] */', allFields).replace('/* [inject:AllParameters] */', allParameters);
          // console.error('test 2dm', final);
          return final;
          // TODO: probably update the entity-type info which was added in v14.07.05
        }
      default:
        return;
    }
  }
}

/***/ }),

/***/ 44042:
/*!**************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/formulas/models/formula-promise-result.model.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormulaPromiseResult: () => (/* binding */ FormulaPromiseResult)
/* harmony export */ });
class FormulaPromiseResult {
  constructor(valueUpdates, fieldUpdates, settingUpdates) {
    this.valueUpdates = valueUpdates;
    this.fieldUpdates = fieldUpdates;
    this.settingUpdates = settingUpdates;
  }
}

/***/ }),

/***/ 66231:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/formulas/models/formula.models.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormulaDefaultTargets: () => (/* binding */ FormulaDefaultTargets),
/* harmony export */   FormulaListItemTargets: () => (/* binding */ FormulaListItemTargets),
/* harmony export */   FormulaOptionalTargets: () => (/* binding */ FormulaOptionalTargets),
/* harmony export */   FormulaTargets: () => (/* binding */ FormulaTargets),
/* harmony export */   FormulaVersions: () => (/* binding */ FormulaVersions),
/* harmony export */   ListItemFormulaPrefix: () => (/* binding */ ListItemFormulaPrefix),
/* harmony export */   SettingsFormulaPrefix: () => (/* binding */ SettingsFormulaPrefix)
/* harmony export */ });
const FormulaVersions = {
  V1: 'v1',
  V2: 'v2'
};
const ListItemFormulaPrefix = 'Field.ListItem.';
const SettingsFormulaPrefix = 'Field.Settings.';
const FormulaListItemTargets = {
  ListItemLabel: `${ListItemFormulaPrefix}Label`,
  ListItemDisabled: `${ListItemFormulaPrefix}Disabled`,
  ListItemTooltip: `${ListItemFormulaPrefix}Tooltip`,
  ListItemInformation: `${ListItemFormulaPrefix}Information`,
  ListItemHelpLink: `${ListItemFormulaPrefix}HelpLink`
};
const FormulaOptionalTargets = {
  Collapsed: `${SettingsFormulaPrefix}Collapsed`,
  DropdownValues: `${SettingsFormulaPrefix}DropdownValues`
};
const FormulaDefaultTargets = {
  Disabled: `${SettingsFormulaPrefix}Disabled`,
  Name: `${SettingsFormulaPrefix}Name`,
  Notes: `${SettingsFormulaPrefix}Notes`,
  Required: `${SettingsFormulaPrefix}Required`,
  Value: 'Field.Value',
  Visible: `${SettingsFormulaPrefix}Visible`,
  Validation: 'Field.Validation'
};
const FormulaTargets = {
  ...FormulaDefaultTargets,
  ...FormulaOptionalTargets,
  ...FormulaListItemTargets
};

/***/ }),

/***/ 32373:
/*!***********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/constants/field-metadata.constants.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldMetadataKey: () => (/* binding */ FieldMetadataKey)
/* harmony export */ });
const FieldMetadataKey = 'FieldMetadata';

/***/ }),

/***/ 64158:
/*!****************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/constants/index.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BestValueModes: () => (/* reexport safe */ _localization_constants__WEBPACK_IMPORTED_MODULE_1__.BestValueModes),
/* harmony export */   FieldMetadataKey: () => (/* reexport safe */ _field_metadata_constants__WEBPACK_IMPORTED_MODULE_0__.FieldMetadataKey),
/* harmony export */   MetadataDecorators: () => (/* reexport safe */ _metadata_decorators_constants__WEBPACK_IMPORTED_MODULE_2__.MetadataDecorators),
/* harmony export */   TranslationLinks: () => (/* reexport safe */ _translation_link_constants__WEBPACK_IMPORTED_MODULE_3__.TranslationLinks),
/* harmony export */   WrappersConstants: () => (/* reexport safe */ _wrappers_constants__WEBPACK_IMPORTED_MODULE_4__.WrappersConstants),
/* harmony export */   WrappersLocalizationOnly: () => (/* reexport safe */ _wrappers_constants__WEBPACK_IMPORTED_MODULE_4__.WrappersLocalizationOnly)
/* harmony export */ });
/* harmony import */ var _field_metadata_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field-metadata.constants */ 32373);
/* harmony import */ var _localization_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localization.constants */ 25182);
/* harmony import */ var _metadata_decorators_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata-decorators.constants */ 16335);
/* harmony import */ var _translation_link_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translation-link.constants */ 8809);
/* harmony import */ var _wrappers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wrappers.constants */ 17011);






/***/ }),

/***/ 25182:
/*!*********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/constants/localization.constants.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BestValueModes: () => (/* binding */ BestValueModes)
/* harmony export */ });
const BestValueModes = {
  Default: 'Default',
  Strict: 'Strict'
};

/***/ }),

/***/ 16335:
/*!****************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/constants/metadata-decorators.constants.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataDecorators: () => (/* binding */ MetadataDecorators)
/* harmony export */ });
const MetadataDecorators = {
  LanguagesDecorator: 'LanguagesDecorator',
  SaveEmptyDecorator: 'SaveEmptyDecorator'
};

/***/ }),

/***/ 8809:
/*!*************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/constants/translation-link.constants.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslationLinks: () => (/* binding */ TranslationLinks)
/* harmony export */ });
const TranslationLinks = {
  Translate: 'Translate',
  DontTranslate: 'DontTranslate',
  MissingDefaultLangValue: 'MissingDefaultLangValue',
  LinkReadOnly: 'LinkReadOnly',
  LinkReadWrite: 'LinkReadWrite',
  LinkCopyFrom: 'LinkCopyFrom'
};

/***/ }),

/***/ 17011:
/*!*****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/constants/wrappers.constants.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WrappersConstants: () => (/* binding */ WrappersConstants),
/* harmony export */   WrappersLocalizationOnly: () => (/* binding */ WrappersLocalizationOnly)
/* harmony export */ });
const WrappersConstants = {
  AdamWrapper: 'app-adam-wrapper',
  CollapsibleWrapper: 'app-collapsible-wrapper',
  DropzoneWrapper: 'app-dropzone-wrapper',
  PickerExpandableWrapper: 'app-picker-expandable-wrapper',
  PickerPreviewWrapper: 'app-picker-preview-wrapper',
  ExpandableWrapper: 'app-expandable-wrapper',
  HiddenWrapper: 'app-hidden-wrapper',
  HyperlinkDefaultExpandableWrapper: 'app-hyperlink-default-expandable-wrapper',
  HyperlinkLibraryExpandableWrapper: 'app-hyperlink-library-expandable-wrapper',
  LocalizationWrapper: 'app-localization-wrapper' // default
};
const WrappersLocalizationOnly = {
  wrappers: [WrappersConstants.LocalizationWrapper]
};

/***/ }),

/***/ 12220:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/helpers/control.helpers.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlHelpers: () => (/* binding */ ControlHelpers)
/* harmony export */ });
/* harmony import */ var _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/rxJs/rx.helpers */ 93826);

class ControlHelpers {
  /** Searches where newValues has values different from oldValues */
  static getFormChanges(oldValues, newValues) {
    const changes = {};
    for (const key of Object.keys(newValues)) {
      const newValue = newValues[key];
      const oldValue = oldValues[key];
      if (this.controlValuesEqual(newValue, oldValue)) {
        continue;
      }
      changes[key] = newValue;
    }
    return Object.keys(changes).length === 0 ? undefined : changes;
  }
  /** TODO: Try to remove this by assigning controls [formControlName] in [formGroup] */
  static markControlTouched(control) {
    if (control.touched) {
      return;
    }
    control.markAsTouched();
    control.updateValueAndValidity();
  }
  /** Use to update form controls value */
  static patchControlValue(control, newValue) {
    if (!control.touched) {
      control.markAsTouched();
    }
    if (!control.dirty && !this.controlValuesEqual(control.value, newValue)) {
      control.markAsDirty();
    }
    control.patchValue(newValue);
  }
  /** Disables/enables control if not already disabled/enabled. Use this helper to trigger fewer events on the form */
  static disableControl(control, disable) {
    if (control.disabled === disable) return;
    if (disable) control.disable();else control.enable();
  }
  static controlValuesEqual(x, y) {
    if (x === y) {
      return true;
    }
    if (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y)) {
      return true;
    }
    if (Array.isArray(x) && Array.isArray(y) && _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_0__.RxHelpers.arraysEqual(x, y)) {
      return true;
    }
    return false;
  }
}

/***/ }),

/***/ 33711:
/*!*********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/helpers/dropzone-dragging.helper.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropzoneDraggingHelper: () => (/* binding */ DropzoneDraggingHelper)
/* harmony export */ });
class DropzoneDraggingHelper {
  constructor(zone) {
    this.zone = zone;
    this.eventListeners = [];
  }
  /** Starts listening for dragover and drop events on a given element */
  attach(htmlEl) {
    this.zone.runOutsideAngular(() => {
      htmlEl.addEventListener('dragover', dragoverListener, {
        passive: true
      });
      htmlEl.addEventListener('drop', dropListener, {
        passive: true
      });
      this.eventListeners.push({
        element: htmlEl,
        type: 'dragover',
        listener: dragoverListener
      }, {
        element: htmlEl,
        type: 'drop',
        listener: dropListener
      });
      function dragoverListener() {
        clearTimeouts(window.windowBodyTimeouts); // clear timeouts from global array of timeouts which clear draggingClass from body
        document.body.classList.add(window.draggingClass);
      }
      function dropListener() {
        document.body.classList.remove(window.draggingClass);
      }
      function clearTimeouts(timeoutsArray) {
        for (const timeout of timeoutsArray) {
          clearTimeout(timeout);
        }
        timeoutsArray.splice(0, timeoutsArray.length);
      }
    });
  }
  /** Removes event listeners from registered elements */
  detach() {
    this.zone.runOutsideAngular(() => {
      this.eventListeners.forEach(({
        element,
        type,
        listener
      }) => {
        element.removeEventListener(type, listener);
      });
    });
  }
}

/***/ }),

/***/ 95443:
/*!**********************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/helpers/entity-reader.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityReader: () => (/* binding */ EntityReader)
/* harmony export */ });
/* harmony import */ var _localization_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localization.helpers */ 3482);

class EntityReader {
  constructor(current, primary) {
    this.current = current;
    this.primary = primary;
  }
  // WIP - to make code clearer, this is what should be used from now on
  // But we'll probably end up calling this from the EntityReader only, so it should be straight forward
  getBestValue(attributeValues, defaultValue) {
    return _localization_helpers__WEBPACK_IMPORTED_MODULE_0__.LocalizationHelpers.translate(this, attributeValues, defaultValue);
  }
  flatten(metadataItem) {
    return this.flattenAll([metadataItem]);
  }
  flattenAll(metadataItems) {
    if (metadataItems == null || metadataItems.length === 0 || metadataItems[0] == null) return {};
    const merged = {};
    // copy metadata settings which are not @All
    for (const item of metadataItems) {
      if (item.Type.Id === '@All') {
        continue;
      }
      for (const [name, values] of Object.entries(item.Attributes)) {
        const value = this.getBestValue(values, null);
        merged[name] = value;
      }
    }
    // copy @All metadata settings, overwriting previous settings
    for (const item of metadataItems) {
      if (item.Type.Id !== '@All') {
        continue;
      }
      for (const [name, values] of Object.entries(item.Attributes)) {
        const value = this.getBestValue(values, null);
        // do not overwrite previous settings if @All is empty
        const exists = merged[name] != null;
        const emptyAll = value == null || value === '';
        if (exists && emptyAll) {
          continue;
        }
        merged[name] = value;
      }
    }
    return merged;
  }
}

/***/ }),

/***/ 41573:
/*!**************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/helpers/field-mask.helper.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldMask: () => (/* binding */ FieldMask)
/* harmony export */ });
/* harmony import */ var _shared_services_service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/service-base */ 4979);
/* harmony import */ var _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/logging/eav-logger */ 6812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _form_builder_fields_builder_field_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../form/builder/fields-builder/field-state */ 5091);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ 22453);






const logThis = false;
const nameOfThis = 'FieldMask';
const FieldsFind = /\[.*?\]/ig;
const FieldUnwrap = /[\[\]]/ig;
/**
 * Create a new FieldMask instance and access result with resolve
 * @example
 * const mask = new FieldMask("[FirstName]", formGroup.controls);
 * const maskValue = mask.resolve();
 *
 * @param mask a string like "[FirstName] [LastName]"
 * @param model usually FormGroup controls, passed into here
 * @param overloadPreCleanValues a function which will "scrub" the found field-values
 */
class FieldMask extends _shared_services_service_base__WEBPACK_IMPORTED_MODULE_0__.ServiceBase {
  constructor(injector) {
    super(new _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_1__.EavLogger(nameOfThis, logThis));
    this.injector = injector;
    this.signal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)('');
    this.watch = false;
    /** Fields used in the mask */
    this.fieldsUsedInMask = [];
    this.fieldState = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_form_builder_fields_builder_field_state__WEBPACK_IMPORTED_MODULE_2__.FieldState);
    this.controls = this.fieldState.group.controls;
    this.fieldConfig = this.fieldState.config;
    this.formConfig = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services__WEBPACK_IMPORTED_MODULE_3__.FormConfigService);
    this.log.a('constructor');
  }
  ngOnDestroy() {
    this.destroy();
  }
  /** Attach any processing events before the mask is resolved the first time */
  initPreClean(overloadPreCleanValues) {
    this.log.a('initPreClean');
    this.preClean = overloadPreCleanValues;
    return this;
  }
  /**
   * attach a callback.
   * Someday should simply be replaced to use the signal instead.
   * @param callback
   * @returns
   */
  initCallback(callback) {
    this.log.a('initCallback');
    this.callback = callback;
    this.watch = true;
    return this;
  }
  init(name, mask, watch) {
    this.log.rename(`${this.log.name}-${name}`);
    // mut happen before updateMask
    if (watch != null) this.watch = watch;
    this.updateMask(mask);
    return this;
  }
  logChanges() {
    // use logger, but if not enabled, create new just for this
    const l = this.log.enabled ? this.log : new _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_1__.EavLogger(nameOfThis, true);
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.effect)(() => {
      const latest = this.signal();
      l.a(`Mask '${this.mask}' value changed to: ${latest}`);
    }, {
      injector: this.injector
    });
    return this;
  }
  updateMask(mask) {
    this.mask = mask ?? '';
    this.fieldsUsedInMask = this.extractFieldNames(this.mask);
    // bind auto-watch only if needed...
    // otherwise it's just on-demand
    if (this.watch || this.callback) this.watchAllFields();
    this.onChange();
  }
  /** Resolves a mask to the final value */
  resolve() {
    // if no mask, exit early
    if (!hasPlaceholders(this.mask)) return this.mask;
    let value = lowercaseInsideSquareBrackets(this.mask);
    if (this.formConfig != null) value = value.replace('[app:appid]', this.formConfig.config.appId).replace('[app:zoneid]', this.formConfig.config.zoneId);
    if (this.fieldConfig != null) value = value.replace('[guid]', this.fieldConfig.entityGuid).replace('[id]', this.fieldConfig.entityId.toString());
    this.fieldsUsedInMask.forEach((e, i) => {
      const replaceValue = this.controls.hasOwnProperty(e) && this.controls[e] && this.controls[e].value ? this.controls[e].value : '';
      const cleaned = this.preClean(e, replaceValue);
      value = value.replace('[' + e.toLowerCase() + ']', cleaned);
    });
    return value;
  }
  /** Retrieves a list of all fields used in the mask */
  extractFieldNames(mask) {
    // exit early if mask very simple or not a mask
    if (!mask || !hasPlaceholders(mask)) return [];
    const result = [];
    const matches = mask.match(FieldsFind);
    if (matches) matches.forEach(fieldName => {
      const staticName = fieldName.replace(FieldUnwrap, '');
      result.push(staticName);
    });else
      // TODO: ask is this good
      result.push(this.mask);
    return result;
  }
  /** Default preClean function, if no other function was specified for this */
  preClean(key, value) {
    return value;
  }
  /** Change-event - will only fire if it really changes */
  onChange() {
    const maybeNew = this.resolve();
    if (this.signal() !== maybeNew) {
      this.signal.set(maybeNew);
      this.callback?.(maybeNew);
    }
  }
  /**
   * Add watcher and execute onChange.
   * Uses observables, since that's what angular provides on valueChanges.
   */
  watchAllFields() {
    // add a watch for each field in the field-mask
    this.fieldsUsedInMask.forEach(field => {
      const control = this.controls[field];
      if (!control) return;
      const valueSub = control.valueChanges.subscribe(_ => this.onChange());
      this.subscriptions.add(valueSub);
    });
  }
  static #_ = this.ɵfac = function FieldMask_Factory(t) {
    return new (t || FieldMask)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: FieldMask,
    factory: FieldMask.ɵfac
  });
}
function hasPlaceholders(mask) {
  return (mask ?? '').includes('[');
}
/** used for query parameters */
function lowercaseInsideSquareBrackets(value) {
  return value.replace(/\[([^\]]+)\]/g, (match, group) => `[${group.toLowerCase()}]`);
}

/***/ }),

/***/ 70084:
/*!********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/helpers/fields-settings.helpers.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldsSettingsHelpers: () => (/* binding */ FieldsSettingsHelpers)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 56606);
/* harmony import */ var _form_fields_empty_empty_field_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../form/fields/empty/empty-field-helpers */ 82895);
/* harmony import */ var _form_shared_field_logic_field_logic_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../form/shared/field-logic/field-logic-manager */ 96600);
/* harmony import */ var _form_wrappers_localization_wrapper_translate_menu_translate_menu_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../form/wrappers/localization-wrapper/translate-menu/translate-menu.helpers */ 3076);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ 64158);





class FieldsSettingsHelpers {
  static setDefaultContentTypeSettings(settings, contentType, language, itemHeader) {
    const defaultSettings = {
      ...settings
    };
    defaultSettings.Description ??= '';
    defaultSettings.EditInstructions ??= '';
    defaultSettings.Features ??= '';
    defaultSettings.Label ??= '';
    defaultSettings.ListInstructions ??= '';
    defaultSettings.Notes ??= '';
    defaultSettings.Icon ??= '';
    defaultSettings.Link ??= '';
    defaultSettings._itemTitle = FieldsSettingsHelpers.getContentTypeTitle(contentType, language);
    defaultSettings._slotCanBeEmpty = itemHeader.IsEmptyAllowed ?? false;
    defaultSettings._slotIsEmpty = itemHeader.IsEmpty ?? false;
    return defaultSettings;
  }
  static setDefaultFieldSettings(settings) {
    const defaultSettings = AllDeprecated.moveDeprecatedSettings({
      ...settings
    });
    // update @All settings
    defaultSettings.Name ??= '';
    defaultSettings.Placeholder ??= '';
    defaultSettings.Notes ??= '';
    // defaultSettings.VisibleInEditUI ??= true;
    defaultSettings.Required ??= false;
    defaultSettings.Disabled ??= false;
    defaultSettings.DisableTranslation ??= false;
    defaultSettings.Visible ??= true; // defaultSettings.VisibleInEditUI;
    // delete defaultSettings.VisibleInEditUI;
    if (defaultSettings.DefaultCollapsed != null) {
      defaultSettings.Collapsed = defaultSettings.DefaultCollapsed;
      delete defaultSettings.DefaultCollapsed;
    }
    defaultSettings.Formulas ??= [];
    let logic = _form_shared_field_logic_field_logic_manager__WEBPACK_IMPORTED_MODULE_2__.FieldLogicManager.singleton().get(settings.InputType);
    defaultSettings.DisableAutoTranslation ??= !logic?.canAutoTranslate;
    return defaultSettings;
  }
  /** Find if DisableTranslation is true in any setting and in any language */
  static findDisableTranslation(contentTypeMetadata, inputType, attributeValues, defaultLanguage, attributeMetadata) {
    // disable translation if LanguagesDecorator in ContentType is false in any language
    const languagesDecorator = contentTypeMetadata.find(m => m.Type.Name === _constants__WEBPACK_IMPORTED_MODULE_4__.MetadataDecorators.LanguagesDecorator);
    if (languagesDecorator?.Attributes.Enabled?.Values.some(eavValue => eavValue.Value === false)) return true;
    if (inputType?.DisableI18n) return true;
    if (!___WEBPACK_IMPORTED_MODULE_0__.LocalizationHelpers.hasValueOnPrimary(attributeValues, defaultLanguage)) return true;
    // disable translation if DisableTranslation is true in any language in @All, @String, @string-default, etc...
    for (const metadataItem of attributeMetadata ?? []) {
      if (metadataItem.Attributes.DisableTranslation?.Values.some(eavValue => eavValue.Value === true)) return true;
    }
    return false;
  }
  static getContentTypeTitle(contentType, language) {
    let label;
    try {
      // xx ContentType is a historic bug and should be fixed when JSONs are rechecked
      const type = contentType.Metadata.find(metadata => metadata.Type.Name === 'ContentType' || metadata.Type.Name === 'xx ContentType');
      if (type) {
        label = ___WEBPACK_IMPORTED_MODULE_0__.LocalizationHelpers.getValueOrDefault(type.Attributes.Label, language)?.Value;
      }
      label = label || contentType.Name;
    } catch (error) {
      label = contentType.Name;
    }
    return label;
  }
  static findIsLastInGroup(contentType, attribute) {
    const index = contentType.Attributes.indexOf(attribute);
    if (contentType.Attributes[index + 1] == null) return true;
    const indexOfFirstEmpty = contentType.Attributes.findIndex(a => _form_fields_empty_empty_field_helpers__WEBPACK_IMPORTED_MODULE_1__.EmptyFieldHelpers.isGroupStart(a.InputType));
    if (index < indexOfFirstEmpty) return false;
    // if (attribute.InputType === InputTypeConstants.EmptyEnd) return true;
    if (_form_fields_empty_empty_field_helpers__WEBPACK_IMPORTED_MODULE_1__.EmptyFieldHelpers.isGroupEnd(attribute.InputType)) return true;
    if (_form_fields_empty_empty_field_helpers__WEBPACK_IMPORTED_MODULE_1__.EmptyFieldHelpers.endsPreviousGroup(contentType.Attributes[index + 1].InputType)) return true;
    return false;
  }
  static getDisabledBecauseTranslations(attributeValues, disableTranslation, language) {
    if (language.current === language.primary) return false;
    if (!___WEBPACK_IMPORTED_MODULE_0__.LocalizationHelpers.hasValueOnPrimary(attributeValues, language.primary)) return true;
    if (disableTranslation) return true;
    if (___WEBPACK_IMPORTED_MODULE_0__.LocalizationHelpers.hasEditableValue(attributeValues, language)) return false;
    if (___WEBPACK_IMPORTED_MODULE_0__.LocalizationHelpers.hasReadonlyValue(attributeValues, language.current)) return true;
    return true;
  }
  static getTranslationState(attributeValues, disableTranslation, language) {
    let infoLabel;
    let infoMessage;
    if (disableTranslation) {
      infoLabel = 'LangMenu.InAllLanguages';
      infoMessage = '';
    } else if (!___WEBPACK_IMPORTED_MODULE_0__.LocalizationHelpers.hasValueOnPrimary(attributeValues, language.primary)) {
      infoLabel = 'LangMenu.MissingDefaultLangValue';
      infoMessage = language.primary;
    } else {
      const editableTranslationExists = ___WEBPACK_IMPORTED_MODULE_0__.LocalizationHelpers.hasEditableValue(attributeValues, language);
      const readonlyTranslationExists = ___WEBPACK_IMPORTED_MODULE_0__.LocalizationHelpers.hasReadonlyValue(attributeValues, language.current);
      if (editableTranslationExists || readonlyTranslationExists) {
        const dimensions = ___WEBPACK_IMPORTED_MODULE_0__.LocalizationHelpers.getValueTranslation(attributeValues, language).Dimensions.map(dimension => dimension.Value).filter(dimension => !dimension.includes(language.current));
        const isShared = dimensions.length > 0;
        if (isShared) {
          if (editableTranslationExists) infoLabel = 'LangMenu.In';else if (readonlyTranslationExists) infoLabel = 'LangMenu.From';
          infoMessage = _form_wrappers_localization_wrapper_translate_menu_translate_menu_helpers__WEBPACK_IMPORTED_MODULE_3__.TranslateMenuHelpers.calculateSharedInfoMessage(dimensions, language.current);
        } else {
          infoLabel = '';
          infoMessage = '';
        }
      } else {
        infoLabel = 'LangMenu.UseDefault';
        infoMessage = '';
      }
    }
    const state = this.getTranslationStateCore(attributeValues, disableTranslation, language);
    const translationState = {
      infoLabel,
      infoMessage,
      language: state.language,
      linkType: state.linkType
    };
    return translationState;
  }
  static getTranslationStateCore(attributeValues, disableTranslation, language) {
    // Determine is control disabled or enabled and info message
    if (!___WEBPACK_IMPORTED_MODULE_0__.LocalizationHelpers.hasValueOnPrimary(attributeValues, language.primary)) return {
      language: '',
      linkType: _constants__WEBPACK_IMPORTED_MODULE_4__.TranslationLinks.MissingDefaultLangValue
    };
    if (disableTranslation) return {
      language: '',
      linkType: _constants__WEBPACK_IMPORTED_MODULE_4__.TranslationLinks.DontTranslate
    };
    if (___WEBPACK_IMPORTED_MODULE_0__.LocalizationHelpers.hasEditableValue(attributeValues, language)) {
      const editableElements = ___WEBPACK_IMPORTED_MODULE_0__.LocalizationHelpers.getValueTranslation(attributeValues, language).Dimensions.filter(dimension => dimension.Value !== language.current);
      return editableElements.length > 0 ? {
        language: editableElements[0].Value,
        linkType: _constants__WEBPACK_IMPORTED_MODULE_4__.TranslationLinks.LinkReadWrite
      } : {
        language: '',
        linkType: _constants__WEBPACK_IMPORTED_MODULE_4__.TranslationLinks.Translate
      };
    }
    if (___WEBPACK_IMPORTED_MODULE_0__.LocalizationHelpers.hasReadonlyValue(attributeValues, language.current)) {
      const readOnlyElements = ___WEBPACK_IMPORTED_MODULE_0__.LocalizationHelpers.getValueTranslation(attributeValues, language).Dimensions.filter(dimension => dimension.Value !== language.current);
      return {
        language: readOnlyElements[0].Value,
        linkType: _constants__WEBPACK_IMPORTED_MODULE_4__.TranslationLinks.LinkReadOnly
      };
    }
    return {
      language: '',
      linkType: _constants__WEBPACK_IMPORTED_MODULE_4__.TranslationLinks.DontTranslate
    };
  }
}
class AllDeprecated {
  /** VisibleInEditUi is copied Visible and then deleted */
  static moveDeprecatedSettings(settings) {
    var asDeprecated = settings;
    if (asDeprecated.VisibleInEditUI == null) return settings;
    settings.Visible = asDeprecated.VisibleInEditUI;
    delete asDeprecated.VisibleInEditUI;
    return settings;
  }
}

/***/ }),

/***/ 62544:
/*!**************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/helpers/file-type.helpers.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileTypeHelpers: () => (/* binding */ FileTypeHelpers)
/* harmony export */ });
class FileTypeHelpers {
  static #_ = this.defaultIcon = 'file';
  static #_2 = this.customExtensions = {
    doc: 'file-word',
    docx: 'file-word',
    xls: 'file-excel',
    xlsx: 'file-excel',
    ppt: 'file-powerpoint',
    pptx: 'file-powerpoint',
    pdf: 'file-pdf',
    mp3: 'file-audio',
    avi: 'file-video',
    mpg: 'file-video',
    mpeg: 'file-video',
    mov: 'file-video',
    mp4: 'file-video',
    zip: 'file-archive',
    rar: 'file-archive',
    txt: 'file-text',
    html: 'file-code',
    css: 'file-code',
    xml: 'file-code',
    xsl: 'file-code'
  };
  static #_3 = this.matExtensions = {
    vcf: 'person'
  };
  static getExtension(filename) {
    return filename.substring(filename.lastIndexOf('.') + 1).toLocaleLowerCase();
  }
  static getIconClass(filename) {
    const ext = this.getExtension(filename);
    return this.matExtensions[ext] || this.customExtensions[ext] || this.defaultIcon;
  }
  static isKnownType(filename) {
    return this.matExtensions[this.getExtension(filename)] != null;
  }
  static isImage(filename) {
    return this.isImgRegex().test(filename);
  }
  static isImgRegex() {
    return /(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*\.(?:jpg|jpeg|gif|png|webp))(?:\?([^#]*))?(?:#(.*))?/i;
  }
}

/***/ }),

/***/ 56606:
/*!**************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/helpers/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropzoneDraggingHelper: () => (/* reexport safe */ _dropzone_dragging_helper__WEBPACK_IMPORTED_MODULE_0__.DropzoneDraggingHelper),
/* harmony export */   EntityReader: () => (/* reexport safe */ _entity_reader__WEBPACK_IMPORTED_MODULE_3__.EntityReader),
/* harmony export */   FieldMask: () => (/* reexport safe */ _field_mask_helper__WEBPACK_IMPORTED_MODULE_1__.FieldMask),
/* harmony export */   FieldsSettingsHelpers: () => (/* reexport safe */ _fields_settings_helpers__WEBPACK_IMPORTED_MODULE_2__.FieldsSettingsHelpers),
/* harmony export */   FileTypeHelpers: () => (/* reexport safe */ _file_type_helpers__WEBPACK_IMPORTED_MODULE_4__.FileTypeHelpers),
/* harmony export */   InputFieldHelpers: () => (/* reexport safe */ _input_field_helpers__WEBPACK_IMPORTED_MODULE_5__.InputFieldHelpers),
/* harmony export */   LocalizationHelpers: () => (/* reexport safe */ _localization_helpers__WEBPACK_IMPORTED_MODULE_6__.LocalizationHelpers),
/* harmony export */   PagePicker: () => (/* reexport safe */ _page_picker_helper__WEBPACK_IMPORTED_MODULE_7__.PagePicker),
/* harmony export */   SanitizeHelper: () => (/* reexport safe */ _sanitize_helper__WEBPACK_IMPORTED_MODULE_8__.SanitizeHelper),
/* harmony export */   UrlHelpers: () => (/* reexport safe */ _url_helpers__WEBPACK_IMPORTED_MODULE_9__.UrlHelpers),
/* harmony export */   ValidationHelpers: () => (/* reexport safe */ _validation_helpers__WEBPACK_IMPORTED_MODULE_11__.ValidationHelpers),
/* harmony export */   ValidationMessagesHelpers: () => (/* reexport safe */ _validation_messages_helpers__WEBPACK_IMPORTED_MODULE_10__.ValidationMessagesHelpers)
/* harmony export */ });
/* harmony import */ var _dropzone_dragging_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropzone-dragging.helper */ 33711);
/* harmony import */ var _field_mask_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field-mask.helper */ 41573);
/* harmony import */ var _fields_settings_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fields-settings.helpers */ 70084);
/* harmony import */ var _entity_reader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entity-reader */ 95443);
/* harmony import */ var _file_type_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file-type.helpers */ 62544);
/* harmony import */ var _input_field_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-field.helpers */ 80876);
/* harmony import */ var _localization_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./localization.helpers */ 3482);
/* harmony import */ var _page_picker_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-picker.helper */ 75670);
/* harmony import */ var _sanitize_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sanitize.helper */ 62457);
/* harmony import */ var _url_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./url.helpers */ 73412);
/* harmony import */ var _validation_messages_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validation-messages.helpers */ 66027);
/* harmony import */ var _validation_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./validation.helpers */ 5288);













/***/ }),

/***/ 80876:
/*!****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/helpers/input-field.helpers.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputFieldHelpers: () => (/* binding */ InputFieldHelpers)
/* harmony export */ });
/* harmony import */ var _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../content-type-fields/constants/input-type.constants */ 18170);
/* harmony import */ var _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/logging/eav-logger */ 6812);
/* harmony import */ var _form_fields_empty_empty_field_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../form/fields/empty/empty-field-helpers */ 82895);
/* harmony import */ var _constants_wrappers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/wrappers.constants */ 17011);




const logThis = false;
class InputFieldHelpers {
  static getContentTypeId(item) {
    return item.Entity.Type?.Id ?? item.Header.ContentTypeName;
  }
  static getInputTypeNames(attributes, inputTypes) {
    return attributes.map(attribute => {
      const calculatedInputType = this.calculateInputType(attribute, inputTypes);
      const inputTypeName = {
        name: attribute.Name,
        inputType: calculatedInputType.inputType
      };
      return inputTypeName;
    });
  }
  static calculateInputType(attribute, inputTypes) {
    const inputType = inputTypes.find(i => i.Type === attribute.InputType);
    const calculated = {
      inputType: attribute.InputType,
      isExternal: inputType ? !!inputType.AngularAssets : false
    };
    return calculated;
  }
  static getWrappers(settings, calculatedInputType) {
    const inputType = calculatedInputType.inputType;
    const isExternal = calculatedInputType.isExternal;
    if (_form_fields_empty_empty_field_helpers__WEBPACK_IMPORTED_MODULE_2__.EmptyFieldHelpers.isMessage(inputType)) return [];
    // empty input type wrappers
    if (_form_fields_empty_empty_field_helpers__WEBPACK_IMPORTED_MODULE_2__.EmptyFieldHelpers.isGroupStart(inputType)) return [_constants_wrappers_constants__WEBPACK_IMPORTED_MODULE_3__.WrappersConstants.CollapsibleWrapper];
    // default wrappers
    const wrappers = [_constants_wrappers_constants__WEBPACK_IMPORTED_MODULE_3__.WrappersConstants.HiddenWrapper];
    // entity-default/string-dropdown wrappers
    const isEntityOrStringDropdownType = inputType === _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.EntityDefault || inputType === _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.StringDropdownQuery || inputType === _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.EntityQuery || inputType === _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.EntityContentBlocks || inputType === _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.StringDropdown
    /** WIP pickers */ || inputType === _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.EntityPicker || inputType === _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.StringPicker;
    // || (inputType === InputTypeConstants.WIPNumberPicker);
    const allowMultiValue = settings.AllowMultiValue ?? false;
    if (isEntityOrStringDropdownType) {
      wrappers.push(_constants_wrappers_constants__WEBPACK_IMPORTED_MODULE_3__.WrappersConstants.LocalizationWrapper);
      if (allowMultiValue || inputType === _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.EntityContentBlocks) wrappers.push(_constants_wrappers_constants__WEBPACK_IMPORTED_MODULE_3__.WrappersConstants.PickerExpandableWrapper);
    }
    // External components should always get these wrappers
    if (isExternal) wrappers.push(_constants_wrappers_constants__WEBPACK_IMPORTED_MODULE_3__.WrappersConstants.DropzoneWrapper, _constants_wrappers_constants__WEBPACK_IMPORTED_MODULE_3__.WrappersConstants.LocalizationWrapper, _constants_wrappers_constants__WEBPACK_IMPORTED_MODULE_3__.WrappersConstants.ExpandableWrapper, _constants_wrappers_constants__WEBPACK_IMPORTED_MODULE_3__.WrappersConstants.AdamWrapper);
    return wrappers;
  }
  /** Include itemHeader if you need data from prefill, and set onlyPrefill if you only need parsed prefill */
  static parseDefaultValue(name, inputType, settings, itemHeader, onlyPrefill) {
    const log = new _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_1__.EavLogger('InputFieldHelpers', logThis);
    const l = log.fn('parseDefaultValue', {
      name,
      inputType,
      settings,
      itemHeader,
      onlyPrefill
    });
    if (onlyPrefill && itemHeader?.Prefill?.[name] === undefined) return l.rNull('only prefill, but no prefill data found');
    let defaultValue = itemHeader?.Prefill?.[name]?.toString() ?? settings.DefaultValue;
    l.values({
      defaultValue
    });
    switch (inputType) {
      case _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.BooleanDefault:
        return defaultValue?.toLowerCase() === 'true';
      case _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.BooleanTristate:
        return defaultValue != null && defaultValue !== '' ? defaultValue.toLowerCase() === 'true' : null;
      case _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.DateTimeDefault:
        return defaultValue != null && defaultValue !== '' ? new Date(defaultValue).toJSON() : null;
      case _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.NumberDefault:
      case _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.NumberDropdown:
      case _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.NumberPicker:
        return defaultValue != null && defaultValue !== '' ? !isNaN(Number(defaultValue)) ? Number(defaultValue) : null : null;
      case _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.EntityDefault:
      case _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.EntityQuery:
      case _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.EntityContentBlocks:
      case _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.EntityPicker:
        // Empty - return []
        if (defaultValue == null || defaultValue === '') return [];
        // string has { } characters, we must switch them to quotes for parsing below
        // 2024-06-01 2dm not sure why this is an option..., maybe some interim encoding?
        if (defaultValue.includes('{')) defaultValue = defaultValue.replace(/[\{\}]/g, '\"');
        // list but no array, add brackets
        if (defaultValue.includes(',') && !defaultValue.includes('[')) {
          const guids = defaultValue.split(',').map(guid => guid.trim());
          defaultValue = JSON.stringify(guids);
        }
        // Finally parse
        return defaultValue.startsWith('[') // an array with guid strings
        ? JSON.parse(defaultValue) // if it's a string containing an array
        : [defaultValue.replace(/"/g, '')];
      // just a guid string, but might have quotes
      default:
        return defaultValue ?? '';
    }
  }
}

/***/ }),

/***/ 3482:
/*!*****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/helpers/localization.helpers.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalizationHelpers: () => (/* binding */ LocalizationHelpers)
/* harmony export */ });
/* harmony import */ var _shared_helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/helpers/console-log-angular.helper */ 74230);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ 64158);
/* harmony import */ var _models_eav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/eav */ 12936);
/* harmony import */ var _models_form_languages_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/form-languages.model */ 53064);




class LocalizationHelpers {
  /**
   * Get translated value for currentLanguage,
   * if not exist return default language translation,
   * if default language also not exist return first value
   */
  static translate(language, attributeValues, defaultValue) {
    if (!attributeValues) return defaultValue;
    const translation = this.getValueTranslation(attributeValues, language);
    if (translation) return translation.Value;
    const translationDefault = this.getValueTranslation(attributeValues, _models_form_languages_model__WEBPACK_IMPORTED_MODULE_3__.FormLanguage.bothPrimary(language));
    if (translationDefault) return translationDefault.Value;
    // TODO: maybe return value with *
    return attributeValues.Values[0]?.Value ?? null;
  }
  static getValueOrDefault(field, language) {
    let translation = this.getValueTranslation(field, language);
    return translation ?? this.getValueTranslation(field, _models_form_languages_model__WEBPACK_IMPORTED_MODULE_3__.FormLanguage.bothPrimary(language));
  }
  /**
   * Find all values which are of the current language.
   * 1. either directly assigned
   * 2. or read-only assigned
   * 3. or assigned to '*' when the current language is the default language
   */
  static valuesOfLanguage(field, language) {
    if (!field) return [];
    return field.Values.filter(val => this.valueHasLanguage(val, language));
  }
  static valueHasLanguage(val, language) {
    return val.Dimensions.find(d => d.Value === language.current || d.Value === `~${language.current}` || language.current === language.primary && d.Value === '*');
  }
  static getValueTranslation(field, language) {
    // first match if any is the one we're looking for
    return this.valuesOfLanguage(field, language)[0];
  }
  static isEditableOrReadonlyTranslationExist(field, language) {
    if (!field) return false;
    return this.valuesEditableOfCurrent(field, language).length > 0;
  }
  /**
   * Values of a field are for the current language,
   * if they are assigned to the current language or to '*' (but only when the current-language is also the primary-language)
   */
  static valuesEditableOfCurrent(field, langs) {
    if (!field) return [];
    return field.Values.filter(val => val.Dimensions.find(d => d.Value === langs.current || d.Value === '*' && langs.current === langs.primary));
  }
  /** A value in specified Language is editable, if assigned to current language or to '*' (but only when on default-language) */
  static hasEditableValue(field, language) {
    return this.valuesEditableOfCurrent(field, language).length > 0;
  }
  // Number of editable translatable fields that
  static countEditableValues(field, language) {
    return this.valuesEditableOfCurrent(field, language).length;
  }
  // Number of editable translatable fields that have some content
  static countEditableValuesWithContent(field, language) {
    if (!field) return 0;
    return this.valuesEditableOfCurrent(field, language).filter(v => v.Value != "" && v.Value != null)?.length;
  }
  static hasReadonlyValue(field, language) {
    if (!field) return false;
    return field.Values.filter(val => val.Dimensions.find(d => d.Value === `~${language}`)).length > 0;
  }
  static hasValueOnPrimary(field, defaultLanguage) {
    if (!field) return false;
    return field.Values.filter(val => val.Dimensions.find(d => d.Value === defaultLanguage || d.Value === '*')).length > 0;
  }
  /** Copy attributes from item */
  static updateAttribute(oldAttributes, attributeKey, attribute) {
    const newAttributes = {};
    if (Object.keys(oldAttributes).length === 0) {
      const attributeCopy = {
        ...attribute
      };
      newAttributes[attributeKey] = attributeCopy;
      return newAttributes;
    }
    for (const key of Object.keys(oldAttributes)) {
      if (key === attributeKey) {
        const attributeCopy = {
          ...attribute
        };
        newAttributes[key] = attributeCopy;
      } else {
        const attributeCopy = {
          ...oldAttributes[key]
        };
        newAttributes[key] = attributeCopy;
      }
    }
    if (oldAttributes[attributeKey] == null) {
      const attributeCopy = {
        ...attribute
      };
      newAttributes[attributeKey] = attributeCopy;
    }
    return newAttributes;
  }
  /** Update values for languageKey */
  static updateAttributesValues(allFields, updateValues, language) {
    // copy attributes from item
    const eavAttributes = {};
    Object.keys(allFields).forEach(attributeKey => {
      const newItemValue = updateValues[attributeKey];
      // if new value exist update attribute for languageKey
      // if (newItemValue !== null && newItemValue !== undefined) {
      if (newItemValue !== undefined) {
        const valueWithLanguageExist = this.isEditableOrReadonlyTranslationExist(allFields[attributeKey], language);
        // if valueWithLanguageExist update value for languageKey
        if (valueWithLanguageExist) {
          const newValues = {
            ...allFields[attributeKey],
            Values: allFields[attributeKey].Values.map(val => {
              const hasLanguage = !!this.valueHasLanguage(val, language);
              const newValue = hasLanguage
              // Update value for languageKey
              ? {
                ...val,
                Value: newItemValue
              } : val;
              return newValue;
            })
          };
          eavAttributes[attributeKey] = newValues;
        } else {
          // else add new value with dimension languageKey
          (0,_shared_helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_0__.consoleLogEditForm)('saveAttributeValues add values ', newItemValue);
          const newEavValue = _models_eav__WEBPACK_IMPORTED_MODULE_2__.EavValue.create(newItemValue, [_models_eav__WEBPACK_IMPORTED_MODULE_2__.EavDimension.create(language.current)]);
          const newAttribute = {
            ...allFields[attributeKey],
            Values: [...allFields[attributeKey].Values, newEavValue]
          };
          eavAttributes[attributeKey] = newAttribute;
        }
      } else {
        // else copy item attributes
        const attributeCopy = {
          ...allFields[attributeKey]
        };
        eavAttributes[attributeKey] = attributeCopy;
      }
    });
    return eavAttributes;
  }
  /** update attribute value, and change language readonly state if needed */
  static updateAttributeValue(allAttributes, attributeKey, updateValue, language, isReadOnly) {
    // copy attributes from item
    let eavAttributes = {};
    let newLanguageValue = language.current;
    if (isReadOnly) newLanguageValue = `~${language.current}`;
    const attribute = {
      ...allAttributes[attributeKey],
      Values: allAttributes[attributeKey].Values.map(val => {
        const hasLanguage = !!this.valueHasLanguage(val, language);
        const newValue = hasLanguage
        // Update value and dimension
        ? {
          ...val,
          // update value
          Value: updateValue,
          // update languageKey with newLanguageValue
          Dimensions: val.Dimensions.map(d => {
            const dimensionIsForLanguage = d.Value === language.current || d.Value === `~${language.current}` || language.current === language.primary && d.Value === '*';
            return dimensionIsForLanguage ? {
              Value: newLanguageValue
            } : d;
          })
        } : val;
        return newValue;
      })
    };
    eavAttributes = this.updateAttribute(allAttributes, attributeKey, attribute);
    return eavAttributes;
  }
  static addAttributeValue(allAttributes, attributeValue, attributeKey, attributeType) {
    // copy attributes from item
    let eavAttributes = {};
    const attribute = Object.keys(allAttributes).length === 0 || !allAttributes[attributeKey] ? {
      ...allAttributes[attributeKey],
      Values: [attributeValue],
      Type: attributeType
    } : {
      ...allAttributes[attributeKey],
      Values: [...allAttributes[attributeKey].Values, attributeValue],
      Type: attributeType
    };
    eavAttributes = this.updateAttribute(allAttributes, attributeKey, attribute);
    return eavAttributes;
  }
  /** Add dimension to value with existing dimension */
  static addAttributeDimension(allAttributes, attributeKey, newDimensionValue, existingDimensionValue, defaultLanguage, isReadOnly) {
    // copy attributes from item
    let eavAttributes = {};
    let newLanguageValue = newDimensionValue;
    if (isReadOnly) {
      newLanguageValue = `~${newDimensionValue}`;
    }
    const attribute = {
      ...allAttributes[attributeKey],
      Values: allAttributes[attributeKey].Values.map(eavValue => {
        const newValue = eavValue.Dimensions.find(d => d.Value === existingDimensionValue || existingDimensionValue === defaultLanguage && d.Value === '*')
        // Update dimension for current language
        ? {
          ...eavValue,
          // if languageKey already exist
          Dimensions: eavValue.Dimensions.concat({
            Value: newLanguageValue
          })
        } : eavValue;
        return newValue;
      })
    };
    eavAttributes = this.updateAttribute(allAttributes, attributeKey, attribute);
    return eavAttributes;
  }
  /** Removes dimension (language) from attribute. If multiple dimensions exist, delete only dimension, else delete value and dimension */
  static removeAttributeDimension(attributes, attributeKey, language) {
    const oldAttributes = attributes;
    const validDimensions = [language, `~${language}`];
    const value = oldAttributes[attributeKey].Values.find(eavValue => {
      const dimensionExists = eavValue.Dimensions.some(dimension => validDimensions.includes(dimension.Value));
      return dimensionExists;
    });
    // given dimension doesn't exist for this attribute so no change is needed
    if (!value) {
      const attributesCopy = {
        ...oldAttributes
      };
      return attributesCopy;
    }
    let newAttribute;
    if (value.Dimensions.length > 1) {
      // if multiple dimensions exist delete only dimension
      newAttribute = {
        ...oldAttributes[attributeKey],
        Values: oldAttributes[attributeKey].Values.map(eavValue => {
          const dimensionExists = eavValue.Dimensions.some(dimension => validDimensions.includes(dimension.Value));
          if (!dimensionExists) return eavValue;
          return {
            ...eavValue,
            Dimensions: eavValue.Dimensions.filter(dimension => !validDimensions.includes(dimension.Value))
          };
        })
      };
    } else if (value.Dimensions.length === 1) {
      // if only one dimension exists delete value and dimension
      newAttribute = {
        ...oldAttributes[attributeKey],
        Values: oldAttributes[attributeKey].Values.filter(eavValue => {
          const dimensionExists = eavValue.Dimensions.some(dimension => validDimensions.includes(dimension.Value));
          return !dimensionExists;
        })
      };
    }
    const newAttributes = this.updateAttribute(oldAttributes, attributeKey, newAttribute);
    return newAttributes;
  }
  /**
   * Default mode priority:
   * 1. value for current language
   * 2. value for all languages
   * 3. value for default language
   * 4. first value
   *
   * Strict mode priority:
   * 1. value for current language
   * 2. value for all languages
   * 3. value for default language
   *
   * Very strict mode priority:
   * 1. value for current language
   * 2. value for all languages
   */
  static getBestValue(eavValues, currentLanguage, defaultLanguage, mode) {
    if (eavValues == null) {
      return;
    }
    let bestDimensions = [currentLanguage, `~${currentLanguage}`];
    let bestValue = this.findValueForDimensions(eavValues, bestDimensions);
    if (bestValue !== undefined) {
      return bestValue;
    }
    bestDimensions = ['*'];
    bestValue = this.findValueForDimensions(eavValues, bestDimensions);
    if (bestValue !== undefined) {
      return bestValue;
    }
    if (mode === _constants__WEBPACK_IMPORTED_MODULE_1__.BestValueModes.Strict) {
      return;
    }
    bestDimensions = [defaultLanguage, `~${defaultLanguage}`];
    bestValue = this.findValueForDimensions(eavValues, bestDimensions);
    if (bestValue !== undefined) {
      return bestValue;
    }
    bestValue = eavValues.Values[0]?.Value;
    return bestValue;
  }
  static findOfExactDimension(eavValues, dimension) {
    return eavValues.find(v => v.Dimensions.find(x => x.Value === dimension));
  }
  static findValueForDimensions(eavValues, dimensions) {
    const value = eavValues.Values.find(eavValue => !!eavValue.Dimensions.find(dimension => dimensions.includes(dimension.Value)))?.Value;
    return value;
  }
}

/***/ }),

/***/ 75670:
/*!***************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/helpers/page-picker.helper.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagePicker: () => (/* binding */ PagePicker)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var _form_shared_page_picker_page_picker_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../form/shared/page-picker/page-picker.component */ 85063);


class PagePicker {
  static open(config, group, dialog, viewContainerRef, changeDetectorRef, callback) {
    const dialogData = {
      config,
      group
    };
    const dialogRef = dialog.open(_form_shared_page_picker_page_picker_component__WEBPACK_IMPORTED_MODULE_0__.PagePickerComponent, {
      autoFocus: false,
      data: dialogData,
      viewContainerRef,
      height: '80%',
      width: '650px'
    });
    dialogRef.afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1)).subscribe(value => {
      callback(value);
    });
    changeDetectorRef.markForCheck();
  }
}

/***/ }),

/***/ 62457:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/helpers/sanitize.helper.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SanitizeHelper: () => (/* binding */ SanitizeHelper)
/* harmony export */ });
class SanitizeHelper {
  static removeFromStart(sanitized, charToRemove) {
    // check for undefined
    if (!sanitized) {
      return sanitized;
    }
    while (sanitized.substring(0, 1) === charToRemove) {
      sanitized = sanitized.substring(1);
    }
    return sanitized;
  }
  static removeFromEnd(sanitized, charToRemove) {
    // check for undefined
    if (!sanitized) {
      return sanitized;
    }
    while (sanitized.substring(sanitized.length - 1, sanitized.length) === charToRemove) {
      sanitized = sanitized.substring(0, sanitized.length - 1);
    }
    return sanitized;
  }
  static cleanBadPath(sanitized) {
    // check for undefined
    if (!sanitized) {
      return sanitized;
    }
    const goodChar = '_';
    const illegalRe = /[\?<>\\:\*\|":]/g;
    const controlRe = /[\x00-\x1f\x80-\x9f]/g;
    const reservedRe = /^\.+$/;
    const windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
    const windowsTrailingRe = /[\. ]+$/;
    return sanitized.replace(illegalRe, goodChar).replace(controlRe, goodChar).replace(reservedRe, goodChar).replace(windowsReservedRe, goodChar).replace(windowsTrailingRe, goodChar);
  }
  // sanitize path
  static sanitizePath(sanitized) {
    // check for undefined
    if (!sanitized) {
      return sanitized;
    }
    // remove slashes form start of path
    sanitized = this.removeFromStart(sanitized, '\/');
    // remove slashed form end of path
    sanitized = this.removeFromEnd(sanitized, '\/');
    // remove backslashes form start of path
    sanitized = this.removeFromStart(sanitized, '\\');
    // remove backslashes form end of path
    sanitized = this.removeFromEnd(sanitized, '\\');
    // replace bad
    sanitized = this.cleanBadPath(sanitized);
    return sanitized;
  }
  // sanitize file or folder name
  static sanitizeName(sanitized) {
    // check for undefined
    if (!sanitized) {
      return sanitized;
    }
    // in addition to all path validation rules
    // slashes are not valid in file or folder name
    const replacement = '_';
    const illegalRe = /\//g;
    return this.sanitizePath(sanitized).replace(illegalRe, replacement);
  }
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
  static readQueryStringParameters(url) {
    const queryParams = {};
    url.split('&').forEach(f => {
      if (f.split('=').length === 2) {
        queryParams[f.split('=')[0]] = decodeURIComponent(f.split('=')[1].replace(/\+/g, ' '));
      }
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
  static calculatePathFromRoot(route) {
    let lastChild = route;
    while (lastChild.firstChild) {
      lastChild = lastChild.firstChild;
    }
    let pathFromRoot = '';
    for (const path of lastChild.snapshot.pathFromRoot) {
      if (path.url.length <= 0) {
        continue;
      }
      for (const urlSegment of path.url) {
        if (!urlSegment.path) {
          continue;
        }
        pathFromRoot += '/' + urlSegment.path;
      }
    }
    return pathFromRoot;
  }
}

/***/ }),

/***/ 66027:
/*!************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/helpers/validation-messages.helpers.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidationMessagesHelpers: () => (/* binding */ ValidationMessagesHelpers)
/* harmony export */ });
/* harmony import */ var _control_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control.helpers */ 12220);

class ValidationMessagesHelpers {
  static #_ = this.validationMessages = {
    required: config => {
      return config ? 'ValidationMessage.Required' : `ValidationMessage.RequiredShort`; // short version in snackbar
    },
    min: config => {
      return config ? `ValidationMessage.Min` : `ValidationMessage.NotValid`;
    },
    max: config => {
      return config ? `ValidationMessage.Max` : `ValidationMessage.NotValid`;
    },
    minNoItems: config => {
      return config ? `ValidationMessage.MinNoItems` : `ValidationMessage.NotValid`;
    },
    maxNoItems: config => {
      return config ? `ValidationMessage.MaxNoItems` : `ValidationMessage.NotValid`;
    },
    pattern: config => {
      return config ? `ValidationMessage.Pattern` : `ValidationMessage.NotValid`;
    },
    decimals: config => {
      return config ? `ValidationMessage.Decimals` : `ValidationMessage.NotValid`;
    },
    jsonError: config => {
      return config ? `ValidationMessage.JsonError` : `ValidationMessage.NotValid`;
    },
    formulaError: config => {
      return config ? `ValidationMessage.NotValid` : `ValidationMessage.NotValid`;
    }
  };
  static #_2 = this.warningMessages = {
    jsonWarning: 'ValidationMessage.JsonWarning',
    formulaWarning: 'ValidationMessage.NotValid'
  };
  /** Marks controls as touched to show errors beneath controls and collects error messages */
  static validateForm(form) {
    const errors = {};
    for (const [controlKey, control] of Object.entries(form.controls)) {
      _control_helpers__WEBPACK_IMPORTED_MODULE_0__.ControlHelpers.markControlTouched(control);
      if (!control.invalid) continue;
      for (const errorKey of Object.keys(control.errors)) {
        errors[controlKey] = this.validationMessages[errorKey]?.(undefined);
        if (errors[controlKey]) break;
      }
    }
    return errors;
  }
  /** Calculates error message */
  static getErrorMessage(control, config) {
    let error = '';
    if (!control.invalid) return error;
    if (!control.dirty && !control.touched) return error;
    for (const errorKey of Object.keys(control.errors)) {
      if (errorKey === 'formulaError') {
        error = control.errors['formulaMessage'] ?? this.validationMessages[errorKey]?.(config);
      } else {
        error = this.validationMessages[errorKey]?.(config);
      }
      if (error) break;
    }
    return error;
  }
  static getWarningMessage(control) {
    let warning = '';
    if (control._warning$.value == null) {
      return warning;
    }
    if (!control.dirty && !control.touched) {
      return warning;
    }
    for (const warningKey of Object.keys(control._warning$.value)) {
      if (warningKey === 'formulaWarning') {
        warning = control._warning$.value['formulaMessage'] ?? this.warningMessages[warningKey];
      } else {
        warning = this.warningMessages[warningKey];
      }
      if (warning) break;
    }
    return warning;
  }
}

/***/ }),

/***/ 5288:
/*!***************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/helpers/validation.helpers.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidationHelpers: () => (/* binding */ ValidationHelpers)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../content-type-fields/constants/input-type.constants */ 18170);
/* harmony import */ var _services_item_field_visibility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/item-field-visibility */ 84860);
/* harmony import */ var _form_fields_picker_picker_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../form/fields/picker/picker.helpers */ 97315);





/** Validators here are copied from https://github.com/angular/angular/blob/master/packages/forms/src/validators.ts */
class ValidationHelpers {
  static isRequired(settings) {
    // hidden field can't be required
    return this.ignoreValidators(settings) ? false : settings.Required;
  }
  static getValidators(fieldName, inputType, fieldsSettingsService) {
    // TODO: merge all validators in a single function? Should be faster
    const validators = [inputType !== _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.HyperlinkLibrary ? this.required(fieldName, fieldsSettingsService) : this.requiredAdam(fieldName, fieldsSettingsService), this.pattern(fieldName, fieldsSettingsService), this.decimals(fieldName, fieldsSettingsService), this.min(fieldName, fieldsSettingsService), this.max(fieldName, fieldsSettingsService), this.minNoItems(fieldName, fieldsSettingsService), this.maxNoItems(fieldName, fieldsSettingsService), this.formulaValidate(fieldName, fieldsSettingsService)];
    if (inputType === _content_type_fields_constants_input_type_constants__WEBPACK_IMPORTED_MODULE_0__.InputTypeConstants.CustomJsonEditor) {
      validators.push(this.validJson(fieldName, fieldsSettingsService));
    }
    return validators;
  }
  /**
   * Validations run when controls are created, but only for fields which are not disabled,
   * and it can be too late to attach warning after field creation
   */
  static ensureWarning(control) {
    if (control._warning$ == null) {
      control._warning$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    }
  }
  static required(fieldName, fieldsSettingsService) {
    return control => {
      this.ensureWarning(control);
      const settings = fieldsSettingsService.getFieldSettings(fieldName);
      if (this.ignoreValidators(settings)) return null;
      if (!settings._currentRequired) return null;
      return _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required(control);
    };
  }
  static requiredAdam(fieldName, fieldsSettingsService) {
    return control => {
      this.ensureWarning(control);
      const settings = fieldsSettingsService.getFieldSettings(fieldName);
      if (this.ignoreValidators(settings)) return null;
      if (!settings._currentRequired) return null;
      return control.adamItems === 0 ? {
        required: true
      } : null;
    };
  }
  static pattern(fieldName, fieldsSettingsService) {
    return control => {
      this.ensureWarning(control);
      const settings = fieldsSettingsService.getFieldSettings(fieldName);
      if (this.ignoreValidators(settings)) return null;
      if (!settings.ValidationRegExJavaScript) return null;
      return _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(settings.ValidationRegExJavaScript)(control);
    };
  }
  static decimals(fieldName, fieldsSettingsService) {
    return control => {
      this.ensureWarning(control);
      const settings = fieldsSettingsService.getFieldSettings(fieldName);
      if (this.ignoreValidators(settings)) return null;
      if (settings.Decimals == null || settings.Decimals < 0) return null;
      if (control.value == null) return null;
      const matchString = settings.Decimals === 0 ? `^-?[0-9]+$` : `^-?[0-9]+(\.[0-9]{1,${settings.Decimals}})?$`;
      const matches = control.value.toString().match(matchString);
      return !matches ? {
        decimals: true
      } : null;
    };
  }
  static min(fieldName, fieldsSettingsService) {
    return control => {
      this.ensureWarning(control);
      const settings = fieldsSettingsService.getFieldSettings(fieldName);
      if (this.ignoreValidators(settings)) return null;
      if (settings.Min == null) return null;
      return _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(settings.Min)(control);
    };
  }
  static max(fieldName, fieldsSettingsService) {
    return control => {
      this.ensureWarning(control);
      const settings = fieldsSettingsService.getFieldSettings(fieldName);
      if (this.ignoreValidators(settings)) return null;
      if (settings.Max == null) return null;
      return _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.max(settings.Max)(control);
    };
  }
  static minNoItems(fieldName, fieldsSettingsService) {
    return control => {
      this.ensureWarning(control);
      const settings = fieldsSettingsService.getFieldSettings(fieldName);
      if (this.ignoreValidators(settings)) return null;
      if (settings.AllowMultiMin == 0 || settings.AllowMultiMin == undefined) return null;
      const lessThanMin = (Array.isArray(control.value) ? control.value.length : (0,_form_fields_picker_picker_helpers__WEBPACK_IMPORTED_MODULE_2__.convertValueToArray)(control.value, settings.Separator, settings._options).length) < settings.AllowMultiMin;
      return lessThanMin ? {
        minNoItems: settings.AllowMultiMin
      } : null;
    };
  }
  static maxNoItems(fieldName, fieldsSettingsService) {
    return control => {
      this.ensureWarning(control);
      const settings = fieldsSettingsService.getFieldSettings(fieldName);
      if (this.ignoreValidators(settings)) return null;
      if (settings.AllowMultiMax == 0 || settings.AllowMultiMax == undefined) return null;
      const moreThanMax = (Array.isArray(control.value) ? control.value.length : (0,_form_fields_picker_picker_helpers__WEBPACK_IMPORTED_MODULE_2__.convertValueToArray)(control.value, settings.Separator, settings._options).length) > settings.AllowMultiMax;
      return moreThanMax ? {
        maxNoItems: settings.AllowMultiMax
      } : null;
    };
  }
  static validJson(fieldName, fieldsSettingsService) {
    return control => {
      this.ensureWarning(control);
      const settings = fieldsSettingsService.getFieldSettings(fieldName);
      let error;
      let warning;
      if (this.ignoreValidators(settings) || settings.JsonValidation === 'none' || !control.value) {
        error = false;
        warning = false;
      } else {
        try {
          JSON.parse(control.value);
          error = false;
          warning = false;
        } catch {
          if (settings.JsonValidation === 'strict') {
            error = true;
            warning = false;
          } else if (settings.JsonValidation === 'light') {
            error = false;
            warning = true;
          }
        }
      }
      control._warning$.next(warning ? {
        jsonWarning: true
      } : null);
      return error ? {
        jsonError: true
      } : null;
    };
  }
  static formulaValidate(fieldName, fieldsSettingsService) {
    return control => {
      this.ensureWarning(control);
      const fieldProps = fieldsSettingsService.getFieldsProps()[fieldName];
      const settings = fieldProps.settings;
      const formulaValidation = fieldProps.formulaValidation;
      let error;
      let warning;
      if (this.ignoreValidators(settings) || formulaValidation == null) {
        error = false;
        warning = false;
      } else {
        if (formulaValidation.severity === 'error') {
          error = true;
          warning = false;
        } else if (formulaValidation.severity === 'warning') {
          error = false;
          warning = true;
        } else {
          error = false;
          warning = false;
        }
      }
      control._warning$.next(warning ? {
        formulaWarning: true,
        formulaMessage: formulaValidation.message
      } : null);
      return error ? {
        formulaError: true,
        formulaMessage: formulaValidation.message
      } : null;
    };
  }
  /** Hidden fields can't have validators */
  static ignoreValidators(settings) {
    return !_services_item_field_visibility__WEBPACK_IMPORTED_MODULE_1__.ItemFieldVisibility.mergedVisible(settings);
  }
}

/***/ }),

/***/ 42506:
/*!***************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/adam-snapshot.model.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 99408:
/*!***********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/calculated-input-type.model.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 24886:
/*!***********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/content-type-settings.model.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 41814:
/*!****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/control-status.model.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   controlToControlStatus: () => (/* binding */ controlToControlStatus),
/* harmony export */   emptyControlStatus: () => (/* binding */ emptyControlStatus)
/* harmony export */ });
const emptyControlStatus = {
  value: null,
  disabled: true,
  dirty: false,
  invalid: false,
  touched: false,
  touchedAndInvalid: false
};
function controlToControlStatus(control, moreDisabled) {
  const touched = control.touched;
  const invalid = control.invalid;
  // must merge the control status with settings, as the control often has a
  // delayed "disabled" update which will not itself trigger a change in the control
  const disabled = control.disabled || moreDisabled;
  return {
    dirty: control.dirty,
    disabled,
    invalid,
    touched,
    touchedAndInvalid: touched && invalid,
    value: control.value
  };
}

/***/ }),

/***/ 5948:
/*!**************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/eav/eav-content-type-attribute.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EavContentTypeAttribute: () => (/* binding */ EavContentTypeAttribute)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 12936);

class EavContentTypeAttribute {
  static convertOne(ctAttributeDto) {
    const metadata = ___WEBPACK_IMPORTED_MODULE_0__.EavEntity.convertMany(ctAttributeDto.Metadata);
    const settings = ___WEBPACK_IMPORTED_MODULE_0__.EavEntityAttributes.mergeSettings(metadata);
    const attribute = {
      InputType: ctAttributeDto.InputType,
      IsTitle: ctAttributeDto.IsTitle,
      Metadata: metadata,
      Name: ctAttributeDto.Name,
      Settings: settings,
      Type: ctAttributeDto.Type
    };
    return attribute;
  }
  static convertMany(ctAttributesDto) {
    if (ctAttributesDto == null) {
      return [];
    }
    const attributes = ctAttributesDto.map(attribute1 => EavContentTypeAttribute.convertOne(attribute1));
    return attributes;
  }
}

/***/ }),

/***/ 66313:
/*!****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/eav/eav-content-type.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EavContentType: () => (/* binding */ EavContentType)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 12936);

class EavContentType {
  static convertOne(contentTypeDto) {
    const attributes = ___WEBPACK_IMPORTED_MODULE_0__.EavContentTypeAttribute.convertMany(contentTypeDto.Attributes);
    const metadata = ___WEBPACK_IMPORTED_MODULE_0__.EavEntity.convertMany(contentTypeDto.Metadata);
    const settings = ___WEBPACK_IMPORTED_MODULE_0__.EavEntityAttributes.mergeSettings(metadata);
    const contentType = {
      Attributes: attributes,
      Description: contentTypeDto.Description,
      Id: contentTypeDto.Id,
      Metadata: metadata,
      Name: contentTypeDto.Name,
      Scope: contentTypeDto.Scope,
      Settings: settings
    };
    return contentType;
  }
  static convertMany(contentTypesDto) {
    if (contentTypesDto == null) {
      return null;
    }
    const contentTypes = contentTypesDto.map(contentTypeDto => EavContentType.convertOne(contentTypeDto));
    return contentTypes;
  }
}

/***/ }),

/***/ 58021:
/*!*************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/eav/eav-dimension.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EavDimension: () => (/* binding */ EavDimension)
/* harmony export */ });
class EavDimension {
  static create(value) {
    return {
      Value: value
    };
  }
}

/***/ }),

/***/ 15942:
/*!*********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/eav/eav-entity-attributes.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EavEntityAttributes: () => (/* binding */ EavEntityAttributes)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 12936);

class EavEntityAttributes {
  static convert(attributesDto) {
    const attributes = {};
    // loop attribute types - String, Boolean, ...
    for (const [typeName, attributeDto] of Object.entries(attributesDto)) {
      // loop attribute names - Description, Name, ...
      for (const [attributeName, valueDto] of Object.entries(attributeDto)) {
        attributes[attributeName] = ___WEBPACK_IMPORTED_MODULE_0__.EavField.convert(valueDto, typeName);
      }
    }
    return attributes;
  }
  static mergeSettings(metadataItems) {
    if (metadataItems == null) {
      return {};
    }
    const merged = {};
    // copy metadata settings which are not @All
    for (const item of metadataItems) {
      if (item.Type.Id === '@All') {
        continue;
      }
      for (const [name, value] of Object.entries(item.Attributes)) {
        const copy = {
          ...value
        };
        merged[name] = copy;
      }
    }
    // copy @All metadata settings, overwriting previous settings
    for (const item of metadataItems) {
      if (item.Type.Id !== '@All') {
        continue;
      }
      for (const [name, value] of Object.entries(item.Attributes)) {
        // do not overwrite previous settings if @All is empty
        const exists = merged[name] != null;
        const emptyAll = value.Values[0].Value === '';
        if (exists && emptyAll) {
          continue;
        }
        const copy = {
          ...value
        };
        merged[name] = copy;
      }
    }
    return merged;
  }
}

/***/ }),

/***/ 48394:
/*!**********************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/eav/eav-entity.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EavEntity: () => (/* binding */ EavEntity)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 12936);

class EavEntity {
  static convertOne(entityDto) {
    const attributes = ___WEBPACK_IMPORTED_MODULE_0__.EavEntityAttributes.convert(entityDto.Attributes);
    const metadata = this.convertMany(entityDto.Metadata);
    const entity = {
      Attributes: attributes,
      Guid: entityDto.Guid,
      Id: entityDto.Id,
      Owner: entityDto.Owner,
      Type: entityDto.Type,
      Version: entityDto.Version,
      For: entityDto.For,
      Metadata: metadata
    };
    return entity;
  }
  static convertMany(entitiesDto) {
    if (entitiesDto == null) {
      return null;
    }
    const entities = entitiesDto.map(entityDto => EavEntity.convertOne(entityDto));
    return entities;
  }
}

/***/ }),

/***/ 94174:
/*!*******************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/eav/eav-for.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 63966:
/*!********************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/eav/eav-item.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EavItem: () => (/* binding */ EavItem)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 12936);

class EavItem {
  static convert(entityBundleDto) {
    const entity = ___WEBPACK_IMPORTED_MODULE_0__.EavEntity.convertOne(entityBundleDto.Entity);
    const item = {
      Entity: entity,
      Header: entityBundleDto.Header
    };
    return item;
  }
}

/***/ }),

/***/ 45681:
/*!********************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/eav/eav-type.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 53408:
/*!*********************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/eav/eav-value.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EavValue: () => (/* binding */ EavValue)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 12936);

class EavValue {
  static create(value, dimensions) {
    const eavValue = {
      Value: value,
      Dimensions: dimensions
    };
    return eavValue;
  }
  static convert(valuesDto) {
    const values = Object.entries(valuesDto).map(([langs, value]) => {
      const dimensions = langs.split(',').map(lang => ___WEBPACK_IMPORTED_MODULE_0__.EavDimension.create(lang));
      return this.create(value, dimensions);
    });
    return values;
  }
}

/***/ }),

/***/ 18263:
/*!**********************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/eav/eav-values.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EavField: () => (/* binding */ EavField)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 12936);

class EavField {
  static convert(valueDto, type) {
    const values = ___WEBPACK_IMPORTED_MODULE_0__.EavValue.convert(valueDto);
    return {
      Values: values,
      Type: type
    };
  }
}

/***/ }),

/***/ 12936:
/*!*****************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/eav/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EavContentType: () => (/* reexport safe */ _eav_content_type__WEBPACK_IMPORTED_MODULE_1__.EavContentType),
/* harmony export */   EavContentTypeAttribute: () => (/* reexport safe */ _eav_content_type_attribute__WEBPACK_IMPORTED_MODULE_0__.EavContentTypeAttribute),
/* harmony export */   EavDimension: () => (/* reexport safe */ _eav_dimension__WEBPACK_IMPORTED_MODULE_2__.EavDimension),
/* harmony export */   EavEntity: () => (/* reexport safe */ _eav_entity__WEBPACK_IMPORTED_MODULE_4__.EavEntity),
/* harmony export */   EavEntityAttributes: () => (/* reexport safe */ _eav_entity_attributes__WEBPACK_IMPORTED_MODULE_3__.EavEntityAttributes),
/* harmony export */   EavField: () => (/* reexport safe */ _eav_values__WEBPACK_IMPORTED_MODULE_9__.EavField),
/* harmony export */   EavItem: () => (/* reexport safe */ _eav_item__WEBPACK_IMPORTED_MODULE_6__.EavItem),
/* harmony export */   EavValue: () => (/* reexport safe */ _eav_value__WEBPACK_IMPORTED_MODULE_8__.EavValue)
/* harmony export */ });
/* harmony import */ var _eav_content_type_attribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eav-content-type-attribute */ 5948);
/* harmony import */ var _eav_content_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eav-content-type */ 66313);
/* harmony import */ var _eav_dimension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eav-dimension */ 58021);
/* harmony import */ var _eav_entity_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eav-entity-attributes */ 15942);
/* harmony import */ var _eav_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eav-entity */ 48394);
/* harmony import */ var _eav_for__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eav-for */ 94174);
/* harmony import */ var _eav_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eav-item */ 63966);
/* harmony import */ var _eav_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./eav-type */ 45681);
/* harmony import */ var _eav_value__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./eav-value */ 53408);
/* harmony import */ var _eav_values__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./eav-values */ 18263);











/***/ }),

/***/ 25078:
/*!***************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/edit-routing.models.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 4104:
/*!************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/element-event-listener.model.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 87113:
/*!*********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/field-error-message.model.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 43514:
/*!****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/field-metadata.model.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 34251:
/*!****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/fields-configs.model.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
;


/***/ }),

/***/ 35250:
/*!**************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/form-configuration.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 53064:
/*!****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/form-languages.model.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormLanguage: () => (/* binding */ FormLanguage),
/* harmony export */   FormLanguageComplete: () => (/* binding */ FormLanguageComplete)
/* harmony export */ });
class FormLanguage {
  /**
   * In some cases we want both to be primary, but it's not clear why.
   * I think it's just because we want certain tests to only use one value, but the test is meant for 2 values.
   */
  static bothPrimary(original) {
    return {
      current: original.primary,
      primary: original.primary
    };
  }
  static diffCurrent(original, current) {
    return {
      current: current,
      primary: original.primary
    };
  }
  static empty() {
    return {
      current: '',
      primary: '',
      initial: ''
    };
  }
}
class FormLanguageComplete extends FormLanguage {}

/***/ }),

/***/ 93286:
/*!****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/form-read-only.model.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 47347:
/*!*************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/form-values.model.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 55900:
/*!***************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/global-config.model.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 6951:
/*!*************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogSeverities: () => (/* reexport safe */ _log_entry_model__WEBPACK_IMPORTED_MODULE_17__.LogSeverities),
/* harmony export */   PublishModes: () => (/* reexport safe */ _publish_mode_models__WEBPACK_IMPORTED_MODULE_19__.PublishModes),
/* harmony export */   controlToControlStatus: () => (/* reexport safe */ _control_status_model__WEBPACK_IMPORTED_MODULE_4__.controlToControlStatus),
/* harmony export */   emptyControlStatus: () => (/* reexport safe */ _control_status_model__WEBPACK_IMPORTED_MODULE_4__.emptyControlStatus)
/* harmony export */ });
/* harmony import */ var _adam_snapshot_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adam-snapshot.model */ 42506);
/* harmony import */ var _calculated_input_type_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculated-input-type.model */ 99408);
/* harmony import */ var _field_metadata_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field-metadata.model */ 43514);
/* harmony import */ var _content_type_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-type-settings.model */ 24886);
/* harmony import */ var _control_status_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./control-status.model */ 41814);
/* harmony import */ var _form_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-configuration */ 35250);
/* harmony import */ var _edit_routing_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-routing.models */ 25078);
/* harmony import */ var _element_event_listener_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./element-event-listener.model */ 4104);
/* harmony import */ var _field_error_message_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./field-error-message.model */ 87113);
/* harmony import */ var _fields_configs_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fields-configs.model */ 34251);
/* harmony import */ var _form_read_only_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-read-only.model */ 93286);
/* harmony import */ var _form_values_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form-values.model */ 47347);
/* harmony import */ var _global_config_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./global-config.model */ 55900);
/* harmony import */ var _language_instance_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./language-instance.model */ 15802);
/* harmony import */ var _shared_models_language_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/models/language.model */ 45519);
/* harmony import */ var _link_cache_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./link-cache.model */ 80359);
/* harmony import */ var _link_info_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./link-info.model */ 2007);
/* harmony import */ var _log_entry_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./log-entry.model */ 73419);
/* harmony import */ var _paste_clipboard_image_models__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./paste-clipboard-image.models */ 84595);
/* harmony import */ var _publish_mode_models__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./publish-mode.models */ 44840);
/* harmony import */ var _publish_status_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./publish-status.model */ 47636);
/* harmony import */ var _save_result_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./save-result.model */ 47641);
/* harmony import */ var _sxc_control_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sxc-control.model */ 26664);
/* harmony import */ var _versioning_options_model__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./versioning-options.model */ 44559);

























/***/ }),

/***/ 15802:
/*!*******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/language-instance.model.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 80359:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/link-cache.model.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 2007:
/*!***********************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/link-info.model.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 73419:
/*!***********************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/log-entry.model.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogSeverities: () => (/* binding */ LogSeverities)
/* harmony export */ });
const LogSeverities = {
  Error: 'error',
  Log: 'log',
  Warn: 'warn'
};

/***/ }),

/***/ 84595:
/*!************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/paste-clipboard-image.models.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 44840:
/*!***************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/publish-mode.models.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublishModes: () => (/* binding */ PublishModes)
/* harmony export */ });
/** PublishMode is short version of PublishStatus */
const PublishModes = {
  Show: 'show',
  Hide: 'hide',
  Branch: 'branch'
};

/***/ }),

/***/ 47636:
/*!****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/publish-status.model.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 47641:
/*!*************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/save-result.model.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 26664:
/*!*************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/sxc-control.model.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 44559:
/*!********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/models/versioning-options.model.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 98827:
/*!**********************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/services/adam.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdamService: () => (/* binding */ AdamService)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 22453);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ 56606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);








/**
 * Form wide ADAM helper to get files, add folders etc.
 * Must be created once per edit-form, as it needs the exact app etc.
 */
class AdamService {
  constructor(http, dnnContext, formConfig) {
    this.http = http;
    this.dnnContext = dnnContext;
    this.formConfig = formConfig;
  }
  getAll(url, config) {
    return this.http.get(url + '/items', {
      params: {
        subfolder: config.subfolder,
        usePortalRoot: config.usePortalRoot.toString(),
        appId: this.formConfig.config.appId
      }
    });
  }
  addFolder(newFolderName, url, config) {
    return this.http.post(url + '/folder', {}, {
      params: {
        subfolder: config.subfolder,
        newFolder: _helpers__WEBPACK_IMPORTED_MODULE_1__.SanitizeHelper.sanitizeName(newFolderName),
        usePortalRoot: config.usePortalRoot.toString(),
        appId: this.formConfig.config.appId
      }
    });
  }
  rename(item, newName, url, config) {
    return this.http.get(url + '/rename', {
      params: {
        subfolder: config.subfolder,
        isFolder: item.IsFolder.toString(),
        id: item.Id.toString(),
        usePortalRoot: config.usePortalRoot.toString(),
        newName: _helpers__WEBPACK_IMPORTED_MODULE_1__.SanitizeHelper.sanitizeName(newName),
        appId: this.formConfig.config.appId
      }
    });
  }
  deleteItem(item, url, config) {
    return this.http.get(url + '/delete', {
      params: {
        subfolder: config.subfolder,
        isFolder: item.IsFolder.toString(),
        id: item.Id.toString(),
        usePortalRoot: config.usePortalRoot.toString(),
        appId: this.formConfig.config.appId
      }
    });
  }
  getLinkInfo(link, contentType, guid, field) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl('cms/edit/linkInfo'), {
      params: {
        link,
        ...(guid && {
          guid
        }),
        ...(contentType && {
          contentType
        }),
        ...(field && {
          field
        }),
        appid: this.formConfig.config.appId
      }
    });
  }
  static #_ = this.ɵfac = function AdamService_Factory(t) {
    return new (t || AdamService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](___WEBPACK_IMPORTED_MODULE_0__.FormConfigService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AdamService,
    factory: AdamService.ɵfac
  });
}

/***/ }),

/***/ 16925:
/*!**********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/services/edit-initializer.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditInitializerService: () => (/* binding */ EditInitializerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 22453);
/* harmony import */ var _shared_helpers_update_env_vars_from_dialog_settings_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/helpers/update-env-vars-from-dialog-settings.helper */ 71477);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _shared_services_features_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/features.service */ 44858);
/* harmony import */ var _dialog_main_edit_dialog_main_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialog/main/edit-dialog-main.helpers */ 37671);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ 64158);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers */ 56606);
/* harmony import */ var _models_eav_eav_entity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/eav/eav-entity */ 48394);
/* harmony import */ var _store_ngrx_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/ngrx-data */ 27521);
/* harmony import */ var _form_fields_empty_empty_field_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../form/fields/empty/empty-field-helpers */ 82895);
/* harmony import */ var _form_shared_field_logic_field_logic_manager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../form/shared/field-logic/field-logic-manager */ 96600);
/* harmony import */ var _models_eav_eav_content_type__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/eav/eav-content-type */ 66313);
/* harmony import */ var _form_fields_picker_cache_picker_data_cache_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../form/fields/picker/cache/picker-data-cache.service */ 55382);
/* harmony import */ var _shared_services_service_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/services/service-base */ 4979);
/* harmony import */ var _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/logging/eav-logger */ 6812);
/* harmony import */ var _form_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./form-data.service */ 7253);
/* harmony import */ var _models_form_languages_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../models/form-languages.model */ 53064);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);












// tslint:disable-next-line:max-line-length


















const logThis = false;
const nameOfThis = 'EditInitializerService';
/**
 * Service to initialize an edit form. Will:
 * - Load form data
 * - store it in various services, rxStore etc.
 * - Load initial values for formulas
 */
class EditInitializerService extends _shared_services_service_base__WEBPACK_IMPORTED_MODULE_13__.ServiceBase {
  constructor(route, formConfig, itemService, inputTypeService, contentTypeItemService, contentTypeService, publishStatusService, translate, languageService, languageStore, snackBar, entityCacheService, adamCacheService, linkCacheService, featuresService, formDataService) {
    super(new _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_14__.EavLogger(nameOfThis, logThis));
    this.route = route;
    this.formConfig = formConfig;
    this.itemService = itemService;
    this.inputTypeService = inputTypeService;
    this.contentTypeItemService = contentTypeItemService;
    this.contentTypeService = contentTypeService;
    this.publishStatusService = publishStatusService;
    this.translate = translate;
    this.languageService = languageService;
    this.languageStore = languageStore;
    this.snackBar = snackBar;
    this.entityCacheService = entityCacheService;
    this.adamCacheService = adamCacheService;
    this.linkCacheService = linkCacheService;
    this.featuresService = featuresService;
    this.formDataService = formDataService;
    this.loaded = (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.signal)(false);
    this.initialFormValues = {};
  }
  ngOnDestroy() {
    super.destroy();
  }
  fetchFormData() {
    const inbound = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_2__.convertUrlToForm)(this.route.snapshot.params.items);
    // 2024-06-01 2dm adding index to round trip
    const form = {
      ...inbound,
      items: inbound.items.map((item, index) => {
        return {
          ...item,
          clientId: index
        };
      })
    };
    this.log.a('fetchFormData', form);
    const editItems = JSON.stringify(form.items);
    this.formDataService.fetchFormData(editItems).subscribe(dataFromBackend => {
      // 2dm 2024-06-01 preserve prefill and client-data from original
      // and stop relying on round-trip to keep it
      const formData = {
        ...dataFromBackend,
        Items: dataFromBackend.Items.map(item => {
          // try to find original item
          const originalItem = form.items.find(i => i.clientId === item.Header.clientId);
          this.log.a('fetchFormData - remix', {
            item,
            originalItem
          });
          return originalItem == null ? item : {
            ...item,
            Header: {
              ...item.Header,
              Prefill: originalItem.Prefill,
              ClientData: originalItem.ClientData
            }
          };
        })
      };
      this.log.a('fetchFormData - after remix', {
        formData
      });
      // SDV: document what's happening here
      this.featuresService.load(formData.Context);
      (0,_shared_helpers_update_env_vars_from_dialog_settings_helper__WEBPACK_IMPORTED_MODULE_1__.UpdateEnvVarsFromDialogSettings)(formData.Context.App);
      this.importLoadedData(formData);
      this.keepInitialValues();
      this.initMissingValues();
      this.loaded.set(true);
    });
  }
  importLoadedData(loadDto) {
    const formId = Math.floor(Math.random() * 99999);
    const isParentDialog = (0,_dialog_main_edit_dialog_main_helpers__WEBPACK_IMPORTED_MODULE_4__.calculateIsParentDialog)(this.route);
    const itemGuids = loadDto.Items.map(item => item.Entity.Guid);
    this.itemService.loadItems(loadDto.Items);
    // we assume that input type and content type data won't change between loading parent and child forms
    this.inputTypeService.addInputTypes(loadDto.InputTypes);
    this.contentTypeItemService.addContentTypeItems(loadDto.ContentTypeItems);
    this.contentTypeService.addContentTypes(loadDto.ContentTypes);
    this.adamCacheService.loadPrefetch(loadDto.Prefetch?.Adam);
    this.entityCacheService.loadEntities(loadDto.Prefetch?.Entities);
    this.linkCacheService.loadPrefetch(loadDto.Prefetch?.Links, loadDto.Prefetch?.Adam);
    const items = this.itemService.getItems(itemGuids);
    const createMode = items[0].Entity.Id === 0;
    const isCopy = items[0].Header.DuplicateEntity != null;
    const enableHistory = !createMode && this.route.snapshot.data.history !== false;
    const settingsAsEav = {
      ...loadDto.Settings,
      Entities: _models_eav_eav_entity__WEBPACK_IMPORTED_MODULE_7__.EavEntity.convertMany(loadDto.Settings.Entities),
      ContentTypes: _models_eav_eav_content_type__WEBPACK_IMPORTED_MODULE_11__.EavContentType.convertMany(loadDto.Settings.ContentTypes)
    };
    this.formConfig.initFormConfig(loadDto.Context, formId, isParentDialog, itemGuids, createMode, isCopy, enableHistory, settingsAsEav);
    var langs = loadDto.Context.Language; // this.formConfig.languages;
    // WARNING! TranslateService is a new instance for every form and language must be set for every one of them
    const isoLangCode = langs.Current.split('-')[0];
    this.translate.use(isoLangCode);
    // load language data only for parent dialog to not overwrite languages when opening child dialogs
    if (isParentDialog) {
      const sortedLanguages = (0,_dialog_main_edit_dialog_main_helpers__WEBPACK_IMPORTED_MODULE_4__.sortLanguages)(langs.Primary, langs.List);
      this.languageService.loadLanguages(sortedLanguages);
    }
    this.languageStore.addToStore(formId, langs.Primary, langs.Current, false);
    // First convert to publish mode, because then it will run checks if this is allowed
    const publishMode = this.publishStatusService.asPublishMode(loadDto.IsPublished, loadDto.DraftShouldBranch);
    this.publishStatusService.setPublishMode(publishMode, formId, this.formConfig);
  }
  //#region Initial Values for Formulas to retrieve if needed
  /**
   * Preserve initial values for future use in formulas which may need to know the initial value
   */
  keepInitialValues() {
    const items = this.itemService.getItems(this.formConfig.config.itemGuids);
    const allLangs = this.languageService.getLanguages().map(language => language.NameId);
    const language = this.formConfig.language(); // this.languageStore.getLanguage(this.formConfig.config.formId);
    if (!allLangs.includes(language.current)) allLangs.push(language.current);
    if (!allLangs.includes(language.primary)) allLangs.push(language.primary);
    for (const item of items) for (const lang of allLangs) {
      const formValues = {};
      const lookupLang = _models_form_languages_model__WEBPACK_IMPORTED_MODULE_16__.FormLanguage.diffCurrent(language, lang);
      for (const [fieldName, fieldValues] of Object.entries(item.Entity.Attributes)) formValues[fieldName] = _helpers__WEBPACK_IMPORTED_MODULE_6__.LocalizationHelpers.translate(lookupLang, fieldValues, null);
      this.initialFormValues[this.initialValuesCacheKey(item.Entity.Guid, lang)] = formValues;
    }
  }
  initialValuesCacheKey(entityGuid, language) {
    return `entityGuid:${entityGuid}:language:${language}`;
  }
  getInitialValues(entityGuid, language) {
    return this.initialFormValues[this.initialValuesCacheKey(entityGuid, language)];
  }
  //#endregion
  initMissingValues() {
    const l = this.log.fn('initMissingValues');
    const eavConfig = this.formConfig.config;
    const formId = eavConfig.formId;
    const items = this.itemService.getItems(eavConfig.itemGuids);
    const inputTypes = this.inputTypeService.getInputTypes();
    const languages = this.languageService.getLanguages();
    const language = this.formConfig.language();
    /** force UI to switch to default language, because some values are missing in the default language */
    let switchToDefault = false;
    const isCreateMode = eavConfig.createMode;
    for (const item of items) {
      const contentTypeId = _helpers__WEBPACK_IMPORTED_MODULE_6__.InputFieldHelpers.getContentTypeId(item);
      const contentType = this.contentTypeService.getContentType(contentTypeId);
      for (const ctAttribute of contentType.Attributes) {
        const currentName = ctAttribute.Name;
        const inputType = inputTypes.find(i => i.Type === ctAttribute.InputType);
        const isEmptyType = _form_fields_empty_empty_field_helpers__WEBPACK_IMPORTED_MODULE_9__.EmptyFieldHelpers.isEmptyInputType(inputType?.Type);
        l.a(`Attribute: '${currentName}' InputType: '${inputType?.Type}' isEmptyType: '${isEmptyType}'`);
        if (isEmptyType) continue;
        const logic = _form_shared_field_logic_field_logic_manager__WEBPACK_IMPORTED_MODULE_10__.FieldLogicManager.singleton().getOrUnknown(inputType?.Type);
        const attributeValues = item.Entity.Attributes[ctAttribute.Name];
        const fieldSettings = _helpers__WEBPACK_IMPORTED_MODULE_6__.FieldsSettingsHelpers.setDefaultFieldSettings(new _helpers__WEBPACK_IMPORTED_MODULE_6__.EntityReader(language.primary, language.primary).flattenAll(ctAttribute.Metadata));
        if (languages.length === 0) {
          l.a(`${currentName} languages none, simple init`);
          const firstValue = _helpers__WEBPACK_IMPORTED_MODULE_6__.LocalizationHelpers.getBestValue(attributeValues, '*', '*', _constants__WEBPACK_IMPORTED_MODULE_5__.BestValueModes.Default);
          if (logic.isValueEmpty(firstValue, isCreateMode)) this.itemService.setDefaultValue(item, ctAttribute, inputType, fieldSettings, languages, language.primary);
        } else {
          l.a(`${currentName} languages many, complex init`);
          // check if there is a value for the generic / all language
          const disableI18n = inputType?.DisableI18n;
          const noLanguageValue = _helpers__WEBPACK_IMPORTED_MODULE_6__.LocalizationHelpers.getBestValue(attributeValues, '*', '*', _constants__WEBPACK_IMPORTED_MODULE_5__.BestValueModes.Strict);
          l.values({
            disableI18n,
            noLanguageValue
          }, currentName);
          if (!disableI18n && noLanguageValue !== undefined) {
            // move * value to defaultLanguage
            const transactionItem = this.itemService.removeItemAttributeDimension(item.Entity.Guid, ctAttribute.Name, '*', true);
            this.itemService.addItemAttributeValue(item.Entity.Guid, ctAttribute.Name, noLanguageValue, language.primary, false, ctAttribute.Type, false, transactionItem);
            l.a(`${currentName} exit`);
            continue;
          }
          const defaultLanguageValue = _helpers__WEBPACK_IMPORTED_MODULE_6__.LocalizationHelpers.getBestValue(attributeValues, language.primary, language.primary, _constants__WEBPACK_IMPORTED_MODULE_5__.BestValueModes.Strict);
          const valueIsEmpty = logic.isValueEmpty(defaultLanguageValue, isCreateMode);
          l.values({
            currentName,
            valueIsEmpty,
            defaultLanguageValue,
            isCreateMode
          }, currentName);
          if (valueIsEmpty) {
            const valUsed = this.itemService.setDefaultValue(item, ctAttribute, inputType, fieldSettings, languages, language.primary);
            // 2022-08-15 2dm added this
            // If we run into more problems (like required date-fields which result in null)
            // we may have to update the logic to use FieldLogicBase and add rules for each type what would be valid
            // or test for IsRequired as well
            // If the primary language isn't ready, enforce switch-to-default
            // Skip this for ephemeral fields as they never load with content
            // Also switch for fields which use null as default (like boolean-tristate) as this kind of "empty" is valid
            if (valUsed != null && !fieldSettings.IsEphemeral) switchToDefault = true;
          }
        }
      }
    }
    if (switchToDefault && language.current !== language.primary) {
      this.languageStore.setCurrent(formId, language.primary);
      const message = this.translate.instant('Message.SwitchedLanguageToDefault', {
        language: language.primary
      });
      this.snackBar.open(message, null, {
        duration: 5000
      });
    }
  }
  static #_ = this.ɵfac = function EditInitializerService_Factory(t) {
    return new (t || EditInitializerService)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](___WEBPACK_IMPORTED_MODULE_0__.FormConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_store_ngrx_data__WEBPACK_IMPORTED_MODULE_8__.ItemService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_store_ngrx_data__WEBPACK_IMPORTED_MODULE_8__.InputTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_store_ngrx_data__WEBPACK_IMPORTED_MODULE_8__.ContentTypeItemService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_store_ngrx_data__WEBPACK_IMPORTED_MODULE_8__.ContentTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_store_ngrx_data__WEBPACK_IMPORTED_MODULE_8__.PublishStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_store_ngrx_data__WEBPACK_IMPORTED_MODULE_8__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_store_ngrx_data__WEBPACK_IMPORTED_MODULE_8__.LanguageInstanceService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_form_fields_picker_cache_picker_data_cache_service__WEBPACK_IMPORTED_MODULE_12__.PickerDataCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_store_ngrx_data__WEBPACK_IMPORTED_MODULE_8__.AdamCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_store_ngrx_data__WEBPACK_IMPORTED_MODULE_8__.LinkCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_shared_services_features_service__WEBPACK_IMPORTED_MODULE_3__.FeaturesService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_form_data_service__WEBPACK_IMPORTED_MODULE_15__.FormDataService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjectable"]({
    token: EditInitializerService,
    factory: EditInitializerService.ɵfac
  });
}

/***/ }),

/***/ 17467:
/*!******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/services/edit-routing.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditRoutingService: () => (/* binding */ EditRoutingService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 5057);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 22453);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/base.component */ 43176);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ 56606);
/* harmony import */ var _store_ngrx_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/ngrx-data */ 27521);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 49074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 12587);















/**
 * Special helper to handle opening / closing field-specific popups.
 * E.g. the larger dialog on hyperlinks/files or entity-pickers.
 *
 * Note: also seems to be involved in the version-dialog closing as well.
 */
class EditRoutingService extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
  constructor(dialogRef, route, router, languageInstanceService, formConfig) {
    super();
    this.dialogRef = dialogRef;
    this.route = route;
    this.router = router;
    this.languageInstanceService = languageInstanceService;
    this.formConfig = formConfig;
  }
  ngOnDestroy() {
    this.childFormResult$.complete();
    super.ngOnDestroy();
  }
  init() {
    this.childFormResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.initHideHeader();
    this.initChildFormResult();
    this.refreshOnChildVersionsClosed();
  }
  /** Tells if field with this index should be expanded */
  isExpanded(fieldId, entityGuid) {
    const fieldIndex = fieldId.toString();
    const params = this.route.snapshot.params;
    const isExpanded = params.detailsEntityGuid === entityGuid && params.detailsFieldId === fieldIndex;
    return isExpanded;
  }
  /** Tells if field with this index should be expanded */
  isExpanded$(fieldId, entityGuid) {
    const fieldIndex = fieldId.toString();
    return this.route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(params => params.detailsEntityGuid === entityGuid && params.detailsFieldId === fieldIndex), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)());
  }
  isExpandedSignal(fieldId, entityGuid) {
    return (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__.toSignal)(this.isExpanded$(fieldId, entityGuid));
  }
  /** Fires when child form is closed and has a result, new entity was added */
  childFormResult(fieldId, entityGuid) {
    return this.childFormResult$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(childResult => childResult.updateEntityGuid === entityGuid && childResult.updateFieldId === fieldId && childResult.result != null), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(childResult => childResult.result));
  }
  /** Fires when child form is closed */
  childFormClosed() {
    return this.childFormResult$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(childResult => null));
  }
  expand(expand, fieldId, entityGuid, componentTag) {
    const params = this.route.snapshot.params;
    const oldHasDetails = params.detailsEntityGuid != null && params.detailsFieldId != null;
    const oldEditUrl = `edit/${params.items}` + (oldHasDetails ? `/details/${params.detailsEntityGuid}/${params.detailsFieldId}` : '');
    const newEditUrl = `edit/${params.items}` + (expand ? `/details/${entityGuid}/${fieldId}` : '');
    const currentUrl = _helpers__WEBPACK_IMPORTED_MODULE_3__.UrlHelpers.calculatePathFromRoot(this.route);
    const lastIndex = currentUrl.lastIndexOf(oldEditUrl);
    if (lastIndex <= 0) return;
    const newUrl = currentUrl.substring(0, lastIndex) + currentUrl.substring(lastIndex).replace(oldEditUrl, newEditUrl);
    this.router.navigate([newUrl], {
      state: componentTag && {
        componentTag
      }
    });
  }
  /** Opens child dialog and stores update entityGuid and fieldId in the url, if field is not expanded already */
  open(fieldId, entityGuid, form) {
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_2__.convertFormToUrl)(form);
    const params = this.route.snapshot.params;
    const hasDetails = params.detailsEntityGuid != null && params.detailsFieldId != null;
    // if field is expanded, just open child because that info will be used for field update
    if (hasDetails) {
      this.router.navigate([`edit/${formUrl}`], {
        relativeTo: this.route
      });
      return;
    }
    // otherwise add /update/:entityGuid/:fieldId to the url
    const oldEditUrl = `edit/${params.items}`;
    const newEditUrl = `edit/${params.items}/update/${entityGuid}/${fieldId}/edit/${formUrl}`;
    const currentUrl = _helpers__WEBPACK_IMPORTED_MODULE_3__.UrlHelpers.calculatePathFromRoot(this.route);
    const lastIndex = currentUrl.lastIndexOf(oldEditUrl);
    if (lastIndex <= 0) return;
    const newUrl = currentUrl.substring(0, lastIndex) + currentUrl.substring(lastIndex).replace(oldEditUrl, newEditUrl);
    this.router.navigate([newUrl]);
  }
  /** Update hideHeader for the form. Fix for safari and mobile browsers */
  initHideHeader() {
    this.subscriptions.add(this.route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(params => params.detailsEntityGuid != null && params.detailsFieldId != null), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)()).subscribe(hasDetails => {
      this.languageInstanceService.updateHideHeader(this.formConfig.config.formId, hasDetails);
    }));
  }
  initChildFormResult() {
    this.subscriptions.add(this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.startWith)(!!this.route.snapshot.firstChild), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(() => !!this.route.snapshot.firstChild), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.pairwise)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(([hadChild, hasChild]) => hadChild && !hasChild), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(() => {
      const params = this.route.snapshot.params;
      const hasDetails = params.detailsEntityGuid != null && params.detailsFieldId != null;
      const updateEntityGuid = hasDetails ? params.detailsEntityGuid : params.updateEntityGuid;
      const updateFieldId = hasDetails ? params.detailsFieldId : params.updateFieldId;
      const navigation = this.router.getCurrentNavigation();
      const editResult = navigation.extras?.state;
      const formResult = {
        updateEntityGuid,
        updateFieldId: parseInt(updateFieldId, 10),
        result: editResult
      };
      return formResult;
    })).subscribe(formResult => {
      // alert subscribers that child form closed
      this.childFormResult$.next(formResult);
      // clear update ids from url (leave expanded/details)
      const params = this.route.snapshot.params;
      const hasUpdate = params.updateEntityGuid != null && params.updateFieldId != null;
      if (!hasUpdate) return;
      const oldEditUrl = `edit/${params.items}/update/${params.updateEntityGuid}/${params.updateFieldId}`;
      const newEditUrl = `edit/${params.items}`;
      const currentUrl = _helpers__WEBPACK_IMPORTED_MODULE_3__.UrlHelpers.calculatePathFromRoot(this.route);
      const lastIndex = currentUrl.lastIndexOf(oldEditUrl);
      if (lastIndex <= 0) return;
      const newUrl = currentUrl.substring(0, lastIndex) + currentUrl.substring(lastIndex).replace(oldEditUrl, newEditUrl);
      this.router.navigate([newUrl]);
    }));
  }
  refreshOnChildVersionsClosed() {
    this.subscriptions.add(this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.startWith)(!!this.route.snapshot.firstChild), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(() => !!this.route.snapshot.firstChild), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.pairwise)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(([hadChild, hasChild]) => hadChild && !hasChild), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(() => {
      const navigation = this.router.getCurrentNavigation();
      const versionsResult = navigation.extras?.state;
      return versionsResult;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(versionsResult => versionsResult?.refreshEdit != null)).subscribe(result => {
      if (!result.refreshEdit) return;
      const params = this.route.snapshot.params;
      const oldEditUrl = `edit/${params.items}`;
      const newEditUrl = `edit/refresh/${params.items}`;
      const currentUrl = _helpers__WEBPACK_IMPORTED_MODULE_3__.UrlHelpers.calculatePathFromRoot(this.route);
      const lastIndex = currentUrl.lastIndexOf(oldEditUrl);
      if (lastIndex <= 0) return;
      const newUrl = currentUrl.substring(0, lastIndex) + currentUrl.substring(lastIndex).replace(oldEditUrl, newEditUrl);
      const navRes = {
        navigateUrl: newUrl
      };
      this.dialogRef.close(navRes);
    }));
  }
  static #_ = this.ɵfac = function EditRoutingService_Factory(t) {
    return new (t || EditRoutingService)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_store_ngrx_data__WEBPACK_IMPORTED_MODULE_4__.LanguageInstanceService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](___WEBPACK_IMPORTED_MODULE_0__.FormConfigService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({
    token: EditRoutingService,
    factory: EditRoutingService.ɵfac
  });
}

/***/ }),

/***/ 85235:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/services/entity.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityService: () => (/* binding */ EntityService),
/* harmony export */   webApiEntityList: () => (/* binding */ webApiEntityList),
/* harmony export */   webApiEntityRoot: () => (/* binding */ webApiEntityRoot)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 86301);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 22453);
/* harmony import */ var _shared_services_service_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/service-base */ 4979);
/* harmony import */ var _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/logging/eav-logger */ 6812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);










const logThis = false;
const webApiEntityRoot = 'admin/entity/';
const webApiEntityList = 'admin/entity/list';
class EntityService extends _shared_services_service_base__WEBPACK_IMPORTED_MODULE_1__.ServiceBase {
  constructor(http, formConfig, dnnContext, queryService) {
    super(new _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_2__.EavLogger('EntityService', logThis));
    this.http = http;
    this.formConfig = formConfig;
    this.dnnContext = dnnContext;
    this.queryService = queryService;
  }
  /**
   * Get entities based on the content type name.
   * As of 2024-04-29 only used in REST API.
   * @param params
   * @returns
   */
  getEntities$(params) {
    return params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.filter)(p => p != null), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(p => this.getAvailableEntities(p.contentTypeName).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.shareReplay)(1))));
  }
  getAvailableEntities(contentTypeName, entitiesFilter) {
    var log = this.log.rxTap('getEntities', {
      enabled: true
    });
    return this.queryService.getEntities({
      contentTypes: [contentTypeName],
      itemIds: entitiesFilter,
      fields: 'Id,Guid,Title',
      log: 'getAvailableEntities'
    }).pipe(log.pipe(), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(data => data.Default));
  }
  delete(contentType, entityId, force, parentId, parentField) {
    return this.http.delete(this.dnnContext.$2sxc.http.apiUrl(webApiEntityRoot + 'delete'), {
      params: {
        contentType,
        id: entityId.toString(),
        appId: this.formConfig.config.appId,
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
  static #_ = this.ɵfac = function EntityService_Factory(t) {
    return new (t || EntityService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](___WEBPACK_IMPORTED_MODULE_0__.FormConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_9__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](___WEBPACK_IMPORTED_MODULE_0__.QueryService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: EntityService,
    factory: EntityService.ɵfac
  });
}

/***/ }),

/***/ 99585:
/*!*********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/services/fields-settings.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldsSettingsService: () => (/* binding */ FieldsSettingsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 43942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 86301);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 22453);
/* harmony import */ var _shared_helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/helpers/console-log-angular.helper */ 74230);
/* harmony import */ var _form_shared_field_logic_field_logic_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../form/shared/field-logic/field-logic-manager */ 96600);
/* harmony import */ var _formulas_formula_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../formulas/formula-engine */ 63199);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ 56606);
/* harmony import */ var _store_ngrx_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/ngrx-data */ 27521);
/* harmony import */ var _forms_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms-state.service */ 46275);
/* harmony import */ var _formulas_form_item_formula_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../formulas/form-item-formula.service */ 64034);
/* harmony import */ var _formulas_formula_promise_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../formulas/formula-promise-handler */ 23813);
/* harmony import */ var _item_field_visibility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./item-field-visibility */ 84860);
/* harmony import */ var _form_fields_empty_empty_field_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../form/fields/empty/empty-field-helpers */ 82895);
/* harmony import */ var _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/rxJs/rx.helpers */ 93826);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 49074);
/* harmony import */ var _shared_services_service_base__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/services/service-base */ 4979);
/* harmony import */ var _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/logging/eav-logger */ 6812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 37580);
























const logThis = false;
const nameOfThis = 'FieldsSettingsService';
// const logOnlyFields = ['Boolean'];
/**
 * FieldsSettingsService is responsible for handling the settings, values and validations of fields.
 */
class FieldsSettingsService extends _shared_services_service_base__WEBPACK_IMPORTED_MODULE_12__.ServiceBase {
  constructor(contentTypeService, contentTypeItemService, languageInstanceService, formConfig, itemService, inputTypeService, globalConfigService, formsStateService, formulaEngine, formItemFormulaService, formulaPromiseHandler) {
    super(new _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_13__.EavLogger(nameOfThis, logThis));
    this.contentTypeService = contentTypeService;
    this.contentTypeItemService = contentTypeItemService;
    this.languageInstanceService = languageInstanceService;
    this.formConfig = formConfig;
    this.itemService = itemService;
    this.inputTypeService = inputTypeService;
    this.globalConfigService = globalConfigService;
    this.formsStateService = formsStateService;
    this.formulaEngine = formulaEngine;
    this.formItemFormulaService = formItemFormulaService;
    this.formulaPromiseHandler = formulaPromiseHandler;
    this.contentTypeSettings$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(null);
    this.fieldsProps$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(null);
    this.forceRefreshSettings$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(null);
    this.updateValueQueue = {};
    this.latestFieldProps = {};
    this.contentType$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Observable();
    this.itemAttributes$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Observable();
    this.entityReader$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Observable();
    this.constantFieldParts$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Observable();
    this.itemHeader$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Observable();
    this.signalsCache = {};
    formulaPromiseHandler.init(this);
    formItemFormulaService.init(this.itemService);
    formulaEngine.init(this, this.formulaPromiseHandler, this.contentTypeSettings$);
  }
  ngOnDestroy() {
    this.contentTypeSettings$?.complete();
    this.fieldsProps$?.complete();
    this.forceRefreshSettings$?.complete();
    super.destroy();
  }
  init(entityGuid) {
    this.entityGuid = entityGuid;
    const item = this.itemService.getItem(entityGuid);
    this.itemFieldVisibility = new _item_field_visibility__WEBPACK_IMPORTED_MODULE_9__.ItemFieldVisibility(item.Header);
    const contentTypeId = _helpers__WEBPACK_IMPORTED_MODULE_4__.InputFieldHelpers.getContentTypeId(item);
    this.contentType$ = this.contentTypeService.getContentType$(contentTypeId);
    // todo: @STV unsure why we have a stream for the header, isn't it the same as item.Header?
    // pls find out and either clarify or fix
    this.itemHeader$ = this.itemService.getItemHeader$(entityGuid);
    this.entityReader$ = this.languageInstanceService.getEntityReader$(this.formConfig.config.formId);
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.combineLatest)([this.contentType$, this.itemHeader$, this.entityReader$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(([contentType, itemHeader, entityReader]) => {
      const ctSettings = _helpers__WEBPACK_IMPORTED_MODULE_4__.FieldsSettingsHelpers.setDefaultContentTypeSettings(entityReader.flattenAll(contentType.Metadata), contentType, entityReader, itemHeader);
      return ctSettings;
    })).subscribe(ctSettings => {
      this.contentTypeSettings$.next(ctSettings);
    }));
    const inputTypes$ = this.inputTypeService.getInputTypes$();
    const entityId = item.Entity.Id;
    this.entityId = entityId;
    const eavConfig = this.formConfig.config;
    this.constantFieldParts$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.combineLatest)([inputTypes$, this.contentType$, this.entityReader$, this.formConfig.language$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(([inputTypes, contentType, entityReader, language]) => {
      // When merging metadata, the primary language must be the initial language, not the current
      const mdMerger = new _helpers__WEBPACK_IMPORTED_MODULE_4__.EntityReader(language.initial, language.primary);
      const allConstFieldParts = contentType.Attributes.map((attribute, index) => {
        const initialSettings = _helpers__WEBPACK_IMPORTED_MODULE_4__.FieldsSettingsHelpers.setDefaultFieldSettings(mdMerger.flattenAll(attribute.Metadata));
        const initialDisabled = initialSettings.Disabled ?? false;
        const calculatedInputType = _helpers__WEBPACK_IMPORTED_MODULE_4__.InputFieldHelpers.calculateInputType(attribute, inputTypes);
        const inputType = inputTypes.find(i => i.Type === attribute.InputType);
        // Construct the constants / unchanging aspects of the field
        const constants = {
          angularAssets: inputType?.AngularAssets,
          contentTypeId,
          dropzonePreviewsClass: `dropzone-previews-${eavConfig.formId}-${index}`,
          entityGuid,
          entityId,
          fieldName: attribute.Name,
          index,
          initialDisabled,
          inputType: calculatedInputType.inputType,
          isExternal: calculatedInputType.isExternal,
          isLastInGroup: _helpers__WEBPACK_IMPORTED_MODULE_4__.FieldsSettingsHelpers.findIsLastInGroup(contentType, attribute),
          type: attribute.Type
        };
        // Construct the constants with settings and everything
        // TODO: unclear why we're doing this again (see `initialSettings`) - with different languages in the flattening
        const mergeRaw = entityReader.flattenAll(attribute.Metadata);
        // Sometimes the metadata doesn't have the input type (empty string), so we'll add the attribute.InputType just in case...
        mergeRaw.InputType = attribute.InputType;
        mergeRaw.VisibleDisabled = this.itemFieldVisibility.isVisibleDisabled(attribute.Name);
        const settingsInitial = _helpers__WEBPACK_IMPORTED_MODULE_4__.FieldsSettingsHelpers.setDefaultFieldSettings(mergeRaw);
        // consoleLogForm('merged', JSON.parse(JSON.stringify(settingsInitial)));
        const logic = _form_shared_field_logic_field_logic_manager__WEBPACK_IMPORTED_MODULE_2__.FieldLogicManager.singleton().get(attribute.InputType);
        const constantFieldParts = {
          logic,
          settingsInitial,
          inputType,
          calculatedInputType,
          constants,
          currentLanguage: entityReader.current
        };
        return constantFieldParts;
      });
      // Make sure that groups, which have a forced-visible-field are also visible
      try {
        // ATM in try-catch, to ensure we don't break anything
        if (this.itemFieldVisibility.hasRules()) allConstFieldParts.forEach((groupField, index) => {
          // Only work on group-starts
          if (!_form_fields_empty_empty_field_helpers__WEBPACK_IMPORTED_MODULE_10__.EmptyFieldHelpers.isGroupStart(groupField.calculatedInputType.inputType)) return;
          // Ignore if visible-disabled is already ok
          if (groupField.settingsInitial.VisibleDisabled == false) return;
          // Check if any of the following fields is forced visible - before another group-start/end
          for (let i = index + 1; i < allConstFieldParts.length; i++) {
            const innerField = allConstFieldParts[i];
            // Stop checking the current group if we found another group start/end
            if (_form_fields_empty_empty_field_helpers__WEBPACK_IMPORTED_MODULE_10__.EmptyFieldHelpers.endsPreviousGroup(innerField.calculatedInputType.inputType)) return;
            if (innerField.settingsInitial.VisibleDisabled == false) {
              (0,_shared_helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_1__.consoleLogEditForm)('Forced visible', groupField.constants.fieldName, 'because of', innerField.constants.fieldName);
              groupField.settingsInitial.VisibleDisabled = false;
              return;
            }
          }
        });
      } catch (e) {
        console.error('Error trying to set item field visibility', e);
      }
      return allConstFieldParts;
    }));
    this.itemAttributes$ = this.itemService.getItemAttributes$(entityGuid);
    const formReadOnly$ = this.formsStateService.readOnly$;
    const debugEnabled$ = this.globalConfigService.getDebugEnabled$();
    const logUpdateFieldProps = this.log.rxTap('updateFieldProps', {
      enabled: true
    });
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.combineLatest)([this.contentType$, this.itemAttributes$, this.itemHeader$, this.entityReader$, formReadOnly$, this.forceRefreshSettings$, debugEnabled$, this.constantFieldParts$]).pipe(logUpdateFieldProps.pipe(), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(([contentType, itemAttributes, itemHeader, entityReader, formReadOnly, _, debugEnabled, constantFieldParts]) => {
      const formValues = {};
      for (const [fieldName, fieldValues] of Object.entries(itemAttributes)) formValues[fieldName] = entityReader.getBestValue(fieldValues, null);
      const slotIsEmpty = itemHeader.IsEmptyAllowed && itemHeader.IsEmpty;
      const logicTools = {
        eavConfig: this.formConfig.config,
        entityReader,
        debug: debugEnabled,
        contentTypeItemService: this.contentTypeItemService
      };
      if (Object.keys(this.latestFieldProps).length) {
        const status = this.formulaPromiseHandler.updateValuesFromQueue(entityGuid, this.updateValueQueue, contentType, formValues, this.latestFieldProps, slotIsEmpty, entityReader, this.latestFieldProps, contentType.Attributes, contentType.Metadata, constantFieldParts, itemAttributes, formReadOnly.isReadOnly, logicTools, this.formItemFormulaService);
        // we only updated values from promise (queue), don't trigger property regular updates
        // NOTE: if any value changes then the entire cycle will automatically retrigger
        if (status.newFieldProps) this.latestFieldProps = status.newFieldProps;
        if (status.valuesUpdated) return null;
      }
      const fieldsProps = {};
      const possibleValueUpdates = {};
      const possibleFieldsUpdates = [];
      for (const attribute of contentType.Attributes) {
        const attributeValues = itemAttributes[attribute.Name];
        // empty-default and empty-message have no value
        const valueBefore = formValues[attribute.Name];
        const constantFieldPart = constantFieldParts.find(f => f.constants.fieldName === attribute.Name);
        // if the currentLanguage changed then we need to flush the settings with initial ones that have updated language
        let latestSettings;
        if (constantFieldPart.currentLanguage == this.latestFieldProps[attribute.Name]?.currentLanguage) {
          latestSettings = this.latestFieldProps[attribute.Name]?.settings ?? {
            ...constantFieldPart.settingsInitial
          };
        } else {
          latestSettings = {
            ...constantFieldPart.settingsInitial
          };
        }
        // run formulas
        const formulaResult = this.formulaEngine.runAllFormulas(entityGuid, entityId, attribute, formValues, constantFieldPart.inputType, constantFieldPart.logic, constantFieldPart.settingsInitial, latestSettings, itemHeader, contentType.Metadata, attributeValues, entityReader, slotIsEmpty, formReadOnly.isReadOnly, valueBefore, logicTools);
        const fixed = formulaResult.settings;
        possibleValueUpdates[attribute.Name] = formulaResult.value;
        if (formulaResult.fields) possibleFieldsUpdates.push(...formulaResult.fields);
        const fieldTranslation = _helpers__WEBPACK_IMPORTED_MODULE_4__.FieldsSettingsHelpers.getTranslationState(attributeValues, fixed.DisableTranslation, entityReader);
        const wrappers = _helpers__WEBPACK_IMPORTED_MODULE_4__.InputFieldHelpers.getWrappers(fixed, constantFieldPart.calculatedInputType);
        fieldsProps[attribute.Name] = {
          calculatedInputType: constantFieldPart.calculatedInputType,
          constants: constantFieldPart.constants,
          settings: fixed,
          translationState: fieldTranslation,
          value: valueBefore,
          wrappers,
          formulaValidation: formulaResult.validation,
          currentLanguage: constantFieldPart.currentLanguage
        };
      }
      this.latestFieldProps = fieldsProps;
      const changesWereApplied = this.formItemFormulaService.applyValueChangesFromFormulas(entityGuid, contentType, formValues, fieldsProps, possibleValueUpdates, possibleFieldsUpdates, slotIsEmpty, entityReader);
      // if changes were applied do not trigger field property updates
      if (changesWereApplied) return null;
      // if no changes were applied then we trigger field property updates and reset the loop counter
      this.formItemFormulaService.valueFormulaCounter = 0;
      return fieldsProps;
    }), logUpdateFieldProps.map(), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.filter)(fieldsProps => !!fieldsProps), logUpdateFieldProps.filter()).subscribe(fieldsProps => {
      (0,_shared_helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_1__.consoleLogEditForm)('fieldsProps', JSON.parse(JSON.stringify(fieldsProps)));
      this.fieldsProps$.next(fieldsProps);
    }));
  }
  //TODO: @2dm -> Here we call the formula engine to process the picker items
  //TODO: @SDV -> Possible issue here as all pickers use same instance of this service, when we have multiple pickers we could get data crosscontamination
  //           -> Consider multiple streams (one for each picker)
  processPickerItems$(fieldName, availableItems$) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.combineLatest)([availableItems$, this.contentType$, this.itemAttributes$, this.entityReader$, this.constantFieldParts$, this.itemHeader$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(([availableItems, contentType, itemAttributes, entityReader, constantFieldParts, itemHeader]) => {
      const attribute = contentType.Attributes.find(a => a.Name === fieldName);
      const formValues = {};
      for (const [fieldName, fieldValues] of Object.entries(itemAttributes)) {
        formValues[fieldName] = entityReader.getBestValue(fieldValues, null);
      }
      const constantFieldPart = constantFieldParts.find(f => f.constants.fieldName === attribute.Name);
      let latestSettings;
      if (constantFieldPart.currentLanguage == this.latestFieldProps[attribute.Name]?.currentLanguage) {
        latestSettings = this.latestFieldProps[attribute.Name]?.settings ?? {
          ...constantFieldPart.settingsInitial
        };
      } else {
        latestSettings = {
          ...constantFieldPart.settingsInitial
        };
      }
      return this.formulaEngine.runAllListItemsFormulas(this.entityGuid, this.entityId, attribute, formValues, constantFieldPart.inputType, constantFieldPart.settingsInitial, latestSettings, itemHeader, availableItems);
    }));
  }
  /**
   * Used to get content type settings.
   * @returns Content type settings
   */
  getContentTypeSettings() {
    return this.contentTypeSettings$.value;
  }
  /**
   * Used to get content type settings stream.
   * @returns Stream of content type settings
   */
  getContentTypeSettings$() {
    return this.contentTypeSettings$.asObservable();
  }
  /**
   * Used to get field properties for all fields.
   * @returns Object that has attribute name as a key and all of its field properties as a value
   */
  getFieldsProps() {
    return this.fieldsProps$.value;
  }
  /**
   * Used to get field properties stream for all fields.
   * @returns Stream of objects that has attribute name as a key and all of its field properties as a value
   */
  getFieldsProps$() {
    return this.fieldsProps$.asObservable();
  }
  /**
   * Used for getting field settings for a specific field.
   * @param fieldName
   * @returns Field settings
   */
  getFieldSettings(fieldName) {
    return this.fieldsProps$.value[fieldName].settings;
  }
  /**
   * Used for getting field settings stream for a specific field.
   * @param fieldName
   * @returns Field settings stream
   */
  getFieldSettings$(fieldName) {
    return this.fieldsProps$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(fieldsSettings => fieldsSettings[fieldName].settings), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)(_shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_11__.RxHelpers.objectsEqual));
  }
  // todo: probably switch all uses above to this one
  getFieldSettingsReplayed$(fieldName) {
    return this.fieldsProps$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(fieldsSettings => fieldsSettings[fieldName].settings), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)(_shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_11__.RxHelpers.objectsEqual), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.shareReplay)(1));
  }
  getFieldSettingsSignal(fieldName) {
    const cached = this.signalsCache[fieldName];
    if (cached) return cached;
    var obs = this.getFieldSettingsReplayed$(fieldName);
    return this.signalsCache[fieldName] = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_21__.toSignal)(obs); // note: no initial value, it should always be up-to-date
  }
  /**
   * Used for translation state stream for a specific field.
   * @param fieldName
   * @returns Translation state stream
   */
  getTranslationState$(fieldName) {
    return this.fieldsProps$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(fieldsSettings => fieldsSettings[fieldName].translationState), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)(_shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_11__.RxHelpers.objectsEqual));
  }
  /**
   * Triggers a reevaluation of all formulas.
   */
  retriggerFormulas() {
    this.forceRefreshSettings$.next();
  }
  updateSetting(fieldName, update) {
    const props = this.latestFieldProps[fieldName];
    const newSettings = {
      ...props.settings,
      ...update
    };
    const newProps = {
      ...this.latestFieldProps,
      [fieldName]: {
        ...props,
        settings: newSettings
      }
    };
    this.fieldsProps$.next(newProps);
    // Experimental: had trouble with the _isDialog / Collapsed properties not being persisted
    // since the latestFieldProps never had the value originally
    this.latestFieldProps = newProps;
  }
  static #_ = this.ɵfac = function FieldsSettingsService_Factory(t) {
    return new (t || FieldsSettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_store_ngrx_data__WEBPACK_IMPORTED_MODULE_5__.ContentTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_store_ngrx_data__WEBPACK_IMPORTED_MODULE_5__.ContentTypeItemService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_store_ngrx_data__WEBPACK_IMPORTED_MODULE_5__.LanguageInstanceService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](___WEBPACK_IMPORTED_MODULE_0__.FormConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_store_ngrx_data__WEBPACK_IMPORTED_MODULE_5__.ItemService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_store_ngrx_data__WEBPACK_IMPORTED_MODULE_5__.InputTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_store_ngrx_data__WEBPACK_IMPORTED_MODULE_5__.GlobalConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_forms_state_service__WEBPACK_IMPORTED_MODULE_6__.FormsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_formulas_formula_engine__WEBPACK_IMPORTED_MODULE_3__.FormulaEngine), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_formulas_form_item_formula_service__WEBPACK_IMPORTED_MODULE_7__.FormItemFormulaService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_formulas_formula_promise_handler__WEBPACK_IMPORTED_MODULE_8__.FormulaPromiseHandler));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjectable"]({
    token: FieldsSettingsService,
    factory: FieldsSettingsService.ɵfac
  });
}

/***/ }),

/***/ 83754:
/*!**********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/services/fields-translate.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldsTranslateService: () => (/* binding */ FieldsTranslateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 22453);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/helpers/console-log-angular.helper */ 74230);
/* harmony import */ var _form_shared_field_logic_field_logic_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../form/shared/field-logic/field-logic-manager */ 96600);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ 56606);
/* harmony import */ var _store_ngrx_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/ngrx-data */ 27521);
/* harmony import */ var _models_form_languages_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/form-languages.model */ 53064);
/* harmony import */ var _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/logging/eav-logger */ 6812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 46443);














const logThis = false;
const nameOfThis = 'FieldsTranslateService';
const apiKeyInDemoModeAlert = `This translation is a demo. Please provide your own Google Translate API key in the EAV configuration.`;
class FieldsTranslateService {
  constructor(http, itemService, formConfig, contentTypeService, fieldsSettingsService) {
    this.http = http;
    this.itemService = itemService;
    this.formConfig = formConfig;
    this.contentTypeService = contentTypeService;
    this.fieldsSettingsService = fieldsSettingsService;
    this.log = new _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_7__.EavLogger(nameOfThis, logThis);
  }
  init(entityGuid) {
    const l = this.log.fn('init');
    this.entityGuid = entityGuid;
    const item = this.itemService.getItem(entityGuid);
    this.contentTypeId = _helpers__WEBPACK_IMPORTED_MODULE_4__.InputFieldHelpers.getContentTypeId(item);
    l.end({
      entityGuid,
      contentTypeId: this.contentTypeId
    });
  }
  translate(fieldName, isTransaction = false, transactionItem) {
    const l = this.log.fn('translate', {
      fieldName,
      isTransaction,
      transactionItem
    });
    if (this.isTranslationDisabled(fieldName)) return l.rNull('Translation is disabled for this field.');
    const language = this.formConfig.language();
    transactionItem = this.itemService.removeItemAttributeDimension(this.entityGuid, fieldName, language.current, isTransaction, transactionItem);
    const attributes = this.itemService.getItemAttributes(this.entityGuid);
    const values = attributes[fieldName];
    const doesFieldHaveExistingDimension = _helpers__WEBPACK_IMPORTED_MODULE_4__.LocalizationHelpers.findOfExactDimension(values.Values, language.current) !== undefined;
    const defaultValue = _helpers__WEBPACK_IMPORTED_MODULE_4__.LocalizationHelpers.getValueTranslation(values, _models_form_languages_model__WEBPACK_IMPORTED_MODULE_6__.FormLanguage.bothPrimary(language));
    if (!doesFieldHaveExistingDimension) return l.r(this.addItemAttributeValueHelper(fieldName, defaultValue.Value, language.current, false));else return l.rNull();
  }
  dontTranslate(fieldName, isTransaction = false, transactionItem) {
    const l = this.log.fn('dontTranslate', {
      fieldName,
      isTransaction,
      transactionItem
    });
    if (this.isTranslationDisabled(fieldName)) return l.rNull('Translation is disabled for this field.');
    const language = this.formConfig.language();
    transactionItem = this.itemService.removeItemAttributeDimension(this.entityGuid, fieldName, language.current, isTransaction, transactionItem);
    return transactionItem;
  }
  /**
   * Auto-translate the field value to the current language.
   * @param areAllChecksKnown If true, the function will not check if the field value is empty, or if the field auto-translate was disabled by default.
   */
  autoTranslate(fieldNames, autoTranslateLanguageKey, isMany = false, areAllChecksKnown = false) {
    // Get API key and optionally show warning
    const apiKeyInfo = this.formConfig.settings.Values[_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__.EditApiKeyPaths.GoogleTranslate];
    if (apiKeyInfo.IsDemo) alert(apiKeyInDemoModeAlert);
    const language = this.formConfig.language();
    const attributes = this.itemService.getItemAttributes(this.entityGuid);
    // Filter out fields that have translation disabled
    fieldNames = fieldNames.filter(field => !this.isTranslationDisabled(field));
    const textsForTranslation = fieldNames.map(field => _helpers__WEBPACK_IMPORTED_MODULE_4__.LocalizationHelpers.findOfExactDimension(attributes[field].Values, autoTranslateLanguageKey).Value);
    const doFieldsHaveExistingDimension = fieldNames.map(field => _helpers__WEBPACK_IMPORTED_MODULE_4__.LocalizationHelpers.findOfExactDimension(attributes[field].Values, language.current) !== undefined);
    if (!areAllChecksKnown) fieldNames.forEach((field, i) => {
      const currentText = textsForTranslation[i];
      const isAutoTranslationEnabledButWasDisabledByDefault = this.isAutoTranslationEnabledButWasDisabledByDefault(field);
      if (currentText == null || currentText === '' || isAutoTranslationEnabledButWasDisabledByDefault) this.translate(field);
    });
    const translationData = {
      q: textsForTranslation,
      target: language.current,
      source: autoTranslateLanguageKey
    };
    this.http.post(`https://translation.googleapis.com/language/translate/v2?key=${apiKeyInfo.ApiKey}`, translationData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(response => {
      response.data.translations.forEach((translation, i) => {
        const elem = document.createElement('textarea');
        elem.innerHTML = translation.translatedText;
        if (!isMany && doFieldsHaveExistingDimension[i]) {
          this.itemService.updateItemAttributeValue(this.entityGuid, fieldNames[i], elem.value, language, false);
        } else if (!doFieldsHaveExistingDimension[i]) {
          this.addItemAttributeValueHelper(fieldNames[i], elem.value, language.current, false);
        }
      });
    })).subscribe();
  }
  copyFrom(fieldName, copyFromLanguageKey) {
    if (this.isTranslationDisabled(fieldName)) return;
    const attributes = this.itemService.getItemAttributes(this.entityGuid);
    const values = attributes[fieldName];
    const language = this.formConfig.language();
    const valueTranslation = _helpers__WEBPACK_IMPORTED_MODULE_4__.LocalizationHelpers.getValueTranslation(values, _models_form_languages_model__WEBPACK_IMPORTED_MODULE_6__.FormLanguage.diffCurrent(language, copyFromLanguageKey));
    if (valueTranslation) {
      const valueAlreadyExists = values ? _helpers__WEBPACK_IMPORTED_MODULE_4__.LocalizationHelpers.isEditableOrReadonlyTranslationExist(values, language) : false;
      if (valueAlreadyExists)
        // Copy attribute value where language is languageKey to value where language is current language
        this.itemService.updateItemAttributeValue(this.entityGuid, fieldName, valueTranslation.Value, language, false);else
        // Copy attribute value where language is languageKey to new attribute with current language
        this.addItemAttributeValueHelper(fieldName, valueTranslation.Value, language.current, false);
    } else (0,_shared_helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_2__.consoleLogEditForm)(`${language.current}: Cant copy value from ${copyFromLanguageKey} because that value does not exist.`);
  }
  linkReadOnly(fieldName, linkWithLanguageKey) {
    this.linkToOtherField(fieldName, linkWithLanguageKey, true);
  }
  linkReadWrite(fieldName, linkWithLanguageKey) {
    return this.linkToOtherField(fieldName, linkWithLanguageKey, false);
  }
  linkToOtherField(fieldName, linkWithLanguageKey, isReadOnly) {
    if (this.isTranslationDisabled(fieldName)) return;
    const language = this.formConfig.language();
    const transactionItem = this.itemService.removeItemAttributeDimension(this.entityGuid, fieldName, language.current, true);
    this.itemService.addItemAttributeDimension(this.entityGuid, fieldName, language.current, linkWithLanguageKey, language.primary, isReadOnly, transactionItem);
  }
  translateMany() {
    const translatable = this.findTranslatableFields();
    let transactionItem;
    for (const fieldName of translatable) {
      // will finish the transaction when last field is being translated
      const isTransaction = fieldName !== translatable[translatable.length - 1];
      transactionItem = this.translate(fieldName, isTransaction, transactionItem);
    }
  }
  dontTranslateMany() {
    const translatable = this.findTranslatableFields();
    let transactionItem;
    for (const fieldName of translatable) {
      // will finish the transaction when last field is being translated
      const isTransaction = fieldName !== translatable[translatable.length - 1];
      transactionItem = this.dontTranslate(fieldName, isTransaction, transactionItem);
    }
  }
  /**
   * Auto-translates all field that have auto-translate enabled and are not empty, empty ones are unlocked.
   */
  autoTranslateMany(autoTranslateLanguageKey) {
    const attributes = this.itemService.getItemAttributes(this.entityGuid);
    // fields that have auto-translate enabled and are not empty
    const canTranslate = [];
    // fields that have auto-translate enabled but didn't have it by default or are empty
    const cantTranslateAndEmpty = this.findAutoTranslatableFieldsThatWereNotAutoTranslatableByDefault();
    // fields that have auto-translate enabled and can be empty
    const canTranslateWithEmpty = this.findAutoTranslatableFields().filter(x => !cantTranslateAndEmpty.includes(x));
    // separate fields that have auto-translate enabled and are empty
    canTranslateWithEmpty.forEach(fieldName => {
      const value = _helpers__WEBPACK_IMPORTED_MODULE_4__.LocalizationHelpers.findOfExactDimension(attributes[fieldName].Values, autoTranslateLanguageKey)?.Value;
      if (value !== '' && value != null && value !== undefined) canTranslate.push(fieldName);
      // this is commented out because future edits on fields should automatically be passed to the other languages
      // else
      //   cantTranslateAndEmpty.push(fieldName);
    });
    // translate fields that have auto-translate enabled and are not empty
    this.autoTranslate(canTranslate, autoTranslateLanguageKey, true, true);
    let transactionItem;
    // unlock fields that have auto-translate enabled but didn't have it by default or are empty
    cantTranslateAndEmpty.forEach(fieldName => {
      this.translate(fieldName, false, transactionItem);
    });
  }
  /**
   * Returns all fields that can be translated.
   */
  findTranslatableFields() {
    const attributes = this.itemService.getItemAttributes(this.entityGuid);
    return Object.keys(attributes).filter(fieldName => !this.isTranslationDisabled(fieldName));
  }
  /**
   * Returns all fields that can be translated and autoTranslated.
   */
  findAutoTranslatableFields() {
    const attributes = this.itemService.getItemAttributes(this.entityGuid);
    return Object.keys(attributes).filter(fieldName => !this.isTranslationDisabled(fieldName) && !this.isAutoTranslationDisabled(fieldName));
  }
  /**
   * Returns all fields that can be translated and autoTranslated, but were not autoTranslatable by default.
   */
  findAutoTranslatableFieldsThatWereNotAutoTranslatableByDefault() {
    const attributes = this.itemService.getItemAttributes(this.entityGuid);
    return Object.keys(attributes).filter(fieldName => !this.isTranslationDisabled(fieldName) && this.isAutoTranslationEnabledButWasDisabledByDefault(fieldName));
  }
  /**
   * Returns true if translation is disabled for the field.
   */
  isTranslationDisabled(fieldName) {
    const settings = this.fieldsSettingsService.getFieldSettings(fieldName);
    return settings.DisableTranslation;
  }
  /**
   * Returns true if auto translation is disabled for the field.
   */
  isAutoTranslationDisabled(fieldName) {
    const settings = this.fieldsSettingsService.getFieldSettings(fieldName);
    return settings.DisableAutoTranslation;
  }
  /**
   * Returns true if auto translation is enabled for the field, but was disabled by default.
   */
  isAutoTranslationEnabledButWasDisabledByDefault(fieldName) {
    const fieldsProps = this.fieldsSettingsService.getFieldsProps();
    const logic = _form_shared_field_logic_field_logic_manager__WEBPACK_IMPORTED_MODULE_3__.FieldLogicManager.singleton().get(fieldsProps[fieldName].calculatedInputType.inputType);
    return !fieldsProps[fieldName].settings.DisableAutoTranslation && !logic.canAutoTranslate;
  }
  addItemAttributeValueHelper(fieldName, value, currentLanguage, isReadOnly) {
    const l = this.log.fn('addItemAttributeValueHelper', {
      fieldName,
      value,
      currentLanguage,
      isReadOnly
    });
    const contentType = this.contentTypeService.getContentType(this.contentTypeId);
    const ctAttribute = contentType.Attributes.find(a => a.Name === fieldName);
    const result = this.itemService.addItemAttributeValue(this.entityGuid, fieldName, value, currentLanguage, isReadOnly, ctAttribute.Type);
    return l.r(result);
  }
  static #_ = this.ɵfac = function FieldsTranslateService_Factory(t) {
    return new (t || FieldsTranslateService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_store_ngrx_data__WEBPACK_IMPORTED_MODULE_5__.ItemService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](___WEBPACK_IMPORTED_MODULE_0__.FormConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_store_ngrx_data__WEBPACK_IMPORTED_MODULE_5__.ContentTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](___WEBPACK_IMPORTED_MODULE_0__.FieldsSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
    token: FieldsTranslateService,
    factory: FieldsTranslateService.ɵfac
  });
}

/***/ }),

/***/ 42811:
/*!*****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/services/form-config.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormConfigService: () => (/* binding */ FormConfigService),
/* harmony export */   webApiEditRoot: () => (/* binding */ webApiEditRoot)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/session.constants */ 38172);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/context */ 68873);
/* harmony import */ var _store_ngrx_data_language_instance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/ngrx-data/language-instance.service */ 46114);
/* harmony import */ var _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/logging/eav-logger */ 6812);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 49074);







const logThis = false;
const nameOfThis = 'FormConfigService';
const webApiEditRoot = 'cms/edit/';
class FormConfigService {
  /** no constructor */
  constructor() {
    this.log = new _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_3__.EavLogger(nameOfThis, logThis);
    // WIP, null at first
    this.configSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(null);
    /** Used to fetch form data and fill up eavConfig. Do not use anywhere else */
    this.context = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_shared_services_context__WEBPACK_IMPORTED_MODULE_1__.Context);
    this.languageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_store_ngrx_data_language_instance_service__WEBPACK_IMPORTED_MODULE_2__.LanguageInstanceService);
    this.injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector);
  }
  /** Create EavConfiguration from sessionStorage */
  initFormConfig(dialogContext, formId, isParentDialog, itemGuids, createMode, isCopy, enableHistory, settings) {
    this.settings = settings;
    this.languages = {
      initial: dialogContext.Language.Current,
      primary: dialogContext.Language.Primary,
      list: dialogContext.Language.List
    };
    this.config = {
      zoneId: this.context.zoneId.toString(),
      appId: this.context.appId.toString(),
      appRoot: dialogContext.App.Url,
      appSharedRoot: dialogContext.App.SharedUrl,
      moduleId: this.context.moduleId?.toString(),
      partOfPage: sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.keyPartOfPage) ?? _shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.partOfPageDefault,
      portalRoot: dialogContext.Site.Url,
      tabId: this.context.tabId?.toString(),
      systemRoot: window.location.pathname.split('/dist/')[0] + '/',
      versioningOptions: this.getVersioningOptions(sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.keyPartOfPage) === 'true', sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.keyPublishing)),
      formId,
      isParentDialog,
      itemGuids,
      createMode,
      isCopy,
      enableHistory,
      enableFormulaSave: dialogContext.Enable.FormulaSave ?? false,
      overrideEditRestrictions: dialogContext.Enable.OverrideEditRestrictions ?? false,
      dialogContext,
      settings
    };
    this.configSignal.set(this.config);
    this.language = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__.toSignal)(this.language$, {
      injector: this.injector
    });
  }
  getVersioningOptions(partOfPage, publishing) {
    const allowAll = {
      show: true,
      hide: true,
      branch: true
    };
    if (!partOfPage) return allowAll;
    const publish = publishing || '';
    switch (publish) {
      case '':
      case 'DraftOptional':
        return allowAll;
      case 'DraftRequired':
        // Note: the key 'show' should not be added, as the code later picks the first property to set the default
        // Branch should also be first, as it's the preferred option
        return {
          branch: true,
          hide: true
        };
      case 'DraftForbidden':
        return {
          show: true
        };
      default:
        {
          console.error(`Invalid versioning requirements: ${publish}`);
          return {};
        }
    }
  }
  /**
   * Get the language observable for the form - it will keep track of the current language as it changes.
   */
  get language$() {
    return this._language$ ??= this.languageService.getLanguage$(this.config.formId);
  }
  static #_ = this.ɵfac = function FormConfigService_Factory(t) {
    return new (t || FormConfigService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: FormConfigService,
    factory: FormConfigService.ɵfac
  });
}

/***/ }),

/***/ 7253:
/*!***************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/services/form-data.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormDataService: () => (/* binding */ FormDataService),
/* harmony export */   webApiEditRoot: () => (/* binding */ webApiEditRoot)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/context */ 68873);
/* harmony import */ var _store_ngrx_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/ngrx-data */ 27521);
/* harmony import */ var _shared_services_service_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/service-base */ 4979);
/* harmony import */ var _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/logging/eav-logger */ 6812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);












const logThis = false;
const nameOfThis = 'FormDataService';
const webApiEditRoot = 'cms/edit/';
class FormDataService extends _shared_services_service_base__WEBPACK_IMPORTED_MODULE_2__.ServiceBase {
  constructor(http, dnnContext, /** Used to fetch form data and fill up eavConfig. Do not use anywhere else */
  context, globalConfigService) {
    super(new _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_3__.EavLogger(nameOfThis, logThis));
    this.http = http;
    this.dnnContext = dnnContext;
    this.context = context;
    this.globalConfigService = globalConfigService;
  }
  fetchFormData(items) {
    this.log.a('fetchFormData', {
      items,
      context: this.context
    });
    return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiEditRoot + 'load'), items, {
      params: {
        appId: this.context.appId
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(formData => {
      formData.Context.Language.List = formData.Context.Language.List.filter(language => language.IsEnabled);
      return formData;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(formData => {
      this.globalConfigService.allowDebug(formData.Context.Enable.DebugMode);
    }));
  }
  saveFormData(result, partOfPage) {
    return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiEditRoot + 'save'), result, {
      params: {
        appId: this.context.appId,
        partOfPage
      }
    });
  }
  static #_ = this.ɵfac = function FormDataService_Factory(t) {
    return new (t || FormDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_8__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_0__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_store_ngrx_data__WEBPACK_IMPORTED_MODULE_1__.GlobalConfigService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: FormDataService,
    factory: FormDataService.ɵfac
  });
}

/***/ }),

/***/ 46275:
/*!*****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/services/forms-state.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormsStateService: () => (/* binding */ FormsStateService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 22453);
/* harmony import */ var _store_ngrx_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/ngrx-data */ 27521);
/* harmony import */ var _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/rxJs/rx.helpers */ 93826);








class FormsStateService {
  constructor(formConfig, itemService, languageService) {
    this.formConfig = formConfig;
    this.itemService = itemService;
    this.languageService = languageService;
    // new with Signal
    this.readOnly = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)({
      isReadOnly: true,
      reason: undefined
    });
    this.formsValidTemp = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)(false);
    this.saveButtonDisabled = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.computed)(() => this.readOnly().isReadOnly || !this.formsValidTemp());
  }
  ngOnDestroy() {
    this.saveForm$.complete();
    this.readOnly$?.complete();
    this.formsValid$?.complete();
    this.formsDirty$?.complete();
    this.subscription?.unsubscribe();
  }
  init() {
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    this.saveForm$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    const initialReadOnly = {
      isReadOnly: true,
      reason: undefined
    };
    this.readOnly$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(initialReadOnly);
    this.formsValid$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(false);
    this.formsDirty$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(false);
    this.saveButtonDisabled$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this.readOnly$, this.formsValid$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(([readOnly, formsValid]) => readOnly.isReadOnly || !formsValid), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)());
    this.formsValid = {};
    this.formsDirty = {};
    for (const entityGuid of this.formConfig.config.itemGuids) {
      this.formsValid[entityGuid] = false;
      this.formsDirty[entityGuid] = false;
    }
    this.subscription.add((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)(this.formConfig.config.itemGuids.map(entityGuid => this.itemService.getItemHeader$(entityGuid))).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(itemHeaders => itemHeaders.some(itemHeader => itemHeader?.EditInfo?.ReadOnly ?? false))), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this.formConfig.language$, this.languageService.getLanguages$()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(([language, languages]) => languages.find(l => l.NameId === language.current)?.IsAllowed ?? true))]).subscribe(([itemsReadOnly, languageAllowed]) => {
      const readOnly = {
        isReadOnly: itemsReadOnly || !languageAllowed,
        reason: itemsReadOnly ? 'Form' : !languageAllowed ? 'Language' : undefined
      };
      if (!_shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_2__.RxHelpers.objectsEqual(readOnly, this.readOnly$.value)) {
        this.readOnly$.next(readOnly);
        this.readOnly.set(readOnly);
        // this.readOnly.update(v => readOnly);
      }
    }));
  }
  getFormValid(entityGuid) {
    return this.formsValid[entityGuid];
  }
  setFormValid(entityGuid, isValid) {
    this.formsValid[entityGuid] = isValid;
    const allValid = !Object.values(this.formsValid).some(valid => valid === false);
    if (allValid !== this.formsValidTemp()) {
      // if (allValid !== this.formsValid$.value) {
      this.formsValidTemp.set(allValid);
      this.formsValid$.next(allValid);
    }
  }
  setFormDirty(entityGuid, isDirty) {
    this.formsDirty[entityGuid] = isDirty;
    const anyDirty = Object.values(this.formsDirty).some(dirty => dirty === true);
    if (anyDirty !== this.formsDirty$.value) {
      this.formsDirty$.next(anyDirty);
    }
  }
  static #_ = this.ɵfac = function FormsStateService_Factory(t) {
    return new (t || FormsStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](___WEBPACK_IMPORTED_MODULE_0__.FormConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_store_ngrx_data__WEBPACK_IMPORTED_MODULE_1__.ItemService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_store_ngrx_data__WEBPACK_IMPORTED_MODULE_1__.LanguageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: FormsStateService,
    factory: FormsStateService.ɵfac
  });
}

/***/ }),

/***/ 22453:
/*!***************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/services/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdamService: () => (/* reexport safe */ _adam_service__WEBPACK_IMPORTED_MODULE_0__.AdamService),
/* harmony export */   EditInitializerService: () => (/* reexport safe */ _edit_initializer_service__WEBPACK_IMPORTED_MODULE_2__.EditInitializerService),
/* harmony export */   EditRoutingService: () => (/* reexport safe */ _edit_routing_service__WEBPACK_IMPORTED_MODULE_3__.EditRoutingService),
/* harmony export */   EntityService: () => (/* reexport safe */ _entity_service__WEBPACK_IMPORTED_MODULE_4__.EntityService),
/* harmony export */   FieldsSettingsService: () => (/* reexport safe */ _fields_settings_service__WEBPACK_IMPORTED_MODULE_5__.FieldsSettingsService),
/* harmony export */   FieldsTranslateService: () => (/* reexport safe */ _fields_translate_service__WEBPACK_IMPORTED_MODULE_6__.FieldsTranslateService),
/* harmony export */   FileTypeConstants: () => (/* reexport safe */ _scripts_loader_service__WEBPACK_IMPORTED_MODULE_11__.FileTypeConstants),
/* harmony export */   FormConfigService: () => (/* reexport safe */ _form_config_service__WEBPACK_IMPORTED_MODULE_1__.FormConfigService),
/* harmony export */   FormsStateService: () => (/* reexport safe */ _forms_state_service__WEBPACK_IMPORTED_MODULE_7__.FormsStateService),
/* harmony export */   LoadIconsService: () => (/* reexport safe */ _load_icons_service__WEBPACK_IMPORTED_MODULE_9__.LoadIconsService),
/* harmony export */   LoggingService: () => (/* reexport safe */ _logging_service__WEBPACK_IMPORTED_MODULE_8__.LoggingService),
/* harmony export */   QueryService: () => (/* reexport safe */ _query_service__WEBPACK_IMPORTED_MODULE_10__.QueryService),
/* harmony export */   ScriptsLoaderService: () => (/* reexport safe */ _scripts_loader_service__WEBPACK_IMPORTED_MODULE_11__.ScriptsLoaderService),
/* harmony export */   webApiEditRoot: () => (/* reexport safe */ _form_config_service__WEBPACK_IMPORTED_MODULE_1__.webApiEditRoot),
/* harmony export */   webApiEntityList: () => (/* reexport safe */ _entity_service__WEBPACK_IMPORTED_MODULE_4__.webApiEntityList),
/* harmony export */   webApiEntityRoot: () => (/* reexport safe */ _entity_service__WEBPACK_IMPORTED_MODULE_4__.webApiEntityRoot)
/* harmony export */ });
/* harmony import */ var _adam_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adam.service */ 98827);
/* harmony import */ var _form_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-config.service */ 42811);
/* harmony import */ var _edit_initializer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-initializer.service */ 16925);
/* harmony import */ var _edit_routing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-routing.service */ 17467);
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entity.service */ 85235);
/* harmony import */ var _fields_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fields-settings.service */ 99585);
/* harmony import */ var _fields_translate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fields-translate.service */ 83754);
/* harmony import */ var _forms_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms-state.service */ 46275);
/* harmony import */ var _logging_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logging.service */ 87149);
/* harmony import */ var _load_icons_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./load-icons.service */ 83515);
/* harmony import */ var _query_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./query.service */ 8500);
/* harmony import */ var _scripts_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scripts-loader.service */ 39908);













/***/ }),

/***/ 84860:
/*!*******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/services/item-field-visibility.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemFieldVisibility: () => (/* binding */ ItemFieldVisibility)
/* harmony export */ });
/* harmony import */ var _shared_helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/helpers/console-log-angular.helper */ 74230);

class ItemFieldVisibility {
  constructor(identifier) {
    this.defaultIsShow = true;
    this.fields = null;
    var fields = identifier.ClientData?.fields;
    if (fields == null || fields == '') return;
    // If the first character is a minus, then default is show all and just hide mentions
    this.defaultIsShow = fields[0] == '-';
    if (this.defaultIsShow) fields = fields.substring(1);
    const ruleIsShow = !this.defaultIsShow;
    this.fields = fields.toLowerCase().split(',').reduce((prev, f) => {
      prev[f] = ruleIsShow;
      return prev;
    }, {});
    (0,_shared_helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_0__.consoleLogEditForm)('ItemFieldVisibility', this.fields, 'default', this.defaultIsShow);
  }
  hasRules() {
    return this.fields != null;
  }
  isVisibleDisabled(fieldName) {
    // check if we have no rules at all - in which case never override
    if (this.fields == null) return false;
    const override = this.fields[fieldName.toLowerCase()];
    return !(override ?? this.defaultIsShow);
  }
  static mergedVisible(settings) {
    return settings.Visible && !settings.VisibleDisabled;
  }
}

/***/ }),

/***/ 83515:
/*!****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/services/load-icons.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadIconsService: () => (/* binding */ LoadIconsService)
/* harmony export */ });
/* harmony import */ var _raw_loader_assets_icons_2sxc_Material_Icon_Adam_48_filled_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!../../assets/icons/2sxc/Material-Icon-Adam-48-filled.svg */ 89554);
/* harmony import */ var _raw_loader_assets_icons_2sxc_Material_Icon_Adam_48_outlined_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!../../assets/icons/2sxc/Material-Icon-Adam-48-outlined.svg */ 52976);
/* harmony import */ var _raw_loader_assets_icons_font_awesome_draft_branch_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !raw-loader!../../assets/icons/font-awesome/draft-branch.svg */ 43126);
/* harmony import */ var _raw_loader_assets_icons_font_awesome_file_archive_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !raw-loader!../../assets/icons/font-awesome/file-archive.svg */ 49579);
/* harmony import */ var _raw_loader_assets_icons_font_awesome_file_audio_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !raw-loader!../../assets/icons/font-awesome/file-audio.svg */ 73095);
/* harmony import */ var _raw_loader_assets_icons_font_awesome_file_code_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !raw-loader!../../assets/icons/font-awesome/file-code.svg */ 21104);
/* harmony import */ var _raw_loader_assets_icons_font_awesome_file_excel_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !raw-loader!../../assets/icons/font-awesome/file-excel.svg */ 22116);
/* harmony import */ var _raw_loader_assets_icons_font_awesome_file_image_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! !raw-loader!../../assets/icons/font-awesome/file-image.svg */ 81754);
/* harmony import */ var _raw_loader_assets_icons_font_awesome_file_pdf_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! !raw-loader!../../assets/icons/font-awesome/file-pdf.svg */ 64187);
/* harmony import */ var _raw_loader_assets_icons_font_awesome_file_powerpoint_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! !raw-loader!../../assets/icons/font-awesome/file-powerpoint.svg */ 2700);
/* harmony import */ var _raw_loader_assets_icons_font_awesome_file_text_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! !raw-loader!../../assets/icons/font-awesome/file-text.svg */ 1046);
/* harmony import */ var _raw_loader_assets_icons_font_awesome_file_video_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! !raw-loader!../../assets/icons/font-awesome/file-video.svg */ 55560);
/* harmony import */ var _raw_loader_assets_icons_font_awesome_file_word_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! !raw-loader!../../assets/icons/font-awesome/file-word.svg */ 39715);
/* harmony import */ var _raw_loader_assets_icons_font_awesome_file_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! !raw-loader!../../assets/icons/font-awesome/file.svg */ 70218);
/* harmony import */ var _raw_loader_assets_icons_font_awesome_folder_plus_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! !raw-loader!../../assets/icons/font-awesome/folder-plus.svg */ 35365);
/* harmony import */ var _raw_loader_assets_icons_font_awesome_folder_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! !raw-loader!../../assets/icons/font-awesome/folder.svg */ 38076);
/* harmony import */ var _raw_loader_assets_icons_font_awesome_sitemap_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! !raw-loader!../../assets/icons/font-awesome/sitemap.svg */ 43793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 80436);






















class LoadIconsService {
  constructor(matIconRegistry, domSanitizer) {
    this.matIconRegistry = matIconRegistry;
    this.domSanitizer = domSanitizer;
    this.icons = {
      'apple-filled': _raw_loader_assets_icons_2sxc_Material_Icon_Adam_48_filled_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
      'apple-outlined': _raw_loader_assets_icons_2sxc_Material_Icon_Adam_48_outlined_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
      'draft-branch': _raw_loader_assets_icons_font_awesome_draft_branch_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
      file: _raw_loader_assets_icons_font_awesome_file_svg__WEBPACK_IMPORTED_MODULE_13__["default"],
      'file-archive': _raw_loader_assets_icons_font_awesome_file_archive_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
      'file-audio': _raw_loader_assets_icons_font_awesome_file_audio_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
      'file-code': _raw_loader_assets_icons_font_awesome_file_code_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
      'file-excel': _raw_loader_assets_icons_font_awesome_file_excel_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
      'file-image': _raw_loader_assets_icons_font_awesome_file_image_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
      'file-pdf': _raw_loader_assets_icons_font_awesome_file_pdf_svg__WEBPACK_IMPORTED_MODULE_8__["default"],
      'file-powerpoint': _raw_loader_assets_icons_font_awesome_file_powerpoint_svg__WEBPACK_IMPORTED_MODULE_9__["default"],
      'file-text': _raw_loader_assets_icons_font_awesome_file_text_svg__WEBPACK_IMPORTED_MODULE_10__["default"],
      'file-video': _raw_loader_assets_icons_font_awesome_file_video_svg__WEBPACK_IMPORTED_MODULE_11__["default"],
      'file-word': _raw_loader_assets_icons_font_awesome_file_word_svg__WEBPACK_IMPORTED_MODULE_12__["default"],
      folder: _raw_loader_assets_icons_font_awesome_folder_svg__WEBPACK_IMPORTED_MODULE_15__["default"],
      'folder-plus': _raw_loader_assets_icons_font_awesome_folder_plus_svg__WEBPACK_IMPORTED_MODULE_14__["default"],
      sitemap: _raw_loader_assets_icons_font_awesome_sitemap_svg__WEBPACK_IMPORTED_MODULE_16__["default"]
    };
  }
  load() {
    Object.entries(this.icons).forEach(([name, svg]) => {
      this.matIconRegistry.addSvgIconLiteral(name, this.domSanitizer.bypassSecurityTrustHtml(svg));
    });
  }
  static #_ = this.ɵfac = function LoadIconsService_Factory(t) {
    return new (t || LoadIconsService)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.DomSanitizer));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjectable"]({
    token: LoadIconsService,
    factory: LoadIconsService.ɵfac
  });
}

/***/ }),

/***/ 87149:
/*!*************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/services/logging.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoggingService: () => (/* binding */ LoggingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);




class LoggingService {
  constructor(snackBar) {
    this.snackBar = snackBar;
    this.logs$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.logLimit = 50;
    this.lastSnackBarTime = 0;
    this.snackBarDebounce = 10000;
  }
  ngOnDestroy() {
    this.logs$.complete();
  }
  addLog(severity, label, error) {
    const newLogEntry = {
      error,
      label,
      severity,
      time: Date.now()
    };
    const oldLogs = this.logs$.value;
    const newLogs = [newLogEntry, ...oldLogs.slice(0, this.logLimit - 2)];
    this.logs$.next(newLogs);
  }
  /** Show snackBar to the user. By default snackBars have debounce timer, but you can force snackBar to show instantly */
  showMessage(message, duration, force) {
    const nowTime = Date.now();
    if (!force && nowTime - this.lastSnackBarTime <= this.snackBarDebounce) {
      return;
    }
    if (duration != null && duration > 0) {
      this.snackBar.open(message, null, {
        duration
      });
    } else {
      this.snackBar.open(message);
    }
    this.lastSnackBarTime = nowTime;
  }
  getLogs$() {
    return this.logs$.asObservable();
  }
  static #_ = this.ɵfac = function LoggingService_Factory(t) {
    return new (t || LoggingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LoggingService,
    factory: LoggingService.ɵfac
  });
}

/***/ }),

/***/ 8500:
/*!***********************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/services/query.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryService: () => (/* binding */ QueryService)
/* harmony export */ });
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/context */ 68873);
/* harmony import */ var _shared_services_service_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/service-base */ 4979);
/* harmony import */ var _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/logging/eav-logger */ 6812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 46443);







const logThis = false;
class QueryService extends _shared_services_service_base__WEBPACK_IMPORTED_MODULE_1__.ServiceBase {
  constructor(http, context) {
    super(new _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_2__.EavLogger('QueryService', logThis));
    this.http = http;
    this.context = context;
  }
  getAvailableEntities(queryUrl, params, fields, entitiesFilter) {
    this.log.a('getAvailableEntities', {
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
    this.log.a(`getEntities(${log})`, {
      contentTypes,
      itemIds,
      fields
    });
    const allParams = '&typeNames=' + (contentTypes?.join(',') ?? '') + `&appId=${this.context.appId}` + '&itemIds=' + (itemIds?.join(',') ?? '') + '&$select=' + (fields ?? '' /* special catch to avoid the word "null" */);
    // trim initial & because it will always start with an & and it should't
    const urlParams = allParams.substring(1);
    return this.http.post(`app/auto/query/System.EntityPicker/Default?${urlParams}`, {});
  }
  static #_ = this.ɵfac = function QueryService_Factory(t) {
    return new (t || QueryService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_0__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: QueryService,
    factory: QueryService.ɵfac
  });
}

/***/ }),

/***/ 39908:
/*!********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/services/scripts-loader.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileTypeConstants: () => (/* binding */ FileTypeConstants),
/* harmony export */   ScriptsLoaderService: () => (/* binding */ ScriptsLoaderService)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 22453);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ 56606);
/* harmony import */ var _shared_services_service_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/service-base */ 4979);
/* harmony import */ var _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/logging/eav-logger */ 6812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);






const logThis = false;
const nameOfThis = 'ScriptsLoaderService';
const FileTypeConstants = {
  CSS: '.css',
  JS: '.js'
};
/**
 * Service for loading scripts and stylesheets dynamically for an edit form.
 * It must be different for each form, since it uses the form's configuration
 * to resolve paths pointing to the correct app, zone, etc.
 */
class ScriptsLoaderService extends _shared_services_service_base__WEBPACK_IMPORTED_MODULE_2__.ServiceBase {
  constructor(formConfig) {
    super(new _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_3__.EavLogger(nameOfThis, logThis));
    this.formConfig = formConfig;
    this.loadedFiles = [];
  }
  /** Loads CSS and JS files in order (CSS first) and calls callback function when finished */
  load(scripts, callback) {
    this.log.a('Loading scripts:', {
      scripts
    });
    const sortedFiles = this.sortByType(scripts);
    this.insertToDom(sortedFiles, callback, 0); // async, called again and again after each script is loaded
  }
  sortByType(scripts) {
    const cssFiles = [];
    const jsFiles = [];
    scripts.forEach(script => {
      const file = {
        path: this.resolveSpecialPaths(script),
        type: null,
        loaded: false,
        domEl: null
      };
      if (file.path.endsWith(FileTypeConstants.CSS)) {
        file.type = FileTypeConstants.CSS;
        cssFiles.push(file);
      } else if (file.path.endsWith(FileTypeConstants.JS)) {
        file.type = FileTypeConstants.JS;
        jsFiles.push(file);
      }
    });
    return cssFiles.concat(jsFiles);
  }
  insertToDom(files, callback, increment) {
    const file = files[increment];
    increment++;
    if (!file) {
      callback();
      return;
    }
    file.path = file.path + '?sxcver=' + window.sxcVersion; // break cache
    const existing = this.loadedFiles.find(loadedFile => loadedFile.path === file.path);
    if (existing) {
      if (existing.loaded) {
        this.insertToDom(files, callback, increment);
      } else {
        const _listener = () => {
          file.loaded = true;
          this.insertToDom(files, callback, increment);
          existing.domEl.removeEventListener('load', _listener);
          existing.domEl.removeEventListener('error', _listener);
        };
        existing.domEl.addEventListener('load', _listener);
        existing.domEl.addEventListener('error', _listener);
      }
    } else {
      if (file.type === FileTypeConstants.CSS) {
        file.domEl = document.createElement('link');
        file.domEl.rel = 'stylesheet';
        file.domEl.href = file.path;
      } else if (file.type === FileTypeConstants.JS) {
        file.domEl = document.createElement('script');
        file.domEl.type = 'module';
        file.domEl.src = file.path;
      }
      const _listener = () => {
        file.loaded = true;
        this.insertToDom(files, callback, increment);
        file.domEl.removeEventListener('load', _listener);
        file.domEl.removeEventListener('error', _listener);
      };
      file.domEl.addEventListener('load', _listener);
      file.domEl.addEventListener('error', _listener);
      document.querySelector('head').appendChild(file.domEl);
      this.loadedFiles.push(file);
    }
  }
  resolveSpecialPaths(url) {
    return url.replace(/\[System:Path\]/i, _helpers__WEBPACK_IMPORTED_MODULE_1__.UrlHelpers.getUrlPrefix('system', this.formConfig.config)).replace(/\[Zone:Path\]/i, _helpers__WEBPACK_IMPORTED_MODULE_1__.UrlHelpers.getUrlPrefix('zone', this.formConfig.config)).replace(/\[App:Path\]/i, _helpers__WEBPACK_IMPORTED_MODULE_1__.UrlHelpers.getUrlPrefix('app', this.formConfig.config)).replace(/\[App:PathShared\]/i, _helpers__WEBPACK_IMPORTED_MODULE_1__.UrlHelpers.getUrlPrefix('appShared', this.formConfig.config));
  }
  static #_ = this.ɵfac = function ScriptsLoaderService_Factory(t) {
    return new (t || ScriptsLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](___WEBPACK_IMPORTED_MODULE_0__.FormConfigService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ScriptsLoaderService,
    factory: ScriptsLoaderService.ɵfac
  });
}

/***/ }),

/***/ 50526:
/*!************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/store/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logger: () => (/* reexport safe */ _reducers__WEBPACK_IMPORTED_MODULE_0__.logger),
/* harmony export */   metaReducers: () => (/* reexport safe */ _reducers__WEBPACK_IMPORTED_MODULE_0__.metaReducers),
/* harmony export */   reducers: () => (/* reexport safe */ _reducers__WEBPACK_IMPORTED_MODULE_0__.reducers)
/* harmony export */ });
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ 81306);


/***/ }),

/***/ 28708:
/*!***********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/store/ngrx-data/adam-cache.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdamCacheService: () => (/* binding */ AdamCacheService)
/* harmony export */ });
/* harmony import */ var _base_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-data.service */ 11220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/data */ 25685);




class AdamCacheService extends _base_data_service__WEBPACK_IMPORTED_MODULE_0__.BaseDataService {
  constructor(serviceElementsFactory) {
    super('AdamCache', serviceElementsFactory);
  }
  loadPrefetch(prefetchAdams) {
    if (prefetchAdams == null) {
      return;
    }
    const snapshots = Object.entries(prefetchAdams).map(([entityGuid, attributes]) => {
      const snapshot = {
        Guid: entityGuid,
        Attributes: attributes
      };
      return snapshot;
    });
    this.upsertManyInCache(snapshots);
  }
  getAdamSnapshot(entityGuid, fieldName) {
    return this.cache$.value.find(adamSnapshot => adamSnapshot.Guid === entityGuid)?.Attributes[fieldName];
  }
  static #_ = this.ɵfac = function AdamCacheService_Factory(t) {
    return new (t || AdamCacheService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_2__.EntityCollectionServiceElementsFactory));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AdamCacheService,
    factory: AdamCacheService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 11220:
/*!**********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/store/ngrx-data/base-data.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseDataService: () => (/* binding */ BaseDataService)
/* harmony export */ });
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/data */ 25685);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 75797);


/**
 * Creates BehaviorSubject for cached data to be accessible in both synchronous and asynchronous manner with cache$.
 * WARNING! Do not use entities$
 */
class BaseDataService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceBase {
  constructor(cacheName, serviceElementsFactory) {
    super(cacheName, serviceElementsFactory);
    this.cache$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    // doesn't need to be completed because store services are singletons that live as long as the browser tab is open
    this.entities$.subscribe(items => {
      this.cache$.next(items);
    });
  }
}

/***/ }),

/***/ 26924:
/*!******************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/store/ngrx-data/content-type-item.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentTypeItemService: () => (/* binding */ ContentTypeItemService)
/* harmony export */ });
/* harmony import */ var _models_eav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/eav */ 12936);
/* harmony import */ var _base_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-data.service */ 11220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/data */ 25685);





class ContentTypeItemService extends _base_data_service__WEBPACK_IMPORTED_MODULE_1__.BaseDataService {
  constructor(serviceElementsFactory) {
    super('ContentTypeItem', serviceElementsFactory);
  }
  addContentTypeItems(contentTypeItems1) {
    const contentTypeItems = _models_eav__WEBPACK_IMPORTED_MODULE_0__.EavEntity.convertMany(contentTypeItems1);
    this.upsertManyInCache(contentTypeItems);
  }
  getContentTypeItem(guid) {
    return this.cache$.value.find(contentTypeItem => contentTypeItem.Guid === guid);
  }
  getContentTypeItems(guids) {
    return this.cache$.value.filter(contentTypeItem => guids.includes(contentTypeItem.Guid));
  }
  static #_ = this.ɵfac = function ContentTypeItemService_Factory(t) {
    return new (t || ContentTypeItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_3__.EntityCollectionServiceElementsFactory));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ContentTypeItemService,
    factory: ContentTypeItemService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 94612:
/*!*************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/store/ngrx-data/content-type.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentTypeService: () => (/* binding */ ContentTypeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var _models_eav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/eav */ 12936);
/* harmony import */ var _base_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-data.service */ 11220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/data */ 25685);






class ContentTypeService extends _base_data_service__WEBPACK_IMPORTED_MODULE_1__.BaseDataService {
  constructor(serviceElementsFactory) {
    super('ContentType', serviceElementsFactory);
  }
  addContentTypes(contentTypes1) {
    const contentTypes = _models_eav__WEBPACK_IMPORTED_MODULE_0__.EavContentType.convertMany(contentTypes1);
    this.addManyToCache(contentTypes);
  }
  getContentType(id) {
    return this.cache$.value.find(contentType => contentType.Id === id);
  }
  getContentType$(id) {
    return this.cache$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(contentTypes => contentTypes.find(contentType => contentType.Id === id)), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)());
  }
  static #_ = this.ɵfac = function ContentTypeService_Factory(t) {
    return new (t || ContentTypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_5__.EntityCollectionServiceElementsFactory));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ContentTypeService,
    factory: ContentTypeService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 28666:
/*!********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/store/ngrx-data/entity-metadata.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   entityConfig: () => (/* binding */ entityConfig),
/* harmony export */   entityMetadata: () => (/* binding */ entityMetadata)
/* harmony export */ });
const entityMetadata = {
  GlobalConfig: {},
  Item: {
    selectId: itemSelectId
  },
  Feature: {
    selectId: featureSelectId
  },
  Language: {
    selectId: languageSelectId
  },
  FormLanguageInStore: {
    selectId: languageInstanceSelectId
  },
  ContentType: {
    selectId: contentTypeSelectId
  },
  ContentTypeItem: {
    selectId: contentTypeItemSelectId
  },
  InputType: {
    selectId: inputTypeSelectId
  },
  PublishStatus: {
    selectId: publishStatusSelectId
  },
  Prefetch: {
    selectId: prefetchSelectId
  },
  // Entity Cache is actually the PickerItem Cache, uses UpperCase Id
  EntityCache: {
    selectId: useLowerCaseId
  },
  AdamCache: {
    selectId: adamCacheSelectId
  },
  LinkCache: {
    selectId: linkCacheSelectId
  }
  // 2024-04-29 2dm removed this #cleanup-picker
  // StringQueryCache: {
  //   selectId: stringQueryCacheSelectId,
  // },
};
const pluralNames = {
  Feature: 'Features',
  PublishStatus: 'PublishStatuses'
};
const entityConfig = {
  entityMetadata,
  pluralNames
};
function itemSelectId(item) {
  return item?.Entity?.Guid;
}
function featureSelectId(feature) {
  return feature?.guid;
}
function languageSelectId(language) {
  return language?.NameId;
}
function languageInstanceSelectId(languageInstance) {
  return languageInstance?.formId;
}
function contentTypeSelectId(contentType) {
  return contentType?.Id;
}
function contentTypeItemSelectId(contentTypeItem) {
  return contentTypeItem?.Guid;
}
function inputTypeSelectId(inputType) {
  return inputType?.Type;
}
function publishStatusSelectId(publishStatus) {
  return publishStatus?.formId;
}
function prefetchSelectId(entity) {
  return entity?._guid;
}
// Select anything that's identified by an upper-case ID
function useUpperCaseId(entity /* PickerItem */) {
  return entity?.Id;
}
function useLowerCaseId(entity /* PickerItem */) {
  return entity?.id;
}
function adamCacheSelectId(adamSnapshot) {
  return adamSnapshot?.Guid;
}
function linkCacheSelectId(link) {
  return link?.key;
}
// 2024-04-29 2dm removed this #cleanup-picker
// function stringQueryCacheSelectId(cacheItem: PickerStringQueryCacheItem): string {
//   return cacheItem?.selector;
// }

/***/ }),

/***/ 7284:
/*!**************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/store/ngrx-data/global-config.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalConfigService: () => (/* binding */ GlobalConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var _shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/constants/session.constants */ 38172);
/* harmony import */ var _base_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-data.service */ 11220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/data */ 25685);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);








class GlobalConfigService extends _base_data_service__WEBPACK_IMPORTED_MODULE_1__.BaseDataService {
  constructor(serviceElementsFactory, snackBar) {
    super('GlobalConfig', serviceElementsFactory);
    this.snackBar = snackBar;
    const initial = {
      id: 0,
      debugEnabled: sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.keyDebug) === 'true',
      allowDebugMode: false
    };
    this.addOneToCache(initial);
  }
  allowDebug(allow) {
    const oldConfig = this.cache$.value[0];
    if (oldConfig.allowDebugMode === allow) {
      return;
    }
    const newConfig = {
      ...oldConfig,
      allowDebugMode: allow
    };
    this.updateOneInCache(newConfig);
  }
  getDebugEnabled() {
    return this.cache$.value[0].allowDebugMode && this.cache$.value[0].debugEnabled;
  }
  getDebugEnabled$() {
    return this.cache$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(configs => configs[0].allowDebugMode && configs[0].debugEnabled), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)());
  }
  toggleDebugEnabled() {
    const oldConfig = this.cache$.value[0];
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
    this.updateOneInCache(newConfig);
    this.snackBar.open(newConfig.debugEnabled ? 'developer mode on' : 'developer mode off', null, {
      duration: 3000
    });
  }
  static #_ = this.ɵfac = function GlobalConfigService_Factory(t) {
    return new (t || GlobalConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_5__.EntityCollectionServiceElementsFactory), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: GlobalConfigService,
    factory: GlobalConfigService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 27521:
/*!**********************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/store/ngrx-data/index.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdamCacheService: () => (/* reexport safe */ _adam_cache_service__WEBPACK_IMPORTED_MODULE_0__.AdamCacheService),
/* harmony export */   BaseDataService: () => (/* reexport safe */ _base_data_service__WEBPACK_IMPORTED_MODULE_1__.BaseDataService),
/* harmony export */   ContentTypeItemService: () => (/* reexport safe */ _content_type_item_service__WEBPACK_IMPORTED_MODULE_2__.ContentTypeItemService),
/* harmony export */   ContentTypeService: () => (/* reexport safe */ _content_type_service__WEBPACK_IMPORTED_MODULE_3__.ContentTypeService),
/* harmony export */   GlobalConfigService: () => (/* reexport safe */ _global_config_service__WEBPACK_IMPORTED_MODULE_5__.GlobalConfigService),
/* harmony export */   InputTypeService: () => (/* reexport safe */ _input_type_service__WEBPACK_IMPORTED_MODULE_6__.InputTypeService),
/* harmony export */   ItemService: () => (/* reexport safe */ _item_service__WEBPACK_IMPORTED_MODULE_7__.ItemService),
/* harmony export */   LanguageInstanceService: () => (/* reexport safe */ _language_instance_service__WEBPACK_IMPORTED_MODULE_8__.LanguageInstanceService),
/* harmony export */   LanguageService: () => (/* reexport safe */ _language_service__WEBPACK_IMPORTED_MODULE_9__.LanguageService),
/* harmony export */   LinkCacheService: () => (/* reexport safe */ _link_cache_service__WEBPACK_IMPORTED_MODULE_10__.LinkCacheService),
/* harmony export */   PublishStatusService: () => (/* reexport safe */ _publish_status_service__WEBPACK_IMPORTED_MODULE_11__.PublishStatusService),
/* harmony export */   entityConfig: () => (/* reexport safe */ _entity_metadata__WEBPACK_IMPORTED_MODULE_4__.entityConfig),
/* harmony export */   entityMetadata: () => (/* reexport safe */ _entity_metadata__WEBPACK_IMPORTED_MODULE_4__.entityMetadata)
/* harmony export */ });
/* harmony import */ var _adam_cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adam-cache.service */ 28708);
/* harmony import */ var _base_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-data.service */ 11220);
/* harmony import */ var _content_type_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-type-item.service */ 26924);
/* harmony import */ var _content_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-type.service */ 94612);
/* harmony import */ var _entity_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entity-metadata */ 28666);
/* harmony import */ var _global_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global-config.service */ 7284);
/* harmony import */ var _input_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-type.service */ 58935);
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item.service */ 72123);
/* harmony import */ var _language_instance_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./language-instance.service */ 46114);
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./language.service */ 61306);
/* harmony import */ var _link_cache_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./link-cache.service */ 56495);
/* harmony import */ var _publish_status_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./publish-status.service */ 30584);













/***/ }),

/***/ 58935:
/*!***********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/store/ngrx-data/input-type.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputTypeService: () => (/* binding */ InputTypeService)
/* harmony export */ });
/* harmony import */ var _base_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-data.service */ 11220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/data */ 25685);




class InputTypeService extends _base_data_service__WEBPACK_IMPORTED_MODULE_0__.BaseDataService {
  constructor(serviceElementsFactory) {
    super('InputType', serviceElementsFactory);
  }
  addInputTypes(inputTypes) {
    this.addManyToCache(inputTypes);
  }
  getInputType(type) {
    return this.cache$.value.find(inputType => inputType.Type === type);
  }
  getInputTypes() {
    return this.cache$.value;
  }
  getInputTypes$() {
    return this.cache$.asObservable();
  }
  static #_ = this.ɵfac = function InputTypeService_Factory(t) {
    return new (t || InputTypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_2__.EntityCollectionServiceElementsFactory));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: InputTypeService,
    factory: InputTypeService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 72123:
/*!*****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/store/ngrx-data/item.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemService: () => (/* binding */ ItemService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ 64158);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ 56606);
/* harmony import */ var _models_eav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/eav */ 12936);
/* harmony import */ var _base_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-data.service */ 11220);
/* harmony import */ var projects_eav_ui_src_app_shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/eav-ui/src/app/shared/logging/eav-logger */ 6812);
/* harmony import */ var _helpers_control_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/control.helpers */ 12220);
/* harmony import */ var projects_eav_ui_src_app_shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/eav-ui/src/app/shared/rxJs/rx.helpers */ 93826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/data */ 25685);












const logThis = false;
const nameOfThis = 'ItemService';
class ItemService extends _base_data_service__WEBPACK_IMPORTED_MODULE_4__.BaseDataService {
  constructor(serviceElementsFactory) {
    super('Item', serviceElementsFactory);
    this.log = new projects_eav_ui_src_app_shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_5__.EavLogger(nameOfThis, logThis);
  }
  loadItems(dtoItems) {
    const items = dtoItems.map(item => _models_eav__WEBPACK_IMPORTED_MODULE_3__.EavItem.convert(item));
    this.upsertManyInCache(items);
  }
  updateItemId(itemData) {
    const entityGuid = Object.keys(itemData)[0];
    const entityId = itemData[entityGuid];
    const oldItem = this.cache$.value.find(item => item.Entity.Guid === entityGuid);
    if (!oldItem || oldItem.Header.EntityId !== 0 && oldItem.Entity.Id !== 0) {
      return;
    }
    const newItem = {
      ...oldItem,
      Header: {
        ...oldItem.Header,
        EntityId: entityId
      },
      Entity: {
        ...oldItem.Entity,
        Id: entityId
      }
    };
    this.updateOneInCache(newItem);
  }
  updateItemMetadata(entityGuid, metadata) {
    const oldItem = this.cache$.value.find(item => item.Entity.Guid === entityGuid);
    const newItem = {
      ...oldItem,
      Entity: {
        ...oldItem.Entity,
        Metadata: metadata
      }
    };
    this.updateOneInCache(newItem);
  }
  addItemAttributeValue(entityGuid, attributeKey, newValue, currentLanguage, isReadOnly, attributeType, isTransaction = false, transactionItem) {
    const newValueDimension = isReadOnly ? `~${currentLanguage}` : currentLanguage;
    const newEavValue = _models_eav__WEBPACK_IMPORTED_MODULE_3__.EavValue.create(newValue, [_models_eav__WEBPACK_IMPORTED_MODULE_3__.EavDimension.create(newValueDimension)]);
    const oldItem = transactionItem ?? this.cache$.value.find(item => item.Entity.Guid === entityGuid);
    const newItem = {
      ...oldItem,
      Entity: {
        ...oldItem.Entity,
        Attributes: _helpers__WEBPACK_IMPORTED_MODULE_2__.LocalizationHelpers.addAttributeValue(oldItem.Entity.Attributes, newEavValue, attributeKey, attributeType)
      }
    };
    if (!isTransaction) {
      this.updateOneInCache(newItem);
    }
    return newItem;
  }
  updateItemAttributeValue(entityGuid, attributeKey, newValue, language, isReadOnly) {
    const oldItem = this.cache$.value.find(item => item.Entity.Guid === entityGuid);
    if (!oldItem) {
      return;
    }
    const newItem = {
      ...oldItem,
      Entity: {
        ...oldItem.Entity,
        Attributes: _helpers__WEBPACK_IMPORTED_MODULE_2__.LocalizationHelpers.updateAttributeValue(oldItem.Entity.Attributes, attributeKey, newValue, language, isReadOnly)
      }
    };
    this.updateOneInCache(newItem);
  }
  updateItemAttributesValues(entityGuid, newValues, language) {
    const oldItem = this.cache$.value.find(item => item.Entity.Guid === entityGuid);
    if (!oldItem) {
      return;
    }
    const oldValues = {};
    for (const [name, values] of Object.entries(oldItem.Entity.Attributes)) {
      if (!newValues.hasOwnProperty(name)) continue;
      oldValues[name] = _helpers__WEBPACK_IMPORTED_MODULE_2__.LocalizationHelpers.translate(language, values, null);
    }
    const changes = _helpers_control_helpers__WEBPACK_IMPORTED_MODULE_6__.ControlHelpers.getFormChanges(oldValues, newValues);
    if (changes == null) {
      return;
    }
    const newItem = {
      ...oldItem,
      Entity: {
        ...oldItem.Entity,
        Attributes: _helpers__WEBPACK_IMPORTED_MODULE_2__.LocalizationHelpers.updateAttributesValues(oldItem.Entity.Attributes, changes, language)
      }
    };
    this.updateOneInCache(newItem);
  }
  /**
   * Update entity attribute dimension. Add readonly languageKey to existing useFromLanguageKey.
   * Example to useFrom en-us add fr-fr = "en-us,-fr-fr"
   */
  addItemAttributeDimension(entityGuid, attributeKey, currentLanguage, shareWithLanguage, defaultLanguage, isReadOnly, transactionItem) {
    const oldItem = transactionItem ?? this.cache$.value.find(item => item.Entity.Guid === entityGuid);
    const newItem = {
      ...oldItem,
      Entity: {
        ...oldItem.Entity,
        Attributes: _helpers__WEBPACK_IMPORTED_MODULE_2__.LocalizationHelpers.addAttributeDimension(oldItem.Entity.Attributes, attributeKey, currentLanguage, shareWithLanguage, defaultLanguage, isReadOnly)
      }
    };
    this.updateOneInCache(newItem);
  }
  removeItemAttributeDimension(entityGuid, fieldName, current, delayUpsert = false, transactionItem) {
    const l = this.log.fn('removeItemAttributeDimension', {
      entityGuid,
      attributeKey: fieldName,
      currentLanguage: current,
      isTransaction: delayUpsert,
      transactionItem
    });
    const oldItem = transactionItem ?? this.cache$.value.find(item => item.Entity.Guid === entityGuid);
    const newItem = {
      ...oldItem,
      Entity: {
        ...oldItem.Entity,
        Attributes: _helpers__WEBPACK_IMPORTED_MODULE_2__.LocalizationHelpers.removeAttributeDimension(oldItem.Entity.Attributes, fieldName, current)
      }
    };
    if (!delayUpsert) this.updateOneInCache(newItem);
    return l.r(newItem);
  }
  updateItemHeader(entityGuid, header) {
    const oldItem = this.cache$.value.find(item => item.Entity.Guid === entityGuid);
    if (!oldItem) {
      return;
    }
    const newItem = {
      ...oldItem,
      Header: {
        ...header
      }
    };
    this.updateOneInCache(newItem);
  }
  getItemAttributes(entityGuid) {
    const l = this.log.fn('getItemAttributes', {
      entityGuid
    });
    const result = this.cache$.value.find(item => item.Entity.Guid === entityGuid)?.Entity.Attributes;
    return l.r(result);
  }
  getItemAttributes$(entityGuid) {
    return this.cache$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(items => items.find(item => item.Entity.Guid === entityGuid)?.Entity.Attributes), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)());
  }
  getItem(entityGuid) {
    return this.cache$.value.find(item => item.Entity.Guid === entityGuid);
  }
  getItem$(entityGuid) {
    return this.cache$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(items => items.find(item => item.Entity.Guid === entityGuid)), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)());
  }
  getItemFor$(entityGuid) {
    return this.cache$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(items => items.find(item => item.Entity.Guid === entityGuid)?.Entity.For), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)());
  }
  getItemNote(entityGuid) {
    return this.cache$.value.find(item => item.Entity.Guid === entityGuid)?.Entity.Metadata?.find(metadata => metadata.Type.Name === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.contentTypes.notes);
  }
  getItemNote$(entityGuid) {
    return this.cache$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(items => items.find(item => item.Entity.Guid === entityGuid)?.Entity.Metadata?.find(metadata => metadata.Type.Name === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.contentTypes.notes)), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)());
  }
  getItemHeader$(entityGuid) {
    return this.cache$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(items => items.find(item => item.Entity.Guid === entityGuid)?.Header), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)());
  }
  getItems(entityGuids) {
    if (entityGuids == null) {
      return this.cache$.value;
    }
    return this.cache$.value.filter(item => entityGuids.includes(item.Entity.Guid));
  }
  getItems$(entityGuids) {
    if (entityGuids == null) {
      return this.cache$.asObservable();
    }
    return this.cache$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(items => items.filter(item => entityGuids.includes(item.Entity.Guid))), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)(projects_eav_ui_src_app_shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_7__.RxHelpers.arraysEqual));
  }
  setDefaultValue(item, ctAttribute, inputType, settings, languages, defaultLanguage) {
    const l = this.log.fn('setDefaultValue', {
      item,
      ctAttribute,
      inputType,
      settings,
      languages,
      defaultLanguage
    }, `Name: ${ctAttribute.Name}`);
    const defaultValue = _helpers__WEBPACK_IMPORTED_MODULE_2__.InputFieldHelpers.parseDefaultValue(ctAttribute.Name, inputType?.Type, settings, item.Header);
    const defaultLanguageValue = _helpers__WEBPACK_IMPORTED_MODULE_2__.LocalizationHelpers.getBestValue(item.Entity.Attributes[ctAttribute.Name], defaultLanguage, defaultLanguage, _constants__WEBPACK_IMPORTED_MODULE_1__.BestValueModes.Strict);
    // 2023-08-31 2dm simplified; leave comments in till EOY in case I broke something
    const languageCode = languages.length === 0 || inputType?.DisableI18n ? '*' : defaultLanguage;
    if (defaultLanguageValue === undefined) {
      this.addItemAttributeValue(item.Entity.Guid, ctAttribute.Name, defaultValue, languageCode, false, ctAttribute.Type);
      // if (languages.length === 0 || inputType?.DisableI18n) {
      //   this.addItemAttributeValue(item.Entity.Guid, ctAttribute.Name, defaultValue, '*', false, ctAttribute.Type);
      // } else {
      //   this.addItemAttributeValue(item.Entity.Guid, ctAttribute.Name, defaultValue, defaultLanguage, false, ctAttribute.Type);
      // }
    } else {
      // most likely used only for entity fields because we can never know if they were cleaned out or brand new
      this.updateItemAttributeValue(item.Entity.Guid, ctAttribute.Name, defaultValue, {
        current: languageCode,
        primary: defaultLanguage
      }, false);
      // if (languages.length === 0 || inputType?.DisableI18n) {
      //   this.updateItemAttributeValue(item.Entity.Guid, ctAttribute.Name, defaultValue, '*', defaultLanguage, false);
      // } else {
      //   this.updateItemAttributeValue(item.Entity.Guid, ctAttribute.Name, defaultValue, defaultLanguage, defaultLanguage, false);
      // }
    }
    // return what was used, so it can be checked on form-init
    return defaultValue;
  }
  static #_ = this.ɵfac = function ItemService_Factory(t) {
    return new (t || ItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_11__.EntityCollectionServiceElementsFactory));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
    token: ItemService,
    factory: ItemService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 46114:
/*!******************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/store/ngrx-data/language-instance.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageInstanceService: () => (/* binding */ LanguageInstanceService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 86301);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ 56606);
/* harmony import */ var _base_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-data.service */ 11220);
/* harmony import */ var _models_form_languages_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/form-languages.model */ 53064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/data */ 25685);







class LanguageInstanceService extends _base_data_service__WEBPACK_IMPORTED_MODULE_1__.BaseDataService {
  constructor(serviceElementsFactory) {
    super('FormLanguageInStore', serviceElementsFactory);
  }
  addToStore(formId, primary, current, hideHeader) {
    this.addOneToCache({
      formId,
      current,
      initial: current,
      primary,
      hideHeader
    });
  }
  removeFromStore(formId) {
    this.removeOneFromCache(formId);
  }
  setCurrent(formId, newLanguage) {
    this.updateOneInCache({
      formId,
      current: newLanguage
    });
  }
  /**
   * Get an EntityReader for the current form
   */
  getEntityReader$(formId) {
    return this.getLanguage$(formId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(language => new _helpers__WEBPACK_IMPORTED_MODULE_0__.EntityReader(language.current, language.primary)),
    // Ensure we don't fire too often
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(),
    // Ensure the EntityReader is reused and not recreated every time
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.shareReplay)(1));
  }
  getLanguage$(formId) {
    // if (this.get$Cache[formId])
    //   return this.get$Cache[formId];
    return /* this.get$Cache[formId] = */this.cache$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(languageInstances => {
      const found = languageInstances.find(l => l.formId === formId);
      return {
        ..._models_form_languages_model__WEBPACK_IMPORTED_MODULE_2__.FormLanguage.empty,
        ...found
      };
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(),
    // Ensure the EntityReader is reused and not recreated every time
    // todo: this probably doesn't have a real effect...
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.shareReplay)(1));
  }
  // private get$Cache: Record<number, Observable<FormLanguageComplete>> = {};
  // getLanguageSignal(formId: number,): Signal<FormLanguageComplete> {
  //   return toSignal(this.getLanguage$(formId));
  // }
  /** Get hideHeader for the form. Fix for safari and mobile browsers */
  getHideHeader$(formId) {
    return this.cache$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(languageInstances => languageInstances.find(languageInstance => languageInstance.formId === formId)?.hideHeader), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)());
  }
  /** Update hideHeader for the form. Fix for safari and mobile browsers */
  updateHideHeader(formId, hideHeader) {
    const languageInstance = {
      formId,
      hideHeader
    };
    this.updateOneInCache(languageInstance);
  }
  static #_ = this.ɵfac = function LanguageInstanceService_Factory(t) {
    return new (t || LanguageInstanceService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_7__.EntityCollectionServiceElementsFactory));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: LanguageInstanceService,
    factory: LanguageInstanceService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 61306:
/*!*********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/store/ngrx-data/language.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageService: () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 27521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/data */ 25685);




class LanguageService extends ___WEBPACK_IMPORTED_MODULE_0__.BaseDataService {
  constructor(serviceElementsFactory) {
    super('Language', serviceElementsFactory);
  }
  loadLanguages(languages) {
    this.addAllToCache(languages);
  }
  getLanguages() {
    return this.cache$.value;
  }
  getLanguages$() {
    return this.cache$.asObservable();
  }
  static #_ = this.ɵfac = function LanguageService_Factory(t) {
    return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_2__.EntityCollectionServiceElementsFactory));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LanguageService,
    factory: LanguageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 56495:
/*!***********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/store/ngrx-data/link-cache.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkCacheService: () => (/* binding */ LinkCacheService)
/* harmony export */ });
/* harmony import */ var _base_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-data.service */ 11220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/data */ 25685);




class LinkCacheService extends _base_data_service__WEBPACK_IMPORTED_MODULE_0__.BaseDataService {
  constructor(serviceElementsFactory) {
    super('LinkCache', serviceElementsFactory);
  }
  loadPrefetch(prefetchLinks, prefetchAdam) {
    const links = [];
    if (prefetchLinks != null) {
      for (const [key, linkInfo] of Object.entries(prefetchLinks)) {
        const link = {
          key,
          linkInfo
        };
        links.push(link);
      }
    }
    if (prefetchAdam != null) {
      for (const [entityGuid, prefetchFields] of Object.entries(prefetchAdam)) {
        for (const [fieldName, items] of Object.entries(prefetchFields)) {
          const adamLinks = this.adamToLinks(items);
          links.push(...adamLinks);
        }
      }
    }
    this.upsertManyInCache(links);
  }
  loadAdam(items) {
    const adamLinks = this.adamToLinks(items);
    this.upsertManyInCache(adamLinks);
  }
  loadLink(key, linkInfo) {
    key = key.trim().toLocaleLowerCase();
    const link = {
      key,
      linkInfo: {
        ...linkInfo,
        Adam: {
          ...linkInfo.Adam
        }
      }
    };
    this.upsertOneInCache(link);
  }
  getLinkInfo(key) {
    key = key.trim().toLocaleLowerCase();
    return this.cache$.value.find(linkCache => linkCache.key.trim().toLocaleLowerCase() === key)?.linkInfo;
  }
  adamToLinks(items) {
    const links = [];
    for (const item of items) {
      if (item.IsFolder) {
        continue;
      }
      const link = {
        key: item.ReferenceId,
        linkInfo: {
          Adam: {
            ...item
          },
          Value: item.Url
        }
      };
      links.push(link);
    }
    return links;
  }
  static #_ = this.ɵfac = function LinkCacheService_Factory(t) {
    return new (t || LinkCacheService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_2__.EntityCollectionServiceElementsFactory));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LinkCacheService,
    factory: LinkCacheService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 30584:
/*!***************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/store/ngrx-data/publish-status.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublishStatusService: () => (/* binding */ PublishStatusService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ 6951);
/* harmony import */ var _base_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-data.service */ 11220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/data */ 25685);






class PublishStatusService extends _base_data_service__WEBPACK_IMPORTED_MODULE_1__.BaseDataService {
  constructor(serviceElementsFactory) {
    super('PublishStatus', serviceElementsFactory);
  }
  setPublishStatus(publishStatus) {
    this.upsertOneInCache(publishStatus);
  }
  removePublishStatus(formId) {
    this.removeOneFromCache(formId);
  }
  getPublishStatus(formId) {
    return this.cache$.value.find(publishStatus => publishStatus.formId === formId);
  }
  getPublishStatus$(formId) {
    return this.cache$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(publishStatuses => publishStatuses.find(publishStatus => publishStatus.formId === formId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)());
  }
  /** Convert the booleans to the appropriate "verb" */
  asPublishMode(isPublished, draftShouldBranch) {
    return draftShouldBranch ? _models__WEBPACK_IMPORTED_MODULE_0__.PublishModes.Branch : isPublished ? _models__WEBPACK_IMPORTED_MODULE_0__.PublishModes.Show : _models__WEBPACK_IMPORTED_MODULE_0__.PublishModes.Hide;
  }
  setPublishMode(publishMode, formId, eavService) {
    // if publish mode is prohibited, set default
    if (eavService.config.versioningOptions[publishMode] == null) {
      publishMode = Object.keys(eavService.config.versioningOptions)[0];
    }
    const publishStatus = {
      formId,
      DraftShouldBranch: publishMode === _models__WEBPACK_IMPORTED_MODULE_0__.PublishModes.Branch,
      IsPublished: publishMode === _models__WEBPACK_IMPORTED_MODULE_0__.PublishModes.Show
    };
    this.setPublishStatus(publishStatus);
  }
  getPublishMode$(formId) {
    return this.getPublishStatus$(formId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(publishStatus => {
      const publishMode = publishStatus.DraftShouldBranch ? _models__WEBPACK_IMPORTED_MODULE_0__.PublishModes.Branch : publishStatus.IsPublished ? _models__WEBPACK_IMPORTED_MODULE_0__.PublishModes.Show : _models__WEBPACK_IMPORTED_MODULE_0__.PublishModes.Hide;
      return publishMode;
    }));
  }
  static #_ = this.ɵfac = function PublishStatusService_Factory(t) {
    return new (t || PublishStatusService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_5__.EntityCollectionServiceElementsFactory));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: PublishStatusService,
    factory: PublishStatusService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 81306:
/*!*********************************************************************!*\
  !*** ./projects/eav-ui/src/app/edit/shared/store/reducers/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logger: () => (/* binding */ logger),
/* harmony export */   metaReducers: () => (/* binding */ metaReducers),
/* harmony export */   reducers: () => (/* binding */ reducers)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 66619);
/* harmony import */ var _shared_helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/helpers/console-log-angular.helper */ 74230);


/** Console log all actions */
function logger(reducer) {
  return (state, action) => {
    (0,_shared_helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_1__.consoleLogStore)('state:', state, 'action:', action);
    return reducer(state, action);
  };
}
/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? [logger] : [];
const reducers = {};

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _edit_shared_helpers_url_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit/shared/helpers/url.helpers */ 73412);
/* harmony import */ var _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/constants/dialog-type.constants */ 37567);
/* harmony import */ var _shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/constants/session.constants */ 38172);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/helpers/url-prep.helper */ 43216);



// tslint:disable-next-line:max-line-length


function paramsInitFactory(injector) {
  return () => {
    console.log('Setting parameters config and clearing route');
    const eavKeys = Object.keys(sessionStorage).filter(key => key.startsWith(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.prefix));
    const isParamsRoute = !window.location.hash.startsWith('#/');
    if (isParamsRoute) {
      console.log('Initial route:', window.location.href);
      // clear our part of the session
      for (const key of eavKeys) {
        sessionStorage.removeItem(key);
      }
      sessionStorage.setItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.keyUrl, window.location.href); // save url which opened the dialog
      sessionStorage.setItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.keyDialog, _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.Edit); // set edit dialog as the default
      // save params
      const urlHash = window.location.hash.substring(1); // substring removes first # char
      const queryParametersFromUrl = _edit_shared_helpers_url_helpers__WEBPACK_IMPORTED_MODULE_0__.UrlHelpers.readQueryStringParameters(urlHash);
      for (const [paramKey, paramValue] of Object.entries(queryParametersFromUrl)) {
        if (paramValue == null) {
          continue;
        }
        sessionStorage.setItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.prefix + paramKey, paramValue);
      }
      // redirect
      const router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
      const zoneId = sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.keyZoneId);
      const appId = sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.keyAppId);
      const dialog = sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.keyDialog);
      const contentType = sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.keyContentType);
      const items = sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.keyItems);
      switch (dialog) {
        case _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.Zone:
          const extrasZone = JSON.parse(sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.keyExtras));
          router.navigate([`${zoneId}/apps${extrasZone?.tab ? `/${extrasZone.tab}` : ''}`]);
          break;
        case _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.Apps:
          router.navigate([`${zoneId}/apps/list`]);
          break;
        case _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.AppImport:
          router.navigate([`${zoneId}/import`]);
          break;
        case _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.App:
          const extrasApp = JSON.parse(sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.keyExtras));
          router.navigate([`${zoneId}/${appId}/app${extrasApp?.tab ? `/${extrasApp.tab}` : ''}${extrasApp?.scope ? `/${extrasApp.scope}` : ''}`]);
          break;
        case _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.ContentType:
          router.navigate([`${zoneId}/${appId}/fields/${contentType}`]);
          break;
        case _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.ContentItems:
          router.navigate([`${zoneId}/${appId}/items/${contentType}`]);
          break;
        case _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.Edit:
          const editItems = JSON.parse(items);
          const form = {
            items: editItems
          };
          // const fields = sessionStorage.getItem(keyEditFields);
          const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_3__.convertFormToUrl)(form);
          router.navigate([`${zoneId}/${appId}/edit/${formUrl}`]);
          break;
        case _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.ItemHistory:
          const historyItems = JSON.parse(items);
          router.navigate([`${zoneId}/${appId}/versions/${historyItems[0].EntityId}`]);
          break;
        case _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.Develop:
          router.navigate([`${zoneId}/${appId}/code`]);
          break;
        case _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.PipelineDesigner:
          const pipelineId = sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.keyPipelineId);
          router.navigate([`${zoneId}/${appId}/query/${pipelineId}`]);
          break;
        case _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.Replace:
          const repItem = JSON.parse(items)[0];
          const rGuid = repItem.Parent;
          const rPart = repItem.Field;
          const rIndex = repItem.Index;
          const add = repItem.Add;
          const queryParams = add ? {
            add: true
          } : {};
          router.navigate([`${zoneId}/${appId}/${rGuid}/${rPart}/${rIndex}/replace`], {
            queryParams
          });
          break;
        case _shared_constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_1__.DialogTypeConstants.InstanceList:
          const grpItem = JSON.parse(items)[0];
          const gGuid = grpItem.Parent;
          const gPart = grpItem.Field;
          const gIndex = grpItem.Index;
          router.navigate([`${zoneId}/${appId}/${gGuid}/${gPart}/${gIndex}/reorder`]);
          break;
        default:
          alert(`Cannot open unknown dialog "${dialog}"`);
          try {
            window.parent.$2sxc.totalPopup.close();
          } catch (error) {}
      }
    } else if (eavKeys.length === 0) {
      // if not params route and no params are saved, e.g. browser was reopened, throw error
      alert('Missing required url parameters. Please reopen dialog.');
      throw new Error('Missing required url parameters. Please reopen dialog.');
    } else {
      console.log('Initial route:', sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_2__.keyUrl));
    }
  };
}

/***/ }),

/***/ 43176:
/*!*********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/components/base.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseComponent: () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _logging_eav_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logging/eav-logger */ 6812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




// 2024-06-12 2dm experimental - remove comments if all is good mid of June
// - previously had
// @Directive()  // Needs the @Directive() so the compiler allows OnDestroy to be implemented
// tslint:disable-next-line:directive-class-suffix
class BaseComponent {
  constructor(log) {
    this.log = log;
    /** Holds all subscriptions to be unsubscribed on destroy */
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
    this.log ??= new _logging_eav_logger__WEBPACK_IMPORTED_MODULE_0__.EavLogger('BaseComponent', false);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static #_ = this.ɵfac = function BaseComponent_Factory(t) {
    return new (t || BaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_logging_eav_logger__WEBPACK_IMPORTED_MODULE_0__.EavLogger));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: BaseComponent,
    selectors: [["app-base-component"]],
    decls: 0,
    vars: 0,
    template: function BaseComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}

/***/ }),

/***/ 85544:
/*!******************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/components/dialog-entry/dialog-entry.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogEntryComponent: () => (/* binding */ DialogEntryComponent)
/* harmony export */ });
/* harmony import */ var _helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/console-log-angular.helper */ 74230);
/* harmony import */ var _services_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/context */ 68873);
/* harmony import */ var _logging_eav_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logging/eav-logger */ 6812);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ 43176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);











const logThis = false;
const nameOfThis = 'DialogEntryComponent';
class DialogEntryComponent extends _base_component__WEBPACK_IMPORTED_MODULE_3__.BaseComponent {
  constructor(dialog, viewContainerRef, router, route, context, changeDetectorRef) {
    super(new _logging_eav_logger__WEBPACK_IMPORTED_MODULE_2__.EavLogger(nameOfThis, logThis));
    this.dialog = dialog;
    this.viewContainerRef = viewContainerRef;
    this.router = router;
    this.route = route;
    this.context = context;
    this.changeDetectorRef = changeDetectorRef;
    const navigation = this.router.getCurrentNavigation();
    this.dialogData = navigation?.extras?.state || {};
  }
  // 2dm experimental - may improve readability where this is used
  // static routeFor(dialog: DialogConfig, data?: Data): Partial<Route> {
  //   return { component: DialogEntryComponent, data: { ...data, dialog: dialog } };
  // }
  ngOnInit() {
    const dialogConfig = this.route.snapshot.data.dialog;
    if (dialogConfig == null) throw new Error(`Could not find config for dialog. Did you forget to add DialogConfig to route data?`);
    (0,_helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_0__.consoleLogDev)('Open dialog:', dialogConfig.name, 'Context id:', this.context.id, 'Context:', this.context);
    dialogConfig.getComponent().then(component => {
      // spm Workaround for "feature" where you can't open new dialog while last one is still opening
      // https://github.com/angular/components/commit/728cf1c8ebd49e089f4bae945511bb0918972c26
      const dialog = this.dialog;
      if (dialog._dialogAnimatingOpen && dialog._lastDialogRef) dialog._lastDialogRef.afterOpened().subscribe(() => this.openDialogComponent(dialogConfig, component));else this.openDialogComponent(dialogConfig, component);
    });
  }
  ngOnDestroy() {
    this.dialogRef.close();
    super.ngOnDestroy();
  }
  openDialogComponent(dialogConfig, component) {
    this.log.a(`Open dialog(initContext: ${dialogConfig.initContext})`, {
      name: dialogConfig.name,
      'Contextid:': this.context.log.svcId,
      'Context:': this.context
    });
    if (dialogConfig.initContext) this.context.init(this.route);
    this.dialogRef = this.dialog.open(component, {
      autoFocus: false,
      backdropClass: 'dialog-backdrop',
      closeOnNavigation: false,
      data: this.dialogData,
      panelClass: ['dialog-panel', `dialog-panel-${dialogConfig.panelSize}`, dialogConfig.showScrollbar ? 'show-scrollbar' : 'no-scrollbar', ...(dialogConfig.panelClass ? dialogConfig.panelClass : [])],
      // spm NOTE: position used to force align-items: flex-start; on cdk-global-overlay-wrapper.
      // Real top margin is overwritten in css e.g. dialog-panel-large
      position: {
        top: '0'
      },
      viewContainerRef: this.viewContainerRef
    });
    this.dialogRef.afterClosed().subscribe(data => {
      (0,_helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_0__.consoleLogDev)('Dialog was closed:', dialogConfig.name, 'Data:', data);
      const navRes = data;
      if (navRes?.navigateUrl != null) {
        this.router.navigate([navRes.navigateUrl]);
        return;
      }
      if (this.route.pathFromRoot.length <= 3) {
        try {
          window.parent.$2sxc.totalPopup.close();
        } catch (error) {}
        return;
      }
      if (this.route.snapshot.url.length > 0) this.router.navigate(['./'], {
        relativeTo: this.route.parent,
        state: data
      });else this.router.navigate(['./'], {
        relativeTo: this.route.parent.parent,
        state: data
      });
    });
    this.changeDetectorRef.markForCheck();
  }
  static #_ = this.ɵfac = function DialogEntryComponent_Factory(t) {
    return new (t || DialogEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_context__WEBPACK_IMPORTED_MODULE_1__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: DialogEntryComponent,
    selectors: [["app-dialog-entry"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_services_context__WEBPACK_IMPORTED_MODULE_1__.Context]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 0,
    vars: 0,
    template: function DialogEntryComponent_Template(rf, ctx) {},
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
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
};

/***/ }),

/***/ 50052:
/*!*******************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/constants/eav.constants.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditApiKeyPaths: () => (/* binding */ EditApiKeyPaths),
/* harmony export */   SystemSettingsScopes: () => (/* binding */ SystemSettingsScopes),
/* harmony export */   eavConstants: () => (/* binding */ eavConstants)
/* harmony export */ });
const MetadataKeyTypes = {
  Guid: 'guid',
  String: 'string',
  Number: 'number'
};
const SystemSettingsScopes = {
  App: 'app',
  Site: 'site'
};
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

/***/ 49417:
/*!********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/constants/guid.constants.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   guidRegex: () => (/* binding */ guidRegex)
/* harmony export */ });
/**
 * Do not reuse regex:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test#using_test_on_a_regex_with_the_global_flag
 */
function guidRegex() {
  return /^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i;
}

/***/ }),

/***/ 38172:
/*!***********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/constants/session.constants.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
const keyZoneId = prefix + 'zoneId';
const keyContentBlockId = prefix + 'cbid';
const keyModuleId = prefix + 'mid';
const keyAppId = prefix + 'appId';
const keyDebug = prefix + 'debug';
const keyDialog = prefix + 'dialog';
const keyContentType = prefix + 'contentType';
const keyItems = prefix + 'items';
const keyPartOfPage = prefix + 'partOfPage';
const keyPublishing = prefix + 'publishing';
const keyFilters = prefix + 'filters';
const keyPipelineId = prefix + 'pipelineId';
/** WIP v16.01 */
const keyEditFields = prefix + 'uifields';
/** Url which opened the dialog. Used for debugging */
const keyUrl = prefix + 'url';
/** This is used by file editor to determine if it's editing shared files or of that portal only */
const keyIsShared = prefix + 'isshared';
/** Contains extra options for dialogs */
const keyExtras = prefix + 'extras';
/** Fallback value in case it is missing in url */
const partOfPageDefault = 'false';

/***/ }),

/***/ 34601:
/*!**********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/directives/tippy.directive.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TippyDirective: () => (/* binding */ TippyDirective)
/* harmony export */ });
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tippy.js */ 34308);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);



// tslint:disable-next-line:directive-selector
class TippyDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  ngOnChanges(changes) {
    // Init Tooltip on first round
    if (this.tooltip == null) this.tooltip = (0,tippy_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.elementRef.nativeElement, {
      animation: 'scale-subtle',
      arrow: !!this.tippyArrow,
      duration: [100, 50],
      placement: 'bottom',
      theme: '2sxc',
      allowHTML: !!this.tippyAllowHtml
    });
    if (changes['tippy'] != null) this.tooltip.setContent(this.tippy);
    if (changes['tippyDisabled'] != null) this.tippyDisabled ? this.tooltip.disable() : this.tooltip.enable();
    if (changes['tippyPlacement'] != null) this.tooltip.setProps({
      placement: this.tippyPlacement
    });
    if (changes['tippyShowDelay'] != null) {
      const showDelay = typeof this.tippyShowDelay === 'number' ? this.tippyShowDelay : parseInt(this.tippyShowDelay, 10);
      this.tooltip.setProps({
        delay: [showDelay, null]
      });
    }
  }
  ngOnDestroy() {
    this.tooltip?.destroy();
  }
  static #_ = this.ɵfac = function TippyDirective_Factory(t) {
    return new (t || TippyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: TippyDirective,
    selectors: [["", "tippy", ""]],
    inputs: {
      tippy: "tippy",
      tippyDisabled: "tippyDisabled",
      tippyPlacement: "tippyPlacement",
      tippyShowDelay: "tippyShowDelay",
      tippyAllowHtml: "tippyAllowHtml",
      tippyArrow: "tippyArrow"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
  });
}

/***/ }),

/***/ 4981:
/*!*****************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/helpers/array.helpers.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayHelpers: () => (/* binding */ ArrayHelpers)
/* harmony export */ });
class ArrayHelpers {
  /**
   * Toggles an item in an array. If the item is not in the array, it is added. If it is in the array, it is removed.
   * @param item The item to toggle
   * @param array The array to toggle the item in
   */
  static toggleInArray(item, array) {
    const index = array.indexOf(item);
    if (index === -1) {
      array.push(item);
    } else {
      array.splice(index, 1);
    }
  }
}

/***/ }),

/***/ 74230:
/*!******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/helpers/console-log-angular.helper.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   consoleLogDev: () => (/* binding */ consoleLogDev),
/* harmony export */   consoleLogEditForm: () => (/* binding */ consoleLogEditForm),
/* harmony export */   consoleLogStore: () => (/* binding */ consoleLogStore),
/* harmony export */   logMain: () => (/* binding */ logMain)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 66619);

/**
 * Enable logging of different messages.
 *
 * When needed, add new keys for new "segments"
 */
const enableLogging = {
  always: true,
  dev: false,
  store: false,
  editForm: false
};
const warningNoLogShown = {};
/** Log Store changes */
function consoleLogStore(message, ...optionalParams) {
  consoleLogInternal({
    segment: 'store',
    message,
    data: optionalParams
  });
}
/** Log Form / Fields / Formulas */
function consoleLogEditForm(message, ...optionalParams) {
  consoleLogInternal({
    segment: 'editForm',
    message,
    data: optionalParams
  });
}
/** Log to Dev */
function consoleLogDev(message, ...optionalParams) {
  consoleLogInternal({
    segment: 'dev',
    message,
    data: optionalParams
  });
}
// /** Log to Dev - always active */
// export function consoleLogAlways(message?: any, ...optionalParams: any[]): void {
//   consoleLogInternal({ segment: 'always', message, data: optionalParams })
// }
/** Log to Dev lightweight (no stack) - always active */
function logMain(message, data) {
  consoleLogObject({
    segment: 'always',
    message,
    callStack: false,
    data: data
  });
}
function consoleLogInternal({
  segment,
  message,
  callStack,
  data = []
}) {
  // Skip on production
  if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) return;
  // Check if we've already logged a lot to then stop logging
  const segmentUpper = `[${segment?.toUpperCase()}]`;
  if (!enableLogging[segment]) {
    if (warningNoLogShown[segment]) return;
    console.log(`${segmentUpper}-logging disabled, no further messages will show for this segment.`);
    warningNoLogShown[segment] = true;
    return;
  }
  // Make prefix uppercase if not always
  const prefix = segment === 'always' ? '' : segmentUpper;
  // New lightweight log, without the entire trace / call stack
  if (callStack == false) {
    if (!data || data.length === 0) {
      console.log(`${prefix} ${message}`);
      return;
    }
    if (data.length === 1) {
      const show = data[0];
      const len = typeof show === 'string' ? `:${show.length}` : '';
      console.log(`${prefix} ${message} [${typeof show}${len}]`, show);
      return;
    }
    console.log(`${prefix} ${message}`, ...data);
    return;
  }
  console.groupCollapsed(`${prefix} ${message}`, ...data);
  // tslint:disable-next-line:no-console
  console.trace();
  console.groupEnd();
}
function consoleLogObject({
  segment,
  message,
  callStack,
  data = null
}) {
  // Skip on production
  if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) return;
  // Check if we've already logged a lot to then stop logging
  const segmentUpper = `[${segment?.toUpperCase()}]`;
  if (!enableLogging[segment]) {
    if (warningNoLogShown[segment]) return;
    console.log(`${segmentUpper}-logging disabled, no further messages will show for this segment.`);
    warningNoLogShown[segment] = true;
    return;
  }
  // Make prefix uppercase if not always
  const prefix = segment === 'always' ? '' : segmentUpper;
  // New lightweight log, without the entire trace / call stack
  if (callStack == false) {
    if (!data) return console.log(`${prefix} ${message}`);
    const keys = Object.keys(data);
    if (keys.length === 0) return console.log(`${prefix} ${message}`);
    if (keys.length === 1) {
      const key = keys[0];
      const show = data[key];
      if (typeof show === 'string') return console.log(`${prefix} ${message} [string:${show.length}] '${key}'='${show}'`);
      return console.log(`${prefix} ${message} [${typeof show}}] '${key}'=`, show);
    }
    console.log(`${prefix} ${message} [${keys.length} data-items]`, data);
    return;
  }
  console.groupCollapsed(`${prefix} ${message}`, data);
  // tslint:disable-next-line:no-console
  console.trace();
  console.groupEnd();
}

/***/ }),

/***/ 61576:
/*!******************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/helpers/signal.helpers.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignalHelpers: () => (/* binding */ SignalHelpers)
/* harmony export */ });
/* harmony import */ var _rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rxJs/rx.helpers */ 93826);

class SignalHelpers {
  /** Options for number signal to ensure equality only on value difference */
  static #_ = this.boolEquals = {
    equal: _rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_0__.RxHelpers.valueEquals
  };
  /** Options for string signal to ensure equality only on value difference */
  static #_2 = this.numberEquals = {
    equal: _rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_0__.RxHelpers.valueEquals
  };
  /** Options for string signal to ensure equality only on value difference */
  static #_3 = this.stringEquals = {
    equal: _rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_0__.RxHelpers.valueEquals
  }; // note: this doesn't work as expected; leaving in so nobody tries to repeat this
  // /** Options for string signal to ensure equality only on value difference */
  // static valueEquals: CreateComputedOptions<boolean | string | number> = {
  //   equal: RxHelpers.valueEquals<boolean | string | number>
  // };
  /** Options for object signal to ensure equality only on value difference */
  static #_4 = this.objectEquals = {
    equal: _rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_0__.RxHelpers.objectsEqual
  };
}
// export class SignalEquals<T>: CreateComputedOptions<T> {
//   equal: RxHelpers.objectsEqual<T>;
// }

/***/ }),

/***/ 71477:
/*!***********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/helpers/update-env-vars-from-dialog-settings.helper.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateEnvVarsFromDialogSettings: () => (/* binding */ UpdateEnvVarsFromDialogSettings)
/* harmony export */ });
/**
 * This ensures that $2sxc is fully initialized with parameters which are provided later on
 * The appApi is being added in v12
 * It's important because in Oqtane the app-api root is different in from the normal admin-apis
 */
function UpdateEnvVarsFromDialogSettings(appContext) {
  try {
    const includedApiRoot = appContext?.Api;
    if (!includedApiRoot) {
      return;
    }
    const old2sxcHeader = window.$2sxc.env.header;
    const new2sxcHeader = {
      ...old2sxcHeader,
      appApi: includedApiRoot
    };
    window.$2sxc.env.load(new2sxcHeader);
  } catch {/* ignore */}
}

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
      formUrl += GROUP_PREFIX + toOrderedParams([asGroup.Parent, asGroup.Field, asGroup.Index, asGroup.Add, asGroup.EntityId]);
      formUrl += prefill2UrlParams(asGroup.Prefill);
      formUrl += fields2UrlParams(fields);
      formUrl += obj2UrlParams(parameters, PARAM_PREFIX);
    } else if (asItem.EntityId) {
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
  return formUrl;
}
function getParamForMetadata(addItem) {
  const buildForSuffix = itemFor => toOrderedParams(['', itemFor.Target, itemFor.TargetType, itemFor.Singleton ? itemFor.Singleton.toString() : '']);
  if (addItem.For?.String) return `${VAL_SEPARATOR}for:s~` + paramEncode(addItem.For.String) + buildForSuffix(addItem.For);
  if (addItem.For?.Number) return `${VAL_SEPARATOR}for:n~` + addItem.For.Number + buildForSuffix(addItem.For);
  if (addItem.For?.Guid) return `${VAL_SEPARATOR}for:g~` + addItem.For.Guid + buildForSuffix(addItem.For);
  if (addItem.Metadata) return getParamForOldMetadata(addItem);
  return '';
}
function getParamForOldMetadata(addItem) {
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
  return `${VAL_SEPARATOR}for:` + keyType + '~' + toOrderedParams([paramEncode(addItem.Metadata.key), target, addItem.Metadata.targetType]);
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
  const form = {
    items: []
  };
  const items = formUrl.split(ITEM_SEPARATOR);
  for (const item of items) {
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
        } else {
          addParamToItemIdentifier(innerItem, option);
        }
      }
      form.items.push(innerItem);
    } else if (isNumber((item ?? '').split(VAL_SEPARATOR)[0])) {
      // Edit Item
      const parts = item.split(VAL_SEPARATOR);
      const editItem = {
        EntityId: parseInt(parts[0], 10)
      };
      for (const part of parts) {
        addParamToItemIdentifier(editItem, part);
      }
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
        } else {
          addParamToItemIdentifier(addItem, option);
        }
      }
      form.items.push(addItem);
    }
  }
  return form;
}
/** add prefill and filter to url parameters */
function addParamToItemIdentifier(item, part) {
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
    return;
  }
  // Add Item Prefill
  if (part.startsWith(PREFILL_PREFIX)) {
    item.Prefill = prefillFromUrlParams(part, item.Prefill);
    return;
  }
  // Add Item Form
  if (part.startsWith(PARAM_PREFIX)) {
    const formParams = prefillFromUrlParams(part, item.ClientData?.parameters);
    item.ClientData = {
      ...item.ClientData,
      parameters: formParams
    };
    return;
  }
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
    this.matIconRegistry.setDefaultFontSetClass('material-icons-outlined');
    Object.entries(___WEBPACK_IMPORTED_MODULE_0__.iconsFontAwesome).forEach(([name, svg]) => {
      this.matIconRegistry.addSvgIconLiteral(name, this.domSanitizer.bypassSecurityTrustHtml(svg));
    });
    // Object.entries(iconsMaterial).forEach(([name, svg]) => {
    //   this.matIconRegistry.addSvgIconLiteral(name, this.domSanitizer.bypassSecurityTrustHtml(svg));
    // });
    // 2dm: New api with object syntax
    // Object.entries(iconLib).forEach(([name, svg]) => {
    //   this.matIconRegistry.addSvgIconLiteral(name, this.domSanitizer.bypassSecurityTrustHtml(svg));
    // });
  }
  static #_ = this.ɵfac = function AppIconsService_Factory(t) {
    return new (t || AppIconsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AppIconsService,
    factory: AppIconsService.ɵfac
  });
}

/***/ }),

/***/ 37532:
/*!*******************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/icons/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iconLib: () => (/* binding */ iconLib),
/* harmony export */   icons: () => (/* binding */ icons),
/* harmony export */   iconsFontAwesome: () => (/* binding */ iconsFontAwesome),
/* harmony export */   iconsMaterial: () => (/* binding */ iconsMaterial)
/* harmony export */ });
/* harmony import */ var _raw_loader_assets_icons_code_curly_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!../../assets/icons/code-curly.svg */ 11194);
// Font-Awesome

// Material Icons
// import accountCircle from '!raw-loader!@material-design-icons/svg/outlined/account_circle.svg';
// import add from '!raw-loader!@material-design-icons/svg/outlined/add.svg';
// import addCircleOutline from '!raw-loader!@material-design-icons/svg/outlined/add_circle_outline.svg';
// import adjust from '!raw-loader!@material-design-icons/svg/outlined/adjust.svg';
// import appRegistration from '!raw-loader!@material-design-icons/svg/outlined/app_registration.svg';
// import arrowBack from '!raw-loader!@material-design-icons/svg/outlined/arrow_back.svg';
// import arrowDropDown from '!raw-loader!@material-design-icons/svg/outlined/arrow_drop_down.svg';
// import arrowDropUp from '!raw-loader!@material-design-icons/svg/outlined/arrow_drop_up.svg';
// import bolt from '!raw-loader!@material-design-icons/svg/outlined/bolt.svg';
// import bugReport from '!raw-loader!@material-design-icons/svg/outlined/bug_report.svg';
// import cached from '!raw-loader!@material-design-icons/svg/outlined/cached.svg';
// import cancel from '!raw-loader!@material-design-icons/svg/outlined/cancel.svg';
// import check from '!raw-loader!@material-design-icons/svg/outlined/check.svg';
// import checkBox from '!raw-loader!@material-design-icons/svg/outlined/check_box.svg';
// import checkBoxOutlineBlank from '!raw-loader!@material-design-icons/svg/outlined/check_box_outline_blank.svg';
// import checkCircle from '!raw-loader!@material-design-icons/svg/outlined/check_circle.svg';
// import checkCircleOutline from '!raw-loader!@material-design-icons/svg/outlined/check_circle_outline.svg';
// import circle from '!raw-loader!@material-design-icons/svg/outlined/circle.svg';
// import clear from '!raw-loader!@material-design-icons/svg/outlined/clear.svg';
// import close from '!raw-loader!@material-design-icons/svg/outlined/close.svg';
// import cloudDownload from '!raw-loader!@material-design-icons/svg/outlined/cloud_download.svg';
// import cloudUpload from '!raw-loader!@material-design-icons/svg/outlined/cloud_upload.svg';
// import code from '!raw-loader!@material-design-icons/svg/outlined/code.svg';
// import copy from '!raw-loader!@material-design-icons/svg/outlined/content_copy.svg';
// import cropFree from '!raw-loader!@material-design-icons/svg/outlined/crop_free.svg';
// import deleteIcon from '!raw-loader!@material-design-icons/svg/outlined/delete.svg';
// import deviceUnknown from '!raw-loader!@material-design-icons/svg/outlined/device_unknown.svg';
// import dialpad from '!raw-loader!@material-design-icons/svg/outlined/dialpad.svg';
// import dns from '!raw-loader!@material-design-icons/svg/outlined/dns.svg';
// import done from '!raw-loader!@material-design-icons/svg/outlined/done.svg';
// import doneAll from '!raw-loader!@material-design-icons/svg/outlined/done_all.svg';
// import downloadForOffline from '!raw-loader!@material-design-icons/svg/outlined/download_for_offline.svg';
// import dragHandle from '!raw-loader!@material-design-icons/svg/outlined/drag_handle.svg';
// import edit from '!raw-loader!@material-design-icons/svg/outlined/edit.svg';
// import editAttributes from '!raw-loader!@material-design-icons/svg/outlined/edit_attributes.svg';
// import emojiObjects from '!raw-loader!@material-design-icons/svg/outlined/emoji_objects.svg';
// import extension from '!raw-loader!@material-design-icons/svg/outlined/extension.svg';
// import fiberManualRecord from '!raw-loader!@material-design-icons/svg/outlined/fiber_manual_record.svg';
// import fileCopy from '!raw-loader!@material-design-icons/svg/outlined/file_copy.svg';
// import filterIcon from '!raw-loader!@material-design-icons/svg/outlined/filter.svg';
// import filterCenterFocus from '!raw-loader!@material-design-icons/svg/outlined/filter_center_focus.svg';
// import filterList from '!raw-loader!@material-design-icons/svg/outlined/filter_list.svg';
// import findInPage from '!raw-loader!@material-design-icons/svg/outlined/find_in_page.svg';
// import formatListNumbered from '!raw-loader!@material-design-icons/svg/outlined/format_list_numbered.svg';
// import foundation from '!raw-loader!@material-design-icons/svg/outlined/foundation.svg';
// import functions from '!raw-loader!@material-design-icons/svg/outlined/functions.svg';
// import help from '!raw-loader!@material-design-icons/svg/outlined/help.svg';
// import helpOutline from '!raw-loader!@material-design-icons/svg/outlined/help_outline.svg';
// import history from '!raw-loader!@material-design-icons/svg/outlined/history.svg';
// import historyToggleOff from '!raw-loader!@material-design-icons/svg/outlined/history_toggle_off.svg';
// import holidayVillage from '!raw-loader!@material-design-icons/svg/outlined/holiday_village.svg';
// import importExport from '!raw-loader!@material-design-icons/svg/outlined/import_export.svg';
// import info from '!raw-loader!@material-design-icons/svg/outlined/info.svg';
// import keyboardArrowDown from '!raw-loader!@material-design-icons/svg/outlined/keyboard_arrow_down.svg';
// import keyboardArrowRight from '!raw-loader!@material-design-icons/svg/outlined/keyboard_arrow_right.svg';
// import keyboardArrowUp from '!raw-loader!@material-design-icons/svg/outlined/keyboard_arrow_up.svg';
// import language from '!raw-loader!@material-design-icons/svg/outlined/language.svg';
// import layers from '!raw-loader!@material-design-icons/svg/outlined/layers.svg';
// import link from '!raw-loader!@material-design-icons/svg/outlined/link.svg';
// import localOffer from '!raw-loader!@material-design-icons/svg/outlined/local_offer.svg';
// import lock from '!raw-loader!@material-design-icons/svg/outlined/lock.svg';
// import lockOpen from '!raw-loader!@material-design-icons/svg/outlined/lock_open.svg';
// import looksOne from '!raw-loader!@material-design-icons/svg/outlined/looks_one.svg';
// import loyalty from '!raw-loader!@material-design-icons/svg/outlined/loyalty.svg';
// import manageSearch from '!raw-loader!@material-design-icons/svg/outlined/manage_search.svg';
// import menu from '!raw-loader!@material-design-icons/svg/outlined/menu.svg';
// import menuBook from '!raw-loader!@material-design-icons/svg/outlined/menu_book.svg';
// import militaryTech from '!raw-loader!@material-design-icons/svg/outlined/military_tech.svg';
// import mobiledataOff from '!raw-loader!@material-design-icons/svg/outlined/mobiledata_off.svg';
// import moreHoriz from '!raw-loader!@material-design-icons/svg/outlined/more_horiz.svg';
// import moreTime from '!raw-loader!@material-design-icons/svg/outlined/more_time.svg';
// import moreVert from '!raw-loader!@material-design-icons/svg/outlined/more_vert.svg';
// import offlineBolt from '!raw-loader!@material-design-icons/svg/outlined/offline_bolt.svg';
// import openInNew from '!raw-loader!@material-design-icons/svg/outlined/open_in_new.svg';
// import permDeviceInformation from '!raw-loader!@material-design-icons/svg/outlined/perm_device_information.svg';
// import person from '!raw-loader!@material-design-icons/svg/outlined/person.svg';
// import playArrow from '!raw-loader!@material-design-icons/svg/outlined/play_arrow.svg';
// import publicIcon from '!raw-loader!@material-design-icons/svg/outlined/public.svg';
// import redeem from '!raw-loader!@material-design-icons/svg/outlined/redeem.svg';
// import restore from '!raw-loader!@material-design-icons/svg/outlined/restore.svg';
// import save from '!raw-loader!@material-design-icons/svg/outlined/save.svg';
// import search from '!raw-loader!@material-design-icons/svg/outlined/search.svg';
// import settings from '!raw-loader!@material-design-icons/svg/outlined/settings.svg';
// import settingsApplications from '!raw-loader!@material-design-icons/svg/outlined/settings_applications.svg';
// import share from '!raw-loader!@material-design-icons/svg/outlined/share.svg';
// import sort from '!raw-loader!@material-design-icons/svg/outlined/sort.svg';
// import speed from '!raw-loader!@material-design-icons/svg/outlined/speed.svg';
// import star from '!raw-loader!@material-design-icons/svg/outlined/star.svg';
// import starBorder from '!raw-loader!@material-design-icons/svg/outlined/star_border.svg';
// import starOutline from '!raw-loader!@material-design-icons/svg/outlined/star_outline.svg';
// import stickyNote2 from '!raw-loader!@material-design-icons/svg/outlined/sticky_note_2.svg';
// import textFields from '!raw-loader!@material-design-icons/svg/outlined/text_fields.svg';
// import today from '!raw-loader!@material-design-icons/svg/outlined/today.svg';
// import toggleOn from '!raw-loader!@material-design-icons/svg/outlined/toggle_on.svg';
// import translate from '!raw-loader!@material-design-icons/svg/outlined/translate.svg';
// import tune from '!raw-loader!@material-design-icons/svg/outlined/tune.svg';
// import visibility from '!raw-loader!@material-design-icons/svg/outlined/visibility.svg';
// import visibilityOff from '!raw-loader!@material-design-icons/svg/outlined/visibility_off.svg';
// import warning from '!raw-loader!@material-design-icons/svg/outlined/warning.svg';
// import warningOutline from '!raw-loader!@material-design-icons/svg/outlined/warning_amber.svg';
// import wavingHand from '!raw-loader!@material-design-icons/svg/outlined/waving_hand.svg';
// TODO: @SDV
// This isn't quite done yet
// Problem: it's easy to
// - mis-type the icon name in code
// - easy to miss when an icon isn't actually used any more, because all references are strings
//
// Solution
// - Create an object with all the icon names - see export `icons`
// - always use that to reference the names
// - it's ok if the names are then not kebab-case, we can use warningOutline for example, because we always use the constant to reference it
//
// TODO: to finish
// 1. Move all icons to the icons-lib
// 2. change all references to use that constant
const iconsMaterial = {
  // 'account-circle': accountCircle,
  // add,
  // 'add-circle-outline': addCircleOutline,
  // adjust,
  // // warning: was app-regostration before!
  // 'app-registration': appRegistration,
  // 'arrow-back': arrowBack,
  // 'arrow-drop-down': arrowDropDown,
  // 'arrow-drop-up': arrowDropUp,
  // bolt,
  // 'bug-report': bugReport,
  // cached,
  // cancel,
  // check,
  // 'check-box': checkBox,
  // 'check-box-outline-blank': checkBoxOutlineBlank,
  // 'check-circle': checkCircle,
  // 'check-circle-outline': checkCircleOutline,
  // circle,
  // clear,
  // close,
  // 'cloud-download': cloudDownload,
  // 'cloud-upload': cloudUpload,
  // code,
  // 'crop-free': cropFree,
  // // tslint:disable-next-line: object-literal-key-quotes
  // 'delete': deleteIcon,
  // 'device-unknown': deviceUnknown,
  // dialpad,
  // dns,
  // 'done-all': doneAll,
  // done,
  // 'download-for-offline': downloadForOffline,
  // 'drag-handle': dragHandle,
  // edit,
  // 'edit-attributes': editAttributes,
  // 'emoji-objects': emojiObjects,
  // extension,
  // 'fiber-manual-record': fiberManualRecord,
  // 'file-copy': fileCopy,
  // filter: filterIcon,
  // 'filter-center-focus': filterCenterFocus,
  // 'filter-list': filterList,
  // 'find-in-page': findInPage,
  // 'format-list-numbered': formatListNumbered,
  // foundation,
  // functions,
  // help,
  // 'help-outline': helpOutline,
  // history,
  // 'history-toggle-off': historyToggleOff,
  // 'holiday-village': holidayVillage,
  // 'import-export': importExport,
  // info,
  // 'keyboard-arrow-down': keyboardArrowDown,
  // 'keyboard-arrow-right': keyboardArrowRight,
  // 'keyboard-arrow-up': keyboardArrowUp,
  // language,
  // layers,
  // link,
  // 'local-offer': localOffer,
  // 'looks-one': looksOne,
  // lock,
  // 'lock-open': lockOpen,
  // loyalty,
  // 'manage-search': manageSearch,
  // 'menu-book': menuBook,
  // menu,
  // 'military-tech': militaryTech,
  // 'mobiledata-off': mobiledataOff,
  // 'more-horiz': moreHoriz,
  // 'more-time': moreTime,
  // 'more-vert': moreVert,
  // 'offline-bolt': offlineBolt,
  // 'open-in-new': openInNew,
  // 'perm-device-information': permDeviceInformation,
  // person,
  // 'play-arrow': playArrow,
  // // tslint:disable-next-line: object-literal-key-quotes
  // 'public': publicIcon,
  // redeem,
  // restore,
  // save,
  // search,
  // settings,
  // 'settings-applications': settingsApplications,
  // share,
  // sort,
  // speed,
  // star,
  // 'star-border': starBorder,
  // 'star-outline': starOutline,
  // 'sticky-note-2': stickyNote2,
  // 'visibility-off': visibilityOff,
  // 'text-fields': textFields,
  // today,
  // 'toggle-on': toggleOn,
  // translate,
  // tune,
  // visibility,
  // warning,
  // 'waving-hand': wavingHand,
};
// 2dm: New object based icon-library
// to improve constant use of icon names
const iconLib = {
  // copy,
  // note: stickyNote2,
  // starBorder,
  // warning,
  // warningOutline,
};
/**
 * Icon names object - to use icon-names as constants across code
 * and therefore ensure that we don't mistype the icon names
 */
const icons = Object.keys(iconLib).reduce((a, v) => ({
  ...a,
  [v]: v
}), {});
const iconsFontAwesome = {
  'code-curly': _raw_loader_assets_icons_code_curly_svg__WEBPACK_IMPORTED_MODULE_0__["default"]
};
// console.warn('test 2dm');
// console.log('icon:', icons.note, icons.warning, icons.warningOutline);

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
  static #_ = this.ɵfac = function HandleErrorsInterceptor_Factory(t) {
    return new (t || HandleErrorsInterceptor)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: HandleErrorsInterceptor,
    factory: HandleErrorsInterceptor.ɵfac
  });
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
  static #_ = this.ɵfac = function SetHeadersInterceptor_Factory(t) {
    return new (t || SetHeadersInterceptor)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SetHeadersInterceptor,
    factory: SetHeadersInterceptor.ɵfac
  });
}

/***/ }),

/***/ 49357:
/*!*****************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/logging/eav-logger-fn.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EavLoggerFn: () => (/* binding */ EavLoggerFn)
/* harmony export */ });
/* harmony import */ var _helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/console-log-angular.helper */ 74230);

class EavLoggerFn {
  constructor(parent, fnName, message, data) {
    this.parent = parent;
    this.fnName = fnName;
    this.parent.a(fnName + '() ' + (message ?? ''), data);
  }
  values(data, intro) {
    if (!data) return;
    if (!this.parent.enabled) return;
    intro = intro ? ` ${intro} ` : '';
    (0,_helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_0__.logMain)(`[${this.parent.nameWithSvcId}.${this.fnName}()] ${intro} values:`, data);
  }
  a(message, data) {
    this.parent.a(`${this.fnName}/${message}`, data);
  }
  /** Return */
  r(value, message) {
    this.parent.a(`${this.fnName}/return${message ? ' ' + message : ''}`, {
      result: value
    });
    return value;
  }
  rNull(message) {
    this.parent.a(`${this.fnName}/return NULL ${message}`);
    return null;
  }
  /** End without return */
  end(data, message) {
    this.parent.a(`${this.fnName}/end${message ? ' ' + message : ''}`, data);
  }
}

/***/ }),

/***/ 6812:
/*!**************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/logging/eav-logger.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EavLogger: () => (/* binding */ EavLogger)
/* harmony export */ });
/* harmony import */ var _helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/console-log-angular.helper */ 74230);
/* harmony import */ var _eav_logger_fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eav-logger-fn */ 49357);
/* harmony import */ var _rx_debug_dbg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rx-debug-dbg */ 41901);



class EavLogger {
  constructor(name, enabled, enableChildren) {
    this.name = name;
    this.enabled = enabled;
    /** Special random ID to identify a specific service and detect reuse or separate instances  */
    this.svcId = Math.random().toString(36).substring(7);
    this.enableChildren = enableChildren ?? false;
    this.nameWithSvcId = `${name}-${this.svcId}`;
  }
  rename(name) {
    this.name = name;
    this.nameWithSvcId = `${name}-${this.svcId}`;
  }
  inherit(parent) {
    this.enabled = this.enabled || parent.enabled;
    // if this results in log enabled, inform the console.
    // otherwise it's really hard to find out why a log is on
    if (parent.enabled) this.a(`Enabled: Inheriting log settings from parent ${parent.nameWithSvcId}`);
  }
  /**
   * Special 'a' = add log helper to better diagnose what is happening
   */
  a(message, data) {
    if (!this.enabled) return;
    (0,_helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_0__.logMain)(`[${this.nameWithSvcId}] ${message}`, data);
  }
  /** Create a special logger for rx logging */
  rxTap(name, {
    enabled = true,
    jsonify = true
  } = {
    enabled: true,
    jsonify: true
  }) {
    return new _rx_debug_dbg__WEBPACK_IMPORTED_MODULE_2__.RxTapDebug(this, name, enabled, jsonify);
  }
  val(name, value) {
    if (!this.enabled) return;
    (0,_helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_0__.logMain)(`[${this.nameWithSvcId}] value of ${name}:`, {
      value
    });
  }
  values(data) {
    if (!this.enabled) return;
    (0,_helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_0__.logMain)(`[${this.nameWithSvcId}] values:`, data);
  }
  fn(name, data, message) {
    return new _eav_logger_fn__WEBPACK_IMPORTED_MODULE_1__.EavLoggerFn(this, name, message, data);
  }
  /**
   * Create a logger function that will only log if the condition is true
   */
  fnCond(condition, name, data, message) {
    // create real logger if condition is true, or if this logger is disabled anyhow
    return condition || !this.enabled ? this.fn(name, data, message) : new EavLogger('noop', false).fn('noop', {
      condition
    });
  }
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

/***/ 45519:
/*!*****************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/models/language.model.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 93826:
/*!***********************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/rxJs/rx.helpers.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RxHelpers: () => (/* binding */ RxHelpers)
/* harmony export */ });
class RxHelpers {
  static boolEquals(x, y) {
    return x === y;
  }
  static stringEquals(x, y) {
    return x === y;
  }
  static valueEquals(x, y) {
    return x === y;
  }
  static manyEquals(x, y) {
    if (x == null || y == null) return x === y;
    const typeOfX = typeof x;
    if (typeOfX !== typeof y) return false;
    if (typeOfX === 'string' || typeOfX === 'number' || typeOfX === 'boolean') return x === y;
    if (Array.isArray(x)) return RxHelpers.arraysEqual(x, y);
    return RxHelpers.objectsEqual(x, y);
  }
  static objectsEqual(x, y) {
    if (x == null || y == null) return x === y;
    const obj1 = x;
    const obj2 = y;
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    const equal = keys1.every(key1 => {
      if (!obj2.hasOwnProperty(key1)) return false;
      return obj1[key1] === obj2[key1];
    });
    return equal;
  }
  static arraysEqual(x, y) {
    if (x == null || y == null) return x === y;
    if (x.length !== y.length) return false;
    const equal = x.every((item, index) => {
      return x[index] === y[index];
    });
    return equal;
  }
  /** used as .filter(distinct), filters array to only have distinct values */
  static distinct(value, index, array) {
    return array.indexOf(value) === index;
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
/* harmony import */ var _helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/console-log-angular.helper */ 74230);
/* harmony import */ var _service_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-base */ 4979);
/* harmony import */ var _logging_eav_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logging/eav-logger */ 6812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);





const logThis = false;
const nameOfThis = 'RouteContext';
/**
 * Context is used to display information about the current app in various depths.
 * In other words, if you open another app in a deeper dialog in the app on Apps Management
 * (the component is deeper), you get the information from this app and not the initial app.
 */
class Context extends _service_base__WEBPACK_IMPORTED_MODULE_2__.ServiceBase {
  constructor(parentContext) {
    super(new _logging_eav_logger__WEBPACK_IMPORTED_MODULE_3__.EavLogger(nameOfThis, logThis));
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
    (0,_helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_1__.consoleLogDev)('Context.constructor', this);
  }
  /** The current Zone ID */
  get zoneId() {
    return this._zoneId || (this._zoneId = this.routeNum(_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.keyZoneId) || this.parent?.zoneId);
  }
  /** The current App ID */
  get appId() {
    return this._appId != null ? this._appId : this._appId = this.routeNum(_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.keyAppId) || this.parent?.appId;
  }
  /** Tab Id is global */
  get tabId() {
    return window.$2sxc.env.page();
  }
  /** Content Block Id is global */
  get contentBlockId() {
    return this._contentBlockId || (this._contentBlockId = this.routeNum(_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.keyContentBlockId) || this.parent?.contentBlockId);
  }
  /** Module Id is global */
  get moduleId() {
    return this._moduleId || (this._moduleId = this.routeNum(_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.keyModuleId) || this.parent?.moduleId);
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
    const l = this.log.fn(`init - previously ready: '${this.ready}'`, {
      route
    });
    // New prevent-multiple-init checks 2dm 2024-07-01
    if (this.ready) return l.r(this, 'Already ready, skipping init');
    this.routeSnapshot = route?.snapshot;
    this.clearCachedValues();
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
    const l = this.log.fn('initRoot');
    this._zoneId = this.sessionNumber(_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.keyZoneId);
    this._contentBlockId = this.sessionNumber(_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.keyContentBlockId);
    this._moduleId = this.sessionNumber(_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.keyModuleId);
    this._appId = this.sessionNumber(_constants_session_constants__WEBPACK_IMPORTED_MODULE_0__.keyAppId);
    if (!this._zoneId) throw new Error('Context is missing some of the required parameters');
    this.ready = true;
    l.r(this);
  }
  sessionNumber(name) {
    const result = sessionStorage.getItem(name);
    if (result === null) return null;
    const num = parseInt(result, 10);
    return isNaN(num) ? null : num;
  }
  /**
   * Get a number from the route, or optionally its parents.
   * Returns value in route or null
   */
  routeNum(name) {
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
  clearCachedValues() {
    this._zoneId = null;
    this._appId = null;
    this._contentBlockId = null;
    this._moduleId = null;
  }
  static #_ = this.ɵfac = function Context_Factory(t) {
    return new (t || Context)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](Context, 12));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: Context,
    factory: Context.ɵfac
  });
}

/***/ }),

/***/ 44858:
/*!*********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/services/features.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeaturesService: () => (/* binding */ FeaturesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 56042);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-base */ 4979);
/* harmony import */ var _logging_eav_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logging/eav-logger */ 6812);
/* harmony import */ var _helpers_signal_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/signal.helpers */ 61576);
/* harmony import */ var _rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rxJs/rx.helpers */ 93826);







const logThis = false;
/**
 * Singleton Service to provide information about enabled/disabled features.
 *
 * It currently has a strange architecture, since it's singleton,
 * but needs context data.
 * So the AppDialogConfigService seems to call the loadFromService.
 * TODO: 2dm: I don't like this, should rethink the architecture, feels a bit flaky.
 */
class FeaturesService extends _service_base__WEBPACK_IMPORTED_MODULE_0__.ServiceBase {
  constructor() {
    super(new _logging_eav_logger__WEBPACK_IMPORTED_MODULE_1__.EavLogger('FeaturesService', logThis));
    // new 2dm WIP
    // Provide context information and ensure that previously added data is always available
    this.dialogContext$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.ReplaySubject(1);
    this.dialogContextSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)(null);
  }
  loadFromService(configService) {
    configService.getCurrent$().subscribe(ds => this.load(ds.Context));
  }
  load(dialogContext) {
    // new 2dm WIP
    this.dialogContext$.next(dialogContext);
    this.dialogContextSignal.set(dialogContext);
  }
  getAll() {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.computed)(() => this.dialogContextSignal()?.Features ?? [], {
      equal: _rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_3__.RxHelpers.arraysEqual
    });
  }
  // new 2dm WIP
  get$(featureNameId) {
    return this.dialogContext$.pipe(
    // tap(f => console.log('2dm', f, featureNameId)),
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(dc => dc?.Features.find(f => f.nameId === featureNameId)));
  }
  getSignal(featureNameId) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.computed)(() => this.dialogContextSignal()?.Features.find(f => f.nameId === featureNameId), {
      equal: _rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_3__.RxHelpers.objectsEqual
    });
  }
  // TODO: @2dg please try to change all to use the new signal variant below
  isEnabled$(nameId) {
    return this.get$(nameId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(f => f?.isEnabled ?? false));
  }
  isEnabled(nameId) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.computed)(() => this.dialogContextSignal()?.Features.find(f => f.nameId === nameId)?.isEnabled ?? false, _helpers_signal_helpers__WEBPACK_IMPORTED_MODULE_2__.SignalHelpers.boolEquals);
  }
  static #_ = this.ɵfac = function FeaturesService_Factory(t) {
    return new (t || FeaturesService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: FeaturesService,
    factory: FeaturesService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 12987:
/*!****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/services/getting-started.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppInstallSettingsService: () => (/* binding */ AppInstallSettingsService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 46443);





// copied from 2sxc-ui app/installer
class AppInstallSettingsService {
  constructor(http) {
    this.http = http;
    this.installSettingsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.settings$ = this.installSettingsSubject.asObservable();
    const ready$ = this.settings$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.startWith)(false));
    ready$.subscribe();
  }
  loadGettingStarted(isContentApp) {
    this.http.get(`sys/install/InstallSettings?isContentApp=${isContentApp}`).subscribe(json => this.installSettingsSubject.next(json));
  }
  static #_ = this.ɵfac = function AppInstallSettingsService_Factory(t) {
    return new (t || AppInstallSettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AppInstallSettingsService,
    factory: AppInstallSettingsService.ɵfac
  });
}

/***/ }),

/***/ 14147:
/*!**********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/services/installer.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstallerService: () => (/* binding */ InstallerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);





// copied from 2sxc-ui app/installer
class InstallerService {
  constructor(http) {
    this.http = http;
  }
  installPackages(packages, step) {
    return packages.reduce((t, c) => t.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.switchMap)(() => {
      if (!c.url) return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(true);
      step(c);
      return this.http.post(`sys/install/RemotePackage?packageUrl=${c.url}`, {});
    })), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(true));
  }
  static #_ = this.ɵfac = function InstallerService_Factory(t) {
    return new (t || InstallerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: InstallerService,
    factory: InstallerService.ɵfac
  });
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

/** Base class for services, with logging */
class ServiceBase {
  constructor(log) {
    this.log = log;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subscription();
  }
  destroy() {
    this.subscriptions.unsubscribe();
  }
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

/***/ 66619:
/*!*********************************************************!*\
  !*** ./projects/eav-ui/src/environments/environment.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --configuration production` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

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

/***/ }),

/***/ 89554:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/eav-ui/src/app/edit/assets/icons/2sxc/Material-Icon-Adam-48-filled.svg ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\">\r\n<style type=\"text/css\">\r\n\t.st0{display:none;}\r\n\t.st1{display:inline;}\r\n</style>\r\n<g id=\"Layer_1\">\r\n\t<path d=\"M32,4c-6,0-10,4-10,10C28,14,32,10,32,4z\"/>\r\n</g>\r\n<g id=\"Layer_3\" class=\"st0\">\r\n</g>\r\n<g id=\"Icon\">\r\n\t<path d=\"M32,16c-4,0-8,2.06-8,2.06S20,16,16,16c-6,0-10,4.01-10,9.47C6,34.74,12,44,18,44c2,0,4-1.85,6-1.85S28,44,30,44\r\n\t\tc6,0,12-9.26,12-18.53C42,20.01,38,16,32,16L32,16z\"/>\r\n</g>\r\n</svg>\r\n");

/***/ }),

/***/ 52976:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/eav-ui/src/app/edit/assets/icons/2sxc/Material-Icon-Adam-48-outlined.svg ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\">\r\n<style type=\"text/css\">\r\n\t.st0{display:none;}\r\n\t.st1{display:inline;}\r\n</style>\r\n<g id=\"Layer_1\">\r\n\t<path d=\"M32,4c-6,0-10,4-10,10C28,14,32,10,32,4z\"/>\r\n</g>\r\n<g id=\"Layer_3\" class=\"st0\">\r\n</g>\r\n<g id=\"Icon\">\r\n\t<path d=\"M32,20c3.7,0,6,2.1,6,5.47C38,33.21,33.01,40,30.06,40c-0.25-0.04-0.93-0.35-1.38-0.56c-1.25-0.58-2.8-1.3-4.68-1.3\r\n\t\ts-3.43,0.72-4.68,1.3C18.87,39.65,18.19,39.97,18,40c-3.01,0-8-6.79-8-14.53C10,22.1,12.3,20,16,20c2.44,0,5.29,1.17,6.17,1.62\r\n\t\tL24,22.56l1.83-0.94C26.64,21.2,29.53,20,32,20 M32,16c-4,0-8,2.06-8,2.06S20,16,16,16c-6,0-10,4.01-10,9.47C6,34.74,12,44,18,44\r\n\t\tc2,0,4-1.85,6-1.85S28,44,30,44c6,0,12-9.26,12-18.53C42,20.01,38,16,32,16L32,16z\"/>\r\n</g>\r\n</svg>\r\n");

/***/ }),

/***/ 43126:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/eav-ui/src/app/edit/assets/icons/font-awesome/draft-branch.svg ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 39.2 28.2 71.8 65.5 78.7-.8 17.2-5 30.4-12.7 40-17.5 21.8-53.1 25.2-90.7 28.7-28.2 2.6-57.4 5.4-80.4 16.9-3.4 1.7-6.7 3.6-9.7 5.7V158.4c36.5-7.4 64-39.7 64-78.4 0-44.2-35.8-80-80-80S0 35.8 0 80c0 38.7 27.5 71 64 78.4v195.2C27.5 361 0 393.3 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-36.9-24.9-67.9-58.9-77.2 5-9.6 12.3-14.6 19-18 17.5-8.8 42.5-11.2 68.9-13.7 42.6-4 86.7-8.1 112.7-40.5 12.4-15.5 19-35.5 19.8-60.7C357.3 214 384 182.1 384 144zM32 80c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm96 352c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-26.4 21.4-47.9 47.8-48h.6c26.3.2 47.6 21.7 47.6 48zm187.8-241.5L304 192c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48c0 22.4-15.4 41.2-36.2 46.5z\"/></svg>");

/***/ }),

/***/ 49579:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/eav-ui/src/app/edit/assets/icons/font-awesome/file-archive.svg ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M128 96v32h32V96zm65.9 169.6c-1.1-5.6-6-9.6-11.8-9.6H160v-32h-32v32l-19.4 97.2c-6.5 32.5 18.3 62.8 51.4 62.8s57.9-30.3 51.4-62.8zm-33.6 124.5c-17.9 0-32.4-12.1-32.4-27s14.5-27 32.4-27 32.4 12.1 32.4 27-14.5 27-32.4 27zM128 160v32h32v-32zm64-96h-32v32h32zm177.9 33.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 32.5c2.8.7 5.4 2.1 7.4 4.2l83.9 83.9c2 2 3.5 4.6 4.2 7.4H256zM352 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h79.7v32h32V32H224v104c0 13.3 10.7 24 24 24h104zM192 192h-32v32h32zm0-64h-32v32h32z\"/></svg>");

/***/ }),

/***/ 73095:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/eav-ui/src/app/edit/assets/icons/font-awesome/file-audio.svg ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-77.6-66.6c38.5-26 61.6-69.3 61.6-115.7 0-24.7-6.5-48.9-18.9-70.1-12-20.6-29.1-37.8-49.6-50-7.1-4.2-16.3-1.9-20.6 5.2-4.2 7.1-1.9 16.3 5.2 20.6 33.1 19.7 53.7 55.8 53.7 94.3 0 36.5-18.1 70.4-48.3 90.9-6.9 4.6-8.7 14-4 20.8 2.9 4.3 7.6 6.6 12.4 6.6 3.1 0 6-.8 8.5-2.6zm-26.6-38.3c26-17.3 41.5-46.2 41.5-77.4 0-32.9-17.7-63.7-46.2-80.3-7.2-4.2-16.3-1.7-20.5 5.4-4.2 7.2-1.7 16.3 5.4 20.5 19.3 11.2 31.3 32 31.3 54.3 0 21.1-10.5 40.7-28.1 52.4-6.9 4.6-8.8 13.9-4.2 20.8 2.9 4.4 7.7 6.7 12.5 6.7 2.8.1 5.7-.7 8.3-2.4zm-27-38.2c13.7-8.5 21.8-23.1 21.8-39.2 0-17-9.3-32.5-24.2-40.6-7.3-3.9-16.4-1.2-20.3 6.1-3.9 7.3-1.2 16.4 6.1 20.3 5.2 2.8 8.5 8.3 8.5 14.2 0 5.6-2.9 10.8-7.6 13.7-7 4.4-9.2 13.6-4.8 20.7 2.8 4.6 7.7 7.1 12.8 7.1 2.5 0 5.2-.7 7.7-2.3zM138 266.7v74.7L112 322H94v-36h18l26-19.3m17.9-50.7c-2.9 0-6 1.1-8.4 3.5L104 256H76c-6.6 0-12 5.4-12 12v72c0 6.6 5.4 12 12 12h28l43.5 36.5c2.4 2.4 5.4 3.5 8.4 3.5 6.2 0 12.1-4.8 12.1-12V228c0-7.2-5.9-12-12.1-12z\"/></svg>");

/***/ }),

/***/ 21104:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/eav-ui/src/app/edit/assets/icons/font-awesome/file-code.svg ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M369.941 97.941l-83.882-83.882A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zm-22.627 22.628a15.89 15.89 0 0 1 4.195 7.431H256V32.491a15.88 15.88 0 0 1 7.431 4.195l83.883 83.883zM336 480H48c-8.837 0-16-7.163-16-16V48c0-8.837 7.163-16 16-16h176v104c0 13.255 10.745 24 24 24h104v304c0 8.837-7.163 16-16 16zm-161.471-67.404l-25.928-7.527a5.1 5.1 0 0 1-3.476-6.32l58.027-199.869a5.1 5.1 0 0 1 6.32-3.476l25.927 7.527a5.1 5.1 0 0 1 3.476 6.32L180.849 409.12a5.1 5.1 0 0 1-6.32 3.476zm-48.446-47.674l18.492-19.724a5.101 5.101 0 0 0-.351-7.317L105.725 304l38.498-33.881a5.1 5.1 0 0 0 .351-7.317l-18.492-19.724a5.1 5.1 0 0 0-7.209-.233L57.61 300.279a5.1 5.1 0 0 0 0 7.441l61.263 57.434a5.1 5.1 0 0 0 7.21-.232zm139.043.232l61.262-57.434a5.1 5.1 0 0 0 0-7.441l-61.262-57.434a5.1 5.1 0 0 0-7.209.233l-18.492 19.724a5.101 5.101 0 0 0 .351 7.317L278.275 304l-38.499 33.881a5.1 5.1 0 0 0-.351 7.317l18.492 19.724a5.1 5.1 0 0 0 7.209.232z\"/></svg>");

/***/ }),

/***/ 22116:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/eav-ui/src/app/edit/assets/icons/font-awesome/file-excel.svg ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zM211.7 308l50.5-81.8c4.8-8-.9-18.2-10.3-18.2h-4.1c-4.1 0-7.9 2.1-10.1 5.5-31 48.5-36.4 53.5-45.7 74.5-17.2-32.2-8.4-16-45.8-74.5-2.2-3.4-6-5.5-10.1-5.5H132c-9.4 0-15.1 10.3-10.2 18.2L173 308l-59.1 89.5c-5.1 8 .6 18.5 10.1 18.5h3.5c4.1 0 7.9-2.1 10.1-5.5 37.2-58 45.3-62.5 54.4-82.5 31.5 56.7 44.3 67.2 54.4 82.6 2.2 3.4 6 5.4 10 5.4h3.6c9.5 0 15.2-10.4 10.1-18.4L211.7 308z\"/></svg>");

/***/ }),

/***/ 81754:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/eav-ui/src/app/edit/assets/icons/font-awesome/file-image.svg ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M159 336l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0l-39 39L63 448h256V304l-55.5-55.5c-4.7-4.7-12.3-4.7-17 0L159 336zm96-50.7l32 32V416H95.1l.3-67.2 15.6-15.6 48 48c20.3-20.3 77.7-77.6 96-95.9zM127 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm0-96c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm242.9-62.1L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5zM352 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304z\"/></svg>");

/***/ }),

/***/ 64187:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/eav-ui/src/app/edit/assets/icons/font-awesome/file-pdf.svg ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-22-171.2c-13.5-13.3-55-9.2-73.7-6.7-21.2-12.8-35.2-30.4-45.1-56.6 4.3-18 12-47.2 6.4-64.9-4.4-28.1-39.7-24.7-44.6-6.8-5 18.3-.3 44.4 8.4 77.8-11.9 28.4-29.7 66.9-42.1 88.6-20.8 10.7-54.1 29.3-58.8 52.4-3.5 16.8 22.9 39.4 53.1 6.4 9.1-9.9 19.3-24.8 31.3-45.5 26.7-8.8 56.1-19.8 82-24 21.9 12 47.6 19.9 64.6 19.9 27.7.1 28.9-30.2 18.5-40.6zm-229.2 89c5.9-15.9 28.6-34.4 35.5-40.8-22.1 35.3-35.5 41.5-35.5 40.8zM180 175.5c8.7 0 7.8 37.5 2.1 47.6-5.2-16.3-5-47.6-2.1-47.6zm-28.4 159.3c11.3-19.8 21-43.2 28.8-63.7 9.7 17.7 22.1 31.7 35.1 41.5-24.3 4.7-45.4 15.1-63.9 22.2zm153.4-5.9s-5.8 7-43.5-9.1c41-3 47.7 6.4 43.5 9.1z\"/></svg>");

/***/ }),

/***/ 2700:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/eav-ui/src/app/edit/assets/icons/font-awesome/file-powerpoint.svg ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zM204.3 208H140c-6.6 0-12 5.4-12 12v184c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12v-60.4h44.3c38.7 0 67.7-27.3 67.7-69 0-38.6-23.8-66.6-67.7-66.6zm26 97.7c-7.5 7.6-17.8 11.4-31 11.4H160V233h39.7c12.9 0 23.1 3.7 30.6 11.1 15.3 15.1 15 46.5 0 61.6z\"/></svg>");

/***/ }),

/***/ 1046:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/eav-ui/src/app/edit/assets/icons/font-awesome/file-text.svg ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-48-244v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12z\"/></svg>");

/***/ }),

/***/ 55560:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/eav-ui/src/app/edit/assets/icons/font-awesome/file-video.svg ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M224 280.593C224 267.01 212.989 256 199.407 256H88.593C75.011 256 64 267.01 64 280.593v110.815C64 404.99 75.011 416 88.593 416h110.814C212.989 416 224 404.99 224 391.407V381l27.971 27.971a23.998 23.998 0 0 0 16.97 7.029H296c13.255 0 24-10.745 24-24V280c0-13.255-10.745-24-24-24h-27.059a24.003 24.003 0 0 0-16.97 7.029L224 291v-10.407zM192 384H96v-96h96v96zm80.255-96H288v96h-15.745L224 342.826v-13.652L272.255 288zm97.686-190.059l-83.883-83.882A47.996 47.996 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zM256 32.491a15.888 15.888 0 0 1 7.432 4.195l83.882 83.882a15.882 15.882 0 0 1 4.195 7.431H256V32.491zM352 464c0 8.837-7.164 16-16 16H48c-8.836 0-16-7.163-16-16V48c0-8.837 7.164-16 16-16h176v104c0 13.255 10.745 24 24 24h104v304z\"/></svg>");

/***/ }),

/***/ 39715:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/eav-ui/src/app/edit/assets/icons/font-awesome/file-word.svg ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-53.6-246.5c-6.8 32.8-32.5 139.7-33.4 150.3-5.8-29.1-.7 1.6-41.8-150.9-1.4-5.2-6.2-8.9-11.6-8.9h-6.4c-5.4 0-10.2 3.6-11.6 8.9-38.3 142.3-37.4 140.6-39.4 154.7-4.1-23.9 2.1-2.9-34.4-154.4-1.3-5.4-6.1-9.2-11.7-9.2h-7.2c-7.8 0-13.5 7.3-11.6 14.9 9.5 38 34.5 137.4 42.2 168 1.3 5.3 6.1 9.1 11.6 9.1h17c5.4 0 10.2-3.7 11.6-8.9 34.2-127.7 33.5-123.4 36.7-142.9 6.5 31.1.2 7 36.7 142.9 1.4 5.2 6.2 8.9 11.6 8.9h14c5.5 0 13.7-3.7 15.1-9l42.8-168c1.9-7.6-3.8-15-11.6-15h-6.8c-5.7 0-10.6 4-11.8 9.5z\"/></svg>");

/***/ }),

/***/ 70218:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/eav-ui/src/app/edit/assets/icons/font-awesome/file.svg ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16z\"/></svg>");

/***/ }),

/***/ 35365:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/eav-ui/src/app/edit/assets/icons/font-awesome/folder-plus.svg ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M344 272h-72v-72c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v72h-72c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h72v72c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-72h72c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zM194.74 96l54.63 54.63c6 6 14.14 9.37 22.63 9.37h192c8.84 0 16 7.16 16 16v224c0 8.84-7.16 16-16 16H48c-8.84 0-16-7.16-16-16V112c0-8.84 7.16-16 16-16h146.74M48 64C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48z\"/></svg>");

/***/ }),

/***/ 38076:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/eav-ui/src/app/edit/assets/icons/font-awesome/folder.svg ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M194.74 96l54.63 54.63c6 6 14.14 9.37 22.63 9.37h192c8.84 0 16 7.16 16 16v224c0 8.84-7.16 16-16 16H48c-8.84 0-16-7.16-16-16V112c0-8.84 7.16-16 16-16h146.74M48 64C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48z\"/></svg>");

/***/ }),

/***/ 43793:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/eav-ui/src/app/edit/assets/icons/font-awesome/sitemap.svg ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\"><path d=\"M608 352h-32v-97.59c0-16.77-13.62-30.41-30.41-30.41H336v-64h48c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H256c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h48v64H94.41C77.62 224 64 237.64 64 254.41V352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32H96v-96h208v96h-32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32h-32v-96h208v96h-32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm-480 32v96H32v-96h96zm240 0v96h-96v-96h96zM256 128V32h128v96H256zm352 352h-96v-96h96v96z\"/></svg>");

/***/ }),

/***/ 15445:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/eav-ui/src/app/edit/formulas/editor-intellisense-function-v2.rawts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n  This is a special file which is not compiled as a normal TypeScript.\r\n  Instead it's loaded as raw text, to hand over to Monaco.\r\n  It ensures that v2 functions have intellisense.\r\n\r\n  TIP: To edit this file, briefly rename it to ...raw.ts, then back to ...rawts\r\n       This will make VSCode load it as a normal TypeScript file, so you can edit it.\r\n\r\n  - Try to keep in sync with the real code in the 2sxc project.\r\n  - The comments are _documentation_ for the user, so they can see what's available\r\n  - If you need any \"internal\" comments, use // instead\r\n  - Note that the [inject:...] comments are replaced by the build process\r\n*/\r\n\r\n/**\r\n * The data object is the main object for figuring out what the field or setting contained and what other fields currently store.\r\n * It has properties such as `.value` etc.\r\n * Just start typing to see the intellisense.\r\n */\r\n// Note that the type must be explicitly like `string | boolean | number | string[]`\r\n// Otherwise it won't show the details to the user\r\ndeclare interface FormulaData {\r\n  /**\r\n   * The value of the current field/setting when the formula runs.\r\n   *\r\n   * _It's exact type depends on the underlying type._\r\n   */\r\n  value: string | boolean | number | string[];\r\n  /**\r\n   * The _default_ value of the current field/setting as defined in the field settings.\r\n   *\r\n   * _It's exact type depends on the underlying type._\r\n   */\r\n  default: string | boolean | number | string[];\r\n  /**\r\n   * A prefill value that was passed into the form when it was loaded.\r\n   *\r\n   * _It's exact type depends on the underlying type._\r\n   */\r\n  prefill: string | boolean | number | string[];\r\n  /**\r\n   * The value of the current field/setting when the form initially loaded.\r\n   *\r\n   * _It's exact type depends on the underlying type._\r\n   */\r\n  initial: string | boolean | number | string[];\r\n  /* [inject:AllFields] */\r\n  /**\r\n   * All parameters which were passed to the form when it was loaded\r\n   *\r\n   * _It's exact type depends on the parameter, but it's usually a string._\r\n   */\r\n  parameters: {\r\n    /* [inject:AllParameters] */\r\n  };\r\n}\r\n\r\ndeclare interface FormulaContext {\r\n  /**\r\n   * Information about the current App\r\n   */\r\n  app: {\r\n    /** The current App ID */\r\n    appId: number;\r\n    /** The current Zone ID */\r\n    zoneId: number;\r\n    /** Determines if the current App is the global App */\r\n    isGlobal: boolean;\r\n    /** Determines if the current App is the primary (main) App on the site */\r\n    isSite: boolean;\r\n    /** Determines if the current App is a content App */\r\n    isContent: boolean;\r\n    /**\r\n     * Retrieve a setting like an App setting.\r\n     * You need the full path like `Settings.ShowCategories`.\r\n     * \r\n     * Important: For security reasons formulas will only get settings which where configured in the ContentType for use in Formulas.\r\n     */\r\n    getSetting(settingPath: string): string;\r\n  };\r\n  /**\r\n   * Cache for this formula. You can store any data here and it will be available in the next run.\r\n   */\r\n  cache: Record<string, any>;\r\n  /**\r\n   * Information about the current language\r\n   */\r\n  culture: {\r\n    code: string;\r\n    name: string;\r\n  };\r\n  debug: boolean;\r\n  /**\r\n   * API to detect what features are currently enabled/available\r\n   */\r\n  features: {\r\n    // /**\r\n    //  * Get internal information about a feature if it's available. This is rarely used.\r\n    //  * @param nameId The name of the feature, eg. `PasteImageFromClipboard`\r\n    //  */\r\n    // get(nameId: string): Record<string, any>;\r\n    /** Find out if the feature is enabled. Eg. `...isEnabled('PasteImageFromClipboard')` */\r\n    isEnabled(nameId: string): boolean;\r\n  };\r\n  /**\r\n   * Work with the current form\r\n   */\r\n  form: {\r\n    // v16 Deprecated for v2\r\n    // /** Re-trigger all formulas. Usually used inside promises when they complete. */\r\n    // runFormulas(): void;\r\n  };\r\n  /**\r\n   * The standard sxc object for the current App.\r\n   * It's the same as the sxc-instance in the page.\r\n   *\r\n   * You can use it to make API calls to the server.\r\n   */\r\n  sxc: {\r\n    /** The module ID */\r\n    id: number;\r\n    /** The Content-Block ID - matches the module ID unless it's an inner-content block inside another module */\r\n    cbid: number;\r\n    /** The sxc WebAPI object. Check the docs: https://docs.2sxc.org/api/js/SxcWebApi.html */\r\n    webApi: {\r\n      /**\r\n       * Get data from a url and return the json-object\r\n       * @param url Url to call. It's usually a virtual url such as `app/auto/api/basic/hello`\r\n       * @param data Optional data. If provided, it will use a POST\r\n       * @param method Optional method, default is `GET` unless you specify data, then it's `POST`\r\n       */\r\n      fetchJson<TData>(url: string, data?: string | Record<string, any>, method?: string): Promise<TData>;\r\n      /**\r\n       * Get data from a url and return the response (not a nice object)\r\n       * @param url Url to call. It's usually a virtual url such as `app/auto/api/basic/hello`\r\n       * @param data Optional data. If provided, it will use a POST\r\n       * @param method Optional method, default is `GET` unless you specify data, then it's `POST`\r\n       */\r\n      fetchRaw<TData>(url: string, data?: string | Record<string, any>, method?: string): Promise<TData>;\r\n    };\r\n    // turn off for now v16.00 - confusing\r\n    // [key: string]: any;\r\n  };\r\n  /**\r\n   * Information about the item this formula targets.\r\n   */\r\n  target: {\r\n    /** The entity the current formula affects */\r\n    entity: {\r\n      /** The entity ID */\r\n      id: number;\r\n      /** The entity GUID */\r\n      guid: string;\r\n      /** Metadata For information */\r\n      for: {\r\n        /** The target type like `4` (Entity). `0` if it's not metadata  */\r\n        targetType: number;\r\n        /** The int-key if it uses number keys, otherwise null */\r\n        number?: number;\r\n        /** The string-key if it uses string keys, otherwise null */\r\n        string?: string;\r\n        /** The GUID-key if it uses GUIDs, otherwise null */\r\n        guid?: string;\r\n      }\r\n    };\r\n    name: string;\r\n    /** The entity type name */\r\n    type: string;\r\n  };\r\n  /**\r\n   * Information about the current user\r\n   */\r\n  user: {\r\n    /** The current user ID */\r\n    id: number;\r\n    /** Check if the current user is anonymous eg. not logged in */\r\n    isAnonymous: boolean;\r\n    /** Check if the current user is a content admin */\r\n    isContentAdmin: boolean;\r\n    /** Check if the current user is a site admin */\r\n    isSiteAdmin: boolean;\r\n    /** Check if the current user is a system admin */\r\n    isSystemAdmin: boolean;\r\n    /** current user e-mail */\r\n    email: string;\r\n    /** The user GUID */\r\n    guid: string;\r\n    /** the name usually shown in greetings */\r\n    name: string;\r\n    /** The user name used for login */\r\n    username: string;\r\n  };\r\n}\r\n\r\n// /**\r\n//  * Test docs\r\n//  * @param data The data object\r\n//  */\r\n// declare function callbackV2(data: FormulaData): string | string[];\r\n\r\n// /**\r\n//  * test docs 3\r\n//  * @param callback The real code of the formula\r\n//  */\r\n// declare function v3(callback: typeof callbackV2);\r\n\r\n/**\r\n * This `v2` wrapper is required for the intellisense to work.\r\n * @param callback The real code of the formula\r\n * @returns A string, boolean, number, date or an advanced object\r\n */\r\ndeclare function v2(\r\n  // The main function - adding comments here does not show up, so we don't have them ATM\r\n  callback: (\r\n    data: FormulaData,\r\n    context: FormulaContext,\r\n  ) => string | boolean | number | Date | {\r\n    value?: string | boolean | number | Date | { severity: 'warning' | 'error', message: string },\r\n    fields?: {\r\n      name: string,\r\n      value: string | boolean | number | Date\r\n    }[],\r\n    promise?: Promise<any>,\r\n    stop?: boolean,\r\n  },\r\n): void;\r\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(5302)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map