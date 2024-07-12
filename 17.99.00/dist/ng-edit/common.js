"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["common"],{

/***/ 41657:
/*!***********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/admin-shared/lightspeed-action/lightspeed-action.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LightSpeedActionsComponent: () => (/* binding */ LightSpeedActionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _shared_services_features_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/features.service */ 44858);
/* harmony import */ var _features_feature_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/feature-names */ 28136);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);











function LightSpeedActionsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LightSpeedActionsComponent_Conditional_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.openLightspeedFeatureInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " bolt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function LightSpeedActionsComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " bolt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LightSpeedActionsComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " bolt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LightSpeedActionsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LightSpeedActionsComponent_Conditional_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.openLightspeed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LightSpeedActionsComponent_Conditional_1_Conditional_1_Template, 2, 0, "mat-icon", 4)(2, LightSpeedActionsComponent_Conditional_1_Conditional_2_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("eav-grid-action-button ", ctx_r1.appHasLightSpeed ? "" : "disabled", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", ctx_r1.appHasLightSpeed ? ctx_r1.lightSpeed.Title : "Not yet configured for LightSpeed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](1, ctx_r1.appLightSpeedEnabled ? 1 : 2);
  }
}
/**
 * LightSpeedActionsComponent
 *
 * Specially meant to be used inside an AGGrid action, and receive the parameters from it.
 *
 */
class LightSpeedActionsComponent {
  constructor() {
    this.features = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_shared_services_features_service__WEBPACK_IMPORTED_MODULE_0__.FeaturesService);
    this.lightSpeedEnabled = this.features.isEnabled(_features_feature_names__WEBPACK_IMPORTED_MODULE_1__.FeatureNames.LightSpeed);
  }
  get appHasLightSpeed() {
    return this.lightSpeed?.Id != null;
  }
  get appLightSpeedEnabled() {
    return this.lightSpeed?.IsEnabled == true;
  }
  openLightspeed() {
    this.params.onOpenLightspeed(this.lightSpeedOwner);
  }
  openLightspeedFeatureInfo() {
    this.params.openLightspeedFeatureInfo();
  }
  static #_ = this.ɵfac = function LightSpeedActionsComponent_Factory(t) {
    return new (t || LightSpeedActionsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: LightSpeedActionsComponent,
    selectors: [["app-lightspeed-action"]],
    inputs: {
      lightSpeedOwner: "lightSpeedOwner",
      params: "params",
      lightSpeed: "lightSpeed"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 1,
    consts: [["tippy", "Lightspeed is disabled", 1, "eav-grid-action-button", "disabled"], ["tippy", "Lightspeed is disabled", 1, "eav-grid-action-button", "disabled", 3, "click"], ["matBadgeSize", "small", "matBadge", "\uD83D\uDC8E", "matBadgePosition", "below after", "aria-hidden", "false"], ["matRipple", "", 3, "click", "tippy"], ["matBadgeSize", "small", "matBadge", "\u2705", "matBadgePosition", "below after", "aria-hidden", "false"], ["matBadgeSize", "small", "matBadge", "\u26D4", "matBadgePosition", "below after", "aria-hidden", "false"]],
    template: function LightSpeedActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, LightSpeedActionsComponent_Conditional_0_Template, 3, 0, "div", 0)(1, LightSpeedActionsComponent_Conditional_1_Template, 3, 5);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](0, !ctx.lightSpeedEnabled() ? 0 : 1);
      }
    },
    dependencies: [_shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_2__.TippyDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadge, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRipple],
    encapsulation: 2
  });
}

/***/ }),

/***/ 58713:
/*!*************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/app-admin-helpers.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAdminHelpers: () => (/* binding */ AppAdminHelpers)
/* harmony export */ });
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants/eav.constants */ 50052);

class AppAdminHelpers {
  static getLightSpeedEditParams(appId) {
    const form = {
      items: [{
        ContentTypeName: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.appMetadata.LightSpeed.ContentTypeName,
        For: {
          Target: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.app.target,
          TargetType: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.app.targetType,
          Number: appId,
          Singleton: true
        }
      }]
    };
    return form;
  }
}

/***/ }),

/***/ 58362:
/*!*****************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/services/analyze-settings.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyzeSettingsService: () => (/* binding */ AnalyzeSettingsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../import-app/services/import-app.service */ 71772);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);









class AnalyzeSettingsService {
  constructor(http, context, dnnContext) {
    this.http = http;
    this.context = context;
    this.dnnContext = dnnContext;
  }
  getStack(part, key, view, stringifyValue = false) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_0__.webApiAppRoot + 'GetStack'), {
      params: {
        appId: this.context.appId.toString(),
        part,
        ...(key && {
          key
        }),
        ...(view && {
          view
        })
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(stack => {
      if (!stringifyValue) {
        return stack;
      }
      for (const stackItem of stack) {
        stackItem._value = JSON.stringify(stackItem.Value);
      }
      return stack;
    }));
  }
  static #_ = this.ɵfac = function AnalyzeSettingsService_Factory(t) {
    return new (t || AnalyzeSettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_1__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_5__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AnalyzeSettingsService,
    factory: AnalyzeSettingsService.ɵfac
  });
}

