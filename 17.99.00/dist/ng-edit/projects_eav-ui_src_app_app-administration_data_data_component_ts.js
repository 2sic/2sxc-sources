"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_data_data_component_ts"],{

/***/ 23513:
/*!************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/data/data-actions/data-actions.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataActionsComponent: () => (/* binding */ DataActionsComponent)
/* harmony export */ });
/* harmony import */ var _shared_constants_guid_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/guid.constants */ 49417);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);










function DataActionsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataActionsComponent_Conditional_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.do("createUpdateMetaData"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function DataActionsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function DataActionsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataActionsComponent_Conditional_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.do("openMetadata"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " local_offer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matBadge", ctx_r1.contentType.Metadata.length)("matBadgeHidden", !ctx_r1.contentType.Metadata.length);
  }
}
function DataActionsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " local_offer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matBadge", ctx_r1.contentType.Metadata.length)("matBadgeHidden", !ctx_r1.contentType.Metadata.length);
  }
}
function DataActionsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataActionsComponent_Conditional_5_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.do("openPermissions"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " person");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matBadge", ctx_r1.contentType.Permissions.Count)("matBadgeHidden", !ctx_r1.contentType.Permissions.Count);
  }
}
function DataActionsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " person");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matBadge", ctx_r1.contentType.Permissions.Count)("matBadgeHidden", !ctx_r1.contentType.Permissions.Count);
  }
}
function DataActionsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataActionsComponent_ng_template_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.do("editContentType"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Rename");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataActionsComponent_ng_template_12_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.do("openRestApi"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "REST API");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataActionsComponent_ng_template_12_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.do("typeExport"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Export content type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataActionsComponent_ng_template_12_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.do("dataExport"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Export data");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataActionsComponent_ng_template_12_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.do("dataImport"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Import data");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataActionsComponent_ng_template_12_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.do("deleteContentType"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.contentType.EditInfo.DisableRename);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.contentType.EditInfo.DisableDelete);
  }
}
class DataActionsComponent {
  agInit(params) {
    this.params = params;
    this.contentType = this.params.data;
    const enablePermissions = this.params.enablePermissionsGetter();
    this.enablePermissions = enablePermissions && (0,_shared_constants_guid_constants__WEBPACK_IMPORTED_MODULE_0__.guidRegex)().test(this.contentType.StaticName);
  }
  refresh(params) {
    return true;
  }
  do(verb) {
    this.params.do(verb, this.contentType);
  }
  static #_ = this.ɵfac = function DataActionsComponent_Factory(t) {
    return new (t || DataActionsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DataActionsComponent,
    selectors: [["app-data-actions"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 13,
    vars: 7,
    consts: [["menu", "matMenu"], [1, "actions-component"], ["matRipple", "", "tippy", "Description and more", 1, "eav-grid-action-button", "highlight"], [1, "eav-grid-action-button", "disabled"], ["matRipple", "", "tippy", "Metadata", 1, "eav-grid-action-button", "highlight"], ["matRipple", "", "tippy", "Permissions", 1, "eav-grid-action-button", "highlight"], ["matRipple", "", "tippy", "More", 1, "eav-grid-action-button", "highlight", 3, "matMenuTriggerFor"], [1, "grid-more-menu"], ["matMenuContent", ""], ["matRipple", "", "tippy", "Description and more", 1, "eav-grid-action-button", "highlight", 3, "click"], ["matRipple", "", "tippy", "Metadata", 1, "eav-grid-action-button", "highlight", 3, "click"], ["matBadgePosition", "below after", "matBadgeColor", "accent", "matBadgeSize", "small", "aria-hidden", "false", 3, "matBadge", "matBadgeHidden"], ["matBadgePosition", "below after", "matBadgeColor", "accent", "matBadgeSize", "small", "matBadgeDisabled", "true", "aria-hidden", "false", 3, "matBadge", "matBadgeHidden"], ["matRipple", "", "tippy", "Permissions", 1, "eav-grid-action-button", "highlight", 3, "click"], ["mat-menu-item", "", 3, "click", "disabled"], ["mat-menu-item", "", 3, "click"], ["svgIcon", "code-curly"]],
    template: function DataActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataActionsComponent_Conditional_1_Template, 3, 0, "div", 2)(2, DataActionsComponent_Conditional_2_Template, 3, 0, "div", 3)(3, DataActionsComponent_Conditional_3_Template, 3, 2, "div", 4)(4, DataActionsComponent_Conditional_4_Template, 3, 2, "div", 3)(5, DataActionsComponent_Conditional_5_Template, 3, 2, "div", 5)(6, DataActionsComponent_Conditional_6_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "more_horiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-menu", 7, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, DataActionsComponent_ng_template_12_Template, 29, 2, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const menu_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, !ctx.contentType.EditInfo.DisableEdit || ctx.contentType.Properties ? 1 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](2, ctx.contentType.EditInfo.DisableEdit && !ctx.contentType.Properties ? 2 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](3, !ctx.contentType.EditInfo.DisableMetadata ? 3 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](4, ctx.contentType.EditInfo.DisableMetadata ? 4 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](5, !ctx.contentType.EditInfo.DisableEdit && ctx.enablePermissions ? 5 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](6, ctx.contentType.EditInfo.DisableEdit || !ctx.enablePermissions ? 6 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", menu_r6);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__.MatBadge, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuTrigger],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 93955:
/*!**********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/data/data-fields/data-fields.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataFieldsComponent: () => (/* binding */ DataFieldsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);








class DataFieldsComponent {
  agInit(params) {
    this.params = params;
    this.contentType = params.data;
    this.value = params.value;
    this.tooltip = !this.contentType.EditInfo.ReadOnly ? 'Edit fields' : `${this.contentType.EditInfo.ReadOnlyMessage ? `${this.contentType.EditInfo.ReadOnlyMessage}\n\n` : ''}This ContentType shares the definition of #${this.contentType.SharedDefId} so you can't edit it here. Read 2sxc.org/help?tag=shared-types`;
    this.icon = !this.contentType.EditInfo.ReadOnly ? 'dns' : 'share';
  }
  refresh(params) {
    return true;
  }
  editFields() {
    this.params.onEditFields(this.contentType);
  }
  static #_ = this.ɵfac = function DataFieldsComponent_Factory(t) {
    return new (t || DataFieldsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DataFieldsComponent,
    selectors: [["app-data-fields"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 4,
    consts: [[1, "actions-component"], ["matRipple", "", 1, "eav-grid-action-button", "highlight", 3, "click", "tippy"], ["matBadgePosition", "below after", "matBadgeColor", "accent", "matBadgeSize", "small", "aria-hidden", "false", 3, "matBadge", "matBadgeHidden"]],
    template: function DataFieldsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataFieldsComponent_Template_div_click_1_listener() {
          return ctx.editFields();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tippy", ctx.tooltip);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matBadge", ctx.value)("matBadgeHidden", !ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.icon, " ");
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__.MatBadge, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 82251:
/*!********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/data/data-items/data-items.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataItemsComponent: () => (/* binding */ DataItemsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);






class DataItemsComponent {
  agInit(params) {
    this.params = params;
    this.contentType = params.data;
    this.value = params.value;
  }
  refresh(params) {
    return true;
  }
  showItems() {
    this.params.onShowItems(this.contentType);
  }
  addItem() {
    this.params.onAddItem(this.contentType);
  }
  static #_ = this.ɵfac = function DataItemsComponent_Factory(t) {
    return new (t || DataItemsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DataItemsComponent,
    selectors: [["app-data-items"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 3,
    consts: [[1, "actions-component"], ["matRipple", "", 1, "eav-grid-action-button", "highlight", 3, "click", "tippy"], [1, "text-icon"], ["matRipple", "", "tippy", "Add item", 1, "eav-grid-action-button", "highlight", 3, "click"]],
    template: function DataItemsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataItemsComponent_Template_div_click_1_listener() {
          return ctx.showItems();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataItemsComponent_Template_div_click_4_listener() {
          return ctx.addItem();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("tippy", "", ctx.value, " items");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.value);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
    styles: [".text-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  font-size: 12px;\n  line-height: 22px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  border: 1px solid rgba(29, 39, 61, 0.44);\n  border-radius: 12px;\n  box-sizing: border-box;\n  background-color: #002753;\n  color: white;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.text-icon[_ngcontent-%COMP%] {\n  min-width: 24px;\n  width: initial;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9kYXRhL2RhdGEtaXRlbXMvZGF0YS1pdGVtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtaWNvbiB7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjksIDM5LCA2MSwgMC40NCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI3NTM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4udGV4dC1pY29uIHtcclxuICBtaW4td2lkdGg6IDI0cHg7XHJcbiAgd2lkdGg6IGluaXRpYWw7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9756:
/*!***************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/data/data.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataComponent: () => (/* binding */ DataComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 95429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var _content_export_services_content_export_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../content-export/services/content-export.service */ 56360);
/* harmony import */ var _dev_rest_go_to_dev_rest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dev-rest/go-to-dev-rest */ 10261);
/* harmony import */ var _edit_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../edit/shared/store/ngrx-data */ 27521);
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../metadata */ 65217);
/* harmony import */ var _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../permissions/go-to-permissions */ 72437);
/* harmony import */ var _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/base-with-child-dialog.component */ 61735);
/* harmony import */ var _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/id-field/id-field.component */ 36378);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/constants/dropdown-insert-value.constant */ 5858);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/helpers/file-to-base64.helper */ 70693);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _services_content_types_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/content-types.service */ 17693);
/* harmony import */ var _data_actions_data_actions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data-actions/data-actions.component */ 23513);
/* harmony import */ var _data_fields_data_fields_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data-fields/data-fields.component */ 93955);
/* harmony import */ var _data_items_data_items_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./data-items/data-items.component */ 82251);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services */ 75445);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/directives/drag-and-drop.directive */ 34575);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../core */ 34447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);












































