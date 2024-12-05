"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_content-items_content-items_component_ts"],{

/***/ 56360:
/*!***********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-export/services/content-export.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentExportService: () => (/* binding */ ContentExportService)
/* harmony export */ });
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


const webApiEntityRootDownload = 'admin/entity/Download';
const webApiEntityRootJson = 'admin/entity/Json';
const webApiTypeRootJson = 'admin/type/Json';
const webApiTypeRootJsonBundleExport = 'admin/type/JsonBundleExport';
class ContentExportService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__.HttpServiceBase {
  exportContent(values, selectedIds) {
    const selectedIdsString = selectedIds ? '&selectedids=' + selectedIds.join() : '';
    const url = this.apiUrl(webApiEntityRootDownload) + '?appId=' + this.appId + '&language=' + values.language + '&defaultLanguage=' + values.defaultLanguage + '&contentType=' + values.contentTypeStaticName + '&recordExport=' + values.recordExport + '&resourcesReferences=' + values.resourcesReferences + '&languageReferences=' + values.languageReferences + selectedIdsString;
    window.open(url, '_blank', '');
  }
  exportJson(typeName) {
    const url = this.apiUrl(webApiTypeRootJson) + '?appId=' + this.appId + '&name=' + typeName;
    window.open(url, '_blank', '');
  }
  exportEntity(id, prefix, metadata) {
    const url = this.apiUrl(webApiEntityRootJson) + '?appId=' + this.appId + '&id=' + id + '&prefix=' + prefix + '&withMetadata=' + metadata;
    window.open(url, '_blank', '');
  }
  // TODO: @2dg
  // - one one hand, this should be in a separate service BundleService
  // - ...but: it would be better to make the service just generate the URL, and then use a link in the template directly (in a _blank window)
  exportDataBundle(Guid) {
    const url = this.apiUrl(webApiTypeRootJsonBundleExport) + '?appId=' + this.appId + '&exportConfiguration=' + Guid + '&indentation=' + 1;
    window.open(url, '_blank', '');
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵContentExportService_BaseFactory;
      return function ContentExportService_Factory(__ngFactoryType__) {
        return (ɵContentExportService_BaseFactory || (ɵContentExportService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ContentExportService)))(__ngFactoryType__ || ContentExportService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ContentExportService,
      factory: ContentExportService.ɵfac
    });
  }
}

/***/ }),

/***/ 10510:
/*!********************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-items/content-items-actions/content-items-actions.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentItemsActionsComponent: () => (/* binding */ ContentItemsActionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);








function ContentItemsActionsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentItemsActionsComponent_ng_template_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.do("delete"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.item._EditInfo.DisableDelete);
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
  static {
    this.ɵfac = function ContentItemsActionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ContentItemsActionsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ContentItemsActionsComponent,
      selectors: [["app-data-bundle-actions"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 13,
      vars: 2,
      consts: [["menu", "matMenu"], [1, "actions-component"], ["matRipple", "", "tippy", "Clone", 1, "eav-grid-action-button", "default-link", "highlight", 3, "href"], ["matRipple", "", "tippy", "Export", 1, "eav-grid-action-button", "highlight", 3, "click"], ["matRipple", "", "tippy", "More", 1, "eav-grid-action-button", "highlight", 3, "matMenuTriggerFor"], [1, "grid-more-menu"], ["matMenuContent", ""], ["mat-menu-item", "", 3, "click", "disabled"]],
      template: function ContentItemsActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "a", 2)(2, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "file_copy");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentItemsActionsComponent_Template_div_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.do("export"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "cloud_download");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "more_horiz");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-menu", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ContentItemsActionsComponent_ng_template_12_Template, 5, 1, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const menu_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.params.urlTo("clone", ctx.item), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", menu_r4);
        }
      },
      dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuTrigger, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
      encapsulation: 2
    });
  }
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
    if (!Array.isArray(params.value)) return;
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
  static {
    this.ɵfac = function ContentItemsEntityComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ContentItemsEntityComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
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
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.entities ? 1 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.encodedValue, "\n");
        }
      },
      dependencies: [_shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
      styles: [".more-entities[_ngcontent-%COMP%] {\n  padding: 0px 8px;\n  border-radius: 10px;\n  border: 1px solid rgba(29, 39, 61, 0.44);\n  -webkit-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NvbnRlbnQtaXRlbXMvY29udGVudC1pdGVtcy1lbnRpdHkvY29udGVudC1pdGVtcy1lbnRpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubW9yZS1lbnRpdGllcyB7XHJcbiAgcGFkZGluZzogMHB4IDhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjksIDM5LCA2MSwgMC40NCk7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);









const _c0 = a0 => ({
  "hide-until-row-hover": a0
});
function ContentItemsStatusComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 2)(1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tippy", ctx_r0.metadataTooltip)("href", ctx_r0.params.urlTo("openMetadata", ctx_r0.item), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, !ctx_r0.metadataCount && !ctx_r0.value.metadata));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matBadge", ctx_r0.metadataCount)("matBadgeHidden", !ctx_r0.metadataCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.value.metadata ? "loyalty" : "local_offer", " ");
  }
}
function ContentItemsStatusComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matBadge", ctx_r0.metadataCount)("matBadgeHidden", !ctx_r0.metadataCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.value.metadata ? "loyalty" : "local_offer", " ");
  }
}
class ContentItemsStatusComponent {
  agInit(params) {
    this.params = params;
    this.value = params.value;
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
  static {
    this.ɵfac = function ContentItemsStatusComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ContentItemsStatusComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ContentItemsStatusComponent,
      selectors: [["app-content-items-status"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 3,
      consts: [[1, "actions-component"], [1, "eav-grid-action-button", "icon", 3, "tippy"], ["matRipple", "", 1, "eav-grid-action-button", "default-link", "highlight", 3, "tippy", "href", "ngClass"], [1, "eav-grid-action-button", "disabled"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgePosition", "below after", "aria-hidden", "false", 3, "matBadge", "matBadgeHidden"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgeDisabled", "true", "matBadgePosition", "below after", "aria-hidden", "false", 3, "matBadge", "matBadgeHidden"]],
      template: function ContentItemsStatusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ContentItemsStatusComponent_Conditional_4_Template, 3, 8, "a", 2)(5, ContentItemsStatusComponent_Conditional_5_Template, 3, 3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tippy", ctx.value.published ? "Published" : "Not published");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.value.published ? "visibility" : "visibility_off");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](!ctx.disableMetadata ? 4 : ctx.disableMetadata && !(!ctx.metadataCount && !ctx.value.metadata) ? 5 : -1);
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadge, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
      styles: [".hide-until-row-hover[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n  .ag-row-hover .hide-until-row-hover {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2NvbnRlbnQtaXRlbXMvY29udGVudC1pdGVtcy1zdGF0dXMvY29udGVudC1pdGVtcy1zdGF0dXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRlLXVudGlsLXJvdy1ob3ZlciB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLXJvdy1ob3ZlciAuaGlkZS11bnRpbC1yb3ctaG92ZXIge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core */ 88692);
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ 17693);
/* harmony import */ var _content_export_services_content_export_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content-export/services/content-export.service */ 56360);
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../metadata */ 65217);
/* harmony import */ var _shared_ag_grid_ag_grid_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/ag-grid/ag-grid-helper */ 21183);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/boolean-filter/boolean-filter.component */ 91960);
/* harmony import */ var _shared_components_entity_filter_entity_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/entity-filter/entity-filter.component */ 83060);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/constants/session.constants */ 38172);
/* harmony import */ var _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/directives/drag-and-drop.directive */ 34575);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_directives_toggle_debug_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/directives/toggle-debug.directive */ 95699);
/* harmony import */ var _shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/fields/data-type-catalog */ 1726);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/logging */ 34435);
/* harmony import */ var _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/models/edit-form.model */ 70334);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/pipes/safe-html.pipe */ 69914);
/* harmony import */ var _shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/routing/dialog-routing.service */ 60852);
/* harmony import */ var _shared_services_entity_edit_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/services/entity-edit.service */ 96817);
/* harmony import */ var _shared_services_global_config_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/services/global-config.service */ 39431);
/* harmony import */ var _shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../shared/signals/signal.utilities */ 67993);
/* harmony import */ var _content_items_actions_content_items_actions_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./content-items-actions/content-items-actions.component */ 10510);
/* harmony import */ var _content_items_entity_content_items_entity_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./content-items-entity/content-items-entity.component */ 49820);
/* harmony import */ var _content_items_status_content_items_status_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./content-items-status/content-items-status.component */ 98826);
/* harmony import */ var _content_items_helpers__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./content-items.helpers */ 3099);
/* harmony import */ var _create_metadata_dialog_create_metadata_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./create-metadata-dialog/create-metadata-dialog.component */ 28690);
/* harmony import */ var _pub_meta_filter_pub_meta_filter_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pub-meta-filter/pub-meta-filter.component */ 73138);
/* harmony import */ var _services_content_items_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/content-items.service */ 336);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);










































function ContentItemsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelement"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵpipe"](1, "safeHtml");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵpipeBind1"](1, 1, ctx), _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsanitizeHtml"]);
  }
}
function ContentItemsComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵlistener"]("click", function ContentItemsComponent_Conditional_34_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵresetView"](ctx_r1.debugFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtext"](2, "filter_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtext"](4, "Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]()();
  }
}
class ContentItemsComponent {
  #entitiesSvc;
  #contentExportSvc;
  #contentItemsSvc;
  #contentTypesSvc;
  #dialogRouter;
  constructor(dialog, snackBar, matDialog, viewContainerRef, changeDetectorRef) {
    this.dialog = dialog;
    this.snackBar = snackBar;
    this.matDialog = matDialog;
    this.viewContainerRef = viewContainerRef;
    this.changeDetectorRef = changeDetectorRef;
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_15__.classLog)({
      ContentItemsComponent
    });
    this.isDebug = (0,_angular_core__WEBPACK_IMPORTED_MODULE_30__.inject)(_shared_services_global_config_service__WEBPACK_IMPORTED_MODULE_21__.GlobalConfigService).isDebug;
    this.#entitiesSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_services_entity_edit_service__WEBPACK_IMPORTED_MODULE_20__.EntityEditService);
    this.#contentExportSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_content_export_services_content_export_service__WEBPACK_IMPORTED_MODULE_2__.ContentExportService);
    this.#contentItemsSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_content_items_service__WEBPACK_IMPORTED_MODULE_29__.ContentItemsService);
    this.#contentTypesSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_1__.ContentTypesService);
    this.#dialogRouter = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_19__.DialogRoutingService);
    this.gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_8__.defaultGridOptions,
      onFilterChanged: _ => this.#filterChanged.update(v => v + 1)
    };
    /** Signal to tell other signals that the filter changed */
    this.#filterChanged = (0,_angular_core__WEBPACK_IMPORTED_MODULE_30__.signal)(0);
    this.#gridApiSigTemp = (0,_angular_core__WEBPACK_IMPORTED_MODULE_30__.signal)(null);
    this.#contentTypeStaticName = this.#dialogRouter.getParam('contentTypeStaticName');
    this.contentType = this.#contentTypesSvc.retrieveContentTypeSig(this.#contentTypeStaticName, undefined);
    this.#refresh = (0,_angular_core__WEBPACK_IMPORTED_MODULE_30__.signal)(0);
    this.items = (0,_angular_core__WEBPACK_IMPORTED_MODULE_30__.computed)(() => {
      const refresh = this.#refresh();
      return this.#contentItemsSvc.getAllSig(this.#contentTypeStaticName, undefined);
    });
    this.urlToExportContent = (0,_shared_signals_signal_utilities__WEBPACK_IMPORTED_MODULE_22__.computedObj)('urlToExportContent', () => {
      const value = this.#gridApiSigTemp();
      if (!value) return '';
      // Watch for filter changes, as the IDs are probably different on each change
      this.#filterChanged();
      const hasFilters = Object.keys(value.getFilterModel()).length > 0;
      const ids = [];
      if (hasFilters) value.forEachNodeAfterFilterAndSort(n => ids.push(n.data.Id));
      return this.#urlTo(`export/${this.#contentTypeStaticName}${ids.length > 0 ? `/${ids.join(',')}` : ''}`);
    });
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_30__.effect)(() => this.fetchColumns());
  }
  /** Signal to tell other signals that the filter changed */
  #filterChanged;
  #gridApiSigTemp;
  #contentTypeStaticName;
  #refresh;
  ngOnInit() {
    this.urlToExportContent();
    this.#dialogRouter.doOnDialogClosed(() => this.fetchItems());
  }
  closeDialog() {
    this.dialog.close();
  }
  onGridReady(params) {
    this.#gridApiSigTemp.set(params.api);
    this.urlToExportContent();
  }
  fetchItems() {
    this.#refresh.update(value => value + 1);
  }
  fetchColumns() {
    this.#contentItemsSvc.getColumns(this.#contentTypeStaticName).subscribe(columns => {
      // filter out ephemeral columns as they don't have data to show
      const columnsWithoutEphemeral = columns.filter(column => !column.IsEphemeral);
      const columnDefs = this.#buildColumnDefs(columnsWithoutEphemeral);
      const filterModel = (0,_content_items_helpers__WEBPACK_IMPORTED_MODULE_26__.buildFilterModel)(sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_9__.keyFilters), columnDefs);
      if (this.#gridApiSigTemp()) this.setColumnDefs(columnDefs, filterModel);
    });
  }
  setColumnDefs(columnDefs, filterModel) {
    this.#gridApiSigTemp().setColumnDefs(columnDefs);
    if (filterModel) {
      this.log.a('Will try to apply filter:', filterModel);
      this.#gridApiSigTemp().setFilterModel(filterModel);
    }
  }
  // This method is called multiple times, to reduce redundancy.
  // It calls the urlSubRoute method from the dialogRouter service
  // and sets a # infront of the url, so angular can differentiate
  // angular routes from ordinary urls.
  #urlTo(url) {
    return '#' + this.#dialogRouter.urlSubRoute(url);
  }
  #urlToMetadata(item) {
    return this.#dialogRouter.urlSubRoute(_metadata__WEBPACK_IMPORTED_MODULE_3__.GoToMetadata.getUrlEntity(item.Guid, `Metadata for Entity: ${item._Title} (${item.Id})`, this.#contentTypeStaticName));
  }
  editItem(item) {
    const form = {
      items: [item == null ? _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_16__.EditPrep.newFromType(this.#contentTypeStaticName) : _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_16__.EditPrep.editId(item.Id)]
    };
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_14__.convertFormToUrl)(form);
    this.#dialogRouter.navRelative([`edit/${formUrl}`]);
  }
  #urlToOpenEditView(item) {
    return this.#urlTo(`edit/${(0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_14__.convertFormToUrl)({
      items: [item == null ? _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_16__.EditPrep.newFromType(this.#contentTypeStaticName) : _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_16__.EditPrep.editId(item.Id)]
    })}`);
  }
  urlToNewItem(item) {
    return this.#urlTo(`edit/${(0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_14__.convertFormToUrl)({
      items: [item == null ? _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_16__.EditPrep.newFromType(this.#contentTypeStaticName) : _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_16__.EditPrep.editId(item.Id)]
    })}`);
  }
  filesDropped(files) {
    const importFile = files[0];
    const ext = importFile.name.substring(importFile.name.lastIndexOf('.') + 1).toLocaleLowerCase();
    switch (ext) {
      case 'xml':
        this.urlToImportContent(files);
        break;
      case 'json':
        this.importItem(files);
        break;
    }
  }
  urlToImportContent(files) {
    // Special, because the /import is at the end of the URL
    return this.#urlTo(`${this.#contentTypeStaticName}${files ? `/${files.map(f => f.name).join(',')}` : ''}/import`);
  }
  importItem(files) {
    const dialogData = {
      files
    };
    this.#dialogRouter.navRelative(['import'], {
      state: dialogData
    });
  }
  urlToImportItem() {
    return this.#urlTo('import');
  }
  createMetadata() {
    const metadataDialogRef = this.matDialog.open(_create_metadata_dialog_create_metadata_dialog_component__WEBPACK_IMPORTED_MODULE_27__.CreateMetadataDialogComponent, {
      autoFocus: false,
      viewContainerRef: this.viewContainerRef,
      width: '650px'
    });
    metadataDialogRef.afterClosed().subscribe(itemFor => {
      if (itemFor == null) return;
      const form = {
        items: [_shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_16__.EditPrep.newMetadataFromInfo(this.#contentTypeStaticName, itemFor)]
      };
      const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_14__.convertFormToUrl)(form);
      this.#dialogRouter.navRelative([`edit/${formUrl}`]);
      this.changeDetectorRef.markForCheck();
    });
  }
  debugFilter() {
    console.warn('Current filter:', this.#gridApiSigTemp().getFilterModel());
    this.snackBar.open('Check console for filter information', undefined, {
      duration: 3000
    });
  }
  #buildColumnDefs(columns) {
    const columnDefs = [{
      ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_5__.ColumnDefinitions.IdWithDefaultRenderer,
      cellClass: p => `id-action no-padding no-outline ${p.data._EditInfo.ReadOnly ? 'disabled' : ''}`.split(' '),
      cellRendererParams: _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_5__.ColumnDefinitions.idFieldParamsTooltipGetter()
    }, {
      field: 'Status',
      width: 82,
      headerClass: 'dense',
      cellClass: 'secondary-action no-padding'.split(' '),
      filter: _pub_meta_filter_pub_meta_filter_component__WEBPACK_IMPORTED_MODULE_28__.PubMetaFilterComponent,
      valueGetter: p => {
        const item = p.data;
        const published = {
          published: item.IsPublished,
          metadata: !!item.For,
          hasMetadata: item.Metadata ? item.Metadata.length > 0 : false
        };
        return published;
      },
      cellRenderer: _content_items_status_content_items_status_component__WEBPACK_IMPORTED_MODULE_25__.ContentItemsStatusComponent,
      cellRendererParams: (() => ({
        urlTo: (verb, item) => '#' + this.#urlToMetadata(item)
      }))()
    }, {
      ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_5__.ColumnDefinitions.TextWidePrimary,
      headerName: 'Item (Entity)',
      field: '_Title',
      flex: 2,
      cellRenderer: p => _shared_ag_grid_ag_grid_helper__WEBPACK_IMPORTED_MODULE_4__.AgGridHelper.cellLink(this.#urlToOpenEditView(p.data), p.data.Title)
    }, {
      headerName: 'Stats',
      headerTooltip: 'Used by others / uses others',
      field: '_Used',
      width: 70,
      headerClass: 'dense',
      cellClass: 'no-outline',
      sortable: true,
      filter: 'agTextColumnFilter',
      valueGetter: p => `${p.data._Used} / ${p.data._Uses}`
    }, {
      ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_5__.ColumnDefinitions.ActionsPinnedRight3,
      cellRenderer: _content_items_actions_content_items_actions_component__WEBPACK_IMPORTED_MODULE_23__.ContentItemsActionsComponent,
      cellRendererParams: (() => {
        const params = {
          urlTo: (verb, item) => '#' + this.#urlToClone(item),
          do: (verb, item) => {
            switch (verb) {
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
        case _shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_13__.DataTypeCatalog.Entity:
          colDef.allowMultiValue = column.Metadata?.Entity?.AllowMultiValue ?? true;
          colDef.cellRenderer = _content_items_entity_content_items_entity_component__WEBPACK_IMPORTED_MODULE_24__.ContentItemsEntityComponent;
          colDef.valueGetter = this.valueGetterEntityField;
          colDef.filter = _shared_components_entity_filter_entity_filter_component__WEBPACK_IMPORTED_MODULE_7__.EntityFilterComponent;
          break;
        case _shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_13__.DataTypeCatalog.DateTime:
          colDef.useTimePicker = column.Metadata?.DateTime?.UseTimePicker ?? false;
          colDef.valueGetter = this.valueGetterDateTime;
          colDef.filter = 'agTextColumnFilter';
          break;
        case _shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_13__.DataTypeCatalog.Boolean:
          colDef.valueGetter = this.valueGetterBoolean;
          colDef.filter = _shared_components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_6__.BooleanFilterComponent;
          break;
        case _shared_fields_data_type_catalog__WEBPACK_IMPORTED_MODULE_13__.DataTypeCatalog.Number:
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
  #urlToClone(item) {
    return this.#dialogRouter.urlSubRoute(`edit/${(0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_14__.convertFormToUrl)({
      items: [_shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_16__.EditPrep.copy(this.#contentTypeStaticName, item.Id)]
    })}`);
  }
  export(item) {
    this.#contentExportSvc.exportEntity(item.Id, this.#contentTypeStaticName, true);
  }
  delete(item) {
    if (!confirm(`Delete '${item._Title}' (${item._RepositoryId})?`)) return;
    this.snackBar.open('Deleting...');
    this.#entitiesSvc.delete(this.#contentTypeStaticName, item._RepositoryId, false).subscribe({
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
        this.#entitiesSvc.delete(this.#contentTypeStaticName, item._RepositoryId, true).subscribe(() => {
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
  static {
    this.ɵfac = function ContentItemsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ContentItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_30__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_30__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineComponent"]({
      type: ContentItemsComponent,
      selectors: [["app-content-items"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵStandaloneFeature"]],
      decls: 38,
      vars: 10,
      consts: [["appToggleDebug", "", 1, "eav-dialog", "nav-component-wrapper"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [1, "eav-dialog-content", "nav-component-wrapper"], [3, "innerHTML"], [1, "grid-wrapper"], ["appDragAndDrop", "", 1, "ag-theme-material", 3, "gridReady", "filesDropped", "rowData", "gridOptions", "allowedFileTypes"], [1, "eav-dialog-actions"], [1, "eav-dialog-actions-div"], ["mat-button", "", "tippy", "Export xml list", "tippyPlacement", "top", 1, "eav-button__with-icon", 3, "href"], [1, "eav-icon"], ["mat-button", "", "tippy", "Import xml list", "tippyPlacement", "top", 1, "eav-button__with-icon", 3, "href"], ["mat-button", "", "tippy", "Import single json item", "tippyPlacement", "top", 1, "eav-button__with-icon", 3, "href"], ["mat-button", "", "tippy", "Create metadata", "tippyPlacement", "top", 1, "eav-button__with-icon", 3, "click"], ["mat-button", "", "color", "accent", "tippy", "Print filter to console", "tippyPlacement", "top", 1, "eav-button__with-icon"], ["mat-fab", "", "mat-elevation-z24", "", "tippy", "Add item", 1, "grid-fab", 3, "href"], ["mat-button", "", "color", "accent", "tippy", "Print filter to console", "tippyPlacement", "top", 1, "eav-button__with-icon", 3, "click"]],
      template: function ContentItemsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵlistener"]("click", function ContentItemsComponent_Template_button_click_4_listener() {
            return ctx.closeDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](5, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtext"](6, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](7, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelement"](8, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtemplate"](9, ContentItemsComponent_Conditional_9_Template, 2, 3, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](10, "div", 6)(11, "ag-grid-angular", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵlistener"]("gridReady", function ContentItemsComponent_Template_ag_grid_angular_gridReady_11_listener($event) {
            return ctx.onGridReady($event);
          })("filesDropped", function ContentItemsComponent_Template_ag_grid_angular_filesDropped_11_listener($event) {
            return ctx.filesDropped($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](12, "mat-dialog-actions", 8)(13, "div", 9)(14, "a", 10)(15, "mat-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtext"](16, "cloud_download");
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](17, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtext"](18, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](19, "a", 12)(20, "mat-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtext"](21, "cloud_upload");
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](22, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtext"](23, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](24, "a", 13)(25, "mat-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtext"](26, "cloud_upload");
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](27, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtext"](28, "Item");
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](29, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵlistener"]("click", function ContentItemsComponent_Template_button_click_29_listener() {
            return ctx.createMetadata();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](30, "mat-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtext"](31, "local_offer");
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](32, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtext"](33, "Create Metadata");
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtemplate"](34, ContentItemsComponent_Conditional_34_Template, 5, 0, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](35, "a", 16)(36, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtext"](37, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_0_0;
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtextInterpolate1"]("", ((tmp_0_0 = ctx.contentType()) == null ? null : tmp_0_0.Label) || ((tmp_0_0 = ctx.contentType()) == null ? null : tmp_0_0.Name), " Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵconditional"]((tmp_1_0 = (tmp_1_0 = ctx.contentType()) == null ? null : tmp_1_0.Properties == null ? null : tmp_1_0.Properties.ListInstructions) ? 9 : -1, tmp_1_0);
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("rowData", ctx.items()())("gridOptions", ctx.gridOptions)("allowedFileTypes", "xml,json");
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("href", ctx.urlToExportContent(), _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("href", ctx.urlToImportContent(), _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("href", ctx.urlToImportItem(), _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵconditional"](ctx.isDebug() ? 34 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("href", ctx.urlToNewItem(), _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsanitizeUrl"]);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatFabAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_35__.RouterOutlet, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogActions, _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_18__.SafeHtmlPipe, _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_10__.DragAndDropDirective, _shared_directives_toggle_debug_directive__WEBPACK_IMPORTED_MODULE_12__.ToggleDebugDirective, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_17__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_36__.AgGridAngular, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_11__.TippyDirective],
      encapsulation: 2
    });
  }
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
  if (!urlFilters) return;
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
  if (!filters) return;
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 63617);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _app_administration_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app-administration/services */ 75445);
/* harmony import */ var _edit_shared_controls_ui_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../edit/shared/controls/ui-control */ 88857);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/base.component */ 43176);
/* harmony import */ var _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/field-hint/field-hint.component */ 43758);
/* harmony import */ var _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/constants/dropdown-insert-value.constant */ 5858);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/directives/click-stop-propagation.directive */ 39333);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_rxJs_mapUntilChanged__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/rxJs/mapUntilChanged */ 48021);
/* harmony import */ var _shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/rxJs/rx.helpers */ 93826);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _services_content_items_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/content-items.service */ 336);
/* harmony import */ var _metadata_key_validator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./metadata-key.validator */ 98973);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37580);




































const _c0 = a0 => ({
  active: a0
});
function CreateMetadataDialogComponent_Conditional_0_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", option_r2.targetType);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", option_r2.label, " ");
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", vm_r3.formValues.targetType);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", vm_r3.formValues.targetType, " ");
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrepeaterCreate"](1, CreateMetadataDialogComponent_Conditional_0_Conditional_14_For_2_Template, 2, 2, "mat-option", 12, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, CreateMetadataDialogComponent_Conditional_0_Conditional_14_Conditional_3_Template, 2, 2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrepeater"](ctx_r3.targetTypeOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](vm_r3.unknownTargetType ? 3 : -1);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "input", 9);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-field-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Warning: you entered an unknown target type. This may work or may not. Please be sure you know what you're doing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("isError", false);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-field-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("isError", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](vm_r3.targetTypeHint);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-field-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("isError", true);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-field-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Must be a whole number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("isError", true);
  }
}
function CreateMetadataDialogComponent_Conditional_0_For_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", option_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", option_r5, " ");
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-field-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("isError", true);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_27_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contentType_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", contentType_r6.NameId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", contentType_r6.Label, " ");
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-form-field", 7)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Content Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "mat-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrepeaterCreate"](4, CreateMetadataDialogComponent_Conditional_0_Conditional_27_For_5_Template, 2, 2, "mat-option", 12, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("placeholder", !vm_r3.contentTypes.length ? "No items found" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrepeater"](vm_r3.contentTypes);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_28_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scopeOption_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", scopeOption_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", scopeOption_r7.name, " ");
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-form-field", 7)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Scope");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "mat-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrepeaterCreate"](4, CreateMetadataDialogComponent_Conditional_0_Conditional_28_For_5_Template, 2, 2, "mat-option", 12, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Other...");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("placeholder", !vm_r3.scopeOptions.length ? "No items found" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrepeater"](vm_r3.scopeOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx_r3.dropdownInsertValue);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_0_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", item_r8.Guid);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", item_r8.Title, " (", item_r8.Id, ") ");
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrepeaterCreate"](1, CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_0_Conditional_0_For_2_Template, 2, 3, "mat-option", 12, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("placeholder", !vm_r3.contentItems.length ? "No items found" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrepeater"](vm_r3.contentItems);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "input", 22);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_0_Conditional_0_Template, 3, 1, "mat-select", 21)(1, CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_0_Conditional_1_Template, 1, 0, "input", 22);
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](vm_r3.guidedKey ? 0 : 1);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_1_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contentType_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", contentType_r9.NameId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", contentType_r9.Label, " ");
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrepeaterCreate"](1, CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_1_Conditional_0_For_2_Template, 2, 2, "mat-option", 12, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("placeholder", !vm_r3.contentTypes.length ? "No items found" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrepeater"](vm_r3.contentTypes);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "input", 22);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_1_Conditional_0_Template, 3, 1, "mat-select", 21)(1, CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_1_Conditional_1_Template, 1, 0, "input", 22);
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](vm_r3.guidedKey ? 0 : 1);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainer"](0);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_2_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    const defaultKeyInput_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngTemplateOutlet", defaultKeyInput_r10);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_0_Template, 2, 1)(1, CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_1_Template, 2, 1)(2, CreateMetadataDialogComponent_Conditional_0_Conditional_36_Case_2_Template, 1, 1, "ng-container");
  }
  if (rf & 2) {
    let tmp_4_0;
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"]((tmp_4_0 = vm_r3.formValues.targetType) === ctx_r3.eavConstants.metadata.entity.targetType ? 0 : tmp_4_0 === ctx_r3.eavConstants.metadata.contentType.targetType ? 1 : 2);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_37_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "input", 22);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_37_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "input", 24);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, CreateMetadataDialogComponent_Conditional_0_Conditional_37_Conditional_0_Template, 1, 0, "input", 22)(1, CreateMetadataDialogComponent_Conditional_0_Conditional_37_Conditional_1_Template, 1, 0, "input", 24);
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](vm_r3.formValues.keyType !== ctx_r3.eavConstants.keyTypes.number ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](vm_r3.formValues.keyType === ctx_r3.eavConstants.keyTypes.number ? 1 : -1);
  }
}
function CreateMetadataDialogComponent_Conditional_0_ng_template_38_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "input", 22);
  }
}
function CreateMetadataDialogComponent_Conditional_0_ng_template_38_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "input", 24);
  }
}
function CreateMetadataDialogComponent_Conditional_0_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, CreateMetadataDialogComponent_Conditional_0_ng_template_38_Conditional_0_Template, 1, 0, "input", 22)(1, CreateMetadataDialogComponent_Conditional_0_ng_template_38_Conditional_1_Template, 1, 0, "input", 24);
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](vm_r3.formValues.keyType !== ctx_r3.eavConstants.keyTypes.number ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](vm_r3.formValues.keyType === ctx_r3.eavConstants.keyTypes.number ? 1 : -1);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 14)(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function CreateMetadataDialogComponent_Conditional_0_Conditional_40_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r11);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r3.toggleGuidedKey(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function CreateMetadataDialogComponent_Conditional_0_Conditional_40_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r11);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r3.toggleGuidedKey(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "text_fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](2, _c0, vm_r3.guidedKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](4, _c0, !vm_r3.guidedKey));
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-field-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("isError", true);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-field-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Must be a whole number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("isError", true);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-field-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Must be a valid GUID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("isError", true);
  }
}
function CreateMetadataDialogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Create Metadata");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 4)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, " This is a special operation to add an item which is metadata for another item, see ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "docs");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "form", 6)(11, "mat-form-field", 7)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "Target");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, CreateMetadataDialogComponent_Conditional_0_Conditional_14_Template, 4, 1, "mat-select", 8)(15, CreateMetadataDialogComponent_Conditional_0_Conditional_15_Template, 1, 0, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, CreateMetadataDialogComponent_Conditional_0_Conditional_16_Template, 2, 1, "app-field-hint", 10)(17, CreateMetadataDialogComponent_Conditional_0_Conditional_17_Template, 2, 2, "app-field-hint", 10)(18, CreateMetadataDialogComponent_Conditional_0_Conditional_18_Template, 2, 1, "app-field-hint", 10)(19, CreateMetadataDialogComponent_Conditional_0_Conditional_19_Template, 2, 1, "app-field-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "mat-form-field", 7)(21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22, "Key type");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrepeaterCreate"](24, CreateMetadataDialogComponent_Conditional_0_For_25_Template, 2, 2, "mat-option", 12, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](26, CreateMetadataDialogComponent_Conditional_0_Conditional_26_Template, 2, 1, "app-field-hint", 10)(27, CreateMetadataDialogComponent_Conditional_0_Conditional_27_Template, 6, 1, "mat-form-field", 7)(28, CreateMetadataDialogComponent_Conditional_0_Conditional_28_Template, 8, 2, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "app-field-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30, " The scope should almost never be changed - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](32, "see help");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "mat-form-field", 7)(34, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](35, "Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](36, CreateMetadataDialogComponent_Conditional_0_Conditional_36_Template, 3, 1)(37, CreateMetadataDialogComponent_Conditional_0_Conditional_37_Template, 2, 2)(38, CreateMetadataDialogComponent_Conditional_0_ng_template_38_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"])(40, CreateMetadataDialogComponent_Conditional_0_Conditional_40_Template, 7, 6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](41, CreateMetadataDialogComponent_Conditional_0_Conditional_41_Template, 2, 1, "app-field-hint", 10)(42, CreateMetadataDialogComponent_Conditional_0_Conditional_42_Template, 2, 1, "app-field-hint", 10)(43, CreateMetadataDialogComponent_Conditional_0_Conditional_43_Template, 2, 1, "app-field-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "mat-dialog-actions", 15)(45, "mat-slide-toggle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function CreateMetadataDialogComponent_Conditional_0_Template_mat_slide_toggle_change_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r3.toggleGuidedMode($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "div")(48, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function CreateMetadataDialogComponent_Conditional_0_Template_button_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r3.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](49, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function CreateMetadataDialogComponent_Conditional_0_Template_button_click_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r3.confirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](51, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const vm_r3 = ctx;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r3.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](vm_r3.guidedMode ? 14 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](!vm_r3.guidedMode ? 15 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](ctx_r3.form.controls["targetType"].touched && !ctx_r3.form.controls["targetType"].invalid && vm_r3.unknownTargetType ? 16 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](vm_r3.targetTypeHint ? 17 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](ctx_r3.form.controls["targetType"].touched && (ctx_r3.form.controls["targetType"].errors == null ? null : ctx_r3.form.controls["targetType"].errors.required) ? 18 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](ctx_r3.form.controls["targetType"].touched && (ctx_r3.form.controls["targetType"].errors == null ? null : ctx_r3.form.controls["targetType"].errors.pattern) ? 19 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrepeater"](vm_r3.keyTypeOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](ctx_r3.form.controls["keyType"].touched && (ctx_r3.form.controls["keyType"].errors == null ? null : ctx_r3.form.controls["keyType"].errors.required) ? 26 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](vm_r3.guidedMode && vm_r3.formValues.targetType === ctx_r3.eavConstants.metadata.entity.targetType ? 27 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](vm_r3.guidedMode && (vm_r3.formValues.targetType === ctx_r3.eavConstants.metadata.entity.targetType || vm_r3.formValues.targetType === ctx_r3.eavConstants.metadata.contentType.targetType) ? 28 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](vm_r3.guidedMode ? 36 : 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](vm_r3.guidedMode && vm_r3.guidedKeyExists ? 40 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](ctx_r3.form.controls["key"].touched && (ctx_r3.form.controls["key"].errors == null ? null : ctx_r3.form.controls["key"].errors.required) ? 41 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](ctx_r3.form.controls["key"].touched && (ctx_r3.form.controls["key"].errors == null ? null : ctx_r3.form.controls["key"].errors.patternWholeNumber) ? 42 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](ctx_r3.form.controls["key"].touched && (ctx_r3.form.controls["key"].errors == null ? null : ctx_r3.form.controls["key"].errors.patternGuid) ? 43 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("tippy", vm_r3.guidedMode ? "Guided mode helps you select options that work" : "Manual mode is for advanced uses and allows you to insert any values")("checked", vm_r3.guidedMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", vm_r3.guidedMode ? "Guided" : "Manual", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx_r3.form.valid);
  }
}
class CreateMetadataDialogComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__.BaseComponent {
  constructor(dialog, context) {
    super();
    this.dialog = dialog;
    this.context = context;
    this.hostClass = 'dialog-component';
    this.eavConstants = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__.eavConstants;
    this.dropdownInsertValue = _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_5__.dropdownInsertValue;
    this.contentItemsService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_content_items_service__WEBPACK_IMPORTED_MODULE_12__.ContentItemsService);
    this.contentTypesService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_app_administration_services__WEBPACK_IMPORTED_MODULE_1__.ContentTypesService);
  }
  ngOnInit() {
    this.targetTypeOptions = Object.values(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__.eavConstants.metadata).map(option => ({
      ...option
    }));
    this.keyTypeOptions = Object.values(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__.eavConstants.keyTypes);
    this.keyTypeOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject([]);
    this.scopeOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject([]);
    this.guidedMode$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject(true);
    this.contentItems$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject([]);
    this.contentTypes$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject([]);
    this.guidedKey$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject(true);
    this.fetchScopes();
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.UntypedFormGroup({});
    this.form.addControl('targetType', new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.UntypedFormControl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__.eavConstants.metadata.entity.targetType, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(/^[0-9]+$/)]));
    this.form.addControl('keyType', new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.UntypedFormControl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__.eavConstants.metadata.entity.keyType, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]));
    this.form.addControl('contentTypeForContentItems', new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.UntypedFormControl(null));
    this.form.addControl('scopeForContentTypes', new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.UntypedFormControl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__.eavConstants.scopes.default.value));
    this.form.addControl('key', new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, (0,_metadata_key_validator__WEBPACK_IMPORTED_MODULE_13__.metadataKeyValidator)(this.form)]));
    this.subscriptions.add(this.form.controls['scopeForContentTypes'].valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.startWith)(this.form.controls['scopeForContentTypes'].value), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)()).subscribe(newScope => {
      if (this.form.controls['contentTypeForContentItems'].value != null) {
        this.form.controls['contentTypeForContentItems'].patchValue(null);
      }
      if (newScope === _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_5__.dropdownInsertValue) {
        newScope = prompt('This is an advanced feature to show content-types of another scope. Don\'t use this if you don\'t know what you\'re doing, as content-types of other scopes are usually hidden for a good reason.') || _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__.eavConstants.scopes.default.value;
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
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.merge)(this.form.controls['targetType'].valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)()), this.form.controls['keyType'].valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)())).subscribe(() => {
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
    this.subscriptions.add(this.form.controls['contentTypeForContentItems'].valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.startWith)(this.form.controls['contentTypeForContentItems'].value), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)()).subscribe(contentTypeStaticName => {
      const formValues = this.form.getRawValue();
      if (formValues.targetType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__.eavConstants.metadata.entity.targetType && formValues.key != null) {
        const updatedForm = {
          key: null
        };
        this.form.patchValue(updatedForm);
      }
      this.contentItemsService.getAll(contentTypeStaticName).subscribe(items => {
        this.contentItems$.next(items);
      });
    }));
    const formValues$ = this.form.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.startWith)(this.form.getRawValue()), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.map)(() => this.form.getRawValue()), (0,_shared_rxJs_mapUntilChanged__WEBPACK_IMPORTED_MODULE_9__.mapUntilObjChanged)(m => m)
    // distinctUntilChanged(RxHelpers.objectsEqual),
    );
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)([formValues$, this.guidedMode$]).subscribe(([formValues, guidedMode]) => {
      // keyTypeOptions depend on targetType and advanced
      const foundTargetType = this.targetTypeOptions.find(option => option.targetType === formValues.targetType);
      const keyTypeOptions = guidedMode && foundTargetType ? [foundTargetType.keyType] : [...this.keyTypeOptions];
      if (!_shared_rxJs_rx_helpers__WEBPACK_IMPORTED_MODULE_10__.RxHelpers.arraysEqual(keyTypeOptions, this.keyTypeOptions$.value)) this.keyTypeOptions$.next(keyTypeOptions);
      // update form if keyType is not available
      const updatedForm = {};
      if (!this.keyTypeOptions$.value.includes(formValues.keyType)) updatedForm.keyType = this.keyTypeOptions$.value[0];
      // if target is app key must be current app id
      const isAppMetadata = guidedMode && formValues.targetType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__.eavConstants.metadata.app.targetType;
      if (isAppMetadata && formValues.key !== this.context.appId) updatedForm.key = this.context.appId;
      if (Object.keys(updatedForm).length) this.form.patchValue(updatedForm);
      const keyTypeDisabled = guidedMode && this.keyTypeOptions$.value.length <= 1;
      _edit_shared_controls_ui_control__WEBPACK_IMPORTED_MODULE_2__.UiControl.disable(this.form.controls['keyType'], keyTypeDisabled);
      _edit_shared_controls_ui_control__WEBPACK_IMPORTED_MODULE_2__.UiControl.disable(this.form.controls['key'], isAppMetadata);
    }));
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)([this.guidedMode$, this.keyTypeOptions$, this.scopeOptions$, this.contentItems$, this.contentTypes$]), (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)([formValues$, this.guidedKey$])]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.map)(([[guidedMode, keyTypeOptions, scopeOptions, contentItems, contentTypes], [formValues, guidedKey]]) => {
      const viewModel = {
        guidedMode,
        unknownTargetType: !this.targetTypeOptions.some(option => option.targetType === formValues.targetType),
        targetTypeHint: guidedMode && this.targetTypeOptions.find(option => option.targetType === formValues.targetType)?.hint,
        keyTypeOptions,
        scopeOptions,
        guidedKey,
        guidedKeyExists: [_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__.eavConstants.metadata.entity.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__.eavConstants.metadata.contentType.targetType].includes(formValues.targetType),
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
    this.dialog.close(result);
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
      key: formValues.keyType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__.eavConstants.keyTypes.guid ? formValues.key.replace(/{|}/g, '') : formValues.key.toString()
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
  static {
    this.ɵfac = function CreateMetadataDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CreateMetadataDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_11__.Context));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
      type: CreateMetadataDialogComponent,
      selectors: [["app-create-metadata-dialog"]],
      hostVars: 1,
      hostBindings: function CreateMetadataDialogComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["defaultKeyInput", ""], [1, "eav-dialog"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], [1, "eav-dialog-content"], ["href", "https://go.2sxc.org/metadata", "target", "_blank"], [3, "formGroup"], ["color", "accent", 2, "width", "100%", "margin-bottom", "8px"], ["formControlName", "targetType", "required", ""], ["matInput", "", "type", "number", "min", "0", "formControlName", "targetType", "required", ""], [3, "isError"], ["formControlName", "keyType", "required", ""], [3, "value"], ["href", "https://2sxc.org/help?tag=scope", "target", "_blank", "appClickStopPropagation", ""], ["matTextSuffix", "", 1, "eav-selection-suffix"], [1, "eav-dialog-actions"], ["color", "accent", 3, "change", "tippy", "checked"], ["mat-raised-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click", "disabled"], ["formControlName", "contentTypeForContentItems", 3, "placeholder"], ["formControlName", "scopeForContentTypes", 3, "placeholder"], ["formControlName", "key", "required", "", 3, "placeholder"], ["matInput", "", "type", "text", "formControlName", "key", "required", ""], [4, "ngTemplateOutlet"], ["matInput", "", "type", "number", "formControlName", "key", "required", ""], ["mat-icon-button", "", "type", "button", "tippy", "Pick existing value", 1, "eav-selection-suffix-button", 3, "click", "ngClass"], [1, "eav-icon"], ["mat-icon-button", "", "type", "button", "tippy", "Manual entry", 1, "eav-selection-suffix-button", 3, "click", "ngClass"]],
      template: function CreateMetadataDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, CreateMetadataDialogComponent_Conditional_0_Template, 52, 19, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"]((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatOptionModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInput, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgTemplateOutlet, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatIconButton, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogActions, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggle, _angular_common__WEBPACK_IMPORTED_MODULE_27__.AsyncPipe, _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_4__.FieldHintComponent, _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_7__.ClickStopPropagationDirective, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_8__.TippyDirective],
      encapsulation: 2
    });
  }
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
    if (!this.isFilterActive()) return;
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
  static {
    this.ɵfac = function PubMetaFilterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PubMetaFilterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
}

/***/ }),

/***/ 336:
/*!*********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-items/services/content-items.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentItemsService: () => (/* binding */ ContentItemsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 95429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_fields_content_types_fields_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/fields/content-types-fields.service */ 75959);
/* harmony import */ var _shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/helpers/file-to-base64.helper */ 70693);
/* harmony import */ var _shared_services_entity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/entity.service */ 9234);
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);







class ContentItemsService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_3__.HttpServiceBase {
  getAll(contentTypeStaticName) {
    return this.getHttpApiUrl(_shared_services_entity_service__WEBPACK_IMPORTED_MODULE_2__.webApiEntityList, {
      params: {
        appId: this.appId,
        contentType: contentTypeStaticName
      }
    });
  }
  getAllSig(contentTypeStaticName, initial) {
    return this.getSignal(_shared_services_entity_service__WEBPACK_IMPORTED_MODULE_2__.webApiEntityList, {
      params: {
        appId: this.appId,
        contentType: contentTypeStaticName
      }
    }, initial);
  }
  getColumns(contentTypeStaticName) {
    return this.getHttpApiUrl(_shared_fields_content_types_fields_service__WEBPACK_IMPORTED_MODULE_0__.webApiFieldsAll, {
      params: {
        appId: this.appId,
        staticName: contentTypeStaticName
      }
    });
  }
  importItem(file) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)((0,_shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_1__.toBase64)(file)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(fileBase64 => {
      return this.http.post(this.apiUrl(_shared_services_entity_service__WEBPACK_IMPORTED_MODULE_2__.webApiEntityRoot + 'upload'), {
        AppId: this.appId,
        ContentBase64: fileBase64
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(success => {
      const result = {
        Success: success,
        Messages: []
      };
      return result;
    }));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵContentItemsService_BaseFactory;
      return function ContentItemsService_Factory(__ngFactoryType__) {
        return (ɵContentItemsService_BaseFactory || (ɵContentItemsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](ContentItemsService)))(__ngFactoryType__ || ContentItemsService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: ContentItemsService,
      factory: ContentItemsService.ɵfac
    });
  }
}

/***/ }),

/***/ 21183:
/*!******************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/ag-grid/ag-grid-helper.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgGridHelper: () => (/* binding */ AgGridHelper)
/* harmony export */ });
class AgGridHelper {
  static cellLink(link, body, classes) {
    return `<a class="default-link fill-cell ${classes}" href="${link}">${body}</a>`;
  }
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
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 95541);
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
    if (!this.isFilterActive()) return;
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
  static {
    this.ɵfac = function EntityFilterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EntityFilterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_2__.MatRadioModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 16px 12px;\n  padding-bottom: 2px;\n}\n\n.mat-mdc-form-field[_ngcontent-%COMP%] {\n  display: block;\n  width: 175px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2VudGl0eS1maWx0ZXIvZW50aXR5LWZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDE2cHggMTJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG4ubWF0LW1kYy1mb3JtLWZpZWxkIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTc1cHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 24950);





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
    this.isError = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(false);
    this.isShort = true;
  }
  toggleIsShort() {
    this.isShort = !this.isShort;
  }
  static {
    this.ɵfac = function FieldHintComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FieldHintComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FieldHintComponent,
      selectors: [["app-field-hint"]],
      inputs: {
        isError: [1, "isError"]
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldHintComponent_Case_1_Template, 2, 1, "mat-hint")(2, FieldHintComponent_Case_2_Template, 2, 1, "mat-error");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FieldHintComponent_ng_template_3_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx.isShort));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((tmp_2_0 = ctx.isError()) === false ? 1 : tmp_2_0 === true ? 2 : -1);
        }
      },
      dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatError, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet],
      styles: [".hint-box[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], \n.hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: block;\n}\n.hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], \n.hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZpZWxkLWhpbnQvZmllbGQtaGludC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjtBQUNFOztFQUVFLGVBQUE7RUFDQSxjQUFBO0FBQ0o7QUFHSTs7RUFFRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFETiIsInNvdXJjZXNDb250ZW50IjpbIi5oaW50LWJveCB7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG5cclxuICAubWF0LW1kYy1mb3JtLWZpZWxkLWhpbnQsXHJcbiAgLm1hdC1tZGMtZm9ybS1maWVsZC1lcnJvciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICZfX3Nob3J0IHtcclxuICAgIC5tYXQtbWRjLWZvcm0tZmllbGQtaGludCxcclxuICAgIC5tYXQtbWRjLWZvcm0tZmllbGQtZXJyb3Ige1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5858:
/*!************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/constants/dropdown-insert-value.constant.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dropdownInsertValue: () => (/* binding */ dropdownInsertValue)
/* harmony export */ });
const dropdownInsertValue = 'DROPDOWN_INSERT_VALUE';

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
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logging */ 34435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class ClickStopPropagationDirective {
  // Log constructor to detect that it was really attached/created
  constructor() {
    this.log = (0,_logging__WEBPACK_IMPORTED_MODULE_0__.classLog)({
      ClickStopPropagationDirective
    });
    this.log.a('constructor');
  }
  onClick(event) {
    this.log.a('onClick', {
      event
    });
    event.stopPropagation();
    // This should never be added here, as it's often on a link, and the default behavior (link open) should happen
    // event.preventDefault();
  }
  static {
    this.ɵfac = function ClickStopPropagationDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClickStopPropagationDirective)();
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: ClickStopPropagationDirective,
      selectors: [["", "appClickStopPropagation", ""]],
      hostBindings: function ClickStopPropagationDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClickStopPropagationDirective_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
      },
      standalone: true
    });
  }
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
/* harmony import */ var _services_global_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/global-config.service */ 39431);
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
  static {
    this.ɵfac = function ToggleDebugDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ToggleDebugDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_global_config_service__WEBPACK_IMPORTED_MODULE_0__.GlobalConfigService));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
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
}

/***/ }),

/***/ 1726:
/*!********************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/fields/data-type-catalog.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataTypeCatalog: () => (/* binding */ DataTypeCatalog)
/* harmony export */ });
const DataTypeCatalog = {
  Boolean: 'Boolean',
  Custom: 'Custom',
  DateTime: 'DateTime',
  Empty: 'Empty',
  Entity: 'Entity',
  Hyperlink: 'Hyperlink',
  Number: 'Number',
  String: 'String'
} /* the as const ensures that the keys/values can be strictly checked */;

/***/ }),

/***/ 60852:
/*!**************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/routing/dialog-routing.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogRoutingService: () => (/* binding */ DialogRoutingService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5057);
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logging */ 34435);
/* harmony import */ var _services_service_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/service-base */ 4979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);






const logSpecs = {
  doOnDialogClosed: true
};
/**
 * Helper to handle dialog routings, especially:
 * 1. handling on-child-closed events (it also takes care of subscriptions)
 * 2. accessing the router and route - a very common task when you have dialogs
 */
class DialogRoutingService extends _services_service_base__WEBPACK_IMPORTED_MODULE_1__.ServiceBase {
  constructor(router, route) {
    super();
    this.router = router;
    this.route = route;
    this.log = (0,_logging__WEBPACK_IMPORTED_MODULE_0__.classLog)({
      DialogRoutingService
    }, logSpecs);
  }
  get snapshot() {
    return this.route.snapshot;
  }
  get url() {
    return this.router.url;
  }
  getParam(key) {
    return this.route.snapshot.paramMap.get(key);
  }
  getParams(keys) {
    const paramMap = this.route.snapshot.paramMap;
    return keys.reduce((acc, key) => {
      acc[key] = paramMap.get(key);
      return acc;
    }, {});
  }
  getQueryParam(key) {
    return this.route.snapshot.queryParamMap.get(key);
  }
  getQueryParams(keys) {
    const queryParamMap = this.route.snapshot.queryParamMap;
    return keys.reduce((acc, key) => {
      acc[key] = queryParamMap.get(key);
      return acc;
    }, {});
  }
  state() {
    return this.router.getCurrentNavigation().extras?.state;
  }
  /**
   * Preferred way to register a callback, since the caller doesn't need to worry about subscriptions.
   */
  doOnDialogClosed(callback) {
    const l = this.log.fnIf('doOnDialogClosed');
    this.subscriptions.add(this.childDialogClosed$().subscribe(() => callback()));
    l.end();
  }
  /**
   * Get the URL for a sub-route of the current route.
   */
  urlSubRoute(params) {
    const tree = this.router.createUrlTree([params], {
      relativeTo: this.route
    });
    const routeUrl = this.router.serializeUrl(tree);
    return routeUrl;
  }
  /**
   * Navigate to a new route.
   * Just looks a bit simpler than the internal array notation.
   */
  navPath(url, extras) {
    return this.router.navigate([url], extras);
  }
  /**
   * Navigate relative to the current route.
   */
  navRelative(commands, extras) {
    return this.router.navigate(commands, {
      ...extras,
      relativeTo: this.route
    });
  }
  childDialogClosed$() {
    return this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.startWith)(!!this.route.snapshot.firstChild), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(() => !!this.route.snapshot.firstChild), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.pairwise)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(([hadChildBefore, hasChildNow]) => hadChildBefore && !hasChildNow));
  }
  static {
    this.ɵfac = function DialogRoutingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DialogRoutingService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: DialogRoutingService,
      factory: DialogRoutingService.ɵfac
    });
  }
}

/***/ }),

/***/ 48021:
/*!****************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/rxJs/mapUntilChanged.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mapUntilChanged: () => (/* binding */ mapUntilChanged),
/* harmony export */   mapUntilObjChanged: () => (/* binding */ mapUntilObjChanged)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 95682);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 91817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var lodash_es_isEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/isEqual */ 92434);



/**
 * Combine map and distinctUntilChanged, as this is a very common pattern.
 * @param fn the mapping function
 * @returns
 */
function mapUntilChanged(fn) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(fn), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.distinctUntilChanged)());
}
function mapUntilObjChanged(fn) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.distinctUntilChanged)(lodash_es_isEqual__WEBPACK_IMPORTED_MODULE_3__["default"]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(fn), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.distinctUntilChanged)(lodash_es_isEqual__WEBPACK_IMPORTED_MODULE_3__["default"]));
}

/***/ }),

/***/ 93826:
/*!***********************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/rxJs/rx.helpers.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RxHelpers: () => (/* binding */ RxHelpers)
/* harmony export */ });
class RxHelpers {
  static boolEquals(x, y) {
    return x === y;
  }
  static stringEquals(x, y) {
    return x === y;
  }
  static valueEquals(x, y) {
    return x === y;
  }
  static objectsEqual(x, y) {
    if (x == null || y == null) return x === y;
    const obj1 = x;
    const obj2 = y;
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    const equal = keys1.every(key1 => {
      if (!obj2.hasOwnProperty(key1)) return false;
      return obj1[key1] === obj2[key1];
    });
    return equal;
  }
  static arraysEqual(x, y) {
    if (x == null || y == null) return x === y;
    if (x.length !== y.length) return false;
    const equal = x.every((item, index) => {
      return x[index] === y[index];
    });
    return equal;
  }
  /** used as .filter(distinct), filters array to only have distinct values */
  static distinct(value, index, array) {
    return array.indexOf(value) === index;
  }
}

/***/ }),

/***/ 96817:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/services/entity-edit.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityEditService: () => (/* binding */ EntityEditService)
/* harmony export */ });
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity.service */ 9234);
/* harmony import */ var _http_service_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);



class EntityEditService extends _http_service_base__WEBPACK_IMPORTED_MODULE_1__.HttpServiceBase {
  create(contentType, entity) {
    return this.http.post(`app/auto/data/${contentType}`, entity, {
      params: {
        appId: this.appId,
        zoneId: this.zoneId
      }
    });
  }
  update(contentType, entityId, entity) {
    return this.http.post(`app/auto/data/${contentType}/${entityId}`, entity, {
      params: {
        appId: this.appId,
        zoneId: this.zoneId
      }
    });
  }
  delete(type, id, tryForce) {
    return this.http.delete(this.apiUrl(_entity_service__WEBPACK_IMPORTED_MODULE_0__.webApiEntityRoot + 'delete'), {
      params: {
        contentType: type,
        id: id.toString(),
        appId: this.appId,
        force: tryForce.toString()
      }
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵEntityEditService_BaseFactory;
      return function EntityEditService_Factory(__ngFactoryType__) {
        return (ɵEntityEditService_BaseFactory || (ɵEntityEditService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](EntityEditService)))(__ngFactoryType__ || EntityEditService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: EntityEditService,
      factory: EntityEditService.ɵfac
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_content-items_content-items_component_ts.js.map