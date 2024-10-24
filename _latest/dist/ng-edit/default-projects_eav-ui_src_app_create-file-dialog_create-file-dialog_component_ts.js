"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["default-projects_eav-ui_src_app_create-file-dialog_create-file-dialog_component_ts"],{

/***/ 79996:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/services/source.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceService: () => (/* binding */ SourceService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);



const appFilesAll = 'admin/AppFiles/AppFiles';
const appFilesAsset = 'admin/AppFiles/asset';
const appFilesCreate = 'admin/AppFiles/create';
const apiExplorerInspect = 'admin/ApiExplorer/inspect';
const apiExplorerAppApiFiles = 'admin/ApiExplorer/AppApiFiles';
const appFilesPredefinedTemplates = 'admin/AppFiles/GetTemplates';
const appFilesPreview = 'admin/AppFiles/preview';
class SourceService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__.HttpServiceBase {
  /** ViewKey is templateId or path */
  get(viewKey, global, urlItems) {
    return this.getHttpApiUrl(appFilesAsset, {
      params: {
        appId: this.appId,
        global,
        ...this.templateIdOrPath(viewKey, global, urlItems)
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(view => {
      if (view.Type.toLocaleLowerCase() === 'auto') {
        switch (view.Extension.toLocaleLowerCase()) {
          case '.cs':
          case '.cshtml':
            view.Type = 'Razor';
            break;
          case '.html':
          case '.css':
          case '.js':
            view.Type = 'Token';
            break;
        }
      }
      return view;
    }));
  }
  /** ViewKey is templateId or path */
  save(viewKey, global, view, urlItems) {
    return this.http.post(this.apiUrl(appFilesAsset), view, {
      params: {
        appId: this.appId,
        global,
        ...this.templateIdOrPath(viewKey, global, urlItems)
      }
    });
  }
  getAll(mask) {
    return this.getHttpApiUrl(appFilesAll, {
      params: {
        appId: this.appId,
        ...(mask && {
          mask
        })
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(({
      Files
    }) => {
      Files.forEach(file => {
        file.Shared ??= false;
      });
      return Files;
    }));
  }
  getWebApis() {
    return this.getHttpApiUrl(apiExplorerAppApiFiles, {
      params: {
        appId: this.appId
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(({
      files
    }) => {
      files.forEach(file => {
        file.isShared ??= false;
        file.isCompiled ??= false;
      });
      return files;
    })).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(files => {
      const webApis = files.map(file => {
        const splitIndex = file.path.lastIndexOf('/');
        const fileExtIndex = file.path.lastIndexOf('.');
        const folder = file.path.substring(0, splitIndex);
        const name = file.path.substring(splitIndex + 1, fileExtIndex);
        const webApi = {
          path: file.path,
          folder,
          name,
          isShared: file.isShared,
          endpointPath: file.endpointPath,
          isCompiled: file.isCompiled,
          edition: file.edition
        };
        return webApi;
      });
      return webApis;
    }));
  }
  getWebApiDetails(apiPath) {
    return this.getHttpApiUrl(apiExplorerInspect, {
      params: {
        appId: this.appId,
        zoneId: this.zoneId,
        path: apiPath
      }
    });
  }
  getPredefinedTemplates(purpose, type) {
    return this.getHttpApiUrl(appFilesPredefinedTemplates, {
      params: {
        ...(purpose && {
          purpose
        }),
        ...(type && {
          type
        })
      }
    });
  }
  getPreview(path, global, templateKey) {
    return this.getHttpApiUrl(appFilesPreview, {
      params: {
        appId: this.appId,
        path,
        templateKey,
        global
      }
    });
  }
  create(path, global, templateKey) {
    return this.http.post(this.apiUrl(appFilesCreate), {}, {
      params: {
        appId: this.appId,
        global,
        purpose: 'auto',
        path,
        templateKey
      }
    });
  }
  templateIdOrPath(viewKey, global, urlItems) {
    if (/^[0-9]*$/g.test(viewKey)) {
      const path = urlItems.find(i => i.EntityId?.toString() === viewKey && i.IsShared === global)?.Path;
      return {
        templateId: viewKey,
        ...(path != null && {
          path
        })
      };
    } else {
      return {
        path: viewKey
      };
    }
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵSourceService_BaseFactory;
      return function SourceService_Factory(__ngFactoryType__) {
        return (ɵSourceService_BaseFactory || (ɵSourceService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](SourceService)))(__ngFactoryType__ || SourceService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: SourceService,
      factory: SourceService.ɵfac
    });
  }
}

/***/ }),

/***/ 47483:
/*!************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/create-file-dialog/create-file-dialog.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateFileDialogComponent: () => (/* binding */ CreateFileDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 12136);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 18473);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 14876);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core */ 88692);
/* harmony import */ var _code_editor_services_source_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../code-editor/services/source.service */ 79996);
/* harmony import */ var _edit_shared_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit/shared/helpers */ 56606);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/base.component */ 43176);
/* harmony import */ var _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/field-hint/field-hint.component */ 43758);
/* harmony import */ var _shared_directives_mat_input_autofocus_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/directives/mat-input-autofocus.directive */ 36416);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);


