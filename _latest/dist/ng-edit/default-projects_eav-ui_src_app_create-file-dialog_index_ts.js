"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["default-projects_eav-ui_src_app_create-file-dialog_index_ts"],{

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
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);








const appFilesAll = 'admin/AppFiles/AppFiles';
const appFilesAsset = 'admin/AppFiles/asset';
const appFilesCreate = 'admin/AppFiles/create';
const apiExplorerInspect = 'admin/ApiExplorer/inspect';
const apiExplorerAppApiFiles = 'admin/ApiExplorer/AppApiFiles';
const appFilesPredefinedTemplates = 'admin/AppFiles/GetTemplates';
const appFilesPreview = 'admin/AppFiles/preview';
class SourceService {
  constructor(http, context, dnnContext) {
    this.http = http;
    this.context = context;
    this.dnnContext = dnnContext;
  }
  /** ViewKey is templateId or path */
  get(viewKey, global, urlItems) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(appFilesAsset), {
      params: {
        appId: this.context.appId,
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
    return this.http.post(this.dnnContext.$2sxc.http.apiUrl(appFilesAsset), view, {
      params: {
        appId: this.context.appId,
        global,
        ...this.templateIdOrPath(viewKey, global, urlItems)
      }
    });
  }
  getAll(mask) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(appFilesAll), {
      params: {
        appId: this.context.appId,
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
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(apiExplorerAppApiFiles), {
      params: {
        appId: this.context.appId
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
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(apiExplorerInspect), {
      params: {
        appId: this.context.appId,
        zoneId: this.context.zoneId,
        path: apiPath
      }
    });
  }
  getPredefinedTemplates(purpose, type) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(appFilesPredefinedTemplates), {
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
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(appFilesPreview), {
      params: {
        appId: this.context.appId,
        path,
        templateKey,
        global
      }
    });
  }
  create(path, global, templateKey) {
    return this.http.post(this.dnnContext.$2sxc.http.apiUrl(appFilesCreate), {}, {
      params: {
        appId: this.context.appId,
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
  static #_ = this.ɵfac = function SourceService_Factory(t) {
    return new (t || SourceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_0__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SourceService,
    factory: SourceService.ɵfac
  });
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 12136);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 18473);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 14876);
/* harmony import */ var _code_editor_services_source_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../code-editor/services/source.service */ 79996);
/* harmony import */ var _edit_shared_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit/shared/helpers */ 56606);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/base.component */ 43176);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/field-hint/field-hint.component */ 43758);
/* harmony import */ var _shared_directives_mat_input_autofocus_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/directives/mat-input-autofocus.directive */ 36416);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);


// tslint:disable-next-line:max-line-length























