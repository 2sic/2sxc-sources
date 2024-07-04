"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_content-type-fields_content-type-fields_component_ts"],{

/***/ 91260:
/*!**************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/content-type-fields-actions/content-type-fields-actions.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentTypeFieldsActionsComponent: () => (/* binding */ ContentTypeFieldsActionsComponent)
/* harmony export */ });
/* harmony import */ var _constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/data-type.constants */ 42220);
/* harmony import */ var _constants_input_type_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/input-type.constants */ 18170);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/base.component */ 43176);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);













function ContentTypeFieldsActionsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContentTypeFieldsActionsComponent_Conditional_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.do("metadata"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "local_offer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matBadge", ctx_r1.metadataCount)("matBadgeHidden", !ctx_r1.metadataCount);
  }
}
function ContentTypeFieldsActionsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11)(1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " local_offer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matBadge", ctx_r1.metadataCount)("matBadgeHidden", !ctx_r1.metadataCount);
  }
}
function ContentTypeFieldsActionsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContentTypeFieldsActionsComponent_Conditional_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.do("image"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " filter-center-focus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matBadge", ctx_r1.field.imageConfiguration.entityId ? 1 : 0)("matBadgeHidden", !ctx_r1.field.imageConfiguration.entityId);
  }
}
function ContentTypeFieldsActionsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15)(1, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " filter-center-focus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matBadge", ctx_r1.field.imageConfiguration.entityId ? 1 : 0)("matBadgeHidden", !ctx_r1.field.imageConfiguration.entityId);
  }
}
function ContentTypeFieldsActionsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContentTypeFieldsActionsComponent_Conditional_5_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.do("permissions"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " person ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matBadge", ctx_r1.field.Permissions.Count)("matBadgeHidden", !ctx_r1.field.Permissions.Count);
  }
}
function ContentTypeFieldsActionsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18)(1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " person ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matBadge", ctx_r1.field.Permissions.Count)("matBadgeHidden", !ctx_r1.field.Permissions.Count);
  }
}
function ContentTypeFieldsActionsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContentTypeFieldsActionsComponent_Conditional_7_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.do("shareOrInherit"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tippy", ctx_r1.shareText());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.shareOrInheritIcon(), " ");
  }
}
function ContentTypeFieldsActionsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContentTypeFieldsActionsComponent_Conditional_8_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.do("shareOrInherit"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " share ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tippy", ctx_r1.shareText());
  }
}
function ContentTypeFieldsActionsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContentTypeFieldsActionsComponent_ng_template_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.do("rename"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "text_fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Rename");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContentTypeFieldsActionsComponent_ng_template_14_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.do("delete"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.field.EditInfo.DisableRename);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.field.EditInfo.DisableDelete || ctx_r1.field.IsTitle);
  }
}
class ContentTypeFieldsActionsComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
  constructor() {
    super();
  }
  agInit(params) {
    this.params = params;
    this.field = this.params.data;
    this.metadataCount = this.field.Metadata ? Object.keys(this.field.Metadata).filter(key => key !== 'merged').length : 0;
    this.enablePermissions = this.field.InputType === _constants_input_type_constants__WEBPACK_IMPORTED_MODULE_1__.InputTypeConstants.StringWysiwyg || this.field.Type === _constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__.DataTypeConstants.Hyperlink;
  }
  // #region Sharing Info for better icons #SharedFieldDefinition
  shareText() {
    const clickToConfigure = 'click to configure sharing';
    const ss = this.field.SysSettings;
    if (!ss) return clickToConfigure;
    return ss.Share ? 'shared enabled as ' + this.field.Guid : ss.InheritMetadataOf ? 'inherits ' + ss.InheritMetadataOf : clickToConfigure;
  }
  shareOrInheritIcon() {
    const ss = this.field.SysSettings;
    if (!ss) return '';
    return ss.Share ? 'share' : ss.InheritMetadataOf ? 'adjust' : '';
  }
  refresh(params) {
    return true;
  }
  do(verb) {
    this.params.do(verb, this.field);
  }
  static #_ = this.ɵfac = function ContentTypeFieldsActionsComponent_Factory(t) {
    return new (t || ContentTypeFieldsActionsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ContentTypeFieldsActionsComponent,
    selectors: [["app-content-type-fields-actions"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 15,
    vars: 5,
    consts: [["menu", "matMenu"], [1, "actions-component"], ["matRipple", "", "tippy", "Metadata", 1, "eav-grid-action-button", "highlight"], ["matRipple", "", "tippy", "Image Configuration", 1, "eav-grid-action-button", "highlight"], ["matRipple", "", "tippy", "Permissions", 1, "eav-grid-action-button", "highlight"], ["matRipple", "", 1, "eav-grid-action-button", "highlight", 3, "tippy"], ["matRipple", "", "tippy", "More", 1, "eav-grid-action-button", "highlight", 3, "matMenuTriggerFor"], [1, "grid-more-menu"], ["matMenuContent", ""], ["matRipple", "", "tippy", "Metadata", 1, "eav-grid-action-button", "highlight", 3, "click"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgePosition", "below after", "aria-hidden", "false", 3, "matBadge", "matBadgeHidden"], [1, "eav-grid-action-button", "disabled"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgeDisabled", "true", "matBadgePosition", "below after", "aria-hidden", "false", 3, "matBadge", "matBadgeHidden"], ["matRipple", "", "tippy", "Image Configuration", 1, "eav-grid-action-button", "highlight", 3, "click"], ["matBadgeSize", "small", "matBadgePosition", "below after", "aria-hidden", "false", "matBadgeColor", "accent", 3, "matBadge", "matBadgeHidden"], ["tippy", "no image configuration for this field", 1, "eav-grid-action-button", "disabled"], ["matBadgeSize", "small", "matBadgePosition", "below after", "aria-hidden", "false", "matBadgeDisabled", "true", 3, "matBadge", "matBadgeHidden"], ["matRipple", "", "tippy", "Permissions", 1, "eav-grid-action-button", "highlight", 3, "click"], ["tippy", "no permissions to configure on this field", 1, "eav-grid-action-button", "disabled"], ["matRipple", "", 1, "eav-grid-action-button", "highlight", 3, "click", "tippy"], ["aria-hidden", "false"], ["matRipple", "", 1, "eav-grid-action-button", "disabled", "eav-hover-icon-div", 3, "click", "tippy"], ["aria-hidden", "false", 1, "eav-hover-icon", "disabled"], ["mat-menu-item", "", 3, "click", "disabled"]],
    template: function ContentTypeFieldsActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ContentTypeFieldsActionsComponent_Conditional_1_Template, 3, 2, "div", 2)(2, ContentTypeFieldsActionsComponent_Conditional_2_Template, 3, 2)(3, ContentTypeFieldsActionsComponent_Conditional_3_Template, 3, 2, "div", 3)(4, ContentTypeFieldsActionsComponent_Conditional_4_Template, 3, 2)(5, ContentTypeFieldsActionsComponent_Conditional_5_Template, 3, 2, "div", 4)(6, ContentTypeFieldsActionsComponent_Conditional_6_Template, 3, 2)(7, ContentTypeFieldsActionsComponent_Conditional_7_Template, 3, 2, "div", 5)(8, ContentTypeFieldsActionsComponent_Conditional_8_Template, 3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6)(10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "more_horiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-menu", 7, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ContentTypeFieldsActionsComponent_ng_template_14_Template, 10, 2, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const menu_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](1, !ctx.field.EditInfo.DisableMetadata ? 1 : 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](3, !ctx.field.EditInfo.DisableEdit && ctx.field.imageConfiguration.isRecommended ? 3 : 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](5, !ctx.field.EditInfo.DisableEdit && ctx.enablePermissions ? 5 : 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](7, ctx.shareOrInheritIcon() != "" ? 7 : 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", menu_r8);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__.MatBadge, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_3__.TippyDirective],
    styles: [".eav-hover-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.eav-hover-icon-div[_ngcontent-%COMP%]:hover   .eav-hover-icon[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NvbnRlbnQtdHlwZS1maWVsZHMvY29udGVudC10eXBlLWZpZWxkcy1hY3Rpb25zL2NvbnRlbnQtdHlwZS1maWVsZHMtYWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5lYXYtaG92ZXItaWNvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmVhdi1ob3Zlci1pY29uLWRpdjpob3ZlciAuZWF2LWhvdmVyLWljb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 88202:
/*!********************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/content-type-fields-input-type/content-type-fields-input-type.component.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentTypeFieldsInputTypeComponent: () => (/* binding */ ContentTypeFieldsInputTypeComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);





function ContentTypeFieldsInputTypeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentTypeFieldsInputTypeComponent_Conditional_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changeInputType());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4)(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.value);
  }
}
function ContentTypeFieldsInputTypeComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6)(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.value);
  }
}
class ContentTypeFieldsInputTypeComponent {
  agInit(params) {
    this.params = params;
    this.value = params.value;
    this.field = params.data;
  }
  refresh(params) {
    return true;
  }
  changeInputType() {
    this.params.onChangeInputType(this.field);
  }
  static #_ = this.ɵfac = function ContentTypeFieldsInputTypeComponent_Factory(t) {
    return new (t || ContentTypeFieldsInputTypeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContentTypeFieldsInputTypeComponent,
    selectors: [["app-content-type-fields-input-type"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 2,
    consts: [["matRipple", "", 1, "input-component", "highlight"], [1, "input-component", "disabled"], ["matRipple", "", 1, "input-component", "highlight", 3, "click"], [1, "text"], [1, "eav-grid-action-button"], [1, "text", "disabled"], [1, "eav-grid-action-button", "disabled"]],
    template: function ContentTypeFieldsInputTypeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContentTypeFieldsInputTypeComponent_Conditional_0_Template, 6, 1, "div", 0)(1, ContentTypeFieldsInputTypeComponent_Conditional_1_Template, 6, 1, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](0, !ctx.field.EditInfo.DisableEdit ? 0 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, ctx.field.EditInfo.DisableEdit ? 1 : -1);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 30136:
/*!**************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/content-type-fields-special/content-type-fields-special.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentTypeFieldsSpecialComponent: () => (/* binding */ ContentTypeFieldsSpecialComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);



function ContentTypeFieldsSpecialComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "functions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ContentTypeFieldsSpecialComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "mobiledata_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class ContentTypeFieldsSpecialComponent {
  agInit(params) {
    const field = params.data;
    this.hasFormulas = field.HasFormulas;
    this.isEphemeral = field.IsEphemeral;
  }
  refresh(params) {
    return true;
  }
  static #_ = this.ɵfac = function ContentTypeFieldsSpecialComponent_Factory(t) {
    return new (t || ContentTypeFieldsSpecialComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContentTypeFieldsSpecialComponent,
    selectors: [["app-content-type-fields-special"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 2,
    consts: [[1, "icon-container"], ["tippy", "Has Formulas"], ["tippy", "Ephemeral / Temporary, won't save"]],
    template: function ContentTypeFieldsSpecialComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContentTypeFieldsSpecialComponent_Conditional_1_Template, 2, 0, "mat-icon", 1)(2, ContentTypeFieldsSpecialComponent_Conditional_2_Template, 2, 0, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, ctx.hasFormulas ? 1 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](2, ctx.isEphemeral ? 2 : -1);
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 55728:
/*!**********************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/content-type-fields-title/content-type-fields-title.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentTypeFieldsTitleComponent: () => (/* binding */ ContentTypeFieldsTitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);





function ContentTypeFieldsTitleComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentTypeFieldsTitleComponent_Conditional_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.setTitle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.isTitle ? "star" : "star_outline");
  }
}
function ContentTypeFieldsTitleComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.isTitle ? "star" : "star_outline");
  }
}
class ContentTypeFieldsTitleComponent {
  agInit(params) {
    this.params = params;
    this.isTitle = params.value;
    this.field = params.data;
  }
  refresh(params) {
    return true;
  }
  setTitle() {
    this.params.onSetTitle(this.field);
  }
  static #_ = this.ɵfac = function ContentTypeFieldsTitleComponent_Factory(t) {
    return new (t || ContentTypeFieldsTitleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContentTypeFieldsTitleComponent,
    selectors: [["app-content-type-fields-title"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 2,
    consts: [[1, "actions-component"], ["matRipple", "", "tippy", "Use as title field", 1, "eav-grid-action-button", "highlight"], [1, "eav-grid-action-button", "disabled"], ["matRipple", "", "tippy", "Use as title field", 1, "eav-grid-action-button", "highlight", 3, "click"]],
    template: function ContentTypeFieldsTitleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContentTypeFieldsTitleComponent_Conditional_1_Template, 3, 1, "div", 1)(2, ContentTypeFieldsTitleComponent_Conditional_2_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, !ctx.field.EditInfo.ReadOnly ? 1 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](2, ctx.field.EditInfo.ReadOnly ? 2 : -1);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 87904:
/*!********************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/content-type-fields-type/content-type-fields-type.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentTypeFieldsTypeComponent: () => (/* binding */ ContentTypeFieldsTypeComponent)
/* harmony export */ });
/* harmony import */ var _content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../content-type-fields.helpers */ 14007);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





