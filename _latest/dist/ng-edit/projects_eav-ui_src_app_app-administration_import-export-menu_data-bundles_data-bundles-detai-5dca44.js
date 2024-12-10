"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_import-export-menu_data-bundles_data-bundles-detai-5dca44"],{

/***/ 56659:
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/import-export-menu/data-bundles/data-bundles-detail/data-bundles-detail-actions/data-bundles-detail-actions.component.ts ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataBundlesDetailActionsComponent: () => (/* binding */ DataBundlesDetailActionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var projects_eav_ui_src_app_shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/eav-ui/src/app/shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);







class DataBundlesDetailActionsComponent {
  agInit(params) {
    this.params = params;
    this.item = params.data;
  }
  refresh(params) {
    return true;
  }
  do(verb) {
    this.params.do(verb, this.item);
  }
  static {
    this.ɵfac = function DataBundlesDetailActionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DataBundlesDetailActionsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DataBundlesDetailActionsComponent,
      selectors: [["app-data-bundle-actions"]],
      decls: 4,
      vars: 0,
      consts: [[1, "actions-component"], ["matRipple", "", "tippy", "Remove (not yet implemented)", 1, "eav-grid-action-button", "highlight", 3, "click"]],
      template: function DataBundlesDetailActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataBundlesDetailActionsComponent_Template_div_click_1_listener() {
            return ctx.do("delete");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "do_not_disturb_on");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuModule, projects_eav_ui_src_app_shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 74982:
/*!*****************************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/import-export-menu/data-bundles/data-bundles-detail/data-bundles-detail.component.ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataBundlesDetailComponent: () => (/* binding */ DataBundlesDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var projects_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/core */ 88692);
/* harmony import */ var projects_eav_ui_src_app_shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/eav-ui/src/app/shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var projects_eav_ui_src_app_shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/eav-ui/src/app/shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var projects_eav_ui_src_app_shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/eav-ui/src/app/shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var _data_bundles_query_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data-bundles-query.service */ 84242);
/* harmony import */ var _data_bundles_detail_actions_data_bundles_detail_actions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data-bundles-detail-actions/data-bundles-detail-actions.component */ 56659);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);


















function DataBundlesDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DataBundlesDetailComponent_Conditional_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 4)(8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "ag-grid-angular", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.dataBundleName(), " Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rowData", ctx_r1.dataBundles())("gridOptions", ctx_r1.gridOptions);
  }
}
class DataBundlesDetailComponent {
  #dataBundlesQueryService;
  constructor(dialog, route) {
    this.dialog = dialog;
    this.route = route;
    this.#dataBundlesQueryService = (0,projects_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_data_bundles_query_service__WEBPACK_IMPORTED_MODULE_4__.DataBundlesQueryService);
    this.dataBundles = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.signal)(null);
    this.dataBundleName = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.signal)(null);
    this.gridOptions = this.#buildGridOptions();
  }
  ngOnInit() {
    this.route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(params => {
      this.dataBundleName.set(params.name);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(params => this.#dataBundlesQueryService.fetchQuery(params.guid)), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(d => this.dataBundles.set(d))).subscribe();
  }
  closeDialog() {
    this.dialog.close();
  }
  #deleteItem(item) {
    console.log(item);
    alert('remove not yet implemented');
  }
  #buildGridOptions() {
    const gridOptions = {
      ...projects_eav_ui_src_app_shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_2__.defaultGridOptions,
      columnDefs: [{
        ...projects_eav_ui_src_app_shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_1__.ColumnDefinitions.TextWideMin100,
        headerName: 'Title',
        field: 'Title',
        flex: 2
      }, {
        ...projects_eav_ui_src_app_shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_1__.ColumnDefinitions.TextWideMin100,
        headerName: 'Typename',
        field: 'TypeName',
        flex: 2
      }, {
        ...projects_eav_ui_src_app_shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_1__.ColumnDefinitions.ActionsPinnedRight3,
        cellRenderer: _data_bundles_detail_actions_data_bundles_detail_actions_component__WEBPACK_IMPORTED_MODULE_5__.DataBundlesDetailActionsComponent,
        cellRendererParams: (() => {
          const params = {
            do: (verb, item) => {
              switch (verb) {
                case 'delete':
                  this.#deleteItem(item);
                  break;
              }
            }
          };
          return params;
        })()
      }]
    };
    return gridOptions;
  }
  static {
    this.ɵfac = function DataBundlesDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DataBundlesDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: DataBundlesDetailComponent,
      selectors: [["app-data-bundles-detail"]],
      decls: 1,
      vars: 1,
      consts: [["appToggleDebug", "", 1, "eav-dialog", "nav-component-wrapper"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [1, "eav-dialog-content", "nav-component-wrapper"], [1, "grid-wrapper", "mat-tab-grid-wrapper"], [1, "ag-theme-material", 3, "rowData", "gridOptions"]],
      template: function DataBundlesDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, DataBundlesDetailComponent_Conditional_0_Template, 10, 3, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.dataBundles() ? 0 : -1);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, projects_eav_ui_src_app_shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_3__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_13__.AgGridAngular],
      styles: [".grid-height[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 560px);\n  min-height: 135px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9pbXBvcnQtZXhwb3J0LW1lbnUvZGF0YS1idW5kbGVzL2RhdGEtYnVuZGxlcy1kZXRhaWwvZGF0YS1idW5kbGVzLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0VBQ0EsaUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWhlaWdodCB7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDU2MHB4KTtcclxuICBtaW4taGVpZ2h0OiAxMzVweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_import-export-menu_data-bundles_data-bundles-detai-5dca44.js.map