const _c0 = a0 => ({
  "disabled": a0
});
function CreateFileDialogComponent_Conditional_0_For_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const platform_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", platform_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", platform_r2, " ");
  }
}
function CreateFileDialogComponent_Conditional_0_For_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const purpose_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", purpose_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", purpose_r3, " ");
  }
}
function CreateFileDialogComponent_Conditional_0_For_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const template_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", template_r4.Key);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", template_r4.Name, " ");
  }
}
function CreateFileDialogComponent_Conditional_0_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-field-hint", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isError", true);
  }
}
function CreateFileDialogComponent_Conditional_0_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-spinner", 21)(1, "div", 22);
  }
}
function CreateFileDialogComponent_Conditional_0_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23)(1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "pre", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, vm_r6.loadingPreview));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c0, vm_r6.loadingPreview));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](vm_r6.preview);
  }
}
function CreateFileDialogComponent_Conditional_0_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", vm_r6.previewError, " ");
  }
}
function CreateFileDialogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4)(8, "form", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "mat-form-field", 9)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Platform");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](16, CreateFileDialogComponent_Conditional_0_For_17_Template, 2, 2, "mat-option", 11, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 8)(19, "mat-form-field", 9)(20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Purpose");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](23, CreateFileDialogComponent_Conditional_0_For_24_Template, 2, 2, "mat-option", 11, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 13)(26, "mat-form-field", 9)(27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](30, CreateFileDialogComponent_Conditional_0_For_31_Template, 2, 2, "mat-option", 11, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 13)(33, "mat-form-field", 9)(34, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, CreateFileDialogComponent_Conditional_0_Conditional_37_Template, 2, 1, "app-field-hint", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, CreateFileDialogComponent_Conditional_0_Conditional_39_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateFileDialogComponent_Conditional_0_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateFileDialogComponent_Conditional_0_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.confirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, " Create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, CreateFileDialogComponent_Conditional_0_Conditional_44_Template, 5, 7)(45, CreateFileDialogComponent_Conditional_0_Conditional_45_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const vm_r6 = ctx;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.controls.finalName.value || (ctx_r4.controls.folder.value ? ctx_r4.controls.folder.value.trim() + "/" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r4.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](vm_r6.platforms);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](vm_r6.purposes);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](vm_r6.templates);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](37, ctx_r4.controls.name.touched && (ctx_r4.controls.name.errors == null ? null : ctx_r4.controls.name.errors.required) ? 37 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](39, vm_r6.loadingPreview ? 39 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r4.form.valid || vm_r6.loadingPreview || !vm_r6.previewValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](44, vm_r6.preview ? 44 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](45, !vm_r6.loadingPreview && vm_r6.previewError ? 45 : -1);
  }
}
class CreateFileDialogComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
  constructor(dialogData, dialogRef, sourceService) {
    super();
    this.dialogData = dialogData;
    this.dialogRef = dialogRef;
    this.sourceService = sourceService;
    this.hostClass = 'dialog-component';
    this.all = 'All';
  }
  ngOnInit() {
    this.templates$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject([]);
    this.loadingPreview$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(false);
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
    this.dialogRef.close(result);
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
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormGroup({
      platform: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl(this.all),
      purpose: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl({
        value: this.dialogData.purpose ?? this.all,
        disabled: this.dialogData.purpose != null
      }),
      templateKey: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl(this.dialogData.name ?? null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
      finalName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl({
        value: null,
        disabled: true
      }),
      folder: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl({
        value: this.dialogData.folder ?? '',
        disabled: true
      })
    });
    this.controls = this.form.controls;
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.templates$, this.controls.templateKey.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(this.controls.templateKey.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)())]).subscribe(([templates, templateKey]) => {
      const template = templates.find(t => t.Key === templateKey);
      const suggestedName = this.dialogData.name ? this.controls.name.value || this.dialogData.name : template?.SuggestedFileName ?? null;
      if (this.controls.name.value !== suggestedName) {
        this.controls.name.patchValue(suggestedName);
      }
    }));
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.templates$, this.controls.templateKey.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(this.controls.templateKey.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)()), this.controls.name.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(this.controls.name.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)()), this.controls.folder.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(this.controls.folder.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)())]).subscribe(([templates, templateKey, name, folder]) => {
      const template = templates.find(t => t.Key === templateKey);
      let finalName = null;
      if (name) {
        folder = folder.trim();
        name = _edit_shared_helpers__WEBPACK_IMPORTED_MODULE_1__.SanitizeHelper.sanitizePath(name.trim());
        name = `${template?.Prefix ?? ''}${name}${template?.Suffix ?? ''}${template?.Extension ?? ''}`;
        finalName = `${folder ? `${folder}/` : ''}${name}`.replace(/\/{2,}/g, '/');
      }
      if (this.controls.finalName.value !== finalName) {
        this.controls.finalName.patchValue(finalName);
      }
    }));
  }
  buildViewModel() {
    const platforms$ = this.templates$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(templates => {
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
    const purposes$ = this.templates$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(templates => {
      const purposesMap = {
        [this.all]: this.all
      };
      templates.forEach(template => {
        purposesMap[template.Purpose] = template.Purpose;
      });
      return Object.keys(purposesMap);
    }));
    const templates$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.templates$, this.controls.platform.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(this.controls.platform.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)()), this.controls.purpose.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(this.controls.purpose.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)())]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(([templates, platform, purpose]) => {
      const filtered = templates.filter(template => {
        const platformMatch = platform === this.all || (template.Platforms?.includes(platform) ?? false);
        const purposeMatch = purpose === this.all || template.Purpose === purpose;
        return platformMatch && purposeMatch;
      });
      return filtered;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.tap)(templates => {
      if (!templates.some(t => t.Key === this.controls.templateKey.value)) {
        const newTemplateKey = templates[0]?.Key ?? null;
        if (this.controls.templateKey.value !== newTemplateKey) {
          this.controls.templateKey.patchValue(newTemplateKey);
        }
      }
    }));
    const preview$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.controls.finalName.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(this.controls.finalName.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)()), this.controls.templateKey.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(this.controls.templateKey.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)())]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.throttleTime)(100, rxjs__WEBPACK_IMPORTED_MODULE_14__.asyncScheduler, {
      leading: true,
      trailing: true
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.tap)(() => {
      this.loadingPreview$.next(true);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.switchMap)(([finalName, templateKey]) => {
      return !finalName || !templateKey ? (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(undefined) : (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.forkJoin)([this.sourceService.getPreview(finalName, this.dialogData.global, templateKey), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.timer)(500)]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(([preview]) => preview));
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.tap)(() => {
      this.loadingPreview$.next(false);
    }));
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([platforms$, purposes$, templates$, preview$, this.loadingPreview$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(([platforms, purposes, templates, preview, loadingPreview]) => {
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
  static #_ = this.ɵfac = function CreateFileDialogComponent_Factory(t) {
    return new (t || CreateFileDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_code_editor_services_source_service__WEBPACK_IMPORTED_MODULE_0__.SourceService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: CreateFileDialogComponent,
    selectors: [["app-create-file-dialog"]],
    hostVars: 1,
    hostBindings: function CreateFileDialogComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵhostProperty"]("className", ctx.hostClass);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_code_editor_services_source_service__WEBPACK_IMPORTED_MODULE_0__.SourceService]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [[1, "eav-dialog", "eav-no-scrollbar"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title", "eav-dialog-title-box"], [1, "eav-file-name"], [1, "eav-dialog-content"], [1, "dialog-form", 3, "formGroup"], [1, "dialog-form-content"], [1, "eav-field-container", "eav-multiple"], [1, "eav-multiple-field"], ["color", "accent", 1, "eav-mat-form-field"], ["formControlName", "platform"], [3, "value"], ["formControlName", "purpose"], [1, "eav-field-container"], ["formControlName", "templateKey"], ["matInput", "", "type", "text", "formControlName", "name", "required", "", "appMatInputAutofocus", "", "autofocusSelectValue", "true"], [3, "isError"], [1, "dialog-form-actions"], ["mat-raised-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click", "disabled"], [1, "eav-preview-error"], ["mode", "indeterminate", "diameter", "20", "color", "accent"], [1, "spacer"], [1, "eav-preview-label-box"], [1, "eav-preview-label", 3, "ngClass"], [1, "fancy-scrollbar-light", 3, "ngClass"]],
    template: function CreateFileDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CreateFileDialogComponent_Conditional_0_Template, 46, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOptionModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInput, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinner, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_26__.AsyncPipe, _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_3__.FieldHintComponent, _shared_directives_mat_input_autofocus_directive__WEBPACK_IMPORTED_MODULE_4__.MatInputAutofocusDirective],
    styles: [".eav-dialog-title-box[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.eav-dialog-title-box[_ngcontent-%COMP%]   .eav-file-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-left: 8px;\n  background-color: lightgrey;\n}\n\n.eav-field-container[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-top: 8px;\n}\n.eav-field-container.eav-multiple[_ngcontent-%COMP%] {\n  display: flex;\n}\n.eav-field-container.eav-multiple[_ngcontent-%COMP%]   .eav-multiple-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.eav-field-container.eav-multiple[_ngcontent-%COMP%]   .eav-multiple-field[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 8px;\n}\n\n.dialog-form-content[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\n.dialog-form-actions[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\npre[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-shrink: 1;\n  font-family: monospace;\n}\npre.disabled[_ngcontent-%COMP%] {\n  color: rgba(29, 39, 61, 0.24);\n}\n\n.eav-preview-label-box[_ngcontent-%COMP%] {\n  position: relative;\n}\n.eav-preview-label-box[_ngcontent-%COMP%]   .eav-preview-label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -20px;\n  left: 0px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.6);\n  pointer-events: none;\n}\n.eav-preview-label-box[_ngcontent-%COMP%]   .eav-preview-label.disabled[_ngcontent-%COMP%] {\n  color: rgba(29, 39, 61, 0.44);\n}\n\n.eav-preview-error[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 14px;\n  color: red;\n}\n\npre[_ngcontent-%COMP%] {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  overflow-x: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NyZWF0ZS1maWxlLWRpYWxvZy9jcmVhdGUtZmlsZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9wcm9qZWN0cy9lYXYtdWkvc3JjL2FwcC9lZGl0L2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJBQUE7QUFERjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFNRTtFQUNFLGVBQUE7QUFISjtBQU1FO0VBQ0UsYUFBQTtBQUpKO0FBTUk7RUFDRSxPQUFBO0FBSk47QUFNTTtFQUNFLGdCQUFBO0FBSlI7O0FBVUE7RUFDRSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBUEY7QUFTRTtFQUNFLDZCQ0owQjtBREg5Qjs7QUFXQTtFQUNFLGtCQUFBO0FBUkY7QUFVRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQVJKO0FBVUk7RUFDRSw2QkNuQndCO0FEVzlCOztBQWFBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQVZGOztBQWFBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFWRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9lZGl0L2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4uZWF2LWRpYWxvZy10aXRsZS1ib3gge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gIC5lYXYtZmlsZS1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgfVxyXG59XHJcblxyXG4uZWF2LWZpZWxkLWNvbnRhaW5lciB7XHJcbiAgJjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICB9XHJcblxyXG4gICYuZWF2LW11bHRpcGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLmVhdi1tdWx0aXBsZS1maWVsZCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAmOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5kaWFsb2ctZm9ybS1jb250ZW50IHtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLmRpYWxvZy1mb3JtLWFjdGlvbnMge1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG5wcmUge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBmbGV4LXNocmluazogMTtcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG5cclxuICAmLmRpc2FibGVkIHtcclxuICAgIGNvbG9yOiAkZWRpdFVJLWxhYmVsLWRpc2FibGVkLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuLmVhdi1wcmV2aWV3LWxhYmVsLWJveCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAuZWF2LXByZXZpZXctbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgY29sb3I6ICRlZGl0VUktZmllbGQtZGlzYWJsZWQtY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZWF2LXByZXZpZXctZXJyb3Ige1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbnByZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogOS41cHg7XHJcbiAgbWFyZ2luOiAwIDAgMTBweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuIiwiJHByaW1hcnktY29sb3I6ICNmZmZmZmY7XHJcbiRhY2NlbnQtY29sb3I6ICMwMDI3NTM7XHJcbiRibHVlLWFjY2VudC1jb2xvcjogIzAwODdmNDtcclxuJGVycm9yLWNvbG9yOiAjYjAwMDMwO1xyXG5cclxuJGVkaXQtdWktZGlhbG9nLXdpZHRoOiAxMDB2dztcclxuJGVkaXQtdWktZGlhbG9nLW1heC13aWR0aDogODAwcHg7XHJcblxyXG4kZWRpdC11aS1kaWFsb2ctdG9wLXBhZGRpbmc6IDI0cHg7XHJcbiRlZGl0LXVpLWRpYWxvZy1oZWFkZXItbWF4LWhlaWdodDogNTJweDtcclxuJGVkaXQtdWktZGlhbG9nLW1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRlZGl0LXVpLWRpYWxvZy10b3AtcGFkZGluZ30gLSAjeyRlZGl0LXVpLWRpYWxvZy1oZWFkZXItbWF4LWhlaWdodH0gLSAjeyRlZGl0LXVpLWRpYWxvZy10b3AtcGFkZGluZ30pO1xyXG4kZWRpdC11aS1kaWFsb2ctbWF4LWhlaWdodC1tb2JpbGU6IGNhbGMoMTAwdmggLSAjeyRlZGl0LXVpLWRpYWxvZy1oZWFkZXItbWF4LWhlaWdodH0pO1xyXG5cclxuLy8gRGVidWdcclxuJGVkaXQtdWktZGlhbG9nLWRlYnVnLW1heC1oZWlnaHQ6IDUycHg7XHJcbiRkZWJ1Zy1pbmZvLWNvbnRhaW5lci1oZWlnaHQ6IDMwMHB4O1xyXG4kZGVidWctaW5mby1jb250YWluZXItbWFyZ2luOiAxNnB4O1xyXG4kZGVidWctaW5mby1jb250YWluZXItdG90YWwtaGVpZ2h0OiBjYWxjKCN7JGRlYnVnLWluZm8tY29udGFpbmVyLWhlaWdodH0gKyAjeyRkZWJ1Zy1pbmZvLWNvbnRhaW5lci1tYXJnaW59KTtcclxuJGVkaXQtdWktZGlhbG9nLW1heC1oZWlnaHQtd2l0aC1kZWJ1ZzogY2FsYygxMDB2aCAtICN7JGVkaXQtdWktZGlhbG9nLXRvcC1wYWRkaW5nfSAtICN7JGVkaXQtdWktZGlhbG9nLWhlYWRlci1tYXgtaGVpZ2h0fSAtICN7JGVkaXQtdWktZGlhbG9nLWRlYnVnLW1heC1oZWlnaHR9IC0gI3skZWRpdC11aS1kaWFsb2ctdG9wLXBhZGRpbmd9KTtcclxuJGVkaXQtdWktZGlhbG9nLW1heC1oZWlnaHQtd2l0aC1kZWJ1Zy1tb2JpbGU6IGNhbGMoMTAwdmggLSAjeyRlZGl0LXVpLWRpYWxvZy1oZWFkZXItbWF4LWhlaWdodH0gLSAjeyRlZGl0LXVpLWRpYWxvZy1kZWJ1Zy1tYXgtaGVpZ2h0fSk7XHJcblxyXG4kZWRpdC11aS1kaWFsb2ctYm9yZGVyLXJhZGl1czo4cHg7XHJcbiRlZGl0LXVpLWRpYWxvZy1ib3JkZXItcmFkaXVzLW1vYmlsZTowcHg7XHJcbiRlZGl0LXVpLWlucHV0LWJvcmRlci1yYWRpdXM6NHB4O1xyXG5cclxuJHNhdmUtYnV0dG9uLWhlaWdodDo0OHB4O1xyXG4kc2F2ZS1idXR0b24taGVpZ2h0LW1vYmlsZTo0MnB4O1xyXG4kc2F2ZS1idXR0b24td2lkdGgtY29tcGFjdDo0OHB4O1xyXG4kc2F2ZS1idXR0b24td2lkdGgtY29tcGFjdC1tb2JpbGU6NDJweDtcclxuJHNhdmUtYnV0dG9uLXdpZHRoLWV4dGVuZGVkOjIwMHB4O1xyXG4kc2F2ZS1idXR0b24td2lkdGgtZXh0ZW5kZWQtbW9iaWxlOjE3MHB4O1xyXG5cclxuLy8gVGhlIG1heC1oZWlnaHQgc2hvdWxkIGFsc28gYmUgc2V0IGluIHRoZSBleHBhbmRhYmxlIHdyYXBwZXIgYW5pbWF0aW9uc1xyXG4kZXhwYW5kYWJsZS13cmFwcGVyLW1heC1oZWlnaHQ6IGNhbGMoI3skZWRpdC11aS1kaWFsb2ctbWF4LWhlaWdodH0gKyAjeyRlZGl0LXVpLWRpYWxvZy1oZWFkZXItbWF4LWhlaWdodH0pO1xyXG4kZXhwYW5kYWJsZS13cmFwcGVyLW1heC1oZWlnaHQtbW9iaWxlOiBjYWxjKCN7JGVkaXQtdWktZGlhbG9nLW1heC1oZWlnaHQtbW9iaWxlfSArICN7JGVkaXQtdWktZGlhbG9nLWhlYWRlci1tYXgtaGVpZ2h0fSk7XHJcblxyXG4kZWRpdC11aS1kaWFsb2ctYmFja2dyb3VuZC1jb2xvcjogI0VGRjBGMjtcclxuXHJcbiRlZGl0VUktZm9yZWdyb3VuZC1jb2xvcjogIzFEMjczRDtcclxuJGVkaXRVSS1kaXNhYmxlZC1iYWNrZ3JvdW5kOiByZ2JhKCRlZGl0VUktZm9yZWdyb3VuZC1jb2xvciwgMC4wNCk7XHJcbiRlZGl0VUktbGFiZWwtZGlzYWJsZWQtY29sb3I6IHJnYmEoJGVkaXRVSS1mb3JlZ3JvdW5kLWNvbG9yLCAwLjI0KTtcclxuJGVkaXRVSS1maWVsZC1kaXNhYmxlZC1jb2xvcjogcmdiYSgkZWRpdFVJLWZvcmVncm91bmQtY29sb3IsIDAuNDQpO1xyXG5cclxuJGVkaXQtdWktc2VsZWN0ZWQtb3B0aW9uOiByZ2JhKCMwMDAwMDAsIDAuMDQpO1xyXG5cclxuLy8gRmllbGQgYm9yZGVyc1xyXG4kZmllbGQtYm9yZGVyLWNvbG9yLS1pbml0aWFsOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWhvdmVyOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kZmllbGQtYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDpyZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiRmaWVsZC1ib3JkZXItY29sb3ItLWludmFsaWQ6ICRlcnJvci1jb2xvcjtcclxuXHJcbi8vIERyb3B6b25lXHJcbiRkcm9wem9uZS1iYWNrZ3JvdW5kOiByZ2JhKCRhY2NlbnQtY29sb3IsIDAuNDQpO1xyXG4kZHJvcHpvbmUtYWN0aXZlLWJhY2tncm91bmQ6IHJnYmEoJGFjY2VudC1jb2xvciwgMC44OCk7XHJcblxyXG4vLyBoZWxwZXIgdGV4dFxyXG4kaGVscGVyLXRleHQtcGFkZGluZzogMC41NDE2NjY2N2VtIDAgMTNweCAwO1xyXG4kaGVscGVyLXRleHQtcGFkZGluZy0tbm8taGludDogMC41NDE2NjY2N2VtIDAgMTNweCAwO1xyXG4kaGVscGVyLXRleHQtcGFkZGluZy0tbGFzdDogMC41NDE2NjY2N2VtIDAgNXB4IDA7XHJcbiRoZWxwZXItdGV4dC1wYWRkaW5nLS1sYXN0LS1uby1oaW50OiAwLjU0MTY2NjY3ZW0gMCA1cHggMDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 90684:
/*!*********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/create-file-dialog/create-file-dialog.models.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 24618:
/*!***********************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/create-file-dialog/file-location-dialog/file-location-dialog.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileLocationDialogComponent: () => (/* binding */ FileLocationDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/field-hint/field-hint.component */ 43758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
















function FileLocationDialogComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-field-hint", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isError", true);
  }
}
class FileLocationDialogComponent {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
    this.hostClass = 'dialog-component';
  }
  ngOnInit() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormGroup({
      isShared: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required)
    });
  }
  closeDialog(isShared) {
    this.dialogRef.close(isShared);
  }
  confirm() {
    const formValues = this.form.getRawValue();
    this.closeDialog(formValues.isShared);
  }
  static #_ = this.ɵfac = function FileLocationDialogComponent_Factory(t) {
    return new (t || FileLocationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FileLocationDialogComponent,
    selectors: [["app-file-location-dialog"]],
    hostVars: 1,
    hostBindings: function FileLocationDialogComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("className", ctx.hostClass);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 20,
    vars: 5,
    consts: [[3, "formGroup"], ["color", "accent", 1, "eav-mat-form-field"], ["formControlName", "isShared"], [3, "value"], [3, "isError"], ["align", "end"], ["mat-raised-button", "", 1, "eav-card-action-button", 3, "click"], ["mat-raised-button", "", "color", "accent", 1, "eav-card-action-button", 3, "click", "disabled"]],
    template: function FileLocationDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-header")(2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "New file location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content")(5, "form", 0)(6, "mat-form-field", 1)(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-select", 2)(10, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "App");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Shared (global)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FileLocationDialogComponent_Conditional_14_Template, 2, 1, "app-field-hint", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-card-actions", 5)(16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileLocationDialogComponent_Template_button_click_16_listener() {
          return ctx.closeDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileLocationDialogComponent_Template_button_click_18_listener() {
          return ctx.confirm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Confirm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](14, ctx.form.controls.isShared.touched && (ctx.form.controls.isShared.errors == null ? null : ctx.form.controls.isShared.errors.required) ? 14 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.form.valid);
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOptionModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_0__.FieldHintComponent],
    styles: [".eav-card-action-button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NyZWF0ZS1maWxlLWRpYWxvZy9maWxlLWxvY2F0aW9uLWRpYWxvZy9maWxlLWxvY2F0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZWF2LWNhcmQtYWN0aW9uLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 93759:
/*!********************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/create-file-dialog/file-location-dialog/file-location-dialog.models.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 76068:
/*!*************************************************************!*\
  !*** ./projects/eav-ui/src/app/create-file-dialog/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateFileDialogComponent: () => (/* reexport safe */ _create_file_dialog_component__WEBPACK_IMPORTED_MODULE_2__.CreateFileDialogComponent),