class ContentTypeFieldsTypeComponent {
  agInit(params) {
    this.value = params.value;
    this.icon = (0,_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_0__.calculateTypeIcon)(this.value);
  }
  refresh(params) {
    return true;
  }
  static #_ = this.ɵfac = function ContentTypeFieldsTypeComponent_Factory(t) {
    return new (t || ContentTypeFieldsTypeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ContentTypeFieldsTypeComponent,
    selectors: [["app-content-type-fields-type"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 2,
    consts: [[1, "icon-container", 3, "tippy"]],
    template: function ContentTypeFieldsTypeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tippy", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.icon);
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__.TippyDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 213:
/*!**************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/content-type-fields.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentTypeFieldsComponent: () => (/* binding */ ContentTypeFieldsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ 17693);
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata */ 65217);
/* harmony import */ var _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../permissions/go-to-permissions */ 72437);
/* harmony import */ var _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/base-with-child-dialog.component */ 61735);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/models/edit-form.model */ 70334);
/* harmony import */ var _content_type_fields_actions_content_type_fields_actions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content-type-fields-actions/content-type-fields-actions.component */ 91260);
/* harmony import */ var _content_type_fields_input_type_content_type_fields_input_type_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content-type-fields-input-type/content-type-fields-input-type.component */ 88202);
/* harmony import */ var _content_type_fields_special_content_type_fields_special_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content-type-fields-special/content-type-fields-special.component */ 30136);
/* harmony import */ var _content_type_fields_title_content_type_fields_title_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./content-type-fields-title/content-type-fields-title.component */ 55728);
/* harmony import */ var _content_type_fields_type_content_type_fields_type_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./content-type-fields-type/content-type-fields-type.component */ 87904);
/* harmony import */ var _services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/content-types-fields.service */ 83051);
/* harmony import */ var _edit_form_fields_empty_empty_field_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../edit/form/fields/empty/empty-field-helpers */ 82895);
/* harmony import */ var _share_or_inherit_dialog_share_or_inherit_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./share-or-inherit-dialog/share-or-inherit-dialog.component */ 13656);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_directives_toggle_debug_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/directives/toggle-debug.directive */ 95699);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);



































