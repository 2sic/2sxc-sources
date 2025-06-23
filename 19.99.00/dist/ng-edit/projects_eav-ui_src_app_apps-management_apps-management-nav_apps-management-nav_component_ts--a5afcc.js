"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_apps-management_apps-management-nav_apps-management-nav_component_ts--a5afcc"],{

/***/ 182:
/*!********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/apps-management-nav/managment-nav-items.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppsManagementNavItems: () => (/* binding */ AppsManagementNavItems)
/* harmony export */ });
const AppsManagementNavItems = [{
  name: 'System',
  path: 'system',
  icon: 'settings',
  tippy: 'System Info',
  child: [{
    name: 'Register',
    path: 'registration',
    icon: 'how_to_reg',
    tippy: 'Register this System on 2sxc Patrons'
  }]
}, {
  name: 'Apps',
  path: 'list',
  icon: 'star',
  tippy: 'Apps'
}, {
  name: 'Languages',
  path: 'languages',
  icon: 'translate',
  tippy: 'Languages'
}, {
  name: 'Extensions / Features',
  path: 'license',
  icon: 'tune',
  tippy: 'Extensions and Features'
}];

/***/ }),

/***/ 4979:
/*!*****************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/services/service-base.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceBase: () => (/* binding */ ServiceBase)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


/**
 * Base class for services - just to standardize use of subscriptions.
 * Has @Injectable() just to allow it ot use the standard OnDestroy interface.
 */
class ServiceBase {
  constructor() {
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subscription();
  }
  ngOnDestroy() {
    this.destroy();
  }
  // TODO: TRY TO GET RID OF THIS. AFAIK it's just used in the mask, which should switch over to signals.
  destroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function ServiceBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ServiceBase)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ServiceBase,
      factory: ServiceBase.ɵfac
    });
  }
}

/***/ }),

/***/ 9038:
/*!******************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/apps-management-nav/apps-management-nav.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppsManagementNavComponent: () => (/* binding */ AppsManagementNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ 17049);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 39552);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! xng-breadcrumb */ 33011);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _app_administration_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app-administration/services */ 75445);
/* harmony import */ var _shared_components_nav_item_list_nav_item_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/nav-item-list/nav-item-list.component */ 31808);
/* harmony import */ var _shared_directives_toggle_debug_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/directives/toggle-debug.directive */ 95699);
/* harmony import */ var _shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/routing/dialog-routing.service */ 60852);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _managment_nav_items__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./managment-nav-items */ 182);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ 87912);

























