"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_views_views_component_ts"],{

/***/ 2570:
/*!******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/services/views.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewsService: () => (/* binding */ ViewsService)
/* harmony export */ });
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


const webApiViewRoot = 'admin/view/';
const webApiViews = webApiViewRoot + 'all';
const webApiViewDelete = webApiViewRoot + 'delete';
const webApiViewImport = webApiViewRoot + 'import';
const webApiViewPolymorph = webApiViewRoot + 'polymorphism';
const webApiViewUsage = webApiViewRoot + 'usage';
class ViewsService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__.HttpServiceBase {
  getAll() {
    return this.getHttpApiUrl(webApiViews, {
      params: {
        appId: this.appId
      }
    });
  }
  delete(id) {
    return this.getHttpApiUrl(webApiViewDelete, {
      params: {
        appId: this.appId,
        Id: id.toString()
      }
    });
  }
  import(file) {
    const formData = new FormData();
    formData.append('File', file);
    return this.http.post(this.apiUrl(webApiViewImport), formData, {
      params: {
        appId: this.appId,
        zoneId: this.zoneId
      }
    });
  }
  export(id) {
    const url = this.apiUrl(webApiViewRoot + 'json') + '?appId=' + this.appId + '&viewId=' + id;
    window.open(url, '_blank', '');
  }
  getPolymorphism() {
    return this.getHttpApiUrl(webApiViewPolymorph, {
      params: {
        appId: this.appId
      }
    });
  }
  getUsage(guid) {
    return this.getHttpApiUrl(webApiViewUsage, {
      params: {
        appId: this.appId,
        guid
      }
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵViewsService_BaseFactory;
      return function ViewsService_Factory(__ngFactoryType__) {
        return (ɵViewsService_BaseFactory || (ɵViewsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ViewsService)))(__ngFactoryType__ || ViewsService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ViewsService,
      factory: ViewsService.ɵfac
    });
  }
}

/***/ }),

/***/ 14455:
/*!***************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/views/views-actions/views-actions.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewsActionsComponent: () => (/* binding */ ViewsActionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _admin_shared_lightspeed_action_lightspeed_action_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../admin-shared/lightspeed-action/lightspeed-action.component */ 41657);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);










function ViewsActionsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "mat-icon");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "mat-icon", 13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "mat-icon", 13);
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
  static {
    this.ɵfac = function ViewsActionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ViewsActionsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ViewsActionsComponent,
      selectors: [["app-views-actions"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 7,
      consts: [["menu", "matMenu"], [1, "actions-component"], ["matRipple", "", "tippy", "Code", 1, "eav-grid-action-button", "highlight"], [1, "eav-grid-action-button", "disabled"], ["matRipple", "", "tippy", "Metadata", 1, "eav-grid-action-button", "highlight"], ["matRipple", "", "tippy", "Permissions", 1, "eav-grid-action-button", "highlight"], [3, "lightSpeedOwner", "params", "lightSpeed"], ["matRipple", "", "tippy", "More", 1, "eav-grid-action-button", "highlight", 3, "matMenuTriggerFor"], [1, "grid-more-menu"], ["matMenuContent", ""], ["matRipple", "", "tippy", "Code", 1, "eav-grid-action-button", "highlight", 3, "click"], ["matRipple", "", "tippy", "Metadata", 1, "eav-grid-action-button", "highlight", 3, "click"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgePosition", "below after", "aria-hidden", "false", 3, "matBadge", "matBadgeHidden"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgeDisabled", "true", "matBadgePosition", "below after", "aria-hidden", "false", 3, "matBadge", "matBadgeHidden"], ["matRipple", "", "tippy", "Permissions", 1, "eav-grid-action-button", "highlight", 3, "click"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "click", "disabled"]],
      template: function ViewsActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ViewsActionsComponent_Conditional_1_Template, 3, 0, "div", 2)(2, ViewsActionsComponent_Conditional_2_Template, 3, 0, "div", 3)(3, ViewsActionsComponent_Conditional_3_Template, 3, 2, "div", 4)(4, ViewsActionsComponent_Conditional_4_Template, 3, 2, "div", 3)(5, ViewsActionsComponent_Conditional_5_Template, 3, 2, "div", 5)(6, ViewsActionsComponent_Conditional_6_Template, 3, 2, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-lightspeed-action", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "more_horiz");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-menu", 8, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ViewsActionsComponent_ng_template_13_Template, 15, 1, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const menu_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](!ctx.view.EditInfo.DisableEdit && ctx.enableCode ? 1 : 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](!ctx.view.EditInfo.DisableMetadata ? 3 : 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](!ctx.view.EditInfo.DisableEdit && ctx.enablePermissions ? 5 : 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lightSpeedOwner", ctx.view)("params", ctx.params)("lightSpeed", ctx.view.lightSpeed);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", menu_r6);
        }
      },
      dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__.MatBadge, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuTrigger, _admin_shared_lightspeed_action_lightspeed_action_component__WEBPACK_IMPORTED_MODULE_0__.LightSpeedActionsComponent],
      encapsulation: 2
    });
  }
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
  static {
    this.ɵfac = function ViewsShowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ViewsShowComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
      encapsulation: 2
    });
  }
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
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _views_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views.helpers */ 14704);
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
    const type = (0,_views_helpers__WEBPACK_IMPORTED_MODULE_1__.calculateViewType)(view);
    this.icon = type.icon;
    this.isShared = view.IsShared;
  }
  refresh(params) {
    return true;
  }
  static {
    this.ɵfac = function ViewsTypeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ViewsTypeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.isShared ? 4 : -1);
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
      encapsulation: 2
    });
  }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _features_feature_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/feature-names */ 28136);
