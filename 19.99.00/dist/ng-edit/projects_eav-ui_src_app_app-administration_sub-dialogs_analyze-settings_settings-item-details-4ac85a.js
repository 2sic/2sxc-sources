"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_sub-dialogs_analyze-settings_settings-item-details-4ac85a"],{

/***/ 9250:
/*!******************************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/analyze-settings/settings-item-details/settings-item-details.component.ts ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsItemDetailsComponent: () => (/* binding */ SettingsItemDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../core */ 88692);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _services_analyze_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/analyze-settings.service */ 58362);
/* harmony import */ var _analyze_settings_value_analyze_settings_value_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../analyze-settings-value/analyze-settings-value.component */ 83804);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);

















class SettingsItemDetailsComponent {
  constructor(dialog, route) {
    this.dialog = dialog;
    this.route = route;
    this.stack = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.signal)(undefined);
    this.gridOptions = this.buildGridOptions();
    this.analyzeSettingsService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_analyze_settings_service__WEBPACK_IMPORTED_MODULE_4__.AnalyzeSettingsService);
    this.part = this.route.snapshot.parent.paramMap.get('part');
    const routeViewGuid = this.route.snapshot.paramMap.get('view');
    this.selectedView = ['undefined', 'null'].includes(routeViewGuid) ? undefined : routeViewGuid;
    this.settingsItemKey = this.route.snapshot.paramMap.get('settingsItemKey');
  }
  ngOnInit() {
    this.analyzeSettingsService.getStack(this.part, this.settingsItemKey, this.selectedView, true).subscribe(stack => {
      this.stack.set(stack);
    });
  }
  closeDialog() {
    this.dialog.close();
  }
  buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_2__.defaultGridOptions,
      columnDefs: [{
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_1__.ColumnDefinitions.TextWideActionClass,
        headerName: 'Value',
        field: '_value',
        cellRenderer: _analyze_settings_value_analyze_settings_value_component__WEBPACK_IMPORTED_MODULE_5__.AnalyzeSettingsValueComponent
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_1__.ColumnDefinitions.TextNarrow,
        field: 'Source'
      }]
    };
    return gridOptions;
  }
  static {
    this.ɵfac = function SettingsItemDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SettingsItemDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: SettingsItemDetailsComponent,
      selectors: [["app-settings-item-details"]],
      decls: 16,
      vars: 4,
      consts: [[1, "nav-component-wrapper"], ["mat-mdc-dialog-title", ""], [1, "dialog-title-box"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [1, "dialog-description"], [1, "grid-wrapper"], [1, "ag-theme-material", 3, "rowData", "gridOptions"], [1, "grid-more-actions-box"]],
      template: function SettingsItemDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettingsItemDetailsComponent_Template_button_click_5_listener() {
            return ctx.closeDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Here you can see where ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " is configured. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "ag-grid-angular", 6)(15, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.settingsItemKey);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.settingsItemKey);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rowData", ctx.stack())("gridOptions", ctx.gridOptions);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_3__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_11__.AgGridAngular],
      styles: ["code[_ngcontent-%COMP%] {\n  padding-left: 2px;\n  padding-right: 2px;\n  background-color: #eeeeee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLWl0ZW0tZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUNGIiwiZmlsZSI6InNldHRpbmdzLWl0ZW0tZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNvZGUge1xyXG4gIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9zdWItZGlhbG9ncy9hbmFseXplLXNldHRpbmdzL3NldHRpbmdzLWl0ZW0tZGV0YWlscy9zZXR0aW5ncy1pdGVtLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNBLGdjQUFnYyIsInNvdXJjZXNDb250ZW50IjpbImNvZGUge1xyXG4gIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_sub-dialogs_analyze-settings_settings-item-details-4ac85a.js.map