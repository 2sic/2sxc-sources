"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_apps-management_apps-list_apps-list_component_ts-projects_eav-ui_src_-5efbee"],{

/***/ 53680:
/*!***********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/apps-list/app-list-grid-config.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppListCodeErrorIcons: () => (/* binding */ AppListCodeErrorIcons),
/* harmony export */   AppListShowIcons: () => (/* binding */ AppListShowIcons)
/* harmony export */ });
const AppListShowIcons = {
  states: {
    true: {
      tooltip: 'Show this app to users',
      icon: 'visibility'
    },
    false: {
      tooltip: 'Hide this app from users',
      icon: 'visibility_off'
    }
  }
};
const AppListCodeErrorIcons = {
  states: {
    true: {
      clickable: true,
      tooltip: 'This App uses obsolete code which will cause problems on future upgrades. Click to see details.',
      icon: 'bug_report',
      getUrl: data => window.$2sxc.http.apiUrl('sys/insights/logs?key=warnings-obsolete&filter=AppId=' + data.Id)
    },
    false: {
      tooltip: 'Hide this app from users',
      icon: ''
    }
  }
};

/***/ }),

/***/ 38666:
/*!************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/apps-list/apps-list-actions/apps-list-actions.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppsListActionsComponent: () => (/* binding */ AppsListActionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _admin_shared_lightspeed_action_lightspeed_action_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../admin-shared/lightspeed-action/lightspeed-action.component */ 41657);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);










function AppsListActionsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "foundation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AppsListActionsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "holiday_village");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AppsListActionsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppsListActionsComponent_ng_template_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.do("flushCache"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "cached");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Flush cache");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppsListActionsComponent_ng_template_10_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.do("deleteApp"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r1.app.IsApp);
  }
}
class AppsListActionsComponent {
  agInit(params) {
    this.params = params;
    this.app = this.params.data;
  }
  refresh(params) {
    return true;
  }
  do(verb) {
    this.params.do(verb, this.app);
  }
  static {
    this.ɵfac = function AppsListActionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppsListActionsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppsListActionsComponent,
      selectors: [["app-apps-list-actions"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 11,
      vars: 8,
      consts: [["menu", "matMenu"], [1, "actions-component"], [1, "eav-grid-action-button", "icon", 3, "tippy", "tippyDisabled"], [3, "lightSpeedOwner", "params", "lightSpeed"], ["matRipple", "", "tippy", "More", 1, "eav-grid-action-button", "highlight", 3, "matMenuTriggerFor"], [1, "grid-more-menu"], ["matMenuContent", ""], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "click", "disabled"]],
      template: function AppsListActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppsListActionsComponent_Conditional_2_Template, 2, 0, "mat-icon")(3, AppsListActionsComponent_Conditional_3_Template, 2, 0, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-lightspeed-action", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "more_horiz");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-menu", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AppsListActionsComponent_ng_template_10_Template, 10, 1, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const menu_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tippy", ctx.app.IsGlobal ? "This app is global" : ctx.app.IsInherited ? "This app is inherited" : "")("tippyDisabled", !ctx.app.IsGlobal && !ctx.app.IsInherited);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.app.IsGlobal ? 2 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.app.IsInherited ? 3 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("lightSpeedOwner", ctx.app)("params", ctx.params)("lightSpeed", ctx.app.lightSpeed);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", menu_r3);
        }
      },
      dependencies: [_shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__.TippyDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__.MatBadgeModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuTrigger, _admin_shared_lightspeed_action_lightspeed_action_component__WEBPACK_IMPORTED_MODULE_0__.LightSpeedActionsComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 29638:
/*!**********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/apps-list/apps-list.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppsListComponent: () => (/* binding */ AppsListComponent)
/* harmony export */ });
/* harmony import */ var _ag_grid_community_client_side_row_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ag-grid-community/client-side-row-model */ 45705);
/* harmony import */ var _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ag-grid-community/core */ 41136);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ecodev/fab-speed-dial */ 23183);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _app_administration_app_admin_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app-administration/app-admin-helpers */ 58713);
/* harmony import */ var _features_feature_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/feature-names */ 28136);
/* harmony import */ var _features_features_scoped_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../features/features-scoped.service */ 74824);
/* harmony import */ var _features_shared_base_feature_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../features/shared/base-feature.component */ 9006);
/* harmony import */ var _shared_ag_grid_apps_list_show_ag_bool_icon_renderer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/ag-grid/apps-list-show/ag-bool-icon-renderer.component */ 16409);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/boolean-filter/boolean-filter.component */ 91960);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/directives/drag-and-drop.directive */ 34575);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/logging */ 34435);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/routing/dialog-routing.service */ 60852);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _services_apps_list_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/apps-list.service */ 83583);
/* harmony import */ var _app_list_grid_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-list-grid-config */ 53680);
/* harmony import */ var _apps_list_actions_apps_list_actions_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./apps-list-actions/apps-list-actions.component */ 38666);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);





































