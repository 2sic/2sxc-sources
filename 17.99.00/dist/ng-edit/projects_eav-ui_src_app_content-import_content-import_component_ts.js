"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_content-import_content-import_component_ts"],{

/***/ 22743:
/*!******************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/services/app-dialog-config.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppDialogConfigService: () => (/* binding */ AppDialogConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 86301);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var _edit_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../edit/shared/store/ngrx-data */ 27521);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _shared_services_features_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/features.service */ 44858);
/* harmony import */ var _shared_services_service_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/service-base */ 4979);
/* harmony import */ var _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/logging/eav-logger */ 6812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 46443);












const logThis = false;
const webApiSettings = 'admin/dialog/settings';
class AppDialogConfigService extends _shared_services_service_base__WEBPACK_IMPORTED_MODULE_3__.ServiceBase {
  constructor(http, context,
  // private dnnContext: DnnContext,
  globalConfigService, featuresService) {
    super(new _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_4__.EavLogger('AppDialogConfigService', logThis));
    this.http = http;
    this.context = context;
    this.globalConfigService = globalConfigService;
    this.dialogSettings$ = {};
    this.log.a(`using context #${this.context.log.svcId}`);
    featuresService.loadFromService(this);
  }
  ngOnDestroy() {
    super.destroy();
    // TODO: probably should add an onDestroy and ensure all subscriptions in dialogSettings$ are killed
  }
  getCurrent$() {
    const appId = this.context.appId;
    this.log.a(`getCurrent\$ - appId:${appId}`);
    return this.getShared$(appId);
  }
  // new 2dg
  getSitePrimaryApp$() {
    return this.getCurrent$().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(dc => dc?.Context.Site.PrimaryApp));
  }
  getGlobalPrimaryApp$() {
    return this.getCurrent$().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(dc => dc?.Context.System.PrimaryApp));
  }
  getShared$(appId) {
    this.log.a('getShared$ appId: ' + appId);
    // if (!this.dialogSettings$[appIdToUse])
    this.dialogSettings$[appId] ??= this.getDialogSettings(appId, 'getShared$').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.shareReplay)({
      refCount: false
    }));
    return this.dialogSettings$[appId];
  }
  getDialogSettings(appId, reqBy) {
    this.log.a('getDialogSettings', {
      appId,
      reqBy
    });
    return this.http.get(webApiSettings, {
      params: {
        appId: appId ?? this.context.appId.toString()
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(dlgSettings => {
      dlgSettings.Context.Language.List = dlgSettings.Context.Language.List.filter(language => language.IsEnabled);
      return dlgSettings;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(dlgSettings => {
      this.globalConfigService.allowDebug(dlgSettings.Context.Enable.DebugMode);
    }));
  }
  static #_ = this.ɵfac = function AppDialogConfigService_Factory(t) {
    return new (t || AppDialogConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_1__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_edit_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_0__.GlobalConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_services_features_service__WEBPACK_IMPORTED_MODULE_2__.FeaturesService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: AppDialogConfigService,
    factory: AppDialogConfigService.ɵfac
  });
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);








// We should list all the "full" paths here, so it's easier to find when searching for API calls
const webApiTypeRoot = 'admin/type/';
const webApiTypeGet = 'admin/type/get';
const webApiTypes = 'admin/type/list';
const webApiTypeScopes = 'admin/type/scopes';
const webApiTypeSave = 'admin/type/save';
const webApiTypeDelete = 'admin/type/delete';
const webApiTypeImport = 'admin/type/import';
const webApiTypeAddGhost = 'admin/type/addghost';
class ContentTypesService {
  constructor(http, context, dnnContext) {
    this.http = http;
    this.context = context;
    this.dnnContext = dnnContext;
  }
  apiUrl(name) {
    return this.dnnContext.$2sxc.http.apiUrl(name);
  }
  retrieveContentType(staticName) {
    return this.http.get(this.apiUrl(webApiTypeGet), {
      params: {
        appId: this.context.appId.toString(),
        contentTypeId: staticName
      }
    });
  }
  retrieveContentTypes(scope) {
    return this.http.get(this.apiUrl(webApiTypes), {
      params: {
        appId: this.context.appId.toString(),
        scope
      }
    });
  }
  // TODO: remove this method after upgrade to V2
  getScopes() {
    return this.http.get(this.apiUrl(webApiTypeScopes), {
      params: {
        appId: this.context.appId.toString()
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
  getScopesV2() {
    return this.http.get(this.apiUrl(webApiTypeScopes), {
      params: {
        appId: this.context.appId.toString()
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(scopesData => scopesData.scopes));
  }
  save(contentType) {
    return this.http.post(this.apiUrl(webApiTypeSave), contentType, {
      params: {
        appid: this.context.appId.toString()
      }
    });
  }
  delete(contentType) {
    return this.http.delete(this.apiUrl(webApiTypeDelete), {
      params: {
        appid: this.context.appId.toString(),
        staticName: contentType.StaticName
      }
    });
  }
  import(files) {
    const formData = new FormData();
    for (const file of files) {
      formData.append('File', file);
    }
    return this.http.post(this.apiUrl(webApiTypeImport), formData, {
      params: {
        appId: this.context.appId.toString(),
        zoneId: this.context.zoneId.toString()
      }
    });
  }
  createGhost(sourceStaticName) {
    return this.http.post(this.apiUrl(webApiTypeAddGhost), null, {
      params: {
        appid: this.context.appId.toString(),
        sourceStaticName
      }
    });
  }
  static #_ = this.ɵfac = function ContentTypesService_Factory(t) {
    return new (t || ContentTypesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_0__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ContentTypesService,
    factory: ContentTypesService.ɵfac
  });
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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-administration/services/app-dialog-config.service */ 22743);
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ 17693);
/* harmony import */ var _services_content_import_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/content-import.service */ 41944);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ 53804);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/directives/drag-and-drop.directive */ 34575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);




















function ContentImportComponent_Conditional_0_Conditional_10_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", null, 0)(2, "div", 8)(3, "div")(4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContentImportComponent_Conditional_0_Conditional_10_Case_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const fileInput_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](fileInput_r4.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 10, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ContentImportComponent_Conditional_0_Conditional_10_Case_0_Template_input_change_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.fileChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div")(10, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "References to pages / files");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-radio-group", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ContentImportComponent_Conditional_0_Conditional_10_Case_0_Template_mat_radio_group_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.formValues.resourcesReferences, $event) || (ctx_r1.formValues.resourcesReferences = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-radio-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Import links as written in the file (for example /Portals/...) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-radio-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Try to resolve paths to references ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div")(18, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Clear all other entities");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-radio-group", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ContentImportComponent_Conditional_0_Conditional_10_Case_0_Template_mat_radio_group_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.formValues.clearEntities, $event) || (ctx_r1.formValues.clearEntities = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-radio-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Keep all entities not found in import ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-radio-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Remove all entities not found in import ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Remember to backup your DNN first!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-dialog-actions", 19)(28, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContentImportComponent_Conditional_0_Conditional_10_Case_0_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContentImportComponent_Conditional_0_Conditional_10_Case_0_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.evaluateContent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " Preview Import ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.formValues.file ? ctx_r1.formValues.file.name : "Select or drop file");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formValues.resourcesReferences);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formValues.clearEntities);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.formValues.file || !ctx_r1.formValues.file.name);
  }
}
function ContentImportComponent_Conditional_0_Conditional_10_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Please wait while processing...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ContentImportComponent_Conditional_0_Conditional_10_Case_2_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "File contains:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ul", 23)(6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "If you press Import, it will:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ul", 23)(15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Note: The import validates much data and may take several minutes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Try to import file '", ctx_r1.formValues.file.name, "'");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", vm_r6.evaluationResult.Detail.DocumentElementsCount, " content-items (records/entities)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", vm_r6.evaluationResult.Detail.LanguagesInDocumentCount, " languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", vm_r6.evaluationResult.Detail.AttributeNamesInDocument.length, " columns: ", vm_r6.evaluationResult.Detail.AttributeNamesInDocument.join(", "), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Create ", vm_r6.evaluationResult.Detail.AmountOfEntitiesCreated, " content-items");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Update ", vm_r6.evaluationResult.Detail.AmountOfEntitiesUpdated, " content-items");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Delete ", vm_r6.evaluationResult.Detail.AmountOfEntitiesDeleted, " content-items");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Ignore ", vm_r6.evaluationResult.Detail.AttributeNamesNotImported.length, " columns: ", vm_r6.evaluationResult.Detail.AttributeNamesNotImported.join(", "), "");
  }
}
function ContentImportComponent_Conditional_0_Conditional_10_Case_2_Conditional_0_Conditional_1_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const error_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Details: ", error_r7.ErrorDetail, "");
  }
}
function ContentImportComponent_Conditional_0_Conditional_10_Case_2_Conditional_0_Conditional_1_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const error_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Line-no: ", error_r7.LineNumber, "");
  }
}
function ContentImportComponent_Conditional_0_Conditional_10_Case_2_Conditional_0_Conditional_1_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const error_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Line-details: ", error_r7.LineDetail, "");
  }
}
function ContentImportComponent_Conditional_0_Conditional_10_Case_2_Conditional_0_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ContentImportComponent_Conditional_0_Conditional_10_Case_2_Conditional_0_Conditional_1_For_5_Conditional_3_Template, 3, 1, "div")(4, ContentImportComponent_Conditional_0_Conditional_10_Case_2_Conditional_0_Conditional_1_For_5_Conditional_4_Template, 3, 1, "div")(5, ContentImportComponent_Conditional_0_Conditional_10_Case_2_Conditional_0_Conditional_1_For_5_Conditional_5_Template, 3, 1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const error_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.errors[error_r7.ErrorCode]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](3, error_r7.ErrorDetail ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](4, error_r7.LineNumber ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](5, error_r7.LineDetail ? 5 : -1);
  }
}
function ContentImportComponent_Conditional_0_Conditional_10_Case_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](4, ContentImportComponent_Conditional_0_Conditional_10_Case_2_Conditional_0_Conditional_1_For_5_Template, 6, 4, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Try to import file '", ctx_r1.formValues.file.name, "'");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](vm_r6.evaluationResult.Errors);
  }
}
function ContentImportComponent_Conditional_0_Conditional_10_Case_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ContentImportComponent_Conditional_0_Conditional_10_Case_2_Conditional_0_Conditional_0_Template, 25, 10, "div", 8)(1, ContentImportComponent_Conditional_0_Conditional_10_Case_2_Conditional_0_Conditional_1_Template, 6, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-dialog-actions", 19)(3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContentImportComponent_Conditional_0_Conditional_10_Case_2_Conditional_0_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContentImportComponent_Conditional_0_Conditional_10_Case_2_Conditional_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.importContent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Import ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](0, vm_r6.evaluationResult.Success ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](1, !vm_r6.evaluationResult.Success ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !vm_r6.evaluationResult.Success);
  }
}
function ContentImportComponent_Conditional_0_Conditional_10_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ContentImportComponent_Conditional_0_Conditional_10_Case_2_Conditional_0_Template, 7, 3, "mat-dialog-actions", 19);
  }
  if (rf & 2) {
    const vm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](0, vm_r6.evaluationResult ? 0 : -1);
  }
}
function ContentImportComponent_Conditional_0_Conditional_10_Case_3_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Import done.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ContentImportComponent_Conditional_0_Conditional_10_Case_3_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Import failed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ContentImportComponent_Conditional_0_Conditional_10_Case_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ContentImportComponent_Conditional_0_Conditional_10_Case_3_Conditional_0_Conditional_1_Template, 2, 0, "p")(2, ContentImportComponent_Conditional_0_Conditional_10_Case_3_Conditional_0_Conditional_2_Template, 2, 0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](1, vm_r6.importResult.Success ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](2, !vm_r6.importResult.Success ? 2 : -1);
  }
}
function ContentImportComponent_Conditional_0_Conditional_10_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ContentImportComponent_Conditional_0_Conditional_10_Case_3_Conditional_0_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-dialog-actions", 19)(2, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContentImportComponent_Conditional_0_Conditional_10_Case_3_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](0, vm_r6.importResult ? 0 : -1);
  }
}
function ContentImportComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ContentImportComponent_Conditional_0_Conditional_10_Case_0_Template, 32, 4)(1, ContentImportComponent_Conditional_0_Conditional_10_Case_1_Template, 3, 0)(2, ContentImportComponent_Conditional_0_Conditional_10_Case_2_Template, 1, 1)(3, ContentImportComponent_Conditional_0_Conditional_10_Case_3_Template, 4, 1);
  }
  if (rf & 2) {
    let tmp_3_0;
    const vm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](0, (tmp_3_0 = vm_r6.viewStateSelected) === 1 ? 0 : tmp_3_0 === 0 ? 1 : tmp_3_0 === 2 ? 2 : tmp_3_0 === 3 ? 3 : -1);
  }
}
function ContentImportComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("filesDropped", function ContentImportComponent_Conditional_0_Template_div_filesDropped_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.filesDropped($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 6)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " This will import content-items into 2sxc. It requires that you already defined the content-type before you try importing, and that you created the import-file using the template provided by the Export. Please visit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "https://2sxc.org/help");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " for more instructions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ContentImportComponent_Conditional_0_Conditional_10_Template, 4, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r6 = ctx;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("allowedFileTypes", "xml");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", vm_r6.contentType == null ? null : vm_r6.contentType.Name, " Import Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](10, ctx_r1.formValues != null ? 10 : -1);
  }
}
class ContentImportComponent {
  constructor(dialogData, dialogRef, route, contentImportService, appDialogConfigService, contentTypesService) {
    this.dialogData = dialogData;
    this.dialogRef = dialogRef;
    this.route = route;
    this.contentImportService = contentImportService;
    this.appDialogConfigService = appDialogConfigService;
    this.contentTypesService = contentTypesService;
    this.hostClass = 'dialog-component';
    this.contentType$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
    this.viewStates = {
      waiting: 0,
      default: 1,
      evaluated: 2,
      imported: 3
    };
    this.viewStateSelected$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(this.viewStates.default);
    this.evaluationResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    this.importResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this.contentType$, this.loading$, this.viewStateSelected$, this.evaluationResult$, this.importResult$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(([contentType, loading, viewStateSelected, evaluationResult, importResult]) => ({
      contentType,
      loading,
      viewStateSelected,
      evaluationResult,
      importResult
    })));
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
    this.loading$.next(true);
    const contentType$ = this.contentTypesService.retrieveContentType(this.contentTypeStaticName);
    const dialogSettings$ = this.appDialogConfigService.getCurrent$();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)([contentType$, dialogSettings$]).subscribe(([contentType, dialogSettings]) => {
      this.contentType$.next(contentType);
      this.formValues = {
        defaultLanguage: dialogSettings.Context.Language.Primary,
        contentType: this.contentTypeStaticName,
        file: this.dialogData.files != null ? this.dialogData.files[0] : null,
        resourcesReferences: 'Keep',
        clearEntities: 'None'
      };
      this.loading$.next(false);
    });
  }
  ngOnDestroy() {
    this.contentType$.complete();
    this.loading$.complete();
    this.viewStateSelected$.complete();
    this.evaluationResult$.complete();
    this.importResult$.complete();
  }
  closeDialog() {
    this.dialogRef.close();
  }
  evaluateContent() {
    this.viewStateSelected$.next(this.viewStates.waiting);
    this.contentImportService.evaluateContent(this.formValues).subscribe(result => {
      this.evaluationResult$.next(result);
      this.viewStateSelected$.next(this.viewStates.evaluated);
    });
  }
  importContent() {
    this.viewStateSelected$.next(this.viewStates.waiting);
    this.contentImportService.importContent(this.formValues).subscribe(result => {
      this.importResult$.next(result);
      this.viewStateSelected$.next(this.viewStates.imported);
    });
  }
  back() {
    this.viewStateSelected$.next(this.viewStates.default);
    this.evaluationResult$.next(null);
  }
  fileChange(event) {
    this.formValues.file = event.target.files[0];
  }
  filesDropped(files) {
    const importFile = files[0];
    this.formValues.file = importFile;
  }
  static #_ = this.ɵfac = function ContentImportComponent_Factory(t) {
    return new (t || ContentImportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_content_import_service__WEBPACK_IMPORTED_MODULE_2__.ContentImportService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_0__.AppDialogConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_1__.ContentTypesService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ContentImportComponent,
    selectors: [["app-content-import"]],
    hostVars: 1,
    hostBindings: function ContentImportComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("className", ctx.hostClass);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_services_content_import_service__WEBPACK_IMPORTED_MODULE_2__.ContentImportService, _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_1__.ContentTypesService, _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_0__.AppDialogConfigService]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [["ngForm", "ngForm"], ["fileInput", ""], ["appDragAndDrop", "", 1, "eav-dialog", 3, "allowedFileTypes"], ["appDragAndDrop", "", 1, "eav-dialog", 3, "filesDropped", "allowedFileTypes"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], [1, "eav-dialog-description"], ["href", "https://2sxc.org/help", "target", "_blank"], [1, "eav-dialog-content"], ["mat-raised-button", "", "tippy", "Open file browser", 3, "click"], ["type", "file", 1, "hide", 3, "change"], [1, "eav-radio-group-label"], ["name", "ResourcesReferences", 1, "eav-radio-group", 3, "ngModelChange", "ngModel"], ["value", "Keep"], ["value", "Resolve"], ["name", "ClearEntities", 1, "eav-radio-group", 3, "ngModelChange", "ngModel"], ["value", "None"], ["value", "All"], [1, "eav-hint"], ["align", "end"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click", "disabled"], [1, "eav-evaluation__title"], [1, "eav-evaluation__content"], ["mat-raised-button", "", "color", "accent", 3, "click"]],
    template: function ContentImportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ContentImportComponent_Conditional_0_Template, 11, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_3__.DragAndDropDirective],
    styles: [".eav-radio-group-label[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 24px 0 0;\n}\n\n.eav-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 8px 0;\n}\n\n.eav-hint[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-top: 24px;\n  margin-bottom: 16px;\n}\n\n.eav-evaluation__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 24px 0 0;\n  font-weight: bold;\n}\n.eav-evaluation__content[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.eav-evaluation__content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 2px 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NvbnRlbnQtaW1wb3J0L2NvbnRlbnQtaW1wb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtBQURKO0FBR0k7RUFDRSxjQUFBO0FBRE4iLCJzb3VyY2VzQ29udGVudCI6WyIuZWF2LXJhZGlvLWdyb3VwLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luOiAyNHB4IDAgMDtcclxufVxyXG5cclxuLmVhdi1yYWRpby1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbi5lYXYtaGludCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLmVhdi1ldmFsdWF0aW9uIHtcclxuICAmX190aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDI0cHggMCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAmX19jb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
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
/* harmony import */ var _edit_shared_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../edit/shared/services */ 22453);
/* harmony import */ var _shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/helpers/file-to-base64.helper */ 70693);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);