/* harmony export */   FileLocationDialogComponent: () => (/* reexport safe */ _file_location_dialog_file_location_dialog_component__WEBPACK_IMPORTED_MODULE_0__.FileLocationDialogComponent)
/* harmony export */ });
/* harmony import */ var _file_location_dialog_file_location_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-location-dialog/file-location-dialog.component */ 24618);
/* harmony import */ var _file_location_dialog_file_location_dialog_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-location-dialog/file-location-dialog.models */ 93759);
/* harmony import */ var _create_file_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-file-dialog.component */ 47483);
/* harmony import */ var _create_file_dialog_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-file-dialog.models */ 90684);




// export * from './create-file-dialog.module';

/***/ }),

/***/ 43758:
/*!**************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/components/field-hint/field-hint.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldHintComponent: () => (/* binding */ FieldHintComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);




const _c0 = ["*"];
const _c1 = a0 => ({
  "hint-box__short": a0
});
function FieldHintComponent_Case_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FieldHintComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldHintComponent_Case_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const content_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", content_r2);
  }
}
function FieldHintComponent_Case_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FieldHintComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldHintComponent_Case_2_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const content_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", content_r2);
  }
}
function FieldHintComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}
class FieldHintComponent {
  constructor() {
    this.isError = false;
    this.isShort = true;
  }
  toggleIsShort() {
    this.isShort = !this.isShort;
  }
  static #_ = this.ɵfac = function FieldHintComponent_Factory(t) {
    return new (t || FieldHintComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FieldHintComponent,
    selectors: [["app-field-hint"]],
    inputs: {
      isError: "isError"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 5,
    vars: 4,
    consts: [["content", ""], [1, "hint-box", 3, "click", "ngClass"], [4, "ngTemplateOutlet"]],
    template: function FieldHintComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldHintComponent_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.toggleIsShort());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldHintComponent_Case_1_Template, 2, 1)(2, FieldHintComponent_Case_2_Template, 2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FieldHintComponent_ng_template_3_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx.isShort));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, (tmp_2_0 = ctx.isError) === false ? 1 : tmp_2_0 === true ? 2 : -1);
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatError, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet],
    styles: [".hint-box[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: block;\n}\n.hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZpZWxkLWhpbnQvZmllbGQtaGludC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjtBQUNFOztFQUVFLGVBQUE7RUFDQSxjQUFBO0FBQ0o7QUFJSTs7RUFFRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFGTiIsInNvdXJjZXNDb250ZW50IjpbIi5oaW50LWJveCB7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG5cclxuICAubWF0LW1kYy1mb3JtLWZpZWxkLWhpbnQsXHJcbiAgLm1hdC1tZGMtZm9ybS1maWVsZC1lcnJvciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICZfX3Nob3J0IHtcclxuXHJcbiAgICAubWF0LW1kYy1mb3JtLWZpZWxkLWhpbnQsXHJcbiAgICAubWF0LW1kYy1mb3JtLWZpZWxkLWVycm9yIHtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
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
  static #_ = this.ɵfac = function MatInputAutofocusDirective_Factory(t) {
    return new (t || MatInputAutofocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInput), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatInputAutofocusDirective,
    selectors: [["", "appMatInputAutofocus", ""]],
    inputs: {
      autofocusSelectValue: "autofocusSelectValue"
    },
    standalone: true
  });
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
//# sourceMappingURL=default-projects_eav-ui_src_app_create-file-dialog_index_ts.js.map