const _c0 = a0 => ({
  "fab-opened": a0
});
class AppsListComponent {
  #appsListSvc;
  #dialogRouter;
  constructor(snackBar, context,
  // Services for showing features in the menu
  matDialog, viewContainerRef, changeDetectorRef) {
    this.snackBar = snackBar;
    this.context = context;
    this.matDialog = matDialog;
    this.viewContainerRef = viewContainerRef;
    this.changeDetectorRef = changeDetectorRef;
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_13__.classLog)({
      AppsListComponent
    });
    this.gridOptions = this.#buildGridOptions();
    this.features = (0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.inject)(_features_features_scoped_service__WEBPACK_IMPORTED_MODULE_5__.FeaturesScopedService);
    this.isAddFromFolderEnabled = this.features.isEnabled[_features_feature_names__WEBPACK_IMPORTED_MODULE_4__.FeatureNames.AppSyncWithSiteFiles];
    this.#appsListSvc = (0,_core__WEBPACK_IMPORTED_MODULE_2__.transient)(_services_apps_list_service__WEBPACK_IMPORTED_MODULE_17__.AppsListService);
    this.#dialogRouter = (0,_core__WEBPACK_IMPORTED_MODULE_2__.transient)(_shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_15__.DialogRoutingService);
    this.fabOpen = (0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.signal)(false);
    this.#refresh = (0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.signal)(0);
    this.apps = (0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.computed)(() => {
      const refresh = this.#refresh();
      return this.#appsListSvc.getAll();
    });
    _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_1__.ModuleRegistry.registerModules([_ag_grid_community_client_side_row_model__WEBPACK_IMPORTED_MODULE_0__.ClientSideRowModelModule]);
  }
  #refresh;
  ngOnInit() {
    this.#dialogRouter.doOnDialogClosed(() => this.#loadApps());
  }
  openChange(open) {
    this.fabOpen.set(open);
  }
  // TODO: @2dg - try to fix this so the link is directly in the HTML without a function call
  browseCatalog() {
    window.open('https://2sxc.org/apps', '_blank');
  }
  createApp() {
    this.#dialogRouter.navRelative(['create']);
  }
  createInheritedApp() {
    this.#dialogRouter.navRelative(['create-inherited']);
  }
  addFromFolder() {
    this.#dialogRouter.navRelative(['add-app-from-folder']);
  }
  importApp(files) {
    const dialogData = {
      files
    };
    this.#dialogRouter.navRelative(['import'], {
      state: dialogData
    });
  }
  #deleteApp(app) {
    const result = prompt(`This cannot be undone. To really delete this app, type 'yes!' or type/paste the app-name here. Are you sure want to delete '${app.Name}' (${app.Id})?`);
    if (result === null) return;
    if (result === app.Name || result === 'yes!') {
      this.snackBar.open('Deleting...');
      this.#appsListSvc.delete(app.Id).subscribe({
        error: () => {
          this.snackBar.open('Delete failed. Please check console for more information', undefined, {
            duration: 3000
          });
          this.#loadApps();
        },
        next: () => {
          this.snackBar.open('Deleted', undefined, {
            duration: 2000
          });
          this.#loadApps();
        }
      });
    } else {
      alert('Input did not match - will not delete');
    }
  }
  #flushApp(app) {
    if (!confirm(`Flush the App Cache for ${app.Name} (${app.Id})?`)) return;
    this.snackBar.open('Flushing cache...');
    this.#appsListSvc.flushCache(app.Id).subscribe({
      error: () => this.snackBar.open('Cache flush failed. Please check console.', undefined, {
        duration: 3000
      }),
      next: () => this.snackBar.open('Cache flushed', undefined, {
        duration: 2000
      })
    });
  }
  #getLightSpeedLink(app) {
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_12__.convertFormToUrl)(_app_administration_app_admin_helpers__WEBPACK_IMPORTED_MODULE_3__.AppAdminHelpers.getLightSpeedEditParams(app.Id));
    const urlString = `${this.context.zoneId}/${app.Id}/edit/${formUrl}`;
    return this.#dialogRouter.urlSubRoute(urlString);
  }
  openLightSpeedFeatInfo() {
    (0,_features_shared_base_feature_component__WEBPACK_IMPORTED_MODULE_6__.openFeatureDialog)(this.matDialog, _features_feature_names__WEBPACK_IMPORTED_MODULE_4__.FeatureNames.LightSpeed, this.viewContainerRef, this.changeDetectorRef);
  }
  #buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_10__.defaultGridOptions,
      columnDefs: [{
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_8__.ColumnDefinitions.IdWithDefaultRenderer,
        cellRendererParams: _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_8__.ColumnDefinitions.idFieldParamsTooltipGetter()
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_8__.ColumnDefinitions.IconShow,
        cellRenderer: _shared_ag_grid_apps_list_show_ag_bool_icon_renderer_component__WEBPACK_IMPORTED_MODULE_7__.AgBoolIconRenderer,
        cellRendererParams: {
          settings: () => _app_list_grid_config__WEBPACK_IMPORTED_MODULE_18__.AppListShowIcons
        }
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_8__.ColumnDefinitions.TextWide,
        field: 'Name',
        cellClass: 'apps-list-primary-action highlight'.split(' '),
        sort: 'asc',
        cellRenderer: p => {
          const app = p.data;
          const url = this.#dialogRouter.urlSubRoute(app.Id.toString());
          return `
              <a class="default-link fill-cell" href="#${url}">
                <div class="container">
                  ${app.Thumbnail ? `<img class="image logo" src="${app.Thumbnail}?w=40&h=40&mode=crop"></img>` : `<div class="image logo"><span class="material-symbols-outlined">star</span></div>`}
                  ${p.value}
                </div>
              </a>
            `;
        }
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_8__.ColumnDefinitions.TextWide,
        field: 'Folder'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_8__.ColumnDefinitions.Character,
        field: 'Version',
        width: 78
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_8__.ColumnDefinitions.Number,
        field: 'Items'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_8__.ColumnDefinitions.Boolean,
        field: 'HasCodeWarnings',
        headerName: 'Code',
        filter: _shared_components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_9__.BooleanFilterComponent,
        cellRenderer: _shared_ag_grid_apps_list_show_ag_bool_icon_renderer_component__WEBPACK_IMPORTED_MODULE_7__.AgBoolIconRenderer,
        cellRendererParams: (() => ({
          settings: () => _app_list_grid_config__WEBPACK_IMPORTED_MODULE_18__.AppListCodeErrorIcons
        }))()
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_8__.ColumnDefinitions.ActionsPinnedRight3,
        cellRenderer: _apps_list_actions_apps_list_actions_component__WEBPACK_IMPORTED_MODULE_19__.AppsListActionsComponent,
        cellRendererParams: {
          lightSpeedLink: app => this.#getLightSpeedLink(app),
          openLightspeedFeatureInfo: () => this.openLightSpeedFeatInfo(),
          do: (verb, app) => {
            switch (verb) {
              case 'deleteApp':
                this.#deleteApp(app);
                break;
              case 'flushCache':
                this.#flushApp(app);
                break;
            }
          }
        }
      }]
    };
    return gridOptions;
  }
  #loadApps() {
    this.#refresh.update(v => v + 1);
  }
  static {
    this.ɵfac = function AppsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_16__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_20__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_20__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineComponent"]({
      type: AppsListComponent,
      selectors: [["app-apps-list"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵStandaloneFeature"]],
      decls: 25,
      vars: 9,
      consts: [[1, "grid-wrapper", "mat-tab-grid-wrapper"], ["appDragAndDrop", "", 1, "ag-theme-material", 3, "filesDropped", "rowData", "gridOptions", "allowedFileTypes"], ["align", "end"], [1, "eav-eco-fab-speed-dial", 3, "openChange", "ngClass"], [3, "spin"], ["mat-fab", ""], [1, "spin180"], [1, "eav-eco-fab-speed-dial-actions"], ["mat-mini-fab", "", "label", "Find more apps", 1, "eav-eco-fab-speed-dial-action-button", 3, "click"], ["mat-mini-fab", "", "label", "Create inherited app", 1, "eav-eco-fab-speed-dial-action-button", 3, "click"], ["mat-mini-fab", "", "label", "Add from folder", 1, "eav-eco-fab-speed-dial-action-button", 3, "click"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadge", "\uD83D\uDC8E", "matBadgePosition", "below after", "aria-hidden", "false", 3, "matBadgeHidden"], ["mat-mini-fab", "", "label", "Import app", 1, "eav-eco-fab-speed-dial-action-button", 3, "click"], ["mat-mini-fab", "", "label", "Create app", 1, "eav-eco-fab-speed-dial-action-button", 3, "click"]],
      template: function AppsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 0)(1, "ag-grid-angular", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("filesDropped", function AppsListComponent_Template_ag_grid_angular_filesDropped_1_listener($event) {
            return ctx.importApp($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "mat-dialog-actions", 2)(3, "eco-fab-speed-dial", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("openChange", function AppsListComponent_Template_eco_fab_speed_dial_openChange_3_listener($event) {
            return ctx.openChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "eco-fab-speed-dial-trigger", 4)(5, "button", 5)(6, "mat-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](8, "eco-fab-speed-dial-actions", 7)(9, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function AppsListComponent_Template_button_click_9_listener() {
            return ctx.browseCatalog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](10, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](11, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](12, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function AppsListComponent_Template_button_click_12_listener() {
            return ctx.createInheritedApp();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](13, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](14, "holiday_village");
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](15, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function AppsListComponent_Template_button_click_15_listener() {
            return ctx.addFromFolder();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](16, "mat-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](17, " add ");
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](18, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function AppsListComponent_Template_button_click_18_listener() {
            return ctx.importApp();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](19, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](20, "cloud_upload");
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](21, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function AppsListComponent_Template_button_click_21_listener() {
            return ctx.createApp();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](22, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](23, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](24, "router-outlet");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("rowData", ctx.apps()())("gridOptions", ctx.gridOptions)("allowedFileTypes", "zip");
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](7, _c0, ctx.fabOpen()));
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("spin", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx.fabOpen() ? "close" : "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("matBadgeHidden", ctx.isAddFromFolderEnabled());
        }
      },
      dependencies: [_shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_14__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_23__.AgGridAngular, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogActions, _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_24__.EcoFabSpeedDialComponent, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgClass, _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_24__.EcoFabSpeedDialTriggerComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatMiniFabButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIcon, _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_24__.EcoFabSpeedDialActionsComponent, _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__.MatBadge, _angular_router__WEBPACK_IMPORTED_MODULE_29__.RouterOutlet, _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_11__.DragAndDropDirective],
      encapsulation: 2
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

/***/ 3140:
/*!*********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/directives/base.directive.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseDirective: () => (/* binding */ BaseDirective)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


// tslint:disable-next-line:directive-class-suffix
class BaseDirective {
  constructor() {
    /** Holds all subscriptions to be unsubscribed on destroy */
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subscription();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function BaseDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BaseDirective)();
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: BaseDirective
    });
  }
}

/***/ }),

/***/ 34575:
/*!******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/directives/drag-and-drop.directive.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragAndDropDirective: () => (/* binding */ DragAndDropDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 18537);
/* harmony import */ var _base_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.directive */ 3140);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);






