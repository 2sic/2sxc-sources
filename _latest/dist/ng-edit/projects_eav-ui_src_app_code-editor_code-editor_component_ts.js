"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_code-editor_code-editor_component_ts"],{

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

/***/ 61435:
/*!**************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/code-and-edition-warnings/code-and-edition-warnings.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeAndEditionWarningsComponent: () => (/* binding */ CodeAndEditionWarningsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);





function CodeAndEditionWarningsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\"", ctx_r0.snackBarData.fileName, "\" also has a code-behind file \"", ctx_r0.snackBarData.codeFile, "\".");
  }
}
function CodeAndEditionWarningsComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" You are editing \"", ctx_r0.snackBarData.edition, "\" edition. ");
  }
}
function CodeAndEditionWarningsComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " You may be editing an edition which is not the one you see. ");
  }
}
function CodeAndEditionWarningsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CodeAndEditionWarningsComponent_Conditional_2_Conditional_1_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CodeAndEditionWarningsComponent_Conditional_2_Conditional_3_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " See ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "docs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, ctx_r0.snackBarData.edition ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" There are ", ctx_r0.snackBarData.otherEditions, " other editions of \"", ctx_r0.snackBarData.fileName, "\". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](3, !ctx_r0.snackBarData.edition ? 3 : -1);
  }
}
function CodeAndEditionWarningsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CodeAndEditionWarningsComponent_Conditional_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.openCodeBehind());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Open code-behind file ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class CodeAndEditionWarningsComponent {
  constructor(snackRef, snackBarData) {
    this.snackRef = snackRef;
    this.snackBarData = snackBarData;
  }
  openCodeBehind() {
    this.snackBarData.openCodeBehind = true;
    this.snackRef.dismissWithAction();
  }
  static #_ = this.ɵfac = function CodeAndEditionWarningsComponent_Factory(t) {
    return new (t || CodeAndEditionWarningsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBarRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MAT_SNACK_BAR_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CodeAndEditionWarningsComponent,
    selectors: [["app-code-and-edition-warnings"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 3,
    consts: [[1, "messages"], [1, "actions"], ["mat-button", "", "color", "primary"], ["href", "https://go.2sxc.org/polymorphism", "target", "_blank"], ["mat-button", "", "color", "primary", 3, "click"]],
    template: function CodeAndEditionWarningsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CodeAndEditionWarningsComponent_Conditional_1_Template, 3, 2)(2, CodeAndEditionWarningsComponent_Conditional_2_Template, 8, 4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CodeAndEditionWarningsComponent_Conditional_4_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, ctx.snackBarData.codeFile ? 1 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](2, ctx.snackBarData.otherEditions ? 2 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](4, ctx.snackBarData.codeFile ? 4 : -1);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton],
    styles: [".messages[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.messages[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NvZGUtZWRpdG9yL2NvZGUtYW5kLWVkaXRpb24td2FybmluZ3MvY29kZS1hbmQtZWRpdGlvbi13YXJuaW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtBQUNKOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFBRiIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlcyB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 59525:
/*!**********************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/code-editor.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeEditorComponent: () => (/* binding */ CodeEditorComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 71870);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 18537);
/* harmony import */ var _create_file_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-file-dialog */ 76068);
/* harmony import */ var _monaco_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../monaco-editor */ 41915);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/base.component */ 43176);
/* harmony import */ var _shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/constants/session.constants */ 38172);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/context */ 68873);
/* harmony import */ var _code_and_edition_warnings_code_and_edition_warnings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code-and-edition-warnings/code-and-edition-warnings.component */ 61435);
/* harmony import */ var _code_editor_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code-editor.models */ 45134);
/* harmony import */ var _services_snippets_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/snippets.service */ 5699);
/* harmony import */ var _services_source_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/source.service */ 79996);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../monaco-editor/monaco-editor.component */ 96581);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _code_snippets_code_snippets_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./code-snippets/code-snippets.component */ 29935);
/* harmony import */ var _code_templates_code_templates_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./code-templates/code-templates.component */ 58163);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/directives/click-stop-propagation.directive */ 39333);
/* harmony import */ var _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/rxJs/rx.helpers */ 93826);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_directives_toggle_debug_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/directives/toggle-debug.directive */ 95699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ 12587);






// tslint:disable-next-line:max-line-length































