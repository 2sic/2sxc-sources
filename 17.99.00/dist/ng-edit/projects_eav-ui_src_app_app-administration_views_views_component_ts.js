"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_views_views_component_ts"],{

/***/ 14455:
/*!***************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/views/views-actions/views-actions.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewsActionsComponent: () => (/* binding */ ViewsActionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _admin_shared_lightspeed_action_lightspeed_action_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../admin-shared/lightspeed-action/lightspeed-action.component */ 41657);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);










function ViewsActionsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewsActionsComponent_Conditional_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.do("openCode"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ViewsActionsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ViewsActionsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewsActionsComponent_Conditional_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.do("openMetadata"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " local_offer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matBadge", ctx_r1.view.Metadata.length)("matBadgeHidden", !ctx_r1.view.Metadata.length);
  }
}
function ViewsActionsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " local_offer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matBadge", ctx_r1.view.Metadata.length)("matBadgeHidden", !ctx_r1.view.Metadata.length);
  }
}
function ViewsActionsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewsActionsComponent_Conditional_5_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.do("openPermissions"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " person ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matBadge", ctx_r1.view.Permissions.Count)("matBadgeHidden", !ctx_r1.view.Permissions.Count);
  }
}
function ViewsActionsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " person ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matBadge", ctx_r1.view.Permissions.Count)("matBadgeHidden", !ctx_r1.view.Permissions.Count);
  }
}
function ViewsActionsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewsActionsComponent_ng_template_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.do("cloneView"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "file_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewsActionsComponent_ng_template_13_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.do("exportView"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Export");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewsActionsComponent_ng_template_13_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.do("deleteView"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.view.EditInfo.DisableDelete);
  }
}
class ViewsActionsComponent {
  agInit(params) {
    this.params = params;
    this.view = this.params.data;
    this.enableCode = this.params.enableCodeGetter();
    this.enablePermissions = this.params.enablePermissionsGetter();
  }
  refresh(params) {
    return true;
  }
  do(verb) {
    this.params.do(verb, this.view);
  }
  static #_ = this.ɵfac = function ViewsActionsComponent_Factory(t) {
    return new (t || ViewsActionsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ViewsActionsComponent,
    selectors: [["app-views-actions"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 14,
    vars: 7,
    consts: [["menu", "matMenu"], [1, "actions-component"], ["matRipple", "", "tippy", "Code", 1, "eav-grid-action-button", "highlight"], ["matRipple", "", "tippy", "Metadata", 1, "eav-grid-action-button", "highlight"], ["matRipple", "", "tippy", "Permissions", 1, "eav-grid-action-button", "highlight"], [3, "lightSpeedOwner", "params", "lightSpeed"], ["matRipple", "", "tippy", "More", 1, "eav-grid-action-button", "highlight", 3, "matMenuTriggerFor"], [1, "grid-more-menu"], ["matMenuContent", ""], ["matRipple", "", "tippy", "Code", 1, "eav-grid-action-button", "highlight", 3, "click"], [1, "eav-grid-action-button", "disabled"], ["matRipple", "", "tippy", "Metadata", 1, "eav-grid-action-button", "highlight", 3, "click"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgePosition", "below after", "aria-hidden", "false", 3, "matBadge", "matBadgeHidden"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgeDisabled", "true", "matBadgePosition", "below after", "aria-hidden", "false", 3, "matBadge", "matBadgeHidden"], ["matRipple", "", "tippy", "Permissions", 1, "eav-grid-action-button", "highlight", 3, "click"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "click", "disabled"]],
    template: function ViewsActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ViewsActionsComponent_Conditional_1_Template, 3, 0, "div", 2)(2, ViewsActionsComponent_Conditional_2_Template, 3, 0)(3, ViewsActionsComponent_Conditional_3_Template, 3, 2, "div", 3)(4, ViewsActionsComponent_Conditional_4_Template, 3, 2)(5, ViewsActionsComponent_Conditional_5_Template, 3, 2, "div", 4)(6, ViewsActionsComponent_Conditional_6_Template, 3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-lightspeed-action", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "more_horiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-menu", 7, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ViewsActionsComponent_ng_template_13_Template, 15, 1, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const menu_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, !ctx.view.EditInfo.DisableEdit && ctx.enableCode ? 1 : 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](3, !ctx.view.EditInfo.DisableMetadata ? 3 : 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](5, !ctx.view.EditInfo.DisableEdit && ctx.enablePermissions ? 5 : 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lightSpeedOwner", ctx.view)("params", ctx.params)("lightSpeed", ctx.view.lightSpeed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", menu_r6);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__.MatBadge, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuTrigger, _admin_shared_lightspeed_action_lightspeed_action_component__WEBPACK_IMPORTED_MODULE_0__.LightSpeedActionsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 22237:
/*!*********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/views/views-show/views-show.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewsShowComponent: () => (/* binding */ ViewsShowComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);



class ViewsShowComponent {
  agInit(params) {
    this.value = params.value;
  }
  refresh(params) {
    return true;
  }
  static #_ = this.ɵfac = function ViewsShowComponent_Factory(t) {
    return new (t || ViewsShowComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ViewsShowComponent,
    selectors: [["app-views-show"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 1,
    consts: [[1, "icon-container"]],
    template: function ViewsShowComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value ? "visibility" : "visibility_off");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 63191:
/*!*********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/views/views-type/views-type.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewsTypeComponent: () => (/* binding */ ViewsTypeComponent)
/* harmony export */ });
/* harmony import */ var _views_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views.helpers */ 14704);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





function ViewsTypeComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "share");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class ViewsTypeComponent {
  agInit(params) {
    this.value = params.value;
    const view = params.data;
    const type = (0,_views_helpers__WEBPACK_IMPORTED_MODULE_0__.calculateViewType)(view);
    this.icon = type.icon;
    this.isShared = view.IsShared;
  }
  refresh(params) {
    return true;
  }
  static #_ = this.ɵfac = function ViewsTypeComponent_Factory(t) {
    return new (t || ViewsTypeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ViewsTypeComponent,
    selectors: [["app-views-type"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 3,
    consts: [[1, "icon-container"], [1, "eav-grid-action-button", "icon", 3, "tippy"], ["tippy", "View is shared", 1, "eav-grid-action-button", "icon"]],
    template: function ViewsTypeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ViewsTypeComponent_Conditional_4_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tippy", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](4, ctx.isShared ? 4 : -1);
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__.TippyDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 16278:
/*!*****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/views/views.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewsComponent: () => (/* binding */ ViewsComponent)
/* harmony export */ });
/* harmony import */ var _url_loader_polymorph_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !url-loader!./polymorph-logo.png */ 4200);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../metadata */ 65217);
/* harmony import */ var _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../permissions/go-to-permissions */ 72437);
/* harmony import */ var _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/base-with-child-dialog.component */ 61735);
/* harmony import */ var _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/id-field/id-field.component */ 36378);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/dialog.service */ 52785);
/* harmony import */ var _services_views_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/views.service */ 2570);
/* harmony import */ var _views_actions_views_actions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views-actions/views-actions.component */ 14455);
/* harmony import */ var _views_show_views_show_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views-show/views-show.component */ 22237);
/* harmony import */ var _views_type_views_type_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views-type/views-type.component */ 63191);
/* harmony import */ var _views_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views.helpers */ 14704);
/* harmony import */ var _services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/app-dialog-config.service */ 22743);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _features_shared_base_feature_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../features/shared/base-feature.component */ 9006);
/* harmony import */ var _features_feature_names__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../features/feature-names */ 28136);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/directives/drag-and-drop.directive */ 34575);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../core */ 34447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);






































function ViewsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 0)(1, "ag-grid-angular", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("filesDropped", function ViewsComponent_Conditional_0_Template_ag_grid_angular_filesDropped_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.importView($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "mat-dialog-actions", 2)(3, "div", 3)(4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ViewsComponent_Conditional_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.editPolymorphisms());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](6, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ViewsComponent_Conditional_0_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.importView());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ViewsComponent_Conditional_0_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.editView(null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const vm_r3 = ctx;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("rowData", vm_r3.views)("gridOptions", ctx_r1.gridOptions)("allowedFileTypes", "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx_r1.appIsInherited);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("src", ctx_r1.polymorphLogo, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("Polymorphism ", vm_r3.polymorphStatus, "");
  }
}
class ViewsComponent extends _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_3__.BaseWithChildDialogComponent {
  constructor(router, route, snackBar, dialogConfigSvc,
  // For Lightspeed buttons - new 17.10 - may need to merge better w/code changes 2dg
  dialog, viewContainerRef, changeDetectorRef) {
    super(router, route);
    this.router = router;
    this.route = route;
    this.snackBar = snackBar;
    this.dialogConfigSvc = dialogConfigSvc;
    this.dialog = dialog;
    this.viewContainerRef = viewContainerRef;
    this.changeDetectorRef = changeDetectorRef;
    this.dialogService = (0,_core__WEBPACK_IMPORTED_MODULE_20__.transient)(_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__.DialogService);
    this.views$ = new rxjs__WEBPACK_IMPORTED_MODULE_22__.BehaviorSubject(undefined);
    this.polymorphStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_22__.BehaviorSubject(undefined);
    this.polymorphLogo = _url_loader_polymorph_logo_png__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.gridOptions = this.buildGridOptions();
    this.viewsService = (0,_core__WEBPACK_IMPORTED_MODULE_20__.transient)(_services_views_service__WEBPACK_IMPORTED_MODULE_9__.ViewsService);
  }
  ngOnInit() {
    this.fetchTemplates();
    this.fetchPolymorphism();
    this.subscriptions.add(this.childDialogClosed$().subscribe(() => {
      this.fetchTemplates();
      this.fetchPolymorphism();
    }));
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.combineLatest)([this.views$, this.polymorphStatus$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_24__.map)(([views, polymorphStatus]) => ({
      views,
      polymorphStatus
    })));
    this.dialogConfigSvc.getCurrent$().subscribe(data => {
      var ctx = data.Context;
      this.enableCode = ctx.Enable.CodeEditor;
      this.enablePermissions = ctx.Enable.AppPermissions;
      this.appIsGlobal = ctx.App.IsShared;
      this.appIsInherited = ctx.App.IsInherited;
    });
  }
  ngOnDestroy() {
    this.views$.complete();
    this.polymorphStatus$.complete();
    super.ngOnDestroy();
  }
  importView(files) {
    const dialogData = {
      files
    };
    this.router.navigate(['import'], {
      relativeTo: this.route.parent.firstChild,
      state: dialogData
    });
  }
  fetchTemplates() {
    this.viewsService.getAll().subscribe(views => {
      this.views$.next(views);
    });
  }
  fetchPolymorphism() {
    this.viewsService.getPolymorphism().subscribe(polymorphism => {
      this.polymorphism = polymorphism;
      const polymorphStatus = polymorphism.Id === null ? 'not configured' : polymorphism.Resolver === null ? 'disabled' : 'using ' + polymorphism.Resolver;
      this.polymorphStatus$.next(polymorphStatus);
    });
  }
  editView(view) {
    const form = {
      items: [view == null ? {
        ContentTypeName: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__.eavConstants.contentTypes.template,
        Prefill: {
          ...(this.appIsGlobal && {
            Location: 'Global'
          })
        }
      } : {
        EntityId: view.Id
      }]
    };
    this.openEdit(form);
  }
  openEdit(form) {
    this.openChildDialog(`edit/${(0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_7__.convertFormToUrl)(form)}`);
  }
  openChildDialog(subPath) {
    this.router.navigate([subPath], {
      relativeTo: this.route.parent.firstChild
    });
  }
  editPolymorphisms() {
    if (!this.polymorphism) {
      return;
    }
    const form = {
      items: [!this.polymorphism.Id ? {
        ContentTypeName: this.polymorphism.TypeName
      } : {
        EntityId: this.polymorphism.Id
      }]
    };
    this.openEdit(form);
  }
  enableCodeGetter() {
    return this.enableCode;
  }
  enablePermissionsGetter() {
    return this.enablePermissions;
  }
  openUsage(view) {
    this.openChildDialog(`usage/${view.Guid}`);
  }
  openCode(view) {
    this.dialogService.openCodeFile(view.TemplatePath, view.IsShared, view.Id);
  }
  openPermissions(view) {
    this.openChildDialog(_permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_2__.GoToPermissions.getUrlEntity(view.Guid));
  }
  openMetadata(view) {
    const url = _metadata__WEBPACK_IMPORTED_MODULE_1__.GoToMetadata.getUrlEntity(view.Guid, `Metadata for View: ${view.Name} (${view.Id})`);
    this.openChildDialog(url);
  }
  cloneView(view) {
    const form = {
      items: [{
        ContentTypeName: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__.eavConstants.contentTypes.template,
        DuplicateEntity: view.Id
      }]
    };
    this.openEdit(form);
  }
  exportView(view) {
    this.viewsService.export(view.Id);
  }
  deleteView(view) {
    if (!confirm(`Delete '${view.Name}' (${view.Id})?`)) {
      return;
    }
    this.snackBar.open('Deleting...');
    this.viewsService.delete(view.Id).subscribe(res => {
      this.snackBar.open('Deleted', null, {
        duration: 2000
      });
      this.fetchTemplates();
    });
  }
  openLightSpeed(view) {
    const shared = {
      ClientData: {
        parameters: {
          forView: true,
          showDuration: false
        }
      }
    };
    const form = {
      items: [view.lightSpeed != null ? {
        ...shared,
        EntityId: view.lightSpeed.Id
      } : {
        ...shared,
        ContentTypeName: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__.eavConstants.appMetadata.LightSpeed.ContentTypeName,
        For: {
          Target: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__.eavConstants.metadata.entity.target,
          TargetType: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__.eavConstants.metadata.entity.targetType,
          Guid: view.Guid
        }
      }]
    };
    this.openEdit(form);
  }
  buildGridOptions() {
    // TODO: we should use this simpler pattern for column definitions everywhere
    // ColumnDefinitions.TextWide
    // ColumnDefinitions.TextNarrow
    function showItemDetails(viewEntity) {
      return viewEntity.DemoId == 0 ? "" : `${viewEntity.DemoId} ${viewEntity.DemoTitle}`;
    }
    // Helper function for actions in the table below
    const openLightSpeedFeatInfo = () => (0,_features_shared_base_feature_component__WEBPACK_IMPORTED_MODULE_16__.openFeatureDialog)(this.dialog, _features_feature_names__WEBPACK_IMPORTED_MODULE_17__.FeatureNames.LightSpeed, this.viewContainerRef, this.changeDetectorRef);
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_5__.defaultGridOptions,
      columnDefs: [{
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_15__.ColumnDefinitions.Id,
        cellClass: params => {
          const view = params.data;
          return `id-action no-padding no-outline ${view.EditInfo.ReadOnly ? 'disabled' : ''}`.split(' ');
        },
        cellRenderer: _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_4__.IdFieldComponent,
        cellRendererParams: (() => {
          const params = {
            tooltipGetter: view => `ID: ${view.Id}\nGUID: ${view.Guid}`
          };
          return params;
        })()
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_15__.ColumnDefinitions.IconShow,
        valueGetter: params => !params.data.IsHidden,
        cellRenderer: _views_show_views_show_component__WEBPACK_IMPORTED_MODULE_11__.ViewsShowComponent
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_15__.ColumnDefinitions.TextWide,
        field: 'Name',
        cellClass: 'primary-action highlight'.split(' '),
        sort: 'asc',
        onCellClicked: params => {
          const view = params.data;
          this.editView(view);
        }
      }, {
        field: 'Type',
        width: 82,
        headerClass: 'dense',
        cellClass: 'no-padding no-outline'.split(' '),
        sortable: true,
        filter: 'agTextColumnFilter',
        valueGetter: params => (0,_views_helpers__WEBPACK_IMPORTED_MODULE_13__.calculateViewType)(params.data).value,
        cellRenderer: _views_type_views_type_component__WEBPACK_IMPORTED_MODULE_12__.ViewsTypeComponent
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_15__.ColumnDefinitions.Number,
        field: 'Used',
        onCellClicked: params => this.openUsage(params.data)
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_15__.ColumnDefinitions.TextNarrow,
        headerName: 'Url Key',
        field: 'ViewNameInUrl'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_15__.ColumnDefinitions.TextWide,
        headerName: 'Path',
        field: 'TemplatePath'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_15__.ColumnDefinitions.TextNarrow,
        headerName: 'Content',
        valueGetter: params => params.data.ContentType.Name
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_15__.ColumnDefinitions.TextNarrow,
        headerName: 'Default',
        field: 'ContentDemo',
        valueGetter: params => showItemDetails(params.data.ContentType)
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_15__.ColumnDefinitions.TextNarrow,
        field: 'Presentation',
        valueGetter: params => params.data.PresentationType.Name
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_15__.ColumnDefinitions.TextNarrow,
        headerName: 'Default',
        field: 'PresentationDemo',
        valueGetter: params => showItemDetails(params.data.PresentationType)
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_15__.ColumnDefinitions.TextNarrow,
        field: 'Header',
        valueGetter: params => params.data.ListContentType.Name
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_15__.ColumnDefinitions.TextNarrow,
        headerName: 'Default',
        field: 'HeaderDemo',
        valueGetter: params => showItemDetails(params.data.ListContentType)
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_15__.ColumnDefinitions.TextNarrow,
        headerName: 'Header Pres.',
        field: 'HeaderPresentation',
        valueGetter: params => params.data.ListPresentationType.Name
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_15__.ColumnDefinitions.TextNarrow,
        headerName: 'Default',
        field: 'HeaderPresentationDemo',
        valueGetter: params => showItemDetails(params.data.ListPresentationType)
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_15__.ColumnDefinitions.ActionsPinnedRight5,
        cellRenderer: _views_actions_views_actions_component__WEBPACK_IMPORTED_MODULE_10__.ViewsActionsComponent,
        cellRendererParams: {
          enableCodeGetter: () => this.enableCodeGetter(),
          enablePermissionsGetter: () => this.enablePermissionsGetter(),
          openLightspeedFeatureInfo: () => openLightSpeedFeatInfo(),
          onOpenLightspeed: view => this.openLightSpeed(view),
          do: (verb, view) => {
            switch (verb) {
              case 'openCode':
                this.openCode(view);
                break;
              case 'openPermissions':
                this.openPermissions(view);
                break;
              case 'openMetadata':
                this.openMetadata(view);
                break;
              case 'cloneView':
                this.cloneView(view);
                break;
              case 'exportView':
                this.exportView(view);
                break;
              case 'deleteView':
                this.deleteView(view);
                break;
            }
          }
        }
      }]
    };
    return gridOptions;
  }
  static #_ = this.ɵfac = function ViewsComponent_Factory(t) {
    return new (t || ViewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_14__.AppDialogConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_21__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({
    type: ViewsComponent,
    selectors: [["app-views"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 3,
    consts: [[1, "grid-wrapper", "mat-tab-grid-wrapper"], ["appDragAndDrop", "", 1, "ag-theme-material", 3, "filesDropped", "rowData", "gridOptions", "allowedFileTypes"], [1, "eav-dialog-actions"], [1, "eav-dialog-actions-div"], ["mat-button", "", "tippy", "Configure polymorphism", 1, "eav-polymorph-button", 3, "click", "disabled"], [1, "eav-polymorph-button-span"], [1, "eav-polymorph-logo", 3, "src"], ["mat-button", "", "tippy", "Import view", 1, "eav-button__with-icon", 3, "click"], [1, "eav-icon"], ["mat-fab", "", "mat-elevation-z24", "", "tippy", "Create a new view", 1, "grid-fab", 3, "click"]],
    template: function ViewsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, ViewsComponent_Conditional_0_Template, 17, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "router-outlet");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_30__.AsyncPipe, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_18__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_31__.AgGridAngular, _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_19__.DragAndDropDirective],
    styles: [".eav-dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.eav-dialog-actions[_ngcontent-%COMP%]   .eav-dialog-actions-div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.eav-dialog-actions[_ngcontent-%COMP%]   .eav-button__with-icon[_ngcontent-%COMP%]   .eav-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  height: 24px;\n  width: 24px;\n}\n\n.eav-polymorph-button[_ngcontent-%COMP%]   .eav-polymorph-button-span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.eav-polymorph-logo[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  margin-right: 4px;\n}\n\n.eav-polymorph-button[disabled][_ngcontent-%COMP%]   .eav-polymorph-logo[_ngcontent-%COMP%] {\n  opacity: 33%;\n  filter: grayscale(1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi92aWV3cy92aWV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7QUFDSjtBQUlNO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRlI7O0FBU0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFVQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFQRjs7QUFVQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQVBGIiwic291cmNlc0NvbnRlbnQiOlsiLmVhdi1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIC5lYXYtZGlhbG9nLWFjdGlvbnMtZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAuZWF2LWJ1dHRvbiB7XHJcbiAgICAmX193aXRoLWljb24ge1xyXG4gICAgICAuZWF2LWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5lYXYtcG9seW1vcnBoLWJ1dHRvbiB7XHJcbiAgLmVhdi1wb2x5bW9ycGgtYnV0dG9uLXNwYW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uZWF2LXBvbHltb3JwaC1sb2dvIHtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbi5lYXYtcG9seW1vcnBoLWJ1dHRvbltkaXNhYmxlZF0gLmVhdi1wb2x5bW9ycGgtbG9nbyB7XHJcbiAgb3BhY2l0eTogMzMlO1xyXG4gIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 14704:
/*!***************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/views/views.helpers.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateViewType: () => (/* binding */ calculateViewType)
/* harmony export */ });
function calculateViewType(view) {
  let value = '';
  let icon = '';
  if (view.HasQuery) {
    value = 'Data (from query)';
    icon = 'filter_list';
  } else if (view.List) {
    value = 'Items (list)';
    icon = 'format_list_numbered';
  } else if (!view.ContentType && !view.HasQuery) {
    value = 'Code';
    icon = 'check_box_outline_blank';
  } else if (!view.List) {
    value = 'Item (one)';
    icon = 'looks_one';
  }
  return {
    value,
    icon
  };
}

/***/ }),

/***/ 4200:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./projects/eav-ui/src/app/app-administration/views/polymorph-logo.png ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_views_views_component_ts.js.map