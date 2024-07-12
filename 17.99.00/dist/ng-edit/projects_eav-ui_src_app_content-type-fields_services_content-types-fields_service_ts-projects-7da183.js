"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_content-type-fields_services_content-types-fields_service_ts-projects-7da183"],{

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

/***/ }),

/***/ 36475:
/*!***************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/metadata/confirm-delete-dialog/confirm-delete-dialog.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmDeleteDialogComponent: () => (/* binding */ ConfirmDeleteDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/pipes/safe-html.pipe */ 69914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);








function ConfirmDeleteDialogComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-card-subtitle", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r0.dialogData.message), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
class ConfirmDeleteDialogComponent {
  constructor(dialogData, dialogRef) {
    this.dialogData = dialogData;
    this.dialogRef = dialogRef;
    this.hostClass = 'dialog-component';
  }
  closeDialog(confirm) {
    this.dialogRef.close(confirm);
  }
  static #_ = this.ɵfac = function ConfirmDeleteDialogComponent_Factory(t) {
    return new (t || ConfirmDeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ConfirmDeleteDialogComponent,
    selectors: [["app-confirm-delete-dialog"]],
    hostVars: 1,
    hostBindings: function ConfirmDeleteDialogComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("className", ctx.hostClass);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 3,
    consts: [[3, "innerHtml"], ["align", "end"], ["mat-raised-button", "", 1, "eav-card-action-button", 3, "click"]],
    template: function ConfirmDeleteDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-header")(2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ConfirmDeleteDialogComponent_Conditional_4_Template, 2, 3, "mat-card-subtitle", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-actions", 1)(6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDeleteDialogComponent_Template_button_click_6_listener() {
          return ctx.closeDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDeleteDialogComponent_Template_button_click_8_listener() {
          return ctx.closeDialog(true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Delete ", ctx.dialogData.entityTitle, " (", ctx.dialogData.entityId, ")?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](4, ctx.dialogData.message ? 4 : -1);
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_0__.SafeHtmlPipe],
    styles: [".eav-card-action-button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL21ldGFkYXRhL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy9jb25maXJtLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmVhdi1jYXJkLWFjdGlvbi1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 39787:
/*!*****************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/metadata/metadata-actions/metadata-actions.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataActionsComponent: () => (/* binding */ MetadataActionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);





class MetadataActionsComponent {
  agInit(params) {
    this.params = params;
  }
  refresh(params) {
    return true;
  }
  deleteMetadata() {
    const metadata = this.params.data;
    this.params.onDelete(metadata);
  }
  static #_ = this.ɵfac = function MetadataActionsComponent_Factory(t) {
    return new (t || MetadataActionsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MetadataActionsComponent,
    selectors: [["app-metadata-actions"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 0,
    consts: [[1, "actions-component"], ["matRipple", "", "tippy", "Delete", 1, "eav-grid-action-button", "highlight", 3, "click"]],
    template: function MetadataActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MetadataActionsComponent_Template_div_click_1_listener() {
          return ctx.deleteMetadata();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 95883:
/*!***************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/metadata/metadata-content-type/metadata-content-type.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataContentTypeComponent: () => (/* binding */ MetadataContentTypeComponent)
/* harmony export */ });
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class MetadataContentTypeComponent {
  agInit(params) {
    this.value = params.value;
    this.metadata = params.data;
  }
  refresh(params) {
    return true;
  }
  static #_ = this.ɵfac = function MetadataContentTypeComponent_Factory(t) {
    return new (t || MetadataContentTypeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MetadataContentTypeComponent,
    selectors: [["app-metadata-content-type"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [[1, "container", 3, "tippy", "tippyDisabled"]],
    template: function MetadataContentTypeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tippy", ctx.metadata._Type.Description)("tippyDisabled", !ctx.metadata._Type.Description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.value, "\n");
      }
    },
    dependencies: [_shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
    styles: [".container[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL21ldGFkYXRhL21ldGFkYXRhLWNvbnRlbnQtdHlwZS9tZXRhZGF0YS1jb250ZW50LXR5cGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUFBLGtCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 99309:
/*!*************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/metadata/metadata-save-dialog/metadata-save-dialog.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataSaveDialogComponent: () => (/* binding */ MetadataSaveDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var _app_administration_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-administration/services */ 75445);
/* harmony import */ var _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants/dropdown-insert-value.constant */ 5858);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/field-hint/field-hint.component */ 43758);
/* harmony import */ var _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/directives/click-stop-propagation.directive */ 39333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 12587);





























const _c0 = a0 => ({
  "active": a0
});
function MetadataSaveDialogComponent_Conditional_0_Conditional_11_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scopeOption_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", scopeOption_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", scopeOption_r2.name, " ");
  }
}
function MetadataSaveDialogComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 2)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Scope");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](4, MetadataSaveDialogComponent_Conditional_0_Conditional_11_For_5_Template, 2, 2, "mat-option", 14, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Other...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "app-field-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " The scope should almost never be changed - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "see help");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", !vm_r3.scopeOptions.length ? "No items found" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](vm_r3.scopeOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r3.dropdownInsertValue);
  }
}
function MetadataSaveDialogComponent_Conditional_0_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contentType_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", contentType_r5.StaticName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", contentType_r5.Label, " ");
  }
}
function MetadataSaveDialogComponent_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1, MetadataSaveDialogComponent_Conditional_0_Conditional_15_For_2_Template, 2, 2, "mat-option", 14, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", !vm_r3.contentTypes.length ? "No items found" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](vm_r3.contentTypes);
  }
}
function MetadataSaveDialogComponent_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 4);
  }
}
function MetadataSaveDialogComponent_Conditional_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-field-hint", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isError", true);
  }
}
function MetadataSaveDialogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-header")(2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Create Metadata");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " This is a special operation to add an item which is metadata for another item, see ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "docs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-card-content")(10, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, MetadataSaveDialogComponent_Conditional_0_Conditional_11_Template, 12, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-form-field", 2)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Content Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, MetadataSaveDialogComponent_Conditional_0_Conditional_15_Template, 3, 1, "mat-select", 3)(16, MetadataSaveDialogComponent_Conditional_0_Conditional_16_Template, 1, 0, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 5)(18, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MetadataSaveDialogComponent_Conditional_0_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.toggleGuidedContentType(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MetadataSaveDialogComponent_Conditional_0_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.toggleGuidedContentType(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "text_fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, MetadataSaveDialogComponent_Conditional_0_Conditional_24_Template, 2, 1, "app-field-hint", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-card-actions", 9)(26, "mat-slide-toggle", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function MetadataSaveDialogComponent_Conditional_0_Template_mat_slide_toggle_change_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.toggleAdvancedMode($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div")(29, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MetadataSaveDialogComponent_Conditional_0_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MetadataSaveDialogComponent_Conditional_0_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.confirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, " Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r3.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](11, ctx_r3.advancedMode && ctx_r3.guidedContentType ? 11 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](15, ctx_r3.guidedContentType ? 15 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](16, !ctx_r3.guidedContentType ? 16 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c0, ctx_r3.guidedContentType));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c0, !ctx_r3.guidedContentType));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](24, ctx_r3.form.controls.contentType.touched && (ctx_r3.form.controls.contentType.errors == null ? null : ctx_r3.form.controls.contentType.errors.required) ? 24 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r3.advancedMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r3.advancedMode ? "Advanced" : "Simple", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r3.form.valid);
  }
}
class MetadataSaveDialogComponent {
  constructor(dialogRef, contentTypesService) {
    this.dialogRef = dialogRef;
    this.contentTypesService = contentTypesService;
    this.hostClass = 'dialog-component';
    this.dropdownInsertValue = _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_1__.dropdownInsertValue;
    this.guidedContentType = true;
    this.advancedMode = false;
  }
  ngOnInit() {
    this.contentTypes$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject([]);
    this.scopeOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject([]);
    this.buildForm();
    this.fetchScopes();
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this.contentTypes$, this.scopeOptions$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(([contentTypes, scopeOptions]) => {
      const viewModel = {
        contentTypes,
        scopeOptions
      };
      return viewModel;
    }));
  }
  ngOnDestroy() {
    this.contentTypes$.complete();
    this.scopeOptions$.complete();
  }
  closeDialog(contentType) {
    this.dialogRef.close(contentType);
  }
  toggleGuidedContentType(guidedContentType) {
    this.guidedContentType = guidedContentType;
  }
  toggleAdvancedMode(event) {
    this.advancedMode = event.checked;
  }
  confirm() {
    const formValues = this.form.getRawValue();
    this.closeDialog(formValues.contentType);
  }
  buildForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormGroup({});
    this.form.addControl('contentType', new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]));
    this.form.addControl('scope', new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormControl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_2__.eavConstants.scopes.default.value));
    this.form.controls.scope.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(this.form.controls.scope.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)()).subscribe(newScope => {
      // reset content types when scope changes
      if (this.form.controls.contentType.value != null) {
        this.form.controls.contentType.patchValue(null);
      }
      // add new scope on manual entry
      if (newScope === _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_1__.dropdownInsertValue) {
        newScope = prompt('This is an advanced feature to show content-types of another scope. Don\'t use this if you don\'t know what you\'re doing, as content-types of other scopes are usually hidden for a good reason.') || _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_2__.eavConstants.scopes.default.value;
        if (!this.scopeOptions$.value.some(option => option.value === newScope)) {
          const newScopeOption = {
            name: newScope,
            value: newScope
          };
          this.scopeOptions$.next([newScopeOption, ...this.scopeOptions$.value]);
        }
        this.form.controls.scope.patchValue(newScope);
      } else {
        this.fetchContentTypes(newScope);
      }
    });
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
  static #_ = this.ɵfac = function MetadataSaveDialogComponent_Factory(t) {
    return new (t || MetadataSaveDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_administration_services__WEBPACK_IMPORTED_MODULE_0__.ContentTypesService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: MetadataSaveDialogComponent,
    selectors: [["app-metadata-save-dialog"]],
    hostVars: 1,
    hostBindings: function MetadataSaveDialogComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵhostProperty"]("className", ctx.hostClass);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [["href", "https://go.2sxc.org/metadata", "target", "_blank"], [3, "formGroup"], ["color", "accent", 1, "eav-mat-form-field"], ["formControlName", "contentType", "required", "", 3, "placeholder"], ["matInput", "", "type", "text", "formControlName", "contentType", "required", ""], ["matTextSuffix", ""], ["mat-icon-button", "", "type", "button", "tippy", "Pick existing value", 3, "click", "ngClass"], ["mat-icon-button", "", "type", "button", "tippy", "Manual entry", 3, "click", "ngClass"], [3, "isError"], [1, "eav-card-actions"], ["color", "accent", 3, "change", "checked"], ["mat-raised-button", "", 1, "eav-card-action-button", 3, "click"], ["mat-raised-button", "", "color", "accent", 1, "eav-card-action-button", 3, "click", "disabled"], ["formControlName", "scope", 3, "placeholder"], [3, "value"], ["href", "https://2sxc.org/help?tag=scope", "target", "_blank", "appClickStopPropagation", ""]],
    template: function MetadataSaveDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, MetadataSaveDialogComponent_Conditional_0_Template, 33, 14, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOptionModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatIconButton, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__.MatSlideToggle, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe, _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_3__.FieldHintComponent, _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_4__.ClickStopPropagationDirective],
    styles: [".eav-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.eav-card-action-button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL21ldGFkYXRhL21ldGFkYXRhLXNhdmUtZGlhbG9nL21ldGFkYXRhLXNhdmUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmVhdi1jYXJkLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZWF2LWNhcmQtYWN0aW9uLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 14937:
/*!****************************************************************!*\
  !*** ./projects/eav-ui/src/app/metadata/metadata.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataComponent: () => (/* binding */ MetadataComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var _content_items_services_content_items_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../content-items/services/content-items.service */ 336);