const _c0 = a0 => ({
  "sxc-dark": a0
});
const _c1 = a0 => ({
  "active": a0
});
const _c2 = (a0, a1, a2) => ({
  "active": a0,
  "modified": a1,
  "loading": a2
});
function CodeEditorComponent_Conditional_0_Conditional_11_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "share");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function CodeEditorComponent_Conditional_0_Conditional_11_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function CodeEditorComponent_Conditional_0_Conditional_11_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "mat-spinner", 17);
  }
}
function CodeEditorComponent_Conditional_0_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CodeEditorComponent_Conditional_0_Conditional_11_For_2_Template_div_click_0_listener() {
      const tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.openView(tab_r4.viewKey));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, CodeEditorComponent_Conditional_0_Conditional_11_For_2_Conditional_2_Template, 2, 0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, CodeEditorComponent_Conditional_0_Conditional_11_For_2_Conditional_6_Template, 2, 0, "mat-icon", 16)(7, CodeEditorComponent_Conditional_0_Conditional_11_For_2_Conditional_7_Template, 1, 0, "mat-spinner", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CodeEditorComponent_Conditional_0_Conditional_11_For_2_Template_mat_icon_click_8_listener() {
      const tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.closeEditor(tab_r4.viewKey));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction3"](6, _c2, tab_r4.isActive, tab_r4.isModified, tab_r4.isLoading));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("tippy", tab_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](2, tab_r4.viewKey.shared ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](tab_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](6, tab_r4.isModified ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](7, tab_r4.isLoading ? 7 : -1);
  }
}
function CodeEditorComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeaterCreate"](1, CodeEditorComponent_Conditional_0_Conditional_11_For_2_Template, 10, 10, "div", 10, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeater"](vm_r5.tabs);
  }
}
function CodeEditorComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-monaco-editor", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("valueChanged", function CodeEditorComponent_Conditional_0_Conditional_12_Template_app_monaco_editor_valueChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6);
      const vm_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.codeChanged($event, vm_r5.viewKey));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("filename", vm_r5.view.FileName)("value", vm_r5.view.Code)("options", ctx_r1.monacoOptions)("snippets", vm_r5.editorSnipps)("tooltips", vm_r5.tooltips)("autoFocus", true);
  }
}
function CodeEditorComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CodeEditorComponent_Conditional_0_Conditional_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}
function CodeEditorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CodeEditorComponent_Conditional_0_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.toggleExplorer(ctx_r1.Explorers.Templates));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "file_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CodeEditorComponent_Conditional_0_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.toggleExplorer(ctx_r1.Explorers.Snippets));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "app-code-templates", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("openView", function CodeEditorComponent_Conditional_0_Template_app_code_templates_openView_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.openView($event));
    })("createTemplate", function CodeEditorComponent_Conditional_0_Template_app_code_templates_createTemplate_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.createTemplate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "app-code-snippets", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("insertSnippet", function CodeEditorComponent_Conditional_0_Template_app_code_snippets_insertSnippet_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.insertSnippet($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, CodeEditorComponent_Conditional_0_Conditional_11_Template, 3, 0, "div", 7)(12, CodeEditorComponent_Conditional_0_Conditional_12_Template, 1, 6, "app-monaco-editor", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](13, CodeEditorComponent_Conditional_0_Conditional_13_Template, 3, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r5 = ctx;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](11, _c0, ctx_r1.monacoOptions.theme === "2sxc-dark"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](13, _c1, ctx_r1.activeExplorer === ctx_r1.Explorers.Templates));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](15, _c1, ctx_r1.activeExplorer === ctx_r1.Explorers.Snippets));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hidden", ctx_r1.activeExplorer !== ctx_r1.Explorers.Templates)("view", vm_r5.view)("templates", vm_r5.templates);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hidden", ctx_r1.activeExplorer !== ctx_r1.Explorers.Snippets)("snippets", vm_r5.explorerSnipps);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](11, vm_r5.tabs.length > 0 ? 11 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](12, vm_r5.view ? 12 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](13, vm_r5.activeView ? 13 : -1);
  }
}
class CodeEditorComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
  constructor(context, route, snackBar, sourceService, snippetsService, zone, titleService, dialog, viewContainerRef) {
    super();
    this.context = context;
    this.route = route;
    this.snackBar = snackBar;
    this.sourceService = sourceService;
    this.snippetsService = snippetsService;
    this.zone = zone;
    this.titleService = titleService;
    this.dialog = dialog;
    this.viewContainerRef = viewContainerRef;
    this.Explorers = _code_editor_models__WEBPACK_IMPORTED_MODULE_6__.Explorers;
    this.activeExplorer = _code_editor_models__WEBPACK_IMPORTED_MODULE_6__.Explorers.Templates;
    this.monacoOptions = {
      theme: '2sxc-dark',
      tabSize: 2,
      fixedOverflowWidgets: true
    };
    this.context.init(this.route);
    const codeItems = JSON.parse(sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__.keyItems));
    const isShared = sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_3__.keyIsShared) === 'true' ?? false;
    codeItems.forEach(codeItem => {
      // remove leading "/" from path
      if (codeItem.Path.startsWith('/')) {
        codeItem.Path = codeItem.Path.substring(1);
      }
      codeItem.IsShared ??= isShared;
    });
    this.urlItems = codeItems;
  }
  ngOnInit() {
    this.templates$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject([]);
    const initialViews = this.urlItems.map(item => {
      const viewKey = {
        key: item.EntityId?.toString() ?? item.Path,
        shared: item.IsShared
      };
      return viewKey;
    });
    this.activeView$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject(initialViews[0]);
    this.openViews$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject(initialViews);
    this.viewInfos$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject([]);
    this.attachListeners();
    this.sourceService.getAll().subscribe(templates => {
      this.templates$.next(templates);
    });
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([this.templates$, this.openViews$]).subscribe(([templates, openViews]) => {
      if (templates.length === 0) {
        return;
      }
      let viewInfos = this.viewInfos$.value;
      const notLoaded = openViews.filter(viewKey => !viewInfos.some(v => _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_13__.RxHelpers.objectsEqual(v.viewKey, viewKey)));
      if (notLoaded.length === 0) {
        return;
      }
      (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.forkJoin)(notLoaded.map(viewKey => {
        // set viewKey in viewInfos to mark that view is being fetched
        const newViewInfo = {
          viewKey
        };
        viewInfos = [...viewInfos, newViewInfo];
        const view$ = this.sourceService.get(viewKey.key, viewKey.shared, this.urlItems).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.share)());
        const snippets$ = view$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.switchMap)(view => this.snippetsService.getSnippets(view)));
        const tooltips$ = view$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.switchMap)(view => this.snippetsService.getTooltips(view.Extension.substring(1))));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.forkJoin)([(0,rxjs__WEBPACK_IMPORTED_MODULE_22__.of)(viewKey), view$, snippets$, tooltips$]);
      })).subscribe(results => {
        let viewInfos1 = this.viewInfos$.value;
        results.forEach(([viewKey, view, snippets, tooltips]) => {
          const selectedIndex = viewInfos1.findIndex(v => _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_13__.RxHelpers.objectsEqual(v.viewKey, viewKey));
          if (selectedIndex < 0) {
            return;
          }
          const newViewInfo = {
            viewKey,
            view,
            explorerSnipps: snippets.sets,
            editorSnipps: snippets.list,
            tooltips,
            savedCode: view.Code
          };
          viewInfos1 = [...viewInfos1.slice(0, selectedIndex), newViewInfo, ...viewInfos1.slice(selectedIndex + 1)];
          this.showCodeAndEditionWarnings(viewKey, view, templates);
        });
        this.viewInfos$.next(viewInfos1);
      });
      this.viewInfos$.next(viewInfos);
    }));
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([this.activeView$, this.viewInfos$]).subscribe(([activeView, viewInfos]) => {
      const active = viewInfos.find(v => _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_13__.RxHelpers.objectsEqual(v.viewKey, activeView));
      const defaultTitle = 'Code Editor';
      const newTitle = active == null ? defaultTitle : `${active.view?.FileName} - ${defaultTitle}`;
      const oldTitle = this.titleService.getTitle();
      if (newTitle !== oldTitle) {
        this.titleService.setTitle(newTitle);
      }
    }));
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([this.templates$, this.activeView$, this.openViews$, this.viewInfos$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_23__.map)(([templates, activeView, openViews, viewInfos]) => {
      const tabs = openViews.map(viewKey => {
        const viewInfo = viewInfos.find(v => _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_13__.RxHelpers.objectsEqual(v.viewKey, viewKey));
        const label = {
          viewKey,
          label: viewInfo?.view?.FileName ?? viewKey.key,
          isActive: _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_13__.RxHelpers.objectsEqual(viewKey, activeView),
          isModified: viewInfo?.view?.Code !== viewInfo?.savedCode,
          isLoading: viewInfo?.view == null
        };
        return label;
      });
      const activeViewInfo = viewInfos.find(v => _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_13__.RxHelpers.objectsEqual(v.viewKey, activeView));
      const viewModel = {
        activeView,
        tabs,
        viewKey: activeViewInfo?.viewKey,
        view: activeViewInfo?.view,
        templates,
        explorerSnipps: activeViewInfo?.explorerSnipps,
        editorSnipps: activeViewInfo?.editorSnipps,
        tooltips: activeViewInfo?.tooltips
      };
      return viewModel;
    }));
  }
  ngOnDestroy() {
    this.templates$.complete();
    this.activeView$.complete();
    this.openViews$.complete();
    this.viewInfos$.complete();
    super.ngOnDestroy();
  }
  toggleExplorer(explorer) {
    this.activeExplorer = this.activeExplorer !== explorer ? explorer : null;
  }
  createTemplate(params) {
    // This FileLocationDialogComponent dialog is currently never going to be opened because it has been replaced by mat-menu
    // in the code-templates.component.html template. If you want to use the dialog instead of the menu, you need to remove the
    // mat-menu and replace it with a button that opens the dialog with empty parameters.
    // Dialog has been replaced by menu because from update to Angular 16 CreateFileDialogComponent wasn't opening anymore if
    // FileLocationDialogComponent dialog was used.
    // if (params.isShared == null) {
    //   const fileLocationDialogRef = this.dialog.open(FileLocationDialogComponent, {
    //     autoFocus: false,
    //     viewContainerRef: this.viewContainerRef,
    //     width: '650px',
    //   });
    //   fileLocationDialogRef.afterClosed().subscribe((isShared?: boolean) => {
    //     if (isShared == null) { return; }
    //     params.isShared = isShared;
    //     this.createTemplate(params);
    //   });
    //   return;
    // }
    const createFileDialogData = {
      folder: params.folder,
      global: params.isShared,
      purpose: params.folder === 'api' || params.folder?.startsWith('api/') ? 'Api' : undefined
    };
    const createFileDialogRef = this.dialog.open(_create_file_dialog__WEBPACK_IMPORTED_MODULE_0__.CreateFileDialogComponent, {
      autoFocus: false,
      data: createFileDialogData,
      viewContainerRef: this.viewContainerRef,
      width: '650px'
    });
    createFileDialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      this.sourceService.create(result.name, params.isShared, result.templateKey).subscribe(() => {
        this.sourceService.getAll().subscribe(files => {
          this.templates$.next(files);
        });
      });
    });
  }
  insertSnippet(snippet) {
    this.monacoEditorRef?.insertSnippet(snippet);
  }
  codeChanged(code, viewKey) {
    let viewInfos = this.viewInfos$.value;
    const selectedIndex = viewInfos.findIndex(v => _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_13__.RxHelpers.objectsEqual(v.viewKey, viewKey));
    const selectedViewInfo = viewInfos[selectedIndex];
    const newViewInfo = {
      ...selectedViewInfo,
      view: {
        ...selectedViewInfo.view,
        Code: code
      }
    };
    viewInfos = [...viewInfos.slice(0, selectedIndex), newViewInfo, ...viewInfos.slice(selectedIndex + 1)];
    this.viewInfos$.next(viewInfos);
  }
  openView(viewKey) {
    // fix viewKey because it can be a templateId or a path, and file might already be open
    viewKey = this.viewInfos$.value.find(v => !_shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_13__.RxHelpers.objectsEqual(v.viewKey, viewKey) && v.view?.FileName === viewKey.key && v.view?.IsShared === viewKey.shared)?.viewKey ?? viewKey;
    const oldActiveView = this.activeView$.value;
    if (!_shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_13__.RxHelpers.objectsEqual(oldActiveView, viewKey)) {
      this.activeView$.next(viewKey);
    }
    const oldOpenViews = this.openViews$.value;
    if (!oldOpenViews.some(v => _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_13__.RxHelpers.objectsEqual(v, viewKey))) {
      const newOpenViews = [...oldOpenViews, viewKey];
      this.openViews$.next(newOpenViews);
    }
  }
  closeEditor(viewKey) {
    const oldOpenViews = this.openViews$.value;
    const newOpenViews = oldOpenViews.filter(key => !_shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_13__.RxHelpers.objectsEqual(key, viewKey));
    const oldActiveView = this.activeView$.value;
    if (_shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_13__.RxHelpers.objectsEqual(oldActiveView, viewKey)) {
      const newActiveView = oldOpenViews[oldOpenViews.findIndex(v => _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_13__.RxHelpers.objectsEqual(v, oldActiveView)) - 1] ?? newOpenViews[0];
      this.activeView$.next(newActiveView);
    }
    this.openViews$.next(newOpenViews);
  }
  save(viewKey) {
    viewKey ??= this.activeView$.value;
    const viewInfo = this.viewInfos$.value.find(v => _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_13__.RxHelpers.objectsEqual(v.viewKey, viewKey));
    if (viewInfo?.view == null) {
      return;
    }
    this.snackBar.open('Saving...');
    const codeToSave = viewInfo.view.Code;
    this.sourceService.save(viewKey.key, viewKey.shared, viewInfo.view, this.urlItems).subscribe({
      next: res => {
        if (!res) {
          this.snackBar.open('Failed', null, {
            duration: 2000
          });
          return;
        }
        let newViewInfos = [...this.viewInfos$.value];
        const selectedIndex = newViewInfos.findIndex(v => _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_13__.RxHelpers.objectsEqual(v.viewKey, viewKey));
        if (selectedIndex < 0) {
          return;
        }
        const selectedViewInfo = newViewInfos[selectedIndex];
        const newViewInfo = {
          ...selectedViewInfo,
          savedCode: codeToSave
        };
        newViewInfos = [...newViewInfos.slice(0, selectedIndex), newViewInfo, ...newViewInfos.slice(selectedIndex + 1)];
        this.viewInfos$.next(newViewInfos);
        this.snackBar.open('Saved', null, {
          duration: 2000
        });
      },
      error: () => {
        this.snackBar.open('Failed', null, {
          duration: 2000
        });
      }
    });
  }
  /** Show info about editions if other files with the same name exist */
  showCodeAndEditionWarnings(viewKey, view, files) {
    const pathAndName = view.FileName;
    const pathSeparator = pathAndName.indexOf('/') > -1 ? pathAndName.lastIndexOf('/') + 1 : 0;
    const pathWithSlash = pathSeparator === 0 ? '' : pathAndName.substring(0, pathSeparator);
    const fullName = pathAndName.substring(pathSeparator);
    const name = fullName.substring(0, fullName.length - view.Extension.length);
    const nameCode = name + '.code' + view.Extension;
    // find out if we also have a code file
    const codeFile = files.find(file => file.Path === pathWithSlash + nameCode && file.Shared === view.IsShared);
    const otherEditions = files.filter(file => file.Path.endsWith(fullName) && file.Shared === view.IsShared).length - 1;
    if (codeFile || otherEditions) {
      const snackBarData = {
        fileName: fullName,
        codeFile: codeFile?.Path,
        edition: this.urlItems.find(i => i.EntityId?.toString() === viewKey.key && i.IsShared === view.IsShared && i.Path === view.FileName)?.Edition,
        otherEditions,
        openCodeBehind: false
      };
      const snackBarRef = this.snackBar.openFromComponent(_code_and_edition_warnings_code_and_edition_warnings_component__WEBPACK_IMPORTED_MODULE_5__.CodeAndEditionWarningsComponent, {
        data: snackBarData,
        duration: 10000
      });
      snackBarRef.onAction().subscribe(() => {
        if (snackBarRef.containerInstance.snackBarConfig.data.openCodeBehind) {
          const openViewKey = {
            key: codeFile?.Path,
            shared: codeFile?.Shared
          };
          this.openView(openViewKey);
        }
      });
    }
  }
  attachListeners() {
    this.zone.runOutsideAngular(() => {
      this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_24__.fromEvent)(window, 'beforeunload').subscribe(event => {
        const allSaved = !this.viewInfos$.value.some(v => v.view != null && v.view.Code !== v.savedCode);
        if (allSaved) {
          return;
        }
        event.preventDefault();
        event.returnValue = ''; // fix for Chrome
      }));
      this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_24__.fromEvent)(window, 'keydown').subscribe(event => {
        const CTRL_S = event.keyCode === 83 && (navigator.platform.match('Mac') ? event.metaKey : event.ctrlKey);
        if (!CTRL_S) {
          return;
        }
        event.preventDefault();
        this.zone.run(() => {
          this.save();
        });
      }));
    });
  }
  static #_ = this.ɵfac = function CodeEditorComponent_Factory(t) {
    return new (t || CodeEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_4__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_source_service__WEBPACK_IMPORTED_MODULE_8__.SourceService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_snippets_service__WEBPACK_IMPORTED_MODULE_7__.SnippetsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewContainerRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
    type: CodeEditorComponent,
    selectors: [["app-code-editor"]],
    viewQuery: function CodeEditorComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_monaco_editor__WEBPACK_IMPORTED_MODULE_1__.MonacoEditorComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.monacoEditorRef = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵProvidersFeature"]([_services_source_service__WEBPACK_IMPORTED_MODULE_8__.SourceService, _services_snippets_service__WEBPACK_IMPORTED_MODULE_7__.SnippetsService]), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [["appToggleDebug", "", 1, "editor-root", 3, "ngClass"], [1, "editor-side-toolbar"], ["tippy", "Templates", 1, "button", 3, "click", "ngClass"], ["tippy", "Snippets", 1, "button", 3, "click", "ngClass"], [3, "openView", "createTemplate", "hidden", "view", "templates"], [3, "insertSnippet", "hidden", "snippets"], [1, "editor-group"], [1, "tabs-container", "fancy-scrollbar-dark"], [3, "filename", "value", "options", "snippets", "tooltips", "autoFocus"], ["mat-fab", "", "mat-elevation-z24", "", "tippy", "Click to save or CTRL + S"], [1, "tab", 3, "ngClass"], [1, "tab", 3, "click", "ngClass"], ["tippyShowDelay", "750", 1, "tab-label-container", 3, "tippy"], [1, "icon-shared"], [1, "tab-label"], [1, "tab-actions-container"], ["fontSet", "material-icons", 1, "tab-action", "icon-modified"], ["mode", "indeterminate", "diameter", "14", "color", "white", 1, "spinner"], ["tippy", "Close", "appClickStopPropagation", "", 1, "tab-action", "icon-close", 3, "click"], [3, "valueChanged", "filename", "value", "options", "snippets", "tooltips", "autoFocus"], ["mat-fab", "", "mat-elevation-z24", "", "tippy", "Click to save or CTRL + S", 3, "click"]],
    template: function CodeEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, CodeEditorComponent_Conditional_0_Template, 14, 17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_29__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__.MatIcon, _code_templates_code_templates_component__WEBPACK_IMPORTED_MODULE_11__.CodeTemplatesComponent, _code_snippets_code_snippets_component__WEBPACK_IMPORTED_MODULE_10__.CodeSnippetsComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinner, _monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_9__.MonacoEditorComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_32__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_32__.MatFabButton, _angular_common__WEBPACK_IMPORTED_MODULE_29__.AsyncPipe, _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_12__.ClickStopPropagationDirective, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_14__.TippyDirective, _shared_directives_toggle_debug_directive__WEBPACK_IMPORTED_MODULE_15__.ToggleDebugDirective],
    styles: [".sxc-dark[_ngcontent-%COMP%] {\n  background-color: #1e1e1e;\n}\n\n.editor-group[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 35px;\n  background-color: #252526;\n  overflow: hidden;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]:hover {\n  overflow-x: auto;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  cursor: pointer;\n  color: #ccc;\n  font-size: 13px;\n  padding-left: 10px;\n  border-right: 1px solid rgb(37, 37, 38);\n  background-color: #2d2d2d;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .tab-label-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .tab-label-container[_ngcontent-%COMP%]   .icon-shared[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n  margin-right: 4px;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .tab-actions-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .tab-action[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  padding: 2px;\n  font-size: 16px;\n  border-radius: 5px;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .tab-action.icon-modified[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  font-size: 10px;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .tab-action[_ngcontent-%COMP%]:hover {\n  background-color: rgba(90, 93, 94, 0.31);\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  display: none;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%] {\n  color: rgb(255, 255, 255);\n  background-color: #1e1e1e;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover   .icon-close[_ngcontent-%COMP%] {\n  display: flex;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:not(:hover).modified   .icon-modified[_ngcontent-%COMP%] {\n  display: flex;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:not(:hover).loading   .spinner[_ngcontent-%COMP%] {\n  display: block;\n}\n.editor-group[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:not(:hover):not(.modified):not(.loading).active   .icon-close[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.mat-mdc-fab[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 48px;\n  bottom: 32px;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NvZGUtZWRpdG9yL2NvZGUtZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNFLGdCQUFBO0FBQ047QUFFSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBQU47QUFFTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUVRO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUFWO0FBSU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRlI7QUFLTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBSFI7QUFLUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUhWO0FBTVE7RUFDRSx3Q0FBQTtBQUpWO0FBUU07RUFDRSxhQUFBO0FBTlI7QUFTTTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFQUjtBQVVNO0VBQ0UsYUFBQTtBQVJSO0FBWVE7RUFDRSxhQUFBO0FBVlY7QUFhUTtFQUNFLGNBQUE7QUFYVjtBQWNRO0VBQ0UsYUFBQTtBQVpWOztBQW1CQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBaEJGIiwic291cmNlc0NvbnRlbnQiOlsiLnN4Yy1kYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG59XHJcblxyXG4uZWRpdG9yLWdyb3VwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLnRhYnMtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTI2O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAudGFiIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgY29sb3I6ICNjY2M7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMzcsIDM3LCAzOCk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XHJcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgLnRhYi1sYWJlbC1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5pY29uLXNoYXJlZCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudGFiLWFjdGlvbnMtY29udGFpbmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGFiLWFjdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgICAgJi5pY29uLW1vZGlmaWVkIHtcclxuICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkwLCA5MywgOTQsIDAuMzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnNwaW5uZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIgLmljb24tY2xvc2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KDpob3Zlcikge1xyXG4gICAgICAgICYubW9kaWZpZWQgLmljb24tbW9kaWZpZWQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYubG9hZGluZyAuc3Bpbm5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bm90KC5tb2RpZmllZCk6bm90KC5sb2FkaW5nKS5hY3RpdmUgLmljb24tY2xvc2Uge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tYXQtbWRjLWZhYiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA0OHB4O1xyXG4gIGJvdHRvbTogMzJweDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 45134:
/*!*******************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/code-editor.models.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Explorers: () => (/* binding */ Explorers)
/* harmony export */ });
const Explorers = {
  Templates: 'Templates',
  Snippets: 'Snippets'
};

