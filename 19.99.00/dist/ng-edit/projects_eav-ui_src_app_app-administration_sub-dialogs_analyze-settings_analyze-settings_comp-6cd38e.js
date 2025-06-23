"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_sub-dialogs_analyze-settings_analyze-settings_comp-6cd38e"],{

/***/ 36352:
/*!****************************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/analyze-settings/analyze-settings-key/analyze-settings-key.component.ts ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyzeSettingsKeyComponent: () => (/* binding */ AnalyzeSettingsKeyComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _core_transient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../core/transient */ 12938);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_services_clipboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/clipboard.service */ 25081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);






class AnalyzeSettingsKeyComponent {
  constructor() {
    this.clipboard = (0,_core_transient__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_services_clipboard_service__WEBPACK_IMPORTED_MODULE_2__.ClipboardService);
  }
  agInit(params) {
    this.key = params.value;
  }
  refresh(params) {
    return true;
  }
  static {
    this.ɵfac = function AnalyzeSettingsKeyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AnalyzeSettingsKeyComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AnalyzeSettingsKeyComponent,
      selectors: [["app-analyze-settings-key"]],
      decls: 3,
      vars: 2,
      consts: [["matRipple", "", 1, "key-box", "highlight", 3, "click", "tippy"], [1, "key"]],
      template: function AnalyzeSettingsKeyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AnalyzeSettingsKeyComponent_Template_div_click_0_listener() {
            return ctx.clipboard.copyToClipboard(ctx.key);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", ctx.key);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.key);
        }
      },
      dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__.TippyDirective],
      styles: [".key-box[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.key-box[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  width: 100%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuYWx5emUtc2V0dGluZ3Mta2V5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJhbmFseXplLXNldHRpbmdzLWtleS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5rZXktYm94IHtcclxuICBwYWRkaW5nOiAwIDhweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAua2V5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9zdWItZGlhbG9ncy9hbmFseXplLXNldHRpbmdzL2FuYWx5emUtc2V0dGluZ3Mta2V5L2FuYWx5emUtc2V0dGluZ3Mta2V5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNBLGdwQkFBZ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLmtleS1ib3gge1xyXG4gIHBhZGRpbmc6IDAgOHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5rZXkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 55117:
/*!***************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/analyze-settings/analyze-settings.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyzeSettingsComponent: () => (/* binding */ AnalyzeSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core */ 88692);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/routing/dialog-routing.service */ 60852);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services */ 75445);
/* harmony import */ var _services_analyze_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/analyze-settings.service */ 58362);
/* harmony import */ var _analyze_settings_key_analyze_settings_key_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./analyze-settings-key/analyze-settings-key.component */ 36352);
/* harmony import */ var _analyze_settings_total_results_analyze_settings_total_results_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./analyze-settings-total-results/analyze-settings-total-results.component */ 60416);
/* harmony import */ var _analyze_settings_value_analyze_settings_value_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./analyze-settings-value/analyze-settings-value.component */ 83804);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);




























function AnalyzeSettingsComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const view_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", view_r1.Guid);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](view_r1.Name);
  }
}
class AnalyzeSettingsComponent {
  #viewsSvc;
  #analyzeSettingsSvc;
  #dialogRouter;
  constructor(dialog) {
    this.dialog = dialog;
    this.gridOptions = this.buildGridOptions();
    this.#viewsSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services__WEBPACK_IMPORTED_MODULE_5__.ViewsService);
    this.#analyzeSettingsSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_analyze_settings_service__WEBPACK_IMPORTED_MODULE_6__.AnalyzeSettingsService);
    this.#dialogRouter = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_4__.DialogRoutingService);
    this.selectedView = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.signal)(undefined);
    this.views = this.#viewsSvc.getAll();
    this.stack = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.computed)(() => this.#analyzeSettingsSvc.getStackSig(this.part, undefined, this.selectedView(), true));
    this.part = this.#dialogRouter.getParam('part');
  }
  ngOnInit() {
    this.#getStack();
  }
  closeDialog() {
    this.dialog.close();
  }
  changeView(viewGuid) {
    this.selectedView.set(viewGuid);
    this.#getStack();
  }
  #getStack() {
    this.stack();
  }
  buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_2__.defaultGridOptions,
      columnDefs: [{
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_1__.ColumnDefinitions.TextWideActionClass,
        headerName: 'Key',
        field: 'Path',
        cellRenderer: _analyze_settings_key_analyze_settings_key_component__WEBPACK_IMPORTED_MODULE_7__.AnalyzeSettingsKeyComponent
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_1__.ColumnDefinitions.TextWideActionClass,
        headerName: 'Value',
        field: '_value',
        cellRenderer: _analyze_settings_value_analyze_settings_value_component__WEBPACK_IMPORTED_MODULE_9__.AnalyzeSettingsValueComponent
      }, {
        field: 'Source',
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_1__.ColumnDefinitions.TextNarrow
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_1__.ColumnDefinitions.Items,
        headerName: 'Total',
        field: 'TotalResults',
        width: 72,
        cellClass: 'no-outline',
        cellRenderer: _analyze_settings_total_results_analyze_settings_total_results_component__WEBPACK_IMPORTED_MODULE_8__.AnalyzeSettingsTotalResultsComponent,
        cellRendererParams: (() => {
          const params = {
            openDetails: stackItem => {
              this.#dialogRouter.navRelative([`details/${this.selectedView()}/${stackItem.Path}`]);
            }
          };
          return params;
        })()
      }]
    };
    return gridOptions;
  }
  static {
    this.ɵfac = function AnalyzeSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AnalyzeSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: AnalyzeSettingsComponent,
      selectors: [["app-analyze-settings"]],
      decls: 23,
      vars: 5,
      consts: [[1, "nav-component-wrapper"], ["mat-mdc-dialog-title", ""], [1, "dialog-title-box"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [1, "padding-class"], [1, "dialog-description"], ["color", "accent", 1, "view-select-box"], [3, "ngModelChange", "ngModel"], [3, "value"], [1, "grid-wrapper", "padding-class"], [1, "ag-theme-material", 3, "rowData", "gridOptions"], [1, "grid-more-actions-box"]],
      template: function AnalyzeSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AnalyzeSettingsComponent_Template_button_click_5_listener() {
            return ctx.closeDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 4)(9, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, " Settings and Resources are consolidated from many sources. Here you see what the resulting values would be. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "mat-form-field", 6)(13, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Merge settings / resources of a View");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "mat-select", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AnalyzeSettingsComponent_Template_mat_select_ngModelChange_15_listener($event) {
            return ctx.changeView($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "mat-option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "No view selected - this is how APIs see the data");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterCreate"](18, AnalyzeSettingsComponent_For_19_Template, 2, 2, "mat-option", 8, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "ag-grid-angular", 10)(22, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Analyze ", ctx.part, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.selectedView());
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeater"](ctx.views());
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rowData", ctx.stack()())("gridOptions", ctx.gridOptions);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterOutlet, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOptionModule, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_3__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_19__.AgGridAngular],
      styles: [".view-select-box[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\n.padding-class[_ngcontent-%COMP%] {\n  padding: 0px 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuYWx5emUtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6ImFuYWx5emUtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlldy1zZWxlY3QtYm94IHtcclxuICB3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWNsYXNzIHtcclxuICBwYWRkaW5nOiAwcHggMjRweDtcclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9zdWItZGlhbG9ncy9hbmFseXplLXNldHRpbmdzL2FuYWx5emUtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGO0FBQ0Esb2JBQW9iIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZXctc2VsZWN0LWJveCB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4ucGFkZGluZy1jbGFzcyB7XHJcbiAgcGFkZGluZzogMHB4IDI0cHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 60416:
/*!************************************************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/analyze-settings/analyze-settings-total-results/analyze-settings-total-results.component.ts ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyzeSettingsTotalResultsComponent: () => (/* binding */ AnalyzeSettingsTotalResultsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);





function AnalyzeSettingsTotalResultsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.totalResults);
  }
}
function AnalyzeSettingsTotalResultsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnalyzeSettingsTotalResultsComponent_Conditional_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.openDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5)(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.totalResults);
  }
}
class AnalyzeSettingsTotalResultsComponent {
  agInit(params) {
    this.totalResults = params.value;
    this.params = params;
    this.stackItem = this.params.data;
  }
  refresh(params) {
    return true;
  }
  openDetails() {
    this.params.openDetails(this.stackItem);
  }
  static {
    this.ɵfac = function AnalyzeSettingsTotalResultsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AnalyzeSettingsTotalResultsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnalyzeSettingsTotalResultsComponent,
      selectors: [["app-analyze-settings-total-results"]],
      decls: 2,
      vars: 2,
      consts: [[1, "input-component", "no-click"], ["matRipple", "", "tippy", "Open details", 1, "input-component", "highlight"], [1, "eav-grid-action-button", "disabled"], ["matRipple", "", "tippy", "Open details", 1, "input-component", "highlight", 3, "click"], [1, "text"], [1, "eav-grid-action-button"]],
      template: function AnalyzeSettingsTotalResultsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AnalyzeSettingsTotalResultsComponent_Conditional_0_Template, 6, 1, "div", 0)(1, AnalyzeSettingsTotalResultsComponent_Conditional_1_Template, 6, 1, "div", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.totalResults <= 1 ? 0 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.totalResults > 1 ? 1 : -1);
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple],
      styles: [".no-click[_ngcontent-%COMP%] {\n  cursor: default;\n  -webkit-user-select: initial;\n          user-select: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuYWx5emUtc2V0dGluZ3MtdG90YWwtcmVzdWx0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0FBQ0YiLCJmaWxlIjoiYW5hbHl6ZS1zZXR0aW5ncy10b3RhbC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLWNsaWNrIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgdXNlci1zZWxlY3Q6IGluaXRpYWw7XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9zdWItZGlhbG9ncy9hbmFseXplLXNldHRpbmdzL2FuYWx5emUtc2V0dGluZ3MtdG90YWwtcmVzdWx0cy9hbmFseXplLXNldHRpbmdzLXRvdGFsLXJlc3VsdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtBQUNGO0FBRUEsZ2JBQWdiIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLWNsaWNrIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgdXNlci1zZWxlY3Q6IGluaXRpYWw7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_sub-dialogs_analyze-settings_analyze-settings_comp-6cd38e.js.map