/* harmony import */ var _content_items_services_entities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content-items/services/entities.service */ 57319);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../permissions */ 4096);
/* harmony import */ var _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/base-with-child-dialog.component */ 61735);
/* harmony import */ var _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/id-field/id-field.component */ 36378);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./confirm-delete-dialog/confirm-delete-dialog.component */ 36475);
/* harmony import */ var _metadata_actions_metadata_actions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./metadata-actions/metadata-actions.component */ 39787);
/* harmony import */ var _metadata_content_type_metadata_content_type_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./metadata-content-type/metadata-content-type.component */ 95883);
/* harmony import */ var _metadata_save_dialog_metadata_save_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./metadata-save-dialog/metadata-save-dialog.component */ 99309);
/* harmony import */ var _features_shared_base_feature_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../features/shared/base-feature.component */ 9006);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ecodev/fab-speed-dial */ 23183);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/logging/eav-logger */ 6812);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/pipes/safe-html.pipe */ 69914);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core */ 34447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);




































const _c0 = a0 => ({
  "fab-opened": a0
});
function MetadataComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](0, " This item is not metadata for anything else. ");
  }
}
function MetadataComponent_Conditional_0_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("Key Number: ", vm_r3.itemFor.KeyNumber, " ");
  }
}
function MetadataComponent_Conditional_0_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("Key Guid: ", vm_r3.itemFor.KeyGuid, " ");
  }
}
function MetadataComponent_Conditional_0_Conditional_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("Key String: ", vm_r3.itemFor.KeyString, " ");
  }
}
function MetadataComponent_Conditional_0_Conditional_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("Title: ", vm_r3.itemFor.Title, " ");
  }
}
function MetadataComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](0, " This item is metadata for: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, MetadataComponent_Conditional_0_Conditional_10_Conditional_5_Template, 2, 1)(6, MetadataComponent_Conditional_0_Conditional_10_Conditional_6_Template, 2, 1)(7, MetadataComponent_Conditional_0_Conditional_10_Conditional_7_Template, 2, 1)(8, MetadataComponent_Conditional_0_Conditional_10_Conditional_8_Template, 2, 1);
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("Target: ", vm_r3.itemFor.Target, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("TargetType: ", vm_r3.itemFor.TargetType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵconditional"](5, vm_r3.itemFor.KeyNumber ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵconditional"](6, vm_r3.itemFor.KeyGuid ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵconditional"](7, vm_r3.itemFor.KeyString ? 7 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵconditional"](8, vm_r3.itemFor.Title ? 8 : -1);
  }
}
function MetadataComponent_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function MetadataComponent_Conditional_0_Conditional_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.createMetadata());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
}
function MetadataComponent_Conditional_0_Conditional_16_For_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "safeHtml");
  }
  if (rf & 2) {
    const recommendation_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 2, recommendation_r7.Icon), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeHtml"])("matBadgeHidden", recommendation_r7.Enabled);
  }
}
function MetadataComponent_Conditional_0_Conditional_16_For_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function MetadataComponent_Conditional_0_Conditional_16_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function MetadataComponent_Conditional_0_Conditional_16_For_10_Template_button_click_0_listener() {
      const recommendation_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.createMetadata(recommendation_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, MetadataComponent_Conditional_0_Conditional_16_For_10_Conditional_1_Template, 2, 4, "div", 19)(2, MetadataComponent_Conditional_0_Conditional_16_For_10_Conditional_2_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const recommendation_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("label", recommendation_r7.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵconditional"](1, recommendation_r7.Icon ? 1 : 2);
  }
}
function MetadataComponent_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "eco-fab-speed-dial", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("openChange", function MetadataComponent_Conditional_0_Conditional_16_Template_eco_fab_speed_dial_openChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.openChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "eco-fab-speed-dial-trigger", 12)(2, "button", 13)(3, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "eco-fab-speed-dial-actions", 15)(6, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function MetadataComponent_Conditional_0_Conditional_16_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.createMetadata());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrepeaterCreate"](9, MetadataComponent_Conditional_0_Conditional_16_For_10_Template, 3, 2, "button", 17, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](3, _c0, vm_r3.fabOpen));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("spin", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](vm_r3.fabOpen ? "close" : "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrepeater"](vm_r3.recommendations);
  }
}
function MetadataComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function MetadataComponent_Conditional_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 4)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, MetadataComponent_Conditional_0_Conditional_9_Template, 1, 0)(10, MetadataComponent_Conditional_0_Conditional_10_Template, 9, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](11, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](13, "ag-grid-angular", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "mat-dialog-actions", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, MetadataComponent_Conditional_0_Conditional_15_Template, 3, 0, "button", 8)(16, MetadataComponent_Conditional_0_Conditional_16_Template, 11, 5, "eco-fab-speed-dial", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vm_r3 = ctx;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.title || "Metadata", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵconditional"](9, !vm_r3.itemFor ? 9 : 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("rowData", vm_r3.metadata)("gridOptions", ctx_r1.gridOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵconditional"](15, vm_r3.recommendations.length === 0 ? 15 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵconditional"](16, vm_r3.recommendations.length > 0 ? 16 : -1);
  }
}
const logThis = false;
class MetadataComponent extends _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_3__.BaseWithChildDialogComponent {
  constructor(router, route, dialogRef, snackBar, dialog, viewContainerRef, changeDetectorRef) {
    super(router, route, new _shared_logging_eav_logger__WEBPACK_IMPORTED_MODULE_14__.EavLogger('MetadataComponent', logThis));
    this.router = router;
    this.route = route;
    this.dialogRef = dialogRef;
    this.snackBar = snackBar;
    this.dialog = dialog;
    this.viewContainerRef = viewContainerRef;
    this.changeDetectorRef = changeDetectorRef;
    this.gridOptions = this.buildGridOptions();
    this.entitiesService = (0,_core__WEBPACK_IMPORTED_MODULE_17__.transient)(_content_items_services_entities_service__WEBPACK_IMPORTED_MODULE_1__.EntitiesService);
    this.metadataService = (0,_core__WEBPACK_IMPORTED_MODULE_17__.transient)(_permissions__WEBPACK_IMPORTED_MODULE_2__.MetadataService);
    this.contentItemsService = (0,_core__WEBPACK_IMPORTED_MODULE_17__.transient)(_content_items_services_content_items_service__WEBPACK_IMPORTED_MODULE_0__.ContentItemsService);
    this.metadataSet$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject({
      Items: [],
      Recommendations: []
    });
    this.itemFor$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject(undefined);
    this.fabOpen$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject(false);
    this.targetType = parseInt(this.route.snapshot.paramMap.get('targetType'), 10);
    this.keyType = this.route.snapshot.paramMap.get('keyType');
    this.key = this.route.snapshot.paramMap.get('key');
    this.title = decodeURIComponent(this.route.snapshot.paramMap.get('title') ?? '');
    this.contentTypeStaticName = this.route.snapshot.paramMap.get('contentTypeStaticName');
  }
  ngOnInit() {
    this.fetchFor();
    this.fetchMetadata();
    this.subscriptions.add(this.childDialogClosed$().subscribe(() => {
      this.fetchMetadata();
    }));
    const logFilteredRecs = this.log.rxTap('filteredRecs$');
    this.metadataSet$.subscribe(set => {
      this.log.a('test 2dm', {
        set
      });
    });
    const filteredRecs$ = this.metadataSet$.pipe(logFilteredRecs.pipe(), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.map)(set => set.Recommendations.filter(r => set.Items.filter(i => i._Type.Id === r.Id).length < r.Count)), logFilteredRecs.map());
    const logViewModel = this.log.rxTap('viewModel$');
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)([this.metadataSet$, filteredRecs$, this.itemFor$, this.fabOpen$]).pipe(logViewModel.pipe(), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.map)(([metadata, recommendations, itemFor, fabOpen]) => {
      const viewModel = {
        metadata: metadata.Items,
        recommendations,
        itemFor,
        fabOpen
      };
      return viewModel;
    }), logViewModel.map());
  }
  ngOnDestroy() {
    this.log.a('destroying');
    this.metadataSet$.complete();
    this.itemFor$.complete();
    this.fabOpen$.complete();
    super.ngOnDestroy();
  }
  closeDialog() {
    this.dialogRef.close();
  }
  openChange(open) {
    this.fabOpen$.next(open);
  }
  createMetadata(recommendation) {
    if (recommendation) {
      // If the feature is not enabled, open the info dialog instead of metadata
      if (!recommendation.Enabled) {
        (0,_features_shared_base_feature_component__WEBPACK_IMPORTED_MODULE_12__.openFeatureDialog)(this.dialog, recommendation.MissingFeature, this.viewContainerRef, this.changeDetectorRef);
        return;
      }
      // Feature is enabled, check if it's an empty metadata
      if (recommendation.CreateEmpty) {
        this.snackBar.open(`Creating ${recommendation.Name}...`);
        this.entitiesService.create(recommendation.Id, {
          For: this.calculateItemFor()
        }).subscribe({
          error: () => {
            this.snackBar.open(`Creating ${recommendation.Name} failed. Please check console for more info`, undefined, {
              duration: 3000
            });
            this.fetchMetadata();
          },
          next: () => {
            this.snackBar.open(`Created ${recommendation.Name}`, undefined, {
              duration: 3000
            });
            this.fetchMetadata();
          }
        });
      } else {
        // Default case - open new-metadata dialog
        this.createMetadataForm(recommendation.Id);
      }
      return;
    }
    const metadataDialogRef = this.dialog.open(_metadata_save_dialog_metadata_save_dialog_component__WEBPACK_IMPORTED_MODULE_11__.MetadataSaveDialogComponent, {
      autoFocus: false,
      viewContainerRef: this.viewContainerRef,
      width: '650px'
    });
    metadataDialogRef.afterClosed().subscribe(contentType => {
      if (contentType == null) return;
      this.createMetadataForm(contentType);
    });
  }
  createMetadataForm(contentType) {
    const form = {
      items: [{
        ContentTypeName: contentType,
        For: this.calculateItemFor()
      }]
    };
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_7__.convertFormToUrl)(form);
    this.router.navigate([`edit/${formUrl}`], {
      relativeTo: this.route
    });
    this.changeDetectorRef.markForCheck();
  }
  calculateItemFor() {
    const itemFor = {
      Target: Object.values(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__.eavConstants.metadata).find(m => m.targetType === this.targetType)?.target ?? this.targetType.toString(),
      TargetType: this.targetType,
      ...(this.keyType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__.eavConstants.keyTypes.guid && {
        Guid: this.key
      }),
      ...(this.keyType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__.eavConstants.keyTypes.number && {
        Number: parseInt(this.key, 10)
      }),
      ...(this.keyType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__.eavConstants.keyTypes.string && {
        String: this.key
      })
    };
    return itemFor;
  }
  fetchFor() {
    if (!this.contentTypeStaticName) {
      return;
    }
    this.contentItemsService.getAll(this.contentTypeStaticName).subscribe(items => {
      const item = items.find(i => i.Guid === this.key);
      if (item?.For) {
        this.itemFor$.next(item.For);
      }
    });
  }
  fetchMetadata() {
    const logGetMetadata = this.log.rxTap('getMetadata');
    this.metadataService.getMetadata(this.targetType, this.keyType, this.key).pipe(logGetMetadata.pipe(), (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.map)(metadata => {
      metadata.Recommendations.forEach(r => {
        if (r.Icon?.startsWith('base64:')) {
          r.Icon = r.Icon.replace('base64:', '');
          r.Icon = window.atob(r.Icon);
          // used for coloring black icons to white
          r.Icon = r.Icon.replace('fill="#000000"', 'fill="#ffffff"');
        }
      });
      return metadata;
    }), logGetMetadata.map())
    // 2024-05-30 2dm - this standard shorthand seems to fail
    // for reasons unknown to me. I've replaced it with the longhand
    // The problem occurs when the metadataSet$ is updated after the initial load.
    // .subscribe(this.metadataSet$);
    .subscribe(data => this.metadataSet$.next(data));
  }
  editMetadata(metadata) {
    const form = {
      items: [{
        EntityId: metadata.Id
      }]
    };
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_7__.convertFormToUrl)(form);
    this.router.navigate([`edit/${formUrl}`], {
      relativeTo: this.route
    });
  }
  deleteMetadata(metadata, confirmed = false) {
    if (!confirmed) {
      const data = {
        entityId: metadata.Id,
        entityTitle: metadata.Title,
        message: this.metadataSet$.value.Recommendations.find(r => r.Id === metadata._Type.Id)?.DeleteWarning
      };
      const confirmationDialogRef = this.dialog.open(_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_8__.ConfirmDeleteDialogComponent, {
        autoFocus: false,
        data,
        viewContainerRef: this.viewContainerRef,
        width: '400px'
      });
      confirmationDialogRef.afterClosed().subscribe(isConfirmed => {
        if (isConfirmed) this.deleteMetadata(metadata, true);
      });
      return;
    }
    this.snackBar.open('Deleting...');
    this.entitiesService.delete(metadata._Type.Id, metadata.Id, false).subscribe({
      next: () => {
        this.snackBar.open('Deleted', null, {
          duration: 2000
        });
        this.fetchMetadata();
      },
      error: () => {
        this.snackBar.open('Delete failed. Please check console for more information', null, {
          duration: 3000
        });
      }
    });
  }
  buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_5__.defaultGridOptions,
      columnDefs: [{
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_15__.ColumnDefinitions.Id,
        cellRenderer: _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_4__.IdFieldComponent,
        cellRendererParams: (() => {
          const params = {
            tooltipGetter: metadata => `ID: ${metadata.Id}\nGUID: ${metadata.Guid}`
          };
          return params;
        })()
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_15__.ColumnDefinitions.TextWide,
        field: 'Title',
        onCellClicked: params => {
          const metadata = params.data;
          this.editMetadata(metadata);
        }
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_15__.ColumnDefinitions.TextWide,
        headerName: 'Content Type',
        field: 'ContentType',
        valueGetter: params => {
          const metadata = params.data;
          return `${metadata._Type.Name}${metadata._Type.Title !== metadata._Type.Name ? ` (${metadata._Type.Title})` : ''}`;
        },
        cellRenderer: _metadata_content_type_metadata_content_type_component__WEBPACK_IMPORTED_MODULE_10__.MetadataContentTypeComponent
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_15__.ColumnDefinitions.ActionsPinnedRight1,
        cellRenderer: _metadata_actions_metadata_actions_component__WEBPACK_IMPORTED_MODULE_9__.MetadataActionsComponent,
        cellRendererParams: (() => {
          const params = {
            onDelete: metadata => this.deleteMetadata(metadata)
          };
          return params;
        })()
      }]
    };
    return gridOptions;
  }
  static #_ = this.ɵfac = function MetadataComponent_Factory(t) {
    return new (t || MetadataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
    type: MetadataComponent,
    selectors: [["app-metadata"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵProvidersFeature"]([_permissions__WEBPACK_IMPORTED_MODULE_2__.MetadataService]), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [[1, "eav-dialog", "nav-component-wrapper"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [1, "eav-dialog-content", "nav-component-wrapper"], [1, "grid-wrapper"], [1, "ag-theme-material", 3, "rowData", "gridOptions"], ["align", "end"], ["mat-fab", "", "mat-elevation-z24", "", "tippy", "Create a new metadata for this item", 1, "grid-fab"], [1, "eav-eco-fab-speed-dial", 3, "ngClass"], ["mat-fab", "", "mat-elevation-z24", "", "tippy", "Create a new metadata for this item", 1, "grid-fab", 3, "click"], [1, "eav-eco-fab-speed-dial", 3, "openChange", "ngClass"], [3, "spin"], ["mat-fab", ""], [1, "spin180"], [1, "eav-eco-fab-speed-dial-actions"], ["mat-mini-fab", "", "label", "Other Content Type", 1, "eav-eco-fab-speed-dial-action-button", 3, "click"], ["mat-mini-fab", "", 1, "eav-eco-fab-speed-dial-action-button"], ["mat-mini-fab", "", 1, "eav-eco-fab-speed-dial-action-button", 3, "click"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadge", "\uD83D\uDC8E", "matBadgePosition", "below after", "aria-hidden", "false", 2, "color", "white", "fill", "white", 3, "innerHTML", "matBadgeHidden"]],
    template: function MetadataComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](0, MetadataComponent_Conditional_0_Template, 17, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatMiniFabButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterOutlet, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_13__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_28__.AgGridAngular, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogActions, _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_29__.EcoFabSpeedDialComponent, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgClass, _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_29__.EcoFabSpeedDialTriggerComponent, _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_29__.EcoFabSpeedDialActionsComponent, _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__.MatBadge, _angular_common__WEBPACK_IMPORTED_MODULE_30__.AsyncPipe, _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_16__.SafeHtmlPipe],
    styles: ["\n\n[_nghost-%COMP%]     .mat-button-wrapper div svg *:not([fill]) {\n  fill: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL21ldGFkYXRhL21ldGFkYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLDRIQUFBO0FBQ0E7RUFDSSxXQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIHN0eWxlIGlzIHVzZWQgZm9yIHN2ZyBwYXRocyB0byBiZSBmaWxsZWQgd2l0aCB3aGl0ZSBhbmQgb3ZlcnJpZGUgZmlsbCBibGFjayBvbiBzdmdcclxuLyogVE9ETyhtZGMtbWlncmF0aW9uKTogVGhlIGZvbGxvd2luZyBydWxlIHRhcmdldHMgaW50ZXJuYWwgY2xhc3NlcyBvZiBidXR0b24gdGhhdCBtYXkgbm8gbG9uZ2VyIGFwcGx5IGZvciB0aGUgTURDIHZlcnNpb24uKi9cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXdyYXBwZXIgZGl2IHN2ZyAqOm5vdChbZmlsbF0pIHtcclxuICAgIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 72437:
/*!******************************************************************!*\
  !*** ./projects/eav-ui/src/app/permissions/go-to-permissions.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoToPermissions: () => (/* binding */ GoToPermissions)
