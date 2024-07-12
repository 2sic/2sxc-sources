"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["default-projects_eav-ui_src_app_permissions_permissions_component_ts"],{

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

/***/ 77210:
/*!**************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/permissions/permissions-actions/permissions-actions.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionsActionsComponent: () => (/* binding */ PermissionsActionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);





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
  static #_ = this.ɵfac = function PermissionsActionsComponent_Factory(t) {
    return new (t || PermissionsActionsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PermissionsActionsComponent,
    selectors: [["app-permissions-actions"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 0,
    consts: [[1, "actions-component"], ["matRipple", "", "tippy", "Delete", 1, "eav-grid-action-button", "highlight", 3, "click"]],
    template: function PermissionsActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionsActionsComponent_Template_div_click_1_listener() {
          return ctx.deletePermission();
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

/***/ 7549:
/*!**********************************************************************!*\
  !*** ./projects/eav-ui/src/app/permissions/permissions.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionsComponent: () => (/* binding */ PermissionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/base-with-child-dialog.component */ 61735);
/* harmony import */ var _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/id-field/id-field.component */ 36378);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/helpers/url-prep.helper */ 43216);
/* harmony import */ var _permissions_actions_permissions_actions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./permissions-actions/permissions-actions.component */ 77210);
/* harmony import */ var _services_permissions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/permissions.service */ 44900);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _services_metadata_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/metadata.service */ 80401);
/* harmony import */ var _content_items_services_entities_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../content-items/services/entities.service */ 57319);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);


























function PermissionsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Permissions");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PermissionsComponent_Conditional_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "ag-grid-angular", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "mat-dialog-actions", 7)(12, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PermissionsComponent_Conditional_0_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.editPermission(null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("rowData", ctx.permissions)("gridOptions", ctx_r1.gridOptions);
  }
}
class PermissionsComponent extends _shared_components_base_with_child_dialog_component__WEBPACK_IMPORTED_MODULE_0__.BaseWithChildDialogComponent {
  constructor(router, route, dialogRef, permissionsService, snackBar) {
    super(router, route);
    this.router = router;
    this.route = route;
    this.dialogRef = dialogRef;
    this.permissionsService = permissionsService;
    this.snackBar = snackBar;
    this.permissions$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject(undefined);
    this.gridOptions = this.buildGridOptions();
    this.targetType = parseInt(this.route.snapshot.paramMap.get('targetType'), 10);
    this.keyType = this.route.snapshot.paramMap.get('keyType');
    this.key = this.route.snapshot.paramMap.get('key');
    this.prefills = {
      [_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.metadata.language.targetType]: {
        PermissionType: 'language'
      }
    };
  }
  ngOnInit() {
    this.fetchPermissions();
    this.subscriptions.add(this.childDialogClosed$().subscribe(() => {
      this.fetchPermissions();
    }));
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.permissions$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.map)(([permissions]) => ({
      permissions
    })));
  }
  ngOnDestroy() {
    this.permissions$.complete();
    super.ngOnDestroy();
  }
  closeDialog() {
    this.dialogRef.close();
  }
  fetchPermissions() {
    this.permissionsService.getAll(this.targetType, this.keyType, this.key).subscribe(permissions => {
      this.permissions$.next(permissions);
    });
  }
  editPermission(permission) {
    let form;
    if (permission == null) {
      form = {
        items: [{
          ContentTypeName: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.contentTypes.permissions,
          For: {
            Target: Object.values(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.metadata).find(m => m.targetType === this.targetType)?.target ?? this.targetType.toString(),
            TargetType: this.targetType,
            ...(this.keyType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.keyTypes.guid && {
              Guid: this.key
            }),
            ...(this.keyType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.keyTypes.number && {
              Number: parseInt(this.key, 10)
            }),
            ...(this.keyType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.keyTypes.string && {
              String: this.key
            })
          },
          ...(this.prefills[this.targetType] && {
            Prefill: this.prefills[this.targetType]
          })
        }]
      };
    } else {
      form = {
        items: [{
          EntityId: permission.Id
        }]
      };
    }
    const formUrl = (0,_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_4__.convertFormToUrl)(form);
    this.router.navigate([`edit/${formUrl}`], {
      relativeTo: this.route
    });
  }
  deletePermission(permission) {
    if (!confirm(`Delete '${permission.Title}' (${permission.Id})?`)) {
      return;
    }
    this.snackBar.open('Deleting...');
    this.permissionsService.delete(permission.Id).subscribe(() => {
      this.snackBar.open('Deleted', null, {
        duration: 2000
      });
      this.fetchPermissions();
    });
  }
  buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_2__.defaultGridOptions,
      columnDefs: [{
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_7__.ColumnDefinitions.Id,
        cellRenderer: _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_1__.IdFieldComponent,
        cellRendererParams: (() => {
          const params = {
            tooltipGetter: permission => `ID: ${permission.Id}\nGUID: ${permission.Guid}`
          };
          return params;
        })()
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_7__.ColumnDefinitions.TextWide,
        headerName: 'Name',
        field: 'Title',
        sort: 'asc',
        onCellClicked: params => {
          const permission = params.data;
          this.editPermission(permission);
        }
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_7__.ColumnDefinitions.TextWide,
        field: 'Identity'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_7__.ColumnDefinitions.TextWide,
        field: 'Condition'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_7__.ColumnDefinitions.Character,
        field: 'Grant'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_7__.ColumnDefinitions.ActionsPinnedRight1,
        cellRenderer: _permissions_actions_permissions_actions_component__WEBPACK_IMPORTED_MODULE_5__.PermissionsActionsComponent,
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
  static #_ = this.ɵfac = function PermissionsComponent_Factory(t) {
    return new (t || PermissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_permissions_service__WEBPACK_IMPORTED_MODULE_6__.PermissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: PermissionsComponent,
    selectors: [["app-permissions"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵProvidersFeature"]([_services_permissions_service__WEBPACK_IMPORTED_MODULE_6__.PermissionsService, _services_metadata_service__WEBPACK_IMPORTED_MODULE_8__.MetadataService, _content_items_services_entities_service__WEBPACK_IMPORTED_MODULE_9__.EntitiesService]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [[1, "eav-dialog", "nav-component-wrapper"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [1, "eav-dialog-content", "nav-component-wrapper"], [1, "grid-wrapper"], [1, "ag-theme-material", 3, "rowData", "gridOptions"], ["align", "end"], ["mat-fab", "", "mat-elevation-z24", "", "tippy", "Create a new permission", 1, "grid-fab", 3, "click"]],
    template: function PermissionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, PermissionsComponent_Conditional_0_Template, 15, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterOutlet, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_20__.AsyncPipe, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_10__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_21__.AgGridAngular],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
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
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);







const webApiRoot = 'admin/metadata/get';
class MetadataService {
  constructor(http, context, dnnContext) {
    this.http = http;
    this.context = context;
    this.dnnContext = dnnContext;
  }
  /**
   * Fetches metadata for given key in metadata content type
   * @param targetType type of target metadata item is for, e.g. for Entity, or ContentType
   * @param keyType e.g. for keyType === guid, key === contentTypeStaticName
   * @param key key of target metadata item is for
   * @param contentTypeName name of content type where permissions are stored. If blank, backend returns all metadata except permissions
   */
  getMetadata(targetType, keyType, key, contentTypeName) {
    return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiRoot), {
      params: {
        appId: this.context.appId.toString(),
        targetType: targetType.toString(),
        keyType,
        key: key.toString(),
        ...(contentTypeName && {
          contentType: contentTypeName
        })
      }
    });
  }
  static #_ = this.ɵfac = function MetadataService_Factory(t) {
    return new (t || MetadataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_0__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_3__.Context));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MetadataService,
    factory: MetadataService.ɵfac
  });
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
/* harmony import */ var _content_items_services_entities_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../content-items/services/entities.service */ 57319);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _metadata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata.service */ 80401);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ 34447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);







class PermissionsService {
  constructor(entitiesService) {
    this.entitiesService = entitiesService;
    this.metadataService = (0,_core__WEBPACK_IMPORTED_MODULE_3__.transient)(_metadata_service__WEBPACK_IMPORTED_MODULE_2__.MetadataService);
  }
  getAll(targetType, keyType, key) {
    return this.metadataService.getMetadata(targetType, keyType, key, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__.eavConstants.contentTypes.permissions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(metadata => metadata.Items));
  }
  delete(id) {
    return this.entitiesService.delete(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__.eavConstants.contentTypes.permissions, id, false);
  }
  static #_ = this.ɵfac = function PermissionsService_Factory(t) {
    return new (t || PermissionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_content_items_services_entities_service__WEBPACK_IMPORTED_MODULE_0__.EntitiesService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: PermissionsService,
    factory: PermissionsService.ɵfac
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

/***/ })

}]);
//# sourceMappingURL=default-projects_eav-ui_src_app_permissions_permissions_component_ts.js.map