class DragAndDropDirective extends _base_directive__WEBPACK_IMPORTED_MODULE_0__.BaseDirective {
  constructor(elementRef, zone, snackBar) {
    super();
    this.zone = zone;
    this.snackBar = snackBar;
    this.markStyle = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)('outline');
    /** Comma separated file types, e.g. 'txt,doc,docx' */
    this.allowedFileTypes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)('');
    this.filesDropped = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.output)();
    this.dropAreaClass = 'eav-droparea';
    this.markStyleClass = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('');
    this.dragClass = 'eav-dragover';
    this.timeouts = [];
    this.element = elementRef.nativeElement;
  }
  ngOnInit() {
    this.markStyleClass.set(`eav-droparea-${this.markStyle()}`);
    this.element.classList.add(this.dropAreaClass, this.markStyleClass());
    this.zone.runOutsideAngular(() => {
      this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.element, 'dragover').subscribe(event => {
        event.preventDefault();
        event.stopPropagation();
        this.clearTimeouts();
        this.element.classList.add(this.dragClass);
      }));
      this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.element, 'dragleave').subscribe(event => {
        event.preventDefault();
        event.stopPropagation();
        this.timeouts.push(window.setTimeout(() => {
          this.element.classList.remove(this.dragClass);
        }, 50));
      }));
    });
  }
  ngOnDestroy() {
    this.clearTimeouts();
    this.element.classList.remove(this.dropAreaClass, this.markStyleClass(), this.dragClass);
    super.ngOnDestroy();
  }
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.clearTimeouts();
    this.element.classList.remove(this.dragClass);
    const fileList = event.dataTransfer.files;
    let files = Array.from(fileList);
    files = this.filterTypes(files, this.allowedFileTypes());
    if (files.length > 0) {
      this.filesDropped.emit(files);
    }
  }
  clearTimeouts() {
    for (const timeout of this.timeouts) {
      clearTimeout(timeout);
    }
    this.timeouts = [];
  }
  filterTypes(files, allowedFileTypes) {
    if (allowedFileTypes === '') {
      return files;
    }
    const allowedTypes = allowedFileTypes.split(',').map(type => type.toLocaleLowerCase());
    const filtered = files.filter(file => {
      const extIndex = file.name.lastIndexOf('.');
      if (extIndex <= 0) {
        return false;
      }
      const ext = file.name.substring(extIndex + 1).toLocaleLowerCase();
      const allowed = allowedTypes.includes(ext);
      return allowed;
    });
    if (files.length !== filtered.length) {
      const allowedTypesString = this.allowedFileTypes().replace(/\,/g, ', ');
      const message = filtered.length ? 'Some files were filtered out. This drop location only accepts file types: ' + allowedTypesString : 'This drop location only accepts file types: ' + allowedTypesString;
      this.snackBar.open(message, null, {
        duration: 5000
      });
    }
    return filtered;
  }
  static {
    this.ɵfac = function DragAndDropDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DragAndDropDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: DragAndDropDirective,
      selectors: [["", "appDragAndDrop", ""]],
      hostBindings: function DragAndDropDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("drop", function DragAndDropDirective_drop_HostBindingHandler($event) {
            return ctx.onDrop($event);
          });
        }
      },
      inputs: {
        markStyle: [1, "markStyle"],
        allowedFileTypes: [1, "allowedFileTypes"]
      },
      outputs: {
        filesDropped: "filesDropped"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
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
      pure: true,
      standalone: true
    });
  }
}

