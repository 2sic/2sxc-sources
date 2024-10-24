"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_queries_queries_component_ts"],{

/***/ 72620:
/*!***********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/queries/ag-actions/ag-actions-component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgActionsComponent: () => (/* binding */ AgActionsComponent)
/* harmony export */ });
class AgActionsComponent {
  agInit(params) {
    this.params = params;
    this.item = this.params.data;
  }
  refresh(params) {
    return true;
  }
}

/***/ }),

/***/ 40374:
/*!*************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/queries/ag-actions/ag-actions.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 44114:
/*!********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/queries/ag-actions/index.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgActionsComponent: () => (/* reexport safe */ _ag_actions_component__WEBPACK_IMPORTED_MODULE_1__.AgActionsComponent)
/* harmony export */ });
/* harmony import */ var _ag_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ag-actions */ 40374);
/* harmony import */ var _ag_actions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ag-actions-component */ 72620);



/***/ }),

/***/ 79693:
/*!*********************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/queries/queries-actions/queries-actions.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueriesActionsComponent: () => (/* binding */ QueriesActionsComponent)
/* harmony export */ });
/* harmony import */ var _ag_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ag-actions */ 44114);
/* harmony import */ var _queries_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queries-actions */ 78060);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);











function QueriesActionsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QueriesActionsComponent_Conditional_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.params.do(ctx_r2.actions.Metadata, ctx_r2.item));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " local_offer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matBadge", ctx_r2.item.Metadata == null ? null : ctx_r2.item.Metadata.length)("matBadgeHidden", !(ctx_r2.item.Metadata == null ? null : ctx_r2.item.Metadata.length));
  }
}
function QueriesActionsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " local_offer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matBadge", ctx_r2.item.Metadata == null ? null : ctx_r2.item.Metadata.length)("matBadgeHidden", !(ctx_r2.item.Metadata == null ? null : ctx_r2.item.Metadata.length));
  }
}
function QueriesActionsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QueriesActionsComponent_Conditional_6_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.params.do(ctx_r2.actions.Permissions, ctx_r2.item));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " person ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matBadge", ctx_r2.item._Permissions.Count)("matBadgeHidden", !ctx_r2.item._Permissions.Count);
  }
}
function QueriesActionsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " person ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matBadge", ctx_r2.item._Permissions.Count)("matBadgeHidden", !ctx_r2.item._Permissions.Count);
  }
}
function QueriesActionsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QueriesActionsComponent_ng_template_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.params.do(ctx_r2.actions.Rest, ctx_r2.item));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "REST API");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QueriesActionsComponent_ng_template_13_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.params.do(ctx_r2.actions.Clone, ctx_r2.item));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "file_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QueriesActionsComponent_ng_template_13_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.params.do(ctx_r2.actions.Export, ctx_r2.item));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Export");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QueriesActionsComponent_ng_template_13_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.params.do(ctx_r2.actions.Delete, ctx_r2.item));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.item._EditInfo.DisableDelete);
  }
}
class QueriesActionsComponent extends _ag_actions__WEBPACK_IMPORTED_MODULE_0__.AgActionsComponent {
  constructor() {
    super(...arguments);
    this.actions = _queries_actions__WEBPACK_IMPORTED_MODULE_1__.QueryActions;
  }
  agInit(params) {
    super.agInit(params);
    this.enablePermissions = this.params.getEnablePermissions();
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵQueriesActionsComponent_BaseFactory;
      return function QueriesActionsComponent_Factory(__ngFactoryType__) {
        return (ɵQueriesActionsComponent_BaseFactory || (ɵQueriesActionsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](QueriesActionsComponent)))(__ngFactoryType__ || QueriesActionsComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: QueriesActionsComponent,
      selectors: [["app-queries-actions"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 5,
      consts: [["menu", "matMenu"], [1, "actions-component"], ["matRipple", "", "tippy", "Edit", 1, "eav-grid-action-button", "highlight", 3, "click"], ["matRipple", "", "tippy", "Metadata", 1, "eav-grid-action-button", "highlight"], [1, "eav-grid-action-button", "disabled"], ["matRipple", "", "tippy", "Permissions", 1, "eav-grid-action-button", "highlight"], ["matRipple", "", "tippy", "More", 1, "eav-grid-action-button", "highlight", 3, "matMenuTriggerFor"], [1, "grid-more-menu"], ["matMenuContent", ""], ["matRipple", "", "tippy", "Metadata", 1, "eav-grid-action-button", "highlight", 3, "click"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgePosition", "below after", "aria-hidden", "false", 3, "matBadge", "matBadgeHidden"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgeDisabled", "true", "matBadgePosition", "below after", "aria-hidden", "false", 3, "matBadge", "matBadgeHidden"], ["matRipple", "", "tippy", "Permissions", 1, "eav-grid-action-button", "highlight", 3, "click"], ["mat-menu-item", "", 3, "click"], ["svgIcon", "code-curly"], ["mat-menu-item", "", 3, "click", "disabled"]],
      template: function QueriesActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QueriesActionsComponent_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.params.do(ctx.actions.Edit, ctx.item));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "edit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, QueriesActionsComponent_Conditional_4_Template, 3, 2, "div", 3)(5, QueriesActionsComponent_Conditional_5_Template, 3, 2, "div", 4)(6, QueriesActionsComponent_Conditional_6_Template, 3, 2, "div", 5)(7, QueriesActionsComponent_Conditional_7_Template, 3, 2, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "more_horiz");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-menu", 7, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, QueriesActionsComponent_ng_template_13_Template, 19, 1, "ng-template", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const menu_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](!ctx.item._EditInfo.DisableMetadata ? 4 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.item._EditInfo.DisableMetadata ? 5 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](!ctx.item._EditInfo.DisableEdit && ctx.enablePermissions ? 6 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.item._EditInfo.DisableEdit || !ctx.enablePermissions ? 7 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", menu_r6);
        }
      },
      dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadge, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuTrigger],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 78060:
/*!***********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/queries/queries-actions/queries-actions.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryActions: () => (/* binding */ QueryActions)
/* harmony export */ });
// Test 2dm 2020-11-20 - I believe the current model has way too much ceremony
// I need to change ca. 10 places just to get one more action to work
// that's not great
var QueryActions;
(function (QueryActions) {
  QueryActions[QueryActions["Edit"] = 0] = "Edit";
  QueryActions[QueryActions["Metadata"] = 1] = "Metadata";
  QueryActions[QueryActions["Rest"] = 2] = "Rest";
  QueryActions[QueryActions["Clone"] = 3] = "Clone";
  QueryActions[QueryActions["Permissions"] = 4] = "Permissions";
  QueryActions[QueryActions["Export"] = 5] = "Export";
  QueryActions[QueryActions["Delete"] = 6] = "Delete";
})(QueryActions || (QueryActions = {}));

