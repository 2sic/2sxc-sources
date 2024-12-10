"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["default-projects_eav-ui_src_app_features_shared_base-feature_component_ts"],{

/***/ 51191:
/*!*************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/licence-info/feature-details-dialog/feature-details-dialog.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureDetailsDialogComponent: () => (/* binding */ FeatureDetailsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _core_transient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/transient */ 12938);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/pipes/safe-html.pipe */ 69914);
/* harmony import */ var _shared_services_clipboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/clipboard.service */ 25081);
/* harmony import */ var _shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/signals/signal.utilities */ 67993);
















function FeatureDetailsDialogComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "Features.Status"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 4, ctx_r1.feature().isEnabled ? "Features.Active" : "Features.NotActive"));
  }
}
function FeatureDetailsDialogComponent_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "GUID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 8)(4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FeatureDetailsDialogComponent_Conditional_0_Conditional_14_Template_span_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.clipboard.copyToClipboard(ctx_r1.feature().guid));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.feature().guid);
  }
}
function FeatureDetailsDialogComponent_Conditional_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FeatureDetailsDialogComponent_Conditional_0_Conditional_26_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.dialog.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function FeatureDetailsDialogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-header")(2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 1)(8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 3)(11, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FeatureDetailsDialogComponent_Conditional_0_Template_span_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.clipboard.copyToClipboard(ctx_r1.feature().nameId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, FeatureDetailsDialogComponent_Conditional_0_Conditional_13_Template, 8, 6, "div", 1)(14, FeatureDetailsDialogComponent_Conditional_0_Conditional_14_Template, 6, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 1)(16, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Security Rating:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 3)(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-card-actions", 5)(22, "a", 6)(23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Find out more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, FeatureDetailsDialogComponent_Conditional_0_Conditional_26_Template, 2, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.feature().name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 8, ctx_r1.feature().description), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.feature().nameId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r1.mySpecs().showStatus ? 13 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r1.mySpecs().showGuid ? 14 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.feature().security.Impact + ": " + ctx_r1.feature().security.Message);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r1.feature().link, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r1.mySpecs().showClose != false ? 26 : -1);
  }
}
class FeatureDetailsDialogComponent {
  constructor(dialogSpecs, dialog) {
    this.dialogSpecs = dialogSpecs;
    this.dialog = dialog;
    this.specs = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.input)();
    this.mySpecs = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_3__.computedObj)('mySpecs', () => this.specs() ?? this.dialogSpecs);
    this.feature = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_3__.computedObj)('feature', () => this.mySpecs()?.feature);
    this.clipboard = (0,_core_transient__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_services_clipboard_service__WEBPACK_IMPORTED_MODULE_2__.ClipboardService);
  }
  static {
    this.ɵfac = function FeatureDetailsDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FeatureDetailsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FeatureDetailsDialogComponent,
      selectors: [["app-feature-details-dialog"]],
      inputs: {
        specs: [1, "specs"]
      },
      decls: 1,
      vars: 1,
      consts: [[3, "innerHtml"], [1, "eav-info-row"], [1, "eav-info-row__label"], [1, "eav-info-row__value"], [3, "click"], ["align", "end"], ["target", "_blank", "mat-raised-button", "", "color", "accent", 1, "eav-card-action-button", 3, "href"], ["mat-raised-button", "", 1, "eav-card-action-button"], [1, "eav-info-row__value", "eav_click"], ["mat-raised-button", "", 1, "eav-card-action-button", 3, "click"]],
      template: function FeatureDetailsDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, FeatureDetailsDialogComponent_Conditional_0_Template, 27, 10, "mat-card");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.feature() ? 0 : -1);
        }
      },
      dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_1__.SafeHtmlPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 18514:
/*!***********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/features/feature-info-dialog/feature-info-dialog.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureInfoDialogComponent: () => (/* binding */ FeatureInfoDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var projects_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/core */ 88692);
/* harmony import */ var _apps_management_licence_info_feature_details_dialog_feature_details_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apps-management/licence-info/feature-details-dialog/feature-details-dialog.component */ 51191);
/* harmony import */ var _shared_services_clipboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/clipboard.service */ 25081);
/* harmony import */ var _services_feature_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/feature-detail.service */ 45943);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);










const _c0 = a0 => ({
  feature: a0,
  showGuid: false,
  showStatus: true,
  showClose: true
});
function FeatureInfoDialogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-feature-details-dialog", 0);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("specs", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c0, ctx));
  }
}
class FeatureInfoDialogComponent {
  #featureDetailSvc;
  constructor(dialogData, dialog, route) {
    this.dialogData = dialogData;
    this.dialog = dialog;
    this.route = route;
    this.#featureDetailSvc = (0,projects_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_feature_detail_service__WEBPACK_IMPORTED_MODULE_3__.FeatureDetailService);
    this.featureId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)('');
    this.clipboard = (0,projects_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_services_clipboard_service__WEBPACK_IMPORTED_MODULE_2__.ClipboardService);
  }
  ngOnInit() {
    this.featureId.set(this.route.snapshot.data['featureId'] || this.dialogData || '');
    this.featureDetails = this.#featureDetailSvc.getFeatureDetail(this.featureId());
  }
  static {
    this.ɵfac = function FeatureInfoDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FeatureInfoDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FeatureInfoDialogComponent,
      selectors: [["app-feature-info-dialog"]],
      decls: 1,
      vars: 1,
      consts: [[3, "specs"]],
      template: function FeatureInfoDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, FeatureInfoDialogComponent_Conditional_0_Template, 1, 3, "app-feature-details-dialog", 0);
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"]((tmp_0_0 = ctx.featureDetails()) ? 0 : -1, tmp_0_0);
        }
      },
      dependencies: [_apps_management_licence_info_feature_details_dialog_feature_details_dialog_component__WEBPACK_IMPORTED_MODULE_1__.FeatureDetailsDialogComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 45943:
/*!*****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/features/services/feature-detail.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureDetailService: () => (/* binding */ FeatureDetailService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);