class ContentImportService {
  constructor(http, context, dnnContext) {
    this.http = http;
    this.context = context;
    this.dnnContext = dnnContext;
  }
  evaluateContent(formValues) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)((0,_shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_1__.toBase64)(formValues.file)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(fileBase64 => {
      const requestData = {
        AppId: this.context.appId.toString(),
        DefaultLanguage: formValues.defaultLanguage,
        ContentType: formValues.contentType,
        ContentBase64: fileBase64,
        ResourcesReferences: formValues.resourcesReferences,
        ClearEntities: formValues.clearEntities
      };
      return this.http.post(this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services__WEBPACK_IMPORTED_MODULE_0__.webApiEntityRoot + 'XmlPreview'), requestData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(result => {
        if (!result.Success) {
          result.Errors = result.Detail;
          delete result.Detail;
        }
        return result;
      }));
    }));
  }
  importContent(formValues) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)((0,_shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_1__.toBase64)(formValues.file)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(fileBase64 => {
      const requestData = {
        AppId: this.context.appId.toString(),
        DefaultLanguage: formValues.defaultLanguage,
        ContentType: formValues.contentType,
        ContentBase64: fileBase64,
        ResourcesReferences: formValues.resourcesReferences,
        ClearEntities: formValues.clearEntities
      };
      return this.http.post(this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services__WEBPACK_IMPORTED_MODULE_0__.webApiEntityRoot + 'XmlUpload'), requestData);
    }));
  }
  static #_ = this.ɵfac = function ContentImportService_Factory(t) {
    return new (t || ContentImportService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_2__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_8__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: ContentImportService,
    factory: ContentImportService.ɵfac
  });
}

