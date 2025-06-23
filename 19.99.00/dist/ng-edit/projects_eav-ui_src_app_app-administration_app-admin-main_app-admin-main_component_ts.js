"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_app-admin-main_app-admin-main_component_ts"],{

/***/ 8441:
/*!*************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/app-admin-main/app-admin-menu.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAdminMenu: () => (/* binding */ AppAdminMenu)
/* harmony export */ });
/* harmony import */ var _dev_rest_go_to_dev_rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dev-rest/go-to-dev-rest */ 10261);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _copilot_copilot_specs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../copilot/copilot-specs */ 97214);
/* harmony import */ var _copilot_go_to_copilot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../copilot/go-to-copilot */ 85898);




const AppAdminMenu = [{
  name: 'App Info',
  path: 'home',
  icon: 'info',
  tippy: 'App Info'
}, {
  name: 'Data',
  path: `data/${_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__.eavConstants.scopes.default.value}`,
  icon: 'menu',
  tippy: 'Data / Content',
  child: [{
    ..._copilot_go_to_copilot__WEBPACK_IMPORTED_MODULE_3__.GoToCopilot.routeDefinition('data'),
    tippy: 'Autogenerate content types '
  }, {
    ..._dev_rest_go_to_dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.routeDataDefinition,
    tippy: 'Rest-Api Data '
  }]
}, {
  name: 'Queries',
  path: 'queries',
  icon: 'filter_list',
  tippy: 'Queries / Visual Query Designer',
  child: [{
    ..._dev_rest_go_to_dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.routeQueryDefinition,
    tippy: 'Rest-Api Queries'
  }]
}, {
  name: 'Views',
  path: 'views',
  icon: 'layers',
  tippy: 'Views / Templates',
  child: [{
    ..._copilot_go_to_copilot__WEBPACK_IMPORTED_MODULE_3__.GoToCopilot.routeDefinition('views'),
    tippy: 'Autogenerate Razor Views'
  }]
}, {
  name: 'Web API',
  path: 'web-api',
  icon: 'offline_bolt',
  tippy: 'WebApi',
  child: [{
    ..._copilot_go_to_copilot__WEBPACK_IMPORTED_MODULE_3__.GoToCopilot.routeDefinition('web-api'),
    tippy: _copilot_copilot_specs__WEBPACK_IMPORTED_MODULE_2__.CopilotSpecs.webApi.teaser
  }, {
    ..._dev_rest_go_to_dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.routeWebApiDefinition,
    tippy: 'Rest-Api Queries'
  }]
}, {
  name: 'App',
  path: 'app',
  icon: 'settings_applications',
  tippy: 'App Settings'
}, {
  name: 'Import/Export',
  path: 'import-export',
  icon: 'cloud_sync',
  tippy: 'Import Export',
  child: [{
    name: 'Export App',
    path: 'export-app',
    icon: 'deployed_code_update',
    tippy: 'Export this entire App'
  }, {
    name: 'Data Bundles (beta)',
    path: 'data-bundles',
    icon: 'dataset',
    tippy: 'Data Bundles'
  }, {
    name: 'Export Parts',
    path: 'export-parts',
    icon: 'cloud_download',
    tippy: 'Export parts of this App'
  }, {
    name: 'Imports Parts',
    path: 'import-parts',
    icon: 'cloud_upload',
    tippy: 'Import parts of this App'
  }, {
    name: 'App-State Git Sync',
    path: 'app-state',
    icon: 'sync',
    tippy: 'App-State Versioning'
  }]
}];

/***/ }),

/***/ 18830:
/*!***********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/app-admin-main/app-admin-main.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAdminMainComponent: () => (/* binding */ AppAdminMainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ 17049);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ 39552);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! xng-breadcrumb */ 33011);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _shared_components_nav_item_list_nav_item_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/nav-item-list/nav-item-list.component */ 31808);
/* harmony import */ var _shared_directives_toggle_debug_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/directives/toggle-debug.directive */ 95699);
/* harmony import */ var _shared_helpers_update_env_vars_from_dialog_settings_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/helpers/update-env-vars-from-dialog-settings.helper */ 71477);
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/logging */ 34435);
/* harmony import */ var _shared_models_dialog_context_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/models/dialog-context.models */ 46666);
/* harmony import */ var _shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/routing/dialog-routing.service */ 60852);
/* harmony import */ var _services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/dialog-config-app.service */ 64699);
/* harmony import */ var _app_admin_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-admin-menu */ 8441);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/layout */ 87912);


























