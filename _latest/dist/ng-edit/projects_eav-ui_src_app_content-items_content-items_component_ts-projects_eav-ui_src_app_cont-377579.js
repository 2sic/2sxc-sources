"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_content-items_content-items_component_ts-projects_eav-ui_src_app_cont-377579"],{

/***/ 10510:
/*!********************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-items/content-items-actions/content-items-actions.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentItemsActionsComponent: () => (/* binding */ ContentItemsActionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);







function ContentItemsActionsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentItemsActionsComponent_ng_template_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.do("delete"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.item._EditInfo.DisableDelete);
  }
}
class ContentItemsActionsComponent {
  agInit(params) {
    this.params = params;
    this.item = params.data;
  }
  refresh(params) {
    return true;
  }
  do(verb) {
    this.params.do(verb, this.item);
  }
  static #_ = this.ɵfac = function ContentItemsActionsComponent_Factory(t) {
    return new (t || ContentItemsActionsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContentItemsActionsComponent,
    selectors: [["app-content-items-actions"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 13,
    vars: 1,
    consts: [["menu", "matMenu"], [1, "actions-component"], ["matRipple", "", "tippy", "Copy", 1, "eav-grid-action-button", "highlight", 3, "click"], ["matRipple", "", "tippy", "Export", 1, "eav-grid-action-button", "highlight", 3, "click"], ["matRipple", "", "tippy", "More", 1, "eav-grid-action-button", "highlight", 3, "matMenuTriggerFor"], [1, "grid-more-menu"], ["matMenuContent", ""], ["mat-menu-item", "", 3, "click", "disabled"]],
    template: function ContentItemsActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentItemsActionsComponent_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.do("clone"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "file_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentItemsActionsComponent_Template_div_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.do("export"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "cloud_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "more_horiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-menu", 5, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ContentItemsActionsComponent_ng_template_12_Template, 5, 1, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const menu_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", menu_r4);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuTrigger],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 49820:
/*!******************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-items/content-items-entity/content-items-entity.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentItemsEntityComponent: () => (/* binding */ ContentItemsEntityComponent)
/* harmony export */ });
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


function ContentItemsEntityComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.entities);
  }
}
class ContentItemsEntityComponent {
  agInit(params) {
    if (!Array.isArray(params.value)) {
      return;
    }
    this.encodedValue = this.htmlEncode(params.value.join(', '));
    if (params.colDef.allowMultiValue) {
      this.entities = params.value.length;
    }
  }
  refresh(params) {
    return true;
  }
  // htmlencode strings (source: https://stackoverflow.com/a/7124052)
  htmlEncode(text) {
    return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  static #_ = this.ɵfac = function ContentItemsEntityComponent_Factory(t) {
    return new (t || ContentItemsEntityComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ContentItemsEntityComponent,
    selectors: [["app-content-items-entity"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 3,
    consts: [[3, "tippy"], [1, "more-entities"]],
    template: function ContentItemsEntityComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContentItemsEntityComponent_Conditional_1_Template, 2, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tippy", ctx.encodedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, ctx.entities ? 1 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.encodedValue, "\n");
      }
    },
    dependencies: [_shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
    styles: [".more-entities[_ngcontent-%COMP%] {\n  padding: 0px 8px;\n  border-radius: 10px;\n  border: 1px solid rgba(29, 39, 61, 0.44);\n  -webkit-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NvbnRlbnQtaXRlbXMvY29udGVudC1pdGVtcy1lbnRpdHkvY29udGVudC1pdGVtcy1lbnRpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubW9yZS1lbnRpdGllcyB7XHJcbiAgcGFkZGluZzogMHB4IDhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjksIDM5LCA2MSwgMC40NCk7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 98826:
/*!******************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-items/content-items-status/content-items-status.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentItemsStatusComponent: () => (/* binding */ ContentItemsStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);









const _c0 = a0 => ({
  "hide-until-row-hover": a0
});
function ContentItemsStatusComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentItemsStatusComponent_Conditional_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.openMetadata());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, !ctx_r1.metadataCount && !ctx_r1.value.metadata))("tippy", ctx_r1.metadataTooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matBadge", ctx_r1.metadataCount)("matBadgeHidden", !ctx_r1.metadataCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.value.metadata ? "loyalty" : "local_offer", " ");
  }
}
function ContentItemsStatusComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matBadge", ctx_r1.metadataCount)("matBadgeHidden", !ctx_r1.metadataCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.value.metadata ? "loyalty" : "local_offer", " ");
  }
}
class ContentItemsStatusComponent {
  agInit(params) {
    this.value = params.value;
    this.params = params;
    this.item = params.data;
    this.disableMetadata = this.item._EditInfo.DisableMetadata;
    this.metadataCount = this.item.Metadata?.length ?? 0;
    const mdf = this.item.For;
    this.metadataTooltip = mdf ? 'This item is metadata for:' + `\nTarget: ${mdf.Target}` + `\nTargetType: ${mdf.TargetType}` + (mdf.KeyNumber ? `\nNumber: ${mdf.KeyNumber}` : '') + (mdf.KeyString ? `\nString: ${mdf.KeyString}` : '') + (mdf.KeyGuid ? `\nGuid: ${mdf.KeyGuid}` : '') + (mdf.Title ? `\nTitle: ${mdf.Title}` : '') : 'This item is not metadata.';
    this.metadataTooltip += `\n\nThis item has ${this.metadataCount > 0 ? this.metadataCount : 'no'} other metadata ${this.metadataCount === 1 ? 'item' : 'items'} attached to it.`;
  }
  refresh(params) {
    return true;
  }
  openMetadata() {
    this.params.onOpenMetadata(this.item);
  }
  static #_ = this.ɵfac = function ContentItemsStatusComponent_Factory(t) {
    return new (t || ContentItemsStatusComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ContentItemsStatusComponent,
    selectors: [["app-content-items-status"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 4,
    consts: [[1, "actions-component"], [1, "eav-grid-action-button", "icon", 3, "tippy"], ["matRipple", "", 1, "eav-grid-action-button", "highlight", 3, "ngClass", "tippy"], [1, "eav-grid-action-button", "disabled"], ["matRipple", "", 1, "eav-grid-action-button", "highlight", 3, "click", "ngClass", "tippy"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgePosition", "below after", "aria-hidden", "false", 3, "matBadge", "matBadgeHidden"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgeDisabled", "true", "matBadgePosition", "below after", "aria-hidden", "false", 3, "matBadge", "matBadgeHidden"]],
    template: function ContentItemsStatusComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ContentItemsStatusComponent_Conditional_4_Template, 3, 7, "div", 2)(5, ContentItemsStatusComponent_Conditional_5_Template, 3, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tippy", ctx.value.published ? "Published" : "Not published");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.value.published ? "visibility" : "visibility_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](4, !ctx.disableMetadata ? 4 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](5, ctx.disableMetadata && !(!ctx.metadataCount && !ctx.value.metadata) ? 5 : -1);
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadge, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
    styles: [".hide-until-row-hover[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n  .ag-row-hover .hide-until-row-hover {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NvbnRlbnQtaXRlbXMvY29udGVudC1pdGVtcy1zdGF0dXMvY29udGVudC1pdGVtcy1zdGF0dXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRlLXVudGlsLXJvdy1ob3ZlciB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLXJvdy1ob3ZlciAuaGlkZS11bnRpbC1yb3ctaG92ZXIge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 89:
/*!**************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-items/content-items.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentItemsComponent: () => (/* binding */ ContentItemsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ 17693);
/* harmony import */ var _content_export_services_content_export_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content-export/services/content-export.service */ 56360);
/* harmony import */ var _content_type_fields_constants_data_type_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content-type-fields/constants/data-type.constants */ 42220);
/* harmony import */ var _edit_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit/shared/store/ngrx-data */ 27521);
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../metadata */ 65217);
/* harmony import */ var _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/base-with-child-dialog.component */ 61735);
/* harmony import */ var _shared_components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/boolean-filter/boolean-filter.component */ 91960);
/* harmony import */ var _shared_components_entity_filter_entity_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/entity-filter/entity-filter.component */ 83060);
/* harmony import */ var _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/components/id-field/id-field.component */ 36378);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/constants/session.constants */ 38172);
/* harmony import */ var _shared_helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/helpers/console-log-angular.helper */ 74230);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _content_items_actions_content_items_actions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./content-items-actions/content-items-actions.component */ 10510);
/* harmony import */ var _content_items_entity_content_items_entity_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./content-items-entity/content-items-entity.component */ 49820);
/* harmony import */ var _content_items_status_content_items_status_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./content-items-status/content-items-status.component */ 98826);
/* harmony import */ var _content_items_helpers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./content-items.helpers */ 3099);
/* harmony import */ var _create_metadata_dialog_create_metadata_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./create-metadata-dialog/create-metadata-dialog.component */ 28690);
/* harmony import */ var _pub_meta_filter_pub_meta_filter_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pub-meta-filter/pub-meta-filter.component */ 73138);
/* harmony import */ var _services_content_items_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/content-items.service */ 336);
/* harmony import */ var _services_entities_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/entities.service */ 57319);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../shared/pipes/safe-html.pipe */ 69914);
/* harmony import */ var _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../shared/directives/drag-and-drop.directive */ 34575);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _shared_directives_toggle_debug_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../shared/directives/toggle-debug.directive */ 95699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);















































function ContentItemsComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](1, "safeHtml");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](1, 1, ctx), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsanitizeHtml"]);
  }
}
function ContentItemsComponent_Conditional_0_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function ContentItemsComponent_Conditional_0_Conditional_34_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r1.debugFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](2, "filter_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](4, "Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }
}
function ContentItemsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function ContentItemsComponent_Conditional_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r1.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](8, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](9, ContentItemsComponent_Conditional_0_Conditional_9_Template, 2, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](10, "div", 6)(11, "ag-grid-angular", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("gridReady", function ContentItemsComponent_Conditional_0_Template_ag_grid_angular_gridReady_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r1.onGridReady($event));
    })("filesDropped", function ContentItemsComponent_Conditional_0_Template_ag_grid_angular_filesDropped_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r1.filesDropped($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](12, "mat-dialog-actions", 8)(13, "div", 9)(14, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function ContentItemsComponent_Conditional_0_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r1.exportContent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](15, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](16, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](18, "Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](19, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function ContentItemsComponent_Conditional_0_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r1.importContent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](20, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](21, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](23, "Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](24, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function ContentItemsComponent_Conditional_0_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r1.importItem());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](25, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](26, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](28, "Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](29, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function ContentItemsComponent_Conditional_0_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r1.createMetadata());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](30, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](31, "local_offer");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](33, "Create Metadata");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](34, ContentItemsComponent_Conditional_0_Conditional_34_Template, 5, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](35, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function ContentItemsComponent_Conditional_0_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r1.editItem(null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](36, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](37, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const vm_r4 = ctx;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", vm_r4.contentType.Label || vm_r4.contentType.Name, " Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵconditional"](9, (tmp_3_0 = vm_r4.contentType == null ? null : vm_r4.contentType.Properties == null ? null : vm_r4.contentType.Properties.ListInstructions) ? 9 : -1, tmp_3_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("rowData", vm_r4.items)("gridOptions", ctx_r1.gridOptions)("allowedFileTypes", "xml,json");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵconditional"](34, vm_r4.debugEnabled ? 34 : -1);
  }
}
class ContentItemsComponent extends _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_5__.BaseWithChildDialogComponent {
  constructor(router, route, dialogRef, contentTypesService, contentItemsService, entitiesService, contentExportService, snackBar, globalConfigService, dialog, viewContainerRef, changeDetectorRef) {
    super(router, route);
    this.router = router;
    this.route = route;
    this.dialogRef = dialogRef;
    this.contentTypesService = contentTypesService;
    this.contentItemsService = contentItemsService;
    this.entitiesService = entitiesService;
    this.contentExportService = contentExportService;
    this.snackBar = snackBar;
    this.globalConfigService = globalConfigService;
    this.dialog = dialog;
    this.viewContainerRef = viewContainerRef;
    this.changeDetectorRef = changeDetectorRef;
    this.contentType$ = new rxjs__WEBPACK_IMPORTED_MODULE_28__.Subject();
    this.items$ = new rxjs__WEBPACK_IMPORTED_MODULE_29__.BehaviorSubject(undefined);
    this.gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_9__.defaultGridOptions
    };
    this.gridApi$ = new rxjs__WEBPACK_IMPORTED_MODULE_29__.BehaviorSubject(null);
    this.contentTypeStaticName = this.route.snapshot.paramMap.get('contentTypeStaticName');
  }
  ngOnInit() {
    this.fetchContentType();
    this.fetchItems();
    this.fetchColumns();
    this.subscriptions.add(this.childDialogClosed$().subscribe(() => {
      this.fetchItems();
    }));
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.combineLatest)([this.contentType$, this.items$, this.globalConfigService.getDebugEnabled$()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_31__.map)(([contentType, items, debugEnabled]) => ({
      contentType,
      items,
      debugEnabled
    })));
  }
  ngOnDestroy() {
    this.contentType$.complete();
    this.items$.complete();
    this.gridApi$.complete();
    super.ngOnDestroy();
  }
  closeDialog() {
    this.dialogRef.close();
  }
  onGridReady(params) {
    this.gridApi$.next(params.api);
  }
  fetchContentType() {
    this.contentTypesService.retrieveContentType(this.contentTypeStaticName).subscribe(contentType => {
      this.contentType$.next(contentType);
    });
  }
  fetchItems() {
    this.contentItemsService.getAll(this.contentTypeStaticName).subscribe(items => {
      this.items$.next(items);
    });
  }
  fetchColumns() {
    this.contentItemsService.getColumns(this.contentTypeStaticName).subscribe(columns => {
      // filter out ephemeral columns as they don't have data to show
      const columnsWithoutEphemeral = columns.filter(column => !column.IsEphemeral);
      const columnDefs = this.buildColumnDefs(columnsWithoutEphemeral);
      const filterModel = (0,_content_items_helpers__WEBPACK_IMPORTED_MODULE_17__.buildFilterModel)(sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_11__.keyFilters), columnDefs);
      if (this.gridApi$.value) {
        this.setColumnDefs(columnDefs, filterModel);
      } else {
        this.gridApi$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_32__.filter)(gridApi => gridApi != null),
        // firefox does web requests faster than drawing grid and getting gridApi
        (0,rxjs__WEBPACK_IMPORTED_MODULE_33__.take)(1)).subscribe(gridApi => {
          this.setColumnDefs(columnDefs, filterModel);
        });
      }
    });
  }
  setColumnDefs(columnDefs, filterModel) {
    this.gridApi$.value.setColumnDefs(columnDefs);
    if (filterModel) {
      (0,_shared_helpers_console_log_angular_helper__WEBPACK_IMPORTED_MODULE_12__.consoleLogDev)('Will try to apply filter:', filterModel);
      this.gridApi$.value.setFilterModel(filterModel);
    }
  }
  openMetadata(item) {
    const url = _metadata__WEBPACK_IMPORTED_MODULE_4__.GoToMetadata.getUrlEntity(item.Guid, `Metadata for Entity: ${item._Title} (${item.Id})`, this.contentTypeStaticName);
    this.router.navigate([url], {
      relativeTo: this.route
    });
  }
  editItem(item) {
    const form = {
      items: [item == null ? {
        ContentTypeName: this.contentTypeStaticName
      } : {
        EntityId: item.Id
      }]
    };
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_13__.convertFormToUrl)(form);
    this.router.navigate([`edit/${formUrl}`], {
      relativeTo: this.route
    });
  }
  exportContent() {
    const filterModel = this.gridApi$.value.getFilterModel();
    const hasFilters = Object.keys(filterModel).length > 0;
    const ids = [];
    if (hasFilters) {
      this.gridApi$.value.forEachNodeAfterFilterAndSort(rowNode => {
        const contentItem = rowNode.data;
        ids.push(contentItem.Id);
      });
    }
    this.router.navigate([`export/${this.contentTypeStaticName}${ids.length > 0 ? `/${ids}` : ''}`], {
      relativeTo: this.route
    });
  }
  filesDropped(files) {
    const importFile = files[0];
    const ext = importFile.name.substring(importFile.name.lastIndexOf('.') + 1).toLocaleLowerCase();
    switch (ext) {
      case 'xml':
        this.importContent(files);
        break;
      case 'json':
        this.importItem(files);
        break;
    }
  }
  importContent(files) {
    const dialogData = {
      files
    };
    this.router.navigate([`${this.contentTypeStaticName}/import`], {
      relativeTo: this.route,
      state: dialogData
    });
  }
  importItem(files) {
    const dialogData = {
      files
    };
    this.router.navigate(['import'], {
      relativeTo: this.route,
      state: dialogData
    });
  }
  createMetadata() {
    const metadataDialogRef = this.dialog.open(_create_metadata_dialog_create_metadata_dialog_component__WEBPACK_IMPORTED_MODULE_18__.CreateMetadataDialogComponent, {
      autoFocus: false,
      viewContainerRef: this.viewContainerRef,
      width: '650px'
    });
    metadataDialogRef.afterClosed().subscribe(itemFor => {
      if (itemFor == null) {
        return;
      }
      const form = {
        items: [{
          ContentTypeName: this.contentTypeStaticName,
          For: {
            Target: itemFor.target ?? itemFor.targetType.toString(),
            TargetType: itemFor.targetType,
            ...(itemFor.keyType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_10__.eavConstants.keyTypes.guid && {
              Guid: itemFor.key
            }),
            ...(itemFor.keyType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_10__.eavConstants.keyTypes.number && {
              Number: parseInt(itemFor.key, 10)
            }),
            ...(itemFor.keyType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_10__.eavConstants.keyTypes.string && {
              String: itemFor.key
            })
          }
        }]
      };
      const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_13__.convertFormToUrl)(form);
      this.router.navigate([`edit/${formUrl}`], {
        relativeTo: this.route
      });
      this.changeDetectorRef.markForCheck();
    });
  }
  debugFilter() {
    console.warn('Current filter:', this.gridApi$.value.getFilterModel());
    this.snackBar.open('Check console for filter information', undefined, {
      duration: 3000
    });
  }
  buildColumnDefs(columns) {
    const columnDefs = [{
      ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_22__.ColumnDefinitions.Id,
      cellClass: params => {
        const contentItem = params.data;
        return `id-action no-padding no-outline ${contentItem._EditInfo.ReadOnly ? 'disabled' : ''}`.split(' ');
      },
      cellRenderer: _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_8__.IdFieldComponent,
      cellRendererParams: (() => {
        const params = {
          tooltipGetter: item => `ID: ${item.Id}\nRepoID: ${item._RepositoryId}\nGUID: ${item.Guid}`
        };
        return params;
      })()
    }, {
      field: 'Status',
      width: 82,
      headerClass: 'dense',
      cellClass: 'secondary-action no-padding'.split(' '),
      filter: _pub_meta_filter_pub_meta_filter_component__WEBPACK_IMPORTED_MODULE_19__.PubMetaFilterComponent,
      valueGetter: params => {
        const item = params.data;
        const published = {
          published: item.IsPublished,
          metadata: !!item.For,
          hasMetadata: item.Metadata ? item.Metadata.length > 0 : false
        };
        return published;
      },
      cellRenderer: _content_items_status_content_items_status_component__WEBPACK_IMPORTED_MODULE_16__.ContentItemsStatusComponent,
      cellRendererParams: (() => {
        const params = {
          onOpenMetadata: item => this.openMetadata(item)
        };
        return params;
      })()
    }, {
      headerName: 'Item (Entity)',
      field: '_Title',
      flex: 2,
      minWidth: 250,
      cellClass: 'primary-action highlight'.split(' '),
      sortable: true,
      filter: 'agTextColumnFilter',
      onCellClicked: params => {
        const contentItem = params.data;
        this.editItem(contentItem);
      }
    }, {
      headerName: 'Stats',
      headerTooltip: 'Used by others / uses others',
      field: '_Used',
      width: 70,
      headerClass: 'dense',
      cellClass: 'no-outline',
      sortable: true,
      filter: 'agTextColumnFilter',
      valueGetter: params => {
        const item = params.data;
        return `${item._Used} / ${item._Uses}`;
      }
    }, {
      ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_22__.ColumnDefinitions.ActionsPinnedRight3,
      cellRenderer: _content_items_actions_content_items_actions_component__WEBPACK_IMPORTED_MODULE_14__.ContentItemsActionsComponent,
      cellRendererParams: (() => {
        const params = {
          do: (verb, item) => {
            switch (verb) {
              case 'clone':
                this.clone(item);
                break;
              case 'export':
                this.export(item);
                break;
              case 'delete':
                this.delete(item);
                break;
            }
          }
        };
        return params;
      })()
    }];
    for (const column of columns) {
      const colDef = {
        headerName: column.StaticName,
        field: column.StaticName,
        flex: 2,
        minWidth: 250,
        cellClass: 'no-outline',
        sortable: true
      };
      switch (column.Type) {
        case _content_type_fields_constants_data_type_constants__WEBPACK_IMPORTED_MODULE_2__.DataTypeConstants.Entity:
          colDef.allowMultiValue = column.Metadata?.Entity?.AllowMultiValue ?? true;
          colDef.cellRenderer = _content_items_entity_content_items_entity_component__WEBPACK_IMPORTED_MODULE_15__.ContentItemsEntityComponent;
          colDef.valueGetter = this.valueGetterEntityField;
          colDef.filter = _shared_components_entity_filter_entity_filter_component__WEBPACK_IMPORTED_MODULE_7__.EntityFilterComponent;
          break;
        case _content_type_fields_constants_data_type_constants__WEBPACK_IMPORTED_MODULE_2__.DataTypeConstants.DateTime:
          colDef.useTimePicker = column.Metadata?.DateTime?.UseTimePicker ?? false;
          colDef.valueGetter = this.valueGetterDateTime;
          colDef.filter = 'agTextColumnFilter';
          break;
        case _content_type_fields_constants_data_type_constants__WEBPACK_IMPORTED_MODULE_2__.DataTypeConstants.Boolean:
          colDef.valueGetter = this.valueGetterBoolean;
          colDef.filter = _shared_components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_6__.BooleanFilterComponent;
          break;
        case _content_type_fields_constants_data_type_constants__WEBPACK_IMPORTED_MODULE_2__.DataTypeConstants.Number:
          colDef.filter = 'agNumberColumnFilter';
          break;
        default:
          colDef.filter = 'agTextColumnFilter';
          break;
      }
      columnDefs.push(colDef);
    }
    return columnDefs;
  }
  clone(item) {
    const form = {
      items: [{
        ContentTypeName: this.contentTypeStaticName,
        DuplicateEntity: item.Id
      }]
    };
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_13__.convertFormToUrl)(form);
    this.router.navigate([`edit/${formUrl}`], {
      relativeTo: this.route
    });
  }
  export(item) {
    this.contentExportService.exportEntity(item.Id, this.contentTypeStaticName, true);
  }
  delete(item) {
    if (!confirm(`Delete '${item._Title}' (${item._RepositoryId})?`)) {
      return;
    }
    this.snackBar.open('Deleting...');
    this.entitiesService.delete(this.contentTypeStaticName, item._RepositoryId, false).subscribe({
      next: () => {
        this.snackBar.open('Deleted', null, {
          duration: 2000
        });
        this.fetchItems();
      },
      error: err => {
        this.snackBar.dismiss();
        if (!confirm(`${err.error.ExceptionMessage}\n\nDo you want to force delete '${item._Title}' (${item._RepositoryId})?`)) {
          return;
        }
        this.snackBar.open('Deleting...');
        this.entitiesService.delete(this.contentTypeStaticName, item._RepositoryId, true).subscribe(() => {
          this.snackBar.open('Deleted', null, {
            duration: 2000
          });
          this.fetchItems();
        });
      }
    });
  }
  valueGetterEntityField(params) {
    const rawValue = params.data[params.colDef.field];
    if (rawValue.length === 0) {
      return null;
    }
    return rawValue.map(item => item.Title);
  }
  valueGetterDateTime(params) {
    const rawValue = params.data[params.colDef.field];
    if (!rawValue) {
      return null;
    }
    return params.colDef.useTimePicker ? rawValue.replace('T', ' ').replace('Z', '') : rawValue.split('T')[0];
  }
  valueGetterBoolean(params) {
    const rawValue = params.data[params.colDef.field];
    if (typeof rawValue !== 'boolean') {
      return null;
    }
    return rawValue.toString();
  }
  static #_ = this.ɵfac = function ContentItemsComponent_Factory(t) {
    return new (t || ContentItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_34__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_34__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_0__.ContentTypesService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_services_content_items_service__WEBPACK_IMPORTED_MODULE_20__.ContentItemsService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_services_entities_service__WEBPACK_IMPORTED_MODULE_21__.EntitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_content_export_services_content_export_service__WEBPACK_IMPORTED_MODULE_1__.ContentExportService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_edit_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_3__.GlobalConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_27__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_27__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineComponent"]({
    type: ContentItemsComponent,
    selectors: [["app-content-items"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵProvidersFeature"]([_services_content_items_service__WEBPACK_IMPORTED_MODULE_20__.ContentItemsService, _services_entities_service__WEBPACK_IMPORTED_MODULE_21__.EntitiesService, _content_export_services_content_export_service__WEBPACK_IMPORTED_MODULE_1__.ContentExportService, _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_0__.ContentTypesService]), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [["appToggleDebug", "", 1, "eav-dialog", "nav-component-wrapper"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [1, "eav-dialog-content", "nav-component-wrapper"], [3, "innerHTML"], [1, "grid-wrapper"], ["appDragAndDrop", "", 1, "ag-theme-material", 3, "gridReady", "filesDropped", "rowData", "gridOptions", "allowedFileTypes"], [1, "eav-dialog-actions"], [1, "eav-dialog-actions-div"], ["mat-button", "", "tippy", "Export xml list", 1, "eav-button__with-icon", 3, "click"], [1, "eav-icon"], ["mat-button", "", "tippy", "Import xml list", 1, "eav-button__with-icon", 3, "click"], ["mat-button", "", "tippy", "Import single json item", 1, "eav-button__with-icon", 3, "click"], ["mat-button", "", "tippy", "Create metadata", 1, "eav-button__with-icon", 3, "click"], ["mat-button", "", "color", "accent", "tippy", "Print filter to console", 1, "eav-button__with-icon"], ["mat-fab", "", "mat-elevation-z24", "", "tippy", "Add item", 1, "grid-fab", 3, "click"], ["mat-button", "", "color", "accent", "tippy", "Print filter to console", 1, "eav-button__with-icon", 3, "click"]],
    template: function ContentItemsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](0, ContentItemsComponent_Conditional_0_Template, 38, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_37__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_37__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_37__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_37__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_38__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_38__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_34__.RouterOutlet, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_39__.AsyncPipe, _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_23__.SafeHtmlPipe, _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_24__.DragAndDropDirective, _shared_directives_toggle_debug_directive__WEBPACK_IMPORTED_MODULE_26__.ToggleDebugDirective, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_25__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_40__.AgGridAngular],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3099:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-items/content-items.helpers.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFilterModel: () => (/* binding */ buildFilterModel)
/* harmony export */ });
/* harmony import */ var _shared_components_entity_filter_entity_filter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/entity-filter/entity-filter.component */ 83060);
/* harmony import */ var _shared_helpers_json_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/helpers/json.helpers */ 4038);


