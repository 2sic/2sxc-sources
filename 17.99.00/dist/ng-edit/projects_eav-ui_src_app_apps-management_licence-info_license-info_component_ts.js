"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_apps-management_licence-info_license-info_component_ts"],{

/***/ 1709:
/*!********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/licence-info/active-features-count.pipe.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActiveFeaturesCountPipe: () => (/* binding */ ActiveFeaturesCountPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class ActiveFeaturesCountPipe {
  transform(license) {
    return `${license.Features.filter(f => f.isEnabled).length}/${license.Features.length}`;
  }
  static #_ = this.ɵfac = function ActiveFeaturesCountPipe_Factory(t) {
    return new (t || ActiveFeaturesCountPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "activeFeaturesCount",
    type: ActiveFeaturesCountPipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 30693:
/*!******************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/licence-info/ag-grid-height.directive.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgGridHeightDirective: () => (/* binding */ AgGridHeightDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);


class AgGridHeightDirective {
  constructor(elementRef) {
    this.itemsCount = 0;
    this.headerHeight = 32;
    this.rowHeight = 48;
    this.maxRows = 100;
    /** Fixes a bug where scrollbar appears when then is no overflow */
    this.extraHeight = 2;
    this.element = elementRef.nativeElement;
  }
  ngOnChanges(changes) {
    if (changes.itemsCount != null) {
      const rows = this.itemsCount === 0 ? 2 : this.itemsCount > this.maxRows ? this.maxRows : this.itemsCount;
      this.element.style.height = `${this.headerHeight + rows * this.rowHeight + this.extraHeight}px`;
    }
  }
  static #_ = this.ɵfac = function AgGridHeightDirective_Factory(t) {
    return new (t || AgGridHeightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: AgGridHeightDirective,
    selectors: [["", "appAgGridHeight", ""]],
    inputs: {
      itemsCount: "itemsCount",
      headerHeight: "headerHeight",
      rowHeight: "rowHeight",
      maxRows: "maxRows"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
}

/***/ }),

/***/ 51191:
/*!*************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/licence-info/feature-details-dialog/feature-details-dialog.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureDetailsDialogComponent: () => (/* binding */ FeatureDetailsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _shared_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/helpers/copy-to-clipboard.helper */ 70519);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/pipes/safe-html.pipe */ 69914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);














function FeatureDetailsDialogComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 6)(4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FeatureDetailsDialogComponent_Conditional_7_Template_span_click_4_listener() {
      const id_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.copyToClipboard(id_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const id_r2 = ctx;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", id_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](id_r2);
  }
}
function FeatureDetailsDialogComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "GUID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 8)(4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FeatureDetailsDialogComponent_Conditional_8_Template_span_click_4_listener() {
      const guid_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.copyToClipboard(guid_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const guid_r5 = ctx;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", guid_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](guid_r5);
  }
}
function FeatureDetailsDialogComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Security Rating:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 6)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx);
  }
}
class FeatureDetailsDialogComponent {
  constructor(dialogData, dialogRef, snackBar) {
    this.dialogData = dialogData;
    this.dialogRef = dialogRef;
    this.snackBar = snackBar;
  }
  closeDialog() {
    this.dialogRef.close();
  }
  findOutMore(link) {
    window.open(link, '_blank');
  }
  copyToClipboard(text) {
    (0,_shared_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_0__.copyToClipboard)(text);
    this.snackBar.open('Copied to clipboard', null, {
      duration: 2000
    });
  }
  static #_ = this.ɵfac = function FeatureDetailsDialogComponent_Factory(t) {
    return new (t || FeatureDetailsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: FeatureDetailsDialogComponent,
    selectors: [["app-feature-details-dialog"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 17,
    vars: 7,
    consts: [[3, "innerHtml"], [1, "eav-info-row"], ["align", "end"], ["mat-raised-button", "", "color", "accent", 1, "eav-card-action-button", 3, "click"], ["mat-raised-button", "", 1, "eav-card-action-button", 3, "click"], [1, "eav-info-row__label"], [1, "eav-info-row__value"], [3, "click", "tippy"], [1, "eav-info-row__value", "eav_click"]],
    template: function FeatureDetailsDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-header")(2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "safeHtml");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, FeatureDetailsDialogComponent_Conditional_7_Template, 6, 2, "div", 1)(8, FeatureDetailsDialogComponent_Conditional_8_Template, 6, 2, "div", 1)(9, FeatureDetailsDialogComponent_Conditional_9_Template, 6, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-card-actions", 2)(11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FeatureDetailsDialogComponent_Template_button_click_11_listener() {
          return ctx.findOutMore(ctx.dialogData.feature.link);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "open_in_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Find out more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FeatureDetailsDialogComponent_Template_button_click_15_listener() {
          return ctx.closeDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.dialogData.feature.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 5, ctx.dialogData.feature.description), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](7, (tmp_2_0 = ctx.dialogData.feature.nameId) ? 7 : -1, tmp_2_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](8, (tmp_3_0 = ctx.dialogData.feature.guid) ? 8 : -1, tmp_3_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](9, (tmp_4_0 = ctx.dialogData.feature.security.Impact + ": " + ctx.dialogData.feature.security.Message) ? 9 : -1, tmp_4_0);
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__.TippyDirective, _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__.SafeHtmlPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 65441:
/*!*************************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/licence-info/features-list-enabled-reason/features-list-enabled-reason.component.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeaturesListEnabledReasonComponent: () => (/* binding */ FeaturesListEnabledReasonComponent)
/* harmony export */ });
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class FeaturesListEnabledReasonComponent {
  agInit(params) {
    this.value = params.value;
    this.feature = params.data;
  }
  refresh(params) {
    return true;
  }
  static #_ = this.ɵfac = function FeaturesListEnabledReasonComponent_Factory(t) {
    return new (t || FeaturesListEnabledReasonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FeaturesListEnabledReasonComponent,
    selectors: [["app-features-list-enabled-reason"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 2,
    consts: [[3, "tippy"]],
    template: function FeaturesListEnabledReasonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tippy", ctx.feature.enabledReasonDetailed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.value);
      }
    },
    dependencies: [_shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7733:
/*!***********************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/licence-info/features-list-enabled/features-list-enabled.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeaturesListEnabledComponent: () => (/* binding */ FeaturesListEnabledComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);



class FeaturesListEnabledComponent {
  agInit(params) {
    this.value = params.value;
  }
  refresh(params) {
    return true;
  }
  static #_ = this.ɵfac = function FeaturesListEnabledComponent_Factory(t) {
    return new (t || FeaturesListEnabledComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FeaturesListEnabledComponent,
    selectors: [["app-features-list-enabled"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 1,
    consts: [[1, "icon-container"]],
    template: function FeaturesListEnabledComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value ? "check_box" : "check_box_outline_blank");
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 28213:
/*!***********************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/licence-info/features-status/features-status.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeaturesStatusComponent: () => (/* binding */ FeaturesStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);





const _c0 = (a0, a1) => ({
  "toggle-false": a0,
  "toggle-null": a1
});
class FeaturesStatusComponent {
  agInit(params) {
    this.params = params;
    this.value = params.value;
    this.disabled = params.isDisabled(params.data);
    this.tooltip = params.tooltipGetter(params.data);
  }
  refresh(params) {
    this.disabled = this.params.isDisabled(this.params.data);
    return true;
  }
  toggle() {
    const feature = this.params.data;
    let nextValue;
    switch (this.value) {
      case false:
        nextValue = null;
        break;
      case null:
        nextValue = true;
        break;
      case true:
        nextValue = false;
        break;
    }
    this.value = nextValue;
    this.params.onToggle(feature, nextValue);
  }
  static #_ = this.ɵfac = function FeaturesStatusComponent_Factory(t) {
    return new (t || FeaturesStatusComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FeaturesStatusComponent,
    selectors: [["app-features-status"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 7,
    consts: [[3, "change", "checked", "tippy", "disabled", "ngClass"]],
    template: function FeaturesStatusComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-slide-toggle", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FeaturesStatusComponent_Template_mat_slide_toggle_change_0_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.value)("tippy", ctx.tooltip)("disabled", ctx.disabled)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, ctx.value === false, ctx.value === null));
      }
    },
    dependencies: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_2__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_2__.MatSlideToggle, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
    styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: flex;\n  padding-left: 12px;\n  padding-right: 12px;\n  align-items: center;\n}\n\n.mat-mdc-slide-toggle[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n\n  .toggle-false.mat-mdc-slide-toggle:not(.mat-mdc-slide-toggle-checked):not(.mat-disabled) .mdc-switch__track::before {\n  \n\n  background-color: orange !important;\n}\n\n  .toggle-null .mdc-switch__handle {\n  \n\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcHMtbWFuYWdlbWVudC9saWNlbmNlLWluZm8vZmVhdHVyZXMtc3RhdHVzL2ZlYXR1cmVzLXN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvSUFBQTtFQUNBLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvSUFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1tZGMtc2xpZGUtdG9nZ2xlIHtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC50b2dnbGUtZmFsc2UubWF0LW1kYy1zbGlkZS10b2dnbGU6bm90KC5tYXQtbWRjLXNsaWRlLXRvZ2dsZS1jaGVja2VkKTpub3QoLm1hdC1kaXNhYmxlZCkgLm1kYy1zd2l0Y2hfX3RyYWNrOjpiZWZvcmUge1xyXG4gIC8qIFRPRE8tKG1kYy1taWdyYXRpb24pOiBUaGUgZm9sbG93aW5nIHJ1bGUgdGFyZ2V0cyBpbnRlcm5hbCBjbGFzc2VzIG9mIHNsaWRlLXRvZ2dsZSB0aGF0IG1heSBubyBsb25nZXIgYXBwbHkgZm9yIHRoZSBNREMgdmVyc2lvbi4gKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC50b2dnbGUtbnVsbCAubWRjLXN3aXRjaF9faGFuZGxlIHtcclxuICAvKiBUT0RPLShtZGMtbWlncmF0aW9uKTogVGhlIGZvbGxvd2luZyBydWxlIHRhcmdldHMgaW50ZXJuYWwgY2xhc3NlcyBvZiBzbGlkZS10b2dnbGUgdGhhdCBtYXkgbm8gbG9uZ2VyIGFwcGx5IGZvciB0aGUgTURDIHZlcnNpb24uICovXHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 15096:
/*!****************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/licence-info/license-info.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LicenseInfoComponent: () => (/* binding */ LicenseInfoComponent)
/* harmony export */ });
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs */ 71870);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs */ 14876);
/* harmony import */ var _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/base-with-child-dialog.component */ 61735);
/* harmony import */ var _shared_components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/boolean-filter/boolean-filter.component */ 91960);
/* harmony import */ var _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/id-field/id-field.component */ 36378);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _feature_details_dialog_feature_details_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feature-details-dialog/feature-details-dialog.component */ 51191);
/* harmony import */ var _features_list_enabled_reason_features_list_enabled_reason_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features-list-enabled-reason/features-list-enabled-reason.component */ 65441);
/* harmony import */ var _features_list_enabled_features_list_enabled_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features-list-enabled/features-list-enabled.component */ 7733);
/* harmony import */ var _features_status_features_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features-status/features-status.component */ 28213);
/* harmony import */ var _features_expiration_extension__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../features/expiration-extension */ 4650);
/* harmony import */ var _active_features_count_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./active-features-count.pipe */ 1709);
/* harmony import */ var _licenses_order_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./licenses-order.pipe */ 99634);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _ag_grid_height_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ag-grid-height.directive */ 30693);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/expansion */ 19322);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _services_features_config_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/features-config.service */ 33992);
/* harmony import */ var _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ag-grid-community/core */ 41136);
/* harmony import */ var _ag_grid_community_client_side_row_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ag-grid-community/client-side-row-model */ 45705);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../core */ 34447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 37580);




