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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _apps_management_services_zone_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apps-management/services/zone.service */ 67130);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../permissions */ 4096);
/* harmony import */ var _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/base-with-child-dialog.component */ 61735);
/* harmony import */ var _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/id-field/id-field.component */ 36378);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _languages_permissions_actions_languages_permissions_actions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./languages-permissions-actions/languages-permissions-actions.component */ 40375);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core */ 34447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);





















function LanguagePermissionsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Language permissions");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LanguagePermissionsComponent_Conditional_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 4)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, " If no language permissions are defined, all editors can edit all languages. As soon as you set any language permission, only the specified users (or users in the specified groups) can edit these permissions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "ag-grid-angular", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "mat-dialog-actions", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("rowData", ctx.languages)("gridOptions", ctx_r1.gridOptions);
  }
}
class LanguagePermissionsComponent extends _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_2__.BaseWithChildDialogComponent {
  constructor(router, route, dialogRef) {
    super(router, route);
    this.router = router;
    this.route = route;
    this.dialogRef = dialogRef;
    this.zoneService = (0,_core__WEBPACK_IMPORTED_MODULE_8__.transient)(_apps_management_services_zone_service__WEBPACK_IMPORTED_MODULE_0__.ZoneService);
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
    this.languages$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(undefined);
    this.gridOptions = this.buildGridOptions();
  }
  ngOnInit() {
    this.getLanguages();
    this.subscriptions.add(this.childDialogClosed$().subscribe(() => {
      this.getLanguages();
    }));
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this.languages$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.map)(([languages]) => ({
      languages
    })));
  }
  ngOnDestroy() {
    this.languages$.complete();
    super.ngOnDestroy();
  }
  closeDialog() {
    this.dialogRef.close();
  }
  openPermissions(language) {
    this.router.navigate([_permissions__WEBPACK_IMPORTED_MODULE_1__.GoToPermissions.getUrlLanguage(language.NameId)], {
      relativeTo: this.route
    });
  }
  getLanguages() {
    this.zoneService.getLanguagesPermissions().subscribe({
      error: () => {
        this.languages$.next(undefined);
      },
      next: languages => {
        this.languages$.next(languages);
      }
    });
  }
  buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_4__.defaultGridOptions,
      columnDefs: [{
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.Id,
        field: 'Code',
        filter: 'agTextColumnFilter',
        cellRenderer: _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_3__.IdFieldComponent,
        cellRendererParams: (() => {
          const params = {
            tooltipGetter: language => `ID: ${language.Code}`
          };
          return params;
        })()
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.TextWide,
        field: 'Name',
        sort: 'asc',
        valueGetter: params => {
          const language = params.data;
          return language.Culture;
        }
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.ActionsPinnedRight1,
        cellRenderer: _languages_permissions_actions_languages_permissions_actions_component__WEBPACK_IMPORTED_MODULE_5__.LanguagesPermissionsActionsComponent,
        cellRendererParams: (() => {
          const params = {
            onOpenPermissions: language => this.openPermissions(language)
          };
          return params;
        })()
      }]
    };
    return gridOptions;
  }
  static #_ = this.ɵfac = function LanguagePermissionsComponent_Factory(t) {
    return new (t || LanguagePermissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: LanguagePermissionsComponent,
    selectors: [["app-language-permissions"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [[1, "eav-dialog", "nav-component-wrapper"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [1, "eav-dialog-content", "nav-component-wrapper"], [1, "grid-wrapper"], [1, "ag-theme-material", 3, "rowData", "gridOptions"], ["align", "end"]],
    template: function LanguagePermissionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, LanguagePermissionsComponent_Conditional_0_Template, 14, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterOutlet, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_7__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_19__.AgGridAngular],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
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
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);







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
  static #_ = this.ɵfac = function LanguagesPermissionsActionsComponent_Factory(t) {
    return new (t || LanguagesPermissionsActionsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LanguagesPermissionsActionsComponent,
    selectors: [["app-languages-permissions-actions"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 2,
    consts: [[1, "actions-component"], ["matRipple", "", "tippy", "Permissions", 1, "eav-grid-action-button", "highlight", 3, "click"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgePosition", "below after", "aria-hidden", "false", 3, "matBadge", "matBadgeHidden"]],
    template: function LanguagesPermissionsActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguagesPermissionsActionsComponent_Template_div_click_1_listener() {
          return ctx.openPermissions();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " person ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadge", ctx.language.Permissions.Count)("matBadgeHidden", !ctx.language.Permissions.Count);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__.MatBadge],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_sub-dialogs_language-permissions_language-permissi-a91b40.js.map