function buildFilterModel(urlFilters, columnDefs) {
  if (!urlFilters) {
    return;
  }
  // special decode if parameter was passed as base64 - this is necessary for strings containing the "+" character
  if (urlFilters.charAt(urlFilters.length - 1) === '=') {
    urlFilters = atob(urlFilters);
  }
  let filters;
  try {
    filters = JSON.parse(urlFilters);
  } catch (error) {
    console.error('Can\'t parse JSON with filters from url:', urlFilters);
  }
  if (!filters) {
    return;
  }
  // handle IsPublished and IsMetadata
  const filterModel = {};
  if (filters.IsPublished || filters.IsMetadata) {
    const filter = {
      filterType: 'pub-meta',
      published: filters.IsPublished ?? '',
      metadata: filters.IsMetadata ?? '',
      hasMetadata: ''
    };
    filterModel.Status = filter;
  }
  // handle all other cases
  Object.entries(filters).filter(([key, value]) => key !== 'IsPublished' && key !== 'IsMetadata').forEach(([key, value]) => {
    const columnDef = columnDefs.find(c => c.headerName === key);
    if (columnDef?.filter === _shared_components_entity_filter_entity_filter_component__WEBPACK_IMPORTED_MODULE_0__.EntityFilterComponent) {
      value = _shared_helpers_json_helpers__WEBPACK_IMPORTED_MODULE_1__.JsonHelpers.tryParse(value) ?? value;
      const filter = {
        filterType: 'entity',
        filter: typeof value === 'string' ? value : undefined,
        idFilter: typeof value === 'number' ? [value] : Array.isArray(value) ? value.filter(v => typeof v === 'number') : undefined
      };
      filterModel[key] = filter;
      return;
    }
    if (typeof value === 'string') {
      const filter = {
        filterType: 'text',
        type: 'equals',
        filter: value
      };
      filterModel[key] = filter;
    } else if (typeof value === 'number') {
      const filter = {
        filterType: 'number',
        type: 'equals',
        filter: value,
        filterTo: null
      };
      filterModel[key] = filter;
    } else if (typeof value === 'boolean') {
      const filter = {
        filterType: 'boolean',
        filter: value.toString()
      };
      filterModel[key] = filter;
    }
  });
  return filterModel;
}

