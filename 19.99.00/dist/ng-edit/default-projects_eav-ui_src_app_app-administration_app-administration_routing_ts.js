"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["default-projects_eav-ui_src_app_app-administration_app-administration_routing_ts"],{

/***/ 336:
/*!*********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/content-items/services/content-items.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentItemsService: () => (/* binding */ ContentItemsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 95429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_fields_content_types_fields_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/fields/content-types-fields.service */ 75959);
/* harmony import */ var _shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/helpers/file-to-base64.helper */ 70693);
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/logging */ 34435);
/* harmony import */ var _shared_services_entity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/entity.service */ 9234);
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);








const logSpecs = {
  getAll: true,
  getAllSig: true
};
class ContentItemsService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_4__.HttpServiceBase {
  constructor() {
    super(...arguments);
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_2__.classLog)({
      ContentItemsService
    }, logSpecs);
  }
  getAll(contentTypeStaticName) {
    this.log.fnIf('getAll', {
      contentTypeStaticName
    });
    return this.getHttpApiUrl(_shared_services_entity_service__WEBPACK_IMPORTED_MODULE_3__.webApiEntityList, {
      params: {
        appId: this.appId,
        contentType: contentTypeStaticName
      }
    });
  }
  getAllSig(contentTypeStaticName, initial) {
    this.log.fnIf('getAllSig', {
      contentTypeStaticName,
      initial
    });
    return this.getSignal(_shared_services_entity_service__WEBPACK_IMPORTED_MODULE_3__.webApiEntityList, {
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
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)((0,_shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_1__.toBase64)(file)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(fileBase64 => {
      return this.http.post(this.apiUrl(_shared_services_entity_service__WEBPACK_IMPORTED_MODULE_3__.webApiEntityRoot + 'upload'), {
        AppId: this.appId,
        ContentBase64: fileBase64
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(success => {
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
        return (ɵContentItemsService_BaseFactory || (ɵContentItemsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetInheritedFactory"](ContentItemsService)))(__ngFactoryType__ || ContentItemsService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: ContentItemsService,
      factory: ContentItemsService.ɵfac
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

/***/ 11884:
/*!*******************************************************************!*\
  !*** ./projects/eav-ui/src/app/metadata/models/metadata.model.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 12215:
/*!**********************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/import-export-menu/export-app/export-app.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExportAppComponent: () => (/* binding */ ExportAppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core */ 88692);
/* harmony import */ var _admin_shared_docs_link_helper_docs_link_helper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../admin-shared/docs-link-helper/docs-link-helper.component */ 66545);
/* harmony import */ var _features_feature_icon_feature_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../features/feature-icon/feature-icon.component */ 92487);
/* harmony import */ var _features_feature_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../features/feature-names */ 28136);
/* harmony import */ var _features_features_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../features/features.service */ 9001);
/* harmony import */ var _services_export_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/export-app.service */ 320);

















class ExportAppComponent {
  constructor() {
    this.#exportAppService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_export_app_service__WEBPACK_IMPORTED_MODULE_5__.ExportAppService);
    this.appInfo = this.#exportAppService.getAppInfo(undefined);
    this.features = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_features_features_service__WEBPACK_IMPORTED_MODULE_4__.FeaturesService);
    this.expAssetsAdvEnabled = this.features.isEnabled[_features_feature_names__WEBPACK_IMPORTED_MODULE_3__.FeatureNames.AppExportAssetsAdvanced];
    // Use Signals
    this.includeContentGroups = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.model)(false);
    this.resetAppGuid = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.model)(false);
    this.assetsAdam = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.model)(true);
    this.assetsAdamDeleted = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.model)(false);
    this.assetsSite = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.model)(true);
    this.downloadUrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.computed)(() => this.#exportAppService.exportAppUrl() + `&includeContentGroups=${this.includeContentGroups()}&resetAppGuid=${this.resetAppGuid()}` + `&assetsAdam=${this.assetsAdam()}&assetsSite=${this.assetsSite()}`);
  }
  #exportAppService;
  static {
    this.ɵfac = function ExportAppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ExportAppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ExportAppComponent,
      selectors: [["app-export-app"]],
      inputs: {
        includeContentGroups: [1, "includeContentGroups"],
        resetAppGuid: [1, "resetAppGuid"],
        assetsAdam: [1, "assetsAdam"],
        assetsAdamDeleted: [1, "assetsAdamDeleted"],
        assetsSite: [1, "assetsSite"]
      },
      outputs: {
        includeContentGroups: "includeContentGroupsChange",
        resetAppGuid: "resetAppGuidChange",
        assetsAdam: "assetsAdamChange",
        assetsAdamDeleted: "assetsAdamDeletedChange",
        assetsSite: "assetsSiteChange"
      },
      decls: 80,
      vars: 27,
      consts: [[1, "outer-container-app"], [1, "form-height"], ["href", "https://2sxc.org/en/help?tag=export-app", "target", "_blank"], [1, "eav-app-info__title"], [1, "eav-app-info__content"], [1, "checkboxes"], [3, "ngModelChange", "ngModel", "disabled"], [3, "featureNameId"], [1, "eav-dialog-actions", 2, "height", "73px"], [3, "link", "label", "icon"], ["mat-button", "", "download", "", 1, "eav-button__with-icon", 3, "href"], [1, "eav-icon"]],
      template: function ExportAppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1)(4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Pack the entire app to a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "em");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "zip");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " folder which can be imported again to another site. For further help visit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "2sxc Help");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, ". ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Specs");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "ul", 4)(15, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Contains");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "ul", 4)(24, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Advanced");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "ul", 5)(37, "li")(38, "mat-checkbox", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ExportAppComponent_Template_mat_checkbox_ngModelChange_38_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.includeContentGroups, $event) || (ctx.includeContentGroups = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, " Include all content-groups to re-import the app in an exact copy of this site. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, " Only select this option when you copy an entire DNN site. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "li")(44, "mat-checkbox", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ExportAppComponent_Template_mat_checkbox_ngModelChange_44_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.resetAppGuid, $event) || (ctx.resetAppGuid = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, " Reset the app GUID to zero. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, " You only need this option for special tutorial apps, and usually must not select it. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "app-feature-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "mat-checkbox", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ExportAppComponent_Template_mat_checkbox_ngModelChange_51_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.assetsAdam, $event) || (ctx.assetsAdam = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](52, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, " Include all ADAM assets. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](54, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, " This will include all App files in the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "/adam");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, " folder in your portal. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](60, "app-feature-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "mat-checkbox", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ExportAppComponent_Template_mat_checkbox_ngModelChange_61_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.assetsAdamDeleted, $event) || (ctx.assetsAdamDeleted = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, " Skip ADAM assets of deleted entities. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](64, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, " This will skip all ADAM files which are probably not in use any more, since the owning entities were deleted. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](67, "app-feature-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "mat-checkbox", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ExportAppComponent_Template_mat_checkbox_ngModelChange_68_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.assetsSite, $event) || (ctx.assetsSite = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](69, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, " Include all Site assets like images which are not in ADAM. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](71, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, " This will include all files used by your entities (eg. in link fields) which are not in you App-ADAM folder. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "mat-dialog-actions", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](74, "app-docs-link-helper", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "a", 10)(76, "mat-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77, "deployed_code_update");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "Download");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          let tmp_3_0;
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          let tmp_8_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Export app ", ctx.appInfo() == null ? "(loading details...)" : "", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Name: ", (tmp_1_0 = ctx.appInfo()) == null ? null : tmp_1_0.Name, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Guid: ", (tmp_2_0 = ctx.appInfo()) == null ? null : tmp_2_0.Guid, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Version: ", (tmp_3_0 = ctx.appInfo()) == null ? null : tmp_3_0.Version, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", (tmp_4_0 = ctx.appInfo()) == null ? null : tmp_4_0.EntitiesCount, " entities");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", (tmp_5_0 = ctx.appInfo()) == null ? null : tmp_5_0.LanguagesCount, " languages");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"](" ", (tmp_6_0 = ctx.appInfo()) == null ? null : tmp_6_0.TemplatesCount, " templates (Token: ", (tmp_6_0 = ctx.appInfo()) == null ? null : tmp_6_0.HasTokenTemplates, ", Razor: ", (tmp_6_0 = ctx.appInfo()) == null ? null : tmp_6_0.HasRazorTemplates, ") ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", (tmp_7_0 = ctx.appInfo()) == null ? null : tmp_7_0.TransferableFilesCount, " files to export");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", (tmp_8_0 = ctx.appInfo()) == null ? null : tmp_8_0.FilesCount, " files in the app folder totally");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.includeContentGroups);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.resetAppGuid());
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.resetAppGuid);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.includeContentGroups());
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("featureNameId", "AppExportAssetsAdvanced");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.assetsAdam);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.expAssetsAdvEnabled());
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("featureNameId", "AppExportAssetsAdvanced");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.assetsAdamDeleted);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.expAssetsAdvEnabled());
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("featureNameId", "AppExportAssetsAdvanced");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.assetsSite);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.expAssetsAdvEnabled());
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("link", "https://go.2sxc.org/app-export")("label", "Export App Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", ctx.downloadUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        }
      },
      dependencies: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _features_feature_icon_feature_icon_component__WEBPACK_IMPORTED_MODULE_2__.FeatureIconComponent, _admin_shared_docs_link_helper_docs_link_helper_component__WEBPACK_IMPORTED_MODULE_1__.DocsLinkHelperComponent],
      styles: [".eav-app-info__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 24px 0 0;\n  font-weight: bold;\n}\n.eav-app-info__content[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.eav-app-info__content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 2px 0;\n}\n\n.eav-options-wrapper[_ngcontent-%COMP%] {\n  margin: 24px 0;\n}\n\n.eav-option-box[_ngcontent-%COMP%] {\n  margin: 2px 0;\n}\n.eav-option-box__text[_ngcontent-%COMP%] {\n  white-space: normal;\n  font-size: 14px;\n}\n\n.form-height[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 24px - 48px - 200px);\n  overflow: auto;\n}\n\n.mdc-form-field[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  padding-top: 12px;\n}\n\nul.checkboxes[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-top: 4px;\n  padding-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cG9ydC1hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFKO0FBR0U7RUFDRSxlQUFBO0FBREo7QUFHSTtFQUNFLGNBQUE7QUFETjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7QUFIRjtBQUtFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBSEo7O0FBT0E7RUFDRSw2Q0FBQTtFQUNBLGNBQUE7QUFKRjs7QUFPQTtFQUNFLGlCQUFBO0FBSkY7O0FBT0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBSkYiLCJmaWxlIjoiZXhwb3J0LWFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lYXYtYXBwLWluZm8ge1xyXG4gICZfX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMjRweCAwIDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgcGFkZGluZzogMnB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZWF2LW9wdGlvbnMtd3JhcHBlciB7XHJcbiAgbWFyZ2luOiAyNHB4IDA7XHJcbn1cclxuXHJcbi5lYXYtb3B0aW9uLWJveCB7XHJcbiAgbWFyZ2luOiAycHggMDtcclxuXHJcbiAgJl9fdGV4dCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0taGVpZ2h0IHtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjRweCAtIDQ4cHggLSAyMDBweCk7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5tZGMtZm9ybS1maWVsZCA+IGxhYmVsIHtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxufVxyXG5cclxudWwuY2hlY2tib3hlcyB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9pbXBvcnQtZXhwb3J0LW1lbnUvZXhwb3J0LWFwcC9leHBvcnQtYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtBQURKO0FBR0k7RUFDRSxjQUFBO0FBRE47O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0FBSEY7QUFLRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQUhKOztBQU9BO0VBQ0UsNkNBQUE7RUFDQSxjQUFBO0FBSkY7O0FBT0E7RUFDRSxpQkFBQTtBQUpGOztBQU9BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUpGO0FBQ0EsNDdDQUE0N0MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWF2LWFwcC1pbmZvIHtcclxuICAmX190aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDI0cHggMCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAmX19jb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmVhdi1vcHRpb25zLXdyYXBwZXIge1xyXG4gIG1hcmdpbjogMjRweCAwO1xyXG59XHJcblxyXG4uZWF2LW9wdGlvbi1ib3gge1xyXG4gIG1hcmdpbjogMnB4IDA7XHJcblxyXG4gICZfX3RleHQge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWhlaWdodCB7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDI0cHggLSA0OHB4IC0gMjAwcHgpO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4ubWRjLWZvcm0tZmllbGQgPiBsYWJlbCB7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbn1cclxuXHJcbnVsLmNoZWNrYm94ZXMge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 12541:
/*!***********************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/import-query/import-query-dialog.config.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   importQueryDialog: () => (/* binding */ importQueryDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const importQueryDialog = {
  name: 'IMPORT_QUERY_DIALOG',
  initContext: false,
  panelSize: 'medium',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        ImportQueryComponent
      } = yield __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_app-administration_sub-dialogs_import-query_import-query_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./import-query.component */ 29149));
      return ImportQueryComponent;
    })();
  }
};

