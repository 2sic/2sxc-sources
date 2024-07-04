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
/* harmony import */ var _shared_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/helpers/copy-to-clipboard.helper */ 70519);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var projects_eav_ui_src_app_shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/eav-ui/src/app/shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);







class AnalyzeSettingsKeyComponent {
  constructor(snackBar) {
    this.snackBar = snackBar;
  }
  agInit(params) {
    this.key = params.value;
  }
  refresh(params) {
    return true;
  }
  copy() {
    (0,_shared_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_0__.copyToClipboard)(this.key);
    this.snackBar.open('Copied to clipboard', null, {
      duration: 2000
    });
  }
  static #_ = this.ɵfac = function AnalyzeSettingsKeyComponent_Factory(t) {
    return new (t || AnalyzeSettingsKeyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AnalyzeSettingsKeyComponent,
    selectors: [["app-analyze-settings-key"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 2,
    consts: [["matRipple", "", 1, "key-box", "highlight", 3, "click", "tippy"], [1, "key"]],
    template: function AnalyzeSettingsKeyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AnalyzeSettingsKeyComponent_Template_div_click_0_listener() {
          return ctx.copy();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tippy", ctx.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.key);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple, projects_eav_ui_src_app_shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__.TippyDirective],
    styles: [".key-box[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.key-box[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  width: 100%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9zdWItZGlhbG9ncy9hbmFseXplLXNldHRpbmdzL2FuYWx5emUtc2V0dGluZ3Mta2V5L2FuYWx5emUtc2V0dGluZ3Mta2V5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5rZXktYm94IHtcclxuICBwYWRkaW5nOiAwIDhweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAua2V5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
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
  static #_ = this.ɵfac = function AnalyzeSettingsTotalResultsComponent_Factory(t) {
    return new (t || AnalyzeSettingsTotalResultsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AnalyzeSettingsTotalResultsComponent,
    selectors: [["app-analyze-settings-total-results"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 2,
    consts: [[1, "input-component", "no-click"], ["matRipple", "", "tippy", "Open details", 1, "input-component", "highlight"], [1, "eav-grid-action-button", "disabled"], ["matRipple", "", "tippy", "Open details", 1, "input-component", "highlight", 3, "click"], [1, "text"], [1, "eav-grid-action-button"]],
    template: function AnalyzeSettingsTotalResultsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AnalyzeSettingsTotalResultsComponent_Conditional_0_Template, 6, 1, "div", 0)(1, AnalyzeSettingsTotalResultsComponent_Conditional_1_Template, 6, 1, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](0, ctx.totalResults <= 1 ? 0 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, ctx.totalResults > 1 ? 1 : -1);
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple],
    styles: [".no-click[_ngcontent-%COMP%] {\n  cursor: default;\n  -webkit-user-select: initial;\n          user-select: initial;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9zdWItZGlhbG9ncy9hbmFseXplLXNldHRpbmdzL2FuYWx5emUtc2V0dGluZ3MtdG90YWwtcmVzdWx0cy9hbmFseXplLXNldHRpbmdzLXRvdGFsLXJlc3VsdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLWNsaWNrIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgdXNlci1zZWxlY3Q6IGluaXRpYWw7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ 75445);
/* harmony import */ var _services_analyze_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/analyze-settings.service */ 58362);
/* harmony import */ var _analyze_settings_key_analyze_settings_key_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analyze-settings-key/analyze-settings-key.component */ 36352);
/* harmony import */ var _analyze_settings_total_results_analyze_settings_total_results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./analyze-settings-total-results/analyze-settings-total-results.component */ 60416);
/* harmony import */ var _analyze_settings_value_analyze_settings_value_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./analyze-settings-value/analyze-settings-value.component */ 83804);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core */ 34447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);





























function AnalyzeSettingsComponent_Conditional_0_For_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const view_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", view_r3.Guid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](view_r3.Name);
  }
}
function AnalyzeSettingsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AnalyzeSettingsComponent_Conditional_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 4)(9, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, " Settings and Resources are consolidated from many sources. Here you see what the resulting values would be. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "mat-form-field", 6)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Merge settings / resources of a View");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "mat-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function AnalyzeSettingsComponent_Conditional_0_Template_mat_select_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.changeView($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "No view selected - this is how APIs see the data");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](18, AnalyzeSettingsComponent_Conditional_0_For_19_Template, 2, 2, "mat-option", 8, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "ag-grid-angular", 10)(22, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vm_r4 = ctx;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Analyze ", ctx_r1.part, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", vm_r4.selectedView);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](vm_r4.views);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("rowData", vm_r4.stack)("gridOptions", ctx_r1.gridOptions);
  }
}
class AnalyzeSettingsComponent {
  constructor(dialogRef, route, router) {
    this.dialogRef = dialogRef;
    this.route = route;
    this.router = router;
    this.gridOptions = this.buildGridOptions();
    this.viewsService = (0,_core__WEBPACK_IMPORTED_MODULE_8__.transient)(_services__WEBPACK_IMPORTED_MODULE_1__.ViewsService);
    this.analyzeSettingsService = (0,_core__WEBPACK_IMPORTED_MODULE_8__.transient)(_services_analyze_settings_service__WEBPACK_IMPORTED_MODULE_2__.AnalyzeSettingsService);
    this.part = this.route.snapshot.paramMap.get('part');
  }
  ngOnInit() {
    this.views$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject([]);
    this.selectedView$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(undefined);
    this.stack$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject([]);
    this.getViews();
    this.getStack();
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([this.views$, this.selectedView$, this.stack$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(([views, selectedView, stack]) => {
      const viewModel = {
        views,
        selectedView,
        stack
      };
      return viewModel;
    }));
  }
  ngOnDestroy() {
    this.views$.complete();
    this.selectedView$.complete();
    this.stack$.complete();
  }
  closeDialog() {
    this.dialogRef.close();
  }
  changeView(viewGuid) {
    this.selectedView$.next(viewGuid);
    this.getStack();
  }
  getViews() {
    this.viewsService.getAll().subscribe(views => {
      this.views$.next(views);
    });
  }
  getStack() {
    this.analyzeSettingsService.getStack(this.part, undefined, this.selectedView$.value, true).subscribe(stack => {
      this.stack$.next(stack);
    });
  }
  buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_0__.defaultGridOptions,
      columnDefs: [{
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_7__.ColumnDefinitions.TextWideActionClass,
        headerName: 'Key',
        field: 'Path',
        cellRenderer: _analyze_settings_key_analyze_settings_key_component__WEBPACK_IMPORTED_MODULE_3__.AnalyzeSettingsKeyComponent
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_7__.ColumnDefinitions.TextWideActionClass,
        headerName: 'Value',
        field: '_value',
        cellRenderer: _analyze_settings_value_analyze_settings_value_component__WEBPACK_IMPORTED_MODULE_5__.AnalyzeSettingsValueComponent
      }, {
        field: 'Source',
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_7__.ColumnDefinitions.TextNarrow
      }, {
        headerName: 'Total',
        field: 'TotalResults',
        width: 72,
        headerClass: 'dense',
        cellClass: 'secondary-action no-padding no-outline'.split(' '),
        sortable: true,
        filter: 'agNumberColumnFilter',
        cellRenderer: _analyze_settings_total_results_analyze_settings_total_results_component__WEBPACK_IMPORTED_MODULE_4__.AnalyzeSettingsTotalResultsComponent,
        cellRendererParams: (() => {
          const params = {
            openDetails: stackItem => {
              this.router.navigate([`details/${this.selectedView$.value}/${stackItem.Path}`], {
                relativeTo: this.route
              });
            }
          };
          return params;
        })()
      }]
    };
    return gridOptions;
  }
  static #_ = this.ɵfac = function AnalyzeSettingsComponent_Factory(t) {
    return new (t || AnalyzeSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: AnalyzeSettingsComponent,
    selectors: [["app-analyze-settings"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [[1, "nav-component-wrapper"], ["mat-mdc-dialog-title", ""], [1, "dialog-title-box"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [1, "padding-class"], [1, "dialog-description"], ["color", "accent", 1, "view-select-box"], [3, "ngModelChange", "ngModel"], [3, "value"], [1, "grid-wrapper", "padding-class"], [1, "ag-theme-material", 3, "rowData", "gridOptions"], [1, "grid-more-actions-box"]],
    template: function AnalyzeSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, AnalyzeSettingsComponent_Conditional_0_Template, 23, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterOutlet, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOptionModule, _angular_common__WEBPACK_IMPORTED_MODULE_21__.AsyncPipe, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_6__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_22__.AgGridAngular],
    styles: [".view-select-box[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\n.padding-class[_ngcontent-%COMP%] {\n  padding: 0px 24px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9zdWItZGlhbG9ncy9hbmFseXplLXNldHRpbmdzL2FuYWx5emUtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZXctc2VsZWN0LWJveCB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4ucGFkZGluZy1jbGFzcyB7XHJcbiAgcGFkZGluZzogMHB4IDI0cHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_sub-dialogs_analyze-settings_analyze-settings_comp-6cd38e.js.map