/***/ }),

/***/ 28690:
/*!**********************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-items/create-metadata-dialog/create-metadata-dialog.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateMetadataDialogComponent: () => (/* binding */ CreateMetadataDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 63617);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var _app_administration_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-administration/services */ 75445);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/base.component */ 43176);
/* harmony import */ var _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/constants/dropdown-insert-value.constant */ 5858);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _services_content_items_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/content-items.service */ 336);
/* harmony import */ var _metadata_key_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./metadata-key.validator */ 98973);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/field-hint/field-hint.component */ 43758);
/* harmony import */ var _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/directives/click-stop-propagation.directive */ 39333);
/* harmony import */ var _edit_shared_helpers_control_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../edit/shared/helpers/control.helpers */ 12220);
/* harmony import */ var _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/rxJs/rx.helpers */ 93826);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);




































const _c0 = a0 => ({
  "active": a0
});
function CreateMetadataDialogComponent_Conditional_0_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", option_r2.targetType);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", option_r2.label, " ");
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", vm_r3.formValues.targetType);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", vm_r3.formValues.targetType, " ");
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterCreate"](1, CreateMetadataDialogComponent_Conditional_0_Conditional_14_For_2_Template, 2, 2, "mat-option", 12, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, CreateMetadataDialogComponent_Conditional_0_Conditional_14_Conditional_3_Template, 2, 2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeater"](ctx_r3.targetTypeOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](3, vm_r3.unknownTargetType ? 3 : -1);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "input", 9);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-field-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Warning: you entered an unknown target type. This may work or may not. Please be sure you know what you're doing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isError", false);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-field-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isError", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](vm_r3.targetTypeHint);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-field-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isError", true);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-field-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Must be a whole number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isError", true);
  }
}
function CreateMetadataDialogComponent_Conditional_0_For_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", option_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", option_r5, " ");
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-field-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isError", true);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_27_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contentType_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", contentType_r6.StaticName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", contentType_r6.Label, " ");
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-form-field", 7)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Content Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "mat-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterCreate"](4, CreateMetadataDialogComponent_Conditional_0_Conditional_27_For_5_Template, 2, 2, "mat-option", 12, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("placeholder", !vm_r3.contentTypes.length ? "No items found" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeater"](vm_r3.contentTypes);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_28_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scopeOption_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", scopeOption_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", scopeOption_r7.name, " ");
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-form-field", 7)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Scope");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "mat-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterCreate"](4, CreateMetadataDialogComponent_Conditional_0_Conditional_28_For_5_Template, 2, 2, "mat-option", 12, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "Other...");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("placeholder", !vm_r3.scopeOptions.length ? "No items found" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeater"](vm_r3.scopeOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx_r3.dropdownInsertValue);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_0_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", item_r8.Guid);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", item_r8.Title, " (", item_r8.Id, ") ");
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterCreate"](1, CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_0_Conditional_0_For_2_Template, 2, 3, "mat-option", 12, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("placeholder", !vm_r3.contentItems.length ? "No items found" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeater"](vm_r3.contentItems);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "input", 22);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_0_Conditional_0_Template, 3, 1, "mat-select", 21)(1, CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_0_Conditional_1_Template, 1, 0, "input", 22);
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](0, vm_r3.guidedKey ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](1, !vm_r3.guidedKey ? 1 : -1);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_1_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contentType_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", contentType_r9.StaticName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", contentType_r9.Label, " ");
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterCreate"](1, CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_1_Conditional_0_For_2_Template, 2, 2, "mat-option", 12, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("placeholder", !vm_r3.contentTypes.length ? "No items found" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeater"](vm_r3.contentTypes);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "input", 22);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_1_Conditional_0_Template, 3, 1, "mat-select", 21)(1, CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_1_Conditional_1_Template, 1, 0, "input", 22);
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](0, vm_r3.guidedKey ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](1, !vm_r3.guidedKey ? 1 : -1);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainer"](0);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_2_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    const defaultKeyInput_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngTemplateOutlet", defaultKeyInput_r10);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_0_Template, 2, 2)(1, CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_1_Template, 2, 2)(2, CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_2_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_4_0;
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](0, (tmp_4_0 = vm_r3.formValues.targetType) === ctx_r3.eavConstants.metadata.entity.targetType ? 0 : tmp_4_0 === ctx_r3.eavConstants.metadata.contentType.targetType ? 1 : 2);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_37_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "input", 22);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_37_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "input", 24);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, CreateMetadataDialogComponent_Conditional_0_Conditional_37_Conditional_0_Template, 1, 0, "input", 22)(1, CreateMetadataDialogComponent_Conditional_0_Conditional_37_Conditional_1_Template, 1, 0, "input", 24);
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](0, vm_r3.formValues.keyType !== ctx_r3.eavConstants.keyTypes.number ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](1, vm_r3.formValues.keyType === ctx_r3.eavConstants.keyTypes.number ? 1 : -1);
  }
}
function CreateMetadataDialogComponent_Conditional_0_ng_template_38_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "input", 22);
  }
}
function CreateMetadataDialogComponent_Conditional_0_ng_template_38_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "input", 24);
  }
}
function CreateMetadataDialogComponent_Conditional_0_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, CreateMetadataDialogComponent_Conditional_0_ng_template_38_Conditional_0_Template, 1, 0, "input", 22)(1, CreateMetadataDialogComponent_Conditional_0_ng_template_38_Conditional_1_Template, 1, 0, "input", 24);
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](0, vm_r3.formValues.keyType !== ctx_r3.eavConstants.keyTypes.number ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](1, vm_r3.formValues.keyType === ctx_r3.eavConstants.keyTypes.number ? 1 : -1);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14)(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CreateMetadataDialogComponent_Conditional_0_Conditional_40_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.toggleGuidedKey(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CreateMetadataDialogComponent_Conditional_0_Conditional_40_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.toggleGuidedKey(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "text_fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](2, _c0, vm_r3.guidedKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](4, _c0, !vm_r3.guidedKey));
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-field-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isError", true);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-field-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Must be a whole number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isError", true);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-field-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Must be a valid GUID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isError", true);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Create Metadata");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 4)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, " This is a special operation to add an item which is metadata for another item, see ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "docs");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "form", 6)(11, "mat-form-field", 7)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "Target");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, CreateMetadataDialogComponent_Conditional_0_Conditional_14_Template, 4, 1, "mat-select", 8)(15, CreateMetadataDialogComponent_Conditional_0_Conditional_15_Template, 1, 0, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, CreateMetadataDialogComponent_Conditional_0_Conditional_16_Template, 2, 1, "app-field-hint", 10)(17, CreateMetadataDialogComponent_Conditional_0_Conditional_17_Template, 2, 2, "app-field-hint", 10)(18, CreateMetadataDialogComponent_Conditional_0_Conditional_18_Template, 2, 1, "app-field-hint", 10)(19, CreateMetadataDialogComponent_Conditional_0_Conditional_19_Template, 2, 1, "app-field-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "mat-form-field", 7)(21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22, "Key type");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterCreate"](24, CreateMetadataDialogComponent_Conditional_0_For_25_Template, 2, 2, "mat-option", 12, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, CreateMetadataDialogComponent_Conditional_0_Conditional_26_Template, 2, 1, "app-field-hint", 10)(27, CreateMetadataDialogComponent_Conditional_0_Conditional_27_Template, 6, 1, "mat-form-field", 7)(28, CreateMetadataDialogComponent_Conditional_0_Conditional_28_Template, 8, 2, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "app-field-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30, " The scope should almost never be changed - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32, "see help");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "mat-form-field", 7)(34, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35, "Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](36, CreateMetadataDialogComponent_Conditional_0_Conditional_36_Template, 3, 1)(37, CreateMetadataDialogComponent_Conditional_0_Conditional_37_Template, 2, 2)(38, CreateMetadataDialogComponent_Conditional_0_ng_template_38_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"])(40, CreateMetadataDialogComponent_Conditional_0_Conditional_40_Template, 7, 6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](41, CreateMetadataDialogComponent_Conditional_0_Conditional_41_Template, 2, 1, "app-field-hint", 10)(42, CreateMetadataDialogComponent_Conditional_0_Conditional_42_Template, 2, 1, "app-field-hint", 10)(43, CreateMetadataDialogComponent_Conditional_0_Conditional_43_Template, 2, 1, "app-field-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "mat-dialog-actions", 15)(45, "mat-slide-toggle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function CreateMetadataDialogComponent_Conditional_0_Template_mat_slide_toggle_change_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.toggleGuidedMode($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "div")(48, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CreateMetadataDialogComponent_Conditional_0_Template_button_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CreateMetadataDialogComponent_Conditional_0_Template_button_click_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.confirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](51, " Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const vm_r3 = ctx;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r3.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](14, vm_r3.guidedMode ? 14 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](15, !vm_r3.guidedMode ? 15 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](16, ctx_r3.form.controls["targetType"].touched && !ctx_r3.form.controls["targetType"].invalid && vm_r3.unknownTargetType ? 16 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](17, vm_r3.targetTypeHint ? 17 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](18, ctx_r3.form.controls["targetType"].touched && (ctx_r3.form.controls["targetType"].errors == null ? null : ctx_r3.form.controls["targetType"].errors.required) ? 18 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](19, ctx_r3.form.controls["targetType"].touched && (ctx_r3.form.controls["targetType"].errors == null ? null : ctx_r3.form.controls["targetType"].errors.pattern) ? 19 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeater"](vm_r3.keyTypeOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](26, ctx_r3.form.controls["keyType"].touched && (ctx_r3.form.controls["keyType"].errors == null ? null : ctx_r3.form.controls["keyType"].errors.required) ? 26 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](27, vm_r3.guidedMode && vm_r3.formValues.targetType === ctx_r3.eavConstants.metadata.entity.targetType ? 27 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](28, vm_r3.guidedMode && (vm_r3.formValues.targetType === ctx_r3.eavConstants.metadata.entity.targetType || vm_r3.formValues.targetType === ctx_r3.eavConstants.metadata.contentType.targetType) ? 28 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](36, vm_r3.guidedMode ? 36 : 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](40, vm_r3.guidedMode && vm_r3.guidedKeyExists ? 40 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](41, ctx_r3.form.controls["key"].touched && (ctx_r3.form.controls["key"].errors == null ? null : ctx_r3.form.controls["key"].errors.required) ? 41 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](42, ctx_r3.form.controls["key"].touched && (ctx_r3.form.controls["key"].errors == null ? null : ctx_r3.form.controls["key"].errors.patternWholeNumber) ? 42 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](43, ctx_r3.form.controls["key"].touched && (ctx_r3.form.controls["key"].errors == null ? null : ctx_r3.form.controls["key"].errors.patternGuid) ? 43 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("tippy", vm_r3.guidedMode ? "Guided mode helps you select options that work" : "Manual mode is for advanced uses and allows you to insert any values")("checked", vm_r3.guidedMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", vm_r3.guidedMode ? "Guided" : "Manual", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx_r3.form.valid);
  }
}
class CreateMetadataDialogComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
  constructor(dialogRef, context, contentItemsService, contentTypesService) {
    super();
    this.dialogRef = dialogRef;
    this.context = context;
    this.contentItemsService = contentItemsService;
    this.contentTypesService = contentTypesService;
    this.hostClass = 'dialog-component';
    this.eavConstants = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants;
    this.dropdownInsertValue = _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_2__.dropdownInsertValue;
  }
  ngOnInit() {
    this.targetTypeOptions = Object.values(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.metadata).map(option => ({
      ...option
    }));
    this.keyTypeOptions = Object.values(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.keyTypes);
    this.keyTypeOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject([]);
    this.scopeOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject([]);
    this.guidedMode$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(true);
    this.contentItems$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject([]);
    this.contentTypes$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject([]);
    this.guidedKey$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(true);
    this.fetchScopes();
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormGroup({});
    this.form.addControl('targetType', new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormControl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.metadata.entity.targetType, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^[0-9]+$/)]));
    this.form.addControl('keyType', new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormControl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.metadata.entity.keyType, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]));
    this.form.addControl('contentTypeForContentItems', new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormControl(null));
    this.form.addControl('scopeForContentTypes', new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormControl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.scopes.default.value));
    this.form.addControl('key', new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, (0,_metadata_key_validator__WEBPACK_IMPORTED_MODULE_6__.metadataKeyValidator)(this.form)]));
    this.subscriptions.add(this.form.controls['scopeForContentTypes'].valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.startWith)(this.form.controls['scopeForContentTypes'].value), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.distinctUntilChanged)()).subscribe(newScope => {
      if (this.form.controls['contentTypeForContentItems'].value != null) {
        this.form.controls['contentTypeForContentItems'].patchValue(null);
      }
      if (newScope === _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_2__.dropdownInsertValue) {
        newScope = prompt('This is an advanced feature to show content-types of another scope. Don\'t use this if you don\'t know what you\'re doing, as content-types of other scopes are usually hidden for a good reason.') || _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.scopes.default.value;
        if (!this.scopeOptions$.value.some(option => option.value === newScope)) {
          const newScopeOption = {
            name: newScope,
            value: newScope
          };
          this.scopeOptions$.next([newScopeOption, ...this.scopeOptions$.value]);
        }
        this.form.controls['scopeForContentTypes'].patchValue(newScope);
      } else {
        this.fetchContentTypes(newScope);
      }
    }));
    // reset key if target or keyType changed
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.merge)(this.form.controls['targetType'].valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.distinctUntilChanged)()), this.form.controls['keyType'].valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.distinctUntilChanged)())).subscribe(() => {
      this.guidedKey$.next(true);
      const formValues = this.form.getRawValue();
      if (formValues.key != null) {
        const updatedForm = {
          key: null
        };
        this.form.patchValue(updatedForm);
      }
    }));
    // reset key if contentTypeForContentItems changed
    this.subscriptions.add(this.form.controls['contentTypeForContentItems'].valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.startWith)(this.form.controls['contentTypeForContentItems'].value), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.distinctUntilChanged)()).subscribe(contentTypeStaticName => {
      const formValues = this.form.getRawValue();
      if (formValues.targetType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.metadata.entity.targetType && formValues.key != null) {
        const updatedForm = {
          key: null
        };
        this.form.patchValue(updatedForm);
      }
      this.contentItemsService.getAll(contentTypeStaticName).subscribe(items => {
        this.contentItems$.next(items);
      });
    }));
    const formValues$ = this.form.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.startWith)(this.form.getRawValue()), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.map)(() => this.form.getRawValue()), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.distinctUntilChanged)(_shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_10__.RxHelpers.objectsEqual));
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)([formValues$, this.guidedMode$]).subscribe(([formValues, guidedMode]) => {
      // keyTypeOptions depend on targetType and advanced
      const foundTargetType = this.targetTypeOptions.find(option => option.targetType === formValues.targetType);
      const keyTypeOptions = guidedMode && foundTargetType ? [foundTargetType.keyType] : [...this.keyTypeOptions];
      if (!_shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_10__.RxHelpers.arraysEqual(keyTypeOptions, this.keyTypeOptions$.value)) {
        this.keyTypeOptions$.next(keyTypeOptions);
      }
      // update form if keyType is not available
      const updatedForm = {};
      if (!this.keyTypeOptions$.value.includes(formValues.keyType)) {
        updatedForm.keyType = this.keyTypeOptions$.value[0];
      }
      // if target is app key must be current app id
      const isAppMetadata = guidedMode && formValues.targetType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.metadata.app.targetType;
      if (isAppMetadata && formValues.key !== this.context.appId) {
        updatedForm.key = this.context.appId;
      }
      if (Object.keys(updatedForm).length) {
        this.form.patchValue(updatedForm);
      }
      const keyTypeDisabled = guidedMode && this.keyTypeOptions$.value.length <= 1;
      _edit_shared_helpers_control_helpers__WEBPACK_IMPORTED_MODULE_9__.ControlHelpers.disableControl(this.form.controls['keyType'], keyTypeDisabled);
      _edit_shared_helpers_control_helpers__WEBPACK_IMPORTED_MODULE_9__.ControlHelpers.disableControl(this.form.controls['key'], isAppMetadata);
    }));
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)([this.guidedMode$, this.keyTypeOptions$, this.scopeOptions$, this.contentItems$, this.contentTypes$]), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)([formValues$, this.guidedKey$])]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.map)(([[guidedMode, keyTypeOptions, scopeOptions, contentItems, contentTypes], [formValues, guidedKey]]) => {
      const viewModel = {
        guidedMode,
        unknownTargetType: !this.targetTypeOptions.some(option => option.targetType === formValues.targetType),
        targetTypeHint: guidedMode && this.targetTypeOptions.find(option => option.targetType === formValues.targetType)?.hint,
        keyTypeOptions,
        scopeOptions,
        guidedKey,
        guidedKeyExists: [_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.metadata.entity.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.metadata.contentType.targetType].includes(formValues.targetType),
        formValues,
        contentItems,
        contentTypes
      };
      return viewModel;
    }));
  }
  ngOnDestroy() {
    this.guidedMode$.complete();
    this.keyTypeOptions$.complete();
    this.contentItems$.complete();
    this.contentTypes$.complete();
    this.guidedKey$.complete();
    super.ngOnDestroy();
  }
  closeDialog(result) {
    this.dialogRef.close(result);
  }
  toggleGuidedKey(event) {
    this.guidedKey$.next(event);
  }
  toggleGuidedMode(event) {
    this.guidedMode$.next(event.checked);
  }
  confirm() {
    const formValues = this.form.getRawValue();
    const result = {
      target: this.targetTypeOptions.find(option => option.targetType === formValues.targetType)?.target,
      targetType: formValues.targetType,
      keyType: formValues.keyType,
      // if keyType is guid remove curly brackets
      key: formValues.keyType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.keyTypes.guid ? formValues.key.replace(/{|}/g, '') : formValues.key.toString()
    };
    this.closeDialog(result);
  }
  fetchContentTypes(scope) {
    this.contentTypesService.retrieveContentTypes(scope).subscribe(contentTypes => {
      this.contentTypes$.next(contentTypes);
    });
  }
  fetchScopes() {
    this.contentTypesService.getScopes().subscribe(scopes => {
      this.scopeOptions$.next(scopes);
    });
  }
  static #_ = this.ɵfac = function CreateMetadataDialogComponent_Factory(t) {
    return new (t || CreateMetadataDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_4__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_content_items_service__WEBPACK_IMPORTED_MODULE_5__.ContentItemsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_app_administration_services__WEBPACK_IMPORTED_MODULE_0__.ContentTypesService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: CreateMetadataDialogComponent,
    selectors: [["app-create-metadata-dialog"]],
    hostVars: 1,
    hostBindings: function CreateMetadataDialogComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵhostProperty"]("className", ctx.hostClass);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [["defaultKeyInput", ""], [1, "eav-dialog"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], [1, "eav-dialog-content"], ["href", "https://go.2sxc.org/metadata", "target", "_blank"], [3, "formGroup"], ["color", "accent", 2, "width", "100%", "margin-bottom", "8px"], ["formControlName", "targetType", "required", ""], ["matInput", "", "type", "number", "min", "0", "formControlName", "targetType", "required", ""], [3, "isError"], ["formControlName", "keyType", "required", ""], [3, "value"], ["href", "https://2sxc.org/help?tag=scope", "target", "_blank", "appClickStopPropagation", ""], ["matTextSuffix", "", 1, "eav-selection-suffix"], [1, "eav-dialog-actions"], ["color", "accent", 3, "change", "tippy", "checked"], ["mat-raised-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click", "disabled"], ["formControlName", "contentTypeForContentItems", 3, "placeholder"], ["formControlName", "scopeForContentTypes", 3, "placeholder"], ["formControlName", "key", "required", "", 3, "placeholder"], ["matInput", "", "type", "text", "formControlName", "key", "required", ""], [4, "ngTemplateOutlet"], ["matInput", "", "type", "number", "formControlName", "key", "required", ""], ["mat-icon-button", "", "type", "button", "tippy", "Pick existing value", 1, "eav-selection-suffix-button", 3, "click", "ngClass"], [1, "eav-icon"], ["mat-icon-button", "", "type", "button", "tippy", "Manual entry", 1, "eav-selection-suffix-button", 3, "click", "ngClass"]],
    template: function CreateMetadataDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, CreateMetadataDialogComponent_Conditional_0_Template, 52, 19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatOptionModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInput, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgTemplateOutlet, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatIconButton, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogActions, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__.MatSlideToggle, _angular_common__WEBPACK_IMPORTED_MODULE_25__.AsyncPipe, _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_7__.FieldHintComponent, _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_8__.ClickStopPropagationDirective, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_11__.TippyDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 98973:
/*!************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-items/create-metadata-dialog/metadata-key.validator.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   metadataKeyValidator: () => (/* binding */ metadataKeyValidator)
/* harmony export */ });
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_constants_guid_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants/guid.constants */ 49417);


