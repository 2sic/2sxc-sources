"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_app-configuration_app-configuration_component_ts"],{

/***/ 14740:
/*!**************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/services/app-internals.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppInternalsService: () => (/* binding */ AppInternalsService)
/* harmony export */ });
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);



const webApiRoot = 'admin/appinternals/get';
class AppInternalsService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__.HttpServiceBase {
  /**
   * Fetches AppInternals for given key
   * @param targetType type of target metadata item is for, e.g. for Entity, or ContentType
   * @param keyType e.g. for keyType === guid, key === contentTypeStaticName
   * @param key key of target metadata item is for
   * @param contentTypeName name of content type where permissions are stored. If blank, backend returns all metadata except permissions
   */
  getAppInternals(internals) {
    return this.getSignal(webApiRoot, {
      params: {
        appid: this.appId
      }
    }, internals);
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵAppInternalsService_BaseFactory;
      return function AppInternalsService_Factory(__ngFactoryType__) {
        return (ɵAppInternalsService_BaseFactory || (ɵAppInternalsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AppInternalsService)))(__ngFactoryType__ || AppInternalsService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AppInternalsService,
      factory: AppInternalsService.ɵfac
    });
  }
}

/***/ }),

/***/ 64294:
/*!************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/analyze-settings/analyze-settings.models.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyzeParts: () => (/* binding */ AnalyzeParts)
/* harmony export */ });
const AnalyzeParts = {
  Settings: 'Settings',
  Resources: 'Resources'
} /* the as const ensures that the keys/values can be strictly checked */;

/***/ }),

/***/ 72898:
/*!*****************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/app-configuration/app-configuration.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppConfigurationComponent: () => (/* binding */ AppConfigurationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 49074);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _admin_shared_docs_link_helper_docs_link_helper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../admin-shared/docs-link-helper/docs-link-helper.component */ 66545);
/* harmony import */ var _content_items_services_content_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../content-items/services/content-items.service */ 336);
/* harmony import */ var _features_feature_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/feature-names */ 28136);
/* harmony import */ var _features_feature_text_info_feature_text_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/feature-text-info/feature-text-info.component */ 95469);
/* harmony import */ var _features_features_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../features/features.service */ 9001);
/* harmony import */ var _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../permissions/go-to-permissions */ 72437);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _shared_models_dialog_context_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/models/dialog-context.models */ 46666);
/* harmony import */ var _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/models/edit-form.model */ 70334);
/* harmony import */ var _shared_routing_dialog_in_new_window_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/routing/dialog-in-new-window.service */ 71693);
/* harmony import */ var _shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/routing/dialog-routing.service */ 60852);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _app_admin_helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../app-admin-helpers */ 58713);
/* harmony import */ var _services_app_internals_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/app-internals.service */ 14740);
/* harmony import */ var _services_content_types_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/content-types.service */ 17693);
/* harmony import */ var _services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/dialog-config-app.service */ 64699);
/* harmony import */ var _sub_dialogs_analyze_settings_analyze_settings_models__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../sub-dialogs/analyze-settings/analyze-settings.models */ 64294);
/* harmony import */ var _app_configuration_card_app_configuration_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app-configuration-card/app-configuration-card.component */ 76761);




