/***/ }),

/***/ 13428:
/*!***************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/app-admin-main/app-admin-main.dialog-config.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appAdministrationDialog: () => (/* binding */ appAdministrationDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const appAdministrationDialog = {
  name: 'APP_ADMINISTRATION_DIALOG',
  initContext: true,
  panelSize: 'large',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        AppAdminMainComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-projects_eav-ui_src_app_shared_components_nav-item-list_nav-item-list_component_ts-pr-7c4da5"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_app-admin-main_app-admin-main_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./app-admin-main.component */ 18830));
      return AppAdminMainComponent;
    })();
  }
};

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

/***/ 26164:
/*!**************************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/import-export-menu/data-bundles/data-bundles-detail/data-bundles-dialog.config.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBundlesDialog: () => (/* binding */ dataBundlesDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const dataBundlesDialog = {
  name: 'Data Bundles Details',
  initContext: false,
  panelSize: 'large',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        DataBundlesDetailComponent
      } = yield __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_app-administration_import-export-menu_data-bundles_data-bundles-detai-5dca44").then(__webpack_require__.bind(__webpack_require__, /*! ./data-bundles-detail.component */ 74982));
      return DataBundlesDetailComponent;
    })();
  }
};

/***/ }),

/***/ 29555:
/*!***************************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/analyze-settings/settings-item-details/settings-item-details.config.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   settingsItemDetailsDialog: () => (/* binding */ settingsItemDetailsDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const settingsItemDetailsDialog = {
  name: 'SETTINGS_ITEM_DETAILS',
  initContext: false,
  panelSize: 'large',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        SettingsItemDetailsComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_sub-dialogs_analyze-settings_settings-item-details-4ac85a")]).then(__webpack_require__.bind(__webpack_require__, /*! ./settings-item-details.component */ 9250));
      return SettingsItemDetailsComponent;
    })();
  }
};

/***/ }),

/***/ 36173:
/*!*******************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/app-configuration/message/message-dialog.config.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messageDialog: () => (/* binding */ messageDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const messageDialog = {
  name: 'ERROR_DIALOG',
  initContext: false,
  panelSize: 'small',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        MessageComponent
      } = yield __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_app-administration_app-configuration_message_message_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./message.component */ 68109));
      return MessageComponent;
    })();
  }
};

/***/ }),

/***/ 37010:
/*!********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/features/feature-info-dialog/feature-info-dialog.config.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   featureInfoDialog: () => (/* binding */ featureInfoDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const featureInfoDialog = {
  name: 'FEATURE_INFO_DIALOG',
  initContext: false,
  panelSize: 'small',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        FeatureInfoDialogComponent
      } = yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./feature-info-dialog.component */ 18514));
      return FeatureInfoDialogComponent;
    })();
  }
};

/***/ }),

/***/ 40076:
/*!*******************************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/import-export-menu/data-bundles/data-bundles-actions/data-bundles-actions.component.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataBundleActionsComponent: () => (/* binding */ DataBundleActionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var projects_eav_ui_src_app_shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/eav-ui/src/app/shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);







class DataBundleActionsComponent {
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
    this.ɵfac = function DataBundleActionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DataBundleActionsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DataBundleActionsComponent,
      selectors: [["app-data-bundle-actions"]],
      decls: 13,
      vars: 0,
      consts: [[1, "actions-component"], ["matRipple", "", "tippy", "Edit", 1, "eav-grid-action-button", "highlight", 3, "click"], ["matRipple", "", "tippy", "Download", 1, "eav-grid-action-button", "highlight", 3, "click"], ["matRipple", "", "tippy", "Save State", 1, "eav-grid-action-button", "highlight", 3, "click"], ["matRipple", "", "tippy", "Restore State", 1, "eav-grid-action-button", "highlight", 3, "click"]],
      template: function DataBundleActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataBundleActionsComponent_Template_div_click_1_listener() {
            return ctx.do("edit");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "edit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataBundleActionsComponent_Template_div_click_4_listener() {
            return ctx.do("download");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "cloud_download");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataBundleActionsComponent_Template_div_click_7_listener() {
            return ctx.do("saveState");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "save");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataBundleActionsComponent_Template_div_click_10_listener() {
            return ctx.do("restoreState");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "history");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuModule, projects_eav_ui_src_app_shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 41463:
/*!************************************************************!*\
  !*** ./projects/eav-ui/src/app/metadata/go-to-metadata.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoToMetadata: () => (/* binding */ GoToMetadata)
/* harmony export */ });
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants/eav.constants */ 50052);

class GoToMetadata {
  static getRoutes() {
    const defaultRoute = {
      path: 'metadata/:targetType/:keyType/:key',
      loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_metadata_metadata_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./metadata.routing */ 56536)).then(m => m.metadataRoutes),
      data: {
        title: 'Metadata'
      }
    };
    const routes = [defaultRoute, {
      ...defaultRoute,
      path: `${defaultRoute.path}/title/:title`
    }, {
      ...defaultRoute,
      path: `${defaultRoute.path}/contentType/:contentTypeStaticName`
    }, {
      ...defaultRoute,
      path: `${defaultRoute.path}/title/:title/contentType/:contentTypeStaticName`
    }];
    return routes;
  }
  static getUrl(targetType, keyType, key, dialogTitle, contentTypeStaticName) {
    let url = `metadata/${targetType}/${keyType}/${key}`;
    if (dialogTitle) {
      url += `/title/${dialogTitle}`;
    }
    if (contentTypeStaticName) {
      url += `/contentType/${contentTypeStaticName}`;
    }
    return url;
  }
  static getUrlApp(appId, dialogTitle) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.app.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.app.keyType, appId.toString(), dialogTitle);
  }
  static getUrlAttribute(attributeId, dialogTitle, contentTypeStaticName) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.attribute.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.attribute.keyType, attributeId.toString(), dialogTitle, contentTypeStaticName);
  }
  static getUrlContentType(staticName, dialogTitle) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.contentType.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.contentType.keyType, staticName, dialogTitle);
  }
  static getUrlEntity(guid, dialogTitle, contentTypeStaticName) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.entity.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.entity.keyType, guid, dialogTitle, contentTypeStaticName);
  }
}

/***/ }),

/***/ 45795:
/*!*************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/import-content-type/import-content-type-dialog.config.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   importContentTypeDialog: () => (/* binding */ importContentTypeDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const importContentTypeDialog = {
  name: 'IMPORT_CONTENT_TYPE_DIALOG',
  initContext: false,
  panelSize: 'medium',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        ImportContentTypeComponent
      } = yield __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_app-administration_sub-dialogs_import-content-type_import-content-typ-e2ad96").then(__webpack_require__.bind(__webpack_require__, /*! ./import-content-type.component */ 46907));
      return ImportContentTypeComponent;
    })();
  }
};

/***/ }),

/***/ 52475:
/*!**************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/import-export-menu/data-bundles/data-bundles.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataBundlesComponent: () => (/* binding */ DataBundlesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var projects_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/core */ 88692);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var _content_items_services_content_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../content-items/services/content-items.service */ 336);
/* harmony import */ var _features_feature_text_info_feature_text_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../features/feature-text-info/feature-text-info.component */ 95469);
/* harmony import */ var _shared_ag_grid_ag_grid_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/ag-grid/ag-grid-helper */ 21183);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/file-upload-dialog */ 34616);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/directives/drag-and-drop.directive */ 34575);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/models/edit-form.model */ 70334);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/routing/dialog-routing.service */ 60852);
/* harmony import */ var _data_bundles_actions_data_bundles_actions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data-bundles-actions/data-bundles-actions.component */ 40076);
/* harmony import */ var _data_bundles_query_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data-bundles-query.service */ 84242);
/* harmony import */ var _data_bundles_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./data-bundles.service */ 94035);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);