function DataComponent_Conditional_0_For_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scopeOption_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", scopeOption_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", "Scope: " + scopeOption_r3.label, " ");
  }
}
function DataComponent_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DataComponent_Conditional_0_Conditional_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.createGhost());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "share");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Ghost");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function DataComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 0)(1, "ag-grid-angular", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("filesDropped", function DataComponent_Conditional_0_Template_ag_grid_angular_filesDropped_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.filesDropped($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "mat-dialog-actions", 2)(3, "div", 3)(4, "mat-form-field", 4)(5, "mat-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function DataComponent_Conditional_0_Template_mat_select_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.changeScope($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrepeaterCreate"](6, DataComponent_Conditional_0_For_7_Template, 2, 2, "mat-option", 6, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9, "Scope: Other...");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DataComponent_Conditional_0_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.importType());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](12, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14, "Content Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](15, DataComponent_Conditional_0_Conditional_15_Template, 5, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DataComponent_Conditional_0_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.editContentType(null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](18, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const vm_r5 = ctx;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("rowData", vm_r5.contentTypes)("gridOptions", ctx_r1.gridOptions)("allowedFileTypes", "xml,json");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModel", vm_r5.scope);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrepeater"](vm_r5.scopeOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", ctx_r1.dropdownInsertValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](15, vm_r5.debugEnabled ? 15 : -1);
  }
}
class DataComponent extends _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_5__.BaseWithChildDialogComponent {
  constructor(router, route, globalConfigService, snackBar, dialogConfigSvc) {
    super(router, route);
    this.router = router;
    this.route = route;
    this.globalConfigService = globalConfigService;
    this.snackBar = snackBar;
    this.dialogConfigSvc = dialogConfigSvc;
    this.contentTypesService = (0,_core__WEBPACK_IMPORTED_MODULE_20__.transient)(_services_content_types_service__WEBPACK_IMPORTED_MODULE_12__.ContentTypesService);
    this.contentExportService = (0,_core__WEBPACK_IMPORTED_MODULE_20__.transient)(_content_export_services_content_export_service__WEBPACK_IMPORTED_MODULE_0__.ContentExportService);
    this.contentTypes$ = new rxjs__WEBPACK_IMPORTED_MODULE_22__.BehaviorSubject(undefined);
    this.scope$ = new rxjs__WEBPACK_IMPORTED_MODULE_22__.BehaviorSubject(undefined);
    /** Possible scopes - the ones from the backend + manually entered scopes by the current user */
    this.scopeOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_22__.BehaviorSubject([]);
    this.gridOptions = this.buildGridOptions();
    this.dropdownInsertValue = _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_8__.dropdownInsertValue;
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.combineLatest)([this.contentTypes$, this.scope$, this.scopeOptions$, this.globalConfigService.getDebugEnabled$()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_24__.map)(([contentTypes, scope, scopeOptions, debugEnabled]) => ({
      contentTypes,
      scope,
      scopeOptions,
      debugEnabled
    })));
  }
  ngOnInit() {
    this.fetchScopes();
    this.refreshScopeOnRouteChange();
    this.subscriptions.add(this.childDialogClosed$().subscribe(() => {
      this.fetchContentTypes();
    }));
    this.dialogConfigSvc.getCurrent$().subscribe(data => {
      this.enablePermissions = data.Context.Enable.AppPermissions;
    });
  }
  ngOnDestroy() {
    this.contentTypes$.complete();
    this.scope$.complete();
    this.scopeOptions$.complete();
    super.ngOnDestroy();
  }
  filesDropped(files) {
    const importFile = files[0];
    const ext = importFile.name.substring(importFile.name.lastIndexOf('.') + 1).toLocaleLowerCase();
    switch (ext) {
      case 'xml':
        (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.from)((0,_shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_10__.toString)(files[0])).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_26__.take)(1)).subscribe(fileString => {
          const contentTypeName = fileString.split('<Entity Type="')[1]?.split('"')[0];
          const contentType = this.contentTypes$.value.find(ct => ct.Name === contentTypeName);
          if (contentType == null) {
            const message = `Cannot find Content Type named '${contentTypeName}'. Please open Content Type Import dialog manually.`;
            this.snackBar.open(message, null, {
              duration: 5000
            });
            return;
          }
          this.openDataImport(contentType, files);
        });
        break;
      case 'json':
        this.importType(files);
        break;
    }
  }
  importType(files) {
    const dialogData = {
      files
    };
    this.router.navigate(['import'], {
      relativeTo: this.route.parent.firstChild,
      state: dialogData
    });
  }
  showContentItems(contentType) {
    this.router.navigate([`items/${contentType.StaticName}`], {
      relativeTo: this.route.parent.firstChild
    });
  }
  editContentType(contentType) {
    if (!contentType) {
      this.router.navigate(['add'], {
        relativeTo: this.route.parent.firstChild
      });
    } else {
      if (contentType.EditInfo.ReadOnly) {
        return;
      }
      this.router.navigate([`${contentType.StaticName}/edit`], {
        relativeTo: this.route.parent.firstChild
      });
    }
  }
  fetchContentTypes() {
    this.contentTypesService.retrieveContentTypes(this.scope$.value).subscribe(contentTypes => {
      for (const contentType of contentTypes) {
        contentType._compareLabel = contentType.Label.replace(/\p{Emoji}/gu, 'ž');
      }
      this.contentTypes$.next(contentTypes);
      if (this.scope$.value !== _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_9__.eavConstants.scopes.default.value) {
        const message = 'Warning! You are in a special scope. Changing things here could easily break functionality';
        this.snackBar.open(message, null, {
          duration: 2000
        });
      }
    });
  }
  fetchScopes() {
    this.contentTypesService.getScopesV2().subscribe(scopeList => {
      // Merge the new scopes with the existing ones - in case there were manual scopes added
      // If old scope list had a manual scope which the server didn't send, re-add it here
      const manual = this.scopeOptions$.value.filter(sOld => scopeList.find(sNew => sNew.name === sOld.name) == null);
      // Add a nice label to each scope containing count-information of types
      const withNiceLabel = scopeList.map(s => {
        let countInfo = !s.typesInherited ? `${s.typesTotal} types` // only not-inherited
        : s.typesInherited == s.typesTotal ? s.typesInherited + ' sys types' // only inherited
        : `${s.typesTotal} types / ${s.typesInherited} system`;
        return {
          ...s,
          label: s.name + ` - ${countInfo}`
        };
      });
      this.scopeOptions$.next([...withNiceLabel, ...manual]);
    });
  }
  createGhost() {
    const sourceName = window.prompt('To create a ghost content-type enter source static name / id - this is a very advanced operation - read more about it on 2sxc.org/help?tag=ghost');
    if (!sourceName) {
      return;
    }
    this.snackBar.open('Saving...');
    this.contentTypesService.createGhost(sourceName).subscribe(res => {
      this.snackBar.open('Saved', null, {
        duration: 2000
      });
      this.fetchContentTypes();
    });
  }
  changeScope(newScope) {
    console.log("trigger");
    if (newScope === _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_8__.dropdownInsertValue) {
      newScope = prompt('This is an advanced feature to show content-types of another scope. Don\'t use this if you don\'t know what you\'re doing, as content-types of other scopes are usually hidden for a good reason.') || _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_9__.eavConstants.scopes.default.value;
    }
    this.router.navigate(['..', newScope], {
      relativeTo: this.route
    });
  }
  enablePermissionsGetter() {
    return this.enablePermissions;
  }
  addItem(contentType) {
    const form = {
      items: [{
        ContentTypeName: contentType.StaticName
      }]
    };
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_11__.convertFormToUrl)(form);
    this.router.navigate([`edit/${formUrl}`], {
      relativeTo: this.route.parent.firstChild
    });
  }
  editFields(contentType) {
    this.router.navigate([`fields/${contentType.StaticName}`], {
      relativeTo: this.route.parent.firstChild
    });
  }
  createOrEditMetadata(contentType) {
    const form = {
      items: [!contentType.Properties ? {
        ContentTypeName: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_9__.eavConstants.contentTypes.contentType,
        For: {
          Target: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_9__.eavConstants.metadata.contentType.target,
          TargetType: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_9__.eavConstants.metadata.contentType.targetType,
          String: contentType.StaticName
        },
        Prefill: {
          Label: contentType.Name,
          Description: contentType.Description
        }
      } : {
        EntityId: contentType.Properties.Id
      }]
    };
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_11__.convertFormToUrl)(form);
    this.router.navigate([`edit/${formUrl}`], {
      relativeTo: this.route.parent.firstChild
    });
  }
  openMetadata(contentType) {
    const url = _metadata__WEBPACK_IMPORTED_MODULE_3__.GoToMetadata.getUrlContentType(contentType.StaticName, `Metadata for Content Type: ${contentType.Name} (${contentType.Id})`);
    this.router.navigate([url], {
      relativeTo: this.route.parent.firstChild
    });
  }
  openRestApi(contentType) {
    this.router.navigate([_dev_rest_go_to_dev_rest__WEBPACK_IMPORTED_MODULE_1__.GoToDevRest.getUrlData(contentType)], {
      relativeTo: this.route.parent.firstChild
    });
  }
  exportType(contentType) {
    this.contentExportService.exportJson(contentType.StaticName);
  }
  openDataExport(contentType) {
    this.router.navigate([`export/${contentType.StaticName}`], {
      relativeTo: this.route.parent.firstChild
    });
  }
  openDataImport(contentType, files) {
    const contentImportData = {
      files
    };
    this.router.navigate([`${contentType.StaticName}/import`], {
      relativeTo: this.route.parent.firstChild,
      state: contentImportData
    });
  }
  openPermissions(contentType) {
    this.router.navigate([_permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_4__.GoToPermissions.getUrlContentType(contentType.StaticName)], {
      relativeTo: this.route.parent.firstChild
    });
  }
  deleteContentType(contentType) {
    if (!confirm(`Are you sure you want to delete '${contentType.Name}' (${contentType.Id})?`)) {
      return;
    }
    this.snackBar.open('Deleting...');
    this.contentTypesService.delete(contentType).subscribe(result => {
      this.snackBar.open('Deleted', null, {
        duration: 2000
      });
      this.fetchContentTypes();
    });
  }
  /**
   * Refreshes the scope when the route changes.
   * ...also adds a scope name if the route scope is not found in the list of possible scopes.
   * This is to allow an admin to enter a custom scope.
   * Note 2024-03-04 2dm - not sure if this auto-add feature is still needed though...
   */
  refreshScopeOnRouteChange() {
    this.subscriptions.add(this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_27__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_28__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.map)(() => this.route.snapshot.paramMap.get('scope')), (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.startWith)(this.route.snapshot.paramMap.get('scope')), (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.filter)(scope => !!scope), (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.distinctUntilChanged)()).subscribe(scope => {
      this.scope$.next(scope);
      // If we can't find the scope in the list of options, add it as it was entered manually
      if (!this.scopeOptions$.value.map(option => option.name).includes(scope)) {
        const newScopeOption = {
          name: scope,
          label: scope,
          typesTotal: 0,
          typesInherited: 0,
          typesOfApp: 0
        };
        this.scopeOptions$.next([...this.scopeOptions$.value, newScopeOption]);
      }
      this.fetchContentTypes();
    }));
  }
  buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_7__.defaultGridOptions,
      columnDefs: [{
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_18__.ColumnDefinitions.Id,
        cellRenderer: _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_6__.IdFieldComponent,
        cellRendererParams: (() => {
          const params = {
            tooltipGetter: contentType => `ID: ${contentType.Id}\nGUID: ${contentType.StaticName}`
          };
          return params;
        })()
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_18__.ColumnDefinitions.TextWideType,
        headerName: 'ContentType',
        field: 'Label',
        sort: 'asc',
        onCellClicked: params => {
          const contentType = params.data;
          this.showContentItems(contentType);
        },
        comparator: (valueA, valueB, nodeA, nodeB, isInverted) => {
          const contentTypeA = nodeA.data;
          const contentTypeB = nodeB.data;
          return contentTypeA._compareLabel.localeCompare(contentTypeB._compareLabel);
        }
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_18__.ColumnDefinitions.Items,
        field: 'Items',
        cellRenderer: _data_items_data_items_component__WEBPACK_IMPORTED_MODULE_15__.DataItemsComponent,
        cellRendererParams: (() => {
          const params = {
            onShowItems: contentType => this.showContentItems(contentType),
            onAddItem: contentType => this.addItem(contentType)
          };
          return params;
        })()
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_18__.ColumnDefinitions.Fields,
        field: 'Fields',
        cellRenderer: _data_fields_data_fields_component__WEBPACK_IMPORTED_MODULE_14__.DataFieldsComponent,
        cellRendererParams: (() => {
          const params = {
            onEditFields: contentType => this.editFields(contentType)
          };
          return params;
        })()
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_18__.ColumnDefinitions.TextWideMin100,
        field: 'Name',
        cellClass: params => {
          const contentType = params.data;
          return `${contentType.EditInfo.DisableEdit ? 'no-outline' : 'primary-action highlight'}`.split(' ');
        },
        valueGetter: params => {
          const contentType = params.data;
          return contentType.Name;
        },
        onCellClicked: params => {
          const contentType = params.data;
          this.editContentType(contentType);
        }
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_18__.ColumnDefinitions.TextWideFlex3,
        field: 'Description',
        valueGetter: params => {
          const contentType = params.data;
          return contentType.Properties?.Description;
        }
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_18__.ColumnDefinitions.ActionsPinnedRight4,
        cellRenderer: _data_actions_data_actions_component__WEBPACK_IMPORTED_MODULE_13__.DataActionsComponent,
        cellRendererParams: (() => {
          const params = {
            enablePermissionsGetter: () => this.enablePermissionsGetter(),
            do: (verb, contentType) => {
              switch (verb) {
                case 'createUpdateMetaData':
                  this.createOrEditMetadata(contentType);
                  break;
                case 'openPermissions':
                  this.openPermissions(contentType);
                  break;
                case 'editContentType':
                  this.editContentType(contentType);
                  break;
                case 'openMetadata':
                  this.openMetadata(contentType);
                  break;
                case 'openRestApi':
                  this.openRestApi(contentType);
                  break;
                case 'typeExport':
                  this.exportType(contentType);
                  break;
                case 'dataExport':
                  this.openDataExport(contentType);
                  break;
                case 'dataImport':
                  this.openDataImport(contentType);
                  break;
                case 'deleteContentType':
                  this.deleteContentType(contentType);
                  break;
              }
            }
          };
          return params;
        })()
      }]
    };
    return gridOptions;
  }
  static #_ = this.ɵfac = function DataComponent_Factory(t) {
    return new (t || DataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_28__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_28__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_edit_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_2__.GlobalConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_16__.AppDialogConfigService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({
    type: DataComponent,
    selectors: [["app-data"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 3,
    consts: [[1, "grid-wrapper", "mat-tab-grid-wrapper"], ["appDragAndDrop", "", 1, "ag-theme-material", 3, "filesDropped", "rowData", "gridOptions", "allowedFileTypes"], [1, "eav-dialog-actions"], [1, "eav-dialog-actions-div"], ["color", "accent", 1, "eav-mat-form-field", "eav-scope-dropdown"], ["name", "Scope", 3, "ngModelChange", "ngModel"], [3, "value"], ["mat-button", "", "tippy", "Import content type", 1, "eav-button__with-icon", 3, "click"], [1, "eav-icon"], ["mat-button", "", "color", "accent", "tippy", "Create a ghost content type", 1, "eav-button__with-icon"], ["mat-fab", "", "mat-elevation-z24", "", "tippy", "Create a new content type", 1, "grid-fab", 3, "click"], ["mat-button", "", "color", "accent", "tippy", "Create a ghost content type", 1, "eav-button__with-icon", 3, "click"]],
    template: function DataComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, DataComponent_Conditional_0_Template, 19, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "router-outlet");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__.MatDialogActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_34__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_34__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_35__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_36__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_36__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_36__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_35__.MatOptionModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_37__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_37__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_37__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_38__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_38__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_28__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_39__.AsyncPipe, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_17__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_40__.AgGridAngular, _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_19__.DragAndDropDirective],
    styles: [".eav-scope-dropdown[_ngcontent-%COMP%] {\n  margin-top: -14px;\n  width: 350px;\n}\n\n.eav-dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.eav-dialog-actions[_ngcontent-%COMP%]   .eav-dialog-actions-div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.eav-dialog-actions[_ngcontent-%COMP%]   .eav-button__with-icon[_ngcontent-%COMP%]   .eav-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  height: 24px;\n  width: 24px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9kYXRhL2RhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7QUFDSjtBQUlNO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRlIiLCJzb3VyY2VzQ29udGVudCI6WyIuZWF2LXNjb3BlLWRyb3Bkb3duIHtcclxuICBtYXJnaW4tdG9wOiAtMTRweDtcclxuICB3aWR0aDogMzUwcHg7XHJcbn1cclxuXHJcbi5lYXYtZGlhbG9nLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAuZWF2LWRpYWxvZy1hY3Rpb25zLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgLmVhdi1idXR0b24ge1xyXG4gICAgJl9fd2l0aC1pY29uIHtcclxuICAgICAgLmVhdi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_data_data_component_ts.js.map