// tslint:disable-next-line:max-line-length























const _c0 = a0 => ({
  "disabled": a0
});
function CreateFileDialogComponent_Conditional_0_For_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const platform_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", platform_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", platform_r2, " ");
  }
}
function CreateFileDialogComponent_Conditional_0_For_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const purpose_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", purpose_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", purpose_r3, " ");
  }
}
function CreateFileDialogComponent_Conditional_0_For_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const template_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", template_r4.Key);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", template_r4.Name, " ");
  }
}
function CreateFileDialogComponent_Conditional_0_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-field-hint", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isError", true);
  }
}
function CreateFileDialogComponent_Conditional_0_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-spinner", 21)(1, "div", 22);
  }
}
function CreateFileDialogComponent_Conditional_0_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 23)(1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "pre", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c0, vm_r6.loadingPreview));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c0, vm_r6.loadingPreview));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](vm_r6.preview);
  }
}
function CreateFileDialogComponent_Conditional_0_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", vm_r6.previewError, " ");
  }
}
function CreateFileDialogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 4)(8, "form", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "mat-form-field", 9)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Platform");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](16, CreateFileDialogComponent_Conditional_0_For_17_Template, 2, 2, "mat-option", 11, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 8)(19, "mat-form-field", 9)(20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Purpose");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "mat-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](23, CreateFileDialogComponent_Conditional_0_For_24_Template, 2, 2, "mat-option", 11, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 13)(26, "mat-form-field", 9)(27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](30, CreateFileDialogComponent_Conditional_0_For_31_Template, 2, 2, "mat-option", 11, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 13)(33, "mat-form-field", 9)(34, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, CreateFileDialogComponent_Conditional_0_Conditional_37_Template, 2, 1, "app-field-hint", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, CreateFileDialogComponent_Conditional_0_Conditional_39_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateFileDialogComponent_Conditional_0_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateFileDialogComponent_Conditional_0_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.confirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, " Create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, CreateFileDialogComponent_Conditional_0_Conditional_44_Template, 5, 7)(45, CreateFileDialogComponent_Conditional_0_Conditional_45_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const vm_r6 = ctx;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4.controls.finalName.value || (ctx_r4.controls.folder.value ? ctx_r4.controls.folder.value.trim() + "/" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r4.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](vm_r6.platforms);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](vm_r6.purposes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](vm_r6.templates);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r4.controls.name.touched && (ctx_r4.controls.name.errors == null ? null : ctx_r4.controls.name.errors.required) ? 37 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](vm_r6.loadingPreview ? 39 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r4.form.valid || vm_r6.loadingPreview || !vm_r6.previewValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](vm_r6.preview ? 44 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](!vm_r6.loadingPreview && vm_r6.previewError ? 45 : -1);
  }
}
class CreateFileDialogComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__.BaseComponent {
  constructor(dialogData, dialog) {
    super();
    this.dialogData = dialogData;
    this.dialog = dialog;
    this.hostClass = 'dialog-component';
    // TODO: 2dg ViewModel Offen > Views, Create Template
    this.all = 'All';
    this.sourceService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_code_editor_services_source_service__WEBPACK_IMPORTED_MODULE_1__.SourceService);
  }
  ngOnInit() {
    this.templates$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject([]);
    this.loadingPreview$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(false);
    this.buildForm();
    this.fetchTemplates();
    this.buildViewModel();
  }
  ngOnDestroy() {
    this.templates$.complete();
    this.loadingPreview$.complete();
    super.ngOnDestroy();
  }
  closeDialog(result) {
    this.dialog.close(result);
  }
  confirm() {
    const formValues = this.form.getRawValue();
    const result = {
      name: formValues.finalName,
      templateKey: formValues.templateKey
    };
    this.closeDialog(result);
  }
  fetchTemplates() {
    this.sourceService.getPredefinedTemplates(this.dialogData.purpose, this.dialogData.type).subscribe(response => {
      if (this.controls.templateKey.value !== response.Default) {
        this.controls.templateKey.patchValue(response.Default);
      }
      this.templates$.next(response.Templates);
    });
  }
  buildForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormGroup({
      platform: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(this.all),
      purpose: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl({
        value: this.dialogData.purpose ?? this.all,
        disabled: this.dialogData.purpose != null
      }),
      templateKey: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(this.dialogData.name ?? null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
      finalName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl({
        value: null,
        disabled: true
      }),
      folder: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl({
        value: this.dialogData.folder ?? '',
        disabled: true
      })
    });
    this.controls = this.form.controls;
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.templates$, this.controls.templateKey.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(this.controls.templateKey.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)())]).subscribe(([templates, templateKey]) => {
      const template = templates.find(t => t.Key === templateKey);
      const suggestedName = this.dialogData.name ? this.controls.name.value || this.dialogData.name : template?.SuggestedFileName ?? null;
      if (this.controls.name.value !== suggestedName) {
        this.controls.name.patchValue(suggestedName);
      }
    }));
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.templates$, this.controls.templateKey.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(this.controls.templateKey.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)()), this.controls.name.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(this.controls.name.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)()), this.controls.folder.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(this.controls.folder.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)())]).subscribe(([templates, templateKey, name, folder]) => {
      const template = templates.find(t => t.Key === templateKey);
      let finalName = null;
      if (name) {
        folder = folder.trim();
        name = _edit_shared_helpers__WEBPACK_IMPORTED_MODULE_2__.SanitizeHelper.sanitizePath(name.trim());
        name = `${template?.Prefix ?? ''}${name}${template?.Suffix ?? ''}${template?.Extension ?? ''}`;
        finalName = `${folder ? `${folder}/` : ''}${name}`.replace(/\/{2,}/g, '/');
      }
      if (this.controls.finalName.value !== finalName) {
        this.controls.finalName.patchValue(finalName);
      }
    }));
  }
  buildViewModel() {
    const platforms$ = this.templates$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(templates => {
      const platformsMap = {
        [this.all]: this.all
      };
      templates.forEach(template => {
        template.Platforms?.forEach(platform => {
          platformsMap[platform] = platform;
        });
      });
      return Object.keys(platformsMap);
    }));
    const purposes$ = this.templates$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(templates => {
      const purposesMap = {
        [this.all]: this.all
      };
      templates.forEach(template => {
        purposesMap[template.Purpose] = template.Purpose;
      });
      return Object.keys(purposesMap);
    }));
    const templates$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.templates$, this.controls.platform.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(this.controls.platform.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)()), this.controls.purpose.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(this.controls.purpose.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)())]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(([templates, platform, purpose]) => {
      const filtered = templates.filter(template => {
        const platformMatch = platform === this.all || (template.Platforms?.includes(platform) ?? false);
        const purposeMatch = purpose === this.all || template.Purpose === purpose;
        return platformMatch && purposeMatch;
      });
      return filtered;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.tap)(templates => {
      if (!templates.some(t => t.Key === this.controls.templateKey.value)) {
        const newTemplateKey = templates[0]?.Key ?? null;
        if (this.controls.templateKey.value !== newTemplateKey) {
          this.controls.templateKey.patchValue(newTemplateKey);
        }
      }
    }));
    const preview$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.controls.finalName.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(this.controls.finalName.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)()), this.controls.templateKey.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(this.controls.templateKey.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)())]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.throttleTime)(100, rxjs__WEBPACK_IMPORTED_MODULE_15__.asyncScheduler, {
      leading: true,
      trailing: true
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.tap)(() => {
      this.loadingPreview$.next(true);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.switchMap)(([finalName, templateKey]) => {
      return !finalName || !templateKey ? (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(undefined) : (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.forkJoin)([this.sourceService.getPreview(finalName, this.dialogData.global, templateKey), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.timer)(500)]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(([preview]) => preview));
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.tap)(() => {
      this.loadingPreview$.next(false);
    }));
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([platforms$, purposes$, templates$, preview$, this.loadingPreview$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(([platforms, purposes, templates, preview, loadingPreview]) => {
      const viewModel = {
        platforms,
        purposes,
        templates,
        loadingPreview,
        preview: preview?.Preview,
        previewValid: preview?.IsValid ?? false,
        previewError: preview?.Error
      };
      return viewModel;
    }));
  }
  static {
    this.ɵfac = function CreateFileDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CreateFileDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: CreateFileDialogComponent,
      selectors: [["app-create-file-dialog"]],
      hostVars: 1,
      hostBindings: function CreateFileDialogComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [[1, "eav-dialog", "eav-no-scrollbar"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title", "eav-dialog-title-box"], [1, "eav-file-name"], [1, "eav-dialog-content"], [1, "dialog-form", 3, "formGroup"], [1, "dialog-form-content"], [1, "eav-field-container", "eav-multiple"], [1, "eav-multiple-field"], ["color", "accent", 1, "eav-mat-form-field"], ["formControlName", "platform"], [3, "value"], ["formControlName", "purpose"], [1, "eav-field-container"], ["formControlName", "templateKey"], ["matInput", "", "type", "text", "formControlName", "name", "required", "", "appMatInputAutofocus", "", "autofocusSelectValue", "true"], [3, "isError"], [1, "dialog-form-actions"], ["mat-raised-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click", "disabled"], [1, "eav-preview-error"], ["mode", "indeterminate", "diameter", "20", "color", "accent"], [1, "spacer"], [1, "eav-preview-label-box"], [1, "eav-preview-label", 3, "ngClass"], [1, "fancy-scrollbar-light", 3, "ngClass"]],
      template: function CreateFileDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateFileDialogComponent_Conditional_0_Template, 46, 7, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"]((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatOptionModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInput, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinner, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_27__.AsyncPipe, _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_4__.FieldHintComponent, _shared_directives_mat_input_autofocus_directive__WEBPACK_IMPORTED_MODULE_5__.MatInputAutofocusDirective],
      styles: [".eav-dialog-title-box[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.eav-dialog-title-box[_ngcontent-%COMP%]   .eav-file-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-left: 8px;\n  background-color: lightgrey;\n}\n\n.eav-field-container[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-top: 8px;\n}\n.eav-field-container.eav-multiple[_ngcontent-%COMP%] {\n  display: flex;\n}\n.eav-field-container.eav-multiple[_ngcontent-%COMP%]   .eav-multiple-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.eav-field-container.eav-multiple[_ngcontent-%COMP%]   .eav-multiple-field[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 8px;\n}\n\n.dialog-form-content[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\n.dialog-form-actions[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\npre[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-shrink: 1;\n  font-family: monospace;\n}\npre.disabled[_ngcontent-%COMP%] {\n  color: rgba(29, 39, 61, 0.24);\n}\n\n.eav-preview-label-box[_ngcontent-%COMP%] {\n  position: relative;\n}\n.eav-preview-label-box[_ngcontent-%COMP%]   .eav-preview-label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -20px;\n  left: 0px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.6);\n  pointer-events: none;\n}\n.eav-preview-label-box[_ngcontent-%COMP%]   .eav-preview-label.disabled[_ngcontent-%COMP%] {\n  color: rgba(29, 39, 61, 0.44);\n}\n\n.eav-preview-error[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 14px;\n  color: red;\n}\n\npre[_ngcontent-%COMP%] {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  overflow-x: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NyZWF0ZS1maWxlLWRpYWxvZy9jcmVhdGUtZmlsZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9wcm9qZWN0cy9lYXYtdWkvc3JjL2FwcC9lZGl0L2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJBQUE7QUFERjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFNRTtFQUNFLGVBQUE7QUFISjtBQU1FO0VBQ0UsYUFBQTtBQUpKO0FBTUk7RUFDRSxPQUFBO0FBSk47QUFNTTtFQUNFLGdCQUFBO0FBSlI7O0FBVUE7RUFDRSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBUEY7QUFTRTtFQUNFLDZCQ1gwQjtBREk5Qjs7QUFXQTtFQUNFLGtCQUFBO0FBUkY7QUFVRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQVJKO0FBVUk7RUFDRSw2QkMxQndCO0FEa0I5Qjs7QUFhQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFWRjs7QUFhQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBVkYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vZWRpdC9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuLmVhdi1kaWFsb2ctdGl0bGUtYm94IHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAuZWF2LWZpbGUtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gIH1cclxufVxyXG5cclxuLmVhdi1maWVsZC1jb250YWluZXIge1xyXG4gICY6bm90KDpmaXJzdC1vZi10eXBlKSB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgfVxyXG5cclxuICAmLmVhdi1tdWx0aXBsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC5lYXYtbXVsdGlwbGUtZmllbGQge1xyXG4gICAgICBmbGV4OiAxO1xyXG5cclxuICAgICAgJjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGlhbG9nLWZvcm0tY29udGVudCB7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5kaWFsb2ctZm9ybS1hY3Rpb25zIHtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxucHJlIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZmxleC1zaHJpbms6IDE7XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuXHJcbiAgJi5kaXNhYmxlZCB7XHJcbiAgICBjb2xvcjogJGVkaXRVSS1sYWJlbC1kaXNhYmxlZC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbi5lYXYtcHJldmlldy1sYWJlbC1ib3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLmVhdi1wcmV2aWV3LWxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTIwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGNvbG9yOiAkZWRpdFVJLWZpZWxkLWRpc2FibGVkLWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmVhdi1wcmV2aWV3LWVycm9yIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5wcmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDkuNXB4O1xyXG4gIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcbiIsIiRwcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xyXG4kYWNjZW50LWNvbG9yOiAjMDAyNzUzO1xyXG4kYmx1ZS1hY2NlbnQtY29sb3I6ICMwMDg3ZjQ7XHJcbiRlcnJvci1jb2xvcjogI2IwMDAzMDtcclxuXHJcbiRlZGl0LXVpLWRpYWxvZy13aWR0aDogMTAwdnc7XHJcbiRlZGl0LXVpLWRpYWxvZy1tYXgtd2lkdGg6IDgwMHB4O1xyXG5cclxuLy8gTWFpbiBoZWlnaHQgLSBhbGwgbW92ZWQgdG8gbWFpbiBzdHlsZXMuY3NzIHNvIGl0J3Mgbm90IGFkZGVkIG11bHRpcGxlIHRpbWVzXHJcbi8vIERlYnVnIC0gYWxsIG1vdmVkIHRvIG1haW4gc3R5bGVzLmNzcyBzbyBpdCdzIG5vdCBhZGRlZCBtdWx0aXBsZSB0aW1lc1xyXG5cclxuXHJcblxyXG5cclxuJGVkaXQtdWktZGlhbG9nLWJvcmRlci1yYWRpdXM6OHB4O1xyXG4kZWRpdC11aS1kaWFsb2ctYm9yZGVyLXJhZGl1cy1tb2JpbGU6MHB4O1xyXG4kZWRpdC11aS1pbnB1dC1ib3JkZXItcmFkaXVzOjRweDtcclxuXHJcbiRzYXZlLWJ1dHRvbi1oZWlnaHQ6NDhweDtcclxuJHNhdmUtYnV0dG9uLWhlaWdodC1tb2JpbGU6NDJweDtcclxuJHNhdmUtYnV0dG9uLXdpZHRoLWNvbXBhY3Q6NDhweDtcclxuJHNhdmUtYnV0dG9uLXdpZHRoLWNvbXBhY3QtbW9iaWxlOjQycHg7XHJcbiRzYXZlLWJ1dHRvbi13aWR0aC1leHRlbmRlZDoyMDBweDtcclxuJHNhdmUtYnV0dG9uLXdpZHRoLWV4dGVuZGVkLW1vYmlsZToxNzBweDtcclxuXHJcbi8vIFRoZSBtYXgtaGVpZ2h0IHNob3VsZCBhbHNvIGJlIHNldCBpbiB0aGUgZXhwYW5kYWJsZSB3cmFwcGVyIGFuaW1hdGlvbnNcclxuJGV4cGFuZGFibGUtd3JhcHBlci1tYXgtaGVpZ2h0OiBjYWxjKHZhcigtLWVkaXQtY29udGVudC1tYXgtaGVpZ2h0LWRlZmF1bHQpICsgdmFyKC0tZWRpdC1kaWFsb2ctaGVhZGVyLWhlaWdodCkpO1xyXG4kZXhwYW5kYWJsZS13cmFwcGVyLW1heC1oZWlnaHQtbW9iaWxlOiBjYWxjKHZhcigtLWVkaXQtdWktZGlhbG9nLW1heC1oZWlnaHQtbW9iaWxlKSArIHZhcigtLWVkaXQtZGlhbG9nLWhlYWRlci1oZWlnaHQpKTtcclxuXHJcbiRlZGl0LXVpLWRpYWxvZy1iYWNrZ3JvdW5kLWNvbG9yOiAjRUZGMEYyO1xyXG5cclxuJGVkaXRVSS1mb3JlZ3JvdW5kLWNvbG9yOiAjMUQyNzNEO1xyXG4kZWRpdFVJLWRpc2FibGVkLWJhY2tncm91bmQ6IHJnYmEoJGVkaXRVSS1mb3JlZ3JvdW5kLWNvbG9yLCAwLjA0KTtcclxuJGVkaXRVSS1sYWJlbC1kaXNhYmxlZC1jb2xvcjogcmdiYSgkZWRpdFVJLWZvcmVncm91bmQtY29sb3IsIDAuMjQpO1xyXG4kZWRpdFVJLWZpZWxkLWRpc2FibGVkLWNvbG9yOiByZ2JhKCRlZGl0VUktZm9yZWdyb3VuZC1jb2xvciwgMC40NCk7XHJcblxyXG4kZWRpdC11aS1zZWxlY3RlZC1vcHRpb246IHJnYmEoIzAwMDAwMCwgMC4wNCk7XHJcblxyXG4vLyBGaWVsZCBib3JkZXJzXHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWluaXRpYWw6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuJGZpZWxkLWJvcmRlci1jb2xvci0taG92ZXI6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuJGZpZWxkLWJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWRpc2FibGVkOnJnYmEoMCwgMCwgMCwgMC4yKTtcclxuJGZpZWxkLWJvcmRlci1jb2xvci0taW52YWxpZDogJGVycm9yLWNvbG9yO1xyXG5cclxuLy8gRHJvcHpvbmVcclxuJGRyb3B6b25lLWJhY2tncm91bmQ6IHJnYmEoJGFjY2VudC1jb2xvciwgMC40NCk7XHJcbiRkcm9wem9uZS1hY3RpdmUtYmFja2dyb3VuZDogcmdiYSgkYWNjZW50LWNvbG9yLCAwLjg4KTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 36416:
/*!************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/directives/mat-input-autofocus.directive.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatInputAutofocusDirective: () => (/* binding */ MatInputAutofocusDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ 95541);




class MatInputAutofocusDirective {
  constructor(matInput, elementRef) {
    this.matInput = matInput;
    this.elementRef = elementRef;
    this.autofocusSelectValue = false;
  }
  ngOnInit() {
    setTimeout(() => {
      this.matInput.focus();
      if (this.toBoolean(this.autofocusSelectValue)) {
        this.elementRef.nativeElement.setSelectionRange(0, this.matInput.value.length);
      }
    });
  }
  toBoolean(value) {
    if (typeof value === 'boolean') {
      return value;
    }
    if (typeof value === 'string') {
      const valueLowerCase = value.toLocaleLowerCase();
      if (valueLowerCase === 'true') {
        return true;
      }
      if (valueLowerCase === 'false') {
        return false;
      }
      return;
    }
    if (value == null) {
      return value;
    }
  }
  static {
    this.ɵfac = function MatInputAutofocusDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatInputAutofocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInput), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatInputAutofocusDirective,
      selectors: [["", "appMatInputAutofocus", ""]],
      inputs: {
        autofocusSelectValue: "autofocusSelectValue"
      },
      standalone: true
    });
  }
}

/***/ }),