const _c0 = (a0, a1, a2) => ({
  "sxc-message-warning": a0,
  "sxc-message-success": a1,
  "sxc-message-error": a2
});
function DataBundlesComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "mat-spinner", 8);
  }
}
function DataBundlesComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Select or drop file");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function DataBundlesComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](file_r3.name);
  }
}
function DataBundlesComponent_Conditional_34_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Upload succeeded. See the messages below for more information.");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function DataBundlesComponent_Conditional_34_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Upload failed. See the messages below for more information.");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function DataBundlesComponent_Conditional_34_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r4 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction3"](2, _c0, message_r4.MessageType === ctx_r4.FileUploadMessageTypes.Warning, message_r4.MessageType === ctx_r4.FileUploadMessageTypes.Success, message_r4.MessageType === ctx_r4.FileUploadMessageTypes.Error));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", message_r4.Text, " ");
  }
}
function DataBundlesComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, DataBundlesComponent_Conditional_34_Conditional_1_Template, 2, 0, "div", 13)(2, DataBundlesComponent_Conditional_34_Conditional_2_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeaterCreate"](3, DataBundlesComponent_Conditional_34_For_4_Template, 2, 6, "div", 15, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](ctx_r4.result().Success ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](!ctx_r4.result().Success ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeater"](ctx_r4.result().Messages);
  }
}
function DataBundlesComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function DataBundlesComponent_Conditional_35_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r4.upload());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx_r4.files().length || ctx_r4.uploading() || !!ctx_r4.result());
  }
}
class DataBundlesComponent {
  #contentItemsSvc;
  #dialogRouter;
  #dataBundlesQueryService;
  #dataBundlesService;
  #queryResults;
  constructor(snackBar) {
    this.snackBar = snackBar;
    this.#contentItemsSvc = (0,projects_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_content_items_services_content_items_service__WEBPACK_IMPORTED_MODULE_1__.ContentItemsService);
    this.#dialogRouter = (0,projects_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_12__.DialogRoutingService);
    this.#dataBundlesQueryService = (0,projects_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_data_bundles_query_service__WEBPACK_IMPORTED_MODULE_14__.DataBundlesQueryService);
    this.#dataBundlesService = (0,projects_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_data_bundles_service__WEBPACK_IMPORTED_MODULE_15__.DataBundlesService);
    this.#queryResults = (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.signal)([]);
    this.#defaultContentTypeId = "d7f2e4fa-5306-41bb-a3cd-d9529c838879";
    this.FileUploadMessageTypes = _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_5__.FileUploadMessageTypes;
    this.gridOptions = this.#buildGridOptions();
    this.#refresh = (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.signal)(0);
    this.uploading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.signal)(false);
    this.files = (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.signal)([]);
    this.result = (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.signal)(undefined);
    this.importData = {
      title: 'Import Data Bundles into this App',
      allowedFileTypes: 'json',
      upload$: files => this.#dataBundlesService.import(files)
    };
    this.#dataBundles = (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.computed)(() => {
      this.#refresh(); // is use to trigger a refresh when new data or data are modified
      return this.#contentItemsSvc.getAllSig(this.#defaultContentTypeId, /* initial: */null);
    });
    // Data from QueryData for Table
    this.dataSourceData = (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.computed)(() => {
      const dataBundles = this.#dataBundles()() || [];
      const queryResults = this.#queryResults();
      const countEntitiesAndContentTypes = guid => {
        const result = queryResults.find(result => result.Guid === guid)?.Result || [];
        const entityCount = result.filter(item => item.TypeName == "ContentType").length;
        const contentTypeCount = result.filter(item => item.TypeName != "ContentType").length;
        return {
          entityCount,
          contentTypeCount
        };
      };
      const result = dataBundles.map(bundle => {
        const {
          entityCount,
          contentTypeCount
        } = countEntitiesAndContentTypes(bundle.Guid);
        return {
          FileName: bundle.FileName,
          Name: bundle.Name,
          Guid: bundle.Guid,
          Id: bundle.Id,
          Entities: entityCount,
          ContentType: contentTypeCount
        };
      });
      return result;
    });
    this.heightStyle = (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.computed)(() => {
      const dataSourceData = this.dataSourceData();
      if (dataSourceData.length === 0) return `height: 135px`;
      return `height: ${dataSourceData.length * 46 + 90}px`;
    });
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.effect)(() => {
      const dataBundles = this.#dataBundles()();
      if (!dataBundles) return;
      dataBundles.forEach(dataBundle => {
        if (!dataBundle?.Guid) return;
        this.#dataBundlesQueryService.fetchQuery(dataBundle.Guid).subscribe({
          next: data => {
            (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.untracked)(() => {
              const bundleQuery = {
                Guid: dataBundle.Guid,
                Result: data
              };
              this.#queryResults.update(results => [...results, bundleQuery]);
            });
          },
          error: err => console.error("Query error: ", err)
        });
      });
    });
  }
  #defaultContentTypeId;
  #refresh;
  #dataBundles;
  ngOnInit() {
    // Reload Data after Close Dialog
    this.#dialogRouter.doOnDialogClosed(() => this.#fetchItems());
  }
  ngOnDestroy() {
    this.snackBar.dismiss();
  }
  #fetchItems() {
    this.#refresh.update(v => ++v);
  }
  // Files Drop
  filesDropped(files) {
    const importFile = files[0];
    const ext = importFile.name.substring(importFile.name.lastIndexOf('.') + 1).toLocaleLowerCase();
    switch (ext) {
      case 'xml':
        this.#importDataBundles(files);
        break;
      case 'json':
        this.#importDataBundles(files);
        break;
    }
  }
  // Import Files Button Logic
  /**
  * Handles file selection from an input event.
  * Converts the selected file(s) into an array and updates the internal file state.
  * @param event - The file input change event.
  */
  filesChanged(event) {
    const fileList = event.target.files;
    const files = Array.from(fileList);
    this.#setFiles(files);
  }
  /**
  * Initiates the upload process for the selected files.
  * Sets the uploading state to true and subscribes to the upload process.
  * On success, updates the result and fetches items; on error, resets the state and shows an error message.
  */
  upload() {
    this.uploading.set(true);
    this.importData.upload$(this.files()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.take)(1)).subscribe({
      next: result => {
        this.uploading.set(false);
        this.result.set(result);
        this.#fetchItems();
      },
      error: () => {
        this.uploading.set(false);
        this.result.set(undefined);
        this.snackBar.open('Upload failed. Please check console for more information', undefined, {
          duration: 3000
        });
      }
    });
  }
  /**
  * Sets the internal file list, ensuring only a single file is kept
  * if the `multiple` flag in `importData` is set to false.
  * @param files - The array of files to set.
  */
  #setFiles(files) {
    if (!this.importData.multiple) {
      files = files.slice(0, 1);
    }
    this.files.set(files);
  }
  // Import Data Bundles from File Drop
  #importDataBundles(files) {
    const dialogData = {
      files
    };
    this.#dialogRouter.navRelative(['import'], {
      state: dialogData
    });
  }
  // Open Edit Dialog
  editItem(item) {
    const form = {
      items: [item == null ? _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_10__.EditPrep.newFromType(this.#defaultContentTypeId) : _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_10__.EditPrep.editId(item.Id)]
    };
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_9__.convertFormToUrl)(form);
    this.#dialogRouter.navRelative([`edit/${formUrl}`]);
  }
  // Export Data to Download Json File
  #export(item) {
    this.#dataBundlesService.exportDataBundle(item.Guid);
  }
  // Save State
  #saveState(item) {
    this.snackBar.open('Save Bundle State...');
    this.#dataBundlesService.saveDataBundles(item.Guid).subscribe({
      next: _ => this.snackBar.open('Export completed into the \'App_Data\' folder.', null, {
        duration: 3000
      }),
      error: _ => this.snackBar.open('Export failed. Please check console for more information', null, {
        duration: 3000
      })
    });
  }
  // Restore State
  #restoreState(item) {
    this.snackBar.open('Restore Bundle State...');
    this.#dataBundlesService.restoreDataBundles(item.FileName).subscribe({
      next: _ => this.snackBar.open('Reset worked! Since this is a complex operation, please restart the Website to ensure all caches are correct', null, {
        duration: 30000
      }),
      error: _ => this.snackBar.open('Reset failed. Please check console for more details', null, {
        duration: 3000
      })
    });
  }
  // Grid Options Config
  #buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_6__.defaultGridOptions,
      columnDefs: [{
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_4__.ColumnDefinitions.TextWideMin100,
        headerName: 'Name',
        field: 'Name',
        flex: 2,
        cellRenderer: p => _shared_ag_grid_ag_grid_helper__WEBPACK_IMPORTED_MODULE_3__.AgGridHelper.cellLink('#' + this.#dialogRouter.urlSubRoute(`details/${p.data.Guid}/${p.data.Name}`), p.data.Name)
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_4__.ColumnDefinitions.TextWideMin100,
        headerName: 'File-Name',
        field: 'FileName'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_4__.ColumnDefinitions.Number2,
        headerName: 'Entities',
        field: 'Entities'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_4__.ColumnDefinitions.Number2,
        headerName: 'Content-Type',
        field: 'ContentType'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_4__.ColumnDefinitions.ActionsPinnedRight3,
        cellRenderer: _data_bundles_actions_data_bundles_actions_component__WEBPACK_IMPORTED_MODULE_13__.DataBundleActionsComponent,
        cellRendererParams: {
          do: (verb, item) => {
            switch (verb) {
              case 'edit':
                this.editItem(item);
                break;
              case 'download':
                this.#export(item);
                break;
              case 'saveState':
                this.#saveState(item);
                break;
              case 'restoreState':
                this.#restoreState(item);
                break;
            }
          }
        }
      }]
    };
    return gridOptions;
  }
  static {
    this.ɵfac = function DataBundlesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DataBundlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
      type: DataBundlesComponent,
      selectors: [["app-data-bundles"]],
      decls: 37,
      vars: 11,
      consts: [["fileInput", ""], ["appDragAndDrop", "", 1, "outer-container-app", 3, "filesDropped", "allowedFileTypes"], [3, "featureNameId"], [1, "info-container"], ["mat-fab", "", "mat-elevation-z24", "", "tippy", "Add item", 1, "grid-fab", 3, "click"], [1, "grid-height"], [1, "grid-wrapper", "mat-tab-grid-wrapper"], [1, "ag-theme-material", 3, "rowData", "gridOptions"], ["mode", "indeterminate", "diameter", "20", "color", "accent"], ["mat-raised-button", "", "tippy", "Open file browser", 1, "select-btn", 3, "click", "disabled"], ["type", "file", "multiple", "", 1, "hide", 3, "change"], [1, "eav-result-container"], ["mat-button", "", "tippy", "Import File", 1, "eav-button__with-icon", 2, "margin-top", "16px", 3, "disabled"], [1, "sxc-message", "sxc-message-info"], [1, "sxc-message", "sxc-message-error"], [1, "sxc-message", 3, "ngClass"], ["mat-button", "", "tippy", "Import File", 1, "eav-button__with-icon", 2, "margin-top", "16px", 3, "click", "disabled"], [1, "eav-icon"]],
      template: function DataBundlesComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("filesDropped", function DataBundlesComponent_Template_div_filesDropped_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.filesDropped($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "Data Bundles (BETA)");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, " Data Bundles are a new feature which allow you to mark parts of your app as a bundle, and then export/import them. This allows you to do a partial sync of data and schema between environments. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](5, "app-feature-text-info", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 3)(7, "div")(8, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "Bundle Export Configurations");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, " Bundles must be defined by creating a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13, "Bundle Configuration");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14, ", and then assigning Content-Types and Data to that configuration. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "div")(16, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function DataBundlesComponent_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.editItem(null));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "div", 5)(20, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](21, "ag-grid-angular", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](23, "Import Bundles");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25, "To import a bundle, Note that all data and schema will be overwritten by the imported data in the bundle.");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](26, DataBundlesComponent_Conditional_26_Template, 1, 0, "mat-spinner", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "div")(28, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function DataBundlesComponent_Template_button_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            const fileInput_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](33);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](fileInput_r2.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](29, DataBundlesComponent_Conditional_29_Template, 2, 0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeaterCreate"](30, DataBundlesComponent_For_31_Template, 2, 1, "div", null, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "input", 10, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function DataBundlesComponent_Template_input_change_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.filesChanged($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](34, DataBundlesComponent_Conditional_34_Template, 5, 2, "div", 11)(35, DataBundlesComponent_Conditional_35_Template, 5, 1, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](36, "router-outlet");
        }
        if (rf & 2) {
          let tmp_11_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("allowedFileTypes", "xml,json");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("featureNameId", "DataExportImportBundles");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵstyleMap"](ctx.heightStyle());
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("rowData", ctx.dataSourceData())("gridOptions", ctx.gridOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](ctx.uploading() ? 26 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx.uploading());
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](!ctx.files().length ? 29 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeater"](ctx.files());
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](ctx.result() ? 34 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](!((tmp_11_0 = ctx.result()) == null ? null : tmp_11_0.Success) ? 35 : -1);
        }
      },
      dependencies: [_features_feature_text_info_feature_text_info_component__WEBPACK_IMPORTED_MODULE_2__.FeatureTextInfoComponent, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_11__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_19__.AgGridAngular, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterOutlet, _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_7__.DragAndDropDirective, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgClass, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinner, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_8__.TippyDirective],
      styles: [".grid-height[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 560px);\n  min-height: 135px;\n}\n\n.fab-button-pos[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  justify-content: end;\n}\n\n.eav-result-container[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  max-height: calc(100vh - 74px - 23px - 57px - 200px);\n  overflow-y: auto;\n}\n\n.info-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtYnVuZGxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esb0RBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRiIsImZpbGUiOiJkYXRhLWJ1bmRsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1oZWlnaHQge1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1NjBweCk7XHJcbiAgbWluLWhlaWdodDogMTM1cHg7XHJcbn1cclxuXHJcbi5mYWItYnV0dG9uLXBvcyB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbn1cclxuXHJcbi5lYXYtcmVzdWx0LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzRweCAtIDIzcHggLSA1N3B4IC0gMjAwcHgpO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5pbmZvLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9pbXBvcnQtZXhwb3J0LW1lbnUvZGF0YS1idW5kbGVzL2RhdGEtYnVuZGxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esb0RBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjtBQUNBLDRnQ0FBNGdDIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtaGVpZ2h0IHtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTYwcHgpO1xyXG4gIG1pbi1oZWlnaHQ6IDEzNXB4O1xyXG59XHJcblxyXG4uZmFiLWJ1dHRvbi1wb3Mge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcblxyXG4uZWF2LXJlc3VsdC1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDc0cHggLSAyM3B4IC0gNTdweCAtIDIwMHB4KTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uaW5mby1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 53677:
/*!********************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/import-export-menu/app-state/app-state.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppStateComponent: () => (/* binding */ AppStateComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core */ 88692);
/* harmony import */ var _features_feature_text_info_feature_text_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../features/feature-text-info/feature-text-info.component */ 95469);
/* harmony import */ var _services_export_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/export-app.service */ 320);
/* harmony import */ var _services_import_app_parts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/import-app-parts.service */ 58624);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);