function metadataKeyValidator(form) {
  return control => {
    if (!control.value) {
      return null;
    }
    const keyType = form.controls['keyType'].value;
    const testValue = control.value.toString();
    switch (keyType) {
      case _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.keyTypes.number:
        const isWholeNumber = /^[0-9]+$/.test(testValue);
        return !isWholeNumber ? {
          patternWholeNumber: true
        } : null;
      case _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.keyTypes.guid:
        // allow curly brackets around guid
        const hasCurly = ['{', '}'].some(bracket => testValue.includes(bracket));
        const guid = testValue.substring(hasCurly ? 1 : 0, hasCurly ? testValue.length - 1 : testValue.length);
        const isGuid = (0,_shared_constants_guid_constants__WEBPACK_IMPORTED_MODULE_1__.guidRegex)().test(guid);
        return !isGuid ? {
          patternGuid: true
        } : null;
      case _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.keyTypes.string:
        return null;
      default:
        return null;
    }
  };
}

/***/ }),

/***/ 73138:
/*!********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-items/pub-meta-filter/pub-meta-filter.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PubMetaFilterComponent: () => (/* binding */ PubMetaFilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/radio */ 53804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);





class PubMetaFilterComponent {
  constructor() {
    this.published = '';
    this.metadata = '';
    this.hasMetadata = '';
  }
  agInit(params) {
    this.filterParams = params;
  }
  isFilterActive() {
    return this.published !== '' || this.metadata !== '' || this.hasMetadata !== '';
  }
  doesFilterPass(params) {
    let publishedPassed = false;
    let metadataPassed = false;
    let hasMetadataPassed = false;
    const valueGetterParams = {
      api: this.filterParams.api,
      colDef: this.filterParams.colDef,
      column: this.filterParams.column,
      columnApi: this.filterParams.columnApi,
      context: this.filterParams.context,
      data: params.node.data,
      getValue: field => params.node.data[field],
      node: params.node
    };
    const value = this.filterParams.valueGetter(valueGetterParams);
    if (this.published !== '') {
      if (value.published === null || value.published === undefined) {
        publishedPassed = false;
      } else {
        publishedPassed = value.published.toString() === this.published;
      }
    } else {
      publishedPassed = true;
    }
    if (this.metadata !== '') {
      if (value.metadata === null || value.metadata === undefined) {
        metadataPassed = false;
      } else {
        metadataPassed = value.metadata.toString() === this.metadata;
      }
    } else {
      metadataPassed = true;
    }
    if (this.hasMetadata !== '') {
      if (value.hasMetadata === null || value.hasMetadata === undefined) {
        hasMetadataPassed = false;
      } else {
        hasMetadataPassed = value.hasMetadata.toString() === this.hasMetadata;
      }
    } else {
      hasMetadataPassed = true;
    }
    return publishedPassed && metadataPassed && hasMetadataPassed;
  }
  getModel() {
    if (!this.isFilterActive()) {
      return;
    }
    const model = {
      filterType: 'pub-meta',
      published: this.published,
      metadata: this.metadata,
      hasMetadata: this.hasMetadata
    };
    return model;
  }
  setModel(model) {
    this.published = model ? model.published : '';
    this.metadata = model ? model.metadata : '';
    this.hasMetadata = model ? model.hasMetadata : '';
  }
  afterGuiAttached(params) {}
  filterChanged() {
    this.filterParams.filterChangedCallback();
  }
  static #_ = this.ɵfac = function PubMetaFilterComponent_Factory(t) {
    return new (t || PubMetaFilterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PubMetaFilterComponent,
    selectors: [["app-pub-meta-filter"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 27,
    vars: 3,
    consts: [[1, "title"], [3, "ngModelChange", "ngModel"], ["value", ""], ["value", "true"], ["value", "false"]],
    template: function PubMetaFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Published");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-radio-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PubMetaFilterComponent_Template_mat_radio_group_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.published, $event) || (ctx.published = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PubMetaFilterComponent_Template_mat_radio_group_ngModelChange_2_listener() {
          return ctx.filterChanged();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-radio-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-radio-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Published");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-radio-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Not published");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Is Metadata");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-radio-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PubMetaFilterComponent_Template_mat_radio_group_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.metadata, $event) || (ctx.metadata = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PubMetaFilterComponent_Template_mat_radio_group_ngModelChange_11_listener() {
          return ctx.filterChanged();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-radio-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-radio-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Is metadata");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-radio-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Is not metadata");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Has Metadata");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-radio-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PubMetaFilterComponent_Template_mat_radio_group_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.hasMetadata, $event) || (ctx.hasMetadata = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PubMetaFilterComponent_Template_mat_radio_group_ngModelChange_20_listener() {
          return ctx.filterChanged();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-radio-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-radio-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Has metadata");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-radio-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Has no metadata");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.published);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.metadata);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.hasMetadata);
      }
    },
    dependencies: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_1__.MatRadioModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_1__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_1__.MatRadioButton, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
    styles: [".title[_ngcontent-%COMP%] {\n  padding: 12px 12px 0;\n}\n\n.mat-mdc-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n  padding: 12px;\n  width: 160px;\n  height: 104px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NvbnRlbnQtaXRlbXMvcHViLW1ldGEtZmlsdGVyL3B1Yi1tZXRhLWZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIHBhZGRpbmc6IDEycHggMTJweCAwO1xyXG59XHJcblxyXG4ubWF0LW1kYy1yYWRpby1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGhlaWdodDogMTA0cHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 57319:
/*!****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-items/services/entities.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntitiesService: () => (/* binding */ EntitiesService)
/* harmony export */ });
/* harmony import */ var _edit_shared_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../edit/shared/services */ 22453);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);








