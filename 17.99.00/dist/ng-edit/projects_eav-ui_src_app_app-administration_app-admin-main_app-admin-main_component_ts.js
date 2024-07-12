"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_app-admin-main_app-admin-main_component_ts"],{

/***/ 18830:
/*!***********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/app-admin-main/app-admin-main.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAdminMainComponent: () => (/* binding */ AppAdminMainComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/base-with-child-dialog.component */ 61735);
/* harmony import */ var _shared_helpers_update_env_vars_from_dialog_settings_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/helpers/update-env-vars-from-dialog-settings.helper */ 71477);
/* harmony import */ var _shared_models_dialog_context_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/dialog-context.models */ 46666);
/* harmony import */ var _services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/app-dialog-config.service */ 22743);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ 17049);
/* harmony import */ var _app_admin_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-admin-menu */ 8441);
/* harmony import */ var _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/logging/eav-logger */ 6812);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! xng-breadcrumb */ 33011);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ 39552);
/* harmony import */ var _shared_components_nav_item_list_nav_item_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/nav-item-list/nav-item-list.component */ 31808);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/layout */ 87912);



























const _c0 = ["sidenav"];
const _forTrack0 = ($index, $item) => $item.path;
function AppAdminMainComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppAdminMainComponent_Conditional_0_Conditional_2_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const sidenav_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](22);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](sidenav_r3.opened = !sidenav_r3.opened);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", (vm_r4.dialogSettings == null ? null : vm_r4.dialogSettings.Context.App.Icon) + "?w=40&h=40&mode=crop", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function AppAdminMainComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppAdminMainComponent_Conditional_0_Conditional_3_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const sidenav_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](22);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](sidenav_r3.opened = !sidenav_r3.opened);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AppAdminMainComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, " Global ");
  }
}
function AppAdminMainComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const vm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", vm_r4.dialogSettings == null ? null : vm_r4.dialogSettings.Context.App.Name, " ");
  }
}
function AppAdminMainComponent_Conditional_0_ng_container_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
  }
  if (rf & 2) {
    const breadcrumb_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", breadcrumb_r6, " ");
  }
}
function AppAdminMainComponent_Conditional_0_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AppAdminMainComponent_Conditional_0_ng_container_13_Conditional_1_Template, 3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const last_r7 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](1, last_r7 ? 1 : -1);
  }
}
function AppAdminMainComponent_Conditional_0_ng_template_14_Template(rf, ctx) {}
function AppAdminMainComponent_Conditional_0_For_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-nav-item-list", 11);
  }
  if (rf & 2) {
    const navItem_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("navItem", navItem_r9);
  }
}
function AppAdminMainComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-toolbar")(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AppAdminMainComponent_Conditional_0_Conditional_2_Template, 1, 1, "img", 3)(3, AppAdminMainComponent_Conditional_0_Conditional_3_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AppAdminMainComponent_Conditional_0_Conditional_5_Template, 1, 0)(6, AppAdminMainComponent_Conditional_0_Conditional_6_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span")(8, "span", 5)(9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "xng-breadcrumb", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, AppAdminMainComponent_Conditional_0_ng_container_13_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, AppAdminMainComponent_Conditional_0_ng_template_14_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppAdminMainComponent_Conditional_0_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-sidenav-container")(21, "mat-sidenav", 10, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](23, AppAdminMainComponent_Conditional_0_For_24_Template, 1, 1, "app-nav-item-list", 11, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 12)(26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "use App logo to show/hide menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "mat-sidenav-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vm_r4 = ctx;
    const emptyTemplate_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](15);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](2, (vm_r4.dialogSettings == null ? null : vm_r4.dialogSettings.Context.App.Icon) ? 2 : 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](5, (vm_r4.dialogSettings == null ? null : vm_r4.dialogSettings.Context.App.SettingsScope) === ctx_r7.AppScopes.Global ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](6, (vm_r4.dialogSettings == null ? null : vm_r4.dialogSettings.Context.App.SettingsScope) !== ctx_r7.AppScopes.Global ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("separator", emptyTemplate_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("mode", ctx_r7.smallScreen.matches ? "over" : "side")("opened", ctx_r7.sideNavOpened);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](ctx_r7.navItems);
  }
}
const logThis = false;
class AppAdminMainComponent extends _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_0__.BaseWithChildDialogComponent {
  constructor(router, route, dialogRef, appDialogConfigService, media) {
    super(router, route, new _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_5__.EavLogger('AppAdminMainComponent', logThis));
    this.router = router;
    this.route = route;
    this.dialogRef = dialogRef;
    this.appDialogConfigService = appDialogConfigService;
    this.media = media;
    this.AppScopes = _shared_models_dialog_context_models__WEBPACK_IMPORTED_MODULE_2__.AppScopes;
    this.dialogSettings$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(undefined);
    this.pathsArray$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(undefined);
    this.currentPath$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.pathsArray$, this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_11__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(() => this.route.snapshot.firstChild.url[0].path), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.startWith)(this.route.snapshot.firstChild.url[0].path))]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(([paths, currentPath]) => {
      if (paths == null) return;
      return currentPath;
    }));
    // Generate View Model
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.dialogSettings$, this.currentPath$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(([dialogSettings, currentPath]) => {
      return {
        dialogSettings,
        currentPath
      };
    }));
    this.smallScreen = this.media.matchMedia('(max-width: 1000px)');
    this.sideNavOpened = !this.smallScreen.matches;
    /** Navigation menu buttons - prefilled; may be modified after settings are loaded */
    this.navItems = _app_admin_menu__WEBPACK_IMPORTED_MODULE_4__.AppAdminMenu;
    this.log.a('constructor', {
      appDialogConfigService
    });
  }
  ngOnInit() {
    this.fetchDialogSettings();
    this.subscriptions.add(this.childDialogClosed$().subscribe(() => {
      this.fetchDialogSettings();
    }));
    this.smallScreen.addEventListener('change', c => (this.sidenav.opened = !c.matches, this.sidenav.mode = c.matches ? 'over' : 'side'));
  }
  ngOnDestroy() {
    this.dialogSettings$.complete();
    this.pathsArray$.complete();
    super.ngOnDestroy();
  }
  closeDialog() {
    this.dialogRef.close();
  }
  // @2dg not longer in use with new routing SideNav
  // changeUrl(path: string) {
  //   // if (path === 'data') path = `data/${eavConstants.scopes.default.value}`;
  //   // this.router.navigate([path], { relativeTo: this.route });
  // }
  fetchDialogSettings() {
    this.appDialogConfigService.getCurrent$().subscribe(dialogSettings => {
      (0,_shared_helpers_update_env_vars_from_dialog_settings_helper__WEBPACK_IMPORTED_MODULE_1__.UpdateEnvVarsFromDialogSettings)(dialogSettings.Context.App);
      this.dialogSettings$.next(dialogSettings);
      if (!dialogSettings.Context.Enable.Query) this.navItems = this.navItems.filter(item => item.name !== 'Queries' && item.name !== 'Web API');
      this.pathsArray$.next(this.navItems.map(item => item.path));
    });
  }
  static #_ = this.ɵfac = function AppAdminMainComponent_Factory(t) {
    return new (t || AppAdminMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_3__.AppDialogConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__.MediaMatcher));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AppAdminMainComponent,
    selectors: [["app-app-admin-main"]],
    viewQuery: function AppAdminMainComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([
    // Must have a new config service here, to restart with new settings
    // which are injected into it from the context
    // Because of standalone-components, it's not enough to have it in the module-definition
    _services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_3__.AppDialogConfigService]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [["emptyTemplate", ""], ["sidenav", ""], [1, "toolbar-container"], [3, "src"], [1, "d-flex"], [1, "mat-icon-admin"], [3, "separator"], [4, "xngBreadcrumbItem"], [1, "toolbar-spacer"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [3, "mode", "opened"], [3, "navItem"], [1, "sideNav-bottom-info"], [3, "click", "src"], [1, "menu-container", 3, "click"], [1, "breadcrumb-icon"]],
    template: function AppAdminMainComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, AppAdminMainComponent_Conditional_0_Template, 30, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, xng_breadcrumb__WEBPACK_IMPORTED_MODULE_18__.BreadcrumbModule, xng_breadcrumb__WEBPACK_IMPORTED_MODULE_18__.BreadcrumbComponent, xng_breadcrumb__WEBPACK_IMPORTED_MODULE_18__.BreadcrumbItemDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatIconButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__.MatSidenavContent, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_21__.AsyncPipe, _shared_components_nav_item_list_nav_item_list_component__WEBPACK_IMPORTED_MODULE_6__.NavItemListComponent],
    styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  background-color: white;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  flex: 1 0 74px;\n}\nmat-toolbar[_ngcontent-%COMP%]   .toolbar-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nmat-toolbar[_ngcontent-%COMP%]   .toolbar-container[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n  margin-right: 16px;\n  cursor: pointer;\n}\nmat-toolbar[_ngcontent-%COMP%]   .toolbar-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 16px 0;\n  margin-right: 16px;\n  -webkit-user-select: none;\n          user-select: none;\n  text-shadow: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\nmat-toolbar[_ngcontent-%COMP%]   .toolbar-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\nmat-toolbar[_ngcontent-%COMP%]   .mat-icon-admin[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%] {\n  width: 295px;\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n}\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]   .sideNav-bottom-info[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  text-align: center;\n  width: 100%;\n  font-size: 12px;\n}\n\n.container-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: rgba(128, 128, 128, 0.1);\n}\n\n  .xng-breadcrumb-separator {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n  .mat-drawer-container {\n  background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvc3R5bGVzL3NpZGUtbmF2LnN0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9wcm9qZWN0cy9lYXYtdWkvc3JjL2FwcC9hcHAtYWRtaW5pc3RyYXRpb24vYXBwLWFkbWluLW1haW4vYXBwLWFkbWluLW1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURBSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0VOO0FEQUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNFTjtBREVFO0VBQ0UsY0FBQTtBQ0FKO0FESUk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNGTjs7QURPQTtFQUNFLGFBQUE7QUNKRjtBRFdFO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDVEo7QURVSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNSTjs7QURhQTtFQUNFLFlBQUE7QUNWRjs7QURhQTtFQUNFLDBDQUFBO0FDVkY7O0FEY0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDWEo7QURjRTtFQUNFLHdDQUFBO0FDWkoiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDtcclxuICBmbGV4OiAxIDAgNzRweDtcclxuXHJcbiAgLnRvb2xiYXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLm1lbnUtY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHggMDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50b29sYmFyLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcblxyXG4gIC5tYXQtaWNvbi1hZG1pbntcclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAvLyBtYXQtc2lkZW5hdi1jb250ZW50e1xyXG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBTaWRlbmF2ZVxyXG4gIG1hdC1zaWRlbmF2IHtcclxuICAgIHdpZHRoOiAyOTVweDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC5zaWRlTmF2LWJvdHRvbS1pbmZvIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lci1jb250ZW50IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xKTtcclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAueG5nLWJyZWFkY3J1bWItc2VwYXJhdG9yIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJtYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwO1xuICBmbGV4OiAxIDAgNzRweDtcbn1cbm1hdC10b29sYmFyIC50b29sYmFyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5tYXQtdG9vbGJhciAudG9vbGJhci1jb250YWluZXIgLm1lbnUtY29udGFpbmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5tYXQtdG9vbGJhciAudG9vbGJhci1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4IDA7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5tYXQtdG9vbGJhciAudG9vbGJhci1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbm1hdC10b29sYmFyIC5tYXQtaWNvbi1hZG1pbiBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbn1cblxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiAyOTVweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5zaWRlTmF2LWJvdHRvbS1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY29udGFpbmVyLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMSk7XG59XG5cbjo6bmctZGVlcCAueG5nLWJyZWFkY3J1bWItc2VwYXJhdG9yIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8441:
/*!*************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/app-admin-main/app-admin-menu.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAdminMenu: () => (/* binding */ AppAdminMenu)
/* harmony export */ });
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _copilot_go_to_copilot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../copilot/go-to-copilot */ 85898);
/* harmony import */ var _dev_rest_go_to_dev_rest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dev-rest/go-to-dev-rest */ 10261);
/* harmony import */ var _copilot_copilot_specs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../copilot/copilot-specs */ 97214);