class AppStateComponent {
  #importAppPartsSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_import_app_parts_service__WEBPACK_IMPORTED_MODULE_3__.ImportAppPartsService);
  #exportAppSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_export_app_service__WEBPACK_IMPORTED_MODULE_2__.ExportAppService);
  constructor(snackBar) {
    this.snackBar = snackBar;
  }
  ngOnDestroy() {
    this.snackBar.dismiss();
  }
  exportAppXml(withFiles) {
    this.snackBar.open('Exporting...');
    this.#exportAppSvc.exportForVersionControl({
      includeContentGroups: true,
      resetAppGuid: false,
      withFiles
    }).subscribe({
      next: _ => this.snackBar.open('Export completed into the \'App_Data\' folder.', null, {
        duration: 3000
      }),
      error: _ => this.snackBar.open('Export failed. Please check console for more information', null, {
        duration: 3000
      })
    });
  }
  resetApp(withFiles) {
    if (!confirm('Are you sure? All changes since last xml export will be lost')) return;
    this.snackBar.open('Resetting...');
    this.#importAppPartsSvc.resetApp(withFiles).subscribe({
      next: _ => this.snackBar.open('Reset worked! Since this is a complex operation, please restart the Website to ensure all caches are correct', null, {
        duration: 30000
      }),
      error: _ => this.snackBar.open('Reset failed. Please check console for more details', null, {
        duration: 3000
      })
    });
  }
  static {
    this.ɵfac = function AppStateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppStateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AppStateComponent,
      selectors: [["app-app-state"]],
      decls: 47,
      vars: 1,
      consts: [[1, "outer-container-app"], [1, "eav-dialog-actions", 2, "height", "73px"], [1, "eav-dialog-actions-div"], ["mat-button", "", 1, "eav-button__with-icon", 3, "click"], [1, "eav-icon"], [3, "featureNameId"]],
      template: function AppStateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "App-State Versioning - Basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " You can save / restore the app with data and configuration in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "App_Data/app.xml");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, ". ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " This file can then also be versioned using git to sync with another installation. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-dialog-actions", 1)(11, "div", 2)(12, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppStateComponent_Template_button_click_12_listener() {
            return ctx.exportAppXml(false);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "more_time");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Save state");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppStateComponent_Template_button_click_17_listener() {
            return ctx.resetApp(false);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "restore");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Restore state");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "App-State Versioning - Advanced");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " In Advanced mode you can sync all the site files (e.g. ADAM) used by this app ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "em");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "together with the data");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, ". ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " They will be placed in a folder inside ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "App_Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " and allow sync/restore with git or another server. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "app-feature-text-info", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "mat-dialog-actions", 1)(36, "div", 2)(37, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppStateComponent_Template_button_click_37_listener() {
            return ctx.exportAppXml(true);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "more_time");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Save with Assets");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppStateComponent_Template_button_click_42_listener() {
            return ctx.resetApp(true);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "restore");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Restore with Assets");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("featureNameId", "AppSyncWithSiteFiles");
        }
      },
      dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _features_feature_text_info_feature_text_info_component__WEBPACK_IMPORTED_MODULE_1__.FeatureTextInfoComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAtc3RhdGUuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9pbXBvcnQtZXhwb3J0LW1lbnUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 60366:
/*!**********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/app-administration.routing.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appAdministrationRoutes: () => (/* binding */ appAdministrationRoutes)
/* harmony export */ });
/* harmony import */ var _dev_rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dev-rest */ 13488);
/* harmony import */ var _edit_edit_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit/edit.routing */ 90390);
/* harmony import */ var _features_feature_info_dialog_feature_info_dialog_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/feature-info-dialog/feature-info-dialog.config */ 37010);
/* harmony import */ var _features_feature_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/feature-names */ 28136);
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../metadata */ 65217);
/* harmony import */ var _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../permissions/go-to-permissions */ 72437);
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ 85544);
/* harmony import */ var _app_admin_main_app_admin_main_dialog_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-admin-main/app-admin-main.dialog-config */ 13428);
/* harmony import */ var _app_configuration_message_message_dialog_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-configuration/message/message-dialog.config */ 36173);
/* harmony import */ var _copilot_copilot_specs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./copilot/copilot-specs */ 97214);
/* harmony import */ var _copilot_go_to_copilot__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./copilot/go-to-copilot */ 85898);
/* harmony import */ var _import_export_menu_app_state_app_state_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./import-export-menu/app-state/app-state.component */ 53677);
/* harmony import */ var _import_export_menu_data_bundles_data_bundles_detail_data_bundles_dialog_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./import-export-menu/data-bundles/data-bundles-detail/data-bundles-dialog.config */ 26164);
/* harmony import */ var _import_export_menu_data_bundles_data_bundles_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./import-export-menu/data-bundles/data-bundles.component */ 52475);
/* harmony import */ var _import_export_menu_export_app_parts_export_app_parts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./import-export-menu/export-app-parts/export-app-parts.component */ 87781);
/* harmony import */ var _import_export_menu_export_app_export_app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./import-export-menu/export-app/export-app.component */ 12215);
/* harmony import */ var _import_export_menu_import_app_parts_import_app_parts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./import-export-menu/import-app-parts/import-app-parts.component */ 94783);
/* harmony import */ var _import_export_menu_import_export_import_export_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./import-export-menu/import-export/import-export.component */ 99881);
/* harmony import */ var _sub_dialogs_analyze_settings_analyze_settings_dialog_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sub-dialogs/analyze-settings/analyze-settings-dialog.config */ 92525);
/* harmony import */ var _sub_dialogs_analyze_settings_settings_item_details_settings_item_details_config__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sub-dialogs/analyze-settings/settings-item-details/settings-item-details.config */ 29555);
/* harmony import */ var _sub_dialogs_edit_content_type_edit_content_type_dialog_config__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sub-dialogs/edit-content-type/edit-content-type-dialog.config */ 92567);
/* harmony import */ var _sub_dialogs_import_content_type_import_content_type_dialog_config__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sub-dialogs/import-content-type/import-content-type-dialog.config */ 45795);
/* harmony import */ var _sub_dialogs_import_data_bundles_import_data_bundles_dialog_config__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sub-dialogs/import-data-bundles/import-data-bundles-dialog.config */ 72975);
/* harmony import */ var _sub_dialogs_import_query_import_query_dialog_config__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sub-dialogs/import-query/import-query-dialog.config */ 12541);
/* harmony import */ var _sub_dialogs_import_view_import_view_dialog_config__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./sub-dialogs/import-view/import-view-dialog.config */ 61311);
/* harmony import */ var _sub_dialogs_language_permissions_language_permissions_dialog_config__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./sub-dialogs/language-permissions/language-permissions-dialog.config */ 81999);
/* harmony import */ var _sub_dialogs_views_usage_views_usage_dialog_config__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./sub-dialogs/views-usage/views-usage-dialog.config */ 63991);



