/***/ }),

/***/ 29935:
/*!**************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/code-snippets/code-snippets.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeSnippetsComponent: () => (/* binding */ CodeSnippetsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _object_to_array_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object-to-array.pipe */ 59573);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/directives/click-stop-propagation.directive */ 39333);
/* harmony import */ var _shared_helpers_array_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/helpers/array.helpers */ 4981);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pipes/safe-html.pipe */ 69914);














function CodeSnippetsComponent_For_2_Conditional_8_For_1_Conditional_8_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CodeSnippetsComponent_For_2_Conditional_8_For_1_Conditional_8_For_1_Conditional_4_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const snippet_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.toggleMore(snippet_r7.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const snippet_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.toggledMores.includes(snippet_r7.key) ? "more_vert" : "more_horiz", " ");
  }
}
function CodeSnippetsComponent_For_2_Conditional_8_For_1_Conditional_8_For_1_Conditional_7_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const link_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", link_r9.url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](link_r9.name);
  }
}
function CodeSnippetsComponent_For_2_Conditional_8_For_1_Conditional_8_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](3, CodeSnippetsComponent_For_2_Conditional_8_For_1_Conditional_8_For_1_Conditional_7_For_4_Template, 3, 2, "div", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const snippet_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, snippet_r7.help), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](snippet_r7.links);
  }
}
function CodeSnippetsComponent_For_2_Conditional_8_For_1_Conditional_8_For_1_Conditional_8_For_1_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const link_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", link_r12.url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](link_r12.name);
  }
}
function CodeSnippetsComponent_For_2_Conditional_8_For_1_Conditional_8_For_1_Conditional_8_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](3, CodeSnippetsComponent_For_2_Conditional_8_For_1_Conditional_8_For_1_Conditional_8_For_1_Conditional_6_For_4_Template, 3, 2, "div", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const more_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, more_r11.help), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](more_r11.links);
  }
}
function CodeSnippetsComponent_For_2_Conditional_8_For_1_Conditional_8_For_1_Conditional_8_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 4)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CodeSnippetsComponent_For_2_Conditional_8_For_1_Conditional_8_For_1_Conditional_8_For_1_Template_div_click_2_listener() {
      const more_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.addSnippet(more_r11.snip));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CodeSnippetsComponent_For_2_Conditional_8_For_1_Conditional_8_For_1_Conditional_8_For_1_Template_mat_icon_click_4_listener() {
      const more_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.toggleInfo(more_r11.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, CodeSnippetsComponent_For_2_Conditional_8_For_1_Conditional_8_For_1_Conditional_8_For_1_Conditional_6_Template, 5, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const more_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tippy", more_r11.snip);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", more_r11.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](6, ctx_r2.toggledInfos.includes(more_r11.key) ? 6 : -1);
  }
}
function CodeSnippetsComponent_For_2_Conditional_8_For_1_Conditional_8_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](0, CodeSnippetsComponent_For_2_Conditional_8_For_1_Conditional_8_For_1_Conditional_8_For_1_Template, 7, 3, "div", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "objectToArray");
  }
  if (rf & 2) {
    const snippet_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 0, snippet_r7.more));
  }
}
function CodeSnippetsComponent_For_2_Conditional_8_For_1_Conditional_8_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CodeSnippetsComponent_For_2_Conditional_8_For_1_Conditional_8_For_1_Template_div_click_2_listener() {
      const snippet_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.addSnippet(snippet_r7.snip));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CodeSnippetsComponent_For_2_Conditional_8_For_1_Conditional_8_For_1_Conditional_4_Template, 2, 1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CodeSnippetsComponent_For_2_Conditional_8_For_1_Conditional_8_For_1_Template_mat_icon_click_5_listener() {
      const snippet_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.toggleInfo(snippet_r7.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, CodeSnippetsComponent_For_2_Conditional_8_For_1_Conditional_8_For_1_Conditional_7_Template, 5, 3, "div", 8)(8, CodeSnippetsComponent_For_2_Conditional_8_For_1_Conditional_8_For_1_Conditional_8_Template, 3, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const snippet_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tippy", snippet_r7.snip);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", snippet_r7.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](4, snippet_r7.more ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](7, ctx_r2.toggledInfos.includes(snippet_r7.key) ? 7 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](8, ctx_r2.toggledMores.includes(snippet_r7.key) ? 8 : -1);
  }
}
function CodeSnippetsComponent_For_2_Conditional_8_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](0, CodeSnippetsComponent_For_2_Conditional_8_For_1_Conditional_8_For_1_Template, 9, 5, "div", 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "objectToArray");
  }
  if (rf & 2) {
    const folder_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 0, folder_r5.value));
  }
}
function CodeSnippetsComponent_For_2_Conditional_8_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CodeSnippetsComponent_For_2_Conditional_8_For_1_Template_div_click_1_listener() {
      const folder_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.toggleFolder(folder_r5.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CodeSnippetsComponent_For_2_Conditional_8_For_1_Conditional_8_Template, 3, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const folder_r5 = ctx.$implicit;
    const section_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tippy", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, "SourceEditorSnippets." + section_r2.key + "." + folder_r5.key + ".Help"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.toggledFolders.includes(folder_r5.key) ? "keyboard_arrow_down" : "keyboard_arrow_right", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 6, "SourceEditorSnippets." + section_r2.key + "." + folder_r5.key + ".Title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](8, ctx_r2.toggledFolders.includes(folder_r5.key) ? 8 : -1);
  }
}
function CodeSnippetsComponent_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](0, CodeSnippetsComponent_For_2_Conditional_8_For_1_Template, 9, 8, "div", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "keyvalue");
  }
  if (rf & 2) {
    const section_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 0, section_r2.value));
  }
}
function CodeSnippetsComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CodeSnippetsComponent_For_2_Template_div_click_1_listener() {
      const section_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.toggleSection(section_r2.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CodeSnippetsComponent_For_2_Conditional_8_Template, 3, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const section_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tippy", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, "SourceEditorSnippets." + section_r2.key + ".Help"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.toggledSections.includes(section_r2.key) ? "keyboard_arrow_down" : "keyboard_arrow_right", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 6, "SourceEditorSnippets." + section_r2.key + ".Title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](8, ctx_r2.toggledSections.includes(section_r2.key) ? 8 : -1);
  }
}
class CodeSnippetsComponent {
  constructor() {
    this.insertSnippet = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.toggledSections = [];
    this.toggledFolders = [];
    this.toggledInfos = [];
    this.toggledMores = [];
  }
  addSnippet(snippet) {
    this.insertSnippet.emit(snippet);
  }
  toggleSection(key) {
    _shared_helpers_array_helpers__WEBPACK_IMPORTED_MODULE_2__.ArrayHelpers.toggleInArray(key, this.toggledSections);
  }
  toggleFolder(key) {
    _shared_helpers_array_helpers__WEBPACK_IMPORTED_MODULE_2__.ArrayHelpers.toggleInArray(key, this.toggledFolders);
  }
  toggleInfo(key) {
    _shared_helpers_array_helpers__WEBPACK_IMPORTED_MODULE_2__.ArrayHelpers.toggleInArray(key, this.toggledInfos);
  }
  toggleMore(key) {
    _shared_helpers_array_helpers__WEBPACK_IMPORTED_MODULE_2__.ArrayHelpers.toggleInArray(key, this.toggledMores);
  }
  static #_ = this.ɵfac = function CodeSnippetsComponent_Factory(t) {
    return new (t || CodeSnippetsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: CodeSnippetsComponent,
    selectors: [["app-code-snippets"]],
    inputs: {
      snippets: "snippets"
    },
    outputs: {
      insertSnippet: "insertSnippet"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 2,
    consts: [[1, "editor-active-explorer", "fancy-scrollbar-dark"], ["tippyShowDelay", "750", 1, "collapsible-header", "section", 3, "click", "tippy"], ["tippyShowDelay", "750", 1, "collapsible-header", "folder", 3, "click", "tippy"], [1, "snippet"], [1, "snippet-label"], ["matRipple", "", "tippyShowDelay", "750", 1, "text", 3, "click", "tippy"], ["tippy", "Show More", "tippyShowDelay", "750"], ["tippy", "Show Help", "tippyShowDelay", "750", "appClickStopPropagation", "", 3, "click"], [1, "snippet-help"], ["tippy", "Show More", "tippyShowDelay", "750", 3, "click"], [1, "text", 3, "innerHTML"], ["target", "_blank", 3, "href"], ["matRipple", "", "tippyShowDelay", "750", 1, "text", "text-more", 3, "click", "tippy"], [1, "snippet-help", "snippet-help-more"]],
    template: function CodeSnippetsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1, CodeSnippetsComponent_For_2_Template, 9, 8, "div", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 0, ctx.snippets));
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_8__.KeyValuePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _object_to_array_pipe__WEBPACK_IMPORTED_MODULE_0__.ObjectToArrayPipe, _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_1__.ClickStopPropagationDirective, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_3__.TippyDirective, _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__.SafeHtmlPipe],
    styles: [".collapsible-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  overflow: hidden;\n  white-space: nowrap;\n  -webkit-user-select: none;\n          user-select: none;\n  padding: 3px 0;\n}\n.collapsible-header.section[_ngcontent-%COMP%] {\n  background-color: rgb(56, 56, 56);\n  font-weight: 500;\n}\n.collapsible-header.folder[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n.collapsible-header.folder[_ngcontent-%COMP%]:hover {\n  background-color: rgb(42, 45, 46);\n}\n.collapsible-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n\n.snippet[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n.snippet[_ngcontent-%COMP%]:hover {\n  background-color: rgb(42, 45, 46);\n}\n.snippet-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.snippet-label[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 3px 0 3px 32px;\n  flex: 1 1 auto;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.snippet-label[_ngcontent-%COMP%]   .text-more[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n.snippet-label[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.snippet-help[_ngcontent-%COMP%] {\n  padding: 3px 18px 3px 32px;\n}\n.snippet-help-more[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n.snippet-help[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-style: oblique;\n  word-break: break-word;\n}\n.snippet-help[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]     p {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NvZGUtZWRpdG9yL2NvZGUtc25pcHBldHMvY29kZS1zbmlwcGV0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNFO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUU7RUFDRSxpQkFBQTtBQUFKO0FBRUk7RUFDRSxpQ0FBQTtBQUFOO0FBSUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFGSjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7QUFLRTtFQUNFLGlDQUFBO0FBSEo7QUFNRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUpKO0FBTUk7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSk47QUFNTTtFQUNFLGtCQUFBO0FBSlI7QUFRSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFOTjtBQVVFO0VBQ0UsMEJBQUE7QUFSSjtBQVVJO0VBQ0Usa0JBQUE7QUFSTjtBQVdJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFUTjtBQVdNO0VBQ0UsU0FBQTtBQVRSIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbGxhcHNpYmxlLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgcGFkZGluZzogM3B4IDA7XHJcblxyXG4gICYuc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTYsIDU2LCA1Nik7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgJi5mb2xkZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgNDUsIDQ2KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtaWNvbiB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcbi5zbmlwcGV0IHtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQyLCA0NSwgNDYpO1xyXG4gIH1cclxuXHJcbiAgJi1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgIC50ZXh0IHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBwYWRkaW5nOiAzcHggMCAzcHggMzJweDtcclxuICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxuICAgICAgJi1tb3JlIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWF0LWljb24ge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtaGVscCB7XHJcbiAgICBwYWRkaW5nOiAzcHggMThweCAzcHggMzJweDtcclxuXHJcbiAgICAmLW1vcmUge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblxyXG4gICAgICA6Om5nLWRlZXAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 59573:
/*!***********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/code-snippets/object-to-array.pipe.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectToArrayPipe: () => (/* binding */ ObjectToArrayPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class ObjectToArrayPipe {
  transform(obj) {
    if (obj == null) {
      return;
    }
    if (Array.isArray(obj)) {
      return obj;
    }
    return Object.values(obj);
  }
  static #_ = this.ɵfac = function ObjectToArrayPipe_Factory(t) {
    return new (t || ObjectToArrayPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "objectToArray",
    type: ObjectToArrayPipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 58163:
/*!****************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/code-templates/code-templates.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeTemplatesComponent: () => (/* binding */ CodeTemplatesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _code_templates_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-templates.helpers */ 11561);
/* harmony import */ var _code_templates_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-templates.models */ 7652);
/* harmony import */ var _order_items_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-items.pipe */ 27024);
/* harmony import */ var _depth_padding_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./depth-padding.pipe */ 30692);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/directives/click-stop-propagation.directive */ 39333);
/* harmony import */ var _shared_helpers_array_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/helpers/array.helpers */ 4981);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
