/***/ }),

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
  static #_ = this.ɵfac = function BaseDirective_Factory(t) {
    return new (t || BaseDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: BaseDirective
  });
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
    this.markStyle = 'outline';
    /** Comma separated file types, e.g. 'txt,doc,docx' */
    this.allowedFileTypes = '';
    this.filesDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.dropAreaClass = 'eav-droparea';
    this.dragClass = 'eav-dragover';
    this.timeouts = [];
    this.element = elementRef.nativeElement;
  }
  ngOnInit() {
    this.markStyleClass = `eav-droparea-${this.markStyle}`;
    this.element.classList.add(this.dropAreaClass, this.markStyleClass);
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
    this.element.classList.remove(this.dropAreaClass, this.markStyleClass, this.dragClass);
    super.ngOnDestroy();
  }
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.clearTimeouts();
    this.element.classList.remove(this.dragClass);
    const fileList = event.dataTransfer.files;
    let files = Array.from(fileList);
    files = this.filterTypes(files, this.allowedFileTypes);
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
      const allowedTypesString = this.allowedFileTypes.replace(/\,/g, ', ');
      const message = filtered.length ? 'Some files were filtered out. This drop location only accepts file types: ' + allowedTypesString : 'This drop location only accepts file types: ' + allowedTypesString;
      this.snackBar.open(message, null, {
        duration: 5000
      });
    }
    return filtered;
  }
  static #_ = this.ɵfac = function DragAndDropDirective_Factory(t) {
    return new (t || DragAndDropDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
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
      markStyle: "markStyle",
      allowedFileTypes: "allowedFileTypes"
    },
    outputs: {
      filesDropped: "filesDropped"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
  });
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