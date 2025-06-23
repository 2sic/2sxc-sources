"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_content-export_content-export_component_ts"],{

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

/***/ 75727:
/*!****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-export/content-export.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentExportComponent: () => (/* binding */ ContentExportComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ 53804);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core */ 88692);
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ 17693);
/* harmony import */ var _app_administration_services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-administration/services/dialog-config-app.service */ 64699);
/* harmony import */ var _services_content_export_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/content-export.service */ 56360);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);























function ContentExportComponent_Conditional_5_For_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lang_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", lang_r3.NameId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](lang_r3.NameId);
  }
}
function ContentExportComponent_Conditional_5_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-radio-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Export selected ", ctx_r1.itemIds.length, " items ");
  }
}
function ContentExportComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", null, 0)(2, "div", 4)(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " This will generate an XML file which you can edit in Excel. If you just want to import new data, use this to export the schema that you can then fill in using Excel. Please visit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "https://2sxc.org/help");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " for more instructions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6)(9, "div")(10, "mat-form-field", 7)(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ContentExportComponent_Conditional_5_Template_mat_select_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.formValues.language, $event) || (ctx_r1.formValues.language = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](16, ContentExportComponent_Conditional_5_For_17_Template, 2, 2, "mat-option", 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div")(19, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Export data");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-radio-group", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ContentExportComponent_Conditional_5_Template_mat_radio_group_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.formValues.recordExport, $event) || (ctx_r1.formValues.recordExport = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-radio-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "No, just export blank data schema (for new data import) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-radio-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Yes, export all content-items");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ContentExportComponent_Conditional_5_Conditional_26_Template, 2, 1, "mat-radio-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div")(28, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Value references to other languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-radio-group", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ContentExportComponent_Conditional_5_Template_mat_radio_group_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.formValues.languageReferences, $event) || (ctx_r1.formValues.languageReferences = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-radio-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Keep references to other languages (for re-import) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-radio-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Replace references with values");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div")(36, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "File / page references");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-radio-group", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ContentExportComponent_Conditional_5_Template_mat_radio_group_ngModelChange_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.formValues.resourcesReferences, $event) || (ctx_r1.formValues.resourcesReferences = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-radio-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Keep references (for re-import, for example Page:4711) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "mat-radio-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Replace references with real URLs (for example /Portals/0...) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "mat-dialog-actions", 20)(44, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContentExportComponent_Conditional_5_Template_button_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContentExportComponent_Conditional_5_Template_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.exportContent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Export Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ngForm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formValues.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx_r1.languages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formValues.recordExport);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r1.hasIdList ? 26 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formValues.languageReferences);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.formValues.recordExport === "Blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formValues.resourcesReferences);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.formValues.recordExport === "Blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ngForm_r4.form.valid);
  }
}
class ContentExportComponent {
  constructor(dialog, route) {
    this.dialog = dialog;
    this.route = route;
    this.hostClass = 'dialog-component';
    this.contentExportService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_content_export_service__WEBPACK_IMPORTED_MODULE_3__.ContentExportService);
    this.contentTypesService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_1__.ContentTypesService);
    this.dialogConfigSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_app_administration_services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_2__.DialogConfigAppService);
    this.hasIdList = false;
    this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
    this.contentType$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
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
    const dialogSettings$ = this.dialogConfigSvc.getCurrent$();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)([contentType$, dialogSettings$]).subscribe(([contentType, dialogSettings]) => {
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
    this.dialog.close();
  }
  exportContent() {
    this.contentExportService.exportContent(this.formValues, this.hasIdList && this.formValues.recordExport === 'Selection' ? this.itemIds : null);
  }
  static {
    this.ɵfac = function ContentExportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ContentExportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ContentExportComponent,
      selectors: [["app-content-export"]],
      hostVars: 1,
      hostBindings: function ContentExportComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
      decls: 7,
      vars: 6,
      consts: [["ngForm", "ngForm"], [1, "eav-dialog"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], [1, "eav-dialog-content"], ["href", "https://2sxc.org/help", "target", "_blank"], [1, "dialog-form-content", "fancy-scrollbar-light"], ["color", "accent", 1, "eav-mat-form-field"], ["name", "Language", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "eav-radio-group-label"], ["name", "RecordExport", 1, "eav-radio-group", 3, "ngModelChange", "ngModel"], ["value", "Blank"], ["value", "All"], ["value", "Selection"], ["name", "LanguageReferences", 1, "eav-radio-group", 3, "ngModelChange", "ngModel", "disabled"], ["value", "Link"], ["value", "Resolve"], ["name", "ResourcesReferences", 1, "eav-radio-group", 3, "ngModelChange", "ngModel", "disabled"], ["align", "end"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click", "disabled"]],
      template: function ContentExportComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ContentExportComponent_Conditional_5_Template, 48, 8, "form");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Export ", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 2, ctx.contentType$)) == null ? null : tmp_0_0.Name, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 4, ctx.loading$) === false ? 5 : -1);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOptionModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe],
      styles: [".eav-radio-group-label[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 24px 0 0;\n}\n\n.eav-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 8px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQtZXhwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoiY29udGVudC1leHBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWF2LXJhZGlvLWdyb3VwLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luOiAyNHB4IDAgMDtcclxufVxyXG5cclxuLmVhdi1yYWRpby1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NvbnRlbnQtZXhwb3J0L2NvbnRlbnQtZXhwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFDQSxna0JBQWdrQiIsInNvdXJjZXNDb250ZW50IjpbIi5lYXYtcmFkaW8tZ3JvdXAtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW46IDI0cHggMCAwO1xyXG59XHJcblxyXG4uZWF2LXJhZGlvLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_content-export_content-export_component_ts.js.map