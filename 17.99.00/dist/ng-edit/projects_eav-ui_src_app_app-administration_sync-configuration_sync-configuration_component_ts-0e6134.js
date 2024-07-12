"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_sync-configuration_sync-configuration_component_ts-0e6134"],{

/***/ 46364:
/*!*******************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sync-configuration/sync-configuration.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SyncConfigurationComponent: () => (/* binding */ SyncConfigurationComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/base-with-child-dialog.component */ 61735);
/* harmony import */ var _services_export_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/export-app.service */ 320);
/* harmony import */ var _services_import_app_parts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/import-app-parts.service */ 58624);
/* harmony import */ var _services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/app-dialog-config.service */ 22743);
/* harmony import */ var _features_feature_text_info_feature_text_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/feature-text-info/feature-text-info.component */ 95469);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core */ 34447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);






















function SyncConfigurationComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " In Advanced mode you can also sync all the site files used by this app. They will be placed in a folder inside ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "App_Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " and allow sync/restore with git or another server. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SyncConfigurationComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-feature-text-info", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("featureNameId", "AppSyncWithSiteFiles");
  }
}
function SyncConfigurationComponent_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SyncConfigurationComponent_Conditional_71_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.exportAppXml(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "more_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Save state");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SyncConfigurationComponent_Conditional_71_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.resetApp(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "restore");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Restore state");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function SyncConfigurationComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SyncConfigurationComponent_Conditional_72_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.exportAppXml(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "more_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Save with Assets");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SyncConfigurationComponent_Conditional_72_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.resetApp(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "restore");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Restore with Assets");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
class SyncConfigurationComponent extends _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_0__.BaseWithChildDialogComponent {
  constructor(router, route, snackBar, appDialogConfigService) {
    super(router, route);
    this.router = router;
    this.route = route;
    this.snackBar = snackBar;
    this.appDialogConfigService = appDialogConfigService;
    this.importAppPartsService = (0,_core__WEBPACK_IMPORTED_MODULE_5__.transient)(_services_import_app_parts_service__WEBPACK_IMPORTED_MODULE_2__.ImportAppPartsService);
    this.exportAppService = (0,_core__WEBPACK_IMPORTED_MODULE_5__.transient)(_services_export_app_service__WEBPACK_IMPORTED_MODULE_1__.ExportAppService);
    this.appStateAdvanced = false;
  }
  ngOnInit() {
    this.appDialogConfigService.getCurrent$().subscribe(dialogSettings => {
      this.dialogSettings = dialogSettings;
    });
  }
  ngOnDestroy() {
    this.snackBar.dismiss();
    super.ngOnDestroy();
  }
  exportApp() {
    this.router.navigate([`export`], {
      relativeTo: this.route.parent.firstChild
    });
  }
  exportParts() {
    this.router.navigate([`export/parts`], {
      relativeTo: this.route.parent.firstChild
    });
  }
  importParts() {
    this.router.navigate([`import/parts`], {
      relativeTo: this.route.parent.firstChild
    });
  }
  exportAppXml(withFiles) {
    this.snackBar.open('Exporting...');
    this.exportAppService.exportForVersionControl({
      includeContentGroups: true,
      resetAppGuid: false,
      withFiles
    }).subscribe({
      next: result => {
        this.snackBar.open('Export completed into the \'App_Data\' folder.', null, {
          duration: 3000
        });
      },
      error: error => {
        this.snackBar.open('Export failed. Please check console for more information', null, {
          duration: 3000
        });
      }
    });
  }
  resetApp(withFiles) {
    if (!confirm('Are you sure? All changes since last xml export will be lost')) {
      return;
    }
    this.snackBar.open('Resetting...');
    this.importAppPartsService.resetApp(withFiles).subscribe({
      next: result => {
        this.snackBar.open('Reset worked! Since this is a complex operation, please restart the Website to ensure all caches are correct', null, {
          duration: 30000
        });
      },
      error: error => {
        this.snackBar.open('Reset failed. Please check console for more information', null, {
          duration: 3000
        });
      }
    });
  }
  static #_ = this.ɵfac = function SyncConfigurationComponent_Factory(t) {
    return new (t || SyncConfigurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_3__.AppDialogConfigService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: SyncConfigurationComponent,
    selectors: [["app-sync-configuration"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
    decls: 74,
    vars: 6,
    consts: [[1, "eav-cards-box"], [1, "eav-card"], [1, "eav-card-header"], [1, "eav-card-space-div"], ["align", "start"], ["mat-button", "", 1, "eav-button__with-icon", 3, "click"], [1, "eav-icon"], [1, "eav-card-header-title-toggle"], [1, "eav-card-header-toggle", 3, "ngModelChange", "ngModel"], [3, "featureNameId"]],
    template: function SyncConfigurationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "mat-card", 1)(3, "mat-card-header", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Instructions for Sync or Export/Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-card-content")(9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " This section is for export/import of the entire App, for synchronizing with the file storage (eg. for Git) or to export parts of the App for re-import in another App. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " To export/import Content-Types, Queries, Views or Data, use the respective tabs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 0)(14, "mat-card", 1)(15, "mat-card-header", 2)(16, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Export this entire App");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "cloud_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "mat-card-content")(21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, " Create an package (zip) which can be installed in another site. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-card-actions", 4)(25, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SyncConfigurationComponent_Template_button_click_25_listener() {
          return ctx.exportApp();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "cloud_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Export App");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-card", 1)(31, "mat-card-header", 2)(32, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Export or Import parts of this App");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "import_export");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "mat-card-content")(37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, " Create an xml containing parts of the app, e.g. content and templates. Import parts from such an xml into this app. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "mat-card-actions", 4)(41, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SyncConfigurationComponent_Template_button_click_41_listener() {
          return ctx.exportParts();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "cloud_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Export Parts");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SyncConfigurationComponent_Template_button_click_46_listener() {
          return ctx.importParts();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "cloud_upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Import Parts");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 0)(52, "mat-card", 1)(53, "mat-card-header", 2)(54, "div", 7)(55, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "App-State Versioning");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "mat-slide-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SyncConfigurationComponent_Template_mat_slide_toggle_ngModelChange_57_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.appStateAdvanced, $event) || (ctx.appStateAdvanced = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "history_toggle_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "mat-card-content")(62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, " You can save / restore the app with data and configuration in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, ".data/app.xml");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, ". This file can then also be versioned using git. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, SyncConfigurationComponent_Conditional_67_Template, 6, 0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, SyncConfigurationComponent_Conditional_68_Template, 1, 1, "app-feature-text-info", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](69, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "mat-card-actions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, SyncConfigurationComponent_Conditional_71_Template, 10, 0)(72, SyncConfigurationComponent_Conditional_72_Template, 10, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](73, "router-outlet");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.appStateAdvanced);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.appStateAdvanced ? "advanced" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](67, ctx.appStateAdvanced ? 67 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](68, ctx.appStateAdvanced ? 68 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](71, !ctx.appStateAdvanced ? 71 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](72, ctx.appStateAdvanced ? 72 : -1);
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _features_feature_text_info_feature_text_info_component__WEBPACK_IMPORTED_MODULE_4__.FeatureTextInfoComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet],
    styles: [".eav-card-header-title-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n  margin-right: 8px;\n}\n.eav-card-header-title-toggle[_ngcontent-%COMP%]   .eav-card-header-toggle[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-top: 2px;\n}\n\n  .mat-drawer-container {\n  background-color: #fafafa !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9zeW5jLWNvbmZpZ3VyYXRpb24vc3luYy1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUtFO0VBQ0Usb0NBQUE7QUFGSiIsInNvdXJjZXNDb250ZW50IjpbIi5lYXYtY2FyZC1oZWFkZXItdGl0bGUtdG9nZ2xlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuXHJcbiAgLmVhdi1jYXJkLWhlYWRlci10b2dnbGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICB9XHJcbn1cclxuXHJcbi8vIE9ubHkgZm9yIFRlbXAgaW4gVXNlXHJcbjo6bmctZGVlcCB7XHJcbiAgLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmEgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

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
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_sync-configuration_sync-configuration_component_ts-0e6134.js.map