// tslint:disable-next-line:max-line-length































const _c0 = a0 => ({
  "expanded": a0
});
function LicenseInfoComponent_Conditional_0_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "ag-grid-angular", 9);
  }
  if (rf & 2) {
    const license_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("rowData", license_r1.Features)("gridOptions", ctx_r1.gridOptions)("itemsCount", license_r1.Features == null ? null : license_r1.Features.length);
  }
}
function LicenseInfoComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "mat-expansion-panel", null, 0)(2, "mat-expansion-panel-header")(3, "mat-panel-title")(4, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div")(7, "div", 6)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](12, "activeFeaturesCount");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](17, LicenseInfoComponent_Conditional_0_For_2_Conditional_17_Template, 1, 3, "ag-grid-angular", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const license_r1 = ctx.$implicit;
    const panel_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("tippy", license_r1.IsEnabled ? "License is active" : "License is not active");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](license_r1.IsEnabled ? "check_circle_outline" : "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](license_r1.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](12, 8, license_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", license_r1.ExpWarningIcon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](10, _c0, panel_r3.expanded));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", license_r1.Description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵconditional"](17, panel_r3.expanded ? 17 : -1);
  }
}
function LicenseInfoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "mat-accordion", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrepeaterCreate"](1, LicenseInfoComponent_Conditional_0_For_2_Template, 18, 12, "mat-expansion-panel", null, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵcomponentInstance"]().trackLicenses, true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "licensesOrder");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 0, ctx.licenses));
  }
}
class LicenseInfoComponent extends _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_0__.BaseWithChildDialogComponent {
  constructor(router, route, dialog, viewContainerRef, changeDetectorRef) {
    super(router, route);
    this.router = router;
    this.route = route;
    this.dialog = dialog;
    this.viewContainerRef = viewContainerRef;
    this.changeDetectorRef = changeDetectorRef;
    this.disabled$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject(false);
    this.gridOptions = this.buildGridOptions();
    this.refreshLicenses$ = new rxjs__WEBPACK_IMPORTED_MODULE_21__.Subject();
    this.featuresConfigService = (0,_core__WEBPACK_IMPORTED_MODULE_18__.transient)(_services_features_config_service__WEBPACK_IMPORTED_MODULE_13__.FeaturesConfigService);
    _ag_grid_community_core__WEBPACK_IMPORTED_MODULE_14__.ModuleRegistry.registerModules([_ag_grid_community_client_side_row_model__WEBPACK_IMPORTED_MODULE_15__.ClientSideRowModelModule]);
  }
  ngOnInit() {
    this.subscriptions.add(this.childDialogClosed$().subscribe(() => {
      this.refreshLicenses$.next();
    }));
    this.viewModel$ =
    //combineLatest([
    this.refreshLicenses$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.startWith)(undefined), (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.switchMap)(() => this.featuresConfigService.getLicenses().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_24__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.of)(undefined)))), (0,rxjs__WEBPACK_IMPORTED_MODULE_26__.tap)(() => this.disabled$.next(false)),
    // Fiddle with the data for development tests
    // 2023-11-16 2dm disabled - causes trouble in production
    // @STV - do you still need this? or is this a forgotten debug code?
    // map(licenses => {
    //   var licTesting = licenses[licenses.length - 2];
    //   licTesting.Features[licTesting.Features.length - 1].Expiration = "2023-08-25";
    //   return licenses;
    // }),
    // Expand the data to have pre-calculated texts/states
    (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.map)(licenses => licenses.map(l => {
      // const expandedFeatures = l.Features.map(f => ExpirationExtension.expandFeature(f));
      return {
        ..._features_expiration_extension__WEBPACK_IMPORTED_MODULE_8__.ExpirationExtension.expandLicense(l),
        Features: l.Features.map(f => _features_expiration_extension__WEBPACK_IMPORTED_MODULE_8__.ExpirationExtension.expandFeature(f))
      };
    })),
    // Share the resulting stream with all subscribers
    (0,rxjs__WEBPACK_IMPORTED_MODULE_28__.share)())
    //])
    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_27__.map)(licenses => ({
      licenses
    })));
  }
  ngOnDestroy() {
    this.disabled$.complete();
    super.ngOnDestroy();
  }
  trackLicenses(index, license) {
    return license.Guid;
  }
  openRegistration() {
    this.router.navigate([this.router.url.replace('license', '') + "/registration"]);
  }
  showFeatureDetails(feature) {
    const data = {
      feature
    };
    this.dialog.open(_feature_details_dialog_feature_details_dialog_component__WEBPACK_IMPORTED_MODULE_4__.FeatureDetailsDialogComponent, {
      autoFocus: false,
      data,
      viewContainerRef: this.viewContainerRef,
      width: '600px'
    });
    this.changeDetectorRef.markForCheck();
  }
  toggleFeature(feature, enabled) {
    this.disabled$.next(true);
    const state = {
      FeatureGuid: feature.guid,
      Enabled: enabled
    };
    (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.forkJoin)([this.featuresConfigService.saveFeatures([state]), (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.timer)(100)]).subscribe({
      error: () => {
        this.refreshLicenses$.next();
      },
      next: () => {
        this.refreshLicenses$.next();
      }
    });
  }
  // Note: @SDV
  // I think this should serve as a good example of how to use the grid
  // 1. eg. with cellDefaults and similar initial objects containing most commonly used options here
  // 2. Also we should probably never add a valueGetter for the simple properties
  // ...not sure why it's even in here, my guess is copy-paste of code which wasn't understood properly
  // 3. I think the header-name should always be the first line, then the field
  buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_3__.defaultGridOptions,
      columnDefs: [{
        headerName: 'ID',
        field: 'nameId',
        filter: 'agTextColumnFilter',
        width: 200,
        headerClass: 'dense',
        sortable: true,
        cellClass: 'id-action no-padding no-outline'.split(' '),
        cellRenderer: _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_2__.IdFieldComponent,
        cellRendererParams: (() => {
          const params = {
            tooltipGetter: feature => feature.nameId
          };
          return params;
        })()
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_16__.ColumnDefinitions.TextWideFlex3,
        field: 'Name',
        cellClass: 'primary-action highlight'.split(' '),
        onCellClicked: params => {
          this.showFeatureDetails(params.data);
        }
      }, {
        headerName: 'Enabled',
        field: 'isEnabled',
        width: 80,
        cellClass: 'no-outline',
        headerClass: 'dense',
        sortable: true,
        filter: _shared_components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_1__.BooleanFilterComponent,
        cellRenderer: _features_list_enabled_features_list_enabled_component__WEBPACK_IMPORTED_MODULE_6__.FeaturesListEnabledComponent
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_16__.ColumnDefinitions.TextNarrow,
        headerName: 'Reason',
        field: 'enabledReason',
        cellRenderer: _features_list_enabled_reason_features_list_enabled_reason_component__WEBPACK_IMPORTED_MODULE_5__.FeaturesListEnabledReasonComponent
      }, {
        headerName: 'Expiration',
        field: 'ExpMessage',
        filter: 'agTextColumnFilter',
        width: 120,
        tooltipValueGetter: params => params.data?.expiration
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_16__.ColumnDefinitions.ActionsPinnedRight7,
        headerName: '',
        field: 'enabledInConfiguration',
        cellRenderer: _features_status_features_status_component__WEBPACK_IMPORTED_MODULE_7__.FeaturesStatusComponent,
        cellRendererParams: () => {
          const params = {
            isDisabled: feature => !feature.isConfigurable || this.disabled$.value,
            onToggle: (feature, enabled) => this.toggleFeature(feature, enabled),
            tooltipGetter: feature => feature.isConfigurable ? "Toggle off | default | on" : "This feature can't be configured"
          };
          return params;
        }
      }]
    };
    return gridOptions;
  }
  static #_ = this.ɵfac = function LicenseInfoComponent_Factory(t) {
    return new (t || LicenseInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_31__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_31__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_19__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
    type: LicenseInfoComponent,
    selectors: [["app-license-info"]],
    viewQuery: function LicenseInfoComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵviewQuery"](_ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_33__.AgGridAngular, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵloadQuery"]()) && (ctx.gridRef = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵStandaloneFeature"]],
    decls: 9,
    vars: 3,
    consts: [["panel", ""], ["multi", ""], ["align", "start"], ["mat-button", "", "tippy", "Registration", 1, "eav-button__with-icon", 3, "click"], [1, "eav-icon"], [1, "panel-icon", 3, "tippy"], [1, "panel-title"], [1, "active-features-count"], [1, "panel-description", 3, "ngClass"], ["appAgGridHeight", "", 1, "ag-theme-material", 3, "rowData", "gridOptions", "itemsCount"]],
    template: function LicenseInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, LicenseInfoComponent_Conditional_0_Template, 4, 2, "mat-accordion", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "mat-dialog-actions", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function LicenseInfoComponent_Template_button_click_3_listener() {
          return ctx.openRegistration();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "app_registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](8, "router-outlet");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_34__.MatExpansionModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_34__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_34__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_34__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_34__.MatExpansionPanelTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_36__.NgClass, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_17__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_33__.AgGridAngular, _ag_grid_height_directive__WEBPACK_IMPORTED_MODULE_11__.AgGridHeightDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_37__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_37__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_36__.AsyncPipe, _licenses_order_pipe__WEBPACK_IMPORTED_MODULE_10__.LicensesOrderPipe, _active_features_count_pipe__WEBPACK_IMPORTED_MODULE_9__.ActiveFeaturesCountPipe, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_12__.TippyDirective],
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding-top: 20px;\n  box-sizing: border-box;\n  position: relative;\n}\n\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.mat-expansion-panel-header[_ngcontent-%COMP%]    .mat-content {\n  max-height: 100%;\n}\n\n.panel-icon[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n\n.panel-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.active-features-count[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 8px;\n  color: white;\n  font-size: 12px;\n  border-radius: 12px;\n  padding: 2px 6px;\n  background-color: #002753;\n  border: 1px solid rgba(29, 39, 61, 0.44);\n  box-sizing: border-box;\n  -webkit-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n}\n\n.panel-description[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.54);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-height: 1em;\n  line-height: 1em;\n}\n.panel-description.expanded[_ngcontent-%COMP%] {\n  max-height: 3em;\n}\n\n.eav-button__with-icon[_ngcontent-%COMP%]   .eav-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  height: 24px;\n  width: 24px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcHMtbWFuYWdlbWVudC9saWNlbmNlLWluZm8vbGljZW5zZS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxnQkFBQTtBQUNKOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFGO0FBRUU7RUFDRSxlQUFBO0FBQUo7O0FBY0k7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFYTiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDRweDtcclxuXHJcbiAgOjpuZy1kZWVwLm1hdC1jb250ZW50IHtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4ucGFuZWwtaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4ucGFuZWwtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmFjdGl2ZS1mZWF0dXJlcy1jb3VudCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDJweCA2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjc1MztcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI5LCAzOSwgNjEsIDAuNDQpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnBhbmVsLWRlc2NyaXB0aW9uIHtcclxuICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIG1heC1oZWlnaHQ6IDFlbTtcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG5cclxuICAmLmV4cGFuZGVkIHtcclxuICAgIG1heC1oZWlnaHQ6IDNlbTtcclxuICB9XHJcbn1cclxuXHJcbi8vIC5hY3Rpb25zLWJveCB7XHJcbi8vICAgbWFyZ2luLXRvcDogOHB4O1xyXG5cclxuLy8gICBidXR0b24gLm1hdC1pY29uIHtcclxuLy8gICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLmVhdi1idXR0b24ge1xyXG4gICZfX3dpdGgtaWNvbiB7XHJcbiAgICAuZWF2LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 99634:
/*!*************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/licence-info/licenses-order.pipe.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LicensesOrderPipe: () => (/* binding */ LicensesOrderPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class LicensesOrderPipe {
  transform(licenses) {
    if (!Array.isArray(licenses)) {
      return licenses;
    }
    const sorted = [...licenses].sort((a, b) => {
      if (a.Priority < b.Priority) {
        return -1;
      } else if (a.Priority > b.Priority) {
        return 1;
      } else {
        return 0;
      }
    });
    return sorted;
  }
  static #_ = this.ɵfac = function LicensesOrderPipe_Factory(t) {
    return new (t || LicensesOrderPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "licensesOrder",
    type: LicensesOrderPipe,
    pure: true,
    standalone: true
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

/***/ 4650:
/*!******************************************************************!*\
  !*** ./projects/eav-ui/src/app/features/expiration-extension.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpirationExtension: () => (/* binding */ ExpirationExtension)
/* harmony export */ });
/**
 * Helper class used in union with other classes to add expiration hints to features.
 * It's implemented as a class, so it's easier to bundle static functions.
 */
class ExpirationExtension {
  static expandFeature(feature) {
    return {
      ...feature,
      ...ExpirationExtension.getExpiration(feature?.expiration)
    };
  }
  static expandLicense(license) {
    // Wrap in Try-Catch to avoid errors in the UI
    try {
      // find the lowest expiration date on the features
      const lowestExpiration = license?.Features?.map(f => f.expiration).sort()[0];
      // if there is no lowest expiration date, skip the rest
      if (lowestExpiration == null) return license;
      // debugger;
      const withState = {
        ...license,
        ...ExpirationExtension.getExpiration(lowestExpiration)
      };
      return withState;
    } catch (error) {
      return license;
    }
  }
  static getExpiration(dateString) {
    // Inner helper to create the final result
    const result = (icon, text) => ({
      ExpMessage: (icon != null ? icon + ' ' : '') + text,
      ExpIcon: icon,
      ExpWarningIcon: icon != '✅' ? icon : null
    });
    const expires = dateString?.split('T')[0];
    // no valid expiration date
    if (expires == null) return result(null, null);
    // never expires
    if (expires.startsWith('9999')) return result('✅', 'never');
    const expDate = new Date(expires);
    // show "expired" if it's over-due
    if (expDate < new Date()) return result('🛑', 'expired');
    // return "today" if it's today
    if (expDate.toDateString() === new Date().toDateString()) return result('⚠️', 'today');
    // return "tomorrow" if it's tomorrow
    if (expDate.toDateString() === new Date(new Date().setDate(new Date().getDate() + 1)).toDateString()) return result('⚠️', 'tomorrow');
    // Warn if it's within 30 days
    if (expDate < new Date(new Date().setDate(new Date().getDate() + 30))) return result('⚠️', expires);
    // Show special EOY if it's at the end of the year - the most common expiration
    if (expires.endsWith('12-31')) return result('✅', `EOY ${expires.split('-')[0]}`);
    // otherwise: just show the date
    return result('❓', expires);
  }
}

/***/ }),