/***/ }),

/***/ 83804:
/*!********************************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/analyze-settings/analyze-settings-value/analyze-settings-value.component.ts ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyzeSettingsValueComponent: () => (/* binding */ AnalyzeSettingsValueComponent)
/* harmony export */ });
/* harmony import */ var _shared_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/helpers/copy-to-clipboard.helper */ 70519);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var projects_eav_ui_src_app_shared_helpers_json_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/eav-ui/src/app/shared/helpers/json.helpers */ 4038);
/* harmony import */ var projects_eav_ui_src_app_shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/eav-ui/src/app/shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);








class AnalyzeSettingsValueComponent {
  constructor(snackBar) {
    this.snackBar = snackBar;
  }
  agInit(params) {
    this.value = params.value;
  }
  refresh(params) {
    return true;
  }
  copy(text) {
    text = projects_eav_ui_src_app_shared_helpers_json_helpers__WEBPACK_IMPORTED_MODULE_1__.JsonHelpers.tryParse(text) ?? text;
    (0,_shared_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_0__.copyToClipboard)(text);
    this.snackBar.open('Copied to clipboard', null, {
      duration: 2000
    });
  }
  static #_ = this.ɵfac = function AnalyzeSettingsValueComponent_Factory(t) {
    return new (t || AnalyzeSettingsValueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AnalyzeSettingsValueComponent,
    selectors: [["app-analyze-settings-value"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 2,
    consts: [["matRipple", "", 1, "value-box", "highlight", 3, "click", "tippy"], [1, "value"]],
    template: function AnalyzeSettingsValueComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AnalyzeSettingsValueComponent_Template_div_click_0_listener() {
          return ctx.copy(ctx.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.value);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple, projects_eav_ui_src_app_shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_2__.TippyDirective],
    styles: [".value-box[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.value-box[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  width: 100%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9zdWItZGlhbG9ncy9hbmFseXplLXNldHRpbmdzL2FuYWx5emUtc2V0dGluZ3MtdmFsdWUvYW5hbHl6ZS1zZXR0aW5ncy12YWx1ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIudmFsdWUtYm94IHtcclxuICBwYWRkaW5nOiAwIDhweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAudmFsdWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 83583:
/*!*******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/services/apps-list.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppsListService: () => (/* binding */ AppsListService)
/* harmony export */ });
/* harmony import */ var _import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../import-app/services/import-app.service */ 71772);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);








class AppsListService {
  constructor(http, context, dnnContext) {
    this.http = http;
    this.context = context;
    this.dnnContext = dnnContext;
  }
  apiUrl(name) {
    return this.dnnContext.$2sxc.http.apiUrl(name);
  }
  getAll() {
    return this.http.get(this.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_0__.webApiAppRoot + 'list'), {
      params: {
        zoneId: this.context.zoneId.toString()
      }
    });
  }
  getInheritable() {
    return this.http.get(this.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_0__.webApiAppRoot + 'InheritableApps'), {
      params: {
        zoneId: this.context.zoneId.toString()
      }
    });
  }
  getPendingApps() {
    return this.http.get(this.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_0__.webApiAppRoot + 'GetPendingApps'), {
      params: {
        zoneId: this.context.zoneId.toString()
      }
    });
  }
  create(name, inheritAppId, templateId) {
    return this.http.post(this.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_0__.webApiAppRoot + 'app'), {}, {
      params: {
        zoneId: this.context.zoneId.toString(),
        name,
        ...(inheritAppId != null && {
          inheritAppId
        }),
        ...(templateId != null && {
          templateId
        })
      }
    });
  }
  installPendingApps(pendingApps) {
    return this.http.post(this.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_0__.webApiAppRoot + 'InstallPendingApps'), pendingApps, {
      params: {
        zoneId: this.context.zoneId.toString()
      }
    });
  }
  delete(appId) {
    return this.http.delete(this.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_0__.webApiAppRoot + 'app'), {
      params: {
        zoneId: this.context.zoneId.toString(),
        appId: appId.toString()
      }
    });
  }
  flushCache(appId) {
    return this.http.get(this.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_0__.webApiAppRoot + 'flushcache'), {
      params: {
        zoneId: this.context.zoneId.toString(),
        appId: appId.toString()
      }
    });
  }
  static #_ = this.ɵfac = function AppsListService_Factory(t) {
    return new (t || AppsListService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_1__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AppsListService,
    factory: AppsListService.ɵfac
  });
}

/***/ }),

/***/ 33992:
/*!*************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/services/features-config.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeaturesConfigService: () => (/* binding */ FeaturesConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/file-upload-dialog */ 34616);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);







