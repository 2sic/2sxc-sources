"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_app-configuration_app-configuration_component_ts-p-970788"],{

/***/ 76761:
/*!*********************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/app-configuration/app-configuration-card/app-configuration-card.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppConfigurationCardComponent: () => (/* binding */ AppConfigurationCardComponent)
/* harmony export */ });
/* harmony import */ var _content_items_services_content_items_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../content-items/services/content-items.service */ 336);
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../metadata */ 65217);
/* harmony import */ var _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/base-with-child-dialog.component */ 61735);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/context */ 68873);
/* harmony import */ var _services_app_internals_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/app-internals.service */ 14740);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/helpers/copy-to-clipboard.helper */ 70519);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);



























const _c0 = () => ({
  link: "https://docs.2sxc.org/basics/app/configuration.html"
});
function AppConfigurationCardComponent_Conditional_0_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
  }
}
function AppConfigurationCardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-card", 1)(1, "mat-card-header", 2)(2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "redeem");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 3)(9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 5)(12, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppConfigurationCardComponent_Conditional_0_Template_span_click_12_listener() {
      const vm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.copyToClipboard(vm_r2.displayName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 3)(15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Folder:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 5)(18, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppConfigurationCardComponent_Conditional_0_Template_span_click_18_listener() {
      const vm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.copyToClipboard(vm_r2.folder));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 3)(21, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Version:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 5)(24, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppConfigurationCardComponent_Conditional_0_Template_span_click_24_listener() {
      const vm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.copyToClipboard(vm_r2.version));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 3)(27, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "For");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 5)(30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "2sxc: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppConfigurationCardComponent_Conditional_0_Template_span_click_32_listener() {
      const vm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.copyToClipboard(vm_r2.toSxc));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, " DNN: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppConfigurationCardComponent_Conditional_0_Template_span_click_36_listener() {
      const vm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.copyToClipboard(vm_r2.dnn));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, " Oqt: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppConfigurationCardComponent_Conditional_0_Template_span_click_40_listener() {
      const vm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.copyToClipboard(vm_r2.oqt));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](42, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "mat-card-actions", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, AppConfigurationCardComponent_Conditional_0_ng_container_44_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppConfigurationCardComponent_Conditional_0_Template_button_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.edit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppConfigurationCardComponent_Conditional_0_Template_button_click_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.openMetadata());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52, "local_offer");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54, "Metadata");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const vm_r2 = ctx;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const docsLink_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("tippy", "Click to copy to clipboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](vm_r2.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("tippy", "Click to copy to clipboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](vm_r2.folder);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("tippy", "Click to copy to clipboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](vm_r2.version);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("tippy", "Click to copy to clipboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", vm_r2.toSxc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("tippy", "Click to copy to clipboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", vm_r2.dnn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("tippy", "Click to copy to clipboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", vm_r2.oqt, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", docsLink_r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](16, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matBadge", vm_r2.appConfigurationsCount || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matBadge", vm_r2.appMetadataCount || null);
  }
}
function AppConfigurationCardComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 12)(1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const icon_r5 = ctx.$implicit;
    const label_r6 = ctx.$implicit;
    const link_r7 = ctx.link;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("href", link_r7, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("tippy", "online documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]((tmp_7_0 = icon_r5) !== null && tmp_7_0 !== undefined ? tmp_7_0 : "menu_book");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](label_r6);
  }
}
class AppConfigurationCardComponent extends _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_2__.BaseWithChildDialogComponent {
  constructor(router, route, contentItemsService, context, snackBar, appInternalsService) {
    super(router, route);
    this.router = router;
    this.route = route;
    this.contentItemsService = contentItemsService;
    this.context = context;
    this.snackBar = snackBar;
    this.appInternalsService = appInternalsService;
    // More proper ViewModel
    this.appSettingsInternal$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    // New with proper ViewModel
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([this.appSettingsInternal$, this.contentItemsService.getAll(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.contentTypes.appConfiguration)]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(([settings, contentItems]) => {
      const contentItem = contentItems[0];
      const result = {
        appConfigurationsCount: settings.EntityLists.ToSxcContentApp.length,
        appMetadataCount: settings.MetadataList.Items.length,
        displayName: contentItem?.DisplayName ?? '-',
        folder: contentItem?.Folder ?? '-',
        version: contentItem?.Version ?? '-',
        toSxc: contentItem?.RequiredVersion ?? '-',
        dnn: contentItem?.RequiredDnnVersion ?? '-',
        oqt: contentItem?.RequiredOqtaneVersion ?? '-'
      };
      return result;
    }));
  }
  ngOnInit() {
    this.fetchSettings();
    this.subscriptions.add(this.childDialogClosed$().subscribe(() => {
      this.fetchSettings();
    }));
  }
  ngOnDestroy() {
    this.snackBar.dismiss();
    super.ngOnDestroy();
  }
  copyToClipboard(text) {
    (0,_shared_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_7__.copyToClipboard)(text);
    this.snackBar.open('Copied to clipboard', null, {
      duration: 2000
    });
  }
  edit() {
    const staticName = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.contentTypes.appConfiguration;
    this.contentItemsService.getAll(staticName).subscribe(contentItems => {
      let form;
      if (contentItems.length < 1) throw new Error(`Found no settings for type ${staticName}`);
      if (contentItems.length > 1) throw new Error(`Found too many settings for type ${staticName}`);
      form = {
        items: [{
          EntityId: contentItems[0].Id
        }]
      };
      const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_4__.convertFormToUrl)(form);
      this.router.navigate([`edit/${formUrl}`], {
        relativeTo: this.route.parent.firstChild
      });
    });
  }
  openMetadata() {
    const url = _metadata__WEBPACK_IMPORTED_MODULE_1__.GoToMetadata.getUrlApp(this.context.appId, `Metadata for App: ${this.dialogSettings.Context.App.Name} (${this.context.appId})`);
    this.router.navigate([url], {
      relativeTo: this.route.parent.firstChild
    });
  }
  fetchSettings() {
    const getObservable = this.appInternalsService.getAppInternals(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.metadata.app.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.metadata.app.keyType, this.context.appId);
    getObservable.subscribe(x => {
      // 2dm - New mode for Reactive UI
      this.appSettingsInternal$.next(x);
    });
  }
  static #_ = this.ɵfac = function AppConfigurationCardComponent_Factory(t) {
    return new (t || AppConfigurationCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_content_items_services_content_items_service__WEBPACK_IMPORTED_MODULE_0__.ContentItemsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_5__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_app_internals_service__WEBPACK_IMPORTED_MODULE_6__.AppInternalsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: AppConfigurationCardComponent,
    selectors: [["app-app-configuration-card"]],
    inputs: {
      dialogSettings: "dialogSettings"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 3,
    consts: [["docsLink", ""], [1, "eav-card"], [1, "eav-card-header"], [1, "eav-info-row"], [1, "eav-info-row__label"], [1, "eav-info-row__value"], [3, "click", "tippy"], [1, "eav-card-space-div"], ["align", "start"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["mat-button", "", 1, "eav-button__with-icon", 3, "click"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgePosition", "below after", "aria-hidden", "false", 1, "eav-icon", 3, "matBadge"], ["mat-button", "", "target", "_blank", 1, "eav-button__with-icon", 3, "href", "tippy"], [1, "eav-icon"]],
    template: function AppConfigurationCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, AppConfigurationCardComponent_Conditional_0_Template, 55, 17, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AppConfigurationCardComponent_ng_template_2_Template, 5, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](0, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_1_0);
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgTemplateOutlet, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__.MatBadge, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_8__.TippyDirective],
    styles: [".eav-card-space-div[_ngcontent-%COMP%] {\n  min-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9hcHAtY29uZmlndXJhdGlvbi9hcHAtY29uZmlndXJhdGlvbi1jYXJkL2FwcC1jb25maWd1cmF0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmVhdi1jYXJkLXNwYWNlLWRpdiB7XHJcbiAgbWluLWhlaWdodDogMzBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}
class ViewModel {}

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _content_items_services_content_items_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../content-items/services/content-items.service */ 336);
/* harmony import */ var _edit_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../edit/shared/store/ngrx-data */ 27521);
/* harmony import */ var _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../permissions/go-to-permissions */ 72437);
/* harmony import */ var _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/base-with-child-dialog.component */ 61735);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _shared_models_dialog_context_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/models/dialog-context.models */ 46666);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/dialog.service */ 52785);
/* harmony import */ var _shared_services_features_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/features.service */ 44858);
/* harmony import */ var _app_admin_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app-admin-helpers */ 58713);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services */ 75445);
/* harmony import */ var _services_app_internals_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/app-internals.service */ 14740);
/* harmony import */ var _sub_dialogs_analyze_settings_analyze_settings_models__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sub-dialogs/analyze-settings/analyze-settings.models */ 64294);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _features_feature_names__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../features/feature-names */ 28136);
/* harmony import */ var _features_shared_base_feature_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../features/shared/base-feature.component */ 9006);
/* harmony import */ var _features_feature_text_info_feature_text_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../features/feature-text-info/feature-text-info.component */ 95469);
/* harmony import */ var _app_configuration_card_app_configuration_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app-configuration-card/app-configuration-card.component */ 76761);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _features_services_feature_detail_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../features/services/feature-detail.service */ 45943);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../core */ 34447);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ 12587);












































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
  link: "https://docs.2sxc.org/basics/app/permissions.html"
});
const _c4 = () => ({
  link: "https://patrons.2sxc.org/features/feat/PermissionsByLanguage"
});
function AppConfigurationComponent_Conditional_0_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](0, " This is the Global App. Anything configured here will affect all Sites and Apps in this installation. ");
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](0, " This is the Primary App of this Site. You can also configure sitewide settings and resources here. ");
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, AppConfigurationComponent_Conditional_0_Conditional_0_Conditional_1_Template, 1, 0)(2, AppConfigurationComponent_Conditional_0_Conditional_0_Conditional_2_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, " See ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "docs");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](1, ctx_r1.isGlobal ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](2, ctx_r1.isPrimary ? 2 : -1);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Global");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td")(4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Conditional_22_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.edit(ctx_r1.eavConstants.contentTypes.systemSettings, ctx_r1.SystemSettingsScopes.App));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "td")(8, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Conditional_22_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.fixContentType(ctx_r1.eavConstants.contentTypes.customSettings, "edit"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Conditional_22_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.fixContentType(ctx_r1.eavConstants.contentTypes.customSettings, "config"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "dns");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const vm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", vm_r4.systemSettingsCount || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", vm_r4.customSettingsCount || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", vm_r4.customSettingsFieldsCount || null);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_23_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td")(4, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Conditional_23_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.edit(ctx_r1.eavConstants.contentTypes.systemSettings, ctx_r1.SystemSettingsScopes.Site));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "td")(8, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Conditional_23_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.fixContentType(ctx_r1.eavConstants.contentTypes.customSettings, "edit"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Conditional_23_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.fixContentType(ctx_r1.eavConstants.contentTypes.customSettings, "config"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "dns");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](14, AppConfigurationComponent_Conditional_0_Conditional_23_ng_container_14_Template, 1, 0, "ng-container", 28);
  }
  if (rf & 2) {
    const vm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    const goToGlobal_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", vm_r4.systemSettingsCount || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", vm_r4.customSettingsCount || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", vm_r4.customSettingsFieldsCount || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", goToGlobal_r6);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_24_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_24_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td")(4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Conditional_24_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.edit(ctx_r1.eavConstants.contentTypes.systemSettings, ctx_r1.SystemSettingsScopes.App));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "td")(8, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Conditional_24_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.edit(ctx_r1.eavConstants.contentTypes.settings));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Conditional_24_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.config(ctx_r1.eavConstants.contentTypes.settings));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "dns");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](14, AppConfigurationComponent_Conditional_0_Conditional_24_ng_container_14_Template, 1, 0, "ng-container", 28)(15, AppConfigurationComponent_Conditional_0_Conditional_24_ng_container_15_Template, 1, 0, "ng-container", 28);
  }
  if (rf & 2) {
    const vm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    const goToGlobal_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](65);
    const goToSite_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](67);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.dialogSettings.Context.App.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", vm_r4.systemSettingsCount || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", vm_r4.customSettingsCount || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", vm_r4.customSettingsFieldsCount || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", goToSite_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", goToGlobal_r6);
  }
}
function AppConfigurationComponent_Conditional_0_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Global");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td")(4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Conditional_53_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.edit(ctx_r1.eavConstants.contentTypes.systemResources, ctx_r1.SystemSettingsScopes.App));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "td")(8, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Conditional_53_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.fixContentType(ctx_r1.eavConstants.contentTypes.customResources, "edit"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Conditional_53_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.fixContentType(ctx_r1.eavConstants.contentTypes.customResources, "config"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "dns");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const vm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", vm_r4.systemResourcesCount || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", vm_r4.customResourcesCount || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", vm_r4.customResourcesFieldsCount || null);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_54_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td")(4, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Conditional_54_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.edit(ctx_r1.eavConstants.contentTypes.systemResources, ctx_r1.SystemSettingsScopes.Site));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "td")(8, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Conditional_54_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.fixContentType(ctx_r1.eavConstants.contentTypes.customResources, "edit"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Conditional_54_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.fixContentType(ctx_r1.eavConstants.contentTypes.customResources, "config"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "dns");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](14, AppConfigurationComponent_Conditional_0_Conditional_54_ng_container_14_Template, 1, 0, "ng-container", 28);
  }
  if (rf & 2) {
    const vm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    const goToGlobal_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", vm_r4.systemResourcesCount || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", vm_r4.customResourcesCount || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", vm_r4.customResourcesFieldsCount || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", goToGlobal_r6);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_55_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_55_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td")(4, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Conditional_55_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.edit(ctx_r1.eavConstants.contentTypes.systemResources, ctx_r1.SystemSettingsScopes.App));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "td")(8, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Conditional_55_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.edit(ctx_r1.eavConstants.contentTypes.resources));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Conditional_55_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.config(ctx_r1.eavConstants.contentTypes.resources));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "dns");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](14, AppConfigurationComponent_Conditional_0_Conditional_55_ng_container_14_Template, 1, 0, "ng-container", 28)(15, AppConfigurationComponent_Conditional_0_Conditional_55_ng_container_15_Template, 1, 0, "ng-container", 28);
  }
  if (rf & 2) {
    const vm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    const goToGlobal_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](65);
    const goToSite_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](67);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.dialogSettings.Context.App.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", vm_r4.systemResourcesCount || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", vm_r4.customResourcesCount || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", vm_r4.customResourcesFieldsCount || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", goToSite_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", goToGlobal_r6);
  }
}
function AppConfigurationComponent_Conditional_0_ng_container_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}
function AppConfigurationComponent_Conditional_0_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Global");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td")(4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_ng_template_64_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.openGlobalSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
}
function AppConfigurationComponent_Conditional_0_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td")(4, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_ng_template_66_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.openSiteSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
}
function AppConfigurationComponent_Conditional_0_ng_container_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}
function AppConfigurationComponent_Conditional_0_ng_container_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}
function AppConfigurationComponent_Conditional_0_ng_container_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_118_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](0, " (not on Global App) ");
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_118_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](0, " (not on Content) ");
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, AppConfigurationComponent_Conditional_0_Conditional_118_Conditional_0_Template, 1, 0)(1, AppConfigurationComponent_Conditional_0_Conditional_118_Conditional_1_Template, 1, 0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](0, ctx_r1.isGlobal ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](1, ctx_r1.isApp ? 1 : -1);
  }
}
function AppConfigurationComponent_Conditional_0_ng_container_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}
function AppConfigurationComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, AppConfigurationComponent_Conditional_0_Conditional_0_Template, 7, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 4)(2, "mat-card", 5)(3, "mat-card-header", 6)(4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "mat-card-content")(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, " Settings are things like SQL-connection strings, default \"items-to-show\" numbers and similar. If necessary, settings like a link to an RSS-Feed could be different in each language. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](12, "docs");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "table", 8)(14, "thead")(15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](18, "System Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](20, "Custom Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](22, AppConfigurationComponent_Conditional_0_Conditional_22_Template, 14, 3, "tr")(23, AppConfigurationComponent_Conditional_0_Conditional_23_Template, 15, 4)(24, AppConfigurationComponent_Conditional_0_Conditional_24_Template, 16, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](25, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "mat-card-actions", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](27, AppConfigurationComponent_Conditional_0_ng_container_27_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](28, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.analyze(ctx_r1.AnalyzeParts.Settings));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](29, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](30, "manage_search");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](32, "Analyze Combined Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](33, "mat-card", 5)(34, "mat-card-header", 6)(35, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](36, "Language Resources (i18n)");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](37, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](39, "mat-card-content")(40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](41, " Resources are used for labels and things like that in the App. They are usually needed to create multi-lingual views and such, and should not be used for App-Settings. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](42, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](43, "docs");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](44, "table", 8)(45, "thead")(46, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](47, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](48, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](49, "System Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](50, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](51, "Custom Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](52, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](53, AppConfigurationComponent_Conditional_0_Conditional_53_Template, 14, 3, "tr")(54, AppConfigurationComponent_Conditional_0_Conditional_54_Template, 15, 4)(55, AppConfigurationComponent_Conditional_0_Conditional_55_Template, 16, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](56, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](57, "mat-card-actions", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](58, AppConfigurationComponent_Conditional_0_ng_container_58_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](59, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Template_button_click_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.analyze(ctx_r1.AnalyzeParts.Resources));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](60, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](61, "manage_search");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](63, "Analyze Combined Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](64, AppConfigurationComponent_Conditional_0_ng_template_64_Template, 7, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"])(66, AppConfigurationComponent_Conditional_0_ng_template_66_Template, 7, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](68, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](69, "app-app-configuration-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](70, "mat-card", 5)(71, "mat-card-header", 6)(72, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](73, "Performance");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](74, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](75, "bolt");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](76, "mat-card-content")(77, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](78, " LightSpeed Output Cache to speed up page by 50-90% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](79, "app-feature-text-info", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](80, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](81, "mat-card-actions", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](82, AppConfigurationComponent_Conditional_0_ng_container_82_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](83, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Template_button_click_83_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.openLightSpeed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](84, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](85, "bolt");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](86, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](87, "Edit LightSpeed");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](88, "mat-card", 5)(89, "mat-card-header", 6)(90, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](91, "Security");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](92, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](93, "local_police");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](94, "mat-card-content")(95, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](96, " ContentSecurityPolicy (CSP) features in this App - for maximum control. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](97, "app-feature-text-info", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](98, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](99, "mat-card-actions", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](100, AppConfigurationComponent_Conditional_0_ng_container_100_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](101, "mat-card", 5)(102, "mat-card-header", 6)(103, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](104, "Permissions");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](105, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](106, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](107, "mat-card-content")(108, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](109, " Give access to the entire app (all data). Use with care. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](110, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](111, "mat-card-actions", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](112, AppConfigurationComponent_Conditional_0_ng_container_112_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](113, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Template_button_click_113_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.openPermissions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](114, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](115, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](116, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](117, " Edit Permissions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](118, AppConfigurationComponent_Conditional_0_Conditional_118_Template, 2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](119, AppConfigurationComponent_Conditional_0_ng_container_119_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](120, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_Template_button_click_120_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.openLanguagePermissions(ctx_r1.langPermsEnabled()));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](121, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](122, " person ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](123, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](124, "Language Permissions");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    const docsLink_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](0, ctx_r1.isGlobal || ctx_r1.isPrimary ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](22, ctx_r1.isGlobal ? 22 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](23, ctx_r1.isPrimary ? 23 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](24, ctx_r1.isApp ? 24 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", docsLink_r14)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](30, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](53, ctx_r1.isGlobal ? 53 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](54, ctx_r1.isPrimary ? 54 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](55, ctx_r1.isApp ? 55 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", docsLink_r14)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](31, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dialogSettings", ctx_r1.dialogSettings);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("featureNameId", "LightSpeedOutputCache")("asInfo", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", docsLink_r14)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](32, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("disabled", !ctx_r1.lightSpeedEnabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ctx.appLightSpeedCount || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("featureNameId", "ContentSecurityPolicy")("asInfo", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", docsLink_r14)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](33, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", docsLink_r14)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](34, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", !ctx_r1.dialogSettings.Context.Enable.AppPermissions);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ctx_r1.dialogSettings.Context.App.Permissions.Count || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](118, !ctx_r1.dialogSettings.Context.Enable.AppPermissions ? 118 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", docsLink_r14)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](35, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadgeHidden", ctx_r1.langPermsEnabled());
  }
}
function AppConfigurationComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "a", 43)(1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const icon_r15 = ctx.$implicit;
    const label_r16 = ctx.$implicit;
    const link_r17 = ctx.link;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("href", link_r17, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("tippy", "online documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"]((tmp_7_0 = icon_r15) !== null && tmp_7_0 !== undefined ? tmp_7_0 : "menu_book");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](label_r16);
  }
}
class AppConfigurationComponent extends _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_3__.BaseWithChildDialogComponent {
  constructor(contentItemsService, router, route, context, snackBar, appInternalsService, globalConfigService, appDialogConfigService, dialog, viewContainerRef, changeDetectorRef) {
    super(router, route);
    this.contentItemsService = contentItemsService;
    this.router = router;
    this.route = route;
    this.context = context;
    this.snackBar = snackBar;
    this.appInternalsService = appInternalsService;
    this.globalConfigService = globalConfigService;
    this.appDialogConfigService = appDialogConfigService;
    this.dialog = dialog;
    this.viewContainerRef = viewContainerRef;
    this.changeDetectorRef = changeDetectorRef;
    this.dialogService = (0,_core__WEBPACK_IMPORTED_MODULE_20__.transient)(_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__.DialogService);
    this.contentTypesService = (0,_core__WEBPACK_IMPORTED_MODULE_20__.transient)(_services__WEBPACK_IMPORTED_MODULE_11__.ContentTypesService);
    this.eavConstants = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants;
    this.AnalyzeParts = _sub_dialogs_analyze_settings_analyze_settings_models__WEBPACK_IMPORTED_MODULE_13__.AnalyzeParts;
    this.SystemSettingsScopes = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.SystemSettingsScopes;
    this.AppScopes = _shared_models_dialog_context_models__WEBPACK_IMPORTED_MODULE_6__.AppScopes;
    this.debugEnabled$ = this.globalConfigService.getDebugEnabled$();
    // More proper ViewModel
    this.appSettingsInternal$ = new rxjs__WEBPACK_IMPORTED_MODULE_22__.Subject();
    this.appStateAdvanced = false;
    this.features = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.inject)(_shared_services_features_service__WEBPACK_IMPORTED_MODULE_9__.FeaturesService);
    this.lightSpeedEnabled = this.features.isEnabled(_features_feature_names__WEBPACK_IMPORTED_MODULE_14__.FeatureNames.LightSpeed);
    this.cspEnabled = this.features.isEnabled(_features_feature_names__WEBPACK_IMPORTED_MODULE_14__.FeatureNames.ContentSecurityPolicy);
    this.langPermsEnabled = this.features.isEnabled(_features_feature_names__WEBPACK_IMPORTED_MODULE_14__.FeatureNames.PermissionsByLanguage);
    this.features.loadFromService(appDialogConfigService);
    // New with proper ViewModel
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.combineLatest)([this.appSettingsInternal$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_24__.map)(([settings]) => {
      const result = {
        appLightSpeedCount: settings.MetadataList.Items.filter(i => i._Type.Name == _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants.appMetadata.LightSpeed.ContentTypeName).length,
        systemSettingsCount: this.isPrimary ? settings.EntityLists.SettingsSystem.filter(i => i.SettingsEntityScope === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.SystemSettingsScopes.Site).length : settings.EntityLists.SettingsSystem.filter(i => !i.SettingsEntityScope).length,
        customSettingsCount: settings.EntityLists.AppSettings?.length,
        customSettingsFieldsCount: settings.FieldAll.AppSettings?.length,
        systemResourcesCount: this.isPrimary ? settings.EntityLists.ResourcesSystem.filter(i => i.SettingsEntityScope === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.SystemSettingsScopes.Site).length : settings.EntityLists.ResourcesSystem.filter(i => !i.SettingsEntityScope).length,
        customResourcesCount: settings.EntityLists.AppResources?.length,
        customResourcesFieldsCount: settings.FieldAll.AppResources?.length
      };
      return result;
    }));
  }
  ngOnInit() {
    this.fetchSettings();
    this.subscriptions.add(this.childDialogClosed$().subscribe(() => {
      this.fetchSettings();
    }));
    this.appDialogConfigService.getCurrent$().subscribe(dialogSettings => {
      this.dialogSettings = dialogSettings;
      const appScope = dialogSettings.Context.App.SettingsScope;
      this.isGlobal = appScope === _shared_models_dialog_context_models__WEBPACK_IMPORTED_MODULE_6__.AppScopes.Global;
      this.isPrimary = appScope === _shared_models_dialog_context_models__WEBPACK_IMPORTED_MODULE_6__.AppScopes.Site;
      this.isApp = appScope === _shared_models_dialog_context_models__WEBPACK_IMPORTED_MODULE_6__.AppScopes.App;
    });
  }
  ngOnDestroy() {
    this.snackBar.dismiss();
    super.ngOnDestroy();
  }
  edit(staticName, systemSettingsScope) {
    this.contentItemsService.getAll(staticName).subscribe(contentItems => {
      let form;
      switch (staticName) {
        case _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants.contentTypes.systemSettings:
        case _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants.contentTypes.systemResources:
          const systemSettingsEntities = contentItems.filter(i => systemSettingsScope === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.SystemSettingsScopes.App ? !i.SettingsEntityScope : i.SettingsEntityScope === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.SystemSettingsScopes.Site);
          if (systemSettingsEntities.length > 1) {
            throw new Error(`Found too many settings for type ${staticName}`);
          }
          const systemSettingsEntity = systemSettingsEntities[0];
          form = {
            items: [systemSettingsEntity == null ? {
              ContentTypeName: staticName,
              Prefill: {
                ...(systemSettingsScope === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.SystemSettingsScopes.Site && {
                  SettingsEntityScope: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.SystemSettingsScopes.Site
                })
              }
            } : {
              EntityId: systemSettingsEntity.Id
            }]
          };
          break;
        case _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants.contentTypes.customSettings:
        case _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants.contentTypes.customResources:
          if (contentItems.length > 1) {
            throw new Error(`Found too many settings for type ${staticName}`);
          }
          const customSettingsEntity = contentItems[0];
          form = {
            items: [customSettingsEntity == null ? {
              ContentTypeName: staticName
            } : {
              EntityId: customSettingsEntity.Id
            }]
          };
          break;
        default:
          if (contentItems.length < 1) throw new Error(`Found no settings for type ${staticName}`);
          if (contentItems.length > 1) throw new Error(`Found too many settings for type ${staticName}`);
          form = {
            items: [{
              EntityId: contentItems[0].Id
            }]
          };
      }
      const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_5__.convertFormToUrl)(form);
      this.router.navigate([`edit/${formUrl}`], {
        relativeTo: this.route.parent.firstChild
      });
    });
  }
  openLightSpeed() {
    const form = _app_admin_helpers__WEBPACK_IMPORTED_MODULE_10__.AppAdminHelpers.getLightSpeedEditParams(this.context.appId);
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_5__.convertFormToUrl)(form);
    this.router.navigate([`edit/${formUrl}`], {
      relativeTo: this.route.parent.firstChild
    });
  }
  openSiteSettings() {
    const sitePrimaryApp = this.dialogSettings.Context.Site.PrimaryApp;
    this.dialogService.openAppAdministration(sitePrimaryApp.ZoneId, sitePrimaryApp.AppId, 'app');
  }
  openGlobalSettings() {
    const globalPrimaryApp = this.dialogSettings.Context.System.PrimaryApp;
    this.dialogService.openAppAdministration(globalPrimaryApp.ZoneId, globalPrimaryApp.AppId, 'app');
  }
  config(staticName) {
    this.router.navigate([`fields/${staticName}`], {
      relativeTo: this.route.parent.firstChild
    });
  }
  openPermissions() {
    this.router.navigate([_permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_2__.GoToPermissions.getUrlApp(this.context.appId)], {
      relativeTo: this.route.parent.firstChild
    });
  }
  openLanguagePermissions(enabled) {
    if (enabled) this.router.navigate(['language-permissions'], {
      relativeTo: this.route.parent.firstChild
    });else (0,_features_shared_base_feature_component__WEBPACK_IMPORTED_MODULE_15__.openFeatureDialog)(this.dialog, _features_feature_names__WEBPACK_IMPORTED_MODULE_14__.FeatureNames.PermissionsByLanguage, this.viewContainerRef, this.changeDetectorRef);
  }
  analyze(part) {
    this.router.navigate([`analyze/${part}`], {
      relativeTo: this.route.parent.firstChild
    });
  }
  fetchSettings() {
    const getObservable = this.appInternalsService.getAppInternals(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants.metadata.app.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants.metadata.app.keyType, this.context.appId);
    getObservable.subscribe(x => {
      // 2dm - New mode for Reactive UI
      this.appSettingsInternal$.next(x);
    });
  }
  fixContentType(staticName, action) {
    this.contentTypesService.retrieveContentTypes(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants.scopes.configuration.value).subscribe(contentTypes => {
      const contentTypeExists = contentTypes.some(ct => ct.Name === staticName);
      if (contentTypeExists) {
        if (action === 'edit') {
          this.edit(staticName);
        } else if (action === 'config') {
          this.config(staticName);
        }
      } else {
        const newContentType = {
          StaticName: '',
          Name: staticName,
          Description: '',
          Scope: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants.scopes.configuration.value,
          ChangeStaticName: false,
          NewStaticName: ''
        };
        this.contentTypesService.save(newContentType).subscribe(success => {
          if (!success) {
            return;
          }
          if (action === 'edit') {
            this.edit(staticName);
          } else if (action === 'config') {
            this.config(staticName);
          }
        });
      }
    });
  }
  static #_ = this.ɵfac = function AppConfigurationComponent_Factory(t) {
    return new (t || AppConfigurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_content_items_services_content_items_service__WEBPACK_IMPORTED_MODULE_0__.ContentItemsService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_7__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_app_internals_service__WEBPACK_IMPORTED_MODULE_12__.AppInternalsService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_edit_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_1__.GlobalConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_11__.AppDialogConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_21__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({
    type: AppConfigurationComponent,
    selectors: [["app-app-configuration"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵProvidersFeature"]([
    // TODO:: 2dg - provider  // Used app
    _content_items_services_content_items_service__WEBPACK_IMPORTED_MODULE_0__.ContentItemsService, _services_app_internals_service__WEBPACK_IMPORTED_MODULE_12__.AppInternalsService, _features_services_feature_detail_service__WEBPACK_IMPORTED_MODULE_18__.FeatureDetailService]), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 3,
    consts: [["docsLink", ""], ["goToGlobal", ""], ["goToSite", ""], [1, "alert", "alert-info", "scope-info"], [1, "eav-cards-box"], [1, "eav-card"], [1, "eav-card-header"], ["href", "https://go.2sxc.org/settings", "target", "_blank"], [1, "eav-settings-and-resources-table"], [1, "eav-card-space-div"], ["align", "start"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["mat-button", "", "tippy", "See the result of combining all settings", 1, "eav-button__with-icon", 3, "click"], [1, "eav-icon"], ["mat-button", "", "tippy", "See the result of combining all resources", 1, "eav-button__with-icon", 3, "click"], [3, "dialogSettings"], [3, "featureNameId", "asInfo"], ["mat-button", "", 1, "eav-button__with-icon", 3, "click", "disabled"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgePosition", "below after", "aria-hidden", "false", 1, "eav-icon", 3, "matBadge"], ["mat-button", "", 1, "eav-button__with-icon", 3, "click"], ["matBadgeSize", "small", "matBadge", "\uD83D\uDC8E", "matBadgePosition", "below after", "aria-hidden", "false", 1, "eav-icon", 3, "matBadgeHidden"], ["mat-icon-button", "", "tippy", "Edit global system settings", 3, "click"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgePosition", "below after", "aria-hidden", "false", 3, "matBadge"], ["mat-icon-button", "", "tippy", "Edit custom global settings", 3, "click"], ["mat-icon-button", "", "tippy", "Configure fields of the custom global settings", 3, "click"], ["mat-icon-button", "", "tippy", "Edit site system settings", 3, "click"], ["mat-icon-button", "", "tippy", "Edit custom site settings", 3, "click"], ["mat-icon-button", "", "tippy", "Configure fields of the custom site settings", 3, "click"], [4, "ngTemplateOutlet"], ["mat-icon-button", "", "tippy", "Edit app system settings", 3, "click"], ["mat-icon-button", "", "tippy", "Edit custom app settings", 3, "click"], ["mat-icon-button", "", "tippy", "Configure fields of the custom app settings", 3, "click"], ["mat-icon-button", "", "tippy", "Edit global system resources", 3, "click"], ["mat-icon-button", "", "tippy", "Edit custom global resources", 3, "click"], ["mat-icon-button", "", "tippy", "Configure fields of the custom global resources", 3, "click"], ["mat-icon-button", "", "tippy", "Edit site system resources", 3, "click"], ["mat-icon-button", "", "tippy", "Edit custom site resources", 3, "click"], ["mat-icon-button", "", "tippy", "Configure fields of the custom site resources", 3, "click"], ["mat-icon-button", "", "tippy", "Edit app system resources", 3, "click"], ["mat-icon-button", "", "tippy", "Edit custom app resources", 3, "click"], ["mat-icon-button", "", "tippy", "Configure fields of the custom app resources", 3, "click"], ["mat-icon-button", "", "tippy", "Go to global", 3, "click"], ["mat-icon-button", "", "tippy", "Go to site", 3, "click"], ["mat-button", "", "target", "_blank", 1, "eav-button__with-icon", 3, "href", "tippy"]],
    template: function AppConfigurationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, AppConfigurationComponent_Conditional_0_Template, 125, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, AppConfigurationComponent_ng_template_2_Template, 5, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "router-outlet");
      }
      if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](0, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_1_0);
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatIconButton, _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__.MatBadge, _angular_common__WEBPACK_IMPORTED_MODULE_32__.NgTemplateOutlet, _app_configuration_card_app_configuration_card_component__WEBPACK_IMPORTED_MODULE_17__.AppConfigurationCardComponent, _features_feature_text_info_feature_text_info_component__WEBPACK_IMPORTED_MODULE_16__.FeatureTextInfoComponent, _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_32__.AsyncPipe, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_19__.TippyDirective],
    styles: [".eav-settings-and-resources-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.eav-settings-and-resources-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.eav-settings-and-resources-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9hcHAtY29uZmlndXJhdGlvbi9hcHAtY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7QUFDSjtBQUVFO0VBQ0UsZ0JBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIi5lYXYtc2V0dGluZ3MtYW5kLXJlc291cmNlcy10YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIHRib2R5IHRoIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}
class AppConfigurationViewModel {}

/***/ }),