/***/ 61735:
/*!***************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/components/base-with-child-dialog.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseWithChildDialogComponent: () => (/* binding */ BaseWithChildDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5057);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.component */ 43176);
/* harmony import */ var _logging_eav_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logging/eav-logger */ 6812);




const logThis = false;
// 2024-06-12 2dm experimental - remove comments if all is good mid of June
// - previously had
// @Directive()   // Needs the @Directive() so the compiler allows OnDestroy to be implemented
// ...then tried this
// @Component({
//   selector: 'app-base-component-with-child',
//   template: ''
// })
// ...but then added abstract, so I think it doesn't actually need all that
// tslint:disable-next-line:directive-class-suffix
class BaseWithChildDialogComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(router, route, log) {
    super();
    this.router = router;
    this.route = route;
    this.log = log;
    this.log ??= new _logging_eav_logger__WEBPACK_IMPORTED_MODULE_1__.EavLogger('BaseComponent', logThis);
  }
  // 2024-06-12 2dm - don't think this is needed since it's already on the base class
  // ngOnDestroy() {
  //   super.ngOnDestroy();
  // }
  // TODO @2dg not longer in use after refactoring SideNav with Routing
  // protected refreshOnChildClosedDeep() {
  //   return this.router.events.pipe(
  //     filter(event => event instanceof NavigationEnd),
  //     startWith(!!this.route.snapshot.firstChild.firstChild),
  //     map(() => !!this.route.snapshot.firstChild.firstChild),
  //     pairwise(),
  //     filter(([hadChild, hasChild]) => hadChild && !hasChild),
  //   )
  // }
  childDialogClosed$() {
    return this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.startWith)(!!this.route.snapshot.firstChild), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(() => !!this.route.snapshot.firstChild), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.pairwise)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(([hadChildBefore, hasChildNow]) => hadChildBefore && !hasChildNow));
  }
}

