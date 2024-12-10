"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_apps-management_sub-dialogs_registration_registration_component_ts"],{

/***/ 13611:
/*!****************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/sub-dialogs/registration/registration.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegistrationComponent: () => (/* binding */ RegistrationComponent)
/* harmony export */ });
/* harmony import */ var _raw_loader_assets_2sxc_patrons_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./assets/2sxc-patrons.svg */ 11686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core */ 88692);
/* harmony import */ var _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/file-upload-dialog */ 34616);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pipes/safe-html.pipe */ 69914);
/* harmony import */ var _shared_services_clipboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/clipboard.service */ 25081);
/* harmony import */ var _services_features_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/features-config.service */ 33992);
/* harmony import */ var _services_zone_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/zone.service */ 67130);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 12587);




















function RegistrationComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Fingerprint:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistrationComponent_Conditional_22_Template_span_click_7_listener() {
      let tmp_2_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.clipboard.copyToClipboard((tmp_2_0 = ctx_r1.systemInfoSet()()) == null ? null : tmp_2_0.System.Fingerprint));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "br")(10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ((tmp_1_0 = ctx_r1.systemInfoSet()()) == null ? null : tmp_1_0.License.Owner) ? "this system is registered to " + ((tmp_1_0 = ctx_r1.systemInfoSet()()) == null ? null : tmp_1_0.License.Owner) : "this system is not yet registered", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tippy", "Click to copy to clipboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (tmp_3_0 = ctx_r1.systemInfoSet()()) == null ? null : tmp_3_0.System.Fingerprint, "");
  }
}
function RegistrationComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistrationComponent_Conditional_37_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.openLicenseRegistration(ctx_r1.systemInfoSet()()));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "app_registration");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
class RegistrationComponent {
  #zoneSvc;
  #featuresConfigSvc;
  constructor(snackBar, matDialog, viewContainerRef) {
    this.snackBar = snackBar;
    this.matDialog = matDialog;
    this.viewContainerRef = viewContainerRef;
    this.hostClass = 'dialog-component';
    // patrons logo
    this.logo = _raw_loader_assets_2sxc_patrons_svg__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.#zoneSvc = (0,_core__WEBPACK_IMPORTED_MODULE_1__.transient)(_services_zone_service__WEBPACK_IMPORTED_MODULE_7__.ZoneService);
    this.#featuresConfigSvc = (0,_core__WEBPACK_IMPORTED_MODULE_1__.transient)(_services_features_config_service__WEBPACK_IMPORTED_MODULE_6__.FeaturesConfigService);
    this.clipboard = (0,_core__WEBPACK_IMPORTED_MODULE_1__.transient)(_shared_services_clipboard_service__WEBPACK_IMPORTED_MODULE_5__.ClipboardService);
    this.#refresh = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.signal)(0);
    this.systemInfoSet = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.computed)(() => {
      const r = this.#refresh();
      return this.#zoneSvc.getSystemInfo(undefined);
    });
  }
  #refresh;
  openLicenseRegistration(systemInfoSet) {
    window.open(`https://patrons.2sxc.org/register?fingerprint=${systemInfoSet.System.Fingerprint}`, '_blank');
  }
  retrieveLicense() {
    this.#featuresConfigSvc.retrieveLicense().subscribe({
      error: () => {
        this.snackBar.open('Failed to retrieve license. Please check console for more information', undefined, {
          duration: 3000
        });
      },
      next: info => {
        const message = `License ${info.Success ? 'Info' : 'Error'}: ${info.Message}`;
        const duration = info.Success ? 3000 : 100000;
        const panelClass = info.Success ? undefined : 'snackbar-error';
        this.snackBar.open(message, undefined, {
          duration,
          panelClass
        });
        this.#refreshSystemInfo();
      }
    });
  }
  registerManually() {
    window.open(`https://patrons.2sxc.org/`, '_blank');
  }
  openLicenseUpload() {
    const data = {
      title: 'Upload license',
      description: '',
      allowedFileTypes: 'json',
      upload$: files => this.#featuresConfigSvc.uploadLicense(files[0])
    };
    const dialogRef = this.matDialog.open(_shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_2__.FileUploadDialogComponent, {
      data,
      autoFocus: false,
      viewContainerRef: this.viewContainerRef,
      width: '650px'
    });
    dialogRef.afterClosed().subscribe(refresh => {
      if (refresh) {
        this.#refreshSystemInfo();
      }
    });
  }
  #refreshSystemInfo() {
    this.#refresh.set(this.#refresh() + 1);
  }
  static {
    this.ɵfac = function RegistrationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewContainerRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: RegistrationComponent,
      selectors: [["app-registration"]],
      hostVars: 1,
      hostBindings: function RegistrationComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
      decls: 68,
      vars: 5,
      consts: [[1, "eav-dialog"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], [1, "eav-dialog-content"], ["href", "https://patrons.2sxc.org/", "target", "_blank", 2, "width", "50%", "float", "right", 3, "innerHtml"], ["href", "https://go.2sxc.org/bundles", "target", "_blank"], [1, "eav-registration-cards"], [1, "eav-registration-cards__left"], ["mat-card-avatar", ""], [1, "eav-card-header-avatar-icon"], ["align", "start"], ["mat-button", "", "tippy", "Register", 1, "eav-button__with-icon"], ["mat-button", "", "tippy", "Retrieve license", 1, "eav-button__with-icon", 3, "click"], [1, "eav-icon"], [1, "eav-registration-cards__right"], [1, "card-actions"], ["mat-button", "", "tippy", "Register", 1, "eav-button__with-icon", 3, "click"], ["mat-button", "", "tippy", "Upload license", 1, "eav-button__with-icon", 3, "click"], [3, "click", "tippy"]],
      template: function RegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Register this System on 2sxc Patrons");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 3)(5, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Basic Mode: Free Registration with Goodies");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " You can just register for free to unlock some features. They are mainly enhancements for which we wish to contact you in case of critical security issues. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "safeHtml");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Hero Mode: Support 2sxc, get Awesome Stuff");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, " If you want to become a champion and pay a monthly contribution to support the open-source development of 2sxc, you will get some ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "really nice features");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " as well \uD83D\uDE80. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, " Thanks for loving and supporting 2sxc \uD83D\uDC96 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "System Specs");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, RegistrationComponent_Conditional_22_Template, 11, 3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 6)(24, "mat-card", 7)(25, "mat-card-header")(26, "div", 8)(27, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "settings_applications");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Automatic Registration");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "mat-card-subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "The simple way");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "mat-card-content")(34, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, " This will open 2sxc Patrons and give it the system fingerprint, so you can then log in and assign it a name and features you want to activate. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "mat-card-actions", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, RegistrationComponent_Conditional_37_Template, 5, 0, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_38_listener() {
            return ctx.retrieveLicense();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "mat-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "download_for_offline");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "Retrieve license");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "mat-card", 14)(44, "mat-card-header")(45, "div", 8)(46, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "waving_hand");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "Manual Registration");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "mat-card-subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "Offline or special scenarios");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "mat-card-content")(53, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, " For offline or special scenarios you can just go to 2sxc Patrons and copy/paste the fingerprint yourself. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](55, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, " Click on the fingerprint above to copy it to your clipboard. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 15)(58, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_58_listener() {
            return ctx.registerManually();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "mat-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60, "app_registration");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, "Register Manually");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_63_listener() {
            return ctx.openLicenseUpload();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "mat-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65, "cloud_upload");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "Upload license");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 3, ctx.logo), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.systemInfoSet() ? 22 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.systemInfoSet() ? 37 : -1);
        }
      },
      dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_3__.TippyDirective, _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__.SafeHtmlPipe],
      styles: [".eav-registration-cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n.eav-registration-cards__left[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-right: 4px;\n}\n.eav-registration-cards__right[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-left: 4px;\n}\n.eav-registration-cards[_ngcontent-%COMP%]   .eav-card-header-avatar-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n}\n.eav-registration-cards[_ngcontent-%COMP%]   .eav-card-space-div[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.eav-registration-cards[_ngcontent-%COMP%]   .eav-button__with-icon[_ngcontent-%COMP%]   .eav-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  height: 24px;\n  width: 24px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcHMtbWFuYWdlbWVudC9zdWItZGlhbG9ncy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vcHJvamVjdHMvZWF2LXVpL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQURGO0FBR0U7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUlFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBRko7QUFLRTtFQUNFLGVDQ21CO0VEQW5CLFlDQ2dCO0VEQWhCLFdDQ2U7QURKbkI7QUFNRTtFQUNFLFlBQUE7QUFKSjtBQVNNO0VBQ0UsZUNQb0I7RURRcEIsWUNQaUI7RURRakIsV0NQZ0I7QURBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmVhdi1yZWdpc3RyYXRpb24tY2FyZHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHJcbiAgJl9fbGVmdCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgfVxyXG5cclxuICAmX19yaWdodCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICB9XHJcblxyXG4gIC5lYXYtY2FyZC1oZWFkZXItYXZhdGFyLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAkZWF2LWF2YXRhci1mb250LXNpemU7XHJcbiAgICBoZWlnaHQ6ICRlYXYtYXZhdGFyLWhlaWdodDtcclxuICAgIHdpZHRoOiAkZWF2LWF2YXRhci13aWR0aDtcclxuICB9XHJcblxyXG4gIC5lYXYtY2FyZC1zcGFjZS1kaXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmVhdi1idXR0b24ge1xyXG4gICAgJl9fd2l0aC1pY29uIHtcclxuICAgICAgLmVhdi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6ICRlYXYtYnV0dG9uLWljb24tZm9udC1zaXplO1xyXG4gICAgICAgIGhlaWdodDogJGVhdi1idXR0b24taWNvbi1oZWlnaHQ7XHJcbiAgICAgICAgd2lkdGg6ICRlYXYtYnV0dG9uLWljb24td2lkdGg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCIkZGVmYXVsdC1mb250LXNpemU6IDE0cHg7XHJcblxyXG4kZWF2LWdsb3c6ICM0MTU0YzA7XHJcblxyXG4kZWF2LWRpYWxvZy1wYWRkaW5nOiAyNHB4O1xyXG4kZWF2LWhlYWRlci1wYWRkaW5nLWJvdHRvbTogMTJweDtcclxuXHJcbiRlYXYtZGlhbG9nLXRpdGxlLWZvbnQtc2l6ZTogMjlweDtcclxuJGVhdi1kaWFsb2ctdGl0bGUtbGluZS1oZWlnaHQ6IDI5cHg7XHJcbiRlYXYtZGlhbG9nLXRpdGxlLWZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4kZWF2LWRpYWxvZy1zdWJ0aXRsZS1mb250LXNpemU6IDI5cHg7XHJcbiRlYXYtZGlhbG9nLXN1YnRpdGxlLWxpbmUtaGVpZ2h0OiAyOXB4O1xyXG4kZWF2LWRpYWxvZy1zdWJ0aXRsZS1mb250LXdlaWdodDogNDAwO1xyXG5cclxuJGVhdi1jYXJkLXdpZHRoOiA1NjBweDtcclxuJGVhdi1tYXJnaW46IDhweDtcclxuJGVhdi1wYWRkaW5nOiA4cHg7XHJcblxyXG4kZWF2LWF2YXRhci1mb250LXNpemU6IDQwcHg7XHJcbiRlYXYtYXZhdGFyLWhlaWdodDogNDBweDtcclxuJGVhdi1hdmF0YXItd2lkdGg6IDQwcHg7XHJcblxyXG4kZWF2LWJ1dHRvbi1pY29uLWZvbnQtc2l6ZTogMjRweDtcclxuJGVhdi1idXR0b24taWNvbi1oZWlnaHQ6IDI0cHg7XHJcbiRlYXYtYnV0dG9uLWljb24td2lkdGg6IDI0cHg7XHJcblxyXG4kZWF2LW1hcmdpbi1zcGFjZTogNHB4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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

/***/ }),