/* harmony import */ var _features_shared_base_feature_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/shared/base-feature.component */ 9006);
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../metadata */ 65217);
/* harmony import */ var _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../permissions/go-to-permissions */ 72437);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/directives/drag-and-drop.directive */ 34575);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/models/edit-form.model */ 70334);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/routing/dialog-routing.service */ 60852);
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/services/dialog.service */ 52785);
/* harmony import */ var _services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/dialog-config-app.service */ 64699);
/* harmony import */ var _services_views_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/views.service */ 2570);
/* harmony import */ var _views_actions_views_actions_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views-actions/views-actions.component */ 14455);
/* harmony import */ var _views_show_views_show_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views-show/views-show.component */ 22237);
/* harmony import */ var _views_type_views_type_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views-type/views-type.component */ 63191);
/* harmony import */ var _views_helpers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views.helpers */ 14704);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);

































class ViewsComponent {
  #dialogSvc;
  #polymorphism;
  #viewsSvc;
  #dialogConfigSvc;
  #dialogRouter;
  constructor(snackBar,
  // For Lightspeed buttons - new 17.10 - may need to merge better w/code changes 2dg
  matDialog, viewContainerRef, changeDetectorRef) {
    this.snackBar = snackBar;
    this.matDialog = matDialog;
    this.viewContainerRef = viewContainerRef;
    this.changeDetectorRef = changeDetectorRef;
    this.#dialogSvc = (0,_core__WEBPACK_IMPORTED_MODULE_1__.transient)(_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_14__.DialogService);
    this.views = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.signal)(undefined);
    this.polymorphStatus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.signal)(undefined);
    this.polymorphLogo = _url_loader_polymorph_logo_png__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.gridOptions = this.buildGridOptions();
    this.#viewsSvc = (0,_core__WEBPACK_IMPORTED_MODULE_1__.transient)(_services_views_service__WEBPACK_IMPORTED_MODULE_16__.ViewsService);
    this.#dialogConfigSvc = (0,_core__WEBPACK_IMPORTED_MODULE_1__.transient)(_services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_15__.DialogConfigAppService);
    this.#dialogRouter = (0,_core__WEBPACK_IMPORTED_MODULE_1__.transient)(_shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_13__.DialogRoutingService);
  }
  ngOnInit() {
    this.fetchTemplates();
    this.fetchPolymorphism();
    this.#dialogRouter.doOnDialogClosed(() => {
      this.fetchTemplates();
      this.fetchPolymorphism();
    });
    this.#dialogConfigSvc.getCurrent$().subscribe(data => {
      var ctx = data.Context;
      this.enableCode = ctx.Enable.CodeEditor;
      this.enablePermissions = ctx.Enable.AppPermissions;
      this.appIsGlobal = ctx.App.IsShared;
      this.appIsInherited = ctx.App.IsInherited;
    });
  }
  importView(files) {
    const dialogData = {
      files
    };
    this.#dialogRouter.navParentFirstChild(['import'], {
      state: dialogData
    });
  }
  fetchTemplates() {
    this.#viewsSvc.getAll().subscribe(views => {
      this.views.set(views);
    });
  }
  fetchPolymorphism() {
    this.#viewsSvc.getPolymorphism().subscribe(polymorphism => {
      this.#polymorphism = polymorphism;
      const polymorphStatus = polymorphism.Id === null ? 'not configured' : polymorphism.Resolver === null ? 'disabled' : 'using ' + polymorphism.Resolver;
      this.polymorphStatus.set(polymorphStatus);
    });
  }
  editView(view) {
    const form = {
      items: [view == null ? _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_11__.EditPrep.newFromType(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_8__.eavConstants.contentTypes.template, {
        ...(this.appIsGlobal && {
          Location: 'Global'
        })
      }) : _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_11__.EditPrep.editId(view.Id)]
    };
    this.openEdit(form);
  }
  openEdit(form) {
    this.openChildDialog(`edit/${(0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_10__.convertFormToUrl)(form)}`);
  }
  openChildDialog(subPath) {
    this.#dialogRouter.navParentFirstChild([subPath]);
  }
  editPolymorphisms() {
    if (!this.#polymorphism) return;
    const form = {
      items: [!this.#polymorphism.Id ? _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_11__.EditPrep.newFromType(this.#polymorphism.TypeName) : _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_11__.EditPrep.editId(this.#polymorphism.Id)]
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
    this.#dialogSvc.openCodeFile(view.TemplatePath, view.IsShared, view.Id);
  }
  openPermissions(view) {
    this.openChildDialog(_permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_5__.GoToPermissions.getUrlEntity(view.Guid));
  }
  openMetadata(view) {
    const url = _metadata__WEBPACK_IMPORTED_MODULE_4__.GoToMetadata.getUrlEntity(view.Guid, `Metadata for View: ${view.Name} (${view.Id})`);
    this.openChildDialog(url);
  }
  cloneView(view) {
    const form = {
      items: [_shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_11__.EditPrep.copy(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_8__.eavConstants.contentTypes.template, view.Id)]
    };
    this.openEdit(form);
  }
  exportView(view) {
    this.#viewsSvc.export(view.Id);
  }
  deleteView(view) {
    if (!confirm(`Delete '${view.Name}' (${view.Id})?`)) return;
    this.snackBar.open('Deleting...');
    this.#viewsSvc.delete(view.Id).subscribe(res => {
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
        ..._shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_11__.EditPrep.editId(view.lightSpeed.Id)
      } : {
        ...shared,
        ..._shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_11__.EditPrep.newMetadata(view.Guid, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_8__.eavConstants.appMetadata.LightSpeed.ContentTypeName, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_8__.eavConstants.metadata.entity)
      }]
    };
    this.openEdit(form);
  }
  buildGridOptions() {
    function showItemDetails(viewEntity) {
      return viewEntity.DemoId == 0 ? "" : `${viewEntity.DemoId} ${viewEntity.DemoTitle}`;
    }
    // Helper function for actions in the table below
    const openLightSpeedFeatInfo = () => (0,_features_shared_base_feature_component__WEBPACK_IMPORTED_MODULE_3__.openFeatureDialog)(this.matDialog, _features_feature_names__WEBPACK_IMPORTED_MODULE_2__.FeatureNames.LightSpeed, this.viewContainerRef, this.changeDetectorRef);
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_7__.defaultGridOptions,
      columnDefs: [{
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.IdWithDefaultRenderer,
        cellClass: p => {
          const view = p.data;
          return `id-action no-padding no-outline ${view.EditInfo.ReadOnly ? 'disabled' : ''}`.split(' ');
        },
        cellRendererParams: _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.idFieldParamsTooltipGetter()
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.IconShow,
        valueGetter: p => !p.data.IsHidden,
        cellRenderer: _views_show_views_show_component__WEBPACK_IMPORTED_MODULE_18__.ViewsShowComponent
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.TextWide,
        field: 'Name',
        cellClass: 'primary-action highlight'.split(' '),
        sort: 'asc',
        onCellClicked: params => {
          const view = params.data;
          this.editView(view);
        }
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.ItemsText,
        field: 'Type',
        width: 82,
        valueGetter: p => (0,_views_helpers__WEBPACK_IMPORTED_MODULE_20__.calculateViewType)(p.data).value,
        cellRenderer: _views_type_views_type_component__WEBPACK_IMPORTED_MODULE_19__.ViewsTypeComponent
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.Number,
        field: 'Used',
        onCellClicked: p => this.openUsage(p.data)
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.TextNarrow,
        headerName: 'Url Key',
        field: 'ViewNameInUrl'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.TextWide,
        headerName: 'Path',
        field: 'TemplatePath'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.TextNarrow,
        headerName: 'Content',
        valueGetter: p => p.data.ContentType.Name
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.TextNarrow,
        headerName: 'Default',
        field: 'ContentDemo',
        valueGetter: p => showItemDetails(p.data.ContentType)
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.TextNarrow,
        field: 'Presentation',
        valueGetter: p => p.data.PresentationType.Name
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.TextNarrow,
        headerName: 'Default',
        field: 'PresentationDemo',
        valueGetter: p => showItemDetails(p.data.PresentationType)
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.TextNarrow,
        field: 'Header',
        valueGetter: p => p.data.ListContentType.Name
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.TextNarrow,
        headerName: 'Default',
        field: 'HeaderDemo',
        valueGetter: p => showItemDetails(p.data.ListContentType)
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.TextNarrow,
        headerName: 'Header Pres.',
        field: 'HeaderPresentation',
        valueGetter: p => p.data.ListPresentationType.Name
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.TextNarrow,
        headerName: 'Default',
        field: 'HeaderPresentationDemo',
        valueGetter: p => showItemDetails(p.data.ListPresentationType)
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_6__.ColumnDefinitions.ActionsPinnedRight5,
        cellRenderer: _views_actions_views_actions_component__WEBPACK_IMPORTED_MODULE_17__.ViewsActionsComponent,
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
  static {
    this.ɵfac = function ViewsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ViewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_21__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({
      type: ViewsComponent,
      selectors: [["app-views"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵStandaloneFeature"]],
      decls: 18,
      vars: 6,
      consts: [[1, "grid-wrapper", "mat-tab-grid-wrapper"], ["appDragAndDrop", "", 1, "ag-theme-material", 3, "filesDropped", "rowData", "gridOptions", "allowedFileTypes"], [1, "eav-dialog-actions"], [1, "eav-dialog-actions-div"], ["mat-button", "", "tippy", "Configure polymorphism", 1, "eav-polymorph-button", 3, "click", "disabled"], [1, "eav-polymorph-button-span"], [1, "eav-polymorph-logo", 3, "src"], ["mat-button", "", "tippy", "Import view", 1, "eav-button__with-icon", 3, "click"], [1, "eav-icon"], ["mat-fab", "", "mat-elevation-z24", "", "tippy", "Create a new view", 1, "grid-fab", 3, "click"]],
      template: function ViewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 0)(1, "ag-grid-angular", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("filesDropped", function ViewsComponent_Template_ag_grid_angular_filesDropped_1_listener($event) {
            return ctx.importView($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "mat-dialog-actions", 2)(3, "div", 3)(4, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ViewsComponent_Template_button_click_4_listener() {
            return ctx.editPolymorphisms();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](6, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ViewsComponent_Template_button_click_9_listener() {
            return ctx.importView();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "mat-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11, "cloud_upload");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "View");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ViewsComponent_Template_button_click_14_listener() {
            return ctx.editView(null);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](17, "router-outlet");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("rowData", ctx.views())("gridOptions", ctx.gridOptions)("allowedFileTypes", "json");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx.appIsInherited);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("src", ctx.polymorphLogo, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("Polymorphism ", ctx.polymorphStatus(), "");
        }
      },
      dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterOutlet, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_12__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_27__.AgGridAngular, _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_9__.DragAndDropDirective],
      styles: [".eav-polymorph-button[_ngcontent-%COMP%]   .eav-polymorph-button-span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.eav-polymorph-logo[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  margin-right: 4px;\n}\n\n.eav-polymorph-button[disabled][_ngcontent-%COMP%]   .eav-polymorph-logo[_ngcontent-%COMP%] {\n  opacity: 33%;\n  filter: grayscale(1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi92aWV3cy92aWV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0FBREYiLCJzb3VyY2VzQ29udGVudCI6WyIuZWF2LXBvbHltb3JwaC1idXR0b24ge1xyXG4gIC5lYXYtcG9seW1vcnBoLWJ1dHRvbi1zcGFuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmVhdi1wb2x5bW9ycGgtbG9nbyB7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcblxyXG4uZWF2LXBvbHltb3JwaC1idXR0b25bZGlzYWJsZWRdIC5lYXYtcG9seW1vcnBoLWxvZ28ge1xyXG4gIG9wYWNpdHk6IDMzJTtcclxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
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