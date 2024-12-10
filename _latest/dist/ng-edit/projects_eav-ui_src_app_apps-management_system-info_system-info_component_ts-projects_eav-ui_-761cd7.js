"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_apps-management_system-info_system-info_component_ts-projects_eav-ui_-761cd7"],{

/***/ 66545:
/*!*********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/admin-shared/docs-link-helper/docs-link-helper.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocsLinkHelperComponent: () => (/* binding */ DocsLinkHelperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);







class DocsLinkHelperComponent {
  constructor() {
    this.link = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.label = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.icon = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
  }
  static {
    this.ɵfac = function DocsLinkHelperComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocsLinkHelperComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DocsLinkHelperComponent,
      selectors: [["app-docs-link-helper"]],
      inputs: {
        link: [1, "link"],
        label: [1, "label"],
        icon: [1, "icon"]
      },
      decls: 5,
      vars: 3,
      consts: [["mat-button", "", "target", "_blank", "tippy", "online documentation", 1, "eav-button__with-icon", 3, "href"], ["mat-icon", "", 1, "eav-icon"]],
      template: function DocsLinkHelperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0)(1, "mat-icon", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.link(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_1_0 = ctx.icon()) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "menu_book");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.label());
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatAnchor, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 15742:
/*!**********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/services/sxc-insights.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SxcInsightsService: () => (/* binding */ SxcInsightsService)
/* harmony export */ });
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


const webApiLogRoot = 'sys/log/';
class SxcInsightsService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__.HttpServiceBase {
  activatePageLog(duration) {
    return this.getHttp(webApiLogRoot + 'EnableDebug', {
      params: {
        duration: duration.toString()
      }
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵSxcInsightsService_BaseFactory;
      return function SxcInsightsService_Factory(__ngFactoryType__) {
        return (ɵSxcInsightsService_BaseFactory || (ɵSxcInsightsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](SxcInsightsService)))(__ngFactoryType__ || SxcInsightsService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SxcInsightsService,
      factory: SxcInsightsService.ɵfac
    });
  }
}

/***/ }),

/***/ 7030:
/*!**************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/system-info/system-info.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SystemInfoComponent: () => (/* binding */ SystemInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _admin_shared_docs_link_helper_docs_link_helper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../admin-shared/docs-link-helper/docs-link-helper.component */ 66545);
/* harmony import */ var _app_administration_services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-administration/services/dialog-config-app.service */ 64699);
/* harmony import */ var _features_feature_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/feature-names */ 28136);
/* harmony import */ var _features_feature_text_info_feature_text_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/feature-text-info/feature-text-info.component */ 95469);
/* harmony import */ var _features_features_scoped_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../features/features-scoped.service */ 74824);
/* harmony import */ var _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/field-hint/field-hint.component */ 43758);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/routing/dialog-routing.service */ 60852);
/* harmony import */ var _shared_services_clipboard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/clipboard.service */ 25081);
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/services/dialog.service */ 52785);
/* harmony import */ var _services_sxc_insights_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/sxc-insights.service */ 15742);
/* harmony import */ var _services_zone_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/zone.service */ 67130);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);































