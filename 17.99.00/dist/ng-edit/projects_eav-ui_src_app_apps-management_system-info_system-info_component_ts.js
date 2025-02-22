"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_apps-management_system-info_system-info_component_ts"],{

/***/ 15742:
/*!**********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/services/sxc-insights.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SxcInsightsService: () => (/* binding */ SxcInsightsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);





const webApiLogRoot = 'sys/log/';
class SxcInsightsService {
  constructor(http, dnnContext) {
    this.http = http;
    this.dnnContext = dnnContext;
  }
  activatePageLog(duration) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiLogRoot + 'EnableDebug'), {
      params: {
        duration: duration.toString()
      }
    });
  }
  static #_ = this.ɵfac = function SxcInsightsService_Factory(t) {
    return new (t || SxcInsightsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_2__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SxcInsightsService,
    factory: SxcInsightsService.ɵfac
  });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var _features_feature_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../features/feature-names */ 28136);
/* harmony import */ var _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/base-with-child-dialog.component */ 61735);
/* harmony import */ var _shared_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/helpers/copy-to-clipboard.helper */ 70519);
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/dialog.service */ 52785);
/* harmony import */ var _shared_services_features_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/features.service */ 44858);
/* harmony import */ var _services_sxc_insights_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/sxc-insights.service */ 15742);
/* harmony import */ var _services_zone_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/zone.service */ 67130);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _app_administration_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app-administration/services */ 75445);
/* harmony import */ var _features_feature_text_info_feature_text_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../features/feature-text-info/feature-text-info.component */ 95469);
/* harmony import */ var _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/field-hint/field-hint.component */ 43758);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core */ 34447);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
