class EntitiesService {
  constructor(http, context, dnnContext) {
    this.http = http;
    this.context = context;
    this.dnnContext = dnnContext;
  }
  create(contentType, entity) {
    return this.http.post(`app/auto/data/${contentType}`, entity, {
      params: {
        appId: this.context.appId,
        zoneId: this.context.zoneId
      }
    });
  }
  update(contentType, entityId, entity) {
    return this.http.post(`app/auto/data/${contentType}/${entityId}`, entity, {
      params: {
        appId: this.context.appId,
        zoneId: this.context.zoneId
      }
    });
  }
  delete(type, id, tryForce) {
    return this.http.delete(this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services__WEBPACK_IMPORTED_MODULE_0__.webApiEntityRoot + 'delete'), {
      params: {
        contentType: type,
        id: id.toString(),
        appId: this.context.appId.toString(),
        force: tryForce.toString()
      }
    });
  }
  static #_ = this.ɵfac = function EntitiesService_Factory(t) {
    return new (t || EntitiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_1__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_4__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: EntitiesService,
    factory: EntitiesService.ɵfac
  });
}

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

/***/ }),

/***/ 83060:
/*!********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/components/entity-filter/entity-filter.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityFilterComponent: () => (/* binding */ EntityFilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/radio */ 53804);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);