const _c0 = a0 => ({
  item: a0
});
const _c1 = a0 => ({
  "active": a0
});
const _c2 = a0 => ({
  "app-shared-root": a0
});
function CodeTemplatesComponent_For_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
  }
}
function CodeTemplatesComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CodeTemplatesComponent_For_3_ng_container_0_Template, 1, 0, "ng-container", 6);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const fileOrFolder_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", fileOrFolder_r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c0, item_r2));
  }
}
function CodeTemplatesComponent_ng_template_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "depthPadding");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CodeTemplatesComponent_ng_template_5_Conditional_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().item;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.openTemplate(item_r5.pathFromRoot, item_r5.isShared));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().item;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](1, 5, item_r5.depth, item_r5.isFolder));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](8, _c1, ctx_r5.isToggled(item_r5.pathFromRoot, item_r5.isShared)))("tippy", item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r5.name, " ");
  }
}
function CodeTemplatesComponent_ng_template_5_Conditional_1_Conditional_11_For_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
  }
}
function CodeTemplatesComponent_ng_template_5_Conditional_1_Conditional_11_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CodeTemplatesComponent_ng_template_5_Conditional_1_Conditional_11_For_1_ng_container_0_Template, 1, 0, "ng-container", 6);
  }
  if (rf & 2) {
    const item1_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    const fileOrFolder_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", fileOrFolder_r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c0, item1_r8));
  }
}
function CodeTemplatesComponent_ng_template_5_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](0, CodeTemplatesComponent_ng_template_5_Conditional_1_Conditional_11_For_1_Template, 1, 4, "ng-container", null, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "sortItems");
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).item;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 0, item_r5.children));
  }
}
function CodeTemplatesComponent_ng_template_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "depthPadding");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CodeTemplatesComponent_ng_template_5_Conditional_1_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().item;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.toggleItem(item_r5.pathFromRoot, item_r5.isShared));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 10)(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CodeTemplatesComponent_ng_template_5_Conditional_1_Template_div_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().item;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.addFile(item_r5.pathFromRoot, item_r5.isShared));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, CodeTemplatesComponent_ng_template_5_Conditional_1_Conditional_11_Template, 3, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().item;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 7, item_r5.depth + 1, item_r5.isFolder));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](10, _c2, item_r5.depth < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tippy", item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r5.isToggled(item_r5.pathFromRoot, item_r5.isShared) ? "keyboard_arrow_down" : "keyboard_arrow_right", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](11, ctx_r5.isToggled(item_r5.pathFromRoot, item_r5.isShared) ? 11 : -1);
  }
}
function CodeTemplatesComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CodeTemplatesComponent_ng_template_5_Conditional_0_Template, 3, 10, "div", 7)(1, CodeTemplatesComponent_ng_template_5_Conditional_1_Template, 12, 12, "div");
  }
  if (rf & 2) {
    const item_r5 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](0, !item_r5.isFolder ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](1, item_r5.isFolder ? 1 : -1);
  }
}
class CodeTemplatesComponent {
  constructor() {
    this.openView = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.createTemplate = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.toggledItemsApp = [];
    this.toggledItemsShared = [];
  }
  ngOnChanges(changes) {
    if (changes.templates != null) {
      this.tree = (0,_code_templates_helpers__WEBPACK_IMPORTED_MODULE_0__.calculateTreeAppShared)(this.templates);
    }
    if (changes.view != null) {
      const previousView = changes.view?.previousValue;
      if (previousView) {
        this.toggleItem(previousView.FileName, previousView.IsShared);
      }
      if (this.view) {
        this.showFileInTree(this.view.FileName, this.view.IsShared);
      }
    }
  }
  isToggled(path, isShared) {
    const toggledItems = isShared ? this.toggledItemsShared : this.toggledItemsApp;
    return toggledItems.includes(path);
  }
  openTemplate(path, isShared) {
    const viewKey = {
      key: path,
      shared: isShared
    };
    this.openView.emit(viewKey);
  }
  toggleItem(path, isShared) {
    const toggledItems = isShared ? this.toggledItemsShared : this.toggledItemsApp;
    _shared_helpers_array_helpers__WEBPACK_IMPORTED_MODULE_5__.ArrayHelpers.toggleInArray(path, toggledItems);
  }
  addFile(folder, isShared) {
    const params = {
      folder,
      isShared
    };
    this.createTemplate.emit(params);
  }
  showFileInTree(file, isShared) {
    if (file == null) {
      return;
    }
    const toggledItems = isShared ? this.toggledItemsShared : this.toggledItemsApp;
    if (toggledItems.includes(file)) {
      return;
    }
    const paths = [_code_templates_models__WEBPACK_IMPORTED_MODULE_1__.appSharedRoot, ...file.split('/')];
    let pathFromRoot = '';
    for (const path of paths) {
      pathFromRoot = !pathFromRoot ? path : `${pathFromRoot}/${path}`;
      if (toggledItems.includes(pathFromRoot)) {
        continue;
      }
      this.toggleItem(pathFromRoot, isShared);
    }
  }
  static #_ = this.ɵfac = function CodeTemplatesComponent_Factory(t) {
    return new (t || CodeTemplatesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: CodeTemplatesComponent,
    selectors: [["app-code-templates"]],
    inputs: {
      view: "view",
      templates: "templates"
    },
    outputs: {
      openView: "openView",
      createTemplate: "createTemplate"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
    decls: 19,
    vars: 3,
    consts: [["fileOrFolder", ""], ["menu", "matMenu"], [1, "editor-active-explorer", "fancy-scrollbar-dark", "explorer-wrapper"], [1, "create-button-wrapper"], ["mat-icon-button", "", "tippy", "Create file", "tippyPlacement", "left", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tippyShowDelay", "750", 1, "file", 3, "style", "ngClass", "tippy"], ["tippyShowDelay", "750", 1, "file", 3, "click", "ngClass", "tippy"], [1, "folder-name-wrapper", 3, "click", "ngClass"], ["tippyShowDelay", "750", 1, "folder-name", 3, "tippy"], ["tippy", "Create file in this folder", "tippyShowDelay", "750", "appClickStopPropagation", "", 1, "add-item", 3, "click"]],
    template: function CodeTemplatesComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](2, CodeTemplatesComponent_For_3_Template, 1, 4, "ng-container", null, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "sortItems");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CodeTemplatesComponent_ng_template_5_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 3)(8, "button", 4)(9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-menu", null, 1)(13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CodeTemplatesComponent_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.addFile("", false));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "App");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CodeTemplatesComponent_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.addFile("", true));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Shared (global)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        const menu_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 1, ctx.tree));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", menu_r9);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuTrigger, _depth_padding_pipe__WEBPACK_IMPORTED_MODULE_3__.DepthPaddingPipe, _order_items_pipe__WEBPACK_IMPORTED_MODULE_2__.SortItemsPipe, _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_4__.ClickStopPropagationDirective, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_6__.TippyDirective],
    styles: [".explorer-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.create-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.file[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 4px 0 4px 8px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.file[_ngcontent-%COMP%]:hover {\n  background-color: rgb(42, 45, 46);\n}\n.file.active[_ngcontent-%COMP%] {\n  background-color: rgb(55, 55, 61);\n}\n\n.folder-name-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  align-items: center;\n}\n.folder-name-wrapper[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.folder-name-wrapper[_ngcontent-%COMP%]   .folder-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  white-space: nowrap;\n  padding: 3px 0;\n  flex: 1 1 auto;\n}\n.folder-name-wrapper[_ngcontent-%COMP%]   .add-item[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  padding: 3px;\n}\n.folder-name-wrapper.app-shared-root[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 500;\n}\n.folder-name-wrapper[_ngcontent-%COMP%]:hover {\n  background-color: rgb(42, 45, 46);\n}\n.folder-name-wrapper[_ngcontent-%COMP%]:hover   .add-item[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NvZGUtZWRpdG9yL2NvZGUtdGVtcGxhdGVzL2NvZGUtdGVtcGxhdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUNGO0FBQ0U7RUFDRSxpQ0FBQTtBQUNKO0FBRUU7RUFDRSxpQ0FBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUZKO0FBS0U7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUhKO0FBTUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQU9FO0VBQ0UsaUNBQUE7QUFMSjtBQU9JO0VBQ0UsYUFBQTtBQUxOIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGxvcmVyLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jcmVhdGUtYnV0dG9uLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmZpbGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiA0cHggMCA0cHggOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDIsIDQ1LCA0Nik7XHJcbiAgfVxyXG5cclxuICAmLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTUsIDU1LCA2MSk7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9sZGVyLW5hbWUtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLm1hdC1pY29uIHtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgLmZvbGRlci1uYW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBwYWRkaW5nOiAzcHggMDtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmFkZC1pdGVtIHtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICB9XHJcblxyXG4gICYuYXBwLXNoYXJlZC1yb290IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgNDUsIDQ2KTtcclxuXHJcbiAgICAuYWRkLWl0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 11561:
/*!**************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/code-templates/code-templates.helpers.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateTreeAppShared: () => (/* binding */ calculateTreeAppShared)
/* harmony export */ });
/* harmony import */ var _code_templates_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-templates.models */ 7652);

