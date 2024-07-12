"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_apps-management_add-app-from-folder_add-app-from-folder_component_ts--ecd9e6"],{

/***/ 82294:
/*!******************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/add-app-from-folder/add-app-from-folder.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddAppFromFolderComponent: () => (/* binding */ AddAppFromFolderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 71870);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _features_feature_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../features/feature-names */ 28136);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/base.component */ 43176);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_services_features_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/features.service */ 44858);
/* harmony import */ var _services_apps_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/apps-list.service */ 83583);
/* harmony import */ var _app_name_show_app_name_show_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-name-show/app-name-show.component */ 10738);
/* harmony import */ var _checkbox_cell_checkbox_cell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkbox-cell/checkbox-cell.component */ 37542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _features_feature_text_info_feature_text_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../features/feature-text-info/feature-text-info.component */ 95469);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core */ 34447);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);





















function AddAppFromFolderComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Nothing to show. All apps in the 2sxc folder are already installed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function AddAppFromFolderComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ag-grid-angular", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rowData", vm_r2.pendingApps)("gridOptions", ctx_r2.gridOptions);
  }
}
function AddAppFromFolderComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Add App from Folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "app-feature-text-info", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, " Select an app from the apps-folder which has been copied there (or git-cloned) but not installed yet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, AddAppFromFolderComponent_Conditional_0_Conditional_8_Template, 2, 0, "p")(9, AddAppFromFolderComponent_Conditional_0_Conditional_9_Template, 2, 2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "mat-dialog-actions", 5)(11, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddAppFromFolderComponent_Conditional_0_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddAppFromFolderComponent_Conditional_0_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.install());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, " Install ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const vm_r2 = ctx;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("featureNameId", "AppSyncWithSiteFiles");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](8, (vm_r2.pendingApps == null ? null : vm_r2.pendingApps.length) == 0 ? 8 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](9, (vm_r2.pendingApps == null ? null : vm_r2.pendingApps.length) > 0 ? 9 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r2.pendingApps.length === 0 || ctx_r2.installing);
  }
}
class AddAppFromFolderComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
  constructor(dialogRef, snackBar) {
    super();
    this.dialogRef = dialogRef;
    this.snackBar = snackBar;
    this.hostClass = 'dialog-component';
    this.gridOptions = this.buildGridOptions();
    this.pendingApps = [];
    this.installing = false;
    this.refreshApps$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    this.features = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_shared_services_features_service__WEBPACK_IMPORTED_MODULE_3__.FeaturesService);
    this.isAddFromFolderEnabled = this.features.isEnabled(_features_feature_names__WEBPACK_IMPORTED_MODULE_0__.FeatureNames.AppSyncWithSiteFiles);
    this.appsListService = (0,_core__WEBPACK_IMPORTED_MODULE_9__.transient)(_services_apps_list_service__WEBPACK_IMPORTED_MODULE_4__.AppsListService);
  }
  ngOnInit() {
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this.refreshApps$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.startWith)(undefined), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.switchMap)(() => this.appsListService.getPendingApps().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(undefined)))), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.share)())]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.map)(([pendingApps]) => ({
      pendingApps
    })));
  }
  ngOnDestroy() {
    this.refreshApps$.complete();
    super.ngOnDestroy();
  }
  closeDialog() {
    this.dialogRef.close();
  }
  onChange(app, enabled) {
    if (enabled) this.pendingApps.push(app);else this.pendingApps.splice(this.pendingApps.indexOf(app), 1);
  }
  install() {
    this.installing = true;
    this.snackBar.open('Installing', undefined, {
      duration: 2000
    });
    this.appsListService.installPendingApps(this.pendingApps).subscribe({
      error: () => {
        this.installing = false;
        this.snackBar.open('Failed to install app. Please check console for more information', undefined, {
          duration: 3000
        });
      },
      next: () => {
        this.installing = false;
        this.snackBar.open('Installed app', undefined, {
          duration: 2000
        });
        this.closeDialog();
      }
    });
  }
  buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_2__.defaultGridOptions,
      columnDefs: [{
        field: '',
        width: 40,
        cellClass: 'no-outline',
        sortable: true,
        cellRenderer: _checkbox_cell_checkbox_cell_component__WEBPACK_IMPORTED_MODULE_6__.CheckboxCellComponent,
        cellRendererParams: () => {
          const params = {
            isDisabled: !this.isAddFromFolderEnabled,
            onChange: (app, enabled) => this.onChange(app, enabled)
          };
          return params;
        }
      }, {
        field: 'Name',
        flex: 1,
        cellClass: 'no-outline',
        sortable: true,
        sort: 'asc',
        filter: 'agTextColumnFilter',
        cellRenderer: _app_name_show_app_name_show_component__WEBPACK_IMPORTED_MODULE_5__.AppNameShowComponent,
        cellRendererParams: (() => {
          const params = {
            tooltipGetter: pendingApp => `Server folder: ${pendingApp.ServerFolder}\nFolder: ${pendingApp.Folder}\nVersion: ${pendingApp.Version}\nDescription: ${pendingApp.Description}`
          };
          return params;
        })()
      }]
    };
    return gridOptions;
  }
  static #_ = this.ɵfac = function AddAppFromFolderComponent_Factory(t) {
    return new (t || AddAppFromFolderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: AddAppFromFolderComponent,
    selectors: [["app-add-app-from-folder"]],
    hostVars: 1,
    hostBindings: function AddAppFromFolderComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵhostProperty"]("className", ctx.hostClass);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [[1, "eav-dialog"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], [1, "eav-dialog-content"], [3, "featureNameId"], ["align", "end"], ["type", "button", "mat-raised-button", "", 3, "click"], ["type", "button", "mat-raised-button", "", "color", "accent", 3, "click", "disabled"], [1, "ag-theme-material", "eav-grid", 3, "rowData", "gridOptions"]],
    template: function AddAppFromFolderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, AddAppFromFolderComponent_Conditional_0_Template, 15, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe, _features_feature_text_info_feature_text_info_component__WEBPACK_IMPORTED_MODULE_7__.FeatureTextInfoComponent, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_8__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_23__.AgGridAngular],
    styles: [".eav-grid[_ngcontent-%COMP%] {\n  height: 200px;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcHMtbWFuYWdlbWVudC9hZGQtYXBwLWZyb20tZm9sZGVyL2FkZC1hcHAtZnJvbS1mb2xkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmVhdi1ncmlkIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 10738:
/*!**************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/add-app-from-folder/app-name-show/app-name-show.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNameShowComponent: () => (/* binding */ AppNameShowComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




class AppNameShowComponent {
  agInit(params) {
    this.name = params.value;
    this.tooltip = params.tooltipGetter(params.data);
  }
  refresh(params) {
    return true;
  }
  static #_ = this.ɵfac = function AppNameShowComponent_Factory(t) {
    return new (t || AppNameShowComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppNameShowComponent,
    selectors: [["app-app-name-show"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 2,
    consts: [[1, "name-box"], [1, "info-icon", 3, "tippy"]],
    template: function AppNameShowComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tippy", ctx.tooltip);
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
    styles: [".name-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.info-icon[_ngcontent-%COMP%] {\n  margin-left: 7px;\n  margin-bottom: 3px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcHMtbWFuYWdlbWVudC9hZGQtYXBwLWZyb20tZm9sZGVyL2FwcC1uYW1lLXNob3cvYXBwLW5hbWUtc2hvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLm5hbWUtYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgO1xyXG59XHJcblxyXG4uaW5mby1pY29uIHtcclxuICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDNweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 37542:
/*!**************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/add-app-from-folder/checkbox-cell/checkbox-cell.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckboxCellComponent: () => (/* binding */ CheckboxCellComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class CheckboxCellComponent {
  agInit(params) {
    this.params = params;
  }
  refresh(params) {
    return true;
  }
  onChange(event) {
    this.params.onChange(this.params.data, event.currentTarget.checked);
  }
  static #_ = this.ɵfac = function CheckboxCellComponent_Factory(t) {
    return new (t || CheckboxCellComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CheckboxCellComponent,
    selectors: [["app-checkbox-cell"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 2,
    consts: [[1, "checkbox-box"], ["type", "checkbox", 1, "checkbox-input", 3, "change", "disabled", "checked"]],
    template: function CheckboxCellComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxCellComponent_Template_input_change_1_listener($event) {
          return ctx.onChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.params.isDisabled)("checked", ctx.params.value);
      }
    },
    styles: [".checkbox-box[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.checkbox-input[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcHMtbWFuYWdlbWVudC9hZGQtYXBwLWZyb20tZm9sZGVyL2NoZWNrYm94LWNlbGwvY2hlY2tib3gtY2VsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tib3gtYm94IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2hlY2tib3gtaW5wdXQge1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTVweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_apps-management_add-app-from-folder_add-app-from-folder_component_ts--ecd9e6.js.map