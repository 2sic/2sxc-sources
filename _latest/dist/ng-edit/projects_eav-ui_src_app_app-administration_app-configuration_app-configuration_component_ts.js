"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_app-configuration_app-configuration_component_ts"],{

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
    let tmp_15_0;
    let tmp_17_0;
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
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("href", ctx_r1.appConfigurationUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matBadge", ((tmp_15_0 = ctx_r1.appSettingsInternal()()) == null ? null : tmp_15_0.EntityLists == null ? null : tmp_15_0.EntityLists.ToSxcContentApp.length) || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("href", ctx_r1.urlToOpenMetadata(), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matBadge", ((tmp_17_0 = ctx_r1.appSettingsInternal()()) == null ? null : tmp_17_0.MetadataList.Items.length) || null);
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
    this.contentItem = this.#contentItemsSvc.getAllSig(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants.contentTypes.appConfiguration, undefined);
    this.#refresh = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.signal)(0);
    this.appSettingsInternal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.computed)(() => {
      const refresh = this.#refresh();
      return this.#appInternalsSvc.getAppInternals(undefined);
    });
    this.clipboard = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_services_clipboard_service__WEBPACK_IMPORTED_MODULE_9__.ClipboardService);
    this.appConfigurationUrl = this.urlToEdit();
  }
  #refresh;
  ngOnInit() {
    this.#dialogRouter.doOnDialogClosed(() => {
      this.#refresh.update(value => value + 1);
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
    const staticName = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants.contentTypes.appConfiguration;
    this.#contentItemsSvc.getAll(staticName).subscribe(contentItems => {
      if (contentItems.length < 1) this.#dialogRouter.navRelative(['message/e'], {
        queryParams: {
          error: 'AppAdmin.ErrorNoManyAppSettings'
        }
      });
      if (contentItems.length > 1) this.#dialogRouter.navRelative(['message/e'], {
        queryParams: {
          error: 'AppAdmin.ErrorTooManyAppSettings'
        }
      });
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
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [[1, "eav-card"], [1, "eav-card-header"], [1, "eav-info-row"], [1, "eav-info-row__label"], [1, "eav-info-row__value"], [3, "click", "tippy"], [1, "eav-card-space-div"], ["align", "start"], [3, "link", "label", "icon"], ["mat-button", "", "tippy", "Edit app system resources", 1, "eav-button__with-icon", 3, "href"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgePosition", "below after", "aria-hidden", "false", 1, "eav-icon", 3, "matBadge"], ["mat-button", "", 1, "eav-button__with-icon", 3, "href"]],
      template: function AppConfigurationCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, AppConfigurationCardComponent_Conditional_0_Template, 55, 17, "mat-card", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx.contentItem() ? 0 : -1);
        }
      },
      dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatAnchor, _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__.MatBadge, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_5__.TippyDirective, _admin_shared_docs_link_helper_docs_link_helper_component__WEBPACK_IMPORTED_MODULE_1__.DocsLinkHelperComponent],
      styles: [".eav-card-space-div[_ngcontent-%COMP%] {\n  min-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9hcHAtY29uZmlndXJhdGlvbi9hcHAtY29uZmlndXJhdGlvbi1jYXJkL2FwcC1jb25maWd1cmF0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmVhdi1jYXJkLXNwYWNlLWRpdiB7XHJcbiAgbWluLWhlaWdodDogMzBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _admin_shared_docs_link_helper_docs_link_helper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../admin-shared/docs-link-helper/docs-link-helper.component */ 66545);
/* harmony import */ var _content_items_services_content_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../content-items/services/content-items.service */ 336);
/* harmony import */ var _features_feature_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/feature-names */ 28136);
/* harmony import */ var _features_feature_text_info_feature_text_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/feature-text-info/feature-text-info.component */ 95469);
/* harmony import */ var _features_features_scoped_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../features/features-scoped.service */ 74824);
/* harmony import */ var _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../permissions/go-to-permissions */ 72437);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _shared_models_dialog_context_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/models/dialog-context.models */ 46666);
/* harmony import */ var _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/models/edit-form.model */ 70334);
/* harmony import */ var _shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/routing/dialog-routing.service */ 60852);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/services/dialog.service */ 52785);
/* harmony import */ var _app_admin_helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../app-admin-helpers */ 58713);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services */ 75445);
/* harmony import */ var _services_app_internals_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/app-internals.service */ 14740);
/* harmony import */ var _services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/dialog-config-app.service */ 64699);
/* harmony import */ var _sub_dialogs_analyze_settings_analyze_settings_models__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../sub-dialogs/analyze-settings/analyze-settings.models */ 64294);
/* harmony import */ var _app_configuration_card_app_configuration_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app-configuration-card/app-configuration-card.component */ 76761);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ 12587);







































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
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](ctx_r0.isGlobal ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](ctx_r0.isPrimary ? 2 : -1);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Global");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td")(4, "a", 20)(5, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "td")(8, "a", 22)(9, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "a", 23)(12, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "dns");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    let tmp_9_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r0.appGlobalSystemSettingsUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ((tmp_5_0 = ctx_r0.viewModelSig()) == null ? null : tmp_5_0.systemSettingsCount) || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r0.appGlobalCustomSettingsUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ((tmp_7_0 = ctx_r0.viewModelSig()) == null ? null : tmp_7_0.customSettingsCount) || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r0.urlToConfig(ctx_r0.eavConstants.contentTypes.customSettings), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ((tmp_9_0 = ctx_r0.viewModelSig()) == null ? null : tmp_9_0.customSettingsFieldsCount) || null);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_23_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td")(4, "a", 24)(5, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "td")(8, "a", 24)(9, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "a", 25)(12, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "dns");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](14, AppConfigurationComponent_Conditional_0_Conditional_23_ng_container_14_Template, 1, 0, "ng-container", 26);
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    let tmp_9_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    const goToGlobal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](65);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r0.appSiteSystemSettingsUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ((tmp_5_0 = ctx_r0.viewModelSig()) == null ? null : tmp_5_0.systemSettingsCount) || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r0.appSiteCustomSettingsUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ((tmp_7_0 = ctx_r0.viewModelSig()) == null ? null : tmp_7_0.customSettingsCount) || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r0.urlToConfig(ctx_r0.eavConstants.contentTypes.customSettings), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ((tmp_9_0 = ctx_r0.viewModelSig()) == null ? null : tmp_9_0.customSettingsFieldsCount) || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", goToGlobal_r2);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td")(4, "a", 27)(5, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "td")(8, "a", 28)(9, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "a", 29)(12, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "dns");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](14, AppConfigurationComponent_Conditional_0_Conditional_24_ng_container_14_Template, 1, 0, "ng-container", 26)(15, AppConfigurationComponent_Conditional_0_Conditional_24_ng_container_15_Template, 1, 0, "ng-container", 26);
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_8_0;
    let tmp_10_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    const goToGlobal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](65);
    const goToSite_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](67);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r0.dialogSettings.Context.App.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r0.appContentSystemSettingsUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ((tmp_6_0 = ctx_r0.viewModelSig()) == null ? null : tmp_6_0.systemSettingsCount) || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r0.appContentCustomSettingsUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ((tmp_8_0 = ctx_r0.viewModelSig()) == null ? null : tmp_8_0.customSettingsCount) || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r0.urlToConfig(ctx_r0.eavConstants.contentTypes.settings), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ((tmp_10_0 = ctx_r0.viewModelSig()) == null ? null : tmp_10_0.customSettingsFieldsCount) || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", goToSite_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", goToGlobal_r2);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Global");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td")(4, "a", 30)(5, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "td")(8, "a", 31)(9, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "a", 32)(12, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "dns");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    let tmp_9_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r0.appGlobalSystemResourcesUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ((tmp_5_0 = ctx_r0.viewModelSig()) == null ? null : tmp_5_0.systemResourcesCount) || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r0.appGlobalCustomResourcesUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ((tmp_7_0 = ctx_r0.viewModelSig()) == null ? null : tmp_7_0.customResourcesCount) || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r0.urlToConfig(ctx_r0.eavConstants.contentTypes.customResources), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ((tmp_9_0 = ctx_r0.viewModelSig()) == null ? null : tmp_9_0.customResourcesFieldsCount) || null);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_54_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}