const webApiFeatureDetails = "admin/feature/details";
class FeatureDetailService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__.HttpServiceBase {
  getFeatureDetail(nameId) {
    return this.getSignal(webApiFeatureDetails, {
      params: {
        nameId
      }
    });
  }
  getFeatureDetails(nameIds) {
    const featureList = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([]);
    for (const nameId of nameIds) {
      this.xx(nameId).subscribe(feature => {
        featureList.update(prev => [...prev, feature]);
      });
    }
    return featureList;
  }
  // TODO: Daniel fragen, getFeatureDetails(nameIds: string[]) ist nicht korrekt
  // getFeatureDetails(nameIds: string[]): Signal<Feature[]> {
  //   console.log('getFeatureDetails', nameIds);
  //   const featureList = signal<Feature[]>([]);
  //   for (const nameId of nameIds) {
  //   console.log('getFeatureDetails', nameId);
  //     const x = this.getFeatureDetail(nameId) ;
  //     featureList.update(prev => [...prev, x()]);
  //   }
  //   return featureList;
  // }
  // Remove later
  xx(nameId) {
    return this.getHttpApiUrl(webApiFeatureDetails, {
      params: {
        nameId
      }
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵFeatureDetailService_BaseFactory;
      return function FeatureDetailService_Factory(__ngFactoryType__) {
        return (ɵFeatureDetailService_BaseFactory || (ɵFeatureDetailService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](FeatureDetailService)))(__ngFactoryType__ || FeatureDetailService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FeatureDetailService,
      factory: FeatureDetailService.ɵfac
    });
  }
}

/***/ }),

/***/ 9006:
/*!***************************************************************************!*\
  !*** ./projects/eav-ui/src/app/features/shared/base-feature.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureComponentBase: () => (/* binding */ FeatureComponentBase),
/* harmony export */   openFeatureDialog: () => (/* binding */ openFeatureDialog)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/signals/signal.utilities */ 67993);
/* harmony import */ var _feature_info_dialog_feature_info_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../feature-info-dialog/feature-info-dialog.component */ 18514);
/* harmony import */ var _features_scoped_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features-scoped.service */ 74824);






/**
 * Base component for various UI components which inform that a feature is not enabled.
 * It's meant to show the indicator/warning, and open a dialog with more information about the feature.
 */
class FeatureComponentBase {
  #matDialog;
  #viewContainerRef;
  #changeDetectorRef;
  #featuresService;
  constructor() {
    /** Feature NameId to check */
    this.featureNameId = _angular_core__WEBPACK_IMPORTED_MODULE_3__.input.required();
    /** When to show it - typically when it is _not_ enabled (default) */
    this.showIf = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(false);
    this.#matDialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog);
    this.#viewContainerRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef);
    this.#changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef);
    this.#featuresService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_features_scoped_service__WEBPACK_IMPORTED_MODULE_2__.FeaturesScopedService);
    this.feature = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_0__.computedObj)('feature', () => this.#featuresService.getCurrent(this.featureNameId()));
    this.show = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_0__.computedObj)('show', () => {
      const feat = this.feature();
      if (feat == null) return false;
      return this.showIf() == (feat?.isEnabled ?? false);
    });
  }
  openDialog() {
    openFeatureDialog(this.#matDialog, this.featureNameId(), this.#viewContainerRef, this.#changeDetectorRef);
  }
  static {
    this.ɵfac = function FeatureComponentBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FeatureComponentBase)();
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: FeatureComponentBase,
      inputs: {
        featureNameId: [1, "featureNameId"],
        showIf: [1, "showIf"]
      }
    });
  }
}
function openFeatureDialog(dialog, featureId, viewContainerRef, changeDetectorRef) {
  dialog.open(_feature_info_dialog_feature_info_dialog_component__WEBPACK_IMPORTED_MODULE_1__.FeatureInfoDialogComponent, {
    autoFocus: false,
    data: featureId,
    viewContainerRef: viewContainerRef,
    width: '400px'
  });
  changeDetectorRef?.markForCheck();
}

/***/ }),

/***/ 25081:
/*!**********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/services/clipboard.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClipboardService: () => (/* binding */ ClipboardService)
/* harmony export */ });
/* harmony import */ var _helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/copy-to-clipboard.helper */ 70519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);




class ClipboardService {
  constructor(snackBar) {
    this.snackBar = snackBar;
  }
  copyToClipboard(text) {
    (0,_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_0__.copyToClipboard)(text);
    this.snackBar.open('Copied to clipboard', null, {
      duration: 2000
    });
  }
  static {
    this.ɵfac = function ClipboardService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClipboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ClipboardService,
      factory: ClipboardService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-projects_eav-ui_src_app_features_shared_base-feature_component_ts.js.map