/***/ }),

/***/ 83242:
/*!*********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/queries/queries.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueriesComponent: () => (/* binding */ QueriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _content_export_services_content_export_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../content-export/services/content-export.service */ 56360);
/* harmony import */ var _dev_rest_go_to_dev_rest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dev-rest/go-to-dev-rest */ 10261);
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../metadata */ 65217);
/* harmony import */ var _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../permissions/go-to-permissions */ 72437);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/directives/drag-and-drop.directive */ 34575);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/models/edit-form.model */ 70334);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/routing/dialog-routing.service */ 60852);
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/services/dialog.service */ 52785);
/* harmony import */ var _shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/signals/signal.utilities */ 67993);
/* harmony import */ var _services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/dialog-config-app.service */ 64699);
/* harmony import */ var _services_pipelines_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/pipelines.service */ 74079);
/* harmony import */ var _queries_actions_queries_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./queries-actions/queries-actions */ 78060);
/* harmony import */ var _queries_actions_queries_actions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./queries-actions/queries-actions.component */ 79693);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);





























class QueriesComponent {
  #pipelineSvc;
  #contentExportSvc;
  #dialogSvc;
  #dialogRouter;
  #dialogConfigSvc;
  constructor(snackBar) {
    this.snackBar = snackBar;
    this.#pipelineSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_pipelines_service__WEBPACK_IMPORTED_MODULE_16__.PipelinesService);
    this.#contentExportSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_content_export_services_content_export_service__WEBPACK_IMPORTED_MODULE_1__.ContentExportService);
    this.#dialogSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_13__.DialogService);
    this.#dialogRouter = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_12__.DialogRoutingService);
    this.#dialogConfigSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_15__.DialogConfigAppService);
    this.gridOptions = this.buildGridOptions();
    this.queries = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_14__.signalObj)('queries', []);
  }
  ngOnInit() {
    this.#fetchQueries();
    this.#dialogRouter.doOnDialogClosed(() => this.#fetchQueries());
    this.#dialogConfigSvc.getCurrent$().subscribe(settings => {
      this.enablePermissions = settings.Context.Enable.AppPermissions;
    });
  }
  #fetchQueries() {
    this.#pipelineSvc.getAll(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.contentTypes.query).subscribe(queries => this.queries.set(queries));
  }
  importQuery(files) {
    const dialogData = {
      files
    };
    this.#dialogRouter.navParentFirstChild(['import'], {
      state: dialogData
    });
  }
  /**
   * Experiment by 2dm 2020-11-20 - trying to reduce the ceremony around menus
   * Once this works, we would then remove all the 3-line functions below, as they
   * would just be added here (if that's the only place they are used)
   */
  doMenuAction(action, query) {
    switch (action) {
      case _queries_actions_queries_actions__WEBPACK_IMPORTED_MODULE_17__.QueryActions.Edit:
        return this.editQuery(query);
      case _queries_actions_queries_actions__WEBPACK_IMPORTED_MODULE_17__.QueryActions.Metadata:
        return this.openMetadata(query);
      case _queries_actions_queries_actions__WEBPACK_IMPORTED_MODULE_17__.QueryActions.Rest:
        return this.#dialogRouter.navParentFirstChild([_dev_rest_go_to_dev_rest__WEBPACK_IMPORTED_MODULE_2__.GoToDevRest.getUrlQueryInAdmin(query.Guid)]);
      case _queries_actions_queries_actions__WEBPACK_IMPORTED_MODULE_17__.QueryActions.Clone:
        return this.cloneQuery(query);
      case _queries_actions_queries_actions__WEBPACK_IMPORTED_MODULE_17__.QueryActions.Permissions:
        return this.openPermissions(query);
      case _queries_actions_queries_actions__WEBPACK_IMPORTED_MODULE_17__.QueryActions.Export:
        return this.exportQuery(query);
      case _queries_actions_queries_actions__WEBPACK_IMPORTED_MODULE_17__.QueryActions.Delete:
        return this.deleteQuery(query);
    }
  }
  editQuery(query) {
    const form = {
      items: [query == null ? _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_10__.EditPrep.newFromType(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.contentTypes.query, {
        TestParameters: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.pipelineDesigner.testParameters
      }) : _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_10__.EditPrep.editId(query.Id)]
    };
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_9__.convertFormToUrl)(form);
    this.#dialogRouter.navParentFirstChild([`edit/${formUrl}`]);
  }
  openVisualQueryDesigner(query) {
    if (query._EditInfo.ReadOnly) return;
    this.#dialogSvc.openQueryDesigner(query.Id);
  }
  openMetadata(query) {
    const url = _metadata__WEBPACK_IMPORTED_MODULE_3__.GoToMetadata.getUrlEntity(query.Guid, `Metadata for Query: ${query.Name} (${query.Id})`);
    this.#dialogRouter.navParentFirstChild([url]);
  }
  cloneQuery(query) {
    this.snackBar.open('Copying...');
    this.#pipelineSvc.clonePipeline(query.Id).subscribe(() => {
      this.snackBar.open('Copied', null, {
        duration: 2000
      });
      this.#fetchQueries();
    });
  }
  openPermissions(query) {
    this.#dialogRouter.navParentFirstChild([_permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_4__.GoToPermissions.getUrlEntity(query.Guid)]);
  }
  exportQuery(query) {
    this.#contentExportSvc.exportEntity(query.Id, 'Query', true);
  }
  deleteQuery(query) {
    if (!confirm(`Delete Pipeline '${query.Name}' (${query.Id})?`)) return;
    this.snackBar.open('Deleting...');
    this.#pipelineSvc.delete(query.Id).subscribe(res => {
      this.snackBar.open('Deleted', null, {
        duration: 2000
      });
      this.#fetchQueries();
    });
  }
  buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_6__.defaultGridOptions,
      columnDefs: [{
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_5__.ColumnDefinitions.IdWithDefaultRenderer,
        cellClass: p => {
          return `id-action no-padding no-outline ${p.data._EditInfo.ReadOnly ? 'disabled' : ''}`.split(' ');
        },
        cellRendererParams: _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_5__.ColumnDefinitions.idFieldParamsTooltipGetter()
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_5__.ColumnDefinitions.TextWide,
        field: 'Name',
        sort: 'asc',
        cellClass: p => {
          const query = p.data;
          return `${query._EditInfo.DisableEdit ? 'no-outline' : 'primary-action highlight'}`.split(' ');
        },
        onCellClicked: p => {
          const query = p.data;
          this.openVisualQueryDesigner(query);
        }
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_5__.ColumnDefinitions.TextWideFlex3,
        field: 'Description'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_5__.ColumnDefinitions.ActionsPinnedRight4,
        cellRenderer: _queries_actions_queries_actions_component__WEBPACK_IMPORTED_MODULE_18__.QueriesActionsComponent,
        cellRendererParams: (() => {
          const params = {
            getEnablePermissions: () => this.enablePermissions,
            do: (action, query) => this.doMenuAction(action, query)
          };
          return params;
        })()
      }]
    };
    return gridOptions;
  }
  static {
    this.ɵfac = function QueriesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || QueriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
      type: QueriesComponent,
      selectors: [["app-queries"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 3,
      consts: [[1, "grid-wrapper", "mat-tab-grid-wrapper"], ["appDragAndDrop", "", 1, "ag-theme-material", 3, "filesDropped", "rowData", "gridOptions", "allowedFileTypes"], [1, "eav-dialog-actions"], ["mat-button", "", "tippy", "Import query", 1, "eav-button__with-icon", 3, "click"], [1, "eav-icon"], ["mat-fab", "", "mat-elevation-z24", "", "tippy", "Create a new query", 1, "grid-fab", 3, "click"]],
      template: function QueriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "ag-grid-angular", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("filesDropped", function QueriesComponent_Template_ag_grid_angular_filesDropped_1_listener($event) {
            return ctx.importQuery($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "mat-dialog-actions", 2)(3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function QueriesComponent_Template_button_click_3_listener() {
            return ctx.importQuery();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "cloud_upload");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7, "Query");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function QueriesComponent_Template_button_click_8_listener() {
            return ctx.editQuery(null);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](11, "router-outlet");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("rowData", ctx.queries())("gridOptions", ctx.gridOptions)("allowedFileTypes", "json");
        }
      },
      dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterOutlet, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_11__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_25__.AgGridAngular, _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_8__.DragAndDropDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 74079:
/*!**********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/services/pipelines.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PipelinesService: () => (/* binding */ PipelinesService),
/* harmony export */   webApiQueryDataSources: () => (/* binding */ webApiQueryDataSources),
/* harmony export */   webApiQueryDebugStream: () => (/* binding */ webApiQueryDebugStream),
/* harmony export */   webApiQueryGet: () => (/* binding */ webApiQueryGet),
/* harmony export */   webApiQueryRun: () => (/* binding */ webApiQueryRun),
/* harmony export */   webApiQuerySave: () => (/* binding */ webApiQuerySave)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 95429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/helpers/file-to-base64.helper */ 70693);
/* harmony import */ var _shared_services_entity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/entity.service */ 9234);
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);