const _c0 = ["sidenav"];
const _forTrack0 = ($index, $item) => $item.path;
function AppsManagementNavComponent_ng_container_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
  }
  if (rf & 2) {
    const breadcrumb_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", breadcrumb_r3, " ");
  }
}
function AppsManagementNavComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AppsManagementNavComponent_ng_container_8_Conditional_1_Template, 3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const last_r4 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](last_r4 ? 1 : -1);
  }
}
function AppsManagementNavComponent_ng_template_9_Template(rf, ctx) {}
function AppsManagementNavComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-nav-item-list", 10);
  }
  if (rf & 2) {
    const navItem_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("navItem", navItem_r5);
  }
}
class AppsManagementNavComponent {
  #globalDialogConfigSvc;
  #dialogClose;
  constructor(dialog, context, media) {
    this.dialog = dialog;
    this.context = context;
    this.media = media;
    this.#globalDialogConfigSvc = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_app_administration_services__WEBPACK_IMPORTED_MODULE_1__.DialogConfigGlobalService);
    this.zoneId = this.context.zoneId;
    this.smallScreen = this.media.matchMedia('(max-width: 1000px)');
    this.sideNavOpened = !this.smallScreen.matches;
    this.navItems = _managment_nav_items__WEBPACK_IMPORTED_MODULE_6__.AppsManagementNavItems;
    this.#dialogClose = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_4__.DialogRoutingService);
  }
  ngOnInit() {
    this.fetchDialogSettings();
    // Trigger settings load? not sure why, because it's cached in the service... on dialog close?
    this.#dialogClose.doOnDialogClosed(() => this.fetchDialogSettings());
    this.smallScreen.addEventListener('change', c => (this.sidenav.opened = !c.matches, this.sidenav.mode = c.matches ? 'over' : 'side'));
  }
  closeDialog() {
    this.dialog.close();
  }
  fetchDialogSettings() {
    this.#globalDialogConfigSvc.getShared$(0).subscribe();
  }
  static {
    this.ɵfac = function AppsManagementNavComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppsManagementNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_5__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.MediaMatcher));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: AppsManagementNavComponent,
      selectors: [["app-apps-management-nav"]],
      viewQuery: function AppsManagementNavComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
        }
      },
      decls: 26,
      vars: 4,
      consts: [["emptyTemplate", ""], ["sidenav", ""], ["appToggleDebug", ""], [1, "toolbar-container"], [1, "menu-container", 3, "click"], [3, "separator"], [4, "xngBreadcrumbItem"], [1, "toolbar-spacer"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [3, "mode", "opened"], [3, "navItem"], [1, "sideNav-bottom-info"], [1, "container-content"], [1, "breadcrumb-icon"]],
      template: function AppsManagementNavComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-toolbar", 2)(1, "div", 3)(2, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppsManagementNavComponent_Template_mat_icon_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            const sidenav_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](sidenav_r2.opened = !sidenav_r2.opened);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div")(5, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "xng-breadcrumb", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, AppsManagementNavComponent_ng_container_8_Template, 2, 1, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, AppsManagementNavComponent_ng_template_9_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppsManagementNavComponent_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.closeDialog());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-sidenav-container", 2)(16, "mat-sidenav", 9, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](18, AppsManagementNavComponent_For_19_Template, 1, 1, "app-nav-item-list", 10, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 11)(21, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "use Burger icon to show/hide menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-sidenav-content")(24, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const emptyTemplate_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Manage Zone ", ctx.zoneId, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("separator", emptyTemplate_r6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("mode", ctx.smallScreen.matches ? "over" : "side")("opened", ctx.sideNavOpened);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](ctx.navItems);
        }
      },
      dependencies: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, xng_breadcrumb__WEBPACK_IMPORTED_MODULE_12__.BreadcrumbModule, xng_breadcrumb__WEBPACK_IMPORTED_MODULE_12__.BreadcrumbComponent, xng_breadcrumb__WEBPACK_IMPORTED_MODULE_12__.BreadcrumbItemDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatIconButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavContent, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterOutlet, _shared_components_nav_item_list_nav_item_list_component__WEBPACK_IMPORTED_MODULE_2__.NavItemListComponent, _shared_directives_toggle_debug_directive__WEBPACK_IMPORTED_MODULE_3__.ToggleDebugDirective],
      styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  background-color: white;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  flex: 1 0 74px;\n}\nmat-toolbar[_ngcontent-%COMP%]   .toolbar-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nmat-toolbar[_ngcontent-%COMP%]   .toolbar-container[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n  margin-right: 16px;\n  cursor: pointer;\n}\nmat-toolbar[_ngcontent-%COMP%]   .toolbar-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 16px 0;\n  margin-right: 16px;\n  -webkit-user-select: none;\n          user-select: none;\n  text-shadow: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\nmat-toolbar[_ngcontent-%COMP%]   .toolbar-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\nmat-toolbar[_ngcontent-%COMP%]   .mat-icon-admin[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%] {\n  width: 295px;\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n}\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]   .sideNav-bottom-info[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  text-align: center;\n  width: 100%;\n  font-size: 12px;\n}\n\n.container-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: rgba(128, 128, 128, 0.1);\n}\n\n  .xng-breadcrumb-separator {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n  .mat-drawer-container {\n  background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN0eWxlc1xcc2lkZS1uYXYuc3R5bGUuc2NzcyIsImFwcHMtbWFuYWdlbWVudC1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURBSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0VOO0FEQUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNFTjtBREVFO0VBQ0UsY0FBQTtBQ0FKO0FESUk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNGTjs7QURPQTtFQUNFLGFBQUE7QUNKRjtBRE9FO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDTEo7QURNSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNKTjs7QURTQTtFQUNFLFlBQUE7QUNORjs7QURTQTtFQUNFLDBDQUFBO0FDTkY7O0FEVUU7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDUEo7QURVRTtFQUNFLHdDQUFBO0FDUkoiLCJmaWxlIjoiYXBwcy1tYW5hZ2VtZW50LW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGZsZXg6IDEgMCA3NHB4O1xyXG5cclxuICAudG9vbGJhci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAubWVudS1jb250YWluZXIge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTZweCAwO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXItc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1pY29uLWFkbWluIHtcclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAvLyBTaWRlTmF2XHJcbiAgbWF0LXNpZGVuYXYge1xyXG4gICAgd2lkdGg6IDI5NXB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLnNpZGVOYXYtYm90dG9tLWluZm8ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyLWNvbnRlbnQge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjEpO1xyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC54bmctYnJlYWRjcnVtYi1zZXBhcmF0b3Ige1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTA7XG4gIGZsZXg6IDEgMCA3NHB4O1xufVxubWF0LXRvb2xiYXIgLnRvb2xiYXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbm1hdC10b29sYmFyIC50b29sYmFyLWNvbnRhaW5lciAubWVudS1jb250YWluZXIge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm1hdC10b29sYmFyIC50b29sYmFyLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHggMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbm1hdC10b29sYmFyIC50b29sYmFyLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxubWF0LXRvb2xiYXIgLm1hdC1pY29uLWFkbWluIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xufVxuXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IHtcbiAgd2lkdGg6IDI5NXB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLnNpZGVOYXYtYm90dG9tLWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jb250YWluZXItY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xKTtcbn1cblxuOjpuZy1kZWVwIC54bmctYnJlYWRjcnVtYi1zZXBhcmF0b3Ige1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LWRyYXdlci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvc3R5bGVzL3NpZGUtbmF2LnN0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9wcm9qZWN0cy9lYXYtdWkvc3JjL2FwcC9hcHBzLW1hbmFnZW1lbnQvYXBwcy1tYW5hZ2VtZW50LW5hdi9hcHBzLW1hbmFnZW1lbnQtbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQUk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNFTjtBREFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRU47QURFRTtFQUNFLGNBQUE7QUNBSjtBRElJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRk47O0FET0E7RUFDRSxhQUFBO0FDSkY7QURPRTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ0xKO0FETUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDSk47O0FEU0E7RUFDRSxZQUFBO0FDTkY7O0FEU0E7RUFDRSwwQ0FBQTtBQ05GOztBRFVFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQ1BKO0FEVUU7RUFDRSx3Q0FBQTtBQ1JKO0FBRUEsNHhKQUE0eEoiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDtcclxuICBmbGV4OiAxIDAgNzRweDtcclxuXHJcbiAgLnRvb2xiYXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLm1lbnUtY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHggMDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50b29sYmFyLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcblxyXG4gIC5tYXQtaWNvbi1hZG1pbiB7XHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICB3aWR0aDogMTZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgLy8gU2lkZU5hdlxyXG4gIG1hdC1zaWRlbmF2IHtcclxuICAgIHdpZHRoOiAyOTVweDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC5zaWRlTmF2LWJvdHRvbS1pbmZvIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lci1jb250ZW50IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xKTtcclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAueG5nLWJyZWFkY3J1bWItc2VwYXJhdG9yIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJtYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwO1xuICBmbGV4OiAxIDAgNzRweDtcbn1cbm1hdC10b29sYmFyIC50b29sYmFyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5tYXQtdG9vbGJhciAudG9vbGJhci1jb250YWluZXIgLm1lbnUtY29udGFpbmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5tYXQtdG9vbGJhciAudG9vbGJhci1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4IDA7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5tYXQtdG9vbGJhciAudG9vbGJhci1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbm1hdC10b29sYmFyIC5tYXQtaWNvbi1hZG1pbiBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbn1cblxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiAyOTVweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5zaWRlTmF2LWJvdHRvbS1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY29udGFpbmVyLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMSk7XG59XG5cbjo6bmctZGVlcCAueG5nLWJyZWFkY3J1bWItc2VwYXJhdG9yIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9234:
/*!*******************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/services/entity.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityService: () => (/* binding */ EntityService),
/* harmony export */   webApiEntityList: () => (/* binding */ webApiEntityList),
/* harmony export */   webApiEntityRoot: () => (/* binding */ webApiEntityRoot)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 86301);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logging */ 34435);
/* harmony import */ var _http_service_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-service-base */ 96474);
/* harmony import */ var _query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query.service */ 54839);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);