/***/ }),

/***/ 36378:
/*!**********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/components/id-field/id-field.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdFieldComponent: () => (/* binding */ IdFieldComponent)
/* harmony export */ });
/* harmony import */ var _helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/copy-to-clipboard.helper */ 70519);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);








const _c0 = (a0, a1) => ({
  "align-start": a0,
  "align-end": a1
});
class IdFieldComponent {
  constructor(snackBar) {
    this.snackBar = snackBar;
  }
  agInit(params) {
    this.id = params.value;
    this.align = typeof this.id === 'number' ? 'end' : 'start';
    this.tooltip = params.tooltipGetter(params.data);
  }
  refresh(params) {
    return true;
  }
  copy() {
    (0,_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_0__.copyToClipboard)(this.tooltip);
    this.snackBar.open('Copied to clipboard', null, {
      duration: 2000
    });
  }
  static #_ = this.ɵfac = function IdFieldComponent_Factory(t) {
    return new (t || IdFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: IdFieldComponent,
    selectors: [["app-id-field"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 6,
    consts: [["matRipple", "", 1, "id-box", "highlight", 3, "click", "tippy", "ngClass"], [1, "id"], [1, "icon"]],
    template: function IdFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IdFieldComponent_Template_div_click_0_listener() {
          return ctx.copy();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "file_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tippy", ctx.tooltip)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c0, ctx.align === "start", ctx.align === "end"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.id);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__.TippyDirective],
    styles: [".id-box[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.id-box.align-start[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.id-box.align-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.id-box[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%] {\n  max-width: 100%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.id-box[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.id-box[_ngcontent-%COMP%]:hover   .id[_ngcontent-%COMP%] {\n  display: none;\n}\n.id-box[_ngcontent-%COMP%]:not(:hover)   .icon[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2lkLWZpZWxkL2lkLWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsMkJBQUE7QUFDSjtBQUVFO0VBQ0UseUJBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUlFO0VBQ0UscUJBQUE7QUFGSjtBQUlJO0VBQ0UsYUFBQTtBQUZOO0FBT0k7RUFDRSxhQUFBO0FBTE4iLCJzb3VyY2VzQ29udGVudCI6WyIuaWQtYm94IHtcclxuICBwYWRkaW5nOiAwIDhweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmLmFsaWduLXN0YXJ0IHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gICYuYWxpZ24tZW5kIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG5cclxuICAuaWQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgLmlkIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6bm90KDpob3Zlcikge1xyXG4gICAgLmljb24ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_apps-management_licence-info_license-info_component_ts.js.map