const appAdministrationRoutes = [{
  path: '',
  // experimental 2dm
  // ...DialogEntryComponent.routeFor(appAdministrationDialog),
  component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_6__.DialogEntryComponent,
  data: {
    dialog: _app_admin_main_app_admin_main_dialog_config__WEBPACK_IMPORTED_MODULE_7__.appAdministrationDialog
  },
  children: [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'home',
    loadComponent: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_app-administration_getting-started_getting-started_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./getting-started/getting-started.component */ 86442)).then(mod => mod.GettingStartedComponent),
    data: {
      title: 'App Home',
      breadcrumb: 'Info'
    }
  }, {
    path: 'data/:scope',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_data_data_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./data/data.component */ 9756)).then(mod => mod.DataComponent),
    children: [{
      path: 'import',
      // experimental 2dm
      // ...DialogEntryComponent.routeFor(importContentTypeDialog, { title: 'Import Content Type' }),
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_6__.DialogEntryComponent,
      data: {
        dialog: _sub_dialogs_import_content_type_import_content_type_dialog_config__WEBPACK_IMPORTED_MODULE_21__.importContentTypeDialog,
        title: 'Import Content Type'
      }
    }, {
      path: 'items/:contentTypeStaticName',
      loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../content-items/content-items.routing */ 30200)).then(m => m.contentItemsRoutes)
    }, ..._edit_edit_routing__WEBPACK_IMPORTED_MODULE_1__.EditRoutes, {
      path: 'add',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_6__.DialogEntryComponent,
      data: {
        dialog: _sub_dialogs_edit_content_type_edit_content_type_dialog_config__WEBPACK_IMPORTED_MODULE_20__.editContentTypeDialog,
        title: 'Add Content Type'
      }
    }, {
      path: ':contentTypeStaticName/edit',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_6__.DialogEntryComponent,
      data: {
        dialog: _sub_dialogs_edit_content_type_edit_content_type_dialog_config__WEBPACK_IMPORTED_MODULE_20__.editContentTypeDialog,
        title: 'Edit Content Type'
      }
    }, ..._metadata__WEBPACK_IMPORTED_MODULE_4__.GoToMetadata.getRoutes(), _dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.route, {
      path: 'fields/:contentTypeStaticName',
      // May change how things are injected, so be careful when evaluating
      loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../content-type-fields/content-type-fields.routing */ 6708)).then(m => m.contentTypeFieldsRoutes),
      data: {
        title: 'Content Type Fields'
      }
    }, {
      path: 'export/:contentTypeStaticName',
      loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_content-export_content-export_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../content-export/content-export.routing */ 47562)).then(m => m.ContentExportRoutes),
      data: {
        title: 'Export Items'
      }
    }, {
      path: ':contentTypeStaticName/import',
      loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_content-import_content-import_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../content-import/content-import.routing */ 66880)).then(m => m.contentImportRoutes),
      data: {
        title: 'Import Items'
      }
    }, _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_5__.GoToPermissions.route],
    data: {
      title: 'App Data',
      breadcrumb: "Data"
    }
  }, {
    path: `data-${_copilot_go_to_copilot__WEBPACK_IMPORTED_MODULE_10__.GoToCopilot.route}`,
    loadComponent: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_app-administration_copilot_page_copilot-page_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./copilot/page/copilot-page.component */ 79630)).then(mod => mod.CopilotPageComponent),
    data: _copilot_copilot_specs__WEBPACK_IMPORTED_MODULE_9__.CopilotSpecs.data
  }, {
    path: _dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.routeData,
    loadComponent: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_app-administration_data-rest-api_data-rest-api_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./data-rest-api/data-rest-api.component */ 9086)).then(mod => mod.DataRestApiComponent),
    data: {
      title: 'Rest-Api Data',
      breadcrumb: 'Rest-Api Data'
    },
    children: [{
      path: `:${_dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.paramTypeName}`,
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_expansion_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_tabs_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_dev-rest_dev-rest-urls-and-code_dev-rest-urls-and-code_compon-f0cd0a"), __webpack_require__.e("projects_eav-ui_src_app_dev-rest_data_data_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../dev-rest/data/data.component */ 32292)).then(mod => mod.DevRestDataComponent),
      data: {
        breadcrumb: 'Rest-Api Data'
      },
      children: [_permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_5__.GoToPermissions.route]
    }]
  }, {
    path: 'queries',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_queries_queries_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./queries/queries.component */ 83242)).then(mod => mod.QueriesComponent),
    children: [{
      path: 'import',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_6__.DialogEntryComponent,
      data: {
        dialog: _sub_dialogs_import_query_import_query_dialog_config__WEBPACK_IMPORTED_MODULE_23__.importQueryDialog,
        title: 'Import Query'
      }
    }, ..._edit_edit_routing__WEBPACK_IMPORTED_MODULE_1__.EditRoutesNoHistory, ..._metadata__WEBPACK_IMPORTED_MODULE_4__.GoToMetadata.getRoutes(), {
      ..._permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_5__.GoToPermissions.route,
      data: {
        title: 'Query Permissions'
      }
    }, _dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.route],
    data: {
      title: 'App Queries',
      breadcrumb: "Queries"
    }
  }, {
    path: _dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.routeQuery,
    loadComponent: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_app-administration_queries-rest-api_queries-rest-api_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./queries-rest-api/queries-rest-api.component */ 73960)).then(mod => mod.QueriesRestApiComponent),
    data: {
      title: 'Rest-Api Queries',
      breadcrumb: 'Rest-Api Queries'
    },
    children: [{
      path: `:${_dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.paramQuery}`,
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_expansion_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_tabs_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_dev-rest_dev-rest-urls-and-code_dev-rest-urls-and-code_compon-f0cd0a"), __webpack_require__.e("default-projects_eav-ui_src_app_dev-rest_query_query_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../dev-rest/query/query.component */ 99774)).then(mod => mod.DevRestQueryComponent),
      data: {
        breadcrumb: 'Rest-Api Queries'
      },
      children: [_permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_5__.GoToPermissions.route]
    }]
  }, {
    path: 'views',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_views_views_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/views.component */ 16278)).then(mod => mod.ViewsComponent),
    children: [{
      path: 'import',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_6__.DialogEntryComponent,
      data: {
        dialog: _sub_dialogs_import_view_import_view_dialog_config__WEBPACK_IMPORTED_MODULE_24__.importViewDialog,
        title: 'Import View'
      }
    }, {
      path: 'usage/:guid',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_6__.DialogEntryComponent,
      data: {
        dialog: _sub_dialogs_views_usage_views_usage_dialog_config__WEBPACK_IMPORTED_MODULE_26__.viewsUsageDialog
      }
    }, ..._edit_edit_routing__WEBPACK_IMPORTED_MODULE_1__.EditRoutes, {
      ..._permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_5__.GoToPermissions.route,
      data: {
        title: 'View Permissions'
      }
    }, ..._metadata__WEBPACK_IMPORTED_MODULE_4__.GoToMetadata.getRoutes()],
    data: {
      title: 'App Views',
      breadcrumb: "Views"
    }
  }, {
    path: `views-${_copilot_go_to_copilot__WEBPACK_IMPORTED_MODULE_10__.GoToCopilot.route}`,
    loadComponent: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_app-administration_copilot_page_copilot-page_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./copilot/page/copilot-page.component */ 79630)).then(mod => mod.CopilotPageComponent),
    data: _copilot_copilot_specs__WEBPACK_IMPORTED_MODULE_9__.CopilotSpecs.views
  }, {
    path: 'web-api',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_edit_form_form-config_service_ts-projects_eav-ui_src_app_edit-b26668"), __webpack_require__.e("default-projects_eav-ui_src_app_create-file-dialog_create-file-dialog_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_web-api_web-api_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./web-api/web-api.component */ 61278)).then(mod => mod.WebApiComponent),
    data: {
      title: 'App WebApi',
      breadcrumb: "WebApi"
    },
    children: [_dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.route]
  }, {
    path: `web-api-${_copilot_go_to_copilot__WEBPACK_IMPORTED_MODULE_10__.GoToCopilot.route}`,
    loadComponent: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_app-administration_copilot_page_copilot-page_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./copilot/page/copilot-page.component */ 79630)).then(mod => mod.CopilotPageComponent),
    data: _copilot_copilot_specs__WEBPACK_IMPORTED_MODULE_9__.CopilotSpecs.webApi
  }, {
    path: _dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.routeWebApi,
    loadComponent: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_app-administration_web-api-rest-api_web-api-rest-api_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./web-api-rest-api/web-api-rest-api.component */ 79262)).then(mod => mod.WebApiRestApiComponent),
    data: {
      title: 'Rest-Api Web Api',
      breadcrumb: 'Rest-Api Web Api'
    },
    children: [{
      path: `:${_dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.paramApiPath}`,
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_expansion_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_tabs_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_dev-rest_dev-rest-urls-and-code_dev-rest-urls-and-code_compon-f0cd0a"), __webpack_require__.e("projects_eav-ui_src_app_dev-rest_api_api_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../dev-rest/api/api.component */ 42438)).then(mod => mod.DevRestApiComponent),
      data: {
        breadcrumb: 'Rest-Api Web Api'
      },
      children: [_permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_5__.GoToPermissions.route]
    }]
  }, {
    path: 'app',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_app-configuration_app-configuration_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./app-configuration/app-configuration.component */ 72898)).then(mod => mod.AppConfigurationComponent),
    data: {
      title: 'Manage App',
      breadcrumb: "Manage App"
    },
    children: [..._metadata__WEBPACK_IMPORTED_MODULE_4__.GoToMetadata.getRoutes(),
    // Edit App Properties / Settings / Resources
    ..._edit_edit_routing__WEBPACK_IMPORTED_MODULE_1__.EditRoutes, {
      path: 'fields/:contentTypeStaticName',
      loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../content-type-fields/content-type-fields.routing */ 6708)).then(m => m.contentTypeFieldsRoutes),
      data: {
        title: 'Edit Fields of App Settings & Resources'
      }
    }, {
      path: 'language-permissions',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_6__.DialogEntryComponent,
      data: {
        dialog: _sub_dialogs_language_permissions_language_permissions_dialog_config__WEBPACK_IMPORTED_MODULE_25__.languagePermissionsDialog,
        title: 'Language Permissions'
      },
      children: [{
        ..._permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_5__.GoToPermissions.route,
        data: {
          title: 'Language Permissions'
        }
      }]
    }, {
      path: 'edit-language-permissions',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_6__.DialogEntryComponent,
      data: {
        dialog: _features_feature_info_dialog_feature_info_dialog_config__WEBPACK_IMPORTED_MODULE_2__.featureInfoDialog,
        featureId: _features_feature_names__WEBPACK_IMPORTED_MODULE_3__.FeatureNames.PermissionsByLanguage
      },
      children: [{
        ..._permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_5__.GoToPermissions.route
      }]
    }, {
      ..._permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_5__.GoToPermissions.route,
      data: {
        title: 'App Permissions'
      }
    }, {
      path: 'analyze/:part',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_6__.DialogEntryComponent,
      data: {
        dialog: _sub_dialogs_analyze_settings_analyze_settings_dialog_config__WEBPACK_IMPORTED_MODULE_18__.analyzeSettingsDialog,
        title: 'Analyze Settings / Resources'
      },
      children: [{
        path: 'details/:view/:settingsItemKey',
        component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_6__.DialogEntryComponent,
        data: {
          dialog: _sub_dialogs_analyze_settings_settings_item_details_settings_item_details_config__WEBPACK_IMPORTED_MODULE_19__.settingsItemDetailsDialog,
          title: 'Settings / Resources Item Details'
        }
      }]
    }, {
      path: 'message/:type',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_6__.DialogEntryComponent,
      data: {
        dialog: _app_configuration_message_message_dialog_config__WEBPACK_IMPORTED_MODULE_8__.messageDialog,
        i18n: 'An unexpected error happened.',
        errComponent: 'not found'
      }
    }]
  }, {
    path: 'import-export',
    component: _import_export_menu_import_export_import_export_component__WEBPACK_IMPORTED_MODULE_17__.ImportExportComponent,
    data: {
      breadcrumb: 'Import Export'
    }
  }, {
    path: 'export-app',
    component: _import_export_menu_export_app_export_app_component__WEBPACK_IMPORTED_MODULE_15__.ExportAppComponent,
    data: {
      breadcrumb: 'Export this entire App'
    }
  }, {
    path: 'data-bundles',
    component: _import_export_menu_data_bundles_data_bundles_component__WEBPACK_IMPORTED_MODULE_13__.DataBundlesComponent,
    data: {
      breadcrumb: 'Data Bundles'
    },
    children: [..._edit_edit_routing__WEBPACK_IMPORTED_MODULE_1__.EditRoutes, {
      path: 'details/:guid/:name',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_6__.DialogEntryComponent,
      data: {
        dialog: _import_export_menu_data_bundles_data_bundles_detail_data_bundles_dialog_config__WEBPACK_IMPORTED_MODULE_12__.dataBundlesDialog,
        title: 'Data Bundles Details'
      }
    }, {
      path: 'import',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_6__.DialogEntryComponent,
      data: {
        dialog: _sub_dialogs_import_data_bundles_import_data_bundles_dialog_config__WEBPACK_IMPORTED_MODULE_22__.importDataBundlesDialog,
        title: 'Import Data Bundle'
      }
    }]
  }, {
    path: 'export-parts',
    component: _import_export_menu_export_app_parts_export_app_parts_component__WEBPACK_IMPORTED_MODULE_14__.ExportAppPartsComponent,
    data: {
      breadcrumb: 'Export parts of this App'
    }
  }, {
    path: 'import-parts',
    component: _import_export_menu_import_app_parts_import_app_parts_component__WEBPACK_IMPORTED_MODULE_16__.ImportAppPartsComponent,
    data: {
      breadcrumb: 'Import parts of this App'
    }
  }, {
    path: 'app-state',
    component: _import_export_menu_app_state_app_state_component__WEBPACK_IMPORTED_MODULE_11__.AppStateComponent,
    data: {
      breadcrumb: 'App-State Versioning'
    }
  }]
}];

/***/ }),

/***/ 61311:
/*!*********************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/import-view/import-view-dialog.config.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   importViewDialog: () => (/* binding */ importViewDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const importViewDialog = {
  name: 'IMPORT_VIEW_DIALOG',
  initContext: false,
  panelSize: 'medium',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        ImportViewComponent
      } = yield __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_app-administration_sub-dialogs_import-view_import-view_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./import-view.component */ 30439));
      return ImportViewComponent;
    })();
  }
};

/***/ }),

/***/ 63991:
/*!*********************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/views-usage/views-usage-dialog.config.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   viewsUsageDialog: () => (/* binding */ viewsUsageDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const viewsUsageDialog = {
  name: 'VIEWS_USAGE_DIALOG',
  initContext: false,
  panelSize: 'large',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        ViewsUsageComponent
      } = yield __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_app-administration_sub-dialogs_views-usage_views-usage_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views-usage.component */ 39903));
      return ViewsUsageComponent;
    })();
  }
};

/***/ }),

/***/ 65217:
/*!***************************************************!*\
  !*** ./projects/eav-ui/src/app/metadata/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoToMetadata: () => (/* reexport safe */ _go_to_metadata__WEBPACK_IMPORTED_MODULE_1__.GoToMetadata)
/* harmony export */ });
/* harmony import */ var _models_metadata_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/metadata.model */ 11884);
/* harmony import */ var _go_to_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./go-to-metadata */ 41463);



/***/ }),

/***/ 66545:
/*!*********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/admin-shared/docs-link-helper/docs-link-helper.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocsLinkHelperComponent: () => (/* binding */ DocsLinkHelperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);







class DocsLinkHelperComponent {
  constructor() {
    this.link = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.label = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.icon = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
  }
  static {
    this.ɵfac = function DocsLinkHelperComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocsLinkHelperComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DocsLinkHelperComponent,
      selectors: [["app-docs-link-helper"]],
      inputs: {
        link: [1, "link"],
        label: [1, "label"],
        icon: [1, "icon"]
      },
      decls: 5,
      vars: 3,
      consts: [["mat-button", "", "target", "_blank", "tippy", "online documentation", 1, "eav-button__with-icon", 3, "href"], ["mat-icon", "", 1, "eav-icon"]],
      template: function DocsLinkHelperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0)(1, "mat-icon", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.link(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_1_0 = ctx.icon()) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "menu_book");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.label());
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatAnchor, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 72975:
/*!*************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/import-data-bundles/import-data-bundles-dialog.config.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   importDataBundlesDialog: () => (/* binding */ importDataBundlesDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const importDataBundlesDialog = {
  name: 'IMPORT_DATA_BUNDLES_DIALOG',
  initContext: false,
  panelSize: 'medium',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        ImportDataBundlesComponent
      } = yield __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_app-administration_sub-dialogs_import-data-bundles_import-data-bundle-7409e3").then(__webpack_require__.bind(__webpack_require__, /*! ./import-data-bundles.component */ 76983));
      return ImportDataBundlesComponent;
    })();
  }
};

/***/ }),

/***/ 81999:
/*!***************************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/language-permissions/language-permissions-dialog.config.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   languagePermissionsDialog: () => (/* binding */ languagePermissionsDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const languagePermissionsDialog = {
  name: 'LANGUAGE_PERMISSIONS',
  initContext: false,
  panelSize: 'large',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        LanguagePermissionsComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_sub-dialogs_language-permissions_language-permissi-a91b40")]).then(__webpack_require__.bind(__webpack_require__, /*! ./language-permissions.component */ 10967));
      return LanguagePermissionsComponent;
    })();
  }
};