const _c0 = (a0, a1) => ({
  "grid-sorted": a0,
  "grid-filtered": a1
});
function ContentTypeFieldsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ContentTypeFieldsComponent_Conditional_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](8, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 5)(10, "ag-grid-angular", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("rowDragEnter", function ContentTypeFieldsComponent_Conditional_0_Template_ag_grid_angular_rowDragEnter_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onRowDragEnter($event));
    })("rowDragEnd", function ContentTypeFieldsComponent_Conditional_0_Template_ag_grid_angular_rowDragEnd_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onRowDragEnd($event));
    })("rowDragMove", function ContentTypeFieldsComponent_Conditional_0_Template_ag_grid_angular_rowDragMove_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onRowDragMove($event));
    })("gridReady", function ContentTypeFieldsComponent_Conditional_0_Template_ag_grid_angular_gridReady_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onGridReady($event));
    })("sortChanged", function ContentTypeFieldsComponent_Conditional_0_Template_ag_grid_angular_sortChanged_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onSortChanged($event));
    })("filterChanged", function ContentTypeFieldsComponent_Conditional_0_Template_ag_grid_angular_filterChanged_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onFilterChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "mat-dialog-actions", 7)(12, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ContentTypeFieldsComponent_Conditional_0_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const vm_r3 = ctx;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", (vm_r3.contentType == null ? null : vm_r3.contentType.Label) || (vm_r3.contentType == null ? null : vm_r3.contentType.Name), " Fields ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("rowData", vm_r3.fields)("gridOptions", ctx_r1.gridOptions)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction2"](5, _c0, ctx_r1.sortApplied, ctx_r1.filterApplied));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", vm_r3.contentType == null || vm_r3.contentType.EditInfo.ReadOnly);
  }
}
class ContentTypeFieldsComponent extends _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_3__.BaseWithChildDialogComponent {
  constructor(router, route, dialogRef, contentTypesService, contentTypesFieldsService, snackBar, dialog) {
    super(router, route);
    this.router = router;
    this.route = route;
    this.dialogRef = dialogRef;
    this.contentTypesService = contentTypesService;
    this.contentTypesFieldsService = contentTypesFieldsService;
    this.snackBar = snackBar;
    this.dialog = dialog;
    this.contentType$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject(undefined);
    this.fields$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject(undefined);
    this.gridOptions = this.buildGridOptions();
    this.sortApplied = false;
    this.filterApplied = false;
    this.rowDragSuppressed = false;
    this.contentTypeStaticName = this.route.snapshot.paramMap.get('contentTypeStaticName');
  }
  ngOnInit() {
    this.fetchFields();
    this.subscriptions.add(this.childDialogClosed$().subscribe(() => {
      this.fetchFields();
    }));
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)([this.contentType$, this.fields$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.map)(([contentType, fields]) => ({
      contentType,
      fields
    })));
  }
  ngOnDestroy() {
    this.contentType$.complete();
    this.fields$.complete();
    super.ngOnDestroy();
  }
  closeDialog() {
    this.dialogRef.close();
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
  }
  onRowDragEnter(event) {
    this.gridApi.setEnableCellTextSelection(false);
  }
  onRowDragEnd(event) {
    this.gridApi.setSuppressRowDrag(true);
    const idArray = this.fields$.value.map(field => field.Id);
    this.contentTypesFieldsService.reOrder(idArray, this.contentType$.value).subscribe(() => {
      this.fetchFields(() => {
        this.gridApi.setEnableCellTextSelection(true);
        this.gridApi.setSuppressRowDrag(false);
      });
    });
  }
  onRowDragMove(event) {
    const movingNode = event.node;
    const overNode = event.overNode;
    if (!overNode) {
      return;
    }
    const rowNeedsToMove = movingNode !== overNode;
    if (rowNeedsToMove) {
      const movingData = movingNode.data;
      const overData = overNode.data;
      const newFields = [...this.fields$.value];
      const fromIndex = newFields.indexOf(movingData);
      const toIndex = newFields.indexOf(overData);
      this.moveInArray(newFields, fromIndex, toIndex);
      this.fields$.next(newFields);
      this.gridApi.clearFocusedCell();
    }
  }
  moveInArray(arr, fromIndex, toIndex) {
    const element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
  }
  onSortChanged(params) {
    const columnStates = this.columnApi.getColumnState();
    this.sortApplied = columnStates.some(state => state.sort != null);
    this.suppressRowDrag();
  }
  onFilterChanged(params) {
    const filterModel = this.gridApi.getFilterModel();
    const fieldsFiltered = Object.keys(filterModel);
    this.filterApplied = fieldsFiltered.length > 0;
    this.suppressRowDrag();
  }
  suppressRowDrag() {
    const shouldSuppress = this.sortApplied || this.filterApplied;
    if (shouldSuppress && !this.rowDragSuppressed) {
      this.rowDragSuppressed = true;
      this.gridApi.setSuppressRowDrag(true);
    } else if (!shouldSuppress && this.rowDragSuppressed) {
      this.rowDragSuppressed = false;
      this.gridApi.setSuppressRowDrag(false);
    }
  }
  add() {
    this.router.navigate([`add/${this.contentTypeStaticName}`], {
      relativeTo: this.route
    });
  }
  nameCellRenderer(params) {
    const currentField = params.data;
    const inputType = currentField.InputType;
    if (_edit_form_fields_empty_empty_field_helpers__WEBPACK_IMPORTED_MODULE_14__.EmptyFieldHelpers.endsPreviousGroup(inputType)) return params.value;
    let isGroupOpen = false;
    for (const field of this.fields$.value) {
      if (_edit_form_fields_empty_empty_field_helpers__WEBPACK_IMPORTED_MODULE_14__.EmptyFieldHelpers.isGroupStart(inputType)) {
        isGroupOpen = true;
        continue;
      }
      if (_edit_form_fields_empty_empty_field_helpers__WEBPACK_IMPORTED_MODULE_14__.EmptyFieldHelpers.isGroupEnd(inputType)) {
        isGroupOpen = false;
        continue;
      }
      if (field.StaticName === currentField.StaticName) break;
    }
    return isGroupOpen ? `<span class="is-in-group">${params.value}</span>` : params.value;
  }
  fetchFields(callback) {
    const contentType$ = this.contentType$.value == null ? this.contentTypesService.retrieveContentType(this.contentTypeStaticName) : (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.of)(this.contentType$.value);
    const fields$ = this.contentTypesFieldsService.getFields(this.contentTypeStaticName);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.forkJoin)([contentType$, fields$]).subscribe(([contentType, fields]) => {
      this.contentType$.next(contentType);
      this.fields$.next(fields);
      if (callback != null) callback();
    });
  }
  editFieldMetadata(field) {
    // 2023-11-10 @2dm #ConfigTypesFromBackend
    // https://github.com/2sic/2sxc/issues/3205
    // Keep old code in till 2024-01 for ref in case something breaks
    // console.warn('2dm - editFieldMetadata', field);
    // console.warn('2dm - editFieldMetadata', field.ConfigTypes);
    // const form: EditForm = {
    //   items: [
    //     this.createItemDefinition(field, 'All'),
    //     this.createItemDefinition(field, field.Type),
    //     this.createItemDefinition(field, field.InputType),
    //   ],
    // };
    // If this field is inherited and therefor has no own metadata, show a snackbar and exit
    if (field.SysSettings?.InheritMetadataOf) {
      if (!Object.keys(field.ConfigTypes).length) {
        this.snackBar.open('This field inherits all configuration so there is nothing to edit.', null, {
          duration: 3000
        });
        return;
      }
      this.snackBar.open('This field inherits some configuration. Edit will only show configuration which is not inherited.', null, {
        duration: 5000
      });
    }
    // if this field is shared/can-be-inherited, show warning so the user is aware of it
    if (field.SysSettings?.Share) this.snackBar.open('This field is shared, so changing it will affect all other fields inheriting it.', null, {
      duration: 5000
    });
    const form = {
      items: Object.keys(field.ConfigTypes).map(t => this.createItemDefinition(field, t))
    };
    // console.warn('2dm - editFieldMetadata', field.ConfigTypes, form);
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_6__.convertFormToUrl)(form);
    this.router.navigate([`edit/${formUrl}`], {
      relativeTo: this.route
    });
  }
  createItemDefinition(field, metadataType) {
    // The keys could start with an @ but may not, and in some cases we need it, others we don't
    const keyForMdLookup = metadataType.replace('@', '');
    const newItemTypeName = ('@' + metadataType).replace('@@', '@');
    // Is an item of this type already loaded? Then just edit it, otherwise request new as Metadata
    const existingMd = field.Metadata[keyForMdLookup];
    return existingMd != null ? _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_7__.EditPrep.editId(existingMd.Id) // if defined, return the entity-number to edit
    : {
      ..._shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_7__.EditPrep.newMetadata(field.Id, newItemTypeName, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_5__.eavConstants.metadata.attribute),
      Prefill: {
        Name: field.StaticName
      }
    };
  }
  setTitle(field) {
    this.snackBar.open('Setting title...');
    this.contentTypesFieldsService.setTitle(field, this.contentType$.value).subscribe(() => {
      this.snackBar.open('Title set', null, {
        duration: 2000
      });
      this.fetchFields();
    });
  }
  changeInputType(field) {
    this.router.navigate([`update/${this.contentTypeStaticName}/${field.Id}/inputType`], {
      relativeTo: this.route
    });
  }
  rename(field) {
    this.router.navigate([`update/${this.contentTypeStaticName}/${field.Id}/name`], {
      relativeTo: this.route
    });
  }
  delete(field) {
    if (!confirm(`Are you sure you want to delete '${field.StaticName}' (${field.Id})?`)) {
      return;
    }
    this.snackBar.open('Deleting...');
    this.contentTypesFieldsService.delete(field, this.contentType$.value).subscribe(() => {
      this.snackBar.open('Deleted', null, {
        duration: 2000
      });
      this.fetchFields();
    });
  }
  openPermissions(field) {
    this.router.navigate([_permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_2__.GoToPermissions.getUrlAttribute(field.Id)], {
      relativeTo: this.route
    });
  }
  openImageConfiguration(field) {
    console.log('2dm - openImageConfiguration', field);
    const imgConfig = field.imageConfiguration;
    if (imgConfig?.isRecommended != true) throw new Error('This field does not expect to have an image configuration');
    const itemIdentifier = imgConfig.entityId ? _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_7__.EditPrep.editId(imgConfig.entityId) : _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_7__.EditPrep.newMetadata(field.Id, imgConfig.typeName, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_5__.eavConstants.metadata.attribute);
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_6__.convertFormToUrl)({
      items: [itemIdentifier]
    });
    this.router.navigate([`edit/${formUrl}`], {
      relativeTo: this.route
    });
  }
  openMetadata(field) {
    const url = _metadata__WEBPACK_IMPORTED_MODULE_1__.GoToMetadata.getUrlAttribute(field.Id, `Metadata for Field: ${field.StaticName} (${field.Id})`);
    this.router.navigate([url], {
      relativeTo: this.route
    });
  }
  shareOrInherit(field) {
    const shareOrInheritDialogRef = this.dialog.open(_share_or_inherit_dialog_share_or_inherit_dialog_component__WEBPACK_IMPORTED_MODULE_15__.ShareOrInheritDialogComponent, {
      autoFocus: false,
      width: '800px',
      data: field
    });
    shareOrInheritDialogRef.afterClosed().subscribe(() => this.fetchFields());
  }
  buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_4__.defaultGridOptions,
      getRowClass(params) {
        const field = params.data;
        const rowClass = [];
        if (field.EditInfo.DisableSort) {
          rowClass.push('disable-row-drag');
        }
        if (_edit_form_fields_empty_empty_field_helpers__WEBPACK_IMPORTED_MODULE_14__.EmptyFieldHelpers.isGroupStart(field.InputType)) {
          rowClass.push('group-start-row');
        }
        if (_edit_form_fields_empty_empty_field_helpers__WEBPACK_IMPORTED_MODULE_14__.EmptyFieldHelpers.isGroupEnd(field.InputType)) {
          rowClass.push('group-end-row');
        }
        return rowClass;
      },
      columnDefs: [{
        rowDrag: true,
        width: 18,
        cellClass: 'no-select no-padding no-outline'.split(' ')
      }, {
        field: 'Title',
        width: 42,
        cellClass: 'secondary-action no-padding no-outline'.split(' '),
        valueGetter: params => {
          const field = params.data;
          return field.IsTitle;
        },
        cellRenderer: _content_type_fields_title_content_type_fields_title_component__WEBPACK_IMPORTED_MODULE_11__.ContentTypeFieldsTitleComponent,
        cellRendererParams: (() => {
          const params = {
            onSetTitle: field => this.setTitle(field)
          };
          return params;
        })()
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_16__.ColumnDefinitions.TextWide,
        headerName: 'Name',
        field: 'StaticName',
        onCellClicked: params => {
          const field = params.data;
          this.editFieldMetadata(field);
        },
        cellRenderer: params => this.nameCellRenderer(params)
      }, {
        field: 'Type',
        width: 70,
        headerClass: 'dense',
        cellClass: 'no-outline',
        sortable: true,
        filter: 'agTextColumnFilter',
        valueGetter: params => {
          const field = params.data;
          return field.Type;
        },
        cellRenderer: _content_type_fields_type_content_type_fields_type_component__WEBPACK_IMPORTED_MODULE_12__.ContentTypeFieldsTypeComponent
      }, {
        headerName: 'Input',
        field: 'InputType',
        width: 160,
        cellClass: params => {
          const field = params.data;
          return `${field.EditInfo.DisableEdit ? 'no-outline no-padding' : 'secondary-action no-padding'}`.split(' ');
        },
        sortable: true,
        filter: 'agTextColumnFilter',
        valueGetter: params => {
          const field = params.data;
          const inputType = field.InputType.substring(field.InputType.indexOf('-') + 1);
          return inputType;
        },
        cellRenderer: _content_type_fields_input_type_content_type_fields_input_type_component__WEBPACK_IMPORTED_MODULE_9__.ContentTypeFieldsInputTypeComponent,
        cellRendererParams: (() => {
          const params = {
            onChangeInputType: field => this.changeInputType(field)
          };
          return params;
        })()
      }, {
        field: 'Label',
        flex: 2,
        minWidth: 250,
        cellClass: 'no-outline',
        sortable: true,
        filter: 'agTextColumnFilter',
        valueGetter: params => {
          const field = params.data;
          return field.Metadata?.All?.Name;
        }
      }, {
        field: 'Special',
        width: 66,
        headerClass: 'dense',
        cellClass: 'no-outline',
        cellRenderer: _content_type_fields_special_content_type_fields_special_component__WEBPACK_IMPORTED_MODULE_10__.ContentTypeFieldsSpecialComponent
      }, {
        field: 'Notes',
        flex: 2,
        minWidth: 250,
        cellClass: 'no-outline',
        sortable: true,
        filter: 'agTextColumnFilter',
        valueGetter: params => {
          const field = params.data;
          return field.Metadata?.All?.Notes;
        }
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_16__.ColumnDefinitions.ActionsPinnedRight5,
        cellRenderer: _content_type_fields_actions_content_type_fields_actions_component__WEBPACK_IMPORTED_MODULE_8__.ContentTypeFieldsActionsComponent,
        cellRendererParams: (() => ({
          do: (verb, field) => {
            switch (verb) {
              case 'rename':
                this.rename(field);
                break;
              case 'delete':
                this.delete(field);
                break;
              case 'permissions':
                this.openPermissions(field);
                break;
              case 'metadata':
                this.openMetadata(field);
                break;
              case 'shareOrInherit':
                this.shareOrInherit(field);
                break;
              case 'image':
                this.openImageConfiguration(field);
                break;
            }
          }
        }))()
      }]
    };
    return gridOptions;
  }
  static #_ = this.ɵfac = function ContentTypeFieldsComponent_Factory(t) {
    return new (t || ContentTypeFieldsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_0__.ContentTypesService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_13__.ContentTypesFieldsService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
    type: ContentTypeFieldsComponent,
    selectors: [["app-content-type-fields"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵProvidersFeature"]([_app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_0__.ContentTypesService, _services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_13__.ContentTypesFieldsService]), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [["appToggleDebug", "", 1, "eav-dialog", "nav-component-wrapper"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [1, "eav-dialog-content", "nav-component-wrapper"], [1, "grid-wrapper"], [1, "ag-theme-material", 3, "rowDragEnter", "rowDragEnd", "rowDragMove", "gridReady", "sortChanged", "filterChanged", "rowData", "gridOptions", "ngClass"], ["align", "end"], ["mat-fab", "", "mat-elevation-z24", "", "tippy", "Add fields", 1, "grid-fab", 3, "click", "disabled"]],
    template: function ContentTypeFieldsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, ContentTypeFieldsComponent_Conditional_0_Template, 15, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgClass, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_30__.AsyncPipe, _shared_directives_toggle_debug_directive__WEBPACK_IMPORTED_MODULE_17__.ToggleDebugDirective, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_18__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_31__.AgGridAngular],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 86276:
/*!***************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/share-or-inherit-dialog/share-or-inherit-dialog-models.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharingOrInheriting: () => (/* binding */ SharingOrInheriting)
/* harmony export */ });
var SharingOrInheriting;
(function (SharingOrInheriting) {
  SharingOrInheriting[SharingOrInheriting["None"] = 0] = "None";
  SharingOrInheriting[SharingOrInheriting["Sharing"] = 1] = "Sharing";
  SharingOrInheriting[SharingOrInheriting["Inheriting"] = 2] = "Inheriting";
})(SharingOrInheriting || (SharingOrInheriting = {}));