/***/ 11686:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/eav-ui/src/app/apps-management/sub-dialogs/registration/assets/2sxc-patrons.svg ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<!-- Generator: Adobe Illustrator 26.5.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r\n<svg version=\"1.1\" id=\"Ebene_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 1218.9 250\" style=\"enable-background:new 0 0 1218.9 250;\" xml:space=\"preserve\">\r\n<style type=\"text/css\">\r\n\t.st0{fill:#00003E;}\r\n\t.st1{enable-background:new    ;}\r\n\t.st2{fill:#FFFFFF;}\r\n\t.st3{fill:#323035;}\r\n\t.st4{fill:#00CCFF;}\r\n</style>\r\n<path class=\"st0\" d=\"M164.4,250H0V85.6C0,38.4,38.4,0,85.6,0H250v164.4C250,211.6,211.6,250,164.4,250z\"/>\r\n<g class=\"st1\">\r\n\t<path class=\"st0\" d=\"M373.4,82.3c-8.2,1.3-13.6,4.4-19.6,10.4c-1.8,1.8-2.7,1.4-4.3-0.3l-6.1-6.5c-1.4-1.7-1.8-2.6-0.3-4.3\r\n\t\tc8.7-8.2,17.6-13.1,30.2-14.3V82.3z M380.5,67.1c27.8,2,38.5,26.7,23,45.4l-44.2,55.8h-15.5c-1,0-1.3-0.3-1.3-1.3v-1.7\r\n\t\tc0-1,0.3-1.3,1.3-2.6l45.9-56.9c8.7-10.6,3-22.2-9.2-23.6V67.1z M380.1,153.7h28.7c2.3,0,3,0.6,3,3v8.7c0,2.3-0.7,3-3,3h-40.3\r\n\t\tL380.1,153.7z\"/>\r\n\t<path class=\"st0\" d=\"M448.8,169.6c-7.4-1.1-15.2-2.8-24.1-8.8c-2-1.4-1.7-2.3-0.7-4.3l3.1-5.4c1-2,1.7-3,4-1.3\r\n\t\tc4.8,3.3,10.2,6,17.7,7.1V169.6z M455.9,157.2c8.7-0.7,12.8-4.5,12.8-9.7c0-4.7-6.2-7-17-8.4c-14.8-2-27.7-6.5-27.7-21.7\r\n\t\tc0-13.3,10.5-22.6,28.1-23v12.6c-9.2,0.6-12.8,4.1-12.8,9.5c0,5.5,6.1,7,17,8.5c14.8,1.8,27.7,6.5,27.7,21.6\r\n\t\tc0,13.3-10.9,22.4-28.1,23.1V157.2z M459.2,94.9c6.2,1.1,12.2,2.6,20.9,7.5c2.3,1.4,1.7,2.4,0.9,4.4l-3.1,5.3c-1,2-1.8,2.8-4,1.4\r\n\t\tc-5.3-3.3-9.1-5.1-14.6-6V94.9z\"/>\r\n\t<path class=\"st0\" d=\"M561.7,165.3c1.6,2.3,0.9,3-1.4,3h-12.6c-2,0-2.8-0.6-4.4-3L494.5,99c-1.4-2.3-0.7-3,1.4-3h12.8\r\n\t\tc2.1,0,3,0.6,4.4,3L561.7,165.3z M523.2,150.3l-10.1,15.1c-1.4,2.4-2.3,3-4.4,3H496c-2.1,0-2.8-0.7-1.4-3l19.3-27.7L523.2,150.3z\r\n\t\t M533.2,114.1L543.2,99c1.6-2.6,2.4-3,4.4-3h12.6c2.3,0,3,0.7,1.4,3l-19.2,27.8L533.2,114.1z\"/>\r\n\t<path class=\"st0\" d=\"M604.4,109.3c-9.8,1.7-18,10.6-18,23c0,12.1,7.8,21.2,18,22.9v14.6c-19.7-1.8-34.1-18.5-34.1-37.5\r\n\t\tc0-19.2,14.3-35.8,34.1-37.6V109.3z M611.4,94.6c8.4,0.9,16,4,22.7,10.5c1.3,1.3,1,2-0.4,3.7l-5.3,5.7c-1.6,1.7-2.6,2.1-4.3,0.6\r\n\t\tc-4.3-4-8.7-5.3-12.8-6V94.6z M611.4,155.3c5.1-0.9,8.8-2.4,12.8-6c1.8-1.6,2.7-1.1,4.3,0.6l5.3,5.7c1.4,1.7,1.7,2.4,0.4,3.7\r\n\t\tc-6.8,6.5-13.9,9.5-22.7,10.5V155.3z\"/>\r\n\t<path class=\"st0\" d=\"M705.4,165.3c-0.1,2.3-0.7,3-3,3h-11.2c-2.4,0-3-0.7-3-3V71.9c0-2.4,0.7-3,3-3h14.2V165.3z M712.6,114.6H725\r\n\t\tc14.8,0,19.6-7,19.6-15.9c0-8.7-4.8-15.5-19.6-15.5h-12.4V68.9h13.1c16.6,0,35.5,6.8,35.5,29.8S742.3,129,725.7,129h-13.1V114.6z\"\r\n\t\t/>\r\n\t<path class=\"st0\" d=\"M810.3,166.1c-5.5,2.8-9.7,3.8-16.5,3.8c-12.8,0-24.8-7.8-24.8-23.7c0-15.5,12.2-22.9,27.5-22.9\r\n\t\tc4.4,0,8,0.6,13.8,1.7v11.2c-4.3-1.1-6.8-1.4-9.9-1.4c-10.8,0-15.3,4.8-15.3,11.4c0,5.5,4.1,11.4,13.9,11.4c4.3,0,7.7-1.4,11.4-3.7\r\n\t\tV166.1z M817.4,127c0-13.3-3.4-18.6-16.5-18.6c-8.1,0-15.6,1.1-20.9,2.1c-2.3,0.3-2.8-0.6-3.4-2.8l-1.7-6.8\r\n\t\tc-0.6-2.3-0.3-3.1,1.8-3.7c1.7-0.4,14.3-2.7,24.8-2.7c27.1,0,31.9,11.9,31.9,34.4v36.5c0,2.3-0.6,3-3,3H822c-2,0-3.1-1-4.5-3V127z\"\r\n\t\t/>\r\n\t<path class=\"st0\" d=\"M851.9,109c-2.3,0-3-0.7-3-3v-7c0-2.3,0.7-3,3-3h5.3V82.1c0-2.3,0.6-3,3-3h10.1c2.3,0,3,0.7,3,3V96h21.9\r\n\t\tc2.3,0,3,0.7,3,3.1v6.8c0,2.3-0.7,3-3,3H851.9z M873.2,116.2v21.3c0,12.8,4.4,17.9,13.1,17.9c3.1,0,5.5-0.3,8.5-1.7\r\n\t\tc2.7-1.4,3.3-1.3,3.8,1.7l1.3,7.1c0.4,2.1,0.3,2.8-1.6,3.8c-5.7,3.5-11.9,3.5-13.8,3.5c-18.7,0-27.4-11.8-27.4-31.4v-22.3H873.2z\"\r\n\t\t/>\r\n\t<path class=\"st0\" d=\"M934.2,165.3c-0.1,2.3-0.7,3-3,3H921c-2.3,0-3-0.7-3-3V99c0-2.3,0.7-3,3-3h5.1c4.4,0,5,0.9,8.1,4.4V165.3z\r\n\t\t M941.3,99.6c3.8-2.7,8.9-5.1,18.6-5.1c2.8,0,3.1,0.9,2.8,2.8l-1.6,10.4c-0.4,2.3-1.1,2.8-3.4,2.8c-7,0-12.1,1.8-16.5,5.5V99.6z\"/>\r\n\t<path class=\"st0\" d=\"M1003.7,169.7c-18.7-1.8-33.9-17.8-33.9-37.5c0-19.9,15.3-35.9,33.9-37.6v14.8c-10.2,1.8-17.9,11.1-17.9,22.9\r\n\t\tc0,12.2,8.1,21.3,17.9,23V169.7z M1010.8,155.3c10.2-1.7,18-11.1,18-23c0-11.9-8-21.3-18-22.9V94.6c19.2,2,34.1,18,34.1,37.6\r\n\t\tc0,19.5-14.8,35.6-34.1,37.5V155.3z\"/>\r\n\t<path class=\"st0\" d=\"M1079.6,165.3c0,2.3-0.7,3-3,3h-10.2c-2.3,0-3-0.7-3-3V99c0-2.3,0.7-3,3-3h5.1c2.7,0,4.4,0.4,5.5,1.7l2.6,4\r\n\t\tV165.3z M1086.7,98.3c3.4-2.6,7.7-3.8,12.9-3.8c15.6,0,27.5,8.4,27.5,32.8v38.1c0,2.3-0.7,3-3,3h-10.2c-2.3,0-3-0.7-3-3v-34.5\r\n\t\tc0-15.1-5.5-21.9-15.5-21.9c-4.1,0-6.7,1.4-8.8,3.3V98.3z\"/>\r\n\t<path class=\"st0\" d=\"M1168.2,169.6c-7.4-1.1-15.2-2.8-24.1-8.8c-2-1.4-1.7-2.3-0.7-4.3l3.1-5.4c1-2,1.7-3,4-1.3\r\n\t\tc4.8,3.3,10.2,6,17.7,7.1V169.6z M1175.3,157.2c8.7-0.7,12.8-4.5,12.8-9.7c0-4.7-6.2-7-17-8.4c-14.8-2-27.7-6.5-27.7-21.7\r\n\t\tc0-13.3,10.5-22.6,28.1-23v12.6c-9.2,0.6-12.8,4.1-12.8,9.5c0,5.5,6.1,7,17,8.5c14.8,1.8,27.7,6.5,27.7,21.6\r\n\t\tc0,13.3-10.9,22.4-28.1,23.1V157.2z M1178.5,94.9c6.2,1.1,12.2,2.6,20.9,7.5c2.3,1.4,1.7,2.4,0.9,4.4l-3.1,5.3c-1,2-1.8,2.8-4,1.4\r\n\t\tc-5.3-3.3-9.1-5.1-14.6-6V94.9z\"/>\r\n</g>\r\n<path class=\"st2\" d=\"M160.7,88.1c-2.4,0-4.8-0.5-7-1.5c-8.6-3.9-12.5-14-8.7-22.6c1.9-4.2,5.2-7.4,9.5-9c4.3-1.6,8.9-1.5,13.1,0.4\r\n\tc4.2,1.8,7.4,5.1,9,9.4c1.7,4.3,1.5,9-0.3,13.2c-1.9,4.2-5.2,7.4-9.5,9C164.9,87.8,162.8,88.1,160.7,88.1z M160.7,58.1\r\n\tc-1.5,0-3.1,0.3-4.6,0.9c-3.2,1.2-5.7,3.7-7.2,6.8c-2.9,6.5,0,14.1,6.5,17c3.2,1.4,6.7,1.5,9.9,0.3c3.2-1.2,5.7-3.7,7.2-6.8\r\n\tc1.4-3.2,1.5-6.7,0.3-9.9c-1.2-3.2-3.6-5.7-6.8-7.1C164.3,58.5,162.5,58.1,160.7,58.1z\"/>\r\n<path class=\"st2\" d=\"M168,112.9c-0.8,0-1.5-0.4-1.9-1.2c-0.5-1-0.1-2.3,0.9-2.8l33.8-17.2c0.2-0.1,0.4-0.4,0.4-0.6\r\n\tc0-0.2,0.1-0.5-0.1-0.8c-0.3-0.4-0.8-0.5-1.2-0.3c-0.2,0.1-0.3,0.1-0.5,0.1l-26.6,4.6c-1.1,0.2-2.2-0.6-2.4-1.7s0.6-2.2,1.7-2.4\r\n\tl26.4-4.6c2.3-0.8,4.8,0,6.1,2c0.8,1.2,1.1,2.6,0.7,4c-0.3,1.4-1.2,2.6-2.4,3.3c0,0-0.1,0-0.1,0.1L169,112.7\r\n\tC168.6,112.8,168.3,112.9,168,112.9z\"/>\r\n<path class=\"st3\" d=\"M163.4,100.9c-0.5,0-1-0.2-1.3-0.6l-2.2-2.8c-0.6-0.7-0.4-1.8,0.3-2.4c0.7-0.6,1.8-0.4,2.4,0.3l2.2,2.8\r\n\tc0.6,0.7,0.4,1.8-0.3,2.4C164.1,100.8,163.8,100.9,163.4,100.9z\"/>\r\n<path class=\"st2\" d=\"M91.9,191.2c-0.8,0-1.7-0.2-2.4-0.5c-0.2,0-0.3-0.1-0.5-0.2c-1.5-0.8-2.5-2.1-3-3.7c-0.5-1.6-0.3-3.3,0.5-4.8\r\n\tl41.2-69.2c0.6-1,1.9-1.3,2.9-0.7c1,0.6,1.3,1.9,0.7,2.9l-41.2,69.1c-0.5,0.8-0.2,1.9,0.7,2.5c0.1,0,0.2,0.1,0.3,0.1\r\n\tc0.7,0.4,1.5,0.2,2.2-0.3l48.6-47.3l10.7-21.4l-1.3-24l-3.9-2.1c-0.1,0-0.2-0.1-0.2-0.1c-2.8-2.1-6.4-2.7-9.8-1.7l-25.1,8.7\r\n\tl-13.3,24.1c-0.2,0.3-0.1,0.7,0.2,0.9c0.3,0.2,0.8,0.1,1-0.2l14.8-18.7c0.3-0.4,0.7-0.6,1.1-0.7l24.1-6c1.1-0.3,2.3,0.4,2.6,1.5\r\n\tc0.3,1.1-0.4,2.3-1.5,2.6l-23.4,5.8L103.5,126c-1.6,2-4.5,2.4-6.6,1c-2.1-1.4-2.8-4.2-1.6-6.5L109,95.8c0.3-0.5,0.7-0.8,1.2-1\r\n\tl25.9-9c4.7-1.4,9.6-0.6,13.5,2.2l4.8,2.6c0.6,0.4,1,1,1.1,1.7l1.4,25.7c0,0.4-0.1,0.7-0.2,1.1l-11.1,22.2c-0.1,0.2-0.2,0.4-0.4,0.6\r\n\tl-48.9,47.6c0,0-0.1,0.1-0.1,0.1C94.9,190.6,93.4,191.2,91.9,191.2z\"/>\r\n<path class=\"st2\" d=\"M135.9,186.4c-1.5,0-3-0.6-4.1-1.7c-1.9-2.1-2.1-5.2-0.4-7.5l10.8-13.9l-6.3-6.4c-0.8-0.8-0.8-2.2,0-3\r\n\tc0.8-0.8,2.2-0.8,3,0l7.6,7.7c0.7,0.8,0.8,1.9,0.2,2.8l-11.9,15.3c-0.5,0.6-0.4,1.5,0.1,2.1c0.6,0.6,1.5,0.6,2.2,0l23.5-20.8\r\n\tl-14.2-15.3c-0.8-0.9-0.7-2.2,0.1-3c0.9-0.8,2.2-0.7,3,0.1l15.7,16.9c0.4,0.4,0.6,1,0.6,1.5c0,0.6-0.3,1.1-0.7,1.5L139.7,185\r\n\tC138.6,185.9,137.2,186.4,135.9,186.4z\"/>\r\n<g>\r\n\t<path class=\"st4\" d=\"M116.8,87.4l-62.5,10c-0.7,0.1-1,0.9-0.7,1.5c2.3,4,9.2,17.2,6.1,28.1c-3.6,12.9-10,42.1,20.7,53\r\n\t\tc0.4,0.2,1,0,1.2-0.4l39.3-65.2c0.5-0.8-0.2-1.7-1.1-1.5l-1.3,0.4c-0.2,0.1-0.4,0.2-0.5,0.3l-12.5,15.7c0,0.1-0.1,0.1-0.2,0.2\r\n\t\tc-3.1,2.6-7.7,2.5-10.7-0.1l-0.1-0.1c-2.8-2.5-3.7-6.5-2-9.9l13.8-26.5c0.1-0.2,0.3-0.4,0.5-0.5l10.7-3.3\r\n\t\tC118.4,88.7,117.9,87.2,116.8,87.4z\"/>\r\n\t<path class=\"st0\" d=\"M80.8,182.1c-0.4,0-0.8-0.1-1.1-0.2c-22.5-8-29.9-26.7-21.9-55.4c2.9-10.1-3.8-22.9-5.9-26.6\r\n\t\tc0,0,0-0.1-0.1-0.1c-0.4-0.9-0.4-1.9,0-2.8c0.4-0.8,1.2-1.4,2.2-1.5l62.5-10c1.5-0.3,2.9,0.6,3.4,2.1c0.4,1.4-0.2,2.8-1.5,3.4\r\n\t\tc-0.1,0-0.1,0.1-0.2,0.1l-10.2,3.1l-13.6,26.2c-1.3,2.5-0.6,5.5,1.6,7.5c0,0,0.1,0.1,0.1,0.1l0,0c2.3,1.9,5.7,2,8,0.1c0,0,0,0,0,0\r\n\t\tl12.5-15.6c0-0.1,0.1-0.1,0.2-0.2c0.3-0.3,0.7-0.5,1-0.7c0.1,0,0.2-0.1,0.3-0.1l1.3-0.4c0.1,0,0.1,0,0.2,0c1.2-0.3,2.5,0.2,3.2,1.2\r\n\t\tc0.7,1,0.7,2.3,0.1,3.3l-39.3,65.1c-0.3,0.6-0.9,1.1-1.6,1.3C81.4,182,81.1,182.1,80.8,182.1z M56,99.1c3.2,5.8,8.6,17.9,5.6,28.4\r\n\t\tc-7.4,26.4-1.3,42.9,18.7,50.3l34-56.4l-7.1,8.9c-0.1,0.2-0.4,0.5-0.7,0.7c-3.8,3.2-9.5,3.1-13.3-0.1c0,0-0.1-0.1-0.1-0.1l-0.1-0.1\r\n\t\tc-3.5-3.2-4.5-8.1-2.4-12.2L104.5,92c0.1-0.2,0.3-0.5,0.5-0.7L56,99.1z M106.7,130.9C106.7,130.9,106.7,130.9,106.7,130.9\r\n\t\tC106.7,130.9,106.7,130.9,106.7,130.9z M103.5,129.3C103.5,129.3,103.5,129.3,103.5,129.3C103.5,129.3,103.5,129.3,103.5,129.3z\r\n\t\t M103.5,129.3C103.5,129.3,103.5,129.3,103.5,129.3C103.5,129.3,103.5,129.3,103.5,129.3z M103.5,129.3L103.5,129.3L103.5,129.3z\r\n\t\t M119.2,113.4C119.2,113.4,119.2,113.4,119.2,113.4L119.2,113.4z M54.6,99.4L54.6,99.4C54.6,99.4,54.6,99.4,54.6,99.4z M108.1,93.8\r\n\t\tL108.1,93.8C108.1,93.8,108.1,93.8,108.1,93.8z M117.2,89.4C117.2,89.4,117.2,89.4,117.2,89.4C117.2,89.4,117.2,89.4,117.2,89.4z\"\r\n\t\t/>\r\n</g>\r\n</svg>\r\n");

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_apps-management_sub-dialogs_registration_registration_component_ts.js.map