const webApiLicense = 'sys/license/';
const webApiFeatSaveNew = 'admin/feature/SaveNew';
const webApiLicSummary = 'sys/license/Summary';
const webApiUpload = 'sys/license/Upload';
class FeaturesConfigService {
  constructor(http, dnnContext) {
    this.http = http;
    this.dnnContext = dnnContext;
  }
  saveFeatures(featuresStates) {
    return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiFeatSaveNew), featuresStates);
  }
  getLicenses() {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiLicSummary));
  }
  uploadLicense(file) {
    const formData = new FormData();
    formData.append('File', file);
    return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiUpload), formData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(info => {
      const result = {
        Success: info.Success,
        Messages: [{
          MessageType: info.Success ? _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_0__.FileUploadMessageTypes.Success : _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_0__.FileUploadMessageTypes.Error,
          Text: `License ${info.Success ? 'uploaded' : 'upload failed'}: ${info.Message}`
        }]
      };
      return result;
    }));
  }
  retrieveLicense() {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiLicense + 'Retrieve'));
  }
  static #_ = this.ɵfac = function FeaturesConfigService_Factory(t) {
    return new (t || FeaturesConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: FeaturesConfigService,
    factory: FeaturesConfigService.ɵfac
  });
}

/***/ }),

/***/ 67130:
/*!**************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/services/zone.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZoneService: () => (/* binding */ ZoneService)
/* harmony export */ });
/* harmony import */ var _import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../import-app/services/import-app.service */ 71772);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);








const webApiZoneRoot = 'admin/zone/';
class ZoneService {
  constructor(http, context, dnnContext) {
    this.http = http;
    this.context = context;
    this.dnnContext = dnnContext;
  }
  getLanguages() {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiZoneRoot + 'GetLanguages'));
  }
  toggleLanguage(code, enable) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiZoneRoot + 'SwitchLanguage'), {
      params: {
        cultureCode: code,
        enable: enable.toString()
      }
    });
  }
  getSystemInfo() {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiZoneRoot + 'GetSystemInfo'));
  }
  getLanguagesPermissions() {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_0__.webApiAppRoot + 'languages'), {
      params: {
        appId: this.context.appId
      }
    });
  }
  static #_ = this.ɵfac = function ZoneService_Factory(t) {
    return new (t || ZoneService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_1__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ZoneService,
    factory: ZoneService.ɵfac
  });
}

/***/ }),

/***/ 56360:
/*!***********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-export/services/content-export.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentExportService: () => (/* binding */ ContentExportService)
/* harmony export */ });
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-administration/services/content-types.service */ 17693);
/* harmony import */ var _edit_shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../edit/shared/services */ 22453);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);







class ContentExportService {
  constructor(context, dnnContext) {
    this.context = context;
    this.dnnContext = dnnContext;
  }
  exportContent(values, selectedIds) {
    const selectedIdsString = selectedIds ? '&selectedids=' + selectedIds.join() : '';
    const url = this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services__WEBPACK_IMPORTED_MODULE_1__.webApiEntityRoot + 'Download') + '?appId=' + this.context.appId + '&language=' + values.language + '&defaultLanguage=' + values.defaultLanguage + '&contentType=' + values.contentTypeStaticName + '&recordExport=' + values.recordExport + '&resourcesReferences=' + values.resourcesReferences + '&languageReferences=' + values.languageReferences + selectedIdsString;
    window.open(url, '_blank', '');
  }
  exportJson(typeName) {
    const url = this.dnnContext.$2sxc.http.apiUrl(_app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_0__.webApiTypeRoot + 'Json') + '?appId=' + this.context.appId + '&name=' + typeName;
    window.open(url, '_blank', '');
  }
  exportEntity(id, prefix, metadata) {
    const url = this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services__WEBPACK_IMPORTED_MODULE_1__.webApiEntityRoot + 'Json') + '?appId=' + this.context.appId + '&id=' + id + '&prefix=' + prefix + '&withMetadata=' + metadata;
    window.open(url, '_blank', '');
  }
  static #_ = this.ɵfac = function ContentExportService_Factory(t) {
    return new (t || ContentExportService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_2__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ContentExportService,
    factory: ContentExportService.ɵfac
  });
}

/***/ }),

/***/ 87449:
/*!******************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-items/content-items-dialog.config.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentItemsDialog: () => (/* binding */ contentItemsDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const contentItemsDialog = {
  name: 'CONTENT_ITEMS_DIALOG',
  initContext: true,
  panelSize: 'large',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        ContentItemsComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-projects_eav-ui_src_app_shared_pipes_safe-html_pipe_ts-node_modules_angular_material_-bba45a"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_select_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_radio_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_constants_default-grid-options_constants_ts-projects_e-814394"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_menu_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_ag-grid_column-definitions_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_slide-toggle_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_app-administration_services_index_ts-projects_eav-ui_src_app_-488733"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_content-items_content-items_component_ts-projects_eav-ui_src_app_cont-377579")]).then(__webpack_require__.bind(__webpack_require__, /*! ./content-items.component */ 89));
      return ContentItemsComponent;
    })();
  }
};

/***/ }),

/***/ 30200:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-items/content-items.routing.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentItemsRoutes: () => (/* binding */ contentItemsRoutes)
/* harmony export */ });
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../metadata */ 65217);
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ 85544);
/* harmony import */ var _import_content_item_import_content_item_dialog_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import-content-item/import-content-item-dialog.config */ 13998);
/* harmony import */ var _content_items_dialog_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-items-dialog.config */ 87449);
/* harmony import */ var _edit_edit_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit/edit.routing */ 90390);