/***/ }),

/***/ 13656:
/*!******************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-type-fields/share-or-inherit-dialog/share-or-inherit-dialog.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShareOrInheritDialogComponent: () => (/* binding */ ShareOrInheritDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/base.component */ 43176);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/content-types-fields.service */ 83051);
/* harmony import */ var _share_or_inherit_dialog_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./share-or-inherit-dialog-models */ 86276);
/* harmony import */ var _features_shared_base_feature_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/shared/base-feature.component */ 9006);
/* harmony import */ var _shared_services_features_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/features.service */ 44858);
/* harmony import */ var _features_feature_names__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../features/feature-names */ 28136);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _features_feature_icon_indicator_feature_icon_indicator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../features/feature-icon-indicator/feature-icon-indicator.component */ 83703);
/* harmony import */ var _features_services_feature_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../features/services/feature-detail.service */ 45943);

























const _c0 = a0 => ({
  "eav-selected-row": a0
});
function ShareOrInheritDialogComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ShareOrInheritDialogComponent_Conditional_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function ShareOrInheritDialogComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, ctx_r1.message), " ", ctx_r1.dialogData.Guid, "");
  }
}
function ShareOrInheritDialogComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, ctx_r1.message), " ", ctx_r1.dialogData.SysSettings.InheritMetadataOf, "");
  }
}
function ShareOrInheritDialogComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ShareOrInheritDialogComponent_Conditional_9_Conditional_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.chooseShare());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ShareOrInheritDialogComponent_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ShareOrInheritDialogComponent_Conditional_9_Conditional_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.chooseInherit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Inherit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ShareOrInheritDialogComponent_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "This will share the field definition");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ShareOrInheritDialogComponent_Conditional_9_Conditional_4_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Content Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function ShareOrInheritDialogComponent_Conditional_9_Conditional_4_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", field_r5.ContentType.Name, " ");
  }
}
function ShareOrInheritDialogComponent_Conditional_9_Conditional_4_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function ShareOrInheritDialogComponent_Conditional_9_Conditional_4_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", field_r6.StaticName, " ");
  }
}
function ShareOrInheritDialogComponent_Conditional_9_Conditional_4_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function ShareOrInheritDialogComponent_Conditional_9_Conditional_4_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", field_r7.Type, " ");
  }
}
function ShareOrInheritDialogComponent_Conditional_9_Conditional_4_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 22);
  }
}
function ShareOrInheritDialogComponent_Conditional_9_Conditional_4_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ShareOrInheritDialogComponent_Conditional_9_Conditional_4_tr_12_Template_tr_click_0_listener() {
      const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.inheritField(row_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r1.guid === row_r9.Guid));
  }
}
function ShareOrInheritDialogComponent_Conditional_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card", 9)(1, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ShareOrInheritDialogComponent_Conditional_9_Conditional_4_th_3_Template, 3, 0, "th", 14)(4, ShareOrInheritDialogComponent_Conditional_9_Conditional_4_td_4_Template, 2, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](5, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ShareOrInheritDialogComponent_Conditional_9_Conditional_4_th_6_Template, 3, 0, "th", 14)(7, ShareOrInheritDialogComponent_Conditional_9_Conditional_4_td_7_Template, 2, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](8, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, ShareOrInheritDialogComponent_Conditional_9_Conditional_4_th_9_Template, 3, 0, "th", 14)(10, ShareOrInheritDialogComponent_Conditional_9_Conditional_4_td_10_Template, 2, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, ShareOrInheritDialogComponent_Conditional_9_Conditional_4_tr_11_Template, 1, 0, "tr", 18)(12, ShareOrInheritDialogComponent_Conditional_9_Conditional_4_tr_12_Template, 1, 3, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx.shareableFields);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedShareableFieldsColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedShareableFieldsColumns);
  }
}
function ShareOrInheritDialogComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ShareOrInheritDialogComponent_Conditional_9_Conditional_1_Template, 2, 0, "button", 7)(2, ShareOrInheritDialogComponent_Conditional_9_Conditional_2_Template, 2, 0, "button", 8)(3, ShareOrInheritDialogComponent_Conditional_9_Conditional_3_Template, 2, 0, "span")(4, ShareOrInheritDialogComponent_Conditional_9_Conditional_4_Template, 13, 3, "mat-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](1, ctx_r1.state == ctx_r1.sharingOrInheriting.None ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](2, ctx_r1.state == ctx_r1.sharingOrInheriting.None ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](3, ctx_r1.state == ctx_r1.sharingOrInheriting.Sharing ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](4, (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 4, ctx_r1.state == ctx_r1.sharingOrInheriting.Inheriting && ctx_r1.viewModel$)) ? 4 : -1, tmp_4_0);
  }
}
function ShareOrInheritDialogComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 5)(1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ShareOrInheritDialogComponent_Conditional_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ShareOrInheritDialogComponent_Conditional_10_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 25)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "app-feature-icon-indicator", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.isSaveDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("featureNameId", "FieldShareConfigManagement");
  }
}
class ShareOrInheritDialogComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(dialogData, dialogRef, contentTypesFieldsService,
  // All this is just for the feature dialog
  dialog, viewContainerRef, changeDetectorRef) {
    super();
    this.dialogData = dialogData;
    this.dialogRef = dialogRef;
    this.contentTypesFieldsService = contentTypesFieldsService;
    this.dialog = dialog;
    this.viewContainerRef = viewContainerRef;
    this.changeDetectorRef = changeDetectorRef;
    this.displayedShareableFieldsColumns = ['contentType', 'name', 'type'];
    this.state = _share_or_inherit_dialog_models__WEBPACK_IMPORTED_MODULE_2__.SharingOrInheriting.None;
    this.initialState = _share_or_inherit_dialog_models__WEBPACK_IMPORTED_MODULE_2__.SharingOrInheriting.None;
    this.sharingOrInheriting = _share_or_inherit_dialog_models__WEBPACK_IMPORTED_MODULE_2__.SharingOrInheriting;
    this.guid = null;
    this.isSaveDisabled = true;
    this.shareableFields$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(undefined);
    this.features = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_shared_services_features_service__WEBPACK_IMPORTED_MODULE_4__.FeaturesService);
    this.fieldShareConfigManagement = this.features.isEnabled(_features_feature_names__WEBPACK_IMPORTED_MODULE_5__.FeatureNames.FieldShareConfigManagement);
  }
  ngOnInit() {
    this.initialState = !this.dialogData.SysSettings || !this.dialogData.SysSettings.Share && !this.dialogData.SysSettings.InheritMetadataOf ? _share_or_inherit_dialog_models__WEBPACK_IMPORTED_MODULE_2__.SharingOrInheriting.None : this.dialogData.SysSettings.Share ? _share_or_inherit_dialog_models__WEBPACK_IMPORTED_MODULE_2__.SharingOrInheriting.Sharing : _share_or_inherit_dialog_models__WEBPACK_IMPORTED_MODULE_2__.SharingOrInheriting.Inheriting;
    if (this.initialState === _share_or_inherit_dialog_models__WEBPACK_IMPORTED_MODULE_2__.SharingOrInheriting.None) {
      this.title = 'SharingOrInheriting.TitleNone';
      const shareableFields$ = this.contentTypesFieldsService.getShareableFieldsFor(this.dialogData.AttributeId);
      this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([shareableFields$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(([shareableFields]) => {
        this.shareableFields$.next(shareableFields);
        return {
          shareableFields
        };
      }));
    } else if (this.initialState === _share_or_inherit_dialog_models__WEBPACK_IMPORTED_MODULE_2__.SharingOrInheriting.Sharing) {
      this.title = 'SharingOrInheriting.TitleSharing';
      this.message = 'SharingOrInheriting.MessageSharing';
    } else if (this.initialState === _share_or_inherit_dialog_models__WEBPACK_IMPORTED_MODULE_2__.SharingOrInheriting.Inheriting) {
      this.title = 'SharingOrInheriting.TitleInheriting';
      this.message = 'SharingOrInheriting.MessageInheriting';
    }
  }
  chooseShare() {
    this.guid = null;
    this.state = _share_or_inherit_dialog_models__WEBPACK_IMPORTED_MODULE_2__.SharingOrInheriting.Sharing;
    this.isSaveDisabled = false;
  }
  chooseInherit() {
    this.guid = null;
    this.state = _share_or_inherit_dialog_models__WEBPACK_IMPORTED_MODULE_2__.SharingOrInheriting.Inheriting;
    this.isSaveDisabled = true;
  }
  inheritField(field) {
    this.guid = field.Guid;
    this.isSaveDisabled = false;
  }
  save() {
    if (!this.fieldShareConfigManagement()) {
      (0,_features_shared_base_feature_component__WEBPACK_IMPORTED_MODULE_3__.openFeatureDialog)(this.dialog, _features_feature_names__WEBPACK_IMPORTED_MODULE_5__.FeatureNames.FieldShareConfigManagement, this.viewContainerRef, this.changeDetectorRef);
    } else {
      if (this.state == _share_or_inherit_dialog_models__WEBPACK_IMPORTED_MODULE_2__.SharingOrInheriting.Sharing) {
        this.subscriptions.add(this.contentTypesFieldsService.share(this.dialogData.Id).subscribe(() => this.dialogRef.close()));
      } else if (this.state == _share_or_inherit_dialog_models__WEBPACK_IMPORTED_MODULE_2__.SharingOrInheriting.Inheriting) {
        this.subscriptions.add(this.contentTypesFieldsService.inherit(this.dialogData.Id, this.guid).subscribe(() => this.dialogRef.close()));
      }
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function ShareOrInheritDialogComponent_Factory(t) {
    return new (t || ShareOrInheritDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_1__.ContentTypesFieldsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: ShareOrInheritDialogComponent,
    selectors: [["app-share-or-inherit-dialog"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([_features_services_feature_detail_service__WEBPACK_IMPORTED_MODULE_7__.FeatureDetailService]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
    decls: 11,
    vars: 8,
    consts: [[1, "eav-dialog", "eav-no-scrollbar"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], ["mat-icon-button", "", "tippy", "Close dialog"], [1, "eav-dialog-content"], [1, "eav-dialog-actions"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], ["mat-raised-button", "", "type", "button", 1, "eav-dialog-action-button"], ["mat-raised-button", "", "type", "button"], [1, "eav-table-div"], ["mat-raised-button", "", "type", "button", 1, "eav-dialog-action-button", 3, "click"], ["mat-raised-button", "", "type", "button", 3, "click"], ["mat-table", "", 1, "mat-elevation-z8", "eav-fields-table", 3, "dataSource"], ["matColumnDef", "contentType"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "type"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click", "ngClass"], ["mat-raised-button", "", "type", "submit", "color", "accent", 1, "eav-dialog-action-button", 3, "click", "disabled"], [1, "eav-button-feature"], [1, "eav-button-feature-icon", 3, "featureNameId"]],
    template: function ShareOrInheritDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ShareOrInheritDialogComponent_Conditional_5_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, ShareOrInheritDialogComponent_Conditional_7_Template, 3, 4, "div")(8, ShareOrInheritDialogComponent_Conditional_8_Template, 3, 4, "div")(9, ShareOrInheritDialogComponent_Conditional_9_Template, 6, 6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, ShareOrInheritDialogComponent_Conditional_10_Template, 8, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 6, ctx.title), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](5, ctx.initialState != ctx.sharingOrInheriting.None ? 5 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](7, ctx.initialState == ctx.sharingOrInheriting.Sharing ? 7 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](8, ctx.initialState == ctx.sharingOrInheriting.Inheriting ? 8 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](9, ctx.initialState == ctx.sharingOrInheriting.None ? 9 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](10, ctx.initialState == ctx.sharingOrInheriting.None ? 10 : -1);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRow, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe, _features_feature_icon_indicator_feature_icon_indicator_component__WEBPACK_IMPORTED_MODULE_6__.FeatureIconIndicatorComponent],
    styles: [".eav-table-div[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  width: 100%;\n  max-height: 400px;\n  overflow-y: auto;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.eav-table-div[_ngcontent-%COMP%]   .eav-selected-row[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n\n.eav-dialog-actions[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  padding: 8px 0px;\n}\n\n.eav-dialog-action-button[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.eav-dialog-action-button[_ngcontent-%COMP%]   .eav-button-feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.eav-dialog-action-button[_ngcontent-%COMP%]   .eav-button-feature[_ngcontent-%COMP%]   .eav-button-feature-icon[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  margin-top: 6px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NvbnRlbnQtdHlwZS1maWVsZHMvc2hhcmUtb3ItaW5oZXJpdC1kaWFsb2cvc2hhcmUtb3ItaW5oZXJpdC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQUNGO0FBQ0U7RUFDRSxxQ0FBQTtBQUNKOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtBQUFGO0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFKO0FBRUk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFBTiIsInNvdXJjZXNDb250ZW50IjpbIi5lYXYtdGFibGUtZGl2IHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG4gIC5lYXYtc2VsZWN0ZWQtcm93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgfVxyXG59XHJcblxyXG4uZWF2LWRpYWxvZy1hY3Rpb25zIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogOHB4IDBweDtcclxufVxyXG5cclxuLmVhdi1kaWFsb2ctYWN0aW9uLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcblxyXG4gIC5lYXYtYnV0dG9uLWZlYXR1cmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAuZWF2LWJ1dHRvbi1mZWF0dXJlLWljb24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
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

/***/ 70334:
/*!******************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/models/edit-form.model.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditPrep: () => (/* binding */ EditPrep)
/* harmony export */ });
// 2dm - new helper to reduce code when creating item identifiers
// TODO: @2dg - try to replace as many direct object creations with this as possible
class EditPrep {
  static editId(id) {
    return {
      EntityId: id
    };
  }
  // TODO: @2dg - TO FIND where this should be used, look for "For:" in the code
  static newMetadata(key, typeName, keyDef) {
    return {
      ContentTypeName: typeName,
      For: EditPrep.createFor(keyDef, key)
    };
  }
  static createFor(keyDef, key) {
    return {
      Target: keyDef.target,
      TargetType: keyDef.targetType,
      ...(typeof key == 'number' ? {
        Number: key
      } : keyDef.keyType == 'guid' ? {
        Guid: key
      } : {
        String: key
      })
    };
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_content-type-fields_content-type-fields_component_ts.js.map