function AppConfigurationComponent_Conditional_0_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](0, " This is the Global App. Anything configured here will affect all Sites and Apps in this installation. ");
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](0, " This is the Primary App of this Site. You can also configure site wide settings and resources here. ");
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, AppConfigurationComponent_Conditional_0_Conditional_0_Conditional_1_Template, 1, 0)(2, AppConfigurationComponent_Conditional_0_Conditional_0_Conditional_2_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, " See ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "docs");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](ctx_r1.isGlobal() ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](ctx_r1.isSite() ? 2 : -1);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_36_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, AppConfigurationComponent_Conditional_0_Conditional_36_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    const goToGlobal_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", goToGlobal_r3);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_37_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_37_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, AppConfigurationComponent_Conditional_0_Conditional_37_ng_container_0_Template, 1, 0, "ng-container", 23)(1, AppConfigurationComponent_Conditional_0_Conditional_37_ng_container_1_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    const goToGlobal_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](91);
    const goToSite_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](93);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", goToSite_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", goToGlobal_r3);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_80_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, AppConfigurationComponent_Conditional_0_Conditional_80_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    const goToGlobal_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", goToGlobal_r3);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_81_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_81_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, AppConfigurationComponent_Conditional_0_Conditional_81_ng_container_0_Template, 1, 0, "ng-container", 23)(1, AppConfigurationComponent_Conditional_0_Conditional_81_ng_container_1_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    const goToGlobal_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](91);
    const goToSite_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](93);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", goToSite_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", goToGlobal_r3);
  }
}
function AppConfigurationComponent_Conditional_0_ng_template_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Global");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td")(4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_ng_template_90_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.openGlobalSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
}
function AppConfigurationComponent_Conditional_0_ng_template_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td")(4, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_ng_template_92_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.openSiteSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_144_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](0, " (not on Global App) ");
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_144_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](0, " (not on Content) ");
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_144_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, AppConfigurationComponent_Conditional_0_Conditional_144_Conditional_0_Template, 1, 0)(1, AppConfigurationComponent_Conditional_0_Conditional_144_Conditional_1_Template, 1, 0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](ctx_r1.isGlobal() ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](ctx_r1.isApp() ? 1 : -1);
  }
}
function AppConfigurationComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, AppConfigurationComponent_Conditional_0_Conditional_0_Template, 7, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 3)(2, "mat-card", 4)(3, "mat-card-header", 5)(4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "mat-card-content")(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, " Settings are things like SQL-connection strings, default \"items-to-show\" numbers and similar. If necessary, settings like a link to an RSS-Feed could be different in each language. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](12, "docs");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "table", 7)(14, "thead")(15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](18, "System Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](20, "Custom Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "tbody")(22, "tr")(23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "td")(26, "a", 8)(27, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](28, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](29, "td")(30, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Template_a_click_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.fixContentTypeIfNecessary(ctx_r1.buttons().customSettings.url, ctx_r1.buttons().customSettingsType, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](32, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](33, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Template_a_click_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.fixContentTypeIfNecessary(ctx_r1.buttons().customSettings.url, ctx_r1.buttons().customSettingsType, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](34, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](35, "dns");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](36, AppConfigurationComponent_Conditional_0_Conditional_36_Template, 1, 1, "ng-container")(37, AppConfigurationComponent_Conditional_0_Conditional_37_Template, 2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](38, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](39, "mat-card-actions", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](40, "app-docs-link-helper", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](41, "a", 14)(42, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](43, "manage_search");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](45, "Analyze Combined Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](46, "mat-card", 4)(47, "mat-card-header", 5)(48, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](49, "Language Resources (i18n)");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](50, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](52, "mat-card-content")(53, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](54, " Resources are used for labels and things like that in the App. They are usually needed to create multi-lingual views and such, and should not be used for App-Settings. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](55, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](56, "docs");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](57, "table", 7)(58, "thead")(59, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](60, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](61, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](62, "System Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](63, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](64, "Custom Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](65, "tbody")(66, "tr")(67, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](69, "td")(70, "a", 8)(71, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](72, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](73, "td")(74, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Template_a_click_74_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.fixContentTypeIfNecessary(ctx_r1.buttons().customResources.url, ctx_r1.buttons().customResourcesType, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](75, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](76, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](77, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Template_a_click_77_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.fixContentTypeIfNecessary(ctx_r1.buttons().customResources.url, ctx_r1.buttons().customResourcesType, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](78, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](79, "dns");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](80, AppConfigurationComponent_Conditional_0_Conditional_80_Template, 1, 1, "ng-container")(81, AppConfigurationComponent_Conditional_0_Conditional_81_Template, 2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](82, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](83, "mat-card-actions", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](84, "app-docs-link-helper", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](85, "a", 16)(86, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](87, "manage_search");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](88, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](89, "Analyze Combined Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](90, AppConfigurationComponent_Conditional_0_ng_template_90_Template, 7, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"])(92, AppConfigurationComponent_Conditional_0_ng_template_92_Template, 7, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](94, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](95, "app-app-configuration-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](96, "mat-card", 4)(97, "mat-card-header", 5)(98, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](99, "Performance");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](100, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](101, "bolt");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](102, "mat-card-content")(103, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](104, "LightSpeed Output Cache to speed up page by 50-90%");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](105, "app-feature-text-info", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](106, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](107, "mat-card-actions", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](108, "app-docs-link-helper", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](109, "a", 19)(110, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](111, "bolt");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](112, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](113, "Edit LightSpeed");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](114, "mat-card", 4)(115, "mat-card-header", 5)(116, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](117, "Security");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](118, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](119, "local_police");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](120, "mat-card-content")(121, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](122, "ContentSecurityPolicy (CSP) features in this App - for maximum control.");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](123, "app-feature-text-info", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](124, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](125, "mat-card-actions", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](126, "app-docs-link-helper", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](127, "mat-card", 4)(128, "mat-card-header", 5)(129, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](130, "Permissions");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](131, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](132, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](133, "mat-card-content")(134, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](135, "Give access to the entire app (all data). Use with care.");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](136, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](137, "mat-card-actions", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](138, "app-docs-link-helper", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](139, "a", 19)(140, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](141, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](142, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](143, " Edit Permissions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](144, AppConfigurationComponent_Conditional_0_Conditional_144_Template, 2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](145, "app-docs-link-helper", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](146, "a", 21)(147, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](148, " person ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](149, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](150, "Language Permissions");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](ctx_r1.isGlobal() || ctx_r1.isSite() ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.buttons().topRowLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r1.buttons().systemSettings.url, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"])("tippy", ctx_r1.buttons().systemSettings.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ctx_r1.buttons().systemSettings.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r1.buttons().customSettings.url, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"])("tippy", ctx_r1.buttons().customSettings.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ctx_r1.buttons().customSettings.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r1.buttons().customSettingsFields.url, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"])("tippy", ctx_r1.buttons().customSettingsFields.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ctx_r1.buttons().customSettingsFields.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](ctx_r1.isSite() ? 36 : ctx_r1.isApp() ? 37 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("link", "https://go.2sxc.org/settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r1.urlToAnalyze(ctx_r1.AnalyzeParts.Settings), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.buttons().topRowLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r1.buttons().systemResources.url, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"])("tippy", ctx_r1.buttons().systemResources.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ctx_r1.buttons().systemResources.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r1.buttons().customResources.url, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"])("tippy", ctx_r1.buttons().customResources.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ctx_r1.buttons().customResources.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r1.buttons().customResourcesFields.url, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"])("tippy", ctx_r1.buttons().customResourcesFields.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ctx_r1.buttons().customResourcesFields.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](ctx_r1.isSite() ? 80 : ctx_r1.isApp() ? 81 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("link", "https://go.2sxc.org/settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r1.urlToAnalyze(ctx_r1.AnalyzeParts.Resources), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dialogSettings", ctx_r1.dialogSettings());
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("featureNameId", "LightSpeedOutputCache")("asInfo", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("link", "https://go.2sxc.org/lightspeed");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("disabled", !ctx_r1.lightSpeedEnabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r1.buttons().lightspeed.url, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ctx_r1.buttons().lightspeed.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("featureNameId", "ContentSecurityPolicy")("asInfo", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("link", "https://go.2sxc.org/csp");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("link", "https://docs.2sxc.org/basics/app/permissions.html");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r1.urlToOpenPermissions(), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"])("disabled", !ctx_r1.dialogSettings().Context.Enable.AppPermissions);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ctx_r1.dialogSettings().Context.App.Permissions.Count || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](!ctx_r1.dialogSettings().Context.Enable.AppPermissions ? 144 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("link", "https://patrons.2sxc.org/features/feat/PermissionsByLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r1.urlToOpenLanguagePermissions(ctx_r1.langPermsEnabled()), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadgeHidden", ctx_r1.langPermsEnabled());
  }
}
class AppConfigurationComponent {
  #featuresSvc;
  #dialogInNewWindowSvc;
  #contentTypesSvc;
  #appInternalsService;
  #contentItemsService;
  #dialogConfigSvc;
  #dialogRouter;
  constructor(context) {
    this.context = context;
    this.#featuresSvc = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.inject)(_features_features_service__WEBPACK_IMPORTED_MODULE_5__.FeaturesService);
    this.#dialogInNewWindowSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_routing_dialog_in_new_window_service__WEBPACK_IMPORTED_MODULE_12__.DialogInNewWindowService);
    this.#contentTypesSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_content_types_service__WEBPACK_IMPORTED_MODULE_17__.ContentTypesService);
    this.#appInternalsService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_app_internals_service__WEBPACK_IMPORTED_MODULE_16__.AppInternalsService);
    this.#contentItemsService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_content_items_services_content_items_service__WEBPACK_IMPORTED_MODULE_2__.ContentItemsService);
    this.#dialogConfigSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_18__.DialogConfigAppService);
    this.#dialogRouter = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_13__.DialogRoutingService);
    this.eavConstants = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants;
    this.AnalyzeParts = _sub_dialogs_analyze_settings_analyze_settings_models__WEBPACK_IMPORTED_MODULE_19__.AnalyzeParts;
    this.SystemSettingsScopes = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes;
    this.AppScopes = _shared_models_dialog_context_models__WEBPACK_IMPORTED_MODULE_10__.AppScopes;
    // Settings for the current dialog
    this.dialogSettings = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_22__.toSignal)(this.#dialogConfigSvc.getCurrent$());
    this.#currentScope = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.computed)(() => this.dialogSettings()?.Context.App.SettingsScope);
    // Booleans containing the current scope state
    this.isGlobal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.computed)(() => {
      const cs = this.#currentScope();
      return cs == null ? null : cs === _shared_models_dialog_context_models__WEBPACK_IMPORTED_MODULE_10__.AppScopes.Global;
    });
    this.isSite = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.computed)(() => {
      const cs = this.#currentScope();
      return cs == null ? null : cs === _shared_models_dialog_context_models__WEBPACK_IMPORTED_MODULE_10__.AppScopes.Site;
    });
    this.isApp = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.computed)(() => {
      const cs = this.#currentScope();
      return cs == null ? null : cs === _shared_models_dialog_context_models__WEBPACK_IMPORTED_MODULE_10__.AppScopes.App;
    });
    this.appSystemSettingsUrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.computed)(() => {
      const isGlobal = this.isGlobal();
      const isSite = this.isSite();
      if (isGlobal == null || isSite == null) return null;
      // Ensure that the source is only created once when global/site are ready.
      this.#appSystemSettingsUrlSource ??= this.urlToEditSystem(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.contentTypes.systemSettings, isGlobal ? _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.App : isSite ? _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.Site : _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.App);
      // return value unwrapped
      return this.#appSystemSettingsUrlSource();
    });
    this.appSystemResourcesUrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.computed)(() => {
      const isGlobal = this.isGlobal();
      const isSite = this.isSite();
      if (isGlobal == null || isSite == null) return null;
      // Ensure that the source is only created once when global/site are ready.
      this.#appSystemResourcesUrlSource ??= this.urlToEditSystem(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.contentTypes.systemResources, isGlobal ? _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.App : isSite ? _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.Site : _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.App);
      // return value unwrapped
      return this.#appSystemResourcesUrlSource();
    });
    this.appCustomSettingsUrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.computed)(() => {
      const isGlobal = this.isGlobal();
      const isSite = this.isSite();
      if (isGlobal == null || isSite == null) return null;
      // Ensure that the source is only created once when global/site are ready.
      this.#appCustomSettingsUrlSource ??= this.urlToEditSystem(isGlobal ? _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.contentTypes.customSettings : isSite ? _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.contentTypes.customSettings : _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.contentTypes.settings, isGlobal ? _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.App : isSite ? _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.Site : _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.App);
      // return value unwrapped
      return this.#appCustomSettingsUrlSource();
    });
    this.appCustomResourcesUrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.computed)(() => {
      const isGlobal = this.isGlobal();
      const isSite = this.isSite();
      if (isGlobal == null || isSite == null) return null;
      // Ensure that the source is only created once when global/site are ready.
      this.#appCustomResourcesUrlSource ??= this.urlToEditSystem(isGlobal ? _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.contentTypes.customResources : isSite ? _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.contentTypes.customResources : _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.contentTypes.resources, isGlobal ? _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.App : isSite ? _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.Site : _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.App);
      // return value unwrapped
      return this.#appCustomResourcesUrlSource();
    });
    //============== END ==============
    // More proper ViewModel
    this.appSettingsInternal$ = new rxjs__WEBPACK_IMPORTED_MODULE_23__.Subject();
    this.appStateAdvanced = false;
    this.lightSpeedEnabled = this.#featuresSvc.isEnabled[_features_feature_names__WEBPACK_IMPORTED_MODULE_3__.FeatureNames.LightSpeed];
    this.cspEnabled = this.#featuresSvc.isEnabled[_features_feature_names__WEBPACK_IMPORTED_MODULE_3__.FeatureNames.ContentSecurityPolicy];
    this.langPermsEnabled = this.#featuresSvc.isEnabled[_features_feature_names__WEBPACK_IMPORTED_MODULE_3__.FeatureNames.PermissionsByLanguage];
    this.#refresh = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.signal)(0);
    this.#appSpecsLazy = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.computed)(() => {
      const _ = this.#refresh();
      return this.#appInternalsService.getAppInternals(/* initial: */null);
    });
    /** Statistics for the content-types and fields for later */
    this.#dataStatistics = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.computed)(() => {
      const appSpecs = this.#appSpecsLazy()();
      if (!appSpecs) return null;
      const props = appSpecs?.EntityLists;
      const lsTypeName = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.appMetadata.LightSpeed.ContentTypeName;
      const isSite = this.isSite();
      const result = {
        appLightSpeedCount: appSpecs.MetadataList.Items.filter(i => i._Type.Name === lsTypeName).length,
        systemSettingsCount: isSite ? props.SettingsSystem.filter(i => i.SettingsEntityScope === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.Site).length : props.SettingsSystem.filter(i => !i.SettingsEntityScope).length,
        customSettingsCount: props.AppSettings?.length,
        customSettingsFieldsCount: appSpecs.FieldAll.AppSettings?.length,
        systemResourcesCount: isSite ? props.ResourcesSystem.filter(i => i.SettingsEntityScope === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.Site).length : props.ResourcesSystem.filter(i => !i.SettingsEntityScope).length,
        customResourcesCount: props.AppResources?.length,
        customResourcesFieldsCount: appSpecs?.FieldAll.AppResources?.length
      };
      return result;
    });
    /** Test if current types for settings/resources exist, otherwise they must be created before opening dialogs */
    this.#customTypesExist = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.computed)(() => {
      const appSpecs = this.#appSpecsLazy()();
      return !appSpecs ? {
        settings: false,
        resources: false
      } : {
        settings: appSpecs.FieldAll.AppSettings != null,
        resources: appSpecs.FieldAll.AppResources != null
      };
    });
    this.buttons = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.computed)(() => {
      // if not ready, return a full object with empty values
      const ready = this.dialogSettings() != null;
      if (!ready) {
        const nothing = {
          tooltip: '',
          url: '',
          count: null
        };
        return {
          topRowLabel: 'loading...',
          customSettingsType: '',
          customResourcesType: '',
          systemSettings: nothing,
          customSettings: nothing,
          customSettingsFields: nothing,
          systemResources: nothing,
          customResources: nothing,
          customResourcesFields: nothing,
          lightspeed: nothing
        };
      }
      // From the current settings computed booleans containing the scope state
      const isGlobal = !!this.isGlobal();
      const isSite = !!this.isSite();
      const isApp = !!this.isApp();
      // The name of the top row, to use in the row label and tooltips
      const scopeName = this.dialogSettings().Context.App.SettingsScope;
      // The statistics of the entities - should later be simplified once code is improved @2pp
      const viewModel = this.#dataStatistics();
      const typeNames = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.contentTypes;
      const customSettingsType = isApp ? typeNames.settings : typeNames.customSettings;
      const customResourcesType = isApp ? typeNames.resources : typeNames.customResources;
      // Detect if the custom types exist
      const typesExist = this.#customTypesExist();
      return {
        topRowLabel: scopeName,
        customSettingsType: customSettingsType,
        customResourcesType: customResourcesType,
        systemSettings: {
          tooltip: `Edit ${scopeName} system settings`,
          url: this.appSystemSettingsUrl(),
          count: viewModel?.systemSettingsCount || null
        },
        customSettings: {
          tooltip: `Edit ${scopeName} custom settings`,
          url: typesExist.settings ? this.appCustomSettingsUrl() : null,
          count: viewModel?.customSettingsCount || null
        },
        customSettingsFields: {
          tooltip: `Configure fields of the custom ${scopeName} settings`,
          url: typesExist.settings ? this.urlToConfig(customSettingsType) : null,
          count: viewModel?.customSettingsFieldsCount || null
        },
        systemResources: {
          tooltip: `Edit ${scopeName} system resources`,
          url: this.appSystemResourcesUrl(),
          count: viewModel?.systemResourcesCount || null
        },
        customResources: {
          tooltip: `Edit ${scopeName} custom resources`,
          url: typesExist.resources ? this.appCustomResourcesUrl() : null,
          count: viewModel?.customResourcesCount || null
        },
        customResourcesFields: {
          tooltip: `Edit ${scopeName} custom resources fields`,
          url: this.urlToConfig(customResourcesType),
          count: viewModel?.customResourcesFieldsCount || null
        },
        lightspeed: {
          tooltip: `Edit ${scopeName} LightSpeed`,
          url: this.urlToGetLightSpeedLink(),
          count: viewModel?.appLightSpeedCount || null
        }
      };
    });
  }
  #currentScope;
  /*=== URL SIGNALS FOR EDIT ROUTES ===*/
  //============== System Settings ==============
  // Assign System Settings Url
  #appSystemSettingsUrlSource;
  //============== System Resources ==============
  // Assign System Resources Url
  #appSystemResourcesUrlSource;
  //============== Custm Settings ==============
  // Assign Custom Settings Url
  #appCustomSettingsUrlSource;
  //============== Custom Resources ==============
  // Assign Custom Resources Url
  #appCustomResourcesUrlSource;
  #refresh;
  #appSpecsLazy;
  /** Statistics for the content-types and fields for later */
  #dataStatistics;
  /** Test if current types for settings/resources exist, otherwise they must be created before opening dialogs */
  #customTypesExist;
  ngOnInit() {
    // Update dialog router when child a dialog was closesd
    this.#dialogRouter.doOnDialogClosed(() => this.#refresh.update(v => ++v));
  }
  #urlTo(url, queryParams, errComponent) {
    let newUrl = '#' + this.#dialogRouter.urlSubRoute(url);
    if (queryParams) newUrl += `?${new URLSearchParams(queryParams).toString()}`;
    if (errComponent) newUrl += `&errComponent=${errComponent}`;
    return newUrl;
  }
  // case eavConstants.contentTypes.systemSettings:
  // case eavConstants.contentTypes.systemResources:
  urlToEditSystem(staticName, systemSettingsScope) {
    const url = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.signal)('');
    this.#contentItemsService.getAll(staticName).subscribe(contentItems => {
      const systemSettingsEntities = contentItems.filter(i => systemSettingsScope === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.App ? !i.SettingsEntityScope : i.SettingsEntityScope === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.Site);
      if (systemSettingsEntities.length > 1) {
        url.set(this.#urlTo('message/e', {
          error: 'AppAdmin.ErrorTooManyAppSettings'
        }, staticName));
      } else {
        const systemSettingsEntity = systemSettingsEntities[0];
        url.set(this.#urlTo(`edit/${(0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_9__.convertFormToUrl)({
          items: [systemSettingsEntity == null ? _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_11__.EditPrep.newFromType(staticName, {
            ...(systemSettingsScope === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.Site && {
              SettingsEntityScope: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.Site
            })
          }) : _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_11__.EditPrep.editId(systemSettingsEntity.Id)]
        })}`));
      }
    });
    return url;
  }
  // case eavConstants.contentTypes.customSettings:
  // case eavConstants.contentTypes.customResources:
  urlToEditCustom(staticName) {
    const url = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.signal)('');
    this.#contentItemsService.getAll(staticName).subscribe(contentItems => {
      if (contentItems.length > 1) {
        url.set(this.#urlTo('message/e', {
          error: 'AppAdmin.ErrorTooManyAppSettings'
        }, staticName));
      } else {
        const customSettingsEntity = contentItems[0];
        url.set(this.#urlTo(`edit/${(0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_9__.convertFormToUrl)({
          items: [customSettingsEntity == null ? _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_11__.EditPrep.newFromType(staticName) : _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_11__.EditPrep.editId(customSettingsEntity.Id)]
        })}`));
      }
    });
    return url;
  }
  // case default:
  urlToEditDefault(staticName) {
    const url = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.signal)('');
    this.#contentItemsService.getAll(staticName).subscribe(contentItems => {
      if (contentItems.length < 1) {
        url.set(this.#urlTo('message/e', {
          error: 'AppAdmin.ErrorNoAppSettings'
        }, staticName));
      } else if (contentItems.length > 1) {
        url.set(this.#urlTo('message/e', {
          error: 'AppAdmin.ErrorTooManyAppSettings'
        }, staticName));
      } else {
        url.set(this.#urlTo(`edit/${(0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_9__.convertFormToUrl)({
          items: [_shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_11__.EditPrep.editId(contentItems[0].Id)]
        })}`));
      }
    });
    return url;
  }
  urlToGetLightSpeedLink() {
    return this.#urlTo(`edit/${(0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_9__.convertFormToUrl)(_app_admin_helpers__WEBPACK_IMPORTED_MODULE_15__.AppAdminHelpers.getLightSpeedEditParams(this.context.appId))}`);
  }
  openSiteSettings() {
    const siteApp = this.dialogSettings().Context.Site.PrimaryApp;
    this.#dialogInNewWindowSvc.openAppAdministration(siteApp.ZoneId, siteApp.AppId, 'app');
  }
  openGlobalSettings() {
    const globalApp = this.dialogSettings().Context.System.PrimaryApp;
    this.#dialogInNewWindowSvc.openAppAdministration(globalApp.ZoneId, globalApp.AppId, 'app');
  }
  urlToConfig(staticName) {
    return this.#urlTo(`fields/${staticName}`);
  }
  urlToOpenPermissions() {
    return this.#urlTo(_permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_6__.GoToPermissions.getUrlApp(this.context.appId));
  }
  urlToOpenLanguagePermissions(enabled) {
    if (enabled) return this.#urlTo('language-permissions');else return this.#urlTo('edit-language-permissions');
  }
  urlToAnalyze(part) {
    return this.#urlTo(`analyze/${part}`);
  }
  fixContentTypeIfNecessary(url, typeName, event) {
    // If we have a url, everything is fine so we can just return and let the click happen
    if (url) return;
    event.preventDefault();
    event.stopPropagation();
    // Check server if the content-type exists
    this.#contentTypesSvc.retrieveContentTypes(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.scopes.configuration.value).subscribe(contentTypes => {
      const contentTypeExists = contentTypes.some(ct => ct.Name === typeName);
      if (contentTypeExists) {
        // Open Edit dialog
        const url = this.#urlTo(`edit/${(0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_9__.convertFormToUrl)({
          items: [_shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_11__.EditPrep.newFromType(typeName)]
        })}`);
        if (url) {
          window.open(url, "_self");
          return;
        } else return;
      } else {
        const newContentType = {
          StaticName: '',
          // NameId: '',
          Name: typeName,
          Description: '',
          Scope: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.scopes.configuration.value,
          // ChangeStaticName: false,
          ChangeNameId: false,
          // NewStaticName: '',
          NewNameId: ''
        };
        this.#contentTypesSvc.save(newContentType).subscribe(success => {
          if (!success) return;
          // trigger refresh
          this.#refresh.update(v => ++v);
          // Inform user
          alert('Created a new Content Type. Please try again 👍🏼.');
        });
        return false;
      }
    });
  }
  static {
    this.ɵfac = function AppConfigurationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppConfigurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_14__.Context));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({
      type: AppConfigurationComponent,
      selectors: [["app-app-configuration"]],
      decls: 2,
      vars: 1,
      consts: [["goToGlobal", ""], ["goToSite", ""], [1, "alert", "alert-info", "scope-info"], [1, "eav-cards-box"], [1, "eav-card"], [1, "eav-card-header"], ["href", "https://go.2sxc.org/settings", "target", "_blank"], [1, "eav-settings-and-resources-table"], ["mat-icon-button", "", 3, "href", "tippy"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgePosition", "below after", "aria-hidden", "false", 3, "matBadge"], ["mat-icon-button", "", 3, "click", "href", "tippy"], [1, "eav-card-space-div"], ["align", "start"], [3, "link", "label", "icon"], ["mat-button", "", "tippy", "See the result of combining all settings", 1, "eav-button__with-icon", 3, "href"], [1, "eav-icon"], ["mat-button", "", "tippy", "See the result of combining all resources", 1, "eav-button__with-icon", 3, "href"], [3, "dialogSettings"], [3, "featureNameId", "asInfo"], ["mat-button", "", 1, "eav-button__with-icon", 3, "href", "disabled"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgePosition", "below after", "aria-hidden", "false", 1, "eav-icon", 3, "matBadge"], ["mat-button", "", 1, "eav-button__with-icon", 3, "href"], ["matBadgeSize", "small", "matBadge", "\uD83D\uDC8E", "matBadgePosition", "below after", "aria-hidden", "false", 1, "eav-icon", 3, "matBadgeHidden"], [4, "ngTemplateOutlet"], ["mat-icon-button", "", "tippy", "Go to global", 3, "click"], ["mat-icon-button", "", "tippy", "Go to site", 3, "click"]],
      template: function AppConfigurationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, AppConfigurationComponent_Conditional_0_Template, 151, 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "router-outlet");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](ctx.isGlobal() || ctx.isSite() || ctx.isApp() ? 0 : -1);
        }
      },
      dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatIconAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatIconButton, _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__.MatBadge, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgTemplateOutlet, _app_configuration_card_app_configuration_card_component__WEBPACK_IMPORTED_MODULE_20__.AppConfigurationCardComponent, _features_feature_text_info_feature_text_info_component__WEBPACK_IMPORTED_MODULE_4__.FeatureTextInfoComponent, _angular_router__WEBPACK_IMPORTED_MODULE_29__.RouterOutlet, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_8__.TippyDirective, _admin_shared_docs_link_helper_docs_link_helper_component__WEBPACK_IMPORTED_MODULE_1__.DocsLinkHelperComponent],
      styles: [".eav-settings-and-resources-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.eav-settings-and-resources-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.eav-settings-and-resources-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtBQUNKO0FBRUU7RUFDRSxnQkFBQTtBQUFKIiwiZmlsZSI6ImFwcC1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVhdi1zZXR0aW5ncy1hbmQtcmVzb3VyY2VzLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgdGJvZHkgdGgge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9hcHAtY29uZmlndXJhdGlvbi9hcHAtY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7QUFDSjtBQUVFO0VBQ0UsZ0JBQUE7QUFBSjtBQUNBLG9pQkFBb2lCIiwic291cmNlc0NvbnRlbnQiOlsiLmVhdi1zZXR0aW5ncy1hbmQtcmVzb3VyY2VzLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgdGJvZHkgdGgge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}
class TempDataStatistics {}

/***/ }),

/***/ 76761:
/*!*********************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/app-configuration/app-configuration-card/app-configuration-card.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppConfigurationCardComponent: () => (/* binding */ AppConfigurationCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core */ 88692);
/* harmony import */ var _admin_shared_docs_link_helper_docs_link_helper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../admin-shared/docs-link-helper/docs-link-helper.component */ 66545);
/* harmony import */ var _content_items_services_content_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../content-items/services/content-items.service */ 336);
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../metadata */ 65217);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/models/edit-form.model */ 70334);
/* harmony import */ var _shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/routing/dialog-routing.service */ 60852);
/* harmony import */ var _shared_services_clipboard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/clipboard.service */ 25081);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services/context */ 68873);
/* harmony import */ var _services_app_internals_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/app-internals.service */ 14740);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);

























function AppConfigurationCardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-header", 1)(2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "redeem");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 2)(9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 4)(12, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AppConfigurationCardComponent_Conditional_0_Template_span_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.clipboard.copyToClipboard(ctx_r1.contentItem()[0].DisplayName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 2)(15, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Folder:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 4)(18, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AppConfigurationCardComponent_Conditional_0_Template_span_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.clipboard.copyToClipboard(ctx_r1.contentItem()[0].Folder));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 2)(21, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22, "Version:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 4)(24, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AppConfigurationCardComponent_Conditional_0_Template_span_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.clipboard.copyToClipboard(ctx_r1.contentItem()[0].Version));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "div", 2)(27, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, "For");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "div", 4)(30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31, "2sxc: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AppConfigurationCardComponent_Conditional_0_Template_span_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.clipboard.copyToClipboard(ctx_r1.contentItem()[0].RequiredVersion));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35, " DNN: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AppConfigurationCardComponent_Conditional_0_Template_span_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.clipboard.copyToClipboard(ctx_r1.contentItem()[0].RequiredDnnVersion));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, " Oqt: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AppConfigurationCardComponent_Conditional_0_Template_span_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.clipboard.copyToClipboard(ctx_r1.contentItem()[0].RequiredOqtaneVersion));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](42, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "mat-card-actions", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](44, "app-docs-link-helper", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "a", 9)(46, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](47, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "a", 11)(51, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52, "local_offer");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](54, "Metadata");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    let tmp_6_0;
    let tmp_8_0;
    let tmp_10_0;
    let tmp_12_0;
    let tmp_16_0;
    let tmp_18_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("tippy", "Click to copy to clipboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.formatValue((tmp_2_0 = ctx_r1.contentItem()[0]) == null ? null : tmp_2_0.DisplayName));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("tippy", "Click to copy to clipboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.formatValue((tmp_4_0 = ctx_r1.contentItem()[0]) == null ? null : tmp_4_0.Folder));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("tippy", "Click to copy to clipboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.formatValue((tmp_6_0 = ctx_r1.contentItem()[0]) == null ? null : tmp_6_0.Version));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("tippy", "Click to copy to clipboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.formatValue((tmp_8_0 = ctx_r1.contentItem()[0]) == null ? null : tmp_8_0.RequiredVersion), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("tippy", "Click to copy to clipboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.formatValue((tmp_10_0 = ctx_r1.contentItem()[0]) == null ? null : tmp_10_0.RequiredDnnVersion), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("tippy", "Click to copy to clipboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.formatValue((tmp_12_0 = ctx_r1.contentItem()[0]) == null ? null : tmp_12_0.RequiredOqtaneVersion), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("link", "https://docs.2sxc.org/basics/app/configuration.html");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("href", ctx_r1.appConfigurationUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"])("disabled", !ctx_r1.appConfigAvailable());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matBadge", ((tmp_16_0 = ctx_r1.appSettingsInternal()()) == null ? null : tmp_16_0.EntityLists == null ? null : tmp_16_0.EntityLists.ToSxcContentApp.length) || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("href", ctx_r1.urlToOpenMetadata(), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matBadge", ((tmp_18_0 = ctx_r1.appSettingsInternal()()) == null ? null : tmp_18_0.MetadataList.Items.length) || null);
  }
}
class AppConfigurationCardComponent {
  #appInternalsSvc;
  #contentItemsSvc;
  #dialogRouter;
  constructor(context, snackBar) {
    this.context = context;
    this.snackBar = snackBar;
    this.dialogSettings = _angular_core__WEBPACK_IMPORTED_MODULE_12__.input.required();
    this.#appInternalsSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_app_internals_service__WEBPACK_IMPORTED_MODULE_11__.AppInternalsService);
    this.#contentItemsSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_content_items_services_content_items_service__WEBPACK_IMPORTED_MODULE_2__.ContentItemsService);
    this.#dialogRouter = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_8__.DialogRoutingService);
    this.appConfigurationUrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.signal)('');
    this.appConfigAvailable = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.signal)(false);
    // TODO: @2pp - you recently changed this to customSettings which is wrong, unclear why you did it
    // contentItem = this.#contentItemsSvc.getAllSig(eavConstants.contentTypes.customSettings, /* initial: */ null);
    this.contentItem = this.#contentItemsSvc.getAllSig(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants.contentTypes.appConfiguration, /* initial: */null);
    this.#refresh = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.signal)(0);
    this.appSettingsInternal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.computed)(() => {
      const _ = this.#refresh();
      return this.#appInternalsSvc.getAppInternals(undefined);
    });
    this.clipboard = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_services_clipboard_service__WEBPACK_IMPORTED_MODULE_9__.ClipboardService);
    this.appConfigurationUrl = this.urlToEdit();
    // debug
    // effect(() => {
    //   const ci = this.contentItem();
    //   console.log("CI", ci);
    // });
  }
  #refresh;
  ngOnInit() {
    this.#dialogRouter.doOnDialogClosed(() => {
      this.#refresh.update(v => ++v);
    });
  }
  ngOnDestroy() {
    this.snackBar.dismiss();
  }
  #urlTo(url) {
    return '#' + this.#dialogRouter.urlSubRoute(url);
  }
  urlToEdit() {
    let url = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.signal)('');
    this.#contentItemsSvc.getAll(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants.contentTypes.appConfiguration).subscribe(contentItems => {
      if (contentItems.length !== 1) return '';
      this.appConfigAvailable.set(true);
      url.set(this.#urlTo(`edit/${(0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_6__.convertFormToUrl)({
        items: [_shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_7__.EditPrep.editId(contentItems[0].Id)]
      })}`));
    });
    return url;
  }
  urlToOpenMetadata() {
    return this.#urlTo(_metadata__WEBPACK_IMPORTED_MODULE_3__.GoToMetadata.getUrlApp(this.context.appId, `Metadata for App: ${this.dialogSettings().Context.App.Name} (${this.context.appId})`));
  }
  formatValue(value) {
    return value === "" ? "-" : value ?? "-";
  }
  static {
    this.ɵfac = function AppConfigurationCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppConfigurationCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_10__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: AppConfigurationCardComponent,
      selectors: [["app-app-configuration-card"]],
      inputs: {
        dialogSettings: [1, "dialogSettings"]
      },
      decls: 1,
      vars: 1,
      consts: [[1, "eav-card"], [1, "eav-card-header"], [1, "eav-info-row"], [1, "eav-info-row__label"], [1, "eav-info-row__value"], [3, "click", "tippy"], [1, "eav-card-space-div"], ["align", "start"], [3, "link", "label", "icon"], ["mat-button", "", "tippy", "Edit app system resources", 1, "eav-button__with-icon", 3, "href", "disabled"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgePosition", "below after", "aria-hidden", "false", 1, "eav-icon", 3, "matBadge"], ["mat-button", "", 1, "eav-button__with-icon", 3, "href"]],
      template: function AppConfigurationCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, AppConfigurationCardComponent_Conditional_0_Template, 55, 18, "mat-card", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx.contentItem() ? 0 : -1);
        }
      },
      dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatAnchor, _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__.MatBadge, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_5__.TippyDirective, _admin_shared_docs_link_helper_docs_link_helper_component__WEBPACK_IMPORTED_MODULE_1__.DocsLinkHelperComponent],
      styles: [".eav-card-space-div[_ngcontent-%COMP%] {\n  min-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1jb25maWd1cmF0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6ImFwcC1jb25maWd1cmF0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWF2LWNhcmQtc3BhY2UtZGl2IHtcclxuICBtaW4taGVpZ2h0OiAzMHB4O1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9hcHAtY29uZmlndXJhdGlvbi9hcHAtY29uZmlndXJhdGlvbi1jYXJkL2FwcC1jb25maWd1cmF0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGO0FBQ0EsNFdBQTRXIiwic291cmNlc0NvbnRlbnQiOlsiLmVhdi1jYXJkLXNwYWNlLWRpdiB7XHJcbiAgbWluLWhlaWdodDogMzBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_app-configuration_app-configuration_component_ts.js.map