const AppAdminMenu = [{
  name: 'Info',
  path: 'home',
  icon: 'info',
  svgIcon: false,
  tippy: 'App Info'
}, {
  name: 'Data',
  path: `data/${_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.scopes.default.value}`,
  icon: 'menu',
  svgIcon: false,
  tippy: 'Data / Content',
  child: [{
    ..._copilot_go_to_copilot__WEBPACK_IMPORTED_MODULE_1__.GoToCopilot.routeDefinition('data'),
    tippy: 'Autogenerate content types '
  }, {
    ..._dev_rest_go_to_dev_rest__WEBPACK_IMPORTED_MODULE_2__.GoToDevRest.routeDataDefinition,
    tippy: 'Rest-Api Data '
  }]
}, {
  name: 'Queries',
  path: 'queries',
  icon: 'filter_list',
  svgIcon: false,
  tippy: 'Queries / Visual Query Designer',
  child: [{
    ..._dev_rest_go_to_dev_rest__WEBPACK_IMPORTED_MODULE_2__.GoToDevRest.routeQueryDefinition,
    tippy: 'Rest-Api Queries'
  }]
}, {
  name: 'Views',
  path: 'views',
  icon: 'layers',
  svgIcon: false,
  tippy: 'Views / Templates',
  child: [{
    ..._copilot_go_to_copilot__WEBPACK_IMPORTED_MODULE_1__.GoToCopilot.routeDefinition('views'),
    tippy: 'Autogenerate Razor Views'
  }]
}, {
  name: 'Web API',
  path: 'web-api',
  icon: 'offline_bolt',
  svgIcon: false,
  tippy: 'WebApi',
  child: [{
    ..._copilot_go_to_copilot__WEBPACK_IMPORTED_MODULE_1__.GoToCopilot.routeDefinition('web-api'),
    tippy: _copilot_copilot_specs__WEBPACK_IMPORTED_MODULE_3__.CopilotSpecs.webApi.teaser
  }, {
    ..._dev_rest_go_to_dev_rest__WEBPACK_IMPORTED_MODULE_2__.GoToDevRest.routeWebApiDefinition,
    tippy: 'Rest-Api Queries'
  }]
}, {
  name: 'App',
  path: 'app',
  icon: 'settings_applications',
  svgIcon: false,
  tippy: 'App Settings'
}, {
  name: 'Sync',
  path: 'sync',
  icon: 'sync',
  svgIcon: false,
  tippy: 'App Export / Import'
}];

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_app-admin-main_app-admin-main_component_ts.js.map