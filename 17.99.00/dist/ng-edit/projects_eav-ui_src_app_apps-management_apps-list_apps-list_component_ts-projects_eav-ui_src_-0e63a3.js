"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_apps-management_apps-list_apps-list_component_ts-projects_eav-ui_src_-0e63a3"],{

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
  static #_ = this.ɵfac = function AppsListActionsComponent_Factory(t) {
    return new (t || AppsListActionsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](2, ctx.app.IsGlobal ? 2 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](3, ctx.app.IsInherited ? 3 : -1);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs */ 86301);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _features_feature_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../features/feature-names */ 28136);
/* harmony import */ var _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/base-with-child-dialog.component */ 61735);
/* harmony import */ var _shared_components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/boolean-filter/boolean-filter.component */ 91960);
/* harmony import */ var _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/id-field/id-field.component */ 36378);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _shared_services_features_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/features.service */ 44858);
/* harmony import */ var _services_apps_list_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/apps-list.service */ 83583);
/* harmony import */ var _apps_list_actions_apps_list_actions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./apps-list-actions/apps-list-actions.component */ 38666);
/* harmony import */ var _features_shared_base_feature_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../features/shared/base-feature.component */ 9006);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _app_administration_app_admin_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../app-administration/app-admin-helpers */ 58713);
/* harmony import */ var _app_list_grid_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-list-grid-config */ 53680);
/* harmony import */ var _shared_ag_grid_apps_list_show_ag_bool_icon_renderer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/ag-grid/apps-list-show/ag-bool-icon-renderer.component */ 16409);
/* harmony import */ var _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/logging/eav-logger */ 6812);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ecodev/fab-speed-dial */ 23183);
/* harmony import */ var _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ag-grid-community/core */ 41136);
/* harmony import */ var _ag_grid_community_client_side_row_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ag-grid-community/client-side-row-model */ 45705);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/directives/drag-and-drop.directive */ 34575);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../core */ 34447);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);








