function calculateTreeAppShared(templates) {
  const tree = [{
    depth: -1,
    name: 'App Files',
    pathFromRoot: _code_templates_models__WEBPACK_IMPORTED_MODULE_0__.appSharedRoot,
    isShared: false,
    isFolder: true,
    children: calculateTree(templates.filter(f => !f.Shared))
  }, {
    depth: -1,
    name: 'Shared App Files',
    pathFromRoot: _code_templates_models__WEBPACK_IMPORTED_MODULE_0__.appSharedRoot,
    isShared: true,
    isFolder: true,
    children: calculateTree(templates.filter(f => f.Shared))
  }];
  return tree;
}
function calculateTree(templates) {
  if (!templates) {
    return [];
  }
  const tree = [];
  for (const template of templates) {
    let parent = tree;
    const paths = template.Path.split('/');
    const last = paths[paths.length - 1];
    let pathFromRoot = '';
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      pathFromRoot += i ? `/${path}` : path;
      const existing = parent.find(item => item.name === path);
      if (existing) {
        parent = existing.children;
      } else {
        const item = {
          depth: i,
          name: path,
          pathFromRoot,
          isShared: template.Shared,
          isFolder: path !== last,
          ...(path !== last && {
            children: []
          })
        };
        parent.push(item);
        parent = item.children;
      }
    }
  }
  return tree;
}

