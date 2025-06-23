"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_sub-dialogs_language-permissions_language-permissi-a91b40"],{

/***/ 10967:
/*!***********************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/language-permissions/language-permissions.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguagePermissionsComponent: () => (/* binding */ LanguagePermissionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core */ 88692);
/* harmony import */ var _apps_management_services_zone_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apps-management/services/zone.service */ 67130);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../permissions */ 4096);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/routing/dialog-routing.service */ 60852);
/* harmony import */ var _languages_permissions_actions_languages_permissions_actions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./languages-permissions-actions/languages-permissions-actions.component */ 40375);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);


















class LanguagePermissionsComponent {
  #zoneSvc;
  #dialogRouting;
  constructor(dialog) {
    this.dialog = dialog;
    this.gridOptions = this.#buildGridOptions();
    this.#zoneSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_apps_management_services_zone_service__WEBPACK_IMPORTED_MODULE_1__.ZoneService);
    this.#dialogRouting = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_6__.DialogRoutingService);
    this.#refresh = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.signal)(0);
    this.languages = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.computed)(() => {
      const r = this.#refresh();
      return this.#zoneSvc.getLanguagesPermissions(undefined);
    });
  }
  #refresh;
  ngOnInit() {
    this.#dialogRouting.doOnDialogClosed(() => {
      this.#refresh.update(v => ++v);
    });
  }
  closeDialog() {
    this.dialog.close();
  }
  openPermissions(language) {
    this.#dialogRouting.navRelative([_permissions__WEBPACK_IMPORTED_MODULE_2__.GoToPermissions.getUrlLanguage(language.NameId)]);
  }
  #buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_4__.defaultGridOptions,
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
        field: 'Name',
        sort: 'asc',
        valueGetter: p => p.data.Culture
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_3__.ColumnDefinitions.ActionsPinnedRight1,
        cellRenderer: _languages_permissions_actions_languages_permissions_actions_component__WEBPACK_IMPORTED_MODULE_7__.LanguagesPermissionsActionsComponent,
        cellRendererParams: (() => {
          const params = {
            onOpenPermissions: lang => this.openPermissions(lang)
          };
          return params;
        })()
      }]
    };
    return gridOptions;
  }
  static {
    this.ɵfac = function LanguagePermissionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LanguagePermissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: LanguagePermissionsComponent,
      selectors: [["app-language-permissions"]],
      decls: 14,
      vars: 2,
      consts: [[1, "eav-dialog", "nav-component-wrapper"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [1, "eav-dialog-content", "nav-component-wrapper"], [1, "grid-wrapper"], [1, "ag-theme-material", 3, "rowData", "gridOptions"], ["align", "end"]],
      template: function LanguagePermissionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Language permissions");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LanguagePermissionsComponent_Template_button_click_4_listener() {
            return ctx.closeDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 4)(8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " If no language permissions are defined, all editors can edit all languages. As soon as you set any language permission, only the specified users (or users in the specified groups) can edit these permissions. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "ag-grid-angular", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "mat-dialog-actions", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rowData", ctx.languages()())("gridOptions", ctx.gridOptions);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_5__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_13__.AgGridAngular],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 40375:
/*!**************************************************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/language-permissions/languages-permissions-actions/languages-permissions-actions.component.ts ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguagesPermissionsActionsComponent: () => (/* binding */ LanguagesPermissionsActionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var projects_eav_ui_src_app_shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/eav-ui/src/app/shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);








class LanguagesPermissionsActionsComponent {
  agInit(params) {
    this.params = params;
    this.language = this.params.data;
  }
  refresh(params) {
    return true;
  }
  openPermissions() {
    this.params.onOpenPermissions(this.language);
  }
  static {
    this.ɵfac = function LanguagesPermissionsActionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LanguagesPermissionsActionsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LanguagesPermissionsActionsComponent,
      selectors: [["app-languages-permissions-actions"]],
      decls: 4,
      vars: 2,
      consts: [[1, "actions-component"], ["matRipple", "", "tippy", "Permissions", 1, "eav-grid-action-button", "highlight", 3, "click"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgePosition", "below after", "aria-hidden", "false", 3, "matBadge", "matBadgeHidden"]],
      template: function LanguagesPermissionsActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LanguagesPermissionsActionsComponent_Template_div_click_1_listener() {
            return ctx.openPermissions();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " person ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matBadge", ctx.language.Permissions.Count)("matBadgeHidden", !ctx.language.Permissions.Count);
        }
      },
      dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__.MatBadge, projects_eav_ui_src_app_shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_sub-dialogs_language-permissions_language-permissi-a91b40.js.map