const _c0 = ["sidenav"];
const _forTrack0 = ($index, $item) => $item.path;
function AppAdminMainComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppAdminMainComponent_Conditional_2_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const sidenav_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](22);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](sidenav_r3.opened = !sidenav_r3.opened);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ((tmp_3_0 = ctx_r3.dialogSettings()) == null ? null : tmp_3_0.Context.App.Icon) + "?w=40&h=40&mode=crop", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function AppAdminMainComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppAdminMainComponent_Conditional_3_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const sidenav_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](22);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](sidenav_r3.opened = !sidenav_r3.opened);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function AppAdminMainComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, " Global ");
  }
}
function AppAdminMainComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", (tmp_3_0 = ctx_r3.dialogSettings()) == null ? null : tmp_3_0.Context.App.Name, " ");
  }
}
function AppAdminMainComponent_ng_container_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
  }
  if (rf & 2) {
    const breadcrumb_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", breadcrumb_r6, " ");
  }
}
function AppAdminMainComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AppAdminMainComponent_ng_container_13_Conditional_1_Template, 3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const last_r7 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](last_r7 ? 1 : -1);
  }
}
function AppAdminMainComponent_ng_template_14_Template(rf, ctx) {}
function AppAdminMainComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-nav-item-list", 13);
  }
  if (rf & 2) {
    const navItem_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("navItem", navItem_r8);
  }
}
class AppAdminMainComponent {
  #dialogConfigSvc;
  #dialogRouter;
  constructor(dialog, media) {
    this.dialog = dialog;
    this.media = media;
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_4__.classLog)({
      AppAdminMainComponent
    });
    this.#dialogConfigSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_7__.DialogConfigAppService);
    this.#dialogRouter = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_6__.DialogRoutingService);
    this.AppScopes = _shared_models_dialog_context_models__WEBPACK_IMPORTED_MODULE_5__.AppScopes;
    this.dialogSettings = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.signal)(undefined);
    this.smallScreen = this.media.matchMedia('(max-width: 1000px)');
    this.sideNavOpened = !this.smallScreen.matches;
    /** Navigation menu buttons - prefilled; may be modified after settings are loaded */
    this.navItems = _app_admin_menu__WEBPACK_IMPORTED_MODULE_8__.AppAdminMenu;
    this.log.a('constructor');
  }
  ngOnInit() {
    this.fetchDialogSettings();
    this.#dialogRouter.doOnDialogClosed(() => this.fetchDialogSettings());
    this.smallScreen.addEventListener('change', c => (this.sidenav.opened = !c.matches, this.sidenav.mode = c.matches ? 'over' : 'side'));
  }
  closeDialog() {
    this.dialog.close();
  }
  fetchDialogSettings() {
    this.#dialogConfigSvc.getCurrent$().subscribe(dialogSettings => {
      (0,_shared_helpers_update_env_vars_from_dialog_settings_helper__WEBPACK_IMPORTED_MODULE_3__.Update$2sxcEnvFromContext)(dialogSettings.Context.App);
      this.dialogSettings.set(dialogSettings);
      if (!dialogSettings.Context.Enable.Query) this.navItems = this.navItems.filter(item => item.name !== 'Queries' && item.name !== 'Web API');
    });
  }
  static {
    this.ɵfac = function AppAdminMainComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppAdminMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__.MediaMatcher));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: AppAdminMainComponent,
      selectors: [["app-app-admin-main"]],
      viewQuery: function AppAdminMainComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
        }
      },
      decls: 30,
      vars: 6,
      consts: [["emptyTemplate", ""], ["sidenav", ""], ["appToggleDebug", ""], [1, "toolbar-container"], [3, "src"], [1, "menu-container"], [1, "d-flex"], [1, "mat-icon-admin"], [3, "separator"], [4, "xngBreadcrumbItem"], [1, "toolbar-spacer"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [3, "mode", "opened"], [3, "navItem"], [1, "sideNav-bottom-info"], [3, "click", "src"], [1, "menu-container", 3, "click"], [1, "breadcrumb-icon"]],
      template: function AppAdminMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-toolbar", 2)(1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AppAdminMainComponent_Conditional_2_Template, 1, 1, "img", 4)(3, AppAdminMainComponent_Conditional_3_Template, 2, 0, "mat-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, AppAdminMainComponent_Conditional_5_Template, 1, 0)(6, AppAdminMainComponent_Conditional_6_Template, 1, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span")(8, "span", 7)(9, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, " Admin ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "xng-breadcrumb", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, AppAdminMainComponent_ng_container_13_Template, 2, 1, "ng-container", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, AppAdminMainComponent_ng_template_14_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppAdminMainComponent_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.closeDialog());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "mat-sidenav-container", 2)(21, "mat-sidenav", 12, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](23, AppAdminMainComponent_For_24_Template, 1, 1, "app-nav-item-list", 13, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 14)(26, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "use App logo to show/hide menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "mat-sidenav-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_3_0;
          let tmp_4_0;
          const emptyTemplate_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](((tmp_2_0 = ctx.dialogSettings()) == null ? null : tmp_2_0.Context.App.Icon) ? 2 : 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](((tmp_3_0 = ctx.dialogSettings()) == null ? null : tmp_3_0.Context.App.SettingsScope) === ctx.AppScopes.Global ? 5 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](((tmp_4_0 = ctx.dialogSettings()) == null ? null : tmp_4_0.Context.App.SettingsScope) !== ctx.AppScopes.Global ? 6 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("separator", emptyTemplate_r9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("mode", ctx.smallScreen.matches ? "over" : "side")("opened", ctx.sideNavOpened);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](ctx.navItems);
        }
      },
      dependencies: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, xng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__.BreadcrumbModule, xng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__.BreadcrumbComponent, xng_breadcrumb__WEBPACK_IMPORTED_MODULE_14__.BreadcrumbItemDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatIconButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__.MatSidenavContent, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterOutlet, _shared_components_nav_item_list_nav_item_list_component__WEBPACK_IMPORTED_MODULE_1__.NavItemListComponent, _shared_directives_toggle_debug_directive__WEBPACK_IMPORTED_MODULE_2__.ToggleDebugDirective],
      styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  background-color: white;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  flex: 1 0 74px;\n}\nmat-toolbar[_ngcontent-%COMP%]   .toolbar-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nmat-toolbar[_ngcontent-%COMP%]   .toolbar-container[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n  margin-right: 16px;\n  cursor: pointer;\n}\nmat-toolbar[_ngcontent-%COMP%]   .toolbar-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 16px 0;\n  margin-right: 16px;\n  -webkit-user-select: none;\n          user-select: none;\n  text-shadow: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\nmat-toolbar[_ngcontent-%COMP%]   .toolbar-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\nmat-toolbar[_ngcontent-%COMP%]   .mat-icon-admin[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%] {\n  width: 295px;\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n}\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]   .sideNav-bottom-info[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  text-align: center;\n  width: 100%;\n  font-size: 12px;\n}\n\n.container-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: rgba(128, 128, 128, 0.1);\n}\n\n  .xng-breadcrumb-separator {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n  .mat-drawer-container {\n  background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN0eWxlc1xcc2lkZS1uYXYuc3R5bGUuc2NzcyIsImFwcC1hZG1pbi1tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQUk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNFTjtBREFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRU47QURFRTtFQUNFLGNBQUE7QUNBSjtBRElJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRk47O0FET0E7RUFDRSxhQUFBO0FDSkY7QURPRTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ0xKO0FETUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDSk47O0FEU0E7RUFDRSxZQUFBO0FDTkY7O0FEU0E7RUFDRSwwQ0FBQTtBQ05GOztBRFVFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQ1BKO0FEVUU7RUFDRSx3Q0FBQTtBQ1JKIiwiZmlsZSI6ImFwcC1hZG1pbi1tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgZmxleDogMSAwIDc0cHg7XHJcblxyXG4gIC50b29sYmFyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5tZW51LWNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4IDA7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudG9vbGJhci1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG5cclxuICAubWF0LWljb24tYWRtaW4ge1xyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcblxyXG4gIC8vIFNpZGVOYXZcclxuICBtYXQtc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMjk1cHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAuc2lkZU5hdi1ib3R0b20taW5mbyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXItY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMSk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgLnhuZy1icmVhZGNydW1iLXNlcGFyYXRvciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwibWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDtcbiAgZmxleDogMSAwIDc0cHg7XG59XG5tYXQtdG9vbGJhciAudG9vbGJhci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxubWF0LXRvb2xiYXIgLnRvb2xiYXItY29udGFpbmVyIC5tZW51LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubWF0LXRvb2xiYXIgLnRvb2xiYXItY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTZweCAwO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxubWF0LXRvb2xiYXIgLnRvb2xiYXItc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5tYXQtdG9vbGJhciAubWF0LWljb24tYWRtaW4gbWF0LWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYge1xuICB3aWR0aDogMjk1cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuc2lkZU5hdi1ib3R0b20taW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNvbnRhaW5lci1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjEpO1xufVxuXG46Om5nLWRlZXAgLnhuZy1icmVhZGNydW1iLXNlcGFyYXRvciB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvc3R5bGVzL3NpZGUtbmF2LnN0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9wcm9qZWN0cy9lYXYtdWkvc3JjL2FwcC9hcHAtYWRtaW5pc3RyYXRpb24vYXBwLWFkbWluLW1haW4vYXBwLWFkbWluLW1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURBSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0VOO0FEQUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNFTjtBREVFO0VBQ0UsY0FBQTtBQ0FKO0FESUk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNGTjs7QURPQTtFQUNFLGFBQUE7QUNKRjtBRE9FO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDTEo7QURNSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNKTjs7QURTQTtFQUNFLFlBQUE7QUNORjs7QURTQTtFQUNFLDBDQUFBO0FDTkY7O0FEVUU7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDUEo7QURVRTtFQUNFLHdDQUFBO0FDUko7QUFFQSw0d0pBQTR3SiIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGZsZXg6IDEgMCA3NHB4O1xyXG5cclxuICAudG9vbGJhci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAubWVudS1jb250YWluZXIge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTZweCAwO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXItc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1pY29uLWFkbWluIHtcclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAvLyBTaWRlTmF2XHJcbiAgbWF0LXNpZGVuYXYge1xyXG4gICAgd2lkdGg6IDI5NXB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLnNpZGVOYXYtYm90dG9tLWluZm8ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyLWNvbnRlbnQge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjEpO1xyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC54bmctYnJlYWRjcnVtYi1zZXBhcmF0b3Ige1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTA7XG4gIGZsZXg6IDEgMCA3NHB4O1xufVxubWF0LXRvb2xiYXIgLnRvb2xiYXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbm1hdC10b29sYmFyIC50b29sYmFyLWNvbnRhaW5lciAubWVudS1jb250YWluZXIge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm1hdC10b29sYmFyIC50b29sYmFyLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHggMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbm1hdC10b29sYmFyIC50b29sYmFyLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxubWF0LXRvb2xiYXIgLm1hdC1pY29uLWFkbWluIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xufVxuXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IHtcbiAgd2lkdGg6IDI5NXB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLnNpZGVOYXYtYm90dG9tLWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jb250YWluZXItY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xKTtcbn1cblxuOjpuZy1kZWVwIC54bmctYnJlYWRjcnVtYi1zZXBhcmF0b3Ige1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LWRyYXdlci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_app-admin-main_app-admin-main_component_ts.js.map