/***/ }),

/***/ 84242:
/*!******************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/import-export-menu/data-bundles/data-bundles-query.service.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataBundlesQueryService: () => (/* binding */ DataBundlesQueryService)
/* harmony export */ });
/* harmony import */ var projects_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/core */ 88692);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var _shared_services_query_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/query.service */ 54839);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 90852);






/**
 * Helper to handle dialog routings, especially:
 * 1. handling on-child-closed events (it also takes care of subscriptions)
 * 2. accessing the router and route - a very common task when you have dialogs
 */
class DataBundlesQueryService {
  #queryService = (0,projects_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_services_query_service__WEBPACK_IMPORTED_MODULE_1__.QueryService);
  constructor(translate) {
    this.translate = translate;
  }
  fetchQuery(guid) {
    const stream = 'Default';
    const params = `configurationguid=${guid}`;
    return this.#queryService.getFromQuery(`System.BundleDetails/${stream}`, params, null).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(data => {
      return data[stream];
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error(`${this.translate.instant('Fields.Picker.QueryError:')} - ${error.data}`);
      alert(`${this.translate.instant('Fields.Picker.QueryError:')} - ${error.data}`);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
    }));
  }
  static {
    this.ɵfac = function DataBundlesQueryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DataBundlesQueryService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: DataBundlesQueryService,
      factory: DataBundlesQueryService.ɵfac
    });
  }
}

/***/ }),

/***/ 85898:
/*!*****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/copilot/go-to-copilot.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoToCopilot: () => (/* binding */ GoToCopilot)
/* harmony export */ });
class GoToCopilot {
  static {
    this.route = 'copilot';
  }
  static routeDefinition(part) {
    return {
      name: 'Copilot',
      icon: 'support_agent',
      svgIcon: false,
      path: `${part}-${GoToCopilot.route}`
    };
  }
}

/***/ }),

/***/ 87781:
/*!**********************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/import-export-menu/export-app-parts/export-app-parts.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExportAppPartsComponent: () => (/* binding */ ExportAppPartsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core */ 88692);
/* harmony import */ var _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/field-hint/field-hint.component */ 43758);
/* harmony import */ var _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/constants/dropdown-insert-value.constant */ 5858);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/directives/click-stop-propagation.directive */ 39333);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _services_content_types_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/content-types.service */ 17693);
/* harmony import */ var _services_export_app_parts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/export-app-parts.service */ 71475);

























function ExportAppPartsComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scopeOption_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", scopeOption_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", scopeOption_r1.name, " ");
  }
}
function ExportAppPartsComponent_Conditional_27_For_5_Conditional_5_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 15)(1, "div", 16)(2, "mat-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ExportAppPartsComponent_Conditional_27_For_5_Conditional_5_For_4_Template_mat_checkbox_ngModelChange_2_listener($event) {
      const template_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](template_r5._export, $event) || (template_r5._export = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const template_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", template_r5._export);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", template_r5.Name, " (", template_r5.Id, ")");
  }
}
function ExportAppPartsComponent_Conditional_27_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ul", 19)(1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Templates");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](3, ExportAppPartsComponent_Conditional_27_For_5_Conditional_5_For_4_Template, 5, 3, "li", 15, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contentType_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](contentType_r3.Templates);
  }
}
function ExportAppPartsComponent_Conditional_27_For_5_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 15)(1, "div", 16)(2, "mat-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ExportAppPartsComponent_Conditional_27_For_5_Conditional_6_For_4_Template_mat_checkbox_ngModelChange_2_listener($event) {
      const entity_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](entity_r7._export, $event) || (entity_r7._export = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const entity_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", entity_r7._export);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", entity_r7.Title, " (", entity_r7.Id, ")");
  }
}
function ExportAppPartsComponent_Conditional_27_For_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ul", 19)(1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Entities");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](3, ExportAppPartsComponent_Conditional_27_For_5_Conditional_6_For_4_Template, 5, 3, "li", 15, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contentType_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](contentType_r3.Entities);
  }
}
function ExportAppPartsComponent_Conditional_27_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 15)(1, "div", 16)(2, "mat-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ExportAppPartsComponent_Conditional_27_For_5_Template_mat_checkbox_ngModelChange_2_listener($event) {
      const contentType_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](contentType_r3._export, $event) || (contentType_r3._export = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ExportAppPartsComponent_Conditional_27_For_5_Conditional_5_Template, 5, 0, "ul", 19)(6, ExportAppPartsComponent_Conditional_27_For_5_Conditional_6_Template, 5, 0, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contentType_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", contentType_r3._export);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", contentType_r3.Name, " (", contentType_r3.Id, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](contentType_r3.Templates.length > 0 ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](contentType_r3.Entities.length > 0 ? 6 : -1);
  }
}
function ExportAppPartsComponent_Conditional_27_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 15)(1, "div", 16)(2, "mat-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ExportAppPartsComponent_Conditional_27_For_10_Template_mat_checkbox_ngModelChange_2_listener($event) {
      const template_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](template_r9._export, $event) || (template_r9._export = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const template_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", template_r9._export);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", template_r9.Name, " (", template_r9.Id, ")");
  }
}
function ExportAppPartsComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "ul", 13)(2, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Content Types");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](4, ExportAppPartsComponent_Conditional_27_For_5_Template, 7, 5, "li", 15, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ul", 13)(7, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Templates Without Content Types");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](9, ExportAppPartsComponent_Conditional_27_For_10_Template, 5, 3, "li", 15, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx_r9.contentInfo()().ContentTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx_r9.contentInfo()().TemplatesWithoutContentTypes);
  }
}
class ExportAppPartsComponent {
  #exportAppPartsSvc;
  #contentTypesSvc;
  constructor() {
    this.hostClass = 'dialog-component';
    this.#exportAppPartsSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_export_app_parts_service__WEBPACK_IMPORTED_MODULE_7__.ExportAppPartsService);
    this.#contentTypesSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_content_types_service__WEBPACK_IMPORTED_MODULE_6__.ContentTypesService);
    this.lockScope = true;
    this.dropdownInsertValue = _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_2__.dropdownInsertValue;
    this.isExporting = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.signal)(false);
    this.exportScope = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.signal)(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.scopes.default.value);
    this.contentInfo = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.computed)(() => {
      const exportScope = this.exportScope();
      return this.#exportAppPartsSvc.getContentInfo(exportScope, null);
    });
    this.scopeOptions = this.#contentTypesSvc.getScopesSig(null);
    this.loading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.computed)(() => {
      const contentInfo = this.contentInfo();
      const scopeOptions = this.scopeOptions();
      return !contentInfo || !scopeOptions;
    });
  }
  exportAppParts() {
    this.isExporting.set(true);
    // spm TODO: maybe optimize these functions to not loop content types and entities multiple times for no reason
    // spm TODO: figure out how to capture window loading to disable export button
    const contentTypeIds = this.#selectedContentTypes().map(contentType => contentType.Id);
    const templateIds = this.#selectedTemplates().map(template => template.Id);
    let entityIds = this.#selectedEntities().map(entity => entity.Id);
    entityIds = entityIds.concat(templateIds);
    this.#exportAppPartsSvc.exportParts(contentTypeIds, entityIds, templateIds);
    this.isExporting.set(false);
  }
  changeScope(newScope) {
    if (newScope === _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_2__.dropdownInsertValue) {
      newScope = prompt('This is an advanced feature to show content-types of another scope. Don\'t use this if you don\'t know what you\'re doing, as content-types of other scopes are usually hidden for a good reason.') || _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.scopes.default.value;
      if (!this.scopeOptions().find(option => option.value === newScope)) {
        const newScopeOption = {
          name: newScope,
          value: newScope
        };
        const scopeOptionsTemp = this.scopeOptions();
        scopeOptionsTemp.unshift(newScopeOption);
        this.scopeOptions.set(scopeOptionsTemp);
      }
    }
    this.exportScope.set(newScope);
  }
  unlockScope() {
    this.lockScope = !this.lockScope;
    if (this.lockScope) {
      this.exportScope.set(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.scopes.default.value);
    }
  }
  #selectedContentTypes() {
    return this.contentInfo()().ContentTypes.filter(contentType => contentType._export);
  }
  #selectedEntities() {
    let entities = [];
    for (const contentType of this.contentInfo()().ContentTypes) {
      entities = entities.concat(contentType.Entities.filter(entity => entity._export));
    }
    return entities;
  }
  #selectedTemplates() {
    let templates = [];
    // The ones with...
    for (const contentType of this.contentInfo()().ContentTypes) templates = templates.concat(contentType.Templates.filter(template => template._export));
    // ...and without content types
    templates = templates.concat(this.contentInfo()().TemplatesWithoutContentTypes.filter(template => template._export));
    return templates;
  }
  static {
    this.ɵfac = function ExportAppPartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ExportAppPartsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: ExportAppPartsComponent,
      selectors: [["app-export-app-parts"]],
      hostVars: 1,
      hostBindings: function ExportAppPartsComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
      decls: 34,
      vars: 7,
      consts: [[1, "outer-container-app"], [1, "form-height"], ["href", "https://2sxc.org/en/help?tag=export", "target", "_blank"], [1, "eav-edit-input"], ["color", "accent", 1, "eav-mat-form-field"], ["name", "Scope", 3, "ngModelChange", "ngModel", "disabled"], [3, "value"], ["mat-icon-button", "", "matTextSuffix", "", 1, "enable", 3, "tippy"], ["appClickStopPropagation", "", 3, "click"], ["appClickStopPropagation", "", "href", "https://2sxc.org/help?tag=scope", "target", "_blank"], [1, "eav-dialog-actions", 2, "height", "73px"], ["mat-button", "", "tippy", "Export selected Parts", 1, "eav-button__with-icon", 3, "click", "disabled"], [1, "eav-icon"], [1, "eav-content-info__list", "eav-content-info__base"], [1, "eav-content-info__title"], [1, "eav-content-info__item"], [1, "eav-option-box"], [3, "ngModelChange", "ngModel"], [1, "eav-option-box__text"], [1, "eav-content-info__list"], [1, "eav-content-info__subtitle"]],
      template: function ExportAppPartsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Export Content and Templates from this App");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 1)(4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "To export Content-Types, Queries, Views or Data, use the respective tabs.");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " This is an advanced feature to export parts of the app. The export will create an xml file which can be imported into another site or app. To export the entire content of the app (for example when duplicating the entire site), go to the app export. For further help visit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "2sxc Help");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, ". ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 3)(12, "mat-form-field", 4)(13, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Scope");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "mat-select", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ExportAppPartsComponent_Template_mat_select_ngModelChange_15_listener($event) {
            return ctx.changeScope($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](16, ExportAppPartsComponent_For_17_Template, 2, 2, "mat-option", 6, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "mat-option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Other...");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "button", 7)(21, "mat-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ExportAppPartsComponent_Template_mat_icon_click_21_listener() {
            return ctx.unlockScope();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "app-field-hint");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, " The scope should almost never be changed - ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "see help");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, ExportAppPartsComponent_Conditional_27_Template, 11, 0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "mat-dialog-actions", 10)(29, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ExportAppPartsComponent_Template_button_click_29_listener() {
            return ctx.exportAppParts();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "mat-icon", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "cloud_download");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Export Parts");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.exportScope())("disabled", ctx.lockScope);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx.scopeOptions());
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.dropdownInsertValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tippy", ctx.lockScope ? "Unlock" : "Lock");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lockScope ? "lock" : "lock_open", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.contentInfo()() ? 27 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.loading() || ctx.isExporting());
        }
      },
      dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOptionModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckbox, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogActions, _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_1__.FieldHintComponent, _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_4__.ClickStopPropagationDirective, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_5__.TippyDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogModule],
      styles: [".eav-edit-input[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n}\n\n.eav-content-info__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n}\n.eav-content-info__subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n}\n.eav-content-info__list[_ngcontent-%COMP%] {\n  font-size: 14px;\n  list-style-type: none;\n}\n.eav-content-info__base[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.eav-content-info__item[_ngcontent-%COMP%] {\n  border-top: 1px solid #ddd;\n  padding: 2px;\n}\n\n.eav-option-box[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n.eav-option-box__text[_ngcontent-%COMP%] {\n  white-space: normal;\n  font-size: 14px;\n}\n\n.form-height[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 24px - 56px - 200px);\n  overflow: auto;\n}\n\n.enable[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cG9ydC1hcHAtcGFydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUo7QUFHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQURKO0FBSUU7RUFDRSxlQUFBO0VBQ0EscUJBQUE7QUFGSjtBQUtFO0VBQ0UsVUFBQTtBQUhKO0FBTUU7RUFDRSwwQkFBQTtFQUNBLFlBQUE7QUFKSjs7QUFRQTtFQUNFLGFBQUE7QUFMRjtBQU9FO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBTEo7O0FBU0E7RUFDRSw2Q0FBQTtFQUNBLGNBQUE7QUFORjs7QUFVQTtFQUNFLG1CQUFBO0FBUEYiLCJmaWxlIjoiZXhwb3J0LWFwcC1wYXJ0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lYXYtZWRpdC1pbnB1dCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDhweDtcclxufVxyXG5cclxuLmVhdi1jb250ZW50LWluZm8ge1xyXG4gICZfX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgJl9fc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAmX19saXN0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB9XHJcblxyXG4gICZfX2Jhc2Uge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gICZfX2l0ZW0ge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZWF2LW9wdGlvbi1ib3gge1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcblxyXG4gICZfX3RleHQge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWhlaWdodCB7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDI0cHggLSA1NnB4IC0gMjAwcHgpO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLmVuYWJsZXtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG5cclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9pbXBvcnQtZXhwb3J0LW1lbnUvZXhwb3J0LWFwcC1wYXJ0cy9leHBvcnQtYXBwLXBhcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFKO0FBR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUlFO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FBRko7QUFLRTtFQUNFLFVBQUE7QUFISjtBQU1FO0VBQ0UsMEJBQUE7RUFDQSxZQUFBO0FBSko7O0FBUUE7RUFDRSxhQUFBO0FBTEY7QUFPRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQUxKOztBQVNBO0VBQ0UsNkNBQUE7RUFDQSxjQUFBO0FBTkY7O0FBVUE7RUFDRSxtQkFBQTtBQVBGO0FBQ0EsNGlEQUE0aUQiLCJzb3VyY2VzQ29udGVudCI6WyIuZWF2LWVkaXQtaW5wdXQge1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5lYXYtY29udGVudC1pbmZvIHtcclxuICAmX190aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gICZfX3N1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgJl9fbGlzdCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmX19iYXNlIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAmX19pdGVtIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmVhdi1vcHRpb24tYm94IHtcclxuICBtYXJnaW46IDhweCAwO1xyXG5cclxuICAmX190ZXh0IHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1oZWlnaHQge1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyNHB4IC0gNTZweCAtIDIwMHB4KTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuXHJcbi5lbmFibGV7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 92525:
/*!*******************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/analyze-settings/analyze-settings-dialog.config.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   analyzeSettingsDialog: () => (/* binding */ analyzeSettingsDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const analyzeSettingsDialog = {
  name: 'ANALYZE_SETTINGS',
  initContext: false,
  panelSize: 'large',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        AnalyzeSettingsComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_sub-dialogs_analyze-settings_analyze-settings_comp-6cd38e")]).then(__webpack_require__.bind(__webpack_require__, /*! ./analyze-settings.component */ 55117));
      return AnalyzeSettingsComponent;
    })();
  }
};