const _c0 = () => ["/"];
function SystemInfoComponent_For_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SystemInfoComponent_For_12_Conditional_6_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const info_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.openSideNavPath(info_r3.link.url));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const info_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", info_r3.link.label, " ");
  }
}
function SystemInfoComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 6)(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 21)(4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SystemInfoComponent_For_12_Template_span_click_4_listener() {
      const info_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.clipboard.copyToClipboard(info_r3.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, SystemInfoComponent_For_12_Conditional_6_Template, 2, 3, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const info_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", info_r3.label, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("tippy", info_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](info_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](info_r3.link ? 6 : -1);
  }
}
function SystemInfoComponent_For_36_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SystemInfoComponent_For_36_Conditional_6_Conditional_0_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8);
      const info_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.openSideNavPath(info_r7.link.url));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const info_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", info_r7.link.label, " ");
  }
}
function SystemInfoComponent_For_36_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const info_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("href", info_r7.link.url, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"])("target", info_r7.link.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](info_r7.link.label);
  }
}
function SystemInfoComponent_For_36_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, SystemInfoComponent_For_36_Conditional_6_Conditional_0_Template, 2, 3, "a", 23)(1, SystemInfoComponent_For_36_Conditional_6_Conditional_1_Template, 2, 3, "a", 26);
  }
  if (rf & 2) {
    const info_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](info_r7.link.target === "angular" ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](info_r7.link.target !== "angular" ? 1 : -1);
  }
}
function SystemInfoComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 6)(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 21)(4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SystemInfoComponent_For_36_Template_span_click_4_listener() {
      const info_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.clipboard.copyToClipboard(info_r7.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, SystemInfoComponent_For_36_Conditional_6_Template, 2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const info_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", info_r7.label, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("tippy", info_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](info_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](info_r7.link ? 6 : -1);
  }
}
function SystemInfoComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "LightSpeed is enabled. Configure it in each site/app as you need.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function SystemInfoComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "ContentSecurityPolicy is enabled. Configure it in each site/app as you need.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function SystemInfoComponent_Conditional_119_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-field-hint", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Only positive whole numbers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isError", true);
  }
}
function SystemInfoComponent_Conditional_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, SystemInfoComponent_Conditional_119_Conditional_0_Template, 2, 1, "app-field-hint", 27);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const duration_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](118);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](duration_r10.errors.pattern ? 0 : -1);
  }
}
function SystemInfoComponent_For_135_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const info_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("routerLink", info_r12.link.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", info_r12.link.label, "");
  }
}
function SystemInfoComponent_For_135_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const info_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("href", info_r12.link.url, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"])("target", info_r12.link.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](info_r12.link.label);
  }
}
function SystemInfoComponent_For_135_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, SystemInfoComponent_For_135_Conditional_6_Conditional_0_Template, 2, 2, "a", 23)(1, SystemInfoComponent_For_135_Conditional_6_Conditional_1_Template, 2, 3, "a", 26);
  }
  if (rf & 2) {
    const info_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](info_r12.link.target === "angular" ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](info_r12.link.target !== "angular" ? 1 : -1);
  }
}
function SystemInfoComponent_For_135_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 6)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 21)(4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SystemInfoComponent_For_135_Template_span_click_4_listener() {
      const info_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.clipboard.copyToClipboard(info_r12.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, SystemInfoComponent_For_135_Conditional_6_Template, 2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const info_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", info_r12.label, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("tippy", info_r12.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](info_r12.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](info_r12.link ? 6 : -1);
  }
}
class SystemInfoComponent {
  #dialogSettings;
  #sxcInsightsService;
  #zoneSvc;
  #dialogSvc;
  #dialogRouter;
  #refresh;
  constructor(snackBar) {
    this.snackBar = snackBar;
    this.features = (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.inject)(_features_features_scoped_service__WEBPACK_IMPORTED_MODULE_5__.FeaturesScopedService);
    this.#dialogSettings = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_app_administration_services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_2__.DialogConfigAppService);
    this.#sxcInsightsService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_sxc_insights_service__WEBPACK_IMPORTED_MODULE_11__.SxcInsightsService);
    this.#zoneSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_zone_service__WEBPACK_IMPORTED_MODULE_12__.ZoneService);
    this.#dialogSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_10__.DialogService);
    this.#dialogRouter = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_8__.DialogRoutingService);
    this.positiveWholeNumber = /^[1-9][0-9]*$/;
    this.loading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.signal)(false);
    this.#refresh = (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.signal)(0);
    this.languages = (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.computed)(() => {
      const r = this.#refresh();
      return this.#zoneSvc.getLanguage(undefined);
    });
    this.systemInfoSet = (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.computed)(() => {
      const r = this.#refresh();
      return this.#zoneSvc.getSystemInfo(undefined);
    });
    this.systemInfos = (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.computed)(() => {
      const systemInfoSetValue = this.systemInfoSet()();
      if (systemInfoSetValue == null) return;
      const url = this.#dialogRouter.router.url + '/' + "registration";
      const info = [{
        label: 'CMS',
        value: `2sxc v.${systemInfoSetValue.System.EavVersion}`
      }, {
        label: 'Platform',
        value: `${systemInfoSetValue.System.Platform} v.${systemInfoSetValue.System.PlatformVersion}`
      }, {
        label: 'Zones',
        value: systemInfoSetValue.System.Zones.toString()
      }, {
        label: 'Fingerprint',
        value: systemInfoSetValue.System.Fingerprint
      }, {
        label: 'Registered to',
        value: systemInfoSetValue.License.Owner || '(unregistered)',
        link: systemInfoSetValue.License.Owner ? {
          url,
          label: 'manage',
          target: 'angular'
        } : {
          url,
          label: 'register',
          target: 'angular'
        }
      }];
      return info;
    });
    this.siteInfos = (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.computed)(() => {
      const systemInfoSetValue = this.systemInfoSet()();
      const languagesValue = this.languages()();
      if (systemInfoSetValue == null || languagesValue == null) return;
      const allLanguages = languagesValue.length;
      const activeLanguages = languagesValue.filter(l => l.IsEnabled).length;
      const info = [{
        label: 'Zone',
        value: systemInfoSetValue.Site.ZoneId.toString()
      }, {
        label: 'Site',
        value: systemInfoSetValue.Site.SiteId.toString()
      }, {
        label: 'Languages',
        value: `${activeLanguages}/${allLanguages}`,
        link: {
          url: 'languages',
          label: 'manage',
          target: 'angular'
        }
      }, {
        label: 'Apps',
        value: systemInfoSetValue.Site.Apps.toString(),
        link: {
          url: 'list',
          label: 'manage',
          target: 'angular'
        }
      }];
      return info;
    });
    this.warningIcon = (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.computed)(() => {
      const systemInfoSetValue = this.systemInfoSet()();
      if (systemInfoSetValue == null) return undefined;
      if (systemInfoSetValue.Messages.WarningsObsolete || systemInfoSetValue.Messages.WarningsOther) {
        return 'warning';
      }
      return 'check';
    });
    this.warningInfos = (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.computed)(() => {
      const systemInfoSetValue = this.systemInfoSet()();
      if (systemInfoSetValue == null) return undefined;
      const info = [{
        label: 'Warnings Obsolete',
        value: systemInfoSetValue.Messages.WarningsObsolete.toString(),
        link: !systemInfoSetValue.Messages.WarningsObsolete ? undefined : {
          url: window.$2sxc.http.apiUrl('sys/insights/logs?key=warnings-obsolete'),
          label: 'review',
          target: '_blank'
        }
      }, {
        label: 'Warnings Other',
        value: systemInfoSetValue.Messages.WarningsOther.toString(),
        link: !systemInfoSetValue.Messages.WarningsOther ? undefined : {
          url: window.$2sxc.http.apiUrl('sys/insights/logs'),
          label: 'review',
          target: '_blank'
        }
      }];
      return info;
    });
    this.lsEnabled = this.features.isEnabled[_features_feature_names__WEBPACK_IMPORTED_MODULE_3__.FeatureNames.LightSpeed];
    this.cspEnabled = this.features.isEnabled[_features_feature_names__WEBPACK_IMPORTED_MODULE_3__.FeatureNames.ContentSecurityPolicy];
    this.clipboard = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_services_clipboard_service__WEBPACK_IMPORTED_MODULE_9__.ClipboardService);
  }
  ngOnInit() {
    this.#dialogRouter.doOnDialogClosed(() => {
      this.#refresh.set(this.#refresh() + 1);
    });
  }
  openSiteSettings() {
    this.openParentAppSettings("Site");
  }
  openGlobalSettings() {
    this.openParentAppSettings("System");
  }
  openParentAppSettings(partName) {
    this.#dialogSettings.getCurrent$().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.map)(dc => dc?.Context[partName].PrimaryApp), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.take)(1)).subscribe(appIdentity => {
      this.#dialogSvc.openAppAdministration(appIdentity.ZoneId, appIdentity.AppId, 'app');
    });
  }
  openInsights() {
    window.open(window.$2sxc.http.apiUrl('sys/insights/help'), '_blank');
  }
  openSideNavPath(sideNavPath) {
    // Url are /2/apps/system/registration, sideNavPath are only the last part of the url
    if (sideNavPath.includes('registration')) sideNavPath = 'registration';
    const router = this.#dialogRouter.router;
    router.navigate([router.url.replace('system', '') + sideNavPath]);
  }
  // TODO: 2dg new with Signals
  activatePageLog(form) {
    this.loading.set(true);
    this.snackBar.open('Activating...');
    this.#sxcInsightsService.activatePageLog(this.pageLogDuration).subscribe(res => {
      this.loading.set(false);
      this.snackBar.open(res, null, {
        duration: 4000
      });
    });
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    form.resetForm();
  }
  static {
    this.ɵfac = function SystemInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SystemInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: SystemInfoComponent,
      selectors: [["app-system-info"]],
      decls: 138,
      vars: 17,
      consts: [["activateLogForm", "ngForm"], ["duration", "ngModel"], [1, "eav-cards-box"], [1, "eav-card"], ["mat-card-avatar", ""], [1, "eav-card-header-avatar-icon"], [1, "eav-info-row"], [1, "eav-card-space-div"], ["align", "start"], [3, "link", "label", "icon"], ["mat-button", "", 1, "eav-button__with-icon", 3, "click"], [1, "eav-icon"], [1, "card-content-separator"], [3, "featureNameId", "asInfo"], ["href", "https://2sxc.org/en/blog/post/using-2sxc-insights", "target", "_blank"], [1, "activate-log-form", 3, "ngSubmit"], ["color", "accent", 1, "eav-mat-form-field"], ["matInput", "", "type", "number", "min", "0", "required", "", "name", "Duration", 3, "ngModelChange", "pattern", "ngModel", "disabled"], ["align", "end"], ["mat-raised-button", "", "type", "submit", "color", "accent", 3, "disabled"], [1, "eav-info-row__label"], [1, "eav-info-row__value"], [1, "eav-info-row__value__span", "eav-click", 3, "click", "tippy"], [1, "eav-info-row__link", 3, "routerLink"], [1, "eav-info-row__link", 3, "click", "routerLink"], [3, "click", "tippy"], [1, "eav-info-row__link", 3, "href", "target"], [3, "isError"], [1, "eav-info-row__label", "eav-long"]],
      template: function SystemInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 2)(1, "mat-card", 3)(2, "mat-card-header")(3, "div", 4)(4, "mat-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "settings_applications");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Platform");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "mat-card-subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "What you are running");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "mat-card-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrepeaterCreate"](11, SystemInfoComponent_For_12_Template, 7, 4, "div", 6, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Global Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "This includes both pre-defined SystemSettings as well as custom Settings. It will affect the entire Installation.");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "mat-card-actions", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "app-docs-link-helper", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SystemInfoComponent_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx.openGlobalSettings());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "mat-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22, "open_in_new");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, "Open Global Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "mat-card", 3)(26, "mat-card-header")(27, "div", 4)(28, "mat-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, "public");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "This Site");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "mat-card-subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, "The current Site you're on");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "mat-card-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrepeaterCreate"](35, SystemInfoComponent_For_36_Template, 7, 4, "div", 6, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](37, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](39, "Site Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41, "This includes both pre-defined SystemSettings as well as custom Settings. It will affect the entire Site / Portal.");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](42, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "mat-card-actions", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](44, "app-docs-link-helper", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SystemInfoComponent_Template_button_click_45_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx.openSiteSettings());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "mat-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47, "open_in_new");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](49, "Open Site Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "mat-card", 3)(51, "mat-card-header")(52, "div", 4)(53, "mat-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](54, "bolt");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](56, "Performance");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "mat-card-subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](58, "Performance Enhancements and Caching");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](59, "mat-card-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](60, "app-feature-text-info", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](61, SystemInfoComponent_Conditional_61_Template, 2, 0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](62, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](63, "mat-card-actions", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](64, "app-docs-link-helper", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](65, "mat-card", 3)(66, "mat-card-header")(67, "div", 4)(68, "mat-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](69, "local_police");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](70, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](71, "Security");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](72, "mat-card-subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](73, "System Security Features");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](74, "mat-card-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](75, "app-feature-text-info", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](76, SystemInfoComponent_Conditional_76_Template, 2, 0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](77, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](78, "mat-card-actions", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](79, "app-docs-link-helper", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](80, "mat-card", 3)(81, "mat-card-header")(82, "div", 4)(83, "mat-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](84, "speed");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](85, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](86, "2sxc Insights");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](87, "mat-card-subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](88, "See what's happening under the hood");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](89, "mat-card-content")(90, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](91, "2sxc Insights for Super Users");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](92, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](93, " This is to access a special section to see what is really in the server memory. It's intended for extensive debugging - see also ");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](94, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](95, "this blog post");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](96, ". ");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](97, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](98, "app-docs-link-helper", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](99, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SystemInfoComponent_Template_button_click_99_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx.openInsights());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](100, "mat-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](101, "open_in_new");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](102, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](103, "Open 2sxc Insights");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](104, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](105, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](106, "Activate Page Level Logging");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](107, "form", 15, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function SystemInfoComponent_Template_form_ngSubmit_107_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            const activateLogForm_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](108);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx.activatePageLog(activateLogForm_r9));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](109, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](110, " This will place insights-logs in the HTML of the user output for users with ");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](111, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](112, "?debug=true");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](113, " in the url. It can only be activated for short periods of time. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](114, "mat-form-field", 16)(115, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](116, "Duration in Minutes");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](117, "input", 17, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function SystemInfoComponent_Template_input_ngModelChange_117_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx.pageLogDuration, $event) || (ctx.pageLogDuration = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](119, SystemInfoComponent_Conditional_119_Template, 1, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](120, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](121, "mat-card-actions", 18)(122, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](123, "Activate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](124, "mat-card", 3)(125, "mat-card-header")(126, "div", 4)(127, "mat-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](128);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](129, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](130, "Warnings");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](131, "mat-card-subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](132, "System and Code Warnings");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](133, "mat-card-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrepeaterCreate"](134, SystemInfoComponent_For_135_Template, 7, 4, "div", 6, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](136, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](137, "router-outlet");
        }
        if (rf & 2) {
          const activateLogForm_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](108);
          const duration_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](118);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrepeater"](ctx.systemInfos());
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("link", "https://go.2sxc.org/settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrepeater"](ctx.siteInfos());
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("link", "https://go.2sxc.org/settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("featureNameId", "LightSpeedOutputCache")("asInfo", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](ctx.lsEnabled() ? 61 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("link", "https://go.2sxc.org/lightspeed");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("featureNameId", "ContentSecurityPolicy")("asInfo", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](ctx.cspEnabled() ? 76 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("link", "https://go.2sxc.org/csp");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("link", "https://go.2sxc.org/insights");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pattern", ctx.positiveWholeNumber);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx.pageLogDuration);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx.loading());
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](duration_r10.touched && duration_r10.errors ? 119 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !activateLogForm_r9.valid || ctx.loading());
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.warningIcon());
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrepeater"](ctx.warningInfos());
        }
      },
      dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInput, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterOutlet, _features_feature_text_info_feature_text_info_component__WEBPACK_IMPORTED_MODULE_4__.FeatureTextInfoComponent, _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_6__.FieldHintComponent, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_7__.TippyDirective, _admin_shared_docs_link_helper_docs_link_helper_component__WEBPACK_IMPORTED_MODULE_1__.DocsLinkHelperComponent],
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