const _c0 = a0 => ({
  "fab-opened": a0
});
function AppsListComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 0)(1, "ag-grid-angular", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("filesDropped", function AppsListComponent_Conditional_0_Template_ag_grid_angular_filesDropped_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.importApp($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "mat-dialog-actions", 2)(3, "eco-fab-speed-dial", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("openChange", function AppsListComponent_Conditional_0_Template_eco_fab_speed_dial_openChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.openChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "eco-fab-speed-dial-trigger", 4)(5, "button", 5)(6, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "eco-fab-speed-dial-actions", 7)(9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppsListComponent_Conditional_0_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.browseCatalog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppsListComponent_Conditional_0_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.createInheritedApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14, "holiday_village");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppsListComponent_Conditional_0_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.addFromFolder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](17, " add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppsListComponent_Conditional_0_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.importApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](20, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppsListComponent_Conditional_0_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.createApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](23, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const vm_r3 = ctx;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("rowData", vm_r3.apps)("gridOptions", ctx_r1.gridOptions)("allowedFileTypes", "zip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](7, _c0, vm_r3.fabOpen));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("spin", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](vm_r3.fabOpen ? "close" : "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadgeHidden", ctx_r1.isAddFromFolderEnabled());
  }
}
const logThis = false;
class AppsListComponent extends _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_1__.BaseWithChildDialogComponent {
  constructor(router, route, snackBar, context,
  // Services for showing features in the menu
  dialog, viewContainerRef, changeDetectorRef) {
    super(router, route, new _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_14__.EavLogger('AppsListComponent', logThis));
    this.router = router;
    this.route = route;
    this.snackBar = snackBar;
    this.context = context;
    this.dialog = dialog;
    this.viewContainerRef = viewContainerRef;
    this.changeDetectorRef = changeDetectorRef;
    this.fabOpen$ = new rxjs__WEBPACK_IMPORTED_MODULE_22__.BehaviorSubject(false);
    this.gridOptions = this.buildGridOptions();
    this.refreshApps$ = new rxjs__WEBPACK_IMPORTED_MODULE_23__.Subject();
    this.features = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.inject)(_shared_services_features_service__WEBPACK_IMPORTED_MODULE_7__.FeaturesService);
    this.isAddFromFolderEnabled = this.features.isEnabled(_features_feature_names__WEBPACK_IMPORTED_MODULE_0__.FeatureNames.AppSyncWithSiteFiles);
    this.appsListService = (0,_core__WEBPACK_IMPORTED_MODULE_20__.transient)(_services_apps_list_service__WEBPACK_IMPORTED_MODULE_8__.AppsListService);
    _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_15__.ModuleRegistry.registerModules([_ag_grid_community_client_side_row_model__WEBPACK_IMPORTED_MODULE_16__.ClientSideRowModelModule]);
  }
  ngOnInit() {
    const appsLog = this.log.rxTap('apps$');
    this.apps$ = this.refreshApps$.pipe(appsLog.pipe(), (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.startWith)(undefined), (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.switchMap)(() => this.appsListService.getAll().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_26__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.of)(undefined)))), (0,rxjs__WEBPACK_IMPORTED_MODULE_28__.shareReplay)(1), appsLog.shareReplay());
    this.subscriptions.add(this.childDialogClosed$().subscribe(() => {
      this.refreshApps$.next();
    }));
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.combineLatest)([this.apps$, this.fabOpen$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_30__.map)(([apps, fabOpen]) => {
      return {
        apps,
        fabOpen
      };
    }));
  }
  ngOnDestroy() {
    this.fabOpen$.complete();
    this.refreshApps$.complete();
    super.ngOnDestroy();
  }
  openChange(open) {
    this.fabOpen$.next(open);
  }
  browseCatalog() {
    window.open('https://2sxc.org/apps', '_blank');
  }
  createApp() {
    this.router.navigate(['create'], {
      relativeTo: this.route.parent.firstChild
    });
  }
  createInheritedApp() {
    this.router.navigate(['create-inherited'], {
      relativeTo: this.route.parent.firstChild
    });
  }
  addFromFolder() {
    this.router.navigate(['add-app-from-folder'], {
      relativeTo: this.route.parent.firstChild
    });
  }
  importApp(files) {
    const dialogData = {
      files
    };
    this.router.navigate(['import'], {
      relativeTo: this.route.parent.firstChild,
      state: dialogData
    });
  }
  deleteApp(app) {
    const result = prompt(`This cannot be undone. To really delete this app, type 'yes!' or type/paste the app-name here. Are you sure want to delete '${app.Name}' (${app.Id})?`);
    if (result === null) {
      return;
    }
    if (result === app.Name || result === 'yes!') {
      this.snackBar.open('Deleting...');
      this.appsListService.delete(app.Id).subscribe({
        error: () => {
          this.snackBar.open('Delete failed. Please check console for more information', undefined, {
            duration: 3000
          });
          this.refreshApps$.next();
        },
        next: () => {
          this.snackBar.open('Deleted', undefined, {
            duration: 2000
          });
          this.refreshApps$.next();
        }
      });
    } else {
      alert('Input did not match - will not delete');
    }
  }
  flushApp(app) {
    if (!confirm(`Flush the App Cache for ${app.Name} (${app.Id})?`)) {
      return;
    }
    this.snackBar.open('Flushing cache...');
    this.appsListService.flushCache(app.Id).subscribe({
      error: () => {
        this.snackBar.open('Cache flush failed. Please check console for more information', undefined, {
          duration: 3000
        });
      },
      next: () => {
        this.snackBar.open('Cache flushed', undefined, {
          duration: 2000
        });
      }
    });
  }
  openLightSpeed(app) {
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_5__.convertFormToUrl)(_app_administration_app_admin_helpers__WEBPACK_IMPORTED_MODULE_11__.AppAdminHelpers.getLightSpeedEditParams(app.Id));
    this.router.navigate([`${this.context.zoneId}/${app.Id}/edit/${formUrl}`], {
      relativeTo: this.route.parent.firstChild
    });
  }
  openApp(app) {
    this.router.navigate([app.Id.toString()], {
      relativeTo: this.route.parent.firstChild
    });
  }
  openLightSpeedFeatInfo() {
    (0,_features_shared_base_feature_component__WEBPACK_IMPORTED_MODULE_10__.openFeatureDialog)(this.dialog, _features_feature_names__WEBPACK_IMPORTED_MODULE_0__.FeatureNames.LightSpeed, this.viewContainerRef, this.changeDetectorRef);
  }
  buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_4__.defaultGridOptions,
      columnDefs: [{
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_17__.ColumnDefinitions.Id,
        cellRenderer: _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_3__.IdFieldComponent,
        cellRendererParams: (() => {
          const params = {
            tooltipGetter: app => `ID: ${app.Id}\nGUID: ${app.Guid}`
          };
          return params;
        })()
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_17__.ColumnDefinitions.IconShow,
        // valueGetter: (params) => {
        //   const app: App = params.data;
        //   return !app.IsHidden;
        // },
        cellRenderer: _shared_ag_grid_apps_list_show_ag_bool_icon_renderer_component__WEBPACK_IMPORTED_MODULE_13__.AgBoolIconRenderer,
        cellRendererParams: (() => ({
          settings: () => _app_list_grid_config__WEBPACK_IMPORTED_MODULE_12__.AppListShowIcons
        }))()
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_17__.ColumnDefinitions.TextWide,
        field: 'Name',
        cellClass: 'apps-list-primary-action highlight'.split(' '),
        sort: 'asc',
        onCellClicked: params => {
          const app = params.data;
          this.openApp(app);
        },
        cellRenderer: params => {
          const app = params.data;
          return `
            <div class="container">
              ${app.Thumbnail ? `<img class="image logo" src="${app.Thumbnail}?w=40&h=40&mode=crop"></img>` : `<div class="image logo"><span class="material-icons-outlined">star_border</span></div>`}
              <div class="text">${params.value}</div>
            </div>
            `;
        }
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_17__.ColumnDefinitions.TextWide,
        field: 'Folder'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_17__.ColumnDefinitions.Character,
        field: 'Version',
        width: 78
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_17__.ColumnDefinitions.Number,
        field: 'Items'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_17__.ColumnDefinitions.Boolean,
        field: 'HasCodeWarnings',
        headerName: 'Code',
        filter: _shared_components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_2__.BooleanFilterComponent,
        cellRenderer: _shared_ag_grid_apps_list_show_ag_bool_icon_renderer_component__WEBPACK_IMPORTED_MODULE_13__.AgBoolIconRenderer,
        cellRendererParams: (() => ({
          settings: app => _app_list_grid_config__WEBPACK_IMPORTED_MODULE_12__.AppListCodeErrorIcons
        }))()
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_17__.ColumnDefinitions.ActionsPinnedRight3,
        cellRenderer: _apps_list_actions_apps_list_actions_component__WEBPACK_IMPORTED_MODULE_9__.AppsListActionsComponent,
        cellRendererParams: {
          onOpenLightspeed: app => this.openLightSpeed(app),
          openLightspeedFeatureInfo: () => this.openLightSpeedFeatInfo(),
          do: (verb, app) => {
            switch (verb) {
              case 'deleteApp':
                this.deleteApp(app);
                break;
              case 'flushCache':
                this.flushApp(app);
                break;
            }
          }
        }
      }]
    };
    return gridOptions;
  }
  static #_ = this.ɵfac = function AppsListComponent_Factory(t) {
    return new (t || AppsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_31__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_31__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_6__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_21__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({
    type: AppsListComponent,
    selectors: [["app-apps-list"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 3,
    consts: [[1, "grid-wrapper", "mat-tab-grid-wrapper"], ["appDragAndDrop", "", 1, "ag-theme-material", 3, "filesDropped", "rowData", "gridOptions", "allowedFileTypes"], ["align", "end"], [1, "eav-eco-fab-speed-dial", 3, "openChange", "ngClass"], [3, "spin"], ["mat-fab", ""], [1, "spin180"], [1, "eav-eco-fab-speed-dial-actions"], ["mat-mini-fab", "", "label", "Find more apps", 1, "eav-eco-fab-speed-dial-action-button", 3, "click"], ["mat-mini-fab", "", "label", "Create inherited app", 1, "eav-eco-fab-speed-dial-action-button", 3, "click"], ["mat-mini-fab", "", "label", "Add from folder", 1, "eav-eco-fab-speed-dial-action-button", 3, "click"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadge", "\uD83D\uDC8E", "matBadgePosition", "below after", "aria-hidden", "false", 3, "matBadgeHidden"], ["mat-mini-fab", "", "label", "Import app", 1, "eav-eco-fab-speed-dial-action-button", 3, "click"], ["mat-mini-fab", "", "label", "Create app", 1, "eav-eco-fab-speed-dial-action-button", 3, "click"]],
    template: function AppsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, AppsListComponent_Conditional_0_Template, 24, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "router-outlet");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_19__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_34__.AgGridAngular, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__.MatDialogActions, _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_35__.EcoFabSpeedDialComponent, _angular_common__WEBPACK_IMPORTED_MODULE_36__.NgClass, _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_35__.EcoFabSpeedDialTriggerComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_37__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_37__.MatMiniFabButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_37__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_38__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_38__.MatIcon, _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_35__.EcoFabSpeedDialActionsComponent, _angular_material_badge__WEBPACK_IMPORTED_MODULE_39__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_39__.MatBadge, _angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_36__.AsyncPipe, _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_18__.DragAndDropDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
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

/***/ }),

/***/ 61735:
/*!***************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/components/base-with-child-dialog.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseWithChildDialogComponent: () => (/* binding */ BaseWithChildDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5057);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.component */ 43176);
/* harmony import */ var _logging_eav_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logging/eav-logger */ 6812);




const logThis = false;
// 2024-06-12 2dm experimental - remove comments if all is good mid of June
// - previously had
// @Directive()   // Needs the @Directive() so the compiler allows OnDestroy to be implemented
// ...then tried this
// @Component({
//   selector: 'app-base-component-with-child',
//   template: ''
// })
// ...but then added abstract, so I think it doesn't actually need all that
// tslint:disable-next-line:directive-class-suffix
class BaseWithChildDialogComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(router, route, log) {
    super();
    this.router = router;
    this.route = route;
    this.log = log;
    this.log ??= new _logging_eav_logger__WEBPACK_IMPORTED_MODULE_1__.EavLogger('BaseComponent', logThis);
  }
  // 2024-06-12 2dm - don't think this is needed since it's already on the base class
  // ngOnDestroy() {
  //   super.ngOnDestroy();
  // }
  // TODO @2dg not longer in use after refactoring SideNav with Routing
  // protected refreshOnChildClosedDeep() {
  //   return this.router.events.pipe(
  //     filter(event => event instanceof NavigationEnd),
  //     startWith(!!this.route.snapshot.firstChild.firstChild),
  //     map(() => !!this.route.snapshot.firstChild.firstChild),
  //     pairwise(),
  //     filter(([hadChild, hasChild]) => hadChild && !hasChild),
  //   )
  // }
  childDialogClosed$() {
    return this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.startWith)(!!this.route.snapshot.firstChild), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(() => !!this.route.snapshot.firstChild), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.pairwise)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(([hadChildBefore, hasChildNow]) => hadChildBefore && !hasChildNow));
  }
}