const contentItemsRoutes = [{
  path: '',
  component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_1__.DialogEntryComponent,
  data: {
    dialog: _content_items_dialog_config__WEBPACK_IMPORTED_MODULE_3__.contentItemsDialog
  },
  children: [..._metadata__WEBPACK_IMPORTED_MODULE_0__.GoToMetadata.getRoutes(), {
    path: 'export/:contentTypeStaticName',
    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_content-export_content-export_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../content-export/content-export.routing */ 47562)).then(m => m.ContentExportRoutes)
  }, {
    path: 'export/:contentTypeStaticName/:selectedIds',
    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_content-export_content-export_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../content-export/content-export.routing */ 47562)).then(m => m.ContentExportRoutes)
  }, {
    path: 'import',
    component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_1__.DialogEntryComponent,
    data: {
      dialog: _import_content_item_import_content_item_dialog_config__WEBPACK_IMPORTED_MODULE_2__.importContentItemDialog
    }
  }, {
    path: ':contentTypeStaticName/import',
    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_content-import_content-import_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../content-import/content-import.routing */ 66880)).then(m => m.contentImportRoutes),
    data: {
      title: 'Import Items'
    }
  }, ..._edit_edit_routing__WEBPACK_IMPORTED_MODULE_4__.EditRoutesSubItems]
}];

/***/ }),

/***/ 13998:
/*!********************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-items/import-content-item/import-content-item-dialog.config.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   importContentItemDialog: () => (/* binding */ importContentItemDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const importContentItemDialog = {
  name: 'IMPORT_CONTENT_ITEM_DIALOG',
  initContext: false,
  panelSize: 'medium',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        ImportContentItemComponent: ImportContentItemComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-projects_eav-ui_src_app_shared_pipes_safe-html_pipe_ts-node_modules_angular_material_-bba45a"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_content-items_import-content-item_import-content-item_component_ts-pr-3ed00c")]).then(__webpack_require__.bind(__webpack_require__, /*! ./import-content-item.component */ 66754));
      return ImportContentItemComponent;
    })();
  }
};

/***/ }),

/***/ 336:
/*!*********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-items/services/content-items.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentItemsService: () => (/* binding */ ContentItemsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 95429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _content_type_fields_services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../content-type-fields/services/content-types-fields.service */ 83051);
/* harmony import */ var _edit_shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../edit/shared/services */ 22453);
/* harmony import */ var _shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/helpers/file-to-base64.helper */ 70693);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);











class ContentItemsService {
  constructor(http, context, dnnContext) {
    this.http = http;
    this.context = context;
    this.dnnContext = dnnContext;
  }
  getAll(contentTypeStaticName) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services__WEBPACK_IMPORTED_MODULE_1__.webApiEntityList), {
      params: {
        appId: this.context.appId.toString(),
        contentType: contentTypeStaticName
      }
    });
  }
  getColumns(contentTypeStaticName) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_content_type_fields_services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_0__.webApiFieldsAll), {
      params: {
        appId: this.context.appId.toString(),
        staticName: contentTypeStaticName
      }
    });
  }
  importItem(file) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)((0,_shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_2__.toBase64)(file)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(fileBase64 => {
      return this.http.post(this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services__WEBPACK_IMPORTED_MODULE_1__.webApiEntityRoot + 'upload'), {
        AppId: this.context.appId.toString(),
        ContentBase64: fileBase64
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(success => {
      const result = {
        Success: success,
        Messages: []
      };
      return result;
    }));
  }
  static #_ = this.ɵfac = function ContentItemsService_Factory(t) {
    return new (t || ContentItemsService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_3__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_9__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: ContentItemsService,
    factory: ContentItemsService.ɵfac
  });
}

/***/ }),

/***/ 36117:
/*!******************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/content-type-fields-dialog.config.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentTypeFieldsDialog: () => (/* binding */ contentTypeFieldsDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const contentTypeFieldsDialog = {
  name: 'CONTENT_TYPE_FIELDS_DIALOG',
  initContext: true,
  panelSize: 'large',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        ContentTypeFieldsComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_radio_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_constants_default-grid-options_constants_ts-projects_e-814394"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_menu_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_ag-grid_column-definitions_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_features_feature-names_ts-projects_eav-ui_src_app_features_sh-a1b9be"), __webpack_require__.e("default-projects_eav-ui_src_app_content-type-fields_content-type-fields_helpers_ts-projects_e-7a06ca"), __webpack_require__.e("projects_eav-ui_src_app_content-type-fields_content-type-fields_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./content-type-fields.component */ 213));
      return ContentTypeFieldsComponent;
    })();
  }
};

/***/ }),

/***/ 6708:
/*!************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/content-type-fields.routing.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentTypeFieldsRoutes: () => (/* binding */ contentTypeFieldsRoutes)
/* harmony export */ });
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../metadata */ 65217);
/* harmony import */ var _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../permissions/go-to-permissions */ 72437);
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ 85544);
/* harmony import */ var _content_type_fields_dialog_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-type-fields-dialog.config */ 36117);
/* harmony import */ var _edit_content_type_fields_edit_content_type_fields_dialog_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-content-type-fields/edit-content-type-fields-dialog.config */ 93040);
/* harmony import */ var _edit_edit_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edit/edit.routing */ 90390);