const webApiQueryImport = 'admin/query/import';
const webApiQueryClone = 'admin/query/Clone';
const webApiQueryDelete = 'admin/query/Delete';
const webApiQueryRun = 'admin/query/Run';
const webApiQueryDebugStream = 'admin/query/DebugStream';
const webApiQuerySave = 'admin/query/Save';
const webApiQueryGet = 'admin/query/Get';
const webApiQueryDataSources = 'admin/query/DataSources';
class PipelinesService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_2__.HttpServiceBase {
  getAll(contentType) {
    return this.getHttpApiUrl(_shared_services_entity_service__WEBPACK_IMPORTED_MODULE_1__.webApiEntityList, {
      params: {
        appId: this.appId,
        contentType
      }
    });
  }
  importQuery(file) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)((0,_shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_0__.toBase64)(file)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(fileBase64 => {
      return this.http.post(this.apiUrl(webApiQueryImport), {
        AppId: this.appId,
        ContentBase64: fileBase64
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(success => {
      const result = {
        Success: success,
        Messages: []
      };
      return result;
    }));
  }
  clonePipeline(id) {
    return this.getHttpApiUrl(webApiQueryClone, {
      params: {
        Id: id.toString(),
        appId: this.appId
      }
    });
  }
  delete(id) {
    return this.http.delete(this.apiUrl(webApiQueryDelete), {
      params: {
        appId: this.appId,
        Id: id.toString()
      }
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵPipelinesService_BaseFactory;
      return function PipelinesService_Factory(__ngFactoryType__) {
        return (ɵPipelinesService_BaseFactory || (ɵPipelinesService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](PipelinesService)))(__ngFactoryType__ || PipelinesService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: PipelinesService,
      factory: PipelinesService.ɵfac
    });
  }
}

/***/ }),

/***/ 70693:
/*!*************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/helpers/file-to-base64.helper.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toBase64: () => (/* binding */ toBase64),
/* harmony export */   toString: () => (/* binding */ toString)
/* harmony export */ });
function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result.split(',')[1]);
    };
    reader.onerror = error => {
      reject(error);
    };
  });
}
function toString(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = error => {
      reject(error);
    };
  });
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_queries_queries_component_ts.js.map