const _c0 = ["valueInput"];
class EntityFilterComponent {
  constructor() {
    this.filter = '';
    this.idFilterString = '';
    this.idFilter = [];
  }
  agInit(params) {
    this.filterParams = params;
  }
  isFilterActive() {
    return this.filter !== '' || this.idFilter.length > 0;
  }
  doesFilterPass(params) {
    if (this.filter !== '') {
      const valueGetterParams = {
        api: this.filterParams.api,
        colDef: this.filterParams.colDef,
        column: this.filterParams.column,
        columnApi: this.filterParams.columnApi,
        context: this.filterParams.context,
        data: params.node.data,
        getValue: field => params.node.data[field],
        node: params.node
      };
      const values = this.filterParams.valueGetter(valueGetterParams);
      if (values == null) {
        return false;
      }
      if (!values.some(value => !!value && value.includes(this.filter))) {
        return false;
      }
    }
    if (this.idFilter.length > 0) {
      const items = params.data[this.filterParams.colDef.headerName];
      if (items == null) {
        return false;
      }
      if (!this.idFilter.some(idFltr => items.some(itm => itm.Id === idFltr))) {
        return false;
      }
    }
    return true;
  }
  getModel() {
    if (!this.isFilterActive()) {
      return;
    }
    const model = {
      filterType: 'entity',
      filter: this.filter,
      idFilter: this.idFilter
    };
    return model;
  }
  setModel(model) {
    this.filter = model?.filter ?? '';
    this.idFilter = model?.idFilter ?? [];
    this.idFilterString = model?.idFilter?.join(',') ?? '';
  }
  afterGuiAttached(params) {
    this.valueInputRef.nativeElement.focus();
  }
  updateIdFilter() {
    this.idFilter = this.idFilterString.split(',').map(el => parseInt(el, 10)).filter(el => !isNaN(el));
  }
  filterChanged() {
    this.filterParams.filterChangedCallback();
  }
  static #_ = this.ɵfac = function EntityFilterComponent_Factory(t) {
    return new (t || EntityFilterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: EntityFilterComponent,
    selectors: [["app-entity-filter"]],
    viewQuery: function EntityFilterComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.valueInputRef = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 9,
    vars: 2,
    consts: [["valueInput", ""], ["color", "accent", 1, "eav-mat-form-field"], ["matInput", "", "type", "text", 3, "ngModelChange", "ngModel"]],
    template: function EntityFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 1)(1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EntityFilterComponent_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.filter, $event) || (ctx.filter = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EntityFilterComponent_Template_input_ngModelChange_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.filterChanged());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 1)(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "IDs (comma separated)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EntityFilterComponent_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.idFilterString, $event) || (ctx.idFilterString = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EntityFilterComponent_Template_input_ngModelChange_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          ctx.updateIdFilter();
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.filterChanged());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.idFilterString);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_2__.MatRadioModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 16px 12px;\n  padding-bottom: 2px;\n}\n\n.mat-mdc-form-field[_ngcontent-%COMP%] {\n  display: block;\n  width: 175px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2VudGl0eS1maWx0ZXIvZW50aXR5LWZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDE2cHggMTJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG4ubWF0LW1kYy1mb3JtLWZpZWxkIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTc1cHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 43758:
/*!**************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/components/field-hint/field-hint.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldHintComponent: () => (/* binding */ FieldHintComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);




