"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_apps-management_add-app-from-folder_add-app-from-folder_component_ts--7d87aa"],{

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
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _features_feature_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/feature-names */ 28136);
/* harmony import */ var _features_feature_text_info_feature_text_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/feature-text-info/feature-text-info.component */ 95469);
/* harmony import */ var _features_features_scoped_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/features-scoped.service */ 74824);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _services_apps_list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/apps-list.service */ 83583);
/* harmony import */ var _app_name_show_app_name_show_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-name-show/app-name-show.component */ 10738);
/* harmony import */ var _checkbox_cell_checkbox_cell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkbox-cell/checkbox-cell.component */ 37542);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);



















function AddAppFromFolderComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Nothing to show. All apps in the 2sxc folder are already installed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function AddAppFromFolderComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ag-grid-angular", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rowData", ctx_r0.pendingApps())("gridOptions", ctx_r0.gridOptions);
  }
}
class AddAppFromFolderComponent {
  #isAddFromFolderEnabled;
  #appsListService;
  constructor(dialog, snackBar) {
    this.dialog = dialog;
    this.snackBar = snackBar;
    this.hostClass = 'dialog-component';
    this.gridOptions = this.buildGridOptions();
    this.installing = false;
    this.features = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_features_features_scoped_service__WEBPACK_IMPORTED_MODULE_3__.FeaturesScopedService);
    this.#isAddFromFolderEnabled = this.features.isEnabled[_features_feature_names__WEBPACK_IMPORTED_MODULE_1__.FeatureNames.AppSyncWithSiteFiles];
    this.#appsListService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_apps_list_service__WEBPACK_IMPORTED_MODULE_7__.AppsListService);
    this.pendingApps = this.#appsListService.getPendingApps();
  }
  closeDialog() {
    this.dialog.close();
  }
  onChange(app, enabled) {
    const pendingAppsTemp = this.pendingApps();
    if (enabled) pendingAppsTemp.push(app);else pendingAppsTemp.splice(pendingAppsTemp.indexOf(app), 1);
    this.pendingApps.set(pendingAppsTemp);
  }
  install() {
    this.installing = true;
    this.snackBar.open('Installing', undefined, {
      duration: 2000
    });
    this.#appsListService.installPendingApps(this.pendingApps()).subscribe({
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
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_5__.defaultGridOptions,
      columnDefs: [{
        field: '',
        width: 40,
        cellClass: 'no-outline',
        sortable: true,
        cellRenderer: _checkbox_cell_checkbox_cell_component__WEBPACK_IMPORTED_MODULE_9__.CheckboxCellComponent,
        cellRendererParams: () => {
          const params = {
            isDisabled: !this.#isAddFromFolderEnabled(),
            onChange: (app, enabled) => this.onChange(app, enabled)
          };
          return params;
        }
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_4__.ColumnDefinitions.ItemsText,
        field: 'Name',
        flex: 1,
        sort: 'asc',
        cellRenderer: _app_name_show_app_name_show_component__WEBPACK_IMPORTED_MODULE_8__.AppNameShowComponent,
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
  static {
    this.ɵfac = function AddAppFromFolderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AddAppFromFolderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: AddAppFromFolderComponent,
      selectors: [["app-add-app-from-folder"]],
      hostVars: 1,
      hostBindings: function AddAppFromFolderComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
      decls: 15,
      vars: 4,
      consts: [[1, "eav-dialog"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], [1, "eav-dialog-content"], [3, "featureNameId"], ["align", "end"], ["type", "button", "mat-raised-button", "", 3, "click"], ["type", "button", "mat-raised-button", "", "color", "accent", 3, "click", "disabled"], [1, "ag-theme-material", "eav-grid", 3, "rowData", "gridOptions"]],
      template: function AddAppFromFolderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Add App from Folder");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "app-feature-text-info", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, " Select an app from the apps-folder which has been copied there (or git-cloned) but not installed yet. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, AddAppFromFolderComponent_Conditional_8_Template, 2, 0, "p")(9, AddAppFromFolderComponent_Conditional_9_Template, 2, 2, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "mat-dialog-actions", 5)(11, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddAppFromFolderComponent_Template_button_click_11_listener() {
            return ctx.closeDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddAppFromFolderComponent_Template_button_click_13_listener() {
            return ctx.install();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, " Install ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("featureNameId", "AppSyncWithSiteFiles");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](((tmp_1_0 = ctx.pendingApps()) == null ? null : tmp_1_0.length) == 0 ? 8 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](((tmp_2_0 = ctx.pendingApps()) == null ? null : tmp_2_0.length) > 0 ? 9 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.pendingApps().length === 0 || ctx.installing);
        }
      },
      dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _features_feature_text_info_feature_text_info_component__WEBPACK_IMPORTED_MODULE_2__.FeatureTextInfoComponent, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_6__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_14__.AgGridAngular],
      styles: [".eav-grid[_ngcontent-%COMP%] {\n  height: 200px;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcHMtbWFuYWdlbWVudC9hZGQtYXBwLWZyb20tZm9sZGVyL2FkZC1hcHAtZnJvbS1mb2xkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmVhdi1ncmlkIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
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
  static {
    this.ɵfac = function AppNameShowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppNameShowComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppNameShowComponent,
      selectors: [["app-app-name-show"]],
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
  static {
    this.ɵfac = function CheckboxCellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CheckboxCellComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CheckboxCellComponent,
      selectors: [["app-checkbox-cell"]],
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
}

/***/ }),

/***/ 28136:
/*!***********************************************************!*\
  !*** ./projects/eav-ui/src/app/features/feature-names.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureNames: () => (/* binding */ FeatureNames)
/* harmony export */ });
// This will make it easier for us to see where certain feature names are in use
const FeatureNames = {
  AppSyncWithSiteFiles: 'AppSyncWithSiteFiles',
  WysiwygPasteFormatted: 'WysiwygPasteFormatted',
  PasteImageFromClipboard: 'PasteImageFromClipboard',
  EditUiShowNotes: 'EditUiShowNotes',
  EditUiShowMetadataFor: 'EditUiShowMetadataFor',
  NoSponsoredByToSic: 'NoSponsoredByToSic',
  EditUiTranslateWithGoogle: 'EditUiTranslateWithGoogle',
  LightSpeed: 'LightSpeedOutputCache',
  ContentSecurityPolicy: 'ContentSecurityPolicy',
  PermissionsByLanguage: 'PermissionsByLanguage',
  ContentTypeFieldsReuseDefinitions: 'ContentTypeFieldsReuseDefinitions',
  AppExportAssetsAdvanced: 'AppExportAssetsAdvanced',
  // Picker features
  PickerUiCheckbox: 'PickerUiCheckbox',
  PickerUiRadio: 'PickerUiRadio',
  PickerSourceCsv: 'PickerSourceCsv',
  PickerSourceAppAssets: 'PickerSourceAppAssets',
  PickerFormulas: 'PickerFormulas',
  PickerUiMoreInfo: 'PickerUiMoreInfo'
} /* the as const ensures that the keys/values can be strictly checked */;