/***/ 14740:
/*!**************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/services/app-internals.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppInternalsService: () => (/* binding */ AppInternalsService)
/* harmony export */ });
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);







const webApiRoot = 'admin/appinternals/get';
class AppInternalsService {
  constructor(http, context, dnnContext) {
    this.http = http;
    this.context = context;
    this.dnnContext = dnnContext;
  }
  /**
   * Fetches AppInternals for given key
   * @param targetType type of target metadata item is for, e.g. for Entity, or ContentType
   * @param keyType e.g. for keyType === guid, key === contentTypeStaticName
   * @param key key of target metadata item is for
   * @param contentTypeName name of content type where permissions are stored. If blank, backend returns all metadata except permissions
   */
  getAppInternals(targetType, keyType, key, contentTypeName) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiRoot), {
      params: {
        appId: this.context.appId.toString(),
        targetType: targetType.toString(),
        keyType,
        key: key.toString(),
        ...(contentTypeName && {
          contentType: contentTypeName
        })
      }
    });
  }
  static #_ = this.ɵfac = function AppInternalsService_Factory(t) {
    return new (t || AppInternalsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_0__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_3__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AppInternalsService,
    factory: AppInternalsService.ɵfac
  });
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
};

/***/ }),

/***/ 83051:
/*!**********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/services/content-types-fields.service.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentTypesFieldsService: () => (/* binding */ ContentTypesFieldsService),
/* harmony export */   webApiFieldsAll: () => (/* binding */ webApiFieldsAll),
/* harmony export */   webApiFieldsGetShared: () => (/* binding */ webApiFieldsGetShared),
/* harmony export */   webApiFieldsRoot: () => (/* binding */ webApiFieldsRoot)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-administration/services/content-types.service */ 17693);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);