/***/ }),

/***/ 92567:
/*!*********************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/edit-content-type/edit-content-type-dialog.config.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editContentTypeDialog: () => (/* binding */ editContentTypeDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const editContentTypeDialog = {
  name: 'EDIT_CONTENT_TYPE_DIALOG',
  initContext: false,
  panelSize: 'small',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        EditContentTypeComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_expansion_mjs"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_sub-dialogs_edit-content-type_edit-content-type_co-2abec4")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-content-type.component */ 61855));
      return EditContentTypeComponent;
    })();
  }
};

/***/ }),

/***/ 94035:
/*!************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/import-export-menu/data-bundles/data-bundles.service.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataBundlesService: () => (/* binding */ DataBundlesService)
/* harmony export */ });
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


const webApiDataRootBundleImport = 'admin/data/BundleImport';
const webApiDataRootJsonBundleExport = 'admin/data/BundleExport';
const webApiDataRootBundleSave = 'admin/data/BundleSave';
const webApiDataRootBundleRestore = 'admin/data/BundleRestore';
class DataBundlesService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__.HttpServiceBase {
  import(files) {
    const formData = new FormData();
    for (const file of files) {
      formData.append('File', file);
    }
    return this.http.post(this.apiUrl(webApiDataRootBundleImport), formData, {
      params: {
        appId: this.appId,
        zoneId: this.zoneId
      }
    });
  }
  exportDataBundle(Guid) {
    const params = new URLSearchParams({
      appId: this.appId,
      exportConfiguration: Guid,
      indentation: '1'
    });
    const url = `${this.apiUrl(webApiDataRootJsonBundleExport)}?${params.toString()}`;
    window.open(url, '_blank', '');
  }
  saveDataBundles(Guid) {
    return this.http.get(this.apiUrl(webApiDataRootBundleSave), {
      params: {
        appId: this.appId,
        exportConfiguration: Guid,
        indentation: '1'
      }
    });
  }
  restoreDataBundles(fileName) {
    return this.http.get(this.apiUrl(webApiDataRootBundleRestore), {
      params: {
        fileName: fileName,
        zoneId: this.zoneId,
        appId: this.appId
      }
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵDataBundlesService_BaseFactory;
      return function DataBundlesService_Factory(__ngFactoryType__) {
        return (ɵDataBundlesService_BaseFactory || (ɵDataBundlesService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DataBundlesService)))(__ngFactoryType__ || DataBundlesService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DataBundlesService,
      factory: DataBundlesService.ɵfac
    });
  }
}

/***/ }),

/***/ 94783:
/*!**********************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/import-export-menu/import-app-parts/import-app-parts.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportAppPartsComponent: () => (/* binding */ ImportAppPartsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 18537);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core */ 88692);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/base.component */ 43176);
/* harmony import */ var _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/file-upload-dialog */ 34616);
/* harmony import */ var _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/directives/drag-and-drop.directive */ 34575);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pipes/safe-html.pipe */ 69914);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/context */ 68873);
/* harmony import */ var _shared_services_getting_started_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/getting-started.service */ 12987);
/* harmony import */ var _shared_services_installer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/installer.service */ 14147);
/* harmony import */ var _services_import_app_parts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/import-app-parts.service */ 58624);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 80436);


