const contentTypeFieldsRoutes = [{
  path: '',
  component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_2__.DialogEntryComponent,
  data: {
    dialog: _content_type_fields_dialog_config__WEBPACK_IMPORTED_MODULE_3__.contentTypeFieldsDialog
  },
  children: [{
    path: 'add/:contentTypeStaticName',
    component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_2__.DialogEntryComponent,
    data: {
      dialog: _edit_content_type_fields_edit_content_type_fields_dialog_config__WEBPACK_IMPORTED_MODULE_4__.editContentTypeFieldsDialog
    }
  }, {
    path: 'update/:contentTypeStaticName/:id/:editMode',
    component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_2__.DialogEntryComponent,
    data: {
      dialog: _edit_content_type_fields_edit_content_type_fields_dialog_config__WEBPACK_IMPORTED_MODULE_4__.editContentTypeFieldsDialog
    }
  }, ..._metadata__WEBPACK_IMPORTED_MODULE_0__.GoToMetadata.getRoutes(), _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_1__.GoToPermissions.route, ..._edit_edit_routing__WEBPACK_IMPORTED_MODULE_5__.EditRoutesSubItems]
}];

/***/ }),

/***/ 93040:
/*!************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/edit-content-type-fields/edit-content-type-fields-dialog.config.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editContentTypeFieldsDialog: () => (/* binding */ editContentTypeFieldsDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const editContentTypeFieldsDialog = {
  name: 'EDIT_CONTENT_TYPE_FIELDS_DIALOG',
  initContext: false,
  panelSize: 'medium',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        EditContentTypeFieldsComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_select_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_features_feature-names_ts-projects_eav-ui_src_app_features_sh-a1b9be"), __webpack_require__.e("default-projects_eav-ui_src_app_content-type-fields_content-type-fields_helpers_ts-projects_e-7a06ca"), __webpack_require__.e("projects_eav-ui_src_app_content-type-fields_edit-content-type-fields_edit-content-type-fields-56a972")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-content-type-fields.component */ 15604));
      return EditContentTypeFieldsComponent;
    })();
  }
};

/***/ }),

/***/ 61426:
/*!***************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/tab-permissions/tab-permissions.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevRestTabPermissionsComponent: () => (/* binding */ DevRestTabPermissionsComponent)
/* harmony export */ });
/* harmony import */ var _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../permissions/go-to-permissions */ 72437);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);















function DevRestTabPermissionsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " person ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matBadge", ctx_r0.data.permissions.length);
  }
}
function DevRestTabPermissionsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DevRestTabPermissionsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 2)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Warning: you don't have any permissions configured. So only Super-Users (Host) will be able to use the API endpoints. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class DevRestTabPermissionsComponent {
  constructor(router, route) {
    this.router = router;
    this.route = route;
    this.gridOptions = this.buildGridOptions();
  }
  openPermissions() {
    this.router.navigate([_permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_0__.GoToPermissions.getUrlContentType(this.data.permissionTarget)], {
      relativeTo: this.route
    });
  }
  buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_1__.defaultGridOptions,
      columnDefs: [{
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_3__.ColumnDefinitions.Id
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_3__.ColumnDefinitions.TextWide,
        headerName: 'Name',
        field: 'Title'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_3__.ColumnDefinitions.TextWide,
        field: 'Identity'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_3__.ColumnDefinitions.TextWide,
        field: 'Condition'
      }, {
        field: 'Grant',
        width: 70,
        headerClass: 'dense',
        cellClass: 'no-outline'
      }]
    };
    return gridOptions;
  }
  static #_ = this.ɵfac = function DevRestTabPermissionsComponent_Factory(t) {
    return new (t || DevRestTabPermissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DevRestTabPermissionsComponent,
    selectors: [["app-dev-rest-tab-permissions"]],
    inputs: {
      data: "data"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 37,
    vars: 10,
    consts: [["mat-icon-button", "", "tippy", "Open permissions", 3, "click"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgePosition", "below after", "aria-hidden", "false", 3, "matBadge"], [1, "warning", "info-box"], [1, "ag-theme-material", 3, "rowData", "gridOptions"]],
    template: function DevRestTabPermissionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " This target ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DevRestTabPermissionsComponent_Template_button_click_7_listener() {
          return ctx.openPermissions();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, DevRestTabPermissionsComponent_Conditional_8_Template, 2, 1, "mat-icon", 1)(9, DevRestTabPermissionsComponent_Conditional_9_Template, 2, 0, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, DevRestTabPermissionsComponent_Conditional_10_Template, 4, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "ag-grid-angular", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Super-Users (Host) can use all Endpoints");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " As a super-user you can always access these REST endpoints, so this will make development easy. Just remember to change the content-type permissions when you publish your work to public pages.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Set permissions for visitors to use this");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " To let JavaScript access the REST endpoints for normal users, you must set the permissions of the content-type. Usually you will just want to set it like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "if user has view-permissions, let him read this content-type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, ". In rare cases (eg. JS based forms) you may also want to give it some write permissions. Just be careful. If you give write permissions, you will usually ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "only");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " want to give create, but not edit.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Setting permissions for use outside of DNN");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, " When calling API endpoints from a DNN page you will usually use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "$2sxc");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, " or the DNN Services-Framework. These automatically add some HTTP-Headers (see tab about HTTP Headers) which let DNN determine that the API-Call was made on a specific page/module - and DNN uses this to check the permissions.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " IF you are calling the endpoint from outside of DNN then these headers will be missing. Because of this, permissions saying \"If has VIEW permissions, allow read\" will fail - because DNN cannot determine if the user has view permissions.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " So to enable use from external, the condition must be \"If has ANONYMOUS permissions, allow ...\". Because the ANONYMOUS check passes even if DNN doesn't know what page the module is on.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Permissions (", ctx.data.permissions.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" has ", ctx.data.permissions.length, " permissions configured. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](8, ctx.data.permissions.length ? 8 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](9, !ctx.data.permissions.length ? 9 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](10, !ctx.data.permissions.length ? 10 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("height", 33 + ctx.data.permissions.length * 48 + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowData", ctx.data.permissions)("gridOptions", ctx.gridOptions);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_2__.TippyDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__.MatBadge, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_4__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_10__.AgGridAngular],
    encapsulation: 2
  });
}

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
/* harmony import */ var _shared_base_feature_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/base-feature.component */ 9006);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _services_feature_detail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/feature-detail.service */ 45943);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);










function FeatureTextInfoComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FeatureTextInfoComponent_Conditional_0_Conditional_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.openDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 7, "Features.Tooltip", vm_r3.feature));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("icon icon-", vm_r3.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](vm_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 10, "Features.FeatureNotActivated"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 12, "Features.ClickToFindOutMore"));
  }
}
function FeatureTextInfoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, FeatureTextInfoComponent_Conditional_0_Conditional_0_Template, 11, 14, "div", 1);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](0, ctx.show ? 0 : -1);
  }
}
function FeatureTextInfoComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FeatureTextInfoComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class FeatureTextInfoComponent extends _shared_base_feature_component__WEBPACK_IMPORTED_MODULE_0__.FeatureComponentBase {
  set asInfo(value) {
    this.asInfo$.next(value);
  }
  constructor() {
    super();
    this.asInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.feature$, this.asInfo$, this.show$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(([feature, asInfo, show]) => ({
      feature,
      icon: asInfo ? 'info' : 'warning',
      show
    })));
  }
  static #_ = this.ɵfac = function FeatureTextInfoComponent_Factory(t) {
    return new (t || FeatureTextInfoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: FeatureTextInfoComponent,
    selectors: [["app-feature-text-info"]],
    inputs: {
      asInfo: "asInfo"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([..._shared_base_feature_component__WEBPACK_IMPORTED_MODULE_0__.FeatureComponentProviders, _services_feature_detail_service__WEBPACK_IMPORTED_MODULE_1__.FeatureDetailService]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 3,
    consts: [["loading", ""], [1, "feature-text-info", 3, "tippy"], [1, "feature-text-info", 3, "click", "tippy"], [1, "feature-text-info-content"], [1, "feature-text-info-title"], [1, "feature-text-info-subtitle"]],
    template: function FeatureTextInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, FeatureTextInfoComponent_Conditional_0_Template, 1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FeatureTextInfoComponent_Conditional_2_Template, 2, 0)(3, FeatureTextInfoComponent_ng_template_3_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](0, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : 2, tmp_1_0);
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_2__.TippyDirective],
    styles: [".feature-text-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  cursor: pointer;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 5px;\n  margin-bottom: 10px;\n}\n\n.feature-text-info-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  margin-left: 10px;\n}\n\n.feature-text-info-title[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\n.feature-text-info-subtitle[_ngcontent-%COMP%] {\n  font-size: medium;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 45px;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.icon-warning[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2ZlYXR1cmVzL2ZlYXR1cmUtdGV4dC1pbmZvL2ZlYXR1cmUtdGV4dC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSx5SEFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVhdHVyZS10ZXh0LWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggLTFweCByZ2IoMCAwIDAgLyAyMCUpLCAwcHggMXB4IDFweCAwcHggcmdiKDAgMCAwIC8gMTQlKSwgMHB4IDFweCAzcHggMHB4IHJnYigwIDAgMCAvIDEyJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZmVhdHVyZS10ZXh0LWluZm8tY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZmVhdHVyZS10ZXh0LWluZm8tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5mZWF0dXJlLXRleHQtaW5mby1zdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBmb250LXNpemU6IDQ1cHg7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5pY29uLXdhcm5pbmcge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 59669:
/*!***************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/manage-content-list/services/content-group.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentGroupService: () => (/* binding */ ContentGroupService)
/* harmony export */ });
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);