/***/ 24861:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/throttle.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throttle: () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 50819);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 91687);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/innerFrom */ 82645);



function throttle(durationSelector, config) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    const {
      leading = true,
      trailing = false
    } = config !== null && config !== void 0 ? config : {};
    let hasValue = false;
    let sendValue = null;
    let throttled = null;
    let isComplete = false;
    const endThrottling = () => {
      throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
      throttled = null;
      if (trailing) {
        send();
        isComplete && subscriber.complete();
      }
    };
    const cleanupThrottling = () => {
      throttled = null;
      isComplete && subscriber.complete();
    };
    const startThrottle = value => throttled = (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(durationSelector(value)).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, endThrottling, cleanupThrottling));
    const send = () => {
      if (hasValue) {
        hasValue = false;
        const value = sendValue;
        sendValue = null;
        subscriber.next(value);
        !isComplete && startThrottle(value);
      }
    };
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      hasValue = true;
      sendValue = value;
      !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
    }, () => {
      isComplete = true;
      !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
    }));
  });
}

/***/ }),

/***/ 12136:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/throttleTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throttleTime: () => (/* binding */ throttleTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 18473);
/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./throttle */ 24861);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/timer */ 14876);



function throttleTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler, config) {
  const duration$ = (0,_observable_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(duration, scheduler);
  return (0,_throttle__WEBPACK_IMPORTED_MODULE_2__.throttle)(() => duration$, config);
}

/***/ })

}]);
//# sourceMappingURL=default-projects_eav-ui_src_app_create-file-dialog_create-file-dialog_component_ts.js.map