/* harmony export */ });
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants/eav.constants */ 50052);

class GoToPermissions {
  static #_ = this.route = {
    path: 'permissions/:targetType/:keyType/:key',
    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_permissions_permissions_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./permissions.routing */ 43516)).then(m => m.permissionRoutes),
    // loadChildren: () => import('./permissions.module').then(m => m.PermissionsModule),
    data: {
      title: 'Permissions'
    }
  };
  static getUrl(targetType, keyType, key) {
    return `permissions/${targetType}/${keyType}/${key}`;
  }
  static getUrlApp(appId) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.app.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.app.keyType, appId.toString());
  }
  static getUrlAttribute(id) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.attribute.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.attribute.keyType, id.toString());
  }
  /** For historic reasons, it's the same as Entity */
  static getUrlContentType(guid) {
    return this.getUrlEntity(guid);
  }
  static getUrlEntity(guid) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.entity.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.entity.keyType, guid);
  }
  static getUrlLanguage(id) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.language.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.language.keyType, id);
  }
}

/***/ }),

/***/ 4096:
/*!******************************************************!*\
  !*** ./projects/eav-ui/src/app/permissions/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoToPermissions: () => (/* reexport safe */ _go_to_permissions__WEBPACK_IMPORTED_MODULE_0__.GoToPermissions),
