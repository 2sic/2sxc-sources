"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["default-projects_eav-ui_src_app_permissions_permissions_component_ts"],{

/***/ 77210:
/*!**************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/permissions/permissions-actions/permissions-actions.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionsActionsComponent: () => (/* binding */ PermissionsActionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);






class PermissionsActionsComponent {
  agInit(params) {
    this.params = params;
  }
  refresh(params) {
    return true;
  }
  deletePermission() {
    const permission = this.params.data;
    this.params.onDelete(permission);
  }
  static {
    this.ɵfac = function PermissionsActionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PermissionsActionsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PermissionsActionsComponent,
      selectors: [["app-permissions-actions"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 0,
      consts: [[1, "actions-component"], ["matRipple", "", "tippy", "Delete", 1, "eav-grid-action-button", "highlight", 3, "click"]],
      template: function PermissionsActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PermissionsActionsComponent_Template_div_click_1_listener() {
            return ctx.deletePermission();
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

/***/ 7549:
/*!**********************************************************************!*\
  !*** ./projects/eav-ui/src/app/permissions/permissions.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionsComponent: () => (/* binding */ PermissionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core */ 88692);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/edit-form.model */ 70334);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/routing/dialog-routing.service */ 60852);
/* harmony import */ var _permissions_actions_permissions_actions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./permissions-actions/permissions-actions.component */ 77210);
/* harmony import */ var _services_permissions_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/permissions.service */ 44900);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);






















