"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_apps-management_apps-management-nav_apps-management-nav_component_ts"],{

/***/ 9038:
/*!******************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/apps-management-nav/apps-management-nav.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppsManagementNavComponent: () => (/* binding */ AppsManagementNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/base-with-child-dialog.component */ 61735);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ 17049);
/* harmony import */ var _app_administration_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-administration/services */ 75445);
/* harmony import */ var _managment_nav_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./managment-nav-items */ 182);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! xng-breadcrumb */ 33011);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ 39552);
/* harmony import */ var _shared_components_nav_item_list_nav_item_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/nav-item-list/nav-item-list.component */ 31808);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core */ 34447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/layout */ 87912);


























const _c0 = ["sidenav"];
const _forTrack0 = ($index, $item) => $item.path;
function AppsManagementNavComponent_Conditional_0_ng_container_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
  }
  if (rf & 2) {
    const breadcrumb_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", breadcrumb_r3, " ");
  }
}
function AppsManagementNavComponent_Conditional_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AppsManagementNavComponent_Conditional_0_ng_container_8_Conditional_1_Template, 3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const last_r4 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](1, last_r4 ? 1 : -1);
  }
}
function AppsManagementNavComponent_Conditional_0_ng_template_9_Template(rf, ctx) {}
function AppsManagementNavComponent_Conditional_0_For_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-nav-item-list", 9);
  }
  if (rf & 2) {
    const navItem_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("navItem", navItem_r6);
  }
}
function AppsManagementNavComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-toolbar")(1, "div", 2)(2, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppsManagementNavComponent_Conditional_0_Template_mat_icon_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const sidenav_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](17);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](sidenav_r2.opened = !sidenav_r2.opened);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div")(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "xng-breadcrumb", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, AppsManagementNavComponent_Conditional_0_ng_container_8_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, AppsManagementNavComponent_Conditional_0_ng_template_9_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppsManagementNavComponent_Conditional_0_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-sidenav-container")(16, "mat-sidenav", 8, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](18, AppsManagementNavComponent_Conditional_0_For_19_Template, 1, 1, "app-nav-item-list", 9, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 10)(21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "use Burger icon to show/hide menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "mat-sidenav-content")(24, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const emptyTemplate_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](10);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Manage Zone ", ctx_r4.zoneId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("separator", emptyTemplate_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mode", ctx_r4.smallScreen.matches ? "over" : "side")("opened", ctx_r4.sideNavOpened);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx_r4.navItems);
  }
}
class AppsManagementNavComponent extends _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_0__.BaseWithChildDialogComponent {
  constructor(router, route, dialogRef, context, media) {
    super(router, route);
    this.router = router;
    this.route = route;
    this.dialogRef = dialogRef;
    this.context = context;
    this.media = media;
    this.appDialogConfigService = (0,_core__WEBPACK_IMPORTED_MODULE_5__.transient)(_app_administration_services__WEBPACK_IMPORTED_MODULE_2__.AppDialogConfigService);
    this.zoneId = this.context.zoneId;
    this.currentPath$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(() => this.route.snapshot.firstChild.url[0].path), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.startWith)(this.route.snapshot.firstChild.url[0].path))]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(([paths]) => {
      if (paths == null) return;
      return paths;
    }));
    // Generate View Model
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this.currentPath$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(([currentPath]) => {
      return {
        currentPath
      };
    }));
    this.smallScreen = this.media.matchMedia('(max-width: 1000px)');
    this.sideNavOpened = !this.smallScreen.matches;
    this.navItems = _managment_nav_items__WEBPACK_IMPORTED_MODULE_3__.AppsManagementNavItems;
  }
  ngOnInit() {
    this.fetchDialogSettings();
    this.subscriptions.add(this.childDialogClosed$().subscribe(() => {
      this.fetchDialogSettings();
    }));
    this.smallScreen.addEventListener('change', c => (this.sidenav.opened = !c.matches, this.sidenav.mode = c.matches ? 'over' : 'side'));
  }
  closeDialog() {
    this.dialogRef.close();
  }
  // @2dg not longer in use with new routing SideNav
  // changeUrl(path: string) {
  //   this.router.navigate([path], { relativeTo: this.route });
  // }
  fetchDialogSettings() {
    this.appDialogConfigService.getShared$(0).subscribe();
  }
  static #_ = this.ɵfac = function AppsManagementNavComponent_Factory(t) {
    return new (t || AppsManagementNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_1__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__.MediaMatcher));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AppsManagementNavComponent,
    selectors: [["app-apps-management-nav"]],
    viewQuery: function AppsManagementNavComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [["emptyTemplate", ""], ["sidenav", ""], [1, "toolbar-container"], [1, "menu-container", 3, "click"], [3, "separator"], [4, "xngBreadcrumbItem"], [1, "toolbar-spacer"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [3, "mode", "opened"], [3, "navItem"], [1, "sideNav-bottom-info"], [1, "container-content"], [1, "breadcrumb-icon"]],
    template: function AppsManagementNavComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, AppsManagementNavComponent_Conditional_0_Template, 26, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, xng_breadcrumb__WEBPACK_IMPORTED_MODULE_16__.BreadcrumbModule, xng_breadcrumb__WEBPACK_IMPORTED_MODULE_16__.BreadcrumbComponent, xng_breadcrumb__WEBPACK_IMPORTED_MODULE_16__.BreadcrumbItemDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatIconButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenavContent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe, _shared_components_nav_item_list_nav_item_list_component__WEBPACK_IMPORTED_MODULE_4__.NavItemListComponent],
    styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  background-color: white;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  flex: 1 0 74px;\n}\nmat-toolbar[_ngcontent-%COMP%]   .toolbar-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nmat-toolbar[_ngcontent-%COMP%]   .toolbar-container[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n  margin-right: 16px;\n  cursor: pointer;\n}\nmat-toolbar[_ngcontent-%COMP%]   .toolbar-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 16px 0;\n  margin-right: 16px;\n  -webkit-user-select: none;\n          user-select: none;\n  text-shadow: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\nmat-toolbar[_ngcontent-%COMP%]   .toolbar-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\nmat-toolbar[_ngcontent-%COMP%]   .mat-icon-admin[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%] {\n  width: 295px;\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n}\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]   .sideNav-bottom-info[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  text-align: center;\n  width: 100%;\n  font-size: 12px;\n}\n\n.container-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: rgba(128, 128, 128, 0.1);\n}\n\n  .xng-breadcrumb-separator {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n  .mat-drawer-container {\n  background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvc3R5bGVzL3NpZGUtbmF2LnN0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9wcm9qZWN0cy9lYXYtdWkvc3JjL2FwcC9hcHBzLW1hbmFnZW1lbnQvYXBwcy1tYW5hZ2VtZW50LW5hdi9hcHBzLW1hbmFnZW1lbnQtbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQUk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNFTjtBREFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRU47QURFRTtFQUNFLGNBQUE7QUNBSjtBRElJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRk47O0FET0E7RUFDRSxhQUFBO0FDSkY7QURXRTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ1RKO0FEVUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDUk47O0FEYUE7RUFDRSxZQUFBO0FDVkY7O0FEYUE7RUFDRSwwQ0FBQTtBQ1ZGOztBRGNFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQ1hKO0FEY0U7RUFDRSx3Q0FBQTtBQ1pKIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgZmxleDogMSAwIDc0cHg7XHJcblxyXG4gIC50b29sYmFyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5tZW51LWNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4IDA7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudG9vbGJhci1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG5cclxuICAubWF0LWljb24tYWRtaW57XHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICB3aWR0aDogMTZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgLy8gbWF0LXNpZGVuYXYtY29udGVudHtcclxuICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gU2lkZW5hdmVcclxuICBtYXQtc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMjk1cHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAuc2lkZU5hdi1ib3R0b20taW5mbyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXItY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMSk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgLnhuZy1icmVhZGNydW1iLXNlcGFyYXRvciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwibWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDtcbiAgZmxleDogMSAwIDc0cHg7XG59XG5tYXQtdG9vbGJhciAudG9vbGJhci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxubWF0LXRvb2xiYXIgLnRvb2xiYXItY29udGFpbmVyIC5tZW51LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubWF0LXRvb2xiYXIgLnRvb2xiYXItY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTZweCAwO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxubWF0LXRvb2xiYXIgLnRvb2xiYXItc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5tYXQtdG9vbGJhciAubWF0LWljb24tYWRtaW4gbWF0LWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYge1xuICB3aWR0aDogMjk1cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuc2lkZU5hdi1ib3R0b20taW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNvbnRhaW5lci1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjEpO1xufVxuXG46Om5nLWRlZXAgLnhuZy1icmVhZGNydW1iLXNlcGFyYXRvciB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

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
  svgIcon: false,
  tippy: 'System Info',
  child: [{
    name: 'Register',
    path: 'registration',
    icon: 'how_to_reg',
    svgIcon: false,
    tippy: 'Register this System on 2sxc Patrons'
  }]
}, {
  name: 'Apps',
  path: 'list',
  icon: 'star_border',
  svgIcon: false,
  tippy: 'Apps'
}, {
  name: 'Languages',
  path: 'languages',
  icon: 'translate',
  svgIcon: false,
  tippy: 'Languages'
}, {
  name: 'Extensions / Features',
  path: 'license',
  icon: 'tune',
  svgIcon: false,
  tippy: 'Extensions and Features'
}];

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

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_apps-management_apps-management-nav_apps-management-nav_component_ts.js.map