/***/ }),

/***/ 7652:
/*!*************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/code-templates/code-templates.models.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appSharedRoot: () => (/* binding */ appSharedRoot)
/* harmony export */ });
const appSharedRoot = '';

/***/ }),

/***/ 30692:
/*!**********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/code-templates/depth-padding.pipe.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DepthPaddingPipe: () => (/* binding */ DepthPaddingPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 80436);



class DepthPaddingPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(depth, isFolder) {
    let padding;
    if (isFolder) {
      padding = depth * 8;
    } else {
      padding = depth === 0 ? 8 : depth * 8 + 16;
    }
    return this.sanitizer.bypassSecurityTrustStyle(`padding-left: ${padding}px;`);
  }
  static #_ = this.ɵfac = function DepthPaddingPipe_Factory(t) {
    return new (t || DepthPaddingPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "depthPadding",
    type: DepthPaddingPipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 27024:
/*!********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/code-templates/order-items.pipe.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SortItemsPipe: () => (/* binding */ SortItemsPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

/** Sorts folders before files */
class SortItemsPipe {
  transform(items) {
    if (items == null) {
      return items;
    }
    items.sort((item1, item2) => {
      if (item1.isFolder < item2.isFolder) {
        return 1;
      } else if (item1.isFolder > item2.isFolder) {
        return -1;
      } else {
        return 0;
      }
    });
    return items;
  }
  static #_ = this.ɵfac = function SortItemsPipe_Factory(t) {
    return new (t || SortItemsPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "sortItems",
    type: SortItemsPipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 5699:
/*!**************************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/services/snippets.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnippetsService: () => (/* binding */ SnippetsService),
/* harmony export */   inlineHelp: () => (/* binding */ inlineHelp)
/* harmony export */ });
/* harmony import */ var lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/cloneDeep */ 85237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _content_type_fields_constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../content-type-fields/constants/data-type.constants */ 42220);
/* harmony import */ var _content_type_fields_services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../content-type-fields/services/content-types-fields.service */ 83051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90852);











