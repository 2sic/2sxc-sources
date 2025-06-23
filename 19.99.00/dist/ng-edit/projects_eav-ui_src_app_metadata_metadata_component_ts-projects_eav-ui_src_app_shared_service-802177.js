"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_metadata_metadata_component_ts-projects_eav-ui_src_app_shared_service-802177"],{

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

/***/ 3791:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/permissions/models/permission.model.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


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

/***/ 4979:
/*!*****************************************************************!*\
  !*** ./projects/eav-ui/src/app/shared/services/service-base.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceBase: () => (/* binding */ ServiceBase)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


/**
 * Base class for services - just to standardize use of subscriptions.
 * Has @Injectable() just to allow it ot use the standard OnDestroy interface.
 */
class ServiceBase {
  constructor() {
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subscription();
  }
  ngOnDestroy() {
    this.destroy();
  }
  // TODO: TRY TO GET RID OF THIS. AFAIK it's just used in the mask, which should switch over to signals.
  destroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function ServiceBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ServiceBase)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ServiceBase,
      factory: ServiceBase.ɵfac
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

/***/ 14937:
/*!****************************************************************!*\
  !*** ./projects/eav-ui/src/app/metadata/metadata.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataComponent: () => (/* binding */ MetadataComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ecodev/fab-speed-dial */ 23183);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core */ 88692);
/* harmony import */ var _content_items_services_content_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content-items/services/content-items.service */ 336);
/* harmony import */ var _features_shared_base_feature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/shared/base-feature.component */ 9006);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../permissions */ 4096);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/logging */ 34435);
/* harmony import */ var _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/models/edit-form.model */ 70334);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/pipes/safe-html.pipe */ 69914);
/* harmony import */ var _shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/routing/dialog-routing.service */ 60852);
/* harmony import */ var _shared_services_entity_edit_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/services/entity-edit.service */ 96817);
/* harmony import */ var _confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./confirm-delete-dialog/confirm-delete-dialog.component */ 36475);
/* harmony import */ var _metadata_actions_metadata_actions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./metadata-actions/metadata-actions.component */ 39787);
/* harmony import */ var _metadata_content_type_metadata_content_type_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./metadata-content-type/metadata-content-type.component */ 95883);
/* harmony import */ var _metadata_save_dialog_metadata_save_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./metadata-save-dialog/metadata-save-dialog.component */ 99309);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);


































