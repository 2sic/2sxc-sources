"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["default-projects_eav-ui_src_app_features_feature-names_ts-projects_eav-ui_src_app_features_sh-a1b9be"],{

/***/ 96133:
/*!***********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/features/feature-info-dialog/feature-info-dialog.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureInfoDialogComponent: () => (/* binding */ FeatureInfoDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _shared_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/helpers/copy-to-clipboard.helper */ 70519);
/* harmony import */ var _services_feature_detail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/feature-detail.service */ 45943);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/pipes/safe-html.pipe */ 69914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);



















function FeatureInfoDialogComponent_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 7)(4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FeatureInfoDialogComponent_Conditional_0_Conditional_15_Template_span_click_4_listener() {
      const id_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.copyToClipboard(id_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const id_r3 = ctx;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tippy", id_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](id_r3);
  }
}
function FeatureInfoDialogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-header")(2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 1)(8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 3)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, FeatureInfoDialogComponent_Conditional_0_Conditional_15_Template, 6, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-card-actions", 4)(17, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FeatureInfoDialogComponent_Conditional_0_Template_button_click_17_listener() {
      const feature_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.findOutMore(feature_r5.link));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FeatureInfoDialogComponent_Conditional_0_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const feature_r5 = ctx;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](feature_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 7, feature_r5.description), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 9, "Features.Status"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 11, feature_r5.isEnabled ? "Features.Active" : "Features.NotActive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](15, (tmp_6_0 = feature_r5.nameId) ? 15 : -1, tmp_6_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 13, "Features.FindOutMore"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 15, "Features.Close"), " ");
  }
}
class FeatureInfoDialogComponent {
  constructor(dialogData, dialogRef, snackBar, featureDetailService) {
    this.dialogData = dialogData;
    this.dialogRef = dialogRef;
    this.snackBar = snackBar;
    this.featureDetailService = featureDetailService;
  }
  ngOnInit() {
    this.viewModel$ = this.featureDetailService.getFeatureDetails(this.dialogData);
  }
  copyToClipboard(text) {
    (0,_shared_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_0__.copyToClipboard)(text);
    this.snackBar.open('Copied to clipboard', null, {
      duration: 2000
    });
  }
  findOutMore(link) {
    window.open(link, '_blank');
  }
  closeDialog() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function FeatureInfoDialogComponent_Factory(t) {
    return new (t || FeatureInfoDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_feature_detail_service__WEBPACK_IMPORTED_MODULE_1__.FeatureDetailService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: FeatureInfoDialogComponent,
    selectors: [["app-feature-info-dialog"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [[3, "innerHtml"], [1, "eav-info-row"], [1, "eav-info-row__label"], [1, "eav-info-row__value"], ["align", "end"], ["mat-raised-button", "", "color", "accent", 1, "eav-card-action-button", 3, "click"], ["mat-raised-button", "", 1, "eav-card-action-button", 3, "click"], [1, "eav-info-row__value", "eav_click"], [3, "click", "tippy"]],
    template: function FeatureInfoDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, FeatureInfoDialogComponent_Conditional_0_Template, 25, 17, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_2__.TippyDirective, _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_3__.SafeHtmlPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
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
  FieldShareConfigManagement: 'FieldShareConfigManagement'
};

/***/ }),

/***/ 45943:
/*!*****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/features/services/feature-detail.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureDetailService: () => (/* binding */ FeatureDetailService),
/* harmony export */   webApiRoot: () => (/* binding */ webApiRoot)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);





const webApiRoot = "admin/feature/";
class FeatureDetailService {
  constructor(http, dnnContext) {
    this.http = http;
    this.dnnContext = dnnContext;
  }
  getFeatureDetails(featureNameId) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiRoot + 'details'), {
      params: {
        nameId: featureNameId
      }
    });
  }
  static #_ = this.ɵfac = function FeatureDetailService_Factory(t) {
    return new (t || FeatureDetailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_2__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: FeatureDetailService,
    factory: FeatureDetailService.ɵfac
  });
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
/* harmony export */   FeatureComponentProviders: () => (/* binding */ FeatureComponentProviders),
/* harmony export */   openFeatureDialog: () => (/* binding */ openFeatureDialog)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _shared_services_features_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/features.service */ 44858);
/* harmony import */ var _feature_info_dialog_feature_info_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../feature-info-dialog/feature-info-dialog.component */ 96133);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _services_feature_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/feature-detail.service */ 45943);







const FeatureComponentProviders = [_services_feature_detail_service__WEBPACK_IMPORTED_MODULE_2__.FeatureDetailService];
class FeatureComponentBase {
  /** Feature NameId to check */
  set featureNameId(value) {
    this.featureNameId$.next(value);
  }
  /** By default, it will show if it's false - here we can change it to show if true */
  set showIf(value) {
    this.showIf$.next(value == true);
  }
  constructor() {
    this.featureNameId$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.showIf$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
    this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog);
    this.viewContainerRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewContainerRef);
    this.changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef);
    this.featuresService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_shared_services_features_service__WEBPACK_IMPORTED_MODULE_0__.FeaturesService);
    this.feature$ = this.featureNameId$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(featName => this.featuresService.get$(featName)));
    this.show$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this.feature$, this.showIf$]).pipe(
    // tap(data => console.log('2dm - show$', data)),
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(([feat, showIf]) => showIf == (feat?.isEnabled ?? false)));
  }
  openDialog() {
    openFeatureDialog(this.dialog, this.featureNameId$.value, this.viewContainerRef, this.changeDetectorRef);
  }
  static #_ = this.ɵfac = function FeatureComponentBase_Factory(t) {
    return new (t || FeatureComponentBase)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: FeatureComponentBase,
    inputs: {
      featureNameId: "featureNameId",
      showIf: "showIf"
    }
  });
}
function openFeatureDialog(dialog, featureId, viewContainerRef, changeDetectorRef) {
  dialog.open(_feature_info_dialog_feature_info_dialog_component__WEBPACK_IMPORTED_MODULE_1__.FeatureInfoDialogComponent, {
    autoFocus: false,
    data: featureId,
    viewContainerRef: viewContainerRef,
    width: '400px'
  });
  changeDetectorRef.markForCheck();
}

/***/ })

}]);
//# sourceMappingURL=default-projects_eav-ui_src_app_features_feature-names_ts-projects_eav-ui_src_app_features_sh-a1b9be.js.map