const inlineHelp = 'admin/Code/InlineHelp';
class SnippetsService {
  constructor(http, dnnContext, translate) {
    this.http = http;
    this.dnnContext = dnnContext;
    this.translate = translate;
  }
  getTooltips(language) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(inlineHelp), {
      params: {
        language
      }
    });
  }
  getSnippets(view) {
    return this.http.get('../ng-assets/snippets.json.js').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      const relevant = this.filterAwayNotNeededSnippetsList(res.snippets, view);
      const standardAndInputSnips = this.extractInputTypeSnippets(relevant);
      const sets = this.initSnippetsWithConfig(standardAndInputSnips.standardArray, view, standardAndInputSnips.inputTypeSnippets);
      const sorted = {
        list: standardAndInputSnips.standardArray,
        sets
      };
      return sorted;
    }));
  }
  /** Scan the list for sets starting with @ or [ and filter if not needed right now */
  filterAwayNotNeededSnippetsList(list, view) {
    const keyPrefixes = ['@', '['];
    const keyPrefixIndex = v => v.Type.indexOf('Razor') > -1 ? 0 : 1;
    const newList = [];
    for (const itm of list) {
      const setHasPrefix = keyPrefixes.indexOf(itm.set[0]);
      if (setHasPrefix === -1 || setHasPrefix === keyPrefixIndex(view)) {
        // if necessary, remove first char
        if (setHasPrefix === keyPrefixIndex(view)) {
          itm.set = itm.set.substring(1);
        }
        newList.push(itm);
      }
    }
    return newList;
  }
  extractInputTypeSnippets(list) {
    const standardArray = [];
    const inputTypeArray = [];
    for (const itm of list) {
      const systemSnippet = itm.set[0] === '\\';
      if (!systemSnippet) {
        standardArray.push(itm);
      } else {
        itm.set = itm.set.substring(1);
        inputTypeArray.push(itm);
      }
    }
    const inputTypeSnippets = this.catalogInputTypeSnippets(inputTypeArray);
    const extracted = {
      standardArray,
      inputTypeSnippets
    };
    return extracted;
  }
  catalogInputTypeSnippets(list) {
    const inputTypeList = {};
    for (const itm of list) {
      if (inputTypeList[itm.subset] === undefined) {
        inputTypeList[itm.subset] = [];
      }
      inputTypeList[itm.subset].push(itm);
    }
    return inputTypeList;
  }
  initSnippetsWithConfig(standardArray, templateConfiguration, inputTypeSnippets) {
    const sets = this.makeTree(standardArray);
    // retrieve all relevant content-types and infos
    sets.Content = Object.assign({}, sets.Content, {
      Fields: {},
      PresentationFields: {}
    });
    if (templateConfiguration.TypeContent) {
      this.loadContentType(sets.Content.Fields, templateConfiguration.TypeContent, 'Content', templateConfiguration, inputTypeSnippets);
    }
    if (templateConfiguration.TypeContentPresentation) {
      this.loadContentType(sets.Content.PresentationFields, templateConfiguration.TypeContentPresentation, 'Content.Presentation', templateConfiguration, inputTypeSnippets);
    }
    if (templateConfiguration.HasList) {
      sets.List = Object.assign({}, sets.List, {
        Fields: {},
        PresentationFields: {}
      });
      if (templateConfiguration.TypeList) {
        this.loadContentType(sets.List.Fields, templateConfiguration.TypeList, 'Header', templateConfiguration, inputTypeSnippets);
      }
      if (templateConfiguration.TypeListPresentation) {
        this.loadContentType(sets.List.PresentationFields, templateConfiguration.TypeListPresentation, 'Header.Presentation', templateConfiguration, inputTypeSnippets);
      }
    } else {
      delete sets.List;
    }
    // maybe App-infos
    if (templateConfiguration.HasApp) {
      sets.App.Resources = {};
      sets.App.Settings = {};
      this.loadContentType(sets.App.Resources, 'App-Resources', 'App.Resources', templateConfiguration, inputTypeSnippets);
      this.loadContentType(sets.App.Settings, 'App-Settings', 'App.Settings', templateConfiguration, inputTypeSnippets);
    }
    return sets;
  }
  /** Convert the list into a tree with set/subset/item */
  makeTree(list) {
    const tree = {};
    for (const o of list) {
      if (tree[o.set] === undefined) {
        tree[o.set] = {};
      }
      if (tree[o.set][o.subset] === undefined) {
        tree[o.set][o.subset] = [];
      }
      const reformatted = {
        key: o.name,
        label: this.label(o.set, o.subset, o.name),
        snip: o.content,
        help: o.help || this.help(o.set, o.subset, o.name),
        links: this.linksList(o.links)
      };
      tree[o.set][o.subset].push(reformatted);
    }
    return tree;
  }
  label(set, subset, snip) {
    const key = this.getHelpKey(set, subset, snip, '.Key');
    let result = this.translate.instant(key);
    if (result === key) {
      result = snip;
    }
    return result;
  }
  getHelpKey(set, subset, snip, addition) {
    return 'SourceEditorSnippets' + '.' + set + '.' + subset + '.' + snip + addition;
  }
  help(set, subset, snip) {
    const key = this.getHelpKey(set, subset, snip, '.Help');
    let result = this.translate.instant(key);
    if (result === key) {
      result = '';
    }
    return result;
  }
  linksList(linksString) {
    if (!linksString) {
      return null;
    }
    const links = [];
    const llist = linksString.split('\n');
    for (const l of llist) {
      const pair = l.split(':');
      if (pair.length === 3) {
        const link = {
          name: pair[0].trim(),
          url: pair[1].trim() + ':' + pair[2].trim()
        };
        links.push(link);
      }
    }
    if (links.length === 0) {
      return null;
    }
    return links;
  }
  /** spm TODO: this happens after snippets are calculated for the first time. Needs to be fixed */
  loadContentType(target, type, prefix, templateConfiguration, inputTypeSnippets) {
    this.getFields(templateConfiguration.AppId, type).subscribe(fields => {
      // first add common items if the content-type actually exists
      for (const field of fields) {
        const fieldname = field.StaticName;
        target[fieldname] = {
          key: fieldname,
          label: fieldname,
          snip: this.valuePlaceholder(prefix, fieldname, templateConfiguration),
          help: field.Metadata.merged.Notes || ' (' + field.Type.toLowerCase() + ') '
        };
        // try to add generic snippets specific to this input-type
        const snipDefaults = (0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_3__["default"])(target[fieldname]); // must be a copy, because target[fieldname] will grow
        this.attachSnippets(target, prefix, fieldname, field.InputType, snipDefaults, inputTypeSnippets);
      }
      if (fields.length) {
        const std = ['EntityId', 'EntityTitle', 'EntityGuid', 'EntityType', 'IsPublished', 'Modified'];
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < std.length; i++) {
          target[std[i]] = {
            key: std[i],
            label: std[i],
            snip: this.valuePlaceholder(prefix, std[i], templateConfiguration),
            help: this.translate.instant('SourceEditorSnippets.StandardFields.' + std[i] + '.Help')
          };
        }
      }
    });
  }
  valuePlaceholder(obj, val, templateConfiguration) {
    return templateConfiguration.Type.indexOf('Razor') > -1 ? '@' + obj + '.' + val : '[' + obj.replace('.', ':') + ':' + val + ']';
  }
  getFields(appId, staticName) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_content_type_fields_services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_1__.webApiFieldsAll), {
      params: {
        appid: appId.toString(),
        staticName
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(fields => {
      fields = fields.filter(field => field.Type !== _content_type_fields_constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__.DataTypeConstants.Empty);
      for (const fld of fields) {
        if (!fld.Metadata) {
          continue;
        }
        const md = fld.Metadata;
        const allMd = md.All;
        const typeMd = md[fld.Type];
        const inputMd = md[fld.InputType];
        md.merged = {
          ...allMd,
          ...typeMd,
          ...inputMd
        };
      }
      return fields;
    }));
  }
  attachSnippets(target, prefix, fieldname, inputType, snipDefaults, inputTypeSnippets) {
    let genericSnippet = inputTypeSnippets[inputType];
    if (inputType.indexOf('-')) {
      // if it's a sub-type, let's also get the master-type
      const fieldType = inputType.substring(0, inputType.indexOf('-'));
      if (fieldType) {
        const typeSnips = inputTypeSnippets[fieldType];
        if (typeSnips) {
          genericSnippet = genericSnippet ? genericSnippet.concat(typeSnips) : typeSnips;
        }
      }
    }
    if (!genericSnippet) {
      return;
    }
    if (target[fieldname].more === undefined) {
      target[fieldname].more = {};
    }
    const fieldSnips = target[fieldname].more;
    // tslint:disable-next-line:prefer-for-of
    for (let g = 0; g < genericSnippet.length; g++) {
      try {
        fieldSnips[fieldname + '-' + genericSnippet[g].name] = Object.assign({}, snipDefaults, {
          key: fieldname + ' - ' + genericSnippet[g].name,
          label: genericSnippet[g].name,
          snip: this.localizeGenericSnippet(genericSnippet[g].content, prefix, fieldname),
          collapse: true
        });
      } finally {}
    }
  }
  localizeGenericSnippet(snip, objName, fieldName) {
    snip = snip.replace(/(\$\{[0-9]+\:)var(\})/gi, '$1' + objName + '$2').replace(/(\$\{[0-9]+\:)prop(\})/gi, '$1' + fieldName + '$2');
    return snip;
  }
  static #_ = this.ɵfac = function SnippetsService_Factory(t) {
    return new (t || SnippetsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_6__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: SnippetsService,
    factory: SnippetsService.ɵfac
  });
}