/* harmony export */   MetadataService: () => (/* reexport safe */ _services_metadata_service__WEBPACK_IMPORTED_MODULE_5__.MetadataService),
/* harmony export */   PermissionsComponent: () => (/* reexport safe */ _permissions_component__WEBPACK_IMPORTED_MODULE_4__.PermissionsComponent),
/* harmony export */   PermissionsService: () => (/* reexport safe */ _services_permissions_service__WEBPACK_IMPORTED_MODULE_6__.PermissionsService),
/* harmony export */   permissionRoutes: () => (/* reexport safe */ _permissions_routing__WEBPACK_IMPORTED_MODULE_3__.permissionRoutes),
/* harmony export */   permissionsDialog: () => (/* reexport safe */ _permissions_dialog_config__WEBPACK_IMPORTED_MODULE_2__.permissionsDialog)
/* harmony export */ });
/* harmony import */ var _go_to_permissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./go-to-permissions */ 72437);
/* harmony import */ var _models_permission_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/permission.model */ 3791);
/* harmony import */ var _permissions_dialog_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permissions-dialog.config */ 42365);
/* harmony import */ var _permissions_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./permissions.routing */ 43516);
/* harmony import */ var _permissions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./permissions.component */ 7549);
/* harmony import */ var _services_metadata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/metadata.service */ 80401);
/* harmony import */ var _services_permissions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/permissions.service */ 44900);