const _c0 = a0 => ({
  "fab-opened": a0
});
function MetadataComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](0, " This item is not metadata for anything else. ");
  }
}
function MetadataComponent_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("Key Number: ", ctx_r0.itemFor().KeyNumber, " ");
  }
}
function MetadataComponent_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("Key Guid: ", ctx_r0.itemFor().KeyGuid, " ");
  }
}
function MetadataComponent_Conditional_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("Key String: ", ctx_r0.itemFor().KeyString, " ");
  }
}
function MetadataComponent_Conditional_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("Title: ", ctx_r0.itemFor().Title, " ");
  }
}
function MetadataComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](0, " This item is metadata for: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](5, MetadataComponent_Conditional_10_Conditional_5_Template, 2, 1)(6, MetadataComponent_Conditional_10_Conditional_6_Template, 2, 1)(7, MetadataComponent_Conditional_10_Conditional_7_Template, 2, 1)(8, MetadataComponent_Conditional_10_Conditional_8_Template, 2, 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("Target: ", ctx_r0.itemFor().Target, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("TargetType: ", ctx_r0.itemFor().TargetType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵconditional"](ctx_r0.itemFor().KeyNumber ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵconditional"](ctx_r0.itemFor().KeyGuid ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵconditional"](ctx_r0.itemFor().KeyString ? 7 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵconditional"](ctx_r0.itemFor().Title ? 8 : -1);
  }
}
function MetadataComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function MetadataComponent_Conditional_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r0.createMetadata());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
}
function MetadataComponent_Conditional_16_For_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](1, "safeHtml");
  }
  if (rf & 2) {
    const recommendation_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](1, 2, recommendation_r5.Icon), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeHtml"])("matBadgeHidden", recommendation_r5.Enabled);
  }
}
function MetadataComponent_Conditional_16_For_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function MetadataComponent_Conditional_16_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function MetadataComponent_Conditional_16_For_10_Template_button_click_0_listener() {
      const recommendation_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r0.createMetadata(recommendation_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, MetadataComponent_Conditional_16_For_10_Conditional_1_Template, 2, 4, "div", 19)(2, MetadataComponent_Conditional_16_For_10_Conditional_2_Template, 2, 0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const recommendation_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵattribute"]("label", recommendation_r5.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵconditional"](recommendation_r5.Icon ? 1 : 2);
  }
}
function MetadataComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "eco-fab-speed-dial", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("openChange", function MetadataComponent_Conditional_16_Template_eco_fab_speed_dial_openChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r0.openChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "eco-fab-speed-dial-trigger", 12)(2, "button", 13)(3, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "eco-fab-speed-dial-actions", 15)(6, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function MetadataComponent_Conditional_16_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r0.createMetadata());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](8, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrepeaterCreate"](9, MetadataComponent_Conditional_16_For_10_Template, 3, 2, "button", 17, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](3, _c0, ctx_r0.fabOpen()));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("spin", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r0.fabOpen() ? "close" : "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrepeater"](ctx_r0.recommendations());
  }
}
class MetadataComponent {
  #entitiesSvc;
  #metadataSvc;
  #contentItemSvc;
  #dialogRoutes;
  constructor(dialog, snackBar, matDialog, viewContainerRef, changeDetectorRef) {
    this.dialog = dialog;
    this.snackBar = snackBar;
    this.matDialog = matDialog;
    this.viewContainerRef = viewContainerRef;
    this.changeDetectorRef = changeDetectorRef;
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_7__.classLog)({
      MetadataComponent
    });
    this.#entitiesSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_services_entity_edit_service__WEBPACK_IMPORTED_MODULE_12__.EntityEditService);
    this.#metadataSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_permissions__WEBPACK_IMPORTED_MODULE_3__.MetadataService);
    this.#contentItemSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_content_items_services_content_items_service__WEBPACK_IMPORTED_MODULE_1__.ContentItemsService);
    this.#dialogRoutes = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_11__.DialogRoutingService);
    this.gridOptions = this.#buildGridOptions();
    this.fabOpen = (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.signal)(false);
    this.#params = (0,_core__WEBPACK_IMPORTED_MODULE_0__.convert)(this.#dialogRoutes.getParams(['targetType', 'keyType', 'key', 'title', 'contentTypeStaticName']), p => ({
      targetType: parseInt(p.targetType, 10),
      keyType: p.keyType,
      key: p.key,
      contentTypeStaticName: p.contentTypeStaticName
    }));
    // 2024-11-05 2dm: broken, must inform @2dg
    // itemFor = computed<EavForInAdminUi | undefined>(() => {
    //   const items = this.#contentItemSvc.getAllSig(this.#params.contentTypeStaticName, undefined)
    //   const item = items()?.find(i => i.Guid === this.#params.key);
    //   if (item?.For)
    //     return item.For;
    //   return undefined;
    // });
    // Signal to get itemFor - must be _outside_ the computed property, otherwise it regenerates infinitely
    this.#itemsFromHttp = this.#contentItemSvc.getAllSig(this.#params.contentTypeStaticName, /* initial: */null);
    this.itemFor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.computed)(() => {
      const item = this.#itemsFromHttp()?.find(i => i.Guid === this.#params.key);
      return item?.For ? item.For : undefined;
    });
    this.metadataSet = (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.signal)({
      Items: [],
      Recommendations: []
    });
    this.recommendations = (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.computed)(() => {
      const metadata = this.metadataSet();
      return metadata.Recommendations.filter(r => metadata.Items.filter(i => i._Type.Id === r.Id).length < r.Count);
    });
    this.title = (() => {
      try {
        return decodeURIComponent(this.#dialogRoutes.getParam('title') ?? '');
      } catch (e) {
        console.error('Couldn\'t properly decode title');
        return this.#dialogRoutes.getParam('title') ?? '';
      }
    })();
  }
  #params;
  // 2024-11-05 2dm: broken, must inform @2dg
  // itemFor = computed<EavForInAdminUi | undefined>(() => {
  //   const items = this.#contentItemSvc.getAllSig(this.#params.contentTypeStaticName, undefined)
  //   const item = items()?.find(i => i.Guid === this.#params.key);
  //   if (item?.For)
  //     return item.For;
  //   return undefined;
  // });
  // Signal to get itemFor - must be _outside_ the computed property, otherwise it regenerates infinitely
  #itemsFromHttp;
  ngOnInit() {
    this.#fetchMetadata();
    this.#dialogRoutes.doOnDialogClosed(() => this.#fetchMetadata());
  }
  closeDialog() {
    this.dialog.close();
  }
  openChange(open) {
    this.fabOpen.set(open);
  }
  createMetadata(recommendation) {
    if (recommendation) {
      // If the feature is not enabled, open the info dialog instead of metadata
      if (!recommendation.Enabled) {
        (0,_features_shared_base_feature_component__WEBPACK_IMPORTED_MODULE_2__.openFeatureDialog)(this.matDialog, recommendation.MissingFeature, this.viewContainerRef, this.changeDetectorRef);
        return;
      }
      // Feature is enabled, check if it's an empty metadata
      if (recommendation.CreateEmpty) {
        this.snackBar.open(`Creating ${recommendation.Name}...`);
        this.#entitiesSvc.create(recommendation.Id, {
          For: this.calculateItemFor('dummy').For
        }).subscribe({
          error: () => {
            this.snackBar.open(`Creating ${recommendation.Name} failed. Please check console for more info`, undefined, {
              duration: 3000
            });
            this.#fetchMetadata();
          },
          next: () => {
            this.snackBar.open(`Created ${recommendation.Name}`, undefined, {
              duration: 3000
            });
            this.#fetchMetadata();
          }
        });
      } else {
        // Default case - open new-metadata dialog
        this.createMetadataForm(recommendation.Id);
      }
      return;
    }
    const metadataDialogRef = this.matDialog.open(_metadata_save_dialog_metadata_save_dialog_component__WEBPACK_IMPORTED_MODULE_16__.MetadataSaveDialogComponent, {
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
      items: [this.calculateItemFor(contentType)]
    };
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_6__.convertFormToUrl)(form);
    this.#dialogRoutes.navRelative([`edit/${formUrl}`]);
    this.changeDetectorRef.markForCheck();
  }
  calculateItemFor(contentType) {
    const x = _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_8__.EditPrep.constructMetadataInfo(this.#params.targetType, this.#params.keyType, this.#params.key);
    return _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_8__.EditPrep.newMetadataFromInfo(contentType, x);
  }
  #fetchMetadata() {
    const logGetMetadata = this.log.rxTap('getMetadata');
    this.#metadataSvc.getMetadata(this.#params.targetType, this.#params.keyType, this.#params.key).pipe(logGetMetadata.pipe(), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(metadata => {
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
    .subscribe(data => {
      this.metadataSet.set(data);
    });
  }
  #editMetadata(metadata) {
    const form = {
      items: [_shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_8__.EditPrep.editId(metadata.Id)]
    };
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_6__.convertFormToUrl)(form);
    this.#dialogRoutes.navRelative([`edit/${formUrl}`]);
  }
  #deleteMetadata(metadata, confirmed = false) {
    if (!confirmed) {
      const data = {
        entityId: metadata.Id,
        entityTitle: metadata.Title,
        message: this.metadataSet().Recommendations.find(r => r.Id === metadata._Type.Id)?.DeleteWarning
      };
      const confirmationDialogRef = this.matDialog.open(_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_13__.ConfirmDeleteDialogComponent, {
        autoFocus: false,
        data,
        viewContainerRef: this.viewContainerRef,
        width: '400px'
      });
      confirmationDialogRef.afterClosed().subscribe(isConfirmed => {
        if (isConfirmed) this.#deleteMetadata(metadata, true);
      });
      return;
    }
    this.snackBar.open('Deleting...');
    this.#entitiesSvc.delete(metadata._Type.Id, metadata.Id, false).subscribe({
      next: () => {
        this.snackBar.open('Deleted', null, {
          duration: 2000
        });
        this.#fetchMetadata();
      },
      error: () => {
        this.snackBar.open('Delete failed. Please check console for more information', null, {
          duration: 3000
        });
      }
    });
  }
  #buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_5__.defaultGridOptions,
      columnDefs: [{
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_4__.ColumnDefinitions.IdWithDefaultRenderer,
        cellRendererParams: _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_4__.ColumnDefinitions.idFieldParamsTooltipGetter()
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_4__.ColumnDefinitions.TextWide,
        field: 'Title',
        onCellClicked: p => this.#editMetadata(p.data)
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_4__.ColumnDefinitions.TextWide,
        headerName: 'Content Type',
        field: 'ContentType',
        valueGetter: p => `${p.data._Type.Name}${p.data._Type.Title !== p.data._Type.Name ? ` (${p.data._Type.Title})` : ''}`,
        cellRenderer: _metadata_content_type_metadata_content_type_component__WEBPACK_IMPORTED_MODULE_15__.MetadataContentTypeComponent
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_4__.ColumnDefinitions.ActionsPinnedRight1,
        cellRenderer: _metadata_actions_metadata_actions_component__WEBPACK_IMPORTED_MODULE_14__.MetadataActionsComponent,
        cellRendererParams: (() => ({
          onDelete: metadata => this.#deleteMetadata(metadata)
        }))()
      }]
    };
    return gridOptions;
  }
  static {
    this.ɵfac = function MetadataComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MetadataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_17__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
      type: MetadataComponent,
      selectors: [["app-metadata"]],
      decls: 17,
      vars: 6,
      consts: [[1, "eav-dialog", "nav-component-wrapper"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [1, "eav-dialog-content", "nav-component-wrapper"], [1, "grid-wrapper"], [1, "ag-theme-material", 3, "rowData", "gridOptions"], ["align", "end"], ["mat-fab", "", "mat-elevation-z24", "", "tippy", "Create a new metadata for this item", 1, "grid-fab"], [1, "eav-eco-fab-speed-dial", 3, "ngClass"], ["mat-fab", "", "mat-elevation-z24", "", "tippy", "Create a new metadata for this item", 1, "grid-fab", 3, "click"], [1, "eav-eco-fab-speed-dial", 3, "openChange", "ngClass"], [3, "spin"], ["mat-fab", ""], [1, "spin180"], [1, "eav-eco-fab-speed-dial-actions"], ["mat-mini-fab", "", "label", "Other Content Type", 1, "eav-eco-fab-speed-dial-action-button", 3, "click"], ["mat-mini-fab", "", 1, "eav-eco-fab-speed-dial-action-button"], ["mat-mini-fab", "", 1, "eav-eco-fab-speed-dial-action-button", 3, "click"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadge", "\uD83D\uDC8E", "matBadgePosition", "below after", "aria-hidden", "false", 2, "color", "white", "fill", "white", 3, "innerHTML", "matBadgeHidden"]],
      template: function MetadataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function MetadataComponent_Template_button_click_4_listener() {
            return ctx.closeDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "div", 4)(8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](9, MetadataComponent_Conditional_9_Template, 1, 0)(10, MetadataComponent_Conditional_10_Template, 9, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](11, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](13, "ag-grid-angular", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "mat-dialog-actions", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](15, MetadataComponent_Conditional_15_Template, 3, 0, "button", 8)(16, MetadataComponent_Conditional_16_Template, 11, 5, "eco-fab-speed-dial", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx.title || "Metadata", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵconditional"](!ctx.itemFor() ? 9 : 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("rowData", ctx.metadataSet().Items)("gridOptions", ctx.gridOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵconditional"](ctx.recommendations().length === 0 ? 15 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵconditional"](ctx.recommendations().length > 0 ? 16 : -1);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatMiniFabButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterOutlet, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_9__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_25__.AgGridAngular, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogActions, _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_26__.EcoFabSpeedDialComponent, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgClass, _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_26__.EcoFabSpeedDialTriggerComponent, _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_26__.EcoFabSpeedDialActionsComponent, _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__.MatBadge, _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_10__.SafeHtmlPipe],
      styles: ["\n\n[_nghost-%COMP%]     .mat-button-wrapper div svg *:not([fill]) {\n  fill: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGFkYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLDRIQUFBO0FBQ0E7RUFDSSxXQUFBO0FBQUoiLCJmaWxlIjoibWV0YWRhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIHN0eWxlIGlzIHVzZWQgZm9yIHN2ZyBwYXRocyB0byBiZSBmaWxsZWQgd2l0aCB3aGl0ZSBhbmQgb3ZlcnJpZGUgZmlsbCBibGFjayBvbiBzdmdcclxuLyogVE9ETyhtZGMtbWlncmF0aW9uKTogVGhlIGZvbGxvd2luZyBydWxlIHRhcmdldHMgaW50ZXJuYWwgY2xhc3NlcyBvZiBidXR0b24gdGhhdCBtYXkgbm8gbG9uZ2VyIGFwcGx5IGZvciB0aGUgTURDIHZlcnNpb24uKi9cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXdyYXBwZXIgZGl2IHN2ZyAqOm5vdChbZmlsbF0pIHtcclxuICAgIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL21ldGFkYXRhL21ldGFkYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLDRIQUFBO0FBQ0E7RUFDSSxXQUFBO0FBQUo7QUFDQSxnckJBQWdyQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRoaXMgc3R5bGUgaXMgdXNlZCBmb3Igc3ZnIHBhdGhzIHRvIGJlIGZpbGxlZCB3aXRoIHdoaXRlIGFuZCBvdmVycmlkZSBmaWxsIGJsYWNrIG9uIHN2Z1xyXG4vKiBUT0RPKG1kYy1taWdyYXRpb24pOiBUaGUgZm9sbG93aW5nIHJ1bGUgdGFyZ2V0cyBpbnRlcm5hbCBjbGFzc2VzIG9mIGJ1dHRvbiB0aGF0IG1heSBubyBsb25nZXIgYXBwbHkgZm9yIHRoZSBNREMgdmVyc2lvbi4qL1xyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1idXR0b24td3JhcHBlciBkaXYgc3ZnICo6bm90KFtmaWxsXSkge1xyXG4gICAgZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
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
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
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
  constructor(dialogData, dialog) {
    this.dialogData = dialogData;
    this.dialog = dialog;
    this.hostClass = 'dialog-component';
  }
  closeDialog(confirm) {
    this.dialog.close(confirm);
  }
  static {
    this.ɵfac = function ConfirmDeleteDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ConfirmDeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ConfirmDeleteDialogComponent,
      selectors: [["app-confirm-delete-dialog"]],
      hostVars: 1,
      hostBindings: function ConfirmDeleteDialogComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
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
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.dialogData.message ? 4 : -1);
        }
      },
      dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_0__.SafeHtmlPipe],
      styles: [".eav-card-action-button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoiY29uZmlybS1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVhdi1jYXJkLWFjdGlvbi1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL21ldGFkYXRhL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy9jb25maXJtLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGO0FBQ0EsNFdBQTRXIiwic291cmNlc0NvbnRlbnQiOlsiLmVhdi1jYXJkLWFjdGlvbi1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
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
      }
    });
  }
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
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);






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
  static {
    this.ɵfac = function MetadataActionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MetadataActionsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MetadataActionsComponent,
      selectors: [["app-metadata-actions"]],
      decls: 4,
      vars: 0,
      consts: [[1, "actions-component"], ["matRipple", "", "tippy", "Delete", 1, "eav-grid-action-button", "highlight", 3, "click"]],
      template: function MetadataActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MetadataActionsComponent_Template_div_click_1_listener() {
            return ctx.deleteMetadata();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "delete");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
      encapsulation: 2
    });
  }
}

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
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_radio_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_ag-grid_column-definitions_ts-projects_eav-ui_src_app_-3cb379"), __webpack_require__.e("default-projects_eav-ui_src_app_permissions_permissions_component_ts"), __webpack_require__.e("projects_eav-ui_src_app_shared_services_entity_service_ts-projects_eav-ui_src_app_shared_serv-2e8433")]).then(__webpack_require__.bind(__webpack_require__, /*! ./permissions.component */ 7549));
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
  children: _edit_edit_routing__WEBPACK_IMPORTED_MODULE_2__.EditRoutes
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
      styles: [".hint-box[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], \n.hint-box[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: block;\n}\n.hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-hint[_ngcontent-%COMP%], \n.hint-box__short[_ngcontent-%COMP%]   .mat-mdc-form-field-error[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpZWxkLWhpbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7QUFDRTs7RUFFRSxlQUFBO0VBQ0EsY0FBQTtBQUNKO0FBR0k7O0VBRUUsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBRE4iLCJmaWxlIjoiZmllbGQtaGludC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaW50LWJveCB7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG5cclxuICAubWF0LW1kYy1mb3JtLWZpZWxkLWhpbnQsXHJcbiAgLm1hdC1tZGMtZm9ybS1maWVsZC1lcnJvciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICZfX3Nob3J0IHtcclxuICAgIC5tYXQtbWRjLWZvcm0tZmllbGQtaGludCxcclxuICAgIC5tYXQtbWRjLWZvcm0tZmllbGQtZXJyb3Ige1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZpZWxkLWhpbnQvZmllbGQtaGludC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjtBQUNFOztFQUVFLGVBQUE7RUFDQSxjQUFBO0FBQ0o7QUFHSTs7RUFFRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFETjtBQUNBLG8wQkFBbzBCIiwic291cmNlc0NvbnRlbnQiOlsiLmhpbnQtYm94IHtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcblxyXG4gIC5tYXQtbWRjLWZvcm0tZmllbGQtaGludCxcclxuICAubWF0LW1kYy1mb3JtLWZpZWxkLWVycm9yIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgJl9fc2hvcnQge1xyXG4gICAgLm1hdC1tZGMtZm9ybS1maWVsZC1oaW50LFxyXG4gICAgLm1hdC1tZGMtZm9ybS1maWVsZC1lcnJvciB7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
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
  static {
    this.route = {
      path: 'permissions/:targetType/:keyType/:key',
      loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_permissions_permissions_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./permissions.routing */ 43516)).then(m => m.permissionRoutes),
      // loadChildren: () => import('./permissions.module').then(m => m.PermissionsModule),
      data: {
        title: 'Permissions'
      }
    };
  }
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
  static {
    this.ɵfac = function MetadataContentTypeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MetadataContentTypeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MetadataContentTypeComponent,
      selectors: [["app-metadata-content-type"]],
      decls: 2,
      vars: 2,
      consts: [[1, "container", 3, "tippy"]],
      template: function MetadataContentTypeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tippy", ctx.metadata._Type.Description);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.value, "\n");
        }
      },
      dependencies: [_shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
      styles: [".container[_ngcontent-%COMP%] {\n  width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGFkYXRhLWNvbnRlbnQtdHlwZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoibWV0YWRhdGEtY29udGVudC10eXBlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL21ldGFkYXRhL21ldGFkYXRhLWNvbnRlbnQtdHlwZS9tZXRhZGF0YS1jb250ZW50LXR5cGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBQ0EsZ1dBQWdXIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _app_administration_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app-administration/services */ 75445);
/* harmony import */ var _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/field-hint/field-hint.component */ 43758);
/* harmony import */ var _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/constants/dropdown-insert-value.constant */ 5858);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/directives/click-stop-propagation.directive */ 39333);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 12587);






