/***/ }),

/***/ 95469:
/*!*******************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/features/feature-text-info/feature-text-info.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureTextInfoComponent: () => (/* binding */ FeatureTextInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/signals/signal.utilities */ 67993);
/* harmony import */ var _shared_base_feature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/base-feature.component */ 9006);









const _c0 = ["*"];
function FeatureTextInfoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FeatureTextInfoComponent_Conditional_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.openDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 7, "Features.Tooltip", ctx_r1.feature()));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("icon icon-", ctx_r1.icon(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.icon());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 10, "Features.FeatureNotActivated"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 12, "Features.ClickToFindOutMore"));
  }
}
class FeatureTextInfoComponent extends _shared_base_feature_component__WEBPACK_IMPORTED_MODULE_2__.FeatureComponentBase {
  constructor() {
    super();
    this.asInfo = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(false);
    this.icon = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_1__.computedObj)('icon', () => this.asInfo() ? 'info' : 'warning');
  }
  static {
    this.ɵfac = function FeatureTextInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FeatureTextInfoComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: FeatureTextInfoComponent,
      selectors: [["app-feature-text-info"]],
      inputs: {
        asInfo: [1, "asInfo"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 1,
      consts: [[1, "feature-text-info", 3, "tippy"], [1, "feature-text-info", 3, "click", "tippy"], [1, "feature-text-info-content"], [1, "feature-text-info-title"], [1, "feature-text-info-subtitle"]],
      template: function FeatureTextInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, FeatureTextInfoComponent_Conditional_0_Template, 12, 14, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.show() ? 0 : -1);
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
      styles: [".feature-text-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  cursor: pointer;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 5px;\n  margin-bottom: 10px;\n}\n\n.feature-text-info-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  margin-left: 10px;\n}\n\n.feature-text-info-title[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\n.feature-text-info-subtitle[_ngcontent-%COMP%] {\n  font-size: medium;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 45px;\n  height: fit-content;\n  width: fit-content;\n}\n\n.icon-warning[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2ZlYXR1cmVzL2ZlYXR1cmUtdGV4dC1pbmZvL2ZlYXR1cmUtdGV4dC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSx5SEFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5mZWF0dXJlLXRleHQtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYigwIDAgMCAvIDIwJSksIDBweCAxcHggMXB4IDBweCByZ2IoMCAwIDAgLyAxNCUpLCAwcHggMXB4IDNweCAwcHggcmdiKDAgMCAwIC8gMTIlKTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlLXRleHQtaW5mby1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlLXRleHQtaW5mby10aXRsZSB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLmZlYXR1cmUtdGV4dC1pbmZvLXN1YnRpdGxlIHtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGZvbnQtc2l6ZTogNDVweDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmljb24td2FybmluZyB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 69914:
/*!****************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/pipes/safe-html.pipe.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafeHtmlPipe: () => (/* binding */ SafeHtmlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 80436);



class SafeHtmlPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  static {
    this.ɵfac = function SafeHtmlPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safeHtml",
      type: SafeHtmlPipe,
      pure: true
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_apps-management_add-app-from-folder_add-app-from-folder_component_ts--7d87aa.js.map