/***/ }),

/***/ 83051:
/*!**********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/services/content-types-fields.service.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentTypesFieldsService: () => (/* binding */ ContentTypesFieldsService),
/* harmony export */   webApiFieldsAll: () => (/* binding */ webApiFieldsAll),
/* harmony export */   webApiFieldsGetShared: () => (/* binding */ webApiFieldsGetShared),
/* harmony export */   webApiFieldsRoot: () => (/* binding */ webApiFieldsRoot)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-administration/services/content-types.service */ 17693);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);









const webApiFieldsRoot = 'admin/field/';
const webApiFieldsAll = 'admin/field/all';
const webApiFieldsGetShared = 'admin/field/GetSharedFields';
class ContentTypesFieldsService {
  constructor(http, context, dnnContext) {
    this.http = http;
    this.context = context;
    this.dnnContext = dnnContext;
  }
  apiUrl(name) {
    return this.dnnContext.$2sxc.http.apiUrl(name);
  }
  typeListRetrieve() {
    return this.http.get(this.apiUrl(webApiFieldsRoot + 'DataTypes'), {
      params: {
        appid: this.context.appId.toString()
      }
    });
  }
  getInputTypesList() {
    return this.http.get(this.apiUrl(webApiFieldsRoot + 'InputTypes'), {
      params: {
        appid: this.context.appId.toString()
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(inputConfigs => {
      const inputTypeOptions = inputConfigs.map(config => {
        const option = {
          dataType: config.Type.substring(0, config.Type.indexOf('-')),
          inputType: config.Type,
          label: config.Label,
          description: config.Description,
          isDefault: config.IsDefault,
          isObsolete: config.IsObsolete,
          isRecommended: config.IsRecommended,
          obsoleteMessage: config.ObsoleteMessage,
          icon: config.IsDefault ? 'star' : config.IsRecommended ? 'star_outline' : null
        };
        return option;
      });
      return inputTypeOptions;
    }));
  }
  getReservedNames() {
    return this.http.get(this.apiUrl(webApiFieldsRoot + 'ReservedNames'));
  }
  /** Get all fields for some content type */
  getFields(contentTypeStaticName) {
    return this.http.get(this.apiUrl(webApiFieldsAll), {
      params: {
        appid: this.context.appId.toString(),
        staticName: contentTypeStaticName
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(fields => {
      if (fields) {
        for (const fld of fields) {
          if (!fld.Metadata) {
            continue;
          }
          const md = fld.Metadata;
          const allMd = md.All;
          const typeMd = md[fld.Type];
          const inputMd = md[fld.InputType];
          md.merged = {
            ...allMd,
            ...typeMd,
            ...inputMd
          };
        }
      }
      return fields;
    }));
  }
  /** Get all possible sharable fields for a new sharing */
  getShareableFields() {
    return this.http.get(this.apiUrl(webApiFieldsGetShared), {
      params: {
        appid: this.context.appId.toString()
      }
    });
  }
  /**
   * Get sharable fields which are possible for this attribute.
   *
   * Reason is that eg. a bool-attribute can only receive metadata from a bool attribute, etc.
   *
   * @param attributeId the existing attributeId which will receive the new metadata
   */
  getShareableFieldsFor(attributeId) {
    // TODO: @SDV - do the same as in getShareableFields()
    // but add parameter attributeId to the webapi call
    // I'll create the backend afterwards
    return this.http.get(this.apiUrl(webApiFieldsGetShared), {
      params: {
        appid: this.context.appId.toString(),
        attributeId: attributeId.toString()
      }
    });
  }
  addInheritedField(targetContentTypeId, sourceContentTypeStaticName, sourceFieldGuid, newName) {
    return this.http.post(this.apiUrl(webApiFieldsRoot + 'AddInheritedField'), null, {
      params: {
        AppId: this.context.appId.toString(),
        ContentTypeId: targetContentTypeId.toString(),
        SourceType: sourceContentTypeStaticName,
        SourceField: sourceFieldGuid,
        name: newName
      }
    });
  }
  share(attributeId, share = true) {
    return this.http.post(this.apiUrl(webApiFieldsRoot + 'Share'), null, {
      params: {
        appid: this.context.appId.toString(),
        attributeId: attributeId.toString(),
        share
      }
    });
  }
  inherit(attributeId, sourceFieldGuid) {
    return this.http.post(this.apiUrl(webApiFieldsRoot + 'Inherit'), null, {
      params: {
        appid: this.context.appId.toString(),
        attributeId: attributeId.toString(),
        inheritMetadataOf: sourceFieldGuid
      }
    });
  }
  reOrder(idArray, contentType) {
    return this.http.post(this.apiUrl(webApiFieldsRoot + 'Sort'), null, {
      params: {
        appid: this.context.appId.toString(),
        contentTypeId: contentType.Id.toString(),
        order: JSON.stringify(idArray)
      }
    });
  }
  setTitle(item, contentType) {
    return this.http.post(this.apiUrl(_app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_0__.webApiTypeRoot + 'SetTitle'), null, {
      params: {
        appid: this.context.appId.toString(),
        contentTypeId: contentType.Id.toString(),
        attributeId: item.Id.toString()
      }
    });
  }
  rename(fieldId, contentTypeId, newName) {
    return this.http.post(this.apiUrl(webApiFieldsRoot + 'Rename'), null, {
      params: {
        appid: this.context.appId.toString(),
        contentTypeId: contentTypeId.toString(),
        attributeId: fieldId.toString(),
        newName
      }
    });
  }
  delete(item, contentType) {
    if (item.IsTitle) {
      throw new Error('Can\'t delete Title');
    }
    return this.http.delete(this.apiUrl(webApiFieldsRoot + 'Delete'), {
      params: {
        appid: this.context.appId.toString(),
        contentTypeId: contentType.Id.toString(),
        attributeId: item.Id.toString()
      }
    });
  }
  add(newField, contentTypeId) {
    return this.http.post(this.apiUrl(webApiFieldsRoot + 'Add'), null, {
      params: {
        AppId: this.context.appId.toString(),
        ContentTypeId: contentTypeId.toString(),
        Id: newField.Id.toString(),
        Type: newField.Type,
        InputType: newField.InputType,
        StaticName: newField.StaticName,
        IsTitle: newField.IsTitle.toString(),
        Index: newField.SortOrder.toString()
      }
    });
  }
  updateInputType(id, staticName, inputType) {
    return this.http.post(this.apiUrl(webApiFieldsRoot + 'InputType'), null, {
      params: {
        appId: this.context.appId.toString(),
        attributeId: id.toString(),
        field: staticName,
        inputType
      }
    });
  }
  static #_ = this.ɵfac = function ContentTypesFieldsService_Factory(t) {
    return new (t || ContentTypesFieldsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_1__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_5__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ContentTypesFieldsService,
    factory: ContentTypesFieldsService.ɵfac
  });
}

/***/ }),

/***/ 41915:
/*!********************************************************!*\
  !*** ./projects/eav-ui/src/app/monaco-editor/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonacoEditorComponent: () => (/* reexport safe */ _monaco_editor_component__WEBPACK_IMPORTED_MODULE_0__.MonacoEditorComponent)
/* harmony export */ });
/* harmony import */ var _monaco_editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monaco-editor.component */ 96581);
/* harmony import */ var _monaco_editor_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monaco-editor.models */ 25838);


// export * from './monaco-editor.module';

/***/ }),

/***/ 25838:
/*!***********************************************************************!*\
  !*** ./projects/eav-ui/src/app/monaco-editor/monaco-editor.models.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_code-editor_code-editor_component_ts.js.map