function AppConfigurationComponent_Conditional_0_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td")(4, "a", 33)(5, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "td")(8, "a", 34)(9, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "a", 35)(12, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "dns");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](14, AppConfigurationComponent_Conditional_0_Conditional_54_ng_container_14_Template, 1, 0, "ng-container", 26);
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    let tmp_9_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    const goToGlobal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](65);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r0.appSiteSystemResourcesUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ((tmp_5_0 = ctx_r0.viewModelSig()) == null ? null : tmp_5_0.systemResourcesCount) || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r0.appSiteCustomResourcesUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ((tmp_7_0 = ctx_r0.viewModelSig()) == null ? null : tmp_7_0.customResourcesCount) || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r0.urlToConfig(ctx_r0.eavConstants.contentTypes.customResources), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ((tmp_9_0 = ctx_r0.viewModelSig()) == null ? null : tmp_9_0.customResourcesFieldsCount) || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", goToGlobal_r2);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td")(4, "a", 36)(5, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "td")(8, "a", 37)(9, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "a", 38)(12, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "dns");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](14, AppConfigurationComponent_Conditional_0_Conditional_55_ng_container_14_Template, 1, 0, "ng-container", 26)(15, AppConfigurationComponent_Conditional_0_Conditional_55_ng_container_15_Template, 1, 0, "ng-container", 26);
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_8_0;
    let tmp_10_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    const goToGlobal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](65);
    const goToSite_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](67);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r0.dialogSettings.Context.App.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r0.appContentSystemResourcesUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ((tmp_6_0 = ctx_r0.viewModelSig()) == null ? null : tmp_6_0.systemResourcesCount) || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r0.appContentCustomResourcesUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ((tmp_8_0 = ctx_r0.viewModelSig()) == null ? null : tmp_8_0.customResourcesCount) || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r0.urlToConfig(ctx_r0.eavConstants.contentTypes.resources), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ((tmp_10_0 = ctx_r0.viewModelSig()) == null ? null : tmp_10_0.customResourcesFieldsCount) || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", goToSite_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", goToGlobal_r2);
  }
}
function AppConfigurationComponent_Conditional_0_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Global");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td")(4, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_ng_template_64_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r0.openGlobalSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
}
function AppConfigurationComponent_Conditional_0_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td")(4, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AppConfigurationComponent_Conditional_0_ng_template_66_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r0.openSiteSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
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
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](ctx_r0.isGlobal ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](ctx_r0.isApp ? 1 : -1);
  }
}
function AppConfigurationComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](22, AppConfigurationComponent_Conditional_0_Conditional_22_Template, 14, 6, "tr")(23, AppConfigurationComponent_Conditional_0_Conditional_23_Template, 15, 7)(24, AppConfigurationComponent_Conditional_0_Conditional_24_Template, 16, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](25, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "mat-card-actions", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](27, "app-docs-link-helper", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](28, "a", 11)(29, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](30, "manage_search");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](32, "Analyze Combined Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](33, "mat-card", 4)(34, "mat-card-header", 5)(35, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](36, "Language Resources (i18n)");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](37, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](39, "mat-card-content")(40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](41, " Resources are used for labels and things like that in the App. They are usually needed to create multi-lingual views and such, and should not be used for App-Settings. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](42, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](43, "docs");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](44, "table", 7)(45, "thead")(46, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](47, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](48, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](49, "System Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](50, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](51, "Custom Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](52, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](53, AppConfigurationComponent_Conditional_0_Conditional_53_Template, 14, 6, "tr")(54, AppConfigurationComponent_Conditional_0_Conditional_54_Template, 15, 7)(55, AppConfigurationComponent_Conditional_0_Conditional_55_Template, 16, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](56, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](57, "mat-card-actions", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](58, "app-docs-link-helper", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](59, "a", 13)(60, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](61, "manage_search");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](63, "Analyze Combined Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](64, AppConfigurationComponent_Conditional_0_ng_template_64_Template, 7, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"])(66, AppConfigurationComponent_Conditional_0_ng_template_66_Template, 7, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](68, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](69, "app-app-configuration-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](70, "mat-card", 4)(71, "mat-card-header", 5)(72, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](73, "Performance");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](74, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](75, "bolt");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](76, "mat-card-content")(77, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](78, "LightSpeed Output Cache to speed up page by 50-90%");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](79, "app-feature-text-info", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](80, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](81, "mat-card-actions", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](82, "app-docs-link-helper", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](83, "a", 16)(84, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](85, "bolt");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](86, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](87, "Edit LightSpeed");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](88, "mat-card", 4)(89, "mat-card-header", 5)(90, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](91, "Security");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](92, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](93, "local_police");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](94, "mat-card-content")(95, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](96, "ContentSecurityPolicy (CSP) features in this App - for maximum control.");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](97, "app-feature-text-info", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](98, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](99, "mat-card-actions", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](100, "app-docs-link-helper", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](101, "mat-card", 4)(102, "mat-card-header", 5)(103, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](104, "Permissions");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](105, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](106, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](107, "mat-card-content")(108, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](109, "Give access to the entire app (all data). Use with care.");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](110, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](111, "mat-card-actions", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](112, "app-docs-link-helper", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](113, "a", 16)(114, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](115, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](116, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](117, " Edit Permissions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](118, AppConfigurationComponent_Conditional_0_Conditional_118_Template, 2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](119, "app-docs-link-helper", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](120, "a", 18)(121, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](122, " person ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](123, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](124, "Language Permissions");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    let tmp_20_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](ctx_r0.isGlobal || ctx_r0.isPrimary ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](ctx_r0.isGlobal ? 22 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](ctx_r0.isPrimary ? 23 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](ctx_r0.isApp ? 24 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("link", "https://go.2sxc.org/settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r0.urlToAnalyze(ctx_r0.AnalyzeParts.Settings), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](ctx_r0.isGlobal ? 53 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](ctx_r0.isPrimary ? 54 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](ctx_r0.isApp ? 55 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("link", "https://go.2sxc.org/settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r0.urlToAnalyze(ctx_r0.AnalyzeParts.Resources), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dialogSettings", ctx_r0.dialogSettings);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("featureNameId", "LightSpeedOutputCache")("asInfo", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("link", "https://go.2sxc.org/lightspeed");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("disabled", !ctx_r0.lightSpeedEnabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r0.urlToGetLightSpeedLink(), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ((tmp_20_0 = ctx_r0.viewModelSig()) == null ? null : tmp_20_0.appLightSpeedCount) || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("featureNameId", "ContentSecurityPolicy")("asInfo", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("link", "https://go.2sxc.org/csp");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("link", "https://docs.2sxc.org/basics/app/permissions.html");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r0.urlToOpenPermissions(), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"])("disabled", !ctx_r0.dialogSettings.Context.Enable.AppPermissions);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadge", ctx_r0.dialogSettings.Context.App.Permissions.Count || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](!ctx_r0.dialogSettings.Context.Enable.AppPermissions ? 118 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("link", "https://patrons.2sxc.org/features/feat/PermissionsByLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", ctx_r0.urlToOpenLanguagePermissions(ctx_r0.langPermsEnabled()), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matBadgeHidden", ctx_r0.langPermsEnabled());
  }
}
class AppConfigurationComponent {
  #dialogSvc;
  #contentTypesSvc;
  #appInternalsService;
  #contentItemsService;
  #dialogConfigSvc;
  #dialogRouter;
  #refresh;
  constructor(context, snackBar, matDialog, viewContainerRef, changeDetectorRef) {
    this.context = context;
    this.snackBar = snackBar;
    this.matDialog = matDialog;
    this.viewContainerRef = viewContainerRef;
    this.changeDetectorRef = changeDetectorRef;
    this.#dialogSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_14__.DialogService);
    this.#contentTypesSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services__WEBPACK_IMPORTED_MODULE_16__.ContentTypesService);
    this.eavConstants = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants;
    this.AnalyzeParts = _sub_dialogs_analyze_settings_analyze_settings_models__WEBPACK_IMPORTED_MODULE_19__.AnalyzeParts;
    this.SystemSettingsScopes = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes;
    this.AppScopes = _shared_models_dialog_context_models__WEBPACK_IMPORTED_MODULE_10__.AppScopes;
    // Url signals for edit routes
    this.appContentSystemSettingsUrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.signal)('');
    this.appContentCustomSettingsUrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.signal)('');
    this.appGlobalSystemSettingsUrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.signal)('');
    this.appSiteSystemSettingsUrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.signal)('');
    this.appGlobalSystemResourcesUrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.signal)('');
    this.appContentSystemResourcesUrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.signal)('');
    this.appSiteSystemResourcesUrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.signal)('');
    this.appContentCustomResourcesUrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.signal)('');
    this.appGlobalCustomResourcesUrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.signal)('');
    this.appGlobalCustomSettingsUrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.signal)('');
    this.appSiteCustomSettingsUrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.signal)('');
    this.appSiteCustomResourcesUrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.signal)('');
    // More proper ViewModel
    this.appSettingsInternal$ = new rxjs__WEBPACK_IMPORTED_MODULE_22__.Subject();
    this.appStateAdvanced = false;
    this.features = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.inject)(_features_features_scoped_service__WEBPACK_IMPORTED_MODULE_5__.FeaturesScopedService);
    this.lightSpeedEnabled = this.features.isEnabled[_features_feature_names__WEBPACK_IMPORTED_MODULE_3__.FeatureNames.LightSpeed];
    this.cspEnabled = this.features.isEnabled[_features_feature_names__WEBPACK_IMPORTED_MODULE_3__.FeatureNames.ContentSecurityPolicy];
    this.langPermsEnabled = this.features.isEnabled[_features_feature_names__WEBPACK_IMPORTED_MODULE_3__.FeatureNames.PermissionsByLanguage];
    this.#appInternalsService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_app_internals_service__WEBPACK_IMPORTED_MODULE_17__.AppInternalsService);
    this.#contentItemsService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_content_items_services_content_items_service__WEBPACK_IMPORTED_MODULE_2__.ContentItemsService);
    this.#dialogConfigSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_18__.DialogConfigAppService);
    this.#dialogRouter = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_12__.DialogRoutingService);
    this.#refresh = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.signal)(0);
    this.appIn = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.computed)(() => {
      const refresh = this.#refresh();
      return this.#appInternalsService.getAppInternals(undefined);
    });
    this.viewModelSig = (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.computed)(() => {
      const appInternalsSig = this.appIn()();
      if (!appInternalsSig) return null;
      const props = appInternalsSig?.EntityLists;
      const lsTypeName = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.appMetadata.LightSpeed.ContentTypeName;
      const result = {
        appLightSpeedCount: appInternalsSig.MetadataList.Items.filter(i => i._Type.Name === lsTypeName).length,
        systemSettingsCount: this.isPrimary ? props.SettingsSystem.filter(i => i.SettingsEntityScope === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.Site).length : props.SettingsSystem.filter(i => !i.SettingsEntityScope).length,
        customSettingsCount: props.AppSettings?.length,
        customSettingsFieldsCount: appInternalsSig.FieldAll.AppSettings?.length,
        systemResourcesCount: this.isPrimary ? props.ResourcesSystem.filter(i => i.SettingsEntityScope === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.Site).length : props.ResourcesSystem.filter(i => !i.SettingsEntityScope).length,
        customResourcesCount: props.AppResources?.length,
        customResourcesFieldsCount: appInternalsSig?.FieldAll.AppResources?.length
      };
      return result;
    });
    this.appGlobalSystemSettingsUrl = this.urlToEditSystem(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.contentTypes.systemSettings, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.App);
    this.appContentSystemSettingsUrl = this.urlToEditSystem(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.contentTypes.systemSettings, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.App);
    this.appSiteSystemSettingsUrl = this.urlToEditSystem(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.contentTypes.systemSettings, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.Site);
    this.appGlobalSystemResourcesUrl = this.urlToEditSystem(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.contentTypes.systemResources, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.App);
    this.appContentSystemResourcesUrl = this.urlToEditSystem(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.contentTypes.systemResources, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.App);
    this.appSiteSystemResourcesUrl = this.urlToEditSystem(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.contentTypes.systemResources, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.SystemSettingsScopes.Site);
    this.appContentCustomSettingsUrl = this.urlToEditDefault(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.contentTypes.settings);
    this.appContentCustomResourcesUrl = this.urlToEditDefault(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.contentTypes.resources);
    this.appGlobalCustomResourcesUrl = this.urlToEditCustom(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.contentTypes.customResources);
    this.appSiteCustomResourcesUrl = this.urlToEditCustom(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.contentTypes.customResources);
    this.appGlobalCustomSettingsUrl = this.urlToEditCustom(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.contentTypes.customSettings);
    this.appSiteCustomSettingsUrl = this.urlToEditCustom(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__.eavConstants.contentTypes.customSettings);
  }
  ngOnInit() {
    this.#dialogRouter.doOnDialogClosed(() => {
      this.#refresh.update(value => value + 1);
    });
    this.#dialogConfigSvc.getCurrent$().subscribe(dialogSettings => {
      this.dialogSettings = dialogSettings;
      const appScope = dialogSettings.Context.App.SettingsScope;
      this.isGlobal = appScope === _shared_models_dialog_context_models__WEBPACK_IMPORTED_MODULE_10__.AppScopes.Global;
      this.isPrimary = appScope === _shared_models_dialog_context_models__WEBPACK_IMPORTED_MODULE_10__.AppScopes.Site;
      this.isApp = appScope === _shared_models_dialog_context_models__WEBPACK_IMPORTED_MODULE_10__.AppScopes.App;
    });
  }
  ngOnDestroy() {
    this.snackBar.dismiss();
  }
  #urlTo(url, queryParams, errComponent) {
    let newUrl = '#' + this.#dialogRouter.urlSubRoute(url);
    if (queryParams) {
      newUrl += `?${new URLSearchParams(queryParams).toString()}`;
    }
    if (errComponent) {
      newUrl += `&errComponent=${errComponent}`;
    }
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
          error: 'AppAdmin.ErrorNoManyAppSettings'
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
    const sitePrimaryApp = this.dialogSettings.Context.Site.PrimaryApp;
    this.#dialogSvc.openAppAdministration(sitePrimaryApp.ZoneId, sitePrimaryApp.AppId, 'app');
  }
  openGlobalSettings() {
    const globalPrimaryApp = this.dialogSettings.Context.System.PrimaryApp;
    this.#dialogSvc.openAppAdministration(globalPrimaryApp.ZoneId, globalPrimaryApp.AppId, 'app');
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
  static {
    this.ɵfac = function AppConfigurationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppConfigurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_13__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_21__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({
      type: AppConfigurationComponent,
      selectors: [["app-app-configuration"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 1,
      consts: [["goToGlobal", ""], ["goToSite", ""], [1, "alert", "alert-info", "scope-info"], [1, "eav-cards-box"], [1, "eav-card"], [1, "eav-card-header"], ["href", "https://go.2sxc.org/settings", "target", "_blank"], [1, "eav-settings-and-resources-table"], [1, "eav-card-space-div"], ["align", "start"], [3, "link", "label", "icon"], ["mat-button", "", "tippy", "See the result of combining all settings", 1, "eav-button__with-icon", 3, "href"], [1, "eav-icon"], ["mat-button", "", "tippy", "See the result of combining all resources", 1, "eav-button__with-icon", 3, "href"], [3, "dialogSettings"], [3, "featureNameId", "asInfo"], ["mat-button", "", 1, "eav-button__with-icon", 3, "href", "disabled"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgePosition", "below after", "aria-hidden", "false", 1, "eav-icon", 3, "matBadge"], ["mat-button", "", 1, "eav-button__with-icon", 3, "href"], ["matBadgeSize", "small", "matBadge", "\uD83D\uDC8E", "matBadgePosition", "below after", "aria-hidden", "false", 1, "eav-icon", 3, "matBadgeHidden"], ["mat-icon-button", "", "tippy", "Edit global system settings", 3, "href"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgePosition", "below after", "aria-hidden", "false", 3, "matBadge"], ["mat-icon-button", "", "tippy", "Edit custom global settings", 3, "href"], ["mat-icon-button", "", "tippy", "Configure fields of the custom global settings", 3, "href"], ["mat-icon-button", "", "tippy", "Edit site system settings", 3, "href"], ["mat-icon-button", "", "tippy", "Configure fields of the custom site settings", 3, "href"], [4, "ngTemplateOutlet"], ["mat-icon-button", "", "tippy", "Edit app system settings", 3, "href"], ["mat-icon-button", "", "tippy", "Edit custom app settings", 3, "href"], ["mat-icon-button", "", "tippy", "Configure fields of the custom app settings", 3, "href"], ["mat-icon-button", "", "tippy", "Edit global system resources", 3, "href"], ["mat-icon-button", "", "tippy", "Edit custom global resources", 3, "href"], ["mat-icon-button", "", "tippy", "Configure fields of the custom global resources", 3, "href"], ["mat-icon-button", "", "tippy", "Edit site system resources", 3, "href"], ["mat-icon-button", "", "tippy", "Edit custom site resources", 3, "href"], ["mat-icon-button", "", "tippy", "Configure fields of the custom site resources", 3, "href"], ["mat-icon-button", "", "tippy", "Edit app system resources", 3, "href"], ["mat-icon-button", "", "tippy", "Edit custom app resources", 3, "href"], ["mat-icon-button", "", "tippy", "Configure fields of the custom app resources", 3, "href"], ["mat-icon-button", "", "tippy", "Go to global", 3, "click"], ["mat-icon-button", "", "tippy", "Go to site", 3, "click"]],
      template: function AppConfigurationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, AppConfigurationComponent_Conditional_0_Template, 125, 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "router-outlet");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](ctx.viewModelSig() ? 0 : -1);
        }
      },
      dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatIconAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatIconButton, _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__.MatBadge, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgTemplateOutlet, _app_configuration_card_app_configuration_card_component__WEBPACK_IMPORTED_MODULE_20__.AppConfigurationCardComponent, _features_feature_text_info_feature_text_info_component__WEBPACK_IMPORTED_MODULE_4__.FeatureTextInfoComponent, _angular_router__WEBPACK_IMPORTED_MODULE_30__.RouterOutlet, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_8__.TippyDirective, _admin_shared_docs_link_helper_docs_link_helper_component__WEBPACK_IMPORTED_MODULE_1__.DocsLinkHelperComponent],
      styles: [".eav-settings-and-resources-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.eav-settings-and-resources-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.eav-settings-and-resources-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9hcHAtY29uZmlndXJhdGlvbi9hcHAtY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7QUFDSjtBQUVFO0VBQ0UsZ0JBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIi5lYXYtc2V0dGluZ3MtYW5kLXJlc291cmNlcy10YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIHRib2R5IHRoIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
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

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_app-configuration_app-configuration_component_ts.js.map