const logSpecs = {
  all: false,
  getEntities: false,
  getAvailableEntities: false,
  delete: false
};
const webApiEntityRoot = 'admin/entity/';
const webApiEntityList = 'admin/entity/list';
class EntityService extends _http_service_base__WEBPACK_IMPORTED_MODULE_2__.HttpServiceBase {
  constructor() {
    super(...arguments);
    this.log = (0,_logging__WEBPACK_IMPORTED_MODULE_1__.classLog)({
      EntityService
    }, logSpecs);
    this.queryService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_query_service__WEBPACK_IMPORTED_MODULE_3__.QueryService);
  }
  /**
   * Get entities based on the content type name.
   * As of 2024-04-29 only used in REST API.
   * @param params
   * @returns
   */
  getEntities$(params) {
    this.log.fnIf('getEntities');
    return params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)(p => p != null), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(p => this.getAvailableEntities(p.contentTypeName).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.shareReplay)(1))));
  }
  getAvailableEntities(contentTypeName, entitiesFilter) {
    var log = this.log.fnIf('getAvailableEntities');
    return this.queryService.getEntities({
      contentTypes: [contentTypeName],
      itemIds: entitiesFilter,
      fields: 'Id,Guid,Title',
      log: 'getAvailableEntities'
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(data => data.Default));
  }
  delete(appId, contentType, entityId, force, parentId, parentField) {
    this.log.fnIf('delete', {
      appId,
      contentType,
      entityId,
      force,
      parentId,
      parent
    });
    return this.http.delete(this.apiUrl(webApiEntityRoot + 'delete'), {
      params: {
        contentType,
        id: entityId.toString(),
        appId,
        force: force.toString(),
        ...(parentId && {
          parentId: parentId.toString()
        }),
        ...(parentId && parentField && {
          parentField
        })
      }
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵEntityService_BaseFactory;
      return function EntityService_Factory(__ngFactoryType__) {
        return (ɵEntityService_BaseFactory || (ɵEntityService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetInheritedFactory"](EntityService)))(__ngFactoryType__ || EntityService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: EntityService,
      factory: EntityService.ɵfac
    });
  }
}

/***/ }),

/***/ 54839:
/*!******************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/services/query.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryService: () => (/* binding */ QueryService)
/* harmony export */ });
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logging */ 34435);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);