const _c0 = () => ({
  link: "https://go.2sxc.org/settings"
});
const _c1 = () => ({
  link: "https://go.2sxc.org/lightspeed"
});
const _c2 = () => ({
  link: "https://go.2sxc.org/csp"
});
const _c3 = () => ({
  link: "https://go.2sxc.org/insights"
});
const _c4 = () => ["/"];
function SystemInfoComponent_Conditional_0_For_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SystemInfoComponent_Conditional_0_For_12_Conditional_6_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);
      const info_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.openSideNavPath(info_r3.link.url));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const info_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](2, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", info_r3.link.label, " ");
  }
}
function SystemInfoComponent_Conditional_0_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 7)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 22)(4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SystemInfoComponent_Conditional_0_For_12_Template_span_click_4_listener() {
      const info_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.copyToClipboard(info_r3.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, SystemInfoComponent_Conditional_0_For_12_Conditional_6_Template, 2, 3, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const info_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", info_r3.label, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("tippy", info_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](info_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](6, info_r3.link ? 6 : -1);
  }
}
function SystemInfoComponent_Conditional_0_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainer"](0);
  }
}
function SystemInfoComponent_Conditional_0_For_36_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SystemInfoComponent_Conditional_0_For_36_Conditional_6_Conditional_0_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8);
      const info_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.openSideNavPath(info_r7.link.url));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const info_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](2, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", info_r7.link.label, " ");
  }
}
function SystemInfoComponent_Conditional_0_For_36_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const info_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("href", info_r7.link.url, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"])("target", info_r7.link.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](info_r7.link.label);
  }
}
function SystemInfoComponent_Conditional_0_For_36_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, SystemInfoComponent_Conditional_0_For_36_Conditional_6_Conditional_0_Template, 2, 3, "a", 24)(1, SystemInfoComponent_Conditional_0_For_36_Conditional_6_Conditional_1_Template, 2, 3, "a", 27);
  }
  if (rf & 2) {
    const info_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](0, info_r7.link.target === "angular" ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](1, info_r7.link.target !== "angular" ? 1 : -1);
  }
}
function SystemInfoComponent_Conditional_0_For_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 7)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 22)(4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SystemInfoComponent_Conditional_0_For_36_Template_span_click_4_listener() {
      const info_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.copyToClipboard(info_r7.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, SystemInfoComponent_Conditional_0_For_36_Conditional_6_Template, 2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const info_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", info_r7.label, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("tippy", info_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](info_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](6, info_r7.link ? 6 : -1);
  }
}
function SystemInfoComponent_Conditional_0_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainer"](0);
  }
}
function SystemInfoComponent_Conditional_0_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " LightSpeed is enabled. Configure it in each site/app as you need. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function SystemInfoComponent_Conditional_0_ng_container_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainer"](0);
  }
}
function SystemInfoComponent_Conditional_0_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " ContentSecurityPolicy is enabled. Configure it in each site/app as you need. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function SystemInfoComponent_Conditional_0_ng_container_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainer"](0);
  }
}
function SystemInfoComponent_Conditional_0_ng_container_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainer"](0);
  }
}
function SystemInfoComponent_Conditional_0_Conditional_119_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-field-hint", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Only positive whole numbers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isError", true);
  }
}
function SystemInfoComponent_Conditional_0_Conditional_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, SystemInfoComponent_Conditional_0_Conditional_119_Conditional_0_Template, 2, 1, "app-field-hint", 28);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const duration_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](118);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](0, duration_r10.errors.pattern ? 0 : -1);
  }
}
function SystemInfoComponent_Conditional_0_For_135_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const info_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", info_r12.link.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", info_r12.link.label, "");
  }
}
function SystemInfoComponent_Conditional_0_For_135_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const info_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("href", info_r12.link.url, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"])("target", info_r12.link.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](info_r12.link.label);
  }
}
function SystemInfoComponent_Conditional_0_For_135_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, SystemInfoComponent_Conditional_0_For_135_Conditional_6_Conditional_0_Template, 2, 2, "a", 24)(1, SystemInfoComponent_Conditional_0_For_135_Conditional_6_Conditional_1_Template, 2, 3, "a", 27);
  }
  if (rf & 2) {
    const info_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](0, info_r12.link.target === "angular" ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](1, info_r12.link.target !== "angular" ? 1 : -1);
  }
}
function SystemInfoComponent_Conditional_0_For_135_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 7)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 22)(4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SystemInfoComponent_Conditional_0_For_135_Template_span_click_4_listener() {
      const info_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.copyToClipboard(info_r12.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, SystemInfoComponent_Conditional_0_For_135_Conditional_6_Template, 2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const info_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", info_r12.label, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("tippy", info_r12.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](info_r12.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](6, info_r12.link ? 6 : -1);
  }
}
function SystemInfoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 3)(1, "mat-card", 4)(2, "mat-card-header")(3, "div", 5)(4, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "settings_applications");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "Platform");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "What you are running");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterCreate"](11, SystemInfoComponent_Conditional_0_For_12_Template, 7, 4, "div", 7, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "Global Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, " This includes both pre-defined SystemSettings as well as custom Settings. It will affect the entire Installation. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "mat-card-actions", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, SystemInfoComponent_Conditional_0_ng_container_19_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SystemInfoComponent_Conditional_0_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.openGlobalSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24, "Open Global Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "mat-card", 4)(26, "mat-card-header")(27, "div", 5)(28, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29, "public");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31, "This Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, "The current Site you're on");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterCreate"](35, SystemInfoComponent_Conditional_0_For_36_Template, 7, 4, "div", 7, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](37, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, "Site Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, " This includes both pre-defined SystemSettings as well as custom Settings. It will affect the entire Site / Portal. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](42, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "mat-card-actions", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](44, SystemInfoComponent_Conditional_0_ng_container_44_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SystemInfoComponent_Conditional_0_Template_button_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.openSiteSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](47, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49, "Open Site Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "mat-card", 4)(51, "mat-card-header")(52, "div", 5)(53, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](54, "bolt");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](56, "Performance");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](57, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](58, "Performance Enhancements and Caching");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](60, "app-feature-text-info", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](61, SystemInfoComponent_Conditional_0_Conditional_61_Template, 2, 0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](62, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "mat-card-actions", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](64, SystemInfoComponent_Conditional_0_ng_container_64_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](65, "mat-card", 4)(66, "mat-card-header")(67, "div", 5)(68, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](69, "local_police");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](70, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](71, "Security");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](72, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](73, "System Security Features");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](74, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](75, "app-feature-text-info", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](76, SystemInfoComponent_Conditional_0_Conditional_76_Template, 2, 0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](77, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](78, "mat-card-actions", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](79, SystemInfoComponent_Conditional_0_ng_container_79_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](80, "mat-card", 4)(81, "mat-card-header")(82, "div", 5)(83, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](84, "speed");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](85, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](86, "2sxc Insights");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](87, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](88, "See what's happening under the hood");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](89, "mat-card-content")(90, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](91, "2sxc Insights for Super Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](92, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](93, " This is to access a special section to see what is really in the server memory. It's intended for extensive debugging - see also ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](94, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](95, "this blog post");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](96, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](97, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](98, SystemInfoComponent_Conditional_0_ng_container_98_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](99, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SystemInfoComponent_Conditional_0_Template_button_click_99_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.openInsights());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](100, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](101, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](102, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](103, "Open 2sxc Insights");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](104, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](105, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](106, "Activate Page Level Logging");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](107, "form", 16, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngSubmit", function SystemInfoComponent_Conditional_0_Template_form_ngSubmit_107_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const activateLogForm_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](108);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.activatePageLog(activateLogForm_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](109, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](110, " This will place insights-logs in the HTML of the user output for users with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](111, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](112, "?debug=true");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](113, " in the url. It can only be activated for short periods of time. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](114, "mat-form-field", 17)(115, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](116, "Duration in Minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](117, "input", 18, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function SystemInfoComponent_Conditional_0_Template_input_ngModelChange_117_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r3.pageLogDuration, $event) || (ctx_r3.pageLogDuration = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](119, SystemInfoComponent_Conditional_0_Conditional_119_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](120, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](121, "mat-card-actions", 19)(122, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](123, " Activate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](124, "mat-card", 4)(125, "mat-card-header")(126, "div", 5)(127, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](128);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](129, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](130, "Warnings");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](131, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](132, "System and Code Warnings");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](133, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterCreate"](134, SystemInfoComponent_Conditional_0_For_135_Template, 7, 4, "div", 7, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](136, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vm_r13 = ctx;
    const activateLogForm_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](108);
    const duration_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](118);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const docsLink_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeater"](vm_r13.systemInfos);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngTemplateOutlet", docsLink_r14)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](22, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeater"](vm_r13.siteInfos);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngTemplateOutlet", docsLink_r14)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](23, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("featureNameId", "LightSpeedOutputCache")("asInfo", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](61, ctx_r3.lsEnabled() ? 61 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngTemplateOutlet", docsLink_r14)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](24, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("featureNameId", "ContentSecurityPolicy")("asInfo", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](76, ctx_r3.cspEnabled() ? 76 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngTemplateOutlet", docsLink_r14)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](25, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngTemplateOutlet", docsLink_r14)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](26, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("pattern", ctx_r3.positiveWholeNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.pageLogDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", vm_r13.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](119, duration_r10.touched && duration_r10.errors ? 119 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !activateLogForm_r9.valid || vm_r13.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](vm_r13.warningIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeater"](vm_r13.warningInfos);
  }
}
function SystemInfoComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 30)(1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const icon_r15 = ctx.$implicit;
    const label_r16 = ctx.$implicit;
    const link_r17 = ctx.link;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("href", link_r17, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("tippy", "online documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]((tmp_7_0 = icon_r15) !== null && tmp_7_0 !== undefined ? tmp_7_0 : "menu_book");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](label_r16);
  }
}
class SystemInfoComponent extends _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_1__.BaseWithChildDialogComponent {
  constructor(router, route, snackBar) {
    super(router, route);
    this.router = router;
    this.route = route;
    this.snackBar = snackBar;
    this.dialogSettings = (0,_core__WEBPACK_IMPORTED_MODULE_11__.transient)(_app_administration_services__WEBPACK_IMPORTED_MODULE_7__.AppDialogConfigService);
    this.sxcInsightsService = (0,_core__WEBPACK_IMPORTED_MODULE_11__.transient)(_services_sxc_insights_service__WEBPACK_IMPORTED_MODULE_5__.SxcInsightsService);
    this.zoneService = (0,_core__WEBPACK_IMPORTED_MODULE_11__.transient)(_services_zone_service__WEBPACK_IMPORTED_MODULE_6__.ZoneService);
    this.dialogService = (0,_core__WEBPACK_IMPORTED_MODULE_11__.transient)(_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__.DialogService);
    this.positiveWholeNumber = /^[1-9][0-9]*$/;
    this.features = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.inject)(_shared_services_features_service__WEBPACK_IMPORTED_MODULE_4__.FeaturesService);
    this.lsEnabled = this.features.isEnabled(_features_feature_names__WEBPACK_IMPORTED_MODULE_0__.FeatureNames.LightSpeed);
    this.cspEnabled = this.features.isEnabled(_features_feature_names__WEBPACK_IMPORTED_MODULE_0__.FeatureNames.ContentSecurityPolicy);
  }
  ngOnInit() {
    this.systemInfoSet$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(undefined);
    this.languages$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(undefined);
    this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(false);
    this.buildViewModel();
    this.getSystemInfo();
    this.getLanguages();
    this.subscriptions.add(this.childDialogClosed$().subscribe(() => {
      this.buildViewModel();
      this.getSystemInfo();
      this.getLanguages();
    }));
  }
  ngOnDestroy() {
    this.systemInfoSet$.complete();
    this.languages$.complete();
    this.loading$.complete();
    super.ngOnDestroy();
  }
  copyToClipboard(text) {
    (0,_shared_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_2__.copyToClipboard)(text);
    this.snackBar.open('Copied to clipboard', null, {
      duration: 2000
    });
  }
  openSiteSettings() {
    this.dialogSettings.getSitePrimaryApp$().subscribe(sitePrimaryApp => {
      this.dialogService.openAppAdministration(sitePrimaryApp.ZoneId, sitePrimaryApp.AppId, 'app');
    });
  }
  openGlobalSettings() {
    this.dialogSettings.getGlobalPrimaryApp$().subscribe(globalPrimaryApp => {
      this.dialogService.openAppAdministration(globalPrimaryApp.ZoneId, globalPrimaryApp.AppId, 'app');
    });
  }
  openInsights() {
    window.open(window.$2sxc.http.apiUrl('sys/insights/help'), '_blank');
  }
  openSideNavPath(sideNavPath) {
    // Url are /2/apps/system/registration, sideNavPath are only the last part of the url
    if (sideNavPath.includes('registration')) sideNavPath = 'registration';
    this.router.navigate([this.router.url.replace('system', '') + sideNavPath]);
  }
  activatePageLog(form) {
    this.loading$.next(true);
    this.snackBar.open('Activating...');
    this.sxcInsightsService.activatePageLog(this.pageLogDuration).subscribe(res => {
      this.loading$.next(false);
      this.snackBar.open(res, null, {
        duration: 4000
      });
    });
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    form.resetForm();
  }
  getSystemInfo() {
    this.zoneService.getSystemInfo().subscribe({
      error: () => {
        this.systemInfoSet$.next(undefined);
      },
      next: systemInfoSet => {
        this.systemInfoSet$.next(systemInfoSet);
      }
    });
  }
  getLanguages() {
    this.zoneService.getLanguages().subscribe({
      error: () => {
        this.languages$.next(undefined);
      },
      next: languages => {
        this.languages$.next(languages);
      }
    });
  }
  buildViewModel() {
    const systemInfos$ = this.systemInfoSet$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.map)(systemInfoSet => {
      if (systemInfoSet == null) {
        return;
      }
      const info = [{
        label: 'CMS',
        value: `2sxc v.${systemInfoSet.System.EavVersion}`
      }, {
        label: 'Platform',
        value: `${systemInfoSet.System.Platform} v.${systemInfoSet.System.PlatformVersion}`
      }, {
        label: 'Zones',
        value: systemInfoSet.System.Zones.toString()
      }, {
        label: 'Fingerprint',
        value: systemInfoSet.System.Fingerprint
      }, {
        label: 'Registered to',
        value: systemInfoSet.License.Owner || '(unregistered)',
        link: systemInfoSet.License.Owner ? {
          url: this.router.url + '/' + "registration",
          label: 'manage',
          target: 'angular'
        } : {
          url: this.router.url + '/' + "registration",
          label: 'register',
          target: 'angular'
        }
      }];
      return info;
    }));
    const siteInfos$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.combineLatest)([this.systemInfoSet$, this.languages$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.map)(([systemInfoSet, languages]) => {
      if (systemInfoSet == null || languages == null) {
        return;
      }
      const allLanguages = languages.length;
      const activeLanguages = languages.filter(l => l.IsEnabled).length;
      const info = [{
        label: 'Zone',
        value: systemInfoSet.Site.ZoneId.toString()
      }, {
        label: 'Site',
        value: systemInfoSet.Site.SiteId.toString()
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
        value: systemInfoSet.Site.Apps.toString(),
        link: {
          url: 'list',
          label: 'manage',
          target: 'angular'
        }
      }];
      return info;
    }));
    const warningIcon$ = this.systemInfoSet$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.map)(systemInfoSet => {
      if (systemInfoSet == null) {
        return;
      }
      if (systemInfoSet.Messages.WarningsObsolete || systemInfoSet.Messages.WarningsOther) {
        return 'warning';
      }
      return 'check';
    }));
    const warningInfos$ = this.systemInfoSet$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.map)(systemInfoSet => {
      if (systemInfoSet == null) {
        return;
      }
      const info = [{
        label: 'Warnings Obsolete',
        value: systemInfoSet.Messages.WarningsObsolete.toString(),
        link: !systemInfoSet.Messages.WarningsObsolete ? undefined : {
          url: window.$2sxc.http.apiUrl('sys/insights/logs?key=warnings-obsolete'),
          label: 'review',
          target: '_blank'
        }
      }, {
        label: 'Warnings Other',
        value: systemInfoSet.Messages.WarningsOther.toString(),
        link: !systemInfoSet.Messages.WarningsOther ? undefined : {
          url: window.$2sxc.http.apiUrl('sys/insights/logs'),
          label: 'review',
          target: '_blank'
        }
      }];
      return info;
    }));
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.combineLatest)([systemInfos$, siteInfos$, this.loading$, warningIcon$, warningInfos$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.map)(([systemInfos, siteInfos, loading, warningIcon, warningInfos]) => {
      const viewModel = {
        systemInfos,
        siteInfos,
        loading,
        warningIcon,
        warningInfos
      };
      return viewModel;
    }));
  }
  static #_ = this.ɵfac = function SystemInfoComponent_Factory(t) {
    return new (t || SystemInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: SystemInfoComponent,
    selectors: [["app-system-info"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 3,
    consts: [["docsLink", ""], ["activateLogForm", "ngForm"], ["duration", "ngModel"], [1, "eav-cards-box"], [1, "eav-card"], ["mat-card-avatar", ""], [1, "eav-card-header-avatar-icon"], [1, "eav-info-row"], [1, "eav-card-space-div"], ["align", "start"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["mat-button", "", 1, "eav-button__with-icon", 3, "click"], [1, "eav-icon"], [1, "card-content-separator"], [3, "featureNameId", "asInfo"], ["href", "https://2sxc.org/en/blog/post/using-2sxc-insights", "target", "_blank"], [1, "activate-log-form", 3, "ngSubmit"], ["color", "accent", 1, "eav-mat-form-field"], ["matInput", "", "type", "number", "min", "0", "required", "", "name", "Duration", 3, "ngModelChange", "pattern", "ngModel", "disabled"], ["align", "end"], ["mat-raised-button", "", "type", "submit", "color", "accent", 3, "disabled"], [1, "eav-info-row__label"], [1, "eav-info-row__value"], [1, "eav-info-row__value__span", "eav-click", 3, "click", "tippy"], [1, "eav-info-row__link", 3, "routerLink"], [1, "eav-info-row__link", 3, "click", "routerLink"], [3, "click", "tippy"], [1, "eav-info-row__link", 3, "href", "target"], [3, "isError"], [1, "eav-info-row__label", "eav-long"], ["mat-button", "", "target", "_blank", 1, "eav-button__with-icon", 3, "href", "tippy"]],
    template: function SystemInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, SystemInfoComponent_Conditional_0_Template, 137, 27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, SystemInfoComponent_ng_template_2_Template, 5, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "router-outlet");
      }
      if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](0, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_1_0);
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgTemplateOutlet, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInput, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_20__.AsyncPipe, _features_feature_text_info_feature_text_info_component__WEBPACK_IMPORTED_MODULE_8__.FeatureTextInfoComponent, _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_9__.FieldHintComponent, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_10__.TippyDirective],
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
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);




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
    this.isError = false;
    this.isShort = true;
  }
  toggleIsShort() {
    this.isShort = !this.isShort;
  }
  static #_ = this.ɵfac = function FieldHintComponent_Factory(t) {
    return new (t || FieldHintComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FieldHintComponent,
    selectors: [["app-field-hint"]],
    inputs: {
      isError: "isError"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldHintComponent_Case_1_Template, 2, 1)(2, FieldHintComponent_Case_2_Template, 2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FieldHintComponent_ng_template_3_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx.isShort));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, (tmp_2_0 = ctx.isError) === false ? 1 : tmp_2_0 === true ? 2 : -1);
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatError, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet],
    styles: [".hint-box[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: block;\n}\n.hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZpZWxkLWhpbnQvZmllbGQtaGludC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjtBQUNFOztFQUVFLGVBQUE7RUFDQSxjQUFBO0FBQ0o7QUFJSTs7RUFFRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFGTiIsInNvdXJjZXNDb250ZW50IjpbIi5oaW50LWJveCB7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG5cclxuICAubWF0LW1kYy1mb3JtLWZpZWxkLWhpbnQsXHJcbiAgLm1hdC1tZGMtZm9ybS1maWVsZC1lcnJvciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICZfX3Nob3J0IHtcclxuXHJcbiAgICAubWF0LW1kYy1mb3JtLWZpZWxkLWhpbnQsXHJcbiAgICAubWF0LW1kYy1mb3JtLWZpZWxkLWVycm9yIHtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
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

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_apps-management_system-info_system-info_component_ts.js.map