const _c0 = a0 => ({
  "active": a0
});
function MetadataSaveDialogComponent_Conditional_11_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scopeOption_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", scopeOption_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", scopeOption_r1.name, " ");
  }
}
function MetadataSaveDialogComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 2)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Scope");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](4, MetadataSaveDialogComponent_Conditional_11_For_5_Template, 2, 2, "mat-option", 14, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Other...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "app-field-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " The scope should almost never be changed - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "see help");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", !ctx_r1.scopeOptions().length ? "No items found" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx_r1.scopeOptions());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r1.dropdownInsertValue);
  }
}
function MetadataSaveDialogComponent_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contentType_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", contentType_r3.NameId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", contentType_r3.Label, " ");
  }
}
function MetadataSaveDialogComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](1, MetadataSaveDialogComponent_Conditional_15_For_2_Template, 2, 2, "mat-option", 14, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", !((tmp_1_0 = ctx_r1.contentTypes()()) == null ? null : tmp_1_0.length) ? "No items found" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx_r1.contentTypes()());
  }
}
function MetadataSaveDialogComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 4);
  }
}
function MetadataSaveDialogComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-field-hint", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isError", true);
  }
}
class MetadataSaveDialogComponent {
  #contentTypesService;
  constructor(dialog) {
    this.dialog = dialog;
    this.hostClass = 'dialog-component';
    this.dropdownInsertValue = _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_3__.dropdownInsertValue;
    this.guidedContentType = true;
    this.advancedMode = false;
    this.#contentTypesService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_app_administration_services__WEBPACK_IMPORTED_MODULE_1__.ContentTypesService);
    this.scope = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.signal)(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants.scopes.default.value);
    this.scopeOptions = this.#contentTypesService.getScopesSig(undefined);
    this.contentTypes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.computed)(() => {
      const scope = this.scope();
      return this.#contentTypesService.getTypesSig(scope, undefined);
    });
  }
  ngOnInit() {
    this.buildForm();
  }
  closeDialog(contentType) {
    this.dialog.close(contentType);
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
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormGroup({});
    this.form.addControl('contentType', new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]));
    this.form.addControl('scope', new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants.scopes.default.value));
    this.form.controls.scope.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.startWith)(this.form.controls.scope.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)()).subscribe(newScope => {
      // reset content types when scope changes
      if (this.form.controls.contentType.value != null) {
        this.form.controls.contentType.patchValue(null);
      }
      // add new scope on manual entry
      if (newScope === _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_3__.dropdownInsertValue) {
        newScope = prompt('This is an advanced feature to show content-types of another scope. Don\'t use this if you don\'t know what you\'re doing, as content-types of other scopes are usually hidden for a good reason.') || _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants.scopes.default.value;
        if (!this.scopeOptions().some(option => option.value === newScope)) {
          const newScopeOption = {
            name: newScope,
            value: newScope
          };
          this.scopeOptions.set([newScopeOption, ...this.scopeOptions()]);
        }
        this.form.controls.scope.patchValue(newScope);
      } else {
        this.scope.set(newScope);
      }
    });
  }
  static {
    this.ɵfac = function MetadataSaveDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MetadataSaveDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: MetadataSaveDialogComponent,
      selectors: [["app-metadata-save-dialog"]],
      hostVars: 1,
      hostBindings: function MetadataSaveDialogComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
      decls: 33,
      vars: 14,
      consts: [["href", "https://go.2sxc.org/metadata", "target", "_blank"], [3, "formGroup"], ["color", "accent", 1, "eav-mat-form-field"], ["formControlName", "contentType", "required", "", 3, "placeholder"], ["matInput", "", "type", "text", "formControlName", "contentType", "required", ""], ["matTextSuffix", ""], ["mat-icon-button", "", "type", "button", "tippy", "Pick existing value", 3, "click", "ngClass"], ["mat-icon-button", "", "type", "button", "tippy", "Manual entry", 3, "click", "ngClass"], [3, "isError"], [1, "eav-card-actions"], ["color", "accent", 3, "change", "checked"], ["mat-raised-button", "", 1, "eav-card-action-button", 3, "click"], ["mat-raised-button", "", "color", "accent", 1, "eav-card-action-button", 3, "click", "disabled"], ["formControlName", "scope", 3, "placeholder"], [3, "value"], ["href", "https://2sxc.org/help?tag=scope", "target", "_blank", "appClickStopPropagation", ""]],
      template: function MetadataSaveDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-header")(2, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Create Metadata");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-card-subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " This is a special operation to add an item which is metadata for another item, see ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "docs");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, ". ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-card-content")(10, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, MetadataSaveDialogComponent_Conditional_11_Template, 12, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-form-field", 2)(13, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Content Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, MetadataSaveDialogComponent_Conditional_15_Template, 3, 1, "mat-select", 3)(16, MetadataSaveDialogComponent_Conditional_16_Template, 1, 0, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 5)(18, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MetadataSaveDialogComponent_Template_button_click_18_listener() {
            return ctx.toggleGuidedContentType(true);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MetadataSaveDialogComponent_Template_button_click_21_listener() {
            return ctx.toggleGuidedContentType(false);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "text_fields");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, MetadataSaveDialogComponent_Conditional_24_Template, 2, 1, "app-field-hint", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "mat-card-actions", 9)(26, "mat-slide-toggle", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function MetadataSaveDialogComponent_Template_mat_slide_toggle_change_26_listener($event) {
            return ctx.toggleAdvancedMode($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div")(29, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MetadataSaveDialogComponent_Template_button_click_29_listener() {
            return ctx.closeDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MetadataSaveDialogComponent_Template_button_click_31_listener() {
            return ctx.confirm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " Confirm ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.advancedMode && ctx.guidedContentType ? 11 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.guidedContentType ? 15 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](!ctx.guidedContentType ? 16 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](10, _c0, ctx.guidedContentType));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](12, _c0, !ctx.guidedContentType));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.form.controls.contentType.touched && (ctx.form.controls.contentType.errors == null ? null : ctx.form.controls.contentType.errors.required) ? 24 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx.advancedMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.advancedMode ? "Advanced" : "Simple", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.form.valid);
        }
      },
      dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOptionModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconButton, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__.MatSlideToggle, _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_2__.FieldHintComponent, _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_5__.ClickStopPropagationDirective],
      styles: [".eav-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.eav-card-action-button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGFkYXRhLXNhdmUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6Im1ldGFkYXRhLXNhdmUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVhdi1jYXJkLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZWF2LWNhcmQtYWN0aW9uLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL21ldGFkYXRhL21ldGFkYXRhLXNhdmUtZGlhbG9nL21ldGFkYXRhLXNhdmUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGO0FBQ0Esd2dCQUF3Z0IiLCJzb3VyY2VzQ29udGVudCI6WyIuZWF2LWNhcmQtYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5lYXYtY2FyZC1hY3Rpb24tYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_metadata_metadata_component_ts-projects_eav-ui_src_app_shared_service-802177.js.map