/***/ }),

/***/ 60852:
/*!**************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/routing/dialog-routing.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogRoutingService: () => (/* binding */ DialogRoutingService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5057);
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logging */ 34435);
/* harmony import */ var _services_service_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/service-base */ 4979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);






const logSpecs = {
  doOnDialogClosed: true
};
/**
 * Helper to handle dialog routings, especially:
 * 1. handling on-child-closed events (it also takes care of subscriptions)
 * 2. accessing the router and route - a very common task when you have dialogs
 */
class DialogRoutingService extends _services_service_base__WEBPACK_IMPORTED_MODULE_1__.ServiceBase {
  constructor(router, route) {
    super();
    this.router = router;
    this.route = route;
    this.log = (0,_logging__WEBPACK_IMPORTED_MODULE_0__.classLog)({
      DialogRoutingService
    }, logSpecs);
  }
  get snapshot() {
    return this.route.snapshot;
  }
  get url() {
    return this.router.url;
  }
  getParam(key) {
    return this.route.snapshot.paramMap.get(key);
  }
  getParams(keys) {
    const paramMap = this.route.snapshot.paramMap;
    return keys.reduce((acc, key) => {
      acc[key] = paramMap.get(key);
      return acc;
    }, {});
  }
  getQueryParam(key) {
    return this.route.snapshot.queryParamMap.get(key);
  }
  getQueryParams(keys) {
    const queryParamMap = this.route.snapshot.queryParamMap;
    return keys.reduce((acc, key) => {
      acc[key] = queryParamMap.get(key);
      return acc;
    }, {});
  }
  state() {
    return this.router.getCurrentNavigation().extras?.state;
  }
  /**
   * Preferred way to register a callback, since the caller doesn't need to worry about subscriptions.
   */
  doOnDialogClosed(callback) {
    const l = this.log.fnIf('doOnDialogClosed');
    this.subscriptions.add(this.childDialogClosed$().subscribe(() => callback()));
    l.end();
  }
  /**
   * Get the URL for a sub-route of the current route.
   */
  urlSubRoute(params) {
    const tree = this.router.createUrlTree([params], {
      relativeTo: this.route
    });
    const routeUrl = this.router.serializeUrl(tree);
    return routeUrl;
  }
  /**
   * Navigate to a new route.
   * Just looks a bit simpler than the internal array notation.
   */
  navPath(url, extras) {
    return this.router.navigate([url], extras);
  }
  /**
   * Navigate relative to the current route.
   */
  navRelative(commands, extras) {
    return this.router.navigate(commands, {
      ...extras,
      relativeTo: this.route
    });
  }
  childDialogClosed$() {
    return this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.startWith)(!!this.route.snapshot.firstChild), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(() => !!this.route.snapshot.firstChild), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.pairwise)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(([hadChildBefore, hasChildNow]) => hadChildBefore && !hasChildNow));
  }
  static {
    this.ɵfac = function DialogRoutingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DialogRoutingService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: DialogRoutingService,
      factory: DialogRoutingService.ɵfac
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_apps-management_apps-list_apps-list_component_ts-projects_eav-ui_src_-5efbee.js.map