const webApiContentGroup = 'cms/contentgroup/';
class ContentGroupService {
  constructor(http, context, dnnContext) {
    this.http = http;
    this.context = context;
    this.dnnContext = dnnContext;
  }
  getItems(item) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiContentGroup + 'replace'), {
      params: {
        appId: this.context.appId.toString(),
        guid: item.guid,
        part: item.part,
        index: item.index.toString()
      }
    });
  }
  saveItem(item) {
    return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiContentGroup + 'replace'), {}, {
      params: {
        guid: item.guid,
        part: item.part,
        index: item.index.toString(),
        entityId: item.id.toString(),
        add: `${item.add}`
      }
    });
  }
  removeItem(contentGroup, index) {
    // note: the server checks if the part == 'content' and will automatically treat it as a pair with presentation
    return this.http.delete(this.dnnContext.$2sxc.http.apiUrl('cms/list/delete'), {
      params: {
        index: index,
        parent: contentGroup.guid,
        fields: contentGroup.part
      }
    });
  }
  getList(contentGroup) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiContentGroup + 'itemlist'), {
      params: {
        appId: this.context.appId.toString(),
        guid: contentGroup.guid,
        part: contentGroup.part
      }
    });
  }
  saveList(contentGroup, resortedList) {
    return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiContentGroup + 'itemlist'), resortedList, {
      params: {
        appId: this.context.appId.toString(),
        guid: contentGroup.guid,
        part: contentGroup.part
      }
    });
  }
  getHeader(contentGroup) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiContentGroup + 'header'), {
      params: {
        appId: this.context.appId.toString(),
        guid: contentGroup.guid
      }
    });
  }
  static #_ = this.ɵfac = function ContentGroupService_Factory(t) {
    return new (t || ContentGroupService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_0__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_3__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ContentGroupService,
    factory: ContentGroupService.ɵfac
  });
}

/***/ }),

/***/ 41463:
/*!************************************************************!*\
  !*** ./projects/eav-ui/src/app/metadata/go-to-metadata.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoToMetadata: () => (/* binding */ GoToMetadata)
/* harmony export */ });
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants/eav.constants */ 50052);

class GoToMetadata {
  static getRoutes() {
    const defaultRoute = {
      path: 'metadata/:targetType/:keyType/:key',
      loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_metadata_metadata_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./metadata.routing */ 56536)).then(m => m.metadataRoutes),
      data: {
        title: 'Metadata'
      }
    };
    const routes = [defaultRoute, {
      ...defaultRoute,
      path: `${defaultRoute.path}/title/:title`
    }, {
      ...defaultRoute,
      path: `${defaultRoute.path}/contentType/:contentTypeStaticName`
    }, {
      ...defaultRoute,
      path: `${defaultRoute.path}/title/:title/contentType/:contentTypeStaticName`
    }];
    return routes;
  }
  static getUrl(targetType, keyType, key, dialogTitle, contentTypeStaticName) {
    let url = `metadata/${targetType}/${keyType}/${key}`;
    if (dialogTitle) {
      url += `/title/${encodeURIComponent(dialogTitle)}`;
    }
    if (contentTypeStaticName) {
      url += `/contentType/${contentTypeStaticName}`;
    }
    return url;
  }
  static getUrlApp(appId, dialogTitle) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.app.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.app.keyType, appId.toString(), dialogTitle);
  }
  static getUrlAttribute(attributeId, dialogTitle, contentTypeStaticName) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.attribute.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.attribute.keyType, attributeId.toString(), dialogTitle, contentTypeStaticName);
  }
  static getUrlContentType(staticName, dialogTitle) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.contentType.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.contentType.keyType, staticName, dialogTitle);
  }
  static getUrlEntity(guid, dialogTitle, contentTypeStaticName) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.entity.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.entity.keyType, guid, dialogTitle, contentTypeStaticName);
  }
}

/***/ }),

/***/ 65217:
/*!***************************************************!*\
  !*** ./projects/eav-ui/src/app/metadata/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoToMetadata: () => (/* reexport safe */ _go_to_metadata__WEBPACK_IMPORTED_MODULE_1__.GoToMetadata)
/* harmony export */ });
/* harmony import */ var _models_metadata_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/metadata.model */ 11884);
/* harmony import */ var _go_to_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./go-to-metadata */ 41463);



/***/ }),

/***/ 11884:
/*!*******************************************************************!*\
  !*** ./projects/eav-ui/src/app/metadata/models/metadata.model.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 5858:
/*!************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/constants/dropdown-insert-value.constant.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dropdownInsertValue: () => (/* binding */ dropdownInsertValue)
/* harmony export */ });
const dropdownInsertValue = 'DROPDOWN_INSERT_VALUE';

/***/ }),

/***/ 4038:
/*!****************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/helpers/json.helpers.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JsonHelpers: () => (/* binding */ JsonHelpers)
/* harmony export */ });
class JsonHelpers {
  /** Tries to parse string as JSON */
  static tryParse(input) {
    try {
      return JSON.parse(input);
    } catch {}
  }
}

/***/ }),