const _c0 = ["*"];
const _c1 = a0 => ({
  "hint-box__short": a0
});
function FieldHintComponent_Case_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FieldHintComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldHintComponent_Case_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const content_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", content_r2);
  }
}
function FieldHintComponent_Case_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FieldHintComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldHintComponent_Case_2_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const content_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", content_r2);
  }
}
function FieldHintComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}
class FieldHintComponent {
  constructor() {
    this.isError = false;
    this.isShort = true;
  }
  toggleIsShort() {
    this.isShort = !this.isShort;
  }
  static #_ = this.ɵfac = function FieldHintComponent_Factory(t) {
    return new (t || FieldHintComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FieldHintComponent,
    selectors: [["app-field-hint"]],
    inputs: {
      isError: "isError"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 5,
    vars: 4,
    consts: [["content", ""], [1, "hint-box", 3, "click", "ngClass"], [4, "ngTemplateOutlet"]],
    template: function FieldHintComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldHintComponent_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.toggleIsShort());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldHintComponent_Case_1_Template, 2, 1)(2, FieldHintComponent_Case_2_Template, 2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FieldHintComponent_ng_template_3_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx.isShort));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, (tmp_2_0 = ctx.isError) === false ? 1 : tmp_2_0 === true ? 2 : -1);
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatError, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet],
    styles: [".hint-box[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: block;\n}\n.hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], .hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZpZWxkLWhpbnQvZmllbGQtaGludC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjtBQUNFOztFQUVFLGVBQUE7RUFDQSxjQUFBO0FBQ0o7QUFJSTs7RUFFRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFGTiIsInNvdXJjZXNDb250ZW50IjpbIi5oaW50LWJveCB7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG5cclxuICAubWF0LW1kYy1mb3JtLWZpZWxkLWhpbnQsXHJcbiAgLm1hdC1tZGMtZm9ybS1maWVsZC1lcnJvciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICZfX3Nob3J0IHtcclxuXHJcbiAgICAubWF0LW1kYy1mb3JtLWZpZWxkLWhpbnQsXHJcbiAgICAubWF0LW1kYy1mb3JtLWZpZWxkLWVycm9yIHtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
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

/***/ }),

/***/ 39333:
/*!***************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/directives/click-stop-propagation.directive.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClickStopPropagationDirective: () => (/* binding */ ClickStopPropagationDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

const logThis = false;
class ClickStopPropagationDirective {
  constructor() {
    if (logThis) console.log('ClickStopPropagationDirective.constructor');
  }
  onClick(event) {
    if (logThis) console.log('ClickStopPropagationDirective.onClick', event);
    event.stopPropagation();
  }
  static #_ = this.ɵfac = function ClickStopPropagationDirective_Factory(t) {
    return new (t || ClickStopPropagationDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: ClickStopPropagationDirective,
    selectors: [["", "appClickStopPropagation", ""]],
    hostBindings: function ClickStopPropagationDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickStopPropagationDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    standalone: true
  });
}

/***/ }),

/***/ 95699:
/*!*****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/directives/toggle-debug.directive.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToggleDebugDirective: () => (/* binding */ ToggleDebugDirective)
/* harmony export */ });
/* harmony import */ var _edit_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../edit/shared/store/ngrx-data */ 27521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);



class ToggleDebugDirective {
  constructor(globalConfigService) {
    this.globalConfigService = globalConfigService;
  }
  onClick(event) {
    const CTRL_SHIFT_ALT_CLICK = (navigator.platform.match('Mac') ? event.metaKey : event.ctrlKey) && event.shiftKey && event.altKey;
    if (CTRL_SHIFT_ALT_CLICK) {
      this.globalConfigService.toggleDebugEnabled();
      window.getSelection().removeAllRanges();
    }
  }
  static #_ = this.ɵfac = function ToggleDebugDirective_Factory(t) {
    return new (t || ToggleDebugDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_edit_shared_store_ngrx_data__WEBPACK_IMPORTED_MODULE_0__.GlobalConfigService));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: ToggleDebugDirective,
    selectors: [["", "appToggleDebug", ""]],
    hostBindings: function ToggleDebugDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToggleDebugDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    standalone: true
  });
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_content-items_content-items_component_ts-projects_eav-ui_src_app_cont-377579.js.map