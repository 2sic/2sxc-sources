"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_apps-management_site-languages_site-languages_component_ts-projects_e-de56ad"],{

/***/ 84466:
/*!*************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/site-languages/site-languages-status/site-languages-status.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SiteLanguagesStatusComponent: () => (/* binding */ SiteLanguagesStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);



class SiteLanguagesStatusComponent {
  agInit(params) {
    this.params = params;
    this.value = this.params.value;
  }
  refresh(params) {
    return true;
  }
  toggleLanguage(event) {
    const language = this.params.data;
    this.params.onToggleLanguage(language, event.checked);
  }
  static #_ = this.ɵfac = function SiteLanguagesStatusComponent_Factory(t) {
    return new (t || SiteLanguagesStatusComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SiteLanguagesStatusComponent,
    selectors: [["app-site-languages-status"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [[3, "change", "checked"]],
    template: function SiteLanguagesStatusComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-slide-toggle", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteLanguagesStatusComponent_Template_mat_slide_toggle_change_0_listener($event) {
          return ctx.toggleLanguage($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.value);
      }
    },
    dependencies: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__.MatSlideToggle],
    styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: flex;\n  padding-left: 8px;\n  padding-right: 8px;\n  align-items: center;\n}\n\n.mat-mdc-slide-toggle[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcHMtbWFuYWdlbWVudC9zaXRlLWxhbmd1YWdlcy9zaXRlLWxhbmd1YWdlcy1zdGF0dXMvc2l0ZS1sYW5ndWFnZXMtc3RhdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1tZGMtc2xpZGUtdG9nZ2xlIHtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 31374:
/*!********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/site-languages/site-languages.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SiteLanguagesComponent: () => (/* binding */ SiteLanguagesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 71870);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/boolean-filter/boolean-filter.component */ 91960);
/* harmony import */ var _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/id-field/id-field.component */ 36378);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _services_zone_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/zone.service */ 67130);
/* harmony import */ var _site_languages_status_site_languages_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site-languages-status/site-languages-status.component */ 84466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ag-grid-community/core */ 41136);
/* harmony import */ var _ag_grid_community_client_side_row_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ag-grid-community/client-side-row-model */ 45705);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core */ 34447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);















function SiteLanguagesComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ag-grid-angular", 1)(2, "mat-dialog-actions", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rowData", ctx.languages)("gridOptions", ctx_r0.gridOptions);
  }
}
class SiteLanguagesComponent {
  constructor() {
    this.gridOptions = this.buildGridOptions();
    this.refreshLanguages$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    this.zoneService = (0,_core__WEBPACK_IMPORTED_MODULE_9__.transient)(_services_zone_service__WEBPACK_IMPORTED_MODULE_3__.ZoneService);
    _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_5__.ModuleRegistry.registerModules([_ag_grid_community_client_side_row_model__WEBPACK_IMPORTED_MODULE_6__.ClientSideRowModelModule]);
  }
  ngOnInit() {
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this.refreshLanguages$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.startWith)(undefined), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.switchMap)(() => this.zoneService.getLanguages().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(undefined)))), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.share)())]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.map)(([languages]) => {
      return {
        languages
      };
    }));
  }
  ngOnDestroy() {
    this.refreshLanguages$.complete();
  }
  toggleLanguage(language, enable) {
    this.zoneService.toggleLanguage(language.Code, enable).subscribe({
      error: () => {
        this.refreshLanguages$.next();
      },
      next: () => {
        this.refreshLanguages$.next();
      }
    });
  }
  buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_2__.defaultGridOptions,
      columnDefs: [{
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_7__.ColumnDefinitions.Id,
        field: 'Code',
        filter: 'agTextColumnFilter',
        cellRenderer: _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_1__.IdFieldComponent,
        cellRendererParams: (() => {
          const params = {
            tooltipGetter: language => `ID: ${language.Code}`
          };
          return params;
        })()
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_7__.ColumnDefinitions.TextWide,
        headerName: 'Name',
        field: 'Culture',
        sort: 'asc',
        onCellClicked: params => {
          const language = params.data;
          this.toggleLanguage(language, !language.IsEnabled);
        }
      }, {
        field: 'Status',
        width: 72,
        headerClass: 'dense',
        cellClass: 'no-padding no-outline'.split(' '),
        sortable: true,
        filter: _shared_components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_0__.BooleanFilterComponent,
        valueGetter: params => {
          const language = params.data;
          return language.IsEnabled;
        },
        cellRenderer: _site_languages_status_site_languages_status_component__WEBPACK_IMPORTED_MODULE_4__.SiteLanguagesStatusComponent,
        cellRendererParams: (() => {
          const params = {
            onToggleLanguage: (language, enable) => this.toggleLanguage(language, enable)
          };
          return params;
        })()
      }]
    };
    return gridOptions;
  }
  static #_ = this.ɵfac = function SiteLanguagesComponent_Factory(t) {
    return new (t || SiteLanguagesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: SiteLanguagesComponent,
    selectors: [["app-site-languages"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [[1, "grid-wrapper", "mat-tab-grid-wrapper"], [1, "ag-theme-material", 3, "rowData", "gridOptions"], ["align", "end"]],
    template: function SiteLanguagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, SiteLanguagesComponent_Conditional_0_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_20__.AsyncPipe, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_8__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_21__.AgGridAngular],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 34447:
/*!***********************************************!*\
  !*** ./projects/eav-ui/src/app/core/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transient: () => (/* reexport safe */ _transient__WEBPACK_IMPORTED_MODULE_0__.transient)
/* harmony export */ });
/* harmony import */ var _transient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transient */ 55437);