/***/ 33518:
/*!***********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/helpers/load-scripts.helper.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadScripts: () => (/* binding */ loadScripts)
/* harmony export */ });
function loadScripts(scriptObjects, callback, iteration = 0) {
  const isLast = scriptObjects.length === iteration + 1;
  const newCallback = isLast ? callback : loadScripts.bind(this, scriptObjects, callback, iteration + 1);
  const scrObj = scriptObjects[iteration];
  const global = typeof scrObj.test === 'string' ? scrObj.test : null;
  const test = typeof scrObj.test === 'function' ? scrObj.test : null;
  const w = window;
  if (global != null && !!w[global]) {
    callback();
    return;
  }
  if (test != null && test()) {
    callback();
    return;
  }
  window.require([scrObj.src], exportedVar => {
    if (exportedVar && !w[global]) {
      w[global] = exportedVar;
    }
    newCallback();
  });
}

/***/ }),

/***/ 46666:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/models/dialog-context.models.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppScopes: () => (/* binding */ AppScopes)
/* harmony export */ });
const AppScopes = {
  App: 'App',
  Site: 'Site',
  Global: 'Global'
};
// export interface DialogContextFeature {
//   NameId: string;
//   Enabled: boolean;
// }

/***/ }),

/***/ 52785:
/*!*******************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/services/dialog.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogService: () => (/* binding */ DialogService)
/* harmony export */ });
/* harmony import */ var _constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/dialog-type.constants */ 37567);
/* harmony import */ var _constants_session_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/session.constants */ 38172);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);

// tslint:disable-next-line:max-line-length




class DialogService {
  constructor(context) {
    this.context = context;
  }
  openCodeFile(path, isShared, templateId) {
    const dialog = _constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_0__.DialogTypeConstants.Develop;
    const form = {
      items: [{
        Path: path,
        ...(templateId != null && {
          EntityId: templateId
        })
      }]
    };
    const hashParams = {
      ...this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyDialog, dialog),
      ...this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyIsShared, isShared.toString()),
      ...this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyItems, JSON.stringify(form.items))
    };
    const url = this.buildFullUrl(hashParams);
    window.open(url, '_blank');
  }
  openQueryDesigner(queryId) {
    const dialog = _constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_0__.DialogTypeConstants.PipelineDesigner;
    const form = {
      items: [{
        EntityId: queryId
      }]
    };
    const hashParams = {
      ...this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyDialog, dialog),
      ...this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyPipelineId, queryId.toString()),
      ...this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyItems, JSON.stringify(form.items))
    };
    const url = this.buildFullUrl(hashParams);
    window.open(url, '_blank');
  }
  openAppsManagement(zoneId, tab) {
    const extras = {
      ...(tab && {
        tab
      })
    };
    const hashParams = {
      ...this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyZoneId, zoneId.toString()),
      ...this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyDialog, _constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_0__.DialogTypeConstants.Zone),
      ...(Object.keys(extras).length ? this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyExtras, JSON.stringify(extras)) : '')
    };
    const url = this.buildFullUrl(hashParams);
    window.open(url, '_blank');
  }
  openAppAdministration(zoneId, appId, tab, scope) {
    const extras = {
      ...(tab && {
        tab
      }),
      ...(scope && {
        scope
      })
    };
    const hashParams = {
      ...this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyZoneId, zoneId.toString()),
      ...this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyAppId, appId.toString()),
      ...this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyDialog, _constants_dialog_type_constants__WEBPACK_IMPORTED_MODULE_0__.DialogTypeConstants.App),
      ...(Object.keys(extras).length ? this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyExtras, JSON.stringify(extras)) : '')
    };
    const url = this.buildFullUrl(hashParams);
    window.open(url, '_blank');
  }
  /** A lot of the link is identical when opening the admin-dialogs in a new window */
  buildSharedHashParams() {
    const hashParams = {
      ...this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyZoneId, this.context.zoneId.toString()),
      ...this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyAppId, this.context.appId.toString()),
      ...this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyModuleId, this.context.moduleId?.toString()),
      ...this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyContentBlockId, this.context.contentBlockId?.toString()),
      ...this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyPartOfPage),
      ...(sessionStorage.getItem(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyDebug) ? this.buildHashParam(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyDebug) : {})
    };
    return hashParams;
  }
  /** Encodes param if necessary */
  buildHashParam(key, value) {
    const rawKey = key.replace(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.prefix, '');
    const valueTemp = value != null ? value : sessionStorage.getItem(key);
    const rawValue = encodeURIComponent(valueTemp);
    const hashParam = {
      [rawKey]: rawValue
    };
    return hashParam;
  }
  buildFullUrl(hashParams) {
    const oldHref = sessionStorage.getItem(_constants_session_constants__WEBPACK_IMPORTED_MODULE_1__.keyUrl);
    const oldUrl = new URL(oldHref);
    const newHref = oldUrl.origin + oldUrl.pathname + oldUrl.search;
    const allHashParams = {
      ...this.buildSharedHashParams(),
      ...hashParams
    };
    const hashUrl = Object.entries(allHashParams).reduce((acc, [key, value]) => `${acc}&${key}=${value}`, '').replace('&', '#');
    return newHref + hashUrl;
  }
  static #_ = this.ɵfac = function DialogService_Factory(t) {
    return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_context__WEBPACK_IMPORTED_MODULE_2__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: DialogService,
    factory: DialogService.ɵfac
  });
}

/***/ })

}]);
//# sourceMappingURL=common.js.map