const logSpecs = {
  all: false,
  getAvailableEntities: false,
  getEntities: false
};
class QueryService {
  constructor(http, context) {
    this.http = http;
    this.context = context;
    this.log = (0,_logging__WEBPACK_IMPORTED_MODULE_0__.classLog)({
      QueryService
    }, logSpecs);
  }
  getFromQuery(queryUrl, params, fields, entitiesFilter) {
    this.log.fnIf('getAvailableEntities', {
      queryUrl,
      params,
      fields,
      entitiesFilter
    });
    // Check if any params we should auto-add are already set (like in a query which has these params set in the configuration)
    const hasParams = !!params;
    const paramsLower = params?.toLocaleLowerCase() ?? '';
    const hasAppId = paramsLower.includes('appid=') ?? false;
    const allParams = '' + (hasAppId ? '' : `&appId=${this.context.appId}`) + (hasParams ? `&${params}` : '') + '&$select=' + (fields ?? '' /* special catch to avoid the word "null" */);
    // trim initial & because it will always start with an & and it should't
    const urlParams = allParams.substring(1);
    return this.http.post(`app/auto/query/${queryUrl}?${urlParams}`, {
      Guids: entitiesFilter
    });
  }
  getEntities({
    contentTypes,
    itemIds,
    fields,
    log
  }) {
    this.log.fnIf(`getEntities`, {
      log,
      contentTypes,
      itemIds,
      fields
    });
    const allParams = '&typeNames=' + (contentTypes?.join(',') ?? '') + `&appId=${this.context.appId}` + '&itemIds=' + (itemIds?.join(',') ?? '') + '&$select=' + (fields ?? '' /* special catch to avoid the word "null" */);
    // trim initial & because it will always start with an & and it should't
    const urlParams = allParams.substring(1);
    return this.http.post(`app/auto/query/System.EntityPicker/Default?${urlParams}`, {});
  }
  static {
    this.ɵfac = function QueryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || QueryService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_context__WEBPACK_IMPORTED_MODULE_1__.Context));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: QueryService,
      factory: QueryService.ɵfac
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
  get urlSegments() {
    return this.router.url.split('/');
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
//# sourceMappingURL=projects_eav-ui_src_app_apps-management_apps-management-nav_apps-management-nav_component_ts--a5afcc.js.map