class PermissionsComponent {
  #permissionsService;
  #dialogRoutes;
  #params;
  #prefills;
  constructor(dialog, snackBar) {
    this.dialog = dialog;
    this.snackBar = snackBar;
    this.gridOptions = this.buildGridOptions();
    this.permissions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.signal)([]);
    this.#permissionsService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_permissions_service__WEBPACK_IMPORTED_MODULE_9__.PermissionsService);
    this.#dialogRoutes = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_7__.DialogRoutingService);
    this.#params = (0,_core__WEBPACK_IMPORTED_MODULE_0__.convert)(this.#dialogRoutes.getParams(['targetType', 'keyType', 'key']), p => ({
      targetType: parseInt(p.targetType, 10),
      keyType: p.keyType,
      key: p.key
    }));
    this.#prefills = {
      [_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.metadata.language.targetType]: {
        PermissionType: 'language'
      }
    };
  }
  ngOnInit() {
    this.#fetchPermissions();
    this.#dialogRoutes.doOnDialogClosed(() => this.#fetchPermissions());
  }
  closeDialog() {
    this.dialog.close();
  }
  #fetchPermissions() {
    this.#permissionsService.getAll(this.#params.targetType, this.#params.keyType, this.#params.key).subscribe(permissions => {
      this.permissions.set(permissions);
    });
  }
  editPermission(permission) {
    let form;
    if (permission == null) {
      form = {
        items: [{
          ..._shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_5__.EditPrep.newMetadataFromInfo(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.contentTypes.permissions, _shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_5__.EditPrep.constructMetadataInfo(this.#params.targetType, this.#params.keyType, this.#params.key)),
          ...(this.#prefills[this.#params.targetType] && {
            Prefill: this.#prefills[this.#params.targetType]
          })
        }]
      };
    } else {
      form = {
        items: [_shared_models_edit_form_model__WEBPACK_IMPORTED_MODULE_5__.EditPrep.editId(permission.Id)]
      };
    }
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_4__.convertFormToUrl)(form);
    this.#dialogRoutes.navRelative([`edit/${formUrl}`]);
  }
  deletePermission(permission) {
    if (!confirm(`Delete '${permission.Title}' (${permission.Id})?`)) return;
    this.snackBar.open('Deleting...');
    this.#permissionsService.delete(permission.Id).subscribe(() => {
      this.snackBar.open('Deleted', null, {
        duration: 2000
      });
      this.#fetchPermissions();
    });
  }
  buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_2__.defaultGridOptions,
      columnDefs: [{
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_1__.ColumnDefinitions.Id,
        cellRendererParams: _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_1__.ColumnDefinitions.idFieldParamsTooltipGetter()
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_1__.ColumnDefinitions.TextWide,
        headerName: 'Name',
        field: 'Title',
        sort: 'asc',
        onCellClicked: params => {
          const permission = params.data;
          this.editPermission(permission);
        }
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_1__.ColumnDefinitions.TextWide,
        field: 'Identity'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_1__.ColumnDefinitions.TextWide,
        field: 'Condition'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_1__.ColumnDefinitions.Character,
        field: 'Grant'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_1__.ColumnDefinitions.ActionsPinnedRight1,
        cellRenderer: _permissions_actions_permissions_actions_component__WEBPACK_IMPORTED_MODULE_8__.PermissionsActionsComponent,
        cellRendererParams: (() => {
          const params = {
            onDelete: permission => this.deletePermission(permission)
          };
          return params;
        })()
      }]
    };
    return gridOptions;
  }
  static {
    this.ɵfac = function PermissionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PermissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: PermissionsComponent,
      selectors: [["app-permissions"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      decls: 15,
      vars: 2,
      consts: [[1, "eav-dialog", "nav-component-wrapper"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [1, "eav-dialog-content", "nav-component-wrapper"], [1, "grid-wrapper"], [1, "ag-theme-material", 3, "rowData", "gridOptions"], ["align", "end"], ["mat-fab", "", "mat-elevation-z24", "", "tippy", "Create a new permission", 1, "grid-fab", 3, "click"]],
      template: function PermissionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Permissions");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PermissionsComponent_Template_button_click_4_listener() {
            return ctx.closeDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "ag-grid-angular", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "mat-dialog-actions", 7)(12, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PermissionsComponent_Template_button_click_12_listener() {
            return ctx.editPermission(null);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rowData", ctx.permissions())("gridOptions", ctx.gridOptions);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterOutlet, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogActions, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_6__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_16__.AgGridAngular],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 80401:
/*!**************************************************************************!*\
  !*** ./projects/eav-ui/src/app/permissions/services/metadata.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataService: () => (/* binding */ MetadataService)
/* harmony export */ });
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


const webApiRoot = 'admin/metadata/get';
class MetadataService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__.HttpServiceBase {
  /**
   * Fetches metadata for given key in metadata content type
   * @param targetType type of target metadata item is for, e.g. for Entity, or ContentType
   * @param keyType e.g. for keyType === guid, key === contentTypeStaticName
   * @param key key of target metadata item is for
   * @param contentTypeName name of content type where permissions are stored. If blank, backend returns all metadata except permissions
   */
  getMetadata(targetType, keyType, key, contentTypeName) {
    return this.getHttp(webApiRoot, {
      params: {
        appId: this.appId,
        targetType: targetType.toString(),
        keyType,
        key: key.toString(),
        ...(contentTypeName && {
          contentType: contentTypeName
        })
      }
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵMetadataService_BaseFactory;
      return function MetadataService_Factory(__ngFactoryType__) {
        return (ɵMetadataService_BaseFactory || (ɵMetadataService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MetadataService)))(__ngFactoryType__ || MetadataService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MetadataService,
      factory: MetadataService.ɵfac
    });
  }
}

/***/ }),

/***/ 44900:
/*!*****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/permissions/services/permissions.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionsService: () => (/* binding */ PermissionsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_services_entity_edit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/entity-edit.service */ 96817);
/* harmony import */ var _metadata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata.service */ 80401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);






class PermissionsService {
  constructor() {
    this.metadataService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_metadata_service__WEBPACK_IMPORTED_MODULE_3__.MetadataService);
    this.entitiesService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_services_entity_edit_service__WEBPACK_IMPORTED_MODULE_2__.EntityEditService);
  }
  getAll(targetType, keyType, key) {
    return this.metadataService.getMetadata(targetType, keyType, key, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__.eavConstants.contentTypes.permissions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(metadata => metadata.Items));
  }
  delete(id) {
    return this.entitiesService.delete(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__.eavConstants.contentTypes.permissions, id, false);
  }
  static {
    this.ɵfac = function PermissionsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PermissionsService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: PermissionsService,
      factory: PermissionsService.ɵfac
    });
  }
}

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
//# sourceMappingURL=default-projects_eav-ui_src_app_permissions_permissions_component_ts.js.map