const webApiFieldsRoot = 'admin/field/';
const webApiFieldsAll = 'admin/field/all';
const webApiFieldsGetShared = 'admin/field/GetSharedFields';
class ContentTypesFieldsService {
  constructor(http, context, dnnContext) {
    this.http = http;
    this.context = context;
    this.dnnContext = dnnContext;
  }
  apiUrl(name) {
    return this.dnnContext.$2sxc.http.apiUrl(name);
  }
  typeListRetrieve() {
    return this.http.get(this.apiUrl(webApiFieldsRoot + 'DataTypes'), {
      params: {
        appid: this.context.appId.toString()
      }
    });
  }
  getInputTypesList() {
    return this.http.get(this.apiUrl(webApiFieldsRoot + 'InputTypes'), {
      params: {
        appid: this.context.appId.toString()
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(inputConfigs => {
      const inputTypeOptions = inputConfigs.map(config => {
        const option = {
          dataType: config.Type.substring(0, config.Type.indexOf('-')),
          inputType: config.Type,
          label: config.Label,
          description: config.Description,
          isDefault: config.IsDefault,
          isObsolete: config.IsObsolete,
          isRecommended: config.IsRecommended,
          obsoleteMessage: config.ObsoleteMessage,
          icon: config.IsDefault ? 'star' : config.IsRecommended ? 'star_outline' : null
        };
        return option;
      });
      return inputTypeOptions;
    }));
  }
  getReservedNames() {
    return this.http.get(this.apiUrl(webApiFieldsRoot + 'ReservedNames'));
  }
  /** Get all fields for some content type */
  getFields(contentTypeStaticName) {
    return this.http.get(this.apiUrl(webApiFieldsAll), {
      params: {
        appid: this.context.appId.toString(),
        staticName: contentTypeStaticName
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(fields => {
      if (fields) {
        for (const fld of fields) {
          if (!fld.Metadata) {
            continue;
          }
          const md = fld.Metadata;
          const allMd = md.All;
          const typeMd = md[fld.Type];
          const inputMd = md[fld.InputType];
          md.merged = {
            ...allMd,
            ...typeMd,
            ...inputMd
          };
        }
      }
      return fields;
    }));
  }
  /** Get all possible sharable fields for a new sharing */
  getShareableFields() {
    return this.http.get(this.apiUrl(webApiFieldsGetShared), {
      params: {
        appid: this.context.appId.toString()
      }
    });
  }
  /**
   * Get sharable fields which are possible for this attribute.
   *
   * Reason is that eg. a bool-attribute can only receive metadata from a bool attribute, etc.
   *
   * @param attributeId the existing attributeId which will receive the new metadata
   */
  getShareableFieldsFor(attributeId) {
    // TODO: @SDV - do the same as in getShareableFields()
    // but add parameter attributeId to the webapi call
    // I'll create the backend afterwards
    return this.http.get(this.apiUrl(webApiFieldsGetShared), {
      params: {
        appid: this.context.appId.toString(),
        attributeId: attributeId.toString()
      }
    });
  }
  addInheritedField(targetContentTypeId, sourceContentTypeStaticName, sourceFieldGuid, newName) {
    return this.http.post(this.apiUrl(webApiFieldsRoot + 'AddInheritedField'), null, {
      params: {
        AppId: this.context.appId.toString(),
        ContentTypeId: targetContentTypeId.toString(),
        SourceType: sourceContentTypeStaticName,
        SourceField: sourceFieldGuid,
        name: newName
      }
    });
  }
  share(attributeId, share = true) {
    return this.http.post(this.apiUrl(webApiFieldsRoot + 'Share'), null, {
      params: {
        appid: this.context.appId.toString(),
        attributeId: attributeId.toString(),
        share
      }
    });
  }
  inherit(attributeId, sourceFieldGuid) {
    return this.http.post(this.apiUrl(webApiFieldsRoot + 'Inherit'), null, {
      params: {
        appid: this.context.appId.toString(),
        attributeId: attributeId.toString(),
        inheritMetadataOf: sourceFieldGuid
      }
    });
  }
  reOrder(idArray, contentType) {
    return this.http.post(this.apiUrl(webApiFieldsRoot + 'Sort'), null, {
      params: {
        appid: this.context.appId.toString(),
        contentTypeId: contentType.Id.toString(),
        order: JSON.stringify(idArray)
      }
    });
  }
  setTitle(item, contentType) {
    return this.http.post(this.apiUrl(_app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_0__.webApiTypeRoot + 'SetTitle'), null, {
      params: {
        appid: this.context.appId.toString(),
        contentTypeId: contentType.Id.toString(),
        attributeId: item.Id.toString()
      }
    });
  }
  rename(fieldId, contentTypeId, newName) {
    return this.http.post(this.apiUrl(webApiFieldsRoot + 'Rename'), null, {
      params: {
        appid: this.context.appId.toString(),
        contentTypeId: contentTypeId.toString(),
        attributeId: fieldId.toString(),
        newName
      }
    });
  }
  delete(item, contentType) {
    if (item.IsTitle) {
      throw new Error('Can\'t delete Title');
    }
    return this.http.delete(this.apiUrl(webApiFieldsRoot + 'Delete'), {
      params: {
        appid: this.context.appId.toString(),
        contentTypeId: contentType.Id.toString(),
        attributeId: item.Id.toString()
      }
    });
  }
  add(newField, contentTypeId) {
    return this.http.post(this.apiUrl(webApiFieldsRoot + 'Add'), null, {
      params: {
        AppId: this.context.appId.toString(),
        ContentTypeId: contentTypeId.toString(),
        Id: newField.Id.toString(),
        Type: newField.Type,
        InputType: newField.InputType,
        StaticName: newField.StaticName,
        IsTitle: newField.IsTitle.toString(),
        Index: newField.SortOrder.toString()
      }
    });
  }
  updateInputType(id, staticName, inputType) {
    return this.http.post(this.apiUrl(webApiFieldsRoot + 'InputType'), null, {
      params: {
        appId: this.context.appId.toString(),
        attributeId: id.toString(),
        field: staticName,
        inputType
      }
    });
  }
  static #_ = this.ɵfac = function ContentTypesFieldsService_Factory(t) {
    return new (t || ContentTypesFieldsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_1__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_5__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ContentTypesFieldsService,
    factory: ContentTypesFieldsService.ɵfac
  });
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_app-configuration_app-configuration_component_ts-p-970788.js.map