const _c0 = ["installerWindow"];
const _c1 = (a0, a1, a2) => ({
  "sxc-message-warning": a0,
  "sxc-message-success": a1,
  "sxc-message-error": a2
});
function ImportAppPartsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "mat-spinner", 3);
  }
}
function ImportAppPartsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Select or drop file");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ImportAppPartsComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](file_r3.name);
  }
}
function ImportAppPartsComponent_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Upload succeeded. See the messages below for more information. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ImportAppPartsComponent_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Upload failed. See the messages below for more information. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ImportAppPartsComponent_Conditional_19_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r4 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](2, _c1, message_r4.MessageType === ctx_r4.FileUploadMessageTypes.Warning, message_r4.MessageType === ctx_r4.FileUploadMessageTypes.Success, message_r4.MessageType === ctx_r4.FileUploadMessageTypes.Error));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", message_r4.Text, " ");
  }
}
function ImportAppPartsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ImportAppPartsComponent_Conditional_19_Conditional_1_Template, 2, 0, "div", 8)(2, ImportAppPartsComponent_Conditional_19_Conditional_2_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](3, ImportAppPartsComponent_Conditional_19_For_4_Template, 2, 6, "div", 10, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx_r4.result().Success ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](!ctx_r4.result().Success ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](ctx_r4.result().Messages);
  }
}
function ImportAppPartsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-dialog-actions", 7)(1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportAppPartsComponent_Conditional_20_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r4.upload());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r4.files().length || ctx_r4.uploading() || !!ctx_r4.result());
  }
}
class ImportAppPartsComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
  constructor(snackBar, sanitizer, context, changeDetectorRef) {
    super();
    this.snackBar = snackBar;
    this.sanitizer = sanitizer;
    this.context = context;
    this.changeDetectorRef = changeDetectorRef;
    // Code are copied from file-upload-dialog
    this.importAppPartsService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_import_app_parts_service__WEBPACK_IMPORTED_MODULE_8__.ImportAppPartsService);
    this.hostClass = 'dialog-component';
    this.uploadType = _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_2__.UploadTypes.AppPart;
    this.uploading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.signal)(false);
    // showAppCatalogTemp = signal(false);
    this.result = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.signal)(undefined);
    this.files = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.signal)([]);
    this.FileUploadMessageTypes = _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_2__.FileUploadMessageTypes;
    this.UploadTypes = _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_2__.UploadTypes;
    this.showAppCatalog$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(false);
    this.showProgress = false;
    this.remoteInstallerUrl = '';
    this.ready = false;
    this.importData = {
      title: 'Import Content and Templates into this App',
      description: `
    Import content and templates from a content export (zip) or partial export (xml) to this app.
    The entire content of the selected file will be imported.
    If you want to import an entire app, go to the <em>Apps Management</em>.
    For further help visit <a href="https://2sxc.org/en/help?tag=import" target="_blank">2sxc Help</a>.
    `,
      allowedFileTypes: 'xml',
      upload$: files => this.importAppPartsService.importAppParts(files[0])
    };
    this.installerService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_services_installer_service__WEBPACK_IMPORTED_MODULE_7__.InstallerService);
    this.installSettingsService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_services_getting_started_service__WEBPACK_IMPORTED_MODULE_6__.AppInstallSettingsService);
    this.alreadyProcessing = false;
    // copied from 2sxc-ui app/installer
    // Initial Observable to monitor messages
    this.messages$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.fromEvent)(window, 'message').pipe(
    // Ensure only one installation is processed.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.filter)(() => !this.alreadyProcessing), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.filter)(evt => evt.origin === "https://2sxc.org"),
    // Get data from event.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.map)(evt => {
      try {
        return JSON.parse(evt.data);
      } catch (e) {
        console.error('error procesing message. Message was ' + evt.data, e);
        return void 0;
      }
    }),
    // Check if data is valid and the moduleID matches
    (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.filter)(data => data && Number(data.moduleId) === this.context.moduleId));
    // TODO:: @2dg Check with Daniel
    // TODO:: Old Code
    //  this.subscriptions.add(
    //   this.files$.subscribe(() => {
    //     console.log('files changed');
    //     if (this.result() !== undefined)
    //       this.result.set(undefined);
    //   }),
    // );
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.effect)(() => {
      this.files();
      if (this.result() != undefined) {
        this.result.set(undefined);
      }
    });
    // copied from 2sxc-ui app/installer
    this.subscriptions.add(this.installSettingsService.settings$.subscribe(settings => {
      this.settings = settings;
      this.remoteInstallerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(settings.remoteUrl);
      this.ready = true;
    }));
  }
  ngOnInit() {
    if (this.importData.files != null) {
      this.filesDropped(this.importData.files);
    }
    // copied from 2sxc-ui
    this.installSettingsService.loadGettingStarted(false); // Passed as input from 2sxc-ui
    // copied from 2sxc-ui app/installer
    this.subscriptions.add(this.messages$.pipe(
    // Verify it's for this action
    (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.filter)(data => data.action === 'specs'),
    // Send message to iframe
    (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.tap)(() => {
      const winFrame = this.installerWindow.nativeElement;
      const specsMsg = {
        action: 'specs',
        data: {
          //currently not used
          installedApps: this.settings.installedApps,
          //.map(app => ((app as InstalledApp).guid)),
          //currently used to forbid already installed apps
          rules: this.settings.installedApps.map(app => ({
            target: 'guid',
            appGuid: app.guid,
            mode: 'f',
            url: ''
          })) //this.settings.rules,
        }
      };
      const specsJson = JSON.stringify(specsMsg);
      winFrame.contentWindow.postMessage(specsJson, '*');
      console.log('debug: just sent specs message:' + specsJson, specsMsg, winFrame);
    })).subscribe());
    // copied from 2sxc-ui app/installer
    // Subscription to listen to 'install' messages
    this.subscriptions.add(this.messages$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.filter)(data => data.action === 'install'),
    // Get packages from data.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.map)(data => Object.values(data.packages)),
    // Show confirm dialog.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.filter)(packages => {
      const packagesDisplayNames = packages.reduce((t, c) => `${t} - ${c.displayName}\n`, '');
      const msg = `Do you want to install these packages?

${packagesDisplayNames}
This takes about 10 seconds per package. Don't reload the page while it's installing.`;
      return confirm(msg);
    }),
    // Install the packages one at a time
    (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.switchMap)(packages => {
      this.alreadyProcessing = true;
      this.showProgress = true;
      this.changeDetectorRef.detectChanges(); //without this spinner is not shown
      return this.installerService.installPackages(packages, p => this.currentPackage = p);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.tap)(() => {
      this.showProgress = false;
      this.changeDetectorRef.detectChanges(); //without this spinner is not removed (though window reload will remove it anyway) so maybe unnecessary
      alert('Installation complete 👍');
      window.top.location.reload();
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.catchError)(error => {
      console.error('Error: ', error);
      this.showProgress = false;
      this.alreadyProcessing = false;
      this.changeDetectorRef.detectChanges(); //without this spinner is not removed
      const errorMsg = `An error occurred: Package ${this.currentPackage.displayName}

${error.error?.Message ?? error.error?.message ?? ''}

${error.message}

Please try again later or check how to manually install content-templates: https://azing.org/2sxc/r/0O4OymoA`;
      alert(errorMsg);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(error);
    })).subscribe());
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  filesDropped(files) {
    this.setFiles(files);
    this.upload();
  }
  filesChanged(event) {
    const fileList = event.target.files;
    const files = Array.from(fileList);
    this.setFiles(files);
  }
  upload() {
    this.uploading.set(true);
    this.subscriptions.add(this.importData.upload$(this.files()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.take)(1)).subscribe({
      next: result => {
        this.uploading.set(false);
        this.result.set(result);
      },
      error: () => {
        this.uploading.set(false);
        this.result.set(undefined);
        this.snackBar.open('Upload failed. Please check console for more information', undefined, {
          duration: 3000
        });
      }
    }));
  }
  setFiles(files) {
    if (!this.importData.multiple) {
      files = files.slice(0, 1);
    }
    this.files.set(files);
  }
  static {
    this.ɵfac = function ImportAppPartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ImportAppPartsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_5__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: ImportAppPartsComponent,
      selectors: [["app-import-app-parts"]],
      viewQuery: function ImportAppPartsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.installerWindow = _t.first);
        }
      },
      hostVars: 1,
      hostBindings: function ImportAppPartsComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
      decls: 21,
      vars: 12,
      consts: [["fileInput", ""], ["appDragAndDrop", "", 1, "outer-container-app", 3, "filesDropped", "allowedFileTypes"], [3, "innerHtml"], ["mode", "indeterminate", "diameter", "20", "color", "accent"], ["mat-raised-button", "", "tippy", "Open file browser", 1, "select-btn", 3, "click", "disabled"], ["type", "file", "multiple", "", 1, "hide", 3, "change"], [1, "eav-result-container"], [1, "eav-dialog-actions", 2, "height", "73px"], [1, "sxc-message", "sxc-message-info"], [1, "sxc-message", "sxc-message-error"], [1, "sxc-message", 3, "ngClass"], ["mat-button", "", "tippy", "Import File", 1, "eav-button__with-icon", 3, "click", "disabled"], [1, "eav-icon"]],
      template: function ImportAppPartsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("filesDropped", function ImportAppPartsComponent_Template_div_filesDropped_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.filesDropped($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "safeHtml");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ImportAppPartsComponent_Conditional_5_Template, 1, 0, "mat-spinner", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "To import Content-Types, Queries, Views or Data, use the respective tabs.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Create an xml containing parts of the app, e.g. content and templates. Import parts from such an xml into this app. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "safeHtml");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div")(13, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportAppPartsComponent_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            const fileInput_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](fileInput_r2.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, ImportAppPartsComponent_Conditional_14_Template, 2, 0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](15, ImportAppPartsComponent_For_16_Template, 2, 1, "div", null, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "input", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ImportAppPartsComponent_Template_input_change_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.filesChanged($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, ImportAppPartsComponent_Conditional_19_Template, 5, 2, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, ImportAppPartsComponent_Conditional_20_Template, 6, 1, "mat-dialog-actions", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_9_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("allowedFileTypes", ctx.importData.allowedFileTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 8, ctx.importData.title), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx.uploading() ? 5 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 10, ctx.importData.description), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.uploading());
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](!ctx.files().length ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](ctx.files());
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx.result() ? 19 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](!((tmp_9_0 = ctx.result()) == null ? null : tmp_9_0.Success) ? 20 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogActions, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinner, _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__.SafeHtmlPipe, _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_3__.DragAndDropDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon],
      styles: [".eav-result-container[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  max-height: calc(100vh - 74px - 23px - 57px - 200px);\n  overflow-y: auto;\n}\n\n.eav-app-catalog-button[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.eav-app-catalog-iframe[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  width: 100%;\n  height: 500px;\n  border: none;\n}\n\n.eav-progress[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.8);\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n}\n.eav-progress[_ngcontent-%COMP%]   mat-progress-spinner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.eav-progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 48px;\n}\n\n.select-btn[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcG9ydC1hcHAtcGFydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG9EQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7QUFDSjtBQUVFO0VBQ0UsaUJBQUE7QUFBSjs7QUFJQTtFQUNFLG1CQUFBO0FBREYiLCJmaWxlIjoiaW1wb3J0LWFwcC1wYXJ0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lYXYtcmVzdWx0LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzRweCAtIDIzcHggLSA1N3B4IC0gMjAwcHgpO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5lYXYtYXBwLWNhdGFsb2ctYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG5cclxuLmVhdi1hcHAtY2F0YWxvZy1pZnJhbWUge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5lYXYtcHJvZ3Jlc3Mge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIG1hdC1wcm9ncmVzcy1zcGlubmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBsaW5lLWhlaWdodDogNDhweDtcclxuICB9XHJcbn1cclxuXHJcbi5zZWxlY3QtYnRuIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9pbXBvcnQtZXhwb3J0LW1lbnUvaW1wb3J0LWFwcC1wYXJ0cy9pbXBvcnQtYXBwLXBhcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxvREFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0FBQ0o7QUFFRTtFQUNFLGlCQUFBO0FBQUo7O0FBSUE7RUFDRSxtQkFBQTtBQURGO0FBQ0Esd21EQUF3bUQiLCJzb3VyY2VzQ29udGVudCI6WyIuZWF2LXJlc3VsdC1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDc0cHggLSAyM3B4IC0gNTdweCAtIDIwMHB4KTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uZWF2LWFwcC1jYXRhbG9nLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbn1cclxuXHJcbi5lYXYtYXBwLWNhdGFsb2ctaWZyYW1lIHtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZWF2LXByb2dyZXNzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VsZWN0LWJ0biB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 97214:
/*!*****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/copilot/copilot-specs.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CopilotSpecs: () => (/* binding */ CopilotSpecs)
/* harmony export */ });
const intro = `The Copilot provides tools to help you create code.
    It is still in new, so please use it carefully and report any issues.`;
const CopilotSpecs = {
  'data': {
    title: 'Data Copilot',
    breadcrumb: '2sxc Data Copilot',
    heading: '2sxc Data Copilot',
    intro,
    teaser: 'Autogenerate content types',
    outputType: 'DataModel'
  },
  'views': {
    title: 'Views Copilot',
    breadcrumb: '2sxc View Copilot',
    heading: '2sxc View Copilot',
    intro,
    teaser: 'Autogenerate Razor Views',
    outputType: 'RazorView'
  },
  'webApi': {
    title: 'WebApi Copilot',
    breadcrumb: '2sxc WebApi Copilot',
    heading: '2sxc WebApi Copilot',
    intro,
    teaser: 'Autogenerate WebApi Controllers',
    outputType: 'WebApi'
  }
};

/***/ }),

/***/ 99881:
/*!****************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/import-export-menu/import-export/import-export.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportExportComponent: () => (/* binding */ ImportExportComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);








class ImportExportComponent {
  constructor(router) {
    this.router = router;
  }
  linkToPage(link) {
    const currentPath = this.router.url.replace('/import-export', '');
    return `${currentPath}/${link}`;
  }
  static {
    this.ɵfac = function ImportExportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ImportExportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ImportExportComponent,
      selectors: [["app-import-export"]],
      decls: 93,
      vars: 9,
      consts: [[1, "outer-container-app"], [3, "routerLink"], ["mat-button", "", "tippy", "Go to Export App"], ["mat-button", "", "tippy", "Go to Data Bundles"], ["mat-button", "", "tippy", "Go to Export Parts"], ["mat-button", "", "tippy", "Go to Import Parts"], ["mat-button", "", "tippy", "Go to App-State Git Sync"]],
      template: function ImportExportComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Import Export");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "2sxc provides you with many import-export features for all kinds of scenarios.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Export/Import of Data Lists, Schemas, Views and Queries");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Before you continue here, you should know that some import/export features are directly available in other parts of the admin UI.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ol")(10, "li")(11, "strong")(12, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Lists of Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " can be exported / imported as XML (for editing in Excel) in the [data] section. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li")(16, "strong")(17, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Content-Types");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " can be exported and imported as JSON in the [data] section. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "strong")(22, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Views");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " can be exported and imported as JSON (with the template files) in the views section. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li")(26, "strong")(27, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Queries");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " can be exported and imported as JSON in the queries section. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "App Export / Import");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Apps are exported as a ZIP file which can be imported into another site as needed. Export happens here, import is done in the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "em");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Manage Apps");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " section. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 1)(38, "button", 2)(39, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "deployed_code_update");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Export App");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Data Bundles (beta)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Data Bundles are a new feature which allows you to export and import data from one app to another. This is very useful when you want to sync ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "only parts of the data/schema");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " from one environment to another. Bundles allow you to define what is in the bundle, and repeat the sync many times as the system changes. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "a", 1)(51, "button", 3)(52, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "dataset");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Data Bundles");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Export / Import Parts (old)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " This feature is the old way of exporting and importing parts of an app. It's still available, but we recommend using the new Data Bundles feature instead. The parts allow you to select some data and export it as XML, then re-import it elsewhere. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div")(61, "a", 1)(62, "button", 4)(63, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "cloud_download");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Export Parts");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "a", 1)(68, "button", 5)(69, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "cloud_upload");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Import Parts");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "App State Backup and Git Sync");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " This feature is for advanced users who want to backup the entire App State. The App State contains all the data, schema, views, queries and more. This allows you to: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "ol")(78, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Do backups, and reset your App to what was in that backup.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "When combined with Git, you can also reset the App to previous states.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "When combined with Git, you can also use it to transfer the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "complete App State");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " from one site to another.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "a", 1)(88, "button", 6)(89, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "sync");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "App State Git Sync");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.linkToPage("data/Default"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.linkToPage("data/Default"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.linkToPage("views"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.linkToPage("queries"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.linkToPage("export-app"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.linkToPage("data-bundles"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.linkToPage("export-parts"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.linkToPage("import-parts"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.linkToPage("app-state"));
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
      styles: ["a[_ngcontent-%COMP%] {\n  color: black;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcG9ydC1leHBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUFDRiIsImZpbGUiOiJpbXBvcnQtZXhwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9pbXBvcnQtZXhwb3J0LW1lbnUvaW1wb3J0LWV4cG9ydC9pbXBvcnQtZXhwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FBQ0Y7QUFDQSx3V0FBd1ciLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-projects_eav-ui_src_app_app-administration_app-administration_routing_ts.js.map