/***/ }),

/***/ 36378:
/*!**********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/components/id-field/id-field.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdFieldComponent: () => (/* binding */ IdFieldComponent)
/* harmony export */ });
/* harmony import */ var _helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/copy-to-clipboard.helper */ 70519);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);








const _c0 = (a0, a1) => ({
  "align-start": a0,
  "align-end": a1
});
class IdFieldComponent {
  constructor(snackBar) {
    this.snackBar = snackBar;
  }
  agInit(params) {
    this.id = params.value;
    this.align = typeof this.id === 'number' ? 'end' : 'start';
    this.tooltip = params.tooltipGetter(params.data);
  }
  refresh(params) {
    return true;
  }
  copy() {
    (0,_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_0__.copyToClipboard)(this.tooltip);
    this.snackBar.open('Copied to clipboard', null, {
      duration: 2000
    });
  }
  static #_ = this.ɵfac = function IdFieldComponent_Factory(t) {
    return new (t || IdFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: IdFieldComponent,
    selectors: [["app-id-field"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 6,
    consts: [["matRipple", "", 1, "id-box", "highlight", 3, "click", "tippy", "ngClass"], [1, "id"], [1, "icon"]],
    template: function IdFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IdFieldComponent_Template_div_click_0_listener() {
          return ctx.copy();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "file_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tippy", ctx.tooltip)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c0, ctx.align === "start", ctx.align === "end"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.id);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__.TippyDirective],
    styles: [".id-box[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.id-box.align-start[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.id-box.align-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.id-box[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%] {\n  max-width: 100%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.id-box[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.id-box[_ngcontent-%COMP%]:hover   .id[_ngcontent-%COMP%] {\n  display: none;\n}\n.id-box[_ngcontent-%COMP%]:not(:hover)   .icon[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2lkLWZpZWxkL2lkLWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsMkJBQUE7QUFDSjtBQUVFO0VBQ0UseUJBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUlFO0VBQ0UscUJBQUE7QUFGSjtBQUlJO0VBQ0UsYUFBQTtBQUZOO0FBT0k7RUFDRSxhQUFBO0FBTE4iLCJzb3VyY2VzQ29udGVudCI6WyIuaWQtYm94IHtcclxuICBwYWRkaW5nOiAwIDhweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmLmFsaWduLXN0YXJ0IHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gICYuYWxpZ24tZW5kIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG5cclxuICAuaWQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgLmlkIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6bm90KDpob3Zlcikge1xyXG4gICAgLmljb24ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_apps-management_apps-list_apps-list_component_ts-projects_eav-ui_src_-0e63a3.js.map