/***/ 95469:
/*!*******************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/features/feature-text-info/feature-text-info.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureTextInfoComponent: () => (/* binding */ FeatureTextInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/signals/signal.utilities */ 67993);
/* harmony import */ var _shared_base_feature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/base-feature.component */ 9006);









const _c0 = ["*"];
function FeatureTextInfoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FeatureTextInfoComponent_Conditional_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.openDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 7, "Features.Tooltip", ctx_r1.feature()));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("icon icon-", ctx_r1.icon(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.icon());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 10, "Features.FeatureNotActivated"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 12, "Features.ClickToFindOutMore"));
  }
}
class FeatureTextInfoComponent extends _shared_base_feature_component__WEBPACK_IMPORTED_MODULE_2__.FeatureComponentBase {
  constructor() {
    super();
    this.asInfo = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(false);
    this.icon = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_1__.computedObj)('icon', () => this.asInfo() ? 'info' : 'warning');
  }
  static {
    this.ɵfac = function FeatureTextInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FeatureTextInfoComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: FeatureTextInfoComponent,
      selectors: [["app-feature-text-info"]],
      inputs: {
        asInfo: [1, "asInfo"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 1,
      consts: [[1, "feature-text-info", 3, "tippy"], [1, "feature-text-info", 3, "click", "tippy"], [1, "feature-text-info-content"], [1, "feature-text-info-title"], [1, "feature-text-info-subtitle"]],
      template: function FeatureTextInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, FeatureTextInfoComponent_Conditional_0_Template, 12, 14, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.show() ? 0 : -1);
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
      styles: [".feature-text-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  cursor: pointer;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 5px;\n  margin-bottom: 10px;\n}\n\n.feature-text-info-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  margin-left: 10px;\n}\n\n.feature-text-info-title[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\n.feature-text-info-subtitle[_ngcontent-%COMP%] {\n  font-size: medium;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 45px;\n  height: fit-content;\n  width: fit-content;\n}\n\n.icon-warning[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2ZlYXR1cmVzL2ZlYXR1cmUtdGV4dC1pbmZvL2ZlYXR1cmUtdGV4dC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSx5SEFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5mZWF0dXJlLXRleHQtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYigwIDAgMCAvIDIwJSksIDBweCAxcHggMXB4IDBweCByZ2IoMCAwIDAgLyAxNCUpLCAwcHggMXB4IDNweCAwcHggcmdiKDAgMCAwIC8gMTIlKTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlLXRleHQtaW5mby1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlLXRleHQtaW5mby10aXRsZSB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLmZlYXR1cmUtdGV4dC1pbmZvLXN1YnRpdGxlIHtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGZvbnQtc2l6ZTogNDVweDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmljb24td2FybmluZyB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 43758:
/*!**************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/components/field-hint/field-hint.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldHintComponent: () => (/* binding */ FieldHintComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 24950);





const _c0 = ["*"];
const _c1 = a0 => ({
  "hint-box__short": a0
});
function FieldHintComponent_Case_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FieldHintComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldHintComponent_Case_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const content_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", content_r2);
  }
}
function FieldHintComponent_Case_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FieldHintComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldHintComponent_Case_2_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const content_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", content_r2);
  }
}
function FieldHintComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}
class FieldHintComponent {
  constructor() {
    this.isError = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(false);
    this.isShort = true;
  }
  toggleIsShort() {
    this.isShort = !this.isShort;
  }
  static {
    this.ɵfac = function FieldHintComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FieldHintComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FieldHintComponent,
      selectors: [["app-field-hint"]],
      inputs: {
        isError: [1, "isError"]
      },
      ngContentSelectors: _c0,
      decls: 5,
      vars: 4,
      consts: [["content", ""], [1, "hint-box", 3, "click", "ngClass"], [4, "ngTemplateOutlet"]],
      template: function FieldHintComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldHintComponent_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.toggleIsShort());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldHintComponent_Case_1_Template, 2, 1, "mat-hint")(2, FieldHintComponent_Case_2_Template, 2, 1, "mat-error");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FieldHintComponent_ng_template_3_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx.isShort));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((tmp_2_0 = ctx.isError()) === false ? 1 : tmp_2_0 === true ? 2 : -1);
        }
      },
      dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatError, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet],
      styles: [".hint-box[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], \n.hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: block;\n}\n.hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], \n.hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZpZWxkLWhpbnQvZmllbGQtaGludC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjtBQUNFOztFQUVFLGVBQUE7RUFDQSxjQUFBO0FBQ0o7QUFHSTs7RUFFRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFETiIsInNvdXJjZXNDb250ZW50IjpbIi5oaW50LWJveCB7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG5cclxuICAubWF0LW1kYy1mb3JtLWZpZWxkLWhpbnQsXHJcbiAgLm1hdC1tZGMtZm9ybS1maWVsZC1lcnJvciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICZfX3Nob3J0IHtcclxuICAgIC5tYXQtbWRjLWZvcm0tZmllbGQtaGludCxcclxuICAgIC5tYXQtbWRjLWZvcm0tZmllbGQtZXJyb3Ige1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 70519:
/*!****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/helpers/copy-to-clipboard.helper.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyToClipboard: () => (/* binding */ copyToClipboard)
/* harmony export */ });
/** https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f */
function copyToClipboard(str) {
  const el = document.createElement('textarea'); // Create a <textarea> element
  el.value = str; // Set its value to the string that you want copied
  el.setAttribute('readonly', ''); // Make it readonly to be tamper-proof
  el.style.position = 'absolute';
  el.style.left = '-9999px'; // Move outside the screen to make it invisible
  document.body.appendChild(el); // Append the <textarea> element to the HTML document
  const selected = document.getSelection().rangeCount > 0 // Check if there is any content selected previously
  ? document.getSelection().getRangeAt(0) // Store selection if found
  : false; // Mark as false to know no selection existed before
  el.select(); // Select the <textarea> content
  document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el); // Remove the <textarea> element
  if (selected) {
    // If a selection existed before copying
    document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
    document.getSelection().addRange(selected); // Restore the original selection
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
      pure: true
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

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_apps-management_system-info_system-info_component_ts-projects_eav-ui_-761cd7.js.map