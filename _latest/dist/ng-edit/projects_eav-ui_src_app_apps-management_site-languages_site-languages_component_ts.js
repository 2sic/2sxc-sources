"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_apps-management_site-languages_site-languages_component_ts"],{

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
  static {
    this.ɵfac = function SiteLanguagesStatusComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SiteLanguagesStatusComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SiteLanguagesStatusComponent,
      selectors: [["app-site-languages-status"]],
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
/* harmony import */ var _ag_grid_community_client_side_row_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ag-grid-community/client-side-row-model */ 45705);
/* harmony import */ var _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ag-grid-community/core */ 41136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/boolean-filter/boolean-filter.component */ 91960);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _services_zone_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/zone.service */ 67130);
/* harmony import */ var _site_languages_status_site_languages_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./site-languages-status/site-languages-status.component */ 84466);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);













function SiteLanguagesComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ag-grid-angular", 1)(2, "mat-dialog-actions", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("rowData", ctx)("gridOptions", ctx_r0.gridOptions);
  }
}
class SiteLanguagesComponent {
  #zoneSvc;
  constructor() {
    this.gridOptions = this.#buildGridOptions();
    this.#zoneSvc = (0,_core__WEBPACK_IMPORTED_MODULE_2__.transient)(_services_zone_service__WEBPACK_IMPORTED_MODULE_7__.ZoneService);
    this.#refreshLanguagesSig = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.signal)(0);
    this.languages = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.computed)(() => {
      const r = this.#refreshLanguagesSig();
      return this.#zoneSvc.getLanguage(undefined);
    });
    _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleRegistry.registerModules([_ag_grid_community_client_side_row_model__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelModule]);
  }
  #refreshLanguagesSig;
  #toggleLanguage(language, enable) {
    this.#zoneSvc.toggleLanguage(language.Code, enable).subscribe(d => {
      this.#refreshLanguagesSig.set(this.#refreshLanguagesSig() + 1);
    });
  }
  #buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_5__.defaultGridOptions,
      columnDefs: [{
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_3__.ColumnDefinitions.IdWithDefaultRenderer,
        field: 'Code',
        filter: 'agTextColumnFilter',
        cellRendererParams: (() => {
          const params = {
            tooltipGetter: language => `ID: ${language.Code}`
          };
          return params;
        })()
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_3__.ColumnDefinitions.TextWide,
        headerName: 'Name',
        field: 'Culture',
        sort: 'asc',
        onCellClicked: params => {
          const language = params.data;
          this.#toggleLanguage(language, !language.IsEnabled);
        }
      }, {
        field: 'Status',
        width: 72,
        headerClass: 'dense',
        cellClass: 'no-padding no-outline'.split(' '),
        sortable: true,
        filter: _shared_components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_4__.BooleanFilterComponent,
        valueGetter: p => p.data.IsEnabled,
        cellRenderer: _site_languages_status_site_languages_status_component__WEBPACK_IMPORTED_MODULE_8__.SiteLanguagesStatusComponent,
        cellRendererParams: (() => {
          const params = {
            onToggleLanguage: (language, enable) => this.#toggleLanguage(language, enable)
          };
          return params;
        })()
      }]
    };
    return gridOptions;
  }
  static {
    this.ɵfac = function SiteLanguagesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SiteLanguagesComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: SiteLanguagesComponent,
      selectors: [["app-site-languages"]],
      decls: 1,
      vars: 1,
      consts: [[1, "grid-wrapper", "mat-tab-grid-wrapper"], [1, "ag-theme-material", 3, "rowData", "gridOptions"], ["align", "end"]],
      template: function SiteLanguagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, SiteLanguagesComponent_Conditional_0_Template, 3, 2, "div", 0);
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"]((tmp_0_0 = ctx.languages()()) ? 0 : -1, tmp_0_0);
        }
      },
      dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogActions, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_6__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_11__.AgGridAngular],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_apps-management_site-languages_site-languages_component_ts.js.map