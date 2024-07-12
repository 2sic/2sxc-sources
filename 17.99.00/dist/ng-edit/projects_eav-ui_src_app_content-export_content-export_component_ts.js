"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_content-export_content-export_component_ts"],{

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

/***/ 75727:
/*!****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-export/content-export.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentExportComponent: () => (/* binding */ ContentExportComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-administration/services/app-dialog-config.service */ 22743);
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ 17693);
/* harmony import */ var _services_content_export_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/content-export.service */ 56360);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ 53804);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);

























function ContentExportComponent_Conditional_5_For_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lang_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", lang_r3.NameId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](lang_r3.NameId);
  }
}
function ContentExportComponent_Conditional_5_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-radio-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Export selected ", ctx_r1.itemIds.length, " items ");
  }
}
function ContentExportComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", null, 0)(2, "div", 4)(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " This will generate an XML file which you can edit in Excel. If you just want to import new data, use this to export the schema that you can then fill in using Excel. Please visit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "https://2sxc.org/help");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " for more instructions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div")(10, "mat-form-field", 7)(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ContentExportComponent_Conditional_5_Template_mat_select_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.formValues.language, $event) || (ctx_r1.formValues.language = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](16, ContentExportComponent_Conditional_5_For_17_Template, 2, 2, "mat-option", 10, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div")(19, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Export data");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-radio-group", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ContentExportComponent_Conditional_5_Template_mat_radio_group_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.formValues.recordExport, $event) || (ctx_r1.formValues.recordExport = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-radio-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "No, just export blank data schema (for new data import) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-radio-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Yes, export all content-items");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ContentExportComponent_Conditional_5_Conditional_26_Template, 2, 1, "mat-radio-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div")(28, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Value references to other languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-radio-group", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ContentExportComponent_Conditional_5_Template_mat_radio_group_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.formValues.languageReferences, $event) || (ctx_r1.formValues.languageReferences = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-radio-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Keep references to other languages (for re-import) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-radio-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Replace references with values");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div")(36, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "File / page references");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-radio-group", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ContentExportComponent_Conditional_5_Template_mat_radio_group_ngModelChange_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.formValues.resourcesReferences, $event) || (ctx_r1.formValues.resourcesReferences = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-radio-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Keep references (for re-import, for example Page:4711) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-radio-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Replace references with real URLs (for example /Portals/0...) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "mat-dialog-actions", 20)(44, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContentExportComponent_Conditional_5_Template_button_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContentExportComponent_Conditional_5_Template_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.exportContent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " Export Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ngForm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formValues.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx_r1.languages);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formValues.recordExport);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](26, ctx_r1.hasIdList ? 26 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formValues.languageReferences);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.formValues.recordExport === "Blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formValues.resourcesReferences);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.formValues.recordExport === "Blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ngForm_r4.form.valid);
  }
}
class ContentExportComponent {
  constructor(dialogRef, route, contentExportService, appDialogConfigService, contentTypesService) {
    this.dialogRef = dialogRef;
    this.route = route;
    this.contentExportService = contentExportService;
    this.appDialogConfigService = appDialogConfigService;
    this.contentTypesService = contentTypesService;
    this.hostClass = 'dialog-component';
    this.hasIdList = false;
    this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
    this.contentType$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
    this.contentTypeStaticName = this.route.snapshot.paramMap.get('contentTypeStaticName');
    const selectedIds = this.route.snapshot.paramMap.get('selectedIds');
    this.hasIdList = !!selectedIds;
    if (this.hasIdList) {
      this.itemIds = selectedIds.split(',').map(id => parseInt(id, 10));
    }
  }
  ngOnInit() {
    this.loading$.next(true);
    const contentType$ = this.contentTypesService.retrieveContentType(this.contentTypeStaticName);
    const dialogSettings$ = this.appDialogConfigService.getCurrent$();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)([contentType$, dialogSettings$]).subscribe(([contentType, dialogSettings]) => {
      this.contentType$.next(contentType);
      this.languages = dialogSettings.Context.Language.List;
      this.formValues = {
        defaultLanguage: dialogSettings.Context.Language.Primary,
        contentTypeStaticName: this.contentTypeStaticName,
        language: '',
        recordExport: this.hasIdList ? 'Selection' : 'All',
        languageReferences: 'Link',
        resourcesReferences: 'Link'
      };
      this.loading$.next(false);
    });
  }
  ngOnDestroy() {
    this.contentType$.complete();
    this.loading$.complete();
  }
  closeDialog() {
    this.dialogRef.close();
  }
  exportContent() {
    this.contentExportService.exportContent(this.formValues, this.hasIdList && this.formValues.recordExport === 'Selection' ? this.itemIds : null);
  }
  static #_ = this.ɵfac = function ContentExportComponent_Factory(t) {
    return new (t || ContentExportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_content_export_service__WEBPACK_IMPORTED_MODULE_2__.ContentExportService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_0__.AppDialogConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_1__.ContentTypesService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ContentExportComponent,
    selectors: [["app-content-export"]],
    hostVars: 1,
    hostBindings: function ContentExportComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("className", ctx.hostClass);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_services_content_export_service__WEBPACK_IMPORTED_MODULE_2__.ContentExportService, _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_1__.ContentTypesService, _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_0__.AppDialogConfigService]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 6,
    consts: [["ngForm", "ngForm"], [1, "eav-dialog"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], [1, "eav-dialog-content"], ["href", "https://2sxc.org/help", "target", "_blank"], [1, "dialog-form-content", "fancy-scrollbar-light"], ["color", "accent", 1, "eav-mat-form-field"], ["name", "Language", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "eav-radio-group-label"], ["name", "RecordExport", 1, "eav-radio-group", 3, "ngModelChange", "ngModel"], ["value", "Blank"], ["value", "All"], ["value", "Selection"], ["name", "LanguageReferences", 1, "eav-radio-group", 3, "ngModelChange", "ngModel", "disabled"], ["value", "Link"], ["value", "Resolve"], ["name", "ResourcesReferences", 1, "eav-radio-group", 3, "ngModelChange", "ngModel", "disabled"], ["align", "end"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click", "disabled"]],
    template: function ContentExportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ContentExportComponent_Conditional_5_Template, 48, 8, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Export ", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 2, ctx.contentType$)) == null ? null : tmp_0_0.Name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 4, ctx.loading$) === false ? 5 : -1);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOptionModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
    styles: [".eav-radio-group-label[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 24px 0 0;\n}\n\n.eav-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 8px 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NvbnRlbnQtZXhwb3J0L2NvbnRlbnQtZXhwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZWF2LXJhZGlvLWdyb3VwLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luOiAyNHB4IDAgMDtcclxufVxyXG5cclxuLmVhdi1yYWRpby1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_content-export_content-export_component_ts.js.map