// export * from './permissions.module'; // TOOD:: für was wird der index verwendet?



/***/ }),

/***/ 3791:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/permissions/models/permission.model.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 42365:
/*!**************************************************************************!*\
  !*** ./projects/eav-ui/src/app/permissions/permissions-dialog.config.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   permissionsDialog: () => (/* binding */ permissionsDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const permissionsDialog = {
  name: 'SET_PERMISSIONS_DIALOG',
  initContext: true,
  panelSize: 'large',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        PermissionsComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_radio_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_constants_default-grid-options_constants_ts-projects_e-814394"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_ag-grid_column-definitions_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_permissions_permissions_component_ts"), __webpack_require__.e("projects_eav-ui_src_app_shared_components_base-with-child-dialog_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./permissions.component */ 7549));
      return PermissionsComponent;
    })();
  }
};

/***/ }),

/***/ 43516:
/*!********************************************************************!*\
  !*** ./projects/eav-ui/src/app/permissions/permissions.routing.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   permissionRoutes: () => (/* binding */ permissionRoutes)
/* harmony export */ });
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ 85544);
/* harmony import */ var _permissions_dialog_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permissions-dialog.config */ 42365);
/* harmony import */ var _edit_edit_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit/edit.routing */ 90390);



const permissionRoutes = [{
  path: '',
  component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__.DialogEntryComponent,
  data: {
    dialog: _permissions_dialog_config__WEBPACK_IMPORTED_MODULE_1__.permissionsDialog
  },
  children: _edit_edit_routing__WEBPACK_IMPORTED_MODULE_2__.EditRoutesSubItems
}];

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

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_content-type-fields_services_content-types-fields_service_ts-projects-7da183.js.map