/***/ }),

/***/ 55437:
/*!***************************************************!*\
  !*** ./projects/eav-ui/src/app/core/transient.ts ***!
  \***************************************************/
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

/***/ 71772:
/*!***************************************************************************!*\
  !*** ./projects/eav-ui/src/app/import-app/services/import-app.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportAppService: () => (/* binding */ ImportAppService),
/* harmony export */   webApiAppRoot: () => (/* binding */ webApiAppRoot)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/file-upload-dialog */ 34616);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);









const webApiAppRoot = 'admin/app/';
class ImportAppService {
  constructor(http, context, dnnContext) {
    this.http = http;
    this.context = context;
    this.dnnContext = dnnContext;
  }
  importApp(file, changedName, retryOnDuplicate = false) {
    const formData = new FormData();
    formData.append('File', file);
    formData.append('Name', changedName ?? '');
    return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiAppRoot + 'Import'), formData, {
      params: {
        zoneId: this.context.zoneId.toString()
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(result => {
      if (retryOnDuplicate && result.Messages[0]?.MessageType === _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_0__.FileUploadMessageTypes.Warning) {
        const folderName = prompt(result.Messages[0].Text + ' Would you like to install it using another folder name?');
        if (folderName) {
          return this.importApp(file, folderName, true);
        }
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
    }));
  }
  static #_ = this.ɵfac = function ImportAppService_Factory(t) {
    return new (t || ImportAppService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_1__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_6__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ImportAppService,
    factory: ImportAppService.ɵfac
  });
}

/***/ }),

/***/ 36378:
/*!**********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/components/id-field/id-field.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdFieldComponent: () => (/* binding */ IdFieldComponent)
/* harmony export */ });
/* harmony import */ var _helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/copy-to-clipboard.helper */ 70519);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);








const _c0 = (a0, a1) => ({
  "align-start": a0,
  "align-end": a1
});
class IdFieldComponent {
  constructor(snackBar) {
    this.snackBar = snackBar;
  }
  agInit(params) {
    this.id = params.value;
    this.align = typeof this.id === 'number' ? 'end' : 'start';
    this.tooltip = params.tooltipGetter(params.data);
  }
  refresh(params) {
    return true;
  }
  copy() {
    (0,_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_0__.copyToClipboard)(this.tooltip);
    this.snackBar.open('Copied to clipboard', null, {
      duration: 2000
    });
  }
  static #_ = this.ɵfac = function IdFieldComponent_Factory(t) {
    return new (t || IdFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: IdFieldComponent,
    selectors: [["app-id-field"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 6,
    consts: [["matRipple", "", 1, "id-box", "highlight", 3, "click", "tippy", "ngClass"], [1, "id"], [1, "icon"]],
    template: function IdFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IdFieldComponent_Template_div_click_0_listener() {
          return ctx.copy();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "file_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tippy", ctx.tooltip)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c0, ctx.align === "start", ctx.align === "end"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.id);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__.TippyDirective],
    styles: [".id-box[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.id-box.align-start[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.id-box.align-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.id-box[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%] {\n  max-width: 100%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.id-box[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.id-box[_ngcontent-%COMP%]:hover   .id[_ngcontent-%COMP%] {\n  display: none;\n}\n.id-box[_ngcontent-%COMP%]:not(:hover)   .icon[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2lkLWZpZWxkL2lkLWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsMkJBQUE7QUFDSjtBQUVFO0VBQ0UseUJBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUlFO0VBQ0UscUJBQUE7QUFGSjtBQUlJO0VBQ0UsYUFBQTtBQUZOO0FBT0k7RUFDRSxhQUFBO0FBTE4iLCJzb3VyY2VzQ29udGVudCI6WyIuaWQtYm94IHtcclxuICBwYWRkaW5nOiAwIDhweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmLmFsaWduLXN0YXJ0IHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gICYuYWxpZ24tZW5kIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG5cclxuICAuaWQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgLmlkIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6bm90KDpob3Zlcikge1xyXG4gICAgLmljb24ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_apps-management_site-languages_site-languages_component_ts-projects_e-de56ad.js.map